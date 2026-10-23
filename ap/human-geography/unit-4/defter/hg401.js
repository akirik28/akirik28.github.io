/* Kitpath not defteri · hg401 · 4.1 Siyasi Coğrafyaya Giriş
   Kaynak: AP HuG CED Topic 4.1 (PSO-4.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg401",
  amac: "Bu konu dünya siyasi haritasındaki varlıkların türlerini anlatıyor: *state*, *nation*, *nation-state*, *stateless nation*, *multinational state*, *multistate nation* ve özerk bölgeler. Her birini birbirinden ayırmayı ve örnekle tanımayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*State*: haritanın yapı taşı",
      kisa: "Dünya siyasi haritası bağımsız devletlerden oluşur; her biri kendi toprağında egemendir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "State", tr: "devlet", tanim: "Sınırları belli bir toprağı, kalıcı bir nüfusu ve o toprakta yetkili bir hükümeti olan bağımsız siyasi birim. ==Dünya siyasi haritasının yapı taşıdır.==", ornek: "Türkiye, Japonya, Brezilya." },
            { ikon: "👑", terim: "Sovereignty", tr: "egemenlik", tanim: "Bir devletin kendi toprağında ve halkı üzerinde, başka bir güce bağlı olmadan karar verme yetkisi.", ornek: "Bir ülke kendi trafik kurallarını kendisi koyar." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🗺️", baslik: "Belli bir toprak", metin: "Sınırları vardır; sınırlar bazen tartışmalı olsa da toprak bellidir." },
            { ikon: "👥", baslik: "Kalıcı bir nüfus", metin: "İçinde sürekli yaşayan insanlar." },
            { ikon: "🏛️", baslik: "Egemen bir hükümet", metin: "Toprağı ve halkı yönetir, dışarıdaki bir güce bağlı değildir." },
            { ikon: "🤝", baslik: "Tanınma", metin: "Öteki devletler onu devlet olarak kabul eder." }
          ] },
        { tip: "not", metin: "Sınavda *country* ile *state* genellikle aynı anlama gelir. Bir yerin devlet sayılıp sayılmadığı bazen tartışmalıdır: Kosova'yı bazı devletler tanır, bazıları tanımaz. Tanınma bu yüzden listeye girer." }
      ]
    },
    {
      baslik: "*Nation*: ortak kimlikli halk",
      kisa: "*Nation* bir halktır, *state* bir siyasi birimdir; ikisi aynı şey değildir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👥", baslik: "*Nation* (ulus)", maddeler: ["Ortak dil, tarih, din ya da kimlik duygusuyla bağlı insan topluluğu", "Kültüre ve duyguya dayanır; sınırı olması şart değildir"] },
          sag: { ikon: "🏛️", baslik: "*State* (devlet)", maddeler: ["Sınırları, hükümeti ve egemenliği olan siyasi birim", "Haritada çizilir; öteki devletler tanır"] },
          oyun: [
            { metin: "Aynı dili konuşan ve ortak bir geçmişi paylaştığını hisseden insanlar.", cevap: "sol", neden: "Ortak kimlik duygusu: *nation*." },
            { metin: "Başkenti, ordusu ve sınırları olan siyasi birim.", cevap: "sag", neden: "Toprak ve hükümet: *state*." },
            { metin: "Birleşmiş Milletler'e üye olabilir.", cevap: "sag", neden: "Yalnızca devletler üye olur." },
            { metin: "Kuşaklar boyu aktarılan ortak hikâyeler, gelenekler ve bayramlar.", cevap: "sol", neden: "Kültürel bağ: *nation*." }
          ] },
        { tip: "tuzak", metin: "Gündelik dilde \"ulus\" ile \"ülke\" sık karışır; AP'de ise ayrılır.", yanlis: "*Nation* ile *state* aynı şeydir; ikisi de ülke demektir.", dogru: "*Nation* insanların kimliğidir, *state* egemen bir toprak birimidir. Bir *nation* devletsiz olabilir; bir devlet birden çok *nation* barındırabilir." }
      ]
    },
    {
      baslik: "*Nation-state* ve *stateless nation*",
      kisa: "*Nation-state*'te ulus ve devlet örtüşür; *stateless nation*'ın kendi devleti yoktur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎌", terim: "Nation-state", tr: "ulus-devlet", tanim: "Halkının büyük çoğunluğu tek bir ulustan olan ve sınırları o ulusla örtüşen devlet. ==Tamamen saf örnek yoktur; yakın olanlar vardır.==", ornek: "Japonya ve İzlanda buna yakındır." },
            { ikon: "🧭", terim: "Stateless nation", tr: "devletsiz ulus", tanim: "Ortak kimliği olan ama kendi bağımsız devleti bulunmayan, çoğu kez birkaç devlete dağılmış halk.", ornek: "Kürtler Türkiye, Irak, İran ve Suriye'de yaşar; bağımsız bir Kürt devleti yoktur." }
          ] },
        { tip: "not", metin: "Neredeyse her devletin içinde bir azınlık yaşar. Bu yüzden *nation-state* bir ideale yakınlığı anlatır; \"yüzde yüz tek ulus\" demek değildir." }
      ]
    },
    {
      baslik: "Dört durum, tek harita",
      kisa: "Ulusla devletin eşleşmesi değiştikçe farklı siyasi varlıklar ortaya çıkar.",
      bloklar: [
        { tip: "grafik", baslik: "Kutu devlettir, nokta ulustur", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "a1", tip: "cizgi", renk: 1, from: [0.4, 1.2], to: [4.6, 1.2] },
            { id: "a2", tip: "cizgi", renk: 1, from: [4.6, 1.2], to: [4.6, 8.8] },
            { id: "a3", tip: "cizgi", renk: 1, from: [4.6, 8.8], to: [0.4, 8.8] },
            { id: "a4", tip: "cizgi", renk: 1, from: [0.4, 8.8], to: [0.4, 1.2] },
            { id: "ba1", tip: "cizgi", renk: 1, from: [5.4, 1.2], to: [9.6, 1.2], gizli: true },
            { id: "ba2", tip: "cizgi", renk: 1, from: [9.6, 1.2], to: [9.6, 8.8], gizli: true },
            { id: "ba3", tip: "cizgi", renk: 1, from: [9.6, 8.8], to: [5.4, 8.8], gizli: true },
            { id: "ba4", tip: "cizgi", renk: 1, from: [5.4, 8.8], to: [5.4, 1.2], gizli: true },
            { id: "lA", tip: "yazi", x: 2.5, y: 9.3, metin: "Devlet A" },
            { id: "lB", tip: "yazi", x: 7.5, y: 9.3, metin: "Devlet B", gizli: true },
            { id: "n1", tip: "nokta", renk: 0, x: 1.2, y: 7.6 },
            { id: "n2", tip: "nokta", renk: 0, x: 2.6, y: 7.9 },
            { id: "n3", tip: "nokta", renk: 0, x: 3.8, y: 7.3 },
            { id: "n4", tip: "nokta", renk: 0, x: 1.8, y: 6.3 },
            { id: "n5", tip: "nokta", renk: 0, x: 3.2, y: 6.0 },
            { id: "b1", tip: "nokta", renk: 2, x: 1.3, y: 4.8, gizli: true },
            { id: "b2", tip: "nokta", renk: 2, x: 2.4, y: 4.3, gizli: true },
            { id: "b3", tip: "nokta", renk: 2, x: 3.5, y: 4.9, gizli: true },
            { id: "c1", tip: "nokta", renk: 3, x: 1.5, y: 2.7, gizli: true },
            { id: "c2", tip: "nokta", renk: 3, x: 2.8, y: 2.3, gizli: true },
            { id: "c3", tip: "nokta", renk: 3, x: 3.9, y: 3.1, gizli: true },
            { id: "d1", tip: "nokta", renk: 0, x: 6.2, y: 7.6, gizli: true },
            { id: "d2", tip: "nokta", renk: 0, x: 7.6, y: 7.9, gizli: true },
            { id: "d3", tip: "nokta", renk: 0, x: 8.8, y: 7.3, gizli: true },
            { id: "d4", tip: "nokta", renk: 0, x: 6.8, y: 6.3, gizli: true },
            { id: "d5", tip: "nokta", renk: 0, x: 8.2, y: 6.0, gizli: true },
            { id: "g1", tip: "nokta", renk: 2, x: 6.2, y: 7.6, gizli: true },
            { id: "g2", tip: "nokta", renk: 2, x: 7.6, y: 7.9, gizli: true },
            { id: "g3", tip: "nokta", renk: 2, x: 8.8, y: 7.3, gizli: true },
            { id: "g4", tip: "nokta", renk: 2, x: 6.8, y: 6.3, gizli: true },
            { id: "g5", tip: "nokta", renk: 2, x: 8.2, y: 6.0, gizli: true },
            { id: "e1", tip: "nokta", renk: 3, x: 1.4, y: 2.8, gizli: true },
            { id: "e2", tip: "nokta", renk: 3, x: 2.6, y: 2.4, gizli: true },
            { id: "e3", tip: "nokta", renk: 3, x: 3.8, y: 3.2, gizli: true },
            { id: "e4", tip: "nokta", renk: 3, x: 6.4, y: 2.8, gizli: true },
            { id: "e5", tip: "nokta", renk: 3, x: 7.8, y: 2.4, gizli: true },
            { id: "e6", tip: "nokta", renk: 3, x: 9.0, y: 3.2, gizli: true },
            { id: "y1", tip: "yazi", x: 5, y: 0.45, metin: "Nation-state: bir ulus, bir devlet" },
            { id: "y2", tip: "yazi", x: 5, y: 0.45, metin: "Multinational state: üç ulus, bir devlet", gizli: true },
            { id: "y3", tip: "yazi", x: 5, y: 0.45, metin: "Multistate nation: bir ulus, iki devlet", gizli: true },
            { id: "y4", tip: "yazi", x: 5, y: 0.45, metin: "Stateless nation: devleti olmayan halk", gizli: true }
          ],
          durumlar: [
            { metin: "Devlet A'da tek bir ulus yaşıyor. Ulus ile devlet örtüşüyor: ==*nation-state*==." },
            { metin: "Aynı devletin içine iki ulus daha giriyor: tek devlet, üç ulus. Bu bir ==*multinational state*==.",
              goster: ["b1", "b2", "b3", "c1", "c2", "c3", "y2"], gizle: ["y1"] },
            { metin: "Şimdi tek ulus iki devlete yayılıyor; Devlet B'de de aynı renk. Bu bir ==*multistate nation*==.",
              goster: ["ba1", "ba2", "ba3", "ba4", "lB", "d1", "d2", "d3", "d4", "d5", "y3"], gizle: ["b1", "b2", "b3", "c1", "c2", "c3", "y2"] },
            { metin: "Mor halk iki devlette de azınlık ve kendi devleti yok: ==*stateless nation*==.",
              goster: ["g1", "g2", "g3", "g4", "g5", "e1", "e2", "e3", "e4", "e5", "e6", "y4"], gizle: ["d1", "d2", "d3", "d4", "d5", "y3"] }
          ] },
        { tip: "ornek", baslik: "Hangi tür? Üç soruyla bul", durum: "Bir halk üç devlete dağılmış. Her birinde azınlık ve kendi bağımsız devleti yok. Bu halk hangi terimle anılır?",
          adimlar: ["Kaç ulus var? Bir.", "Kaç devlete dağılmış? Üç.", "Kendi devleti var mı? Hayır."],
          sonuc: "Tek ulus, birçok devlete yayılmış ve kendi devleti yok: ==*stateless nation*==. Aynı halkın birkaç ayrı devleti olsaydı *multistate nation* denirdi." },
        { tip: "tablo", baslik: "Dört tür bir arada", head: ["Tür", "Ulus", "Devlet", "Örnek"], rows: [
            ["*Nation-state*", "Bir", "Bir", "Japonya, İzlanda"],
            ["*Multinational state*", "Birden çok", "Bir", "Belçika, Birleşik Krallık"],
            ["*Multistate nation*", "Bir", "Birden çok", "Koreliler, Macarlar"],
            ["*Stateless nation*", "Bir", "Kendi devleti yok", "Kürtler"]
          ], not: "Macarlar Macaristan, Romanya ve Slovakya gibi birkaç devlette yaşar." }
      ]
    },
    {
      baslik: "*Multinational state* ve *multistate nation*",
      kisa: "Birinde bir devlette çok ulus, ötekinde bir ulus çok devlet vardır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏛️", baslik: "*Multinational state*", maddeler: ["Tek devlet, birden çok ulus", "Örnek: Belçika (Flamanlar ve Valonlar)"] },
          sag: { ikon: "🌍", baslik: "*Multistate nation*", maddeler: ["Tek ulus, birden çok devlet", "Örnek: Koreliler (Güney Kore ve Kuzey Kore)"] },
          oyun: [
            { metin: "Flamanca ve Fransızca konuşan iki halk, Belçika adlı tek devletin içinde yaşıyor.", cevap: "sol", neden: "Tek devlette çok ulus: *multinational state*." },
            { metin: "Koreliler iki ayrı devlette yaşıyor.", cevap: "sag", neden: "Tek ulus iki devlette: *multistate nation*." },
            { metin: "İngilizler, İskoçlar ve Galliler Birleşik Krallık çatısı altında.", cevap: "sol", neden: "Birden çok ulus, tek devlet." },
            { metin: "Macarlar Macaristan, Romanya ve Slovakya'ya dağılmış durumda.", cevap: "sag", neden: "Tek ulus, birçok devlet." }
          ] },
        { tip: "tuzak", metin: "Soruda önce kaç ulus ve kaç devlet olduğuna bak.", yanlis: "*Multistate nation*, çok halkı olan devlettir.", dogru: "Çok halkı olan devlet *multinational state*'tir. *Multistate nation* ise tek halkın birçok devlete yayılmasıdır: multi-nation = çok ulus, multi-state = çok devlet." }
      ]
    },
    {
      baslik: "Özerk ve yarı özerk bölgeler",
      kisa: "Bazı bölgeler devletin içinde kalır ama kendi işlerini büyük ölçüde kendisi yönetir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧊", terim: "Autonomous region", tr: "özerk bölge", tanim: "Bir devletin içinde, yönetim yetkilerinin geniş bir bölümüne sahip bölge.", ornek: "Grönland, Danimarka Krallığı içinde geniş özerkliğe sahiptir." },
            { ikon: "🏙️", terim: "Semiautonomous region", tr: "yarı özerk bölge", tanim: "Yetkileri daha sınırlı olan özerk bölge; bazı konularda merkeze bağlı kalır.", ornek: "Hong Kong, Çin'e bağlı bir özel idari bölgedir." },
            { ikon: "🪶", terim: "Native American reservation", tr: "yerli Amerikalı rezervi", tanim: "ABD'de kabile hükümetlerinin kendi yasalarını çıkarabildiği topraklar; ABD hükümetinin yetkisi altında kalır.", ornek: "Navajo Nation, ABD'nin en büyük rezervidir." }
          ] },
        { tip: "tuzak", metin: "Özerklik bağımsızlık demek değildir.", yanlis: "Grönland ve Navajo Nation gibi yerler bağımsız devlettir.", dogru: "Özerk bölgeler bir devletin içinde kalır; ==egemenlik o devlete aittir.== Bu yüzden haritanın yapı taşı devletlerdir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*State* = belli toprak + kalıcı nüfus + egemen hükümet + tanınma. Dünya siyasi haritasının yapı taşıdır.",
            "*Sovereignty* = devletin kendi toprağında başka güce bağlı olmadan karar verme yetkisi.",
            "*Nation* insanların ortak kimliğidir; *state* siyasi bir toprak birimidir. İkisi aynı şey değildir.",
            "*Nation-state* = ulus ve devlet örtüşür (Japonya, İzlanda). Saf örnek yoktur.",
            "*Multinational state* = tek devlet, çok ulus (Belçika). *Multistate nation* = tek ulus, çok devlet (Koreliler).",
            "*Stateless nation* = kendi devleti olmayan, çoğu kez birkaç devlete dağılmış halk (Kürtler).",
            "Özerk ve yarı özerk bölgeler (Grönland, Hong Kong, yerli rezervleri) bir devletin içindedir; egemenlik devlete aittir."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Ada'nın coğrafya ödevi: Bir halk A, B ve C devletlerine dağılmış durumda ve her birinde çoğunluğu oluşturuyor. Bu halk için en doğru terim hangisidir?",
      opts: ["*Stateless nation*", "*Multistate nation*", "*Multinational state*", "*Nation-state*"],
      a: 1,
      why: "Tek ulus, birden çok devlette yaşıyor: *multistate nation*. *Stateless nation* olsaydı halkın kendi devleti bulunmazdı; burada her devlette çoğunluk olduğu için bu seçenek en çekici yanlıştır."
    },
    {
      q: "Belçika'da Flamanca konuşan Flamanlar ile Fransızca konuşan Valonlar tek devletin çatısı altında yaşar. Belçika için en doğru terim hangisidir?",
      opts: ["*Nation-state*", "*Stateless nation*", "*Multistate nation*", "*Multinational state*"],
      a: 3,
      why: "Tek devlet, birden çok ulus: *multinational state*. *Multistate nation* ise tek halkın birçok devlete yayılmasıdır; terimin yönü tam tersidir."
    },
    {
      q: "Tabloya göre hangi çıkarım doğrudur?",
      fig: { type: "table", head: ["Halk", "Yaşadığı yerler", "Kendi bağımsız devleti"], rows: [["Halk K", "Devlet 1, 2 ve 3'te azınlık", "Yok"], ["Halk L", "Yalnızca Devlet 4'te, çoğunluk", "Var (Devlet 4)"], ["Halk M", "Devlet 5 ve 6'da çoğunluk", "Var (iki ayrı devlet)"]] },
      opts: ["Halk K *stateless nation*, Halk M *multistate nation*.", "Halk K *multistate nation*, Halk M *stateless nation*.", "Halk L *multistate nation*, Halk M *nation-state*.", "Halk K ve Halk L *stateless nation*."],
      a: 0,
      why: "K birkaç devlete dağılmış ve kendi devleti yok: *stateless nation*. M tek ulus olarak iki devlette çoğunluk: *multistate nation*. B seçeneği ikisini yer değiştirir; L ise tek devletle örtüştüğü için *nation-state*'e yakındır."
    },
    {
      q: "Danimarka Krallığı'nın içinde yer alan Grönland'ın kendi parlamentosu ve hükümeti vardır; savunma ve dış politika büyük ölçüde Danimarka'dadır. Grönland en iyi nasıl tanımlanır?",
      opts: ["Bağımsız bir *state*", "*Autonomous region*", "*Nation-state*", "*Multistate nation*"],
      a: 1,
      why: "Devletin içinde, yönetim yetkisinin geniş bölümüne sahip bölge: *autonomous region*. Bağımsız *state* seçeneği yanlıştır, çünkü egemenlik Danimarka'dadır."
    },
    {
      q: "Aşağıdakilerden hangisi bir *state*'in tanımında yer almaz?",
      opts: ["Belli bir toprak", "Egemen bir hükümet", "Tamamen ortak bir dil ve din", "Diğer devletlerce tanınma"],
      a: 2,
      why: "Ortak dil ve din *nation* kavramıyla ilgilidir. Bir devlet birçok dil ve dinden insanı barındırabilir; *state*'in ölçütleri toprak, nüfus, egemen hükümet ve tanınmadır."
    }
  ]
};
