/* Kitpath not defteri · pe1304 · 13.5 LR Devreleri
   Kaynak: kaynak/ced-physc.md Unit 13 (13.5.A), 2025 Chief Reader hataları. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1304",
  amac: "Bu konu direnç ve bobin içeren devrede akımın nasıl yavaşça yükselip düştüğünü anlatıyor. Anahtar kapanınca ve açılınca bobinin davranışını, zaman sabiti τ = L/R'yi ve üstel I(t) eğrilerini öğreneceksin.",
  bolumler: [
    {
      baslik: "İlk an ve uzun süre: bobin ne yapar?",
      kisa: "İlk anda bobin açık devre, uzun sürede tel gibi davranır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Anahtar kapanınca bobin ve kondansatör",
          head: ["Eleman", "Anahtar kapandığı an", "Çok uzun süre sonra"],
          rows: [
            [
              "**Bobin (L)**",
              "Açık devre gibi: I = 0, pil gerilimi tümüyle bobinde",
              "Tel gibi: V_L = 0, I = ε/R"
            ],
            ["**Kondansatör (C)**", "Tel gibi: q = 0, V_C = 0", "Açık devre gibi: I = 0, V_C = ε"]
          ],
          vurgu: 0,
          not: "Bobin akımın, kondansatör gerilimin ani değişimine izin vermez. Sınavda böyle yaz: *Just after the switch closes the current is zero, so the inductor has the full emf across it; after a long time it acts like a wire.*"
        },
        {
          tip: "formul",
          parcalar: [
            { t: "ε", alt: "pil" },
            "=",
            { t: "I R", alt: "direnç payı" },
            "+",
            { t: "L dI/dt", alt: "bobin payı" }
          ],
          aciklama: "Pil gerilimi direnç ve bobin arasında paylaşılır. t = 0'da I = 0, tümü bobinde: dI/dt = ε/L. Akım arttıkça direncin payı büyür, bobinin payı küçülür."
        },
        {
          tip: "tuzak",
          baslik: "Anahtar kapanınca akım hemen ε/R olmaz",
          metin: "Bobin akımın birden değişmesine izin vermez. Akım sıfırdan başlar ve ε/R'ye yalnız t ≫ τ'da yaklaşır.",
          yanlis: "Anahtar kapandığı anda bobinden maksimum akım geçer.",
          dogru: "Anahtar kapanınca I = 0; en büyük akım uzun süre sonra gelir."
        }
      ]
    },
    {
      baslik: "Büyüme: akım üstel yükselir",
      kisa: "Akım sıfırdan ε/R'ye üstel yükselir; bobin gerilimi üstel söner.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "I(t)", alt: "akım" },
            "=",
            { t: "(ε / R)(1 − e^(−t/τ))", alt: "0'dan ε/R'ye" }
          ],
          aciklama: "Bobin gerilimi V_L = ε e^(−t/τ), direncin gerilimi V_R = ε(1 − e^(−t/τ)). Bu, ε = IR + L dI/dt denkleminin çözümüdür. Sınavda böyle yaz: *The loop rule ε = IR + L dI/dt has the solution I = (ε/R)(1 − e^(−t/τ)) with τ = L/R.*"
        },
        {
          tip: "grafik",
          baslik: "ε = 12 V, R = 4,0 Ω, L = 2,0 H için I(t)",
          xlabel: "t (τ = 0,50 s)",
          ylabel: "I (A)",
          xmax: 5,
          ymax: 3.5,
          xticks: [
            { v: 1, label: "τ" },
            { v: 2, label: "2τ" },
            { v: 3, label: "3τ" },
            { v: 4, label: "4τ" },
            { v: 5, label: "5τ" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          ogeler: [
            { id: "p0", tip: "nokta", x: 0, y: 0, renk: 3, etiket: "I = 0" },
            {
              id: "Ig",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.664], [0.5, 1.18], [0.75, 1.583], [1, 1.896],
                [1.25, 2.14], [1.5, 2.331], [1.75, 2.479], [2, 2.594], [2.25, 2.684],
                [2.5, 2.754], [2.75, 2.808], [3, 2.851], [3.25, 2.884], [3.5, 2.909],
                [3.75, 2.929], [4, 2.945], [4.25, 2.957], [4.5, 2.967], [4.75, 2.974],
                [5, 2.98]
              ],
              renk: 0,
              etiket: "I(t)",
              gizli: true
            },
            { id: "as", tip: "cizgi", from: [0, 3], to: [5, 3], renk: 3, kesik: true, etiket: "ε/R = 3,0 A", gizli: true },
            { id: "tan", tip: "cizgi", from: [0, 0], to: [1, 3], renk: 2, kesik: true, gizli: true },
            { id: "pt", tip: "nokta", x: 1, y: 1.896, renk: 2, etiket: "%63", kilavuz: true, gizli: true },
            {
              id: "VL",
              tip: "egri",
              noktalar: [
                [0, 3], [0.25, 2.336], [0.5, 1.82], [0.75, 1.417], [1, 1.104],
                [1.25, 0.86], [1.5, 0.669], [1.75, 0.521], [2, 0.406], [2.25, 0.316],
                [2.5, 0.246], [2.75, 0.192], [3, 0.149], [3.25, 0.116], [3.5, 0.091],
                [3.75, 0.071], [4, 0.055], [4.25, 0.043], [4.5, 0.033], [4.75, 0.026],
                [5, 0.02]
              ],
              renk: 1,
              etiket: "V_L / R",
              gizli: true
            },
            {
              id: "Id",
              tip: "egri",
              noktalar: [
                [0, 3], [0.25, 2.336], [0.5, 1.82], [0.75, 1.417], [1, 1.104],
                [1.25, 0.86], [1.5, 0.669], [1.75, 0.521], [2, 0.406], [2.25, 0.316],
                [2.5, 0.246], [2.75, 0.192], [3, 0.149], [3.25, 0.116], [3.5, 0.091],
                [3.75, 0.071], [4, 0.055], [4.25, 0.043], [4.5, 0.033], [4.75, 0.026],
                [5, 0.02]
              ],
              renk: 2,
              etiket: "I (sönüm)",
              gizli: true
            },
            { id: "pd", tip: "nokta", x: 1, y: 1.104, renk: 2, etiket: "%37", kilavuz: true, gizli: true }
          ],
          durumlar: [
            {
              metin: "t = 0: anahtar kapandı. Bobin açık devre gibi: ==I = 0==, pil gerilimi tümüyle bobinde (V_L = ε = 12 V)."
            },
            { metin: "Akım ani sıçramaz, yavaşça yükselir: I = (ε/R)(1 − e^(−t/τ)).", goster: ["Ig"], gizle: ["p0"] },
            { metin: "Uzun süre sonra I → ε/R = 3,0 A. dI/dt → 0 olur, bobin ==tel gibi== davranır.", goster: ["as"] },
            {
              metin: "Başlangıç eğimi (ε/L) sürseydi τ'da 3 A'e varılırdı. Gerçekte t = τ = L/R'de akım son değerin ==%63=='üne ulaşır: 1,9 A.",
              goster: ["tan", "pt"]
            },
            {
              metin: "Bobin gerilimi kalan payı alır: V_L/R = 3,0 e^(−t/τ). Her an I + V_L/R = 3,0 A (ε = IR + V_L).",
              goster: ["VL"]
            },
            {
              metin: "Kaynak çıkarılıp akım yalnız R'den dolaşırsa (yeni zaman t′ = 0): I = 3,0 e^(−t′/τ). τ sonra ==%37=='si kalır: 1,1 A.",
              gizle: ["Ig", "VL", "tan", "pt"],
              goster: ["Id", "pd"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Zaman sabiti τ = L/R",
      kisa: "τ süresinde fark %63 kapanır; 5τ sonra iş hemen hemen biter.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "τ", alt: "zaman sabiti (s)" },
            "=",
            { t: "L / R_eq", alt: "bobinin gördüğü direnç" }
          ],
          aciklama: "L büyürse devre yavaşlar, R büyürse hızlanır. R_eq, bobinin boşalırken gördüğü eşdeğer dirençtir. Sınavda böyle yaz: *The time constant τ = L/R_eq is the time for the current to reach about 63% of its final value.*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⏱️",
              terim: "Time constant",
              tr: "zaman sabiti",
              tanim: "Başlangıçtaki değişim hızı sürseydi akımın son değere ulaşacağı süre. Gerçekte bu sürede fark %63 kapanır.",
              ornek: "τ = 0,50 s ise 0,50 s sonra akım son değerin yaklaşık %63'ünde olur."
            },
            {
              ikon: "🧘",
              terim: "Steady state",
              tr: "kararlı durum",
              tanim: "t ≫ τ olduğunda akım artık değişmez: dI/dt = 0, bobin gerilimsiz tel gibidir.",
              ornek: "Yukarıdaki devrede kararlı durum akımı ε/R = 3,0 A."
            }
          ]
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 63.2, sonek: " %", etiket: "büyümede τ sonra, son değerin" },
            { deger: 36.8, sonek: " %", etiket: "sönümde τ sonra kalan, başlangıcın" },
            { deger: 86.5, sonek: " %", etiket: "büyümede 2τ sonra" },
            { deger: 99.3, sonek: " %", etiket: "büyümede 5τ sonra" }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🔧", baslik: "τ değişir", maddeler: ["L ya da R_eq değişir", "Eğri hızlanır ya da yavaşlar"] },
          sag: {
            ikon: "🔋",
            baslik: "τ değişmez",
            maddeler: ["Yalnız ε ya da zamanlama değişir", "Eğrinin şekli aynı kalır, ölçeği değişir"]
          },
          oyun: [
            {
              metin: "L 3 katına çıkarılıyor.",
              cevap: "sol",
              neden: "τ = L/R: τ 3 katına çıkar, akım daha yavaş yükselir."
            },
            {
              metin: "Pilin ε'u 2 katına çıkarılıyor.",
              cevap: "sag",
              neden: "Yalnız I = ε/R ölçeği değişir; τ aynı kalır."
            },
            { metin: "R_eq yarıya indiriliyor.", cevap: "sol", neden: "τ = L/R_eq: τ 2 katına çıkar." },
            {
              metin: "Anahtar 10 saniye sonra kapatılıyor.",
              cevap: "sag",
              neden: "τ devrenin özelliğidir, anahtarın zamanından bağımsızdır."
            }
          ]
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: büyüme ve sönüm",
      kisa: "Bobinin depoladığı enerji, sönümde tamamen dirençte ısıya dönüşür.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "ε = 12 V, R = 4,0 Ω, L = 2,0 H, seri devre",
          durum: "Anahtar t = 0'da kapanıyor. Hemen sonraki akımı, bobin gerilimini ve dI/dt'yi; τ'yu; uzun süre sonraki akımı; t = τ'daki akım ve V_L'yi; depolanan enerjiyi bul. Sonra kaynak çıkarılırsa dirençte ne kadar ısı olur?",
          adimlar: [
            "t = 0⁺: bobin açık devre. I = 0, V_L = ε = 12 V ve dI/dt = ε/L = 6,0 A/s.",
            "Zaman sabiti: τ = L/R = 2,0/4,0 = 0,50 s.",
            "Uzun süre: bobin tel gibi. I_∞ = ε/R = 3,0 A ve V_L = 0.",
            "t = τ = 0,50 s: I = 3,0(1 − e⁻¹) = 1,9 A (yaklaşık %63) ve V_L = 12 e⁻¹ = 4,4 V.",
            "Depolanan enerji: U = ½LI_∞² = ½(2,0)(3,0)² = 9,0 J.",
            "Kaynak çıkarılıp akım R'den dolaşırsa: I = 3,0 e^(−t/τ) ve τ sonra 1,1 A kalır. Dirençte açığa çıkan toplam ısı 9,0 J'dür."
          ],
          sonuc: "τ = 0,50 s; I_∞ = 3,0 A; I(τ) = 1,9 A; U = 9,0 J"
        },
        {
          tip: "tuzak",
          baslik: "Sönümde de τ = L / (dirençlerin eşdeğeri)",
          metin: "τ'yu bobinin boşalırken gördüğü eşdeğer direnç belirler; devreden çıkan kolun dirençleri sayılmaz. İlk değeri de unutma: akım ilk anda önceki değerini korur.",
          yanlis: "Sönüm hızını hep ilk devredeki R belirler; ya da bobin akımı anında sıfıra düşürür.",
          dogru: "Sınavda böyle yaz: *Just after the switch opens the inductor current equals its previous value I₀, then decays as I₀e^(−t/τ) with τ = L/R_eq.*"
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
            "LR devresinin denklemi ε = IR + L dI/dt; ilk an I = 0 ve bobin açık devre, uzun süre sonra bobin tel gibi.",
            "Büyüme: I = (ε/R)(1 − e^(−t/τ)), V_L = ε e^(−t/τ); I_∞ = ε/R.",
            "Zaman sabiti τ = L/R_eq; τ'da akım son değerin yaklaşık %63'üne ulaşır, 5τ sonra pratikte biter.",
            "Sönüm: I = I₀ e^(−t/τ); τ sonra I₀'ın yaklaşık %37'si kalır.",
            "ε değişince τ değişmez; yalnız L ya da R_eq τ'yu değiştirir.",
            "Bobinde depolanan enerji ½LI²; sönümde tamamı dirençte ısıya döner.",
            "RC ile karıştırma: kondansatör ilk an tel, uzun sürede açık devre; bobin tersine."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "In a series circuit a 12 V battery, a 4.0 Ω resistor, a 2.0 H inductor, and a switch are connected. The switch is closed at t = 0. What are the current in the circuit and the potential difference across the inductor immediately after the switch is closed?",
      opts: ["I = 3.0 A, V_L = 0", "I = 0, V_L = 12 V", "I = 0, V_L = 0", "I = 3.0 A, V_L = 12 V"],
      a: 1,
      why: "Bobin akımın ani değişimine izin vermez: I(0⁺) = 0. Dirençte gerilim düşmez, pil gerilimi tümüyle bobinde görünür: V_L = 12 V. A şıkkı uzun süre sonraki durumdur."
    },
    {
      q: "A 24 V battery, a 6.0 Ω resistor, and a 3.0 H inductor are connected in series. The switch is closed at t = 0. What is the current at t = 0.50 s?",
      opts: ["1.5 A", "2.0 A", "2.5 A", "4.0 A"],
      a: 2,
      why: "τ = L/R = 0,50 s ve I_∞ = 24/6,0 = 4,0 A. t = τ'da I = 4,0(1 − e⁻¹) ≈ 2,5 A. D şıkkı I_∞'dur."
    },
    {
      q: "A student closes a switch in a series LR circuit with a 50 Ω resistor and records the current as shown in the table. The current approaches 2.0 A. What is the inductance of the inductor?",
      fig: {
        type: "table",
        head: ["t (ms)", "I (A)"],
        rows: [["0", "0"], ["2.0", "1.26"], ["4.0", "1.73"], ["6.0", "1.90"]],
        caption: "Current after the switch closes"
      },
      opts: ["4.0 × 10⁻⁵ H", "0.10 H", "0.20 H", "0.050 H"],
      a: 1,
      why: "I_∞ = 2,0 A'in %63'ü 1,26 A ve bu t = 2,0 ms'de görülür: τ = 2,0 ms. L = τR = (2,0 × 10⁻³)(50) = 0,10 H. A şıkkı τ/R, C şıkkı τ = 4 ms alır."
    },
    {
      q: "In a series LR circuit the current has reached its steady value I₀. The battery is then removed and the inductor discharges through the resistor R. What is the total energy dissipated in the resistor?",
      opts: ["½LI₀²", "LI₀²", "½I₀²R", "Zero, because the inductor opposes the change in current"],
      a: 0,
      why: "Bobinin depoladığı ½LI₀² enerjisi sönüm sırasında tamamen dirençte ısıya dönüşür. ∫I²R dt = ½LI₀² (kalkülüsle de çıkar). D şıkkı Lenz'i yanlış yorumlar."
    },
    {
      q: "A series LR circuit is connected to an ideal battery. The resistance is doubled (the inductance and battery are unchanged). Which of the following correctly describes the effect on the time constant τ and on the final current I∞?",
      opts: [
        "τ doubles and I∞ doubles",
        "τ halves and I∞ is unchanged",
        "τ is unchanged and I∞ halves",
        "τ halves and I∞ halves"
      ],
      a: 3,
      why: "τ = L/R: R 2 katına çıkınca τ yarıya iner. I∞ = ε/R de yarıya iner. B şıkkı son akımın R'ye bağlı olduğunu unutur."
    }
  ]
};
