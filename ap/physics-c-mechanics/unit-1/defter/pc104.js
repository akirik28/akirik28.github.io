/* Kitpath not defteri · pc104 · 1.1, 1.5 Vektörler: Bileşenler ve Birim Vektörler
   Kaynak: ap-videolar/src/episodes/pc104 (script.ts + notes.md) ve Ada'nın ders sunumu (Vectors). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc104",
  amac: "Bu konu vektörleri anlatıyor: yalnızca büyüklüğü olan skalerle büyüklüğü ve yönü olan vektör arasındaki farkı, vektörleri toplayıp çıkarmayı, bileşenlerine ayırmayı ve î, ĵ, k̂ ile yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Skaler, vektör ve ok gösterimi",
      kisa: "Vektörün büyüklüğü ve yönü vardır; ok uzunluğu büyüklüğü gösterir.",
      bloklar: [
        { tip: "hikaye", ikon: "📍", baslik: "\"3 kilometre yürü\"", metin: "Arkadaşın kafeye nasıl geleceğini soruyor. \"3 kilometre yürü\" dersen bulamaz; \"3 kilometre kuzeye\" dersen bulur. İkinci cümlede büyüklüğün yanında bir de yön var." },
        { tip: "kavramlar",
            kartlar: [
              { ikon: "🔢", terim: "Scalar", tr: "skaler", tanim: "Yalnızca büyüklüğü (ve birimi) olan nicelik.", ornek: "Zaman, kütle, sürat, yol (*distance*)." },
              { ikon: "➡️", terim: "Vector", tr: "vektör", tanim: "Büyüklüğü ve yönü olan nicelik. Harfin üstüne ok konarak ya da kalın harfle (**A**) yazılır.", ornek: "Yer değiştirme, hız, ivme, kuvvet." },
              { ikon: "📏", terim: "Magnitude", tr: "büyüklük", tanim: "Vektörün boyu, |A|: okun uzunluğu. Tek boyutta yön işaret taşır: +5 m sağa, −5 m sola.", ornek: "A = −5 m ise |A| = 5 m." },
              { ikon: "🧭", terim: "Displacement", tr: "yer değiştirme", tanim: "Başlangıç ile son konum arasındaki vektör; alınan yolu hesaba katmaz.", ornek: "Eve dönersen yer değiştirme 0, yol uzundur." }
            ] },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Scalar*", maddeler: ["Yalnız büyüklük", "Zaman, kütle, sürat, yol"] }, sag: { ikon: "➡️", baslik: "*Vector*", maddeler: ["Büyüklük + yön", "Yer değiştirme, hız, ivme, kuvvet"] },
            oyun: [
              { metin: "Sürat", cevap: "sol", neden: "Yalnız büyüklük; hız vektördür, sürat değil." },
              { metin: "Yer değiştirme", cevap: "sag", neden: "Başlangıçtan sona yönlü bir ok." },
              { metin: "Yol (*distance*)", cevap: "sol", neden: "Alınan toplam yol yönsüzdür." },
              { metin: "İvme", cevap: "sag", neden: "Hızın değişimi; yönü vardır." },
              { metin: "Kütle", cevap: "sol", neden: "Yönü olmayan bir büyüklük." }
            ] },
        { tip: "grafik", baslik: "Vektör oku: A = (3; 2). Eşitlik, ters vektör, döndürme", xlabel: "x", ylabel: "y", xmax: 9, ymax: 6.2,
            ogeler: [
              { id: "A", tip: "ok", renk: 0, from: [1, 1], to: [4, 3] },
              { id: "tA", tip: "yazi", x: 1.2, y: 0.5, metin: "A", hiza: "start" },
              { id: "Ac", tip: "ok", renk: 1, from: [5, 1], to: [8, 3], gizli: true },
              { id: "tAc", tip: "yazi", x: 6.5, y: 0.4, metin: "kaydırılmış: aynı vektör", gizli: true },
              { id: "An", tip: "ok", renk: 2, from: [4, 4], to: [1, 2], gizli: true },
              { id: "tAn", tip: "yazi", x: 2.5, y: 4.4, metin: "−A: ters yön", gizli: true },
              { id: "Ar", tip: "ok", renk: 2, from: [1, 1], to: [2.013, 4.46], gizli: true },
              { id: "tAr", tip: "yazi", x: 3.8, y: 4.6, metin: "döndürülmüş: yeni vektör", gizli: true }
            ],
            durumlar: [
              { metin: "Ok uzunluğu **büyüklüğü**, oku ucu **yönü** gösterir. Bu ok A = 3 sağa, 2 yukarı." },
              { metin: "Oku kaydırabilirsin, değişmez: büyüklük ve yön aynıysa iki vektör ==eşittir==.", goster: ["Ac", "tAc"] },
              { metin: "A'nın eksisi −A: aynı boyda, tam ters yönde (anti-paralel) ok. A + (−A) = 0.", gizle: ["Ac", "tAc"], goster: ["An", "tAn"] },
              { metin: "Oku döndürürsen yön değişir; artık ==başka bir vektördür==.", gizle: ["An", "tAn"], goster: ["Ar", "tAr"] }
            ] }
      ]
    },
    {
      baslik: "Vektör toplama: uç uca ve paralelkenar",
      kisa: "Okları uç uca ekle; başlangıçtan son uca çizilen ok bileşkedir.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "🎯", terim: "Resultant", tr: "bileşke", tanim: "Vektörlerin toplamı: başlangıçtan son uca çizilen ok.", ornek: "6 km doğu + 8 km kuzey → 10 km." },
              { ikon: "🔗", terim: "Tip-to-tail method", tr: "uç uca yöntemi", tanim: "İkinci okun kuyruğunu birincinin ucuna koyarak toplama.", ornek: "Önce 6 km doğu, sonra 8 km kuzey." },
              { ikon: "🔷", terim: "Parallelogram method", tr: "paralelkenar yöntemi", tanim: "İki okun kuyruklarını birleştir, paralelkenarı tamamla; köşegen bileşkedir.", ornek: "Aynı 10 km'lik bileşkeyi verir." }
            ] },
        { tip: "grafik", baslik: "6 km doğu + 8 km kuzey (1 kare = 1 km)", xlabel: "doğu (km)", ylabel: "kuzey (km)", xmax: 13, ymax: 9,
            ogeler: [
              { id: "A", tip: "ok", renk: 0, from: [1, 0.5], to: [7, 0.5] },
              { id: "tA", tip: "yazi", x: 4, y: 1.1, metin: "A = 6 km" },
              { id: "B", tip: "ok", renk: 1, from: [7, 0.5], to: [7, 8.5], gizli: true },
              { id: "tB", tip: "yazi", x: 7.4, y: 4.5, metin: "B = 8 km", hiza: "start", gizli: true },
              { id: "R", tip: "ok", renk: 2, from: [1, 0.5], to: [7, 8.5], gizli: true },
              { id: "tR", tip: "yazi", x: 3.2, y: 6.4, metin: "R = 10 km", hiza: "end", gizli: true },
              { id: "th", tip: "yazi", x: 2.8, y: 1.1, metin: "53,1°", hiza: "start", gizli: true },
              { id: "p1", tip: "cizgi", renk: 3, kesik: true, from: [1, 0.5], to: [1, 8.5], gizli: true },
              { id: "p2", tip: "cizgi", renk: 3, kesik: true, from: [1, 8.5], to: [7, 8.5], gizli: true }
            ],
            durumlar: [
              { metin: "Önce A: 6 km doğuya." },
              { metin: "*Tip-to-tail*: B'nin kuyruğunu A'nın ucuna koy (8 km kuzeye).", goster: ["B", "tB"] },
              { metin: "Başlangıçtan son uca çizilen ok **bileşke** R: √(6² + 8²) = ==10 km==, doğunun ==53,1°== kuzeyi.", goster: ["R", "tR", "th"] },
              { metin: "*Parallelogram method*: kuyrukları birleştirip paralelkenarı tamamla; köşegen yine aynı R.", goster: ["p1", "p2"] }
            ] },
        { tip: "sayilar",
            ogeler: [
              { deger: 14, sonek: " km", etiket: "alınan yol (distance)" },
              { deger: 10, sonek: " km", etiket: "yer değiştirme (bileşke)" }
            ] }
      ]
    },
    {
      baslik: "Çıkarma ve skalerle çarpma",
      kisa: "A − B = A + (−B); skalerle çarpmak boyu (ve işareti) değiştirir.",
      bloklar: [
        { tip: "grafik", baslik: "A − B = A + (−B)", xlabel: "x", ylabel: "y", xmax: 8, ymax: 5.5,
            ogeler: [
              { id: "A", tip: "ok", renk: 0, from: [1, 1], to: [6, 5] },
              { id: "tA", tip: "yazi", x: 3.2, y: 3.9, metin: "A", hiza: "end" },
              { id: "B", tip: "ok", renk: 1, from: [1, 1], to: [3, 2] },
              { id: "tB", tip: "yazi", x: 2.3, y: 1.1, metin: "B", hiza: "start" },
              { id: "nB", tip: "ok", renk: 2, from: [6, 5], to: [4, 4], gizli: true },
              { id: "tnB", tip: "yazi", x: 5.2, y: 4.1, metin: "−B", hiza: "end", gizli: true },
              { id: "D", tip: "ok", renk: 3, from: [1, 1], to: [4, 4], gizli: true },
              { id: "tD", tip: "yazi", x: 2.2, y: 3.1, metin: "A − B", hiza: "end", gizli: true }
            ],
            durumlar: [
              { metin: "A = (5; 4) ve B = (2; 1), kuyrukları aynı noktada." },
              { metin: "Çıkarma yerine tersini ekle: B'yi ters çevir (−B) ve A'nın ucuna koy.", goster: ["nB", "tnB"] },
              { metin: "Başlangıçtan son uca: A − B = (3; 3). Bileşen bileşen de aynı: (5 − 2; 4 − 1).", goster: ["D", "tD"] }
            ] },
        { tip: "tablo", baslik: "Vektörü skalerle çarpmak", head: ["Çarpan", "Sonuç", "Boy", "Yön"],
            rows: [
              ["2", "2A", "2|A|", "aynı"],
              ["−1", "−A", "|A|", "ters"],
              ["−½", "−½A", "½|A|", "ters"],
              ["Δt (zaman)", "v·Δt = Δr (yer değiştirme)", "|v|Δt", "v ile aynı"],
              ["m (kütle)", "m·v = p (momentum)", "m|v|", "v ile aynı"]
            ] }
      ]
    },
    {
      baslik: "Bileşenler: vektörü ikiye ayırmak",
      kisa: "Açı x ekseninden ölçülüyorsa x bileşeni cos, y bileşeni sin ile bulunur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "✂️", terim: "Components", tr: "bileşenler", tanim: "Vektörün eksenler boyunca payları A_x ve A_y: ok iki dik oka ayrılır.", ornek: "20 m/s, 30°: v_x ≈ 17,3 m/s, v_y = 10 m/s." }] },
        { tip: "formul", parcalar: [{ t: "A_x = A cos θ", alt: "x bileşeni" }, "ve", { t: "A_y = A sin θ", alt: "y bileşeni" }], aciklama: "θ, x ekseninden ölçülen açıdır." },
        { tip: "grafik", baslik: "20 m/s hız, 30° yukarı: bileşenler", xlabel: "x", ylabel: "y", xmax: 27, ymax: 19,
            ogeler: [
              { id: "v", tip: "ok", renk: 0, from: [1, 1], to: [18.32, 11] },
              { id: "lv", tip: "yazi", x: 8.2, y: 7.6, metin: "20 m/s", hiza: "end" },
              { id: "cx", tip: "ok", renk: 1, from: [1, 1], to: [18.32, 1], gizli: true },
              { id: "lx", tip: "yazi", x: 9.7, y: 2.4, metin: "v_x ≈ 17,3 m/s", gizli: true },
              { id: "cy", tip: "ok", renk: 2, from: [18.32, 1], to: [18.32, 11], gizli: true },
              { id: "ly", tip: "yazi", x: 19.8, y: 6, metin: "v_y = 10 m/s", hiza: "start", gizli: true },
              { id: "an", tip: "yazi", x: 5.5, y: 1.9, metin: "30° (x'ten)", hiza: "start" }
            ],
            durumlar: [
              { metin: "20 m/s'lik hız vektörü, yatayla 30° yapıyor." },
              { metin: "x bileşeni: v cos 30° = 20 · 0,866 ≈ ==17,3 m/s==.", goster: ["cx", "lx"] },
              { metin: "y bileşeni: v sin 30° = 20 · 0,5 = ==10 m/s==.", goster: ["cy", "ly"] },
              { metin: "Açı **y ekseninden** 30° ölçülseydi yerler değişirdi: v_x = 20 sin 30° = 10, v_y = 20 cos 30° ≈ 17,3.", set: { v: { to: [11, 18.32] }, cx: { to: [11, 1] }, cy: { from: [11, 1], to: [11, 18.32] }, lv: { x: 6.4, y: 11.5 }, lx: { x: 6, y: 2.4, metin: "v_x = 10 m/s" }, ly: { x: 12.3, y: 10, metin: "v_y ≈ 17,3 m/s" }, an: { x: 2.2, y: 5, metin: "30° (y'den)" } } }
            ] },
        { tip: "tuzak", metin: "Açının hangi eksenden ölçüldüğüne bak.", yanlis: "Açı verildi, x'e her zaman cos, y'ye her zaman sin.", dogru: "Açı x ekseninden ise x'e cos, y'ye sin; açı y ekseninden ise yerleri değişir. Önce çiz, sonra yaz." }
      ]
    },
    {
      baslik: "Bileşenlerden büyüklük ve açı",
      kisa: "Büyüklük Pisagor'la bulunur; açıda hesap makinesine değil çizime güven.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "|A| = √(A_x² + A_y²)", alt: "büyüklük" }, "ve", { t: "θ = tan⁻¹(A_y / A_x)", alt: "açı: bölgeyi kontrol et" }] },
        { tip: "grafik", baslik: "A = (−3; 4): büyüklük 5, açı 126,9° (kesikli çizgiler x ve y ekseni)", xlabel: "x", ylabel: "y", xmax: 14.5, ymax: 10, xticks: [{ v: 4, label: "−3" }, { v: 7, label: "0" }, { v: 10, label: "3" }], yticks: [{ v: 1, label: "−4" }, { v: 5, label: "0" }, { v: 9, label: "4" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 5], to: [14.5, 5] },
              { id: "ay", tip: "cizgi", renk: 3, kesik: true, from: [7, 0], to: [7, 10] },
              { id: "A", tip: "ok", renk: 0, from: [7, 5], to: [4, 9] },
              { id: "cx", tip: "cizgi", renk: 1, kesik: true, from: [7, 5], to: [4, 5] },
              { id: "tx", tip: "yazi", x: 5.5, y: 4.4, metin: "−3" },
              { id: "cy", tip: "cizgi", renk: 2, kesik: true, from: [4, 5], to: [4, 9] },
              { id: "ty", tip: "yazi", x: 3.5, y: 7, metin: "4", hiza: "end" },
              { id: "tm", tip: "yazi", x: 5.9, y: 7.7, metin: "|A| = 5", hiza: "start", gizli: true },
              { id: "G", tip: "ok", renk: 3, from: [7, 5], to: [10, 1], gizli: true },
              { id: "tg", tip: "yazi", x: 10.3, y: 1.4, metin: "makine: −53,1° ✗", hiza: "start", gizli: true },
              { id: "tt", tip: "yazi", x: 7.4, y: 6.2, metin: "θ = 126,9°", hiza: "start", gizli: true }
            ],
            durumlar: [
              { metin: "A'nın bileşenleri: A_x = −3 (sola), A_y = 4 (yukarı)." },
              { metin: "Büyüklük Pisagor'la: √((−3)² + 4²) = √25 = ==5==.", goster: ["tm"] },
              { metin: "tan⁻¹(4/−3) hesap makinesinde ==−53,1°== verir: 4. bölgede bir ok. Ama A'nın x'i eksi, y'si artı!", goster: ["G", "tg"] },
              { metin: "A ==2. bölgede==. Doğru açı 180° − 53,1° = ==126,9°==. Önce çiz, sonra hesap makinesine güven.", gizle: ["G", "tg"], goster: ["tt"] }
            ] },
        { tip: "tablo", baslik: "Bölgeye göre gerçek açı (α = tan⁻¹ (|A_y| / |A_x|), dar açı)", head: ["Bölge", "A_x, A_y işareti", "Gerçek açı (x ekseninden)"], vurgu: 1, not: "Örnek: (−3; 4) → α = 53,1°, 2. bölge → 126,9°. (−5; −5) → α = 45°, 3. bölge → 225°.",
            rows: [
              ["I", "+, +", "θ = α"],
              ["II", "−, +", "θ = 180° − α"],
              ["III", "−, −", "θ = 180° + α"],
              ["IV", "+, −", "θ = 360° − α"]
            ] },
        { tip: "tuzak", metin: "tan⁻¹ hesap makinesinde yalnızca −90°…90° verir.", yanlis: "(−5; −5) için tan⁻¹(−5/−5) = 45°, açı 45°.", dogru: "Önce çiz: vektör 3. bölgede, açı 225°. Bölgeyi çizimden kontrol et." }
      ]
    },
    {
      baslik: "Birim vektörler: î, ĵ, k̂",
      kisa: "Vektörü î ĵ k̂ ile yaz; toplamayı bileşen bileşen yap.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "🧩", terim: "Unit vector", tr: "birim vektör", tanim: "Boyu 1 olan, yalnızca yön gösteren vektör: î (x), ĵ (y), k̂ (z). Her vektör A = A_x î + A_y ĵ + A_z k̂ biçiminde yazılır.", ornek: "A = 3î + 4ĵ: üç tane î ile dört tane ĵ uç uca." }] },
        { tip: "grafik", baslik: "A = 3î + 4ĵ ve B = 2î − 6ĵ (kesikli çizgi y = 0)", xlabel: "x", ylabel: "y", xmax: 8, ymax: 12, xticks: [{ v: 1, label: "0" }, { v: 4, label: "3" }, { v: 6, label: "5" }], yticks: [{ v: 1, label: "−6" }, { v: 5, label: "−2" }, { v: 7, label: "0" }, { v: 11, label: "4" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 7], to: [8, 7] },
              { id: "A", tip: "ok", renk: 0, from: [1, 7], to: [4, 11] },
              { id: "tA", tip: "yazi", x: 2.2, y: 9.7, metin: "A", hiza: "end" },
              { id: "B", tip: "ok", renk: 1, from: [1, 7], to: [3, 1], gizli: true },
              { id: "tB", tip: "yazi", x: 1.8, y: 3.4, metin: "B", hiza: "end", gizli: true },
              { id: "B2", tip: "ok", renk: 1, from: [4, 11], to: [6, 5], gizli: true },
              { id: "tB2", tip: "yazi", x: 5.7, y: 8.2, metin: "B", hiza: "start", gizli: true },
              { id: "R", tip: "ok", renk: 2, from: [1, 7], to: [6, 5], gizli: true },
              { id: "tR", tip: "yazi", x: 3.6, y: 5.3, metin: "A + B", hiza: "start", gizli: true }
            ],
            durumlar: [
              { metin: "A = 3î + 4ĵ: üç birim x yönünde, dört birim y yönünde." },
              { metin: "B = 2î − 6ĵ: iki birim sağa, altı birim aşağı.", goster: ["B", "tB"] },
              { metin: "Uç uca: B'yi A'nın ucuna taşı.", gizle: ["B", "tB"], goster: ["B2", "tB2"] },
              { metin: "Bileşke: A + B = (3 + 2)î + (4 − 6)ĵ = ==5î − 2ĵ==.", goster: ["R", "tR"] }
            ] },
        { tip: "ornek", baslik: "A + B bileşen bileşen", durum: "A = 3î + 4ĵ ve B = 2î − 6ĵ. A + B ve büyüklüğü nedir?", sonuc: "A + B = ==5î − 2ĵ==, büyüklüğü ≈ ==5,39==.",
            adimlar: [
              "î bileşeni: 3 + 2 = 5",
              "ĵ bileşeni: 4 + (−6) = −2",
              "A + B = 5î − 2ĵ",
              "|A + B| = √(25 + 4) = √29 ≈ 5,39"
            ] },
        { tip: "ornek", baslik: "Üç boyutta büyüklük", durum: "|2î − 3ĵ + 6k̂| = ?", sonuc: "Büyüklük = ==7==.",
            adimlar: [
              "Üç boyutlu Pisagor: √(A_x² + A_y² + A_z²)",
              "√(4 + 9 + 36) = √49"
            ] }
      ]
    },
    {
      baslik: "AP örneği: drone",
      kisa: "Bileşenlere ayır, bileşen bileşen topla, en son büyüklük ve açıyı bul.",
      bloklar: [
        { tip: "ornek", baslik: "40 m doğu + 20 m (60° kuzey)", durum: "Bir drone önce 40 m doğuya, sonra doğunun 60° kuzeyine doğru 20 m uçuyor. Toplam yer değiştirmenin büyüklüğü ve yönü nedir?", sonuc: "|R| ≈ ==52,9 m==, yön: doğunun ==19,1°== kuzeyi.",
            adimlar: [
              "İkinci adım: B_x = 20 cos 60° = 10 m; B_y = 20 sin 60° ≈ 17,3 m",
              "Topla: R_x = 40 + 10 = 50 m; R_y = 0 + 17,3 = 17,3 m",
              "|R| = √(50² + 17,3²) = √2800 ≈ 52,9 m",
              "θ = tan⁻¹(17,3 / 50) ≈ 19,1°"
            ] },
        { tip: "grafik", baslik: "Drone: 40 m doğu, sonra doğunun 60° kuzeyine 20 m (1 kare = 1 m)", xlabel: "doğu (m)", ylabel: "kuzey (m)", xmax: 58, ymax: 40,
            ogeler: [
              { id: "A", tip: "ok", renk: 0, from: [3, 3], to: [43, 3] },
              { id: "tA", tip: "yazi", x: 23, y: 5.2, metin: "A = 40 m" },
              { id: "B", tip: "ok", renk: 1, from: [43, 3], to: [53, 20.32], gizli: true },
              { id: "tB", tip: "yazi", x: 47, y: 14, metin: "B = 20 m", hiza: "end", gizli: true },
              { id: "bx", tip: "cizgi", renk: 3, kesik: true, from: [43, 3], to: [53, 3], gizli: true },
              { id: "tbx", tip: "yazi", x: 48, y: 5.5, metin: "10", gizli: true },
              { id: "by", tip: "cizgi", renk: 3, kesik: true, from: [53, 3], to: [53, 20.32], gizli: true },
              { id: "tby", tip: "yazi", x: 55.5, y: 11.5, metin: "17,3", gizli: true },
              { id: "R", tip: "ok", renk: 2, from: [3, 3], to: [53, 20.32], gizli: true },
              { id: "tR", tip: "yazi", x: 26, y: 13.5, metin: "R ≈ 52,9 m", hiza: "end", gizli: true },
              { id: "tt", tip: "yazi", x: 22, y: 8.2, metin: "19,1°", hiza: "start", gizli: true }
            ],
            durumlar: [
              { metin: "İlk adım A: 40 m doğuya." },
              { metin: "İkinci adım B: A'nın ucundan, doğunun 60° kuzeyine 20 m.", goster: ["B", "tB"] },
              { metin: "B'nin bileşenleri: B_x = 20 cos 60° = 10 m, B_y = 20 sin 60° ≈ 17,3 m.", goster: ["bx", "by", "tbx", "tby"] },
              { metin: "Toplam: R_x = 40 + 10 = 50 m, R_y = 17,3 m. |R| = √2800 ≈ ==52,9 m==, açı tan⁻¹(17,3/50) ≈ ==19,1°==.", goster: ["R", "tR", "tt"] }
            ] },
        { tip: "tuzak", metin: "Büyüklükleri doğrudan toplamak yanlıştır.", yanlis: "40 + 20 = 60 m", dogru: "Vektörler bileşen bileşen toplanır: |R| ≈ 52,9 m. Büyüklükler ancak aynı yöndeyse toplanır." }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Bileşen ve î ĵ gösterimi esas; bir işaret kuralı seç ve koru.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sınavda gerekir", maddeler: ["Vektörü hızla bileşenlerine ayırmak", "î ĵ gösterimiyle yazıp okumak", "Bileşenleri ayrı ayrı toplamak", "Serbest yanıtta cevabı î ĵ ile yazabilmek (büyüklük istenmedikçe)"] }, sag: { ikon: "🚫", baslik: "Pek beklenmez", maddeler: ["Cetvel ve açıölçerle çizim", "Kosinüs teoremiyle uzun hesap"] } },
        { tip: "tuzak", metin: "İşaret kuralını yarıda değiştirme.", yanlis: "Aşağı yönlü ivmeyi bir adımda +9,8, başka adımda −9,8 yazmak.", dogru: "Bir işaret kuralı seç (yukarı +) ve sonuna kadar koru; yerçekimi ivmesi −9,8 m/s²." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet",
            maddeler: [
              "*Scalar* yalnız büyüklük, *vector* büyüklük + yön; yol skaler, yer değiştirme vektör.",
              "Tek boyutta yön işarettir: +5 m sağa, −5 m sola.",
              "Uç uca topla; bileşke başlangıçtan son uca. Yer değiştirme (10 km) ≠ yol (14 km).",
              "A − B = A + (−B); skalerle çarpmak boyu (negatifse yönü de) değiştirir.",
              "Açı x ekseninden ise A_x = A cos θ, A_y = A sin θ; açı başka eksenden ise yer değişir.",
              "|A| = √(A_x² + A_y²); tan⁻¹ yalnızca −90°…90° verir, bölgeyi çizimden kontrol et ((−3; 4) için 126,9°).",
              "î, ĵ, k̂ boyu 1; toplama bileşen bileşen; üç boyutta √(A_x² + A_y² + A_z²).",
              "Büyüklükler doğrudan toplanmaz (40 + 20 ≠ 52,9)."
            ] }
      ]
    }
  ]
};
