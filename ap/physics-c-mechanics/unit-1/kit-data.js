/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/pc1N/questions.json) */
window.KIT = {
  "store": "physc-u1:v1:",
  "course": "AP Physics C: Mechanics",
  "unitLabel": "Unit 1 — Kinematics",
  "episodes": [
    {
      "no": 1,
      "code": "M.2",
      "slug": "pc102",
      "title": "Türev Kuralları ve Zincir Kuralı",
      "en": "Product, Quotient and Chain Rules",
      "accent": "#2FD6B9",
      "seconds": 282,
      "terms": [
        "Product rule",
        "Quotient rule",
        "Chain rule",
        "Radian",
        "Natural logarithm",
        "Exponential function",
        "Inner function",
        "Outer function",
        "Derivative"
      ],
      "questions": [
        {
          "q": "x(t) = t² sin t ise dx/dt nedir?",
          "opts": [
            "2t cos t",
            "2t sin t + t² cos t",
            "2t sin t − t² cos t",
            "t² cos t"
          ],
          "a": 1,
          "why": "*Product rule*: u = t², w = sin t; u'w + uw' = 2t sin t + t² cos t. 2t cos t, iki türevin çarpımıdır ve yanlıştır."
        },
        {
          "q": "x(t) = (2t + 1)³ ise t = 1'deki dx/dt kaçtır?",
          "opts": [
            "27",
            "18",
            "54",
            "81"
          ],
          "a": 2,
          "why": "*Chain rule*: 3(2t + 1)² · 2 = 6(2t + 1)². t = 1'de 6 · 9 = 54. 27 çıkaran iç türevi (2) unutmuştur."
        },
        {
          "q": "x(t) = ln(4t) ise t = 2'deki dx/dt kaçtır?",
          "opts": [
            "0,125",
            "2",
            "0,25",
            "0,5"
          ],
          "a": 3,
          "why": "Zincir kuralıyla (1/(4t)) · 4 = 1/t. t = 2'de 0,5. 0,125 bulan 1/(4t) yazıp iç türevi unutmuştur."
        },
        {
          "q": "Bir parçacığın konumu x(t) = 3e^(−2t) metredir. t = 0'daki hızı kaçtır?",
          "opts": [
            "−6 m/s",
            "3 m/s",
            "−2 m/s",
            "6 m/s"
          ],
          "a": 0,
          "why": "v = 3 · (−2)e^(−2t) = −6e^(−2t). t = 0'da e⁰ = 1, v = −6 m/s. Eksi işareti parçacığın −x yönünde gittiğini gösterir."
        },
        {
          "q": "Bir öğrenci y = sin t grafiğinin eğimini hesap makinesiyle (radyan modunda) birkaç noktada ölçüp tabloya yazıyor. Bu eğimler hangi fonksiyonun değerleridir?",
          "opts": [
            "−sin t",
            "−cos t",
            "cos t",
            "sin t"
          ],
          "a": 2,
          "why": "Eğimler t = 0'da 1, π/2'de 0, π'de −1, 3π/2'de 0: bunlar tam olarak cos t'nin değerleri. Yani (sin t)' = cos t.",
          "fig": {
            "type": "table",
            "head": [
              "t",
              "0",
              "π/2",
              "π",
              "3π/2",
              "2π"
            ],
            "rows": [
              [
                "sin t'nin eğimi",
                "1",
                "0",
                "−1",
                "0",
                "1"
              ]
            ],
            "caption": "sin t grafiğinde ölçülen eğimler"
          }
        }
      ]
    }
  ],
  "final": [],
  "defter": false
};
