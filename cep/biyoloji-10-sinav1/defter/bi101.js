/* Kitpath not defteri · bi101 (Biyoloji 10 yazılı kiti kopyası; okul/biology/unit-1'den, 2026-27 Senaryo 4'e göre) · 1.1 Canlılar ve Enerji, ATP
   Kaynak: öğretmen sunumu "1.1 Importance of Energy for Living Things" (+ 1.2 sunumu sl. 3–7: ototrof/heterotrof) ve Exam 1 Success Criteria BIO.10.1.1. 2026-10-29: sunum + kazanım dışı kısımlar çıkarıldı (heterotrof türleri, substrat düzeyinde fosforilasyon). 2026-10-30: numaralı ATP şeması (etiketleme), kemosentezde nitrat çıkarıldı, açıklamalarda şık harfi yok; karşılaştırma: takip/sinav-kitleri/biyoloji-10/SUNUM-KARSILASTIRMA.md. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi101",
  amac: "Bu konu canlıların enerjiyi nereden bulduğunu anlatıyor: *metabolism* ile enerji biçimleri, ototrof ve heterotrof beslenme, sonra hücrenin enerji parası *ATP*. ATP'nin yapısını ve nasıl yapılıp yıkıldığını (*phosphorylation*, *dephosphorylation*) öğreneceksin.",
  bolumler: [
    {
      baslik: "Canlılar neden enerjiye ihtiyaç duyar?",
      kisa: "Büyüme, hareket ve onarım enerji ister; enerji dönüşür, yoktan var olmaz.",
      bloklar: [
        { tip: "not", metin: "Hücre hiç durmadan iş yapar: büyür, bölünür, madde taşır, kas kasılır, protein yapar. Bu işlerin hepsi ==enerji== ister. Enerji yoktan var edilemez; bir biçimden başka bir biçime ==dönüşür==." },
        { tip: "adimlar", baslik: "Enerjinin canlıya yolculuğu", adimlar: [
            { baslik: "Kaynak", metin: "Çoğu besin zincirinde güneş ışığı. Bazı bakterilerde inorganik maddelerin tepkimesi." },
            { baslik: "Besin molekülü", metin: "Enerji glikoz gibi organik moleküllerin bağlarında depolanır." },
            { baslik: "ATP", metin: "Hücre besindeki enerjiyi hemen kullanamaz; önce *ATP*'ye aktarır." },
            { baslik: "İş", metin: "ATP'nin enerjisi kas kasılmasında, taşımada ve sentezde harcanır." }
          ] },
        { tip: "ikili", sol: { ikon: "⚡", baslik: "Enerji (ATP) ister", maddeler: ["Protein sentezi (amino asitlerden)", "Aktif taşıma", "Kas kasılması, hücre bölünmesi"] },
          sag: { ikon: "🍃", baslik: "Enerji (ATP) istemez", maddeler: ["Difüzyon (ör. O₂'nin hücreye girmesi)", "Osmoz (suyun kök hücresine girmesi)", "Çok olduğu yerden az olduğu yere kendiliğinden geçiş"] },
          oyun: [
            { metin: "Hücrenin amino asitlerden protein yapması.", cevap: "sol", neden: "Küçük birimlerden büyük molekül kurmak (anabolizma) ATP ister." },
            { metin: "Akciğerde O₂'nin kana geçmesi.", cevap: "sag", neden: "Difüzyondur, kendiliğinden olur: ATP harcanmaz." },
            { metin: "İyonların az olduğu yerden çok olduğu yere taşınması.", cevap: "sol", neden: "Aktif taşımadır: ATP harcanır." },
            { metin: "Suyun osmozla kök hücresine girmesi.", cevap: "sag", neden: "Osmoz edilgen taşımadır: ATP harcanmaz." }
          ] },
        { tip: "not", metin: "Sınavda böyle yaz: *Living things need energy for growth, movement and repair.* ve *Energy is not created or destroyed; it is converted from one form to another.*" }
      ]
    },
    {
      baslik: "*Metabolism* ve enerji biçimleri",
      kisa: "Metabolizma = anabolizma + katabolizma; enerji ekosisteme ışıkla girer, ısıyla çıkar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Anabolism*", alt: "enerji harcar" }, "+",
            { t: "*Catabolism*", alt: "enerji verir" }, "=",
            { t: "*Metabolism*", alt: "tüm kimyasal tepkimeler" }
          ], aciklama: "*Bioenergetics* (biyoenerjetik), canlıların enerji kaynaklarını nasıl yönettiğini inceler: enerji akışı, üretimi ve tüketimi." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏃", terim: "Kinetic energy", tr: "kinetik enerji", tanim: "Hareketle ilgili enerji. *Heat* (ısı), atom ve moleküllerin rastgele hareketiyle ilgili kinetik enerjidir.", ornek: "Kasılan kas, titreşen moleküller." },
            { ikon: "⛰️", terim: "Potential energy", tr: "potansiyel enerji", tanim: "Maddenin konumundan ya da yapısından gelen enerji. *Chemical energy* tepkimede açığa çıkabilen potansiyel enerjidir.", ornek: "Glikozun bağlarındaki enerji." },
            { ikon: "🔒", terim: "Open system", tr: "açık sistem", tanim: "Çevresiyle enerji ve madde alışverişi yapar. Canlılar açık sistemdir; *closed system* (termos gibi) çevreden yalıtılmıştır.", ornek: "Hücre, ekosistem." }
          ] },
        { tip: "not", metin: "Enerji ekosisteme ==ışık== olarak girer, ==ısı== olarak çıkar. *Photosynthesis* ışığı kimyasal enerjiye çevirir; hücresel solunum besindeki kimyasal enerjiyi ATP'nin fosfat bağlarına aktarır. Sınavda böyle yaz: *Energy can be converted from one form to another, and organisms are open systems.*" }
      ]
    },
    {
      baslik: "*Autotroph* ve *heterotroph*",
      kisa: "Ototrof besinini kendi yapar; heterotrof hazır organik madde tüketir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌱", baslik: "*Autotroph* (ototrof)", maddeler: ["İnorganik maddelerden (CO₂, H₂O) organik madde yapar", "Besinini kendi üretir", "Örnek: bitki, alg, siyanobakteri"] },
          sag: { ikon: "🦊", baslik: "*Heterotroph* (heterotrof)", maddeler: ["Hazır organik madde alır", "Besinini üretemez", "Örnek: hayvan, mantar, çoğu bakteri"] },
          oyun: [
            { metin: "Kantin bahçesindeki domates bitkisi.", cevap: "sol", neden: "CO₂ ve sudan organik madde yapar: ototrof." },
            { metin: "Okul bahçesinde ekmek kırıntısı yiyen serçe.", cevap: "sag", neden: "Hazır organik madde tüketir: heterotrof." },
            { metin: "Ekmeğin üstünde küflenen mantar.", cevap: "sag", neden: "Mantar klorofil taşımaz, organik maddeyi ayrıştırır: heterotrof." },
            { metin: "Göldeki yeşil alg.", cevap: "sol", neden: "Işıkla kendi besinini yapar: ototrof." }
          ] },
        { tip: "not", metin: "İnsan dahil hemen bütün heterotroflar besin ve O₂ için fotoototroflara bağlıdır. Sınavda böyle yaz: *Autotrophs make their own organic molecules from inorganic substances, whereas heterotrophs obtain organic molecules from other organisms.*" }
      ]
    },
    {
      baslik: "Fotoototrof ve kemoototrof",
      kisa: "İkisi de besin yapar; fark enerji kaynağı: ışık mı, kimyasal tepkime mi.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "☀️", baslik: "*Photoautotroph* (fotoototrof)", maddeler: ["Enerji kaynağı: ==ışık==", "Örnek: bitki, alg, siyanobakteri, mor sülfür bakterisi", "Süreç: *photosynthesis*"] },
          sag: { ikon: "⚗️", baslik: "*Chemoautotroph* (kemoototrof)", maddeler: ["Enerji kaynağı: ==inorganik maddelerin oksidasyonu== (ör. nitrit, demir + O₂)", "Yalnız bazı bakterilerde: kemosentetik bakteriler", "Işık ve klorofil gerekmez; süreç: *chemosynthesis*"] },
          oyun: [
            { metin: "Işık almayan toprakta demir bileşiklerini yükseltgeyerek besin yapan bakteri.", cevap: "sag", neden: "Enerji ışıktan değil, inorganik maddenin yükseltgenmesinden gelir: kemoototrof." },
            { metin: "Kloroplastlarıyla CO₂'yi şekere çeviren yaprak hücresi.", cevap: "sol", neden: "Işık enerjisi kullanır: fotoototrof." },
            { metin: "Topraktaki nitriti yükseltgeyerek enerji sağlayan bakteri.", cevap: "sag", neden: "İnorganik madde yükseltgeniyor: kemoototrof." },
            { metin: "Pigmenti sayesinde ışıktan yararlanan siyanobakteri.", cevap: "sol", neden: "Bakteri olsa da enerjisi ışıktır: fotoototrof." }
          ] },
        { tip: "tuzak", metin: "“Ototrof” demek “bitki” demek değildir. Siyanobakteriler ve algler de ototroftur. Kemoototroflar ise hiç ışık kullanmaz.", yanlis: "Bütün ototroflar fotosentez yapar.", dogru: "Ototrof, besinini kendi yapan canlıdır. Enerjisi ışıksa fotoototrof, kimyasalsa kemoototroftur." },
        { tip: "not", metin: "Sınavda böyle yaz: *Photoautotrophs use light energy, but chemoautotrophs use the energy released by oxidizing inorganic substances.*" }
      ]
    },
    {
      baslik: "ATP'nin yapısı",
      kisa: "ATP: adenin, riboz ve üç fosfattan oluşan enerji taşıyıcıdır.",
      bloklar: [
        { tip: "grafik", baslik: "ATP'yi etiketle: numaralı şema", xlabel: "", ylabel: "", xmax: 12, ymax: 8,
          ogeler: [
            { id: "p3", tip: "alan", renk: 3, noktalar: [[1.95, 4.2], [1.88, 4.48], [1.68, 4.68], [1.4, 4.75], [1.12, 4.68], [0.92, 4.48], [0.85, 4.2], [0.92, 3.93], [1.12, 3.72], [1.4, 3.65], [1.68, 3.72], [1.88, 3.92]] },
            { id: "p2", tip: "alan", renk: 3, noktalar: [[3.55, 4.2], [3.48, 4.48], [3.27, 4.68], [3.0, 4.75], [2.73, 4.68], [2.52, 4.48], [2.45, 4.2], [2.52, 3.93], [2.72, 3.72], [3.0, 3.65], [3.27, 3.72], [3.48, 3.92]] },
            { id: "p1", tip: "alan", renk: 3, noktalar: [[5.15, 4.2], [5.08, 4.48], [4.88, 4.68], [4.6, 4.75], [4.32, 4.68], [4.12, 4.48], [4.05, 4.2], [4.12, 3.93], [4.32, 3.72], [4.6, 3.65], [4.88, 3.72], [5.08, 3.92]] },
            { id: "bUc", tip: "cizgi", renk: 0, from: [1.95, 4.2], to: [2.45, 4.2] },
            { id: "bOrta", tip: "cizgi", renk: 0, from: [3.55, 4.2], to: [4.05, 4.2] },
            { id: "bEster", tip: "cizgi", renk: 0, from: [5.15, 4.2], to: [6.0, 4.29] },
            { id: "riboz", tip: "alan", renk: 2, noktalar: [[6.9, 4.95], [7.8, 4.29], [7.46, 3.23], [6.34, 3.23], [6.0, 4.29]] },
            { id: "bGlik", tip: "cizgi", renk: 0, from: [7.8, 4.29], to: [8.66, 4.81] },
            { id: "adenin5", tip: "alan", renk: 1, noktalar: [[9.46, 5.93], [9.46, 5.08], [8.66, 4.81], [8.16, 5.5], [8.66, 6.19]] },
            { id: "adenin6", tip: "alan", renk: 1, noktalar: [[10.2, 6.35], [10.94, 5.93], [10.94, 5.08], [10.2, 4.65], [9.46, 5.08], [9.46, 5.93]] },
            { id: "k3a", tip: "cizgi", renk: 0, kesik: true, from: [0.8, 5.0], to: [0.8, 5.35] },
            { id: "k3b", tip: "cizgi", renk: 0, kesik: true, from: [0.8, 5.35], to: [5.2, 5.35] },
            { id: "k3c", tip: "cizgi", renk: 0, kesik: true, from: [5.2, 5.35], to: [5.2, 5.0] },
            { id: "k4a", tip: "cizgi", renk: 0, kesik: true, from: [6.0, 5.3], to: [6.0, 6.75] },
            { id: "k4b", tip: "cizgi", renk: 0, kesik: true, from: [6.0, 6.75], to: [11.0, 6.75] },
            { id: "k4c", tip: "cizgi", renk: 0, kesik: true, from: [11.0, 6.75], to: [11.0, 6.45] },
            { id: "n1", tip: "yazi", x: 10.2, y: 3.75, metin: "1" },
            { id: "n2", tip: "yazi", x: 6.9, y: 2.3, metin: "2" },
            { id: "n3", tip: "yazi", x: 3.0, y: 5.75, metin: "3" },
            { id: "n4", tip: "yazi", x: 8.5, y: 7.15, metin: "4" },
            { id: "n5", tip: "yazi", x: 8.55, y: 3.55, metin: "5" },
            { id: "n6", tip: "yazi", x: 5.55, y: 3.2, metin: "6" },
            { id: "n7", tip: "yazi", x: 2.2, y: 3.2, metin: "7" }
          ],
          durumlar: [
            { metin: "ATP'nin şeması. Önce 1–7 numaralı yerlerin adını kendin söyle (*label the diagram*), sonra ileri bas." },
            { metin: "==1 = *adenine*== (azotlu organik baz), ==2 = *ribose*== (5 karbonlu şeker), ==3 = *phosphate groups*== (üç fosfat). 4 = adenin + riboz = *adenosine*." },
            { metin: "==5 = *glycosidic bond*== (riboz ile adenin arası), ==6 = *ester bond*== (riboz ile fosfat arası)." },
            { metin: "==7 = uçtaki fosfat bağı== (*terminal phosphate bond*, 2. ve 3. fosfat arası). Hücre enerji isteyince bu bağ hidrolizle kopar: ATP + H₂O → ADP + Pᵢ + enerji.", gizle: ["p3", "bUc", "n7"] },
            { metin: "Adenozine 1 fosfat bağlıysa *AMP*, 2 ise *ADP*, 3 ise *ATP*. Sınavda böyle yaz: *Energy is released when the bond to the terminal phosphate is hydrolysed.*", goster: ["p3", "bUc", "n7"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔋", terim: "ATP", tr: "adenozin trifosfat", tanim: "Üç fosfatlı enerji taşıyıcı. ==Enerji fosfatlar arasındaki bağlarda== bulunur, adeninde değil.", ornek: "Kasın bir kez kasılması için ATP harcanır." },
            { ikon: "🪫", terim: "ADP", tr: "adenozin difosfat", tanim: "İki fosfatlı, enerjisi azalmış hâl. ATP'nin bir fosfat vermesiyle oluşur.", ornek: "Boşalmış pil gibi, tekrar şarj edilebilir." }
          ] },
        { tip: "tuzak", metin: "ATP uzun süreli depo değildir; hücrede çok az bulunur ve saniyeler içinde kullanılıp yenilenir. Uzun süreli depo yağ ve nişasta ya da glikojendir.", yanlis: "ATP, hücrenin enerji deposudur.", dogru: "ATP, enerjinin ==kısa süreli taşıyıcısı== yani hücrenin enerji parasıdır. Asıl enerji kaynağı besindir." },
        { tip: "not", metin: "Her hücre ATP'sini kendisi yapar; ATP büyük bir molekül olduğu için hücreler arasında taşınmaz. Hücrede ATP üretimi durursa (ör. ATP yapımını engelleyen bir madde) enerji isteyen işler (aktif taşıma, sentez, bölünme, hareket) yapılamaz ve hücre bir süre sonra ölür. Sınavda böyle yaz: *ATP consists of adenine, ribose and three phosphate groups; the energy is stored in the bonds between the phosphate groups.*" }
      ]
    },
    {
      baslik: "Fosforilasyon ve defosforilasyon",
      kisa: "ATP yapımı enerji ister; ATP yıkımı enerji verir.",
      bloklar: [
        { tip: "grafik", baslik: "ATP döngüsü: enerji basamağı", xlabel: "Tepkime", ylabel: "Enerji", xmax: 10, ymax: 10,
          ogeler: [
            { id: "adp", tip: "cizgi", renk: 1, from: [0.5, 3], to: [5, 3], etiket: "ADP + Pᵢ" },
            { id: "atp", tip: "cizgi", renk: 0, from: [0.5, 6.5], to: [5, 6.5], etiket: "ATP + H₂O" },
            { id: "fos", tip: "ok", renk: 3, from: [2, 3.3], to: [2, 6.2], gizli: true },
            { id: "fosy", tip: "yazi", x: 2.2, y: 4.7, metin: "Enerji girer", hiza: "start", gizli: true },
            { id: "def", tip: "ok", renk: 2, from: [4, 6.2], to: [4, 3.3], gizli: true },
            { id: "defy", tip: "yazi", x: 4.2, y: 4.7, metin: "Enerji çıkar", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "ADP + Pᵢ düşük enerjili, ATP + H₂O yüksek enerjili durumdur." },
            { metin: "==*Phosphorylation* (fosforilasyon)==: ADP'ye bir fosfat eklenir ve ATP oluşur. Enerji gerekir (*endergonic*); enzim *ATP synthase*. Su çıkar (*dehydration synthesis*).", goster: ["fos", "fosy"] },
            { metin: "==*Dephosphorylation* (defosforilasyon)==: ATP suyla parçalanır, uçtaki fosfat ayrılır (*hydrolysis*): ATP + H₂O → ADP + Pᵢ + 7300 cal. Enerji açığa çıkar (*exergonic*) ve hücrenin işine harcanır.", goster: ["def", "defy"], gizle: ["fos", "fosy"] },
            { metin: "Sınavda böyle yaz: *The graph shows that ATP has more energy than ADP + Pi, so energy is released when ATP is hydrolyzed.*", goster: ["def", "defy"] }
          ] },
        { tip: "tablo", head: ["", "*Phosphorylation*", "*Dephosphorylation*"], rows: [
            ["Tepkime", "ADP + Pᵢ + enerji → ATP + H₂O", "ATP + H₂O → ADP + Pᵢ + enerji"],
            ["Enerji", "Alınır (*endergonic*)", "Verilir (*exergonic*)"],
            ["Tür", "*Dehydration synthesis* (su çıkar)", "*Hydrolysis* (su girer)"],
            ["Serbest enerji", "ΔG > 0, kendiliğinden yürümez", "ΔG < 0, kendiliğinden yürür"],
            ["Sonuç", "ATP yapılır", "ATP yıkılır"]
          ], vurgu: 1, not: "Sınavda böyle yaz: *Phosphorylation is an endergonic reaction because energy is needed to attach a phosphate group to ADP.*" },
        { tip: "tuzak", metin: "Fosforilasyon–defosforilasyon karışıklığı çok yapılır. ATP'nin enerji vermesi ATP'nin ==yıkılması== demektir.", yanlis: "Defosforilasyonda ATP oluşur.", dogru: "Defosforilasyonda ATP yıkılır (ADP + Pᵢ) ve enerji açığa çıkar. ATP'nin oluşması fosforilasyondur." }
      ]
    },
    {
      baslik: "ATP, anabolizma ve katabolizma",
      kisa: "Katabolizma enerji verir, ATP yapımına bağlanır; anabolizma ATP harcar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧱", baslik: "*Anabolism* (anabolizma)", maddeler: ["Küçük moleküllerden büyük molekül yapar", "*Endergonic*: enerji ister, ATP harcar", "*Dehydration synthesis*: su çıkar", "Örnek: fotosentez, protein sentezi"] },
          sag: { ikon: "🔨", baslik: "*Catabolism* (katabolizma)", maddeler: ["Büyük molekülleri küçüğe parçalar", "*Exergonic*: enerji verir, ATP yapımında kullanılır", "*Hydrolysis*: su girer", "Örnek: hücresel solunum"] },
          oyun: [
            { metin: "Amino asitlerin bağlanıp protein oluşması.", cevap: "sol", neden: "Küçük birimlerden büyük molekül: anabolizma, ATP harcar." },
            { metin: "Glikozun solunumla CO₂ ve suya yıkılması.", cevap: "sag", neden: "Büyük molekül parçalanıyor, enerji açığa çıkıyor: katabolizma." },
            { metin: "İki glikozun su çıkararak maltoz yapması.", cevap: "sol", neden: "Su çıkıyor, bağ kuruluyor: dehidrasyon sentezi, anabolik." },
            { metin: "Nişastanın su girerek glikoza parçalanması.", cevap: "sag", neden: "Su girerek bağ kırılıyor: hidroliz, katabolik." }
          ] },
        { tip: "tablo", baslik: "Fosforilasyon türleri: ATP nerede, hangi enerjiyle yapılır?", head: ["Tür", "Nerede?", "Enerji kaynağı"], rows: [
            ["*Photophosphorylation*", "Klorofilli hücreler: kloroplast (ökaryot), sitoplazma (prokaryot)", "Işık enerjisi; ETS kullanılır"],
            ["*Oxidative phosphorylation*", "Mitokondri (ökaryot), mezozom (aerobik bakteri)", "Organik moleküllerin O₂ ile yıkımı; ETS kullanılır"],
            ["*Chemophosphorylation*", "Kemosentetik bakteriler", "İnorganik bileşiklerin oksidasyonu"]
          ], not: "Sınavda böyle yaz: *Anabolic reactions use ATP, whereas catabolic reactions release the energy that is used to make ATP.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Protein sentezi, aktif taşıma, kasılma, bölünme ATP ister; difüzyon ve osmoz istemez.",
            "Canlılar büyüme, hareket ve onarım için enerji ister; *metabolism* = *anabolism* + *catabolism*; enerji ışıkla girer, ısıyla çıkar.",
            "*Autotroph* organik maddeyi kendi yapar; *heterotroph* hazır alır.",
            "*Photoautotroph* ışık, *chemoautotroph* inorganik maddelerin oksidasyonundan enerji alır.",
            "*ATP* = adenin + riboz + 3 fosfat; enerji fosfat bağlarındadır, ATP depo değil taşıyıcıdır.",
            "*Phosphorylation*: ADP + Pᵢ + enerji → ATP (*endergonic*, su çıkar).",
            "*Dephosphorylation*: ATP + H₂O → ADP + Pᵢ + enerji (*exergonic*, *hydrolysis*).",
            "*Anabolism* ATP harcar; *catabolism* ATP yapımına enerji sağlar.",
            "Fosforilasyon türleri: *photo-* (ışık; kloroplast / prokaryot sitoplazması), *oxidative* (O₂ ile besin yıkımı; mitokondri / mezozom), *chemo-* (inorganik madde oksidasyonu; kemosentetik bakteri)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "A bacterium living in soil where no light reaches oxidizes nitrite (an inorganic substance) to obtain energy and builds organic molecules from CO₂. Which group does it belong to?",
      opts: ["*Photoautotroph*", "*Chemoautotroph*", "*Decomposer*", "*Parasite*"], a: 1,
      why: "Besinini kendi yapıyor (ototrof) ve enerjisi ışıktan değil inorganik maddenin yükseltgenmesinden geliyor: kemoototrof. Fotoototrof şıkkı çekici ama burada ışık yok." },
    { q: "Which statement about the structure of ATP is correct?",
      opts: ["It consists of adenine, glucose and two phosphate groups.", "The energy is stored inside the adenine base.", "It is the long-term energy store of the cell, like fat and glycogen.", "Adenine, ribose and three phosphates; energy is in the phosphate bonds."], a: 3,
      why: "ATP adenin + riboz + 3 fosfattır, enerji fosfat bağlarındadır. Uzun süreli depo yağ ve glikojendir; ATP'yi uzun süreli depo sayan şık bu yüzden yanlış." },
    { q: "Two reactions are shown in the table. Which statement about them is correct?",
      fig: { type: "table", head: ["Reaction", "Water"], rows: [["I. ADP + Pi + energy → ATP + H₂O", "Released"], ["II. ATP + H₂O → ADP + Pi + energy", "Used"]] },
      opts: ["I is *hydrolysis* and *exergonic*.", "II is *dehydration synthesis* and *endergonic*.", "I is *phosphorylation* and *endergonic*.", "II is *phosphorylation* and *exergonic*."], a: 2,
      why: "I numaralı tepkime ADP'ye fosfat ekler: fosforilasyon, enerji ister (endergonik). II hidrolizdir ve ekzergoniktir; II'ye ‘phosphorylation’ diyen şık yanlıştır." },
    { q: "Which of the following correctly identifies the bonds in an ATP molecule?",
      opts: ["Ribose and adenine are joined by an ester bond.", "Ribose–phosphate: ester bond; ribose–adenine: glycosidic bond.", "Ribose and phosphate are joined by a glycosidic bond.", "All parts of ATP, including the phosphates, are joined by glycosidic bonds."], a: 1,
      why: "Riboz–fosfat arası ester, riboz–adenin arası glikozit bağıdır. Yanlış şıklar bu iki bağın adını yer değiştirmiş ya da hepsine glikozit demiş." },
    { q: "Which reaction is anabolic and uses ATP?",
      opts: ["Hydrolysis of starch to glucose", "Breakdown of glucose by respiration", "Synthesis of a protein from amino acids", "Hydrolysis of ATP to ADP"], a: 2,
      why: "Küçük birimlerden büyük molekül yapmak anabolizmadır, endergoniktir ve ATP harcar. Glikozun yıkımı katabolik (ATP yapımına enerji sağlar); nişasta hidrolizi de katabolizmadır." }
  ]
};
