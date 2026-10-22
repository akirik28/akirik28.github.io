/* Kitora not defteri · ph103 · 1.3 Hareket Denklemleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics · Unit 1) + MEB 10. sınıf Fizik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph103",
  amac: "Bu konu sabit ivmeli harekette hız, yer değiştirme, ivme ve süre arasındaki dört denklemi anlatıyor. Denklemlerin grafikten nasıl çıktığını, bilinenlere göre doğru denklemi seçmeyi ve soruyu adım adım çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Denklemler ne zaman geçerli?",
      kisa: "Dört denklem yalnızca ivmesi sabit olan harekette geçerlidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏁", terim: "Initial velocity", tr: "ilk hız (v₀)", tanim: "Zamanı saymaya başladığın andaki hız.", ornek: "Durgun halden kalkan araçta v₀ = 0." },
            { ikon: "🏆", terim: "Final velocity", tr: "son hız (v)", tanim: "t süre sonraki hız.", ornek: "Fren bitince araç durmuşsa v = 0." },
            { ikon: "📏", terim: "Displacement", tr: "yer değiştirme (Δx)", tanim: "t süresinde konumdaki değişim; yönü işaretle verilir.", ornek: "Araç 25 m ilerlediyse Δx = +25 m." },
            { ikon: "⏱️", terim: "Constant acceleration", tr: "sabit ivme (a)", tanim: "Hareket boyunca değişmeyen ivme. Denklemlerin tek şartı budur.", ornek: "Frende a = −5 m/s² boyunca aynı kalır." }
          ] },
        { tip: "adimlar", baslik: "Her hareket sorusunu böyle çöz", adimlar: [
            { baslik: "1 · Çiz ve yön seç", metin: "Hareketi çiz, bir yönü artı seç. O yöndeki v, a ve Δx artı; ters yöndekiler eksi olur." },
            { baslik: "2 · Bilinenleri yaz", metin: "v₀, v, a, t ve Δx'ten üçünü biliyorsun; ikisi eksik. Sınavda böyle yaz: *Given: v₀ = 0, a = 2 m/s², t = 5 s. Find: v.*" },
            { baslik: "3 · Denklemi seç", metin: "Soruda ne verilmiş ne isteniyorsa o değişkeni içermeyen denklemi al." },
            { baslik: "4 · Çöz, birimi ve yönü yaz", metin: "Sayıları yerine koy; sonucu birimiyle yaz: *The final velocity is 10 m/s.*" }
          ] }
      ]
    },
    {
      baslik: "Denklemler v–t grafiğinden çıkar",
      kisa: "Eğim ivmeyi, alan yer değiştirmeyi verir; denklemler bundan çıkar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "v", alt: "son hız (m/s)" }, "=",
            { t: "v₀", alt: "ilk hız (m/s)" }, "+",
            { t: "a", alt: "ivme (m/s²)" }, "×",
            { t: "t", alt: "süre (s)" }
          ], aciklama: "Bu, a = (v − v₀) ÷ t denkleminin düzenlenmiş hâli: eğim ivmeydi, hız ilk hızdan a·t kadar artar." },
        { tip: "grafik", baslik: "v₀ = 4 m/s, a = 2 m/s², t = 3 s", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 5, ymax: 11,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "R", tip: "alan", renk: 1, noktalar: [[0, 0], [0, 0], [0, 4], [0, 4]], gizli: true },
            { id: "T", tip: "alan", renk: 2, noktalar: [[0, 4], [0, 4], [0, 4]], gizli: true },
            { id: "L", tip: "cizgi", renk: 0, from: [0, 4], to: [3, 10], etiket: "a = 2" },
            { id: "P0", tip: "nokta", renk: 0, x: 0, y: 4, etiket: "v₀ = 4", gizli: true },
            { id: "P1", tip: "nokta", renk: 0, x: 3, y: 10, etiket: "v = 10", kilavuz: true, gizli: true },
            { id: "tR", tip: "yazi", x: 1.5, y: 2, metin: "v₀·t = 12 m", gizli: true },
            { id: "tT", tip: "yazi", x: 2.4, y: 5.4, metin: "½·a·t² = 9 m", gizli: true },
            { id: "tS", tip: "yazi", x: 4.1, y: 3, metin: "Δx = 21 m", gizli: true }
          ],
          durumlar: [
            { metin: "Araç 4 m/s ile başlıyor, ivmesi 2 m/s². Çizginin eğimi a, başlangıç noktası v₀.", goster: ["L", "P0"] },
            { metin: "3 s sonra v = v₀ + a·t = 4 + 2 × 3 = 10 m/s. ==Denklem ①==.", goster: ["P1"] },
            { metin: "Alanın birinci parçası dikdörtgen: v₀·t = 4 × 3 = 12 m.", goster: ["R", "tR"], set: { R: { noktalar: [[0, 0], [3, 0], [3, 4], [0, 4]] } } },
            { metin: "İkinci parça üçgen: ½ · (a·t) · t = ½·a·t² = ½ × 2 × 9 = 9 m.", goster: ["T", "tT"], set: { T: { noktalar: [[0, 4], [3, 4], [3, 10]] } } },
            { metin: "Toplam Δx = 12 + 9 = 21 m: Δx = v₀·t + ½·a·t² (==Denklem ②==). Yamuk olarak da (4 + 10) ÷ 2 × 3 = 21 m (==Denklem ④==).", goster: ["tS"] }
          ] },
        { tip: "formul", parcalar: [
            { t: "Δx", alt: "yer değiştirme (m)" }, "=",
            { t: "v₀·t", alt: "dikdörtgen" }, "+",
            { t: "½·a·t²", alt: "üçgen" }
          ], aciklama: "Grafikten böyle çıkıyor. Sınavda böyle yaz: *The displacement equals the area under the velocity–time graph.*" }
      ]
    },
    {
      baslik: "Dört denklem ve doğru seçim",
      kisa: "Soruda olmayan değişkeni içermeyen denklemi seç.",
      bloklar: [
        { tip: "tablo", baslik: "Sabit ivmeli hareketin dört denklemi", head: ["No", "Denklem", "İçermeyen değişken", "Ne zaman?"],
          rows: [
            ["①", "v = v₀ + a·t", "Δx", "Hız ile süre soruluyorsa"],
            ["②", "Δx = v₀·t + ½·a·t²", "v", "Yer değiştirme ile süre soruluyorsa"],
            ["③", "v² = v₀² + 2·a·Δx", "t", "Süre ne verilmiş ne isteniyorsa"],
            ["④", "Δx = ((v₀ + v) ÷ 2) · t", "a", "İvme verilmemişse"]
          ],
          not: "④ numaralı denklem, ortalama hızın (v₀ + v) ÷ 2 olmasından gelir; ==③ numaralı== denklemi ilk ikisinden t'yi yok ederek bulursun. Sınavda böyle yaz: *The time is not given, so we use v² = v₀² + 2aΔx.*" },
        { tip: "ikili", sol: { ikon: "⏱️", baslik: "Süre var", maddeler: ["Süre verilmiş ya da isteniyor", "① ② ya da ④ kullan"] },
          sag: { ikon: "🚫", baslik: "Süre yok", maddeler: ["Süre ne verilmiş ne isteniyor", "③ kullan: v² = v₀² + 2·a·Δx"] },
          oyun: [
            { metin: "Araç 20 m/s hızla gidiyor, 5 m/s² ile yavaşlıyor. Durma yolu isteniyor.", cevap: "sag", neden: "Süre yok: ③ numaralı denklem." },
            { metin: "Durgun halden 2 m/s² ile hızlanan araç 5 s'de kaç metre gider?", cevap: "sol", neden: "Süre verilmiş: ② numaralı denklem." },
            { metin: "Hız 4 m/s'den 12 m/s'e 2 s'de çıkıyor. Yer değiştirmeyi bul.", cevap: "sol", neden: "İvme yok ama süre var: ④ numaralı denklem." },
            { metin: "Top 10 m/s ile giderken 2 m/s² ile hızlanarak 25 m yol alıyor. Son hızı bul.", cevap: "sag", neden: "Süre yok: ③ ile v² = 100 + 100 = 200." }
          ] },
        { tip: "tuzak", metin: "Fren yapan araç için ivmeyi artı yazarsan sonuç yanlış çıkar.",
          yanlis: "Fren yapan araçta a = +5 m/s² yazılır.",
          dogru: "Hareket yönünü artı seçtiysen yavaşlama ==a = −5 m/s²== olur. İşaret, yön seçiminden gelir." }
      ]
    },
    {
      baslik: "Durgun halden hızlanma",
      kisa: "v₀ = 0 ise v = a·t ve Δx = ½·a·t² olur.",
      bloklar: [
        { tip: "ornek", baslik: "Servis aracının kalkışı",
          durum: "Servis aracı durgun halden kalkıyor ve a = 2 m/s² ile hızlanıyor. 5 s sonra hızı ve aldığı yol nedir?",
          adimlar: [
            "Given: v₀ = 0, a = 2 m/s², t = 5 s. Find: v ve Δx.",
            "① numaralı denklem: v = 0 + 2 × 5 = 10 m/s.",
            "② numaralı denklem: Δx = 0 + ½ × 2 × 5² = 25 m.",
            "Kontrol ④: (0 + 10) ÷ 2 × 5 = 25 m ✓."
          ],
          sonuc: "v = 10 m/s ve Δx = 25 m. Sınavda böyle yaz: *The car starts from rest, so v₀ = 0.*" },
        { tip: "tablo", baslik: "Durgun halden, a = 2 m/s²", head: ["t (s)", "v (m/s)", "Toplam yol (m)", "O saniyede alınan yol (m)"],
          rows: [["1", "2", "1", "1"], ["2", "4", "4", "3"], ["3", "6", "9", "5"], ["4", "8", "16", "7"]],
          not: "Her saniyede alınan yol ==1 : 3 : 5 : 7==; toplam yol t² ile artar (1, 4, 9, 16)." },
        { tip: "tuzak", metin: "\"3. saniyede alınan yol\" ile \"ilk 3 saniyede alınan yol\" aynı şey değildir.",
          yanlis: "3. saniyede 9 m gider.",
          dogru: "İlk 3 s'de toplam 9 m; yalnız 3. saniyede 9 − 4 = 5 m gider." }
      ]
    },
    {
      baslik: "Fren ve durma yolu",
      kisa: "Durma yolu v₀² ÷ (2·|a|)'dır; hız iki katına çıkarsa yol dört katı olur.",
      bloklar: [
        { tip: "ornek", baslik: "Okul servisi frene basıyor",
          durum: "Servis 72 km/h hızla giderken sürücü fren yapıyor, a = −4 m/s². Durma yolu ve durma süresi nedir?",
          adimlar: [
            "Birim: 72 ÷ 3,6 = 20 m/s. Given: v₀ = 20 m/s, v = 0, a = −4 m/s².",
            "Süre sorulmuyor: ③ ile 0 = 20² + 2 × (−4) × Δx → 8·Δx = 400 → Δx = 50 m.",
            "Süre: ① ile 0 = 20 − 4t → t = 5 s.",
            "Kontrol ④: (20 + 0) ÷ 2 × 5 = 50 m ✓."
          ],
          sonuc: "Durma yolu 50 m, durma süresi 5 s. Sınavda böyle yaz: *The final velocity is zero because the bus stops.*" },
        { tip: "tablo", baslik: "Durma yolu hızla hızlıca büyür (a = −5 m/s²)", head: ["Hız (km/h)", "Hız (m/s)", "Durma yolu (m)"],
          rows: [["36", "10", "10"], ["72", "20", "40"], ["108", "30", "90"]],
          not: "Hız 2 katına çıkınca yol 4 katına, 3 katına çıkınca 9 katına çıkar: Δx = v₀² ÷ 10 ile orantılı." },
        { tip: "tuzak", metin: "Trafik sorularında en sık yapılan hata, durma yolunu hızla doğru orantılı sanmaktır.",
          yanlis: "Hız 2 katına çıkarsa durma yolu da 2 katına çıkar.",
          dogru: "Durma yolu hızın ==karesiyle== artar: 10 m/s için 10 m, 20 m/s için 40 m." }
      ]
    },
    {
      baslik: "Aşamalı hareket",
      kisa: "Aşamaları ayır; bir aşamanın son hızı sonrakinin ilk hızıdır.",
      bloklar: [
        { tip: "ornek", baslik: "Metro: hızlan, sonra sabit hızla git",
          durum: "Metro durgun halden 5 s boyunca 2 m/s² ile hızlanıyor, sonra 10 s sabit hızla gidiyor. Toplam yer değiştirmesi nedir?",
          adimlar: [
            "1. aşama: v = 0 + 2 × 5 = 10 m/s; Δx₁ = ½ × 2 × 5² = 25 m.",
            "2. aşamanın ilk hızı 10 m/s ve ivme 0: Δx₂ = v·t = 10 × 10 = 100 m.",
            "Toplam: Δx = 25 + 100 = 125 m (toplam süre 15 s)."
          ],
          sonuc: "125 m. Sınavda böyle yaz: *The final velocity of the first stage is the initial velocity of the second stage.*" },
        { tip: "liste", maddeler: [
            { ikon: "🧩", baslik: "Aşamalı soruda kural", metin: "Her aşamayı ayrı çöz; denklemler yalnız ivmenin sabit olduğu aralıkta geçerlidir." },
            { ikon: "✍️", baslik: "Sınavda böyle yaz", metin: "*The acceleration changes, so we solve each stage separately.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Dört denklem yalnızca ivme sabitken geçerlidir.",
            "① v = v₀ + a·t  ② Δx = v₀·t + ½·a·t²  ③ v² = v₀² + 2·a·Δx  ④ Δx = ((v₀ + v) ÷ 2)·t",
            "Seçim: soruda ne verilmiş ne isteniyorsa o değişkeni içermeyen denklemi al (t yoksa ③).",
            "Bir yön seç: fren yapan araçta ivme eksi yazılır.",
            "Durgun halden (v₀ = 0): Δx = ½·a·t²; ardışık saniyelerde yol 1 : 3 : 5 : 7.",
            "Durma yolu v₀² ÷ (2·|a|): hız iki katına çıkarsa yol dört katına çıkar.",
            "km/h → m/s için 3,6'ya böl.",
            "Aşamalı harekette bir aşamanın son hızı sonrakinin ilk hızıdır; Given / Find ile yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Durgun halden a = 3 m/s² ile hızlanan bir motosiklet 4 s'de kaç metre yer değiştirir?",
      opts: ["12 m", "24 m", "48 m", "36 m"], a: 1,
      why: "v₀ = 0 olduğundan Δx = ½·a·t² = ½ × 3 × 16 = 24 m. En çekici yanlış C: ½'yi unutup 3 × 16 = 48 yazmak." },
    { q: "30 m/s hızla giden bir araç 5 m/s² ile yavaşlayarak duruyor. Durma yolu kaç metredir?",
      opts: ["45 m", "60 m", "90 m", "180 m"], a: 2,
      why: "Süre sorulmuyor: ③ ile 0 = 30² + 2 × (−5) × Δx → 10·Δx = 900 → Δx = 90 m. D yanlış: 2'yi unutup 900 ÷ 5 = 180 yazmak." },
    { q: "Bir top 4 m/s hızla giderken 2 m/s² ivmeyle hızlanıyor ve bu sırada 12 m yol alıyor. Topun son hızı kaç m/s'dir?",
      opts: ["8", "10", "28", "16"], a: 0,
      why: "Süre yok: ③ ile v² = 4² + 2 × 2 × 12 = 16 + 48 = 64 → v = 8 m/s. C yanlış: karesiz hesap (4 + 24)." },
    { q: "Durgun halden sabit ivmeyle hareket eden bir cisim 1. saniyede 2 m yol alıyor. 3. saniyede (yalnız o saniyede) kaç metre yol alır?",
      opts: ["6 m", "8 m", "10 m", "18 m"], a: 2,
      why: "Durgun halden ardışık saniyelerde yollar 1 : 3 : 5 oranındadır. 1. saniye 2 m ise 3. saniye 2 × 5 = 10 m. D yanlış: ilk 3 s'in toplamı 2 × 9 = 18 m." },
    { q: "Bir aracın hız-zaman grafiği şekildeki gibidir. Aracın ivmesi ve 0–4 s arasındaki yer değiştirmesi nedir?",
      fig: { type: "graph", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 6, ymax: 12,
        lines: [{ from: [0, 2], to: [4, 10] }],
        xticks: [{ v: 4, label: "4" }], yticks: [{ v: 2, label: "2" }, { v: 10, label: "10" }] },
      opts: ["a = 4 m/s², Δx = 24 m", "a = 2 m/s², Δx = 40 m", "a = 2 m/s², Δx = 8 m", "a = 2 m/s², Δx = 24 m"], a: 3,
      why: "Eğim (10 − 2) ÷ 4 = 2 m/s²; alan (2 + 10) ÷ 2 × 4 = 24 m. A eğimi yanlış alır, B son hızla (10 × 4) hesap yapar, C ilk hızla (2 × 4)." }
  ]
};
