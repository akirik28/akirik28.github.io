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
    }
  ],
  "final": []
};
