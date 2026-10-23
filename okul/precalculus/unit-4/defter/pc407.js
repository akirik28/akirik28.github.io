/* Kitora not defteri · pc407 · 4.7 Ters Trigonometrik Fonksiyonlar ve Denklemler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus Unit 4, Exam 4 tekrar kitapçığı) + MEB 10. sınıf trigonometri. Blok türleri: /ap/_kit/defter.js başı.
   Not: 1. grafikte merkez (8, 5.5) ve 1 birim = 3 ızgara birimi (sin x ile arcsin x aynı ölçekte, y = x'e göre simetrik).
   2. grafikte x ekseni 4π'yi 14 birime, y ekseni 5.5 + 1.5·y'ye oturtur. Yardımcı işlevler yalnızca nokta hesaplar. */
window.DEFTER = (function () {
  var PI = Math.PI;
  function r2(v) { return Math.round(v * 100) / 100; }
  /* sin x, [−π/2, π/2] üstünde (1 birim = 3 ızgara) */
  function sinKisit() { var a = [], i, x; for (i = 0; i <= 24; i++) { x = -PI / 2 + PI * i / 24; a.push([r2(8 + 3 * x), r2(5.5 + 3 * Math.sin(x))]); } return a; }
  /* arcsin: sin'in y = x'e göre yansıması */
  function arcsin() { var a = [], i, t; for (i = 0; i <= 24; i++) { t = -PI / 2 + PI * i / 24; a.push([r2(8 + 3 * Math.sin(t)), r2(5.5 + 3 * t)]); } return a; }
  function gx(x) { return r2(3.5 * x / PI); }
  function gy(y) { return r2(5.5 + 1.5 * y); }
  function dalga(f) { var a = [], i, x; for (i = 0; i <= 112; i++) { x = 4 * PI * i / 112; a.push([gx(x), gy(f(x))]); } return a; }

  return {
    slug: "pc407",
    amac: "Bu konu ters trigonometrik fonksiyonları (arcsin, arccos, arctan) ve trigonometrik denklemleri anlatıyor. Tanım ve değer aralıklarını, değer hesabını ve denklemlerin [0, 2π) çözümleri ile genel çözümlerini öğreneceksin.",
    bolumler: [
      {
        baslik: "Neden kısıtlama? arcsin, arccos, arctan",
        kisa: "Periyodik fonksiyon bire bir değildir; bir aralığa kısıtlayınca tersi olur.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔁", terim: "Inverse trigonometric function", tr: "ters trigonometrik fonksiyon", tanim: "Bir trigonometrik değerden açıyı veren fonksiyon. sin⁻¹ x ile arcsin x aynı şeydir; 1/sin x anlamına gelmez.", ornek: "arcsin(1/2) = π/6: sinüsü 1/2 olan ana açı." },
              { ikon: "🎯", terim: "Principal value", tr: "ana değer", tanim: "Tersin verdiği tek açı: kısıtlanmış aralıktaki değer. Başka açılar eş uçlu olsa da cevap hep ana değerdir.", ornek: "sin 5π/6 = 1/2 olsa da arcsin(1/2) = π/6'dır." }
            ] },
          { tip: "grafik", baslik: "sin x kısıtlanır, y = x'e göre yansır: arcsin x", xlabel: "x", ylabel: "y", xmax: 16, ymax: 11,
            ogeler: [
              { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [3.1, 5.5], to: [12.9, 5.5] },
              { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [8, 0.6], to: [8, 10.4] },
              { id: "lxa", tip: "yazi", x: 12.7, y: 4.8, metin: "π/2" },
              { id: "lxb", tip: "yazi", x: 3.3, y: 4.8, metin: "−π/2" },
              { id: "lya", tip: "yazi", x: 7.6, y: 8.3, metin: "1", hiza: "end" },
              { id: "lyb", tip: "yazi", x: 7.6, y: 2.3, metin: "−1", hiza: "end" },
              { id: "lxc", tip: "yazi", x: 11, y: 4.8, metin: "1", gizli: true },
              { id: "lxd", tip: "yazi", x: 5, y: 4.8, metin: "−1", gizli: true },
              { id: "lyc", tip: "yazi", x: 7.6, y: 10, metin: "π/2", hiza: "end", gizli: true },
              { id: "lyd", tip: "yazi", x: 7.6, y: 0.8, metin: "−π/2", hiza: "end", gizli: true },
              { id: "sn", tip: "egri", renk: 0, noktalar: sinKisit() },
              { id: "dg", tip: "cizgi", renk: 3, kesik: true, from: [3.2, 0.7], to: [12.8, 10.3], gizli: true },
              { id: "as", tip: "egri", renk: 2, noktalar: arcsin(), gizli: true },
              { id: "p1", tip: "nokta", renk: 0, x: r2(8 + 3 * PI / 6), y: 7, etiket: "(π/6, 1/2)", gizli: true },
              { id: "p2", tip: "nokta", renk: 2, x: 9.5, y: r2(5.5 + 3 * PI / 6), etiket: "(1/2, π/6)", gizli: true }
            ],
            durumlar: [
              { metin: "sin x tüm eksende tekrar eder, bire bir değildir; tersi olmaz. Tanım kümesini [−π/2, π/2]'ye kısıtlarız: orada sin hep artar ve −1'den 1'e gider." },
              { metin: "Ters fonksiyonun grafiği, y = x doğrusuna göre simetriktir (kesikli mor doğru).", goster: ["dg"] },
              { metin: "Yansıtınca arcsin x: tanım kümesi [−1, 1], değer kümesi [−π/2, π/2]. Eksendeki sayılar yer değiştirdi.", goster: ["as", "lxc", "lxd", "lyc", "lyd"] },
              { metin: "(π/6, 1/2) noktası (1/2, π/6)'ya yansır: sin(π/6) = 1/2 olduğundan arcsin(1/2) = π/6.", goster: ["p1", "p2"] }
            ] },
          { tip: "tablo", baslik: "Üç ters fonksiyonun tanım ve değer aralıkları", head: ["Fonksiyon", "Kısıtlanmış tanım", "Tersi", "Tersin tanım kümesi", "Tersin değer kümesi"],
            rows: [["sin x", "[−π/2, π/2]", "arcsin x", "[−1, 1]", "[−π/2, π/2]"], ["cos x", "[0, π]", "arccos x", "[−1, 1]", "[0, π]"], ["tan x", "(−π/2, π/2)", "arctan x", "ℝ", "(−π/2, π/2)"], ["cot x", "(0, π)", "arccot x (cot⁻¹ x)", "ℝ", "(0, π)"]],
            not: "Tanım: y = arcsin x ⇔ x = sin y; arccos ve arctan için de aynı. Sınavda böyle yaz: *The domain of arcsin is [−1, 1] and its range is [−π/2, π/2].*" },
          { tip: "ornek", baslik: "Tanım kümesini bul", durum: "f(x) = arccos(3 + x), g(x) = arcsin(2x − 1) ve h(x) = arctan(x²) fonksiyonlarının tanım kümesini bul.",
            adimlar: ["arccos'un içi [−1, 1] aralığında olmalı: −1 ≤ 3 + x ≤ 1 ⇒ −4 ≤ x ≤ −2.", "arcsin için: −1 ≤ 2x − 1 ≤ 1 ⇒ 0 ≤ 2x ≤ 2 ⇒ 0 ≤ x ≤ 1.", "arctan'ın içine her reel sayı girer: x² her x için tanımlı."],
            sonuc: "Dom f = ==[−4, −2]==, Dom g = ==[0, 1]==, Dom h = ==ℝ==. Sınavda böyle yaz: *The input of arcsin and arccos must lie in [−1, 1].*" }
        ]
      },
      {
        baslik: "Ters fonksiyon değerlerini hesaplamak",
        kisa: "arcsin(a), sinüsü a olan ve ana aralıkta kalan açıdır.",
        bloklar: [
          { tip: "tablo", baslik: "Özel değerler", head: ["İfade", "Değer", "İfade", "Değer"],
            rows: [["arcsin(1/2)", "π/6", "arccos(1/2)", "π/3"], ["arcsin(−1/2)", "−π/6", "arccos(−1/2)", "2π/3"], ["arcsin(√3/2)", "π/3", "arccos(−√2/2)", "3π/4"], ["arcsin(−√2/2)", "−π/4", "arccos(0)", "π/2"], ["arctan(1)", "π/4", "arctan(√3)", "π/3"], ["arctan(−1)", "−π/4", "arctan(0)", "0"]],
            not: "Her satırda önce ana aralığa bak: arcsin ve arctan negatif olabilir, arccos hiç negatif olmaz." },
          { tip: "ikili", sol: { ikon: "📉", baslik: "*arcsin*", maddeler: ["Sonuç [−π/2, π/2] aralığında", "Negatif sayıdan negatif açı çıkar"] },
            sag: { ikon: "📈", baslik: "*arccos*", maddeler: ["Sonuç [0, π] aralığında", "Negatif sayıdan geniş açı (II. bölge) çıkar"] },
            oyun: [
              { metin: "Sonucu negatif çıkabilen fonksiyon.", cevap: "sol", neden: "arcsin(−1/2) = −π/6; arccos hiç negatif olmaz." },
              { metin: "Sonucu her zaman 0 ile π arasında olan fonksiyon.", cevap: "sag", neden: "arccos'un değer kümesi [0, π]." },
              { metin: "arccos(−1/2) = 2π/3 sonucunu veren fonksiyon.", cevap: "sag", neden: "−1/2 için II. bölge: 2π/3." },
              { metin: "x = −1 için −π/2 veren fonksiyon.", cevap: "sol", neden: "arcsin(−1) = −π/2; arccos(−1) = π." },
              { metin: "x = 1 için 0 veren fonksiyon.", cevap: "sag", neden: "arccos(1) = 0; arcsin(1) = π/2." }
            ] },
          { tip: "ornek", baslik: "Üçgenle bileşke değerler", durum: "sin(arccos(3/5)), cos(arcsin(−5/13)) ve tan(arccos(−4/5)) değerlerini bul.",
            adimlar: ["θ = arccos(3/5), I. bölgede (cos > 0, aralık [0, π]): cos θ = 3/5 ise karşı kenar 4 (3-4-5), sin θ = 4/5.", "φ = arcsin(−5/13) ∈ [−π/2, π/2], sin φ = −5/13; bu aralıkta cos ≥ 0: cos φ = √(1 − 25/169) = 12/13.", "α = arccos(−4/5), II. bölgede (aralık [0, π]): sin α > 0, sin α = √(1 − 16/25) = 3/5; tan α = (3/5)/(−4/5) = −3/4."],
            sonuc: "==4/5==, ==12/13== ve ==−3/4==. Sınavda böyle yaz: *Let θ = arccos(3/5). Then cos θ = 3/5 and θ is in quadrant I.*" }
        ]
      },
      {
        baslik: "Ters ve doğrudan fonksiyonun bileşkesi",
        kisa: "sin(arcsin x) = x hep doğrudur; arcsin(sin x) = x yalnız ana aralıkta.",
        bloklar: [
          { tip: "tablo", baslik: "Bileşke özellikleri", head: ["Özellik", "Ne zaman geçerli"],
            rows: [["sin(arcsin x) = x", "−1 ≤ x ≤ 1"], ["arcsin(sin x) = x", "−π/2 ≤ x ≤ π/2"], ["cos(arccos x) = x", "−1 ≤ x ≤ 1"], ["arccos(cos x) = x", "0 ≤ x ≤ π"], ["tan(arctan x) = x", "her x ∈ ℝ"], ["arcsin(−x) = −arcsin x ve arctan(−x) = −arctan x", "tek fonksiyonlar"], ["arccos(−x) = π − arccos x", "−1 ≤ x ≤ 1"]],
            not: "Sınavda böyle yaz: *arcsin(sin x) = x only if x is in [−π/2, π/2].*" },
          { tip: "ornek", baslik: "Aralığın dışına dikkat", durum: "arcsin(sin(5π/6)), arccos(cos(−π/3)) ve tan(arctan 7) değerlerini bul.",
            adimlar: ["5π/6, [−π/2, π/2] dışında. sin(5π/6) = 1/2, yani arcsin(1/2) = π/6.", "−π/3, [0, π] dışında. cos(−π/3) = 1/2, yani arccos(1/2) = π/3.", "tan(arctan 7) = 7 (arctan'ın tanımı her reel sayıda geçerli)."],
            sonuc: "==π/6==, ==π/3== ve ==7==." },
          { tip: "ornek", baslik: "İki arctan'ın toplamı", durum: "arctan(1/2) + arctan(1/3) ve arctan 2 + arctan 3 değerlerini bul.",
            adimlar: ["tan(arctan(1/2) + arctan(1/3)) = (1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1. İki terim de π/4'ten küçük, toplam (0, π/2) içinde: toplam π/4.", "tan(arctan 2 + arctan 3) = (2 + 3)/(1 − 6) = −1. İki terim de π/4'ten büyük, toplam (π/2, π) içinde: toplam 3π/4 (π/4 değil)."],
            sonuc: "==π/4== ve ==3π/4==. Sınavda böyle yaz: *Use the tangent addition formula and check which quadrant the sum lies in.*" },
          { tip: "tuzak", metin: "Ters fonksiyon her açıyı geri vermez; yalnız ana aralıktakini.", yanlis: "arcsin(sin(5π/6)) = 5π/6.", dogru: "Cevap π/6: arcsin sonucunu hep [−π/2, π/2] içine koyar." }
        ]
      },
      {
        baslik: "Temel trigonometrik denklemler ve genel çözüm",
        kisa: "Önce referans açıyı bul, ASTC ile bölgeleri seç, sonra 2π (ya da π) ekle.",
        bloklar: [
          { tip: "ornek", baslik: "[0, 2π) aralığında çözüm", durum: "sin x = 1/2, cos x = −√2/2 ve tan x = −1 denklemlerini [0, 2π) aralığında çöz.",
            adimlar: ["sin x = 1/2: referans π/6; sin pozitif (I ve II): x = π/6 ve x = π − π/6 = 5π/6.", "cos x = −√2/2: referans π/4; cos negatif (II ve III): x = π − π/4 = 3π/4 ve x = π + π/4 = 5π/4.", "tan x = −1: referans π/4; tan negatif (II ve IV): x = 3π/4 ve x = 2π − π/4 = 7π/4."],
            sonuc: "{π/6, 5π/6}, {3π/4, 5π/4}, {3π/4, 7π/4}. Sınavda böyle yaz: *Find all solutions in the interval [0, 2π).*" },
          { tip: "grafik", baslik: "Genel çözüm: eğri ile y = 1/2 doğrusunun kesişimleri", xlabel: "x (radyan)", ylabel: "y", xmax: 14, ymax: 11,
            xticks: [{ v: 3.5, label: "π" }, { v: 7, label: "2π" }, { v: 10.5, label: "3π" }, { v: 14, label: "4π" }],
            yticks: [{ v: 4, label: "−1" }, { v: 5.5, label: "0" }, { v: 7, label: "1" }],
            ogeler: [
              { id: "mid", tip: "cizgi", renk: 0, kesik: true, from: [0, 5.5], to: [14, 5.5] },
              { id: "f", tip: "egri", renk: 0, noktalar: dalga(Math.sin) },
              { id: "h", tip: "cizgi", renk: 2, kesik: true, from: [0, 6.25], to: [14, 6.25], gizli: true },
              { id: "hl", tip: "yazi", x: 13.9, y: 6.85, metin: "y = 1/2", hiza: "end", gizli: true },
              { id: "s1", tip: "nokta", renk: 1, x: gx(PI / 6), y: 6.25, etiket: "π/6", gizli: true },
              { id: "s2", tip: "nokta", renk: 1, x: gx(5 * PI / 6), y: 6.25, etiket: "5π/6", gizli: true },
              { id: "s3", tip: "nokta", renk: 3, x: gx(13 * PI / 6), y: 6.25, etiket: "13π/6", gizli: true },
              { id: "s4", tip: "nokta", renk: 3, x: gx(17 * PI / 6), y: 6.25, etiket: "17π/6", gizli: true }
            ],
            durumlar: [
              { metin: "y = sin x grafiği. sin x = 1/2 çözmek, eğrinin y = 1/2 doğrusunu kestiği x değerlerini aramaktır." },
              { metin: "Doğruyu çizince [0, 2π) içinde iki kesişim var: x = π/6 ve x = 5π/6.", goster: ["h", "hl", "s1", "s2"] },
              { metin: "Bir periyot sonra (2π ekle) aynı iki nokta tekrar eder: 13π/6 ve 17π/6. Sonsuz çözüm: x = π/6 + 2kπ ve x = 5π/6 + 2kπ.", goster: ["s3", "s4"] }
            ] },
          { tip: "formul", parcalar: [{ t: "sin α = sin β", alt: "α = β + 2kπ  ya da  α = π − β + 2kπ" }, ",", { t: "cos α = cos β", alt: "α = β + 2kπ  ya da  α = −β + 2kπ" }, ",", { t: "tan α = tan β", alt: "α = β + kπ" }],
            aciklama: "Her yerde k bir tam sayıdır (k ∈ ℤ). [0, 2π) aralığındaki çözümlere esas çözüm (*principal solution*), k içeren çözümlere genel çözüm (*general solution*) denir. Denklemin sağ tarafı bir sayıysa β = arcsin a, arccos a ya da arctan a alınır; örnek: tan x = −1 → x = −π/4 + kπ." },
          { tip: "ornek", baslik: "İki tarafı da aynı fonksiyon yap", durum: "[0, 2π) aralığında cos 2x = cos x ve sin 3x = sin x denklemlerini çöz.",
            adimlar: ["cos 2x = cos x: 2x = x + 2kπ ⇒ x = 2kπ ⇒ x = 0. Ya da 2x = −x + 2kπ ⇒ x = 2kπ/3 ⇒ x = 0, 2π/3, 4π/3.", "sin 3x = sin x: 3x = x + 2kπ ⇒ x = kπ ⇒ x = 0, π.", "Ya da 3x = π − x + 2kπ ⇒ 4x = π + 2kπ ⇒ x = π/4 + kπ/2 ⇒ x = π/4, 3π/4, 5π/4, 7π/4.", "Ortak çözümleri bir kez yaz: x = 0 iki kolda da çıkar."],
            sonuc: "Birinci denklem: ==0, 2π/3, 4π/3==. İkinci denklem: ==0, π/4, 3π/4, π, 5π/4, 7π/4==. Sınavda böyle yaz: *If sin α = sin β, then α = β + 2kπ or α = π − β + 2kπ.*" }
        ]
      },
      {
        baslik: "İkinci dereceden ve katlı açılı denklemler",
        kisa: "Çarpanlara ayır ya da tek fonksiyona indir; sadeleştirip çözüm kaybetme.",
        bloklar: [
          { tip: "ornek", baslik: "Çarpanlara ayır, ya da tek fonksiyona indir", durum: "[0, 2π) aralığında 2sin²x − sin x − 1 = 0 ve 2sin²x + 3cos x − 3 = 0 denklemlerini çöz.",
            adimlar: ["2sin²x − sin x − 1 = (2 sin x + 1)(sin x − 1) = 0 → sin x = −1/2 ya da sin x = 1.", "sin x = −1/2: referans π/6, sin negatif (III, IV): x = 7π/6, 11π/6. sin x = 1: x = π/2.", "İkinci denklemde sin²x = 1 − cos²x yaz: 2 − 2cos²x + 3cos x − 3 = 0 → 2cos²x − 3cos x + 1 = 0 → (2cos x − 1)(cos x − 1) = 0.", "cos x = 1/2: x = π/3, 5π/3. cos x = 1: x = 0."],
            sonuc: "Birinci denklem: ==π/2, 7π/6, 11π/6==. İkinci denklem: ==0, π/3, 5π/3==. Sınavda böyle yaz: *Factor the quadratic and solve each factor separately.*" },
          { tip: "ornek", baslik: "İki kat açı ve açının katı", durum: "[0, 2π) aralığında sin 2x = cos x ve sin 2x = 1/2 denklemlerini çöz.",
            adimlar: ["sin 2x = 2 sin x cos x: 2 sin x cos x − cos x = 0 → cos x (2 sin x − 1) = 0.", "cos x = 0: x = π/2, 3π/2. sin x = 1/2: x = π/6, 5π/6.", "sin 2x = 1/2: 2x, [0, 4π) aralığında π/6, 5π/6, 13π/6, 17π/6 olur. Yarısını al: x = π/12, 5π/12, 13π/12, 17π/12."],
            sonuc: "Birinci denklem: ==π/6, π/2, 5π/6, 3π/2==. İkinci denklem: ==π/12, 5π/12, 13π/12, 17π/12==." },
          { tip: "tuzak", metin: "Denklemi sadeleştirmek çözüm kaybettirir; açının katında ise aralık da katlanır. sin x = 2 gibi kollar çözümsüzdür.", yanlis: "sin 2x = cos x için iki tarafı cos x'e bölüp 2 sin x = 1 çözerim. Ya da sin 2x = 1/2'de 2x'i yalnızca [0, 2π)'de ararım.", dogru: "Çarpanlara ayır (cos x = 0 çözümü kaybolmaz). sin 2x için 2x'i [0, 4π) aralığında ara, sonra 2'ye böl." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "arcsin: tanım [−1, 1], değer [−π/2, π/2]. arccos: tanım [−1, 1], değer [0, π]. arctan: tanım ℝ, değer (−π/2, π/2); arccot: değer (0, π).",
              "sin⁻¹ x = arcsin x'tir, 1/sin x değil (o csc x).",
              "arcsin(a), sinüsü a olan ana aralıktaki açıdır: arcsin(−1/2) = −π/6, arccos(−1/2) = 2π/3.",
              "sin(arcsin x) = x hep doğru; arcsin(sin x) = x yalnız [−π/2, π/2] içinde (arcsin(sin 5π/6) = π/6).",
              "[0, 2π) çözümleri: referans açıyı bul, ASTC ile bölgeleri seç.",
              "Genel çözüm: sin α = sin β ⇒ α = β + 2kπ ya da π − β + 2kπ; cos α = cos β ⇒ α = ±β + 2kπ; tan α = tan β ⇒ α = β + kπ (k ∈ ℤ).",
              "İkinci dereceden denklemde çarpanlara ayır ya da sin²x = 1 − cos²x ile tek fonksiyona in.",
              "sin 2x = cos x gibi denklemde bölme, çarpanlara ayır; açının katında aralığı da katla."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "What is the value of arccos(−√2/2)?", opts: ["−π/4", "π/4", "3π/4", "5π/4"], a: 2,
        why: "arccos'un değer kümesi [0, π]. cos'u −√2/2 olan açı 3π/4'tür. −π/4 aralık dışında, 5π/4 de aralığın dışında." },
      { q: "What is the value of arcsin(sin(7π/6))?", opts: ["−π/6", "7π/6", "π/6", "5π/6"], a: 0,
        why: "sin(7π/6) = −1/2 ve arcsin(−1/2) = −π/6 (ana aralık [−π/2, π/2]). 7π/6 aralığın dışında olduğu için cevap olamaz." },
      { q: "A ramp is 13 m long and rises 5 m. Its angle with the ground is θ = arcsin(5/13). What is cos θ?", opts: ["5/12", "12/13", "13/12", "5/13"], a: 1,
        why: "θ ∈ [−π/2, π/2] olduğundan cos θ ≥ 0. Karşı 5, hipotenüs 13 ise komşu 12: cos θ = 12/13. 5/12 tan θ'dır." },
      { q: "What is the domain of the function f(x) = arccos(3 + x)?", opts: ["[−4, −2]", "[−2, 4]", "[0, π]", "[−1, 1]"], a: 0,
        why: "arccos'un içi [−1, 1] aralığında olmalı: −1 ≤ 3 + x ≤ 1 ⇒ −4 ≤ x ≤ −2. [0, π] fonksiyonun değer kümesidir; [−1, 1] ise 3 + x için gerekli aralıktır, x için değil." },
      { q: "Which expression gives all solutions of the equation cos x = 1/2 (k is an integer)?", opts: ["x = π/3 + kπ", "x = π/3 + 2kπ", "x = π/6 + 2kπ", "x = ±π/3 + 2kπ"], a: 3,
        why: "cos x = cos(π/3) ve cos α = cos β ⇒ α = ±β + 2kπ olduğundan x = ±π/3 + 2kπ. Yalnız π/3 + 2kπ yazmak 5π/3 çözümünü kaçırır." }
    ]
  };
})();
