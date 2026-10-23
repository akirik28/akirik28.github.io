/* Kitpath not defteri · pc302 · 3.2 Polinom Bölmesi
   Kaynak: öğretmenin ders sunumu (Unit#3_1 Polynomials, Dividing Polynomials ve Synthetic Division bölümleri) + Review for Exam#3; ders notuyla aynı terim ve gösterim. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc302",
  amac: "Bu konu bir polinomu başka bir polinoma bölmeyi anlatıyor: uzun bölme, sentetik bölme ve kalanın anlamı. Sonunda bölümü ve kalanı bulacak, tam bölünmeyi çarpanlara ayırmada kullanacaksın.",
  bolumler: [
    {
      baslik: "Bölme algoritması",
      kisa: "Bölünen = bölen × bölüm + kalan; kalanın derecesi bölenden küçüktür.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "P(x)", alt: "bölünen" }, "=", { t: "D(x)", alt: "bölen" }, "·", { t: "Q(x)", alt: "bölüm" }, "+", { t: "R(x)", alt: "kalan" }],
          aciklama: "Ders tanımı: deg P ≥ deg D ≥ 1 iken Q ve R vardır ve deg R < deg D. R = 0 ise P, D ile *divisible* (tam bölünür) ve P(x) = D(x)·Q(x). Tam sayılardaki gibi: 29 = 4·7 + 1. Sınavda böyle yaz: *When P(x) is divided by D(x), the quotient is Q(x) and the remainder is R(x).*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "📦", terim: "Dividend", tr: "bölünen", tanim: "Bölünen polinom, yani P(x).", ornek: "29 ÷ 4 işleminde 29." },
            { ikon: "✂️", terim: "Divisor", tr: "bölen", tanim: "Böldüğümüz polinom, yani D(x).", ornek: "29 ÷ 4 işleminde 4." },
            { ikon: "🎯", terim: "Quotient", tr: "bölüm", tanim: "Bölmenin sonucu Q(x). Derecesi deg P − deg D'dir.", ornek: "29 ÷ 4 işleminde 7." },
            {
              ikon: "🧩",
              terim: "Remainder",
              tr: "kalan",
              tanim: "Artan kısım R(x): ya 0'dır ya da derecesi bölenden küçüktür.",
              ornek: "29 ÷ 4 işleminde 1."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Dereceleri önceden tahmin et",
          durum: "P(x) beşinci derece, D(x) ikinci derece bir polinom.",
          adimlar: [
            "Bölümün derecesi: 5 − 2 = 3.",
            "Kalan bölenden düşük dereceli: derece 1 ya da 0 olabilir (ya da R = 0).",
            "Yazılış: P(x) = D(x)·Q(x) + R(x)."
          ],
          sonuc: "Q(x) üçüncü derece, R(x) en fazla birinci derecedir."
        }
      ]
    },
    {
      baslik: "Uzun bölme (*long division*)",
      kisa: "Önce baş terimleri böl, sonra çarp, çıkar ve sıradaki terimi indir.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Dört hareket, tekrar tekrar",
          adimlar: [
            { baslik: "Böl", metin: "Bölünenin ilk terimini bölenin ilk terimine böl; sonucu bölüme yaz." },
            { baslik: "Çarp", metin: "Bu terimi bölenin tamamıyla çarp." },
            { baslik: "Çıkar", metin: "Sonucu bölünenin altına yaz ve çıkar; işaretlere dikkat." },
            { baslik: "İndir", metin: "Sıradaki terimi aşağı indir. Kalanın derecesi bölenden küçük olunca dur." }
          ]
        },
        {
          tip: "ornek",
          baslik: "(2x³ − x² − 7x + 6) ÷ (x − 2)",
          durum: "Bölünen azalan sırada ve eksik terim yok.",
          adimlar: [
            "2x³ ÷ x = 2x². Çarp: 2x²(x − 2) = 2x³ − 4x². Çıkar: (−x²) − (−4x²) = 3x². −7x'i indir: 3x² − 7x.",
            "3x² ÷ x = 3x. Çarp: 3x(x − 2) = 3x² − 6x. Çıkar: (−7x) − (−6x) = −x. +6'yı indir: −x + 6.",
            "−x ÷ x = −1. Çarp: −1·(x − 2) = −x + 2. Çıkar: 6 − 2 = 4.",
            "Kalan 4 sabit, derecesi bölenin derecesinden (1) küçük: dur."
          ],
          sonuc: "Bölüm 2x² + 3x − 1, kalan 4. Kontrol: (x − 2)(2x² + 3x − 1) + 4 = 2x³ − x² − 7x + 6. Sınavda böyle yaz: *The quotient is 2x² + 3x − 1 and the remainder is 4.*"
        },
        {
          tip: "tuzak",
          metin: "En sık hata çıkarma sırasında işarettir: çarpımı bir parantez gibi düşün ve her terimin işaretini değiştir.",
          yanlis: "(−x²) − (−4x²) = −5x²",
          dogru: "(−x²) − (−4x²) = −x² + 4x² = 3x²."
        }
      ]
    },
    {
      baslik: "Bölen ikinci derece olunca",
      kisa: "Eksik terimlere 0 yaz; kalanın derecesi bölenden küçük olunca dur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "(x³ − 4x + 3) ÷ (x² + 1)",
          durum: "x² terimi yok: bölünen x³ + 0x² − 4x + 3 diye yazılır.",
          adimlar: [
            "x³ ÷ x² = x. Çarp: x(x² + 1) = x³ + x.",
            "Çıkar: (x³ + 0x² − 4x + 3) − (x³ + x) = −5x + 3.",
            "−5x + 3'ün derecesi 1, bölenin derecesi 2'den küçük: dur."
          ],
          sonuc: "Bölüm x, kalan −5x + 3. Kontrol: (x² + 1)·x + (−5x + 3) = x³ − 4x + 3. Sınavda böyle yaz: *The remainder has a lower degree than the divisor, so we stop.*"
        },
        {
          tip: "ornek",
          baslik: "(3x⁵ − 2x⁴ + x² − 3) ÷ (x² − 1)",
          durum: "x³ ve x terimleri eksik: katsayılar 3, −2, 0, 1, 0, −3. x² − 1 = (x − 1)(x + 1) olduğundan iki kez sentetik bölme de çalışır.",
          adimlar: [
            "Uzun bölme: 3x⁵ ÷ x² = 3x³, sonra −2x², sonra 3x, sonra −1. Bölüm 3x³ − 2x² + 3x − 1.",
            "Kalan: 3x − 4. Derecesi 1, bölenin derecesi 2'den küçük.",
            "İki adımlı sentetik: önce (x − 1) ile böl: kalan −1; çıkan bölümü (x + 1) ile böl: kalan 3. Toplam kalan 3(x − 1) + (−1) = 3x − 4 ✓.",
            "Kontrol: P(1) = 3 − 2 + 1 − 3 = −1 ve kalan 3·1 − 4 = −1 ✓."
          ],
          sonuc: "Bölüm 3x³ − 2x² + 3x − 1, kalan 3x − 4. Sınavda böyle yaz: *The quotient is 3x³ − 2x² + 3x − 1 and the remainder is 3x − 4.*"
        },
        {
          tip: "tuzak",
          metin: "Kalan her zaman sayı değildir: bölen ikinci derece ise kalan birinci derece olabilir. Eksik terim yazılmazsa benzer terimler alt alta gelmez.",
          yanlis: "x³ − 4x + 3'ü yazarken x² terimini atlayıp −4x'i hemen x³'ün yanına koymak.",
          dogru: "0x² yaz; böylece sütunlar hizalı kalır."
        }
      ]
    },
    {
      baslik: "Sentetik bölme (*synthetic division*)",
      kisa: "Bölen x − a ise yalnızca katsayılarla, çok daha kısa bölersin.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "x − a ile sentetik bölme",
          adimlar: [
            { baslik: "Hazırla", metin: "Bölen x − a ise a'yı sola yaz (x + 3 için a = −3, işaret ters). Bölünenin katsayılarını sırayla yaz; eksik terime 0 koy." },
            { baslik: "İndir", metin: "İlk katsayıyı olduğu gibi aşağı indir." },
            { baslik: "Çarp ve topla", metin: "İndirdiğin sayıyı a ile çarp, sonraki katsayının altına yaz ve topla. Sona kadar tekrarla." },
            { baslik: "Oku", metin: "Son sayı kalandır; öncekiler bölümün katsayılarıdır (bölümün derecesi bölünenden 1 az)." }
          ]
        },
        {
          tip: "tablo",
          head: ["Satır", "x³", "x²", "x", "sabit"],
          rows: [["Katsayılar", "2", "−1", "−7", "6"], ["a = 2 ile çarpım", "", "4", "6", "−2"], ["Toplam", "2", "3", "−1", "4"]],
          vurgu: 2,
          not: "(2x³ − x² − 7x + 6) ÷ (x − 2): bölüm 2x² + 3x − 1, kalan 4; uzun bölmedeki sonuçla aynı. Sınavda böyle yaz: *Use synthetic division to find the quotient and the remainder.*"
        },
        {
          tip: "ornek",
          baslik: "(x⁴ − 5x² + 4x − 3) ÷ (x + 3)",
          durum: "x + 3 = x − (−3), yani a = −3. x³ eksik: katsayılar 1, 0, −5, 4, −3.",
          adimlar: [
            "1'i indir.",
            "1·(−3) = −3; 0 + (−3) = −3.",
            "(−3)·(−3) = 9; −5 + 9 = 4.",
            "4·(−3) = −12; 4 + (−12) = −8.",
            "(−8)·(−3) = 24; −3 + 24 = 21."
          ],
          sonuc: "Bölüm x³ − 3x² + 4x − 8, kalan 21."
        },
        {
          tip: "ornek",
          baslik: "(x³ − 4x² + 2x − 1) ÷ (3x − 6)",
          durum: "Bölenin başkatsayısı 1 değil: 3x − 6 = 3(x − 2). Ders notu bu tür (ax + b) bölenleri de sentetik bölmede işler.",
          adimlar: [
            "(x − 2) ile sentetik böl, a = 2: 1; −4 + 2 = −2; 2 + (−4) = −2; −1 + (−4) = −5.",
            "Yani P(x) = (x − 2)(x² − 2x − 2) − 5.",
            "3x − 6 = 3(x − 2) olduğundan P(x) = (3x − 6)·(x² − 2x − 2)/3 − 5.",
            "Bölüm (x² − 2x − 2)/3, kalan −5. Kontrol: (x − 2)(x² − 2x − 2) = x³ − 4x² + 2x + 4; −5 ekleyince P(x) ✓."
          ],
          sonuc: "Bölüm (x² − 2x − 2)/3, kalan −5. Başkatsayısı 1 olmayan bölende bölüm o başkatsayıya bölünür, kalan değişmez. Sınavda böyle yaz: *Factor the divisor as 3(x − 2) first.*"
        }
      ]
    },
    {
      baslik: "Hangi yöntem, hangi bölen?",
      kisa: "Bölen birinci derece ise sentetik, ikinci derece ise uzun bölme kullan.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "⚡", baslik: "*Synthetic division*", maddeler: ["Bölen birinci derece: x − a ya da ax + b", "Yalnızca katsayılar yazılır, hızlıdır"] },
          sag: { ikon: "📐", baslik: "*Long division*", maddeler: ["Her bölen için çalışır", "x² + 1 gibi ikinci derece bölenler için tek yol"] },
          oyun: [
            { metin: "(x³ − 2x + 5) ÷ (x + 4)", cevap: "sol", neden: "x + 4 = x − (−4): sentetik bölme olur." },
            { metin: "(x³ + x + 1) ÷ (x² − x + 2)", cevap: "sag", neden: "Bölen ikinci derece: uzun bölme." },
            { metin: "(x⁴ − 1) ÷ (x − 1)", cevap: "sol", neden: "Bölen x − 1: a = 1 ile sentetik." },
            { metin: "(2x³ + x²) ÷ (x² + 3)", cevap: "sag", neden: "x² + 3 birinci derece değil: uzun bölme." },
            { metin: "(3x² − 5x + 2) ÷ (x − 3)", cevap: "sol", neden: "x − 3: a = 3." }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz", metin: "*Divide using long division.* / *Divide using synthetic division.*" },
            { ikon: "✍️", baslik: "Sonucu şöyle ifade et", metin: "*Write the result in the form P(x) = D(x)Q(x) + R(x).*" }
          ]
        }
      ]
    },
    {
      baslik: "Kalan sıfır: tam bölünme",
      kisa: "Kalan 0 ise bölen bir çarpandır ve grafik o noktada x eksenini keser.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "P(x) = x³ − 2x² − x + 2'yi (x − 2)'ye bölmek",
          xlabel: "",
          ylabel: "",
          xmax: 5,
          ymax: 9,
          xticks: [{ v: 0, label: "−2" }, { v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }, { v: 4, label: "2" }, { v: 5, label: "3" }],
          yticks: [
            { v: 0, label: "−5" },
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 5, label: "0" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [0, 5], to: [5, 5], etiket: "x" },
            { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [2, 0], to: [2, 9], etiket: "y" },
            {
              id: "p",
              tip: "egri",
              renk: 2,
              noktalar: [
                [0.5, 0.625],
                [0.75, 3.172],
                [1, 5],
                [1.25, 6.203],
                [1.5, 6.875],
                [1.75, 7.109],
                [2, 7],
                [2.25, 6.641],
                [2.5, 6.125],
                [2.75, 5.547],
                [3, 5],
                [3.25, 4.578],
                [3.5, 4.375],
                [3.75, 4.484],
                [4, 5],
                [4.25, 6.016],
                [4.5, 7.625]
              ],
              etiket: "P(x)",
              gizli: true
            },
            { id: "k2", tip: "nokta", renk: 0, x: 4, y: 5, etiket: "x = 2", gizli: true },
            {
              id: "q",
              tip: "egri",
              renk: 1,
              noktalar: [
                [0, 8],
                [0.262, 7.019],
                [0.525, 6.176],
                [0.788, 5.47],
                [1.05, 4.903],
                [1.313, 4.473],
                [1.575, 4.181],
                [1.838, 4.026],
                [2.1, 4.01],
                [2.363, 4.131],
                [2.625, 4.391],
                [2.888, 4.788],
                [3.15, 5.323],
                [3.413, 5.995],
                [3.675, 6.806],
                [3.938, 7.754],
                [4.2, 8.84]
              ],
              etiket: "Q(x)",
              gizli: true
            },
            { id: "k1", tip: "nokta", renk: 3, x: 3, y: 5, etiket: "1", gizli: true },
            { id: "k3", tip: "nokta", renk: 3, x: 1, y: 5, etiket: "−1", gizli: true }
          ],
          durumlar: [
            { metin: "Bu P(x) grafiği. x − 2'ye bölmek istiyoruz.", goster: ["p"] },
            { metin: "Sentetik bölmede kalan 0 çıkıyor: P(2) = 0. Grafik x = 2'de eksene değer.", goster: ["k2"] },
            { metin: "Bölüm Q(x) = x² − 1, yani P(x) = (x − 2)·Q(x).", goster: ["q"] },
            { metin: "Q'nun kökleri −1 ve 1, P'nin kalan kökleridir: P(x) = (x − 2)(x − 1)(x + 1).", goster: ["k1", "k3"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "x³ − 7x + 6 polinomunun çarpanlarını bul",
          durum: "x − 1'in bir çarpan olduğu söyleniyor. x² terimi eksik: katsayılar 1, 0, −7, 6 ve a = 1.",
          adimlar: [
            "1'i indir; 0 + 1 = 1; −7 + 1 = −6; 6 + (−6) = 0.",
            "Kalan 0 olduğu için x − 1 gerçekten çarpandır. Bölüm x² + x − 6.",
            "x² + x − 6 = (x + 3)(x − 2)."
          ],
          sonuc: "x³ − 7x + 6 = (x − 1)(x + 3)(x − 2); kökler 1, −3, 2. Sınavda böyle yaz: *Since the remainder is 0, x − 1 is a factor of P.*"
        }
      ]
    },
    {
      baslik: "Bağlam: kutu boyutları",
      kisa: "Hacim = taban × yükseklik; hacmi yüksekliğe bölünce taban alanı çıkar.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Hacmi V(x) = x³ + 6x² + 11x + 6 olan çikolata kutusunun yüksekliği x + 1",
          durum: "Taban alanını ve taban kenarlarını bul.",
          adimlar: [
            "Taban alanı = V ÷ yükseklik. x + 1 = x − (−1), yani a = −1.",
            "Katsayılar 1, 6, 11, 6: 1'i indir; 6 + (−1) = 5; 11 + (−5) = 6; 6 + (−6) = 0.",
            "Bölüm x² + 5x + 6 (kalan 0), yani taban alanı bu.",
            "x² + 5x + 6 = (x + 2)(x + 3): taban kenarları x + 2 ve x + 3."
          ],
          sonuc: "Kutunun boyutları (x + 1), (x + 2) ve (x + 3). Kontrol: x = 1 için 2·3·4 = 24 ve V(1) = 1 + 6 + 11 + 6 = 24."
        },
        {
          tip: "not",
          metin: "Alan ve hacim problemlerinde bölüm de bir uzunluk ya da alandır; kalan 0 çıkması beklenir. Sınavda böyle yaz: *The volume is length times width times height, so the base area is V(x) divided by the height.*"
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
            "Bölme algoritması: P(x) = D(x)·Q(x) + R(x); R = 0 ya da deg R < deg D.",
            "Bölümün derecesi deg P − deg D'dir.",
            "Uzun bölme: böl, çarp, çıkar, indir; kalanın derecesi bölenden küçük olunca dur.",
            "Eksik terimlere 0 yaz (x³ + 0x² − 4x + 3 gibi); çıkarırken işareti değiştirmeyi unutma.",
            "Sentetik bölme yalnızca x − a için: x + 3 ise a = −3. Son sayı kalan, öncekiler bölümün katsayılarıdır.",
            "2x − 4 ya da 3x − 6 gibi bölenlerde başkatsayıyı dışarı al, 2(x − 2) yaz; kalan aynı, bölüm başkatsayıya bölünür. x² − 1 gibi bölenler uzun bölmeyle ya da iki kez sentetikle bölünür.",
            "Kalan 0 ise bölen çarpandır ve grafik o noktada x eksenine değer.",
            "Sonucu *quotient* ve *remainder* kelimeleriyle yaz: P(x) = D(x)Q(x) + R(x)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A polynomial P(x) is divided by a polynomial D(x) of degree 2, and the remainder R(x) is not zero. Which statement about R(x) must be true?",
      opts: ["Its degree is at least 2", "Its degree is at most 1", "It is always a constant", "Its degree equals the degree of P(x)"],
      a: 1,
      why: "Kalanın derecesi bölenin derecesinden küçük olmak zorundadır: 2'den küçük, yani 1 ya da 0. C yanlıştır; bölen ikinci derece ise kalan birinci derece de olabilir (örneğin −5x + 3)."
    },
    {
      q: "What is the remainder when x⁴ − 3x² + 2x + 5 is divided by x − 2?",
      opts: ["5", "9", "−3", "13"],
      a: 3,
      why: "x³ eksik, katsayısı 0 olarak yazılır: 1, 0, −3, 2, 5. a = 2 ile: 1, 2, 1, 4, 13. Kalan 13. A şıkkı 0'ı yazmayı unutup 1, −3, 2, 5 ile bölünce çıkan 5'tir."
    },
    {
      q: "What are the quotient and the remainder of (x³ + 2x² − 5x − 6) ÷ (x + 1)?",
      opts: [
        "Quotient x² + x − 6, remainder 0",
        "Quotient x² + 3x − 2, remainder −8",
        "Quotient x² + 2x − 3, remainder 0",
        "Quotient x² − x − 6, remainder 0"
      ],
      a: 0,
      why: "x + 1 = x − (−1) olduğu için a = −1: 1; 2 − 1 = 1; −5 − 1 = −6; −6 + 6 = 0. B şıkkı a = 1 almanın sonucudur."
    },
    {
      q: "A rectangular garden has area 2x² + 3x − 2 m², and one of its sides is (2x − 1) m. How long is the other side, in meters?",
      opts: ["2x + 4", "x − 2", "x + 2", "2x + 2"],
      a: 2,
      why: "Alan = kenar × kenar. (2x − 1)(x + 2) = 2x² + 4x − x − 2 = 2x² + 3x − 2. A şıkkı x − ½ ile sentetik bölmenin sonucudur; 2x − 1 = 2(x − ½) olduğu için ayrıca 2'ye bölmek gerekir."
    },
    {
      q: "The table shows the synthetic division of P(x) by (x − 3). Which statement is true?",
      fig: {
        type: "table",
        head: ["Row", "x³", "x²", "x", "constant"],
        rows: [["Coefficients", "1", "−2", "−5", "6"], ["Times a = 3", "", "3", "3", "−6"], ["Sum", "1", "1", "−2", "0"]],
        caption: "P(x) ÷ (x − 3)"
      },
      opts: ["The remainder is 1", "x − 3 is a factor and P(x) = (x − 3)(x² + x − 2)", "The quotient is x² − 2x − 5", "The remainder is 6"],
      a: 1,
      why: "Son sayı 0, yani kalan 0 ve x − 3 çarpandır. Bölümün katsayıları son satırın ilk üç sayısıdır: 1, 1, −2. C şıkkı katsayıları bölünenin satırından okur."
    }
  ]
};
