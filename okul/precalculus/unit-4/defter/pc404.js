/* Kitora not defteri · pc404 · 4.4 Trigonometrik Fonksiyonların Grafikleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus Unit 4) + MEB 10. sınıf trigonometri. Blok türleri: /ap/_kit/defter.js başı.
   Not: grafiklerde x ekseni 4π'yi 14 birime, y ekseni (orta çizgi y = 0) 5.5'e oturtur: ızgara x = 3.5·x/π, y = 5.5 + 1.5·y.
   Yardımcı işlevler yalnızca eğri noktalarını hesaplar; her eğri aynı sayıda noktayla çizilir (durumlar arası yumuşak geçiş için). */
window.DEFTER = (function () {
  var PI = Math.PI;
  function r2(v) { return Math.round(v * 100) / 100; }
  function gx(x) { return r2(3.5 * x / PI); }
  function gy(y) { return r2(5.5 + 1.5 * y); }
  /* f(x), 0 … 4π üstünde 112 noktalı eğri */
  function dalga(f) { var a = [], i, x; for (i = 0; i <= 112; i++) { x = 4 * PI * i / 112; a.push([gx(x), gy(f(x))]); } return a; }
  var XT = [{ v: 1.75, label: "π/2" }, { v: 3.5, label: "π" }, { v: 5.25, label: "3π/2" }, { v: 7, label: "2π" }, { v: 10.5, label: "3π" }, { v: 14, label: "4π" }];
  var YT = [{ v: 1, label: "−3" }, { v: 2.5, label: "−2" }, { v: 4, label: "−1" }, { v: 5.5, label: "0" }, { v: 7, label: "1" }, { v: 8.5, label: "2" }, { v: 10, label: "3" }];
  function sin(A, B, C, D) { return function (x) { return A * Math.sin(B * (x - C)) + D; }; }
  /* tanjant dalı: merkez kπ, ızgara merkezi 7 */
  function dal(k, a, b, n) { var o = [], i, x; for (i = 0; i <= n; i++) { x = a + (b - a) * i / n; o.push([r2(7 + 3.5 * (k * PI + x) / PI), r2(5.5 + 1.5 * Math.tan(x))]); } return o; }

  return {
    slug: "pc404",
    amac: "Bu konu trigonometrik fonksiyonların grafiklerini anlatıyor: dalganın yüksekliğini (genlik), tekrar uzunluğunu (periyot) ve kaymasını. Altı fonksiyonun tanım ve değer kümesini bilmeyi, denklemden grafiği, grafikten denklemi yazmayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Sinüs ve kosinüs grafiği",
        kisa: "İkisi de [−1, 1] arasında salınan, periyodu 2π olan dalgalardır.",
        bloklar: [
          { tip: "grafik", baslik: "Sinüs ve kosinüs dalgası", xlabel: "x (radyan)", ylabel: "y", xmax: 14, ymax: 11, xticks: XT, yticks: YT,
            ogeler: [
              { id: "mid", tip: "cizgi", renk: 0, kesik: true, from: [0, 5.5], to: [14, 5.5] },
              { id: "f1", tip: "egri", renk: 0, noktalar: dalga(Math.sin) },
              { id: "f2", tip: "egri", renk: 2, noktalar: dalga(Math.cos), gizli: true },
              { id: "m1", tip: "nokta", renk: 1, x: gx(PI / 2), y: gy(1), etiket: "(π/2, 1)", gizli: true },
              { id: "m2", tip: "nokta", renk: 1, x: gx(PI), y: gy(0), etiket: "(π, 0)", gizli: true },
              { id: "m3", tip: "nokta", renk: 1, x: gx(1.5 * PI), y: gy(-1), etiket: "(3π/2, −1)", gizli: true },
              { id: "fl", tip: "yazi", x: 10.5, y: 10.4, metin: "y = sin x" }
            ],
            durumlar: [
              { metin: "y = sin x: 0'dan başlar, yukarı çıkar ve 2π'de aynı noktaya döner. Periyot 2π." },
              { metin: "Önemli noktalar: π/2'de tepe (1), π'de sıfır, 3π/2'de çukur (−1).", goster: ["m1", "m2", "m3"] },
              { metin: "y = cos x aynı dalga, ama 1'den başlar (x = 0'da tepe): sin x'in π/2 sola kaymış hali.", goster: ["f2"], gizle: ["m1", "m2", "m3"], set: { fl: { metin: "cos x (kırmızı)" } } },
              { metin: "İkisinin de değer aralığı [−1, 1], periyodu 2π. sin tek, cos çift fonksiyon.", set: { fl: { metin: "aralık [−1, 1]" } } }
            ] },
          { tip: "tablo", baslik: "İki dalganın özellikleri", head: ["Özellik", "y = sin x", "y = cos x"],
            rows: [["Tanım kümesi", "ℝ", "ℝ"], ["Değer kümesi", "[−1, 1]", "[−1, 1]"], ["Periyot", "2π", "2π"], ["x eksenini kestiği yerler", "kπ", "π/2 + kπ"], ["Maksimum (1)", "x = π/2 + 2kπ", "x = 2kπ"], ["Minimum (−1)", "x = 3π/2 + 2kπ", "x = π + 2kπ"], ["Simetri", "tek (orijine göre)", "çift (y eksenine göre)"]],
            not: "Sınavda böyle yaz: *The domain is all real numbers and the range is [−1, 1].*" }
        ]
      },
      {
        baslik: "Genlik ve periyot: y = a sin(bx)",
        kisa: "a dalganın yüksekliğini, b sıklığını belirler: genlik |a|, periyot 2π/|b|.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "↕️", terim: "Amplitude", tr: "genlik", tanim: "Orta çizgiden tepeye (ya da çukura) olan uzaklık: (maksimum − minimum) / 2. Her zaman pozitiftir.", ornek: "y = 3 sin x dalgası −3 ile 3 arasında gider: genlik 3." },
              { ikon: "↔️", terim: "Period", tr: "periyot", tanim: "Bir tam dalganın yatay uzunluğu. sin ve cos için 2π/|b|; tan için π/|b|.", ornek: "y = sin 2x her π'de tekrar eder." },
              { ikon: "➖", terim: "Midline", tr: "orta çizgi", tanim: "Dalganın tepe ve çukur arasındaki yatay ortası: y = D.", ornek: "y = sin x + 2 için orta çizgi y = 2." }
            ] },
          { tip: "grafik", baslik: "A ve B değişince dalga ne olur?", xlabel: "x (radyan)", ylabel: "y", xmax: 14, ymax: 11, xticks: XT, yticks: YT,
            ogeler: [
              { id: "mid", tip: "cizgi", renk: 0, kesik: true, from: [0, 5.5], to: [14, 5.5] },
              { id: "ref", tip: "egri", renk: 3, kesik: true, noktalar: dalga(Math.sin) },
              { id: "f", tip: "egri", renk: 0, noktalar: dalga(Math.sin) },
              { id: "fl", tip: "yazi", x: 10.5, y: 10.4, metin: "y = sin x" }
            ],
            durumlar: [
              { metin: "Kesikli mor eğri y = sin x referansı. Mavi eğri üstünde oynayacağız." },
              { metin: "a = 2: genlik 2, dalga iki kat yükselir. Periyot hâlâ 2π.", set: { f: { noktalar: dalga(sin(2, 1, 0, 0)) }, fl: { metin: "y = 2 sin x" } } },
              { metin: "b = 2: periyot 2π/2 = π; dalga yatayda sıkışır, 4π içinde 4 tur sığar.", set: { f: { noktalar: dalga(sin(2, 2, 0, 0)) }, fl: { metin: "y = 2 sin 2x" } } },
              { metin: "b = 1/2: periyot 2π/(1/2) = 4π; dalga yatayda gerilir, görünen aralıkta tek tur.", set: { f: { noktalar: dalga(sin(2, 0.5, 0, 0)) }, fl: { metin: "y = 2 sin (x/2)" } } },
              { metin: "a negatifse eğri x eksenine göre yansır: önce aşağı iner. Genlik yine |a| = 2.", set: { f: { noktalar: dalga(sin(-2, 1, 0, 0)) }, fl: { metin: "y = −2 sin x" } } }
            ] },
          { tip: "formul", parcalar: [{ t: "y = a sin(bx)", alt: "ya da a cos(bx)" }, "→", { t: "genlik = |a|", alt: "" }, ",", { t: "periyot = 2π / |b|" }],
            aciklama: "b büyürse dalga sıklaşır, periyot kısalır. Maksimum = |a|, minimum = −|a|; genlik = (Max(y) − Min(y)) / 2." },
          { tip: "ornek", baslik: "Denklemden özellikler", durum: "y = −3 cos(4x) fonksiyonunun genliğini, periyodunu, maksimum ve minimum değerini bul.",
            adimlar: ["Genlik = |−3| = 3.", "Periyot = 2π/4 = π/2.", "Değerler −3 ile 3 arası; eksi işareti dalgayı yansıtır, yani x = 0'da (−3) çukurla başlar."],
            sonuc: "Genlik ==3==, periyot ==π/2==, maksimum 3, minimum −3. Sınavda böyle yaz: *The amplitude is 3 and the period is π/2.*" }
        ]
      },
      {
        baslik: "Faz kayması ve dikey öteleme",
        kisa: "x + c yatay kaymayı (c > 0 sola), + d dikey kaymayı getirir.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "y = a sin( b (x + c) ) + d", alt: "genel biçim (cos için de aynı)" }],
            aciklama: "|a| genlik, 2π/|b| periyot, ==c yatay kayma (*horizontal shift*)== (c pozitifse sola), ==d dikey kayma (*vertical shift*)==: d aynı zamanda dalganın ekseni (*axis of wave*), d = (Max(y) + Min(y)) / 2. Maksimum d + |a|, minimum d − |a|." },
          { tip: "grafik", baslik: "Kayan dalga", xlabel: "x (radyan)", ylabel: "y", xmax: 14, ymax: 11, xticks: XT, yticks: YT,
            ogeler: [
              { id: "mid", tip: "cizgi", renk: 0, kesik: true, from: [0, 5.5], to: [14, 5.5] },
              { id: "ref", tip: "egri", renk: 3, kesik: true, noktalar: dalga(Math.sin) },
              { id: "f", tip: "egri", renk: 0, noktalar: dalga(Math.sin) },
              { id: "fl", tip: "yazi", x: 10.5, y: 10.4, metin: "y = sin x" }
            ],
            durumlar: [
              { metin: "Kesikli mor eğri y = sin x referansı." },
              { metin: "x − π/2: eğri π/2 sağa kayar. Sonuç −cos x'e eşit.", set: { f: { noktalar: dalga(sin(1, 1, PI / 2, 0)) }, fl: { metin: "y = sin(x − π/2)" } } },
              { metin: "x + π/2 = x − (−π/2): eğri π/2 sola kayar. Sonuç cos x'e eşit.", set: { f: { noktalar: dalga(sin(1, 1, -PI / 2, 0)) }, fl: { metin: "y = sin(x + π/2)" } } },
              { metin: "+ 2: bütün eğri 2 birim yukarı çıkar; orta çizgi y = 2, aralık [1, 3].", set: { f: { noktalar: dalga(sin(1, 1, 0, 2)) }, mid: { from: [0, 8.5], to: [14, 8.5] }, fl: { metin: "y = sin x + 2" } } },
              { metin: "Hepsi bir arada: genlik 2, π/2 sağa, 1 yukarı. Orta çizgi y = 1, aralık [−1, 3].", set: { f: { noktalar: dalga(sin(2, 1, PI / 2, 1)) }, mid: { from: [0, 7], to: [14, 7] }, fl: { metin: "2 sin(x − π/2) + 1" } } }
            ] },
          { tip: "ornek", baslik: "Parantezden B'yi çıkar", durum: "y = 3 sin(2x − π) + 1 için genlik, periyot, faz kayması, orta çizgi, maksimum ve minimumu bul.",
            adimlar: ["2x − π = 2(x − π/2) = 2(x + c) için b = 2, c = −π/2 (b parantez dışına alındı; c negatif, yani sağa kayma).", "Genlik 3; periyot 2π/2 = π; yatay kayma π/2 sağa; dalga ekseni y = 1.", "Maksimum 1 + 3 = 4; minimum 1 − 3 = −2."],
            sonuc: "Genlik ==3==, periyot ==π==, yatay kayma ==π/2 sağa== (c = −π/2), eksen ==y = 1==, değer aralığı [−2, 4]. Sınavda böyle yaz: *The graph is shifted π/2 units to the right and 1 unit up.*" },
          { tip: "tuzak", metin: "Yatay kaymayı bulmadan önce x'in katsayısını parantezin dışına al; x + c biçiminde c pozitifse kayma sola olur.", yanlis: "y = sin(2x − π) grafiği π kadar sağa kayar.", dogru: "sin(2x − π) = sin(2(x − π/2)): kayma π/2 sağa, yani c = −π/2 (sabit terim ÷ b, işaret tersi)." }
        ]
      },
      {
        baslik: "Tanjant grafiği",
        kisa: "tan x'in periyodu π, asimptotları x = π/2 + kπ, değer kümesi ℝ'dir.",
        bloklar: [
          { tip: "grafik", baslik: "tan x: asimptotlar arasında sonsuza giden dallar", xlabel: "x (radyan)", ylabel: "y", xmax: 14, ymax: 11,
            xticks: [{ v: 1.75, label: "−3π/2" }, { v: 3.5, label: "−π" }, { v: 5.25, label: "−π/2" }, { v: 7, label: "0" }, { v: 8.75, label: "π/2" }, { v: 10.5, label: "π" }, { v: 12.25, label: "3π/2" }],
            yticks: [{ v: 4, label: "−1" }, { v: 5.5, label: "0" }, { v: 7, label: "1" }],
            ogeler: [
              { id: "mid", tip: "cizgi", renk: 0, kesik: true, from: [0, 5.5], to: [14, 5.5] },
              { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [7, 0.4], to: [7, 10.6] },
              { id: "as1", tip: "cizgi", renk: 2, kesik: true, from: [1.75, 0.4], to: [1.75, 10.6], gizli: true },
              { id: "as2", tip: "cizgi", renk: 2, kesik: true, from: [5.25, 0.4], to: [5.25, 10.6], gizli: true },
              { id: "as3", tip: "cizgi", renk: 2, kesik: true, from: [8.75, 0.4], to: [8.75, 10.6], gizli: true },
              { id: "as4", tip: "cizgi", renk: 2, kesik: true, from: [12.25, 0.4], to: [12.25, 10.6], gizli: true },
              { id: "bm2", tip: "egri", renk: 0, noktalar: dal(-2, 0, 1.28, 6) },
              { id: "bm1", tip: "egri", renk: 0, noktalar: dal(-1, -1.28, 1.28, 20) },
              { id: "b0", tip: "egri", renk: 0, noktalar: dal(0, -1.28, 1.28, 20) },
              { id: "b1", tip: "egri", renk: 0, noktalar: dal(1, -1.28, 1.28, 20) },
              { id: "b2", tip: "egri", renk: 0, noktalar: dal(2, -1.28, 0, 6) },
              { id: "k1", tip: "nokta", renk: 1, x: 7, y: 5.5, etiket: "(0, 0)", gizli: true },
              { id: "k2", tip: "nokta", renk: 1, x: r2(7 + 3.5 / 4), y: 7, etiket: "(π/4, 1)", gizli: true },
              { id: "k3", tip: "nokta", renk: 1, x: r2(7 - 3.5 / 4), y: 4, etiket: "(−π/4, −1)", gizli: true },
              { id: "fl", tip: "yazi", x: 3.2, y: 10.4, metin: "y = tan x" }
            ],
            durumlar: [
              { metin: "tan x = sin x / cos x. Eğri tek tek dallardan oluşur ve her π'de aynı şekil tekrarlanır: periyot π." },
              { metin: "cos x = 0 olan yerlerde (x = π/2 + kπ) tan x tanımsız: kırmızı dikey asimptotlar. Dallar bunlara yaklaşır ama değmez.", goster: ["as1", "as2", "as3", "as4"] },
              { metin: "Her dal (kπ, 0) noktasından geçer; (π/4, 1) ve (−π/4, −1) iki yardımcı noktadır. Değer kümesi bütün reel sayılar, tan tek fonksiyon.", goster: ["k1", "k2", "k3"] }
            ] },
          { tip: "tablo", baslik: "y = a tan(bx) özetleri", head: ["Özellik", "y = tan x", "y = a tan(bx)"],
            rows: [["Periyot", "π", "π/|b|"], ["Asimptotlar", "x = π/2 + kπ", "bx = π/2 + kπ"], ["Değer kümesi", "ℝ", "ℝ"], ["Genlik", "yok", "yok (a yalnız dikliği değiştirir)"]],
            not: "Sınavda böyle yaz: *The tangent function has vertical asymptotes where cosine is zero.*" },
          { tip: "ornek", baslik: "Periyot ve asimptot", durum: "y = 2 tan(3x) için periyodu ve asimptotları bul.",
            adimlar: ["Periyot = π/|B| = π/3.", "3x = π/2 + kπ → x = π/6 + kπ/3.", "Örnek asimptotlar: x = π/6, x = π/2, x = −π/6."],
            sonuc: "Periyot ==π/3==, asimptotlar ==x = π/6 + kπ/3==." },
          { tip: "tuzak", metin: "tan x sınırsız büyüdüğü için genliği yoktur.", yanlis: "y = 3 tan x'in genliği 3'tür.", dogru: "tan'ın *amplitude* değeri tanımsızdır; 3 yalnızca eğriyi dikey olarak gerer." }
        ]
      },
      {
        baslik: "Altı fonksiyon, tanım ve değer kümeleri (cot, sec, csc)",
        kisa: "cot ve tan'ın periyodu π, sec ve csc'nin 2π; sec ve csc |y| ≥ 1 verir.",
        bloklar: [
          { tip: "tablo", baslik: "Altı trigonometrik fonksiyon", head: ["Fonksiyon", "Tanım kümesi", "Değer kümesi", "Periyot"],
            rows: [["sin x", "ℝ", "[−1, 1]", "2π"], ["cos x", "ℝ", "[−1, 1]", "2π"], ["tan x", "x ≠ π/2 + nπ", "ℝ", "π"], ["cot x", "x ≠ nπ", "ℝ", "π"], ["sec x", "x ≠ π/2 + nπ", "(−∞, −1] ∪ [1, ∞)", "2π"], ["csc x", "x ≠ nπ", "(−∞, −1] ∪ [1, ∞)", "2π"]],
            not: "n bir tam sayıdır. sec x = 1/cos x olduğundan cos x = 0 olan yerlerde asimptot, csc x = 1/sin x olduğundan sin x = 0 olan yerlerde asimptot vardır. Dikkat: sec(x + π) = −sec x olduğu için periyot π değil, 2π'dir. Sınavda böyle yaz: *The range of secant is all real numbers except those in (−1, 1).*" },
          { tip: "ornek", baslik: "Liman derinliği modeli", durum: "Bir limanın girişindeki su derinliği h(t) = 8 + 4 sin(πt/6) metredir (t gece yarısından sonraki saat, 0 ≤ t ≤ 24). En büyük ve en küçük derinliği bul; h(t) ≥ 8 olduğu t değerlerini yaz.",
            adimlar: ["a = 4 ve d = 8: en büyük derinlik 8 + 4 = 12 m, en küçük 8 − 4 = 4 m.", "Periyot = 2π / (π/6) = 12 saat.", "h(t) ≥ 8 ⇔ sin(πt/6) ≥ 0. sin, [0, π] aralığında ≥ 0 olur: πt/6 ∈ [0, π] ise t ∈ [0, 6].", "12 saatlik periyotla bir sonraki aralık [12, 18]. t = 24'te sin 4π = 0 olduğundan h(24) = 8: t = 24 de çözümdür."],
            sonuc: "En derin ==12 m==, en sığ ==4 m==; h(t) ≥ 8 için ==t ∈ [0, 6] ∪ [12, 18] ∪ {24}==. Sınavda böyle yaz: *The depth is at least 8 m when the sine term is non-negative.*" }
        ]
      },
      {
        baslik: "Grafikten denklem yazmak",
        kisa: "Maksimum ve minimumdan a ile d'yi, periyottan b'yi bul.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "|a| = (Max(y) − Min(y)) / 2" }, ",", { t: "d = (Max(y) + Min(y)) / 2" }, ",", { t: "b = 2π / periyot" }],
            aciklama: "Grafik x = 0'da orta çizgideyse ve yukarı çıkıyorsa sin, x = 0'da tepedeyse cos kullanmak en kısa yoldur." },
          { tip: "ornek", baslik: "Sinüs biçimi", durum: "Bir dalganın maksimumu 5, minimumu −1, periyodu π; x = 0'da orta çizgiden yukarı doğru geçiyor. Denklemini yaz.",
            adimlar: ["a = (5 − (−1))/2 = 3.", "d = (5 + (−1))/2 = 2.", "b = 2π/π = 2.", "x = 0'da orta çizgiden yukarı geçtiği için sin: y = 3 sin 2x + 2."],
            sonuc: "y = ==3 sin 2x + 2==. Sınavda böyle yaz: *The amplitude is 3, the midline is y = 2 and the period is π, so b = 2.*" },
          { tip: "ornek", baslik: "Kosinüs biçimi", durum: "Bir dalganın maksimumu x = 0'da 4, ilk minimumu x = π/2'de −2. Denklemini yaz.",
            adimlar: ["a = (4 − (−2))/2 = 3 ve d = (4 + (−2))/2 = 1.", "Tepeden ilk çukura yarım periyot: π/2 − 0 = π/2, yani periyot π ve b = 2.", "x = 0'da tepe olduğu için cos: y = 3 cos 2x + 1. Kontrol: x = π/2'de 3 cos π + 1 = −2 ✓."],
            sonuc: "y = ==3 cos 2x + 1==." },
          { tip: "tuzak", metin: "Tepeden çukura olan uzaklık yarım periyottur, bütün periyot değil.", yanlis: "Tepe x = 0, çukur x = π/2 ise periyot π/2'dir.", dogru: "Tepeden çukura yarım dalga: periyot = 2 · (π/2) = π." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "sin ve cos: tanım kümesi ℝ, değer kümesi [−1, 1], periyot 2π; sin tek, cos çift.",
              "y = a sin(bx): genlik |a|, periyot 2π/|b|; a < 0 ise x eksenine göre yansıma.",
              "y = a sin(b(x + c)) + d: c kadar sola (c < 0 ise sağa), d kadar yukarı; dalga ekseni y = d.",
              "Kaymayı bulmak için önce b'yi parantez dışına al: sin(2x − π) = sin(2(x − π/2)), yani c = −π/2.",
              "tan x: periyot π, asimptotlar x = π/2 + kπ, değer kümesi ℝ, genlik yok. cot: periyot π; sec ve csc: periyot 2π, |y| ≥ 1.",
              "|a| = (Max − Min)/2, d = (Max + Min)/2, b = 2π/periyot.",
              "Tepeden çukura yarım periyot vardır; x = 0'da tepe varsa cos seç."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Which function has domain {x : x ≠ nπ, n ∈ ℤ}, range (−∞, −1] ∪ [1, ∞) and period 2π?", opts: ["y = sec x", "y = csc x", "y = cot x", "y = tan x"], a: 1,
        why: "csc x = 1/sin x, sin x = 0 olan x = nπ noktalarında tanımsızdır ve |csc x| ≥ 1. sec x'in tanımsız olduğu noktalar π/2 + nπ'dir; cot x ve tan x'in değer kümesi ℝ, periyodu π'dir." },
      { q: "What is the range of the function y = 3 cos x + 1?", opts: ["[−2, 4]", "[−3, 3]", "[1, 3]", "[−2, 3]"], a: 0,
        why: "Dalga ekseni y = 1, genlik 3: minimum 1 − 3 = −2, maksimum 1 + 3 = 4. [−3, 3], dikey kaymayı unutmaktır." },
      { q: "How is the graph of y = sin(2x − π/3) obtained from the graph of y = sin 2x?", opts: ["Shift π/3 to the left", "Shift π/3 to the right", "Shift π/6 to the left", "Shift π/6 to the right"], a: 3,
        why: "sin(2x − π/3) = sin(2(x − π/6)): kayma π/6 sağa. π/3 cevabı, b = 2'yi parantez dışına almayı unutmaktır." },
      { q: "The table describes a wave of the form y = a cos(bx) + d with b > 0. Which equation does it match?", opts: ["y = 3 sin 3x + 2", "y = 3 cos 6x + 2", "y = 3 cos 3x + 2", "y = 6 cos 3x + 2"], a: 2,
        why: "|a| = (5 − (−1))/2 = 3, d = (5 + (−1))/2 = 2. Tepeden ilk çukura π/3 = yarım periyot, periyot 2π/3 ve b = 2π ÷ (2π/3) = 3. x = 0'da tepe olduğu için cos. b = 6 yanlış, çünkü yarım periyotu bütün periyot sanmaktır.",
        fig: { type: "table", head: ["Feature", "Value"], rows: [["Maximum", "5 (at x = 0)"], ["First minimum", "−1 (at x = π/3)"]], caption: "Features of the wave" } },
      { q: "Which of the following lines is a vertical asymptote of the graph of y = tan 2x?", opts: ["x = π/2", "x = π/4", "x = π", "x = 0"], a: 1,
        why: "tan 2x, 2x = π/2 + kπ'de tanımsız; x = π/4 + kπ/2. k = 0 için x = π/4. x = π/2, tan x'in asimptotudur ama burada 2x = π olur ve tan π = 0 tanımlıdır." }
    ]
  };
})();
