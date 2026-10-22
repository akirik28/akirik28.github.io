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
    }
  ],
  "final": []
};
