/* Kitpath not defteri · pe804 · 8.5–8.6 Elektrik Akısı ve Gauss Yasası
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe804",
  amac: "Bu konu elektrik akısını ve Gauss yasasını anlatıyor: kapalı bir yüzeyden geçen akı yalnızca içindeki yüke bağlıdır. Simetrili yüklerde (küre, silindir, düzlem) alanı integral almadan bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Elektrik akısı",
      kisa: "Akı = EA cos θ: alanın yüzeye dik bileşeni çarpı alan.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌊",
              terim: "Electric flux",
              tr: "elektrik akısı",
              tanim: "Alanın bir yüzeyden \"geçen miktarı\": Φ_E = ∫E·dA. Düzgün alan, düz yüzeyde Φ_E = E·A = EA cos θ. Birimi N·m²/C.",
              ornek: "Alan yüzeye dik ise Φ = EA, paralelse 0."
            },
            {
              ikon: "➡️",
              terim: "Outward normal",
              tr: "dışa normal",
              tanim: "Yüzey vektörü dA yüzeye diktir. Kapalı yüzeyde dışarıyı gösterir: dışarı çıkan alan +, içeri giren −.",
              ornek: "Yüzeyden dışarı çıkan çizgiler pozitif akı verir."
            },
            {
              ikon: "🫧",
              terim: "Gaussian surface",
              tr: "Gauss yüzeyi",
              tanim: "Kapalı, üç boyutlu, hayalî yüzey. Yük dağılımının simetrisine göre seçilir.",
              ornek: "Nokta yükü saran küre."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Φ(θ) = EA cos θ (E = 500 N/C, A = 0,20 m²)",
          xlabel: "θ",
          ylabel: "Φ (N·m²/C)",
          xmax: 9,
          ymax: 5,
          xticks: [
            { v: 0, label: "0°" },
            { v: 3, label: "60°" },
            { v: 4.5, label: "90°" },
            { v: 6, label: "120°" },
            { v: 9, label: "180°" }
          ],
          yticks: [
            { v: 0.5, label: "−100" },
            { v: 2.5, label: "0" },
            { v: 4.5, label: "100" }
          ],
          ogeler: [
            { id: "z", tip: "cizgi", from: [0, 2.5], to: [9, 2.5], kesik: true, renk: 3 },
            {
              id: "fc",
              tip: "egri",
              noktalar: [
                [0, 4.5], [0.5, 4.47], [1, 4.379], [1.5, 4.232], [2, 4.032], [2.5, 3.786],
                [3, 3.5], [3.5, 3.184], [4, 2.847], [4.5, 2.5], [5, 2.153], [5.5, 1.816],
                [6, 1.5], [6.5, 1.214], [7, 0.968], [7.5, 0.768], [8, 0.621], [8.5, 0.53],
                [9, 0.5]
              ],
              renk: 0,
              etiket: "Φ",
              gizli: true
            },
            { id: "a0", tip: "nokta", x: 0, y: 4.5, renk: 1, etiket: "0°: +100", gizli: true },
            { id: "a60", tip: "nokta", x: 3, y: 3.5, renk: 1, etiket: "60°: +50", gizli: true },
            { id: "a90", tip: "nokta", x: 4.5, y: 2.5, renk: 1, etiket: "90°: 0", gizli: true },
            { id: "a180", tip: "nokta", x: 9, y: 0.5, renk: 2, etiket: "180°: −100", gizli: true }
          ],
          durumlar: [
            {
              metin: "Düzgün alanda düz bir yüzey: EA = 500 × 0,20 = 100 N·m²/C. θ, alan ile yüzeyin normali arasındaki açı.",
              goster: ["fc"]
            },
            { metin: "θ = 0°: alan normalle aynı yönde, Φ = +100.", goster: ["a0"] },
            { metin: "θ = 60°: Φ = EA cos 60° = +50.", goster: ["a60"] },
            {
              metin: "θ = 90°: alan yüzeye paralel, yüzeyden hiç çizgi geçmiyor: Φ = 0.",
              goster: ["a90"]
            },
            { metin: "θ = 180°: alan normalin tersi (yüzeye giriyor): Φ = −100.", goster: ["a180"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Net akı sıfır, alan sıfır demek değildir",
          metin: "Düzgün alanda kapalı bir yüzeye giren akı çıkana eşittir, net akı 0'dır. Ama alan yüzeyde her yerde sıfır değildir.",
          yanlis: "Kapalı yüzeyden net akı 0 ise yüzeyde E = 0'dır.",
          dogru: "Net akı 0, yalnızca içerideki net yükün 0 olduğunu söyler. Sınavda böyle yaz: *The net flux is zero because the same amount of field enters and leaves the closed surface.*"
        }
      ]
    },
    {
      baslik: "Gauss yasası ve yüzey seçimi",
      kisa: "Kapalı yüzeyden geçen net akı, içindeki net yük bölü ε₀'dır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "∮ E · dA = q_enc / ε₀", alt: "Gauss yasası" },
            "ve",
            { t: "Q = ∫ ρ dV", alt: "yoğunluktan yük" }
          ],
          aciklama: "Akı yalnız içerideki yüke bağlıdır; yüzeyin boyutu önemli değildir. Alan ise dışarıdakiler dahil bütün yüklerin alanıdır. Gauss yasası Maxwell'in birinci denklemidir."
        },
        {
          tip: "adimlar",
          baslik: "Gauss yasasıyla E bulmak",
          adimlar: [
            {
              baslik: "Simetriyi tanı",
              metin: "Küresel, silindirik ya da düzlemsel simetri var mı? Yoksa yasa yine doğrudur ama E'yi bulmaya yaramaz."
            },
            {
              baslik: "Yüzeyi seç",
              metin: "Kapalı bir yüzey: E her parçada ya yüzeye dik ya paralel olsun, E sabit olsun."
            },
            {
              baslik: "Akıyı yaz",
              metin: "∮E·dA = E × (yüzeyin dik kısmının alanı). Alan hacim değil: küre 4πr², silindir yan yüzü 2πrL."
            },
            { baslik: "q_enc'yi bul", metin: "q_enc = λL, σA ya da ∫ρ dV; yoğunluğu doğru eşle." },
            { baslik: "E'yi çöz", metin: "E × alan = q_enc / ε₀." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Üç simetri",
          head: ["Simetri", "Gauss yüzeyi", "E'ye dik alan", "E (dışarıda)"],
          rows: [
            ["Küre / nokta yük", "r yarıçaplı küre", "4πr²", "Q/(4πε₀r²)"],
            ["Sonsuz tel / silindir", "r yarıçaplı, L boylu silindir", "2πrL", "λ/(2πε₀r)"],
            ["Sonsuz düzlem", "iki yüzü A olan kutu", "2A", "σ/(2ε₀)"]
          ],
          vurgu: 0,
          not: "Sınavda böyle yaz: *By symmetry E is radial and constant on a sphere of radius r, so ∮E·dA = E(4πr²) = q_enc/ε₀.*"
        }
      ]
    },
    {
      baslik: "Küresel simetri ve yoğunluk fonksiyonu",
      kisa: "ρ(r) verilince q_enc = ∫ρ dV ile bulunur, sonra Gauss uygulanır.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "ρ = αr (r ≤ R), α = 2,0×10⁻⁶ C/m⁴, R = 0,10 m",
          durum: "Kürenin içinde ve dışında elektrik alanını bul.",
          adimlar: [
            "Küresel simetri: Gauss yüzeyi yarıçapı r olan küre; ∮E·dA = E(4πr²).",
            "dV = 4πr′² dr′ (kalınlığı dr′ olan kabuk). q_enc(r) = ∫₀^r αr′(4πr′² dr′) = 4πα ∫₀^r r′³ dr′ = παr⁴.",
            "Gauss: E(4πr²) = παr⁴/ε₀ → E = αr²/(4ε₀), r ≤ R.",
            "Dışarıda (r ≥ R): q_enc = Q = παR⁴ = π(2,0×10⁻⁶)(10⁻⁴) = 6,3×10⁻¹⁰ C ve E = Q/(4πε₀r²) = kQ/r².",
            "Yüzeyde (r = R): E = αR²/(4ε₀) = (2,0×10⁻⁶)(0,010) / (4 × 8,85×10⁻¹²) ≈ 5,65×10² N/C; kQ/R² ile aynı ✓ (alan yüzeyde süreklidir)."
          ],
          sonuc: "q_enc = παr⁴; E = αr²/(4ε₀) (r ≤ R); yüzeyde ≈ 5,65×10² N/C; dışarıda kQ/r²"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "Gauss ile E bulunur",
            maddeler: [
              "Küresel, silindirik, düzlemsel simetri",
              "E yüzeyde sabit ve dik/paralel",
              "∮E·dA kolay"
            ]
          },
          sag: {
            ikon: "⛔",
            baslik: "Yasa geçerli ama E çıkmaz",
            maddeler: ["Simetri yok", "E yüzeyde değişir", "Akı yine q_enc/ε₀, ama E çıkarılamaz"]
          },
          oyun: [
            {
              metin: "Sonsuz uzun düzgün yüklü tel.",
              cevap: "sol",
              neden: "Silindirik simetri: E yan yüzde sabit ve dik."
            },
            {
              metin: "ρ = αr olan yüklü küre.",
              cevap: "sol",
              neden: "Küresel simetri: ρ yalnız r'ye bağlı."
            },
            {
              metin: "Köşelerinde dört yük bulunan bir kare.",
              cevap: "sag",
              neden: "Simetri yok; süperpozisyonla toplanır."
            },
            {
              metin: "Yüklü halkanın ekseni üzerindeki bir nokta.",
              cevap: "sag",
              neden: "Halka için uygun Gauss yüzeyi yok; 8.4'teki integrali kullan."
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*Using a spherical Gaussian surface of radius r: E(4πr²) = q_enc/ε₀, where q_enc = ∫ρ dV.*"
            },
            {
              ikon: "✍️",
              baslik: "Gerekçe",
              metin: "*The flux depends only on the enclosed charge, not on the size of the surface.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Silindir ve düzlem",
      kisa: "İki eş eksenli iletkenin arasında E ∝ 1/r; içte ve dışta (net yük 0) E = 0.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Eş eksenli silindirler: R₁ = 2 cm (+λ = +5,0 nC/m), R₂ = 6 cm (−λ)",
          xlabel: "r (cm)",
          ylabel: "E (kN/C)",
          xmax: 8,
          ymax: 5,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "zin", tip: "cizgi", from: [0, 0], to: [2, 0], renk: 0, gizli: true },
            { id: "zt1", tip: "yazi", x: 1, y: 0.5, metin: "E = 0", gizli: true },
            {
              id: "j1",
              tip: "cizgi",
              from: [2, 0],
              to: [2, 4.5],
              kesik: true,
              renk: 3,
              gizli: true
            },
            {
              id: "mid",
              tip: "egri",
              noktalar: [
                [2, 4.5], [2.25, 4], [2.5, 3.6], [2.75, 3.273], [3, 3], [3.25, 2.769],
                [3.5, 2.571], [3.75, 2.4], [4, 2.25], [4.25, 2.118], [4.5, 2], [4.75, 1.895],
                [5, 1.8], [5.25, 1.714], [5.5, 1.636], [5.75, 1.565], [6, 1.5]
              ],
              renk: 0,
              etiket: "λ/(2πε₀r)",
              gizli: true
            },
            { id: "m1", tip: "nokta", x: 2, y: 4.5, renk: 1, etiket: "4,5", gizli: true },
            { id: "m2", tip: "nokta", x: 6, y: 1.5, renk: 1, etiket: "1,5", gizli: true },
            {
              id: "wr",
              tip: "cizgi",
              from: [2, 4.5],
              to: [6, 4.5],
              kesik: true,
              renk: 2,
              etiket: "✗ sabit",
              gizli: true
            },
            {
              id: "j2",
              tip: "cizgi",
              from: [6, 1.5],
              to: [6, 0],
              kesik: true,
              renk: 3,
              gizli: true
            },
            { id: "zout", tip: "cizgi", from: [6, 0], to: [8, 0], renk: 0, gizli: true },
            { id: "zt2", tip: "yazi", x: 7, y: 0.5, metin: "E = 0", gizli: true }
          ],
          durumlar: [
            {
              metin: "r < R₁: iç iletkenin içi, Gauss yüzeyi içinde net yük yok → E = 0.",
              goster: ["zin", "zt1"]
            },
            {
              metin: "R₁ < r < R₂: Gauss silindiri +λL içerir → E(2πrL) = λL/ε₀ → E = λ/(2πε₀r) = 90/r. R₁'de 4,5; R₂'de 1,5 kN/C.",
              goster: ["j1", "mid", "m1", "m2"]
            },
            {
              metin: "Arada alanı sabit çizmek yanlış: 1/r ile azalır (r 3 kat artınca E 3 kat azalır).",
              goster: ["wr"]
            },
            {
              metin: "r > R₂: Gauss silindiri +λL − λL = 0 içerir → ==E = 0==.",
              gizle: ["wr"],
              goster: ["j2", "zout", "zt2"]
            }
          ]
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 500, sonek: " N/C", etiket: "sonsuz yüklü düzlem: σ/(2ε₀), σ = 8,85 nC/m²" },
            { deger: 1000, sonek: " N/C", etiket: "iletken yüzeyinin hemen dışı: σ/ε₀" },
            { deger: 1000, sonek: " N·m²/C", etiket: "q = 8,85 nC içeren her kapalı yüzeyden akı" }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Gauss'ta en çok yapılan hatalar (CR25)",
          metin: "2025'teki Gauss sorusunda (ortalama 4,43/10) öğrenciler alan yerine hacim kullandı, silindirin uzunluğunu atladı, r ile R₁'i karıştırdı, kabuklar arasında E'yi sabit çizdi ve net yükün 0 olduğu bölgelerde sıfırdan farklı alan çizdi.",
          yanlis: "Yüzey alanı πr² (kesit) ya da πr²L (hacim); iki kabuk arasında E sabit.",
          dogru: "Silindir yan yüzü 2πrL; E = λ/(2πε₀r) ∝ 1/r. Sınavda böyle yaz: *The enclosed charge is zero for r > R₂, so the field there is zero.*"
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
            "*Electric flux* Φ_E = ∫E·dA; düzgün alanda düz yüzey için EA cos θ (θ: alan ile normal arası).",
            "Kapalı yüzeyde dA dışarıyı gösterir: çıkan akı +, giren −; paralel alan 0 akı verir.",
            "Gauss: ∮E·dA = q_enc/ε₀; akı yalnız içerideki net yüke bağlıdır, yüzeyin boyutuna değil.",
            "Gauss yüzeyi kapalı ve 3 boyutludur; E her parçada dik ya da paralel olacak biçimde seçilir.",
            "Alanlar: küre 4πr², silindir yan yüzü 2πrL, düzlemde kutunun iki yüzü 2A; kesit alanı ya da hacim değil.",
            "Sonuçlar: Q/(4πε₀r²), λ/(2πε₀r), σ/(2ε₀) (düzlem) ve iletken yüzeyi dışında σ/ε₀.",
            "ρ(r) verilirse q_enc = ∫ρ dV (ρ = αr için παr⁴, E = αr²/(4ε₀)).",
            "Eş eksenli silindirlerde arada E ∝ 1/r; r < R₁ ve r > R₂ (net yük 0) bölgelerinde E = 0."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A uniform electric field of magnitude 500 N/C passes through a flat surface of area 0.20 m². The angle between the field and the normal to the surface is 60°. What is the electric flux through the surface?",
      opts: ["0", "50 N·m²/C", "87 N·m²/C", "100 N·m²/C"],
      a: 1,
      why: "Φ = EA cos θ = 500 × 0,20 × cos 60° = 50 N·m²/C. 100 cos yerine hiç çarpan koymak (θ = 0°); 87 sin 60° kullanmak; 0 ise alan yüzeye paralelken olurdu (θ = 90°)."
    },
    {
      q: "A long, solid conducting cylinder is surrounded by a coaxial thin conducting cylindrical shell. The table shows the magnitude of the electric field at three distances r from the common axis. The solid cylinder has radius 2 cm and the shell has radius 6 cm. Which of the following is consistent with the data?",
      opts: [
        "A single long line of charge with no outer shell",
        "The inner cylinder and the outer shell both carry +λ per unit length",
        "The inner cylinder carries +λ per unit length and the outer shell carries −λ per unit length",
        "A uniformly charged insulating cylinder"
      ],
      a: 2,
      why: "r = 1 cm (iletken içinde) E = 0; r = 4 cm'de Gauss silindiri +λL içerir: E = 2kλ/r = 2250 N/C (λ = 5,0 nC/m). r = 8 cm'de E = 0 ise q_enc = 0: kabuk −λ taşıyor. Tek tel olsaydı 8 cm'de 1125 N/C olurdu; ikisi de +λ ise dışarıda alan 0 olamazdı; yalıtkan silindirin içinde de E ≠ 0 olurdu.",
      fig: {
        type: "table",
        head: ["r (cm)", "E (N/C)"],
        rows: [
          ["1", "0"],
          ["4", "2250"],
          ["8", "0"]
        ],
        caption: "Field at three distances from the axis"
      }
    },
    {
      q: "Three closed surfaces S₁, S₂ and S₃ are described in the table. Which of the following correctly compares the net outward electric flux through them?",
      opts: ["Φ₁ = Φ₂ > Φ₃", "Φ₂ > Φ₁ > Φ₃", "Φ₃ > Φ₁ = Φ₂", "Φ₁ > Φ₂ > Φ₃"],
      a: 0,
      why: "Gauss: Φ = q_enc/ε₀ ve yalnız içerideki yük sayılır. S₁: +3,0 − 1,0 = +2,0 nC; S₂: +2,0 nC (dışarıdaki +5,0 nC akıya katkı vermez); S₃: −4,0 nC. Yani Φ₁ = Φ₂ ≈ +226 N·m²/C > Φ₃ ≈ −452 N·m²/C.",
      fig: {
        type: "table",
        head: ["Surface", "Charge inside (nC)", "Charge outside (nC)"],
        rows: [
          ["S₁", "+3.0 and −1.0", "none"],
          ["S₂", "+2.0", "+5.0"],
          ["S₃", "−4.0", "+1.0"]
        ],
        caption: "Closed surfaces and nearby charges"
      }
    },
    {
      q: "A very long straight wire has uniform linear charge density λ. Using a coaxial cylindrical Gaussian surface of radius r and length L, what is the magnitude of the electric field at a distance r from the wire?",
      opts: ["λ / (4πε₀r²)", "λ / (2πε₀r²)", "λL / (2πε₀r)", "λ / (2πε₀r)"],
      a: 3,
      why: "E(2πrL) = λL/ε₀ → E = λ/(2πε₀r). L her iki yanda sadeleşir, o yüzden λL/(2πε₀r) yanlış. 4πr² küre alanıdır (silindir için kullanılamaz); r² ise yan yüzün alanını 2πr yerine 2πr² almaktır."
    },
    {
      q: "A sphere of radius R has a volume charge density ρ = αr for r ≤ R, where α is a constant. What is the charge enclosed within a sphere of radius r < R centered on the sphere?",
      opts: ["αr²/2", "(4/3)παr⁴", "παr⁴", "4παr³"],
      a: 2,
      why: "q_enc = ∫ρ dV = ∫₀^r αr′(4πr′² dr′) = 4πα · r⁴/4 = παr⁴. (4/3)παr⁴ ρ'yu sabit alıp hacimle çarpmaktır; αr²/2 dV = 4πr′²dr′ çarpanını unutmaktır; 4παr³ ise ρ(r)'yi yüzey alanı 4πr² ile çarpmaktır."
    }
  ]
};
