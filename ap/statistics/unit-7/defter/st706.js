/* Kitora not defteri · st706 · 7.8–7.9 İki Ortalama Farkı Testi
   Kaynak: AP Statistics CED 7.8–7.9 (öğrenme hedefleri kendi anlatımımla). Blok türleri: /ap/_kit/defter.js başı.
   Deney: n₁ = n₂ = 16, x̄₁ = 80, s₁ = 8, x̄₂ = 74, s₂ = 6 → SE = 2,5, t = 2,4; tablo df = 15 (0,01 < P < 0,025; tam 0,015), hesap makinesi df ≈ 27,8 (P ≈ 0,012).
   İkinci örnek: n = 25'er, x̄ = 7,4 ve 6,8, s = 1,5 ve 2,0 → SE = 0,5, t = 1,2; df = 24'te iki yönlü P > 0,20 (hesap makinesi ≈ 0,24).
   Grafik: x = t + 4, y = yoğunluk × 10. */
window.DEFTER = {
  slug: "st706",
  amac: "Bu konu, iki bağımsız grubun ortalamalarının farklı olup olmadığını *t* testiyle sınamayı anlatıyor. H₀: μ₁ − μ₂ = 0 hipotezini, t istatistiğini, df ve P-değerini, koşulları ve randomize deneyde neden-sonuç yorumunu öğreneceksin.",
  bolumler: [
    {
      baslik: "Hipotezler ve test istatistiği",
      kisa: "H₀: iki ortalama eşit; t, farkın SE cinsinden kaç birim olduğunu söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔀", terim: "Randomized experiment", tr: "rastgele atamalı deney", tanim: "Birimler iki gruba yazı-tura gibi ==rastgele atanır==; gruplar başlangıçta benzerdir, fark uygulamadan (*treatment*) kaynaklanabilir.", ornek: "32 gönüllü yazı-turayla flaş kart ya da tekrar okuma grubuna atanıyor." },
            { ikon: "⭐", terim: "Statistically significant", tr: "istatistiksel olarak anlamlı", tanim: "P-değeri α'dan küçük ya da eşit: gözlenen fark, yalnızca şansla açıklanması zor bir fark.", ornek: "P ≈ 0,012 < α = 0,05 → anlamlı." }
          ] },
        { tip: "tablo", baslik: "Soru cümlesinden hipotezlere (grup 1 − grup 2)", head: ["Soru", "H₀", "Hₐ"], rows: [
            ["Flaş kartla çalışanların ortalama puanı daha mı yüksek?", "μ₁ − μ₂ = 0", "μ₁ − μ₂ > 0"],
            ["İki sınıfın ortalama uyku süresi farklı mı?", "μ₁ − μ₂ = 0", "μ₁ − μ₂ ≠ 0"],
            ["Yeni yöntemle ortalama bekleme süresi daha mı kısa?", "μ₁ − μ₂ = 0", "μ₁ − μ₂ < 0"]
          ], not: "H₀: μ₁ = μ₂ biçiminde de yazılabilir. Hangi grubun 1 olduğunu State adımında tanımla; Hₐ'nın yönü buna bağlıdır." },
        { tip: "formul", parcalar: [{ t: "t", alt: "test istatistiği" }, "=", { t: "(x̄₁ − x̄₂) − 0", alt: "örnek farkı − H₀'daki fark" }, "÷", { t: "√( s₁²/n₁ + s₂²/n₂ )", alt: "SE" }],
          aciklama: "H₀'da fark 0 olduğu için pay x̄₁ − x̄₂ olur. Varyanslar birleştirilmez (*do not pool*). df: tabloda küçük olan n − 1, hesap makinesinde kesirli df." }
      ]
    },
    {
      baslik: "Koşullar: örnekleme mi, rastgele atama mı?",
      kisa: "Rastgele örnekleme genelleme sağlar; rastgele atama neden-sonuç sağlar.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎲", baslik: "Random", metin: "İki bağımsız rastgele örneklem ya da rastgele atamalı deney." },
            { ikon: "🔟", baslik: "10%", metin: "Örneklemde her grup için n ≤ popülasyonun %10'u. Rastgele atamalı deneyde aranmaz." },
            { ikon: "🔔", baslik: "Normal / Large Sample", metin: "Her grupta n ≥ 30 ya da n < 30 ise grubun grafiği yaklaşık simetrik, güçlü çarpıklık ve uç değer yok." }
          ] },
        { tip: "ikili", sol: { ikon: "🏷️", baslik: "Rastgele örnekleme", maddeler: ["Sonuç popülasyona genellenir", "Neden-sonuç söylenemez"] },
          sag: { ikon: "🔀", baslik: "Rastgele atama", maddeler: ["Fark, uygulamadan (*treatment*) kaynaklanabilir: neden-sonuç", "Genelleme, gönüllülere benzer birimlerle sınırlı"] },
          oyun: [
            { metin: "Okul listesinden rastgele 40 öğrenci seçilip iki gruba göre (ör. servis ve metro) karşılaştırılıyor.", cevap: "sol", neden: "Rastgele örnekleme var, rastgele atama yok: genelleme tamam, neden-sonuç yok." },
            { metin: "Gönüllüler yazı-turayla iki çalışma yöntemine atanıyor.", cevap: "sag", neden: "Rastgele atama: fark yönteme bağlanabilir." },
            { metin: "İki şehirden ayrı ayrı rastgele seçilen kişilerin günlük adım sayısı karşılaştırılıyor.", cevap: "sol", neden: "Gözlemsel karşılaştırma; sonuç şehirlere genellenir, neden söylenemez." },
            { metin: "Yeni bir ilaç ve plasebo, rastgele atanan hastalara veriliyor.", cevap: "sag", neden: "Randomize deney: neden-sonuç çıkarılabilir." }
          ] },
        { tip: "tuzak", baslik: "İki farklı “rastgele”", metin: "Sonucunun kapsamını doğru söylemek istiyorsan sorunun hangi rastgeleliği kullandığına bak.", yanlis: "Gruplar rastgele atandı, o hâlde sonuç bütün Türkiye'deki öğrencilere genellenir.", dogru: "Rastgele atama neden-sonuç verir; genelleme için rastgele örnekleme de gerekir. Gönüllülerle yapılan deneyde sonuç, gönüllülere benzer öğrencilerle sınırlı." }
      ]
    },
    {
      baslik: "Dört adım: flaş kart deneyi",
      kisa: "Tabloda temkinli df ile P < 0,025 çıkar; H₀ reddedilir.",
      bloklar: [
        { tip: "sekil", baslik: "Sınav puanları", fig: { type: "box", label: "Sınav puanı", items: [
            { name: "Flaş kart", min: 66, q1: 74, med: 80, q3: 86, max: 94 },
            { name: "Tekrar okuma", min: 63, q1: 70, med: 74, q3: 78.5, max: 85 }
          ] } },
        { tip: "ornek", baslik: "Flaş kart tekrar okumadan daha mı etkili?", durum: "32 gönüllü öğrenci yazı-turayla ikiye bölündü: 16'sı flaş kartla, 16'sı tekrar okuyarak çalıştı ve aynı sınavı çözdü. Flaş kart: x̄₁ = 80, s₁ = 8; tekrar okuma: x̄₂ = 74, s₂ = 6. Kutu grafikleri yaklaşık simetrik, uç değer yok. α = 0,05'te flaş kartın ortalama puanı artırdığına dair kanıt var mı?",
          adimlar: [
            "State: μ₁ = flaş kartla, μ₂ = tekrar okuyarak çalışan bu tür öğrencilerin gerçek ortalama sınav puanı. H₀: μ₁ − μ₂ = 0, Hₐ: μ₁ − μ₂ > 0. α = 0,05.",
            "Plan: *two-sample t test for μ₁ − μ₂*. Random: gönüllüler iki gruba rastgele atandı (10% koşulu aranmaz). Normal: n < 30 ama her grubun grafiği yaklaşık simetrik, uç değer yok.",
            "Do: x̄₁ − x̄₂ = 6. SE = √(8²/16 + 6²/16) = √(4 + 2,25) = 2,5. t = (6 − 0)/2,5 = 2,4. Tablo df = min(15, 15) = 15: 0,01 < P < 0,025 (hesap makinesi: df ≈ 27,8, P ≈ 0,012).",
            "Conclude: “Since the P-value (between 0.01 and 0.025) < α = 0.05, we reject H₀. There is convincing evidence that the true mean exam score is higher with flash cards than with rereading for students like these volunteers. Because treatments were randomly assigned, flash cards can be said to cause the higher scores.”"
          ],
          sonuc: "H₀ reddedilir: flaş kart lehine ikna edici kanıt var. Kapsam gönüllülere benzer öğrencilerle sınırlı; neden-sonuç, rastgele atamadan geliyor." },
        { tip: "grafik", baslik: "P-değeri: t = 2,4 sağındaki alan (df = 15)", xlabel: "t", ylabel: "Yoğunluk", xmax: 8, ymax: 5,
          xticks: [{ v: 1, label: "−3" }, { v: 2, label: "−2" }, { v: 3, label: "−1" }, { v: 4, label: "0" }, { v: 5, label: "1" }, { v: 6, label: "2" }, { v: 7, label: "3" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, etiket: "", noktalar: [[0, 0.012], [0.25, 0.02], [0.5, 0.033], [0.75, 0.055], [1, 0.091], [1.25, 0.15], [1.5, 0.242], [1.75, 0.383], [2, 0.592], [2.25, 0.888], [2.5, 1.283], [2.75, 1.776], [3, 2.341], [3.25, 2.923], [3.5, 3.438], [3.75, 3.795], [4, 3.924], [4.25, 3.795], [4.5, 3.438], [4.75, 2.923], [5, 2.341], [5.25, 1.776], [5.5, 1.283], [5.75, 0.888], [6, 0.592], [6.25, 0.383], [6.5, 0.242], [6.75, 0.15], [7, 0.091], [7.25, 0.055], [7.5, 0.033], [7.75, 0.02], [8, 0.012]] },
            { id: "h0", tip: "yazi", renk: 0, x: 4, y: 4.5, metin: "H₀ doğruyken t (df = 15)" },
            { id: "pt", tip: "nokta", renk: 1, x: 6.4, y: 0.291, etiket: "t = 2,4", gizli: true },
            { id: "tr", tip: "alan", renk: 2, noktalar: [[6.4, 0], [6.4, 0.291], [6.65, 0.182], [6.9, 0.111], [7.15, 0.068], [7.4, 0.041], [7.65, 0.024], [7.9, 0.014], [8, 0.012], [8, 0]], gizli: true },
            { id: "pl", tip: "yazi", renk: 2, x: 6.9, y: 1.7, metin: "P < 0,025", gizli: true },
            { id: "pl2", tip: "yazi", renk: 2, x: 6.9, y: 1.1, metin: "tam P ≈ 0,015", gizli: true }
          ],
          durumlar: [
            { metin: "H₀: μ₁ − μ₂ = 0 doğruyken t istatistiği t eğrisini izler (tabloda temkinli df = 15)." },
            { metin: "Örnekten t = 6/2,5 = 2,4 bulundu.", goster: ["pt"] },
            { metin: "Hₐ: μ₁ − μ₂ > 0 olduğu için sağ kuyruk: tabloya göre ==0,01 < P < 0,025==.", goster: ["tr", "pl"] },
            { metin: "Tam değer df = 15'te 0,015; hesap makinesinin df ≈ 27,8'i 0,012 verir. Hepsi α = 0,05'in altında.", goster: ["pl2"] }
          ] }
      ]
    },
    {
      baslik: "P-değerini tablodan ve hesap makinesinden bulmak",
      kisa: "Tablo temkinli df kullanır ve aralık verir; hesap makinesi kesirli df ile tam değer verir.",
      bloklar: [
        { tip: "tablo", baslik: "Flaş kart deneyi, t = 2,4 (Hₐ: μ₁ − μ₂ > 0)", head: ["Yol", "df", "P-değeri"], rows: [
            ["Tablo (temkinli)", "min(15, 15) = 15", "0,01 < P < 0,025"],
            ["Hesap makinesi (2-SampTTest)", "≈ 27,8", "≈ 0,012"]
          ], not: "Tablo df'i küçük aldığı için P-değerini biraz büyük gösterir. Kararlar genelde aynı kalır; sınırdaysa hesap makinesi değerini kullan." },
        { tip: "adimlar", baslik: "Hesap makinesinde 2-SampTTest", adimlar: [
            { baslik: "1 · Menü", metin: "STAT → TESTS → 4:2-SampTTest…" },
            { baslik: "2 · Veri", metin: "Inpt: Stats; x̄₁, Sx₁, n₁, x̄₂, Sx₂, n₂ değerlerini gir." },
            { baslik: "3 · Seçenekler", metin: "μ₁: > μ₂ (soruya göre); Pooled: No (hep No)." },
            { baslik: "4 · Oku", metin: "t = 2,4, p ≈ 0,012, df ≈ 27,8. Bunları yaz; Plan ve Conclude'u yine yazman gerekir." }
          ] }
      ]
    },
    {
      baslik: "Fark kanıtı yoksa: iki sınıfın uykusu",
      kisa: "Örnek ortalamaları farklı olabilir; P büyükse popülasyon farkı için kanıt yok.",
      bloklar: [
        { tip: "ornek", baslik: "10. ve 12. sınıfın uyku süresi farklı mı?", durum: "Her sınıf düzeyinden rastgele seçilen 25'er öğrencinin günlük uyku süresi: 10. sınıf x̄₁ = 7,4 saat, s₁ = 1,5; 12. sınıf x̄₂ = 6,8 saat, s₂ = 2,0. Her iki grafik yaklaşık simetrik, uç değer yok; 25, her sınıf düzeyinin %10'undan az. α = 0,05.",
          adimlar: [
            "State: μ₁ − μ₂ = 10. ve 12. sınıf öğrencilerinin gerçek ortalama uyku süreleri arasındaki fark (saat). H₀: μ₁ − μ₂ = 0, Hₐ: μ₁ − μ₂ ≠ 0. α = 0,05.",
            "Plan: *two-sample t test for μ₁ − μ₂*. Random: iki bağımsız rastgele örneklem. 10%: sağlanıyor. Normal: n < 30 ama grafikler yaklaşık simetrik, uç değer yok.",
            "Do: x̄₁ − x̄₂ = 0,6. SE = √(1,5²/25 + 2,0²/25) = √(0,09 + 0,16) = 0,5. t = 0,6/0,5 = 1,2. Tablo df = 24: 1,2 < 1,318 (kuyruk 0,10) → tek kuyruk > 0,10, iki yönlü P > 0,20 (hesap makinesi P ≈ 0,24).",
            "Conclude: “Since the P-value ≈ 0.24 > α = 0.05, we fail to reject H₀. We do not have convincing evidence that the true mean sleep time differs between 10th and 12th graders.”"
          ],
          sonuc: "H₀ reddedilemez. Bu, iki sınıfın ortalama uykusunun eşit olduğunu kanıtlamaz; yalnızca fark için yeterli kanıt yok." },
        { tip: "tuzak", baslik: "Örnek farkı ile popülasyon farkı", metin: "7,4 ile 6,8 arasındaki 0,6 saatlik fark gözle büyük görünebilir; ama SE = 0,5 olduğu için t yalnızca 1,2.", yanlis: "Ortalamalar farklı (7,4 ve 6,8); o hâlde 10. ve 12. sınıfın gerçek ortalamaları da farklıdır.", dogru: "Bu fark örneklem değişkenliğiyle kolayca açıklanabilir. P ≈ 0,24 büyük: H₀ reddedilemez, fark için ikna edici kanıt yok." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "H₀: μ₁ − μ₂ = 0; Hₐ: μ₁ − μ₂ >, <, ≠ 0. Hangi grubun 1 olduğunu State'te yaz.",
            "t = ((x̄₁ − x̄₂) − 0)/√(s₁²/n₁ + s₂²/n₂); varyanslar birleştirilmez.",
            "df: tabloda min(n₁ − 1, n₂ − 1); hesap makinesi kesirli df ve tam P-değeri verir.",
            "Koşullar: *Random* (iki bağımsız rastgele örneklem ya da rastgele atama), 10% (örneklemde), Normal/Large Sample her grup için.",
            "Rastgele örnekleme → popülasyona genelleme; rastgele atama → neden-sonuç; ikisi ayrı ayrı iddia edilir.",
            "P ≤ α → *reject H₀*, ikna edici kanıt var; P > α → *fail to reject H₀*, fark için kanıt yok (eşitlik kanıtlanmaz).",
            "Eşleştirilmiş veriye bu test uygulanmaz; farkları al."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kantin, öğrencileri rastgele iki gruba ayırıyor: 1. gruba yeni etiketli menü, 2. gruba eski etiketli menü gösteriliyor. Yeni etiketin ortalama harcamayı artırdığı iddiası sınanacaktır. μ₁ ve μ₂ ilgili gerçek ortalama harcamalar olduğuna göre hipotezler hangisidir?",
      opts: ["H₀: x̄₁ − x̄₂ = 0, Hₐ: x̄₁ − x̄₂ > 0", "H₀: μ₁ − μ₂ = 0, Hₐ: μ₁ − μ₂ ≠ 0", "H₀: μ₁ − μ₂ = 0, Hₐ: μ₁ − μ₂ > 0", "H₀: μ₁ − μ₂ > 0, Hₐ: μ₁ − μ₂ = 0"], a: 2,
      why: "Aranan değişiklik “yeni etiket (grup 1) daha yüksek harcama” olduğu için Hₐ: μ₁ − μ₂ > 0; H₀ eşitliktir. x̄ ile yazılan şık, hipotezi örnek istatistiğine bağlar; ≠ iki yönlü olurdu." },
    { q: "10. ve 12. sınıftan rastgele seçilen 25'er öğrencinin günlük uyku süresi karşılaştırılıyor (grafikler yaklaşık simetrik, uç değer yok). H₀: μ₁ − μ₂ = 0 için t istatistiği ve tablo yolunda temkinli df nedir?",
      fig: { type: "table", head: ["Grup", "n", "x̄ (saat)", "s (saat)"], rows: [["10. sınıf", "25", "7,4", "1,5"], ["12. sınıf", "25", "6,8", "2,0"]], caption: "Günlük uyku süresi" },
      opts: ["t = 1,2; df = 24", "t = 1,2; df = 48", "t = 0,6; df = 24", "t = 2,4; df = 24"], a: 0,
      why: "SE = √(1,5²/25 + 2,0²/25) = √0,25 = 0,5; t = 0,6/0,5 = 1,2; tablo yolunda df = min(24, 24) = 24. df = 48 şıkkı n₁ + n₂ − 2'dir (birleştirilmiş); t = 0,6 şıkkı farkı SE'ye bölmeyi unutur." },
    { q: "Aynı verilerle Hₐ: μ₁ − μ₂ ≠ 0 testi yapılıyor (t = 1,2, df = 24; df = 24 için 0,10 kuyruk alanına denk t∗ = 1,318). t tablosuna göre P-değeri ve α = 0,05'teki karar hangisidir?",
      opts: ["P < 0,05; H₀ reddedilir.", "0,05 < P < 0,10; H₀ reddedilemez.", "0,10 < P < 0,20; H₀ reddedilir.", "P > 0,20; H₀ reddedilemez."], a: 3,
      why: "t = 1,2 < 1,318 olduğu için tek kuyruk alanı 0,10'dan büyük; iki yönlü P ise bunun iki katı, yani 0,20'den büyük. P > α olduğu için H₀ reddedilemez." },
    { q: "Bir çalışmada 40 gönüllü öğrenci yazı-turayla iki çalışma yöntemine atanıyor ve iki örneklemli bir t testi P-değerini 0,01 buluyor (koşullar sağlanıyor). α = 0,05 için hangi sonuç haklıdır?",
      opts: ["Sonuç, Türkiye'deki bütün öğrencilere genellenebilir.", "Rastgele atama olduğu için yöntemler arasındaki farkın yöntemden kaynaklandığı söylenebilir; kapsam gönüllülere benzer öğrencilerle sınırlıdır.", "Gönüllü olduğu için hiçbir neden-sonuç çıkarılamaz.", "H₀ reddedilemez, çünkü gönüllülerle çalışılmıştır."], a: 1,
      why: "P = 0,01 < 0,05: H₀ reddedilir. Rastgele atama neden-sonuç yorumuna izin verir; gönüllüler rastgele örneklem olmadığı için genelleme sınırlıdır. İlk şık yalnızca rastgele atamayla genelleme yapar." },
    { q: "Aynı t istatistiği için tablodaki temkinli df (küçük olan n − 1) kullanılırsa, hesap makinesinin kesirli df'ine göre P-değeri nasıl değişir?",
      opts: ["Biraz daha küçük çıkar.", "Biraz daha büyük çıkar; yöntem temkinlidir.", "Tamamen aynı çıkar.", "df'in P-değerini etkilemesi beklenmez."], a: 1,
      why: "Daha küçük df, t eğrisinin kuyruklarını kalınlaştırır; aynı t için kuyruk alanı daha büyük olur. Yani tablo yolu H₀'ı reddetmeyi biraz zorlaştırır (temkinli)." }
  ]
};
