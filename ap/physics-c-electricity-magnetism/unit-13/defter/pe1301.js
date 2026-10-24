/* Kitpath not defteri · pe1301 · 13.1–13.2 Manyetik Akı ve İndüksiyon
   Kaynak: kaynak/ced-physc.md Unit 13 (13.1.A, 13.2.A), 2025 Chief Reader hataları. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1301",
  amac: "Bu konu manyetik akının ne olduğunu ve akı değişince bir ilmekte nasıl emf oluştuğunu anlatıyor. Faraday yasasıyla büyüklüğü, Lenz yasasıyla yönü bulmayı ve dönen ilmeğin neden sinüs biçimli emf verdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Manyetik akı: ilmekten geçen alan",
      kisa: "Akı, alanın ilmeğe dik bileşeni ile yüzeyin çarpımıdır: Φ = BA cosθ.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "Φ_B", alt: "manyetik akı (Wb)" },
            "=",
            { t: "B · A", alt: "nokta çarpım" },
            "=",
            { t: "B A cosθ", alt: "θ: B ile yüzey normali arası" }
          ],
          aciklama: "Birim weber: 1 Wb = 1 T·m². A vektörü ilmeğin yüzeyine diktir. Alan düzgün değilse yüzeyi küçük parçalara böl: Φ_B = ∫B · dA. Sınavda böyle yaz: *The flux is Φ_B = BA cosθ, where θ is the angle between B and the normal to the loop.*"
        },
        {
          tip: "tablo",
          baslik: "Açıya göre akı (B = 0,50 T, A = 0,020 m²)",
          head: ["θ (B ile yüzey normali)", "cosθ", "Φ_B", "Anlamı"],
          rows: [
            ["0°", "1", "10,0 mWb", "Alan ilmeğe dik, akı en büyük"],
            ["60°", "0,5", "5,0 mWb", "Yarısı"],
            ["90°", "0", "0", "Alan ilmeğin düzlemine paralel, akı yok"],
            ["180°", "−1", "-10,0 mWb", "Büyüklük aynı, işaret ters"]
          ],
          vurgu: 2
        },
        {
          tip: "tuzak",
          baslik: "Akı alanın kendisi değildir",
          metin: "B büyük olabilir ama alan ilmeğe paralelse akı sıfırdır. Alan düzgün değilse BA diye çarpamazsın.",
          yanlis: "Φ = BA her durumda geçerlidir; büyük B büyük akı demektir.",
          dogru: "Sınavda böyle yaz: *B is not uniform, so Φ_B = ∫B · dA.* Tele yakın dikdörtgende dA = ℓ dr, B = μ₀I/2πr; Φ = (μ₀Iℓ/2π) ln(b/a)."
        }
      ]
    },
    {
      baslik: "Faraday yasası: akı değişince emf",
      kisa: "Emf akının değişim hızıdır; akı sabit kalırsa, ne kadar büyük olursa olsun, emf yoktur.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "ε", alt: "indüklenen emf (V)" },
            "=",
            "−",
            { t: "dΦ_B / dt", alt: "akının değişim hızı" }
          ],
          aciklama: "N sarımlı bobinde |ε| = N |dΦ_B/dt|. Akı üç yolla değişir: B değişir, yüzey A değişir ya da açı θ değişir. Sınavda böyle yaz: *The emf equals the rate of change of flux, so a constant flux induces no emf.*"
        },
        {
          tip: "ikili",
          sol: { ikon: "⚡", baslik: "Emf indüklenir", maddeler: ["Akı zamanla değişir", "B, A ya da θ'dan biri değişir"] },
          sag: { ikon: "🔇", baslik: "Emf yok", maddeler: ["Akı sabit", "Akı büyük olsa da değişmiyor"] },
          oyun: [
            { metin: "Mıknatıs ilmeğe yaklaştırılıyor.", cevap: "sol", neden: "İlmekteki B değişiyor, akı değişiyor." },
            {
              metin: "Çok güçlü mıknatıs, ilmeğin yanında hareketsiz duruyor.",
              cevap: "sag",
              neden: "Akı büyük ama sabit: dΦ/dt = 0."
            },
            { metin: "İlmek düzgün alanda dönüyor.", cevap: "sol", neden: "Açı θ değişiyor, akı cosθ ile değişiyor." },
            {
              metin: "İlmek, düzgün alanın içinde kalarak yana kayıyor.",
              cevap: "sag",
              neden: "B ve A ve θ sabit, akı değişmiyor."
            },
            {
              metin: "Düzgün alandaki esnek tel ilmeğin alanı küçültülüyor.",
              cevap: "sol",
              neden: "A değişiyor, akı değişiyor."
            }
          ]
        }
      ]
    },
    {
      baslik: "Lenz yasası: yönü adım adım bul",
      kisa: "İndüklenen akım, akıdaki değişime karşı koyacak alanı üretir.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Lenz yasasıyla akım yönü: 4 adım",
          adimlar: [
            {
              baslik: "Dış alanın yönünü yaz",
              metin: "İlmekten geçen B'nin yönü: sayfa içi ya da dışı, sağa ya da sola."
            },
            {
              baslik: "Akı artıyor mu, azalıyor mu?",
              metin: "Yalnız değişime bak. Alan güçleniyor, ilmek büyüyor ya da alana dönüyorsa akı artıyordur."
            },
            {
              baslik: "Karşı koyan alanı seç",
              metin: "Akı artıyorsa B_ind dış alana zıt yönde; akı azalıyorsa dış alanla aynı yönde olmalı."
            },
            {
              baslik: "Sağ elle akımı bul",
              metin: "Başparmağı B_ind yönüne doğrult. Kıvrılan parmaklar akımın yönünü gösterir."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Artan alanda 50 sarımlı bobin",
          durum: "50 sarımlı, 0,020 m² alanlı bobin sayfa düzlemindedir. Sayfa içine doğru B, 0,20 s'de 0,10 T'dan 0,50 T'ya düzgün artıyor. Bobinin direnci 4,0 Ω. Emf'i, akımı ve yönünü bul.",
          adimlar: [
            "Akılar (θ = 0): Φ_i = (0,10)(0,020) = 2,0 × 10⁻³ Wb; Φ_f = (0,50)(0,020) = 1,0 × 10⁻² Wb.",
            "Değişim hızı: dΦ/dt = (1,0 × 10⁻² − 2,0 × 10⁻³) / 0,20 = 4,0 × 10⁻² Wb/s.",
            "Emf: |ε| = N |dΦ/dt| = (50)(4,0 × 10⁻²) = 2,0 V.",
            "Akım: I = ε/R = 2,0 / 4,0 = 0,50 A.",
            "Yön: dış B sayfa içi ve artıyor, bu yüzden B_ind sayfa dışı olmalı.",
            "Başparmak sayfadan dışarı: kıvrılan parmaklar saat yönünün tersine döner."
          ],
          sonuc: "ε = 2,0 V, I = 0,50 A, saat yönünün tersine"
        },
        {
          tip: "tuzak",
          baslik: "Zıt olan akı değil, akıdaki değişimdir",
          metin: "İndüklenen alan her zaman dış alana zıt değildir. Akı azalıyorsa B_ind dış alanla aynı yöndedir.",
          yanlis: "Yönü yalnız \"Lenz's law\" yazarak gerekçelendirmek; ya da \"indüklenen alan dış alana zıttır\" demek.",
          dogru: "Sınavda böyle yaz: *The flux into the page is increasing, so the induced field points out of the page; by the right-hand rule the current is counterclockwise.*"
        }
      ]
    },
    {
      baslik: "Dönen ilmek: sinüs biçimli emf",
      kisa: "Düzgün alanda dönen ilmekte akı kosinüs, emf sinüs biçimindedir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Φ = BA cosωt ve ε = BAω sinωt",
          xlabel: "t",
          ylabel: "normalleştirilmiş",
          xmax: 2,
          ymax: 4,
          xticks: [
            { v: 0.5, label: "T/2" },
            { v: 1, label: "T" },
            { v: 1.5, label: "3T/2" },
            { v: 2, label: "2T" }
          ],
          yticks: [
            { v: 3.7, label: "+1" },
            { v: 2, label: "0" },
            { v: 0.3, label: "−1" }
          ],
          ogeler: [
            { id: "ax0", tip: "cizgi", from: [0, 2], to: [2, 2], renk: 3, kesik: true },
            {
              id: "phi",
              tip: "egri",
              noktalar: [
                [0, 3.7], [0.063, 3.571], [0.125, 3.202], [0.188, 2.651], [0.25, 2],
                [0.313, 1.349], [0.375, 0.798], [0.438, 0.429], [0.5, 0.3], [0.563, 0.429],
                [0.625, 0.798], [0.688, 1.349], [0.75, 2], [0.813, 2.651], [0.875, 3.202],
                [0.938, 3.571], [1, 3.7], [1.063, 3.571], [1.125, 3.202], [1.188, 2.651],
                [1.25, 2], [1.313, 1.349], [1.375, 0.798], [1.438, 0.429], [1.5, 0.3],
                [1.563, 0.429], [1.625, 0.798], [1.688, 1.349], [1.75, 2], [1.813, 2.651],
                [1.875, 3.202], [1.938, 3.571], [2, 3.7]
              ],
              renk: 0,
              etiket: "Φ"
            },
            { id: "pa", tip: "nokta", x: 0, y: 3.7, renk: 3, etiket: "Φ max", gizli: true },
            { id: "pb", tip: "nokta", x: 0.25, y: 2, renk: 2, etiket: "Φ = 0", gizli: true },
            {
              id: "emf",
              tip: "egri",
              noktalar: [
                [0, 2], [0.063, 2.651], [0.125, 3.202], [0.188, 3.571], [0.25, 3.7],
                [0.313, 3.571], [0.375, 3.202], [0.438, 2.651], [0.5, 2], [0.563, 1.349],
                [0.625, 0.798], [0.688, 0.429], [0.75, 0.3], [0.813, 0.429], [0.875, 0.798],
                [0.938, 1.349], [1, 2], [1.063, 2.651], [1.125, 3.202], [1.188, 3.571],
                [1.25, 3.7], [1.313, 3.571], [1.375, 3.202], [1.438, 2.651], [1.5, 2],
                [1.563, 1.349], [1.625, 0.798], [1.688, 0.429], [1.75, 0.3], [1.813, 0.429],
                [1.875, 0.798], [1.938, 1.349], [2, 2]
              ],
              renk: 1,
              etiket: "ε",
              gizli: true
            },
            { id: "pc", tip: "nokta", x: 0.25, y: 3.7, renk: 1, etiket: "|ε| max", gizli: true }
          ],
          durumlar: [
            {
              metin: "t = 0: ilmek alana dik (θ = 0), akı en büyük: Φ = BA. İlmek ωt açısı kadar dönünce Φ = BA cosωt.",
              goster: ["pa"]
            },
            {
              metin: "T/4: ilmek alana paralel, Φ = 0. Ama akı tam burada ==en hızlı== değişiyor: eğri en dik.",
              goster: ["pb"]
            },
            { metin: "Emf eğimdir: ε = −dΦ/dt = BAω sinωt. Akının eğimi çizilince ==sinüs== çıkar.", goster: ["emf"] },
            { metin: "Akı sıfırdan geçerken |ε| en büyük (T/4); akı en büyükken (0, T/2) ε = 0.", goster: ["pc"] },
            {
              metin: "Bir turda emf iki kez sıfırdan geçip yön değiştirir, |ε| iki kez tepe yapar. ==Doğrusal artmaz.== ε_max = BAω.",
              gizle: ["pa", "pb"]
            },
            {
              metin: "B = 0,50 T, A = 0,020 m², f = 50 Hz (ω = 100π rad/s) için ε_max = BAω ≈ 3,1 V. Sınavda böyle yaz: *Since Φ = BA cosωt, ε = −dΦ/dt = BAω sinωt, which is sinusoidal and zero when the flux is maximum.*"
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌀",
              terim: "Induced electric field",
              tr: "indüklenmiş elektrik alan",
              tanim: "Değişen manyetik akı, iletken olmasa bile çevresinde kapalı ilmekler çizen bir E alanı doğurur: ∮E · dℓ = −dΦ_B/dt. Maxwell'in üçüncü denklemidir.",
              ornek: "Alan çizgileri kapalı ilmektir; yüklerin ürettiği E gibi + yükten başlamaz."
            },
            {
              ikon: "📡",
              terim: "Electromagnetic wave",
              tr: "elektromanyetik dalga",
              tanim: "Değişen E, B'yi; değişen B, E'yi üretir. Maxwell denklemleri dalganın boşlukta c = 1/√(ε₀μ₀) ≈ 3,00 × 10⁸ m/s hızıyla gittiğini gösterir.",
              ornek: "Bu hızı türetmen beklenmez; yalnız ilişkiyi bil."
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
            "*Magnetic flux*: Φ_B = B · A = BA cosθ; düzgün olmayan alanda Φ_B = ∫B · dA. Birim weber (T·m²).",
            "*Faraday's law*: ε = −dΦ_B/dt; N sarımda |ε| = N|dΦ_B/dt|. Emf yalnız akı değişirse vardır.",
            "Akı B, A ya da θ değişince değişir; büyük ama sabit akı emf vermez.",
            "*Lenz's law*: B_ind akıdaki değişime karşı koyar: akı artarsa zıt, azalırsa aynı yönde. Sağ elle akımı bul.",
            "Gerekçede \"Lenz's law\" yazmak yetmez: akı nasıl değişiyor, B_ind hangi yönde ve sağ el kuralını yaz.",
            "Dönen ilmekte Φ = BA cosωt, ε = BAω sinωt; emf sinüs biçimlidir ve doğrusal artmaz.",
            "Değişen B, E alanı üretir (Maxwell 3); değişen E de B üretir (Maxwell 4); bu yüzden EM dalgalar vardır, c = 1/√(ε₀μ₀)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A flat circular loop of area 0.040 m² is in a uniform magnetic field of 0.25 T. The field direction makes an angle of 60° with the normal to the loop. What is the magnetic flux through the loop?",
      opts: ["1.0 × 10⁻² Wb", "8.7 × 10⁻³ Wb", "5.0 × 10⁻³ Wb", "Zero"],
      a: 2,
      why: "Φ = BA cosθ = (0,25)(0,040)(cos 60°) = 5,0 × 10⁻³ Wb. A şıkkı cosθ'yı atlar; B şıkkı sinθ kullanır."
    },
    {
      q: "A uniform magnetic field points out of the page and its magnitude is decreasing. A conducting loop lies in the plane of the page. What is the direction of the induced current?",
      opts: [
        "Clockwise, because the induced field must point into the page, opposing B.",
        "Counterclockwise, because the induced field must point out of the page, opposing the decrease in flux.",
        "There is no current, because the field is uniform.",
        "There is no current, because the loop is not moving."
      ],
      a: 1,
      why: "Sayfa dışına bakan akı azalıyor. B_ind akıdaki azalmaya karşı koyar, yani dış alanla aynı yönde (sayfa dışı) olur. Başparmak sayfa dışı: akım saat yönünün tersine. A şıkkı \"hep zıt\" hatasını yapar."
    },
    {
      q: "The magnetic flux through a coil of 10 turns varies with time as shown in the table. What is the magnitude of the average induced emf in the coil between t = 4 s and t = 6 s?",
      fig: {
        type: "table",
        head: ["t (s)", "Φ_B per turn (mWb)"],
        rows: [["0", "2"], ["2", "10"], ["4", "10"], ["6", "4"], ["8", "4"]],
        caption: "Flux through one turn"
      },
      opts: ["3.0 × 10⁻³ V", "1.5 × 10⁻² V", "6.0 × 10⁻² V", "3.0 × 10⁻² V"],
      a: 3,
      why: "|ε| = N |ΔΦ/Δt| = 10 × (6 × 10⁻³ Wb)/(2 s) = 3,0 × 10⁻² V. A şıkkı N'yi unutur; C şıkkı Δt = 2 s'yi 1 s alır."
    },
    {
      q: "A rectangular loop rotates at constant angular speed about an axis perpendicular to a uniform magnetic field. At the instant the plane of the loop is perpendicular to the field, which statement is correct?",
      opts: [
        "The flux is at its maximum and the induced emf is zero.",
        "The flux is zero and the induced emf is at its maximum.",
        "Both the flux and the induced emf are at their maximum.",
        "Both the flux and the induced emf are zero."
      ],
      a: 0,
      why: "Düzlem B'ye dik iken θ = 0 ve Φ = BA en büyüktür. Ama ε = BAω sinωt orada sıfırdır, çünkü Φ'nin eğimi sıfırdır. Akı ve emf aralarında çeyrek periyot faz farkı taşır."
    },
    {
      q: "The north pole of a bar magnet is moved toward a conducting loop along the loop's axis. Which statement about the loop is correct?",
      opts: [
        "The face of the loop nearest the magnet acts as a south pole and attracts the magnet.",
        "The face of the loop nearest the magnet acts as a north pole and repels the magnet, opposing the motion.",
        "No current is induced because the magnet is a permanent magnet.",
        "A current is induced only after the magnet stops moving."
      ],
      a: 1,
      why: "Mıknatıs yaklaşırken ilmekten geçen akı artar. B_ind buna karşı koyar: mıknatısa bakan yüz kuzey kutbu gibi davranır ve iter. Bu iş yapma gerektirir; enerji korunur. A şıkkı çekmeyi söyler, hareketi kolaylaştırırdı."
    }
  ]
};
