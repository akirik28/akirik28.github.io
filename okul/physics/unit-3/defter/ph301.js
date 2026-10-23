/* Kitpath not defteri · ph301 · 3.1 Akım, Gerilim ve Direnç (Current, Voltage and Resistance)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Physics, Unit 3) + MEB FİZ.10 Elektrik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph301",
  amac: "Bu defter elektrik devresinin üç temel niceliğini anlatıyor: *current* (akım), *voltage* (gerilim) ve *resistance* (direnç). Aralarındaki ilişkiyi veren Ohm yasasını (V = I·R) ve ölçü aletlerinin devreye nasıl bağlandığını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Current*: yükün akışı",
      kisa: "Akım, kesitten birim zamanda geçen yük miktarıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "I", alt: "akım (A)" }, "=", { t: "q", alt: "yük (C)" }, "÷", { t: "t", alt: "süre (s)" }
          ], aciklama: "1 A = 1 C/s. Yani 1 A, her saniye kesitten 1 coulomb yük geçmesi demektir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔌", terim: "Electric current", tr: "elektrik akımı", tanim: "Yüklerin (metallerde elektronların) bir iletken boyunca düzenli akışı. Birimi amper (A), ölçen alet ampermetre.", ornek: "Telefon şarj aletinden geçen akım yaklaşık 1–2 A." },
            { ikon: "⚡", terim: "Charge", tr: "elektrik yükü", tanim: "Yük birimi coulomb (C). Elektronun yükü çok küçüktür; 1 C yaklaşık 6 × 10¹⁸ elektrona denk gelir.", ornek: "Bir akım 2 A ise her saniye 2 C yük geçer." },
            { ikon: "➡️", terim: "Conventional current", tr: "akımın yönü", tanim: "Akımın yönü, pilin + ucundan − ucuna (yüksek potansiyelden düşüğe) doğru kabul edilir. ==Metallerdeki serbest elektronlar ise tersine, − uçtan + uca akar.==", ornek: "Devre şemalarındaki oklar elektronları değil akımı gösterir." },
            { ikon: "🔀", terim: "Kirchhoff's junction law", tr: "akımın korunumu (düğüm kuralı)", tanim: "Bir düğüme (telin dallandığı nokta) giren akımların toplamı, çıkanların toplamına eşittir: ΣI giren = ΣI çıkan. Lambadan çıkan akım, lambaya girene eşittir.", ornek: "Düğüme 3 A ve 5 A giriyor, bir koldan 2 A çıkıyorsa diğer kol 6 A taşır." }
          ] },
        { tip: "ornek", baslik: "Geçen yük", durum: "Bir telden 4 s'de 12 C yük geçiyor. Akım kaç A? Aynı telden 0,5 A akım 20 s akarsa kaç C geçer? Bir telin kesitinden dakikada 120 C geçiyorsa akım nedir?",
          adimlar: ["I = q / t = 12 / 4 = 3 A.", "q = I · t = 0,5 · 20 = 10 C.", "Dakika = 60 s: I = 120 / 60 = 2 A."],
          sonuc: "3 A, 10 C ve 2 A. Dakikayı saniyeye çevirmeden 120 A yazma." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The current is the amount of charge passing through a cross-section per second.*", metin: "Akımın tanımı." },
            { ikon: "✍️", baslik: "*The conventional current flows from the positive to the negative terminal.*", metin: "Akım yönünü belirtirken kullan." }
          ] }
      ]
    },
    {
      baslik: "*Voltage*: yüke verilen enerji",
      kisa: "Gerilim, birim yük başına enerjidir; pil yüke enerji verir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "V", alt: "gerilim (V)" }, "=", { t: "W", alt: "enerji (J)" }, "÷", { t: "q", alt: "yük (C)" }
          ], aciklama: "1 V = 1 J/C. Gerilim iki nokta arasında ==potansiyel farkıdır==; bu yüzden voltmetrenin iki girişi vardır. Pil, kimyasal tepkimeyle yükleri ayırarak bu farkı üretir (*emf*, ε). İdeal telin uçları arasında gerilim sıfırdır; tel pilin uçlarına bağlıysa ΔV tel = ΔV pil." },
        { tip: "tablo", baslik: "Su devresi benzetmesi", head: ["Su devresi", "Elektrik devresi", "Sembol"], rows: [
            ["Pompa", "Pil (üreteç): basıncı üretir", "ε"],
            ["Geniş, pürüzsüz boru", "İletken tel: sürtünmesiz yol", "—"],
            ["Vana (açık-kapalı)", "Anahtar", "S"],
            ["Suyun debisi", "Elektrik akımı", "I"],
            ["Basınç farkı", "Gerilim (potansiyel farkı)", "V"],
            ["Dar boru, kum filtresi", "Direnç: akışı kısıtlar", "R"]
          ] },
        { tip: "ornek", baslik: "Yüke verilen enerji", durum: "Bir pil 2 C'luk yüke 12 J enerji veriyor. Gerilimi kaç V? 1,5 V'luk pil 4 C'a ne kadar enerji verir?",
          adimlar: ["V = W / q = 12 / 2 = 6 V.", "W = V · q = 1,5 · 4 = 6 J."],
          sonuc: "Pil 6 V'tur; 1,5 V'luk pil 4 C'luk yüke 6 J verir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The voltage is the energy given to each coulomb of charge.*", metin: "Gerilimin anlamı." },
            { ikon: "✍️", baslik: "*The voltage across the lamp is 6 V.*", metin: "\"Across\" (uçları arasında) deyimini kullan." }
          ] }
      ]
    },
    {
      baslik: "Ölçü aletleri: ampermetre ve voltmetre",
      kisa: "Ampermetre seri, voltmetre paralel bağlanır.",
      bloklar: [
        { tip: "tablo", head: ["Alet", "Ölçtüğü", "Bağlanışı", "İç direnci (ideal)"], rows: [
            ["Ampermetre (A)", "Akım (A)", "Devreye ==seri==", "Çok küçük (ideal 0)"],
            ["Voltmetre (V)", "Gerilim (V)", "Elemanın uçlarına ==paralel==", "Çok büyük (ideal sonsuz)"]
          ], not: "Sınavda böyle yaz: *The ammeter is connected in series and the voltmeter is connected in parallel.*" },
        { tip: "ikili", sol: { ikon: "🅰️", baslik: "Ampermetre", maddeler: ["Akım ölçer, devreye seri girer", "İç direnci çok küçüktür"] },
          sag: { ikon: "🅥", baslik: "Voltmetre", maddeler: ["Gerilim ölçer, elemanın uçlarına bağlanır", "İç direnci çok büyüktür"] },
          oyun: [
            { metin: "Lambadan geçen akımı ölçmek.", cevap: "sol", neden: "Akım ölçülür: ampermetre devreye seri bağlanır." },
            { metin: "Lambanın uçları arasındaki gerilimi ölçmek.", cevap: "sag", neden: "Gerilim iki uç arasında ölçülür: voltmetre paralel." },
            { metin: "Devrenin kesilip arasına girmesi gerekir.", cevap: "sol", neden: "Akımın aletten geçmesi gerekir: seri." },
            { metin: "Çok büyük iç direnci vardır; devreden akım çekmez.", cevap: "sag", neden: "Büyük iç direnç devreyi bozmaz: voltmetre." }
          ] },
        { tip: "tuzak", metin: "İdeal ampermetrenin direnci hemen hemen sıfırdır.", yanlis: "Ampermetreyi lambaya paralel bağlarım.", dogru: "Ampermetre paralel bağlanırsa neredeyse direnç göstermediği için kısa devre yapar. Voltmetre ise seri bağlanırsa devreden akım geçmez." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The voltmeter is connected across the lamp.*", metin: "\"Across\": uçlarına, paralel." },
            { ikon: "✍️", baslik: "*The ammeter measures the current flowing through the lamp.*", metin: "\"Through\": içinden geçen." }
          ] }
      ]
    },
    {
      baslik: "*Resistance*: direnç ve etkenleri",
      kisa: "Direnç, telin boyuyla artar; kesitiyle azalır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "R", alt: "direnç (Ω)" }, "=", { t: "ρ", alt: "özdirenç (malzeme)" }, "×", { t: "ℓ", alt: "uzunluk (m)" }, "÷", { t: "A", alt: "kesit alanı (m²)" }
          ], aciklama: "Birim: ohm (Ω); 1 Ω = 1 V/A. ρ (*resistivity*) maddenin cinsine ve sıcaklığa bağlıdır; iyi iletkenlerde küçük, yalıtkanlarda büyüktür. Metallerde sıcaklık artınca atomların titreşimi elektronlara daha büyük hedef olur, direnç artar. Direnç elemanları ısıtıcı tel (elektriği ısıya çevirir), devre elemanı (renk bantları değerini gösterir) ya da sensör (ışıkla direnci değişir) olarak kullanılır." },
        { tip: "tablo", head: ["Ne değişir?", "R nasıl değişir?", "Neden?"], rows: [
            ["Uzunluk ℓ iki katı", "2 katına çıkar", "Elektronlar daha uzun yol alır"],
            ["Kesit alanı A iki katı", "Yarıya iner", "Daha geniş yol vardır"],
            ["Malzeme (ρ)", "Cinsine göre değişir", "Bakır az, nikrom çok direnç gösterir"],
            ["Sıcaklık (metal)", "Artar", "İyonlar daha çok titreşir"]
          ] },
        { tip: "ornek", baslik: "Telin boyu ve kalınlığı", durum: "Direnci 4 Ω olan bakır telin boyu 2 katına çıkarılıyor ve çapı da 2 katına çıkarılıyor. Yeni direnç kaç Ω olur?",
          adimlar: ["Boy 2 katı → R, 2 katına çıkar.", "Çap 2 katı → kesit alanı A = π r², yani 4 katına çıkar → R, 4'e bölünür.", "R' = 4 · 2 / 4 = 2 Ω."],
          sonuc: "Yeni direnç 2 Ω'dur; çap 2 katına çıkınca alan 4 katına çıkar, tuzağa düşme." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The resistance increases when the wire is longer and decreases when it is thicker.*", metin: "Direnç etkenlerini tek cümleyle yaz." },
            { ikon: "✍️", baslik: "*The resistance is directly proportional to the length.*", metin: "Doğru orantı: \"directly proportional\"." }
          ] }
      ]
    },
    {
      baslik: "Ohm yasası ve V–I grafiği",
      kisa: "Sabit sıcaklıkta V = I·R; V–I grafiğinin eğimi dirençtir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "V", alt: "gerilim (V)" }, "=", { t: "I", alt: "akım (A)" }, "×", { t: "R", alt: "direnç (Ω)" }
          ], aciklama: "Buradan I = V / R ve R = V / I. *Ohm's law*: ==aynı dirençte== gerilim artarsa akım aynı oranda artar." },
        { tip: "grafik", baslik: "İki direncin gerilim–akım grafiği", xlabel: "Akım I (A)", ylabel: "Gerilim V (V)", xmax: 5, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "la", tip: "cizgi", renk: 0, from: [0, 0], to: [4.5, 9], etiket: "R = 2 Ω" },
            { id: "pa", tip: "nokta", x: 3, y: 6, etiket: "3 A, 6 V", kilavuz: true, gizli: true },
            { id: "lb", tip: "cizgi", renk: 2, from: [0, 0], to: [2.25, 9], etiket: "R = 4 Ω", gizli: true },
            { id: "pb", tip: "nokta", x: 2, y: 8, etiket: "2 A, 8 V", kilavuz: true, gizli: true },
            { id: "h", tip: "cizgi", renk: 1, kesik: true, from: [0, 4], to: [5, 4], gizli: true },
            { id: "qa", tip: "nokta", x: 2, y: 4, etiket: "2 A", gizli: true },
            { id: "qb", tip: "nokta", x: 1, y: 4, etiket: "1 A", gizli: true }
          ],
          durumlar: [
            { metin: "Sabit dirençte V ile I doğru orantılıdır: grafik başlangıçtan geçen bir ==doğru==. Eğim = V / I = R." },
            { metin: "Bu doğruda 3 A için 6 V gerekir: R = 6 / 3 = 2 Ω.", goster: ["pa"] },
            { metin: "İkinci direnç daha diktir: 2 A için 8 V, yani R = 8 / 2 = 4 Ω.", gizle: ["pa"], goster: ["lb", "pb"] },
            { metin: "İkisine de V = 4 V uygulayalım: dik olan (4 Ω) 1 A, diğeri (2 Ω) 2 A geçirir. Eğimi büyük olandan daha az akım geçer.", gizle: ["pb"], goster: ["h", "qa", "qb"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The slope of the V–I graph is equal to the resistance.*", metin: "Grafik sorusunun anahtar cümlesi." },
            { ikon: "✍️", baslik: "*The current is directly proportional to the voltage.*", metin: "Ohm yasasının sözlü hâli." }
          ] }
      ]
    },
    {
      baslik: "Ohm yasasıyla hesap",
      kisa: "Üç büyüklükten ikisi bilinince üçüncüsü V = I·R ile bulunur.",
      bloklar: [
        { tip: "ornek", baslik: "Bilinmeyen hangisi?", durum: "Bir ampul 6 V'luk pile bağlanınca 2 A akım geçiriyor. Ampulün direnci kaç Ω? 9 V'a bağlanırsa akım kaç A olur? 0,5 A geçmesi için gerilim kaç V olmalı?",
          adimlar: ["R = V / I = 6 / 2 = 3 Ω.", "R sabit kalır: I = V / R = 9 / 3 = 3 A.", "V = I · R = 0,5 · 3 = 1,5 V."],
          sonuc: "R = 3 Ω; 9 V'ta 3 A; 0,5 A için 1,5 V." },
        { tip: "ornek", baslik: "Birim dönüşümü", durum: "Bir sensör 5 V ile çalışırken 20 mA akım çekiyor. Direnci kaç Ω?",
          adimlar: ["20 mA = 20 / 1000 = 0,02 A.", "R = V / I = 5 / 0,02 = 250 Ω."],
          sonuc: "R = 250 Ω. Hesaptan önce mA'i A'e, kΩ'u Ω'a çevir." },
        { tip: "tuzak", metin: "Ampulün teli ısındıkça direnci artar; bu yüzden V–I grafiği düz bir doğru olmaz.", yanlis: "Her eleman Ohm yasasına uyar ve V–I grafiği hep doğrudur.", dogru: "Ohm yasası bir doğa yasası değildir; yalnızca direnci sabit kalan (ohmik) malzemeler için geçerlidir. Pil ve kondansatör gibi elemanlar ohmik değildir." },
        { tip: "ornek", baslik: "Prizdeki ampulün teli", durum: "120 V'luk prize bağlanan 60 W'lık ampul 0,50 A akım çekiyor. Filamanın direnci kaç Ω? Teli 0,04 mm çapında ve ρ ≈ 5 × 10⁻⁷ Ω·m ise boyu yaklaşık ne kadar olmalı?",
          adimlar: ["R = V / I = 120 / 0,5 = 240 Ω.", "Kesit alanı A = π·r² = 3,14 · (2 × 10⁻⁵)² ≈ 1,26 × 10⁻⁹ m².", "ℓ = R·A / ρ = 240 · 1,26 × 10⁻⁹ / (5 × 10⁻⁷) ≈ 0,6 m."],
          sonuc: "R = 240 Ω ve tel yaklaşık 0,6 m (iki ayak kadar). Bu direnç yalnızca tel akkor haldeyken geçerlidir. Sınavda böyle yaz: *The current through the bulb is I = V / R.* *The resistance of the filament increases as it gets hotter.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Current*: I = q / t; birimi amper. Akımın yönü + uçtan − uca kabul edilir, elektronlar tersine akar.",
            "*Voltage*: V = W / q; birimi volt. Hep iki uç arasında ölçülür.",
            "Ampermetre seri, voltmetre paralel bağlanır; ampermetre paralel olursa kısa devre olur.",
            "*Resistance*: R = ρ·ℓ / A; uzunlukla artar, kesitle azalır, metalde sıcaklıkla artar.",
            "Çap 2 katına çıkarsa kesit alanı 4 katına çıkar.",
            "*Ohm's law*: V = I·R; V–I grafiğinin eğimi R'dir.",
            "Eğimi büyük (dik) olan dirençten, aynı gerilimde daha az akım geçer.",
            "Hesaptan önce mA, kΩ gibi birimleri A ve Ω'a çevir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Every minute, 120 C of charge flows through a cross-section of a wire. What is the current in the wire?",
      opts: ["240 A", "120 A", "60 A", "2 A"], a: 3,
      why: "Dakika 60 s'dir: I = q / t = 120 / 60 = 2 A. 120 A cevabı süreyi hiç hesaba katmamaktır; 60 A ise 120 ÷ 2 gibi yanlış bir işlemdir." },
    { q: "The graph shows the voltage across resistors X and Y against the current through them. Which statement is correct?",
      fig: { type: "graph", xlabel: "I (A)", ylabel: "V (V)", xmax: 5, ymax: 10, lines: [{ from: [0, 0], to: [2, 8], label: "X" }, { from: [0, 0], to: [4, 8], label: "Y" }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }], yticks: [{ v: 8, label: "8" }], caption: "V–I graph" },
      opts: ["R_X = 2 Ω and R_Y = 4 Ω", "R_X = R_Y because both lines pass through the origin", "R_X is half of R_Y", "R_X = 4 Ω and R_Y = 2 Ω"], a: 3,
      why: "Eğim R'dir: R_X = 8 / 2 = 4 Ω, R_Y = 8 / 4 = 2 Ω. Dik olan doğru daha büyük dirençtir; ilk şık eğimleri ters yorumlar." },
    { q: "How should an ammeter and a voltmeter be connected to measure the current through a lamp and the voltage across it?",
      opts: ["Ammeter in series, voltmeter in parallel with the lamp", "Both in series", "Both in parallel with the lamp", "Ammeter in parallel, voltmeter in series"], a: 0,
      why: "Akım ölçmek için alet devrenin içinden geçmeli (seri), gerilim ölçmek için elemanın uçlarına bağlanmalı (paralel). Son şık tam tersidir ve ampermetreyle kısa devre yapar." },
    { q: "Wire 2 is made of the same material as wire 1, but it is twice as long and has twice the diameter. What is the ratio R₂/R₁ of their resistances?",
      opts: ["2", "1", "1/2", "4"], a: 2,
      why: "Boy 2 katı → R × 2. Çap 2 katı → alan 4 katı → R ÷ 4. Sonuç R × 2 / 4 = R / 2. Alanı da 2 katı sanan, \"değişmez\" ya da \"2 katı\" cevabına gider." },
    { q: "Different voltages are applied across a resistor and the current is measured (table). What is the resistance of the resistor?",
      fig: { type: "table", head: ["V (V)", "I (A)"], rows: [["2", "0.5"], ["4", "1"], ["6", "1.5"]], caption: "Measurements" },
      opts: ["0.25 Ω", "4 Ω", "12 Ω", "It cannot be found because it is not constant"], a: 1,
      why: "Her satırda V / I = 4 Ω olduğu için direnç sabit ve 4 Ω'dur. 0,25 Ω, I / V hesaplamaktır." }
  ]
};
