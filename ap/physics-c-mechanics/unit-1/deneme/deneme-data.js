/* Bu dosya üretilir: ap-videolar/tools/build-deneme-data.mjs (elle düzenleme; kaynak: tools/out/deneme-physc-u1.json) */
window.DENEME = {
  "store": "physc-u1:v1:",
  "course": "AP Physics C: Mechanics",
  "unit": "Unit 1 — Kinematics",
  "topics": {
    "M.1": "Türev: Anlık Değişim Hızı",
    "M.2": "Türev Kuralları ve Zincir Kuralı",
    "M.3": "İntegral: Ters Türev ve Alan",
    "1.1, 1.5": "Vektörler: Bileşenler ve Birim Vektörler",
    "M.4": "Vektör Çarpımı: Nokta ve Çapraz Çarpım",
    "1.1–1.2": "Konum, Yer Değiştirme ve Hız",
    "1.2a": "İvme",
    "1.3": "Hareket Grafikleri: Eğim ve Alan",
    "1.2–1.3": "Sabit İvme ve Serbest Düşme",
    "1.2b": "Değişken İvme: İntegralle Hareket",
    "1.4–1.5": "İki Boyutta Hareket ve Göreli Hareket"
  },
  "tests": [
    {
      "no": 1,
      "level": "Isınma",
      "minutes": 20,
      "questions": [
        {
          "t": "1.1–1.2",
          "q": "The position of a particle moving along the x-axis is x(t) = At² − Bt³, where x is in meters and t is in seconds. What are the SI units of the constants A and B?",
          "o": [
            "A: m/s²; B: m/s³",
            "A: m/s; B: m/s²",
            "A: m·s²; B: m·s³",
            "A: m/s²; B: m/s²"
          ],
          "a": 0,
          "w": "Toplanan her terim metre olmalı: At² için [A]·s² = m → A: m/s²; Bt³ için [B]·s³ = m → B: m/s³. \"m/s; m/s²\" üsleri bir eksik yazar; \"m·s², m·s³\" saniyeyle bölmek yerine çarpar; iki sabite aynı birimi vermek t² ile t³'ün farkını yok sayar."
        },
        {
          "t": "1.1–1.2",
          "q": "A runner on a straight track moves from x = 2 m to x = 14 m in 4.0 s, then turns around and jogs back to x = 8 m in 2.0 s. What are the runner's average velocity and average speed for the whole 6.0 s?",
          "o": [
            "1.0 m/s and 3.0 m/s",
            "1.0 m/s and 1.0 m/s",
            "1.3 m/s and 3.0 m/s",
            "3.0 m/s and 3.0 m/s"
          ],
          "a": 0,
          "w": "*Displacement* Δx = 8 − 2 = 6 m → *average velocity* = 6/6 = 1,0 m/s. Yol 12 + 6 = 18 m → *average speed* = 18/6 = 3,0 m/s. 1,3 m/s son konumu (8 m) yer değiştirme sanır (8/6); \"1,0 ve 1,0\" sürat için de Δx kullanır; \"3,0 ve 3,0\" yer değiştirmeyle yolu karıştırır."
        },
        {
          "t": "M.1",
          "q": "A particle's position is x(t) = 2t³ − 5t + 1, with x in meters and t in seconds. What is the particle's instantaneous velocity at t = 2 s?",
          "o": [
            "3 m/s",
            "7 m/s",
            "19 m/s",
            "24 m/s"
          ],
          "a": 2,
          "w": "v = dx/dt = 6t² − 5 → v(2) = 24 − 5 = 19 m/s. 7, x(2) = 16 − 10 + 1 = 7 m'dir (konum, hız değil). 3, 0–2 s *average velocity*'dir: (7 − 1)/2. 24 ise ivme a = 12t'nin t = 2'deki değeridir."
        },
        {
          "t": "1.2a",
          "q": "At a certain instant, a cart on a straight track has velocity −6 m/s and acceleration −2 m/s². Which of the following correctly describes the cart's motion at that instant?",
          "o": [
            "It is moving in the +x direction and slowing down.",
            "It is moving in the +x direction and speeding up.",
            "It is moving in the −x direction and slowing down.",
            "It is moving in the −x direction and speeding up."
          ],
          "a": 3,
          "w": "Hızın işareti yönü verir: v < 0 → −x yönünde. v ve a aynı işaretli (ikisi de negatif) → sürat artıyor, yani hızlanıyor. \"Negatif ivme = yavaşlama\" yanlış kuraldır; yavaşlama yalnızca v ile a zıt işaretliyken olur."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a cart as a function of time t. How far does the cart travel from t = 0 to t = 12 s?",
          "o": [
            "48 m",
            "64 m",
            "72 m",
            "96 m"
          ],
          "a": 2,
          "w": "Yol = v–t altındaki alan: ½ · 4 · 8 = 16, 6 · 8 = 48, ½ · 2 · 8 = 8 → 72 m. 96, üçgenlerdeki ½'yi unutur (8 · 12 dikdörtgeni gibi); 64 yalnızca 0–10 s'yi sayar; 48 yalnızca sabit hızlı parçadır.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 13,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  8
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  8
                ],
                "to": [
                  10,
                  8
                ],
                "color": 0
              },
              {
                "from": [
                  10,
                  8
                ],
                "to": [
                  12,
                  0
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 8,
                "label": "(4, 8)"
              },
              {
                "q": 10,
                "p": 8,
                "label": "(10, 8)"
              }
            ],
            "xticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              },
              {
                "v": 10
              },
              {
                "v": 12
              }
            ],
            "yticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              }
            ]
          }
        },
        {
          "t": "1.3",
          "q": "The graph shows the position x of an object moving along a straight line as a function of time t. Which of the following statements is true?",
          "o": [
            "The object's velocity at t = 1 s is 2 m/s.",
            "The object's velocity from t = 3 s to t = 5 s is 8 m/s.",
            "The object's velocity at t = 7 s is 2 m/s.",
            "The object's displacement from t = 0 to t = 9 s is zero."
          ],
          "a": 0,
          "w": "x–t eğimi hızdır. 0–3 s: (8 − 2)/3 = 2 m/s, doğru. 3–5 s grafik yatay → v = 0; 8 m konumdur. 5–9 s: (0 − 8)/4 = −2 m/s, işaret negatif. Δx = x(9) − x(0) = 0 − 2 = −2 m, sıfır değil.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "x (m)",
            "xmax": 10,
            "ymax": 10,
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
                  8
                ],
                "color": 0
              },
              {
                "from": [
                  5,
                  8
                ],
                "to": [
                  9,
                  0
                ],
                "color": 0,
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
                "q": 3,
                "p": 8,
                "label": "(3, 8)"
              },
              {
                "q": 5,
                "p": 8,
                "label": "(5, 8)"
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
              },
              {
                "v": 9
              }
            ],
            "yticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              }
            ]
          }
        },
        {
          "t": "1.2–1.3",
          "q": "A car moving at 18 m/s brakes with a constant acceleration of magnitude 3.0 m/s². How far does the car travel during the first 4.0 s of braking?",
          "o": [
            "24 m",
            "48 m",
            "72 m",
            "96 m"
          ],
          "a": 1,
          "w": "Δx = v₀t + ½at² = 18 · 4 − ½ · 3 · 16 = 72 − 24 = 48 m (araba 6 s'de durur, 4 s'de hâlâ hareketli). 72 ivmeyi yok sayar; 96 ivmenin işaretini + alır; 24 ½'yi unutur (72 − 48)."
        },
        {
          "t": "1.2–1.3",
          "q": "A stone is released from rest above a lake and hits the water 2.5 s later. Air resistance is negligible. From what height above the water was the stone released?",
          "o": [
            "12.3 m",
            "24.5 m",
            "30.6 m",
            "61.3 m"
          ],
          "a": 2,
          "w": "*Free fall*: h = ½gt² = ½ · 9,8 · 2,5² = 30,6 m. 61,3 ½'yi unutur; 24,5 m/s çarpma hızıdır (gt), yükseklik değil; 12,3 t'nin karesini almayı unutur (½ · 9,8 · 2,5)."
        },
        {
          "t": "M.3",
          "q": "A particle moves along the x-axis with velocity v(t) = 6 − 3t, in meters per second. What total distance does the particle travel from t = 0 to t = 4 s?",
          "o": [
            "0 m",
            "6 m",
            "12 m",
            "24 m"
          ],
          "a": 2,
          "w": "v = 0 → t = 2 s'de yön değişir; aralığı böl. x(t) = 6t − 1,5t²: 0–2 s'de 6 m ileri, 2–4 s'de x(4) − x(2) = 0 − 6 = −6 m, yani 6 m geri. Yol 6 + 6 = 12 m. 0, ∫v dt = *displacement*'tır; 6 yalnızca dönüşe kadar; 24, ilk hızı 4 s boyunca sabit sanır."
        },
        {
          "t": "1.1, 1.5",
          "q": "Vectors A = 3î + 4ĵ and B = 5î − 10ĵ are given in meters. What is the magnitude of A + B?",
          "o": [
            "10 m",
            "14 m",
            "14.1 m",
            "16.2 m"
          ],
          "a": 0,
          "w": "Bileşen bileşen topla: A + B = 8î − 6ĵ → |A + B| = √(64 + 36) = 10 m. 16,2 büyüklükleri doğrudan toplar (5 + 11,2); 14, bileşenlerin mutlak değerlerini toplar (8 + 6); 14,1 ise |A − B| = |−2î + 14ĵ|'dir."
        },
        {
          "t": "M.3",
          "q": "A particle moves along the x-axis with velocity v(t) = 6t² − 4t, in meters per second. At t = 0 the particle is at x = 3 m. What is the particle's position at t = 2 s?",
          "o": [
            "8 m",
            "11 m",
            "16 m",
            "32 m"
          ],
          "a": 1,
          "w": "x(t) = ∫v dt = 2t³ − 2t² + C; x(0) = 3 → C = 3. x(2) = 16 − 8 + 3 = 11 m. 8, başlangıç konumunu (C) unutur; 16, v(2) = 24 − 8'dir; 32, v(2)'yi 2 s boyunca sabit sanar (16 · 2)."
        },
        {
          "t": "1.2b",
          "q": "An object moving along a straight line has acceleration a(t) = 4t + 2, in m/s², and velocity 3 m/s at t = 0. What is its velocity at t = 3 s?",
          "o": [
            "17 m/s",
            "24 m/s",
            "27 m/s",
            "45 m/s"
          ],
          "a": 2,
          "w": "İvme sabit değil, integral al: v(t) = 2t² + 2t + 3 → v(3) = 18 + 6 + 3 = 27 m/s. 24, v₀ = 3'ü unutur; 17, v₀'a a(3) = 14'ü ekler; 45, a(3) = 14'ü 3 s boyunca sabit sayar (3 + 14 · 3)."
        },
        {
          "t": "M.2",
          "q": "A block on a spring oscillates with position x(t) = 0.15 cos(4t), where x is in meters and t is in seconds. What is the maximum magnitude of the block's acceleration?",
          "o": [
            "0.15 m/s²",
            "0.60 m/s²",
            "1.2 m/s²",
            "2.4 m/s²"
          ],
          "a": 3,
          "w": "Zincir kuralı iki kez: v = −0,60 sin(4t), a = −2,4 cos(4t) → en büyük |a| = 0,15 · 4² = 2,4 m/s². 0,60 en büyük sürattir (m/s); 1,2, 4² yerine 2 · 4 ile çarpar; 0,15 genliktir (konum)."
        },
        {
          "t": "1.3",
          "q": "The graph shows the acceleration a of a cart as a function of time t. The cart's velocity at t = 0 is 2 m/s. What is the cart's velocity at t = 8 s?",
          "o": [
            "12 m/s",
            "14 m/s",
            "16 m/s",
            "18 m/s"
          ],
          "a": 3,
          "w": "a–t altındaki alan Δv'dir: 3 · 4 + 1 · 4 = 16 m/s. v(8) = v₀ + Δv = 2 + 16 = 18 m/s. 16, v₀'ı unutur; 14 yalnızca ilk 4 s'nin alanını ekler (2 + 12); 12, hem v₀'ı hem ikinci parçayı atlar.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "a (m/s²)",
            "xmax": 9,
            "ymax": 4,
            "lines": [
              {
                "from": [
                  0,
                  3
                ],
                "to": [
                  4,
                  3
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  1
                ],
                "to": [
                  8,
                  1
                ],
                "label": "a",
                "color": 0
              }
            ],
            "xticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
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
              }
            ]
          }
        },
        {
          "t": "1.1–1.2",
          "q": "The position of a particle is x(t) = t² − 4t, with x in meters and t in seconds. At what time is the particle's instantaneous velocity equal to its average velocity over the interval 0 ≤ t ≤ 6 s?",
          "o": [
            "2 s",
            "3 s",
            "4 s",
            "6 s"
          ],
          "a": 1,
          "w": "Ortalama hız: [x(6) − x(0)]/6 = (12 − 0)/6 = 2 m/s. Anlık hız v = 2t − 4 = 2 → t = 3 s. 2 s, v = 0 olan andır (dönüş); 4 s, x'in yeniden 0 olduğu an; 6 s aralığın sonudur ve orada v = 8 m/s."
        },
        {
          "t": "1.2–1.3",
          "q": "A car starts from rest and moves with constant acceleration. It covers 50 m in the first 5.0 s. What is its speed at t = 5.0 s?",
          "o": [
            "4.0 m/s",
            "10 m/s",
            "14.1 m/s",
            "20 m/s"
          ],
          "a": 3,
          "w": "Δx = ½at² → a = 2 · 50/25 = 4,0 m/s²; v = at = 20 m/s (ya da v = 2 · v_ort = 2 · 10). 10 m/s ortalama hızdır, son hız değil; 4,0 ivmenin sayısıdır; 14,1, a'yı ½'siz 50/25 = 2 bulup v² = 2aΔx'e koymaktan gelir."
        },
        {
          "t": "1.4–1.5",
          "q": "A ball rolls off the edge of a horizontal table that is 1.8 m high with a speed of 2.5 m/s. Air resistance is negligible. How far from the base of the table, measured horizontally, does the ball land?",
          "o": [
            "1.1 m",
            "1.5 m",
            "3.0 m",
            "4.5 m"
          ],
          "a": 1,
          "w": "Dikey hareket yatay hızdan bağımsız: 1,8 = ½ · 9,8 · t² → t = 0,606 s. Yatay: x = 2,5 · 0,606 = 1,5 m. 1,1, h = gt² (½'siz) ile t = 0,43 s bulur; 3,0 süreyi ikiye katlar; 4,5 hızı yükseklikle çarpar (birim bile tutmaz)."
        },
        {
          "t": "1.2a",
          "q": "A puck's velocity changes from +8.0 m/s to −4.0 m/s in 3.0 s. What is the puck's average acceleration during this interval?",
          "o": [
            "−4.0 m/s²",
            "−1.3 m/s²",
            "+1.3 m/s²",
            "+4.0 m/s²"
          ],
          "a": 0,
          "w": "a_ort = Δv/Δt = (−4,0 − 8,0)/3,0 = −4,0 m/s². −1,3, işareti atıp süratleri çıkarır ((4 − 8)/3); +4,0 sonu ve başı ters çıkarır; +1,3 her iki hatayı birden yapar."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a cart as a function of time t. Which of the following statements is true?",
          "o": [
            "The cart is slowing down from t = 5 s to t = 8 s.",
            "The cart reverses direction at t = 3 s.",
            "The cart is at rest from t = 3 s to t = 5 s.",
            "The cart's acceleration from t = 0 to t = 3 s is about −1.3 m/s²."
          ],
          "a": 3,
          "w": "0–3 s eğim: (2 − 6)/3 ≈ −1,3 m/s², doğru. 5–8 s'de hız 2'den 8'e çıkıyor, hızlanıyor. t = 3 s'de v = 2 m/s > 0, işaret değişmiyor, dönüş yok. 3–5 s'de v = 2 m/s sabit: dinlenme değil, sabit hız (a = 0).",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 9,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  6
                ],
                "to": [
                  3,
                  2
                ],
                "color": 0
              },
              {
                "from": [
                  3,
                  2
                ],
                "to": [
                  5,
                  2
                ],
                "color": 0
              },
              {
                "from": [
                  5,
                  2
                ],
                "to": [
                  8,
                  8
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 6,
                "label": "(0, 6)"
              },
              {
                "q": 3,
                "p": 2,
                "label": "(3, 2)"
              },
              {
                "q": 5,
                "p": 2,
                "label": "(5, 2)"
              },
              {
                "q": 8,
                "p": 8,
                "label": "(8, 8)"
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
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              }
            ]
          }
        },
        {
          "t": "1.4–1.5",
          "q": "The position vector of a particle is r(t) = t³ î + 4t ĵ, where r is in meters and t is in seconds. What is the particle's speed at t = 1 s?",
          "o": [
            "4.1 m/s",
            "5.0 m/s",
            "6.0 m/s",
            "7.0 m/s"
          ],
          "a": 1,
          "w": "Bileşen bileşen türev: v = 3t² î + 4 ĵ → v(1) = 3î + 4ĵ → sürat √(9 + 16) = 5,0 m/s. 4,1, |r(1)| = √17'dir (konum); 7,0 bileşenleri doğrudan toplar; 6,0, a = 6t î'nin t = 1'deki büyüklüğüdür."
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
          "q": "The velocity of an object is given by v(t) = Pt² + Q/t, where v is in meters per second and t is in seconds. What are the SI units of P and Q?",
          "o": [
            "P: m/s; Q: m/s",
            "P: m/s²; Q: m·s",
            "P: m/s³; Q: m/s²",
            "P: m/s³; Q: m"
          ],
          "a": 3,
          "w": "Her terim m/s olmalı: [P]·s² = m/s → P: m/s³; [Q]/s = m/s → Q: m. \"m/s; m/s\" sabitlere terimin birimini verir; \"m/s², m·s\" üsleri yanlış sayar; Q için m/s² ise Q/t'yi m/s³ yapar."
        },
        {
          "t": "1.1–1.2",
          "q": "The table gives the position x of a toy car moving along a straight track at several times t. What is the car's average velocity from t = 1 s to t = 4 s?",
          "o": [
            "−1.0 m/s",
            "0 m/s",
            "+1.0 m/s",
            "+1.7 m/s"
          ],
          "a": 0,
          "w": "*Average velocity* = [x(4) − x(1)]/(4 − 1) = (0 − 3)/3 = −1,0 m/s. 0, 0–4 s aralığının ortalamasıdır; +1,0 işareti ters alır; +1,7 ortalama sürattir: yol (3 → 4 → 0) 1 + 4 = 5 m, 5/3 ≈ 1,7 m/s.",
          "fig": {
            "type": "table",
            "head": [
              "t (s)",
              "x (m)"
            ],
            "rows": [
              [
                0,
                0
              ],
              [
                1,
                3
              ],
              [
                2,
                4
              ],
              [
                3,
                3
              ],
              [
                4,
                0
              ]
            ]
          }
        },
        {
          "t": "M.1",
          "q": "The position of a particle is x(t) = 8√t, with x in meters and t in seconds. What is the particle's velocity at t = 16 s?",
          "o": [
            "0.25 m/s",
            "1.0 m/s",
            "2.0 m/s",
            "32 m/s"
          ],
          "a": 1,
          "w": "8t^(1/2) → v = 8 · ½ · t^(−1/2) = 4/√t → v(16) = 4/4 = 1,0 m/s. 0,25, √t yerine t'ye böler (4/16); 2,0, 0–16 s ortalama hızıdır (32/16); 32, x(16)'dır, konum."
        },
        {
          "t": "1.2a",
          "q": "A particle's position is x(t) = 3t² − t³, with x in meters and t in seconds. What is the particle's acceleration at the instant t > 0 when it is momentarily at rest?",
          "o": [
            "−6 m/s²",
            "0 m/s²",
            "4 m/s²",
            "6 m/s²"
          ],
          "a": 0,
          "w": "v = 6t − 3t² = 3t(2 − t) = 0 → t = 2 s. a = dv/dt = 6 − 6t → a(2) = −6 m/s². 0, \"v = 0 ise a = 0\" yanılgısıdır; 4, x(2) = 12 − 8'dir; +6 işareti ters alır."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a bicycle as a function of time t. What is the bicycle's average velocity from t = 0 to t = 8 s?",
          "o": [
            "1.0 m/s",
            "3.5 m/s",
            "4.75 m/s",
            "6.0 m/s"
          ],
          "a": 2,
          "w": "Önce Δx = alan: ½ · 2 · 6 = 6, 4 · 6 = 24, (6 + 2)/2 · 2 = 8 → 38 m. v_ort = 38/8 = 4,75 m/s. 1,0, ilk ve son hızın ortalamasıdır ((0 + 2)/2), bu yalnız sabit ivmede geçerli; 3,5 köşe değerlerinin ortalaması; 6,0 en büyük hızdır.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 9,
            "ymax": 8,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  2,
                  6
                ],
                "color": 0
              },
              {
                "from": [
                  2,
                  6
                ],
                "to": [
                  6,
                  6
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  6
                ],
                "to": [
                  8,
                  2
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 6,
                "label": "(2, 6)"
              },
              {
                "q": 6,
                "p": 6,
                "label": "(6, 6)"
              },
              {
                "q": 8,
                "p": 2,
                "label": "(8, 2)"
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
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              }
            ]
          }
        },
        {
          "t": "1.3",
          "q": "The graph shows the position x of an elevator as a function of time t. At which of the following times is the elevator's speed greatest?",
          "o": [
            "t = 1 s",
            "t = 4 s",
            "t = 5.5 s",
            "t = 8 s"
          ],
          "a": 2,
          "w": "Sürat = x–t eğiminin büyüklüğü. 0–2 s: 4/2 = 2 m/s; 2–5 s: 0; 5–6 s: 4/1 = 4 m/s; 6–9 s: |−9/3| = 3 m/s. En dik parça 5–6 s, yani t = 5,5 s. t = 8 s'de eğim negatif ve büyüklüğü 3; t = 4 s'de asansör duruyor.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "x (m)",
            "xmax": 10,
            "ymax": 10,
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
                  5,
                  5
                ],
                "color": 0
              },
              {
                "from": [
                  5,
                  5
                ],
                "to": [
                  6,
                  9
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  9
                ],
                "to": [
                  9,
                  0
                ],
                "color": 0,
                "label": "x"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 5,
                "label": "(2, 5)"
              },
              {
                "q": 5,
                "p": 5,
                "label": "(5, 5)"
              },
              {
                "q": 6,
                "p": 9,
                "label": "(6, 9)"
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
              },
              {
                "v": 9
              }
            ],
            "yticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              }
            ]
          }
        },
        {
          "t": "1.2–1.3",
          "q": "A motorcycle speeds up uniformly from 6.0 m/s to 18 m/s while covering 48 m. How long does this take?",
          "o": [
            "2.7 s",
            "4.0 s",
            "5.3 s",
            "8.0 s"
          ],
          "a": 1,
          "w": "Sabit ivmede v_ort = (v₀ + v)/2 = 12 m/s → t = 48/12 = 4,0 s (kontrol: a = (18² − 6²)/(2 · 48) = 3,0 m/s², t = 12/3 = 4,0 s). 2,7, son hızı (18) kullanır; 8,0, ilk hızı (6) kullanır; 5,3, motosikletin durgun başladığını varsayar (v_ort = 18/2 = 9 → 48/9)."
        },
        {
          "t": "1.2–1.3",
          "q": "A stone is thrown straight down at 10 m/s from the top of a cliff 40 m high. Air resistance is negligible. With what speed does the stone hit the ground below?",
          "o": [
            "26.2 m/s",
            "28.0 m/s",
            "29.7 m/s",
            "38.0 m/s"
          ],
          "a": 2,
          "w": "v² = v₀² + 2gh = 100 + 2 · 9,8 · 40 = 884 → v = 29,7 m/s. 28,0, ilk hızı unutur (√784); 38,0 hızları doğrudan toplar (10 + 28); 26,2, v₀²'yi çıkarır (√684)."
        },
        {
          "t": "1.2–1.3",
          "q": "A ball is thrown straight up and returns to the thrower's hand 3.0 s later. Air resistance is negligible. How high above the hand does the ball rise?",
          "o": [
            "11.0 m",
            "14.7 m",
            "22.1 m",
            "44.1 m"
          ],
          "a": 0,
          "w": "Simetri: çıkış 1,5 s. Tepeden düşüş gibi düşün: h = ½ · 9,8 · 1,5² = 11,0 m (v₀ = 9,8 · 1,5 = 14,7 m/s). 14,7 ilk hızın sayısıdır; 22,1 ½'yi unutur; 44,1 tüm uçuş süresini (3,0 s) kullanır."
        },
        {
          "t": "1.1, 1.5",
          "q": "Vector A has magnitude 10 m and points along the +x-axis. Vector B has magnitude 10 m and points at 120° counterclockwise from the +x-axis. What is the magnitude of A + B?",
          "o": [
            "0 m",
            "10 m",
            "17.3 m",
            "20 m"
          ],
          "a": 1,
          "w": "B = 10 cos 120° î + 10 sin 120° ĵ = −5î + 8,66ĵ. A + B = 5î + 8,66ĵ → √(25 + 75) = 10 m. 20 büyüklükleri toplar (yalnız aynı yönde doğru); 17,3, |A − B| = |15î − 8,66ĵ|'dir; 0, vektörleri zıt yönlü sanar."
        },
        {
          "t": "M.3",
          "q": "A particle moves along the x-axis with velocity v(t) = 4 cos(2t), where v is in meters per second and t is in seconds. What is the particle's displacement from t = 0 to t = π/4 s?",
          "o": [
            "0 m",
            "2 m",
            "4 m",
            "8 m"
          ],
          "a": 1,
          "w": "∫4 cos(2t) dt = 2 sin(2t). [0, π/4]: 2 sin(π/2) − 0 = 2 m. 8, iç fonksiyonun 2'sine bölmek yerine çarpar; 4, bu çarpanı hiç kullanmaz; 0, sin(0)'ı sonuç sanır."
        },
        {
          "t": "1.2b",
          "q": "A scooter starts from rest, and its acceleration is a(t) = 8 − 4t, in m/s², for 0 ≤ t ≤ 4 s. What is the scooter's maximum velocity during this interval?",
          "o": [
            "0 m/s",
            "5.3 m/s",
            "8.0 m/s",
            "16 m/s"
          ],
          "a": 2,
          "w": "v(t) = 8t − 2t². En büyük hız a = 0 anında: 8 − 4t = 0 → t = 2 s, v(2) = 16 − 8 = 8,0 m/s. 16, ilk ivmeyi (8) sabit sayar (8 · 2); 5,3, 0–2 s ortalama hızıdır (x(2)/2 = 10,7/2); 0, \"a = 0 ise v = 0\" yanılgısıdır."
        },
        {
          "t": "M.2",
          "q": "The position of a particle is x(t) = 5e^(−0.4t), with x in meters and t in seconds. What is the particle's acceleration at t = 0?",
          "o": [
            "−2.0 m/s²",
            "−0.80 m/s²",
            "0.16 m/s²",
            "0.80 m/s²"
          ],
          "a": 3,
          "w": "v = 5 · (−0,4)e^(−0,4t) = −2e^(−0,4t); a = −2 · (−0,4)e^(−0,4t) = 0,8e^(−0,4t) → a(0) = 0,80 m/s². −2,0, v(0)'dır; −0,80 ikinci türevdeki işareti kaçırır; 0,16, 5 katsayısını unutur (0,4²)."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a cart as a function of time t. Which of the following correctly describes the cart's acceleration?",
          "o": [
            "+2 m/s² from 0 to 4 s, +8 m/s² from 4 to 8 s, −4 m/s² from 8 to 10 s",
            "+2 m/s² from 0 to 4 s, 0 from 4 to 8 s, +4 m/s² from 8 to 10 s",
            "+2 m/s² from 0 to 4 s, 0 from 4 to 8 s, −8 m/s² from 8 to 10 s",
            "+2 m/s² from 0 to 4 s, 0 from 4 to 8 s, −4 m/s² from 8 to 10 s"
          ],
          "a": 3,
          "w": "İvme v–t eğimidir: 0–4 s: 8/4 = +2; 4–8 s yatay → 0; 8–10 s: (0 − 8)/2 = −4 m/s². \"+8\" düz parçada eğim yerine hız değerini okur; \"+4\" işareti kaçırır; \"−8\", Δv'yi Δt = 2 s'ye bölmeyi unutur.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 11,
            "ymax": 10,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  8
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  8
                ],
                "to": [
                  8,
                  8
                ],
                "color": 0
              },
              {
                "from": [
                  8,
                  8
                ],
                "to": [
                  10,
                  0
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 8,
                "label": "(4, 8)"
              },
              {
                "q": 8,
                "p": 8,
                "label": "(8, 8)"
              }
            ],
            "xticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              },
              {
                "v": 10
              }
            ],
            "yticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              }
            ]
          }
        },
        {
          "t": "1.1–1.2",
          "q": "The table gives the position x of a particle at three times near t = 3.0 s. Based on the table, what is the best estimate of the particle's instantaneous velocity at t = 3.0 s?",
          "o": [
            "0.60 m/s",
            "1.2 m/s",
            "3.0 m/s",
            "6.0 m/s"
          ],
          "a": 3,
          "w": "t = 3,0'ı ortalayan *secant*: (9,61 − 8,41)/(3,1 − 2,9) = 1,20/0,2 = 6,0 m/s. 1,2, Δx'i Δt'ye bölmeyi unutur; 0,60, tek taraflı Δx'i (9,61 − 9,00) bölmeden alır; 3,0, x/t = 9/3'tür, eğim değil.",
          "fig": {
            "type": "table",
            "head": [
              "t (s)",
              "x (m)"
            ],
            "rows": [
              [
                2.9,
                8.41
              ],
              [
                3,
                9
              ],
              [
                3.1,
                9.61
              ]
            ]
          }
        },
        {
          "t": "1.2–1.3",
          "q": "A driver traveling at 20 m/s sees a hazard. After a reaction time of 0.80 s, the driver brakes with a constant deceleration of 5.0 m/s² until the car stops. What is the total distance the car travels from the moment the driver sees the hazard?",
          "o": [
            "16 m",
            "40 m",
            "56 m",
            "96 m"
          ],
          "a": 2,
          "w": "Tepki süresinde sabit hız: 20 · 0,80 = 16 m. Fren: v² = 2ad → 400/(2 · 5) = 40 m. Toplam 56 m. 16 ve 40 yalnızca birer parçadır; 96, frende 2'yi unutur (400/5 = 80, + 16)."
        },
        {
          "t": "1.4–1.5",
          "q": "A river 100 m wide flows at 3.0 m/s. A boat that moves at 5.0 m/s relative to the water is steered so that it travels straight across the river, perpendicular to the banks. How long does the crossing take?",
          "o": [
            "13 s",
            "17 s",
            "20 s",
            "25 s"
          ],
          "a": 3,
          "w": "Dümdüz karşıya gitmek için tekne akıntıya karşı açılır: suya göre hızın akıntıya karşı bileşeni 3,0 m/s olmalı, karşıya bileşen √(5² − 3²) = 4,0 m/s. t = 100/4 = 25 s. 20 s, tüm 5 m/s'yi karşıya sayar; 17 s, hızları dik toplar (√34); 13 s, doğrudan toplar (5 + 3)."
        },
        {
          "t": "1.2a",
          "q": "A particle moves along the x-axis with velocity v(t) = t² − 4, in meters per second. Which of the following describes the particle's motion at t = 1 s?",
          "o": [
            "It is moving in the −x direction and slowing down.",
            "It is moving in the −x direction and speeding up.",
            "It is moving in the +x direction and slowing down.",
            "It is moving in the +x direction and speeding up."
          ],
          "a": 0,
          "w": "v(1) = 1 − 4 = −3 m/s → −x yönünde. a = dv/dt = 2t → a(1) = +2 m/s². v ve a zıt işaretli → yavaşlıyor. Yalnız v'ye ya da yalnız a'ya bakmak diğer şıklara götürür."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a delivery van as a function of time t. What is the van's acceleration at t = 7 s?",
          "o": [
            "−3.0 m/s²",
            "0 m/s²",
            "3.0 m/s²",
            "9.0 m/s²"
          ],
          "a": 0,
          "w": "t = 7 s, 6–10 s parçasında: eğim (0 − 12)/(10 − 6) = −3,0 m/s². 9,0, v(7) = 12 − 3 = 9 m/s'yi ivme sanar; +3,0 işareti kaçırır; 0 ise 4–6 s'deki düz parçanın eğimidir.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 11,
            "ymax": 14,
            "lines": [
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  4,
                  12
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  12
                ],
                "to": [
                  6,
                  12
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  12
                ],
                "to": [
                  10,
                  0
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 4,
                "label": "(0, 4)"
              },
              {
                "q": 4,
                "p": 12,
                "label": "(4, 12)"
              },
              {
                "q": 6,
                "p": 12,
                "label": "(6, 12)"
              }
            ],
            "xticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              },
              {
                "v": 10
              }
            ],
            "yticks": [
              {
                "v": 4
              },
              {
                "v": 8
              },
              {
                "v": 12
              }
            ]
          }
        },
        {
          "t": "M.4",
          "q": "Vectors A = 4î + 2ĵ and B = −î + 3ĵ are given. What is the angle between A and B?",
          "o": [
            "8.1°",
            "81.9°",
            "90°",
            "98.1°"
          ],
          "a": 1,
          "w": "*Dot product*: A·B = 4 · (−1) + 2 · 3 = 2. cos θ = 2/(√20 · √10) = 2/14,14 = 0,141 → θ = 81,9°. 90°, A·B = 0 olsaydı doğru olurdu, ama 2 ≠ 0; 98,1°, A·B'yi negatif alır; 8,1°, kosinüs yerine sinüsün tersini (90° − θ) verir."
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
          "q": "The position of an object is x(t) = A sin(Bt) + Ct, where x is in meters, t is in seconds, and A, B, and C are constants. What are the SI units of A, B, and C?",
          "o": [
            "A: m; B: s; C: m/s",
            "A: m; B: 1/s; C: m/s",
            "A: m/s; B: 1/s; C: m",
            "A: m; B: 1/s; C: m/s²"
          ],
          "a": 1,
          "w": "Sinüsün içi birimsiz olmalı: Bt birimsiz → B: 1/s. sin birimsiz olduğundan A: m. Ct metre olmalı → C: m/s. B: s yazmak Bt'yi s² yapar; \"A: m/s, C: m\" rolleri ters çevirir; C: m/s² ise Ct'yi m/s yapar."
        },
        {
          "t": "1.2a",
          "q": "A particle moves along the x-axis with position x(t) = 2t³ − 9t² + 12t, with x in meters and t in seconds. During which of the following time intervals, within 0 < t < 3 s, is the particle speeding up?",
          "o": [
            "2 < t < 3 only",
            "0 < t < 1 and 1.5 < t < 2",
            "1.5 < t < 3",
            "1 < t < 1.5 and 2 < t < 3"
          ],
          "a": 3,
          "w": "v = 6t² − 18t + 12 = 6(t − 1)(t − 2): (0, 1)'de +, (1, 2)'de −, (2, 3)'te +. a = 12t − 18: t < 1,5'te −, t > 1,5'te +. Hızlanma v ve a aynı işaretliyken: (1, 1,5)'te ikisi de −, (2, 3)'te ikisi de +. \"2 < t < 3 only\" negatif yöndeki hızlanmayı kaçırır; \"1,5 < t < 3\" yalnız a > 0'a bakar."
        },
        {
          "t": "M.1",
          "q": "A particle's position is x(t) = t³ − 12t + 5, with x in meters and t in seconds. Where is the particle at the instant t > 0 when it is momentarily at rest?",
          "o": [
            "x = −16 m",
            "x = −11 m",
            "x = 2 m",
            "x = 5 m"
          ],
          "a": 1,
          "w": "v = 3t² − 12 = 0 → t = 2 s. x(2) = 8 − 24 + 5 = −11 m. −16, +5 sabitini unutur; 2, zamanı konum sanar; 5, x(0)'dır."
        },
        {
          "t": "1.1–1.2",
          "q": "A particle's position is x(t) = t² − 6t + 10, with x in meters and t in seconds. What is the particle's average speed from t = 0 to t = 5 s?",
          "o": [
            "−1.0 m/s",
            "2.6 m/s",
            "3.0 m/s",
            "4.0 m/s"
          ],
          "a": 1,
          "w": "v = 2t − 6 → t = 3 s'de dönüş. x(0) = 10, x(3) = 1, x(5) = 5: yol 9 + 4 = 13 m → ortalama sürat 13/5 = 2,6 m/s. −1,0 *average velocity*'dir ((5 − 10)/5), sürat negatif olamaz; 3,0 yalnız ilk bacağın (9 m / 3 s) ortalamasıdır; 4,0, v(5)'tir."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a cart as a function of time t. At t = 0 the cart is at x = −10 m. What is the cart's position at t = 9 s?",
          "o": [
            "49 m",
            "59 m",
            "69 m",
            "72 m"
          ],
          "a": 0,
          "w": "Δx = alan: (2 + 8)/2 · 3 = 15, 8 · 4 = 32, (8 + 4)/2 · 2 = 12 → 59 m. x(9) = −10 + 59 = 49 m. 59, başlangıç konumunu unutur; 69, −10'u + alır; 72, 8 m/s'lik dikdörtgeni tüm 9 s'ye yayar.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 10,
            "ymax": 10,
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
                  7,
                  8
                ],
                "color": 0
              },
              {
                "from": [
                  7,
                  8
                ],
                "to": [
                  9,
                  4
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 2,
                "label": "(0, 2)"
              },
              {
                "q": 3,
                "p": 8,
                "label": "(3, 8)"
              },
              {
                "q": 7,
                "p": 8,
                "label": "(7, 8)"
              },
              {
                "q": 9,
                "p": 4,
                "label": "(9, 4)"
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
              },
              {
                "v": 9
              }
            ],
            "yticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              }
            ]
          }
        },
        {
          "t": "1.3",
          "q": "During a certain time interval, the position-versus-time graph of an object is decreasing and concave up. Which of the following is true during that interval?",
          "o": [
            "v < 0 and a > 0; the object is slowing down.",
            "v < 0 and a < 0; the object is speeding up.",
            "v < 0 and a > 0; the object is speeding up.",
            "v > 0 and a > 0; the object is speeding up."
          ],
          "a": 0,
          "w": "Azalan x–t → eğim, yani v, negatif. Yukarı bükülme (*concave up*) → eğim artıyor → a > 0. Zıt işaret → sürat azalıyor: yavaşlıyor. Negatif eğim sıfıra yaklaşıyor; |v| küçülüyor. \"v < 0, a > 0, hızlanıyor\" işaret kuralını ters uygular."
        },
        {
          "t": "1.2–1.3",
          "q": "A ball is thrown straight up at 15 m/s from the edge of a roof 20 m above the ground. It misses the roof on the way down and lands on the ground. Air resistance is negligible. How long after the throw does the ball hit the ground?",
          "o": [
            "1.5 s",
            "2.0 s",
            "3.1 s",
            "4.1 s"
          ],
          "a": 3,
          "w": "Yukarı +, çatı 0: −20 = 15t − 4,9t² → 4,9t² − 15t − 20 = 0 → t = [15 + √(225 + 392)]/9,8 = (15 + 24,8)/9,8 ≈ 4,1 s. 3,1 s, topun çatı hizasına dönüşüdür (2 · 15/9,8); 2,0 s, ilk hızı yok sayıp bırakılmış gibi düşünür; 1,5 s, tepeye çıkış süresidir."
        },
        {
          "t": "1.2–1.3",
          "q": "A model rocket is launched straight up from rest and accelerates upward at a constant 4.0 m/s² for 10 s, at which point its fuel runs out. Air resistance is negligible. What maximum height above the ground does the rocket reach?",
          "o": [
            "82 m",
            "200 m",
            "282 m",
            "363 m"
          ],
          "a": 2,
          "w": "Faz 1: v = 4 · 10 = 40 m/s, h₁ = ½ · 4 · 100 = 200 m. Faz 2 (yakıt bitti, yine yükseliyor, a = −g): h₂ = 40²/(2 · 9,8) = 81,6 m. Toplam 282 m. 200, yakıt bitince roketin durduğunu sanır; 82 yalnız ikinci fazdır; 363, ikinci fazda 2'yi unutur (1600/9,8 = 163)."
        },
        {
          "t": "1.2–1.3",
          "q": "An object is dropped from rest and falls freely. What is the ratio of the distance it falls during the third second of its fall (from t = 2 s to t = 3 s) to the distance it falls during the first second?",
          "o": [
            "3",
            "4",
            "5",
            "9"
          ],
          "a": 2,
          "w": "y = ½gt² → orantılı: 0–1 s: 1 birim; 0–2 s: 4; 0–3 s: 9. Üçüncü saniye: 9 − 4 = 5 birim → oran 5. 9, toplam yolları (3²) karşılaştırır; 4, ikinci saniyenin sonuna kadarki yoldur; 3 zamanların oranıdır."
        },
        {
          "t": "1.2b",
          "q": "A particle moves along the x-axis with acceleration a(t) = 2t − 6, in m/s², and velocity 5 m/s at t = 0. At what time(s) does the particle reverse direction?",
          "o": [
            "t = 3 s only",
            "t = 5 s only",
            "The particle never reverses direction.",
            "t = 1 s and t = 5 s"
          ],
          "a": 3,
          "w": "v(t) = t² − 6t + 5 = (t − 1)(t − 5). v iki kökte de işaret değiştiriyor → t = 1 s ve t = 5 s'de yön değişir. t = 3 s, a = 0 anıdır (hızın en küçük olduğu an), dönüş değil; \"5 s only\" yalnız v'nin negatiften pozitife geçtiği kökü sayar; t = 1'de de işaret değişir (+ → −)."
        },
        {
          "t": "M.3",
          "q": "A particle moves along the x-axis with velocity v(t) = 6√t, in meters per second, and is at x = 2 m at t = 0. What is its position at t = 4 s?",
          "o": [
            "12 m",
            "32 m",
            "34 m",
            "50 m"
          ],
          "a": 2,
          "w": "x(t) = ∫6t^(1/2) dt = 4t^(3/2) + C, C = 2. x(4) = 4 · 8 + 2 = 34 m. 32, başlangıç konumunu unutur; 12, v(4)'tür; 50, v(4) = 12'yi 4 s boyunca sabit sayar (2 + 48)."
        },
        {
          "t": "M.2",
          "q": "A particle oscillates with position x(t) = 3 cos(2t), with x in meters and t in seconds. What is the particle's acceleration at an instant when x = 1.5 m?",
          "o": [
            "−6.0 m/s²",
            "−3.0 m/s²",
            "6.0 m/s²",
            "12 m/s²"
          ],
          "a": 0,
          "w": "v = −6 sin(2t), a = −12 cos(2t) = −4 · [3 cos(2t)] = −4x. x = 1,5 m → a = −6,0 m/s². −3,0, zincir çarpanını bir kez kullanır (−2x); +6,0 işareti kaçırır; 12, genliği (3) ve 2²'yi çarpar, x = 1,5'i kullanmaz."
        },
        {
          "t": "1.4–1.5",
          "q": "A ball is launched from level ground with initial velocity (15 î + 20 ĵ) m/s, where ĵ is vertically upward. Air resistance is negligible. How far from the launch point does the ball land?",
          "o": [
            "30.6 m",
            "61.2 m",
            "81.6 m",
            "102 m"
          ],
          "a": 1,
          "w": "Uçuş süresi dikeyden: t = 2 · 20/9,8 = 4,08 s. Menzil: 15 · 4,08 = 61,2 m. 30,6 yalnız tepeye çıkış süresini kullanır; 81,6 dikey bileşeni (20) yatay sanar; 102, toplam sürati (25) yatayda kullanır."
        },
        {
          "t": "1.1, 1.5",
          "q": "A car traveling east at 10 m/s turns a corner and is traveling north at 10 m/s 2.0 s later. What is the car's average acceleration during the turn?",
          "o": [
            "0",
            "7.1 m/s² toward the northeast",
            "10 m/s² toward the northwest",
            "7.1 m/s² toward the northwest"
          ],
          "a": 3,
          "w": "Δv = v_son − v_ilk = 10ĵ − 10î → |Δv| = √200 = 14,1 m/s, yönü kuzeybatı. a_ort = 14,1/2,0 = 7,1 m/s² kuzeybatıya. 0, sürat değişmediği için ivme yok sanar; kuzeydoğu, iki hızı toplar (Δv yerine v_ilk + v_son); 10, Δv'yi 20 m/s sayar (10 + 10)."
        },
        {
          "t": "1.3",
          "q": "The graph shows the acceleration a of a runner as a function of time t. The runner's velocity at t = 0 is 1.0 m/s. What is the runner's velocity at t = 3 s?",
          "o": [
            "6.0 m/s",
            "9.0 m/s",
            "10 m/s",
            "19 m/s"
          ],
          "a": 2,
          "w": "Δv = a–t altındaki üçgen: ½ · 3 · 6 = 9,0 m/s. v(3) = 1,0 + 9,0 = 10 m/s. 9,0, v₀'ı unutur; 19, ilk ivmeyi (6) 3 s boyunca sabit sayar (1 + 18); 6,0, t = 0'daki ivmenin değeridir.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "a (m/s²)",
            "xmax": 4,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  6
                ],
                "to": [
                  3,
                  0
                ],
                "color": 0,
                "label": "a"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 6,
                "label": "(0, 6)"
              },
              {
                "q": 3,
                "p": 0,
                "label": "(3, 0)"
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
              }
            ],
            "yticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              }
            ]
          }
        },
        {
          "t": "1.2–1.3",
          "q": "A cart with constant acceleration passes two marks 60 m apart in 4.0 s. Its speed at the second mark is 20 m/s. What is the cart's acceleration?",
          "o": [
            "1.25 m/s²",
            "2.5 m/s²",
            "3.75 m/s²",
            "5.0 m/s²"
          ],
          "a": 1,
          "w": "v_ort = 60/4,0 = 15 m/s = (v₁ + 20)/2 → v₁ = 10 m/s. a = (20 − 10)/4,0 = 2,5 m/s². 1,25, ortalama hızı ilk hız sanar ((20 − 15)/4); 5,0 arabanın durgun başladığını varsayar (20/4); 3,75, ortalama hızı zamana böler (15/4)."
        },
        {
          "t": "1.4–1.5",
          "q": "Rain falls vertically at 8.0 m/s relative to the ground. A car moves horizontally at 6.0 m/s. What is the speed of the raindrops relative to the car, and the angle their path makes with the vertical as seen from the car?",
          "o": [
            "10 m/s at 36.9° from the vertical",
            "10 m/s at 53.1° from the vertical",
            "2.0 m/s, straight down",
            "14 m/s at 36.9° from the vertical"
          ],
          "a": 0,
          "w": "v_yağmur,araba = v_yağmur,yer − v_araba,yer: dikey 8,0, yatay 6,0 (geriye doğru) → √(64 + 36) = 10 m/s, tan θ = 6/8 → düşeyle 36,9°. 53,1°, yatayla açıdır; 2,0 hızları çıkarır; 14 doğrudan toplar."
        },
        {
          "t": "1.2a",
          "q": "A particle moves along the x-axis with velocity v(t) = t³ − 3t, in meters per second. What is the particle's average acceleration from t = 0 to t = 2 s?",
          "o": [
            "1.0 m/s²",
            "2.0 m/s²",
            "3.0 m/s²",
            "9.0 m/s²"
          ],
          "a": 0,
          "w": "a_ort = [v(2) − v(0)]/(2 − 0) = (8 − 6 − 0)/2 = 1,0 m/s². 2,0, Δv'yi Δt'ye bölmeyi unutur; 9,0, t = 2'deki anlık ivmedir (a = 3t² − 3); 3,0, a(0) = −3 ile a(2) = 9'un ortalamasıdır, ama a doğrusal değişmediği için bu ortalama ivmeyi vermez."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocities of cars A and B, which are side by side at t = 0 and move in the same direction along a straight road. At what time are the cars side by side again?",
          "o": [
            "5.0 s",
            "7.1 s",
            "10 s",
            "They are never side by side again."
          ],
          "a": 2,
          "w": "Yan yana olmak için alanlar (yer değiştirmeler) eşit olmalı: x_A = ½ · 2 · t² = t², x_B = 10t → t² = 10t → t = 10 s. 5,0 s doğruların kesiştiği andır: hızlar eşit, aradaki mesafe en büyük. 7,1 s, A'nın B'nin 5 s'deki yerine (50 m) vardığı andır; o sırada B daha ileridedir. A hızlanmaya devam ettiği için mutlaka yetişir.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 13,
            "ymax": 26,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  12,
                  24
                ],
                "label": "A",
                "color": 0
              },
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  12,
                  10
                ],
                "label": "B",
                "color": 1
              }
            ],
            "xticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              },
              {
                "v": 10
              },
              {
                "v": 12
              }
            ],
            "yticks": [
              {
                "v": 5
              },
              {
                "v": 10
              },
              {
                "v": 15
              },
              {
                "v": 20
              }
            ]
          }
        },
        {
          "t": "1.1, 1.5",
          "q": "A particle moves from the point (1 m, 5 m) to the point (7 m, −3 m). Which of the following is a unit vector in the direction of the particle's displacement?",
          "o": [
            "6î − 8ĵ",
            "0.8î − 0.6ĵ",
            "−0.6î + 0.8ĵ",
            "0.6î − 0.8ĵ"
          ],
          "a": 3,
          "w": "Δr = (7 − 1)î + (−3 − 5)ĵ = 6î − 8ĵ, |Δr| = 10 m. Birim vektör = Δr/|Δr| = 0,6î − 0,8ĵ. 6î − 8ĵ birim değil (büyüklüğü 10); 0,8î − 0,6ĵ bileşenleri yer değiştirir; −0,6î + 0,8ĵ ters yöndür (başlangıç − son)."
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
          "q": "The stopping distance d of a car with initial speed v and constant deceleration of magnitude a can be written as d = k vᵐ aⁿ, where k is a dimensionless constant. What are m and n?",
          "o": [
            "m = 1, n = −1",
            "m = 2, n = 1",
            "m = 1, n = 1",
            "m = 2, n = −1"
          ],
          "a": 3,
          "w": "Boyut analizi: m = (m/s)ᵐ (m/s²)ⁿ → metre: m + n = 1, saniye: −m − 2n = 0 → m = 2, n = −1 (d = v²/2a, k = ½). \"m = 1, n = −1\" v/a verir, birimi saniye (uzunluk değil); n = 1 olan şıkların boyutu tutmaz ve ivme arttıkça yolun da arttığını söyler, fiziksel olarak ters."
        },
        {
          "t": "1.2b",
          "q": "A particle moves along the x-axis with acceleration a(t) = 2t − 8, in m/s², and velocity 12 m/s at t = 0. What total distance does the particle travel from t = 0 to t = 7 s?",
          "o": [
            "2.3 m",
            "10.7 m",
            "21.3 m",
            "23.7 m"
          ],
          "a": 3,
          "w": "v = t² − 8t + 12 = (t − 2)(t − 6), x = t³/3 − 4t² + 12t. x(0) = 0, x(2) = 10,67, x(6) = 0, x(7) = 2,33. Yol: 10,67 + 10,67 + 2,33 = 23,7 m. 2,3 yer değiştirmedir; 10,7 başlangıçtan en uzak nokta x(2); 21,3 son parçayı (6–7 s) atlar."
        },
        {
          "t": "1.3",
          "q": "The graph shows the acceleration a of an object as a function of time t. The object starts from rest at x = 0. What is the object's position at t = 6 s?",
          "o": [
            "18 m",
            "54 m",
            "72 m",
            "108 m"
          ],
          "a": 2,
          "w": "a = 6 − t → v = 6t − t²/2 (v₀ = 0) → x = 3t² − t³/6. x(6) = 108 − 36 = 72 m. 18, a–t alanını (Δv = 18 m/s) yer değiştirme sanar; 54, ortalama ivmeyi (3) sabit sayıp ½at² kullanır; 108, −t³/6 terimini unutur.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "a (m/s²)",
            "xmax": 7,
            "ymax": 7,
            "lines": [
              {
                "from": [
                  0,
                  6
                ],
                "to": [
                  6,
                  0
                ],
                "color": 0,
                "label": "a"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 6,
                "label": "(0, 6)"
              },
              {
                "q": 6,
                "p": 0,
                "label": "(6, 0)"
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
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              }
            ]
          }
        },
        {
          "t": "1.2–1.3",
          "q": "Ball A is released from rest 45 m above the ground. At the same instant, ball B is thrown straight up at 20 m/s from the ground directly below A. Air resistance is negligible. When do the balls pass each other?",
          "o": [
            "2.04 s",
            "2.25 s",
            "3.03 s",
            "4.08 s"
          ],
          "a": 1,
          "w": "Yerden yükseklik: y_A = 45 − 4,9t², y_B = 20t − 4,9t². Eşitle: 45 = 20t → t = 2,25 s (g ikisini de aynı hızlandırır, aradaki mesafe 20 m/s ile kapanır). O anda y = 45 − 4,9 · 2,25² ≈ 20,2 m, ikisi de havada. 2,04 s B'nin tepeye çıkışı; 3,03 s A'nın yere düşüşü; 4,08 s B'nin tüm uçuşudur."
        },
        {
          "t": "1.2–1.3",
          "q": "A hot-air balloon is rising at a constant 5.0 m/s. When it is 30 m above the ground, a sandbag is released from it. Air resistance is negligible. How long after release does the sandbag hit the ground?",
          "o": [
            "2.02 s",
            "2.47 s",
            "3.04 s",
            "6.00 s"
          ],
          "a": 2,
          "w": "Kum torbası balonun hızını alır: v₀ = +5,0 m/s (yukarı). −30 = 5t − 4,9t² → t = [5 + √(25 + 588)]/9,8 = (5 + 24,8)/9,8 = 3,04 s. 2,47 s, durgun bırakılmış sanar (√(60/9,8)); 2,02 s, ilk hızı aşağı alır; 6,00 s, 30/5'tir, yerçekimini yok sayar."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a cart as a function of time t. At t = 0 the cart is at x = 3 m. At what time is the cart at x = 15 m?",
          "o": [
            "3.0 s",
            "3.75 s",
            "4.0 s",
            "4.75 s"
          ],
          "a": 2,
          "w": "0–2 s alanı ½ · 2 · 4 = 4 m → x(2) = 7 m. Sonra 4 m/s: 7 + 4(t − 2) = 15 → t = 4,0 s. 4,75 s, x₀ = 3'ü unutur (4 + 4(t − 2) = 15); 3,75 s hem ½'yi hem x₀'ı unutur; 3,0 s, baştan beri 4 m/s sabit hız sayar (3 + 4t = 15).",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 9,
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
                  6,
                  4
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  4
                ],
                "to": [
                  8,
                  0
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 2,
                "p": 4,
                "label": "(2, 4)"
              },
              {
                "q": 6,
                "p": 4,
                "label": "(6, 4)"
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
              }
            ]
          }
        },
        {
          "t": "M.1",
          "q": "A particle's position is x(t) = t³ − 9t² + 15t, with x in meters and t in seconds. What total distance does the particle travel from t = 0 to t = 6 s?",
          "o": [
            "18 m",
            "25 m",
            "39 m",
            "46 m"
          ],
          "a": 3,
          "w": "v = 3t² − 18t + 15 = 3(t − 1)(t − 5): t = 1 ve 5'te dönüş. x(0) = 0, x(1) = 7, x(5) = −25, x(6) = −18. Yol: 7 + 32 + 7 = 46 m. 18 |yer değiştirme|; 25 en uzak nokta |x(5)|; 39 son parçayı (5–6 s) atlar."
        },
        {
          "t": "1.2b",
          "q": "A car starts from rest, and its velocity is v(t) = 20(1 − e^(−0.5t)), with v in meters per second and t in seconds. How far does the car travel during the first 4.0 s?",
          "o": [
            "34.6 m",
            "45.4 m",
            "69.2 m",
            "80.0 m"
          ],
          "a": 1,
          "w": "x = ∫₀⁴ 20(1 − e^(−0,5t)) dt = [20t + 40e^(−0,5t)]₀⁴ = 80 + 40e^(−2) − 40 = 45,4 m. 34,6, ivmeyi sabit sayar (½ · v(4) · 4, v(4) = 17,3 m/s); 69,2, v(4)'ü baştan sabit sayar; 80,0, aracın hemen 20 m/s'ye ulaştığını varsayar."
        },
        {
          "t": "M.2",
          "q": "A particle's position is x(t) = (2t + 1)^(3/2), with x in meters and t in seconds. What is the particle's acceleration at t = 4 s?",
          "o": [
            "0.25 m/s²",
            "0.50 m/s²",
            "1.0 m/s²",
            "9.0 m/s²"
          ],
          "a": 2,
          "w": "Zincir kuralı: v = (3/2)(2t + 1)^(1/2) · 2 = 3(2t + 1)^(1/2); a = 3 · ½(2t + 1)^(−1/2) · 2 = 3/√(2t + 1). a(4) = 3/3 = 1,0 m/s². 0,50, ikinci türevde iç türevi (2) unutur; 0,25 iki türevde de unutur; 9,0, v(4)'tür."
        },
        {
          "t": "1.4–1.5",
          "q": "A ball is thrown from the edge of a cliff 25 m high with a speed of 20 m/s at 30° above the horizontal. Air resistance is negligible. How far from the base of the cliff, measured horizontally, does the ball land?",
          "o": [
            "35.3 m",
            "39.1 m",
            "60.6 m",
            "70.0 m"
          ],
          "a": 2,
          "w": "v₀x = 20 cos 30° = 17,3 m/s, v₀y = 10 m/s. −25 = 10t − 4,9t² → t = [10 + √(100 + 490)]/9,8 = 3,50 s. x = 17,3 · 3,50 = 60,6 m. 35,3, düz zemin menzilidir (kayalığı yok sayar); 39,1, topu bırakılmış gibi düşürür (t = 2,26 s); 70,0, yatayda tüm 20 m/s'yi kullanır."
        },
        {
          "t": "1.4–1.5",
          "q": "An airplane flies at 200 m/s relative to the air. A wind blows from west to east at 50 m/s. The pilot wants to travel due north relative to the ground. In what direction must the plane head, and what is its speed relative to the ground?",
          "o": [
            "14.0° west of north; 206 m/s",
            "14.5° east of north; 194 m/s",
            "14.5° west of north; 206 m/s",
            "14.5° west of north; 194 m/s"
          ],
          "a": 3,
          "w": "v_yer = v_hava + v_rüzgâr. Doğuya itilmeyi yok etmek için batıya açıl: sin θ = 50/200 → θ = 14,5° kuzeyin batısı. Yer hızı √(200² − 50²) = 194 m/s. 206 m/s, hızları dik toplar (pilot kuzeye bakıyormuş gibi); 14,0°, sinüs yerine tanjant kullanır; \"doğusu\" rüzgârla aynı yöne açılır."
        },
        {
          "t": "1.1, 1.5",
          "q": "Vector A has magnitude 6 m and vector B has magnitude 8 m. Their directions are not specified. Which of the following CANNOT be the magnitude of A + B?",
          "o": [
            "1 m",
            "2 m",
            "10 m",
            "14 m"
          ],
          "a": 0,
          "w": "|A + B|, |8 − 6| = 2 m (zıt yönler) ile 8 + 6 = 14 m (aynı yön) arasında her değeri alabilir. 10 m dik durumdur (√(36 + 64)). 1 m bu aralığın dışında, imkânsız."
        },
        {
          "t": "M.3",
          "q": "A particle moves along the x-axis with velocity v(t) = 4t − t² − 3, in meters per second. What total distance does the particle travel from t = 0 to t = 4 s?",
          "o": [
            "0 m",
            "1.33 m",
            "2.67 m",
            "4.00 m"
          ],
          "a": 3,
          "w": "v = −(t − 1)(t − 3): t = 1 ve 3'te dönüş. x = 2t² − t³/3 − 3t: x(0) = 0, x(1) = −4/3, x(3) = 0, x(4) = −4/3. Yol: 4/3 + 4/3 + 4/3 = 4,00 m. 1,33 |yer değiştirme|; 0, 0–3 s yer değiştirmesidir; 2,67 son parçayı (3–4 s) atlar."
        },
        {
          "t": "1.2–1.3",
          "q": "A train moving at 30 m/s begins to slow down with constant acceleration. During the first 10 s of braking it travels 250 m. How much farther does it travel before it stops?",
          "o": [
            "100 m",
            "200 m",
            "250 m",
            "450 m"
          ],
          "a": 1,
          "w": "250 = 30 · 10 + ½a · 100 → a = −1,0 m/s². v(10) = 30 − 10 = 20 m/s. Kalan yol: 20²/(2 · 1,0) = 200 m. 450 frenin başından toplam yoldur (30²/2); 250, sonraki parçanın da aynı olduğunu sanar; 100, 10 s daha sürdüğünü varsayar (½ · 20 · 10), oysa durma 20 s sürer."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocity v of a cart as a function of time t. At what time is the cart's instantaneous velocity equal to its average velocity over the interval 0 ≤ t ≤ 8 s?",
          "o": [
            "4.0 s",
            "4.75 s",
            "5.0 s",
            "At no time in the interval"
          ],
          "a": 1,
          "w": "Δx = 4 · 4 + (4 + 12)/2 · 2 + 12 · 2 = 16 + 16 + 24 = 56 m → v_ort = 7,0 m/s. 4–6 s'de v = 4 + 4(t − 4) = 7 → t = 4,75 s. 4,0 s aralığın ortası; 5,0 s, v_ort'u (4 + 12)/2 = 8 sanır; grafik süreklidir ve 4'ten 12'ye çıkarken 7'den mutlaka geçer.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 9,
            "ymax": 14,
            "lines": [
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  4,
                  4
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  4
                ],
                "to": [
                  6,
                  12
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  12
                ],
                "to": [
                  8,
                  12
                ],
                "color": 0,
                "label": "v"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "(4, 4)"
              },
              {
                "q": 6,
                "p": 12,
                "label": "(6, 12)"
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
                "v": 4
              },
              {
                "v": 8
              },
              {
                "v": 12
              }
            ]
          }
        },
        {
          "t": "1.2–1.3",
          "q": "An object moving with constant acceleration along a straight line has velocity 10 m/s at x = 0 and 20 m/s at x = 30 m. What is its velocity at x = 60 m?",
          "o": [
            "26.5 m/s",
            "28.3 m/s",
            "30.0 m/s",
            "40.0 m/s"
          ],
          "a": 0,
          "w": "v² = v₀² + 2aΔx: 400 = 100 + 60a → a = 5,0 m/s². x = 60: v² = 100 + 2 · 5 · 60 = 700 → v = 26,5 m/s. 30,0, hızın x ile doğrusal arttığını sanır; 28,3, v²'yi x ile orantılı sanar (durgun başlıyormuş gibi, √800); 40,0, v'yi x ile orantılı sanır."
        },
        {
          "t": "1.2b",
          "q": "A particle moves along the x-axis with acceleration a(t) = 6t − 12, in m/s², and velocity 9 m/s at t = 0. What is the minimum value of the particle's velocity for t ≥ 0?",
          "o": [
            "−3 m/s",
            "0 m/s",
            "3 m/s",
            "9 m/s"
          ],
          "a": 0,
          "w": "v(t) = 3t² − 12t + 9. En küçük değer a = 0'da: t = 2 s → v(2) = 12 − 24 + 9 = −3 m/s. 0 en küçük *speed*'dir (t = 1 ve 3'te), hız değil; 3, işareti atar; 9, v₀'dır."
        },
        {
          "t": "1.2a",
          "q": "The table gives the position x of a cart, starting from rest, at one-second intervals. The cart's acceleration is constant. Based on the table, what is the cart's acceleration?",
          "o": [
            "1.5 m/s²",
            "3.0 m/s²",
            "4.5 m/s²",
            "6.0 m/s²"
          ],
          "a": 1,
          "w": "Ardışık aralıkların ortalama hızları: 1,5, 4,5, 7,5, 10,5 m/s → her saniye 3,0 m/s artıyor → a = 3,0 m/s² (kontrol: x = ½ · 3 · t² = 1,5t²). 1,5, x = 1,5t²'deki katsayıdır (a/2); 4,5, 1–2 s ortalama hızıdır; 6,0, x(2)'nin sayısıdır.",
          "fig": {
            "type": "table",
            "head": [
              "t (s)",
              "x (m)"
            ],
            "rows": [
              [
                0,
                0
              ],
              [
                1,
                1.5
              ],
              [
                2,
                6
              ],
              [
                3,
                13.5
              ],
              [
                4,
                24
              ]
            ]
          }
        },
        {
          "t": "1.3",
          "q": "The graph shows the position x of a robot as a function of time t. What is the robot's average velocity from t = 2 s to t = 8 s?",
          "o": [
            "0.33 m/s",
            "1.3 m/s",
            "1.7 m/s",
            "3.0 m/s"
          ],
          "a": 0,
          "w": "Grafikten x(2) = 6 m (0–4 s eğimi 3), x(8) = 8 m (6–10 s eğimi −2: 12 − 4). v_ort = (8 − 6)/6 = 0,33 m/s. 1,7 ortalama sürattir: yol 6 + 0 + 4 = 10 m, 10/6; 1,3, son konumu (8 m) zamana böler; 3,0, t = 2 s'deki anlık hızdır.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "x (m)",
            "xmax": 11,
            "ymax": 14,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  12
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  12
                ],
                "to": [
                  6,
                  12
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  12
                ],
                "to": [
                  10,
                  4
                ],
                "color": 0,
                "label": "x"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 12,
                "label": "(4, 12)"
              },
              {
                "q": 6,
                "p": 12,
                "label": "(6, 12)"
              },
              {
                "q": 10,
                "p": 4,
                "label": "(10, 4)"
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
              },
              {
                "v": 9
              },
              {
                "v": 10
              }
            ],
            "yticks": [
              {
                "v": 4
              },
              {
                "v": 8
              },
              {
                "v": 12
              }
            ]
          }
        },
        {
          "t": "M.4",
          "q": "A force F = (3î + 4ĵ) N acts on an object that undergoes a displacement d = (5î − 2ĵ) m. What is the component of F along the direction of d?",
          "o": [
            "1.3 N",
            "1.4 N",
            "5.0 N",
            "7.0 N"
          ],
          "a": 0,
          "w": "F'nin d yönündeki bileşeni = F·d/|d| = (15 − 8)/√29 = 7/5,39 = 1,3 N. 7,0, F·d'yi |d|'ye bölmeyi unutur (bu iş, J); 1,4, |d| yerine |F| = 5'e böler (bu d'nin F üzerindeki izdüşümüdür); 5,0, |F|'dir."
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
          "q": "An object's position is x(t) = A(1 − e^(−t/τ)) + Bt, where x is in meters, t is in seconds, and A, B, and τ are constants. Which of the following combinations of constants has units of acceleration?",
          "o": [
            "A/τ",
            "Aτ",
            "Bτ",
            "B/τ"
          ],
          "a": 3,
          "w": "Üstel ifade birimsiz olmalı → τ: s. O zaman A: m, Bt: m → B: m/s. B/τ = (m/s)/s = m/s², ivme. A/τ m/s (hız); Aτ m·s; Bτ m (uzunluk). İvme birimi için A/τ² gerekirdi."
        },
        {
          "t": "1.2b",
          "q": "A cart coasting on a track has velocity v(t) = 12e^(−t/4), with v in meters per second and t in seconds. It covers a total of 48 m as t becomes very large. At what time has it covered 36 m?",
          "o": [
            "1.2 s",
            "3.0 s",
            "4.0 s",
            "5.5 s"
          ],
          "a": 3,
          "w": "x(t) = ∫₀ᵗ 12e^(−t/4) dt = 48(1 − e^(−t/4)). 36 = 48(1 − e^(−t/4)) → e^(−t/4) = 0,25 → t = 4 ln 4 = 5,5 s. 3,0 s, hızı sabit 12 m/s sanar (36/12); 4,0 s, τ'dur (o anda %63 yol); 1,2 s, kalan yerine kat edilen oranı karıştırır (e^(−t/4) = 0,75)."
        },
        {
          "t": "1.2b",
          "q": "A particle has acceleration a(t) = 6 − 4t, in m/s², and velocity 2 m/s at t = 0. What is its displacement from t = 0 to the next time its velocity is again 2 m/s?",
          "o": [
            "6 m",
            "9 m",
            "15 m",
            "33 m"
          ],
          "a": 2,
          "w": "v(t) = 2 + 6t − 2t² = 2 → t(6 − 2t) = 0 → t = 3 s. x = 2t + 3t² − (2/3)t³ → 6 + 27 − 18 = 15 m. 9, v₀ terimini (2t) unutur; 6 hızı sabit 2 m/s sanar; 33, −(2/3)t³ terimini unutur."
        },
        {
          "t": "1.2–1.3",
          "q": "Ball A is dropped from rest from the top of a 60 m tower. Exactly 1.0 s later, ball B is thrown straight down from the same point with a speed of 15 m/s. Air resistance is negligible. How long after A is released does B catch up with A?",
          "o": [
            "0.94 s",
            "1.53 s",
            "1.94 s",
            "Ball B never catches ball A."
          ],
          "a": 2,
          "w": "Aşağı +: y_A = 4,9t², y_B = 15(t − 1) + 4,9(t − 1)². Eşitle: 0 = 15t − 15 − 9,8t + 4,9 → 5,2t = 10,1 → t = 1,94 s (o ana kadar düşüş 18,5 m < 60 m, ikisi de havada). 0,94 s, B'nin atılışından sonraki süredir; 1,53 s, A'nın hızının 15 m/s olduğu andır (eşit hız ≠ yan yana); \"never\" B'nin de g ile hızlandığını unutunca çıkar."
        },
        {
          "t": "1.3",
          "q": "A cart moves along a straight track. Its velocity is given in the table and changes linearly between the listed times. What total distance does the cart travel from t = 0 to t = 8 s?",
          "o": [
            "4 m",
            "8 m",
            "9 m",
            "16 m"
          ],
          "a": 3,
          "w": "Parçalar: 0–2 s (6 → 2): 8 m. 2–4 s (2 → −2): t = 3'te dönüş, +1 ve −1 m. 4–6 s (−2): −4 m. 6–8 s (−2 → 2): t = 7'de dönüş, −1 ve +1 m. Yol: 8 + 1 + 1 + 4 + 1 + 1 = 16 m. 4, yer değiştirmedir; 9, başlangıçtan en uzak konum (t = 3 s); 8 yalnız ilk parçadır.",
          "fig": {
            "type": "table",
            "head": [
              "t (s)",
              "0",
              "2",
              "4",
              "6",
              "8"
            ],
            "rows": [
              [
                "v (m/s)",
                "6",
                "2",
                "−2",
                "−2",
                "2"
              ]
            ]
          }
        },
        {
          "t": "1.3",
          "q": "The graph shows the acceleration a of an object as a function of time t. At t = 0 the object's velocity is −4 m/s. At what time is the object momentarily at rest?",
          "o": [
            "1.0 s",
            "1.4 s",
            "2.0 s",
            "2.8 s"
          ],
          "a": 3,
          "w": "Grafikte a = t (eğim 1). Δv = alan = ½ · t · t = t²/2. −4 + t²/2 = 0 → t = √8 = 2,8 s. 2,0 s, ½'yi unutur; 1,4 s, a'yı 4t okur (−4 + 2t² = 0); 1,0 s, ivmeyi sabit 4 m/s² sayar.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "a (m/s²)",
            "xmax": 5,
            "ymax": 5,
            "lines": [
              {
                "from": [
                  0,
                  0
                ],
                "to": [
                  4,
                  4
                ],
                "color": 0,
                "label": "a"
              }
            ],
            "points": [
              {
                "q": 4,
                "p": 4,
                "label": "(4, 4)"
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
          "t": "1.2a",
          "q": "A particle moves along the x-axis with velocity v(t) = 12t − 3t², in meters per second. What is the greatest speed of the particle during the interval 0 ≤ t ≤ 5 s, and when does it occur?",
          "o": [
            "12 m/s, at t = 2 s",
            "15 m/s, at t = 5 s",
            "18 m/s, at t = 5 s",
            "0 m/s, at t = 4 s"
          ],
          "a": 1,
          "w": "Sürat |v|. a = 12 − 6t = 0 → t = 2'de v = 12 m/s (en büyük *velocity*). Ama uç nokta: v(5) = 60 − 75 = −15 → sürat 15 m/s, daha büyük. 12, uç noktayı kontrol etmez; 18, |a(5)|'tir; 0 en küçük sürattir."
        },
        {
          "t": "1.2–1.3",
          "q": "A car starts from rest and accelerates at 2.0 m/s², then immediately brakes at 4.0 m/s² until it stops. The whole trip takes 12 s. What total distance does the car travel?",
          "o": [
            "64 m",
            "96 m",
            "144 m",
            "192 m"
          ],
          "a": 1,
          "w": "2t₁ = 4t₂ ve t₁ + t₂ = 12 → t₁ = 8 s, t₂ = 4 s, v_max = 16 m/s. Yol = v–t üçgeninin alanı = ½ · 16 · 12 = 96 m. 64 yalnız hızlanma kısmı; 144, 12 s boyunca 2 m/s² ile hızlanmış sayar; 192, v_max'ı 12 s sabit sayar."
        },
        {
          "t": "1.2–1.3",
          "q": "A ball is thrown straight up from ground level. It passes a window ledge 10 m above the ground 1.0 s after it is thrown, while still moving upward. Air resistance is negligible. What is the maximum height of the ball above the ground?",
          "o": [
            "10.0 m",
            "11.3 m",
            "14.9 m",
            "22.7 m"
          ],
          "a": 1,
          "w": "10 = v₀ · 1 − 4,9 · 1² → v₀ = 14,9 m/s. h_max = v₀²/(2g) = 222/19,6 = 11,3 m. 10,0, pencerenin tepe olduğunu sanır (oysa top hâlâ yükseliyor); 14,9 ilk hızın sayısıdır; 22,7, 2g yerine g'ye böler."
        },
        {
          "t": "M.3",
          "q": "A particle moves along the x-axis with velocity v(t) = 4 sin(πt/2), in meters per second. What is its displacement from t = 0 to t = 2 s?",
          "o": [
            "0 m",
            "2.55 m",
            "4.0 m",
            "5.09 m"
          ],
          "a": 3,
          "w": "∫ 4 sin(πt/2) dt = −(8/π) cos(πt/2). [0, 2]: −(8/π)(cos π − cos 0) = 16/π = 5,09 m. 2,55 = 8/π, (1 − cos π) = 2 çarpanını 1 alır; 4,0, eğriyi tepe 4 m/s olan üçgen sayar (½ · 2 · 4); 0, aralığı tam bir periyot sanır (periyot 4 s, bu yarısı; v hep ≥ 0)."
        },
        {
          "t": "M.2",
          "q": "A particle's position is x(t) = 3 ln(1 + t²), with x in meters and t ≥ 0 in seconds. When does the particle's velocity reach its maximum, and what is that maximum velocity?",
          "o": [
            "At t = 0; 3.0 m/s",
            "At t = 1 s; 3.0 m/s",
            "At t = 1 s; 2.1 m/s",
            "At t = √3 s; 2.6 m/s"
          ],
          "a": 1,
          "w": "v = 3 · 2t/(1 + t²) = 6t/(1 + t²). dv/dt = 6(1 − t²)/(1 + t²)² = 0 → t = 1 s, v(1) = 6/2 = 3,0 m/s. \"t = 0\" zincir kuralının 2t'sini unutur (v = 3/(1 + t²)); 2,1, x(1) = 3 ln 2 konumudur; t = √3, ivmenin türevini sıfırlar (ivmenin en negatif olduğu an)."
        },
        {
          "t": "1.4–1.5",
          "q": "Two projectiles are launched from level ground with the same speed, one at 30° and the other at 60° above the horizontal. Air resistance is negligible. Which of the following is true?",
          "o": [
            "They have the same range, and the 60° projectile stays in the air about 1.7 times as long.",
            "They have the same range and the same time of flight.",
            "The 60° projectile has twice the range of the 30° projectile.",
            "They reach the same maximum height, but the 60° projectile lands farther away."
          ],
          "a": 0,
          "w": "Menzil ∝ sin 2θ: sin 60° = sin 120° → eşit menzil. Uçuş süresi ∝ sin θ: sin 60°/sin 30° = √3 ≈ 1,7. Tepe yüksekliği ∝ sin²θ: 60° olan 3 kat yükselir. Eşit menzil eşit süre demek değildir: 60° olan yatayda yavaş, havada uzun kalır."
        },
        {
          "t": "1.4–1.5",
          "q": "The position vector of a particle is r(t) = (t³ − 3t) î + 2t² ĵ, with r in meters and t in seconds. What is the magnitude of the particle's acceleration at the instant t > 0 when the x-component of its velocity is zero?",
          "o": [
            "4.0 m/s²",
            "6.0 m/s²",
            "7.2 m/s²",
            "10 m/s²"
          ],
          "a": 2,
          "w": "v = (3t² − 3) î + 4t ĵ; vₓ = 0 → t = 1 s. a = 6t î + 4 ĵ → a(1) = 6î + 4ĵ → |a| = √52 = 7,2 m/s². 10 bileşenleri toplar; 6,0 yalnız aₓ; 4,0 yalnız a_y (aynı zamanda o anki sürat)."
        },
        {
          "t": "1.1, 1.5",
          "q": "A hiker walks 5.0 m north, then 12 m east, then 8.0 m in a direction 30° south of west. What is the magnitude of the hiker's resultant displacement?",
          "o": [
            "5.2 m",
            "8.2 m",
            "13 m",
            "25 m"
          ],
          "a": 0,
          "w": "Doğu +x, kuzey +y. Üçüncü: (−8 cos 30°, −8 sin 30°) = (−6,93, −4,0). Toplam: (12 − 6,93, 5 − 4) = (5,07, 1,0) → √(25,7 + 1) = 5,2 m. 8,2, sin ile cos'u yer değiştirir (−4,0, −6,93); 13 yalnız ilk iki adımdır; 25 büyüklükleri toplar (yol)."
        },
        {
          "t": "1.2–1.3",
          "q": "Two stones are released from rest from the same height, 0.50 s apart. Air resistance is negligible. While both are falling, how does the vertical distance between them change?",
          "o": [
            "It remains constant.",
            "It decreases.",
            "It increases at a constant rate.",
            "It increases at an increasing rate."
          ],
          "a": 2,
          "w": "İlk taş bırakıldıktan t sonra: Δy = 4,9t² − 4,9(t − 0,5)² = 4,9t − 1,23 → t ile doğrusal. Hız farkı sabit 9,8 · 0,5 = 4,9 m/s; ikisinin ivmesi aynı olduğundan bağıl ivme sıfır. Mesafe artar ama sabit hızla; \"artan hızla\" mutlak düşüşle bağıl hareketi karıştırır."
        },
        {
          "t": "1.3",
          "q": "The graph shows the velocities of cars A and B, which are side by side at t = 0 and move in the same direction. What is the greatest distance between the cars during the interval 0 ≤ t ≤ 8 s?",
          "o": [
            "0 m",
            "8 m",
            "16 m",
            "32 m"
          ],
          "a": 2,
          "w": "B daha hızlı olduğu için öne geçer; aradaki fark hızlar eşitlenene kadar (t = 4 s) büyür, sonra küçülür. Fark = iki doğru arasındaki alan, 0–4 s: ½ · 4 · 8 = 16 m (cebirle: x_B − x_A = 8t − t² → t = 4'te 16 m). 32, t² terimini unutur (8 · 4); 8, t = 0'daki hız farkıdır; 0, kesişme anında yan yana olduklarını sanır.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "v (m/s)",
            "xmax": 9,
            "ymax": 14,
            "lines": [
              {
                "from": [
                  0,
                  4
                ],
                "to": [
                  8,
                  12
                ],
                "label": "A",
                "color": 0
              },
              {
                "from": [
                  0,
                  12
                ],
                "to": [
                  8,
                  4
                ],
                "label": "B",
                "color": 1
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
                "v": 4
              },
              {
                "v": 8
              },
              {
                "v": 12
              }
            ]
          }
        },
        {
          "t": "1.2b",
          "q": "An object starts from rest with acceleration a(t) = kt, where k is a constant. It reaches a speed of 18 m/s at t = 3.0 s. How far does it travel during these 3.0 s?",
          "o": [
            "18 m",
            "27 m",
            "36 m",
            "54 m"
          ],
          "a": 0,
          "w": "v = kt²/2 → 18 = 4,5k → k = 4,0 m/s³. x = kt³/6 = 4 · 27/6 = 18 m. 27, ivmeyi sabit sayar (½ · 18 · 3); 36, ikinci integralde 1/2'yi atlar (kt³/3); 54, son hızı baştan sabit sayar."
        },
        {
          "t": "1.1–1.2",
          "q": "A particle's position is x(t) = 2t³, with x in meters and t in seconds. At what time during 0 < t < 3 s is the particle's instantaneous velocity equal to its average velocity over 0 ≤ t ≤ 3 s?",
          "o": [
            "1.50 s",
            "1.73 s",
            "2.12 s",
            "3.00 s"
          ],
          "a": 1,
          "w": "v_ort = x(3)/3 = 54/3 = 18 m/s. v = 6t² = 18 → t = √3 = 1,73 s. 1,50 s aralığın ortasıdır (yalnız sabit ivmede doğru); 2,12 s, v_ort'u v(0) ve v(3)'ün ortalaması (27) sanır; 3,00 s uç noktadır (v = 54)."
        },
        {
          "t": "1.2–1.3",
          "q": "A car traveling at 25 m/s is 60 m behind a truck moving at a constant 15 m/s in the same direction. The car's driver brakes with constant deceleration. What is the minimum magnitude of deceleration needed to avoid a collision?",
          "o": [
            "0.83 m/s²",
            "1.7 m/s²",
            "3.3 m/s²",
            "5.2 m/s²"
          ],
          "a": 0,
          "w": "Kamyona göre düşün: bağıl hız 10 m/s, bağıl mesafe 60 m; bağıl hız sıfırlanmadan aradaki mesafe kapanmamalı → a = 10²/(2 · 60) = 0,83 m/s². 1,7, 2'yi unutur; 5,2, kamyonun hareketini yok sayar (25²/120); 3,3, yere göre hızlarla (25² − 15²) ama bağıl mesafeyi (60 m) kullanır."
        },
        {
          "t": "1.3",
          "q": "The graph shows the position x of an object as a function of time t. What are the object's average velocity and average speed from t = 0 to t = 10 s?",
          "o": [
            "0.20 m/s and 1.8 m/s",
            "1.2 m/s and 1.8 m/s",
            "0.20 m/s and 0.20 m/s",
            "1.8 m/s and 0.20 m/s"
          ],
          "a": 0,
          "w": "Δx = x(10) − x(0) = 12 − 10 = 2 m → v_ort = 0,20 m/s. Yol: 0–4 s 8 m geri, 4–6 s durur, 6–10 s 10 m ileri → 18 m → ortalama sürat 1,8 m/s. 1,2, son konumu (12 m) yer değiştirme sanar; \"0,20 ve 0,20\" geri gidişi yoldan çıkarır; son şık ikisini ters yazar.",
          "fig": {
            "type": "graph",
            "xlabel": "t (s)",
            "ylabel": "x (m)",
            "xmax": 11,
            "ymax": 14,
            "lines": [
              {
                "from": [
                  0,
                  10
                ],
                "to": [
                  4,
                  2
                ],
                "color": 0
              },
              {
                "from": [
                  4,
                  2
                ],
                "to": [
                  6,
                  2
                ],
                "color": 0
              },
              {
                "from": [
                  6,
                  2
                ],
                "to": [
                  10,
                  12
                ],
                "color": 0,
                "label": "x"
              }
            ],
            "points": [
              {
                "q": 0,
                "p": 10,
                "label": "(0, 10)"
              },
              {
                "q": 4,
                "p": 2,
                "label": "(4, 2)"
              },
              {
                "q": 6,
                "p": 2,
                "label": "(6, 2)"
              },
              {
                "q": 10,
                "p": 12,
                "label": "(10, 12)"
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
              },
              {
                "v": 9
              },
              {
                "v": 10
              }
            ],
            "yticks": [
              {
                "v": 2
              },
              {
                "v": 4
              },
              {
                "v": 6
              },
              {
                "v": 8
              },
              {
                "v": 10
              },
              {
                "v": 12
              }
            ]
          }
        }
      ]
    }
  ]
};
