/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/pc1N/questions.json) */
window.KIT = {
  "store": "physc-u1:v1:",
  "course": "AP Physics C: Mechanics",
  "unitLabel": "Unit 1 — Kinematics",
  "episodes": [
    {
      "no": 1,
      "code": "M.1",
      "slug": "pc101",
      "title": "Türev: Anlık Değişim Hızı",
      "en": "The Derivative as a Rate of Change",
      "accent": "#F6B94A",
      "seconds": 276,
      "terms": [
        "Rate",
        "Average velocity",
        "Instantaneous velocity",
        "Secant line",
        "Tangent line",
        "Derivative",
        "Power rule",
        "Constant multiple rule",
        "Sum rule"
      ],
      "questions": [
        {
          "q": "x(t) = 3t⁴ − 2t + 7 ise dx/dt nedir?",
          "opts": [
            "12t³ − 2",
            "12t³ − 2 + 7",
            "3t³ − 2",
            "12t⁴ − 2t"
          ],
          "a": 0,
          "why": "*Power rule*: 3t⁴ → 3·4t³ = 12t³; −2t → −2; sabit 7'nin türevi 0. Sonuç 12t³ − 2."
        },
        {
          "q": "Bir arabanın konumu tabloda verilmiştir (x = 2t²). t = 2 s ile t = 4 s arasındaki *average velocity* kaçtır?",
          "opts": [
            "8 m/s",
            "16 m/s",
            "12 m/s",
            "24 m/s"
          ],
          "a": 2,
          "why": "(x(4) − x(2))/(4 − 2) = (32 − 8)/2 = 24/2 = 12 m/s. 24 m toplam yer değiştirmedir; zamana bölmek gerekir.",
          "fig": {
            "type": "table",
            "head": [
              "t (s)",
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "rows": [
              [
                "x (m)",
                "0",
                "2",
                "8",
                "18",
                "32"
              ]
            ],
            "caption": "Arabanın konumu"
          }
        },
        {
          "q": "x(t) = 6√t (metre, t saniye) ise t = 4 s'deki hız kaçtır?",
          "opts": [
            "12 m/s",
            "1,5 m/s",
            "3 m/s",
            "0,75 m/s"
          ],
          "a": 1,
          "why": "6√t = 6t^(1/2); türevi 6·(1/2)t^(−1/2) = 3/√t. t = 4'te 3/2 = 1,5 m/s. 12, x(4)'tür (konum)."
        },
        {
          "q": "lim (Δt → 0) [(3 + Δt)² − 9]/Δt ifadesi neyi gösterir?",
          "opts": [
            "x(t) = t² fonksiyonunun t = 9'daki eğimini, 18",
            "x(t) = t² fonksiyonunun t = 3'teki konumunu, 9",
            "x(t) = t² fonksiyonunun t = 3'teki eğimini, 6",
            "x(t) = 3t fonksiyonunun eğimini, 3"
          ],
          "a": 2,
          "why": "Kalıp lim [x(t + Δt) − x(t)]/Δt: x(t) = t², t = 3, çünkü 3² = 9. Açınca (6Δt + Δt²)/Δt = 6 + Δt → 6. Bu, t = 3'teki teğetin eğimidir."
        },
        {
          "q": "Bir parçacığın konumu x(t) = 4/t (t > 0) ise t = 2 s'deki hızı kaçtır?",
          "opts": [
            "−1 m/s",
            "2 m/s",
            "1 m/s",
            "−2 m/s"
          ],
          "a": 0,
          "why": "4/t = 4t⁻¹; türevi −4t⁻² = −4/t². t = 2'de −4/4 = −1 m/s. Eksi işareti parçacığın −x yönünde gittiğini söyler; 2, x(2)'dir."
        }
      ]
    },
    {
      "no": 2,
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
    },
    {
      "no": 3,
      "code": "M.3",
      "slug": "pc103",
      "title": "İntegral: Ters Türev ve Alan",
      "en": "Antiderivatives, Initial Conditions and Area",
      "accent": "#58C9FF",
      "seconds": 277,
      "terms": [
        "Antiderivative",
        "Indefinite integral",
        "Constant of integration",
        "Initial condition",
        "Definite integral",
        "Signed area",
        "Riemann sum",
        "Fundamental Theorem of Calculus",
        "u-substitution"
      ],
      "questions": [
        {
          "q": "∫(4t³ − 6t) dt nedir?",
          "opts": [
            "12t² − 6 + C",
            "t⁴ − 6t² + C",
            "4t⁴ − 3t² + C",
            "t⁴ − 3t² + C"
          ],
          "a": 3,
          "why": "Kuvvet kuralı: 4t³ → 4t⁴/4 = t⁴; −6t → −6t²/2 = −3t². Kontrol: (t⁴ − 3t²)' = 4t³ − 6t. 12t² − 6 türevdir, integral değil."
        },
        {
          "q": "Bir parçacık için dx/dt = 2t + 3 (m/s) ve x(0) = −1 m'dir. x(2) kaçtır?",
          "opts": [
            "10 m",
            "9 m",
            "7 m",
            "−1 m"
          ],
          "a": 1,
          "why": "x = t² + 3t + C; x(0) = C = −1. x(2) = 4 + 6 − 1 = 9 m. 10, C'yi unutup ters türevi yazandır."
        },
        {
          "q": "∫ (1'den 4'e) √t dt kaçtır?",
          "opts": [
            "14/3",
            "16/3",
            "3",
            "7/2"
          ],
          "a": 0,
          "why": "√t = t^(1/2); ters türev (2/3)t^(3/2). (2/3)(4^(3/2) − 1) = (2/3)(8 − 1) = 14/3 ≈ 4,67. 16/3, alt sınırı çıkarmayı unutandır."
        },
        {
          "q": "Grafikteki f fonksiyonu için ∫ (0'dan 2'ye) f(t) dt kaçtır?",
          "opts": [
            "8",
            "4",
            "6",
            "2"
          ],
          "a": 2,
          "why": "0–2 arasında alan bir yamuk: kenarlar f(0) = 4 ve f(2) = 2, genişlik 2. (4 + 2)/2 · 2 = 6. 8, 0–4 arasının tamamıdır.",
          "fig": {
            "type": "graph",
            "xlabel": "t",
            "ylabel": "f(t)",
            "xmax": 5,
            "ymax": 5,
            "lines": [
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  4,
                  0
                ],
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
                "q": 2,
                "p": 2,
                "label": "(2, 2)"
              },
              {
                "q": 4,
                "p": 0,
                "label": "(4, 0)"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 4,
                "label": "4"
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 4,
                "label": "4"
              }
            ],
            "caption": "f'nin grafiği"
          }
        },
        {
          "q": "∫cos(2t) dt nedir?",
          "opts": [
            "2 sin(2t) + C",
            "½ sin(2t) + C",
            "−½ sin(2t) + C",
            "sin(2t) + C"
          ],
          "a": 1,
          "why": "İç fonksiyon 2t'nin türevi 2; ona bölünür: ½ sin(2t) + C. Kontrol: (½ sin 2t)' = ½ · 2 cos 2t = cos 2t. 2 sin 2t'nin türevi 4 cos 2t olurdu."
        }
      ]
    },
    {
      "no": 4,
      "code": "1.1–1.2",
      "slug": "pc106",
      "title": "Konum, Yer Değiştirme ve Hız",
      "en": "Position, Displacement and Velocity",
      "accent": "#B9E552",
      "seconds": 276,
      "terms": [
        "Kinematics",
        "Position",
        "Displacement",
        "Distance",
        "Average velocity",
        "Average speed",
        "Instantaneous velocity",
        "Speed",
        "Motion diagram"
      ],
      "questions": [
        {
          "q": "Bir kedi x = −3 m'den x = 5 m'ye koşuyor, sonra x = −1 m'ye geri dönüyor. Yer değiştirmesi ve aldığı yol nedir?",
          "opts": [
            "Δx = +2 m, yol = 14 m",
            "Δx = −1 m, yol = 14 m",
            "Δx = +2 m, yol = 2 m",
            "Δx = +8 m, yol = 6 m"
          ],
          "a": 0,
          "why": "Δx = son − ilk = −1 − (−3) = +2 m. Yol: −3'ten 5'e 8 m, 5'ten −1'e 6 m; toplam 14 m."
        },
        {
          "q": "Grafik, bir asansörün konumunu gösteriyor (doğru parçaları). 5 s ile 7 s arasındaki hızı nedir?",
          "opts": [
            "0 m/s",
            "+3 m/s",
            "−6 m/s",
            "−3 m/s"
          ],
          "a": 3,
          "why": "Hız, x–t grafiğinin eğimidir: (0 − 6)/(7 − 5) = −6/2 = −3 m/s. −6 m, yer değiştirmedir; zamana bölmek gerekir.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "x (m)",
            "xmax": 8,
            "ymax": 8,
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
                "label": ""
              },
              {
                "from": [
                  2,
                  6
                ],
                "to": [
                  5,
                  6
                ],
                "label": ""
              },
              {
                "from": [
                  5,
                  6
                ],
                "to": [
                  7,
                  0
                ],
                "label": "x"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 2,
                "label": "(0, 2)"
              },
              {
                "q": 2,
                "p": 6,
                "label": "(2, 6)"
              },
              {
                "q": 5,
                "p": 6,
                "label": "(5, 6)"
              },
              {
                "q": 7,
                "p": 0,
                "label": "(7, 0)"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 5,
                "label": "5"
              },
              {
                "v": 7,
                "label": "7"
              }
            ],
            "yticks": [
              {
                "v": 2,
                "label": "2"
              },
              {
                "v": 6,
                "label": "6"
              }
            ],
            "caption": "Asansörün konum–zaman grafiği"
          }
        },
        {
          "q": "x(t) = 4t² − t (m) ise 1 s ile 3 s arasındaki *average velocity* kaçtır?",
          "opts": [
            "30 m/s",
            "15 m/s",
            "16 m/s",
            "23 m/s"
          ],
          "a": 1,
          "why": "x(3) = 36 − 3 = 33 m, x(1) = 4 − 1 = 3 m. (33 − 3)/(3 − 1) = 30/2 = 15 m/s. 30 m yer değiştirmedir; 23 m/s ise t = 3'teki anlık hızdır (8t − 1)."
        },
        {
          "q": "x(t) = t³ − 4t (m) ise t = 2 s'deki anlık hız kaçtır?",
          "opts": [
            "0 m/s",
            "4 m/s",
            "8 m/s",
            "12 m/s"
          ],
          "a": 2,
          "why": "v = dx/dt = 3t² − 4. t = 2'de 12 − 4 = 8 m/s. 0, x(2)'dir: parçacık orijinde ama hareket ediyor."
        },
        {
          "q": "Bir yüzücü 50 m'lik havuzda bir gidip bir dönüyor (100 m) ve 50 s'de başladığı duvara varıyor. Hangisi doğrudur?",
          "opts": [
            "Ortalama hız 2 m/s, ortalama sürat 2 m/s",
            "Ortalama hız 0, ortalama sürat 0",
            "Ortalama hız 1 m/s, ortalama sürat 2 m/s",
            "Ortalama hız 0, ortalama sürat 2 m/s"
          ],
          "a": 3,
          "why": "Başladığı yere döndüğü için Δx = 0, ortalama hız 0. Yol 100 m: ortalama sürat 100/50 = 2 m/s. Ortalama sürat, ortalama hızın büyüklüğü değildir."
        }
      ]
    }
  ],
  "final": [],
  "defter": false
};
