/* Kitpath not defteri · ch402 · 4.2 Gaz Yasaları
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 3: gazlar) + MEB 10. sınıf standart içeriği (Boyle, Charles, Gay-Lussac, Avogadro). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch402",
  amac: "Bu konu *gas laws* yani gaz yasalarını anlatıyor: *Boyle's law*, *Charles's law*, *Gay-Lussac's law* ve *Avogadro's law*. Basınç, hacim, sıcaklık ve mol sayısından hangisi sabitken diğerlerinin nasıl değiştiğini, grafiklerini ve birleşik gaz yasasını öğreneceksin.",
  bolumler: [
    {
      baslik: "Dört yasa bir bakışta",
      kisa: "Her yasa, bir niceliği sabit tutup öteki ikisinin ilişkisini söyler.",
      bloklar: [
        { tip: "tablo", baslik: "Gaz yasaları", head: ["Yasa", "Sabit olanlar", "İlişki", "Formül"], rows: [
            ["*Boyle*", "n, T", "P ↑ → V ↓ (ters orantı)", "P₁V₁ = P₂V₂"],
            ["*Charles*", "n, P", "T ↑ → V ↑ (doğru orantı)", "V₁/T₁ = V₂/T₂"],
            ["*Gay-Lussac*", "n, V", "T ↑ → P ↑ (doğru orantı)", "P₁/T₁ = P₂/T₂"],
            ["*Avogadro*", "P, T", "n ↑ → V ↑ (doğru orantı)", "V₁/n₁ = V₂/n₂"]
          ], not: "Sıcaklık bütün formüllerde Kelvin olmalıdır: T(K) = t(°C) + 273." },
        { tip: "kavramlar", kartlar: [
            { ikon: "↗️", terim: "Directly proportional", tr: "doğru orantı", tanim: "Biri artınca diğeri de aynı oranda artar. Bölümleri sabittir; grafiği orijinden geçen doğrudur.", ornek: "T iki katına çıkınca V de iki katına çıkar (Charles)." },
            { ikon: "↘️", terim: "Inversely proportional", tr: "ters orantı", tanim: "Biri artınca diğeri aynı oranda azalır. Çarpımları sabittir; grafiği hiperboldür.", ornek: "P iki katına çıkınca V yarıya iner (Boyle)." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*At constant temperature, the volume of a gas is inversely proportional to its pressure.*" },
            { ikon: "💬", baslik: "Sabit olan nicelik", metin: "*The amount of gas and the temperature are kept constant.*" }
          ] }
      ]
    },
    {
      baslik: "Boyle yasası: sabit sıcaklıkta P ve V",
      kisa: "Sabit sıcaklıkta basınç artarsa hacim aynı oranda küçülür.",
      bloklar: [
        { tip: "grafik", baslik: "Şırıngadaki hava: P × V sabit", xlabel: "Hacim V (mL)", ylabel: "Basınç P (atm)", xmax: 15, ymax: 12,
          xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 12, label: "12" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[1, 12], [1.5, 8], [2, 6], [3, 4], [4, 3], [6, 2], [8, 1.5], [12, 1]], gizli: true },
            { id: "a", tip: "nokta", renk: 1, x: 12, y: 1, etiket: "1 atm · 12 mL", kilavuz: true, gizli: true },
            { id: "b", tip: "nokta", renk: 1, x: 6, y: 2, etiket: "2 atm · 6 mL", kilavuz: true, gizli: true },
            { id: "c", tip: "nokta", renk: 1, x: 3, y: 4, etiket: "4 atm · 3 mL", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sabit sıcaklıkta P–V grafiği ==hiperboldür==; doğru değildir.", goster: ["e"] },
            { metin: "Başlangıç: 12 mL hava, 1 atm. P × V = 12.", goster: ["a"] },
            { metin: "Pistonu itip hacmi yarıya (6 mL) indirince basınç iki katına (2 atm) çıkar. P × V = 12.", goster: ["b"] },
            { metin: "Hacim 3 mL'ye inince basınç 4 atm olur. P × V hâlâ 12: ==çarpım sabit.==", goster: ["c"] }
          ] },
        { tip: "ornek", baslik: "Dalgıcın hava kabarcığı", durum: "10 m derinlikte toplam basınç yaklaşık 2 atm'dir. Orada 1 mL olan bir hava kabarcığı sabit sıcaklıkta yüzeye (1 atm) çıkıyor. Hacmi ne olur?", adimlar: [
            "Boyle: P₁V₁ = P₂V₂ → 2 atm × 1 mL = 1 atm × V₂.",
            "V₂ = 2 ÷ 1 = 2 mL.",
            "Basınç yarıya indi, hacim iki katına çıktı.",
            "Kontrol: 2 × 1 = 2 ve 1 × 2 = 2 ✓"
          ], sonuc: "Kabarcık 2 mL olur (iki kat büyür)." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*When the pressure doubles, the volume is halved, so the product P × V stays constant.*" }
          ] }
      ]
    },
    {
      baslik: "Charles yasası: sabit basınçta V ve T",
      kisa: "Sabit basınçta Kelvin sıcaklığı artarsa hacim aynı oranda artar.",
      bloklar: [
        { tip: "grafik", baslik: "Balon ısındıkça şişer: V–T doğrusu", xlabel: "Sıcaklık T (K)", ylabel: "Hacim V (L)", xmax: 5, ymax: 5,
          xticks: [{ v: 1, label: "100" }, { v: 2, label: "200" }, { v: 3, label: "300" }, { v: 4, label: "400" }, { v: 5, label: "500" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [0, 0], to: [4.8, 4.8], etiket: "V", gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 3, y: 3, kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 4, y: 4, kilavuz: true, gizli: true },
            { id: "ok", tip: "ok", renk: 2, from: [3.15, 3.0], to: [3.85, 3.0], gizli: true }
          ],
          durumlar: [
            { metin: "Kelvin eksenli V–T grafiği orijinden geçen bir doğrudur: V ÷ T sabit.", goster: ["d"] },
            { metin: "300 K'de (27 °C) balon 3 L'dir.", goster: ["p1"] },
            { metin: "400 K'ye (127 °C) ısınınca 4 L olur.", goster: ["p2"] },
            { metin: "Her 100 K'lik artış hacme 1 L ekler: ==V ÷ T = 0,01 L/K sabittir.==", goster: ["ok"] }
          ] },
        { tip: "ornek", baslik: "Isıtılan balon", durum: "Sabit basınçlı bir balon 27 °C'de 3 L'dir. 127 °C'ye ısıtılırsa hacmi kaç L olur?", adimlar: [
            "Kelvin'e çevir: T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K.",
            "Charles: V₁/T₁ = V₂/T₂ → V₂ = 3 × 400 ÷ 300.",
            "V₂ = 4 L.",
            "Kontrol: 3 ÷ 300 = 0,01 ve 4 ÷ 400 = 0,01 ✓"
          ], sonuc: "V₂ = 4 L." },
        { tip: "tuzak", metin: "Celsius ile hesaplamak hacmi saçma değerlere götürür. Dikkat: grafik eksenini −273 °C'ye uzatırsan V = 0 olur (mutlak sıfır); gerçek gaz ise daha önce sıvılaşır.", yanlis: "V₂ = 3 × 127 ÷ 27 = 14,1 L.", dogru: "Önce Kelvin: V₂ = 3 × 400 ÷ 300 = 4 L." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*At constant pressure, the volume of a gas is directly proportional to its temperature in kelvin.*" }
          ] }
      ]
    },
    {
      baslik: "Gay-Lussac yasası: sabit hacimde P ve T",
      kisa: "Sabit hacimde Kelvin sıcaklığı artarsa basınç aynı oranda artar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P₁", alt: "ilk basınç" }, "÷",
            { t: "T₁", alt: "ilk sıcaklık (K)" }, "=",
            { t: "P₂", alt: "son basınç" }, "÷",
            { t: "T₂", alt: "son sıcaklık (K)" }
          ], aciklama: "Kapalı, sert bir kapta hacim ve mol sayısı sabittir: ısınan gaz daha sert ve daha sık çarpar." },
        { tip: "ornek", baslik: "Ateşe düşen deodorant kutusu", durum: "Kapalı bir spreyin içindeki gazın basıncı 27 °C'de 2 atm'dir. Kutu ateşe düşüp gaz 327 °C'ye ısınırsa basınç ne olur? (Hacim sabit.)", adimlar: [
            "T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K.",
            "P₁/T₁ = P₂/T₂ → P₂ = 2 × 600 ÷ 300 = 4 atm.",
            "Sıcaklık (K) iki katına çıktı, basınç da iki katına çıktı.",
            "Kontrol: 2 ÷ 300 = 4 ÷ 600 ✓ (kutu patlayabilir; bu yüzden ateşe atılmaz)."
          ], sonuc: "P₂ = 4 atm." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*At constant volume, the pressure of a gas is directly proportional to its temperature in kelvin.*" }
          ] }
      ]
    },
    {
      baslik: "Avogadro yasası: mol sayısı ve hacim",
      kisa: "Aynı sıcaklık ve basınçta gazın hacmi mol sayısıyla doğru orantılıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "V₁", alt: "ilk hacim" }, "÷",
            { t: "n₁", alt: "ilk mol" }, "=",
            { t: "V₂", alt: "son hacim" }, "÷",
            { t: "n₂", alt: "son mol" }
          ], aciklama: "Aynı sıcaklık ve basınçta eşit hacimli gazlar eşit sayıda molekül içerir. NŞA'da 1 mol gaz 22,4 L kaplar. Sabit hacim ve sıcaklıkta aynı mantıkla basınç mol sayısıyla doğru orantılıdır: P₁/n₁ = P₂/n₂ (*pressure-mole relationship*)." },
        { tip: "ornek", baslik: "Balona gaz eklemek", durum: "Aynı sıcaklık ve basınçta 0,2 mol gaz 4,8 L hacim kaplıyor. Balona toplam 0,5 mol gaz olacak şekilde ekleme yapılırsa hacim kaç L olur?", adimlar: [
            "Avogadro: V₁/n₁ = V₂/n₂ → V₂ = 4,8 × 0,5 ÷ 0,2.",
            "V₂ = 12 L.",
            "Kontrol: 4,8 ÷ 0,2 = 24 L/mol ve 12 ÷ 0,5 = 24 L/mol ✓"
          ], sonuc: "V₂ = 12 L." },
        { tip: "ornek", baslik: "Valf açılınca gaz kaçarsa", durum: "Sabit hacimli bir kapta 12 g C₃H₄ gazı P basıncındadır. Valf kısa süre açılıp 0,2 mol gaz kaçıyor. Sıcaklık sabit; kalan gazın basıncı kaç P'dir? (C = 12, H = 1)", adimlar: [
            "M(C₃H₄) = 40 g/mol → başlangıçta n = 12 ÷ 40 = 0,3 mol.",
            "Kalan gaz: 0,3 − 0,2 = 0,1 mol.",
            "V ve T sabit: P₁/n₁ = P₂/n₂ → P₂ = P × 0,1 ÷ 0,3.",
            "Kontrol: mol sayısı üçte bire düştü, basınç da üçte bire düşer ✓"
          ], sonuc: "Kalan gazın basıncı P/3." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Equal volumes of gases at the same temperature and pressure contain the same number of moles.*" }
          ] }
      ]
    },
    {
      baslik: "Hangi yasa? Birleşik gaz yasası",
      kisa: "P, V ve T birlikte değişirse P₁V₁/T₁ = P₂V₂/T₂ kullanılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💉", baslik: "Boyle (T sabit)", maddeler: ["P ve V değişir", "P × V sabit"] },
          sag: { ikon: "🎈", baslik: "Charles (P sabit)", maddeler: ["V ve T değişir", "V ÷ T sabit"] },
          oyun: [
            { metin: "Şırınganın ucunu kapatıp pistonu itince basınç arttı.", cevap: "sol", neden: "Sıcaklık sabit, P ve V değişiyor: Boyle." },
            { metin: "Sıcak suya konan şişenin ağzındaki balon şişti.", cevap: "sag", neden: "Basınç sabit kalır, V ve T birlikte artar: Charles." },
            { metin: "Dalgıcın kabarcığı yüzeye çıkarken büyüdü.", cevap: "sol", neden: "Basınç azaldı, hacim arttı (sıcaklık sabit): Boyle." },
            { metin: "Buzdolabına konan balon küçüldü.", cevap: "sag", neden: "Sıcaklık azaldı, hacim azaldı (basınç sabit): Charles." }
          ] },
        { tip: "formul", parcalar: [
            { t: "P₁V₁", alt: "ilk durum" }, "÷",
            { t: "T₁" }, "=",
            { t: "P₂V₂", alt: "son durum" }, "÷",
            { t: "T₂" }
          ], aciklama: "Mol sayısı sabitken üç yasanın birleşimidir; sabit olan nicelik yazılmaz, formülden düşer." },
        { tip: "ornek", baslik: "P, V ve T birlikte değişiyor", durum: "6 L gaz 1 atm ve 300 K'dedir. Basınç 2 atm'ye, sıcaklık 400 K'ye çıkarılırsa hacim kaç L olur?", adimlar: [
            "P₁V₁/T₁ = P₂V₂/T₂ → V₂ = P₁V₁T₂ ÷ (T₁P₂).",
            "V₂ = (1 × 6 × 400) ÷ (300 × 2) = 2400 ÷ 600 = 4 L.",
            "Kontrol: basınç iki kat → V yarıya (3 L); sıcaklık 4/3 kat → V = 3 × 4/3 = 4 L ✓"
          ], sonuc: "V₂ = 4 L." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Use the combined gas law when pressure, volume and temperature all change.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Boyle*: n, T sabit; P × V sabit (ters orantı); P–V grafiği hiperbol.",
            "*Charles*: n, P sabit; V ÷ T sabit; V–T (Kelvin) grafiği orijinden geçen doğru.",
            "*Gay-Lussac*: n, V sabit; P ÷ T sabit; ısınan kapalı kapta basınç artar.",
            "*Avogadro*: P, T sabit; V ÷ n sabit; NŞA'da 1 mol gaz 22,4 L.",
            "Sıcaklık her zaman Kelvin: T(K) = t(°C) + 273.",
            "Birleşik yasa: P₁V₁/T₁ = P₂V₂/T₂ (n sabit).",
            "Sınav kalıbı: *Directly proportional* (doğru orantı), *inversely proportional* (ters orantı)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A gas occupies 6 L at 2 atm and constant temperature. If its pressure is raised to 4 atm, what is its volume?",
      opts: ["12 L", "3 L", "2 L", "8 L"], a: 1,
      why: "Boyle: 2 × 6 = 4 × V₂ → V₂ = 3 L. 12 L (A) basınç ile hacmi doğru orantılı sanmaktır; oysa basınç artınca hacim azalır." },
    { q: "A flexible balloon contains 4 L of air at 27 °C. If the balloon is heated to 87 °C at constant pressure, what is its volume?",
      opts: ["4.8 L", "3.3 L", "12.9 L", "4.0 L"], a: 0,
      why: "Kelvin: 300 K → 360 K; V₂ = 4 × 360 ÷ 300 = 4,8 L. 12,9 L (C) Celsius değerleriyle (4 × 87 ÷ 27) yapılan hatalı hesaptır; 3,3 L (B) ise oranı ters kurmaktır." },
    { q: "Two states of a gas in a closed, rigid container (constant volume and amount) are given in the table. What is the pressure in State 2?",
      fig: { type: "table", head: ["State", "Temperature", "Pressure"], rows: [["1", "27 °C", "1.5 atm"], ["2", "327 °C", "?"]], caption: "Constant-volume container" },
      opts: ["18.2 atm", "1.5 atm", "2.0 atm", "3.0 atm"], a: 3,
      why: "Gay-Lussac: T₁ = 300 K, T₂ = 600 K; P₂ = 1,5 × 600 ÷ 300 = 3,0 atm. 18,2 atm (A) Celsius değerlerinin oranından (1,5 × 327 ÷ 27) çıkar; sıcaklık Kelvin'e çevrilmelidir." },
    { q: "The points in the graph show pressure and volume measurements of a gas at constant temperature. Which conclusion can be drawn?",
      fig: { type: "graph", xlabel: "V (mL)", ylabel: "P (atm)", xmax: 12, ymax: 12, points: [{ q: 1, p: 12, label: "12" }, { q: 2, p: 6, label: "6" }, { q: 3, p: 4, label: "4" }, { q: 4, p: 3, label: "3" }, { q: 6, p: 2, label: "2" }], xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }], yticks: [{ v: 2, label: "2" }, { v: 6, label: "6" }, { v: 12, label: "12" }], caption: "P–V points" },
      opts: ["P and V are directly proportional", "The sum of P and V is constant", "The product P × V is constant; P and V are inversely proportional", "The temperature has changed"], a: 2,
      why: "1 × 12 = 2 × 6 = 3 × 4 = 4 × 3 = 6 × 2 = 12: çarpım sabit, yani ters orantı (Boyle). Sıcaklığın değiştiği (D) söylenemez; soruda sabit olduğu verilmiştir." },
    { q: "6 L of gas is at 1 atm and 300 K. If the pressure is raised to 2 atm and the temperature to 400 K with no change in the number of moles, what is the volume?",
      opts: ["4 L", "8 L", "9 L", "12 L"], a: 0,
      why: "V₂ = (1 × 6 × 400) ÷ (300 × 2) = 4 L. 8 L (B) yalnızca sıcaklığı hesaba katıp basınç artışını unutmaktır (6 × 400 ÷ 300)." }
  ]
};
