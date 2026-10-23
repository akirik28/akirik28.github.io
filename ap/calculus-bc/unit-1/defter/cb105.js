/* Kitora not defteri · cb105 · 1.8 Sıkıştırma Teoremi ve Trigonometrik Limitler
   Kaynak: ap-videolar/src/episodes/cb105 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb105",
  amac: "Bu konu *squeeze theorem* yani sıkıştırma teoremini ve trigonometrik limitleri anlatıyor. Doğrudan bulamadığın bir limiti iki sınır arasına sıkıştırmayı, sin x / x = 1 limitini ve onun akrabalarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Sıkıştırma teoremi",
      kisa: "İki sınır aynı sayıya gidiyorsa aradaki fonksiyon da oraya gider.",
      bloklar: [
        { tip: "hikaye", ikon: "🚪", baslik: "Koridorda iki arkadaşının arasında",
          metin: "İki arkadaşın seni kollarından tutmuş, ikisi de 3 numaralı sınıfa gidiyor. Arada sıkıştığın için sen de o kapıya gidiyorsun. Limitini doğrudan bulamadığın bir fonksiyonu, limitini bildiğin iki fonksiyonun arasına hapset." },
        { tip: "formul", parcalar: [
            { t: "g(x)", alt: "alt sınır" }, "≤",
            { t: "f(x)", alt: "sıkışan" }, "≤",
            { t: "h(x)", alt: "üst sınır" }
          ], aciklama: "x → c iken lim g = lim h = L ise lim f = L. İki şart var: eşitsizlik c'nin çevresinde doğru olmalı ve iki sınırın limiti eşit olmalı." },
        { tip: "grafik", baslik: "Huni: f(x), g(x) ile h(x) arasında; x → 3", xlabel: "x", ylabel: "y", xmax: 6, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }], yticks: [{ v: 3, label: "3" }],
          ogeler: [
            { id: "h", tip: "egri", renk: 2, noktalar: [[1, 5], [1.5, 4.125], [2, 3.5], [2.5, 3.125], [3, 3], [3.5, 3.125], [4, 3.5], [4.5, 4.125], [5, 5]] },
            { id: "g", tip: "egri", renk: 1, noktalar: [[1, 1], [1.5, 1.875], [2, 2.5], [2.5, 2.875], [3, 3], [3.5, 2.875], [4, 2.5], [4.5, 1.875], [5, 1]] },
            { id: "f", tip: "egri", renk: 0, noktalar: [[1, 1.49], [1.1, 1.28], [1.2, 1.39], [1.3, 1.72], [1.4, 2.19], [1.5, 2.69], [1.6, 3.11], [1.7, 3.42], [1.8, 3.57], [1.9, 3.59], [2, 3.49], [2.1, 3.35], [2.2, 3.19], [2.3, 3.05], [2.4, 2.97], [2.5, 2.93], [2.6, 2.93], [2.7, 2.96], [2.8, 2.98], [2.9, 3], [3, 3], [3.1, 3], [3.2, 3], [3.3, 3.03], [3.4, 3.07], [3.5, 3.12], [3.6, 3.17], [3.7, 3.19], [3.8, 3.16], [3.9, 3.04], [4, 2.86], [4.1, 2.61], [4.2, 2.36], [4.3, 2.16], [4.4, 2.07], [4.5, 2.16], [4.6, 2.44], [4.7, 2.93], [4.8, 3.56], [4.9, 4.23], [5, 4.83]], gizli: true },
            { id: "p", tip: "nokta", x: 3, y: 3, renk: 3, etiket: "L = 3", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Üstte h, altta g: iki eğri x = 3'te aynı noktada birleşiyor." },
            { metin: "f bunların arasında dalgalanıyor: g ≤ f ≤ h.", goster: ["f"] },
            { metin: "x → 3 iken g ve h'nin limiti 3. Aradaki f'nin kaçacak yeri kalmıyor: ==lim f = 3==.", goster: ["p"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🥪", terim: "Squeeze theorem", tr: "sıkıştırma teoremi", tanim: "c'nin çevresinde g ≤ f ≤ h ve lim g = lim h = L ise lim f = L.", ornek: "Arada sıkışan sen, iki arkadaşınla aynı kapıya gidersin." },
            { ikon: "⬆️", terim: "Upper bound", tr: "üst sınır", tanim: "f'nin hiçbir zaman aşamadığı, üstteki fonksiyon h.", ornek: "x² sin(1/x) için üst sınır x²." },
            { ikon: "⬇️", terim: "Lower bound", tr: "alt sınır", tanim: "f'nin hiçbir zaman altına inemediği, alttaki fonksiyon g.", ornek: "x² sin(1/x) için alt sınır −x²." }
          ] }
      ]
    },
    {
      baslik: "Salınan çarpanı sıkıştır",
      kisa: "sin(1/x) −1 ile 1 arasında kalır; x² ile çarpınca 0'a sıkışır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Oscillating factor", tr: "salınan çarpan", tanim: "Sınırlı ama salınan çarpan, örneğin sin(1/x). Her zaman −1 ile 1 arasındadır.", ornek: "sin(1/x) tek başına x → 0 iken limitsizdir; x² ile çarpılınca 0'a sıkışır." }
          ] },
        { tip: "grafik", baslik: "x² sin(1/x) ve sınırlar ±x²; eksenler kaydırıldı, kesikli çizgiler gerçek eksenler", xlabel: "x", ylabel: "y", xmax: 1, ymax: 0.5,
          xticks: [{ v: 0, label: "−0,5" }, { v: 0.5, label: "0" }, { v: 1, label: "0,5" }], yticks: [{ v: 0, label: "−0,25" }, { v: 0.25, label: "0" }, { v: 0.5, label: "0,25" }],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 0.25], to: [1, 0.25] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [0.5, 0], to: [0.5, 0.5] },
            { id: "ub", tip: "egri", renk: 2, noktalar: [[0, 0.5], [0.1, 0.41], [0.2, 0.34], [0.3, 0.29], [0.4, 0.26], [0.5, 0.25], [0.6, 0.26], [0.7, 0.29], [0.8, 0.34], [0.9, 0.41], [1, 0.5]] },
            { id: "lb", tip: "egri", renk: 1, noktalar: [[0, 0], [0.1, 0.09], [0.2, 0.16], [0.3, 0.21], [0.4, 0.24], [0.5, 0.25], [0.6, 0.24], [0.7, 0.21], [0.8, 0.16], [0.9, 0.09], [1, 0]] },
            { id: "f", tip: "egri", renk: 0, noktalar: [[0.0455, 0.083], [0.1, 0.1542], [0.1429, 0.2073], [0.1774, 0.2457], [0.2059, 0.2721], [0.2297, 0.2887], [0.25, 0.2973], [0.2674, 0.2995], [0.2826, 0.297], [0.2959, 0.2909], [0.3077, 0.2827], [0.3182, 0.2733], [0.3276, 0.2638], [0.3361, 0.2549], [0.3437, 0.2472], [0.3507, 0.241], [0.3571, 0.2366], [0.363, 0.234], [0.3684, 0.2332], [0.3734, 0.234], [0.378, 0.236], [0.3824, 0.2389], [0.3864, 0.2424], [0.3901, 0.2461], [0.3936, 0.2497], [0.3969, 0.2529], [0.4, 0.2554], [0.4029, 0.2572], [0.4057, 0.2582], [0.4083, 0.2584], [0.4107, 0.2578], [0.413, 0.2566], [0.4153, 0.255], [0.4174, 0.2531], [0.4194, 0.2511], [0.4213, 0.2492], [0.4231, 0.2475], [0.4248, 0.2462], [0.4265, 0.2454], [0.4281, 0.245], [0.4296, 0.2451], [0.431, 0.2456], [0.4324, 0.2464], [0.4338, 0.2475], [0.4351, 0.2487], [0.4363, 0.25], [0.4375, 0.2511], [0.5, 0.25], [0.5625, 0.2489], [0.5637, 0.25], [0.5649, 0.2513], [0.5662, 0.2525], [0.5676, 0.2536], [0.569, 0.2544], [0.5704, 0.2549], [0.5719, 0.255], [0.5735, 0.2546], [0.5752, 0.2538], [0.5769, 0.2525], [0.5787, 0.2508], [0.5806, 0.2489], [0.5826, 0.2469], [0.5847, 0.245], [0.587, 0.2434], [0.5893, 0.2422], [0.5917, 0.2416], [0.5943, 0.2418], [0.5971, 0.2428], [0.6, 0.2446], [0.6031, 0.2471], [0.6064, 0.2503], [0.6099, 0.2539], [0.6136, 0.2576], [0.6176, 0.2611], [0.622, 0.264], [0.6266, 0.266], [0.6316, 0.2668], [0.637, 0.266], [0.6429, 0.2634], [0.6493, 0.259], [0.6563, 0.2528], [0.6639, 0.2451], [0.6724, 0.2362], [0.6818, 0.2267], [0.6923, 0.2173], [0.7041, 0.2091], [0.7174, 0.203], [0.7326, 0.2005], [0.75, 0.2027], [0.7703, 0.2113], [0.7941, 0.2279], [0.8226, 0.2543], [0.8571, 0.2927], [0.9, 0.3458], [0.9545, 0.417]], gizli: true },
            { id: "p", tip: "nokta", x: 0.5, y: 0.25, renk: 3, etiket: "0", gizli: true }
          ],
          durumlar: [
            { metin: "sin(1/x), −1 ile 1 arasında. x² ile çarpınca ifade −x² ile x² arasına girer." },
            { metin: "x² sin(1/x) dalgaları x → 0 iken iki parabolün arasında sönüyor.", goster: ["f"] },
            { metin: "lim(−x²) = 0 ve lim x² = 0, yani iki sınır da 0'a gidiyor: ==limit 0==.", goster: ["p"] }
          ] },
        { tip: "ornek", baslik: "lim x→0 x² sin(1/x)", durum: "Yerine koyamazsın (sin(1/x) 0'da tanımsız), cebir de işe yaramaz.",
          adimlar: [
            "Sinüs her zaman sınırlıdır: −1 ≤ sin(1/x) ≤ 1.",
            "x² ≥ 0 ile çarp (yön değişmez): −x² ≤ x² sin(1/x) ≤ x².",
            "lim x→0 (−x²) = 0 ve lim x→0 x² = 0.",
            "Sıkıştırma teoremi: iki sınır da 0'a gidiyor."
          ],
          sonuc: "Limit = ==0==." }
      ]
    },
    {
      baslik: "AP örneği: verilen sınırlarla limit",
      kisa: "İki sınırın limiti aynıysa ve eşitsizlik doğruysa f onlarla gider.",
      bloklar: [
        { tip: "grafik", baslik: "4x − 3 ≤ f(x) ≤ x² + 1: sınırlar x = 2'de değiyor", xlabel: "x", ylabel: "y", xmax: 4, ymax: 10,
          xticks: [{ v: 2, label: "2" }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "pa", tip: "egri", renk: 2, noktalar: [[0, 1], [0.5, 1.25], [1, 2], [1.5, 3.25], [2, 5], [2.5, 7.25], [3, 10]] },
            { id: "ln", tip: "cizgi", renk: 1, from: [0.75, 0], to: [3, 9], gizli: true },
            { id: "pt", tip: "nokta", x: 2, y: 5, renk: 3, etiket: "(2, 5)", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Üst sınır: parabol y = x² + 1." },
            { metin: "Alt sınır: doğru y = 4x − 3. f bu ikisinin arasında kalıyor.", goster: ["ln"] },
            { metin: "Fark (x² + 1) − (4x − 3) = (x − 2)² ≥ 0: parabol her zaman üstte ve yalnız (2, 5)'te doğruya değiyor. f orada kilitleniyor.", goster: ["pt"] }
          ] },
        { tip: "ornek", baslik: "Her x için 4x − 3 ≤ f(x) ≤ x² + 1. lim x→2 f(x) kaç?", durum: "Alt ve üst sınırın limitlerini bul; eşit çıkarsa sıkıştırma çalışır.",
          adimlar: [
            "Alt sınır: lim x→2 (4x − 3) = 4 · 2 − 3 = 5.",
            "Üst sınır: lim x→2 (x² + 1) = 2² + 1 = 5.",
            "İki sınırın limiti eşit (5); eşitsizlik veriliyor.",
            "Sıkıştırma teoremine göre f de 5'e gider."
          ],
          sonuc: "Limit = ==5==." },
        { tip: "tuzak", metin: "Teoremin iki şartı var. İki sınır farklı sayılara gitseydi teorem hiçbir şey söylemezdi; tek sınırın limiti de yetmez. AP'de iki sınırı ve limitlerini açıkça yaz.", yanlis: "Alt sınır 5'e gidiyor, o halde f de 5'e gider.", dogru: "İki sınır da aynı L'ye gitmeli; ancak o zaman lim f = L." }
      ]
    },
    {
      baslik: "Yıldız limit: sin x / x = 1",
      kisa: "x → 0 iken sin x / x → 1; yalnızca radyanda geçerlidir.",
      bloklar: [
        { tip: "grafik", baslik: "y = sin x / x; eksenler kaydırıldı, kesikli çizgiler gerçek eksenler", xlabel: "x", ylabel: "y", xmax: 20, ymax: 2,
          xticks: [{ v: 0, label: "−10" }, { v: 5, label: "−5" }, { v: 10, label: "0" }, { v: 15, label: "5" }, { v: 20, label: "10" }], yticks: [{ v: 0.4, label: "0" }, { v: 1.4, label: "1" }],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 0.4], to: [20, 0.4] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [10, 0], to: [10, 2] },
            { id: "s", tip: "egri", renk: 0, noktalar: [[0, 0.346], [0.5, 0.392], [1, 0.446], [1.5, 0.494], [2, 0.524], [2.5, 0.525], [3, 0.494], [3.5, 0.433], [4, 0.353], [4.5, 0.272], [5, 0.208], [5.5, 0.183], [6, 0.211], [6.5, 0.3], [7, 0.447], [7.5, 0.639], [8, 0.855], [8.5, 1.065], [9, 1.241], [9.5, 1.359], [10, 1.4], [10.5, 1.359], [11, 1.241], [11.5, 1.065], [12, 0.855], [12.5, 0.639], [13, 0.447], [13.5, 0.3], [14, 0.211], [14.5, 0.183], [15, 0.208], [15.5, 0.272], [16, 0.353], [16.5, 0.433], [17, 0.494], [17.5, 0.525], [18, 0.524], [18.5, 0.494], [19, 0.446], [19.5, 0.392], [20, 0.346]] },
            { id: "h", tip: "yazi", x: 10, y: 1.35, metin: "○" },
            { id: "L", tip: "nokta", x: 8, y: 0.855, renk: 1, gizli: true },
            { id: "R", tip: "nokta", x: 12, y: 0.855, renk: 2, gizli: true }
          ],
          durumlar: [
            { metin: "x = 0 koyunca 0/0; çarpan yok, kök yok. Grafikte x = 0'da delik var." },
            { metin: "x = ±2 için sin x / x ≈ 0,455.", goster: ["L", "R"] },
            { metin: "x = ±0,5 için ≈ 0,959.", set: { L: { x: 9.5, y: 1.359 }, R: { x: 10.5, y: 1.359 } } },
            { metin: "x = ±0,1 için ≈ 0,9983. İki yandan da ==1=='e yaklaşıyor; fonksiyon çift olduğu için negatif taraf aynı.", set: { L: { x: 9.9, y: 1.398 }, R: { x: 10.1, y: 1.398 } } }
          ] },
        { tip: "tablo", baslik: "x radyan iken sin x / x", head: ["x", "0,1", "0,01", "0,001"], rows: [["sin x / x", "0,9983", "0,99998", "0,9999998"]], not: "Değerler 1'e yaklaşıyor." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⭐", terim: "sin x / x", tr: "sinüs x bölü x", tanim: "x → 0 iken limiti 1'dir (0/0 biçimi). Yalnızca x radyan iken doğrudur.", ornek: "lim x→0 sin x / x = 1" },
            { ikon: "📐", terim: "Radian", tr: "radyan", tanim: "Açıyı yay uzunluğuyla ölçer. AP'de açılar hep radyandır.", ornek: "π radyan = 180°" }
          ] },
        { tip: "tuzak", metin: "Hesap makinesi derece modundaysa tablo yanlış çıkar: sin 0,1° / 0,1 ≈ 0,0175 (= π/180). Limit 1 yalnızca radyanda geçerlidir.", yanlis: "Tabloyu hesap makinesinde derece modunda doldurdum.", dogru: "Radyan modunu kullan; sin x / x → 1 radyan içindir." }
      ]
    },
    {
      baslik: "Neden 1? Birim çember kanıtı",
      kisa: "Üç alan iç içe: küçük üçgen, daire dilimi ve büyük üçgen.",
      bloklar: [
        { tip: "grafik", baslik: "Birim çember, x = 0,6 radyan: P = (cos x, sin x), A = (1, 0), T = (1, tan x)", xlabel: "x", ylabel: "y", xmax: 1.6, ymax: 1.1,
          xticks: [{ v: 1, label: "1" }], yticks: [{ v: 1, label: "1" }],
          ogeler: [
            { id: "arc", tip: "egri", renk: 3, noktalar: [[1, 0], [0.991, 0.131], [0.966, 0.259], [0.924, 0.383], [0.866, 0.5], [0.793, 0.609], [0.707, 0.707], [0.609, 0.793], [0.5, 0.866], [0.383, 0.924], [0.259, 0.966], [0.131, 0.991], [0, 1]] },
            { id: "op", tip: "cizgi", renk: 0, from: [0, 0], to: [0.8253, 0.5646] },
            { id: "at", tip: "yazi", x: 1.07, y: 0.04, metin: "A" },
            { id: "pt", tip: "yazi", x: 0.76, y: 0.63, metin: "P" },
            { id: "tri", tip: "alan", renk: 2, noktalar: [[0, 0], [1, 0], [0.8253, 0.5646]], gizli: true },
            { id: "sec", tip: "alan", renk: 0, noktalar: [[0, 0], [1, 0], [0.995, 0.0998], [0.9801, 0.1987], [0.9553, 0.2955], [0.9211, 0.3894], [0.8776, 0.4794], [0.8253, 0.5646]], gizli: true },
            { id: "big", tip: "alan", renk: 1, noktalar: [[0, 0], [1, 0], [1, 0.6841]], gizli: true },
            { id: "ta", tip: "cizgi", renk: 1, from: [1, 0], to: [1, 0.6841], gizli: true },
            { id: "tt", tip: "yazi", x: 1.07, y: 0.72, metin: "T", gizli: true }
          ],
          durumlar: [
            { metin: "Birim çemberde küçük bir x açısı (0,6 rad). P = (cos x, sin x), A = (1, 0)." },
            { metin: "Küçük üçgen OAP: taban 1, yükseklik sin x. Alan = ½ sin x ≈ 0,2823.", goster: ["tri"] },
            { metin: "Daire dilimi OAP: yarıçap 1, açı x. Alan = ½ x = 0,3.", goster: ["sec"] },
            { metin: "Büyük üçgen OAT: taban 1, yükseklik tan x. Alan = ½ tan x ≈ 0,3421.", goster: ["big", "ta", "tt"] },
            { metin: "İç içe olduğu için ½ sin x ≤ ½ x ≤ ½ tan x. Sayılarla: 0,2823 ≤ 0,3 ≤ 0,3421." }
          ] },
        { tip: "formul", parcalar: [
            { t: "cos x", alt: "alttan" }, "≤",
            { t: "sin x / x", alt: "sıkışan" }, "≤",
            { t: "1", alt: "üstten" }
          ], aciklama: "Eşitsizliği ½ sin x'e bölüp tersini alınca (0 < x < π/2) bu çıkar. x → 0 iken cos x → 1, sıkıştırma: sin x / x → 1. Fonksiyon çift olduğundan negatif taraf da 1." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⭕", terim: "Unit circle", tr: "birim çember", tanim: "Merkezi orijinde, yarıçapı 1 olan çember. x radyanlık açıda (cos x, sin x) noktasını verir.", ornek: "x = 0,6 için P ≈ (0,825; 0,565)." }
          ] }
      ]
    },
    {
      baslik: "Anahtar limitler ve kısa yollar",
      kisa: "Kısa yollar: sin(kx)/x → k ve (1 − cos x)/x → 0.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔑", terim: "tan x / x", tr: "tanjant x bölü x", tanim: "x → 0 iken limiti 1: tan x / x = (sin x / x) · (1 / cos x) → 1 · 1.", ornek: "lim x→0 tan x / x = 1" },
            { ikon: "🧲", terim: "(1 − cos x) / x", tr: "(1 − kosinüs x) bölü x", tanim: "x → 0 iken limiti 0. Eşlenik (1 + cos x) ile çarparak bulunur.", ornek: "x = 0,001 için ≈ 0,0005." }
          ] },
        { tip: "tablo", baslik: "Kısa yollar (x → 0)", head: ["Limit", "Sonuç", "Örnek"],
          rows: [["sin(kx) / x", "k", "sin 4x / x → 4"], ["sin(ax) / sin(bx)", "a / b", "sin 3x / sin 5x → 3/5"], ["tan(kx) / x", "k", "tan 5x / (2x) → 5/2"], ["tan x / x", "1", "k = 1 özel hali"], ["(1 − cos x) / x", "0", "ezberle"]], vurgu: 4,
          not: "Bu ikisini ve kısa yolları ezbere bil; sınavda kılık değiştirip gelirler." },
        { tip: "ornek", baslik: "lim x→0 sin 4x / (3x)", durum: "Yerine koy: 0/0. İçerideki 4x'i paydada da görmek istiyoruz.",
          adimlar: [
            "Yaz: sin 4x / (3x) = (4/3) · (sin 4x / 4x).",
            "x → 0 iken 4x → 0, yani sin 4x / 4x → 1.",
            "Sonuç: (4/3) · 1."
          ],
          sonuc: "Limit = ==4/3==." },
        { tip: "ornek", baslik: "lim x→0 (1 − cos x) / x", durum: "Yerine koy: 0/0. Eşlenik (1 + cos x) ile çarp.",
          adimlar: [
            "Pay: (1 − cos x)(1 + cos x) = 1 − cos² x = sin² x.",
            "İkiye ayır: (sin x / x) · (sin x / (1 + cos x)).",
            "İlki 1'e gider; ikincisi 0 / (1 + 1) = 0'a gider.",
            "Çarpım: 1 · 0."
          ],
          sonuc: "Limit = ==0==." }
      ]
    },
    {
      baslik: "x → ∞ iken sin x / x",
      kisa: "Aynı fonksiyon x → 0'da 1, x → ∞'da 0'a gider.",
      bloklar: [
        { tip: "grafik", baslik: "sin x / x ve sınırları ±1/x; x → ∞; kesikli çizgi y = 0 ekseni", xlabel: "x", ylabel: "y", xmax: 40, ymax: 0.6,
          xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }], yticks: [{ v: 0, label: "−0,3" }, { v: 0.3, label: "0" }, { v: 0.6, label: "0,3" }],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 0.3], to: [40, 0.3] },
            { id: "f", tip: "egri", renk: 0, noktalar: [[4, 0.111], [4.5, 0.083], [5, 0.108], [5.5, 0.172], [6, 0.253], [6.5, 0.333], [7, 0.394], [7.5, 0.425], [8, 0.424], [8.5, 0.394], [9, 0.346], [9.5, 0.292], [10, 0.246], [10.5, 0.216], [11, 0.209], [11.5, 0.224], [12, 0.255], [12.5, 0.295], [13, 0.332], [13.5, 0.36], [14, 0.371], [14.5, 0.364], [15, 0.343], [15.5, 0.313], [16, 0.282], [16.5, 0.257], [17, 0.243], [17.5, 0.244], [18, 0.258], [18.5, 0.281], [19, 0.308], [19.5, 0.331], [20, 0.346], [20.5, 0.349], [21, 0.34], [21.5, 0.322], [22, 0.3], [22.5, 0.278], [23, 0.263], [23.5, 0.258], [24, 0.262], [24.5, 0.276], [25, 0.295], [25.5, 0.314], [26, 0.329], [26.5, 0.337], [27, 0.335], [27.5, 0.325], [28, 0.31], [28.5, 0.292], [29, 0.277], [29.5, 0.268], [30, 0.267], [30.5, 0.274], [31, 0.287], [31.5, 0.303], [32, 0.317], [32.5, 0.327], [33, 0.33], [33.5, 0.326], [34, 0.316], [34.5, 0.302], [35, 0.288], [35.5, 0.277], [36, 0.272], [36.5, 0.274], [37, 0.283], [37.5, 0.295], [38, 0.308], [38.5, 0.319], [39, 0.325], [39.5, 0.325], [40, 0.319]] },
            { id: "ub", tip: "egri", renk: 2, noktalar: [[4, 0.55], [5, 0.5], [6, 0.467], [8, 0.425], [10, 0.4], [13, 0.377], [17, 0.359], [22, 0.345], [28, 0.336], [34, 0.329], [40, 0.325]], gizli: true },
            { id: "lb", tip: "egri", renk: 1, noktalar: [[4, 0.05], [5, 0.1], [6, 0.133], [8, 0.175], [10, 0.2], [13, 0.223], [17, 0.241], [22, 0.255], [28, 0.264], [34, 0.271], [40, 0.275]], gizli: true },
            { id: "z", tip: "yazi", x: 39, y: 0.45, metin: "→ 0", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "x büyüdükçe pay −1 ile 1 arasında sallanıyor, payda büyüyor." },
            { metin: "x > 0 için −1/x ≤ sin x / x ≤ 1/x: iki sınır eğrisi f'yi sıkıştırıyor.", goster: ["ub", "lb"] },
            { metin: "x → ∞ iken ±1/x → 0: sıkıştırma teoremiyle ==lim sin x / x = 0==.", goster: ["z"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "♾️", terim: "Limit at infinity", tr: "sonsuzda limit", tanim: "x sonsuza giderken fonksiyonun gittiği yer. Sıkıştırma teoremi burada da çalışır.", ornek: "lim x→∞ sin x / x = 0" }
          ] },
        { tip: "ikili", sol: { ikon: "0️⃣", baslik: "x → 0", maddeler: ["sin x / x → 1", "0/0 biçimi, birim çember kanıtı"] },
          sag: { ikon: "♾️", baslik: "x → ∞", maddeler: ["sin x / x → 0", "Pay sınırlı, payda büyür: sıkıştırma"] },
          oyun: [
            { metin: "lim sin x / x, x → 0", cevap: "sol", neden: "Birim çemberle gösterilen yıldız limit: 1." },
            { metin: "lim sin x / x, x → ∞", cevap: "sag", neden: "−1/x ve 1/x arasında, ikisi de 0." },
            { metin: "Pay −1 ile 1 arasında sallanıyor, payda sonsuza büyüyor.", cevap: "sag", neden: "Sınırlı bölü sonsuz: 0." },
            { metin: "lim sin 6x / (2x), x → 0", cevap: "sol", neden: "(6/2) · (sin 6x / 6x) → 3." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Nereye yaklaştığın her şeyi değiştirir.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Squeeze theorem*: g ≤ f ≤ h ve lim g = lim h = L ise lim f = L; iki sınırın limiti eşit olmalı.",
            "Salınan çarpanda sin(1/x)'in −1 ile 1 arasında olduğunu kullan: x² sin(1/x) → 0.",
            "AP'de sıkıştırma kullanırken iki sınırı ve limitlerini açıkça yaz.",
            "x → 0 iken sin x / x = 1; yalnızca radyanda (hesap makinesi radyan modunda olmalı).",
            "Kısa yollar: sin(kx) / x → k, sin(ax) / sin(bx) → a / b, tan(kx) / x → k, tan x / x → 1.",
            "(1 − cos x) / x → 0: eşlenik (1 + cos x) ile çarp.",
            "Aynı sin x / x, x → ∞ iken sıkıştırmayla 0'a gider."
          ] }
      ]
    }
  ]
};
