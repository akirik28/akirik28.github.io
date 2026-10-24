/* Kitpath not defteri · pc702 · 7.3 SHM'yi Grafik ve Denklemle Okumak
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc702",
  amac: "Bu konu SHM'yi denklem ve grafikle okumayı anlatıyor: x(t) bir kosinüs eğrisi, hız ve ivme onun türevleri. a = −ω²x, v_max = Aω, a_max = Aω² bağıntılarını, faz sabitini ve rezonansı öğreneceksin.",
  bolumler: [
    {
      baslik: "SHM'nin denklemi ve çözümü",
      kisa: "Newton'un 2. yasası d²x/dt² = −ω²x verir; çözüm kosinüstür.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "m·d²x/dt² = −kx", alt: "Newton'un 2. yasası" },
            "→",
            { t: "d²x/dt² = −ω²x", alt: "ω² = k/m" },
            "→",
            { t: "x = A cos(ωt + φ)", alt: "çözüm" }
          ],
          aciklama: "Çözümü tanıman yeterli; ispatı istenmez. Yine de ikinci türevi alırsan −ω²·A cos(ωt + φ) = −ω²x çıkar: denklem sağlanır."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧮",
              terim: "Second-order differential equation",
              tr: "ikinci mertebeden diferansiyel denklem",
              tanim: "İçinde fonksiyonun ikinci türevi bulunan denklem. SHM'de bu denklem özel bir biçim alır: ikinci türev, fonksiyonun negatifiyle orantılıdır (d²x/dt² = −ω²x); SHM'nin ayırt edici işareti budur.",
              ornek: "d²x/dt² = −ω²x: ivme konumun eksilisiyle orantılı."
            },
            {
              ikon: "🧭",
              terim: "Phase constant",
              tr: "faz sabiti",
              tanim: "t = 0 anındaki başlangıç durumunu belirleyen açı φ; x(0) ve v(0)'dan bulunur.",
              ornek: "Uçtan bırakılırsa φ = 0."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Başlangıç koşulundan φ'yi bulmak (x = A cos(ωt + φ))",
          head: ["t = 0'da durum", "φ", "Denklem"],
          rows: [
            ["x = +A, v = 0 (uçtan bırakıldı)", "0", "x = A cos ωt"],
            ["x = 0, +x yönünde gidiyor", "−π/2", "x = A sin ωt"],
            ["x = −A, v = 0", "π", "x = −A cos ωt"],
            ["x = 0, −x yönünde gidiyor", "+π/2", "x = −A sin ωt"]
          ],
          vurgu: 0,
          not: "Kural: x(0) = A cos φ ve v(0) = −Aω sin φ. Sınavda böyle yaz: *At t = 0 the block is at x = A with v = 0, so φ = 0 and x = A cos ωt.*"
        }
      ]
    },
    {
      baslik: "x, v ve a grafikleri",
      kisa: "Uçta v = 0 ve |a| en büyük; dengede a = 0 ve |v| en büyük.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Normalize edilmiş x(t), v(t), a(t) (T = 4 s, uçtan bırakıldı)",
          xlabel: "t",
          ylabel: "x/A · v/v_max · a/a_max",
          xmax: 8,
          ymax: 2.4,
          xticks: [
            { v: 1, label: "T/4" },
            { v: 2, label: "T/2" },
            { v: 3, label: "3T/4" },
            { v: 4, label: "T" },
            { v: 8, label: "2T" }
          ],
          yticks: [
            { v: 0.2, label: "−1" },
            { v: 1.2, label: "0" },
            { v: 2.2, label: "1" }
          ],
          ogeler: [
            { id: "z", tip: "cizgi", from: [0, 1.2], to: [8, 1.2], kesik: true, renk: 3 },
            {
              id: "xc",
              tip: "egri",
              noktalar: [
                [0, 2.2], [0.25, 2.124], [0.5, 1.907], [0.75, 1.583], [1, 1.2], [1.25, 0.817],
                [1.5, 0.493], [1.75, 0.276], [2, 0.2], [2.25, 0.276], [2.5, 0.493], [2.75, 0.817],
                [3, 1.2], [3.25, 1.583], [3.5, 1.907], [3.75, 2.124], [4, 2.2], [4.25, 2.124],
                [4.5, 1.907], [4.75, 1.583], [5, 1.2], [5.25, 0.817], [5.5, 0.493], [5.75, 0.276],
                [6, 0.2], [6.25, 0.276], [6.5, 0.493], [6.75, 0.817], [7, 1.2], [7.25, 1.583],
                [7.5, 1.907], [7.75, 2.124], [8, 2.2]
              ],
              renk: 0,
              etiket: "x",
              gizli: true
            },
            {
              id: "vc",
              tip: "egri",
              noktalar: [
                [0, 1.2], [0.25, 0.817], [0.5, 0.493], [0.75, 0.276], [1, 0.2], [1.25, 0.276],
                [1.5, 0.493], [1.75, 0.817], [2, 1.2], [2.25, 1.583], [2.5, 1.907], [2.75, 2.124],
                [3, 2.2], [3.25, 2.124], [3.5, 1.907], [3.75, 1.583], [4, 1.2], [4.25, 0.817],
                [4.5, 0.493], [4.75, 0.276], [5, 0.2], [5.25, 0.276], [5.5, 0.493], [5.75, 0.817],
                [6, 1.2], [6.25, 1.583], [6.5, 1.907], [6.75, 2.124], [7, 2.2], [7.25, 2.124],
                [7.5, 1.907], [7.75, 1.583], [8, 1.2]
              ],
              renk: 1,
              etiket: "v",
              gizli: true
            },
            {
              id: "ac",
              tip: "egri",
              noktalar: [
                [0, 0.2], [0.25, 0.276], [0.5, 0.493], [0.75, 0.817], [1, 1.2], [1.25, 1.583],
                [1.5, 1.907], [1.75, 2.124], [2, 2.2], [2.25, 2.124], [2.5, 1.907], [2.75, 1.583],
                [3, 1.2], [3.25, 0.817], [3.5, 0.493], [3.75, 0.276], [4, 0.2], [4.25, 0.276],
                [4.5, 0.493], [4.75, 0.817], [5, 1.2], [5.25, 1.583], [5.5, 1.907], [5.75, 2.124],
                [6, 2.2], [6.25, 2.124], [6.5, 1.907], [6.75, 1.583], [7, 1.2], [7.25, 0.817],
                [7.5, 0.493], [7.75, 0.276], [8, 0.2]
              ],
              renk: 2,
              etiket: "a",
              gizli: true
            },
            {
              id: "c1",
              tip: "cizgi",
              from: [1, 0],
              to: [1, 2.4],
              kesik: true,
              renk: 3,
              gizli: true
            },
            {
              id: "c2",
              tip: "cizgi",
              from: [2, 0],
              to: [2, 2.4],
              kesik: true,
              renk: 3,
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Eksenler normalize: her eğri kendi en büyük değerine bölünmüş. Blok t = 0'da x = +A'dan bırakıldı."
            },
            { metin: "Konum: x = A cos ωt. t = 0'da tepede, T/2'de x = −A.", goster: ["xc"] },
            {
              metin: "Hız konumun türevi: v = −Aω sin ωt. x tepedeyken v = 0; x sıfırdan geçerken |v| en büyük.",
              goster: ["vc"]
            },
            {
              metin: "İvme hızın türevi: a = −Aω² cos ωt = −ω²x. Grafiği x'in ters çevrilmişi.",
              goster: ["ac"]
            },
            { metin: "t = T/4: x = 0, |v| en büyük (−x yönünde), a = 0.", goster: ["c1"] },
            {
              metin: "t = T/2: x = −A, v = 0, a = +ω²A: ivme en büyük ve +x yönünde.",
              gizle: ["c1"],
              goster: ["c2"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Uçta ve dengede",
          head: ["Konum", "x", "v", "a"],
          rows: [
            ["Uç noktalar", "±A", "0", "∓ω²A (en büyük)"],
            ["Denge (x = 0)", "0", "±Aω (en büyük)", "0"],
            ["Arada", "|x| < A", "0 < |v| < Aω", "−ω²x"]
          ],
          vurgu: 1,
          not: "Sınavda böyle yaz: *At the equilibrium position the speed is maximum and the acceleration is zero.*"
        },
        {
          tip: "tuzak",
          baslik: "Denge konumunda ivmeyi maksimum sanmak",
          metin: "Denge konumunda net kuvvet sıfır, o yüzden ivme de sıfırdır; hız en büyüktür. İvme uç noktalarda en büyüktür. Hız ve ivme birbirine göre çeyrek periyot kaymıştır.",
          yanlis: "Denge konumunda hız en büyük, o yüzden ivme de en büyüktür.",
          dogru: "a = −ω²x: x = 0 ise a = 0; |a| en büyük olduğunda x = ±A ve v = 0."
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: v_max ve a_max",
      kisa: "v_max = Aω ve a_max = Aω²; ω = √(k/m) ile her şey bulunur.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "v_max = Aω", alt: "dengeden geçerken" },
            "ve",
            { t: "a_max = Aω²", alt: "uç noktalarda" }
          ],
          aciklama: "Türetme: x = A cos(ωt + φ) → v = −Aω sin(ωt + φ) → a = −Aω² cos(ωt + φ). Sinüs ve kosinüsün en büyük değeri 1."
        },
        {
          tip: "ornek",
          baslik: "m = 0,50 kg, k = 50 N/m, A = 0,20 m (uçtan bırakıldı)",
          durum: "Bloğun hareket denklemini, en büyük hız ve ivmesini, x = 0,10 m'deki ivme ve hızını bul.",
          adimlar: [
            "ω = √(k/m) = √(50 / 0,50) = √100 = 10 rad/s; T = 2π/ω ≈ 0,63 s.",
            "Uçtan bırakıldı: φ = 0, x(t) = 0,20 cos(10t) m.",
            "v_max = Aω = 0,20 × 10 = 2,0 m/s (dengeden geçerken).",
            "a_max = Aω² = 0,20 × 100 = 20 m/s²; kontrol: kA/m = 50 × 0,20 / 0,50 = 20 m/s² ✓",
            "x = 0,10 m'de: a = −ω²x = −100 × 0,10 = -10 m/s², yani −x yönünde.",
            "Aynı yerde hız: |v| = ω√(A² − x²) = 10 × √(0,04 − 0,01) = 10 × 0,173 ≈ 1,73 m/s (sin² + cos² = 1)."
          ],
          sonuc: "ω = 10 rad/s, v_max = 2,0 m/s, a_max = 20 m/s²; x = 0,10 m'de |v| ≈ 1,73 m/s ve a = −10 m/s²"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The maximum speed occurs at x = 0, where v_max = Aω.*"
            },
            {
              ikon: "✍️",
              baslik: "Türetirken",
              metin: "*From x = A cos ωt: v = dx/dt = −Aω sin ωt and a = dv/dt = −Aω² cos ωt = −ω²x.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Genlik, periyot ve rezonans",
      kisa: "Genlik periyodu değiştirmez; doğal frekansta zorlarsan genlik büyür.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎵",
              terim: "Natural frequency",
              tr: "doğal frekans",
              tanim: "Sistem dengeden saptırılıp serbest bırakılınca salındığı frekans.",
              ornek: "Yay-kütlede f₀ = (1/2π)√(k/m)."
            },
            {
              ikon: "🎢",
              terim: "Resonance",
              tr: "rezonans",
              tanim: "Sinüzoidal bir dış kuvvet sistemin doğal frekansında uygulanırsa genlik büyür.",
              ornek: "Salıncağı kendi ritminde itmek."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔒",
            baslik: "A iki katına çıkınca değişmez",
            maddeler: ["Periyot T ve frekans f", "Açısal frekans ω", "Sistemin doğal frekansı"]
          },
          sag: {
            ikon: "📈",
            baslik: "A ile büyür",
            maddeler: ["En büyük hız Aω", "En büyük ivme Aω²", "Toplam enerji ½kA² (4 katı)"]
          },
          oyun: [
            { metin: "Periyot T.", cevap: "sol", neden: "T = 2π√(m/k) içinde A yok." },
            {
              metin: "En büyük hız v_max.",
              cevap: "sag",
              neden: "v_max = Aω; A iki katına çıkarsa o da iki katına çıkar."
            },
            {
              metin: "En büyük ivme a_max.",
              cevap: "sag",
              neden: "a_max = Aω² de A ile doğru orantılı."
            },
            {
              metin: "Açısal frekans ω.",
              cevap: "sol",
              neden: "ω = √(k/m) yalnız yaya ve kütleye bağlı."
            },
            {
              metin: "Toplam enerji.",
              cevap: "sag",
              neden: "E = ½kA²: A iki katı olunca enerji dört katı olur."
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*Changing the amplitude does not change the period, since T = 2π√(m/k) does not contain A.*"
            },
            {
              ikon: "✍️",
              baslik: "Rezonans",
              metin: "*Resonance occurs when the driving frequency equals the natural frequency of the system.*"
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
            "Newton'un 2. yasasından d²x/dt² = −ω²x gelir; çözümü x = A cos(ωt + φ) olarak bilmen yeter.",
            "ω² = k/m (yay-kütle); *phase constant* φ, t = 0 durumundan bulunur: uçtan bırakılırsa φ = 0.",
            "v = dx/dt = −Aω sin(ωt + φ), a = d²x/dt² = −ω²x.",
            "v_max = Aω dengeden geçerken; a_max = Aω² uç noktalarda.",
            "Uçta v = 0 ve |a| en büyük; dengede a = 0 ve |v| en büyük.",
            "Örnek: m = 0,50 kg, k = 50 N/m, A = 0,20 m → ω = 10 rad/s, v_max = 2,0 m/s, a_max = 20 m/s².",
            "Genlik periyodu, frekansı ve ω'yı değiştirmez; v_max ve a_max genlikle büyür.",
            "*Resonance*: dış kuvvetin frekansı doğal frekansa eşitse genlik büyür."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The position of a block oscillating on a spring is given by x = (0.20 m) cos(5t), where t is in seconds. What is the maximum speed of the block?",
      opts: ["0.20 m/s", "1.0 m/s", "5.0 m/s", "0.040 m/s"],
      a: 1,
      why: "v = dx/dt = −(0,20)(5) sin 5t, yani v_max = Aω = 0,20 × 5 = 1,0 m/s. 0,20 genliğin kendisi; 5,0 ω'nın değeri (ivme için Aω² = 5,0 m/s² olurdu); 0,040 ise A/ω."
    },
    {
      q: "The table shows the position of a 0.20 kg block in simple harmonic motion at several times. What is the magnitude of the block's maximum acceleration?",
      opts: ["1.3 m/s²", "16 m/s²", "3.9 m/s²", "0.10 m/s²"],
      a: 2,
      why: "x yine +0,40 m'ye t = 2,0 s'de dönüyor, T = 2,0 s ve ω = 2π/T = π rad/s. a_max = Aω² = 0,40 × π² ≈ 3,9 m/s². 1,3 m/s² Aω (hız); 16 m/s², T = 1,0 s alınırsa çıkan Aω²; 0,10 ise ω = 0,5 alınırsa.",
      fig: {
        type: "table",
        head: ["t (s)", "x (m)"],
        rows: [
          ["0", "+0.40"],
          ["0.50", "0"],
          ["1.0", "−0.40"],
          ["1.5", "0"],
          ["2.0", "+0.40"]
        ],
        caption: "Position of the block"
      }
    },
    {
      q: "At t = 0 a block on a spring is at the equilibrium position x = 0 and moving in the +x direction. Which of the following gives its position as x = A cos(ωt + φ)?",
      opts: ["x = A cos ωt", "x = A cos(ωt + π/2)", "x = −A cos ωt", "x = A cos(ωt − π/2)"],
      a: 3,
      why: "x(0) = A cos φ = 0 → φ = ±π/2. v(0) = −Aω sin φ > 0 olması için sin φ < 0, yani φ = −π/2: x = A cos(ωt − π/2) = A sin ωt. A cos ωt uçtan başlar; A cos(ωt + π/2) = −A sin ωt başta −x yönüne gider; −A cos ωt ise x = −A'dan başlar."
    },
    {
      q: "A block in simple harmonic motion is at x = +0.050 m at one instant, and its acceleration is −2.0 m/s² at that instant. What is the angular frequency of the motion?",
      opts: ["6.3 rad/s", "2.0 rad/s", "40 rad/s", "0.025 rad/s"],
      a: 0,
      why: "a = −ω²x → ω² = 2,0 / 0,050 = 40 → ω = √40 ≈ 6,3 rad/s (T ≈ 1,0 s). 40 karekök alınmadan kalmış değer; 2,0 ivmenin büyüklüğü; 0,025 ise x/a."
    },
    {
      q: "A block-spring system is driven by a sinusoidal force of constant amplitude. The table shows the steady oscillation amplitude at several driving frequencies. Which of the following is the best estimate of the natural frequency of the system?",
      opts: ["1.0 Hz", "1.5 Hz", "2.0 Hz", "3.0 Hz"],
      a: 2,
      why: "Rezonansta genlik en büyüktür: en büyük genlik (12 cm) 2,0 Hz'de. Öteki sürücü frekanslarında genlik çok daha küçük, yani doğal frekanstan uzaktalar.",
      fig: {
        type: "table",
        head: ["Driving frequency (Hz)", "Amplitude (cm)"],
        rows: [
          ["1.0", "1.0"],
          ["1.5", "2.5"],
          ["2.0", "12"],
          ["2.5", "3.0"],
          ["3.0", "1.2"]
        ],
        caption: "Amplitude of steady oscillation"
      }
    }
  ]
};
