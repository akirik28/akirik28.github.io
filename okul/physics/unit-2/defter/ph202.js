/* Kitpath not defteri · ph202 · 2.2 Kinetik ve Potansiyel Enerji (Kinetic and Potential Energy)
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
            ["Isı (termal)", "Taneciklerin hareketi; sıcaklık farkıyla aktarılır (birimi joule, günlük hayatta kalori de)", "Sıcak çay"],
            ["Kimyasal", "Bağlarda depolu; pil kimyasal enerjiyi elektriğe çevirir", "Yemek, pil"],
            ["Nükleer", "Atom çekirdeğinden; Güneş'te füzyonla, santralde uranyum fisyonuyla", "Nükleer santral"],
            ["Işık", "Dalga olarak yayılan elektromanyetik enerji; fotonlarla taşınır", "Güneş, lamba"],
            ["Ses", "Ortamın titreşimiyle yayılır; boşlukta yayılmaz", "Hoparlör"],
            ["Elektrik", "İletkenin uçları arasındaki gerilimle serbest elektronların hareketi", "Prizdeki enerji"]
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
          ], aciklama: "h, ==referans seviyesinden== ölçülür. Yukarı çıkarken PE artar, aşağı inerken azalır. Değişim için ΔPE = m·g·Δh yazılır." },
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
        { tip: "ornek", baslik: "Derinkuyu'da kat değiştirmek",
          durum: "Her katının yüksekliği h olan sekiz katlı Derinkuyu Yeraltı Şehri'nde 4. kattaki kütlesi m olan iki turistten biri 2. kata çıkıyor, öteki 7. kata iniyor. Potansiyel enerji değişimleri nedir? Hangisi yerçekimine karşı iş yapmıştır?",
          adimlar: [
            "2. kata çıkan 2 kat yükselir: ΔPE = +2·m·g·h.",
            "7. kata inen 3 kat alçalır: ΔPE = −3·m·g·h.",
            "Yerçekimine karşı iş, yukarı çıkan turist tarafından yapılır; inenin potansiyel enerjisi azalır."
          ],
          sonuc: "+2mgh (çıkan) ve −3mgh (inen). Sınavda böyle yaz: *The reference level is the 4th floor, so the change in potential energy depends only on the height difference.* *Gravitational potential energy depends on mass, height and g.*" }
      ]
    },
    {
      baslik: "Esneklik potansiyel enerjisi",
      kisa: "Gerilen ya da sıkışan yay, uzama miktarının karesiyle orantılı enerji depolar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "PE", alt: "esneklik enerjisi (J)" }, "=", { t: "½", alt: "" }, "×", { t: "k", alt: "yay sabiti (N/m)" }, "×", { t: "x²", alt: "uzama ya da sıkışma (m)" }
          ], aciklama: "Bu, ph201'deki F–x grafiğinin altındaki alandır: W = ½ · F · x = ½ · k · x². Yay kuvveti F = k · x; k yay sabiti yayın sertliğini gösterir. Esneklik sınırı aşılırsa kalıcı şekil bozulur." },
        { tip: "ornek", baslik: "Sıkıştırılan yay", durum: "Yay sabiti k = 200 N/m olan yay 0,1 m sıkıştırılıyor. Depolanan enerji kaç J? 0,2 m sıkıştırılırsa ne olur?",
          adimlar: ["PE = ½ · k · x² = ½ · 200 · 0,1² = 100 · 0,01 = 1 J.", "x = 0,2 m: PE = ½ · 200 · 0,2² = 100 · 0,04 = 4 J.", "Sıkışma 2 katına çıktı, enerji 4 katına çıktı."],
          sonuc: "PE = 1 J; sıkışma ikiye katlanırsa 4 J olur (PE ∝ x²)." },
        { tip: "ornek", baslik: "Yaya çarpan cisim", durum: "1 kg'lık cisim yatay zeminde 6 m/s ile gelip k = 100 N/m olan yayı sıkıştırıyor (sürtünme yok). Yay en çok kaç m sıkışır?",
          adimlar: ["Başlangıç kinetik enerjisi: ½ · 1 · 6² = 18 J.", "En çok sıkışmada cisim durur, enerjinin hepsi yaydadır: ½ · 100 · x² = 18.", "50 · x² = 18 → x² = 0,36 → x = 0,6 m."],
          sonuc: "x = 0,6 m. Yay daha sert olsaydı (k daha büyük) aynı 18 J'lük enerjiyle daha az sıkışırdı: x = √(2·KE ÷ k)." },
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
    { q: "A paratrooper falling at 4 m/s has a kinetic energy of 560 J. What is the mass of the paratrooper?",
      opts: ["35 kg", "70 kg", "140 kg", "280 kg"], a: 1,
      why: "KE = ½ · m · v² → 560 = ½ · m · 16 = 8m → m = 70 kg. 35 kg cevabı ½ çarpanını unutmaktır (560 ÷ 16); 280 kg ise v² yerine v kullanmaktır." },
    { q: "The table gives the mass and speed of three objects. Which object has the greatest kinetic energy?",
      fig: { type: "table", head: ["Object", "Mass", "Speed"], rows: [["A", "1 kg", "6 m/s"], ["B", "4 kg", "2 m/s"], ["C", "2 kg", "4 m/s"]], caption: "Mass and speed of three objects" },
      opts: ["A", "B", "C", "All three have equal kinetic energy"], a: 0,
      why: "KE_A = ½ · 1 · 36 = 18 J; KE_B = ½ · 4 · 4 = 8 J; KE_C = ½ · 2 · 16 = 16 J. B en ağır olduğu için çekici ama hızı küçüktür ve hız karesiyle girer." },
    { q: "A 4 kg book is on a shelf 1.5 m above the floor, which is taken as the reference level (g = 10 m/s²). What is its gravitational potential energy?",
      opts: ["6 J", "15 J", "40 J", "60 J"], a: 3,
      why: "PE = m · g · h = 4 · 10 · 1,5 = 60 J. 15 J cevabı kütleyi unutmaktır (10 · 1,5); 40 J yalnızca ağırlığı (m · g) verir." },
    { q: "The graph shows how the gravitational potential energy of two objects changes with height on the same planet. Which statement about their masses is correct?",
      fig: { type: "graph", xlabel: "h (m)", ylabel: "PE (J)", xmax: 5, ymax: 8, lines: [{ from: [0, 0], to: [4, 4], label: "A" }, { from: [0, 0], to: [2, 4], label: "B" }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }], yticks: [{ v: 4, label: "40" }], caption: "PE–h graph" },
      opts: ["The mass of B is half the mass of A.", "The mass of B is twice the mass of A.", "The masses are equal; B is higher.", "The mass of B is four times the mass of A."], a: 1,
      why: "Eğim m · g'dir. B'nin eğimi A'nın 2 katı olduğu için m_B = 2 · m_A. Aynı h'de B'nin PE'si 2 kat büyüktür; yükseklik farkı değil kütle farkıdır." },
    { q: "A 1 kg object moving at 6 m/s on a horizontal surface compresses a spring with spring constant k = 100 N/m. There is no friction. How far is the spring compressed at most?",
      opts: ["0.18 m", "0.36 m", "0.6 m", "6 m"], a: 2,
      why: "½ · 1 · 36 = 18 J = ½ · 100 · x² → x² = 0,36 → x = 0,6 m. B yanlış: karekök almadan x² = 0,36'yı cevap sanmak; A yanlış: 18 ÷ 100 = 0,18 yazıp ½'yi ve karekökü unutmak." }
  ]
};
