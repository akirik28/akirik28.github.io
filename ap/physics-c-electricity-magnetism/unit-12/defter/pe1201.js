/* Kitpath not defteri · pe1201 · 12.1–12.2 Manyetik Alan ve Hareketli Yükler
   Kaynak: kaynak/ced-physc.md Unit 12 (12.1.A–C, 12.2.A–B), 2025 Chief Reader hataları. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1201",
  amac: "Bu konu manyetik alanın ne olduğunu ve hareketli yüklere ne yaptığını anlatıyor. Alanın hep kapalı ilmek olduğunu, maddelerin neden farklı tepki verdiğini ve F = q(v × B) kuvvetini sağ el kuralıyla bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Manyetik alan: hep dipol, hep kapalı ilmek",
      kisa: "Manyetik alanın başı sonu yoktur; tek kutup (monopol) bulunmaz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧲",
              terim: "Magnetic field",
              tr: "manyetik alan",
              tanim: "Hareketli yüklere, akımlara ve mıknatıslara etkiyen kuvveti belirleyen vektör alanı, B. Birimi tesla (T).",
              ornek: "Buzdolabı mıknatısının yanında ataş sıçrar; alan her noktada bir ok gibidir."
            },
            {
              ikon: "🧭",
              terim: "Magnetic dipole",
              tr: "manyetik dipol",
              tanim: "N ve S kutbu hep birlikte gelir; tek kutup (monopol) yoktur. Pusula iğnesi küçük bir dipoldür ve dış alanla hizalanır.",
              ornek: "Dünya'nın alanı da yaklaşık bir dipol alanıdır."
            },
            {
              ikon: "🔁",
              terim: "Closed field lines",
              tr: "kapalı alan çizgileri",
              tanim: "Çubuk mıknatısın dışında çizgiler N'den S'ye gider, içinde S'den N'ye döner. Başı ve sonu yoktur.",
              ornek: "Kapalı bir yüzeye kaç çizgi girerse o kadarı çıkar."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "∮ B · dA", alt: "kapalı yüzeyden net akı" },
            "=",
            { t: "0", alt: "manyetik monopol yok" }
          ],
          aciklama: "Bu, Maxwell'in ikinci denklemidir (*Gauss's law for magnetism*). Elektrikte ∮E · dA = Q/ε₀ vardı; manyetikte yük karşılığı yok. Sınavda böyle yaz: *The field lines form closed loops, so the net flux through any closed surface is zero.*"
        },
        {
          tip: "tuzak",
          baslik: "Kırılan mıknatıstan tek kutup çıkmaz",
          metin: "Çubuk mıknatısı ortadan kırarsan iki yarı da yine N–S çiftidir. Elektrikte + ve − yükü ayırabilirsin, manyetikte N ile S'yi ayıramazsın.",
          yanlis: "Mıknatısı kırınca ayrı bir N ve ayrı bir S parçası elde edilir.",
          dogru: "Her parça yeni bir dipoldür; ∮B · dA = 0 olduğu için monopol yoktur."
        }
      ]
    },
    {
      baslik: "Madde ve manyetizma",
      kisa: "Madde, içindeki dipollerin dizilişine göre alana farklı tepki verir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Üç tür manyetik davranış",
          head: ["Tür", "Dipollere ne olur?", "Alan kalkınca", "Örnek"],
          rows: [
            [
              "*Ferromagnetic*",
              "Dipoller gruplar hâlinde hizalanır; güçlü çeker",
              "Mıknatıslık kalabilir (kalıcı mıknatıs)",
              "Fe, Ni, Co"
            ],
            [
              "*Paramagnetic*",
              "Dipoller alanla zayıfça hizalanır; zayıf çeker",
              "Hizalanma kaybolur",
              "Al, Ti, Mg"
            ],
            [
              "*Diamagnetic*",
              "Alana zıt zayıf dipoller oluşur; zayıf iter",
              "Etki kaybolur (her maddede vardır)",
              "Cu, su, grafit"
            ]
          ],
          not: "Sınavda böyle yaz: *The material is paramagnetic: its dipoles align weakly with the field, and the alignment disappears when the field is removed.*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧱",
              terim: "Magnetic permeability",
              tr: "manyetik geçirgenlik",
              tanim: "Maddenin dış alana karşılık ne kadar mıknatıslandığını gösteren değer, μ. Boşlukta sabittir: μ₀ = 4π × 10⁻⁷ T·m/A. Maddede başka bir değerdir ve sabit değildir; sıcaklığa, yönelime ve dış alanın şiddetine bağlıdır.",
              ornek: "Demir çekirdekli bobinin alanı, aynı bobinin boş hâline göre yüzlerce–binlerce kat büyüktür."
            }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🧲", baslik: "Ferromanyetik", maddeler: ["Güçlü çeker", "Kalıcı mıknatıslanabilir", "Fe, Ni, Co"] },
          sag: {
            ikon: "🪙",
            baslik: "Para / diamanyetik",
            maddeler: ["Çok zayıf tepki", "Alan kalkınca biter", "Al, Ti, Mg; Cu, su"]
          },
          oyun: [
            {
              metin: "Mıknatısa sürtülen çelik çivi, sonra ataş tutuyor.",
              cevap: "sol",
              neden: "Dipoller kalıcı hizalandı: ferromanyetik davranış."
            },
            {
              metin: "Alüminyum kaşık güçlü mıknatısa zar zor çekiliyor, uzaklaşınca etki bitiyor.",
              cevap: "sag",
              neden: "Zayıf ve geçici hizalanma: paramanyetik."
            },
            {
              metin: "Her maddede bulunan, alana zıt çok zayıf etki.",
              cevap: "sag",
              neden: "Bu diamanyetizmadır; çok zayıf olduğu için çoğu zaman fark edilmez."
            },
            {
              metin: "Dipolleri kendiliğinden gruplar hâlinde hizalı olan madde.",
              cevap: "sol",
              neden: "Gruplar hâlinde kendiliğinden hizalanma ferromanyetizmanın işaretidir."
            }
          ]
        }
      ]
    },
    {
      baslik: "Hareketli yük manyetik alan üretir",
      kisa: "Hareket eden yük, hız ve konum vektörüne dik bir alan yaratır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "B", alt: "tek yükün alanı" },
            "=",
            { t: "(μ₀ / 4π)", alt: "sabit" },
            "×",
            { t: "q (v × r̂) / r²", alt: "yük, hız, yükten noktaya yön, uzaklık" }
          ],
          aciklama: "Bu, Biot–Savart'ta I dℓ yerine q v yazılmış hâlidir. Büyüklük (μ₀/4π) q v sinθ / r². Hız ile r dik iken en büyük, hız r boyunca iken sıfırdır. Sınavda böyle yaz: *The field at P is perpendicular to both v and r, and its direction follows from the right-hand rule.*"
        },
        {
          tip: "adimlar",
          baslik: "Sağ el kuralı #1: hareketli yükün alanı (v × r̂)",
          adimlar: [
            {
              baslik: "Dört parmağı hıza çevir",
              metin: "Parmakların hız vektörü v boyunca uzansın. Yük negatifse sonunda yönü ters çevireceksin."
            },
            {
              baslik: "Parmakları noktaya doğru kıvır",
              metin: "Parmakları v'den, yükten alanı aradığın noktaya giden r̂ yönüne doğru kıvır."
            },
            {
              baslik: "Başparmak alanı verir",
              metin: "Başparmağın gösterdiği yön pozitif yükün B yönüdür. Negatif yükte tersini al."
            },
            {
              baslik: "Küçük bir örnekle dene",
              metin: "Yük sağa gidiyor (v = +x), nokta yükün tam üstünde (r̂ = +y): x̂ × ŷ = +ẑ, yani alan sayfadan dışarı."
            }
          ]
        }
      ]
    },
    {
      baslik: "Manyetik kuvvet: F = q(v × B)",
      kisa: "Kuvvet hıza ve alana diktir; sürat değişmez, yalnız yön değişir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "F", alt: "manyetik kuvvet" },
            "=",
            { t: "q (v × B)", alt: "yük × (hız çarpı alan)" }
          ],
          aciklama: "Büyüklük F = |q| v B sinθ. Aynı bölgede E de varsa iki kuvvet birbirinden bağımsızdır: F = q(E + v × B). Durgun yüke (v = 0) ya da alana paralel giden yüke (θ = 0) manyetik kuvvet etkimez. Sınavda böyle yaz: *The force is perpendicular to both v and B, so it changes the direction of the velocity but not the speed.*"
        },
        {
          tip: "adimlar",
          baslik: "Sağ el kuralı #2: kuvvetin yönü",
          adimlar: [
            { baslik: "Parmaklar v yönünde", metin: "Sağ elin dört parmağını yükün hızı boyunca uzat." },
            {
              baslik: "Parmakları B'ye doğru kıvır",
              metin: "Alanın yönüne doğru, küçük açıdan kıvır. Alan sayfa içiyse elini parmaklar sayfaya doğru kıvrılacak biçimde çevir."
            },
            {
              baslik: "Başparmak v × B'dir",
              metin: "Pozitif yükte kuvvet başparmak yönündedir. Negatif yükte kuvvet tersine döner."
            },
            { baslik: "Yönü kontrol et", metin: "Kuvvet hem v'ye hem B'ye diktir. Dik değilse yanlış çevirmişsindir." }
          ]
        },
        {
          tip: "grafik",
          baslik: "Sayfa içine doğru B'deki proton ve elektron",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 7,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "b0", tip: "yazi", x: 1, y: 1.2, metin: "×" },
            { id: "b1", tip: "yazi", x: 1, y: 3.5, metin: "×" },
            { id: "b2", tip: "yazi", x: 1, y: 5.8, metin: "×" },
            { id: "b3", tip: "yazi", x: 9, y: 1.2, metin: "×" },
            { id: "b4", tip: "yazi", x: 9, y: 3.5, metin: "×" },
            { id: "b5", tip: "yazi", x: 9, y: 5.8, metin: "×" },
            { id: "b6", tip: "yazi", x: 4, y: 2.4, metin: "×" },
            { id: "b7", tip: "yazi", x: 6, y: 2.4, metin: "×" },
            { id: "b8", tip: "yazi", x: 4, y: 4.6, metin: "×" },
            { id: "b9", tip: "yazi", x: 6, y: 4.6, metin: "×" },
            { id: "lb", tip: "yazi", x: 9.8, y: 6.6, metin: "B: sayfa içi (×)", hiza: "end" },
            {
              id: "yol",
              tip: "egri",
              noktalar: [
                [5, 1], [5.647, 1.085], [6.25, 1.335], [6.768, 1.732], [7.165, 2.25],
                [7.415, 2.853], [7.5, 3.5], [7.415, 4.147], [7.165, 4.75], [6.768, 5.268],
                [6.25, 5.665], [5.647, 5.915], [5, 6], [4.353, 5.915], [3.75, 5.665],
                [3.232, 5.268], [2.835, 4.75], [2.585, 4.147], [2.5, 3.5], [2.585, 2.853],
                [2.835, 2.25], [3.232, 1.732], [3.75, 1.335], [4.353, 1.085], [5, 1]
              ],
              renk: 0,
              gizli: true
            },
            { id: "p", tip: "nokta", x: 5, y: 1, renk: 2, etiket: "proton" },
            { id: "v1", tip: "ok", from: [5, 1], to: [7, 1], renk: 3, gizli: true },
            { id: "tv", tip: "yazi", x: 7.4, y: 1.35, metin: "v", gizli: true },
            { id: "f1", tip: "ok", from: [5, 1], to: [5, 2.8], renk: 1, gizli: true },
            { id: "tf", tip: "yazi", x: 5.45, y: 2.2, metin: "F", gizli: true, hiza: "start" },
            { id: "yon", tip: "ok", from: [7.5, 3.1], to: [7.5, 4.1], renk: 3, gizli: true },
            { id: "ty", tip: "yazi", x: 7.8, y: 3.6, metin: "saat yönünün tersi", gizli: true, hiza: "start" },
            { id: "rr", tip: "ok", from: [5, 3.5], to: [7.4, 3.5], renk: 2, gizli: true },
            { id: "tr", tip: "yazi", x: 5.9, y: 3.85, metin: "r = mv / qB", gizli: true },
            { id: "el", tip: "nokta", x: 5, y: 6, renk: 3, etiket: "elektron", gizli: true },
            { id: "v2", tip: "ok", from: [5, 6], to: [7, 6], renk: 3, gizli: true },
            { id: "f2", tip: "ok", from: [5, 6], to: [5, 4.2], renk: 1, gizli: true },
            { id: "te", tip: "yazi", x: 3.6, y: 5, metin: "F aşağı: saat yönünde", gizli: true, hiza: "middle" }
          ],
          durumlar: [
            { metin: "Alan sayfaya girer (×). Proton alt noktadan sağa, v hızıyla giriyor.", goster: ["v1", "tv"] },
            {
              metin: "v × B: parmaklar sağa, sonra sayfa içine kıvrılır, başparmak yukarı. ==Kuvvet yukarı==, hıza dik.",
              goster: ["f1", "tf"]
            },
            {
              metin: "Kuvvet hep hıza dik olduğu için sürat değişmez, yalnız yön değişir: yol ==çemberdir==.",
              goster: ["yol", "yon", "ty"]
            },
            {
              metin: "Merkeze bakan kuvvet merkezcil kuvvettir: qvB = mv²/r, yani ==r = mv/(qB)==.",
              goster: ["rr", "tr"]
            },
            {
              metin: "Elektron (negatif): aynı alan ve sürat, kuvvet ters. Üstten girince aşağı itilir ve ==saat yönünde== döner.",
              goster: ["el", "v2", "f2", "te"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎚️",
              terim: "Velocity selector",
              tr: "hız seçici",
              tanim: "E ve B birbirine dik iken yalnız qE = qvB, yani v = E/B olan yük düz gider; öteki yükler saparak elenir.",
              ornek: "B = 0,50 T ve v = 2,0 × 10³ m/s için E = vB = 1,0 × 10³ N/C gerekir."
            },
            {
              ikon: "🧪",
              terim: "Hall effect",
              tr: "Hall etkisi",
              tanim: "Akım taşıyan şerit alana dik tutulursa taşıyıcılar bir kenara itilir ve kenarlar arasında potansiyel farkı oluşur. Denge: eE_H = e v_d B.",
              ornek: "Akım +x, B sayfa içi, taşıyıcı elektron: elektronlar üst kenara gider, alt kenar daha yüksek potansiyelde olur."
            }
          ]
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: alana giren proton",
      kisa: "Çemberin yarıçapı r = mv/(qB) ve kuvvet iş yapmaz.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Sayfa içine doğru 0,10 T alandaki proton",
          durum: "Bir proton, sayfa içine doğru 0,10 T'lık düzgün alana, alana dik olarak +x yönünde 4,8 × 10⁵ m/s hızla giriyor. Kuvveti, yarıçapı, periyodu ve dönüş yönünü bul. (m = 1,67 × 10⁻²⁷ kg, e = 1,6 × 10⁻¹⁹ C)",
          adimlar: [
            "Kuvvet büyüklüğü: F = qvB = (1,6 × 10⁻¹⁹)(4,8 × 10⁵)(0,10) = 7,7 × 10⁻¹⁵ N.",
            "Kuvvet hıza dik ve merkezcil olduğundan qvB = mv²/r.",
            "Yarıçap: r = mv/(qB) = (1,67 × 10⁻²⁷)(4,8 × 10⁵) / ((1,6 × 10⁻¹⁹)(0,10)) = 5,0 cm.",
            "Periyot: T = 2πr/v = 2πm/(qB) = 6,6 × 10⁻⁷ s. Sürat sabit kaldığı için T hızdan bağımsızdır.",
            "Yön: v = +x, B = −z. x̂ × (−ẑ) = +ŷ. Kuvvet yukarı, proton saat yönünün tersine döner.",
            "İş: F ⟂ v olduğundan W = 0, kinetik enerji değişmez."
          ],
          sonuc: "F = 7,7 × 10⁻¹⁵ N, r = 5,0 cm, T = 6,6 × 10⁻⁷ s; yörünge saat yönünün tersine"
        },
        {
          tip: "tuzak",
          baslik: "Yük için tel formülü kullanma; sağ eli iki kez kullan",
          metin: "Hareketli yüklü kürede kuvvet F = qvB'dir. Tel için yazılan F = ∫ I dℓ × B burada yanlış formüldür. Bir telin yüke etkisi sorulursa sağ eli iki kez kullan: önce telin alanı için, sonra o alanın yüke kuvveti için.",
          yanlis: "Telin alanının yönünü kuvvetin yönü sanmak; iki yük karşılaştırırken yük ve hızların eşit olduğunu yazmamak.",
          dogru: "Sınavda böyle yaz: *The charge and speed are equal, so F = qvB is the same; the force is perpendicular to v, so it does no work and the speed stays constant.*"
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
            "Manyetik alan dipoldür; monopol yoktur. Alan çizgileri kapalı ilmektir ve ∮B · dA = 0.",
            "*Ferromagnetic* maddeler kalıcı mıknatıslanır; *paramagnetic* zayıf ve geçicidir; *diamagnetic* etki alana zıttır ve her maddede vardır.",
            "Boşlukta μ₀ = 4π × 10⁻⁷ T·m/A sabittir; maddede μ sabit değildir.",
            "Hareketli yük alan üretir: B = (μ₀/4π) q (v × r̂)/r²; yönü hem v'ye hem r'ye diktir.",
            "Manyetik kuvvet F = q(v × B); sağ el: parmaklar v'den B'ye kıvrılır, başparmak F (negatif yükte ters).",
            "Kuvvet hıza dik olduğundan iş yapmaz: sürat sabit, yörünge çember, r = mv/(qB), T = 2πm/(qB).",
            "E ve B birlikteyse kuvvetler bağımsızdır; v = E/B hız seçicide yük düz gider. *Hall effect* şeridin kenarlarında potansiyel farkı yaratır."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A proton moves in the +x direction through a uniform magnetic field directed into the page (−z). What is the direction of the magnetic force on the proton at that instant?",
      opts: [
        "+y (toward the top of the page)",
        "−y (toward the bottom of the page)",
        "+z (out of the page)",
        "The force is zero."
      ],
      a: 0,
      why: "F = q(v × B) = e(x̂ × (−ẑ)) = +ŷ. Sağ el: parmaklar +x, sonra sayfa içine kıvrılır, başparmak yukarı. B şıkkı elektron için doğru olurdu; v ⟂ B olduğundan kuvvet sıfır değildir."
    },
    {
      q: "A proton and an electron enter the same region of uniform magnetic field with equal speeds, perpendicular to the field. Which statement is correct?",
      opts: [
        "Both move on circles of the same radius in the same sense.",
        "The proton's circle has the larger radius, and the two particles circulate in opposite senses.",
        "The electron's circle has the larger radius, and the two circulate in opposite senses.",
        "Neither particle is deflected because their speeds are equal."
      ],
      a: 1,
      why: "r = mv/(|q|B). Yük büyüklükleri eşit, proton yaklaşık 1800 kat ağır, bu yüzden proton daha büyük çember çizer. Yük işaretleri zıt olduğundan dönüş yönleri de zıttır. C şıkkı kütle etkisini tersine çevirir."
    },
    {
      q: "A student tests three samples with a strong magnet and records the observations in the table. Which row correctly classifies the samples?",
      fig: {
        type: "table",
        head: ["Sample", "Observation"],
        rows: [
          ["P", "Weakly attracted; no attraction after the magnet is removed"],
          ["Q", "Strongly attracted; stays magnetized afterward"],
          ["R", "Weakly repelled"]
        ],
        caption: "Test results"
      },
      opts: [
        "P ferromagnetic, Q paramagnetic, R diamagnetic",
        "P diamagnetic, Q ferromagnetic, R paramagnetic",
        "P paramagnetic, Q ferromagnetic, R diamagnetic",
        "P paramagnetic, Q diamagnetic, R ferromagnetic"
      ],
      a: 2,
      why: "Zayıf ve geçici çekim paramanyetiktir (P). Güçlü çekim ve kalıcı mıknatıslık ferromanyetiktir (Q). Zayıf itme diamanyetiktir (R). A şıkkı P ile Q'yu karıştırır."
    },
    {
      q: "A charged particle travels in a straight line at 2.0 × 10³ m/s through a region of uniform perpendicular electric and magnetic fields. The magnetic field is 0.50 T. What is the magnitude of the electric field?",
      opts: ["4.0 × 10³ N/C", "2.5 × 10⁻⁴ N/C", "2.0 × 10³ N/C", "1.0 × 10³ N/C"],
      a: 3,
      why: "Düz gitmek için qE = qvB, yani E = vB = (2,0 × 10³)(0,50) = 1,0 × 10³ N/C. A şıkkı v/B'dir, B şıkkı B/v'dir; ikisi de boyut olarak yanlıştır."
    },
    {
      q: "A thin metal strip lies in the plane of the page and carries a steady current to the right (+x). A uniform magnetic field points into the page. The charge carriers are electrons. Which statement about the Hall potential difference is correct?",
      opts: [
        "The top edge is at the higher potential because electrons are pushed to the bottom edge.",
        "The bottom edge is at the higher potential because electrons are pushed to the top edge.",
        "The two edges are at the same potential because the net force on a carrier is zero.",
        "A potential difference appears between the two ends of the strip along the current."
      ],
      a: 1,
      why: "Elektronlar sola sürüklenir: F = (−e)(v_d × B) = +e u B ŷ, yani yukarı. Üst kenar negatif, alt kenar pozitif olur, alt kenar daha yüksek potansiyeldedir. Denge kurulunca net kuvvet sıfırdır ama potansiyel farkı kalır."
    }
  ]
};
