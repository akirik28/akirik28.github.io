/* Kitpath not defteri · pe1003 · 10.4 Dielektrikler
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 10, Topic 10.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1003",
  amac: "Bu konu kondansatörün plakaları arasına konan dielektriği anlatıyor: malzemenin nasıl polarize olduğunu, dielektrik sabiti κ'yı ve izole ya da pile bağlı kondansatörde yük, potansiyel farkı, alan, kapasitans ve enerjinin nasıl değiştiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Dielektrik ve polarizasyon",
      kisa: "Dielektrik polarize olur; iç alanı dış alana ters olduğundan toplam alan zayıflar.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧱",
              terim: "Dielectric",
              tr: "dielektrik",
              tanim: "Yükleri iletkendeki kadar serbest olmayan yalıtkan malzeme. Dış alanda polarize olur.",
              ornek: "Kondansatör plakaları arasına konan plastik ya da seramik tabaka."
            },
            {
              ikon: "🧲",
              terim: "Polarization",
              tr: "polarizasyon",
              tanim: "Dielektrikte yükler yerinden hafifçe kayar; yüzeylerde zıt işaretli bağlı yükler oluşur.",
              ornek: "+ plakaya bakan yüzde − yük, − plakaya bakan yüzde + yük belirir."
            },
            {
              ikon: "🔢",
              terim: "Dielectric constant",
              tr: "dielektrik sabiti",
              tanim: "κ = ε/ε₀, yani malzemenin permitivitesinin boşluğunkine oranı. Alan κ kat zayıflar: κ = E₀/E.",
              ornek: "κ = 4 olan malzeme alanı 4 kat azaltır; hava için κ ≈ 1."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔩",
            baslik: "İletken",
            maddeler: [
              "Yükler serbestçe hareket eder",
              "Dengede içeride E = 0",
              "Dış alanı tamamen yok eder"
            ]
          },
          sag: {
            ikon: "🧱",
            baslik: "Dielektrik",
            maddeler: [
              "Yükler yerinden kayar ama serbest değil",
              "İçeride alan kalır: E = E₀/κ",
              "Dış alanı kısmen yok eder"
            ]
          },
          oyun: [
            {
              metin: "Yükler yüzeye göç eder ve içeride alanı tamamen sıfırlar.",
              cevap: "sol",
              neden: "Serbest yükler alan sıfır oluncaya kadar hareket eder."
            },
            {
              metin: "İçeride alan sıfıra inmez, κ kat azalır.",
              cevap: "sag",
              neden: "Bağlı yükler yalnızca kısmen kayar: E = E₀/κ."
            },
            {
              metin: "Yüzeyde bağlı yükler oluşur ama malzemeyi terk etmez.",
              cevap: "sag",
              neden: "Polarizasyon, molekülleri hafifçe uzatır; yükler kendi yerinde kalır."
            },
            { metin: "Dengede V sabittir ve E = 0.", cevap: "sol", neden: "Bu iletkenin dengesidir." }
          ]
        },
        {
          tip: "grafik",
          baslik: "Dielektrik plakalar arasında (izole kondansatör, κ = 4)",
          xlabel: "",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "plL", tip: "cizgi", from: [3, 1], to: [3, 10], renk: 2 },
            { id: "plR", tip: "cizgi", from: [13, 1], to: [13, 10], renk: 1 },
            { id: "fp0", tip: "yazi", x: 2.55, y: 2, metin: "+", renk: 2 },
            { id: "fp1", tip: "yazi", x: 2.55, y: 4, metin: "+", renk: 2 },
            { id: "fp2", tip: "yazi", x: 2.55, y: 6, metin: "+", renk: 2 },
            { id: "fp3", tip: "yazi", x: 2.55, y: 8, metin: "+", renk: 2 },
            { id: "fm0", tip: "yazi", x: 13.45, y: 2, metin: "−", renk: 1 },
            { id: "fm1", tip: "yazi", x: 13.45, y: 4, metin: "−", renk: 1 },
            { id: "fm2", tip: "yazi", x: 13.45, y: 6, metin: "−", renk: 1 },
            { id: "fm3", tip: "yazi", x: 13.45, y: 8, metin: "−", renk: 1 },
            {
              id: "slab",
              tip: "alan",
              noktalar: [
                [5.5, 2], [10.5, 2], [10.5, 9], [5.5, 9], [5.5, 2]
              ],
              renk: 3,
              gizli: true
            },
            { id: "gl0", tip: "ok", from: [3.4, 3.5], to: [5.2, 3.5], renk: 0 },
            { id: "in0", tip: "ok", from: [6.2, 3.5], to: [9.8, 3.5], renk: 0 },
            { id: "gr0", tip: "ok", from: [10.8, 3.5], to: [12.6, 3.5], renk: 0 },
            { id: "gl1", tip: "ok", from: [3.4, 5.5], to: [5.2, 5.5], renk: 0 },
            { id: "in1", tip: "ok", from: [6.2, 5.5], to: [9.8, 5.5], renk: 0 },
            { id: "gr1", tip: "ok", from: [10.8, 5.5], to: [12.6, 5.5], renk: 0 },
            { id: "gl2", tip: "ok", from: [3.4, 7.5], to: [5.2, 7.5], renk: 0 },
            { id: "in2", tip: "ok", from: [6.2, 7.5], to: [9.8, 7.5], renk: 0 },
            { id: "gr2", tip: "ok", from: [10.8, 7.5], to: [12.6, 7.5], renk: 0 },
            { id: "e0", tip: "yazi", x: 4.3, y: 9.6, metin: "E₀", renk: 0 },
            { id: "bm0", tip: "yazi", x: 5.85, y: 3, metin: "−", renk: 1, gizli: true },
            { id: "bm1", tip: "yazi", x: 5.85, y: 4.6, metin: "−", renk: 1, gizli: true },
            { id: "bm2", tip: "yazi", x: 5.85, y: 6.4, metin: "−", renk: 1, gizli: true },
            { id: "bm3", tip: "yazi", x: 5.85, y: 8, metin: "−", renk: 1, gizli: true },
            { id: "bp0", tip: "yazi", x: 10.15, y: 3, metin: "+", renk: 2, gizli: true },
            { id: "bp1", tip: "yazi", x: 10.15, y: 4.6, metin: "+", renk: 2, gizli: true },
            { id: "bp2", tip: "yazi", x: 10.15, y: 6.4, metin: "+", renk: 2, gizli: true },
            { id: "bp3", tip: "yazi", x: 10.15, y: 8, metin: "+", renk: 2, gizli: true },
            { id: "ek", tip: "yazi", x: 8, y: 10.3, metin: "E = E₀/4", gizli: true }
          ],
          durumlar: [
            { metin: "Boş kondansatör: sol plaka +, sağ plaka −; aralarında sağa doğru E₀." },
            {
              metin: "κ = 4 olan bir dielektrik araya giriyor. Kondansatör izole: plakalardaki yük sabit.",
              goster: ["slab"]
            },
            {
              metin: "Alan malzemeyi polarize eder: + plakaya bakan yüzde − yük, − plakaya bakan yüzde + yük belirir (bağlı yükler).",
              goster: ["bm0", "bm1", "bm2", "bm3", "bp0", "bp1", "bp2", "bp3"]
            },
            {
              metin: "Bağlı yüzey yükleri, içeride dış alana ters bir alan üretir. Net alan zayıflar: E = E₀/κ = E₀/4.",
              set: {
                in0: { to: [7.1, 3.5] },
                in1: { to: [7.1, 5.5] },
                in2: { to: [7.1, 7.5] }
              },
              goster: ["ek"]
            },
            {
              metin: "Sayılarla: bağlı yük yoğunluğu σ_ind = σ(1 − 1/κ) = 0,75σ olur. Net alan E = (σ − σ_ind)/ε₀ = σ/(κε₀)."
            }
          ]
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: polarizasyon",
              metin: "\"The dielectric polarizes: bound charges on its surfaces produce a field opposite to the applied field, so the net field is reduced.\""
            },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: dielektrik sabiti", metin: "\"κ = ε/ε₀ = E₀/E.\"" }
          ]
        }
      ]
    },
    {
      baslik: "İzole mi, pile bağlı mı?",
      kisa: "İzole kondansatörde Q sabit, pile bağlıda ΔV sabit; C her ikisinde κ kat artar.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "ΔV–Q düzleminde dielektrik (C₀ = 0,10 nF, κ = 4)",
          xlabel: "Q (nC)",
          ylabel: "ΔV (V)",
          xmax: 10,
          ymax: 10,
          xticks: [
            { v: 2, label: "8" },
            { v: 4, label: "16" },
            { v: 6, label: "24" },
            { v: 8, label: "32" },
            { v: 10, label: "40" }
          ],
          yticks: [
            { v: 2, label: "20" },
            { v: 4, label: "40" },
            { v: 6, label: "60" },
            { v: 8, label: "80" },
            { v: 10, label: "100" }
          ],
          ogeler: [
            { id: "l1", tip: "cizgi", from: [0, 0], to: [2.5, 10], renk: 0, etiket: "hava", gizli: true },
            { id: "p0", tip: "nokta", x: 2, y: 8, renk: 0, etiket: "başlangıç", kilavuz: true, gizli: true },
            { id: "l2", tip: "cizgi", from: [0, 0], to: [10, 10], renk: 1, etiket: "κ = 4", gizli: true },
            { id: "a1", tip: "ok", from: [2, 7.6], to: [2, 2.4], renk: 2, gizli: true },
            { id: "p1", tip: "nokta", x: 2, y: 2, renk: 2, etiket: "izole", kilavuz: true, gizli: true },
            { id: "a2", tip: "ok", from: [2.5, 8], to: [7, 8], renk: 3, gizli: true },
            { id: "p2", tip: "nokta", x: 8, y: 8, renk: 3, etiket: "pile bağlı", kilavuz: true, gizli: true }
          ],
          durumlar: [
            {
              metin: "Hava dolu kondansatör: C₀ = Q/ΔV = 8,0 nC / 80 V = 0,10 nF. Nokta (8 nC, 80 V).",
              goster: ["l1", "p0"]
            },
            {
              metin: "κ = 4 dielektrik girince C = κC₀ = 0,40 nF olur: ΔV = Q/C çizgisi daha yatay (eğim 1/κ kat).",
              goster: ["l2"]
            },
            {
              metin: "İzole (Q = 8,0 nC sabit): nokta dikey iner. ΔV = 80 V → 20 V (κ kat azalır).",
              goster: ["a1", "p1"]
            },
            {
              metin: "Pile bağlı (ΔV = 80 V sabit): nokta yatay kayar. Q = 8,0 nC → 32 nC (κ kat artar).",
              goster: ["a2", "p2"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Dielektrik (κ) eklenince",
          head: ["Nicelik", "İzole (Q sabit)", "Pile bağlı (ΔV sabit)"],
          rows: [
            ["Kapasitans C", "κ kat artar", "κ kat artar"],
            ["Yük Q", "değişmez", "κ kat artar"],
            ["Potansiyel farkı ΔV", "κ kat azalır", "değişmez"],
            ["Alan E", "κ kat azalır", "değişmez"],
            ["Enerji U", "κ kat azalır", "κ kat artar"]
          ],
          vurgu: 0,
          not: "Her satır C → κC ile başlar; sabit olanı koruyup gerisini ΔV = Q/C, E = ΔV/d, U = ½QΔV ile bul."
        },
        {
          tip: "tuzak",
          baslik: "Üç etkiyi birlikte kurmak",
          metin: "2025 sınavında izole kondansatöre dielektrik eklemenin üç etkisini birlikte söyleyemeyen çok öğrenci oldu: alan zayıflar, ΔV azalır, C artar. Dielektriğin yükü artırdığını sanmak da yaygın hata: izole kondansatörde Q sabittir.",
          yanlis: "Dielektrik plakalardaki yükü artırır.",
          dogru: "İzoleyse Q sabit: E ve ΔV κ kat azalır, C κ kat artar. Pile bağlıysa ΔV sabit, Q κ kat artar. Sınavda böyle yaz: \"The capacitor is isolated, so Q is constant; C increases by κ, so ΔV = Q/C and E decrease by κ.\""
        }
      ]
    },
    {
      baslik: "Çözümlü örnek",
      kisa: "Önce C → κC, sonra sabit kalan nicelikle (Q ya da ΔV) gerisini bul.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "κ = 4, Q = 8,0 nC, d = 2,0 mm, C₀ = 0,10 nF",
          durum: "Hava dolu kondansatör 80 V pille yüklenmiş (Q = 8,0 nC, d = 2,0 mm). Aralığı tamamen dolduran κ = 4 dielektrik yerleştiriliyor. Önce pil çıkarılmış (izole), sonra pil bağlı olsaydı sonuçlar ne olurdu?",
          adimlar: [
            "Başlangıç: E₀ = ΔV₀/d = 80/(2,0×10⁻³) = 4,0×10⁴ V/m; U₀ = ½QΔV₀ = ½(8,0×10⁻⁹)(80) = 3,2×10⁻⁷ J = 320 nJ.",
            "Yeni kapasitans (iki durumda da): C = κC₀ = 0,40 nF.",
            "İzole (Q = 8,0 nC): ΔV = Q/C = 20 V; E = ΔV/d = 1,0×10⁴ V/m (= E₀/κ); U = ½QΔV = 8,0×10⁻⁸ J = 80 nJ (= U₀/κ).",
            "Pile bağlı (ΔV = 80 V): Q = CΔV = (0,40×10⁻⁹)(80) = 3,2×10⁻⁸ C = 32 nC (κ kat); E = ΔV/d = 4,0×10⁴ V/m (değişmez); U = ½CΔV² = 1,28×10⁻⁶ J = 1280 nJ (κ kat)."
          ],
          sonuc: "İzole: ΔV = 20 V, E = 1,0×10⁴ V/m, U = 80 nJ. Pile bağlı: Q = 32 nC, E = 4,0×10⁴ V/m, U = 1280 nJ"
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: sıra",
              metin: "\"C increases to κC₀. The capacitor is isolated, so Q is unchanged and ΔV = Q/C decreases by κ.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: alan",
              metin: "\"E = ΔV/d, so E also decreases by the factor κ.\""
            }
          ]
        }
      ]
    },
    {
      baslik: "Deney: C–1/d grafiği",
      kisa: "C–1/d grafiği doğrusaldır; eğim ε₀A (havada), dielektrikle κε₀A olur.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Ölçüm tablosu (A = 0,0100 m², hava)",
          head: ["d (mm)", "1/d (10² m⁻¹)", "C (pF)"],
          rows: [
            ["1,0", "10,0", "88,5"],
            ["2,0", "5,0", "44,3"],
            ["3,0", "3,33", "29,5"],
            ["4,0", "2,5", "22,1"],
            ["5,0", "2,0", "17,7"]
          ],
          not: "C–d grafiği hiperbol olur; doğrusal hale getirmek için C'yi 1/d'ye karşı çiz."
        },
        {
          tip: "grafik",
          baslik: "C–1/d: eğimden ε₀ ve κ",
          xlabel: "1/d (10² m⁻¹)",
          ylabel: "C (pF)",
          xmax: 12,
          ymax: 10,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [
            { v: 2, label: "20" },
            { v: 4, label: "40" },
            { v: 6, label: "60" },
            { v: 8, label: "80" }
          ],
          ogeler: [
            { id: "d0", tip: "nokta", x: 10, y: 8.85, renk: 0 },
            { id: "d1", tip: "nokta", x: 5, y: 4.425, renk: 0 },
            { id: "d2", tip: "nokta", x: 3.333, y: 2.95, renk: 0 },
            { id: "d3", tip: "nokta", x: 2.5, y: 2.213, renk: 0 },
            { id: "d4", tip: "nokta", x: 2, y: 1.77, renk: 0 },
            { id: "fit", tip: "cizgi", from: [0, 0], to: [11, 9.735], renk: 1, etiket: "hava", gizli: true },
            { id: "q1", tip: "nokta", x: 2, y: 1.77, renk: 2, etiket: "(2,0; 17,7)", gizli: true },
            { id: "q2", tip: "nokta", x: 10, y: 8.85, renk: 2, etiket: "(10,0; 88,5)", gizli: true },
            { id: "dx", tip: "cizgi", from: [2, 1.77], to: [10, 1.77], renk: 2, kesik: true, gizli: true },
            { id: "dy", tip: "cizgi", from: [10, 1.77], to: [10, 8.85], renk: 2, kesik: true, gizli: true },
            { id: "diel", tip: "cizgi", from: [0, 0], to: [2.8, 9.912], renk: 3, etiket: "κ = 4", gizli: true }
          ],
          durumlar: [
            { metin: "Plakalar sabit (A = 0,0100 m²), hava dolu. d değiştirilerek C ölçülüyor: C = ε₀A·(1/d)." },
            {
              metin: "Noktalardan cetvelle bir en iyi doğru çizilir; orijinden geçer. Eğim = ε₀A.",
              goster: ["fit"]
            },
            {
              metin: "Eğimi doğru üzerindeki iki uzak noktadan hesapla: (2,0; 17,7 pF) ve (10,0; 88,5 pF).",
              goster: ["q1", "q2", "dx", "dy"]
            },
            {
              metin: "Eğim = (88,5 − 17,7) pF / (10,0 − 2,0)×10² m⁻¹ = 8,85×10⁻¹⁴ F·m. ε₀ = eğim/A = 8,85×10⁻¹⁴/0,0100 = 8,85×10⁻¹² F/m."
            },
            {
              metin: "Aralığı tamamen dielektrikle doldurunca aynı d'de C dört kat: eğim κε₀A. Eğimlerin oranı κ'yı verir: 35,4/8,85 = 4.",
              goster: ["diel"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Eğimi yanlış hesaplamak",
          metin: "Eğimi tek bir veri noktası ile orijinden hesaplamak, ya da çizgi yerine veri noktalarından hesaplamak puan kaybettirir. Eksenlere nicelik ve birim yaz, ölçeği eşit aralıklı seç.",
          yanlis: "Eğim = (tek veri noktası) / (orijin) ya da C–d grafiğinin eğimi.",
          dogru: "C–(1/d) çiz, doğru üzerindeki iki uzak noktadan eğimi al, ε₀A (ya da κε₀A) ile eşle. Sınavda böyle yaz: \"The slope of C versus 1/d equals κε₀A, so κ = (slope with dielectric)/(slope in air).\""
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
            "*Dielectric*: yükleri serbest olmayan yalıtkan; dış alanda polarize olur, yüzeylerde bağlı yükler oluşur.",
            "Bağlı yüklerin alanı dış alana zıttır: E = E₀/κ; κ = ε/ε₀ = E₀/E.",
            "Dielektrik her durumda kapasitansı κ kat artırır: C = κC₀.",
            "İzole (Q sabit): ΔV, E ve U κ kat azalır; Q değişmez.",
            "Pile bağlı (ΔV sabit): Q ve U κ kat artar; E değişmez.",
            "Sayısal örnek (κ = 4, 80 V, 8,0 nC): izolede 20 V ve 80 nJ, bağlıda 32 nC ve 1280 nJ.",
            "İletkende içerideki alan sıfırlanır; dielektrikte yalnızca κ kat azalır.",
            "C–1/d grafiğinin eğimi ε₀A'dır; dielektrikle eğim κ kat büyür, oran κ'yı verir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "An isolated, charged parallel-plate capacitor has air between its plates. A dielectric with κ = 3 is then inserted to fill the gap completely. Which row correctly describes the change?",
      opts: [
        "C increases by 3; ΔV and E decrease by 3; Q is unchanged",
        "C increases by 3; ΔV and E increase by 3; Q is unchanged",
        "C is unchanged; ΔV decreases by 3; Q is unchanged",
        "C increases by 3; Q increases by 3; ΔV is unchanged"
      ],
      a: 0,
      why: "İzole olduğu için Q sabit. C = κC₀ ile 3 kat artar; ΔV = Q/C ve E = ΔV/d 3 kat azalır. En çekici yanlış şık D: bu pile bağlı durumdur (ΔV sabit, Q artar)."
    },
    {
      q: "A 2.0 μF air-filled capacitor is connected to a 12 V battery. While it stays connected, a dielectric with κ = 5 is inserted to fill the gap. What is the charge on the plates afterward?",
      opts: ["24 μC", "120 μC", "4.8 μC", "600 μC"],
      a: 1,
      why: "Pile bağlı: ΔV = 12 V sabit; C = κC₀ = 10 μF; Q = CΔV = 120 μC. En çekici yanlış şık C: Q'yu κ'ya bölmek (izole durumun mantığı)."
    },
    {
      q: "The table gives measurements on an isolated parallel-plate capacitor before and after a dielectric slab is inserted. What is the dielectric constant κ of the slab?",
      fig: {
        type: "table",
        caption: "Isolated capacitor",
        head: ["Quantity", "Before (air)", "After (dielectric)"],
        rows: [
          ["Q", "3.0 nC", "3.0 nC"],
          ["ΔV", "60 V", "15 V"],
          ["C", "50 pF", "200 pF"]
        ]
      },
      opts: ["2", "0.25", "4", "45"],
      a: 2,
      why: "κ = C/C₀ = 200/50 = 4; aynı zamanda κ = ΔV₀/ΔV = 60/15 = 4. En çekici yanlış şık D: 60 − 15 = 45 gibi farkı almak; oranı almak gerekir."
    },
    {
      q: "A capacitor that stores 60 μJ is connected to a battery. While it remains connected, a dielectric with κ = 2 is inserted to fill the gap. How much energy is stored afterward?",
      opts: ["30 μJ", "60 μJ", "240 μJ", "120 μJ"],
      a: 3,
      why: "ΔV sabit, C iki katına çıkar: U = ½CΔV² iki katına çıkar, 120 μJ. En çekici yanlış şık A: izole durumdaki U₀/κ sonucunu uygulamak."
    },
    {
      q: "The graph shows the capacitance C of the same two parallel plates as a function of 1/d, first with air between them and then with the gap completely filled with a dielectric. What is the dielectric constant κ of the material?",
      fig: {
        type: "graph",
        xlabel: "1/d",
        ylabel: "C",
        xmax: 10,
        ymax: 30,
        lines: [
          { from: [0, 0], to: [10, 10], label: "air" },
          { from: [0, 0], to: [10, 30], label: "dielectric" }
        ],
        xticks: [],
        yticks: []
      },
      opts: ["1/3", "3", "20", "10"],
      a: 1,
      why: "Eğimler: hava ε₀A = 10/10 = 1, dielektrik κε₀A = 30/10 = 3. Oran κ = 3. En çekici yanlış şık C: 30 − 10 = 20 gibi farkı almak; eğimlerin oranı gerekir."
    }
  ]
};
