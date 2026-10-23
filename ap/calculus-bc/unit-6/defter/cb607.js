/* Kitora not defteri · cb607 · 6.9 Değişken Değiştirme (u-substitution)
   Kaynak: AP Calculus BC CED 6.9. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb607",
  amac: "Bu konu *u-substitution* yani değişken değiştirmeyi anlatıyor: zincir kuralıyla türetilmiş bir fonksiyonun integralini geri almanın yolu. İçteki fonksiyonu ve onun türevini bulmayı, belirli integralde sınırları da değiştirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Zincir kuralını geri sarmak",
      kisa: "İntegralde f(g(x))·g′(x) görürsen u = g(x) yaz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "∫ f(g(x))·g′(x) dx", alt: "iç fonksiyon ve türevi yan yana" }, "=",
            { t: "∫ f(u) du", alt: "u = g(x), du = g′(x) dx" }, "=",
            { t: "F(u) + C", alt: "sonra u yerine g(x) yaz" }
          ], aciklama: "Zincir kuralı d/dx F(g(x)) = F′(g(x))·g′(x) diyordu. *U-substitution* bunu tersten okur: ==integralin içinde bir fonksiyon ve onun türevi çarpım halinde duruyorsa, o ikiliyi u ve du ile değiştir.==" },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Substitution", tr: "değişken değiştirme", tanim: "İntegraldeki karmaşık ifadeye u adını verip integrali u'ya göre yazma yöntemi. Zincir kuralının tersidir.", ornek: "∫ 2x·cos(x²) dx integralinde u = x² dersin." },
            { ikon: "✏️", terim: "Differential", tr: "diferansiyel", tanim: "u = g(x) ise du = g′(x) dx. dx'i yok etmenin yolu budur; integralde x ve dx kalmamalı.", ornek: "u = x² ise du = 2x dx." }
          ] }
      ]
    },
    {
      baslik: "u'yu seçmek: iç fonksiyon ve türevi",
      kisa: "Kuvvetin tabanı, kökün altı, üssün kendisi ya da ln'nin içi u olur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎁", baslik: "*u* (iç fonksiyon)", maddeler: ["Kuvvetin tabanı, kökün altı, e'nin üssü, ln'nin içi", "Türevi integralde çarpan olarak durmalı"] },
          sag: { ikon: "🧩", baslik: "*du* (iç türev)", maddeler: ["u′·dx parçası: integralde yan yana duran çarpan", "Sabitle farkı olabilir: 2x yerine x gibi"] },
          oyun: [
            { metin: "∫ 2x·e^(x²) dx ifadesinde x²", cevap: "sol", neden: "e'nin üssünde duran iç fonksiyon: u." },
            { metin: "∫ 2x·e^(x²) dx ifadesinde 2x dx", cevap: "sag", neden: "x²'nin diferansiyeli: du = 2x dx." },
            { metin: "∫ cos x·sin⁴x dx ifadesinde sin x", cevap: "sol", neden: "Dördüncü kuvvetin tabanı: u." },
            { metin: "∫ cos x·sin⁴x dx ifadesinde cos x dx", cevap: "sag", neden: "d(sin x) = cos x dx: du." },
            { metin: "∫ x²/(x³ + 4) dx ifadesinde x³ + 4", cevap: "sol", neden: "Paydadaki iç ifade; türevi 3x², payda x² var: u." }
          ] },
        { tip: "adimlar", baslik: "Beş adım", adimlar: [
            { baslik: "u'yu seç", metin: "İç fonksiyonu u ilan et: u = g(x)." },
            { baslik: "du'yu yaz", metin: "Türev al: du = g′(x) dx." },
            { baslik: "Yerine koy", metin: "Her x ve dx'i u ve du ile değiştir. İntegralde x kalmasın." },
            { baslik: "u'ya göre integre et", metin: "Temel kuralı kullan: ∫ uⁿ du, ∫ eᵘ du, ∫ du/u …" },
            { baslik: "x'e geri dön", metin: "u yerine g(x) yaz ve + C'yi unutma." }
          ] }
      ]
    },
    {
      baslik: "Çözülmüş örnekler",
      kisa: "Sabit çarpan eksikse düzeltilir; x'li çarpan düzeltilemez.",
      bloklar: [
        { tip: "ornek", baslik: "∫ x·cos(x²) dx", durum: "Belirsiz integrali bul.",
          adimlar: [
            "u = x² seç: cos'un içindeki ifade.",
            "du = 2x dx. İntegralde yalnız x dx var: x dx = ½ du.",
            "Yerine koy: ∫ cos u · ½ du = ½ ∫ cos u du.",
            "İntegre et: ½ sin u + C.",
            "Geri dön: ½ sin(x²) + C. Kontrol: türev ½·cos(x²)·2x = x·cos(x²). ✓"
          ], sonuc: "½ sin(x²) + C" },
        { tip: "ornek", baslik: "∫ x²/(x³ + 4) dx", durum: "Belirsiz integrali bul.",
          adimlar: [
            "u = x³ + 4 seç. du = 3x² dx, yani x² dx = ⅓ du.",
            "Yerine koy: ⅓ ∫ du/u.",
            "İntegre et: ⅓ ln|u| + C.",
            "Geri dön: ⅓ ln|x³ + 4| + C. Kontrol: ⅓ · 3x²/(x³ + 4) = x²/(x³ + 4). ✓"
          ], sonuc: "⅓ ln|x³ + 4| + C" },
        { tip: "tuzak", metin: "Eksik çarpan yalnızca sabitse integralin önüne alınabilir (½, ⅓ gibi). x gibi değişken bir çarpan integralin dışına çıkmaz.", yanlis: "∫ e^(x²) dx için u = x² seç, kalan x'i dışarı al.", dogru: "e^(x²)'nin yanında 2x yoksa u-substitution çalışmaz. ∫ x·e^(x²) dx ise çalışır: ½ e^(x²) + C." }
      ]
    },
    {
      baslik: "Sık gelen kalıplar",
      kisa: "Kalıbı tanırsan u'yu yazmadan da sonucu görürsün.",
      bloklar: [
        { tip: "tablo", baslik: "Gördüğünü tanı", head: ["İntegral", "u", "Sonuç"],
          rows: [
            ["∫ f′(x)/f(x) dx", "f(x)", "ln|f(x)| + C"],
            ["∫ e^(g(x))·g′(x) dx", "g(x)", "e^(g(x)) + C"],
            ["∫ (g(x))ⁿ·g′(x) dx  (n ≠ −1)", "g(x)", "(g(x))ⁿ⁺¹/(n + 1) + C"],
            ["∫ cos(ax + b) dx", "ax + b", "sin(ax + b)/a + C"],
            ["∫ e^(ax) dx", "ax", "e^(ax)/a + C"],
            ["∫ tan x dx", "cos x", "−ln|cos x| + C"],
            ["∫ (ln x)²/x dx", "ln x", "(ln x)³/3 + C"]
          ], vurgu: 3, not: "ax + b gibi doğrusal bir iç fonksiyonda du = a dx olduğundan sonuç 1/a ile bölünür." },
        { tip: "ornek", baslik: "∫ tan x dx", durum: "tan x = sin x / cos x yazıp çöz.",
          adimlar: [
            "∫ sin x / cos x dx. Payda u = cos x olsun.",
            "du = −sin x dx, yani sin x dx = −du.",
            "−∫ du/u = −ln|u| + C.",
            "Geri dön: −ln|cos x| + C. Kontrol: −(−sin x)/cos x = tan x. ✓"
          ], sonuc: "−ln|cos x| + C  (= ln|sec x| + C)" }
      ]
    },
    {
      baslik: "Belirli integralde sınırlar da değişir",
      kisa: "x'ten u'ya geçince sınırları da u'ya çevir; geri dönmen gerekmez.",
      bloklar: [
        { tip: "ornek", baslik: "∫₀¹ 2x(x² + 1)³ dx", durum: "Sınırları çevirerek hesapla.",
          adimlar: [
            "u = x² + 1, du = 2x dx.",
            "Sınırları çevir: x = 0 → u = 1; x = 1 → u = 2.",
            "Yeni integral: ∫₁² u³ du.",
            "Hesapla: [u⁴/4]₁² = 16/4 − 1/4 = 15/4."
          ], sonuc: "15/4" },
        { tip: "grafik", baslik: "Aynı alan, iki dünya", xlabel: "x ya da u", ylabel: "yükseklik", xmax: 2, ymax: 16,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "ax", tip: "alan", renk: 0, noktalar: [[0, 0], [0.1, 0.206], [0.2, 0.45], [0.3, 0.777], [0.4, 1.249], [0.5, 1.953], [0.6, 3.019], [0.7, 4.631], [0.8, 7.058], [0.9, 10.674], [1, 16], [1, 0]], gizli: true },
            { id: "cx", tip: "egri", renk: 0, etiket: "f(x)", noktalar: [[0, 0], [0.1, 0.206], [0.2, 0.45], [0.3, 0.777], [0.4, 1.249], [0.5, 1.953], [0.6, 3.019], [0.7, 4.631], [0.8, 7.058], [0.9, 10.674], [1, 16]] },
            { id: "au", tip: "alan", renk: 2, noktalar: [[1, 0], [1, 1], [1.1, 1.331], [1.2, 1.728], [1.3, 2.197], [1.4, 2.744], [1.5, 3.375], [1.6, 4.096], [1.7, 4.913], [1.8, 5.832], [1.9, 6.859], [2, 8], [2, 0]], gizli: true },
            { id: "cu", tip: "egri", renk: 2, etiket: "u³", noktalar: [[1, 1], [1.1, 1.331], [1.2, 1.728], [1.3, 2.197], [1.4, 2.744], [1.5, 3.375], [1.6, 4.096], [1.7, 4.913], [1.8, 5.832], [1.9, 6.859], [2, 8]], gizli: true }
          ],
          durumlar: [
            { metin: "x dünyası: f(x) = 2x(x² + 1)³ eğrisi, x = 0'dan 1'e kadar çok sert yükselir." },
            { metin: "Sorulan alan x = 0 ile x = 1 arasındaki bölge.", goster: ["ax"] },
            { metin: "u dünyası: yeni integrand u³, sınırlar 1 ile 2. Şekil değişti ama alan aynı: 15/4 = 3,75.", gizle: ["ax", "cx"], goster: ["au", "cu"] }
          ] },
        { tip: "tuzak", metin: "İntegrali u'ya çevirip sınırları x'te bırakırsan yanlış alanı hesaplarsın. İki yol da doğrudur ama karıştırılmaz.", yanlis: "∫₀¹ 2x(x² + 1)³ dx = ∫₀¹ u³ du = 1/4.", dogru: "Ya sınırları çevir: ∫₁² u³ du = 15/4. Ya da x'e dön: [(x² + 1)⁴/4]₀¹ = 16/4 − 1/4 = 15/4." }
      ]
    },
    {
      baslik: "x kalırsa: onu da u cinsinden yaz",
      kisa: "u = x + 1 gibi seçimlerde artan x'i x = u − 1 ile değiştir.",
      bloklar: [
        { tip: "ornek", baslik: "∫ x·√(x + 1) dx", durum: "Belirsiz integrali bul.",
          adimlar: [
            "u = x + 1 seç. Buradan x = u − 1 ve du = dx.",
            "Yerine koy: ∫ (u − 1)·√u du = ∫ (u^(3/2) − u^(1/2)) du.",
            "İntegre et: (2/5)u^(5/2) − (2/3)u^(3/2) + C.",
            "Geri dön: (2/5)(x + 1)^(5/2) − (2/3)(x + 1)^(3/2) + C. Kontrol: türev (x + 1)^(3/2) − (x + 1)^(1/2) = (x + 1)^(1/2)·x. ✓"
          ], sonuc: "(2/5)(x + 1)^(5/2) − (2/3)(x + 1)^(3/2) + C" },
        { tip: "ornek", baslik: "∫₀³ x/√(x + 1) dx", durum: "Sınırları da çevirerek hesapla.",
          adimlar: [
            "u = x + 1, x = u − 1, du = dx. Sınırlar: x = 0 → u = 1; x = 3 → u = 4.",
            "Yeni integral: ∫₁⁴ (u − 1)/√u du = ∫₁⁴ (u^(1/2) − u^(−1/2)) du.",
            "İntegre et: [(2/3)u^(3/2) − 2u^(1/2)]₁⁴.",
            "Hesapla: (16/3 − 4) − (2/3 − 2) = 4/3 + 4/3 = 8/3."
          ], sonuc: "8/3" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "U-substitution, zincir kuralının tersidir: ∫ f(g(x))·g′(x) dx = ∫ f(u) du.",
            "u olarak iç fonksiyonu seç (taban, kökün altı, üs, ln'nin içi); türevi integralde duruyor olmalı.",
            "Beş adım: u'yu seç, du'yu yaz, yerine koy, u'ya göre integre et, x'e dön.",
            "Eksik çarpan sabitse integralin önüne alınır; x'li çarpan alınamaz.",
            "f′/f biçimi ln|f| verir; doğrusal iç fonksiyonda sonucu 1/a ile böl.",
            "Belirli integralde sınırları da çevir: x = a → u = g(a), x = b → u = g(b).",
            "x kalırsa x'i de u cinsinden yaz (u = x + 1 ise x = u − 1).",
            "Cevabı türev alarak kontrol et; + C'yi belirsiz integralde unutma."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "∫ 6x²·e^(x³) dx integralinin değeri aşağıdakilerden hangisidir?",
      opts: ["6e^(x³) + C", "2e^(x³) + C", "18x²·e^(x³) + C", "e^(x³)/2 + C"],
      a: 1,
      why: "u = x³ ise du = 3x² dx, yani 6x² dx = 2 du. ∫ 2eᵘ du = 2eᵘ + C = 2e^(x³) + C. A şıkkı çekicidir ama 3x²'nin diferansiyelindeki 3 çarpanını hesaba katmaz."
    },
    {
      q: "x = 0'dan x = √3'e kadar ∫ 2x/(x² + 1) dx integralinin değeri kaçtır?",
      opts: ["ln 3", "ln(1 + √3)", "2 ln 3", "ln 4"],
      a: 3,
      why: "u = x² + 1 ise x = 0 için u = 1, x = √3 için u = 4. ∫₁⁴ du/u = ln 4. B şıkkı, sınırı u'ya çevirmek yerine x'in üst sınırını doğrudan ln'ye koymaktan çıkar."
    },
    {
      q: "g ve f için tablodaki değerler verilmiştir; f′ ve g′ süreklidir. ∫₁³ f′(g(x))·g′(x) dx integralinin değeri kaçtır?",
      fig: { type: "table", head: ["x", "1", "2", "3", "5"], rows: [["g(x)", "2", "4", "5", "7"], ["f(x)", "6", "3", "9", "8"]], caption: "Değer tablosu" },
      opts: ["5", "3", "−5", "11"],
      a: 0,
      why: "u = g(x) ile integral ∫ f′(u) du olur; sınırlar g(1) = 2 ve g(3) = 5. Sonuç f(5) − f(2) = 8 − 3 = 5. B şıkkı f(3) − f(1) = 3: sınırları u'ya çevirmeyi unutmak."
    },
    {
      q: "Bir çeşmeden t dakikada akan suyun hızı R(t) = 2t·√(t² + 1) litre/dakikadır. İlk 2 dakikada akan toplam su kaç litredir?",
      opts: ["(2/3)(√5 − 1)", "(2/3)·5√5", "(2/3)(5√5 − 1)", "2(5√5 − 1)"],
      a: 2,
      why: "Toplam su ∫₀² 2t√(t² + 1) dt. u = t² + 1, du = 2t dt; sınırlar 1 ve 5. ∫₁⁵ √u du = (2/3)u^(3/2) |₁⁵ = (2/3)(5√5 − 1). B şıkkı alt sınırın (u = 1) katkısını atar."
    },
    {
      q: "Aşağıdaki integrallerden hangisi yalnızca u = x² seçimiyle çözülür?",
      opts: ["∫ e^(x²) dx", "∫ x·e^(x²) dx", "∫ x²·e^(x²) dx", "∫ e^(x²)/x dx"],
      a: 1,
      why: "Sadece B'de du = 2x dx'in parçası olan x çarpanı var: ½ e^(x²) + C. A ve C'de gereken x çarpanı eksik ya da fazla; u = x² ile x'li çarpan dışarı çıkarılamaz. D'de dx/x = du/(2u) olur ve eᵘ/u'nun elementer integrali yoktur."
    }
  ]
};
