/* Kitora not defteri · cb902 · 9.3 Parametrik Eğrinin Yay Uzunluğu
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb902",
  amac: "Bu konu parametrik bir eğrinin *arc length* yani yay uzunluğunu anlatıyor: eğriyi çok küçük doğru parçalarına bölüp Pisagor ile topluyoruz. L = ∫ √((dx/dt)² + (dy/dt)²) dt formülünü kurmayı ve hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Küçük adımlar, Pisagor, toplam",
      kisa: "Eğriyi kısa doğru parçalarına böl, uzunlukları topla; parça arttıkça gerçeğe yaklaşır.",
      bloklar: [
        { tip: "hikaye", ikon: "🌿", baslik: "Eğri patika", metin: "Okul bahçesindeki kıvrımlı patikanın uzunluğunu ölçmek istiyorsun ama mezura eğriye uymuyor. Çözüm: patikayı kısa, düz çubuklarla ==parça parça== ölçmek. Her çubuk bir dik üçgenin hipotenüsü olur." },
        { tip: "grafik", baslik: "Eğriyi doğru parçalarıyla ölçmek", xlabel: "x", ylabel: "y", xmax: 5.2, ymax: 3.6, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], ogeler: [{ id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.008, 0], [0.03, 0.003], [0.068, 0.012], [0.12, 0.028], [0.187, 0.054], [0.27, 0.094], [0.368, 0.149], [0.48, 0.222], [0.607, 0.316], [0.75, 0.433], [0.907, 0.576], [1.08, 0.748], [1.267, 0.951], [1.47, 1.188], [1.687, 1.461], [1.92, 1.774], [2.168, 2.127], [2.43, 2.525], [2.707, 2.97], [3, 3.464]] }, { id: "s1_0", tip: "cizgi", renk: 2, from: [0, 0], to: [3, 3.464], gizli: true }, { id: "s2_0", tip: "cizgi", renk: 2, from: [0, 0], to: [0.75, 0.433], gizli: true }, { id: "s2_1", tip: "cizgi", renk: 2, from: [0.75, 0.433], to: [3, 3.464], gizli: true }, { id: "s4_0", tip: "cizgi", renk: 2, from: [0, 0], to: [0.187, 0.054], gizli: true }, { id: "s4_1", tip: "cizgi", renk: 2, from: [0.187, 0.054], to: [0.75, 0.433], gizli: true }, { id: "s4_2", tip: "cizgi", renk: 2, from: [0.75, 0.433], to: [1.688, 1.461], gizli: true }, { id: "s4_3", tip: "cizgi", renk: 2, from: [1.688, 1.461], to: [3, 3.464], gizli: true }, { id: "s8_0", tip: "cizgi", renk: 2, from: [0, 0], to: [0.047, 0.007], gizli: true }, { id: "s8_1", tip: "cizgi", renk: 2, from: [0.047, 0.007], to: [0.187, 0.054], gizli: true }, { id: "s8_2", tip: "cizgi", renk: 2, from: [0.187, 0.054], to: [0.422, 0.183], gizli: true }, { id: "s8_3", tip: "cizgi", renk: 2, from: [0.422, 0.183], to: [0.75, 0.433], gizli: true }, { id: "s8_4", tip: "cizgi", renk: 2, from: [0.75, 0.433], to: [1.172, 0.846], gizli: true }, { id: "s8_5", tip: "cizgi", renk: 2, from: [1.172, 0.846], to: [1.688, 1.461], gizli: true }, { id: "s8_6", tip: "cizgi", renk: 2, from: [1.688, 1.461], to: [2.297, 2.321], gizli: true }, { id: "s8_7", tip: "cizgi", renk: 2, from: [2.297, 2.321], to: [3, 3.464], gizli: true }], durumlar: [{ metin: "Eğri: x = t², y = (2/3)t³, 0 ≤ t ≤ √3. Mezura eğriye uymaz; düz çubuklarla ölçeceğiz." }, { metin: "Tek çubuk: uçları birleştiren doğru, uzunluk ≈ 4,58. Gerçeğinden kısa.", goster: ["s1_0"] }, { metin: "İki çubuk: ≈ 4,64. Eğriye biraz daha yaklaştı.", gizle: ["s1_0"], goster: ["s2_0", "s2_1"] }, { metin: "Dört çubuk: ≈ 4,66.", gizle: ["s2_0", "s2_1"], goster: ["s4_0", "s4_1", "s4_2", "s4_3"] }, { metin: "Sekiz çubuk: ≈ 4,665. Çubuk sayısı arttıkça toplam gerçek uzunluğa, 14/3 ≈ 4,667'ye yaklaşır.", gizle: ["s4_0", "s4_1", "s4_2", "s4_3"], goster: ["s8_0", "s8_1", "s8_2", "s8_3", "s8_4", "s8_5", "s8_6", "s8_7"] }] },
        { tip: "formul", parcalar: [{ t: "ds", alt: "küçük yay uzunluğu" }, "=", { t: "√(dx² + dy²)", alt: "Pisagor" }, "=", { t: "√((dx/dt)² + (dy/dt)²) dt", alt: "t cinsinden" }], aciklama: "Her küçük çubuk için Δs ≈ √(Δx² + Δy²). Çubuklar sonsuz inceleşince toplam bir integrale dönüşür." }
      ]
    },
    {
      baslik: "Yay uzunluğu formülü",
      kisa: "L = ∫ √((dx/dt)² + (dy/dt)²) dt; sınırlar t değerleridir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "L", alt: "yay uzunluğu" }, "=", { t: "∫ₐᵇ", alt: "t = a'dan b'ye" }, { t: "√((dx/dt)² + (dy/dt)²) dt", alt: "sürat" }], aciklama: "Kökün içi, parçacığın hız vektörünün büyüklüğüdür: yani ==sürat==. Yay uzunluğu, sürat integralidir." },
        { tip: "kavramlar", kartlar: [{ ikon: "📏", terim: "Arc length", tr: "yay uzunluğu", tanim: "Bir eğri boyunca ölçülen gerçek uzunluk. Parametrik eğri için t = a'dan t = b'ye integral.", ornek: "Yarım çemberin yay uzunluğu π·r." }, { ikon: "🏎️", terim: "Speed", tr: "sürat", tanim: "√((dx/dt)² + (dy/dt)²). Hız vektörünün büyüklüğüdür, her zaman sıfır ya da pozitif.", ornek: "dx/dt = 3, dy/dt = 4 ise sürat 5." }] },
        { tip: "ikili", sol: { ikon: "🌿", baslik: "*Arc length* (yay uzunluğu)", maddeler: ["Eğrinin kendisi boyunca ölçülür", "Kökü olan integral"] }, sag: { ikon: "🕊️", baslik: "Kuş uçuşu uzaklık", maddeler: ["Uç noktaları birleştiren doğru", "Uzaklık formülü"] }, oyun: [{ metin: "Yarım çemberin (yarıçap 1) çevresi: π.", cevap: "sol", neden: "Eğri boyunca ölçüm." }, { metin: "Aynı yarım çemberin çapı: 2.", cevap: "sag", neden: "Uç noktalar arasında düz çizgi." }, { metin: "Her zaman diğerinden büyük ya da ona eşit olan.", cevap: "sol", neden: "Eğri yol, düz yoldan kısa olamaz." }, { metin: "Uç noktalar (0, 0) ve (6, 8) ise 10.", cevap: "sag", neden: "√(36 + 64) = 10, düz mesafe." }] }
      ]
    },
    {
      baslik: "Örnek: x = t², y = (2/3)t³",
      kisa: "Kökün içi tam kareye dönüşür; u-yerine koymayla sonuç 14/3.",
      bloklar: [
        { tip: "ornek", baslik: "x = t², y = (2/3)t³ , 0 ≤ t ≤ √3", durum: "Eğrinin yay uzunluğunu bul.", adimlar: ["dx/dt = 2t ve dy/dt = 2t².", "Kökün içi: 4t² + 4t⁴ = 4t²(1 + t²). Kök: 2t√(1 + t²), çünkü t ≥ 0.", "L = ∫₀^√3 2t√(1 + t²) dt. u = 1 + t² alırsan du = 2t dt.", "t = 0 → u = 1; t = √3 → u = 4. L = ∫₁⁴ √u du = (2/3)u^(3/2) |₁⁴ = (2/3)(8 − 1)."], sonuc: "L = 14/3 ≈ 4,667" },
        { tip: "tablo", baslik: "Doğru parçalarıyla yaklaşım (aynı eğri)", head: ["Parça sayısı", "Toplam uzunluk"], rows: [["1", "4,583"], ["2", "4,641"], ["4", "4,659"], ["8", "4,665"], ["integral", "14/3 ≈ 4,667"]], vurgu: 4, not: "Parça arttıkça toplam, integralin değerine oturur." },
        { tip: "tuzak", metin: "Formülde iki yaygın hata: türevleri karesiz toplamak ve kökü unutmak.", yanlis: "L = ∫ (dx/dt + dy/dt) dt, ya da L = ∫ √(x² + y²) dt.", dogru: "L = ∫ √((dx/dt)² + (dy/dt)²) dt. Türevler karesiyle toplanır, kök en dışta durur." }
      ]
    },
    {
      baslik: "Kök sadeleşirse: çember ve sikloid",
      kisa: "sin²+cos² = 1 ya da yarım açı kimliği kökü açar.",
      bloklar: [
        { tip: "ornek", baslik: "x = 3cos t, y = 3sin t , 0 ≤ t ≤ π/2", durum: "Yay uzunluğunu bul.", adimlar: ["dx/dt = −3sin t ve dy/dt = 3cos t.", "9sin²t + 9cos²t = 9. Kök 3.", "L = ∫₀^(π/2) 3 dt = 3π/2.", "Kontrol: yarıçap 3 olan çemberin çeyreği = (2π·3)/4 = 3π/2."], sonuc: "L = 3π/2" },
        { tip: "ornek", baslik: "x = t − sin t, y = 1 − cos t , 0 ≤ t ≤ 2π", durum: "Sikloidin bir kemerinin uzunluğu nedir?", adimlar: ["dx/dt = 1 − cos t ve dy/dt = sin t.", "(1 − cos t)² + sin²t = 2 − 2cos t = 4sin²(t/2).", "Kök: 2sin(t/2); 0 ≤ t ≤ 2π için sin(t/2) ≥ 0.", "L = ∫₀^(2π) 2sin(t/2) dt = [−4cos(t/2)]₀^(2π) = 4 + 4."], sonuc: "L = 8" },
        { tip: "grafik", baslik: "Sikloidin bir kemeri: x = t − sin t, y = 1 − cos t", xlabel: "x", ylabel: "y", xmax: 7.25, ymax: 5, xticks: [{ v: 3.142, label: "π" }, { v: 6.283, label: "2π" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], ogeler: [{ id: "a1", tip: "egri", renk: 0, noktalar: [[0, 0], [0.001, 0.012], [0.005, 0.049], [0.017, 0.109], [0.041, 0.191], [0.078, 0.293], [0.133, 0.412], [0.209, 0.546], [0.306, 0.691], [0.426, 0.844], [0.571, 1]], gizli: true }, { id: "a2", tip: "egri", renk: 0, noktalar: [[0.571, 1], [0.74, 1.156], [0.934, 1.309], [1.151, 1.454], [1.39, 1.588], [1.649, 1.707], [1.925, 1.809], [2.216, 1.891], [2.518, 1.951], [2.828, 1.988], [3.142, 2]], gizli: true }, { id: "a3", tip: "egri", renk: 0, noktalar: [[3.142, 2], [3.455, 1.988], [3.765, 1.951], [4.067, 1.891], [4.358, 1.809], [4.634, 1.707], [4.893, 1.588], [5.132, 1.454], [5.349, 1.309], [5.543, 1.156], [5.712, 1]], gizli: true }, { id: "a4", tip: "egri", renk: 0, noktalar: [[5.712, 1], [5.857, 0.844], [5.978, 0.691], [6.075, 0.546], [6.15, 0.412], [6.205, 0.293], [6.243, 0.191], [6.266, 0.109], [6.278, 0.049], [6.283, 0.012], [6.283, 0]], gizli: true }, { id: "ch", tip: "cizgi", renk: 3, kesik: true, from: [0, 0], to: [6.283, 0], etiket: "düz mesafe 2π", gizli: true }, { id: "p", tip: "nokta", renk: 2, x: 0, y: 0, etiket: "t = 0" }], durumlar: [{ metin: "Bir tekerleğin kenarındaki noktanın izi. Hız bileşenleri: dx/dt = 1 − cos t, dy/dt = sin t." }, { metin: "t = π/2: o ana kadar yol ≈ 1,17.", goster: ["a1"], set: { p: { x: 0.571, y: 1, etiket: "t = π/2" } } }, { metin: "t = π: yol tam 4 (L(s) = 4 − 4cos(s/2)).", goster: ["a2"], set: { p: { x: 3.142, y: 2, etiket: "t = π" } } }, { metin: "t = 3π/2: yol ≈ 6,83.", goster: ["a3"], set: { p: { x: 5.712, y: 1, etiket: "t = 3π/2" } } }, { metin: "t = 2π: toplam yol 8.", goster: ["a4"], set: { p: { x: 6.283, y: 0, etiket: "t = 2π" } } }, { metin: "Başlangıç ve bitiş arası düz mesafe 2π ≈ 6,28. Yay uzunluğu (8) her zaman bundan büyük ya da eşittir.", goster: ["ch"] }] }
      ]
    },
    {
      baslik: "Aralık ve tekrar: yol uzunluğu",
      kisa: "Eğri tekrar dolaşılırsa yol uzunluğu eğrinin uzunluğunun katı olur.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "L", alt: "y = f(x) eğrisi" }, "=", { t: "∫ₐᵇ √(1 + (dy/dx)²) dx", alt: "x = t özel hali" }], aciklama: "x = t alırsan dx/dt = 1 ve dy/dt = dy/dx olur. Parametrik formül, bildiğin y = f(x) formülünü kapsar." },
        { tip: "tablo", baslik: "Aynı çember, farklı yol", head: ["Yazılış", "t aralığı", "Tur", "Yol uzunluğu"], rows: [["x = cos t, y = sin t", "[0, 2π]", "1", "2π"], ["x = cos t, y = sin t", "[0, 4π]", "2", "4π"], ["x = cos 2t, y = sin 2t", "[0, 2π]", "2", "4π"], ["x = cos t, y = sin t", "[0, π]", "yarım", "π"]], vurgu: 2, not: "Üçüncü satırda sürat 2'dir: aynı t aralığında iki kat yol." },
        { tip: "tuzak", metin: "Parametrik formül hep \"t kadar zaman, sürat kadar hız\" mantığıyla çalışır: aralığın ve hızın ikisi de önemli.", yanlis: "Hepsi birim çember, yol uzunluğu hep 2π.", dogru: "L = ∫ sürat dt. t aralığı veya sürat değişirse çember birden çok kez dolaşılabilir; yol uzunluğu eğrinin çevresinin katı olur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Yay uzunluğu fikri: küçük doğru parçaları + Pisagor, sonra topla.", "L = ∫ₐᵇ √((dx/dt)² + (dy/dt)²) dt. Türevler karesiyle toplanır, kök dışta, sınırlar t'dir.", "Kökün içi, hız vektörünün büyüklüğü olan süratin karesidir: L = ∫ sürat dt.", "y = f(x) için formül: L = ∫ √(1 + (dy/dx)²) dx (x = t özel hali).", "Kök sadeleşiyorsa sin² + cos² = 1 ya da 1 − cos t = 2sin²(t/2) kimliğini dene; olmuyorsa kurulumu yaz, hesap makinesine bırak.", "Yay uzunluğu uç noktalar arası düz mesafeden büyük ya da eşittir.", "Eğri t aralığında birden fazla dolaşılıyorsa yol uzunluğu eğrinin kendi uzunluğunun katıdır."] }
      ]
    }
  ],
  sorular: [
    {
      q: "x = 2t, y = t² eğrisinin 0 ≤ t ≤ 3 için yay uzunluğunu veren integral hangisidir?",
      opts: [
        "∫₀³ (2 + 2t) dt",
        "∫₀³ √(4 + 4t²) dt",
        "∫₀³ √(4 + 2t) dt",
        "∫₀⁶ √(4 + 4t²) dt"
      ],
      a: 1,
      why: "dx/dt = 2, dy/dt = 2t. Kökün içi 4 + 4t², sınırlar t cinsinden 0'dan 3'e. Kök olmayan şık sürat yerine hızların toplamını alır; 4 + 2t, dy/dt'nin karesini unutur; ∫₀⁶ ise x'in son değeri 6'yı t sınırı yapar."
    },
    {
      q: "x = 3t, y = 4t, 0 ≤ t ≤ 2 doğru parçasının uzunluğu kaçtır?",
      opts: [
        "5",
        "14",
        "10",
        "25"
      ],
      a: 2,
      why: "Sürat √(9 + 16) = 5 sabit; L = 5 · 2 = 10. Kontrol: uçlar (0, 0) ve (6, 8), uzaklık 10. 5 şıkkı yalnız t = 1'e kadar olan yoldur; 14, dx/dt + dy/dt = 7'yi 2 ile çarpar."
    },
    {
      q: "Bir drone'un yolu x = 3cos t, y = 3sin t, 0 ≤ t ≤ 4π ile veriliyor (metre). Drone toplam kaç metre yol alır?",
      opts: [
        "12π",
        "6π",
        "3π",
        "24π"
      ],
      a: 0,
      why: "Sürat √(9sin²t + 9cos²t) = 3 sabit; 4π süre boyunca 3 · 4π = 12π. 6π, yarıçap 3 olan çemberin bir turudur; ama t aralığı 4π olduğu için drone çemberi iki kez dolaşır."
    },
    {
      q: "x = t³/3, y = t²/2 eğrisinin 0 ≤ t ≤ √3 için yay uzunluğu kaçtır?",
      opts: [
        "8/3",
        "2",
        "14/3",
        "7/3"
      ],
      a: 3,
      why: "dx/dt = t², dy/dt = t; kök √(t⁴ + t²) = t√(t² + 1). u = t² + 1 alınırsa L = ½∫₁⁴ √u du = (1/3)(8 − 1) = 7/3. 8/3 alt sınırdaki −1'i unutmak; 14/3 ise ½ çarpanını atlamaktır."
    },
    {
      q: "Bir sürücüsüz aracın hız bileşenleri tabloda veriliyor (t saniye). 0 ≤ t ≤ 6 için yol uzunluğu yamuk kuralı (3 aralık, Δt = 2) ile kaç birimdir?",
      fig: {
        type: "table",
        head: ["t", "dx/dt", "dy/dt"],
        rows: [["0", "3", "4"], ["2", "6", "8"], ["4", "5", "12"], ["6", "8", "15"]],
        caption: "Hız bileşenleri"
      },
      opts: [
        "56",
        "68",
        "80",
        "34"
      ],
      a: 1,
      why: "Süratler: 5, 10, 13, 17. Yamuk: (2/2)(5 + 2·10 + 2·13 + 17) = 68. 56 sol toplam, 80 sağ toplamdır; 34, Δt çarpanını unutur."
    }
  ]
};
