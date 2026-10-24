/* Kitpath not defteri · pe1303 · 13.4 İndüktans
   Kaynak: kaynak/ced-physc.md Unit 13 (13.4.A), 2025 Chief Reader hataları. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1303",
  amac: "Bu konu bobinin (inductor) akımdaki değişime nasıl karşı koyduğunu anlatıyor. İndüktans L'nin neye bağlı olduğunu, bobinin gerilimini ε = −L dI/dt ile ve depoladığı enerjiyi U = ½LI² ile bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Bobin değişime karşı koyar",
      kisa: "Bobin akımın değişmesine direnir; sabit akımda ideal bobin tel gibidir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌀",
              terim: "Inductance",
              tr: "indüktans",
              tanim: "İletkenin akımdaki değişime karşı koyma eğilimi, L. Birimi henry: 1 H = 1 V·s/A. Yalnız geometriye ve çekirdeğe bağlıdır, akıma bağlı değildir.",
              ornek: "Düz telin L'si hemen hemen sıfırdır; sarılınca L hissedilir hâle gelir."
            },
            {
              ikon: "🧶",
              terim: "Inductor",
              tr: "bobin",
              tanim: "Devrede indüktansıyla işe yarayan elemandır; tipik örneği solenoiddir.",
              ornek: "Sıkı sarılmış ve içine demir çubuk konmuş makara."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "ε", alt: "bobinde indüklenen emf" },
            "=",
            "−",
            { t: "L dI/dt", alt: "indüktans × akımın değişim hızı" }
          ],
          aciklama: "Eksi işaret Lenz yasasıdır: emf akımın değişimine karşı çıkar. Akım artıyorsa emf akıma zıt, azalıyorsa akımla aynı yöndedir. Sabit akımda dI/dt = 0, yani ε = 0. Sınavda böyle yaz: *The induced emf opposes the change in current, so it points against I while I is increasing.*"
        }
      ]
    },
    {
      baslik: "Solenoidin indüktansı",
      kisa: "L = μN²A/ℓ: sarım sayısının karesiyle, kesit alanla ve çekirdekle artar.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "L_sol", alt: "solenoid indüktansı" },
            "=",
            { t: "μ_core N² A / ℓ", alt: "çekirdek, sarım², kesit, uzunluk" }
          ],
          aciklama: "Nereden gelir? İçeride B = μ N I/ℓ; bir sarımdan geçen akı BA; toplam akı NBA = (μN²A/ℓ) I = L I. Yani L = NΦ_B/I. Sınavda böyle yaz: *L = NΦ_B/I with Φ_B = BA and B = μNI/ℓ, so L = μN²A/ℓ.*"
        },
        {
          tip: "tablo",
          baslik: "Bir şeyi değiştirirsen L ne olur?",
          head: ["Değişiklik", "L'ye etkisi", "Neden"],
          rows: [
            ["N 2 katına çıkar (ℓ, A aynı)", "4 katına çıkar", "L ∝ N²"],
            ["Uzunluk ℓ 2 katına çıkar (N, A aynı)", "yarıya iner", "L ∝ 1/ℓ"],
            ["Kesit alan A 2 katına çıkar", "2 katına çıkar", "L ∝ A"],
            ["Hava yerine demir çekirdek (μ ≈ 1000 μ₀)", "yaklaşık 1000 katına çıkar", "L ∝ μ_core"],
            ["Akım I 2 katına çıkar", "değişmez", "L geometriye bağlıdır, I'ya değil"]
          ],
          vurgu: 4
        }
      ]
    },
    {
      baslik: "Bobinde depolanan enerji",
      kisa: "Bobin enerjiyi manyetik alanında saklar: U = ½LI².",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "U_L", alt: "bobinin enerjisi" },
            "=",
            { t: "½ L I²", alt: "akımın karesiyle artar" }
          ],
          aciklama: "Türetme: bobin gücü P = I|ε| = L I dI/dt, enerji U = ∫ L I dI = ½ L I². Akım sıfırlanınca bu enerji devreye geri verilir: dirençte ısıya ya da kondansatörün yüküne dönüşür; toplam enerji korunur. Sınavda böyle yaz: *The energy stored in the magnetic field of the inductor is U = ½LI².*"
        },
        {
          tip: "ikili",
          sol: { ikon: "🧲", baslik: "Bobin (L)", maddeler: ["Enerji manyetik alanda: ½LI²", "Akım aniden değişemez"] },
          sag: {
            ikon: "🔋",
            baslik: "Kondansatör (C)",
            maddeler: ["Enerji elektrik alanda: ½CV²", "Gerilim aniden değişemez"]
          },
          oyun: [
            {
              metin: "Akım aniden değişemez.",
              cevap: "sol",
              neden: "Bobin akımın ani değişimine büyük emfle karşı koyar."
            },
            {
              metin: "Gerilim aniden değişemez.",
              cevap: "sag",
              neden: "Kondansatörün gerilimi q/C'dir; yük anında sıçrayamaz."
            },
            {
              metin: "Uzun süre sabit durumda tel gibi davranır.",
              cevap: "sol",
              neden: "Sabit akımda ε = 0, bobin gerilimsiz tel gibidir."
            },
            {
              metin: "Uzun süre sabit durumda açık devre gibi davranır.",
              cevap: "sag",
              neden: "Dolunca kondansatörden akım geçmez."
            }
          ]
        }
      ]
    },
    {
      baslik: "I(t) ve ε(t) grafiği",
      kisa: "Akımın eğimi emf'i verir: artarken ε negatif, sabitken sıfır, azalırken pozitif.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Akım (alt) ve bobin emf'i (üst, kendi ekseniyle), L = 0,50 H",
          xlabel: "t (s)",
          ylabel: "I (A) ve ε (V)",
          xmax: 6,
          ymax: 9,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 5, label: "−1 V" },
            { v: 6, label: "0 V" },
            { v: 8, label: "+2 V" }
          ],
          ogeler: [
            { id: "i1", tip: "cizgi", from: [0, 0], to: [2, 4], renk: 0, etiket: "I" },
            { id: "e0", tip: "cizgi", from: [0, 6], to: [6, 6], renk: 3, kesik: true },
            { id: "e1", tip: "cizgi", from: [0, 5], to: [2, 5], renk: 1, gizli: true },
            { id: "t1", tip: "yazi", x: 1, y: 5.45, metin: "ε = −L(2 A/s) = −1,0 V", gizli: true },
            { id: "i2", tip: "cizgi", from: [2, 4], to: [4, 4], renk: 0, gizli: true },
            { id: "j1", tip: "cizgi", from: [2, 5], to: [2, 6], renk: 1, kesik: true, gizli: true },
            { id: "e2", tip: "cizgi", from: [2, 6], to: [4, 6], renk: 1, gizli: true },
            { id: "t2", tip: "yazi", x: 3, y: 6.5, metin: "dI/dt = 0 ⇒ ε = 0", gizli: true },
            { id: "i3", tip: "cizgi", from: [4, 4], to: [5, 0], renk: 0, gizli: true },
            { id: "j2", tip: "cizgi", from: [4, 6], to: [4, 8], renk: 1, kesik: true, gizli: true },
            { id: "e3", tip: "cizgi", from: [4, 8], to: [5, 8], renk: 1, gizli: true },
            { id: "t3", tip: "yazi", x: 5, y: 8.5, metin: "+2,0 V", gizli: true, hiza: "start" },
            { id: "t4", tip: "yazi", x: 3, y: 3.2, metin: "U = ½LI² = 4,0 J", gizli: true }
          ],
          durumlar: [
            { metin: "Bobinden geçen akım 0–2 s'de 0'dan 4 A'e düzgün artıyor: eğim dI/dt = 2 A/s. L = 0,50 H." },
            { metin: "Akım artarken emf akıma zıt: ε = −L dI/dt = −(0,50)(2) = ==−1,0 V==.", goster: ["e1", "t1"] },
            {
              metin: "2–4 s'de akım sabit 4 A: dI/dt = 0, yani ==ε = 0==. Bobin burada tel gibidir.",
              goster: ["i2", "j1", "e2", "t2"]
            },
            {
              metin: "4–5 s'de akım 4 A/s hızla düşüyor: ε = −(0,50)(−4) = ==+2,0 V==. Emf akımı sürdürmeye çalışır.",
              goster: ["i3", "j2", "e3", "t3"]
            },
            {
              metin: "4 A'de depolanan enerji U = ½(0,50)(4)² = 4,0 J. Akım düşerken bu enerji devreye geri verilir. Sınavda böyle yaz: *The emf is proportional to the slope of the I–t graph: ε = −L dI/dt.*",
              goster: ["t4"]
            }
          ]
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 1, onek: "−", sonek: " V", etiket: "0–2 s: akım artıyor" },
            { deger: 0, sonek: " V", etiket: "2–4 s: akım sabit" },
            { deger: 2, onek: "+", sonek: " V", etiket: "4–5 s: akım azalıyor" },
            { deger: 4, sonek: " J", etiket: "4 A'deki depolanan enerji" }
          ]
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: solenoid L, ε ve U",
      kisa: "Önce L'yi bul, sonra emf ve enerjiyi hesapla.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "400 sarımlı, havalı solenoid",
          durum: "N = 400, ℓ = 0,20 m, kesit alanı A = 5,0 × 10⁻⁴ m², hava dolu. (a) L'yi bul. (b) Akım 0,010 s'de düzgün olarak 0'dan 2,0 A'e çıkarsa ortalama emf ne olur? (c) 2,0 A'de depolanan enerji? (d) İçine demir çekirdek (μ = 1000 μ₀) konsa L ne olur?",
          adimlar: [
            "L = μ₀N²A/ℓ = (4π × 10⁻⁷)(400)²(5,0 × 10⁻⁴)/0,20 = 5,0 × 10⁻⁴ H = 0,50 mH.",
            "|ε| = L ΔI/Δt = (5,0 × 10⁻⁴)(2,0)/0,010 = 0,10 V.",
            "U = ½LI² = ½(5,0 × 10⁻⁴)(2,0)² = 1,0 × 10⁻³ J = 1,0 mJ.",
            "Demir çekirdek: L′ = 1000 L = 0,50 H; aynı akımda U′ = ½(0,50)(2,0)² = 1,0 J."
          ],
          sonuc: "L = 0,50 mH; |ε| = 0,10 V; U = 1,0 mJ; demir çekirdekle L ≈ 0,50 H"
        },
        {
          tip: "tuzak",
          baslik: "Bobin akıma değil, akımın değişimine karşı koyar",
          metin: "Sabit akımda ideal bobinin ucunda gerilim yoktur. L de akım büyüdükçe büyümez; yalnız N, ℓ, A ve çekirdeğe bağlıdır.",
          yanlis: "Bobin akımı engeller; akım büyüdükçe L ve ε büyür.",
          dogru: "Sınavda böyle yaz: *The inductor opposes only a change in current; for constant I, dI/dt = 0, so ε = 0, and L depends only on its geometry and core.*"
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
            "*Inductance*, akımdaki değişime karşı koyma eğilimidir; birimi henry (V·s/A).",
            "Bobin emf'i ε = −L dI/dt: akım artarsa akıma zıt, azalırsa akımla aynı yönde, sabitse sıfır.",
            "Solenoidde L = μ_core N²A/ℓ = NΦ_B/I: N², A ve μ ile artar, ℓ ile azalır; I'ya bağlı değildir.",
            "Enerji bobinin manyetik alanında depolanır: U = ½LI².",
            "Bobinin akımı aniden değişemez; kondansatörün gerilimi aniden değişemez.",
            "Sabit durumda ideal bobin tel gibi, kondansatör açık devre gibidir.",
            "I–t grafiğinin eğimi emf'i verir: ε = −L × eğim."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The number of turns of a long solenoid is doubled while its length, cross-sectional area, and core material are unchanged. The inductance of the solenoid",
      opts: ["is halved", "is unchanged", "is doubled", "is quadrupled"],
      a: 3,
      why: "L = μN²A/ℓ ∝ N². Sarım sayısı 2 katına çıkınca L 4 katına çıkar. C şıkkı doğrusal ilişki varsayar."
    },
    {
      q: "The current through a 0.20 H inductor increases uniformly from 1.0 A to 4.0 A in 0.30 s. What are the magnitude and the direction of the induced emf in the inductor?",
      opts: [
        "2.0 V, in the same direction as the current",
        "2.0 V, opposing the current",
        "0.60 V, opposing the current",
        "2.7 V, opposing the current"
      ],
      a: 1,
      why: "|ε| = L ΔI/Δt = (0,20)(3,0)/0,30 = 2,0 V. Akım artıyor, emf artışa karşı koyar: akıma zıt yönde. C şıkkı Δt'ye bölmeyi, D şıkkı ΔI yerine I_son kullanmayı içerir."
    },
    {
      q: "The current in a 0.50 H inductor varies as shown in the table (the current changes linearly within each interval). During which interval is the magnitude of the induced emf greatest, and what is it?",
      fig: {
        type: "table",
        head: ["t (s)", "I (A)"],
        rows: [["0", "0"], ["1", "2"], ["2", "4"], ["3", "4"], ["4", "1"]],
        caption: "Current in the inductor"
      },
      opts: ["0–1 s, 1.0 V", "1–2 s, 2.0 V", "3–4 s, 1.5 V", "3–4 s, 3.0 V"],
      a: 2,
      why: "Eğimler: 2, 2, 0, −3 A/s. |ε| = L|dI/dt|: 1,0; 1,0; 0; 1,5 V. En büyük 3–4 s aralığında 1,5 V'tur. B ve D şıkları L'yi çarpmayı unutur."
    },
    {
      q: "A 0.40 H inductor carries a steady current of 3.0 A. How much energy is stored in its magnetic field?",
      opts: ["1.2 J", "1.8 J", "3.6 J", "0.60 J"],
      a: 1,
      why: "U = ½LI² = ½(0,40)(3,0)² = 1,8 J. A şıkkı LI'yı, C şıkkı LI²'yi kullanır."
    },
    {
      q: "An ideal inductor in a DC circuit has reached a constant current of 2.0 A. Which statement is correct?",
      opts: [
        "The potential difference across it is zero, and it still stores energy ½LI².",
        "The potential difference across it is LI.",
        "It stores no energy because the current is constant.",
        "It behaves like an open circuit."
      ],
      a: 0,
      why: "Sabit akımda dI/dt = 0 ve ε = 0: potansiyel farkı sıfırdır, bobin tel gibidir. Enerji ½LI² olarak depolanmaya devam eder. D şıkkı kondansatörün davranışıdır."
    }
  ]
};
