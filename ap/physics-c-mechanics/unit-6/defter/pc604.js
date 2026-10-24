/* Kitpath not defteri · pc604 · 6.5 Yuvarlanma. Kaynak: kaynak/ced-physc.md (Unit 6, Topic 6.5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc604",
  amac: "Bu konu yuvarlanmayı anlatıyor: tekerlek hem ilerler hem döner. Kaymadan yuvarlanmanın v = rω bağını, enerjinin öteleme ve dönmeye paylaşımını, statik sürtünmenin rolünü ve kayarak yuvarlanmanın farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kaymadan yuvarlanma",
      kisa: "Temas noktası yerde anlık durur; v_cm = rω ve a_cm = rα.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🛞",
              terim: "Rolling without slipping",
              tr: "kaymadan yuvarlanma",
              tanim: "Temas noktası yüzeyle birlikte anlık durur. Bu yüzden Δx_cm = rΔθ, v_cm = rω ve a_cm = rα.",
              ornek: "r = 0,3 m'lik tekerlek yerde 3 m giderse Δθ = 10 rad döner."
            },
            {
              ikon: "🧲",
              terim: "Static friction",
              tr: "statik sürtünme",
              tanim: "Temas noktası kaymadığı için sürtünme statiktir; üst sınırı μ_s N'dir ama bu değerde olmak zorunda değildir. Enerji harcamaz.",
              ornek: "Rampada inen topu, yukarı yönlü statik sürtünme döndürür."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "v_cm = rω", alt: "a_cm = rα" },
            "|",
            { t: "K = K_trans + K_rot", alt: "½Mv_cm² + ½I_cm ω²" }
          ],
          aciklama: "✍️ Sınavda böyle yaz: *The wheel rolls without slipping, so v_cm = rω.*"
        },
        {
          tip: "grafik",
          baslik: "Yuvarlanan tekerleğin noktalarının yere göre hızı (v_cm = 3 m/s)",
          xlabel: "hız (m/s)",
          ylabel: "tekerlek üzerinde",
          xmax: 8,
          ymax: 6,
          xticks: [
            { v: 3, label: "3" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 1, label: "alt" },
            { v: 3, label: "orta" },
            { v: 5, label: "üst" }
          ],
          ogeler: [
            { id: "cap", tip: "cizgi", from: [0.5, 0.8], to: [0.5, 5.2], renk: 3, kesik: true },
            { id: "vc", tip: "ok", from: [0.5, 3], to: [3.5, 3], renk: 0, gizli: true },
            { id: "tc", tip: "yazi", x: 3.8, y: 3, metin: "v_cm = 3", hiza: "start", gizli: true },
            { id: "vt", tip: "ok", from: [0.5, 5], to: [6.5, 5], renk: 1, gizli: true },
            { id: "tt", tip: "yazi", x: 6.8, y: 5, metin: "2v_cm = 6", hiza: "start", gizli: true },
            { id: "pa", tip: "nokta", x: 0.5, y: 1, renk: 2, etiket: "0", gizli: true }
          ],
          durumlar: [
            {
              metin: "Kaymadan yuvarlanan tekerlek v_cm = 3 m/s ile ilerliyor. Kesikli doğru tekerleğin çapı; noktaların yere göre hızına bakıyoruz."
            },
            {
              metin: "Merkez: yere göre hızı v_cm = 3 m/s.",
              goster: [
                "vc",
                "tc"
              ]
            },
            {
              metin: "En üst nokta: v_cm + rω = 2v_cm = 6 m/s.",
              goster: [
                "vt",
                "tt"
              ]
            },
            {
              metin: "Temas noktası: v_cm − rω = 0. Yüzeye göre kaymıyor; bu yüzden sürtünme ==statik== ve enerji harcamaz.",
              goster: [
                "pa"
              ]
            }
          ]
        }
      ]
    },
    {
      baslik: "Rampa: kim önce iner?",
      kisa: "Yalnızca k = I/(MR²) belirler; kütle ve yarıçap sadeleşir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "Mgh = ½Mv² + ½Iω²", alt: "ω = v/R" },
            "→",
            { t: "v² = 2gh / (1 + k)", alt: "k = I/(MR²)" },
            "|",
            { t: "a = g sinθ / (1 + k)", alt: "rampada" }
          ],
          aciklama: "✍️ Sınavda böyle yaz: *The object with the smaller I/(MR²) has the larger acceleration, so it reaches the bottom first.*"
        },
        {
          tip: "tablo",
          baslik: "Şekil faktörü k ve sonuçları",
          head: [
            "Cisim",
            "I",
            "k",
            "a / (g sinθ)",
            "K_rot / K"
          ],
          rows: [
            [
              "Dolu küre",
              "(2/5)MR²",
              "2/5",
              "5/7",
              "2/7"
            ],
            [
              "Dolu disk",
              "½MR²",
              "1/2",
              "2/3",
              "1/3"
            ],
            [
              "İnce küresel kabuk",
              "(2/3)MR²",
              "2/3",
              "3/5",
              "2/5"
            ],
            [
              "Halka",
              "MR²",
              "1",
              "1/2",
              "1/2"
            ]
          ],
          vurgu: 3,
          not: "k küçüldükçe ivme büyür; kütle dönme eksenine yakınsa enerjinin daha büyük kısmı öteleme enerjisine gider."
        },
        {
          tip: "grafik",
          baslik: "v² – h: eğim 2g/(1 + k)",
          xlabel: "h (m)",
          ylabel: "v² (m²/s²)",
          xmax: 1.2,
          ymax: 21,
          xticks: [
            { v: 0.25, label: "0,25" },
            { v: 0.5, label: "0,5" },
            { v: 0.75, label: "0,75" },
            { v: 1, label: "1" }
          ],
          yticks: [
            { v: 5, label: "5" },
            { v: 10, label: "10" },
            { v: 15, label: "15" },
            { v: 20, label: "20" }
          ],
          ogeler: [
            { id: "hoop", tip: "cizgi", from: [0, 0], to: [1, 9.8], renk: 0, etiket: "halka" },
            {
              id: "shell",
              tip: "cizgi",
              from: [0, 0],
              to: [1, 11.76],
              renk: 1,
              etiket: "kabuk",
              gizli: true
            },
            {
              id: "sph",
              tip: "cizgi",
              from: [0, 0],
              to: [1, 14],
              renk: 2,
              etiket: "küre",
              gizli: true
            },
            {
              id: "slide",
              tip: "cizgi",
              from: [0, 0],
              to: [1, 19.6],
              renk: 3,
              kesik: true,
              etiket: "kayan blok",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Halka (k = 1): v² = 2gh/2 = 9,8h. Enerjinin yarısı dönmeye gidiyor." },
            {
              metin: "İnce küresel kabuk (k = 2/3): v² = 11,76h; eğim daha dik.",
              goster: [
                "shell"
              ]
            },
            {
              metin: "Dolu küre (k = 2/5): v² = 14h. Kütlesi merkeze daha yakın, dönmeye az enerji gidiyor.",
              goster: [
                "sph"
              ]
            },
            {
              metin: "Karşılaştırma: sürtünmesiz kayan blok (k = 0) tüm enerjiyi ötelemeye çevirir, v² = 2gh = 19,6h.",
              goster: [
                "slide"
              ]
            },
            {
              metin: "Sıra: kayan blok, küre, kabuk, halka. ==Kütle ve yarıçap hiçbir çizgiyi değiştirmez.=="
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Ağır ya da büyük olan hızlı inmez",
          metin: "k = I/(MR²) yalnızca kütlenin eksene göre dağılımına, yani şekle bağlıdır. M ve R denklemden sadeleşir.",
          yanlis: "Daha ağır ya da daha büyük yarıçaplı cisim rampadan önce iner.",
          dogru: "Aynı şekilli cisimler birlikte iner; k küçük olan önce iner."
        }
      ]
    },
    {
      baslik: "Statik sürtünme: enerji harcamaz",
      kisa: "f'yi öteleme ve dönme denklemlerinden bul; f = μN değildir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "M = 3 kg'lık düzgün disk ve halka, 30° rampa, kaymadan yuvarlanıyor",
          durum: "Her birinin ivmesini a ve statik sürtünme kuvvetini f bul.",
          adimlar: [
            "Öteleme (rampa aşağı +): Mg sinθ − f = Ma.",
            "Dönme (merkez etrafında): fR = Iα = I a/R → f = I a/R² = kMa.",
            "İkisini birleştir: Mg sinθ = Ma(1 + k) → a = g sinθ/(1 + k) ve f = [k/(1 + k)] Mg sinθ.",
            "Mg sinθ = 3 × 9,8 × 0,5 = 14,7 N. Disk (k = 1/2): a = 4,9/1,5 ≈ 3,27 m/s²; f = (1/3)(14,7) = 4,9 N.",
            "Halka (k = 1): a = 4,9/2 = 2,45 m/s²; f = (1/2)(14,7) = 7,35 N.",
            "Enerji denklemlerinde f görünmez (temas noktası anlık duruyor, f iş yapmaz); ama f'nin değeri için Newton yasaları gerekir.",
            "✍️ Sınavda böyle yaz: *I write Newton's second law for translation and for rotation, and link them with a = Rα.*"
          ],
          sonuc: "Disk: a ≈ 3,27 m/s², f = 4,9 N; halka: a = 2,45 m/s², f = 7,35 N"
        },
        {
          tip: "tuzak",
          baslik: "Statik sürtünme her zaman μ_s N değildir",
          metin: "f ≤ μ_s N yalnızca üst sınırdır. Yuvarlanmada gerçek değer hareket denklemlerinden gelir; kaymamak için μ_s ≥ k tanθ/(1 + k) olmalıdır.",
          yanlis: "f = μ_s N alırım ya da f'yi enerji korunumundan bulurum.",
          dogru: "f'yi ΣF = Ma ve Στ = Iα'dan bul; f ≤ μ_s N sınırını kaymama koşulu olarak kullan."
        }
      ]
    },
    {
      baslik: "Kayarak yuvarlanma",
      kisa: "Kayarken v ≠ rω; kinetik sürtünme f_k = μ_k N olur ve enerji harcar.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Dönmeden atılan dolu küre (k = 2/5), a_cm = −2 m/s²",
          xlabel: "t (s)",
          ylabel: "hız (m/s)",
          xmax: 2.4,
          ymax: 8,
          xticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1" },
            { v: 1.5, label: "1,5" },
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" }
          ],
          ogeler: [
            { id: "v1", tip: "cizgi", from: [0, 7], to: [1, 5], renk: 0, etiket: "v_cm" },
            { id: "w1", tip: "cizgi", from: [0, 0], to: [1, 5], renk: 1, etiket: "rω", gizli: true },
            {
              id: "pk",
              tip: "nokta",
              x: 1,
              y: 5,
              renk: 3,
              etiket: "t = 1 s",
              kilavuz: true,
              gizli: true
            },
            { id: "v2", tip: "cizgi", from: [1, 5], to: [2, 5], renk: 2, kesik: true, gizli: true }
          ],
          durumlar: [
            {
              metin: "Top 7 m/s ile dönmeden yere değiyor: v_cm = 7, rω = 0. Kinetik sürtünme f_k = μ_k N merkezi 2 m/s² yavaşlatıyor."
            },
            {
              metin: "Aynı kuvvet topu döndürür: f_k R = Iα → rα = a/k = 2/0,4 = 5 m/s². rω = 5t artıyor.",
              goster: [
                "w1"
              ]
            },
            {
              metin: "t = 1 s'de 7 − 2t = 5t eşitleniyor: v_cm = rω = 5 m/s. Kayma biter.",
              goster: [
                "pk"
              ]
            },
            {
              metin: "Sonra kaymadan yuvarlanma: v_cm = rω sabit (yuvarlanma direnci yok). Kütle başına K: 24,5 J/kg → 17,5 J/kg; fark ısıya gitti.",
              goster: [
                "v2"
              ]
            },
            {
              metin: "✍️ Sınavda böyle yaz: *While the ball slides, v_cm ≠ rω and kinetic friction acts; rolling without slipping begins when v_cm = rω.*"
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Kayarken v = rω kullanma, f_k I'ya bağlı değil",
          metin: "Kayma sürerken v_cm ≠ rω'dır ve sürtünme kinetiktir: f_k = μ_k N. Yüzey ve normal kuvvet aynıysa disk ve halka için eşittir.",
          yanlis: "Kayan halkada sürtünme diskinkinden büyüktür; v = rω yazarım.",
          dogru: "f_k = μ_k N, I'dan bağımsız; v ≠ rω olduğu sürece kayma sürer ve enerji ısıya gider."
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
            "Yuvarlanan sistemin K'sı iki parçadır: K = ½Mv_cm² + ½I_cm ω².",
            "*Kaymadan yuvarlanma*: Δx_cm = rΔθ, v_cm = rω, a_cm = rα; temas noktası anlık durur.",
            "Yuvarlanmada sürtünme statiktir ve enerji harcamaz; f'nin değeri ΣF = Ma ve Στ = Iα'dan çıkar (f = μ_s N değil).",
            "Rampa: a = g sinθ/(1 + k), k = I/(MR²). Küçük k önce iner; halka en geç, kütle ve yarıçap etkisizdir.",
            "Enerji payı: dönmeye giden K_rot/K = k/(1 + k) (halka 1/2, disk 1/3, dolu küre 2/7).",
            "*Kayarak yuvarlanma*: v_cm ≠ rω, f_k = μ_k N (I'dan bağımsız) ve enerji ısıya gider.",
            "Gerekçede hem öteleme hem dönme denklemini yaz ve a = rα ile bağla; 'enerji korunur' tek başına yetmez.",
            "Yuvarlanma direnci kapsam dışıdır; ideal durumda yuvarlanma sırasında enerji kaybı yoktur."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A wheel of radius 0.4 m rolls without slipping on a horizontal surface, and its center moves at 6 m/s. What are the wheel's angular speed and the speed, relative to the ground, of the point at the top of the wheel?",
      opts: [
        "15 rad/s; 6 m/s",
        "2.4 rad/s; 12 m/s",
        "15 rad/s; 12 m/s",
        "15 rad/s; 21 m/s"
      ],
      a: 2,
      why: "ω = v_cm/r = 6/0,4 = 15 rad/s; en üst noktanın hızı v_cm + rω = 12 m/s. A en çekici yanlış şık: tüm noktaların merkezle aynı hızda olduğunu sanmak."
    },
    {
      q: "A solid sphere, a thin spherical shell, and a hoop have the same mass and the same radius. They are released from rest at the top of a rough incline and roll without slipping. In what order do they reach the bottom, first to last?",
      opts: [
        "hoop, shell, sphere",
        "sphere, shell, hoop",
        "all reach the bottom at the same time",
        "shell, sphere, hoop"
      ],
      a: 1,
      why: "Sıra k = I/(MR²) ile belirlenir: küre 2/5 < kabuk 2/3 < halka 1. En küçük k en büyük ivmeyi verir. D en çekici yanlış şık: kabukla dolu küreyi ters sıralamak."
    },
    {
      q: "A uniform disk and a hoop have the same mass and radius. Each rolls down the same incline without slipping. Which statement about the static friction force on each is correct?",
      opts: [
        "The friction force is zero for both, since neither slips.",
        "The friction forces are equal, since the masses and radii are equal.",
        "The friction force is greater on the disk.",
        "The friction force is greater on the hoop, because f = [k/(1 + k)]Mg sinθ increases with k."
      ],
      a: 3,
      why: "f = I a/R² = kMa ve a = g sinθ/(1 + k); k halkada büyük olduğundan f daha büyüktür (7,35 N ve 4,9 N gibi). A en çekici yanlış şık: kaymayan cismin sürtünmesinin sıfır olduğunu sanmak; sürtünme olmadan dönme başlamaz."
    },
    {
      q: "A uniform disk and a hoop, both of mass M and radius R, slide without rotating across a rough floor with the same initial speed. The coefficient of kinetic friction is the same for both. While both are still sliding, how do the kinetic friction forces compare?",
      opts: [
        "They are equal.",
        "The force on the hoop is greater.",
        "The force on the disk is greater.",
        "It cannot be determined without the speed."
      ],
      a: 0,
      why: "f_k = μ_k N = μ_k Mg; I'a bağlı değildir. B en çekici yanlış şık: halkanın büyük I'sı yüzünden sürtünmenin de büyük olduğunu sanmak."
    },
    {
      q: "A solid disk of mass 4 kg rolls without slipping on a level floor at a center speed of 3 m/s. What is its total kinetic energy?",
      opts: [
        "18 J",
        "36 J",
        "27 J",
        "54 J"
      ],
      a: 2,
      why: "K = ½Mv² + ½(½MR²)(v/R)² = ¾Mv² = ¾ × 4 × 9 = 27 J. A en çekici yanlış şık 18 J: yalnızca öteleme enerjisi; dönme enerjisi unutulmuş."
    }
  ]
};
