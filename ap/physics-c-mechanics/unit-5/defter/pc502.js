/* Kitpath not defteri · pc502 · 5.3 Tork. Kaynak: kaynak/ced-physc.md (Unit 5, Topic 5.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc502",
  amac: "Bu konu kuvvetin bir cismi nasıl döndürdüğünü anlatıyor: tork. Torkun kuvvete, kola ve açıya nasıl bağlı olduğunu, yönünü sağ el kuralıyla ve net torku nasıl bulacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Tork nedir?",
      kisa: "Tork kuvvetin dönme etkisidir; kuvvetin r'ye (eksenden uygulama noktasına uzanan konum vektörüne) dik bileşeninden doğar.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🚪",
              terim: "Torque",
              tr: "tork",
              tanim: "Kuvvetin cismi bir eksen etrafında döndürme etkisi. Yalnızca kuvvetin, eksenden uygulama noktasına çizilen konum vektörüne dik bileşeni tork üretir.",
              ornek: "Kapıyı kolundan itmek, menteşenin yanından itmekten çok daha kolaydır."
            },
            {
              ikon: "📏",
              terim: "Lever arm",
              tr: "kuvvet kolu",
              tanim: "Eksenden kuvvetin etki doğrusuna inen dik uzaklık: r⊥ = r sinθ.",
              ornek: "Anahtarı çubuğa dik çekersen kol tüm uzunluktur; açılı çekersen kısalır."
            },
            {
              ikon: "🧭",
              terim: "Force diagram",
              tr: "kuvvet diyagramı",
              tanim: "Serbest cisim diyagramına benzer, ama kuvvetlerin nereye uygulandığını da gösterir.",
              ornek: "Çubukta ağırlık kütle merkezinden, ip gerilmesi çubuğun ucundan çizilir."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "τ = rF sinθ", alt: "θ: r ile F arasındaki açı" },
            "=",
            { t: "r⊥F", alt: "kuvvet kolu × kuvvet" },
            "=",
            { t: "rF⊥", alt: "dik bileşen × r" }
          ],
          aciklama: "Birimi N·m'dir (joule değil). ✍️ Sınavda böyle yaz: *The torque is τ = rF sinθ, where θ is the angle between r and F.*"
        }
      ]
    },
    {
      baslik: "Tork neye bağlı?",
      kisa: "Tork r, F ve sinθ ile orantılıdır; F, r'ye dikken en büyüktür.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Kapı: r = 0,8 m, F = 10 N, τ = 8 sinθ",
          xlabel: "θ (derece)",
          ylabel: "τ (N·m)",
          xmax: 180,
          ymax: 10,
          xticks: [
            { v: 30, label: "30" },
            { v: 60, label: "60" },
            { v: 90, label: "90" },
            { v: 120, label: "120" },
            { v: 150, label: "150" },
            { v: 180, label: "180" }
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
                [0, 0], [5, 0.697], [10, 1.389], [15, 2.071], [20, 2.736], [25, 3.381],
                [30, 4], [35, 4.589], [40, 5.142], [45, 5.657], [50, 6.128], [55, 6.553],
                [60, 6.928], [65, 7.25], [70, 7.518], [75, 7.727], [80, 7.878], [85, 7.97],
                [90, 8], [95, 7.97], [100, 7.878], [105, 7.727], [110, 7.518], [115, 7.25],
                [120, 6.928], [125, 6.553], [130, 6.128], [135, 5.657], [140, 5.142], [145, 4.589],
                [150, 4], [155, 3.381], [160, 2.736], [165, 2.071], [170, 1.389], [175, 0.697],
                [180, 0]
              ],
              renk: 0
            },
            {
              id: "p30",
              tip: "nokta",
              x: 30,
              y: 4,
              renk: 1,
              etiket: "4 N·m",
              kilavuz: true,
              gizli: true
            },
            {
              id: "p90",
              tip: "nokta",
              x: 90,
              y: 8,
              renk: 2,
              etiket: "8 N·m",
              kilavuz: true,
              gizli: true
            },
            { id: "p0", tip: "nokta", x: 0, y: 0, renk: 3, gizli: true },
            { id: "p180", tip: "nokta", x: 180, y: 0, renk: 3, etiket: "0", gizli: true }
          ],
          durumlar: [
            {
              metin: "Kapıyı menteşeden 0,8 m uzaktan 10 N ile itiyorsun. θ, r ile F arasındaki açı: τ = rF sinθ = 8 sinθ N·m."
            },
            {
              metin: "θ = 30°: sin30° = 0,5, τ = 4 N·m.",
              goster: [
                "p30"
              ]
            },
            {
              metin: "θ = 90° (kuvvet kapıya dik): sin90° = 1, τ = 8 N·m. ==En büyük tork==.",
              goster: [
                "p90"
              ]
            },
            {
              metin: "θ = 0° ya da 180° (etki doğrusu menteşeden geçiyor): τ = 0.",
              goster: [
                "p0",
                "p180"
              ]
            },
            {
              metin: "Bağımlılık: F ya da r iki katına çıkarsa τ iki katına çıkar. Ama θ 30°'den 60°'ye çıkınca τ yalnızca ≈ 1,7 kat artar (sin60° / sin30° = 0,87 / 0,5)."
            },
            {
              metin: "✍️ Sınavda böyle yaz: *The torque is greatest when the force is perpendicular to r, because sinθ = 1.*"
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔄",
            baslik: "Tork yapar",
            maddeler: [
              "F'nin r'ye dik bileşeni var",
              "Etki doğrusu eksenden geçmiyor"
            ]
          },
          sag: {
            ikon: "🛑",
            baslik: "Tork yapmaz",
            maddeler: [
              "Etki doğrusu eksenden geçiyor (r⊥ = 0)",
              "Kuvvet eksenin kendisine uygulanıyor (r = 0)"
            ]
          },
          oyun: [
            {
              metin: "Kapıya kolundan, kapı yüzeyine dik bir itme.",
              cevap: "sol",
              neden: "θ = 90°: kuvvet r'ye dik, tork en büyük."
            },
            {
              metin: "Kapıyı menteşe hattı boyunca (kapı düzleminde, menteşeye doğru) itmek.",
              cevap: "sag",
              neden: "Etki doğrusu menteşeden geçer: r⊥ = 0."
            },
            {
              metin: "Çubuğun ucuna, çubukla 30° yapan bir kuvvet.",
              cevap: "sol",
              neden: "F sin30° dik bileşeni var; tork küçülür ama sıfır olmaz."
            },
            {
              metin: "Dönme ekseninin tam üzerine uygulanan kuvvet.",
              cevap: "sag",
              neden: "r = 0 olduğundan τ = 0."
            }
          ]
        }
      ]
    },
    {
      baslik: "Yön ve net tork",
      kisa: "τ = r × F; yön sağ el kuralıyla bulunur, sınavda ccw ya da cw denir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "τ = r × F", alt: "vektörel çarpım" },
            "→",
            { t: "|τ| = rF sinθ", alt: "büyüklük" }
          ],
          aciklama: "Sağ elin parmaklarını r'den F'ye doğru kıvır: başparmak τ'nun yönüdür. Sayfa düzleminde bu, sayfadan çıkan (ccw) ya da sayfaya giren (cw) olur. Net tork aynı yönlüleri toplar, zıt yönlüleri çıkarır. ✍️ Sınavda böyle yaz: *This force produces a counterclockwise torque about the pivot, so I take it as positive.*"
        },
        {
          tip: "tablo",
          baslik: "Yön örnekleri (eksen orijinde, r eksenden uygulama noktasına)",
          head: [
            "r",
            "F",
            "τ = r × F",
            "Dönme"
          ],
          rows: [
            [
              "+x yönünde",
              "+y yönünde",
              "sayfadan çıkar",
              "ccw"
            ],
            [
              "+x yönünde",
              "−y yönünde",
              "sayfaya girer",
              "cw"
            ],
            [
              "+y yönünde",
              "−x yönünde",
              "sayfadan çıkar",
              "ccw"
            ],
            [
              "+y yönünde",
              "+x yönünde",
              "sayfaya girer",
              "cw"
            ]
          ],
          vurgu: 0,
          not: "Ezberleme: parmaklar r'den F'ye kıvrılırken saat yönünün tersine dönüyorsa ccw. Sınavda yönler yalnızca *clockwise / counterclockwise* ile sorulur."
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: çubuğa üç kuvvet",
      kisa: "Her torku ayrı hesapla, yönüne göre işaretle, sonra topla.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "2,0 m'lik çubuk, sol ucundaki O ekseni etrafında dönebiliyor",
          durum: "Çubuk yatay, ağırlığı ihmal ediliyor. F₁ = 6 N yukarı, sağ uçta (x = 2,0 m). F₂ = 10 N aşağı, x = 0,5 m'de. F₃ = 8 N, x = 1,0 m'de, çubukla 30° yaparak yukarı. O'ya göre net torku bul.",
          adimlar: [
            "F₁ çubuğa dik ve yukarı: ccw. τ₁ = rF sinθ = 2,0 × 6 × 1 = +12 N·m.",
            "F₂ aşağı: cw. τ₂ = 0,5 × 10 × 1 = −5 N·m.",
            "F₃ çubukla 30° yapıyor; dik bileşeni F sin30° = 4 N, yukarı: ccw. τ₃ = 1,0 × 8 × 0,5 = +4 N·m.",
            "Net: Στ = +12 − 5 + 4 = +11 N·m, saat yönünün tersi.",
            "✍️ Sınavda böyle yaz: *Taking counterclockwise as positive, the net torque about O is the sum of the three torques.*"
          ],
          sonuc: "Στ = +12 − 5 + 4 = +11 N·m (ccw)"
        },
        {
          tip: "tuzak",
          baslik: "Kuvvet eksene dik değilse",
          metin: "Yalnızca dik bileşen döndürür. 0,5 m kol, 10 N kuvvet, 30° açıyla: τ = 0,5 × 10 × sin30° = 2,5 N·m.",
          yanlis: "τ = rF = 5 N·m (açı ne olursa olsun).",
          dogru: "τ = rF sinθ = 2,5 N·m; etki doğrusu eksenden geçen kuvvet tork yapmaz."
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
            "*Torque* kuvvetin dönme etkisidir: τ = r × F; büyüklüğü τ = rF sinθ = r⊥F, birimi N·m.",
            "Yalnızca F'nin r'ye dik bileşeni tork üretir; etki doğrusu eksenden geçen kuvvetin torku sıfırdır.",
            "*Lever arm* eksenden etki doğrusuna inen dik uzaklıktır: r⊥ = r sinθ.",
            "Fonksiyonel bağımlılık: F ya da r iki kat → τ iki kat; ama açı için sinθ'ya bak (30° → 60° ≈ 1,7 kat).",
            "Yön sağ el kuralıyla bulunur; sınavda yalnızca saat yönü (cw) ve tersi (ccw) kullanılır.",
            "Net tork: aynı yönlü torkları topla, zıt yönlüleri çıkar; önce pozitif yönü seç.",
            "*Force diagram*'da kuvvetin uygulama noktası önemlidir; ağırlık kütle merkezinden çizilir.",
            "Cevaba her zaman birim (N·m) ve yön (ccw/cw) yaz."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A force of magnitude F applied perpendicular to a wrench at a distance r from a bolt produces a torque τ. The same force is then applied at a distance 2r from the bolt, but at an angle of 30° to the wrench. The torque on the bolt is now",
      opts: [
        "τ/2",
        "τ",
        "√3 τ",
        "2τ"
      ],
      a: 1,
      why: "τ' = (2r)F sin30° = 2rF × 0,5 = rF = τ. En çekici yanlış şık 2τ: kolu iki katına çıkarıp açının etkisini unutmak."
    },
    {
      q: "A force acts at a distance r from a pivot on a meter stick. Each row of the table lists a different force F, distance r, and the angle θ between r and F. Which row gives the greatest torque about the pivot?",
      fig: {
        type: "table",
        caption: "Four forces on a meter stick",
        head: [
          "",
          "F (N)",
          "r (m)",
          "θ"
        ],
        rows: [
          [
            "A",
            "4",
            "0.5",
            "90°"
          ],
          [
            "B",
            "8",
            "0.4",
            "30°"
          ],
          [
            "C",
            "3",
            "0.8",
            "90°"
          ],
          [
            "D",
            "5",
            "0.6",
            "60°"
          ]
        ]
      },
      opts: [
        "A",
        "B",
        "C",
        "D"
      ],
      a: 3,
      why: "τ = rF sinθ: A 2,0; B 1,6; C 2,4; D ≈ 2,6 N·m. En çekici yanlış şık B: yalnızca rF çarpımına bakınca (3,2) en büyük görünür, ama 30° açı torku yarıya indirir."
    },
    {
      q: "A force of 5 N in the +y direction is applied at the point (2 m, 0) relative to a pivot at the origin. What is the torque about the pivot?",
      opts: [
        "10 N·m, out of the page (counterclockwise)",
        "10 N·m, into the page (clockwise)",
        "2.5 N·m, out of the page (counterclockwise)",
        "7 N·m, out of the page (counterclockwise)"
      ],
      a: 0,
      why: "r = +x yönünde, F = +y yönünde; r × F sayfadan çıkar (ccw) ve büyüklüğü 2 × 5 × sin90° = 10 N·m. B en çekici yanlış şık: büyüklük doğru ama yön ters."
    },
    {
      q: "Three forces act on a rod that can rotate about the pivot P. The table gives the magnitude, the distance from P to the point of application, and the direction of each force. What is the net torque about P?",
      fig: {
        type: "table",
        caption: "Forces on a rod pivoted at P",
        head: [
          "Force",
          "Magnitude (N)",
          "Distance from P (m)",
          "Direction"
        ],
        rows: [
          [
            "F₁",
            "10",
            "0.5",
            "perpendicular to rod, counterclockwise"
          ],
          [
            "F₂",
            "4",
            "2.0",
            "perpendicular to rod, clockwise"
          ],
          [
            "F₃",
            "6",
            "1.0",
            "along the rod, toward P"
          ]
        ]
      },
      opts: [
        "3 N·m counterclockwise",
        "13 N·m clockwise",
        "3 N·m clockwise",
        "0"
      ],
      a: 2,
      why: "τ₁ = +5, τ₂ = −8 N·m; F₃ çubuk boyunca olduğundan etki doğrusu P'den geçer ve tork yapmaz. Net = −3 N·m, yani 3 N·m saat yönünde. A en çekici yanlış şık: işareti ters almak."
    },
    {
      q: "Which of the following statements about torque is correct?",
      opts: [
        "Torque is measured in joules.",
        "A force whose line of action passes through the axis exerts zero torque about that axis.",
        "Only the component of the force parallel to r produces torque.",
        "Torque depends only on the magnitude of the force."
      ],
      a: 1,
      why: "Etki doğrusu eksenden geçerse kuvvet kolu sıfırdır, tork sıfırdır. C en çekici yanlış şık: tork üreten bileşen r'ye dik olandır, paralel bileşen değil."
    }
  ]
};
