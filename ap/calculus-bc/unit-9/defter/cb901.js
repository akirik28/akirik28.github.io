/* Kitora not defteri · cb901 · 9.1–9.2 Parametrik Denklemler ve Türevleri
   Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb901",
  amac: "Bu konu *parametric equations* yani parametrik denklemleri anlatıyor: x ve y ikisi de bir t parametresine bağlıyken eğrinin eğimini, yatay ve dikey teğetlerini ve bükeyliğini (ikinci türev) nasıl bulursun? dy/dx = (dy/dt)/(dx/dt) ve d²y/dx² formüllerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Parametrik eğri: x ve y zamanla yazılır",
      kisa: "t ilerledikçe (x(t), y(t)) noktası eğriyi çizer; t'nin artış yönü eğrinin yönüdür.",
      bloklar: [
        { tip: "hikaye", ikon: "🛰️", baslik: "Drone'un yolu", metin: "Okul bahçesinde bir drone uçuruyorsun. Konumunu \"y şu kadar, x'e göre\" diye tarif etmek zor, ama saniye t'yi bilince iki sayıyı ayrı ayrı söylemek çok kolay: doğuya x(t) metre, kuzeye y(t) metre. İşte ==parametrik== yazılış bu." },
        { tip: "kavramlar", kartlar: [{ ikon: "⏱️", terim: "Parameter", tr: "parametre", tanim: "x ve y'yi birlikte yöneten üçüncü değişken, genellikle t. Zaman olmak zorunda değil ama çoğu zaman öyle düşünülür.", ornek: "x = t², y = t³ − 3t içinde parametre t'dir." }, { ikon: "🧭", terim: "Parametric equations", tr: "parametrik denklemler", tanim: "x = x(t) ve y = y(t) çifti. Her t bir nokta verir; t değiştikçe noktalar bir eğri çizer.", ornek: "t = 2 için (4, 2) noktası." }, { ikon: "➡️", terim: "Orientation", tr: "yön", tanim: "t arttıkça noktanın eğri üzerinde ilerlediği yön. Aynı eğri ters parametrelenirse yön tersine döner.", ornek: "Aşağıdaki eğri t = −2'de sağ altta başlar." }] },
        { tip: "grafik", baslik: "x = t², y = t³ − 3t eğrisi", xlabel: "x", ylabel: "y", xmax: 8, ymax: 5.5, xticks: [{ v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 5.5] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8, 3] }, { id: "c", tip: "egri", renk: 0, noktalar: [[6, 1], [5.24, 2.568], [4.56, 3.704], [3.96, 4.456], [3.44, 4.872], [3, 5], [2.64, 4.888], [2.36, 4.584], [2.16, 4.136], [2.04, 3.592], [2, 3], [2.04, 2.408], [2.16, 1.864], [2.36, 1.416], [2.64, 1.112], [3, 1], [3.44, 1.128], [3.96, 1.544], [4.56, 2.296], [5.24, 3.432], [6, 5]] }, { id: "p", tip: "nokta", renk: 2, x: 6, y: 1, etiket: "t = −2" }], durumlar: [{ metin: "t = −2: nokta (4, −2)'de başlıyor. Kesikli çizgiler gerçek x ve y eksenleri; çerçevenin kenarları değil." }, { metin: "t = −1: (1, 2). t arttıkça nokta sola ve yukarı çıktı.", set: { p: { x: 3, y: 5, etiket: "t = −1" } } }, { metin: "t = 0: (0, 0). Eğri y eksenine dokunuyor.", set: { p: { x: 2, y: 3, etiket: "t = 0" } } }, { metin: "t = 1: (1, −2). Eğri aşağı inip sağa dönüyor; (3, 0)'a gelince kendini kesecek.", set: { p: { x: 3, y: 1, etiket: "t = 1" } } }, { metin: "t = 2: (4, 2). Eğri hem t = −√3 hem t = √3 için (3, 0)'dan geçer: bir halka oluşur.", set: { p: { x: 6, y: 5, etiket: "t = 2" } } }] }
      ]
    },
    {
      baslik: "Eğim: dy/dx = (dy/dt) / (dx/dt)",
      kisa: "Eğim, y'nin t'ye göre hızının x'in t'ye göre hızına oranıdır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "dy/dx", alt: "eğim" }, "=", { t: "dy/dt", alt: "y'nin hızı" }, "÷", { t: "dx/dt", alt: "x'in hızı, ≠ 0" }], aciklama: "Neden? Zincir kuralı: dy/dt = dy/dx · dx/dt. dx/dt ≠ 0 ise iki yanı dx/dt'ye bölersin. İki türevi t'ye göre alıp ==böl==, hepsi bu." },
        { tip: "ornek", baslik: "x = t², y = t³ − 3t", durum: "t = 2 anında eğrinin eğimi kaçtır?", adimlar: ["dx/dt = 2t ve dy/dt = 3t² − 3.", "dy/dx = (3t² − 3)/(2t).", "t = 2 koy: (12 − 3)/4 = 9/4.", "Nokta da gerekirse: x(2) = 4, y(2) = 8 − 6 = 2, yani (4, 2)."], sonuc: "t = 2'de eğim 9/4, nokta (4, 2)" },
        { tip: "tuzak", metin: "Eğim sorusunda iki türevi böl; fonksiyonları değil. Bölümün hangisi üstte, hangisi altta olduğuna da dikkat et.", yanlis: "dy/dx = y(t)/x(t), ya da dy/dx = (dx/dt)/(dy/dt).", dogru: "dy/dx = (dy/dt)/(dx/dt). Önce türevleri al, sonra t değerini koy." }
      ]
    },
    {
      baslik: "Yatay ve dikey teğet",
      kisa: "dy/dt = 0 ve dx/dt ≠ 0 yatay; dx/dt = 0 ve dy/dt ≠ 0 dikey teğet verir.",
      bloklar: [
        { tip: "tablo", baslik: "Teğetin yönü hangi türevin sıfır olmasına bağlı", head: ["Durum", "dx/dt", "dy/dt", "Sonuç"], rows: [["Yatay teğet", "≠ 0", "= 0", "eğim 0"], ["Dikey teğet", "= 0", "≠ 0", "eğim tanımsız"], ["İkisi de sıfır", "= 0", "= 0", "0/0, belirsiz: ayrıca incele"]], vurgu: 0, not: "Önce payı ve paydayı ayrı ayrı sıfır yap, sonra öbürünün sıfır olmadığını kontrol et." },
        { tip: "ornek", baslik: "x = t², y = t³ − 3t", durum: "Yatay ve dikey teğet noktalarını bul.", adimlar: ["dy/dt = 3t² − 3 = 0 → t = ±1. Bu t'lerde dx/dt = ±2 ≠ 0: yatay teğet.", "t = 1: (1, −2). t = −1: (1, 2).", "dx/dt = 2t = 0 → t = 0. Orada dy/dt = −3 ≠ 0: dikey teğet.", "t = 0: nokta (0, 0)."], sonuc: "Yatay: (1, ±2). Dikey: (0, 0)" },
        { tip: "grafik", baslik: "Yatay ve dikey teğetler", xlabel: "x", ylabel: "y", xmax: 8, ymax: 5.5, xticks: [{ v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 5.5] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8, 3] }, { id: "c", tip: "egri", renk: 0, noktalar: [[6, 1], [5.24, 2.568], [4.56, 3.704], [3.96, 4.456], [3.44, 4.872], [3, 5], [2.64, 4.888], [2.36, 4.584], [2.16, 4.136], [2.04, 3.592], [2, 3], [2.04, 2.408], [2.16, 1.864], [2.36, 1.416], [2.64, 1.112], [3, 1], [3.44, 1.128], [3.96, 1.544], [4.56, 2.296], [5.24, 3.432], [6, 5]] }, { id: "th1", tip: "cizgi", renk: 2, from: [2.2, 5], to: [3.8, 5], etiket: "eğim 0", gizli: true }, { id: "th2", tip: "cizgi", renk: 2, from: [2.2, 1], to: [3.8, 1], etiket: "eğim 0", gizli: true }, { id: "tv", tip: "cizgi", renk: 3, from: [2, 2.1], to: [2, 3.9], etiket: "dikey", gizli: true }, { id: "p1", tip: "nokta", renk: 2, x: 3, y: 5, gizli: true }, { id: "p2", tip: "nokta", renk: 2, x: 3, y: 1, gizli: true }, { id: "p3", tip: "nokta", renk: 3, x: 2, y: 3, gizli: true }], durumlar: [{ metin: "Eğri: x = t², y = t³ − 3t. Teğetlerin yönünü arıyoruz." }, { metin: "t = ±1: dy/dt = 0 ve dx/dt = ±2 ≠ 0. İki yatay teğet: (1, 2) ve (1, −2).", goster: ["p1", "p2", "th1", "th2"] }, { metin: "t = 0: dx/dt = 0 ve dy/dt = −3 ≠ 0. (0, 0)'da dikey teğet; teğet y eksenin kendisi.", goster: ["p3", "tv"] }] },
        { tip: "tuzak", metin: "dy/dt = 0 bulduğunda hemen \"yatay\" deme; dx/dt'ye de bak. İkisi birden sıfırsa teğet yönü bu yöntemle belli değildir.", yanlis: "x = t², y = t² için t = 0'da dy/dt = 0, o halde teğet yatay.", dogru: "t = 0'da dx/dt de 0. Eğri aslında y = x doğrusunun yarısıdır (t ≠ 0 için dy/dx = 1)." }
      ]
    },
    {
      baslik: "Teğet doğrusunun denklemi",
      kisa: "t'den nokta ve eğimi bul, sonra y − y₀ = m(x − x₀) yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç adım", adimlar: [{ baslik: "Noktayı bul", metin: "t değerini x(t) ve y(t) içine koy: (x₀, y₀)." }, { baslik: "Eğimi bul", metin: "dy/dt ve dx/dt'yi t'de hesapla, böl: m." }, { baslik: "Doğruyu yaz", metin: "y − y₀ = m(x − x₀)." }] },
        { tip: "ornek", baslik: "x = t², y = t³ − 3t eğrisinin (3, 0) noktası", durum: "Bu noktadaki teğet doğruları yaz.", adimlar: ["y = 0 → t(t² − 3) = 0 → t = 0, ±√3. x = t² = 3 için t = ±√3.", "t = √3: dy/dx = (3·3 − 3)/(2√3) = 6/(2√3) = √3.", "t = −√3: dy/dx = 6/(−2√3) = −√3.", "Her iki doğru da (3, 0)'dan geçer: y = √3(x − 3) ve y = −√3(x − 3)."], sonuc: "Aynı noktada iki teğet: y = ±√3(x − 3)" },
        { tip: "grafik", baslik: "Kendini kesen noktada iki teğet", xlabel: "x", ylabel: "y", xmax: 8, ymax: 5.5, xticks: [{ v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 5.5] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8, 3] }, { id: "c", tip: "egri", renk: 0, noktalar: [[6, 1], [5.24, 2.568], [4.56, 3.704], [3.96, 4.456], [3.44, 4.872], [3, 5], [2.64, 4.888], [2.36, 4.584], [2.16, 4.136], [2.04, 3.592], [2, 3], [2.04, 2.408], [2.16, 1.864], [2.36, 1.416], [2.64, 1.112], [3, 1], [3.44, 1.128], [3.96, 1.544], [4.56, 2.296], [5.24, 3.432], [6, 5]] }, { id: "p", tip: "nokta", renk: 2, x: 5, y: 3, etiket: "(3, 0)", gizli: true }, { id: "l1", tip: "cizgi", renk: 2, from: [4.3, 1.788], to: [5.7, 4.212], etiket: "eğim √3", gizli: true }, { id: "l2", tip: "cizgi", renk: 3, from: [4.3, 4.212], to: [5.7, 1.788], etiket: "eğim −√3", gizli: true }], durumlar: [{ metin: "Eğri (3, 0) noktasından iki kez geçiyor: t = −√3 ve t = √3." }, { metin: "O noktayı işaretle: aynı (x, y) için iki farklı t var.", goster: ["p"] }, { metin: "t = √3: eğim 6/(2√3) = √3. Eğri sağ üste doğru gidiyor.", goster: ["l1"] }, { metin: "t = −√3: eğim 6/(−2√3) = −√3. İkinci teğet, ayna görüntüsü.", goster: ["l2"] }] }
      ]
    },
    {
      baslik: "İkinci türev: d²y/dx²",
      kisa: "Önce dy/dx'i t'ye göre türet, sonra yine dx/dt'ye böl.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "d²y/dx²", alt: "ikinci türev" }, "=", { t: "d/dt (dy/dx)", alt: "eğimi t'ye göre türet" }, "÷", { t: "dx/dt", alt: "tekrar böl" }], aciklama: "Eğim, x'e göre türev almak istediğin yeni bir fonksiyondur. Ama elinde t var; o yüzden önce t'ye göre türet, sonra dx/dt'ye böl." },
        { tip: "ornek", baslik: "x = t², y = t³ − 3t", durum: "d²y/dx²'yi bul, t = 1 ve t = −1'de değerlendir.", adimlar: ["dy/dx = (3t² − 3)/(2t) = (3/2)t − 3/(2t).", "t'ye göre türev: 3/2 + 3/(2t²) = 3(t² + 1)/(2t²).", "dx/dt = 2t'ye böl: d²y/dx² = 3(t² + 1)/(4t³).", "t = 1: 6/4 = 3/2. t = −1: 6/(−4) = −3/2."], sonuc: "d²y/dx² = 3(t² + 1)/(4t³); t = 1'de 3/2, t = −1'de −3/2" },
        { tip: "tuzak", metin: "Pay ve paydanın ikinci türevlerini bölmek çok çekici ama yanlıştır.", yanlis: "d²y/dx² = (d²y/dt²)/(d²x/dt²). Örnekte t = 1: 6/2 = 3.", dogru: "d²y/dx² = [d/dt (dy/dx)]/(dx/dt). Aynı örnekte t = 1'de doğru değer 3/2." }
      ]
    },
    {
      baslik: "İkinci türev bükeylik söyler",
      kisa: "d²y/dx² > 0 yukarı bükey (∪), d²y/dx² < 0 aşağı bükey (∩).",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "😀", terim: "Concave up", tr: "yukarı bükey", tanim: "d²y/dx² > 0. Eğri teğetlerinin üstünde kalır, bir çanak gibi.", ornek: "Yatay teğetli noktada yerel en küçük işareti." }, { ikon: "😟", terim: "Concave down", tr: "aşağı bükey", tanim: "d²y/dx² < 0. Eğri teğetlerinin altında kalır, tepe gibi.", ornek: "Yatay teğetli noktada yerel en büyük işareti." }] },
        { tip: "grafik", baslik: "İkinci türevin işareti ve bükeylik", xlabel: "x", ylabel: "y", xmax: 8, ymax: 5.5, xticks: [{ v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }], yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }], ogeler: [{ id: "ay", tip: "cizgi", renk: 1, kesik: true, from: [2, 0], to: [2, 5.5] }, { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [8, 3] }, { id: "c", tip: "egri", renk: 0, noktalar: [[6, 1], [5.24, 2.568], [4.56, 3.704], [3.96, 4.456], [3.44, 4.872], [3, 5], [2.64, 4.888], [2.36, 4.584], [2.16, 4.136], [2.04, 3.592], [2, 3], [2.04, 2.408], [2.16, 1.864], [2.36, 1.416], [2.64, 1.112], [3, 1], [3.44, 1.128], [3.96, 1.544], [4.56, 2.296], [5.24, 3.432], [6, 5]] }, { id: "t2", tip: "cizgi", renk: 2, from: [2.2, 1], to: [3.8, 1], gizli: true }, { id: "p2", tip: "nokta", renk: 2, x: 3, y: 1, gizli: true }, { id: "y2", tip: "yazi", x: 4.7, y: 0.4, metin: "d²y/dx² = 3/2 > 0  (∪)", gizli: true }, { id: "t1", tip: "cizgi", renk: 3, from: [2.2, 5], to: [3.8, 5], gizli: true }, { id: "p1", tip: "nokta", renk: 3, x: 3, y: 5, gizli: true }, { id: "y1", tip: "yazi", x: 4.7, y: 5.25, metin: "d²y/dx² = −3/2 < 0  (∩)", gizli: true }], durumlar: [{ metin: "Yatay teğetli iki noktada eğrinin bükeyliğine bakacağız." }, { metin: "(1, −2): d²y/dx² = 3/2 > 0. Eğri teğetin üstünde kalır, yukarı bükey: yerel en küçük.", goster: ["t2", "p2", "y2"] }, { metin: "(1, 2): d²y/dx² = −3/2 < 0. Eğri teğetin altında kalır, aşağı bükey: yerel en büyük.", goster: ["t1", "p1", "y1"] }] },
        { tip: "ikili", sol: { ikon: "😀", baslik: "*Concave up* (∪)", maddeler: ["d²y/dx² > 0", "Eğri teğetin üstünde"] }, sag: { ikon: "😟", baslik: "*Concave down* (∩)", maddeler: ["d²y/dx² < 0", "Eğri teğetin altında"] }, oyun: [{ metin: "x = t², y = t³ − 3t eğrisinde t = 1 (nokta (1, −2)).", cevap: "sol", neden: "d²y/dx² = 3/2 > 0." }, { metin: "Aynı eğride t = −1 (nokta (1, 2)).", cevap: "sag", neden: "d²y/dx² = −3/2 < 0." }, { metin: "Yatay teğetin yerel en büyük değer verdiği nokta.", cevap: "sag", neden: "Tepe noktası aşağı bükeydir." }, { metin: "Yatay teğetin yerel en küçük değer verdiği nokta.", cevap: "sol", neden: "Çukur noktası yukarı bükeydir." }] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Parametrik eğri: x = x(t), y = y(t). t arttıkça nokta eğriyi çizer; t'nin yönü eğrinin yönüdür.", "Eğim: dy/dx = (dy/dt)/(dx/dt), dx/dt ≠ 0 olduğunda. İki türevi böl, fonksiyonları değil.", "Yatay teğet: dy/dt = 0 ve dx/dt ≠ 0. Dikey teğet: dx/dt = 0 ve dy/dt ≠ 0.", "İkisi birden sıfırsa 0/0 olur; teğet yönü ayrıca incelenir.", "Teğet doğrusu: t'den (x₀, y₀) ve m bul, y − y₀ = m(x − x₀). Kendini kesen noktada iki farklı t, iki farklı teğet verebilir.", "İkinci türev: d²y/dx² = [d/dt(dy/dx)]/(dx/dt). Pay ve paydanın ikinci türevlerini bölmek yanlıştır.", "d²y/dx² > 0 yukarı bükey, < 0 aşağı bükey. Yatay teğette bu işaret yerel en küçük mü en büyük mü olduğunu söyler."] }
      ]
    }
  ],
  sorular: [
    {
      q: "x(t) = 3t − 1 ve y(t) = t² + 2 ise t = 2 anında dy/dx kaçtır?",
      opts: [
        "3/4",
        "4/3",
        "4",
        "6/5"
      ],
      a: 1,
      why: "dy/dt = 2t = 4 ve dx/dt = 3 olduğundan dy/dx = 4/3. 3/4 bölümü ters yazar; 4 ise dx/dt'ye bölmeyi unutur; 6/5 ise y(2)/x(2) bölümüdür."
    },
    {
      q: "Bir parçacığın hız bileşenleri tabloda veriliyor. Parçacığın yörüngesinin hangi t anında dikey teğeti vardır?",
      fig: {
        type: "table",
        head: ["t", "dx/dt", "dy/dt"],
        rows: [["0", "2", "0"], ["1", "0", "0"], ["2", "0", "3"], ["3", "−4", "5"]],
        caption: "Parametrik bir eğrinin türevleri"
      },
      opts: [
        "t = 0",
        "t = 1",
        "t = 2",
        "t = 3"
      ],
      a: 2,
      why: "Dikey teğet için dx/dt = 0 ve dy/dt ≠ 0 olmalı: yalnızca t = 2. t = 0'da dy/dt = 0, dx/dt ≠ 0 olduğundan teğet yataydır. t = 1'de ikisi de sıfır olduğu için dikey demek yanlış olur."
    },
    {
      q: "x = t², y = t³ ise t = 2'de d²y/dx² kaçtır?",
      opts: [
        "3/8",
        "3/2",
        "6",
        "3/4"
      ],
      a: 0,
      why: "dy/dx = 3t²/(2t) = 3t/2. Bunun t'ye göre türevi 3/2, dx/dt = 4'e bölünce 3/8. 6 şıkkı (d²y/dt²)/(d²x/dt²) = 12/2 hatasıdır; 3/2 ise dx/dt'ye bölmeyi unutmaktır."
    },
    {
      q: "x(t) = t² + 1 ve y(t) = t³ − 12t eğrisinin yatay teğeti hangi noktalardadır?",
      opts: [
        "Yalnızca (1, 0)",
        "(2, −11) ve (2, 11)",
        "(5, 0)",
        "(5, −16) ve (5, 16)"
      ],
      a: 3,
      why: "dy/dt = 3t² − 12 = 0 → t = ±2, bu t'lerde dx/dt = ±4 ≠ 0. t = 2: (5, −16), t = −2: (5, 16). (1, 0) dx/dt = 0 olduğu t = 0'daki dikey teğet noktasıdır."
    },
    {
      q: "x = 2t + 1 ve y = t³ eğrisine t = 1 noktasındaki teğet doğrusunun denklemi hangisidir?",
      opts: [
        "y − 1 = (2/3)(x − 3)",
        "y − 1 = 3(x − 3)",
        "y − 1 = (3/2)(x − 3)",
        "y − 3 = (3/2)(x − 1)"
      ],
      a: 2,
      why: "t = 1: nokta (3, 1). dy/dt = 3t² = 3, dx/dt = 2, eğim 3/2. Eğim 2/3 bölümü ters yazmaktır; 3 ise dx/dt'ye bölmeyi unutmaktır; son şık x ve y koordinatlarını karıştırır."
    }
  ]
};
