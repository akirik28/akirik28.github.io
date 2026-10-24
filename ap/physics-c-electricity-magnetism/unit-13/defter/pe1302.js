/* Kitpath not defteri · pe1302 · 13.3 İndüklenen Akımlar ve Manyetik Kuvvetler
   Kaynak: kaynak/ced-physc.md Unit 13 (13.3.A); hareketli çubuk denklemleri Faraday + Ohm + F = Iℓ × B'den türetilmiştir. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1302",
  amac: "Bu konu alanda hareket eden iletkenin içinde akım doğduğunu ve bu akımın alanla etkileşip kuvvet yarattığını anlatıyor. Raylar üzerinde kayan çubukta emf, akım, frenleme kuvveti ve hızın zamanla üstel azalışını bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Kayan çubuk: ε = Bℓv",
      kisa: "Çubuğun hızı emf, emf akım, akım da frenleme kuvveti doğurur.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "ε = B ℓ v", alt: "hareket ilmeğin yüzeyini büyütür" },
            "→",
            { t: "I = ε / R", alt: "Ohm" },
            "→",
            { t: "F = I ℓ B = B²ℓ²v / R", alt: "harekete ters kuvvet" }
          ],
          aciklama: "Çubuk v hızıyla giderken ilmeğin alanı büyür: dΦ/dt = B ℓ v. Mekanik güç P = Fv = B²ℓ²v²/R = I²R: hareket enerjisi dirençte ısıya dönüşür. Sınavda böyle yaz: *The motion changes the area, so dΦ/dt = Bℓv and ε = Bℓv.*"
        },
        {
          tip: "adimlar",
          baslik: "Akım ve kuvvet yönü (B sayfa içi, çubuk sağa)",
          adimlar: [
            { baslik: "Akı artıyor mu?", metin: "Çubuk sağa gidince ilmeğin alanı büyür; sayfa içine akı artıyor." },
            {
              baslik: "Lenz: B_ind sayfa dışı",
              metin: "Akı artışına karşı koymak için B_ind sayfa dışına bakar. Başparmak dışarı: akım saat yönünün tersi, çubukta yukarı."
            },
            {
              baslik: "Kontrol: q(v × B)",
              metin: "Çubuktaki pozitif yük sağa gidiyor: x̂ × (−ẑ) = +ŷ. Yük yukarı itilir; Lenz ile aynı sonuç."
            },
            {
              baslik: "Çubuğa kuvvet: I ℓ × B",
              metin: "Akım yukarı (+y), B sayfa içi: ŷ × (−ẑ) = −x̂. Kuvvet sola, harekete ters."
            }
          ]
        }
      ]
    },
    {
      baslik: "Hangi ilmekte akım ve kuvvet var?",
      kisa: "Akı değişmiyorsa akım yok; kuvvet yalnız alandaki kenara etkir ve harekete karşıdır.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "🧲", baslik: "Akım + frenleme", maddeler: ["Akı değişiyor", "Kuvvet yalnız alandaki kenarda"] },
          sag: { ikon: "🔇", baslik: "Akım yok", maddeler: ["Akı sabit", "Kuvvet de yok"] },
          oyun: [
            {
              metin: "Kare ilmek, alan bölgesine giriyor.",
              cevap: "sol",
              neden: "Alan içindeki yüzey büyüyor, akı artıyor."
            },
            {
              metin: "Kare ilmek, düzgün alanın tamamının içinde sabit hızla ilerliyor.",
              cevap: "sag",
              neden: "Akı değişmiyor; emf, akım ve net kuvvet yok."
            },
            { metin: "İlmek alan bölgesinden çıkıyor.", cevap: "sol", neden: "Akı azalıyor; yine akım ve frenleme var." },
            {
              metin: "İlmek alan bölgesinin tamamen dışında düzgün gidiyor.",
              cevap: "sag",
              neden: "İlmekten alan geçmiyor, akı sıfır ve sabit."
            },
            { metin: "Çubuk raylarda ilerliyor.", cevap: "sol", neden: "İlmeğin yüzey alanı değişiyor (B sabit): ε = Bℓv." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Manyetik fren harekete yardım edemez",
          metin: "İndüklenen akımın kuvveti her zaman değişimi engeller. Hareketi kolaylaştırsaydı enerji yoktan var olurdu.",
          yanlis: "İndüklenen akım çubuğu hızlandırabilir; ya da alanın içinde sabit hızla ilerleyen ilmekte de akım olur.",
          dogru: "Sınavda böyle yaz: *By Lenz's law the force opposes the motion; the kinetic energy lost appears as thermal energy in the resistor.* Kuvvet yalnız alan içindeki kenarlara etkir."
        }
      ]
    },
    {
      baslik: "Hız zamanla üstel azalır",
      kisa: "Fren hızla orantılı olduğu için v(t) = v₀ e^(−t/τ) olur.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "m dv/dt = −(B²ℓ²/R) v", alt: "Newton'un 2. yasası" },
            "⇒",
            { t: "v = v₀ e^(−t/τ)", alt: "τ = mR / B²ℓ²" }
          ],
          aciklama: "Her τ sürede hız 1/e ≈ %37'sine iner. R büyürse akım ve fren küçülür, τ uzar. Sınavda böyle yaz: *The retarding force is proportional to v, so v decays exponentially with time constant τ = mR/(B²ℓ²).*"
        },
        {
          tip: "grafik",
          baslik: "Çubuğun hızı v(t) (B = 0,50 T, ℓ = 0,40 m, m = 0,050 kg)",
          xlabel: "t",
          ylabel: "v (m/s)",
          xmax: 4,
          ymax: 4.5,
          xticks: [
            { v: 1, label: "τ" },
            { v: 2, label: "2τ" },
            { v: 3, label: "3τ" },
            { v: 4, label: "4τ" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            {
              id: "c1",
              tip: "egri",
              noktalar: [
                [0, 4], [0.25, 3.115], [0.5, 2.426], [0.75, 1.889], [1, 1.472],
                [1.25, 1.146], [1.5, 0.893], [1.75, 0.695], [2, 0.541], [2.25, 0.422],
                [2.5, 0.328], [2.75, 0.256], [3, 0.199], [3.25, 0.155], [3.5, 0.121],
                [3.75, 0.094], [4, 0.073]
              ],
              renk: 0,
              etiket: "R = 0,10 Ω"
            },
            { id: "p1", tip: "nokta", x: 1, y: 1.472, renk: 3, etiket: "1,47 m/s", kilavuz: true, gizli: true },
            {
              id: "c2",
              tip: "egri",
              noktalar: [
                [0, 4], [0.25, 3.53], [0.5, 3.115], [0.75, 2.749], [1, 2.426],
                [1.25, 2.141], [1.5, 1.889], [1.75, 1.667], [2, 1.472], [2.25, 1.299],
                [2.5, 1.146], [2.75, 1.011], [3, 0.893], [3.25, 0.788], [3.5, 0.695],
                [3.75, 0.613], [4, 0.541]
              ],
              renk: 1,
              etiket: "R = 0,20 Ω",
              gizli: true
            },
            {
              id: "ar",
              tip: "alan",
              noktalar: [
                [0, 4], [0.25, 3.115], [0.5, 2.426], [0.75, 1.889], [1, 1.472],
                [1.25, 1.146], [1.5, 0.893], [1.75, 0.695], [2, 0.541], [2.25, 0.422],
                [2.5, 0.328], [2.75, 0.256], [3, 0.199], [3.25, 0.155], [3.5, 0.121],
                [3.75, 0.094], [4, 0.073], [4, 0], [0, 0]
              ],
              renk: 2,
              gizli: true
            },
            { id: "at", tip: "yazi", x: 1.3, y: 0.5, metin: "alan = yol ≈ 0,49 m", gizli: true }
          ],
          durumlar: [
            {
              metin: "Çubuk v₀ = 4,0 m/s ile atılıyor, sonra serbest. Fren hızla orantılı olduğu için hız azaldıkça fren de zayıflar."
            },
            { metin: "t = τ = 0,125 s'de hız v₀/e ≈ ==%37==: 1,47 m/s.", goster: ["p1"] },
            {
              metin: "R iki katına çıkarsa akım yarıya, fren zayıflar: ==τ′ = 2τ==. Eski eğri kalır, yenisi daha yavaş düşer.",
              goster: ["c2"]
            },
            {
              metin: "Eğrinin altındaki alan alınan yoldur: ∫v dt = v₀τ = 0,50 m (4τ'ya kadar 0,49 m). Çubuk teorik olarak durmaz ama yol sonludur.",
              goster: ["ar", "at"],
              gizle: ["c2"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Aynı çubuk, anlık değerler (R = 0,10 Ω, v₀ = 4,0 m/s)",
          head: ["An", "v (m/s)", "I (A)", "F (N)", "P = I²R (W)"],
          rows: [
            ["t = 0", "4,00", "8,00", "1,60", "6,40"],
            ["t = τ", "1,47", "2,94", "0,59", "0,87"],
            ["t = 2τ", "0,54", "1,08", "0,22", "0,12"],
            ["t = 3τ", "0,20", "0,40", "0,08", "0,02"]
          ],
          not: "Hepsi e⁻ⁿ ile küçülür, ama güç P = Fv ∝ v² olduğu için e⁻²ⁿ ile daha hızlı."
        }
      ]
    },
    {
      baslik: "Çözümlü örnek ve sınır hız",
      kisa: "Enerji korunur: hareket enerjisi tamamen dirençte ısıya dönüşür.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Raylar üzerinde bırakılan çubuk",
          durum: "B = 0,50 T, ℓ = 0,40 m, R = 0,10 Ω, m = 0,050 kg. Çubuk v₀ = 4,0 m/s ile serbest bırakılıyor. Başlangıç emf'ini, akımı, kuvveti, ivmeyi, τ'yu, ısıyı ve durana kadar yolu bul.",
          adimlar: [
            "ε = Bℓv₀ = (0,50)(0,40)(4,0) = 0,80 V.",
            "I = ε/R = 0,80 / 0,10 = 8,0 A.",
            "F = IℓB = (8,0)(0,40)(0,50) = 1,6 N, harekete ters.",
            "a = F/m = 1,6 / 0,050 = 32 m/s² (yavaşlama).",
            "τ = mR / B²ℓ² = (0,050)(0,10) / ((0,25)(0,16)) = 0,125 s.",
            "Isı: ∫I²R dt = ½mv₀² = ½(0,050)(4,0)² = 0,40 J. Yol: x = v₀τ = 0,50 m.",
            "Sınavda böyle yaz: *The magnetic force opposes the motion (Lenz), and the lost kinetic energy appears as thermal energy in the resistor.*"
          ],
          sonuc: "ε = 0,80 V; I = 8,0 A; F = 1,6 N; τ = 0,125 s; ısı 0,40 J; yol 0,50 m"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎯",
              terim: "Terminal speed",
              tr: "sınır hız",
              tanim: "Çubuğu sabit bir kuvvet çekerse (ya da yerçekimi indirirse) hız artar, fren de büyür. Fren bu kuvvete eşitlenince ivme sıfır olur: v_t = F R / (B²ℓ²).",
              ornek: "Aynı düzenekte F = 1,6 N ile çekersen v_t = 4,0 m/s olur."
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
            "Alandaki çubuk: ε = Bℓv, I = ε/R, F = IℓB = B²ℓ²v/R; kuvvet harekete terstir (Lenz).",
            "Akım ve kuvvet yönü: akı değişimini Lenz ile, çubuktaki akıma kuvveti F = Iℓ × B ile bul.",
            "Düzgün alanın tamamen içinde ilerleyen ilmekte akı sabittir: akım ve net kuvvet yoktur.",
            "Kuvvet yalnız ilmeğin alan içindeki kenarlarına etkir.",
            "Fren hızla orantılıdır: m dv/dt = −(B²ℓ²/R)v, v = v₀e^(−t/τ), τ = mR/B²ℓ².",
            "Güç P = Fv = B²ℓ²v²/R = I²R; toplam ısı ½mv₀²'ye eşit, durana kadar yol v₀τ.",
            "Sabit kuvvetle çekilen çubuk sınır hıza yaklaşır: v_t = F R/(B²ℓ²)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A conducting rod of length 0.50 m slides at a constant speed of 6.0 m/s along conducting rails in a uniform magnetic field of 0.40 T perpendicular to the plane of the rails. The rails are connected through a 2.0 Ω resistor. What is the current in the resistor?",
      opts: ["0.60 A", "1.2 A", "0.30 A", "2.4 A"],
      a: 0,
      why: "ε = Bℓv = (0,40)(0,50)(6,0) = 1,2 V ve I = ε/R = 1,2/2,0 = 0,60 A. B şıkkı R'ye bölmeyi unutur."
    },
    {
      q: "A rod slides to the right on horizontal rails in a uniform magnetic field directed out of the page. What are the direction of the induced current in the rod and the direction of the magnetic force on the rod?",
      opts: [
        "Up the page; force to the right",
        "Up the page; force to the left",
        "Down the page; force to the right",
        "Down the page; force to the left"
      ],
      a: 3,
      why: "Pozitif yük için v × B = x̂ × ẑ = −ŷ: akım çubukta aşağı. Kuvvet Iℓ × B = (−ŷ) × ẑ = −x̂, yani sola. Kuvvet harekete ters (sola) olmalı; bu A ve C şıklarını eler."
    },
    {
      q: "A rod is given an initial speed on frictionless rails in a uniform magnetic field and then released. The measured speed of the rod is shown in the table. The time constant of the decay is most nearly",
      fig: {
        type: "table",
        head: ["t (s)", "v (m/s)"],
        rows: [["0", "8.0"], ["0.10", "4.0"], ["0.20", "2.0"], ["0.30", "1.0"]],
        caption: "Speed of the rod"
      },
      opts: ["0.10 s", "0.14 s", "0.20 s", "0.30 s"],
      a: 1,
      why: "Hız her 0,10 s'de yarıya iniyor (yarı ömür). v = v₀e^(−t/τ) için yarı ömür τ ln 2'dir: τ = 0,10/0,693 = 0,14 s. 0,10 s yarı ömürdür, zaman sabiti değil."
    },
    {
      q: "A rod is pulled at constant speed v along rails in a magnetic field, and the external force needed to do this is F. If the rod is pulled at speed 2v instead, what happens to the external force and to the rate at which thermal energy is produced in the circuit?",
      opts: [
        "Force doubles; power doubles",
        "Force quadruples; power quadruples",
        "Force doubles; power quadruples",
        "Force is unchanged; power doubles"
      ],
      a: 2,
      why: "F = B²ℓ²v/R ∝ v: kuvvet 2 katı. Güç P = Fv ∝ v²: 4 katı. A şıkkı gücü doğrusal sanar."
    },
    {
      q: "A square conducting loop moves at constant velocity into, through, and out of a region of uniform magnetic field perpendicular to the loop. During which part of the motion is there a net magnetic force on the loop?",
      opts: [
        "Only while the loop is completely inside the field",
        "Only while the loop is entering the field",
        "While the loop is entering and while it is leaving the field",
        "At all times"
      ],
      a: 2,
      why: "Akı yalnız ilmek girerken ve çıkarken değişir; o zaman akım ve alandaki kenara etkiyen net kuvvet (harekete ters) vardır. Tamamen içeride akı sabit, akım ve net kuvvet yoktur."
    }
  ]
};
