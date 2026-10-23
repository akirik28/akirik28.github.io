/* Kitpath not defteri · pc105 · M.4 Vektör Çarpımı: Nokta ve Çapraz Çarpım
   Kaynak: ap-videolar/src/episodes/pc105 (script.ts + notes.md) ve Ada'nın ders sunumu (Vectors). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc105",
  amac: "Bu konu iki vektörü çarpmanın iki yolunu anlatıyor: sonucu sayı olan nokta çarpım ve sonucu vektör olan çapraz çarpım. Açı ve bileşenlerle hesaplamayı, sağ el kuralını ve î ĵ k̂ döngüsünü öğreneceksin.",
  bolumler: [
    {
      baslik: "Vektörleri çarpmanın üç yolu",
      kisa: "Sayıyla çarpım vektör, nokta çarpım sayı, çapraz çarpım vektör verir.",
      bloklar: [
        { tip: "hikaye", ikon: "🧳", baslik: "Eğik kulplu valiz", metin: "Havalimanında valizi kulpundan çekiyorsun ama kulp eğik. Kolunun gücünün bir kısmı valizi ileri götürür, bir kısmı boşa yukarı çeker. Kuvvetin hareket yönündeki payını bulmak için vektör çarpımı gerekir." },
        { tip: "tablo", baslik: "Üç çarpım", head: ["Çarpım", "Yazılış", "Sonuç", "Fizikte"],
            rows: [
              ["Skalerle", "c · A", "vektör", "m·v = p (momentum)"],
              ["Nokta (*dot*)", "A · B", "skaler (sayı)", "iş: W = F · d"],
              ["Çapraz (*cross*)", "A × B", "vektör", "tork: τ = r × F"]
            ] },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "Sonuç bir sayı", maddeler: ["Yönü yok", "Birimi olan skaler"] }, sag: { ikon: "➡️", baslik: "Sonuç bir vektör", maddeler: ["Büyüklük ve yön", "Yönü ayrıca bulunur"] },
            oyun: [
              { metin: "A · B (nokta çarpım)", cevap: "sol", neden: "Sonuç tek bir sayıdır." },
              { metin: "A × B (çapraz çarpım)", cevap: "sag", neden: "Sonuç yönlü bir vektördür." },
              { metin: "3A (vektörü sayıyla çarpmak)", cevap: "sag", neden: "Boyu değişen yeni bir vektör (yön aynı ya da ters)." },
              { metin: "İş: W = F · d", cevap: "sol", neden: "Enerji bir skalerdir." },
              { metin: "Tork: τ = r × F", cevap: "sag", neden: "Tork yönü olan bir vektördür." }
            ] }
      ]
    },
    {
      baslik: "Nokta çarpım: gölge çarpı boy",
      kisa: "A·B = AB cosθ: A'nın B üzerindeki gölgesi çarpı B'nin boyu.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "🔘", terim: "Dot product", tr: "nokta çarpım (skaler çarpım)", tanim: "A · B = AB cos θ; θ iki vektörün arasındaki açıdır. Sonuç bir sayıdır (*scalar product*), yönü yoktur.", ornek: "A = 4, B = 6, θ = 60° ise A · B = 12." },
              { ikon: "🔦", terim: "Projection", tr: "izdüşüm (gölge)", tanim: "Bir vektörün başka bir vektör doğrultusundaki payı: A cos θ. θ > 90° ise gölge B'nin arkasına düşer ve negatiftir.", ornek: "θ = 120° için A cos θ = 4 · (−0,5) = −2." }
            ] },
        { tip: "formul", parcalar: [{ t: "A · B", alt: "nokta çarpım" }, "=", { t: "A B cos θ", alt: "gölge × boy" }, "=", { t: "A_x B_x + A_y B_y + A_z B_z", alt: "bileşenle" }] },
        { tip: "grafik", baslik: "A (4 birim) B'nin (6 birim) etrafında dönüyor: A·B = 24 cos θ", xlabel: "x", ylabel: "y", xmax: 13, ymax: 9,
            ogeler: [
              { id: "B", tip: "ok", renk: 1, from: [3, 4], to: [9, 4] },
              { id: "tB", tip: "yazi", x: 9.3, y: 4.1, metin: "B", hiza: "start" },
              { id: "A", tip: "ok", renk: 0, from: [3, 4], to: [7, 4] },
              { id: "perp", tip: "cizgi", renk: 3, kesik: true, from: [7, 4], to: [7, 4] },
              { id: "proj", tip: "cizgi", renk: 2, from: [3, 3.6], to: [7, 3.6], etiket: "gölge" },
              { id: "th", tip: "yazi", x: 12.8, y: 8.2, metin: "θ = 0°", hiza: "end" },
              { id: "dt", tip: "yazi", x: 12.8, y: 7.1, metin: "A·B = 24", hiza: "end" }
            ],
            durumlar: [
              { metin: "θ = 0°: A, B ile aynı yönde. A'nın gölgesi 4 birimin tamamı: A·B = 4 · 6 · cos 0° = ==24==." },
              { metin: "θ = 60°: gölge A cos 60° = 2 birim. A·B = 2 · 6 = ==12==.", set: { A: { to: [5, 7.464] }, perp: { from: [5, 7.464], to: [5, 4] }, proj: { to: [5, 3.6] }, th: { metin: "θ = 60°" }, dt: { metin: "A·B = 12" } } },
              { metin: "θ = 90°: gölge yok. A·B = ==0==: vektörler diktir.", set: { A: { to: [3, 8] }, perp: { from: [3, 8], to: [3, 4] }, proj: { to: [3, 3.6] }, th: { metin: "θ = 90°" }, dt: { metin: "A·B = 0" } } },
              { metin: "θ = 120°: gölge B'nin arkasına düşer, A cos 120° = −2. A·B = ==−12==.", set: { A: { to: [1, 7.464] }, perp: { from: [1, 7.464], to: [1, 4] }, proj: { to: [1, 3.6] }, th: { metin: "θ = 120°" }, dt: { metin: "A·B = −12" } } }
            ] },
        { tip: "tuzak", metin: "Nokta çarpımın sonucu tek bir sayıdır.", yanlis: "(3î + 4ĵ) · (2î − ĵ) = 6î − 4ĵ", dogru: "Aynı bileşenlerin çarpımları toplanır: 6 − 4 = 2. î ve ĵ yazılmaz." }
      ]
    },
    {
      baslik: "Bileşenlerle nokta çarpım ve aradaki açı",
      kisa: "Aynı bileşenleri çarpıp topla; sıfırsa vektörler birbirine diktir.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "🧩", terim: "Unit vector", tr: "birim vektör", tanim: "Boyu 1 olan yön vektörleri î, ĵ, k̂. Kendisiyle nokta çarpımı 1, birbirleriyle 0'dır (dik).", ornek: "î · î = 1, î · ĵ = 0." },
              { ikon: "📐", terim: "Perpendicular", tr: "dik", tanim: "İki vektör arasındaki açı 90° ise dik denir; nokta çarpım sıfırdır: A · B = 0.", ornek: "(2î + 3ĵ) · (3î − 2ĵ) = 6 − 6 = 0: dik." }
            ] },
        { tip: "tablo", baslik: "Birim vektörlerin nokta çarpımı", head: ["·", "î", "ĵ", "k̂"],
            rows: [
              ["î", "1", "0", "0"],
              ["ĵ", "0", "1", "0"],
              ["k̂", "0", "0", "1"]
            ] },
        { tip: "ornek", baslik: "A = 3î + 4ĵ, B = 2î − ĵ", durum: "A · B ve aralarındaki açıyı bul.", sonuc: "A · B = ==2==, θ ≈ ==79,7°==.",
            adimlar: [
              "A · B = (3)(2) + (4)(−1) = 6 − 4 = 2",
              "|A| = 5, |B| = √5",
              "cos θ = 2 / (5√5) ≈ 0,179",
              "θ ≈ 79,7°"
            ] },
        { tip: "grafik", baslik: "A = (3; 4) ve B = (2; −1) (1 kare = 1 birim)", xlabel: "x", ylabel: "y", xmax: 10, ymax: 7,
            ogeler: [
              { id: "A", tip: "ok", renk: 0, from: [1, 2], to: [4, 6] },
              { id: "tA", tip: "yazi", x: 2, y: 5.2, metin: "A = 3î + 4ĵ", hiza: "end" },
              { id: "B", tip: "ok", renk: 1, from: [1, 2], to: [3, 1], gizli: true },
              { id: "tB", tip: "yazi", x: 3.3, y: 1.2, metin: "B = 2î − ĵ", hiza: "start", gizli: true },
              { id: "th", tip: "yazi", x: 6.2, y: 3.4, metin: "θ ≈ 79,7°", hiza: "start", gizli: true },
              { id: "dt", tip: "yazi", x: 9.8, y: 6.4, metin: "A·B = 6 − 4 = 2", hiza: "end", gizli: true }
            ],
            durumlar: [
              { metin: "A = 3î + 4ĵ: büyüklüğü √(9 + 16) = 5." },
              { metin: "B = 2î − ĵ: büyüklüğü √(4 + 1) = √5 ≈ 2,24.", goster: ["B", "tB"] },
              { metin: "Eşleşen bileşenler çarpılıp toplanır: (3)(2) + (4)(−1) = ==2==.", goster: ["dt"] },
              { metin: "cos θ = 2 / (5√5) ≈ 0,179 ⇒ ==θ ≈ 79,7°==. Açı 90°'den küçük, nokta çarpım pozitif.", goster: ["th"] }
            ] }
      ]
    },
    {
      baslik: "İş ve güç: nokta çarpımın ilk kullanımı",
      kisa: "Yalnızca kuvvetin hareket yönündeki payı iş yapar: W = F·d.",
      bloklar: [
        { tip: "ornek", baslik: "Valizi çekmek", durum: "Valizi eğik kulptan 50 N kuvvetle, yatayla 30° açıyla çekip 4 m yürüyorsun. Kuvvetin yaptığı iş nedir?", sonuc: "W ≈ ==173 J== (200 · 0,866 = 173,2).",
            adimlar: [
              "W = F · d = F d cos θ",
              "W = (50)(4) cos 30°",
              "cos 30° ≈ 0,866 ⇒ W ≈ 173 J"
            ] },
        { tip: "grafik", baslik: "Eğik kulplu valiz: F = 50 N, yatayla 30° (1 kare = 1 N)", xlabel: "x (N)", ylabel: "y (N)", xmax: 50, ymax: 34.5,
            ogeler: [
              { id: "F", tip: "ok", renk: 0, from: [1, 1], to: [44.3, 26] },
              { id: "tF", tip: "yazi", x: 20, y: 17.5, metin: "F = 50 N", hiza: "end" },
              { id: "cx", tip: "ok", renk: 1, from: [1, 1], to: [44.3, 1], gizli: true },
              { id: "tx", tip: "yazi", x: 22, y: 3.6, metin: "43,3 N: iş yapar", gizli: true },
              { id: "cy", tip: "ok", renk: 3, from: [44.3, 1], to: [44.3, 26], gizli: true },
              { id: "ty", tip: "yazi", x: 45.5, y: 13.5, metin: "25 N: iş yapmaz", hiza: "end", gizli: true }
            ],
            durumlar: [
              { metin: "Kuvvet 50 N, yer değiştirme yatay (4 m). Aralarındaki açı 30°." },
              { metin: "Yatay bileşen F cos 30° ≈ 43,3 N yer değiştirmeyle aynı doğrultuda: ==iş yapar==.", goster: ["cx", "tx"] },
              { metin: "Dikey bileşen F sin 30° = 25 N yer değiştirmeye diktir: ==iş yapmaz== (W = 0).", goster: ["cy", "ty"] }
            ] },
        { tip: "formul", parcalar: [{ t: "W = F · d", alt: "iş (Unit 3)" }, "ve", { t: "P = F · v", alt: "güç" }], aciklama: "İkisi de nokta çarpım: sonuç skalerdir." }
      ]
    },
    {
      baslik: "Çapraz çarpım: büyüklük ve sağ el kuralı",
      kisa: "|A×B| = AB sinθ; yönü ikisine de dik ve sağ el kuralıyla bulunur.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "✖️", terim: "Cross product", tr: "çapraz çarpım (vektör çarpımı)", tanim: "A × B bir vektördür (*vector product*). Büyüklüğü AB sin θ, yönü A ve B'nin oluşturduğu düzleme diktir.", ornek: "A = 5, B = 4, θ = 30°: |A × B| = 10." },
              { ikon: "🖐️", terim: "Right-hand rule", tr: "sağ el kuralı", tanim: "Parmaklarını A'dan B'ye kıvırırsan başparmak A × B yönünü gösterir.", ornek: "x'ten y'ye kıvırırsan başparmak +z'yi gösterir." },
              { ikon: "🚪", terim: "Torque", tr: "tork", tanim: "τ = r × F: kuvvetin döndürme etkisi. Kapıyı menteşeden uzakta ve kapıya dik itince en büyüktür (τ = rF sin θ).", ornek: "Menteşeden 0,8 m uzakta 10 N dik itme: τ = 8 N·m." }
            ] },
        { tip: "grafik", baslik: "|A × B| = AB sin θ: paralelkenarın alanı (A = 5, B = 4)", xlabel: "x", ylabel: "y", xmax: 11, ymax: 7.6,
            ogeler: [
              { id: "P", tip: "alan", renk: 2, noktalar: [[1, 1], [6, 1], [6, 5], [1, 5]] },
              { id: "A", tip: "ok", renk: 0, from: [1, 1], to: [6, 1] },
              { id: "tA", tip: "yazi", x: 3.5, y: 0.45, metin: "A = 5" },
              { id: "B", tip: "ok", renk: 1, from: [1, 1], to: [1, 5] },
              { id: "th", tip: "yazi", x: 10.8, y: 7.2, metin: "θ = 90°", hiza: "end" },
              { id: "al", tip: "yazi", x: 10.8, y: 6.4, metin: "|A×B| = 20", hiza: "end" }
            ],
            durumlar: [
              { metin: "θ = 90°: paralelkenar dikdörtgen. |A × B| = 5 · 4 · sin 90° = ==20==, dikte en büyük." },
              { metin: "θ = 30°: yassılaşır. |A × B| = 5 · 4 · 0,5 = ==10==.", set: { P: { noktalar: [[1, 1], [6, 1], [9.464, 3], [4.464, 3]] }, B: { to: [4.464, 3] }, al: { metin: "|A×B| = 10" }, th: { metin: "θ = 30°" } } },
              { metin: "θ = 0°: paralel vektörler, alan kalmaz. |A × B| = ==0==.", set: { P: { noktalar: [[1, 1], [6, 1], [10, 1], [5, 1]] }, B: { to: [5, 1] }, al: { metin: "|A×B| = 0" }, th: { metin: "θ = 0°" } } }
            ] },
        { tip: "adimlar", baslik: "Sağ el kuralı",
            adimlar: [
              { baslik: "Uzat", metin: "Parmaklarını A yönüne uzat." },
              { baslik: "Kıvır", metin: "A'dan B'ye doğru, kısa yoldan kıvır." },
              { baslik: "Oku", metin: "Başparmak A × B yönünü gösterir." },
              { baslik: "Sırayı çevir", metin: "B × A = −A × B: başparmak ters yönü gösterir." }
            ] },
        { tip: "tuzak", metin: "Nokta çarpım cos, çapraz çarpım sin kullanır.", yanlis: "Paralel vektörlerin çapraz çarpımı en büyüktür ve cos ile hesaplanır.", dogru: "Çapraz çarpım sin: paralelde 0, dikte en büyük. Nokta çarpım cos: dikte 0, paralelde en büyük." }
      ]
    },
    {
      baslik: "î, ĵ, k̂ döngüsü",
      kisa: "İleri giderken artı, geri giderken eksi; kendisiyle çarpım sıfır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "➡️", baslik: "İleri: î → ĵ → k̂ → î", maddeler: ["Sonuç artı", "Diziyi iki kez yaz (î ĵ k̂ î ĵ k̂) ve soldan sağa oku"] }, sag: { ikon: "⬅️", baslik: "Geri: k̂ → ĵ → î", maddeler: ["Sonuç eksi", "Sağdan sola okurken işaret döner"] },
            oyun: [
              { metin: "î × ĵ", cevap: "sol", neden: "İleri: = k̂." },
              { metin: "ĵ × k̂", cevap: "sol", neden: "İleri: = î." },
              { metin: "ĵ × î", cevap: "sag", neden: "Geri: = −k̂ (sıra değişti, işaret döndü)." },
              { metin: "k̂ × î", cevap: "sol", neden: "Döngü başa sarar, ileri: = ĵ." },
              { metin: "î × k̂", cevap: "sag", neden: "Geri: = −ĵ." }
            ] },
        { tip: "tablo", baslik: "Çapraz çarpım tablosu (satır × sütun)", head: ["×", "î", "ĵ", "k̂"], not: "Köşegen sıfır: bir vektörün kendisiyle çapraz çarpımı 0'dır.",
            rows: [
              ["î", "0", "k̂", "−ĵ"],
              ["ĵ", "−k̂", "0", "î"],
              ["k̂", "ĵ", "−î", "0"]
            ] },
        { tip: "ornek", baslik: "(2î) × (3ĵ)", durum: "Katsayıları çarp, birim vektörleri döngüden oku.", sonuc: "(2î) × (3ĵ) = ==6k̂==.",
            adimlar: [
              "Sayılar: 2 · 3 = 6",
              "Birim vektörler: î × ĵ = k̂"
            ] }
      ]
    },
    {
      baslik: "AP örneği: r·F ve r×F",
      kisa: "Nokta çarpım sayı verir; çapraz çarpım x y düzlemine dik, z yönündedir.",
      bloklar: [
        { tip: "ornek", baslik: "r = 2î m, F = 3î + 4ĵ N", durum: "r · F ve r × F nedir?", sonuc: "r · F = ==6 N·m==; r × F = ==8k̂ N·m==.",
            adimlar: [
              "r · F = (2)(3) + (0)(4) = 6 N·m",
              "r × F = 2î × 3î + 2î × 4ĵ",
              "î × î = 0 ⇒ ilk terim 0",
              "2î × 4ĵ = 8k̂",
              "Sonuç, iki vektörün durduğu xy düzlemine dik: +z yönü"
            ] },
        { tip: "grafik", baslik: "r = 2î ve F = 3î + 4ĵ (xy düzlemi; 1 kare = 1 birim)", xlabel: "x", ylabel: "y", xmax: 8, ymax: 5.5,
            ogeler: [
              { id: "P", tip: "alan", renk: 2, noktalar: [[1, 1], [3, 1], [6, 5], [4, 5]], gizli: true },
              { id: "r", tip: "ok", renk: 0, from: [1, 1], to: [3, 1] },
              { id: "tr", tip: "yazi", x: 2, y: 0.45, metin: "r = 2î" },
              { id: "F", tip: "ok", renk: 1, from: [1, 1], to: [4, 5] },
              { id: "tF", tip: "yazi", x: 2.3, y: 3.9, metin: "F = 3î + 4ĵ", hiza: "end" },
              { id: "d", tip: "yazi", x: 7.9, y: 3.8, metin: "r · F = 6", hiza: "end", gizli: true },
              { id: "c", tip: "yazi", x: 7.9, y: 2.3, metin: "r × F = 8k̂  ⊙", hiza: "end", gizli: true }
            ],
            durumlar: [
              { metin: "r x yönünde 2 birim, F ise x ve y bileşenli. İkisi de xy düzleminde." },
              { metin: "Nokta çarpım: (2)(3) + (0)(4) = ==6==. r'nin y bileşeni 0 olduğundan yalnız x'ler katkı verir; sonuç bir sayı.", goster: ["d"] },
              { metin: "Çapraz çarpımın büyüklüğü paralelkenar alanı: 2 · 4 = ==8==. Yön: düzleme dik, ekrandan dışarı (+z): ==8k̂==.", goster: ["P", "c"] }
            ] }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Nokta çarpımı iki yolla hesapla; çapraz çarpımda büyüklük ve yön yeter.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sınavda gerekir", maddeler: ["Nokta çarpımı hem açıyla hem bileşenlerle hesaplamak (Unit 3: iş ve güç)", "Çapraz çarpımda büyüklük AB sin θ ve sağ el kuralıyla yön (tork, açısal momentum)", "î ĵ k̂ döngüsü"] }, sag: { ikon: "🚫", baslik: "Gerekmez", maddeler: ["3×3 determinantla uzun hesap (Unit 1'de)"] } },
        { tip: "liste", baslik: "Hızlı kontrol",
            maddeler: [
              { ikon: "📐", baslik: "Dik vektörler", metin: "Nokta çarpım 0." },
              { ikon: "↔️", baslik: "Paralel vektörler", metin: "Çapraz çarpım 0." },
              { ikon: "🔄", baslik: "Sıra değişirse", metin: "B × A = −A × B." }
            ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet",
            maddeler: [
              "Üç çarpım: c·A vektör, A·B sayı, A×B vektör.",
              "A·B = AB cos θ = A_x B_x + A_y B_y + A_z B_z; sonuç sayıdır, î ĵ ile yazılmaz.",
              "θ < 90° ise A·B artı, 90° ise 0 (dik), 90°'den büyükse eksi; cos θ = A·B / (AB).",
              "W = F·d ve P = F·v nokta çarpımdır.",
              "|A×B| = AB sin θ; yön sağ el kuralıyla; paralelde 0, dikte en büyük.",
              "î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ; geri gidince eksi; kendisiyle 0.",
              "Nokta → cos, çapraz → sin; çapraz çarpımda sıra değişirse işaret döner.",
              "r = 2î, F = 3î + 4ĵ: r·F = 6, r×F = 8k̂."
            ] }
      ]
    }
  ]
};
