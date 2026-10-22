/* Kitora not defteri · ph201 · 2.1 İş (Work)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 2) + MEB FİZ.10 Enerji. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph201",
  amac: "Bu defter *work* yani işi anlatıyor: bir kuvvetin cismi yol aldırarak ona enerji aktarması. İşi formülle ve F–x grafiğinin altındaki alanla hesaplamayı, işin ne zaman pozitif, sıfır ya da negatif olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "*Work*: kuvvet yol aldırınca iş yapılır",
      kisa: "Kuvvet, cismi kendi doğrultusunda yer değiştirtirse iş yapar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Work* (W)", alt: "iş, joule (J)" }, "=",
            { t: "F", alt: "kuvvet, newton (N)" }, "×",
            { t: "x", alt: "yer değiştirme, metre (m)" }
          ], aciklama: "Kuvvet ile yer değiştirme aynı doğrultudaysa. ==1 J = 1 N · 1 m==. Bu defterde g = 10 m/s² alınır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "💪", terim: "Work", tr: "iş", tanim: "Kuvvetin, cismi kendi doğrultusunda yer değiştirtmesiyle yaptığı enerji aktarımı. ==Skaler== bir niceliktir.", ornek: "Kantinde sandalyeyi 10 N'luk kuvvetle 3 m itersen W = 30 J." },
            { ikon: "🍎", terim: "Joule", tr: "joule (J)", tanim: "İşin ve enerjinin birimi. 1 N'luk kuvvet cismi 1 m ilerletirse 1 J iş yapar.", ornek: "100 g'lık bir elmayı 1 m yukarı kaldırmak yaklaşık 1 J." },
            { ikon: "📏", terim: "Displacement", tr: "yer değiştirme", tanim: "Başlangıç ile bitiş noktası arasındaki yönlü düz mesafe; toplam yol değildir.", ornek: "Aynı noktaya geri dönersen yer değiştirmen 0'dır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The work done by the force is W = F · x.*", metin: "Sonra sayıları yerine koy: W = 10 · 3 = 30 J." },
            { ikon: "✍️", baslik: "*Work is measured in joules.*", metin: "Birimi mutlaka yaz; sınavda puan kırılır." },
            { ikon: "✍️", baslik: "*There is no displacement, so no work is done.*", metin: "Yer değiştirme yoksa iş de yok." }
          ] }
      ]
    },
    {
      baslik: "İşin işareti: kuvvet ile hareket arasındaki açı",
      kisa: "Kuvvet harekete aynı yönde ise iş pozitif, dik ise sıfır, zıt ise negatiftir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "W" }, "=", { t: "F", alt: "kuvvet" }, "×", { t: "x", alt: "yer değiştirme" }, "×", { t: "cos θ", alt: "θ: kuvvet ile x arasındaki açı" }
          ], aciklama: "Kuvvet harekete paralel değilse yalnızca ==harekete paralel bileşen== iş yapar." },
        { tip: "tablo", head: ["Açı θ", "cos θ", "İş", "Günlük örnek"], rows: [
            ["0°", "1", "Pozitif: W = F·x", "Sırayı ittiğin yönde sırayı kaydırırsın"],
            ["60°", "0,5", "Pozitif: W = ½·F·x", "Valizi eğik saptan çekersin"],
            ["90°", "0", "Sıfır", "Çantayı yatay koridorda taşırken kaldırma kuvvetin"],
            ["180°", "−1", "Negatif: W = −F·x", "Sürtünme kuvveti ya da fren kuvveti"]
          ], not: "Sınavda böyle yaz: *The friction force does negative work because it acts opposite to the displacement.*" },
        { tip: "ikili", sol: { ikon: "✅", baslik: "İş yapılır (W ≠ 0)", maddeler: ["Kuvvetin harekete paralel bileşeni vardır", "Yer değiştirme sıfırdan farklıdır"] },
          sag: { ikon: "🚫", baslik: "İş yapılmaz (W = 0)", maddeler: ["Yer değiştirme yoktur", "Kuvvet harekete diktir (θ = 90°)"] },
          oyun: [
            { metin: "Sırayı 2 m itip kaydırıyorsun.", cevap: "sol", neden: "Kuvvet ve hareket aynı yönde: θ = 0°, W = F·x > 0." },
            { metin: "Duvarı var gücünle itiyorsun ama duvar kıpırdamıyor.", cevap: "sag", neden: "x = 0 olduğu için W = 0; yorulmak iş değildir." },
            { metin: "Çantayı yatay koridorda sabit hızla taşıyorsun.", cevap: "sag", neden: "Kaldırma kuvveti yukarı, hareket yatay: θ = 90°, cos 90° = 0." },
            { metin: "Kitabı yerden 1 m yukarı kaldırıyorsun.", cevap: "sol", neden: "Kuvvet yukarı, yer değiştirme yukarı: W > 0." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The force is perpendicular to the displacement, so W = 0.*", metin: "Dik kuvvetin işi sıfırdır; nedenini yaz." },
            { ikon: "✍️", baslik: "*The angle between F and x is θ.*", metin: "Açıyı tanımlamadan cos θ kullanma." }
          ] }
      ]
    },
    {
      baslik: "F–x grafiği: alan = iş",
      kisa: "F–x grafiğinde eğri ile x ekseni arasındaki alan işi verir.",
      bloklar: [
        { tip: "grafik", baslik: "Kuvvet–yer değiştirme grafiğinin altındaki alan", xlabel: "Yer değiştirme x (m)", ylabel: "Kuvvet F (N)", xmax: 6, ymax: 6,
          xticks: [{ v: 2, label: "2" }, { v: 5, label: "5" }], yticks: [{ v: 4, label: "4" }],
          ogeler: [
            { id: "f1", tip: "cizgi", renk: 0, from: [0, 4], to: [5, 4], etiket: "F" },
            { id: "a1", tip: "alan", renk: 1, noktalar: [[0, 0], [5, 0], [5, 4], [0, 4]], gizli: true },
            { id: "t1", tip: "yazi", x: 2.5, y: 2, metin: "4 × 5 = 20 J", gizli: true },
            { id: "fr", tip: "cizgi", renk: 0, from: [0, 0], to: [5, 4], etiket: "F", gizli: true },
            { id: "a2", tip: "alan", renk: 2, noktalar: [[0, 0], [5, 0], [5, 4], [0, 0]], gizli: true },
            { id: "t2", tip: "yazi", x: 3.9, y: 1.1, metin: "½ · 5 · 4 = 10 J", gizli: true },
            { id: "g1", tip: "cizgi", renk: 0, from: [0, 0], to: [2, 4], gizli: true },
            { id: "g2", tip: "cizgi", renk: 0, from: [2, 4], to: [5, 4], etiket: "F", gizli: true },
            { id: "tri", tip: "alan", renk: 2, noktalar: [[0, 0], [2, 0], [2, 4], [0, 0]], gizli: true },
            { id: "rec", tip: "alan", renk: 1, noktalar: [[2, 0], [5, 0], [5, 4], [2, 4]], gizli: true },
            { id: "tt", tip: "yazi", x: 1.55, y: 0.9, metin: "4 J", gizli: true },
            { id: "tr", tip: "yazi", x: 3.5, y: 2, metin: "12 J", gizli: true }
          ],
          durumlar: [
            { metin: "Sabit kuvvet: F = 4 N, cisim 5 m yol alıyor.", goster: ["f1"] },
            { metin: "Çizginin altı bir dikdörtgen: W = F · x = 4 · 5 = ==20 J==.", goster: ["a1", "t1"] },
            { metin: "Kuvvet değişirse formül yetmez; ama grafik yine işe yarar. Burada kuvvet 0'dan 4 N'a doğrusal artıyor (gerilen yay gibi).", gizle: ["f1", "a1", "t1"], goster: ["fr"] },
            { metin: "Altında üçgen var: W = ½ · taban · yükseklik = ½ · 5 · 4 = ==10 J==.", goster: ["a2", "t2"] },
            { metin: "Karma durum: kuvvet ilk 2 m'de artıyor, sonra 4 N'da sabit kalıyor.", gizle: ["fr", "a2", "t2"], goster: ["g1", "g2"] },
            { metin: "Üçgen (½ · 2 · 4 = 4 J) + dikdörtgen (3 · 4 = 12 J) = ==16 J==.", goster: ["tri", "rec", "tt", "tr"] }
          ] },
        { tip: "ornek", baslik: "Gerilen yay", durum: "Yay sabiti k = 100 N/m olan yay, 0,4 m uzatılıyor. F = k · x kuvvetiyle çekiliyor. Yapılan iş kaç J?",
          adimlar: ["Son kuvvet: F = k · x = 100 · 0,4 = 40 N.", "F–x grafiği 0'dan 40 N'a giden bir doğrudur; altındaki alan üçgendir.", "W = ½ · taban · yükseklik = ½ · 0,4 · 40 = 8 J."],
          sonuc: "W = 8 J. Aynı sonuç W = ½ · k · x² formülünden de çıkar: ½ · 100 · 0,16 = 8 J." },
        { tip: "tuzak", metin: "Grafiğin türü sana neyin işe yaradığını söyler: F–x grafiğinde ==alan== iş demektir.", yanlis: "F–x grafiğinin eğimini hesaplayıp işi buldum.", dogru: "İş = eğri ile x ekseni arasındaki alan. Eksenin altında kalan alan negatif iştir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The area under the graph is equal to the work done.*", metin: "Grafik sorusunda ilk cümlen bu olsun." },
            { ikon: "✍️", baslik: "*The area is a triangle, so W = ½ · base · height.*", metin: "Şekli adlandır, sonra alanı yaz." }
          ] }
      ]
    },
    {
      baslik: "Yerçekimine karşı yapılan iş: W = m·g·h",
      kisa: "Cismi h kadar kaldırmak için yapılan iş m·g·h'dir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "W", alt: "iş (J)" }, "=", { t: "m · g", alt: "ağırlık (N)" }, "×", { t: "h", alt: "yükseklik farkı (m)" }
          ], aciklama: "Cisim sabit hızla kaldırılırsa kaldıran kuvvet ağırlığa eşittir: F = m·g." },
        { tip: "ornek", baslik: "Kutuyu rafa kaldırmak", durum: "3 kg'lık bir kutu sabit hızla 2 m yukarı kaldırılıyor (g = 10 m/s²). Kaldıran kuvvetin ve yerçekiminin işi kaç J?",
          adimlar: ["Sabit hız: kaldıran kuvvet ağırlığa eşit, F = m · g = 3 · 10 = 30 N.", "Kaldıran kuvvetin işi: W = F · h = 30 · 2 = 60 J (pozitif).", "Yerçekimi aşağı, hareket yukarı: W = −30 · 2 = −60 J (negatif)."],
          sonuc: "Kaldıran kuvvet +60 J, yerçekimi −60 J yapar; net iş 0 olduğu için kinetik enerji değişmez." },
        { tip: "tablo", baslik: "Aynı kutuyu iki yoldan çıkarmak (sürtünmesiz)", head: ["Yol", "Gereken kuvvet", "Yol uzunluğu", "İş"], rows: [
            ["Dik kaldır (2 m)", "30 N", "2 m", "30 · 2 = 60 J"],
            ["4 m'lik rampadan çıkar", "15 N", "4 m", "15 · 4 = 60 J"]
          ], vurgu: 1, not: "Rampa kuvvetten kazandırır, işten kazandırmaz. Sınavda böyle yaz: *The ramp reduces the force but the work done is the same.*" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The work done against gravity is W = m · g · h.*", metin: "m kg, h metre olmalı." },
            { ikon: "✍️", baslik: "*A machine can reduce the force but not the work.*", metin: "Kuvvetten kazanç yoldan kayıp demektir." }
          ] }
      ]
    },
    {
      baslik: "Net iş ve iş–enerji ilişkisi",
      kisa: "Net iş, cismin kinetik enerjisindeki değişime eşittir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "W", alt: "net iş" }, "=", { t: "F", alt: "net kuvvet" }, "×", { t: "x" }, "=", { t: "ΔKE", alt: "KE₂ − KE₁" }, "=", { t: "½ m v₂² − ½ m v₁²" }
          ], aciklama: "*Work–energy theorem*. Net iş pozitifse cisim hızlanır, negatifse yavaşlar. Kinetik enerjinin ayrıntısı bir sonraki defterde." },
        { tip: "ornek", baslik: "Sürtünmeli çekiş", durum: "Durgun 4 kg'lık bir kutu 15 N'luk yatay kuvvetle çekiliyor. Sürtünme 3 N. Kutu 6 m ilerleyince hızı kaç m/s olur?",
          adimlar: ["Çekme kuvvetinin işi: W₁ = 15 · 6 = 90 J.", "Sürtünmenin işi: W₂ = −3 · 6 = −18 J.", "Net iş: W = 90 − 18 = 72 J.", "Durgundan başladı: 72 = ½ · 4 · v² = 2v², yani v² = 36.", "Kontrol: F_net = 12 N, a = 3 m/s², v² = 2 · a · x = 2 · 3 · 6 = 36 ✓."],
          sonuc: "v = 6 m/s." },
        { tip: "tuzak", metin: "Birden fazla kuvvet varsa her kuvvetin işini ==işaretiyle== bul, sonra topla.", yanlis: "W_net = 90 + 18 = 108 J.", dogru: "Sürtünme harekete zıt olduğu için işi negatiftir: W_net = 90 − 18 = 72 J." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The net work is equal to the change in kinetic energy.*", metin: "İş–enerji ilişkisinin tek cümlesi." },
            { ikon: "✍️", baslik: "*The speed increases because the net work is positive.*", metin: "Sonucu yorumla: hızlanma ya da yavaşlama." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Work*: W = F · x (kuvvet harekete paralelse). Birim: joule, 1 J = 1 N · m.",
            "Açılı kuvvet: W = F · x · cos θ. Aynı yön pozitif, dik sıfır, zıt yön negatif.",
            "Yer değiştirme yoksa ya da kuvvet harekete dikse iş sıfırdır; yorulmak iş değildir.",
            "F–x grafiğinde eğri altındaki alan işi verir; eksen altı negatiftir.",
            "Yay: F = k · x, W = ½ · k · x².",
            "Yerçekimine karşı iş: W = m · g · h; rampa kuvveti azaltır, işi azaltmaz.",
            "Net iş = tüm işlerin işaretli toplamı = ΔKE (*work–energy theorem*).",
            "Sürtünmenin işi negatiftir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir valiz, yatayla 60° açı yapan saptan 40 N'luk kuvvetle 10 m çekiliyor (cos 60° = 0,5). Kuvvetin yaptığı iş kaç J'dür?",
      opts: ["0 J", "200 J", "346 J", "400 J"], a: 1,
      why: "W = F · x · cos θ = 40 · 10 · 0,5 = 200 J. 400 J cevabı cos θ'yı unutmaktır; 0 J ise yalnızca θ = 90° için doğru olurdu." },
    { q: "Grafik, bir cisme uygulanan kuvvetin yer değiştirmeye göre değişimini gösteriyor. 0–6 m arasında kuvvetin yaptığı iş kaç J'dür?",
      fig: { type: "graph", xlabel: "x (m)", ylabel: "F (N)", xmax: 7, ymax: 8, lines: [{ from: [0, 0], to: [3, 6] }, { from: [3, 6], to: [6, 6], label: "F" }], xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }], yticks: [{ v: 6, label: "6" }], caption: "F–x grafiği" },
      opts: ["27 J", "36 J", "18 J", "9 J"], a: 0,
      why: "İş = alan = üçgen + dikdörtgen = ½ · 3 · 6 + 3 · 6 = 9 + 18 = 27 J. 36 J, en büyük kuvveti bütün yolla çarpmaktır (6 · 6); 9 J yalnızca üçgeni sayar." },
    { q: "Bir öğrenci 50 N ağırlığındaki çantayı yatay koridorda sabit hızla 20 m taşıyor. Öğrencinin çantaya uyguladığı kuvvetin yaptığı iş kaç J'dür?",
      opts: ["1000 J", "500 J", "70 J", "0 J"], a: 3,
      why: "Öğrencinin kuvveti yukarı (50 N), yer değiştirme yatay; aradaki açı 90° ve cos 90° = 0 olduğu için W = 0. 1000 J cevabı, kuvvet ile yolu açıya bakmadan çarpmaktır." },
    { q: "Durgun 2 kg'lık bir araba, yatay yolda 4 N'luk net kuvvetle 9 m itiliyor. Arabanın son hızı kaç m/s olur?",
      opts: ["3 m/s", "4 m/s", "6 m/s", "36 m/s"], a: 2,
      why: "Net iş W = 4 · 9 = 36 J. W = ½ · m · v² olduğundan 36 = ½ · 2 · v² = v², yani v = 6 m/s. 36 m/s, karekökü almayı unutmaktır." },
    { q: "Tablo, 4 m yol alan bir kutuya etki eden kuvvetleri gösteriyor. Net iş kaç J'dür?",
      fig: { type: "table", head: ["Kuvvet", "Büyüklük", "Hareketle açı"], rows: [["Çekme", "10 N", "0°"], ["Sürtünme", "4 N", "180°"], ["Ağırlık", "20 N", "90°"]], caption: "Kutuya etki eden kuvvetler" },
      opts: ["40 J", "24 J", "56 J", "0 J"], a: 1,
      why: "Çekme: +10 · 4 = 40 J. Sürtünme: −4 · 4 = −16 J. Ağırlık 90° olduğu için 0. Toplam 24 J. 56 J cevabı sürtünmeyi pozitif saymaktır." }
  ]
};
