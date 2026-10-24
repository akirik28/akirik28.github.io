/* Kitpath not defteri · cb601 · 6.1 Değişimin Birikimi
   Kaynak: AP Calculus BC CED, Topic 6.1. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb601",
  amac: "Bu konu *accumulation of change* yani değişimin birikimini anlatıyor: bir değişim hızı grafiğinin altında kalan alan, o niceliğin toplam ne kadar değiştiğini verir. Alanın birimini, işaretini ve başlangıç değeriyle birlikte yorumlamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Sabit hız: dikdörtgen alanı",
      kisa: "Sabit hızda birikim hız çarpı süredir; grafikte dikdörtgen alanıdır.",
      bloklar: [
        { tip: "not", metin: "Bir musluk dakikada 2 litre su akıtıyorsa 5 dakikada 10 litre su birikir: hız × süre. Hızı süreye karşı çizersen bu çarpım, tabanı 5 ve yüksekliği 2 olan bir dikdörtgenin ==alanıdır==." },
        { tip: "grafik", baslik: "Musluğun akış hızı r(t) = 2 L/dk", xlabel: "t (dk)", ylabel: "L/dk", xmax: 6, ymax: 4,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 2, label: "2" }],
          ogeler: [
            { id: "r", tip: "cizgi", renk: 0, from: [0, 2], to: [6, 2], etiket: "r(t) = 2" },
            { id: "a", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [0, 2], [3, 2], [3, 0]] },
            { id: "z", tip: "yazi", x: 1.5, y: 1, metin: "alan = 6 L", gizli: true }
          ],
          durumlar: [
            { metin: "Akış hızı sabit: her dakika 2 litre." },
            { metin: "İlk 3 dakikada hızın altındaki dikdörtgenin alanı 3 × 2 = 6: 6 litre birikti.", goster: ["a", "z"] },
            { metin: "5 dakikaya uzatınca dikdörtgen büyür: 5 × 2 = 10 litre.", set: { a: { noktalar: [[0, 0], [0, 2], [5, 2], [5, 0]] }, z: { x: 2.5, metin: "alan = 10 L" } } }
          ] },
        { tip: "formul", parcalar: [{ t: "hız (L/dk)", alt: "değişim hızı" }, "×", { t: "süre (dk)", alt: "yatay eksendeki uzunluk" }, "=", { t: "birikim (L)", alt: "grafiğin altındaki alan" }],
          aciklama: "Bu konunun bütün fikri bu: ==değişim hızı grafiğinin altındaki alan, birikmiş değişimdir.==" }
      ]
    },
    {
      baslik: "Hız değişirse: alanı şekillere böl",
      kisa: "Hız değişse de birikim, grafiğin altındaki alandır; alanı basit şekillere böl.",
      bloklar: [
        { tip: "grafik", baslik: "Kantin kuyruğuna katılma hızı r(t)", xlabel: "t (dk)", ylabel: "kişi/dk", xmax: 7, ymax: 5,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "s1", tip: "cizgi", renk: 0, from: [0, 0], to: [2, 4] },
            { id: "s2", tip: "cizgi", renk: 0, from: [2, 4], to: [4, 4] },
            { id: "s3", tip: "cizgi", renk: 0, from: [4, 4], to: [6, 2], etiket: "r(t)" },
            { id: "a1", tip: "alan", renk: 1, gizli: true, noktalar: [[0, 0], [2, 0], [2, 4]] },
            { id: "a2", tip: "alan", renk: 2, gizli: true, noktalar: [[2, 0], [2, 4], [4, 4], [4, 0]] },
            { id: "a3", tip: "alan", renk: 3, gizli: true, noktalar: [[4, 0], [4, 4], [6, 2], [6, 0]] },
            { id: "z1", tip: "yazi", x: 1.6, y: 1, metin: "4 kişi", gizli: true },
            { id: "z2", tip: "yazi", x: 3, y: 2, metin: "8 kişi", gizli: true },
            { id: "z3", tip: "yazi", x: 5, y: 1.4, metin: "6 kişi", gizli: true }
          ],
          durumlar: [
            { metin: "Kuyruğa katılma hızı önce artıyor, sonra sabit kalıyor, sonra azalıyor." },
            { metin: "0–2 dakika: taban 2, yükseklik 4 olan üçgen. Alan = ½ · 2 · 4 = 4 kişi.", goster: ["a1", "z1"] },
            { metin: "2–4 dakika: dikdörtgen. Alan = 2 · 4 = 8 kişi.", goster: ["a2", "z2"] },
            { metin: "4–6 dakika: yamuk. Alan = (4 + 2)/2 · 2 = 6 kişi.", goster: ["a3", "z3"] }
          ] },
        { tip: "ornek", baslik: "Kuyruğa kaç kişi katıldı?", durum: "Yukarıdaki grafikte r(t) kişi/dakika hızıyla kuyruğa katılıyor. İlk 6 dakikada kuyruğa toplam kaç kişi katılmıştır?",
          adimlar: [
            "0–2 dakika üçgen: ½ · 2 · 4 = 4.",
            "2–4 dakika dikdörtgen: 2 · 4 = 8.",
            "4–6 dakika yamuk: (4 + 2)/2 · 2 = 6.",
            "Alanları topla: 4 + 8 + 6 = 18."
          ], sonuc: "6 dakikada kuyruğa 18 kişi katılmıştır." },
        { tip: "not", metin: "Grafik bir eğriyse alanı üçgen ve yamukla yalnızca **yaklaşık** bulabilirsin. Bunu düzenli ve her zaman geliştirilebilir bir yöntemle yapmanın adı *Riemann sum*'dır; sonraki konunun işi bu." }
      ]
    },
    {
      baslik: "Alanın birimi ve anlamı",
      kisa: "Alanın birimi, hızın biriminin yatay eksenin birimiyle çarpımıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚰", terim: "Rate of change", tr: "değişim hızı", tanim: "Bir niceliğin yatay eksendeki değişkene göre ne kadar hızlı değiştiği. Grafikte y ekseni olarak çizilir.", ornek: "Musluktan akan su: litre/dakika." },
            { ikon: "🪣", terim: "Accumulation of change", tr: "değişimin birikimi", tanim: "Değişim hızının bir aralık boyunca topladığı etki; grafikte hızın altındaki alandır.", ornek: "Hız 2 L/dk, süre 5 dk ise birikim 10 L." },
            { ikon: "➕", terim: "Net change", tr: "net değişim", tanim: "Artışlar ile azalışların işaretli toplamı: son değer eksi ilk değer.", ornek: "Depoya 8 L girip 2 L çıktıysa net değişim +6 L." }
          ] },
        { tip: "tablo", baslik: "Hızın birimi × eksenin birimi = alanın birimi", head: ["Hız grafiği (y)", "Yatay eksen", "Alan birimi", "Alan neyi verir?"],
          rows: [
            ["Su akış hızı (L/dk)", "Zaman (dk)", "L", "Depoya giren su"],
            ["Hız (m/s)", "Zaman (s)", "m", "Yer değiştirme"],
            ["Kuyruğa katılma (kişi/dk)", "Zaman (dk)", "kişi", "Katılan kişi sayısı"],
            ["Elektrik gücü (kW)", "Zaman (saat)", "kWh", "Harcanan enerji"]
          ], not: "Birimi sorulursa iki birimi çarp: (L/dk) · dk = L." },
        { tip: "ikili", sol: { ikon: "🟩", baslik: "Grafiğin altındaki *area*", maddeler: ["Birikmiş değişimi verir", "Birimi: hız × süre"] },
          sag: { ikon: "📐", baslik: "Grafiğin *slope*'u", maddeler: ["Hızın kendi değişim hızını verir", "Birimi: hız ÷ süre"] },
          oyun: [
            { metin: "Depoya giren toplam su litresi.", cevap: "sol", neden: "Hızın altındaki alan: birikim." },
            { metin: "Akış hızının dakikada ne kadar arttığı.", cevap: "sag", neden: "Hız grafiğinin eğimi: hızın değişim hızı." },
            { metin: "Bir yürüyüşçünün 6 saniyede aldığı yol.", cevap: "sol", neden: "Hız grafiğinin altındaki alan: yer değiştirme." },
            { metin: "Bir arabanın ivmesi (hız grafiğinde).", cevap: "sag", neden: "Hız grafiğinin eğimi ivmedir." }
          ] }
      ]
    },
    {
      baslik: "Eksenin altı: negatif birikim",
      kisa: "Eksenin altındaki alan azalmadır; net değişim artı alandan eksi alanı çıkarmaktır.",
      bloklar: [
        { tip: "grafik", baslik: "Deponun giriş–çıkış hızı r(t) = 4 − t", xlabel: "t (dk)", ylabel: "L/dk", xmax: 7, ymax: 6.5,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 0, label: "−2" }, { v: 2, label: "0" }, { v: 6, label: "4" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 1, kesik: true, from: [0, 2], to: [7, 2] },
            { id: "r", tip: "cizgi", renk: 0, from: [0, 6], to: [6, 0], etiket: "r(t)" },
            { id: "ap", tip: "alan", renk: 2, gizli: true, noktalar: [[0, 2], [0, 6], [4, 2]] },
            { id: "an", tip: "alan", renk: 3, gizli: true, noktalar: [[4, 2], [6, 2], [6, 0]] },
            { id: "zp", tip: "yazi", x: 1.1, y: 3, metin: "+8 L", gizli: true },
            { id: "zn", tip: "yazi", x: 5.4, y: 1.4, metin: "−2 L", gizli: true },
            { id: "zt", tip: "yazi", x: 4.6, y: 5, metin: "net = +6 L", gizli: true }
          ],
          durumlar: [
            { metin: "Kesikli çizgi gerçek yatay eksen (r = 0). Hız 4'ten başlar, t = 4'te 0 olur, sonra negatife geçer." },
            { metin: "0–4 dakika: eksenin üstünde üçgen. Alan = ½ · 4 · 4 = 8: depoya 8 litre girdi.", goster: ["ap", "zp"] },
            { metin: "4–6 dakika: eksenin altında üçgen. Alan = ½ · 2 · 2 = 2, ama işareti eksi: depodan 2 litre çıktı.", goster: ["an", "zn"] },
            { metin: "Net değişim = 8 − 2 = +6 litre.", goster: ["zt"] }
          ] },
        { tip: "ornek", baslik: "Depoda kaç litre su var?", durum: "Depoda başlangıçta 20 L su var. Giriş–çıkış hızı r(t) = 4 − t L/dk (0 ≤ t ≤ 6; negatif değer su çıkıyor demek). 6. dakikada depoda kaç litre su vardır? Depo en çok ne zaman doludur?",
          adimlar: [
            "r(t) = 0 olduğu an t = 4. Ondan önce r > 0 (depo doluyor), sonra r < 0 (depo boşalıyor).",
            "0–4 dakika alanı: ½ · 4 · 4 = +8 L.",
            "4–6 dakika alanı: ½ · 2 · 2 = 2, işaret eksi: −2 L.",
            "Net değişim: 8 − 2 = +6 L. Son miktar: 20 + 6 = 26 L.",
            "Adaylar: Q(0) = 20, Q(4) = 28, Q(6) = 26. En dolu an t = 4: 28 L (hız orada artıdan eksiye geçiyor)."
          ], sonuc: "6. dakikada 26 L; en çok t = 4'te 28 L." },
        { tip: "tuzak", metin: "Alan bir **değişimdir**, miktarın kendisi değil. Başlangıç değerini eklemeden depodaki miktarı bulamazsın.", yanlis: "Net alan 6 olduğuna göre depoda 6 L su var.", dogru: "Alan +6 L değişim verir; depoda 20 + 6 = 26 L var." }
      ]
    },
    {
      baslik: "Başlangıç değeri + birikim = son değer",
      kisa: "Son miktar, başlangıç miktarı artı hız grafiği altındaki işaretli alandır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Q(b)", alt: "son miktar" }, "=", { t: "Q(a)", alt: "başlangıç miktarı" }, "+", { t: "a'dan b'ye işaretli alan", alt: "net değişim" }],
          aciklama: "Q miktarın kendisi, hızı ise Q′. Bu işaretli alana sonraki konularda ==belirli integral== denecek; şimdilik \"hızın altındaki işaretli alan\" demen yeter." },
        { tip: "tablo", baslik: "Aynı depo: zamanla miktar (başlangıç 20 L)", head: ["t (dk)", "0'dan t'ye alan (L)", "Depodaki su (L)"],
          rows: [["0", "0", "20"], ["2", "+6", "26"], ["4", "+8", "28"], ["6", "+6", "26"]], vurgu: 2,
          not: "Hız artıdan eksiye geçtiği anda (t = 4) miktar en yüksek değerine ulaşır; sonra azalır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Değişim hızı grafiğinin altındaki alan, o niceliğin birikmiş değişimidir.",
            "Sabit hızda birikim = hız × süre: dikdörtgen alanı.",
            "Hız değişiyorsa alanı üçgen, dikdörtgen ve yamuğa böl; eğride alan yaklaşık bulunur.",
            "Alanın birimi = hızın birimi × yatay eksenin birimi (L/dk · dk = L).",
            "Eksenin üstündeki alan artı, altındaki alan eksidir; net değişim bunların toplamıdır.",
            "Son miktar = başlangıç miktarı + işaretli alan. Alanın kendisi miktar değildir.",
            "Hız artıdan eksiye geçince miktar yerel maksimuma ulaşır; en yüksek (mutlak) değer için bu anı uç noktalardaki miktarla karşılaştır.",
            "Grafiğin eğimi hızın kendi değişim hızıdır; alan ile karıştırma."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir pizza dükkânına gelen sipariş hızı ilk 10 dakika sabit 3 sipariş/dk, sonraki 10 dakikada 3'ten 1'e doğrusal azalıyor. İlk 20 dakikada gelen toplam sipariş sayısı kaçtır?",
      opts: ["40", "50", "60", "80"], a: 1,
      why: "0–10 dk: dikdörtgen, 3 · 10 = 30. 10–20 dk: yamuk, (3 + 1)/2 · 10 = 20. Toplam 50. 40 çıkması, hızın ortalamasını (2) 20 dakikayla çarpmaktan gelir; ilk 10 dakika sabit olduğu için ortalama 2 değildir." },
    { q: "Grafik, bir çeşmeden akan suyun hızını gösteriyor (r(t) = 2t, 0 ≤ t ≤ 4). İlk 4 dakikada kaç litre su akar?",
      fig: { type: "graph", xlabel: "t (dk)", ylabel: "L/dk", xmax: 5, ymax: 9, lines: [{ from: [0, 0], to: [4, 8], label: "r(t)" }], xticks: [{ v: 4, label: "4" }], yticks: [{ v: 8, label: "8" }] },
      opts: ["8 L", "12 L", "16 L", "32 L"], a: 2,
      why: "Alan, tabanı 4 ve yüksekliği 8 olan üçgendir: ½ · 4 · 8 = 16 L. 32 L, grafiği dikdörtgen sanıp 4 · 8 yapmaktır." },
    { q: "Bir telefonun pili %30'dayken şarja takılıyor. İlk 2 saat pil yüzdesi sabit +20 %/saat hızla artıyor; sonraki 1 saatte oyun oynanıyor ve pil −30 %/saat hızla azalıyor. 3. saatin sonunda pil yüzde kaçtır?",
      opts: ["%40", "%10", "%70", "%100"], a: 0,
      why: "Net değişim: 2 · 20 + 1 · (−30) = +10 puan. Başlangıç 30 olduğundan son yüzde 30 + 10 = 40. %10 başlangıcı unutmaktır; %70 oyundaki kaybı saymamaktır (30 + 40); %100 ise kaybı da artı almaktır (30 + 40 + 30)." },
    { q: "r(t), bir yemekhaneye dakikada giren öğrenci sayısını (öğrenci/dk) veriyor. r(t) grafiğinin 12:00–12:30 arasında kalan alanı neyi gösterir?",
      opts: ["12:30'da girişin hızını", "12:30'da yemekhanedeki öğrenci sayısını", "Girişin dakikada ne kadar hızlandığını", "12:00–12:30 arasında giren toplam öğrenci sayısını"], a: 3,
      why: "Hızın altındaki alan, o aralıkta birikmiş değişimdir: giren öğrenci sayısı. Yemekhanedeki sayı için başlangıçtaki öğrenci sayısı da eklenmelidir; hızlanma ise grafiğin eğimidir." },
    { q: "Bir su deposunun miktarı Q(t) litre, değişim hızı r(t) L/dk. t = 0'da Q = 5. r(t) grafiği ile t ekseni arasında, eksenin üstünde kalan alan 10 L, altında kalan alan 6 L ise t = 8'de Q kaçtır?",
      opts: ["11", "9", "21", "1"], a: 1,
      why: "Net değişim 10 − 6 = +4, son miktar 5 + 4 = 9. 21, alanları işaretsiz toplamaktır (5 + 10 + 6); 11, üstteki alanı unutup alttaki alanı artı eklemektir (5 + 6); 1 ise işaretleri ters kullanmaktır (5 − 10 + 6)." }
  ]
};
