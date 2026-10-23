/* Kitpath not defteri · st504 · 5.5 Örneklem Oranının Dağılımı
   Kapsam: p̂ sampling distribution (mean p, SD √(p(1−p)/n)), 10% ve Large Counts koşulları, normal yaklaşıklıkla olasılık. */
window.DEFTER = {
  slug: "st504",
  amac: "Bu konu, örneklem oranı p̂'nin sampling distribution'ını anlatıyor: merkezi, yayılımı, normal modelin koşulları (10% ve Large Counts) ve olasılık hesabı. Anket sonuçlarının ne kadar oynayabileceğini sayıyla söyleyebileceksin.",
  bolumler: [
    {
      baslik: "Örneklem oranı p̂ ve merkezi",
      kisa: "p̂ = başarı sayısı ÷ n; sampling distribution'ın mean'i p'dir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥄", terim: "Sample proportion", tr: "örneklem oranı (p̂)", tanim: "Örneklemde ilgilenilen özelliğe sahip olanların oranı: p̂ = x ÷ n.", ornek: "50 öğrencinin 22'si kahvaltı etmiyor: p̂ = 22 ÷ 50 = 0,44." },
            { ikon: "🌍", terim: "Population proportion", tr: "popülasyon oranı (p)", tanim: "Aynı özelliğin popülasyondaki gerçek oranı; ==sabit== bir parameter.", ornek: "Okulun gerçek kahvaltı etmeyenler oranı, p = 0,40." }
          ] },
        { tip: "formul", parcalar: [{ t: "μ_p̂", alt: "p̂'nin mean'i" }, "=", { t: "p", alt: "popülasyon oranı" }], aciklama: "p̂'nin sampling distribution'ı p'nin çevresinde toplanır: p̂, p için yansız bir tahmin edicidir." }
      ]
    },
    {
      baslik: "Yayılım: n büyüdükçe daralır",
      kisa: "σ_p̂ = √(p(1−p)/n); n arttıkça SD küçülür.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "σ_p̂", alt: "p̂'nin SD'si" }, "=", { t: "√( p(1−p) ÷ n )", alt: "p: popülasyon oranı, n: örneklem büyüklüğü" }], aciklama: "Bu formül yalnızca örneklem popülasyonun %10'undan küçükse geçerlidir. p bilinmiyorsa örneklem p̂'si konur ve sonuca *standard error* denir." },
        { tip: "grafik", baslik: "n arttıkça p̂'nin dağılımı daralır (p = 0,40)", xlabel: "p̂ (örneklem oranı)", ylabel: "", xmax: 12, ymax: 10,
          xticks: [{ v: 0, label: "0,1" }, { v: 2, label: "0,2" }, { v: 4, label: "0,3" }, { v: 6, label: "0,4" }, { v: 8, label: "0,5" }, { v: 10, label: "0,6" }, { v: 12, label: "0,7" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0.02,0.02],[0.77,0.06],[1.52,0.16],[2.26,0.36],[3.01,0.7],[3.76,1.16],[4.51,1.67],[5.25,2.08],[6,2.24],[6.75,2.08],[7.5,1.67],[8.24,1.16],[8.99,0.7],[9.74,0.36],[10.49,0.16],[11.23,0.06],[11.98,0.02]] },
            { id: "m", tip: "cizgi", renk: 3, kesik: true, from: [6, 0], to: [6, 9.7], etiket: "p = 0,40" },
            { id: "y", tip: "yazi", x: 9.6, y: 3.5, metin: "n = 25" }
          ],
          durumlar: [
            { metin: "n = 25: σ_p̂ = √(0,40 × 0,60 ÷ 25) ≈ ==0,098==. p̂ geniş bir aralıkta oynuyor." },
            { metin: "n = 100: σ_p̂ ≈ ==0,049==. Merkez aynı, dağılım yarı yarıya daraldı.", set: { e: { noktalar: [[2.57,0.01],[3,0.04],[3.43,0.14],[3.86,0.41],[4.29,0.97],[4.71,1.89],[5.14,3.05],[5.57,4.07],[6,4.48],[6.43,4.07],[6.86,3.05],[7.29,1.89],[7.72,0.97],[8.14,0.41],[8.57,0.14],[9,0.04],[9.43,0.01]] }, y: { metin: "n = 100", x: 8.2, y: 5 } } },
            { metin: "n = 400: σ_p̂ ≈ ==0,024==. Hemen hemen bütün p̂ değerleri p = 0,40'a çok yakın.", set: { e: { noktalar: [[4.29,0.02],[4.5,0.08],[4.71,0.29],[4.93,0.82],[5.14,1.94],[5.36,3.78],[5.57,6.11],[5.79,8.14],[6,8.96],[6.21,8.14],[6.43,6.11],[6.64,3.78],[6.86,1.94],[7.07,0.82],[7.29,0.29],[7.5,0.08],[7.72,0.02]] }, y: { metin: "n = 400", x: 7.6, y: 8.4 } } }
          ] },
        { tip: "tablo", baslik: "p = 0,40 iken n arttıkça", head: ["n", "σ_p̂ = √(0,24 ÷ n)"], rows: [["25", "0,098"], ["100", "0,049"], ["400", "0,024"]], not: "n'yi 4 katına çıkarmak SD'yi yarıya indirir (√4 = 2). p(1−p) en büyük değerini p = 0,5'te alır." },
        { tip: "ikili", sol: { ikon: "🎯", baslik: "*Merkez* (center)", maddeler: ["p̂ nerede toplanır?", "n'den bağımsız"] },
          sag: { ikon: "↔️", baslik: "*Yayılım* (spread)", maddeler: ["p̂ ne kadar oynar?", "n büyüdükçe küçülür"] },
          oyun: [
            { metin: "μ_p̂ = p.", cevap: "sol", neden: "p̂'nin toplandığı nokta: merkez." },
            { metin: "σ_p̂ = √(p(1−p) ÷ n).", cevap: "sag", neden: "p̂'nin ne kadar oynadığı: yayılım." },
            { metin: "n = 25'ten n = 100'e çıkınca değişmedi.", cevap: "sol", neden: "Merkez n'e bağlı değildir." },
            { metin: "n = 100'den n = 400'e çıkınca yarıya indi.", cevap: "sag", neden: "SD, √n ile ters orantılıdır." }
          ] }
      ]
    },
    {
      baslik: "Koşullar: 10% ve Large Counts",
      kisa: "10%: n ≤ N ÷ 10; Large Counts: np ≥ 10 ve n(1−p) ≥ 10.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔟", terim: "10% condition", tr: "10% koşulu", tanim: "Örneklem rastgele olmalı ve çekimsiz seçimde n ≤ N ÷ 10 olmalı; böylece gözlemler yaklaşık bağımsızdır ve σ_p̂ formülü geçerlidir.", ornek: "1.200 öğrencilik okuldan en çok 120 kişi." },
            { ikon: "📏", terim: "Large Counts", tr: "büyük sayımlar koşulu", tanim: "np ≥ 10 ve n(1−p) ≥ 10 ise p̂'nin dağılımı ==yaklaşık normaldir==.", ornek: "p = 0,40, n = 100: np = 40 ve n(1−p) = 60, ikisi de ≥ 10." }
          ] },
        { tip: "sekil", baslik: "Large Counts bozulunca: p = 0,05, n = 20 (np = 1)", fig: { type: "bar", cats: ["0,00", "0,05", "0,10", "0,15", "0,20", "0,25+"], series: [{ name: "Olasılık (%)", values: [35.8,37.7,18.9,6,1.3,0.3] }], ylabel: "Olasılık (%)" } },
        { tip: "tuzak", baslik: "n ≥ 30 oran için yeterli değil", metin: "n ≥ 30 kuralı ortalamalar (x̄) içindir; oranlarda Large Counts aranır.", yanlis: "p = 0,02 ve n = 100 aldım; n ≥ 30 olduğuna göre p̂ normaldir.", dogru: "np = 100 × 0,02 = 2 < 10: Large Counts sağlanmıyor, p̂'nin dağılımı sağa çarpık olur." }
      ]
    },
    {
      baslik: "Çözümlü örnek: kahvaltı oranı",
      kisa: "Dağılımı tanımla, koşulları kontrol et, z hesapla, yorumla.",
      bloklar: [
        { tip: "ornek", baslik: "p̂ > 0,50 olma olasılığı", durum: "Okulun %40'ı sabah kahvaltı etmiyor (p = 0,40). 1.200 öğrencilik okuldan rastgele 100 öğrenci seçiliyor. Örneklemde kahvaltı etmeyenlerin oranının (p̂) 0,50'yi geçme olasılığı nedir?",
          adimlar: ["Dağılım: p̂. Mean μ_p̂ = 0,40; SD σ_p̂ = √(0,40 × 0,60 ÷ 100) = √0,0024 ≈ 0,049.", "Koşullar: rastgele seçim; 10%: 100 ≤ 0,10 × 1.200 = 120 ✓; Large Counts: np = 40 ≥ 10 ve n(1−p) = 60 ≥ 10 ✓ → p̂ yaklaşık normal.", "z = (0,50 − 0,40) ÷ 0,049 ≈ 2,04; tablo: P(Z < 2,04) = 0,9793.", "P(p̂ > 0,50) = 1 − 0,9793 = 0,0207."],
          sonuc: "Olasılık ≈ ==0,02==: rastgele 100 öğrencinin yarısından fazlasının kahvaltı etmemiş çıkması nadir bir olay." },
        { tip: "ornek", baslik: "Aralık: 0,35 < p̂ < 0,45", durum: "Aynı okulda p̂'nin 0,35 ile 0,45 arasında olma olasılığı nedir?",
          adimlar: ["z₁ = (0,35 − 0,40) ÷ 0,049 ≈ −1,02; z₂ = (0,45 − 0,40) ÷ 0,049 ≈ +1,02.", "P(Z < 1,02) = 0,8461 ve P(Z < −1,02) = 0,1539.", "Fark: 0,8461 − 0,1539 = 0,6922."],
          sonuc: "Yaklaşık ==%69==: örneklemlerin üçte ikisinden fazlasında p̂, p'ye 0,05'ten fazla uzak düşmez." }
      ]
    },
    {
      baslik: "p̂ olağandışı mı? İddiayı sorgulamak",
      kisa: "Çok düşük olasılıklı bir p̂, iddiadan şüphelenmek için nedendir.",
      bloklar: [
        { tip: "ornek", baslik: "Simit iddiası", durum: "Kantin sahibi ‘öğrencilerin %60'ı simit seviyor’ diyor (p = 0,60). 1.500 öğrencilik okuldan rastgele 100 öğrenciye soruluyor; 45'i simit seçiyor (p̂ = 0,45). İddia makul mü?",
          adimlar: ["İddia doğruysa: μ_p̂ = 0,60; σ_p̂ = √(0,60 × 0,40 ÷ 100) ≈ 0,049.", "Koşullar: 10%: 100 ≤ 150 ✓; Large Counts: np = 60 ve n(1−p) = 40 ≥ 10 ✓.", "z = (0,45 − 0,60) ÷ 0,049 ≈ −3,06; P(Z < −3,06) ≈ 0,001."],
          sonuc: "p = 0,60 doğruysa p̂ ≤ 0,45 çıkması ==yaklaşık binde 1==: çok nadir. Bu, iddiadan şüphelenmek için güçlü bir neden (kesin kanıt değil)." },
        { tip: "tuzak", baslik: "Rastgele olan p̂'dir, p değil", metin: "Parameter sabittir; olasılık ifadeleri p̂ hakkında kurulur.", yanlis: "p'nin 0,45'ten küçük olma olasılığı %0,1.", dogru: "p = 0,60 iken p̂'nin 0,45 ya da altında çıkma olasılığı yaklaşık 0,001." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "p̂ = x ÷ n; p̂'nin sampling distribution'ının mean'i μ_p̂ = p (yansız).",
            "SD: σ_p̂ = √(p(1−p) ÷ n); n'yi 4 katına çıkarmak SD'yi yarıya indirir.",
            "10% koşulu: rastgele örneklem ve çekimsiz seçimde n ≤ N ÷ 10 (bağımsızlık).",
            "Large Counts: np ≥ 10 ve n(1−p) ≥ 10 ise p̂ yaklaşık normaldir; n ≥ 30 kuralı oranlar için geçerli değildir.",
            "Olasılık: z = (p̂ − p) ÷ σ_p̂, tablo ya da normalcdf; ‘büyüktür’ için 1'den çıkar.",
            "Gerçek p bilinmiyorsa p̂ ile hesaplanan SD’ye *standard error* denir (sonraki ünitelerde).",
            "Çok düşük olasılıklı bir p̂, iddia edilen p'den şüphelenmek için bir nedendir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okulda öğrencilerin %30'u (p = 0,30) kütüphane üyesi. Okulun çok büyük olduğunu varsayarak, rastgele seçilen n = 100 öğrencilik örneklemde p̂'nin standard deviation'ı yaklaşık kaçtır?",
      opts: ["0,046", "0,21", "0,0021", "0,30"],
      a: 0,
      why: "σ_p̂ = √(p(1−p) ÷ n) = √(0,30 × 0,70 ÷ 100) = √0,0021 ≈ 0,046. 0,0021 karekökü almamaktır (varyans); 0,21 ise payda n'yi unutmaktır." },
    { q: "Aşağıdaki durumlardan hangisinde p̂'nin sampling distribution'ı için normal model uygundur? (Örneklemler rastgele ve popülasyonlar çok büyük.)",
      opts: ["n = 40, p = 0,10", "n = 300, p = 0,02", "n = 100, p = 0,95", "n = 200, p = 0,30"],
      a: 3,
      why: "Large Counts: n = 200, p = 0,30 için np = 60 ve n(1−p) = 140, ikisi de ≥ 10. A'da np = 4, B'de np = 6, C'de n(1−p) = 5 olduğu için koşul bozulur." },
    { q: "Bir kantinde müşterilerin %30'u (p = 0,30) tost alıyor. Rastgele seçilen n = 100 müşteride tost alanların oranının 0,35'ten büyük olma olasılığı yaklaşık kaçtır? (Koşullar sağlanıyor.)",
      opts: ["0,86", "0,14", "0,31", "0,50"],
      a: 1,
      why: "σ_p̂ = √(0,30 × 0,70 ÷ 100) ≈ 0,0458; z = (0,35 − 0,30) ÷ 0,0458 ≈ 1,09; P(Z > 1,09) = 1 − 0,8621 ≈ 0,14. 0,86 sol kuyruktur (1'den çıkarmayı unutmak); 0,31, SD yerine 0,10 kullanmanın sonucudur (z = 0,5)." },
    { q: "p = 0,40 olan bir popülasyondan n = 50 için p̂'nin standard deviation'ı yaklaşık 0,07'dir. Örneklem büyüklüğü n = 200 yapılırsa p̂'nin standard deviation'ı yaklaşık ne olur?",
      opts: ["0,0175", "0,035", "0,07", "0,14"],
      a: 1,
      why: "σ_p̂ ∝ 1 ÷ √n; n 4 katına çıkınca SD yarıya iner: 0,07 ÷ 2 = 0,035. A, n ile orantılı sanmaktır (4'e bölmek)." },
    { q: "Bir kantin sahibi öğrencilerin %60'ının simit sevdiğini iddia ediyor. Rastgele 100 öğrenciye soruluyor ve 45'i simit seçiyor (p̂ = 0,45). Koşullar sağlanıyor. Aşağıdakilerden hangisi doğrudur?",
      opts: ["p = 0,60 ise p̂'nin 0,45 ya da altında çıkması sık görülür; iddiayı sorgulamaya gerek yok.", "p̂ = 0,45 olduğuna göre p = 0,45 olduğu kesindir.", "p = 0,60 ise p̂'nin 0,45 ya da altında çıkma olasılığı çok düşüktür (z ≈ −3,06); iddiadan şüphelenmek için bir neden vardır.", "p'nin 0,45'ten küçük olma olasılığı yaklaşık 0,001'dir."],
      a: 2,
      why: "σ_p̂ ≈ 0,049 ve z = (0,45 − 0,60) ÷ 0,049 ≈ −3,06; olasılık yaklaşık 0,001. D en çekici yanlış şık: olasılık p̂ hakkındadır, p sabit bir parameter olduğu için ‘p'nin olasılığı’ denmez." }
  ]
};
