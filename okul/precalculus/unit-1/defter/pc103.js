/* Kitora not defteri · pc103 · 1.3 Ters Fonksiyon
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Exam hedefleri) + MEB 10. sınıf. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc103",
  amac: "Bu konu ters fonksiyonu anlatıyor: f'nin yaptığını geri alan fonksiyon. Tersin ne zaman var olduğunu (birebir ve örten), nasıl bulunduğunu, grafiğinin y = x'e göre simetrisini ve doğrulama yöntemlerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Ters fonksiyon: işlemi geri almak",
      kisa: "Ters fonksiyon, f'nin yaptığını geri alır: çıktıyı girdiye çevirir.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Telefon paketi",
          adimlar: [
            {
              baslik: "f: GB → TL",
              metin: "5 TL abonelik + GB başına 2 TL: f(x) = 2x + 5. 12 GB için f(12) = 29 TL."
            },
            {
              baslik: "Ters soru: fatura 29 TL, kaç GB?",
              metin: "Çıktıdan girdiye dönülür: önce 5'i çıkar (24), sonra 2'ye böl (12)."
            },
            {
              baslik: "f⁻¹ = işlemleri ters sırayla geri almak",
              metin: "f önce ×2 sonra +5 yaptı; f⁻¹ önce −5 sonra ÷2 yapar: f⁻¹(y) = (y − 5)/2."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "f(a) = b", alt: "f, a'yı b'ye götürür" },
            "⇔",
            { t: "f⁻¹(b) = a", alt: "f⁻¹, b'yi a'ya geri getirir" }
          ],
          aciklama: "f⁻¹, \"f üzeri eksi bir\" diye okunur ve 1/f(x) **değildir**. Sınavda böyle yaz: *The inverse function f⁻¹ undoes the action of f.*"
        }
      ]
    },
    {
      baslik: "*Injective*, *surjective*, *bijective*",
      kisa: "Tersin olması için fonksiyon hem birebir hem örten, yani bijective olmalı.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "1️⃣",
              terim: "Injective",
              tr: "birebir",
              tanim: "Farklı girdiler farklı çıktı verir: f(a) = f(b) ise a = b.",
              ornek: "f(x) = 2x + 1."
            },
            {
              ikon: "🎯",
              terim: "Surjective",
              tr: "örten",
              tanim: "Range = codomain: hedef kümede boşta eleman kalmaz.",
              ornek: "f: ℝ → ℝ, f(x) = x³."
            },
            {
              ikon: "🔁",
              terim: "Bijective",
              tr: "birebir ve örten",
              tanim: "İkisi birden. Yalnızca bijective fonksiyonların (kendi codomain'lerine göre) tersi vardır.",
              ornek: "f: ℝ → ℝ, f(x) = 3x − 6."
            },
            {
              ikon: "➖",
              terim: "Horizontal line test",
              tr: "yatay doğru testi",
              tanim: "Her yatay doğru grafiği en fazla bir kez kesiyorsa fonksiyon birebirdir.",
              ornek: "y = x² testi geçemez: y = 4 iki kez keser."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Üç fonksiyon, üç karar",
          durum: "f(x) = 3x − 6 (ℝ → ℝ), g(x) = x² (ℝ → ℝ), h(x) = x² ([0, ∞) → [0, ∞)). Hangisinin tersi var?",
          adimlar: [
            "f birebir: f(a) = f(b) → 3a − 6 = 3b − 6 → a = b. f örten: her y için x = (y + 6)/3 var. Bijective, tersi var.",
            "g birebir değil: g(2) = g(−2) = 4. Örten de değil: −1 hiç çıkmaz. Tersi yok.",
            "h birebir: x ≥ 0 iken x² her değeri bir kez alır. h örten: her y ≥ 0 için x = √y ≥ 0 var. Bijective, tersi h⁻¹(x) = √x."
          ],
          sonuc: "Aynı formül (x²), farklı domain ile ters alır ya da almaz. Sınavda böyle yaz: *f is bijective, therefore f has an inverse.*"
        },
        {
          tip: "ikili",
          sol: { ikon: "✅", baslik: "Tersi var", maddeler: ["Birebir ve örten", "Yatay doğru testini geçer"] },
          sag: {
            ikon: "❌",
            baslik: "Tersi yok",
            maddeler: [
              "Birebir değil ya da örten değil",
              "Yatay doğru grafiği birden çok keser"
            ]
          },
          oyun: [
            { metin: "f(x) = 2x + 1, ℝ'de.", cevap: "sol", neden: "Doğru: her yatay doğru bir kez keser." },
            { metin: "f(x) = x², ℝ'de.", cevap: "sag", neden: "f(2) = f(−2): birebir değil." },
            { metin: "f(x) = x³, ℝ'de.", cevap: "sol", neden: "Hep artan ve her değeri alıyor: bijective." },
            { metin: "f(x) = |x|, ℝ'de.", cevap: "sag", neden: "f(3) = f(−3): birebir değil." },
            { metin: "f(x) = 5 (sabit).", cevap: "sag", neden: "Tüm girdiler aynı çıktıyı veriyor." },
            { metin: "f(x) = 1/x, ℝ∖{0} üzerinde.", cevap: "sol", neden: "Bijective ve tersi kendisi." }
          ]
        }
      ]
    },
    {
      baslik: "Tersin domain'i ve range'i",
      kisa: "Tersin domain'i f'nin range'idir, tersin range'i f'nin domain'idir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Tablodan ters: çiftler yer değiştirir",
          head: ["", "1. çift", "2. çift", "3. çift", "4. çift"],
          rows: [
            ["f", "(1, 5)", "(2, 7)", "(3, 9)", "(4, 11)"],
            ["f⁻¹", "(5, 1)", "(7, 2)", "(9, 3)", "(11, 4)"]
          ],
          not: "D(f⁻¹) = R(f) = {5, 7, 9, 11} ve R(f⁻¹) = D(f) = {1, 2, 3, 4}. Aynı çıktı iki kez geçseydi tablonun tersi olmazdı. Sınavda böyle yaz: *The domain of f⁻¹ is the range of f.*"
        },
        {
          tip: "ornek",
          baslik: "Domain'i kısıtlayarak ters oluşturmak",
          durum: "f(x) = (x − 2)², x ≥ 2. Tersini ve domain/range'lerini bul.",
          adimlar: [
            "f(x) = x² gibi ℝ'de birebir değil; x ≥ 2 kısıtı onu birebir yapar (tepe noktası x = 2).",
            "y = (x − 2)² → yer değiştir: x = (y − 2)², y ≥ 2 olduğundan y − 2 = √x → y = 2 + √x.",
            "R(f) = [0, ∞), D(f) = [2, ∞).",
            "D(f⁻¹) = [0, ∞) = R(f) ve R(f⁻¹) = [2, ∞) = D(f) ✓."
          ],
          sonuc: "f⁻¹(x) = 2 + √x, domain [0, ∞), range [2, ∞). x ≤ 2 kısıtı seçilseydi f⁻¹(x) = 2 − √x olurdu."
        }
      ]
    },
    {
      baslik: "Tersini bulma",
      kisa: "x ile y'nin yerini değiştir, sonra y'yi yalnız bırak.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Dört adım",
          adimlar: [
            { baslik: "1. y = f(x) yaz", metin: "f(x) yerine y koy." },
            { baslik: "2. x ile y'nin yerini değiştir", metin: "Girdi ile çıktının rolleri değişir." },
            { baslik: "3. y'yi çöz", metin: "Cebirle y'yi yalnız bırak." },
            { baslik: "4. y yerine f⁻¹(x) yaz", metin: "Domain ve range'i kontrol et: D(f⁻¹) = R(f)." }
          ]
        },
        {
          tip: "ornek",
          baslik: "Doğrusal ve rasyonel fonksiyon",
          durum: "f(x) = 3x − 6 ve g(x) = (2x + 1)/(x − 3), x ≠ 3. Terslerini bul.",
          adimlar: [
            "f: y = 3x − 6 → x = 3y − 6 → 3y = x + 6 → f⁻¹(x) = (x + 6)/3.",
            "g: y = (2x + 1)/(x − 3) → x = (2y + 1)/(y − 3).",
            "Paydadan kurtul: x(y − 3) = 2y + 1 → xy − 3x = 2y + 1.",
            "y'li terimleri topla: xy − 2y = 3x + 1 → y(x − 2) = 3x + 1.",
            "g⁻¹(x) = (3x + 1)/(x − 2), x ≠ 2.",
            "Kontrol: g(x) = 2 + 7/(x − 3) hiçbir zaman 2 olamaz: R(g) = ℝ∖{2} ve D(g⁻¹) = ℝ∖{2} ✓."
          ],
          sonuc: "f⁻¹(x) = (x + 6)/3 ve g⁻¹(x) = (3x + 1)/(x − 2). Sınavda böyle yaz: *Swap x and y, then solve for y.*"
        },
        {
          tip: "ornek",
          baslik: "Kök fonksiyonunun tersi",
          durum: "h(x) = √(x − 1), x ≥ 1.",
          adimlar: [
            "y = √(x − 1) → yer değiştir: x = √(y − 1).",
            "Karesini al: x² = y − 1 → y = x² + 1.",
            "R(h) = [0, ∞) olduğundan h⁻¹'in domain'i x ≥ 0 olmalı. (x² + 1 formülü tüm ℝ'de tanımlı ama h⁻¹ yalnız x ≥ 0 kullanır.)",
            "R(h⁻¹) = D(h) = [1, ∞) ✓: x ≥ 0 için x² + 1 ≥ 1."
          ],
          sonuc: "h⁻¹(x) = x² + 1, domain [0, ∞)."
        }
      ]
    },
    {
      baslik: "Ters fonksiyonun grafiği: y = x'e göre simetri",
      kisa: "f ve f⁻¹ grafikleri, y = x doğrusuna göre birbirinin yansımasıdır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = x² (x ≥ 0) ve tersi",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 5,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              noktalar: [
                [0, 0], [0.2, 0.04], [0.4, 0.16], [0.6, 0.36], [0.8, 0.64], [1, 1],
                [1.2, 1.44], [1.4, 1.96], [1.6, 2.56], [1.8, 3.24], [2, 4], [2.2, 4.84]
              ],
              renk: 0,
              etiket: "f"
            },
            {
              id: "d",
              tip: "cizgi",
              from: [0, 0],
              to: [5, 5],
              renk: 3,
              kesik: true,
              etiket: "y = x",
              gizli: true
            },
            { id: "p1", tip: "nokta", x: 2, y: 4, etiket: "(2, 4)", renk: 0, gizli: true },
            { id: "p2", tip: "nokta", x: 4, y: 2, etiket: "(4, 2)", renk: 2, gizli: true },
            { id: "k", tip: "ok", from: [2.15, 3.85], to: [3.85, 2.15], renk: 2, gizli: true },
            {
              id: "i",
              tip: "egri",
              noktalar: [
                [0, 0], [0.04, 0.2], [0.16, 0.4], [0.36, 0.6], [0.64, 0.8], [1, 1],
                [1.44, 1.2], [1.96, 1.4], [2.56, 1.6], [3.24, 1.8], [4, 2], [4.84, 2.2]
              ],
              renk: 2,
              etiket: "f⁻¹",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "f(x) = x², yalnızca x ≥ 0 için çiziliyor. Bu f birebir ve [0, ∞) üzerinde örten: tersi var."
            },
            { metin: "Aynadan bak: ayna y = x doğrusu.", goster: ["d"] },
            {
              metin: "f'de (2, 4) var. f⁻¹'de koordinatlar yer değiştirir: (4, 2). İki nokta y = x'e göre simetrik.",
              goster: ["p1", "p2", "k"]
            },
            {
              metin: "Bütün noktaları böyle çevirince ==f⁻¹(x) = √x== eğrisi çıkar: f'nin y = x'e göre yansıması.",
              goster: ["i"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "f ve f⁻¹ yan yana",
          head: ["", "f", "f⁻¹"],
          rows: [
            ["Nokta", "(a, b)", "(b, a)"],
            ["Domain", "D(f)", "R(f)"],
            ["Range", "R(f)", "D(f)"],
            ["x eksenini kestiği nokta", "(p, 0)", "y eksenini (0, p)'de keser"],
            ["Eğim (doğruysa)", "m", "1/m"]
          ],
          not: "Sınavda böyle yaz: *The graphs of f and f⁻¹ are reflections of each other in the line y = x.*"
        }
      ]
    },
    {
      baslik: "Tersi doğrulama: cebir ve geometri",
      kisa: "İki bileşke de x vermeli; ya da noktalar y = x'e göre simetrik olmalı.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Cebirsel doğrulama",
          durum: "f(x) = 3x − 6 ve g(x) = (x + 6)/3. g gerçekten f'nin tersi mi? Bir de h(x) = (x − 6)/3'ü dene.",
          adimlar: [
            "f(g(x)) = 3·(x + 6)/3 − 6 = x + 6 − 6 = x ✓.",
            "g(f(x)) = (3x − 6 + 6)/3 = x ✓. İki bileşke de x: g = f⁻¹.",
            "h için: f(h(x)) = 3·(x − 6)/3 − 6 = x − 12 ≠ x ✗. h, f'nin tersi değil."
          ],
          sonuc: "f∘g = g∘f = I ise g = f⁻¹. Sınavda böyle yaz: *Since f(g(x)) = x and g(f(x)) = x, g is the inverse of f.*"
        },
        {
          tip: "ornek",
          baslik: "Geometrik doğrulama",
          durum: "f(x) = 3x − 6 üzerindeki (4, 6) noktası ve g(x) = (x + 6)/3 üzerindeki (6, 4) noktası.",
          adimlar: [
            "g(6) = (6 + 6)/3 = 4: (6, 4) gerçekten g'nin grafiğinde ✓.",
            "Orta nokta: ((4 + 6)/2, (6 + 4)/2) = (5, 5), y = x doğrusu üzerinde ✓.",
            "Doğru parçasının eğimi: (4 − 6)/(6 − 4) = −1, y = x'in eğimi 1'dir; çarpımları −1, yani dik ✓.",
            "Eğimler de uyumlu: f'in eğimi 3, g'nin eğimi 1/3."
          ],
          sonuc: "Noktalar y = x'e göre simetrik: ayna ilişkisi sağlanıyor."
        },
        {
          tip: "tuzak",
          metin: "Kısıtlı domain'de \"x çıktı\" yetmez.",
          yanlis: "f(x) = x² (x ≥ 0) ve g(x) = √x için g(f(x)) = √(x²) = x, o hâlde her x için doğru.",
          dogru: "√(x²) = |x|; yalnızca x ≥ 0 için x'e eşit. Doğrulamada her iki fonksiyonun domain'ini de belirt."
        }
      ]
    },
    {
      baslik: "Ters fonksiyonun özellikleri",
      kisa: "Tersin tersi f'dir; bileşkenin tersi sırayı çevirir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Özellikler",
          head: ["Özellik", "Yazılışı", "Anlamı"],
          rows: [
            [
              "Tersin tersi",
              "(f⁻¹)⁻¹ = f",
              "İki kez geri almak başa döndürür"
            ],
            ["Eşdeğerlik", "f(a) = b ⇔ f⁻¹(b) = a", "Girdi ve çıktı rol değiştirir"],
            ["Bileşke", "f∘f⁻¹ = f⁻¹∘f = I", "Sonuç birim fonksiyon"],
            ["Bileşkenin tersi", "(f∘g)⁻¹ = g⁻¹∘f⁻¹", "Sıra tersine döner"],
            ["Monotonluk", "f artan ise f⁻¹ artan", "Azalansa azalan"]
          ],
          not: "Sınavda böyle yaz: *The inverse of f∘g is g⁻¹∘f⁻¹; the order is reversed.*"
        },
        {
          tip: "ornek",
          baslik: "Pratik hesaplar",
          durum: "f(x) = x³ + 1, g(x) = x + 1, k(x) = 2x.",
          adimlar: [
            "f⁻¹(9) = ? Formül bulmak yerine f(x) = 9 çöz: x³ + 1 = 9 → x³ = 8 → x = 2. Demek f⁻¹(9) = 2.",
            "(g∘k)(x) = 2x + 1 → tersi (x − 1)/2.",
            "k⁻¹(g⁻¹(x)) = k⁻¹(x − 1) = (x − 1)/2 ✓ (doğru sıra).",
            "g⁻¹(k⁻¹(x)) = g⁻¹(x/2) = x/2 − 1 ✗ (yanlış sıra)."
          ],
          sonuc: "f⁻¹(k) değerini, f(x) = k denklemini çözerek bulmak çoğu zaman en hızlı yoldur."
        },
        {
          tip: "tuzak",
          metin: "−1 üst indisi \"ters\" demektir, \"bir bölü\" demek değil.",
          yanlis: "f(x) = 2x + 1 için f⁻¹(x) = 1/(2x + 1).",
          dogru: "f⁻¹(x) = (x − 1)/2. 1/(2x + 1) ise ters değil, çarpmaya göre tersidir (*reciprocal*)."
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
            "f(a) = b ⇔ f⁻¹(b) = a; f⁻¹ işlemi geri alır.",
            "Tersin var olması için fonksiyon *bijective* (birebir ve örten) olmalı; yatay doğru testi.",
            "Domain'i kısıtlayarak ters oluşturulabilir: x² için x ≥ 0 → √x.",
            "D(f⁻¹) = R(f) ve R(f⁻¹) = D(f).",
            "Ters bulma: y = f(x), x ile y'yi değiştir, y'yi çöz.",
            "f ve f⁻¹ grafikleri y = x doğrusuna göre simetrik; (a, b) ↔ (b, a).",
            "Doğrulama: f(f⁻¹(x)) = x ve f⁻¹(f(x)) = x; geometrik: orta nokta y = x üzerinde.",
            "(f⁻¹)⁻¹ = f ve (f∘g)⁻¹ = g⁻¹∘f⁻¹. f⁻¹ ≠ 1/f."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "f(x) = (x + 1)/(x − 2), x ≠ 2 için f⁻¹(x) hangisidir?",
      opts: ["(2x + 1)/(x − 1)", "(x − 2)/(x + 1)", "(x + 1)/(2x − 1)", "(2x − 1)/(x + 1)"],
      a: 0,
      why: "y = (x + 1)/(x − 2) → yer değiştir: x = (y + 1)/(y − 2) → xy − 2x = y + 1 → y(x − 1) = 2x + 1 → y = (2x + 1)/(x − 1). Kontrol: f(3) = 4 ve f⁻¹(4) = 9/3 = 3 ✓. B seçeneği 1/f(x)'tir; ters fonksiyon değil."
    },
    {
      q: "Aşağıdaki fonksiyonlardan hangisinin ℝ üzerinde tersi vardır?",
      opts: ["f(x) = x² + 1", "f(x) = |x − 2|", "f(x) = x³ − 5", "f(x) = 4"],
      a: 2,
      why: "x³ − 5 hep artandır ve her gerçek değeri alır: birebir ve örten. x² + 1 ve |x − 2| birebir değil (f(1) = f(−1) gibi); 4 sabittir. En çekici yanlış B: |x − 2| tek köşeli ama V biçimli, yatay doğru iki kez keser."
    },
    {
      q: "Şekilde f fonksiyonunun grafiği dört noktadan oluşuyor: (1, 3), (2, 5), (3, 1), (4, 2). f⁻¹(1) + f⁻¹(2) kaçtır?",
      fig: {
        type: "graph",
        xlabel: "x",
        ylabel: "f(x)",
        xmax: 5,
        ymax: 6,
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" }
        ],
        yticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 5, label: "5" }
        ],
        points: [
          { q: 1, p: 3 },
          { q: 2, p: 5 },
          { q: 3, p: 1 },
          { q: 4, p: 2 }
        ]
      },
      opts: ["3", "7", "5", "8"],
      a: 1,
      why: "f⁻¹(1) = ? f(x) = 1 olan x'i ara: f(3) = 1 → f⁻¹(1) = 3. f(4) = 2 → f⁻¹(2) = 4. Toplam 7. D seçeneği f(1) + f(2) = 3 + 5 = 8: ters yerine kendisini kullanmak."
    },
    {
      q: "f(x) = x + 1 ve g(x) = 2x veriliyor. (f∘g)⁻¹(5) kaçtır?",
      opts: ["3/2", "3", "2", "5/2"],
      a: 2,
      why: "(f∘g)(x) = 2x + 1. 2x + 1 = 5 → x = 2. Aynı sonuç (f∘g)⁻¹(x) = (x − 1)/2 formülünden de gelir: (5 − 1)/2 = 2. Sırayı karıştırıp f⁻¹(g⁻¹(5)) = 5/2 − 1 = 3/2 bulmak çekici bir hatadır."
    },
    {
      q: "f(x) = x² − 4x tanımlı olduğu aralık kısıtlanarak tersi olan bir fonksiyon yapılmak isteniyor. Hangi aralık bunu sağlar?",
      opts: ["x ≥ 0", "−2 ≤ x ≤ 6", "x ≤ 3", "x ≥ 2"],
      a: 3,
      why: "f(x) = (x − 2)² − 4, tepe noktası x = 2'de. Birebir olması için tepe noktasının tek tarafı seçilmeli: x ≥ 2 (ya da x ≤ 2). x ≥ 0 tepe noktasını aşar: f(0) = f(4) = 0. −2 ≤ x ≤ 6 ve x ≤ 3 de x = 2'nin iki yanını içerir."
    }
  ]
};
