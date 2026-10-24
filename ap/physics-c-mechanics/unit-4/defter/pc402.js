/* Kitpath not defteri · pc402 · 4.3 Momentumun Korunumu
   Kaynak: kaynak/ced-physc.md (Topic 4.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc402",
  amac: "Bu konu momentumun korunumunu anlatıyor: dışarıdan net kuvvet yoksa bir sistemin toplam momentumu değişmez. Doğru sistemi seçmeyi, bir ve iki boyutlu çarpışmaları çözmeyi ve patlamada kütle merkezinin davranışını öğreneceksin.",
  bolumler: [
    {
      baslik: "Sistem seçimi ve momentum çizelgesi",
      kisa: "Net dış kuvvet yoksa sistemin momentumu sabittir; parçalardaki değişimler birbirini götürür.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔁",
              terim: "Internal / external force",
              tr: "iç / dış kuvvet",
              tanim: "İç kuvvetler sistemin parçaları arasındadır; Newton'un 3. yasası gereği çift çift eşit ve zıttır, toplam momentumu değiştiremez. Yalnız dış kuvvet değiştirir.",
              ornek: "Buzda iki patenci birbirini itiyor: iç kuvvet; buz ve yerçekimi dengede."
            },
            {
              ikon: "🎯",
              terim: "Center-of-mass velocity",
              tr: "kütle merkezi hızı",
              tanim: "v_cm = Σp_i / Σm_i = Σm_i v_i / Σm_i. Net dış kuvvet yoksa sabittir.",
              ornek: "Başlangıçta durgun sistemde v_cm = 0 kalır."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Momentum çizelgesi: 3 kg (+2 m/s) ve 1 kg (−2 m/s) yapışıyor",
          xlabel: "p (kg·m/s)",
          ylabel: "",
          xmax: 11,
          ymax: 7,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "v0", tip: "cizgi", from: [4, 0.8], to: [4, 6.6], renk: 3, kesik: true },
            { id: "on", tip: "yazi", x: 0.2, y: 4.8, metin: "önce", hiza: "start" },
            { id: "so", tip: "yazi", x: 0.2, y: 1.6, metin: "sonra", hiza: "start" },
            { id: "aA", tip: "ok", from: [4, 5.8], to: [10, 5.8], renk: 0, gizli: true },
            { id: "tA", tip: "yazi", x: 7, y: 6.3, metin: "p_A = +6", gizli: true },
            { id: "aB", tip: "ok", from: [4, 4.8], to: [2, 4.8], renk: 1, gizli: true },
            { id: "tB", tip: "yazi", x: 3, y: 5.25, metin: "p_B = −2", gizli: true },
            { id: "sB", tip: "ok", from: [4, 3.8], to: [8, 3.8], renk: 2, gizli: true },
            { id: "tS", tip: "yazi", x: 6, y: 4.25, metin: "Σp = +4", gizli: true },
            { id: "sA", tip: "ok", from: [4, 1.6], to: [8, 1.6], renk: 2, gizli: true },
            { id: "tS2", tip: "yazi", x: 6, y: 2.05, metin: "Σp = +4 (aynı)", gizli: true }
          ],
          durumlar: [
            {
              metin: "Önce: A (3 kg, +2 m/s) için p_A = +6; B (1 kg, −2 m/s) için p_B = −2 kg·m/s.",
              goster: ["aA", "tA", "aB", "tB"]
            },
            {
              metin: "Sistem oku parçaların ==vektör toplamıdır==: +6 + (−2) = +4. 'Önce' için tek bir sistem oku çizilir.",
              goster: ["sB", "tS"]
            },
            {
              metin: "Sonra: yapışık 4 kg gidiyor: 4v = +4 ⇒ v = +1 m/s. Sistem oku aynı uzunlukta. Sınavda böyle yaz: *There is no net external force on the system, so the total momentum is conserved.*",
              goster: ["sA", "tS2"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Korunum denklemi: kayıktan atlayan çocuk",
      kisa: "Σp_ilk = Σp_son: önce +yönü seç, sonra tek bilinmeyeni çöz.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "Σp_ilk", alt: "m₁v₁ + m₂v₂ + …" },
            "=",
            { t: "Σp_son", alt: "m₁v₁′ + m₂v₂′ + …" }
          ],
          aciklama: "Önce +yönü seç ve işaretleri koru; çarpışma sonrası yönü varsayma, denklem söyler. Sınavda böyle yaz: *Momentum is conserved because the net external force on the system is zero.*"
        },
        {
          tip: "ornek",
          baslik: "Kıyıdan ayrılan kayık",
          durum: "Durgun 150 kg'lık kayıktan 50 kg'lık çocuk kıyıya doğru yere göre 3 m/s ile atlıyor (suyun sürtünmesi ihmal). Kayığın hızı nedir?",
          adimlar: [
            "Sistem = çocuk + kayık; yatayda dış kuvvet yok. Kıyıya doğru +x.",
            "Σp_ilk = 0 (ikisi de durgun).", "Σp_son = 50 × (+3) + 150 × v = 150 + 150v.",
            "0 = 150 + 150v ⇒ v = −1 m/s: kayık kıyıdan uzaklaşır."
          ],
          sonuc: "v_kayık = −1 m/s (kıyıdan ters yönde)"
        }
      ]
    },
    {
      baslik: "İki boyutlu çarpışma: bileşen bileşen",
      kisa: "Momentum vektördür: x ve y bileşenleri ayrı ayrı korunur, büyüklükler toplanmaz.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "2 kg (+x, 3 m/s) ve 2 kg (+y, 4 m/s) yapışıyor: momentum vektörleri uç uca",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 10,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "pa", tip: "ok", from: [0.5, 0.5], to: [6.5, 0.5], renk: 0, gizli: true },
            { id: "ta", tip: "yazi", x: 3.5, y: 1.1, metin: "p_A = 6", gizli: true },
            { id: "pb", tip: "ok", from: [6.5, 0.5], to: [6.5, 8.5], renk: 1, gizli: true },
            { id: "tb", tip: "yazi", x: 6.9, y: 4.5, metin: "p_B = 8", hiza: "start", gizli: true },
            { id: "ps", tip: "ok", from: [0.5, 0.5], to: [6.5, 8.5], renk: 2, gizli: true },
            { id: "ts", tip: "yazi", x: 3.1, y: 5.8, metin: "p = 10", hiza: "end", gizli: true },
            { id: "tv", tip: "yazi", x: 4, y: 9.5, metin: "v = p/4 = (1,5; 2,0) m/s", gizli: true }
          ],
          durumlar: [
            { metin: "A (2 kg) +x yönünde 3 m/s: p_A = 6 kg·m/s.", goster: ["pa", "ta"] },
            {
              metin: "B (2 kg) +y yönünde 4 m/s: p_B = 8 kg·m/s. Okları uç uca ekliyoruz.",
              goster: ["pb", "tb"]
            },
            { metin: "Toplam: p = √(6² + 8²) = 10 kg·m/s (6–8–10 üçgeni).", goster: ["ps", "ts"] },
            {
              metin: "Yapışık 4 kg: v = p/m = (1,5; 2,0) m/s ⇒ |v| = 2,5 m/s, x ekseninden 53° yukarıda. Sınavda böyle yaz: *Momentum is conserved separately in the x and y directions.*",
              goster: ["tv"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Büyüklükleri toplama",
          metin: "Momentum vektördür. İki boyutta x ve y bileşenlerini ayrı ayrı koru; sayıları doğrudan toplama.",
          yanlis: "p_son = 6 + 8 = 14 kg·m/s ⇒ v = 14/4 = 3,5 m/s.",
          dogru: "p = √(6² + 8²) = 10 kg·m/s ⇒ v = 10/4 = 2,5 m/s."
        }
      ]
    },
    {
      baslik: "Doğru sistem: momentum ne zaman değişir?",
      kisa: "Sistem dışarıdan net itme alıyorsa momentum değişir; sistemi buna göre seç.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "🔒",
            baslik: "Momentum sabit",
            maddeler: ["Net dış kuvvet sıfır", "İç kuvvetler çift çift götürür"]
          },
          sag: {
            ikon: "↗️",
            baslik: "Momentum değişir",
            maddeler: ["Net dış itme var", "Değişim = dış itme (J = Δp)"]
          },
          oyun: [
            {
              metin: "Buzda iki patenci birbirini itiyor; sistem = iki patenci.",
              cevap: "sol",
              neden: "Yalnız iç kuvvetler var."
            },
            {
              metin: "Yere çarpıp sıçrayan top; sistem = yalnız top.",
              cevap: "sag",
              neden: "Zemin topa dışarıdan itme verir."
            },
            {
              metin: "Çarpışmanın kısa süresinde iki araba; sistem = iki araba.",
              cevap: "sol",
              neden: "İç kuvvetler çok büyük, sürtünme gibi dış kuvvetler ihmal edilir."
            },
            {
              metin: "Rampadan kayan blok; sistem = yalnız blok.",
              cevap: "sag",
              neden: "Yerçekimi ve normal kuvvet dış kuvvet: p değişir."
            },
            {
              metin: "Havada patlayan mermi; sistem = bütün parçalar, patlama anı.",
              cevap: "sol",
              neden: "Patlama iç kuvvettir."
            }
          ]
        },
        {
          tip: "not",
          metin: "Sınavda böyle yaz: *The system is the two carts; the net external force on it is zero, so the total momentum is constant.* Çarpışma modeli kısa süreli etkileşim içindir: sürtünme ya da yerçekimi uzun süre etkiyorsa momentumu korunmuş sayma."
        }
      ]
    },
    {
      baslik: "Patlama ve kütle merkezi",
      kisa: "Dış kuvvet (yerçekimi) aynı kaldığı için patlama kütle merkezinin yolunu değiştirmez.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Tepede ikiye ayrılan mermi (m ve 3m)",
          xlabel: "x (m)",
          ylabel: "y (m)",
          xmax: 320,
          ymax: 60,
          xticks: [
            { v: 60, label: "60" },
            { v: 120, label: "120" },
            { v: 180, label: "180" },
            { v: 240, label: "240" },
            { v: 300, label: "300" }
          ],
          yticks: [
            { v: 15, label: "15" },
            { v: 30, label: "30" },
            { v: 45, label: "45" }
          ],
          ogeler: [
            {
              id: "sh",
              tip: "egri",
              noktalar: [
                [0, 0], [10, 13.75], [20, 25], [30, 33.75], [40, 40], [50, 43.75], [60, 45], [70, 43.75],
                [80, 40], [90, 33.75], [100, 25], [110, 13.75], [120, 0]
              ],
              renk: 0,
              etiket: "mermi"
            },
            { id: "cm", tip: "nokta", x: 120, y: 0, renk: 3, etiket: "inecekti" },
            { id: "ex", tip: "nokta", x: 60, y: 45, renk: 2, etiket: "patlama", gizli: true },
            { id: "hv", tip: "cizgi", from: [60, 45], to: [60, 0], renk: 2, gizli: true },
            { id: "hp", tip: "nokta", x: 60, y: 0, renk: 2, etiket: "3m", gizli: true },
            {
              id: "lt",
              tip: "egri",
              noktalar: [
                [60, 45], [80, 44.6875], [100, 43.75], [120, 42.1875], [140, 40], [160, 37.1875], [180, 33.75],
                [200, 29.6875], [220, 25], [240, 19.6875], [260, 13.75], [280, 7.1875], [300, 0]
              ],
              renk: 1,
              gizli: true
            },
            { id: "lp", tip: "nokta", x: 300, y: 0, renk: 1, etiket: "m", gizli: true }
          ],
          durumlar: [
            {
              metin: "Mermi tepe noktada (x = 60 m, 45 m yükseklik) yalnız yatay hızla gidiyor. Patlamasaydı x = 120 m'de inecekti.",
              goster: ["cm"]
            },
            {
              metin: "Tepede iç patlamayla m ve 3m'lik parçaya ayrılıyor. 3m'lik parça yatay hızını kaybedip dikey düşüyor.",
              goster: ["ex", "hv", "hp"]
            },
            {
              metin: "Yatay momentum korunur: 4m·v₀ = m·v_L ⇒ v_L = 4v₀. Hafif parça dört kat hızlı, aynı sürede dört kat yol alır.",
              goster: ["lt"]
            },
            {
              metin: "m·x_L + 3m·60 = 4m·120 ⇒ x_L = 300 m. Kütle merkezi yine 120 m'de iner. Sınavda böyle yaz: *The explosion is internal, so the center of mass follows the same parabolic path.*",
              goster: ["lp"],
              set: {
                cm: { etiket: "CM" }
              }
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Kütle merkezi hesabı (iniş noktaları)",
          head: ["Parça", "Kütle", "İniş x (m)", "m·x"],
          rows: [
            ["Ağır", "3m", "60", "180m"], ["Hafif", "m", "300", "300m"],
            ["Toplam", "4m", "x_cm = 120", "480m"]
          ],
          vurgu: 2,
          not: "x_cm = Σm·x / Σm = 480m / 4m = 120 m."
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
            "Net dış kuvvet sıfırsa sistemin toplam momentumu sabittir: Σp_ilk = Σp_son.",
            "İç kuvvetler çift çift eşit ve zıt itme verir; toplam momentumu değiştiremez. Dış itme değiştirir (J = Δp).",
            "Önce sistemi ve +yönü seç. Kayık örneği: 50 kg çocuk +3 m/s ⇒ 150 kg kayık −1 m/s.",
            "Momentum çizelgesinde 'önce' ve 'sonra' sistem okları parçaların vektör toplamıdır ve aynı uzunluktadır.",
            "İki boyutta x ve y ayrı ayrı korunur: (6, 8) kg·m/s ⇒ p = 10, 4 kg için v = 2,5 m/s.",
            "Çarpışma sonrası hızın yönünü varsayma; işareti denklemden bul.",
            "Çarpışma modeli kısa süreli etkileşim içindir; uzun süre etkiyen dış kuvvet momentumu değiştirir.",
            "v_cm = Σm_i v_i / Σm_i. Patlama kütle merkezinin yolunu değiştirmez (60 m ve 300 m ⇒ CM 120 m)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A 40 kg skater at rest on frictionless ice throws a 2 kg ball horizontally at 10 m/s. What is the skater's recoil speed?",
      opts: ["0.25 m/s", "0.5 m/s", "5 m/s", "10 m/s"],
      a: 1,
      why: "Σp_ilk = 0 ⇒ 2 × 10 = 40 × v ⇒ v = 0,5 m/s ters yönde. 10 m/s topun hızını patencinin hızı sanmaktır."
    },
    {
      q: "Two blocks collide on a frictionless track. Velocities are positive to the right. What is the velocity of block B after the collision?",
      fig: {
        type: "table",
        head: ["Block", "Mass (kg)", "v before (m/s)", "v after (m/s)"],
        rows: [["A", "2", "+4", "−2"], ["B", "3", "−2", "?"]],
        caption: "Collision data"
      },
      opts: ["−2 m/s", "0 m/s", "+2 m/s", "+6 m/s"],
      a: 2,
      why: "Σp_ilk = 2(+4) + 3(−2) = +2 kg·m/s. Σp_son = 2(−2) + 3v = 2 ⇒ 3v = 6 ⇒ v = +2 m/s. −2 m/s işareti atlamaktır."
    },
    {
      q: "A ball falls to the floor and bounces back up. If the ball alone is the system, why is the system's momentum not conserved during the bounce?",
      opts: [
        "The ball's speed changes during the collision.", "The ball's kinetic energy decreases.",
        "Gravity is zero during the collision.",
        "The floor exerts a net external force (impulse) on the ball."
      ],
      a: 3,
      why: "Momentum, sistem dışından net kuvvet (itme) gelince değişir. Top sistemi için zemin dış kuvvettir. Hızın ya da K'nin değişmesi nedenin sonucudur, açıklaması değildir."
    },
    {
      q: "Puck A (2 kg) moves in the +x direction at 3 m/s. Puck B (2 kg) moves in the +y direction at 4 m/s. They collide and stick together. What is their speed just after the collision?",
      opts: ["1.75 m/s", "2.5 m/s", "3.5 m/s", "7.0 m/s"],
      a: 1,
      why: "p_x = 6, p_y = 8 kg·m/s ⇒ p = 10 kg·m/s; v = 10/4 = 2,5 m/s. 3,5 m/s büyüklükleri toplayıp (14) 4 kg'a bölmektir."
    },
    {
      q: "A projectile launched on level ground would land 80 m from the launch point. At the highest point of its path it explodes into two pieces of equal mass. Immediately after the explosion, one piece is momentarily at rest and then falls straight down. Where does the other piece land? (Neglect air resistance.)",
      opts: ["120 m", "80 m", "100 m", "160 m"],
      a: 0,
      why: "Dik düşen parça tepenin altına, x = 40 m'ye iner. Kütle merkezi yine 80 m'de iner: (40 + x)/2 = 80 ⇒ x = 120 m."
    }
  ]
};
