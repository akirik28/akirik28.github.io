/* Kitpath not defteri · st207 · 2.9 Doğrusallıktan Sapmalar
   Kaynak: AP Statistics CED Unit 2, Topic 2.9 (Analyzing Departures from Linearity). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st207",
  amac: "Bu konu doğrusal modelin ne zaman işe yaramadığını anlatır: artık grafiğindeki desenler, *outlier*, *high-leverage point* ve *influential point*, ve eğri ilişkiyi *transformation* ile doğrusallaştırmak. Doğrusal model kullanmadan önce yapılacak kontrolleri öğreneceksin.",
  bolumler: [
    {
      baslik: "Artık grafiğinde desen: eğri ilişki",
      kisa: "r yüksek olsa bile artıklarda desen varsa doğrusal model uygun değildir.",
      bloklar: [
        { tip: "grafik", baslik: "Her saat iki katına çıkan izlenme", xlabel: "Saat", ylabel: "İzlenme (bin)", xmax: 5, ymax: 16,
          xticks: [0, 1, 2, 3, 4].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [4, 8, 12, 16].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "p0", tip: "nokta", x: 0, y: 1 }, { id: "p1", tip: "nokta", x: 1, y: 2 }, { id: "p2", tip: "nokta", x: 2, y: 4 },
            { id: "p3", tip: "nokta", x: 3, y: 8 }, { id: "p4", tip: "nokta", x: 4, y: 16 },
            { id: "ln", tip: "cizgi", renk: 2, from: [0.28, 0], to: [4.5, 15.2], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "Bir videonun izlenmesi (bin) saat saat: 1, 2, 4, 8, 16. Her saat iki katına çıkıyor, yani artış doğrusal değil, eğrisel." },
            { metin: "Doğrusal model ŷ = −1 + 3,6x. r = 0,93, r² = 0,87: ilk bakışta iyi görünüyor. Ama noktalar önce doğrunun üstünde, sonra altında, sonra yine üstünde.", goster: ["ln"] }
          ] },
        { tip: "grafik", baslik: "Aynı verinin artık grafiği", xlabel: "Saat", ylabel: "Artık", xmax: 5, ymax: 6,
          xticks: [0, 1, 2, 3, 4].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "+2" }],
          ogeler: [
            { id: "sifir", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [5, 3], etiket: "" },
            { id: "e0", tip: "nokta", x: 0, y: 5 }, { id: "e1", tip: "nokta", x: 1, y: 2.4 }, { id: "e2", tip: "nokta", x: 2, y: 0.8 },
            { id: "e3", tip: "nokta", x: 3, y: 1.2 }, { id: "e4", tip: "nokta", x: 4, y: 5.6 },
            { id: "u", tip: "egri", renk: 2, noktalar: [[0, 5], [1, 2.4], [2, 0.8], [3, 1.2], [4, 5.6]], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "Artıklar: +2,0; −0,6; −2,2; −1,8; +2,6. Önce pozitif, ortada negatif, sonra yine pozitif." },
            { metin: "Noktalar belirgin bir ==U deseni== çiziyor. Desen, doğrusal modelin eğriliği yakalayamadığını gösterir.", goster: ["u"] }
          ] },
        { tip: "tuzak", baslik: "Yüksek r ve r² model uygun demek değil", metin: "r ve r² yalnızca doğrusal örüntünün gücünü özetler. Eğriliği artık grafiği gösterir.", yanlis: "r² = 0,87 olduğuna göre doğrusal model uygundur.", dogru: "Artık grafiğinde desen varsa, r² yüksek olsa bile, doğrusal model uygun değildir." }
      ]
    },
    {
      baslik: "*Outlier*, *high-leverage* ve *influential point*",
      kisa: "Aykırı nokta y'de uzaktır, kaldıraçlı nokta x'te uçtadır, etkili nokta doğruyu oynatır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Outlier", tr: "aykırı nokta", tanim: "Regresyon doğrusundan ==uzakta== duran, yani büyük artığı olan nokta.", ornek: "Orta sınıflarda öğrencinin çok yüksek puanı." },
            { ikon: "🏋️", terim: "High-leverage point", tr: "yüksek kaldıraçlı nokta", tanim: "x değeri diğer x değerlerinden ==çok uzakta== olan nokta.", ornek: "Diğer öğrenciler 1–6 saat çalışırken 9 saat çalışan öğrenci." },
            { ikon: "🧲", terim: "Influential point", tr: "etkili nokta", tanim: "Çıkarılınca eğimi, kesişimi ya da r'yi ==belirgin biçimde değiştiren== nokta.", ornek: "Kaldıraçlı ve trendin çok dışında bir nokta." }
          ] },
        { tip: "grafik", baslik: "Aynı altı noktaya üç farklı nokta eklemek", xlabel: "x", ylabel: "y", xmax: 10, ymax: 10,
          xticks: [2, 4, 6, 8, 10].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [2, 4, 6, 8, 10].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "b1", tip: "nokta", x: 1, y: 2 }, { id: "b2", tip: "nokta", x: 2, y: 3 }, { id: "b3", tip: "nokta", x: 3, y: 3 },
            { id: "b4", tip: "nokta", x: 4, y: 4 }, { id: "b5", tip: "nokta", x: 5, y: 5 }, { id: "b6", tip: "nokta", x: 6, y: 5 },
            { id: "l0", tip: "cizgi", renk: 0, from: [0, 1.47], to: [10, 7.75], etiket: "" },
            { id: "l0d", tip: "cizgi", renk: 0, kesik: true, from: [0, 1.47], to: [10, 7.75], etiket: "", gizli: true },
            { id: "A", tip: "nokta", x: 3.5, y: 8, renk: 2, gizli: true },
            { id: "lA", tip: "cizgi", renk: 2, from: [0, 2.09], to: [10, 8.37], etiket: "", gizli: true },
            { id: "B", tip: "nokta", x: 9, y: 7, renk: 2, gizli: true },
            { id: "lB", tip: "cizgi", renk: 2, from: [0, 1.51], to: [10, 7.66], etiket: "", gizli: true },
            { id: "C", tip: "nokta", x: 9, y: 2, renk: 2, gizli: true },
            { id: "lC", tip: "cizgi", renk: 2, from: [0, 3.12], to: [10, 3.84], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "Altı nokta ve doğrusu: ŷ = 1,47 + 0,63x, r = 0,97." },
            { metin: "Nokta (3,5; 8): x ortalamada ama y çok yüksek. Büyük artık: ==outlier==. Doğru yukarı kayıyor, eğim aynı (0,63), ama r 0,54'e düşüyor.", gizle: ["l0"], goster: ["l0d", "A", "lA"] },
            { metin: "Nokta (9; 7): x uçta (==yüksek kaldıraç==) ama noktalar gibi trendi izliyor. Doğru neredeyse aynı (eğim 0,62), r 0,99.", gizle: ["A", "lA"], goster: ["B", "lB"] },
            { metin: "Nokta (9; 2): hem x uçta hem trendin çok altında. Doğruyu aşağı çekiyor: eğim 0,07'ye, r 0,15'e düşüyor. ==Influential point==.", gizle: ["B", "lB"], goster: ["C", "lC"] }
          ] },
        { tip: "tuzak", baslik: "Aykırı nokta ile etkili nokta aynı şey değil", metin: "Etkili nokta, uçta olduğu için doğruyu kendine çeker; bu yüzden artığı küçük bile olabilir.", yanlis: "Etkili nokta her zaman en büyük artığa sahiptir.", dogru: "Sor: noktayı çıkarınca eğim, kesişim ya da r çok değişiyor mu? Değişiyorsa nokta etkilidir. Artık büyüklüğü tek ölçüt değildir." }
      ]
    },
    {
      baslik: "Etkiyi sayılarla görmek",
      kisa: "Etkili nokta eğimi ve r'yi değiştirir; ortadaki aykırı nokta çoğunlukla r'yi etkiler.",
      bloklar: [
        { tip: "tablo", baslik: "Altı noktaya bir nokta eklenince", head: ["Veri", "Eğim b", "Kesişim a", "r"], rows: [
            ["Altı nokta", "0,63", "1,47", "0,97"],
            ["+ (3,5; 8) aykırı nokta", "0,63", "2,09", "0,54"],
            ["+ (9; 7) kaldıraçlı, trendde", "0,62", "1,51", "0,99"],
            ["+ (9; 2) kaldıraçlı, trend dışı", "0,07", "3,12", "0,15"]
          ], vurgu: 3, not: "Eğim ve r en çok son satırda değişti: o nokta etkili. Aykırı nokta (3,5; 8) kesişimi ve r'yi değiştirdi, eğimi değiştirmedi." },
        { tip: "ikili", sol: { ikon: "🪶", baslik: "Eğimi pek değiştirmez", maddeler: ["x'i ortalamaya yakın ya da trendin üzerinde"] },
          sag: { ikon: "🧲", baslik: "Eğimi çok değiştirir", maddeler: ["x'i uçta ve trendin dışında"] },
          oyun: [
            { metin: "x ortalamaya yakın, y çok yüksek bir nokta.", cevap: "sol", neden: "Merkeze yakın olduğu için doğruyu eğmez; kesişimi ve r'yi etkiler." },
            { metin: "x uçta, ama noktalar trendin üzerinde.", cevap: "sol", neden: "Trendi izlediği için doğru neredeyse aynı kalır." },
            { metin: "x uçta ve trendin çok altında bir nokta.", cevap: "sag", neden: "Doğruyu kendine doğru çeker: etkili nokta." },
            { metin: "x uçta ve trendin çok üstünde bir nokta.", cevap: "sag", neden: "Doğruyu yukarı çeker: etkili nokta." }
          ] }
      ]
    },
    {
      baslik: "*Transformation*: eğriyi doğruya çevirmek",
      kisa: "Verinin logaritmasını (ya da karekökünü) alınca eğri ilişki doğrusallaşabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔧", terim: "Transformation", tr: "dönüşüm", tanim: "x'e, y'ye ya da ikisine log, karekök, ters gibi bir fonksiyon uygulamak. Eğri ilişki dönüşümle ==doğrusallaşabilir==.", ornek: "y her adımda aynı oranda çarpılıyorsa log y, x ile doğrusaldır." }
          ] },
        { tip: "grafik", baslik: "İzlenmenin logaritması saatle doğrusal", xlabel: "Saat", ylabel: "log y", xmax: 5, ymax: 13,
          xticks: [0, 1, 2, 3, 4].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [{ v: 3.01, label: "0,3" }, { v: 6.02, label: "0,6" }, { v: 9.03, label: "0,9" }, { v: 12.04, label: "1,2" }],
          ogeler: [
            { id: "t0", tip: "nokta", x: 0, y: 0 }, { id: "t1", tip: "nokta", x: 1, y: 3.01 }, { id: "t2", tip: "nokta", x: 2, y: 6.02 },
            { id: "t3", tip: "nokta", x: 3, y: 9.03 }, { id: "t4", tip: "nokta", x: 4, y: 12.04 },
            { id: "ln", tip: "cizgi", renk: 2, from: [0, 0], to: [4.2, 12.64], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "y yerine log y çizildi: log 1 = 0, log 2 ≈ 0,301, log 4 ≈ 0,602, log 8 ≈ 0,903, log 16 ≈ 1,204. Noktalar bir doğru boyunca diziliyor." },
            { metin: "Dönüşmüş verinin doğrusu: log ŷ = 0 + 0,301x. Artıklar sıfır; eğrilik ortadan kalktı.", goster: ["ln"] }
          ] },
        { tip: "ornek", baslik: "Dönüşmüş modelle tahmin", durum: "log ŷ = 0 + 0,301x modeliyle 5. saatteki izlenmeyi tahmin edelim.",
          adimlar: ["Modele x = 5 yaz: log ŷ = 0,301 · 5 = 1,505.", "Orijinal birime dön: ŷ = 10^1,505 ≈ 32 (bin).", "Eğim yorumu: x bir saat artınca log ŷ 0,301 artar; yani ŷ, 10^0,301 ≈ 2 ile çarpılır."],
          sonuc: "5. saatte tahmin edilen izlenme yaklaşık 32 bin; izlenme her saat yaklaşık 2 katına çıkıyor. (5. saat veri aralığının dışında, yani bu bir *extrapolation* tahminidir.)" },
        { tip: "tuzak", baslik: "Tahmini orijinal birime geri çevir", metin: "Dönüşmüş modelin verdiği sayı log biriminde. Soru izlenme sayısını soruyorsa 10 üzeri alarak geri dönmek gerekir.", yanlis: "log ŷ = 1,505 olduğundan 5. saatte izlenme 1,505 bindir.", dogru: "ŷ = 10^1,505 ≈ 32 bindir. Dönüşümden sonra yeni artık grafiğine de bak: desen kalktı mı?" }
      ]
    },
    {
      baslik: "Doğrusal modeli kullanmadan önce kontrol listesi",
      kisa: "Önce şekle bak: biçim, artık grafiği, sıradışı noktalar; sonra r², s.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört adımlık kontrol", adimlar: [
            { baslik: "1 · Saçılım grafiği", metin: "Biçim doğrusal mı? Aykırı, kaldıraçlı ya da etkili nokta var mı?" },
            { baslik: "2 · Artık grafiği", metin: "Sıfır çizgisinin çevresinde rastgele mi, yoksa desen var mı?" },
            { baslik: "3 · r², s", metin: "Desen yoksa r² ve s'yi yorumla: ne kadar değişim açıklanıyor, tahmin hatası tipik olarak ne kadar?" },
            { baslik: "4 · Gerekirse düzelt", metin: "Eğrilik varsa dönüştür. Etkili nokta varsa sonuçları noktayla ve noktasız ayrı ayrı bildir." }
          ] },
        { tip: "ornek", baslik: "İzlenme verisinde kontrol", durum: "İzlenme verisi: r = 0,93, r² = 0,87, artıkların kareler toplamı 19,2.",
          adimlar: ["Saçılım grafiği eğrisel görünüyor ve artık grafiği U deseni çiziyor: doğrusal model uygun değil.", "Doğrusal modelin s'i: √(19,2 ÷ 3) ≈ 2,53 (bin). Ama desen olduğu için bu s güvenilir bir özet değil.", "log y ile x arasında yeni model kuruluyor: noktalar doğru boyunca, artıklar sıfır."],
          sonuc: "Doğrusal model r² = 0,87 verse de uygun değildi; dönüşmüş model uygun. Karar r² ile değil artık grafiği ve saçılım grafiğiyle verilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Artık grafiğinde desen (U, eğri) varsa doğrusal model uygun değildir; r² yüksek olsa bile.",
            "*Outlier*: regresyon doğrusundan uzak, büyük artıklı nokta.",
            "*High-leverage point*: x değeri diğerlerinden çok uzak nokta.",
            "*Influential point*: çıkarılınca eğim, kesişim ya da r'yi belirgin değiştiren nokta; büyük artığı olmak zorunda değildir.",
            "Etkiyi tarif ederken eğimin, kesişimin, r'nin noktayla ve noktasız ne olduğunu karşılaştır.",
            "*Transformation*: log, karekök gibi fonksiyonlarla eğri ilişki doğrusallaştırılabilir; y her adımda aynı oranda çarpılıyorsa log y, x ile doğrusaldır.",
            "Dönüşmüş modelden gelen tahmini orijinal birime geri çevir (log ŷ → 10^log ŷ) ve yeni artık grafiğine bak.",
            "Kontrol listesi: saçılım grafiği, artık grafiği, r² ve s, gerekirse düzelt."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki artık grafiği hakkında ne söylenebilir?",
      fig: { type: "graph", xlabel: "x", ylabel: "Artık", xmax: 10, ymax: 10, lines: [{ from: [0, 5], to: [10, 5], label: "0", dash: true, color: 2 }], points: [{ q: 1, p: 8 }, { q: 2, p: 6.2 }, { q: 3, p: 4.6 }, { q: 4, p: 3.8 }, { q: 5, p: 4.1 }, { q: 6, p: 5.6 }, { q: 7, p: 8.2 }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }] },
      opts: ["Artıklar rastgele dağılmıştır; doğrusal model uygundur.", "Artıklar U deseni gösteriyor; doğrusal model uygun değildir ve x ya da y dönüştürülebilir.", "Artıkların toplamı sıfır olduğu için model uygundur.", "Grafik tek bir aykırı noktayı gösteriyor ve o nokta çıkarılmalıdır."],
      a: 1, why: "Artıklar önce azalıp sonra artıyor; bu belirgin desen eğriliği gösterir. C yanlış: LSRL'de artıkların toplamı zaten 0'dır, bu modelin uygun olduğunu göstermez." },
    { q: "Bir saçılım grafiğinde bir nokta, diğer noktaların x değerlerinden çok uzakta (sağ uçta) ve diğer noktaların oluşturduğu doğrusal örüntünün hemen üzerinde. Bu nokta için hangisi doğrudur?",
      opts: ["Büyük artığı olduğu için en etkili noktadır.", "Hiçbir özelliği yoktur; sıradan bir noktadır.", "Yüksek kaldıraçlı (*high-leverage*) bir noktadır, ancak örüntüyü izlediği için doğruyu pek değiştirmez.", "Örüntüden uzak olduğu için *outlier*'dır ve r'yi mutlaka düşürür."],
      a: 2, why: "x değeri uçta olduğu için nokta yüksek kaldıraçlıdır; ama trendin üzerinde olduğundan artığı küçüktür ve doğruyu pek değiştirmez. D yanlış: bu nokta örüntüden uzak değil, hatta r'yi yükseltebilir." },
    { q: "Bir regresyon analizinde bir nokta çıkarılınca eğim 2,4'ten 0,9'a, r ise 0,88'den 0,35'e düşüyor. Bu nokta için hangisi söylenebilir?",
      opts: ["Etkili bir noktadır (*influential point*), çünkü çıkarılınca eğim ve r büyük ölçüde değişiyor.", "Etkili değildir, çünkü r hâlâ pozitif.", "Etkili olamaz, çünkü tek bir nokta modeli değiştiremez.", "Mutlaka *outlier*'dır ve kaldıraçlı olamaz."],
      a: 0, why: "Etkili nokta, çıkarılınca eğimi, kesişimi ya da r'yi belirgin değiştirendir. Burada eğim ve r çok değişti. Tek bir nokta, özellikle x'i uçtaysa, modeli çok değiştirebilir." },
    { q: "Bir veri kümesinde y'nin logaritması (log₁₀) ile x arasında log ŷ = 0,5 + 0,2x modeli bulunmuştur. x = 5 için ŷ yaklaşık kaçtır?",
      opts: ["1,5", "7,5", "3,16", "31,6"],
      a: 3, why: "x = 5 için log ŷ = 0,5 + 0,2 · 5 = 1,5; orijinal birime dönmek için ŷ = 10^1,5 ≈ 31,6. 1,5 log değeridir, geri çevrilmemiştir; 3,16 ise yalnızca kesişimden (10^0,5) gelir." },
    { q: "Bir hesabın takipçi sayısı (y) ayda yaklaşık %20 artıyor. Saçılım grafiği eğrisel, doğrusal modelin artık grafiği U deseni gösteriyor. Hangisi uygun bir yaklaşımdır?",
      opts: ["y'nin logaritmasını alıp log y ile ay (x) arasında doğrusal bir model kurmak.", "x'in işaretini değiştirmek.", "En büyük değeri silip aynı doğrusal modeli kullanmak.", "r'yi hesaplayıp r yüksekse modelin uygun olduğunu söylemek."],
      a: 0, why: "Her adımda aynı oranda çarpılan (üstel) büyümede log y, x ile doğrusaldır; bu yüzden log dönüşümü deneriz. C ve D eğriliği çözmez: eğrilik artık grafiğindeki desenle görülür, r ile değil." }
  ]
};
