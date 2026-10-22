/* Kitora not defteri · st116 · 1H-2 Blocking ve Matched Pairs
   Kaynak: ap-videolar/src/episodes/st116 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st116",
  ozet: "Bazı değişkenler sonucu o kadar çok etkiler ki rastgele atama tek başına yetmez. Çare ==*blocking*==: birimleri o özelliğe göre gruplayıp *treatment*'ları her grubun içinde rastgele atamak. Bu defterde okul rotaları örneğiyle *randomized block design*'ı, *strata* ile *block* farkını, *matched pairs design*'ın iki yolunu (drag suit ve beş yüzücü) ve sıranın neden rastgele olması gerektiğini göreceksin.",
  bolumler: [
    {
      baslik: "Hangi yol daha hızlı?",
      bloklar: [
        { tip: "hikaye", ikon: "🚌", baslik: "Sabah A, öğleden sonra B",
          metin: "Okula giden üç yol var; sen en hızlısını arıyorsun. Pazartesi sabahı A yolundan gittin: 28 dakika. Salı öğleden sonra B yolundan döndün: 19 dakika. B mi daha hızlı? Yoksa sabah yollar tıkalı, öğleden sonra boş olduğu için mi? Bugün böyle güçlü bir etkiyi deneyden ayıklamayı göreceksin." },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "🌅", baslik: "Sabah (rush hour)", maddeler: ["Yollar arabalarla dolu", "A yolu: 28 dk", "Üç yol da kırmızı"] },
          sag: { ikon: "🌇", baslik: "Öğleden sonra", maddeler: ["Yollar boş", "B yolu: 19 dk", "Üç yol da yeşil"] },
          oyun: [
            { metin: "Pazartesi sabahı A yolunda 28 dakika.", cevap: "sol", neden: "Sabah yolculuğu; trafik yoğun." },
            { metin: "Salı öğleden sonra B yolunda 19 dakika.", cevap: "sag", neden: "Öğleden sonra yollar boş." },
            { metin: "Sıkışık trafikte kırmızı ışıklarda uzun uzun beklemek.", cevap: "sol", neden: "Rush hour'a özgü." },
            { metin: "Bomboş yolda hızlı yolculuk.", cevap: "sag", neden: "Öğleden sonra." }
          ] },
        { tip: "not", metin: "İki sonucu karşılaştırırken ==rota== ile ==günün vakti== birbirine karıştı: bu *confounding*. Çözüm: günün vaktini deneyden ayıklamak." }
      ]
    },
    {
      baslik: "Rota deneyi: şans dengesiz dağıtırsa",
      bloklar: [
        { tip: "hikaye", ikon: "🗺️", baslik: "Üç rota, 30 yolculuk", metin: "İki öğrenci üç rotayı okulun ilk 15 gününde deneyecek: **15 sabah, 15 öğleden sonra**, toplam **30 yolculuk**. *Completely randomized design* ile 30 yolculuğu şapkadan çekip her rotaya 10 tane verirsin." },
        { tip: "tablo", baslik: "Gerçek süreler (deneyci bilmiyor, biz biliyoruz), dakika", head: ["", "Sabah", "Öğleden sonra"], rows: [
            ["Route A", "28", "16"],
            ["Route B", "31", "19"],
            ["Route C", "34", "22"]
          ], not: "A, B'den her iki vakitte 3 dk hızlı. Sabah − öğleden sonra farkı her rotada 12 dk." },
        { tip: "ornek", baslik: "A'ya 7 sabah, B'ye 3 sabah düşerse", durum: "Şans dengesiz dağıttı: A'ya 7 sabah + 3 öğleden sonra, B'ye 3 sabah + 7 öğleden sonra düştü (C'ye 5 + 5).",
          adimlar: [
            "A: 7 × 28 = 196, 3 × 16 = 48 → 196 + 48 = 244 → 244 ÷ 10 = 24.4 dk.",
            "B: 3 × 31 = 93, 7 × 19 = 133 → 93 + 133 = 226 → 226 ÷ 10 = 22.6 dk.",
            "C: 5 × 34 + 5 × 22 = 170 + 110 = 280 → 28.0 dk.",
            "Yavaş olan B hızlı göründü (22.6 < 24.4)."
          ],
          sonuc: "Gerçekte A daha hızlı; ama dengesiz dağılım yüzünden B daha hızlı göründü. 12 dakikalık vakit farkı, rotalar arasındaki 3 dakikayı ezdi." },
        { tip: "grafik", baslik: "Vakit farkı, rota farkını ezer", xlabel: "Rota", ylabel: "Ortalama süre (dk)", xmax: 6, ymax: 30,
          xticks: [{ v: 1, label: "A" }, { v: 3, label: "B" }, { v: 5, label: "C" }], yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            { id: "ba", tip: "alan", renk: 0, noktalar: [[0.5, 0], [1.5, 0], [1.5, 24.4], [0.5, 24.4]] },
            { id: "bb", tip: "alan", renk: 2, noktalar: [[2.5, 0], [3.5, 0], [3.5, 22.6], [2.5, 22.6]] },
            { id: "bc", tip: "alan", renk: 1, noktalar: [[4.5, 0], [5.5, 0], [5.5, 28], [4.5, 28]] },
            { id: "ta", tip: "yazi", x: 1, y: 26, metin: "24.4" },
            { id: "tb", tip: "yazi", x: 3, y: 24.2, metin: "22.6" },
            { id: "tc", tip: "yazi", x: 5, y: 29.6, metin: "28.0" },
            { id: "cr", tip: "yazi", x: 3, y: 28.5, metin: "👑 B hızlı mı?", gizli: true },
            { id: "r1", tip: "ok", from: [0.5, 6], to: [2.5, 6], gizli: true },
            { id: "r1t", tip: "yazi", x: 1.5, y: 8, metin: "rota farkı: 3 dk", gizli: true },
            { id: "r2", tip: "ok", from: [3.5, 12], to: [5.5, 12], gizli: true },
            { id: "r2t", tip: "yazi", x: 4.5, y: 14, metin: "vakit farkı: 12 dk", gizli: true }
          ],
          durumlar: [
            { metin: "Rastgele dağılımın sonucu: A 24.4, B 22.6, C 28.0 dakika." },
            { metin: "B'nin sütunu A'dan kısa: ilk bakışta ==B daha hızlı== görünüyor.", goster: ["cr"] },
            { metin: "Gerçekte A'nın vakitler arası farkı 3 dk, ama sabah/öğleden sonra farkı 12 dk. Büyük etki küçük etkiyi ezdi.", goster: ["r1", "r1t", "r2", "r2t"], gizle: ["cr"] }
          ] },
        { tip: "tuzak", baslik: "Şans bazen kötü dağıtır", metin: "*Random assignment* uzun vadede dengeler; ama tek bir deneyde gruplar dengesiz çıkabilir. Çok güçlü bir etki varsa buna güvenme.", yanlis: "“Tamamen rastgele atadım, o halde günün vakti dengelendi.”", dogru: "Güçlü bir değişken (günün vakti) varsa onu *block* olarak kur." }
      ]
    },
    {
      baslik: "*Block* ve *randomized block design*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Block", tr: "blok", tanim: "*Response variable*'ı etkilemesi beklenen bir özellik bakımından birbirine benzeyen *experimental unit*'ler grubu.", ornek: "Sabah yolculukları (15) ve öğleden sonra yolculukları (15)." },
            { ikon: "🏷️", terim: "Blocking variable", tr: "bloklama değişkeni", tanim: "*Block*'ların neye göre kurulduğunu belirleyen değişken.", ornek: "Günün vakti." },
            { ikon: "🎲", terim: "Randomized block design", tr: "rastgele bloklu tasarım", tanim: "Önce *block*'lar kurulur, sonra bütün *treatment*'lar ==her block'un içinde ayrı ayrı== rastgele atanır.", ornek: "Her block'ta 5 yolculuk A, 5 B, 5 C." }
          ] },
        { tip: "adimlar", baslik: "Rota deneyinin bloklu tasarımı", adimlar: [
            { baslik: "30 yolculuk", metin: "15 sabah ve 15 öğleden sonra karışık duruyor." },
            { baslik: "*Block 1*: 15 sabah", metin: "Sabah yolculukları bir çerçeveye girer." },
            { baslik: "*Block 2*: 15 öğleden sonra", metin: "Öğleden sonra yolculukları ikinci çerçeveye girer." },
            { baslik: "Block içinde rastgele atama", metin: "15 sabahın 5'i A, 5'i B, 5'i C; öğleden sonralar için aynısı ayrıca yapılır. Kartlar duvarı geçmez." }
          ] },
        { tip: "ornek", baslik: "Bloklu tasarımın ortalamaları", durum: "Her rotada tam 5 sabah ve 5 öğleden sonra yolculuğu var.",
          adimlar: [
            "A: (5 × 28 + 5 × 16) ÷ 10 = (140 + 80) ÷ 10 = 220 ÷ 10 = 22.",
            "B: (5 × 31 + 5 × 19) ÷ 10 = (155 + 95) ÷ 10 = 250 ÷ 10 = 25.",
            "C: (5 × 34 + 5 × 22) ÷ 10 = (170 + 110) ÷ 10 = 280 ÷ 10 = 28.",
            "Fark yine 3 dakika: A < B < C."
          ],
          sonuc: "Gerçek 3 dakikalık fark geri geldi: A en hızlı." },
        { tip: "sekil", baslik: "Block içinde kıyas: her vakitte A en kısa", fig: { type: "bar", cats: ["Sabah block'u", "Öğleden sonra block'u"], series: [{ name: "Route A", values: [28, 16] }, { name: "Route B", values: [31, 19] }, { name: "Route C", values: [34, 22] }], ylabel: "Süre (dk)" } },
        { tip: "sekil", baslik: "Bloklu tasarımda rota ortalamaları", fig: { type: "bar", cats: ["Route A", "Route B", "Route C"], series: [{ name: "Ortalama süre (dk)", values: [22, 25, 28] }], ylabel: "Ortalama süre (dk)" } },
        { tip: "ikili", ayirici: "vs",
          sol: { ikon: "🎩", baslik: "*Completely randomized*", maddeler: ["Tek havuz, kısıtsız atama", "Block yok", "Güçlü etki dengesiz dağılabilir"] },
          sag: { ikon: "🧱", baslik: "*Randomized block*", maddeler: ["Önce block'lar", "Atama her block'un içinde", "Block değişkeninin etkisi ayıklanır"] },
          oyun: [
            { metin: "30 yolculuk şapkadan çekilip her rotaya 10 tane veriliyor.", cevap: "sol", neden: "Tek havuz, block yok." },
            { metin: "15 sabahın 5'i A, 5'i B, 5'i C; öğleden sonralar için ayrıca aynısı.", cevap: "sag", neden: "Atama her block'un içinde." },
            { metin: "Her rotada tam 5 sabah ve 5 öğleden sonra olması garanti.", cevap: "sag", neden: "Block içinde atama bunu sağlar." },
            { metin: "Bir rotaya 7 sabah, öbürüne 3 sabah düşmesi mümkün.", cevap: "sol", neden: "Block olmayınca dengesizlik olabilir." }
          ] },
        { tip: "not", metin: "*Blocking*, o değişkenden gelen değişkenliği hesaba katar; *treatment*'ın etkisini görmek kolaylaşır. İngilizce cümle: “Blocking accounts for the variability due to time of day, making it easier to see the effect of the route.” Aynı zamanda gruplar başlangıçta olabildiğince benzer olduğu için *confounding*'e karşı da yardım eder." },
        { tip: "tuzak", baslik: "Block'lar rastgele kurulmaz", metin: "*Block*'ları şans değil sen kurarsın (özelliğe göre). Rastgele olan, block içindeki atamadır.", yanlis: "“Birimleri block'lara rastgele atadım.”", dogru: "Block'lar özelliğe göre (sabah/öğleden sonra) bilerek kurulur; rastgele atama block'un içinde yapılır." },
        { tip: "tuzak", baslik: "Bir block tek treatment alırsa", metin: "Bir block'un tamamına tek *treatment* verilirse bu blocking değil *confounding* olur.", yanlis: "“Sabahların hepsi A rotası, öğleden sonralar B rotası.”", dogru: "Her block'ta bütün treatment'lar bulunmalı (5 A, 5 B, 5 C)." }
      ]
    },
    {
      baslik: "*Strata* mı, *block* mu? Neye göre block?",
      bloklar: [
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "🧮", baslik: "*Strata* (stratified)", maddeler: ["İçi benzer, arası farklı gruplar", "Örnekleme için: kimi seçeceğiz?", "Her stratum'dan SRS"] },
          sag: { ikon: "🧪", baslik: "*Blocks* (blocking)", maddeler: ["İçi benzer, arası farklı gruplar", "Deney için: kime hangi treatment?", "Her block'ta rastgele atama"] },
          oyun: [
            { metin: "Okulun dört sınıf düzeyinden her birinden 10 öğrenci seçmek.", cevap: "sol", neden: "Örneklem seçimi: strata." },
            { metin: "Sabah ve öğleden sonra yolculuklarında A, B, C rotalarını ayrı ayrı rastgele atamak.", cevap: "sag", neden: "Treatment atama: block." },
            { metin: "12 beyaz ve 12 tam buğday somunu için sıcaklık seviyelerini her tür içinde rastgele atamak.", cevap: "sag", neden: "Deney tasarımı: block." },
            { metin: "Şehirlere göre gruplara ayırıp her şehirden anket için kişi seçmek.", cevap: "sol", neden: "Örnekleme: strata." }
          ] },
        { tip: "grafik", baslik: "Neye göre block kurulur?", xlabel: "Aday değişken", ylabel: "Yolculuk süresine etkisi (temsili)", xmax: 6, ymax: 14, xticks: [{ v: 1, label: "Günün vakti" }, { v: 3, label: "Haftanın günü" }, { v: 5, label: "Sürücünün çalma listesi" }], yticks: [],
          ogeler: [
            { id: "e1", tip: "alan", renk: 0, noktalar: [[0.5, 0], [1.5, 0], [1.5, 12], [0.5, 12]] },
            { id: "e2", tip: "alan", renk: 1, noktalar: [[2.5, 0], [3.5, 0], [3.5, 4], [2.5, 4]], gizli: true },
            { id: "e3", tip: "alan", renk: 1, noktalar: [[4.5, 0], [5.5, 0], [5.5, 0.6], [4.5, 0.6]], gizli: true },
            { id: "pick", tip: "yazi", x: 1, y: 13.3, metin: "← block bununla", gizli: true }
          ],
          durumlar: [
            { metin: "Günün vakti, yolculuk süresini ==çok== etkiliyor (sabah ile öğleden sonra arası 12 dk)." },
            { metin: "Haftanın günü daha az etkiliyor.", goster: ["e2"] },
            { metin: "Sürücünün çalma listesi neredeyse hiç etkilemiyor.", goster: ["e3"] },
            { metin: "*Response variable*'ı en çok etkileyeceğini düşündüğün değişkene göre block kur: günün vakti.", goster: ["pick"] }
          ] },
        { tip: "tuzak", baslik: "Deney sorusunda “stratify” yazma", metin: "Strata ve block ikisi de “similar within, different between”; ama biri örnekleme biri deney içindir.", yanlis: "“Sabah ve öğleden sonra yolculukları iki stratum, her birinden SRS aldım.”", dogru: "“Sabah ve öğleden sonra iki block; treatment'ları her block'ta rastgele atadım.”" },
        { tip: "tuzak", baslik: "Block, response'ı etkileyen değişkene göre", metin: "Her şeye göre block kurma; response'ı en çok etkilemesini beklediğin değişkeni seç.", yanlis: "“Sürücünün çalma listesine göre block kurdum.”", dogru: "Büyük değişkenlik kaynağına göre block: günün vakti." }
      ]
    },
    {
      baslik: "Kontrol et, blokla, randomize et",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Control* what you can", alt: "kontrol edebildiğini sabitle" }, "→", { t: "*Block* on what you can't control", alt: "kontrol edemediğin büyük etkiyi blokla" }, "→", { t: "*Randomize* the rest", alt: "geri kalanı rastgele dengele" }
          ], aciklama: "Notun özeti: “Control what you can, block on what you can't control, and randomize to balance out the rest.”" },
        { tip: "harita", merkez: "Rota deneyi", dallar: [
            { baslik: "1 · *Direct control*", alt: "aynı araba, aynı çıkış saati, aynı sürücü" },
            { baslik: "2 · *Block*", alt: "büyük etki: günün vakti (sabah / öğleden sonra)" },
            { baslik: "3 · *Randomize*", alt: "hava, kırmızı ışıklar, kazalar: rastgele atamayla dengele" }
          ] },
        { tip: "adimlar", baslik: "Üç adımda deney tasarımı", adimlar: [
            { baslik: "Kontrol edebildiğini kontrol et", metin: "Aynı araba, aynı çıkış saati, aynı sürücü: *direct control*." },
            { baslik: "Kontrol edemediğin büyük etkiyi blokla", metin: "Günün vaktini kontrol edemezsin; sabah ve öğleden sonra olarak iki *block* kur." },
            { baslik: "Geri kalanı rastgele atamayla dengele", metin: "Hava, kırmızı ışıklar, kazalar: *treatment*'ları block içinde rastgele atayınca dengelenir." }
          ] }
      ]
    },
    {
      baslik: "*Matched pairs*: benzer iki birim",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👯", terim: "Matched pairs design", tr: "eşleştirilmiş çiftler tasarımı", tanim: "İki *treatment*'ı karşılaştıran, block büyüklüğü 2 olan *randomized block design*. İki yolu var: benzer iki birimi eşleştirmek ya da her birime iki *treatment*'ı da vermek.", ornek: "Yüzücüleri çift çift eşleştirmek." }
          ] },
        { tip: "hikaye", ikon: "🏊", baslik: "Drag suit 50 metreyi yavaşlatır mı?", metin: "*Drag suit*, suyu tutan bol mayodur. 50 metre serbest süresini uzatır mı? Takımda **24 yüzücü** var." },
        { tip: "adimlar", baslik: "Yol 1: benzer iki birimi eşleştir", adimlar: [
            { baslik: "Sırala", metin: "24 yüzücüyü en iyi 50 m derecelerine göre sırala (response'u en çok etkileyen şey yüzücünün hızı)." },
            { baslik: "Çiftle", metin: "İlk iki yüzücü bir çift, sonraki iki bir çift: (1,2), (3,4), …, (23,24). 24 ÷ 2 = 12 çift." },
            { baslik: "Çift içinde yazı tura", metin: "Her çiftte yazı tura at: biri *drag suit*, diğeri normal mayo giyer." },
            { baslik: "Neden yazı tura serbest?", metin: "İki kişi, iki *treatment*: gruplar zaten eşit. 12 çiftte tam 1'e 1." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 24, etiket: "yüzücü" },
            { deger: 12, etiket: "çift (24 ÷ 2)" },
            { deger: 2, etiket: "treatment: drag suit ve normal mayo" }
          ] },
        { tip: "tuzak", baslik: "Yazı tura ne zaman serbest?", metin: "Önceki bölümdeki “eşit grup için yazı tura atma” uyarısı, büyük bir grubu ikiye bölmek içindi. Çift içinde iki birim, iki *treatment* vardır; yazı tura güvenlidir.", yanlis: "“Matched pairs'te yazı tura atmak yasak.”", dogru: "Çift içinde yazı tura serbest; gruplar zaten 1'e 1 eşit olur." }
      ]
    },
    {
      baslik: "*Matched pairs*: aynı birime iki *treatment*",
      bloklar: [
        { tip: "tablo", baslik: "Beş yüzücü, iki mayo (saniye)", head: ["Swimmer", "Regular", "Drag suit", "Fark (Drag − Regular)"], rows: [
            ["1", "27", "29", "+2"],
            ["2", "30", "31", "+1"],
            ["3", "34", "37", "+3"],
            ["4", "38", "40", "+2"],
            ["5", "41", "43", "+2"]
          ], not: "Yüzücüler arası açıklık 41 − 27 = 14 s; ama her yüzücünün kendi iki süresi arasındaki fark 1–3 s." },
        { tip: "sekil", baslik: "Normal mayoyla süreler: yüzücüler arası büyük fark", fig: { type: "dot", values: [27, 30, 34, 38, 41], label: "Regular suit time (s)" } },
        { tip: "sekil", baslik: "Her yüzücünün kendi farkı: sıkı bir küme", fig: { type: "dot", values: [1, 2, 2, 2, 3], label: "Difference (Drag − Regular), s" } },
        { tip: "ornek", baslik: "Ortalama fark", durum: "Beş yüzücünün farkları: +2, +1, +3, +2, +2.",
          adimlar: ["Toplam: 2 + 1 + 3 + 2 + 2 = 10.", "Ortalama: 10 ÷ 5 = 2.0 saniye.", "Karşılaştırma: Regular ortalaması 170 ÷ 5 = 34 s, drag suit ortalaması 180 ÷ 5 = 36 s; fark 2 s.", "Yüzücüler arasındaki 14 s'lik fark aradan çıktı; mayonun etkisi net kaldı."],
          sonuc: "Drag suit ortalama 2.0 saniye yavaşlatıyor. Her yüzücü kendi kendisiyle karşılaştırıldı." },
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "👯", baslik: "Yol 1: benzer iki birim", maddeler: ["24 yüzücü → 12 çift", "Çift içinde yazı tura: kim drag suit?", "Çift farkları karşılaştırılır"] },
          sag: { ikon: "🪞", baslik: "Yol 2: aynı birim, iki treatment", maddeler: ["Her yüzücü iki mayoyla da yüzer", "Herkes kendi kendisinin eşi", "SIRA rastgele olmalı"] },
          oyun: [
            { metin: "Yüzücüleri en iyi derecelerine göre sıralayıp ardışık ikilileri eşleştirmek.", cevap: "sol", neden: "İki benzer birim bir çift." },
            { metin: "Her yüzücü hem normal mayoyla hem drag suit ile yüzüyor.", cevap: "sag", neden: "Aynı birim iki *treatment*'ı da alıyor." },
            { metin: "Her yüzücü için yazı turayla önce hangi mayo giyileceği belirleniyor.", cevap: "sag", neden: "Sırayı rastgele yapmak yol 2'nin şartı." },
            { metin: "Her çiftte yazı tura atılıp biri drag suit, öteki normal mayo giyiyor.", cevap: "sol", neden: "Çift içinde atama: yol 1." }
          ] }
      ]
    },
    {
      baslik: "Sıra rastgele olmalı",
      bloklar: [
        { tip: "adimlar", baslik: "Herkes önce normal mayoyla yüzerse", adimlar: [
            { baslik: "1. yüzüş: normal mayo", metin: "Herkes önce normal mayoyla yüzer." },
            { baslik: "2. yüzüş: drag suit", metin: "İkinci yüzüşte yüzücüler yorgun: süre uzar." },
            { baslik: "Ayıramazsın", metin: "Süre mayodan mı uzadı, yorgunluktan mı? Sıra ile *treatment* birbirine karıştı: ==*confounding*==." },
            { baslik: "Çare: rastgele sıra", metin: "Her yüzücü yazı tura atar: yazı gelirse önce *drag suit*. Araya dinlenme de konur; yorgunluk iki mayoya da eşit dağılır." }
          ] },
        { tip: "ornek", baslik: "Beş yüzücüde rastgele sıra", durum: "Yazı tura sonuçları: H, T, T, H, T (H = önce drag suit).",
          adimlar: ["1. yüzücü: H → önce drag suit, sonra normal.", "2.–3. yüzücü: T → önce normal, sonra drag suit.", "4. yüzücü: H → önce drag suit.", "5. yüzücü: T → önce normal.", "Sonuç: yorgunluk iki mayoya da kabaca eşit dağıldı."],
          sonuc: "Sıra etkisi dengelenir; fark gerçekten mayodan gelir." },
        { tip: "ornek", baslik: "Bisiklet ve orman videosu", durum: "Ödevdeki bisiklet çalışması: her öğrenci sabit bisiklette bir kez orman videosu izleyerek, bir kez videosuz pedal çeviriyor; sıra rastgele; response nabız.",
          adimlar: ["Her öğrenci iki *treatment*'ı da alıyor (video var / yok).", "Bu bir *matched pairs* tasarımı: herkes kendi kendisinin eşi.", "Sıra rastgele olduğundan yorgunluk ya da alışma confounding yaratmaz."],
          sonuc: "*Matched pairs* (aynı birime iki *treatment*), sıra rastgele." },
        { tip: "tuzak", baslik: "Sıra etkisini unutma", metin: "“Her birim iki *treatment*'ı da alıyor” türünde sıranın rastgele olduğunu mutlaka yaz: yorgunluk, alışma ya da öğrenme *confounding* olmasın.", yanlis: "“Her yüzücü önce normal mayoyla, sonra drag suit ile yüzdü.”", dogru: "“Her yüzücü yazı tura attı: yazı gelirse önce drag suit.” (rastgele sıra + dinlenme)" }
      ]
    },
    {
      baslik: "Mini sınav ve toparlayalım",
      bloklar: [
        { tip: "ornek", baslik: "Fırıncının somunları", durum: "Bir fırıncı, pişirme sıcaklığının ekmeğin yoğunluğuna etkisini merak ediyor. 12 beyaz, 12 tam buğday somunu var. Beyaz somunları rastgele üçe bölüp düşük, orta ve yüksek sıcaklıkta pişiriyor; tam buğdaylar için aynısını ayrıca yapıyor. Bu hangi tasarım?",
          adimlar: ["*Block*'lar: un türü (beyaz / tam buğday).", "*Treatment*'lar: pişirme sıcaklığı (düşük / orta / yüksek).", "Her block'ta 12 ÷ 3 = 4 somun her sıcaklığa.", "Atama her block'un içinde yapıldı."],
          sonuc: "*Randomized block design*. Tek şapkadan 24 somun çekilseydi *completely randomized* olurdu; *stratified random sample* ise bir örnekleme yöntemidir, deney tasarımı değil." },
        { tip: "ozet", maddeler: [
            "*Block*: *response*'u etkileyen bir özellikte benzer birimler (rota örneğinde sabah / öğleden sonra).",
            "Dengesiz şans yüzünden yavaş B hızlı göründü (22.6 < 24.4); *randomized block design* ile A = 22, B = 25, C = 28: gerçek 3 dakikalık fark geri geldi.",
            "*Randomized block design*: *treatment*'lar her block'un içinde rastgele atanır; block'ları şans değil sen kurarsın.",
            "*Strata* örneklem içindir, *block* deney içindir.",
            "Neye göre block: *response*'u en çok etkileyen değişkene göre.",
            "Control what you can, block on what you can't control, randomize the rest.",
            "*Matched pairs*: iki *treatment*, block boyutu 2; ya benzer iki birim eşleşir (24 yüzücü → 12 çift) ya da aynı birim iki *treatment*'ı alır (ortalama fark 2.0 s).",
            "Aynı birim ikisini de alıyorsa sıra rastgele olmalı (yazı tura + dinlenme)."
          ] }
      ]
    }
  ]
};
