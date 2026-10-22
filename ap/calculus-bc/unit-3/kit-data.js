/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cb3N/questions.json) */
window.KIT = {
  "store": "calcbc-u3:v1:",
  "course": "Calculus BC",
  "unitLabel": "Unit 3 — Differentiation: Composite, Implicit, and Inverse Functions",
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
      "no": 4,
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
    }
  ],
  "final": []
};
