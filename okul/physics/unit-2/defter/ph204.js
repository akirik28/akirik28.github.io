/* Kitora not defteri · ph204 · 2.4 Güç ve Verim (Power and Efficiency)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 2) + MEB FİZ.10 Enerji. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph204",
  amac: "Bu defter *power* yani gücü ve *efficiency* yani verimi anlatıyor: işin ne kadar hızlı yapıldığını (P = W/t) ve verilen enerjinin ne kadarının işe yaradığını (η). Güç grafiklerini okumayı, kWh hesabını ve enerji kaynaklarıyla tasarruf yollarını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Power*: işin hızı",
      kisa: "Güç, birim zamanda yapılan iştir: P = W / t.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P", alt: "güç (W)" }, "=", { t: "W", alt: "iş ya da enerji (J)" }, "÷", { t: "t", alt: "süre (s)" }
          ], aciklama: "Aynı işi daha kısa sürede yapan daha güçlüdür. Güç de skalerdir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Power", tr: "güç", tanim: "İşin yapılma hızı ya da enerjinin aktarılma hızı. Birimi watt (W).", ornek: "100 W'lık ampul her saniye 100 J elektrik enerjisi harcar." },
            { ikon: "🔌", terim: "Watt", tr: "watt (W)", tanim: "1 W = 1 J/s. Büyük güçler için kilowatt: 1 kW = 1000 W.", ornek: "Elektrikli ısıtıcı yaklaşık 2 kW çeker." },
            { ikon: "🧾", terim: "Kilowatt-hour", tr: "kilowatt-saat (kWh)", tanim: "Bir enerji birimidir, güç birimi değil: 1 kWh = 1000 W · 3600 s = 3,6 × 10⁶ J.", ornek: "100 W'lık ampul 10 saat yanarsa 1 kWh harcar." }
          ] },
        { tip: "ornek", baslik: "Merdiven çıkmak", durum: "50 kg'lık öğrenci 4 m yüksekliğe merdivenle 10 s'de çıkıyor (g = 10 m/s²). Ortalama gücü kaç W?",
          adimlar: ["Yapılan iş yerçekimine karşı: W = m · g · h = 50 · 10 · 4 = 2000 J.", "P = W / t = 2000 / 10 = 200 W."],
          sonuc: "P = 200 W. Aynı merdiveni 5 s'de çıksa gücü 400 W olurdu." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Power is the rate of doing work.*", metin: "Gücün tanımı: işin zamana oranı." },
            { ikon: "✍️", baslik: "*The power is 200 W because 2000 J of work is done in 10 s.*", metin: "Sonucu iş ve süreyle birlikte yaz." }
          ] }
      ]
    },
    {
      baslik: "Sabit hızda güç: P = F·v",
      kisa: "Sabit hızla giden cismin gücü kuvvet çarpı hızdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P", alt: "güç" }, "=", { t: "W / t", alt: "F·x / t" }, "=", { t: "F", alt: "kuvvet (N)" }, "×", { t: "v", alt: "hız (m/s)" }
          ], aciklama: "Çünkü W = F · x ve x / t = v. Sınavda böyle yaz: *At constant speed the power is the product of the force and the speed.*" },
        { tip: "ornek", baslik: "Kutuyu sabit hızla çekmek", durum: "Bir işçi kutuyu 500 N'luk kuvvetle 2 m/s sabit hızla 10 s boyunca çekiyor. Gücü kaç W?",
          adimlar: ["Yol: x = v · t = 2 · 10 = 20 m.", "İş: W = F · x = 500 · 20 = 10 000 J. Güç: P = W / t = 10 000 / 10 = 1000 W.", "Kısa yol: P = F · v = 500 · 2 = 1000 W. İki yol aynı sonucu verir."],
          sonuc: "P = 1000 W = 1 kW." },
        { tip: "tuzak", metin: "A kişisi 3 s'de 600 J iş yapıyor (P = 200 W). B kişisi 10 s'de 1000 J iş yapıyor (P = 100 W).", yanlis: "B daha çok iş yaptığı için daha güçlüdür.", dogru: "Güçlü olan, işi ==daha hızlı== yapandır. B'nin işi büyük ama gücü küçüktür." },
        { tip: "ornek", baslik: "Depoda iki işçi", durum: "Serkan 40 N'luk yatay kuvvetle kutuyu 20 m, Sabri 20 N'luk yatay kuvvetle kutuyu 16 m çekiyor; ikisi aynı anda başlayıp aynı anda bitiriyor (sürtünme ihmal). Serkan 100 W güç kullandıysa Sabri'nin gücü kaç W?",
          adimlar: ["Serkan'ın işi: 40 · 20 = 800 J. Süre: t = W / P = 800 / 100 = 8 s.", "Sabri'nin işi: 20 · 16 = 320 J, aynı 8 s'de yapıldı.", "Sabri'nin gücü: P = 320 / 8 = 40 W."],
          sonuc: "40 W. Sınavda böyle yaz: *The engine is more powerful because it does the same work in less time.* *Power equals force times speed.*" }
      ]
    },
    {
      baslik: "Güç grafiği: iş–zaman",
      kisa: "İş–zaman grafiğinin eğimi gücü verir; dik olan daha güçlüdür.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Güç", alt: "P (W)" }, "=", { t: "eğim", alt: "ΔW / Δt" }
          ], aciklama: "W–t grafiğinde doğrunun eğimi güçtür. Doğru ne kadar dikse güç o kadar büyük." },
        { tip: "grafik", baslik: "İki motorun iş–zaman grafiği", xlabel: "Zaman t (s)", ylabel: "İş W (J)", xmax: 10, ymax: 10,
          xticks: [{ v: 5, label: "5 s" }, { v: 10, label: "10 s" }], yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "la", tip: "cizgi", renk: 0, from: [0, 0], to: [10, 10], etiket: "A" },
            { id: "lb", tip: "cizgi", renk: 2, from: [0, 0], to: [10, 5], etiket: "B", gizli: true },
            { id: "pa", tip: "nokta", x: 10, y: 10, etiket: "100 J", gizli: true },
            { id: "pb", tip: "nokta", x: 10, y: 5, etiket: "50 J", gizli: true },
            { id: "h", tip: "cizgi", renk: 1, kesik: true, from: [0, 5], to: [10, 5], gizli: true },
            { id: "qa", tip: "nokta", x: 5, y: 5, etiket: "5 s", gizli: true }
          ],
          durumlar: [
            { metin: "Motor A: 10 s'de 100 J. Eğim = 100 / 10 = ==10 W==.", goster: ["la"] },
            { metin: "Motor B: 10 s'de 50 J. Eğim = 50 / 10 = ==5 W==. A'nın doğrusu daha diktir.", goster: ["lb"] },
            { metin: "10. saniyede A toplam 100 J, B toplam 50 J iş yapmış.", goster: ["pa", "pb"] },
            { metin: "Aynı 50 J'lük işi A 5 s'de, B 10 s'de bitiriyor: A, B'nin ==2 katı== güçlü.", gizle: ["pa"], goster: ["h", "qa"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The slope of the work–time graph gives the power.*", metin: "Grafik sorusunun ilk cümlesi." },
            { ikon: "✍️", baslik: "*A is more powerful than B because its graph is steeper.*", metin: "Karşılaştırmayı eğime bağla." }
          ] }
      ]
    },
    {
      baslik: "*Efficiency*: verim (ek bilgi)",
      kisa: "Verim, verilen enerjinin ne kadarının işe yaradığını gösterir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Verim (η)" }, "=", { t: "yararlı enerji", alt: "ya da yararlı güç" }, "÷", { t: "verilen enerji", alt: "ya da verilen güç" }, "×", { t: "100", alt: "yüzde (%)" }
          ], aciklama: "Verilen enerji = yararlı enerji + kayıp enerji (çoğunlukla ısı). Kayıp yok olmaz." },
        { tip: "grafik", baslik: "Basit bir ampulün enerji dağılımı (sayılar basitleştirildi)", xlabel: "enerji türü", ylabel: "Enerji (J)", xmax: 8, ymax: 11,
          xticks: [{ v: 1.5, label: "Verilen" }, { v: 4, label: "Yararlı (ışık)" }, { v: 6.5, label: "Kayıp (ısı)" }], yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "v", tip: "alan", renk: 0, noktalar: [[1, 0], [2, 0], [2, 10], [1, 10]] },
            { id: "y", tip: "alan", renk: 2, noktalar: [[3.5, 0], [4.5, 0], [4.5, 0], [3.5, 0]], gizli: true },
            { id: "k", tip: "alan", renk: 3, noktalar: [[6, 0], [7, 0], [7, 0], [6, 0]], gizli: true },
            { id: "tv", tip: "yazi", x: 1.5, y: 10.4, metin: "100 J" },
            { id: "ty", tip: "yazi", x: 4, y: 0.4, metin: "0 J", gizli: true },
            { id: "tk", tip: "yazi", x: 6.5, y: 0.4, metin: "0 J", gizli: true },
            { id: "eta", tip: "yazi", x: 4, y: 8, metin: "η = %20", gizli: true }
          ],
          durumlar: [
            { metin: "Ampule 100 J elektrik enerjisi veriliyor." },
            { metin: "Bunun yalnızca 20 J'ü ışığa dönüşüyor: yararlı enerji.", goster: ["y", "ty"], set: { y: { noktalar: [[3.5, 0], [4.5, 0], [4.5, 2], [3.5, 2]] }, ty: { y: 2.4, metin: "20 J" } } },
            { metin: "Kalan 80 J ısıya gidiyor: kayıp enerji. 20 + 80 = 100 J.", goster: ["k", "tk"], set: { k: { noktalar: [[6, 0], [7, 0], [7, 8], [6, 8]] }, tk: { y: 8.4, metin: "80 J" } } },
            { metin: "Verim = 20 / 100 × 100 = ==%20==.", goster: ["eta"] },
            { metin: "Daha iyi bir ampul 60 J ışık, 40 J ısı verirse verim ==%60== olur.", set: { y: { noktalar: [[3.5, 0], [4.5, 0], [4.5, 6], [3.5, 6]] }, ty: { y: 6.4, metin: "60 J" }, k: { noktalar: [[6, 0], [7, 0], [7, 4], [6, 4]] }, tk: { y: 4.4, metin: "40 J" }, eta: { y: 8.4, metin: "η = %60" } } }
          ] },
        { tip: "tuzak", metin: "Motor 500 W elektrik alıyor, 400 W mekanik güç veriyor. Verim = 400 / 500 = %80. Kalan 100 W ısıdır.", yanlis: "Verim %100'ü geçebilir ya da kayıp enerji yok olur.", dogru: "Verim her zaman %100'den küçüktür (ideal durumda eşittir); kayıp enerji ısıya dönüşür, yok olmaz." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The efficiency is the ratio of useful energy output to total energy input.*", metin: "Verimin tanımı." },
            { ikon: "✍️", baslik: "*The rest of the energy is wasted as heat.*", metin: "Kayıp enerjiyi adlandır." }
          ] }
      ]
    },
    {
      baslik: "Güç ve verim birlikte: vinç ve kWh",
      kisa: "Önce yararlı gücü, sonra verimi, en son enerjiyi (kWh) hesapla.",
      bloklar: [
        { tip: "ornek", baslik: "Vinç", durum: "Bir vinç motoru 200 kg'lık yükü 10 s'de 5 m yukarı kaldırıyor. Motor 1250 W elektrik çekiyor (g = 10 m/s²). Verim kaç?",
          adimlar: ["Yararlı iş: W = m · g · h = 200 · 10 · 5 = 10 000 J.", "Yararlı güç: P = W / t = 10 000 / 10 = 1000 W.", "Verim = 1000 / 1250 × 100 = %80."],
          sonuc: "Verim %80; 250 W ısı olarak kaybolur." },
        { tip: "tablo", baslik: "Birimler", head: ["Büyüklük", "Birim", "Eşdeğer"], rows: [
            ["Enerji, iş", "joule (J)", "1 J = 1 N · m"],
            ["Güç", "watt (W)", "1 W = 1 J/s; 1 kW = 1000 W"],
            ["Enerji (fatura)", "kilowatt-saat (kWh)", "1 kWh = 3,6 × 10⁶ J"],
            ["Verim", "birimsiz (%)", "0 ile %100 arası"]
          ], vurgu: 2 },
        { tip: "ornek", baslik: "Elektrik enerjisi", durum: "2 kW'lık elektrikli ısıtıcı 3 saat çalışıyor. Harcadığı enerji kaç kWh ve kaç J?",
          adimlar: ["E = P · t = 2 kW · 3 h = 6 kWh.", "1 kWh = 3,6 × 10⁶ J olduğundan E = 6 · 3,6 × 10⁶ = 21,6 × 10⁶ J."],
          sonuc: "6 kWh = 2,16 × 10⁷ J." },
        { tip: "ornek", baslik: "Aylık elektrik tüketimi", durum: "Bir evde saç kurutma makinesi (1800 W) ayda 3 saat, fırın (3000 W) 15 saat, çamaşır makinesi (ortalama 500 W) 20 saat çalışıyor. Toplam enerji kaç kWh? kWh fiyatı 15 TL ise fatura ne olur?",
          adimlar: ["Kurutma: 1,8 kW · 3 h = 5,4 kWh. Fırın: 3 kW · 15 h = 45 kWh. Çamaşır makinesi: 0,5 kW · 20 h = 10 kWh.", "Toplam: 5,4 + 45 + 10 = 60,4 kWh.", "Fatura: 60,4 · 15 = 906 TL."],
          sonuc: "60,4 kWh ve 906 TL. Sınavda böyle yaz: *The efficiency of the motor is 80%.* *The kilowatt-hour is a unit of energy, not of power.*" }
      ]
    },
    {
      baslik: "Enerji kaynakları ve tasarruf",
      kisa: "Yenilenebilir kaynaklar tükenmez; tasarruf hem bütçeyi hem çevreyi korur.",
      bloklar: [
        { tip: "tablo", baslik: "Kaynakların sınıflandırılması", head: ["Yenilenebilir (*renewable*)", "Yenilenemez (*non-renewable*)"], rows: [
            ["Güneş (*solar*), rüzgâr (*wind*)", "Kömür (*coal*)"],
            ["Hidroelektrik (*hydropower*), jeotermal (*geothermal*)", "Petrol (*oil*), doğal gaz (*natural gas*)"],
            ["Biyokütle (*biomass*), gelgit ve dalga (*tidal and wave*), hidrojen", "Nükleer (uranyum fisyonu; karbonsuz ama yakıtı sınırlı, atığı radyoaktif)"]
          ], not: "Yenilenemez kaynakların oluşumu, tüketiminden çok daha yavaştır. 1997'de imzalanan ==Kyoto Protokolü== sera gazı salımını azaltmayı hedefler." },
        { tip: "ikili", sol: { ikon: "♻️", baslik: "Yenilenebilir", maddeler: ["Sürdürülebilir", "Çevreyi az kirletir, dışa bağımlılığı azaltır"] },
          sag: { ikon: "⛽", baslik: "Yenilenemez", maddeler: ["Tüketim oluşumdan hızlı", "Depolaması kolay, hava koşullarından bağımsız"] },
          oyun: [
            { metin: "Kullanım hızı, oluşum hızından çok daha fazla.", cevap: "sag", neden: "Fosil yakıtlar milyonlarca yılda oluştu, hızla tükeniyor." },
            { metin: "Sera etkisini büyük ölçüde artırmaz, hava kirletmez.", cevap: "sol", neden: "Güneş ve rüzgârda yakıt yanmaz." },
            { metin: "Dışa bağımlılığı azaltır.", cevap: "sol", neden: "Yerli güneş, rüzgâr ve su kaynakları ithalatı azaltır." },
            { metin: "Hava koşullarından etkilenmez, kolay depolanır.", cevap: "sag", neden: "Kömür ve petrol stoklanır; güneş ve rüzgâr havaya bağlıdır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🔌", baslik: "Hayalet cihaz (*vampire power*)", metin: "Bekleme modundaki TV, uyku modundaki bilgisayar, prizde duran şarj cihazı sessizce enerji harcar; kullanılmayınca fişten çek." },
            { ikon: "🏷️", baslik: "Enerji etiketi", metin: "A'dan G'ye gidildikçe verim düşer, tüketim artar. Koyu yeşil en az enerji tüketimi demektir." },
            { ikon: "💡", baslik: "Verimli lamba", metin: "Akkor lamba enerjisinin çoğunu ısı olarak kaybeder; aynı parlaklık için 50 W akkor yerine 6 W LED yeterlidir." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Power*: P = W / t = E / t. Birimi watt, 1 W = 1 J/s; 1 kW = 1000 W.",
            "Sabit hızda P = F · v.",
            "Aynı işi kısa sürede yapan daha güçlüdür; çok iş yapan güçlü demek değildir.",
            "W–t grafiğinde eğim gücü verir; dik doğru daha güçlüdür.",
            "*Efficiency*: η = yararlı / verilen × 100; her zaman %100'den küçüktür.",
            "Verilen = yararlı + kayıp; kayıp çoğunlukla ısıdır ve yok olmaz.",
            "kWh bir enerji birimidir: 1 kWh = 3,6 × 10⁶ J; E = P · t.",
            "Yenilenebilir kaynaklar (güneş, rüzgâr, hidroelektrik) tükenmez; fosil yakıtlar ve uranyum sınırlıdır. Hayalet cihazı fişten çek, A sınıfı etiket ve LED seç.",
            "Yazarken birimi (W, J, %) ve sonuç cümlesini unutma."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A forklift lifts a 5-ton load to a height of 3 m in 20 s. Neglect friction and take g = 10 m/s². What is the power of the forklift?",
      opts: ["0.75 kW", "7.5 kW", "75 kW", "750 kW"], a: 1,
      why: "5 ton = 5000 kg: W = m · g · h = 5000 · 10 · 3 = 150 000 J; P = W / t = 150 000 / 20 = 7500 W = 7,5 kW. 75 kW cevabı birim çevirmede ondalık hatasıdır; 0,75 kW da tersine bir kayma." },
    { q: "The graph shows the work done by two machines X and Y against time. Which statement is correct?",
      fig: { type: "graph", xlabel: "t (s)", ylabel: "W (J)", xmax: 11, ymax: 11, lines: [{ from: [0, 0], to: [5, 10], label: "X" }, { from: [0, 0], to: [10, 10], label: "Y" }], xticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }], yticks: [{ v: 10, label: "10" }], caption: "W–t graph" },
      opts: ["X is twice as powerful as Y.", "Y is twice as powerful as X.", "Their powers are equal because both do 10 J of work.", "Y is more powerful because it works for a longer time."], a: 0,
      why: "Eğim güçtür: P_X = 10 / 5 = 2 W, P_Y = 10 / 10 = 1 W. İkisi de 10 J iş yaptı ama X bunu yarı sürede yaptı. Eşit güç diyen şık, işi gücün yerine koyar." },
    { q: "A motor takes 800 W of electrical power and delivers 600 W of mechanical power. What is the efficiency of the motor?",
      opts: ["25%", "60%", "133%", "75%"], a: 3,
      why: "Verim = yararlı / verilen × 100 = 600 / 800 × 100 = %75. %25 kayıp oranıdır; %133 ise oranı tersine çevirmektir (verim 100'ü geçemez)." },
    { q: "A motorized cart is pulled along a level road by a horizontal rope. The rope exerts a constant force of 250 N and the cart moves at a constant velocity of 5.0 m/s. What is the power delivered by the rope to the cart?",
      opts: ["50 W", "1250 W", "255 W", "245 W"], a: 1,
      why: "Sabit hızda P = F · v = 250 · 5 = 1250 W. 50 W, F / v işlemidir; 255 ve 245 W kuvvet ile hızı toplayıp çıkarmaktır." },
    { q: "The table gives the power and running time of three appliances. Which one uses the most energy?",
      fig: { type: "table", head: ["Appliance", "Power", "Time"], rows: [["Hair dryer", "2 kW", "0.5 h"], ["Lamp", "100 W", "10 h"], ["Iron", "1 kW", "2 h"]], caption: "Power and time of the appliances" },
      opts: ["Hair dryer", "Lamp", "Iron", "All use the same energy"], a: 2,
      why: "E = P · t: kurutma 2 · 0,5 = 1 kWh; lamba 0,1 · 10 = 1 kWh; ütü 1 · 2 = 2 kWh. En büyük güçlü cihaz (kurutma makinesi) çekicidir ama süresi kısadır." }
  ]
};
