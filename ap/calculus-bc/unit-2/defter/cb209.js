/* Kitpath not defteri · cb209 · 2.9 Bölüm Kuralı
   Kaynak: ap-videolar/src/episodes/cb209 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb209",
  amac: "Bu konu, iki fonksiyonun bölümünün türevini anlatıyor: (f/g)′ = (f′g − fg′)/g². Kuralı ve tekerlemesini öğrenecek, ne zaman gerekmediğini ve tablo, grafik, yatay teğet ve anlık değişim hızı sorularında nasıl kullanılacağını göreceksin.",
  bolumler: [
    {
      baslik: "Neden ayrı bir kural?",
      kisa: "Bölümün türevi, türevlerin bölümü değildir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🍕",
          baslik: "Doğum günü pizzası",
          metin: "Masada 12 dilim var, 4 misafir: kişi başı 3 dilim. Dilimler azalıyor, misafirler artıyor; ikisi birden değişiyor. Kişi başı payın değişim hızını bulmak için pizzanın hızını misafirlerin hızına bölmek işe yaramaz. Bölümün türevi için kendi kuralı gerekir."
        },
        {
          tip: "tuzak",
          baslik: "Türevleri bölme",
          metin: "Pay ve paydanın hızlarını bölmek bölümün türevini vermez.",
          yanlis: "(f/g)′ = f′/g′",
          dogru: "(f/g)′ = (f′g − fg′)/g²"
        }
      ]
    },
    {
      baslik: "Bölüm kuralı ve tekerleme",
      kisa: "Alt çarpı üstün türevi, eksi üst çarpı altın türevi, bölü alt kare.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "(f/g)′", alt: "bölümün türevi" },
            "=",
            { t: "f′g − fg′", alt: "pay" },
            "÷",
            { t: "g²", alt: "alt kare" }
          ],
          aciklama: "f üstteki (high), g alttaki (low) fonksiyon."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➗",
              terim: "Quotient rule",
              tr: "bölüm kuralı",
              tanim: "(f/g)′ = (f′g − fg′)/g². Üstteki f, alttaki g.",
              ornek: "(x/(x + 1))′ = 1/(x + 1)²."
            },
            {
              ikon: "🎵",
              terim: "Low d-high minus high d-low",
              tr: "alt çarpı üstün türevi eksi üst çarpı altın türevi",
              tanim: "Kuralın ezber tekerlemesi, sonuna \"over low squared\" gelir. Low = payda g, high = pay f, d = türev.",
              ornek: "low d-high = g·f′; high d-low = f·g′."
            },
            {
              ikon: "⬆️",
              terim: "Numerator",
              tr: "pay",
              tanim: "Kesrin üstü, yani f. Türevin payı f′g − fg′ ile başlar.",
              ornek: "(3x − 1)/(x² + 1) kesrinde pay 3x − 1."
            },
            {
              ikon: "⬇️",
              terim: "Denominator",
              tr: "payda",
              tanim: "Kesrin altı, yani g. Türevin paydası g² olur ve genellikle açılmaz.",
              ornek: "Payda x² + 1 ise türevin paydası (x² + 1)²."
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Tekerlemeyi parçala",
          adimlar: [
            { baslik: "Low d-high", metin: "alt × üstün türevi = g·f′" },
            { baslik: "minus high d-low", metin: "eksi üst × altın türevi = f·g′" },
            { baslik: "over low squared", metin: "hepsi altın karesine bölünür = g²" }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Sıra önemli",
          metin: "Çarpım kuralında terimlerin yerini değiştirebilirsin; burada eksi yüzünden değiştiremezsin. Pay her zaman alt × üstün türevi ile başlar.",
          yanlis: "(f/g)′ = (fg′ − f′g)/g²",
          dogru: "(f/g)′ = (f′g − fg′)/g². Ters yazarsan işaret döner."
        }
      ]
    },
    {
      baslik: "Örnek: (3x − 1)/(x² + 1)",
      kisa: "Dört parçayı yaz, payı aç, paydayı kare bırak.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Dört parça",
          head: ["high (f)", "d-high (f′)", "low (g)", "d-low (g′)"],
          rows: [["3x − 1", "3", "x² + 1", "2x"]]
        },
        {
          tip: "ornek",
          baslik: "y = (3x − 1)/(x² + 1)",
          durum: "y′ = ?",
          adimlar: [
            "low · d-high = (x² + 1)(3) = 3x² + 3.",
            "high · d-low = (3x − 1)(2x) = 6x² − 2x.",
            "Çıkar: 3x² + 3 − (6x² − 2x) = −3x² + 2x + 3. Eksi, parantezin her terimini çevirir.",
            "Payda: (x² + 1)² olarak kalır."
          ],
          sonuc: "y′ = (−3x² + 2x + 3)/(x² + 1)²"
        },
        {
          tip: "tuzak",
          baslik: "Paydayı açma",
          metin: "Payda g² biçiminde bırakılır. Açarsan hem uzar hem hata riski artar.",
          yanlis: "(x² + 1)² yerine x⁴ + 2x² + 1 yazıp devam etmek.",
          dogru: "Paydayı (x² + 1)² olarak bırak."
        }
      ]
    },
    {
      baslik: "Örnek: eˣ/x ve yatay teğet",
      kisa: "Türev sıfırsa pay sıfırdır; eˣ hiç sıfır olmaz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➡️",
              terim: "Horizontal tangent",
              tr: "yatay teğet",
              tanim: "Eğimi 0 olan teğet. Bölümün türevi sıfır olunca pay sıfır olur (payda sıfır değilken).",
              ornek: "y′ = 0 ⇒ eˣ(x − 1) = 0 ⇒ x = 1."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "y = eˣ/x",
          durum: "y′ = ? Teğet nerede yatay?",
          adimlar: [
            "low · d-high = x · eˣ.",
            "high · d-low = eˣ · 1.",
            "y′ = (x·eˣ − eˣ)/x² = eˣ(x − 1)/x².",
            "y′ = 0 için pay sıfır olmalı: eˣ(x − 1) = 0. eˣ hiç sıfır olmaz, bu yüzden x = 1."
          ],
          sonuc: "y′ = eˣ(x − 1)/x²; yatay teğet x = 1'de, nokta (1, e)"
        },
        {
          tip: "grafik",
          baslik: "y = eˣ/x: x = 1'de dibe vuruş",
          xlabel: "x",
          ylabel: "y",
          xmax: 3.5,
          ymax: 8,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            {
              id: "f",
              tip: "egri",
              renk: 0,
              noktalar: [
                [0.4, 3.73], [0.5, 3.297], [0.6, 3.037], [0.7, 2.877], [0.8, 2.782], [0.9, 2.733], [1, 2.718],
                [1.1, 2.731], [1.2, 2.767], [1.3, 2.823], [1.4, 2.897], [1.5, 2.988], [1.6, 3.096], [1.7, 3.22],
                [1.8, 3.361], [1.9, 3.519], [2, 3.695], [2.1, 3.889], [2.2, 4.102], [2.3, 4.337], [2.4, 4.593],
                [2.5, 4.873], [2.6, 5.178], [2.7, 5.511], [2.8, 5.873], [2.9, 6.267], [3, 6.695]
              ]
            },
            { id: "P", tip: "nokta", renk: 1, x: 1, y: 2.718, etiket: "(1, e)", gizli: true },
            {
              id: "t",
              tip: "cizgi",
              renk: 1,
              from: [0.55, 2.718],
              to: [1.45, 2.718],
              etiket: "yatay teğet",
              gizli: true
            },
            { id: "l", tip: "yazi", x: 0.75, y: 5.3, metin: "y′ < 0", gizli: true },
            { id: "r", tip: "yazi", x: 2.2, y: 5.3, metin: "y′ > 0", gizli: true }
          ],
          durumlar: [
            { metin: "y = eˣ/x, x > 0 için." },
            { metin: "x = 1'de eğri en alt noktasında: y = e ≈ 2,72 ve teğet yatay.", goster: ["P", "t"] },
            { metin: "x = 1'in solunda y′ < 0 (eğri iniyor), sağında y′ > 0 (çıkıyor).", goster: ["l", "r"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "eˣ sıfır olmaz",
          metin: "y′ = 0 denkleminde eˣ(x − 1) = 0 çarpımını görünce eˣ = 0 diye ikinci bir çözüm arama.",
          yanlis: "eˣ = 0 ya da x = 1",
          dogru: "eˣ hiçbir zaman 0 olmaz; çözüm yalnız x = 1."
        }
      ]
    },
    {
      baslik: "Bölüm kuralı gerekmeyen durumlar",
      kisa: "Payda sabitse ya da pay sabit ve payda tek terimliyse yeniden yaz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧹",
              terim: "Rewrite before differentiating",
              tr: "türevden önce düzenle",
              tanim: "Payda sabitse sabit katı dışarı al; pay sabit ve payda tek terimliyse kuvvet olarak yaz. Sonra kuvvet ve sabit kat kuralları yeter.",
              ornek: "7/x³ = 7x⁻³."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Önce yeniden yaz",
          head: ["Verilen", "Yeniden yaz", "Türev"],
          rows: [["(x³ − 2x)/4", "¼ · (x³ − 2x)", "(3x² − 2)/4"], ["7/x³", "7x⁻³", "−21/x⁴"]],
          not: "Bölüm kuralıyla 7/x³ de aynı sonucu verir: (0·x³ − 7·3x²)/x⁶ = −21/x⁴. Ama yeniden yazmak daha hızlıdır."
        },
        {
          tip: "tuzak",
          baslik: "Her bölüme kural şart değil",
          metin: "Payda sabit ya da pay sabit ve payda tek terimliyse önce yeniden yaz; hem hızlı hem daha az hata.",
          yanlis: "Bölüm gördüm, hemen bölüm kuralı.",
          dogru: "Önce bak: payda sabit mi, pay sabit ve payda tek terimli mi? Öyleyse yeniden yaz."
        }
      ]
    },
    {
      baslik: "Tablodan türev değeri",
      kisa: "Üstteki fonksiyon f, alttaki g; kim üstte, ona dikkat.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🗂️",
              terim: "Table of values",
              tr: "değer tablosu",
              tanim: "x, f, f′, g, g′ değerlerini veren tablo. Sorulan x'in satırından dört değeri alıp formüle yerleştirirsin.",
              ornek: "x = 2: f = 4, f′ = −1, g = 2, g′ = 3."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "x = 2'de h = f/g",
          durum: "x = 2'de f = 4, f′ = −1, g = 2, g′ = 3. h′(2) = ? Tersi (g/f)′(2) = ?",
          adimlar: [
            "Pay: f′g − fg′ = (−1)(2) − (4)(3) = −2 − 12 = −14.",
            "Payda: g² = 2² = 4. Yani h′(2) = −14/4 = −7/2.",
            "Tersi (g/f): pay g′f − gf′ = (3)(4) − (2)(−1) = 12 + 2 = 14; payda f² = 16.",
            "(g/f)′(2) = 14/16 = 7/8."
          ],
          sonuc: "(f/g)′(2) = −7/2, (g/f)′(2) = 7/8"
        },
        {
          tip: "ikili",
          sol: { ikon: "⬆️", baslik: "(f/g)′: f üstte", maddeler: ["Pay: f′g − fg′", "Payda: g²"] },
          sag: { ikon: "⬇️", baslik: "(g/f)′: g üstte", maddeler: ["Pay: g′f − gf′", "Payda: f²"] },
          oyun: [
            { metin: "Pay (−1)(2) − (4)(3) = −14, payda 4", cevap: "sol", neden: "f′g − fg′ ve g² = 4: f üstte." },
            { metin: "Pay (3)(4) − (2)(−1) = 14, payda 16", cevap: "sag", neden: "g′f − gf′ ve f² = 16: g üstte." },
            { metin: "Sonuç −7/2", cevap: "sol", neden: "−14/4: (f/g)′(2)." },
            { metin: "Sonuç 7/8", cevap: "sag", neden: "14/16: (g/f)′(2)." }
          ]
        }
      ]
    },
    {
      baslik: "Grafikten türev: doğru parçaları",
      kisa: "Doğru parçasında değer yüksekliktir, türev eğimdir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "h = f/g, h′(1) = ?",
          durum: "f, (0, −1)'den (2, 5)'e; g, (0, 4)'ten (4, 0)'a giden doğru parçaları.",
          adimlar: [
            "Grafikten oku: f(1) = 2, f′(1) = 3 (eğim), g(1) = 3, g′(1) = −1 (eğim).",
            "Pay: f′g − fg′ = (3)(3) − (2)(−1) = 9 + 2 = 11.",
            "Payda: g² = 3² = 9."
          ],
          sonuc: "h′(1) = 11/9"
        },
        {
          tip: "grafik",
          baslik: "f ve g doğru parçaları",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 0, label: "−1" }, { v: 1, label: "0" }, { v: 3, label: "2" }, { v: 5, label: "4" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 1], to: [4, 1] },
            { id: "F", tip: "cizgi", renk: 0, from: [0, 0], to: [2, 6], etiket: "f" },
            { id: "G", tip: "cizgi", renk: 2, from: [0, 5], to: [4, 1], etiket: "g" },
            { id: "V", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 6], gizli: true },
            { id: "pf", tip: "nokta", renk: 0, x: 1, y: 3, etiket: "f(1) = 2", gizli: true },
            { id: "pg", tip: "nokta", renk: 2, x: 1, y: 4, etiket: "g(1) = 3", gizli: true },
            { id: "sf", tip: "yazi", x: 2.9, y: 5.4, metin: "f′ = 3", gizli: true },
            { id: "sg", tip: "yazi", x: 3, y: 2.9, metin: "g′ = −1", gizli: true },
            { id: "rs", tip: "yazi", x: 2.8, y: 0.45, metin: "h′(1) = 11/9", gizli: true }
          ],
          durumlar: [
            { metin: "f: (0, −1)'den (2, 5)'e, g: (0, 4)'ten (4, 0)'a. Kesikli çizgi gerçek x ekseni." },
            { metin: "x = 1'de değerler: f(1) = 2 ve g(1) = 3.", goster: ["V", "pf", "pg"] },
            { metin: "Eğimler: f′ = 3 (1 sağa 3 yukarı), g′ = −1 (1 sağa 1 aşağı).", goster: ["sf", "sg"] },
            { metin: "h′(1) = (f′g − fg′)/g² = (9 + 2)/9 = 11/9.", goster: ["rs"] }
          ]
        }
      ]
    },
    {
      baslik: "Anlık değişim hızı ve verilen eğim",
      kisa: "Anlık değişim hızı türevdir; eğim verilirse türevi ona eşitle.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⏱️",
              terim: "Instantaneous rate of change",
              tr: "anlık değişim hızı",
              tanim: "Türevin bir noktadaki değeri. \"Anlık değişim hızı\" türev demenin başka bir yoludur.",
              ornek: "f′(3) = 1/2: x = 3'te anlık değişim hızı 1/2."
            },
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "x = a'daki teğetin eğimi f′(a), değdiği nokta (a, f(a)).",
              ornek: "f(3) = 5, f′(3) = 1/2 ⇒ y − 5 = ½(x − 3)."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = (x² + 1)/(x − 1), x = 3'te hız",
          durum: "Anlık değişim hızı f′(3) = ?",
          adimlar: [
            "Pay: 2x(x − 1) − (x² + 1)(1) = 2x² − 2x − x² − 1 = x² − 2x − 1.",
            "f′(x) = (x² − 2x − 1)/(x − 1)².",
            "x = 3: (9 − 6 − 1)/(3 − 1)² = 2/4 = 1/2."
          ],
          sonuc: "f′(3) = 1/2 (nokta: f(3) = 5)"
        },
        {
          tip: "ornek",
          baslik: "f(x) = x/(x + 2): eğim 1/2 nerede?",
          durum: "Teğetin eğiminin 1/2 olduğu noktaları bul.",
          adimlar: [
            "f′(x) = [(x + 2)(1) − x(1)]/(x + 2)² = 2/(x + 2)².",
            "2/(x + 2)² = 1/2 ⇒ (x + 2)² = 4.",
            "Karekök: x + 2 = 2 ya da x + 2 = −2 ⇒ x = 0 ya da x = −4.",
            "Noktalar: f(0) = 0 ve f(−4) = −4/(−2) = 2."
          ],
          sonuc: "(0, 0) ve (−4, 2)"
        },
        {
          tip: "tuzak",
          baslik: "Eksi kökü unutma",
          metin: "Karekök alırken ± yazmazsan ikinci noktayı kaçırırsın; şıklarda tek noktalı yanlış cevap hep vardır.",
          yanlis: "(x + 2)² = 4 ⇒ x = 0",
          dogru: "x + 2 = ±2 ⇒ x = 0 ve x = −4"
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
            "(f/g)′ = (f′g − fg′)/g²: alt çarpı üstün türevi, eksi üst çarpı altın türevi, bölü alt kare.",
            "Sıra değişirse işaret döner; paydayı açma, g² olarak bırak.",
            "Payda sabitse ya da pay sabit ve payda tek terimliyse önce yeniden yaz.",
            "Tabloda ve grafikte dört değeri doğru yere koy: üstteki f, alttaki g.",
            "Türevin sıfırı payın sıfırıdır (payda sıfır değilken); eˣ hiç sıfır olmaz.",
            "Anlık değişim hızı = türevin değeri.",
            "Eğim verilince türevi ona eşitle; karekökte ± yazmayı unutma."
          ]
        }
      ]
    }
  ]
};
