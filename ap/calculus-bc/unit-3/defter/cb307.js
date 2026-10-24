/* Kitpath not defteri · cb307 · 3.4 Ters Trigonometrik Fonksiyonların Türevi
   Kaynak: ap-videolar/src/episodes/cb307 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb307",
  amac: "Bu konu ters trigonometrik fonksiyonların türevini anlatıyor. Arksinüs, arktanjant ve arksekantın türev formüllerini, neden kısıtlı tanım kümesi gerektiklerini ve zincir kuralıyla nasıl kullanılacaklarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Orandan açıya: ters trigonometri",
      kisa: "Ters trigonometrik fonksiyonlar oranı alır, açıyı geri verir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🛹",
          baslik: "Kaykay rampası",
          metin: "Rampa her 1 metre ilerlemede 1 metre yükseliyor. Açısı kaç? Tanjantı 1 olan açı: π/4, yani 45°. Sinüs, kosinüs ve tanjant açıyı verince bir oran söyler; ters trigonometrik fonksiyonlar tersini yapar: oranı verirsin, açıyı geri alırsın. Bölümün sürprizi: türevlerinde hiç trigonometri kalmaz."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎯",
              terim: "Inverse trigonometric function",
              tr: "ters trigonometrik fonksiyon",
              tanim: "Oranı alıp açıyı veren fonksiyon. sin⁻¹, cos⁻¹, tan⁻¹ gibi yazılır.",
              ornek: "tan θ = 1 ise θ = arctan 1 = π/4."
            },
            {
              ikon: "📉",
              terim: "Arcsine",
              tr: "arksinüs",
              tanim: "arcsin x: sinüsü x olan açı; −π/2 ile π/2 arasındadır.",
              ornek: "arcsin 1 = π/2."
            },
            {
              ikon: "📈",
              terim: "Arccosine",
              tr: "arkkosinüs",
              tanim: "arccos x: kosinüsü x olan açı; 0 ile π arasındadır.",
              ornek: "arccos 0 = π/2."
            },
            {
              ikon: "📐",
              terim: "Arctangent",
              tr: "arktanjant",
              tanim: "arctan x: tanjantı x olan açı; her sayıyı kabul eder, çıktısı −π/2 ile π/2 arasındadır.",
              ornek: "arctan 1 = π/4."
            },
            {
              ikon: "🔼",
              terim: "Arcsecant",
              tr: "arksekant",
              tanim: "arcsec x: sekantı (1/cos) x olan açı; 0 ile π arasında, π/2 hariç.",
              ornek: "arcsec 2 = π/3."
            }
          ]
        }
      ]
    },
    {
      baslik: "Neden kısıtlı tanım kümesi?",
      kisa: "Ters için sinüs gibi fonksiyonlar bire bir olan bir aralığa kısıtlanır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "✂️",
              terim: "Restricted domain",
              tr: "kısıtlı tanım kümesi",
              tanim: "Fonksiyonu bire bir olan bir aralığa daraltmak; ters ancak böyle tanımlanır.",
              ornek: "sin x yalnızca [−π/2, π/2] aralığında bire bir alınır."
            },
            {
              ikon: "📏",
              terim: "Range",
              tr: "görüntü kümesi",
              tanim: "Fonksiyonun alabildiği çıktılar. Ters trigonometride çıktı bir açıdır.",
              ornek: "arcsin x'in görüntü kümesi [−π/2, π/2]."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Sinüsü kısıtlayıp tersini almak",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 5.5,
          xticks: [
            { v: 0, label: "−4" },
            { v: 1, label: "−3" },
            { v: 2, label: "−2" },
            { v: 3, label: "−1" },
            { v: 4, label: "0" },
            { v: 5, label: "1" },
            { v: 6, label: "2" },
            { v: 7, label: "3" },
            { v: 8, label: "4" }
          ],
          yticks: [
            { v: 0.429, label: "−π/2" },
            { v: 1, label: "−1" },
            { v: 2, label: "0" },
            { v: 3, label: "1" },
            { v: 3.571, label: "π/2" },
            { v: 5.142, label: "π" }
          ],
          ogeler: [
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [4, 0], to: [4, 5.5] },
            { id: "ax", tip: "cizgi", renk: 0, kesik: true, from: [0, 2], to: [8, 2] },
            {
              id: "sin",
              tip: "egri",
              renk: 0,
              noktalar: [[0, 2.757], [0.125, 2.669], [0.25, 2.572], [0.375, 2.465], [0.5, 2.351], [0.625, 2.231], [0.75, 2.108], [0.875, 1.983], [1, 1.859], [1.125, 1.737], [1.25, 1.618], [1.375, 1.506], [1.5, 1.402], [1.625, 1.306], [1.75, 1.222], [1.875, 1.15], [2, 1.091], [2.125, 1.046], [2.25, 1.016], [2.375, 1.001], [2.5, 1.003], [2.625, 1.019], [2.75, 1.051], [2.875, 1.098], [3, 1.159], [3.125, 1.232], [3.25, 1.318], [3.375, 1.415], [3.5, 1.521], [3.625, 1.634], [3.75, 1.753], [3.875, 1.875], [4, 2], [4.125, 2.125], [4.25, 2.247], [4.375, 2.366], [4.5, 2.479], [4.625, 2.585], [4.75, 2.682], [4.875, 2.768], [5, 2.841], [5.125, 2.902], [5.25, 2.949], [5.375, 2.981], [5.5, 2.997], [5.625, 2.999], [5.75, 2.984], [5.875, 2.954], [6, 2.909], [6.125, 2.85], [6.25, 2.778], [6.375, 2.694], [6.5, 2.598], [6.625, 2.494], [6.75, 2.382], [6.875, 2.263], [7, 2.141], [7.125, 2.017], [7.25, 1.892], [7.375, 1.769], [7.5, 1.649], [7.625, 1.535], [7.75, 1.428], [7.875, 1.331], [8, 1.243]],
              etiket: "sin x"
            },
            { id: "hl", tip: "cizgi", renk: 2, kesik: true, from: [0, 2.5], to: [8, 2.5] },
            { id: "c1", tip: "nokta", renk: 2, x: 4.524, y: 2.5 },
            { id: "c2", tip: "nokta", renk: 2, x: 6.618, y: 2.5 },
            { id: "c3", tip: "nokta", renk: 2, x: 0.335, y: 2.5 },
            {
              id: "sres",
              tip: "egri",
              renk: 1,
              noktalar: [[2.429, 1], [2.626, 1.019], [2.822, 1.076], [3.018, 1.169], [3.215, 1.293], [3.411, 1.444], [3.607, 1.617], [3.804, 1.805], [4, 2], [4.196, 2.195], [4.393, 2.383], [4.589, 2.556], [4.785, 2.707], [4.982, 2.831], [5.178, 2.924], [5.374, 2.981], [5.571, 3]],
              gizli: true
            },
            { id: "mir", tip: "cizgi", renk: 0, kesik: true, from: [2, 0], to: [7.5, 5.5], gizli: true },
            {
              id: "asin",
              tip: "egri",
              renk: 3,
              noktalar: [[3, 0.429], [3.009, 0.56], [3.034, 0.691], [3.076, 0.822], [3.134, 0.953], [3.207, 1.084], [3.293, 1.215], [3.391, 1.346], [3.5, 1.476], [3.617, 1.607], [3.741, 1.738], [3.869, 1.869], [4, 2], [4.131, 2.131], [4.259, 2.262], [4.383, 2.393], [4.5, 2.524], [4.609, 2.654], [4.707, 2.785], [4.793, 2.916], [4.866, 3.047], [4.924, 3.178], [4.966, 3.309], [4.991, 3.44], [5, 3.571]],
              etiket: "arcsin x",
              gizli: true
            },
            {
              id: "acos",
              tip: "egri",
              renk: 2,
              noktalar: [[5, 2], [4.991, 2.131], [4.966, 2.262], [4.924, 2.393], [4.866, 2.524], [4.793, 2.654], [4.707, 2.785], [4.609, 2.916], [4.5, 3.047], [4.383, 3.178], [4.259, 3.309], [4.131, 3.44], [4, 3.571], [3.869, 3.702], [3.741, 3.833], [3.617, 3.963], [3.5, 4.094], [3.391, 4.225], [3.293, 4.356], [3.207, 4.487], [3.134, 4.618], [3.076, 4.749], [3.034, 4.88], [3.009, 5.011], [3, 5.142]],
              etiket: "arccos x",
              gizli: true
            },
            {
              id: "atan",
              tip: "egri",
              renk: 1,
              noktalar: [[0, 0.674], [0.25, 0.69], [0.5, 0.708], [0.75, 0.728], [1, 0.751], [1.25, 0.778], [1.5, 0.81], [1.75, 0.847], [2, 0.893], [2.25, 0.948], [2.5, 1.017], [2.75, 1.104], [3, 1.215], [3.25, 1.356], [3.5, 1.536], [3.75, 1.755], [4, 2], [4.25, 2.245], [4.5, 2.464], [4.75, 2.644], [5, 2.785], [5.25, 2.896], [5.5, 2.983], [5.75, 3.052], [6, 3.107], [6.25, 3.153], [6.5, 3.19], [6.75, 3.222], [7, 3.249], [7.25, 3.272], [7.5, 3.292], [7.75, 3.31], [8, 3.326]],
              etiket: "arctan x",
              gizli: true
            },
            { id: "ap1", tip: "cizgi", renk: 0, kesik: true, from: [0, 3.571], to: [8, 3.571], gizli: true },
            { id: "ap2", tip: "cizgi", renk: 0, kesik: true, from: [0, 0.429], to: [8, 0.429], gizli: true }
          ],
          durumlar: [
            {
              metin: "y = sin x bire bir değil: y = 0,5 yatay doğrusu onu birçok noktada keser (burada üç, sonsuz tane var)."
            },
            {
              metin: "Çözüm: sinüsü [−π/2, π/2] aralığına kısıtla. Bu parçada her çıktı tek girdiden gelir.",
              goster: ["sres"],
              gizle: ["sin", "hl", "c1", "c2", "c3"]
            },
            {
              metin: "y = x aynasında yansıt: *arcsine* doğar. Tanım kümesi [−1, 1], görüntü kümesi [−π/2, π/2].",
              goster: ["mir", "asin"]
            },
            {
              metin: "*Arccosine* çıktıyı [0, π] aralığına koyar. *Arctangent* her sayıyı alır, çıktısı (−π/2, π/2); uçlara varmaz, y = ±π/2 yatay asimptot.",
              goster: ["acos", "atan", "ap1", "ap2"],
              gizle: ["sres", "mir"]
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Tanım ve görüntü kümeleri",
          head: ["Fonksiyon", "Tanım kümesi", "Görüntü kümesi"],
          rows: [["arcsin x", "[−1, 1]", "[−π/2, π/2]"], ["arccos x", "[−1, 1]", "[0, π]"], ["arctan x", "bütün reel sayılar", "(−π/2, π/2)"], ["arcsec x", "|x| ≥ 1", "[0, π], π/2 hariç"]]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔙",
            baslik: "sin⁻¹ x = arcsin x",
            maddeler: ["Ters trigonometrik fonksiyon", "Girdi oran, çıktı açı"]
          },
          sag: {
            ikon: "➗",
            baslik: "1/sin x = csc x",
            maddeler: ["Sinüsün çarpmaya göre tersi", "Girdi açı, çıktı oran"]
          },
          oyun: [
            { metin: "sin⁻¹(1/2) = π/6.", cevap: "sol", neden: "Sinüsü 1/2 olan açıyı veriyor: arcsin." },
            { metin: "1/sin x ifadesi.", cevap: "sag", neden: "Sinüsün bir bölüsü: kosekant." },
            {
              metin: "sin⁻¹ x yazısı, arcsin x ile aynı fonksiyondur.",
              cevap: "sol",
              neden: "Simgedeki −1 ters fonksiyon demektir."
            },
            { metin: "csc x = 1/sin x.", cevap: "sag", neden: "Kosekant, sinüsün çarpmaya göre tersidir." }
          ]
        }
      ]
    },
    {
      baslik: "Arksinüsün türevini çıkaralım",
      kisa: "Kapalı türev ve dik üçgenle d/dx arcsin x = 1/√(1 − x²) bulunur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔗",
              terim: "Implicit differentiation",
              tr: "kapalı türev",
              tanim: "y = arcsin x'i sin y = x diye yazıp iki tarafın türevini almak.",
              ornek: "cos y·dy/dx = 1."
            },
            {
              ikon: "⛓️",
              terim: "Chain rule",
              tr: "zincir kuralı",
              tanim: "İçteki ifade x değilse dıştakinin türevi çarpı içtekinin türevi.",
              ornek: "d/dx arcsin(u) = u′/√(1 − u²)."
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "d/dx arcsin x'in çıkarılışı",
          adimlar: [
            { baslik: "Kapalı yaz", metin: "y = arcsin x ⇔ sin y = x, −π/2 ≤ y ≤ π/2." },
            { baslik: "Türev al", metin: "cos y·dy/dx = 1 → dy/dx = 1/cos y." },
            {
              baslik: "cos y'yi x cinsinden yaz",
              metin: "Dik üçgen: karşı kenar x, hipotenüs 1, komşu kenar √(1 − x²). Yani cos y = √(1 − x²)."
            },
            { baslik: "Sonuç", metin: "dy/dx = 1/√(1 − x²), −1 < x < 1. Kökün önüne eksi gelmez: bu aralıkta cos y ≥ 0 (x = ±1'de cos y = 0 olur, türev yoktur)." }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = arcsin x için dik üçgen",
          xlabel: "",
          ylabel: "",
          xmax: 8,
          ymax: 5.5,
          ogeler: [
            { id: "hyp", tip: "cizgi", renk: 0, from: [1, 1], to: [6, 4] },
            { id: "th", tip: "yazi", x: 2.1, y: 1.35, metin: "y" },
            { id: "lh", tip: "yazi", x: 3, y: 3, metin: "1" },
            { id: "opp", tip: "cizgi", renk: 1, from: [6, 1], to: [6, 4], gizli: true },
            { id: "lo", tip: "yazi", x: 6.5, y: 2.5, metin: "x", gizli: true },
            { id: "adj", tip: "cizgi", renk: 2, from: [1, 1], to: [6, 1], gizli: true },
            { id: "la", tip: "yazi", x: 3.5, y: 0.45, metin: "√(1 − x²)", gizli: true }
          ],
          durumlar: [
            { metin: "y = arcsin x demek sin y = x demek. Hipotenüsü 1 olan dik üçgende y açısını çiz." },
            { metin: "sin y = karşı/hipotenüs = x: karşı kenar x.", goster: ["opp", "lo"] },
            { metin: "Pisagor: komşu kenar √(1 − x²). Demek ki cos y = √(1 − x²).", goster: ["adj", "la"] },
            { metin: "dy/dx = 1/cos y = 1/√(1 − x²)." }
          ]
        }
      ]
    },
    {
      baslik: "Altı formül ve “ko” kuralı",
      kisa: "Adında “ko” olanların türevi eksi işaretlidir; geri kalan aynıdır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Altı ters trigonometrik türev",
          head: ["Fonksiyon", "Türev"],
          rows: [["arcsin x", "1/√(1 − x²)"], ["arccos x", "−1/√(1 − x²)"], ["arctan x", "1/(1 + x²)"], ["arccot x", "−1/(1 + x²)"], ["arcsec x", "1/(|x|√(x² − 1))"], ["arccsc x", "−1/(|x|√(x² − 1))"]],
          not: "arctan x'in türevi, tan y = x kapalı türeviyle önceki bölümde çıkmıştı."
        },
        {
          tip: "ikili",
          sol: { ikon: "➕", baslik: "“ko” yok", maddeler: ["arcsin, arctan, arcsec", "Türev artı işaretli"] },
          sag: { ikon: "➖", baslik: "“ko” var", maddeler: ["arccos, arccot, arccsc", "Türev eksi işaretli"] },
          oyun: [
            {
              metin: "arccos x'in türevi.",
              cevap: "sag",
              neden: "“ko” ile başlıyor: arcsin'in eksi işaretlisi."
            },
            { metin: "arctan x'in türevi.", cevap: "sol", neden: "“ko” yok: 1/(1 + x²), artı." },
            { metin: "arccsc x'in türevi.", cevap: "sag", neden: "“ko” var: arcsec'in eksi işaretlisi." },
            { metin: "arcsec x'in türevi.", cevap: "sol", neden: "“ko” yok: artı, ayrıca |x| var." },
            { metin: "arccot x'in türevi.", cevap: "sag", neden: "“ko” var: arctan'ın eksi işaretlisi." }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "arcsin x + arccos x", alt: "toplam" },
            "=",
            { t: "π/2", alt: "sabit" },
            "⇒",
            { t: "türevler birbirinin eksisi", alt: "toplamları 0" }
          ],
          aciklama: "Sabit bir toplamın türevi sıfırdır; bu yüzden “ko”lu türev eksi işaretlidir."
        }
      ]
    },
    {
      baslik: "Zincir kuralı: içeride u varsa",
      kisa: "İçeride u varsa sonuna u′ eklenir; u²'yi doğru yaz.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "d/dx arcsin(x/2)",
          durum: "d/dx arcsin(x/2) türevini bul ve sadeleştir.",
          adimlar: ["İç fonksiyon u = x/2, u′ = 1/2.", "Formül: u′/√(1 − u²) = (1/2)/√(1 − x²/4).", "Kökün içini 4'le genişlet: √(1 − x²/4) = √(4 − x²)/2.", "(1/2) ile 1/2 sadeleşir."],
          sonuc: "1/√(4 − x²)."
        },
        {
          tip: "ornek",
          baslik: "d/dx arctan(x³)",
          durum: "d/dx arctan(x³) türevini bul.",
          adimlar: ["İç fonksiyon u = x³, u′ = 3x².", "Formül: u′/(1 + u²) = 3x²/(1 + (x³)²).", "(x³)² = x⁶."],
          sonuc: "3x²/(1 + x⁶)."
        },
        {
          tip: "ornek",
          baslik: "d/dx (x·arctan x)",
          durum: "Çarpım kuralını ters trigonometriyle birlikte kullan.",
          adimlar: ["Çarpım: (x)′·arctan x + x·(arctan x)′.", "= 1·arctan x + x·1/(1 + x²)."],
          sonuc: "arctan x + x/(1 + x²)."
        },
        {
          tip: "tuzak",
          baslik: "u²'yi parantezle al",
          metin: "İçerideki ifadenin karesini alırken tamamını karele.",
          yanlis: "arctan(x³) → 3x²/(1 + x³);  arcsin(x/2) → karekökte x²/2.",
          dogru: "(x³)² = x⁶, (x/2)² = x²/4, (2x)² = 4x²."
        }
      ]
    },
    {
      baslik: "Noktada teğet doğrusu",
      kisa: "Teğetteki y değeri bir açı olabilir (π/4); eğimle karıştırma.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "y = arctan(x²), x = 1",
          durum: "y = arctan(x²) eğrisine x = 1'de teğet doğrusunu yaz.",
          adimlar: ["Nokta: y(1) = arctan 1 = π/4 → (1, π/4).", "Türev: y′ = 2x/(1 + x⁴).", "Eğim: y′(1) = 2/2 = 1.", "Doğru: y − π/4 = 1·(x − 1). Cevapta π kalabilir; ondalığa çevirmek zorunda değilsin."],
          sonuc: "y − π/4 = x − 1. (Normal doğrusu istenseydi eğim −1 olurdu.)"
        },
        {
          tip: "grafik",
          baslik: "y = arctan(x²) ve x = 1'deki teğet",
          xlabel: "x",
          ylabel: "y",
          xmax: 6,
          ymax: 3,
          xticks: [
            { v: 0, label: "−3" },
            { v: 1, label: "−2" },
            { v: 2, label: "−1" },
            { v: 3, label: "0" },
            { v: 4, label: "1" },
            { v: 5, label: "2" },
            { v: 6, label: "3" }
          ],
          yticks: [{ v: 0.785, label: "π/4" }, { v: 1.571, label: "π/2" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [3, 0], to: [3, 3] },
            {
              id: "as",
              tip: "cizgi",
              renk: 0,
              kesik: true,
              from: [0, 1.571],
              to: [6, 1.571],
              etiket: "y = π/2"
            },
            {
              id: "c",
              tip: "egri",
              renk: 0,
              noktalar: [[0, 1.46], [0.2, 1.444], [0.4, 1.424], [0.6, 1.399], [0.8, 1.367], [1, 1.326], [1.2, 1.271], [1.4, 1.198], [1.6, 1.099], [1.8, 0.964], [2, 0.785], [2.2, 0.569], [2.4, 0.346], [2.6, 0.159], [2.8, 0.04], [3, 0], [3.2, 0.04], [3.4, 0.159], [3.6, 0.346], [3.8, 0.569], [4, 0.785], [4.2, 0.964], [4.4, 1.099], [4.6, 1.198], [4.8, 1.271], [5, 1.326], [5.2, 1.367], [5.4, 1.399], [5.6, 1.424], [5.8, 1.444], [6, 1.46]]
            },
            { id: "P", tip: "nokta", renk: 1, x: 4, y: 0.785, etiket: "(1, π/4)", gizli: true },
            {
              id: "t",
              tip: "cizgi",
              renk: 2,
              from: [3.4, 0.185],
              to: [5.2, 1.985],
              etiket: "m = 1",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = arctan(x²): iki yandan π/2'ye yaklaşan bir vadi. x = 1'deki teğet isteniyor." },
            { metin: "x = 1'de y = arctan 1 = π/4 ≈ 0,785. Nokta (1, π/4).", goster: ["P"] },
            { metin: "Eğim y′(1) = 2/(1 + 1) = 1. Teğet: y − π/4 = x − 1.", goster: ["t"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Açı ile eğim",
          metin: "Nokta ile eğim ayrı sayılardır. y değeri π/4 çıkınca şaşırma; eğim 1.",
          yanlis: "(1, 1) alıp y − 1 = x − 1 yazmak.",
          dogru: "Nokta (1, π/4), eğim 1: y − π/4 = x − 1."
        }
      ]
    },
    {
      baslik: "Limit kılığında türev",
      kisa: "[f(a + h) − f(a)]/h görürsen hesaplama, f′(a)'yı tanı.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎭",
              terim: "Difference quotient",
              tr: "fark oranı",
              tanim: "[f(a + h) − f(a)]/h ifadesi; h → 0 iken limiti f′(a)'dır.",
              ornek: "[arctan(1 + h) − arctan 1]/h → (arctan)′(1)."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "arctan'ın fark oranı",
          durum: "lim (h → 0) [arctan(1 + h) − arctan 1]/h değerini bul.",
          adimlar: ["Kalıbı tanı: [f(a + h) − f(a)]/h, burada f = arctan ve a = 1.", "Bu limit f′(1)'e eşittir.", "arctan'ın türevi 1/(1 + x²) → 1/(1 + 1²) = 1/2."],
          sonuc: "Limit 1/2."
        },
        {
          tip: "tuzak",
          baslik: "Limiti hesaplamaya kalkma",
          metin: "Bu kılık sınavın sevdiği bir sorudur: limit görünür, cevap bir türevdir.",
          yanlis: "h = 0 koyup 0/0 diye bırakmak ya da arctan(1 + h)'i açmaya çalışmak.",
          dogru: "Fark oranını tanı, doğrudan f′(a)'yı hesapla."
        }
      ]
    },
    {
      baslik: "Arksekantta mutlak değer",
      kisa: "Arksekantın iki kolu da yükselir; |x| bu yüzden gereklidir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "y = arcsec x ve iki koldaki eğim",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 4,
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
          yticks: [{ v: 1.571, label: "π/2" }, { v: 3.142, label: "π" }],
          ogeler: [
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [5, 0], to: [5, 4] },
            {
              id: "as",
              tip: "cizgi",
              renk: 0,
              kesik: true,
              from: [0, 1.571],
              to: [10, 1.571],
              etiket: "y = π/2"
            },
            {
              id: "L",
              tip: "egri",
              renk: 0,
              noktalar: [[0, 1.772], [1, 1.823], [2, 1.911], [2.5, 1.982], [3, 2.094], [3.25, 2.179], [3.5, 2.301], [3.65, 2.405], [3.8, 2.556], [3.9, 2.712], [3.95, 2.832], [3.98, 2.943], [4, 3.142]]
            },
            {
              id: "R",
              tip: "egri",
              renk: 0,
              noktalar: [[6, 0], [6.02, 0.198], [6.05, 0.31], [6.1, 0.43], [6.2, 0.586], [6.35, 0.737], [6.5, 0.841], [6.75, 0.963], [7, 1.047], [7.5, 1.159], [8, 1.231], [9, 1.318], [10, 1.369]]
            },
            { id: "pl", tip: "nokta", renk: 1, x: 3, y: 2.094, etiket: "(−2, 2π/3)", gizli: true },
            {
              id: "tl",
              tip: "cizgi",
              renk: 1,
              from: [2, 1.806],
              to: [4, 2.383],
              etiket: "m ≈ 0,29",
              gizli: true
            },
            { id: "pr", tip: "nokta", renk: 2, x: 7, y: 1.047, etiket: "(2, π/3)", gizli: true },
            {
              id: "tr",
              tip: "cizgi",
              renk: 2,
              from: [6, 0.759],
              to: [8, 1.336],
              etiket: "m ≈ 0,29",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "y = arcsec x'in iki kolu var: x ≤ −1 ve x ≥ 1. y = π/2 yatay asimptot." },
            { metin: "Sol kolda x = −2: eğim 1/(|−2|·√3) = 1/(2√3) ≈ 0,29 > 0.", goster: ["pl", "tl"] },
            {
              metin: "Sağ kolda x = 2: aynı eğim. İki kolda da grafik yukarı çıkar, eğim hep pozitif.",
              goster: ["pr", "tr"]
            },
            {
              metin: "Mutlak değer olmasaydı x = −2'de 1/(−2·√3) < 0 çıkardı; grafikle çelişirdi. Bu yüzden ==|x|== gerekli."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "|x|'i unutma",
          metin: "Şıklarda mutlak değeri unutan bir seçenek mutlaka olur. Formülü yazarken |x|'i ilk iş olarak koy.",
          yanlis: "d/dx arcsec x = 1/(x√(x² − 1)) (x = −2'de negatif çıkar).",
          dogru: "1/(|x|√(x² − 1)): iki kolda da pozitif."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["Ters trigonometrik fonksiyon oranı alır, açıyı verir; tanım ve görüntü kümeleri kısıtlıdır.", "sin⁻¹ x = arcsin x, 1/sin x değildir.", "d/dx arcsin x = 1/√(1 − x²); kapalı türev ve dik üçgenle çıkar.", "d/dx arctan x = 1/(1 + x²); arcsec x için 1/(|x|√(x² − 1)).", "“ko” ile başlayanların (arccos, arccot, arccsc) türevi eksi işaretlidir.", "İçeride u varsa sonuna u′ ekle ve u²'yi doğru yaz: (x³)² = x⁶.", "[f(a + h) − f(a)]/h limitini gördüğünde f′(a)'yı tanı; hesaplama.", "Teğet doğrusunda y değeri açı olabilir (π/4); eğimle karıştırma."]
        }
      ]
    }
  ]
};
