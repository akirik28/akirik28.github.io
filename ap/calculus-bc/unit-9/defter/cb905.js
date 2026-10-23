/* Kitpath not defteri · cb905 · 9.7 Kutupsal Koordinatlar ve Türev
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb905",
  amac: "Bu konu *polar coordinates* yani kutupsal koordinatları anlatıyor: bir noktayı merkezden uzaklık r ve açı θ ile yazar, kutupsal eğrileri çizer ve eğimini bulursun. Dönüşüm formüllerini, r′ işaretinin anlamını ve dy/dx = (dy/dθ)/(dx/dθ) kuralını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kutupsal koordinatlar: (r, θ)",
      kisa: "Bir nokta, merkezden uzaklığı r ve x ekseninden açısı θ ile verilir.",
      bloklar: [
        { tip: "hikaye", ikon: "🧭", baslik: "Pusula ve mesafe", metin: "Okul gezisinde öğretmenin \"toplanma yerine 200 metre kuzeydoğuya yürüyün\" diyor. Bu tarif iki sayı içeriyor: ==ne kadar uzak== ve ==hangi yönde==. Kutupsal koordinatlar tam olarak bu: (r, θ)." },
        { tip: "kavramlar", kartlar: [{ ikon: "⭕", terim: "Polar coordinates", tr: "kutupsal koordinatlar", tanim: "Noktayı (r, θ) çiftiyle verir: r merkezden uzaklık, θ ise kutup ekseninden saat yönünün tersine ölçülen açı.", ornek: "(5; 0,927) noktası Kartezyen (3, 4)'tür." }, { ikon: "📌", terim: "Pole and polar axis", tr: "kutup ve kutup ekseni", tanim: "Kutup, merkez noktası (başlangıç). Kutup ekseni, kutuptan sağa giden ışındır (x ekseninin pozitif yarısı).", ornek: "θ = 0 doğrultusu kutup eksenidir." }, { ikon: "↩️", terim: "Negative r", tr: "negatif r", tanim: "r < 0 ise nokta θ doğrultusunun tersine, yani π kadar döndürülmüş yerde bulunur: (−r, θ) = (r, θ + π).", ornek: "(−2, π/6) = (2, 7π/6)." }] },
        { tip: "formul", parcalar: [{ t: "x = r cosθ", alt: "yatay" }, ",", { t: "y = r sinθ", alt: "dikey" }, ",", { t: "r² = x² + y²", alt: "uzaklık" }, ",", { t: "tanθ = y/x", alt: "açı" }], aciklama: "Dik üçgenden çıkar: r hipotenüs, x komşu, y karşı kenar. tanθ = y/x kullanırken açının hangi bölgede olduğunu mutlaka kontrol et." },
        { tip: "grafik", baslik: "Aynı nokta iki dilde: (3, 4) ve (5; 0,927)", xlabel: "x", ylabel: "y", xmax: 7.25, ymax: 5, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], ogeler: [{ id: "p", tip: "nokta", renk: 0, x: 3, y: 4, etiket: "P", kilavuz: true }, { id: "r", tip: "cizgi", renk: 2, from: [0, 0], to: [3, 4], etiket: "r = 5", gizli: true }, { id: "ar", tip: "egri", renk: 3, noktalar: [[1.2, 0], [1.192, 0.139], [1.168, 0.276], [1.128, 0.409], [1.073, 0.537], [1.004, 0.657], [0.921, 0.769], [0.826, 0.87], [0.72, 0.96]], gizli: true }, { id: "th", tip: "yazi", x: 1.55, y: 0.45, metin: "θ", gizli: true }], durumlar: [{ metin: "Kartezyen dil: P noktası (x, y) = (3, 4). Önce sağa 3, sonra yukarı 4." }, { metin: "Kutupsal dil, birinci sayı: merkezden uzaklık r = √(3² + 4²) = 5.", goster: ["r"] }, { metin: "İkinci sayı: x ekseninden ölçülen açı θ. tanθ = 4/3, yani θ ≈ 0,927 rad (≈ 53,1°).", goster: ["ar", "th"] }, { metin: "Aynı nokta: (r, θ) = (5; 0,927). Geri dönüş: x = 5cosθ = 3, y = 5sinθ = 4." }] }
      ]
    },
    {
      baslik: "Kartezyen ile kutupsal arasında dönüşüm",
      kisa: "Açıyı bölgesine bakarak seç; denklemi r ile çarpıp x ve y'ye çevir.",
      bloklar: [
        { tip: "ornek", baslik: "Kartezyen (−3, 3)", durum: "Kutupsala çevir (r > 0, 0 ≤ θ < 2π).", adimlar: ["r = √((−3)² + 3²) = √18 = 3√2.", "tanθ = 3/(−3) = −1. Nokta ikinci bölgede (x < 0, y > 0).", "İkinci bölgedeki açı: θ = 3π/4.", "Ayrıca (−3√2, −π/4) de aynı noktadır, çünkü r negatif."], sonuc: "(3√2, 3π/4)" },
        { tip: "ornek", baslik: "r = 4cosθ", durum: "Kartezyen denkleme çevir.", adimlar: ["Her iki tarafı r ile çarp: r² = 4r cosθ.", "r² = x² + y² ve r cosθ = x yaz: x² + y² = 4x.", "Tam kareye tamamla: (x − 2)² + y² = 4."], sonuc: "Merkezi (2, 0), yarıçapı 2 olan çember" },
        { tip: "tablo", baslik: "Sık gelen basit denklemler", head: ["Kutupsal", "Kartezyen", "Şekil"], rows: [["r = 3", "x² + y² = 9", "merkezi kutup, yarıçap 3 çember"], ["θ = π/4", "y = x", "kutuptan geçen doğru"], ["r = 4cosθ", "(x − 2)² + y² = 4", "merkezi (2, 0) çember"], ["r = 4sinθ", "x² + (y − 2)² = 4", "merkezi (0, 2) çember"]], vurgu: 2 },
        { tip: "tuzak", metin: "Hesap makinesinin tan⁻¹ tuşu yalnız −π/2 ile π/2 arası açı verir. İkinci ve üçüncü bölgelerde sonuca π eklemek gerekir.", yanlis: "(−3, 3) için tanθ = −1 ⇒ θ = −π/4, nokta (3√2, −π/4).", dogru: "(3√2, −π/4) noktası (3, −3)'tür. (−3, 3) için θ = 3π/4. Önce bölgeyi çiz." }
      ]
    },
    {
      baslik: "Kutupsal eğriler: r = f(θ)",
      kisa: "θ döndükçe r kadar uzaklaşan nokta eğriyi çizer; çember, kardioid, gül, sarmal.",
      bloklar: [
        { tip: "tablo", baslik: "Eğri aileleri", head: ["Denklem", "Eğri", "Not"], rows: [["r = a", "çember", "merkezi kutup, yarıçap a"], ["r = a cosθ, r = a sinθ", "çember", "kutuptan geçer, çapı a"], ["r = a + a cosθ", "*cardioid*", "kutupta sivri uç"], ["r = b + a cosθ, b < a", "iç halkalı *limaçon*", "r bazen negatif olur"], ["r = a cos nθ, r = a sin nθ", "*rose* (gül)", "n tek: n yaprak; n çift: 2n yaprak"], ["r = θ", "*spiral* (sarmal)", "θ arttıkça uzaklaşır"]], vurgu: 4 },
        { tip: "grafik", baslik: "r = 2 + 2cosθ eğrisi θ arttıkça çizilir", xlabel: "x", ylabel: "y", xmax: 8.7, ymax: 6, xticks: [{ v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 6] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8.7, 3] }, { id: "a1", tip: "egri", renk: 0, noktalar: [[6, 3], [5.949, 3.52], [5.798, 4.018], [5.555, 4.472], [5.232, 4.866], [4.846, 5.183], [4.414, 5.414], [3.959, 5.553], [3.5, 5.598], [3.058, 5.555], [2.652, 5.432], [2.295, 5.242], [2, 5]], gizli: true }, { id: "a2", tip: "egri", renk: 0, noktalar: [[2, 5], [1.773, 4.724], [1.616, 4.432], [1.528, 4.141], [1.5, 3.866], [1.524, 3.621], [1.586, 3.414], [1.672, 3.252], [1.768, 3.134], [1.859, 3.058], [1.934, 3.018], [1.983, 3.002], [2, 3]], gizli: true }, { id: "a3", tip: "egri", renk: 0, noktalar: [[2, 3], [1.983, 2.998], [1.934, 2.982], [1.859, 2.942], [1.768, 2.866], [1.672, 2.748], [1.586, 2.586], [1.524, 2.379], [1.5, 2.134], [1.528, 1.859], [1.616, 1.568], [1.773, 1.276], [2, 1]], gizli: true }, { id: "a4", tip: "egri", renk: 0, noktalar: [[2, 1], [2.295, 0.758], [2.652, 0.568], [3.058, 0.445], [3.5, 0.402], [3.959, 0.447], [4.414, 0.586], [4.846, 0.817], [5.232, 1.134], [5.555, 1.528], [5.798, 1.982], [5.949, 2.48], [6, 3]], gizli: true }, { id: "p", tip: "nokta", renk: 2, x: 6, y: 3, etiket: "θ = 0, r = 4" }], durumlar: [{ metin: "θ = 0: r = 2 + 2 = 4. Nokta x ekseninin pozitif tarafında, en uzak yerde. Kesikli çizgiler gerçek eksenler." }, { metin: "θ = π/2: r = 2. Nokta yukarı çıktı; r küçüldü.", goster: ["a1"], set: { p: { x: 2, y: 5, etiket: "θ = π/2, r = 2" } } }, { metin: "θ = π: r = 0. Eğri kutuptan geçiyor ve orada sivri uç (*cusp*) yapıyor.", goster: ["a2"], set: { p: { x: 2, y: 3, etiket: "θ = π, r = 0" } } }, { metin: "θ = 3π/2: r tekrar 2'ye çıktı; nokta aşağıda.", goster: ["a3"], set: { p: { x: 2, y: 1, etiket: "θ = 3π/2, r = 2" } } }, { metin: "θ = 2π: başlangıca dönüldü. Kapalı eğri kalp biçimli: *cardioid*.", goster: ["a4"], set: { p: { x: 6, y: 3, etiket: "θ = 2π, r = 4" } } }] },
        { tip: "ikili", sol: { ikon: "🌸", baslik: "Gül: r = a cos nθ ya da a sin nθ", maddeler: ["Yapraklı eğri", "n tek ise n yaprak"] }, sag: { ikon: "❤️", baslik: "Kardioid / limaçon: r = b ± a cosθ ya da b ± a sinθ", maddeler: ["Tek yönde bir yumru", "Kutupta sivri uç ya da iç halka"] }, oyun: [{ metin: "r = 3 sin 2θ", cevap: "sol", neden: "θ'nın katı olan nθ var: gül (4 yaprak)." }, { metin: "r = 2 + 2cosθ", cevap: "sag", neden: "Sabit + a cosθ: kardioid." }, { metin: "r = 4 cos 3θ", cevap: "sol", neden: "n = 3 tek: 3 yaprak." }, { metin: "r = 1 + 2cosθ", cevap: "sag", neden: "b < a: iç halkalı limaçon." }] }
      ]
    },
    {
      baslik: "r ve dr/dθ: merkezden uzaklaşıyor mu?",
      kisa: "r ve dr/dθ aynı işaretliyse |r| büyür: nokta kutuptan uzaklaşır.",
      bloklar: [
        { tip: "tablo", baslik: "İşaretlere göre kutuptan uzaklık", head: ["r", "dr/dθ", "|r|", "Nokta"], rows: [["> 0", "> 0", "büyür", "kutuptan uzaklaşır"], ["> 0", "< 0", "küçülür", "kutba yaklaşır"], ["< 0", "< 0", "büyür", "kutuptan uzaklaşır"], ["< 0", "> 0", "küçülür", "kutba yaklaşır"]], vurgu: 2, not: "Kısaca: r ve dr/dθ aynı işaretse uzaklaşır, zıt işaretse yaklaşır." },
        { tip: "ornek", baslik: "r = 1 + 2cosθ", durum: "θ = π/3 ve θ = 5π/6'da kutuptan uzaklık nasıl değişiyor?", adimlar: ["dr/dθ = −2sinθ.", "θ = π/3: r = 1 + 1 = 2 > 0 ve dr/dθ = −√3 < 0 → zıt işaret: kutba yaklaşır.", "θ = 5π/6: r = 1 − √3 ≈ −0,73 < 0 ve dr/dθ = −1 < 0 → aynı işaret: kutuptan uzaklaşır.", "Neden: iç halkada r negatif, uzaklığı |r| = −r ve −r büyüyor."], sonuc: "π/3'te yaklaşır; 5π/6'da uzaklaşır" },
        { tip: "tuzak", metin: "Önce r'nin işaretine bak. dr/dθ negatif diye otomatik \"yaklaşıyor\" demek yanlış olabilir.", yanlis: "dr/dθ < 0 olduğu için nokta kutba yaklaşıyor.", dogru: "r < 0 ve dr/dθ < 0 ise |r| artıyor: nokta kutuptan uzaklaşıyor." }
      ]
    },
    {
      baslik: "Kutupsal eğrinin eğimi: dy/dx",
      kisa: "x = r cosθ, y = r sinθ yaz; dy/dx = (dy/dθ)/(dx/dθ).",
      bloklar: [
        { tip: "adimlar", baslik: "Eğimi nasıl buluruz?", adimlar: [{ baslik: "θ'yı parametre yap", metin: "x = f(θ)cosθ ve y = f(θ)sinθ, yani 9.1'deki parametrik eğri." }, { baslik: "Çarpım kuralı", metin: "dx/dθ = r′cosθ − r sinθ ; dy/dθ = r′sinθ + r cosθ." }, { baslik: "Böl", metin: "dy/dx = (dy/dθ)/(dx/dθ), dx/dθ ≠ 0." }] },
        { tip: "formul", parcalar: [{ t: "dy/dx", alt: "eğim" }, "=", { t: "r′ sinθ + r cosθ", alt: "dy/dθ" }, "÷", { t: "r′ cosθ − r sinθ", alt: "dx/dθ" }], aciklama: "Yatay teğet: dy/dθ = 0 ve dx/dθ ≠ 0. Dikey teğet: dx/dθ = 0 ve dy/dθ ≠ 0. Kutupta r(θ₀) = 0 ve r′(θ₀) ≠ 0 ise formül dy/dx = tanθ₀ olur: kutuptaki teğet θ = θ₀ doğrusudur." },
        { tip: "tuzak", metin: "dr/dθ eğim değildir; kutupsal bir eğride eğim, dik koordinatlardaki y′ ile ilgilidir.", yanlis: "dy/dx = dr/dθ.", dogru: "dy/dx = (r′sinθ + r cosθ)/(r′cosθ − r sinθ). r′ = dr/dθ yalnızca bu formülün içindeki bir parçadır." }
      ]
    },
    {
      baslik: "Örnek: kardioid r = 2 + 2cosθ",
      kisa: "dy/dθ = 0 yatay, dx/dθ = 0 dikey teğet noktalarını verir.",
      bloklar: [
        { tip: "ornek", baslik: "r = 2 + 2cosθ", durum: "θ = π/2 noktasındaki eğimi ve teğet doğrusunu bul.", adimlar: ["r′ = −2sinθ. θ = π/2: r = 2 ve r′ = −2.", "Pay: r′sinθ + r cosθ = −2·1 + 2·0 = −2.", "Payda: r′cosθ − r sinθ = −2·0 − 2·1 = −2.", "Eğim: (−2)/(−2) = 1. Nokta: x = 2cos(π/2) = 0, y = 2sin(π/2) = 2 → (0, 2). Teğet: y = x + 2."], sonuc: "Eğim 1; teğet y = x + 2" },
        { tip: "ornek", baslik: "Aynı kardioid", durum: "Yatay ve dikey teğet noktalarını bul.", adimlar: ["dy/dθ = −2sin²θ + (2 + 2cosθ)cosθ = 2(2cosθ − 1)(cosθ + 1).", "cosθ = 1/2 → θ = π/3, 5π/3: r = 3, nokta (3/2, ±3√3/2). Yatay teğet.", "dx/dθ = −2sinθ(1 + 2cosθ). sinθ = 0 → θ = 0: (4, 0). cosθ = −1/2 → θ = 2π/3, 4π/3: (−1/2, ±√3/2). Dikey teğet.", "θ = π'de iki türev de 0 (kutup, sivri uç): bu yöntemle yönü belli değil."], sonuc: "Yatay: (3/2, ±3√3/2). Dikey: (4, 0) ve (−1/2, ±√3/2)" },
        { tip: "grafik", baslik: "Kardioidin teğetleri", xlabel: "x", ylabel: "y", xmax: 8.7, ymax: 6, xticks: [{ v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 6] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8.7, 3] }, { id: "c", tip: "egri", renk: 0, noktalar: [[6, 3], [5.949, 3.52], [5.798, 4.018], [5.555, 4.472], [5.232, 4.866], [4.846, 5.183], [4.414, 5.414], [3.959, 5.553], [3.5, 5.598], [3.058, 5.555], [2.652, 5.432], [2.295, 5.242], [2, 5], [1.773, 4.724], [1.616, 4.432], [1.528, 4.141], [1.5, 3.866], [1.524, 3.621], [1.586, 3.414], [1.672, 3.252], [1.768, 3.134], [1.859, 3.058], [1.934, 3.018], [1.983, 3.002], [2, 3], [1.983, 2.998], [1.934, 2.982], [1.859, 2.942], [1.768, 2.866], [1.672, 2.748], [1.586, 2.586], [1.524, 2.379], [1.5, 2.134], [1.528, 1.859], [1.616, 1.568], [1.773, 1.276], [2, 1], [2.295, 0.758], [2.652, 0.568], [3.058, 0.445], [3.5, 0.402], [3.959, 0.447], [4.414, 0.586], [4.846, 0.817], [5.232, 1.134], [5.555, 1.528], [5.798, 1.982], [5.949, 2.48], [6, 3]] }, { id: "pa", tip: "nokta", renk: 2, x: 2, y: 5, gizli: true }, { id: "ta", tip: "cizgi", renk: 2, from: [1, 4], to: [2.8, 5.8], etiket: "eğim 1", gizli: true }, { id: "ph1", tip: "nokta", renk: 3, x: 3.5, y: 5.598, gizli: true }, { id: "th1", tip: "cizgi", renk: 3, from: [2.7, 5.598], to: [4.3, 5.598], gizli: true }, { id: "ph2", tip: "nokta", renk: 3, x: 3.5, y: 0.402, gizli: true }, { id: "th2", tip: "cizgi", renk: 3, from: [2.7, 0.402], to: [4.3, 0.402], gizli: true }, { id: "pv0", tip: "nokta", renk: 1, x: 6, y: 3, gizli: true }, { id: "tv0", tip: "cizgi", renk: 1, from: [6, 2.2], to: [6, 3.8], gizli: true }, { id: "pv1", tip: "nokta", renk: 1, x: 1.5, y: 3.866, gizli: true }, { id: "tv1", tip: "cizgi", renk: 1, from: [1.5, 3.166], to: [1.5, 4.566], gizli: true }, { id: "pv2", tip: "nokta", renk: 1, x: 1.5, y: 2.134, gizli: true }, { id: "tv2", tip: "cizgi", renk: 1, from: [1.5, 1.434], to: [1.5, 2.834], gizli: true }], durumlar: [{ metin: "r = 2 + 2cosθ kardioidi. dy/dx formülüyle teğetlerini bulacağız." }, { metin: "θ = π/2: nokta (0, 2). r = 2, dr/dθ = −2 ⇒ dy/dx = 1. Teğet y = x + 2.", goster: ["pa", "ta"] }, { metin: "dy/dθ = 0 ⇒ θ = π/3 ve 5π/3: (3/2, ±3√3/2). İki yatay teğet.", goster: ["ph1", "th1", "ph2", "th2"] }, { metin: "dx/dθ = 0 ⇒ θ = 0, 2π/3, 4π/3: (4, 0), (−1/2, ±√3/2). Üç dikey teğet.", goster: ["pv0", "tv0", "pv1", "tv1", "pv2", "tv2"] }] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["(r, θ): r kutuptan uzaklık, θ kutup ekseninden açı. x = r cosθ, y = r sinθ, r² = x² + y², tanθ = y/x.", "tanθ = y/x ile θ bulurken bölgeye bak. (−r, θ) ile (r, θ + π) aynı noktadır.", "r = a cosθ ve r = a sinθ kutuptan geçen çemberdir; r = a ± a cosθ kardioid; r = a cos nθ gül (n tek: n yaprak, çift: 2n yaprak).", "r ve dr/dθ aynı işaretliyse |r| artar, nokta kutuptan uzaklaşır; zıtsa yaklaşır.", "dy/dx = (r′sinθ + r cosθ)/(r′cosθ − r sinθ). dr/dθ eğim değildir.", "Yatay teğet: dy/dθ = 0, dx/dθ ≠ 0. Dikey teğet: dx/dθ = 0, dy/dθ ≠ 0.", "Kutuptaki teğet: r(θ₀) = 0, r′(θ₀) ≠ 0 ise θ = θ₀ doğrusu."] }
      ]
    }
  ],
  sorular: [
    {
      q: "Kartezyen (−3, 3) noktasının kutupsal gösterimi (r > 0 ve 0 ≤ θ < 2π) hangisidir?",
      opts: [
        "(3√2, −π/4)",
        "(3√2, 3π/4)",
        "(3√2, π/4)",
        "(6, 3π/4)"
      ],
      a: 1,
      why: "r = √18 = 3√2. Nokta ikinci bölgede olduğundan θ = 3π/4. (3√2, −π/4) noktası (3, −3)'tür (tan⁻¹ tuzağı); (3√2, π/4) noktası (3, 3)'tür."
    },
    {
      q: "r = 2sinθ kutupsal denkleminin Kartezyen karşılığı hangisidir?",
      opts: [
        "x² + y² = 2",
        "(x − 1)² + y² = 1",
        "x² + (y − 1)² = 1",
        "x² + y² = 4"
      ],
      a: 2,
      why: "Her iki yanı r ile çarp: r² = 2r sinθ ⇒ x² + y² = 2y ⇒ x² + (y − 1)² = 1. (x − 1)² + y² = 1 ise r = 2cosθ denklemidir."
    },
    {
      q: "r = 2cosθ eğrisi üzerinde θ = π/4 noktasında dy/dx kaçtır?",
      fig: {
        type: "table",
        head: ["θ", "r = 2cosθ", "dr/dθ = −2sinθ"],
        rows: [["π/4", "√2", "−√2"]],
        caption: "θ = π/4 anındaki değerler"
      },
      opts: [
        "0",
        "−√2",
        "1",
        "tanımsız"
      ],
      a: 0,
      why: "Pay: r′sinθ + r cosθ = (−√2)(√2/2) + (√2)(√2/2) = −1 + 1 = 0. Payda: r′cosθ − r sinθ = −1 − 1 = −2. Eğim 0/(−2) = 0: nokta (1, 1) çemberin tepesi. −√2, dr/dθ'nın değeridir, eğim değil."
    },
    {
      q: "r = 1 + 2cosθ eğrisinde θ arttıkça, 5π/6 anında nokta kutuptan nasıl hareket eder?",
      fig: {
        type: "table",
        head: ["θ", "r = 1 + 2cosθ", "dr/dθ"],
        rows: [["2π/3", "0", "−√3"], ["5π/6", "1 − √3 ≈ −0,73", "−1"], ["π", "−1", "0"]],
        caption: "Üç anda r ve dr/dθ"
      },
      opts: [
        "Yaklaşır, çünkü dr/dθ < 0.",
        "Yaklaşır, çünkü r < 0.",
        "Uzaklık değişmez.",
        "Uzaklaşır, çünkü r ve dr/dθ aynı işaretli."
      ],
      a: 3,
      why: "5π/6'da r ≈ −0,73 < 0 ve dr/dθ = −1 < 0: aynı işaret, |r| artıyor, nokta kutuptan uzaklaşıyor. dr/dθ < 0 diye yaklaşıyor demek çekici ama yanlış bir şıktır."
    },
    {
      q: "r = 2cos3θ eğrisi kaç yapraklıdır?",
      opts: [
        "6",
        "3",
        "2",
        "4"
      ],
      a: 1,
      why: "r = a cos nθ biçiminde n tek ise n yaprak, n çift ise 2n yaprak. n = 3 tek olduğundan 3 yaprak. 6 yanıtı, \"hep 2n\" yanlışından gelir."
    }
  ]
};
