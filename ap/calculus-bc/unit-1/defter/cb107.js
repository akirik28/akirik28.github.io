/* Kitpath not defteri · cb107 · 1.12–1.13 Aralıkta Süreklilik ve Süreksizliği Giderme
   Kaynak: ap-videolar/src/episodes/cb107 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb107",
  amac: "Bu konu bir fonksiyonun hangi *intervals* (aralıklarda) sürekli olduğunu bulmayı ve bir süreksizliği nasıl onaracağını anlatıyor. Tanım kümesinden süreklilik aralığı yazmayı, deliği doldurmayı ve parçalı fonksiyonda k bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Tanıdık fonksiyonlar tanım kümelerinde süreklidir",
      kisa: "Tanımlı oldukları her yerde sürekli olurlar; bozuk noktaları çıkar.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🚇",
          baslik: "Bakımdaki metro hattı",
          metin: "Hatta iki istasyon bakım için kapalı: x = −1 ve x = 5. Aktarmasız gidebildiğin duraklar üç parça oluşturur: (−∞, −1), (−1, 5) ve (5, ∞). Süreklilik de bir aralık listesidir: bozuk noktaları çıkar, kalanı yaz."
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🛤️", terim: "Continuous on an interval", tr: "aralıkta sürekli", tanim: "Aralığın her noktasında sürekli olmak.", ornek: "y = sin x her aralıkta süreklidir." },
            { ikon: "🗺️", terim: "Domain", tr: "tanım kümesi", tanim: "Fonksiyonun tanımlı olduğu x değerleri. Süreklilik yalnızca tanım kümesinde sorulur.", ornek: "ln x için tanım kümesi (0, ∞)." },
            { ikon: "📈", terim: "Polynomial function", tr: "polinom fonksiyon", tanim: "x'in tam kuvvetlerinden oluşan fonksiyon. Her yerde süreklidir.", ornek: "x³ − 3x, (−∞, ∞) üzerinde süreklidir." },
            { ikon: "➗", terim: "Rational function", tr: "rasyonel fonksiyon", tanim: "İki polinomun oranı. Paydayı sıfır yapan noktalar hariç süreklidir.", ornek: "1/(x − 2), x ≠ 2 için süreklidir." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Hangi fonksiyon nerede sürekli?",
          head: ["Fonksiyon", "Sürekli olduğu yer"],
          rows: [["Polinom (x³ − 3x)", "(−∞, ∞)"], ["Rasyonel (1/(x − 2))", "x ≠ 2"], ["Karekök (√x)", "[0, ∞)"], ["sin x ve cos x", "(−∞, ∞)"], ["tan x", "cos x = 0 olan yerler hariç (x ≠ π/2 + kπ)"], ["eˣ", "(−∞, ∞)"], ["ln x", "(0, ∞)"]],
          not: "Bunların toplamı, çarpımı, bölümü ve bileşkesi de tanım kümelerinde süreklidir."
        },
        {
          tip: "ikili",
          sol: { ikon: "✅", baslik: "ℝ'de sürekli", maddeler: ["Her x için tanımlı", "Kopukluk yok"] },
          sag: { ikon: "⛔", baslik: "ℝ'de sürekli değil", maddeler: ["Bazı x'lerde tanımsız", "Orada kopukluk var"] },
          oyun: [
            { metin: "f(x) = x³ − 3x", cevap: "sol", neden: "Polinom, her yerde sürekli." },
            { metin: "f(x) = 1/(x − 2)", cevap: "sag", neden: "x = 2'de payda sıfır: tanımsız." },
            { metin: "f(x) = eˣ", cevap: "sol", neden: "Üstel fonksiyon her yerde sürekli." },
            { metin: "f(x) = ln x", cevap: "sag", neden: "Yalnızca x > 0 için tanımlı." },
            { metin: "f(x) = tan x", cevap: "sag", neden: "cos x = 0 olan noktalarda tanımsız." }
          ]
        }
      ]
    },
    {
      baslik: "Karekök ve kapalı aralıkta süreklilik",
      kisa: "Kök içi sıfır ya da pozitif olmalı; kapalı uçta tek taraflı limit yeter.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🔒", terim: "Closed interval", tr: "kapalı aralık", tanim: "Uç noktaları da içeren [a, b] aralığı. İçeride sürekli olmak ve uçlarda tek taraflı limitin f değerine eşit olması gerekir.", ornek: "√x, [0, 4] üzerinde süreklidir." },
            { ikon: "📍", terim: "Endpoint", tr: "uç nokta", tanim: "Aralığın başı ya da sonu; oraya yalnız içeriden yaklaşılabilir.", ornek: "[0, 4] için 0'a sağdan, 4'e soldan yaklaşılır." }
          ]
        },
        {
          tip: "ornek",
          baslik: "f(x) = √(10 − 2x) nerede sürekli?",
          durum: "Karekökün içi negatif olamaz.",
          adimlar: ["10 − 2x ≥ 0 olmalı, buradan x ≤ 5.", "Tanım kümesi (−∞, 5]; f burada süreklidir.", "Uç x = 5'e yalnız soldan yaklaşılır.", "lim x→5⁻ √(10 − 2x) = 0 = f(5): uçta da sürekli."],
          sonuc: "(−∞, 5], 5 dahil."
        },
        {
          tip: "grafik",
          baslik: "y = √(10 − 2x): tanım kümesi (−∞, 5]",
          xlabel: "x",
          ylabel: "y",
          xmax: 8,
          ymax: 5,
          xticks: [
            { v: 0, label: "-3" },
            { v: 3, label: "0" },
            { v: 8, label: "5" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [3, 0], to: [3, 5] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[-1.7763568394002505e-15, 4], [0.9687499999999991, 3.7500000000000004], [1.875, 3.5], [2.7187499999999982, 3.2500000000000004], [3.499999999999999, 3.0000000000000004], [4.21875, 2.75], [4.875, 2.5], [5.46875, 2.25], [6, 2], [6.46875, 1.75], [6.875, 1.5], [7.21875, 1.25], [7.5, 1], [7.71875, 0.75], [7.875, 0.5], [7.96875, 0.25], [8, 0]], gizli: true },
            { id: "ep", tip: "nokta", x: 8, y: 0, renk: 1, etiket: "(5, 0)", gizli: true },
            { id: "mv", tip: "nokta", x: 7.5, y: 1, renk: 2, gizli: true },
            { id: "tx", tip: "yazi", x: 5.2, y: 4.3, metin: "x ≤ 5", gizli: true }
          ],
          durumlar: [
            { metin: "10 − 2x ≥ 0 olmalı: yalnızca x ≤ 5 için grafik var. (Kesikli mor çizgi: gerçek y ekseni.)", goster: ["c", "tx"] },
            { metin: "x = 5'te dolu bir uç nokta var: f(5) = 0. Sağ taraf tanımsız.", goster: ["ep"] },
            { metin: "Uca yalnız soldan yaklaşabiliriz. Kırmızı nokta x = 4,5'te: f = 1.", goster: ["mv"] },
            { metin: "Soldan limit 0, f(5) = 0: uçta ==tek taraflı süreklilik== sağlanır.", set: { mv: { x: 8, y: 0 } } }
          ]
        },
        {
          tip: "tuzak",
          metin: "Kapalı uçta yalnız içeriden gelen tek taraflı limit yeter; dışarısı zaten tanımsızdır. Bu tanım önemli: ara değer teoremi (1.16) kapalı aralıkta süreklilik ister.",
          yanlis: "x = 5'te sağdan limit yok, o hâlde f orada sürekli değildir.",
          dogru: "Kapalı uçta lim x→5⁻ f(x) = f(5) olması yeter."
        }
      ]
    },
    {
      baslik: "Rasyonel fonksiyon: bozuk noktaları çıkar",
      kisa: "Paydayı sıfır yapan noktaları çıkar; sadeleşen delik, kalan asimptot olur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "g(x) = (x + 1)/(x² − 4x − 5) hangi aralıklarda sürekli?",
          durum: "Önce paydanın köklerini bul.",
          adimlar: ["Paydayı sıfırla: x² − 4x − 5 = (x − 5)(x + 1) = 0, kökler x = 5 ve x = −1.", "g bu iki nokta dışında her yerde sürekli.", "Aralıklar: (−∞, −1), (−1, 5) ve (5, ∞); üç açık aralık.", "Bonus: x ≠ −1 için g(x) = 1/(x − 5). x = −1'de çarpan sadeleşir: delik, yüksekliği 1/(−1 − 5) = −1/6.", "x = 5'te sadeleşme yok: dikey asimptot."],
          sonuc: "(−∞, −1) ∪ (−1, 5) ∪ (5, ∞)"
        },
        {
          tip: "grafik",
          baslik: "g(x) = (x + 1)/(x² − 4x − 5) = 1/(x − 5) (x ≠ −1)",
          xlabel: "x",
          ylabel: "y",
          xmax: 13,
          ymax: 8,
          xticks: [
            { v: 3, label: "-1" },
            { v: 9, label: "5" }
          ],
          yticks: [
            { v: 2, label: "-2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [4, 0], to: [4, 8] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [0, 4], to: [13, 4] },
            { id: "L1", tip: "egri", renk: 0, noktalar: [[0, 3.888888888888889], [0.44166666666666643, 3.8831548198636807], [0.8833333333333333, 3.8767967145790556], [1.3250000000000002, 3.8697068403908794], [1.7666666666666666, 3.8617511520737327], [2.2083333333333335, 3.852760736196319], [2.65, 3.84251968503937]], gizli: true },
            { id: "L2", tip: "egri", renk: 0, noktalar: [[3.35, 3.8230088495575223], [3.875317767865181, 3.8048659497891593], [4.371454647172044, 3.7839494001308602], [4.838694090835126, 3.7596908225858625], [5.277331135486746, 3.731375516760943], [5.6876735248022925, 3.6980973924255727], [6.070043012082518, 3.658698061396878], [6.424776883300698, 3.611684131943599], [6.752229754572923, 3.555114673292599], [7.052775715862193, 3.486448475326621], [7.326810918256028, 3.4023389161984636], [7.574756739550233, 3.298365389439254], [7.797063719169499, 3.1687007733197596], [7.994216540964269, 3.005750202972393], [8.166740483639764, 2.7998936941421286], [8.315209996876806, 2.539698308329278], [8.440260485802723, 2.2134546969868643], [8.542605195984423, 1.8137049410689308], [8.623060774871192, 1.3470524335633125], [8.682589022860123, 0.8495103445672001], [8.722373246514936, 0.3980416604417849], [8.743987378547883, 0.0939425785808945], [8.75, 0]], gizli: true },
            { id: "R", tip: "egri", renk: 0, noktalar: [[13, 4.25], [12.63519599453807, 4.275088331276364], [12.290656495019414, 4.303890728647477], [11.966184659142273, 4.337133427252358], [11.661575600356427, 4.375717300634287], [11.376615607776186, 4.420766402748531], [11.111081241609362, 4.47369091264231], [10.864738275485626, 4.536268286625679], [10.637340448213248, 4.610746531725429], [10.428627975095699, 4.69997229329981], [10.238325751211093, 4.8075419565667525], [10.066141153090117, 4.9379621048316045], [9.911761306132291, 5.0967782831693285], [9.774849624330368, 5.290572994552598], [9.65504133080572, 5.526621226739955], [9.551937502168885, 5.81179933610312], [9.465096884859221, 6.150089653476584], [9.39402416945526, 6.537915380628809], [9.338152239672782, 6.9572478980700065], [9.296813178569359, 7.369122640780326], [9.26918524547574, 7.714913862506352], [9.25417543156397, 7.934290556120574], [9.25, 8]], gizli: true },
            { id: "hole", tip: "yazi", x: 3, y: 3.641, metin: "○", gizli: true },
            { id: "th", tip: "yazi", x: 2.6, y: 5.2, metin: "delik", hiza: "end", gizli: true },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [9, 0], to: [9, 8], gizli: true },
            { id: "tv", tip: "yazi", x: 9.3, y: 7.2, metin: "x = 5 VA", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Sadeleşince x ≠ −1 için g(x) = 1/(x − 5). (Kesikli mor çizgiler gerçek eksenler.)", goster: ["L1", "L2", "R"] },
            { metin: "x = −1'de sadeleşen çarpan ==delik== bırakır: (−1, −1/6). Orada g tanımsız.", goster: ["hole", "th"] },
            { metin: "x = 5'te sadeleşme yok: ==dikey asimptot==.", goster: ["va", "tv"] }
          ]
        },
        {
          tip: "tuzak",
          metin: "Süreklilik aralığını yazarken sadeleşen (delik) noktayı da çıkar: g orada tanımsızdır.",
          yanlis: "Sadeleşince x = −1 sorun olmaktan çıkar; yalnızca x = 5'i çıkarırım.",
          dogru: "g(−1) tanımsız; ikisini de çıkar: (−∞, −1), (−1, 5), (5, ∞)."
        }
      ]
    },
    {
      baslik: "Süreksizliği gidermek: deliği doldur",
      kisa: "Deliği doldurmak için f(c)'yi limitin değerine eşitle.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🔧", terim: "Removing a discontinuity", tr: "süreksizliği gidermek", tanim: "Limiti var olan bir süreksizliği, tek bir noktayı yeniden tanımlayarak onarmak.", ornek: "Deliği olan bir doğruya eksik noktayı eklemek." },
            { ikon: "✍️", terim: "Redefine f(c)", tr: "f(c)'yi yeniden tanımlamak", tanim: "f(c)'yi limitin değerine eşitlemek: yeni tanımda x = c için değer limit olur.", ornek: "x ≠ 4 iken eski formül, x = 4 iken 6." }
          ]
        },
        {
          tip: "ornek",
          baslik: "(x² − 2x − 8)/(x − 4) deliğini doldur",
          durum: "f(x) = (x² − 2x − 8)/(x − 4), x = 4'te tanımsız.",
          adimlar: ["Pay çarpanlanır: (x − 4)(x + 2). Sadeleşince x ≠ 4 için f(x) = x + 2.", "Limit: lim x→4 f(x) = 4 + 2 = 6.", "Yeni tanım: x ≠ 4 iken eski formül, x = 4 iken 6.", "Artık f(4) = limit = 6: fonksiyon x = 4'te sürekli."],
          sonuc: "F(x) = (x² − 2x − 8)/(x − 4) (x ≠ 4), F(4) = 6."
        },
        {
          tip: "grafik",
          baslik: "f(x) = (x² − 2x − 8)/(x − 4) = x + 2 (x ≠ 4)",
          xlabel: "x",
          ylabel: "y",
          xmax: 7,
          ymax: 10,
          xticks: [{ v: 4, label: "4" }],
          yticks: [{ v: 6, label: "6" }],
          ogeler: [
            { id: "l1", tip: "cizgi", renk: 0, from: [0, 2], to: [3.85, 5.85] },
            { id: "l2", tip: "cizgi", renk: 0, from: [4.15, 6.15], to: [7, 9] },
            { id: "hole", tip: "yazi", x: 4, y: 5.76, metin: "○" },
            { id: "fill", tip: "nokta", x: 4, y: 9, renk: 1, etiket: "f(4) = ?", gizli: true }
          ],
          durumlar: [
            { metin: "Grafik y = x + 2 doğrusu, ama x = 4'te bir ==delik== var: f(4) tanımsız." },
            { metin: "Delikte limit 6. Deliği doldurmak için bir nokta getiriyoruz.", goster: ["fill"] },
            { metin: "f(4) = 6 tanımlanınca nokta deliğe oturur: grafik tek parça, x = 4'te ==sürekli==.", set: { fill: { y: 6, etiket: "f(4) = 6" } }, gizle: ["hole"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "Trigonometrik örnek: sin 3x / x",
          durum: "f(x) = (sin 3x)/x (x ≠ 0), f(0) = a. f sürekli olacak şekilde a kaç?",
          adimlar: ["Limit: lim x→0 (sin 3x)/x = 3 (sin kx / x kuralı).", "Grafik, x = 0'ın üstünde 3 yüksekliğinde bir delik bırakır.", "Süreklilik için f(0) = limit olmalı."],
          sonuc: "a = 3. Tarif hep aynı: önce limiti bul, sonra değeri ona eşitle."
        }
      ]
    },
    {
      baslik: "Giderilemeyen süreksizlikler",
      kisa: "Yalnızca limiti olan süreksizlik doldurulur; sıçrama ve sonsuz doldurulmaz.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🚫", terim: "Non-removable", tr: "giderilemez", tanim: "Limit olmadığı için hiçbir f(c) değeri sürekliliği sağlamaz: sıçrama ve sonsuz süreksizlik.", ornek: "Soldan 1, sağdan 3 giden bir fonksiyon." },
            { ikon: "🧩", terim: "Piecewise function", tr: "parçalı fonksiyon", tanim: "Farklı aralıklarda farklı formüllerle tanımlanan fonksiyon. Süreklilik parçaların birleştiği noktada sorulur.", ornek: "x < 1 için x, x > 1 için x + 2." }
          ]
        },
        {
          tip: "grafik",
          baslik: "x < 1 için x, x > 1 için x + 2",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 6,
          xticks: [
            { v: 2, label: "1" },
            { v: 4, label: "3" }
          ],
          yticks: [
            { v: 2, label: "1" },
            { v: 4, label: "3" }
          ],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 6] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [0, 1], to: [4, 1] },
            { id: "a", tip: "cizgi", renk: 0, from: [0, 0], to: [1.85, 1.85] },
            { id: "ao", tip: "yazi", x: 2, y: 1.856, metin: "○" },
            { id: "b", tip: "cizgi", renk: 0, from: [2.15, 4.15], to: [4, 6] },
            { id: "bo", tip: "yazi", x: 2, y: 3.856, metin: "○" },
            { id: "m", tip: "nokta", x: 2, y: 2, renk: 2, etiket: "f(1) = 1", gizli: true }
          ],
          durumlar: [
            { metin: "Soldan limit 1, sağdan limit 3. Kesikli mor çizgiler gerçek eksenler." },
            { metin: "f(1) = 1 verelim: sol uca oturdu ama sağ uç hâlâ 3'te.", goster: ["m"] },
            { metin: "f(1) = 2 desek: iki uca da uzak.", set: { m: { y: 3, etiket: "f(1) = 2" } } },
            { metin: "f(1) = 3 desek: sağ uç tamam ama sol uç ayrık. Hiçbir değer işe yaramaz: ==giderilemez==.", set: { m: { y: 4, etiket: "f(1) = 3" } } }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🔧", baslik: "Doldurulabilir", maddeler: ["Limit var", "f(c)'yi limite eşitle"] },
          sag: { ikon: "🚫", baslik: "Doldurulamaz", maddeler: ["Limit yok", "Sıçrama ya da sonsuz"] },
          oyun: [
            { metin: "(x² − 9)/(x − 3), x = 3'te", cevap: "sol", neden: "Sadeleşir: limit 6, f(3) = 6 diye tanımlanır." },
            { metin: "x < 1 için x, x > 1 için x + 2, x = 1'de", cevap: "sag", neden: "Soldan 1, sağdan 3: sıçrama." },
            { metin: "1/(x − 2), x = 2'de", cevap: "sag", neden: "Sonsuza kaçıyor: tek bir yükseklik yok." },
            { metin: "(x² − 1)/(x − 1), x = 1'de", cevap: "sol", neden: "Sadeleşir: limit 2, f(1) = 2 yeter." },
            { metin: "|x|/x, x = 0'da", cevap: "sag", neden: "Soldan −1, sağdan 1: sıçrama." }
          ]
        }
      ]
    },
    {
      baslik: "Parçalı fonksiyonda k bulmak",
      kisa: "Soldan limit, sağdan limit ve f(c) eşit olacak şekilde k'yi çöz.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "k kaç olmalı ki f sürekli olsun?",
          durum: "f(x) = kx + 1 (x ≤ 2), x² − k (x > 2).",
          adimlar: ["Soldan limit ve f(2): x ≤ 2 parçasından 2k + 1.", "Sağdan limit: 2² − k = 4 − k.", "Eşitle: 2k + 1 = 4 − k, buradan 3k = 3 ve k = 1.", "Kontrol: soldan 2 × 1 + 1 = 3, sağdan 4 − 1 = 3. İki parça (2, 3)'te buluşur."],
          sonuc: "k = 1 (ortak değer 3)."
        },
        {
          tip: "grafik",
          baslik: "f(x) = kx + 1 (x ≤ 2), x² − k (x > 2): k değişince",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 10,
          xticks: [{ v: 2, label: "2" }],
          yticks: [{ v: 3, label: "3" }],
          ogeler: [
            { id: "L", tip: "cizgi", renk: 0, from: [0, 1], to: [2, 1] },
            { id: "R", tip: "egri", renk: 2, noktalar: [[2, 4], [2.157142857142857, 4.6532653061224485], [2.3142857142857145, 5.3559183673469395], [2.4714285714285715, 6.1079591836734695], [2.6285714285714286, 6.909387755102041], [2.7857142857142856, 7.7602040816326525], [2.942857142857143, 8.660408163265307], [3.1, 9.610000000000001]] },
            { id: "fp", tip: "nokta", x: 2, y: 1, renk: 0 },
            { id: "ro", tip: "yazi", x: 2, y: 3.76, metin: "○" },
            { id: "kt", tip: "yazi", x: 0.9, y: 8.2, metin: "k = 0" },
            { id: "ok", tip: "nokta", x: 2, y: 3, renk: 1, gizli: true }
          ],
          durumlar: [
            { metin: "k = 0: soldan ve f(2) = 1, sağdan 4. Parçalar arasında boşluk var." },
            { metin: "k = 2: soldan 2k + 1 = 5, sağdan 4 − k = 2. Boşluk ters yöne geçti.", set: { L: { to: [2, 5] }, R: { noktalar: [[2, 2], [2.157142857142857, 2.6532653061224485], [2.3142857142857145, 3.3559183673469395], [2.4714285714285715, 4.1079591836734695], [2.6285714285714286, 4.909387755102041], [2.7857142857142856, 5.7602040816326525], [2.942857142857143, 6.660408163265307], [3.1, 7.610000000000001]] }, fp: { y: 5 }, ro: { y: 1.76 }, kt: { metin: "k = 2" } } },
            { metin: "k = 1: ikisi de 3. Parçalar (2, 3)'te ==el sıkışır==: f sürekli.", set: { L: { to: [2, 3] }, R: { noktalar: [[2, 3], [2.157142857142857, 3.6532653061224485], [2.3142857142857145, 4.3559183673469395], [2.4714285714285715, 5.1079591836734695], [2.6285714285714286, 5.909387755102041], [2.7857142857142856, 6.7602040816326525], [2.942857142857143, 7.660408163265307], [3.1, 8.610000000000001]] }, fp: { y: 3 }, ro: { y: 2.76 }, kt: { metin: "k = 1" } }, goster: ["ok"], gizle: ["ro"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "a kaç olmalı?",
          durum: "f(x) = ax² − 1 (x < 2), 3x + 1 (x ≥ 2) her yerde sürekli.",
          adimlar: ["x = 2'de iki parça buluşmalı.", "Soldan limit: a × 2² − 1 = 4a − 1.", "Sağdan limit ve f(2): 3 × 2 + 1 = 7.", "Eşitle: 4a − 1 = 7, 4a = 8, a = 2."],
          sonuc: "a = 2."
        },
        {
          tip: "tuzak",
          metin: "f(c), eşitlik işaretinin (≤ ya da ≥) olduğu parçadan hesaplanır. İki bilinmeyen varsa her birleşme noktasından bir denklem kur.",
          yanlis: "f(c)'yi her zaman sağ parçadan hesaplarım.",
          dogru: "f(c) hangi parça “≤” ya da “≥” içeriyorsa ondan gelir."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["Polinom, rasyonel, kök, trigonometrik, üstel ve logaritmik fonksiyonlar tanım kümelerinde süreklidir.", "Süreklilik aralığı için tanımsız noktaları çıkar; sadeleşen delik noktasını da.", "Kapalı aralıkta uçlarda yalnız içeriden gelen tek taraflı limit yeter.", "Deliği doldurmak için f(c)'yi limite eşitle.", "Sıçrama ve sonsuz süreksizlik doldurulamaz: limit yok.", "Parçalı fonksiyonda k için soldan limit, sağdan limit ve f(c)'yi eşitle.", "f(c), “≤” ya da “≥” olan parçadan gelir; iki bilinmeyende iki denklem kur."]
        }
      ]
    }
  ]
};
