/* Kitora not defteri · pc104 · 1.4 Fonksiyon Grafiklerini Okumak
   Kaynak: öğretmenin ders sunumu (Unit#1_4 Analyzing Graphs of Functions) + Exam 1 objectives; ders notuyla aynı terim ve gösterim. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc104",
  amac: "Bu konu bir fonksiyonun grafiğini okumayı anlatıyor. Grafikten domain ve range'i, artan ve azalan aralıkları ve eksenleri kestiği noktaları bulmayı, aralık gösterimini ve sınavda cevabı İngilizce nasıl yazacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Aralık gösterimi ve grafik dili",
      kisa: "Köşeli parantez uç noktayı dahil eder, yuvarlak parantez dahil etmez.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Aralık yazımı",
          head: ["Yazım", "Anlamı", "Örnek"],
          rows: [
            ["[a, b]", "a ≤ x ≤ b: iki uç dahil (●—●)", "[−4, 6]"],
            ["(a, b)", "a < x < b: iki uç hariç (○—○)", "(−3, 5)"],
            [
              "[a, b)",
              "a ≤ x < b: sol uç dahil, sağ uç hariç",
              "[0, 4)"
            ],
            ["(a, ∞)", "x > a: sonsuza giden aralık", "(2, ∞)"],
            ["(−∞, b]", "x ≤ b", "(−∞, 3]"],
            ["A ∪ B", "birleşim: \"ya A ya B\"", "(−∞, −1) ∪ (2, ∞)"]
          ],
          not: "∞ ve −∞ yanına her zaman yuvarlak parantez yazılır. Grafikte içi dolu nokta ● dahil, içi boş nokta ○ hariç demektir."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↔️",
              terim: "Domain",
              tr: "tanım kümesi",
              tanim: "Grafiğin x ekseninde kapladığı aralık: girdi olabilecek bütün x'ler.",
              ornek: "Grafik x = −4'ten 6'ya uzanıyorsa [−4, 6]."
            },
            {
              ikon: "↕️",
              terim: "Range",
              tr: "değer kümesi",
              tanim: "Grafiğin y ekseninde kapladığı aralık: çıkabilecek bütün y'ler.",
              ornek: "En alçak −4, en yüksek 2 ise [−4, 2]."
            },
            {
              ikon: "⭕",
              terim: "Zero / x-intercept",
              tr: "sıfır / x-kesişimi",
              tanim: "Grafiğin x eksenini kestiği noktalar: y = 0, yani f(x) = 0 çözümleri.",
              ornek: "(−3, 0), (−1, 0), (5, 0)."
            },
            {
              ikon: "📍",
              terim: "y-intercept",
              tr: "y-kesişimi",
              tanim: "Grafiğin y eksenini kestiği nokta: x = 0, yani (0, f(0)). En fazla bir tane olur.",
              ornek: "(0, −2)."
            },
            {
              ikon: "📈",
              terim: "Average rate of change",
              tr: "ortalama değişim hızı",
              tanim: "[a, b] aralığında (f(b) − f(a))/(b − a): (a, f(a)) ve (b, f(b)) noktalarını birleştiren sekant doğrusunun (*secant line*) eğimi.",
              ornek: "f(x) = x², [1, 3]: (9 − 1)/(3 − 1) = 4."
            }
          ]
        }
      ]
    },
    {
      baslik: "Grafikten tanım ve değer kümesi",
      kisa: "Domain x ekseninde, range y ekseninde grafiğin kapladığı aralıktır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Aynı grafikten domain ve range okumak",
          xlabel: "x",
          ylabel: "y",
          xmax: 12,
          ymax: 9,
          xticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" },
            { v: 10, label: "5" },
            { v: 11, label: "6" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [12, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [5, 0], to: [5, 9], etiket: "y" },
            { id: "s1", tip: "cizgi", from: [1, 3], to: [3, 7], renk: 0 },
            { id: "s2", tip: "cizgi", from: [3, 7], to: [6, 1], renk: 0 },
            { id: "s3", tip: "cizgi", from: [6, 1], to: [8, 1], renk: 0 },
            { id: "s4", tip: "cizgi", from: [8, 1], to: [11, 7], renk: 0 },
            { id: "e0", tip: "nokta", x: 1, y: 3, etiket: "(−4, −2)", renk: 0 },
            { id: "e1", tip: "nokta", x: 11, y: 7, etiket: "(6, 2)", renk: 0 },
            { id: "x1", tip: "cizgi", from: [1, 0], to: [1, 9], renk: 1, kesik: true, gizli: true },
            { id: "x2", tip: "cizgi", from: [11, 0], to: [11, 9], renk: 1, kesik: true, gizli: true },
            { id: "tx", tip: "yazi", x: 6, y: 8.3, metin: "x ∈ [−4, 6]", gizli: true },
            { id: "y1", tip: "cizgi", from: [0, 1], to: [12, 1], renk: 2, kesik: true, gizli: true },
            { id: "y2", tip: "cizgi", from: [0, 7], to: [12, 7], renk: 2, kesik: true, gizli: true },
            { id: "ty", tip: "yazi", x: 10.2, y: 0.4, metin: "y ∈ [−4, 2]", gizli: true }
          ],
          durumlar: [
            { metin: "Bu grafik bir fonksiyon (dikey doğru testini geçiyor). Domain ve range nedir?" },
            {
              metin: "Domain: grafik x ekseninde nereden nereye uzanıyor? En soldaki x = −4, en sağdaki x = 6. İki uç da dolu nokta, yani dahil: [−4, 6].",
              goster: ["x1", "x2", "tx"]
            },
            {
              metin: "Range: grafik y ekseninde nereden nereye? En alçak y = −4 (1 ile 3 arası), en yüksek y = 2. Range [−4, 2].",
              goster: ["y1", "y2", "ty"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "İçi boş uç nokta",
          durum: "Bir grafik (−3, 1) noktasında içi boş daireyle başlıyor, sürekli inip (0, −2)'ye varıyor, sonra yükselip (4, 3) noktasında dolu noktayla bitiyor.",
          adimlar: [
            "Domain: x = −3 hariç (boş nokta), x = 4 dahil (dolu nokta): (−3, 4].",
            "Range'in en alçağı −2 (dahil), en yükseği 3 (dahil).",
            "Başlangıçtaki y = 1 değeri boş noktada alınmıyor, ama grafik −2'den 3'e çıkarken y = 1'i bir kez daha geçiyor; bu yüzden 1 range'dedir.",
            "Range: [−2, 3]."
          ],
          sonuc: "Domain (−3, 4], range [−2, 3]. Boş nokta, o y değeri başka bir yerde alınıyorsa range'i değiştirmez. Sınavda böyle yaz: *The domain is (−3, 4] and the range is [−2, 3].*"
        },
        {
          tip: "tablo",
          baslik: "Formülden domain ve range",
          head: ["Fonksiyon", "Domain", "Range"],
          rows: [
            ["f(x) = x² − 4", "ℝ", "[−4, ∞)"],
            ["f(x) = −x² + 6", "ℝ", "(−∞, 6]"],
            ["f(x) = |x| − 3", "ℝ", "[−3, ∞)"],
            ["f(x) = √(x − 2) + 1", "[2, ∞)", "[1, ∞)"],
            ["f(x) = 1/(x − 1)", "ℝ ∖ {1}", "ℝ ∖ {0}"]
          ]
        }
      ]
    },
    {
      baslik: "Eksenleri kesen noktalar",
      kisa: "y-kesişimi x = 0'da, x-kesişimleri (sıfırlar) y = 0'da bulunur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Eksenleri kesen noktalar",
          xlabel: "x",
          ylabel: "y",
          xmax: 12,
          ymax: 9,
          xticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" },
            { v: 10, label: "5" },
            { v: 11, label: "6" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [12, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [5, 0], to: [5, 9], etiket: "y" },
            { id: "s1", tip: "cizgi", from: [1, 3], to: [3, 7], renk: 0 },
            { id: "s2", tip: "cizgi", from: [3, 7], to: [6, 1], renk: 0 },
            { id: "s3", tip: "cizgi", from: [6, 1], to: [8, 1], renk: 0 },
            { id: "s4", tip: "cizgi", from: [8, 1], to: [11, 7], renk: 0 },
            { id: "e0", tip: "nokta", x: 1, y: 3, etiket: "(−4, −2)", renk: 0 },
            { id: "e1", tip: "nokta", x: 11, y: 7, etiket: "(6, 2)", renk: 0 },
            { id: "z1", tip: "nokta", x: 2, y: 5, etiket: "(−3, 0)", renk: 2, gizli: true },
            { id: "z2", tip: "nokta", x: 4, y: 5, etiket: "(−1, 0)", renk: 2, gizli: true },
            { id: "z3", tip: "nokta", x: 10, y: 5, etiket: "(5, 0)", renk: 2, gizli: true },
            { id: "yi", tip: "nokta", x: 5, y: 3, etiket: "(0, −2)", renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "Aynı grafik. Eksenleri nerede kesiyor?" },
            {
              metin: "x ekseni üzerinde y = 0'dır. Grafik x eksenini x = −3, x = −1 ve x = 5'te keser: bunlar sıfırlar (*zeros*).",
              goster: ["z1", "z2", "z3"]
            },
            {
              metin: "y ekseni üzerinde x = 0'dır. Grafik y eksenini yalnızca bir kez keser: (0, −2).",
              goster: ["yi"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Formülden kesişimler",
          durum: "f(x) = x² − x − 6, g(x) = 2x − 8, h(x) = √(x + 4) − 1.",
          adimlar: [
            "f: y-kesişimi f(0) = −6 → (0, −6). Sıfırlar: x² − x − 6 = (x − 3)(x + 2) = 0 → x = 3 ve x = −2.",
            "g: y-kesişimi g(0) = −8. Sıfır: 2x − 8 = 0 → x = 4.",
            "h: y-kesişimi h(0) = √4 − 1 = 1. Sıfır: √(x + 4) = 1 → x + 4 = 1 → x = −3."
          ],
          sonuc: "f: (3, 0), (−2, 0), (0, −6); g: (4, 0), (0, −8); h: (−3, 0), (0, 1). Sınavda böyle yaz: *The x-intercepts are −3, −1 and 5, and the y-intercept is −2.*"
        },
        {
          tip: "tuzak",
          metin: "Kesişimi nokta olarak yaz ve sayısını doğru say.",
          yanlis: "Grafik y eksenini iki kez kesiyor, iki y-kesişimi var.",
          dogru: "x = 0 dikey doğrusu grafiği en fazla bir kez keser: bir fonksiyonun en fazla bir y-kesişimi olur. x-kesişimi ise istediği kadar olabilir. (−3, 0) gibi nokta yaz."
        }
      ]
    },
    {
      baslik: "Artan, azalan ve sabit aralıklar",
      kisa: "Soldan sağa yükseliyorsa artan, alçalıyorsa azalan, yatay ise sabit.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "x < y ⇒ f(x) ≤ f(y)", alt: "artan (*increasing*)" },
            "·",
            { t: "x < y ⇒ f(x) < f(y)", alt: "kesin artan (*strictly increasing*)" },
            "·",
            { t: "x < y ⇒ f(x) ≥ f(y)", alt: "azalan (*decreasing*)" },
            "·",
            { t: "x < y ⇒ f(x) > f(y)", alt: "kesin azalan (*strictly decreasing*)" }
          ],
          aciklama: "x ve y aralıktaki iki sayıdır. Ders tanımında \"artan\" eşitliğe izin verir, yani yatay parça da girer; \"kesin\" (*strictly*) denince yatay parça dışarıda kalır. Aralıklar **x değerleriyle** verilir; en güvenlisi açık aralık yazmak."
        },
        {
          tip: "grafik",
          baslik: "Artan, azalan ve sabit aralıklar",
          xlabel: "x",
          ylabel: "y",
          xmax: 12,
          ymax: 9,
          xticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" },
            { v: 9, label: "4" },
            { v: 10, label: "5" },
            { v: 11, label: "6" }
          ],
          yticks: [
            { v: 1, label: "−4" },
            { v: 2, label: "−3" },
            { v: 3, label: "−2" },
            { v: 4, label: "−1" },
            { v: 6, label: "1" },
            { v: 7, label: "2" },
            { v: 8, label: "3" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 5], to: [12, 5], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [5, 0], to: [5, 9], etiket: "y" },
            { id: "s1", tip: "cizgi", from: [1, 3], to: [3, 7], renk: 0 },
            { id: "s2", tip: "cizgi", from: [3, 7], to: [6, 1], renk: 0 },
            { id: "s3", tip: "cizgi", from: [6, 1], to: [8, 1], renk: 0 },
            { id: "s4", tip: "cizgi", from: [8, 1], to: [11, 7], renk: 0 },
            { id: "e0", tip: "nokta", x: 1, y: 3, etiket: "(−4, −2)", renk: 0 },
            { id: "e1", tip: "nokta", x: 11, y: 7, etiket: "(6, 2)", renk: 0 },
            { id: "u1", tip: "cizgi", from: [1, 3], to: [3, 7], renk: 1, gizli: true },
            { id: "u2", tip: "cizgi", from: [8, 1], to: [11, 7], renk: 1, gizli: true },
            { id: "d1", tip: "cizgi", from: [3, 7], to: [6, 1], renk: 2, gizli: true },
            { id: "c1", tip: "cizgi", from: [6, 1], to: [8, 1], renk: 3, gizli: true }
          ],
          durumlar: [
            { metin: "Grafiği soldan sağa doğru bir yolculuk gibi oku. Yükseliyor mu, alçalıyor mu?" },
            {
              metin: "x = −4'ten −2'ye ve x = 3'ten 6'ya yükseliyor: ==artan==, yani (−4, −2) ve (3, 6).",
              goster: ["u1", "u2"]
            },
            { metin: "x = −2'den 1'e iniyor: ==azalan==, yani (−2, 1).", goster: ["d1"] },
            {
              metin: "x = 1 ile 3 arası yatay: ==sabit==, yani (1, 3). Dönüm noktaları x = −2, 1, 3.",
              goster: ["c1"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Tanımla kanıtla: artan mı, azalan mı?",
          durum: "f(x) = 3 − 2x fonksiyonunun ℝ'de azalan, g(x) = 4/(2 − x) fonksiyonunun (2, ∞)'da artan olduğunu göster.",
          adimlar: [
            "f: x < y alalım. İki tarafı −2 ile çarpınca eşitsizlik döner: −2x > −2y.",
            "3 ekle: 3 − 2x > 3 − 2y, yani f(x) > f(y). Her x < y için doğru: f kesin azalan.",
            "g: 2 < x < y olsun. O zaman 0 < x − 2 < y − 2.",
            "Pozitif sayıların çarpmaya göre tersi eşitsizliği çevirir: 1/(x − 2) > 1/(y − 2).",
            "g(x) = −4/(x − 2). −4 ile çarpınca eşitsizlik tekrar döner: −4/(x − 2) < −4/(y − 2), yani g(x) < g(y)."
          ],
          sonuc: "f ℝ'de kesin azalan, g (2, ∞)'da kesin artan. Sınavda böyle yaz: *Let x < y in the interval. We show that g(x) < g(y).*"
        },
        {
          tip: "tuzak",
          metin: "Aralığı yüksekliklerle (y) değil, x değerleriyle yaz.",
          yanlis: "f artandır [−2, 2] aralığında (y değerleri).",
          dogru: "f artandır (−4, −2) ve (3, 6) aralıklarında; azalandır (−2, 1). İki aralığı \"ve\" ile ayrı yaz, birleştirme. Sınavda böyle yaz: *f is increasing on (−4, −2) and (3, 6), and decreasing on (−2, 1).*"
        }
      ]
    },
    {
      baslik: "Bir parabolü baştan sona okumak",
      kisa: "Tek bir grafikten domain, range, kesişimler ve aralıklar birlikte okunur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "f(x) = −x² + 2x + 3 grafiği",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 8,
          xticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" },
            { v: 7, label: "4" }
          ],
          yticks: [
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" },
            { v: 7, label: "4" }
          ],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, from: [0, 3], to: [8, 3], etiket: "x" },
            { id: "ay", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 8], etiket: "y" },
            {
              id: "p",
              tip: "egri",
              noktalar: [
                [1.5, 0.75], [1.75, 1.938], [2, 3], [2.25, 3.938], [2.5, 4.75], [2.75, 5.438],
                [3, 6], [3.25, 6.438], [3.5, 6.75], [3.75, 6.938], [4, 7], [4.25, 6.938],
                [4.5, 6.75], [4.75, 6.438], [5, 6], [5.25, 5.438], [5.5, 4.75], [5.75, 3.938],
                [6, 3], [6.25, 1.938], [6.5, 0.75]
              ],
              renk: 0,
              etiket: "f"
            },
            { id: "z1", tip: "nokta", x: 2, y: 3, etiket: "(−1, 0)", renk: 2, gizli: true },
            { id: "z2", tip: "nokta", x: 6, y: 3, etiket: "(3, 0)", renk: 2, gizli: true },
            { id: "yi", tip: "nokta", x: 3, y: 6, etiket: "(0, 3)", renk: 1, gizli: true },
            { id: "tp", tip: "nokta", x: 4, y: 7, etiket: "(1, 4)", renk: 3, gizli: true },
            { id: "mx", tip: "cizgi", from: [0, 7], to: [8, 7], renk: 3, kesik: true, gizli: true },
            {
              id: "ar",
              tip: "egri",
              noktalar: [
                [1.5, 0.75], [1.75, 1.938], [2, 3], [2.25, 3.938], [2.5, 4.75], [2.75, 5.438],
                [3, 6], [3.25, 6.438], [3.5, 6.75], [3.75, 6.938], [4, 7]
              ],
              renk: 1,
              gizli: true
            },
            {
              id: "az",
              tip: "egri",
              noktalar: [
                [4, 7], [4.25, 6.938], [4.5, 6.75], [4.75, 6.438], [5, 6], [5.25, 5.438],
                [5.5, 4.75], [5.75, 3.938], [6, 3], [6.25, 1.938], [6.5, 0.75]
              ],
              renk: 2,
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Aşağı bakan bir parabol. Her şeyi okuyalım." },
            { metin: "x-kesişimleri: y = 0 olduğu yerler, x = −1 ve x = 3.", goster: ["z1", "z2"] },
            { metin: "y-kesişimi: x = 0'da y = 3.", goster: ["yi"] },
            { metin: "Tepe noktası (1, 4): grafiğin en yüksek noktası.", goster: ["tp"] },
            { metin: "Range: y = 4'ü hiç geçemiyor. Range = (−∞, 4]. Domain: x serbest, ℝ.", goster: ["mx"] },
            {
              metin: "x < 1 için yükseliyor: ==artan (−∞, 1)==. x > 1 için iniyor: ==azalan (1, ∞)==.",
              goster: ["ar", "az"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "f(x) = −x² + 2x + 3 grafiğinden okunanlar",
          head: ["Soru", "Nereye bakılır?", "Cevap"],
          rows: [
            ["Domain", "x ekseni boyunca uzanış", "ℝ"],
            ["Range", "en yüksek y 4, aşağı sınırsız", "(−∞, 4]"],
            ["x-kesişimleri", "y = 0", "(−1, 0) ve (3, 0)"],
            ["y-kesişimi", "x = 0", "(0, 3)"],
            ["Artan", "soldan sağa yükselen kısım", "(−∞, 1)"],
            ["Azalan", "soldan sağa alçalan kısım", "(1, ∞)"],
            ["En büyük değer", "tepe noktasının y'si", "4 (x = 1'de)"]
          ]
        }
      ]
    },
    {
      baslik: "Sınavda grafik soruları",
      kisa: "f(a)'yı oku, f(x) = k çöz, f(x) > 0 aralığını yaz; cümleyi İngilizce kur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Poligon grafiği üzerinde dört soru",
          durum: "Daha önce kullandığımız grafik: (−4, −2), (−2, 2), (1, −4), (3, −4), (6, 2) köşeleri.",
          adimlar: [
            "f(0) = ? x = 0'da grafik y = −2'de: f(0) = −2.",
            "f(x) = 2 olan x'ler: y = 2 yatay doğrusu grafiği (−2, 2) ve (6, 2)'de keser: x = −2 ve x = 6.",
            "f(x) = −4 olan x'ler: yatay parça boyunca 1 ≤ x ≤ 3 (sonsuz sayıda).",
            "f(x) > 0: grafik x ekseninin üstünde. (−3, −1) ve (5, 6] aralıklarında.",
            "f(f(5)) = ? f(5) = 0, f(0) = −2: f(f(5)) = −2.",
            "f⁻¹(2) sorulsaydı: f(x) = 2'nin iki çözümü var (−2 ve 6). f birebir değil, bu yüzden f⁻¹ tanımsız."
          ],
          sonuc: "Sınavda böyle yaz: *f(x) > 0 when −3 < x < −1 or 5 < x ≤ 6.*"
        },
        {
          tip: "ikili",
          sol: { ikon: "📈", baslik: "Artan", maddeler: ["Soldan sağa yükselir", "Örnek: (−4, −2) ve (3, 6)"] },
          sag: { ikon: "📉", baslik: "Azalan", maddeler: ["Soldan sağa alçalır", "Örnek: (−2, 1)"] },
          oyun: [
            { metin: "x = −4 ile −2 arası.", cevap: "sol", neden: "y: −2'den 2'ye çıkıyor." },
            {
              metin: "x = −1 ile 0 arası.",
              cevap: "sag",
              neden: "(−2, 1) parçasının içinde: y 0'dan −2'ye düşüyor."
            },
            { metin: "x = 4 ile 5 arası.", cevap: "sol", neden: "(3, −4)'ten (6, 2)'ye yükselen parça." },
            { metin: "x = −2 ile 1 arası.", cevap: "sag", neden: "y: 2'den −4'e düşüyor." }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "*The domain is [−4, 6] and the range is [−4, 2].*",
              metin: "Domain [−4, 6], range [−4, 2]."
            },
            {
              ikon: "✍️",
              baslik: "*The graph crosses the x-axis at x = −3, x = −1 and x = 5.*",
              metin: "Grafik x eksenini şu noktalarda keser."
            },
            {
              ikon: "✍️",
              baslik: "*The function is constant on (1, 3).*",
              metin: "Fonksiyon (1, 3) aralığında sabittir."
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
            "Aralık: [ ] dahil, ( ) hariç; ∞ için hep yuvarlak parantez; ∪ birleşim.",
            "Domain: grafiğin x ekseninde kapladığı aralık; range: y ekseninde kapladığı aralık.",
            "İçi boş uç nokta dahil değildir; ama aynı y başka yerde alınıyorsa range'dedir.",
            "x-kesişimi (sıfır): y = 0, f(x) = 0 çözümleri. y-kesişimi: x = 0, (0, f(0)); en fazla bir tane.",
            "Artan: soldan sağa yükselir (x < y ⇒ f(x) ≤ f(y)); kesin artanda f(x) < f(y). Azalan ve sabit de aynı mantıkla.",
            "Artan, azalan ve sabit aralıkları x değerleriyle ve mümkünse açık aralıkla yaz.",
            "f(a): x = a'da yüksekliği oku; f(x) = k: y = k doğrusuyla kesişimi bul.",
            "Cümleyi bitir: *The function is increasing on …*"
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The graph of f is shown below (endpoints are filled dots). What are the domain and the range of f?",
      fig: {
        type: "graph",
        xlabel: "x",
        ylabel: "y",
        xmax: 9,
        ymax: 7,
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" },
          { v: 6, label: "6" },
          { v: 7, label: "7" },
          { v: 8, label: "8" }
        ],
        yticks: [
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" },
          { v: 6, label: "6" }
        ],
        lines: [
          { from: [1, 3], to: [3, 6], label: "", color: 0 },
          { from: [3, 6], to: [5, 2], label: "", color: 0 },
          { from: [5, 2], to: [7, 2], label: "", color: 0 },
          { from: [7, 2], to: [8, 5], label: "f", color: 0 }
        ],
        points: [
          { q: 1, p: 3 },
          { q: 8, p: 5 }
        ]
      },
      opts: [
        "Domain [1, 8], range [2, 6]",
        "Domain [2, 6], range [1, 8]",
        "Domain [1, 8], range [1, 6]",
        "Domain (1, 8), range (2, 6)"
      ],
      a: 0,
      why: "Domain, grafiğin x ekseninde kapladığı aralık: 1'den 8'e, uçlar dolu olduğundan [1, 8]. Range, y ekseninde kapladığı aralık: en alçak y = 2, en yüksek y = 6, yani [2, 6]. B seçeneği ikisini yer değiştirmiş."
    },
    {
      q: "For the same graph, on which interval is f decreasing?",
      fig: {
        type: "graph",
        xlabel: "x",
        ylabel: "y",
        xmax: 9,
        ymax: 7,
        xticks: [
          { v: 1, label: "1" },
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" },
          { v: 6, label: "6" },
          { v: 7, label: "7" },
          { v: 8, label: "8" }
        ],
        yticks: [
          { v: 2, label: "2" },
          { v: 3, label: "3" },
          { v: 4, label: "4" },
          { v: 5, label: "5" },
          { v: 6, label: "6" }
        ],
        lines: [
          { from: [1, 3], to: [3, 6], label: "", color: 0 },
          { from: [3, 6], to: [5, 2], label: "", color: 0 },
          { from: [5, 2], to: [7, 2], label: "", color: 0 },
          { from: [7, 2], to: [8, 5], label: "f", color: 0 }
        ],
        points: [
          { q: 1, p: 3 },
          { q: 8, p: 5 }
        ]
      },
      opts: ["(1, 3)", "(3, 5)", "(5, 7)", "(3, 7)"],
      a: 1,
      why: "x = 3'ten 5'e grafik 6'dan 2'ye iniyor: kesin azalan (3, 5). (5, 7) aralığı yataydır: sabit. D seçeneği, sabit parçayı da azalan sayar; çekici ama yanlış, çünkü yatay parçada f(x) = f(y) olur ve kesin azalan değildir."
    },
    {
      q: "What are the domain and the range of f(x) = √(x − 3) − 2?",
      opts: [
        "Domain [3, ∞), range [2, ∞)",
        "Domain [−2, ∞), range [3, ∞)",
        "Domain [3, ∞), range [−2, ∞)",
        "Domain ℝ, range [−2, ∞)"
      ],
      a: 2,
      why: "√ içi ≥ 0: x − 3 ≥ 0 → x ≥ 3. √ ifadesi en az 0 olduğundan f(x) = √(x − 3) − 2 ≥ −2: range [−2, ∞). A seçeneği −2'yi +2 almış; B seçeneği iki aralığı yer değiştirmiş."
    },
    {
      q: "At which points does the graph of f(x) = x² − 2x − 8 cross the axes?",
      opts: [
        "x-intercepts: −4 and 2; y-intercept: 8",
        "x-intercepts: 4 and 2; y-intercept: −8",
        "x-intercepts: 4 and −2; y-intercept: 8",
        "x-intercepts: 4 and −2; y-intercept: −8"
      ],
      a: 3,
      why: "y-kesişimi f(0) = −8. x-kesişimleri: x² − 2x − 8 = (x − 4)(x + 2) = 0 → x = 4 ve x = −2. En çekici yanlış A: kökleri ters işaretle almak (−4, 2) ve y'yi +8 yazmak."
    },
    {
      q: "The graph of g starts at an open circle at (−2, 3), goes down in a straight line to (1, −1), then rises in a straight line to the filled point (5, 4). What is the range of g?",
      opts: ["[−1, 4]", "(−1, 4]", "[−1, 3)", "(3, 4]"],
      a: 0,
      why: "En alçak değer −1 (dolu nokta, dahil), en yüksek 4 (dahil). Başlangıçtaki y = 3 boş noktada alınmıyor ama g, −1'den 4'e çıkarken y = 3'ü geçiyor; yani 3 range'dedir. Boş nokta range'i daraltmaz: [−1, 4]. B seçeneği −1'i yanlışlıkla hariç tutuyor."
    }
  ]
};
