/* Kitpath not defteri · ch501 · 5.1 Çözünme ve Çözünürlük
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
          ], not: "Çözelti homojendir: her yerinden alınan örnekte bileşim aynıdır. Genel özellikler: tek fazlı ve berraktır, çözünen süzgeçle ayrılmaz, zamanla dibe çökmez." },
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
            { baslik: "Çözücü tanecikleri ayrılır", metin: "Çözücü molekülleri arası etkileşimler yenilir: enerji ==gerekir (+)==." },
            { baslik: "Çözünen tanecikler ayrılır", metin: "Çözünenin kendi tanecikleri arasındaki etkileşimler yenilir: enerji ==gerekir (+)==." },
            { baslik: "Karışma: yeni etkileşimler kurulur", metin: "Çözünen ve çözücü tanecikleri karışır, aralarında etkileşim oluşur: enerji ==açığa çıkar (−)==." },
            { baslik: "Toplamı belirler", metin: "Verilen enerji fazlaysa çözünme endotermik, açığa çıkan fazlaysa ekzotermiktir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💦", terim: "Hydration", tr: "hidrasyon (sulanma)", tanim: "Çözünen taneciklerin su molekülleriyle sarılması.", ornek: "NaCl suda çözünürken Na⁺ ve Cl⁻ iyonlarının su molekülleriyle sarılması." },
            { ikon: "🫧", terim: "Solvation", tr: "solvasyon", tanim: "Çözünen taneciklerin su dışındaki bir çözücü molekülleriyle sarılması.", ornek: "Iyodun CCl₄ içinde çözünmesi." }
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
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The dissolving of ammonium nitrate is endothermic because the temperature of the solution decreases, while CaCl₂ dissolves exothermically because its solution gets warmer.*" }
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
        { tip: "tablo", baslik: "Çözünme türleri", head: ["Tür", "Ne olur?", "Örnek"], rows: [
            ["*Ionic dissolution* (fiziksel)", "İyonik bileşik iyonlarına ayrılarak dağılır", "NaCl(s) → Na⁺(aq) + Cl⁻(aq)"],
            ["*Molecular dissolution* (fiziksel)", "Molekül, molekül olarak dağılır; iyon oluşmaz", "C₁₂H₂₂O₁₁(s) → C₁₂H₂₂O₁₁(aq)"],
            ["*Chemical dissolution*", "Çözünen, çözücüyle tepkimeye girerek çözünür", "Zn + 2HCl → ZnCl₂ + H₂"]
          ], not: "Fiziksel çözünmede çözünen kimliğini korur; kimyasal çözünmede yeni madde oluşur." },
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
            { ikon: "📏", terim: "Solubility", tr: "çözünürlük", tanim: "Belirli sıcaklıkta 100 g suda çözünebilen en çok madde miktarı (g/100 g su).", ornek: "20 °C'de NaCl'nin çözünürlüğü yaklaşık 36 g/100 g sudur (derste 35,7): 100 g suda yaklaşık 36 g'dan fazlası çözünmez." },
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
        { tip: "ornek", baslik: "Deneyle çözünürlük bulmak", durum: "Bir öğrenci 20 °C'de 20,0 g suya 10,0 g KNO₃ katıyor ve dengeye gelince karışımı süzüyor. Süzgeçte 4,00 g katı kalıyor. KNO₃'ın 20 °C'deki çözünürlüğü kaçtır?", adimlar: [
            "Çözünen = 10,0 − 4,00 = 6,00 g (20,0 g suda).",
            "Çözünürlük 100 g su için verilir: 6,00 g ÷ 20,0 g = x ÷ 100 g.",
            "x = 6,00 × 100 ÷ 20,0 = 30,0 g.",
            "Kontrol: 20,0 g suda 6,00 g → 100 g suda 5 kat, 30,0 g ✓"
          ], sonuc: "Çözünürlük 30,0 g KNO₃ / 100 g su." },
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
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*A concentrated solution has a large amount of solute; a saturated solution cannot dissolve any more solute at that temperature.*" },
            { ikon: "🧪", baslik: "Laboratuvarda nasıl yapılır?", metin: "Derişik yapmak: çözünen eklemek ya da çözücüyü buharlaştırmak. Seyreltik yapmak: çözücü eklemek. Doygun çözelti: çözüneni parça parça ekleyip karıştırmak; dipte çözünmeyen katı kalınca doygundur." }
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
    { q: "Which of the following is an alloy?",
      opts: ["Salt water", "Brass (Cu + Zn)", "Soda", "Air"], a: 1,
      why: "Alaşım, bir metalin başka bir elementle yaptığı katı çözeltidir; pirinç bakır ve çinkodan oluşur. Hava ve gazoz gaz/sıvı çözelti, tuzlu su sıvı çözeltidir." },
    { q: "A student feels the beaker get cold when NH₄NO₃ dissolves in water. What can be said about this dissolving process?",
      opts: ["It is endothermic; dissolving absorbs heat from the surroundings", "It is exothermic; dissolving releases heat to the surroundings", "There is no heat exchange", "There is no energy change because dissolving is a physical change"], a: 0,
      why: "Sıcaklık düştüyse ısı çözeltiye aktarılmıştır: çözünme endotermiktir. B seçeneği ters yorumdur; çözünmede de enerji değişimi olur." },
    { q: "The table gives the solubility of salt A. 40 g of salt A has been dissolved in 100 g of water at 60 °C. What happens if 15 g more of salt A is added to this solution?",
      fig: { type: "table", head: ["Temperature (°C)", "Solubility (g / 100 g water)"], rows: [["20", "20"], ["40", "35"], ["60", "55"], ["80", "80"]], caption: "Solubility of salt A" },
      opts: ["10 g dissolves and 5 g stays at the bottom", "None of it dissolves", "The solution becomes supersaturated", "All of it dissolves and the solution becomes saturated"], a: 3,
      why: "60 °C'de en çok 55 g çözünür; 40 + 15 = 55 g. Hepsi çözünür ve çözelti tam doygun olur. Dipte tuz kalması (A) için toplam 55 g'ı aşmak gerekirdi." },
    { q: "The graph shows the solubility curve of salt A and three solutions X, Y and Z at 60 °C. Which ranking is correct?",
      fig: { type: "graph", xlabel: "Temperature (°C)", ylabel: "g / 100 g water", xmax: 10, ymax: 10, lines: [{ from: [0, 1], to: [2, 2] }, { from: [2, 2], to: [4, 3.5] }, { from: [4, 3.5], to: [6, 5.5] }, { from: [6, 5.5], to: [8, 8], label: "A" }], points: [{ q: 6, p: 3, label: "X" }, { q: 6, p: 5.5, label: "Y" }, { q: 6, p: 7.5, label: "Z" }], xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }], yticks: [{ v: 3, label: "30" }, { v: 5.5, label: "55" }, { v: 7.5, label: "75" }], caption: "Solubility curve" },
      opts: ["X is saturated, Y is unsaturated, Z is supersaturated", "X is supersaturated, Y is saturated, Z is unsaturated", "X is unsaturated, Y is saturated, Z is supersaturated", "X, Y and Z are all saturated"], a: 2,
      why: "Eğrinin altındaki X doymamış, eğri üzerindeki Y doygun, eğrinin yukarısındaki Z aşırı doymuştur. B seçeneği yönü tersine çevirir." },
    { q: "In which of the following solute-solvent pairs does the rule \"like dissolves like\" correctly predict dissolving?",
      opts: ["Naphthalene (nonpolar) dissolves in benzene (nonpolar)", "Olive oil (nonpolar) dissolves in water (polar)", "Sugar (polar) dissolves in gasoline (nonpolar)", "Salt (ionic) dissolves in benzene (nonpolar)"], a: 0,
      why: "Apolar naftalin ile apolar benzen arasında London kuvvetleri kurulabilir, çözünme olur. Diğer üç çiftte polar/iyonik madde ile apolar çözücü ya da tersi vardır; çözünme beklenmez." }
  ]
};
