/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-calcbc-u2.json) */
window.DENEME = {
  "store": "calcbc-u2:v1:",
  "course": "AP Calculus BC",
  "unit": "Unit 2 — Differentiation: Definition and Fundamental Properties",
  "topics": {
    "2.1": "Ortalama ve Anlık Değişim Hızı",
    "2.2": "Türevin Tanımı ve Gösterimleri",
    "2.3": "Türevi Tahmin Etmek",
    "2.4": "Türevlenebilirlik ve Süreklilik",
    "2.5": "Kuvvet Kuralı",
    "2.6": "Temel Türev Kuralları",
    "2.7": "sin x, cos x, eˣ ve ln x'in Türevleri",
    "2.8": "Çarpım Kuralı",
    "2.9": "Bölüm Kuralı",
    "2.10": "tan x, cot x, sec x ve csc x'in Türevleri"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "2.1",
          "q": "Let f(x) = x² + 3x. What is the average rate of change of f over the interval 1 ≤ x ≤ 4?",
          "o": [
            "5",
            "8",
            "11",
            "24"
          ],
          "a": 1,
          "w": "*Average rate of change* = [f(4) − f(1)]/(4 − 1) = (28 − 4)/3 = 8; yani (1, 4) ve (4, 28) noktalarından geçen *secant line*'ın eğimi. 24, farkı aralığın uzunluğuna bölmeyi unutur. 5 ve 11, f′(x) = 2x + 3'ün uç noktalardaki değerleri: bunlar anlık değişim hızları, ortalama değil."
        },
        {
          "t": "2.1",
          "q": "The graph of the function f, consisting of three line segments, is shown. The segments join the points (0, 1), (2, 5), (4, 4), and (6, 7). What is the average rate of change of f over the interval 2 ≤ x ≤ 6?",
          "o": [
            "−1/2",
            "1/2",
            "1",
            "3/2"
          ],
          "a": 1,
          "w": "Ortalama değişim hızı yalnızca uç noktalara bakar: [f(6) − f(2)]/(6 − 2) = (7 − 5)/4 = 1/2. Aradaki inişin önemi yok. −1/2 ortadaki parçanın, 3/2 son parçanın eğimi; 1 ise [0, 6] aralığının ortalaması.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 8,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  2,
                  5
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  5
                ],
                "to": [
                  4,
                  4
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  4
                ],
                "to": [
                  6,
                  7
                ],
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 5,
                "label": "(2, 5)"
              },
              {
                "q": 4,
                "p": 4,
                "label": "(4, 4)"
              },
              {
                "q": 6,
                "p": 7,
                "label": "(6, 7)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              },
              {
                "v": 7
              }
            ]
          }
        },
        {
          "t": "2.2",
          "q": "Let f(x) = √x. Which of the following is equal to f′(3)?",
          "o": [
            "lim as h→0 of (√(3 + h) − √3)/h",
            "lim as h→0 of (√(3 + h) − √h)/h",
            "lim as x→3 of (√x − 3)/(x − 3)",
            "(√(3 + h) − √3)/h"
          ],
          "a": 0,
          "w": "Tanım: f′(a) = lim as h→0 of [f(a + h) − f(a)]/h; burada a = 3 ve f(3) = √3. √(3 + h) − √h olan şık, f(3) yerine f(h) = √h çıkarır. (√x − 3)/(x − 3) olan şık x → a biçimine benzer ama f(3) = √3 yerine 3 yazılmış: pay √3 − 3 ≈ −1,27'ye gider, limit yoktur. lim içermeyen şık yalnızca bir *secant* eğimi (bir *difference quotient*), türevin kendisi değil."
        },
        {
          "t": "2.2",
          "q": "A function f satisfies f(2) = 5 and f′(2) = −3. Which of the following is an equation for the line tangent to the graph of f at x = 2?",
          "o": [
            "y − 2 = −3(x − 5)",
            "y + 3 = 5(x − 2)",
            "y − 5 = −3(x − 2)",
            "y − 5 = 3(x − 2)"
          ],
          "a": 2,
          "w": "Teğet doğrusu: nokta f'den, eğim f′'den gelir. Nokta (2, f(2)) = (2, 5), eğim f′(2) = −3 → y − 5 = −3(x − 2). y + 3 = 5(x − 2) iki sayının rollerini değiştirir; y − 2 = −3(x − 5) x ile y'yi karıştırır; y − 5 = 3(x − 2) eğimin işaretini kaybeder."
        },
        {
          "t": "2.2",
          "q": "The volume of water in a tank, in liters, is given by V(t), where t is measured in minutes. Which of the following is the best interpretation of the statement V′(5) = −2?",
          "o": [
            "Every 5 minutes, the volume of water in the tank decreases by 2 liters.",
            "During the first 5 minutes, the volume of water in the tank decreased by 2 liters.",
            "At time t = 5 minutes, the tank contains −2 liters of water.",
            "At time t = 5 minutes, the volume of water in the tank is decreasing at a rate of 2 liters per minute."
          ],
          "a": 3,
          "w": "V′(5) bir *instantaneous rate of change*: t = 5 anında hacmin değişme hızı, birimi litre/dakika; eksi işareti azaldığını söyler. \"İlk 5 dakikada 2 litre azaldı\" toplam değişimi anlatır, o V(5) − V(0) olurdu. \"−2 litre su var\" V(5)'i anlatır. \"Her 5 dakikada 2 litre\" ise hızı yanlış zaman birimine yayar."
        },
        {
          "t": "2.3",
          "q": "The temperature of a pot of water, T(t), in degrees Celsius, is measured at selected times t, in minutes, as shown in the table. Using the data in the table, what is the best estimate of T′(3)?",
          "o": [
            "1 degree Celsius per minute",
            "2 degrees Celsius per minute",
            "3 degrees Celsius per minute",
            "6 degrees Celsius per minute"
          ],
          "a": 1,
          "w": "t = 3 tabloda yok; onu çevreleyen en dar aralık 2 ≤ t ≤ 5. T′(3) ≈ (52 − 46)/(5 − 2) = 2 °C/dk. 3 ve 1, t = 3'ü içermeyen [0, 2] ve [5, 9] aralıklarının eğimleri. 6, farkı zaman aralığına bölmeyi unutur: birimi derece olur, derece/dakika değil.",
          "fig": {
            "type": "table",
            "head": [
              "t (minutes)",
              "0",
              "2",
              "5",
              "9"
            ],
            "rows": [
              [
                "T(t) (°C)",
                40,
                46,
                52,
                56
              ]
            ]
          }
        },
        {
          "t": "2.3",
          "q": "(Calculator allowed.) Let f(x) = cos(x²). What is the value of f′(1)?",
          "o": [
            "−1.683",
            "−0.841",
            "0.540",
            "1.683"
          ],
          "a": 0,
          "w": "Hesap makinesinde sayısal türev (nDeriv) x = 1'de ≈ −1,683 verir. (Unit 3'teki zincir kuralıyla: −2x sin(x²) → −2 sin 1.) −0,841 = −sin 1, içteki x²'nin türevi 2x'i kaçırır; 0,540 = cos 1, türev değil f(1). 1,683 işareti kaybeder: x = 1'in hemen sağında x² büyür, cos azalır, eğim negatif."
        },
        {
          "t": "2.4",
          "q": "Let f(x) = |x − 3|. Which of the following is true about f at x = 3?",
          "o": [
            "f is continuous and differentiable at x = 3.",
            "f is continuous but not differentiable at x = 3.",
            "f is differentiable but not continuous at x = 3.",
            "f is neither continuous nor differentiable at x = 3."
          ],
          "a": 1,
          "w": "f(3) = 0 ve iki taraftan da limit 0: f süreklidir. Ama soldan eğim −1, sağdan +1; grafikte bir *corner* (köşe) var, iki tek taraflı limit farklı, f′(3) yoktur. \"Türevli ama sürekli değil\" hiçbir zaman olamaz: *differentiability implies continuity*."
        },
        {
          "t": "2.4",
          "q": "The graph of the function f, defined for 0 ≤ x ≤ 7, consists of the line segments shown, which meet at the points (2, 6) and (5, 3); the graph ends at (0, 2) and (7, 1). At how many values of x in the open interval 0 < x < 7 is f not differentiable?",
          "o": [
            "0",
            "1",
            "2",
            "3"
          ],
          "a": 1,
          "w": "Türevlenemezlik için köşe gerekir: iki tarafın eğimi farklı olmalı. x = 2'de eğim 2'den −1'e döner: köşe. x = 5'te sol parça (3 − 6)/(5 − 2) = −1, sağ parça (1 − 3)/(7 − 5) = −1; aynı doğru, köşe yok. Cevap 1. 2, işaretlenen her noktayı köşe sayar; 0 ise grafiğin sürekli olmasını türev için yeterli sanır.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 8,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  2,
                  6
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  6
                ],
                "to": [
                  5,
                  3
                ],
                "color": 0
              },
              {
                "from": [
                  5,
                  3
                ],
                "to": [
                  7,
                  1
                ],
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 6,
                "label": "(2, 6)"
              },
              {
                "q": 5,
                "p": 3,
                "label": "(5, 3)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              },
              {
                "v": 7
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ]
          }
        },
        {
          "t": "2.5",
          "q": "If y = x⁵ − 4x³ + 7, then dy/dx =",
          "o": [
            "5x⁴ − 12x²",
            "5x⁴ − 12x² + 7",
            "5x⁴ − 4x²",
            "x⁴ − 12x²"
          ],
          "a": 0,
          "w": "*Power rule*: d/dx(xⁿ) = n·xⁿ⁻¹, terim terim uygulanır. x⁵ → 5x⁴, −4x³ → −12x², sabit 7 → 0. Sabiti 7 olarak bırakmak, katsayıyı (−4) üsle çarpmamak ya da üssü öne indirmeyi atlamak diğer şıkları üretir."
        },
        {
          "t": "2.5",
          "q": "If f(x) = 6√x, what is f′(9)?",
          "o": [
            "1/6",
            "1/3",
            "1",
            "3"
          ],
          "a": 2,
          "w": "6√x = 6x^(1/2) → f′(x) = 6·(1/2)x^(−1/2) = 3/√x, f′(9) = 3/3 = 1. 1/6, katsayı 6'yı unutur; 3, x^(−1/2) çarpanını unutur; 1/3 ise üssü −1/2 yerine −1 alır (6·1/(2·9))."
        },
        {
          "t": "2.6",
          "q": "If f(x) = (x³ + 2x)/x for x ≠ 0, then f′(x) =",
          "o": [
            "2x + 2",
            "3x² + 2",
            "x² + 2",
            "2x"
          ],
          "a": 3,
          "w": "Önce sadeleştir: x ≠ 0 için f(x) = x² + 2, dolayısıyla f′(x) = 2x. 3x² + 2, yalnız payın türevini alıp paydayı unutur. x² + 2 fonksiyonun kendisidir; 2x + 2 ise sabit 2'nin türevini 0 yerine 2 bırakır."
        },
        {
          "t": "2.6",
          "q": "At which values of x does the graph of f(x) = x³ − 12x + 1 have a horizontal tangent line?",
          "o": [
            "x = 0 only",
            "x = 2 only",
            "x = −2 and x = 2",
            "x = −2√3, x = 0, and x = 2√3"
          ],
          "a": 2,
          "w": "*Horizontal tangent* ⇔ f′(x) = 0. f′(x) = 3x² − 12 = 3(x² − 4) → x = ±2. \"Yalnız x = 2\" negatif kökü kaybeder. Son şık x³ − 12x = 0'ın köklerini, yani grafiğin y = 1 doğrusunu kestiği yerleri verir; eğimin sıfır olduğu yerleri değil."
        },
        {
          "t": "2.6",
          "q": "Which of the following is an equation of the line normal to the graph of y = x² + 1 at x = 1?",
          "o": [
            "y − 2 = −(1/2)(x − 1)",
            "y − 2 = 2(x − 1)",
            "y − 2 = (1/2)(x − 1)",
            "y − 1 = −(1/2)(x − 2)"
          ],
          "a": 0,
          "w": "*Normal line*, teğete dik doğrudur. Nokta (1, 2); teğet eğimi y′ = 2x → 2; normal eğimi bunun negatif tersi, −1/2. y − 2 = 2(x − 1) teğetin kendisidir; 1/2 işareti çevirmeyi unutur; y − 1 = −(1/2)(x − 2) noktanın koordinatlarını yer değiştirir."
        },
        {
          "t": "2.7",
          "q": "If f(x) = 3 sin x + eˣ, what is f′(0)?",
          "o": [
            "−2",
            "1",
            "3",
            "4"
          ],
          "a": 3,
          "w": "f′(x) = 3 cos x + eˣ (sin'in türevi cos, eˣ'in türevi kendisi). f′(0) = 3·1 + 1 = 4. −2, sin'in türevini −cos sanmaktan gelir. 1, türev almadan f(0) = 3 sin 0 + e⁰'ı hesaplar. 3 ise eˣ teriminin türevini 0 sayar."
        },
        {
          "t": "2.7",
          "q": "d/dx (ln x − 5ˣ) =",
          "o": [
            "ln x − 5ˣ ln 5",
            "1/x − x·5ˣ⁻¹",
            "1/x − 5ˣ",
            "1/x − 5ˣ ln 5"
          ],
          "a": 3,
          "w": "d/dx(ln x) = 1/x ve d/dx(aˣ) = aˣ ln a. 5ˣ bir *exponential function* (değişken üste): *power rule* uygulanmaz, x·5ˣ⁻¹ bu hatadır. 5ˣ'i eˣ gibi kendi türevi saymak ln 5 çarpanını unutur. ln x − 5ˣ ln 5 şıkkında ise ln x'in türevi hiç alınmamış."
        },
        {
          "t": "2.8",
          "q": "If g(x) = x²eˣ, then g′(x) =",
          "o": [
            "2xeˣ + x²eˣ",
            "2xeˣ",
            "x²eˣ",
            "2xeˣ − x²eˣ"
          ],
          "a": 0,
          "w": "*Product rule*: (uv)′ = u′v + uv′. u = x², v = eˣ: g′ = 2x·eˣ + x²·eˣ. 2xeˣ, türevlerin çarpımıdır (2x)(eˣ), ikinci terimi atlar; x²eˣ yalnız ikinci terimdir. Eksi işareti *quotient rule*'dan karışmıştır."
        },
        {
          "t": "2.9",
          "q": "If h(x) = x/(x + 1), then h′(x) =",
          "o": [
            "1",
            "−1/(x + 1)²",
            "1/(x + 1)²",
            "(2x + 1)/(x + 1)²"
          ],
          "a": 2,
          "w": "*Quotient rule*: [(x + 1)·1 − x·1]/(x + 1)² = 1/(x + 1)². Sıra önemli: önce payda çarpı payın türevi, sonra eksi pay çarpı paydanın türevi. Sırayı ters çevirmek −1/(x + 1)² verir; 1, türevlerin bölümüdür (1/1); (2x + 1)/(x + 1)² paydaki eksiyi artıya çevirir."
        },
        {
          "t": "2.9",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at x = 2. If h(x) = f(x)/g(x), what is h′(2)?",
          "o": [
            "−10",
            "−5",
            "−5/2",
            "5/2"
          ],
          "a": 2,
          "w": "h′(2) = [f′(2)g(2) − f(2)g′(2)]/[g(2)]² = (1·2 − 3·4)/2² = −10/4 = −5/2. 5/2 paydaki çıkarmanın sırasını ters çevirir; −5 paydanın karesini almayı unutur; −10 ise paydayı hiç kullanmaz.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)",
              "g(x)",
              "g′(x)"
            ],
            "rows": [
              [
                2,
                3,
                1,
                2,
                4
              ]
            ]
          }
        },
        {
          "t": "2.10",
          "q": "If f(x) = tan x, what is f′(π/4)?",
          "o": [
            "1/2",
            "1",
            "√2",
            "2"
          ],
          "a": 3,
          "w": "d/dx(tan x) = sec²x. sec(π/4) = 1/cos(π/4) = √2, karesi 2. 1, tan(π/4)'ün kendisi; √2, kareyi almayı unutan sec(π/4); 1/2 ise cos²(π/4), yani sec²'nin tersi."
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "2.1",
          "q": "The amount of water in a tank, W(t), in gallons, is measured at selected times t, in minutes, as shown in the table. What is the average rate of change of W over the interval 3 ≤ t ≤ 10?",
          "o": [
            "−33/7 gallons per minute",
            "−9/2 gallons per minute",
            "−4 gallons per minute",
            "33/7 gallons per minute"
          ],
          "a": 0,
          "w": "[W(10) − W(3)]/(10 − 3) = (75 − 108)/7 = −33/7 ≈ −4,71 galon/dk. Eksi: su azalıyor; 33/7 bu işareti kaybeder. −9/2 yanlış aralığı, [0, 10]'u kullanır; −4 ise yalnız [3, 7] aralığının eğimidir.",
          "fig": {
            "type": "table",
            "head": [
              "t (minutes)",
              "0",
              "3",
              "7",
              "10"
            ],
            "rows": [
              [
                "W(t) (gallons)",
                120,
                108,
                92,
                75
              ]
            ]
          }
        },
        {
          "t": "2.1",
          "q": "Let f(x) = x³. For what positive value of b is the average rate of change of f over the interval [0, b] equal to 9?",
          "o": [
            "√3",
            "3",
            "9",
            "27"
          ],
          "a": 1,
          "w": "Ortalama: [f(b) − f(0)]/(b − 0) = b³/b = b². b² = 9 ve b > 0 → b = 3. √3, ortalamayı anlık değişim hızı f′(b) = 3b² ile karıştırıp 3b² = 9 çözer. 9 ortalamanın kendisi, 27 ise f(3)'tür."
        },
        {
          "t": "2.2",
          "q": "lim as h→0 of [(3(x + h)² − (x + h)) − (3x² − x)]/h =",
          "o": [
            "6x + 3h − 1",
            "6x − 1",
            "6x",
            "3x² − x"
          ],
          "a": 1,
          "w": "Bu, f(x) = 3x² − x için türevin tanımı. Pay: 6xh + 3h² − h; h'ye bölünce 6x + 3h − 1, h → 0 iken 6x − 1. 6x + 3h − 1 limiti almayı unutur (sonuçta h kalamaz). 6x, −x teriminin türevini kaybeder; 3x² − x ise fonksiyonun kendisi."
        },
        {
          "t": "2.2",
          "q": "A function f satisfies f(1) = 4 and f′(x) = 3x² − 2x + 5 for all x. The line tangent to the graph of f at x = 1 crosses the y-axis at y =",
          "o": [
            "−2",
            "−1",
            "4",
            "6"
          ],
          "a": 0,
          "w": "Eğim f′(1) = 3 − 2 + 5 = 6, nokta (1, 4). Teğet: y − 4 = 6(x − 1), yani y = 6x − 2; y eksenini −2'de keser. −1, eğim olarak f′(0) = 5'i kullanır; eğim teğet noktasında hesaplanır. 6 eğimin kendisi, 4 ise f(1)."
        },
        {
          "t": "2.3",
          "q": "The graph of a function f and the line tangent to the graph of f at x = 2 are shown. The tangent line passes through the points (2, 3) and (5, 7). What is the value of f′(2)?",
          "o": [
            "3/4",
            "4/3",
            "7/5",
            "3/2"
          ],
          "a": 1,
          "w": "f′(2), x = 2'deki teğetin eğimidir: (7 − 3)/(5 − 2) = 4/3. 3/4 farkları ters böler (Δx/Δy). 7/5, (5, 7) noktasını orijine bağlayan doğrunun eğimi; 3/2 ise f(2)/2. Teğetin iki noktası biliniyor: eğrinin şekli gerekmez.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  1.533
                ],
                "to": [
                  0.245,
                  1.584
                ],
                "color": 0
              },
              {
                "from": [
                  0.245,
                  1.584
                ],
                "to": [
                  0.49,
                  1.671
                ],
                "color": 0
              },
              {
                "from": [
                  0.49,
                  1.671
                ],
                "to": [
                  0.735,
                  1.793
                ],
                "color": 0
              },
              {
                "from": [
                  0.735,
                  1.793
                ],
                "to": [
                  0.98,
                  1.952
                ],
                "color": 0
              },
              {
                "from": [
                  0.98,
                  1.952
                ],
                "to": [
                  1.225,
                  2.147
                ],
                "color": 0
              },
              {
                "from": [
                  1.225,
                  2.147
                ],
                "to": [
                  1.47,
                  2.378
                ],
                "color": 0
              },
              {
                "from": [
                  1.47,
                  2.378
                ],
                "to": [
                  1.715,
                  2.644
                ],
                "color": 0
              },
              {
                "from": [
                  1.715,
                  2.644
                ],
                "to": [
                  1.96,
                  2.947
                ],
                "color": 0
              },
              {
                "from": [
                  1.96,
                  2.947
                ],
                "to": [
                  2.205,
                  3.286
                ],
                "color": 0
              },
              {
                "from": [
                  2.205,
                  3.286
                ],
                "to": [
                  2.45,
                  3.661
                ],
                "color": 0
              },
              {
                "from": [
                  2.45,
                  3.661
                ],
                "to": [
                  2.695,
                  4.072
                ],
                "color": 0
              },
              {
                "from": [
                  2.695,
                  4.072
                ],
                "to": [
                  2.94,
                  4.518
                ],
                "color": 0
              },
              {
                "from": [
                  2.94,
                  4.518
                ],
                "to": [
                  3.185,
                  5.001
                ],
                "color": 0
              },
              {
                "from": [
                  3.185,
                  5.001
                ],
                "to": [
                  3.43,
                  5.52
                ],
                "color": 0
              },
              {
                "from": [
                  3.43,
                  5.52
                ],
                "to": [
                  3.675,
                  6.075
                ],
                "color": 0
              },
              {
                "from": [
                  3.675,
                  6.075
                ],
                "to": [
                  3.92,
                  6.666
                ],
                "color": 0
              },
              {
                "from": [
                  3.92,
                  6.666
                ],
                "to": [
                  4.165,
                  7.293
                ],
                "color": 0
              },
              {
                "from": [
                  4.165,
                  7.293
                ],
                "to": [
                  4.41,
                  7.956
                ],
                "color": 0
              },
              {
                "from": [
                  4.41,
                  7.956
                ],
                "to": [
                  4.655,
                  8.655
                ],
                "color": 0
              },
              {
                "from": [
                  4.655,
                  8.655
                ],
                "to": [
                  4.9,
                  9.39
                ],
                "color": 0,
                "label": "f"
              },
              {
                "from": [
                  0.5,
                  1
                ],
                "to": [
                  6.5,
                  9
                ],
                "color": 1,
                "dash": 1,
                "label": "tangent"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 3,
                "label": "(2, 3)"
              },
              {
                "q": 5,
                "p": 7,
                "label": "(5, 7)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              },
              {
                "v": 7
              },
              {
                "v": 8
              },
              {
                "v": 9
              }
            ]
          }
        },
        {
          "t": "2.3",
          "q": "Selected values of a differentiable function f are shown in the table. Using the values of f at x = 1.9 and x = 2.1, what is the estimate of f′(2)?",
          "o": [
            "0.68",
            "2.9",
            "3.4",
            "6.8"
          ],
          "a": 2,
          "w": "x = 2'yi ortalayan *symmetric difference quotient*: [f(2,1) − f(1,9)]/(2,1 − 1,9) = 0,68/0,2 = 3,4. 0,68 bölmeyi unutur; 6,8, aralık 0,2 iken 0,1'e böler. 2,9 yalnız [2, 2,1] aralığının eğimi: istenen iki değer değil.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "1.8",
              "1.9",
              "2.0",
              "2.1",
              "2.2"
            ],
            "rows": [
              [
                "f(x)",
                5.12,
                5.61,
                6,
                6.29,
                6.48
              ]
            ]
          }
        },
        {
          "t": "2.3",
          "q": "(Calculator allowed.) Let f(x) = sin(eˣ). What is the value of f′(1)?",
          "o": [
            "−2.478",
            "−0.912",
            "0.411",
            "2.478"
          ],
          "a": 0,
          "w": "Hesap makinesinde nDeriv(sin(eˣ), x, 1) ≈ −2,478. (Unit 3'teki zincir kuralıyla: f′(x) = eˣ cos(eˣ), f′(1) = e·cos e.) −0,912 = cos e, içteki eˣ'in türevini atlar; 0,411 = sin e, türev değil f(1). 2,478 işareti kaybeder: e ≈ 2,72 radyan ikinci bölgede, kosinüs negatif."
        },
        {
          "t": "2.4",
          "q": "Let f be a function and let a be a real number. Which of the following statements must be true?\nI. If f is differentiable at x = a, then f is continuous at x = a.\nII. If f is continuous at x = a, then f is differentiable at x = a.\nIII. If f is not continuous at x = a, then f is not differentiable at x = a.",
          "o": [
            "I only",
            "II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "I bu ünitenin ana teoremi: *differentiability implies continuity*. III, I'in *contrapositive*'i; o da doğru. II yanlış: f(x) = |x|, x = 0'da süreklidir ama köşesi var, türevi yok. Süreklilik gerekli ama yeterli değil."
        },
        {
          "t": "2.4",
          "q": "Let f(x) = ∛x. Which of the following is true?",
          "o": [
            "f′(0) = 0",
            "f′(0) = 1/3",
            "f is not differentiable at x = 0 because f is not continuous at x = 0.",
            "f is not differentiable at x = 0 because its graph has a vertical tangent line there."
          ],
          "a": 3,
          "w": "f(0) = 0 ve f süreklidir; \"sürekli değil\" gerekçesi yanlış. Ama fark bölümü ∛h/h = 1/∛(h²), h → 0 iken +∞'a gider: grafik orijinde dikleşir, *vertical tangent* var, f′(0) yok. 1/3, *power rule*'u körü körüne uygular; (1/3)x^(−2/3) x = 0'da tanımsızdır. 0 ise yatay teğetle karıştırır."
        },
        {
          "t": "2.5",
          "q": "What is the value of lim as h→0 of ((2 + h)⁴ − 16)/h?",
          "o": [
            "8",
            "16",
            "24",
            "32"
          ],
          "a": 3,
          "w": "2⁴ = 16 olduğundan bu, f(x) = x⁴ için f′(2)'nin tanımı: [f(2 + h) − f(2)]/h. f′(x) = 4x³ → f′(2) = 32. Açmaya gerek yok, kalıbı tanı. 16, f(2)'nin kendisi; 8, türevi 4x sanır; 24 ise 3·2³ (yanlış üs)."
        },
        {
          "t": "2.5",
          "q": "If f(x) = 3/x² + ∛x, then f′(x) =",
          "o": [
            "−6/x³ + 3/∛(x²)",
            "−3/x³ + 1/(3∛(x²))",
            "6/x³ + 1/(3∛(x²))",
            "−6/x³ + 1/(3∛(x²))"
          ],
          "a": 3,
          "w": "Önce üs biçimine çevir: 3x⁻² + x^(1/3). Türev: −6x⁻³ + (1/3)x^(−2/3) = −6/x³ + 1/(3∛(x²)). −3/x³ katsayıyı üsle çarpmayı unutur; +6/x³ negatif üsten gelen eksiyi kaybeder. 3/∛(x²) ise 1/3 ile çarpacağına 3 ile çarpar."
        },
        {
          "t": "2.6",
          "q": "At what value of x is the line tangent to the graph of f(x) = x² − 3x parallel to the line y = 5x + 1?",
          "o": [
            "3/2",
            "5/2",
            "4",
            "8"
          ],
          "a": 2,
          "w": "Paralel doğruların eğimleri eşittir: f′(x) = 2x − 3 = 5 → x = 4. 5/2, −3x'in türevini atlar (2x = 5). 8, x²'nin türevini x sanır (x − 3 = 5). 3/2 ise f′(x) = 0'ı, yani yatay teğeti çözer."
        },
        {
          "t": "2.6",
          "q": "Let g(x) = kx³ − 2x, where k is a constant. If g′(1) = 10, what is the value of k?",
          "o": [
            "2",
            "8/3",
            "10/3",
            "4"
          ],
          "a": 3,
          "w": "g′(x) = 3kx² − 2, g′(1) = 3k − 2 = 10 → 3k = 12 → k = 4. 2, kx³'ün türevini 6kx² sanar (6k − 2 = 10). 10/3, −2x'in türevini atlar; 8/3 ise −2'yi karşı tarafa yanlış işaretle geçirir (3k = 8)."
        },
        {
          "t": "2.6",
          "q": "At which points does the graph of f(x) = 2x³ + 3x² − 12x have a horizontal tangent line?",
          "o": [
            "(−1, 13) and (2, 4)",
            "(1, −7) and (−2, 20)",
            "(1, −7) only",
            "(0, 0) only"
          ],
          "a": 1,
          "w": "f′(x) = 6x² + 6x − 12 = 6(x + 2)(x − 1) = 0 → x = −2 ya da x = 1. y değerleri f'den: f(1) = −7, f(−2) = 20. (−1, 13) ve (2, 4), çarpanlardaki işaret hatasından, (x − 2)(x + 1)'den gelir. \"Yalnız (1, −7)\" ikinci kökü kaybeder; (0, 0)'da ise f′(0) = −12 ≠ 0."
        },
        {
          "t": "2.7",
          "q": "What is the slope of the line tangent to the graph of y = 2 cos x − x at x = π/2?",
          "o": [
            "−3",
            "−2",
            "−1",
            "1"
          ],
          "a": 0,
          "w": "y′ = −2 sin x − 1. x = π/2'de sin = 1 → y′ = −2 − 1 = −3. 1, cos'un türevini +sin sanır. −2, −x teriminin türevi −1'i atlar. −1 ise sin(π/2) yerine cos(π/2) = 0 kullanır."
        },
        {
          "t": "2.7",
          "q": "What is the value of lim as h→0 of (e^(2 + h) − e²)/h?",
          "o": [
            "1",
            "e",
            "e²",
            "2e²"
          ],
          "a": 2,
          "w": "Kalıp [f(2 + h) − f(2)]/h ve f(x) = eˣ: limit f′(2). eˣ kendi türevi olduğu için f′(2) = e². 2e², üssü öne indirip *power rule* uygular; eˣ üstel fonksiyondur, kuvvet değil. e, f′(1)'dir. 1 ise eˣ'in türevinin her yerde 1 olduğunu sanır (bu yalnız x = 0'da doğru)."
        },
        {
          "t": "2.8",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at x = 1. If h(x) = f(x)g(x), what is h′(1)?",
          "o": [
            "−15",
            "−2",
            "8",
            "22"
          ],
          "a": 1,
          "w": "h′(1) = f′(1)g(1) + f(1)g′(1) = (−3)(4) + (2)(5) = −12 + 10 = −2. −15 türevlerin çarpımı f′g′'dür; (fg)′ ≠ f′g′. 8, h(1)'in kendisi; 22 ise −3'ün işaretini kaybeder.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)",
              "g(x)",
              "g′(x)"
            ],
            "rows": [
              [
                1,
                2,
                -3,
                4,
                5
              ]
            ]
          }
        },
        {
          "t": "2.8",
          "q": "If y = x sin x, what is the value of dy/dx at x = π?",
          "o": [
            "−π",
            "−1",
            "0",
            "π"
          ],
          "a": 0,
          "w": "y′ = 1·sin x + x·cos x. x = π: sin π = 0, cos π = −1 → y′ = 0 + π(−1) = −π. 0, yalnızca ilk terimi alır; π, cos π'nin işaretini kaybeder; −1 ise türevlerin çarpımı 1·cos π."
        },
        {
          "t": "2.9",
          "q": "If f(x) = (2x + 1)/(x − 3), then f′(x) =",
          "o": [
            "(4x − 5)/(x − 3)²",
            "7/(x − 3)²",
            "2",
            "−7/(x − 3)²"
          ],
          "a": 3,
          "w": "[(x − 3)·2 − (2x + 1)·1]/(x − 3)² = (2x − 6 − 2x − 1)/(x − 3)² = −7/(x − 3)². 7/(x − 3)² çıkarmanın sırasını ters çevirir; (4x − 5)/(x − 3)² eksiyi artı yapar; 2 ise türevlerin bölümü (2/1)."
        },
        {
          "t": "2.10",
          "q": "If f(x) = sec x, what is f′(π/3)?",
          "o": [
            "√3",
            "2",
            "2√3",
            "4"
          ],
          "a": 2,
          "w": "d/dx(sec x) = sec x tan x. sec(π/3) = 2, tan(π/3) = √3 → 2√3. 4 = sec²(π/3), tan'ın türevidir; 2 sec(π/3)'ün kendisi, √3 yalnız tan(π/3)."
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "2.1",
          "q": "Let f(x) = 1/x. For what value of a > 1 is the average rate of change of f over the interval [1, a] equal to −1/4?",
          "o": [
            "4/3",
            "2",
            "4",
            "8"
          ],
          "a": 2,
          "w": "[f(a) − f(1)]/(a − 1) = (1/a − 1)/(a − 1) = [(1 − a)/a]/(a − 1) = −1/a. −1/a = −1/4 → a = 4. 4/3, (a − 1)'e bölmeyi unutur (1/a − 1 = −1/4). 2, ortalamayı anlık değişim hızı f′(a) = −1/a²'ye eşitler. 8 ise sadeleştirmede −1/a yerine −2/a bulur."
        },
        {
          "t": "2.1",
          "q": "Which of the following expressions gives the instantaneous rate of change of g(t) = t³ − 2t at t = 2?",
          "o": [
            "lim as t→2 of (t³ − 2t − 4)/(t − 2)",
            "lim as t→2 of (t³ − 2t)/(t − 2)",
            "(g(2.1) − g(2))/2.1",
            "lim as t→0 of (t³ − 2t − 4)/(t − 2)"
          ],
          "a": 0,
          "w": "x → a biçimi: lim as t→a of [g(t) − g(a)]/(t − a). g(2) = 8 − 4 = 4, bu yüzden payda −4 olmalı; limit 10 = g′(2). (t³ − 2t)/(t − 2) olan şık g(2)'yi çıkarmayı unutur: pay 4'e gider, limit yok. g(2.1) olan şık hem limitsiz hem de 0,1 yerine 2,1'e böler. t→0 olan şık t'yi 2 yerine 0'a götürür."
        },
        {
          "t": "2.2",
          "q": "lim as h→0 of [2/(x + h) − 2/x]/h =",
          "o": [
            "−2/x²",
            "2/x²",
            "−2/(x + h)²",
            "0"
          ],
          "a": 0,
          "w": "Payı ortak paydada topla: 2/(x + h) − 2/x = −2h/[x(x + h)]. h'ye bölünce −2/[x(x + h)], h → 0 iken −2/x². Bu, f(x) = 2/x için türevin tanımı. 2/x² işareti kaybeder (azalan fonksiyonun eğimi negatif). −2/(x + h)² limitte h bırakır. 0, payın 0'a gittiğini görüp paydayı unutur."
        },
        {
          "t": "2.2",
          "q": "The graph of f′, the derivative of a function f, consists of the three line segments shown, joining (0, 0), (2, 1), (4, 5), and (6, 5). If f(3) = 5, which of the following is an equation of the line tangent to the graph of f at x = 3?",
          "o": [
            "y − 5 = 2(x − 3)",
            "y − 3 = 5(x − 3)",
            "y − 5 = 3(x − 3)",
            "y − 5 = (5/3)(x − 3)"
          ],
          "a": 2,
          "w": "Bu f′'nün grafiği: x = 3'teki yüksekliği, f'nin oradaki eğimi. f′(3), (2, 1) ile (4, 5) arasındaki parçanın ortasında: 3. Nokta (3, f(3)) = (3, 5) → y − 5 = 3(x − 3). 2, f′ grafiğinin eğimini okur (o f″ olurdu). y − 3 = 5(x − 3) iki sayının yerini değiştirir; 5/3 ise orijinden (3, 5)'e çekilen doğrunun eğimi.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  2,
                  1
                ],
                "color": 2
              },
              {
                "from": [
                  2,
                  1
                ],
                "to": [
                  4,
                  5
                ],
                "color": 2
              },
              {
                "from": [
                  4,
                  5
                ],
                "to": [
                  6,
                  5
                ],
                "color": 2,
                "label": "f′"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 1,
                "label": "(2, 1)"
              },
              {
                "q": 4,
                "p": 5,
                "label": "(4, 5)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              }
            ],
            "caption": "Graph of f′"
          }
        },
        {
          "t": "2.3",
          "q": "Selected values of a differentiable function f are shown in the table. Let g(x) = 3f(x) − x². Using the values of f at x = 1.9 and x = 2.1 to estimate f′(2), what is the resulting estimate of g′(2)?",
          "o": [
            "4.5",
            "9.5",
            "13.5",
            "17.5"
          ],
          "a": 1,
          "w": "Önce f′(2) ≈ (8,5 − 7,6)/0,2 = 4,5. Türev kuralları tahminle de çalışır: g′(2) = 3f′(2) − 2·2 ≈ 13,5 − 4 = 9,5. 4,5 yalnız f′(2); 13,5, −x² teriminin türevini atlar; 17,5 ise −2x'i +4 olarak ekler.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "1.9",
              "2.0",
              "2.1"
            ],
            "rows": [
              [
                "f(x)",
                7.6,
                8,
                8.5
              ]
            ]
          }
        },
        {
          "t": "2.3",
          "q": "(Calculator allowed.) The graph of f(x) = ln(x² + 1) − 1 crosses the positive x-axis at x = r. What is the value of f′(r)?",
          "o": [
            "0.368",
            "0.964",
            "1.311",
            "2.622"
          ],
          "a": 1,
          "w": "Önce kesim noktası: ln(r² + 1) = 1 → r² + 1 = e → r = √(e − 1) ≈ 1,311 (ya da hesap makinesiyle sıfırı bul). Sonra nDeriv ile f′(1,311) ≈ 0,964. 1,311 kökün kendisi, eğim değil. 0,368 = 1/e, ln'in türevini 1/(x² + 1) alır ve içteki 2x'i unutur; 2,622 = 2r ise paydayı unutur."
        },
        {
          "t": "2.4",
          "q": "The graph of the function f is shown. It consists of a segment from (0, 1) to (2, 3), a segment from (2, 3) to (4, 2) where the endpoint (4, 2) is an open circle, and a segment from (4, 5) to (7, 6) where (4, 5) is a closed point, so f(4) = 5. At which value(s) of x in the interval 0 < x < 7 is f continuous but not differentiable?",
          "o": [
            "There are no such values of x.",
            "x = 4 only",
            "x = 2 and x = 4",
            "x = 2 only"
          ],
          "a": 3,
          "w": "x = 2'de iki parça birleşir (sürekli) ama eğimler 1 ve −1/2: köşe, türev yok. x = 4'te soldan limit 2, f(4) = 5: süreksiz. Süreksiz bir noktada türev de yoktur, ama soru \"sürekli olup türevlenemeyen\" noktaları istiyor ve x = 4 sürekli değil. Cevap yalnız x = 2.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 8,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  2,
                  3
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  3
                ],
                "to": [
                  4,
                  2
                ],
                "color": 0,
                "label": "f"
              },
              {
                "from": [
                  4,
                  5
                ],
                "to": [
                  7,
                  6
                ],
                "color": 0
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 3,
                "label": "(2, 3)"
              },
              {
                "q": 4,
                "p": 5,
                "label": "(4, 5)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              },
              {
                "v": 7
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ]
          }
        },
        {
          "t": "2.4",
          "q": "Let f(x) = |x³ − 8|. What is the value of lim as h→0⁺ of [f(2 + h) − f(2)]/h?",
          "o": [
            "−12",
            "0",
            "12",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "x > 2 için x³ − 8 > 0, yani sağda f(x) = x³ − 8 ve sağdan limit 3·2² = 12. Soldan f(x) = 8 − x³ ve limit −12: iki taraf farklı olduğu için f′(2) yok; ama soru yalnız sağdan limiti istiyor ve o vardır. −12 sol taraf; 0 ise f(2) = 0'ı eğim sanır."
        },
        {
          "t": "2.5",
          "q": "For what positive value of x do the graphs of f(x) = x³ and g(x) = 6x² have parallel tangent lines?",
          "o": [
            "2",
            "4",
            "6",
            "12"
          ],
          "a": 1,
          "w": "Paralel teğet ⇔ eğimler eşit: f′(x) = 3x², g′(x) = 12x; 3x² = 12x → 3x(x − 4) = 0 → x = 0 ya da x = 4; pozitif olan 4. 6, grafiklerin kesiştiği yer (x³ = 6x²): eğimleri değil değerleri eşitler. 2, 3x² = 12 gibi bir x'i kaybeden sadeleştirme; 12 ise g′'nün katsayısı."
        },
        {
          "t": "2.5",
          "q": "If f(x) = (x² + 4)/√x, what is the value of f′(4)?",
          "o": [
            "2",
            "11/4",
            "13/4",
            "32"
          ],
          "a": 1,
          "w": "Önce böl: f(x) = x^(3/2) + 4x^(−1/2). f′(x) = (3/2)x^(1/2) − 2x^(−3/2). x = 4: (3/2)(2) − 2/8 = 3 − 1/4 = 11/4. 13/4, negatif üsten gelen eksiyi kaybeder. 2, üssü −3/2 yerine −1/2 bırakır (3 − 2/2). 32 türevlerin bölümüdür: 2x ÷ 1/(2√x)."
        },
        {
          "t": "2.6",
          "q": "Let f(x) = ax² + x for x ≤ 2 and f(x) = 7x + b for x > 2, where a and b are constants. If f is differentiable at x = 2, what are the values of a and b?",
          "o": [
            "a = 2, b = −4",
            "a = 3/2, b = 6",
            "a = 7/4, b = −5",
            "a = 3/2, b = −6"
          ],
          "a": 3,
          "w": "İki şart: süreklilik ve eğimlerin eşitliği. Eğim: 2ax + 1, x = 2'de 4a + 1 = 7 → a = 3/2. Süreklilik: 4a + 2 = 14 + b → 8 = 14 + b → b = −6. a = 7/4, x teriminin türevi 1'i unutur (4a = 7). b = 6 işaret hatası. a = 2, b = −4 yalnız sürekliliği sağlar: eğimler 9 ve 7, köşe kalır."
        },
        {
          "t": "2.6",
          "q": "The line normal to the graph of y = x³ − 2x at x = 1 intersects the y-axis at y =",
          "o": [
            "−2",
            "−1",
            "0",
            "2"
          ],
          "a": 2,
          "w": "Nokta: y(1) = 1 − 2 = −1. Eğim: y′ = 3x² − 2 → 1. Normal eğimi −1: y + 1 = −1(x − 1) → y = −x; y eksenini 0'da keser. −2, teğet y = x − 2'nin kesişimi; −1 noktanın y değeri; 2 ise y(1)'i +1 hesaplayan işaret hatasıyla y = −x + 2 bulur."
        },
        {
          "t": "2.7",
          "q": "What is the value of lim as h→0 of cos(π/2 + h)/h?",
          "o": [
            "−1",
            "0",
            "1",
            "The limit does not exist."
          ],
          "a": 0,
          "w": "cos(π/2) = 0, yani pay cos(π/2 + h) − cos(π/2) olarak okunabilir: limit, f(x) = cos x için f′(π/2) = −sin(π/2) = −1. 0, 0/0'ı 0 sanır. 1, cos'un türevini +sin alır. 0/0 belirsizdir; limitin olmadığı anlamına gelmez."
        },
        {
          "t": "2.7",
          "q": "The line tangent to the graph of y = ln x at x = a passes through the origin. What is the value of a?",
          "o": [
            "1/e",
            "1",
            "e",
            "e²"
          ],
          "a": 2,
          "w": "Teğet: y − ln a = (1/a)(x − a). (0, 0)'ı koy: −ln a = −1 → ln a = 1 → a = e. 1, eğrinin x eksenini kestiği yer; oradaki teğet y = x − 1 orijinden geçmez. 1/e, ln a = −1 işaret hatası. e² ise ln a = 2: teğetin y-kesişimini (ln a − 1) 0 yerine 1'e eşitler."
        },
        {
          "t": "2.8",
          "q": "The graphs of the linear functions f and g are shown. The graph of f passes through (0, 1) and (4, 5), and the graph of g passes through (0, 6) and (6, 0). If h(x) = f(x)g(x), what is the value of h′(2)?",
          "o": [
            "1",
            "4",
            "7",
            "12"
          ],
          "a": 0,
          "w": "Grafikten: f(2) = 3, f′(2) = 1; g(2) = 4, g′(2) = −1. h′(2) = f′g + fg′ = 1·4 + 3·(−1) = 1. 4, yalnız ilk terim f′(2)g(2); 12, h(2) = 3·4; 7 ise g′'nün işaretini kaybeder (4 + 3).",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  5,
                  6
                ],
                "color": 0,
                "label": "f"
              },
              {
                "from": [
                  0,
                  6
                ],
                "to": [
                  6,
                  0
                ],
                "color": 1,
                "label": "g"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 1,
                "label": "(0, 1)"
              },
              {
                "q": 4,
                "p": 5,
                "label": "(4, 5)"
              },
              {
                "q": 0,
                "p": 6,
                "label": "(0, 6)"
              },
              {
                "q": 6,
                "p": 0,
                "label": "(6, 0)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ]
          }
        },
        {
          "t": "2.8",
          "q": "At which values of x does the graph of y = x²eˣ have a horizontal tangent line?",
          "o": [
            "x = 0 only",
            "x = −2 only",
            "x = 0 and x = 2",
            "x = −2 and x = 0"
          ],
          "a": 3,
          "w": "y′ = 2xeˣ + x²eˣ = xeˣ(x + 2). eˣ hiç sıfır olmaz, bu yüzden y′ = 0 ⇔ x = 0 ya da x = −2. \"Yalnız x = 0\" ikinci terimi atlar (y′ = 2xeˣ sanır). x = 2, (x + 2) çarpanında işaret hatası; \"yalnız x = −2\" ise x çarpanını unutur."
        },
        {
          "t": "2.9",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at x = 3. If h(x) = f(x)/g(x), what is the value of h′(3)?",
          "o": [
            "−2",
            "−4/3",
            "0",
            "4/3"
          ],
          "a": 1,
          "w": "h′(3) = [f′(3)g(3) − f(3)g′(3)]/g(3)² = [(−2)(3) − (6)(1)]/9 = −12/9 = −4/3. 4/3 çıkarmanın sırasını ters çevirir; 0 eksiyi artı yapar; −2 ise f′/g′.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)",
              "g(x)",
              "g′(x)"
            ],
            "rows": [
              [
                3,
                6,
                -2,
                3,
                1
              ]
            ]
          }
        },
        {
          "t": "2.9",
          "q": "At which values of x does the graph of y = x/(x² + 1) have a horizontal tangent line?",
          "o": [
            "x = 1 only",
            "There are no such values of x.",
            "x = 0 only",
            "x = −1 and x = 1"
          ],
          "a": 3,
          "w": "y′ = [(x² + 1)·1 − x·2x]/(x² + 1)² = (1 − x²)/(x² + 1)². Payda hiç sıfır olmaz; pay 0 ⇔ x = ±1. x = 0, payı sıfırlamak yerine y'nin sıfır olduğu yeri bulur (orada eğim 1). \"Yalnız x = 1\" negatif kökü kaybeder."
        },
        {
          "t": "2.10",
          "q": "If f(x) = x tan x, what is the value of f′(π/4)?",
          "o": [
            "π/2",
            "1 + π/4",
            "2",
            "1 + π/2"
          ],
          "a": 3,
          "w": "*Product rule*: f′(x) = tan x + x sec²x. x = π/4'te tan = 1, sec² = 2 → 1 + (π/4)(2) = 1 + π/2. 1 + π/4, sec²'yi 1 alır. π/2 ilk terimi atlar. 2 ise türevlerin çarpımı 1·sec²(π/4)."
        },
        {
          "t": "2.10",
          "q": "What is the value of lim as h→0 of [cot(π/6 + h) − √3]/h?",
          "o": [
            "−4",
            "−2",
            "−√3",
            "4"
          ],
          "a": 0,
          "w": "cot(π/6) = √3, yani bu f(x) = cot x için f′(π/6). d/dx(cot x) = −csc²x; csc(π/6) = 2 → −4. 4 işareti kaybeder; −2 kareyi almaz; −√3 ise cot(π/6)'nın kendisinin negatifi."
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "2.1",
          "q": "Let f(x) = x³. At what value of c in the open interval (0, 3) is the instantaneous rate of change of f equal to the average rate of change of f over the interval [0, 3]?",
          "o": [
            "3/2",
            "√3",
            "3",
            "9"
          ],
          "a": 1,
          "w": "Ortalama: (27 − 0)/3 = 9. Anlık: f′(c) = 3c² = 9 → c = √3 ≈ 1,73, aralığın içinde. 3/2 aralığın orta noktası; bu kısayol yalnız ikinci dereceden fonksiyonlarda işe yarar. 9 ortalamanın kendisi; 3 ise c² = 3'te karekök almadan durur (üstelik aralığın içinde değil)."
        },
        {
          "t": "2.1",
          "q": "What is the value of lim as x→π of (sin x)/(x − π)?",
          "o": [
            "−1",
            "0",
            "1",
            "The limit does not exist."
          ],
          "a": 0,
          "w": "sin π = 0, yani ifade lim as x→π of [sin x − sin π]/(x − π): f(x) = sin x için f′(π) = cos π = −1 (x → a biçimi). 0 ve \"limit yok\", 0/0 belirsizliğini sonuç sanar. 1 ise cos π'nin işaretini kaybeder."
        },
        {
          "t": "2.2",
          "q": "Let f be a differentiable function with f′(2) = 6. What is the value of lim as h→0 of [f(2 − h) − f(2)]/(3h)?",
          "o": [
            "−6",
            "−2",
            "2",
            "18"
          ],
          "a": 1,
          "w": "[f(2 − h) − f(2)]/(−h) → f′(2) = 6. Bizim ifade bunun −1/3 katı: [f(2 − h) − f(2)]/(3h) = −(1/3)·[f(2 − h) − f(2)]/(−h) → −6/3 = −2. 2, −h'den gelen eksiyi kaybeder; −6, 3'e bölmeyi unutur; 18 ise 3'e böleceğine çarpar."
        },
        {
          "t": "2.2",
          "q": "Let f be a differentiable function with f′(3) = 5. What is the value of lim as x→3 of [f(x) − f(3)]/(x² − 9)?",
          "o": [
            "5/6",
            "5/3",
            "5",
            "30"
          ],
          "a": 0,
          "w": "x² − 9 = (x − 3)(x + 3). İfade = [f(x) − f(3)]/(x − 3) · 1/(x + 3) → f′(3)·(1/6) = 5/6. 5, paydayı x − 3 sanır. 5/3, x + 3'ü 3 alır. 30 ise 6'ya böleceğine çarpar."
        },
        {
          "t": "2.3",
          "q": "Selected values of a differentiable function f are shown in the table. Let h(x) = f(x)/x. Using the values of f at x = 1 and x = 3 to estimate f′(2), what is the resulting estimate of h′(2)?",
          "o": [
            "−3/4",
            "3/4",
            "11/4",
            "11/2"
          ],
          "a": 1,
          "w": "f′(2) ≈ [f(3) − f(1)]/(3 − 1) = (14 − 3)/2 = 5,5. *Quotient rule*: h′(2) = [f′(2)·2 − f(2)·1]/2² ≈ (11 − 8)/4 = 3/4. −3/4 paydaki sırayı ters çevirir; 11/4, h′'yü f′(x)/x sanır; 11/2 ise f′(2)'nin kendisi.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "rows": [
              [
                "f(x)",
                1,
                3,
                8,
                14,
                18
              ]
            ]
          }
        },
        {
          "t": "2.3",
          "q": "(Calculator allowed.) Let f(x) = sin(x²). At which of the following values of x is the slope of the line tangent to the graph of f the greatest?",
          "o": [
            "x = 0.5",
            "x = 1",
            "x = 1.5",
            "x = 2"
          ],
          "a": 1,
          "w": "Her noktada nDeriv: f′(0,5) ≈ 0,969, f′(1) ≈ 1,081, f′(1,5) ≈ −1,885, f′(2) ≈ −2,615. En büyük eğim x = 1'de. x = 2, eğimin mutlak değerinin en büyük olduğu yer: en dik ama aşağı iniyor, eğim negatif. 0,5'te eğim pozitif ama daha küçük."
        },
        {
          "t": "2.4",
          "q": "A function f satisfies f(2) = 3 and lim as x→2 of [f(x) − 3]/(x − 2) = 4. Which of the following must be true?\nI. f is continuous at x = 2.\nII. lim as x→2 of f(x) = 3.\nIII. f′(2) = 4.",
          "o": [
            "I only",
            "III only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 3,
          "w": "f(2) = 3 olduğundan verilen limit tam olarak f′(2)'nin tanımı: III doğru. Türevli ⇒ sürekli: I doğru. Süreklilik lim f(x) = f(2) = 3 demektir: II de doğru. II'yi dışarıda bırakmak sürekliliğin tanımını unutmaktır."
        },
        {
          "t": "2.4",
          "q": "Which of the following functions is differentiable at x = 0?",
          "o": [
            "f(x) = |sin x|",
            "f(x) = sin |x|",
            "f(x) = |x| · sin x",
            "f(x) = ∛x"
          ],
          "a": 2,
          "w": "|x|·sin x için fark bölümü |h|·sin h/h = |h|·(sin h/h) → 0·1 = 0: türev var, f′(0) = 0. |sin x| ve sin |x|, x = 0'da köşe yapar: soldan eğim −1, sağdan +1. ∛x'in orada dikey teğeti var. Mutlak değer tek başına türevi bozmaz: sıfırda sıfıra giden bir çarpanla çarpılınca köşe düzleşir."
        },
        {
          "t": "2.5",
          "q": "Two lines through the point (1, −3) are tangent to the graph of y = x². What are the slopes of these two lines?",
          "o": [
            "−1 and 3",
            "2 and −6",
            "−2 and 6",
            "2 and 2"
          ],
          "a": 2,
          "w": "(a, a²)'deki teğet: y = 2a(x − a) + a² = 2ax − a². (1, −3)'ten geçsin: −3 = 2a − a² → a² − 2a − 3 = 0 → a = 3 ya da a = −1. Eğimler 2a: 6 ve −2. −1 ve 3, teğet noktalarının x değerleri, eğimler değil. 2 ve −6 işaret hatası. \"2 ve 2\" eğimi (1, −3)'te y′ = 2x ile hesaplar; ama (1, −3) eğrinin üzerinde değil."
        },
        {
          "t": "2.5",
          "q": "What is the value of lim as x→8 of (∛x − 2)/(x − 8)?",
          "o": [
            "1/12",
            "1/6",
            "1/4",
            "1/3"
          ],
          "a": 0,
          "w": "∛8 = 2: bu, f(x) = x^(1/3) için f′(8). f′(x) = (1/3)x^(−2/3) = 1/(3∛(x²)), ∛64 = 4 → 1/12. 1/3, x^(−2/3) çarpanını unutur; 1/6, ∛(x²) yerine ∛x = 2 ile böler; 1/4 ise 3 çarpanını unutur, yalnız 1/∛64."
        },
        {
          "t": "2.6",
          "q": "Let f(x) = a√x for 0 < x ≤ 4 and f(x) = x + b for x > 4, where a and b are constants. If f is differentiable at x = 4, what are the values of a and b?",
          "o": [
            "a = 1/4, b = −7/2",
            "a = 2, b = 0",
            "a = 4, b = −4",
            "a = 4, b = 4"
          ],
          "a": 3,
          "w": "Eğim: a/(2√x); x = 4'te a/4 = 1 → a = 4. Süreklilik: a√4 = 4 + b → 8 = 4 + b → b = 4. a = 2, √x'in türevini 1/√x sanır (a/2 = 1). b = −4 işaret hatası. a = 1/4 ise a/4 = 1'i ters çözer."
        },
        {
          "t": "2.6",
          "q": "For a > 0, the line normal to the graph of y = x² at the point (a, a²) passes through the point (0, 5/2). What is the value of a?",
          "o": [
            "√(3/2)",
            "√2",
            "√(5/2)",
            "√3"
          ],
          "a": 1,
          "w": "Teğet eğimi 2a, normal eğimi −1/(2a). Normal: y − a² = −(1/(2a))(x − a). x = 0: y = a² + 1/2 = 5/2 → a² = 2 → a = √2. √(3/2), normal eğimini −1/a alır (a² + 1 = 5/2). √(5/2), 1/2 terimini atlar. √3 ise 1/2'yi ekleyeceğine çıkarır (a² − 1/2 = 5/2)."
        },
        {
          "t": "2.7",
          "q": "If f(x) = log₃ x + 3ˣ + x³ + 3³, then f′(x) =",
          "o": [
            "1/(x ln 3) + 3ˣ ln 3 + 3x²",
            "1/(x ln 3) + x·3ˣ⁻¹ + 3x²",
            "(ln 3)/x + 3ˣ ln 3 + 3x²",
            "1/(x ln 3) + 3ˣ ln 3 + 3x² + 27"
          ],
          "a": 0,
          "w": "Dört ayrı tür: logₐ x → 1/(x ln a); aˣ → aˣ ln a; x³ → 3x²; 3³ = 27 bir sabit → 0. x·3ˣ⁻¹, üstel fonksiyona *power rule* uygular. (ln 3)/x, ln 3'ü paydaya koyacağına paya koyar. +27, 3³'ü x³ gibi türevler; sabitin türevi 0'dır."
        },
        {
          "t": "2.7",
          "q": "The line tangent to the graph of y = 2 sin x + cos x at x = π/2 crosses the x-axis at x =",
          "o": [
            "π/2 − 2",
            "π/2",
            "π/2 + 1",
            "π/2 + 2"
          ],
          "a": 3,
          "w": "y(π/2) = 2·1 + 0 = 2. y′ = 2 cos x − sin x → y′(π/2) = 0 − 1 = −1. Teğet: y − 2 = −(x − π/2); y = 0 → x = π/2 + 2. π/2 − 2, cos'un türevini +sin alır (eğim +1). π/2 + 1, y(π/2)'yi 2 yerine 1 hesaplar. π/2 ise teğet noktasının x değeri; orada y = 2, eksen değil."
        },
        {
          "t": "2.8",
          "q": "The graph of a function f and the line tangent to the graph of f at x = 4 are shown. The tangent line passes through the points (0, 1) and (4, 3). If g(x) = x²f(x), what is the value of g′(4)?",
          "o": [
            "4",
            "8",
            "24",
            "32"
          ],
          "a": 3,
          "w": "Grafikten: f(4) = 3 (teğet noktası) ve f′(4) = (3 − 1)/(4 − 0) = 1/2. g′(4) = 2·4·f(4) + 4²·f′(4) = 24 + 8 = 32. 24 ve 8, *product rule*'un birer terimi; 4 ise türevlerin çarpımı (2·4)(1/2).",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 8,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  2.28
                ],
                "to": [
                  0.375,
                  2.239
                ],
                "color": 0
              },
              {
                "from": [
                  0.375,
                  2.239
                ],
                "to": [
                  0.75,
                  2.22
                ],
                "color": 0
              },
              {
                "from": [
                  0.75,
                  2.22
                ],
                "to": [
                  1.125,
                  2.224
                ],
                "color": 0
              },
              {
                "from": [
                  1.125,
                  2.224
                ],
                "to": [
                  1.5,
                  2.25
                ],
                "color": 0
              },
              {
                "from": [
                  1.5,
                  2.25
                ],
                "to": [
                  1.875,
                  2.299
                ],
                "color": 0
              },
              {
                "from": [
                  1.875,
                  2.299
                ],
                "to": [
                  2.25,
                  2.37
                ],
                "color": 0
              },
              {
                "from": [
                  2.25,
                  2.37
                ],
                "to": [
                  2.625,
                  2.464
                ],
                "color": 0
              },
              {
                "from": [
                  2.625,
                  2.464
                ],
                "to": [
                  3,
                  2.58
                ],
                "color": 0
              },
              {
                "from": [
                  3,
                  2.58
                ],
                "to": [
                  3.375,
                  2.719
                ],
                "color": 0
              },
              {
                "from": [
                  3.375,
                  2.719
                ],
                "to": [
                  3.75,
                  2.88
                ],
                "color": 0
              },
              {
                "from": [
                  3.75,
                  2.88
                ],
                "to": [
                  4.125,
                  3.064
                ],
                "color": 0
              },
              {
                "from": [
                  4.125,
                  3.064
                ],
                "to": [
                  4.5,
                  3.27
                ],
                "color": 0
              },
              {
                "from": [
                  4.5,
                  3.27
                ],
                "to": [
                  4.875,
                  3.499
                ],
                "color": 0
              },
              {
                "from": [
                  4.875,
                  3.499
                ],
                "to": [
                  5.25,
                  3.75
                ],
                "color": 0
              },
              {
                "from": [
                  5.25,
                  3.75
                ],
                "to": [
                  5.625,
                  4.024
                ],
                "color": 0
              },
              {
                "from": [
                  5.625,
                  4.024
                ],
                "to": [
                  6,
                  4.32
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  4.32
                ],
                "to": [
                  6.375,
                  4.639
                ],
                "color": 0
              },
              {
                "from": [
                  6.375,
                  4.639
                ],
                "to": [
                  6.75,
                  4.98
                ],
                "color": 0
              },
              {
                "from": [
                  6.75,
                  4.98
                ],
                "to": [
                  7.125,
                  5.344
                ],
                "color": 0
              },
              {
                "from": [
                  7.125,
                  5.344
                ],
                "to": [
                  7.5,
                  5.73
                ],
                "color": 0,
                "label": "f"
              },
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  7.5,
                  4.75
                ],
                "color": 1,
                "dash": 1,
                "label": "tangent"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 1,
                "label": "(0, 1)"
              },
              {
                "q": 4,
                "p": 3,
                "label": "(4, 3)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              },
              {
                "v": 7
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ]
          }
        },
        {
          "t": "2.8",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at x = 1. If h(x) = x·f(x)·g(x), what is the value of h′(1)?",
          "o": [
            "−5",
            "−2",
            "3",
            "12"
          ],
          "a": 2,
          "w": "Üç çarpanlı *product rule*: h′ = (1)·f·g + x·f′·g + x·f·g′. x = 1: (2)(−1) + (3)(−1) + (2)(4) = −2 − 3 + 8 = 3. −5, son terimi (x·f·g′) unutur. −2 yalnız x'in türevinden gelen ilk terim; 12 ise türevlerin çarpımı 1·3·4.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)",
              "g(x)",
              "g′(x)"
            ],
            "rows": [
              [
                1,
                2,
                3,
                -1,
                4
              ]
            ]
          }
        },
        {
          "t": "2.9",
          "q": "At which points on the graph of y = (x − 1)/(x + 1) is the slope of the tangent line equal to 2?",
          "o": [
            "(1, 0) and (−3, 2)",
            "(0, −1) only",
            "(0, −1) and (−2, 3)",
            "(0, 1) and (−2, −3)"
          ],
          "a": 2,
          "w": "y′ = [(x + 1) − (x − 1)]/(x + 1)² = 2/(x + 1)². 2/(x + 1)² = 2 → (x + 1)² = 1 → x = 0 ya da x = −2. y değerleri: y(0) = −1, y(−2) = (−3)/(−1) = 3. (1, 0) ve (−3, 2), eğimi 2 yerine 1/2'ye eşitleyip (x + 1)² = 4 çözer. (0, 1) ve (−2, −3) y değerlerinde işaret hatası. \"Yalnız (0, −1)\" negatif kökü kaybeder."
        },
        {
          "t": "2.9",
          "q": "The graph of the function f, consisting of two line segments, is shown; it passes through (0, 4), (3, 1), and (6, 4). Let h(x) = f(x)/(x² + 1). What is the value of h′(2)?",
          "o": [
            "−13/25",
            "−1/4",
            "3/25",
            "13/25"
          ],
          "a": 0,
          "w": "Grafikten: f(2) = 2 ve f′(2) = −1 (ilk parçanın eğimi). Payda g(x) = x² + 1: g(2) = 5, g′(2) = 4. h′(2) = [f′g − fg′]/g² = [(−1)(5) − (2)(4)]/25 = −13/25. 3/25, paydaki çıkarmayı toplama yapar (−5 − 8 yerine −5 + 8); 13/25 sırayı ters çevirir; −1/4 ise f′/g′.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 5,
            "lines": [
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  3,
                  1
                ],
                "color": 0
              },
              {
                "from": [
                  3,
                  1
                ],
                "to": [
                  6,
                  4
                ],
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 4,
                "label": "(0, 4)"
              },
              {
                "q": 3,
                "p": 1,
                "label": "(3, 1)"
              },
              {
                "q": 6,
                "p": 4,
                "label": "(6, 4)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              }
            ]
          }
        },
        {
          "t": "2.10",
          "q": "On the interval −π/2 < x < π/2, at which values of x does the graph of f(x) = tan x − 4x have a horizontal tangent line?",
          "o": [
            "x = −π/4 and x = π/4",
            "x = −π/6 and x = π/6",
            "x = −π/3 and x = π/3",
            "x = 0 only"
          ],
          "a": 2,
          "w": "f′(x) = sec²x − 4 = 0 → cos²x = 1/4 → cos x = ±1/2; bu aralıkta cos > 0, yani cos x = 1/2 → x = ±π/3. ±π/6, sin x = ±1/2 ile karıştırır. ±π/4, sec²x = 2'den (tan x = ±1) gelir. x = 0'da f′(0) = 1 − 4 = −3."
        },
        {
          "t": "2.10",
          "q": "If f(x) = sin x · sec x, what is the value of f′(π/3)?",
          "o": [
            "√3",
            "2",
            "3",
            "4"
          ],
          "a": 3,
          "w": "Sadeleştir: sin x · sec x = sin x/cos x = tan x, f′(x) = sec²x → sec²(π/3) = 2² = 4. *Product rule* da aynısını verir: cos x sec x + sin x sec x tan x = 1 + tan²x. √3, türevlerin çarpımı cos x · sec x tan x; 2, sec(π/3)'ün kendisi; 3 ise yalnız tan²(π/3), 1'i unutur."
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "2.1",
          "q": "For all h ≠ 0, the average rate of change of a function f over the interval [1, 1 + h] is h² + 3h + 5. What is the value of f′(1)?",
          "o": [
            "3",
            "5",
            "8",
            "9"
          ],
          "a": 1,
          "w": "f′(1) = lim as h→0 of [f(1 + h) − f(1)]/h; bu tam olarak verilen ortalamanın h → 0 limiti: 0 + 0 + 5 = 5. 9, h = 1 koyar: [1, 2]'nin ortalaması. 8, h = 1'de h² terimini unutur (3 + 5). 3 ise h'nin katsayısını türev sanır."
        },
        {
          "t": "2.1",
          "q": "Let g(x) = x³ − 4x. For what positive value of a is the average rate of change of g over the interval [−a, a] equal to g′(1)?",
          "o": [
            "1",
            "√3",
            "2",
            "3"
          ],
          "a": 1,
          "w": "[g(a) − g(−a)]/(a − (−a)) = [(a³ − 4a) − (−a³ + 4a)]/(2a) = (2a³ − 8a)/(2a) = a² − 4. g′(x) = 3x² − 4 → g′(1) = −1. a² − 4 = −1 → a = √3. 2, ortalamayı 0'a eşitler; 3, a² = 3'te durur; 1 ise g′(1)'deki x. Aralığın uzunluğu 2a'dır, a değil."
        },
        {
          "t": "2.2",
          "q": "Let f be a differentiable function with f(1) = 2 and f′(1) = 4. What is the value of lim as x→1 of [(f(x))² − 4]/(x − 1)?",
          "o": [
            "4",
            "8",
            "16",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "(f(x))² − 4 = [f(x) − 2][f(x) + 2]. [f(x) − 2]/(x − 1) → f′(1) = 4 ve f(x) + 2 → f(1) + 2 = 4 (türevli ⇒ sürekli). Limit 4·4 = 16. 4, ikinci çarpanı unutur. 8, f(x) + 2 yerine f(1) = 2 ile çarpar (2·f(x)·f′(x) kalıbını f(x) = 1 ile karıştırır). Pay ve payda 0'a gider ama limit vardır."
        },
        {
          "t": "2.2",
          "q": "The line tangent to the graph of f(x) = x³ at x = a intersects the y-axis at y = −16. What is the value of a?",
          "o": [
            "2",
            "2√2",
            "∛16",
            "8"
          ],
          "a": 0,
          "w": "Teğet: y = a³ + 3a²(x − a). x = 0: y = a³ − 3a³ = −2a³ = −16 → a³ = 8 → a = 2. 8, a³ = 8'de durur, küpkökü almaz. ∛16, a³ − 3a³'ü −a³ sanar. 2√2 ise a³ − 3a³ yerine a² − 3a² yazıp (−2a² = −16) a² = 8 bulur."
        },
        {
          "t": "2.3",
          "q": "The functions A and B are differentiable. Selected values of A(t) and B(t) are shown in the table. Let P(t) = A(t)·B(t). Using the data at t = 2 and t = 6 to estimate A′(4) and B′(4), what is the resulting estimate of P′(4)?",
          "o": [
            "4.375",
            "45.5",
            "61.75",
            "169"
          ],
          "a": 2,
          "w": "A′(4) ≈ (21 − 7)/4 = 3,5 ve B′(4) ≈ (16 − 11)/4 = 1,25. P′(4) = A′(4)B(4) + A(4)B′(4) ≈ 3,5·13 + 13·1,25 = 45,5 + 16,25 = 61,75. 4,375 türevlerin çarpımı; 45,5 ikinci terimi atlar; 169 ise P(4) = 13·13.",
          "fig": {
            "type": "table",
            "head": [
              "t",
              "0",
              "2",
              "4",
              "6"
            ],
            "rows": [
              [
                "A(t)",
                3,
                7,
                13,
                21
              ],
              [
                "B(t)",
                10,
                11,
                13,
                16
              ]
            ]
          }
        },
        {
          "t": "2.3",
          "q": "(Calculator allowed.) The line tangent to the graph of f(x) = ln(x² + 1) at x = 2 crosses the x-axis at x =",
          "o": [
            "−0.012",
            "0.009",
            "1.503",
            "4.012"
          ],
          "a": 0,
          "w": "f(2) = ln 5 ≈ 1,609, nDeriv ile f′(2) = 0,8. Teğet: y = 1,609 + 0,8(x − 2); y = 0 → x = 2 − 1,609/0,8 ≈ −0,012. 0,009, teğetin y eksenini kestiği değer; 4,012 işaret hatası (2 + 2,012); 1,503 ise bölmeyi ters yapar (2 − 0,8/1,609)."
        },
        {
          "t": "2.4",
          "q": "Let f be a function that is differentiable at x = 3, with f(3) = 0. Which of the following must be true?\nI. lim as x→3 of f(x) = 0.\nII. lim as h→0 of [f(3 + h) − f(3 − h)]/(2h) = f′(3).\nIII. The function g(x) = |f(x)| is differentiable at x = 3.",
          "o": [
            "I only",
            "I and II only",
            "II and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "I: türevli ⇒ sürekli, limit f(3) = 0. II: ifade sağdan ve soldan iki fark bölümünün ortalaması; ikisi de f′(3)'e gider, doğru. III: f(x) = x − 3 bir karşı örnek, |x − 3| x = 3'te köşeli. (f(3) ≠ 0 olsaydı |f| yakınlarda f ya da −f olur ve türevli kalırdı; sorun tam f = 0 olan yerde.)"
        },
        {
          "t": "2.4",
          "q": "The graph of the function f, consisting of three line segments, is shown; it passes through (0, 5), (2, 1), (4, 1), and (6, 4). Let h(x) = |f(x) − 3|. At how many values of x in the open interval 0 < x < 6 is h not differentiable?",
          "o": [
            "2",
            "3",
            "4",
            "5"
          ],
          "a": 2,
          "w": "Köşe iki kaynaktan gelir. (1) f'nin kendi köşeleri, x = 2 ve x = 4: orada f − 3 = −2 ≠ 0, mutlak değer yalnız işareti çevirir, köşe kalır. (2) f = 3 olan ve eğimin sıfır olmadığı yerler: ilk parçada x = 1, son parçada x = 16/3; orada |·| yeni bir köşe açar. Toplam 4. 2, bu iki listeden yalnız birini sayar; 3, son parçanın y = 3'ü kestiği yeri kaçırır; 5 ise yatay parçayı da sayar, oysa orada h = 2 sabit ve türevli.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  5
                ],
                "to": [
                  2,
                  1
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  1
                ],
                "to": [
                  4,
                  1
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  1
                ],
                "to": [
                  6,
                  4
                ],
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 5,
                "label": "(0, 5)"
              },
              {
                "q": 2,
                "p": 1,
                "label": "(2, 1)"
              },
              {
                "q": 4,
                "p": 1,
                "label": "(4, 1)"
              },
              {
                "q": 6,
                "p": 4,
                "label": "(6, 4)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              }
            ],
            "hlines": [
              {
                "p": 3,
                "label": "y = 3"
              }
            ]
          }
        },
        {
          "t": "2.5",
          "q": "What is the value of lim as x→1 of (x⁵⁰ − 1)/(x − 1)?",
          "o": [
            "0",
            "1",
            "49",
            "50"
          ],
          "a": 3,
          "w": "1⁵⁰ = 1, yani bu f(x) = x⁵⁰ için f′(1) (x → a biçimi). f′(x) = 50x⁴⁹ → f′(1) = 50. 0, 0/0'ı sonuç sanır; 1, f(1) = 1'i verir. 49, üssü bir azaltıp katsayı yerine yazar."
        },
        {
          "t": "2.5",
          "q": "The line y = 11x + k is tangent to the graph of y = x³ − x for some constant k < 0. What is the value of k?",
          "o": [
            "−22",
            "−16",
            "−6",
            "16"
          ],
          "a": 1,
          "w": "Teğetlik: eğimler eşit ve doğru eğriye değiyor. 3x² − 1 = 11 → x = ±2. x = 2'de y = 6 → 6 = 22 + k → k = −16; x = −2'de y = −6 → k = 16 (pozitif, elenir). −6, noktanın y değeri. −22, y = 0 alıp noktanın y'sini unutur (0 = 22 + k). 16 ise k < 0 şartını görmez."
        },
        {
          "t": "2.6",
          "q": "Let g(x) = x³ − 3x for x < 1 and g(x) = ax² + b for x ≥ 1, where a and b are constants. If g is differentiable at x = 1, what are the values of a and b?",
          "o": [
            "a = 0, b = −2",
            "a = −1, b = −1",
            "a = 3/2, b = −7/2",
            "a = 0, b = 2"
          ],
          "a": 0,
          "w": "Eğim: soldan 3x² − 3 → 0, sağdan 2ax → 2a; 2a = 0 → a = 0. Süreklilik: 1 − 3 = a + b → b = −2. Yani sağ parça sabit −2: şaşırtıcı ama doğru. a = 3/2, b = −7/2, soldaki türevde −3'ü unutur (2a = 3). a = −1, b = −1 yalnız sürekliliği sağlar (eğimler 0 ve −2). b = 2 işaret hatası."
        },
        {
          "t": "2.6",
          "q": "Let f(x) = x² + kx, where k is a constant. The line tangent to the graph of f at x = 1 is perpendicular to the line 2x + y = 7. What is the value of k?",
          "o": [
            "−3/2",
            "−1/2",
            "1/2",
            "3/2"
          ],
          "a": 0,
          "w": "2x + y = 7 → y = −2x + 7, eğim −2; ona dik eğim 1/2. f′(1) = 2 + k = 1/2 → k = −3/2. 3/2, 2'yi karşı tarafa geçirirken işareti kaybeder. −1/2, x²'nin türevini x alır (1 + k = 1/2). 1/2 ise dik eğimin kendisi, k değil."
        },
        {
          "t": "2.7",
          "q": "Let f(x) = aˣ, where a > 0. If f′(0) = 2, what is the value of a?",
          "o": [
            "ln 2",
            "√e",
            "2",
            "e²"
          ],
          "a": 3,
          "w": "f′(x) = aˣ ln a → f′(0) = ln a = 2 → a = e². 2, aˣ'in türevini \"aˣ, katsayısı a\" sanıp a = 2 yazar. ln 2, ln a = 2'yi ters çözer; √e ise ln a = 1/2."
        },
        {
          "t": "2.7",
          "q": "What is the value of lim as h→0 of [log₂(4 + h) − 2]/h?",
          "o": [
            "(ln 2)/4",
            "1/4",
            "1/(4 ln 2)",
            "4 ln 2"
          ],
          "a": 2,
          "w": "log₂ 4 = 2: bu, f(x) = log₂ x için f′(4). f′(x) = 1/(x ln 2) → 1/(4 ln 2) ≈ 0,361. 1/4, ln x'in türevi gibi davranır, ln 2'yi unutur. (ln 2)/4, ln 2'yi paydaya koyacağına paya koyar; 4 ln 2 ise bütünü ters çevirir."
        },
        {
          "t": "2.8",
          "q": "If f(x) = eˣ(sin x + cos x), then f′(x) =",
          "o": [
            "2eˣ(sin x + cos x)",
            "2eˣ sin x",
            "eˣ(cos x − sin x)",
            "2eˣ cos x"
          ],
          "a": 3,
          "w": "f′ = eˣ(sin x + cos x) + eˣ(cos x − sin x) = 2eˣ cos x; sin terimleri sadeleşir. eˣ(cos x − sin x) yalnız ikinci terim (eˣ'in türevini atlar). 2eˣ sin x, sin ve cos türevlerinin ikisinde de işareti ters alır. 2eˣ(sin x + cos x), parantezin türevini kendisi sanar."
        },
        {
          "t": "2.8",
          "q": "The graph of the continuous function f, consisting of two line segments, is shown; it passes through (0, 1), (2, 4), and (6, 2). Let h(x) = (x − 2)·f(x). What is the value of h′(2)?",
          "o": [
            "−1/2",
            "3/2",
            "4",
            "h′(2) does not exist."
          ],
          "a": 2,
          "w": "f, x = 2'de köşeli, f′(2) yok; bu yüzden *product rule* kullanılamaz, tanıma git: [h(2 + t) − h(2)]/t = [t·f(2 + t) − 0]/t = f(2 + t) → f(2) = 4 (f sürekli). Yani h′(2) = 4. \"Yok\" cevabı, bir çarpan türevsiz diye çarpımı da türevsiz sanır; (x − 2) çarpanı köşeyi düzleştirir. 3/2 ve −1/2, f'nin soldan ve sağdan eğimleri.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 5,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  2,
                  4
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  4
                ],
                "to": [
                  6,
                  2
                ],
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 1,
                "label": "(0, 1)"
              },
              {
                "q": 2,
                "p": 4,
                "label": "(2, 4)"
              },
              {
                "q": 6,
                "p": 2,
                "label": "(6, 2)"
              }
            ],
            "xticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              },
              {
                "v": 5
              },
              {
                "v": 6
              }
            ],
            "yticks": [
              {
                "v": 1
              },
              {
                "v": 2
              },
              {
                "v": 3
              },
              {
                "v": 4
              }
            ]
          }
        },
        {
          "t": "2.9",
          "q": "Let h(x) = f(x)/g(x), where f and g are differentiable. The table gives values of f, f′, and g at x = 1. If h′(1) = 1/2, what is the value of g′(1)?",
          "o": [
            "−2",
            "2",
            "5",
            "10"
          ],
          "a": 1,
          "w": "h′(1) = [f′(1)g(1) − f(1)g′(1)]/g(1)² = (12 − 2g′(1))/16 = 1/2 → 12 − 2g′(1) = 8 → g′(1) = 2. −2, paydaki çıkarmayı toplama yapar. 5, paydayı g(1)² yerine g(1) alır (12 − 2g′ = 2). 10 ise h′(1)'i −1/2 alan işaret hatası.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)",
              "g(x)"
            ],
            "rows": [
              [
                1,
                2,
                3,
                4
              ]
            ]
          }
        },
        {
          "t": "2.9",
          "q": "If y = sin x/(1 + cos x), what is the value of dy/dx at x = π/3?",
          "o": [
            "2/3",
            "1",
            "4/3",
            "2"
          ],
          "a": 0,
          "w": "y′ = [cos x(1 + cos x) − sin x(−sin x)]/(1 + cos x)² = (cos x + cos²x + sin²x)/(1 + cos x)² = 1/(1 + cos x). x = π/3: 1/(1 + 1/2) = 2/3. 2, sadeleştirmede 1/(1 − cos x) bulan işaret hatası. 4/3 = 1/sin²(π/3), paydayı (1 + cos x)² yerine sin²x alır. 1 ise sadeleşmiş türevi π/3 yerine π/2'de hesaplar."
        },
        {
          "t": "2.10",
          "q": "If f(x) = tan x · sec x, what is the value of f′(π/4)?",
          "o": [
            "√2",
            "2",
            "2√2",
            "3√2"
          ],
          "a": 3,
          "w": "f′ = sec²x · sec x + tan x · sec x tan x = sec x(sec²x + tan²x). π/4'te sec = √2, sec² = 2, tan = 1 → √2(2 + 1) = 3√2. 2√2 yalnız ilk terim (türevlerin çarpımı sec²x · sec x tan x da aynı sayıyı verir). √2 yalnız ikinci terim. 2 ise yalnız tan'ın türevi sec²(π/4)'ü alır, sec x çarpanını unutur."
        },
        {
          "t": "2.10",
          "q": "The line normal to the graph of y = tan x at x = π/4 crosses the x-axis at x =",
          "o": [
            "π/4 − 2",
            "π/4 − 1/2",
            "π/4 + 1/2",
            "π/4 + 2"
          ],
          "a": 3,
          "w": "Nokta (π/4, 1); teğet eğimi sec²(π/4) = 2; normal eğimi −1/2. Normal: y − 1 = −(1/2)(x − π/4). y = 0: x − π/4 = 2 → x = π/4 + 2. π/4 − 1/2 teğetin x-kesişimi; π/4 + 1/2 normal eğimini −2 alır; π/4 − 2 işaret hatası."
        }
      ]
    }
  ]
};
