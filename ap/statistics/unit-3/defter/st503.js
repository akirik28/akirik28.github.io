/* Kitpath not defteri · st503 · 5.4 Yanlı ve Yansız Tahminler
   Kapsam: point estimate, unbiased / biased estimator, bias ile variability farkı, n'nin rolü, benzetim yorumu. */
window.DEFTER = {
  slug: "st503",
  amac: "Bu konu bir statistic'in parameter'ı ne kadar iyi tahmin ettiğini anlatıyor. *Point estimate*, *unbiased* ve *biased estimator* kavramlarını, yanlılıkla değişkenliğin farkını ve örneklem büyüklüğünün neyi düzeltip neyi düzeltmediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Nokta tahmini: *point estimate*",
      kisa: "Parameter'ı tek sayıyla tahmin eden statistic'e point estimate denir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Point estimate", tr: "nokta tahmini", tanim: "Bilinmeyen bir parameter'ı tahmin etmek için örneklemden hesaplanan ==tek sayı==.", ornek: "40 öğrencinin %35'i gözlük takıyor: p̂ = 0,35, p için nokta tahmini." }
          ] },
        { tip: "tablo", baslik: "Hangi statistic hangi parameter'ı tahmin eder?", head: ["Parameter", "Point estimate"], rows: [
            ["p (popülasyon oranı)", "p̂ (örneklem oranı)"],
            ["μ (popülasyon mean'i)", "x̄ (örneklem mean'i)"],
            ["σ (popülasyon SD'si)", "s (örneklem SD'si)"],
            ["p₁ − p₂", "p̂₁ − p̂₂"],
            ["μ₁ − μ₂", "x̄₁ − x̄₂"]
          ], not: "Aynı parameter'ı tahmin etmek için birden fazla statistic önerilebilir; soru, hangisinin ‘iyi’ olduğudur." }
      ]
    },
    {
      baslik: "Yansız (*unbiased*) tahmin edici",
      kisa: "Sampling distribution'ın mean'i parameter'a eşitse tahmin edici yansızdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Unbiased estimator", tr: "yansız tahmin edici", tanim: "Sampling distribution'ının mean'i ==parameter'a eşit== olan statistic; ortalamada doğru yere nişan alır.", ornek: "x̄ için μ_x̄ = μ; p̂ için μ_p̂ = p." },
            { ikon: "↗️", terim: "Biased estimator", tr: "yanlı tahmin edici", tanim: "Sampling distribution'ının mean'i parameter'a eşit olmayan statistic; sistematik olarak (ortalamada) düşük ya da yüksek tahmin eder.", ornek: "Örneklem maksimumu popülasyon maksimumunu asla aşamaz, bazen de altında kalır: ortalamada düşük tahmin eder." }
          ] },
        { tip: "grafik", baslik: "Yanlılık ve değişkenlik: dört durum", xlabel: "Statistic'in değeri", ylabel: "", xmax: 12, ymax: 10,
          xticks: [{ v: 5, label: "param." }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[2.9,0.02],[3.16,0.07],[3.43,0.25],[3.69,0.73],[3.95,1.73],[4.21,3.37],[4.47,5.44],[4.74,7.25],[5,7.98],[5.26,7.25],[5.53,5.44],[5.79,3.37],[6.05,1.73],[6.31,0.73],[6.57,0.25],[6.84,0.07],[7.1,0.02]] },
            { id: "t", tip: "cizgi", renk: 3, kesik: true, from: [5, 0], to: [5, 9.7], etiket: "parameter" },
            { id: "ok", tip: "ok", renk: 1, from: [5, 9.4], to: [8, 9.4], gizli: true },
            { id: "y", tip: "yazi", x: 9.8, y: 6, metin: "yansız, dar" }
          ],
          durumlar: [
            { metin: "Merkez parameter'da, dağılım dar: ==yansız ve düşük değişkenlik==. Her örneklem gerçeğe yakın." },
            { metin: "Merkez hâlâ parameter'da ama dağılım geniş: ==yansız ama yüksek değişkenlik==. Ortalamada doğru, tek tek örneklemde dağınık.", set: { e: { noktalar: [[0.45,0.01],[1.02,0.03],[1.59,0.12],[2.16,0.34],[2.73,0.8],[3.29,1.56],[3.86,2.51],[4.43,3.35],[5,3.68],[5.57,3.35],[6.14,2.51],[6.71,1.56],[7.28,0.8],[7.84,0.34],[8.41,0.12],[8.98,0.03],[9.55,0.01]] }, y: { metin: "yansız, geniş", y: 3.5 } } },
            { metin: "Dağılım dar ama merkez kaymış: ==yanlı ve düşük değişkenlik==. Tutarlı biçimde yanlış yere nişan alıyor.", goster: ["ok"], set: { e: { noktalar: [[5.9,0.02],[6.16,0.07],[6.43,0.25],[6.69,0.73],[6.95,1.73],[7.21,3.37],[7.48,5.44],[7.74,7.25],[8,7.98],[8.26,7.25],[8.53,5.44],[8.79,3.37],[9.05,1.73],[9.31,0.73],[9.57,0.25],[9.84,0.07],[10.1,0.02]] }, y: { metin: "yanlı, dar", x: 10.6, y: 6 } } },
            { metin: "Hem kaymış hem geniş: ==yanlı ve yüksek değişkenlik==. En kötü durum.", set: { e: { noktalar: [[3.45,0.01],[3.98,0.03],[4.52,0.1],[5.05,0.28],[5.58,0.65],[6.12,1.29],[6.65,2.15],[7.18,3.02],[7.72,3.6],[8.25,3.62],[8.78,3.07],[9.31,2.21],[9.85,1.34],[10.38,0.69],[10.91,0.3],[11.45,0.11],[11.98,0.03]] }, y: { metin: "yanlı, geniş", x: 10.6, y: 3.5 } } }
          ] },
        { tip: "ikili", sol: { ikon: "🎯", baslik: "*Unbiased*", maddeler: ["Sampling distribution'ın mean'i = parameter", "Örnek: x̄, p̂"] },
          sag: { ikon: "↗️", baslik: "*Biased*", maddeler: ["Mean ≠ parameter", "Örnek: örneklem maksimumu, range"] },
          oyun: [
            { metin: "x̄ ile μ'yü tahmin etmek (rastgele örneklem).", cevap: "sol", neden: "μ_x̄ = μ: yansız." },
            { metin: "Örneklem maksimumuyla popülasyon maksimumunu tahmin etmek.", cevap: "sag", neden: "Örneklem maksimumu popülasyon maksimumundan büyük olamaz, bazen küçük çıkar: ortalamada düşük kalır." },
            { metin: "p̂ ile p'yi tahmin etmek (rastgele örneklem).", cevap: "sol", neden: "μ_p̂ = p: yansız." },
            { metin: "Sağa çarpık popülasyonda örneklem median'ıyla μ'yü tahmin etmek.", cevap: "sag", neden: "Median, çarpık popülasyonda mean'in altında kalır: μ için yanlı." },
            { metin: "Örneklem range'iyle popülasyon range'ini tahmin etmek.", cevap: "sag", neden: "Örneklem range'i popülasyon range'ini ortalamada küçük bulur: yanlı." }
          ] }
      ]
    },
    {
      baslik: "Sayılarla görelim: küçük popülasyon",
      kisa: "Tüm olası örneklemleri yazarsak yanlılığı doğrudan hesaplarız.",
      bloklar: [
        { tip: "tablo", baslik: "Popülasyon {1, 2, 3, 14}: n = 3 olan tüm örneklemler", head: ["Örneklem", "Mean", "Median", "Maximum"], rows: [
            ["1, 2, 3", "2", "2", "3"],
            ["1, 2, 14", "5,67", "2", "14"],
            ["1, 3, 14", "6", "3", "14"],
            ["2, 3, 14", "6,33", "3", "14"],
            ["Ortalaması", "5", "2,5", "11,25"]
          ], vurgu: 4, not: "Parameter'lar: μ = (1 + 2 + 3 + 14) ÷ 4 = 5; popülasyon maksimumu = 14." },
        { tip: "ornek", baslik: "Hangisi yansız?", durum: "Tablodaki her statistic'in dört örneklemdeki ortalamasını (yani sampling distribution'ın mean'ini) ilgili parameter'la karşılaştır.",
          adimlar: ["Mean: (2 + 5,67 + 6 + 6,33) ÷ 4 = 5 = μ. Eşit: yansız.", "Median: (2 + 2 + 3 + 3) ÷ 4 = 2,5. μ = 5'ten küçük: μ için yanlı (ortalamada düşük kalıyor).", "Maximum: (3 + 14 + 14 + 14) ÷ 4 = 11,25. Popülasyon maksimumu 14'ten küçük: yanlı (ortalamada düşük)."],
          sonuc: "==x̄ yansızdır; örneklem median'ı (çarpık popülasyonda μ için) ve örneklem maksimumu yanlıdır.==" }
      ]
    },
    {
      baslik: "Yanlılık ve değişkenlik farklı şeylerdir",
      kisa: "Büyük n değişkenliği azaltır; yanlılığı düzeltmez.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "↗️", baslik: "*Bias* (yanlılık)", maddeler: ["Sampling distribution'ın merkezi parameter'dan kaymış", "Sebep: yanlı statistic ya da kötü örnekleme yöntemi"] },
          sag: { ikon: "↔️", baslik: "*Variability* (değişkenlik)", maddeler: ["Sampling distribution'ın yayılımı (SD)", "Büyük n ile azalır"] },
          oyun: [
            { metin: "x̄'lar hep μ'nün 5 birim üstünde çıkıyor.", cevap: "sol", neden: "Merkez kaymış: yanlılık." },
            { metin: "Örneklemler arasında p̂ değerleri çok dağınık.", cevap: "sag", neden: "Yayılım büyük: yüksek değişkenlik." },
            { metin: "n = 25'ten n = 400'e çıkınca histogram daraldı.", cevap: "sag", neden: "Yayılım azaldı: değişkenlik n ile düşer." },
            { metin: "Anket yalnızca gönüllülerden alındı; sonuçlar hep fazla uç.", cevap: "sol", neden: "Sistematik sapma: yanlılık." }
          ] },
        { tip: "grafik", baslik: "n büyüdü ama merkez kaydığı yerde kaldı", xlabel: "Statistic'in değeri", ylabel: "", xmax: 12, ymax: 10,
          xticks: [{ v: 5, label: "param." }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[2.4,0],[3,0.02],[3.6,0.05],[4.2,0.13],[4.8,0.3],[5.39,0.6],[5.99,1.02],[6.59,1.52],[7.19,1.97],[7.79,2.22],[8.39,2.18],[8.99,1.86],[9.59,1.37],[10.18,0.88],[10.78,0.49],[11.38,0.24],[11.98,0.1]] },
            { id: "t", tip: "cizgi", renk: 3, kesik: true, from: [5, 0], to: [5, 9.7], etiket: "parameter" },
            { id: "ok", tip: "ok", renk: 1, from: [5, 9.4], to: [8, 9.4] },
            { id: "y", tip: "yazi", x: 10.6, y: 4, metin: "n = 25" }
          ],
          durumlar: [
            { metin: "Yanlı bir yöntemle n = 25: merkez parameter'ın 3 birim sağında, yayılım geniş." },
            { metin: "n = 100: dağılım daraldı ama merkez aynı yerde. Yanlılık azalmadı.", set: { e: { noktalar: [[5.2,0.01],[5.55,0.04],[5.9,0.14],[6.25,0.41],[6.6,0.97],[6.95,1.9],[7.3,3.06],[7.65,4.08],[8,4.49],[8.35,4.08],[8.7,3.06],[9.05,1.9],[9.4,0.97],[9.75,0.41],[10.1,0.14],[10.45,0.04],[10.8,0.01]] }, y: { metin: "n = 100", y: 5.5 } } },
            { metin: "n = 400: çok dar ve parameter'dan uzak. Artık ==tutarlı biçimde yanlış== yere nişan alıyor.", set: { e: { noktalar: [[6.6,0.02],[6.78,0.08],[6.95,0.29],[7.13,0.82],[7.3,1.94],[7.48,3.79],[7.65,6.12],[7.83,8.16],[8,8.98],[8.18,8.16],[8.35,6.12],[8.53,3.79],[8.7,1.94],[8.88,0.82],[9.05,0.29],[9.23,0.08],[9.4,0.02]] }, y: { metin: "n = 400", y: 8 } } }
          ] },
        { tip: "tuzak", baslik: "Büyük n her şeyi çözmez", metin: "Büyük n yalnızca değişkenliği azaltır; yanlılık statistic'in ya da örnekleme yönteminin sonucudur.", yanlis: "Gönüllü yanıt anketini 10.000 kişiye uygularsam yanlılık da kalmaz.", dogru: "Yanlılık, rastgele örnekleme ya da yansız bir statistic ile giderilir; n artınca yalnızca daha kesin ama yine yanlış bir sonuç elde edersin." }
      ]
    },
    {
      baslik: "Benzetim sonucunu yorumlama",
      kisa: "Merkez parameter'dan kayıksa yanlı, yayılım genişse değişkendir.",
      bloklar: [
        { tip: "sekil", baslik: "İki tahmin edici, 1.000 örneklem", fig: { type: "box", items: [
            { name: "Tahmin edici A", min: 42, q1: 47, med: 50, q3: 53, max: 58 },
            { name: "Tahmin edici B", min: 45, q1: 53, med: 56, q3: 59, max: 66 }
          ], label: "Statistic değeri (gerçek parameter = 50)" } },
        { tip: "ornek", baslik: "A mı B mi?", durum: "Gerçek parameter 50. Her tahmin edici için 1.000 örneklemden statistic hesaplandı; kutu grafikleri yukarıda.",
          adimlar: ["A'nın median'ı 50 ve kutusu 50'nin çevresinde simetrik: merkez parameter'a yakın → yansız görünüyor.", "B'nin median'ı 56 ve bütün kutu 50'nin sağında: merkez kaymış → yanlı (fazla tahmin ediyor).", "Kutu genişlikleri aynı (IQR: A için 53 − 47 = 6, B için 59 − 53 = 6): değişkenlik benzer (B'nin range'i biraz daha büyük: 21'e karşı 16)."],
          sonuc: "==A yansız görünüyor, B yanlı.== Yorumu bağlamla yaz: ‘B, parameter'ı sistematik olarak olduğundan fazla tahmin ediyor.’" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Point estimate*: parameter'ı tahmin etmek için örneklemden hesaplanan tek sayı (p̂ → p, x̄ → μ, s → σ).",
            "*Unbiased estimator*: sampling distribution'ının mean'i parameter'a eşittir; *biased*: eşit değildir (sistematik olarak düşük ya da yüksek).",
            "p̂ ve x̄ (ve farkları p̂₁ − p̂₂, x̄₁ − x̄₂) yansız tahmin edicilerdir; örneklem maksimumu ve range'i yanlıdır.",
            "Yanlılık merkezle (kayma), değişkenlik yayılımla (SD) ilgilidir; ikisi birbirinden bağımsızdır.",
            "n artınca değişkenlik azalır, yanlılık azalmaz; yanlılığı rastgele örnekleme ya da yansız statistic giderir.",
            "Benzetimde kutu ya da histogramın merkezini parameter'la, genişliğini diğer tahmin edicilerle karşılaştırarak yorumla.",
            "Küçük bir popülasyonda tüm örneklemleri yazarsan yanlılığı doğrudan hesaplarsın (ortalamaların ortalamasını parameter ile karşılaştır)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi bir statistic'in parameter için yansız tahmin edici olmasını en iyi tanımlar?",
      opts: ["Her örneklemde parameter'a eşit çıkması", "Sampling distribution'ının mean'inin parameter'a eşit olması", "Sampling distribution'ının standard deviation'ının küçük olması", "n büyüdüğünde parameter'a eşit olması"],
      a: 1,
      why: "Yansızlık sampling distribution'ın merkeziyle ilgilidir: mean'i parameter'a eşitse tahmin edici yansızdır. A'daki gibi her örneklemde eşit çıkması gerekmez (statistic örneklemden örnekleme değişir); C değişkenliği, yanlılık değil." },
    { q: "Gerçek ortalaması μ = 40 olan bir popülasyondan, her biri 1.000 örneklemlik benzetimle üç tahmin edici denendi. Hangisi μ için en iyi tahmin edicidir?",
      fig: { type: "table", caption: "1.000 örneklemde statistic değerleri", head: ["Tahmin edici", "Değerlerin mean'i", "Değerlerin SD'si"], rows: [["A", "40,1", "6,2"], ["B", "44,8", "2,1"], ["C", "39,9", "2,0"]] },
      opts: ["A, çünkü mean'i 40'a en yakın.", "B, çünkü SD'si küçük.", "C, çünkü hem mean'i 40'a yakın (yansız görünüyor) hem SD'si küçük.", "Üçü de eşit iyidir."],
      a: 2,
      why: "C hem yansız görünüyor (mean ≈ 40) hem de değişkenliği düşük (SD ≈ 2). A yansız ama çok değişken; B dar ama merkezi 44,8 ile 40'tan kaymış (yanlı). B en çekici yanlış şık: küçük SD tek başına yeterli değildir." },
    { q: "Bir anket, yanlı bir örnekleme yöntemiyle yapılıyor. Örneklem büyüklüğü n = 100'den n = 400'e çıkarılırsa ne olur?",
      opts: ["Hem yanlılık hem değişkenlik azalır.", "Değişkenlik azalır; yanlılık aynı kalır.", "Yanlılık azalır; değişkenlik aynı kalır.", "İkisi de aynı kalır."],
      a: 1,
      why: "Büyük n sampling distribution'ı daraltır (değişkenlik azalır) ama merkezini kaydırmaz; yanlılık örnekleme yönteminden geliyorsa aynı kalır. A, ‘büyük n her şeyi düzeltir’ yanılgısıdır." },
    { q: "Popülasyonda 2, 4 ve 9 değerleri var; range = 9 − 2 = 7. Bu popülasyondan n = 2 olan tüm olası örneklemler (iadesiz) çekilip her birinin range'i hesaplanıyor. Bu range'lerin ortalaması ve sonuç nedir?",
      opts: ["≈ 4,67; örneklem range'i popülasyon range'ini ortalamada düşük bulur (yanlı).", "7; örneklem range'i yansızdır.", "≈ 4,67; örneklem range'i yansızdır.", "7; örneklem range'i yanlıdır."],
      a: 0,
      why: "Örneklemler (2,4), (2,9), (4,9) için range'ler 2, 7 ve 5; ortalama (2 + 7 + 5) ÷ 3 ≈ 4,67 < 7. Ortalama parameter'a eşit olmadığı için range yanlıdır (ortalamada düşük tahmin; hiçbir örneklemde 7'yi aşmaz)." },
    { q: "Aşağıdaki tahmin edici–parameter çiftlerinden hangisi yanlı bir tahmin edici örneğidir?",
      opts: ["p̂, p için", "x̄, μ için", "x̄₁ − x̄₂, μ₁ − μ₂ için", "Örneklem maksimumu, popülasyon maksimumu için"],
      a: 3,
      why: "p̂, x̄ ve x̄₁ − x̄₂ yansızdır. Örneklem maksimumu hiçbir zaman popülasyon maksimumundan büyük olamaz ve bazen küçüktür: ortalamada düşük kalır, yanlıdır." }
  ]
};
