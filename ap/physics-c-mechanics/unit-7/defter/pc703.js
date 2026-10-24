/* Kitpath not defteri · pc703 · 7.4 SHM'de Enerji
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc703",
  amac: "Bu konu salınan sistemde enerjinin nasıl el değiştirdiğini anlatıyor: kinetik ve yay enerjisi sürekli birbirine dönüşür, toplam ½kA² sabit kalır. Enerji-konum grafiğini, enerji çubuklarını ve sönümlü salınımın K–t eskizini öğreneceksin.",
  bolumler: [
    {
      baslik: "Toplam enerji ½kA²",
      kisa: "K + U = ½kA² her anda sabittir; uçta hepsi U, dengede hepsi K.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧲",
              terim: "Spring potential energy",
              tr: "yay potansiyel enerjisi",
              tanim: "U = ½kx². Denge konumunda sıfır (en küçük), uç noktalarda en büyüktür.",
              ornek: "x iki katına çıkınca U dört katına çıkar."
            },
            {
              ikon: "🔋",
              terim: "Mechanical energy",
              tr: "mekanik enerji",
              tanim: "E = K + U. Sürtünme yoksa sabittir; uçta K = 0 olduğu için E = ½kA².",
              ornek: "A = 0,40 m, k = 50 N/m ise E = 4,0 J."
            },
            {
              ikon: "🛑",
              terim: "Turning point",
              tr: "dönüm noktası",
              tanim: "|x| = A olan uç. Blok anlık durur (v = 0), K = 0 ve enerjinin hepsi U'dur.",
              ornek: "Salıncağın en yüksek noktası."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "U(x) parabolü ve E doğrusu (k = 50 N/m, A = 0,40 m)",
          xlabel: "x (m)",
          ylabel: "enerji (J)",
          xmax: 10,
          ymax: 5,
          xticks: [
            { v: 1, label: "−0,4" },
            { v: 3, label: "−0,2" },
            { v: 5, label: "0" },
            { v: 7, label: "0,2" },
            { v: 9, label: "0,4" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            {
              id: "u",
              tip: "egri",
              noktalar: [
                [1, 4], [1.4, 3.24], [1.8, 2.56], [2.2, 1.96], [2.6, 1.44], [3, 1],
                [3.4, 0.64], [3.8, 0.36], [4.2, 0.16], [4.6, 0.04], [5, 0], [5.4, 0.04],
                [5.8, 0.16], [6.2, 0.36], [6.6, 0.64], [7, 1], [7.4, 1.44], [7.8, 1.96],
                [8.2, 2.56], [8.6, 3.24], [9, 4]
              ],
              renk: 0,
              etiket: "U",
              gizli: true
            },
            {
              id: "e",
              tip: "cizgi",
              from: [0.6, 4],
              to: [9.4, 4],
              renk: 3,
              etiket: "E = 4 J",
              gizli: true
            },
            { id: "p1", tip: "nokta", x: 7, y: 1, renk: 1, gizli: true },
            {
              id: "d1",
              tip: "cizgi",
              from: [7, 1],
              to: [7, 4],
              renk: 2,
              kesik: true,
              etiket: "K = 3 J",
              gizli: true
            },
            {
              id: "d0",
              tip: "cizgi",
              from: [5, 0],
              to: [5, 4],
              renk: 2,
              kesik: true,
              etiket: "K = 4 J",
              gizli: true
            },
            { id: "tp", tip: "nokta", x: 9, y: 4, renk: 1, etiket: "K = 0", gizli: true }
          ],
          durumlar: [
            {
              metin: "Sürtünmesiz yay-kütle için yay enerjisi U = ½kx² bir parabol: dengede 0, uçlara doğru artıyor.",
              goster: ["u"]
            },
            {
              metin: "Toplam enerji E = ½kA² = 4,0 J yatay bir doğru. Hareket yalnız E ≥ U olan yerlerde mümkün.",
              goster: ["e"]
            },
            {
              metin: "x = 0,20 m: U = 1,0 J. Geri kalanı kinetik: K = E − U = 3,0 J.",
              goster: ["p1", "d1"]
            },
            {
              metin: "Denge konumu x = 0: U = 0, K = 4,0 J. Kinetik enerji en büyük.",
              goster: ["d0"]
            },
            {
              metin: "x = ±A: U = E, K = 0. Burası ==dönüm noktası==; blok anlık durup geri döner.",
              goster: ["tp"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "m = 0,50 kg, k = 50 N/m, A = 0,40 m",
          durum: "Toplam enerjiyi, x = 0,20 m'deki hızı ve en büyük hızı bul.",
          adimlar: [
            "E = ½kA² = ½ × 50 × 0,40² = 4,0 J.",
            "x = 0,20 m'de U = ½ × 50 × 0,20² = 1,0 J, yani K = E − U = 3,0 J.",
            "v = √(2K/m) = √(2 × 3,0 / 0,50) = √12 ≈ 3,46 m/s.",
            "Denge konumunda K = E = 4,0 J: v_max = √(2 × 4,0 / 0,50) = 4,0 m/s (Aω = 0,40 × 10 ile aynı ✓)."
          ],
          sonuc: "E = 4,0 J; x = 0,20 m'de K = 3,0 J ve v ≈ 3,5 m/s; v_max = 4,0 m/s"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*By conservation of mechanical energy, ½kA² = ½mv² + ½kx².*"
            },
            {
              ikon: "✍️",
              baslik: "Gerekçe",
              metin: "*The total energy is ½kA² because at the turning point K = 0 and all the energy is stored in the spring.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Enerji çubukları (bar chart)",
      kisa: "Konum değişirken çubuklar el değiştirir ama toplam hep aynı.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "K, U ve E çubukları (E = 4 J)",
          xlabel: "",
          ylabel: "enerji (J)",
          xmax: 10,
          ymax: 5,
          xticks: [
            { v: 2.5, label: "K" },
            { v: 5, label: "U" },
            { v: 7.5, label: "E" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            {
              id: "kb",
              tip: "alan",
              noktalar: [[1.5, 0], [3.5, 0], [3.5, 0], [1.5, 0]],
              renk: 0
            },
            {
              id: "ub",
              tip: "alan",
              noktalar: [[4, 0], [6, 0], [6, 4], [4, 4]],
              renk: 1
            },
            {
              id: "eb",
              tip: "alan",
              noktalar: [[6.5, 0], [8.5, 0], [8.5, 4], [6.5, 4]],
              renk: 3
            },
            { id: "kv", tip: "yazi", x: 2.5, y: 0.35, metin: "K = 0" },
            { id: "uv", tip: "yazi", x: 5, y: 4.35, metin: "U = 4 J" },
            { id: "ev", tip: "yazi", x: 7.5, y: 4.35, metin: "E = 4 J" }
          ],
          durumlar: [
            {
              metin: "Sağ uçta (x = +A) bırakıldı: K = 0, enerjinin hepsi yayda: U = 4 J. Toplam E = 4 J."
            },
            {
              metin: "x = 0,20 m (A/2): U = 1 J, K = 3 J. Çubuklar el değiştirdi, toplam hâlâ 4 J.",
              set: {
                kb: {
                  noktalar: [[1.5, 0], [3.5, 0], [3.5, 3], [1.5, 3]]
                },
                ub: {
                  noktalar: [[4, 0], [6, 0], [6, 1], [4, 1]]
                },
                kv: { y: 3.35, metin: "K = 3 J" },
                uv: { y: 1.35, metin: "U = 1 J" }
              }
            },
            {
              metin: "Denge konumu (x = 0): U = 0, K = 4 J. Enerjinin hepsi kinetik.",
              set: {
                kb: {
                  noktalar: [[1.5, 0], [3.5, 0], [3.5, 4], [1.5, 4]]
                },
                ub: {
                  noktalar: [[4, 0], [6, 0], [6, 0], [4, 0]]
                },
                kv: { y: 4.35, metin: "K = 4 J" },
                uv: { y: 0.35, metin: "U = 0" }
              }
            },
            {
              metin: "Sol uç (x = −A): yine K = 0, U = 4 J. Çubuklar uçta ve dengede aynı kuralla değişir.",
              set: {
                kb: {
                  noktalar: [[1.5, 0], [3.5, 0], [3.5, 0], [1.5, 0]]
                },
                ub: {
                  noktalar: [[4, 0], [6, 0], [6, 4], [4, 4]]
                },
                kv: { y: 0.35, metin: "K = 0" },
                uv: { y: 4.35, metin: "U = 4 J" }
              }
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🏃",
            baslik: "K maksimum",
            maddeler: ["Denge konumundan geçerken", "x = 0, a = 0", "Hız en büyük"]
          },
          sag: {
            ikon: "🛑",
            baslik: "U maksimum (K = 0)",
            maddeler: ["Uç noktalarda", "|x| = A, v = 0", "Yay en çok gergin ya da sıkışık"]
          },
          oyun: [
            {
              metin: "Blok denge konumundan geçiyor.",
              cevap: "sol",
              neden: "x = 0 → U = 0, enerjinin hepsi K."
            },
            {
              metin: "Blok sağ uca ulaştı ve bir an duruyor.",
              cevap: "sag",
              neden: "v = 0 → K = 0, enerjinin hepsi U."
            },
            { metin: "Yayın uzaması sıfır.", cevap: "sol", neden: "x = 0 → U = 0, K = E." },
            {
              metin: "|v| = 0 olduğu an.",
              cevap: "sag",
              neden: "v = 0 ise K = 0 ve U = E: dönüm noktası."
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The sum of the bars is the same in both diagrams because mechanical energy is conserved.*"
            },
            {
              ikon: "✍️",
              baslik: "Dengede",
              metin: "*At the equilibrium position all of the energy is kinetic, so the speed is maximum.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "K–t grafiği: sönümsüz ve sönümlü",
      kisa: "K negatif olmaz, uçtan bırakılınca 0'dan başlar, T/2 aralıkla sıfırlanır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "K(t) ve U(t); sonra sönümlü K(t) (T ≈ 4 s, E = 4 J)",
          xlabel: "t",
          ylabel: "enerji (J)",
          xmax: 12,
          ymax: 5,
          xticks: [
            { v: 2, label: "T/2" },
            { v: 4, label: "T" },
            { v: 6, label: "3T/2" },
            { v: 8, label: "2T" },
            { v: 10, label: "5T/2" },
            { v: 12, label: "3T" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            {
              id: "ee",
              tip: "cizgi",
              from: [0, 4],
              to: [12, 4],
              renk: 3,
              kesik: true,
              etiket: "E",
              gizli: true
            },
            {
              id: "uu",
              tip: "egri",
              noktalar: [
                [0, 4], [0.25, 3.414], [0.5, 2], [0.75, 0.586], [1, 0], [1.25, 0.586],
                [1.5, 2], [1.75, 3.414], [2, 4], [2.25, 3.414], [2.5, 2], [2.75, 0.586],
                [3, 0], [3.25, 0.586], [3.5, 2], [3.75, 3.414], [4, 4], [4.25, 3.414],
                [4.5, 2], [4.75, 0.586], [5, 0], [5.25, 0.586], [5.5, 2], [5.75, 3.414],
                [6, 4], [6.25, 3.414], [6.5, 2], [6.75, 0.586], [7, 0], [7.25, 0.586],
                [7.5, 2], [7.75, 3.414], [8, 4], [8.25, 3.414], [8.5, 2], [8.75, 0.586],
                [9, 0], [9.25, 0.586], [9.5, 2], [9.75, 3.414], [10, 4], [10.25, 3.414],
                [10.5, 2], [10.75, 0.586], [11, 0], [11.25, 0.586], [11.5, 2], [11.75, 3.414],
                [12, 4]
              ],
              renk: 1,
              etiket: "U",
              gizli: true
            },
            {
              id: "kk",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.586], [0.5, 2], [0.75, 3.414], [1, 4], [1.25, 3.414],
                [1.5, 2], [1.75, 0.586], [2, 0], [2.25, 0.586], [2.5, 2], [2.75, 3.414],
                [3, 4], [3.25, 3.414], [3.5, 2], [3.75, 0.586], [4, 0], [4.25, 0.586],
                [4.5, 2], [4.75, 3.414], [5, 4], [5.25, 3.414], [5.5, 2], [5.75, 0.586],
                [6, 0], [6.25, 0.586], [6.5, 2], [6.75, 3.414], [7, 4], [7.25, 3.414],
                [7.5, 2], [7.75, 0.586], [8, 0], [8.25, 0.586], [8.5, 2], [8.75, 3.414],
                [9, 4], [9.25, 3.414], [9.5, 2], [9.75, 0.586], [10, 0], [10.25, 0.586],
                [10.5, 2], [10.75, 3.414], [11, 4], [11.25, 3.414], [11.5, 2], [11.75, 0.586],
                [12, 0]
              ],
              renk: 0,
              etiket: "K",
              gizli: true
            },
            { id: "z1", tip: "nokta", x: 2.009, y: 0, renk: 2, gizli: true },
            { id: "z2", tip: "nokta", x: 4.018, y: 0, renk: 2, gizli: true },
            { id: "z3", tip: "nokta", x: 6.028, y: 0, renk: 2, gizli: true },
            { id: "y1", tip: "nokta", x: 2.841, y: 0, renk: 3, gizli: true },
            { id: "y2", tip: "nokta", x: 5.683, y: 0, renk: 3, gizli: true },
            { id: "y3", tip: "nokta", x: 8.524, y: 0, renk: 3, gizli: true },
            { id: "y4", tip: "nokta", x: 11.366, y: 0, renk: 3, gizli: true }
          ],
          durumlar: [
            {
              metin: "Sönümsüz, uçtan bırakıldı. t = 0'da enerjinin hepsi yayda: U = 4 J, K = 0.",
              goster: ["uu", "ee"]
            },
            {
              metin: "K = ½mv² sıfırdan başlar, T/4'te 4 J'e çıkar. Her an K + U = 4 J.",
              goster: ["kk"]
            },
            {
              metin: "K ve U'nun periyodu ==T/2==: konum bir kez salınırken enerji iki kez el değiştirir."
            },
            {
              metin: "Şimdi sönüm var; yalnız K(t) çiziliyor: t = 0'da 0, tepeler küçülüyor ve K asla negatif olmuyor.",
              gizle: ["uu", "ee"],
              set: {
                kk: {
                  noktalar: [
                    [0, 0], [0.25, 0.544], [0.5, 1.725], [0.75, 2.739], [1, 2.99], [1.25, 2.386],
                    [1.5, 1.315], [1.75, 0.371], [2, 0], [2.25, 0.278], [2.5, 0.919], [2.75, 1.485],
                    [3, 1.64], [3.25, 1.324], [3.5, 0.742], [3.75, 0.218], [4, 0.001], [4.25, 0.142],
                    [4.5, 0.489], [4.75, 0.805], [5, 0.9], [5.25, 0.735], [5.5, 0.418], [5.75, 0.127],
                    [6, 0.001], [6.25, 0.072], [6.5, 0.26], [6.75, 0.436], [7, 0.493], [7.25, 0.407],
                    [7.5, 0.236], [7.75, 0.074], [8, 0.001], [8.25, 0.036], [8.5, 0.138], [8.75, 0.236],
                    [9, 0.27], [9.25, 0.226], [9.5, 0.133], [9.75, 0.043], [10, 0.001], [10.25, 0.018],
                    [10.5, 0.074], [10.75, 0.128], [11, 0.148], [11.25, 0.125], [11.5, 0.075], [11.75, 0.025],
                    [12, 0.001]
                  ]
                }
              }
            },
            {
              metin: "K = 0 olan anlar (v = 0) hâlâ yaklaşık T/2 arayla: ≈ 2,0; 4,0; 6,0 s.",
              goster: ["z1", "z2", "z3"]
            },
            {
              metin: "Aynı yay, aynı A, daha büyük kütle: başlangıç enerjisi ½kA² aynı, ama T büyür. Sıfırlar seyrekleşir (kütle 2 kat → ≈ 2,8 s aralık).",
              goster: ["y1", "y2", "y3", "y4"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "K(t) eskizi: en çok kaçan puan (CR25)",
          metin: "2025'te sönümlü osilatörün K–t eskizinde öğrenciler çoğunlukla konum ya da hız grafiği çizdi, bazıları K'yi negatif çizdi. Kütle büyüyünce de \"formülde m var, K artar\" diye gerekçelendirdiler; oysa başlangıç enerjisi yay enerjisidir, kütleye bağlı değildir.",
          yanlis: "K = ½mv² ve m büyüdü, o yüzden K tepeleri yükselir.",
          dogru: "Sınavda böyle yaz: *K starts at zero, is never negative, and returns to zero every half period; a larger mass keeps the initial energy ½kA² but increases the period.*"
        }
      ]
    },
    {
      baslik: "Genlik, kütle ve yay değişince",
      kisa: "E = ½kA², v_max = A√(k/m), a_max = kA/m; hangisinin değiştiğine tablodan bak.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Bir büyüklük değişirse diğerleri ne olur?",
          head: ["Değişiklik", "T", "Toplam enerji E", "v_max", "a_max"],
          rows: [
            ["A → 2A", "aynı", "4 katı", "2 katı", "2 katı"],
            ["m → 4m", "2 katı", "aynı", "yarısı", "dörtte biri"],
            ["k → 4k", "yarısı", "4 katı", "2 katı", "4 katı"]
          ],
          vurgu: 1,
          not: "Sınavda böyle yaz: *The total energy ½kA² does not depend on the mass, so it is the same for both blocks, but the maximum speed is smaller for the larger mass.*"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "⚠️",
              baslik: "Genlik 2 kat → enerji 4 kat",
              metin: "E = ½kA²: enerji genliğin karesiyle büyür, iki katıyla değil."
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*Doubling the amplitude quadruples the total energy because E is proportional to A².*"
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
            "*Mechanical energy* E = K + U sabittir; yay-kütlede E = ½kA².",
            "Uçta K = 0 ve U = E; dengede U = 0 ve K = E.",
            "U = ½kx² bir parabol; E yatay doğru; ikisinin kesiştiği yerler dönüm noktalarıdır.",
            "Örnek: m = 0,50 kg, k = 50 N/m, A = 0,40 m → E = 4,0 J; x = 0,20 m'de K = 3,0 J, U = 1,0 J.",
            "Enerji çubuklarının toplamı konum değişse de aynı kalır.",
            "K(t) ve U(t) periyodu T/2'dir; K hiç negatif olmaz, uçtan bırakılınca K(0) = 0.",
            "Sönümlü K(t): tepeler küçülür, sıfırlar yaklaşık T/2 arayla gelir.",
            "A 2 kat → E 4 kat; m değişirse E aynı kalır, T ve v_max değişir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A block on a spring oscillates with amplitude A and total mechanical energy E. The same block and spring are set oscillating with amplitude 2A. What is the total mechanical energy of the new motion?",
      opts: ["E", "2E", "4E", "8E"],
      a: 2,
      why: "E = ½kA²: A iki katına çıkınca E dört katına çıkar. 2E enerjinin genlikle doğru orantılı olduğunu sanmaktır; 8E küp; E ise genliğin enerjiyi etkilemediği yanılgısıdır."
    },
    {
      q: "A block of mass m on a horizontal spring of spring constant k oscillates with speed v₀ at the equilibrium position. What is the speed of the block when its displacement is half the amplitude?",
      opts: ["v₀/2", "v₀/√2", "3v₀/4", "(√3/2)v₀"],
      a: 3,
      why: "Dengede ½mv₀² = ½kA². x = A/2'de U = ½k(A/2)² = ¼ · ½kA², yani K = ¾ · ½mv₀². ½mv² = ¾ · ½mv₀² → v = (√3/2)v₀ ≈ 0,87v₀. v₀/2 enerjiyi çizgisel sanmak (K = ½E); 3v₀/4 ise hızı K ile orantılı almak."
    },
    {
      q: "The table gives the kinetic energy of an undamped block-spring system, released from rest at x = A, at several times. What is the period of the oscillation?",
      opts: ["2.0 s", "1.0 s", "0.50 s", "4.0 s"],
      a: 0,
      why: "K = 0 olan anlar blok uçta olduğu anlardır ve yarım periyot aralıkla gelir: 0 → 1,0 → 2,0 s. T/2 = 1,0 s → T = 2,0 s. 1,0 s sıfırlar arası süreyi (T/2) periyot sanmak; 0,50 s çeyrek periyot (T/4); 4,0 s ise bu süreyi 4 ile çarpmak.",
      fig: {
        type: "table",
        head: ["t (s)", "K (J)"],
        rows: [
          ["0", "0"],
          ["0.50", "3.0"],
          ["1.0", "0"],
          ["1.5", "3.0"],
          ["2.0", "0"],
          ["2.5", "3.0"]
        ],
        caption: "Kinetic energy of the block"
      }
    },
    {
      q: "A block on a spring is released from rest at x = A and oscillates with small damping. Which of the following best describes the kinetic energy of the block as a function of time?",
      opts: [
        "It starts at its maximum value and decreases smoothly to zero without oscillating.",
        "It starts at zero and repeatedly rises and falls with decreasing peaks, reaching zero once every half period.",
        "It oscillates between positive and negative values with decreasing amplitude.",
        "It starts at zero and increases with each oscillation."
      ],
      a: 1,
      why: "Uçtan bırakılınca t = 0'da v = 0, yani K = 0. Sürtünme enerjiyi azalttığı için tepeler küçülür; v = 0 anları (dönüm noktaları) yarım periyot aralıklıdır. K = ½mv² hiç negatif olamaz, bu yüzden negatif değerli seçenek (konum ya da hız grafiği gibi) yanlıştır."
    },
    {
      q: "A block of mass m is released from rest at x = A on a horizontal spring of constant k. The experiment is repeated with a block of mass 2m, the same spring, and the same A. Which of the following is the same in both experiments?",
      opts: ["The period", "The maximum speed", "The total mechanical energy", "The maximum acceleration"],
      a: 2,
      why: "E = ½kA² yalnız k ve A'ya bağlı, kütleye değil. Periyot √m ile, v_max = A√(k/m) ile 1/√m gibi, a_max = kA/m ise 1/m gibi değişir."
    }
  ]
};
