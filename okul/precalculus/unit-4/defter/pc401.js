/* Kitora not defteri · pc401 · 4.1 Açılar, Radyan ve Birim Çember
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus Unit 4) + MEB 10. sınıf trigonometri. Blok türleri: /ap/_kit/defter.js başı.
   Not: birim çember grafiği için yardımcı işlevler yalnızca noktaları hesaplar (merkez (8, 5.5), yarıçap 4 birim = 1). */
window.DEFTER = (function () {
  var CX = 8, CY = 5.5, R = 4, PI = Math.PI;
  function r2(v) { return Math.round(v * 100) / 100; }
  function pt(d, rad) { var t = d * PI / 180; return [r2(CX + rad * Math.cos(t)), r2(CY + rad * Math.sin(t))]; }
  function daire() { var a = [], d; for (d = 0; d <= 360; d += 10) a.push(pt(d, R)); return a; }
  function yay(d) { var a = [], k; for (k = 0; k <= 6; k++) a.push(pt(d * k / 6, 1.1)); return a; }
  /* Bir durum: açı (derece), başlık metni, alttaki değer yazısı, açıklama */
  function durum(d, ust, alt, metin) {
    var p = pt(d, R), sag = p[0] >= CX - 0.01, yukari = p[1] >= CY - 0.01, sifir = Math.abs(p[0] - CX) < 0.01;
    return {
      metin: metin,
      set: {
        P: { x: p[0], y: p[1] },
        rad: { to: p },
        vs: { from: [p[0], CY], to: p },
        vc: { from: [CX, CY], to: [p[0], CY] },
        arc: { noktalar: yay(d) },
        tsin: { x: r2(p[0] + (sag ? 0.25 : -0.25)), y: r2((CY + p[1]) / 2 - 0.1), hiza: sag ? "start" : "end" },
        tcos: { x: sifir ? CX + 0.25 : r2((CX + p[0]) / 2), y: yukari ? 4.7 : 6.1, metin: sifir ? "cos = 0" : "cos", hiza: sifir ? "start" : "middle" },
        ust: { metin: ust },
        alt: { metin: alt }
      }
    };
  }
  var p0 = pt(30, R);

  return {
    slug: "pc401",
    amac: "Bu konu trigonometrinin temelini kuruyor: açıyı derece ve radyanla ölçmeyi, yay uzunluğunu hesaplamayı ve birim çemberde sin ile cos değerlerini okumayı. Sonunda özel açıların değerlerini ezberlemeden çıkarabilirsin.",
    bolumler: [
      {
        baslik: "Açı: standart konum ve eş uçlu açılar",
        kisa: "Açı, başlangıç kenarından bitiş kenarına saatin tersi yönünde ölçülür.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "📐", terim: "Standard position", tr: "standart konum", tanim: "Köşesi orijinde, başlangıç kenarı (*initial side*) pozitif x ekseni üstünde olan açı. Bitiş kenarı (*terminal side*) açının nerede bittiğini gösterir.", ornek: "90° açısının bitiş kenarı pozitif y eksenidir." },
              { ikon: "🔄", terim: "Positive / negative angle", tr: "pozitif / negatif açı", tanim: "Saatin tersi yönündeki dönüş (*counterclockwise*) pozitif, saat yönündeki dönüş (*clockwise*) negatiftir.", ornek: "−90° açısı çeyrek turu aşağı doğru döner." },
              { ikon: "🎯", terim: "Coterminal angles", tr: "eş uçlu açılar", tanim: "Bitiş kenarı aynı olan açılar; birbirinden tam tur kadar farklıdır: 360°·k ya da radyanda 2π·k.", ornek: "40°, 400° ve −320° aynı yerde biter." }
            ] },
          { tip: "ornek", baslik: "Eş uçlu açıyı bulmak", durum: "400° ve −50° açılarının 0° ile 360° arasındaki eş uçlu açılarını bul.",
            adimlar: ["400° − 360° = 40°: bir tam tur fazla, çıkar.", "−50° + 360° = 310°: negatif açıya bir tam tur ekle.", "Genel yazılış: θ + 360°·k (k bir tam sayı); radyanda θ + 2πk."],
            sonuc: "400° → ==40°==, −50° → ==310°==. Sınavda böyle yaz: *The angles 400° and 40° are coterminal because they differ by 360°.*" },
          { tip: "tuzak", metin: "Eş uçlu açılar aynı yerde biter ama aynı açı değildir.", yanlis: "40° ile 400° eşit açılardır.", dogru: "İkisi *coterminal*: bitiş kenarı ve trigonometrik değerleri aynı, ölçüleri farklı." }
        ]
      },
      {
        baslik: "Derece ve radyan",
        kisa: "Yarım tur 180° = π radyandır; dönüşüm bu orandan çıkar.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "π rad", alt: "yarım tur" }, "=", { t: "180°" }],
            aciklama: "Tam tur: 2π rad = 360°. ==Derece → radyan: π/180 ile çarp. Radyan → derece: 180/π ile çarp.== 1 radyan, yarıçap uzunluğunda bir yayı gören açıdır." },
          { tip: "tablo", baslik: "Sık kullanılan açılar", head: ["Derece", "Radyan", "Derece", "Radyan"],
            rows: [["30°", "π/6", "210°", "7π/6"], ["45°", "π/4", "225°", "5π/4"], ["60°", "π/3", "240°", "4π/3"], ["90°", "π/2", "270°", "3π/2"], ["120°", "2π/3", "300°", "5π/3"], ["135°", "3π/4", "315°", "7π/4"], ["150°", "5π/6", "330°", "11π/6"], ["180°", "π", "360°", "2π"]],
            not: "Hile: payda 6 ise 30°'nin, payda 4 ise 45°'nin, payda 3 ise 60°'nin katlarısın; pay kaç ise o kadar kat." },
          { tip: "ornek", baslik: "Dönüşüm", durum: "135° açısını radyana, 7π/6 radyanı dereceye, −π/4 radyanı dereceye çevir.",
            adimlar: ["135° · π/180 = 135π/180 = 3π/4 (135/180 = 3/4).", "7π/6 · 180/π = 7 · 30° = 210° (π sadeleşir, 180/6 = 30).", "−π/4 · 180/π = −180°/4 = −45°."],
            sonuc: "135° = ==3π/4==, 7π/6 = ==210°==, −π/4 = ==−45°==. Sınavda böyle yaz: *To convert degrees to radians, multiply by π/180.*" },
          { tip: "tuzak", metin: "Dönüşümde çarpanı ters kullanmak en sık hata.", yanlis: "Dereceyi radyana çevirmek için 180/π ile çarparım.", dogru: "Derece → radyan: π/180 (π gelir). Radyan → derece: 180/π (π gider)." }
        ]
      },
      {
        baslik: "Yay uzunluğu ve daire dilimi",
        kisa: "Açı radyan olunca yay uzunluğu s = rθ olur.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "s = rθ", alt: "yay uzunluğu (*arc length*)" }, "ve", { t: "A = ½r²θ", alt: "daire dilimi alanı (*sector area*)" }],
            aciklama: "θ ==mutlaka radyan== olmalı. Açı derece verilmişse önce π/180 ile çarp." },
          { tip: "ornek", baslik: "Pizza dilimi", durum: "Yarıçapı 6 cm olan pizzadan 60°'lik bir dilim kesiliyor. Kenar (kabuk) uzunluğu ve dilimin alanı nedir?",
            adimlar: ["60° = π/3 rad (60 · π/180).", "s = r · θ = 6 · π/3 = 2π cm.", "A = ½ · r² · θ = ½ · 36 · π/3 = 6π cm²."],
            sonuc: "Kabuk ==2π cm==, alan ==6π cm²==. Sınavda böyle yaz: *The arc length is s = rθ = 6 · π/3 = 2π cm.*" },
          { tip: "tuzak", metin: "Formüller radyan ister; derece yazarsan sonuç saçmalar.", yanlis: "s = 6 · 60 = 360 cm.", dogru: "Önce 60° = π/3 yap; s = 6 · π/3 = 2π cm." }
        ]
      },
      {
        baslik: "Birim çember: x kosinüs, y sinüs",
        kisa: "Birim çemberde θ açısının noktası (cos θ, sin θ) olur.",
        bloklar: [
          { tip: "formul", parcalar: [{ t: "P(θ)", alt: "birim çember (yarıçap 1) üstündeki nokta" }, "=", { t: "( cos θ , sin θ )", alt: "x = cos, y = sin" }],
            aciklama: "Yarıçap 1 olduğu için x² + y² = 1, yani ==sin²θ + cos²θ = 1==. tan θ = y/x = sin θ / cos θ (x = 0 ise tanımsız)." },
          { tip: "grafik", baslik: "Açı döndükçe sin ve cos nasıl değişir?", xlabel: "x = cos θ", ylabel: "y = sin θ", xmax: 16, ymax: 11,
            ogeler: [
              { id: "ex", tip: "cizgi", renk: 0, kesik: true, from: [3.1, 5.5], to: [12.9, 5.5] },
              { id: "ey", tip: "cizgi", renk: 0, kesik: true, from: [8, 0.9], to: [8, 10.1] },
              { id: "c", tip: "egri", renk: 0, noktalar: daire() },
              { id: "u1", tip: "yazi", x: 12.5, y: 4.9, metin: "1" },
              { id: "u2", tip: "yazi", x: 3.5, y: 4.9, metin: "−1" },
              { id: "u3", tip: "yazi", x: 7.5, y: 9.3, metin: "1" },
              { id: "u4", tip: "yazi", x: 7.4, y: 1.5, metin: "−1" },
              { id: "arc", tip: "egri", renk: 2, noktalar: yay(30) },
              { id: "vc", tip: "cizgi", renk: 3, from: [8, 5.5], to: [p0[0], 5.5] },
              { id: "vs", tip: "cizgi", renk: 1, from: [p0[0], 5.5], to: p0 },
              { id: "rad", tip: "cizgi", renk: 2, from: [8, 5.5], to: p0 },
              { id: "P", tip: "nokta", renk: 2, x: p0[0], y: p0[1] },
              { id: "tsin", tip: "yazi", x: r2(p0[0] + 0.25), y: r2((5.5 + p0[1]) / 2 - 0.1), metin: "sin", hiza: "start" },
              { id: "tcos", tip: "yazi", x: r2((8 + p0[0]) / 2), y: 4.7, metin: "cos" },
              { id: "ust", tip: "yazi", x: 8, y: 10.55, metin: "θ = 30° = π/6" },
              { id: "alt", tip: "yazi", x: 8, y: 0.35, metin: "(cos, sin) = (√3/2, 1/2)" }
            ],
            durumlar: [
              { metin: "Noktayı çemberde gezdireceğiz. Mor yatay parça cos θ (x), yeşil dikey parça sin θ (y). θ = 30° için: cos = √3/2, sin = 1/2.", set: { alt: { metin: "(cos, sin) = (√3/2, 1/2)" } } },
              durum(45, "θ = 45° = π/4", "(cos, sin) = (√2/2, √2/2)", "θ = 45°: iki parça eşit uzunlukta. cos 45° = sin 45° = √2/2."),
              durum(60, "θ = 60° = π/3", "(cos, sin) = (1/2, √3/2)", "θ = 60°: nokta yukarı çıktıkça sin büyür, cos küçülür. cos 60° = 1/2, sin 60° = √3/2."),
              durum(90, "θ = 90° = π/2", "(cos, sin) = (0, 1)", "θ = 90°: nokta (0, 1). cos 90° = 0, sin 90° = 1 (en büyük değer)."),
              durum(135, "θ = 135° = 3π/4", "(cos, sin) = (−√2/2, √2/2)", "θ = 135°: nokta y eksenini geçti, x negatif. cos 135° < 0, sin 135° > 0."),
              durum(210, "θ = 210° = 7π/6", "(cos, sin) = (−√3/2, −1/2)", "θ = 210°: ikisi de negatif. cos 210° = −√3/2, sin 210° = −1/2."),
              durum(300, "θ = 300° = 5π/3", "(cos, sin) = (1/2, −√3/2)", "θ = 300°: x pozitif, y negatif. cos 300° = 1/2, sin 300° = −√3/2.")
            ] },
          { tip: "ikili", sol: { ikon: "↔️", baslik: "*Cosine* (x)", maddeler: ["Noktanın yatay koordinatı", "90° ve 270°'de 0 olur"] },
            sag: { ikon: "↕️", baslik: "*Sine* (y)", maddeler: ["Noktanın dikey koordinatı", "0° ve 180°'de 0 olur"] },
            oyun: [
              { metin: "Birim çemberde bir noktanın yatay koordinatı.", cevap: "sol", neden: "x koordinatı = cos θ." },
              { metin: "θ = 90°'de değeri 1 olan fonksiyon.", cevap: "sag", neden: "90°'de nokta (0, 1): y = 1, yani sin 90° = 1." },
              { metin: "θ = 180°'de değeri −1 olan fonksiyon.", cevap: "sol", neden: "180°'de nokta (−1, 0): x = −1, yani cos 180° = −1." },
              { metin: "θ = 270°'de değeri −1 olan fonksiyon.", cevap: "sag", neden: "270°'de nokta (0, −1): y = −1, yani sin 270° = −1." },
              { metin: "θ = 90° ve 270°'de değeri 0 olan fonksiyon.", cevap: "sol", neden: "İki noktada da x = 0: cos 90° = cos 270° = 0." }
            ] }
        ]
      },
      {
        baslik: "Özel açılar tablosu",
        kisa: "30°, 45°, 60° değerleri √1, √2, √3 kalıbıyla ezbersiz çıkar.",
        bloklar: [
          { tip: "tablo", baslik: "Birim çemberin özel değerleri", head: ["θ", "Radyan", "sin θ", "cos θ", "tan θ"],
            rows: [["0°", "0", "0", "1", "0"], ["30°", "π/6", "1/2", "√3/2", "√3/3"], ["45°", "π/4", "√2/2", "√2/2", "1"], ["60°", "π/3", "√3/2", "1/2", "√3"], ["90°", "π/2", "1", "0", "tanımsız"], ["180°", "π", "0", "−1", "0"], ["270°", "3π/2", "−1", "0", "tanımsız"], ["360°", "2π", "0", "1", "0"]],
            not: "tan θ = sin θ / cos θ. 30° için tan = (1/2)/(√3/2) = 1/√3 = √3/3." },
          { tip: "formul", parcalar: [{ t: "sin θ", alt: "0°, 30°, 45°, 60°, 90°" }, "=", { t: "√0/2 , √1/2 , √2/2 , √3/2 , √4/2", alt: "= 0 , 1/2 , √2/2 , √3/2 , 1" }],
            aciklama: "cos θ aynı listenin tersten okunmuş hali: cos 0° = √4/2 = 1, cos 30° = √3/2, ..., cos 90° = √0/2 = 0." },
          { tip: "ornek", baslik: "Özel açılarla hesap", durum: "sin 60° · cos 30° + sin 30° · cos 60° ifadesinin değerini hesap makinesi kullanmadan bul.",
            adimlar: ["sin 60° = √3/2 ve cos 30° = √3/2: çarpım = 3/4.", "sin 30° = 1/2 ve cos 60° = 1/2: çarpım = 1/4.", "Toplam: 3/4 + 1/4 = 1."],
            sonuc: "Değer ==1==. Sınavda böyle yaz: *Substitute the exact values and leave the answer in exact form.*" },
          { tip: "tuzak", metin: "cos 90° = 0 olduğu için tan 90°'yi 0 sanmak sık hata.", yanlis: "tan 90° = 0.", dogru: "tan 90° = 1/0: tanımsız (*undefined*). tan 0° = 0'dır." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Açı standart konumda orijinde başlar; saatin tersi pozitif. *Coterminal* açılar 360° (2π) farklıdır.",
              "π rad = 180°. Derece → radyan: π/180; radyan → derece: 180/π.",
              "Yay uzunluğu s = rθ, daire dilimi alanı A = ½r²θ; θ radyan olmak zorunda.",
              "Birim çemberde θ'nın noktası (cos θ, sin θ); x² + y² = 1 olduğu için sin²θ + cos²θ = 1.",
              "tan θ = sin θ / cos θ; cos θ = 0 olan açılarda (90°, 270°) tanımsız.",
              "sin için 0, 30, 45, 60, 90 → √0/2, √1/2, √2/2, √3/2, √4/2; cos tersten okunur.",
              "Eksen açıları: sin 90° = 1, cos 180° = −1, sin 270° = −1, cos 0° = 1."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Hangi açı −50° ile eş uçlu (*coterminal*) bir açıdır?", opts: ["50°", "310°", "130°", "−130°"], a: 1,
        why: "−50° + 360° = 310°; iki açı tam tur kadar farklı. 50° ise x ekseninin öbür tarafında biter, aynı yer değildir." },
      { q: "5π/6 radyanlık açının derece karşılığı nedir?", opts: ["75°", "120°", "210°", "150°"], a: 3,
        why: "5π/6 · 180/π = 5 · 30° = 150°. 210° aklına geliyorsa 7π/6 ile karıştırmış olabilirsin." },
      { q: "Yarıçapı 9 cm olan bir dairede 120°'lik merkez açının gördüğü yayın uzunluğu kaçtır?", opts: ["3π cm", "12π cm", "6π cm", "1080 cm"], a: 2,
        why: "120° = 2π/3 rad; s = rθ = 9 · 2π/3 = 6π cm. 1080 cm, açıyı radyana çevirmeden 9 · 120 yapmaktan çıkar." },
      { q: "Birim çember üzerinde, standart konumdaki θ açısının bitiş kenarı çemberi (−√3/2, 1/2) noktasında kesiyor. Aşağıdakilerden hangisi θ olabilir?", opts: ["150°", "30°", "120°", "210°"], a: 0,
        why: "x = cos θ = −√3/2 ve y = sin θ = 1/2: nokta 2. bölgede, 30°'lik referans açısıyla; θ = 180° − 30° = 150°. 120° için nokta (−1/2, √3/2) olurdu."},
      { q: "7π/6 radyanlık açı için sin değeri aşağıdakilerden hangisidir?", opts: ["1/2", "√3/2", "−√3/2", "−1/2"], a: 3,
        why: "7π/6 = 210°: 3. bölgede, y koordinatı negatif; referans açısı 30° olduğundan sin = −1/2. −√3/2 ise cos 210°'dir." }
    ]
  };
})();
