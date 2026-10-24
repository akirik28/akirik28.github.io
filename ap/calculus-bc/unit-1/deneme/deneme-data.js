/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-calcbc-u1.json) */
window.DENEME = {
  "store": "calcbc-u1:v1:",
  "course": "AP Calculus BC",
  "unit": "Unit 1 — Limits and Continuity",
  "topics": {
    "1.1–1.2": "Limit Nedir?",
    "1.3–1.4": "Grafikten ve Tablodan Limit",
    "1.5, 1.9": "Limit Kuralları ve Gösterimleri Bağlamak",
    "1.6–1.7": "Cebirsel Teknikler ve Yöntem Seçimi",
    "1.8": "Sıkıştırma Teoremi ve Trigonometrik Limitler",
    "1.10–1.11": "Süreklilik ve Süreksizlik Türleri",
    "1.12–1.13": "Aralıkta Süreklilik ve Süreksizliği Giderme",
    "1.14": "Sonsuz Limitler ve Dikey Asimptotlar",
    "1.15": "Sonsuzda Limit ve Yatay Asimptotlar",
    "1.16": "Ara Değer Teoremi"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "1.1–1.2",
          "q": "An object is dropped from a tall building. The distance it has fallen after t seconds is s(t) = 5t² meters. What is the average rate of change of s over the interval 1 ≤ t ≤ 3?",
          "o": [
            "10 meters per second",
            "20 meters per second",
            "40 meters per second",
            "45 meters per second"
          ],
          "a": 1,
          "w": "*Average rate of change* = [s(3) − s(1)]/(3 − 1) = (45 − 5)/2 = 20 m/s; bu, iki noktadan geçen *secant line*'ın eğimidir. 40, farkı aralığın uzunluğuna bölmeyi unutur; 45 yalnızca s(3)'tür, yani bir konum, hız değil. 10 ise t = 1 anındaki anlık hızdır, aralığın ortalaması değil."
        },
        {
          "t": "1.1–1.2",
          "q": "Which of the following is equivalent to the statement lim as x→4 of g(x) = 7?",
          "o": [
            "g(4) = 7",
            "g(x) = 7 for every x near 4",
            "As x gets closer and closer to 4 from either side, g(x) gets closer and closer to 7",
            "As x gets closer and closer to 7, g(x) gets closer and closer to 4"
          ],
          "a": 2,
          "w": "Limit, x 4'e iki taraftan da yaklaşırken g(x)'in hangi değere yaklaştığını söyler; x = 4'teki değerle ilgilenmez. Bu yüzden g(4) = 7 gerekmez: g(4) tanımsız ya da 0 bile olabilir. \"4'ün yakınındaki her x için g(x) = 7\" fazla güçlüdür, g(x) 7'ye yaklaşıp hiç eşit olmayabilir. Son şık x ile g(x)'in rollerini ters çevirir."
        },
        {
          "t": "1.3–1.4",
          "q": "The graph of the function f is the line shown, with one exception at x = 2: the point (2, 3) on the line is an open circle, and the dot at (2, 6) shows that f(2) = 6. What is lim as x→2 of f(x)?",
          "o": [
            "2",
            "3",
            "6",
            "The limit does not exist."
          ],
          "a": 1,
          "w": "Limit, x = 2'nin çevresindeki grafiğe bakar: iki taraftan da y değerleri doğru boyunca 3'e yaklaşır (açık nokta, yani delik). Dolu nokta (2, 6) yalnızca f(2)'yi verir; 6 cevabı değerle limiti karıştırır. Delik limiti yok etmez: iki tek taraflı limit eşit olduğu için limit vardır. 2 ise x değeridir.",
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
                  6,
                  7
                ],
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 6,
                "label": "(2, 6)"
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
          "t": "1.3–1.4",
          "q": "The table shows selected values of h(x) = (√(x + 2) − 2)/(x − 2). Based on the table, which of the following is the best estimate of lim as x→2 of h(x)?",
          "o": [
            "0",
            "1/4",
            "1/2",
            "The limit does not exist, because h(2) is undefined."
          ],
          "a": 1,
          "w": "Soldan değerler 0,25002…, sağdan 0,24998…: iki taraf da 0,25'e (1/4) yaklaşıyor. h(2)'nin tanımsız olması limitin olmadığı anlamına gelmez; limit x = 2'nin kendisine değil, çevresine bakar. 0 ve 1/2 tablodaki hiçbir eğilimle uyuşmaz.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "h(x)"
            ],
            "rows": [
              [
                1.9,
                0.25158
              ],
              [
                1.99,
                0.25016
              ],
              [
                1.999,
                0.25002
              ],
              [
                2.001,
                0.24998
              ],
              [
                2.01,
                0.24984
              ],
              [
                2.1,
                0.24846
              ]
            ]
          }
        },
        {
          "t": "1.3–1.4",
          "q": "The graph of f consists of two line segments. The left segment ends at an open circle at (3, 5). The right segment begins at the dot (3, 1), which is on the graph. What is lim as x→3⁺ of f(x)?",
          "o": [
            "1",
            "3",
            "5",
            "The limit does not exist."
          ],
          "a": 0,
          "w": "x → 3⁺ sağdan yaklaşmak demektir: sağdaki parça boyunca y değerleri 1'e iner, yani sağ limit 1. 5 sol limittir (açık noktada biten parça). İki taraflı limit gerçekten yoktur (5 ≠ 1), ama soru yalnız sağ limiti soruyor; \"does not exist\" bu yüzden yanlış. 3 ise x değeridir.",
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
                  3,
                  5
                ],
                "label": "f"
              },
              {
                "from": [
                  3,
                  1
                ],
                "to": [
                  7,
                  3
                ]
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 1,
                "label": "(3, 1)"
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
          "t": "1.5, 1.9",
          "q": "If lim as x→5 of f(x) = 3 and lim as x→5 of g(x) = −2, what is lim as x→5 of [2f(x) − (g(x))²]?",
          "o": [
            "2",
            "4",
            "8",
            "10"
          ],
          "a": 0,
          "w": "Sabit kat, fark ve kuvvet kuralları: 2·3 − (−2)² = 6 − 4 = 2. 10, (−2)²'yi −4 sanmaktan; 8, kare almayı unutup 6 − (−2) yazmaktan; 4 ise (−2)² yerine |−2| = 2 çıkarmaktan gelir."
        },
        {
          "t": "1.5, 1.9",
          "q": "What is lim as x→−1 of (x³ + 4x)/(x + 3)?",
          "o": [
            "−5/2",
            "−3/2",
            "3/2",
            "5/2"
          ],
          "a": 0,
          "w": "Payda x = −1'de 2 ≠ 0, yani *direct substitution* yeterli: ((−1)³ + 4(−1))/(−1 + 3) = (−1 − 4)/2 = −5/2. −3/2, (−1)³'ü +1 almaktan; 3/2, 4x teriminin işaretini kaçırmaktan; 5/2 ise iki işaret hatasından birden gelir."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→−2 of (x² − x − 6)/(x + 2)?",
          "o": [
            "−5",
            "0",
            "5",
            "The limit does not exist."
          ],
          "a": 0,
          "w": "Yerine koyunca 0/0 çıkar: bu bir *indeterminate form*'dur, cevap değil, \"cebir yap\" işaretidir. Çarpanlara ayır: (x − 3)(x + 2)/(x + 2) = x − 3 (x ≠ −2), limit −2 − 3 = −5. \"Does not exist\" 0/0'ı yokluk sanır; 0 payın değerini cevap sanır; 5 ise işaret hatasıdır."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→0 of (√(x + 9) − 3)/x?",
          "o": [
            "0",
            "1/6",
            "1/3",
            "The limit does not exist."
          ],
          "a": 1,
          "w": "0/0 ve kök var: *conjugate* ile çarp. (x + 9 − 9)/[x(√(x + 9) + 3)] = 1/(√(x + 9) + 3) → 1/6. 1/3, paydadaki √9 + 3 toplamını yalnızca 3 almaktan gelir. 0/0 ne 0 demektir ne de \"limit yok\"."
        },
        {
          "t": "1.6–1.7",
          "q": "When direct substitution is used to evaluate lim as x→c of p(x)/q(x), where p and q are polynomials, the result is 0/0. Which of the following must be true?",
          "o": [
            "The limit equals 0.",
            "The limit equals 1.",
            "The limit does not exist.",
            "The form is indeterminate; the expression must be rewritten (for example, by factoring) before the limit can be determined."
          ],
          "a": 3,
          "w": "0/0 bir *indeterminate form*'dur: limit herhangi bir sayı olabilir ya da hiç olmayabilir. x → 1 iken (x² − 1)/(x − 1) → 2, (x − 1)²/(x − 1) → 0, (x − 1)/(x − 1)² ise yoktur. Bu yüzden önce çarpanlara ayırma ya da *conjugate* gibi bir cebir adımı gerekir; ilk üç şık bu örneklerden en az biriyle çürür."
        },
        {
          "t": "1.8",
          "q": "What is lim as x→0 of sin(5x)/x?",
          "o": [
            "0",
            "1/5",
            "1",
            "5"
          ],
          "a": 3,
          "w": "sin(5x)/x = 5·[sin(5x)/(5x)] ve u = 5x → 0 iken sin u/u → 1; limit 5. 1, katsayıyı atlayıp sin x/x kuralını doğrudan uygulamaktan; 1/5 oranı ters çevirmekten; 0 ise sin 0 = 0 diye yalnız payı değerlendirmekten gelir."
        },
        {
          "t": "1.8",
          "q": "For all real numbers x, the function f satisfies 3 − x² ≤ f(x) ≤ 3 + x². What is lim as x→0 of f(x)?",
          "o": [
            "0",
            "3",
            "6",
            "It cannot be determined from the information given."
          ],
          "a": 1,
          "w": "x → 0 iken alt sınır 3 − x² ve üst sınır 3 + x² ikisi de 3'e gider; arada sıkışan f de 3'e gitmek zorunda (*squeeze theorem*). f'nin formülünü bilmek gerekmez, \"belirlenemez\" bu yüzden yanlış. 6 iki sınırın sabitlerini toplar; 0 ise yalnız x² terimine bakar."
        },
        {
          "t": "1.10–1.11",
          "q": "Let f(x) = (x² − 4)/(x − 2). Which condition for continuity at x = 2 fails?",
          "o": [
            "None; f is continuous at x = 2.",
            "lim as x→2 of f(x) does not exist.",
            "lim as x→2 of f(x) exists and f(2) is defined, but the two are not equal.",
            "f(2) is not defined."
          ],
          "a": 3,
          "w": "Süreklilik için üç koşul: f(c) tanımlı, limit var, ikisi eşit. Burada x = 2 paydayı sıfır yapar, f(2) tanımsızdır: ilk koşul bozulur. Limit ise vardır: (x − 2)(x + 2)/(x − 2) → 4. Bu bir *removable discontinuity*'dir (grafikte delik)."
        },
        {
          "t": "1.10–1.11",
          "q": "At x = 3, the function g(x) = (x + 1)/(x − 3) has which type of discontinuity?",
          "o": [
            "Removable discontinuity",
            "Jump discontinuity",
            "Infinite discontinuity",
            "No discontinuity; g is continuous at x = 3"
          ],
          "a": 2,
          "w": "x → 3 iken pay 4'e, payda 0'a gider: sıfır olmayan bir sayı bölü sıfıra giden sayı, değerlerin sınırsız büyümesi demektir. Sağdan +∞, soldan −∞: bu bir *infinite discontinuity*, x = 3 de bir *vertical asymptote*'tur. Ortak çarpan olmadığı için delik (*removable*) yoktur; iki tarafın sonlu ama farklı değerlere gittiği bir *jump* da değildir."
        },
        {
          "t": "1.12–1.13",
          "q": "Which of the following gives all x-values at which f(x) = √(x − 2)/(x − 5) is continuous?",
          "o": [
            "[2, ∞)",
            "(2, ∞)",
            "[2, 5) and (5, ∞)",
            "(−∞, 5) and (5, ∞)"
          ],
          "a": 2,
          "w": "Kök ve rasyonel fonksiyonlar tanım kümelerinde süreklidir. Kök için x − 2 ≥ 0, payda için x ≠ 5: [2, 5) ve (5, ∞). x = 2'de sağdan süreklilik yeter, bu yüzden uç kapalıdır. (−∞, 5) kökün tanım kümesini unutur; [2, ∞) ve (2, ∞) ise x = 5'teki *infinite discontinuity*'yi atlar."
        },
        {
          "t": "1.12–1.13",
          "q": "Let f(x) = (x² − 16)/(x − 4) for x ≠ 4, and let f(4) = k. For what value of k is f continuous at x = 4?",
          "o": [
            "0",
            "4",
            "8",
            "16"
          ],
          "a": 2,
          "w": "Deliği doldurmak için f(4)'ü limite eşitle: (x − 4)(x + 4)/(x − 4) = x + 4 → 8, yani k = 8 (*removing a discontinuity*). 0, 0/0'ı sıfır sanmaktan gelir; 4 ve 16 ise x'in kendisini ya da 4²'yi limitle karıştırır."
        },
        {
          "t": "1.14",
          "q": "Which of the following describes the vertical asymptote(s) of the graph of y = (x − 1)/(x² − 1)?",
          "o": [
            "x = −1 only",
            "x = 1 only",
            "x = −1 and x = 1",
            "There are no vertical asymptotes."
          ],
          "a": 0,
          "w": "Önce sadeleştir: (x − 1)/[(x − 1)(x + 1)] = 1/(x + 1), x ≠ 1. Sadeleşen çarpan x = 1'de bir delik verir (limit 1/2), *vertical asymptote* değil. Kalan payda x + 1, yani tek asimptot x = −1. Paydanın sıfırlarını sadeleştirmeden saymak \"x = −1 ve x = 1\" hatasına götürür."
        },
        {
          "t": "1.14",
          "q": "What is lim as x→2⁺ of 3/(x − 2)?",
          "o": [
            "−∞",
            "0",
            "3",
            "∞"
          ],
          "a": 3,
          "w": "x → 2⁺ iken x − 2 küçük pozitif bir sayıdır; 3 bölü küçük pozitif sayı sınırsız büyür: +∞. −∞ soldan limittir. 3 yalnızca paydır. \"∞\" yazmak bir sayı bulmak değildir: limit yoktur ama değerlerin nasıl davrandığını (*unbounded*, pozitif) söyler."
        },
        {
          "t": "1.15",
          "q": "What is lim as x→∞ of (4x² − x)/(2x² + 5)?",
          "o": [
            "0",
            "1/2",
            "2",
            "∞"
          ],
          "a": 2,
          "w": "Pay ve paydanın derecesi eşit (2): limit baş katsayıların oranıdır, 4/2 = 2. Görmek için her terimi x²'ye böl: (4 − 1/x)/(2 + 5/x²) → 4/2. 1/2 oranı ters çevirir; 0 ve ∞ ise derecelerin farklı olduğu durumların cevaplarıdır."
        },
        {
          "t": "1.16",
          "q": "The function f is continuous on the closed interval [1, 4], with f(1) = −3 and f(4) = 5. Which of the following must be true?",
          "o": [
            "f(c) = 6 for at least one c in (1, 4)",
            "f is increasing on [1, 4]",
            "f(2.5) = 1",
            "f(c) = 0 for at least one c in (1, 4)"
          ],
          "a": 3,
          "w": "*Intermediate Value Theorem*: f [1, 4]'te sürekli ve 0, f(1) = −3 ile f(4) = 5 arasında, öyleyse en az bir c ∈ (1, 4) için f(c) = 0. 6, −3 ile 5 arasında değil: garanti yok. Teorem artan olmayı ya da belirli bir noktadaki değeri söylemez; f önce azalıp sonra artabilir."
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1–1.2",
          "q": "The position of a particle is p(t) = t³ for t ≥ 0. The table shows the average rate of change of p between t = 2 and t = 2 + h for several values of h. Which of the following is the best estimate of the instantaneous rate of change of p at t = 2?",
          "o": [
            "8",
            "11.41",
            "12",
            "12.61"
          ],
          "a": 2,
          "w": "Anlık değişim hızı, aralık sıfıra küçülürken ortalama hızların yaklaştığı değerdir. h = −0,001 ve h = 0,001 için değerler 11,994 ve 12,006: ikisi de 12'ye yaklaşıyor. 12,61 ve 11,41 yalnızca h = ±0,1 için *secant line* eğimleridir; 8 ise p(2), yani konumdur, hız değil.",
          "fig": {
            "type": "table",
            "head": [
              "h",
              "Average rate of change of p from t = 2 to t = 2 + h"
            ],
            "rows": [
              [
                "−0.1",
                "11.41"
              ],
              [
                "−0.01",
                "11.9401"
              ],
              [
                "−0.001",
                "11.994001"
              ],
              [
                "0.001",
                "12.006001"
              ],
              [
                "0.01",
                "12.0601"
              ],
              [
                "0.1",
                "12.61"
              ]
            ]
          }
        },
        {
          "t": "1.1–1.2",
          "q": "Which of the following statements about limits is true?",
          "o": [
            "If lim as x→c of f(x) = L, then f(c) = L.",
            "If f(c) is undefined, then lim as x→c of f(x) does not exist.",
            "If f(c) = L, then lim as x→c of f(x) = L.",
            "Changing only the value of f(c) cannot change lim as x→c of f(x)."
          ],
          "a": 3,
          "w": "Limit yalnızca c'nin çevresindeki değerlere bakar; f(c)'yi değiştirmek limiti değiştirmez. Diğerleri yanlış: limit var olup f(c) farklı ya da tanımsız olabilir (delik), ve f(c) = L olsa bile bir *jump*'ta limit hiç olmayabilir."
        },
        {
          "t": "1.3–1.4",
          "q": "The graph of f consists of two line segments. The left segment ends at an open circle at (4, 2). The right segment begins at the dot (4, 5), which is on the graph. Which of the following is true?",
          "o": [
            "lim as x→4 of f(x) does not exist.",
            "lim as x→4 of f(x) = 5",
            "lim as x→4⁻ of f(x) = 5",
            "f(4) is undefined."
          ],
          "a": 0,
          "w": "Sol limit 2 (açık noktaya doğru), sağ limit 5: iki tek taraflı limit farklı, yani lim x→4 f(x) yoktur (*jump*). f(4) = 5 tanımlıdır (dolu nokta), ama değer limitin yerine geçmez. \"Sol limit 5\" sol ve sağ parçaları karıştırır.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 9,
            "ymax": 8,
            "lines": [
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  4,
                  2
                ],
                "label": "f"
              },
              {
                "from": [
                  4,
                  5
                ],
                "to": [
                  8,
                  7
                ]
              }
            ],
            "points": [
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
              },
              {
                "v": 8
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
          "t": "1.3–1.4",
          "q": "The table shows selected values of g(x) = (x² − 1)/|x − 1|. Which of the following statements is consistent with the table?",
          "o": [
            "lim as x→1 of g(x) = 2",
            "lim as x→1⁻ of g(x) = −2 and lim as x→1⁺ of g(x) = 2, so lim as x→1 of g(x) does not exist",
            "lim as x→1 of g(x) = 0",
            "lim as x→1⁺ of g(x) = −2"
          ],
          "a": 1,
          "w": "Soldan değerler −1,9; −1,99; −1,999 → −2; sağdan 2,001; 2,01; 2,1 → 2. Sol ve sağ limit farklı, iki taraflı limit yoktur. 2 yalnızca sağ limittir; 0 ise −2 ile 2'nin ortalaması, limit ortalama alınarak bulunmaz. Cebirsel olarak: |x − 1| soldan −(x − 1), sağdan x − 1 olduğu için g soldan −(x + 1), sağdan x + 1'dir.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "g(x)"
            ],
            "rows": [
              [
                0.9,
                "−1.9"
              ],
              [
                0.99,
                "−1.99"
              ],
              [
                0.999,
                "−1.999"
              ],
              [
                1.001,
                "2.001"
              ],
              [
                1.01,
                "2.01"
              ],
              [
                1.1,
                "2.1"
              ]
            ]
          }
        },
        {
          "t": "1.5, 1.9",
          "q": "If lim as x→2 of f(x) = 4 and lim as x→2 of g(x) = −1, what is lim as x→2 of [√(f(x)) + x·g(x)]?",
          "o": [
            "−4",
            "0",
            "2",
            "4"
          ],
          "a": 1,
          "w": "Kök, çarpım ve toplam kuralları: √4 + 2·(−1) = 2 − 2 = 0. 4, g'nin işaretini kaçırır (2 + 2); 2, kökü almadan 4 − 2 yazar; −4 ise toplamak yerine √4·2·(−1) diye çarpar."
        },
        {
          "t": "1.5, 1.9",
          "q": "Let f(x) = √(2x + 3) and g(x) = x² + 2x. What is lim as x→1 of f(g(x))?",
          "o": [
            "√3",
            "√5",
            "3",
            "9"
          ],
          "a": 2,
          "w": "g sürekli: x → 1 iken g(x) → g(1) = 3. f de 3'te sürekli, öyleyse limit f(3) = √9 = 3. √5, bileşkeyi atlayıp f(1)'i hesaplar; 9, kökü unutup 2·3 + 3 yazar; √3 ise f(0)'dır."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→3 of (x² − 2x − 3)/(x² − 9)?",
          "o": [
            "0",
            "1/3",
            "2/3",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "0/0 → çarpanlara ayır: (x − 3)(x + 1)/[(x − 3)(x + 3)] = (x + 1)/(x + 3) → 4/6 = 2/3. 0, payın sıfır olmasını cevap sanır; \"does not exist\" 0/0'ı yokluk sanır. 1/3 ise payı yanlış çarpanlarla, (x − 3)(x − 1) diye ayırmaktan gelir."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→0 of [1/(x + 2) − 1/2]/x?",
          "o": [
            "−1/2",
            "−1/4",
            "0",
            "1/4"
          ],
          "a": 1,
          "w": "İç içe kesir: önce paydaki kesirleri ortak paydada birleştir: [2 − (x + 2)]/[2(x + 2)] = −x/[2(x + 2)]. x'e bölünce −1/[2(x + 2)] → −1/4. 1/4 işaret hatasıdır; −1/2, 2(x + 2) paydasındaki 2'yi unutur; 0 ise payı tek başına değerlendirir."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→1 of (x³ − 1)/(x² − 1)?",
          "o": [
            "2/3",
            "1",
            "3/2",
            "3"
          ],
          "a": 2,
          "w": "Küp farkı ve kare farkı: (x − 1)(x² + x + 1)/[(x − 1)(x + 1)] = (x² + x + 1)/(x + 1) → 3/2. 2/3 oranı ters çevirir; 3, kalan paydayı (x + 1 = 2) unutur; 1 ise 0/0'ı 1 sanmaktan gelir."
        },
        {
          "t": "1.8",
          "q": "What is lim as x→0 of tan(3x)/(2x)?",
          "o": [
            "0",
            "2/3",
            "1",
            "3/2"
          ],
          "a": 3,
          "w": "tan(3x)/(2x) = (3/2)·[sin(3x)/(3x)]·[1/cos(3x)] → (3/2)·1·1 = 3/2. Kısa kural: x → 0 iken tan(kx)/x → k. 2/3 oranı ters çevirir; 1 katsayıları unutur; 0 ise tan 0 = 0 diye yalnız payı değerlendirir."
        },
        {
          "t": "1.8",
          "q": "What is lim as x→0 of x²·cos(1/x)?",
          "o": [
            "0",
            "1",
            "∞",
            "The limit does not exist, because cos(1/x) oscillates."
          ],
          "a": 0,
          "w": "cos(1/x) salınır ama −1 ile 1 arasında kalır: −x² ≤ x²cos(1/x) ≤ x². İki sınır da 0'a gider; *squeeze theorem* ile limit 0. cos(1/x)'in tek başına limiti yoktur, ama 0'a giden x² ile çarpılınca salınım söner; \"does not exist\" bu yüzden yanlış."
        },
        {
          "t": "1.10–1.11",
          "q": "Let f(x) = x² + 1 for x < 2 and f(x) = 3x − 1 for x ≥ 2. Which of the following describes f at x = 2?",
          "o": [
            "f has a removable discontinuity at x = 2.",
            "f has a jump discontinuity at x = 2.",
            "f has an infinite discontinuity at x = 2.",
            "f is continuous at x = 2."
          ],
          "a": 3,
          "w": "Üç koşulu kontrol et: f(2) = 3·2 − 1 = 5; sol limit 2² + 1 = 5; sağ limit 5. Limit var ve f(2)'ye eşit: f x = 2'de süreklidir. Parçalı tanım kendiliğinden süreksizlik demek değildir; parçaların birleşme noktasında buluşup buluşmadığına bakmak gerekir."
        },
        {
          "t": "1.10–1.11",
          "q": "Let f(x) = (x² + x − 2)/(x² − 1). Which of the following correctly describes the discontinuities of f?",
          "o": [
            "A removable discontinuity at x = 1 and an infinite discontinuity at x = −1",
            "An infinite discontinuity at x = 1 and a removable discontinuity at x = −1",
            "Infinite discontinuities at both x = 1 and x = −1",
            "Removable discontinuities at both x = 1 and x = −1"
          ],
          "a": 0,
          "w": "Çarpanlara ayır: (x + 2)(x − 1)/[(x − 1)(x + 1)]. x − 1 sadeleşir: x = 1'de delik var (limit 3/2), yani *removable*. x + 1 paydada kalır: x = −1'de pay 1, payda 0 → *infinite discontinuity*. Paydanın her sıfırını asimptot saymak yaygın bir hatadır."
        },
        {
          "t": "1.12–1.13",
          "q": "Let f(x) = kx + 1 for x ≤ 3 and f(x) = x² − k for x > 3, where k is a constant. For what value of k is f continuous for all real numbers?",
          "o": [
            "1",
            "2",
            "5/2",
            "4"
          ],
          "a": 1,
          "w": "Parçalar kendi aralıklarında polinomdur; tek risk x = 3. Sol: 3k + 1, sağ: 9 − k. Eşitle: 3k + 1 = 9 − k → 4k = 8 → k = 2. 4, −k'yi +k almaktan (3k + 1 = 9 + k) gelir; diğer değerler iki parçayı x = 3'te buluşturmaz."
        },
        {
          "t": "1.12–1.13",
          "q": "Which of the following functions is continuous for all real numbers?",
          "o": [
            "f(x) = (x + 1)/(x² + 1)",
            "f(x) = tan x",
            "f(x) = x/(x² − 4)",
            "f(x) = ln(x²)"
          ],
          "a": 0,
          "w": "Rasyonel bir fonksiyon paydasının sıfır olmadığı her yerde süreklidir; x² + 1 hiçbir zaman sıfır olmaz, yani f her yerde süreklidir. tan x, x = π/2 + kπ'de; x/(x² − 4), x = ±2'de; ln(x²) ise x = 0'da tanımsızdır."
        },
        {
          "t": "1.14",
          "q": "What is lim as x→−3⁻ of x/(x + 3)?",
          "o": [
            "−∞",
            "−1",
            "1",
            "∞"
          ],
          "a": 3,
          "w": "İşaret analizi: x → −3⁻ iken x + 3 küçük negatiftir (x = −3,01 için −0,01), pay ise yaklaşık −3. Negatif bölü küçük negatif = büyük pozitif → +∞. −∞ sağdan limittir ya da işaret hatasıdır; 1 ise x/(x + 3)'ü x → ∞'daki gibi değerlendirir."
        },
        {
          "t": "1.14",
          "q": "Which of the following is a vertical asymptote of the graph of y = ln(x − 2) + 1?",
          "o": [
            "x = −2",
            "x = 2",
            "x = 3",
            "y = 1"
          ],
          "a": 1,
          "w": "ln u, u → 0⁺ iken −∞'a gider. Burada u = x − 2, yani x → 2⁺ iken y → −∞: x = 2 bir *vertical asymptote*'tur (tek taraflı sonsuz limit yeter). x = 3'te y = ln 1 + 1 = 1, sıradan bir nokta; y = 1 ise yatay bir doğru, dikey asimptot olamaz."
        },
        {
          "t": "1.15",
          "q": "What is lim as x→∞ of (3x − 7)/√(4x² + 1)?",
          "o": [
            "−3/2",
            "3/4",
            "3/2",
            "3"
          ],
          "a": 2,
          "w": "x > 0 iken √(4x² + 1) = x·√(4 + 1/x²). Pay ve paydayı x'e böl: (3 − 7/x)/√(4 + 1/x²) → 3/√4 = 3/2. 3/4, kökü almadan 4'e bölmekten gelir; −3/2 ise x → −∞'daki limittir."
        },
        {
          "t": "1.15",
          "q": "Which of the following describes the horizontal asymptote(s) of the graph of y = (2x³ + x)/(x⁴ − 3)?",
          "o": [
            "y = 0",
            "y = 1/2",
            "y = 2",
            "There is no horizontal asymptote."
          ],
          "a": 0,
          "w": "Paydanın derecesi (4) payınkinden (3) büyük: x → ±∞ iken kesir 0'a gider, tek *horizontal asymptote* y = 0. 2 ve 1/2, farklı derecelerdeki baş katsayıları bölmekten gelir; \"yok\" cevabı payın derecesinin büyük olduğu duruma aittir."
        },
        {
          "t": "1.16",
          "q": "The function f is continuous on [0, 4]. Selected values of f are shown in the table. What is the least number of solutions that the equation f(x) = 0 must have on the interval [0, 4]?",
          "o": [
            "0",
            "1",
            "2",
            "3"
          ],
          "a": 3,
          "w": "*Intermediate Value Theorem* her işaret değişiminde en az bir sıfır garanti eder: [0, 1] (2 → −1), [1, 2] (−1 → 1) ve [3, 4] (3 → −2). [2, 3]'te işaret değişmez (1 → 3), oradan garanti yoktur. En az 3 çözüm; 2, işaret değişimlerinden birini kaçırır.",
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
                2,
                "−1",
                1,
                3,
                "−2"
              ]
            ]
          }
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "1.1–1.2",
          "q": "For f(x) = x², which of the following gives the slope of the secant line through the points (3, f(3)) and (3 + h, f(3 + h)), together with the limit of that slope as h→0?",
          "o": [
            "(f(3 + h) − f(3))/h; the limit is 6",
            "(f(3 + h) − f(3))/h; the limit is 9",
            "(f(3 + h) − f(3))/(3 + h); the limit is 0",
            "f(3 + h) − f(3); the limit is 0"
          ],
          "a": 0,
          "w": "*Secant line* eğimi = Δy/Δx = (f(3 + h) − f(3))/h. Açınca ((3 + h)² − 9)/h = (6h + h²)/h = 6 + h → 6; bu, x = 3'teki *tangent line*'ın eğimidir. 9 = f(3), eğim değil değerdir. (3 + h)'ye bölmek Δx yerine x'e bölmektir; tek başına Δy ise eğim değildir."
        },
        {
          "t": "1.3–1.4",
          "q": "The graph of f, shown for 0 ≤ x ≤ 8, consists of three line segments. Open circles are at (2, 5) and (5, 3). The dots at (2, 3) and (5, 1) are points on the graph. Which of the following statements is false?",
          "o": [
            "lim as x→2 of f(x) = 5",
            "lim as x→2⁺ of f(x) = 3",
            "lim as x→5 of f(x) = 3",
            "f(5) = 1"
          ],
          "a": 0,
          "w": "x = 2'de sol limit 5, sağ limit 3: iki taraflı limit yoktur, yani \"limit 5\" yanlıştır. x = 5'te iki taraf da 3'e yaklaşır: limit 3 vardır; f(5) = 1 ise farklıdır (*removable discontinuity*). Değeri limitten ayırmak bu sorunun kilididir.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 9,
            "ymax": 7,
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
                "label": "f"
              },
              {
                "from": [
                  2,
                  3
                ],
                "to": [
                  5,
                  3
                ]
              },
              {
                "from": [
                  5,
                  3
                ],
                "to": [
                  8,
                  6
                ]
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
                "p": 1,
                "label": "(5, 1)"
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
              },
              {
                "v": 8
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
          "t": "1.3–1.4",
          "q": "A student makes the table below for h(x) = cos(π/x) and concludes that lim as x→0 of h(x) = 1. Which of the following is true?",
          "o": [
            "The student is correct: the limit is 1.",
            "The limit is 0.",
            "The limit is 1 from the right and −1 from the left, so the limit does not exist.",
            "The limit does not exist, because h(x) = 1 at x = 1/2, 1/4, 1/6, … but h(x) = −1 at x = 1/3, 1/5, 1/7, …, so h(x) does not approach a single value."
          ],
          "a": 3,
          "w": "Tablodaki x'lerin hepsi 1/(çift sayı) biçiminde: cos(10π) = cos(100π) = 1. Ama x = 1/3, 1/5, … için cos(3π) = cos(5π) = −1. x → 0 iken h(x) −1 ile 1 arasında sonsuz kez salınır: limit yoktur (*oscillation*). Ders: tablo yalnızca seçilen noktaları gösterir. cos çift fonksiyon olduğu için sol ve sağ aynı davranır; \"soldan −1\" yanlıştır.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "h(x) = cos(π/x)"
            ],
            "rows": [
              [
                "−0.1",
                1
              ],
              [
                "−0.01",
                1
              ],
              [
                "−0.001",
                1
              ],
              [
                "0.001",
                1
              ],
              [
                "0.01",
                1
              ],
              [
                "0.1",
                1
              ]
            ]
          }
        },
        {
          "t": "1.3–1.4",
          "q": "The table shows selected values of h(x) = (2ˣ − 1)/x. Which of the following is the best estimate of lim as x→0 of h(x)?",
          "o": [
            "0.5",
            "0.69",
            "1",
            "The limit does not exist, because h(0) is undefined."
          ],
          "a": 1,
          "w": "x = −0,001'de 0,6929, x = 0,001'de 0,6934: iki taraf da yaklaşık 0,693'e yaklaşıyor (bu sayı ln 2'dir). h(0)'ın tanımsız olması limiti etkilemez. 1, sin x/x kuralını yanlış yere taşımaktır; 0,5 tablodaki hiçbir değere yakın değildir.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "h(x)"
            ],
            "rows": [
              [
                "−0.1",
                0.6697
              ],
              [
                "−0.01",
                0.6908
              ],
              [
                "−0.001",
                0.6929
              ],
              [
                "0.001",
                0.6934
              ],
              [
                "0.01",
                0.6956
              ],
              [
                "0.1",
                0.7177
              ]
            ]
          }
        },
        {
          "t": "1.5, 1.9",
          "q": "The graphs of f and g are shown. The graph of f (solid) consists of two line segments: the left segment ends at an open circle at (2, 3), and the right segment begins at the dot (2, 5). The graph of g (dashed) consists of two line segments that meet at (2, 0). What is lim as x→2 of f(x)·g(x)?",
          "o": [
            "0",
            "3",
            "5",
            "The limit does not exist."
          ],
          "a": 0,
          "w": "lim f yoktur (soldan 3, sağdan 5) ve çarpım kuralı yalnız iki limit de varsa işler; o yüzden tek taraflı bak: soldan 3·0 = 0, sağdan 5·0 = 0. İki taraf eşit, limit 0. Ders: bir çarpanın limiti yokken çarpımın limiti olabilir (*multiple representations*). 3 ve 5 yalnızca f'nin tek taraflı limitleridir.",
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
                  3
                ],
                "label": "f",
                "color": 0
              },
              {
                "from": [
                  2,
                  5
                ],
                "to": [
                  6,
                  7
                ],
                "color": 0
              },
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  2,
                  0
                ],
                "color": 1,
                "dash": true
              },
              {
                "from": [
                  2,
                  0
                ],
                "to": [
                  6,
                  4
                ],
                "label": "g",
                "color": 1,
                "dash": true
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 5,
                "label": "(2, 5)"
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
          "t": "1.5, 1.9",
          "q": "If lim as x→3 of f(x) = 2 and lim as x→3 of [3f(x) − g(x)] = 1, what is lim as x→3 of g(x)/f(x)?",
          "o": [
            "2/5",
            "1/2",
            "5/2",
            "7/2"
          ],
          "a": 2,
          "w": "g(x) = 3f(x) − [3f(x) − g(x)] yaz: iki limit de var, fark kuralı ile lim g(x) = 3·2 − 1 = 5. Bölüm kuralı (payda limiti 2 ≠ 0): 5/2. 7/2, 3·2 + 1 = 7 diye işareti kaçırır; 2/5 oranı ters çevirir."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→4⁻ of |x − 4|/(x² − 16)?",
          "o": [
            "−1/8",
            "0",
            "1/8",
            "The limit does not exist."
          ],
          "a": 0,
          "w": "x < 4 iken |x − 4| = −(x − 4). Kesir −(x − 4)/[(x − 4)(x + 4)] = −1/(x + 4) → −1/8. 1/8 sağ limittir. İki taraflı limit gerçekten yoktur, ama soru yalnız soldan soruyor; \"does not exist\" bu yüzden yanlış."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→5 of (x − 5)/(√(x + 4) − 3)?",
          "o": [
            "1/6",
            "3",
            "6",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "Paydadaki kökü *conjugate* ile çarp: (x − 5)(√(x + 4) + 3)/(x + 4 − 9) = √(x + 4) + 3 → 3 + 3 = 6. 1/6, kök payda değil paydadayken bilinen kalıbı ezberden yazmaktır; 3 ise eşlenikteki +3'ü unutur."
        },
        {
          "t": "1.6–1.7",
          "q": "For a certain constant k, lim as x→2 of (x² + kx − 10)/(x − 2) exists. What is the value of the limit?",
          "o": [
            "3",
            "5",
            "7",
            "10"
          ],
          "a": 2,
          "w": "Payda 0'a gidiyor; limitin var olması için pay da x = 2'de 0 olmalı: 4 + 2k − 10 = 0 → k = 3. Sonra (x² + 3x − 10)/(x − 2) = (x + 5)(x − 2)/(x − 2) → 7. 3, k'nin kendisidir, limit değil; 5 ise x + 5'teki sabiti cevap sanır."
        },
        {
          "t": "1.8",
          "q": "What is lim as x→0 of (1 − cos x)/(x·sin x)?",
          "o": [
            "0",
            "1/2",
            "1",
            "2"
          ],
          "a": 1,
          "w": "Eşlenikle çarp: (1 − cos²x)/[x·sin x·(1 + cos x)] = sin²x/[x·sin x·(1 + cos x)] = (sin x/x)·1/(1 + cos x) → 1·1/2 = 1/2. 0, (1 − cos x)/x → 0 kuralını yanlış yerde kullanmaktan; 1 ise 1 + cos x paydasını unutmaktan gelir."
        },
        {
          "t": "1.8",
          "q": "For all x > 0, the function f satisfies (2x − 1)/x ≤ f(x) ≤ (2x² + 3)/x². What is lim as x→∞ of f(x)?",
          "o": [
            "0",
            "1",
            "2",
            "3"
          ],
          "a": 2,
          "w": "Alt sınır 2 − 1/x, üst sınır 2 + 3/x²; x → ∞ iken ikisi de 2'ye gider. *Squeeze theorem* sonsuzda da işler: limit 2. 1 ve 3, sınırlardaki −1/x ve 3/x² terimlerinin paylarından gelir; bu terimler 0'a gider."
        },
        {
          "t": "1.10–1.11",
          "q": "Let f(x) = (x² + 2x − 15)/(x − 3) for x ≠ 3, and let f(3) = 6. Which condition for continuity at x = 3 fails?",
          "o": [
            "lim as x→3 of f(x) exists and f(3) is defined, but they are not equal.",
            "f(3) is not defined.",
            "lim as x→3 of f(x) does not exist.",
            "None; f is continuous at x = 3."
          ],
          "a": 0,
          "w": "f(3) = 6 tanımlıdır. Limit: (x + 5)(x − 3)/(x − 3) = x + 5 → 8, yani limit de var. Ama 8 ≠ 6: üçüncü koşul bozulur. Bu bir *removable discontinuity*'dir (nokta yerinden oynamış); f(3) = 8 yapmak süreksizliği giderir."
        },
        {
          "t": "1.10–1.11",
          "q": "The graph of f, shown for 0 ≤ x ≤ 8, consists of three line segments. Open circles are at (2, 4) and (4, 3). The dots at (2, 1) and (4, 6) are points on the graph. Which of the following describes all discontinuities of f on the open interval (0, 8)?",
          "o": [
            "A jump discontinuity at x = 2 only",
            "A removable discontinuity at x = 2 and a jump discontinuity at x = 4",
            "A jump discontinuity at x = 2 and removable discontinuities at x = 4 and x = 6",
            "A jump discontinuity at x = 2 and a removable discontinuity at x = 4"
          ],
          "a": 3,
          "w": "x = 2: sol limit 4, sağ limit 1, farklı → *jump discontinuity*. x = 4: iki taraf da 3'e yaklaşır ama f(4) = 6 → *removable*. x = 6'da yalnızca bir köşe var: parçalar (6, 5)'te buluşur ve f orada süreklidir. Köşe süreksizlik değildir.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 9,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  2,
                  4
                ],
                "label": "f"
              },
              {
                "from": [
                  2,
                  1
                ],
                "to": [
                  6,
                  5
                ]
              },
              {
                "from": [
                  6,
                  5
                ],
                "to": [
                  8,
                  3
                ]
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
                "p": 6,
                "label": "(4, 6)"
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
              },
              {
                "v": 8
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
          "t": "1.12–1.13",
          "q": "Let f(x) = (x² − 3x)/(x² − 9). What value should be assigned to f(3) to make f continuous at x = 3?",
          "o": [
            "0",
            "1/2",
            "1",
            "No value of f(3) can make f continuous at x = 3."
          ],
          "a": 1,
          "w": "x(x − 3)/[(x − 3)(x + 3)] = x/(x + 3) → 3/6 = 1/2. Ortak çarpan olduğu için x = 3'te bir delik vardır ve f(3) = 1/2 ile doldurulur. x = −3'te ise kalan paydadan gelen *infinite discontinuity* var; o giderilemez, ama soru x = 3'ü soruyor."
        },
        {
          "t": "1.12–1.13",
          "q": "Let f(x) = ax + 2 for x ≤ 1, f(x) = x² + b for 1 < x ≤ 3, and f(x) = 4x − a for x > 3, where a and b are constants. If f is continuous for all real numbers, what is the value of b?",
          "o": [
            "1",
            "2",
            "3",
            "5"
          ],
          "a": 1,
          "w": "İki birleşme noktası, iki denklem. x = 1: a + 2 = 1 + b. x = 3: 9 + b = 12 − a. İlki a − b = −1, ikincisi a + b = 3 verir → a = 1, b = 2. 1 a'nın değeridir; 3 ise a + b'dir."
        },
        {
          "t": "1.14",
          "q": "What is lim as x→1⁻ of (x + 2)/(x² − 3x + 2)?",
          "o": [
            "−∞",
            "−3",
            "3",
            "∞"
          ],
          "a": 3,
          "w": "Payda (x − 1)(x − 2). x → 1⁻: x − 1 küçük negatif, x − 2 ≈ −1; çarpım küçük pozitif. Pay → 3. Pozitif bölü küçük pozitif → +∞. −∞ sağdan limittir; ±3 ise payın değerini cevap sanır."
        },
        {
          "t": "1.14",
          "q": "Which of the following functions has a vertical asymptote at x = 0?",
          "o": [
            "y = (sin x)/x",
            "y = (x² + x)/x",
            "y = x/(x² + 1)",
            "y = (cos x)/x"
          ],
          "a": 3,
          "w": "x → 0 iken cos x → 1, payda → 0: değerler sınırsız büyür → *vertical asymptote*. sin x/x → 1 (delik); (x² + x)/x = x + 1 → 1 (delik); x/(x² + 1) x = 0'da tanımlıdır ve 0'dır. Paydanın 0 olması yetmez: pay 0'a gitmemelidir."
        },
        {
          "t": "1.15",
          "q": "What is lim as x→∞ of (eˣ + x⁴)/(2eˣ − x)?",
          "o": [
            "0",
            "1/2",
            "2",
            "∞"
          ],
          "a": 1,
          "w": "*Growth rates*: x → ∞ iken eˣ her kuvvetten hızlı büyür. Pay ve paydayı eˣ'e böl: (1 + x⁴/eˣ)/(2 − x/eˣ) → 1/2. x⁴'ün büyüklüğüne bakıp ∞ demek, üstelin baskınlığını unutmaktır; 2 ise oranı ters çevirir."
        },
        {
          "t": "1.15",
          "q": "Which of the following describes the horizontal asymptote(s) of the graph of y = √(9x² + 2)/(x − 1)?",
          "o": [
            "y = 0 only",
            "y = 3 only",
            "y = 9 only",
            "y = −3 and y = 3"
          ],
          "a": 3,
          "w": "√(9x² + 2) ≈ 3|x|. x → ∞: 3x/x → 3. x → −∞: |x| = −x, yani 3(−x)/x → −3. Kök içeren kesirlerde x → −∞ ayrıca hesaplanmalı: iki farklı *horizontal asymptote* var. 9, kökü almayı unutur."
        },
        {
          "t": "1.16",
          "q": "Let f(x) = x³ − 4x + 1. On which of the following intervals does the Intermediate Value Theorem guarantee that f has a zero?",
          "o": [
            "(−2, −1)",
            "(−1, 0)",
            "(0, 1)",
            "(2, 3)"
          ],
          "a": 2,
          "w": "f bir polinom, her yerde sürekli. Uçlarda işaret değiştiren aralığı ara: f(0) = 1, f(1) = −2 → (0, 1)'de bir sıfır var. Diğerleri: f(−2) = 1, f(−1) = 4; f(0) = 1; f(2) = 1, f(3) = 16. İşaret değişmeyen aralıkta IVT hiçbir garanti vermez (sıfır olabilir de, olmayabilir de)."
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "1.1–1.2",
          "q": "The limit lim as h→0 of (√(4 + h) − 2)/h represents the instantaneous rate of change of a function f at a point x = a. Which of the following identifies f, a, and the value of the limit?",
          "o": [
            "f(x) = √x, a = 4; the value is 1/4",
            "f(x) = √x, a = 4; the value is 1/2",
            "f(x) = √x, a = 2; the value is 1/4",
            "f(x) = √x, a = 2; the value is 1/(2√2)"
          ],
          "a": 0,
          "w": "Kalıp (f(a + h) − f(a))/h: burada f(x) = √x ve a = 4, çünkü f(4) = 2. Değer: eşlenikle 1/(√(4 + h) + 2) → 1/4. 1/2, eşlenikteki +2'yi unutur; a = 2 seçenekleri ise f(4) = 2 değerini nokta sanar."
        },
        {
          "t": "1.3–1.4",
          "q": "Let f(x) = 3 − (x − 1)². The graph of g consists of two line segments: the left segment ends at an open circle at (3, 6), and the right segment begins at the dot (3, 2). What is lim as x→1 of g(f(x))?",
          "o": [
            "2",
            "3",
            "6",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "İç fonksiyon: x → 1 iken f(x) → 3, ama hep 3'ün altından (f(x) = 3 − pozitif sayı). Yani g'nin girdisi 3'e soldan yaklaşır: lim g(f(x)) = lim y→3⁻ g(y) = 6. 2 = g(f(1)) = g(3), değerdir; \"does not exist\" g'nin 3'te iki taraflı limiti olmamasından gelir, ama burada yalnızca soldan yaklaşılıyor.",
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
                  0
                ],
                "to": [
                  3,
                  6
                ],
                "label": "g"
              },
              {
                "from": [
                  3,
                  2
                ],
                "to": [
                  6,
                  5
                ]
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 2,
                "label": "(3, 2)"
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
          "t": "1.3–1.4",
          "q": "The graph of f, shown for 0 ≤ x ≤ 8, consists of line segments. Open circles are at (2, 4), (6, 6), and (7, 4). The dots at (2, 1), (6, 2), and (7, 1) are points on the graph. For how many values of c in the open interval (0, 8) does lim as x→c of f(x) fail to exist?",
          "o": [
            "1",
            "2",
            "3",
            "4"
          ],
          "a": 1,
          "w": "Limit yalnız iki tarafın farklı değerlere gittiği yerde yoktur: x = 2 (4 ve 1) ile x = 7 (4 ve 1). x = 6'da iki taraf da 6'ya gider: limit 6 var, f(6) = 2 farklı (*removable*). x = 4'teki köşe süreksizlik bile değildir. 3, süreksizlik sayısıdır, limitin olmadığı nokta sayısı değil.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 9,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  2,
                  4
                ],
                "label": "f"
              },
              {
                "from": [
                  2,
                  1
                ],
                "to": [
                  4,
                  3
                ]
              },
              {
                "from": [
                  4,
                  3
                ],
                "to": [
                  6,
                  6
                ]
              },
              {
                "from": [
                  6,
                  6
                ],
                "to": [
                  7,
                  4
                ]
              },
              {
                "from": [
                  7,
                  1
                ],
                "to": [
                  8,
                  3
                ]
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 1,
                "label": "(2, 1)"
              },
              {
                "q": 6,
                "p": 2,
                "label": "(6, 2)"
              },
              {
                "q": 7,
                "p": 1,
                "label": "(7, 1)"
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
              },
              {
                "v": 8
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
          "t": "1.5, 1.9",
          "q": "If lim as x→2 of (f(x) − 5)/(x − 2) = 4, what is lim as x→2 of f(x)? (Assume f is defined for all x.)",
          "o": [
            "0",
            "4",
            "5",
            "9"
          ],
          "a": 2,
          "w": "f(x) − 5 = [(f(x) − 5)/(x − 2)]·(x − 2) yaz. Çarpım kuralı: 4·0 = 0, yani lim (f(x) − 5) = 0 ve lim f(x) = 5. Payda 0'a giderken bölüm sonlu kalıyorsa pay da 0'a gitmek zorundadır. 4 bölümün limitidir; 9 = 4 + 5 ise iki bilgiyi toplar."
        },
        {
          "t": "1.5, 1.9",
          "q": "Consider the following statements about functions f and g and a real number c.\nI. If neither lim as x→c of f(x) nor lim as x→c of g(x) exists, then lim as x→c of [f(x) + g(x)] does not exist.\nII. If lim as x→c of f(x) = L and lim as x→c of [f(x) + g(x)] exists, then lim as x→c of g(x) exists.\nIII. If lim as x→c of f(x) = 0 and |g(x)| ≤ 10 for all x, then lim as x→c of f(x)·g(x) = 0.\nWhich of the statements above must be true?",
          "o": [
            "III only",
            "I and II only",
            "I and III only",
            "II and III only"
          ],
          "a": 3,
          "w": "I yanlış: f(x) = 1/x ve g(x) = −1/x için c = 0'da ikisinin de limiti yok ama toplam her yerde 0. II doğru: g = (f + g) − f ve iki limit de var; fark kuralı. III doğru: −10|f(x)| ≤ f(x)g(x) ≤ 10|f(x)| ve iki sınır da 0'a gider (*squeeze theorem*)."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→0 of (√(1 + x) − √(1 − x))/x?",
          "o": [
            "0",
            "1/2",
            "1",
            "2"
          ],
          "a": 2,
          "w": "Eşlenikle çarp: [(1 + x) − (1 − x)]/[x(√(1 + x) + √(1 − x))] = 2/(√(1 + x) + √(1 − x)) → 2/2 = 1. 2, paydadaki iki kökün toplamını unutur; 1/2, payı 2x yerine x almaktan gelir; 0 ise 0/0'ı sıfır sanır."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→3 of (1/x − 1/3)/(x² − 9)?",
          "o": [
            "−1/9",
            "−1/54",
            "0",
            "1/54"
          ],
          "a": 1,
          "w": "Paydaki kesirleri birleştir: 1/x − 1/3 = (3 − x)/(3x) = −(x − 3)/(3x). Bölünce −(x − 3)/[3x(x − 3)(x + 3)] = −1/[3x(x + 3)] → −1/(9·6) = −1/54. 1/54, 3 − x = −(x − 3) işaretini kaçırır; −1/9 ise (x + 3) çarpanını unutur."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→1 of (x⁴ − 1)/(x³ − 1)?",
          "o": [
            "3/4",
            "1",
            "4/3",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "x⁴ − 1 = (x − 1)(x + 1)(x² + 1) ve x³ − 1 = (x − 1)(x² + x + 1). Sadeleşince (x + 1)(x² + 1)/(x² + x + 1) → 2·2/3 = 4/3. 3/4 oranı ters çevirir; 1 ise 0/0'ı 1 sanır."
        },
        {
          "t": "1.6–1.7",
          "q": "For a positive constant a, lim as x→0 of (√(ax + 9) − 3)/x = 2. What is the value of a?",
          "o": [
            "2",
            "6",
            "9",
            "12"
          ],
          "a": 3,
          "w": "Eşlenik: (ax + 9 − 9)/[x(√(ax + 9) + 3)] = a/(√(ax + 9) + 3) → a/6. a/6 = 2 → a = 12. 6, paydayı yalnız 3 almaktan (a/3 = 2) gelir; 2 limitin kendisidir; 9 ise kök içindeki sabittir."
        },
        {
          "t": "1.8",
          "q": "What is lim as x→0 of (1 − cos 2x)/x²?",
          "o": [
            "0",
            "1/2",
            "1",
            "2"
          ],
          "a": 3,
          "w": "Özdeşlik: 1 − cos 2x = 2sin²x. Kesir 2·(sin x/x)² → 2·1 = 2. 1/2, (1 − cos x)/x² → 1/2 kalıbını 2x'e uyarlamamaktan gelir; 0 ise (1 − cos x)/x → 0 kuralıyla karıştırmaktır; 1 ise 2 çarpanını unutur."
        },
        {
          "t": "1.8",
          "q": "What is lim as x→∞ of (5x − cos x)/(x + 2)?",
          "o": [
            "0",
            "4",
            "5",
            "The limit does not exist, because cos x oscillates."
          ],
          "a": 2,
          "w": "cos x salınır ama −1 ile 1 arasındadır: (5x − 1)/(x + 2) ≤ (5x − cos x)/(x + 2) ≤ (5x + 1)/(x + 2) ve iki sınır da 5'e gider (*squeeze theorem*). Ya da x'e böl: (5 − cos x/x)/(1 + 2/x) ve cos x/x → 0. Büyüyen x'in yanında salınım önemsizleşir; \"does not exist\" yanlış. 4, cos x'i x kadar büyüyen bir terim sanıp (5x − x)/x yazmaktan gelir."
        },
        {
          "t": "1.10–1.11",
          "q": "Which of the following functions is continuous at x = 0?",
          "o": [
            "f(x) = x·sin(1/x) for x ≠ 0, and f(0) = 0",
            "g(x) = sin(1/x) for x ≠ 0, and g(0) = 0",
            "h(x) = |x|/x for x ≠ 0, and h(0) = 1",
            "k(x) = (1 − cos x)/x² for x ≠ 0, and k(0) = 0"
          ],
          "a": 0,
          "w": "f: −|x| ≤ x·sin(1/x) ≤ |x|, *squeeze* ile limit 0 = f(0), sürekli. g: sin(1/x) salınır, limit yok. h: soldan −1, sağdan 1, *jump*. k: limit 1/2 ama k(0) = 0, *removable*. Süreklilik için limit hem var olmalı hem de değere eşit olmalı."
        },
        {
          "t": "1.10–1.11",
          "q": "Let f(x) = (x² − x − 2)/|x − 2| for x ≠ 2. Which type of discontinuity does f have at x = 2?",
          "o": [
            "Jump discontinuity",
            "Removable discontinuity",
            "Infinite discontinuity",
            "None, because the numerator and the denominator are both 0 at x = 2"
          ],
          "a": 0,
          "w": "Pay (x − 2)(x + 1). x > 2'de |x − 2| = x − 2 ve f = x + 1 → 3. x < 2'de |x − 2| = −(x − 2) ve f = −(x + 1) → −3. İki tek taraflı limit sonlu ve farklı: *jump*. 0/0 görmek tek başına delik demek değildir; mutlak değer iki tarafı ayırır."
        },
        {
          "t": "1.12–1.13",
          "q": "Let f(x) = (x² + ax + b)/(x − 1) for x ≠ 1, and f(1) = 5, where a and b are constants. If f is continuous at x = 1, what is the value of b?",
          "o": [
            "−4",
            "−3",
            "3",
            "4"
          ],
          "a": 0,
          "w": "Limitin sonlu olması için pay x = 1'de 0 olmalı: 1 + a + b = 0. O zaman pay (x − 1)(x + 1 + a) olur ve limit 2 + a. Süreklilik: 2 + a = 5 → a = 3, b = −4. 3, a'nın değeridir; 4 ise b'nin işaretini kaçırır."
        },
        {
          "t": "1.12–1.13",
          "q": "Which of the following gives all x-values at which g(x) = √(4 − x²) + 1/(x − 1) is continuous?",
          "o": [
            "(−2, 2)",
            "[−2, 2]",
            "(−2, 1) and (1, 2)",
            "[−2, 1) and (1, 2]"
          ],
          "a": 3,
          "w": "Kök için 4 − x² ≥ 0 → [−2, 2]; kesir için x ≠ 1. g tanım kümesinde süreklidir: [−2, 1) ve (1, 2]. Uçlarda (x = ±2) tek taraflı süreklilik yeter, bu yüzden uçlar dahildir. [−2, 2], x = 1'deki *infinite discontinuity*'yi unutur; açık aralıklar ise uçları gereksiz yere dışarıda bırakır."
        },
        {
          "t": "1.14",
          "q": "Which of the following gives all vertical asymptotes of the graph of y = (x² − 4)/(x³ − 4x² + 4x)?",
          "o": [
            "x = 0 only",
            "x = 2 only",
            "x = −2, x = 0, and x = 2",
            "x = 0 and x = 2"
          ],
          "a": 3,
          "w": "Payda x(x − 2)², pay (x − 2)(x + 2). Bir (x − 2) sadeleşir, biri kalır: y = (x + 2)/[x(x − 2)]. Kalan paydada x = 0 ve x = 2 var → iki *vertical asymptote*. (x − 2) sadeleşti diye x = 2'yi delik sanmak hatadır: paydada ikinci kuvveti vardı. x = −2 payın sıfırıdır, asimptot değil."
        },
        {
          "t": "1.14",
          "q": "What is lim as x→0⁺ of (1/x − 1/x²)?",
          "o": [
            "−∞",
            "0",
            "1",
            "∞"
          ],
          "a": 0,
          "w": "∞ − ∞ bir *indeterminate form*; birleştir: (x − 1)/x². x → 0⁺: pay → −1, payda küçük pozitif → −∞. 1/x² terimi 1/x'ten çok daha hızlı büyür. 0, \"∞ − ∞ = 0\" yanılgısıdır; ∞ ise yalnız 1/x terimine bakar."
        },
        {
          "t": "1.15",
          "q": "What is lim as x→−∞ of √(x² + 3x)/(2x − 1)?",
          "o": [
            "−2",
            "−1/2",
            "1/2",
            "2"
          ],
          "a": 1,
          "w": "√(x²) = |x| ve x < 0 iken |x| = −x. Pay = −x·√(1 + 3/x), payda = x(2 − 1/x): oran → −1/2. 1/2, x → −∞'da kökten çıkan eksi işaretini unutur; ±2 oranı ters çevirir."
        },
        {
          "t": "1.15",
          "q": "What is lim as x→∞ of [√(x² + 6x) − x]?",
          "o": [
            "0",
            "3",
            "6",
            "∞"
          ],
          "a": 1,
          "w": "∞ − ∞ belirsiz. Eşlenikle çarp: (x² + 6x − x²)/(√(x² + 6x) + x) = 6x/(√(x² + 6x) + x). x'e böl: 6/(√(1 + 6/x) + 1) → 6/2 = 3. 0, \"∞ − ∞ = 0\" yanılgısıdır; 6, paydadaki iki terimi tek x sanmaktan gelir."
        },
        {
          "t": "1.16",
          "q": "The function f is continuous on [0, 6]. Selected values of f are given in the table. Consider the following statements.\nI. f(c) = 0 for some c in (0, 2).\nII. f(c) = 5 for some c in (2, 6).\nIII. The equation f(x) = 0 has exactly two solutions in [0, 6].\nWhich of the statements above must be true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "I: f(0) = 4 > 0 > f(2) = −1, IVT → evet. II: f(2) = −1 < 5 < f(6) = 7, [2, 6]'da IVT → evet. III: IVT \"en az\" der: (0, 2) ve (2, 5)'te en az birer sıfır var, ama tablonun göstermediği yerlerde f başka sıfırlar da yapabilir; \"tam iki\" garanti değildir.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "0",
              "2",
              "5",
              "6"
            ],
            "rows": [
              [
                "f(x)",
                4,
                "−1",
                3,
                7
              ]
            ]
          }
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "1.1–1.2",
          "q": "For a function f, f(3) = 5, and for every h ≠ 0 the average rate of change of f over the interval between x = 3 and x = 3 + h is h² + 2h − 4. What are the instantaneous rate of change of f at x = 3 and the value of f(4)?",
          "o": [
            "Instantaneous rate −4; f(4) = −1",
            "Instantaneous rate −4; f(4) = 5",
            "Instantaneous rate −1; f(4) = 4",
            "Instantaneous rate −4; f(4) = 4"
          ],
          "a": 3,
          "w": "Anlık değişim hızı, h → 0 iken ortalama değişim hızının limitidir: h² + 2h − 4 → −4. f(4) için h = 1: (f(4) − f(3))/1 = 1 + 2 − 4 = −1, yani f(4) = 5 − 1 = 4. −1, ortalama hızın kendisidir, f(4) değil; −1'i anlık hız sanmak h'yi 0'a götürmeyi unutmaktır."
        },
        {
          "t": "1.3–1.4",
          "q": "The graph of f consists of two line segments: the left segment ends at an open circle at (3, 1), and the right segment begins at the dot (3, 5). Let g(x) = (x − 3)². What is lim as x→3 of g(f(x))?",
          "o": [
            "0",
            "1",
            "4",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "lim f yoktur (soldan 1, sağdan 5), ama bileşkeye tek taraflı bak: soldan g(f(x)) → g(1) = 4, sağdan g(f(x)) → g(5) = 4 (g sürekli). İki taraf eşit: limit 4. 0 = g(3), x'i doğrudan g'ye koymaktır; \"does not exist\" iç limitin yokluğunu bileşkeye taşır; 1 ise f'nin sol limitidir.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 7,
            "ymax": 9,
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
                "label": "f"
              },
              {
                "from": [
                  3,
                  5
                ],
                "to": [
                  6,
                  8
                ]
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 5,
                "label": "(3, 5)"
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
              }
            ]
          }
        },
        {
          "t": "1.3–1.4",
          "q": "The table gives information about a function f at four values of c. At how many of these four values of c is f continuous?",
          "o": [
            "0",
            "1",
            "2",
            "3"
          ],
          "a": 1,
          "w": "Süreklilik için üç koşul birden gerekir. c = 1: 3 = 3 = 3, sürekli. c = 2: tek taraflı limitler farklı (4 ve 1). c = 3: limit 2 var ama f(3) tanımsız. c = 4: 2 ve −1 farklı. Yalnızca c = 1. 2, limitin var olduğu noktaları (c = 1 ve c = 3) sayar.",
          "fig": {
            "type": "table",
            "head": [
              "c",
              "f(c)",
              "lim as x→c⁻ of f(x)",
              "lim as x→c⁺ of f(x)"
            ],
            "rows": [
              [
                1,
                3,
                3,
                3
              ],
              [
                2,
                1,
                4,
                1
              ],
              [
                3,
                "undefined",
                2,
                2
              ],
              [
                4,
                2,
                2,
                "−1"
              ]
            ]
          }
        },
        {
          "t": "1.3–1.4",
          "q": "The graph of f consists of two line segments: the left segment ends at an open circle at (3, 2), and the right segment begins at the dot (3, 5). What is lim as x→0⁺ of f(3 − x)?",
          "o": [
            "2",
            "3",
            "5",
            "The limit does not exist."
          ],
          "a": 0,
          "w": "u = 3 − x de: x → 0⁺ iken u, 3'e soldan yaklaşır (u < 3). Yani limit lim u→3⁻ f(u) = 2. 5, sağ limit ya da f(3)'tür: \"x → 0⁺\" gösterimine bakıp grafiği sağdan okumak tuzaktır. \"Does not exist\" ise iki taraflı limitle karıştırır.",
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
                  5
                ],
                "to": [
                  3,
                  2
                ],
                "label": "f"
              },
              {
                "from": [
                  3,
                  5
                ],
                "to": [
                  7,
                  1
                ]
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 5,
                "label": "(3, 5)"
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
          "t": "1.5, 1.9",
          "q": "If lim as x→2 of f(x)/(x − 2) = 3 and lim as x→2 of g(x) = 4, what is lim as x→2 of f(x)·g(x)/(x² − 4)?",
          "o": [
            "0",
            "3/4",
            "3",
            "12"
          ],
          "a": 2,
          "w": "Parçala: f(x)g(x)/(x² − 4) = [f(x)/(x − 2)]·g(x)·[1/(x + 2)] → 3·4·(1/4) = 3. 12, (x + 2) çarpanını unutur; 0, f(x) → 0 diye kesrin tamamını 0 sanır (oysa payda da 0'a gidiyor); 3/4 ise g'yi hesaba katmaz."
        },
        {
          "t": "1.5, 1.9",
          "q": "The function f satisfies lim as x→3⁻ of f(x) = 2 and lim as x→3⁺ of f(x) = 5. What is lim as x→3 of [(f(x))² − 7f(x)]?",
          "o": [
            "−12",
            "−10",
            "0",
            "The limit does not exist."
          ],
          "a": 1,
          "w": "Tek taraflı kurallar: soldan 2² − 7·2 = −10, sağdan 5² − 7·5 = −10. İki taraf eşit, yani limit −10 vardır, lim f(x) olmasa bile. \"Does not exist\" bu eşitliği kontrol etmez; −12, f'nin limitini 3 (x değeri) sanmaktan gelir."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→8 of (∛x − 2)/(x − 8)?",
          "o": [
            "1/12",
            "1/6",
            "1/4",
            "1/3"
          ],
          "a": 0,
          "w": "u = ∛x de: x − 8 = u³ − 8 = (u − 2)(u² + 2u + 4). Kesir 1/(u² + 2u + 4) olur ve u → 2: 1/(4 + 4 + 4) = 1/12. 1/4 ve 1/6, küp farkının ikinci çarpanını eksik yazmaktan gelir: yalnız u² (1/4), yalnız u + 4 (1/6). 1/3 ise küp kökün üssünü (x^(1/3)) cevap sanmaktır."
        },
        {
          "t": "1.6–1.7",
          "q": "What is lim as x→1 of (√(x + 3) − 2)/(√(x + 8) − 3)?",
          "o": [
            "1/24",
            "2/3",
            "1",
            "3/2"
          ],
          "a": 3,
          "w": "Pay ve paydayı ayrı ayrı eşlenikle çarp: pay (x − 1)/(√(x + 3) + 2), payda (x − 1)/(√(x + 8) + 3). Oran (√(x + 8) + 3)/(√(x + 3) + 2) → 6/4 = 3/2. 2/3 oranı ters çevirir; 1/24, 1/4 ile 1/6'yı çarpar; 1 ise 0/0'ı 1 sanır."
        },
        {
          "t": "1.6–1.7",
          "q": "Which of the following limits equal 4?\nI. lim as x→2 of (x² − 4)/(x − 2)\nII. lim as x→2 of (x³ − 8)/(x² − 4)\nIII. lim as x→2 of (x² − 4)/|x − 2|",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 0,
          "w": "I: (x − 2)(x + 2)/(x − 2) → 4. II: küp farkı, (x² + 2x + 4)/(x + 2) → 12/4 = 3. III: sağdan x + 2 → 4, soldan −(x + 2) → −4; limit yok. Yalnızca I. III'te sağ limit 4 olduğu için tuzak var: iki taraflı limit için iki taraf da gerekir."
        },
        {
          "t": "1.8",
          "q": "For all x ≥ 0, the function f satisfies 4x − 9 ≤ f(x) ≤ x² − 4x + 7. What is lim as x→4 of f(x)?",
          "o": [
            "−9",
            "4",
            "7",
            "It cannot be determined from the information given."
          ],
          "a": 2,
          "w": "Sınırları x = 4'te hesapla: 4·4 − 9 = 7 ve 16 − 16 + 7 = 7. İkisi de 7'ye gittiği için *squeeze theorem* limitin 7 olduğunu söyler. Ayrıca (x² − 4x + 7) − (4x − 9) = (x − 4)² ≥ 0: sınırlar gerçekten sıralı ve x = 4'te birbirine değiyor. −9 alt sınırın x = 0'daki değeridir; sıkıştırma yalnızca iki sınırın buluştuğu noktada sonuç verir."
        },
        {
          "t": "1.10–1.11",
          "q": "Let f(x) = x/sin x. Which of the following describes the discontinuities of f at x = 0 and at x = π?",
          "o": [
            "Removable at x = 0 and infinite at x = π",
            "Infinite at x = 0 and removable at x = π",
            "Removable at both x = 0 and x = π",
            "Infinite at both x = 0 and x = π"
          ],
          "a": 0,
          "w": "x = 0: x/sin x = 1/(sin x/x) → 1; limit var, f(0) tanımsız → *removable*. x = π: pay π ≠ 0, payda sin x → 0 → değerler sınırsız → *infinite*. Paydanın sıfırları aynı tür süreksizliği vermez; payın o noktadaki davranışına bak."
        },
        {
          "t": "1.10–1.11",
          "q": "Consider the following statements about a function f and a real number c.\nI. If lim as x→c of f(x) = f(c), then f is continuous at x = c.\nII. If f is not continuous at x = c, then lim as x→c of f(x) does not exist.\nIII. If f is continuous at x = c, then |f| is continuous at x = c.\nWhich of the statements above must be true?",
          "o": [
            "I only",
            "II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 2,
          "w": "I doğru: eşitlik yazılabiliyorsa f(c) tanımlı ve limit var; üç koşul da tamam. II yanlış: *removable discontinuity*'de f sürekli değildir ama limit vardır. III doğru: |u| sürekli bir fonksiyondur ve sürekli fonksiyonların bileşkesi süreklidir."
        },
        {
          "t": "1.10–1.11",
          "q": "Let f(x) = x² + 1 for x < 1, f(1) = 5, and f(x) = ax − 1 for x > 1, where a is a constant. For what value of a does f have a removable discontinuity at x = 1?",
          "o": [
            "2",
            "3",
            "6",
            "There is no such value of a."
          ],
          "a": 1,
          "w": "*Removable* için limit var olmalı ama f(1)'e eşit olmamalı. Sol limit 2, sağ limit a − 1: a = 3 ile iki taraf 2'de buluşur ve f(1) = 5 ≠ 2 → *removable*. a = 6 sağ limiti 5 = f(1) yapar ama sol limit 2 kalır: *jump*. 3 dışındaki her a bir *jump* verir."
        },
        {
          "t": "1.12–1.13",
          "q": "Let f(x) = tan(2x)/sin(5x) for 0 < |x| < π/10. What value should be assigned to f(0) to make f continuous at x = 0?",
          "o": [
            "0",
            "2/5",
            "1",
            "5/2"
          ],
          "a": 1,
          "w": "tan(2x)/sin(5x) = [tan(2x)/(2x)]·[(5x)/sin(5x)]·(2x)/(5x) → 1·1·2/5. Deliği limitle doldur: f(0) = 2/5. 5/2 oranı ters çevirir; 1 katsayıları unutur; 0 ise payın 0'a gitmesini cevap sanır."
        },
        {
          "t": "1.12–1.13",
          "q": "For constants a and b with b > 0, let f(x) = (√(x + a) − b)/(x − 1) for x ≠ 1. If lim as x→1 of f(x) = 1/6, what is the value of a?",
          "o": [
            "2",
            "3",
            "8",
            "9"
          ],
          "a": 2,
          "w": "Payda 0'a gidiyor ve limit sonlu: pay da 0'a gitmeli, √(1 + a) = b. Eşlenik: (x + a − b²)/[(x − 1)(√(x + a) + b)] = 1/(√(x + a) + b), çünkü b² = 1 + a. Limit 1/(2b) = 1/6 → b = 3, a = b² − 1 = 8. 3, b'nin değeridir; 9 ise b²'dir, 1 çıkarmayı unutur."
        },
        {
          "t": "1.14",
          "q": "What is lim as x→3⁻ of (x² − 2x − 3)/(x² − 6x + 9)?",
          "o": [
            "−∞",
            "0",
            "1",
            "∞"
          ],
          "a": 0,
          "w": "Payda (x − 3)², pay (x − 3)(x + 1); bir çarpan sadeleşir: (x + 1)/(x − 3). x → 3⁻: pay → 4, payda küçük negatif → −∞. Sadeleştikten sonra (x − 3) hâlâ paydada: delik değil, asimptot. +∞, (x − 3)²'nin pozitifliğini sadeleştirmeden sonra da varsaymaktan gelir; 0 ise 0/0'ı sıfır sanır."
        },
        {
          "t": "1.15",
          "q": "Which of the following describes the horizontal asymptote(s) of the graph of y = (3eˣ + 2)/(eˣ − 4)?",
          "o": [
            "y = 3 only",
            "y = −1/2 only",
            "y = 2 and y = 3",
            "y = −1/2 and y = 3"
          ],
          "a": 3,
          "w": "x → ∞: eˣ'e böl, (3 + 2/eˣ)/(1 − 4/eˣ) → 3. x → −∞: eˣ → 0, kesir → 2/(−4) = −1/2. Üstel fonksiyonlarda iki yön ayrı hesaplanır, çünkü eˣ, x → −∞ iken sıfıra gider. 2 yalnızca payın sabitidir, paydayı unutur."
        },
        {
          "t": "1.15",
          "q": "What is lim as x→∞ of (2ˣ + 3ˣ)/(3ˣ⁺¹ − x⁵)?",
          "o": [
            "0",
            "1/3",
            "2/3",
            "1"
          ],
          "a": 1,
          "w": "En hızlı büyüyen terim 3ˣ ve 3ˣ⁺¹ = 3·3ˣ. 3ˣ'e böl: ((2/3)ˣ + 1)/(3 − x⁵/3ˣ) → (0 + 1)/(3 − 0) = 1/3. 1, 3ˣ⁺¹'i 3ˣ sanmaktan; 2/3, (2/3)ˣ'in 0'a gittiğini görmemekten gelir; 0 ise x⁵'i baskın sanmaktır (*growth rates*: üstel her kuvveti geçer)."
        },
        {
          "t": "1.16",
          "q": "The function f is continuous on [0, 3], with f(0) = 2 and f(3) = −1. Which of the following must be true?",
          "o": [
            "f(c) = 0 for exactly one c in (0, 3)",
            "f(c) = 3 for some c in (0, 3)",
            "f(c) = 1 for some c in (0, 1)",
            "f(c) = c for some c in (0, 3)"
          ],
          "a": 3,
          "w": "g(x) = f(x) − x tanımla: g sürekli, g(0) = 2 > 0, g(3) = −4 < 0. IVT ile bir c ∈ (0, 3) için g(c) = 0, yani f(c) = c. \"Tam bir\" denemez: IVT yalnızca varlık söyler, kaç tane olduğunu söylemez. 3, −1 ile 2 arasında değil. f(1) bilinmediği için (0, 1) aralığında 1 değeri garanti değildir."
        },
        {
          "t": "1.16",
          "q": "Let f(x) = x² − 2 for x < 1 and f(x) = x + 2 for x ≥ 1, so that f(0) = −2 and f(2) = 4. Is there a number c in the interval (0, 2) such that f(c) = 2?",
          "o": [
            "Yes, by the Intermediate Value Theorem, because 2 is between f(0) and f(2).",
            "Yes; such a c is in (0, 1).",
            "Yes; such a c is in (1, 2).",
            "No; f is not continuous on [0, 2], and f(x) ≠ 2 for every x in (0, 2)."
          ],
          "a": 3,
          "w": "IVT süreklilik ister; f x = 1'de süreksizdir (sol limit −1, f(1) = 3). [0, 1)'de f'nin değerleri [−2, −1), [1, 2]'de [3, 4]: 2 hiç alınmaz. 2'nin f(0) ile f(2) arasında olması, süreklilik olmadan hiçbir şey garanti etmez; teoremin koşulunu kontrol etmeden sonucunu kullanmak AP'de puan kaybettirir."
        }
      ]
    }
  ]
};
