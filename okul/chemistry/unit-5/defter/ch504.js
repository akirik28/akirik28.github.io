/* Kitpath not defteri · ch504 · 5.4 Koligatif Özellikler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 4: donma noktası alçalması, kaynama noktası yükselmesi, i değeri, yolda buzlanmaya karşı tuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch504",
  amac: "Bu konu *colligative properties* yani koligatif özellikleri anlatıyor: çözeltiye uçucu olmayan bir madde katılınca buhar basıncı düşer, kaynama noktası yükselir, donma noktası alçalır. Bunların maddenin türüne değil tanecik sayısına (*van't Hoff factor* i) bağlı olduğunu, çözeltileri karşılaştırmayı, faz diyagramını okumayı ve yolda buzlanmaya karşı tuzun neden etkili olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "Koligatif özellik nedir?",
      kisa: "Koligatif özellik, çözünen taneciklerin cinsine değil sayısına bağlıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔢", terim: "Colligative properties", tr: "koligatif özellikler", tanim: "Çözeltinin yalnızca çözünen tanecik sayısına bağlı özellikleri: buhar basıncı alçalması, kaynama noktası yükselmesi, donma noktası alçalması.", ornek: "Tuzlu su, saf sudan daha geç donar." },
            { ikon: "🧪", terim: "Nonvolatile solute", tr: "uçucu olmayan çözünen", tanim: "Çözeltiden buharlaşmayan çözünen. Bu defterdeki hesaplar böyle çözünenler içindir.", ornek: "Tuz, şeker." },
            { ikon: "📊", terim: "Molality", tr: "molal derişim (m)", tanim: "1 kg çözücüdeki çözünen mol sayısı: m = n çözünen ÷ kg çözücü. Birimi mol/kg. (Büyük M molarite, küçük m molalitedir.)", ornek: "58,5 g NaCl 1 kg suda: m = 1 mol/kg." }
          ] },
        { tip: "tablo", baslik: "Saf su ile çözeltinin karşılaştırması", head: ["Özellik", "Saf su", "Su + çözünen (uçucu olmayan)"], rows: [
            ["Buhar basıncı", "daha yüksek", "daha düşük"],
            ["Kaynama noktası (1 atm)", "100 °C", "100 °C'den yüksek"],
            ["Donma noktası", "0 °C", "0 °C'den düşük"]
          ], not: "Değişimin büyüklüğü, tanecik sayısıyla (derişim ve i) artar. Saf sıvı kaynarken sıcaklık sabit kalır; çözelti kaynarken çözücü buharlaştıkça derişir ve sıcaklığı sürekli yükselir (donarken sürekli düşer)." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Colligative properties depend on the number of solute particles, not on their type.*" }
          ] }
      ]
    },
    {
      baslik: "i değeri: çözünen kaç tanecik verir?",
      kisa: "i, bir formül biriminin çözeltide oluşturduğu tanecik sayısıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Van't Hoff çarpanı (i) — ideal, tam ayrışma", head: ["Çözünen", "Çözeltideki tanecikler", "i"], rows: [
            ["Glikoz, şeker, üre", "ayrışmaz (moleküller)", "1"],
            ["NaCl, KNO₃, NaOH", "Na⁺ + Cl⁻ (NaOH: Na⁺ + OH⁻)", "2"],
            ["CaCl₂, Na₂SO₄, Ca(OH)₂", "Ca²⁺ + 2Cl⁻ (Ca(OH)₂: Ca²⁺ + 2OH⁻)", "3"],
            ["AlCl₃, Na₃PO₄", "Al³⁺ + 3Cl⁻", "4"],
            ["Al₂(SO₄)₃", "2Al³⁺ + 3SO₄²⁻", "5"]
          ], not: "Etkin tanecik derişimi = i × derişim. Sınavda iyonik tuzlar, asitler ve bazlar tam ayrışır kabul edilir; moleküler maddelerde (alkol, şeker) i = 1." },
        { tip: "ikili", sol: { ikon: "🧊", baslik: "Daha DÜŞÜK donma noktası", maddeler: ["Etkin tanecik derişimi (i × m) 0,2'den büyük", "(0,1 m NaCl çözeltisine göre)"] },
          sag: { ikon: "💧", baslik: "Daha YÜKSEK donma noktası", maddeler: ["i × m değeri 0,2'den küçük", "(0,1 m NaCl çözeltisine göre)"] },
          oyun: [
            { metin: "0,1 m glikoz çözeltisi", cevap: "sag", neden: "i × m = 0,1 < 0,2: daha az düşer, donma noktası daha yüksek." },
            { metin: "0,1 m CaCl₂ çözeltisi", cevap: "sol", neden: "i × m = 3 × 0,1 = 0,3 > 0,2: daha çok düşer." },
            { metin: "0,05 m CaCl₂ çözeltisi", cevap: "sag", neden: "i × m = 3 × 0,05 = 0,15 < 0,2." },
            { metin: "0,3 m glikoz çözeltisi", cevap: "sol", neden: "i × m = 1 × 0,3 = 0,3 > 0,2." }
          ] },
        { tip: "tuzak", metin: "Aynı molalitede iki çözelti aynı etkiyi yapmaz: iyonlaşan madde daha çok tanecik verir.", yanlis: "0,1 m şeker ile 0,1 m NaCl çözeltilerinin donma noktaları aynıdır.", dogru: "NaCl i = 2 olduğundan donma noktası şekerli çözeltinin iki katı kadar düşer." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The van't Hoff factor i is the number of particles produced when one formula unit dissolves.*" }
          ] }
      ]
    },
    {
      baslik: "Buhar basıncı alçalması",
      kisa: "Uçucu olmayan çözünen, çözücünün buhar basıncını düşürür.",
      bloklar: [
        { tip: "adimlar", baslik: "Neden düşer?", adimlar: [
            { baslik: "Yüzey kalabalıklaşır", metin: "Çözünen tanecikler, sıvının yüzeyinde çözücü moleküllerin yerini kısmen alır." },
            { baslik: "Buharlaşan molekül azalır", metin: "Aynı sürede yüzeyden kaçan çözücü molekülü sayısı azalır." },
            { baslik: "Buhar basıncı düşer", metin: "Aynı sıcaklıkta çözeltinin buhar basıncı saf çözücüden düşüktür." }
          ] },
        { tip: "grafik", baslik: "Buhar basıncı–sıcaklık: çözelti eğrisi aşağıda", xlabel: "Sıcaklık (°C, eksen 60'tan başlar)", ylabel: "Buhar basıncı (mmHg)", xmax: 6, ymax: 10,
          xticks: [{ v: 0, label: "60" }, { v: 1, label: "70" }, { v: 2, label: "80" }, { v: 3, label: "90" }, { v: 4, label: "100" }, { v: 5, label: "110" }],
          yticks: [{ v: 2, label: "200" }, { v: 4, label: "400" }, { v: 6, label: "600" }, { v: 7.6, label: "760" }, { v: 9, label: "900" }],
          ogeler: [
            { id: "l", tip: "cizgi", renk: 1, kesik: true, from: [0, 7.6], to: [5.8, 7.6], gizli: true },
            { id: "w", tip: "egri", renk: 0, noktalar: [[0, 1.49], [1, 2.33], [2, 3.55], [3, 5.25], [4, 7.6], [4.5, 9.07]], gizli: true },
            { id: "lw", tip: "yazi", x: 3.35, y: 6.9, metin: "saf su", hiza: "end", gizli: true },
            { id: "p1", tip: "nokta", renk: 0, x: 4, y: 7.6, kilavuz: true, gizli: true },
            { id: "s", tip: "egri", renk: 2, noktalar: [[0, 1.34], [1, 2.1], [2, 3.19], [3, 4.73], [4, 6.84], [4.5, 8.16]], gizli: true },
            { id: "ls", tip: "yazi", x: 4.15, y: 5.6, metin: "çözelti", hiza: "start", gizli: true },
            { id: "p2", tip: "nokta", renk: 2, x: 4, y: 6.84, gizli: true },
            { id: "t2", tip: "yazi", x: 4.2, y: 6.35, metin: "684 mmHg", hiza: "start", gizli: true },
            { id: "p3", tip: "nokta", renk: 2, x: 4.3, y: 7.6, kilavuz: true, gizli: true },
            { id: "t3", tip: "yazi", x: 4.4, y: 0.7, metin: "≈103 °C", hiza: "start", gizli: true },
            { id: "dt", tip: "yazi", x: 4.75, y: 8, metin: "ΔTb ≈ 3 °C", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Saf suyun eğrisi: buhar basıncı 760 mmHg'ye (dış basınç, 1 atm) ulaşınca su kaynar, yani 100 °C'de.", goster: ["l", "w", "lw", "p1"] },
            { metin: "Çözeltinin eğrisi saf suyun altında: aynı sıcaklıkta buhar basıncı daha düşüktür. (Fark görünsün diye derişik bir çözelti çizildi.)", goster: ["s", "ls"] },
            { metin: "100 °C'de çözeltinin buhar basıncı yalnızca 684 mmHg; henüz 760'a ulaşmadı, kaynamıyor.", goster: ["p2", "t2"] },
            { metin: "760 mmHg'ye ulaşması için daha yüksek sıcaklık gerekir: ==kaynama noktası yükselir (ΔTb).==", goster: ["p3", "t3", "dt"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Adding a nonvolatile solute lowers the vapor pressure of the solvent.*" },
            { ikon: "💬", baslik: "Bağlantı", metin: "*A liquid boils when its vapor pressure equals the external pressure.*" }
          ] }
      ]
    },
    {
      baslik: "Kaynama noktası yükselmesi",
      kisa: "ΔTb = i × Kb × m; yeni kaynama noktası = 100 + ΔTb.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "ΔTb", alt: "yükselme (°C)" }, "=",
            { t: "i", alt: "tanecik sayısı" }, "×",
            { t: "Kb", alt: "su için 0,51 °C·kg/mol" }, "×",
            { t: "m", alt: "molalite (mol/kg)" }
          ], aciklama: "Kb, 1 mol uçucu olmayan ve iyonlaşmayan çözünenin 1000 g suyun kaynama noktasını yükselttiği miktardır (0,51 °C). Derste bu bağıntı ΔT = K × derişim × i biçiminde de yazılır; seyreltik sulu çözeltilerde molarite ≈ molalite alınır. Kaynama ve donma noktaları dış basınca da bağlıdır (1 atm'de su 100 °C'de, 0,95 atm'de 98,6 °C'de kaynar); formüller 1 atm içindir." },
        { tip: "ornek", baslik: "Tuzlu suyun kaynama noktası", durum: "a) 58,5 g NaCl 1 kg suda çözülüyor; çözeltinin kaynama noktası kaç °C'dir? b) Makarna suyuna 1 kg suda 10 g tuz atılırsa kaynama noktası ne kadar yükselir? (NaCl = 58,5 g/mol, Kb = 0,51)", adimlar: [
            "a) n = 58,5 ÷ 58,5 = 1 mol; m = 1 mol/kg; i = 2.",
            "a) ΔTb = 2 × 0,51 × 1 = 1,02 °C → kaynama noktası 100 + 1,02 = 101,02 °C.",
            "b) n = 10 ÷ 58,5 ≈ 0,171 mol; m ≈ 0,171 mol/kg.",
            "b) ΔTb = 2 × 0,51 × 0,171 ≈ 0,17 °C → yaklaşık 100,17 °C.",
            "Kontrol: 0,17 ÷ 1,02 ≈ 0,171 = 10 ÷ 58,5 oranı ✓"
          ], sonuc: "a) 101,02 °C  b) yalnızca yaklaşık 0,17 °C yükselir (kaynama noktası pratikte fark edilmez)." },
        { tip: "tuzak", metin: "ΔTb sıcaklığın kendisi değil, yükselme miktarıdır. Kaynama noktasını bulmak için 100 °C'ye eklemeyi unutma.", yanlis: "1 m NaCl çözeltisi 1,02 °C'de kaynar.", dogru: "Kaynama noktası 100 + 1,02 = 101,02 °C." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Boiling point elevation: ΔTb = i × Kb × m. The solution boils at a higher temperature than the pure solvent.*" }
          ] }
      ]
    },
    {
      baslik: "Donma noktası alçalması",
      kisa: "ΔTf = i × Kf × m; yeni donma noktası = 0 − ΔTf.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "ΔTf", alt: "alçalma (°C)" }, "=",
            { t: "i", alt: "tanecik sayısı" }, "×",
            { t: "Kf", alt: "su için 1,86 °C·kg/mol" }, "×",
            { t: "m", alt: "molalite (mol/kg)" }
          ] },
        { tip: "grafik", baslik: "Aynı molalitede i büyüdükçe daha çok alçalır", xlabel: "Molalite m (mol/kg)", ylabel: "ΔTf (°C)", xmax: 3, ymax: 12,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          yticks: [{ v: 1.86, label: "1,86" }, { v: 3.72, label: "3,72" }, { v: 5.58, label: "5,58" }, { v: 11.16, label: "11,16" }],
          ogeler: [
            { id: "g", tip: "cizgi", renk: 0, from: [0, 0], to: [2, 3.72], etiket: "glikoz (i=1)", gizli: true },
            { id: "n", tip: "cizgi", renk: 2, from: [0, 0], to: [2, 7.44], etiket: "NaCl (i=2)", gizli: true },
            { id: "c", tip: "cizgi", renk: 3, from: [0, 0], to: [2, 11.16], etiket: "CaCl₂ (i=3)", gizli: true },
            { id: "pg", tip: "nokta", renk: 1, x: 1, y: 1.86, kilavuz: true, gizli: true },
            { id: "pn", tip: "nokta", renk: 1, x: 1, y: 3.72, kilavuz: true, gizli: true },
            { id: "pc", tip: "nokta", renk: 1, x: 1, y: 5.58, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Glikoz (i = 1): eğim = Kf = 1,86 °C·kg/mol. Derişim arttıkça alçalma orantılı artar.", goster: ["g"] },
            { metin: "NaCl (i = 2): eğim iki kat; aynı molalitede iki kat alçalır.", goster: ["n"] },
            { metin: "CaCl₂ (i = 3): eğim üç kat.", goster: ["c"] },
            { metin: "1 m'de alçalma: glikoz 1,86; NaCl 3,72; CaCl₂ 5,58 °C. ==Eğim = i × Kf.==", goster: ["pg", "pn", "pc"] }
          ] },
        { tip: "ornek", baslik: "1 molal çözeltilerin donma noktası", durum: "1 kg suda 1 mol glikoz, 1 mol NaCl ya da 1 mol CaCl₂ çözülüyor (Kf = 1,86). Donma noktalarını bul.", adimlar: [
            "Glikoz: ΔTf = 1 × 1,86 × 1 = 1,86 → donma noktası −1,86 °C.",
            "NaCl: ΔTf = 2 × 1,86 × 1 = 3,72 → −3,72 °C.",
            "CaCl₂: ΔTf = 3 × 1,86 × 1 = 5,58 → −5,58 °C.",
            "Kontrol: oranlar 1 : 2 : 3, yani i değerleriyle aynı ✓"
          ], sonuc: "−1,86 °C, −3,72 °C ve −5,58 °C." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Freezing point depression: ΔTf = i × Kf × m. At the same molality, CaCl₂ lowers the freezing point more than NaCl.*" }
          ] }
      ]
    },
    {
      baslik: "Çözeltileri karşılaştırmak: i × derişim",
      kisa: "Kıyaslarken her çözeltinin i × derişim değerini hesapla, sonra sırala.",
      bloklar: [
        { tip: "ornek", baslik: "Dört çözeltiyi sırala", durum: "Dört sulu çözelti, aynı sıcaklıkta ve 1 atm'de: I) 0,2 M AlCl₃, II) 0,2 M KCl, III) 0,3 M glikoz, IV) 0,15 M Na₂SO₄. a) Kaynama noktalarını, b) buhar basınçlarını, c) elektrik iletkenliklerini sırala. d) I'in kaynama noktası yükselmesi 2a ise diğerlerininki kaçtır?", adimlar: [
            "i × derişim: I = 4 × 0,2 = 0,8; II = 2 × 0,2 = 0,4; III = 1 × 0,3 = 0,3; IV = 3 × 0,15 = 0,45.",
            "a) Kaynama noktası: III < II < IV < I (i × derişim büyüdükçe yükselir).",
            "b) Buhar basıncı tersine: I < IV < II < III (çok tanecik, düşük buhar basıncı).",
            "c) İletkenlik iyon derişimiyle artar: I > IV > II > III (glikoz iyon vermez).",
            "d) Yükselme i × derişimle orantılı: II = 2a × 0,4 ÷ 0,8 = a; III = 0,75a; IV = 1,125a."
          ], sonuc: "a) III < II < IV < I  b) I < IV < II < III  c) I > IV > II > III  d) a, 0,75a, 1,125a." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Solution I contains the most particles per liter, so it has the lowest vapor pressure and the highest boiling point.*" }
          ] }
      ]
    },
    {
      baslik: "Faz diyagramı: üçlü nokta ve kritik nokta",
      kisa: "Faz diyagramı, basınç ve sıcaklığa göre maddenin hangi hâlde olduğunu gösterir.",
      bloklar: [
        { tip: "grafik", baslik: "CO₂ faz diyagramı (şematik)", xlabel: "Sıcaklık (şematik)", ylabel: "Basınç (şematik)", xmax: 10, ymax: 10,
          xticks: [], yticks: [],
          ogeler: [
            { id: "sg", tip: "egri", renk: 0, noktalar: [[0.2, 0.2], [1.5, 0.8], [3, 1.7], [4, 3]], gizli: true },
            { id: "sl", tip: "egri", renk: 3, noktalar: [[4, 3], [4.25, 5], [4.5, 7], [4.75, 9.5]], gizli: true },
            { id: "lg", tip: "egri", renk: 2, noktalar: [[4, 3], [5.5, 3.9], [7, 5.2], [8.5, 7]], gizli: true },
            { id: "kp", tip: "nokta", renk: 1, x: 8.5, y: 7, etiket: "kritik nokta", kilavuz: true, gizli: true },
            { id: "up", tip: "nokta", renk: 1, x: 4, y: 3, etiket: "üçlü nokta (5,1 atm)", kilavuz: true, gizli: true },
            { id: "atm", tip: "cizgi", renk: 1, kesik: true, from: [0, 1.3], to: [9.8, 1.3], gizli: true },
            { id: "atmt", tip: "yazi", x: 9.8, y: 1.9, metin: "1 atm", hiza: "end", gizli: true },
            { id: "kat", tip: "yazi", x: 1.4, y: 5.5, metin: "KATI", gizli: true },
            { id: "sivi", tip: "yazi", x: 6.6, y: 8.3, metin: "SIVI", gizli: true },
            { id: "gaz", tip: "yazi", x: 7.4, y: 2.5, metin: "GAZ", gizli: true }
          ],
          durumlar: [
            { metin: "Her eğri, iki hâlin dengede olduğu basınç–sıcaklık çiftleridir. Solda (düşük sıcaklık, yüksek basınç) katı, sağ altta (yüksek sıcaklık, düşük basınç) gaz, üstte ortada sıvı bölgesi.", goster: ["kat", "sivi", "gaz"] },
            { metin: "==Süblimleşme eğrisi== katı ile gaz arasında; ==erime/donma eğrisi== katı ile sıvı arasında; ==buharlaşma/yoğuşma eğrisi== sıvı ile gaz arasında.", goster: ["sg", "sl", "lg"] },
            { metin: "Üç eğri ==üçlü noktada== buluşur: katı, sıvı ve gaz birlikte bulunur. CO₂'de üçlü nokta 1 atm'in üstündedir (−56,6 °C, 5,1 atm).", goster: ["up"] },
            { metin: "1 atm'de sıvı bölgesine hiç girilmez: katı CO₂ doğrudan gaza geçer (−78,5 °C'de süblimleşir). Bu yüzden 'kuru buz'.", goster: ["atm", "atmt"] },
            { metin: "Buharlaşma eğrisi ==kritik noktada== biter (31 °C, 73 atm): bu sıcaklığın üstünde gaz sadece basınç artırılarak sıvılaştırılamaz.", goster: ["kp"] }
          ] },
        { tip: "tablo", baslik: "CO₂ ile suyun faz diyagramı", head: ["", "CO₂", "Su"], rows: [
            ["Üçlü nokta", "−56,6 °C ve 5,1 atm", "0,01 °C ve 0,006 atm"],
            ["Kritik nokta", "31 °C ve 73 atm", "374 °C ve 218 atm"],
            ["Erime eğrisinin eğimi", "sağa yatık (pozitif): basınç artınca erime noktası yükselir", "sola yatık (negatif): basınç artınca erime noktası düşer"],
            ["1 atm'de", "sıvı olmaz, süblimleşir", "buz erir, su kaynar"]
          ], not: "Suda katı sıvıdan az yoğundur (buz yüzer), bu yüzden basınç buzu eritebilir. Moleküller arası çekim güçlüyse kritik sıcaklık yüksektir." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz: üçlü nokta", metin: "*At the triple point, the solid, liquid and gas phases coexist in equilibrium.*" },
            { ikon: "💬", baslik: "Sınavda böyle yaz: kritik nokta", metin: "*Above the critical temperature, a gas cannot be liquefied by increasing the pressure alone.*" }
          ] }
      ]
    },
    {
      baslik: "Günlük hayat: yolda buzlanma ve antifriz",
      kisa: "Tuz buzun donma noktasını düşürür; sıcaklık bundan yüksekse buz erir.",
      bloklar: [
        { tip: "adimlar", baslik: "Yola tuz serpilince", adimlar: [
            { baslik: "İnce su filmi", metin: "Buzun yüzeyinde her zaman çok az sıvı su bulunur; tuz bu suda çözünür." },
            { baslik: "Donma noktası düşer", metin: "Tuzlu suyun donma noktası 0 °C'nin altındadır (ΔTf)." },
            { baslik: "Buz erir", metin: "Yol sıcaklığı bu yeni donma noktasından yüksekse buz çözeltiye karışarak erir." },
            { baslik: "Sınırı var", metin: "Çok soğukta (NaCl için yaklaşık −21 °C'nin altında) etki biter." }
          ] },
        { tip: "ornek", baslik: "Hangi sıcaklıkta tuz işe yarar?", durum: "Yüzeyde oluşan tuzlu su 1 molal NaCl'dür (ΔTf = 3,72 °C). Yol sıcaklığı −3 °C iken ve −5 °C iken ne olur?", adimlar: [
            "Çözeltinin donma noktası = −3,72 °C.",
            "Yol −3 °C: −3 > −3,72 → çözelti donmaz, buz erir.",
            "Yol −5 °C: −5 < −3,72 → çözelti de donar, buz erimez.",
            "−5 °C'de yoldaki çözelti daha derişik olmalıdır ya da başka bir yöntem gerekir."
          ], sonuc: "1 molal tuzlu su −3,72 °C'ye kadar sıvı kalır." },
        { tip: "liste", maddeler: [
            { ikon: "🚗", baslik: "Antifriz", metin: "Arabanın radyatör suyundaki antifriz (etilen glikol) donma noktasını düşürür, kaynama noktasını yükseltir." },
            { ikon: "🍦", baslik: "Dondurma", metin: "Buza tuz eklenince karışımın sıcaklığı 0 °C'nin çok altına iner; kap soğur." },
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Salt lowers the freezing point of water, so the ice on the road melts.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Colligative properties* yalnız tanecik sayısına bağlıdır: buhar basıncı ↓, kaynama noktası ↑, donma noktası ↓.",
            "Molalite m = n çözünen ÷ kg çözücü (mol/kg); molarite (M) ile karıştırma.",
            "*i* (van't Hoff): glikoz 1, NaCl 2, CaCl₂ 3, Al₂(SO₄)₃ 5; etkin derişim = i × m.",
            "ΔTb = i × Kb × m (Kb = 0,51); kaynama noktası = 100 + ΔTb.",
            "ΔTf = i × Kf × m (Kf = 1,86); donma noktası = 0 − ΔTf.",
            "Aynı derişimde i büyüdükçe donma noktası daha çok düşer, kaynama noktası daha çok yükselir.",
            "Çözeltileri karşılaştırırken i × derişim değerine bak: büyükse kaynama noktası yüksek, donma noktası düşük, buhar basıncı düşük, iletkenlik yüksektir.",
            "Faz diyagramında üçlü nokta üç hâlin birlikte bulunduğu, kritik noktanın üstünde gaz basınçla sıvılaşmayan noktadır; CO₂ 1 atm'de süblimleşir.",
            "Yola tuz serpilince buz erir; antifriz donma noktasını düşürür, kaynama noktasını yükseltir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which of the following aqueous solutions, prepared at the same temperature, has the lowest freezing point?",
      opts: ["0.1 m glucose", "0.1 m NaCl", "0.1 m CaCl₂", "0.1 m urea"], a: 2,
      why: "Aynı molalitede i değeri en büyük olan en çok alçalma yapar: CaCl₂ i = 3, NaCl i = 2, glikoz ve üre i = 1. Etkin derişim 0,3 m ile en büyük CaCl₂'dedir." },
    { q: "29.25 g of NaCl is dissolved in 1 kg of water (NaCl = 58.5 g/mol, Kf = 1.86 °C·kg/mol, i = 2). What is the approximate freezing point of the solution?",
      opts: ["−0.93 °C", "−1.86 °C", "−3.72 °C", "+1.86 °C"], a: 1,
      why: "n = 29,25 ÷ 58,5 = 0,5 mol; m = 0,5; ΔTf = 2 × 1,86 × 0,5 = 1,86 → donma noktası −1,86 °C. −0,93 °C (A) i = 1 alınırsa, −3,72 °C (C) molaliteyi 1 sanılırsa çıkar." },
    { q: "Three aqueous solutions are prepared (complete dissociation is assumed). According to the table, which one has the highest boiling point?",
      fig: { type: "table", head: ["Solution", "Solute", "Molality (m)"], rows: [["X", "glucose", "0.2"], ["Y", "NaCl", "0.1"], ["Z", "CaCl₂", "0.1"]], caption: "Three solutions" },
      opts: ["X, because it has the highest molality", "Y, because NaCl is the most common salt", "Z", "All three have the same boiling point"], a: 2,
      why: "Etkin derişim i × m: X = 1 × 0,2 = 0,2; Y = 2 × 0,1 = 0,2; Z = 3 × 0,1 = 0,3. En büyük Z'dir, kaynama noktası en yüksek de Z'dir. Yalnız m'ye bakmak (A) i'yi unutmaktır." },
    { q: "The graph shows the freezing point depression (ΔTf) of glucose, NaCl and CaCl₂ solutions plotted against molality. Which matching is correct?",
      fig: { type: "graph", xlabel: "m (mol/kg)", ylabel: "ΔTf (°C)", xmax: 3, ymax: 12, lines: [{ from: [0, 0], to: [2, 3.72], label: "X" }, { from: [0, 0], to: [2, 7.44], label: "Y" }, { from: [0, 0], to: [2, 11.16], label: "Z" }], points: [{ q: 1, p: 1.86, label: "1.86", guides: true }], xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 1.86, label: "1.86" }, { v: 7.44, label: "7.44" }, { v: 11.16, label: "11.16" }], caption: "ΔTf–m lines" },
      opts: ["X is glucose, Y is NaCl, Z is CaCl₂", "X is NaCl, Y is glucose, Z is CaCl₂", "X is CaCl₂, Y is NaCl, Z is glucose", "X, Y and Z are the same substance"], a: 0,
      why: "Eğim = i × Kf: X 1,86 (i = 1, glikoz), Y 3,72 (i = 2, NaCl), Z 5,58 (i = 3, CaCl₂). 1 m'de X'in ΔTf değeri 1,86'dır. İkinci şık eğimleri karıştırır." },
    { q: "A student adds 10 g of NaCl to 1 kg of water and boils it (NaCl = 58.5 g/mol, Kb = 0.51 °C·kg/mol, i = 2). Approximately how much does the boiling point of the water change?",
      opts: ["It does not change at all", "It increases by about 1.0 °C", "It decreases by about 0.17 °C", "It increases by about 0.17 °C"], a: 3,
      why: "m = 10 ÷ 58,5 ≈ 0,171; ΔTb = 2 × 0,51 × 0,171 ≈ 0,17 °C; kaynama noktası yükselir. 1,0 °C (B) tam 1 mol (58,5 g) tuz için bulunur; makarna suyundaki tuz çok azdır." }
  ]
};
