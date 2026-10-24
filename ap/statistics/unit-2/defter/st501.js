/* Kitpath not defteri · st501 · 5.1–5.2 Normal Dağılıma Yeniden Bakış
   Kapsam: parameter / statistic, sampling variability, sampling distribution, normal model (z, 68-95-99.7, tablo). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st501",
  amac: "Bu konu, aynı popülasyondan çekilen örneklemlerin neden birbirinden farklı çıktığını anlatıyor. *Parameter* ile *statistic* farkını, *sampling distribution* fikrini ve hesaplarda kullanacağın *normal* modeli (z-score, tablo, yüzdelik) öğreneceksin.",
  bolumler: [
    {
      baslik: "*Parameter* ve *statistic*",
      kisa: "Parameter popülasyonu, statistic örneklemi anlatır; sembolleri farklıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Parameter", tr: "parametre", tanim: "Popülasyonu anlatan ==sabit== sayı; çoğu zaman bilinmez.", ornek: "Okuldaki 800 öğrencinin gerçek ortalama uyku süresi (μ)." },
            { ikon: "🥄", terim: "Statistic", tr: "örneklem istatistiği", tanim: "Örneklemden hesaplanan sayı; ==örneklemden örnekleme değişir==.", ornek: "Rastgele seçtiğin 40 öğrencinin ortalama uyku süresi (x̄)." }
          ] },
        { tip: "tablo", baslik: "Semboller", head: ["Ölçü", "Parameter (popülasyon)", "Statistic (örneklem)"], rows: [
            ["Oran", "p", "p̂"],
            ["Ortalama (mean)", "μ", "x̄"],
            ["Standard deviation", "σ", "s"],
            ["Büyüklük (size)", "N", "n"]
          ], not: "Parameter'lar çoğunlukla Yunan harfiyle (μ, σ), statistic'ler Latin harfiyle (x̄, s) yazılır; oranda ise parameter p, statistic p̂ ('p şapka') olur." },
        { tip: "ikili", sol: { ikon: "🌍", baslik: "*Parameter*", maddeler: ["Popülasyonun tamamını anlatır", "Sabittir, bilinmeyebilir", "Sembol: p, μ, σ"] },
          sag: { ikon: "🥄", baslik: "*Statistic*", maddeler: ["Örneklemden hesaplanır", "Her örneklemde değişir", "Sembol: p̂, x̄, s"] },
          oyun: [
            { metin: "Okuldaki 800 öğrencinin tamamının ortalama boyu.", cevap: "sol", neden: "Popülasyonun tamamını anlatıyor: *parameter*." },
            { metin: "Rastgele seçilen 40 öğrencinin %35'i gözlük takıyor.", cevap: "sag", neden: "Örneklemden hesaplandı: *statistic* (p̂)." },
            { metin: "Türkiye'deki bütün seçmenlerin bir adaya gerçek destek oranı.", cevap: "sol", neden: "Popülasyon oranı p: *parameter*." },
            { metin: "Ankete katılan 1.200 kişinin günlük ortalama ekran süresi 4,2 saat.", cevap: "sag", neden: "Örneklemin ortalaması: *statistic* (x̄)." },
            { metin: "μ = 7,5 saat.", cevap: "sol", neden: "Yunan harfi popülasyon ortalaması: *parameter*." }
          ] }
      ]
    },
    {
      baslik: "Örnekleme değişkenliği: *sampling variability*",
      kisa: "Parameter sabittir; statistic her örneklemde değişir.",
      bloklar: [
        { tip: "ornek", baslik: "Üç arkadaş, üç farklı sonuç", durum: "Okulun %40'ı sabah kahvaltı etmiyor ama bunu kimse bilmiyor (p = 0,40). Üç arkadaş bağımsız olarak 50'şer öğrenciye soruyor: 18, 22 ve 21 kişi kahvaltı etmediğini söylüyor.",
          adimlar: ["Ece: p̂ = 18 ÷ 50 = 0,36.", "Kerem: p̂ = 22 ÷ 50 = 0,44.", "Deniz: p̂ = 21 ÷ 50 = 0,42.", "Üçü de aynı popülasyonu sordu ama üç farklı sayı buldu; gerçek oran p = 0,40 hep aynı kaldı."],
          sonuc: "==Statistic (p̂) örneklemden örnekleme değişir; parameter (p) değişmez.== Fark, birinin hata yapmasından değil, şanstan geliyor." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Sampling variability", tr: "örnekleme değişkenliği", tanim: "Aynı popülasyondan aynı büyüklükte örneklemler çektikçe statistic'in farklı değerler alması.", ornek: "Üç arkadaşın bulduğu 0,36, 0,44 ve 0,42." },
            { ikon: "💻", terim: "Simulation", tr: "benzetim", tanim: "Rastgele örneklem çekmeyi bilgisayarla ya da zarla binlerce kez taklit etmek.", ornek: "Okulu bilgisayarda kurup 100 kez 50'şer kişi seçmek." }
          ] },
        { tip: "tuzak", baslik: "Parameter değişiyor sanmak", metin: "Rastgele olan örneklemdir; popülasyon değil.", yanlis: "Üç anket üç farklı sonuç verdi, demek ki gerçek oran değişiyor.", dogru: "Gerçek oran (parameter) sabit; değişen, her örneklemden hesaplanan statistic'tir." }
      ]
    },
    {
      baslik: "*Sampling distribution*",
      kisa: "Aynı büyüklükteki tüm örneklemlerin statistic değerlerinin dağılımı.",
      bloklar: [
        { tip: "adimlar", baslik: "Sampling distribution nasıl kurulur?", adimlar: [
            { baslik: "1 · Örneklem çek", metin: "Popülasyondan rastgele n kişilik bir örneklem seç." },
            { baslik: "2 · Statistic'i hesapla", metin: "Her örneklem için p̂ ya da x̄ değerini bul." },
            { baslik: "3 · Tekrarla", metin: "Aynı n ile çok sayıda (teoride tüm olası) örneklem çek; değerleri kaydet." },
            { baslik: "4 · Dağılıma bak", metin: "Bu değerlerin *shape*, *center* ve *spread*'i sampling distribution'dır." }
          ] },
        { tip: "sekil", baslik: "100 örneklem, 100 farklı p̂ (p = 0,40, n = 50, benzetim)", fig: { type: "hist", bins: [{"from":0.2,"to":0.24,"n":1},{"from":0.24,"to":0.28,"n":3},{"from":0.28,"to":0.32,"n":8},{"from":0.32,"to":0.36,"n":16},{"from":0.36,"to":0.4,"n":22},{"from":0.4,"to":0.44,"n":22},{"from":0.44,"to":0.48,"n":16},{"from":0.48,"to":0.52,"n":8},{"from":0.52,"to":0.56,"n":3},{"from":0.56,"to":0.6,"n":1}], label: "p̂ (n = 50)", ylabel: "Örneklem sayısı" } },
        { tip: "tablo", baslik: "Üç ayrı dağılımı karıştırma", head: ["Dağılım", "Neyin dağılımı?", "Tek bir nokta ne?"], rows: [
            ["Popülasyon dağılımı", "Popülasyondaki herkesin değeri", "Bir kişi"],
            ["Örneklem verisinin dağılımı", "Elindeki tek örneklemdeki n değer", "Bir kişi"],
            ["*Sampling distribution*", "Bir statistic'in tüm olası örneklemlerdeki değerleri", "Bir örneklemin p̂ ya da x̄ değeri"]
          ] },
        { tip: "tuzak", baslik: "n ile örneklem sayısı", metin: "Sampling distribution'daki n, tek bir örneklemdeki kişi sayısıdır; kaç örneklem çektiğin değil.", yanlis: "Histogramda 100 nokta var, demek ki n = 100.", dogru: "Her nokta n = 50 kişilik bir örneklemden gelir; 100, kaç kez örneklem çekildiğini gösterir." }
      ]
    },
    {
      baslik: "*Normal* model: z-score ve 68-95-99.7",
      kisa: "z-score, bir değerin mean'den kaç SD uzakta olduğunu söyler.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "z", alt: "z-score" }, "=", { t: "değer − mean", alt: "fark" }, "÷", { t: "SD", alt: "standard deviation" }], aciklama: "Popülasyon verisinde z = (x − μ) ÷ σ. Bir statistic'in sampling distribution'ında mean ve SD o dağılımın kendi mean'i ve SD'sidir." },
        { tip: "grafik", baslik: "*Empirical rule*: standart normal eğri", xlabel: "z-score", ylabel: "", xmax: 8, ymax: 10,
          xticks: [{ v: 1, label: "−3" }, { v: 2, label: "−2" }, { v: 3, label: "−1" }, { v: 4, label: "0" }, { v: 5, label: "1" }, { v: 6, label: "2" }, { v: 7, label: "3" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0.5,0.02],[0.94,0.09],[1.38,0.31],[1.81,0.88],[2.25,2.07],[2.69,4.05],[3.13,6.53],[3.56,8.7],[4,9.57],[4.44,8.7],[4.88,6.53],[5.31,4.05],[5.75,2.07],[6.19,0.88],[6.63,0.31],[7.06,0.09],[7.5,0.02]] },
            { id: "a3", tip: "alan", renk: 2, gizli: true, noktalar: [[1,0],[1,0.11],[1.5,0.42],[2,1.3],[2.5,3.11],[3,5.81],[3.5,8.45],[4,9.57],[4.5,8.45],[5,5.81],[5.5,3.11],[6,1.3],[6.5,0.42],[7,0.11],[7,0]] },
            { id: "a2", tip: "alan", renk: 1, gizli: true, noktalar: [[2,0],[2,1.3],[2.33,2.39],[2.67,3.94],[3,5.81],[3.33,7.67],[3.67,9.06],[4,9.57],[4.33,9.06],[4.67,7.67],[5,5.81],[5.33,3.94],[5.67,2.39],[6,1.3],[6,0]] },
            { id: "a1", tip: "alan", renk: 3, gizli: true, noktalar: [[3,0],[3,5.81],[3.17,6.77],[3.33,7.67],[3.5,8.45],[3.67,9.06],[3.83,9.44],[4,9.57],[4.17,9.44],[4.33,9.06],[4.5,8.45],[4.67,7.67],[4.83,6.77],[5,5.81],[5,0]] },
            { id: "y1", tip: "yazi", x: 4, y: 3.5, metin: "≈ %68", gizli: true },
            { id: "y2", tip: "yazi", x: 4, y: 3.5, metin: "≈ %95", gizli: true },
            { id: "y3", tip: "yazi", x: 4, y: 3.5, metin: "≈ %99,7", gizli: true }
          ],
          durumlar: [
            { metin: "Normal eğri mean'e göre simetrik çan şeklindedir; yatay eksen z-score (mean'den kaç SD)." },
            { metin: "Mean'in ==1 SD== içinde yaklaşık %68 yer alır.", goster: ["a1", "y1"] },
            { metin: "==2 SD== içinde yaklaşık %95 yer alır.", gizle: ["a1", "y1"], goster: ["a2", "y2"] },
            { metin: "==3 SD== içinde yaklaşık %99,7 yer alır; bunun dışı çok nadirdir.", gizle: ["a2", "y2"], goster: ["a3", "y3"] }
          ] }
      ]
    },
    {
      baslik: "Tablo ve hesap makinesiyle olasılık",
      kisa: "Standart normal tablo soldan alan verir; sağ kuyruk için 1'den çıkar.",
      bloklar: [
        { tip: "tablo", baslik: "Standart normal tablodan seçmeler (soldan alan)", head: ["z", "0,5", "1,0", "1,28", "1,5", "1,645", "1,96", "2,0", "2,33"], rows: [
            ["P(Z < z)", "0,6915", "0,8413", "0,8997", "0,9332", "0,9500", "0,9750", "0,9772", "0,9901"]
          ], not: "Negatif z için simetri: P(Z < −z) = 1 − P(Z < z). Hesap makinesi: normalcdf(alt, üst, μ, σ) alanı, invNorm(alan, μ, σ) değeri verir." },
        { tip: "ornek", baslik: "Sınav puanı: üst kuyruk ve aralık", durum: "Bir deneme sınavının puanları yaklaşık normal, μ = 70 ve σ = 10. Puanı 85'ten büyük olanların oranı ile 60 ile 80 arasında olanların oranı nedir?",
          adimlar: ["z = (85 − 70) ÷ 10 = 1,5.", "Tablo: P(Z < 1,5) = 0,9332; üst kuyruk 1 − 0,9332 = 0,0668.", "60 için z = −1, 80 için z = +1: P(−1 < Z < 1) = 0,8413 − 0,1587 = 0,6826."],
          sonuc: "Öğrencilerin yaklaşık ==%6,7'si== 85'in üstünde; yaklaşık ==%68'i== 60–80 arasında (empirical rule ile uyumlu)." },
        { tip: "ornek", baslik: "Tersinden: 90. yüzdelik", durum: "Aynı sınavda en yüksek %10'a girmek için kaç puan gerekir?",
          adimlar: ["90. yüzdelik: soldan alan 0,90 → z ≈ 1,28 (tablo: 0,8997).", "x = μ + z × σ = 70 + 1,28 × 10 = 82,8."],
          sonuc: "Yaklaşık ==82,8 puan== gerekir. Hesap makinesi: invNorm(0,90; 70; 10) ≈ 82,8." },
        { tip: "tuzak", baslik: "Sağ kuyruğu unutmak", metin: "Tablo her zaman soldan biriken alanı verir.", yanlis: "P(X > 85) = 0,9332.", dogru: "P(X > 85) = 1 − 0,9332 = 0,0668. Soru ‘büyüktür’ diyorsa tablo değerini 1'den çıkar." }
      ]
    },
    {
      baslik: "Normal model ve sampling distribution",
      kisa: "Sampling distribution normalse olasılığı yine z ile bulursun.",
      bloklar: [
        { tip: "adimlar", baslik: "Sampling distribution'da olasılık: 4 adım", adimlar: [
            { baslik: "1 · Dağılımı tanımla", metin: "Hangi statistic (p̂ ya da x̄), hangi n; mean ve SD ne?" },
            { baslik: "2 · Koşulları kontrol et", metin: "Random ve 10%; sonra Large Counts, n ≥ 30 ya da normal popülasyon." },
            { baslik: "3 · z-score hesapla", metin: "z = (statistic − mean) ÷ SD; tablo ya da normalcdf kullan." },
            { baslik: "4 · Bağlamla yorumla", metin: "Olasılığı cümleyle yaz: ‘n kişilik rastgele bir örneklemde … olma olasılığı yaklaşık …’." }
          ] },
        { tip: "tablo", baslik: "Ünitenin haritası: hangi statistic, hangi normal model?", head: ["Statistic", "Mean", "SD", "Normal olması için"], rows: [
            ["p̂ (5.5)", "p", "√(p(1−p)/n)", "np ≥ 10 ve n(1−p) ≥ 10"],
            ["p̂₁ − p̂₂ (5.6)", "p₁ − p₂", "√(p₁(1−p₁)/n₁ + p₂(1−p₂)/n₂)", "dört sayının hepsi ≥ 10"],
            ["x̄ (5.7)", "μ", "σ/√n", "popülasyon normal ya da n ≥ 30"],
            ["x̄₁ − x̄₂ (5.8)", "μ₁ − μ₂", "√(σ₁²/n₁ + σ₂²/n₂)", "iki popülasyon normal ya da n₁, n₂ ≥ 30"]
          ], not: "Her satır için ayrıca rastgele örnekleme (ya da randomized experiment) ve 10% koşulu gerekir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Parameter* popülasyonu anlatan sabit sayıdır (p, μ, σ); *statistic* örneklemden hesaplanır (p̂, x̄, s) ve örneklemden örnekleme değişir.",
            "*Sampling variability*: aynı popülasyondan çekilen örneklemlerde statistic'in farklı çıkması; hata değil, şanstır.",
            "*Sampling distribution*: aynı n'li tüm olası örneklemlerdeki statistic değerlerinin dağılımı; popülasyon ya da tek örneklem dağılımı değildir.",
            "z = (değer − mean) ÷ SD; *empirical rule*: 1, 2, 3 SD içinde yaklaşık %68, %95, %99,7.",
            "Tablo soldan alan verir: ‘büyüktür’ sorularında 1'den çıkar; yüzdelik için z'yi bulup x = mean + z × SD yaz.",
            "Sampling distribution normalse olasılık hesabı aynı z yöntemiyle yapılır; önce koşulları kontrol et.",
            "Hesap makinesi: normalcdf ile olasılık, invNorm ile yüzdelik değeri."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okulda 900 öğrenci var. Rastgele seçilen 60 öğrencinin %45'inin servisle geldiği görülüyor. Okuldaki bütün öğrencilerin gerçekte %48'i servisle geliyor. Aşağıdakilerden hangisi doğrudur?",
      opts: ["0,45 bir parameter, 0,48 bir statistic'tir.", "0,45 bir statistic (p̂), 0,48 bir parameter (p)'dir.", "İkisi de statistic'tir.", "İkisi de parameter'dır."],
      a: 1,
      why: "Örneklemden hesaplanan 0,45 statistic (p̂); popülasyonun gerçek oranı 0,48 parameter (p). En çekici yanlış şık A: ‘daha büyük sayı parameter’ sanmak; oysa ayrımı sayının büyüklüğü değil, nereden geldiği belirler." },
    { q: "Bir araştırmacı aynı popülasyondan her biri n = 40 olan 500 rastgele örneklem çekip her örneklemin ortalamasını (x̄) hesaplıyor. Bu 500 ortalamanın histogramı neyi yaklaşık olarak gösterir?",
      opts: ["Popülasyondaki bireysel değerlerin dağılımını", "40 kişilik tek bir örneklemin verisinin dağılımını", "x̄'nin sampling distribution'ını", "Popülasyon mean'i μ'nün dağılımını"],
      a: 2,
      why: "Aynı büyüklükte birçok örneklemden hesaplanan statistic değerlerinin dağılımı, o statistic'in sampling distribution'ıdır. D yanlış: μ bir parameter olduğu için sabittir, dağılımı yoktur." },
    { q: "Bir sınavın puanları yaklaşık normal dağılıyor: μ = 70, σ = 10. Rastgele seçilen bir öğrencinin puanının 85'ten büyük olma olasılığı yaklaşık kaçtır?",
      opts: ["0,0668", "0,9332", "0,1587", "0,0228"],
      a: 0,
      why: "z = (85 − 70) ÷ 10 = 1,5. Tablo soldan alan verir: P(Z < 1,5) = 0,9332; ‘büyüktür’ için 1 − 0,9332 = 0,0668. En çekici yanlış şık 0,9332: sağ kuyruğu almayı unutmak." },
    { q: "Aşağıdaki histogram, bir popülasyondan çekilen n = 40 kişilik 100 rastgele örneklemin p̂ değerlerini gösteriyor. Histogramla ilgili hangi ifade doğrudur?",
      fig: { type: "hist", bins: [{"from":0.12,"to":0.16,"n":2},{"from":0.16,"to":0.2,"n":6},{"from":0.2,"to":0.24,"n":12},{"from":0.24,"to":0.28,"n":19},{"from":0.28,"to":0.32,"n":22},{"from":0.32,"to":0.36,"n":19},{"from":0.36,"to":0.4,"n":12},{"from":0.4,"to":0.44,"n":6},{"from":0.44,"to":0.48,"n":2}], label: "p̂ (n = 40)", ylabel: "Örneklem sayısı" },
      opts: ["Histogram, popülasyondaki kişilerin dağılımını gösterir.", "Her örneklemde p̂ aynı çıktığı için grafik tek sütundur.", "Gerçek p yaklaşık 0,15'tir, çünkü en küçük p̂ budur.", "Histogram p̂'nin sampling distribution'ını yaklaşık gösterir; merkezi p ≈ 0,30 civarındadır."],
      a: 3,
      why: "Her nokta bir örneklemin p̂ değeri; hepsi birlikte p̂'nin sampling distribution'ını yaklaşık verir ve merkezde p'ye yakın toplanır. A en çekici yanlış şık: histogramın her çubuğu bir kişi değil, bir örneklemdir." },
    { q: "Aynı sınavda (μ = 70, σ = 10, yaklaşık normal) en yüksek %10'a girmek için gereken en küçük puan yaklaşık kaçtır? (90. yüzdelik için z ≈ 1,28)",
      opts: ["71,28", "82,8", "57,2", "94,0"],
      a: 1,
      why: "x = μ + z × σ = 70 + 1,28 × 10 = 82,8. 71,28 z'yi σ ile çarpmayı unutur; 57,2 ise en düşük %10'un sınırıdır (z = −1,28)." }
  ]
};
