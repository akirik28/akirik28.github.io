/* Kitpath not defteri · pc503 · 5.4 Eylemsizlik Momenti. Kaynak: kaynak/ced-physc.md (Unit 5, Topic 5.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc503",
  amac: "Bu konu dönmeye karşı direnci anlatıyor: eylemsizlik momenti (I). Kütlenin eksene göre nerede durduğunun neden önemli olduğunu, I'yı toplam ya da integralle nasıl bulacağını ve paralel eksen teoremini öğreneceksin.",
  bolumler: [
    {
      baslik: "I: dönmedeki değişime direnç",
      kisa: "I kütleye ve kütlenin eksene göre dağılımına bağlıdır; uzak kütle çok katkı yapar.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧱",
              terim: "Rotational inertia",
              tr: "eylemsizlik momenti",
              tanim: "Bir cismin dönme hareketindeki değişime direnci, I. Kütleye ve kütlenin eksene göre dağılımına bağlıdır; eksen değişirse I de değişir.",
              ornek: "Aynı çubuk ucundan döndürülürse, ortasından döndürülmekten daha zor döner."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "I = mr²", alt: "noktasal kütle" },
            "→",
            { t: "I_tot = ΣIᵢ = Σmᵢrᵢ²", alt: "kütle topluluğu" },
            "→",
            { t: "I = ∫r² dm", alt: "sürekli cisim" }
          ],
          aciklama: "Birimi kg·m². r, kütlenin dönme eksenine dik uzaklığıdır. ✍️ Sınavda böyle yaz: *I = Σmr² depends on how far the mass is from the axis, not only on the total mass.*"
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 1, sonek: " kg·m²", etiket: "iki 2 kg'lık kütle eksenden 0,5 m (2·2·0,5²)" },
            { deger: 4, sonek: " kg·m²", etiket: "aynı kütleler eksenden 1,0 m: uzaklık ×2, I ×4" }
          ]
        }
      ]
    },
    {
      baslik: "Aynı kütle, farklı I",
      kisa: "Yarıçap iki katına çıkarsa I dört katına çıkar; kütle dışarı kaydıkça I büyür.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "2 kg'lık noktasal kütle: I = 2r²",
          xlabel: "r (m)",
          ylabel: "I (kg·m²)",
          xmax: 2.4,
          ymax: 10,
          xticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1" },
            { v: 1.5, label: "1,5" },
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.1, 0.02], [0.2, 0.08], [0.3, 0.18], [0.4, 0.32], [0.5, 0.5],
                [0.6, 0.72], [0.7, 0.98], [0.8, 1.28], [0.9, 1.62], [1, 2], [1.1, 2.42],
                [1.2, 2.88], [1.3, 3.38], [1.4, 3.92], [1.5, 4.5], [1.6, 5.12], [1.7, 5.78],
                [1.8, 6.48], [1.9, 7.22], [2, 8], [2.1, 8.82], [2.2, 9.68]
              ],
              renk: 0
            },
            {
              id: "p1",
              tip: "nokta",
              x: 0.5,
              y: 0.5,
              renk: 1,
              etiket: "0,5",
              kilavuz: true,
              gizli: true
            },
            { id: "p2", tip: "nokta", x: 1, y: 2, renk: 2, etiket: "2", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", x: 2, y: 8, renk: 3, etiket: "8", kilavuz: true, gizli: true }
          ],
          durumlar: [
            {
              metin: "m = 2 kg sabit, uzaklık değişiyor: I = mr² = 2r². Eğri bir paraboldür, doğru değil."
            },
            {
              metin: "r = 0,5 m: I = 2 × 0,25 = 0,5 kg·m².",
              goster: [
                "p1"
              ]
            },
            {
              metin: "r iki katına çıkıp 1 m olunca I dört katına çıkıyor: 2 kg·m².",
              goster: [
                "p2"
              ]
            },
            {
              metin: "r tekrar iki kat (2 m): I yine dört kat, 8 kg·m². ==I ∝ r²==.",
              goster: [
                "p3"
              ]
            },
            {
              metin: "✍️ Sınavda böyle yaz: *The rotational inertia is proportional to r², so doubling r quadruples I.*"
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🎯",
            baslik: "Küçük I",
            maddeler: [
              "Kütle eksene yakın",
              "Döndürmek kolay"
            ]
          },
          sag: {
            ikon: "🎡",
            baslik: "Büyük I",
            maddeler: [
              "Kütle eksenden uzak",
              "Döndürmek zor"
            ]
          },
          oyun: [
            {
              metin: "Dolu disk (*hoop* ile aynı M ve R).",
              cevap: "sol",
              neden: "½MR² < MR²: kütle merkeze daha yakın dağılmış."
            },
            {
              metin: "İnce halka (*hoop*), aynı M ve R.",
              cevap: "sag",
              neden: "Bütün kütle eksenden R kadar uzakta: I = MR²."
            },
            {
              metin: "Patenci kollarını gövdesine çekmiş.",
              cevap: "sol",
              neden: "Kütle eksene yaklaştı, I azaldı."
            },
            {
              metin: "Aynı çubuk, merkezi yerine ucundan döndürülüyor.",
              cevap: "sag",
              neden: "ML²/3, ML²/12'nin dört katı."
            }
          ]
        }
      ]
    },
    {
      baslik: "Hazır kalıplar ve I = ∫ r² dm",
      kisa: "Kalıpları bil; sürekli cisimde dm'yi uzunlukla yazıp integral al.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Sık kullanılan I değerleri (M kütle, L uzunluk, R yarıçap)",
          head: [
            "Cisim ve eksen",
            "I",
            "Not"
          ],
          rows: [
            [
              "İnce çubuk, merkezinden (çubuğa dik)",
              "ML²/12",
              "integralle türetilir"
            ],
            [
              "İnce çubuk, ucundan (çubuğa dik)",
              "ML²/3",
              "integral ya da paralel eksen"
            ],
            [
              "İnce halka ya da silindirik kabuk, merkezinden",
              "MR²",
              "kütle R'de"
            ],
            [
              "Dolu disk ya da silindir, merkezinden",
              "½MR²",
              "integralle türetilir"
            ],
            [
              "Dolu küre, merkezinden",
              "(2/5)MR²",
              "karşılaştırma için; türetme beklenmez"
            ],
            [
              "İnce küresel kabuk, merkezinden",
              "(2/3)MR²",
              "karşılaştırma için; türetme beklenmez"
            ]
          ],
          vurgu: 0,
          not: "Kalkülüsle türetme kapsamı: ince çubuk, ince silindirik kabuk, disk ve eş eksenli halkalar."
        },
        {
          tip: "ornek",
          baslik: "Düzgün çubuk (M, L): I = ∫ r² dm",
          durum: "Çubuğa dik, merkezinden geçen eksene göre I'yı integralle türet; sonra ucundan geçen eksen için hesapla.",
          adimlar: [
            "Çizgisel yoğunluk λ = M/L. Eksenden x uzaklıktaki parça için dm = λ dx ve r = x.",
            "I = ∫x² dm = λ∫x² dx, sınırlar −L/2'den +L/2'ye.",
            "Önce integrali al: λ[x³/3] = λ(L³/24 + L³/24) = λL³/12; sonra λ = M/L koy: I_cm = ML²/12.",
            "Ucundan geçen eksen için sınırlar 0'dan L'ye: I_uç = λL³/3 = ML²/3.",
            "Kontrol: ML²/3 = 4 × ML²/12; ucundan döndürmek merkezden döndürmenin 4 katı zordur.",
            "✍️ Sınavda böyle yaz: *Using dm = λ dx and integrating from −L/2 to L/2, I = ML²/12.*"
          ],
          sonuc: "I_cm = ML²/12, I_uç = ML²/3"
        }
      ]
    },
    {
      baslik: "Paralel eksen teoremi",
      kisa: "Eksen kütle merkezinden d kayarsa I, Md² kadar artar; en küçük I merkezdedir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "I' = I_cm + Md²", alt: "d: iki paralel eksen arası uzaklık" }
          ],
          aciklama: "Eksenlerden biri kütle merkezinden geçmelidir. ✍️ Sınavda böyle yaz: *By the parallel-axis theorem, I = I_cm + Md², where d is measured from the center of mass.*"
        },
        {
          tip: "grafik",
          baslik: "M = 3 kg, L = 2 m çubuk: I'(d) = 1 + 3d²",
          xlabel: "d (m)",
          ylabel: "I' (kg·m²)",
          xmax: 1.2,
          ymax: 5,
          xticks: [
            { v: 0.25, label: "0,25" },
            { v: 0.5, label: "0,5" },
            { v: 0.75, label: "0,75" },
            { v: 1, label: "1" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 1], [0.05, 1.008], [0.1, 1.03], [0.15, 1.068], [0.2, 1.12], [0.25, 1.188],
                [0.3, 1.27], [0.35, 1.368], [0.4, 1.48], [0.45, 1.608], [0.5, 1.75], [0.55, 1.908],
                [0.6, 2.08], [0.65, 2.268], [0.7, 2.47], [0.75, 2.688], [0.8, 2.92], [0.85, 3.168],
                [0.9, 3.43], [0.95, 3.708], [1, 4], [1.05, 4.308], [1.1, 4.63]
              ],
              renk: 0
            },
            {
              id: "p0",
              tip: "nokta",
              x: 0,
              y: 1,
              renk: 1,
              etiket: "I_cm = 1",
              kilavuz: true,
              gizli: true
            },
            {
              id: "p5",
              tip: "nokta",
              x: 0.5,
              y: 1.75,
              renk: 2,
              etiket: "1,75",
              kilavuz: true,
              gizli: true
            },
            {
              id: "p1",
              tip: "nokta",
              x: 1,
              y: 4,
              renk: 3,
              etiket: "4 = ML²/3",
              kilavuz: true,
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Eksen kütle merkezinden d kadar kaydırılırken I' = I_cm + Md². I_cm = ML²/12 = 3 × 4/12 = 1 kg·m²."
            },
            {
              metin: "d = 0: eksen kütle merkezinden geçiyor. I' = 1, ==en küçük değer==.",
              goster: [
                "p0"
              ]
            },
            {
              metin: "d = 0,5 m: I' = 1 + 3 × 0,25 = 1,75 kg·m².",
              goster: [
                "p5"
              ]
            },
            {
              metin: "d = 1 m (çubuğun ucu): I' = 1 + 3 = 4 kg·m², integralle bulduğumuz ML²/3 ile aynı.",
              goster: [
                "p1"
              ]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "d nereden ölçülür, I neye bağlı?",
          metin: "Parallel-axis teoremi kütle merkezinden geçen eksene göredir. Merkez dışındaki iki eksen arasında doğrudan geçiş yapma: önce I_cm'ye dön, sonra Md² ekle.",
          yanlis: "I yalnızca kütleye bağlıdır; d'yi herhangi bir eksenden ölçerim.",
          dogru: "I, kütleye ve eksene göre dağılıma bağlıdır; d kütle merkezinden geçen eksene olan uzaklıktır."
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
            "*Rotational inertia* I, dönmedeki değişime direncidir; kütleye ve kütlenin eksene göre dağılımına bağlıdır.",
            "Noktasal kütle I = mr²; topluluk I_tot = Σmᵢrᵢ²; sürekli cisim I = ∫r² dm (r: dm'nin eksene dik uzaklığı).",
            "Uzaklık iki katı → I dört katı; aynı kütle ve yarıçapta halka (MR²) diskten (½MR²) büyük I'ya sahiptir.",
            "Kalıplar: çubuk merkezden ML²/12, uçtan ML²/3; halka MR²; disk ½MR².",
            "Integralde dm = λ dx yaz, düzgün olmayan çubukta λ(x) kullan; sınırları eksen konumuna göre ver.",
            "*Parallel-axis theorem*: I' = I_cm + Md²; bir düzlemde I en küçük değerini kütle merkezinden geçen eksende alır.",
            "d kütle merkezinden ölçülür; iki merkez dışı eksen arasında doğrudan geçiş yok.",
            "Çubuğun ucundan I merkezdekinin 4 katıdır: ML²/12 + M(L/2)² = ML²/3."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A small block of mass m is attached to a light rod and rotates at distance r from the axis, so its rotational inertia is I. The mass is doubled and the distance from the axis is halved. The new rotational inertia is",
      opts: [
        "I/4",
        "I/2",
        "I",
        "2I"
      ],
      a: 1,
      why: "I' = (2m)(r/2)² = mr²/2 = I/2. En çekici yanlış şık I: kütle iki kat ve uzaklık yarı olunca birbirini götürdüğünü sanmak; I, r²'ye bağlıdır."
    },
    {
      q: "Three small masses are attached to a light, rigid frame that rotates about an axis through O. The table gives each mass and its distance from the axis. What is the rotational inertia of the system about this axis?",
      fig: {
        type: "table",
        caption: "Masses on a light frame",
        head: [
          "Mass (kg)",
          "Distance from axis (m)"
        ],
        rows: [
          [
            "1.0",
            "0.4"
          ],
          [
            "2.0",
            "0.3"
          ],
          [
            "0.5",
            "0.6"
          ]
        ]
      },
      opts: [
        "1.30 kg·m²",
        "0.26 kg·m²",
        "0.52 kg·m²",
        "3.50 kg·m²"
      ],
      a: 2,
      why: "I = Σmr² = 1,0(0,16) + 2,0(0,09) + 0,5(0,36) = 0,52 kg·m². En çekici yanlış şık 1,30: Σmr hesaplanmış; uzaklığın karesi alınmamış."
    },
    {
      q: "A uniform disk of mass M and radius R has rotational inertia ½MR² about an axis through its center and perpendicular to its face. What is its rotational inertia about a parallel axis through a point on its rim?",
      opts: [
        "(3/2)MR²",
        "MR²",
        "½MR²",
        "2MR²"
      ],
      a: 0,
      why: "I' = I_cm + Md² = ½MR² + MR² = (3/2)MR². B en çekici yanlış şık: yalnızca Md² terimini almak, I_cm'yi unutmak."
    },
    {
      q: "A hoop and a solid disk have the same mass and the same radius. Each is free to rotate about its center and starts from rest. The same constant torque is applied to each. Which statement is correct?",
      opts: [
        "Both have the same rotational inertia because M and R are equal.",
        "The disk has the greater rotational inertia because its mass is concentrated near the center.",
        "The hoop has the smaller rotational inertia because its mass is spread uniformly.",
        "The disk has the greater angular acceleration because its rotational inertia is smaller."
      ],
      a: 3,
      why: "Halkanın kütlesi eksenden R uzakta (MR²), diskinki daha yakın (½MR²); disk daha küçük I'ya sahiptir ve α = τ/I daha büyüktür. A en çekici yanlış şık: I'nın yalnızca M ve R'ye bağlı olduğunu, dağılımı yok saymak."
    },
    {
      q: "A thin rod of length L has linear density λ(x) = kx, where x is measured from end O and k is a constant. The total mass is M. What is the rotational inertia of the rod about an axis through O perpendicular to the rod?",
      opts: [
        "ML²/3",
        "ML²/2",
        "ML²/4",
        "ML²/12"
      ],
      a: 1,
      why: "M = ∫kx dx = kL²/2, I = ∫x²(kx)dx = kL⁴/4 = (2M/L²)(L⁴/4) = ML²/2. A en çekici yanlış şık: düzgün çubuğun değeri; kütle O'dan uzakta yığıldığı için I daha büyük çıkar."
    }
  ]
};
