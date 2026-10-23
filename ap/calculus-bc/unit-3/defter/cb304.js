/* Kitora not defteri · cb304 · 3.2-1 Kapalı Türev
   Kaynak: ap-videolar/src/episodes/cb304 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb304",
  amac: "Bu konu *implicit differentiation* yani kapalı türevi anlatıyor: y'yi tek başına yazamadığın denklemlerde eğim nasıl bulunur? y'li her terimin türevine dy/dx çarpanını eklemeyi ve dört adımlı yöntemi öğreneceksin.",
  bolumler: [
    {
      baslik: "Çember fonksiyon değil, ama teğeti var",
      kisa: "Fonksiyon olmayan eğrinin de her noktasında net bir yönü vardır.",
      bloklar: [
        { tip: "hikaye", ikon: "🐜", baslik: "Çemberin üstündeki karınca",
          metin: "Bir karınca, yarıçapı 5 olan bir çemberin üstünde yürüyor. Çember bir fonksiyon değil: dikey bir çizgi onu iki noktada keser. Ama karıncanın her adımda net bir yönü var; o yön, o noktadaki teğet. y'yi tek başına yazamadığımız bir denklemin eğimini nasıl buluruz? Cevap kapalı türev, yani kılık değiştirmiş zincir kuralı." },
        { tip: "grafik", baslik: "x² + y² = 25", xlabel: "x", ylabel: "y", xmax: 12, ymax: 12,
          xticks: [{ v: 1, label: "−5" }, { v: 3, label: "−3" }, { v: 6, label: "0" }, { v: 9, label: "3" }, { v: 11, label: "5" }], yticks: [{ v: 1, label: "−5" }, { v: 3, label: "−3" }, { v: 6, label: "0" }, { v: 9, label: "3" }, { v: 11, label: "5" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 6], to: [12, 6] },
            { id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [6, 0], to: [6, 12] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[11, 6], [10.981, 6.436], [10.924, 6.868], [10.83, 7.294], [10.698, 7.71], [10.532, 8.113], [10.33, 8.5], [10.096, 8.868], [9.83, 9.214], [9.536, 9.536], [9.214, 9.83], [8.868, 10.096], [8.5, 10.33], [8.113, 10.532], [7.71, 10.698], [7.294, 10.83], [6.868, 10.924], [6.436, 10.981], [6, 11], [5.564, 10.981], [5.132, 10.924], [4.706, 10.83], [4.29, 10.698], [3.887, 10.532], [3.5, 10.33], [3.132, 10.096], [2.786, 9.83], [2.464, 9.536], [2.17, 9.214], [1.904, 8.868], [1.67, 8.5], [1.468, 8.113], [1.302, 7.71], [1.17, 7.294], [1.076, 6.868], [1.019, 6.436], [1, 6], [1.019, 5.564], [1.076, 5.132], [1.17, 4.706], [1.302, 4.29], [1.468, 3.887], [1.67, 3.5], [1.904, 3.132], [2.17, 2.786], [2.464, 2.464], [2.786, 2.17], [3.132, 1.904], [3.5, 1.67], [3.887, 1.468], [4.29, 1.302], [4.706, 1.17], [5.132, 1.076], [5.564, 1.019], [6, 1], [6.436, 1.019], [6.868, 1.076], [7.294, 1.17], [7.71, 1.302], [8.113, 1.468], [8.5, 1.67], [8.868, 1.904], [9.214, 2.17], [9.536, 2.464], [9.83, 2.786], [10.096, 3.132], [10.33, 3.5], [10.532, 3.887], [10.698, 4.29], [10.83, 4.706], [10.924, 5.132], [10.981, 5.564], [11, 6]] },
            { id: "v", tip: "cizgi", renk: 3, kesik: true, from: [9, 0], to: [9, 12], gizli: true },
            { id: "p2", tip: "nokta", renk: 3, x: 9, y: 2, etiket: "(3, −4)", gizli: true },
            { id: "p1", tip: "nokta", renk: 2, x: 9, y: 10, etiket: "(3, 4)", gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [7, 11.5], to: [11, 8.5], etiket: "eğim −3/4", gizli: true }
          ],
          durumlar: [
            { metin: "Çember x² + y² = 25: merkezi orijinde, yarıçapı 5. Kesikli çizgiler gerçek eksenler." },
            { metin: "x = 3'te dikey çizgi çemberi iki noktada keser: (3, 4) ve (3, −4). Bu yüzden fonksiyon değil.", goster: ["v", "p1", "p2"] },
            { metin: "Yine de (3, 4)'te net bir teğet var: eğimi −3/4. Bunu y'yi çözmeden bulacağız.", gizle: ["v", "p2"], goster: ["p1", "t"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🕵️", terim: "Implicit differentiation", tr: "kapalı türev", tanim: "y'yi çözmeden, iki tarafın x'e göre türevini alma yöntemi. Yeni bir kural değil, zincir kuralıdır.", ornek: "x² + y² = 25 için iki tarafı da x'e göre türet." },
            { ikon: "⭕", terim: "Circle", tr: "çember", tanim: "Merkezi orijinde, yarıçapı r olan çember x² + y² = r². Her x için iki y değeri olduğundan fonksiyon değildir.", ornek: "x² + y² = 25: yarıçap 5." }
          ] }
      ]
    },
    {
      baslik: "Açık ve kapalı denklem",
      kisa: "Açıkta y yalnızdır; kapalıda x ve y birbirine karışmıştır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔓", terim: "Explicit equation", tr: "açık denklem", tanim: "y eşitliğin bir tarafında yalnız duruyor: y = f(x).", ornek: "y = x² + 1." },
            { ikon: "🔒", terim: "Implicit equation", tr: "kapalı denklem", tanim: "x ve y karışık; y'yi çözmek zor ya da imkânsız olabilir.", ornek: "x² + y² = 25 ve x³ + y³ = 6xy." }
          ] },
        { tip: "ikili", sol: { ikon: "🔓", baslik: "*Explicit*: açık", maddeler: ["y yalnız: y = x² + 1", "Doğrudan türev alınır"] },
          sag: { ikon: "🔒", baslik: "*Implicit*: kapalı", maddeler: ["x ve y karışık: x² + y² = 25", "Çözmeden olduğu gibi türetilir; x³ + y³ = 6xy gibi eğrilerde y'yi çözmek zaten zor"] },
          oyun: [
            { metin: "y = x² + 1", cevap: "sol", neden: "y yalnız." },
            { metin: "x² + y² = 25", cevap: "sag", neden: "x ve y aynı tarafta karışık." },
            { metin: "y = √(25 − x²)", cevap: "sol", neden: "Çemberin çözülmüş üst yarısı: y yalnız." },
            { metin: "x³ + y³ = 6xy", cevap: "sag", neden: "y'yi çözmek neredeyse imkânsız: kapalı." },
            { metin: "y = eˣ − 3", cevap: "sol", neden: "y bir tarafta yalnız." }
          ] }
      ]
    },
    {
      baslik: "Gizli fonksiyon: y'li terime dy/dx yapışır",
      kisa: "y'li her terimin türevine bir dy/dx çarpanı eklenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "dy/dx", tr: "y'nin x'e göre türevi", tanim: "y, x'in gizli bir fonksiyonu olduğundan y içeren her terimin türevinde çarpan olarak çıkar.", ornek: "d/dx y² = 2y · dy/dx." },
            { ikon: "⛓️", terim: "Chain rule", tr: "zincir kuralı", tanim: "Dış fonksiyonun türevi çarpı iç türev. Burada iç fonksiyon y, onun türevi dy/dx.", ornek: "y² için dış kare, iç y." }
          ] },
        { tip: "tablo", baslik: "x cinsinden ve y cinsinden türev", head: ["x cinsinden", "y cinsinden"],
          rows: [
            ["d/dx x² = 2x", "d/dx y² = 2y · dy/dx"],
            ["d/dx e^(3x) = 3e^(3x)", "d/dx e^(3y) = 3e^(3y) · dy/dx"],
            ["d/dx sin x = cos x", "d/dx sin y = cos y · dy/dx"]
          ], vurgu: 0, not: "Sağ sütunda her satırın sonuna dy/dx etiketi yapışıyor." },
        { tip: "tuzak", metin: "y² ile x² aynı kuralla türetilir, ama y'nin türevi 1 değildir; y, x'e bağlıdır. Etiketi unutmak puan kaybettirir.", yanlis: "d/dx y² = 2y.", dogru: "d/dx y² = 2y · dy/dx. y'li terimlere dy/dx eklenir, x'li terimlere eklenmez." }
      ]
    },
    {
      baslik: "Çemberde eğim: −x/y",
      kisa: "x² + y² = 25 için dy/dx = −x/y; teğet yarıçapa diktir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Constant", tr: "sabit", tanim: "Değişmeyen sayı. Türevi 0'dır; kendisi türevde kalmaz.", ornek: "x² + y² = 25: sağdaki 25'in türevi 0." },
            { ikon: "📏", terim: "Tangent line", tr: "teğet doğrusu", tanim: "Eğriye bir noktada değen doğru; eğimi o noktadaki dy/dx'tir.", ornek: "(3, 4) noktasında teğet eğimi −3/4." },
            { ikon: "📐", terim: "Slope", tr: "eğim", tanim: "Doğrunun dikliği. Cevapta hem x hem y çıkabilir; noktada ikisini de koy.", ornek: "−x/y: (3, 4) için −3/4." }
          ] },
        { tip: "ornek", baslik: "x² + y² = 25", durum: "dy/dx = ? ve (3, 4) noktasında eğim kaç?",
          adimlar: [
            "İki tarafın da x'e göre türevini al: 2x + 2y · dy/dx = 0. (25 sabit, türevi 0.)",
            "dy/dx'li terimi yalnız bırak: 2y · dy/dx = −2x.",
            "Böl: dy/dx = −x/y.",
            "(3, 4): −3/4. Yarıçapın eğimi 4/3; (−3/4) · (4/3) = −1, yani teğet yarıçapa dik."
          ], sonuc: "dy/dx = −x/y; (3, 4) noktasında −3/4" },
        { tip: "grafik", baslik: "Çember üzerinde kayan teğet: eğim −x/y", xlabel: "x", ylabel: "y", xmax: 12, ymax: 12,
          xticks: [{ v: 1, label: "−5" }, { v: 3, label: "−3" }, { v: 6, label: "0" }, { v: 9, label: "3" }, { v: 11, label: "5" }], yticks: [{ v: 1, label: "−5" }, { v: 3, label: "−3" }, { v: 6, label: "0" }, { v: 9, label: "3" }, { v: 11, label: "5" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 6], to: [12, 6] },
            { id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [6, 0], to: [6, 12] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[11, 6], [10.981, 6.436], [10.924, 6.868], [10.83, 7.294], [10.698, 7.71], [10.532, 8.113], [10.33, 8.5], [10.096, 8.868], [9.83, 9.214], [9.536, 9.536], [9.214, 9.83], [8.868, 10.096], [8.5, 10.33], [8.113, 10.532], [7.71, 10.698], [7.294, 10.83], [6.868, 10.924], [6.436, 10.981], [6, 11], [5.564, 10.981], [5.132, 10.924], [4.706, 10.83], [4.29, 10.698], [3.887, 10.532], [3.5, 10.33], [3.132, 10.096], [2.786, 9.83], [2.464, 9.536], [2.17, 9.214], [1.904, 8.868], [1.67, 8.5], [1.468, 8.113], [1.302, 7.71], [1.17, 7.294], [1.076, 6.868], [1.019, 6.436], [1, 6], [1.019, 5.564], [1.076, 5.132], [1.17, 4.706], [1.302, 4.29], [1.468, 3.887], [1.67, 3.5], [1.904, 3.132], [2.17, 2.786], [2.464, 2.464], [2.786, 2.17], [3.132, 1.904], [3.5, 1.67], [3.887, 1.468], [4.29, 1.302], [4.706, 1.17], [5.132, 1.076], [5.564, 1.019], [6, 1], [6.436, 1.019], [6.868, 1.076], [7.294, 1.17], [7.71, 1.302], [8.113, 1.468], [8.5, 1.67], [8.868, 1.904], [9.214, 2.17], [9.536, 2.464], [9.83, 2.786], [10.096, 3.132], [10.33, 3.5], [10.532, 3.887], [10.698, 4.29], [10.83, 4.706], [10.924, 5.132], [10.981, 5.564], [11, 6]] },
            { id: "r", tip: "cizgi", renk: 1, kesik: true, from: [6, 6], to: [9, 10] },
            { id: "p", tip: "nokta", renk: 2, x: 9, y: 10, etiket: "(3, 4)" },
            { id: "t", tip: "cizgi", renk: 2, from: [7, 11.5], to: [11, 8.5], etiket: "−3/4" }
          ],
          durumlar: [
            { metin: "(3, 4): eğim −x/y = −3/4. Yarıçapın eğimi 4/3 ve çarpımları −1: teğet yarıçapa dik." },
            { metin: "Tepe (0, 5): eğim 0, teğet yatay.", set: { r: { to: [6, 11] }, p: { x: 6, y: 11, etiket: "(0, 5)" }, t: { from: [4, 11], to: [8, 11], etiket: "0" } } },
            { metin: "(−3, 4): eğim −(−3)/4 = 3/4.", set: { r: { to: [3, 10] }, p: { x: 3, y: 10, etiket: "(−3, 4)" }, t: { from: [1, 8.5], to: [5, 11.5], etiket: "3/4" } } },
            { metin: "(5, 0): y = 0 olduğundan −x/y tanımsız; teğet dikey.", set: { r: { to: [11, 6] }, p: { x: 11, y: 6, etiket: "(5, 0)" }, t: { from: [11, 3], to: [11, 9], etiket: "tanımsız" } } }
          ] }
      ]
    },
    {
      baslik: "Dört adımlı yöntem",
      kisa: "Türev al, dy/dx'leri topla, parantezine al, böl.",
      bloklar: [
        { tip: "adimlar", baslik: "Kapalı türev yöntemi", adimlar: [
            { baslik: "1. Türev al", metin: "Denklemin iki tarafını x'e göre türet; y'li terimlere dy/dx ekle." },
            { baslik: "2. Topla", metin: "dy/dx'li terimleri bir yana, diğerlerini öbür yana al." },
            { baslik: "3. Parantezle", metin: "dy/dx'i parantezin dışına çıkar." },
            { baslik: "4. Böl", metin: "dy/dx'i yalnız bırak; noktada x ve y'yi yerine koy." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "✖️", terim: "Product rule", tr: "çarpım kuralı", tanim: "(uv)′ = u′v + uv′. xy, x·sin y, x·eʸ birer çarpımdır.", ornek: "d/dx (xy) = y + x · dy/dx." }
          ] },
        { tip: "ornek", baslik: "x² + xy + y² = 7", durum: "(1, 2) noktasında dy/dx = ?",
          adimlar: [
            "Nokta eğri üzerinde mi: 1 + 2 + 4 = 7. Evet.",
            "Adım 1, türev: 2x + (y + x · dy/dx) + 2y · dy/dx = 0. (xy çarpım kuralıyla.)",
            "Adım 2, topla: x · dy/dx + 2y · dy/dx = −2x − y.",
            "Adım 3, parantezle: dy/dx · (x + 2y) = −2x − y.",
            "Adım 4, böl: dy/dx = −(2x + y)/(x + 2y).",
            "(1, 2): −(2 + 2)/(1 + 4) = −4/5."
          ], sonuc: "dy/dx = −(2x + y)/(x + 2y); (1, 2) noktasında −4/5" },
        { tip: "tuzak", metin: "xy tek bir değişken değildir; iki fonksiyonun çarpımıdır. Çarpım kuralı unutulursa y'li terim eksik kalır.", yanlis: "d/dx (xy) = x · dy/dx.", dogru: "d/dx (xy) = y + x · dy/dx." }
      ]
    },
    {
      baslik: "AP örneği: eʸ + xy = e",
      kisa: "Noktada eğim için hem x'i hem y'yi yerine koy.",
      bloklar: [
        { tip: "ornek", baslik: "eʸ + xy = e", durum: "(0, 1) noktasında dy/dx = ?",
          adimlar: [
            "Nokta eğri üzerinde mi: e¹ + 0 · 1 = e. Evet.",
            "Türev: eʸ · dy/dx + y + x · dy/dx = 0. Sağdaki e sabit, türevi 0.",
            "Topla ve parantezle: dy/dx · (eʸ + x) = −y.",
            "Böl: dy/dx = −y/(eʸ + x).",
            "(0, 1): −1/(e + 0) = −1/e ≈ −0,37."
          ], sonuc: "dy/dx = −y/(eʸ + x); (0, 1) noktasında −1/e ≈ −0,37" },
        { tip: "grafik", baslik: "eʸ + xy = e eğrisi ve (0, 1)'deki teğet", xlabel: "x", ylabel: "y", xmax: 3, ymax: 2,
          xticks: [{ v: 0, label: "−1" }, { v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [1, 0], to: [1, 2] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1.42], [0.25, 1.308], [0.5, 1.199], [0.75, 1.096], [1, 1], [1.25, 0.912], [1.5, 0.834], [1.75, 0.763], [2, 0.702], [2.25, 0.647], [2.5, 0.599], [2.75, 0.556], [3, 0.519]] },
            { id: "p", tip: "nokta", renk: 2, x: 1, y: 1, etiket: "(0, 1)", gizli: true },
            { id: "t", tip: "cizgi", renk: 2, from: [0.2, 1.294], to: [1.8, 0.706], etiket: "eğim −0,37", gizli: true }
          ],
          durumlar: [
            { metin: "Eğri, x büyüdükçe yavaşça iniyor. Kesikli çizgi gerçek y ekseni (x = 0)." },
            { metin: "x = 0 için eʸ = e, yani y = 1: nokta (0, 1).", goster: ["p"] },
            { metin: "Eğim −1/e ≈ −0,37: hafif inen bir teğet.", goster: ["t"] }
          ] },
        { tip: "tuzak", metin: "Sağ taraftaki e, π ya da 25 gibi sabitlerin türevi 0'dır. Cevapta hem x hem y olması da normaldir; noktada ikisini de yerine koyarsın.", yanlis: "d/dx (e) = e ve cevapta y kalmamalı.", dogru: "d/dx (e) = 0; dy/dx = −y/(eʸ + x) gibi cevap hem x hem y içerebilir." }
      ]
    },
    {
      baslik: "Trigonometrik örnek: tan y = x",
      kisa: "tan y = x için dy/dx = 1/(1 + x²).",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "sec²y · dy/dx", alt: "tan y'nin türevi" }, "=",
            { t: "1", alt: "x'in türevi" }
          ], aciklama: "dy/dx = 1/sec²y = cos²y. Bunu x cinsinden yazmak için dik üçgen çiz." },
        { tip: "ornek", baslik: "tan y = x", durum: "dy/dx'i x cinsinden bul.",
          adimlar: [
            "Her iki tarafı türet: sec²y · dy/dx = 1.",
            "dy/dx = 1/sec²y = cos²y.",
            "Dik üçgen: y açısının karşısı x, komşusu 1, hipotenüs √(1 + x²).",
            "cos y = 1/√(1 + x²), yani cos²y = 1/(1 + x²)."
          ], sonuc: "dy/dx = 1/(1 + x²): arctan x'in türevi, ters trigonometri bölümünde (3.4) yine karşımıza çıkacak" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kapalı denklemde y'yi çözmeden iki tarafın x'e göre türevini al.",
            "y'li her terimde zincir kuralı: türevin sonuna dy/dx eklenir (d/dx y² = 2y · dy/dx); x'li terimlere eklenmez.",
            "xy, x·sin y gibi terimlerde çarpım kuralı: d/dx (xy) = y + x · dy/dx.",
            "Sağ taraftaki sabitin (25, e, π) türevi 0'dır.",
            "Dört adım: türev al, dy/dx'leri topla, parantezle, böl.",
            "Çemberde x² + y² = 25 için dy/dx = −x/y; teğet yarıçapa diktir.",
            "Cevapta hem x hem y olabilir; noktada ikisini de koy ve noktanın eğri üzerinde olduğunu kontrol et.",
            "tan y = x için dy/dx = cos²y = 1/(1 + x²)."
          ] }
      ]
    }
  ]
};
