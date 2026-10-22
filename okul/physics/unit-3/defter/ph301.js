/* Kitora not defteri · ph301 · 3.1 Akım, Gerilim ve Direnç (Current, Voltage and Resistance)
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
            { ikon: "➡️", terim: "Conventional current", tr: "akımın yönü", tanim: "Akımın yönü, pilin + ucundan − ucuna doğru kabul edilir. ==Elektronlar ise tersine, − uçtan + uca akar.==", ornek: "Devre şemalarındaki oklar elektronları değil akımı gösterir." }
          ] },
        { tip: "ornek", baslik: "Geçen yük", durum: "Bir telden 4 s'de 12 C yük geçiyor. Akım kaç A? Aynı telden 0,5 A akım 20 s akarsa kaç C geçer?",
          adimlar: ["I = q / t = 12 / 4 = 3 A.", "q = I · t = 0,5 · 20 = 10 C."],
          sonuc: "İlk durumda 3 A, ikinci durumda 10 C yük geçer." },
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
          ], aciklama: "1 V = 1 J/C. Gerilim iki nokta arasında ==potansiyel farkıdır==; bu yüzden hep iki uç arasında ölçülür." },
        { tip: "tablo", baslik: "Su devresi benzetmesi", head: ["Su devresi", "Elektrik devresi", "Sembol"], rows: [
            ["Pompa", "Pil (üreteç)", "ε"],
            ["Suyun akışı", "Elektrik akımı", "I"],
            ["Basınç farkı", "Gerilim (potansiyel farkı)", "V"],
            ["Dar boru", "Direnç", "R"]
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
          ], aciklama: "Birim: ohm (Ω). ρ maddenin cinsine ve sıcaklığa bağlıdır; metallerde sıcaklık artınca direnç de artar." },
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
        { tip: "tuzak", metin: "Ampulün teli ısındıkça direnci artar; bu yüzden V–I grafiği düz bir doğru olmaz.", yanlis: "Her eleman Ohm yasasına uyar ve V–I grafiği hep doğrudur.", dogru: "Ohm yasasındaki doğrusal ilişki yalnızca direnci sabit olan (ohmik) elemanlar için geçerlidir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The current through the bulb is I = V / R = 9 / 3 = 3 A.*", metin: "Formülü, sayıyı ve birimi sırayla yaz." },
            { ikon: "✍️", baslik: "*The resistance of the bulb does not change.*", metin: "\"Direnç sabit\" varsayımını açıkça belirt." }
          ] }
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
    { q: "Bir iletken telin kesitinden 20 s boyunca 0,5 A akım geçiyor. Bu sürede kesitten geçen yük kaç C'dur?",
      opts: ["40 C", "10 C", "0,025 C", "20,5 C"], a: 1,
      why: "q = I · t = 0,5 · 20 = 10 C. 0,025 C cevabı I / t yapmaktır; 40 C ise t / I'dır." },
    { q: "Grafik, X ve Y dirençlerinin uçlarına uygulanan gerilimle üzerlerinden geçen akımı gösteriyor. Hangisi doğrudur?",
      fig: { type: "graph", xlabel: "I (A)", ylabel: "V (V)", xmax: 5, ymax: 10, lines: [{ from: [0, 0], to: [2, 8], label: "X" }, { from: [0, 0], to: [4, 8], label: "Y" }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }], yticks: [{ v: 8, label: "8" }], caption: "V–I grafiği" },
      opts: ["R_X = 2 Ω ve R_Y = 4 Ω", "R_X = R_Y, çünkü ikisi de başlangıçtan geçer", "R_X, R_Y'nin yarısıdır", "R_X = 4 Ω ve R_Y = 2 Ω"], a: 3,
      why: "Eğim R'dir: R_X = 8 / 2 = 4 Ω, R_Y = 8 / 4 = 2 Ω. Dik olan doğru daha büyük dirençtir; ilk şık eğimleri ters yorumlar." },
    { q: "Bir lambanın uçları arasındaki gerilimi ve lambadan geçen akımı ölçmek için ampermetre ve voltmetre nasıl bağlanmalıdır?",
      opts: ["Ampermetre seri, voltmetre lambaya paralel", "İkisi de seri", "İkisi de lambaya paralel", "Ampermetre paralel, voltmetre seri"], a: 0,
      why: "Akım ölçmek için alet devrenin içinden geçmeli (seri), gerilim ölçmek için elemanın uçlarına bağlanmalı (paralel). Son şık tam tersidir ve ampermetreyle kısa devre yapar." },
    { q: "Aynı maddeden yapılmış bir telin boyu 2 katına, çapı da 2 katına çıkarılırsa direnci nasıl değişir?",
      opts: ["2 katına çıkar", "Değişmez", "Yarıya iner", "4 katına çıkar"], a: 2,
      why: "Boy 2 katı → R × 2. Çap 2 katı → alan 4 katı → R ÷ 4. Sonuç R × 2 / 4 = R / 2. Alanı da 2 katı sanan, \"değişmez\" ya da \"2 katı\" cevabına gider." },
    { q: "Bir direncin uçlarına farklı gerilimler uygulanıyor ve akım ölçülüyor (tablo). Direncin değeri kaç Ω'dur?",
      fig: { type: "table", head: ["V (V)", "I (A)"], rows: [["2", "0,5"], ["4", "1"], ["6", "1,5"]], caption: "Ölçüm sonuçları" },
      opts: ["0,25 Ω", "4 Ω", "12 Ω", "Sabit olmadığı için bulunamaz"], a: 1,
      why: "Her satırda V / I = 4 Ω olduğu için direnç sabit ve 4 Ω'dur. 0,25 Ω, I / V hesaplamaktır." }
  ]
};
