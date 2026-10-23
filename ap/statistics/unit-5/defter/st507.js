/* Kitpath not defteri · st507 · 5.8 Ortalama Farkının Dağılımı
   Kapsam: x̄₁ − x̄₂ sampling distribution (mean μ₁ − μ₂, SD √(σ₁²/n₁ + σ₂²/n₂)), bağımsızlık, 10%, her grup için normal ya da n ≥ 30, olasılık hesabı. */
window.DEFTER = {
  slug: "st507",
  amac: "Bu konu, iki bağımsız örneklemin ortalamaları arasındaki farkın (x̄₁ − x̄₂) sampling distribution'ını anlatıyor. Farkın merkezini, yayılımını (varyanslar toplanır), koşulları ve olasılık hesabını öğreneceksin.",
  bolumler: [
    {
      baslik: "İki ortalama, bir fark",
      kisa: "x̄₁ − x̄₂: iki bağımsız örneklemin ortalamaları arasındaki fark.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➖", terim: "Difference in sample means", tr: "örneklem ortalamaları farkı (x̄₁ − x̄₂)", tanim: "İki ayrı popülasyondan alınan örneklemlerin ortalamalarının farkı; her örneklem çiftinde yeni bir değer alır.", ornek: "A okulundan 36 kişinin ortalama çalışma süresi − B okulundan 64 kişinin ortalama çalışma süresi." },
            { ikon: "🔀", terim: "Independent samples", tr: "bağımsız örneklemler", tanim: "Bir gruptaki seçimlerin diğer gruptaki seçimleri etkilemediği iki örneklem (ya da randomized experiment'te rastgele atama).", ornek: "İki okuldan ayrı ayrı çekilen rastgele örneklemler." }
          ] },
        { tip: "tablo", baslik: "Bu defterin örneği: günlük ders çalışma süresi (dakika)", head: ["", "A okulu (1. grup)", "B okulu (2. grup)"], rows: [
            ["Popülasyon mean'i", "μ₁ = 90", "μ₂ = 80"],
            ["Popülasyon SD'si", "σ₁ = 30", "σ₂ = 40"],
            ["Örneklem büyüklüğü", "n₁ = 36", "n₂ = 64"]
          ], not: "Her okul 1.000 öğrenciden büyük; iki örneklem rastgele ve birbirinden bağımsız." }
      ]
    },
    {
      baslik: "Merkez ve yayılım",
      kisa: "Mean farkların farkıdır; varyanslar toplanır, sonra karekök alınır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "μ_(x̄₁−x̄₂)", alt: "farkın mean'i" }, "=", { t: "μ₁ − μ₂", alt: "gerçek mean'lerin farkı" }], aciklama: "x̄₁ − x̄₂, μ₁ − μ₂ için yansız bir tahmin edicidir." },
        { tip: "formul", parcalar: [{ t: "σ_(x̄₁−x̄₂)", alt: "farkın SD'si" }, "=", { t: "√( σ₁²/n₁ + σ₂²/n₂ )", alt: "iki varyans toplanır" }], aciklama: "Her σ²/n değeri, bir x̄'nin varyansıdır; gruplar bağımsız olduğu için toplanır." },
        { tip: "ornek", baslik: "Ders çalışma örneği: mean ve SD", durum: "μ₁ = 90, σ₁ = 30, n₁ = 36 ve μ₂ = 80, σ₂ = 40, n₂ = 64.",
          adimlar: ["Mean: 90 − 80 = 10 dakika.", "Varyanslar: 30² ÷ 36 = 900 ÷ 36 = 25 ve 40² ÷ 64 = 1.600 ÷ 64 = 25.", "Toplam: 25 + 25 = 50; karekök: √50 ≈ 7,07."],
          sonuc: "x̄₁ − x̄₂ dağılımının mean'i ==10 dk==, SD'si ==≈ 7,07 dk==." },
        { tip: "tuzak", baslik: "SD'leri toplamak ya da çıkarmak", metin: "Her x̄'nin SD'si 5'tir (30 ÷ 6 ve 40 ÷ 8), ama fark dağılımının SD'si 5 + 5 ya da 5 − 5 değildir.", yanlis: "σ = 5 + 5 = 10 (ya da 5 − 5 = 0).", dogru: "Varyanslar toplanır: 25 + 25 = 50; σ = √50 ≈ 7,07. Fark dağılımı her bir x̄ dağılımından daha geniştir." }
      ]
    },
    {
      baslik: "Üç dağılım yan yana",
      kisa: "Fark dağılımı 10 dk merkezli ve her iki x̄ dağılımından daha geniştir.",
      bloklar: [
        { tip: "grafik", baslik: "x̄₁, x̄₂ ve x̄₁ − x̄₂", xlabel: "Ortalama ya da ortalama farkı (dk)", ylabel: "", xmax: 13, ymax: 10,
          xticks: [{ v: 0, label: "−20" }, { v: 2, label: "0" }, { v: 4, label: "20" }, { v: 6, label: "40" }, { v: 8, label: "60" }, { v: 10, label: "80" }, { v: 12, label: "100" }],
          ogeler: [
            { id: "e1", tip: "egri", renk: 0, etiket: "", noktalar: [[9.25,0.02],[9.47,0.08],[9.69,0.28],[9.91,0.8],[10.13,1.9],[10.34,3.71],[10.56,5.99],[10.78,7.98],[11,8.78],[11.22,7.98],[11.44,5.99],[11.66,3.71],[11.88,1.9],[12.09,0.8],[12.31,0.28],[12.53,0.08],[12.75,0.02]] },
            { id: "l1", tip: "yazi", x: 12.3, y: 6, metin: "x̄₁" },
            { id: "e2", tip: "egri", renk: 1, etiket: "", gizli: true, noktalar: [[8.25,0.02],[8.47,0.08],[8.69,0.28],[8.91,0.8],[9.13,1.9],[9.34,3.71],[9.56,5.99],[9.78,7.98],[10,8.78],[10.22,7.98],[10.44,5.99],[10.66,3.71],[10.88,1.9],[11.09,0.8],[11.31,0.28],[11.53,0.08],[11.75,0.02]] },
            { id: "l2", tip: "yazi", x: 8.7, y: 6, metin: "x̄₂", gizli: true },
            { id: "d", tip: "egri", renk: 2, etiket: "", gizli: true, noktalar: [[0.53,0.01],[0.83,0.06],[1.14,0.2],[1.45,0.57],[1.76,1.34],[2.07,2.62],[2.38,4.23],[2.69,5.64],[3,6.21],[3.31,5.64],[3.62,4.23],[3.93,2.62],[4.24,1.34],[4.55,0.57],[4.86,0.2],[5.17,0.06],[5.47,0.01]] },
            { id: "ld", tip: "yazi", x: 3, y: 7.4, metin: "x̄₁ − x̄₂", gizli: true },
            { id: "z", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 9.3], etiket: "fark = 0", gizli: true },
            { id: "a", tip: "alan", renk: 3, gizli: true, noktalar: [[0.53,0],[0.53,0.01],[0.65,0.03],[0.78,0.04],[0.9,0.07],[1.02,0.12],[1.14,0.2],[1.27,0.31],[1.39,0.46],[1.51,0.67],[1.63,0.96],[1.76,1.32],[1.88,1.76],[2,2.28],[2,0]] },
            { id: "ya", tip: "yazi", x: 1.2, y: 1.2, metin: "≈ 0,08", gizli: true }
          ],
          durumlar: [
            { metin: "x̄₁ (A okulu): mean 90, SD 30 ÷ √36 = 5." },
            { metin: "x̄₂ (B okulu): mean 80, SD 40 ÷ √64 = 5. İki dağılım kısmen üst üste biniyor.", goster: ["e2", "l2"] },
            { metin: "Fark x̄₁ − x̄₂: mean ==10==, SD ==≈ 7,07==. Merkez 90 − 80; ==daha geniş==, çünkü varyanslar toplandı.", goster: ["d", "ld"] },
            { metin: "Fark = 0 çizgisinin solundaki alan, B okulunun örneklemde daha yüksek çıkma olasılığıdır: ==≈ 0,08==.", goster: ["z", "a", "ya"] }
          ] },
        { tip: "tablo", baslik: "Özet", head: ["Statistic", "Mean (dk)", "SD (dk)"], rows: [["x̄₁", "90", "5"], ["x̄₂", "80", "5"], ["x̄₁ − x̄₂", "10", "≈ 7,07"]], vurgu: 2 }
      ]
    },
    {
      baslik: "Çözümlü örnek: P(x̄₁ − x̄₂ < 0)",
      kisa: "Gerçekte μ₁ > μ₂ olsa bile örneklemde ters çıkabilir; olasılığı z verir.",
      bloklar: [
        { tip: "ornek", baslik: "A okulu örneklemde geride kalır mı?", durum: "Ders çalışma örneğinde (A: μ₁ = 90, σ₁ = 30, n₁ = 36; B: μ₂ = 80, σ₂ = 40, n₂ = 64) A okulu örneklem ortalamasının B okulununkinden küçük çıkma olasılığı nedir?",
          adimlar: ["Dağılım: x̄₁ − x̄₂; mean 10, SD ≈ 7,07.", "Koşullar: iki bağımsız rastgele örneklem; 10% ✓ (36 ve 64, 1.000'in %10'undan küçük); n₁ = 36 ≥ 30 ve n₂ = 64 ≥ 30 → her x̄ yaklaşık normal, fark da.", "z = (0 − 10) ÷ 7,07 ≈ −1,41.", "Tablo: P(Z < −1,41) = 1 − 0,9207 = 0,0793."],
          sonuc: "Olasılık ≈ ==0,08==: A okulu gerçekte 10 dk daha çok çalışıyor olsa da, örneklemlerin yaklaşık %8'inde sonuç ters çıkar." },
        { tip: "tuzak", baslik: "Paydada yanlış SD", metin: "z'nin paydası fark dağılımının SD'sidir, tek bir x̄'nin SD'si değil.", yanlis: "z = (0 − 10) ÷ 5 = −2 ve P ≈ 0,023.", dogru: "z = (0 − 10) ÷ 7,07 ≈ −1,41 ve P ≈ 0,079." }
      ]
    },
    {
      baslik: "Koşullar: bağımsızlık, 10% ve şekil",
      kisa: "Bağımsız örneklemler, 10% ve iki grupta da normal ya da n ≥ 30.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🔀", baslik: "Independent", metin: "İki ayrı rastgele örneklem ya da randomized experiment; eşli ya da tekrarlı ölçüm değil." },
            { ikon: "🔟", baslik: "10%", metin: "n₁ ≤ N₁ ÷ 10 ve n₂ ≤ N₂ ÷ 10 (çekimsiz seçimde)." },
            { ikon: "🔔", baslik: "Normal / Large sample", metin: "Her popülasyon normal ya da n₁ ≥ 30 ve n₂ ≥ 30 (çok çarpıksa daha büyük n)." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Koşullar *sağlanıyor*", maddeler: ["İki bağımsız grup", "Her grupta normal ya da n ≥ 30", "n ≤ N ÷ 10"] },
          sag: { ikon: "⚠️", baslik: "Bir koşul *bozuk*", maddeler: ["Aynı kişiler iki kez", "Bir grupta çarpık ve küçük n", "n > N ÷ 10"] },
          oyun: [
            { metin: "İki okuldan bağımsız rastgele 36 ve 64 öğrenci (okullar 1.000+ öğrenci); şekil bilinmiyor.", cevap: "sol", neden: "n₁, n₂ ≥ 30 ve 10% tamam." },
            { metin: "Çarpık iki popülasyondan n₁ = 45 ve n₂ = 12.", cevap: "sag", neden: "n₂ küçük ve popülasyon çarpık: x̄₂ normal değil, fark da değil." },
            { metin: "Normal dağılan iki popülasyondan bağımsız rastgele n₁ = 8 ve n₂ = 10.", cevap: "sol", neden: "Her popülasyon normal: x̄'ler her n için normal." },
            { metin: "Aynı 40 öğrencinin sınav öncesi ve sonrası ders çalışma süreleri.", cevap: "sag", neden: "Bağımsız iki örneklem değil: eşli veri." },
            { metin: "100 öğrencilik bir sınıf düzeyinden rastgele 30 öğrenci.", cevap: "sag", neden: "10%: 30 > 10." }
          ] },
        { tip: "tuzak", baslik: "Eşli veride bu formül kullanılmaz", metin: "Aynı kişilerin iki ölçümü (önce–sonra) bağımsız iki örneklem değildir.", yanlis: "40 öğrencinin önce ve sonra süreleri için σ = √(σ₁²/n + σ₂²/n).", dogru: "Eşli veride her kişinin farkı alınır ve o farkların tek bir dağılımı incelenir (sonraki ünitelerde)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "x̄₁ − x̄₂, iki bağımsız örneklemin ortalamaları arasındaki farktır; μ₁ − μ₂ için yansız tahmin edicidir.",
            "Mean: μ_(x̄₁−x̄₂) = μ₁ − μ₂.",
            "SD: σ_(x̄₁−x̄₂) = √( σ₁²/n₁ + σ₂²/n₂ ); varyanslar toplanır, SD'ler değil.",
            "Fark dağılımı, her bir x̄ dağılımından daha geniştir.",
            "Koşullar: iki bağımsız örneklem (ya da randomized experiment), her biri için 10%, ve her grupta normal popülasyon ya da n ≥ 30.",
            "Olasılık: z = (fark − (μ₁ − μ₂)) ÷ σ_(x̄₁−x̄₂); işareti ve kuyruğu doğru seç.",
            "Eşli (aynı kişilerin iki ölçümü) veriye bu formül uygulanmaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "İki popülasyonun mean'leri μ₁ = 50 ve μ₂ = 42. Her popülasyondan bağımsız birer rastgele örneklem alınıyor. x̄₁ − x̄₂'nin sampling distribution'ının mean'i kaçtır?",
      opts: ["92", "8", "−8", "4"],
      a: 1,
      why: "μ_(x̄₁−x̄₂) = μ₁ − μ₂ = 50 − 42 = 8. 92 mean'leri toplamak, 4 ise farkı ikiye bölmektir; −8 sırayı ters almaktır." },
    { q: "Bağımsız iki rastgele örneklemde σ₁ = 12, n₁ = 36 ve σ₂ = 16, n₂ = 64. x̄₁ − x̄₂'nin standard deviation'ı yaklaşık kaçtır?",
      opts: ["2,83", "4", "8", "16"],
      a: 0,
      why: "σ₁²/n₁ = 144 ÷ 36 = 4 ve σ₂²/n₂ = 256 ÷ 64 = 4. Toplam 8; karekök √8 ≈ 2,83. 4, iki SD'yi (2 + 2) toplamaktır; 8 karekök almayı unutmaktır." },
    { q: "İki popülasyon da güçlü biçimde sağa çarpık. Bağımsız ve rastgele örneklemler alınıyor. Hangi örneklem büyüklükleri çiftinde x̄₁ − x̄₂ için normal model en makuldür? (Popülasyonlar çok büyük.)",
      opts: ["n₁ = 45, n₂ = 12", "n₁ = 12, n₂ = 45", "n₁ = 15, n₂ = 20", "n₁ = 40, n₂ = 50"],
      a: 3,
      why: "Çarpık popülasyonlarda her iki örneklem büyüklüğü de ≥ 30 olmalıdır (CLT). Yalnızca D'de n₁ = 40 ve n₂ = 50 koşulu sağlar. A ve B'de küçük olan grup çarpıklığı fark dağılımına taşır." },
    { q: "İki şehirde haftalık ekran süresi (saat) ölçülüyor. 1. şehir: μ₁ = 46, σ₁ = 20, n₁ = 50; 2. şehir: μ₂ = 40, σ₂ = 20, n₂ = 50. Örneklemler bağımsız, rastgele ve popülasyonlar çok büyük. x̄₁ − x̄₂ < 0 olma olasılığı yaklaşık kaçtır?",
      opts: ["0,933", "0,159", "0,067", "0,023"],
      a: 2,
      why: "Mean 46 − 40 = 6; SD = √(400 ÷ 50 + 400 ÷ 50) = √16 = 4; z = (0 − 6) ÷ 4 = −1,5; P(Z < −1,5) = 0,0668 ≈ 0,067. 0,933 sağ kuyruktur; 0,159 SD'yi 6, 0,023 SD'yi 3 almanın sonucudur." },
    { q: "Bir benzetimde bağımsız iki popülasyondan çok sayıda örneklem çiftiyle x̄₁ ve x̄₂ hesaplanıyor. Sonuçlar tabloda özetlenmiştir. x̄₁ − x̄₂ değerlerinin standard deviation'ı yaklaşık kaçtır?",
      fig: { type: "table", caption: "Benzetim özeti", head: ["Statistic", "SD"], rows: [["x̄₁", "3"], ["x̄₂", "4"]] },
      opts: ["1", "7", "5", "25"],
      a: 2,
      why: "Bağımsız olduklarından varyanslar toplanır: 3² + 4² = 9 + 16 = 25; karekök 5. 7, SD'leri toplamak; 1, SD'leri çıkarmak; 25 karekök almayı unutmaktır." }
  ]
};
