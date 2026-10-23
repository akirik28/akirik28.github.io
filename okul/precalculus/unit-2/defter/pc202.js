/* Kitpath not defteri · pc202 · 2.2 Kökler ve Katsayılar
   Kaynak: öğretmenin ders sunumu (Unit#2_1 Quadratic Equations, Vieta's Theorem bölümü) + Review for Exam#2; ders notuyla aynı terim ve gösterim (kökler r₁, r₂). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc202",
  amac: "Bu konu ikinci dereceden denklemde kökler ile katsayılar arasındaki bağı anlatıyor. Kök toplamını ve çarpımını (Vieta), köklerden denklem yazmayı, kökleri bulmadan ifade hesaplamayı ve köklerin işaretini öğreneceksin.",
  bolumler: [
    {
      baslik: "Kök toplamı ve çarpımı (Vieta)",
      kisa: "Köklerin toplamı −b/a, çarpımı c/a'dır; kökleri bulmadan hesaplanır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "r₁ + r₂ = −b/a", alt: "kök toplamı (S)" },
            "ve",
            { t: "r₁ · r₂ = c/a", alt: "kök çarpımı (P)" }
          ],
          aciklama: "ax² + bx + c = 0 denklemi için. Sınavda böyle yaz: *By Vieta's theorem, the sum of the roots is −b/a and the product is c/a.*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📐",
              terim: "Vieta's theorem",
              tr: "Vieta teoremi (formülleri)",
              tanim: "Kökler ile katsayılar arasındaki bağıntılar: toplam −b/a, çarpım c/a. Kökleri hesaplamadan toplam ve çarpım bulunur.",
              ornek: "x² − 5x + 6 = 0 için toplam 5, çarpım 6."
            },
            {
              ikon: "🔁",
              terim: "Symmetric expression",
              tr: "simetrik ifade (ek bilgi)",
              tanim: "r₁ ile r₂'nin yeri değişince değişmeyen ifade; S ve P ile yazılabilir.",
              ornek: "r₁² + r₂², 1/r₁ + 1/r₂."
            },
            {
              ikon: "🪞",
              terim: "Conjugate roots",
              tr: "eşlenik kökler (ek bilgi)",
              tanim: "Katsayılar rasyonelse a + √b kök olduğunda a − √b de köktür.",
              ornek: "2 + √3 kök ise 2 − √3 de kök."
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Neden böyle?",
          adimlar: [
            { baslik: "Kökler", metin: "r₁ = (−b + √Δ)/2a ve r₂ = (−b − √Δ)/2a." },
            { baslik: "Toplam", metin: "√Δ'lar birbirini götürür: (−b − b)/2a = −b/a." },
            { baslik: "Çarpım", metin: "(b² − Δ)/4a² = (b² − b² + 4ac)/4a² = c/a." }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kökleri bulmadan toplam ve çarpım",
          durum: "2x² − 6x + 4 = 0 ve x² − 7x + 12 = 0 denklemleri.",
          adimlar: [
            "2x² − 6x + 4: a = 2, b = −6, c = 4. S = −b/a = 6/2 = 3, P = c/a = 4/2 = 2.",
            "Kontrol: kökler 1 ve 2; 1 + 2 = 3 ✓, 1·2 = 2 ✓.",
            "x² − 7x + 12: S = 7, P = 12. Toplamı 7, çarpımı 12 olan iki sayı: 3 ve 4.",
            "Kontrol: (x − 3)(x − 4) = x² − 7x + 12 ✓."
          ],
          sonuc: "S ve P'yi okumak için kök bulmak gerekmez. Kökler gerçek olmasa da (Δ < 0) formüller karmaşık kökler için geçerlidir."
        }
      ]
    },
    {
      baslik: "Kökleri bilinen denklemi yazmak",
      kisa: "Kökleri r₁ ve r₂ olan denklem: x² − (r₁ + r₂)x + r₁r₂ = 0.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "x² − S·x + P = 0", alt: "S = r₁ + r₂, P = r₁ · r₂" }
          ],
          aciklama: "İstersen denklemi bir sayıyla çarpıp kesirlerden kurtul. Sınavda böyle yaz: *The equation with roots r₁ and r₂ is x² − (r₁ + r₂)x + r₁r₂ = 0.*"
        },
        {
          tip: "ornek",
          baslik: "Üç denklem yaz",
          durum: "Kökleri (a) 3 ve −5, (b) 2 ± √3, (c) 1/2 ve 2/3 olan denklemler.",
          adimlar: [
            "(a) S = 3 + (−5) = −2, P = 3·(−5) = −15 → x² + 2x − 15 = 0. Kontrol: (x − 3)(x + 5) ✓.",
            "(b) S = (2 + √3) + (2 − √3) = 4, P = 2² − (√3)² = 4 − 3 = 1 → x² − 4x + 1 = 0.",
            "(c) S = 1/2 + 2/3 = 7/6, P = 1/2 · 2/3 = 1/3 → x² − (7/6)x + 1/3 = 0.",
            "6 ile çarp: 6x² − 7x + 2 = 0. Kontrol: (2x − 1)(3x − 2) = 6x² − 7x + 2 ✓."
          ],
          sonuc: "(a) x² + 2x − 15 = 0, (b) x² − 4x + 1 = 0, (c) 6x² − 7x + 2 = 0."
        }
      ]
    },
    {
      baslik: "Kökleri bulmadan ifade hesaplamak",
      kisa: "Simetrik ifadeler S = r₁ + r₂ ve P = r₁r₂ ile yazılır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Sık çıkan ifadeler",
          head: ["İfade", "S ve P ile", "Nereden?"],
          rows: [
            [
              "r₁² + r₂²",
              "S² − 2P",
              "(r₁ + r₂)² = r₁² + 2r₁r₂ + r₂²"
            ],
            ["1/r₁ + 1/r₂", "S / P", "(r₁ + r₂)/(r₁r₂)"],
            ["(r₁ − r₂)²", "S² − 4P", "r₁² + r₂² − 2P"],
            ["r₁³ + r₂³", "S³ − 3PS", "(r₁ + r₂)³ açılımı"],
            ["|r₁ − r₂|", "√(S² − 4P) = √Δ / |a|", "yukarıdakinin karekökü"]
          ],
          not: "Sınavda böyle yaz: *Express the expression in terms of the sum and the product of the roots.*"
        },
        {
          tip: "ornek",
          baslik: "x² − 5x + 3 = 0",
          durum: "Kökleri r₁, r₂ olsun. Dört ifadeyi hesapla.",
          adimlar: [
            "S = 5, P = 3.",
            "r₁² + r₂² = S² − 2P = 25 − 6 = 19.",
            "1/r₁ + 1/r₂ = S/P = 5/3.",
            "(r₁ − r₂)² = S² − 4P = 25 − 12 = 13 (Δ de 13: Δ/a² ile aynı).",
            "r₁³ + r₂³ = S³ − 3PS = 125 − 3·3·5 = 125 − 45 = 80."
          ],
          sonuc: "19, 5/3, 13 ve 80."
        }
      ]
    },
    {
      baslik: "Köklerin işareti ve özel durumlar",
      kisa: "S, P ve Δ köklerin işaretini kökleri bulmadan söyler.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Koşul → sonuç (derste \"iki negatif kök\", \"zıt işaretli kök\" sorularında kullanılır)",
          head: ["Koşul", "Sonuç"],
          rows: [
            [
              "P < 0",
              "kökler zıt işaretli (Δ kendiliğinden > 0)"
            ],
            ["P > 0, S > 0, Δ ≥ 0", "iki kök de pozitif"],
            ["P > 0, S < 0, Δ ≥ 0", "iki kök de negatif"],
            ["P < 0, S < 0", "zıt işaretli; negatif kökün mutlak değeri büyük (r₁ < 0 < r₂ ve |r₁| > |r₂|)"],
            [
              "S = 0 (b = 0), Δ > 0",
              "kökler birbirinin toplama tersi: r₁ = −r₂"
            ],
            [
              "P = 1 (c = a)",
              "kökler birbirinin çarpma tersi: r₁ = 1/r₂"
            ],
            ["c = 0", "bir kök 0"],
            ["a + b + c = 0", "bir kök 1, öbürü c/a"],
            ["a − b + c = 0", "bir kök −1, öbürü −c/a"]
          ]
        },
        {
          tip: "ornek",
          baslik: "İki pozitif kök ve kestirme",
          durum: "x² − 6x + k = 0 iki farklı pozitif köke sahip. k hangi aralıkta? Ayrıca 3x² − 5x + 2 = 0 ve 2x² + 3x + 1 = 0'ı kestirmeyle çöz.",
          adimlar: [
            "Δ = 36 − 4k > 0 → k < 9.",
            "P = k > 0 ve S = 6 > 0: kökler aynı işaretli ve pozitif. Aralık 0 < k < 9.",
            "3x² − 5x + 2: a + b + c = 3 − 5 + 2 = 0 → x = 1; öbür kök c/a = 2/3.",
            "2x² + 3x + 1: a − b + c = 2 − 3 + 1 = 0 → x = −1; öbür kök −c/a = −1/2.",
            "Kontrol: (x − 1)(3x − 2) = 3x² − 5x + 2 ✓; (x + 1)(2x + 1) = 2x² + 3x + 1 ✓."
          ],
          sonuc: "0 < k < 9; {1, 2/3} ve {−1, −1/2}. Sınavda böyle yaz: *Since P < 0, the roots have opposite signs.*"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "↔️",
            baslik: "Zıt işaretli kökler",
            maddeler: ["P = c/a < 0", "Bir kök pozitif, biri negatif"]
          },
          sag: {
            ikon: "➡️",
            baslik: "Aynı işaretli kökler",
            maddeler: ["P = c/a > 0", "S ile işaret belli olur"]
          },
          oyun: [
            { metin: "x² + x − 6 = 0", cevap: "sol", neden: "P = −6 < 0 (kökler 2 ve −3)." },
            {
              metin: "x² − 5x + 4 = 0",
              cevap: "sag",
              neden: "P = 4 > 0 ve S = 5 > 0: ikisi de pozitif (1 ve 4)."
            },
            { metin: "2x² − 3x − 2 = 0", cevap: "sol", neden: "P = −1 < 0 (kökler 2 ve −1/2)." },
            {
              metin: "x² + 4x + 3 = 0",
              cevap: "sag",
              neden: "P = 3 > 0 ve S = −4 < 0: ikisi de negatif (−1 ve −3)."
            }
          ]
        }
      ]
    },
    {
      baslik: "Parametreli problemler",
      kisa: "Verilen bilgiyi S ve P'ye çevir, sonra çöz; sonunda Δ'yı kontrol et.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Kök ilişkileri",
          durum: "(a) x² − 7x + k = 0'ın kökleri farkı 3. (b) x² − 9x + k = 0'ın bir kökü diğerinin 2 katı. k?",
          adimlar: [
            "(a) r₁ + r₂ = 7 ve r₁ − r₂ = 3 → toplayınca 2r₁ = 10, r₁ = 5, r₂ = 2.",
            "k = P = 5·2 = 10. Kontrol: Δ = 49 − 40 = 9 = 3² ✓.",
            "(b) Kökler r ve 2r: toplam 3r = 9 → r = 3, kökler 3 ve 6.",
            "k = P = 3·6 = 18."
          ],
          sonuc: "(a) k = 10, (b) k = 18."
        },
        {
          tip: "ornek",
          baslik: "Bilinen kök ve kök karelerinin toplamı",
          durum: "(a) x = 2, x² + kx − 10 = 0'ın kökü. (b) x² − mx + 2 = 0'da r₁² + r₂² = 5. k ve m?",
          adimlar: [
            "(a) x = 2'yi yerine koy: 4 + 2k − 10 = 0 → k = 3.",
            "Diğer kök: P = −10 ise r₂ = −10/2 = −5. Kontrol: S = 2 + (−5) = −3 = −k ✓.",
            "(b) S = m, P = 2. r₁² + r₂² = S² − 2P = m² − 4 = 5 → m² = 9 → m = ±3.",
            "Kontrol: Δ = m² − 8 = 1 > 0, kökler gerçek ✓."
          ],
          sonuc: "(a) k = 3 (diğer kök −5), (b) m = ±3."
        },
        {
          tip: "tuzak",
          metin: "S ve P'den bulduğun parametre, kökleri gerçek yapmayabilir.",
          yanlis: "x² − mx + 9 = 0'da r₁² + r₂² = 2 ise m² − 18 = 2, yani m = ±2√5.",
          dogru: "Δ = m² − 36 = 20 − 36 < 0: gerçek kök yok, dolayısıyla gerçek köklerle çözüm yok. Sınavda böyle yaz: *Check that Δ ≥ 0 so that the roots are real.*"
        }
      ]
    },
    {
      baslik: "Kökleri değişmiş yeni denklem",
      kisa: "Yeni köklerin toplamını ve çarpımını eski S ve P'den hesapla.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Dönüşüm kuralları",
          head: ["Yeni kökler", "Yeni toplam", "Yeni çarpım"],
          rows: [
            ["r₁ + k, r₂ + k", "S + 2k", "P + kS + k²"],
            ["k·r₁, k·r₂", "k·S", "k²·P"],
            ["1/r₁, 1/r₂", "S / P", "1 / P"],
            ["r₁², r₂²", "S² − 2P", "P²"],
            ["p·r₁ + q, p·r₂ + q", "pS + 2q", "p²P + pqS + q²"]
          ]
        },
        {
          tip: "ornek",
          baslik: "x² − 3x + 1 = 0'ın kökleri α ve β",
          durum: "S = 3, P = 1. Kökleri (a) α + 1, β + 1 (b) 1/α, 1/β (c) α², β² (d) 2α, 2β olan denklemleri yaz.",
          adimlar: [
            "(a) S' = 3 + 2 = 5, P' = 1 + 1·3 + 1 = 5 → x² − 5x + 5 = 0.",
            "(b) S' = S/P = 3, P' = 1/P = 1 → x² − 3x + 1 = 0 (denklem aynı kalıyor).",
            "(c) S' = S² − 2P = 9 − 2 = 7, P' = P² = 1 → x² − 7x + 1 = 0.",
            "(d) S' = 2·3 = 6, P' = 4·1 = 4 → x² − 6x + 4 = 0.",
            "Kontrol (a): α = (3 + √5)/2 → α + 1 = (5 + √5)/2, β + 1 = (5 − √5)/2; toplam 5, çarpım (25 − 5)/4 = 5 ✓.",
            "(e) Ders tarzı: x² − x − 3 = 0'ın kökleri r₁, r₂ ise kökleri 2r₁ + 1 ve 2r₂ + 1 olan denklem: S = 1, P = −3 → S' = 2·1 + 2 = 4, P' = 4·(−3) + 2·1 + 1 = −9 → x² − 4x − 9 = 0."
          ],
          sonuc: "x² − 5x + 5 = 0, x² − 3x + 1 = 0, x² − 7x + 1 = 0, x² − 6x + 4 = 0 ve (e) için x² − 4x − 9 = 0."
        }
      ]
    },
    {
      baslik: "Vieta ve parabol: simetri ekseni",
      kisa: "Köklerin ortası parabolün simetri eksenidir: x = −b/2a.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = x² − 6x + 5: kökler ve simetri ekseni",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 11,
          xticks: [
            { v: 2, label: "1" },
            { v: 3, label: "2" },
            { v: 4, label: "3" },
            { v: 5, label: "4" },
            { v: 6, label: "5" },
            { v: 7, label: "6" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" },
            { v: 10, label: "5" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [8, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [1, 0], to: [1, 11], etiket: "y" },
            {
              id: "p",
              tip: "egri",
              noktalar: [
                [1, 10], [1.5, 7.25], [2, 5], [2.5, 3.25], [3, 2], [3.5, 1.25],
                [4, 1], [4.5, 1.25], [5, 2], [5.5, 3.25], [6, 5], [6.5, 7.25],
                [7, 10]
              ],
              renk: 0,
              etiket: "f"
            },
            { id: "r1", tip: "nokta", x: 2, y: 5, etiket: "r₁ = 1", renk: 2, gizli: true },
            { id: "r2", tip: "nokta", x: 6, y: 5, etiket: "r₂ = 5", renk: 2, gizli: true },
            { id: "ax2", tip: "cizgi", from: [4, 0], to: [4, 11], renk: 1, kesik: true, gizli: true },
            { id: "m", tip: "nokta", x: 4, y: 5, etiket: "(3, 0)", renk: 1, gizli: true },
            { id: "t", tip: "nokta", x: 4, y: 1, etiket: "(3, −4)", renk: 3, gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x² − 6x + 5. Katsayılar: a = 1, b = −6, c = 5." },
            { metin: "Kökler r₁ = 1 ve r₂ = 5. Toplam 6 = −b/a ✓, çarpım 5 = c/a ✓.", goster: ["r1", "r2"] },
            {
              metin: "Köklerin ortası (1 + 5)/2 = 3 = S/2. Parabol bu dikey doğruya göre simetrik: x = 3.",
              goster: ["ax2", "m"]
            },
            {
              metin: "Tepe noktası bu doğrunun üzerinde: x = −b/2a = 3, y = f(3) = 9 − 18 + 5 = −4.",
              goster: ["t"]
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "(r₁ + r₂)/2", alt: "köklerin ortası" },
            "=",
            { t: "−b/2a", alt: "simetri ekseni ve tepe noktasının x'i" }
          ],
          aciklama: "Sınavda böyle yaz: *The axis of symmetry passes through the midpoint of the roots.*"
        },
        {
          tip: "ornek",
          baslik: "Köklerden tepe noktası",
          durum: "Kökleri 2 ve 8 olan, başkatsayısı 1 olan parabolün tepe noktası?",
          adimlar: [
            "f(x) = (x − 2)(x − 8) = x² − 10x + 16.",
            "Köklerin ortası (2 + 8)/2 = 5: simetri ekseni x = 5. Aynı sonuç: −b/2a = 10/2 = 5.",
            "f(5) = (5 − 2)(5 − 8) = 3·(−3) = −9."
          ],
          sonuc: "Tepe noktası (5, −9)."
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
            "r₁ + r₂ = −b/a, r₁ · r₂ = c/a; kökleri bulmadan okunur.",
            "Kökleri r₁, r₂ olan denklem: x² − (r₁ + r₂)x + r₁r₂ = 0.",
            "r₁² + r₂² = S² − 2P, 1/r₁ + 1/r₂ = S/P, (r₁ − r₂)² = S² − 4P, r₁³ + r₂³ = S³ − 3PS.",
            "P < 0 zıt işaret; P > 0 ve S > 0 iki pozitif; P > 0 ve S < 0 iki negatif; Δ ≥ 0 koşulunu unutma.",
            "a + b + c = 0 → x = 1 kök; a − b + c = 0 → x = −1 kök.",
            "Parametre problemlerinde bilgiyi S ve P'ye çevir; sonunda Δ ≥ 0 kontrol et.",
            "Yeni kökler için S' ve P'yi eski S ve P'den hesapla.",
            "Köklerin ortası = simetri ekseni = −b/2a. Derste kökler r₁, r₂ diye yazılır."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "If r₁ and r₂ are the roots of 3x² − 12x + 5 = 0, what are r₁ + r₂ and r₁ · r₂?",
      opts: ["4 and 5/3", "−4 and 5/3", "4 and 5", "12 and 5"],
      a: 0,
      why: "S = −b/a = −(−12)/3 = 4 ve P = c/a = 5/3. B seçeneği toplamın işaretini ters alır; C ve D, a = 3'e bölmeyi unutur."
    },
    {
      q: "If r₁ and r₂ are the roots of x² − 4x + 2 = 0, what is r₁² + r₂²?",
      opts: ["8", "12", "14", "16"],
      a: 1,
      why: "S = 4 ve P = 2. r₁² + r₂² = S² − 2P = 16 − 4 = 12. 14 seçeneği S² − P'yi hesaplar; 16 ise yalnızca S²'dir. Köklerin çarpımının iki katını çıkarmayı unutmamak gerekir."
    },
    {
      q: "Which quadratic equation with leading coefficient 1 has the roots 3 + √2 and 3 − √2?",
      opts: ["x² + 6x + 7 = 0", "x² − 3x + 7 = 0", "x² − 6x + 7 = 0", "x² − 6x + 11 = 0"],
      a: 2,
      why: "S = (3 + √2) + (3 − √2) = 6 ve P = 3² − (√2)² = 9 − 2 = 7. Denklem x² − 6x + 7 = 0. D seçeneği çarpımı 9 + 2 diye hesaplamış; A seçeneği toplamın işaretini değiştirmiş."
    },
    {
      q: "In x² − 8x + k = 0, one root is three times the other. What is k?",
      opts: ["6", "8", "16", "12"],
      a: 3,
      why: "Kökler r ve 3r: toplam 4r = 8 → r = 2, kökler 2 ve 6. k = P = 12. Kontrol: Δ = 64 − 48 = 16 > 0 ✓. 16 seçeneği, r'yi 4 alıp 4·4 = 16 yapmaktır; toplamdan r'yi doğru bulmak gerekir."
    },
    {
      q: "The parabola f(x) = ax² + bx + c has x-intercepts x = −1 and x = 5 and vertex (2, −9), as shown in the table. What is a + b + c?",
      fig: {
        type: "table",
        head: ["x", "−1", "2", "5"],
        rows: [
          ["f(x)", "0", "−9", "0"]
        ],
        caption: "f(x) = ax² + bx + c"
      },
      opts: ["−9", "−8", "−4", "0"],
      a: 1,
      why: "S = −1 + 5 = 4 = −b/a ve P = −5 = c/a, yani b = −4a, c = −5a. f(2) = 4a − 8a − 5a = −9a = −9 → a = 1. f(x) = x² − 4x − 5, a + b + c = f(1) = 1 − 4 − 5 = −8. −9 tepe noktasının değeri, a + b + c ise f(1)'dir."
    }
  ]
};
