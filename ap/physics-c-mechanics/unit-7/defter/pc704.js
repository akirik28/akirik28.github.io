/* Kitpath not defteri · pc704 · 7.5 Basit ve Fiziksel Sarkaç
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc704",
  amac: "Bu konu sarkaçları anlatıyor: basit sarkaç, sabit eksen etrafında salınan fiziksel sarkaç ve tele asılı burulma (torsion) sarkacı. Küçük açı yaklaşımının neden SHM verdiğini ve periyodu tork denkleminden nasıl bulacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Küçük açıda sarkaç SHM'dir",
      kisa: "Küçük açıda sin θ ≈ θ olur; geri çağırıcı tork θ ile orantılı, hareket SHM.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔔",
              terim: "Simple pendulum",
              tr: "basit sarkaç",
              tanim: "Hafif bir ipin ucunda, pivottan ℓ uzaklıkta asılı noktasal kütle. Küçük açıda T = 2π√(ℓ/g).",
              ornek: "Tavandan ince iple sarkan küçük bilye."
            },
            {
              ikon: "📐",
              terim: "Small-angle approximation",
              tr: "küçük açı yaklaşımı",
              tanim: "θ küçük ve radyan cinsindeyse sin θ ≈ θ. Böylece geri çağırıcı tork θ ile orantılı olur.",
              ornek: "θ = 0,1 rad için sin θ = 0,0998."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = θ ve y = sin θ (θ radyan)",
          xlabel: "θ (rad)",
          ylabel: "y",
          xmax: 1.6,
          ymax: 1.6,
          xticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1,0" },
            { v: 1.5, label: "1,5" }
          ],
          yticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1,0" },
            { v: 1.5, label: "1,5" }
          ],
          ogeler: [
            {
              id: "ln",
              tip: "cizgi",
              from: [0, 0],
              to: [1.6, 1.6],
              renk: 1,
              kesik: true,
              etiket: "θ",
              gizli: true
            },
            {
              id: "sn",
              tip: "egri",
              noktalar: [
                [0, 0], [0.1, 0.1], [0.2, 0.199], [0.3, 0.296], [0.4, 0.389], [0.5, 0.479],
                [0.6, 0.565], [0.7, 0.644], [0.8, 0.717], [0.9, 0.783], [1, 0.841], [1.1, 0.891],
                [1.2, 0.932], [1.3, 0.964], [1.4, 0.985], [1.5, 0.997], [1.6, 1]
              ],
              renk: 0,
              etiket: "sin θ",
              gizli: true
            },
            { id: "g1", tip: "cizgi", from: [0.2, 0.199], to: [0.2, 0.2], renk: 2, gizli: true },
            {
              id: "p1",
              tip: "nokta",
              x: 0.2,
              y: 0.199,
              renk: 2,
              etiket: "0,2 rad: %0,7",
              gizli: true
            },
            { id: "g2", tip: "cizgi", from: [0.5, 0.479], to: [0.5, 0.5], renk: 2, gizli: true },
            {
              id: "p2",
              tip: "nokta",
              x: 0.5,
              y: 0.479,
              renk: 2,
              etiket: "0,5 rad: %4",
              gizli: true
            },
            { id: "g3", tip: "cizgi", from: [1, 0.841], to: [1, 1], renk: 2, gizli: true },
            { id: "p3", tip: "nokta", x: 1, y: 0.841, renk: 2, etiket: "1,0 rad: %19", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı eksende y = θ (kesikli) ve y = sin θ.", goster: ["ln", "sn"] },
            {
              metin: "θ = 0,2 rad (≈ 11°): fark yalnız %0,7. Eğriler üst üste.",
              goster: ["g1", "p1"]
            },
            { metin: "θ = 0,5 rad (≈ 29°): fark yaklaşık %4.", goster: ["g2", "p2"] },
            {
              metin: "θ = 1,0 rad (≈ 57°): fark yaklaşık %19; ==yaklaşım bozuldu==. T = 2π√(ℓ/g) yalnız küçük açıda geçerli.",
              goster: ["g3", "p3"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Büyük açıda aynı formülü kullanmak",
          metin: "T = 2π√(ℓ/g) küçük açı yaklaşımına dayanır. Genlik büyüdükçe gerçek periyot uzar: θ₀ = 60° için yaklaşık %7 daha uzundur.",
          yanlis: "Sarkaç 60° sapıyor ama T = 2π√(ℓ/g) yine tam doğru.",
          dogru: "Formül yalnız küçük açıda geçerlidir. Sınavda böyle yaz: *For small angles sin θ ≈ θ, so the restoring torque is proportional to θ and the motion is approximately simple harmonic.*"
        }
      ]
    },
    {
      baslik: "Basit sarkaçla ölçüm",
      kisa: "Periyot yalnız ℓ ve g'ye bağlıdır; kütle ve genlik (küçük açıda) karışmaz.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "T = 2π√(ℓ/g)", alt: "periyot" },
            "→",
            { t: "g = 4π²ℓ/T²", alt: "T² – ℓ grafiğinin eğimi 4π²/g" }
          ],
          aciklama: "Periyodu ölçüp ℓ'yi ya da g'yi bulabilirsin. Çok salınım sayıp süreyi sayıya bölmek ölçüm hatasını küçültür."
        },
        {
          tip: "ornek",
          baslik: "Uzun ipin boyunu kronometreyle bul",
          durum: "Avluda tavandan sarkan bir halat küçük açıyla sallanıyor; 10 salınım 60 s sürüyor. Halatın boyu kaç metre?",
          adimlar: [
            "T = 60 / 10 = 6,0 s.",
            "T = 2π√(ℓ/g) → ℓ = gT² / (4π²).",
            "ℓ = 9,8 × 6,0² / (4π²) = 352,8 / 39,48 = 8,94 m.",
            "Açıyı küçük tut (yaklaşık 10° altı) ve birçok salınımı say: sayma hatası T'ye bölünerek küçülür."
          ],
          sonuc: "ℓ ≈ 8,9 m"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The period of a simple pendulum is independent of the mass of the bob and, for small angles, of its amplitude.*"
            },
            {
              ikon: "✍️",
              baslik: "Deney",
              metin: "*Timing many oscillations and dividing by their number reduces the uncertainty in the period.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Fiziksel sarkaç: torktan periyoda",
      kisa: "τ = −mgd sin θ ≈ −mgdθ = Iα verir; T = 2π√(I/(mgd)).",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Türetme (5 adım)",
          adimlar: [
            {
              baslik: "Geri çağırıcı tork",
              metin: "Fiziksel sarkaç (*physical pendulum*) sabit bir eksen etrafında salınan katı cisimdir. Ağırlık kütle merkezine etkir; pivota göre tork τ = −mgd sin θ. d, pivottan kütle merkezine uzaklık; eksi işaret θ'yı küçültür."
            },
            {
              baslik: "Küçük açı",
              metin: "sin θ ≈ θ yazınca τ = −mgdθ olur: tork açıyla orantılı."
            },
            {
              baslik: "Dönme için Newton",
              metin: "τ = Iα ve α = d²θ/dt², o yüzden I · d²θ/dt² = −mgdθ."
            },
            {
              baslik: "SHM kalıbı",
              metin: "d²θ/dt² = −(mgd/I)θ. d²θ/dt² = −ω²θ ile karşılaştır: ω² = mgd/I."
            },
            {
              baslik: "Periyot",
              metin: "T = 2π/ω = 2π√(I/(mgd)). Basit sarkaçta I = mℓ², d = ℓ olur: T = 2π√(ℓ/g)."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Üç sarkaç, aynı formül",
          head: ["Sarkaç", "I (pivota göre)", "d", "T = 2π√(I/(mgd))"],
          rows: [
            ["Noktasal kütle, ip ℓ", "mℓ²", "ℓ", "2π√(ℓ/g)"],
            ["Düzgün çubuk, ucundan (boy L)", "(1/3)mL²", "L/2", "2π√(2L/(3g))"],
            ["Düzgün disk, kenarından (yarıçap R)", "(3/2)mR²", "R", "2π√(3R/(2g))"]
          ],
          vurgu: 1,
          not: "Disk için I = ½mR² + mR² (paralel eksen teoremi: I′ = I_cm + Md²)."
        },
        {
          tip: "ornek",
          baslik: "L = 1,0 m'lik düzgün çubuk, ucundan asılı",
          durum: "Küçük açılı salınımın periyodunu bul ve 1,0 m'lik basit sarkaçla karşılaştır.",
          adimlar: [
            "I = (1/3)mL², d = L/2 → I/(mgd) = (mL²/3) / (mg L/2) = 2L/(3g).",
            "2L/(3g) = 2,0 / 29,4 = 0,0680 s².",
            "T = 2π√0,0680 = 2π × 0,2608 ≈ 1,64 s (kütle sadeleşti).",
            "1,0 m'lik basit sarkaç 2,01 s verir; çubuk onun 2L/3 ≈ 0,67 m'lik eşdeğeri gibi davranır."
          ],
          sonuc: "T ≈ 1,64 s, kütleden bağımsız; eşdeğer basit sarkaç boyu 2L/3 ≈ 0,67 m"
        },
        {
          tip: "tuzak",
          baslik: "d ve I'yı karıştırmak",
          metin: "d, pivottan kütle merkezine olan uzaklıktır; cismin boyu değil. I ise pivota göre alınır; kütle merkezine göre değerini kullanırsan paralel eksen teoremini unutmuş olursun.",
          yanlis: "Çubuk için d = L ve I = (1/12)mL² (merkez eksenine göre).",
          dogru: "d = L/2 ve I = (1/3)mL² (uçtan). Sınavda böyle yaz: *Using sin θ ≈ θ, τ = −mgdθ = Iα, so α = −(mgd/I)θ, which is SHM with ω² = mgd/I.*"
        }
      ]
    },
    {
      baslik: "Burulma (torsion) sarkacı",
      kisa: "Geri çağırıcı tork açıyla orantılıysa (τ = −κθ) T = 2π√(I/κ).",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🪀",
              terim: "Torsion pendulum",
              tr: "burulma sarkacı",
              tanim: "Merkezinden tele asılı yatay disk gibi bir sistem: tel burulunca açıyla orantılı geri çağırıcı tork doğar, Iα = −κΔθ.",
              ornek: "Laboratuvardaki burulma terazisi."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Yay–kütle ile burulma sarkacı karşılaştırması",
          head: ["Yay–kütle", "Burulma sarkacı"],
          rows: [
            ["x (m)", "θ (rad)"],
            ["F = −kx", "τ = −κθ"],
            ["m (kg)", "I (kg·m²)"],
            ["k (N/m)", "κ (N·m/rad)"],
            ["T = 2π√(m/k)", "T = 2π√(I/κ)"]
          ],
          vurgu: 4,
          not: "Sınavda κ çoğu zaman k diye yazılır (Iα = −kΔθ); birimi N·m/rad. Sınavda böyle yaz: *In a torsion pendulum the restoring torque is proportional to the angular displacement, so the motion is simple harmonic.*"
        },
        {
          tip: "ornek",
          baslik: "I = 0,50 kg·m², κ = 2,0 N·m/rad",
          durum: "Burulma sarkacının açısal frekansını ve periyodunu bul.",
          adimlar: ["ω = √(κ/I) = √(2,0 / 0,50) = √4,0 = 2,0 rad/s.", "T = 2π/ω = 2π / 2,0 = π ≈ 3,14 s."],
          sonuc: "ω = 2,0 rad/s, T = π ≈ 3,14 s"
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
            "*Simple pendulum*: küçük açıda T = 2π√(ℓ/g); kütleye ve genliğe bağlı değil.",
            "Küçük açı yaklaşımı sin θ ≈ θ (radyan): 0,5 rad'da %4, 1 rad'da %19 hata.",
            "*Physical pendulum*: τ = −mgd sin θ ≈ −mgdθ = Iα → d²θ/dt² = −(mgd/I)θ → T = 2π√(I/(mgd)).",
            "d pivottan kütle merkezine uzaklık, I pivota göre (paralel eksen: I′ = I_cm + Md²).",
            "Çubuk (uçtan): T = 2π√(2L/(3g)); L = 1,0 m için ≈ 1,64 s.",
            "*Torsion pendulum*: Iα = −κΔθ → T = 2π√(I/κ); κ'nın birimi N·m/rad.",
            "T = 2π√(ℓ/g)'den g = 4π²ℓ/T²: T² – ℓ grafiği doğrudur, eğim 4π²/g.",
            "Gerekçede tork, küçük açı yaklaşımı ve SHM kalıbını sırayla yaz."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A uniform thin rod of mass M and length L is suspended from one end and swings as a physical pendulum with small amplitude. The rotational inertia of the rod about that end is ML²/3. What is the period of oscillation?",
      opts: ["T = 2π√(L/(6g))", "T = 2π√(L/g)", "T = 2π√(3L/(2g))", "T = 2π√(2L/(3g))"],
      a: 3,
      why: "T = 2π√(I/(Mgd)) ve d = L/2: I/(Mgd) = (ML²/3)/(MgL/2) = 2L/(3g). L/(6g), I'nın kütle merkezine göre (ML²/12) alınmasıyla çıkar; 2π√(L/g) basit sarkaçtır; 3L/(2g) ise oranın tersidir."
    },
    {
      q: "Students vary the length ℓ of a simple pendulum and measure its period T for small oscillations, obtaining the data shown. They plot T² versus ℓ and draw a best-fit line. Which of the following is the best estimate of g from the line?",
      opts: ["0.25 m/s²", "4.0 m/s²", "9.8 m/s²", "39 m/s²"],
      a: 2,
      why: "T² = (4π²/g)ℓ, eğim 4π²/g. Eğim ≈ (8,07 − 1,00) / (2,00 − 0,25) ≈ 4,0 s²/m → g = 4π²/4,0 ≈ 9,8 m/s². 4,0 eğimin kendisi; 0,25 eğimin tersi; 39 ise 4π² değeri.",
      fig: {
        type: "table",
        head: ["ℓ (m)", "T (s)"],
        rows: [
          ["0.25", "1.00"],
          ["0.50", "1.42"],
          ["1.00", "2.01"],
          ["2.00", "2.84"]
        ],
        caption: "Period of a simple pendulum"
      }
    },
    {
      q: "Why does a simple pendulum swinging through a small angle undergo approximately simple harmonic motion?",
      opts: [
        "Because sin θ ≈ θ, so the restoring torque is proportional to the angular displacement",
        "Because the tension in the string is negligible at small angles",
        "Because the mass of the bob is negligible at small angles",
        "Because the restoring force has constant magnitude at small angles"
      ],
      a: 0,
      why: "Geri çağırıcı tork τ = −mgℓ sin θ; küçük θ'da sin θ ≈ θ olduğundan τ ≈ −mgℓθ açıyla orantılı olur ve d²θ/dt² = −ω²θ biçimi çıkar. İpteki gerilme ya da kütle ihmal edilmez; geri çağırıcı kuvvet de sabit değil, θ ile büyür."
    },
    {
      q: "A horizontal disk is suspended at its center from a wire. When the disk is rotated by a small angle, the wire exerts a restoring torque of magnitude κθ. The disk has rotational inertia I = 0.50 kg·m² and κ = 2.0 N·m/rad. What is the period of the torsional oscillations?",
      opts: ["1.6 s", "3.1 s", "6.3 s", "12.6 s"],
      a: 1,
      why: "T = 2π√(I/κ) = 2π√(0,50/2,0) = 2π × 0,50 = π ≈ 3,1 s. 12,6 s oranı ters almak (2π√(κ/I) = 4π); 6,3 s oranı yerine çarpımı kullanmak (2π√(Iκ) = 2π); 1,6 s ise T/2."
    },
    {
      q: "Three physical pendula A, B and C, each pivoted at a fixed point on Earth, have the properties shown, where d is the distance from the pivot to the center of mass and I is the rotational inertia about the pivot. Which pendula have the same period for small oscillations?",
      opts: ["A and B only", "A and C only", "B and C only", "A, B and C"],
      a: 0,
      why: "T = 2π√(I/(mgd)). A: 0,10/(1,0·9,8·0,20) = 0,051 s²; B: 0,20/(2,0·9,8·0,20) = 0,051 s² (hem I hem m iki katı, sadeleşir); C: 0,20/(1,0·9,8·0,20) = 0,102 s². Yani T_A = T_B ≈ 1,42 s, T_C ≈ 2,01 s.",
      fig: {
        type: "table",
        head: ["Pendulum", "m (kg)", "I (kg·m²)", "d (m)"],
        rows: [
          ["A", "1.0", "0.10", "0.20"],
          ["B", "2.0", "0.20", "0.20"],
          ["C", "1.0", "0.20", "0.20"]
        ],
        caption: "Physical pendula"
      }
    }
  ]
};
