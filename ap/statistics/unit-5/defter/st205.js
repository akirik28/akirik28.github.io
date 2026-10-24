/* Kitpath not defteri · st205 · 2.6–2.7 Doğrusal Regresyon Modeli ve Artıklar
   Kaynak: AP Statistics CED Unit 2, Topics 2.6 (Linear Regression Models) ve 2.7 (Residuals). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st205",
  amac: "Bu konu iki sayısal değişken arasındaki doğrusal ilişkiyi ŷ = a + bx denklemiyle modellemeyi anlatır. Eğim ve kesişimi bağlamla yorumlamayı, *extrapolation* tuzağını ve modelin uygunluğunu *residual* ile *residual plot* üzerinden kontrol etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Regresyon doğrusu: ŷ = a + bx",
      kisa: "Model x'e bakarak y'yi tahmin eder; ŷ gerçek değil, tahmindir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Regression line", tr: "regresyon doğrusu", tanim: "*Explanatory variable*'dan *response variable*'ı tahmin etmek için kullanılan ==doğrusal model==.", ornek: "Çalışma saatinden quiz doğru sayısını tahmin etmek." },
            { ikon: "🎯", terim: "Predicted value (ŷ)", tr: "tahmin edilen değer", tanim: "Doğrunun bir x değeri için verdiği tahmin. Gerçek y'den ==farklı olabilir==; üstündeki şapka tahmin olduğunu söyler.", ornek: "x = 6 saat için ŷ = 7 doğru." }
          ] },
        { tip: "formul", parcalar: [{ t: "ŷ", alt: "tahmin edilen y" }, "=", { t: "a", alt: "y-kesişimi" }, "+", { t: "b", alt: "eğim" }, "·", { t: "x", alt: "açıklayıcı değişken" }], aciklama: "Bu bölümün modeli: ŷ = 1 + 1·x. Yani a = 1 ve b = 1." },
        { tip: "grafik", baslik: "Sekiz öğrenci ve regresyon doğrusu", xlabel: "Çalışma saati", ylabel: "Quiz", xmax: 9, ymax: 10,
          xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [2, 4, 6, 8, 10].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 2 }, { id: "p2", tip: "nokta", x: 2, y: 2 }, { id: "p3", tip: "nokta", x: 3, y: 5 },
            { id: "p4", tip: "nokta", x: 4, y: 4 }, { id: "p5", tip: "nokta", x: 5, y: 7 }, { id: "p6", tip: "nokta", x: 6, y: 8 },
            { id: "p7", tip: "nokta", x: 7, y: 8 }, { id: "p8", tip: "nokta", x: 8, y: 8 },
            { id: "ln", tip: "cizgi", renk: 2, from: [0, 1], to: [9, 10], etiket: "", gizli: true },
            { id: "lbl", tip: "yazi", x: 1.9, y: 7.4, metin: "ŷ = 1 + x", renk: 2, gizli: true },
            { id: "pr", tip: "nokta", x: 6, y: 7, renk: 2, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sekiz öğrencinin (çalışma saati, quiz doğru sayısı) noktaları: pozitif, doğrusal bir örüntü." },
            { metin: "Noktalara uyan doğru ŷ = 1 + x. Doğru noktaların hepsinden geçmez; örüntünün özetidir.", goster: ["ln", "lbl"] },
            { metin: "Tahmin: x = 6 saat için ŷ = 1 + 6 = 7 doğru. Bu veride 6 saat çalışan öğrenci aslında 8 yapmış; tahmin gerçekten farklı.", goster: ["pr"] }
          ] }
      ]
    },
    {
      baslik: "Eğim ve kesişimi yorumla",
      kisa: "Eğim: x bir birim artınca ŷ'nin değişimi; kesişim: x = 0 iken tahmin.",
      bloklar: [
        { tip: "ornek", baslik: "ŷ = 1 + 1·x yorumu", durum: "x: haftalık çalışma saati, y: quiz doğru sayısı. Modelin eğimini ve kesişimini bağlamla yorumlayalım.",
          adimlar: ["Eğim b = 1: çalışma süresi 1 saat arttığında, tahmin edilen quiz doğru sayısı ortalama 1 artar.", "Kesişim a = 1: haftada 0 saat çalışan bir öğrenci için tahmin edilen doğru sayısı 1'dir.", "Kesişim yorumunda x = 0'ın veri aralığında olup olmadığına dikkat et: veriler 1–8 saat arası, 0 saat verinin hemen dışında."],
          sonuc: "Şablon: eğim = \"x'te 1 birim artış için *predicted* y'de ortalama b birim değişim\"; kesişim = \"x = 0 iken *predicted* y\". İkisinde de değişken adları ve birimler yazılır." },
        { tip: "ikili", sol: { ikon: "↗️", baslik: "Eğim (b)", maddeler: ["x bir birim artınca ŷ'nin değişimi"] },
          sag: { ikon: "📍", baslik: "Kesişim (a)", maddeler: ["x = 0 iken tahmin edilen y"] },
          oyun: [
            { metin: "Her ek çalışma saati için quiz doğru sayısında beklenen artış.", cevap: "sol", neden: "x bir birim artınca ŷ'nin değişimi: eğim." },
            { metin: "Hiç çalışmayan bir öğrencinin tahmin edilen doğru sayısı.", cevap: "sag", neden: "x = 0 iken ŷ: kesişim." },
            { metin: "Çalışma süresi 1 saat uzayınca tahmin edilen puandaki ortalama fark.", cevap: "sol", neden: "Birim başına değişim: eğim." },
            { metin: "x = 0 için doğrunun verdiği tahmin.", cevap: "sag", neden: "Doğrunun y eksenini kestiği yer: kesişim." }
          ] },
        { tip: "tuzak", baslik: "Eğim garanti ya da sebep değildir", metin: "Eğim, doğrunun verdiği ortalama değişimi söyler; tek bir öğrencinin ne yapacağını ya da çalışmanın puanı artırdığını kanıtlamaz.", yanlis: "Bir saat daha çalışırsan quiz doğru sayın kesinlikle 1 artar.", dogru: "Çalışma süresi 1 saat arttığında *tahmin edilen* quiz doğru sayısı *ortalama* 1 artar." }
      ]
    },
    {
      baslik: "Tahmin ve *extrapolation*",
      kisa: "Verinin aralığı dışında tahmin yapmak güvenilir değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✅", terim: "Interpolation", tr: "aralık içi tahmin", tanim: "Verideki x aralığının ==içinde== kalan bir x için tahmin yapmak.", ornek: "Veri 1–8 saat arası; 6 saat için tahmin." },
            { ikon: "⚠️", terim: "Extrapolation", tr: "aralık dışı tahmin", tanim: "Verideki x aralığının ==dışında== bir x için tahmin yapmak. Doğrusal ilişkinin orada da sürdüğünü varsaymak risklidir.", ornek: "Veri 1–8 saat arası; 12 saat için tahmin." }
          ] },
        { tip: "grafik", baslik: "Aralık içi ve aralık dışı tahmin", xlabel: "Çalışma saati", ylabel: "Quiz", xmax: 12, ymax: 14,
          xticks: [2, 4, 6, 8, 10, 12].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [2, 4, 6, 8, 10, 12, 14].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "aralik", tip: "alan", renk: 1, noktalar: [[1, 0], [1, 14], [8, 14], [8, 0]] },
            { id: "ar", tip: "yazi", x: 4.5, y: 13, metin: "veri aralığı", renk: 1 },
            { id: "p1", tip: "nokta", x: 1, y: 2 }, { id: "p2", tip: "nokta", x: 2, y: 2 }, { id: "p3", tip: "nokta", x: 3, y: 5 },
            { id: "p4", tip: "nokta", x: 4, y: 4 }, { id: "p5", tip: "nokta", x: 5, y: 7 }, { id: "p6", tip: "nokta", x: 6, y: 8 },
            { id: "p7", tip: "nokta", x: 7, y: 8 }, { id: "p8", tip: "nokta", x: 8, y: 8 },
            { id: "ln", tip: "cizgi", renk: 2, from: [0, 1], to: [12, 13], etiket: "" },
            { id: "ic", tip: "nokta", x: 6, y: 7, renk: 2, kilavuz: true, gizli: true },
            { id: "tavan", tip: "cizgi", renk: 3, kesik: true, from: [0, 10], to: [12, 10], etiket: "", gizli: true },
            { id: "tv", tip: "yazi", x: 10.4, y: 10.7, metin: "en çok 10", renk: 3, gizli: true },
            { id: "dis", tip: "nokta", x: 12, y: 13, renk: 2, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Yeşil bölge verinin x aralığı (1–8 saat). Doğru bu aralıkta noktalara uyuyor." },
            { metin: "Aralık içi (*interpolation*): x = 6 için ŷ = 7. Güvenilir bir tahmin.", goster: ["ic"] },
            { metin: "Aralık dışı (*extrapolation*): x = 12 için ŷ = 13 doğru çıkıyor. Quiz 10 üzerinden olduğu için ==imkânsız==.", goster: ["tavan", "tv", "dis"] }
          ] }
      ]
    },
    {
      baslik: "*Residual*: gerçek eksi tahmin",
      kisa: "Artık = y − ŷ; pozitifse model eksik, negatifse fazla tahmin etmiştir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "residual", alt: "artık" }, "=", { t: "y", alt: "gerçek" }, "−", { t: "ŷ", alt: "tahmin" }], aciklama: "Pozitif artık: nokta doğrunun üstünde, model eksik tahmin etti (*underestimate*). Negatif artık: nokta doğrunun altında, model fazla tahmin etti (*overestimate*)." },
        { tip: "tablo", baslik: "ŷ = 1 + x için artıklar", head: ["x", "y", "ŷ = 1 + x", "Artık = y − ŷ"], rows: [
            ["1", "2", "2", "0"], ["2", "2", "3", "−1"], ["3", "5", "4", "+1"], ["4", "4", "5", "−1"],
            ["5", "7", "6", "+1"], ["6", "8", "7", "+1"], ["7", "8", "8", "0"], ["8", "8", "9", "−1"],
            ["", "", "Toplam", "0"]
          ], vurgu: 8, not: "Bu doğruda artıkların toplamı 0'dır; üstteki ve alttaki sapmalar birbirini dengeler." },
        { tip: "grafik", baslik: "Artıklar noktadan doğruya dikey çizilen çubuklardır", xlabel: "Çalışma saati", ylabel: "Quiz", xmax: 9, ymax: 10,
          xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [2, 4, 6, 8, 10].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "ln", tip: "cizgi", renk: 0, from: [0, 1], to: [9, 10], etiket: "" },
            { id: "p1", tip: "nokta", x: 1, y: 2 }, { id: "p2", tip: "nokta", x: 2, y: 2 }, { id: "p3", tip: "nokta", x: 3, y: 5 },
            { id: "p4", tip: "nokta", x: 4, y: 4 }, { id: "p5", tip: "nokta", x: 5, y: 7 }, { id: "p6", tip: "nokta", x: 6, y: 8 },
            { id: "p7", tip: "nokta", x: 7, y: 8 }, { id: "p8", tip: "nokta", x: 8, y: 8 },
            { id: "e3", tip: "cizgi", renk: 1, from: [3, 4], to: [3, 5], etiket: "", gizli: true },
            { id: "e5", tip: "cizgi", renk: 1, from: [5, 6], to: [5, 7], etiket: "", gizli: true },
            { id: "e6", tip: "cizgi", renk: 1, from: [6, 7], to: [6, 8], etiket: "", gizli: true },
            { id: "e2", tip: "cizgi", renk: 2, from: [2, 3], to: [2, 2], etiket: "", gizli: true },
            { id: "e4", tip: "cizgi", renk: 2, from: [4, 5], to: [4, 4], etiket: "", gizli: true },
            { id: "e8", tip: "cizgi", renk: 2, from: [8, 9], to: [8, 8], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "Mavi doğru ŷ = 1 + x. x = 1 ve x = 7'de nokta tam doğru üzerinde: artık 0." },
            { metin: "x = 3, 5, 6: noktalar doğrunun ==üstünde==, artık +1. Model bu öğrencilerin puanını bir eksik tahmin etti.", goster: ["e3", "e5", "e6"] },
            { metin: "x = 2, 4, 8: noktalar doğrunun ==altında==, artık −1. Model bu öğrencilerin puanını bir fazla tahmin etti.", goster: ["e2", "e4", "e8"] }
          ] }
      ]
    },
    {
      baslik: "*Residual plot*: model uygun mu?",
      kisa: "Artıklar x'e karşı çizilir; desen yoksa doğrusal model uygundur.",
      bloklar: [
        { tip: "grafik", baslik: "Artık grafiği (residual plot)", xlabel: "Çalışma saati", ylabel: "Artık", xmax: 9, ymax: 4,
          xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [{ v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "+1" }],
          ogeler: [
            { id: "sifir", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [9, 2], etiket: "" },
            { id: "r1", tip: "nokta", x: 1, y: 2 }, { id: "r2", tip: "nokta", x: 2, y: 1 }, { id: "r3", tip: "nokta", x: 3, y: 3 },
            { id: "r4", tip: "nokta", x: 4, y: 1 }, { id: "r5", tip: "nokta", x: 5, y: 3 }, { id: "r6", tip: "nokta", x: 6, y: 3 },
            { id: "r7", tip: "nokta", x: 7, y: 2 }, { id: "r8", tip: "nokta", x: 8, y: 1 },
            { id: "u", tip: "egri", renk: 2, noktalar: [[1, 3.5], [2, 2.5], [3, 1.5], [4, 0.8], [5, 0.8], [6, 1.5], [7, 2.5], [8, 3.5]], etiket: "", gizli: true }
          ],
          durumlar: [
            { metin: "Bu bölümün artıkları (x'e karşı): sıfır çizgisinin iki yanında ==rastgele==. Belirgin bir desen yok: doğrusal model uygun." },
            { metin: "Başka bir veri kümesinin artıkları: önce pozitif, ortada negatif, sonra yine pozitif. Bir ==U deseni==.", goster: ["u"], set: { r1: { y: 3.5 }, r2: { y: 2.5 }, r3: { y: 1.5 }, r4: { y: 0.8 }, r5: { y: 0.8 }, r6: { y: 1.5 }, r7: { y: 2.5 }, r8: { y: 3.5 } } },
            { metin: "Desen varsa doğrusal model verideki eğriliği yakalayamamış demektir: doğrusal model ==uygun değil==, eğri biçimli bir model düşün." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğrusal model uygun", maddeler: ["Artıklarda belirgin desen yok"] },
          sag: { ikon: "❌", baslik: "Doğrusal model uygun değil", maddeler: ["Artıklarda eğri ya da başka bir desen var"] },
          oyun: [
            { metin: "Artıklar sıfır çizgisinin iki yanında rastgele dağılmış.", cevap: "sol", neden: "Desen yok: doğrusal model uygun." },
            { metin: "Artıklar U biçimli bir eğri çiziyor.", cevap: "sag", neden: "Belirgin desen var: eğrilik yakalanmamış." },
            { metin: "Önce hepsi pozitif, sonra hepsi negatif, sonra yine pozitif.", cevap: "sag", neden: "Bu sıralı değişim bir desendir." },
            { metin: "Artıklarda tahmin edilebilir bir örüntü yok.", cevap: "sol", neden: "Desen yok: doğrusal model uygun." }
          ] },
        { tip: "tuzak", baslik: "Yüksek r yetmez", metin: "r büyük olsa bile artık grafiğinde desen varsa doğrusal model uygun değildir. Karar saçılım grafiği ve artık grafiğiyle verilir.", yanlis: "r = 0,95 olduğuna göre doğrusal model uygundur.", dogru: "Önce artık grafiğine bak: desen varsa, r büyük olsa da, doğrusal model uygun değildir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Regresyon doğrusu: ŷ = a + bx. ŷ tahmindir, y gerçek değerdir.",
            "Eğim b: x bir birim arttığında *predicted* y'de ortalama değişim. Kesişim a: x = 0 iken *predicted* y.",
            "Yorumlarda değişken adlarını, birimleri ve \"tahmin edilen\", \"ortalama\" sözcüklerini kullan; sebep-sonuç iddia etme.",
            "*Extrapolation*: veri aralığı dışında tahmin güvenilir değildir; *interpolation* aralık içidir.",
            "Artık = y − ŷ. Pozitif: model eksik tahmin etti (nokta doğrunun üstünde); negatif: fazla tahmin etti.",
            "*Residual plot*: artıklar x'e karşı çizilir. Desen yoksa doğrusal model uygun, desen varsa uygun değil.",
            "Yüksek r tek başına doğrusal modelin uygun olduğunu göstermez; artık grafiğine bak.",
            "En küçük kareler doğrusunda (LSRL) artıkların toplamı 0'dır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kafede günlük en yüksek sıcaklık (x, °C) ile o gün satılan limonata sayısı (y) için regresyon doğrusu ŷ = −20 + 4x bulunmuştur. Eğim nasıl yorumlanır?",
      opts: ["Sıcaklık 1°C arttığında satılan limonata sayısı kesinlikle 4 artar.", "Sıcaklık 1°C arttığında tahmin edilen limonata sayısı ortalama 4 artar.", "Sıcaklık 4°C iken tahmin edilen satış 1 limonatadır.", "Limonata sayısı 1 arttığında sıcaklık 4°C artar."],
      a: 1, why: "Eğim, x'te 1 birim artış için ŷ'nin ortalama değişimidir ve tahmindir. A yanlış: \"kesinlikle\" bir garanti verir; D ise x ile y'nin rollerini ters çevirir." },
    { q: "Bir model ŷ = 40 + 4x ile tahmin yapıyor. x = 5 olan bir gözlemde gerçek değer y = 65'tir. Artık ve yorumu nedir?",
      opts: ["−5; model gerçek değerden 5 fazla tahmin etti.", "60; bu değer artıktır.", "+25; gerçek değerle x arasındaki fark.", "+5; model gerçek değerden 5 eksik tahmin etti."],
      a: 3, why: "ŷ = 40 + 4·5 = 60 ve artık = y − ŷ = 65 − 60 = +5. Gerçek değer tahminden büyük olduğundan model eksik tahmin etmiştir. 60 tahmin edilen değerdir, artık değil." },
    { q: "Aşağıdaki artık grafiğine göre doğrusal model hakkında ne söylenebilir?",
      fig: { type: "graph", xlabel: "x", ylabel: "Artık", xmax: 10, ymax: 10, lines: [{ from: [0, 5], to: [10, 5], label: "0", dash: true, color: 2 }], points: [{ q: 1, p: 8 }, { q: 2, p: 6.5 }, { q: 3, p: 5.2 }, { q: 4, p: 4 }, { q: 5, p: 3.2 }, { q: 6, p: 3.5 }, { q: 7, p: 4.5 }, { q: 8, p: 6 }, { q: 9, p: 7.8 }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }] },
      opts: ["Artıklar eğri bir desen çiziyor; doğrusal model uygun değil, eğri biçimli bir model düşünülmeli.", "Artıklar rastgele dağıldığı için doğrusal model uygundur.", "r büyük olduğundan doğrusal model uygundur.", "Artıkların toplamı sıfır olduğundan doğrusal model uygundur."],
      a: 0, why: "Artıklar x arttıkça önce azalıp sonra artan belirgin bir U deseni oluşturuyor; bu, doğrusal modelin eğriliği yakalayamadığını gösterir. C ve D yanlış: r büyük olsa ve toplam sıfır olsa bile desen varsa model uygun değildir." },
    { q: "Verileri haftalık 1–8 saat çalışan öğrencilerden toplanmış bir modelle 15 saat çalışan bir öğrencinin quiz sonucu tahmin ediliyor. Bu tahmin için hangisi doğrudur?",
      opts: ["Güvenilirdir; doğrusal model her x değeri için geçerlidir.", "Güvenilirdir; çünkü r yüksektir.", "Güvenilir değildir; veri aralığının dışında tahmin yapılmaktadır (*extrapolation*).", "Güvenilirdir; çünkü artıkların toplamı sıfırdır."],
      a: 2, why: "15 saat, verideki x aralığının (1–8) dışında; doğrusal ilişkinin orada da sürdüğü bilinmez. r yüksek olsa da *extrapolation* riskini ortadan kaldırmaz." },
    { q: "Tablodaki gözlemlerin hangisinde model gerçek değerden en çok fazla tahmin (*overestimate*) etmiştir?",
      fig: { type: "table", head: ["x", "y (gerçek)", "ŷ (tahmin)"], rows: [["2", "9", "8"], ["4", "10", "12"], ["6", "16", "14"]], caption: "Üç gözlem" },
      opts: ["x = 2", "x = 4", "x = 6", "Hiçbirinde, çünkü artıkların toplamı sıfırdır."],
      a: 1, why: "Artıklar: x = 2 için +1, x = 4 için −2, x = 6 için +2. Fazla tahmin (negatif artık) yalnızca x = 4'te var ve 2 birim. x = 6'daki +2 model eksik tahmin ettiğini gösterir." }
  ]
};
