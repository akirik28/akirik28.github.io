/* Kitpath not defteri · pe903 · 9.3 Elektrik Enerjisinin Korunumu
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 9, Topic 9.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe903",
  amac: "Bu konu yüklü bir parçacığın potansiyel farkı boyunca hareket ederken enerjisinin nasıl değiştiğini anlatıyor: ΔU_E = qΔV ve enerji korunumu. Yükün işaretine göre kinetik enerjinin artıp azalacağını ve eV birimini öğreneceksin.",
  bolumler: [
    {
      baslik: "Enerji bütçesi: ΔU_E = qΔV",
      kisa: "Yük ΔV kadar potansiyel farkı geçince U_E, qΔV kadar değişir; toplam enerji sabit kalır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "ΔU_E" },
            "=",
            { t: "qΔV", alt: "q işaretiyle yazılır" },
            "→",
            { t: "K_i + qV_i" },
            "=",
            { t: "K_f + qV_f", alt: "yalnızca elektrik kuvveti iş yapıyorsa" }
          ],
          aciklama: "ΔU_E yoldan bağımsızdır; yalnızca başlangıç ve son potansiyel önemlidir. Elektron için q = −e yazılır."
        },
        {
          tip: "grafik",
          baslik: "Levhalar arasında proton: enerji diyagramı",
          xlabel: "x (cm)",
          ylabel: "enerji (eV)",
          xmax: 5,
          ymax: 10,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          yticks: [
            { v: 2, label: "50" },
            { v: 4, label: "100" },
            { v: 6, label: "150" },
            { v: 8, label: "200" }
          ],
          ogeler: [
            { id: "pl", tip: "yazi", x: 0.2, y: 9.3, metin: "sol levha: 200 V", hiza: "start" },
            { id: "pr", tip: "yazi", x: 4, y: 9.3, metin: "sağ levha: 0 V", hiza: "end" },
            { id: "u", tip: "cizgi", from: [0, 8], to: [4, 0], renk: 1, etiket: "U_E", gizli: true },
            { id: "t", tip: "cizgi", from: [0, 8], to: [4.6, 8], renk: 3, kesik: true, etiket: "U_E + K", gizli: true },
            { id: "kk", tip: "cizgi", from: [0, 0], to: [4, 8], renk: 2, etiket: "K", gizli: true },
            { id: "m", tip: "nokta", x: 2, y: 4, renk: 3, etiket: "U_E = K = 100 eV", kilavuz: true, gizli: true }
          ],
          durumlar: [
            {
              metin: "Sol levha 200 V, sağ levha 0 V, aralık 4,0 cm (E = 5,0×10³ V/m). Proton sol levhadan durgun bırakılıyor. U_E = eV: başta 200 eV, sağda 0.",
              goster: ["u"]
            },
            {
              metin: "Toplam enerji sabit: K = 0 iken U_E + K = 200 eV, hareket boyunca da öyle kalır.",
              goster: ["t"]
            },
            {
              metin: "Proton alanla aynı yönde ilerler, U_E azalırken K artar: K = 200 eV − U_E.",
              goster: ["kk"]
            },
            {
              metin: "Ortada (x = 2,0 cm): V = 100 V, U_E = 100 eV, K = 100 eV.",
              goster: ["m"]
            },
            {
              metin: "Sağ levhada K = qΔV = 200 eV = 3,2×10⁻¹⁷ J. v = √(2K/m) = √(2 × 3,2×10⁻¹⁷ / 1,67×10⁻²⁷) = 1,96×10⁵ m/s."
            }
          ]
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: enerji",
              metin: "\"No nonconservative forces act, so K_i + qV_i = K_f + qV_f.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: yoldan bağımsız",
              metin: "\"ΔU_E = qΔV depends only on the initial and final potentials, not on the path.\""
            }
          ]
        }
      ]
    },
    {
      baslik: "Yükün işareti yönü belirler",
      kisa: "Pozitif yük düşük V'ye, negatif yük yüksek V'ye giderken kinetik enerji kazanır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "q ve ΔV'nin işareti → enerji",
          head: ["Yük", "Hareket", "ΔU_E = qΔV", "Kinetik enerji K"],
          rows: [
            ["+q", "yüksek V → düşük V (ΔV < 0)", "negatif (azalır)", "artar"],
            ["+q", "düşük V → yüksek V (ΔV > 0)", "pozitif (artar)", "azalır"],
            ["−q", "yüksek V → düşük V (ΔV < 0)", "pozitif (artar)", "azalır"],
            ["−q", "düşük V → yüksek V (ΔV > 0)", "negatif (azalır)", "artar"]
          ],
          vurgu: 3,
          not: "Kural: yalnızca elektrik kuvveti varsa serbest bırakılan yük U_E'sini azaltacak yöne gider; K, o kadar artar."
        },
        {
          tip: "ikili",
          sol: {
            ikon: "➕",
            baslik: "+q (örn. proton)",
            maddeler: [
              "Serbest bırakılınca düşük V'ye gider",
              "E ile aynı yönde ivmelenir",
              "U_E = qV, V ile aynı işaretli"
            ]
          },
          sag: {
            ikon: "➖",
            baslik: "−q (örn. elektron)",
            maddeler: [
              "Serbest bırakılınca yüksek V'ye gider",
              "E'nin tersi yönde ivmelenir",
              "U_E = qV, V ile zıt işaretli"
            ]
          },
          oyun: [
            {
              metin: "200 V'luk farkı yüksekten alçağa geçerken 200 eV kazanır.",
              cevap: "sol",
              neden: "q = +e: ΔU_E = e(−200 V) = −200 eV, yani K = +200 eV."
            },
            {
              metin: "200 V'luk farkı alçaktan yükseğe geçerken 200 eV kazanır.",
              cevap: "sag",
              neden: "q = −e: ΔU_E = (−e)(+200 V) = −200 eV, yani K = +200 eV."
            },
            { metin: "Alan çizgileri boyunca ilerler.", cevap: "sol", neden: "Pozitif yüke kuvvet E yönündedir." },
            { metin: "Alan çizgilerine ters yönde ilerler.", cevap: "sag", neden: "Negatif yüke kuvvet E'nin tersidir." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Elektron için q'nun işareti",
          metin: "Elektron yüksek V'ye giderken ΔV pozitiftir ama q negatiftir; çarpım negatif çıkar ve kinetik enerji artar.",
          yanlis: "Elektron yüksek V'ye giderken ΔV > 0 olduğundan enerji kazanmaz.",
          dogru: "ΔU_E = (−e)(+ΔV) < 0, bu yüzden K artar. Sınavda böyle yaz: \"The electron has negative charge, so it gains kinetic energy moving toward higher potential.\""
        }
      ]
    },
    {
      baslik: "Elektronvolt (eV)",
      kisa: "1 eV, elementer yükün 1 V'luk farkta kazandığı enerjidir: 1,60×10⁻¹⁹ J.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔬",
              terim: "Electronvolt",
              tr: "elektronvolt",
              tanim: "Elementer yükün (e) 1 V'luk potansiyel farkından geçerken kazandığı enerji: 1 eV = 1,60×10⁻¹⁹ J.",
              ornek: "200 V ile hızlanan elektron 200 eV kazanır; joule'e çevirince 3,2×10⁻¹⁷ J."
            },
            {
              ikon: "🚀",
              terim: "Accelerating potential",
              tr: "hızlandırma potansiyeli",
              tanim: "Durgun yükü hızlandıran ΔV: K = |q|ΔV. Yükü e olan parçacık için K, ΔV'nin sayısal değeri kadar eV'dir.",
              ornek: "Proton 500 V ile hızlanırsa K = 500 eV olur."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Elektronu 200 V ile hızlandır",
          durum: "Durgun bir elektron 200 V'luk potansiyel farkıyla hızlandırılıyor. Kinetik enerjisini (eV ve J) ve hızını bul. m_e = 9,11×10⁻³¹ kg.",
          adimlar: [
            "Enerji korunumu: K_f = −ΔU_E = −qΔV. Elektron q = −e ile yüksek V'ye gider: ΔV = +200 V.",
            "K_f = −(−e)(+200 V) = +200 eV.",
            "Joule'e çevir: 200 × 1,60×10⁻¹⁹ = 3,2×10⁻¹⁷ J.",
            "K = ½mv² → v = √(2K/m) = √(2 × 3,2×10⁻¹⁷ / 9,11×10⁻³¹) = √(7,03×10¹³).",
            "v = 8,4×10⁶ m/s (ışık hızının yaklaşık %2,8'i; klasik formül geçerli). Aynı ΔV ile proton yalnızca 1,96×10⁵ m/s'ye çıkar: kütle büyük."
          ],
          sonuc: "K = 200 eV = 3,2×10⁻¹⁷ J; v ≈ 8,4×10⁶ m/s"
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: çevirme",
              metin: "\"1 eV = 1.60×10⁻¹⁹ J, so K = 200 eV = 3.2×10⁻¹⁷ J.\""
            },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: hız", metin: "\"K = ½mv², so v = √(2K/m).\"" }
          ]
        }
      ]
    },
    {
      baslik: "Halka ekseninde bırakılan yük",
      kisa: "Bırakılan yükün hızı, enerji diyagramından ve korunumdan bulunur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Halka ekseninde U_E(x): Q = +5,0 nC, R = 0,30 m, q = +2,0 μC",
          xlabel: "x (m)",
          ylabel: "enerji (μJ)",
          xmax: 10,
          ymax: 11,
          xticks: [
            { v: 2, label: "0,4" },
            { v: 4, label: "0,8" },
            { v: 6, label: "1,2" },
            { v: 8, label: "1,6" },
            { v: 10, label: "2,0" }
          ],
          yticks: [
            { v: 2, label: "60" },
            { v: 4, label: "120" },
            { v: 6, label: "180" },
            { v: 8, label: "240" },
            { v: 10, label: "300" }
          ],
          ogeler: [
            {
              id: "u",
              tip: "egri",
              noktalar: [
                [0, 10], [0.5, 9.487], [1, 8.321], [1.5, 7.071], [2, 6], [2.5, 5.145],
                [3, 4.472], [3.5, 3.939], [4, 3.511], [4.5, 3.162], [5, 2.873], [5.5, 2.631],
                [6, 2.425], [6.5, 2.249], [7, 2.095], [7.5, 1.961], [8, 1.843], [8.5, 1.738],
                [9, 1.644], [9.5, 1.56], [10, 1.483]
              ],
              renk: 1,
              etiket: "U_E"
            },
            { id: "e", tip: "cizgi", from: [2, 6], to: [10, 6], renk: 3, kesik: true, etiket: "E = 180 μJ", gizli: true },
            { id: "s", tip: "nokta", x: 2, y: 6, renk: 3, etiket: "bırakıldı", kilavuz: true, gizli: true },
            { id: "k", tip: "ok", from: [4, 3.511], to: [4, 6], renk: 2, gizli: true },
            { id: "kt", tip: "yazi", x: 4.9, y: 4.6, metin: "K ≈ 75 μJ", hiza: "start", gizli: true },
            { id: "kf", tip: "yazi", x: 9.8, y: 7, metin: "K → 180 μJ", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Halka ekseninde U_E(x) = qkQ/√(R² + x²): merkezde 300 μJ, uzaklaştıkça 0'a düşüyor." },
            {
              metin: "q, x = 0,40 m'de durgun bırakılıyor: U_E = 180 μJ, K = 0. Toplam enerji 180 μJ'de sabit.",
              goster: ["s", "e"]
            },
            {
              metin: "Aynı işaretli yükler birbirini itiyor, q uzaklaşıyor. x = 0,80 m'de U_E ≈ 105 μJ olduğundan K = 180 − 105 ≈ 75 μJ.",
              goster: ["k", "kt"]
            },
            {
              metin: "Çok uzakta U_E → 0: bütün enerji kinetik, K = 180 μJ. v = √(2K/m) = 0,60 m/s.",
              goster: ["kf"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Halkadan uzaklaşan yükün hızı",
          durum: "Q = +5,0 nC düzgün yüklü halka, R = 0,30 m. q = +2,0 μC ve m = 1,0 g olan parçacık eksende, merkezden 0,40 m uzakta durgun bırakılıyor. Çok uzaktaki hızı kaç m/s olur?",
          adimlar: [
            "Başlangıç potansiyeli: V_i = kQ/√(R² + x²) = (9×10⁹)(5,0×10⁻⁹)/0,50 = 45/0,50 = 90 V.",
            "Çok uzakta V_f = 0. Parçacık yüksek V'den alçak V'ye gidiyor (q > 0).",
            "Enerji korunumu: K_i + qV_i = K_f + qV_f → 0 + qV_i = K_f + 0.",
            "K_f = qV_i = (2,0×10⁻⁶)(90) = 1,8×10⁻⁴ J.",
            "v = √(2K_f/m) = √(2 × 1,8×10⁻⁴ / 1,0×10⁻³) = √0,36 = 0,60 m/s."
          ],
          sonuc: "v = 0,60 m/s"
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: alan yönü",
              metin: "\"The field points toward decreasing V, so the positive charge accelerates away from the ring and K increases as U_E decreases.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: diyagram",
              metin: "\"K + U_E stays constant, so K is the gap between the total-energy line and the U_E curve.\""
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
            "ΔU_E = qΔV: q işaretiyle yazılır, yoldan bağımsızdır.",
            "Yalnızca elektrik kuvveti varsa K_i + qV_i = K_f + qV_f.",
            "Pozitif yük düşük V'ye, negatif yük yüksek V'ye giderken K artar.",
            "Elektron için q = −e: ΔV > 0 iken ΔU_E < 0 olur, K artar.",
            "1 eV = 1,60×10⁻¹⁹ J; yükü e olan parçacık ΔV volt ile hızlanırsa K = ΔV eV.",
            "200 V ile hızlanınca proton 1,96×10⁵ m/s, elektron 8,4×10⁶ m/s hıza ulaşır.",
            "Enerji diyagramında K, toplam enerji çizgisi ile U_E eğrisi arasındaki farktır.",
            "Halka ekseninde V = kQ/√(R² + x²); uzakta bütün U_E kinetik enerjiye döner (örnekte v = 0,60 m/s)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "An electron is accelerated from rest through a potential difference of 500 V. What is its kinetic energy afterward? (e = 1.60×10⁻¹⁹ C)",
      opts: ["500 J", "3.1×10²¹ J", "8.0×10⁻¹⁷ J", "1.6×10⁻¹⁹ J"],
      a: 2,
      why: "K = |q|ΔV = e(500 V) = 500 eV = 500 × 1,60×10⁻¹⁹ J = 8,0×10⁻¹⁷ J. En çekici yanlış şık A: 500 değeri eV cinsindendir, e ile çarpmadan joule yazılamaz."
    },
    {
      q: "The table gives the electric potential at four points. A proton is released from rest at point A and moves to point B under the influence of the electric force alone. What is its speed at B? (m_p = 1.67×10⁻²⁷ kg, e = 1.60×10⁻¹⁹ C)",
      fig: {
        type: "table",
        caption: "Electric potential at four points",
        head: ["Point", "A", "B", "C", "D"],
        rows: [
          ["V (V)", "80", "30", "0", "120"]
        ]
      },
      opts: ["6.9×10⁴ m/s", "9.8×10⁴ m/s", "1.2×10⁵ m/s", "4.2×10⁶ m/s"],
      a: 1,
      why: "ΔV = 30 − 80 = −50 V; ΔU_E = e(−50 V) = −50 eV, yani K = 50 eV = 8,0×10⁻¹⁸ J. v = √(2K/m_p) = 9,8×10⁴ m/s. En çekici yanlış şık C: yalnızca V_A = 80 V'u kullanmak; fark 50 V."
    },
    {
      q: "In a region the electric potential is V = 50x (V in volts, x in meters). An electron is released from rest at x = 0. Which statement is correct?",
      opts: [
        "It moves in the +x direction, its kinetic energy increases and its U_E decreases.",
        "It moves in the +x direction, its kinetic energy increases and its U_E increases.",
        "It moves in the −x direction, its kinetic energy increases and its U_E decreases.",
        "It stays at rest because V = 0 at its starting point."
      ],
      a: 0,
      why: "E_x = −dV/dx = −50 V/m, alan −x yönünde; elektron negatif olduğundan kuvvet +x yönündedir, yani yüksek V'ye gider. U_E = qV = −eV azalır, K artar. En çekici yanlış şık D: V = 0 olması alanın ya da kuvvetin sıfır olduğu anlamına gelmez."
    },
    {
      q: "A proton is released from rest in a uniform electric field. The graph shows three energy curves as the proton moves along the field. Which line represents the kinetic energy of the proton?",
      fig: {
        type: "graph",
        xlabel: "position x",
        ylabel: "energy",
        xmax: 5,
        ymax: 10,
        lines: [
          { from: [0, 8], to: [4, 0], label: "A" },
          { from: [0, 8], to: [4.6, 8], label: "B", dash: true },
          { from: [0, 0], to: [4, 8], label: "C" }
        ],
        xticks: [],
        yticks: []
      },
      opts: ["Line A", "Line B", "Line C", "None; the kinetic energy stays constant"],
      a: 2,
      why: "Proton durgun bırakıldı, K = 0'dan başlayıp artar: C. Çizgi A potansiyel enerjidir (azalıyor), B ise toplam enerjidir (sabit) ve K + U_E = B. En çekici yanlış şık B: sabit çizgiyi kinetik enerji sanmak."
    },
    {
      q: "A ring of radius R carries a uniformly distributed positive charge Q. A particle of mass m and positive charge q is released from rest on the axis of the ring at a distance √3 R from its center. What is the speed of the particle when it is very far from the ring? (Neglect gravity.)",
      opts: ["√(2kQq/(mR))", "√(kQq/(2mR))", "√(kQq/(4mR))", "√(kQq/(mR))"],
      a: 3,
      why: "r = √(R² + 3R²) = 2R, V = kQ/(2R). Enerji korunumu: ½mv² = qV = kQq/(2R) → v = √(kQq/(mR)). En çekici yanlış şık A: halka merkezindeki V = kQ/R değerini kullanmak (r = R almak)."
    }
  ]
};
