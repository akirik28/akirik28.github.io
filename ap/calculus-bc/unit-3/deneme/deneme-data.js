/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-calcbc-u3.json) */
window.DENEME = {
  "store": "calcbc-u3:v1:",
  "course": "AP Calculus BC",
  "unit": "Unit 3 — Differentiation: Composite, Implicit, and Inverse Functions",
  "topics": {
    "3.1-1": "Zincir Kuralı",
    "3.1-2": "Üstel, Logaritmik ve İç İçe Zincirler",
    "3.1-3": "Tablo ve Grafikle Zincir Kuralı",
    "3.2-1": "Kapalı Türev",
    "3.2-2": "Kapalı Eğrilerde Teğet Doğruları",
    "3.3": "Ters Fonksiyonların Türevi",
    "3.4": "Ters Trigonometrik Fonksiyonların Türevi",
    "3.5–3.6": "Yöntem Seçimi ve Yüksek Mertebeden Türevler"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "3.1-1",
          "q": "If f(x) = (3x + 1)⁴, which of the following is f′(x)?",
          "o": [
            "12(3x + 1)³",
            "4(3x + 1)³",
            "4(3x + 1)³ + 3",
            "12x(3x + 1)³"
          ],
          "a": 0,
          "w": "*Chain rule*: dış fonksiyon u⁴'ün türevi 4u³; iç fonksiyon (3x + 1) aynen kalır, sonra iç türev 3 ile çarpılır: 4(3x + 1)³·3 = 12(3x + 1)³. 4(3x + 1)³ iç türevi unutur; 3'ü eklemek çarpmak yerine toplamaktır; 12x(3x + 1)³ iç türevi 3x sanır."
        },
        {
          "t": "3.1-1",
          "q": "What is d/dx √(x² + 9)?",
          "o": [
            "1/(2√(x² + 9))",
            "2x/√(x² + 9)",
            "x√(x² + 9)",
            "x/√(x² + 9)"
          ],
          "a": 3,
          "w": "√u = u^(1/2), türevi (1/2)u^(−1/2)·u′. Burada u = x² + 9 ve u′ = 2x: 2x/(2√(x² + 9)) = x/√(x² + 9). 1/(2√(x² + 9)) iç türevi (*inner derivative*) unutur; 2x/√(x² + 9) baştaki 1/2'yi atlar; x√(x² + 9) üssü bir azaltmayı unutur."
        },
        {
          "t": "3.1-1",
          "q": "If y = sin(4x), then dy/dx =",
          "o": [
            "4cos(4x)",
            "cos(4x)",
            "−4cos(4x)",
            "4cos x"
          ],
          "a": 0,
          "w": "Dış fonksiyon sin, türevi cos; içteki 4x aynen kalır ve iç türev 4 ile çarpılır: 4cos(4x). cos(4x) iç türevi unutur; eksi işareti cos'un türevine aittir, sin'in değil; 4cos x ise açının içini değiştirir."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = e^(x²), then f′(x) =",
          "o": [
            "e^(x²)",
            "x²·e^(x² − 1)",
            "2x·e^(x²)",
            "2x·e^(2x)"
          ],
          "a": 2,
          "w": "eᵘ'nun türevi eᵘ·u′: e^(x²) aynen kalır ve iç türev 2x ile çarpılır. Tek başına e^(x²) iç türevi unutur (yalnız eˣ kendi türevidir). x²·e^(x² − 1) üstel fonksiyona *power rule* uygulamaktır: üs aşağı inmez. 2x·e^(2x) üssü de değiştirir."
        },
        {
          "t": "3.1-2",
          "q": "What is d/dx ln(x² + 4)?",
          "o": [
            "1/(x² + 4)",
            "2x·ln(x² + 4)",
            "1/(2x)",
            "2x/(x² + 4)"
          ],
          "a": 3,
          "w": "(ln u)′ = u′/u. u = x² + 4 ve u′ = 2x olduğundan sonuç 2x/(x² + 4). 1/(x² + 4) iç türevi unutur; 1/(2x) ters işlem yapar (1/u′); 2x·ln(x² + 4) ln'i türevlemeden bırakır."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = 3^(2x), then f′(x) =",
          "o": [
            "3^(2x)·ln 3",
            "2·3^(2x)·ln 3",
            "2x·3^(2x − 1)",
            "2·3^(2x)/ln 3"
          ],
          "a": 1,
          "w": "aᵘ'nun türevi aᵘ·ln a·u′: 3^(2x)·ln 3·2. ln 3 çarpanı tabanın e olmamasından, 2 ise iç türevden gelir. 3^(2x)·ln 3 iç türevi unutur; 2x·3^(2x − 1) *power rule*'u yanlış yerde kullanır; ln 3 bölen değil, çarpandır."
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If h(x) = f(g(x)), what is h′(1)?",
          "o": [
            "−8",
            "−3",
            "−2",
            "2"
          ],
          "a": 3,
          "w": "İçten dışa oku: g(1) = 2; dış türev f′(g(1)) = f′(2) = −2; iç türev g′(1) = −1. h′(1) = (−2)(−1) = 2. −3 = f′(1)·g′(1), iç değer yerine x = 1'i kullanır; −2 iç türevi unutur; −8 = f′(2)·g′(2), iç türevi yanlış x'te okur.",
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
                "1",
                "4",
                "3",
                "2",
                "−1"
              ],
              [
                "2",
                "1",
                "−2",
                "3",
                "4"
              ],
              [
                "3",
                "2",
                "5",
                "1",
                "6"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If k(x) = [g(x)]², what is k′(2)?",
          "o": [
            "6",
            "8",
            "16",
            "24"
          ],
          "a": 3,
          "w": "k = u² ve u = g(x): k′(x) = 2g(x)·g′(x). x = 2'de g(2) = 3, g′(2) = 4: 2·3·4 = 24. 8 = 2g′(2), g(2)'yi koymayı unutur; 16 = [g′(2)]², türevin karesini alır; 6 = 2g(2) iç türevi atlar.",
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
                "1",
                "4",
                "3",
                "2",
                "−1"
              ],
              [
                "2",
                "1",
                "−2",
                "3",
                "4"
              ],
              [
                "3",
                "2",
                "5",
                "1",
                "6"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The graph of the piecewise linear function f is shown; it consists of the segment from (0, 1) to (3, 7) and the segment from (3, 7) to (7, 3). If h(x) = f(2x), what is h′(1)?",
          "o": [
            "1",
            "2",
            "4",
            "10"
          ],
          "a": 2,
          "w": "*Chain rule*: h′(x) = f′(2x)·2. x = 1'de iç değer 2x = 2; f'nin x = 2'deki parçası (0, 1)'den (3, 7)'ye gider, eğimi (7 − 1)/3 = 2. h′(1) = 2·2 = 4. 2 iç türevi unutur; 1 iç türeve bölmektir; 10 = 2·f(2), eğim yerine yüksekliği (f(2) = 5) kullanır.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 8,
            "ymax": 8,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  3,
                  7
                ],
                "color": 0
              },
              {
                "from": [
                  3,
                  7
                ],
                "to": [
                  7,
                  3
                ],
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 7,
                "label": "(3, 7)"
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
              },
              {
                "v": 7
              }
            ]
          }
        },
        {
          "t": "3.2-1",
          "q": "If x² + y² = 36, then dy/dx =",
          "o": [
            "−x/y",
            "x/y",
            "−y/x",
            "−x/(2y)"
          ],
          "a": 0,
          "w": "İki tarafın x'e göre türevi: 2x + 2y·dy/dx = 0 (y² için gizli zincir 2y·dy/dx; 36'nın türevi 0). Buradan dy/dx = −x/y. x/y işareti kaybeder; −y/x x ile y'yi karıştırır (yarıçapın eğimi y/x, teğet ona diktir); −x/(2y) 2x'teki 2'yi unutur."
        },
        {
          "t": "3.2-1",
          "q": "For the curve x³ + y² = 12, what is the value of dy/dx at the point (2, 2)?",
          "o": [
            "−12",
            "−3",
            "−1/3",
            "3"
          ],
          "a": 1,
          "w": "*Implicit differentiation*: 3x² + 2y·dy/dx = 0 → dy/dx = −3x²/(2y). (2, 2)'de −12/4 = −3. −12 paydaki 2y'yi unutur; −1/3 kesri ters çevirir; 3 eksiyi kaybeder."
        },
        {
          "t": "3.2-2",
          "q": "Which of the following is an equation of the line tangent to the circle x² + y² = 25 at the point (3, −4)?",
          "o": [
            "y + 4 = (3/4)(x − 3)",
            "y + 4 = −(3/4)(x − 3)",
            "y + 4 = (4/3)(x − 3)",
            "y − 4 = (3/4)(x + 3)"
          ],
          "a": 0,
          "w": "dy/dx = −x/y; (3, −4)'te −3/(−4) = 3/4. Nokta-eğim biçimi: y − (−4) = (3/4)(x − 3). −3/4 iki eksiden birini kaybeder; 4/3 yarıçapın eğimidir (teğet yarıçapa diktir); son şık noktanın işaretlerini ters koyar."
        },
        {
          "t": "3.2-2",
          "q": "At which points does the ellipse x² + 4y² = 16 have a horizontal tangent line?",
          "o": [
            "(0, 2) and (0, −2)",
            "(4, 0) and (−4, 0)",
            "(0, 4) and (0, −4)",
            "(2, 0) and (−2, 0)"
          ],
          "a": 0,
          "w": "2x + 8y·dy/dx = 0 → dy/dx = −x/(4y). *Horizontal tangent*: pay sıfır, payda sıfır değil → x = 0. Denkleme koy: 4y² = 16, y = ±2. (±4, 0) dikey teğet noktalarıdır (payda 0); (0, ±4) ve (±2, 0) eğrinin üzerinde bile değil."
        },
        {
          "t": "3.3",
          "q": "The function f is differentiable and one-to-one, with f(1) = 5 and f′(1) = 4. If g is the inverse function of f, what is g′(5)?",
          "o": [
            "−4",
            "1/5",
            "1/4",
            "4"
          ],
          "a": 2,
          "w": "(f⁻¹)′(b) = 1/f′(a), burada f(a) = b. f(1) = 5 olduğundan g(5) = 1 ve g′(5) = 1/f′(1) = 1/4. 1/5 türev yerine değeri (f(1) = 5) kullanır; 4, f'nin eğimidir, tersinki değil; −4 *reciprocal* ile işaret değiştirmeyi karıştırır."
        },
        {
          "t": "3.3",
          "q": "Let f(x) = x³ + x, and let g be the inverse function of f. What is g′(2)?",
          "o": [
            "1/13",
            "1/4",
            "4",
            "13"
          ],
          "a": 1,
          "w": "Önce f(a) = 2'yi çöz: a³ + a = 2 → a = 1, yani g(2) = 1. f′(x) = 3x² + 1 ve f′(1) = 4, bu yüzden g′(2) = 1/4. 1/13 = 1/f′(2), girdi ile çıktıyı karıştırır (2 bir *output*'tur); 4 ve 13 ise f'nin eğimleridir, tersin değil."
        },
        {
          "t": "3.4",
          "q": "d/dx arctan(3x) =",
          "o": [
            "1/(1 + 9x²)",
            "3/(1 + 9x²)",
            "3/(1 + 3x²)",
            "3/(1 + x²)"
          ],
          "a": 1,
          "w": "(arctan u)′ = u′/(1 + u²). u = 3x için u′ = 3 ve u² = 9x²: 3/(1 + 9x²). 1/(1 + 9x²) iç türevi unutur; 3/(1 + 3x²) (3x)²'yi 3x² sanır; 3/(1 + x²) paydada u yerine x yazar."
        },
        {
          "t": "3.4",
          "q": "If f(x) = arcsin x, what is f′(1/2)?",
          "o": [
            "1/2",
            "√3/2",
            "2/√3",
            "2"
          ],
          "a": 2,
          "w": "(arcsin x)′ = 1/√(1 − x²). x = 1/2'de √(1 − 1/4) = √3/2, tersi 2/√3. √3/2 kökü bulup tersini almayı unutur; 1/2 x'in kendisidir; 2 = 1/x, formülle ilgisi yok."
        },
        {
          "t": "3.5–3.6",
          "q": "If f(x) = x⁴ − 3x², then f″(x) =",
          "o": [
            "4x³ − 6x",
            "12x² − 6",
            "12x² − 6x",
            "24x"
          ],
          "a": 1,
          "w": "Önce f′(x) = 4x³ − 6x, sonra bir kez daha türev: f″(x) = 12x² − 6. 4x³ − 6x yalnızca birinci türevdir (*first derivative*); 12x² − 6x ikinci terimi türevlemez; 24x üçüncü türevdir (f‴)."
        },
        {
          "t": "3.5–3.6",
          "q": "What is the sixth derivative of y = sin x with respect to x?",
          "o": [
            "sin x",
            "cos x",
            "−sin x",
            "−cos x"
          ],
          "a": 2,
          "w": "Türevler dörtlü döngüdür: sin x → cos x → −sin x → −cos x → sin x. 6 = 4 + 2, kalan 2; yani ikinci türevle aynı: −sin x. cos x birinci, −cos x üçüncü türevdir; sin x dördüncü (ve sekizinci) türevdir."
        },
        {
          "t": "3.5–3.6",
          "q": "If f(x) = x²·ln x, then f′(x) =",
          "o": [
            "2",
            "2x ln x",
            "2x ln x + 1",
            "2x ln x + x"
          ],
          "a": 3,
          "w": "En dıştaki işlem çarpım (*product rule*): (x²)′·ln x + x²·(ln x)′ = 2x ln x + x²·(1/x) = 2x ln x + x. 2x ln x ikinci terimi unutur; 2x ln x + 1, x²·(1/x)'i 1 sanır; 2 ise çarpanların türevlerini çarpmaktır (2x·1/x)."
        }
      ]
    },
    {
      "no": 2,
      "level": "Temel",
      "minutes": 25,
      "questions": [
        {
          "t": "3.1-1",
          "q": "If f(x) = (x² − 5)³, what is the value of f′(2)?",
          "o": [
            "−12",
            "3",
            "6",
            "12"
          ],
          "a": 3,
          "w": "f′(x) = 3(x² − 5)²·2x. x = 2'de iç değer 4 − 5 = −1, karesi 1: f′(2) = 3·1·4 = 12. 3 iç türevi unutur; 6 iç türevi 2x yerine 2 alır; −12 kuvveti 2'ye indirmeyi unutup (−1)³ kullanır."
        },
        {
          "t": "3.1-1",
          "q": "d/dx (cos³x) =",
          "o": [
            "−3cos²x·sin x",
            "3cos²x",
            "−sin³x",
            "3sin²x·cos x"
          ],
          "a": 0,
          "w": "cos³x = (cos x)³: dış fonksiyon u³ (türevi 3u²), iç fonksiyon cos x (türevi −sin x). Sonuç 3cos²x·(−sin x). 3cos²x iç türevi unutur; −sin³x her parçayı ayrı türevlemektir; 3sin²x·cos x ise sin³x'in türevidir."
        },
        {
          "t": "3.1-1",
          "q": "If y = 1/(2x + 1)², then dy/dx =",
          "o": [
            "−2/(2x + 1)³",
            "4/(2x + 1)³",
            "1/(4(2x + 1))",
            "−4/(2x + 1)³"
          ],
          "a": 3,
          "w": "Negatif üsle yaz: y = (2x + 1)⁻². y′ = −2(2x + 1)⁻³·2 = −4/(2x + 1)³; *quotient rule* gerekmez. −2/(2x + 1)³ iç türev 2'yi unutur; pozitif sonuç eksiyi kaybeder; 1/(4(2x + 1)) paydanın türevini alıp tersini yazmaktır."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = ln(1 + e^(2x)), what is the value of f′(0)?",
          "o": [
            "1/2",
            "1",
            "2",
            "ln 2"
          ],
          "a": 1,
          "w": "(ln u)′ = u′/u; u = 1 + e^(2x) ve u′ = 2e^(2x). x = 0'da 2·1/(1 + 1) = 1. 1/2 iç türevdeki 2'yi unutur (e^(2x)'in türevi 2e^(2x)); 2 paydayı unutur; ln 2 ise f(0)'dır, türev değil."
        },
        {
          "t": "3.1-2",
          "q": "What is the slope of the line tangent to the graph of y = x·e^(2x) at x = 1?",
          "o": [
            "e²",
            "2e²",
            "3e²",
            "4e²"
          ],
          "a": 2,
          "w": "Çarpım + zincir: y′ = e^(2x) + x·2e^(2x). x = 1'de e² + 2e² = 3e². e² ikinci terimi unutur; 2e² yalnızca x·(e^(2x))′ terimidir; 4e² iç türev 2'yi iki terime birden uygular."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = 2^(x²), what is the value of f′(1)?",
          "o": [
            "2 ln 2",
            "4",
            "4 ln 2",
            "4/ln 2"
          ],
          "a": 2,
          "w": "(aᵘ)′ = aᵘ·ln a·u′: f′(x) = 2^(x²)·ln 2·2x. x = 1'de 2·ln 2·2 = 4 ln 2. 2 ln 2 iç türevi unutur; 4, ln 2 çarpanını unutur (o çarpan yalnızca e tabanında yoktur); ln 2 bölen değil, çarpandır."
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If h(x) = g(f(x)), what is h′(2)?",
          "o": [
            "−15",
            "−1",
            "3",
            "30"
          ],
          "a": 2,
          "w": "Burada içteki fonksiyon f: f(2) = 1. Dış türev g′(f(2)) = g′(1) = −1, iç türev f′(2) = −3; h′(2) = (−1)(−3) = 3. −15 = g′(2)·f′(2), iç değeri koymaz; −1 iç türevi unutur; 30 sırayı ters çevirir, f(g(x))'in türevidir.",
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
                "1",
                "3",
                "2",
                "4",
                "−1"
              ],
              [
                "2",
                "1",
                "−3",
                "3",
                "5"
              ],
              [
                "3",
                "4",
                "6",
                "2",
                "−2"
              ],
              [
                "4",
                "2",
                "1",
                "1",
                "3"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If m(x) = √(f(x)), what is m′(3)?",
          "o": [
            "3/4",
            "3/2",
            "3",
            "6"
          ],
          "a": 1,
          "w": "m′(x) = f′(x)/(2√f(x)). x = 3'te f(3) = 4, √4 = 2 ve f′(3) = 6: 6/(2·2) = 3/2. 3/4 kökü almayı unutur; 3 paydadaki √f(3)'ü atlar; 6 yalnızca iç türevdir.",
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
                "1",
                "3",
                "2",
                "4",
                "−1"
              ],
              [
                "2",
                "1",
                "−3",
                "3",
                "5"
              ],
              [
                "3",
                "4",
                "6",
                "2",
                "−2"
              ],
              [
                "4",
                "2",
                "1",
                "1",
                "3"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The graph of the piecewise linear function f is shown; it consists of the segment from (0, 4) to (2, 0) and the segment from (2, 0) to (6, 4). If h(x) = f(x²), what is h′(2)?",
          "o": [
            "1",
            "2",
            "4",
            "h′(2) does not exist."
          ],
          "a": 2,
          "w": "h′(x) = f′(x²)·2x. x = 2'de iç değer x² = 4; f'nin x = 4'teki parçası (2, 0)'dan (6, 4)'e gider, eğimi 1. h′(2) = 1·4 = 4. f'nin köşesi x = 2'dedir, ama f′ burada x² = 4'te okunur, köşede değil; bu yüzden h′(2) vardır. 1 iç türevi unutur; 2 iç türevi 2x yerine 2 alır.",
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
                  2,
                  0
                ],
                "color": 0
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
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 0,
                "label": "(2, 0)"
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
          "t": "3.2-1",
          "q": "If x² + xy = 10, then dy/dx =",
          "o": [
            "−(2x + y)/x",
            "−2x − y",
            "(2x + y)/x",
            "−(2x + 1)/x"
          ],
          "a": 0,
          "w": "xy bir çarpımdır: (xy)′ = 1·y + x·dy/dx. Türev: 2x + y + x·dy/dx = 0 → dy/dx = −(2x + y)/x. −2x − y x'e bölmeyi unutur; eksisiz şık işareti kaybeder; −(2x + 1)/x, (xy)′'de y'nin yerine 1 yazar."
        },
        {
          "t": "3.2-1",
          "q": "The point (e − 1, 1) lies on the curve eʸ = x + y. What is the value of dy/dx at this point?",
          "o": [
            "1/e",
            "1/(e − 1)",
            "e − 1",
            "e/(e − 1)"
          ],
          "a": 1,
          "w": "Türev: eʸ·dy/dx = 1 + dy/dx (eʸ için gizli zincir). dy/dx'leri topla: dy/dx(eʸ − 1) = 1 → dy/dx = 1/(eʸ − 1); y = 1'de 1/(e − 1). 1/e sağdaki dy/dx'i unutur; e − 1 kesri ters çevirir; e/(e − 1) payı da eʸ alır."
        },
        {
          "t": "3.2-2",
          "q": "Which of the following is an equation of the line tangent to the curve x² + 3xy + y² = 11 at the point (2, 1)?",
          "o": [
            "y − 1 = −(7/8)(x − 2)",
            "y − 1 = −(8/7)(x − 2)",
            "y − 1 = −(4/5)(x − 2)",
            "y − 2 = −(7/8)(x − 1)"
          ],
          "a": 0,
          "w": "Türev: 2x + 3(y + x·dy/dx) + 2y·dy/dx = 0 → dy/dx = −(2x + 3y)/(3x + 2y). (2, 1)'de −7/8, teğet y − 1 = −(7/8)(x − 2). −8/7 kesri ters çevirir; −4/5 çarpım kuralını unutup 3xy'nin türevini 3·dy/dx sanır; son şık noktanın koordinatlarını yer değiştirir."
        },
        {
          "t": "3.2-2",
          "q": "At which points does the curve x² − 4x + y² = 0 have a vertical tangent line?",
          "o": [
            "(2, 2) and (2, −2)",
            "(0, 0) only",
            "(4, 0) only",
            "(0, 0) and (4, 0)"
          ],
          "a": 3,
          "w": "2x − 4 + 2y·dy/dx = 0 → dy/dx = (2 − x)/y. *Vertical tangent*: payda y = 0, pay sıfır değil. y = 0'ı denkleme koy: x² − 4x = 0 → x = 0 ya da 4; ikisinde de pay 2 − x ≠ 0. (2, ±2) yatay teğet noktalarıdır (pay 0); 'only' şıkları noktalardan birini unutur."
        },
        {
          "t": "3.3",
          "q": "The table gives selected values of the increasing differentiable function f and its derivative. If g is the inverse function of f, what is g′(6)?",
          "o": [
            "1/6",
            "1/5",
            "1/2",
            "5"
          ],
          "a": 1,
          "w": "6'yı f(x) sütununda ara: f(2) = 6, yani g(6) = 2. g′(6) = 1/f′(2) = 1/5. 1/6 türev yerine değeri kullanır; 1/2, g(6) = 2 değerinin tersidir; 5 ise f'nin eğimi, tersin değil.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)"
            ],
            "rows": [
              [
                "1",
                "3",
                "2"
              ],
              [
                "2",
                "6",
                "5"
              ],
              [
                "3",
                "8",
                "1"
              ],
              [
                "4",
                "11",
                "4"
              ]
            ]
          }
        },
        {
          "t": "3.3",
          "q": "Let f(x) = 2x + cos x, and let g be the inverse function of f. What is g′(1)?",
          "o": [
            "1/2",
            "1/(2 − sin 1)",
            "1",
            "2"
          ],
          "a": 0,
          "w": "f′(x) = 2 − sin x > 0, f artan ve bire bir (*one-to-one*). Önce f(a) = 1'i çöz: 2a + cos a = 1 → a = 0. g′(1) = 1/f′(0) = 1/(2 − 0) = 1/2. 1/(2 − sin 1) türevi girdi yerine çıktıda (1'de) hesaplar; 2, f'nin eğimidir; 1 ise f(0) değeridir, eğim değil."
        },
        {
          "t": "3.4",
          "q": "d/dx arccos(x²) =",
          "o": [
            "−2x/√(1 − x⁴)",
            "2x/√(1 − x⁴)",
            "−1/√(1 − x⁴)",
            "−2x/√(1 − x²)"
          ],
          "a": 0,
          "w": "(arccos u)′ = −u′/√(1 − u²); u = x², u′ = 2x, u² = x⁴. Sonuç −2x/√(1 − x⁴). Artı işaretli şık 'co' kuralının eksisini unutur; −1/√(1 − x⁴) iç türevi atlar; −2x/√(1 − x²) kökün içine u² yerine x² koyar."
        },
        {
          "t": "3.4",
          "q": "What is the slope of the line tangent to the graph of y = x·arctan x at x = 1?",
          "o": [
            "1/2",
            "π/4",
            "π/4 + 1/2",
            "π/4 + 1"
          ],
          "a": 2,
          "w": "Çarpım kuralı: y′ = arctan x + x·1/(1 + x²). x = 1'de arctan 1 = π/4 ve 1/(1 + 1) = 1/2: π/4 + 1/2. 1/2 ve π/4 terimlerden birini unutur; π/4 + 1 arctan x'in türevini 1 sanır."
        },
        {
          "t": "3.5–3.6",
          "q": "If f(x) = e^(3x), then f‴(x) =",
          "o": [
            "e^(3x)",
            "3e^(3x)",
            "9e^(3x)",
            "27e^(3x)"
          ],
          "a": 3,
          "w": "Her türev zincirden bir 3 çarpanı getirir: f′ = 3e^(3x), f″ = 9e^(3x), f‴ = 27e^(3x). 3e^(3x) birinci, 9e^(3x) ikinci türevdir; e^(3x) iç türevi hep unutmaktır."
        },
        {
          "t": "3.5–3.6",
          "q": "A particle moves along a line so that its position at time t is s(t) = t³ + 2t² − 4t. What is the acceleration of the particle at time t = 1?",
          "o": [
            "−1",
            "3",
            "6",
            "10"
          ],
          "a": 3,
          "w": "*Acceleration* konumun ikinci türevidir: v(t) = s′(t) = 3t² + 4t − 4, a(t) = s″(t) = 6t + 4, a(1) = 10. 3 hızdır (v(1)); 6 üçüncü türevdir (s‴); −1 ise konumdur (s(1))."
        },
        {
          "t": "3.5–3.6",
          "q": "If f(x) = (x³ − 4x)/x for x ≠ 0, what is the value of f′(3)?",
          "o": [
            "5",
            "6",
            "9",
            "23"
          ],
          "a": 1,
          "w": "*Selecting procedures*: önce sadeleştir. x ≠ 0 için f(x) = x² − 4, f′(x) = 2x, f′(3) = 6. *Quotient rule* da aynı sonucu verir ama uzun. 23 yalnızca payın türevidir (3x² − 4); 5, f(3)'tür; 9 ise x²'nin değeridir, türevi değil."
        }
      ]
    },
    {
      "no": 3,
      "level": "Orta",
      "minutes": 25,
      "questions": [
        {
          "t": "3.1-1",
          "q": "If f(x) = √(x³ + 1), what is the value of f′(2)?",
          "o": [
            "1/6",
            "2",
            "4",
            "6"
          ],
          "a": 1,
          "w": "f′(x) = 3x²/(2√(x³ + 1)). x = 2'de iç değer 9, √9 = 3, iç türev 12: 12/(2·3) = 2. 1/6 iç türevi unutur; 4 baştaki 1/2'yi atlar; 6 paydadaki kökü unutur."
        },
        {
          "t": "3.1-1",
          "q": "If y = sin²(3x), then dy/dx =",
          "o": [
            "2sin(3x)·cos(3x)",
            "−6sin(3x)·cos(3x)",
            "6cos(3x)",
            "6sin(3x)·cos(3x)"
          ],
          "a": 3,
          "w": "sin²(3x) = [sin(3x)]²: üç katman var. Kare → 2sin(3x); sin → cos(3x); 3x → 3. Çarpım 6sin(3x)cos(3x) (= 3sin(6x)). 2sin(3x)cos(3x) en içteki 3'ü unutur; eksili şık sin'in türevini −cos sanır; 6cos(3x) dıştaki karenin türevini atlar."
        },
        {
          "t": "3.1-1",
          "q": "Which of the following is an equation of the line tangent to the graph of y = (2x − 3)⁵ at x = 2?",
          "o": [
            "y − 1 = 5(x − 2)",
            "y = 10(x − 2)",
            "y − 2 = 10(x − 1)",
            "y − 1 = 10(x − 2)"
          ],
          "a": 3,
          "w": "y(2) = (4 − 3)⁵ = 1; y′ = 5(2x − 3)⁴·2 = 10(2x − 3)⁴, y′(2) = 10. Teğet: y − 1 = 10(x − 2). Eğimi 5 olan şık iç türevi unutur; y = 10(x − 2) noktanın y değerini 0 alır; son şık x ile y'yi yer değiştirir."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = e^(tan x), what is the value of f′(π/4)?",
          "o": [
            "e",
            "√2·e",
            "2e",
            "e²"
          ],
          "a": 2,
          "w": "f′(x) = e^(tan x)·sec²x. x = π/4'te tan(π/4) = 1 ve sec²(π/4) = 1/cos²(π/4) = 2: f′(π/4) = 2e. e iç türevi unutur; √2·e, sec'in karesini almayı unutur; e² üssü türevle karıştırır."
        },
        {
          "t": "3.1-2",
          "q": "d/dx ln(√(x² + 1)) =",
          "o": [
            "2x/(x² + 1)",
            "1/(2√(x² + 1))",
            "x/√(x² + 1)",
            "x/(x² + 1)"
          ],
          "a": 3,
          "w": "Önce logaritma kuralı: ln(√u) = (1/2)ln u. Türev (1/2)·2x/(x² + 1) = x/(x² + 1). 2x/(x² + 1) 1/2 çarpanını unutur; 1/(2√(x² + 1)) ln'in türevini atlar; x/√(x² + 1) ise √(x² + 1)'in türevidir, ln'i unutur."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = ((x − 1)/(x + 1))³, what is the value of f′(0)?",
          "o": [
            "−6",
            "2",
            "3",
            "6"
          ],
          "a": 3,
          "w": "Dış: u³ → 3u²·u′. İç: u = (x − 1)/(x + 1), *quotient rule* ile u′ = [(x + 1) − (x − 1)]/(x + 1)² = 2/(x + 1)². x = 0'da u = −1, u′ = 2: 3·1·2 = 6. 3 iç türevi unutur; 2 yalnızca iç türevdir; −6 kareyi alırken işareti korur, oysa (−1)² = 1."
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If F(x) = x·f(g(x)), what is F′(2)?",
          "o": [
            "−6",
            "−5",
            "−3",
            "1"
          ],
          "a": 1,
          "w": "Çarpım + zincir: F′(x) = f(g(x)) + x·f′(g(x))·g′(x). x = 2'de g(2) = 3: F′(2) = f(3) + 2·f′(3)·g′(2) = 1 + 2(−3)(1) = −5. −6 çarpım kuralının ilk terimini unutur; −3 yalnızca (f∘g)′(2)'dir; 1 ise yalnızca ilk terimdir.",
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
                "0",
                "2",
                "−1",
                "1",
                "5"
              ],
              [
                "1",
                "3",
                "4",
                "2",
                "−2"
              ],
              [
                "2",
                "0",
                "2",
                "3",
                "1"
              ],
              [
                "3",
                "1",
                "−3",
                "0",
                "3"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If k(x) = 1/g(x), what is k′(1)?",
          "o": [
            "−1/2",
            "1/4",
            "1/2",
            "2"
          ],
          "a": 2,
          "w": "k = [g(x)]⁻¹: k′(x) = −g′(x)/[g(x)]². x = 1'de g(1) = 2, g′(1) = −2: −(−2)/4 = 1/2. −1/2 = 1/g′(1), türevin tersini alır; 2 paydanın karesini unutur; 1/4 = 1/[g(1)]², iç türevi atlar.",
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
                "0",
                "2",
                "−1",
                "1",
                "5"
              ],
              [
                "1",
                "3",
                "4",
                "2",
                "−2"
              ],
              [
                "2",
                "0",
                "2",
                "3",
                "1"
              ],
              [
                "3",
                "1",
                "−3",
                "0",
                "3"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The graph of the piecewise linear function g is shown; it consists of segments from (0, 0) to (2, 4), from (2, 4) to (5, 1), and from (5, 1) to (7, 5). If h(x) = [g(x)]³, what is h′(3)?",
          "o": [
            "−27",
            "−9",
            "−3",
            "27"
          ],
          "a": 0,
          "w": "h′(x) = 3[g(x)]²·g′(x). Grafikten g(3) = 3 ((2, 4)'ten (5, 1)'e inen parça) ve eğim g′(3) = (1 − 4)/3 = −1. h′(3) = 3·9·(−1) = −27. −9 kareyi unutur; −3, [g(3)]²'yi atlar; 27 eğimin işaretini kaybeder.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 8,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  0
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
                  5,
                  1
                ],
                "color": 0
              },
              {
                "from": [
                  5,
                  1
                ],
                "to": [
                  7,
                  5
                ],
                "color": 0,
                "label": "g"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 4,
                "label": "(2, 4)"
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
            ]
          }
        },
        {
          "t": "3.2-1",
          "q": "For the curve x²y + y³ = 10, what is the value of dy/dx at the point (3, 1)?",
          "o": [
            "−2",
            "−2/3",
            "−1/2",
            "1/2"
          ],
          "a": 2,
          "w": "Türev: (2xy + x²·dy/dx) + 3y²·dy/dx = 0 → dy/dx = −2xy/(x² + 3y²). (3, 1)'de −6/(9 + 3) = −1/2. −2/3, y³'ün türevindeki 3y²·dy/dx terimini unutur; −2 kesri ters çevirir; 1/2 işareti kaybeder."
        },
        {
          "t": "3.2-1",
          "q": "If cos y = x², then dy/dx =",
          "o": [
            "2x/sin y",
            "−2x·sin y",
            "−sin y/(2x)",
            "−2x/sin y"
          ],
          "a": 3,
          "w": "Türev: −sin y·dy/dx = 2x → dy/dx = −2x/sin y. 2x/sin y cos'un türevindeki eksiyi kaybeder; −2x·sin y bölmek yerine çarpar; −sin y/(2x) kesri ters çevirir."
        },
        {
          "t": "3.2-2",
          "q": "Which of the following is an equation of the normal line to the curve x² − xy + y² = 3 at the point (−1, 1)?",
          "o": [
            "y = x + 2",
            "y = −x",
            "y = −x + 2",
            "x = −1"
          ],
          "a": 1,
          "w": "Türev: 2x − (y + x·dy/dx) + 2y·dy/dx = 0 → dy/dx = (y − 2x)/(2y − x). (−1, 1)'de 3/3 = 1. *Normal line* teğete diktir: eğim −1, y − 1 = −(x + 1), yani y = −x. y = x + 2 teğet doğrusudur; y = −x + 2 doğru eğimi yanlış noktadan, (1, 1)'den geçirir; x = −1 ancak teğet yatay olsaydı normal olurdu."
        },
        {
          "t": "3.2-2",
          "q": "At which points does the circle x² + y² − 6x + 4y = 12 have a horizontal tangent line?",
          "o": [
            "(3, 3) and (3, −7)",
            "(8, −2) and (−2, −2)",
            "(3, 5) and (3, −5)",
            "(3, −2) only"
          ],
          "a": 0,
          "w": "Türev: 2x + 2y·dy/dx − 6 + 4·dy/dx = 0 → dy/dx = (3 − x)/(y + 2). Yatay teğet: pay 0 → x = 3. Denkleme koy: 9 + y² − 18 + 4y = 12 → y² + 4y − 21 = 0 → y = 3 ya da −7 (payda ≠ 0). (8, −2) ve (−2, −2) dikey teğet noktalarıdır; (3, ±5) merkezin kaymasını hesaba katmaz; (3, −2) merkezdir, eğri üzerinde değil."
        },
        {
          "t": "3.3",
          "q": "The function f is differentiable and increasing, with f(3) = 8, f′(3) = 4, and f′(8) = 2. If g is the inverse function of f, what is g′(8)?",
          "o": [
            "1/8",
            "1/4",
            "1/2",
            "4"
          ],
          "a": 1,
          "w": "f(3) = 8 olduğundan g(8) = 3. g′(8) = 1/f′(g(8)) = 1/f′(3) = 1/4. 1/2 = 1/f′(8) en sık yapılan hatadır: 8, f'nin girdisi değil çıktısıdır; 1/8 değerin tersidir; 4, f'nin eğimidir."
        },
        {
          "t": "3.3",
          "q": "Let f(x) = x³ + 4x − 2. Which of the following is an equation of the line tangent to the graph of the inverse function f⁻¹ at x = 3?",
          "o": [
            "y − 1 = (1/7)(x − 3)",
            "y − 3 = 7(x − 1)",
            "y − 1 = (1/31)(x − 3)",
            "y − 3 = (1/7)(x − 1)"
          ],
          "a": 0,
          "w": "f(1) = 1 + 4 − 2 = 3, yani f⁻¹(3) = 1 ve nokta (3, 1). f′(x) = 3x² + 4, f′(1) = 7; tersin eğimi 1/7. Teğet: y − 1 = (1/7)(x − 3). y − 3 = 7(x − 1) f'nin kendi teğetidir; 1/31 = 1/f′(3), türevi yanlış noktada alır; son şık eğimi doğru alıp noktayı (1, 3) koyar."
        },
        {
          "t": "3.4",
          "q": "d/dx arctan(√x) =",
          "o": [
            "1/(1 + x)",
            "1/(2√x(1 + x))",
            "1/(2√x(1 + x²))",
            "√x/(1 + x)"
          ],
          "a": 1,
          "w": "(arctan u)′ = u′/(1 + u²); u = √x için u′ = 1/(2√x) ve u² = x. Sonuç 1/(2√x(1 + x)). 1/(1 + x) iç türevi unutur; 1/(2√x(1 + x²)) u²'yi x² sanır; √x/(1 + x) iç türevi yanlış yazar (√x'in türevi √x değildir)."
        },
        {
          "t": "3.4",
          "q": "What is the value of lim as h→0 of [arcsin(1/2 + h) − π/6]/h?",
          "o": [
            "1/2",
            "√3/2",
            "2/√3",
            "The limit does not exist."
          ],
          "a": 2,
          "w": "Bu, *difference quotient*'in limiti: f(x) = arcsin x ve a = 1/2 için f′(1/2); arcsin(1/2) = π/6 olduğu için kalıp tamam. f′(1/2) = 1/√(1 − 1/4) = 2/√3. √3/2 kökün tersini almayı unutur; 1/2 a'nın kendisidir; limit vardır, çünkü arcsin x = 1/2'de türevlenebilir."
        },
        {
          "t": "3.5–3.6",
          "q": "For the curve x² − y² = 8, what is the value of d²y/dx² at the point (3, 1)?",
          "o": [
            "−8",
            "−2",
            "3",
            "8"
          ],
          "a": 0,
          "w": "Önce y′ = x/y; (3, 1)'de y′ = 3. *Quotient rule* ile y″ = (y − x·y′)/y² (y'nin türevi y′, gizli zincir). Yerine koy: (1 − 3·3)/1 = −8. (Genel biçim: y″ = (y² − x²)/y³ = −8/y³.) 3 yalnızca birinci türevdir; −2, y′ yerine 1 koyar; 8 işareti kaybeder."
        },
        {
          "t": "3.5–3.6",
          "q": "If f(x) = ln(2x + 1), what is the value of f″(0)?",
          "o": [
            "−4",
            "−2",
            "2",
            "4"
          ],
          "a": 0,
          "w": "f′(x) = 2/(2x + 1) = 2(2x + 1)⁻¹; f″(x) = −2(2x + 1)⁻²·2 = −4/(2x + 1)². x = 0'da −4. −2 ikinci türevde iç türevi unutur; 2, f′(0)'dır; 4 eksiyi kaybeder."
        },
        {
          "t": "3.5–3.6",
          "q": "If y = ln(x·e^(x²)) for x > 0, what is the value of dy/dx at x = 1?",
          "o": [
            "1",
            "2",
            "3",
            "3e"
          ],
          "a": 2,
          "w": "*Selecting procedures*: önce logaritma kuralları: ln(x·e^(x²)) = ln x + x². Türev 1/x + 2x; x = 1'de 3. 1 ve 2 terimlerden birini unutur; 3e, (ln u)′ = u′/u'da u'ya bölmeyi unutur (u′(1) = 3e)."
        }
      ]
    },
    {
      "no": 4,
      "level": "Zor",
      "minutes": 30,
      "questions": [
        {
          "t": "3.1-1",
          "q": "(Calculator allowed.) Let f(x) = sin(2x) and g(x) = x². For what value of x in the interval 0 < x < 1 are the lines tangent to the graphs of f and g parallel?",
          "o": [
            "0.370",
            "0.515",
            "0.672",
            "0.739"
          ],
          "a": 1,
          "w": "Paralel teğet = eşit eğim: f′(x) = 2cos(2x) ve g′(x) = 2x. 2cos(2x) = 2x, yani cos(2x) = x; hesap makinesiyle x ≈ 0,515. 0,370, f′'deki iç türev 2'yi unutup cos(2x) = 2x çözer; 0,672 türevi fonksiyonla eşitler (2cos(2x) = x²); 0,739 ise cos x = x'in köküdür."
        },
        {
          "t": "3.1-1",
          "q": "For a certain constant k, the function y = (kx + 1)³ satisfies dy/dx = 54 at x = 1. What is k?",
          "o": [
            "2",
            "∛18",
            "−1 + 3√2",
            "18"
          ],
          "a": 0,
          "w": "y′ = 3(kx + 1)²·k (iç türev k). x = 1'de 3k(k + 1)² = 54 → k(k + 1)² = 18; k = 2 sağlar: 2·9 = 18. (k³ + 2k² + k − 18 = (k − 2)(k² + 4k + 9); ikinci çarpanın gerçek kökü yok.) −1 + 3√2 iç türev k'yi unutur: 3(k + 1)² = 54; 18, koşulu x = 0'da kurar (3k = 54); ∛18 ise (kx + 1) yerine kx yazar."
        },
        {
          "t": "3.1-1",
          "q": "Let f be a differentiable function with f′(8) ≠ 0, and let g(x) = f(x³). The instantaneous rate of change of g at x = 2 is how many times the instantaneous rate of change of f at x = 8?",
          "o": [
            "3",
            "4",
            "8",
            "12"
          ],
          "a": 3,
          "w": "g′(x) = f′(x³)·3x². x = 2'de iç değer 8: g′(2) = f′(8)·12, yani 12 kat. 3 yalnızca üssün katsayısıdır (x²'yi unutur); 4 = x²; 8 iç değerdir (x³), iç türev değil."
        },
        {
          "t": "3.1-2",
          "q": "Let f(x) = x·e^(−x²). For what positive value of x does the graph of f have a horizontal tangent line?",
          "o": [
            "1/2",
            "1/√2",
            "1",
            "√2"
          ],
          "a": 1,
          "w": "Çarpım + zincir: f′(x) = e^(−x²) + x·e^(−x²)·(−2x) = e^(−x²)(1 − 2x²). e^(−x²) hiç sıfır olmaz, bu yüzden 1 − 2x² = 0 → x = 1/√2. 1/2, x² = 1/2 ile x'i karıştırır; 1 iç türevdeki 2'yi unutur (1 − x² = 0); √2 ise 2x² = 1 yerine x² = 2 çözer."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = 10^(x³), what is the value of f′(1)?",
          "o": [
            "3 ln 10",
            "30",
            "30 ln 10",
            "30/ln 10"
          ],
          "a": 2,
          "w": "f′(x) = 10^(x³)·ln 10·3x². x = 1'de 10·ln 10·3 = 30 ln 10. 30, ln 10 çarpanını unutur (o çarpan yalnızca e tabanında yoktur); 3 ln 10, 10^(x³) çarpanını atlar; ln 10 bölen değil, çarpandır."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = ln(cos²(3x)), what is the value of f′(π/12)?",
          "o": [
            "−6",
            "−3",
            "−2",
            "6"
          ],
          "a": 0,
          "w": "Önce sadeleştir: ln(cos²(3x)) = 2 ln|cos(3x)|. Türev 2·(−3sin(3x))/cos(3x) = −6tan(3x). x = π/12'de 3x = π/4, tan(π/4) = 1: −6. −3 karenin 2'sini, −2 içteki 3'ü unutur; 6 cos'un türevindeki eksiyi kaybeder."
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. Let h(x) = f(g(x)). Using the line tangent to the graph of h at x = 2, what is the approximation of h(2.1)?",
          "o": [
            "1.4",
            "1.7",
            "2.6",
            "4.1"
          ],
          "a": 2,
          "w": "h(2) = f(g(2)) = f(1) = 2 ve h′(2) = f′(g(2))·g′(2) = f′(1)·g′(2) = (−3)(−2) = 6. Teğet doğrusu: h(2,1) ≈ 2 + 6(0,1) = 2,6. 1,7 iç türevi unutur (eğim −3); 1,4 eksi çarpı eksiyi eksi sayar; 4,1 ise h yerine f'nin kendi teğetini kullanır (f(2) = 4, f′(2) = 1).",
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
                "1",
                "2",
                "−3",
                "3",
                "2"
              ],
              [
                "2",
                "4",
                "1",
                "1",
                "−2"
              ],
              [
                "3",
                "1",
                "5",
                "4",
                "1/2"
              ],
              [
                "4",
                "3",
                "−1",
                "2",
                "3"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If k(x) = f(x)·g(2x), what is k′(1)?",
          "o": [
            "−11",
            "−7",
            "−1",
            "12"
          ],
          "a": 0,
          "w": "k′(x) = f′(x)·g(2x) + f(x)·g′(2x)·2. x = 1'de iç değer 2x = 2: k′(1) = (−3)(1) + 2·(−2)·2 = −3 − 8 = −11. −7 iç türev 2'yi unutur; −1, g ve g′'yü 2 yerine 1'de okur; 12 türevleri çarpar, *product rule* bu değil.",
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
                "1",
                "2",
                "−3",
                "3",
                "2"
              ],
              [
                "2",
                "4",
                "1",
                "1",
                "−2"
              ],
              [
                "3",
                "1",
                "5",
                "4",
                "1/2"
              ],
              [
                "4",
                "3",
                "−1",
                "2",
                "3"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The graphs of the piecewise linear function f and the linear function g are shown. The graph of f consists of the segment from (0, 1) to (2, 5) and the segment from (2, 5) to (6, 1); the graph of g is the line through (0, 6) and (6, 0). Let h(x) = f(g(x)).\nI. h′(3) = 1\nII. h′(4) does not exist.\nIII. h′(5) = 2\nWhich of the statements above are true?",
          "o": [
            "I only",
            "I and II only",
            "I and III only",
            "I, II, and III"
          ],
          "a": 1,
          "w": "h′(x) = f′(g(x))·g′(x) ve g′(x) = −1. I: g(3) = 3, f′(3) = −1 (inen parça), h′(3) = (−1)(−1) = 1, doğru. II: g(4) = 2, f'nin köşesi; soldan ve sağdan eğimler farklı (1 ve −2), h′(4) yok, doğru. III: g(5) = 1, f′(1) = 2, h′(5) = 2·(−1) = −2; iç türevin eksisi unutulursa 2 çıkar, yanlış.",
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
                  6,
                  1
                ],
                "color": 0,
                "label": "f"
              },
              {
                "from": [
                  6,
                  0
                ],
                "to": [
                  0,
                  6
                ],
                "color": 1,
                "dash": true,
                "label": "g"
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
              }
            ]
          }
        },
        {
          "t": "3.2-1",
          "q": "For the curve x² + 2xy − y³ = 2, what is the value of dy/dx at the point (1, 1)?",
          "o": [
            "−4",
            "1/4",
            "2",
            "4"
          ],
          "a": 3,
          "w": "Türev: 2x + 2(y + x·dy/dx) − 3y²·dy/dx = 0. dy/dx'li terimleri topla: dy/dx(2x − 3y²) = −(2x + 2y) → dy/dx = (2x + 2y)/(3y² − 2x). (1, 1)'de 4/1 = 4. 2, 2xy'nin türevinde çarpım kuralını unutur (yalnızca 2·dy/dx yazar); −4 işareti taşırken kaybeder; 1/4 kesri ters çevirir."
        },
        {
          "t": "3.2-1",
          "q": "If tan(x + y) = x, then dy/dx =",
          "o": [
            "−sin²(x + y)",
            "cos²(x + y)",
            "sec²(x + y) − 1",
            "cos²(x + y) + 1"
          ],
          "a": 0,
          "w": "Türev: sec²(x + y)·(1 + dy/dx) = 1 (içteki x + y'nin türevi 1 + dy/dx). 1 + dy/dx = cos²(x + y) → dy/dx = cos²(x + y) − 1 = −sin²(x + y). cos²(x + y) iç türevdeki 1'i çıkarmayı unutur; sec²(x + y) − 1, 1/sec² yerine sec² yazar; cos²(x + y) + 1 ise 1'i yanlış tarafa geçirir."
        },
        {
          "t": "3.2-2",
          "q": "At which points does the curve x² − 2xy + 4y² = 12 have a vertical tangent line?",
          "o": [
            "(2, 2) and (−2, −2)",
            "(1, 4) and (−1, −4)",
            "(4, 1) and (−4, −1)",
            "(2√3, 0) and (−2√3, 0)"
          ],
          "a": 2,
          "w": "Türev: 2x − 2(y + x·dy/dx) + 8y·dy/dx = 0 → dy/dx = (y − x)/(4y − x). *Vertical tangent*: payda 0 → x = 4y. Denkleme koy: 16y² − 8y² + 4y² = 12y² = 12 → y = ±1; noktalar (4, 1) ve (−4, −1), orada pay y − x ≠ 0. (±2, ±2) yatay teğet noktalarıdır (pay 0); (1, 4) x ile y'yi karıştırır; (±2√3, 0) eksen kesimleridir, orada eğim 1."
        },
        {
          "t": "3.2-2",
          "q": "The point (1, 0) lies on the curve x·eʸ = y + 1. Which of the following is an equation of the line tangent to the curve at this point?",
          "o": [
            "y = 0",
            "y = x − 1",
            "x = 1",
            "y = −x + 1"
          ],
          "a": 2,
          "w": "Türev: eʸ + x·eʸ·dy/dx = dy/dx → dy/dx(1 − x·eʸ) = eʸ → dy/dx = eʸ/(1 − x·eʸ). (1, 0)'da pay 1, payda 1 − 1 = 0: eğim tanımsız, teğet dikey, yani x = 1. y = 0 paydayı değil payı sıfır sanır (yatay teğet); y = x − 1 paydayı unutup eğimi eʸ = 1 alır; y = −x + 1 işareti de değiştirir."
        },
        {
          "t": "3.3",
          "q": "Let f(x) = x³ + 3x + 1, and let g be the inverse function of f. What is g′(−3)?",
          "o": [
            "−1/6",
            "1/30",
            "1/6",
            "6"
          ],
          "a": 2,
          "w": "Önce f(a) = −3'ü çöz: a³ + 3a + 1 = −3 → a³ + 3a + 4 = 0, a = −1 (f′ = 3x² + 3 > 0 olduğu için tek çözüm). g′(−3) = 1/f′(−1) = 1/6. 1/30 = 1/f′(−3), çıktıyı girdi sanır; −1/6, g(−3) = −1'in işaretini eğime taşır; 6, f'nin eğimidir."
        },
        {
          "t": "3.3",
          "q": "The function h is differentiable and decreasing, with h(2) = 5, h′(2) = −3, h(5) = 4, and h′(5) = −2. If k is the inverse function of h, which of the following must be true?",
          "o": [
            "k′(2) = −1/3",
            "k′(4) = −1/3",
            "k′(5) = −1/2",
            "k′(5) = −1/3"
          ],
          "a": 3,
          "w": "h(2) = 5 olduğundan k(5) = 2 ve k′(5) = 1/h′(2) = −1/3. k′(5) = −1/2 tuzaktır: 1/h′(5), girdi ile çıktıyı karıştırır. k′(4) = 1/h′(5) = −1/2'dir, −1/3 değil (h(5) = 4); k′(2) için h(a) = 2 olan a verilmemiş."
        },
        {
          "t": "3.4",
          "q": "Which of the following is an equation of the line tangent to the graph of y = arccos(2x) at x = 1/4?",
          "o": [
            "y − π/3 = −(4/√3)(x − 1/4)",
            "y − π/3 = −(2/√3)(x − 1/4)",
            "y − π/6 = −(4/√3)(x − 1/4)",
            "y − π/3 = (4/√3)(x − 1/4)"
          ],
          "a": 0,
          "w": "y(1/4) = arccos(1/2) = π/3. y′ = −2/√(1 − 4x²); x = 1/4'te √(1 − 1/4) = √3/2, y′ = −2/(√3/2) = −4/√3. −2/√3 iç türev 2'yi unutur; π/6, arcsin(1/2) ile karıştırır; artı işaretli şık 'co'nun eksisini unutur."
        },
        {
          "t": "3.4",
          "q": "The point (1 + π/4, 1) lies on the curve arctan y + y = x. What is the value of dy/dx at this point?",
          "o": [
            "1/2",
            "2/3",
            "3/2",
            "2"
          ],
          "a": 1,
          "w": "Türev: [1/(1 + y²)]·dy/dx + dy/dx = 1 (arctan y için gizli zincir). dy/dx[1/(1 + y²) + 1] = 1 → dy/dx = (1 + y²)/(2 + y²); y = 1'de 2/3. 3/2 kesri ters çevirir; 2 = 1 + y², soldaki y teriminin türevini unutur; 1/2 ise yalnızca arctan y'nin türev katsayısıdır."
        },
        {
          "t": "3.5–3.6",
          "q": "If dy/dx = y² − x, what is the value of d²y/dx² at the point (1, 2)?",
          "o": [
            "−1",
            "3",
            "7",
            "11"
          ],
          "a": 3,
          "w": "Verilen dy/dx'in x'e göre türevini al; y² için gizli zincir: d²y/dx² = 2y·dy/dx − 1. (1, 2)'de dy/dx = 4 − 1 = 3, d²y/dx² = 2·2·3 − 1 = 11. 3 birinci türevdir (ya da 2y − 1, dy/dx çarpanını unutur); −1, y'yi sabit sanıp y²'nin türevini 0 alır; 7, dy/dx yerine y koyar (2y·y − 1)."
        },
        {
          "t": "3.5–3.6",
          "q": "If f(x) = e^(−2x), what is the value of f⁽⁹⁾(0), the ninth derivative of f at x = 0?",
          "o": [
            "−1024",
            "−512",
            "512",
            "1024"
          ],
          "a": 1,
          "w": "Her türev zincirden bir −2 çarpanı getirir: f⁽ⁿ⁾(x) = (−2)ⁿ·e^(−2x). n = 9 tek, (−2)⁹ = −512; x = 0'da e⁰ = 1. 512 işareti kaybeder (tek kuvvette eksi kalır); ±1024 = 2¹⁰, bir türev fazla sayar."
        },
        {
          "t": "3.5–3.6",
          "q": "For x ≠ 0, d/dx arctan(1/x) =",
          "o": [
            "1/(1 + x²)",
            "−1/x²",
            "x²/(1 + x²)",
            "−1/(1 + x²)"
          ],
          "a": 3,
          "w": "Zincir: [1/(1 + (1/x)²)]·(−1/x²) = −1/(x²(1 + 1/x²)) = −1/(x² + 1). (Kontrol: x > 0 için arctan(1/x) = π/2 − arctan x.) 1/(1 + x²) iç türevin eksisini kaybeder; −1/x² yalnızca iç türevdir; x²/(1 + x²) = 1/(1 + 1/x²), iç türevi hiç çarpmaz."
        }
      ]
    },
    {
      "no": 5,
      "level": "Çok zor",
      "minutes": 35,
      "questions": [
        {
          "t": "3.1-1",
          "q": "For what value of the constant k is the slope of the line tangent to the graph of y = √(kx + 3) equal to 1 at x = 1?",
          "o": [
            "−2",
            "2",
            "6",
            "−2 or 6"
          ],
          "a": 2,
          "w": "y′ = k/(2√(kx + 3)). x = 1'de k/(2√(k + 3)) = 1 → k = 2√(k + 3). Kare al: k² = 4k + 12 → (k − 6)(k + 2) = 0. Ama k = 2√(…) ≥ 0 olmalı; k = −2 karenin getirdiği yabancı köktür (orada eğim −1). Yalnız k = 6: eğim 6/(2·3) = 1. 2, paydaki kökü unutup k/2 = 1 çözer."
        },
        {
          "t": "3.1-1",
          "q": "If f(x) = cos²(πx) − sin²(πx), what is the value of f′(1/8)?",
          "o": [
            "−2π",
            "−π√2",
            "−π√2/2",
            "π√2"
          ],
          "a": 1,
          "w": "Önce sadeleştir: cos²u − sin²u = cos(2u), yani f(x) = cos(2πx) ve f′(x) = −2π·sin(2πx). x = 1/8'de sin(π/4) = √2/2: −2π·√2/2 = −π√2. −π√2/2 iç türevdeki 2'yi unutur; −2π, sin(π/4)'ü 1 alır; π√2 eksiyi kaybeder. Sadeleştirmeden zincirle de aynı sonuç çıkar."
        },
        {
          "t": "3.1-1",
          "q": "Let f be a differentiable function with f(4) = 9 and f′(4) = 6. If k(x) = √(f(x²)), what is the value of k′(2)?",
          "o": [
            "1",
            "2",
            "4",
            "12"
          ],
          "a": 2,
          "w": "Üç katman: kök, f, x². k′(x) = f′(x²)·2x/(2√(f(x²))). x = 2'de iç değer 4: k′(2) = 6·4/(2·3) = 4. 1 en içteki 2x'i unutur; 2 iç türevi 2x yerine 2 alır; 12 paydaki √f(4) = 3'ü unutur."
        },
        {
          "t": "3.1-2",
          "q": "At what value of x does the graph of y = x·2^(−x) have a horizontal tangent line?",
          "o": [
            "1/(2 ln 2)",
            "1",
            "ln 2",
            "1/ln 2"
          ],
          "a": 3,
          "w": "y′ = 2^(−x) + x·2^(−x)·ln 2·(−1) = 2^(−x)(1 − x ln 2). 2^(−x) > 0, bu yüzden 1 − x ln 2 = 0 → x = 1/ln 2 (≈ 1,44). 1, ln 2 çarpanını unutur (aˣ'in türevi aˣ değildir); ln 2 denklemi ters çözer; 1/(2 ln 2) iç türev −1'i 2 sanır."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = ln(e^(2x) + e^(−2x)), what is the value of f′((ln 3)/2)?",
          "o": [
            "4/5",
            "8/5",
            "2",
            "8/3"
          ],
          "a": 1,
          "w": "f′(x) = (2e^(2x) − 2e^(−2x))/(e^(2x) + e^(−2x)). x = (ln 3)/2'de e^(2x) = 3 ve e^(−2x) = 1/3: 2(3 − 1/3)/(3 + 1/3) = 2(8/3)/(10/3) = 8/5. 4/5 iç türevlerdeki 2'leri unutur; 8/3 paydayı unutur; 2, e^(−2x)'in türevindeki eksiyi kaybeder."
        },
        {
          "t": "3.1-2",
          "q": "If f(x) = e^(cos(x²)), what is the value of f′(√(π/2))?",
          "o": [
            "−√(2π)",
            "−√(π/2)",
            "−1",
            "√(2π)"
          ],
          "a": 0,
          "w": "Üç katman: f′(x) = e^(cos(x²))·(−sin(x²))·2x. x = √(π/2)'de x² = π/2: cos = 0, sin = 1, e⁰ = 1. f′ = −2√(π/2) = −√(2π). −1 en içteki 2x'i unutur; −√(π/2), 2x'teki 2'yi unutur; √(2π) cos'un türevindeki eksiyi kaybeder."
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x, where a is a constant. Let h(x) = f(g(x))·g(x). If h′(1) = 10, what is the value of a?",
          "o": [
            "−5",
            "−3",
            "−5/3",
            "3"
          ],
          "a": 1,
          "w": "Çarpım + zincir: h′(x) = f′(g(x))·g′(x)·g(x) + f(g(x))·g′(x). x = 1'de g(1) = 3: h′(1) = f′(3)(−2)(3) + f(3)(−2) = −6a − 8. −6a − 8 = 10 → a = −3. −5/3 ikinci terimi unutur (−6a = 10); −5 hem g(1) çarpanını hem ikinci terimi atlar (−2a = 10); 3 ilk terimde iç türevin eksisini kaybeder.",
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
                "1",
                "2",
                "1",
                "3",
                "−2"
              ],
              [
                "2",
                "5",
                "−4",
                "1",
                "3"
              ],
              [
                "3",
                "4",
                "a",
                "2",
                "5"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The table gives values of the differentiable functions f and g and their derivatives at selected values of x. If p(x) = g(f(2x)), what is p′(1)?",
          "o": [
            "−18",
            "−8",
            "3/2",
            "3"
          ],
          "a": 3,
          "w": "Üç katman: p′(x) = g′(f(2x))·f′(2x)·2. x = 1'de 2x = 2 ve f(2) = 4: p′(1) = g′(4)·f′(2)·2 = (1/2)(3)(2) = 3. 3/2 en içteki 2'yi unutur; −8 her şeyi 2x yerine x = 1'de okur; −18, g′'yü f(2) = 4 yerine 2'de okur.",
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
                "1",
                "3",
                "−2",
                "2",
                "6"
              ],
              [
                "2",
                "4",
                "3",
                "1",
                "−3"
              ],
              [
                "3",
                "1",
                "5",
                "4",
                "2"
              ],
              [
                "4",
                "2",
                "−1",
                "3",
                "1/2"
              ]
            ]
          }
        },
        {
          "t": "3.1-3",
          "q": "The graph of the piecewise linear function f is shown; it consists of segments from (0, 2) to (3, 8), from (3, 8) to (5, 4), and from (5, 4) to (8, 4). If h(x) = f(f(x)), what is h′(1)?",
          "o": [
            "−4",
            "−2",
            "4",
            "8"
          ],
          "a": 0,
          "w": "h′(x) = f′(f(x))·f′(x). Grafikten f(1) = 4 ve f′(1) = (8 − 2)/3 = 2 (ilk parça). İç değer 4, (3, 8)–(5, 4) parçasında: f′(4) = −2. h′(1) = (−2)(2) = −4. −2 iç türevi unutur; 4 = [f′(1)]², dış türevi iç değerde değil x = 1'de okur; 8 = f(1)·f′(1), değerle türevi karıştırır.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 9,
            "ymax": 9,
            "lines": [
              {
                "from": [
                  0,
                  2
                ],
                "to": [
                  3,
                  8
                ],
                "color": 0
              },
              {
                "from": [
                  3,
                  8
                ],
                "to": [
                  5,
                  4
                ],
                "color": 0
              },
              {
                "from": [
                  5,
                  4
                ],
                "to": [
                  8,
                  4
                ],
                "color": 0,
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 8,
                "label": "(3, 8)"
              },
              {
                "q": 5,
                "p": 4,
                "label": "(5, 4)"
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
              },
              {
                "v": 8
              }
            ]
          }
        },
        {
          "t": "3.2-1",
          "q": "The point (4, 1) lies on the curve xy² + ln y = 4. What is the value of dy/dx at this point?",
          "o": [
            "−9",
            "−1/3",
            "−1/8",
            "−1/9"
          ],
          "a": 3,
          "w": "Türev: y² + x·2y·dy/dx + (1/y)·dy/dx = 0 → dy/dx = −y²/(2xy + 1/y). (4, 1)'de −1/(8 + 1) = −1/9. −1/8, ln y'nin türevini unutur; −1/3, xy²'nin türevinde x'i unutur (2y·dy/dx yazar); −9 kesri ters çevirir."
        },
        {
          "t": "3.2-1",
          "q": "If e^(xy) = x + y, then dy/dx =",
          "o": [
            "(1 − e^(xy))/(e^(xy) − 1)",
            "(y·e^(xy) − 1)/(x·e^(xy) − 1)",
            "1/(x·e^(xy) − 1)",
            "(1 − y·e^(xy))/(x·e^(xy) − 1)"
          ],
          "a": 3,
          "w": "Türev: e^(xy)·(y + x·dy/dx) = 1 + dy/dx (üsteki xy bir çarpım). dy/dx'li terimleri bir tarafa topla: dy/dx(x·e^(xy) − 1) = 1 − y·e^(xy). (1 − e^(xy))/(e^(xy) − 1) üssün iç türevini (y + x·dy/dx) unutur; (y·e^(xy) − 1)/(…) payın işaretini ters çevirir; 1/(x·e^(xy) − 1) çarpım kuralının y·e^(xy) terimini atlar."
        },
        {
          "t": "3.2-2",
          "q": "At which points on the curve x² + xy + y² = 27 does the tangent line have slope −1?",
          "o": [
            "(3, 3) and (−3, −3)",
            "(3, −3) and (−3, 3)",
            "(3√3, −3√3) and (−3√3, 3√3)",
            "(0, 3√3) and (0, −3√3)"
          ],
          "a": 0,
          "w": "dy/dx = −(2x + y)/(x + 2y). Eğim −1: 2x + y = x + 2y → y = x. Denkleme koy: 3x² = 27 → x = ±3; noktalar (3, 3) ve (−3, −3). (3, −3) eğri üzerinde değil (9 ≠ 27); (±3√3, ∓3√3) y = −x'ten gelir, orada eğim +1; (0, ±3√3)'te eğim −1/2."
        },
        {
          "t": "3.2-2",
          "q": "At which points does the curve x²y + y² = 6 have a horizontal tangent line?",
          "o": [
            "There are no such points.",
            "(0, √6) only",
            "(√6, 0) and (−√6, 0)",
            "(0, √6) and (0, −√6)"
          ],
          "a": 3,
          "w": "Türev: 2xy + x²·dy/dx + 2y·dy/dx = 0 → dy/dx = −2xy/(x² + 2y). Pay 0: x = 0 ya da y = 0. y = 0 denklemi sağlamaz (0 ≠ 6). x = 0: y² = 6, y = ±√6; payda 2y ≠ 0. İki nokta da geçerli: 'only' şıkkı negatif kökü unutur; (±√6, 0) eğri üzerinde değil."
        },
        {
          "t": "3.3",
          "q": "Let f(x) = x⁵ + x³ + x, and let H(x) = f⁻¹(2x + 1), where f⁻¹ is the inverse function of f. What is H′(1)?",
          "o": [
            "2/433",
            "1/9",
            "2/9",
            "18"
          ],
          "a": 2,
          "w": "Zincir + ters: H′(x) = (f⁻¹)′(2x + 1)·2. x = 1'de iç değer 3; f(a) = 3 → a = 1 (1 + 1 + 1 = 3). f′(x) = 5x⁴ + 3x² + 1, f′(1) = 9, yani (f⁻¹)′(3) = 1/9 ve H′(1) = 2/9. 1/9 iç türev 2'yi unutur; 2/433 = 2/f′(3), girdi ile çıktıyı karıştırır; 18 tersin değil f'nin eğimini kullanır."
        },
        {
          "t": "3.3",
          "q": "The table gives selected values of the increasing differentiable function f and its derivative. Let g be the inverse function of f. Using the line tangent to the graph of g at x = 6, what is the approximation of g(6.3)?",
          "o": [
            "2.05",
            "2.075",
            "2.1",
            "2.9"
          ],
          "a": 2,
          "w": "g(6) = 2, çünkü f(2) = 6. g′(6) = 1/f′(2) = 1/3. Teğet doğrusu: g(6,3) ≈ 2 + (1/3)(0,3) = 2,1. 2,9 eğim olarak f′(2) = 3'ü kullanır; 2,05 eğimi 1/f(2) = 1/6 alır; 2,075 ise yanlış satırdan, 1/f′(3) = 1/4 ile hesaplar.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "f(x)",
              "f′(x)"
            ],
            "rows": [
              [
                "0",
                "1",
                "2"
              ],
              [
                "1",
                "4",
                "5"
              ],
              [
                "2",
                "6",
                "3"
              ],
              [
                "3",
                "9",
                "4"
              ]
            ]
          }
        },
        {
          "t": "3.4",
          "q": "If f(x) = arcsec(x²), what is the value of f′(−√2)?",
          "o": [
            "−2",
            "−√6/3",
            "√3/6",
            "√6/3"
          ],
          "a": 1,
          "w": "(arcsec u)′ = u′/(|u|√(u² − 1)). u = x² = 2 ve u′ = 2x = −2√2: (−2√2)/(2√3) = −√2/√3 = −√6/3. √6/3 iç türevin işaretini kaybeder (x negatif); √3/6 = 1/(2√3), iç türevi unutur; −2 ise formüle u yerine x koyar."
        },
        {
          "t": "3.4",
          "q": "What is the value of lim as h→0 of [arctan(√3 + h) − π/3]/h?",
          "o": [
            "1/4",
            "1/(1 + √3)",
            "1/2",
            "π/3"
          ],
          "a": 0,
          "w": "Kalıp [f(a + h) − f(a)]/h: f(x) = arctan x ve a = √3, çünkü arctan √3 = π/3. Limit f′(√3) = 1/(1 + 3) = 1/4. 1/(1 + √3) x²'deki kareyi unutur; 1/2, a = 1'deki türevdir; π/3 ise f(a)'dır, türev değil."
        },
        {
          "t": "3.5–3.6",
          "q": "For the curve x² + 4y² = 8, what is the value of d²y/dx² at the point (2, 1)?",
          "o": [
            "−1/2",
            "−1/4",
            "0",
            "1/2"
          ],
          "a": 0,
          "w": "y′ = −x/(4y); (2, 1)'de −1/2. *Quotient rule*: y″ = −(4y − x·4y′)/(16y²). Yerine koy: −(4 − 2·4·(−1/2))/16 = −(4 + 4)/16 = −1/2. (Genel biçim: y″ = −(x² + 4y²)/(16y³) = −8/(16y³).) −1/4, y'yi sabit sanıp yalnızca −1/(4y) alır; 0, bölüm kuralının payındaki eksiyi artı yazar; 1/2 dıştaki eksiyi kaybeder."
        },
        {
          "t": "3.5–3.6",
          "q": "If f(x) = x·e^(2x), what is the value of f⁽⁵⁾(0), the fifth derivative of f at x = 0?",
          "o": [
            "32",
            "80",
            "160",
            "192"
          ],
          "a": 1,
          "w": "Örüntü: f′ = (1 + 2x)e^(2x), f″ = (4 + 4x)e^(2x), f‴ = (12 + 8x)e^(2x); genel olarak f⁽ⁿ⁾(x) = (n·2ⁿ⁻¹ + 2ⁿx)e^(2x). x = 0'da n·2ⁿ⁻¹; n = 5 için 5·16 = 80. 160 = 5·2⁵, üssü bir fazla alır; 32 = 2⁵, çarpım kuralından gelen n çarpanını unutur; 192 = 6·2⁵."
        },
        {
          "t": "3.5–3.6",
          "q": "For which values of the constant a does f(x) = e^(ax) satisfy f″(x) − 5f′(x) + 6f(x) = 0 for all x?",
          "o": [
            "2 only",
            "3 only",
            "2 or 3",
            "−2 or −3"
          ],
          "a": 2,
          "w": "f′ = a·e^(ax), f″ = a²·e^(ax). Yerine koy: (a² − 5a + 6)e^(ax) = 0; e^(ax) > 0 olduğundan a² − 5a + 6 = 0 → (a − 2)(a − 3) = 0, a = 2 ya da 3. İki değer de denklemi sağlar, 'only' şıkları birini unutur; −2 ve −3 çarpanların işaretini ters okur."
        }
      ]
    }
  ]
};
