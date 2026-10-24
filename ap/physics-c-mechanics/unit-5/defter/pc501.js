/* Kitpath not defteri · pc501 · 5.1–5.2 Dönme Kinematiği. Kaynak: kaynak/ced-physc.md (Unit 5, Topic 5.1–5.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc501",
  amac: "Bu konu dönmeyi anlatmanın dilini kuruyor: açısal konum, açısal hız ve açısal ivme. Doğrusal hareketteki denklemlerin dönmedeki ikizlerini ve dönen cismin bir noktasının doğrusal hızını (v = rω) öğreneceksin.",
  bolumler: [
    {
      baslik: "Açısal konum, hız ve ivme",
      kisa: "Dönmeyi θ, ω ve α anlatır; açılar radyan olmalıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "💿",
              terim: "Rigid system",
              tr: "sert sistem",
              tanim: "Şekli değişmeyen ama noktaları farklı yönlerde hareket eden sistem. Dönme önemliyse onu tek bir nesne gibi alamazsın.",
              ornek: "Dönen bir CD'nin her noktası kendi çemberini çizer."
            },
            {
              ikon: "📐",
              terim: "Angular displacement",
              tr: "açısal yer değiştirme",
              tanim: "Δθ = θ − θ₀, radyan cinsinden. Saat yönünün tersi ya da saat yönünden birini pozitif seçersin ve seçimi değiştirmezsin.",
              ornek: "Bir tam tur Δθ = 2π rad ≈ 6,28 rad."
            },
            {
              ikon: "⚡",
              terim: "Angular velocity",
              tr: "açısal hız",
              tanim: "ω = dθ/dt: açının zamanla değişme hızı, birimi rad/s.",
              ornek: "Dakikada 60 tur: ω = 2π rad/s."
            },
            {
              ikon: "🚀",
              terim: "Angular acceleration",
              tr: "açısal ivme",
              tanim: "α = dω/dt, birimi rad/s². ω ile α aynı işaretliyse dönme hızlanır, zıt işaretliyse yavaşlar.",
              ornek: "Fiş çekilen vantilatörde α, ω'ya zıt işaretlidir."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "ω = dθ/dt", alt: "açısal hız · rad/s" },
            "·",
            { t: "α = dω/dt", alt: "açısal ivme · rad/s²" }
          ],
          aciklama: "✍️ Sınavda böyle yaz: *I take counterclockwise as positive, so ω is negative when the wheel turns clockwise.*"
        }
      ]
    },
    {
      baslik: "Sabit α: doğrusal denklemlerin ikizi",
      kisa: "Sabit α için üç denklem, doğrusal üç denklemin harf değiştirmiş halidir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Harf eşleşmesi: x → θ, v → ω, a → α",
          head: [
            "Doğrusal (sabit a)",
            "Dönme (sabit α)"
          ],
          rows: [
            [
              "v = v₀ + at",
              "ω = ω₀ + αt"
            ],
            [
              "x = x₀ + v₀t + ½at²",
              "θ = θ₀ + ω₀t + ½αt²"
            ],
            [
              "v² = v₀² + 2a(x − x₀)",
              "ω² = ω₀² + 2α(θ − θ₀)"
            ]
          ],
          not: "Yalnızca α sabitken geçerlidir. ✍️ Sınavda böyle yaz: *Because α is constant, I may use ω = ω₀ + αt.*"
        },
        {
          tip: "grafik",
          baslik: "ω–t grafiği: eğim α, alan Δθ",
          xlabel: "t (s)",
          ylabel: "ω (rad/s)",
          xmax: 8,
          ymax: 16,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" },
            { v: 7, label: "7" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" },
            { v: 12, label: "12" },
            { v: 14, label: "14" }
          ],
          ogeler: [
            { id: "w", tip: "cizgi", from: [0, 4], to: [5, 14], renk: 0, etiket: "ω(t)" },
            { id: "dt", tip: "cizgi", from: [0, 4], to: [5, 4], renk: 3, kesik: true, gizli: true },
            { id: "dw", tip: "cizgi", from: [5, 4], to: [5, 14], renk: 1, gizli: true },
            { id: "tdt", tip: "yazi", x: 2.5, y: 3, metin: "Δt = 5 s", gizli: true },
            {
              id: "tdw",
              tip: "yazi",
              x: 5.2,
              y: 9,
              metin: "Δω = 10 rad/s",
              hiza: "start",
              gizli: true
            },
            {
              id: "al",
              tip: "alan",
              noktalar: [[0, 0], [0, 4], [5, 14], [5, 0]],
              renk: 2,
              gizli: true
            },
            { id: "tal", tip: "yazi", x: 2.5, y: 1.4, metin: "alan = Δθ = 45 rad", gizli: true }
          ],
          durumlar: [
            { metin: "Sabit α ile ω düz bir çizgidir: ω₀ = 4 rad/s'den başlıyor, ω = 4 + αt." },
            {
              metin: "==Eğim== açısal ivmedir: 5 s'de ω 4'ten 14'e çıkıyor, α = Δω/Δt = 10/5 = 2 rad/s².",
              goster: [
                "dt",
                "dw",
                "tdt",
                "tdw"
              ]
            },
            {
              metin: "Çizginin altındaki ==alan== Δθ'dır: (4 + 14)/2 × 5 = 45 rad. θ = ω₀t + ½αt² = 20 + 25 ile aynı.",
              goster: [
                "al",
                "tal"
              ]
            },
            {
              metin: "Kalkülüsle: ω = dθ/dt olduğundan Δθ = ∫ω dt. α sabit değilse de alan yine Δθ'dır."
            }
          ]
        }
      ]
    },
    {
      baslik: "Doğrusal ile bağlantı: s = rθ, v = rω, a_T = rα",
      kisa: "Aynı ω'da uzaktaki nokta daha hızlıdır; ivmenin iki bileşeni vardır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "s = rθ", alt: "yay uzunluğu" },
            "·",
            { t: "v = rω", alt: "çizgisel hız" },
            "·",
            { t: "a_T = rα", alt: "teğetsel ivme" }
          ],
          aciklama: "θ radyan olmalı. Dönen cismin bütün noktaları aynı ω ve α'ya sahiptir; v ve a_T yarıçapla büyür. Merkezcil ivme ayrıca vardır: a_c = rω². ✍️ Sınavda böyle yaz: *All points of the rigid wheel share the same ω, but v = rω is larger at larger r.*"
        },
        {
          tip: "grafik",
          baslik: "Atlıkarınca: aynı ω = 2 rad/s, farklı v",
          xlabel: "r (m)",
          ylabel: "v (m/s)",
          xmax: 4,
          ymax: 8,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" }
          ],
          ogeler: [
            { id: "l", tip: "cizgi", from: [0, 0], to: [4, 8], renk: 0, etiket: "v = ωr" },
            {
              id: "p1",
              tip: "nokta",
              x: 1,
              y: 2,
              renk: 1,
              etiket: "2 m/s",
              kilavuz: true,
              gizli: true
            },
            {
              id: "p2",
              tip: "nokta",
              x: 2,
              y: 4,
              renk: 2,
              etiket: "4 m/s",
              kilavuz: true,
              gizli: true
            },
            {
              id: "p3",
              tip: "nokta",
              x: 3,
              y: 6,
              renk: 3,
              etiket: "6 m/s",
              kilavuz: true,
              gizli: true
            }
          ],
          durumlar: [
            { metin: "v = rω: ω sabit olduğundan v, r ile orantılıdır; çizgi orijinden geçer." },
            {
              metin: "Ortadan 1 m uzakta: v = 2 × 1 = 2 m/s.",
              goster: [
                "p1"
              ]
            },
            {
              metin: "2 m uzakta: v = 4 m/s.",
              goster: [
                "p2"
              ]
            },
            {
              metin: "3 m uzakta: v = 6 m/s. Hepsi aynı ω ile dönüyor; ==eğim ω'dır==.",
              goster: [
                "p3"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Aynı ω aynı hız demek değil",
          metin: "Dönen bir cismin her noktası aynı ω ve α'ya sahiptir ama v = rω yarıçapa bağlıdır. a_T = rα toplam ivme de değildir; merkezcil rω² bileşeni ayrıca vardır.",
          yanlis: "Atlıkarıncada herkes aynı hızla gider; a = rα toplam ivmedir.",
          dogru: "ω aynı, v = rω farklı; toplam ivmede a_T ile a_c = rω² birlikte düşünülür."
        },
        {
          tip: "ornek",
          baslik: "ω₀ = 20 rad/s, α = −4 rad/s² (sabit), pervane ucu r = 0,30 m",
          durum: "Fiş çekilince pervane yavaşlayıp duruyor. Durma süresini, dönme açısını, kaç tur attığını ve t = 0'da uç noktasının v, a_T ve a_c değerlerini bul.",
          adimlar: [
            "Süre: ω = ω₀ + αt = 0 → t = 20/4 = 5 s.",
            "Açı: ω² = ω₀² + 2αΔθ → 0 = 400 − 8Δθ → Δθ = 50 rad.",
            "Tur: 50/(2π) ≈ 7,96, yani yaklaşık 8 tur (1 tur = 2π rad).",
            "Uç noktası, t = 0: v = rω = 0,30 × 20 = 6 m/s.",
            "Teğetsel ivme: a_T = rα = 0,30 × (−4) = −1,2 m/s² (hıza zıt).",
            "Merkezcil ivme: a_c = rω² = 0,30 × 400 = 120 m/s², merkeze doğru.",
            "✍️ Sınavda böyle yaz: *The tip has both a tangential and a centripetal acceleration.*"
          ],
          sonuc: "t = 5 s, Δθ = 50 rad (≈ 8 tur); v = 6 m/s, a_T = −1,2 m/s², a_c = 120 m/s²"
        }
      ]
    },
    {
      baslik: "Kalkülüs: ω(t) verilince",
      kisa: "α eğimdir, Δθ alandır: türev ve integral aynı grafiği okur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "ω(t) = 6t − t² (rad/s), 0 ≤ t ≤ 6 s",
          durum: "Açısal ivmeyi, ω'nın en büyük olduğu anı ve 0–6 s arasındaki dönme açısını bul.",
          adimlar: [
            "α = dω/dt = 6 − 2t.",
            "ω en büyükken α = 0: t = 3 s ve ω(3) = 18 − 9 = 9 rad/s.",
            "Açı: Δθ = ∫₀⁶ ω dt = [3t² − t³/3]₀⁶. Önce integrali al, sonra sınırları koy.",
            "Δθ = (108 − 72) − 0 = 36 rad.",
            "ω(6) = 36 − 36 = 0: ω hiç negatif olmadı, yön değişmedi.",
            "✍️ Sınavda böyle yaz: *I integrate ω from 0 to 6 s, so Δθ = ∫ω dt = 36 rad.*"
          ],
          sonuc: "α = 6 − 2t; ω_max = 9 rad/s (t = 3 s); Δθ = 36 rad"
        },
        {
          tip: "grafik",
          baslik: "ω = 6t − t²: eğim α, alan Δθ",
          xlabel: "t (s)",
          ylabel: "ω (rad/s)",
          xmax: 7,
          ymax: 10,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 1.438], [0.5, 2.75], [0.75, 3.938], [1, 5], [1.25, 5.938],
                [1.5, 6.75], [1.75, 7.438], [2, 8], [2.25, 8.438], [2.5, 8.75], [2.75, 8.938],
                [3, 9], [3.25, 8.938], [3.5, 8.75], [3.75, 8.438], [4, 8], [4.25, 7.438],
                [4.5, 6.75], [4.75, 5.938], [5, 5], [5.25, 3.938], [5.5, 2.75], [5.75, 1.438],
                [6, 0]
              ],
              renk: 0
            },
            { id: "t0", tip: "cizgi", from: [0, 0], to: [1.5, 9], renk: 1, gizli: true },
            { id: "l0", tip: "yazi", x: 1.9, y: 7.2, metin: "α(0) = 6", hiza: "start", gizli: true },
            {
              id: "pk",
              tip: "nokta",
              x: 3,
              y: 9,
              renk: 3,
              etiket: "α = 0",
              kilavuz: true,
              gizli: true
            },
            { id: "tp", tip: "cizgi", from: [2, 9], to: [4, 9], renk: 3, kesik: true, gizli: true },
            {
              id: "al",
              tip: "alan",
              noktalar: [
                [0, 0], [0.25, 1.438], [0.5, 2.75], [0.75, 3.938], [1, 5], [1.25, 5.938],
                [1.5, 6.75], [1.75, 7.438], [2, 8], [2.25, 8.438], [2.5, 8.75], [2.75, 8.938],
                [3, 9], [3.25, 8.938], [3.5, 8.75], [3.75, 8.438], [4, 8], [4.25, 7.438],
                [4.5, 6.75], [4.75, 5.938], [5, 5], [5.25, 3.938], [5.5, 2.75], [5.75, 1.438],
                [6, 0]
              ],
              renk: 2,
              gizli: true
            },
            { id: "tal", tip: "yazi", x: 3, y: 4, metin: "alan = 36 rad", gizli: true }
          ],
          durumlar: [
            {
              metin: "ω(t) bir parabol: sıfırdan başlıyor, yükseliyor, t = 6 s'de yine sıfıra iniyor."
            },
            {
              metin: "Başlangıçta teğetin eğimi 6: α(0) = 6 − 0 = 6 rad/s².",
              goster: [
                "t0",
                "l0"
              ]
            },
            {
              metin: "Tepede teğet yatay: α = 0, ω en büyük (9 rad/s, t = 3 s).",
              goster: [
                "pk",
                "tp"
              ]
            },
            {
              metin: "Eğrinin altındaki alan 0–6 s arasındaki ==Δθ = 36 rad==.",
              goster: [
                "al",
                "tal"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "*Angular displacement* Δθ radyan cinsindendir; 1 tur = 2π rad. Derece kullanma.",
            "ω = dθ/dt ve α = dω/dt; ω–t grafiğinin eğimi α, altındaki alan Δθ'dır.",
            "Sabit α için üç denklem doğrusal denklemlerin ikizidir: ω = ω₀ + αt, θ = θ₀ + ω₀t + ½αt², ω² = ω₀² + 2α(θ − θ₀).",
            "*Rigid system*'in bütün noktaları aynı ω ve α'ya sahiptir.",
            "s = rθ, v = rω, a_T = rα; r büyüdükçe v ve a_T büyür.",
            "Merkezcil ivme a_c = rω² ayrıdır; a_T toplam ivme değildir.",
            "Yönler yalnızca saat yönü (cw) ya da tersi (ccw) ile söylenir; pozitif yönü seç ve işaretleri ona göre yaz.",
            "α sabit değilse integral al: Δθ = ∫ω dt; sınırları yaz, önce integrali al, sonra sınırları koy."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The graph shows the angular velocity ω of a wheel as a function of time t. What is the wheel's angular displacement from t = 0 to t = 4 s?",
      fig: {
        type: "graph",
        xlabel: "t (s)",
        ylabel: "ω (rad/s)",
        xmax: 5,
        ymax: 12,
        lines: [
          { from: [0, 2], to: [4, 10], label: "ω" }
        ],
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" }
        ],
        yticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" },
          { v: 8, label: "8" },
          { v: 10, label: "10" }
        ]
      },
      opts: [
        "8 rad",
        "12 rad",
        "24 rad",
        "40 rad"
      ],
      a: 2,
      why: "Δθ, ω–t grafiğinin altındaki alandır: (2 + 10)/2 × 4 = 24 rad. En çekici yanlış şık 40 rad: son ω değerini (10) tüm süreyle çarpmak, ω'nın arttığını yok sayar."
    },
    {
      q: "A rigid disk rotates about its center with constant angular acceleration. Point P is a distance r from the center and point Q is a distance 2r from the center. Which statement is correct at any instant?",
      opts: [
        "Q has twice the angular speed of P and twice the tangential speed.",
        "Q has the same angular speed as P and twice the tangential speed.",
        "Q has the same angular speed as P and the same tangential speed.",
        "Q has twice the angular speed of P and the same tangential speed."
      ],
      a: 1,
      why: "Rigid sistemin bütün noktaları aynı ω ve α'ya sahiptir; v = rω olduğundan yarıçapı iki kat olan Q'nun çizgisel hızı iki kattır. A en çekici yanlış şık: ω'nın da r ile büyüdüğünü sanmak."
    },
    {
      q: "A wheel starts from rest and speeds up with a constant angular acceleration of 3 rad/s². After 4 s, what is the speed of a point on its rim, which has radius 0.5 m?",
      opts: [
        "1.5 m/s",
        "3 m/s",
        "12 m/s",
        "6 m/s"
      ],
      a: 3,
      why: "ω = αt = 3 × 4 = 12 rad/s, sonra v = rω = 0,5 × 12 = 6 m/s. En çekici yanlış şık 12 m/s: bu değer ω'dır (rad/s); v için yarıçapla çarpmak gerekir."
    },
    {
      q: "The angular position of a rotating object is θ(t) = 2t³ − 3t, where θ is in radians and t is in seconds. What is the object's angular acceleration at t = 2 s?",
      opts: [
        "24 rad/s²",
        "21 rad/s²",
        "12 rad/s²",
        "8 rad/s²"
      ],
      a: 0,
      why: "ω = dθ/dt = 6t² − 3 ve α = dω/dt = 12t; t = 2 için α = 24 rad/s². En çekici yanlış şık 21: bu t = 2'deki ω'dır (24 − 3); yalnızca bir kez türev almak α'yı vermez."
    },
    {
      q: "A wheel turns counterclockwise, which has been chosen as the positive direction, and its angular speed is decreasing. Which of the following is correct?",
      opts: [
        "ω > 0 and α > 0",
        "ω < 0 and α < 0",
        "ω > 0 and α < 0",
        "ω < 0 and α > 0"
      ],
      a: 2,
      why: "Pozitif yönde dönüyor (ω > 0) ve yavaşlıyor; yavaşlama ω'ya zıt işaretli α demektir (α < 0). A en çekici yanlış şık: yavaşlayan cisimde α'nın pozitif olamayacağını düşünmemek."
    }
  ]
};
