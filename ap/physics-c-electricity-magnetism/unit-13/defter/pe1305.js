/* Kitpath not defteri · pe1305 · 13.6 LC Devreleri
   Kaynak: kaynak/ced-physc.md Unit 13 (13.6.A), 2025 Chief Reader hataları ve LC–yay analojisi. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1305",
  amac: "Bu konu yüklü bir kondansatörün bobinle bağlanınca nasıl salındığını anlatıyor. Yük ve akımın zamana göre kosinüs ve sinüs oluşunu, ω = 1/√(LC) frekansını ve enerjinin gidip gelişini yay–kütle benzetmesiyle öğreneceksin.",
  bolumler: [
    {
      baslik: "LC devresi nasıl salınır?",
      kisa: "Enerji, kondansatörün elektrik alanıyla bobinin manyetik alanı arasında gidip gelir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔄",
              terim: "LC circuit",
              tr: "LC devresi",
              tanim: "Yalnız yüklü bir kondansatör ve bir bobinden oluşur; ideal olduğu için direnç yoktur ve enerji ısıya gitmez.",
              ornek: "Radyo alıcısının istasyon seçen kısmı böyle bir devredir."
            },
            {
              ikon: "🎢",
              terim: "Simple harmonic motion (SHM)",
              tr: "basit harmonik hareket",
              tanim: "Geri çağırıcı etkinin uzaklıkla orantılı olduğu salınım: d²x/dt² = −(k/m)x. Çözüm kosinüs ya da sinüstür.",
              ornek: "Yaydaki kütle gibi LC devresinde de yük aynı denkleme uyar."
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Bir salınımın evreleri (kondansatör t = 0'da dolu)",
          adimlar: [
            { baslik: "t = 0: kondansatör dolu", metin: "q = Q ve I = 0. Tüm enerji elektrik alanda: U = Q²/2C." },
            {
              baslik: "0 → T/4: boşalma",
              metin: "Kondansatör bobin üzerinden boşalır. Bobin akımın değişmesine karşı koyduğu için I yavaşça artar."
            },
            {
              baslik: "T/4: kondansatör boş, akım en büyük",
              metin: "q = 0 ama I = I_max. Tüm enerji bobinin manyetik alanında: ½LI_max²."
            },
            {
              baslik: "T/4 → T/2: bobin akımı sürdürür",
              metin: "Akım aynı yönde sürer ve kondansatörü ters yönde doldurur. T/2'de q = −Q ve I = 0."
            },
            {
              baslik: "Sonra geri döner",
              metin: "Olay ters yönde tekrarlanır ve T sonra başa dönülür. Direnç yoksa salınım sönmez."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "ω", alt: "açısal frekans (rad/s)" },
            "=",
            { t: "1 / √(LC)", alt: "T = 2π√(LC)" }
          ],
          aciklama: "Çevrim kuralı: q/C = L dI/dt ve I = −dq/dt. Birleştirince d²q/dt² = −q/(LC): yaydaki kütlenin denklemi. Çözüm q = Q cosωt, I = Qω sinωt. Sınavda böyle yaz: *The loop rule gives L d²q/dt² + q/C = 0, which has the form of SHM with ω = 1/√(LC).*"
        }
      ]
    },
    {
      baslik: "q(t) ve I(t): kosinüs ve sinüs",
      kisa: "q = Q cosωt iken I = Qω sinωt; yük sıfırken akım en büyüktür.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Yük ve akım (her biri kendi tepe değerine oranlanmış)",
          xlabel: "t",
          ylabel: "q/Q ve I/I_max",
          xmax: 2,
          ymax: 4,
          xticks: [
            { v: 0.5, label: "T/2" },
            { v: 1, label: "T" },
            { v: 1.5, label: "3T/2" },
            { v: 2, label: "2T" }
          ],
          yticks: [
            { v: 3.7, label: "+1" },
            { v: 2, label: "0" },
            { v: 0.3, label: "−1" }
          ],
          ogeler: [
            { id: "ax0", tip: "cizgi", from: [0, 2], to: [2, 2], renk: 3, kesik: true },
            { id: "p0", tip: "nokta", x: 0, y: 3.7, renk: 3, etiket: "q = Q, I = 0" },
            {
              id: "qC",
              tip: "egri",
              noktalar: [
                [0, 3.7], [0.063, 3.571], [0.125, 3.202], [0.188, 2.651], [0.25, 2],
                [0.313, 1.349], [0.375, 0.798], [0.438, 0.429], [0.5, 0.3], [0.563, 0.429],
                [0.625, 0.798], [0.688, 1.349], [0.75, 2], [0.813, 2.651], [0.875, 3.202],
                [0.938, 3.571], [1, 3.7], [1.063, 3.571], [1.125, 3.202], [1.188, 2.651],
                [1.25, 2], [1.313, 1.349], [1.375, 0.798], [1.438, 0.429], [1.5, 0.3],
                [1.563, 0.429], [1.625, 0.798], [1.688, 1.349], [1.75, 2], [1.813, 2.651],
                [1.875, 3.202], [1.938, 3.571], [2, 3.7]
              ],
              renk: 0,
              etiket: "q",
              gizli: true
            },
            {
              id: "IC",
              tip: "egri",
              noktalar: [
                [0, 2], [0.063, 2.651], [0.125, 3.202], [0.188, 3.571], [0.25, 3.7],
                [0.313, 3.571], [0.375, 3.202], [0.438, 2.651], [0.5, 2], [0.563, 1.349],
                [0.625, 0.798], [0.688, 0.429], [0.75, 0.3], [0.813, 0.429], [0.875, 0.798],
                [0.938, 1.349], [1, 2], [1.063, 2.651], [1.125, 3.202], [1.188, 3.571],
                [1.25, 3.7], [1.313, 3.571], [1.375, 3.202], [1.438, 2.651], [1.5, 2],
                [1.563, 1.349], [1.625, 0.798], [1.688, 0.429], [1.75, 0.3], [1.813, 0.429],
                [1.875, 0.798], [1.938, 1.349], [2, 2]
              ],
              renk: 1,
              etiket: "I",
              gizli: true
            },
            { id: "p1", tip: "nokta", x: 0.25, y: 2, renk: 2, etiket: "q = 0", gizli: true },
            { id: "p2", tip: "nokta", x: 0.25, y: 3.7, renk: 1, etiket: "I max", gizli: true }
          ],
          durumlar: [
            { metin: "t = 0: kondansatör dolu. ==q = Q== ve I = 0; bobinde henüz akım yok." },
            {
              metin: "Kondansatör boşalırken yük kosinüs gibi azalır: q = Q cosωt. Yük, yaydaki x gibidir.",
              goster: ["qC"]
            },
            { metin: "T/4: q = 0 ama akım ==en büyük==: I = −dq/dt = Qω sinωt.", goster: ["IC", "p1", "p2"] },
            {
              metin: "Aralarında çeyrek periyot var: yük en büyükken akım sıfır, yük sıfırken akım en büyük. T/2'de q = −Q.",
              gizle: ["p0"]
            },
            { metin: "Periyot T = 2π√(LC). L = 0,25 H ve C = 1,0 μF için ω = 2,0 × 10³ rad/s ve T ≈ 3,1 ms." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Yay–kütle benzetmesi",
          head: ["Yay–kütle", "LC devresi"],
          rows: [
            ["konum x", "yük q"],
            ["hız v", "akım I"],
            ["kütle m (eylemsizlik)", "indüktans L"],
            ["yay sabiti k", "1/C"],
            ["ω = √(k/m)", "ω = √((1/C)/L) = 1/√(LC)"],
            ["K = ½mv²", "U_L = ½LI²"],
            ["U = ½kx²", "U_C = q²/2C"]
          ],
          vurgu: 3,
          not: "Sınavda böyle yaz: *By analogy with a mass on a spring, q plays the role of x and I of v, with L ↔ m and 1/C ↔ k.*"
        }
      ]
    },
    {
      baslik: "Enerji sürekli yer değiştirir",
      kisa: "Toplam enerji sabit; U_C ve U_L yükün frekansının iki katıyla salınır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "U_C, U_L ve toplam (Q = 10 μC, C = 1,0 μF)",
          xlabel: "t",
          ylabel: "enerji (μJ)",
          xmax: 2,
          ymax: 55,
          xticks: [
            { v: 0.5, label: "T/2" },
            { v: 1, label: "T" },
            { v: 1.5, label: "3T/2" },
            { v: 2, label: "2T" }
          ],
          yticks: [
            { v: 25, label: "25" },
            { v: 50, label: "50" }
          ],
          ogeler: [
            { id: "tot", tip: "cizgi", from: [0, 50], to: [2, 50], renk: 3, kesik: true, etiket: "toplam" },
            {
              id: "UC",
              tip: "egri",
              noktalar: [
                [0, 50], [0.063, 42.678], [0.125, 25], [0.188, 7.322], [0.25, 0],
                [0.313, 7.322], [0.375, 25], [0.438, 42.678], [0.5, 50], [0.563, 42.678],
                [0.625, 25], [0.688, 7.322], [0.75, 0], [0.813, 7.322], [0.875, 25],
                [0.938, 42.678], [1, 50], [1.063, 42.678], [1.125, 25], [1.188, 7.322],
                [1.25, 0], [1.313, 7.322], [1.375, 25], [1.438, 42.678], [1.5, 50],
                [1.563, 42.678], [1.625, 25], [1.688, 7.322], [1.75, 0], [1.813, 7.322],
                [1.875, 25], [1.938, 42.678], [2, 50]
              ],
              renk: 0,
              etiket: "U_C",
              gizli: true
            },
            {
              id: "UL",
              tip: "egri",
              noktalar: [
                [0, 0], [0.063, 7.322], [0.125, 25], [0.188, 42.678], [0.25, 50],
                [0.313, 42.678], [0.375, 25], [0.438, 7.322], [0.5, 0], [0.563, 7.322],
                [0.625, 25], [0.688, 42.678], [0.75, 50], [0.813, 42.678], [0.875, 25],
                [0.938, 7.322], [1, 0], [1.063, 7.322], [1.125, 25], [1.188, 42.678],
                [1.25, 50], [1.313, 42.678], [1.375, 25], [1.438, 7.322], [1.5, 0],
                [1.563, 7.322], [1.625, 25], [1.688, 42.678], [1.75, 50], [1.813, 42.678],
                [1.875, 25], [1.938, 7.322], [2, 0]
              ],
              renk: 1,
              etiket: "U_L",
              gizli: true
            },
            { id: "kes", tip: "nokta", x: 0.125, y: 25, renk: 2, etiket: "eşit: 25 μJ", gizli: true }
          ],
          durumlar: [
            { metin: "Direnç yok: toplam enerji sabit, Q²/2C = (10 × 10⁻⁶)² / (2 × 1,0 × 10⁻⁶) = ==50 μJ==." },
            { metin: "Kondansatörün enerjisi U_C = q²/2C = 50 cos²ωt. t = 0'da hepsi burada.", goster: ["UC"] },
            {
              metin: "Bobinin enerjisi U_L = ½LI² = 50 sin²ωt. Kondansatör boşalınca (T/4) hepsi bobinde.",
              goster: ["UL"]
            },
            {
              metin: "İkisi her an toplam 50 μJ'dür. Enerji T/2'de bir tekrarlanır: yani ==2ω== ile salınır.",
              goster: ["kes"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Boşalan kondansatörde akım sıfır değildir",
          metin: "Kondansatör tamamen boşaldığı an bobin akımı en büyüktür. Enerji ise yükten iki kat hızlı salınır.",
          yanlis: "Kondansatör boşalınca akım da sıfırdır; enerji, yükle aynı ω ile salınır.",
          dogru: "Sınavda böyle yaz: *When q = 0 all the energy is in the inductor, so I = I_max = Q/√(LC); the energies oscillate at 2ω.*"
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: ω, T ve I_max",
      kisa: "Enerji korunumu ile I_max'ı, ω'dan periyodu bul.",
      bloklar: [
        {
          tip: "sayilar",
          ogeler: [
            { deger: 2000, sonek: " rad/s", etiket: "ω = 1/√(LC)" },
            { deger: 3.14, sonek: " ms", etiket: "periyot T = 2π/ω" },
            { deger: 20, sonek: " mA", etiket: "en büyük akım I_max" },
            { deger: 50, sonek: " μJ", etiket: "toplam enerji" }
          ]
        },
        {
          tip: "ornek",
          baslik: "L = 0,25 H, C = 1,0 μF, Q = 10 μC",
          durum: "Dolu kondansatör t = 0'da bobine bağlanıyor. ω, T, toplam enerji ve I_max'ı bul; yük Q/2 iken akımı hesapla.",
          adimlar: [
            "ω = 1/√(LC) = 1/√((0,25)(1,0 × 10⁻⁶)) = 1/(5,0 × 10⁻⁴) = 2,0 × 10³ rad/s.",
            "T = 2π/ω = 3,1 × 10⁻³ s ≈ 3,1 ms ve f = 1/T ≈ 318 Hz.",
            "Toplam enerji: Q²/2C = (1,0 × 10⁻⁵)² / (2 × 1,0 × 10⁻⁶) = 5,0 × 10⁻⁵ J.",
            "Enerji korunumu: Q²/2C = ½LI_max² ⇒ I_max = Q/√(LC) = ωQ = (2,0 × 10³)(1,0 × 10⁻⁵) = 20 mA.",
            "q = Q/2 iken U_C = ¼ toplam = 1,25 × 10⁻⁵ J, U_L = ¾ toplam = 3,75 × 10⁻⁵ J.",
            "Buradan I = √(2U_L/L) = √(2 × 3,75 × 10⁻⁵ / 0,25) = 17,3 mA (= I_max √3/2)."
          ],
          sonuc: "ω = 2,0 × 10³ rad/s; T ≈ 3,1 ms; toplam enerji 50 μJ; I_max = 20 mA"
        },
        {
          tip: "tuzak",
          baslik: "Analojide C yay sabitine denk değildir",
          metin: "Yaydaki k sert yay demektir; devrede sert yay, küçük kondansatördür. C büyürse devre yumuşar ve ω küçülür.",
          yanlis: "C ↔ k ve L ↔ k eşlemesi; ya da I ↔ x.",
          dogru: "Doğru eşleme: q ↔ x, I ↔ v, L ↔ m, 1/C ↔ k. Sınavda böyle yaz: *Since 1/C plays the role of k, doubling C makes the circuit softer and ω smaller.*"
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
            "LC devresinde enerji kondansatör ile bobin arasında gidip gelir; direnç yoksa salınım sönmez.",
            "Çevrim kuralı d²q/dt² = −q/(LC) verir: yaydaki kütle gibi SHM; ω = 1/√(LC), T = 2π√(LC).",
            "q = Q cosωt iken I = Qω sinωt; yük sıfırken akım en büyük, yük en büyükken akım sıfırdır.",
            "I_max enerji korunumundan: Q²/2C = ½LI_max², yani I_max = Q/√(LC) = ωQ.",
            "U_C = q²/2C ve U_L = ½LI²; toplam sabit, her biri 2ω ile salınır (T/2'de tekrar).",
            "Benzetme: q ↔ x, I ↔ v, L ↔ m, 1/C ↔ k.",
            "C ya da L büyürse ω küçülür, periyot uzar (T ∝ √(LC))."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "An LC circuit consists of an ideal 0.10 H inductor and a 1.0 × 10⁻⁵ F capacitor. What is the angular frequency of oscillation of the circuit?",
      opts: ["1.0 × 10³ rad/s", "1.0 × 10⁶ rad/s", "1.6 × 10² rad/s", "2.0 × 10³ rad/s"],
      a: 0,
      why: "ω = 1/√(LC) = 1/√((0,10)(1,0 × 10⁻⁵)) = 1/√(1,0 × 10⁻⁶) = 1,0 × 10³ rad/s. B şıkkı 1/LC'dir; C şıkkı frekans f = ω/2π ≈ 160 Hz'dir, açısal frekans değil."
    },
    {
      q: "A capacitor charged to charge Q is connected across an ideal inductor at t = 0. At what time is the energy stored in the inductor at its maximum for the first time (T is the period)?",
      opts: ["t = 0", "t = T/8", "t = T/4", "t = T/2"],
      a: 2,
      why: "Bobinin enerjisi akım en büyükken en büyüktür. q = Q cosωt olduğundan q = 0, yani I = I_max, t = T/4'te olur. T/2'de q = −Q ve enerji yine kondansatördedir."
    },
    {
      q: "A charged capacitor is connected to an ideal inductor, and the charge on the capacitor is measured as a function of time, as shown in the table. What is the maximum current in the circuit?",
      fig: {
        type: "table",
        head: ["t (ms)", "q (μC)"],
        rows: [["0", "+8.0"], ["1.0", "0"], ["2.0", "−8.0"], ["3.0", "0"], ["4.0", "+8.0"]],
        caption: "Charge on the capacitor"
      },
      opts: ["2.0 mA", "6.3 mA", "25 mA", "13 mA"],
      a: 3,
      why: "Yük t = 4,0 ms'de başa döndü: T = 4,0 ms, ω = 2π/T = 1,57 × 10³ rad/s. I_max = ωQ = (1,57 × 10³)(8,0 × 10⁻⁶) ≈ 1,3 × 10⁻² A = 13 mA. A şıkkı Q/T'dir."
    },
    {
      q: "In an LC circuit the capacitance is increased by a factor of 4 while the inductance is kept the same. The period of oscillation",
      opts: ["is halved", "doubles", "quadruples", "is unchanged"],
      a: 1,
      why: "T = 2π√(LC) ∝ √C. C 4 katına çıkınca T 2 katına çıkar. C şıkkı doğrusal ilişki varsayar."
    },
    {
      q: "In the analogy between an LC circuit and a mass on a spring, which pairing of quantities is correct?",
      opts: [
        "L corresponds to m, and 1/C corresponds to k",
        "L corresponds to k, and C corresponds to m",
        "C corresponds to k, and L corresponds to m",
        "I corresponds to x, and q corresponds to v"
      ],
      a: 0,
      why: "q ↔ x, I ↔ v, L ↔ m, 1/C ↔ k. Böylece ω = √(k/m) devrede √((1/C)/L) = 1/√(LC) olur. C şıkkı C ↔ k diyerek yanlış eşler."
    }
  ]
};
