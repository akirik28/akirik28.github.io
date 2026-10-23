/* Kitora not defteri · cb602 · 6.2–6.3 Riemann Toplamları ve Belirli İntegral Gösterimi
   Kaynak: AP Calculus BC CED, Topic 6.2 ve 6.3. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb602",
  amac: "Bu konu *Riemann sum* yani Riemann toplamlarını ve *definite integral* gösterimini anlatıyor: eğri altındaki alanı dikdörtgen ya da yamuklarla yaklaşık bulacak, dikdörtgen sayısını sonsuza götürünce belirli integrale ulaşacaksın.",
  bolumler: [
    {
      baslik: "Riemann toplamı: alanı dikdörtgenlerle bulmak",
      kisa: "Aralığı böl, her parçada dikdörtgen kur, alanlarını topla.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Partition", tr: "bölüntü", tanim: "[a, b] aralığını alt aralıklara bölen noktaların listesi. Alt aralıklar eşit genişlikte olmak zorunda değildir.", ornek: "[0, 4] aralığını 0, 1, 2, 3, 4 noktalarıyla 4 parçaya böldük." },
            { ikon: "▮", terim: "Subinterval", tr: "alt aralık", tanim: "Bölüntünün komşu iki noktası arasındaki parça. Dikdörtgenin tabanı budur; genişliği Δx.", ornek: "Eşit bölmede Δx = (b − a)/n." },
            { ikon: "Σ", terim: "Riemann sum", tr: "Riemann toplamı", tanim: "Her alt aralıkta bir noktadaki fonksiyon değerini alt aralığın genişliğiyle çarpıp bütün çarpımları toplamak.", ornek: "f(x₁)·Δx + f(x₂)·Δx + … + f(xₙ)·Δx." }
          ] },
        { tip: "grafik", baslik: "f(x) = x² altındaki alan, [0, 4] aralığında sol toplamlar", xlabel: "x", ylabel: "y", xmax: 4.5, ymax: 18,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, etiket: "x²", noktalar: [[0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4], [2.25, 5.0625], [2.5, 6.25], [2.75, 7.5625], [3, 9], [3.25, 10.5625], [3.5, 12.25], [3.75, 14.0625], [4, 16]] },
            { id: "L2_0", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 0], [2, 0], [2, 0]] },
            { id: "L2_1", tip: "alan", renk: 1, gizli: true, noktalar: [[2, 0], [2, 4], [4, 4], [4, 0]] },
            { id: "L4_0", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 0], [1, 0], [1, 0]] },
            { id: "L4_1", tip: "alan", renk: 1, gizli: true, noktalar: [[1, 0], [1, 1], [2, 1], [2, 0]] },
            { id: "L4_2", tip: "alan", renk: 1, gizli: true, noktalar: [[2, 0], [2, 4], [3, 4], [3, 0]] },
            { id: "L4_3", tip: "alan", renk: 1, gizli: true, noktalar: [[3, 0], [3, 9], [4, 9], [4, 0]] },
            { id: "L8_0", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 0], [0.5, 0], [0.5, 0]] },
            { id: "L8_1", tip: "alan", renk: 1, gizli: true, noktalar: [[0.5, 0], [0.5, 0.25], [1, 0.25], [1, 0]] },
            { id: "L8_2", tip: "alan", renk: 1, gizli: true, noktalar: [[1, 0], [1, 1], [1.5, 1], [1.5, 0]] },
            { id: "L8_3", tip: "alan", renk: 1, gizli: true, noktalar: [[1.5, 0], [1.5, 2.25], [2, 2.25], [2, 0]] },
            { id: "L8_4", tip: "alan", renk: 1, gizli: true, noktalar: [[2, 0], [2, 4], [2.5, 4], [2.5, 0]] },
            { id: "L8_5", tip: "alan", renk: 1, gizli: true, noktalar: [[2.5, 0], [2.5, 6.25], [3, 6.25], [3, 0]] },
            { id: "L8_6", tip: "alan", renk: 1, gizli: true, noktalar: [[3, 0], [3, 9], [3.5, 9], [3.5, 0]] },
            { id: "L8_7", tip: "alan", renk: 1, gizli: true, noktalar: [[3.5, 0], [3.5, 12.25], [4, 12.25], [4, 0]] },
            { id: "L16_0", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 0], [0.25, 0], [0.25, 0]] },
            { id: "L16_1", tip: "alan", renk: 1, gizli: true, noktalar: [[0.25, 0], [0.25, 0.0625], [0.5, 0.0625], [0.5, 0]] },
            { id: "L16_2", tip: "alan", renk: 1, gizli: true, noktalar: [[0.5, 0], [0.5, 0.25], [0.75, 0.25], [0.75, 0]] },
            { id: "L16_3", tip: "alan", renk: 1, gizli: true, noktalar: [[0.75, 0], [0.75, 0.5625], [1, 0.5625], [1, 0]] },
            { id: "L16_4", tip: "alan", renk: 1, gizli: true, noktalar: [[1, 0], [1, 1], [1.25, 1], [1.25, 0]] },
            { id: "L16_5", tip: "alan", renk: 1, gizli: true, noktalar: [[1.25, 0], [1.25, 1.5625], [1.5, 1.5625], [1.5, 0]] },
            { id: "L16_6", tip: "alan", renk: 1, gizli: true, noktalar: [[1.5, 0], [1.5, 2.25], [1.75, 2.25], [1.75, 0]] },
            { id: "L16_7", tip: "alan", renk: 1, gizli: true, noktalar: [[1.75, 0], [1.75, 3.0625], [2, 3.0625], [2, 0]] },
            { id: "L16_8", tip: "alan", renk: 1, gizli: true, noktalar: [[2, 0], [2, 4], [2.25, 4], [2.25, 0]] },
            { id: "L16_9", tip: "alan", renk: 1, gizli: true, noktalar: [[2.25, 0], [2.25, 5.0625], [2.5, 5.0625], [2.5, 0]] },
            { id: "L16_10", tip: "alan", renk: 1, gizli: true, noktalar: [[2.5, 0], [2.5, 6.25], [2.75, 6.25], [2.75, 0]] },
            { id: "L16_11", tip: "alan", renk: 1, gizli: true, noktalar: [[2.75, 0], [2.75, 7.5625], [3, 7.5625], [3, 0]] },
            { id: "L16_12", tip: "alan", renk: 1, gizli: true, noktalar: [[3, 0], [3, 9], [3.25, 9], [3.25, 0]] },
            { id: "L16_13", tip: "alan", renk: 1, gizli: true, noktalar: [[3.25, 0], [3.25, 10.5625], [3.5, 10.5625], [3.5, 0]] },
            { id: "L16_14", tip: "alan", renk: 1, gizli: true, noktalar: [[3.5, 0], [3.5, 12.25], [3.75, 12.25], [3.75, 0]] },
            { id: "L16_15", tip: "alan", renk: 1, gizli: true, noktalar: [[3.75, 0], [3.75, 14.0625], [4, 14.0625], [4, 0]] },
            { id: "R16_0", tip: "alan", renk: 2, gizli: true, noktalar: [[0, 0], [0, 0.0625], [0.25, 0.0625], [0.25, 0]] },
            { id: "R16_1", tip: "alan", renk: 2, gizli: true, noktalar: [[0.25, 0], [0.25, 0.25], [0.5, 0.25], [0.5, 0]] },
            { id: "R16_2", tip: "alan", renk: 2, gizli: true, noktalar: [[0.5, 0], [0.5, 0.5625], [0.75, 0.5625], [0.75, 0]] },
            { id: "R16_3", tip: "alan", renk: 2, gizli: true, noktalar: [[0.75, 0], [0.75, 1], [1, 1], [1, 0]] },
            { id: "R16_4", tip: "alan", renk: 2, gizli: true, noktalar: [[1, 0], [1, 1.5625], [1.25, 1.5625], [1.25, 0]] },
            { id: "R16_5", tip: "alan", renk: 2, gizli: true, noktalar: [[1.25, 0], [1.25, 2.25], [1.5, 2.25], [1.5, 0]] },
            { id: "R16_6", tip: "alan", renk: 2, gizli: true, noktalar: [[1.5, 0], [1.5, 3.0625], [1.75, 3.0625], [1.75, 0]] },
            { id: "R16_7", tip: "alan", renk: 2, gizli: true, noktalar: [[1.75, 0], [1.75, 4], [2, 4], [2, 0]] },
            { id: "R16_8", tip: "alan", renk: 2, gizli: true, noktalar: [[2, 0], [2, 5.0625], [2.25, 5.0625], [2.25, 0]] },
            { id: "R16_9", tip: "alan", renk: 2, gizli: true, noktalar: [[2.25, 0], [2.25, 6.25], [2.5, 6.25], [2.5, 0]] },
            { id: "R16_10", tip: "alan", renk: 2, gizli: true, noktalar: [[2.5, 0], [2.5, 7.5625], [2.75, 7.5625], [2.75, 0]] },
            { id: "R16_11", tip: "alan", renk: 2, gizli: true, noktalar: [[2.75, 0], [2.75, 9], [3, 9], [3, 0]] },
            { id: "R16_12", tip: "alan", renk: 2, gizli: true, noktalar: [[3, 0], [3, 10.5625], [3.25, 10.5625], [3.25, 0]] },
            { id: "R16_13", tip: "alan", renk: 2, gizli: true, noktalar: [[3.25, 0], [3.25, 12.25], [3.5, 12.25], [3.5, 0]] },
            { id: "R16_14", tip: "alan", renk: 2, gizli: true, noktalar: [[3.5, 0], [3.5, 14.0625], [3.75, 14.0625], [3.75, 0]] },
            { id: "R16_15", tip: "alan", renk: 2, gizli: true, noktalar: [[3.75, 0], [3.75, 16], [4, 16], [4, 0]] }
          ],
          durumlar: [
            { metin: "Gerçek alan ∫₀⁴ x² dx = 64/3 ≈ 21,33. Şimdi dikdörtgenlerle yaklaşalım." },
            { metin: "n = 2, Δx = 2: yükseklikler f(0) = 0 ve f(2) = 4. Toplam (0 + 4) · 2 = 8. Çok eksik.", goster: ["L2_0", "L2_1"] },
            { metin: "n = 4, Δx = 1: (0 + 1 + 4 + 9) · 1 = 14.", gizle: ["L2_0", "L2_1"], goster: ["L4_0", "L4_1", "L4_2", "L4_3"] },
            { metin: "n = 8, Δx = 0,5: toplam 17,5. Dikdörtgenler eğriye yaklaşıyor.", gizle: ["L4_0", "L4_1", "L4_2", "L4_3"], goster: ["L8_0", "L8_1", "L8_2", "L8_3", "L8_4", "L8_5", "L8_6", "L8_7"] },
            { metin: "n = 16, Δx = 0,25: toplam 19,375. Eğri artan olduğu için sol toplam hep eksik kalır.", gizle: ["L8_0", "L8_1", "L8_2", "L8_3", "L8_4", "L8_5", "L8_6", "L8_7"], goster: ["L16_0", "L16_1", "L16_2", "L16_3", "L16_4", "L16_5", "L16_6", "L16_7", "L16_8", "L16_9", "L16_10", "L16_11", "L16_12", "L16_13", "L16_14", "L16_15"] },
            { metin: "Aynı n = 16 için sağ toplam: 23,375, hep fazla. Sol 19,375 ≤ 21,33 ≤ sağ 23,375; n büyüdükçe ikisi de 64/3'e sıkışır.", gizle: ["L16_0", "L16_1", "L16_2", "L16_3", "L16_4", "L16_5", "L16_6", "L16_7", "L16_8", "L16_9", "L16_10", "L16_11", "L16_12", "L16_13", "L16_14", "L16_15"], goster: ["R16_0", "R16_1", "R16_2", "R16_3", "R16_4", "R16_5", "R16_6", "R16_7", "R16_8", "R16_9", "R16_10", "R16_11", "R16_12", "R16_13", "R16_14", "R16_15"] }
          ] },
        { tip: "formul", parcalar: [{ t: "Riemann toplamı", alt: "alan tahmini" }, "=", { t: "f(x₁)Δx + … + f(xₙ)Δx", alt: "her dikdörtgenin alanı" }],
          aciklama: "Eşit genişlikte bölünüyorsa Δx = (b − a)/n. Alt aralıklar eşit değilse her dikdörtgenin genişliğini ayrı ayrı yaz." }
      ]
    },
    {
      baslik: "Sol, sağ, orta nokta ve yamuk",
      kisa: "Yükseklik sol uçtan, sağ uçtan, ortadan alınır; yamukta iki uç ortalanır.",
      bloklar: [
        { tip: "grafik", baslik: "f(x) = x² için dört yöntem, [0, 4], n = 4", xlabel: "x", ylabel: "y", xmax: 4.5, ymax: 18,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, etiket: "x²", noktalar: [[0, 0], [0.25, 0.0625], [0.5, 0.25], [0.75, 0.5625], [1, 1], [1.25, 1.5625], [1.5, 2.25], [1.75, 3.0625], [2, 4], [2.25, 5.0625], [2.5, 6.25], [2.75, 7.5625], [3, 9], [3.25, 10.5625], [3.5, 12.25], [3.75, 14.0625], [4, 16]] },
            { id: "A_0", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 0], [1, 0], [1, 0]] },
            { id: "A_1", tip: "alan", renk: 1, gizli: true, noktalar: [[1, 0], [1, 1], [2, 1], [2, 0]] },
            { id: "A_2", tip: "alan", renk: 1, gizli: true, noktalar: [[2, 0], [2, 4], [3, 4], [3, 0]] },
            { id: "A_3", tip: "alan", renk: 1, gizli: true, noktalar: [[3, 0], [3, 9], [4, 9], [4, 0]] },
            { id: "B_0", tip: "alan", renk: 2, gizli: true, noktalar: [[0, 0], [0, 1], [1, 1], [1, 0]] },
            { id: "B_1", tip: "alan", renk: 2, gizli: true, noktalar: [[1, 0], [1, 4], [2, 4], [2, 0]] },
            { id: "B_2", tip: "alan", renk: 2, gizli: true, noktalar: [[2, 0], [2, 9], [3, 9], [3, 0]] },
            { id: "B_3", tip: "alan", renk: 2, gizli: true, noktalar: [[3, 0], [3, 16], [4, 16], [4, 0]] },
            { id: "C_0", tip: "alan", renk: 3, gizli: true, noktalar: [[0, 0], [0, 0.25], [1, 0.25], [1, 0]] },
            { id: "C_1", tip: "alan", renk: 3, gizli: true, noktalar: [[1, 0], [1, 2.25], [2, 2.25], [2, 0]] },
            { id: "C_2", tip: "alan", renk: 3, gizli: true, noktalar: [[2, 0], [2, 6.25], [3, 6.25], [3, 0]] },
            { id: "C_3", tip: "alan", renk: 3, gizli: true, noktalar: [[3, 0], [3, 12.25], [4, 12.25], [4, 0]] },
            { id: "D_0", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 0], [1, 1], [1, 0]] },
            { id: "D_1", tip: "alan", renk: 1, gizli: true, noktalar: [[1, 0], [1, 1], [2, 4], [2, 0]] },
            { id: "D_2", tip: "alan", renk: 1, gizli: true, noktalar: [[2, 0], [2, 4], [3, 9], [3, 0]] },
            { id: "D_3", tip: "alan", renk: 1, gizli: true, noktalar: [[3, 0], [3, 9], [4, 16], [4, 0]] }
          ],
          durumlar: [
            { metin: "Gerçek değer 64/3 ≈ 21,33. Dört alt aralık, her biri 1 genişliğinde." },
            { metin: "Sol toplam: yükseklikler f(0), f(1), f(2), f(3). 0 + 1 + 4 + 9 = 14. Eksik tahmin.", goster: ["A_0", "A_1", "A_2", "A_3"] },
            { metin: "Sağ toplam: f(1), f(2), f(3), f(4). 1 + 4 + 9 + 16 = 30. Fazla tahmin.", gizle: ["A_0", "A_1", "A_2", "A_3"], goster: ["B_0", "B_1", "B_2", "B_3"] },
            { metin: "Orta nokta toplamı: f(0,5) + f(1,5) + f(2,5) + f(3,5) = 0,25 + 2,25 + 6,25 + 12,25 = 21. Gerçeğe en yakın, biraz eksik.", gizle: ["B_0", "B_1", "B_2", "B_3"], goster: ["C_0", "C_1", "C_2", "C_3"] },
            { metin: "Yamuk toplamı: ½(0 + 2·1 + 2·4 + 2·9 + 16) = ½ · 44 = 22. Biraz fazla.", gizle: ["C_0", "C_1", "C_2", "C_3"], goster: ["D_0", "D_1", "D_2", "D_3"] }
          ] },
        { tip: "tablo", baslik: "x² için n = 4 sonuçları (gerçek: 21,33)", head: ["Yöntem", "Yükseklik nereden?", "Toplam", "Gerçeğe göre"],
          rows: [
            ["Sol (*left*)", "Alt aralığın sol ucu", "14", "Eksik"],
            ["Sağ (*right*)", "Alt aralığın sağ ucu", "30", "Fazla"],
            ["Orta nokta (*midpoint*)", "Alt aralığın ortası", "21", "Eksik"],
            ["Yamuk (*trapezoidal*)", "İki uç değerin ortalaması", "22", "Fazla"]
          ], vurgu: 2, not: "Orta nokta ve yamuk, sol ve sağdan genellikle çok daha iyi tahmin verir." },
        { tip: "formul", parcalar: [{ t: "T", alt: "yamuk toplamı" }, "=", { t: "(Δx/2)", alt: "genişliğin yarısı" }, "×", { t: "[f(x₀) + 2f(x₁) + … + 2f(xₙ₋₁) + f(xₙ)]", alt: "uçlar bir kez, ortadakiler iki kez" }],
          aciklama: "Eşit genişlikte yamuk toplamı, sol ve sağ toplamın ortalamasıdır: (14 + 30)/2 = 22." }
      ]
    },
    {
      baslik: "Eşit olmayan aralıklar: tablodan hesap",
      kisa: "Aralıklar eşit değilse her çarpımda o aralığın kendi genişliğini kullan.",
      bloklar: [
        { tip: "tablo", baslik: "Bir bisikletçinin hızı", head: ["t (s)", "0", "2", "5", "9"], rows: [["v (m/s)", "3", "5", "6", "4"]], not: "Alt aralıkların genişlikleri 2, 3 ve 4 saniye: eşit değil." },
        { tip: "ornek", baslik: "Üç tahmin, tek tablo", durum: "Tablodaki hız verisiyle 0–9 saniyede gidilen yolu sol, sağ ve yamuk toplamıyla tahmin et.",
          adimlar: [
            "Genişlikler: 2, 3, 4.",
            "Sol: 3·2 + 5·3 + 6·4 = 6 + 15 + 24 = 45 m.",
            "Sağ: 5·2 + 6·3 + 4·4 = 10 + 18 + 16 = 44 m.",
            "Yamuk: (3 + 5)/2 · 2 + (5 + 6)/2 · 3 + (6 + 4)/2 · 4 = 8 + 16,5 + 20 = 44,5 m. (Sol ile sağın ortalaması.)",
            "Orta nokta toplamı için alt aralıkların ortasındaki hızlar tabloda yok, bu yüzden kurulamaz."
          ], sonuc: "Sol 45 m, sağ 44 m, yamuk 44,5 m." },
        { tip: "tuzak", metin: "Tablo verisiyle çalışırken genişliği \"toplam uzunluk ÷ parça sayısı\" diye ortak almak çok yapılan hatadır.", yanlis: "Δx = 9/3 = 3 olduğundan sol toplam (3 + 5 + 6) · 3 = 42.", dogru: "Alt aralıklar 2, 3, 4 olduğu için her hızı kendi genişliğiyle çarp: 45." }
      ]
    },
    {
      baslik: "Fazla mı eksik mi? Tahminin yönü",
      kisa: "Artma-azalma sol ve sağın, içbükeylik yamuk ve orta noktanın yönünü belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Hangi durumda hangi yöne yanılır?", head: ["Yöntem", "Fazla tahmin (*overestimate*)", "Eksik tahmin (*underestimate*)"],
          rows: [
            ["Sol toplam", "f azalan", "f artan"],
            ["Sağ toplam", "f artan", "f azalan"],
            ["Yamuk toplamı", "f içbükey yukarı (*concave up*)", "f içbükey aşağı (*concave down*)"],
            ["Orta nokta toplamı", "f içbükey aşağı", "f içbükey yukarı"]
          ], not: "Sol ve sağ için f'nin aralıkta hep artan ya da hep azalan olması gerekir." },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "*Overestimate*", maddeler: ["Tahmin gerçekten büyük", "Dikdörtgenler eğriden taşar"] },
          sag: { ikon: "⬇️", baslik: "*Underestimate*", maddeler: ["Tahmin gerçekten küçük", "Dikdörtgenler eğrinin altında kalır"] },
          oyun: [
            { metin: "f(x) = x² (artan, içbükey yukarı) için sol toplam.", cevap: "sag", neden: "Artan fonksiyonda sol uç düşüktür: eksik." },
            { metin: "f(x) = x² için sağ toplam.", cevap: "sol", neden: "Artan fonksiyonda sağ uç yüksektir: fazla." },
            { metin: "f(x) = x² için yamuk toplamı.", cevap: "sol", neden: "İçbükey yukarı eğride kirişler eğrinin üstünde kalır: fazla." },
            { metin: "f(x) = x² için orta nokta toplamı.", cevap: "sag", neden: "İçbükey yukarıda orta nokta toplamı eksik kalır." },
            { metin: "f(x) = √x (artan, içbükey aşağı) için yamuk toplamı.", cevap: "sag", neden: "İçbükey aşağıda kirişler eğrinin altında kalır: eksik." }
          ] },
        { tip: "tuzak", metin: "Yamuk ve orta nokta aynı yönde yanılmaz; biri fazlaysa öteki eksiktir. \"Sağ her zaman fazladır\" kuralı da yalnızca artan fonksiyonlar için doğrudur.", yanlis: "Sağ toplam her zaman fazla tahmin eder; yamuk ve orta nokta da aynı yöne sapar.", dogru: "Sağ toplam, f azalansa eksik tahmin eder. Yamuk ve orta nokta içbükeyliğe bakar ve zıt yönlere sapar." }
      ]
    },
    {
      baslik: "Toplam sembolü Σ",
      kisa: "Σ uzun toplamı kısaltır; sol toplam i = 0'dan, sağ toplam i = 1'den başlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "Σ", terim: "Summation notation", tr: "toplam gösterimi", tanim: "Σ işareti, altındaki indis başlangıcından üstündeki bitişe kadar terimleri toplar. i sayaç (*index*) görevi görür.", ornek: "Σ (i = 1…4) i² = 1 + 4 + 9 + 16 = 30." }
          ] },
        { tip: "formul", parcalar: [{ t: "Sol toplam", alt: "i = 0 … n − 1" }, "=", { t: "Σ f(a + iΔx) · Δx", alt: "i = 0'dan n − 1'e" }, "ve", { t: "Sağ toplam", alt: "i = 1 … n" }, "=", { t: "Σ f(a + iΔx) · Δx", alt: "i = 1'den n'ye" }],
          aciklama: "Her ikisinde Δx = (b − a)/n. Fark yalnızca indisin başlangıç ve bitişidir: sol ucu 1. dikdörtgen, sağ ucu n. dikdörtgen kapsar." },
        { tip: "ornek", baslik: "x² için sağ ve sol toplamı Σ ile yaz", durum: "[0, 4] aralığı, n = 4, Δx = 1, f(x) = x².",
          adimlar: [
            "x noktaları: a + iΔx = 0 + i · 1 = i.",
            "Sağ: Σ (i = 1…4) i² · 1 = 1 + 4 + 9 + 16 = 30.",
            "Sol: Σ (i = 0…3) i² · 1 = 0 + 1 + 4 + 9 = 14.",
            "Önceki grafikteki 30 ve 14 ile aynı sonuç."
          ], sonuc: "Sağ toplam 30, sol toplam 14." }
      ]
    },
    {
      baslik: "Limit ve belirli integral",
      kisa: "n sonsuza giderken Riemann toplamlarının limiti, belirli integraldir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "∫ₐᵇ f(x) dx", alt: "belirli integral" }, "=", { t: "lim (n→∞) Σ f(xᵢ) Δx", alt: "dikdörtgen sayısı sonsuza giderken" }],
          aciklama: "f [a, b] üzerinde sürekliyse bu limit vardır. f ≥ 0 ise sonuç eğrinin altındaki alandır; f negatif olabiliyorsa işaretli alandır (üstü artı, altı eksi)." },
        { tip: "kavramlar", kartlar: [
            { ikon: "∫", terim: "Definite integral", tr: "belirli integral", tanim: "Riemann toplamlarının limiti olan sayı. Alt ve üst sınırı vardır, sonucu bir sayıdır.", ornek: "∫₀⁴ x² dx = 64/3." },
            { ikon: "🔚", terim: "Limits of integration", tr: "integral sınırları", tanim: "∫'nin altındaki a ve üstündeki b: hangi aralığın toplandığını söyler.", ornek: "∫₁³ için sınırlar 1 ve 3." },
            { ikon: "🧮", terim: "Integrand", tr: "integrant", tanim: "∫ ile dx arasında kalan fonksiyon. dx hangi değişkene göre toplandığını gösterir.", ornek: "∫ x² dx ifadesinde integrant x²." }
          ] },
        { tip: "ornek", baslik: "Limiti integrale çevir", durum: "lim (n→∞) Σ (i = 1…n) (1 + 2i/n)² · (2/n) ifadesini belirli integral olarak yaz.",
          adimlar: [
            "Δx = 2/n olduğuna göre b − a = 2.",
            "x noktaları 1 + 2i/n = a + iΔx olduğundan a = 1, b = 3.",
            "Parantezin içi \"x\" yerine geçmiş: f(x) = x².",
            "Integral: ∫₁³ x² dx."
          ], sonuc: "∫₁³ x² dx" },
        { tip: "tuzak", metin: "Belirli integral bir **sayıdır**; içindeki değişken yalnızca kuklasıdır. dx de süs değildir: hem değişkeni hem Δx'i temsil eder.", yanlis: "∫₁³ x² dx ile ∫₁³ t² dt farklı sonuç verir; dx'i yazmasam da olur.", dogru: "Sınırlar aynıysa ikisi de aynı sayıdır. dx, integralin parçasıdır ve Δx yerine geçer." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Riemann toplamı: f(xᵢ)·Δx çarpımlarının toplamı; eşit bölmede Δx = (b − a)/n.",
            "Yükseklik sol uçtan, sağ uçtan ya da ortadan alınır; yamukta iki uç ortalanır.",
            "Aralıklar eşit değilse her dikdörtgenin genişliği kendisine aittir; tabloda orta nokta kurulamaz.",
            "Artan f: sol eksik, sağ fazla. Azalan f: tersi.",
            "İçbükey yukarı: yamuk fazla, orta nokta eksik. İçbükey aşağı: yamuk eksik, orta nokta fazla.",
            "Σ gösterimi: sol toplam i = 0…n−1, sağ toplam i = 1…n.",
            "∫ₐᵇ f(x)dx = lim (n→∞) Σ f(xᵢ)Δx; f sürekliyse bu limit vardır.",
            "Bir limiti integrale çevirirken Δx = (b − a)/n ve xᵢ = a + iΔx eşleşmesini kullan.",
            "Belirli integral bir sayıdır; f ≥ 0 ise alanı, genelde işaretli alanı verir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloda bir arabanın hızı verilmiştir. Sağ Riemann toplamı kullanılarak 0–6 saniyede gidilen yol kaç metre olarak tahmin edilir?",
      fig: { type: "table", head: ["t (s)", "0", "2", "4", "6"], rows: [["v (m/s)", "5", "7", "8", "6"]], caption: "Bir arabanın hızı" },
      opts: ["40 m", "41 m", "42 m", "52 m"], a: 2,
      why: "Üç alt aralık, her biri 2 saniye. Sağ uçlardaki hızlar 7, 8, 6: (7 + 8 + 6) · 2 = 42. 40 sol toplamdır, 41 yamuk toplamı, 52 ise dört değeri de toplamaktır (5 + 7 + 8 + 6 = 26, 26 · 2)." },
    { q: "f, [1, 5] aralığında artan ve içbükey aşağı (concave down) bir fonksiyondur. n = 4 alt aralıkla kurulan Riemann toplamları için hangisi doğrudur?",
      opts: ["Sol: eksik, sağ: fazla, yamuk: fazla, orta nokta: eksik", "Sol: eksik, sağ: fazla, yamuk: eksik, orta nokta: fazla", "Sol: fazla, sağ: eksik, yamuk: eksik, orta nokta: fazla", "Sol: eksik, sağ: fazla, yamuk: eksik, orta nokta: eksik"], a: 1,
      why: "Artan fonksiyonda sol eksik, sağ fazla. İçbükey aşağıda kirişler eğrinin altında kalır (yamuk eksik), orta noktadaki teğet benzeri dikdörtgen ise eğrinin üstüne taşar (orta nokta fazla). A şıkkı içbükey yukarı durumunun cevabıdır; D şıkkı yamuk ve orta noktayı aynı yöne koyduğu için yanlıştır." },
    { q: "lim (n→∞) Σ (i = 1…n) √(1 + 3i/n) · (3/n) limiti hangi belirli integrale eşittir?",
      opts: ["∫₁⁴ √x dx", "∫₀³ √x dx", "∫₁³ √x dx", "∫₁⁴ 3√x dx"], a: 0,
      why: "Δx = 3/n olduğundan b − a = 3; xᵢ = 1 + 3i/n olduğundan a = 1, dolayısıyla b = 4; integrant √x. Dış 3 zaten Δx'tir, ayrıca yazılmaz (D). B ve C şıkları sınırları yanlış kurar." },
    { q: "f(x) = x fonksiyonu için [1, 9] aralığında n = 4 eşit alt aralıkla orta nokta Riemann toplamı kaçtır?",
      opts: ["20", "32", "48", "40"], a: 3,
      why: "Δx = 2, orta noktalar 2, 4, 6, 8. Toplam (2 + 4 + 6 + 8) · 2 = 40. 20, Δx ile çarpmayı unutmaktır; 32 sol toplam (1 + 3 + 5 + 7) · 2, 48 ise sağ toplamdır (3 + 5 + 7 + 9) · 2. Doğrusal fonksiyonda orta nokta toplamı tam değeri verir." },
    { q: "Bir sensörün ölçtüğü r(t) değerleri tabloda verilmiştir. Yamuk (trapezoidal) toplamıyla ∫₀⁶ r(t) dt değeri kaç olarak tahmin edilir?",
      fig: { type: "table", head: ["t", "0", "1", "4", "6"], rows: [["r(t)", "2", "4", "1", "1"]], caption: "Eşit aralıklı olmayan ölçümler" },
      opts: ["9", "12,5", "16", "25"], a: 1,
      why: "Aralık genişlikleri 1, 3, 2. Yamuklar: (2 + 4)/2 · 1 = 3; (4 + 1)/2 · 3 = 7,5; (1 + 1)/2 · 2 = 2. Toplam 12,5. 16 sol toplam, 9 sağ toplamdır; her aralığı kendi genişliğiyle çarpmayı unutmamak gerekir." }
  ]
};
