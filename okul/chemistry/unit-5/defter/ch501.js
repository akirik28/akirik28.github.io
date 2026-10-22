/* Kitora not defteri · ch501 · 5.1 Çözünme ve Çözünürlük
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 4: çözünme, çözünürlük, doygunluk, elektrolitler, çözünürlük grafikleri). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch501",
  amac: "Bu konu *solution* yani çözeltinin nasıl oluştuğunu anlatıyor: çözünenin ve çözücünün rolü, çözünmenin enerjisi, \"benzer benzeri çözer\" kuralı ve elektrolitler. *Solubility* eğrisini okuyup doymamış, doymuş ve aşırı doymuş çözeltiyi ayırt etmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Çözelti, çözünen, çözücü",
      kisa: "Çözelti, çözünenin çözücüde her yerde aynı dağıldığı homojen karışımdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧂", terim: "Solute", tr: "çözünen", tanim: "Çözeltide çözücü içinde dağılan madde; genellikle az olan bileşendir.", ornek: "Tuzlu suda tuz, şekerli çayda şeker." },
            { ikon: "💧", terim: "Solvent", tr: "çözücü", tanim: "Çözüneni dağıtan ve genellikle çok olan bileşen. Çözeltinin fiziksel hâlini belirler.", ornek: "Tuzlu suda su." },
            { ikon: "🔩", terim: "Alloy", tr: "alaşım", tanim: "Bir metalin başka bir elementle oluşturduğu katı çözelti.", ornek: "Pirinç (Cu + Zn), bronz (Cu + Sn), çelik (Fe + C)." }
          ] },
        { tip: "tablo", baslik: "Çözelti türleri", head: ["Çözünen – çözücü", "Örnek", "Çözeltinin hâli"], rows: [
            ["gaz – gaz", "hava (N₂, O₂ ve diğerleri)", "gaz"],
            ["gaz – sıvı", "gazoz (CO₂ suda)", "sıvı"],
            ["sıvı – sıvı", "kolonya (etanol + su)", "sıvı"],
            ["katı – sıvı", "tuzlu su, şekerli çay", "sıvı"],
            ["katı – katı", "pirinç, bronz, çelik (alaşım)", "katı"]
          ], not: "Çözelti homojendir: her yerinden alınan örnekte bileşim aynıdır." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*A solution is a homogeneous mixture of a solute dissolved in a solvent.*" },
            { ikon: "💬", baslik: "Alaşım", metin: "*An alloy is a solid solution of a metal with other elements.*" }
          ] }
      ]
    },
    {
      baslik: "Çözünmenin enerjisi: endotermik ve ekzotermik",
      kisa: "Çözünme, taneciklerin ayrılması ve yeni etkileşimlerin enerji dengesine bağlıdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Çözünme üç basamakta", adimlar: [
            { baslik: "Çözünen tanecikler ayrılır", metin: "Çözünenin kendi tanecikleri arasındaki bağlar kırılır: enerji ==gerekir (+)==." },
            { baslik: "Çözücü tanecikleri açılır", metin: "Çözücü molekülleri arası etkileşimler zayıflar: enerji ==gerekir (+)==." },
            { baslik: "Yeni etkileşimler kurulur", metin: "Çözünen–çözücü etkileşimleri oluşur: enerji ==açığa çıkar (−)==." },
            { baslik: "Toplamı belirler", metin: "Verilen enerji fazlaysa çözünme endotermik, açığa çıkan fazlaysa ekzotermiktir." }
          ] },
        { tip: "ikili", sol: { ikon: "🧊", baslik: "Endotermik çözünme", maddeler: ["Ortamdan ısı alır, sıcaklık düşer", "Örnek: NH₄NO₃ (soğuk kompres)"] },
          sag: { ikon: "🔥", baslik: "Ekzotermik çözünme", maddeler: ["Ortama ısı verir, sıcaklık artar", "Örnek: NaOH, CaCl₂ (el ısıtıcı)"] },
          oyun: [
            { metin: "Tuz çözününce beherin dibi buz gibi oldu.", cevap: "sol", neden: "Isı çözeltiye geçti: sıcaklık düştü, endotermik." },
            { metin: "NaOH suda çözünürken beher ısındı.", cevap: "sag", neden: "Açığa ısı çıktı: ekzotermik." },
            { metin: "Taneciklerin ayrılması için gereken enerji, yeni etkileşimlerin verdiğinden fazladır.", cevap: "sol", neden: "Net olarak enerji alınır: endotermik." },
            { metin: "Yeni çözünen–çözücü etkileşimleri daha çok enerji açığa çıkarır.", cevap: "sag", neden: "Net olarak enerji verilir: ekzotermik." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The dissolving of ammonium nitrate is endothermic because the temperature of the solution decreases.*" }
          ] }
      ]
    },
    {
      baslik: "Benzer benzeri çözer",
      kisa: "Polar maddeler polar çözücüde, apolar maddeler apolar çözücüde çözünür.",
      bloklar: [
        { tip: "tablo", baslik: "Çözünür mü?", head: ["Çözünen", "Çözücü", "Sonuç", "Neden"], rows: [
            ["NaCl (iyonik)", "su (polar)", "çözünür", "iyon–dipol çekimi"],
            ["Şeker (polar)", "su (polar)", "çözünür", "hidrojen bağı"],
            ["Etanol (polar)", "su (polar)", "çözünür", "hidrojen bağı"],
            ["Naftalin (apolar)", "benzen (apolar)", "çözünür", "London kuvvetleri"],
            ["Zeytinyağı (apolar)", "su (polar)", "çözünmez", "farklı türde etkileşimler"],
            ["Şeker (polar)", "benzin (apolar)", "çözünmez", "çözücü iyonik/polar bağları kıramaz"]
          ], not: "Benzer benzeri çözer: aynı tür kuvvetler çözünen ve çözücü arasında da kurulabiliyorsa çözünme olur (*like dissolves like*)." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Çözünür", maddeler: ["Aynı türden (polar–polar ya da apolar–apolar)", "Yeni etkileşimler kurulabilir"] },
          sag: { ikon: "❌", baslik: "Çözünmez (karışmaz)", maddeler: ["Farklı türden (polar–apolar)", "Yeni etkileşim zayıf kalır"] },
          oyun: [
            { metin: "Sofra tuzu – su", cevap: "sol", neden: "İyonik madde polar suda iyon–dipol etkileşimleriyle çözünür." },
            { metin: "Zeytinyağı – su", cevap: "sag", neden: "Apolar yağ ile polar su karışmaz." },
            { metin: "Naftalin – benzen", cevap: "sol", neden: "İkisi de apolar." },
            { metin: "Şeker – benzin", cevap: "sag", neden: "Polar şeker, apolar benzinde çözünmez." },
            { metin: "Etanol – su", cevap: "sol", neden: "İkisi de polar, hidrojen bağı kurar." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Like dissolves like: polar substances dissolve in polar solvents and non-polar substances in non-polar solvents.*" }
          ] }
      ]
    },
    {
      baslik: "İyonik çözünme ve elektrolitler",
      kisa: "Elektrolit suda iyon verir ve elektriği iletir; elektrolit olmayan iletmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Electrolyte", tr: "elektrolit", tanim: "Suda çözününce iyonlara ayrışan ve çözeltiyi elektriği iletir yapan madde. Örneğin NaCl → Na⁺ + Cl⁻.", ornek: "Tuzlu su, asit çözeltisi (HCl)." },
            { ikon: "🍬", terim: "Non-electrolyte", tr: "elektrolit olmayan", tanim: "Suda moleküller halinde çözünür, iyon vermez; çözelti elektriği iletmez.", ornek: "Şekerli su, etanol çözeltisi." }
          ] },
        { tip: "ikili", sol: { ikon: "⚡", baslik: "Elektrolit", maddeler: ["NaCl, CaCl₂, KNO₃, HCl", "İyonlar serbest: akım iletir"] },
          sag: { ikon: "🍬", baslik: "Elektrolit değil", maddeler: ["Şeker, glikoz, etanol, üre", "Yalnızca moleküller: akım iletmez"] },
          oyun: [
            { metin: "Tuzlu su ampulü yakar.", cevap: "sol", neden: "Na⁺ ve Cl⁻ iyonları akımı taşır." },
            { metin: "Şekerli su ampulü yakmaz.", cevap: "sag", neden: "Şeker molekül halinde çözünür, iyon oluşmaz." },
            { metin: "HCl suda H⁺ ve Cl⁻ iyonları verir.", cevap: "sol", neden: "Moleküler olmasına rağmen suda iyonlaşır: elektrolittir." },
            { metin: "Etanol suda tamamen molekül halindedir.", cevap: "sag", neden: "Etanol iyon vermez." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Ionic compounds dissociate into ions in water, so their solutions conduct electricity.*" },
            { ikon: "💬", baslik: "Karşılaştır", metin: "*Sugar dissolves as molecules, so its solution does not conduct electricity.*" }
          ] }
      ]
    },
    {
      baslik: "Çözünürlük ve doygunluk",
      kisa: "Çözünürlük eğrisi, her sıcaklıkta çözünebilen en çok madde miktarını gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Solubility", tr: "çözünürlük", tanim: "Belirli sıcaklıkta 100 g suda çözünebilen en çok madde miktarı (g/100 g su).", ornek: "60 °C'de A tuzu için 55 g/100 g su." },
            { ikon: "✅", terim: "Saturated solution", tr: "doymuş çözelti", tanim: "O sıcaklıkta çözebileceği en çok maddeyi çözmüş çözelti; ==eğri üzerindeki== nokta.", ornek: "60 °C'de 100 g suda 55 g A tuzu." },
            { ikon: "🥄", terim: "Unsaturated solution", tr: "doymamış çözelti", tanim: "Daha fazla madde çözebilen çözelti; eğrinin ==altındaki== nokta.", ornek: "60 °C'de 100 g suda 30 g A tuzu." },
            { ikon: "⚠️", terim: "Supersaturated solution", tr: "aşırı doymuş çözelti", tanim: "Normalde çözünebileceğinden fazla madde taşıyan kararsız çözelti; eğrinin ==yukarısındaki== nokta. Dokunulunca fazlası çöker.", ornek: "60 °C'de 100 g suda 75 g A tuzu (özel hazırlanırsa)." }
          ] },
        { tip: "grafik", baslik: "A tuzunun çözünürlük eğrisi (hayalî sayılarla)", xlabel: "Sıcaklık (°C)", ylabel: "Çözünürlük (g / 100 g su)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
          yticks: [{ v: 2, label: "20" }, { v: 3.5, label: "35" }, { v: 5.5, label: "55" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[0, 1], [2, 2], [4, 3.5], [6, 5.5], [8, 8], [9, 9.6]], etiket: "A tuzu", gizli: true },
            { id: "pd", tip: "nokta", renk: 2, x: 6, y: 3, etiket: "doymamış", kilavuz: true, gizli: true },
            { id: "pg", tip: "nokta", renk: 1, x: 6, y: 5.5, etiket: "doygun", kilavuz: true, gizli: true },
            { id: "pa", tip: "nokta", renk: 3, x: 6, y: 7.5, etiket: "aşırı doymuş", kilavuz: true, gizli: true },
            { id: "p80", tip: "nokta", renk: 1, x: 8, y: 8, etiket: "80 °C", kilavuz: true, gizli: true },
            { id: "ok1", tip: "ok", renk: 1, from: [7.8, 8], to: [4.3, 8], gizli: true },
            { id: "p40", tip: "nokta", renk: 3, x: 4, y: 8, etiket: "40 °C · 80 g", gizli: true },
            { id: "ok2", tip: "ok", renk: 3, from: [4, 7.7], to: [4, 3.8], gizli: true },
            { id: "yz", tip: "yazi", x: 4.2, y: 5.8, metin: "45 g çöker", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Sıcaklık arttıkça A tuzunun çözünürlüğü artıyor (çoğu katıda böyledir).", goster: ["e"] },
            { metin: "==Eğri üzerindeki== nokta doygun: 60 °C'de 100 g suda 55 g A tuzu çözünür.", goster: ["pg"] },
            { metin: "Eğrinin ==altındaki== nokta doymamış: 60 °C'de 30 g çözünmüş; daha 25 g çözebilir.", goster: ["pd"] },
            { metin: "Eğrinin ==yukarısındaki== nokta aşırı doymuş: 75 g, çözebileceğinden 20 g fazla; kararsızdır.", goster: ["pa"] },
            { metin: "80 °C'de doygun çözelti (80 g / 100 g su) soğutulmaya başlanıyor.", gizle: ["pd", "pg", "pa"], goster: ["p80", "ok1"] },
            { metin: "40 °C'de çözünürlük 35 g; fazla 80 − 35 = 45 g tuz kristal olarak çöker.", goster: ["p40", "ok2", "yz"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The point on the curve shows a saturated solution; a point below the curve is unsaturated.*" },
            { ikon: "💬", baslik: "Soğutunca", metin: "*When the saturated solution is cooled, the excess solute crystallizes out.*" }
          ] }
      ]
    },
    {
      baslik: "Soğutunca çöken tuz; derişik ve seyreltik",
      kisa: "Soğuyan doygun çözeltide, çözünürlük farkı kadar madde çöker.",
      bloklar: [
        { tip: "ornek", baslik: "Doygun çözeltiyi soğutmak", durum: "A tuzu için çözünürlük 80 °C'de 80 g/100 g su, 40 °C'de 35 g/100 g sudur. 200 g suyla hazırlanan 80 °C'deki doygun çözelti 40 °C'ye soğutuluyor. Kaç g tuz çöker?", adimlar: [
            "80 °C'de 200 g suda çözünen = 2 × 80 = 160 g tuz.",
            "40 °C'de 200 g suda çözünebilen = 2 × 35 = 70 g tuz.",
            "Çöken tuz = 160 − 70 = 90 g.",
            "Kontrol (100 g su için): 80 − 35 = 45 g; 200 g su için 2 × 45 = 90 g ✓"
          ], sonuc: "90 g tuz çöker." },
        { tip: "tuzak", metin: "Derişik ve seyreltik, çözeltideki çözünenin göreli miktarını söyler; doygunluk ise o sıcaklıkta daha fazla çözünüp çözünemeyeceğini söyler. İkisi farklı ölçüdür.", yanlis: "Derişik çözelti her zaman doygundur; seyreltik çözelti doymamıştır.", dogru: "Çözünürlüğü çok düşük bir madde doygun olsa bile seyreltik olabilir; derişik bir çözelti de doymamış olabilir." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*A concentrated solution has a large amount of solute; a saturated solution cannot dissolve any more solute at that temperature.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Solution*: homojen karışım; çoğu zaman az olan *solute*, çok olan *solvent*. Alaşım katı çözeltidir.",
            "Çözünme: tanecikleri ayırmak ve çözücüyü açmak enerji ister, yeni etkileşimler enerji verir; fark endotermik ya da ekzotermiktir.",
            "Benzer benzeri çözer: polar–polar ve apolar–apolar çözünür; polar–apolar çözünmez.",
            "*Electrolyte* suda iyon verir ve akım iletir; elektrolit olmayanlar (şeker, etanol) moleküller halindedir.",
            "*Solubility* g/100 g su ile verilir; eğri üzerinde doygun, altında doymamış, üstünde aşırı doymuş.",
            "Doygun çözelti soğutulunca çözünürlük farkı kadar madde çöker.",
            "Derişik–seyreltik ile doymuş–doymamış farklı kavramlardır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi bir alaşımdır?",
      opts: ["Tuzlu su", "Pirinç (Cu + Zn)", "Gazoz", "Hava"], a: 1,
      why: "Alaşım, bir metalin başka bir elementle yaptığı katı çözeltidir; pirinç bakır ve çinkodan oluşur. Hava ve gazoz gaz/sıvı çözelti, tuzlu su sıvı çözeltidir." },
    { q: "Bir öğrenci NH₄NO₃'ı suda çözdüğünde beherin soğuduğunu hissediyor. Bu çözünme için hangisi söylenir?",
      opts: ["Endotermiktir; çözünme ortamdan ısı alır", "Ekzotermiktir; çözünme ortama ısı verir", "Isı alışverişi yoktur", "Çözünme fiziksel olduğu için enerji değişmez"], a: 0,
      why: "Sıcaklık düştüyse ısı çözeltiye aktarılmıştır: çözünme endotermiktir. B seçeneği ters yorumdur; çözünmede de enerji değişimi olur." },
    { q: "Tabloda A tuzunun çözünürlüğü verilmiştir. 60 °C'de 100 g suda 40 g A tuzu çözülmüştür. Bu çözeltiye 15 g A tuzu daha eklenirse ne olur?",
      fig: { type: "table", head: ["Sıcaklık (°C)", "Çözünürlük (g / 100 g su)"], rows: [["20", "20"], ["40", "35"], ["60", "55"], ["80", "80"]], caption: "A tuzunun çözünürlüğü" },
      opts: ["10 g çözünür, 5 g dipte kalır", "Hiçbiri çözünmez", "Çözelti aşırı doymuş olur", "Hepsi çözünür; çözelti doygun olur"], a: 3,
      why: "60 °C'de en çok 55 g çözünür; 40 + 15 = 55 g. Hepsi çözünür ve çözelti tam doygun olur. Dipte tuz kalması (A) için toplam 55 g'ı aşmak gerekirdi." },
    { q: "Grafikte A tuzunun çözünürlük eğrisi ve 60 °C'deki üç çözelti X, Y, Z gösterilmiştir. Hangi sıralama doğrudur?",
      fig: { type: "graph", xlabel: "Sıcaklık (°C)", ylabel: "g / 100 g su", xmax: 10, ymax: 10, lines: [{ from: [0, 1], to: [2, 2] }, { from: [2, 2], to: [4, 3.5] }, { from: [4, 3.5], to: [6, 5.5] }, { from: [6, 5.5], to: [8, 8], label: "A" }], points: [{ q: 6, p: 3, label: "X" }, { q: 6, p: 5.5, label: "Y" }, { q: 6, p: 7.5, label: "Z" }], xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }], yticks: [{ v: 3, label: "30" }, { v: 5.5, label: "55" }, { v: 7.5, label: "75" }], caption: "Çözünürlük eğrisi" },
      opts: ["X doygun, Y doymamış, Z aşırı doymuş", "X aşırı doymuş, Y doygun, Z doymamış", "X doymamış, Y doygun, Z aşırı doymuş", "X, Y ve Z doygundur"], a: 2,
      why: "Eğrinin altındaki X doymamış, eğri üzerindeki Y doygun, eğrinin yukarısındaki Z aşırı doymuştur. B seçeneği yönü tersine çevirir." },
    { q: "Aşağıdaki çözünen–çözücü çiftlerinden hangisinde \"benzer benzeri çözer\" kuralı çözünmeyi doğru öngörür?",
      opts: ["Naftalin (apolar) benzende (apolar) çözünür", "Zeytinyağı (apolar) suda (polar) çözünür", "Şeker (polar) benzinde (apolar) çözünür", "Tuz (iyonik) benzende (apolar) çözünür"], a: 0,
      why: "Apolar naftalin ile apolar benzen arasında London kuvvetleri kurulabilir, çözünme olur. Diğer üç çiftte polar/iyonik madde ile apolar çözücü ya da tersi vardır; çözünme beklenmez." }
  ]
};
