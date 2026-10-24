/* Kitpath not defteri · st804 · 3.14–3.15 Homojenlik ve Bağımsızlık Testleri
   Kaynak: AP Statistics CED Unit 3 (Topic 3.14–3.15). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st804",
  amac: "Bu konu iki yönlü tablolar için ki-kare testlerini anlatıyor: gruplar aynı dağılıma mı sahip (*homogeneity*), iki kategorik değişken ilişkisiz mi (*independence*)? Hipotezleri, koşulları, χ² ve p-değerini, sonucun bağlamla yazılışını öğreneceksin.",
  bolumler: [
    {
      baslik: "Homojenlik mi, bağımsızlık mı?",
      kisa: "Veri toplama biçimi testi belirler; hesap ikisinde de aynıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Association", tr: "ilişki", tanim: "Bir değişkenin değerini bilmek, öbür değişkenin dağılımını değiştiriyorsa değişkenler ilişkilidir.", ornek: "Okulu bilmek favori platformun dağılımını değiştiriyorsa okul ve platform ilişkilidir." },
            { ikon: "🎲", terim: "Random assignment", tr: "rastgele atama", tanim: "Deneyde gönüllüleri gruplara şansla yerleştirmek. Gruplar ayrı örneklem gibi karşılaştırılır.", ornek: "60 gönüllüyü üç uyku düzenine kura ile dağıtmak." }
          ] },
        { tip: "ikili", sol: { ikon: "👥", baslik: "*Homogeneity*", maddeler: ["Birkaç ayrı rastgele örneklem (ya da rastgele atanmış gruplar)", "Tek kategorik değişken", "Soru: dağılım gruplarda aynı mı?"] },
          sag: { ikon: "🔗", baslik: "*Independence*", maddeler: ["Tek rastgele örneklem", "İki kategorik değişken, hepsi aynı kişilerden", "Soru: iki değişken arasında ilişki var mı?"] },
          oyun: [
            { metin: "Üç okuldan 100’er öğrenci ayrı ayrı seçilip favori platform soruluyor; okullar aynı dağılımda mı?", cevap: "sol", neden: "Her okuldan ayrı örneklem, tek değişken (platform): *homogeneity*." },
            { metin: "300 öğrenci tek örneklemle seçilip hem okulu hem favori platformu kaydediliyor; ilişki var mı?", cevap: "sag", neden: "Tek örneklem, iki değişken (okul ve platform): *independence*." },
            { metin: "60 gönüllü rastgele üç uyku düzenine atanıyor; sınavda başarılı / başarısız sonucunun dağılımı gruplarda aynı mı?", cevap: "sol", neden: "Rastgele atanan gruplar, tek sonuç değişkeni: *homogeneity*." },
            { metin: "Rastgele seçilen 200 kişiye yaşadığı bölge ve tercih ettiği ulaşım türü soruluyor.", cevap: "sag", neden: "Tek örneklem, iki kategorik değişken: *independence*." }
          ] },
        { tip: "tablo", baslik: "İki test yan yana", head: ["", "Homogeneity", "Independence"], rows: [
            ["Veri nasıl toplanır?", "Her grup için ayrı örneklem; satır toplamları tasarımla sabit", "Tek örneklem; toplamlar şansa bağlı"],
            ["H₀", "Dağılım bütün gruplarda aynı", "İki değişken bağımsız (ilişki yok)"],
            ["Hₐ", "Dağılım en az bir grupta farklı", "İki değişken ilişkili"],
            ["Hesap", "E = satır × sütun ÷ n, χ² = Σ (O − E)² / E, df = (r − 1)(c − 1)", "Aynı"]
          ], not: "Kural: hesabı ortak, cümleyi ayrı yaz. Hipotezleri veri toplama biçimine göre seç." }
      ]
    },
    {
      baslik: "Hipotezleri yazmak",
      kisa: "Aynı tablo, iki farklı çalışmadan gelebilir; hipotez cümlesi tasarıma uymalı.",
      bloklar: [
        { tip: "ornek", baslik: "Aynı tablo, iki farklı soru", durum: "Üç okulun (A, B, C) öğrencilerinin favori platformu: Instagram, TikTok, YouTube. Hesap aynı; çalışmanın tasarımı farklı olabilir.",
          adimlar: ["Tasarım 1 (ayrı örneklemler): A’dan 100, B’den 120, C’den 80 öğrenci ayrı ayrı rastgele seçildi. H₀: Favori platformun dağılımı üç okulda da aynı. Hₐ: Dağılım en az bir okulda farklı. (*homogeneity*)", "Tasarım 2 (tek örneklem): Üç okuldan toplam 300 öğrenci tek bir rastgele örnekle seçildi; hem okul hem platform kaydedildi. H₀: Okul ile favori platform bağımsız (ilişki yok). Hₐ: Okul ile favori platform ilişkili. (*independence*)"],
          sonuc: "Tablo aynı, hesap aynı; yalnızca veri toplama biçimi ve H₀/Hₐ cümleleri farklı." },
        { tip: "tuzak", baslik: "“Hepsi farklı” demek yok", metin: "Alternatif hipotez “en az biri farklı”dır; hiçbir yön içermez. Homojenlikte “bağımsız” sözcüğünü değil “dağılım aynı” sözcüğünü, bağımsızlıkta “ilişkili/bağımsız” sözcüğünü kullan.",
          yanlis: "Hₐ: Her okulda dağılım birbirinden farklıdır.",
          dogru: "Hₐ: Dağılım en az bir okulda farklıdır (homojenlik) ya da iki değişken ilişkilidir (bağımsızlık)." }
      ]
    },
    {
      baslik: "Beklenen sayılar ve koşullar",
      kisa: "Beklenen sayıları st803’teki gibi bul; Random, %10 ve Large Counts’ı kontrol et.",
      bloklar: [
        { tip: "tablo", baslik: "Gözlenen sayı (beklenen sayı): favori platform", head: ["", "Instagram", "TikTok", "YouTube", "Toplam"], rows: [
            ["Okul A", "60 (50)", "25 (30)", "15 (20)", "100"],
            ["Okul B", "55 (60)", "40 (36)", "25 (24)", "120"],
            ["Okul C", "35 (40)", "25 (24)", "20 (16)", "80"],
            ["Toplam", "150", "90", "60", "300"]
          ], vurgu: 3, not: "Örnek hesap: E(A, Instagram) = (100 × 150) ÷ 300 = 50. Parantezdeki sayılar beklenenler." },
        { tip: "adimlar", baslik: "Koşullar (iki tasarım için)", adimlar: [
            { baslik: "1 · *Random*", metin: "Homojenlik: her grup ayrı rastgele örneklem (ya da deneyde rastgele atama). Bağımsızlık: tek rastgele örneklem." },
            { baslik: "2 · *Independent* (%10)", metin: "Yerine koymadan örnekliyorsan her örneklem kendi popülasyonunun %10’unu aşmasın. Okul B’de 1200’den, A’da 1000’den, C’de 800’den fazla öğrenci varsa 100, 120, 80 uygundur." },
            { baslik: "3 · *Large Counts*", metin: "Bütün beklenen sayılar en az 5: en küçüğü 16 ≥ 5 ✓." }
          ] }
      ]
    },
    {
      baslik: "χ², df ve p-değeri",
      kisa: "Dokuz bileşeni topla: χ² ≈ 6,65; df = 4; p ≈ 0,155.",
      bloklar: [
        { tip: "tablo", baslik: "Bileşenler: (O − E)² / E", head: ["", "Instagram", "TikTok", "YouTube"], rows: [
            ["Okul A", "2,00", "0,83", "1,25"],
            ["Okul B", "0,42", "0,44", "0,04"],
            ["Okul C", "0,63", "0,04", "1,00"]
          ], not: "Toplam: χ² ≈ 6,65. df = (3 − 1)(3 − 1) = 4." },
        { tip: "grafik", baslik: "df = 4: χ² = 6,65 ve p-değeri", xlabel: "χ² değeri", ylabel: "Yoğunluk", xmax: 16, ymax: 3,
          xticks: [{ v: 0, label: "0" }, { v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0,0],[0.5,0.974],[1,1.516],[1.5,1.771],[2,1.839],[2.5,1.791],[3,1.673],[3.5,1.521],[4,1.353],[4.5,1.186],[5,1.026],[5.5,0.879],[6,0.747],[6.5,0.63],[7,0.528],[7.5,0.441],[8,0.366],[8.5,0.303],[9,0.25],[9.5,0.205],[10,0.168],[10.5,0.138],[11,0.112],[11.5,0.092],[12,0.074],[12.5,0.06],[13,0.049],[13.5,0.04],[14,0.032],[14.5,0.026],[15,0.021],[15.5,0.017],[16,0.013]] },
            { id: "obs", tip: "cizgi", renk: 2, from: [6.65, 0], to: [6.65, 0.598], etiket: "χ² = 6,65", gizli: true },
            { id: "alan", tip: "alan", renk: 2, noktalar: [[6.65,0],[6.65,0.598],[6.9,0.548],[7.15,0.501],[7.4,0.457],[7.65,0.417],[7.9,0.38],[8.15,0.346],[8.4,0.315],[8.65,0.286],[8.9,0.26],[9.15,0.236],[9.4,0.214],[9.65,0.194],[9.9,0.175],[10.15,0.159],[10.4,0.143],[10.65,0.13],[10.9,0.117],[11.15,0.106],[11.4,0.095],[11.65,0.086],[11.9,0.078],[12.15,0.07],[12.4,0.063],[12.65,0.057],[12.9,0.051],[13.15,0.046],[13.4,0.041],[13.65,0.037],[13.9,0.033],[14.15,0.03],[14.4,0.027],[14.65,0.024],[14.9,0.022],[15.15,0.019],[15.4,0.017],[15.65,0.016],[15.9,0.014],[16,0.013],[16,0]], gizli: true },
            { id: "p", tip: "yazi", x: 11, y: 0.55, metin: "p ≈ 0,155", gizli: true },
            { id: "kr", tip: "cizgi", renk: 1, kesik: true, from: [9.49, 0], to: [9.49, 0.206], etiket: "9,49", gizli: true }
          ],
          durumlar: [
            { metin: "df = 4 için χ² eğrisi (3×3 tablo)." },
            { metin: "Gözlenen χ² = 6,65.", goster: ["obs"] },
            { metin: "p-değeri = sağdaki alan ≈ 0,155. Bu kadar büyük bir χ², H₀ doğruyken sık görülür.", goster: ["alan", "p"] },
            { metin: "α = 0,05 için kritik değer 9,49. 6,65 < 9,49 olduğundan p > α: H₀ reddedilemez.", goster: ["kr"] }
          ] },
        { tip: "adimlar", baslik: "Hesap makinesiyle (TI-84)", adimlar: [
            { baslik: "1 · Matris", metin: "2nd ▸ MATRIX ▸ EDIT ▸ [A]: 3×3 boyutunu ver, gözlenen sayıları gir." },
            { baslik: "2 · Test", metin: "STAT ▸ TESTS ▸ C: χ²-Test. Observed: [A], Expected: [B]. Calculate." },
            { baslik: "3 · Ekran", metin: "χ² = 6,6528, p = 0,1554, df = 4. Beklenen sayılar [B] matrisinde hazır olur; Large Counts’ı oradan kontrol et." }
          ] }
      ]
    },
    {
      baslik: "Sonucu bağlamla yaz",
      kisa: "Aynı hesap, farklı cümle: homojenlikte dağılımlar, bağımsızlıkta ilişki.",
      bloklar: [
        { tip: "ornek", baslik: "Dört adım: üç okul, favori platform", durum: "Okul A, B ve C’den ayrı ayrı rastgele seçilen 100, 120 ve 80 öğrenci (her okulda 1200’den fazla öğrenci var). α = 0,05. Favori platform dağılımı okullarda aynı mı?",
          adimlar: ["State: H₀: Favori platformun dağılımı üç okulda aynıdır. Hₐ: Dağılım en az bir okulda farklıdır. α = 0,05.", "Plan: ki-kare homojenlik testi. *Random*: her okuldan ayrı rastgele örnek. %10: örneklemler okulların %10’undan küçük. *Large Counts*: en küçük E = 16 ≥ 5 ✓.", "Do: χ² ≈ 6,65; df = (3 − 1)(3 − 1) = 4; p-değeri ≈ 0,155.", "Conclude: p = 0,155 > α = 0,05 olduğundan H₀’ı reddedemeyiz. Favori platform dağılımının okullar arasında farklı olduğuna dair ikna edici kanıt yoktur."],
          sonuc: "χ² ≈ 6,65, df = 4, p ≈ 0,155 > 0,05 ⇒ H₀ reddedilemez." },
        { tip: "tablo", baslik: "Sonuç cümleleri: iki test", head: ["", "Homojenlik", "Bağımsızlık"], rows: [
            ["p ≤ α", "H₀’ı reddederiz: dağılımın en az bir grupta farklı olduğuna dair ikna edici kanıt var.", "H₀’ı reddederiz: iki değişkenin ilişkili olduğuna dair ikna edici kanıt var."],
            ["p > α", "H₀’ı reddedemeyiz: dağılımların farklı olduğuna dair ikna edici kanıt yok.", "H₀’ı reddedemeyiz: iki değişkenin ilişkili olduğuna dair ikna edici kanıt yok."]
          ], not: "Cümleye grupların ve değişkenlerin adını ekle (okul, favori platform gibi)." },
        { tip: "tuzak", baslik: "İlişki neden-sonuç değildir", metin: "Bağımsızlık testi yalnızca ilişkiyi gösterir. Neden-sonuç iddiası ancak rastgele atamalı deneyle (gruplara rastgele atama yapılan homojenlik testi) yapılabilir; ayrı rastgele örneklemlerden gelen homojenlik testi de yalnızca fark gösterir. Ayrıca “reddedemedik” demek “bağımsız olduğu kanıtlandı” demek değildir.",
          yanlis: "p büyük çıktı, yani okul ile platform kesinlikle ilişkisizdir.",
          dogru: "İlişki olduğuna dair ikna edici kanıt bulamadık; ilişkisizlik kanıtlanmadı." }
      ]
    },
    {
      baslik: "2×2 tablo: iki oranlı z-testiyle aynı sonuç",
      kisa: "2×2 tabloda df = 1 ve χ² = z²; p-değerleri aynıdır.",
      bloklar: [
        { tip: "ornek", baslik: "Sosyal medya ve uyku: iki yoldan hesap", durum: "Günde 2+ saat sosyal medyada olan 40 öğrencinin 24’ü uykusunu yetersiz buldu; 2 saatten az olan 60 öğrencinin 21’i yetersiz buldu (n = 100).",
          adimlar: ["Beklenen: 18, 22, 27, 33. Bileşenler: 2,00 + 1,64 + 1,33 + 1,09 ≈ 6,06; df = 1; p ≈ 0,014.", "İki oranlı z: p̂₁ = 24/40 = 0,60; p̂₂ = 21/60 = 0,35; birleşik p̂ = 45/100 = 0,45.", "SE = √(0,45 × 0,55 × (1/40 + 1/60)) ≈ 0,1015; z = (0,60 − 0,35) ÷ 0,1015 ≈ 2,46.", "z² ≈ 6,06 = χ². İki yönlü z-testinin p-değeri de ≈ 0,014."],
          sonuc: "2×2 tabloda χ² testi, iki yönlü iki oranlı z-testiyle aynı sonucu verir. z-testi aralık ve tek yönlü Hₐ da verebilir; χ² yalnızca “farklı mı?” sorar." },
        { tip: "sayilar", ogeler: [
            { deger: 6.06, etiket: "χ² (df = 1)" },
            { deger: 2.46, etiket: "z (iki oran)" },
            { deger: 6.06, etiket: "z² ≈ χ²" },
            { deger: 0.014, etiket: "ikisinin p-değeri" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Homojenlik: birkaç ayrı örneklem (ya da rastgele atanmış grup), tek değişken, “dağılım aynı mı?”. Bağımsızlık: tek örneklem, iki değişken, “ilişki var mı?”.",
            "H₀: dağılım gruplarda aynı / iki değişken bağımsız. Hₐ: en az bir grupta farklı / ilişkili. Yön yok.",
            "E = (satır toplamı × sütun toplamı) ÷ n; χ² = Σ (O − E)² / E; df = (r − 1)(c − 1).",
            "Koşullar: *Random*, %10, *Large Counts* (bütün E ≥ 5). Homojenlikte her grup ayrı rastgele örneklem ya da rastgele atama.",
            "p-değeri χ² dağılımının sağ kuyruğudur; makinede χ²-Test (matris) hem χ² hem p hem E verir.",
            "Sonuç cümlesi: p ≤ α ise “ikna edici kanıt var”, değilse “reddedemeyiz / kanıt yok”. Bağlamı yaz.",
            "İlişki neden-sonuç değildir; H₀’ı reddedememek bağımsızlığı kanıtlamaz.",
            "2×2 tabloda df = 1 ve χ² = z²."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir araştırmacı üç şehirden 150’şer kişiyi ayrı ayrı rastgele seçip her birine ana ulaşım aracını (otobüs, metro, araba) soruyor. Hangi test ve hangi H₀ uygundur?",
      opts: ["Homojenlik testi; H₀: ulaşım aracı dağılımı üç şehirde aynıdır.", "Bağımsızlık testi; H₀: şehir ile ulaşım aracı ilişkilidir.", "Uyum iyiliği testi; H₀: üç araç eşit oranda kullanılıyor.", "İki oranlı z-testi; H₀: p₁ = p₂ = p₃."],
      a: 0,
      why: "Üç ayrı rastgele örneklem ve tek kategorik değişken (ulaşım aracı): homojenlik. B’de H₀ “ilişkili” diyor, H₀ hep eşitlik/bağımsızlık söyler; C tek örneklem içindir; D yalnızca iki grup içindir." },
    { q: "Aşağıdaki 2×2 tablo rastgele seçilmiş 100 kişiyi gösteriyor. Beklenen sayılar 20, 20, 30, 30 olduğuna göre χ² istatistiği yaklaşık kaçtır?",
      fig: { type: "table", head: ["", "Evet", "Hayır", "Toplam"], rows: [["Grup 1", 30, 10, 40], ["Grup 2", 20, 40, 60], ["Toplam", 50, 50, 100]], caption: "Gözlenen sayılar" },
      opts: ["8,33", "16,67", "20,83", "40"],
      a: 1,
      why: "χ² = 10² / 20 + 10² / 20 + 10² / 30 + 10² / 30 = 5 + 5 + 3,33 + 3,33 ≈ 16,67. 20,83 paydada O kullanıldığında çıkar; 40 farkların mutlak toplamıdır; 8,33 yalnızca iki bileşeni toplar." },
    { q: "Üç sınıf düzeyinden (9, 10, 11) ayrı ayrı rastgele seçilen öğrencilere “yeterince uyuyor musun?” (evet / hayır) soruldu. Hesap makinesi şunu verdi: χ² = 9,2, df = 2, p = 0,010. α = 0,05 ile doğru sonuç hangisidir?",
      fig: { type: "table", head: ["Çıktı", "Değer"], rows: [["χ²", "9,2"], ["df", "2"], ["p", "0,010"]], caption: "χ²-Test ekranı" },
      opts: ["H₀’ı kabul ederiz; uyku düzeni üç sınıfta aynıdır.", "H₀’ı reddedemeyiz; sınıf düzeyi ve uyku arasında ilişki yok.", "H₀’ı reddederiz; uyku yeterliliği dağılımının en az bir sınıfta farklı olduğuna dair ikna edici kanıt var.", "H₀’ı reddederiz; üç sınıfın uyku dağılımı da birbirinden farklıdır."],
      a: 2,
      why: "p = 0,010 < 0,05 ⇒ H₀ reddedilir ve sonuç “en az bir grupta farklı” biçiminde, bağlamla yazılır. A ve B p < α iken H₀’ı korur; D ise “hepsi farklı” der, test bunu söylemez." },
    { q: "Bir okul, tek bir rastgele örneklemle seçilen 200 öğrenciye cinsiyetlerini ve en sevdikleri 4 spor dalını soruyor (2×4 tablo). Doğru hipotezler hangisidir?",
      opts: ["H₀: dört spor dalında cinsiyet dağılımı aynıdır; Hₐ: en az bir dalda farklıdır.", "H₀: p(erkek) = p(kız) = 0,5; Hₐ: p(erkek) ≠ 0,5.", "H₀: cinsiyet ile spor tercihi ilişkilidir; Hₐ: bağımsızdır.", "H₀: cinsiyet ile en sevilen spor dalı bağımsızdır; Hₐ: ilişkilidir."],
      a: 3,
      why: "Tek örneklem, iki kategorik değişken: bağımsızlık testi. H₀ “bağımsız (ilişki yok)”, Hₐ “ilişkili”dir. A homojenlik cümlesidir ve bu tasarıma uymaz; C hipotezleri tersine çevirir." },
    { q: "2×2 bir tabloda ki-kare testi χ² = 4,84 vermiştir. Aynı verilerle yapılan iki yönlü iki oranlı z-testinin |z| değeri yaklaşık kaçtır?",
      opts: ["4,84", "2,2", "1,1", "23,4"],
      a: 1,
      why: "2×2 tabloda χ² = z², dolayısıyla |z| = √4,84 = 2,2. 23,4 ise 4,84’ün karesidir; yani ilişki ters kurulmuş olur." }
  ]
};
