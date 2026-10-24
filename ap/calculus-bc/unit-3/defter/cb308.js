/* Kitpath not defteri · cb308 · 3.5–3.6 Yöntem Seçimi ve Yüksek Mertebeden Türevler
   Kaynak: ap-videolar/src/episodes/cb308 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb308",
  amac: "Bu konu iki şey anlatıyor: bir türev sorusunda hangi kuralı seçeceğini ve türevin türevini, yani yüksek mertebeden türevleri almayı. Polinomlarda, zincirli ve kapalı fonksiyonlarda ikinci türevi bulacaksın.",
  bolumler: [
    {
      baslik: "Hangi aleti seçmeli? Dıştan içe bak",
      kisa: "En dıştaki işlem kuralı seçer; sonra içeri gir, aynı soruyu sor.",
      bloklar: [
        {
          tip: "harita",
          merkez: "Türev aletleri",
          dallar: [
            { baslik: "*Power rule*", alt: "xⁿ → n·xⁿ⁻¹" },
            { baslik: "*Product rule*", alt: "u′v + uv′" },
            { baslik: "*Quotient rule*", alt: "(u′v − uv′)/v²" },
            { baslik: "*Chain rule*", alt: "dıştakinin türevi · içtekinin türevi" },
            { baslik: "Kapalı türev", alt: "y gelince dy/dx ekle" },
            { baslik: "Ters fonksiyon", alt: "1/f′(f⁻¹(x))" },
            { baslik: "Ters trigonometri", alt: "1/√(1 − x²), 1/(1 + x²) …" }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Dıştan içe karar akışı",
          adimlar: [
            { baslik: "x ve y karışık mı?", metin: "Öyleyse ==kapalı türev==." },
            { baslik: "Ters fonksiyonun türevi mi?", metin: "Öyleyse 1/f′(f⁻¹(x))." },
            {
              baslik: "En dıştaki işleme bak",
              metin: "Toplam: terim terim. Çarpım: çarpım kuralı. Bölüm: bölüm kuralı ya da önce sadeleştir. Bileşke: zincir kuralı."
            },
            { baslik: "İçeri gir", metin: "İçteki ifadeye aynı soruyu tekrar sor." }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧰",
              terim: "Selecting procedures",
              tr: "yöntem seçimi",
              tanim: "Türev alırken ifadenin en dıştaki işlemine bakıp doğru kuralı seçmek.",
              ornek: "x³ ln x'in en dışındaki işlem çarpımdır."
            },
            {
              ikon: "✂️",
              terim: "Simplify first",
              tr: "önce sadeleştir",
              tanim: "Bölüm, kök ya da kesir varsa kuralı uygulamadan ifadeyi sadeleştirmek çoğu zaman en kısa yoldur.",
              ornek: "(x² + 1)/x = x + 1/x."
            },
            {
              ikon: "✖️",
              terim: "Product rule",
              tr: "çarpım kuralı",
              tanim: "İki çarpan da x'e bağlıysa (uv)′ = u′v + uv′.",
              ornek: "(x³ ln x)′ = 3x² ln x + x³·(1/x)."
            },
            {
              ikon: "⛓️",
              terim: "Chain rule",
              tr: "zincir kuralı",
              tanim: "Bileşkenin türevi: dıştakinin türevi çarpı içtekinin türevi.",
              ornek: "(arctan eˣ)′ = eˣ/(1 + e²ˣ)."
            }
          ]
        }
      ]
    },
    {
      baslik: "Üç ifade, üç alet",
      kisa: "Çarpımda çarpım kuralı, bölümde önce sadeleştir, bileşkede zincir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Dıştaki işleme bak",
          durum: "Her ifadede en dıştaki işleme bakıp uygun aleti seç.",
          adimlar: ["**x³ ln x:** en dışta çarpım → 3x² ln x + x³·(1/x) = 3x² ln x + x².", "**(x² + 1)/x:** bölüm kuralına koşma; önce böl: x + 1/x → türev 1 − 1/x².", "**arctan(eˣ):** en dışta arctan, içinde eˣ: zincir → eˣ/(1 + (eˣ)²) = eˣ/(1 + e²ˣ)."],
          sonuc: "3x² ln x + x²;  1 − 1/x²;  eˣ/(1 + e²ˣ)."
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✂️",
            baslik: "Önce sadeleştir",
            maddeler: ["Pay terim terim bölünebiliyorsa", "Kök ya da kesir güce çevrilebiliyorsa"]
          },
          sag: {
            ikon: "🛠️",
            baslik: "Kuralı doğrudan uygula",
            maddeler: ["Çarpım: çarpım kuralı", "Bileşke: zincir kuralı"]
          },
          oyun: [
            { metin: "(x² + 1)/x", cevap: "sol", neden: "Payda tek terim: x + 1/x yazılır." },
            { metin: "x³ ln x", cevap: "sag", neden: "İki çarpan da x'e bağlı: çarpım kuralı." },
            { metin: "arctan(eˣ)", cevap: "sag", neden: "En dışta arctan, içinde eˣ: zincir kuralı." },
            { metin: "(x³ + x)/x", cevap: "sol", neden: "Sadeleşir: x² + 1." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Her bölümde bölüm kuralı yok",
          metin: "Payda tek terimliyse pay bölünebilir; bölüm kuralı gereksiz uzun olur ve hata riskini artırır.",
          yanlis: "(x² + 1)/x için hemen bölüm kuralını yazmak.",
          dogru: "x + 1/x yaz, terim terim türet: 1 − 1/x²."
        }
      ]
    },
    {
      baslik: "Yüksek mertebeden türevler",
      kisa: "Türevin türevi ikinci türevdir; konumun ikinci türevi ivmedir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🚗",
          baslik: "Gaza basınca koltuğa yapışmak",
          metin: "Arabada gaza bastığında koltuğa yapışırsın. Hissettiğin şey hız değil, hızın değişimi: yani ivme. Konumun türevi hız, hızın türevi ivmedir; yani ivme konumun ikinci türevidir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🪜",
              terim: "Higher-order derivatives",
              tr: "yüksek mertebeden türevler",
              tanim: "Türevin türevini, onun türevini… tekrar tekrar almak.",
              ornek: "f → f′ → f″ → f‴."
            },
            {
              ikon: "2️⃣",
              terim: "Second derivative",
              tr: "ikinci türev",
              tanim: "Türevin türevi; eğimin nasıl değiştiğini söyler. Grafiğin bükülmesini ileride ondan okuruz.",
              ornek: "y = x³ → y′ = 3x² → y″ = 6x."
            },
            {
              ikon: "3️⃣",
              terim: "Third derivative",
              tr: "üçüncü türev",
              tanim: "İkinci türevin türevi.",
              ornek: "y = x³ → y‴ = 6."
            },
            {
              ikon: "✍️",
              terim: "Leibniz notation",
              tr: "Leibniz gösterimi",
              tanim: "d²y/dx², d³y/dx³ biçiminde yazılır. (Üslü gösterimde dördüncü türevden itibaren üs parantez içine alınır: f⁽⁴⁾.)",
              ornek: "d⁴y/dx⁴ = f⁽⁴⁾(x)."
            },
            {
              ikon: "🏎️",
              terim: "Acceleration",
              tr: "ivme",
              tanim: "Konum s(t) → hız v = s′ → ivme a = s″.",
              ornek: "s(t) = t³ ise a(t) = 6t."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Üç gösterim",
          head: ["y gösterimi", "f gösterimi", "Leibniz"],
          rows: [["y′", "f′(x)", "dy/dx"], ["y″", "f″(x)", "d²y/dx²"], ["y‴", "f‴(x)", "d³y/dx³"], ["y⁽⁴⁾", "f⁽⁴⁾(x)", "d⁴y/dx⁴"], ["y⁽ⁿ⁾", "f⁽ⁿ⁾(x)", "dⁿy/dxⁿ"]],
          not: "Dördüncü türevden itibaren üs parantez içinde olur; f⁽⁴⁾ dördüncü türevdir, f⁴ (dördüncü kuvvet) değil."
        }
      ]
    },
    {
      baslik: "Polinomda türev merdiveni",
      kisa: "Her türevde derece bir düşer; (n + 1). türev sıfır olur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = x⁴ − 2x³ + 5x: derece merdiveni",
          xlabel: "Kaçıncı türev",
          ylabel: "Derece",
          xmax: 6,
          ymax: 5,
          xticks: [
            { v: 0, label: "0" },
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "p0", tip: "nokta", renk: 1, x: 0, y: 4, etiket: "f" },
            { id: "p1", tip: "nokta", renk: 1, x: 1, y: 3, etiket: "f′", gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "f″", gizli: true },
            { id: "p3", tip: "nokta", renk: 1, x: 3, y: 1, etiket: "f‴", gizli: true },
            { id: "p4", tip: "nokta", renk: 1, x: 4, y: 0, etiket: "f⁽⁴⁾", gizli: true },
            { id: "p5", tip: "nokta", renk: 2, x: 5, y: 0, etiket: "f⁽⁵⁾", gizli: true },
            { id: "s1", tip: "cizgi", renk: 1, from: [0, 4], to: [1, 3], gizli: true },
            { id: "s2", tip: "cizgi", renk: 1, from: [1, 3], to: [2, 2], gizli: true },
            { id: "s3", tip: "cizgi", renk: 1, from: [2, 2], to: [3, 1], gizli: true },
            { id: "s4", tip: "cizgi", renk: 1, from: [3, 1], to: [4, 0], gizli: true },
            { id: "s5", tip: "cizgi", renk: 2, kesik: true, from: [4, 0], to: [5, 0], gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x⁴ − 2x³ + 5x: dördüncü dereceden polinom." },
            { metin: "f′(x) = 4x³ − 6x² + 5: derece 3.", goster: ["s1", "p1"] },
            { metin: "f″(x) = 12x² − 12x: derece 2.", goster: ["s2", "p2"] },
            { metin: "f‴(x) = 24x − 12: derece 1.", goster: ["s3", "p3"] },
            { metin: "f⁽⁴⁾(x) = 24: sabit, derece 0.", goster: ["s4", "p4"] },
            { metin: "f⁽⁵⁾(x) = 0 ve sonraki bütün türevler de 0.", goster: ["s5", "p5"] }
          ]
        },
        {
          tip: "formul",
          parcalar: [{ t: "n. dereceden polinom" }, "→", { t: "(n + 1). türev" }, "=", { t: "0" }],
          aciklama: "Dördüncü dereceden bir polinomun beşinci türevi her zaman sıfırdır."
        }
      ]
    },
    {
      baslik: "Zincirli fonksiyonda ikinci türev",
      kisa: "İlk türev çarpım çıkarsa ikinci türevde çarpım kuralı gerekir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = e^(x²)",
          durum: "f(x) = e^(x²) için f″(x) ve f″(1) değerini bul.",
          adimlar: ["Birinci türev (zincir): f′(x) = 2x·e^(x²).", "Bu artık bir çarpım: u = 2x ve v = e^(x²).", "İkinci türev: f″(x) = 2·e^(x²) + 2x·(2x·e^(x²)) = 2e^(x²) + 4x²·e^(x²).", "Topla: f″(x) = (2 + 4x²)·e^(x²).", "x = 1: f″(1) = 6e ≈ 16,3."],
          sonuc: "f″(x) = (2 + 4x²)·e^(x²) ve f″(1) = 6e."
        },
        {
          tip: "tuzak",
          baslik: "Çarpım kuralını atlama",
          metin: "İlk türev 2x·e^(x²) gibi bir çarpım çıkarsa, tekrar türetirken çarpım kuralı şarttır.",
          yanlis: "f″(x) = 2·e^(x²) (yalnızca 2x'i türetip bırakmak).",
          dogru: "f″(x) = 2e^(x²) + 2x·2x·e^(x²) = (2 + 4x²)e^(x²)."
        }
      ]
    },
    {
      baslik: "Sinüs ve kosinüs döngüsü",
      kisa: "Sinüsün türevleri dört adımda başa döner; n'yi 4'e böl.",
      bloklar: [
        {
          tip: "harita",
          merkez: "d/dx döngüsü (periyot 4)",
          dallar: [
            { baslik: "sin x", alt: "başlangıç" },
            { baslik: "cos x", alt: "1. türev" },
            { baslik: "−sin x", alt: "2. türev" },
            { baslik: "−cos x", alt: "3. türev; 4. türev yine sin x" }
          ]
        },
        {
          tip: "ornek",
          baslik: "sin x'in 35'inci türevi",
          durum: "d³⁵/dx³⁵ (sin x) nedir?",
          adimlar: ["Dört adımda başa dönüyor: sin x → cos x → −sin x → −cos x → sin x.", "35 ÷ 4 = 8 tam tur ve kalan 3.", "Tam turlar sonucu değiştirmez; kalan 3 adım yürü: cos x, −sin x, −cos x.", "Kosinüs de aynı çemberde döner, sadece bir adım ileriden başlar."],
          sonuc: "−cos x. (Kalan 0 olsaydı fonksiyonun kendisi çıkardı.)"
        },
        {
          tip: "tuzak",
          baslik: "Kalanı atlama",
          metin: "Yüksek mertebeden türevde 35 kez türetmeye kalkma; döngüyü kullan.",
          yanlis: "35'inci türev = sin x (tam turları sayıp kalanı atlamak).",
          dogru: "n'yi 4'e böl, kalana bak: 0 → sin x, 1 → cos x, 2 → −sin x, 3 → −cos x."
        }
      ]
    },
    {
      baslik: "Kapalı ilişkide ikinci türev",
      kisa: "y′'yi bul, bir kez daha türet, dy/dx yerine y′'yi koy ve sadeleştir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔗",
              terim: "Implicit second derivative",
              tr: "kapalı ikinci türev",
              tanim: "Kapalı türevi bir kez daha almak; çıkan dy/dx yerine ilk bulduğun ifadeyi koymak.",
              ornek: "x² + y² = 25 için d²y/dx² = −25/y³."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "x² + y² = 25",
          durum: "x² + y² = 25 için d²y/dx² kaçtır? (3, 4) noktasındaki değeri nedir?",
          adimlar: ["Birinci türev: 2x + 2y·dy/dx = 0 → dy/dx = −x/y.", "Bölüm kuralıyla bir türev daha: d²y/dx² = −(y·1 − x·dy/dx)/y².", "dy/dx yerine −x/y koy: −(y + x²/y)/y² = −(y² + x²)/y³.", "Pay eğri denklemi: x² + y² = 25 → d²y/dx² = −25/y³.", "(3, 4) noktasında: −25/4³ = −25/64."],
          sonuc: "d²y/dx² = −25/y³; (3, 4)'te −25/64 ≈ −0,39."
        },
        {
          tip: "grafik",
          baslik: "x² + y² = 25 çemberinin üst yarısı",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 6,
          xticks: [
            { v: 0, label: "−5" },
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 5, label: "0" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" },
            { v: 10, label: "5" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" }
          ],
          ogeler: [
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [5, 0], to: [5, 6] },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              noktalar: [[10, 0], [9.985, 0.392], [9.938, 0.782], [9.862, 1.167], [9.755, 1.545], [9.619, 1.913], [9.455, 2.27], [9.263, 2.612], [9.045, 2.939], [8.802, 3.247], [8.536, 3.536], [8.247, 3.802], [7.939, 4.045], [7.612, 4.263], [7.27, 4.455], [6.913, 4.619], [6.545, 4.755], [6.167, 4.862], [5.782, 4.938], [5.392, 4.985], [5, 5], [4.608, 4.985], [4.218, 4.938], [3.833, 4.862], [3.455, 4.755], [3.087, 4.619], [2.73, 4.455], [2.388, 4.263], [2.061, 4.045], [1.753, 3.802], [1.464, 3.536], [1.198, 3.247], [0.955, 2.939], [0.737, 2.612], [0.545, 2.27], [0.381, 1.913], [0.245, 1.545], [0.138, 1.167], [0.062, 0.782], [0.015, 0.392], [0, 0]]
            },
            { id: "P", tip: "nokta", renk: 1, x: 8, y: 4, etiket: "(3, 4)", gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [6, 5.5], to: [10, 2.5], etiket: "m = −3/4", gizli: true }
          ],
          durumlar: [
            { metin: "x² + y² = 25 çemberinin üst yarısı (y > 0)." },
            { metin: "(3, 4) noktasında dy/dx = −x/y = −3/4: teğet aşağı iniyor.", goster: ["P", "t"] },
            { metin: "d²y/dx² = −25/y³ = −25/64 < 0: eğri ==aşağı bükülür==, teğet eğrinin üstünde kalır." }
          ]
        }
      ]
    },
    {
      baslik: "dy/dx hazır verilince",
      kisa: "dy/dx, x ve y cinsinden verilirse yine türet ve yerine koy.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "dy/dx = 2x − y",
          durum: "dy/dx = 2x − y verilmiş. (1, 3) noktasında d²y/dx² kaçtır?",
          adimlar: ["İki tarafın x'e göre türevini al: d²y/dx² = 2 − dy/dx.", "dy/dx yerine verileni koy: 2 − (2x − y) = 2 − 2x + y.", "(1, 3): dy/dx = 2·1 − 3 = −1.", "d²y/dx² = 2 − (−1) = 3 (ya da 2 − 2 + 3 = 3)."],
          sonuc: "d²y/dx² = 2 − 2x + y; (1, 3)'te 3."
        },
        {
          tip: "tuzak",
          baslik: "dy/dx'i yerine koy",
          metin: "Kapalı ikinci türevde sonuçta dy/dx kalmamalı: yerine ilk bulduğun ifadeyi koy, sonra gerekirse eğri denklemiyle sadeleştir.",
          yanlis: "d²y/dx² = 2 − dy/dx (dy/dx'i bırakmak) ya da d²y/dx² = 2 demek.",
          dogru: "dy/dx yerine 2x − y yaz: 2 − 2x + y."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["Yöntem seçerken dıştan içe bak; önce sadeleştirmek çoğu zaman en kısa yoldur.", "x ve y karışıksa kapalı türev, ters fonksiyonsa 1/f′(f⁻¹(x)).", "Yüksek mertebeden türev, türevi tekrar tekrar almaktır; konum → hız → ivme.", "Polinomda derece her adımda düşer; n. dereceden polinomun (n + 1). türevi 0'dır.", "İlk türev çarpım çıkarsa ikinci türevde çarpım kuralı gerekir: (e^(x²))″ = (2 + 4x²)e^(x²).", "Sinüs ve kosinüs dört adımda döner: n'yi 4'e böl, kalana bak.", "Kapalı ikinci türevde dy/dx yerine ilk bulduğunu koy, eğri denklemiyle sadeleştir.", "x² + y² = 25 için d²y/dx² = −25/y³; dy/dx = 2x − y için d²y/dx² = 2 − 2x + y."]
        }
      ]
    }
  ]
};
