/* Kitora not defteri · st204 · 2.5 Korelasyon
   Kaynak: AP Statistics CED Unit 2, Topic 2.5 (Correlation). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st204",
  amac: "Bu konu iki *quantitative variable* arasındaki doğrusal ilişkinin yönünü ve gücünü tek bir sayıyla, *correlation coefficient* r ile ölçmeyi anlatır. r'nin özelliklerini, elle nasıl hesaplandığını, nerede yanıltabildiğini ve *correlation* ile *causation* farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "r: doğrusal ilişkiyi ölçen sayı",
      kisa: "r −1 ile 1 arasındadır; işareti yönü, büyüklüğü doğrusal gücü söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Correlation coefficient (r)", tr: "korelasyon katsayısı", tanim: "İki *quantitative variable* arasındaki ==doğrusal== ilişkinin yönünü ve gücünü ölçen, birimsiz sayı.", ornek: "r = 0,96: güçlü pozitif doğrusal ilişki." }
          ] },
        { tip: "formul", parcalar: [{ t: "r" }, "=", { t: "1 / (n − 1)", alt: "çarpan" }, "·", { t: "Σ ( z_x · z_y )", alt: "z-puanı çarpımlarının toplamı" }], aciklama: "z_x = (x − x̄) / s_x ve z_y = (y − ȳ) / s_y. Her değer, ortalamasından kaç standart sapma uzakta olduğuyla ifade edilir." },
        { tip: "grafik", baslik: "Aynı eksenler, farklı r değerleri", xlabel: "x", ylabel: "y", xmax: 10, ymax: 10,
          ogeler: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return { id: "q" + i, tip: "nokta", x: i, y: i }; }).concat([{ id: "rl", tip: "yazi", x: 5, y: 0.7, metin: "r = 1,00" }]),
          durumlar: [
            { metin: "Bütün noktalar y = x doğrusunun üzerinde: ==kusursuz pozitif== doğrusal ilişki, r = 1." },
            { metin: "Noktalar doğruya çok yakın: güçlü pozitif ilişki, r ≈ 0,96.", set: { q1: { y: 1.5 }, q2: { y: 2 }, q3: { y: 3.5 }, q4: { y: 3 }, q5: { y: 5.5 }, q6: { y: 5 }, q7: { y: 7.5 }, q8: { y: 6.5 }, q9: { y: 8.5 }, rl: { metin: "r ≈ 0,96" } } },
            { metin: "Daha dağınık: orta kuvvette pozitif ilişki, r ≈ 0,72.", set: { q1: { y: 3 }, q2: { y: 4.5 }, q3: { y: 3.5 }, q4: { y: 5 }, q5: { y: 4 }, q6: { y: 5.5 }, q7: { y: 4.5 }, q8: { y: 6 }, q9: { y: 5 }, rl: { metin: "r ≈ 0,72" } } },
            { metin: "Belirgin doğrusal örüntü yok: r sıfıra yakın, r ≈ 0,14.", set: { q1: { y: 5 }, q2: { y: 2.5 }, q3: { y: 7 }, q4: { y: 3.5 }, q5: { y: 8 }, q6: { y: 3 }, q7: { y: 6.5 }, q8: { y: 2 }, q9: { y: 7.5 }, rl: { metin: "r ≈ 0,14" } } },
            { metin: "Noktalar aşağı iniyor ve doğruya yakın: güçlü ==negatif== ilişki, r ≈ −0,96.", set: { q1: { y: 8.5 }, q2: { y: 8 }, q3: { y: 6.5 }, q4: { y: 7 }, q5: { y: 4.5 }, q6: { y: 5 }, q7: { y: 2.5 }, q8: { y: 3.5 }, q9: { y: 1.5 }, rl: { metin: "r ≈ −0,96" } } },
            { metin: "Bütün noktalar y = 10 − x doğrusunun üzerinde: ==kusursuz negatif== ilişki, r = −1.", set: { q1: { y: 9 }, q2: { y: 8 }, q3: { y: 7 }, q4: { y: 6 }, q5: { y: 5 }, q6: { y: 4 }, q7: { y: 3 }, q8: { y: 2 }, q9: { y: 1 }, rl: { metin: "r = −1,00" } } }
          ] }
      ]
    },
    {
      baslik: "r'nin özellikleri",
      kisa: "r birimsizdir, eksen sırasından etkilenmez ve yalnızca doğrusal ilişkiyi ölçer.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "↕️", baslik: "−1 ≤ r ≤ 1", metin: "r = 1 kusursuz pozitif, r = −1 kusursuz negatif doğrusal ilişkidir." },
            { ikon: "🧭", baslik: "İşaret yönü, büyüklük gücü söyler", metin: "|r| 1'e ne kadar yakınsa doğrusal ilişki o kadar güçlüdür; 0'a yakınsa doğrusal ilişki yok denecek kadar zayıftır." },
            { ikon: "📏", baslik: "r birimsizdir", metin: "cm yerine m, °C yerine °F kullanmak r'yi değiştirmez." },
            { ikon: "🔁", baslik: "x ile y yer değiştirse r aynı kalır", metin: "Formül x ve y için simetriktir." },
            { ikon: "⚠️", baslik: "Yalnızca doğrusal ilişkiyi ölçer", metin: "Eğri biçimli güçlü bir ilişkide bile r küçük çıkabilir." }
          ] },
        { tip: "ikili", sol: { ikon: "✏️", baslik: "r'yi değiştirir", maddeler: ["İşaret ya da verinin dağılımı değişir"] },
          sag: { ikon: "🛡️", baslik: "r'yi değiştirmez", maddeler: ["Birim ya da eksen sırası değişir"] },
          oyun: [
            { metin: "x ve y eksenlerinin yerini değiştirmek.", cevap: "sag", neden: "Formül x ve y için simetrik: r aynı." },
            { metin: "Ölçü birimini değiştirmek (cm yerine m).", cevap: "sag", neden: "r birimsiz, değişmez." },
            { metin: "Bütün y değerlerini −1 ile çarpmak.", cevap: "sol", neden: "İlişkinin yönü ters döner: r'nin işareti değişir." },
            { metin: "Her y değerine 5 eklemek.", cevap: "sag", neden: "Noktalar yukarı kayar ama örüntü aynı kalır: r aynı." },
            { metin: "Örüntüden çok uzakta tek bir aykırı nokta eklemek.", cevap: "sol", neden: "Tek nokta r'yi büyük ölçüde değiştirebilir." }
          ] }
      ]
    },
    {
      baslik: "r ne zaman yanıltır?",
      kisa: "Aykırı nokta r'yi çok değiştirir; eğri bir ilişkide r sıfıra yakın çıkabilir.",
      bloklar: [
        { tip: "grafik", baslik: "Aykırı nokta ve eğri ilişki", xlabel: "x", ylabel: "y", xmax: 10, ymax: 10,
          ogeler: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return { id: "q" + i, tip: "nokta", x: i, y: [1.2, 2.3, 2.8, 4.2, 5.1, 5.8, 7.2, 8.1, 8.8][i - 1] }; }).concat([
            { id: "o", tip: "nokta", x: 8.5, y: 1.5, renk: 2, gizli: true },
            { id: "rl", tip: "yazi", x: 2.2, y: 9.4, metin: "r = 0,998" }
          ]),
          durumlar: [
            { metin: "Dokuz nokta bir doğruya çok yakın: r = 0,998." },
            { metin: "Tek bir uzak nokta eklenince (kırmızı) r ==0,68==e düşüyor. Aykırı nokta r'yi çok etkiler.", goster: ["o"], set: { rl: { metin: "r = 0,68" } } },
            { metin: "Aykırı nokta gitti; noktalar ters U eğrisine taşındı. Eğri çok düzenli ama r = ==0==: r eğri ilişkiyi ölçemez.", gizle: ["o"], set: { q1: { y: 1 }, q2: { y: 4.5 }, q3: { y: 7 }, q4: { y: 8.5 }, q5: { y: 9 }, q6: { y: 8.5 }, q7: { y: 7 }, q8: { y: 4.5 }, q9: { y: 1 }, rl: { metin: "r = 0,00" } } }
          ] },
        { tip: "tuzak", baslik: "r = 0 ilişki yok demek değildir", metin: "r yalnızca doğrusal ilişkiyi ölçtüğü için, kusursuz bir eğri bile r = 0 verebilir.", yanlis: "r = 0 ise değişkenler arasında hiçbir ilişki yoktur.", dogru: "r = 0 yalnızca doğrusal ilişkinin olmadığını söyler. Önce saçılım grafiğine bak; r tek başına yetmez." }
      ]
    },
    {
      baslik: "r'yi elle hesaplamak",
      kisa: "z-puanlarını çarp, topla, n − 1'e böl.",
      bloklar: [
        { tip: "ornek", baslik: "Beş öğrenci: antrenman günü ve enerji", durum: "Haftada antrenman yapılan gün sayısı (x) ve enerji puanı (y, 1–5): (1, 2), (2, 1), (3, 4), (4, 3), (5, 5). r'yi bulalım.",
          adimlar: ["Ortalamalar: x̄ = 15 ÷ 5 = 3, ȳ = 15 ÷ 5 = 3.", "Standart sapmalar: x sapmaları −2, −1, 0, 1, 2; kareler toplamı 10; s_x = √(10 ÷ 4) ≈ 1,581. y sapmaları −1, −2, 1, 0, 2; kareler toplamı da 10; s_y ≈ 1,581.", "z-puanları (sapma ÷ 1,581) tabloda. Çarpımlar: 0,80; 0,80; 0; 0; 1,60. Toplamları 3,20.", "r = 3,20 ÷ (5 − 1) = 0,80."],
          sonuc: "r = 0,80: antrenman günü ile enerji puanı arasında güçlü, pozitif, doğrusal bir ilişki var." },
        { tip: "tablo", baslik: "z-puanları ve çarpımları", head: ["x", "y", "z_x", "z_y", "z_x · z_y"], rows: [
            ["1", "2", "−1,265", "−0,632", "0,80"],
            ["2", "1", "−0,632", "−1,265", "0,80"],
            ["3", "4", "0", "0,632", "0"],
            ["4", "3", "0,632", "0", "0"],
            ["5", "5", "1,265", "1,265", "1,60"],
            ["", "", "", "Toplam", "3,20"]
          ], vurgu: 5 },
        { tip: "grafik", baslik: "Çarpımlar neden pozitif?", xlabel: "Antrenman günü", ylabel: "Enerji", xmax: 6, ymax: 6,
          xticks: [1, 2, 3, 4, 5].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [1, 2, 3, 4, 5].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "a", tip: "nokta", x: 1, y: 2 }, { id: "b", tip: "nokta", x: 2, y: 1 }, { id: "c", tip: "nokta", x: 3, y: 4 },
            { id: "d", tip: "nokta", x: 4, y: 3 }, { id: "e", tip: "nokta", x: 5, y: 5 },
            { id: "vx", tip: "cizgi", renk: 3, kesik: true, from: [3, 0], to: [3, 6], etiket: "", gizli: true },
            { id: "vy", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [6, 3], etiket: "", gizli: true },
            { id: "p1", tip: "yazi", x: 0.6, y: 0.7, metin: "( + )", gizli: true },
            { id: "p2", tip: "yazi", x: 5.3, y: 5.6, metin: "( + )", gizli: true },
            { id: "n1", tip: "yazi", x: 1.2, y: 5.6, metin: "( − )", gizli: true },
            { id: "n2", tip: "yazi", x: 5.3, y: 0.7, metin: "( − )", gizli: true }
          ],
          durumlar: [
            { metin: "Beş nokta: (1, 2), (2, 1), (3, 4), (4, 3), (5, 5)." },
            { metin: "Kesikli çizgiler ortalamaları gösteriyor: x̄ = 3 ve ȳ = 3. Grafik dört bölgeye ayrıldı.", goster: ["vx", "vy"] },
            { metin: "Sol-alttaki iki nokta (ikisi de ortalamanın altında) ve sağ-üstteki nokta çarpımı ==pozitif== yapıyor. Çizgi üstündeki iki nokta 0 katkı veriyor. Sol-üst ve sağ-alt bölgeler olsaydı çarpım negatif olurdu: sonuç r = 0,80.", goster: ["p1", "p2", "n1", "n2"] }
          ] }
      ]
    },
    {
      baslik: "*Correlation* sebep demek değildir",
      kisa: "Güçlü r, bir değişkenin öbürüne sebep olduğunu kanıtlamaz.",
      bloklar: [
        { tip: "harita", merkez: "Sıcak hava", dallar: [
            { baslik: "Dondurma satışı artar", alt: "hava sıcak" },
            { baslik: "Denize girenler artar", alt: "hava sıcak" },
            { baslik: "Boğulma vakaları artar", alt: "denizde daha çok kişi var" },
            { baslik: "r yüksek çıkar", alt: "ama dondurma sebep değil" }
          ] },
        { tip: "tuzak", baslik: "Üçüncü bir değişken ikisini birden etkileyebilir", metin: "Dondurma satışı ile boğulma sayısı arasındaki yüksek r, dondurmanın boğulmaya yol açtığı anlamına gelmez. Sıcak hava ikisini de artırıyor.", yanlis: "r = 0,9 ise x, y'ye sebep olur.", dogru: "Yüksek r yalnızca güçlü doğrusal ilişkiyi gösterir. Sebep-sonuç için uygun biçimde yapılmış bir *randomized experiment* gerekir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "r doğrusal ilişkinin yönünü (işaret) ve gücünü (büyüklük) ölçer; −1 ≤ r ≤ 1.",
            "r = Σ(z_x · z_y) ÷ (n − 1): her değeri z-puanına çevir, çarpımları topla, n − 1'e böl.",
            "r birimsizdir; birimi değiştirmek ya da x ile y'yi yer değiştirmek r'yi değiştirmez.",
            "y değerlerini −1 ile çarpmak r'nin işaretini değiştirir.",
            "r yalnızca doğrusal ilişkiyi ölçer; eğri ilişkide r ≈ 0 olabilir. Önce saçılım grafiğine bak.",
            "Aykırı nokta r'yi büyük ölçüde değiştirebilir.",
            "Yorum: \"x ile y arasında güçlü, pozitif, doğrusal bir ilişki var (r = 0,80)\" gibi bağlamlı yaz.",
            "*Correlation* ≠ *causation*: üçüncü bir değişken ilişkiyi açıklayabilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki saçılım grafiği için en uygun r değeri hangisidir?",
      fig: { type: "graph", xlabel: "x", ylabel: "y", xmax: 10, ymax: 10, points: [{ q: 1, p: 8 }, { q: 2, p: 7.4 }, { q: 3, p: 6.2 }, { q: 4, p: 5.5 }, { q: 5, p: 4.4 }, { q: 6, p: 3.4 }, { q: 7, p: 2.8 }, { q: 8, p: 1.6 }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }] },
      opts: ["0,92", "−0,95", "−0,30", "0"],
      a: 1, why: "Noktalar aşağı iniyor (negatif) ve bir doğruya çok yakın (güçlü), yani r −1'e yakın. 0,92 doğru büyüklükte ama yanlış işaret; −0,30 zayıf bir ilişkiye aittir." },
    { q: "Bir araştırmacı, uzunluk ölçülerini santimetreden metreye çevirip r'yi yeniden hesaplıyor. r'ye ne olur?",
      opts: ["100 kat küçülür.", "İşareti değişir.", "Değişmez.", "1 olur."],
      a: 2, why: "r birimsizdir ve z-puanlarından hesaplanır; birimi değiştirmek (pozitif bir ölçekleme) r'yi değiştirmez. İşareti ancak bir değişkenin yönünü tersine çevirmek (−1 ile çarpmak) değiştirir." },
    { q: "Bir ilçede kütüphane sayısı ile hırsızlık olayı sayısı arasında r = 0,85 bulunmuştur. Aşağıdakilerden hangisi doğrudur?",
      opts: ["Güçlü, pozitif, doğrusal bir ilişki vardır; nüfus gibi üçüncü bir değişken ikisini birlikte etkiliyor olabilir, sebep-sonuç çıkarılamaz.", "Kütüphaneler hırsızlığın artmasına neden olur.", "Hırsızlık, kütüphane sayısının artmasına neden olur.", "Hırsızlık olaylarının %85'i kütüphane sayısıyla açıklanır."],
      a: 0, why: "Yüksek r yalnızca ilişkiyi gösterir; büyük ilçelerde hem kütüphane hem hırsızlık daha fazladır. B ve C sebep-sonuç iddia eder. D, r ile r²'yi karıştırır (açıklanan pay r² = 0,85² ≈ %72'dir)." },
    { q: "Aşağıdaki saçılım grafiği için r yaklaşık 0'dır. Bu neyi gösterir?",
      fig: { type: "graph", xlabel: "x", ylabel: "y", xmax: 10, ymax: 10, points: [{ q: 1, p: 1 }, { q: 2, p: 4.5 }, { q: 3, p: 7 }, { q: 4, p: 8.5 }, { q: 5, p: 9 }, { q: 6, p: 8.5 }, { q: 7, p: 7 }, { q: 8, p: 4.5 }, { q: 9, p: 1 }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }] },
      opts: ["Değişkenler arasında hiçbir ilişki yoktur.", "Veride hata vardır.", "Eğri ilişki ne kadar güçlüyse r o kadar büyüktür.", "r yalnızca doğrusal ilişkiyi ölçer; güçlü eğrisel ilişki olsa bile r ≈ 0 çıkabilir."],
      a: 3, why: "Noktalar kusursuz bir ters U çiziyor ama doğrusal bir örüntü yok, bu yüzden r ≈ 0. A yanlış: ilişki var ama doğrusal değil. C de yanlış, r eğri ilişkiyi ölçmez." },
    { q: "n = 6 gözlem için z_x · z_y çarpımlarının toplamı 4,5 bulunmuştur. r kaçtır?",
      opts: ["0,75", "0,90", "0,45", "4,5"],
      a: 1, why: "r = Σ(z_x · z_y) ÷ (n − 1) = 4,5 ÷ 5 = 0,90. 0,75 bölme işleminde n = 6 kullanılırsa çıkar; sapma payda n − 1 olmalıdır. 4,5 ise bölme hiç yapılmamış hâldir (üstelik r 1'i geçemez)." }
  ]
};
