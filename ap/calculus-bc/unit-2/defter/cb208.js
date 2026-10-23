/* Kitpath not defteri · cb208 · 2.8 Çarpım Kuralı
   Kaynak: ap-videolar/src/episodes/cb208 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb208",
  amac: "Bu konu, iki fonksiyonun çarpımının türevini anlatıyor: (f·g)′ = f′g + fg′. Kuralın neden böyle olduğunu görecek, sonra fonksiyon, tablo, grafik ve teğet doğrusu sorularında kullanmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Çarpım kuralı nereden geliyor?",
      kisa: "İki kenar birlikte uzayınca alan iki şeritle artar; köşe kaybolur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Genişliği f, yüksekliği g olan dikdörtgenin alanı f·g",
          xlabel: "genişlik (f)",
          ylabel: "yükseklik (g)",
          xmax: 6,
          ymax: 5,
          xticks: [{ v: 4, label: "f = 4" }],
          yticks: [{ v: 3, label: "g = 3" }],
          ogeler: [
            { id: "A", tip: "alan", renk: 3, noktalar: [[0, 0], [4, 0], [4, 3], [0, 3]] },
            { id: "tA", tip: "yazi", x: 2, y: 1.5, metin: "f · g" },
            { id: "S1", tip: "alan", renk: 0, noktalar: [[4, 0], [5, 0], [5, 3], [4, 3]], gizli: true },
            { id: "t1", tip: "yazi", x: 4.5, y: 1.5, metin: "Δf · g", gizli: true },
            { id: "S2", tip: "alan", renk: 1, noktalar: [[0, 3], [4, 3], [4, 4], [0, 4]], gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 3.5, metin: "f · Δg", gizli: true },
            { id: "C", tip: "alan", renk: 2, noktalar: [[4, 3], [5, 3], [5, 4], [4, 4]], gizli: true },
            { id: "t3", tip: "yazi", x: 4.5, y: 3.5, metin: "Δf · Δg", gizli: true }
          ],
          durumlar: [
            { metin: "Genişliği f = 4, yüksekliği g = 3 olan dikdörtgen: alan f·g = 12." },
            { metin: "Genişlik Δf = 1 artınca sağa bir şerit eklenir: alanı Δf · g = 3.", goster: ["S1", "t1"] },
            { metin: "Yükseklik Δg = 1 artınca üste bir şerit eklenir: alanı f · Δg = 4.", goster: ["S2", "t2"] },
            { metin: "Köşedeki küçük kare iki küçük artışın çarpımı: Δf · Δg = 1.", goster: ["C", "t3"] },
            {
              metin: "Artışlar küçüldükçe köşe, şeritlerden çok daha hızlı yok olur (Δf · Δg → 0). Geriye iki şerit kalır: f′g + fg′.",
              set: {
                S1: { noktalar: [[4, 0], [4.25, 0], [4.25, 3], [4, 3]] },
                S2: { noktalar: [[0, 3], [4, 3], [4, 3.25], [0, 3.25]] },
                C: { noktalar: [[4, 3], [4.25, 3], [4.25, 3.25], [4, 3.25]] },
                t1: { x: 4.5, y: 1.5 },
                t2: { x: 2, y: 3.6 },
                t3: { x: 4.9, y: 3.6 }
              }
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "(f·g)′", alt: "çarpımın türevi" },
            "=",
            { t: "f′·g", alt: "genişlik şeridi" },
            "+",
            { t: "f·g′", alt: "yükseklik şeridi" }
          ],
          aciklama: "Köşedeki Δf·Δg limitte yok olur; geriye iki şerit kalır."
        }
      ]
    },
    {
      baslik: "Çarpım kuralı",
      kisa: "Birincinin türevi çarpı ikinci, artı birinci çarpı ikincinin türevi.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "✖️",
              terim: "Product rule",
              tr: "çarpım kuralı",
              tanim: "(f·g)′ = f′g + fg′. Birincinin türevi çarpı ikinci, artı birinci çarpı ikincinin türevi.",
              ornek: "(x²·x³)′ = 2x·x³ + x²·3x² = 5x⁴."
            },
            {
              ikon: "🧩",
              terim: "Factor",
              tr: "çarpan",
              tanim: "Çarpımın her bir parçası. Kuralda sırayla bir çarpanın türevini alır, öteki olduğu gibi bırakırsın.",
              ornek: "x³·sin x ifadesinin çarpanları x³ ve sin x."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kuralı x²·x³ ile sına",
          durum: "x²·x³ = x⁵ olduğundan türev 5x⁴ olmalı. Hangi yöntem bunu veriyor?",
          adimlar: [
            "Doğrudan: (x⁵)′ = 5x⁴.",
            "Türevleri çarpmak: (2x)(3x²) = 6x³. Uymuyor.",
            "Çarpım kuralı: (2x)(x³) + (x²)(3x²) = 2x⁴ + 3x⁴ = 5x⁴. Uyuyor."
          ],
          sonuc: "(f·g)′ = f′g + fg′, f′·g′ değil"
        },
        {
          tip: "tuzak",
          baslik: "f′·g′ değil",
          metin: "Her terimde yalnız bir çarpanın türevi alınır; diğeri olduğu gibi kalır.",
          yanlis: "(f·g)′ = f′·g′",
          dogru: "(f·g)′ = f′·g + f·g′"
        }
      ]
    },
    {
      baslik: "Fonksiyonlarla örnekler",
      kisa: "f ve g'yi belirle, türevlerini yaz, kalıba yerleştir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "y = x³ sin x",
          durum: "f = x³ ve g = sin x alalım.",
          adimlar: ["f = x³, f′ = 3x².", "g = sin x, g′ = cos x.", "y′ = f′g + fg′ = 3x² sin x + x³ cos x."],
          sonuc: "y′ = 3x² sin x + x³ cos x"
        },
        {
          tip: "ornek",
          baslik: "y = eˣ ln x",
          durum: "f = eˣ ve g = ln x alalım.",
          adimlar: ["f = eˣ, f′ = eˣ.", "g = ln x, g′ = 1/x.", "y′ = eˣ ln x + eˣ·(1/x)."],
          sonuc: "y′ = eˣ ln x + eˣ/x"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "✂️",
              terim: "Simplify",
              tr: "sadeleştirmek",
              tanim: "Sonucu ortak çarpanla toplamak isteğe bağlıdır. Sınavda sadeleştirmeden de tam puan alırsın.",
              ornek: "eˣ ln x + eˣ/x = eˣ(ln x + 1/x)."
            }
          ]
        }
      ]
    },
    {
      baslik: "Tablodan türev değeri",
      kisa: "Doğru satırı seç; f(a) ile f′(a)'yı karıştırma.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🗂️",
              terim: "Table of values",
              tr: "değer tablosu",
              tanim: "x, f, f′, g, g′ sütunlu tablo. Sorulan x'in satırını seç; değerleri formüle yerleştir.",
              ornek: "x = 1 satırı: f = 3, f′ = 5, g = 2, g′ = −1."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Değer tablosu",
          head: ["x", "f(x)", "f′(x)", "g(x)", "g′(x)"],
          rows: [["1", "3", "5", "2", "−1"], ["4", "−2", "1", "6", "3"]]
        },
        {
          tip: "ornek",
          baslik: "h = f·g ve k = x²·g için tablodan oku",
          durum: "h′(1), h′(4) ve k′(4) değerlerini bul.",
          adimlar: [
            "h′(1) = f′(1)g(1) + f(1)g′(1) = (5)(2) + (3)(−1) = 10 − 3 = 7.",
            "h′(4) = f′(4)g(4) + f(4)g′(4) = (1)(6) + (−2)(3) = 6 − 6 = 0. İki terim +6 ve −6: birbirini götürür.",
            "k′(x) = 2x·g(x) + x²·g′(x). Bilinen çarpan x² ile de kural aynı.",
            "k′(4) = 2(4)(6) + (16)(3) = 48 + 48 = 96."
          ],
          sonuc: "h′(1) = 7, h′(4) = 0, k′(4) = 96"
        },
        {
          tip: "tuzak",
          baslik: "Doğru satır, doğru sütun",
          metin: "Her terimde bir çarpanın türevi (′ sütunu), öteki çarpanın değeri (düz sütun) gelir.",
          yanlis: "h′(1) = f(1)·g(1) + f′(1)·g′(1)",
          dogru: "h′(1) = f′(1)·g(1) + f(1)·g′(1)"
        }
      ]
    },
    {
      baslik: "Grafikten türev değeri",
      kisa: "Doğru parçasında türev, o parçanın eğimidir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📈",
              terim: "Line segment slope",
              tr: "doğru parçasının eğimi",
              tanim: "Grafik doğru parçasıysa türev o parçanın eğimidir. Değeri yükseklikten, türevi eğimden okursun.",
              ornek: "(0, 5)'ten (5, 0)'a inen doğrunun eğimi −1."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "f ve g doğru parçaları: x = 2'de h = f·g türevi",
          xlabel: "x",
          ylabel: "y",
          xmax: 5,
          ymax: 6,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [{ v: 0, label: "−1" }, { v: 1, label: "0" }, { v: 3, label: "2" }, { v: 5, label: "4" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 1], to: [5, 1] },
            { id: "F", tip: "cizgi", renk: 0, from: [0, 6], to: [5, 1], etiket: "f" },
            { id: "G", tip: "cizgi", renk: 2, from: [0, 0], to: [3, 6], etiket: "g" },
            { id: "V", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 6], gizli: true },
            { id: "P", tip: "nokta", renk: 1, x: 2, y: 4, etiket: "(2, 3)", gizli: true },
            { id: "sf", tip: "yazi", x: 3.8, y: 3.4, metin: "f′ = −1", gizli: true },
            { id: "sg", tip: "yazi", x: 0.9, y: 3.6, metin: "g′ = 2", gizli: true },
            { id: "rs", tip: "yazi", x: 3.7, y: 0.5, metin: "h′(2) = 3", gizli: true }
          ],
          durumlar: [
            {
              metin: "f: (0, 5)'ten (5, 0)'a inen doğru. g: (0, −1)'den (2, 3)'e (ve ötesine) çıkan doğru. Kesikli çizgi gerçek x ekseni."
            },
            { metin: "x = 2'de iki doğru da aynı yükseklikte: f(2) = 3 ve g(2) = 3.", goster: ["V", "P"] },
            { metin: "Doğru parçasında türev eğimdir: f′(2) = −1, g′(2) = 2.", goster: ["sf", "sg"] },
            { metin: "h = f·g ise h′(2) = f′(2)g(2) + f(2)g′(2) = (−1)(3) + (3)(2) = −3 + 6 = 3.", goster: ["rs"] }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "📍",
            baslik: "Değer (yükseklik)",
            maddeler: ["f(a), g(a): noktanın y değeri", "Çarpım kuralında öteki çarpan olarak gelir"]
          },
          sag: {
            ikon: "📈",
            baslik: "Eğim (türev)",
            maddeler: ["f′(a), g′(a): doğrunun eğimi", "Çarpım kuralında türevi alınan çarpan"]
          },
          oyun: [
            { metin: "f(2) = 3", cevap: "sol", neden: "x = 2'de f doğrusunun yüksekliği." },
            { metin: "f′(2) = −1", cevap: "sag", neden: "5 birim sağa gidince 5 iniyor: eğim −1." },
            { metin: "g(2) = 3", cevap: "sol", neden: "(2, 3) noktasının y koordinatı." },
            { metin: "g′(2) = 2", cevap: "sag", neden: "1 birim sağa gidince 2 çıkıyor: eğim 2." },
            { metin: "1 birim sağa gidince 2 birim yükselmek", cevap: "sag", neden: "Yükselme/gidiş oranı eğimdir." }
          ]
        }
      ]
    },
    {
      baslik: "Yalnızca işaret sorulursa",
      kisa: "Sıfır olan bir değer, bir terimi tamamen siler.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "±",
              terim: "Sign of the derivative",
              tr: "türevin işareti",
              tanim: "Türevin pozitif ya da negatif olması fonksiyonun arttığını ya da azaldığını söyler. Bazı sorular sayı değil yalnız işaret ister.",
              ornek: "h′(3) < 0 ise h, x = 3'te azalıyor."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "h = f·g: h′(3) pozitif mi negatif mi?",
          durum: "f'nin grafiği x = 3'te x eksenini yukarıdan aşağı kesiyor. g(3) = 2 ve g artıyor.",
          adimlar: [
            "Eksenden yukarıdan aşağı kesmek: f(3) = 0 ve f′(3) < 0.",
            "h′(3) = f′(3)·g(3) + f(3)·g′(3).",
            "f(3) = 0 olduğu için ikinci terim tamamen sıfır; g′(3)'ü bilmeye gerek yok.",
            "Kalan terim: f′(3)·g(3) = (negatif)(pozitif) = negatif."
          ],
          sonuc: "h′(3) < 0 (negatif)"
        },
        {
          tip: "tuzak",
          baslik: "Sıfırı ara",
          metin: "İşaret sorularında önce sıfır olan değeri ara; bir terim tamamen düşebilir.",
          yanlis: "g′(3)'ün işareti bilinmeden cevap verilemez.",
          dogru: "f(3) = 0 ise ikinci terim silinir; yalnız f′(3)·g(3) kalır."
        }
      ]
    },
    {
      baslik: "Teğet doğrusu",
      kisa: "Nokta g'den, eğim çarpım kuralıyla g′'den gelir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "x = a'daki teğet: y − g(a) = g′(a)(x − a). Eğim için çarpım kuralını kullanırsın.",
              ornek: "g(3) = −9 ve g′(3) = 12 ise y + 9 = 12(x − 3)."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "g(x) = x²·f(x), x = 3'teki teğet",
          durum: "f(3) = −1 ve f′(3) = 2 veriliyor.",
          adimlar: [
            "Nokta: g(3) = 3²·f(3) = 9·(−1) = −9.",
            "Türev: g′(x) = 2x·f(x) + x²·f′(x).",
            "Eğim: g′(3) = 6·(−1) + 9·2 = −6 + 18 = 12.",
            "Nokta-eğim biçimi: y − (−9) = 12(x − 3)."
          ],
          sonuc: "y + 9 = 12(x − 3)"
        }
      ]
    },
    {
      baslik: "Üç çarpan ve sabit kat",
      kisa: "Üç çarpanda üç terim; sabit çarpan varsa kurala gerek yok.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "(f·g·k)′" },
            "=",
            { t: "f′·g·k", alt: "f'nin türevi" },
            "+",
            { t: "f·g′·k", alt: "g'nin türevi" },
            "+",
            { t: "f·g·k′", alt: "k'nin türevi" }
          ],
          aciklama: "Her terimde bir çarpanın türevi alınır, diğer ikisi olduğu gibi kalır."
        },
        {
          tip: "ornek",
          baslik: "x·eˣ·sin x'in türevi",
          durum: "Üç çarpan: x, eˣ ve sin x.",
          adimlar: ["x'in türevi: 1·eˣ·sin x = eˣ sin x.", "eˣ'in türevi: x·eˣ·sin x.", "sin x'in türevi: x·eˣ·cos x."],
          sonuc: "eˣ sin x + x eˣ sin x + x eˣ cos x"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔒",
              terim: "Constant multiple",
              tr: "sabit çarpan",
              tanim: "Çarpanlardan biri sabitse çarpım kuralına gerek yok: sabiti dışarı al. (3fg)′ = 3(f′g + fg′).",
              ornek: "(5x²)′ = 5 · 2x = 10x."
            }
          ]
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
            "(f·g)′ = f′g + fg′: birincinin türevi çarpı ikinci, artı birinci çarpı ikincinin türevi.",
            "Türevleri çarpmak yanlış: (f·g)′ ≠ f′·g′. Her terimde yalnız bir çarpanın türevi var.",
            "Tabloda x'in satırını seç; f(a) ile f′(a)'yı karıştırma.",
            "Grafikte doğru parçasının değeri yüksekliktir, türevi eğimidir.",
            "İşaret sorularında sıfır olan değeri ara: f(a) = 0 ise bir terim düşer.",
            "Teğet: nokta g(a)'dan, eğim çarpım kuralıyla g′(a)'dan gelir.",
            "Üç çarpanda üç terim; sabit çarpan dışarı alınır: (3fg)′ = 3(f′g + fg′).",
            "Sadeleştirme isteğe bağlıdır."
          ]
        }
      ]
    }
  ]
};
