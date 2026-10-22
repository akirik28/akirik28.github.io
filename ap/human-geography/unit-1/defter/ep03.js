/* Kitora not defteri · ep03 · Mesafe ve Etkileşim
   Kaynak: ap-videolar/src/episodes/ep03 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep03",
  ozet: "Coğrafyanın birinci kuralı: her şey her şeyle ilişkilidir, ama yakın olanlar daha çok. Bu defterde mesafenin iki türünü, *friction of distance* ile *distance decay*'i, *time-space convergence*'ı, akış için üç koşulu ve *gravity model* ile *breaking point*'i göreceksin.",
  bolumler: [
    {
      baslik: "Yan sıradaki arkadaş",
      bloklar: [
        { tip: "hikaye", ikon: "🪑", baslik: "En yakın arkadaşın neden yan sırada?",
          metin: "En yakın arkadaşın büyük ihtimalle yan sırada oturuyor. Başka şehirdeki kuzeninle ise ayda bir konuşuyorsun. Bu tesadüf değil; coğrafyanın birinci kuralı bu." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📜", terim: "Tobler's First Law", tr: "Tobler'in Birinci Yasası", tanim: "Her şey her şeyle ilişkilidir, ama ==yakın olanlar daha çok ilişkilidir.==", ornek: "Sınıfta yan sıradaki arkadaşınla, başka şehirdeki kuzeninden daha çok konuşursun." }
          ] },
        { tip: "not", metin: "Bu kural, bölümün geri kalanının temelidir: mesafe etkileşimi azaltır, teknoloji bu etkiyi hafifletir, nüfus ise etkileşimi artırır." }
      ]
    },
    {
      baslik: "İki tür mesafe",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📏", baslik: "*Absolute distance*", maddeler: ["Ölçülebilen mesafe", "Kilometre ya da mil", "İstanbul–Ankara: yaklaşık 450 km"] },
          sag: { ikon: "⏱️", baslik: "*Relative distance*", maddeler: ["Zaman, para ya da zahmetle ölçülür", "Aynı kilometre farklı olabilir", "Uçakla 1 saat, otobüsle 6 saat"] },
          oyun: [
            { metin: "İstanbul ile Ankara arası kara yoluyla 450 km.", cevap: "sol", neden: "Kilometre cinsinden ölçüm: *absolute*." },
            { metin: "Ankara'ya uçakla 1 saatte, otobüsle 6 saatte gidilir.", cevap: "sag", neden: "Zaman cinsinden: *relative*." },
            { metin: "İki kasaba arasındaki bilet fiyatı yüksek olduğu için gitmek zor.", cevap: "sag", neden: "Para ile ölçülen uzaklık: *relative*." },
            { metin: "Haritada cetvelle ölçülen 12 mil.", cevap: "sol", neden: "Mil bir uzunluk ölçüsüdür: *absolute*." },
            { metin: "Trafik yüzünden 5 km'lik yol 40 dakika sürüyor.", cevap: "sag", neden: "Zahmet ve zaman devrede: *relative*." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 450, sonek: " km", etiket: "İstanbul–Ankara, kara yolu (*absolute*)" },
            { deger: 1, sonek: " saat", etiket: "uçakla (*relative*)" },
            { deger: 6, sonek: " saat", etiket: "otobüsle (*relative*)" }
          ] },
        { tip: "tuzak", metin: "Aynı iki şehir arasında iki mesafe birden vardır.", yanlis: "450 km ile 6 saat farklı mesafelerdir; biri yanlıştır.", dogru: "Kilometre aynı kalır (*absolute*); süre ve maliyet ulaşım aracına göre değişir (*relative*)." }
      ]
    },
    {
      baslik: "Sürtünme ve *distance decay*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧱", terim: "Friction of distance", tr: "mesafenin sürtünmesi", tanim: "Mesafenin bir engel olması: aşmak zaman ve para ister.", ornek: "Şehrin öbür ucundaki kafeye gitmek hem zaman hem bilet parası ister." },
            { ikon: "📉", terim: "Distance decay", tr: "mesafe etkisi", tanim: "Mesafe arttıkça etkileşimin azalması. Sebep: *friction of distance*.", ornek: "Pizzacının siparişlerinin çoğu 1 km içinden gelir; uzaklaştıkça sipariş hızla düşer." }
          ] },
        { tip: "grafik", baslik: "Okulun yanındaki kafe vs şehrin öbür ucundaki", xlabel: "Mesafe", ylabel: "Etkileşim", xmax: 10, ymax: 10,
          ogeler: [
            { id: "dd", tip: "egri", renk: 0, etiket: "distance decay", noktalar: [[0.3, 9.4], [1, 6.2], [2, 3.4], [3.5, 1.8], [5.5, 0.9], [8, 0.4], [9.7, 0.25]] },
            { id: "yak", tip: "nokta", x: 0.8, y: 7.2, etiket: "her gün", gizli: true },
            { id: "orta", tip: "nokta", x: 3.5, y: 1.8, etiket: "ayda 1", gizli: true },
            { id: "uzak", tip: "nokta", x: 8, y: 0.4, etiket: "yılda 1", gizli: true },
            { id: "fr", tip: "yazi", x: 7, y: 6, metin: "mesafe = zaman + para + zahmet", gizli: true }
          ],
          durumlar: [
            { metin: "Mesafe arttıkça etkileşim azalır: eğri aşağı kayar." },
            { metin: "Okulunun yanındaki kafeye ==her gün== gidersin.", goster: ["yak"] },
            { metin: "Biraz uzaktaki kafeye ayda bir gidersin. Şehrin öbür ucundakine belki ==yılda bir==.", goster: ["orta", "uzak"] },
            { metin: "Eğrinin dikliği mesafenin maliyetinden gelir: ==*friction of distance*==.", goster: ["fr"] }
          ] },
        { tip: "tuzak", metin: "Mesafe tek başına etkileşimi bitirmez; yalnızca azaltır.", yanlis: "*Distance decay*'e göre uzak yerler hiç etkileşmez.", dogru: "Etkileşim mesafeyle ==azalır==; sıfıra yaklaşabilir ama nedeni uzaklığın getirdiği zaman ve para maliyetidir." }
      ]
    },
    {
      baslik: "Mesafe eriyor: *time-space convergence*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚄", terim: "Time-space convergence", tr: "zaman–mekân yakınsaması", tanim: "Teknoloji yolculuk süresini kısalttıkça yerlerin birbirine yaklaşmış gibi olması. Kilometre değişmez, zaman azalır.", ornek: "Yüksek hızlı tren iki şehir arasını 6 saatten 2 saate indirir." }
          ] },
        { tip: "grafik", baslik: "Atlantik'i geçmek", xlabel: "Dönem", ylabel: "Süre (hafta)", xmax: 6, ymax: 7,
          xticks: [{ v: 1, label: "1800'ler" }, { v: 3, label: "bugün" }, { v: 5, label: "video" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "gemi", tip: "alan", renk: 1, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "gemit", tip: "yazi", x: 1, y: 6.6, metin: "~6 hafta (gemi)", gizli: true },
            { id: "ucak", tip: "alan", renk: 2, noktalar: [[2.6, 0], [3.4, 0], [3.4, 0], [2.6, 0]] },
            { id: "ucakt", tip: "yazi", x: 3, y: 0.6, metin: "8 saat (uçak)", gizli: true },
            { id: "videot", tip: "yazi", x: 5, y: 0.6, metin: "0 saniye (görüntülü arama)", gizli: true }
          ],
          durumlar: [
            { metin: "1800'lerde Atlantik'i gemiyle geçmek haftalar sürerdi: ==yaklaşık 6 hafta==.", set: { gemi: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 6], [0.6, 6]] } }, goster: ["gemit"] },
            { metin: "Bugün uçakla yalnızca ==8 saat==. Çubuk neredeyse yerle bir.", set: { ucak: { noktalar: [[2.6, 0], [3.4, 0], [3.4, 0.05], [2.6, 0.05]] } }, goster: ["ucakt"] },
            { metin: "Görüntülü aramayla süre ==sıfır==. Yerler sanki birbirine yaklaştı: *time-space convergence*.", goster: ["videot"] }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1800'ler", baslik: "Gemi", metin: "Atlantik'i geçmek yaklaşık 6 hafta." },
            { tarih: "Bugün", baslik: "Uçak", metin: "Aynı yol yaklaşık 8 saat." },
            { tarih: "Şimdi", baslik: "Görüntülü arama", metin: "Süre sıfır saniye." }
          ] },
        { tip: "not", metin: "Bu fikre kimi kaynaklar *time-space compression* de der. Anlamı aynıdır: teknoloji sayesinde mesafenin önemi azalır." }
      ]
    },
    {
      baslik: "Bir yer ne kadar etkileşir?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🚪", baslik: "*Accessibility*", maddeler: ["Oraya ulaşmak ne kadar kolay?", "Zaman, maliyet, yol erişimi", "Tek bir yerin özelliği"] },
          sag: { ikon: "🕸️", baslik: "*Connectivity*", maddeler: ["Başka yerlere kaç yolla, kaç hatla bağlı?", "Bağlantı sayısı", "Ağın yoğunluğu"] },
          oyun: [
            { metin: "Bir mahalleden şehir merkezine yirmi dakikada varılabiliyor.", cevap: "sol", neden: "Ulaşmanın kolaylığı: *accessibility*." },
            { metin: "Bir aktarma istasyonuna on beş farklı hat bağlanıyor.", cevap: "sag", neden: "Bağlantı sayısı: *connectivity*." },
            { metin: "Bir köyden tek bir yol çıkıyor ve o yol kışın kapanıyor.", cevap: "sag", neden: "Az bağlantı: düşük *connectivity*." },
            { metin: "Bir havalimanına metro, otobüs ve otoyolla kolayca ulaşılıyor.", cevap: "sol", neden: "Erişim kolaylığı: *accessibility*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🚉", terim: "Accessibility", tr: "erişilebilirlik", tanim: "Bir yere ulaşmanın ne kadar kolay olduğu.", ornek: "Büyük bir aktarma istasyonuna herkes kolayca ulaşır." },
            { ikon: "🔗", terim: "Connectivity", tr: "bağlantı", tanim: "Bir yerin başka yerlere kaç yolla, kaç hatla bağlı olduğu.", ornek: "Her hatta bağlı bir aktarma istasyonu; kenardaki tek hatlı durak ise düşük bağlantılıdır." }
          ] },
        { tip: "not", metin: "Büyük bir aktarma istasyonu iki ölçüde de yüksektir: her hatta bağlı (*connectivity*) ve herkes kolayca ulaşıyor (*accessibility*)." }
      ]
    },
    {
      baslik: "Akış için üç koşul",
      bloklar: [
        { tip: "adimlar", baslik: "İki yer arasında akış olması için", adimlar: [
            { baslik: "*Complementarity*: tamamlayıcılık", metin: "Birinde olan, diğerinde eksik olmalı. Biri portakal üretir, diğeri portakal ister." },
            { baslik: "*Transferability*: aktarılabilirlik", metin: "Taşımaya değmeli; maliyet ürünün değerini geçmemeli. Elma dünyanın öbür ucuna taşınır; kum taşınmaz." },
            { baslik: "*Intervening opportunity*: araya daha yakın fırsat girmemeli", metin: "Arada daha yakın bir alternatif varsa akış oraya kayar; yani böyle bir alternatifin ==olmaması== gerekir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🍊", terim: "Complementarity", tr: "tamamlayıcılık", tanim: "Bir yerin fazlası, öbür yerin eksiğini kapatır. Talep ile arz eşleşir.", ornek: "A şehri portakal üretiyor, B şehri portakal istiyor." },
            { ikon: "🚚", terim: "Transferability", tr: "aktarılabilirlik", tanim: "Ürünü ya da insanı taşımanın maliyeti, ürünün değerinden düşük olmalı.", ornek: "Elmayı öbür uca taşımaya değer; ağır ve ucuz kumu taşımaya değmez." },
            { ikon: "🏬", terim: "Intervening opportunity", tr: "araya giren fırsat", tanim: "İki yer arasında daha yakın bir alternatifin bulunması. Akış, uzaktaki yere değil bu yakın alternatife gider.", ornek: "Uzaktaki mağazaya giderken yolda aynısını görürsen orada durursun." }
          ] },
        { tip: "ikili", sol: { ikon: "🧩", baslik: "*Complementarity*", maddeler: ["Biri sahip, öbürü ihtiyaç sahibi", "\"Neden akış oluşuyor?\"", "Arz–talep eşleşmesi"] },
          sag: { ikon: "💸", baslik: "*Transferability*", maddeler: ["Taşıma maliyeti ürün değerinin altında olmalı", "\"Taşımaya değiyor mu?\"", "Maliyet–değer karşılaştırması"] },
          oyun: [
            { metin: "Kum ve çakıl uzak şehre satılmaz; taşıma ürünün değerinden pahalı.", cevap: "sag", neden: "Taşımaya değmiyor: *transferability* sağlanmıyor." },
            { metin: "Birinde portakal fazla, öbüründe portakal talebi var.", cevap: "sol", neden: "Eksik ve fazla eşleşiyor: *complementarity*." },
            { metin: "İki şehir de aynı ürünü aynı bollukta üretiyor; birbirlerinden almıyor.", cevap: "sol", neden: "Tamamlayıcılık yok: *complementarity* sağlanmıyor." },
            { metin: "Elmanın dünyanın öbür ucuna taşınması kârlı.", cevap: "sag", neden: "Maliyet değerin altında: *transferability* var." }
          ] },
        { tip: "tuzak", metin: "Aile tatil için uzak bir sahil kasabasına giderken, yolda daha yakın benzer bir sahil kasabası bulup orada kalıyor.", yanlis: "Bu *distance decay*'dir.", dogru: "Arada daha yakın bir alternatif çıktığı için bu ==*intervening opportunity*==dir. *Distance decay* ise genel olarak mesafeyle azalan etkileşimdir." }
      ]
    },
    {
      baslik: "*Gravity model*",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Etkileşim", alt: "iki yer arasında" }, "=",
            { t: "Nüfus₁ × Nüfus₂", alt: "pay: ikisi büyüdükçe artar" }, "÷",
            { t: "Mesafe²", alt: "payda: uzaklaştıkça azalır" }
          ], aciklama: "Tıpkı yer çekimi gibi: kütle çekimi artırır, mesafe azaltır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪐", terim: "Gravity model", tr: "çekim modeli", tanim: "İki yer arasındaki etkileşimi tahmin eder: nüfuslar büyüdükçe artar, mesafe arttıkça azalır.", ornek: "İki büyük şehir arasındaki trafik, iki küçük kasaba arasındakinden kat kat fazladır." }
          ] },
        { tip: "ornek", baslik: "Etkileşim nasıl değişir?", durum: "İki şehrin nüfusu 2 ve 3 milyon, aralarındaki mesafe 10 birim olsun. Model: nüfus₁ × nüfus₂ ÷ mesafe².",
          adimlar: ["Başlangıç: (2 × 3) ÷ 10² = 6 ÷ 100 = 0,06.", "Mesafe 20 birime çıkarsa: 6 ÷ 400 = 0,015. Mesafe 2 katına çıktı, etkileşim ==dörtte bire== düştü.", "Bir şehrin nüfusu 2'den 4'e çıkarsa (mesafe 10): (4 × 3) ÷ 100 = 0,12. Nüfus 2 katına çıktı, etkileşim ==2 katına== çıktı."],
          sonuc: "Nüfus çarpan olarak etkileşimi artırır; mesafe ise karesiyle etkileşimi düşürür." },
        { tip: "tuzak", metin: "Modelde mesafenin gücünü unutmak.", yanlis: "Mesafe iki katına çıkarsa etkileşim yarıya düşer.", dogru: "Mesafe payda olduğu için ==karesiyle== etkiler: iki katına çıkarsa etkileşim dörtte bire düşer." }
      ]
    },
    {
      baslik: "*Law of retail gravitation* ve *breaking point*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛍️", terim: "Law of retail gravitation", tr: "perakende çekim yasası", tanim: "Çekim modelinin alışveriş versiyonu: büyük şehir, müşteriyi daha uzaktan çeker.", ornek: "Büyük şehrin alışveriş merkezi, küçük kasabadan müşteri çeker." },
            { ikon: "⚖️", terim: "Breaking point", tr: "kırılma noktası", tanim: "İki şehir arasında çekimin eşitlendiği nokta. Bir yanındakiler A'ya, öbür yanındakiler B'ye gider. ==Her zaman küçük şehre daha yakındır.==", ornek: "A şehri B'den 4 kat kalabalıksa, 100 km'lik yolun yaklaşık 67 km'si A'nın çekim alanında kalır." }
          ] },
        { tip: "grafik", baslik: "Çekimler nerede eşitlenir?", xlabel: "100 km'lik yol (1 birim = 10 km)", ylabel: "Çekim (göreli)", xmax: 10, ymax: 10,
          xticks: [{ v: 0.8, label: "A (büyük)" }, { v: 9.2, label: "B (küçük)" }],
          ogeler: [
            { id: "ca", tip: "egri", renk: 0, etiket: "A'nın çekimi", noktalar: [[3.2, 9.77], [4, 6.25], [5, 4], [6, 2.78], [6.67, 2.25], [8, 1.56], [9.5, 1.1]] },
            { id: "cb", tip: "egri", renk: 1, etiket: "B'nin çekimi", noktalar: [[1, 0.31], [3, 0.51], [4, 0.69], [5, 1], [6, 1.56], [6.67, 2.25], [7.5, 4], [8, 6.25], [8.4, 9.77]], gizli: true },
            { id: "bp", tip: "nokta", x: 6.67, y: 2.25, etiket: "breaking point (A'dan ~67 km)", kilavuz: true, gizli: true },
            { id: "orta", tip: "cizgi", renk: 3, kesik: true, from: [5, 0], to: [5, 9], gizli: true },
            { id: "ortat", tip: "yazi", x: 5, y: 9.4, metin: "tam orta (50 km)", gizli: true }
          ],
          durumlar: [
            { metin: "A büyük şehir (4 birim). Çekimi kendi yakınında güçlü, uzaklaştıkça zayıflar." },
            { metin: "B küçük kasaba (1 birim). Çekimi A'dan uzaklaştıkça, yani B'ye yaklaştıkça artar.", goster: ["cb"] },
            { metin: "İki çekim ==yaklaşık 6,7 birimde== (67 km) eşitlenir: ==*breaking point*==.", goster: ["bp"] },
            { metin: "Nokta yolun ortası (50 km) değildir; ==küçük şehre doğru kayar==. Büyük şehir müşteriyi daha uzaktan çeker.", goster: ["orta", "ortat"] }
          ] },
        { tip: "ornek", baslik: "Breaking point nerede?", durum: "A şehri B'den 4 kat kalabalık. İki şehir arası 100 km. Ek bilgi (Reilly formülü): B'ye uzaklık = mesafe ÷ (1 + √(nüfus A ÷ nüfus B)).",
          adimlar: ["Nüfus oranı 4; karekökü 2.", "B'ye uzaklık: 100 ÷ (1 + 2) = 100 ÷ 3 ≈ 33 km.", "A'ya uzaklık: 100 − 33 ≈ 67 km."],
          sonuc: "*Breaking point* B'ye ==yaklaşık 33 km==, A'ya yaklaşık 67 km uzaklıktadır; yani küçük şehre daha yakındır." },
        { tip: "tuzak", metin: "İki şehrin nüfusu çok farklıysa (2 milyon ile 40 bin) *breaking point* nerede olur?", yanlis: "İki yerleşimin tam ortasında ya da büyük şehre daha yakın.", dogru: "Büyük şehir müşteriyi daha uzaktan çektiği için *breaking point* ==her zaman küçük yerleşime daha yakın== olur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Tobler's First Law*: her şey ilişkilidir ama yakın olanlar daha çok.",
            "*Absolute distance* ölçülür (450 km); *relative distance* zaman ve parayla ölçülür (1 saat / 6 saat).",
            "*Friction of distance* mesafenin zaman ve para maliyetidir; sonucu *distance decay* yani mesafeyle azalan etkileşimdir.",
            "*Time-space convergence*: teknoloji yerleri yaklaştırır (gemi ~6 hafta, uçak 8 saat, görüntülü arama 0 sn).",
            "*Accessibility* ulaşım kolaylığı; *connectivity* bağlantı sayısıdır.",
            "Akış için *complementarity*, *transferability* ve *intervening opportunity*'nin yokluğu gerekir.",
            "*Gravity model*: nüfuslar büyüdükçe etkileşim artar, mesafe arttıkça azalır.",
            "*Breaking point* iki şehir arasında çekimin eşitlendiği noktadır ve küçük şehre daha yakındır."
          ] }
      ]
    }
  ]
};
