/* Kitora not defteri · pc102 · 1.2 Fonksiyonlarda İşlemler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Exam hedefleri) + MEB 10. sınıf. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc102",
  amac: "Bu konu fonksiyonlarla işlem yapmayı anlatıyor. Toplama, çıkarma, çarpma ve bölmeyi, iki fonksiyonun toplamının grafiğini, bileşke fonksiyonu ve onun özelliklerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Fonksiyonlarla dört işlem",
      kisa: "Aynı x için çıktılar toplanır, çıkarılır, çarpılır ya da bölünür.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Dört işlem",
          head: ["İşlem", "Tanım", "Domain"],
          rows: [
            ["Toplam (*sum*)", "(f + g)(x) = f(x) + g(x)", "D_f ∩ D_g"],
            ["Fark (*difference*)", "(f − g)(x) = f(x) − g(x)", "D_f ∩ D_g"],
            ["Çarpım (*product*)", "(f · g)(x) = f(x) · g(x)", "D_f ∩ D_g"],
            ["Bölüm (*quotient*)", "(f/g)(x) = f(x) / g(x)", "D_f ∩ D_g ve g(x) ≠ 0"]
          ],
          not: "D_f ∩ D_g: iki fonksiyonun da tanımlı olduğu ortak x'ler."
        },
        {
          tip: "ornek",
          baslik: "f(x) = 2x + 1 ve g(x) = x − 3",
          durum: "Dört işlemi yapıp x = 4'te kontrol et.",
          adimlar: [
            "(f + g)(x) = (2x + 1) + (x − 3) = 3x − 2.",
            "(f − g)(x) = (2x + 1) − (x − 3) = x + 4. Parantez önemli: −(x − 3) = −x + 3.",
            "(f · g)(x) = (2x + 1)(x − 3) = 2x² − 6x + x − 3 = 2x² − 5x − 3.",
            "(f/g)(x) = (2x + 1)/(x − 3), x ≠ 3.",
            "Kontrol x = 4: f(4) = 9, g(4) = 1. Toplam 10 = 3·4 − 2 ✓. Çarpım 9 = 2·16 − 20 − 3 ✓."
          ],
          sonuc: "(f + g)(x) = 3x − 2, (f − g)(x) = x + 4, (f · g)(x) = 2x² − 5x − 3, (f/g)(x) = (2x + 1)/(x − 3). Sınavda böyle yaz: *(f + g)(x) means f(x) + g(x).*"
        }
      ]
    },
    {
      baslik: "İşlemlerin tanım kümesi",
      kisa: "Ortak domain'e bak; bölümde paydayı sıfır yapan x'leri at.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Domain kısıtları",
          head: ["Durum", "Kısıt", "Örnek"],
          rows: [
            ["Kesir", "payda ≠ 0", "1/(x − 2): x ≠ 2"],
            ["Çift dereceden kök", "kökün içi ≥ 0", "√(x − 5): x ≥ 5"],
            ["Bölüm f/g", "ortak domain ve g(x) ≠ 0", "g(x) = 0 olan x atılır"],
            ["Tek dereceden kök", "kısıt yok", "∛x: ℝ"]
          ]
        },
        {
          tip: "ornek",
          baslik: "İki kökün işlemleri",
          durum: "f(x) = √(x + 1), g(x) = √(4 − x). f + g, f · g, f/g ve g/f'nin domain'leri?",
          adimlar: [
            "D_f: x + 1 ≥ 0 → x ≥ −1, yani [−1, ∞).",
            "D_g: 4 − x ≥ 0 → x ≤ 4, yani (−∞, 4].",
            "Kesişim: [−1, 4]. f + g ve f · g bu aralıkta tanımlı.",
            "f/g için g(x) ≠ 0: g(4) = 0 olduğundan 4 atılır → [−1, 4).",
            "g/f için f(x) ≠ 0: f(−1) = 0 olduğundan −1 atılır → (−1, 4]."
          ],
          sonuc: "D(f+g) = D(f·g) = [−1, 4], D(f/g) = [−1, 4), D(g/f) = (−1, 4]. Sınavda böyle yaz: *The domain of f/g excludes the values where g(x) = 0.*"
        },
        {
          tip: "tuzak",
          metin: "Domain'i, sadeleştirmeden ÖNCE belirle.",
          yanlis: "f(x) = x² − 4, g(x) = x − 2 için (f/g)(x) = x + 2 olduğundan domain ℝ'dir.",
          dogru: "g(2) = 0 olduğundan domain ℝ∖{2}. Sadeleştirmek x = 2'yi geri getirmez."
        }
      ]
    },
    {
      baslik: "İki fonksiyonun toplamının grafiği",
      kisa: "Toplam grafiğinin yüksekliği, aynı x'teki iki yüksekliğin toplamıdır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "İki grafiği toplamak: yükseklikleri topla",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 8,
          xticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 3, label: "−2" },
            { v: 7, label: "2" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [6, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 8], etiket: "y" },
            { id: "f", tip: "cizgi", from: [1, 3], to: [5, 7], renk: 0, etiket: "f" },
            {
              id: "g",
              tip: "egri",
              noktalar: [
                [1, 3], [1.25, 3.938], [1.5, 4.75], [1.75, 5.438], [2, 6], [2.25, 6.438],
                [2.5, 6.75], [2.75, 6.938], [3, 7], [3.25, 6.938], [3.5, 6.75], [3.75, 6.438],
                [4, 6], [4.25, 5.438], [4.5, 4.75], [4.75, 3.938], [5, 3]
              ],
              renk: 1,
              etiket: "g"
            },
            {
              id: "h",
              tip: "egri",
              noktalar: [
                [1, 1], [1.25, 2.188], [1.5, 3.25], [1.75, 4.188], [2, 5], [2.25, 5.688],
                [2.5, 6.25], [2.75, 6.688], [3, 7], [3.25, 7.188], [3.5, 7.25], [3.75, 7.188],
                [4, 7], [4.25, 6.688], [4.5, 6.25], [4.75, 5.688], [5, 5]
              ],
              renk: 2,
              etiket: "f+g",
              gizli: true
            },
            { id: "fa", tip: "nokta", x: 2, y: 4, renk: 0, gizli: true },
            { id: "ga", tip: "nokta", x: 2, y: 6, renk: 1, gizli: true },
            { id: "sa", tip: "nokta", x: 2, y: 5, etiket: "(−1, 0)", renk: 2, gizli: true },
            { id: "c1", tip: "nokta", x: 4, y: 6, renk: 0, gizli: true },
            { id: "sb", tip: "nokta", x: 4, y: 7, etiket: "(1, 2)", renk: 2, gizli: true },
            { id: "fc", tip: "nokta", x: 5, y: 7, renk: 0, gizli: true },
            { id: "gc", tip: "nokta", x: 5, y: 3, renk: 1, gizli: true },
            { id: "sc", tip: "nokta", x: 5, y: 5, etiket: "(2, 0)", renk: 2, gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x (mavi) ve g(x) = 2 − x² (yeşil). (f + g)'nin grafiği nasıl olur?" },
            {
              metin: "x = −1: f(−1) = −1 aşağıda, g(−1) = 1 yukarıda. Toplam −1 + 1 = 0, yeni nokta (−1, 0).",
              goster: ["fa", "ga", "sa"]
            },
            {
              metin: "x = 1: f(1) = 1 ve g(1) = 1 (grafikler burada kesişiyor). Toplam 2: nokta (1, 2).",
              goster: ["c1", "sb"]
            },
            { metin: "x = 2: f(2) = 2, g(2) = −2. Toplam 0: nokta (2, 0).", goster: ["fc", "gc", "sc"] },
            {
              metin: "Her x için yükseklikleri toplarsak ==(f + g)(x) = −x² + x + 2== eğrisi çıkar. Kökleri tam da bulduğumuz −1 ve 2.",
              goster: ["h"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Aynı toplam, tablo olarak",
          head: ["x", "−2", "−1", "0", "1", "2"],
          rows: [
            ["f(x) = x", "−2", "−1", "0", "1", "2"],
            ["g(x) = 2 − x²", "−2", "1", "2", "1", "−2"],
            ["(f + g)(x)", "−4", "0", "2", "2", "0"]
          ],
          vurgu: 2,
          not: "Üçüncü satır, ilk iki satırın sütun sütun toplamı. Sınavda böyle yaz: *To graph f + g, add the y-values of f and g at each x.*"
        }
      ]
    },
    {
      baslik: "Bileşke fonksiyon",
      kisa: "(f∘g)(x) = f(g(x)): önce içteki g, sonra dıştaki f çalışır.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Kantin zinciri",
          adimlar: [
            { baslik: "x tost alırsın: g(x) = 2x", metin: "Tost 2 TL. 4 tost için g(4) = 8 TL." },
            { baslik: "Kupon kullanırsın: f(t) = t − 5", metin: "Ödediğin tutardan 5 TL düşer: f(8) = 3 TL." },
            {
              baslik: "İkisini birleştir: (f∘g)(x) = f(g(x)) = 2x − 5",
              metin: "Önce g (içte), sonra f (dışta). Sağdan sola oku."
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔗",
              terim: "Composite function",
              tr: "bileşke fonksiyon",
              tanim: "Bir fonksiyonun çıktısını, ikincinin girdisi yapmak: (f∘g)(x) = f(g(x)).",
              ornek: "Önce tost fiyatı, sonra kupon indirimi."
            },
            {
              ikon: "🎚️",
              terim: "Inner / outer function",
              tr: "iç / dış fonksiyon",
              tanim: "f(g(x)) ifadesinde g **iç**, f **dış** fonksiyondur; önce iç hesaplanır.",
              ornek: "√(x − 4) için iç: x − 4, dış: √."
            },
            {
              ikon: "🪞",
              terim: "Identity function",
              tr: "birim fonksiyon",
              tanim: "I(x) = x: girdiyi olduğu gibi verir; bileşkede etkisiz elemandır.",
              ornek: "(f∘I)(x) = f(x)."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = x² + 1 ve g(x) = 2x − 3",
          durum: "f∘g ve g∘f'yi bul, x = 2'de değerlerini karşılaştır.",
          adimlar: [
            "(f∘g)(x) = f(2x − 3) = (2x − 3)² + 1 = 4x² − 12x + 9 + 1 = 4x² − 12x + 10.",
            "(g∘f)(x) = g(x² + 1) = 2(x² + 1) − 3 = 2x² − 1.",
            "(f∘g)(2) = f(g(2)) = f(1) = 2. Formül: 16 − 24 + 10 = 2 ✓.",
            "(g∘f)(2) = g(f(2)) = g(5) = 7. Formül: 8 − 1 = 7 ✓.",
            "2 ≠ 7: f∘g ile g∘f genelde farklıdır."
          ],
          sonuc: "(f∘g)(x) = 4x² − 12x + 10 ve (g∘f)(x) = 2x² − 1. Sınavda böyle yaz: *(f∘g)(2) = f(g(2)) = f(1) = 2.*"
        },
        {
          tip: "ikili",
          sol: { ikon: "🔗", baslik: "Bileşke (f∘g)", maddeler: ["İç içe yazılır: f(g(x))", "Önce g uygulanır"] },
          sag: {
            ikon: "✖️",
            baslik: "Çarpım (f · g)",
            maddeler: [
              "İki değer çarpılır: f(x) · g(x)",
              "İkisi de aynı x'ten başlar"
            ]
          },
          oyun: [
            {
              metin: "f(g(2)) hesapla: önce g(2)'yi bul.",
              cevap: "sol",
              neden: "İçteki g önce uygulanır: bileşke."
            },
            { metin: "f(2) · g(2) hesapla.", cevap: "sag", neden: "İki ayrı değer çarpılıyor: çarpım." },
            {
              metin: "(2x − 3)² + 1 ifadesi: g'nin çıktısı f'ye girdi.",
              cevap: "sol",
              neden: "g(x) = 2x − 3, f'nin içine yazılmış: bileşke."
            },
            {
              metin: "(x² + 1)(2x − 3) ifadesi.",
              cevap: "sag",
              neden: "İki ifade yan yana çarpılmış: çarpım."
            }
          ]
        }
      ]
    },
    {
      baslik: "Bileşkenin tanım kümesi",
      kisa: "x, g'nin domain'inde olmalı ve g(x) de f'nin domain'inde olmalı.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "x ∈ D_g", alt: "önce g tanımlı olmalı" },
            "ve",
            { t: "g(x) ∈ D_f", alt: "çıktısı f'ye girebilmeli" }
          ],
          aciklama: "Sınavda böyle yaz: *The domain of f∘g is the set of x in the domain of g such that g(x) is in the domain of f.*"
        },
        {
          tip: "ornek",
          baslik: "√x ve x − 4",
          durum: "f(x) = √x ve g(x) = x − 4. İki bileşkeyi ve domain'lerini bul.",
          adimlar: [
            "(f∘g)(x) = f(x − 4) = √(x − 4). Kökün içi ≥ 0 → x ≥ 4. Domain [4, ∞).",
            "(g∘f)(x) = g(√x) = √x − 4. Burada yalnızca √x tanımlı olmalı → x ≥ 0. Domain [0, ∞).",
            "Aynı iki fonksiyon, sıra değişince farklı domain verdi."
          ],
          sonuc: "D(f∘g) = [4, ∞) ve D(g∘f) = [0, ∞)."
        },
        {
          tip: "tuzak",
          metin: "Sadeleşmiş sonuca bakıp domain'i tahmin etme.",
          yanlis: "f(x) = x², g(x) = √x için (f∘g)(x) = (√x)² = x olduğundan domain ℝ'dir.",
          dogru: "g(x) = √x yalnızca x ≥ 0 için tanımlı. Domain [0, ∞)."
        }
      ]
    },
    {
      baslik: "Bileşkenin özellikleri",
      kisa: "Bileşke birleşmelidir, genelde değişmeli değildir, birim fonksiyon etkisizdir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Üç özellik",
          head: ["Özellik", "Yazılışı", "Doğru mu?"],
          rows: [
            ["*Associative* (birleşme)", "(f∘g)∘h = f∘(g∘h)", "Her zaman doğru"],
            ["*Commutative* (değişme)", "f∘g = g∘f", "Genelde yanlış"],
            ["*Identity* (birim)", "f∘I = I∘f = f, I(x) = x", "Her zaman doğru"]
          ],
          not: "Sınavda böyle yaz: *Composition is associative but, in general, not commutative.*"
        },
        {
          tip: "ornek",
          baslik: "f(x) = x + 1, g(x) = 2x, h(x) = x²",
          durum: "Üç özelliği sayılarla doğrula.",
          adimlar: [
            "Birleşme: (f∘g)(x) = 2x + 1; bunu h ile bileşkele: ((f∘g)∘h)(x) = 2x² + 1. Öbür gruplama: (g∘h)(x) = 2x², (f∘(g∘h))(x) = 2x² + 1. Aynı: x = 3 için 19.",
            "Sayıyla: h(3) = 9, g(9) = 18, f(18) = 19. Üç fonksiyonu içten dışa uygulamak yeterli.",
            "Değişme: (f∘g)(x) = 2x + 1 ama (g∘f)(x) = 2(x + 1) = 2x + 2. Farklı.",
            "Birim: (f∘I)(x) = f(I(x)) = f(x) = x + 1; I'nın etkisi yok."
          ],
          sonuc: "Birleşme ve birim özelliği çalışıyor; değişme çalışmıyor."
        },
        {
          tip: "ikili",
          sol: { ikon: "✅", baslik: "Her zaman doğru", maddeler: ["Birleşme", "Birim fonksiyonla bileşke"] },
          sag: { ikon: "⚠️", baslik: "Genelde yanlış", maddeler: ["Sıra değiştirmek", "Bileşkeyi çarpım sanmak"] },
          oyun: [
            { metin: "(f∘g)∘h = f∘(g∘h)", cevap: "sol", neden: "Gruplama sonucu değiştirmez: birleşme." },
            { metin: "f∘g = g∘f", cevap: "sag", neden: "f(x) = x + 1, g(x) = 2x için 2x + 1 ≠ 2x + 2." },
            { metin: "f∘I = f", cevap: "sol", neden: "I(x) = x girdiyi aynen bırakır." },
            {
              metin: "f(g(x)) = f(x) · g(x)",
              cevap: "sag",
              neden: "Bileşke iç içe yazmaktır, çarpım değildir."
            }
          ]
        }
      ]
    },
    {
      baslik: "Tablo ve grafikten bileşke",
      kisa: "Önce içteki fonksiyonun değerini bul, sonra onu dıştakine sok.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "f ve g tabloları",
          head: ["x", "1", "2", "3", "4"],
          rows: [
            ["f(x)", "3", "1", "4", "2"],
            ["g(x)", "2", "3", "4", "1"]
          ]
        },
        {
          tip: "ornek",
          baslik: "Tablodan bileşke değerleri",
          durum: "Yukarıdaki tabloyu kullanarak değerleri bul.",
          adimlar: [
            "(f∘g)(1) = f(g(1)) = f(2) = 1.",
            "(g∘f)(1) = g(f(1)) = g(3) = 4.",
            "(f∘f)(1) = f(f(1)) = f(3) = 4.",
            "(g∘g)(4) = g(g(4)) = g(1) = 2.",
            "(f∘g)(x) = 2 olsun: f(g(x)) = 2 için g(x) = 4 gerekir (f(4) = 2). g(3) = 4 olduğundan x = 3."
          ],
          sonuc: "Grafikte de aynı: önce x'ten g'nin grafiğine, çıkan y'yi f'nin x'i yap. Sınavda böyle yaz: *From the table, g(1) = 2, so (f∘g)(1) = f(2) = 1.*"
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
            "(f ± g)(x) = f(x) ± g(x), (f · g)(x) = f(x) · g(x), (f/g)(x) = f(x)/g(x) ve g(x) ≠ 0.",
            "Toplam, fark, çarpım için domain D_f ∩ D_g; bölümde ayrıca g(x) = 0 olan x'ler atılır.",
            "Domain'i sadeleştirmeden önce belirle.",
            "(f + g)'nin grafiği: her x'te iki yüksekliği topla.",
            "(f∘g)(x) = f(g(x)): içten dışa, önce g.",
            "D(f∘g) = x ∈ D_g ve g(x) ∈ D_f.",
            "Bileşke birleşmelidir, genelde değişmeli değildir, birim fonksiyon etkisizdir.",
            "Tablo ya da grafikten bileşke: önce iç fonksiyonun değerini oku."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "f(x) = x² − 1 ve g(x) = x + 3 için (f∘g)(2) kaçtır?",
      opts: ["6", "8", "15", "24"],
      a: 3,
      why: "(f∘g)(2) = f(g(2)) = f(5) = 25 − 1 = 24. 6, ters sıradaki (g∘f)(2) = g(3) değeri; 8 toplam (f + g)(2) = 3 + 5; 15 ise çarpım f(2)·g(2) = 3·5. En çekici yanlış 6'dır: bileşkede sırayı karıştırmak."
    },
    {
      q: "f(x) = √(x − 2) ve g(x) = 1/(x − 5) için (f · g)(x) fonksiyonunun domain'i nedir?",
      opts: ["[2, ∞)", "[2, 5) ∪ (5, ∞)", "(2, ∞)", "ℝ ∖ {5}"],
      a: 1,
      why: "f için x − 2 ≥ 0 → x ≥ 2. g için x ≠ 5. Çarpımın domain'i ikisinin kesişimi: [2, 5) ∪ (5, ∞). A seçeneği f'nin domain'i; g'nin 5'te tanımsız olduğu unutulmuş. D seçeneği ise g'nin domain'i, f'nin kısıtı yok sayılmış."
    },
    {
      q: "Tabloda f ve g veriliyor. (g∘f)(3) + (f∘g)(3) kaçtır?",
      fig: {
        type: "table",
        head: ["x", "1", "2", "3", "4"],
        rows: [
          ["f(x)", "3", "1", "4", "2"],
          ["g(x)", "2", "3", "4", "1"]
        ],
        caption: "f ve g"
      },
      opts: ["3", "2", "4", "6"],
      a: 0,
      why: "(g∘f)(3) = g(f(3)) = g(4) = 1. (f∘g)(3) = f(g(3)) = f(4) = 2. Toplam 1 + 2 = 3. Tabloda içteki fonksiyonun değerini bulup dıştakine sokmak gerekir; f(3) + g(3) = 8 gibi doğrudan toplamak yanlış olurdu."
    },
    {
      q: "Hangisi f, g ve h fonksiyonlarının her seçimi için doğrudur?",
      opts: ["f∘g = g∘f", "(f∘g)(x) = f(x) · g(x)", "(f∘g)∘h = f∘(g∘h)", "(f∘g)(x) = g(f(x))"],
      a: 2,
      why: "Bileşke birleşme özelliğine sahiptir: gruplama sonucu değiştirmez. A ve D değişme özelliğini ima eder; bu genelde yanlıştır (f(x) = x + 1, g(x) = 2x için 2x + 1 ≠ 2x + 2). B bileşkeyi çarpımla karıştırır."
    },
    {
      q: "Grafikte f doğrusu (0, 1) ve (4, 5) noktalarından, g doğrusu (0, 5) ve (4, 1) noktalarından geçiyor. (f + g)(x)'in grafiği nasıl olur?",
      fig: {
        type: "graph",
        xlabel: "x",
        ylabel: "y",
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
          { v: 3, label: "3" },
          { v: 5, label: "5" }
        ],
        lines: [
          { from: [0, 1], to: [4, 5], label: "f" },
          { from: [0, 5], to: [4, 1], label: "g", color: 1 }
        ]
      },
      opts: [
        "Eğimi 2 olan bir doğru",
        "y = 6 yatay doğrusu",
        "İki doğrunun kesiştiği tek bir nokta",
        "x = 2'de kırılan V biçimi"
      ],
      a: 1,
      why: "f(x) = x + 1 ve g(x) = 5 − x. Toplam (f + g)(x) = 6, her x için aynı: yatay doğru y = 6. Eğimler +1 ve −1 olduğundan birbirini götürür. C seçeneği çekici: f ve g (2, 3)'te kesişir, ama bu toplamın grafiğiyle ilgisizdir."
    }
  ]
};
