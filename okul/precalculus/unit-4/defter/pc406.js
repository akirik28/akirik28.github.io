/* Kitora not defteri · pc406 · 4.6 Toplam-Fark ve İki Kat Açı Formülleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus Unit 4, Exam 4 tekrar kitapçığı) + MEB 10. sınıf trigonometri. Blok türleri: /ap/_kit/defter.js başı.
   Not: grafikte x ekseni 4π'yi 14 birime, y ekseni (y = 0) 5.5'e oturtur: ızgara x = 3.5·x/π, y = 5.5 + 1.5·y. Yardımcı işlevler yalnızca nokta hesaplar. */
window.DEFTER = (function () {
  var PI = Math.PI;
  function r2(v) { return Math.round(v * 100) / 100; }
  function gx(x) { return r2(3.5 * x / PI); }
  function gy(y) { return r2(5.5 + 1.5 * y); }
  function dalga(f) { var a = [], i, x; for (i = 0; i <= 112; i++) { x = 4 * PI * i / 112; a.push([gx(x), gy(f(x))]); } return a; }

  return {
    slug: "pc406",
    amac: "Bu konu iki açının toplamı, farkı ve iki katı için sin, cos ve tan formüllerini veriyor. Bunlarla 75° ve 105° gibi açıların değerini özel açılardan kurmayı, ifadeleri sadeleştirmeyi ve özdeşlik ispatlamayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Toplam ve fark formülleri",
        kisa: "sin(A + B), sin A + sin B değildir; çapraz çarpımlar gerekir.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "➕", terim: "Sum and difference identities", tr: "toplam-fark özdeşlikleri", tanim: "İki açının toplamının ya da farkının trigonometrik değerini, açıların ayrı değerleriyle veren formüller.", ornek: "sin(45° + 30°) değerini sin 45°, cos 30° gibi bilinenlerden kurarız." },
              { ikon: "✖️", terim: "Double-angle identities", tr: "iki kat açı özdeşlikleri", tanim: "Toplam formülünde A = B = θ alınınca çıkan, 2θ'nın değerini θ'dan veren formüller.", ornek: "sin 2θ'yı sin θ ve cos θ ile yazarız." }
            ] },
          { tip: "tablo", baslik: "Toplam ve fark formülleri", head: ["Fonksiyon", "Toplam (A + B)", "Fark (A − B)"],
            rows: [["sin", "sin A cos B + cos A sin B", "sin A cos B − cos A sin B"], ["cos", "cos A cos B − sin A sin B", "cos A cos B + sin A sin B"], ["tan", "(tan A + tan B) / (1 − tan A tan B)", "(tan A − tan B) / (1 + tan A tan B)"]],
            not: "cos'ta işaret terstir: toplamda eksi, farkta artı. Sınavda böyle yaz: *Use the sum formula for sine with A = 45° and B = 30°.*" },
          { tip: "adimlar", baslik: "cos(A − B) nereden geliyor?", adimlar: [
              { baslik: "Birim çemberde iki nokta", metin: "P = (cos A, sin A) ve Q = (cos B, sin B). İkisini birleştiren PQ doğrusunun uzunluğunu iki farklı yoldan yazacağız." },
              { baslik: "Uzaklık formülü", metin: "PQ² = (cos A − cos B)² + (sin A − sin B)² = 2 − 2(cos A cos B + sin A sin B)." },
              { baslik: "Döndürerek", metin: "Çemberi döndürmek PQ'yu değiştirmez: Q'yu (1, 0)'a getirirsek P, (cos(A − B), sin(A − B)) olur ve PQ² = 2 − 2cos(A − B)." },
              { baslik: "Eşitle", metin: "cos(A − B) = cos A cos B + sin A sin B. B yerine −B yazınca cos(A + B) = cos A cos B − sin A sin B çıkar." }
            ] },
          { tip: "tuzak", metin: "Toplamın sinüsü sinüslerin toplamı olmaz; sayıyla dene.", yanlis: "sin(A + B) = sin A + sin B.", dogru: "sin(30° + 60°) = sin 90° = 1, ama sin 30° + sin 60° = 1/2 + √3/2 ≠ 1." }
        ]
      },
      {
        baslik: "Özel açılarla yeni değerler",
        kisa: "15°, 75°, 105° gibi açılar 30°, 45°, 60°'nin toplam ya da farkıdır.",
        bloklar: [
          { tip: "tablo", baslik: "Sık çıkan değerler", head: ["θ", "sin θ", "cos θ", "tan θ"],
            rows: [["15° = 45° − 30°", "(√6 − √2)/4", "(√6 + √2)/4", "2 − √3"], ["75° = 45° + 30°", "(√6 + √2)/4", "(√6 − √2)/4", "2 + √3"], ["105° = 60° + 45°", "(√6 + √2)/4", "(√2 − √6)/4", "−2 − √3"]],
            not: "Ezberleme: sadece sin 75° ile cos 15° (aynı değer) ve sin 15° ile cos 75° (aynı değer) çiftlerini bil; gerisi işaretten ve tamamlayan açıdan gelir." },
          { tip: "ornek", baslik: "75° ve 105°", durum: "sin 75°, tan 75° ve cos 105° değerlerini hesap makinesi olmadan bul.",
            adimlar: ["sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.", "tan 75° = (tan 45° + tan 30°)/(1 − tan 45° tan 30°) = (1 + √3/3)/(1 − √3/3) = (3 + √3)/(3 − √3). Payda eşleniğiyle çarp: (3 + √3)²/(9 − 3) = (12 + 6√3)/6 = 2 + √3.", "cos 105° = cos(60° + 45°) = cos 60° cos 45° − sin 60° sin 45° = √2/4 − √6/4 = (√2 − √6)/4."],
            sonuc: "sin 75° = ==(√6 + √2)/4==, tan 75° = ==2 + √3==, cos 105° = ==(√2 − √6)/4==. Sınavda böyle yaz: *Write 75° as 45° + 30° and substitute the exact values.*" },
          { tip: "ornek", baslik: "Formülü tersten kullan", durum: "cos 40° cos 20° − sin 40° sin 20° ve sin 50° cos 20° − cos 50° sin 20° ifadelerinin değerini bul.",
            adimlar: ["İlk ifade cos A cos B − sin A sin B kalıbında: cos(40° + 20°) = cos 60° = 1/2.", "İkinci ifade sin A cos B − cos A sin B kalıbında: sin(50° − 20°) = sin 30° = 1/2."],
            sonuc: "İkisi de ==1/2==. Sınavda böyle yaz: *This matches the cosine sum formula, so it equals cos 60°.*" }
        ]
      },
      {
        baslik: "İki kat açı formülleri",
        kisa: "Toplam formülünde A = B = θ yazınca iki kat açı formülleri çıkar.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "sin 2θ = 2 sin θ cos θ" }, ",", { t: "cos 2θ = cos²θ − sin²θ", alt: "= 2cos²θ − 1 = 1 − 2sin²θ" }, ",", { t: "tan 2θ = 2 tan θ / (1 − tan²θ)" }],
            aciklama: "cos 2θ'nın üç biçimi vardır; elindeki bilgiye göre seç. Bunlardan cos²θ = (1 + cos 2θ)/2 ve sin²θ = (1 − cos 2θ)/2 çıkar." },
          { tip: "grafik", baslik: "sin 2x, 2 sin x değildir", xlabel: "x (radyan)", ylabel: "y", xmax: 14, ymax: 11,
            xticks: [{ v: 3.5, label: "π" }, { v: 7, label: "2π" }, { v: 10.5, label: "3π" }, { v: 14, label: "4π" }],
            yticks: [{ v: 2.5, label: "−2" }, { v: 4, label: "−1" }, { v: 5.5, label: "0" }, { v: 7, label: "1" }, { v: 8.5, label: "2" }],
            ogeler: [
              { id: "mid", tip: "cizgi", renk: 0, kesik: true, from: [0, 5.5], to: [14, 5.5] },
              { id: "ref", tip: "egri", renk: 3, kesik: true, noktalar: dalga(Math.sin) },
              { id: "e1", tip: "egri", renk: 2, noktalar: dalga(function (x) { return 2 * Math.sin(x); }), gizli: true },
              { id: "e2", tip: "egri", renk: 0, noktalar: dalga(function (x) { return Math.sin(2 * x); }), gizli: true },
              { id: "e3", tip: "egri", renk: 1, kesik: true, noktalar: dalga(function (x) { return 2 * Math.sin(x) * Math.cos(x); }), gizli: true },
              { id: "fl", tip: "yazi", x: 10.5, y: 10.4, metin: "y = sin x" }
            ],
            durumlar: [
              { metin: "Kesikli mor eğri y = sin x. Soru: sin 2x neye benziyor?" },
              { metin: "2 sin x yalnızca yüksekliği iki katına çıkarır (genlik 2); periyot hâlâ 2π.", goster: ["e1"], set: { fl: { metin: "y = 2 sin x" } } },
              { metin: "sin 2x ise yatayda sıkışır (periyot π); yüksekliği 1 kalır. Yani sin 2x ≠ 2 sin x.", gizle: ["e1"], goster: ["e2"], set: { fl: { metin: "y = sin 2x" } } },
              { metin: "2 sin x cos x (yeşil kesikli) eğrisi sin 2x'in tam üstüne biner: sin 2x = 2 sin x cos x özdeşliği.", goster: ["e3"], set: { fl: { metin: "sin 2x = 2 sin x cos x" } } }
            ] },
          { tip: "ornek", baslik: "Bir oran verildi, 2θ'yı bul", durum: "sin θ = 3/5 ve θ II. bölgede. sin 2θ, cos 2θ ve tan 2θ kaçtır?",
            adimlar: ["II. bölgede cos negatif: cos θ = −√(1 − 9/25) = −4/5.", "sin 2θ = 2 sin θ cos θ = 2 · (3/5) · (−4/5) = −24/25.", "cos 2θ = 1 − 2sin²θ = 1 − 2 · 9/25 = 7/25.", "tan 2θ = sin 2θ / cos 2θ = (−24/25)/(7/25) = −24/7. (2θ, IV. bölgede.)"],
            sonuc: "sin 2θ = ==−24/25==, cos 2θ = ==7/25==, tan 2θ = ==−24/7==. Sınavda böyle yaz: *Use the double-angle formula sin 2θ = 2 sin θ cos θ.*" },
          { tip: "tuzak", metin: "2θ'nın değeri, θ'nın değerinin iki katı olmaz.", yanlis: "sin 2θ = 2 sin θ.", dogru: "θ = 30° için sin 60° = √3/2, ama 2 sin 30° = 1. Doğrusu sin 2θ = 2 sin θ cos θ." }
        ]
      },
      {
        baslik: "Sadeleştirme ve ispatta kullanmak",
        kisa: "Tek tarafı sin ve cos'a çevir, formülü uygula, sadeleştir.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "➕", baslik: "Toplam-fark formülü", maddeler: ["İki farklı açı vardır", "75°, 105°, 15° gibi bileşik açılar"] },
            sag: { ikon: "✖️", baslik: "İki kat açı formülü", maddeler: ["Bir açı ve onun iki katı vardır", "2 sin θ cos θ, cos²θ − sin²θ gibi kalıplar"] },
            oyun: [
              { metin: "sin 75° hesabı (45° + 30° yazılır).", cevap: "sol", neden: "İki farklı açının toplamı." },
              { metin: "Verilen cos θ ile cos 2θ'yı bulmak.", cevap: "sag", neden: "Açı ve onun iki katı." },
              { metin: "cos 40° cos 20° − sin 40° sin 20°.", cevap: "sol", neden: "cos(A + B) kalıbı: iki farklı açı." },
              { metin: "2 sin 15° cos 15°.", cevap: "sag", neden: "2 sin θ cos θ = sin 2θ = sin 30°." },
              { metin: "tan 105° (60° + 45° yazılır).", cevap: "sol", neden: "İki farklı açının toplamı." }
            ] },
          { tip: "ornek", baslik: "Özdeşlik ispatı", durum: "sin 2θ / (1 + cos 2θ) = tan θ özdeşliğini ispatla.",
            adimlar: ["Sol taraftan başla: pay sin 2θ = 2 sin θ cos θ.", "Payda: 1 + cos 2θ = 1 + (2cos²θ − 1) = 2cos²θ.", "Oran: 2 sin θ cos θ / (2cos²θ) = sin θ / cos θ = tan θ."],
            sonuc: "Sol = sağ. Sınavda böyle yaz: *Start with the left-hand side, apply the double-angle formulas and simplify. Therefore LHS = RHS.*" },
          { tip: "ornek", baslik: "Hesap makinesiz sadeleştirme", durum: "sin 15° cos 15° ve cos²(π/8) − sin²(π/8) ifadelerini hesapla.",
            adimlar: ["sin 15° cos 15° = ½ · (2 sin 15° cos 15°) = ½ sin 30° = ½ · ½ = 1/4.", "cos²(π/8) − sin²(π/8) = cos(2 · π/8) = cos(π/4) = √2/2."],
            sonuc: "==1/4== ve ==√2/2==." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B (cos'ta işaret ters).",
              "tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B).",
              "sin(A + B) ≠ sin A + sin B; sayıyla denerken sin 90° = 1'i kullan.",
              "15°, 75°, 105° gibi açıları 30°, 45°, 60°'nin toplam ya da farkı olarak yaz.",
              "sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ; tan 2θ = 2 tan θ/(1 − tan²θ).",
              "Verilen orandan cos 2θ bulurken en kısa biçimi seç: sin verilmişse 1 − 2sin²θ, cos verilmişse 2cos²θ − 1.",
              "Verilen oranda bölgeyi unutma: cos θ'nın işareti bölgeden gelir.",
              "İspatta karmaşık taraftan başla, iki kat açı formülüyle sin ve cos'a çevir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "cos 75° değeri aşağıdakilerden hangisidir?", opts: ["(√6 + √2)/4", "(√6 − √2)/4", "(√2 − √6)/4", "√3/2"], a: 1,
        why: "cos 75° = cos(45° + 30°) = cos 45° cos 30° − sin 45° sin 30° = √6/4 − √2/4. (√6 + √2)/4 sin 75°'tir (işaret farkı: cos'ta toplam formülünde eksi vardır)." },
      { q: "cos 20° cos 10° − sin 20° sin 10° ifadesinin değeri kaçtır?", opts: ["√3/2", "1/2", "cos 10°", "1"], a: 0,
        why: "Kalıp cos A cos B − sin A sin B = cos(A + B): cos 30° = √3/2." },
      { q: "θ II. bölgede bir açıdır ve değerleri tabloda verilmiştir. sin 2θ kaçtır?", opts: ["120/169", "−120/169", "10/13", "−10/13"], a: 1,
        why: "II. bölgede cos θ = −12/13 (5² + 12² = 13²). sin 2θ = 2 · (5/13) · (−12/13) = −120/169. 120/169 işareti unutmaktır.",
        fig: { type: "table", head: ["Bilgi", "Değer"], rows: [["sin θ", "5/13"], ["θ'nın bölgesi", "II"]], caption: "θ hakkında bilgi" } },
      { q: "cos θ = 3/5 ise cos 2θ kaçtır?", opts: ["6/5", "7/25", "−6/25", "−7/25"], a: 3,
        why: "cos 2θ = 2cos²θ − 1 = 2 · 9/25 − 1 = −7/25. 6/5, 2cos θ'dır; 7/25 işaret hatasıdır." },
      { q: "Bir öğrenci sin 2θ = 2 sin θ yazıyor. Aşağıdaki θ değerlerinden hangisi bu eşitliğin yanlış olduğunu gösterir?", opts: ["θ = 0°", "θ = 180°", "θ = 360°", "θ = 30°"], a: 3,
        why: "θ = 30° için sin 60° = √3/2, 2 sin 30° = 1; eşit değil. 0°, 180° ve 360°'de iki taraf da 0 çıkar; bu yüzden bu değerler yanlışı göstermez." }
    ]
  };
})();
