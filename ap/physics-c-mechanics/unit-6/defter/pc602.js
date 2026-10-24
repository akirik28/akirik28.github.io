/* Kitpath not defteri · pc602 · 6.3 Açısal Momentum ve Açısal İtme. Kaynak: kaynak/ced-physc.md (Unit 6, Topic 6.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc602",
  amac: "Bu konu dönmedeki momentumu anlatıyor: açısal momentum L, torkun süreyle çarpımı olan açısal itme ve ikisini bağlayan ΔL = ∫τ dt. Düz çizgide giden bir cismin bile açısal momentumu olabileceğini de göreceksin.",
  bolumler: [
    {
      baslik: "Açısal momentum",
      kisa: "Dönen cisimde L = Iω; bir noktaya göre L = r × p.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌪️",
              terim: "Angular momentum",
              tr: "açısal momentum",
              tanim: "Dönen rigid sistemde L = Iω, birimi kg·m²/s. Doğrusal momentum p = mv'nin dönme karşılığıdır; eksen ya da referans noktası seçimi L'yi değiştirir.",
              ornek: "I = 0,5 kg·m², ω = 6 rad/s: L = 3 kg·m²/s."
            },
            {
              ikon: "💫",
              terim: "Angular impulse",
              tr: "açısal itme",
              tanim: "Torkun süresi boyunca toplam etkisi, ∫τ dt. Torkla aynı yönlüdür ve açısal momentumu değiştirir.",
              ornek: "Sabit 8 N·m tork 2 s etki ederse 16 kg·m²/s."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "L = Iω", alt: "rigid sistem" },
            "|",
            { t: "L = r × p", alt: "bir noktaya göre" },
            "|",
            { t: "|L| = mvr sinθ = mvr⊥", alt: "büyüklük" }
          ],
          aciklama: "✍️ Sınavda böyle yaz: *The angular momentum about the pivot is L = Iω.*"
        }
      ]
    },
    {
      baslik: "Düz giden cismin de L'si var",
      kisa: "L = mvr⊥; r⊥ hıza dik uzaklıktır, cisim dönmese bile L olabilir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "O noktasına göre: 3 kg, 4 m/s, y = 2 m doğrusunda",
          xlabel: "x (m)",
          ylabel: "y (m)",
          xmax: 8,
          ymax: 5,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "yol", tip: "cizgi", from: [0.5, 2], to: [7.6, 2], renk: 3, kesik: true },
            { id: "m", tip: "nokta", x: 2, y: 2, renk: 0, etiket: "m" },
            { id: "v", tip: "ok", from: [2, 2.7], to: [3.4, 2.7], renk: 1 },
            { id: "r", tip: "ok", from: [0, 0], to: [2, 2], renk: 2, gizli: true },
            { id: "dik", tip: "cizgi", from: [0, 0], to: [0, 2], renk: 3, gizli: true },
            { id: "tdik", tip: "yazi", x: 0.2, y: 1, metin: "r⊥ = 2 m", hiza: "start", gizli: true },
            {
              id: "tL",
              tip: "yazi",
              x: 4.5,
              y: 4.2,
              metin: "L = mvr⊥ = 3 × 4 × 2 = 24 kg·m²/s",
              gizli: true
            },
            {
              id: "tyon",
              tip: "yazi",
              x: 4.5,
              y: 3.5,
              metin: "r × p sayfaya girer: saat yönünde (cw)",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Kütle y = 2 m doğrusunda +x yönünde 4 m/s ile gidiyor. Hiç dönmüyor, ama O noktasına göre açısal momentumu var."
            },
            {
              metin: "r, O'dan parçacığa çizilen konum vektörü.",
              goster: [
                "r"
              ]
            },
            {
              metin: "Önemli olan hıza ==dik uzaklık==: r⊥ = 2 m. L = mvr⊥ = 3 × 4 × 2 = 24 kg·m²/s.",
              goster: [
                "dik",
                "tdik",
                "tL"
              ]
            },
            {
              metin: "Parçacık ilerleyince r uzar ama r⊥ hâlâ 2 m: L değişmez.",
              set: {
                m: { x: 6 },
                r: { to: [6, 2] },
                v: { from: [6, 2.7], to: [7.4, 2.7] }
              }
            },
            {
              metin: "Yön: r × p sayfaya girer, yani O'ya göre L saat yönündedir.",
              goster: [
                "tyon"
              ]
            },
            {
              metin: "✍️ Sınavda böyle yaz: *The particle has angular momentum L = mvr⊥ about O even though it moves in a straight line.*"
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "r, hıza dik uzaklıktır",
          metin: "L = mvr formülündeki r, cismin hız doğrusuna olan dik uzaklıktır (r⊥ = r sinθ). Hız doğrusu O'dan geçiyorsa L = 0 olur.",
          yanlis: "Düz çizgide giden cismin açısal momentumu yoktur; ya da r, O'ya olan uzaklıktır.",
          dogru: "L = mv r⊥; düz giden cismin de seçilen noktaya göre L'si vardır."
        }
      ]
    },
    {
      baslik: "Açısal itme: ΔL = ∫τ dt",
      kisa: "Net tork L–t eğimidir; açısal itme τ–t alanıdır ve ΔL'ye eşittir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "τ_net = dL/dt = Iα", alt: "I sabitken" },
            "|",
            { t: "ΔL = ∫τ dt", alt: "açısal itme = ΔL" }
          ],
          aciklama: "I sabitse dL/dt = I dω/dt = Iα: Newton'un ikinci yasası. İmpuls–momentum teoreminin dönme biçimi bu. ✍️ Sınavda böyle yaz: *The angular impulse equals the area under the τ–t graph, and it equals the change in angular momentum.*"
        },
        {
          tip: "grafik",
          baslik: "τ–t darbesi ve L(t)",
          xlabel: "t (s)",
          ylabel: "τ (N·m), L (kg·m²/s)",
          xmax: 5,
          ymax: 18,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" },
            { v: 16, label: "16" }
          ],
          ogeler: [
            { id: "t1", tip: "cizgi", from: [0, 0], to: [2, 8], renk: 0 },
            { id: "t2", tip: "cizgi", from: [2, 8], to: [4, 0], renk: 0 },
            {
              id: "al",
              tip: "alan",
              noktalar: [[0, 0], [2, 8], [4, 0]],
              renk: 1,
              gizli: true
            },
            { id: "tal", tip: "yazi", x: 2, y: 3, metin: "alan = 16", gizli: true },
            {
              id: "L",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.125], [0.5, 0.5], [0.75, 1.125], [1, 2], [1.25, 3.125],
                [1.5, 4.5], [1.75, 6.125], [2, 8], [2.25, 9.875], [2.5, 11.5], [2.75, 12.875],
                [3, 14], [3.25, 14.875], [3.5, 15.5], [3.75, 15.875], [4, 16]
              ],
              renk: 2,
              gizli: true
            },
            { id: "tL", tip: "yazi", x: 3.3, y: 16.6, metin: "L(t)", hiza: "start", gizli: true },
            { id: "tw", tip: "yazi", x: 3.5, y: 10, metin: "ω = 16/2 = 8 rad/s", gizli: true }
          ],
          durumlar: [
            {
              metin: "Bir çarka uygulanan tork: 0–2 s arasında 0'dan 8 N·m'ye çıkıyor, 2–4 s arasında geri 0'a iniyor."
            },
            {
              metin: "Altındaki alan ==açısal itme==: ½ × 4 × 8 = 16 kg·m²/s.",
              goster: [
                "al",
                "tal"
              ]
            },
            {
              metin: "ΔL = ∫τ dt = 16 kg·m²/s. Çark durgun başladıysa t = 4 s'de L = 16 kg·m²/s.",
              gizle: [
                "tal"
              ]
            },
            {
              metin: "L–t grafiği: eğimi her an net torktur. t = 2 s'de en dik (8), t = 4 s'de yatay (τ = 0).",
              goster: [
                "L",
                "tL"
              ]
            },
            {
              metin: "I = 2 kg·m² ise ω = L/I = 16/2 = 8 rad/s.",
              goster: [
                "tw"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Grafikleri okuma ve çözümlü örnek",
      kisa: "Eğim türevdir, alan integraldir; L(t) verilince τ = dL/dt.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Hangi grafik neyi verir?",
          head: [
            "Grafik",
            "Eğim",
            "Alan"
          ],
          rows: [
            [
              "ω–t",
              "α (açısal ivme)",
              "Δθ (açısal yer değiştirme)"
            ],
            [
              "τ–θ",
              "—",
              "W (iş)"
            ],
            [
              "τ–t",
              "—",
              "ΔL (açısal itme)"
            ],
            [
              "L–t",
              "τ_net (net tork)",
              "—"
            ]
          ],
          vurgu: 2,
          not: "Grafik sorusunda önce eksenlere bak: eğim mi alan mı istendiğini eksenler söyler."
        },
        {
          tip: "ornek",
          baslik: "L(t) = 2t² + 4t (kg·m²/s), I = 5 kg·m² sabit",
          durum: "Dönen bir platformun açısal momentumu verilmiş. t = 3 s'de net torku, 0–3 s arasındaki açısal itmeyi ve t = 3 s'de ω'yı bul.",
          adimlar: [
            "Net tork: τ = dL/dt = 4t + 4 → τ(3) = 16 N·m.",
            "Açısal itme: ∫₀³ τ dt = [2t² + 4t]₀³ = 18 + 12 = 30 kg·m²/s.",
            "Kontrol: ΔL = L(3) − L(0) = 30 − 0 = 30 kg·m²/s; açısal itme ΔL'ye eşit.",
            "L = Iω → ω(3) = 30/5 = 6 rad/s.",
            "✍️ Sınavda böyle yaz: *The net torque is the time derivative of the angular momentum, τ = dL/dt.*"
          ],
          sonuc: "τ(3) = 16 N·m; açısal itme = 30 kg·m²/s; ω(3) = 6 rad/s"
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
            "*Angular momentum*: rigid sistemde L = Iω; bir noktaya göre L = r × p, büyüklüğü mvr⊥.",
            "r⊥ hızın doğrusuna dik uzaklıktır; düz giden cismin de seçilen noktaya göre L'si vardır (hız doğrusu o noktadan geçiyorsa 0).",
            "L referans noktasına bağlıdır; L'leri toplarken hep aynı eksen ya da nokta kullan.",
            "*Angular impulse* = ∫τ dt; τ–t grafiğinin altındaki alandır ve torkla aynı yönlüdür.",
            "İmpuls–momentum: ΔL = ∫τ dt. Net tork L–t grafiğinin eğimidir: τ_net = dL/dt.",
            "I sabitse dL/dt = Iα; yani Newton'un ikinci yasasının dönme biçimidir.",
            "Eğim ve alanı eksenlere bakarak seç: ω–t eğim α, alan Δθ; τ–t alan ΔL; L–t eğim τ.",
            "Cevabı birimle yaz: L için kg·m²/s, açısal itme için de kg·m²/s (N·m·s)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A disk with rotational inertia 0.5 kg·m² rotates at 6 rad/s. A constant torque of 2 N·m opposes the rotation for 1.5 s. What is the disk's angular speed at the end of this time?",
      opts: [
        "0",
        "2 rad/s",
        "3 rad/s",
        "6 rad/s"
      ],
      a: 0,
      why: "L₀ = Iω = 3 kg·m²/s ve ΔL = −τΔt = −3 kg·m²/s; L = 0, yani ω = 0. C en çekici yanlış şık: açısal itmeyi (3) doğrudan ω sanmak; ΔL, I'ya bölünerek Δω'ya çevrilir (Δω = −6 rad/s)."
    },
    {
      q: "A wheel with rotational inertia 3 kg·m² starts from rest. The graph shows the net torque on the wheel as a function of time. What is its angular speed at t = 4 s?",
      fig: {
        type: "graph",
        xlabel: "t (s)",
        ylabel: "τ (N·m)",
        xmax: 5,
        ymax: 8,
        lines: [
          { from: [0, 0], to: [2, 6], color: 0 },
          { from: [2, 6], to: [4, 6], color: 0 }
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
          { v: 6, label: "6" }
        ]
      },
      opts: [
        "2 rad/s",
        "4 rad/s",
        "6 rad/s",
        "8 rad/s"
      ],
      a: 2,
      why: "Açısal itme = alan = ½(2)(6) + 6(2) = 18 kg·m²/s; ω = ΔL/I = 18/3 = 6 rad/s. D en çekici yanlış şık: son torku (6) tüm süreyle (4 s) çarpmak (24/3), torkun yükseldiğini yok sayar."
    },
    {
      q: "A 2 kg particle moves at a constant speed of 3 m/s along a straight line. The perpendicular distance from point P to the line is 4 m. At an instant when the particle is 5 m from P, what is its angular momentum about P?",
      opts: [
        "30 kg·m²/s",
        "24 kg·m²/s",
        "12 kg·m²/s",
        "0"
      ],
      a: 1,
      why: "L = mvr⊥ = 2 × 3 × 4 = 24 kg·m²/s (aynı değer r sinθ = 5 × 4/5 ile de çıkar). A en çekici yanlış şık: r = 5 m'yi hıza dik uzaklık sanmak."
    },
    {
      q: "The graph shows the angular momentum L of a rotating object as a function of time. What is the magnitude of the net torque on the object at t = 1 s and at t = 3 s?",
      fig: {
        type: "graph",
        xlabel: "t (s)",
        ylabel: "L (kg·m²/s)",
        xmax: 5,
        ymax: 10,
        lines: [
          { from: [0, 0], to: [2, 8], color: 0 },
          { from: [2, 8], to: [4, 8], color: 0 }
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
          { v: 8, label: "8" }
        ]
      },
      opts: [
        "8 N·m and 0",
        "4 N·m and 4 N·m",
        "4 N·m and 8 N·m",
        "4 N·m and 0"
      ],
      a: 3,
      why: "τ_net = dL/dt, yani L–t grafiğinin eğimi: 0–2 s'de 8/2 = 4 N·m, 2–4 s'de yatay olduğu için 0. A en çekici yanlış şık: L'nin değerini (8) tork sanmak."
    },
    {
      q: "A constant torque acts on a wheel for a time Δt, giving the wheel a change in angular momentum ΔL. If the torque is tripled and the time is halved, the change in angular momentum is",
      opts: [
        "1.5 times as large",
        "3 times as large",
        "unchanged",
        "6 times as large"
      ],
      a: 0,
      why: "ΔL = τΔt → (3τ)(Δt/2) = 1,5 τΔt. B en çekici yanlış şık: sürenin yarıya indiğini unutmak."
    }
  ]
};
