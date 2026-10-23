/* Kitpath not defteri · ch102 · 1.2 Molekül Arası Kuvvet Türleri
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
            { ikon: "✍️", baslik: "Sınavda böyle yaz: şekil", metin: "*Neopentane boils at a lower temperature than pentane because its compact shape has less surface contact.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: Cl₂, Br₂, I₂", metin: "*Cl₂ is a gas, Br₂ is a liquid and I₂ is a solid because all three have only London forces, which get stronger as the molecules get larger.*" }
          ] }
      ]
    },
    {
      baslik: "Dipol-dipol ve dipol-indüklenmiş dipol",
      kisa: "Polar moleküller zıt uçlarıyla birbirini çeker; London kuvveti onların üstüne eklenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Dipole-dipole force", tr: "dipol-dipol kuvveti", tanim: "Kalıcı dipolü olan polar moleküllerin zıt uçları (δ⁺ ile δ⁻) arasındaki çekim. Moleküllerin polarlığı (ΔEN) arttıkça kuvvet güçlenir; London kuvvetinden güçlüdür.", ornek: "BrF ile ClF: EN(Br) = 2,8, EN(Cl) = 3,0, EN(F) = 4,0 olduğundan ΔEN BrF'de 1,2, ClF'de 1,0; BrF daha polardır ve daha güçlü dipol-dipol yapar." },
            { ikon: "🌀", terim: "Dipole-induced dipole force", tr: "dipol-indüklenmiş dipol kuvveti", tanim: "Polar molekül, yakındaki apolar molekülün elektron bulutunu bozar (indükler); oluşan dipollerin çekimidir.", ornek: "Suda çözünen O₂ ile H₂O arasında." }
          ] },
        { tip: "tablo", baslik: "Benzer mol kütlesi, farklı kuvvet", head: ["Madde", "Mol kütlesi", "Baskın kuvvet", "Kaynama noktası"], rows: [
            ["Propan C₃H₈", "44", "London (apolar)", "−42 °C"],
            ["Asetaldehit CH₃CHO", "44", "Dipol-dipol + London", "20 °C"],
            ["Bütan C₄H₁₀", "58", "London (apolar)", "−1 °C"],
            ["Aseton CH₃COCH₃", "58", "Dipol-dipol + London", "56 °C"]
          ], not: "Mol kütlesi hemen hemen aynıyken polar olan, kalıcı dipolleri yüzünden daha yüksek kaynar." },
        { tip: "tuzak", metin: "Polar maddelerde London kuvveti kaybolmaz.", yanlis: "Polar moleküllerde yalnızca dipol-dipol kuvveti vardır, London yoktur.", dogru: "==London kuvveti her maddede vardır.== Polar moleküllerde dipol-dipol onun üstüne eklenir; büyük moleküllerde London kuvveti dipol-dipol'den baskın bile olabilir: yalnızca London kuvveti olan büyük bir molekül, dipol-dipol kuvveti olan küçük bir moleküle göre daha yüksek kaynayabilir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: dipol-dipol", metin: "*HCl molecules attract each other through dipole-dipole forces, so HCl boils higher than a nonpolar molecule of similar mass.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: dipol-indüklenmiş dipol", metin: "*Dipole-induced dipole forces occur between a polar molecule and a nonpolar molecule.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: CH₄ ve CH₃Cl", metin: "*CH₃Cl is polar, so it has dipole-dipole forces in addition to London forces; therefore it has a higher boiling point than nonpolar CH₄.*" }
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
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kaynama noktası", metin: "*Water has an unusually high boiling point because its molecules form hydrogen bonds.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: HF, HI, HBr, HCl", metin: "*HF has the highest boiling point because of hydrogen bonding; for the others, the boiling point increases HCl < HBr < HI as the molecules get larger and London forces get stronger.*" }
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
            { ikon: "✍️", baslik: "Sınavda böyle yaz: aynı tür kuvvet", metin: "*Among nonpolar molecules, the one with the larger molar mass has stronger London forces and a higher boiling point.*" },
            { ikon: "🪜", baslik: "Açıklama sorusu: 4 adım", metin: "1) Her maddede hangi kuvvetler var? 2) Güçlerini nasıl karşılaştırırsın (büyüklük, polarlık, hidrojen bağı)? 3) Kuvvet sırası nedir? 4) Bunu sorudaki fiziksel özelliğe (kaynama noktası, hâl) bağla." }
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
    { q: "The table shows the boiling points of the Group 16 hydrides. What is the reason for the very high boiling point of H₂O compared with the others?",
      fig: { type: "table", caption: "Group 16 hydrides", head: ["Substance", "H₂O", "H₂S", "H₂Se", "H₂Te"], rows: [["Boiling point (°C)", "100", "−60", "−41", "−2"]] },
      opts: ["H₂O has the largest molar mass", "There are hydrogen bonds between H₂O molecules", "H₂O is a nonpolar molecule", "The O–H bonds of H₂O break when it boils"],
      a: 1,
      why: "H₂O'da H doğrudan O'ya bağlıdır; moleküller arasında hidrojen bağı oluşur ve kaynama noktasını çok yükseltir. A en çekici yanlış şık: mol kütlesi H₂O'da aslında en küçüktür (18 g/mol)." },
    { q: "The boiling points of three isomers with the formula C₅H₁₂ are given in the table. Which statement best explains why Z has the lowest boiling point?",
      fig: { type: "table", caption: "C₅H₁₂ isomers (all 72 g/mol)", head: ["Substance", "X (straight chain)", "Y (one branch)", "Z (nearly spherical)"], rows: [["Boiling point (°C)", "36", "28", "10"]] },
      opts: ["Z has a smaller molar mass", "Z is polar and X is nonpolar", "Z has hydrogen bonds", "Z is nearly spherical, so it has less contact surface with neighboring molecules and weaker London forces"],
      a: 3,
      why: "Mol kütleleri eşit ve üçü de apolardır; fark şekilden gelir. Küremsi molekülün temas yüzeyi küçük, London kuvveti zayıftır. A en çekici yanlış şık: üç izomerin de mol kütlesi aynıdır." },
    { q: "In which of the following mixtures are only London forces active between the molecules?",
      opts: ["NaCl and H₂O", "CH₃OH and H₂O", "I₂ and CCl₄", "O₂ and H₂O"],
      a: 2,
      why: "I₂ ve CCl₄ apolardır; aralarında yalnızca London vardır. D en çekici yanlış şık: O₂ apolar olsa da H₂O polardır, dipol-indüklenmiş dipol kuvveti de etkilidir." },
    { q: "The boiling points of F₂, OF₂ and HF are −188 °C, −145 °C and 19.5 °C, respectively. Which explanation best accounts for this order?",
      fig: { type: "table", caption: "Boiling points", head: ["Substance", "F₂", "OF₂", "HF"], rows: [["Boiling point (°C)", "−188", "−145", "19.5"]] },
      opts: ["F₂ has only London forces, OF₂ is polar and also has dipole-dipole forces, and HF forms hydrogen bonds", "HF has the largest molar mass of the three", "F₂ has the strongest covalent bond, so it boils at the lowest temperature", "OF₂ forms hydrogen bonds because it contains both O and F"],
      a: 0,
      why: "F₂ apolar (yalnızca London), OF₂ polar (dipol-dipol + London), HF'de H doğrudan F'ye bağlı (hidrojen bağı). Kuvvet türü sıralaması: F₂ < OF₂ < HF. D en çekici yanlış şık: OF₂'de H yoktur, hidrojen bağı kuramaz." },
    { q: "The graph shows the boiling points of the noble gases. What is the reason for the increase in boiling point from He to Kr?",
      fig: { type: "bar", cats: ["He", "Ne", "Ar", "Kr"], series: [{ name: "Boiling point", values: [4, 27, 87, 120] }], ylabel: "K" },
      opts: ["Hydrogen bonds form between noble gas atoms", "London forces get stronger as atomic size and the number of electrons increase", "Noble gases are polar atoms", "There are ionic bonds between Kr atoms"],
      a: 1,
      why: "Soygazlar apolar tek atomludur; elektron bulutu büyüdükçe daha kolay bozulur ve London kuvveti artar. C en çekici yanlış şık: soygaz atomları polar değildir." }
  ]
};
