/* Kitora not defteri · ch502 · 5.2 Çözünürlüğü Etkileyenler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry, Exam 4: çözünürlüğü ve çözünme hızını etkileyenler). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch502",
  amac: "Bu konu çözünürlüğü (*solubility*) ve çözünme hızını (*rate of dissolving*) neyin değiştirdiğini anlatıyor. Sıcaklığın ve basıncın çözünürlüğe, karıştırmanın ve yüzey alanının çözünme hızına etkisini ve bu ikisini birbirinden ayırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Çözünürlük ile çözünme hızı farklıdır",
      kisa: "Çözünürlük \"ne kadar\", çözünme hızı \"ne çabuk\" sorusunun cevabıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Solubility", tr: "çözünürlük", tanim: "Belirli sıcaklıkta çözücüde çözünebilen en çok madde miktarı. Madde cinsine, sıcaklığa ve (gazlarda) basınca bağlıdır.", ornek: "100 g suda en çok 55 g A tuzu çözünür." },
            { ikon: "⏱️", terim: "Rate of dissolving", tr: "çözünme hızı", tanim: "Çözünenin ne kadar çabuk çözündüğü. Çözünme miktarını değil, süreyi değiştirir.", ornek: "Toz şeker küp şekerden daha çabuk çözünür." }
          ] },
        { tip: "tuzak", metin: "Karıştırmak ve katıyı ufalamak yalnızca çözünme hızını artırır. Çözünürlük (en çok çözünen miktar) bunlarla değişmez.", yanlis: "Şekeri toz yaparsam suda daha çok şeker çözünür.", dogru: "Toz şeker daha çabuk çözünür; aynı sıcaklıkta çözünebilen en çok miktar yine aynıdır." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Stirring increases the rate of dissolving but it does not change the solubility.*" },
            { ikon: "💬", baslik: "İki kavramı ayır", metin: "*Solubility is how much dissolves; the rate of dissolving is how fast it dissolves.*" }
          ] }
      ]
    },
    {
      baslik: "Sıcaklığın etkisi: katılar ve gazlar",
      kisa: "Çoğu katının çözünürlüğü sıcaklıkla artar; gazların çözünürlüğü azalır.",
      bloklar: [
        { tip: "grafik", baslik: "Sıcaklık artınca çözünürlük nasıl değişir?", xlabel: "Sıcaklık (°C)", ylabel: "Çözünürlük (göreli)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "a", tip: "egri", renk: 0, noktalar: [[0, 1], [2, 1.8], [4, 3], [6, 4.6], [8, 6.8]], etiket: "katı A", gizli: true },
            { id: "b", tip: "egri", renk: 2, noktalar: [[0, 3.4], [2, 3.5], [4, 3.6], [6, 3.7], [8, 3.9]], etiket: "katı B", gizli: true },
            { id: "g", tip: "egri", renk: 3, noktalar: [[0, 8], [2, 5.8], [4, 4], [6, 2.6], [8, 1.6]], etiket: "gaz", gizli: true }
          ],
          durumlar: [
            { metin: "Çoğu katı (A): sıcaklık arttıkça çözünürlük artar; çözünme endotermiktir.", goster: ["a"] },
            { metin: "Bazı katılar (B) için sıcaklığın etkisi çok azdır; eğri neredeyse yataydır.", goster: ["b"] },
            { metin: "Gazlar: sıcaklık arttıkça çözünürlük ==azalır==. Isınan gazoz ve ılık göllerdeki az oksijen buna örnektir.", goster: ["g"] }
          ] },
        { tip: "ornek", baslik: "Az suda tuz çözmek", durum: "A tuzunun çözünürlüğü 40 °C'de 35 g, 60 °C'de 55 g, 80 °C'de 80 g (100 g suda). 50 g suya 30 g A tuzu konup karıştırılıyor.", adimlar: [
            "40 °C'de 50 g suda en çok 35 ÷ 2 = 17,5 g çözünür; 30 − 17,5 = 12,5 g dipte kalır.",
            "60 °C'de en çok 55 ÷ 2 = 27,5 g çözünür; 30 − 27,5 = 2,5 g hâlâ dipte kalır.",
            "80 °C'de en çok 80 ÷ 2 = 40 g çözünür; 30 g'ın hepsi çözünür (çözelti doymamış olur).",
            "Kontrol: 30 g, 60 °C kapasitesinin (27,5 g) üstünde, 80 °C kapasitesinin (40 g) altındadır ✓"
          ], sonuc: "Isıtınca çözünürlük arttığı için tuz 80 °C'de tamamen çözünür." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The solubility of most solids increases with temperature, but the solubility of gases decreases.*" }
          ] }
      ]
    },
    {
      baslik: "Basıncın etkisi: yalnız gazlar",
      kisa: "Gazın çözünürlüğü, gazın kısmi basıncıyla doğru orantılıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥤", terim: "Henry's law", tr: "Henry yasası", tanim: "Sabit sıcaklıkta bir gazın sıvıdaki çözünürlüğü, o gazın sıvı üzerindeki basıncıyla doğru orantılıdır.", ornek: "Basınç iki katına çıkarsa çözünen gaz miktarı da iki katına çıkar." }
          ] },
        { tip: "grafik", baslik: "Gazın çözünürlüğü basınçla doğru orantılıdır", xlabel: "Basınç (atm)", ylabel: "Çözünen gaz (göreli)", xmax: 5, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [0, 0], to: [4.8, 9.6], etiket: "gaz", gizli: true },
            { id: "p1", tip: "nokta", renk: 1, x: 1, y: 2, kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 2, y: 4, kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", renk: 1, x: 4, y: 8, kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sabit sıcaklıkta çözünen gaz miktarı, basınçla orantılı artar: orijinden geçen doğru.", goster: ["d"] },
            { metin: "1 atm'de 2 birim gaz çözünür.", goster: ["p1"] },
            { metin: "Basınç 2 atm olunca 4 birim; basıncı iki katına çıkarmak çözünürlüğü iki katına çıkarır.", goster: ["p2"] },
            { metin: "4 atm'de 8 birim. Katılar ve sıvılar için basıncın çözünürlüğe etkisi ihmal edilir.", goster: ["p4"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🥤", baslik: "Gazoz", metin: "Şişe yüksek CO₂ basıncıyla kapatılır. Kapak açılınca basınç düşer, CO₂'nin çözünürlüğü azalır ve gaz köpürerek çıkar." },
            { ikon: "🤿", baslik: "Dalgıç", metin: "Derinde kanda çok gaz (N₂) çözünür. Çok hızlı yükselirse basınç birden düşer, gaz kabarcıkları oluşur." },
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*The solubility of a gas is directly proportional to its pressure.*" }
          ] }
      ]
    },
    {
      baslik: "Çözünme hızını artıranlar",
      kisa: "Daha çok temas ve daha çok çarpışma, çözünmeyi hızlandırır.",
      bloklar: [
        { tip: "tablo", baslik: "Çözünme hızını etkileyenler", head: ["Etken", "Hız", "Neden"], rows: [
            ["Yüzey alanını artırmak (ufalamak, toz yapmak)", "artar", "çözücüyle temas eden yüzey büyür"],
            ["Karıştırmak", "artar", "çözünenin çevresine hep taze çözücü gelir"],
            ["Sıcaklığı artırmak", "artar", "tanecikler daha hızlı hareket eder, daha sık çarpışır"],
            ["Çözücü miktarı sabitken fazla katı eklemek", "azalır", "çözelti doygunluğa yaklaşır"]
          ], not: "Bu etkenler hızı değiştirir; çözünürlüğü yalnızca sıcaklık (ve gazlarda basınç) değiştirir." },
        { tip: "ornek", baslik: "Küp şekeri bölünce yüzey iki katına çıkar", durum: "Kenarı 2 cm olan bir küp, kenarı 1 cm olan 8 küçük küpe bölünüyor. Toplam yüzey alanı nasıl değişir?", adimlar: [
            "Büyük küp: 6 yüz × (2 × 2) = 24 cm².",
            "Bir küçük küp: 6 × (1 × 1) = 6 cm²; 8 küp: 8 × 6 = 48 cm².",
            "Yüzey alanı 24 cm²'den 48 cm²'ye, yani 2 kat çıktı.",
            "Kontrol: 8 küpün toplam hacmi 8 cm³ = büyük küpün hacmi (2³ = 8 cm³); madde değişmedi, yalnızca yüzey arttı ✓"
          ], sonuc: "Parçalanınca yüzey alanı iki katına çıkar; çözünme hızlanır." },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Increasing the surface area increases the rate of dissolving because more solvent particles can reach the solute.*" }
          ] }
      ]
    },
    {
      baslik: "Hepsi bir arada: çözünürlüğü ve hızı kim değiştirir?",
      kisa: "Çözünürlüğü sıcaklık ve gazlarda basınç, hızı ise temas ve çarpışma değiştirir.",
      bloklar: [
        { tip: "tablo", baslik: "Özet tablo", head: ["Etken", "Çözünürlük", "Çözünme hızı"], rows: [
            ["Sıcaklık ↑", "katılarda çoğunlukla ↑, gazlarda ↓", "↑"],
            ["Basınç ↑", "gazlarda ↑; katı ve sıvıda ihmal edilir", "etkisi yok denecek kadar az"],
            ["Karıştırma", "değişmez", "↑"],
            ["Yüzey alanı ↑ (toz)", "değişmez", "↑"],
            ["Çözünen–çözücü türü", "değişir (benzer benzeri çözer)", "—"]
          ] },
        { tip: "ikili", sol: { ikon: "📏", baslik: "Çözünürlüğü değiştirir", maddeler: ["Sıcaklık", "Gazlarda basınç", "Madde ve çözücü cinsi"] },
          sag: { ikon: "⏱️", baslik: "Yalnız hızı değiştirir", maddeler: ["Karıştırma", "Katıyı ufalamak (yüzey alanı)"] },
          oyun: [
            { metin: "Şekeri toz haline getirmek.", cevap: "sag", neden: "Yüzey alanı artar, hız artar; çözünürlük aynı kalır." },
            { metin: "Gazoz şişesinin kapağını açıp basıncı düşürmek.", cevap: "sol", neden: "Gazın çözünürlüğü basınçla orantılı azalır." },
            { metin: "Çayı kaşıkla karıştırmak.", cevap: "sag", neden: "Yalnızca çözünme süresini kısaltır." },
            { metin: "Suyu ısıtınca içindeki oksijenin kaçması.", cevap: "sol", neden: "Gazların çözünürlüğü sıcaklıkla azalır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Sınavda böyle yaz", metin: "*Temperature changes the solubility, but stirring only changes how fast the solute dissolves.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Solubility* \"ne kadar\", *rate of dissolving* \"ne çabuk\" sorusudur; karıştırma ve yüzey alanı yalnız hızı değiştirir.",
            "Çoğu katının çözünürlüğü sıcaklıkla artar; gazların çözünürlüğü sıcaklıkla azalır.",
            "Gazın çözünürlüğü basınçla doğru orantılıdır (*Henry's law*); katı ve sıvıda basınç etkisi ihmal edilir.",
            "Gazoz kapağı açılınca basınç düşer, CO₂ çıkar; ısınan suda oksijen azalır.",
            "Yüzey alanı büyüdükçe temas artar; küp 8 parçaya bölününce yüzey iki katına çıkar.",
            "Sıcaklık artınca tanecikler daha sık çarpışır; hem hız hem (çoğu katıda) çözünürlük artar.",
            "Çözünen–çözücü türü çözünürlüğü belirler (*like dissolves like*)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrenci aynı sıcaklıktaki iki bardak suya aynı kütlede küp şeker ve toz şeker atıyor. Hangisi doğrudur?",
      opts: ["Toz şeker daha hızlı çözünür; çözünürlükleri aynıdır", "Toz şekerin çözünürlüğü daha yüksektir", "Küp şeker daha hızlı çözünür", "İkisi de aynı hızda çözünür"], a: 0,
      why: "Toz şekerin yüzey alanı büyüktür, hızı artar. Çözünürlük (en çok çözünen miktar) yüzey alanına bağlı değildir; toz şeker daha yüksek çözünürlüğe sahip değildir (B)." },
    { q: "Gazoz şişesinin kapağı açıldığında köpürmenin nedeni nedir?",
      opts: ["Şişe içindeki sıcaklığın artması", "Basınç düştüğü için CO₂'nin çözünürlüğünün azalması", "Şekerin suda çözünmesi", "Suyun buharlaşması"], a: 1,
      why: "Gazın çözünürlüğü basınçla orantılıdır; kapak açılınca basınç düşer, CO₂ çözeltiden çıkar. Sıcaklık artışı (A) bu olayın nedeni değildir." },
    { q: "Tabloda A tuzunun çözünürlüğü verilmiştir. 60 °C'de 50 g suda en çok kaç g A tuzu çözünür?",
      fig: { type: "table", head: ["Sıcaklık (°C)", "Çözünürlük (g / 100 g su)"], rows: [["20", "20"], ["40", "35"], ["60", "55"], ["80", "80"]], caption: "A tuzunun çözünürlüğü" },
      opts: ["55 g", "35 g", "80 g", "27,5 g"], a: 3,
      why: "60 °C'de 100 g suda 55 g çözünür; 50 g su bunun yarısı kadar çözer: 27,5 g. 55 g (A) su miktarını yarıya indirmeyi unutmaktır." },
    { q: "Grafikte üç maddenin (X, Y, Z) çözünürlüğü sıcaklığa karşı gösterilmiştir. Hangi yorum doğrudur?",
      fig: { type: "graph", xlabel: "Sıcaklık (°C)", ylabel: "Çözünürlük (göreli)", xmax: 10, ymax: 10, lines: [{ from: [0, 1], to: [8, 7], label: "X" }, { from: [0, 3.4], to: [8, 3.9], label: "Y" }, { from: [0, 8], to: [8, 1.6], label: "Z" }], xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }], caption: "Çözünürlük–sıcaklık" },
      opts: ["X gazdır çünkü eğrisi en diktir", "Z katıdır çünkü çözünürlüğü sıcaklıkla azalır", "Z büyük olasılıkla gazdır; çözünürlüğü sıcaklıkla azalır", "Y'nin çözünürlüğü sıcaklıkla belirgin biçimde artar"], a: 2,
      why: "Gazların çözünürlüğü sıcaklıkla azalır; yalnız Z böyle davranır. Çoğu katı ise X gibi artış gösterir; Y'nin eğrisi neredeyse yataydır (D yanlış)." },
    { q: "Sabit sıcaklıkta bir gazın sıvıdaki çözünürlüğü 1 atm'de 2 birimdir. Gazın basıncı 3 atm olursa çözünürlük kaç birim olur?",
      opts: ["6", "3", "9", "2"], a: 0,
      why: "Gazın çözünürlüğü basınçla doğru orantılıdır: 2 × 3 = 6 birim. 9 (C) basıncın karesi gibi yorumlamaktır; ilişki doğrusaldır." }
  ]
};
