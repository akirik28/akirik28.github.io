/* Kitpath not defteri · st904 · 9.6 Bütün Çıkarım Yöntemleri: Seçim
   Kaynak: AP Statistics CED Unit 9 (Topic 9.6; Unit 6–9 yöntemlerinin hepsini kapsar). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st904",
  amac: "Bu konu AP Statistics’in bütün çıkarım yöntemleri arasından doğru olanı seçmeyi anlatıyor: oranlar, ortalamalar, eşli veri, ki-kare testleri ve eğim. Sorudaki veri durumuna bakıp yöntemi, parametreyi ve koşulları seçmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Üç soru: veri türü, grup sayısı, amaç",
      kisa: "Önce veri kategorik mi sayısal mı, sonra kaç grup, sonra tahmin mi test mi.",
      bloklar: [
        { tip: "adimlar", baslik: "Her çıkarım sorusunda sor", adimlar: [
            { baslik: "1 · Veri kategorik mi, sayısal mı?", metin: "Evet / hayır ve kategori sayıları ⇒ oran ya da ki-kare. Ölçülen ya da sayılan miktar ⇒ ortalama (t) ya da eğim (t)." },
            { baslik: "2 · Kaç grup, nasıl toplandı?", metin: "Tek örneklem, iki bağımsız grup, eşli ölçümler (aynı birim iki kez) ya da aynı birimlerde iki sayısal değişken?" },
            { baslik: "3 · Ne isteniyor?", metin: "Parametreyi tahmin (güven aralığı) mi, iddiayı sınama (test) mi? Ki-kare testleri aralık vermez." }
          ] },
        { tip: "harita", merkez: "Hangi çıkarım yöntemi?", dallar: [
            { baslik: "Kategorik · 1 grup · 2 sonuç", alt: "Tek oran z (p)" },
            { baslik: "Kategorik · 2 grup · 2 sonuç", alt: "İki oran z (p₁ − p₂)" },
            { baslik: "Kategorik · 3+ kategori ya da grup", alt: "χ² uyum iyiliği, homojenlik, bağımsızlık" },
            { baslik: "Sayısal · 1 grup", alt: "Tek örneklem t (μ)" },
            { baslik: "Sayısal · eşli ölçümler", alt: "Eşli t (μ_d)" },
            { baslik: "Sayısal · 2 bağımsız grup", alt: "İki örneklem t (μ₁ − μ₂)" },
            { baslik: "İki sayısal değişken · ilişki", alt: "Eğim için t (β)" }
          ] }
      ]
    },
    {
      baslik: "Bütün yöntemler iki tabloda",
      kisa: "Parametre, istatistik, df ve koşul her yöntemde farklıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Kategorik veri", head: ["Yöntem", "Parametre / H₀", "İstatistik", "df", "Koşul"], rows: [
            ["Tek oran z", "p = p₀", "z = (p̂ − p₀) ÷ √(p₀(1 − p₀) ÷ n)", "–", "np ≥ 10, n(1 − p) ≥ 10"],
            ["İki oran z", "p₁ = p₂", "z = (p̂₁ − p̂₂) ÷ √(p̂c(1 − p̂c)(1/n₁ + 1/n₂))", "–", "Testte n₁p̂c, n₁(1 − p̂c), n₂p̂c, n₂(1 − p̂c) ≥ 10; aralıkta her grupta başarı ve başarısızlık ≥ 10"],
            ["χ² uyum iyiliği", "Dağılım iddia edildiği gibi", "χ² = Σ (O − E)² / E", "k − 1", "Bütün E ≥ 5"],
            ["χ² homojenlik / bağımsızlık", "Dağılım aynı / değişkenler bağımsız", "χ² = Σ (O − E)² / E", "(r − 1)(c − 1)", "Bütün E ≥ 5"]
          ], not: "Hepsinde *Random* ve %10 (bağımsızlık) koşulları da var. z yöntemleri güven aralığı verir; ki-kare vermez." },
        { tip: "tablo", baslik: "Sayısal veri", head: ["Yöntem", "Parametre / H₀", "İstatistik", "df", "Koşul"], rows: [
            ["Tek örneklem t", "μ = μ₀", "t = (x̄ − μ₀) ÷ (s / √n)", "n − 1", "n ≥ 30 ya da veri yaklaşık normal (uç değer yok)"],
            ["Eşli t", "μ_d = 0 (farkların ortalaması)", "t = (x̄_d − 0) ÷ (s_d / √n)", "n − 1", "Farklar için aynı: n ≥ 30 ya da yaklaşık normal"],
            ["İki örneklem t", "μ₁ = μ₂", "t = (x̄₁ − x̄₂) ÷ √(s₁²/n₁ + s₂²/n₂)", "Teknoloji (ya da en küçük n − 1)", "Her grup için: n ≥ 30 ya da yaklaşık normal"],
            ["Eğim için t", "β = 0", "t = b ÷ SE_b", "n − 2", "LINER: Linear, Independent, Normal, Equal SD, Random"]
          ], not: "t yöntemlerinin hepsi aralık da verir: istatistik ± t∗ · standart hata." }
      ]
    },
    {
      baslik: "Eşli mi, iki grup mu, eğim mi?",
      kisa: "Aynı birimden iki ölçüm: eşli. Ayrı iki grup: iki örneklem. İki sayısal değişken: eğim.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Paired data", tr: "eşli veri", tanim: "Aynı birimden (ya da eşleştirilmiş bir çiftten) iki ölçüm. Analiz her çiftin farkı üzerinden yapılır.", ornek: "Her öğrencinin kahveden önce ve sonra reaksiyon süresi." },
            { ikon: "👥", terim: "Independent samples", tr: "bağımsız örneklemler", tanim: "Birbirinden ayrı iki grup; bir gruptaki birim öbüründe yok.", ornek: "Rastgele atanmış enerji içeceği grubu ve plasebo grubu." }
          ] },
        { tip: "grafik", baslik: "Aynı noktalar, üç farklı yapı", xlabel: "", ylabel: "", xmax: 10, ymax: 8,
          xticks: [], yticks: [],
          ogeler: [
            { id: "l1", tip: "cizgi", renk: 1, from: [2, 2], to: [7, 3] }, { id: "l2", tip: "cizgi", renk: 1, from: [2, 3], to: [7, 3.5] },
            { id: "l3", tip: "cizgi", renk: 1, from: [2, 4], to: [7, 5.5] }, { id: "l4", tip: "cizgi", renk: 1, from: [2, 5], to: [7, 5.5] },
            { id: "l5", tip: "cizgi", renk: 1, from: [2, 6], to: [7, 7.5] },
            { id: "b1", tip: "nokta", renk: 0, x: 2, y: 2 }, { id: "b2", tip: "nokta", renk: 0, x: 2, y: 3 }, { id: "b3", tip: "nokta", renk: 0, x: 2, y: 4 },
            { id: "b4", tip: "nokta", renk: 0, x: 2, y: 5 }, { id: "b5", tip: "nokta", renk: 0, x: 2, y: 6 },
            { id: "a1", tip: "nokta", renk: 2, x: 7, y: 3 }, { id: "a2", tip: "nokta", renk: 2, x: 7, y: 3.5 }, { id: "a3", tip: "nokta", renk: 2, x: 7, y: 5.5 },
            { id: "a4", tip: "nokta", renk: 2, x: 7, y: 5.5 }, { id: "a5", tip: "nokta", renk: 2, x: 7, y: 7.5 },
            { id: "t1", tip: "yazi", x: 2, y: 0.6, metin: "önce" }, { id: "t2", tip: "yazi", x: 7, y: 0.6, metin: "sonra" },
            { id: "rl", tip: "cizgi", renk: 3, from: [0.5, 1.15], to: [9.5, 7.45], etiket: "ŷ = a + bx", gizli: true }
          ],
          durumlar: [
            { metin: "==Eşli veri==: her çizgi aynı birimin iki ölçümü. Çiftlerin farkı alınır ve tek örneklem gibi analiz edilir: *paired t*." },
            { metin: "Aynı sayılar ama çiftler dağıldı: iki ==ayrı grup==, eşleşme yok. Gruplar ortalamalarla karşılaştırılır: *two-sample t*.",
              gizle: ["l1", "l2", "l3", "l4", "l5"],
              set: { b1: { y: 4 }, b2: { y: 2 }, b3: { y: 6 }, b4: { y: 3 }, b5: { y: 5 }, a1: { y: 5.5 }, a2: { y: 7.5 }, a3: { y: 3 }, a4: { y: 3.5 }, a5: { y: 5.5 }, t1: { metin: "Grup A" }, t2: { metin: "Grup B" } } },
            { metin: "Her nokta bir birim ve iki ==sayısal değişken== (x, y) birlikte: ilişkinin eğimi için *slope t*.",
              goster: ["rl"], gizle: ["t1", "t2"],
              set: { b1: { x: 1, y: 1.2 }, b2: { x: 2, y: 2.5 }, b3: { x: 3, y: 2.2 }, b4: { x: 3.8, y: 3.6 }, b5: { x: 4.8, y: 3.4 }, a1: { x: 5.6, y: 4.6 }, a2: { x: 6.5, y: 5 }, a3: { x: 7.4, y: 5.6 }, a4: { x: 8.3, y: 6.6 }, a5: { x: 9, y: 6.4 } } }
          ] },
        { tip: "ikili", sol: { ikon: "🔗", baslik: "*Paired t*", maddeler: ["Aynı birim iki kez ya da eşleştirilmiş çift", "Tek sayı: farkların ortalaması μ_d", "df = çift sayısı − 1"] },
          sag: { ikon: "👥", baslik: "*Two-sample t*", maddeler: ["İki ayrı, birbirinden bağımsız grup", "İki ortalama: μ₁ − μ₂", "df için teknoloji"] },
          oyun: [
            { metin: "Her öğrencinin sınavdan önceki ve sonraki nabzı.", cevap: "sol", neden: "Aynı öğrenciden iki ölçüm: *paired*." },
            { metin: "9. ve 10. sınıftan ayrı seçilen öğrencilerin ders çalışma süreleri.", cevap: "sag", neden: "İki ayrı grup: *two-sample*." },
            { metin: "Aynı 12 öğrenci iki uygulamayı rastgele sırayla deniyor, her biri için görev süresi ölçülüyor.", cevap: "sol", neden: "Her öğrenci iki koşulda: *paired*." },
            { metin: "Rastgele atanmış iki gruptan biri enerji içeceği, öbürü plasebo içiyor; reaksiyon süreleri karşılaştırılıyor.", cevap: "sag", neden: "Bağımsız iki grup: *two-sample*." },
            { metin: "İkizlerden biri sabah, öbürü akşam çalışıyor; ikiz çiftlerinin puanları karşılaştırılıyor.", cevap: "sol", neden: "Eşleştirilmiş çiftler: *paired*." }
          ] },
        { tip: "tuzak", baslik: "Önce–sonra ile x–y aynı şey değil", metin: "Sınav öncesi ve sonrası puanın ortalama farkı eşli t’dir. Öncesi puanından sonrasını tahmin etmek ise iki sayısal değişken arasındaki ilişkidir: eğim için t.",
          yanlis: "Her öğrencinin iki puanı var, o halde her zaman eşli t.",
          dogru: "Soru “ortalama fark”sa eşli t; “x arttıkça y nasıl değişir”se eğim için t." }
      ]
    },
    {
      baslik: "Kategorik mi, sayısal mı?",
      kisa: "Yanıt bir kategoriyse oran ya da ki-kare, ölçülen sayıysa t.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗂️", baslik: "Kategorik veri", maddeler: ["Oran: z (tek ya da iki)", "3+ kategori / grup: ki-kare", "Aralık: yalnızca z"] },
          sag: { ikon: "🔢", baslik: "Sayısal veri", maddeler: ["Ortalama: t (tek, eşli, iki örneklem)", "İki sayısal değişken: eğim için t", "Hepsi aralık da verir"] },
          oyun: [
            { metin: "Öğrencilerin yüzde kaçı servisle geliyor?", cevap: "sol", neden: "Her öğrenci “servis / değil”: kategorik, oran." },
            { metin: "Öğrencilerin günlük ortalama uyku süresi.", cevap: "sag", neden: "Ölçülen sayı: ortalama için t." },
            { metin: "İki sınıfta ödevini düzenli yapanların oranları farkı.", cevap: "sol", neden: "İki grup, iki sonuç: iki oran z." },
            { metin: "İki sınıfın günlük ödev süresi ortalamaları farkı.", cevap: "sag", neden: "Ölçülen süre: iki örneklem t." },
            { metin: "Haftalık çalışma saatiyle deneme puanı arasındaki ilişkinin eğimi.", cevap: "sag", neden: "İki sayısal değişken: eğim için t." }
          ] },
        { tip: "tuzak", baslik: "Yüzde görmek oran demek değildir", metin: "Yüzde, ya bir oranı (“evet” diyenlerin payı) ya da yüzdelik bir puanı (sınav notu %85) anlatabilir. Notların ortalaması sayısaldır (t yöntemi); “evet” diyenlerin payı kategoriktir (z yöntemi).",
          yanlis: "Yüzde ifadesi var, o halde z yöntemi.",
          dogru: "Her birimin yanıtı bir kategori mi (evet / hayır) yoksa bir sayı mı (puan, dakika)?" }
      ]
    },
    {
      baslik: "Senaryo atölyesi",
      kisa: "Her senaryodan parametreyi, H₀’ı ve yöntemi çıkar; sonra koşulları kontrol et.",
      bloklar: [
        { tip: "tablo", baslik: "Sekiz senaryo, sekiz yöntem", head: ["Senaryo", "Parametre / H₀", "Yöntem"], rows: [
            ["Rastgele 150 öğrencinin 96’sı yeni menüyü beğeniyor; gerçek oran 0,60 mı?", "p = 0,60", "Tek oran z testi"],
            ["İki sınıftan ayrı örneklemler; ödev yapma oranları farkı için %95 aralık", "p₁ − p₂", "İki oran z aralığı"],
            ["Rastgele 25 öğrencinin ortalama uykusu 8 saat mi?", "μ = 8", "Tek örneklem t testi"],
            ["Aynı 10 öğrencinin kahveden önce ve sonra reaksiyon süresi", "μ_d = 0", "Eşli t testi"],
            ["Rastgele atanmış enerji içeceği ve plasebo grupları; ortalama reaksiyon farkı", "μ₁ − μ₂", "İki örneklem t aralığı / testi"],
            ["Üç okuldan ayrı örneklemler; favori platform dağılımı aynı mı?", "Dağılım aynı", "χ² homojenlik"],
            ["Tostların %40, %30, %20, %10 olduğu iddiası", "pᵢ iddia edildiği gibi", "χ² uyum iyiliği"],
            ["Çalışma saati ile puanın gerçek eğimi", "β = 0", "Eğim için t testi / aralığı"]
          ], not: "Aynı kalıp: parametre ve H₀ yöntemi belli eder." },
        { tip: "ornek", baslik: "Eşli t testini baştan sona kur", durum: "Rastgele seçilen 10 öğrenci kahveden önce ve 30 dakika sonra reaksiyon testi yapıyor (ms). Fark = önce − sonra. Farkların ortalaması 8 ms, SD’si 10 ms; farkların dağılımı yaklaşık simetrik, uç değer yok. Kahveden sonra reaksiyon süresi ortalamada daha kısa mı? α = 0,05.",
          adimlar: ["State: μ_d = bütün öğrenciler için (önce − sonra) farkının gerçek ortalaması. H₀: μ_d = 0; Hₐ: μ_d > 0; α = 0,05.", "Plan: eşli t testi, df = 10 − 1 = 9. *Random* ✓, %10 ✓, *Normal* ✓ (n < 30 ama farklar yaklaşık simetrik, uç değer yok).", "Do: t = (8 − 0) ÷ (10 ÷ √10) ≈ 2,53; df = 9; p ≈ 0,016.", "Conclude: p ≈ 0,016 < 0,05 olduğundan H₀’ı reddederiz. Öğrencilerin reaksiyon süresinin kahveden 30 dakika sonra, öncesine göre ortalamada daha kısa olduğuna dair ikna edici kanıt vardır (kontrol grubu olmadığından bunu yalnızca kahveye bağlayamayız)."],
          sonuc: "t ≈ 2,53, df = 9, p ≈ 0,016 ⇒ H₀ reddedilir. (İki yönlü %95 aralık: 8 ± 2,262 × 3,16 ≈ (0,85; 15,15) ms.)" }
      ]
    },
    {
      baslik: "Koşullar ve cevap şablonu",
      kisa: "Eşik yönteme göre değişir: z için 10, ki-kare için 5, t için 30.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "z", baslik: "Oran (z)", metin: "np ve n(1 − p) en az 10; testte p₀, aralıkta p̂ kullanılır. İki oranda her grupta başarı ve başarısızlık ≥ 10." },
            { ikon: "χ²", baslik: "Ki-kare", metin: "Bütün beklenen sayılar en az 5 (gözlenenlere değil beklenenlere bak)." },
            { ikon: "t", baslik: "Ortalama (t)", metin: "n ≥ 30 ya da veri yaklaşık normal (küçük n’de çarpıklık ve uç değer olmamalı). Eşli veride bu, farklar için kontrol edilir." },
            { ikon: "β", baslik: "Eğim (t)", metin: "LINER: doğrusal, bağımsız, artıklar normal, eşit yayılım, rastgele; artık grafiği ana araçtır." }
          ] },
        { tip: "adimlar", baslik: "Her yöntem için aynı dört adım", adimlar: [
            { baslik: "State", metin: "Parametreyi bağlamla tanımla (p, μ_d, β…), H₀ ve Hₐ’yı yaz, α ya da güven düzeyini söyle." },
            { baslik: "Plan", metin: "Yöntemi adıyla yaz (*two-sample t test*, *chi-square test for homogeneity*…) ve koşulları bağlamla kontrol et." },
            { baslik: "Do", metin: "İstatistiği, df’yi ve p-değerini (ya da aralığı) ver; makine kullandıysan hangi menü olduğunu yaz." },
            { baslik: "Conclude", metin: "p ile α’yı (ya da 0 ve iddiayı aralıkla) kıyasla; bağlamla “ikna edici kanıt var / yok” de." }
          ] },
        { tip: "tuzak", baslik: "Yöntem adını ve koşulları atlama", metin: "Sınavda yöntemin adı ve koşullar ayrı puandır. “Eşli” ile “iki örneklem”i, “homojenlik” ile “bağımsızlık”ı karıştırmak ya da koşul kontrolünü yazmamak puan kaybettirir.",
          yanlis: "“Bir t testi yaptım, p = 0,03, H₀ reddedildi.”",
          dogru: "“Eşli t testi; farklar yaklaşık normal; t = 2,53, df = 9, p ≈ 0,016 < 0,05 ⇒ … ikna edici kanıt var.”" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Yöntem seçimi listesi (eğim testi ve uyum iyiliği 2026-27’de çıkarıldı; yöntem seçmek sınavda var).",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Üç soru: veri kategorik mi sayısal mı? kaç grup ve nasıl toplandı? tahmin mi test mi?",
            "Kategorik: tek oran z, iki oran z, ki-kare (uyum iyiliği, homojenlik, bağımsızlık). Sayısal: tek örneklem t, eşli t, iki örneklem t, eğim için t.",
            "Aynı birimden iki ölçüm ⇒ eşli (farkları analiz et). Ayrı iki grup ⇒ iki örneklem. İki sayısal değişken, ilişki ⇒ eğim.",
            "df: ki-kare uyum k − 1, tablo (r − 1)(c − 1); tek örneklem ve eşli t n − 1; eğim n − 2; iki örneklem t teknoloji.",
            "Koşullar: *Random*, %10; z için np, n(1 − p) ≥ 10; ki-kare için E ≥ 5; t için n ≥ 30 ya da yaklaşık normal; eğim için LINER.",
            "Aralık z ve t yöntemlerinde var, ki-kare testlerinde yok; ki-kare Hₐ yön içermez.",
            "Her zaman State, Plan, Do, Conclude: yöntem adı, koşullar ve bağlamlı sonuç yazılır.",
            "Yöntem adını ve koşul kontrolünü atlama; p küçükse neden-sonuç değil “ikna edici kanıt” de."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Rastgele seçilen 30 öğrencide günlük ekran süresi (saat) ile ruh hali puanı arasında doğrusal ilişki olup olmadığı soruluyor. Hangi çıkarım yöntemi uygundur?",
      opts: ["Eşli t testi", "Eğim için t testi", "İki örneklem t testi", "Bağımsızlık için ki-kare testi"],
      a: 1,
      why: "Aynı öğrencilerde iki sayısal değişken var ve ilişki soruluyor: *t test for a slope* (H₀: β = 0). Eşli t aynı ölçümün iki koşulunu karşılaştırır; ki-kare ise iki kategorik değişken ister." },
    { q: "Bir spor mağazası, 15 koşucunun her birine eski ve yeni ayakkabıyla (rastgele sırayla) aynı mesafeyi koşturup süreyi ölçüyor ve yeni ayakkabının süreyi kısaltıp kısaltmadığını sınamak istiyor. Hangi yöntem uygundur?",
      opts: ["İki örneklem t testi", "İki oran z testi", "Eğim için t testi", "Eşli t testi (farkların ortalaması için t)"],
      a: 3,
      why: "Her koşucu iki koşulda ölçülüyor: eşli veri. Her koşucunun farkı alınır ve farkların ortalaması için t testi yapılır. İki örneklem t, bağımsız iki grup içindir." },
    { q: "Üç farklı şehirden ayrı ayrı rastgele seçilen kişilere “işe/okula yürüyerek gidiyor musun? (evet / hayır)” soruluyor. Yürüyenlerin oranının üç şehirde aynı olup olmadığı test edilecek. Hangi yöntem uygundur?",
      opts: ["Homojenlik için ki-kare testi", "İki oran z testi", "Tek örneklem t testi", "Bağımsızlık için ki-kare testi"],
      a: 0,
      why: "Üç ayrı örneklem ve tek kategorik değişken: *chi-square test for homogeneity* (df = (3 − 1)(2 − 1) = 2). İki oran z yalnızca iki grup içindir; bağımsızlık testi tek örneklem ve iki değişken ister." },
    { q: "Aşağıdaki yöntemlerden hangisi, “bütün beklenen sayılar en az 5” koşulunu ister?",
      opts: ["Tek oran z testi", "Eğim için t testi", "Ki-kare testleri", "İki örneklem t testi"],
      a: 2,
      why: "Beklenen sayı koşulu ki-kare testlerine özgüdür. z yöntemleri np ve n(1 − p) ≥ 10 ister, t yöntemleri n ≥ 30 ya da yaklaşık normallik, eğim testi ise LINER koşullarını ister." },
    { q: "Bir ilaç şirketi, rastgele atanmış ilaç ve plasebo gruplarında iyileşenlerin oranları arasındaki farkı tahmin etmek ve bir güven aralığı kurmak istiyor (iyileşti / iyileşmedi). Hangi yöntem uygundur?",
      opts: ["Homojenlik için ki-kare testi", "İki oran farkı için z aralığı", "İki örneklem t aralığı", "Uyum iyiliği için ki-kare testi"],
      a: 1,
      why: "İki grup ve iki sonuç (kategorik veri), ayrıca tahmin (aralık) isteniyor: *two-proportion z interval*. Ki-kare testleri aralık vermez; t yöntemleri sayısal veri içindir." }
  ]
};
