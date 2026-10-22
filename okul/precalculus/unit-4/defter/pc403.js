/* Kitora not defteri · pc403 · 4.3 Her Açının Trigonometrik Değerleri ve Özdeşlikler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus Unit 4) + MEB 10. sınıf trigonometri. Blok türleri: /ap/_kit/defter.js başı.
   Not: ASTC grafiği birim çember çizer (merkez (8, 5.5), yarıçap 4 birim = 1); yardımcı işlevler yalnızca noktaları hesaplar. */
window.DEFTER = (function () {
  var CX = 8, CY = 5.5, R = 4, PI = Math.PI;
  function r2(v) { return Math.round(v * 100) / 100; }
  function pt(d, rad) { var t = d * PI / 180; return [r2(CX + rad * Math.cos(t)), r2(CY + rad * Math.sin(t))]; }
  function daire() { var a = [], d; for (d = 0; d <= 360; d += 10) a.push(pt(d, R)); return a; }
  /* bir bölgenin (a0°…a0+90°) taralı dilimi */
  function dilim(a0) { var a = [[CX, CY]], d; for (d = a0; d <= a0 + 90; d += 10) a.push(pt(d, R)); return a; }

  return {
    slug: "pc403",
    amac: "Bu konu trigonometrik oranları her açıya genişletiyor: işaretleri bölgeye göre (ASTC), referans açısıyla özel değerleri ve temel özdeşlikleri öğreneceksin. Hesap makinesi olmadan 150°, 225° ya da −30° gibi açıların değerini bulabileceksin.",
    bolumler: [
      {
        baslik: "Her açı için oranlar: x, y ve r",
        kisa: "Bitiş kenarındaki (x, y) noktasından sin = y/r, cos = x/r, tan = y/x.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "sin θ = y / r", alt: "r = √(x² + y²)" }, ",", { t: "cos θ = x / r" }, ",", { t: "tan θ = y / x", alt: "x ≠ 0" }],
            aciklama: "(x, y), standart konumdaki θ açısının bitiş kenarı üstünde herhangi bir nokta; r orijine uzaklığıdır. csc, sec, cot bunların terslerdir. Birim çemberde r = 1." },
          { tip: "kavramlar", kartlar: [
              { ikon: "✚", terim: "Quadrantal angle", tr: "eksen açısı", tanim: "Bitiş kenarı bir eksen üstünde olan açı: 0°, 90°, 180°, 270° ve katları. Bölgelerin içinde değil, sınırında yer alırlar.", ornek: "180° açısında nokta (−1, 0): sin 180° = 0, cos 180° = −1." },
              { ikon: "📏", terim: "Reference angle", tr: "referans açısı", tanim: "Bitiş kenarının x eksenine yaptığı dar açı. Değerler bu açıdan, işaret bölgeden gelir.", ornek: "150°'nin referans açısı 30°." }
            ] },
          { tip: "ornek", baslik: "Noktadan oranlara", durum: "Standart konumdaki θ açısının bitiş kenarı (−3, 4) noktasından geçiyor. Altı trigonometrik oranı bul.",
            adimlar: ["r = √((−3)² + 4²) = √25 = 5.", "sin θ = 4/5, cos θ = −3/5, tan θ = 4/(−3) = −4/3.", "Tersler: csc θ = 5/4, sec θ = −5/3, cot θ = −3/4."],
            sonuc: "sin θ = ==4/5==, cos θ = ==−3/5==, tan θ = ==−4/3==. Sınavda böyle yaz: *The terminal side passes through (−3, 4), so r = 5.*" }
        ]
      },
      {
        baslik: "ASTC: hangi bölgede hangi işaret?",
        kisa: "Bölgede x ve y'nin işaretine bak; sin y gibi, cos x gibi davranır.",
        bloklar: [
          { tip: "grafik", baslik: "Dört bölge, dört işaret", xlabel: "x = cos θ", ylabel: "y = sin θ", xmax: 16, ymax: 11,
            ogeler: [
              { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [3.1, 5.5], to: [12.9, 5.5] },
              { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [8, 0.9], to: [8, 10.1] },
              { id: "c", tip: "egri", renk: 0, noktalar: daire() },
              { id: "d1", tip: "alan", renk: 1, noktalar: dilim(0), gizli: true },
              { id: "d2", tip: "alan", renk: 3, noktalar: dilim(90), gizli: true },
              { id: "d3", tip: "alan", renk: 0, noktalar: dilim(180), gizli: true },
              { id: "d4", tip: "alan", renk: 2, noktalar: dilim(270), gizli: true },
              { id: "n1", tip: "yazi", x: 12.6, y: 9.8, metin: "I" },
              { id: "n2", tip: "yazi", x: 3.4, y: 9.8, metin: "II" },
              { id: "n3", tip: "yazi", x: 3.4, y: 0.9, metin: "III" },
              { id: "n4", tip: "yazi", x: 12.6, y: 0.9, metin: "IV" },
              { id: "t1", tip: "yazi", x: 10.3, y: 7.4, metin: "hepsi +", gizli: true },
              { id: "t2", tip: "yazi", x: 5.6, y: 7.4, metin: "sin +", gizli: true },
              { id: "t3", tip: "yazi", x: 5.6, y: 3.3, metin: "tan +", gizli: true },
              { id: "t4", tip: "yazi", x: 10.4, y: 3.3, metin: "cos +", gizli: true },
              { id: "mn", tip: "yazi", x: 8, y: 10.55, metin: "ASTC: All Students Take Calculus", gizli: true }
            ],
            durumlar: [
              { metin: "Birim çember dört bölgeye ayrılır. Her bölgede x (cos) ve y (sin) işaretleri sabittir; tan = y/x onların oranıdır." },
              { metin: "I. bölge: x > 0, y > 0. sin, cos ve tan hepsi pozitif (*All*).", goster: ["d1", "t1"] },
              { metin: "II. bölge: x < 0, y > 0. Yalnız sin pozitif (*Students*); cos < 0 ve tan = y/x < 0.", gizle: ["d1"], goster: ["d2", "t2"] },
              { metin: "III. bölge: x < 0, y < 0. sin ve cos negatif, ama tan = (−)/(−) pozitif (*Take*).", gizle: ["d2"], goster: ["d3", "t3"] },
              { metin: "IV. bölge: x > 0, y < 0. Yalnız cos pozitif (*Calculus*); sin < 0 ve tan < 0.", gizle: ["d3"], goster: ["d4", "t4"] },
              { metin: "Dört bölge birlikte: saatin tersi yönünde A, S, T, C. Hatırlama cümlesi: All Students Take Calculus.", gizle: ["d4"], goster: ["mn"] }
            ] },
          { tip: "tablo", baslik: "İşaret tablosu", head: ["Bölge", "θ aralığı", "sin", "cos", "tan"],
            rows: [["I", "0° – 90°", "+", "+", "+"], ["II", "90° – 180°", "+", "−", "−"], ["III", "180° – 270°", "−", "−", "+"], ["IV", "270° – 360°", "−", "+", "−"]],
            not: "Sınavda böyle yaz: *In the second quadrant, sine is positive and cosine is negative because y > 0 and x < 0.*" },
          { tip: "ikili", sol: { ikon: "➕", baslik: "Pozitif", maddeler: ["I. bölgede hepsi", "II'de sin, III'te tan, IV'te cos"] },
            sag: { ikon: "➖", baslik: "Negatif", maddeler: ["Geri kalan oranlar", "Önce bölgeyi bul, sonra işarete bak"] },
            oyun: [
              { metin: "cos 120°", cevap: "sag", neden: "120° II. bölgede: x < 0, yani cos negatif." },
              { metin: "sin 120°", cevap: "sol", neden: "II. bölgede y > 0, sin pozitif." },
              { metin: "tan 200°", cevap: "sol", neden: "200° III. bölgede: sin ve cos negatif, oranları pozitif." },
              { metin: "sin 200°", cevap: "sag", neden: "III. bölgede y < 0." },
              { metin: "tan 300°", cevap: "sag", neden: "300° IV. bölgede: sin negatif, cos pozitif, tan negatif." }
            ] }
        ]
      },
      {
        baslik: "Referans açısı: her açıyı I. bölgeye indir",
        kisa: "Referans açı, bitiş kenarının x eksenine yaptığı dar açıdır.",
        bloklar: [
          { tip: "tablo", baslik: "Referans açısı (*reference angle*) nasıl bulunur?", head: ["Bölge", "Derece", "Radyan"],
            rows: [["I", "θ", "θ"], ["II", "180° − θ", "π − θ"], ["III", "θ − 180°", "θ − π"], ["IV", "360° − θ", "2π − θ"]],
            not: "Üç adım: (1) bölgeyi bul, (2) referans açısının değerini yaz, (3) ASTC'ye göre işareti koy." },
          { tip: "ornek", baslik: "Dört açı, dört değer", durum: "sin 150°, cos 225°, tan 300° ve sin(7π/6) değerlerini hesap makinesi olmadan bul.",
            adimlar: ["150° II. bölgede, referans 180° − 150° = 30°; sin 30° = 1/2, sin II'de pozitif → sin 150° = 1/2.", "225° III. bölgede, referans 225° − 180° = 45°; cos 45° = √2/2, cos III'te negatif → cos 225° = −√2/2.", "300° IV. bölgede, referans 360° − 300° = 60°; tan 60° = √3, tan IV'te negatif → tan 300° = −√3.", "7π/6 III. bölgede, referans 7π/6 − π = π/6; sin π/6 = 1/2, sin III'te negatif → sin(7π/6) = −1/2."],
            sonuc: "1/2, −√2/2, −√3, −1/2. Sınavda böyle yaz: *The reference angle is 30° and sine is positive in quadrant II.*" },
          { tip: "tuzak", metin: "Referans açı her zaman x eksenine göre ölçülür, y eksenine göre değil.", yanlis: "120°'nin referans açısı 30° (çünkü 120° − 90°).", dogru: "Referans açı 180° − 120° = 60°. Bu yüzden sin 120° = sin 60° = √3/2." }
        ]
      },
      {
        baslik: "Özel açıların bütün çember değerleri",
        kisa: "II–IV. bölge değerleri I. bölgedekilerin işaret değişmiş halidir.",
        bloklar: [
          { tip: "tablo", baslik: "II, III ve IV. bölgenin özel açıları", head: ["θ", "sin θ", "cos θ", "tan θ"],
            rows: [["120° (2π/3)", "√3/2", "−1/2", "−√3"], ["135° (3π/4)", "√2/2", "−√2/2", "−1"], ["150° (5π/6)", "1/2", "−√3/2", "−√3/3"], ["210° (7π/6)", "−1/2", "−√3/2", "√3/3"], ["225° (5π/4)", "−√2/2", "−√2/2", "1"], ["240° (4π/3)", "−√3/2", "−1/2", "√3"], ["300° (5π/3)", "−√3/2", "1/2", "−√3"], ["315° (7π/4)", "−√2/2", "√2/2", "−1"], ["330° (11π/6)", "−1/2", "√3/2", "−√3/3"]],
            not: "Ezberleme: önce referans açısının değerini, sonra ASTC işaretini al." },
          { tip: "ornek", baslik: "Negatif ve büyük açılar", durum: "sin(−30°), cos 765°, tan(−3π/4) ve sin(11π/3) değerlerini bul.",
            adimlar: ["−30° ile 330° eş uçlu (IV. bölge), referans 30°; sin negatif → sin(−30°) = −1/2.", "765° − 720° = 45°; cos 765° = cos 45° = √2/2.", "−3π/4 + 2π = 5π/4 (225°, III. bölge), referans π/4; tan pozitif → tan(−3π/4) = 1.", "11π/3 − 2π = 5π/3 (300°, IV. bölge), referans π/3; sin negatif → sin(11π/3) = −√3/2."],
            sonuc: "−1/2, √2/2, 1, −√3/2. Sınavda böyle yaz: *Subtract full rotations (360° or 2π) to find a coterminal angle.*" }
        ]
      },
      {
        baslik: "Temel özdeşlikler",
        kisa: "Özdeşlikler her açıda doğrudur; hepsi sin²θ + cos²θ = 1'den türer.",
        bloklar: [
          { tip: "tablo", baslik: "Bilmen gereken özdeşlikler (*identities*)", head: ["Tür", "Özdeşlik"],
            rows: [["Ters (*reciprocal*)", "csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ"], ["Oran (*quotient*)", "tan θ = sin θ / cos θ, cot θ = cos θ / sin θ"], ["Pisagor (*Pythagorean*)", "sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ"], ["Çift-tek (*even-odd*)", "sin(−θ) = −sin θ, cos(−θ) = cos θ, tan(−θ) = −tan θ"], ["Tamamlayan (*cofunction*)", "sin(90° − θ) = cos θ, cos(90° − θ) = sin θ"]],
            not: "1 + tan²θ = sec²θ, sin²θ + cos²θ = 1'in her iki yanını cos²θ'ya bölmekle elde edilir." },
          { tip: "ornek", baslik: "Bir oran verildi, ötekileri bul", durum: "sin θ = 3/5 ve θ II. bölgede. cos θ ve tan θ kaçtır?",
            adimlar: ["cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25, yani cos θ = ±4/5.", "II. bölgede cos negatif: cos θ = −4/5.", "tan θ = sin θ / cos θ = (3/5)/(−4/5) = −3/4."],
            sonuc: "cos θ = ==−4/5==, tan θ = ==−3/4==. Sınavda böyle yaz: *Since θ is in quadrant II, cosine is negative.*" },
          { tip: "ornek", baslik: "Özdeşlik ispatı", durum: "sec θ − cos θ = sin θ · tan θ özdeşliğini ispatla.",
            adimlar: ["Sol taraftan başla: sec θ − cos θ = 1/cos θ − cos θ.", "Ortak payda: (1 − cos²θ)/cos θ = sin²θ/cos θ.", "sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ · tan θ."],
            sonuc: "Sol = sağ. Sınavda böyle yaz: *Start with the left-hand side and show that it equals the right-hand side. Therefore LHS = RHS.*" },
          { tip: "tuzak", metin: "Karenin parantezini açarken orta terimi unutma.", yanlis: "(sin θ + cos θ)² = sin²θ + cos²θ = 1.", dogru: "(sin θ + cos θ)² = sin²θ + 2 sin θ cos θ + cos²θ = 1 + 2 sin θ cos θ." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Bitiş kenarında (x, y) varsa r = √(x² + y²), sin = y/r, cos = x/r, tan = y/x.",
              "ASTC: I'de hepsi, II'de sin, III'te tan, IV'te cos pozitif.",
              "Referans açı x eksenine göredir: II'de 180° − θ, III'te θ − 180°, IV'te 360° − θ.",
              "Değer = referans açının değeri, işaret = bölgeden (ASTC).",
              "Negatif ya da 360°'den büyük açıda tam tur çıkar ya da ekle.",
              "sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ.",
              "sin ve tan tektir, cos çifttir: sin(−θ) = −sin θ, cos(−θ) = cos θ.",
              "İspatta karmaşık taraftan başla, sin ve cos'a çevir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Standart konumdaki θ açısının bitiş kenarı (−5, 12) noktasından geçiyor. cos θ kaçtır?", opts: ["5/13", "−5/13", "−12/13", "−13/5"], a: 1,
        why: "r = √(25 + 144) = 13 ve cos θ = x/r = −5/13. 5/13 işareti unutmuş cevaptır; −12/13 ise sin değildir (sin = +12/13)." },
      { q: "Aşağıdaki değerlerden hangisi pozitiftir?", opts: ["sin 210°", "cos 150°", "tan 300°", "tan 225°"], a: 3,
        why: "225° III. bölgede; sin ve cos negatif, oranları tan pozitif. 210°'de sin, 150°'de cos, 300°'de tan negatiftir." },
      { q: "sin(7π/6) · cos(5π/6) çarpımının değeri kaçtır?", opts: ["√3/4", "−√3/4", "3/4", "−1/4"], a: 0,
        why: "sin(7π/6) = −1/2 (III. bölge, referans π/6) ve cos(5π/6) = −√3/2 (II. bölge, referans π/6). Çarpım (−1/2)(−√3/2) = √3/4; iki negatif çarpım pozitif verir." },
      { q: "Tablodaki bilgilere göre θ için tan θ kaçtır?", opts: ["−3/4", "4/3", "−4/3", "3/4"], a: 2,
        why: "cos θ pozitif ve sin θ = −4/5 ise θ IV. bölgede. cos² = 1 − 16/25 = 9/25, cos θ = 3/5. tan θ = (−4/5)/(3/5) = −4/3.",
        fig: { type: "table", head: ["Verilen", "Değer"], rows: [["sin θ", "−4/5"], ["cos θ", "pozitif"]], caption: "θ hakkında bilgi" } },
      { q: "(1 − sin²θ) / cos θ ifadesi aşağıdakilerden hangisine eşittir (cos θ ≠ 0)?", opts: ["sec θ", "cos θ", "1", "tan θ"], a: 1,
        why: "1 − sin²θ = cos²θ olduğundan ifade cos²θ / cos θ = cos θ olur. sec θ, 1/cos θ'dır." }
    ]
  };
})();
