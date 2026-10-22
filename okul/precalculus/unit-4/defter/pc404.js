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
    amac: "Bu konu sinüs, kosinüs ve tanjant grafiklerini anlatıyor: dalganın yüksekliğini (genlik), tekrar uzunluğunu (periyot) ve kaymasını. Bir denklemden grafiği, bir grafikten denklemi yazmayı öğreneceksin.",
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
        baslik: "Genlik ve periyot: y = A sin(Bx)",
        kisa: "A dalganın yüksekliğini, B sıklığını belirler: genlik |A|, periyot 2π/|B|.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "↕️", terim: "Amplitude", tr: "genlik", tanim: "Orta çizgiden tepeye (ya da çukura) olan uzaklık: (maksimum − minimum) / 2. Her zaman pozitiftir.", ornek: "y = 3 sin x dalgası −3 ile 3 arasında gider: genlik 3." },
              { ikon: "↔️", terim: "Period", tr: "periyot", tanim: "Bir tam dalganın yatay uzunluğu. sin ve cos için 2π/|B|; tan için π/|B|.", ornek: "y = sin 2x her π'de tekrar eder." },
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
              { metin: "A = 2: genlik 2, dalga iki kat yükselir. Periyot hâlâ 2π.", set: { f: { noktalar: dalga(sin(2, 1, 0, 0)) }, fl: { metin: "y = 2 sin x" } } },
              { metin: "B = 2: periyot 2π/2 = π; dalga yatayda sıkışır, 4π içinde 4 tur sığar.", set: { f: { noktalar: dalga(sin(2, 2, 0, 0)) }, fl: { metin: "y = 2 sin 2x" } } },
              { metin: "B = 1/2: periyot 2π/(1/2) = 4π; dalga yatayda gerilir, görünen aralıkta tek tur.", set: { f: { noktalar: dalga(sin(2, 0.5, 0, 0)) }, fl: { metin: "y = 2 sin (x/2)" } } },
              { metin: "A negatifse eğri x eksenine göre yansır: önce aşağı iner. Genlik yine |A| = 2.", set: { f: { noktalar: dalga(sin(-2, 1, 0, 0)) }, fl: { metin: "y = −2 sin x" } } }
            ] },
          { tip: "formul", parcalar: [{ t: "y = A sin(Bx)", alt: "ya da A cos(Bx)" }, "→", { t: "genlik = |A|", alt: "" }, ",", { t: "periyot = 2π / |B|" }],
            aciklama: "B büyürse dalga sıklaşır, periyot kısalır. Maksimum = |A|, minimum = −|A|." },
          { tip: "ornek", baslik: "Denklemden özellikler", durum: "y = −3 cos(4x) fonksiyonunun genliğini, periyodunu, maksimum ve minimum değerini bul.",
            adimlar: ["Genlik = |−3| = 3.", "Periyot = 2π/4 = π/2.", "Değerler −3 ile 3 arası; eksi işareti dalgayı yansıtır, yani x = 0'da (−3) çukurla başlar."],
            sonuc: "Genlik ==3==, periyot ==π/2==, maksimum 3, minimum −3. Sınavda böyle yaz: *The amplitude is 3 and the period is π/2.*" }
        ]
      },
      {
        baslik: "Faz kayması ve dikey öteleme",
        kisa: "(x − C) grafiği C kadar sağa, + D ise D kadar yukarı taşır.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "y = A sin( B (x − C) ) + D", alt: "genel biçim" }],
            aciklama: "|A| genlik, 2π/|B| periyot, ==C faz kayması (*phase shift*)== (pozitifse sağa), ==D dikey kayma (*vertical shift*)== ve orta çizgi y = D. Maksimum D + |A|, minimum D − |A|." },
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
            adimlar: ["2x − π = 2(x − π/2): B = 2, C = π/2 (B parantez dışına alındı).", "Genlik 3; periyot 2π/2 = π; faz kayması π/2 sağa; orta çizgi y = 1.", "Maksimum 1 + 3 = 4; minimum 1 − 3 = −2."],
            sonuc: "Genlik ==3==, periyot ==π==, faz kayması ==π/2 sağa==, orta çizgi ==y = 1==, değer aralığı [−2, 4]. Sınavda böyle yaz: *The graph is shifted π/2 units to the right and 1 unit up.*" },
          { tip: "tuzak", metin: "Faz kaymasını bulmadan önce x'in katsayısını parantezin dışına al.", yanlis: "y = sin(2x − π) grafiği π kadar sağa kayar.", dogru: "sin(2x − π) = sin(2(x − π/2)): kayma π/2'dir, yani C = (sabit terim) / B." }
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
          { tip: "tablo", baslik: "y = A tan(Bx) özetleri", head: ["Özellik", "y = tan x", "y = A tan(Bx)"],
            rows: [["Periyot", "π", "π/|B|"], ["Asimptotlar", "x = π/2 + kπ", "Bx = π/2 + kπ"], ["Değer kümesi", "ℝ", "ℝ"], ["Genlik", "yok", "yok (A yalnız dikliği değiştirir)"]],
            not: "Sınavda böyle yaz: *The tangent function has vertical asymptotes where cosine is zero.*" },
          { tip: "ornek", baslik: "Periyot ve asimptot", durum: "y = 2 tan(3x) için periyodu ve asimptotları bul.",
            adimlar: ["Periyot = π/|B| = π/3.", "3x = π/2 + kπ → x = π/6 + kπ/3.", "Örnek asimptotlar: x = π/6, x = π/2, x = −π/6."],
            sonuc: "Periyot ==π/3==, asimptotlar ==x = π/6 + kπ/3==." },
          { tip: "tuzak", metin: "tan x sınırsız büyüdüğü için genliği yoktur.", yanlis: "y = 3 tan x'in genliği 3'tür.", dogru: "tan'ın *amplitude* değeri tanımsızdır; 3 yalnızca eğriyi dikey olarak gerer." }
        ]
      },
      {
        baslik: "Grafikten denklem yazmak",
        kisa: "Maksimum ve minimumdan A ve D'yi, periyottan B'yi bul.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "A = (maks − min) / 2" }, ",", { t: "D = (maks + min) / 2" }, ",", { t: "B = 2π / periyot" }],
            aciklama: "Grafik x = 0'da orta çizgideyse ve yukarı çıkıyorsa sin, x = 0'da tepedeyse cos kullanmak en kısa yoldur." },
          { tip: "ornek", baslik: "Sinüs biçimi", durum: "Bir dalganın maksimumu 5, minimumu −1, periyodu π; x = 0'da orta çizgiden yukarı doğru geçiyor. Denklemini yaz.",
            adimlar: ["A = (5 − (−1))/2 = 3.", "D = (5 + (−1))/2 = 2.", "B = 2π/π = 2.", "x = 0'da orta çizgiden yukarı geçtiği için sin: y = 3 sin 2x + 2."],
            sonuc: "y = ==3 sin 2x + 2==. Sınavda böyle yaz: *The amplitude is 3, the midline is y = 2 and the period is π, so B = 2.*" },
          { tip: "ornek", baslik: "Kosinüs biçimi", durum: "Bir dalganın maksimumu x = 0'da 4, ilk minimumu x = π/2'de −2. Denklemini yaz.",
            adimlar: ["A = (4 − (−2))/2 = 3 ve D = (4 + (−2))/2 = 1.", "Tepeden ilk çukura yarım periyot: π/2 − 0 = π/2, yani periyot π ve B = 2.", "x = 0'da tepe olduğu için cos: y = 3 cos 2x + 1. Kontrol: x = π/2'de 3 cos π + 1 = −2 ✓."],
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
              "y = A sin(Bx): genlik |A|, periyot 2π/|B|; A < 0 ise x eksenine göre yansıma.",
              "y = A sin(B(x − C)) + D: C kadar sağa, D kadar yukarı; orta çizgi y = D.",
              "Faz kaymasını bulmak için önce B'yi parantez dışına al: sin(2x − π) = sin(2(x − π/2)).",
              "tan x: periyot π, asimptotlar x = π/2 + kπ, değer kümesi ℝ, genlik yok.",
              "A = (maks − min)/2, D = (maks + min)/2, B = 2π/periyot.",
              "Tepeden çukura yarım periyot vardır; x = 0'da tepe varsa cos seç."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir dönme dolabın bir kabininin yerden yüksekliği h(t) = 8 sin(πt/30) + 10 metredir (t saniye). Dolap tam bir turu kaç saniyede tamamlar?", opts: ["30 s", "60 s", "15 s", "8 s"], a: 1,
        why: "Periyot = 2π / (π/30) = 60 s. 30 s yarım turdur; 8, genliktir." },
      { q: "y = 3 cos x + 1 fonksiyonunun değer kümesi nedir?", opts: ["[−2, 4]", "[−3, 3]", "[1, 3]", "[−2, 3]"], a: 0,
        why: "Orta çizgi y = 1, genlik 3: minimum 1 − 3 = −2, maksimum 1 + 3 = 4. [−3, 3], dikey kaymayı unutmaktır." },
      { q: "y = sin(2x − π/3) grafiği y = sin 2x grafiğine göre nasıl kaymıştır?", opts: ["π/3 sola", "π/3 sağa", "π/6 sola", "π/6 sağa"], a: 3,
        why: "sin(2x − π/3) = sin(2(x − π/6)): kayma π/6 sağa. π/3 cevabı, B = 2'yi parantez dışına almayı unutmaktır." },
      { q: "Bir dalganın değerleri tabloda verilmiştir ve x = 0'da tepe noktası vardır. Hangi denklem bu dalgaya aittir?", opts: ["y = 3 sin 3x + 2", "y = 3 cos 6x + 2", "y = 3 cos 3x + 2", "y = 6 cos 3x + 2"], a: 2,
        why: "A = (5 − (−1))/2 = 3, D = 2. Tepeden ilk çukura π/3 = yarım periyot, periyot 2π/3, B = 3. x = 0'da tepe olduğu için cos. B = 6 yanlış, çünkü yarım periyotu bütün periyot sanmaktır.",
        fig: { type: "table", head: ["Özellik", "Değer"], rows: [["Maksimum", "5 (x = 0'da)"], ["İlk minimum", "−1 (x = π/3'te)"]], caption: "Bir dalganın özellikleri" } },
      { q: "y = tan 2x fonksiyonunun grafiğinde aşağıdaki doğrulardan hangisi dikey asimptottur?", opts: ["x = π/2", "x = π/4", "x = π", "x = 0"], a: 1,
        why: "tan 2x, 2x = π/2 + kπ'de tanımsız; x = π/4 + kπ/2. k = 0 için x = π/4. x = π/2, tan x'in asimptotudur ama burada 2x = π olur ve tan π = 0 tanımlıdır." }
    ]
  };
})();
