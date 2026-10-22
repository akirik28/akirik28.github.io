/* Bu dosya üretilir: ap-videolar/tools/build-kit-data.mjs (elle düzenleme; kaynak: src/episodes/cb1N/questions.json) */
window.KIT = {
  "store": "calcbc-u1:v1:",
  "course": "Calculus BC",
  "unitLabel": "Unit 1 — Limits and Continuity",
  "episodes": [
    {
      "no": 1,
      "code": "1.1–1.2",
      "slug": "cb101",
      "title": "Limit Nedir?",
      "en": "Introducing Limits",
      "accent": "#F6B94A",
      "seconds": 266,
      "terms": [
        "Limit",
        "Average rate of change",
        "Instantaneous rate of change",
        "Secant line",
        "Tangent line",
        "Left-hand limit",
        "Right-hand limit",
        "One-sided limit",
        "Hole",
        "Indeterminate form 0/0"
      ],
      "questions": [
        {
          "q": "Bir topun konumu s(t) = 4t² metre. Tabloda t = 2'den başlayan giderek küçülen aralıklardaki ortalama hızlar var. Topun t = 2 anındaki anlık hızı kaç m/s?",
          "opts": [
            "8",
            "12",
            "16",
            "20"
          ],
          "a": 2,
          "why": "Ortalama hızlar 16,4 → 16,04 → 16,004 diye 16'ya yaklaşıyor. Cebirle: (4(2+h)² − 16)/h = (16h + 4h²)/h = 16 + 4h, h → 0 iken 16.",
          "fig": {
            "type": "table",
            "head": [
              "Aralık",
              "Ortalama hız (m/s)"
            ],
            "rows": [
              [
                "[2; 2,1]",
                "16,4"
              ],
              [
                "[2; 2,01]",
                "16,04"
              ],
              [
                "[2; 2,001]",
                "16,004"
              ]
            ],
            "caption": "s(t) = 4t² için *average rate of change*"
          }
        },
        {
          "q": "f(x) = (x² − 25)/(x − 5) (x ≠ 5) ve f(5) = 3 olsun. Hangisi doğru?",
          "opts": [
            "Limit 10, f(5) = 3",
            "Limit 3, f(5) = 3",
            "Limit yok, f(5) = 3",
            "Limit 10, f(5) = 10"
          ],
          "a": 0,
          "why": "x ≠ 5 için (x − 5)(x + 5)/(x − 5) = x + 5, x → 5 iken limit 10. Değer ise tanımdan: f(5) = 3. Limit ile değer farklı olabilir."
        },
        {
          "q": "lim (x → 1) f(x) = 7 olduğu biliniyor. Aşağıdakilerden hangisi kesinlikle doğrudur?",
          "opts": [
            "f(1) = 7",
            "f, x = 1'de tanımlıdır",
            "f(0,9) = 7",
            "x, 1'e yeterince yakın (x ≠ 1) seçilirse f(x) 7'ye istenildiği kadar yakın olur"
          ],
          "a": 3,
          "why": "Limit yalnızca x 1'e yaklaşırken f(x)'in nereye gittiğini söyler. f(1) farklı olabilir ya da hiç tanımlı olmayabilir; tek bir noktadaki değer (f(0,9)) de belirlenmez."
        },
        {
          "q": "Bir öğrenci şöyle diyor: \"g(x) = (x² − 16)/(x − 4) fonksiyonu x = 4'te tanımsız, o yüzden x → 4 iken limiti yoktur.\" Bu görüş için hangisi doğru?",
          "opts": [
            "Doğru; tanımsız noktada limit olmaz",
            "Yanlış; limit vardır ve 8'dir",
            "Yanlış; limit vardır ve 0'dır",
            "Yanlış; limit vardır ve 4'tür"
          ],
          "a": 1,
          "why": "Limit, x = 4'teki değere bakmaz. x ≠ 4 için g(x) = x + 4, bu yüzden limit 4 + 4 = 8. Grafikte (4, 8)'de yalnızca bir delik vardır."
        },
        {
          "q": "Grafikte f'nin iki doğru parçası var: sol parça (3, 4)'te dolu noktayla biter, sağ parça (3, 2)'de açık daireyle başlar. Hangisi doğru?",
          "opts": [
            "Soldan limit 2, sağdan limit 4",
            "Limit 4'tür çünkü f(3) = 4",
            "Soldan limit 4, sağdan limit 2; limit yoktur",
            "Limit 3'tür, iki değerin ortalaması"
          ],
          "a": 2,
          "why": "Soldan yaklaşırken değerler 4'e, sağdan yaklaşırken 2'ye gidiyor. İki taraf farklı olduğu için x → 3 iken limit yoktur (*does not exist*); f(3) = 4 bunu değiştirmez.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 6,
            "ymax": 6,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  3,
                  4
                ],
                "label": ""
              },
              {
                "from": [
                  3,
                  2
                ],
                "to": [
                  6,
                  5
                ],
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 3,
                "p": 4,
                "label": "(3, 4) dolu"
              }
            ],
            "xticks": [
              {
                "v": 3,
                "label": "3"
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
            "caption": "x = 3'te sağ parçanın başında (3, 2) açık daire"
          }
        }
      ]
    },
    {
      "no": 2,
      "code": "1.3–1.4",
      "slug": "cb102",
      "title": "Grafikten ve Tablodan Limit",
      "en": "Limits from Graphs and Tables",
      "accent": "#2FD6B9",
      "seconds": 273,
      "terms": [
        "One-sided limit",
        "Left-hand limit",
        "Right-hand limit",
        "Does not exist (DNE)",
        "Open circle",
        "Closed circle",
        "Jump",
        "Unbounded",
        "Oscillation",
        "Estimate"
      ],
      "questions": [
        {
          "q": "g'nin grafiği iki doğru parçasından oluşuyor; ikisi (2, 4)'te açık daireyle birleşiyor. Ayrıca g(2) = 1 (dolu nokta). lim (x → 2) g(x) kaçtır?",
          "opts": [
            "1",
            "4",
            "2,5",
            "Limit yoktur"
          ],
          "a": 1,
          "why": "İki taraftan yaklaşırken de nokta (2, 4)'teki deliğe gidiyor: soldan limit 4, sağdan limit 4, yani limit 4. Dolu nokta g(2) = 1 yalnızca değerdir, limiti etkilemez.",
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
                  0
                ],
                "to": [
                  2,
                  4
                ],
                "label": ""
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
                "label": "g"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 1,
                "label": "g(2) = 1"
              }
            ],
            "xticks": [
              {
                "v": 2,
                "label": "2"
              }
            ],
            "yticks": [
              {
                "v": 4,
                "label": "4"
              }
            ],
            "caption": "(2, 4)'te açık daire"
          }
        },
        {
          "q": "Tabloda h fonksiyonunun x = 1 civarındaki değerleri var. Tabloya göre en makul sonuç hangisi?",
          "opts": [
            "lim (x → 1) h(x) = 3",
            "lim (x → 1) h(x) = −1",
            "lim (x → 1) h(x) = 1",
            "Soldan limit 3, sağdan limit −1; limit yoktur"
          ],
          "a": 3,
          "why": "Soldaki değerler 2,71 → 2,97 → 2,997 diye 3'e, sağdakiler −0,8 → −0,98 → −0,998 diye −1'e yaklaşıyor. İki taraf farklı olduğu için x → 1 iken limit yoktur; ortalamayı (1) almak anlamsız.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "0,9",
              "0,99",
              "0,999",
              "1,001",
              "1,01",
              "1,1"
            ],
            "rows": [
              [
                "h(x)",
                "2,71",
                "2,97",
                "2,997",
                "−0,998",
                "−0,98",
                "−0,8"
              ]
            ],
            "caption": "h fonksiyonunun seçilmiş değerleri"
          }
        },
        {
          "q": "Aşağıdakilerden hangisi, x → c iken limitin var olmamasının bir nedeni DEĞİLDİR?",
          "opts": [
            "Soldan ve sağdan limitlerin farklı olması",
            "f(c)'nin tanımsız olması",
            "f(x)'in sınırsız büyümesi",
            "f(x)'in iki değer arasında durmadan salınması"
          ],
          "a": 1,
          "why": "Limit, c'deki değere bakmaz: f(c) tanımsız olsa bile (delik) limit var olabilir. Limiti yok eden üç durum sıçrama, sınırsız büyüme ve salınımdır."
        },
        {
          "q": "f'nin grafiğinde sol parça (0, 5)'ten (2, 1)'e iner ve (2, 1)'de açık daireyle biter; sağ parça (2, 3)'te dolu noktayla başlayan yatay doğrudur (y = 3). lim (x → 2⁻) f(x) + lim (x → 4) f(x) kaçtır?",
          "opts": [
            "6",
            "2",
            "4",
            "Tanımsız"
          ],
          "a": 2,
          "why": "Soldan 2'ye yaklaşırken sol parça açık daireye, 1'e gider. x = 4'te sağ parça yatay y = 3, iki taraftan da 3. Toplam 1 + 3 = 4. Soldan limit için dolu nokta (2, 3) önemli değildir.",
          "fig": {
            "type": "graph",
            "xlabel": "x",
            "ylabel": "y",
            "xmax": 6,
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
                "label": ""
              },
              {
                "from": [
                  2,
                  3
                ],
                "to": [
                  6,
                  3
                ],
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 3,
                "label": "(2, 3) dolu"
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
                "v": 1,
                "label": "1"
              },
              {
                "v": 3,
                "label": "3"
              }
            ],
            "caption": "(2, 1)'de açık daire"
          }
        },
        {
          "q": "Bir öğrenci f(x) = cos(π/x) için tabloyu doldurup \"x → 0⁺ iken limit 1\" diyor. Hangisi doğru?",
          "opts": [
            "Tablo yanıltıcı: x = 1/3 ve 1/5'te değer −1; f salınır, limit yoktur",
            "Doğru; tablodaki bütün değerler 1",
            "Limit 0'dır çünkü x 0'a gidiyor",
            "Limit −1'dir çünkü cos en küçük −1 olur"
          ],
          "a": 0,
          "why": "Seçilen x'ler hep x = 1/(2n) biçiminde, cos(2nπ) = 1. Ama x = 1/(2n + 1) için cos((2n + 1)π) = −1. Değerler 1 ile −1 arasında gidip geliyor; limit yoktur. Tablo yalnızca tahmindir.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "1/2",
              "1/4",
              "1/6",
              "1/8"
            ],
            "rows": [
              [
                "cos(π/x)",
                "1",
                "1",
                "1",
                "1"
              ]
            ],
            "caption": "Öğrencinin tablosu"
          }
        }
      ]
    },
    {
      "no": 3,
      "code": "1.5, 1.9",
      "slug": "cb103",
      "title": "Limit Kuralları ve Gösterimleri Bağlamak",
      "en": "Limit Properties and Representations",
      "accent": "#58C9FF",
      "seconds": 280,
      "terms": [
        "Limit properties",
        "Sum rule",
        "Product rule",
        "Constant multiple rule",
        "Quotient rule",
        "Power rule",
        "Direct substitution",
        "Composite function",
        "Multiple representations",
        "Polynomial"
      ],
      "questions": [
        {
          "q": "lim (x → 0) f(x) = 3 ve lim (x → 0) g(x) = −1 ise lim (x → 0) [f(x)² − 4g(x)] / [g(x) + 2] kaçtır?",
          "opts": [
            "5",
            "13",
            "9",
            "−13"
          ],
          "a": 1,
          "why": "Pay: 3² − 4(−1) = 9 + 4 = 13. Payda: −1 + 2 = 1, sıfır değil. Bölüm kuralıyla 13/1 = 13."
        },
        {
          "q": "Tabloda f ve g'nin x = 2 civarındaki değerleri var; h(x) = x³. lim (x → 2) [f(x)·g(x) − h(x)] için en iyi tahmin hangisi?",
          "opts": [
            "2",
            "10",
            "−3",
            "18"
          ],
          "a": 0,
          "why": "Tablodan f → 2 ve g → 5; h için doğrudan yerine koyma: 2³ = 8. Çarpım ve fark kurallarıyla 2·5 − 8 = 2.",
          "fig": {
            "type": "table",
            "head": [
              "x",
              "1,9",
              "1,99",
              "2,01",
              "2,1"
            ],
            "rows": [
              [
                "f(x)",
                "2,1",
                "2,01",
                "1,99",
                "1,9"
              ],
              [
                "g(x)",
                "4,8",
                "4,98",
                "5,02",
                "5,2"
              ]
            ],
            "caption": "f ve g'nin seçilmiş değerleri"
          }
        },
        {
          "q": "x → c iken ne f'nin ne de g'nin limiti var. lim (x → c) [f(x) + g(x)] için hangisi doğru?",
          "opts": [
            "Kesinlikle yoktur",
            "Var olabilir; tek taraflı limitlerle kontrol edilmeli",
            "Her zaman 0'dır",
            "Her zaman f(c) + g(c)'dir"
          ],
          "a": 1,
          "why": "Toplam kuralı yalnız iki limit de varsa kullanılır. Örneğin f soldan 1, sağdan 3'e; g soldan 3, sağdan 1'e gidiyorsa f + g iki yandan da 4'e gider ve limit vardır."
        },
        {
          "q": "Grafikte f var: sol parça (1, 2)'de açık daireyle biter, sağ parça (1, 4)'te açık daireyle başlar, f(1) = 3. g(x) = 1 + (x − 2)² ise lim (x → 2) f(g(x)) kaçtır?",
          "opts": [
            "2",
            "3",
            "4",
            "Limit yoktur"
          ],
          "a": 2,
          "why": "x → 2 iken g(x) → 1, ama hep 1'in üstünden (x ≠ 2 için (x − 2)² > 0). Yani f'ye 1'e sağdan yaklaşan değerler girer: lim (u → 1⁺) f(u) = 4. f(1) = 3 kullanılmaz.",
          "fig": {
            "type": "graph",
            "xlabel": "u",
            "ylabel": "f(u)",
            "xmax": 4,
            "ymax": 5,
            "lines": [
              {
                "from": [
                  0,
                  1
                ],
                "to": [
                  1,
                  2
                ],
                "label": ""
              },
              {
                "from": [
                  1,
                  4
                ],
                "to": [
                  4,
                  1
                ],
                "label": "f"
              }
            ],
            "points": [
              {
                "q": 1,
                "p": 3,
                "label": "f(1) = 3"
              }
            ],
            "xticks": [
              {
                "v": 1,
                "label": "1"
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
            "caption": "(1, 2) ve (1, 4) açık daire"
          }
        },
        {
          "q": "Aşağıdaki limitlerden hangisi doğrudan yerine koyma (*direct substitution*) ile bulunamaz?",
          "opts": [
            "lim (x → 2) (x² + 1)/(x + 3)",
            "lim (x → 1) √(x + 8)",
            "lim (x → 0) cos(x + π)",
            "lim (x → 3) (x² − 9)/(x − 3)"
          ],
          "a": 3,
          "why": "Son seçenekte yerine koyunca 0/0 çıkar; payda sıfır olduğu için bölüm kuralı kullanılamaz (önce sadeleştirilir, limit 6). Diğerleri sırasıyla 5/5 = 1, 3 ve cos π = −1."
        }
      ]
    },
    {
      "no": 4,
      "code": "1.8",
      "slug": "cb105",
      "title": "Sıkıştırma Teoremi ve Trigonometrik Limitler",
      "en": "The Squeeze Theorem",
      "accent": "#A98BFF",
      "seconds": 265,
      "terms": [
        "Squeeze theorem",
        "Upper bound",
        "Lower bound",
        "Oscillating factor",
        "sin x / x",
        "Radian",
        "Unit circle",
        "tan x / x",
        "(1 − cos x) / x",
        "Limit at infinity"
      ],
      "questions": [
        {
          "q": "Her x için −x² + 6x − 4 ≤ f(x) ≤ x² − 2x + 4 olduğu biliniyor. lim (x → 2) f(x) kaçtır?",
          "opts": [
            "0",
            "2",
            "4",
            "Belirlenemez"
          ],
          "a": 2,
          "why": "Alt sınırın limiti −4 + 12 − 4 = 4, üst sınırın limiti 4 − 4 + 4 = 4. İki sınır aynı sayıya gittiği için *squeeze theorem* ile limit 4. (Fark 2(x − 2)² ≥ 0, eşitsizlik gerçekten her yerde doğru.)"
        },
        {
          "q": "lim (x → 0) x⁴ cos(2/x) kaçtır?",
          "opts": [
            "0",
            "1",
            "Limit yoktur, kosinüs salınır",
            "−1"
          ],
          "a": 0,
          "why": "−1 ≤ cos(2/x) ≤ 1, x⁴ ≥ 0 ile çarpınca −x⁴ ≤ x⁴cos(2/x) ≤ x⁴. İki sınır da 0'a gider; salınan çarpan sıfıra giden bir çarpanla bastırılır, limit 0."
        },
        {
          "q": "lim (x → 0) sin(3x)/sin(5x) kaçtır?",
          "opts": [
            "1",
            "3/5",
            "5/3",
            "15"
          ],
          "a": 1,
          "why": "Pay ve paydayı x'e böl: [sin(3x)/x] / [sin(5x)/x]. Pay 3'e, payda 5'e gider (sin(kx)/x → k). Sonuç 3/5."
        },
        {
          "q": "lim (x → 0) tan(5x)/(2x) kaçtır?",
          "opts": [
            "2/5",
            "5",
            "1",
            "5/2"
          ],
          "a": 3,
          "why": "tan(5x)/(2x) = (5/2)·[sin(5x)/(5x)]·[1/cos(5x)]. Köşeli parantezler 1'e gider; sonuç 5/2."
        },
        {
          "q": "Aşağıdaki bilgilerden hangisi tek başına lim (x → 3) f(x) = 2 sonucunu verir?",
          "opts": [
            "3'ün çevresinde 1 ≤ f(x) ≤ 3",
            "3'ün çevresinde 2 − |x − 3| ≤ f(x) ≤ 2 + (x − 3)²",
            "3'ün çevresinde f(x) ≤ 2",
            "3'ün çevresinde 0 ≤ f(x) ≤ 2x − 4"
          ],
          "a": 1,
          "why": "Yalnızca B'de iki sınır da x → 3 iken aynı sayıya, 2'ye gider. A'da sınırlar 1 ve 3'e, D'de 0 ve 2'ye gider; C'de alt sınır yok. Teorem için iki sınır ve aynı limit gerekir."
        }
      ]
    },
    {
      "no": 5,
      "code": "1.12–1.13",
      "slug": "cb107",
      "title": "Aralıkta Süreklilik ve Süreksizliği Giderme",
      "en": "Continuity on Intervals; Removing Discontinuities",
      "accent": "#FF7DB8",
      "seconds": 267,
      "terms": [
        "Continuous on an interval",
        "Domain",
        "Polynomial function",
        "Rational function",
        "Closed interval",
        "Endpoint",
        "Removing a discontinuity",
        "Redefine f(c)",
        "Piecewise function",
        "Non-removable"
      ],
      "questions": [
        {
          "q": "f(x) = (x − 3)/(x² − 5x + 6) hangi aralıklarda süreklidir?",
          "opts": [
            "(−∞, 2) ∪ (2, ∞)",
            "(−∞, 2) ∪ (2, 3) ∪ (3, ∞)",
            "(−∞, 3) ∪ (3, ∞)",
            "Bütün gerçel sayılarda"
          ],
          "a": 1,
          "why": "Payda (x − 2)(x − 3), x = 2 ve x = 3'te sıfır; rasyonel fonksiyon bu iki nokta dışında süreklidir. x = 3'teki süreksizlik sadeleşmeden gelen bir delik olsa da f(3) tanımsız, yani 3 de aralıktan çıkar."
        },
        {
          "q": "h(x) = ln(x − 1) + √(5 − x) fonksiyonu hangi aralıkta süreklidir?",
          "opts": [
            "(1, 5]",
            "[1, 5]",
            "(1, 5)",
            "(1, ∞)"
          ],
          "a": 0,
          "why": "ln için x − 1 > 0, yani x > 1; kök için 5 − x ≥ 0, yani x ≤ 5. İki koşul birlikte (1, 5]. x = 5'te soldan limit h(5) = ln 4'e eşit, uçta süreklilik tamam."
        },
        {
          "q": "f(x) = (x² + x − 12)/(x − 3) (x ≠ 3) ve f(3) = c. f'nin x = 3'te sürekli olması için c kaç olmalı?",
          "opts": [
            "0",
            "3",
            "7",
            "12"
          ],
          "a": 2,
          "why": "x² + x − 12 = (x − 3)(x + 4), sadeleşince x + 4 → 7. Süreksizliği gidermek için f(3) limite eşitlenir: c = 7."
        },
        {
          "q": "f(x) = 2x + a (x < 1), f(x) = bx² (1 ≤ x ≤ 2), f(x) = x + 6 (x > 2). f her yerde sürekliyse a + b kaçtır?",
          "opts": [
            "4",
            "0",
            "6",
            "2"
          ],
          "a": 3,
          "why": "x = 2'de: b·4 = 2 + 6 = 8, b = 2. x = 1'de: 2 + a = b·1 = 2, a = 0. a + b = 2."
        },
        {
          "q": "Aşağıdaki fonksiyonlardan hangisi, verilen noktada yalnızca o noktadaki değer yeniden tanımlanarak sürekli hâle getirilemez?",
          "opts": [
            "(x² − 1)/(x − 1), x = 1'de",
            "sin x / x, x = 0'da",
            "|x| / x, x = 0'da",
            "(√x − 2)/(x − 4), x = 4'te"
          ],
          "a": 2,
          "why": "|x|/x soldan −1'e, sağdan 1'e gider: *jump*, limit yok, giderilemez. Diğerlerinin limiti var (2, 1 ve 1/4); f(c) bu değerlere eşitlenerek süreksizlik giderilir."
        }
      ]
    }
  ],
  "final": []
};
