/* Kitora not defteri · pc303 · 3.3 Kalan ve Çarpan Teoremi
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus, Unit 3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc303",
  amac: "Bu konu polinom bölmesinin iki kısa yolunu anlatıyor: Kalan Teoremi bölmeden kalanı P(a) olarak verir, Çarpan Teoremi ise P(a) = 0 ise x − a'nın çarpan olduğunu söyler. Kökleri bulmak ve bilinmeyen katsayıyı çözmek için kullanacaksın.",
  bolumler: [
    {
      baslik: "Kalan Teoremi (*Remainder Theorem*)",
      kisa: "P(x)'i x − a'ya bölünce kalan P(a)'dır; bölmeye gerek yok.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "P(x) ÷ (x − a)", alt: "bölme" }, "⇒", { t: "kalan", alt: "*remainder*" }, "=", { t: "P(a)", alt: "x yerine a yaz" }],
          aciklama: "Sınavda böyle yaz: *By the Remainder Theorem, the remainder is P(a).*"
        },
        {
          tip: "adimlar",
          baslik: "Neden böyle?",
          adimlar: [
            { baslik: "Bölme algoritması", metin: "P(x) = (x − a)·Q(x) + R. Bölen birinci derece olduğu için kalan R bir sayıdır." },
            { baslik: "x yerine a yaz", metin: "P(a) = (a − a)·Q(a) + R = 0 + R." },
            { baslik: "Sonuç", metin: "R = P(a): kalan, polinomun x = a'daki değeridir." }
          ]
        },
        {
          tip: "ornek",
          baslik: "P(x) = 2x³ − x² − 7x + 6 için kalanları bul",
          durum: "x − 2 ve x + 1 ile bölünürse kalanlar nedir?",
          adimlar: [
            "x − 2 için a = 2: P(2) = 16 − 4 − 14 + 6 = 4.",
            "x + 1 = x − (−1) için a = −1: P(−1) = −2 − 1 + 7 + 6 = 10.",
            "Kontrol: 3.2'de uzun bölmeyle (x − 2) için kalanı 4 bulmuştuk."
          ],
          sonuc: "Kalanlar 4 ve 10. Bölme yapmadan, tek bir yerine koymayla bulundu."
        },
        {
          tip: "grafik",
          baslik: "Kalan, grafiğin x = a'daki yüksekliğidir",
          xlabel: "",
          ylabel: "",
          xmax: 6,
          ymax: 14,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" },
            { v: 7, label: "4" },
            { v: 8, label: "5" },
            { v: 9, label: "6" },
            { v: 10, label: "7" },
            { v: 11, label: "8" },
            { v: 12, label: "9" },
            { v: 13, label: "10" },
            { v: 14, label: "11" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [6, 3], etiket: "x" },
            { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 14], etiket: "y" },
            {
              id: "p",
              tip: "egri",
              renk: 2,
              noktalar: [
                [0.9, 0.768],
                [1.175, 6.288],
                [1.45, 10],
                [1.725, 12.154],
                [2, 13],
                [2.275, 12.787],
                [2.55, 11.765],
                [2.825, 10.184],
                [3.1, 8.292],
                [3.375, 6.34],
                [3.65, 4.577],
                [3.925, 3.252],
                [4.2, 2.616],
                [4.475, 2.917],
                [4.75, 4.406],
                [5.025, 7.332],
                [5.3, 11.944]
              ],
              etiket: "P(x)",
              gizli: true
            },
            { id: "a2", tip: "nokta", renk: 0, x: 5, y: 7, etiket: "P(2) = 4", kilavuz: true, gizli: true },
            { id: "a3", tip: "nokta", renk: 1, x: 2, y: 13, etiket: "P(−1) = 10", kilavuz: true, gizli: true },
            { id: "a1", tip: "nokta", renk: 3, x: 4, y: 3, etiket: "P(1) = 0", gizli: true }
          ],
          durumlar: [
            { metin: "P(x) = 2x³ − x² − 7x + 6'nın grafiği.", goster: ["p"] },
            { metin: "x − 2 ile bölünce kalan P(2) = 4: grafiğin x = 2'deki yüksekliği.", goster: ["a2"] },
            { metin: "x + 1 ile bölünce kalan P(−1) = 10: x = −1'deki yükseklik.", goster: ["a3"] },
            { metin: "x − 1 ile bölünce kalan P(1) = 0. Yükseklik 0: grafik x eksenini keser, x − 1 çarpandır.", goster: ["a1"] }
          ]
        }
      ]
    },
    {
      baslik: "Bölen ax − b olduğunda",
      kisa: "ax − b ile bölünce kalan P(b/a); önce bölenin kökünü bul.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "P(x) = 4x³ − 2x² + 3x − 1 polinomunun 2x − 1'e bölümünden kalan",
          durum: "Bölenin kökünü bulup P'de yerine yaz.",
          adimlar: ["Bölenin kökü: 2x − 1 = 0 ⇒ x = ½.", "P(½) = 4·⅛ − 2·¼ + 3·½ − 1.", "= ½ − ½ + 3/2 − 1 = ½."],
          sonuc: "Kalan ½. Sınavda böyle yaz: *The remainder is P(1/2) = 1/2.*"
        },
        {
          tip: "tuzak",
          metin: "Kalan teoremi bölenin ==kökünü== kullanır. Bölen x + 4 ise a = −4; 2x + 6 ise önce x = −3 bulunur.",
          yanlis: "x + 4'e bölünce kalan P(4)'tür.",
          dogru: "x + 4 = x − (−4) olduğu için kalan P(−4)'tür."
        }
      ]
    },
    {
      baslik: "Çarpan Teoremi (*Factor Theorem*)",
      kisa: "P(a) = 0 ise x − a çarpandır; kalan 0, tam bölünme demektir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "P(a) = 0", alt: "kalan sıfır" }, "⇔", { t: "x − a çarpan", alt: "bölünme tam" }, "⇔", { t: "x = a kök", alt: "grafik eksene değer" }],
          aciklama: "Üçü birbirinin yerine kullanılır. Sınavda böyle yaz: *By the Factor Theorem, x − a is a factor of P because P(a) = 0.*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧱",
              terim: "Factor",
              tr: "çarpan",
              tanim: "P(x)'i kalansız bölen ifade; x − a biçiminde.",
              ornek: "x − 2, x² − 4'ün bir çarpanıdır."
            },
            {
              ikon: "🔑",
              terim: "Root / zero",
              tr: "kök / sıfır",
              tanim: "P(a) = 0 yapan a değeri; P(x) = 0 denkleminin çözümü.",
              ornek: "x² − 4'ün kökleri 2 ve −2."
            },
            {
              ikon: "📍",
              terim: "x-intercept",
              tr: "x kesişimi",
              tanim: "Grafiğin x eksenini kestiği (a, 0) noktası; a bir köktür.",
              ornek: "(2, 0) ve (−2, 0)."
            }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "✅", baslik: "Çarpandır", maddeler: ["P(a) = 0 ise", "Kalan 0'dır, tam bölünür"] },
          sag: { ikon: "❌", baslik: "Çarpan değildir", maddeler: ["P(a) ≠ 0 ise", "Kalan sıfırdan farklıdır"] },
          oyun: [
            { metin: "P(x) = x³ − 2x² − 5x + 6 için x − 1", cevap: "sol", neden: "P(1) = 1 − 2 − 5 + 6 = 0." },
            { metin: "P(x) = x³ − 2x² − 5x + 6 için x − 2", cevap: "sag", neden: "P(2) = 8 − 8 − 10 + 6 = −4 ≠ 0." },
            { metin: "P(x) = x³ − 2x² − 5x + 6 için x + 2", cevap: "sol", neden: "P(−2) = −8 − 8 + 10 + 6 = 0." },
            { metin: "P(x) = x³ − 2x² − 5x + 6 için x + 1", cevap: "sag", neden: "P(−1) = −1 − 2 + 5 + 6 = 8 ≠ 0." },
            { metin: "P(x) = x³ − 2x² − 5x + 6 için x − 3", cevap: "sol", neden: "P(3) = 27 − 18 − 15 + 6 = 0." }
          ]
        },
        {
          tip: "ornek",
          baslik: "P(x) = x³ + 3x² − 4x − 12'yi çarpanlarına ayır",
          durum: "x + 2'nin çarpan olup olmadığını dene.",
          adimlar: [
            "P(−2) = −8 + 12 + 8 − 12 = 0: x + 2 çarpandır.",
            "Sentetik bölme (a = −2): 1; 3 − 2 = 1; −4 − 2 = −6; −12 + 12 = 0.",
            "Bölüm x² + x − 6 = (x + 3)(x − 2)."
          ],
          sonuc: "P(x) = (x + 2)(x + 3)(x − 2); kökler −2, −3 ve 2. Aynı polinomu 3.1'de gruplayarak da ayırmıştık."
        }
      ]
    },
    {
      baslik: "Rasyonel Kök Teoremi (*Rational Root Theorem*)",
      kisa: "Olası rasyonel kökler p/q'dur: p sabit terimin, q başkatsayının böleni.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "p", alt: "sabit terimin böleni" }, "÷", { t: "q", alt: "başkatsayının böleni" }, "⇒", { t: "±p/q", alt: "olası rasyonel kök" }],
          aciklama: "Liste yalnızca adayları verir; her adayı P(a) ile denemek gerekir. Sınavda böyle yaz: *List the possible rational roots.*"
        },
        {
          tip: "ornek",
          baslik: "P(x) = 2x³ + x² − 13x + 6'nın köklerini bul",
          durum: "Sabit terim 6 (p: ±1, ±2, ±3, ±6), başkatsayı 2 (q: ±1, ±2).",
          adimlar: [
            "Adaylar p/q: ±1, ±2, ±3, ±6, ±½, ±3/2.",
            "P(1) = 2 + 1 − 13 + 6 = −4 ≠ 0. P(2) = 16 + 4 − 26 + 6 = 0: x − 2 çarpandır.",
            "Sentetik bölme (a = 2): 2; 1 + 4 = 5; −13 + 10 = −3; 6 − 6 = 0. Bölüm 2x² + 5x − 3.",
            "2x² + 5x − 3 = (2x − 1)(x + 3)."
          ],
          sonuc: "P(x) = (x − 2)(2x − 1)(x + 3); kökler 2, ½ ve −3. Sınavda böyle yaz: *The roots of P are 2, 1/2 and −3.*"
        },
        {
          tip: "tuzak",
          metin: "Liste yalnızca rasyonel kökleri yakalar; √2 gibi ya da karmaşık kökler listede çıkmaz. Sabit terim 0 ise önce x'i çarpan olarak dışarı al.",
          yanlis: "p/q listesindeki her sayı bir köktür.",
          dogru: "Liste yalnızca adaydır; P(a) = 0 çıkanlar köktür."
        }
      ]
    },
    {
      baslik: "Bilinmeyen katsayıyı bulma",
      kisa: "Kalan ya da çarpan koşulunu P(a)'ya yaz ve denklemi çöz.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "x − 2, P(x) = x³ + kx² − 4x + 4'ün çarpanı ise k kaçtır?",
          durum: "Çarpan koşulu: P(2) = 0.",
          adimlar: ["P(2) = 8 + 4k − 8 + 4 = 4k + 4.", "4k + 4 = 0 ⇒ k = −1."],
          sonuc: "k = −1. Kontrol: x³ − x² − 4x + 4 = (x − 1)(x − 2)(x + 2)."
        },
        {
          tip: "ornek",
          baslik: "P(x) = x² + ax + b; x − 1'e bölününce kalan 5, x + 2'ye bölününce kalan −1",
          durum: "a ve b'yi bul.",
          adimlar: ["P(1) = 1 + a + b = 5 ⇒ a + b = 4.", "P(−2) = 4 − 2a + b = −1 ⇒ −2a + b = −5.", "Taraf tarafa çıkar: 3a = 9 ⇒ a = 3, sonra b = 1."],
          sonuc: "a = 3 ve b = 1. Kontrol: P(1) = 1 + 3 + 1 = 5 ve P(−2) = 4 − 6 + 1 = −1."
        },
        {
          tip: "liste",
          maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz", metin: "*Find the value of k such that x − 2 is a factor of P(x).*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz", metin: "*Find the remainder when P(x) is divided by x + 1.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz", metin: "*Show that x − 3 is a factor of P(x).*" }
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
            "Kalan Teoremi: P(x)'i x − a'ya bölünce kalan P(a)'dır.",
            "x + 3 ise a = −3; ax − b ise a yerine bölenin kökü b/a alınır.",
            "Çarpan Teoremi: P(a) = 0 ⇔ x − a çarpan ⇔ x = a kök.",
            "Kalan 0 ise tam bölünür: sentetik bölmeyle kalan çarpan çıkar, sonra çarpanlara ayır.",
            "Rasyonel Kök Teoremi: olası kökler p/q (p sabit terimin, q başkatsayının böleni); adaylar tek tek denenir.",
            "Bilinmeyen katsayıda koşulu P(a)'ya yaz: çarpansa P(a) = 0, kalan r ise P(a) = r.",
            "İki koşul varsa iki denklem çıkar; taraf tarafa çıkararak ya da yerine koyarak çöz.",
            "Sınavda *remainder*, *factor* ve *root* sözcüklerini doğru kullan."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "P(x) = x³ − 2x² + x − 5 polinomunun x − 2 ile bölümünden kalan kaçtır?",
      opts: ["3", "−3", "−5", "1"],
      a: 1,
      why: "Kalan Teoremi: P(2) = 8 − 8 + 2 − 5 = −3. A şıkkı işareti ters çevirir; C, P(0)'ı yani sabit terimi verir."
    },
    {
      q: "P(x) = x⁴ − 3x² + 2x + 1 polinomunun x + 2 ile bölümünden kalan kaçtır?",
      opts: ["9", "−7", "3", "1"],
      a: 3,
      why: "x + 2 = x − (−2) olduğundan kalan P(−2) = 16 − 12 − 4 + 1 = 1. A şıkkı P(2) = 9'dur; bölenin işaretini karıştırmanın sonucudur."
    },
    {
      q: "Bir kutunun hacmi V(x) = x³ + kx² − 2x − 6 cm³ ve yüksekliği (x + 1) cm. Hacim yüksekliğe tam bölünüyorsa (kalan 0) k kaçtır?",
      opts: ["5", "−5", "7", "−7"],
      a: 0,
      why: "Kalan 0 ise P(−1) = 0: −1 + k + 2 − 6 = k − 5 = 0, yani k = 5. C şıkkı x + 1 için P(1) = 0 yazınca çıkan 7'dir; a = −1 alınmalıydı."
    },
    {
      q: "Tablo, bir P(x) polinomunun bazı değerlerini veriyor. Hangisi doğrudur?",
      fig: {
        type: "table",
        head: ["x", "−2", "−1", "0", "1", "2", "3"],
        rows: [["P(x)", "0", "8", "6", "0", "−4", "0"]],
        caption: "P(x) polinomunun değerleri"
      },
      opts: ["x − 2 bir çarpandır", "P(x)'in x + 1 ile bölümünden kalan 8'dir", "x − 3 bir çarpan değildir", "P(x)'in x ile bölümünden kalan 0'dır"],
      a: 1,
      why: "x + 1 = x − (−1), kalan P(−1) = 8. A yanlış: P(2) = −4 ≠ 0. C yanlış: P(3) = 0, yani x − 3 çarpandır. D yanlış: x ile bölümden kalan P(0) = 6'dır."
    },
    {
      q: "2x³ − 3x² − 3x + 2 polinomunun olası rasyonel kökü ==olmayan== hangisidir?",
      opts: ["½", "−2", "3/2", "−1"],
      a: 2,
      why: "p sabit terim 2'nin böleni (±1, ±2), q başkatsayı 2'nin böleni (±1, ±2). Adaylar ±1, ±2, ±½. 3/2'nin payı 3, 2'nin böleni olmadığı için aday bile olamaz."
    }
  ]
};
