/* Kitora not defteri · pc201 · 2.1 İkinci Dereceden Denklemler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Exam hedefleri) + MEB 10. sınıf. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc201",
  amac: "Bu konu ikinci dereceden denklemleri çözmeyi anlatıyor. Çarpanlara ayırmayı, tam kare tamamlamayı, kök formülünü ve diskriminantın kök sayısını nasıl belirlediğini; ayrıca sınavda çözümü İngilizce nasıl yazacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "İkinci dereceden denklem nedir?",
      kisa: "ax² + bx + c = 0 (a ≠ 0) denkleminin en fazla iki gerçek kökü vardır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "ax² + bx + c = 0", alt: "standart biçim (*standard form*), a ≠ 0" },
            "→",
            { t: "x₁, x₂", alt: "kökler (*roots*)" }
          ],
          aciklama: "Sınavda böyle yaz: *A quadratic equation has at most two real roots.*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔢",
              terim: "Quadratic equation",
              tr: "ikinci dereceden denklem",
              tanim: "Bilinmeyenin en büyük kuvveti 2 olan denklem; a ≠ 0 olmalı.",
              ornek: "x² − 5x + 6 = 0."
            },
            {
              ikon: "🎯",
              terim: "Root / solution / zero",
              tr: "kök / çözüm / sıfır",
              tanim: "Denklemi sağlayan x değeri. Grafikte parabolün x eksenini kestiği noktanın x'i.",
              ornek: "x² − 5x + 6 = 0 için 2 ve 3."
            },
            {
              ikon: "📋",
              terim: "Standard form",
              tr: "standart biçim",
              tanim: "Her şeyi bir tarafa toplayıp diğer tarafı 0 yapmak.",
              ornek: "x² = 5x − 6 → x² − 5x + 6 = 0."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Standart biçime getir ve çöz",
          durum: "x(x + 1) = 3x + 8 denklemini çöz.",
          adimlar: [
            "Parantezi aç: x² + x = 3x + 8.",
            "Hepsini sola topla: x² + x − 3x − 8 = 0 → x² − 2x − 8 = 0.",
            "Çarpanlara ayır: (x − 4)(x + 2) = 0.",
            "x − 4 = 0 ya da x + 2 = 0 → x = 4 ya da x = −2.",
            "Kontrol: x = 4 → 4·5 = 20 ve 12 + 8 = 20 ✓. x = −2 → (−2)(−1) = 2 ve −6 + 8 = 2 ✓."
          ],
          sonuc: "Çözüm kümesi {−2, 4}. Sınavda böyle yaz: *The solutions are x = −2 and x = 4.*"
        }
      ]
    },
    {
      baslik: "Çarpanlara ayırarak çözmek",
      kisa: "Çarpım sıfırsa çarpanlardan biri sıfırdır: her çarpanı sıfıra eşitle.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Çarpanlara ayırma kalıpları",
          head: ["Kalıp", "Denklem", "Çözüm"],
          rows: [
            ["Ortak çarpan", "x² − 4x = 0", "x(x − 4) = 0 → x = 0, 4"],
            ["İki kare farkı", "x² − 9 = 0", "(x − 3)(x + 3) = 0 → x = ±3"],
            [
              "Tam kare",
              "x² + 6x + 9 = 0",
              "(x + 3)² = 0 → x = −3 (çift kök)"
            ],
            [
              "x² + bx + c",
              "x² − 5x + 6 = 0",
              "toplamı −5, çarpımı 6: (x − 2)(x − 3) → x = 2, 3"
            ],
            [
              "ax² + bx + c, a ≠ 1",
              "2x² + 7x + 3 = 0",
              "(2x + 1)(x + 3) → x = −1/2, −3"
            ]
          ],
          not: "Sınavda böyle yaz: *Factor the left side, then set each factor equal to zero.*"
        },
        {
          tip: "ornek",
          baslik: "İki zor kalıp",
          durum: "2x² + 7x + 3 = 0 ve x(x − 3) = 10 denklemlerini çöz.",
          adimlar: [
            "2x² + 7x + 3: a·c = 6. Çarpımı 6, toplamı 7 olan sayılar: 1 ve 6.",
            "Ortadaki terimi böl: 2x² + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3).",
            "2x + 1 = 0 ya da x + 3 = 0 → x = −1/2 ya da x = −3.",
            "x(x − 3) = 10 → x² − 3x − 10 = 0 → (x − 5)(x + 2) = 0 → x = 5 ya da x = −2.",
            "Kontrol: 5·2 = 10 ✓ ve (−2)(−5) = 10 ✓."
          ],
          sonuc: "{−3, −1/2} ve {−2, 5}."
        },
        {
          tip: "tuzak",
          metin: "Sıfır çarpım kuralı yalnızca çarpım 0'a eşitken çalışır.",
          yanlis: "(x − 1)(x + 2) = 4 ise x − 1 = 4 ya da x + 2 = 4.",
          dogru: "Önce sağ tarafı 0 yap: x² + x − 2 = 4 → x² + x − 6 = (x + 3)(x − 2) = 0 → x = −3 ya da 2. Ayrıca x² = 5x'te x'e bölme: x = 0 çözümü kaybolur; x(x − 5) = 0 yaz."
        }
      ]
    },
    {
      baslik: "Tam kare tamamlamak",
      kisa: "x² + bx ifadesine (b/2)² ekleyip kök alarak çöz.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Tam kare tamamlama",
          adimlar: [
            { baslik: "1. x²'nin katsayısını 1 yap", metin: "Bütün denklemi a'ya böl." },
            { baslik: "2. Sabiti sağa at", metin: "x² + bx = −c." },
            { baslik: "3. İki yana (b/2)² ekle", metin: "Sol taraf tam kare olur: (x + b/2)²." },
            { baslik: "4. Kök al, ± koy", metin: "x + b/2 = ±√(sağ taraf), sonra x'i bul." }
          ]
        },
        {
          tip: "ornek",
          baslik: "İki denklem",
          durum: "x² + 6x − 1 = 0 ve 2x² + 8x − 10 = 0.",
          adimlar: [
            "x² + 6x = 1. (6/2)² = 9 ekle: x² + 6x + 9 = 10 → (x + 3)² = 10.",
            "x + 3 = ±√10 → x = −3 ± √10.",
            "İkincide a = 2: 2'ye böl: x² + 4x − 5 = 0 → x² + 4x = 5.",
            "(4/2)² = 4 ekle: x² + 4x + 4 = 9 → (x + 2)² = 9 → x + 2 = ±3.",
            "x = 1 ya da x = −5. Kontrol: 2 + 8 − 10 = 0 ✓ ve 50 − 40 − 10 = 0 ✓."
          ],
          sonuc: "{−3 − √10, −3 + √10} ve {−5, 1}. Sınavda böyle yaz: *Complete the square by adding (b/2)² to both sides.*"
        },
        {
          tip: "tuzak",
          metin: "Kök alırken ±, ekleme yaparken iki yan.",
          yanlis: "(x − 3)² = 5 → x − 3 = √5 → x = 3 + √5.",
          dogru: "x − 3 = ±√5 → x = 3 ± √5, iki kök. (b/2)² yalnızca bir yana eklenirse denge bozulur: iki yana ekle."
        }
      ]
    },
    {
      baslik: "Kök formülü",
      kisa: "Her ikinci dereceden denklem x = (−b ± √Δ)/2a ile çözülür.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "x", alt: "bilinmeyen" },
            "=",
            { t: "(−b ± √(b² − 4ac)) / 2a", alt: "Δ = b² − 4ac" }
          ],
          aciklama: "Formül, tam kare tamamlamanın genel hâlidir. Sınavda böyle yaz: *Use the quadratic formula x = (−b ± √(b² − 4ac)) / 2a.*"
        },
        {
          tip: "ornek",
          baslik: "Formülle iki denklem",
          durum: "2x² − 3x − 2 = 0 ve x² + 2x − 2 = 0.",
          adimlar: [
            "2x² − 3x − 2: a = 2, b = −3, c = −2. Δ = (−3)² − 4·2·(−2) = 9 + 16 = 25.",
            "x = (3 ± 5)/4 → x = 2 ya da x = −1/2. (2x + 1)(x − 2) = 2x² − 3x − 2 ✓.",
            "x² + 2x − 2: a = 1, b = 2, c = −2. Δ = 4 + 8 = 12, √12 = 2√3.",
            "x = (−2 ± 2√3)/2 = −1 ± √3."
          ],
          sonuc: "{−1/2, 2} ve {−1 − √3, −1 + √3}."
        },
        {
          tip: "tuzak",
          metin: "Formülde en çok yapılan iki hata.",
          yanlis: "b = −3 iken −b = −3 ve yalnızca √Δ, 2a'ya bölünür.",
          dogru: "−b = −(−3) = +3. Payın tamamı (−b ± √Δ) 2a'ya bölünür."
        }
      ]
    },
    {
      baslik: "Diskriminant: kök sayısı",
      kisa: "Diskriminantın işareti kök sayısını söyler: iki, bir ya da hiç.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Parabolü yukarı kaydırırken kökler ne olur?",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 14,
          xticks: [
            { v: 1, label: "−1" },
            { v: 3, label: "1" },
            { v: 4, label: "2" },
            { v: 5, label: "3" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 3, label: "−2" },
            { v: 7, label: "2" },
            { v: 9, label: "4" },
            { v: 11, label: "6" },
            { v: 13, label: "8" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [6, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [2, 0], to: [2, 14], etiket: "y" },
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0.5, 7.25], [1, 5], [1.5, 3.25], [2, 2], [2.5, 1.25], [3, 1],
                [3.5, 1.25], [4, 2], [4.5, 3.25], [5, 5], [5.5, 7.25]
              ],
              renk: 0,
              etiket: "f"
            },
            { id: "r1", tip: "nokta", x: 1, y: 5, etiket: "x = −1", renk: 2 },
            { id: "r2", tip: "nokta", x: 5, y: 5, etiket: "x = 3", renk: 2 }
          ],
          durumlar: [
            {
              metin: "x² − 2x − 3 = 0: Δ = 4 + 12 = 16 > 0. Parabol x eksenini iki noktada kesiyor: ==iki farklı gerçek kök== (−1 ve 3)."
            },
            {
              metin: "Parabolü yukarı kaydır: x² − 2x + 1 = 0, Δ = 4 − 4 = 0. İki kök birleşti: x = 1, parabol eksene ==teğet== (çift kök).",
              set: {
                c: {
                  noktalar: [
                    [0.5, 11.25], [1, 9], [1.5, 7.25], [2, 6], [2.5, 5.25], [3, 5],
                    [3.5, 5.25], [4, 6], [4.5, 7.25], [5, 9], [5.5, 11.25]
                  ]
                },
                r1: { x: 3, etiket: "x = 1" },
                r2: { x: 3, etiket: "" }
              }
            },
            {
              metin: "Biraz daha yukarı: x² − 2x + 3 = 0, Δ = 4 − 12 = −8 < 0. Parabol eksenin üstünde kaldı: ==gerçek kök yok==.",
              set: {
                c: {
                  noktalar: [
                    [0.5, 13.25], [1, 11], [1.5, 9.25], [2, 8], [2.5, 7.25], [3, 7],
                    [3.5, 7.25], [4, 8], [4.5, 9.25], [5, 11], [5.5, 13.25]
                  ]
                }
              },
              gizle: ["r1", "r2"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Diskriminant tablosu",
          head: ["Δ", "Gerçek kök", "Parabol", "Örnek"],
          rows: [
            ["Δ > 0", "iki farklı", "x eksenini iki noktada keser", "x² − 2x − 3: Δ = 16"],
            ["Δ = 0", "bir çift kök", "x eksenine teğet", "x² − 2x + 1: Δ = 0"],
            ["Δ < 0", "yok (iki karmaşık kök)", "x eksenine hiç değmez", "x² − 2x + 3: Δ = −8"]
          ],
          not: "a, b, c tam sayı ve Δ tam kare ise kökler rasyoneldir. Sınavda böyle yaz: *Since Δ < 0, the equation has no real roots.*"
        },
        {
          tip: "ornek",
          baslik: "Parametreli diskriminant",
          durum: "Üç soru: (a) x² + kx + 9 = 0 çift köklü, (b) x² − 4x + k = 0 iki farklı gerçek köklü, (c) mx² − 4x + 1 = 0 gerçek köksüz.",
          adimlar: [
            "(a) Δ = k² − 36 = 0 → k = 6 ya da k = −6.",
            "(b) Δ = 16 − 4k > 0 → k < 4.",
            "(c) m ≠ 0 ve Δ = 16 − 4m < 0 → m > 4.",
            "Kontrol (a): k = 6 → x² + 6x + 9 = (x + 3)² ✓ çift kök x = −3."
          ],
          sonuc: "(a) k = ±6, (b) k < 4, (c) m > 4."
        },
        {
          tip: "tuzak",
          metin: "Δ < 0 demek \"kök yok\" demek değil.",
          yanlis: "Δ < 0 ise denklemin hiç çözümü yoktur.",
          dogru: "Gerçek sayılar içinde çözüm yoktur; iki karmaşık kök vardır. Sınavda *no real roots* yaz."
        }
      ]
    },
    {
      baslik: "Yöntem seçimi ve özel denklemler",
      kisa: "Önce kolay yolu dene; olmazsa kök formülü her zaman çalışır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Hangi yöntem?",
          head: ["Denklem", "İlk bakışta", "Yöntem"],
          rows: [
            ["x² = 16, (x − 2)² = 9", "x'in tek ifadesi kare", "kök al, ± koy"],
            ["x² − 5x = 0", "c = 0", "ortak çarpan"],
            [
              "x² − 5x + 6 = 0",
              "küçük tam sayılarla çarpanlanıyor",
              "çarpanlara ayır"
            ],
            ["x² + 6x + 4 = 0", "çarpanlar belli değil", "formül ya da tam kare"],
            ["x⁴ − 5x² + 4 = 0", "x² tekrarlanıyor", "u = x² değişken değiştirme"]
          ]
        },
        {
          tip: "ornek",
          baslik: "Doğrudan kök ve değişken değiştirme",
          durum: "(x − 2)² = 9 ve x⁴ − 5x² + 4 = 0 denklemlerini çöz.",
          adimlar: [
            "(x − 2)² = 9 → x − 2 = ±3 → x = 5 ya da x = −1.",
            "x⁴ − 5x² + 4 = 0'da u = x² yaz: u² − 5u + 4 = 0 → (u − 1)(u − 4) = 0.",
            "u = 1 ya da u = 4.",
            "x² = 1 → x = ±1 ve x² = 4 → x = ±2.",
            "Kontrol: x = 2 → 16 − 20 + 4 = 0 ✓."
          ],
          sonuc: "{−1, 5} ve {−2, −1, 1, 2}. Sınavda böyle yaz: *Let u = x². Then the equation becomes u² − 5u + 4 = 0.*"
        }
      ]
    },
    {
      baslik: "Sözel problemler",
      kisa: "Bilinmeyeni seç, denklemi kur, çöz ve anlamsız kökü ele.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Okul bahçesi",
          durum: "Dikdörtgen bir bahçenin çevresi 28 m, alanı 48 m². Kenarları kaç metre?",
          adimlar: [
            "Kısa kenar x olsun. Çevre 28 → x + diğer kenar = 14, diğer kenar 14 − x.",
            "Alan: x(14 − x) = 48 → 14x − x² = 48 → x² − 14x + 48 = 0.",
            "(x − 6)(x − 8) = 0 → x = 6 ya da x = 8.",
            "x = 6 ise diğer kenar 8; x = 8 ise diğer kenar 6: aynı bahçe.",
            "Kontrol: 6 + 8 = 14 ✓, 6·8 = 48 ✓."
          ],
          sonuc: "Kenarlar 6 m ve 8 m."
        },
        {
          tip: "ornek",
          baslik: "Sınıf afişi",
          durum: "Bir afişin uzunluğu genişliğinden 3 cm fazla ve alanı 70 cm². Boyutlar?",
          adimlar: [
            "Genişlik x, uzunluk x + 3. Alan: x(x + 3) = 70.",
            "x² + 3x − 70 = 0 → (x + 10)(x − 7) = 0.",
            "x = −10 ya da x = 7.",
            "Genişlik negatif olamaz: x = −10 elenir.",
            "Genişlik 7, uzunluk 10. Kontrol: 7·10 = 70 ✓."
          ],
          sonuc: "Afiş 7 cm × 10 cm. Sınavda böyle yaz: *We reject x = −10 because a length cannot be negative.*"
        },
        {
          tip: "tuzak",
          metin: "Kökleri bağlama oturtmadan cevap verme.",
          yanlis: "İki kökün ikisi de her zaman cevaptır.",
          dogru: "Uzunluk, süre, sayı gibi nicelikler için negatif ya da anlamsız kökü ele; cevabı birimiyle yaz."
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
            "ax² + bx + c = 0, a ≠ 0; en fazla iki gerçek kök. Önce standart biçime getir.",
            "Çarpanlara ayırma: sağ taraf 0 olmalı; her çarpanı sıfıra eşitle.",
            "Tam kare: a'ya böl, (b/2)² iki yana ekle, kök alırken ±.",
            "Formül: x = (−b ± √(b² − 4ac)) / 2a; −b ve payın tamamı 2a'ya bölünür.",
            "Δ = b² − 4ac: Δ > 0 iki kök, Δ = 0 çift kök (teğet), Δ < 0 gerçek kök yok.",
            "Yöntem: önce kök alma / ortak çarpan / çarpanlara ayırma, olmazsa formül; x⁴ biçiminde u = x².",
            "Problem: değişkeni seç, denklem kur, anlamsız kökü ele, kontrol et.",
            "Cümle: *The equation has two distinct real roots because Δ > 0.*"
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "2x² − 5x − 3 = 0 denkleminin çözüm kümesi nedir?",
      opts: ["{−1/2, 3}", "{−3, 1/2}", "{1/2, 3}", "{−3, −1/2}"],
      a: 0,
      why: "Δ = 25 + 24 = 49 → x = (5 ± 7)/4 → x = 3 ya da x = −1/2. Çarpanlarla: (2x + 1)(x − 3) = 2x² − 5x − 3 ✓. B seçeneği, köklerin işaretlerinin ters alınmış hâli; formülde −b = +5 olduğunu unutmamak gerekir."
    },
    {
      q: "x² − 6x + k = 0 denkleminin çift kökü vardır. k ve kök kaçtır?",
      opts: ["k = 9, x = −3", "k = 9, x = 3", "k = 6, x = 3", "k = 36, x = 6"],
      a: 1,
      why: "Çift kök için Δ = 36 − 4k = 0 → k = 9. Denklem x² − 6x + 9 = (x − 3)² = 0, kök x = 3. A seçeneği kökün işaretini ters almış; D seçeneği b² = 36 sayısını k sanmış."
    },
    {
      q: "Bir topun yerden yüksekliği h(t) = −5t² + 20t (metre, t saniye) olarak veriliyor. Top, fırlatıldıktan kaç saniye sonra yere iner?",
      opts: ["2", "5", "20", "4"],
      a: 3,
      why: "Yere iniş: h(t) = 0 → −5t(t − 4) = 0 → t = 0 (fırlatma anı) ya da t = 4. Cevap 4 saniye. 2 saniye, topun en yüksek noktaya çıktığı andır (tepe noktası); en çekici yanlış cevap."
    },
    {
      q: "x² − 8x + 5 = 0 denklemi tam kare tamamlama ile (x − p)² = q biçimine getirilirse p + q kaçtır?",
      opts: ["9", "15", "11", "21"],
      a: 1,
      why: "x² − 8x = −5 → (8/2)² = 16 ekle: (x − 4)² = 11. p = 4, q = 11, p + q = 15. 21 cevabı, 16 + 5 = 21'i q sanmaktır (sabit sağa atılırken işareti değişmeli: −5 + 16)."
    },
    {
      q: "Tabloda f(x) = x² − 4x − 5 fonksiyonunun değerleri veriliyor. f(x) = −8 denkleminin çözüm kümesi nedir?",
      fig: {
        type: "table",
        head: ["x", "−1", "0", "1", "2", "3", "4", "5"],
        rows: [
          ["f(x)", "0", "−5", "−8", "−9", "−8", "−5", "0"]
        ],
        caption: "f(x) = x² − 4x − 5"
      },
      opts: ["{−1, 5}", "{−8}", "{1, 3}", "{2}"],
      a: 2,
      why: "f(x) = −8 olan x'leri bul: tabloda f(1) = −8 ve f(3) = −8; çözüm {1, 3}. Cebirle: x² − 4x − 5 = −8 → x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0 ✓. A seçeneği f(x) = 0 çözümü; soruyu yanlış okumak."
    }
  ]
};
