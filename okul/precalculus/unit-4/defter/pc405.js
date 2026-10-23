/* Kitora not defteri · pc405 · 4.5 Sinüs ve Kosinüs Teoremleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Precalculus Unit 4) + MEB 10. sınıf trigonometri. Blok türleri: /ap/_kit/defter.js başı.
   Not: SSA grafiğinde A (1, 2), C (7.93, 6) ve yer çizgisi y = 2; A = 30°, b = 8 birim, h = 4. a = 3, 4, 5, 8.5 için B noktaları
   C'den yere inen çemberin kesimidir: x = 7.93 ± √(a² − 16). */
window.DEFTER = {
  slug: "pc405",
  amac: "Bu konu dik olmayan üçgenlerde kenar ve açı bulmayı anlatıyor: sinüs teoremi, kosinüs teoremi ve üçgenin alanı. Hangi bilgi verilince hangi teoremin seçileceğini ve SSA'daki belirsiz durumu öğreneceksin.",
  bolumler: [
    {
      baslik: "Hangi teoremi kullanacağım?",
      kisa: "İki açı varsa sinüs, iki kenar arasındaki açı ya da üç kenar varsa kosinüs.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "△", terim: "Oblique triangle", tr: "dik olmayan üçgen", tanim: "Dik açısı bulunmayan üçgen. Oranları SOH-CAH-TOA ile çözemeyiz; sinüs ve kosinüs teoremi gerekir.", ornek: "Üç kenarı 3, 5, 7 olan üçgen." },
            { ikon: "🔤", terim: "Standard labeling", tr: "standart adlandırma", tanim: "A, B, C köşelerinin karşısındaki kenarlar sırasıyla a, b, c. Küçük harf, aynı büyük harfin karşısındaki kenardır.", ornek: "a kenarı A açısının karşısındadır." }
          ] },
        { tip: "tablo", baslik: "Verilenlere göre teorem", head: ["Verilenler", "Kısaltma", "Teorem"],
          rows: [["İki açı + bir kenar", "AAS / ASA", "Sinüs teoremi"], ["İki kenar + birinin karşısındaki açı", "SSA", "Sinüs teoremi (belirsiz durum olabilir)"], ["İki kenar + aralarındaki açı", "SAS", "Kosinüs teoremi"], ["Üç kenar", "SSS", "Kosinüs teoremi"]],
          not: "Sınavda böyle yaz: *We are given two angles and a side, so we use the Law of Sines.*" },
        { tip: "ikili", sol: { ikon: "🔭", baslik: "Sinüs teoremi", maddeler: ["Bir açı-karşı kenar çifti bilinir", "AAS, ASA, SSA"] },
          sag: { ikon: "📐", baslik: "Kosinüs teoremi", maddeler: ["Karşılıklı çift yoktur", "SAS, SSS"] },
          oyun: [
            { metin: "A = 40°, B = 60° ve a = 5 verilmiş.", cevap: "sol", neden: "AAS: A ve a karşılıklı çift." },
            { metin: "a = 5, b = 7 ve aralarındaki C = 60° verilmiş.", cevap: "sag", neden: "SAS: karşılıklı çift yok, c² bulunur." },
            { metin: "Üç kenar verilmiş: 3, 5, 7.", cevap: "sag", neden: "SSS: açı kosinüs teoremiyle bulunur." },
            { metin: "A = 30°, a = 6 ve b = 6√2 verilmiş.", cevap: "sol", neden: "SSA: A ve a karşılıklı çift; sinüs teoremi (belirsiz durum!)." },
            { metin: "A = 50°, B = 60° ve aralarındaki c = 10 verilmiş.", cevap: "sol", neden: "ASA: C = 70° bulunur, sonra sinüs teoremi." }
          ] }
      ]
    },
    {
      baslik: "Sinüs teoremi",
      kisa: "Kenarın sinüsüne oranı üç kenarda da aynıdır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "a / sin A", alt: "" }, "=", { t: "b / sin B" }, "=", { t: "c / sin C" }, "=", { t: "2R", alt: "R: çevrel çemberin yarıçapı" }],
          aciklama: "Büyük açının karşısındaki kenar büyüktür. Üçgenin iç açıları toplamı 180°'dir: A + B + C = 180°. Buradan sin A : sin B : sin C = a : b : c ve (sin A − sin B) / (sin A + sin B) = (a − b) / (a + b) çıkar." },
        { tip: "ornek", baslik: "Okul bahçesindeki üçgen", durum: "Kantin (K), spor salonu (S) ve yurt (Y) bir üçgen oluşturuyor. K'deki açı 45°, S'deki açı 60° ve SY mesafesi 12√2 m. KY mesafesi kaç m?",
          adimlar: ["SY, K açısının karşısında (a = 12√2, A = 45°); KY, S açısının karşısında (b, B = 60°).", "a / sin A = b / sin B → 12√2 / (√2/2) = b / (√3/2).", "12√2 · 2/√2 = 24, yani b = 24 · √3/2 = 12√3."],
          sonuc: "KY = ==12√3 m==. Sınavda böyle yaz: *By the Law of Sines, a / sin A = b / sin B.*" },
        { tip: "tuzak", metin: "sin B bir değer verince iki açı çıkar: B ve 180° − B.", yanlis: "sin B = 1/2 ise B = 30°'dir.", dogru: "B = 30° ya da 150°. Açılar toplamı 180°'yi aşan seçenek elenir; ikisi de uygunsa iki üçgen vardır." }
      ]
    },
    {
      baslik: "SSA: belirsiz durum (*ambiguous case*)",
      kisa: "a'yı h = b sin A ve b ile karşılaştır: üçgen sayısı çıkar.",
      bloklar: [
        { tip: "grafik", baslik: "A = 30°, b = 8: a değişince üçgen sayısı", xlabel: "", ylabel: "", xmax: 16, ymax: 11,
          ogeler: [
            { id: "g", tip: "cizgi", renk: 0, from: [1, 2], to: [15.8, 2] },
            { id: "b", tip: "cizgi", renk: 0, from: [1, 2], to: [7.93, 6] },
            { id: "h", tip: "cizgi", renk: 3, kesik: true, from: [7.93, 6], to: [7.93, 2], gizli: true },
            { id: "a1", tip: "cizgi", renk: 2, from: [7.93, 6], to: [7.93, 3], gizli: true },
            { id: "a2", tip: "cizgi", renk: 1, from: [7.93, 6], to: [4.93, 2], gizli: true },
            { id: "pA", tip: "nokta", renk: 0, x: 1, y: 2, etiket: "A" },
            { id: "pC", tip: "nokta", renk: 0, x: 7.93, y: 6, etiket: "C" },
            { id: "pB1", tip: "nokta", renk: 2, x: 10.93, y: 2, etiket: "B₁", gizli: true },
            { id: "pB2", tip: "nokta", renk: 1, x: 4.93, y: 2, etiket: "B₂", gizli: true },
            { id: "ang", tip: "yazi", x: 3, y: 2.5, metin: "30°" },
            { id: "lb", tip: "yazi", x: 3.9, y: 4.7, metin: "b = 8", hiza: "end" },
            { id: "lh", tip: "yazi", x: 7.6, y: 2.8, metin: "h = 4", hiza: "end", gizli: true },
            { id: "la", tip: "yazi", x: 8.3, y: 4.6, metin: "a = 3", hiza: "start", gizli: true },
            { id: "res", tip: "yazi", x: 8, y: 10.3, metin: "?", gizli: true }
          ],
          durumlar: [
            { metin: "A = 30° ve b = 8 verilmiş. C'den yere bir a kenarı sallandıracağız. Kaç üçgen çıkar?" },
            { metin: "Önce yüksekliğe bak: h = b sin A = 8 · 1/2 = 4. C'den yere en kısa yol bu dik doğrudur.", goster: ["h", "lh"] },
            { metin: "a = 3 < h: kenar yere ulaşamıyor. Üçgen yok.", goster: ["a1", "la", "res"], set: { a1: { to: [7.93, 3] }, la: { metin: "a = 3" }, res: { metin: "üçgen yok" } } },
            { metin: "a = h = 4: kenar tam yere değiyor. Tek bir üçgen, dik üçgen.", set: { a1: { to: [7.93, 2] }, la: { metin: "a = 4" }, res: { metin: "1 üçgen (dik)" } } },
            { metin: "h < a < b (a = 5): kenar yeri iki noktada keser, B₁ ve B₂. İki farklı üçgen.", goster: ["a2", "pB1", "pB2"], set: { a1: { to: [10.93, 2] }, la: { metin: "a = 5" }, res: { metin: "2 üçgen" } } },
            { metin: "a ≥ b (a = 8,5): ikinci kesim A'nın soluna düşer, geçersiz. Tek üçgen.", gizle: ["a2", "pB2"], set: { a1: { to: [15.43, 2] }, pB1: { x: 15.43 }, la: { metin: "a = 8,5" }, res: { metin: "1 üçgen" } } }
          ] },
        { tip: "tablo", baslik: "A dar açıysa (SSA)", head: ["Koşul", "Üçgen sayısı"],
          rows: [["a < h = b sin A", "0"], ["a = h", "1 (dik üçgen)"], ["h < a < b", "2"], ["a ≥ b", "1"]],
          not: "A geniş açı (*obtuse*) ise: a > b ise 1 üçgen, a ≤ b ise üçgen yok." },
        { tip: "ornek", baslik: "Kaç üçgen var?", durum: "A = 30°, a = 6 ve b = 6√2 olan üçgenleri incele.",
          adimlar: ["h = b sin A = 6√2 · 1/2 = 3√2. Karelerine bak: (3√2)² = 18 < 36 = 6², yani h < a.", "a = 6 < b = 6√2 (36 < 72), yani h < a < b: iki üçgen.", "Kontrol: sin B = b sin A / a = (6√2 · 1/2)/6 = √2/2 → B = 45° ya da 135°; 30° + 135° = 165° < 180° olduğu için ikisi de geçerli."],
          sonuc: "==İki üçgen== vardır (B = 45° ve B = 135°). Sınavda böyle yaz: *There are two possible triangles because h < a < b.*" }
      ]
    },
    {
      baslik: "Kosinüs teoremi",
      kisa: "Pisagor'un genelleşmiş hali: c² = a² + b² − 2ab cos C.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "c² = a² + b² − 2ab cos C", alt: "SAS: iki kenar ve aralarındaki açı" }, "→", { t: "cos C = (a² + b² − c²) / (2ab)", alt: "SSS: üç kenar" }],
          aciklama: "C = 90° ise cos C = 0 ve formül Pisagor'a döner. Diğer kenarlar için harfleri çevir: a² = b² + c² − 2bc cos A." },
        { tip: "ornek", baslik: "İki patika (SAS)", durum: "Okul kapısından iki patika 60° açıyla ayrılıyor; biri 2 km, öteki 3 km sonra bitiyor. Uçlar arası mesafe kaç km?",
          adimlar: ["a = 2, b = 3 ve aralarındaki açı C = 60°.", "c² = 2² + 3² − 2 · 2 · 3 · cos 60° = 4 + 9 − 12 · 1/2.", "c² = 13 − 6 = 7 → c = √7."],
          sonuc: "Uzaklık ==√7 km==. Sınavda böyle yaz: *By the Law of Cosines, c² = a² + b² − 2ab cos C.*" },
        { tip: "ornek", baslik: "Üç kenardan açı (SSS)", durum: "Kenarları 3, 5 ve 7 olan üçgenin en büyük açısını bul.",
          adimlar: ["En büyük açı en büyük kenarın (7) karşısındadır: C.", "cos C = (3² + 5² − 7²) / (2 · 3 · 5) = (9 + 25 − 49)/30 = −15/30 = −1/2.", "cos C = −1/2 olan açı 120°."],
          sonuc: "En büyük açı ==120°== (geniş açı)." },
        { tip: "tuzak", metin: "SSS'de açıyı sinüs teoremiyle ararsan geniş açıyı kaçırabilirsin.", yanlis: "Önce herhangi bir açıyı sinüs teoremiyle bul.", dogru: "Önce kosinüs teoremiyle en büyük açıyı bul: cos negatifse açı geniştir. Sinüs, geniş ve dar açıyı ayıramaz." }
      ]
    },
    {
      baslik: "Üçgenin alanı ve uygulama",
      kisa: "İki kenar ve aralarındaki açıyla alan: ½ · a · b · sin C.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "A(∆ABC)", alt: "üçgenin alanı (*area*)" }, "=", { t: "½ · a · b · sin C", alt: "C, a ile b arasındaki açı" }],
          aciklama: "Taban × yükseklik / 2'nin trigonometrik hali: yükseklik h = b sin C. Aynı üçgen için A(∆ABC) = ½ac sin B = ½bc sin A de geçerlidir." },
        { tip: "ornek", baslik: "3-5-7 üçgeninin alanı", durum: "Kenarları 3, 5 ve 7 olan üçgenin alanını bul. (C = 120° bulundu.)",
          adimlar: ["3 ve 5 kenarları arasındaki açı 120°: sin 120° = √3/2.", "Alan = ½ · 3 · 5 · √3/2 = 15√3/4."],
          sonuc: "Alan ==15√3/4==. Sınavda böyle yaz: *The area is ½ab sin C = ½ · 3 · 5 · sin 120°.*" },
        { tip: "ornek", baslik: "Verilen bağıntıdan açıyı bulmak", durum: "ABC üçgeninde c² = a² + b² + √2·ab. C açısı kaç derecedir?",
          adimlar: ["Kosinüs teoremi: c² = a² + b² − 2ab cos C.", "İki eşitliği karşılaştır: −2ab cos C = √2·ab, yani cos C = −√2/2.", "0° ile 180° arasında cos C = −√2/2 olan açı 135°."],
          sonuc: "C = ==135°== (geniş açı). Sınavda böyle yaz: *Compare the given relation with the Law of Cosines.*" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Draw and label the triangle first.*", metin: "Önce şekil çiz, bilinenleri işaretle." },
            { ikon: "✍️", baslik: "*Two sides and the included angle are given.*", metin: "SAS: aradaki açı." },
            { ikon: "✍️", baslik: "*Leave the answer in exact form.*", metin: "Hesap makinesi yok: kök ve π'li cevap." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "a, A'nın karşısındaki kenardır; A + B + C = 180°.",
            "Sinüs teoremi: a/sin A = b/sin B = c/sin C; AAS, ASA ve SSA'da kullan.",
            "Kosinüs teoremi: c² = a² + b² − 2ab cos C; SAS ve SSS'de kullan.",
            "SSA'da h = b sin A ile karşılaştır: a < h → 0, a = h → 1, h < a < b → 2, a ≥ b → 1 üçgen.",
            "sin B = k iken B ve 180° − B iki aday; toplamı 180°'yi aşanı ele.",
            "SSS'de önce en büyük açıyı kosinüs teoremiyle bul; cos negatifse açı geniştir.",
            "A(∆ABC) = ½ab sin C (a ve b arasındaki açı C).",
            "Hesap makinesi yok: özel açılar kullanılır, cevap kök biçiminde bırakılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In triangle ABC, A = 30°, B = 45° and a = 10. What is the length of side b?", opts: ["5√2", "10√2", "10√3", "20"], a: 1,
      why: "b = a sin B / sin A = 10 · (√2/2) / (1/2) = 10√2. 5√2, sin 30°'yi paya yazmaktan çıkar." },
    { q: "Two paths leave the school gate at an angle of 60° and end 4 km and 6 km from the gate. What is the distance between the ends of the paths?", opts: ["2√7 km", "2√13 km", "√10 km", "10 km"], a: 0,
      why: "c² = 4² + 6² − 2 · 4 · 6 · cos 60° = 52 − 24 = 28, c = 2√7. 2√13 (= √52), −2ab cos C terimini unutmaktır." },
    { q: "The sides of a triangular plot of land are 3, 5 and 7. What is the largest angle of the plot?", opts: ["60°", "90°", "120°", "150°"], a: 2,
      why: "En büyük açı 7'nin karşısında: cos C = (9 + 25 − 49)/30 = −1/2, C = 120°. 90° olsaydı 3² + 5² = 7² gerekirdi (34 ≠ 49)." },
    { q: "Using the information in the table, how many different triangles can be drawn?", opts: ["No triangle", "Exactly one triangle", "The number cannot be determined", "Two different triangles"], a: 3,
      why: "SSA, A dar açı: h = b sin A = 10 · 1/2 = 5. h < a < b yani 5 < 6 < 10: iki üçgen. Tek üçgen cevabı, a ≥ b koşulu için geçerlidir.",
      fig: { type: "table", head: ["Given", "Value"], rows: [["A", "30°"], ["a (opposite A)", "6"], ["b", "10"]], caption: "Known parts of a triangle" } },
    { q: "Two sides of a triangle are 6 and 8, and the angle between them is 30°. What is the area of the triangle?", opts: ["12", "24", "12√3", "24√3"], a: 0,
      why: "A(∆ABC) = ½ · 6 · 8 · sin 30° = 24 · 1/2 = 12. 24, ½ ya da sin 30°'yi unutmaktır." }
  ]
};
