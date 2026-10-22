/* Kitora not defteri · ch102 · 1.2 Molekül Arası Kuvvet Türleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 1) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch102",
  amac: "Bu konu zayıf etkileşimlerin türlerini tek tek anlatıyor: London, dipol-dipol, dipol-indüklenmiş dipol, hidrojen bağı ve iyon-dipol. Bir maddede hangi kuvvetin etkili olduğunu bulmayı ve kaynama noktalarını sıralamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*London dispersion*: her maddede bulunan kuvvet",
      kisa: "Elektron bulutu büyüdükçe London kuvveti güçlenir; dallanma azalttığı için kuvveti zayıflatır.",
      bloklar: [
        { tip: "adimlar", baslik: "Apolar bir atomda geçici dipol nasıl oluşur?", adimlar: [
            { baslik: "Elektron bulutu dalgalanır", metin: "Elektronlar sürekli hareket eder; bir an atomun bir tarafında biraz fazla toplanır." },
            { baslik: "Geçici dipol", metin: "O an bir uç δ⁻, karşı uç δ⁺ olur. Dipol kalıcı değildir, ama sürekli yeniden oluşur." },
            { baslik: "İndüklenmiş dipol", metin: "Komşu atomun bulutu da bozulur; zıt uçlar birbirini çeker. Bu çekim ==*London dispersion force*==." },
            { baslik: "Büyüklük etkisi", metin: "Elektron sayısı (mol kütlesi) arttıkça bulut daha kolay bozulur (*polarizability*): kuvvet büyür." }
          ] },
        { tip: "grafik", baslik: "Soygazlar: mol kütlesi arttıkça kaynama noktası artar", xlabel: "Mol kütlesi (g/mol)", ylabel: "Kaynama noktası (K)", xmax: 14, ymax: 18,
          xticks: [{ v: 4, label: "40" }, { v: 8, label: "80" }, { v: 12, label: "120" }],
          yticks: [{ v: 5, label: "50" }, { v: 10, label: "100" }, { v: 15, label: "150" }],
          ogeler: [
            { id: "he", tip: "nokta", renk: 1, x: 0.4, y: 0.42, etiket: "He", gizli: true },
            { id: "ne", tip: "nokta", renk: 1, x: 2.0, y: 2.7, etiket: "Ne", gizli: true },
            { id: "ar", tip: "nokta", renk: 1, x: 4.0, y: 8.7, etiket: "Ar", gizli: true },
            { id: "kr", tip: "nokta", renk: 1, x: 8.4, y: 12.0, etiket: "Kr", gizli: true },
            { id: "xe", tip: "nokta", renk: 1, x: 13.1, y: 16.5, etiket: "Xe", gizli: true },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0.4, 0.42], [2.0, 2.7], [4.0, 8.7], [8.4, 12.0], [13.1, 16.5]], gizli: true }
          ],
          durumlar: [
            { metin: "Hepsi apolar tek atomlu gazlar: aralarında yalnızca London kuvveti var. Kaynama noktası bu kuvvetin ölçüsüdür." },
            { metin: "He (4 g/mol) ve Ne (20 g/mol): küçük bulut, çok zayıf kuvvet; kaynama noktaları 4 K ve 27 K.", goster: ["he", "ne"] },
            { metin: "Ar (40 g/mol): bulut büyüdü, kaynama noktası 87 K'e çıktı.", goster: ["ar"] },
            { metin: "Kr (84 g/mol) ve Xe (131 g/mol): 120 K ve 165 K.", goster: ["kr", "xe"] },
            { metin: "Sonuç: ==apolar maddelerde mol kütlesi (elektron sayısı) arttıkça London kuvveti ve kaynama noktası artar.==", goster: ["c"] }
          ] },
        { tip: "tablo", baslik: "Aynı mol kütlesi (72 g/mol), farklı şekil: C₅H₁₂ izomerleri", head: ["Molekül", "Şekil", "Kaynama noktası"], rows: [
            ["n-pentan", "Uzun düz zincir: komşuyla çok temas", "36 °C"],
            ["İzopentan (2-metilbütan)", "Tek dallı: daha az temas", "28 °C"],
            ["Neopentan (2,2-dimetilpropan)", "Küreye yakın: en az temas", "10 °C"]
          ], not: "Dallanma arttıkça temas yüzeyi küçülür, London kuvveti zayıflar, kaynama noktası düşer." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: büyüklük", metin: "*Argon has a higher boiling point than neon because it has more electrons, so its London dispersion forces are stronger.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: şekil", metin: "*Neopentane boils at a lower temperature than pentane because its compact shape has less surface contact.*" }
          ] }
      ]
    },
    {
      baslik: "Dipol-dipol ve dipol-indüklenmiş dipol",
      kisa: "Polar moleküller zıt uçlarıyla birbirini çeker; London kuvveti onların üstüne eklenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Dipole-dipole force", tr: "dipol-dipol kuvveti", tanim: "Kalıcı dipolü olan polar moleküllerin zıt uçları (δ⁺ ile δ⁻) arasındaki çekim.", ornek: "HCl ve aseton molekülleri birbirini bu kuvvetle çeker." },
            { ikon: "🌀", terim: "Dipole-induced dipole force", tr: "dipol-indüklenmiş dipol kuvveti", tanim: "Polar molekül, yakındaki apolar molekülün elektron bulutunu bozar (indükler); oluşan dipollerin çekimidir.", ornek: "Suda çözünen O₂ ile H₂O arasında." }
          ] },
        { tip: "tablo", baslik: "Benzer mol kütlesi, farklı kuvvet", head: ["Madde", "Mol kütlesi", "Baskın kuvvet", "Kaynama noktası"], rows: [
            ["Propan C₃H₈", "44", "London (apolar)", "−42 °C"],
            ["Asetaldehit CH₃CHO", "44", "Dipol-dipol + London", "20 °C"],
            ["Bütan C₄H₁₀", "58", "London (apolar)", "−1 °C"],
            ["Aseton CH₃COCH₃", "58", "Dipol-dipol + London", "56 °C"]
          ], not: "Mol kütlesi hemen hemen aynıyken polar olan, kalıcı dipolleri yüzünden daha yüksek kaynar." },
        { tip: "tuzak", metin: "Polar maddelerde London kuvveti kaybolmaz.", yanlis: "Polar moleküllerde yalnızca dipol-dipol kuvveti vardır, London yoktur.", dogru: "==London kuvveti her maddede vardır.== Polar moleküllerde dipol-dipol onun üstüne eklenir; büyük moleküllerde London kuvveti dipol-dipol'den baskın bile olabilir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: dipol-dipol", metin: "*HCl molecules attract each other through dipole-dipole forces, so HCl boils higher than a nonpolar molecule of similar mass.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: dipol-indüklenmiş dipol", metin: "*Dipole-induced dipole forces occur between a polar molecule and a nonpolar molecule.*" }
          ] }
      ]
    },
    {
      baslik: "Hidrojen bağı: kaynama noktasını fırlatan kuvvet",
      kisa: "H, F, O ya da N'ye doğrudan bağlıysa, komşu molekülün F/O/N'siyle hidrojen bağı yapar.",
      bloklar: [
        { tip: "grafik", baslik: "Hidrürlerin kaynama noktaları (14, 15, 16, 17. grup)", xlabel: "Periyot", ylabel: "Kaynama noktası (K)", xmax: 6, ymax: 40,
          xticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 10, label: "100" }, { v: 20, label: "200" }, { v: 30, label: "300" }],
          ogeler: [
            { id: "g14", tip: "egri", renk: 1, etiket: "14. grup", noktalar: [[2, 11.2], [3, 16.1], [4, 18.5], [5, 22.1]] },
            { id: "g16", tip: "egri", renk: 0, etiket: "16. grup", noktalar: [[2, 37.3], [3, 21.3], [4, 23.2], [5, 27.1]], gizli: true },
            { id: "bek", tip: "cizgi", renk: 0, kesik: true, from: [2, 19.4], to: [3, 21.3], gizli: true },
            { id: "bekt", tip: "yazi", x: 2.1, y: 17.0, metin: "trend sürseydi ≈ 190 K", hiza: "start", gizli: true },
            { id: "g17", tip: "egri", renk: 3, etiket: "17. grup", noktalar: [[2, 29.3], [3, 18.8], [4, 20.6], [5, 23.8]], gizli: true },
            { id: "g15", tip: "egri", renk: 2, etiket: "15. grup", noktalar: [[2, 24.0], [3, 18.5], [4, 21.1], [5, 25.5]], gizli: true }
          ],
          durumlar: [
            { metin: "14. grup hidrürleri (CH₄, SiH₄, GeH₄, SnH₄) apolar: yalnızca London var. Kütle arttıkça kaynama noktası düzgün artıyor." },
            { metin: "16. grup (H₂O, H₂S, H₂Se, H₂Te): H₂S'den aşağıya trend normal, ama ==H₂O trendin çok üstünde== (373 K). Trend sürseydi su yaklaşık 190 K'de kaynardı.", goster: ["g16", "bek", "bekt"] },
            { metin: "17. grupta da aynı: ==HF== (293 K), HCl'den çok yüksek.", goster: ["g17"] },
            { metin: "15. grupta ==NH₃== da öyle. Anormal yükselen üç madde (NH₃, H₂O, HF) 2. periyotta: ==hidrojen bağı.==", goster: ["g15"] }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Hidrojen bağı VAR", maddeler: ["H atomu doğrudan F, O ya da N'ye bağlı", "H₂O, NH₃, HF, CH₃OH"] },
          sag: { ikon: "❌", baslik: "Hidrojen bağı YOK", maddeler: ["H, C ya da başka ametallere bağlı", "CH₄, HCl, H₂S, CH₃CHO"] },
          oyun: [
            { metin: "H₂O", cevap: "sol", neden: "H, O'ya bağlı." },
            { metin: "CH₄", cevap: "sag", neden: "H, C'ye bağlı." },
            { metin: "HF", cevap: "sol", neden: "H, F'ye bağlı." },
            { metin: "HCl", cevap: "sag", neden: "Cl büyük bir atom; hidrojen bağı yalnızca F, O, N ile kurulur." },
            { metin: "CH₃OH (metanol)", cevap: "sol", neden: "Molekülde O–H bağı var." }
          ] },
        { tip: "tuzak", metin: "Molekülde hem H hem O (ya da N) bulunması yetmez; H'nin doğrudan F/O/N'ye bağlı olması gerekir.", yanlis: "CH₃CHO'da H ve O var, o hâlde molekülleri arasında hidrojen bağı vardır.", dogru: "CH₃CHO'da H'ler C'ye bağlıdır, O–H bağı yoktur. ==Kendi molekülleri arasında hidrojen bağı kurmaz==; yalnızca dipol-dipol ve London vardır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: koşul", metin: "*Hydrogen bonds form when hydrogen is bonded directly to fluorine, oxygen or nitrogen.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kaynama noktası", metin: "*Water has an unusually high boiling point because its molecules form hydrogen bonds.*" }
          ] }
      ]
    },
    {
      baslik: "*Ion-dipole*: tuzlar suda neden çözünür?",
      kisa: "İyon ile polar molekül arasındaki çekim, zayıf etkileşimlerin en güçlüsüdür.",
      bloklar: [
        { tip: "adimlar", baslik: "NaCl suda çözünürken", adimlar: [
            { baslik: "Su polardır", metin: "O ucu δ⁻, H uçları δ⁺ taşır." },
            { baslik: "Yönelme", metin: "Su molekülleri Na⁺ çevresine O uçlarıyla, Cl⁻ çevresine H uçlarıyla yönelir." },
            { baslik: "Kafes dağılır", metin: "İyon-dipol çekimi kafesteki iyonik çekimi yener; iyonlar su molekülleriyle sarılıp (*hydration*) dağılır." }
          ] },
        { tip: "tablo", baslik: "Karışımda hangi etkileşim var?", head: ["Karışım", "Etkileşim"], rows: [
            ["NaCl + H₂O", "İyon-dipol"],
            ["CH₃OH + H₂O", "Hidrojen bağı (+ dipol-dipol, London)"],
            ["O₂ + H₂O", "Dipol-indüklenmiş dipol (+ London)"],
            ["I₂ + CCl₄", "London (ikisi de apolar)"],
            ["HCl(g) + HBr(g)", "Dipol-dipol (+ London)"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: tanım", metin: "*Ion-dipole forces act between an ion and a polar molecule, for example Na⁺ and water.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: çözünme", metin: "*NaCl dissolves in water because the ion-dipole attractions overcome the ionic bonds in the lattice.*" }
          ] }
      ]
    },
    {
      baslik: "Madde türüne göre kuvvet bulma ve kaynama noktası sıralama",
      kisa: "Önce kuvvet türünü bul; sonra güçlü kuvvetin kaynama noktası daha yüksektir.",
      bloklar: [
        { tip: "tablo", baslik: "Madde türü → etkili kuvvetler", head: ["Madde türü", "Etkili kuvvetler", "Örnek"], rows: [
            ["Soygaz atomu", "London", "He, Ar"],
            ["Apolar molekül", "London", "CH₄, I₂, CO₂"],
            ["Polar molekül (F/O/N–H yok)", "Dipol-dipol + London", "HCl, H₂S, CH₃CHO"],
            ["F/O/N–H içeren molekül", "Hidrojen bağı + dipol-dipol + London", "H₂O, NH₃, HF, CH₃OH"],
            ["İyonik katı", "İyonik bağ (güçlü etkileşim)", "NaCl"],
            ["İyon + polar çözücü", "İyon-dipol", "NaCl(aq)"]
          ] },
        { tip: "ornek", baslik: "CH₄, HCl ve H₂O'yu kaynama noktasına göre sırala", durum: "Üç madde: CH₄ (16 g/mol), HCl (36,5 g/mol), H₂O (18 g/mol). Kaynama noktalarını artan sırayla yaz.",
          adimlar: ["CH₄ apolar → yalnızca London. HCl polar (H–F/O/N yok) → dipol-dipol + London. H₂O → hidrojen bağı + dipol-dipol + London.", "Kuvvet gücü: London < dipol-dipol < hidrojen bağı. Kütleler küçük ve birbirine yakın olduğu için tür belirleyicidir.", "Su en hafif olmasına rağmen hidrojen bağı yüzünden en yüksek kaynar."],
          sonuc: "==CH₄ < HCl < H₂O== (yaklaşık 112 K < 188 K < 373 K). Aynı türde kuvvet varsa mol kütlesi büyük olan, mol kütlesi aynıysa dallanması az olan yüksek kaynar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: karşılaştırma", metin: "*Water has a higher boiling point than hydrogen sulfide because it forms hydrogen bonds.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: aynı tür kuvvet", metin: "*Among nonpolar molecules, the one with the larger molar mass has stronger London forces and a higher boiling point.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*London dispersion* her atom ve molekül arasında vardır; elektron sayısı (mol kütlesi) arttıkça güçlenir, dallanma arttıkça zayıflar.",
            "*Dipole-dipole*: kalıcı dipolü olan polar moleküller arasında; benzer kütlede polar madde apolardan yüksek kaynar.",
            "*Dipole-induced dipole*: polar molekül ile apolar molekül arasında (ör. O₂ ve H₂O).",
            "*Hydrogen bond*: H, doğrudan F, O ya da N'ye bağlıysa. NH₃, H₂O ve HF'nin kaynama noktası bu yüzden beklenenden çok yüksektir.",
            "H₂S, HCl, CH₃CHO gibi maddelerde hidrojen bağı yoktur; Cl büyüktür, H'ler C'ye bağlıdır.",
            "*Ion-dipole*: iyon + polar molekül; tuzların suda çözünmesini sağlar.",
            "Sıralama: London < dipol-dipol < hidrojen bağı < iyon-dipol (zayıf etkileşimler arasında).",
            "Kaynama noktası sıralarken önce kuvvet türüne, sonra mol kütlesine ve şekle bak."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloda 16. grup hidrürlerinin kaynama noktaları verilmiştir. H₂O'nun kaynama noktasının diğerlerinden çok yüksek olmasının nedeni nedir?",
      fig: { type: "table", caption: "16. grup hidrürleri", head: ["Madde", "H₂O", "H₂S", "H₂Se", "H₂Te"], rows: [["Kaynama noktası (°C)", "100", "−60", "−41", "−2"]] },
      opts: ["H₂O'nun mol kütlesi en büyüktür", "H₂O molekülleri arasında hidrojen bağı vardır", "H₂O apolar bir moleküldür", "Kaynarken H₂O'nun O–H bağları kopar"],
      a: 1,
      why: "H₂O'da H doğrudan O'ya bağlıdır; moleküller arasında hidrojen bağı oluşur ve kaynama noktasını çok yükseltir. A en çekici yanlış şık: mol kütlesi H₂O'da aslında en küçüktür (18 g/mol)." },
    { q: "C₅H₁₂ formülüne sahip üç izomerin kaynama noktaları tabloda verilmiştir. Z'nin kaynama noktasının en düşük olması en iyi nasıl açıklanır?",
      fig: { type: "table", caption: "C₅H₁₂ izomerleri (hepsi 72 g/mol)", head: ["Madde", "X (düz zincir)", "Y (tek dal)", "Z (küremsi)"], rows: [["Kaynama noktası (°C)", "36", "28", "10"]] },
      opts: ["Z'nin mol kütlesi daha küçüktür", "Z polar, X apolardır", "Z'de hidrojen bağı vardır", "Z küremsi olduğu için komşu moleküllerle temas yüzeyi azdır, London kuvveti zayıftır"],
      a: 3,
      why: "Mol kütleleri eşit ve üçü de apolardır; fark şekilden gelir. Küremsi molekülün temas yüzeyi küçük, London kuvveti zayıftır. A en çekici yanlış şık: üç izomerin de mol kütlesi aynıdır." },
    { q: "Aşağıdaki karışımlardan hangisinde moleküller arasında yalnızca London kuvvetleri etkilidir?",
      opts: ["NaCl ve H₂O", "CH₃OH ve H₂O", "I₂ ve CCl₄", "O₂ ve H₂O"],
      a: 2,
      why: "I₂ ve CCl₄ apolardır; aralarında yalnızca London vardır. D en çekici yanlış şık: O₂ apolar olsa da H₂O polardır, dipol-indüklenmiş dipol kuvveti de etkilidir." },
    { q: "F₂ (38 g/mol, apolar), HCl (36,5 g/mol, polar) ve HF (20 g/mol) maddelerinin kaynama noktaları için hangi sıralama doğrudur?",
      opts: ["F₂ < HCl < HF", "HF < HCl < F₂", "HCl < F₂ < HF", "F₂ < HF < HCl"],
      a: 0,
      why: "F₂ yalnızca London, HCl dipol-dipol + London, HF hidrojen bağı içerir; kuvvet türü sıralaması kütleden daha belirleyicidir: F₂ < HCl < HF. B en çekici yanlış şık: mol kütlesine bakıp HF'yi en düşük sayar." },
    { q: "Grafikte soygazların kaynama noktaları verilmiştir. Kaynama noktasının He'dan Kr'ye doğru artmasının nedeni aşağıdakilerden hangisidir?",
      fig: { type: "bar", cats: ["He", "Ne", "Ar", "Kr"], series: [{ name: "Kaynama noktası", values: [4, 27, 87, 120] }], ylabel: "K" },
      opts: ["Soygazlar arasında hidrojen bağı oluşur", "Atom büyüklüğü ve elektron sayısı arttıkça London kuvvetleri güçlenir", "Soygazlar polar atomlardır", "Kr atomları arasında iyonik bağ vardır"],
      a: 1,
      why: "Soygazlar apolar tek atomludur; elektron bulutu büyüdükçe daha kolay bozulur ve London kuvveti artar. C en çekici yanlış şık: soygaz atomları polar değildir." }
  ]
};
