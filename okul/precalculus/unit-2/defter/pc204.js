/* Kitora not defteri · pc204 · 2.4 İkinci Dereceden Eşitsizlikler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Exam hedefleri) + MEB 10. sınıf. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc204",
  amac: "Bu konu ikinci dereceden eşitsizlikleri çözmeyi anlatıyor. Parabolün x eksenine göre konumunu okumayı, işaret tablosunu, başkatsayısı negatif ve Δ ≤ 0 durumlarını, çarpım ve bölüm eşitsizliklerini ve problemleri öğreneceksin.",
  bolumler: [
    {
      baslik: "Eşitsizlik ve parabol",
      kisa: "f(x) > 0, parabolün x ekseninin üstünde kaldığı x'lerdir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚖️",
              terim: "Quadratic inequality",
              tr: "ikinci dereceden eşitsizlik",
              tanim: "ax² + bx + c > 0 (ya da <, ≥, ≤ 0) biçimindeki eşitsizlik; çözümü bir aralık ya da aralıkların birleşimidir.",
              ornek: "x² − 2x − 3 > 0."
            },
            {
              ikon: "📍",
              terim: "Critical points",
              tr: "kritik noktalar",
              tanim: "İfadeyi sıfır yapan x'ler, yani kökler; işaret burada değişir.",
              ornek: "x² − 2x − 3 için −1 ve 3."
            },
            {
              ikon: "🧮",
              terim: "Solution set",
              tr: "çözüm kümesi",
              tanim: "Eşitsizliği sağlayan bütün x'lerin kümesi; aralık gösterimiyle yazılır.",
              ornek: "(−∞, −1) ∪ (3, ∞)."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "x² − 2x − 3 > 0 ve < 0 grafikten nasıl okunur?",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 11,
          xticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" },
            { v: 7, label: "4" }
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
            { id: "ay", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 11], etiket: "y" },
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
            { id: "z1", tip: "nokta", x: 2, y: 5, etiket: "(−1, 0)", renk: 3, gizli: true },
            { id: "z2", tip: "nokta", x: 6, y: 5, etiket: "(3, 0)", renk: 3, gizli: true },
            { id: "gp1", tip: "cizgi", from: [0, 5], to: [2, 5], renk: 1, gizli: true },
            { id: "gp2", tip: "cizgi", from: [6, 5], to: [8, 5], renk: 1, gizli: true },
            { id: "tp", tip: "yazi", x: 7.3, y: 6.2, metin: "f > 0", gizli: true },
            { id: "gn", tip: "cizgi", from: [2, 5], to: [6, 5], renk: 2, gizli: true },
            { id: "tn", tip: "yazi", x: 4, y: 3.4, metin: "f < 0", gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x² − 2x − 3, a = 1 > 0: yukarı açık parabol." },
            {
              metin: "Önce f(x) = 0 çözülür: (x + 1)(x − 3) = 0, kökler x = −1 ve x = 3. Bunlar kritik noktalardır.",
              goster: ["z1", "z2"]
            },
            {
              metin: "f(x) > 0: parabolün x ekseninin ==üstünde== olduğu x'ler: x < −1 ya da x > 3.",
              goster: ["gp1", "gp2", "tp"]
            },
            {
              metin: "f(x) < 0: parabolün x ekseninin ==altında== olduğu x'ler: −1 < x < 3.",
              goster: ["gn", "tn"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "a ve işaret",
          head: ["Parabol (Δ > 0)", "f(x) > 0", "f(x) < 0"],
          rows: [
            ["a > 0 (yukarı açık)", "x < x₁ ya da x > x₂ (dışı)", "x₁ < x < x₂ (içi)"],
            ["a < 0 (aşağı açık)", "x₁ < x < x₂ (içi)", "x < x₁ ya da x > x₂ (dışı)"]
          ],
          not: "≥ ya da ≤ varsa kökler çözüme dahildir. Sınavda böyle yaz: *The solution set is the set of x for which the parabola lies above the x-axis.*"
        }
      ]
    },
    {
      baslik: "Çözüm adımları ve işaret tablosu",
      kisa: "Sağ tarafı sıfırla, kökleri bul, işaret tablosuyla aralıkları seç.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Dört adım",
          adimlar: [
            { baslik: "1. Bir tarafı 0 yap", metin: "Her şeyi sola topla: ax² + bx + c > 0 (ya da <, ≥, ≤)." },
            { baslik: "2. Kökleri bul", metin: "Çarpanlara ayır ya da kök formülü." },
            {
              baslik: "3. İşaret tablosu çiz",
              metin: "Kökleri sayı doğrusuna koy; her aralıkta çarpanların işaretini yaz, çarp."
            },
            {
              baslik: "4. Aralıkları seç",
              metin: "İstenen işaretli aralıkları yaz; ≥, ≤ ise kökleri dahil et."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "x² − 5x + 6 = (x − 2)(x − 3) için işaret tablosu",
          head: ["", "x < 2", "2 < x < 3", "x > 3"],
          rows: [
            ["x − 2", "−", "+", "+"],
            ["x − 3", "−", "−", "+"],
            ["(x − 2)(x − 3)", "+", "−", "+"]
          ],
          vurgu: 2,
          not: "Çarpımın işareti: (−)(−) = +, (+)(−) = −, (+)(+) = +. a > 0 olduğundan uçlar + , orta −."
        },
        {
          tip: "ornek",
          baslik: "Aynı tablodan dört eşitsizlik",
          durum: "x² − 5x + 6 ile dört farklı eşitsizlik.",
          adimlar: [
            "x² − 5x + 6 > 0: tablonun + aralıkları → x < 2 ya da x > 3 → (−∞, 2) ∪ (3, ∞).",
            "x² − 5x + 6 ≥ 0: kökler de dahil → (−∞, 2] ∪ [3, ∞).",
            "x² − 5x + 6 < 0: − aralığı → (2, 3).",
            "x² − 5x + 6 ≤ 0: kökler dahil → [2, 3]."
          ],
          sonuc: "Dört çözüm kümesi. Kontrol x = 2,5: (0,5)(−0,5) = −0,25 < 0 ✓. Sınavda böyle yaz: *The solution is x ≤ 2 or x ≥ 3, that is (−∞, 2] ∪ [3, ∞).*"
        }
      ]
    },
    {
      baslik: "Başkatsayı negatif ve çarpanlanmayan durumlar",
      kisa: "Negatifle çarpınca eşitsizlik yön değiştirir; kökler irrasyonel olabilir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Üç zor görünümlü eşitsizlik",
          durum: "−x² + 4x − 3 > 0, x² − 2x − 1 ≤ 0 ve x² ≥ 4x + 5.",
          adimlar: [
            "−x² + 4x − 3 > 0: −1 ile çarp, yön döner: x² − 4x + 3 < 0 → (x − 1)(x − 3) < 0 → 1 < x < 3. Kontrol x = 2: −4 + 8 − 3 = 1 > 0 ✓.",
            "x² − 2x − 1 ≤ 0: Δ = 4 + 4 = 8, kökler (2 ± 2√2)/2 = 1 ± √2. a > 0, ≤ 0 içi: [1 − √2, 1 + √2]. Kontrol x = 1: −2 ≤ 0 ✓.",
            "x² ≥ 4x + 5 → x² − 4x − 5 ≥ 0 → (x − 5)(x + 1) ≥ 0 → x ≤ −1 ya da x ≥ 5."
          ],
          sonuc: "(1, 3); [1 − √2, 1 + √2]; (−∞, −1] ∪ [5, ∞)."
        },
        {
          tip: "tuzak",
          metin: "Negatif sayıyla çarpmak ya da bölmek işareti döndürür; bilinmeyenin işaretini bilmeden bölme.",
          yanlis: "−x² + 4x − 3 > 0 → x² − 4x + 3 > 0. Ayrıca x² > 4x → x > 4.",
          dogru: "Negatifle çarpınca yön döner: x² − 4x + 3 < 0. x² > 4x'te x'e bölme; x(x − 4) > 0 yaz → x < 0 ya da x > 4. Sınavda böyle yaz: *When multiplying by a negative number, reverse the inequality sign.*"
        }
      ]
    },
    {
      baslik: "Δ ≤ 0: tüm gerçek sayılar ya da boş küme",
      kisa: "Parabol x eksenine değmiyorsa çözüm ya ℝ'nin tamamı ya da boş kümedir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "x² + 2x + 5 (Δ < 0) ve x² − 6x + 9 (Δ = 0)",
          head: ["Eşitsizlik", "Çözüm", "Neden?"],
          rows: [
            ["x² + 2x + 5 > 0", "ℝ", "(x + 1)² + 4 hep pozitif"],
            ["x² + 2x + 5 < 0", "∅ (boş küme)", "hiçbir x'te negatif olmaz"],
            ["x² − 6x + 9 ≥ 0", "ℝ", "(x − 3)² hep ≥ 0"],
            ["x² − 6x + 9 > 0", "ℝ ∖ {3}", "x = 3'te sıfır"],
            ["x² − 6x + 9 ≤ 0", "{3}", "yalnız x = 3'te sıfır"],
            ["x² − 6x + 9 < 0", "∅", "hiçbir x'te negatif olmaz"]
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🌍",
            baslik: "Çözüm ℝ",
            maddeler: [
              "Parabol hep eksenin istenen tarafında",
              "Her x çalışır"
            ]
          },
          sag: {
            ikon: "🚫",
            baslik: "Çözüm ∅",
            maddeler: [
              "Parabol hiç istenen tarafta değil",
              "Hiçbir x çalışmaz"
            ]
          },
          oyun: [
            { metin: "x² + 4 > 0", cevap: "sol", neden: "x² ≥ 0 olduğundan x² + 4 ≥ 4 > 0." },
            { metin: "x² + 1 < 0", cevap: "sag", neden: "x² + 1 ≥ 1: hiçbir zaman negatif değil." },
            { metin: "(x − 2)² ≥ 0", cevap: "sol", neden: "Bir karenin değeri hiç negatif olmaz." },
            { metin: "(x + 5)² < 0", cevap: "sag", neden: "Kare negatif olamaz." },
            { metin: "−x² − 3 < 0", cevap: "sol", neden: "−x² − 3 ≤ −3 < 0, her x için doğru." }
          ]
        },
        {
          tip: "tuzak",
          metin: "Teğet olduğu noktada eşitlik sağlanır, > sağlanmaz.",
          yanlis: "(x − 3)² > 0 eşitsizliğinin çözümü ℝ'dir.",
          dogru: "x = 3'te (x − 3)² = 0'dır; > 0 değil. Çözüm ℝ ∖ {3}. Sınavda böyle yaz: *The solution set is all real numbers except 3.*"
        }
      ]
    },
    {
      baslik: "Çarpım ve bölüm eşitsizlikleri",
      kisa: "Her çarpanın kökünü işaretle; paydayı sıfır yapan x'i çözüm dışı bırak.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "(x + 1)(x − 2) / (x − 4) için işaret tablosu",
          head: ["", "x < −1", "−1 < x < 2", "2 < x < 4", "x > 4"],
          rows: [
            ["x + 1", "−", "+", "+", "+"],
            ["x − 2", "−", "−", "+", "+"],
            ["x − 4", "−", "−", "−", "+"],
            ["Bölüm", "−", "+", "−", "+"]
          ],
          vurgu: 3,
          not: "Üç kritik nokta: −1, 2 (pay sıfır) ve 4 (payda sıfır)."
        },
        {
          tip: "ornek",
          baslik: "Bölüm eşitsizlikleri",
          durum: "(x + 1)(x − 2)/(x − 4) ≤ 0 ve (x − 1)/(x + 2) > 0.",
          adimlar: [
            "Tablodan ≤ 0: − olan aralıklar x < −1 ve 2 < x < 4.",
            "Kökler: x = −1 ve x = 2'de pay 0, ifade 0 → dahil. x = 4'te payda 0, ifade tanımsız → dahil değil.",
            "Çözüm: (−∞, −1] ∪ [2, 4).",
            "İkinci: kritik 1 ve −2. (x − 1)/(x + 2): x < −2 ise (−)/(−) = +; −2 < x < 1 ise (−)/(+) = −; x > 1 ise +. > 0 isteniyor: (−∞, −2) ∪ (1, ∞)."
          ],
          sonuc: "(−∞, −1] ∪ [2, 4) ve (−∞, −2) ∪ (1, ∞). Sınavda böyle yaz: *The denominator cannot be zero, so x = 4 is excluded.*"
        },
        {
          tip: "tuzak",
          metin: "Paydayı eşitsizliğin öbür tarafına çarparak taşıma.",
          yanlis: "(x − 1)/(x + 2) > 0 → x − 1 > 0 → x > 1.",
          dogru: "x + 2'nin işareti belli değil; x < −2 iken de pay ve payda negatif, bölüm pozitif. İşaret tablosu kullan."
        }
      ]
    },
    {
      baslik: "Parametre: her x için eşitsizlik",
      kisa: "Her x için pozitiflik şartı: a > 0 ve Δ < 0.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Her gerçek x için",
          head: ["İstenen", "Koşul"],
          rows: [
            ["ax² + bx + c > 0", "a > 0 ve Δ < 0"],
            ["ax² + bx + c ≥ 0", "a > 0 ve Δ ≤ 0"],
            ["ax² + bx + c < 0", "a < 0 ve Δ < 0"],
            ["ax² + bx + c ≤ 0", "a < 0 ve Δ ≤ 0"]
          ],
          not: "Parabol, x eksenine değmeden istenen tarafta kalmalı."
        },
        {
          tip: "ornek",
          baslik: "k hangi değerlerde?",
          durum: "(a) x² − 2kx + 4 > 0 her x için. (b) kx² − 4x + k < 0 her x için.",
          adimlar: [
            "(a) a = 1 > 0 tamam. Δ = (−2k)² − 4·1·4 = 4k² − 16 < 0 → k² < 4 → −2 < k < 2.",
            "Kontrol k = 0: x² + 4 > 0 ✓.",
            "(b) a = k < 0 gerekli. Δ = 16 − 4k² < 0 → k² > 4 → k < −2 ya da k > 2.",
            "k < 0 ile kesişim: k < −2. Kontrol k = −3: −3x² − 4x − 3, Δ = 16 − 36 < 0 ✓."
          ],
          sonuc: "(a) −2 < k < 2; (b) k < −2. Sınavda böyle yaz: *For all real x, the expression is positive when a > 0 and Δ < 0.*"
        }
      ]
    },
    {
      baslik: "Eşitsizlik problemleri",
      kisa: "Durumu eşitsizliğe çevir, aralığı bul, bağlama göre yorumla.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Top ne zaman 15 m'nin üstünde?",
          durum: "h(t) = −5t² + 20t metre. h(t) > 15 ise t aralığı?",
          adimlar: [
            "−5t² + 20t > 15 → −5t² + 20t − 15 > 0.",
            "−5'e böl, yön döner: t² − 4t + 3 < 0.",
            "(t − 1)(t − 3) < 0 → 1 < t < 3.",
            "Kontrol: h(1) = h(3) = 15 (sınırlar), h(2) = 20 > 15 ✓."
          ],
          sonuc: "Top 1. ile 3. saniye arasında, yani 2 saniye boyunca 15 m'nin üstünde. Sınavda böyle yaz: *The ball is higher than 15 m for 1 < t < 3.*"
        },
        {
          tip: "ornek",
          baslik: "Konser geliri en az 375 TL olsun",
          durum: "Gelir R(p) = −5p² + 100p (bilet fiyatı p TL). R(p) ≥ 375 için p aralığı?",
          adimlar: [
            "−5p² + 100p ≥ 375 → −5p² + 100p − 375 ≥ 0.",
            "−5'e böl, yön döner: p² − 20p + 75 ≤ 0.",
            "(p − 5)(p − 15) ≤ 0 → 5 ≤ p ≤ 15.",
            "Kontrol: R(5) = −125 + 500 = 375 ✓, R(15) = −1125 + 1500 = 375 ✓."
          ],
          sonuc: "Fiyat 5 TL ile 15 TL arasında olmalı."
        },
        {
          tip: "tuzak",
          metin: "Sonucu bağlamda yorumla: ≤/≥ ile sınırlar dahil, < ile hariç.",
          yanlis: "(t − 1)(t − 3) < 0 çözümü t < 1 ya da t > 3.",
          dogru: "İki kökün arası: 1 < t < 3. Çarpım negatif istendiğinde içi seçilir (a > 0)."
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
            "f(x) > 0: parabol x ekseninin üstünde; f(x) < 0: altında. Kritik noktalar f(x) = 0 kökleridir.",
            "Adımlar: bir tarafı 0 yap, kökleri bul, işaret tablosu çiz, aralıkları seç.",
            "a > 0 iken > 0 çözümü dışı, < 0 çözümü içi (a < 0 iken tersi).",
            "≥ ve ≤ kökleri dahil eder; payda sıfır yapan x her zaman hariç.",
            "Negatifle çarpınca ya da bölünce eşitsizlik yön değiştirir; bilinmeyenin işaretini bilmeden bölme.",
            "Δ < 0: çözüm ya ℝ ya ∅. Δ = 0: (x − r)² > 0 → ℝ ∖ {r}, ≤ 0 → {r}.",
            "Her x için ax² + bx + c > 0: a > 0 ve Δ < 0.",
            "Problemlerde sınırları kontrol et ve bağlamda yorumla: *for 1 < t < 3*."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "x² − 3x − 10 < 0 eşitsizliğinin çözüm kümesi hangisidir?",
      opts: ["(−2, 5)", "(−∞, −2) ∪ (5, ∞)", "(−5, 2)", "(−∞, −5) ∪ (2, ∞)"],
      a: 0,
      why: "x² − 3x − 10 = (x − 5)(x + 2), kökler −2 ve 5. a > 0 olduğundan < 0 aralığı iki kökün arasıdır: (−2, 5). B seçeneği > 0 çözümüdür; C ve D, köklerin işaretlerini yanlış almış."
    },
    {
      q: "−x² + 2x + 8 ≥ 0 eşitsizliğinin çözüm kümesi hangisidir?",
      opts: ["(−∞, −2] ∪ [4, ∞)", "(−2, 4)", "[−2, 4]", "[−4, 2]"],
      a: 2,
      why: "−1 ile çarp, yön döner: x² − 2x − 8 ≤ 0 → (x − 4)(x + 2) ≤ 0 → −2 ≤ x ≤ 4. ≥ kökleri dahil eder: [−2, 4]. A seçeneği yön çevirmeyi unutanların cevabıdır; B ise kökleri hariç bırakır."
    },
    {
      q: "Tabloda f ikinci dereceden bir fonksiyon (a > 0) olarak veriliyor. f(x) > 0 eşitsizliğinin çözüm kümesi nedir?",
      fig: {
        type: "table",
        head: ["x", "−2", "−1", "0", "1", "2", "3", "4"],
        rows: [
          ["f(x)", "5", "0", "−3", "−4", "−3", "0", "5"]
        ],
        caption: "f(x) değerleri"
      },
      opts: ["(−1, 3)", "[−1, 3]", "(−∞, −1] ∪ [3, ∞)", "(−∞, −1) ∪ (3, ∞)"],
      a: 3,
      why: "Tablodan f(−1) = f(3) = 0: kökler −1 ve 3. Aralarında f negatif, dışında pozitif. f(x) > 0 kökleri hariç tutar: (−∞, −1) ∪ (3, ∞). C seçeneği ≥ 0 çözümü; A ve B ise f(x) < 0 ve ≤ 0 çözümleridir."
    },
    {
      q: "Bir topun yüksekliği h(t) = −5t² + 20t metredir. Top kaç saniye boyunca 15 metrenin üstünde kalır?",
      opts: ["1", "2", "3", "4"],
      a: 1,
      why: "−5t² + 20t > 15 → t² − 4t + 3 < 0 → 1 < t < 3. Süre 3 − 1 = 2 saniye. 4 saniye, topun toplam uçuş süresidir; 3, üst sınırı süre sanan hatadır."
    },
    {
      q: "x² − 2kx + 4 > 0 eşitsizliği her gerçek x için doğru ise k hangi aralıktadır?",
      opts: ["k < 2", "−2 < k < 2", "k < −2 ya da k > 2", "−4 < k < 4"],
      a: 1,
      why: "a = 1 > 0 olduğundan Δ < 0 olmalı: Δ = 4k² − 16 < 0 → k² < 4 → −2 < k < 2. C seçeneği Δ > 0 yani iki gerçek kökün olduğu durumdur; D seçeneği 4k² < 16'dan k² < 16 diye yanlış sadeleşmiştir."
    }
  ]
};
