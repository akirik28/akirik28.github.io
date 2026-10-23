/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cb3N/questions.json) */
window.KIT = {
  "store": "calcbc-u3:v1:",
  "course": "AP Calculus BC",
  "unitLabel": "Unit 3 — Differentiation: Composite, Implicit, and Inverse Functions",
  "denemeler": {
    "url": "deneme/",
    "count": 5
  },
  "episodes": [
    {
      "no": 1,
      "code": "3.1-1",
      "slug": "cb301",
      "title": "Zincir Kuralı",
      "en": "The Chain Rule",
      "accent": "#F6B94A",
      "seconds": 274,
      "terms": [
        "Chain rule",
        "Composite function",
        "Inner function",
        "Outer function",
        "Leibniz notation",
        "Power rule",
        "Product rule",
        "Tangent line",
        "Slope",
        "Rate of change"
      ],
      "questions": [
        {
          "q": "f(x) = (x³ − 2x)³ ise f′(2) kaçtır?",
          "opts": [
            "48",
            "480",
            "120",
            "160"
          ],
          "a": 1,
          "why": "f′(x) = 3(x³ − 2x)²·(3x² − 2). x = 2'de iç fonksiyon 8 − 4 = 4, iç türev 12 − 2 = 10. f′(2) = 3·16·10 = 480. (48, iç türevi unutunca çıkar.)"
        },
        {
          "q": "d/dx √(x² + 5) hangisidir?",
          "opts": [
            "1/(2√(x² + 5))",
            "2x/√(x² + 5)",
            "x/√(x² + 5)",
            "x·√(x² + 5)"
          ],
          "a": 2,
          "why": "(x² + 5)^(1/2)'nin türevi (1/2)(x² + 5)^(−1/2)·2x = x/√(x² + 5). İlk şık iç türevi (2x) unutur; ikinci şık 1/2'yi unutur."
        },
        {
          "q": "y = u³ ve u = 2x − 1 olsun. x = 2 iken dy/dx kaçtır?",
          "opts": [
            "54",
            "27",
            "18",
            "6"
          ],
          "a": 0,
          "why": "x = 2'de u = 3. dy/dx = (dy/du)·(du/dx) = 3u²·2 = 3·9·2 = 54. 27, du/dx = 2 çarpanını unutunca çıkar."
        },
        {
          "q": "Aşağıdaki türevlerden hangisi doğrudur?",
          "opts": [
            "d/dx sin²x = 2cos x",
            "d/dx sin(x²) = cos(x²)",
            "d/dx sin²x = cos²x",
            "d/dx sin(x²) = 2x·cos(x²)"
          ],
          "a": 3,
          "why": "sin(x²)'de dış fonksiyon sinüs, iç x²: cos(x²)·2x. sin²x = (sin x)² ise 2 sin x·cos x olur; diğer şıklar iç türevi unutur ya da karenin yerini karıştırır."
        },
        {
          "q": "y = 1/(3x + 1)² için x = 0'da dy/dx kaçtır?",
          "opts": [
            "−2",
            "6",
            "−6",
            "−3"
          ],
          "a": 2,
          "why": "y = (3x + 1)^(−2), dy/dx = −2(3x + 1)^(−3)·3 = −6/(3x + 1)³. x = 0'da −6. (−2, iç türev 3'ü unutunca çıkar.)"
        }
      ]
    },
    {
      "no": 2,
      "code": "3.1-2",
      "slug": "cb302",
      "title": "Üstel, Logaritmik ve İç İçe Zincirler",
      "en": "Chain Rule with Exponentials, Logs, and Nested Functions",
      "accent": "#2FD6B9",
      "seconds": 277,
      "terms": [
        "Chain rule",
        "Exponential function",
        "Natural logarithm",
        "Base",
        "Exponent",
        "Nested composition",
        "Product rule",
        "Horizontal tangent",
        "Tangent line",
        "Domain"
      ],
      "questions": [
        {
          "q": "d/dx e^(sin 2x) hangisidir?",
          "opts": [
            "e^(sin 2x)",
            "cos(2x)·e^(sin 2x)",
            "2cos(2x)·e^(sin 2x)",
            "2cos(2x)·e^(cos 2x)"
          ],
          "a": 2,
          "why": "e^u'nun türevi e^u·u′. u = sin 2x, u′ = cos(2x)·2. Sonuç 2cos(2x)·e^(sin 2x); üs aynen kalır."
        },
        {
          "q": "f(x) = ((x + 1)/(x − 1))² ise f′(0) kaçtır?",
          "opts": [
            "4",
            "−4",
            "2",
            "−2"
          ],
          "a": 0,
          "why": "u = (x + 1)/(x − 1), f = u². u(0) = −1; bölüm kuralıyla u′ = −2/(x − 1)², u′(0) = −2. f′(0) = 2u·u′ = 2·(−1)·(−2) = 4."
        },
        {
          "q": "y = 5^(2x) için x = 0'da dy/dx kaçtır?",
          "opts": [
            "2",
            "10",
            "ln 5",
            "2 ln 5"
          ],
          "a": 3,
          "why": "(a^u)′ = a^u·ln a·u′. x = 0'da 5⁰·ln 5·2 = 2 ln 5. (2x·5^(2x−1) gibi kuvvet kuralı uygulamak yanlıştır: değişken üstte.)"
        },
        {
          "q": "f(x) = √(3x) olsun. f'nin x = c'deki değişim hızı, x = 1'deki değişim hızının 2 katıdır. c kaçtır?",
          "opts": [
            "4",
            "1/2",
            "1/4",
            "1/16"
          ],
          "a": 2,
          "why": "f′(x) = 3/(2√(3x)). f′(c) = 2f′(1) ⇒ 1/√c = 2/1 ⇒ √c = 1/2 ⇒ c = 1/4. (Kontrol: f′(1/4) = 3/(2·√0,75) ≈ 1,732 = 2·0,866.)"
        },
        {
          "q": "y = x·e^(−2x) eğrisinin yatay teğeti hangi x değerindedir?",
          "opts": [
            "0",
            "1/2",
            "−1/2",
            "2"
          ],
          "a": 1,
          "why": "y′ = e^(−2x) + x·e^(−2x)·(−2) = e^(−2x)(1 − 2x). e^(−2x) hiç sıfır olmaz; 1 − 2x = 0 ⇒ x = 1/2."
        }
      ]
    },
    {
      "no": 3,
      "code": "3.1-3",
      "slug": "cb303",
      "title": "Tablo ve Grafikle Zincir Kuralı",
      "en": "Chain Rule with Tables and Graphs",
      "accent": "#58C9FF",
      "seconds": 292,
      "terms": [
        "Chain rule",
        "Composite function",
        "Table of values",
        "Inner function",
        "Outer function",
        "Product rule",
        "Piecewise linear",
        "Corner",
        "Tangent line",
        "Slope"
      ],
      "questions": [
        {
          "q": "Tablodaki değerlere göre h(x) = f(g(x)) ise h′(2) kaçtır?",
          "opts": [
            "18",
            "−6",
            "6",
            "3"
          ],
          "a": 0,
          "why": "h′(2) = f′(g(2))·g′(2). g(2) = 1, f′(1) = 3, g′(2) = 6 ⇒ 3·6 = 18. (−6, f′(2)·g′(2) hatasıdır.)",
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
                "3",
                "3",
                "−2"
              ],
              [
                "2",
                "4",
                "−1",
                "1",
                "6"
              ],
              [
                "3",
                "3",
                "5",
                "4",
                "1"
              ],
              [
                "4",
                "1",
                "2",
                "2",
                "3"
              ]
            ],
            "caption": "f ve g'nin seçilmiş değerleri"
          }
        },
        {
          "q": "Aynı tabloya göre k(x) = g(f(x)) ise k′(4) kaçtır?",
          "opts": [
            "6",
            "−2",
            "−4",
            "4"
          ],
          "a": 2,
          "why": "k′(4) = g′(f(4))·f′(4). f(4) = 1, g′(1) = −2, f′(4) = 2 ⇒ −4. (6, g′(4)·f′(4) hatasıdır: içe değer yerine x konmuş.)",
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
                "3",
                "3",
                "−2"
              ],
              [
                "2",
                "4",
                "−1",
                "1",
                "6"
              ],
              [
                "3",
                "3",
                "5",
                "4",
                "1"
              ],
              [
                "4",
                "1",
                "2",
                "2",
                "3"
              ]
            ],
            "caption": "f ve g'nin seçilmiş değerleri"
          }
        },
        {
          "q": "Aynı tabloya göre m(x) = √(g(x)) ise m′(3) kaçtır?",
          "opts": [
            "1/2",
            "1/4",
            "2",
            "1/8"
          ],
          "a": 1,
          "why": "m′(x) = g′(x)/(2√g(x)). g(3) = 4, g′(3) = 1 ⇒ 1/(2·2) = 1/4.",
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
                "3",
                "3",
                "−2"
              ],
              [
                "2",
                "4",
                "−1",
                "1",
                "6"
              ],
              [
                "3",
                "3",
                "5",
                "4",
                "1"
              ],
              [
                "4",
                "1",
                "2",
                "2",
                "3"
              ]
            ],
            "caption": "f ve g'nin seçilmiş değerleri"
          }
        },
        {
          "q": "f'nin grafiği iki doğru parçasından oluşur: (0, 4)'ten (3, 1)'e ve (3, 1)'den (5, 5)'e. h(x) = f(x²) ise h′(2) kaçtır?",
          "opts": [
            "2",
            "4",
            "16",
            "8"
          ],
          "a": 3,
          "why": "h′(2) = f′(2²)·2·2 = f′(4)·4. x = 4 ikinci parçada; eğim (5 − 1)/(5 − 3) = 2. h′(2) = 2·4 = 8.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 5,
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
                "label": ""
              },
              {
                "from": [
                  3,
                  1
                ],
                "to": [
                  5,
                  5
                ],
                "label": "f"
              }
            ]
          }
        },
        {
          "q": "Tablodaki f ve g için G(x) = f(x)·[g(x)]² ise G′(1) kaçtır?",
          "opts": [
            "27",
            "51",
            "3",
            "−21"
          ],
          "a": 2,
          "why": "G′ = f′·g² + f·2g·g′. x = 1'de 3·3² + 2·2·3·(−2) = 27 − 24 = 3.",
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
                "3",
                "3",
                "−2"
              ],
              [
                "2",
                "4",
                "−1",
                "1",
                "6"
              ],
              [
                "3",
                "3",
                "5",
                "4",
                "1"
              ],
              [
                "4",
                "1",
                "2",
                "2",
                "3"
              ]
            ],
            "caption": "f ve g'nin seçilmiş değerleri"
          }
        }
      ]
    },
    {
      "no": 4,
      "code": "3.2-1",
      "slug": "cb304",
      "title": "Kapalı Türev",
      "en": "Implicit Differentiation",
      "accent": "#FF6F61",
      "seconds": 274,
      "terms": [
        "Implicit differentiation",
        "Explicit equation",
        "Implicit equation",
        "Chain rule",
        "Product rule",
        "dy/dx",
        "Tangent line",
        "Slope",
        "Circle",
        "Constant"
      ],
      "questions": [
        {
          "q": "y, x'in türevlenebilir bir fonksiyonu ise d/dx (y³) hangisidir?",
          "opts": [
            "3y²",
            "3y²·dy/dx",
            "3x²",
            "y³·dy/dx"
          ],
          "a": 1,
          "why": "Dış fonksiyon küp, iç fonksiyon y. Zincir kuralıyla 3y²·dy/dx. y'nin x'e göre türevi dy/dx'tir, 1 değildir."
        },
        {
          "q": "xy² = 4 eğrisinde (1, 2) noktasında dy/dx kaçtır?",
          "opts": [
            "−1",
            "−4",
            "1",
            "−1/2"
          ],
          "a": 0,
          "why": "Çarpım kuralı: y² + x·2y·dy/dx = 0 ⇒ dy/dx = −y/(2x). (1, 2)'de −2/2 = −1."
        },
        {
          "q": "sin y + x = y ise dy/dx hangisidir?",
          "opts": [
            "1/(cos y − 1)",
            "−1/cos y",
            "1/(1 − cos y)",
            "cos y − 1"
          ],
          "a": 2,
          "why": "cos y·dy/dx + 1 = dy/dx ⇒ 1 = dy/dx − cos y·dy/dx = dy/dx(1 − cos y) ⇒ dy/dx = 1/(1 − cos y)."
        },
        {
          "q": "y, x'in fonksiyonu olsun. Aşağıdakilerden hangisi doğrudur?",
          "opts": [
            "d/dx e^(2y) = 2e^(2y)",
            "d/dx (xy) = x·dy/dx",
            "d/dx (π²) = 2π",
            "d/dx e^(2y) = 2e^(2y)·dy/dx"
          ],
          "a": 3,
          "why": "e^(2y)'de iç fonksiyon 2y, türevi 2·dy/dx. xy'nin türevi y + x·dy/dx (çarpım); π² bir sabit, türevi 0."
        },
        {
          "q": "x² − 3xy + y² = −1 eğrisi (2, 1) noktasından geçer. Bu noktada dy/dx kaçtır?",
          "opts": [
            "−1/4",
            "1/4",
            "4",
            "−4"
          ],
          "a": 1,
          "why": "2x − 3y − 3x·y′ + 2y·y′ = 0 ⇒ y′(2y − 3x) = 3y − 2x ⇒ y′ = (3y − 2x)/(2y − 3x). (2, 1)'de (3 − 4)/(2 − 6) = (−1)/(−4) = 1/4."
        }
      ]
    },
    {
      "no": 5,
      "code": "3.2-2",
      "slug": "cb305",
      "title": "Kapalı Eğrilerde Teğet Doğruları",
      "en": "Tangent Lines to Implicit Curves",
      "accent": "#A98BFF",
      "seconds": 279,
      "terms": [
        "Implicit differentiation",
        "Tangent line",
        "Point-slope form",
        "Horizontal tangent",
        "Vertical tangent",
        "Normal line",
        "Ellipse",
        "Undefined slope",
        "Indeterminate 0/0",
        "Perpendicular"
      ],
      "questions": [
        {
          "q": "x² + 2y² = 9 eğrisine (1, 2) noktasında çizilen teğet doğrusunun denklemi hangisidir?",
          "opts": [
            "y − 2 = −(1/4)(x − 1)",
            "y − 2 = −(1/2)(x − 1)",
            "y − 2 = 4(x − 1)",
            "y − 1 = −(1/4)(x − 2)"
          ],
          "a": 0,
          "why": "2x + 4y·y′ = 0 ⇒ y′ = −x/(2y). (1, 2)'de −1/4. Nokta-eğim: y − 2 = −(1/4)(x − 1). Son şık x ile y'nin yerini karıştırır."
        },
        {
          "q": "x² + 4y² − 4x = 0 eğrisinin dikey teğetleri hangi x değerlerindedir?",
          "opts": [
            "x = 2",
            "x = 0 ve x = 4",
            "x = −2 ve x = 2",
            "Yalnızca x = 4"
          ],
          "a": 1,
          "why": "2x + 8y·y′ − 4 = 0 ⇒ y′ = (4 − 2x)/(8y). Payda 0 ⇒ y = 0; denklemde x² − 4x = 0 ⇒ x = 0 ya da 4. Pay bu noktalarda 4 ve −4, sıfır değil: iki dikey teğet. (x = 2'de pay 0: orada yatay teğet var.)"
        },
        {
          "q": "y³ + xy = 10 eğrisinin (1, 2) noktasındaki normal doğrusunun eğimi kaçtır?",
          "opts": [
            "−2/13",
            "2/13",
            "13/2",
            "−13/2"
          ],
          "a": 2,
          "why": "3y²·y′ + y + x·y′ = 0 ⇒ y′ = −y/(3y² + x) = −2/13. Normal eğimi −1/m = 13/2."
        },
        {
          "q": "f'nin grafiği merkezi orijin, yarıçapı 5 olan üst yarım çemberdir: f(x) = √(25 − x²). f′(−4) kaçtır?",
          "opts": [
            "−4/3",
            "3/4",
            "−3/4",
            "4/3"
          ],
          "a": 3,
          "why": "x² + y² = 25 ⇒ y′ = −x/y. x = −4'te y = 3 (üst yarı). y′ = −(−4)/3 = 4/3. Grafikte de sol tarafta eğri yükseliyor, eğim pozitif."
        },
        {
          "q": "y² + x²y = 10 eğrisinde y = 1 olan noktalardaki dy/dx değerleri nelerdir?",
          "opts": [
            "Yalnızca −6/11",
            "6/11 ve −6/11",
            "Yalnızca 6/11",
            "3/11 ve −3/11"
          ],
          "a": 1,
          "why": "y = 1 ⇒ 1 + x² = 10 ⇒ x = ±3: iki nokta. 2y·y′ + 2xy + x²·y′ = 0 ⇒ y′ = −2xy/(2y + x²). (3, 1)'de −6/11, (−3, 1)'de 6/11."
        }
      ]
    },
    {
      "no": 6,
      "code": "3.3",
      "slug": "cb306",
      "title": "Ters Fonksiyonların Türevi",
      "en": "Differentiating Inverse Functions",
      "accent": "#B9E552",
      "seconds": 281,
      "terms": [
        "Inverse function",
        "Reciprocal",
        "One-to-one",
        "Reflection over y = x",
        "Derivative of an inverse",
        "Chain rule",
        "Tangent line",
        "Increasing function",
        "Vertical tangent",
        "Input / output"
      ],
      "questions": [
        {
          "q": "Tablodaki türevlenebilir f için g = f⁻¹ olsun. g′(9) kaçtır?",
          "opts": [
            "1/5",
            "1/2",
            "2",
            "1/3"
          ],
          "a": 1,
          "why": "f(3) = 9 ⇒ g(9) = 3. g′(9) = 1/f′(g(9)) = 1/f′(3) = 1/2. (2, f′(3)'ün kendisidir; ters çevrilmemiş.)",
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
                "4",
                "1"
              ],
              [
                "2",
                "6",
                "3"
              ],
              [
                "3",
                "9",
                "2"
              ],
              [
                "4",
                "13",
                "5"
              ]
            ],
            "caption": "f'nin seçilmiş değerleri"
          }
        },
        {
          "q": "Aynı tabloya göre g = f⁻¹'in grafiğine x = 6'da çizilen teğet doğrusu hangisidir?",
          "opts": [
            "y − 6 = 3(x − 2)",
            "y − 2 = 3(x − 6)",
            "y − 6 = (1/3)(x − 2)",
            "y − 2 = (1/3)(x − 6)"
          ],
          "a": 3,
          "why": "f(2) = 6 ⇒ g(6) = 2: nokta (6, 2). Eğim g′(6) = 1/f′(2) = 1/3. Doğru: y − 2 = (1/3)(x − 6).",
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
                "4",
                "1"
              ],
              [
                "2",
                "6",
                "3"
              ],
              [
                "3",
                "9",
                "2"
              ],
              [
                "4",
                "13",
                "5"
              ]
            ],
            "caption": "f'nin seçilmiş değerleri"
          }
        },
        {
          "q": "f(x) = x³ + 4x + 3 ve g, f'nin tersi ise g′(−2) kaçtır?",
          "opts": [
            "1/7",
            "1/16",
            "7",
            "−1/7"
          ],
          "a": 0,
          "why": "f(a) = −2 ⇒ a³ + 4a + 3 = −2 ⇒ a = −1. f′(x) = 3x² + 4 ⇒ f′(−1) = 7. g′(−2) = 1/7. (1/16, f′(−2)'yi kullanan tuzaktır.)"
        },
        {
          "q": "f artan ve türevlenebilir; f(4) = 1 ve f′(4) = 2/3. g = f⁻¹ ise hangisi doğrudur?",
          "opts": [
            "g′(4) = 3/2",
            "g′(1) = 2/3",
            "g′(1) = 3/2",
            "g′(4) = −3/2"
          ],
          "a": 2,
          "why": "(4, 1) f'nin üzerinde ⇒ (1, 4) g'nin üzerinde. g′(1) = 1/f′(4) = 3/2. Ters fonksiyonun türevi çıktı değerinde (1'de) sorulur."
        },
        {
          "q": "f(x) = 2x + 6 için f⁻¹(4) ve (f⁻¹)′(4) sırasıyla kaçtır?",
          "opts": [
            "1/14 ve 1/2",
            "−1 ve 1/2",
            "−1 ve 2",
            "5 ve 1/2"
          ],
          "a": 1,
          "why": "2x + 6 = 4 ⇒ x = −1, yani f⁻¹(4) = −1 (1/f(4) = 1/14 değil). f′ her yerde 2 ⇒ (f⁻¹)′(4) = 1/2. Kontrol: f⁻¹(x) = (x − 6)/2, eğimi 1/2."
        }
      ]
    },
    {
      "no": 7,
      "code": "3.4",
      "slug": "cb307",
      "title": "Ters Trigonometrik Fonksiyonların Türevi",
      "en": "Differentiating Inverse Trigonometric Functions",
      "accent": "#FF7DB8",
      "seconds": 269,
      "terms": [
        "Inverse trigonometric function",
        "Arcsine",
        "Arccosine",
        "Arctangent",
        "Arcsecant",
        "Restricted domain",
        "Range",
        "Implicit differentiation",
        "Chain rule",
        "Difference quotient"
      ],
      "questions": [
        {
          "q": "d/dx arccos(2x) hangisidir?",
          "opts": [
            "−2/√(1 − 4x²)",
            "2/√(1 − 4x²)",
            "−1/√(1 − 4x²)",
            "−2/√(1 − 2x²)"
          ],
          "a": 0,
          "why": "(arccos u)′ = −u′/√(1 − u²). u = 2x, u′ = 2, u² = 4x². Sonuç −2/√(1 − 4x²). \"ko\" olduğu için eksi; iç türev 2 de unutulmamalı."
        },
        {
          "q": "y = arcsin x eğrisine x = 1/2'de çizilen teğetin eğimi kaçtır?",
          "opts": [
            "1/2",
            "2/√3",
            "√3/2",
            "π/6"
          ],
          "a": 1,
          "why": "y′ = 1/√(1 − x²) = 1/√(1 − 1/4) = 1/√(3/4) = 2/√3 ≈ 1,155. (π/6 eğim değil, noktanın y değeridir.)"
        },
        {
          "q": "d/dx (arctan x)² hangisidir?",
          "opts": [
            "2 arctan x",
            "2/(1 + x²)",
            "2 arctan x/(1 + x²)",
            "2x/(1 + x²)²"
          ],
          "a": 2,
          "why": "Dış fonksiyon kare, iç fonksiyon arctan x: 2(arctan x)·1/(1 + x²) = 2 arctan x/(1 + x²)."
        },
        {
          "q": "lim (h → 0) [arcsin(a + h) − arcsin(a)]/h = 2 ise a aşağıdakilerden hangisi olabilir?",
          "opts": [
            "1/2",
            "2",
            "√2/2",
            "√3/2"
          ],
          "a": 3,
          "why": "Limit, arcsin'in a'daki türevi: 1/√(1 − a²) = 2 ⇒ 1 − a² = 1/4 ⇒ a² = 3/4 ⇒ a = ±√3/2. Şıklarda √3/2 var. (a = 2 arcsin'in tanım kümesinde değil.)"
        },
        {
          "q": "arctan y = x² ise dy/dx hangisidir?",
          "opts": [
            "2x/(1 + y²)",
            "2x(1 + y²)",
            "2x·tan(x²)",
            "(1 + y²)/(2x)"
          ],
          "a": 1,
          "why": "Kapalı türev: (1/(1 + y²))·dy/dx = 2x ⇒ dy/dx = 2x(1 + y²). (Kontrol: y = tan(x²) ⇒ y′ = 2x·sec²(x²) = 2x(1 + tan²(x²)) = 2x(1 + y²).)"
        }
      ]
    },
    {
      "no": 8,
      "code": "3.5–3.6",
      "slug": "cb308",
      "title": "Yöntem Seçimi ve Yüksek Mertebeden Türevler",
      "en": "Selecting Procedures; Higher-Order Derivatives",
      "accent": "#5C8DFF",
      "seconds": 277,
      "terms": [
        "Selecting procedures",
        "Higher-order derivatives",
        "Second derivative",
        "Third derivative",
        "Leibniz notation",
        "Acceleration",
        "Implicit second derivative",
        "Product rule",
        "Chain rule",
        "Simplify first"
      ],
      "questions": [
        {
          "q": "f(x) = x²·eˣ ise f″(0) kaçtır?",
          "opts": [
            "0",
            "2",
            "1",
            "4"
          ],
          "a": 1,
          "why": "f′ = 2x·eˣ + x²·eˣ. f″ = 2eˣ + 2x·eˣ + 2x·eˣ + x²·eˣ = (2 + 4x + x²)eˣ. x = 0'da 2."
        },
        {
          "q": "y² = 4x eğrisi için (1, 2) noktasında d²y/dx² kaçtır?",
          "opts": [
            "−1/2",
            "1",
            "−4",
            "1/2"
          ],
          "a": 0,
          "why": "2y·y′ = 4 ⇒ y′ = 2/y. y″ = −2y′/y² = −2(2/y)/y² = −4/y³. (1, 2)'de −4/8 = −1/2."
        },
        {
          "q": "dy/dx = xy olduğu biliniyor. (1, 2) noktasında d²y/dx² kaçtır?",
          "opts": [
            "2",
            "3",
            "4",
            "6"
          ],
          "a": 2,
          "why": "d²y/dx² = y + x·dy/dx = y + x(xy) = y + x²y. (1, 2)'de 2 + 1·2 = 4. dy/dx'i yerine koymadan 2 + 1·(?) diye bırakmak eksik kalır."
        },
        {
          "q": "d²²/dx²² (cos x) hangisidir?",
          "opts": [
            "cos x",
            "−sin x",
            "sin x",
            "−cos x"
          ],
          "a": 3,
          "why": "cos x → −sin x → −cos x → sin x → cos x: döngü 4. 22 = 4·5 + 2; iki adım: −cos x."
        },
        {
          "q": "f(x) = ln(x²·eˣ), x > 0 ise f′(x) hangisidir?",
          "opts": [
            "1/(x²·eˣ)",
            "2/x + 1",
            "2x + eˣ",
            "(2 + x)/x²"
          ],
          "a": 1,
          "why": "Önce sadeleştir: ln(x²eˣ) = 2 ln x + x. Türev 2/x + 1. (Zincirle de aynı: (2xeˣ + x²eˣ)/(x²eˣ) = 2/x + 1.)"
        }
      ]
    }
  ],
  "final": [],
  "defter": false
};
