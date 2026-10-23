/* Kitora not defteri · cb102 · 1.3–1.4 Grafikten ve Tablodan Limit
   Kaynak: ap-videolar/src/episodes/cb102 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb102",
  amac: "Bu konu limiti grafikten ve tablodan okumayı anlatıyor. Açık ve dolu noktaları, soldan ve sağdan limiti, limitin neden bazen var olmadığını ve tablonun neden yanıltabileceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Açık daire ve dolu nokta",
      kisa: "Açık daire gidilen yeri, dolu nokta gerçek değeri gösterir.",
      bloklar: [
        { tip: "hikaye", ikon: "🌉", baslik: "Ortada buluşmayan köprü",
          metin: "İki ekip köprüyü iki yakadan yapıyor. Soldaki ekip 3 metre yükseklikte, sağdaki 4 metrede geliyor. Ortadaki yükseklik kaç? Tek bir cevap yok: işte limitin olmadığı bir durum." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚪", terim: "Open circle", tr: "açık (içi boş) daire", tanim: "Fonksiyonun oraya gitmediği yeri gösterir; ama değerlerin yaklaştığı yer olabilir.", ornek: "(2, 3) açık daire: sol kol buraya tırmanıyor." },
            { ikon: "⚫", terim: "Closed circle", tr: "dolu nokta", tanim: "Fonksiyonun o x'teki gerçek değeridir. Limiti etkilemez.", ornek: "f(2) = 1: ayrık dolu nokta, limit değişmez." }
          ] }
      ]
    },
    {
      baslik: "Grafikten limit okumak",
      kisa: "Noktayı iki yandan kaydır: açık daire gidilen yerdir.",
      bloklar: [
        { tip: "grafik", baslik: "Parça parça bir grafik: x = 2, 4 ve 5'te limit", xlabel: "x", ylabel: "f(x)", xmax: 7, ymax: 6,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "a", tip: "cizgi", renk: 0, from: [0, 1], to: [2, 3] },
            { id: "b", tip: "cizgi", renk: 0, from: [2, 4], to: [4, 2] },
            { id: "c", tip: "cizgi", renk: 0, from: [4, 2], to: [7, 5] },
            { id: "o1", tip: "yazi", x: 2, y: 2.86, metin: "○" },
            { id: "o2", tip: "yazi", x: 2, y: 3.86, metin: "○" },
            { id: "o3", tip: "yazi", x: 5, y: 2.86, metin: "○" },
            { id: "d1", tip: "nokta", x: 2, y: 1, renk: 2 },
            { id: "d2", tip: "nokta", x: 4, y: 2, renk: 2 },
            { id: "kl1", tip: "ok", renk: 1, from: [1.2, 2.2], to: [1.85, 2.85], gizli: true },
            { id: "kr1", tip: "ok", renk: 1, from: [2.8, 3.2], to: [2.15, 3.85], gizli: true },
            { id: "kt1", tip: "yazi", x: 0.9, y: 3.6, metin: "soldan 3", gizli: true },
            { id: "kt2", tip: "yazi", x: 3.3, y: 4.5, metin: "sağdan 4", gizli: true },
            { id: "kl2", tip: "ok", renk: 1, from: [3.2, 2.8], to: [3.85, 2.15], gizli: true },
            { id: "kr2", tip: "ok", renk: 1, from: [4.8, 2.8], to: [4.15, 2.15], gizli: true },
            { id: "kt3", tip: "yazi", x: 4, y: 3.7, metin: "limit 2", gizli: true },
            { id: "kl3", tip: "ok", renk: 1, from: [4.2, 2.2], to: [4.85, 2.85], gizli: true },
            { id: "kr3", tip: "ok", renk: 1, from: [5.8, 3.8], to: [5.15, 3.15], gizli: true },
            { id: "kt4", tip: "yazi", x: 5, y: 4.5, metin: "limit 3", gizli: true },
            { id: "y3", tip: "cizgi", renk: 3, kesik: true, from: [0, 3], to: [7, 3], gizli: true },
            { id: "y3t", tip: "yazi", x: 6.9, y: 3.3, metin: "y = 3", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Kural: ○ içi boş daire = gidilmeyen yer, ● dolu nokta = gerçek değer. Hep aynı soru: nokta nereye gidiyor?" },
            { metin: "x = 2: soldan 3'e tırmanıyor, sağdan 4'ten iniyor. Farklı → limit ==yok==. Ayrık f(2) = 1 limiti etkilemez.", goster: ["kl1", "kr1", "kt1", "kt2"] },
            { metin: "x = 4: soldan 2, sağdan 2 → limit 2. Dolu nokta da burada: f(4) = 2.", gizle: ["kl1", "kr1", "kt1", "kt2"], goster: ["kl2", "kr2", "kt3"] },
            { metin: "x = 5: yalnızca bir delik. İki yandan 3'e gidiyor: limit 3, f(5) tanımsız.", gizle: ["kl2", "kr2", "kt3"], goster: ["kl3", "kr3", "kt4"] },
            { metin: "y = 3 çizgisi grafiği hangi x'lerde keser ve orada iki taraf da 3'e gider? x = 3 ve x = 5 (delikten geçer). x = 2'de yalnızca sol kol 3'e gider.", gizle: ["kl3", "kr3", "kt4"], goster: ["y3", "y3t"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "⬅️", terim: "Left-hand limit", tr: "soldan limit", tanim: "x, c'ye küçük değerlerle yaklaşırken f(x)'in gittiği yer: x → c⁻.", ornek: "x → 2⁻ iken f(x) → 3." },
            { ikon: "➡️", terim: "Right-hand limit", tr: "sağdan limit", tanim: "x, c'ye büyük değerlerle yaklaşırken f(x)'in gittiği yer: x → c⁺.", ornek: "x → 2⁺ iken f(x) → 4." },
            { ikon: "↔️", terim: "One-sided limit", tr: "tek taraflı limit", tanim: "Soldan ve sağdan limitin ortak adı. İkisi eşitse limit vardır.", ornek: "x = 4'te ikisi de 2, limit 2." }
          ] },
        { tip: "tablo", baslik: "Aynı grafiğin özeti", head: ["c", "soldan", "sağdan", "limit", "f(c)"],
          rows: [["2", "3", "4", "yok", "1"], ["3", "3", "3", "3", "3"], ["4", "2", "2", "2", "2"], ["5", "3", "3", "3", "tanımsız"]], vurgu: 0,
          not: "Delik limiti bozmaz; sıçrama bozar." }
      ]
    },
    {
      baslik: "Limitin olmadığı üç durum",
      kisa: "Sıçrama, sınırsız büyüme ve salınımda limit yoktur.",
      bloklar: [
        { tip: "grafik", baslik: "Sınırsız büyüme: f(x) = 1 / (x − 1)²", xlabel: "x", ylabel: "f(x)", xmax: 3, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }], yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "l", tip: "egri", renk: 0, noktalar: [[0, 1], [0.2, 1.562], [0.4, 2.778], [0.55, 4.938], [0.62, 6.925], [0.67, 9.183]] },
            { id: "r", tip: "egri", renk: 0, noktalar: [[1.33, 9.183], [1.38, 6.925], [1.45, 4.938], [1.6, 2.778], [1.8, 1.562], [2, 1], [2.5, 0.444], [3, 0.25]] },
            { id: "va", tip: "cizgi", renk: 2, kesik: true, from: [1, 0], to: [1, 10], gizli: true },
            { id: "vat", tip: "yazi", x: 1.06, y: 9.4, metin: "x = 1", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "x = 1'e yaklaştıkça iki yandan da f(x) gökyüzüne fırlıyor." },
            { metin: "Düşey doğru x = 1: grafik ona yaklaşır ama dokunmaz.", goster: ["va", "vat"] },
            { metin: "x = 1,1 → 100; x = 1,01 → 10 000; x = 1,001 → 1 000 000. Değerler sınırsız büyür." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🚫", terim: "Does not exist (DNE)", tr: "limit yok", tanim: "Limitin gerçel bir sayı olarak var olmaması. Üç nedeni vardır: sıçrama, sınırsız büyüme, salınım.", ornek: "x → 2 iken sol 3, sağ 4." },
            { ikon: "🪜", terim: "Jump", tr: "sıçrama", tanim: "Soldan ve sağdan limitin farklı olduğu kopukluk.", ornek: "x = 2'de 3'ten 4'e atlayan grafik." },
            { ikon: "🚀", terim: "Unbounded", tr: "sınırsız", tanim: "Değerlerin sonsuza büyümesi ya da küçülmesi. ∞ yazılır ama sayı değildir.", ornek: "1 / (x − 1)² x → 1 iken büyür; limit yok." },
            { ikon: "🌀", terim: "Oscillation", tr: "salınım", tanim: "Değerlerin hiçbir sayıya yerleşmeden gidip gelmesi.", ornek: "sin(1/x), x → 0: −1 ile 1 arasında gidip gelir." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Limit **var**", maddeler: ["İki taraf aynı gerçel sayıya gider", "f(c) tanımsız ya da farklı olabilir"] },
          sag: { ikon: "❌", baslik: "Limit **yok**", maddeler: ["Sıçrama, sınırsız büyüme ya da salınım", "Ortalama alınmaz"] },
          oyun: [
            { metin: "Soldan limit 3, sağdan limit 4 (x → 2).", cevap: "sag", neden: "Taraflar farklı: sıçrama." },
            { metin: "Soldan 2, sağdan 2; ama f(c) tanımsız bir delik.", cevap: "sol", neden: "Delik limiti bozmaz: limit 2." },
            { metin: "x → 1 iken 1 / (x − 1)²", cevap: "sag", neden: "Sınırsız büyüyor; ∞ bir sayı değil." },
            { metin: "Soldan 2, sağdan 2 ve f(c) = 2.", cevap: "sol", neden: "İki taraf eşit: limit 2." },
            { metin: "x → 0 iken sin(1/x)", cevap: "sag", neden: "−1 ile 1 arasında salınıyor, hiçbir sayıya yerleşmiyor." }
          ] },
        { tip: "tuzak", metin: "Taraflar farklıysa ortalama almak, 3 ile 4 için 3,5 demek yanlıştır; limit yoktur. \"Limit = ∞\" desen bile AP'de bu limitin var olmadığı anlamına gelir; davranışı ∞ ile anlatmak da doğrudur (ayrıntı: Bölüm 8).", yanlis: "Sol 3, sağ 4; limit 3,5 olur.", dogru: "İki tek taraflı limit farklıysa limit yoktur." }
      ]
    },
    {
      baslik: "AP örnekleri: grafikten limit",
      kisa: "Limit ve değer ayrı okunur; sonra toplanır.",
      bloklar: [
        { tip: "ornek", baslik: "lim x→2⁺ f(x) + f(2) + lim x→5 f(x) kaç?", durum: "Yukarıdaki grafiği kullan.",
          adimlar: [
            "Sağdan 2'ye yaklaşırken orta kol, açık daireye (2, 4) gidiyor: lim x→2⁺ f(x) = 4.",
            "f(2) bir limit değil, değer: dolu nokta f(2) = 1.",
            "x = 5'te delik var, iki taraf da 3'e gidiyor: lim x→5 f(x) = 3.",
            "Topla: 4 + 1 + 3."
          ],
          sonuc: "Toplam = ==8==." },
        { tip: "ornek", baslik: "x → a iken limit 3 olacak şekilde hangi a değerleri vardır?", durum: "y = 3 yatay çizgisi çiz ve grafiği hangi x'lerde kestiğine bak.",
          adimlar: [
            "Çizgi x = 3'te grafiği kesiyor: iki taraf da 3'e gidiyor (6 − 3 = 3), limit 3.",
            "x = 5'te çizgi tam delikten geçiyor: değer yok ama limit yine 3 (5 − 2 = 3).",
            "x = 2'de yalnızca sol kol 3'e gider, sağ kol 4'e: limit yok."
          ],
          sonuc: "a = ==3== ve a = ==5==." }
      ]
    },
    {
      baslik: "Tablodan limit tahmini",
      kisa: "Tablonun iki tarafına bak; ortak sayı limit tahminidir.",
      bloklar: [
        { tip: "tablo", baslik: "f(x) = (x³ − 8) / (x − 2): x = 2'de tanımsız", head: ["x", "1,9", "1,99", "1,999", "2", "2,001", "2,01", "2,1"],
          rows: [["f(x)", "11,41", "11,94", "11,994", "tanımsız", "12,006", "12,06", "12,61"]],
          not: "İki taraf da 12'ye sıkışıyor: tahmin ==12==. (x³ − 8 = (x − 2)(x² + 2x + 4); sadeleşince x² + 2x + 4, 2 koyunca 12.)" },
        { tip: "ornek", baslik: "g(x) tablosu: x → 3 için en iyi limit tahmini?", durum: "Soldan: x = 2,9; 2,99; 2,999 için g = 4,71; 4,97; 4,997. Sağdan: x = 3,1; 3,01; 3,001 için g = 5,23; 5,02; 5,002.",
          adimlar: [
            "Sol taraf: 4,71 → 4,97 → 4,997, yani 5'e yaklaşıyor.",
            "Sağ taraf: 5,23 → 5,02 → 5,002, yani yine 5'e yaklaşıyor.",
            "İki taraf aynı sayıya gidiyor. Sağ değerler 2,23; 2,02; 2,002 olsaydı limit yok derdik."
          ],
          sonuc: "En iyi tahmin: ==5==." },
        { tip: "tuzak", metin: "Tek taraftan gelen değerler yalnızca tek taraflı limit verir. Limiti tahmin etmek için c'nin her iki yanından da değer gerekir.", yanlis: "Soldan 5'e gidiyor, o halde limit 5.", dogru: "İki yanı da kontrol et; sağ taraf farklıysa limit yoktur." }
      ]
    },
    {
      baslik: "Tablo yanıltabilir",
      kisa: "Tablo yalnızca tahmin verir; şüphelenirsen grafiğe ya da cebire dön.",
      bloklar: [
        { tip: "grafik", baslik: "sin(π / x), x → 0", xlabel: "x", ylabel: "y", xmax: 1.2, ymax: 2,
          xticks: [{ v: 0.5, label: "0,5" }, { v: 1, label: "1" }], yticks: [{ v: 0, label: "−1" }, { v: 1, label: "0" }, { v: 2, label: "1" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 1], to: [1.2, 1] },
            { id: "s", tip: "egri", renk: 0, noktalar: [[0.096, 1.982], [0.097, 1.844], [0.098, 1.588], [0.099, 1.249], [0.1, 0.875], [0.102, 0.518], [0.103, 0.229], [0.104, 0.049], [0.105, 0.002], [0.107, 0.095], [0.108, 0.315], [0.11, 0.632], [0.111, 1], [0.113, 1.368], [0.114, 1.685], [0.116, 1.905], [0.117, 1.998], [0.119, 1.951], [0.121, 1.771], [0.123, 1.482], [0.124, 1.125], [0.126, 0.751], [0.128, 0.412], [0.13, 0.156], [0.132, 0.018], [0.134, 0.018], [0.137, 0.156], [0.139, 0.412], [0.141, 0.751], [0.144, 1.125], [0.146, 1.482], [0.149, 1.771], [0.152, 1.951], [0.154, 1.998], [0.157, 1.905], [0.16, 1.685], [0.163, 1.368], [0.167, 1], [0.17, 0.632], [0.174, 0.315], [0.177, 0.095], [0.181, 0.002], [0.185, 0.049], [0.189, 0.229], [0.194, 0.518], [0.198, 0.875], [0.203, 1.249], [0.208, 1.588], [0.214, 1.844], [0.219, 1.982], [0.225, 1.982], [0.231, 1.844], [0.238, 1.588], [0.245, 1.249], [0.253, 0.875], [0.26, 0.518], [0.269, 0.229], [0.278, 0.049], [0.287, 0.002], [0.298, 0.095], [0.309, 0.315], [0.321, 0.632], [0.333, 1], [0.347, 1.368], [0.362, 1.685], [0.379, 1.905], [0.397, 1.998], [0.417, 1.951], [0.439, 1.771], [0.463, 1.482], [0.49, 1.125], [0.521, 0.751], [0.556, 0.412], [0.595, 0.156], [0.641, 0.018], [0.694, 0.018], [0.758, 0.156], [0.833, 0.412], [0.926, 0.751], [1.042, 1.125], [1.19, 1.482]] },
            { id: "z1", tip: "nokta", x: 1, y: 1, renk: 2, gizli: true },
            { id: "z2", tip: "nokta", x: 0.1, y: 1, renk: 2, gizli: true },
            { id: "m1", tip: "nokta", x: 0.667, y: 0, renk: 1, etiket: "−1", gizli: true },
            { id: "p1", tip: "nokta", x: 0.4, y: 2, renk: 1, etiket: "+1", gizli: true }
          ],
          durumlar: [
            { metin: "Grafik x → 0 iken çılgınca salınıyor." },
            { metin: "x = 1; 0,1 ve 0,01 için sin(π / x) = sin(π) = sin(10π) = sin(100π) = 0. Tablo \"limit 0\" dedirtir.", goster: ["z1", "z2"] },
            { metin: "Ama x = 2/3 için sonuç −1, x = 0,4 için +1. Her yakınlıkta hem −1 hem +1 var: ==limit yok==.", goster: ["m1", "p1"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Estimate", tr: "tahmin", tanim: "Tablo limit hakkında yalnızca tahmin verir; kanıt değildir. Garip bir şey sezersen grafiğe ya da cebire dön.", ornek: "Üç tablo satırı 0 verdi ama sin(π / x)'in limiti yok." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Noktanın nereye gittiğine bak; tablo tahmindir, kanıt değildir.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Grafikte noktayı iki yandan kaydır: açık daire gidilen yer, dolu nokta gerçek değerdir.",
            "Soldan ve sağdan limit eşitse limit vardır; değilse yoktur, ortalama alınmaz.",
            "Delik limiti bozmaz, f(c) dolu noktası limiti değiştirmez; sıçrama limiti bozar.",
            "Limit üç şekilde yok olur: sıçrama, sınırsız büyüme (∞ sayı değil), salınım (sin(1/x)).",
            "\"Hangi a için limit k?\": y = k çizgisini çiz, iki tarafın da k'ya gittiği x'leri bul.",
            "Tabloda c'nin iki yanından da değer topla ve ortak sayıyı tahmin et.",
            "Tablo tahmindir: sin(π / x) üç satırda 0 verdi ama limiti yok."
          ] }
      ]
    }
  ]
};
