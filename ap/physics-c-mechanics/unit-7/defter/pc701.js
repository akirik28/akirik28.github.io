/* Kitpath not defteri · pc701 · 7.1–7.2 Basit Harmonik Hareket: Tanım, Frekans, Periyot
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc701",
  amac: "Bu konu basit harmonik hareketi (SHM) anlatıyor: yay-kütle ve küçük açılı sarkaç gibi sistemler neden aynı kuralla salınır? Geri çağırıcı kuvveti, periyot, frekans ve açısal frekansı; periyodun neye bağlı olup neye bağlı olmadığını öğreneceksin.",
  bolumler: [
    {
      baslik: "SHM nedir?",
      kisa: "Kuvvet dengeden uzaklıkla orantılı ve ona zıtsa hareket SHM'dir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔁",
              terim: "Periodic motion",
              tr: "periyodik hareket",
              tanim: "Aynı hareketi eşit zaman aralıklarıyla tekrarlayan hareket.",
              ornek: "Kalp atışı, saat sarkacı, sekip duran top."
            },
            {
              ikon: "⚖️",
              terim: "Equilibrium position",
              tr: "denge konumu",
              tanim: "Net kuvvetin sıfır olduğu konum; x = 0 diye seçilir.",
              ornek: "Düşey yayda blok asılıyken durduğu yer, yayın doğal boyundan aşağıdadır."
            },
            {
              ikon: "↩️",
              terim: "Restoring force",
              tr: "geri çağırıcı kuvvet",
              tanim: "Yer değiştirmeye zıt yönde, hep dengeye doğru çeken kuvvet.",
              ornek: "Yay uzayınca bloğu geri çeker, sıkışınca geri iter."
            },
            {
              ikon: "🌀",
              terim: "Simple harmonic motion (SHM)",
              tr: "basit harmonik hareket",
              tanim: "Geri çağırıcı kuvvetin büyüklüğü denge konumundan uzaklıkla orantılı olan periyodik hareket: F = −kΔx.",
              ornek: "Sürtünmesiz masada yaya bağlı blok."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "F–x grafiği: orijinden geçen, eğimi −k olan doğru (k = 2 N/cm)",
          xlabel: "x (cm)",
          ylabel: "F (N)",
          xmax: 8,
          ymax: 14,
          xticks: [
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 4, label: "0" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" }
          ],
          yticks: [
            { v: 1, label: "−6" },
            { v: 3, label: "−4" },
            { v: 5, label: "−2" },
            { v: 7, label: "0" },
            { v: 9, label: "2" },
            { v: 11, label: "4" },
            { v: 13, label: "6" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", from: [4, 0], to: [4, 14], kesik: true, renk: 3 },
            { id: "ay", tip: "cizgi", from: [0, 7], to: [8, 7], kesik: true, renk: 3 },
            {
              id: "L1",
              tip: "cizgi",
              from: [1, 13],
              to: [7, 1],
              renk: 0,
              etiket: "F = −kx",
              gizli: true
            },
            { id: "p1", tip: "nokta", x: 6, y: 3, renk: 1, etiket: "x = +2, F = −4", gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 11, renk: 1, etiket: "x = −2, F = +4", gizli: true },
            { id: "p0", tip: "nokta", x: 4, y: 7, renk: 3, etiket: "denge: F = 0", gizli: true },
            {
              id: "L2",
              tip: "cizgi",
              from: [2.5, 13],
              to: [5.5, 1],
              renk: 2,
              etiket: "k = 4 N/cm",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Yatay yaya bağlı blok. x denge konumundan uzaklık, F yayın kuvveti; eksenler orijinde kesişiyor."
            },
            {
              metin: "F, x ile ==orantılı== ve ters işaretli: doğru orijinden geçiyor, aşağı eğimli. Eğim −k = −2 N/cm.",
              goster: ["L1"]
            },
            { metin: "x = +2 cm (sağda): F = −4 N, yani sola, dengeye doğru.", goster: ["p1"] },
            { metin: "x = −2 cm (solda): F = +4 N, yani sağa, yine dengeye doğru.", goster: ["p2"] },
            { metin: "x = 0: F = 0. Burası denge konumu.", goster: ["p0"] },
            {
              metin: "Sert yay (k = 4 N/cm) daha dik doğru verir; doğru olma özelliği değişmez.",
              goster: ["L2"]
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🌀",
            baslik: "*SHM*",
            maddeler: [
              "Geri çağırıcı kuvvet ∝ uzaklık",
              "Kuvvet hep dengeye doğru",
              "Periyodik hareketin özel hâli"
            ]
          },
          sag: {
            ikon: "🏀",
            baslik: "Periyodik ama SHM değil",
            maddeler: [
              "Kuvvet uzaklıkla orantılı değil",
              "Kuvvet sabit ya da başka bir kuralla değişir",
              "Örnek: sekip duran top"
            ]
          },
          oyun: [
            {
              metin: "Sürtünmesiz masada yaya bağlı blok; çekip bırakıyorsun.",
              cevap: "sol",
              neden: "Yay kuvveti F = −kΔx: orantılı ve zıt."
            },
            {
              metin: "Yerde sekip duran basketbol topu; her sekme aynı sürede.",
              cevap: "sag",
              neden: "Periyodik, ama havadayken kuvvet sabit mg; konumla orantılı değil."
            },
            {
              metin: "Sürtünmesiz düşey yayda asılı blok; denge konumundan çekip bırakıyorsun.",
              cevap: "sol",
              neden: "Denge konumu mg/k kadar aşağı kayar, ama bu konumdan ölçülen yer değiştirmeyle kuvvet yine orantılıdır."
            },
            {
              metin: "Geri çağırıcı kuvvet F = −5x³ (N).",
              cevap: "sag",
              neden: "Küp: x iki katına çıkınca kuvvet sekiz katına çıkar, orantılı değil."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Gerekçe yerine etiket yazmak",
          metin: "Chief Reader, yalnız yasa ya da kavram adı yazmanın puan getirmediğini söylüyor. \"Bu SHM'dir\" demek yetmez; kuvvetin neden orantılı ve zıt olduğunu yazmalısın.",
          yanlis: "The block oscillates back and forth, so it is SHM.",
          dogru: "Sınavda böyle yaz: *The net force is proportional to the displacement from equilibrium and opposite to it, F = −kΔx, so the motion is simple harmonic.*"
        }
      ]
    },
    {
      baslik: "Periyot, frekans ve açısal frekans",
      kisa: "T bir salınımın süresi, f saniyedeki salınım sayısı, ω = 2πf.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "f = 1/T", alt: "frekans (Hz)" },
            "→",
            { t: "ω = 2πf", alt: "açısal frekans (rad/s)" },
            "→",
            { t: "T = 2π/ω", alt: "periyot (s)" }
          ],
          aciklama: "Üçü aynı bilgiyi verir; birini bilirsen ötekileri bulursun. T = 2π/ω = 1/f formül tablosunda yazılı."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⏱️",
              terim: "Period",
              tr: "periyot",
              tanim: "Bir tam salınımın süresi, T (s).",
              ornek: "Saniyede 2 salınım yapan blokta T = 0,5 s."
            },
            {
              ikon: "📶",
              terim: "Frequency",
              tr: "frekans",
              tanim: "Saniyedeki tam salınım sayısı, f = 1/T; birimi hertz (Hz = 1/s).",
              ornek: "T = 0,5 s ise f = 2 Hz."
            },
            {
              ikon: "🎡",
              terim: "Angular frequency",
              tr: "açısal frekans",
              tanim: "Bir salınımı 2π radyan sayar: ω = 2πf (rad/s). Dönen bir cismin açısal hızı değildir.",
              ornek: "f = 2 Hz ise ω = 4π ≈ 12,6 rad/s."
            },
            {
              ikon: "↔️",
              terim: "Amplitude",
              tr: "genlik",
              tanim: "Denge konumundan en büyük uzaklık, A.",
              ornek: "Blok dengeden 20 cm gidiyorsa A = 0,20 m."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kronometre 12 salınım için 6,0 s gösteriyor",
          durum: "Bloğun periyodunu, frekansını ve açısal frekansını bul.",
          adimlar: [
            "T = süre / salınım sayısı = 6,0 / 12 = 0,50 s.",
            "f = 1/T = 1 / 0,50 = 2,0 Hz.",
            "ω = 2πf = 2π × 2,0 = 4π ≈ 12,6 rad/s.",
            "Kontrol: T = 2π/ω = 2π / 12,6 = 0,50 s ✓"
          ],
          sonuc: "T = 0,50 s, f = 2,0 Hz, ω ≈ 12,6 rad/s"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The period is the time for one complete oscillation, T = 1/f = 2π/ω.*"
            },
            {
              ikon: "📏",
              baslik: "Birim",
              metin: "*Angular frequency is in rad/s; frequency is in Hz.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Periyot neye bağlı?",
      kisa: "Yay-kütlede T yalnız m ve k'ya, sarkaçta ℓ ve g'ye bağlıdır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "T_s = 2π√(m/k)", alt: "yay–kütle" },
            "ve",
            { t: "T_p = 2π√(ℓ/g)", alt: "basit sarkaç, küçük açı" }
          ],
          aciklama: "İkisi de formül tablosunda yazılı. Sarkaç formülü yalnız küçük açılarda geçerlidir."
        },
        {
          tip: "grafik",
          baslik: "Yay–kütle: T, m'nin karekökü gibi artar (k = 100 N/m)",
          xlabel: "m (kg)",
          ylabel: "T (s)",
          xmax: 6,
          ymax: 1.8,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1,0" },
            { v: 1.5, label: "1,5" }
          ],
          ogeler: [
            {
              id: "c1",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.314], [0.5, 0.444], [0.75, 0.544], [1, 0.628], [1.25, 0.702],
                [1.5, 0.77], [1.75, 0.831], [2, 0.889], [2.25, 0.942], [2.5, 0.993], [2.75, 1.042],
                [3, 1.088], [3.25, 1.133], [3.5, 1.175], [3.75, 1.217], [4, 1.257], [4.25, 1.295],
                [4.5, 1.333], [4.75, 1.369], [5, 1.405], [5.25, 1.44], [5.5, 1.474], [5.75, 1.507],
                [6, 1.539]
              ],
              renk: 0,
              etiket: "k = 100",
              gizli: true
            },
            {
              id: "a",
              tip: "nokta",
              x: 1,
              y: 0.628,
              renk: 1,
              etiket: "m = 1 kg: 0,63 s",
              gizli: true
            },
            {
              id: "b",
              tip: "nokta",
              x: 4,
              y: 1.257,
              renk: 1,
              etiket: "m = 4 kg: 1,26 s",
              gizli: true
            },
            {
              id: "c2",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.157], [0.5, 0.222], [0.75, 0.272], [1, 0.314], [1.25, 0.351],
                [1.5, 0.385], [1.75, 0.416], [2, 0.444], [2.25, 0.471], [2.5, 0.497], [2.75, 0.521],
                [3, 0.544], [3.25, 0.566], [3.5, 0.588], [3.75, 0.608], [4, 0.628], [4.25, 0.648],
                [4.5, 0.666], [4.75, 0.685], [5, 0.702], [5.25, 0.72], [5.5, 0.737], [5.75, 0.753],
                [6, 0.77]
              ],
              renk: 2,
              kesik: true,
              etiket: "k = 400",
              gizli: true
            },
            { id: "d", tip: "nokta", x: 1, y: 0.314, renk: 2, etiket: "0,31 s", gizli: true }
          ],
          durumlar: [
            { metin: "Yayı sabit tutup (k = 100 N/m) kütleyi artırıyoruz." },
            {
              metin: "Kütle büyüdükçe T artar ama doğrusal değil: eğri yataylaşıyor.",
              goster: ["c1"]
            },
            { metin: "m = 1 kg: T = 2π√(1/100) ≈ 0,63 s.", goster: ["a"] },
            {
              metin: "Kütle 4 katına çıkınca T yalnız ==2 katına== çıkıyor (karekök): 1,26 s.",
              goster: ["b"]
            },
            {
              metin: "Yay 4 kat sertse (k = 400) aynı kütlede T yarıya iner: 0,31 s.",
              goster: ["c2", "d"]
            },
            { metin: "Grafikte genlik ve g yok: ikisi de T'yi değiştirmez. Bu eğri Ay'da da aynı." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Hangi değişiklik T'yi etkiler?",
          head: ["Değişen", "Yay–kütle", "Basit sarkaç"],
          rows: [
            ["Kütle m", "T ∝ √m (m 4 kat → T 2 kat)", "etkisiz"],
            ["Yay sabiti k", "T ∝ 1/√k (k 4 kat → T yarı)", "yok"],
            ["İp uzunluğu ℓ", "yok", "T ∝ √ℓ (ℓ 4 kat → T 2 kat)"],
            ["Yerçekimi g", "etkisiz (Ay'da da aynı)", "T ∝ 1/√g (Ay'da uzar)"],
            ["Genlik A", "etkisiz", "etkisiz (küçük açıda)"]
          ],
          vurgu: 4,
          not: "Sınavda böyle yaz: *Doubling the amplitude does not change the period, because T depends only on m and k.*"
        }
      ]
    },
    {
      baslik: "Örnek: uzayda kütle ölçmek",
      kisa: "Yay-kütle periyodu g'den bağımsızdır; ağırlıksız ortamda da kütle ölçer.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "k = 100 N/m'lik yaylı platform, 10 salınım 31,4 s",
          durum: "Uzay istasyonunda bir kutu yaylı platforma bağlanıp salındırılıyor. Kutunun kütlesini bul (platform kütlesi ihmal).",
          adimlar: [
            "T = 31,4 / 10 = 3,14 s.",
            "T = 2π√(m/k) → m = kT² / (4π²).",
            "m = 100 × 3,14² / (4π²) = 100 × 9,86 / 39,5 ≈ 25 kg.",
            "g formülde yok: aynı düzenek Ay'da ya da yörüngede de aynı T'yi verir. Ağırlık sıfır olsa da kütle ölçülür."
          ],
          sonuc: "m ≈ 25 kg"
        },
        {
          tip: "tuzak",
          baslik: "Yay-kütle periyodu g'ye bağlı değildir",
          metin: "Düşey asılı yayda denge konumu mg/k kadar aşağı kayar, ama periyot aynı kalır. Aynı yay Ay'da da Dünya'da da aynı T'yi verir; sarkaç ise g'ye bağlıdır.",
          yanlis: "Düşey yaydaki bloğun periyodu g yüzünden değişir.",
          dogru: "Denge konumu kayar, T değişmez. Sınavda böyle yaz: *The period of a mass-spring system does not depend on g, so it is the same on the Moon.*"
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
            "*SHM*: geri çağırıcı kuvvetin büyüklüğü denge konumundan uzaklıkla orantılı ve ona zıt; F = −kΔx.",
            "Her periyodik hareket SHM değildir (sekip duran top); kuvvetin orantılı olması şart.",
            "*Equilibrium position* net kuvvetin sıfır olduğu yerdir; düşey yayda yayın doğal boyunda değildir.",
            "f = 1/T, ω = 2πf, T = 2π/ω; ω rad/s, f Hz.",
            "Yay–kütle: T = 2π√(m/k); basit sarkaç: T = 2π√(ℓ/g) (küçük açı).",
            "Genlik periyodu değiştirmez; yay-kütlede g de değiştirmez, sarkaçta kütle de.",
            "m 4 kat → T 2 kat; k 4 kat → T yarı; ℓ 4 kat → T 2 kat.",
            "Gerekçede yalnız \"SHM\" yazma; kuvvetin konumla orantılı ve zıt olduğunu yaz."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A block of mass m on a frictionless horizontal surface is attached to a spring and moves along the x-axis, where x = 0 is the equilibrium position. Which of the following net forces on the block would produce simple harmonic motion?",
      opts: [
        "F = −kx²",
        "F = +kx",
        "F = −kx",
        "A force of constant magnitude, always directed toward x = 0"
      ],
      a: 2,
      why: "SHM için net kuvvet konumla orantılı ve ona zıt olmalı: F = −kx. −kx² orantılı değil (x iki katına çıkınca kuvvet dört katı); +kx bloğu dengeden uzaklaştırır; sabit büyüklüklü kuvvet de konumla orantılı olmadığı için SHM vermez."
    },
    {
      q: "The table gives the net force F_x on a 0.30 kg block as a function of its displacement x from equilibrium. The block is released from rest at x = +0.20 m. What is the period of its motion?",
      opts: ["0.10 s", "0.63 s", "1.6 s", "63 s"],
      a: 1,
      why: "Tablodan F = −kx ve k = 3,0 N / 0,10 m = 30 N/m. T = 2π√(m/k) = 2π√(0,30/30) = 2π × 0,10 ≈ 0,63 s. 0,10 s yalnız √(m/k) (2π unutulmuş); 1,6 s frekans değeri; 63 s ise formül ters kullanılmış (2π√(k/m)).",
      fig: {
        type: "table",
        head: ["x (m)", "F_x (N)"],
        rows: [
          ["−0.20", "+6.0"],
          ["−0.10", "+3.0"],
          ["0", "0"],
          ["+0.10", "−3.0"],
          ["+0.20", "−6.0"]
        ],
        caption: "Net force on the block"
      }
    },
    {
      q: "An identical block-spring system and a simple pendulum are each carried from Earth to the Moon, where g is about one-sixth as large. Both oscillate with small amplitude. Compared with Earth, the periods on the Moon are",
      opts: [
        "unchanged for the block-spring system and longer for the pendulum",
        "unchanged for both",
        "longer for the block-spring system and unchanged for the pendulum",
        "longer for both"
      ],
      a: 0,
      why: "Yay-kütle T = 2π√(m/k) formülünde g yok, değişmez. Sarkaç T = 2π√(ℓ/g): g küçülünce T büyür (√6 ≈ 2,4 kat)."
    },
    {
      q: "A student measures the period T of a block of mass m hanging on a spring and records the data in the table. A straight line through the origin is drawn through the (m, T²) points. Which of the following is the spring constant?",
      opts: ["0.40 N/m", "2.5 N/m", "16 N/m", "100 N/m"],
      a: 3,
      why: "T² = (4π²/k)m: doğrunun eğimi 4π²/k. Eğim = 0,1579/0,40 ≈ 0,395 s²/kg → k = 4π²/0,395 ≈ 100 N/m. 2,5 N/m eğimin tersi (1/eğim); 16 N/m ise 4π² ile çarpmak; 0,40 N/m eğimi k sanmak.",
      fig: {
        type: "table",
        head: ["m (kg)", "T² (s²)"],
        rows: [
          ["0.10", "0.0395"],
          ["0.20", "0.0790"],
          ["0.30", "0.1184"],
          ["0.40", "0.1579"]
        ],
        caption: "Period squared versus mass"
      }
    },
    {
      q: "A block on a spring completes 30 oscillations in 15 s. What is the angular frequency of the oscillation?",
      opts: ["2.0 rad/s", "4π ≈ 12.6 rad/s", "6.3 rad/s", "0.50 rad/s"],
      a: 1,
      why: "T = 15/30 = 0,50 s, f = 2,0 Hz, ω = 2πf = 4π ≈ 12,6 rad/s. 2,0 frekansın kendisi (Hz), 6,3 ise 2π: f = 1 Hz için ω olurdu; 0,50 periyottur."
    }
  ]
};
