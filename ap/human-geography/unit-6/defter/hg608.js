/* Kitpath not defteri · hg608 · Kentsel Sürdürülebilirlik
   Kaynak: AP HuG CED Topic 6.8 (IMP-6.C.1, IMP-6.D.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg608",
  amac: "Bu konu kentleri daha sürdürülebilir kılmak için kullanılan tasarım ve imar araçlarını anlatıyor: karma kullanım, yürünebilirlik, toplu taşıma odaklı gelişme, akıllı büyüme, yeşil kuşak. Övgülerini ve eleştirilerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Sürdürülebilir kent tasarımının araçları",
      kisa: "İmar ve tasarım kararları kentin yayılmasını ve araç bağımlılığını azaltabilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📜", terim: "Zoning", tr: "imar (bölgeleme)", tanim: "Belediyenin her arsada ne yapılabileceğini (konut, ticaret, sanayi, bina yüksekliği) belirleyen kuralları.", ornek: "Bir sokakta yalnızca konuta izin verilmesi." },
            { ikon: "🥪", terim: "Mixed land use", tr: "karma arazi kullanımı", tanim: "Konut, dükkân, ofis ve parkın aynı mahallede yan yana olması.", ornek: "Apartmanın zemin katında market ve kafe." },
            { ikon: "🚶", terim: "Walkability", tr: "yürünebilirlik", tanim: "Günlük işlerin yürüyerek yapılabilmesi: güvenli kaldırım, yakın hizmet, ilgi çekici sokak.", ornek: "Okul, market ve durağın 5–10 dakikalık yürüyüş mesafesinde olması." },
            { ikon: "🚉", terim: "Transportation-oriented development", tr: "ulaşım odaklı gelişme", tanim: "Metro ya da hızlı otobüs durağının çevresinde yoğun, karma kullanımlı, yürünebilir yapılaşma.", ornek: "Metro çıkışında konut, ofis ve çarşı." }
          ] },
        { tip: "ornek", baslik: "Yürünebilir mahalle hesabı", durum: "Yürüme hızı yaklaşık 80 m/dk. Elif'in evine okul 400 m, market 240 m, otobüs durağı 320 m uzakta. Hepsine kaç dakikada ulaşır?",
          adimlar: ["Okul: 400 ÷ 80 = 5 dk.", "Market: 240 ÷ 80 = 3 dk.", "Durak: 320 ÷ 80 = 4 dk."],
          sonuc: "Hepsi ==5 dakika== içinde yürünebilir: karma kullanım sayesinde Elif'in günlük işleri için araca ihtiyacı yok." }
      ]
    },
    {
      baslik: "Akıllı büyüme ve Yeni Kentçilik",
      kisa: "Akıllı büyüme, yeni gelişmeyi sıkı, yürünebilir ve toplu taşımaya yakın kurar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Smart growth", tr: "akıllı büyüme", tanim: "Kent büyümesini yayılmayı azaltacak biçimde yönlendiren politikalar: sıkı yerleşim, toplu taşıma, açık alanı koruma, çeşitli konut.", ornek: "Yeni siteleri eski mahallelerin boş arsalarına ve metro hattına yakın kurmak." },
            { ikon: "🏘️", terim: "New Urbanism", tr: "Yeni Kentçilik", tanim: "Eski kent mahallelerini örnek alan tasarım akımı: yürünebilir, karma kullanımlı, çeşitli konutlu, kamusal alanı güçlü mahalleler.", ornek: "Merkezinde meydan ve çarşı olan, evlerin yakın dizildiği mahalle." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🚶", baslik: "Yürünebilir sokaklar", metin: "Kısa bloklar, geniş kaldırımlar, güvenli geçitler." },
            { ikon: "🏠", baslik: "Çeşitli konut", metin: "Küçük daire, bitişik ev ve apartman bir arada; farklı gelirlere uygun." },
            { ikon: "🌳", baslik: "Ortak mekân", metin: "Meydan, park ve mahalle çarşısı topluluğu bir araya getirir." },
            { ikon: "🚌", baslik: "Toplu taşımaya yakınlık", metin: "Yoğun gelişme duraklar çevresinde toplanır." }
          ] }
      ]
    },
    {
      baslik: "Büyümeyi sınırlamak: yeşil kuşak ve yavaş büyüme",
      kisa: "Yeşil kuşak ve yavaş büyüme politikaları kentin dışa yayılmasını sınırlar.",
      bloklar: [
        { tip: "tablo", baslik: "Büyümeyi sınırlayan araçlar", head: ["Araç", "Nasıl çalışır?", "Örnek"], rows: [
            ["*Greenbelt* (yeşil kuşak)", "Kentin çevresinde yapılaşmaya kapalı korunan açık alan halkası", "Londra'nın çevresindeki Yeşil Kuşak"],
            ["*Slow-growth city* (yavaş büyüyen kent)", "Yıllık yeni konut ya da nüfus artışına üst sınır koyan politika", "Yıllık yeni konut izni kotası koyan belediyeler"],
            ["Toplu taşıma odaklı imar", "Yoğun yapılaşmaya yalnızca durak çevresinde izin verir", "Metro istasyonu çevresinde yüksek katlı karma bölge"]
          ] },
        { tip: "not", metin: "Bu araçların ortak amacı yeni gelişmeyi mevcut kentin içine ve toplu taşıma çevresine yönlendirmektir. Böylece tarım arazisi, orman ve doğal alanlar korunur." }
      ]
    },
    {
      baslik: "Övgüler: ne kazanılır?",
      kisa: "Daha az yayılma, daha iyi ulaşım, çeşitli konut ve daha yaşanabilir kent.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🌾", baslik: "Yayılma azalır", metin: "Tarım arazisi ve doğal alan korunur." },
            { ikon: "🚇", baslik: "Yürünebilirlik ve ulaşım iyileşir", metin: "Araç yolculuğu azalır, toplu taşıma kullanımı artar." },
            { ikon: "🏘️", baslik: "Konut seçenekleri çeşitlenir", metin: "Farklı gelirler ve yaşlar için farklı tipte konut." },
            { ikon: "🙂", baslik: "Yaşanabilirlik artar", metin: "Yakın hizmetler, park ve canlı sokaklar." },
            { ikon: "♻️", baslik: "Sürdürülebilir seçenekler yaygınlaşır", metin: "Daha az enerji ve emisyon." }
          ] },
        { tip: "grafik", baslik: "Politika sıkılaştıkça: kazanç ve bedel (şematik)", xlabel: "Akıllı büyüme politikasının sıkılığı", ylabel: "Gösterge (şematik)", xmax: 10, ymax: 10,
          ogeler: [
            { id: "arac", tip: "egri", renk: 0, etiket: "Araç yolculuğu", noktalar: [[0, 9], [2, 7.8], [4, 6], [6, 4.2], [8, 3], [10, 2.4]] },
            { id: "kon", tip: "egri", renk: 2, etiket: "Konut maliyeti", noktalar: [[0, 2.5], [2, 2.9], [4, 3.6], [6, 5], [8, 6.8], [10, 8.6]], gizli: true },
            { id: "dn", tip: "nokta", x: 5.5, y: 4.65, etiket: "Denge arayışı", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Politika sıkılaştıkça (daha çok yoğunlaşma, yürünebilirlik, toplu taşıma) ==araçla yapılan yolculuk azalır==." },
            { metin: "Ama arazi arzı kısıtlanıp talep sürerse ==konut maliyeti yükselir==: eleştirilerin ilki.", goster: ["kon"] },
            { metin: "Planlayıcılar iki eğri arasında bir ==denge== arar: yeterli konut üretmeden sürdürülebilirliği artırmak.", goster: ["dn"] }
          ] }
      ]
    },
    {
      baslik: "Eleştiriler: kimin için sürdürülebilir?",
      kisa: "Eleştiri: pahalı konut, fiilî ayrışma ve yerel karakter kaybı.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "👍", baslik: "Övgü", maddeler: ["Yayılma azalır, yürünebilirlik artar", "Konut çeşitlenir, kent yaşanabilir olur"] },
          sag: { ikon: "👎", baslik: "Eleştiri", maddeler: ["Konut maliyetleri artar", "*De facto* ayrışma ve yerel karakter kaybı olabilir"] },
          oyun: [
            { metin: "Yeşil kuşak yüzünden konut arzı kısıtlanır, kiralar yükselir.", cevap: "sag", neden: "Konut maliyeti artışı: eleştiri." },
            { metin: "Metro çevresindeki karma mahalle araç yolculuğunu azaltır.", cevap: "sol", neden: "Ulaşım iyileşmesi: övgü." },
            { metin: "Yeni pahalı mahalleye yalnızca yüksek gelirliler taşınabilir; kent gelire göre ayrışır.", cevap: "sag", neden: "Yasa dışı olmasa da pratikte ayrışma (*de facto segregation*): eleştiri." },
            { metin: "Aynı mahallede küçük daire ve bitişik evlerin bulunması farklı gelirleri bir araya getirir.", cevap: "sol", neden: "Konut çeşitliliği: övgü." }
          ] },
        { tip: "tuzak", metin: "*De facto* ayrışma ile hukuki ayrışmayı karıştırma.", yanlis: "Akıllı büyüme politikaları yasayla belirli grupları dışlar.", dogru: "*De facto segregation* ==yasa olmadan fiilen oluşan== ayrışmadır: yüksek fiyatlar bazı gelirlerin mahalleye girmesini engeller. Bir de yoğunlaşma ve tasarım kuralları eski mahallenin tarihî ya da yerel karakterini değiştirebilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Araçlar: imar (*zoning*), karma arazi kullanımı, yürünebilirlik, ulaşım odaklı gelişme.",
            "*Smart growth* ve *New Urbanism*: sıkı, yürünebilir, karma, çeşitli konutlu mahalleler.",
            "Büyümeyi sınırlamak: yeşil kuşak (*greenbelt*) ve yavaş büyüme (*slow-growth*).",
            "Yürünebilirlik hesabı: mesafe ÷ hız (400 m ÷ 80 m/dk = 5 dk).",
            "Övgüler: yayılma azalır, yürünebilirlik ve ulaşım iyileşir, konut çeşitlenir, yaşanabilirlik ve sürdürülebilir seçenekler artar.",
            "Eleştiriler: konut maliyeti artar, *de facto* ayrışma olabilir, yerel karakter kaybolabilir.",
            "Sınavda hem övgüyü hem eleştiriyi söylemek gerekir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir belediye, yeni bir mahallenin zemin katlarında market ve kafe, üst katlarında konut ve ofis yapılmasına izin veriyor. Bu uygulama hangi kavrama en iyi örnektir?",
      opts: ["Kentsel yayılma (*sprawl*)", "Karma arazi kullanımı", "Yeşil kuşak", "Bölgesel ayrışma"],
      a: 1, why: "Konut, dükkân ve ofisin aynı mahallede olması karma arazi kullanımıdır. A çekici yanlıştır: yayılma düşük yoğunluklu ve işlevleri ayıran gelişmedir, tam tersi." },
    { q: "Bir kent, çevresine yapılaşmaya kapalı bir koruma halkası çizmiştir. Bu politika hangi araca örnektir ve en olası amacı nedir?",
      opts: ["Yeşil kuşak; kentsel yayılmayı ve tarım arazisi kaybını sınırlamak", "Karma kullanım; konut maliyetini düşürmek", "Ulaşım odaklı gelişme; otoyolu genişletmek", "Yavaş büyüme; nüfusu artırmak"],
      a: 0, why: "Kentin çevresinde korunan açık alan halkası yeşil kuşaktır ve yayılmayı sınırlar. D yanlıştır: yavaş büyüme politikaları büyümeyi sınırlar, nüfusu artırmaz. C de yanlıştır: ulaşım odaklı gelişme toplu taşıma çevresinde yoğunlaşmayı hedefler." },
    { q: "Tablo, bir kentin akıllı büyüme politikaları uyguladıktan sonraki değişimini gösteriyor. Hangi çıkarım doğrudur?",
      fig: { type: "table", head: ["Gösterge", "Önce", "Sonra"], rows: [["Kişi başı günlük araç yolculuğu (km)", "30", "22"], ["Ortalama kira (bin TL/ay)", "10", "14"], ["Yürünebilir mahalle payı (%)", "20", "35"]], caption: "Akıllı büyüme sonrası değişim (kurgusal)" },
      opts: ["Politika yalnızca olumsuz sonuç doğurmuştur", "Yolculuk azalmış ve yürünebilirlik artmıştır; kira artışı politikaya yöneltilen bir eleştiriye işaret eder", "Kira artışı politikanın tamamen başarısız olduğunu kanıtlar", "Araç yolculuğu azaldığı için kentin yayıldığı söylenebilir"],
      a: 1, why: "Araç yolculuğu 30'dan 22 km'ye düşmüş, yürünebilir mahalle payı 20'den 35'e çıkmış: övgü. Kira 10'dan 14'e çıkmış: eleştiri. C aşırı bir sonuçtur; D de veriyle çelişir." },
    { q: "Aşağıdakilerden hangisi akıllı büyüme politikalarına yöneltilen eleştirilerden biri değildir?",
      opts: ["Konut maliyetlerinin artması", "Fiilî ayrışmanın (*de facto segregation*) oluşabilmesi", "Tarihî ya da yerel mekân karakterinin kaybolması", "Yayılmanın ve araç bağımlılığının artması"],
      a: 3, why: "Yayılma ve araç bağımlılığı bu politikalarla azaltılmak istenen şeydir. Diğer üçü ise tipik eleştirilerdir. Soruda 'değildir' ifadesine dikkat: konut maliyeti (A) en çok akla gelen eleştiri olduğu için çekici bir yanlış şıktır." },
    { q: "Bir belediye metro istasyonunun çevresinde yüksek katlı, karma kullanımlı ve yürünebilir bir mahalle kurmayı planlıyor. Bu plan hangi anlayışı yansıtır?",
      opts: ["*Slow-growth* politikası", "*Greenbelt*", "Ulaşım odaklı gelişme (*transportation-oriented development*)", "Kentsel yayılma"],
      a: 2, why: "Durak çevresinde yoğun, karma ve yürünebilir gelişme ulaşım odaklı gelişmedir. *Greenbelt* (B) kenti çevreleyen korunan halkadır; çekici ama farklı bir araçtır." }
  ]
};
