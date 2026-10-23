/* Kitora not defteri · cb906 · 9.8–9.9 Kutupsal Bölgelerin Alanı
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb906",
  amac: "Bu konu kutupsal bölgelerin alanını anlatıyor: bölgeyi kutuptan çıkan ince pasta dilimlerine ayırıp ½r²dθ'yı topluyoruz. Tek eğri için A = ½∫r²dθ, iki eğri arasındaki bölge için A = ½∫(R² − r²)dθ formüllerini, sınırları seçmeyi ve kesişimleri bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Pasta dilimi: neden ½r²?",
      kisa: "Çok ince bir dilim, yarıçapı r olan bir daire sektörüdür: alanı ½r²dθ.",
      bloklar: [
        { tip: "hikaye", ikon: "🍕", baslik: "Pizza dilimleri", metin: "Bir pizzayı ortasından dilimlere ayırırsan her dilim neredeyse ince bir üçgendir. Tam pizzanın alanı πr² = ½r²·2π; yani açısı θ olan bir dilimin alanı ==½r²θ==. Eğri bir kenarı olan bölgeler için de aynı fikri kullanacağız." },
        { tip: "formul", parcalar: [{ t: "½ r² θ", alt: "daire sektörü" }, "→", { t: "½ r² dθ", alt: "ince dilim" }, "→", { t: "A = ½ ∫ₐᵇ r² dθ", alt: "hepsini topla" }], aciklama: "Eğride r, θ ile değişir; her dilimin uzunluğu o θ'daki r(θ)'dır. α ≤ θ ≤ β arasındaki dilimleri toplayınca A = ½∫ₐᵇ [r(θ)]² dθ olur." },
        { tip: "grafik", baslik: "r = 2sin2θ yaprağı ve ince dilimler", xlabel: "x", ylabel: "y", xmax: 2.9, ymax: 2, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], ogeler: [{ id: "thin", tip: "alan", renk: 3, noktalar: [[0, 0], [1.5, 0.866], [1.531, 0.989], [1.539, 1.107], [1.524, 1.217]], gizli: true }, { id: "w1", tip: "alan", renk: 2, noktalar: [[0, 0], [0, 0], [0.346, 0.03], [0.674, 0.119], [0.966, 0.259], [1.208, 0.44], [1.389, 0.647], [1.5, 0.866]], gizli: true }, { id: "w2", tip: "alan", renk: 2, noktalar: [[0, 0], [0, 0], [0.513, 0.068], [0.966, 0.259], [1.307, 0.541], [1.5, 0.866], [1.533, 1.176], [1.414, 1.414], [1.176, 1.533], [0.866, 1.5]], gizli: true }, { id: "w3", tip: "alan", renk: 2, noktalar: [[0, 0], [0, 0], [0.513, 0.068], [0.966, 0.259], [1.307, 0.541], [1.5, 0.866], [1.533, 1.176], [1.414, 1.414], [1.176, 1.533], [0.866, 1.5], [0.541, 1.307], [0.259, 0.966], [0.068, 0.513], [0, 0]], gizli: true }, { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.26, 0.017], [0.513, 0.068], [0.751, 0.149], [0.966, 0.259], [1.153, 0.391], [1.307, 0.541], [1.423, 0.702], [1.5, 0.866], [1.536, 1.027], [1.533, 1.176], [1.491, 1.307], [1.414, 1.414], [1.307, 1.491], [1.176, 1.533], [1.027, 1.536], [0.866, 1.5], [0.702, 1.423], [0.541, 1.307], [0.391, 1.153], [0.259, 0.966], [0.149, 0.751], [0.068, 0.513], [0.017, 0.26], [0, 0]] }, { id: "ray", tip: "cizgi", renk: 3, from: [0, 0], to: [1.5, 0.866], etiket: "r = 2sin2θ", gizli: true }], durumlar: [{ metin: "Gül eğrisinin birinci bölgedeki yaprağı: r = 2sin2θ, 0 ≤ θ ≤ π/2. Alanını arıyoruz." }, { metin: "Kutuptan çıkan ince bir ışın ve dθ açılı dilim. Dilim neredeyse bir daire sektörü: alanı ≈ ½r²dθ.", goster: ["thin", "ray"] }, { metin: "θ = 0'dan π/6'ya kadar dilimleri topla.", gizle: ["thin", "ray"], goster: ["w1"] }, { metin: "π/3'e kadar: alan büyüyor.", gizle: ["w1"], goster: ["w2"] }, { metin: "Tüm yaprak: A = ½∫₀^(π/2) (2sin2θ)² dθ = π/2 ≈ 1,57.", gizle: ["w2"], goster: ["w3"] }] }
      ]
    },
    {
      baslik: "Formülü kullanmak",
      kisa: "A = ½∫r²dθ; sin² ve cos² için yarım açı kimliğini kullan.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🍰", terim: "Sector", tr: "daire dilimi (sektör)", tanim: "Kutuptan çıkan iki ışın ve bir yayla sınırlı bölge. Alanı ½r²θ (θ radyan).", ornek: "r = 4, θ = π/3 için ½·16·π/3 = 8π/3." }, { ikon: "🧭", terim: "Polar region", tr: "kutupsal bölge", tanim: "r = f(θ) eğrisi ile α ve β açılarındaki iki ışın arasında kalan bölge.", ornek: "r = 2sin2θ yaprağı: 0 ≤ θ ≤ π/2." }] },
        { tip: "ornek", baslik: "r = 1 + cosθ", durum: "Kardioidin içinde kalan alan nedir?", adimlar: ["Eğri 0 ≤ θ ≤ 2π'de bir kez çizilir. A = ½∫₀^(2π) (1 + cosθ)² dθ.", "(1 + cosθ)² = 1 + 2cosθ + cos²θ ve cos²θ = (1 + cos2θ)/2: toplam 3/2 + 2cosθ + (cos2θ)/2.", "İntegral: (3/2)θ + 2sinθ + (sin2θ)/4. 0 ile 2π arasında sinüsler sıfır.", "A = ½ · (3/2)(2π) = 3π/2."], sonuc: "A = 3π/2" },
        { tip: "tuzak", metin: "Eğri, 0 ile 2π arasında bir kez değil iki kez çizilebilir. Sınırı yanlış seçersen alan iki kat çıkar.", yanlis: "r = 2cosθ çemberinin alanı = ½∫₀^(2π) (2cosθ)² dθ = 2π.", dogru: "r = 2cosθ çemberi −π/2 ≤ θ ≤ π/2 aralığında bir kez çizilir: A = ½∫ (4cos²θ) dθ = π. Yarıçap 1 olduğundan πr² = π ile uyumlu." }
      ]
    },
    {
      baslik: "Sınırları nasıl seçeriz?",
      kisa: "Eğriyi bir kez çizen aralığı seç; bir yapraksa yaprağın başlangıç ve bitiş açıları.",
      bloklar: [
        { tip: "adimlar", baslik: "Sınır avı", adimlar: [{ baslik: "Çiz", metin: "Eğriyi ve bölgeyi kabaca çiz; kutuptan çıkan ışının bölgeye girdiği ve çıktığı yerlere bak." }, { baslik: "Işını döndür", metin: "Bölgeyi tarayan ışının ilk ve son açısı α ve β'dır." }, { baslik: "Bir kez çiz", metin: "Eğriyi tam bir kez çizen aralığı seç; simetri varsa yarıyı alıp ikiyle çarp." }, { baslik: "r'nin işaretine bak", metin: "r < 0 olan aralıklar başka bir yaprağı ya da iç halkayı çizer." }] },
        { tip: "tablo", baslik: "Sık eğrilerin bir kez çizildiği aralık", head: ["Eğri", "Bir kez çizilir", "Alan"], rows: [["r = a", "[0, 2π]", "πa²"], ["r = a cosθ", "[−π/2, π/2]", "πa²/4"], ["r = a sinθ", "[0, π]", "πa²/4"], ["r = a + a cosθ", "[0, 2π]", "3πa²/2"], ["r = a sin nθ, bir yaprak", "[0, π/n]", "πa²/(4n)"]], vurgu: 4, not: "Yaprak satırı: n = 2, a = 2 için π·4/8 = π/2, birinci örnekle uyumlu." }
      ]
    },
    {
      baslik: "İki eğri arasında: dış eğri eksi iç eğri",
      kisa: "A = ½∫(R² − r²)dθ; R dıştaki, r içteki eğri.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "A", alt: "iki eğri arası" }, "=", { t: "½ ∫ₐᵇ", alt: "kesişim açıları" }, { t: "[R(θ)² − r(θ)²] dθ", alt: "dış² − iç²" }], aciklama: "Her dilimin kutuptan başlayan kısmını dış eğriye kadar al, içeriden başlayan gereksiz kısmı çıkar. (R − r)² değil, R² − r²." },
        { tip: "ikili", sol: { ikon: "⭕", baslik: "Dış eğri R", maddeler: ["Işının daha geç çıktığı", "Aynı θ'da daha büyük |r|"] }, sag: { ikon: "🔘", baslik: "İç eğri r", maddeler: ["Işının önce karşılaştığı", "Aynı θ'da daha küçük |r|"] }, oyun: [{ metin: "r = 3cosθ ve r = 1 + cosθ için θ = 0'da değeri 3 olan eğri.", cevap: "sol", neden: "3 > 2: çember dışta." }, { metin: "Aynı iki eğrinin θ = 0'da değeri 2 olan eğri.", cevap: "sag", neden: "Kardioid içte kalır." }, { metin: "Çemberin içinde, kardioidin dışında kalan bölgenin dış sınırı.", cevap: "sol", neden: "Bölge çemberin içinde, yani dış sınır çember." }, { metin: "Aynı bölgenin içteki, çıkarılan sınırı.", cevap: "sag", neden: "Kardioidin içinde kalan kısım çıkarılır." }] },
        { tip: "ornek", baslik: "r = 3cosθ ve r = 1 + cosθ", durum: "Çemberin içinde, kardioidin dışında kalan bölgenin alanı nedir?", adimlar: ["Kesişim: 3cosθ = 1 + cosθ ⇒ cosθ = 1/2 ⇒ θ = ±π/3. Bu aralıkta çember dışta.", "A = ½∫[−π/3, π/3] (9cos²θ − (1 + cosθ)²) dθ. Simetriden: ∫₀^(π/3) (8cos²θ − 1 − 2cosθ) dθ.", "8cos²θ = 4 + 4cos2θ olduğundan integrand 3 + 4cos2θ − 2cosθ.", "İntegral: 3θ + 2sin2θ − 2sinθ. π/3'te π + √3 − √3 = π; 0'da 0."], sonuc: "A = π" },
        { tip: "grafik", baslik: "Çemberin içi, kardioidin dışı", xlabel: "x", ylabel: "y", xmax: 5.8, ymax: 4, xticks: [{ v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }], yticks: [{ v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [1, 0], to: [1, 4] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 2], to: [5.8, 2] }, { id: "bol", tip: "alan", renk: 2, noktalar: [[1.75, 0.701], [2.166, 0.538], [2.612, 0.504], [3.048, 0.604], [3.435, 0.827], [3.739, 1.155], [3.933, 1.558], [4, 2], [3.933, 2.442], [3.739, 2.845], [3.435, 3.173], [3.048, 3.396], [2.612, 3.496], [2.166, 3.462], [1.75, 3.299], [1.75, 3.299], [2.012, 3.269], [2.27, 3.179], [2.509, 3.029], [2.713, 2.825], [2.869, 2.576], [2.967, 2.296], [3, 2], [2.967, 1.704], [2.869, 1.424], [2.713, 1.175], [2.509, 0.971], [2.27, 0.821], [2.012, 0.731], [1.75, 0.701]], gizli: true }, { id: "c1", tip: "egri", renk: 0, noktalar: [[1, 2], [1.023, 1.74], [1.09, 1.487], [1.201, 1.25], [1.351, 1.036], [1.536, 0.851], [1.75, 0.701], [1.987, 0.59], [2.24, 0.523], [2.5, 0.5], [2.76, 0.523], [3.013, 0.59], [3.25, 0.701], [3.464, 0.851], [3.649, 1.036], [3.799, 1.25], [3.91, 1.487], [3.977, 1.74], [4, 2], [3.977, 2.26], [3.91, 2.513], [3.799, 2.75], [3.649, 2.964], [3.464, 3.149], [3.25, 3.299], [3.013, 3.41], [2.76, 3.477], [2.5, 3.5], [2.24, 3.477], [1.987, 3.41], [1.75, 3.299], [1.536, 3.149], [1.351, 2.964], [1.201, 2.75], [1.09, 2.513], [1.023, 2.26], [1, 2]] }, { id: "c2", tip: "egri", renk: 1, noktalar: [[3, 2], [2.955, 2.345], [2.823, 2.663], [2.616, 2.933], [2.353, 3.135], [2.056, 3.258], [1.75, 3.299], [1.459, 3.261], [1.204, 3.156], [1, 3], [0.857, 2.814], [0.775, 2.618], [0.75, 2.433], [0.77, 2.274], [0.821, 2.15], [0.884, 2.067], [0.943, 2.021], [0.985, 2.003], [1, 2], [0.985, 1.997], [0.943, 1.979], [0.884, 1.933], [0.821, 1.85], [0.77, 1.726], [0.75, 1.567], [0.775, 1.382], [0.857, 1.186], [1, 1], [1.204, 0.844], [1.459, 0.739], [1.75, 0.701], [2.056, 0.742], [2.353, 0.865], [2.616, 1.067], [2.823, 1.337], [2.955, 1.655], [3, 2]], gizli: true }, { id: "i1", tip: "nokta", renk: 3, x: 1.75, y: 3.299, etiket: "θ = π/3", gizli: true }, { id: "i2", tip: "nokta", renk: 3, x: 1.75, y: 0.701, etiket: "θ = −π/3", gizli: true }, { id: "ray1", tip: "cizgi", renk: 3, kesik: true, from: [1, 2], to: [1.75, 3.299], gizli: true }, { id: "ray2", tip: "cizgi", renk: 3, kesik: true, from: [1, 2], to: [1.75, 0.701], gizli: true }, { id: "s0", tip: "cizgi", renk: 1, from: [1, 2], to: [3, 2], gizli: true }, { id: "s1", tip: "cizgi", renk: 2, from: [3, 2], to: [4, 2], etiket: "r = 2 → R = 3", gizli: true }], durumlar: [{ metin: "r = 3cosθ: merkezi (3/2, 0), yarıçapı 3/2 olan çember. Kesikli çizgiler eksenler; çember kutuptan (başlangıçtan) geçiyor." }, { metin: "r = 1 + cosθ: kardioid. İkisi de kutuptan geçiyor: çember θ = π/2'de, kardioid θ = π'de.", goster: ["c2"] }, { metin: "Kesişim: 3cosθ = 1 + cosθ ⇒ cosθ = 1/2 ⇒ θ = ±π/3. Noktalar (3/4, ±3√3/4).", goster: ["i1", "i2", "ray1", "ray2"] }, { metin: "Çemberin içinde, kardioidin dışında kalan bölge: −π/3 ≤ θ ≤ π/3.", goster: ["bol"] }, { metin: "θ = 0 ışınında önce kardioid (r = 2), sonra çember (R = 3) geliyor. Dilim R ile r arasında.", goster: ["s0", "s1"] }] }
      ]
    },
    {
      baslik: "Dikkat: kesişim ve kutup",
      kisa: "İki eğri kutupta farklı θ'larda buluşabilir; r₁ = r₂ bunu yakalamaz.",
      bloklar: [
        { tip: "ornek", baslik: "r = 1 + cosθ ve r = 1", durum: "Kardioidin içinde, r = 1 çemberinin dışında kalan alan nedir?", adimlar: ["Kesişim: 1 + cosθ = 1 ⇒ cosθ = 0 ⇒ θ = ±π/2. Bu aralıkta kardioid dışta.", "A = ½∫[−π/2, π/2] ((1 + cosθ)² − 1) dθ = ∫₀^(π/2) (2cosθ + cos²θ) dθ.", "İntegral: 2sinθ + θ/2 + (sin2θ)/4. π/2'de 2 + π/4; 0'da 0."], sonuc: "A = 2 + π/4" },
        { tip: "tablo", baslik: "Kutup kesişim olabilir", head: ["Eğri", "r = 0 olduğu θ", "Kutuptan geçer mi?"], rows: [["r = 3cosθ", "θ = π/2", "evet"], ["r = 1 + cosθ", "θ = π", "evet"], ["r = 1", "hiçbir θ", "hayır"]], vurgu: 1, not: "İlk iki eğri kutupta buluşur ama farklı θ'larda. r₁ = r₂ denklemi bunu göstermez; her eğri için r = 0'ı ayrıca kontrol et." },
        { tip: "tuzak", metin: "Kesişim noktaları grafikle birlikte bulunur; yalnız denklemle eksik kalabilir.", yanlis: "Kesişimleri bulmak için r₁ = r₂ denklemini çözmek yeter.", dogru: "Önce grafiği çiz. Kutup için her eğrinin r = 0 olduğu θ'ları ayrıca bak; aynı θ'da buluşma şart değildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Sektör alanı ½r²θ; ince dilim ½r²dθ. Kutupsal bölge: A = ½∫ₐᵇ [r(θ)]² dθ.", "½ ve karenin ikisi de unutulmasın: ½∫r²dθ. r'nin kendisini değil karesini integral al.", "Sınırlar eğrinin bir kez çizildiği aralıktır; r = 2cosθ için [−π/2, π/2], kardioid için [0, 2π], gül yaprağı için [0, π/n].", "Kesişen iki eğri arasında: A = ½∫ₐᵇ [R² − r²] dθ, R dış, r iç eğri.", "Kesişim açıları r₁ = r₂ ile bulunur; ama kutup ayrıca kontrol edilir ve grafik çizilir.", "sin²θ = (1 − cos2θ)/2, cos²θ = (1 + cos2θ)/2 kimlikleri integrali kolaylaştırır.", "Hesap makinesi izinli sorularda integrali kurmak asıl iştir; kurulumu açık yaz."] }
      ]
    }
  ],
  sorular: [
    {
      q: "r = 4 eğrisi ile π/6 ≤ θ ≤ π/2 ışınları arasında kalan sektörün alanı kaçtır?",
      opts: [
        "8π/3",
        "16π/3",
        "4π/3",
        "2π/3"
      ],
      a: 0,
      why: "A = ½∫ r² dθ = ½ · 16 · (π/2 − π/6) = 8 · π/3 = 8π/3. 16π/3 ½ çarpanını unutur; 2π/3 r² yerine r integral alır; 4π/3 açı farkını yanlış alır."
    },
    {
      q: "Kardioid r = 1 + cosθ'nın içinde ve r = 1 çemberinin dışında kalan bölgenin alanı hangi integralle verilir?",
      fig: {
        type: "table",
        head: ["θ", "r = 1 + cosθ", "r = 1"],
        rows: [["0", "2", "1"], ["π/2", "1", "1"], ["π", "0", "1"]],
        caption: "İki eğrinin r değerleri"
      },
      opts: [
        "½∫[0, 2π] ((1 + cosθ)² − 1²) dθ",
        "½∫[−π/2, π/2] (1² − (1 + cosθ)²) dθ",
        "½∫[−π/2, π/2] ((1 + cosθ)² − 1²) dθ",
        "½∫[−π/2, π/2] (1 + cosθ − 1)² dθ"
      ],
      a: 2,
      why: "Eğriler cosθ = 0 yani θ = ±π/2'de kesişir; bu aralıkta kardioid dışta (θ = 0'da 2 > 1). Doğru biçim ½∫ (R² − r²) dθ. İlk şık sınırı yanlış seçer (0…2π'de kardioid kimi yerde içte kalır); ikinci şık R ile r'yi ters yazar; dördüncüsü (R − r)² alır."
    },
    {
      q: "r = 2cosθ çemberinin içinde kalan alan kaçtır?",
      opts: [
        "π/2",
        "2π",
        "4π",
        "π"
      ],
      a: 3,
      why: "Çember −π/2 ≤ θ ≤ π/2'de bir kez çizilir: ½∫ 4cos²θ dθ = π. Yarıçap 1 olduğundan πr² = π ile uyumlu. 2π, 0…2π alınca çemberi iki kez saymaktan gelen yanlış cevaptır."
    },
    {
      q: "r = 2sinθ çemberinin içinde, r = 1 çemberinin dışında kalan bölgenin alanı için integralin sınırları hangisidir?",
      fig: {
        type: "table",
        head: ["θ", "r = 2sinθ", "r = 1"],
        rows: [["π/6", "1", "1"], ["π/2", "2", "1"], ["5π/6", "1", "1"]],
        caption: "İki çemberin r değerleri"
      },
      opts: [
        "0 ile π",
        "π/6 ile π/2",
        "π/6 ile 5π/6",
        "π/3 ile 2π/3"
      ],
      a: 2,
      why: "2sinθ = 1 ⇒ sinθ = 1/2 ⇒ θ = π/6 ve 5π/6. Bu iki açı arasında 2sinθ > 1, yani büyük çember dışta. π/6 ile π/2 bölgenin yalnız yarısını kapsar; tüm bölge için π/6'dan 5π/6'ya gidilir."
    },
    {
      q: "r = θ sarmalının 0 ≤ θ ≤ π için kutuptan ölçülen alanı kaçtır?",
      opts: [
        "π²/4",
        "π³/6",
        "π³/3",
        "π²/2"
      ],
      a: 1,
      why: "A = ½∫₀^π θ² dθ = ½ · π³/3 = π³/6. π³/3 ½'yi unutur; π²/4 ve π²/2 ise r'yi (θ'yı) integral alıp karesini almayı unutmaktır."
    }
  ]
};
