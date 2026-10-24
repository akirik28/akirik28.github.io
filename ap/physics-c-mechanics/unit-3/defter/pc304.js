/* Kitpath not defteri · pc304 · 3.5 Güç
   Kaynak: kaynak/ced-physc.md (Topic 3.5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc304",
  amac: "Bu konu işin ne kadar hızlı yapıldığını anlatıyor: güç, enerjinin zamana göre aktarım hızı. Ortalama ve anlık gücü, P = Fv ilişkisini ve W–t ile P–t grafiklerinin okunmasını öğreneceksin.",
  bolumler: [
    {
      baslik: "Güç nedir?",
      kisa: "Güç enerjinin aktarılma hızıdır: enerji bölü zaman, birimi watt (J/s).",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚡",
              terim: "Power",
              tr: "güç",
              tanim: "Enerjinin zamana göre aktarılma ya da dönüşme hızı. Skalerdir; birimi watt: 1 W = 1 J/s.",
              ornek: "Aynı merdiveni koşarak da yürüyerek de çıkarsan aynı enerjiyi harcarsın; koşarken gücün daha büyüktür."
            },
            {
              ikon: "📊",
              terim: "Average power",
              tr: "ortalama güç",
              tanim: "Toplam iş (ya da enerji) bölü toplam süre: P_ort = W/Δt = ΔE/Δt.",
              ornek: "10 saniyede 500 J aktaran motor: P_ort = 50 W."
            },
            {
              ikon: "🎯",
              terim: "Instantaneous power",
              tr: "anlık güç",
              tanim: "O andaki aktarım hızı: P = dW/dt.",
              ornek: "Hızlanan arabanın motor gücü her an artar."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "⏱️",
            baslik: "*Power* (güç)",
            maddeler: ["Birimi W = J/s", "Zamana bölünür", "Aynı iş daha kısa sürede ⇒ daha büyük"]
          },
          sag: {
            ikon: "🔋",
            baslik: "*Energy* (enerji)",
            maddeler: ["Birimi J", "Faturadaki kWh", "Depolanan ya da aktarılan miktar"]
          },
          oyun: [
            {
              metin: "Elektrik faturasındaki kWh.",
              cevap: "sag",
              neden: "1 kWh = 1000 W × 3600 s = 3,6 MJ: bir enerji birimidir."
            },
            {
              metin: "Ampulün üzerindeki 60 W yazısı.",
              cevap: "sol",
              neden: "Watt güç birimidir: saniyede 60 J harcar."
            },
            {
              metin: "Aynı yükü iki kat hızlı kaldıran motor.",
              cevap: "sol",
              neden: "İş aynı, süre yarı: güç iki katı."
            },
            { metin: "Telefon pilinde depolu 40 kJ.", cevap: "sag", neden: "Joule enerji birimidir." },
            {
              metin: "Beygir gücü (hp).",
              cevap: "sol",
              neden: "Adına rağmen bir güç birimidir (1 hp ≈ 746 W)."
            }
          ]
        },
        {
          tip: "not",
          metin: "Sınavda böyle yaz: *Power is the rate at which energy is transferred, so P_avg = ΔE/Δt.* Güç ile enerjiyi karıştırma: kWh bir enerji birimidir."
        }
      ]
    },
    {
      baslik: "Ortalama ve anlık güç: W–t grafiği",
      kisa: "W–t grafiğinde secant eğimi ortalama gücü, teğet eğimi anlık gücü verir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "P_ort", alt: "ortalama güç" },
            "=",
            { t: "W/Δt", alt: "ya da ΔE/Δt" },
            "→",
            { t: "P = dW/dt", alt: "anlık güç (Δt → 0)" }
          ],
          aciklama: "Hız fikrinin aynısı: x–t eğimi hızdı, W–t eğimi güçtür."
        },
        {
          tip: "grafik",
          baslik: "Motorun yaptığı iş: W(t) = 2t² (J)",
          xlabel: "t (s)",
          ylabel: "W (J)",
          xmax: 6,
          ymax: 60,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 10, label: "10" },
            { v: 20, label: "20" },
            { v: 30, label: "30" },
            { v: 40, label: "40" },
            { v: 50, label: "50" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.5, 0.5], [1, 2], [1.5, 4.5], [2, 8], [2.5, 12.5], [3, 18], [3.5, 24.5], [4, 32],
                [4.5, 40.5], [5, 50]
              ],
              renk: 0,
              etiket: "W"
            },
            { id: "sec", tip: "cizgi", from: [0, 0], to: [4, 32], renk: 2, gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 32, renk: 3, etiket: "32 J", gizli: true },
            { id: "t8", tip: "yazi", x: 0.4, y: 22, metin: "P_ort = 8 W", hiza: "start", gizli: true },
            { id: "tg", tip: "cizgi", from: [3, 16], to: [5, 48], renk: 1, gizli: true },
            { id: "t16", tip: "yazi", x: 2.7, y: 40, metin: "P(4 s) = 16 W", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Motor, zamanla hızlanan bir iş yapıyor: W(t) = 2t² joule." },
            {
              metin: "0–4 s arası ==secant==: W(4) = 32 J ⇒ P_ort = 32/4 = 8 W.",
              goster: ["sec", "p4", "t8"]
            },
            {
              metin: "t = 4 s'deki ==teğet==: eğim dW/dt = 4t = 16 W. Anlık güç ortalamadan büyük, çünkü güç artıyor. Sınavda böyle yaz: *The instantaneous power is the slope of the tangent line, P = dW/dt.*",
              goster: ["tg", "t16"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Kuvvet ve hız: P = F∥v",
      kisa: "Kuvvetin anlık gücü P = F∥v; hız büyüdükçe aynı kuvvetin gücü büyür.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "P", alt: "anlık güç" },
            "=",
            { t: "F∥ v", alt: "kuvvetin hıza paralel bileşeni × hız" },
            "=",
            { t: "Fv cosθ", alt: "θ: kuvvet–hız açısı" }
          ],
          aciklama: "Türetme: dW = F∥ dx olduğundan P = dW/dt = F∥ dx/dt = F∥ v. Sınavda böyle yaz: *The power delivered by the force is P = F∥v, the parallel component times the instantaneous speed.*"
        },
        {
          tip: "ornek",
          baslik: "Hızlanan araba: ortalama ve anlık güç",
          durum: "m = 1000 kg'lık araba durgundan başlıyor; motor itişi 2000 N ve sabit (başka kuvvet yok). 10 saniye sonra ortalama güç ve t = 10 s'deki anlık güç nedir?",
          adimlar: [
            "a = F/m = 2000/1000 = 2 m/s²; v(10 s) = 2 × 10 = 20 m/s.",
            "Yol: x = ½at² = ½ × 2 × 10² = 100 m; iş W = Fx = 2000 × 100 = 200 000 J.",
            "Ortalama güç: P_ort = W/Δt = 200 000/10 = 20 000 W = 20 kW.",
            "Anlık güç: P = Fv = 2000 × 20 = 40 000 W = 40 kW (ortalamanın iki katı, çünkü P hızla doğrusal artıyor)."
          ],
          sonuc: "P_ort = 20 kW, P(10 s) = 40 kW"
        },
        {
          tip: "tuzak",
          baslik: "Anlık güçte ortalama hızı kullanma",
          metin: "P = Fv anlık hızla hesaplanır. Ortalama hız yalnız ortalama güç verir: P_ort = F × v_ort = 2000 × 10 = 20 kW.",
          yanlis: "t = 10 s'de P = F v_ort = 2000 × 10 = 20 kW.",
          dogru: "t = 10 s'de v = 20 m/s: P = 2000 × 20 = 40 kW."
        }
      ]
    },
    {
      baslik: "Güç–zaman grafiği: alan = iş",
      kisa: "P–t grafiğinin altındaki alan, o sürede yapılan işi verir: W = ∫P dt.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Aynı motor: P(t) = 4t (W)",
          xlabel: "t (s)",
          ylabel: "P (W)",
          xmax: 6,
          ymax: 24,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" },
            { v: 16, label: "16" },
            { v: 20, label: "20" }
          ],
          ogeler: [
            { id: "L", tip: "cizgi", from: [0, 0], to: [5, 20], renk: 0, etiket: "P = 4t" },
            {
              id: "a",
              tip: "alan",
              noktalar: [[0, 0], [2, 0], [2, 8]],
              renk: 1,
              gizli: true
            },
            { id: "p2", tip: "nokta", x: 2, y: 8, renk: 1, etiket: "8 W", gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 16, renk: 2, etiket: "16 W", gizli: true },
            { id: "t", tip: "yazi", x: 1.4, y: 2.4, metin: "W = alan", gizli: true }
          ],
          durumlar: [
            { metin: "Anlık güç doğrusal artıyor: P = dW/dt = 4t." },
            { metin: "0–2 s: üçgenin alanı ½ × 2 × 8 = 8 J.", goster: ["a", "p2", "t"] },
            {
              metin: "0–4 s: alan ½ × 4 × 16 = 32 J.",
              set: {
                a: {
                  noktalar: [[0, 0], [4, 0], [4, 16]]
                }
              },
              goster: ["p4"]
            },
            {
              metin: "W(4) = 2 × 4² = 32 J: önceki grafikle aynı. Türev ve integral birbirinin tersidir. Sınavda böyle yaz: *The work equals the area under the P versus t graph, W = ∫P dt.*"
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kalkülüsle iş: P(t) = 12 − 2t (W), 0 ≤ t ≤ 6 s",
          durum: "Azalan güçle çalışan bir motorun 0–6 s arasında yaptığı toplam işi ve ortalama gücü bul.",
          adimlar: [
            "Sınırları yaz: W = ∫₀⁶ (12 − 2t) dt.", "Önce integrali al: ∫ (12 − 2t) dt = 12t − t².",
            "Sonra sınırları koy: (12 × 6 − 6²) − (0) = 72 − 36 = 36 J.",
            "Ortalama güç: P_ort = W/Δt = 36/6 = 6 W (başta 12 W, sonda 0 W: ortalaması 6 W)."
          ],
          sonuc: "W = 36 J, P_ort = 6 W"
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
            "Güç enerjinin aktarılma hızıdır; birimi watt (1 W = 1 J/s). kWh ise bir enerji birimidir.",
            "Ortalama güç P_ort = W/Δt = ΔE/Δt; anlık güç P = dW/dt.",
            "W–t grafiğinde secant eğimi ortalama gücü, teğet eğimi anlık gücü verir (W = 2t² için 8 W ve 16 W).",
            "P = F∥v = Fv cosθ; anlık güçte anlık hız kullan, ortalama hız değil.",
            "Sabit kuvvetle hızlanırken güç hızla doğrusal artar: 1000 kg, 2000 N, 10 s ⇒ ortalama 20 kW, t = 10 s'de 40 kW.",
            "P–t grafiğinin altındaki alan işi verir: W = ∫P dt (integralde önce integral, sonra sınırlar).",
            "Aynı işi yarı sürede yapan makinenin ortalama gücü iki katıdır."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A 60 kg student climbs a flight of stairs 3.0 m high in 6.0 s at constant speed. Using g = 9.8 m/s², what average power must the student supply?",
      opts: ["49 W", "294 W", "1764 W", "3528 W"],
      a: 1,
      why: "P = mgh/Δt = 60 × 9,8 × 3 / 6 = 294 W. 1764 J iş değerinin kendisidir (süreye bölmeyi unutmak); 49 W süreye iki kez bölmektir."
    },
    {
      q: "The graph shows the power delivered by a motor as a function of time. How much work does the motor do from t = 0 to t = 6 s?",
      fig: {
        type: "graph",
        xlabel: "t (s)",
        ylabel: "P (W)",
        xmax: 7,
        ymax: 50,
        lines: [
          { from: [0, 0], to: [2, 40] },
          { from: [2, 40], to: [6, 40] }
        ],
        points: [
          { q: 2, p: 40, label: "40 W", guides: true }
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
          { v: 10, label: "10" },
          { v: 20, label: "20" },
          { v: 30, label: "30" },
          { v: 40, label: "40" }
        ],
        caption: "Power delivered by a motor versus time"
      },
      opts: ["120 J", "160 J", "200 J", "240 J"],
      a: 2,
      why: "İş = P–t grafiğinin altındaki alan: ½(2)(40) + (4)(40) = 40 + 160 = 200 J. 240 J tüm süre boyunca 40 W varmış gibi almaktır."
    },
    {
      q: "A constant 400 N force pulls a crate in the direction of its motion. What is the instantaneous power delivered by the force at the moment the crate's speed is 15 m/s?",
      opts: ["6000 W", "26.7 W", "60 000 W", "415 W"],
      a: 0,
      why: "Kuvvet hızla aynı yönde: P = Fv = 400 × 15 = 6000 W. 26,7 W kuvveti hıza bölmektir; 415 W iki niceliği toplamaktır."
    },
    {
      q: "A machine does work W on a load, and the total work done up to time t is given in the table. What is the average power from t = 2 s to t = 6 s?",
      fig: {
        type: "table",
        head: ["t (s)", "W (J)"],
        rows: [["0", "0"], ["2", "8"], ["4", "32"], ["6", "72"]],
        caption: "Cumulative work versus time"
      },
      opts: ["16 W", "8 W", "12 W", "18 W"],
      a: 0,
      why: "P_ort = ΔW/Δt = (72 − 8)/(6 − 2) = 16 W. 12 W tüm süreyi (72/6) alır; 18 W ise ΔW yerine 72 J'yi 4 s'ye bölmektir."
    },
    {
      q: "Motor A lifts a 100 kg load 10 m at constant speed in 5 s. Motor B lifts the same load the same height at constant speed in 10 s. Which statement is correct?",
      opts: [
        "Motor A does more work than motor B.", "Motor B does more work than motor A.",
        "Both do the same work and have the same average power.",
        "Both do the same work, but motor A has twice the average power."
      ],
      a: 3,
      why: "İkisi de aynı enerjiyi aktarır (W = mgh = 9800 J); A işi yarı sürede yaptığı için ortalama gücü iki katıdır (1960 W ve 980 W). Güç ile işi karıştırmak C şıkkını çekici yapar."
    }
  ]
};
