/* Kitpath not defteri · pe1002 · 10.3 Kondansatörler
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 10, Topic 10.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1002",
  amac: "Bu konu paralel plakalı kondansatörü anlatıyor: kapasitansı, plakalar arasındaki düzgün alanı, depolanan enerjiyi, pile bağlı ve izole durumların farkını ve küresel ya da silindirik kondansatörün hesabını.",
  bolumler: [
    {
      baslik: "Kondansatör ve kapasitans",
      kisa: "C = Q/ΔV; paralel plakada C = κε₀A/d. C yalnızca geometriye ve malzemeye bağlıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔋",
              terim: "Parallel-plate capacitor",
              tr: "paralel plakalı kondansatör",
              tanim: "Aralarında boşluk ya da yalıtkan bulunan, eşit ve zıt yük taşıyabilen iki paralel iletken yüzey.",
              ornek: "Fotoğraf flaşında yük bir kondansatörde birikir ve bir anda boşalır."
            },
            {
              ikon: "📦",
              terim: "Capacitance",
              tr: "kapasitans",
              tanim: "Plaka yükünün, yükün oluşturduğu potansiyel farkına oranı: C = Q/ΔV. Birimi farad (F); yalnızca şekle ve aradaki malzemeye bağlıdır.",
              ornek: "Q'yu iki katına çıkarırsan ΔV de iki katına çıkar; C değişmez."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "C" },
            "=",
            { t: "Q/ΔV", alt: "tanım: her geometri için" },
            "|",
            { t: "C" },
            "=",
            { t: "κε₀A/d", alt: "yalnızca paralel plaka" }
          ],
          aciklama: "κ = 1 (hava) alınır. A plaka alanı, d aralık: alan büyüdükçe C artar, aralık büyüdükçe azalır. Sınavda böyle yaz: \"Capacitance depends only on the geometry and the material between the plates, C = Q/ΔV.\""
        },
        {
          tip: "ornek",
          baslik: "A = 0,0100 m², d = 1,0 mm, ΔV = 100 V",
          durum: "Kenarı 10 cm olan kare iki plaka arasında hava var. Pil 100 V. Kapasitansı, yükü ve plakalar arası alanı bul.",
          adimlar: [
            "C = ε₀A/d = (8,85×10⁻¹²)(0,0100)/(1,0×10⁻³) = 8,85×10⁻¹¹ F = 88,5 pF.",
            "Q = CΔV = (8,85×10⁻¹¹)(100) = 8,85×10⁻⁹ C = 8,85 nC.",
            "E = ΔV/d = 100/(1,0×10⁻³) = 1,0×10⁵ V/m. Kontrol: Q/(ε₀A) = 8,85×10⁻⁹/(8,85×10⁻¹²×0,0100) = 1,0×10⁵ V/m.",
            "Aralığı 2,0 mm yaparsan C yarıya iner: yaklaşık 44 pF."
          ],
          sonuc: "C = 88,5 pF, Q = 8,85 nC, E = 1,0×10⁵ V/m"
        }
      ]
    },
    {
      baslik: "Plakalar arası alan ve yüklü parçacık",
      kisa: "Plakalar arasında alan düzgündür; yüklü parçacık eğik atış gibi parabol çizer.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "E" },
            "=",
            { t: "Q/(ε₀A) = σ/ε₀", alt: "plakalar arası, kenarlar hariç" },
            "|",
            { t: "ΔV" },
            "=",
            { t: "E d" }
          ],
          aciklama: "Alan büyüklük ve yönce sabittir: + plakadan − plakaya. F = qE olduğundan a = qE/m de sabit; parçacık yatayda düzgün hızla, düşeyde sabit ivmeyle gider (*projectile* gibi)."
        },
        {
          tip: "grafik",
          baslik: "Elektron plakalar arasında: E = 5,0×10³ V/m, v₀ = 2,0×10⁷ m/s",
          xlabel: "x (cm)",
          ylabel: "",
          xmax: 5,
          ymax: 10,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          yticks: [],
          ogeler: [
            { id: "ust", tip: "cizgi", from: [0, 9], to: [4, 9], renk: 2 },
            { id: "alt", tip: "cizgi", from: [0, 1], to: [4, 1], renk: 1 },
            { id: "ut", tip: "yazi", x: 4.1, y: 9, metin: "+ plaka", hiza: "start" },
            { id: "at", tip: "yazi", x: 4.1, y: 1, metin: "− plaka", hiza: "start" },
            { id: "E0", tip: "ok", from: [0.8, 8.6], to: [0.8, 6.9], renk: 0 },
            { id: "E1", tip: "ok", from: [2, 8.6], to: [2, 6.9], renk: 0 },
            { id: "E2", tip: "ok", from: [3.2, 8.6], to: [3.2, 6.9], renk: 0 },
            { id: "Et", tip: "yazi", x: 2.35, y: 7.8, metin: "E", renk: 0 },
            { id: "v0", tip: "ok", from: [0.05, 4], to: [0.95, 4], renk: 3, gizli: true },
            { id: "v0t", tip: "yazi", x: 0.5, y: 4.6, metin: "v₀", renk: 3, gizli: true },
            { id: "F", tip: "ok", from: [2, 4.439], to: [2, 5.739], renk: 1, gizli: true },
            { id: "Ft", tip: "yazi", x: 2.3, y: 5.639, metin: "F", hiza: "start", renk: 1, gizli: true },
            {
              id: "yol",
              tip: "egri",
              noktalar: [
                [0, 4], [0.25, 4.007], [0.5, 4.027], [0.75, 4.062], [1, 4.11], [1.25, 4.172],
                [1.5, 4.247], [1.75, 4.336], [2, 4.439], [2.25, 4.556], [2.5, 4.686], [2.75, 4.83],
                [3, 4.988], [3.25, 5.159], [3.5, 5.345], [3.75, 5.544], [4, 5.756]
              ],
              renk: 3,
              gizli: true
            },
            { id: "son", tip: "nokta", x: 4, y: 5.756, renk: 3, etiket: "y = 1,76 mm", gizli: true }
          ],
          durumlar: [
            { metin: "Plakalar arası 8,0 mm, ΔV = 40 V. Alan düzgün ve + plakadan − plakaya: E = ΔV/d = 5,0×10³ V/m." },
            {
              metin: "Elektron v₀ ile yatay giriyor. Negatif yük olduğundan kuvvet E'nin tersi yönde, yani + plakaya doğru.",
              goster: ["v0", "v0t", "F", "Ft"]
            },
            {
              metin: "Kuvvet sabit olduğundan ivme sabit: a = eE/m = 8,8×10¹⁴ m/s². Yatayda düzgün hız: t = L/v₀ = 0,040/(2,0×10⁷) = 2,0 ns."
            },
            {
              metin: "Düşey sapma y = ½at² = 1,76 mm. Yörünge bir parabol: tıpkı yatay atılan bir cisim gibi.",
              goster: ["yol", "son"]
            }
          ]
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: alan",
              metin: "\"The field between the plates is uniform: E = Q/(ε₀A) = σ/ε₀, directed from the positive to the negative plate.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: hareket",
              metin: "\"The force is qE, so a = qE/m is constant and the path is a parabola, as in projectile motion.\""
            }
          ]
        }
      ]
    },
    {
      baslik: "Depolanan enerji",
      kisa: "U_C = ½QΔV = ½CΔV² = Q²/2C; enerji, yükleri ayırmak için yapılan iştir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "ΔV–Q grafiği: C = 2,0 μF",
          xlabel: "Q (μC)",
          ylabel: "ΔV (V)",
          xmax: 10,
          ymax: 14,
          xticks: [
            { v: 2, label: "6" },
            { v: 4, label: "12" },
            { v: 6, label: "18" },
            { v: 8, label: "24" },
            { v: 10, label: "30" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" }
          ],
          ogeler: [
            { id: "dogru", tip: "cizgi", from: [0, 0], to: [9.333, 14], renk: 0, etiket: "ΔV = Q/C" },
            {
              id: "serit",
              tip: "alan",
              noktalar: [
                [4, 0], [4.5, 0], [4.5, 6], [4, 6], [4, 0]
              ],
              renk: 2,
              gizli: true
            },
            {
              id: "uc",
              tip: "alan",
              noktalar: [
                [0, 0], [8, 0], [8, 12], [0, 0]
              ],
              renk: 1,
              gizli: true
            },
            { id: "nk", tip: "nokta", x: 8, y: 12, renk: 3, etiket: "24 μC, 12 V", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Kondansatör yüklenirken ΔV = Q/C: çizgi orijinden geçer, eğimi 1/C." },
            {
              metin: "Küçük bir dQ yükünü taşımak için gereken iş dU = ΔV dQ: ince bir dikdörtgenin alanı. Q = 12 μC'de ΔV = 6 V; dQ = 1,5 μC için dU = 9 μJ.",
              goster: ["serit"]
            },
            {
              metin: "Bütün şeritlerin toplamı çizginin altındaki üçgendir: U = ∫ΔV dQ = ½QΔV.",
              gizle: ["serit"],
              goster: ["uc", "nk"]
            },
            {
              metin: "Q = 24 μC ve ΔV = 12 V için U_C = ½(24 μC)(12 V) = 144 μJ. Aynı değer ½CΔV² ve Q²/2C ile de çıkar."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "C = 2,0 μF: 12 V ve 24 V",
          durum: "2,0 μF'lık kondansatör önce 12 V'a, sonra 24 V'a yükleniyor. Depolanan enerjileri ve oranlarını bul.",
          adimlar: [
            "12 V'ta: Q = CΔV = 24 μC; U = ½CΔV² = ½(2,0×10⁻⁶)(144) = 1,44×10⁻⁴ J = 144 μJ.",
            "24 V'ta: Q = 48 μC; U = ½(2,0×10⁻⁶)(576) = 5,76×10⁻⁴ J = 576 μJ.",
            "Oran 576/144 = 4: ΔV iki katına çıkınca Q iki, U dört katına çıkar (U ∝ ΔV² ve U ∝ Q²).",
            "Enerji, yükleri plakalardan birinden ötekine ayırmak için dış kuvvetin yaptığı iştir; alanda depolanır."
          ],
          sonuc: "U₁ = 144 μJ, U₂ = 576 μJ; oran 4"
        },
        {
          tip: "tuzak",
          baslik: "½'yi unutmak",
          metin: "Yük taşınırken ΔV sıfırdan son değere kadar artar; ortalama ΔV, son değerin yarısıdır. Bu yüzden enerji QΔV değil, yarısıdır.",
          yanlis: "U_C = QΔV = (24 μC)(12 V) = 288 μJ.",
          dogru: "U_C = ½QΔV = 144 μJ. Sınavda böyle yaz: \"The stored energy is the work done to separate the charges: U_C = ∫ΔV dQ = Q²/2C.\""
        }
      ]
    },
    {
      baslik: "Pile bağlı mı, izole mi?",
      kisa: "Pile bağlıysa ΔV sabit, izoleyse Q sabit; sonuç buna göre değişir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Plaka aralığı d → 2d olursa",
          head: ["Nicelik", "Pile bağlı (ΔV sabit)", "İzole (Q sabit)"],
          rows: [
            ["Kapasitans C", "yarıya iner", "yarıya iner"],
            ["Yük Q", "yarıya iner", "değişmez"],
            ["Potansiyel farkı ΔV", "değişmez", "iki katına çıkar"],
            ["Alan E", "yarıya iner (ΔV/d)", "değişmez (Q/ε₀A)"],
            ["Enerji U", "yarıya iner", "iki katına çıkar"]
          ],
          vurgu: 3,
          not: "C her iki durumda aynı değişir; sabit olanı koruyup gerisini Q = CΔV, E = ΔV/d, U = ½QΔV ile bul."
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔌",
            baslik: "Pile bağlı",
            maddeler: ["ΔV sabit (pil tutar)", "Yük pil ile plakalar arasında akar", "E = ΔV/d"]
          },
          sag: {
            ikon: "🏝️",
            baslik: "İzole",
            maddeler: ["Q sabit (yük gidecek yer yok)", "ΔV = Q/C değişir", "E = Q/(ε₀A) değişmez"]
          },
          oyun: [
            {
              metin: "Plakalar ayrılırken yük plakalardan pile geri akar.",
              cevap: "sol",
              neden: "ΔV sabit, C azalıyor: Q = CΔV azalır."
            },
            {
              metin: "Plakaları ayırmak için dış kuvvet çekimi yenmek zorunda; U artar.",
              cevap: "sag",
              neden: "Q sabit, C yarıya inince U = Q²/2C iki katına çıkar; artış dış kuvvetin yaptığı iştir."
            },
            { metin: "Plakalar arasındaki alan değişmez.", cevap: "sag", neden: "E = σ/ε₀ ve σ = Q/A sabit." },
            { metin: "Plakalar arasındaki potansiyel farkı değişmez.", cevap: "sol", neden: "Pil ΔV'yi sabit tutar." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Sabit olanı karıştırmak",
          metin: "Önce 'pile bağlı mı, ayrıldı mı' diye bak. Bağlıysa ΔV, izoleyse Q sabittir; ikisini birden sabit sanma.",
          yanlis: "Aralık artınca C azalır, o hâlde Q ve ΔV de azalır.",
          dogru: "C her durumda azalır; bağlıysa Q azalır (ΔV sabit), izoleyse ΔV artar (Q sabit). Sınavda böyle yaz: \"The capacitor is isolated, so Q stays constant; C halves, so ΔV = Q/C doubles.\""
        }
      ]
    },
    {
      baslik: "Küresel ve silindirik kondansatör",
      kisa: "Plaka formülü her geometriye uymaz; Gauss ile E, integralle ΔV, sonra C = Q/ΔV.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "C_küre", alt: "eş merkezli küreler" },
            "=",
            { t: "4πκε₀R₁R₂ / (R₂ − R₁)" },
            "|",
            { t: "C_silindir", alt: "eş eksenli silindirler" },
            "=",
            { t: "2πκε₀L / ln(R₂/R₁)" }
          ],
          aciklama: "Bu sonuçları ezberleme, türet: Gauss yasasından E(r), sonra ΔV = −∫E·dr, sonra C = Q/ΔV. Hava dolu ise κ = 1. Paralel plaka formülü yalnızca paralel plakalar içindir."
        },
        {
          tip: "ornek",
          baslik: "Silindirik kondansatör: R₁ = 1,0 cm, R₂ = 4,0 cm, L = 1,0 m",
          durum: "İç silindir +Q, dış kabuk −Q taşıyor, aralarında hava var. Gauss yasasıyla alanı, integralle ΔV'yi, sonra kapasitansı bul.",
          adimlar: [
            "Gauss, R₁ < r < R₂ için: E(2πrL) = Q/ε₀ → E = Q/(2πε₀Lr).",
            "ΔV'nin büyüklüğü = ∫E dr (R₁'den R₂'ye) = [Q/(2πε₀L)] ln(R₂/R₁). Önce integral, sonra sınırlar.",
            "C = Q/ΔV = 2πε₀L / ln(R₂/R₁).",
            "Sayılar: C = 2π(8,85×10⁻¹²)(1,0)/ln 4 = 5,56×10⁻¹¹/1,386 = 4,0×10⁻¹¹ F = 40 pF.",
            "Eş merkezli küreler için (R₁ = 3,0 cm, R₂ = 6,0 cm) aynı yöntem C = 4πε₀R₁R₂/(R₂ − R₁) ≈ 6,7 pF verir."
          ],
          sonuc: "C_silindir = 2πε₀L / ln(R₂/R₁) ≈ 40 pF"
        },
        {
          tip: "tuzak",
          baslik: "Plaka formülünü her yere uygulamak",
          metin: "2025 sınavında en yaygın hata: silindirik ya da küresel kondansatörde C = κε₀A/d yazmaktı. Doğru yol her zaman C = Q/ΔV.",
          yanlis: "Silindirde A = 2πR₁L ve d = R₂ − R₁ alıp C = ε₀A/d yazmak (yaklaşık 19 pF).",
          dogru: "Gauss ile E(r), ΔV = −∫E·dr, C = Q/ΔV (40 pF). Sınavda böyle yaz: \"The plate formula applies only to parallel plates; for this geometry I use C = Q/ΔV.\""
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
            "*Capacitance* C = Q/ΔV; yalnızca şekle ve aradaki malzemeye bağlıdır, Q ve ΔV'ye değil.",
            "Paralel plakada C = κε₀A/d; E = Q/(ε₀A) = σ/ε₀ düzgündür ve ΔV = Ed.",
            "Plakalar arasındaki yüklü parçacık sabit ivmeyle parabol çizer (a = qE/m).",
            "U_C = ½QΔV = ½CΔV² = Q²/2C; ½ unutulmaz. Enerji, yükleri ayırmak için yapılan iştir.",
            "Pile bağlıda ΔV sabit, izolede Q sabit; d → 2d olunca izolede ΔV ve U iki katına çıkar, E değişmez.",
            "Küresel ve silindirik kondansatörde Gauss ile E, ΔV = −∫E·dr, sonra C = Q/ΔV.",
            "Silindir: C = 2πε₀L/ln(R₂/R₁); örnekte 40 pF. Paralel plaka formülü her geometri için geçerli değildir.",
            "Hesapta önce hangi niceliğin sabit kaldığını yaz, sonra gerisini formüllerle bul."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A parallel-plate capacitor with capacitance 4.0 μF is connected to a 6.0 V battery. How much energy is stored in the capacitor?",
      opts: ["24 μJ", "72 μJ", "144 μJ", "12 μJ"],
      a: 1,
      why: "U_C = ½CΔV² = ½(4,0×10⁻⁶)(6,0)² = 7,2×10⁻⁵ J = 72 μJ. En çekici yanlış şık C: ½'yi unutup CΔV² = 144 μJ bulmak."
    },
    {
      q: "The table shows the initial state of a charged parallel-plate capacitor. The battery is disconnected, and the plate separation is then doubled. What are the final potential difference and stored energy?",
      fig: {
        type: "table",
        caption: "Initial state",
        head: ["C", "Q", "ΔV", "U"],
        rows: [
          ["100 pF", "2.0 nC", "20 V", "20 nJ"]
        ]
      },
      opts: ["40 V and 40 nJ", "20 V and 10 nJ", "10 V and 10 nJ", "40 V and 80 nJ"],
      a: 0,
      why: "İzole: Q sabit. d iki katına çıkınca C = 50 pF olur; ΔV = Q/C = 40 V ve U = ½QΔV = 40 nJ. En çekici yanlış şık B: bu, pile bağlı durumun sonucudur (ΔV sabit, U yarıya iner)."
    },
    {
      q: "An electron enters horizontally, with speed v₀, between two long horizontal parallel plates of length L and separation d, and is deflected toward the upper plate. Which change would double the vertical deflection y at the exit? (Neglect gravity and edge effects.)",
      opts: [
        "Doubling the entry speed v₀",
        "Doubling the plate length L",
        "Doubling the plate separation d with ΔV fixed",
        "Doubling the potential difference ΔV with d fixed"
      ],
      a: 3,
      why: "y = ½(eE/m)(L/v₀)² ve E = ΔV/d; y ∝ ΔV. ΔV iki katına çıkınca y iki katına çıkar. v₀ iki katına çıkarsa y dörtte birine iner, L iki katına çıkarsa dört katına çıkar, d iki katına çıkarsa yarıya iner. En çekici yanlış şık B: L iki katına çıkınca sapma dört katına çıkar."
    },
    {
      q: "An air-filled cylindrical capacitor consists of a long inner cylinder of radius a and a coaxial outer cylindrical shell of radius b, both of length L (L ≫ b). Which expression gives its capacitance?",
      opts: ["ε₀(2πaL)/(b − a)", "4πε₀ab/(b − a)", "2πε₀L/ln(b/a)", "2πε₀L ln(b/a)"],
      a: 2,
      why: "Gauss: E = Q/(2πε₀Lr); ΔV = [Q/(2πε₀L)] ln(b/a); C = Q/ΔV = 2πε₀L/ln(b/a). En çekici yanlış şık A: paralel plaka formülünü silindire uygulamak, 2025'in en yaygın hatası."
    },
    {
      q: "The graph shows the potential difference ΔV across a capacitor as a function of the charge Q on its plates. How much energy is stored when Q = 8.0 nC?",
      fig: {
        type: "graph",
        xlabel: "Q (nC)",
        ylabel: "ΔV (V)",
        xmax: 10,
        ymax: 20,
        lines: [
          { from: [0, 0], to: [10, 20], label: "data" }
        ],
        points: [
          { q: 8, p: 16, label: "(8.0, 16)", guides: true }
        ],
        xticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" },
          { v: 8, label: "8" },
          { v: 10, label: "10" }
        ],
        yticks: [
          { v: 5, label: "5" },
          { v: 10, label: "10" },
          { v: 15, label: "15" },
          { v: 20, label: "20" }
        ]
      },
      opts: ["128 nJ", "64 nJ", "32 nJ", "16 nJ"],
      a: 1,
      why: "Enerji çizginin altındaki üçgenin alanıdır: U = ½QΔV = ½(8,0 nC)(16 V) = 64 nJ. En çekici yanlış şık A: ½'yi unutup QΔV = 128 nJ bulmak."
    }
  ]
};
