/* Kitpath not defteri · ch103 · 1.3 Katı Türleri
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Chemistry Exam 1) + MEB 10. sınıf kimya programı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ch103",
  amac: "Bu konu katıları taneciklerin dizilişine ve aralarındaki kuvvete göre sınıflandırıyor: kristal ve amorf katılar, kristallerde iyonik, metalik, kovalent ağ ve moleküler katılar. Bir katının özelliklerinden türünü bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Kristal ve amorf katı",
      kisa: "Kristalde tanecikler düzenli dizilir ve erime noktası sabittir; amorfta düzen yoktur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💎", baslik: "*Crystalline solid* (kristal katı)", maddeler: ["Tanecikler düzenli, tekrar eden bir örgüde (*lattice*)", "Belirli ve sabit bir erime noktası vardır"] },
          sag: { ikon: "🪟", baslik: "*Amorphous solid* (amorf katı)", maddeler: ["Tanecikler gelişigüzel dizilmiştir", "Sabit erime noktası yok; ısıtılınca yavaş yavaş yumuşar"] },
          oyun: [
            { metin: "Sofra tuzu", cevap: "sol", neden: "Na⁺ ve Cl⁻ düzenli bir kafes kurar." },
            { metin: "Cam", cevap: "sag", neden: "Düzensiz dizilim; ısıtılınca yumuşar." },
            { metin: "Elmas", cevap: "sol", neden: "C atomları düzenli bir ağ kurar." },
            { metin: "Plastik poşet", cevap: "sag", neden: "Düzensiz zincirler; belirli erime noktası yok." },
            { metin: "Buz", cevap: "sol", neden: "H₂O molekülleri düzenli altıgen bir örgüde." }
          ] },
        { tip: "grafik", baslik: "Isıtma eğrisi: kristalde düzlük var, amorfta yok", xlabel: "Verilen ısı", ylabel: "Sıcaklık", xmax: 10, ymax: 10,
          xticks: [], yticks: [],
          ogeler: [
            { id: "k", tip: "egri", renk: 0, etiket: "kristal", noktalar: [[0, 1], [1, 2.2], [2, 3.4], [3, 5], [4.5, 5], [6, 5], [7, 6.6], [8, 8.2], [9, 9.6]] },
            { id: "em", tip: "cizgi", renk: 1, kesik: true, from: [0, 5], to: [10, 5], gizli: true },
            { id: "emt", tip: "yazi", x: 4.5, y: 5.8, metin: "erirken sıcaklık sabit", gizli: true },
            { id: "a", tip: "egri", renk: 2, etiket: "amorf", noktalar: [[0, 1], [2, 2.6], [4, 4.2], [6, 5.8], [8, 7.4], [9, 8.2]], gizli: true }
          ],
          durumlar: [
            { metin: "Kristal bir katıyı sürekli ısıtıyoruz: önce sıcaklık yükselir." },
            { metin: "Erime başlayınca sıcaklık ==sabit kalır==, verilen ısı örgüyü dağıtmaya gider. Sabit erime noktası kristalin imzasıdır.", goster: ["em", "emt"] },
            { metin: "Amorf katıda böyle bir düzlük yoktur: sıcaklık yükselirken madde yavaş yavaş yumuşar.", goster: ["a"] },
            { metin: "Sonuç: ==düzlük (sabit erime noktası) varsa kristal==, yoksa amorf." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: kristal", metin: "*Crystalline solids have a regular, repeating arrangement of particles and a sharp melting point.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: amorf", metin: "*Amorphous solids, such as glass, have no regular structure and soften gradually when heated.*" }
          ] }
      ]
    },
    {
      baslik: "İyonik katılar",
      kisa: "İyonik kristal sert ve kırılgandır; katıda iletmez, erimişken ya da çözünmüşken iletir.",
      bloklar: [
        { tip: "adimlar", baslik: "İyonik kristal neden kırılgandır?", adimlar: [
            { baslik: "Düzgün kafes", metin: "Zıt yüklü iyonlar sırayla dizilir: + − + −." },
            { baslik: "Kayma", metin: "Çekiç darbesiyle bir katman bir sıra kayar; aynı yüklü iyonlar karşı karşıya gelir." },
            { baslik: "İtme", metin: "Aynı yükler birbirini iter ve kristal çatlayıp kırılır. Sert ama ==kırılgan.==" }
          ] },
        { tip: "tablo", baslik: "Yük büyüdükçe çekim artar", head: ["Madde", "İyon yükleri", "Erime noktası"], rows: [
            ["NaCl", "+1 ve −1", "801 °C"],
            ["CaO", "+2 ve −2", "≈ 2600 °C"],
            ["MgO", "+2 ve −2 (iyonlar daha küçük)", "≈ 2850 °C"]
          ], not: "İyon yükleri büyüdükçe ve iyonlar küçüldükçe çekim artar, erime noktası yükselir." },
        { tip: "tuzak", metin: "İyonik katılar iyon içerir, ama iyonlar katıda yerinden oynamaz.", yanlis: "İyonik bileşikler iyon içerdiği için katı hâlde de elektriği iletir.", dogru: "Katı NaCl iletmez (iyonlar sabit). ==Erimiş== ya da ==suda çözünmüş== NaCl iletir, çünkü iyonlar hareket edebilir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: iletkenlik", metin: "*Solid NaCl does not conduct electricity because its ions are fixed, but molten NaCl does because the ions can move.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: erime noktası", metin: "*MgO has a higher melting point than NaCl because its ions have larger charges.*" }
          ] }
      ]
    },
    {
      baslik: "Metalik katılar",
      kisa: "Metalde değerlik elektronları serbesttir; bu yüzden iletken, parlak ve dövülebilirdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Electron sea", tr: "elektron denizi", tanim: "Metal katyonlarının arasında serbestçe dolaşan değerlik elektronları. Katyonları bir arada tutan yapıştırıcıdır.", ornek: "Bakır telde elektronlar akıp elektriği taşır." },
            { ikon: "🔨", terim: "Malleable", tr: "dövülebilir", tanim: "Çekiçle tabaka hâline getirilebilir; katmanlar kayar ama elektron denizi onları tutmaya devam eder.", ornek: "Alüminyum folyo." },
            { ikon: "🧵", terim: "Ductile", tr: "tel hâline getirilebilir", tanim: "Çekilip ince tel yapılabilir.", ornek: "Elektrik kablosundaki bakır tel." }
          ] },
        { tip: "tablo", baslik: "Metallerin erime noktası çok değişir", head: ["Metal", "Erime noktası"], rows: [
            ["Cıva (Hg)", "−39 °C (oda sıcaklığında sıvı)"],
            ["Sodyum (Na)", "98 °C (bıçakla kesilir)"],
            ["Demir (Fe)", "1538 °C"],
            ["Tungsten (W)", "3422 °C"]
          ] },
        { tip: "tuzak", metin: "Metalik bağın gücü metale göre çok değişir.", yanlis: "Bütün metaller sert ve yüksek sıcaklıkta erir.", dogru: "Metalik bağın gücü değerlik elektron sayısına ve atom büyüklüğüne bağlıdır: Na yumuşaktır ve 98 °C'de erir, Hg oda sıcaklığında sıvıdır, W 3400 °C'nin üzerinde erir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: iletkenlik", metin: "*Metals conduct electricity in the solid state because their valence electrons move freely.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: dövülebilirlik", metin: "*Metals are malleable because layers of cations can slide over each other while the electron sea holds them together.*" }
          ] }
      ]
    },
    {
      baslik: "Kovalent ağ katıları",
      kisa: "Tüm kristal tek dev molekül gibidir: çok sert, çok yüksek erime noktası.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕸️", terim: "Covalent network solid", tr: "kovalent ağ katısı", tanim: "Atomların birbirine kovalent bağlarla uzayda sürekli bir ağ kurduğu katı. Eriyebilmesi için kovalent bağların kopması gerekir.", ornek: "Elmas (C), kuvars (SiO₂ ≈ 1700 °C), karborundum (SiC)." },
            { ikon: "🔀", terim: "Allotrope", tr: "allotrop", tanim: "Aynı elementin farklı yapıdaki biçimleri.", ornek: "Elmas ve grafit, ikisi de saf karbon." }
          ] },
        { tip: "ikili", sol: { ikon: "💎", baslik: "Elmas", maddeler: ["Her C, dört C'ye bağlı; sağlam üç boyutlu ağ", "En sert doğal madde, elektriği iletmez"] },
          sag: { ikon: "✏️", baslik: "Grafit", maddeler: ["Katmanlı yapı; katmanlar arası zayıf kuvvetler", "Yumuşak, katmanlar kayar; elektriği iletir"] },
          oyun: [
            { metin: "Cam kesmekte kullanılır.", cevap: "sol", neden: "Son derece sert: elmas." },
            { metin: "Kalem ucunda kullanılır.", cevap: "sag", neden: "Katmanlar kayar ve kâğıda iz bırakır: grafit." },
            { metin: "Elektriği iletir.", cevap: "sag", neden: "Katmanlarda serbest elektronlar vardır: grafit." },
            { metin: "Her C atomu dört komşuya bağlıdır.", cevap: "sol", neden: "Dört yönlü ağ: elmas." },
            { metin: "Katmanları zayıf kuvvetlerle bir arada durur.", cevap: "sag", neden: "Katmanlar arası zayıf kuvvet: grafit." }
          ] },
        { tip: "tuzak", metin: "Kovalent ağ katılarının çoğu yalıtkandır; grafit istisnadır.", yanlis: "Ametal elementlerden oluşan hiçbir katı elektriği iletmez.", dogru: "==Grafit== ametal (C) olduğu hâlde katmanları boyunca serbest elektronları olduğu için iletkendir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: yapı", metin: "*Diamond is a covalent network solid, so melting it requires breaking strong covalent bonds.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: grafit", metin: "*Graphite conducts electricity because it has delocalized electrons that move freely within its layers.*" }
          ] }
      ]
    },
    {
      baslik: "Moleküler katılar",
      kisa: "Moleküller zayıf kuvvetlerle tutulur: yumuşak, düşük erime noktası, iletken değil.",
      bloklar: [
        { tip: "tablo", baslik: "Moleküler katı örnekleri", head: ["Madde", "Molekül türü", "Moleküller arası kuvvet", "Erime/süblimleşme"], rows: [
            ["İyot (I₂)", "Apolar", "London", "114 °C"],
            ["Naftalin (C₁₀H₈)", "Apolar", "London", "80 °C"],
            ["Kuru buz (CO₂)", "Apolar", "London", "−78 °C'de süblimleşir"],
            ["Buz (H₂O)", "Polar", "Hidrojen bağı", "0 °C"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💨", terim: "Sublimation", tr: "süblimleşme", tanim: "Katının sıvı hâle geçmeden doğrudan gaza dönüşmesi. Zayıf London kuvvetli moleküler katılarda sık görülür.", ornek: "Kuru buz, naftalin, iyot." },
            { ikon: "🧊", terim: "Molecular solid", tr: "moleküler katı", tanim: "Tanecikleri moleküller olan katı; moleküller arası zayıf kuvvetlerle tutulur. Erirken molekül içi bağlar kopmaz.", ornek: "Şeker, buz, kuru buz." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: özellikler", metin: "*Molecular solids have low melting points because only weak intermolecular forces must be overcome.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: karşılaştırma", metin: "*Ice melts at a higher temperature than dry ice because water molecules form hydrogen bonds.*" }
          ] }
      ]
    },
    {
      baslik: "Bilinmeyen katıyı sınıflandırma",
      kisa: "Erime noktası, sertlik ve iletkenlik testleri katının türünü ele verir.",
      bloklar: [
        { tip: "tablo", baslik: "Dört katı türü bir arada", head: ["Özellik", "İyonik", "Kovalent ağ", "Metalik", "Moleküler"], rows: [
            ["Tanecik", "İyonlar", "Atomlar", "Katyonlar + serbest e⁻", "Moleküller"],
            ["Tutan kuvvet", "İyonik bağ", "Kovalent bağ", "Metalik bağ", "Zayıf etkileşimler"],
            ["Erime noktası", "Yüksek", "Çok yüksek", "Değişken", "Düşük"],
            ["Sertlik", "Sert, kırılgan", "Çok sert (grafit hariç)", "Dövülebilir, parlak", "Yumuşak"],
            ["Örnek", "NaCl, MgO, ZnS, KI, CaF₂", "Elmas, kuvars (SiO₂), SiC", "Zn, Al, Ca, Fe, Cu", "H₂O, NH₃, CO₂, I₂"],
            ["Katıda iletkenlik", "Yok", "Yok (grafit var)", "Var", "Yok"],
            ["Eriyik / çözelti", "İletir", "—", "—", "İletmez"]
          ] },
        { tip: "ornek", baslik: "Dört bilinmeyen katı", durum: "A: 801 °C'de erir, katıyken iletmez, erimişken iletir. B: 1700 °C'de erir, çok serttir, hiç iletmez. C: 98 °C'de erir, bıçakla kesilir, katıyken iletir. D: 80 °C'de erir, yumuşaktır, iletmez. Türlerini bul.",
          adimlar: ["A: katıda iletmez, erimişken iletir → iyonlar var → iyonik.", "B: çok yüksek erime noktası ve çok sert → kovalent ağ.", "C: katıda iletir, yumuşak, dövülebilir → metalik.", "D: düşük erime noktası, yumuşak, iletmez → moleküler."],
          sonuc: "==A iyonik, B kovalent ağ, C metalik, D moleküler==. Sırayla sor: iletiyor mu? Erime noktası yüksek mi? Sert mi?" },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: gerekçe", metin: "*The solid is ionic because it does not conduct electricity as a solid but does conduct when molten.*" },
            { ikon: "✍️", baslik: "Sınavda böyle yaz: sınıflandırma", metin: "*The substance has a low melting point and is soft, so it is a molecular solid.*" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kristal katıda tanecikler düzenli ve erime noktası sabittir; amorf katıda (cam, plastik) düzen yoktur, ısıtılınca yumuşar.",
            "İyonik katı: sert, kırılgan, yüksek erime noktası; katıda iletmez, erimişken ve çözeltide iletir.",
            "Yük büyüdükçe ve iyonlar küçüldükçe iyonik katının erime noktası artar (NaCl < MgO).",
            "Metalik katı: serbest elektronlar sayesinde iletken, dövülebilir, tel çekilebilir; erime noktası metalden metale çok değişir.",
            "Kovalent ağ katısı (elmas, SiO₂, SiC): çok sert, çok yüksek erime noktası. Grafit katmanlıdır, yumuşaktır ve iletkendir.",
            "Moleküler katı (I₂, buz, kuru buz): zayıf kuvvetler, yumuşak, düşük erime noktası, iletmez; bazıları süblimleşir.",
            "Sınıflandırırken sırayla bak: iletkenlik, erime noktası, sertlik."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "The heating curves of two solids are shown in the graph: X as a solid line and Y as a dashed line. Which interpretation is correct?",
      fig: { type: "graph", xlabel: "Heat added", ylabel: "Temperature", xmax: 10, ymax: 10, lines: [{ from: [0, 1], to: [3, 5] }, { from: [3, 5], to: [6, 5] }, { from: [6, 5], to: [9, 9], label: "X" }, { from: [0, 1], to: [9, 8], label: "Y", dash: true }] },
      opts: ["X is amorphous and Y is crystalline", "Both are crystalline solids", "X is crystalline and Y is amorphous", "Both are amorphous solids"],
      a: 2,
      why: "X'in eğrisinde sıcaklığın sabit kaldığı bir düzlük var: sabit erime noktası, yani kristal. Y'de düzlük yok, yavaş yavaş yumuşuyor: amorf. A en çekici yanlış şık: düzlüğü amorfa yorar." },
    { q: "Graphite in a pencil conducts electricity, but diamond, made of the same element, does not. What is the reason?",
      opts: ["Graphite has electrons in its layers that can move freely", "Diamond is an ionic solid", "Graphite is a metal", "Graphite is a molecular solid with hydrogen bonds"],
      a: 0,
      why: "Grafitte her C atomunun bir elektronu katmanlar boyunca serbesttir; elmasta tüm elektronlar bağlarda tutulur. C en çekici yanlış şık: grafit karbondur, metal değildir ama iletken olabilir." },
    { q: "The properties of four solids are given in the table. Which one is a molecular solid?",
      fig: { type: "table", caption: "Unknown solids", head: ["Solid", "Melting point", "Conductivity as a solid", "Conductivity when molten"], rows: [["K", "801 °C", "No", "Yes"], ["L", "1085 °C", "Yes", "Yes"], ["M", "1700 °C", "No", "No"], ["N", "80 °C", "No", "No"]] },
      opts: ["K", "L", "M", "N"],
      a: 3,
      why: "N'nin erime noktası düşüktür ve katı da eriyik de iletmez: zayıf kuvvetlerle tutulan moleküller. M de iletmez ama 1700 °C'de erir; bu kovalent ağ katısıdır (en çekici yanlış şık)." },
    { q: "The melting point of NaCl is 801 °C, while that of MgO is about 2850 °C. Which statement best explains this difference?",
      opts: ["MgO is a molecular solid", "The ions in MgO have larger charges and are smaller, so the ionic attraction is stronger", "NaCl has hydrogen bonds", "MgO has covalent bonds but NaCl does not"],
      a: 1,
      why: "Mg²⁺ ve O²⁻ iyonlarının yükleri Na⁺ ve Cl⁻'dan büyük ve iyonlar daha küçüktür; çekim kuvveti artar. A en çekici yanlış şık: iki madde de iyonik katıdır, molekül içermez." },
    { q: "When hit with a hammer, an NaCl crystal shatters, but a copper wire changes shape without breaking. What is the reason for this difference?",
      opts: ["In copper, the sea of free electrons keeps holding the cations together as the layers slide", "Copper is a covalent network solid", "NaCl has a low melting point", "When the ions in NaCl slide, opposite charges meet and attract each other"],
      a: 0,
      why: "Metalde katyon katmanları kayınca elektron denizi hâlâ onları tutar. NaCl'de ise kayma aynı yüklü iyonları karşı karşıya getirir ve itme kristali kırar. D en çekici yanlış şık: kayınca karşılaşanlar aynı yüklü iyonlardır, zıt yükler değil." }
  ]
};
