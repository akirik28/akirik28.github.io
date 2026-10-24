/* Kitpath not defteri · cb203 · 2.3 Türevi Tahmin Etmek
   Kaynak: ap-videolar/src/episodes/cb203 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb203",
  amac: "Bu konu türevi formül olmadan tahmin etmeyi anlatıyor: tablodan en dar aralığın eğimiyle, grafikten teğet çizerek ve hesap makinesinin sayısal türev komutuyla. Ayrıca f ile f′ grafiğini ayırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Tablodan türev tahmini",
      kisa: "Noktayı içine alan en dar aralığın eğimi, türevin tahminidir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🔋",
          baslik: "Şarj ne hızla azalıyor?",
          metin: "Telefonun şarjı gün boyu birkaç kez not edilmiş; elinde formül yok, yalnızca bir tablo. Saat tam 6'da şarj ne hızla azalıyordu? Sonsuz yakın nokta olmadığı için limit alamazsın, ama en yakın iki ölçümle türevi tahmin edebilirsin."
        },
        {
          tip: "tablo",
          baslik: "Şarj ölçümleri",
          head: [
            "t (saat)",
            "0",
            "2",
            "5",
            "7",
            "10"
          ],
          rows: [
            [
              "B(t) (%)",
              "100",
              "88",
              "67",
              "55",
              "31"
            ]
          ]
        },
        {
          tip: "grafik",
          baslik: "Şarj ölçümleri ve 5–7 aralığı",
          xlabel: "t (saat)",
          ylabel: "% şarj",
          xmax: 10,
          ymax: 100,
          xticks: [
            { v: 2, label: "2" },
            { v: 5, label: "5" },
            { v: 6, label: "6" },
            { v: 7, label: "7" },
            { v: 10, label: "10" }
          ],
          yticks: [
            { v: 50, label: "50" },
            { v: 100, label: "100" }
          ],
          ogeler: [
            { id: "b0", tip: "nokta", x: 0, y: 100 },
            { id: "b1", tip: "nokta", x: 2, y: 88 },
            { id: "b2", tip: "nokta", x: 5, y: 67 },
            { id: "b3", tip: "nokta", x: 7, y: 55 },
            { id: "b4", tip: "nokta", x: 10, y: 31 },
            {
              id: "t6",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [6, 0],
              to: [6, 100],
              gizli: true
            },
            {
              id: "sec",
              tip: "cizgi",
              renk: 1,
              from: [4, 73],
              to: [8, 49],
              gizli: true
            },
            {
              id: "sl",
              tip: "yazi",
              x: 3.2,
              y: 95,
              metin: "eğim ≈ (55 − 67)/(7 − 5) = −6",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Beş ölçüm, formül yok. t = 6'daki hızı bilmek istiyoruz." },
            {
              metin: "6'yı içine alan en dar aralık: 5 ile 7.",
              goster: [
                "t6"
              ]
            },
            {
              metin: "Bu iki ölçümü birleştiren *secant*'ın eğimi: ==−6 %/saat==. Türevin tahmini bu.",
              goster: [
                "sec",
                "sl"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "B′(6) ≈ ?",
          durum: "Tabloya göre saat 6'da şarjın değişim hızını tahmin et; sonra 5. saat için de dene.",
          adimlar: [
            "6'yı içine alan en dar aralık [5, 7]: B(5) = 67, B(7) = 55.",
            "Eğim: (55 − 67) / (7 − 5) = −12 / 2 = −6.",
            "Cümle: saat 6'da şarj, saatte yaklaşık %6 hızla azalıyor. Birim: % / saat.",
            "Nokta tablonun içindeyse (t = 5) iki komşusunu kullan: (55 − 88) / (7 − 2) = −33 / 5 = −6,6."
          ],
          sonuc: "B′(6) ≈ ==−6 %/saat== (eksi: azalıyor); B′(5) ≈ −6,6 %/saat."
        }
      ]
    },
    {
      baslik: "Kurallar: en dar aralık, sıçrama, yaklaşıklık",
      kisa: "En dar aralığı seç, sıçramayı atlama, cevabı yaklaşık (≈) yaz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎯",
              terim: "Estimate",
              tr: "tahmin",
              tanim: "Tablodan ya da grafikten bulunan yaklaşık türev. Cevap ≈ ile yazılır.",
              ornek: "B′(6) ≈ −6."
            },
            {
              ikon: "➗",
              terim: "Difference quotient",
              tr: "fark bölümü",
              tanim: "(f(b) − f(a)) / (b − a). Aralıklar eşit olmak zorunda değil; payda gerçek farktır.",
              ornek: "(55 − 67) / (7 − 5)."
            },
            {
              ikon: "✅",
              terim: "Differentiable",
              tr: "türevlenebilir",
              tanim: "Tahmin, f'nin o aralıkta türevlenebilir (sürekli ve pürüzsüz) olduğuna dayanır.",
              ornek: "Sıçrama varsa tahmin geçersizdir."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Sıçramanın iki yanı",
          xlabel: "x",
          ylabel: "y",
          xmax: 9,
          ymax: 6,
          xticks: [
            { v: 3, label: "3" },
            { v: 5, label: "5" },
            { v: 6, label: "6" },
            { v: 7, label: "7" }
          ],
          ogeler: [
            { id: "sol", tip: "egri", renk: 0, noktalar: [[1, 0], [2, 0.8], [3, 1.4], [4, 1.8], [5, 2.05], [6, 2.2]] },
            { id: "sag", tip: "cizgi", renk: 0, from: [6, 5], to: [8, 4] },
            { id: "oc", tip: "yazi", x: 6, y: 2, metin: "○" },
            { id: "fc", tip: "nokta", x: 6, y: 5 },
            {
              id: "yan",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [5, 2.05],
              to: [7, 4.5],
              gizli: true
            },
            {
              id: "ty",
              tip: "yazi",
              x: 1,
              y: 4.8,
              metin: "YANLIŞ: sıçramayı kesiyor",
              hiza: "start",
              gizli: true
            },
            {
              id: "a",
              tip: "nokta",
              x: 3,
              y: 1.4,
              gizli: true
            },
            {
              id: "b",
              tip: "nokta",
              x: 5,
              y: 2.05,
              gizli: true
            },
            {
              id: "ds",
              tip: "cizgi",
              renk: 1,
              from: [2, 1.075],
              to: [6, 2.375],
              gizli: true
            },
            {
              id: "td",
              tip: "yazi",
              x: 1,
              y: 4.8,
              metin: "DOĞRU: aynı parçadan iki nokta",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "x = 6'da grafik sıçrıyor: soldaki parça 2,2'ye ulaşıyor (içi boş), sağdaki parça 5'ten başlıyor." },
            {
              metin: "5 ile 7'yi birleştirmek sıçramayı kesen bir eğim verir; bu eğim türevi temsil etmez.",
              goster: [
                "yan",
                "ty"
              ]
            },
            {
              metin: "Aynı parçadaki iki noktayı kullan: 3 ile 5.",
              gizle: [
                "yan",
                "ty"
              ],
              goster: [
                "a",
                "b",
                "ds",
                "td"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          metin: "Sıçrama varken tablo ya da grafikten türev tahmini yapılmaz.",
          yanlis: "Sıçramanın iki yanındaki noktaları birleştirip eğimi tahmin etmek.",
          dogru: "==Aynı parçadaki== iki nokta kullan. Tahmin, fonksiyonun o aralıkta türevlenebilir olduğunu varsayar."
        }
      ]
    },
    {
      baslik: "Grafikten tahmin: teğeti çiz",
      kisa: "Teğet üzerinde iki ızgara noktası seç; eğim = yükseklik farkı ÷ yatay fark.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Teğeti çiz, iki ızgara noktası seç",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 7,
          xticks: [
            { v: 2, label: "2" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 3, label: "3" },
            { v: 5, label: "5" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [[0, 1.84], [0.5, 2.16], [1, 2.46], [1.5, 2.74], [2, 3], [2.5, 3.24], [3, 3.46], [3.5, 3.66], [4, 3.84], [4.5, 4], [5, 4.14], [5.5, 4.26], [6, 4.36], [6.5, 4.44], [7, 4.5], [7.5, 4.54], [8, 4.56]]
            },
            {
              id: "a",
              tip: "nokta",
              x: 2,
              y: 3,
              etiket: "(2, 3)",
              gizli: true
            },
            {
              id: "tg",
              tip: "cizgi",
              renk: 1,
              from: [0, 2],
              to: [7, 5.5],
              gizli: true
            },
            {
              id: "b",
              tip: "nokta",
              x: 6,
              y: 5,
              etiket: "(6, 5)",
              gizli: true
            },
            {
              id: "run",
              tip: "ok",
              renk: 2,
              from: [2, 3],
              to: [6, 3],
              gizli: true
            },
            {
              id: "rise",
              tip: "ok",
              renk: 2,
              from: [6, 3],
              to: [6, 5],
              gizli: true
            },
            {
              id: "rl",
              tip: "yazi",
              x: 4,
              y: 2.5,
              metin: "4",
              gizli: true
            },
            {
              id: "ul",
              tip: "yazi",
              x: 6.3,
              y: 4,
              metin: "2",
              hiza: "start",
              gizli: true
            },
            {
              id: "sl",
              tip: "yazi",
              x: 0.3,
              y: 6.3,
              metin: "f′(2) ≈ 2/4 = 1/2",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Artan bir eğri. x = 2'deki türevi tahmin edeceğiz." },
            {
              metin: "x = 2'de teğeti göz kararı çiz.",
              goster: [
                "a",
                "tg"
              ]
            },
            {
              metin: "Teğet üzerinde ızgaraya denk gelen ikinci bir nokta seç: (6, 5). Yatay fark 4, dikey fark 2.",
              goster: [
                "b",
                "run",
                "rise",
                "rl",
                "ul"
              ]
            },
            {
              metin: "Eğim = yükseklik farkı ÷ yatay fark = 2/4: f′(2) ≈ ==1/2==.",
              goster: [
                "sl"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kırık çizgi grafik",
          durum: "Grafik (0, 1) → (3, 4) → (6, 1) noktalarını birleştiren iki doğru parçası. Her parçada türev kaçtır?",
          adimlar: [
            "Doğru parçasında türev, o parçanın eğiminin ta kendisidir.",
            "İlk parça: (4 − 1) / (3 − 0) = 1.",
            "İkinci parça: (1 − 4) / (6 − 3) = −1.",
            "x = 3 köşedir: soldan ve sağdan eğim farklı."
          ],
          sonuc: "x < 3 için ==1==, x > 3 için ==−1==."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "✂️",
              terim: "Secant line",
              tr: "kesen doğru",
              tanim: "Tablodaki iki ölçümü birleştiren doğru. Eğimi türev tahminidir.",
              ornek: "5 ve 7. saatler arasında eğim −6."
            },
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğru",
              tanim: "Grafikte noktaya dokunan doğru. Eğimi türevin kendisidir; göz kararı çizilir.",
              ornek: "x = 2'de teğet (2, 3) ve (6, 5) noktalarından geçiyor."
            }
          ]
        }
      ]
    },
    {
      baslik: "Eğimlerden f′ grafiğini çizmek",
      kisa: "f artarken f′ pozitif, azalırken negatif; tepe ve çukurda sıfır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = x³ − 3x: teğet eğimlerini oku",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 8,
          xticks: [
            { v: 0.5, label: "−2" },
            { v: 1.5, label: "−1" },
            { v: 2.5, label: "0" },
            { v: 3.5, label: "1" },
            { v: 4.5, label: "2" }
          ],
          yticks: [
            { v: 0, label: "−4" },
            { v: 4, label: "0" },
            { v: 8, label: "4" }
          ],
          ogeler: [
            {
              id: "xa",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0, 4],
              to: [5, 4]
            },
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [[0.4, 1.039], [0.7, 3.568], [1, 5.125], [1.3, 5.872], [1.6, 5.971], [1.9, 5.584], [2.2, 4.873], [2.5, 4], [2.8, 3.127], [3.1, 2.416], [3.4, 2.029], [3.7, 2.128], [4, 2.875], [4.3, 4.432], [4.6, 6.961]]
            },
            { id: "pt", tip: "nokta", x: 0.5, y: 2 },
            { id: "tg", tip: "cizgi", renk: 1, from: [0.3, 0.2], to: [0.7, 3.8] },
            { id: "sl", tip: "yazi", x: 2.5, y: 7.6, metin: "x = −2: eğim = 9" }
          ],
          durumlar: [
            { metin: "x = −2'de grafik dik yükseliyor: eğim ==9==." },
            {
              metin: "x = −1 tepe noktası: teğet yatay, eğim ==0==.",
              set: {
                pt: { x: 1.5, y: 6 },
                tg: { from: [0.8, 6], to: [2.2, 6] },
                sl: { metin: "x = −1: eğim = 0" }
              }
            },
            {
              metin: "x = 0'da grafik aşağı iniyor: eğim ==−3==.",
              set: {
                pt: { x: 2.5, y: 4 },
                tg: { from: [1.7, 6.4], to: [3.3, 1.6] },
                sl: { metin: "x = 0: eğim = −3" }
              }
            },
            {
              metin: "x = 1 çukur: teğet yatay, eğim ==0==.",
              set: {
                pt: { x: 3.5, y: 2 },
                tg: { from: [2.8, 2], to: [4.2, 2] },
                sl: { metin: "x = 1: eğim = 0" }
              }
            },
            {
              metin: "x = 2'de yine dik yükseliş: eğim ==9==.",
              set: {
                pt: { x: 4.5, y: 6 },
                tg: { from: [4.3, 4.2], to: [4.7, 7.8] },
                sl: { metin: "x = 2: eğim = 9" }
              }
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Bu eğimlerden f′ grafiği",
          xlabel: "x",
          ylabel: "f′(x)",
          xmax: 5,
          ymax: 14,
          xticks: [
            { v: 0.5, label: "−2" },
            { v: 1.5, label: "−1" },
            { v: 2.5, label: "0" },
            { v: 3.5, label: "1" },
            { v: 4.5, label: "2" }
          ],
          yticks: [
            { v: 0, label: "−3" },
            { v: 3, label: "0" },
            { v: 12, label: "9" }
          ],
          ogeler: [
            {
              id: "xa",
              tip: "cizgi",
              renk: 3,
              kesik: true,
              from: [0, 3],
              to: [5, 3]
            },
            {
              id: "p1",
              tip: "nokta",
              x: 0.5,
              y: 12,
              etiket: "9",
              gizli: true
            },
            {
              id: "p2",
              tip: "nokta",
              x: 1.5,
              y: 3,
              etiket: "0",
              gizli: true
            },
            {
              id: "p3",
              tip: "nokta",
              x: 2.5,
              y: 0,
              etiket: "−3",
              gizli: true
            },
            {
              id: "p4",
              tip: "nokta",
              x: 3.5,
              y: 3,
              etiket: "0",
              gizli: true
            },
            {
              id: "p5",
              tip: "nokta",
              x: 4.5,
              y: 12,
              etiket: "9",
              gizli: true
            },
            {
              id: "c",
              tip: "egri",
              renk: 1,
              etiket: "f′",
              noktalar: [[0.4, 13.23], [0.7, 9.72], [1, 6.75], [1.3, 4.32], [1.6, 2.43], [1.9, 1.08], [2.2, 0.27], [2.5, 0], [2.8, 0.27], [3.1, 1.08], [3.4, 2.43], [3.7, 4.32], [4, 6.75], [4.3, 9.72], [4.6, 13.23]],
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Üstte okuduğun eğimleri alt eksene taşı. Kesikli çizgi gerçek x ekseni. x = −2'de eğim 9.",
              goster: [
                "p1"
              ]
            },
            {
              metin: "x = −1'de eğim 0 (tepe).",
              goster: [
                "p2"
              ]
            },
            {
              metin: "x = 0'da eğim −3.",
              goster: [
                "p3"
              ]
            },
            {
              metin: "x = 1'de eğim 0 (çukur).",
              goster: [
                "p4"
              ]
            },
            {
              metin: "x = 2'de eğim 9.",
              goster: [
                "p5"
              ]
            },
            {
              metin: "Noktaları birleştirince bir parabol çıkıyor: f′ grafiği. f artarken eksenin üstünde, azalırken altında; tepe ve çukurda ekseni kesiyor (işaret değiştiriyor).",
              goster: [
                "c"
              ]
            }
          ]
        },
        {
          tip: "tablo",
          head: [
            "f grafiği",
            "f′ işareti",
            "f′ grafiği"
          ],
          rows: [
            [
              "Artıyor",
              "+",
              "Eksenin üstünde"
            ],
            [
              "Azalıyor",
              "−",
              "Eksenin altında"
            ],
            [
              "Tepe ya da çukur",
              "0",
              "Ekseni kesiyor"
            ]
          ]
        }
      ]
    },
    {
      baslik: "f mi, f′ mi? Grafiğin başlığını oku",
      kisa: "f′ grafiğinde y değeri yükseklik değil, f'nin eğimidir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📉",
              terim: "Graph of f′",
              tr: "türevin grafiği",
              tanim: "y değerleri f'nin eğimleridir; f′ > 0 ise f artıyor, f′ < 0 ise azalıyor.",
              ornek: "f′ grafiği x = 3'te −2'den geçiyorsa f'nin eğimi −2."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(3) = 5 ve f′ grafiği (3, −2)'den geçiyor",
          durum: "x = 3'teki teğet doğrusunu bul.",
          adimlar: [
            "f′ grafiğindeki −2 bir yükseklik değil, f'nin x = 3'teki eğimidir.",
            "Nokta f'den: (3, 5).",
            "Nokta-eğim: y − 5 = −2(x − 3)."
          ],
          sonuc: "Teğet: ==y − 5 = −2(x − 3)==."
        },
        {
          tip: "tuzak",
          metin: "Grafiğin başlığını okumadan tek sayı yazma.",
          yanlis: "Grafik f′ ise teğetin noktası (3, −2).",
          dogru: "Önce ==f mi, f′ mi?== diye bak. f′ grafiğinden okunan sayı eğimdir; nokta her zaman f'den gelir."
        }
      ]
    },
    {
      baslik: "Hesap makinesi: sayısal türev",
      kisa: "Makine küçük simetrik aralığın eğimini verir; formülü vermez.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔢",
              terim: "Numerical derivative",
              tr: "sayısal türev",
              tanim: "Grafik hesap makinesinin d/dx komutu: bir noktadaki türevi sayı olarak verir.",
              ornek: "ln(x² + 1) için x = 2'de 0,8."
            },
            {
              ikon: "🧮",
              terim: "Calculator active",
              tr: "hesap makineli bölüm",
              tanim: "AP'nin hesap makinesinin serbest olduğu bölüm. Ondalık cevaplar virgülden sonra üç basamak doğru yazılır (yuvarlanarak ya da kesilerek).",
              ornek: "0,80472… → 0,805."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "ln(x² + 1)'in x = 2'deki türevi",
          durum: "Hesap makinesi bu sayıyı nasıl buluyor?",
          adimlar: [
            "Komut: d/dx ln(x² + 1) |x = 2 → 0,8.",
            "Arka planda küçük simetrik aralığın eğimi: [f(2,001) − f(1,999)] / 0,002.",
            "Sonuç 0,8000000… çıkar (kontrol: tam değer 4/5).",
            "Makine bir sayı verir, türevin formülünü vermez."
          ],
          sonuc: "x = 2'de türev ==0,8==."
        },
        {
          tip: "ornek",
          baslik: "AP örneği: x eksenini kestiği noktada eğim",
          durum: "y = 5 − e^(2x) grafiği x eksenini tek bir noktada kesiyor. O noktada grafiğin eğimi kaçtır? (hesap makinesi serbest)",
          adimlar: [
            "y = 0 koy: 5 − e^(2x) = 0 → kesişim x ≈ 0,805 (makineyle bul).",
            "Değeri makinede sakla: yuvarlama hatası olmasın.",
            "d/dx (5 − e^(2x)) komutunu bu x'te çalıştır.",
            "Sonuç −10: grafik orada aşağı iniyor, eksi işaret mantıklı."
          ],
          sonuc: "Eğim ==−10==. Ondalıklı bir sonuç çıksaydı virgülden sonra üç basamak yazmalıydın."
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
            "Tablodan: noktayı içine alan en dar aralığın eğimi (f(b) − f(a)) / (b − a); cevap yaklaşıktır (≈).",
            "Aralıklar eşit olmak zorunda değil, payda gerçek fark. Nokta tablonun içindeyse iki komşusunu kullan.",
            "Birim: çıktı birimi bölü girdi birimi; cümleyi tam kur.",
            "Sıçramanın üstünden atlama; tahmin türevlenebilirlik ister.",
            "Grafikten: teğeti çiz, üzerindeki iki ızgara noktasıyla eğimi oku. Doğru parçasında türev, parçanın eğimidir.",
            "f artarken f′ > 0, azalırken f′ < 0, tepe ve çukurda f′ = 0.",
            "Grafik f′ ise y değeri eğimdir; teğetin noktası f'den gelir.",
            "Hesap makinesi: önce kesişimi sakla, sonra sayısal türev; ondalık cevaplar virgülden sonra üç basamak."
          ]
        }
      ]
    }
  ]
};
