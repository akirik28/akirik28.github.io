/* Kitpath not defteri · pc401 · 4.1–4.2 Momentum ve İtme
   Kaynak: kaynak/ced-physc.md (Topic 4.1, 4.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc401",
  amac: "Bu konu çarpışmaları ve itmeleri anlatmanın aracı olan momentumu tanıtıyor: p = mv ve itme J. İtmenin F–t grafiğinin alanı olduğunu, momentum değişimine eşit olduğunu ve F = dp/dt ilişkisini öğreneceksin.",
  bolumler: [
    {
      baslik: "Momentum: p = mv",
      kisa: "Momentum kütle çarpı hızdır, bir vektördür; K ise skalerdir ve ayrı bir niceliktir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "p", alt: "momentum (kg·m/s)" },
            "=",
            { t: "mv", alt: "yönü hızla aynı" }
          ],
          aciklama: "Vektördür: tek boyutta işaret yönü söyler. Sınavda böyle yaz: *Momentum is a vector in the direction of the velocity.*"
        },
        {
          tip: "tablo",
          baslik: "Aynı momentum, farklı kinetik enerji",
          head: ["Cisim", "m (kg)", "v (m/s)", "p (kg·m/s)", "K (J)"],
          rows: [["Hafif", "1", "4", "4", "8"], ["Ağır", "4", "1", "4", "2"]],
          vurgu: 0,
          not: "K = p²/2m: aynı p'de hafif cismin K'si büyüktür. Momentum vektör, K skalerdir; birbirlerinin yerine kullanılmaz."
        }
      ]
    },
    {
      baslik: "Çarpışma ve patlama modelleri",
      kisa: "İç kuvvetler dış kuvvetten çok büyüktür; yalnız hemen önce ve sonrası incelenir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "💥",
              terim: "Collision",
              tr: "çarpışma",
              tanim: "Nesneler arasındaki kısa süreli kuvvetlerin net dış kuvvetten çok büyük olduğu model. Yalnız hemen önceki ve sonraki duruma bakarsın.",
              ornek: "İki bilardo topunun çarpışması."
            },
            {
              ikon: "🎆",
              terim: "Explosion",
              tr: "patlama",
              tanim: "İç kuvvetlerin sistemin parçalarını birbirinden ayırdığı model.",
              ornek: "Havai fişek ya da yayla itilen iki araba."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🎱",
            baslik: "*Collision*",
            maddeler: ["Nesneler yaklaşıp etkileşir", "Kısa süreli büyük kuvvetler"]
          },
          sag: {
            ikon: "🎇",
            baslik: "*Explosion*",
            maddeler: ["Önce bir arada, sonra ayrılır", "İç kuvvetler parçaları iter"]
          },
          oyun: [
            {
              metin: "Durgun bir roket aniden parçalara ayrılıyor.",
              cevap: "sag",
              neden: "Önce bir aradaydılar, iç kuvvetler ayırdı."
            },
            {
              metin: "Tampon tampona gelen iki çarpışan araba.",
              cevap: "sol",
              neden: "Birbirine yaklaşıp kısa süreli kuvvet uyguluyorlar."
            },
            {
              metin: "Aralarındaki yay ipin kesilmesiyle iki arabayı birbirinden uzaklaştırıyor.",
              cevap: "sag",
              neden: "İç yay kuvveti sistemi ayırıyor."
            },
            {
              metin: "Beyzbol sopası topa vuruyor.",
              cevap: "sol",
              neden: "Sopa ile top kısa süre etkileşiyor: çarpışma."
            }
          ]
        },
        {
          tip: "not",
          metin: "Sınavda böyle yaz: *Treat the interaction as a collision: the internal forces are much larger than the net external force, so only the situations just before and just after are analyzed.*"
        }
      ]
    },
    {
      baslik: "İtme (impulse) ve F–t grafiği",
      kisa: "J = ∫F dt = Δp: F–t grafiğinin altındaki alan momentum değişimidir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "J", alt: "itme (N·s)" },
            "=",
            { t: "∫F_net dt", alt: "F–t alanı" },
            "=",
            { t: "Δp = mv_f − mv_i", alt: "momentum değişimi" }
          ],
          aciklama: "İtme vektördür ve net kuvvetle aynı yönlüdür; birimi N·s = kg·m/s. Sınavda böyle yaz: *By the impulse–momentum theorem, the impulse equals the change in momentum.*"
        },
        {
          tip: "grafik",
          baslik: "Duvara çarpan top: duvarın uyguladığı kuvvet",
          xlabel: "t (ms)",
          ylabel: "F (N)",
          xmax: 24,
          ymax: 600,
          xticks: [
            { v: 5, label: "5" },
            { v: 10, label: "10" },
            { v: 15, label: "15" },
            { v: 20, label: "20" }
          ],
          yticks: [
            { v: 100, label: "100" },
            { v: 200, label: "200" },
            { v: 300, label: "300" },
            { v: 400, label: "400" },
            { v: 500, label: "500" }
          ],
          ogeler: [
            {
              id: "a",
              tip: "alan",
              noktalar: [[0, 0], [10, 500], [20, 0]],
              renk: 1,
              gizli: true
            },
            { id: "c1", tip: "cizgi", from: [0, 0], to: [10, 500], renk: 0 },
            { id: "c2", tip: "cizgi", from: [10, 500], to: [20, 0], renk: 0 },
            { id: "tj", tip: "yazi", x: 10, y: 150, metin: "J = alan = 5 N·s", gizli: true },
            {
              id: "av",
              tip: "cizgi",
              from: [0, 250],
              to: [20, 250],
              renk: 3,
              kesik: true,
              etiket: "F_ort",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Top duvara çarpıyor: temas 20 ms sürüyor, kuvvet 500 N'a çıkıp sıfıra iniyor." },
            { metin: "Eğrinin altındaki alan = itme: J = ½ × 0,020 s × 500 N = 5 N·s.", goster: ["a", "tj"] },
            {
              metin: "Aynı alanı veren sabit kuvvet ortalama kuvvettir: F_ort = J/Δt = 5/0,02 = 250 N, tepenin yarısı. Sınavda böyle yaz: *The area under the F versus t graph is the impulse.*",
              goster: ["av"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Duvardan geri sekme: işaretlere dikkat",
          durum: "m = 0,5 kg'lık top duvara +x yönünde 6 m/s ile çarpıyor ve 4 m/s ile geri dönüyor; temas 0,02 s sürüyor. Δp, J ve ortalama kuvveti bul.",
          adimlar: [
            "Duvara doğru +x olsun: v_i = +6 m/s, v_f = −4 m/s.",
            "Δp = m(v_f − v_i) = 0,5 × (−4 − 6) = −5 kg·m/s.", "J = Δp = −5 N·s (duvar topu −x yönünde itti).",
            "F_ort = J/Δt = −5/0,02 = −250 N."
          ],
          sonuc: "Δp = J = −5 N·s; F_ort = −250 N (−x yönünde)"
        },
        {
          tip: "tuzak",
          baslik: "Geri sekme, durdurmadan büyük itme verir",
          metin: "Aynı hızla gelen top durursa |Δp| = mv_i olur; geri seker de |Δp| = m(v_i + |v_f|) olur.",
          yanlis: "Top durduğunda da geri sektiğinde de Δp aynıdır.",
          dogru: "Durunca 0,5 × 6 = 3 kg·m/s; 4 m/s ile geri sekince 0,5 × (6 + 4) = 5 kg·m/s."
        }
      ]
    },
    {
      baslik: "p–t grafiği ve değişken kuvvet",
      kisa: "Net kuvvet p–t grafiğinin eğimidir; F zamanla değişiyorsa itmeyi integralle bul.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Bir cismin momentumu zamanla nasıl değişiyor?",
          xlabel: "t (s)",
          ylabel: "p (kg·m/s)",
          xmax: 8,
          ymax: 10,
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
            { v: 8, label: "8" }
          ],
          ogeler: [
            { id: "s1", tip: "cizgi", from: [0, 0], to: [2, 8], renk: 0, gizli: true },
            { id: "t1", tip: "yazi", x: 1.4, y: 2.4, metin: "F = +4 N", hiza: "start", gizli: true },
            { id: "s2", tip: "cizgi", from: [2, 8], to: [5, 8], renk: 1, gizli: true },
            { id: "t2", tip: "yazi", x: 3.5, y: 8.9, metin: "F = 0", gizli: true },
            { id: "s3", tip: "cizgi", from: [5, 8], to: [7, 2], renk: 2, gizli: true },
            { id: "t3", tip: "yazi", x: 6.3, y: 6.4, metin: "F = −3 N", hiza: "start", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 1.2, metin: "Δp = 8 + 0 − 6 = +2 kg·m/s", gizli: true }
          ],
          durumlar: [
            { metin: "0–2 s: p 0'dan 8'e çıkıyor, eğim 8/2 = 4 ⇒ F = dp/dt = +4 N.", goster: ["s1", "t1"] },
            { metin: "2–5 s: p sabit, eğim 0 ⇒ net kuvvet sıfır.", goster: ["s2", "t2"] },
            {
              metin: "5–7 s: p 8'den 2'ye iniyor, eğim (2 − 8)/2 = −3 ⇒ net kuvvet −3 N.",
              goster: ["s3", "t3"]
            },
            {
              metin: "Toplam Δp, parçaların itmelerinin toplamıdır: 4 × 2 + 0 + (−3) × 2 = +2 N·s. Sınavda böyle yaz: *The net force is the slope of the p versus t graph, F = dp/dt.*",
              goster: ["t4"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kalkülüsle itme: F(t) = 60 sin(10t) N, 0 ≤ t ≤ π/10 s",
          durum: "m = 3 kg'lık cisim durgunken bu kuvvet uygulanıyor. İtmeyi ve darbenin sonundaki hızı bul.",
          adimlar: [
            "Sınırları yaz: J = ∫₀^(π/10) 60 sin(10t) dt.",
            "Önce integrali al: ∫ 60 sin(10t) dt = −6 cos(10t).",
            "Sonra sınırları koy: −6 cos π − (−6 cos 0) = 6 + 6 = 12 N·s.",
            "Durgundan başladığı için J = Δp = mv ⇒ v = 12/3 = 4 m/s."
          ],
          sonuc: "J = 12 N·s, v = 4 m/s"
        },
        {
          tip: "tuzak",
          baslik: "Değişken kütlede F = ma değil",
          metin: "Kütlesi değişen sistemlerde momentum üzerinden yaz: F = dp/dt = v dm/dt (v sabitken).",
          yanlis: "Konveyör bandına kum düşüyor, bant sabit hızla gidiyor: a = 0 olduğundan F = 0.",
          dogru: "v = 2 m/s ve dm/dt = 5 kg/s ise F = v dm/dt = 10 N."
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
            "p = mv bir vektördür, yönü hızla aynıdır; birimi kg·m/s. Aynı p farklı K verebilir (K = p²/2m).",
            "Çarpışma ve patlamada iç kuvvetler çok büyüktür; yalnız hemen önce ve sonra incelenir.",
            "F_net = dp/dt; itme J = ∫F_net dt = Δp, birimi N·s.",
            "F–t grafiğinin altındaki alan itmedir; p–t grafiğinin eğimi net kuvvettir.",
            "Δp = m(v_f − v_i): işaretlere dikkat. Geri seken top durandan büyük itme alır (5 > 3 kg·m/s).",
            "Ortalama kuvvet F_ort = J/Δt (örnekte tepe 500 N, ortalama 250 N).",
            "Değişken F için integral kur: sınırları yaz, önce integrali al, sonra sınırları koy (12 N·s).",
            "Kütle değişiyorsa F = dp/dt = v dm/dt; F = ma kullanma."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Object X has mass 4 kg and speed 2 m/s. Object Y has mass 1 kg and speed 6 m/s. Which comparison is correct?",
      opts: [
        "X has the greater momentum and the greater kinetic energy.",
        "X has the greater momentum, and Y has the greater kinetic energy.",
        "Y has the greater momentum and the greater kinetic energy.",
        "Y has the greater momentum, and X has the greater kinetic energy."
      ],
      a: 1,
      why: "p_X = 4 × 2 = 8, p_Y = 1 × 6 = 6 kg·m/s; K_X = ½ × 4 × 2² = 8 J, K_Y = ½ × 1 × 6² = 18 J. Momentum ile kinetik enerji farklı niceliklerdir ve sıralamaları aynı olmak zorunda değildir."
    },
    {
      q: "A 5 kg object is initially at rest. The net force on it varies with time as shown. What is its speed at t = 6 s?",
      fig: {
        type: "graph",
        xlabel: "t (s)",
        ylabel: "F (N)",
        xmax: 7,
        ymax: 10,
        lines: [
          { from: [0, 0], to: [2, 8] },
          { from: [2, 8], to: [6, 8] }
        ],
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
        caption: "Net force on a 5 kg object versus time"
      },
      opts: ["9.6 m/s", "4.0 m/s", "40 m/s", "8.0 m/s"],
      a: 3,
      why: "İtme = F–t alanı = ½(2)(8) + (4)(8) = 8 + 32 = 40 N·s. mv = 40 ⇒ v = 8 m/s. 9,6 m/s tüm süre boyunca 8 N varmış gibi almaktır (48/5); 40 m/s itmeyi hız sanmaktır."
    },
    {
      q: "A 0.20 kg ball hits the floor at 5.0 m/s and rebounds upward at 3.0 m/s. The contact lasts 0.010 s. What is the magnitude of the average force of the floor on the ball? (Ignore gravity during the contact.)",
      opts: ["40 N", "100 N", "160 N", "320 N"],
      a: 2,
      why: "Yukarıyı + al: Δp = 0,20 × (3 − (−5)) = 1,6 kg·m/s; F_ort = 1,6/0,010 = 160 N. 40 N hızları çıkarmaktır (5 − 3); 100 N topun yalnız durmasını hesaplamaktır."
    },
    {
      q: "The graph shows the momentum of an object along the x-axis as a function of time. What is the net force on the object at t = 6 s?",
      fig: {
        type: "graph",
        xlabel: "t (s)",
        ylabel: "p (kg·m/s)",
        xmax: 8,
        ymax: 14,
        lines: [
          { from: [0, 0], to: [3, 12] },
          { from: [3, 12], to: [5, 12] },
          { from: [5, 12], to: [7, 0] }
        ],
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
          { v: 4, label: "4" },
          { v: 8, label: "8" },
          { v: 12, label: "12" }
        ],
        caption: "Momentum of an object along the x-axis versus time"
      },
      opts: ["+6 N", "−6 N", "+12 N", "0 N"],
      a: 1,
      why: "F = dp/dt = p–t eğimi. 5–7 s arasında p 12'den 0'a iniyor: eğim (0 − 12)/2 = −6 N. İşareti atlamak A şıkkına götürür."
    },
    {
      q: "A 5 kg object at rest is acted on by a force F(t) = 30t² (N, with t in s) from t = 0 to t = 2 s. What is its speed at t = 2 s?",
      opts: ["16 m/s", "8 m/s", "24 m/s", "48 m/s"],
      a: 0,
      why: "J = ∫₀² 30t² dt = 10t³ |₀² = 80 N·s ⇒ v = J/m = 16 m/s. 48 m/s integrali 30t³ diye almaktır (1/3 çarpanı unutulmuş: 240/5)."
    }
  ]
};
