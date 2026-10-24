/* Kitpath not defteri · pc504 · 5.5–5.6 Dönmede Denge ve Newton'un 2. Yasası. Kaynak: kaynak/ced-physc.md (Unit 5, Topic 5.5–5.6). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc504",
  amac: "Bu konu dönmenin Newton yasalarını anlatıyor: net tork sıfırsa açısal hız sabit kalır, değilse α = Στ/I ile değişir. Denge problemlerinde pivot seçmeyi ve makaralı sistemleri öteleme ile dönme denklemlerini birlikte yazarak çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Dönmede denge",
      kisa: "Net tork sıfırsa ω sabit kalır; denge hareketsiz olmak demek değildir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚖️",
              terim: "Rotational equilibrium",
              tr: "dönmede denge",
              tanim: "Net torkun sıfır olduğu durum, Στ = 0. Açısal hız sabit kalır; sıfır olması gerekmez.",
              ornek: "Sabit hızla dönen bir vantilatör dönmede dengededir."
            },
            {
              ikon: "↔️",
              terim: "Translational equilibrium",
              tr: "ötelemede denge",
              tanim: "ΣF = 0: kütle merkezinin hızı sabit. Dönmede dengeden ayrı bir koşuldur; biri olmadan diğeri olabilir.",
              ornek: "Direksiyonu iki elle zıt yönde çevirmek: ΣF = 0 ama Στ ≠ 0."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "Στ = 0", alt: "ω sabit" },
            "|",
            { t: "Στ ≠ 0", alt: "ω değişir" }
          ],
          aciklama: "Dönmenin birinci yasası: net tork sıfırsa (ve yalnızca o zaman) açısal hız sabittir. ✍️ Sınavda böyle yaz: *The net torque on the wheel is zero, so its angular velocity is constant.*"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "⏸️",
            baslik: "ω sabit (Στ = 0)",
            maddeler: [
              "Hareketsiz ya da sabit hızla dönüyor",
              "Tork dengeli"
            ]
          },
          sag: {
            ikon: "🔁",
            baslik: "ω değişir (Στ ≠ 0)",
            maddeler: [
              "Hızlanıyor ya da yavaşlıyor",
              "Tork dengesiz"
            ]
          },
          oyun: [
            {
              metin: "Sabit hızla dönen tavan vantilatörü.",
              cevap: "sol",
              neden: "ω sabit: net tork sıfır."
            },
            {
              metin: "Dengede duran tahterevalli.",
              cevap: "sol",
              neden: "ω = 0 sabit; torklar birbirini götürüyor."
            },
            {
              metin: "Durağan bir kapı, tek elle itilince açılmaya başlıyor.",
              cevap: "sag",
              neden: "ω sıfırdan değişiyor: net tork var."
            },
            {
              metin: "Fiş çekilince yavaşlayan çamaşır makinesi tamburu.",
              cevap: "sag",
              neden: "Sürtünme torku ω'yı azaltıyor."
            }
          ]
        }
      ]
    },
    {
      baslik: "Denge problemi: pivotu akıllı seç",
      kisa: "Bilinmeyen kuvvetin torkunu sıfırlayan noktayı pivot seç; çubuğun ağırlığını unutma.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "3 m'lik, 6 kg'lık tahta; pivot sol uçtan 1 m",
          xlabel: "x (m)",
          ylabel: "",
          xmax: 4,
          ymax: 6.5,
          xticks: [
            { v: 0, label: "0" },
            { v: 1, label: "1" },
            { v: 1.5, label: "1,5" },
            { v: 3, label: "3" }
          ],
          yticks: [],
          ogeler: [
            { id: "tahta", tip: "cizgi", from: [0, 3.2], to: [3, 3.2], renk: 0 },
            { id: "w1", tip: "ok", from: [0, 4.2], to: [0, 3.2], renk: 1, gizli: true },
            { id: "t1", tip: "yazi", x: 0.2, y: 4.6, metin: "mg", hiza: "start", gizli: true },
            { id: "w2", tip: "ok", from: [1.5, 5.2], to: [1.5, 3.2], renk: 2, gizli: true },
            {
              id: "t2",
              tip: "yazi",
              x: 1.7,
              y: 5.6,
              metin: "Mg = 58,8 N",
              hiza: "start",
              gizli: true
            },
            { id: "n", tip: "ok", from: [1, 0.2], to: [1, 3.2], renk: 3, gizli: true },
            {
              id: "tn",
              tip: "yazi",
              x: 1.2,
              y: 1.4,
              metin: "N (bilinmiyor)",
              hiza: "start",
              gizli: true
            },
            { id: "k1", tip: "yazi", x: 0.5, y: 2.6, metin: "1,0 m", gizli: true },
            { id: "k2", tip: "yazi", x: 1.25, y: 2.6, metin: "0,5 m", hiza: "start", gizli: true },
            {
              id: "tk",
              tip: "yazi",
              x: 2.1,
              y: 0.7,
              metin: "m = 3 kg, N = 88,2 N",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Düzgün tahta, pivot sol uçtan 1 m'de. Sol uca bir m kütlesi asıp dengeleyeceğiz."
            },
            {
              metin: "Kuvvetler: mg sol uçta; tahtanın ağırlığı Mg ==kütle merkezinde== (ortada, x = 1,5 m).",
              goster: [
                "w1",
                "t1",
                "w2",
                "t2"
              ]
            },
            {
              metin: "N bilinmiyor. Torkları pivot etrafında alırsan N'nin kolu sıfırdır ve denklemden düşer.",
              goster: [
                "n",
                "tn"
              ]
            },
            {
              metin: "Pivot etrafında: mg(1,0) = Mg(0,5) → m = 3 kg. Sonra ΣF = 0: N = (m + M)g = 88,2 N.",
              goster: [
                "k1",
                "k2",
                "tk"
              ]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Tahta pivot üstünde yatay dengede",
          durum: "Düzgün, 3,0 m uzunluğunda 6,0 kg'lık tahta, sol ucundan 1,0 m'deki pivot üzerinde. Sol uca asılan m kütlesini ve pivotun N kuvvetini bul.",
          adimlar: [
            "Pivotu eksen seç: N'nin kolu 0 olur, torkta yer almaz.",
            "Tahtanın ağırlığı kütle merkezindedir: sol uçtan 1,5 m, pivotun 0,5 m sağında; saat yönünde tork yapar.",
            "Στ = 0: mg(1,0) − Mg(0,5) = 0 → m = 6,0 × 0,5 / 1,0 = 3,0 kg.",
            "ΣF = 0: N = (m + M)g = 9,0 × 9,8 = 88,2 N.",
            "Kontrol: pivotu sol uca alsan N(1,0) = Mg(1,5) → N = 88,2 N; aynı sonuç, pivot seçimi keyfidir.",
            "✍️ Sınavda böyle yaz: *I choose the pivot at the support, so the normal force exerts no torque about it.*"
          ],
          sonuc: "m = 3,0 kg, N = 88,2 N"
        }
      ]
    },
    {
      baslik: "Newton'un 2. yasası dönme formunda",
      kisa: "α = Στ/I: tork ivmelendirir, eylemsizlik momenti direnir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "α = Στ / I", alt: "dönme" },
            "↔",
            { t: "a = ΣF / m", alt: "öteleme" }
          ],
          aciklama: "α, net torkla doğru orantılı ve aynı yönlü; I ile ters orantılıdır. Dönen bir rigid sistemi tam çözmek için öteleme ve dönme denklemlerini ayrı ayrı yazman gerekebilir. ✍️ Sınavda böyle yaz: *Since τ_net = Iα, doubling I with the same torque halves α.*"
        },
        {
          tip: "grafik",
          baslik: "α = τ/I: I büyüdükçe α küçülür",
          xlabel: "I (kg·m²)",
          ylabel: "α (rad/s²)",
          xmax: 7,
          ymax: 14,
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
            { v: 8, label: "8" },
            { v: 10, label: "10" },
            { v: 12, label: "12" }
          ],
          ogeler: [
            {
              id: "c1",
              tip: "egri",
              noktalar: [
                [0.9, 13.333], [1.05, 11.429], [1.2, 10], [1.35, 8.889], [1.5, 8], [1.65, 7.273],
                [1.8, 6.667], [1.95, 6.154], [2.1, 5.714], [2.25, 5.333], [2.4, 5], [2.55, 4.706],
                [2.7, 4.444], [2.85, 4.211], [3, 4], [3.15, 3.81], [3.3, 3.636], [3.45, 3.478],
                [3.6, 3.333], [3.75, 3.2], [3.9, 3.077], [4.05, 2.963], [4.2, 2.857], [4.35, 2.759],
                [4.5, 2.667], [4.65, 2.581], [4.8, 2.5], [4.95, 2.424], [5.1, 2.353], [5.25, 2.286],
                [5.4, 2.222], [5.55, 2.162], [5.7, 2.105], [5.85, 2.051], [6, 2]
              ],
              renk: 0
            },
            { id: "p2", tip: "nokta", x: 2, y: 6, renk: 1, etiket: "6", kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 3, renk: 2, etiket: "3", kilavuz: true, gizli: true },
            {
              id: "c2",
              tip: "egri",
              noktalar: [
                [1.8, 13.333], [2, 12], [2.2, 10.909], [2.4, 10], [2.6, 9.231], [2.8, 8.571],
                [3, 8], [3.2, 7.5], [3.4, 7.059], [3.6, 6.667], [3.8, 6.316], [4, 6],
                [4.2, 5.714], [4.4, 5.455], [4.6, 5.217], [4.8, 5], [5, 4.8], [5.2, 4.615],
                [5.4, 4.444], [5.6, 4.286], [5.8, 4.138], [6, 4]
              ],
              renk: 3,
              kesik: true,
              gizli: true
            },
            {
              id: "p2b",
              tip: "nokta",
              x: 2,
              y: 12,
              renk: 3,
              etiket: "12",
              kilavuz: true,
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Sabit net tork τ = 12 N·m: α = 12/I. I büyüdükçe α küçülür; eğri bir hiperboldür."
            },
            {
              metin: "I = 2 kg·m²: α = 6 rad/s².",
              goster: [
                "p2"
              ]
            },
            {
              metin: "I iki katına çıkıp 4 olunca ==α yarıya iner==: 3 rad/s².",
              goster: [
                "p4"
              ]
            },
            {
              metin: "Tork iki katına (24 N·m) çıkarsa tüm eğri iki kat yükselir: I = 2'de α = 12 rad/s².",
              goster: [
                "c2",
                "p2b"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Kütleli makara: iki taraftaki gerilme farklı",
      kisa: "Makara kütleliyse iki taraftaki gerilmeler farklıdır; fark makarayı döndürür.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "m₁ = 3 kg, m₂ = 1 kg, disk makara M = 2 kg, R = 0,25 m",
          durum: "İp makarada kaymıyor. Sistem durgun bırakılıyor. İvme a, gerilmeler T₁ ve T₂ ile makaranın α'sını bul.",
          adimlar: [
            "m₁ aşağı (öteleme): m₁g − T₁ = m₁a.",
            "m₂ yukarı (öteleme): T₂ − m₂g = m₂a.",
            "Makara (dönme): (T₁ − T₂)R = Iα; I = ½MR² ve α = a/R → T₁ − T₂ = ½Ma.",
            "Üçünü topla: (m₁ − m₂)g = (m₁ + m₂ + ½M)a → a = 2 × 9,8 / 5 = 3,92 m/s².",
            "T₁ = m₁(g − a) = 3 × 5,88 = 17,64 N; T₂ = m₂(g + a) = 1 × 13,72 = 13,72 N.",
            "Kontrol: T₁ − T₂ = 3,92 N = ½Ma ✓. α = a/R = 3,92 / 0,25 = 15,68 rad/s².",
            "✍️ Sınavda böyle yaz: *I apply Newton's second law to each mass and to the pulley separately, and link them with a = Rα.*"
          ],
          sonuc: "a = 3,92 m/s²; T₁ = 17,64 N, T₂ = 13,72 N; α = 15,68 rad/s²"
        },
        {
          tip: "tuzak",
          baslik: "Kütleli makarada T₁ = T₂ değildir",
          metin: "Kütlesiz makarada ipin her yerinde gerilme aynıdır. Kütleli makarada gerilmelerin farkı makarayı döndüren net torku verir: (T₁ − T₂)R = Iα.",
          yanlis: "Aynı ipin iki ucunda gerilme hep eşittir.",
          dogru: "Kütleli makarada T₁ ≠ T₂. Her kütle için ΣF = ma, makara için Στ = Iα yaz; a = Rα ile bağla."
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
            "*Rotational equilibrium*: Στ = 0 ise ω sabittir (sıfır olması gerekmez); Στ ≠ 0 ise ω değişir.",
            "Ötelemede denge (ΣF = 0) ile dönmede denge (Στ = 0) ayrı koşullardır; biri olmadan diğeri olabilir.",
            "Denge problemlerinde pivot seçimi keyfidir; bilinmeyen kuvvetin üstüne seçersen o kuvvet torktan düşer.",
            "Çubuğun ağırlığı kütle merkezinde etki eder; torkta hesaba kat.",
            "α = Στ/I: α net torkla doğru orantılı ve aynı yönlüdür, I ile ters orantılıdır (I iki kat → α yarı).",
            "Dönen rigid sistemde öteleme ve dönme denklemlerini ayrı ayrı yaz ve a = Rα ile bağla.",
            "Kütleli makarada T₁ ≠ T₂; fark net torku verir: (T₁ − T₂)R = Iα.",
            "Gerekçede yalnızca yasanın adını yazma; torkların toplamını ve nedensel adımı yaz."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A wheel rotates about a fixed axle with a constant angular velocity. Which of the following must be true?",
      opts: [
        "The net torque on the wheel is zero.",
        "No torque acts on the wheel.",
        "The wheel is at rest.",
        "The angular acceleration of the wheel is increasing."
      ],
      a: 0,
      why: "Açısal hız sabitse α = 0, yani net tork sıfırdır. B en çekici yanlış şık: tork sıfır olmak zorunda değil, torklar birbirini götürüyor olabilir (ör. sürtünme torku ve motor torku)."
    },
    {
      q: "A uniform meter stick of mass 0.80 kg is balanced horizontally on a pivot at the 40 cm mark. A block of mass m hangs from the 0 cm end. What is m?",
      opts: [
        "0.10 kg",
        "0.40 kg",
        "1.0 kg",
        "0.20 kg"
      ],
      a: 3,
      why: "Çubuğun ağırlığı 50 cm işaretinde, pivotun 0,10 m sağında: m(0,40) = 0,80(0,10) → m = 0,20 kg. C en çekici yanlış şık: tahtanın ağırlığının kolunu 0,50 m almak (pivot yerine uçtan ölçmek)."
    },
    {
      q: "Each wheel in the table is free to rotate about a fixed axis. The table gives the net torque on each wheel and its rotational inertia about the axis. Which wheel has the greatest angular acceleration?",
      fig: {
        type: "table",
        caption: "Four wheels",
        head: [
          "Wheel",
          "Net torque (N·m)",
          "Rotational inertia (kg·m²)"
        ],
        rows: [
          [
            "A",
            "12",
            "4"
          ],
          [
            "B",
            "6",
            "0.5"
          ],
          [
            "C",
            "8",
            "1"
          ],
          [
            "D",
            "20",
            "5"
          ]
        ]
      },
      opts: [
        "A",
        "B",
        "C",
        "D"
      ],
      a: 1,
      why: "α = τ/I: A 3, B 12, C 8, D 4 rad/s². D en çekici yanlış şık: tork en büyük ama I da büyük; α oranla belirlenir."
    },
    {
      q: "A block of mass m hangs from a light string wrapped around a uniform disk pulley of mass M and radius R. The pulley rotates without friction about its center and the string does not slip. What is the acceleration of the block?",
      opts: [
        "mg/(m + M/2)",
        "g",
        "mg/(m + M)",
        "mg/(m + 2M)"
      ],
      a: 0,
      why: "mg − T = ma ve TR = (½MR²)(a/R) → T = ½Ma; böylece a = mg/(m + M/2). B en çekici yanlış şık: makara kütlesiz gibi serbest düşüş."
    },
    {
      q: "Two blocks of different masses hang from a string that passes over a pulley with nonzero rotational inertia. The string does not slip, and the heavier block descends after release. Compared with the tension in the part of the string attached to the lighter block, the tension in the part attached to the heavier block is",
      opts: [
        "equal, because it is the same string",
        "smaller, because the heavier block accelerates downward",
        "greater, because the difference in tensions provides the net torque on the pulley",
        "equal to the weight of the heavier block"
      ],
      a: 2,
      why: "Makara α ile hızlanıyorsa üzerine net tork olmalı: (T₁ − T₂)R = Iα > 0, yani ağır tarafın gerilmesi büyüktür. A en çekici yanlış şık: kütlesiz makara için doğrudur, kütleli makara için değil."
    }
  ]
};
