/* Kitpath not defteri · st203 · 2.4 Saçılım Grafiği
   Kaynak: AP Statistics CED Unit 2, Topic 2.4 (Representing the Relationship Between Two Quantitative Variables). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st203",
  amac: "Bu konu iki *quantitative variable*'ın ilişkisini *scatterplot* ile göstermeyi ve tanımlamayı anlatır. Hangi değişkenin hangi eksene gittiğini, ilişkinin yönünü, biçimini, gücünü ve sıradışı özelliklerini bağlamıyla nasıl yazacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Saçılım grafiği: her nokta bir birim",
      kisa: "Her gözlem birimi (x, y) noktasıdır; açıklayıcı değişken x'te, sonuç y'dedir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Scatterplot", tr: "saçılım grafiği", tanim: "İki *quantitative variable*'ı birlikte gösterir; her gözlem birimi için ==bir nokta== çizilir. Açıklayıcı değişken x eksenine, sonuç değişkeni y eksenine konur.", ornek: "Her öğrenci: (haftalık çalışma saati, quiz doğru sayısı)." }
          ] },
        { tip: "tablo", baslik: "Sekiz öğrenci: haftalık çalışma ve quiz", head: ["Öğrenci", "Çalışma saati (x)", "Quiz doğru sayısı (y, 10 üzerinden)"], rows: [
            ["Ada", "1", "2"], ["Deniz", "2", "3"], ["Ece", "3", "3"], ["Kerem", "4", "5"],
            ["Zeynep", "5", "5"], ["Mert", "6", "7"], ["Elif", "7", "8"], ["Can", "8", "9"]
          ], not: "Çalışma süresini açıklayıcı, quiz sonucunu sonuç değişkeni seçtik; tahmin yönü bu." },
        { tip: "grafik", baslik: "Tablodan saçılım grafiğine", xlabel: "Çalışma saati", ylabel: "Quiz", xmax: 9, ymax: 10,
          xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [2, 4, 6, 8, 10].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 2, kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 3, gizli: true },
            { id: "p3", tip: "nokta", x: 3, y: 3, gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 5, gizli: true },
            { id: "p5", tip: "nokta", x: 5, y: 5, gizli: true },
            { id: "p6", tip: "nokta", x: 6, y: 7, gizli: true },
            { id: "p7", tip: "nokta", x: 7, y: 8, gizli: true },
            { id: "p8", tip: "nokta", x: 8, y: 9, gizli: true }
          ],
          durumlar: [
            { metin: "Ada haftada 1 saat çalışıyor, quizde 2 doğru yapmış: nokta (1, 2).", goster: ["p1"] },
            { metin: "Her öğrenci bir nokta olur: Deniz (2, 3), Ece (3, 3), Kerem (4, 5).", set: { p1: { kilavuz: false } }, goster: ["p2", "p3", "p4"] },
            { metin: "Sekiz öğrenci, sekiz nokta. Sağa gittikçe noktalar ==yukarı== çıkıyor.", goster: ["p5", "p6", "p7", "p8"] }
          ] }
      ]
    },
    {
      baslik: "Yön, biçim ve güç",
      kisa: "Üç soru sor: yukarı mı aşağı mı, doğru mu eğri mi, noktalar ne kadar dar?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "↗️", terim: "Positive association", tr: "pozitif ilişki", tanim: "x arttıkça y ==genellikle artar==; noktalar soldan sağa yukarı çıkar.", ornek: "Boy uzadıkça ayakkabı numarası büyür." },
            { ikon: "↘️", terim: "Negative association", tr: "negatif ilişki", tanim: "x arttıkça y ==genellikle azalır==; noktalar soldan sağa aşağı iner.", ornek: "Araç yaşı arttıkça ikinci el fiyatı düşer." },
            { ikon: "📐", terim: "Form", tr: "biçim", tanim: "Noktalar bir doğru boyunca dizilirse *linear*, bir eğri çiziyorsa *nonlinear*.", ornek: "Bir doğruya dizilen noktalar *linear*, ters U biçimli yığılma *nonlinear*." },
            { ikon: "💪", terim: "Strength", tr: "güç", tanim: "Noktaların örüntüye ne kadar yakın durduğu: ==güçlü, orta, zayıf==.", ornek: "Noktalar çizgiye yapışıksa güçlü, dağınıksa zayıf." }
          ] },
        { tip: "grafik", baslik: "Aynı eksenlerde beş farklı örüntü", xlabel: "Açıklayıcı", ylabel: "Sonuç", xmax: 10, ymax: 10,
          ogeler: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return { id: "q" + i, tip: "nokta", x: i, y: [1.2, 2.3, 2.8, 4.2, 5.1, 5.8, 7.2, 8.1, 8.8][i - 1] }; }),
          durumlar: [
            { metin: "Noktalar bir doğruya çok yakın ve yukarı çıkıyor: ==güçlü, pozitif, doğrusal== ilişki." },
            { metin: "Yine yukarı yönlü ama dağınık: ==zayıf (ya da orta), pozitif, doğrusal==.", set: { q1: { y: 4 }, q2: { y: 2 }, q3: { y: 6 }, q4: { y: 3 }, q5: { y: 5 }, q6: { y: 2.5 }, q7: { y: 7 }, q8: { y: 4 }, q9: { y: 6.5 } } },
            { metin: "Noktalar aşağı iniyor ve doğruya yakın: ==güçlü, negatif, doğrusal==.", set: { q1: { y: 9 }, q2: { y: 8.2 }, q3: { y: 7.4 }, q4: { y: 6.3 }, q5: { y: 5.2 }, q6: { y: 4.5 }, q7: { y: 3.1 }, q8: { y: 2 }, q9: { y: 1.1 } } },
            { metin: "Belirgin bir yön ya da biçim yok: ==ilişki yok== denecek kadar dağınık.", set: { q1: { y: 5 }, q2: { y: 2.5 }, q3: { y: 7 }, q4: { y: 3.5 }, q5: { y: 8 }, q6: { y: 3 }, q7: { y: 6.5 }, q8: { y: 2 }, q9: { y: 7.5 } } },
            { metin: "Noktalar önce yükseliyor sonra düşüyor: ters U biçimli, ==güçlü ama doğrusal olmayan== ilişki.", set: { q1: { y: 2.9 }, q2: { y: 5.35 }, q3: { y: 7.1 }, q4: { y: 8.15 }, q5: { y: 8.5 }, q6: { y: 8.15 }, q7: { y: 7.1 }, q8: { y: 5.35 }, q9: { y: 2.9 } } }
          ] },
        { tip: "ikili", sol: { ikon: "↗️", baslik: "Pozitif ilişki", maddeler: ["x artarken y genellikle artar"] },
          sag: { ikon: "↘️", baslik: "Negatif ilişki", maddeler: ["x artarken y genellikle azalır"] },
          oyun: [
            { metin: "Boyu uzayan çocukların ayakkabı numarası genellikle büyüyor.", cevap: "sol", neden: "İkisi birlikte artıyor: pozitif." },
            { metin: "Telefonda geçirilen süre arttıkça uyku süresi genellikle azalıyor.", cevap: "sag", neden: "Biri artarken öbürü azalıyor: negatif." },
            { metin: "Araç yaşı arttıkça ikinci el fiyatı genellikle düşüyor.", cevap: "sag", neden: "Yaş artarken fiyat azalıyor: negatif." },
            { metin: "Haftalık çalışma saati arttıkça quiz doğru sayısı genellikle artıyor.", cevap: "sol", neden: "İkisi birlikte artıyor: pozitif." }
          ] },
        { tip: "tuzak", baslik: "Eğri de güçlü bir ilişkidir", metin: "Noktalar bir doğru boyunca dizilmiyorsa ilişkinin olmadığı sonucuna varmak yanlıştır.", yanlis: "Noktalar doğru çizmiyorsa değişkenler ilişkisizdir.", dogru: "Ters U ya da başka bir eğri biçimli güçlü ilişki olabilir: biçimi *nonlinear* olarak yaz." }
      ]
    },
    {
      baslik: "Sıradışı özellikler: aykırı nokta ve kümeler",
      kisa: "Genel örüntüden uzak tek nokta outlier, ayrı yığılmalar cluster'dır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Outlier", tr: "aykırı nokta", tanim: "Genel örüntüden ==belirgin biçimde uzakta== duran nokta.", ornek: "Haftada 2 saat çalışıp quizde 9 yapan öğrenci." },
            { ikon: "🫧", terim: "Cluster / gap", tr: "küme / boşluk", tanim: "Noktaların ayrı gruplar hâlinde yığılması (*cluster*) ve gruplar arasındaki boş bölge (*gap*).", ornek: "Az çalışanlar bir yığın, çok çalışanlar başka bir yığın." }
          ] },
        { tip: "grafik", baslik: "Aykırı nokta ve kümeler", xlabel: "Çalışma saati", ylabel: "Quiz", xmax: 9, ymax: 10,
          xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return { v: v, label: String(v) }; }),
          yticks: [2, 4, 6, 8, 10].map(function (v) { return { v: v, label: String(v) }; }),
          ogeler: [
            { id: "b1", tip: "nokta", x: 1, y: 2 }, { id: "b2", tip: "nokta", x: 2, y: 3 },
            { id: "b3", tip: "nokta", x: 3, y: 3 }, { id: "b4", tip: "nokta", x: 4, y: 5 },
            { id: "b5", tip: "nokta", x: 5, y: 5 }, { id: "b6", tip: "nokta", x: 6, y: 7 },
            { id: "b7", tip: "nokta", x: 7, y: 8 }, { id: "b8", tip: "nokta", x: 8, y: 9 },
            { id: "o", tip: "nokta", x: 2, y: 9, renk: 2, etiket: "Outlier", gizli: true },
            { id: "bos", tip: "yazi", x: 4.5, y: 5.6, metin: "boşluk (gap)", gizli: true }
          ],
          durumlar: [
            { metin: "Sekiz noktanın hepsi tek bir pozitif doğrusal örüntüyü izliyor." },
            { metin: "Dokuzuncu öğrenci 2 saat çalışıp 9 yapmış: örüntüden uzak bir ==aykırı nokta==. Nedenini araştır, yok sayma.", goster: ["o"] },
            { metin: "Başka bir okulda noktalar iki ayrı yığın oluşturabilir: iki ==küme== ve aralarında boşluk.", gizle: ["o"], goster: ["bos"], set: { b1: { x: 1, y: 2.5 }, b2: { x: 1.5, y: 3.5 }, b3: { x: 2, y: 2.8 }, b4: { x: 2.5, y: 3.6 }, b5: { x: 6.5, y: 7.5 }, b6: { x: 7, y: 8.5 }, b7: { x: 7.5, y: 7.8 }, b8: { x: 8, y: 8.6 } } }
          ] }
      ]
    },
    {
      baslik: "Bir saçılım grafiğini nasıl tanımlarsın?",
      kisa: "Yön, biçim, güç ve sıradışı özellikler; hepsini bağlamla yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Dört soruluk tarif", adimlar: [
            { baslik: "1 · Yön", metin: "Noktalar soldan sağa yukarı mı çıkıyor (*positive*), aşağı mı iniyor (*negative*)?" },
            { baslik: "2 · Biçim", metin: "Bir doğru boyunca mı (*linear*) yoksa bir eğri çiziyor mu (*nonlinear*)?" },
            { baslik: "3 · Güç", metin: "Noktalar örüntüye çok yakın mı (güçlü), orta mı, dağınık mı (zayıf)?" },
            { baslik: "4 · Sıradışı özellikler", metin: "Aykırı nokta, küme ya da boşluk var mı? Varsa bağlamla söyle." }
          ] },
        { tip: "ornek", baslik: "Çalışma saati ve quiz", durum: "Bu bölümün başındaki sekiz öğrencilik grafiği tarif edelim.",
          adimlar: ["Yön: çalışma saati arttıkça quiz doğru sayısı artıyor, yani pozitif.", "Biçim: noktalar bir doğru boyunca diziliyor, yani doğrusal.", "Güç: noktalar doğruya çok yakın, yani güçlü.", "Sıradışı: belirgin bir aykırı nokta, küme ya da boşluk yok."],
          sonuc: "Sınavda böyle yaz: *There is a strong, positive, linear association between hours studied per week and quiz score. There are no apparent outliers.*" },
        { tip: "tuzak", baslik: "Bağlamsız tarif puan getirmez", metin: "\"Grafik yukarı gidiyor\" gibi cümleler değişkenlerin adını taşımaz. Tariflerde iki değişkenin adı ve yön, biçim, güç birlikte yer almalı.", yanlis: "Grafik yukarı gidiyor.", dogru: "Çalışma saati ile quiz doğru sayısı arasında güçlü, pozitif, doğrusal bir ilişki var; aykırı nokta görünmüyor." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Scatterplot*: her birim bir (x, y) noktasıdır; açıklayıcı değişken x'te, sonuç y'de.",
            "Yön: noktalar yukarı çıkıyorsa *positive*, aşağı iniyorsa *negative association*.",
            "Biçim: doğru boyunca *linear*, eğri biçimli *nonlinear*; eğri de güçlü bir ilişki olabilir.",
            "Güç: noktalar örüntüye ne kadar yakınsa ilişki o kadar güçlüdür.",
            "Sıradışı özellikler: *outlier*, *cluster*, *gap*.",
            "Tarif dört şeyi birlikte söyler: yön, biçim, güç, sıradışı özellikler.",
            "Değişken adlarını ve bağlamı yaz; \"yukarı gidiyor\" yetmez.",
            "İlişkiyi görmek sebep-sonuç göstermez."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki saçılım grafiğini en iyi hangisi tanımlar?",
      fig: { type: "graph", xlabel: "x", ylabel: "y", xmax: 10, ymax: 10, points: [{ q: 1, p: 9 }, { q: 2, p: 8 }, { q: 3, p: 7 }, { q: 4, p: 5.5 }, { q: 5, p: 5 }, { q: 6, p: 3.5 }, { q: 7, p: 3 }, { q: 8, p: 1.5 }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }] },
      opts: ["Güçlü, pozitif, doğrusal ilişki", "Güçlü, negatif, doğrusal ilişki", "Zayıf, negatif, doğrusal ilişki", "Güçlü, negatif, doğrusal olmayan ilişki"],
      a: 1, why: "Noktalar soldan sağa iniyor (negatif), bir doğruya çok yakın (doğrusal ve güçlü). C yanlış: noktalar dağınık değil; D yanlış: eğri biçimli bir örüntü yok." },
    { q: "Bir kafe, günlük en yüksek sıcaklıktan (°C) o gün satılacak soğuk içecek sayısını tahmin etmek istiyor. Saçılım grafiği nasıl çizilmelidir?",
      opts: ["Sıcaklık y eksenine, satış sayısı x eksenine konur çünkü sayı büyük olan y'dedir.", "Hangi değişkenin hangi eksene konduğu önemli değildir.", "Sıcaklık x eksenine (*explanatory*), satış sayısı y eksenine (*response*) konur.", "Satış sayısı x eksenine konur çünkü tahmin edilen değişken x'tir."],
      a: 2, why: "Tahmin etmek için kullanılan *explanatory variable* x eksenine, tahmin edilen *response variable* y eksenine gider. Büyük sayı olması ya da tahmin edilmesi x'e konmayı gerektirmez." },
    { q: "Aşağıdaki saçılım grafiği için hangi yorum doğrudur?",
      fig: { type: "graph", xlabel: "x", ylabel: "y", xmax: 10, ymax: 10, points: [{ q: 1, p: 2.9 }, { q: 2, p: 5.35 }, { q: 3, p: 7.1 }, { q: 4, p: 8.15 }, { q: 5, p: 8.5 }, { q: 6, p: 8.15 }, { q: 7, p: 7.1 }, { q: 8, p: 5.35 }, { q: 9, p: 2.9 }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }] },
      opts: ["Değişkenler arasında güçlü ama doğrusal olmayan (ters U biçimli) bir ilişki vardır.", "Noktalar bir doğru çizmediği için değişkenler arasında ilişki yoktur.", "Değişkenler arasında güçlü, pozitif, doğrusal bir ilişki vardır.", "Değişkenler arasında zayıf, negatif, doğrusal bir ilişki vardır."],
      a: 0, why: "Noktalar çok düzenli bir ters U eğrisi çiziyor: güçlü ve *nonlinear*. B yanlış: doğrusal olmamak ilişkisiz olmak demek değildir." },
    { q: "Bir saçılım grafiğinde noktaların çoğu pozitif doğrusal bir örüntü izliyor, ancak bir nokta örüntüden belirgin biçimde uzakta. Analizde ne yapılmalıdır?",
      opts: ["Nokta hata sayılır ve grafikten silinir.", "Yalnızca yön ve biçim yazılır; tek nokta önemsizdir.", "Nokta yok sayılıp ilişkinin zayıf olduğu söylenir.", "Nokta *outlier* olarak bağlamıyla belirtilir ve nedeni araştırılır."],
      a: 3, why: "Örüntüden uzak nokta bir sıradışı özelliktir ve tarifte *outlier* olarak anılır. Veriyi gerekçe göstermeden silmek yanlış; tek nokta için ilişkiyi zayıf ilan etmek de yanlıştır." },
    { q: "Bir araştırmacı günlük ekran süresi ile uyku süresinin saçılım grafiğini çiziyor: ekran süresi arttıkça uyku süresi genellikle azalıyor, noktalar bir doğruya oldukça yakın ve aykırı nokta yok. Hangi tarif en uygundur?",
      opts: ["Grafik aşağı doğru gidiyor.", "Ekran süresi ile uyku süresi arasında güçlü, negatif, doğrusal bir ilişki vardır; aykırı nokta görünmüyor.", "Ekran süresi uyku süresini azaltır.", "Ekran süresi ile uyku süresi arasında güçlü, pozitif, doğrusal bir ilişki vardır."],
      a: 1, why: "İyi tarif yön, biçim, güç ve sıradışı özellikleri değişken adlarıyla söyler. A bağlamsız; C ise sebep-sonuç iddia eder, saçılım grafiği bunu kanıtlayamaz." }
  ]
};
