/* Kitpath not defteri · pc402 · 4.2 Dik Üçgen ve Trigonometrik Oranlar
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus Unit 4) + MEB 10. sınıf trigonometri. Blok türleri: /ap/_kit/defter.js başı.
   Not: grafikteki üçgen 3-4-5 üçgeninin 2 katı ölçekli çizimidir: A (3, 2), C (11, 2), B (11, 8); gerçek kenarlar 4, 3 ve 5. */
window.DEFTER = (function () {
  var PI = Math.PI;
  function r2(v) { return Math.round(v * 100) / 100; }
  /* A köşesindeki θ açısının yayı: 0 → atan(6/8) */
  function yayA() { var a = [], k, t, m = Math.atan2(6, 8); for (k = 0; k <= 5; k++) { t = m * k / 5; a.push([r2(3 + 1.5 * Math.cos(t)), r2(2 + 1.5 * Math.sin(t))]); } return a; }
  /* B köşesindeki β açısının yayı: BA yönünden BC yönüne (aşağı) */
  function yayB() { var a = [], k, t, m0 = PI + Math.atan2(6, 8), m1 = 1.5 * PI; for (k = 0; k <= 5; k++) { t = m0 + (m1 - m0) * k / 5; a.push([r2(11 + 1.5 * Math.cos(t)), r2(8 + 1.5 * Math.sin(t))]); } return a; }

  return {
    slug: "pc402",
    amac: "Bu konu dik üçgendeki kenar oranlarını anlatıyor: sinüs, kosinüs ve tanjant. 30-60-90 ve 45-45-90 üçgenlerinden özel açı değerlerini çıkarmayı ve yükselme açısı problemlerini çözmeyi öğreneceksin.",
    bolumler: [
      {
        baslik: "SOH-CAH-TOA: üç oran",
        kisa: "Oranlar, bakılan açıya göre karşı, komşu ve hipotenüsten kurulur.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "sin θ", alt: "karşı / hipotenüs (SOH)" }, ",", { t: "cos θ", alt: "komşu / hipotenüs (CAH)" }, ",", { t: "tan θ", alt: "karşı / komşu (TOA)" }],
            aciklama: "*Sine = Opposite / Hypotenuse*, *Cosine = Adjacent / Hypotenuse*, *Tangent = Opposite / Adjacent*. Karşı ve komşu, bakılan açıya göre belirlenir; hipotenüs hep dik açının karşısıdır." },
          { tip: "grafik", baslik: "Aynı üçgen, iki farklı açı", xlabel: "", ylabel: "", xmax: 16, ymax: 11,
            ogeler: [
              { id: "ah", tip: "cizgi", renk: 0, from: [3, 2], to: [11, 8] },
              { id: "aa", tip: "cizgi", renk: 0, from: [3, 2], to: [11, 2] },
              { id: "ao", tip: "cizgi", renk: 0, from: [11, 2], to: [11, 8] },
              { id: "ra1", tip: "cizgi", renk: 0, from: [10.4, 2], to: [10.4, 2.6] },
              { id: "ra2", tip: "cizgi", renk: 0, from: [10.4, 2.6], to: [11, 2.6] },
              { id: "hh", tip: "cizgi", renk: 3, from: [3, 2], to: [11, 8], gizli: true },
              { id: "o1", tip: "cizgi", renk: 2, from: [11, 2], to: [11, 8], gizli: true },
              { id: "a1", tip: "cizgi", renk: 1, from: [3, 2], to: [11, 2], gizli: true },
              { id: "o2", tip: "cizgi", renk: 2, from: [3, 2], to: [11, 2], gizli: true },
              { id: "a2", tip: "cizgi", renk: 1, from: [11, 2], to: [11, 8], gizli: true },
              { id: "arA", tip: "egri", renk: 0, noktalar: yayA() },
              { id: "arB", tip: "egri", renk: 0, noktalar: yayB(), gizli: true },
              { id: "tA", tip: "yazi", x: 5.1, y: 2.35, metin: "θ" },
              { id: "tB", tip: "yazi", x: 9.8, y: 6.3, metin: "β", gizli: true },
              { id: "vA", tip: "yazi", x: 2.4, y: 1.3, metin: "A" },
              { id: "vB", tip: "yazi", x: 11.6, y: 8.4, metin: "B" },
              { id: "vC", tip: "yazi", x: 11.7, y: 1.3, metin: "C" },
              { id: "s5", tip: "yazi", x: 6.6, y: 6.1, metin: "5", hiza: "end" },
              { id: "s4", tip: "yazi", x: 7, y: 0.9, metin: "4" },
              { id: "s3", tip: "yazi", x: 11.6, y: 5, metin: "3", hiza: "start" },
              { id: "r1", tip: "yazi", x: 1, y: 10.2, metin: "sin θ = 3/5", hiza: "start", gizli: true },
              { id: "r2", tip: "yazi", x: 1, y: 9.4, metin: "cos θ = 4/5", hiza: "start", gizli: true },
              { id: "r3", tip: "yazi", x: 1, y: 8.6, metin: "tan θ = 3/4", hiza: "start", gizli: true }
            ],
            durumlar: [
              { metin: "Dik üçgenin kenarları 3, 4 ve 5. Bir açıyı seçeriz: θ, A köşesinde." },
              { metin: "Hipotenüs (*hypotenuse*): dik açının karşısındaki en uzun kenar. Hangi açıya baksan da değişmez.", goster: ["hh"], set: { s5: { metin: "5 · hipotenüs" } } },
              { metin: "Karşı kenar (*opposite*): θ'nın tam karşısındaki, θ'ya değmeyen kenar.", goster: ["o1"], set: { s3: { metin: "3 · karşı" } } },
              { metin: "Komşu kenar (*adjacent*): θ'ya değen ve hipotenüs olmayan kenar.", goster: ["a1"], set: { s4: { metin: "4 · komşu" } } },
              { metin: "Oranlar: sin θ = karşı/hipotenüs = 3/5, cos θ = komşu/hipotenüs = 4/5, tan θ = karşı/komşu = 3/4.", goster: ["r1", "r2", "r3"] },
              { metin: "B açısına (β) bakınca karşı ile komşu yer değiştirir: sin β = 4/5, bu da cos θ'ya eşit.",
                gizle: ["o1", "a1", "arA", "tA", "hh"], goster: ["o2", "a2", "arB", "tB"],
                set: { s3: { metin: "3 · komşu" }, s4: { metin: "4 · karşı" }, s5: { metin: "5" }, r1: { metin: "sin β = 4/5" }, r2: { metin: "cos β = 3/5" }, r3: { metin: "tan β = 4/3" } } }
            ] },
          { tip: "liste", maddeler: [
              { ikon: "✍️", baslik: "*In a right triangle, sin θ = opposite / hypotenuse.*", metin: "Tanımı cümleyle ver." },
              { ikon: "✍️", baslik: "*The side opposite angle A is the side that does not touch A.*", metin: "Karşı kenar köşeye değmez." },
              { ikon: "✍️", baslik: "*The hypotenuse is the longest side, so sin θ and cos θ are between 0 and 1.*", metin: "Dar açılar için geçerli." }
            ] }
        ]
      },
      {
        baslik: "Özel üçgenler: 45-45-90 ve 30-60-90",
        kisa: "Özel açıların değerleri iki üçgenin kenar oranından çıkar.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "◺", baslik: "45°-45°-90° üçgeni", maddeler: ["Kenarlar 1 : 1 : √2 (iki dik kenar eşit)", "Karenin köşegeniyle ikiye bölünmesinden gelir"] },
            sag: { ikon: "△", baslik: "30°-60°-90° üçgeni", maddeler: ["Kenarlar 1 : √3 : 2 (kısa : uzun : hipotenüs)", "Eşkenar üçgenin yüksekliğiyle ikiye bölünmesinden gelir"] },
            oyun: [
              { metin: "İki dik kenarı da 5 olan dik üçgen.", cevap: "sol", neden: "Dik kenarlar eşit: 45-45-90, hipotenüs 5√2." },
              { metin: "Hipotenüsü 8 olan ve bir açısı 30° olan dik üçgen.", cevap: "sag", neden: "30°'nin karşısı hipotenüsün yarısı: 4; uzun kenar 4√3." },
              { metin: "Kenarları 1, √3 ve 2 ile orantılı üçgen.", cevap: "sag", neden: "Kısa : uzun : hipotenüs = 1 : √3 : 2." },
              { metin: "Hipotenüsü 6√2 olan ikizkenar dik üçgen.", cevap: "sol", neden: "Dik kenar = 6√2 / √2 = 6." }
            ] },
          { tip: "tablo", baslik: "Üçgenden oranlara", head: ["Açı", "Karşı", "Komşu", "Hipotenüs", "sin", "cos", "tan"],
            rows: [["30°", "1", "√3", "2", "1/2", "√3/2", "√3/3"], ["45°", "1", "1", "√2", "√2/2", "√2/2", "1"], ["60°", "√3", "1", "2", "√3/2", "1/2", "√3"]],
            not: "Paydayı kökten kurtar (*rationalize the denominator*): 1/√2 = √2/2 ve 1/√3 = √3/3." },
          { tip: "ornek", baslik: "30° eğimli yamaç", durum: "Boyu (hipotenüs) 8 m olan düz bir yamaç yatayla 30° yapıyor. Yamacın yüksekliği (karşı kenar) ve yatay uzunluğu (komşu kenar) kaçtır?",
            adimlar: ["sin 30° = karşı / 8 → karşı = 8 · 1/2 = 4.", "cos 30° = komşu / 8 → komşu = 8 · √3/2 = 4√3.", "Kontrol: 4² + (4√3)² = 16 + 48 = 64 = 8²."],
            sonuc: "Yükseklik ==4 m==, yatay uzunluk ==4√3 m==. Sınavda böyle yaz: *Use the 30°-60°-90° ratio 1 : √3 : 2.*" }
        ]
      },
      {
        baslik: "Ters oranlar ve tamamlayan açılar",
        kisa: "csc, sec, cot birer çarpmaya göre terstir; sin θ = cos(90° − θ).",
        bloklar: [
          { tip: "tablo", head: ["Oran", "Tersi", "Tanım"],
            rows: [["sin θ", "*csc θ* = 1/sin θ", "hipotenüs / karşı"], ["cos θ", "*sec θ* = 1/cos θ", "hipotenüs / komşu"], ["tan θ", "*cot θ* = 1/tan θ", "komşu / karşı"]],
            not: "Ayrıca tan θ = sin θ / cos θ, cot θ = cos θ / sin θ ve tan θ · cot θ = 1. Sınavda böyle yaz: *The cosecant is the reciprocal of the sine.*" },
          { tip: "formul", parcalar: [{ t: "sin θ" }, "=", { t: "cos(90° − θ)", alt: "tamamlayan açı (*complementary*)" }],
            aciklama: "Aynı şekilde tan θ = cot(90° − θ) ve sec θ = csc(90° − θ). Dar açıların toplamı 90° olduğu için birinin karşısı diğerinin komşusudur: sin 30° = cos 60° = 1/2." },
          { tip: "tuzak", metin: "Üstteki −1 ile ters çarpma işlemi aynı şey değildir.", yanlis: "sin⁻¹ x = 1/sin x.", dogru: "1/sin x = csc x. sin⁻¹ x ise sinüsü x olan açıdır (ters fonksiyon, son konuda)." }
        ]
      },
      {
        baslik: "Bilinmeyen kenarı ve açıyı bulmak",
        kisa: "Bilinen ve istenen kenarı içeren oranı seç, özel değeri yerleştir.",
        bloklar: [
          { tip: "ornek", baslik: "Bilinmeyen kenar", durum: "Dik üçgende 60°'lik açının komşu kenarı 5 cm. Karşı kenar x ve hipotenüs h kaç cm?",
            adimlar: ["Karşı ve komşu verildi/isteniyor: tan 60° = x/5, yani √3 = x/5 → x = 5√3.", "Komşu ve hipotenüs: cos 60° = 5/h, yani 1/2 = 5/h → h = 10.", "Kontrol: 5² + (5√3)² = 25 + 75 = 100 = 10²."],
            sonuc: "x = ==5√3 cm==, h = ==10 cm==. Sınavda böyle yaz: *Set up the ratio tan 60° = x/5 and solve for x.*" },
          { tip: "ornek", baslik: "Bilinmeyen açı", durum: "Dik üçgende bir dar açının karşı kenarı 4, hipotenüs 8. Bu açı kaç derece?",
            adimlar: ["sin θ = karşı / hipotenüs = 4/8 = 1/2.", "Özel açılar tablosunda sin θ = 1/2 olan dar açı 30°.", "Kontrol: komşu kenar 4√3; tan 30° = 4/(4√3) = √3/3 ✓."],
            sonuc: "θ = ==30°==. Sınavda böyle yaz: *Since sin θ = 1/2, θ = 30°.*" },
          { tip: "tuzak", baslik: "Oranı nasıl seçerim?", metin: "Hangi oranı kullanacağın, elindeki ve istediğin iki kenarın ikilisine bağlı.", yanlis: "Her soruda sin kullanırım.", dogru: "Karşı + hipotenüs → sin; komşu + hipotenüs → cos; karşı + komşu → tan." }
        ]
      },
      {
        baslik: "Yükselme ve alçalma açıları (ek bilgi)",
        kisa: "Ek bilgi: ikisi de yataydan ölçülür; problemi dik üçgene çevir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔭", terim: "Angle of elevation", tr: "yükselme açısı", tanim: "Gözün yatay doğrusu ile yukarıdaki bir noktaya bakış çizgisi arasındaki açı.", ornek: "Yerden bayrak direğinin tepesine bakmak." },
              { ikon: "⛵", terim: "Angle of depression", tr: "alçalma açısı", tanim: "Yatay doğru ile aşağıdaki bir noktaya bakış çizgisi arasındaki açı. Yataydan ölçülür.", ornek: "Deniz fenerinin tepesinden tekneye bakmak." }
            ] },
          { tip: "ornek", baslik: "Bayrak direği", durum: "Ada direğin dibinden 20 m uzakta duruyor ve tepeye yükselme açısı 30°. Göz yüksekliğini hesaba katmadan direk kaç m?",
            adimlar: ["Komşu = 20 (yatay uzaklık), karşı = h (direk): tan 30° = h/20.", "tan 30° = √3/3 olduğundan h = 20 · √3/3 = 20√3/3."],
            sonuc: "Direk ==20√3/3 m==. Sınavda böyle yaz: *The angle of elevation is 30°, so tan 30° = h/20.*" },
          { tip: "ornek", baslik: "Deniz feneri", durum: "Fenerin tepesi denizden 60 m yüksekte. Tepeden bir tekneye alçalma açısı 45°. Tekne fenerin dibinden ne kadar uzakta?",
            adimlar: ["Alçalma açısı 45° ise tekneden tepeye yükselme açısı da 45° (ters iç açılar).", "tan 45° = 60/d, yani 1 = 60/d → d = 60."],
            sonuc: "Tekne ==60 m== uzakta. Sınavda böyle yaz: *The angle of depression equals the angle of elevation from the boat.*" },
          { tip: "tuzak", metin: "Alçalma açısı bakış çizgisiyle düşey arasındaki açı değildir.", yanlis: "Alçalma açısı dikeyden ölçülür.", dogru: "İkisi de yataydan ölçülür; alçalma açısı, yerdeki gözlemcinin yükselme açısına eşittir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "SOH-CAH-TOA: sin = karşı/hipotenüs, cos = komşu/hipotenüs, tan = karşı/komşu; karşı ve komşu açıya göre belirlenir.",
              "Hipotenüs dik açının karşısındaki en uzun kenardır; dar açılar için sin ve cos 0 ile 1 arasındadır.",
              "45-45-90: kenarlar 1 : 1 : √2. 30-60-90: kenarlar 1 : √3 : 2 (kısa kenar hipotenüsün yarısı).",
              "csc = 1/sin, sec = 1/cos, cot = 1/tan; sin θ = cos(90° − θ).",
              "sin⁻¹ x ile 1/sin x aynı şey değildir.",
              "Bilinen ve istenen kenara göre oranı seç; sonucu Pisagor ile kontrol et.",
              "Ek bilgi (derste yok): yükselme ve alçalma açıları yataydan ölçülür; ikisi de dik üçgende tan ile çözülür."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "In a right triangle, the sides relative to an acute angle θ are given in the table. What is cos θ?", opts: ["5/13", "12/13", "5/12", "13/12"], a: 1,
        why: "cos θ = komşu / hipotenüs = 12/13. 5/13, karşı kenarı kullanan sin θ'dır; 5/12 ise tan θ'dır.",
        fig: { type: "table", head: ["Side", "Length"], rows: [["Opposite to θ", "5"], ["Adjacent to θ", "12"], ["Hypotenuse", "13"]], caption: "Sides of the right triangle" } },
      { q: "A slide is 10 m long and makes an angle of 30° with the ground. How high above the ground is the top of the slide?", opts: ["10 m", "5√3 m", "5 m", "10√3 m"], a: 2,
        why: "Yükseklik karşı kenardır: 10 · sin 30° = 10 · 1/2 = 5 m. 5√3 m, yatay uzunluktur (10 · cos 30°)." },
      { q: "Which of the following is equal to sin 20°?", opts: ["cos 70°", "cos 20°", "tan 70°", "1/cos 70°"], a: 0,
        why: "Tamamlayan açılarda sin θ = cos(90° − θ): sin 20° = cos 70°. cos 20° ise sin 70°'e eşittir." },
      { q: "In a right triangle with acute angle x, tan x = 1/2. What is the value of sin x · cos x?", opts: ["1/5", "2/√5", "1/2", "2/5"], a: 3,
        why: "tan x = karşı/komşu = 1/2: karşı 1, komşu 2, hipotenüs √5. sin x · cos x = (1/√5)(2/√5) = 2/5. 2/√5 yalnızca cos x'in değeridir." },
      { q: "θ is an acute angle and cos θ = 5/13. What is csc θ?", opts: ["12/13", "5/12", "13/5", "13/12"], a: 3,
        why: "Komşu 5, hipotenüs 13 ise karşı kenar 12 (5² + 12² = 13²). sin θ = 12/13 ve csc θ = 1/sin θ = 13/12. 13/5 ise sec θ'dır." }
    ]
  };
})();
