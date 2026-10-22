/* Kitora not defteri · ph202 · 2.2 Kinetik ve Potansiyel Enerji (Kinetic and Potential Energy)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 2) + MEB FİZ.10 Enerji. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph202",
  amac: "Bu defter enerji türlerini anlatıyor: hareketin enerjisi olan *kinetic energy*, konumun ve şeklin enerjisi olan *potential energy*. KE = ½mv², PE = mgh ve yay enerjisini hesaplamayı, mekanik enerjiyi bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*Energy*: iş yapabilme yeteneği",
      kisa: "Enerji iş yapabilme yeteneğidir; birimi joule'dür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Energy", tr: "enerji", tanim: "İş yapabilme yeteneği. Birimi işle aynıdır: joule (J). Skalerdir.", ornek: "Kahvaltıdaki kimyasal enerji sayesinde okula yürürsün." },
            { ikon: "🏃", terim: "Kinetic energy", tr: "kinetik (hareket) enerjisi", tanim: "Bir cismin hareketinden gelen enerji. Duran cismin KE'si 0'dır.", ornek: "Koşan öğrencinin, giden bisikletin enerjisi." },
            { ikon: "📚", terim: "Potential energy", tr: "potansiyel (depolu) enerji", tanim: "Konumdan ya da şekilden gelen, depolanmış enerji. Çekim ve esneklik olmak üzere iki türü vardır.", ornek: "Raftaki kitap (çekim), gerilmiş ok yayı (esneklik)." },
            { ikon: "🧮", terim: "Mechanical energy", tr: "mekanik enerji", tanim: "Kinetik ve potansiyel enerjinin toplamı: E = KE + PE.", ornek: "Havadaki topun hem hızı hem yüksekliği vardır; ikisi de sayılır." }
          ] },
        { tip: "tablo", head: ["Enerji türü", "Nereden gelir?", "Örnek"], rows: [
            ["Kinetik", "Hareket", "Koşan sprinter"],
            ["Çekim potansiyeli", "Yükseklik", "Raftaki kitap"],
            ["Esneklik potansiyeli", "Gerilmiş ya da sıkışmış yay", "Gerilmiş ok yayı"],
            ["Isı (termal)", "Taneciklerin hareketi", "Sıcak çay"],
            ["Kimyasal", "Bağlarda depolu", "Yemek, pil"]
          ], not: "Kinetik ve potansiyel enerji ==mekanik== enerjidir; ısı, kimyasal ve elektrik enerjisi mekanik enerji sayılmaz." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Energy is the ability to do work.*", metin: "Enerjinin tanımı; birimi *joule*." },
            { ikon: "✍️", baslik: "*Mechanical energy is the sum of kinetic and potential energy.*", metin: "E = KE + PE yazıp sayıları yerine koy." }
          ] }
      ]
    },
    {
      baslik: "Kinetik enerji: KE = ½·m·v²",
      kisa: "Kinetik enerji kütleyle doğru, hızın karesiyle orantılıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "KE", alt: "kinetik enerji (J)" }, "=", { t: "½", alt: "" }, "×", { t: "m", alt: "kütle (kg)" }, "×", { t: "v²", alt: "hızın karesi (m/s)²" }
          ], aciklama: "Sınavda böyle yaz: *Kinetic energy is proportional to the square of the speed.* Hızı ikiye katlarsan KE dört katına çıkar." },
        { tip: "grafik", baslik: "m = 2 kg için KE–hız grafiği", xlabel: "Hız v (m/s)", ylabel: "KE (J)", xmax: 4, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 1, label: "1" }, { v: 4, label: "4" }, { v: 9, label: "9" }],
          ogeler: [
            { id: "k2", tip: "egri", renk: 0, etiket: "m = 2 kg", noktalar: [[0, 0], [1, 1], [2, 4], [3, 9]] },
            { id: "p", tip: "nokta", x: 1, y: 1, etiket: "1 J", kilavuz: true, gizli: true },
            { id: "k1", tip: "egri", renk: 2, etiket: "m = 1 kg", noktalar: [[0, 0], [1, 0.5], [2, 2], [3, 4.5]], gizli: true }
          ],
          durumlar: [
            { metin: "m = 2 kg: KE = ½ · 2 · v² = v². Eğri düz çizgi değil, ==parabol==.", goster: ["k2"] },
            { metin: "v = 1 m/s ise KE = 1 J.", goster: ["p"] },
            { metin: "Hız 2 katına çıktı (2 m/s): KE = 4 J, yani ==4 katı==.", set: { p: { x: 2, y: 4, etiket: "4 J" } } },
            { metin: "Hız 3 katına çıktı (3 m/s): KE = 9 J, yani ==9 katı==.", set: { p: { x: 3, y: 9, etiket: "9 J" } } },
            { metin: "Aynı hızda kütle yarıya inerse (1 kg) KE de yarıya iner: kütle doğru orantılıdır.", goster: ["k1"] }
          ] },
        { tip: "ornek", baslik: "Bisiklet", durum: "Bisiklet ve sürücü toplam 60 kg. Hız 5 m/s iken kinetik enerji kaç J? Hız 10 m/s olursa ne olur?",
          adimlar: ["KE = ½ · m · v² = ½ · 60 · 5² = 30 · 25 = 750 J.", "Hız 10 m/s: KE = ½ · 60 · 10² = 30 · 100 = 3000 J.", "3000 / 750 = 4: hız 2 katı, enerji 4 katı."],
          sonuc: "KE = 750 J; hız ikiye katlanınca 3000 J olur." },
        { tip: "tuzak", metin: "1 kg'lık cisim 6 m/s ile giderken KE = ½ · 1 · 36 = 18 J. 4 kg'lık cisim 2 m/s ile giderken KE = ½ · 4 · 4 = 8 J.", yanlis: "Kütlesi büyük olanın kinetik enerjisi de büyüktür.", dogru: "Hız karesiyle girdiği için hızın etkisi çoğu zaman daha büyüktür; ikisini de hesapla." }
      ]
    },
    {
      baslik: "Çekim potansiyel enerjisi: PE = m·g·h",
      kisa: "Çekim potansiyel enerjisi kütle, g ve yükseklikle doğru orantılıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "PE", alt: "çekim potansiyel enerjisi (J)" }, "=", { t: "m", alt: "kütle (kg)" }, "×", { t: "g", alt: "10 m/s²" }, "×", { t: "h", alt: "referanstan yükseklik (m)" }
          ], aciklama: "h, ==referans seviyesinden== ölçülür. Yukarı çıkarken PE artar, aşağı inerken azalır." },
        { tip: "grafik", baslik: "PE–yükseklik grafiği (g = 10 m/s²)", xlabel: "Yükseklik h (m)", ylabel: "PE (J)", xmax: 4, ymax: 9,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "l2", tip: "cizgi", renk: 0, from: [0, 0], to: [4, 8], etiket: "m = 2 kg" },
            { id: "p", tip: "nokta", x: 1, y: 2, etiket: "20 J", kilavuz: true, gizli: true },
            { id: "l4", tip: "cizgi", renk: 2, from: [0, 0], to: [2, 8], etiket: "m = 4 kg", gizli: true }
          ],
          durumlar: [
            { metin: "m = 2 kg: PE = 2 · 10 · h = 20 · h. Grafik başlangıçtan geçen bir ==doğru==.", goster: ["l2"] },
            { metin: "h = 1 m için PE = 20 J.", goster: ["p"] },
            { metin: "h = 3 m için PE = 60 J: yükseklik 3 katı, PE 3 katı (doğru orantı).", set: { p: { x: 3, y: 6, etiket: "60 J" } } },
            { metin: "Kütle 2 katına (4 kg) çıkarsa doğrunun eğimi de 2 katına çıkar.", goster: ["l4"] }
          ] },
        { tip: "tuzak", metin: "2 kg'lık kitap masada duruyor, masa zeminden 1 m yüksekte. Referansı zemin alırsan PE = 2 · 10 · 1 = 20 J; referansı masa alırsan PE = 0 J.", yanlis: "Kitabın PE'si tek bir sayıdır.", dogru: "PE referansa bağlıdır; ama ==PE farkı== (kitap yere düşerken kaybedilen 20 J) her referansta aynıdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The reference level is the ground, so h = 1 m.*", metin: "Referansı mutlaka belirt." },
            { ikon: "✍️", baslik: "*Gravitational potential energy depends on mass, height and g.*", metin: "PE = m · g · h'nin açıklaması." }
          ] }
      ]
    },
    {
      baslik: "Esneklik potansiyel enerjisi",
      kisa: "Gerilen ya da sıkışan yay, uzama miktarının karesiyle orantılı enerji depolar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "PE", alt: "esneklik enerjisi (J)" }, "=", { t: "½", alt: "" }, "×", { t: "k", alt: "yay sabiti (N/m)" }, "×", { t: "x²", alt: "uzama ya da sıkışma (m)" }
          ], aciklama: "Bu, ph201'deki F–x grafiğinin altındaki alandır: W = ½ · F · x = ½ · k · x²." },
        { tip: "ornek", baslik: "Sıkıştırılan yay", durum: "Yay sabiti k = 200 N/m olan yay 0,1 m sıkıştırılıyor. Depolanan enerji kaç J? 0,2 m sıkıştırılırsa ne olur?",
          adimlar: ["PE = ½ · k · x² = ½ · 200 · 0,1² = 100 · 0,01 = 1 J.", "x = 0,2 m: PE = ½ · 200 · 0,2² = 100 · 0,04 = 4 J.", "Sıkışma 2 katına çıktı, enerji 4 katına çıktı."],
          sonuc: "PE = 1 J; sıkışma ikiye katlanırsa 4 J olur (PE ∝ x²)." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The compressed spring stores elastic potential energy.*", metin: "Yay enerjisi için kullanılan kalıp." },
            { ikon: "✍️", baslik: "*Doubling the compression quadruples the stored energy.*", metin: "x²'ye bağlılığı bu cümleyle göster." }
          ] }
      ]
    },
    {
      baslik: "Mekanik enerji: KE + PE",
      kisa: "Mekanik enerji, kinetik ve potansiyel enerjinin toplamıdır.",
      bloklar: [
        { tip: "ornek", baslik: "Havadaki top", durum: "2 kg'lık top referans seviyesinden 5 m yukarıda ve 4 m/s hızla gidiyor (g = 10 m/s²). Mekanik enerjisi kaç J?",
          adimlar: ["KE = ½ · 2 · 4² = 16 J.", "PE = 2 · 10 · 5 = 100 J.", "E = KE + PE = 16 + 100 = 116 J."],
          sonuc: "Mekanik enerji 116 J." },
        { tip: "ikili", sol: { ikon: "🏃", baslik: "Kinetik enerji var", maddeler: ["Cisim hareket ediyor (v ≠ 0)", "Yükseklikten bağımsız"] },
          sag: { ikon: "🔋", baslik: "Yalnızca potansiyel enerji var", maddeler: ["Cisim duruyor (v = 0)", "Yükseklikte ya da gerilmiş"] },
          oyun: [
            { metin: "Yatay yolda 5 m/s ile giden bisiklet.", cevap: "sol", neden: "Hareket var, yükseklik farkı yok: yalnızca KE." },
            { metin: "Rafta duran bavul.", cevap: "sag", neden: "v = 0 olduğu için KE = 0; yalnızca PE var." },
            { metin: "Gerilmiş ok yayı, ok henüz bırakılmadı.", cevap: "sag", neden: "Hareket yok, yay şekil değiştirmiş: esneklik PE." },
            { metin: "Yatay pistte koşan sprinter.", cevap: "sol", neden: "Hız var, yükseklik değişmiyor: KE." },
            { metin: "Yukarı atılan topun en tepe noktasındaki anı (v = 0).", cevap: "sag", neden: "Tepede hız sıfır olduğundan KE = 0; enerji PE'dedir." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The mechanical energy is E = KE + PE = 16 + 100 = 116 J.*", metin: "Önce iki enerjiyi ayrı hesapla, sonra topla." },
            { ikon: "✍️", baslik: "*At the highest point the speed is zero, so KE = 0.*", metin: "Tepe noktasında KE sıfırdır." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Energy* iş yapabilme yeteneğidir; birimi joule (J), skalerdir.",
            "*Kinetic energy*: KE = ½ · m · v². Hız 2 katına çıkarsa KE 4 katına çıkar.",
            "*Gravitational potential energy*: PE = m · g · h; h referans seviyesinden ölçülür.",
            "PE referansa bağlıdır, ama PE farkı her referansta aynıdır.",
            "*Elastic potential energy*: PE = ½ · k · x²; sıkışma 2 katına çıkarsa enerji 4 katına çıkar.",
            "*Mechanical energy*: E = KE + PE. Isı ve kimyasal enerji mekanik değildir.",
            "Duran cismin KE'si 0'dır; en tepe noktada v = 0 ve enerji PE'dedir.",
            "Karşılaştırırken kütleye ve hızın karesine birlikte bak."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "3 kg'lık bir cisim 4 m/s hızla hareket ediyor. Kinetik enerjisi kaç J'dür?",
      opts: ["12 J", "48 J", "24 J", "6 J"], a: 2,
      why: "KE = ½ · m · v² = ½ · 3 · 16 = 24 J. 48 J cevabı ½ çarpanını unutmaktır; 12 J ise m · v hesaplamaktır." },
    { q: "Tabloda üç cismin kütlesi ve hızı verilmiştir. Hangisinin kinetik enerjisi en büyüktür?",
      fig: { type: "table", head: ["Cisim", "Kütle", "Hız"], rows: [["A", "1 kg", "6 m/s"], ["B", "4 kg", "2 m/s"], ["C", "2 kg", "4 m/s"]], caption: "Üç cismin kütle ve hızı" },
      opts: ["A", "B", "C", "Üçünün KE'si eşittir"], a: 0,
      why: "KE_A = ½ · 1 · 36 = 18 J; KE_B = ½ · 4 · 4 = 8 J; KE_C = ½ · 2 · 16 = 16 J. B en ağır olduğu için çekici ama hızı küçüktür ve hız karesiyle girer." },
    { q: "4 kg'lık bir kitap, referans olarak alınan zeminden 1,5 m yüksekteki rafta duruyor (g = 10 m/s²). Kitabın çekim potansiyel enerjisi kaç J'dür?",
      opts: ["6 J", "15 J", "40 J", "60 J"], a: 3,
      why: "PE = m · g · h = 4 · 10 · 1,5 = 60 J. 15 J cevabı kütleyi unutmaktır (10 · 1,5); 40 J yalnızca ağırlığı (m · g) verir." },
    { q: "Grafik, aynı gezegende iki cismin çekim potansiyel enerjisinin yükseklikle değişimini gösteriyor. Cisimlerin kütleleri için hangisi doğrudur?",
      fig: { type: "graph", xlabel: "h (m)", ylabel: "PE (J)", xmax: 5, ymax: 8, lines: [{ from: [0, 0], to: [4, 4], label: "A" }, { from: [0, 0], to: [2, 4], label: "B" }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }], yticks: [{ v: 4, label: "40" }], caption: "PE–h grafiği" },
      opts: ["B'nin kütlesi A'nın yarısıdır", "B'nin kütlesi A'nın 2 katıdır", "Kütleler eşittir, B daha yüksektedir", "B'nin kütlesi A'nın 4 katıdır"], a: 1,
      why: "Eğim m · g'dir. B'nin eğimi A'nın 2 katı olduğu için m_B = 2 · m_A. Aynı h'de B'nin PE'si 2 kat büyüktür; yükseklik farkı değil kütle farkıdır." },
    { q: "2 kg'lık bir top, referans seviyesinden 5 m yukarıda ve 4 m/s hızla gidiyor (g = 10 m/s²). Topun mekanik enerjisi kaç J'dür?",
      opts: ["100 J", "16 J", "116 J", "84 J"], a: 2,
      why: "KE = ½ · 2 · 16 = 16 J ve PE = 2 · 10 · 5 = 100 J; E = 116 J. 100 J cevabı hızı yok saymaktır; mekanik enerji ikisinin toplamıdır." }
  ]
};
