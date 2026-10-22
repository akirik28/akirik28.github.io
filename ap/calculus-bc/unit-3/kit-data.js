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
    }
  ],
  "final": []
};
