/* Kitora not defteri · ch104 · 1.4 Sıvıların Özellikleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 1) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch104",
  amac: "Bu konu sıvıların davranışını moleküller arası kuvvetlerle açıklıyor: buhar basıncı ve kaynama, kohezyon, adezyon ve menisküs, viskozite ve yüzey gerilimi. Bir sıvının neden öyle davrandığını kuvvetlerden çıkarmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Buharlaşma ve buhar basıncı",
      kisa: "Kapalı kapta buharlaşma ile yoğuşma dengelenince buharın yaptığı basınç buhar basıncıdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Kapalı kaptaki sıvı", adimlar: [
            { baslik: "Buharlaşma", metin: "Yüzeydeki enerjili moleküller sıvıdan kaçar; kabın boşluğunda buhar birikir ve basınç yapar." },
            { baslik: "Yoğuşma", metin: "Buhar molekülleri sıvı yüzeye çarpıp geri döner." },
            { baslik: "Denge", metin: "Buharlaşma hızı = yoğuşma hızı. İkisi de durmaz ama buhar basıncı artık değişmez (==dinamik denge==)." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💨", terim: "Vapor pressure", tr: "buhar basıncı", tanim: "Kapalı kapta, sıvı ile dengedeki buharın yaptığı basınç. Aynı sıcaklıkta sıvıya özgü bir değerdir.", ornek: "20 °C'de suyun buhar basıncı yaklaşık 2,3 kPa'dır." },
            { ikon: "🧴", terim: "Volatile liquid", tr: "uçucu sıvı", tanim: "Moleküller arası kuvvetleri zayıf, kolay buharlaşan ve buhar basıncı yüksek sıvı.", ornek: "Aseton, dietil eter." },
            { ikon: "🌫️", terim: "Evaporation", tr: "buharlaşma", tanim: "Her sıcaklıkta, yalnızca sıvının yüzeyinde olur; yüzeydeki moleküllerin bir kısmı gaza geçer.", ornek: "Çamaşırın kuruması." },
            { ikon: "🫕", terim: "Boiling", tr: "kaynama", tanim: "Buhar basıncı dış basınca eşit (P_buhar ≥ P_dış) olunca sıvının her yerinde kabarcık oluşur; moleküllerin çoğu gaza geçebilir. Yalnızca belirli bir sıcaklıkta olur.", ornek: "Çaydanlıktaki su 100 °C'de." }
          ] },
        { tip: "ikili", sol: { ikon: "🌬️", baslik: "Uçucu (yüksek buhar basıncı)", maddeler: ["Moleküller arası kuvvet zayıf", "Çabuk buharlaşır"] },
          sag: { ikon: "🍯", baslik: "Az uçucu (düşük buhar basıncı)", maddeler: ["Moleküller arası kuvvet güçlü", "Zor buharlaşır"] },
          oyun: [
            { metin: "Oje çıkarıcı aseton açıkta hızla kayboluyor.", cevap: "sol", neden: "Zayıf kuvvet, kolay buharlaşma." },
            { metin: "Gliserin açıkta haftalarca duruyor.", cevap: "sag", neden: "Çok sayıda hidrojen bağı: güçlü kuvvet." },
            { metin: "Dietil eter şişeden kısa sürede buharlaşıyor.", cevap: "sol", neden: "Hidrojen bağı yok, kuvvetler zayıf." },
            { metin: "Zeytinyağı bir fincanda günlerce eksilmiyor.", cevap: "sag", neden: "Büyük moleküller, güçlü London kuvvetleri." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tanım", metin: "*Vapor pressure is the pressure of the vapor in equilibrium with its liquid in a closed container.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: uçuculuk", metin: "*Liquids with weak intermolecular forces are volatile and have a high vapor pressure.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: buharlaşma ve kaynama", metin: "*Evaporation occurs at any temperature but only at the surface, whereas boiling occurs throughout the liquid when the vapor pressure equals the external pressure.*" }
          ] }
      ]
    },
    {
      baslik: "Buhar basıncını ne belirler?",
      kisa: "Sıvının cinsi ve sıcaklığı belirler; sıvı miktarı ve kap hacmi belirlemez.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Güçlü etkileşim", alt: "ör. H₂O" }, "→",
            { t: "Düşük buhar basıncı", alt: "zor buharlaşır" }, "→",
            { t: "Yüksek kaynama noktası", alt: "daha çok ısı gerekir" }
          ], aciklama: "Zayıf etkileşimde bu zincir tersine döner: yüksek buhar basıncı, düşük kaynama noktası." },
        { tip: "grafik", baslik: "Buhar basıncı eğrileri: eter, etanol, su", xlabel: "Sıcaklık (°C)", ylabel: "Buhar basıncı (kPa)", xmax: 11, ymax: 11,
          xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }, { v: 10, label: "100" }],
          yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "su", tip: "egri", renk: 0, noktalar: [[0, 0.06], [2, 0.23], [4, 0.74], [6, 1.99], [8, 4.74], [9, 7.01], [10, 10.13]] },
            { id: "sut", tip: "yazi", x: 7.2, y: 4.5, metin: "su" },
            { id: "et", tip: "egri", renk: 2, noktalar: [[0, 0.16], [2, 0.59], [4, 1.79], [6, 4.7], [7.84, 10.13]], gizli: true },
            { id: "ett", tip: "yazi", x: 5.1, y: 5.3, metin: "etanol", gizli: true },
            { id: "ee", tip: "egri", renk: 3, noktalar: [[0, 2.47], [2, 5.89], [3.46, 10.13]], gizli: true },
            { id: "eet", tip: "yazi", x: 1.1, y: 6.4, metin: "eter", gizli: true },
            { id: "atm", tip: "cizgi", renk: 1, kesik: true, from: [0, 10.13], to: [10.8, 10.13], gizli: true },
            { id: "atmt", tip: "yazi", x: 0.7, y: 10.65, metin: "1 atm", gizli: true },
            { id: "p1", tip: "nokta", renk: 3, x: 3.46, y: 10.13, gizli: true },
            { id: "p2", tip: "nokta", renk: 2, x: 7.84, y: 10.13, gizli: true },
            { id: "p3", tip: "nokta", renk: 0, x: 10, y: 10.13, gizli: true },
            { id: "k1", tip: "yazi", x: 3.46, y: 10.65, metin: "35 °C", gizli: true },
            { id: "k2", tip: "yazi", x: 7.84, y: 10.65, metin: "78 °C", gizli: true },
            { id: "k3", tip: "yazi", x: 10, y: 10.65, metin: "100 °C", gizli: true }
          ],
          durumlar: [
            { metin: "Su: sıcaklık arttıkça buhar basıncı artar; eğri giderek dikleşir." },
            { metin: "Aynı sıcaklıkta ==eter > etanol > su==. Eterin kuvvetleri en zayıf, suyun en güçlüdür (hidrojen bağı).", goster: ["et", "ett", "ee", "eet"] },
            { metin: "Dış basınç 1 atm iken her sıvı, buhar basıncı bu çizgiye ulaşınca kaynar.", goster: ["atm", "atmt"] },
            { metin: "Kaynama noktaları: eter 35 °C, etanol 78 °C, su 100 °C. ==Zayıf kuvvet → yüksek buhar basıncı → düşük kaynama noktası.==", goster: ["p1", "p2", "p3", "k1", "k2", "k3"] }
          ] },
        { tip: "tuzak", metin: "Kapta sıvı kaldığı sürece denge buhar basıncı yalnızca sıvıya ve sıcaklığa bağlıdır.", yanlis: "Kaba daha çok sıvı koyarsam ya da kabı büyütürsem buhar basıncı değişir.", dogru: "Sıvı miktarı ve kap hacmi buhar basıncını ==değiştirmez==. Yalnızca sıvının cinsi (moleküller arası kuvvet) ve sıcaklık değiştirir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: karşılaştırma", metin: "*Ether has a higher vapor pressure than water at the same temperature because its intermolecular forces are weaker.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: sıcaklık", metin: "*Vapor pressure increases as temperature increases because more molecules have enough energy to escape.*" }
          ] }
      ]
    },
    {
      baslik: "Kaynama noktası ve yükseklik",
      kisa: "Sıvı, buhar basıncı dış basınca eşit olunca kaynar; yükseklikte basınç düşer, kaynama noktası düşer.",
      bloklar: [
        { tip: "grafik", baslik: "Suyun buhar basıncı eğrisi ve dış basınç", xlabel: "Sıcaklık (°C)", ylabel: "Basınç (kPa)", xmax: 13, ymax: 21,
          xticks: [{ v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }, { v: 10, label: "100" }, { v: 12, label: "120" }],
          yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }, { v: 15, label: "150" }, { v: 20, label: "200" }],
          ogeler: [
            { id: "su", tip: "egri", renk: 0, noktalar: [[0, 0.06], [2, 0.23], [4, 0.74], [6, 1.99], [7, 3.12], [8, 4.74], [9, 7.01], [10, 10.13], [11, 14.33], [12, 19.85]] },
            { id: "d1", tip: "cizgi", renk: 1, kesik: true, from: [0, 10.13], to: [12.5, 10.13], gizli: true },
            { id: "n1", tip: "nokta", renk: 3, x: 10, y: 10.13, kilavuz: true, gizli: true },
            { id: "t1", tip: "yazi", x: 9.0, y: 11.0, metin: "100 °C", gizli: true },
            { id: "d2", tip: "cizgi", renk: 1, kesik: true, from: [0, 7.0], to: [12.5, 7.0], gizli: true },
            { id: "n2", tip: "nokta", renk: 3, x: 9, y: 7.01, kilavuz: true, gizli: true },
            { id: "t2", tip: "yazi", x: 8.0, y: 7.9, metin: "90 °C", gizli: true },
            { id: "d3", tip: "cizgi", renk: 1, kesik: true, from: [0, 3.3], to: [12.5, 3.3], gizli: true },
            { id: "n3", tip: "nokta", renk: 3, x: 7.1, y: 3.3, kilavuz: true, gizli: true },
            { id: "t3", tip: "yazi", x: 6.0, y: 4.2, metin: "≈ 71 °C", gizli: true },
            { id: "d4", tip: "cizgi", renk: 1, kesik: true, from: [0, 19.85], to: [12.5, 19.85], gizli: true },
            { id: "n4", tip: "nokta", renk: 3, x: 12, y: 19.85, kilavuz: true, gizli: true },
            { id: "t4", tip: "yazi", x: 10.9, y: 18.8, metin: "120 °C", gizli: true }
          ],
          durumlar: [
            { metin: "Sıvı, ==buhar basıncı dış basınca eşit== olunca kaynar. Bu eğri suyun buhar basıncı; dış basıncı değiştirince kaynama noktası nereye kayıyor, bakalım." },
            { metin: "Deniz seviyesi, dış basınç 1 atm (101 kPa): eğri bu çizgiye 100 °C'de ulaşır. Bu, ==normal kaynama noktasıdır.==", goster: ["d1", "n1", "t1"] },
            { metin: "Yaklaşık 3000 m yükseklikte dış basınç ≈ 70 kPa: su ==90 °C'de== kaynar.", goster: ["d2", "n2", "t2"] },
            { metin: "Everest zirvesinde dış basınç ≈ 33 kPa: su yaklaşık ==71 °C'de== kaynar.", goster: ["d3", "n3", "t3"] },
            { metin: "Düdüklü tencerede basınç ≈ 2 atm (≈ 200 kPa): su ==120 °C'de== kaynar. Dış basınç arttıkça kaynama noktası artar.", goster: ["d4", "n4", "t4"] }
          ] },
        { tip: "ornek", baslik: "Dağ evinde su kaç derecede kaynar?", durum: "Bir dağ evinde dış basınç 47 kPa. Suyun buhar basıncı 70 °C'de 31 kPa, 80 °C'de 47 kPa, 90 °C'de 70 kPa'dır. Su kaç °C'de kaynar?",
          adimlar: ["Kaynama koşulu: buhar basıncı = dış basınç.", "Dış basınç 47 kPa. Suyun buhar basıncı 47 kPa olan sıcaklığı tablodan oku: 80 °C."], sonuc: "Su ==80 °C'de== kaynar; deniz seviyesindeki 100 °C'den 20 °C düşük." },
        { tip: "tuzak", metin: "Kaynayan suyun sıcaklığı basınca göre değişir. Bu yüzden dağda yemek geç pişer.", yanlis: "Su her yerde kaynarken 100 °C'dedir.", dogru: "100 °C yalnızca 1 atm'de geçerlidir. Yükseklikte su daha düşük sıcaklıkta kaynar; sıcaklık düşük olduğu için yemek ==geç pişer.==" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kaynama koşulu", metin: "*A liquid boils when its vapor pressure equals the external pressure.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: yükseklik", metin: "*At higher altitude the atmospheric pressure is lower, so water boils at a lower temperature.*" },
            { ikon: "📏", baslik: "Birimler", metin: "Normal kaynama noktası, buhar basıncının 1 atm = 760 mmHg = 760 torr = 76 cmHg ≈ 101,3 kPa olduğu sıcaklıktır. Suyun normal kaynama noktası 100 °C'dir." }
          ] }
      ]
    },
    {
      baslik: "Kohezyon, adezyon ve menisküs",
      kisa: "Sıvı kendi moleküllerini mi (kohezyon) yoksa kabı mı (adezyon) daha çok çekiyor?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🫧", terim: "Cohesion", tr: "kohezyon", tanim: "Aynı cins moleküllerin birbirini çekmesi.", ornek: "Su damlasının yuvarlak kalması (sudaki hidrojen bağları)." },
            { ikon: "🧪", terim: "Adhesion", tr: "adezyon", tanim: "Farklı cins moleküllerin (sıvı ile kap) birbirini çekmesi.", ornek: "Suyun cam çeperine ya da çam iğnesine yapışması." },
            { ikon: "🌙", terim: "Meniscus", tr: "menisküs", tanim: "Dar bir tüpte sıvı yüzeyinin eğriliği: adezyon > kohezyon ise kenarlar yukarı kıvrılır (içbükey, konkav); kohezyon > adezyon ise aşağıda kalır (dışbükey, konveks).", ornek: "Mezürde suyun kenarlardan yukarı kıvrılması." },
            { ikon: "🧻", terim: "Capillary action", tr: "kılcallık", tanim: "Sıvının dar bir tüpte kendiliğinden yükselmesi ya da alçalması; adezyon ve kohezyonun dengesinden doğar. Tüp daraldıkça etki artar.", ornek: "Bitkilerde suyun ve minerallerin yukarı çıkması; kâğıt havlunun suyu emmesi." }
          ] },
        { tip: "grafik", baslik: "Cam tüpte sıvı yüzeyinin şekli", xlabel: "Tüp kesiti", ylabel: "Yüzey yüksekliği", xmax: 10, ymax: 10,
          xticks: [], yticks: [],
          ogeler: [
            { id: "d1", tip: "cizgi", renk: 1, from: [1, 0], to: [1, 10] },
            { id: "d2", tip: "cizgi", renk: 1, from: [9, 0], to: [9, 10] },
            { id: "su", tip: "egri", renk: 0, noktalar: [[1, 6], [1.5, 4.2], [2.5, 3], [5, 2.5], [7.5, 3], [8.5, 4.2], [9, 6]], gizli: true },
            { id: "sut", tip: "yazi", x: 5, y: 7.6, metin: "su: içbükey (konkav)", gizli: true },
            { id: "cv", tip: "egri", renk: 3, noktalar: [[1, 2.6], [1.5, 4.2], [2.5, 5.4], [5, 6], [7.5, 5.4], [8.5, 4.2], [9, 2.6]], gizli: true },
            { id: "cvt", tip: "yazi", x: 5, y: 8.3, metin: "cıva: dışbükey (konveks)", gizli: true }
          ],
          durumlar: [
            { metin: "İki dik çizgi cam tüpün çeperi. İçine önce su, sonra cıva koyacağız." },
            { metin: "Su cama kendi kendine olduğundan daha çok çekilir: ==adezyon > kohezyon==. Kenarlar yukarı çekilir, yüzey içbükey olur.", goster: ["su", "sut"] },
            { metin: "Cıva kendi atomlarını cama göre çok daha güçlü çeker: ==kohezyon > adezyon==. Orta yüksek kalır, yüzey dışbükey olur.", gizle: ["su", "sut"], goster: ["cv", "cvt"] }
          ] },
        { tip: "ikili", sol: { ikon: "🥛", baslik: "Konkav menisküs", maddeler: ["Adezyon > kohezyon", "Kılcal tüpte sıvı yükselir (su–cam)"] },
          sag: { ikon: "🪞", baslik: "Konveks menisküs", maddeler: ["Kohezyon > adezyon", "Kılcal tüpte sıvı alçalır (cıva–cam)"] },
          oyun: [
            { metin: "Cam tüpteki su", cevap: "sol", neden: "Su cama yapışır: konkav." },
            { metin: "Cam tüpteki cıva", cevap: "sag", neden: "Cıva kendi atomlarına daha çok bağlı: konveks." },
            { metin: "Sıvının kenarları çeperden yukarı çekilmiş.", cevap: "sol", neden: "Adezyon baskın." },
            { metin: "Sıvı, kılcal tüpte dış seviyenin altına iniyor.", cevap: "sag", neden: "Kohezyon baskın: cıva gibi." },
            { metin: "Kılcal tüpte sıvı dış seviyenin üstüne çıkıyor.", cevap: "sol", neden: "Adezyon baskın: su gibi." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: konkav", metin: "*Water forms a concave meniscus in a glass tube because adhesion to the glass is stronger than cohesion.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: konveks", metin: "*Mercury forms a convex meniscus because cohesion is stronger than adhesion to the glass.*" }
          ] }
      ]
    },
    {
      baslik: "Viskozite",
      kisa: "Viskozite akmaya karşı dirençtir; kuvvet güçlendikçe artar, sıcaklık artınca azalır.",
      bloklar: [
        { tip: "grafik", baslik: "Suyun viskozitesi sıcaklıkla azalır", xlabel: "Sıcaklık (°C)", ylabel: "Viskozite (mPa·s)", xmax: 11, ymax: 2,
          xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }, { v: 10, label: "100" }],
          yticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1,0" }, { v: 1.5, label: "1,5" }],
          ogeler: [
            { id: "v", tip: "egri", renk: 0, noktalar: [[0, 1.79], [2, 1.0], [4, 0.65], [6, 0.47], [8, 0.355], [10, 0.28]] },
            { id: "p0", tip: "nokta", renk: 3, x: 0, y: 1.79, etiket: "0 °C: 1,79", gizli: true },
            { id: "p1", tip: "nokta", renk: 2, x: 10, y: 0.28, etiket: "100 °C: 0,28", gizli: true }
          ],
          durumlar: [
            { metin: "==Viskozite (*viscosity*)== sıvının akmaya karşı direncidir: bal çok viskoz, su azdır. Eğri suyun viskozitesi." },
            { metin: "Soğuk suda moleküller yavaştır, moleküller arası kuvvetler kayma hareketini zorlaştırır: 0 °C'de 1,79 mPa·s.", goster: ["p0"] },
            { metin: "100 °C'de moleküllerin kinetik enerjisi büyük, kuvvetler kolay yenilir: 0,28 mPa·s, yani yaklaşık ==6 kat azalma.==", goster: ["p1"] }
          ] },
        { tip: "tablo", baslik: "Moleküller arası kuvvet viskoziteyi belirler (20 °C)", head: ["Sıvı", "Yapı ve kuvvet", "Viskozite (mPa·s)"], rows: [
            ["Hekzan C₆H₁₄", "Apolar, yalnızca London", "≈ 0,3"],
            ["Su", "Hidrojen bağı", "≈ 1,0"],
            ["Etanol", "O–H var, hidrojen bağı", "≈ 1,2"],
            ["Gliserin", "Üç O–H grubu, çok sayıda hidrojen bağı", "≈ 1400"]
          ], not: "Hekzanın mol kütlesi sudan büyüktür ama yalnızca zayıf London kuvvetleri olduğu için çok daha akışkandır." },
        { tip: "tuzak", metin: "Yağ suda yüzer (yoğunluğu az) ama sudan çok daha viskozdur.", yanlis: "Viskozitesi yüksek sıvı, yoğunluğu da yüksek olan sıvıdır.", dogru: "==Viskozite== akmaya direnç, ==yoğunluk== hacim başına kütledir; ikisi birbirinden bağımsızdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: sıcaklık", metin: "*Viscosity decreases as temperature increases because the molecules have more kinetic energy to overcome intermolecular forces.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: karşılaştırma", metin: "*Glycerol is more viscous than water because it forms more hydrogen bonds.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: etanol ve dimetil eter", metin: "*Ethanol (C₂H₅OH) is more viscous than dimethyl ether (CH₃OCH₃) because ethanol molecules form hydrogen bonds, which dimethyl ether cannot.*" }
          ] }
      ]
    },
    {
      baslik: "Yüzey gerilimi",
      kisa: "Yüzey molekülleri içe çekilir; bu yüzden yüzey ince bir zar gibi davranır.",
      bloklar: [
        { tip: "adimlar", baslik: "Yüzeydeki molekülün durumu", adimlar: [
            { baslik: "İçteki molekül", metin: "Her yönden komşular çeker; bileşke kuvvet sıfırdır." },
            { baslik: "Yüzeydeki molekül", metin: "Üstünde komşu yok; yalnızca yanlar ve alttan çekilir, net kuvvet içe doğrudur." },
            { baslik: "Sonuç: yüzey gerilimi", metin: "Yüzey, alanını en küçük tutmak ister (damla küresi). ==Yüzey gerilimi (*surface tension*)== yüzeyi genişletmenin enerji bedelidir; su sineği ve toplu iğne bu zarın üstünde durabilir." }
          ] },
        { tip: "grafik", baslik: "Suyun yüzey gerilimi sıcaklıkla azalır", xlabel: "Sıcaklık (°C)", ylabel: "Yüzey gerilimi (mN/m)", xmax: 11, ymax: 8,
          xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }, { v: 10, label: "100" }],
          yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "g", tip: "egri", renk: 0, noktalar: [[0, 7.56], [2, 7.28], [4, 6.96], [6, 6.62], [8, 6.26], [10, 5.89]] },
            { id: "p20", tip: "nokta", renk: 3, x: 2, y: 7.28, etiket: "20 °C: 72,8", gizli: true },
            { id: "sb", tip: "ok", renk: 2, from: [2, 7.0], to: [2, 3.2], gizli: true },
            { id: "sbt", tip: "yazi", x: 3.9, y: 3.6, metin: "+ sabun ≈ 30", gizli: true }
          ],
          durumlar: [
            { metin: "Suyun yüzey gerilimi çok yüksektir (hidrojen bağları). Eğri sıcaklıkla değişimini gösteriyor." },
            { metin: "20 °C'de yaklaşık ==72,8 mN/m.== Etanolde (≈ 22) ve hekzanda (≈ 18) çok daha düşüktür.", goster: ["p20"] },
            { metin: "Isındıkça moleküller kuvvetlerin etkisinden kurtulur: 100 °C'de yaklaşık 59 mN/m. ==Sıcaklık arttıkça yüzey gerilimi azalır.==" },
            { metin: "Sabun ya da deterjan suyun yüzey gerilimini ==yaklaşık 30'a düşürür==; yüzey zarı zayıflar, su kumaşa ve yağa girer.", goster: ["sb", "sbt"] }
          ] },
        { tip: "tuzak", metin: "Sabunlu suda böcek batar, kabarcık kolay oluşur: yüzey zarı zayıflar.", yanlis: "Sabun suyun yüzey gerilimini artırır.", dogru: "Sabun ve deterjan (yüzey aktif maddeler) yüzey gerilimini ==azaltır.==" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: neden", metin: "*Surface tension is caused by the net inward pull on molecules at the surface of a liquid.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: su ve sabun", metin: "*Water has a high surface tension because of hydrogen bonds, and soap lowers it.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Buhar basıncı: kapalı kapta sıvı ile dengedeki buharın basıncı; buharlaşma hızı = yoğuşma hızı.",
            "Buhar basıncı yalnızca sıvıya (kuvvet) ve sıcaklığa bağlıdır; miktar ve kap hacmi etkilemez.",
            "Zayıf kuvvet → yüksek buhar basıncı → düşük kaynama noktası. Güçlü kuvvet (hidrojen bağı) → tersi.",
            "Sıvı, buhar basıncı dış basınca eşit olunca kaynar (her yerinde kabarcık); buharlaşma ise her sıcaklıkta yalnızca yüzeyde olur. Yükseklikte kaynama noktası düşer (≈ 3000 m'de 90 °C); düdüklü tencerede artar.",
            "Kohezyon: aynı cins molekül çekimi; adezyon: sıvı–kap çekimi. Su cam tüpte konkav (adezyon > kohezyon), cıva konveks (kohezyon > adezyon).",
            "Kılcallık: dar tüpte sıvı yükselir (su) ya da alçalır (cıva); tüp daraldıkça etki artar.",
            "Viskozite akmaya direnç; güçlü kuvvet ve çok hidrojen bağı artırır, sıcaklık artınca azalır. Viskozite yoğunluk değildir.",
            "Yüzey gerilimi: yüzey moleküllerinin içe çekilmesi; sıcaklık ve sabun azaltır, güçlü kuvvet (su, cıva) artırır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "The table gives the vapor pressures of three liquids at 25 °C. Which liquid has the weakest intermolecular forces and the lowest normal boiling point?",
      fig: { type: "table", caption: "Vapor pressure at 25 °C", head: ["Liquid", "X", "Y", "Z"], rows: [["Vapor pressure (kPa)", "71", "7.9", "3.2"]] },
      opts: ["X, because it has the highest vapor pressure", "Y, because its vapor pressure is in the middle", "Z, because it has the lowest vapor pressure", "All three have the same normal boiling point"],
      a: 0,
      why: "Aynı sıcaklıkta buhar basıncı en yüksek olan sıvı en uçucudur: kuvvetleri en zayıf ve normal kaynama noktası en düşüktür. C en çekici yanlış şık: düşük buhar basıncı güçlü kuvvete, yani yüksek kaynama noktasına işaret eder." },
    { q: "The table gives the vapor pressure of water. At what temperature does water boil in a mountain cabin where the external pressure is 47 kPa?",
      fig: { type: "table", caption: "Vapor pressure of water", head: ["Temperature (°C)", "70", "80", "90", "100"], rows: [["Vapor pressure (kPa)", "31", "47", "70", "101"]] },
      opts: ["70 °C", "80 °C", "90 °C", "100 °C"],
      a: 1,
      why: "Su, buhar basıncı dış basınca eşit olunca kaynar: 47 kPa → 80 °C. D en çekici yanlış şık: 100 °C yalnızca 1 atm'de (101 kPa) geçerlidir." },
    { q: "In a glass tube, water forms a concave surface while mercury forms a convex surface. What is the reason for this?",
      opts: ["Adhesion is greater than cohesion in both liquids", "Cohesion dominates in water and adhesion dominates in mercury", "Adhesion is greater than cohesion in mercury", "In mercury, cohesion is greater than adhesion to the glass; in water, adhesion is greater than cohesion"],
      a: 3,
      why: "Su cama kendi kendine olduğundan daha çok çekilir (adezyon > kohezyon): konkav. Cıva kendi atomlarını cama göre daha güçlü çeker (kohezyon > adezyon): konveks. B en çekici yanlış şık: ikisini yer değiştirir." },
    { q: "Hexane (nonpolar, only London forces), water (hydrogen bonds) and glycerol (three O–H groups, many hydrogen bonds) are compared at 20 °C. What is the order of their viscosities?",
      opts: ["Glycerol < water < hexane", "Water < hexane < glycerol", "Hexane < water < glycerol", "Hexane < glycerol < water"],
      a: 2,
      why: "Moleküller arası kuvvet ve hidrojen bağı sayısı arttıkça viskozite artar: hekzan < su < gliserin. B en çekici yanlış şık: hekzanın mol kütlesine bakıp onu sudan daha viskoz sanır." },
    { q: "A water strider standing on the surface of water sinks when detergent is added to the water. What is the reason for this?",
      opts: ["Detergent increases the surface tension of water", "Detergent lowers the surface tension of water, so the surface can no longer support the insect", "Detergent increases the density of water", "Detergent reduces the vapor pressure of water to zero"],
      a: 1,
      why: "Sıvının yüzey gerilimi yüzeydeki net içe çekimden gelir; deterjan bunu azaltır ve zar zayıflar. A en çekici yanlış şık: yönü tersine çevirir." }
  ]
};
