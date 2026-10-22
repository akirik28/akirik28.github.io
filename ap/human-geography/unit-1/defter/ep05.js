/* Kitora not defteri · ep05 · Dağılım
   Kaynak: ap-videolar/src/episodes/ep05 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep05",
  amac: "Bu konu bir şeyin haritada nasıl dağıldığını (*distribution*) anlatıyor. Üç ayrı özelliğini öğreneceksin: kaç tane (*density*), ne kadar yakın (*concentration*), düzen var mı (*pattern*). Sınavın en sevdiği tuzak bu üçünü karıştırmaktır.",
  bolumler: [
    {
      baslik: "*Distribution* ve üç gözlük",
      kisa: "Dağılım üç özellikle anlatılır: *density*, *concentration*, *pattern*.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Distribution", tr: "dağılım", tanim: "Bir şeyin mekâna yayılış biçimi. Aynı noktalara üç ayrı gözlükle bakılır; üçü de farklı bir şey söyler.", ornek: "Bir şehirdeki kafelerin haritadaki yerleşimi." }
          ] },
        { tip: "harita", merkez: "*Distribution*", dallar: [
            { baslik: "*Density*", alt: "Kaç tane? Sayı ÷ alan" },
            { baslik: "*Concentration*", alt: "Ne kadar yakın? Kümelenmiş mi yayılmış mı?" },
            { baslik: "*Pattern*", alt: "Düzen var mı? Doğrusal, ızgara..." }
          ] }
      ]
    },
    {
      baslik: "*Density*: sıklık",
      kisa: "*Density* alan başına miktardır; nesnelerin nasıl yayıldığına bakmaz.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Sayı", alt: "kaç ev, kaç kişi" }, "÷",
            { t: "Alan", alt: "km² ya da mil²" }, "=",
            { t: "*Density*", alt: "alan başına miktar" }
          ], aciklama: "*Density* yalnızca sayar. İnsanlar için hesaplanan kişi/km² değerine ileride *arithmetic density* denir; mantık aynıdır." },
        { tip: "ornek", baslik: "Hangi mahalle daha yoğun?", durum: "A mahallesi 2 km² ve içinde 400 ev var. B mahallesi 4 km² ve içinde yine 400 ev var. Hangisinin *density* değeri yüksek?",
          adimlar: ["A: 400 ev ÷ 2 km² = 200 ev/km².", "B: 400 ev ÷ 4 km² = 100 ev/km².", "Karşılaştır: 200 > 100."],
          sonuc: "A mahallesinin *density* değeri ==iki kat daha yüksek==. Evlerin nasıl yayıldığı *density*'yi değil *concentration*'ı ilgilendirir." }
      ]
    },
    {
      baslik: "*Concentration*: yayılma biçimi",
      kisa: "*Concentration* nesnelerin ne kadar yakın olduğudur: *clustered* ya da *dispersed*.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍀", terim: "Concentration", tr: "yoğunlaşma / kümelenme", tanim: "Nesnelerin alana nasıl yayıldığı: birbirine yakınsa *clustered* (kümelenmiş), yayılmışsa *dispersed* (dağınık).", ornek: "İki mahallede de tam 12 ev var; birinde köşeye toplanmış, diğerinde eşit yayılmış." }
          ] },
        { tip: "ikili", sol: { ikon: "🧲", baslik: "*Clustered*", maddeler: ["Nesneler birbirine yakın, bir yerde toplu", "Yüksek *concentration*"] },
          sag: { ikon: "🌾", baslik: "*Dispersed*", maddeler: ["Nesneler alana yayılmış, birbirinden uzak", "Düşük *concentration*"] },
          oyun: [
            { metin: "12 evin hepsi mahallenin bir köşesinde.", cevap: "sol", neden: "Toplu: *clustered*." },
            { metin: "12 ev eşit aralıklarla alana yayılmış.", cevap: "sag", neden: "Yayılmış: *dispersed*." },
            { metin: "Çiftlikler tek bir vadide toplanıyor; çiftlik sayısı aynı kalıyor.", cevap: "sol", neden: "Toplanma *concentration*'ı değiştirir: *clustered*." },
            { metin: "1952'de kuzeydoğuda toplanan beyzbol takımları bugün ülkeye yayıldı.", cevap: "sag", neden: "Bugünkü hali: *dispersed*." }
          ] },
        { tip: "grafik", baslik: "Aynı 12 ev, farklı concentration", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "bx1", tip: "cizgi", renk: 3, from: [0.2, 0.2], to: [9.8, 0.2] },
            { id: "bx2", tip: "cizgi", renk: 3, from: [9.8, 0.2], to: [9.8, 9.8] },
            { id: "bx3", tip: "cizgi", renk: 3, from: [9.8, 9.8], to: [0.2, 9.8] },
            { id: "bx4", tip: "cizgi", renk: 3, from: [0.2, 9.8], to: [0.2, 0.2] },
            { id: "n1", tip: "nokta", x: 1.0, y: 8.6 },
            { id: "n2", tip: "nokta", x: 3.9, y: 9.1 },
            { id: "n3", tip: "nokta", x: 6.8, y: 8.1 },
            { id: "n4", tip: "nokta", x: 9.1, y: 9.0 },
            { id: "n5", tip: "nokta", x: 2.2, y: 5.5 },
            { id: "n6", tip: "nokta", x: 5.0, y: 6.2 },
            { id: "n7", tip: "nokta", x: 8.0, y: 5.0 },
            { id: "n8", tip: "nokta", x: 9.3, y: 6.8 },
            { id: "n9", tip: "nokta", x: 1.1, y: 2.0 },
            { id: "n10", tip: "nokta", x: 4.2, y: 3.1 },
            { id: "n11", tip: "nokta", x: 6.5, y: 1.6 },
            { id: "n12", tip: "nokta", x: 8.9, y: 2.9 },
            { id: "yz1", tip: "yazi", x: 5, y: 0.7, metin: "12 ev · dispersed (yayılmış)" },
            { id: "yz2", tip: "yazi", x: 5, y: 0.7, metin: "12 ev · clustered (kümelenmiş)", gizli: true }
          ],
          durumlar: [
            { metin: "Bir mahallede tam 12 ev var ve alana ==yayılmış==. Bu desen *dispersed*." },
            { metin: "Aynı 12 ev bir köşeye toplanıyor: *clustered*. ==Ev sayısı da alan da aynı, yani *density* değişmedi.== Değişen *concentration*.", set: { n1: { x: 1.5, y: 8.5 }, n2: { x: 2.2, y: 8.8 }, n3: { x: 3.0, y: 8.4 }, n4: { x: 1.8, y: 7.7 }, n5: { x: 2.6, y: 7.9 }, n6: { x: 3.3, y: 7.5 }, n7: { x: 1.2, y: 7.0 }, n8: { x: 2.1, y: 7.0 }, n9: { x: 2.9, y: 6.9 }, n10: { x: 1.6, y: 6.3 }, n11: { x: 2.5, y: 6.2 }, n12: { x: 3.2, y: 6.3 } }, goster: ["yz2"], gizle: ["yz1"] },
            { metin: "Tekrar yayılınca *dispersed*'a döneriz. *Density* hep 12 ev/alan; yalnızca yayılma biçimi oynadı.", set: { n1: { x: 1.0, y: 8.6 }, n2: { x: 3.9, y: 9.1 }, n3: { x: 6.8, y: 8.1 }, n4: { x: 9.1, y: 9.0 }, n5: { x: 2.2, y: 5.5 }, n6: { x: 5.0, y: 6.2 }, n7: { x: 8.0, y: 5.0 }, n8: { x: 9.3, y: 6.8 }, n9: { x: 1.1, y: 2.0 }, n10: { x: 4.2, y: 3.1 }, n11: { x: 6.5, y: 1.6 }, n12: { x: 8.9, y: 2.9 } }, goster: ["yz1"], gizle: ["yz2"] }
          ] },
        { tip: "tuzak", metin: "İki mahallede de 12 ev var; biri kümelenmiş, diğeri yayılmış.", yanlis: "Kümelenmiş mahallenin *density*'si daha yüksektir.", dogru: "==*Density* aynıdır (12 = 12).== Değişen *concentration*'dır: *clustered* ≠ *dispersed*." }
      ]
    },
    {
      baslik: "Klasik sınav örneği: beyzbol ligi",
      kisa: "Takım sayısı artınca *density*, yayılınca *concentration* değişti.",
      bloklar: [
        { tip: "tablo", baslik: "İki dönem, iki özellik", head: ["", "1952", "Bugün", "Değişen"], rows: [
            ["Takım sayısı", "16", "30", "*Density* arttı"],
            ["Dağılım", "Kuzeydoğuda toplu", "Ülkeye yayılmış", "*Concentration* değişti"],
            ["Biçim", "*Clustered*", "*Dispersed*", "—"]
          ], vurgu: 0, not: "1952'de 16 takımın neredeyse hepsi kuzeydoğudaydı; sonraki on yıllarda batıya ve güneye yayıldılar." },
        { tip: "tuzak", metin: "Sınavda \"ne değişti?\" diye sorulur.", yanlis: "Takım sayısı arttığı için yalnızca *density* değişti.", dogru: "İkisi de değişti: sayı 16'dan 30'a çıktığı için ==*density* arttı==; takımlar yayıldığı için ==*concentration* *clustered*'dan *dispersed*'a geçti==." }
      ]
    },
    {
      baslik: "*Pattern*: geometrik düzen",
      kisa: "*Pattern* nesnelerin geometrik düzenidir: *linear* ya da *grid*.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Pattern", tr: "desen", tanim: "Nesnelerin geometrik bir düzen oluşturup oluşturmadığı.", ornek: "Evlerin kare kare mi, bir yol boyunca mı dizildiği." },
            { ikon: "〰️", terim: "Linear", tr: "doğrusal", tanim: "Nesneler bir nehir ya da yol boyunca dizilmiştir.", ornek: "Nehir boyunca sıralanan köyler." },
            { ikon: "🟦", terim: "Grid", tr: "ızgara", tanim: "Nesneler kare kare, eşit aralıklarla dizilmiştir.", ornek: "Satranç tahtası düzenindeki şehir blokları." },
            { ikon: "🌽", terim: "Township and range", tr: "kasaba ve sıra sistemi", tanim: "Amerika'da toprağın karelere bölündüğü sistem. Uçaktan bakınca ==satranç tahtası== gibi görünür.", ornek: "Orta Batı'da kare kare bölünmüş tarlalar." }
          ] },
        { tip: "grafik", baslik: "Linear, grid ve township and range", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "bx1", tip: "cizgi", renk: 3, from: [0.2, 0.2], to: [9.8, 0.2] },
            { id: "bx2", tip: "cizgi", renk: 3, from: [9.8, 0.2], to: [9.8, 9.8] },
            { id: "bx3", tip: "cizgi", renk: 3, from: [9.8, 9.8], to: [0.2, 9.8] },
            { id: "bx4", tip: "cizgi", renk: 3, from: [0.2, 9.8], to: [0.2, 0.2] },
            { id: "n1", tip: "nokta", x: 0.8, y: 2.14 },
            { id: "n2", tip: "nokta", x: 1.6, y: 2.69 },
            { id: "n3", tip: "nokta", x: 2.4, y: 3.23 },
            { id: "n4", tip: "nokta", x: 3.2, y: 3.77 },
            { id: "n5", tip: "nokta", x: 4.0, y: 4.32 },
            { id: "n6", tip: "nokta", x: 4.8, y: 4.86 },
            { id: "n7", tip: "nokta", x: 5.6, y: 5.41 },
            { id: "n8", tip: "nokta", x: 6.4, y: 5.95 },
            { id: "n9", tip: "nokta", x: 7.2, y: 6.5 },
            { id: "n10", tip: "nokta", x: 8.0, y: 7.04 },
            { id: "n11", tip: "nokta", x: 8.8, y: 7.59 },
            { id: "n12", tip: "nokta", x: 9.6, y: 8.13 },
            { id: "river", tip: "cizgi", renk: 0, from: [0.3, 1.8], to: [9.7, 8.2], etiket: "nehir / yol" },
            { id: "yzl", tip: "yazi", x: 5, y: 9.2, metin: "linear (doğrusal)" },
            { id: "yzg", tip: "yazi", x: 5, y: 9.2, metin: "grid (ızgara)", gizli: true },
            { id: "tv0", tip: "cizgi", renk: 2, from: [1.0, 1], to: [1.0, 9], gizli: true },
            { id: "th0", tip: "cizgi", renk: 2, from: [1, 1.0], to: [9, 1.0], gizli: true },
            { id: "tv1", tip: "cizgi", renk: 2, from: [2.333, 1], to: [2.333, 9], gizli: true },
            { id: "th1", tip: "cizgi", renk: 2, from: [1, 2.333], to: [9, 2.333], gizli: true },
            { id: "tv2", tip: "cizgi", renk: 2, from: [3.667, 1], to: [3.667, 9], gizli: true },
            { id: "th2", tip: "cizgi", renk: 2, from: [1, 3.667], to: [9, 3.667], gizli: true },
            { id: "tv3", tip: "cizgi", renk: 2, from: [5.0, 1], to: [5.0, 9], gizli: true },
            { id: "th3", tip: "cizgi", renk: 2, from: [1, 5.0], to: [9, 5.0], gizli: true },
            { id: "tv4", tip: "cizgi", renk: 2, from: [6.333, 1], to: [6.333, 9], gizli: true },
            { id: "th4", tip: "cizgi", renk: 2, from: [1, 6.333], to: [9, 6.333], gizli: true },
            { id: "tv5", tip: "cizgi", renk: 2, from: [7.667, 1], to: [7.667, 9], gizli: true },
            { id: "th5", tip: "cizgi", renk: 2, from: [1, 7.667], to: [9, 7.667], gizli: true },
            { id: "tv6", tip: "cizgi", renk: 2, from: [9.0, 1], to: [9.0, 9], gizli: true },
            { id: "th6", tip: "cizgi", renk: 2, from: [1, 9.0], to: [9, 9.0], gizli: true },
            { id: "yzt", tip: "yazi", x: 5, y: 9.5, metin: "township: 6 × 6 = 36 section", gizli: true },
            { id: "yzs", tip: "yazi", x: 5, y: 0.5, metin: "1 section = 1 mil²", gizli: true }
          ],
          durumlar: [
            { metin: "Evler bir nehir ya da yol boyunca diziliyorsa desen *linear*." },
            { metin: "Evler kare kare, eşit aralıkla diziliyorsa desen *grid*.", set: { n1: { x: 1.5, y: 8 }, n2: { x: 4, y: 8 }, n3: { x: 6.5, y: 8 }, n4: { x: 9, y: 8 }, n5: { x: 1.5, y: 5 }, n6: { x: 4, y: 5 }, n7: { x: 6.5, y: 5 }, n8: { x: 9, y: 5 }, n9: { x: 1.5, y: 2 }, n10: { x: 4, y: 2 }, n11: { x: 6.5, y: 2 }, n12: { x: 9, y: 2 } }, gizle: ["river", "yzl"], goster: ["yzg"] },
            { metin: "Amerika'da toprak da böyle bölünmüştür: *township and range*. Uçaktan satranç tahtası gibi görünür.", gizle: ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n10", "n11", "n12", "yzg"], goster: ["tv0", "th0", "tv1", "th1", "tv2", "th2", "tv3", "th3", "tv4", "th4", "tv5", "th5", "tv6", "th6", "yzt"] },
            { metin: "Her kare bir *township* (6 mil × 6 mil). İçinde 36 *section* var; her *section* 1 mil kare.", goster: ["yzs"] }
          ] },
        { tip: "ornek", baslik: "Bir township'te kaç section var?", durum: "Bir *township* 6 mil × 6 mil'dir. Her *section* 1 mil × 1 mil. Bir *township*'te kaç *section* vardır ve toplam alanı nedir?",
          adimlar: ["Bir kenarda 6 *section* sığar; bir de diğer kenarda 6 *section*.", "Toplam: 6 × 6 = 36 *section*.", "Alan: 36 × 1 mil² = 36 mil²."],
          sonuc: "Bir *township* ==36 *section*==, yani 36 mil karedir." },
        { tip: "tuzak", metin: "Tarlalar uçaktan satranç tahtası gibi karelere bölünmüş.", yanlis: "Bu *concentration*'a örnektir (kümelenme).", dogru: "Kare kare düzen bir geometrik düzendir; yani ==*pattern*== (*grid*). *Concentration* yakınlığı, *pattern* ise düzeni anlatır." }
      ]
    },
    {
      baslik: "*Aggregation*: veriyi nasıl grupluyoruz?",
      kisa: "Veri büyük birimlerde toplanınca detay kaybolur, desen değişebilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Aggregation", tr: "birleştirme / gruplama", tanim: "Veriyi hangi büyüklükteki birimlerde topladığın: mahalle, il ya da ülke. ==Birim büyüdükçe detay kaybolur; gördüğün desen bile değişebilir.==", ornek: "Ülke ortalamasında işsizlik düşük görünür; il il bakınca bazı illerde çok yüksektir." }
          ] },
        { tip: "tablo", baslik: "Örnek (varsayımsal): işsizlik oranı", head: ["Düzey", "A ili", "B ili", "C ili", "D ili"], rows: [
            ["İl il", "%3", "%4", "%12", "%5"],
            ["Ülke ortalaması", "%6", "%6", "%6", "%6"]
          ], vurgu: 1, not: "Dört ilin nüfusu eşit alınırsa ortalama (3 + 4 + 12 + 5) ÷ 4 = %6. Ortalama C ilindeki %12'yi gizler." },
        { tip: "tuzak", metin: "Aynı işsizlik verisi mahalle mahalle ve il il haritalanıyor; il haritasında farklar kayboluyor.", yanlis: "Bu durum *concentration* farkıdır.", dogru: "Veri hangi büyüklükteki birimlerde toplandığı için desen değişiyor: ==*aggregation*==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Density* = sayı ÷ alan; yayılma biçimine bakmaz (20 ev/km² > 5 ev/km²).",
            "*Concentration* = yayılma biçimi: *clustered* (toplu) ya da *dispersed* (yayılmış).",
            "Aynı sayıda ev olsa da kümelenmiş ya da yayılmış olması *density*'yi değil *concentration*'ı değiştirir.",
            "Beyzbol ligi: 1952'de 16 takım kuzeydoğuda toplu; bugün 30 takım yayılmış; hem *density* hem *concentration* değişti.",
            "*Pattern* = geometrik düzen: *linear* (nehir ya da yol boyunca) ve *grid* (kare kare).",
            "*Township and range*: 6 × 6 mil'lik *township*, 36 *section*, her *section* 1 mil kare.",
            "*Aggregation* = verinin toplandığı birim; birim büyüdükçe detay kaybolur ve desen değişebilir.",
            "Sayı aynı kalıp çiftlikler tek vadide toplanıyorsa değişen *concentration*'dır."
          ] }
      ]
    }
  ]
};
