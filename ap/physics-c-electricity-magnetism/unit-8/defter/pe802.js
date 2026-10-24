/* Kitpath not defteri · pe802 · 8.3 Elektrik Alanı
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe802",
  amac: "Bu konu elektrik alanını anlatıyor: bir yükün çevresindeki her noktada birim yük başına etkiyen kuvvet. Alanı hesaplamayı, alan çizgilerini ve vektörel toplamı, ayrıca iletken ile yalıtkanın içinde alanın nasıl farklı olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "Alan: birim yük başına kuvvet",
      kisa: "E = F/q; alan kaynak yüke aittir, test yükü onu yalnızca yoklar.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌐",
              terim: "Electric field",
              tr: "elektrik alanı",
              tanim: "Uzayın her noktasında, oraya konan pozitif test yüküne birim yük başına etkiyen kuvvet: E = F/q. Vektördür, birimi N/C.",
              ornek: "400 N/C, oradaki +1 C'a 400 N etki eder demektir."
            },
            {
              ikon: "🧲",
              terim: "Test charge",
              tr: "test yükü",
              tanim: "Alanı yoklayan, kaynağı bozmayacak kadar küçük yük.",
              ornek: "Çok küçük bir pozitif top."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "E = F/q", alt: "tanım" },
            "→",
            { t: "E = kQ/r²", alt: "nokta yük" },
            "→",
            { t: "F = qE", alt: "yüke etkiyen kuvvet" }
          ],
          aciklama: "Pozitif q için F, E yönünde; negatif q için E'nin tersinedir. E = kQ/r² formül tablosunda yoktur, Coulomb yasasından çıkar: F = kQq/r² ifadesini q'ya bölersin."
        },
        {
          tip: "ornek",
          baslik: "Q = +4,0 nC, r = 0,30 m",
          durum: "Alanı bul, sonra oraya konan −2,0 nC'luk yüke etkiyen kuvveti bul.",
          adimlar: [
            "E = kQ/r² = (9,0×10⁹)(4,0×10⁻⁹) / 0,30² = 36 / 0,090 = 400 N/C, Q'dan uzağa (Q pozitif).",
            "|F| = |q|E = (2,0×10⁻⁹)(400) = 8,0×10⁻⁷ N.",
            "q negatif: kuvvet alanın tersine, yani Q'ya doğru (zıt yükler çeker)."
          ],
          sonuc: "E = 400 N/C (Q'dan uzağa); −2,0 nC'a 8,0×10⁻⁷ N, Q'ya doğru"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The field points away from a positive charge and toward a negative charge.*"
            },
            {
              ikon: "✍️",
              baslik: "Kuvvet yönü",
              metin: "*The force on a negative charge is opposite to the direction of the field.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Alan çizgileri",
      kisa: "Çizgiler + yükten çıkar, − yüke girer; sıklık alanın büyüklüğünü gösterir.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "➕",
              baslik: "Başlangıç ve bitiş",
              metin: "Alan çizgileri + yükten çıkar, − yüke girer."
            },
            {
              ikon: "🔆",
              baslik: "Sıklık ve yön",
              metin: "Çizgiler sıksa alan büyüktür; çizginin teğeti alanın yönüdür. Çizgiler kesişmez."
            },
            {
              ikon: "🧭",
              baslik: "Alan haritası",
              metin: "*Vector field map*: her noktaya o noktadaki alanı gösteren bir ok çizilir; ok boyu büyüklüğü verir."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Alan çizgisi, yükün yolu değildir",
          metin: "Alan çizgisi o noktadaki kuvvetin yönünü gösterir; ilk hızı olan bir yük çizgiyi izlemek zorunda değildir. Çizgi çizilmeyen yerde de alan vardır.",
          yanlis: "Alan yalnızca çizgilerin üstündedir; yük çizgiyi izler.",
          dogru: "Alan her noktada vardır. Sınavda böyle yaz: *The field line through a point is tangent to the field there; it does not have to be the path of a charged particle.*"
        }
      ]
    },
    {
      baslik: "Birden çok yük: süperpozisyon",
      kisa: "Net alan, her yükün alanının vektör toplamıdır; dengede alan sıfır olabilir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Eksen üzerinde iki pozitif yük (ok boyları alanla orantılı)",
          xlabel: "x (m)",
          ylabel: "",
          xmax: 10.5,
          ymax: 7.5,
          xticks: [
            { v: 1, label: "0" },
            { v: 3.8000000000000003, label: "0,2" },
            { v: 5.2, label: "0,3" },
            { v: 9.4, label: "0,6" }
          ],
          yticks: [],
          ogeler: [
            { id: "ax", tip: "cizgi", from: [0.4, 3], to: [10.2, 3], kesik: true, renk: 3 },
            { id: "q1", tip: "nokta", x: 1, y: 3, renk: 0 },
            { id: "q2", tip: "nokta", x: 9.4, y: 3, renk: 1 },
            { id: "t1", tip: "yazi", x: 1.3, y: 2.2, metin: "+1,0 nC" },
            { id: "t2", tip: "yazi", x: 9, y: 2.2, metin: "+4,0 nC" },
            { id: "P", tip: "nokta", x: 5.2, y: 3, renk: 3, etiket: "P", gizli: true },
            {
              id: "pg",
              tip: "cizgi",
              from: [5.2, 3],
              to: [5.2, 6.1],
              kesik: true,
              renk: 3,
              gizli: true
            },
            { id: "e1", tip: "ok", from: [5.2, 4.3], to: [6, 4.3], renk: 0, gizli: true },
            {
              id: "l1",
              tip: "yazi",
              x: 6.2,
              y: 4.3,
              metin: "E₁ = 100 N/C",
              hiza: "start",
              gizli: true
            },
            { id: "e2", tip: "ok", from: [5.2, 5.2], to: [2, 5.2], renk: 1, gizli: true },
            { id: "l2", tip: "yazi", x: 3.6, y: 5.65, metin: "E₂ = 400 N/C", gizli: true },
            {
              id: "en",
              tip: "ok",
              from: [5.2, 6.1],
              to: [2.8000000000000003, 6.1],
              renk: 2,
              gizli: true
            },
            { id: "ln", tip: "yazi", x: 4, y: 6.6, metin: "E_net = 300 N/C", gizli: true },
            {
              id: "z",
              tip: "nokta",
              x: 3.8000000000000003,
              y: 3,
              renk: 2,
              etiket: "E = 0",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "+1,0 nC, x = 0'da; +4,0 nC, x = 0,60 m'de. İkisi de pozitif." },
            {
              metin: "Orta nokta P (x = 0,30 m). q₁'in alanı q₁'den uzağa: E₁ = kq₁/r² = 100 N/C, +x yönünde.",
              goster: ["P", "pg", "e1", "l1"]
            },
            {
              metin: "q₂'nin alanı q₂'den uzağa: E₂ = kq₂/r² = 400 N/C, −x yönünde.",
              goster: ["e2", "l2"]
            },
            {
              metin: "Vektörel toplam: E_net = 100 − 400 = −300 N/C, yani 300 N/C ve −x yönünde.",
              goster: ["en", "ln"]
            },
            {
              metin: "x = 0,20 m'de E₁ = E₂ = 225 N/C ve yönleri zıt: ==E = 0==.",
              gizle: ["pg", "e1", "l1", "e2", "l2", "en", "ln", "P"],
              goster: ["z"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Alanın sıfır olduğu nokta",
          durum: "q₁ = +1,0 nC (x = 0) ve q₂ = +4,0 nC (x = 0,60 m). Arasında E = 0 olan x'i bul.",
          adimlar: [
            "İkisi pozitif: yalnız yükler arasında alanlar zıt yönde olur; dışarıda toplanırlar, sıfır olamaz.",
            "E₁ = E₂ → kq₁/x² = kq₂/(0,60 − x)² → (0,60 − x)/x = √(q₂/q₁) = 2.",
            "0,60 − x = 2x → x = 0,20 m.",
            "Kontrol: E₁ = 9,0×10⁹·1,0×10⁻⁹/0,20² = 225 N/C, E₂ = 9,0×10⁹·4,0×10⁻⁹/0,40² = 225 N/C ✓"
          ],
          sonuc: "x = 0,20 m (küçük yüke yakın, 0,40 m uzaklıkta büyük yük)"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The net field is the vector sum of the fields of the individual charges.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "İletken ve yalıtkanda alan",
      kisa: "Dengedeki iletkenin içinde E = 0; yalıtkanda yük hacme yayılırsa içeride E ≠ 0.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "E(r): Q = +4,0 nC, R = 10 cm",
          xlabel: "r",
          ylabel: "E (kN/C)",
          xmax: 4,
          ymax: 4,
          xticks: [
            { v: 1, label: "R" },
            { v: 2, label: "2R" },
            { v: 3, label: "3R" },
            { v: 4, label: "4R" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          ogeler: [
            {
              id: "out",
              tip: "egri",
              noktalar: [
                [1, 3.6], [1.125, 2.844], [1.25, 2.304], [1.375, 1.904], [1.5, 1.6], [1.625, 1.363],
                [1.75, 1.176], [1.875, 1.024], [2, 0.9], [2.125, 0.797], [2.25, 0.711], [2.375, 0.638],
                [2.5, 0.576], [2.625, 0.522], [2.75, 0.476], [2.875, 0.436], [3, 0.4], [3.125, 0.369],
                [3.25, 0.341], [3.375, 0.316], [3.5, 0.294], [3.625, 0.274], [3.75, 0.256], [3.875, 0.24],
                [4, 0.225]
              ],
              renk: 3,
              etiket: "kQ/r²",
              gizli: true
            },
            { id: "pt", tip: "nokta", x: 1, y: 3.6, renk: 3, etiket: "3,6", gizli: true },
            {
              id: "ci",
              tip: "cizgi",
              from: [0, 0],
              to: [1, 0],
              renk: 0,
              etiket: "iletken",
              gizli: true
            },
            {
              id: "cj",
              tip: "cizgi",
              from: [1, 0],
              to: [1, 3.6],
              renk: 0,
              kesik: true,
              gizli: true
            },
            {
              id: "ins",
              tip: "cizgi",
              from: [0, 0],
              to: [1, 3.6],
              renk: 2,
              etiket: "yalıtkan",
              gizli: true
            },
            { id: "ph", tip: "nokta", x: 0.5, y: 1.8, renk: 2, etiket: "1,8", gizli: true }
          ],
          durumlar: [
            {
              metin: "Aynı yük, aynı yarıçap. Dışarıda (r ≥ R) küresel simetrik yükün alanı, merkezdeki nokta yükünkiyle aynıdır: kQ/r².",
              goster: ["out", "pt"]
            },
            {
              metin: "İletken küre: fazla yük yüzeyde, içeride ==E = 0==; yüzeyde alan yüzeye dik.",
              goster: ["ci", "cj"]
            },
            {
              metin: "Aynı yük yalıtkan kürenin hacmine düzgün yayılırsa içeride E = kQr/R³: merkezden doğrusal artar.",
              goster: ["ins"]
            },
            {
              metin: "r = R/2'de yalıtkanda E = 1,8 kN/C, iletkende 0. Fark yalnız içeride; dışarıda ikisi aynı.",
              goster: ["ph"]
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔩",
            baslik: "İletken (denge)",
            maddeler: ["Fazla yük yalnız yüzeyde", "İçeride E = 0", "Yüzeyde E yüzeye dik"]
          },
          sag: {
            ikon: "🧊",
            baslik: "Yalıtkan",
            maddeler: [
              "Fazla yük hacimde de olabilir",
              "İçeride E ≠ 0 olabilir",
              "Yük taşıyıcılar zor hareket eder"
            ]
          },
          oyun: [
            {
              metin: "Yüklü metal topun içindeki bir noktada E.",
              cevap: "sol",
              neden: "E = 0: serbest yükler içeride alan kalmayana dek kayar."
            },
            {
              metin: "Düzgün yüklü plastik kürenin içinde, merkezden R/2 uzakta E.",
              cevap: "sag",
              neden: "E = kQr/R³ ≠ 0: yük hacimde sabit durur."
            },
            {
              metin: "Yüzeyin hemen dışında alan yüzeye diktir.",
              cevap: "sol",
              neden: "Yüzeye teğet bileşen olsaydı yükler yüzeyde kayardı."
            },
            {
              metin: "Fazla yük malzemenin hacmine yayılabilir.",
              cevap: "sag",
              neden: "Yalıtkanda yük yerinden oynamaz, hacimde de durabilir."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "\"İçeride E = 0\" her cisim için doğru değil",
          metin: "E = 0 yalnız elektrostatik dengedeki iletkenin içi için doğrudur. Yüklü yalıtkan kürenin içinde alan genelde sıfır değildir.",
          yanlis: "Yüklü bir kürenin içinde E her zaman sıfırdır.",
          dogru: "Önce iletken mi yalıtkan mı diye sor. Sınavda böyle yaz: *In electrostatic equilibrium the field inside a conductor is zero, so the excess charge resides on the surface.*"
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
            "*Electric field* E = F/q (N/C), vektör; pozitif yüke etkiyen kuvvetin yönündedir.",
            "Nokta yük: E = kQ/r², + yükten uzağa, − yüke doğru; F = qE (negatif q için ters yön).",
            "Net alan, tek tek alanların vektör toplamıdır (örnek: 100 − 400 = −300 N/C).",
            "İki pozitif yük arasında alanın sıfır olduğu nokta yük oranının karekökünden bulunur (x = 0,20 m).",
            "Alan çizgileri + yükten çıkar, − yüke girer; sıklık büyüklüğü gösterir; yük yolu değildir.",
            "Dengedeki iletkende fazla yük yüzeydedir, içeride E = 0, yüzeyde E yüzeye diktir.",
            "Küresel simetrik yükün dışındaki alan, merkezdeki nokta yükünkiyle aynıdır.",
            "Yalıtkanda yük hacme yayılabilir ve içeride E ≠ 0 olabilir (düzgün küre: kQr/R³)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "An electron is placed in a region of uniform electric field of magnitude 2.0×10³ N/C directed in the +x direction. What are the magnitude and direction of the electron's acceleration? (Electron mass 9.11×10⁻³¹ kg; charge −1.60×10⁻¹⁹ C.)",
      opts: [
        "3.5×10¹⁴ m/s² in the +x direction",
        "3.2×10⁻¹⁶ m/s² in the −x direction",
        "2.0×10³ m/s² in the −x direction",
        "3.5×10¹⁴ m/s² in the −x direction"
      ],
      a: 3,
      why: "F = |q|E = (1,60×10⁻¹⁹)(2,0×10³) = 3,2×10⁻¹⁶ N; a = F/m = 3,2×10⁻¹⁶ / 9,11×10⁻³¹ ≈ 3,5×10¹⁴ m/s². Elektron negatif olduğu için kuvvet alanın tersine, −x yönünde. 3,2×10⁻¹⁶ kütleye bölmeyi unutmak; +x yönü ise işareti atlamak."
    },
    {
      q: "Two point charges lie on the x-axis as shown in the table. At which position between the charges is the net electric field equal to zero?",
      opts: ["x = 0.12 m", "x = 0.20 m", "x = 0.30 m", "x = 0.40 m"],
      a: 1,
      why: "Alanların büyüklüğü eşit olmalı: kq₁/x² = kq₂/(0,60 − x)² → (0,60 − x) = 2x → x = 0,20 m. Orta nokta 0,30 m'de E₁ = 100, E₂ = 400 N/C: dengelenmez. 0,12 m, 0,60 m'yi yük toplamına (1:5) bölmekten; 0,40 m ise oranı ters almaktan çıkar.",
      fig: {
        type: "table",
        head: ["Charge", "Position x (m)", "Value (nC)"],
        rows: [
          ["q₁", "0", "+1.0"],
          ["q₂", "0.60", "+4.0"]
        ],
        caption: "Two charges on the x-axis"
      }
    },
    {
      q: "A point charge +Q is at the center of a neutral hollow conducting spherical shell of inner radius a and outer radius b. What is the magnitude of the electric field at a distance r > b from the center?",
      opts: ["0", "kQ/r²", "2kQ/r²", "kQ/b²"],
      a: 1,
      why: "İç yüzeyde −Q, dış yüzeyde +Q toplanır; kabuk dışında toplam yük +Q ve küresel simetri var, dolayısıyla alan merkezdeki +Q nokta yükününkiyle aynı: kQ/r². Alan sıfır olan yer yalnız metalin içidir (a < r < b). kQ/b² sabit bir değer, r'ye bağlılığı yok."
    },
    {
      q: "The table shows the magnitude of the electric field at several distances r from the center of a charged sphere of radius 10 cm. Which of the following best describes the sphere?",
      opts: [
        "A uniformly charged insulating sphere",
        "A conducting sphere carrying the same charge",
        "A point charge located at the center",
        "A neutral sphere"
      ],
      a: 0,
      why: "r = 5 cm (içeride) alan sıfır değil ve r ile doğrusal artıyor: 1800/5 = 3600/10 → E ∝ r. Dışarıda 1/r²: 3600 → 900 (r iki katı, E dörtte biri). İletkende içeride E = 0 olurdu; nokta yükte E(5 cm) = 14 400 N/C olurdu.",
      fig: {
        type: "table",
        head: ["r (cm)", "E (N/C)"],
        rows: [
          ["5", "1800"],
          ["10", "3600"],
          ["20", "900"]
        ],
        caption: "Field of a charged sphere"
      }
    },
    {
      q: "At point P, one charge produces an electric field of 300 N/C in the +x direction and a second charge produces a field of 400 N/C in the +y direction. What is the net electric field at P?",
      opts: [
        "700 N/C at 45° above the +x axis",
        "500 N/C at 37° above the +x axis",
        "500 N/C at 53° above the +x axis",
        "500 N/C at 45° above the +x axis"
      ],
      a: 2,
      why: "Alanlar vektör olarak toplanır: |E| = √(300² + 400²) = 500 N/C, tan θ = 400/300 → θ ≈ 53° (+x'ten yukarı). 700 büyüklükleri toplamak; 37° açıyı +y'den ölçmek (ya da oranı ters almak)."
    }
  ]
};
