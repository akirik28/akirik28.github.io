/* Kitpath not defteri · hg202 · Nüfus Dağılımının Sonuçları (Consequences of Population Distribution)
   Kaynak: AP HuG CED Topic 2.2 (PSO-2.D.1, 2.D.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg202",
  amac: "Bu konu nüfusun dağılımının ve yoğunluğunun toplumu ve çevreyi nasıl etkilediğini anlatıyor. Sağlık gibi hizmetlerin sunumunu, siyasi ve ekonomik sonuçları ve taşıma kapasitesi (*carrying capacity*) kavramını öğreneceksin.",
  bolumler: [
    {
      baslik: "Dağılım toplumu şekillendirir",
      kisa: "Nüfusun nerede ve ne kadar yoğun yaşadığı siyaseti, ekonomiyi ve toplumu etkiler.",
      bloklar: [
        { tip: "harita", merkez: "Dağılım ve yoğunluk", dallar: [
            { baslik: "Siyasi", alt: "Temsil, seçim bölgeleri, yönetim maliyeti" },
            { baslik: "Ekonomik", alt: "Pazar, işgücü, altyapı maliyeti" },
            { baslik: "Sosyal", alt: "Sağlık, eğitim, konut ve ulaşıma erişim" },
            { baslik: "Çevresel", alt: "Kaynak kullanımı, kirlilik, *carrying capacity*" }
          ] },
        { tip: "not", metin: "Bu konunun ana fikri şudur: insanlar nerede ve ne kadar yoğun yaşıyorsa, devlet o bölgeye ==hizmet götürmenin maliyeti== ve ==doğaya binen baskı== da o kadar değişir. Önce hizmetlere, sonra çevreye bakacağız." }
      ]
    },
    {
      baslik: "Hizmet sunumu: kişi başı maliyet",
      kisa: "Aynı hizmet kalabalık yerde kişi başı ucuz, seyrek yerde pahalı ve uzaktır.",
      bloklar: [
        { tip: "grafik", baslik: "Sağlık merkezinin kişi başı maliyeti", xlabel: "Hizmet alan nüfus (kişi)", ylabel: "Kişi başı yıllık maliyet (TL)", xmax: 11, ymax: 7,
          xticks: [{ v: 2, label: "200" }, { v: 4, label: "400" }, { v: 6, label: "600" }, { v: 8, label: "800" }, { v: 10, label: "1.000" }],
          yticks: [{ v: 1, label: "1.000" }, { v: 3, label: "3.000" }, { v: 6, label: "6.000" }],
          ogeler: [
            { id: "mal", tip: "egri", renk: 0, etiket: "Maliyet", noktalar: [[1, 6], [1.5, 4], [2, 3], [3, 2], [4, 1.5], [6, 1], [8, 0.75], [10, 0.6]] },
            { id: "koy", tip: "nokta", x: 2, y: 3, etiket: "Dağ köyü: 200 kişi", kilavuz: true, gizli: true },
            { id: "ilce", tip: "nokta", x: 6, y: 1, etiket: "İlçe merkezi: 600 kişi", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Bir sağlık merkezinin yıllık sabit gideri 600.000 TL. ==Kişi başı maliyet = 600.000 ÷ hizmet alan kişi sayısı==; nüfus azaldıkça eğri yükselir." },
            { metin: "Dağ köyünde 200 kişi var: 600.000 ÷ 200 = ==3.000 TL/kişi==.", goster: ["koy"] },
            { metin: "İlçe merkezinde 600 kişi var: 600.000 ÷ 600 = ==1.000 TL/kişi==. Aynı hizmet üç kat ucuz.", goster: ["ilce"] }
          ] },
        { tip: "ikili", sol: { ikon: "🏙️", baslik: "Yüksek yoğunluk", maddeler: ["Hizmet kişi başı ucuz; yakın ve çeşitli", "Ama trafik, konut kirası, kirlilik ve kalabalık baskısı"] },
          sag: { ikon: "🌾", baslik: "Düşük yoğunluk", maddeler: ["Kişi başı maliyet yüksek; hizmet uzak ya da hiç yok", "Ama kalabalık yoktur: sakin, ucuz arazi"] },
          oyun: [
            { metin: "Dağ köyündeki hasta en yakın hastaneye iki saatte gidiyor.", cevap: "sag", neden: "Seyrek yerleşimde hizmet uzaktır." },
            { metin: "Aynı hastane metroyla on dakikada ulaşılıyor ve yüz binlerce kişiye hizmet veriyor.", cevap: "sol", neden: "Yoğun yerleşimde hizmet yakın ve ucuzdur." },
            { metin: "Kiralar yükseliyor ve trafik artıyor.", cevap: "sol", neden: "Kalabalığın bedeli: yoğun yerleşim." },
            { metin: "Okul açmak için yeterli öğrenci bulunamıyor, okul kapanıyor.", cevap: "sag", neden: "Az nüfus, hizmetin maliyetini karşılamaz." }
          ] }
      ]
    },
    {
      baslik: "Siyasi, ekonomik ve sosyal etkiler",
      kisa: "Yoğunluk; temsili, pazarı ve hizmetlere erişimi birlikte belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Yoğun ve seyrek bölgelerin sonuçları", head: ["Alan", "Yoğun bölge", "Seyrek bölge"], rows: [
            ["Siyasi", "Çok seçmen; mecliste daha fazla temsilci ister; yönetim işleri karmaşık", "Az seçmen; sesi duyulması zor; yönetim maliyeti kişi başına yüksek"],
            ["Ekonomik", "Büyük pazar ve geniş işgücü; ulaşım ve enerji kişi başı ucuz", "Küçük pazar; altyapı (yol, elektrik, su) kişi başı pahalı"],
            ["Sosyal", "Okul, hastane, kültür kolay ulaşılır; konut pahalı, trafik yoğun", "Hizmetlere erişim zor; nüfus gençlerin göçüyle daha da azalabilir"]
          ] },
        { tip: "not", metin: "Devletler bu farkı ==politikalarla== azaltmaya çalışır: seyrek bölgelere gezici sağlık ekipleri ya da uzaktan sağlık hizmeti götürür; kalabalık kentlerde toplu taşıma ve konut projeleri yapar. Kararı veren, çoğu zaman nüfusun nerede toplandığıdır." }
      ]
    },
    {
      baslik: "Çevre ve doğal kaynaklar",
      kisa: "Taşıma kapasitesi, bir bölgenin kaynaklarıyla sürdürebileceği en yüksek nüfustur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Carrying capacity", tr: "taşıma kapasitesi", tanim: "Bir alanın, kaynaklarını ve çevresini bozmadan uzun süre geçindirebileceği en yüksek nüfus.", ornek: "Bir adanın tatlı suyu ancak 400 kişiye yetiyorsa kapasite 400'dür." },
            { ikon: "💧", terim: "Natural resources", tr: "doğal kaynaklar", tanim: "İnsanın kullandığı su, toprak, orman, enerji ve mineraller.", ornek: "Yeraltı suyu, verimli tarım toprağı." },
            { ikon: "📈", terim: "Overshoot", tr: "kapasite aşımı", tanim: "Nüfusun ya da kaynak kullanımının taşıma kapasitesini aşması; kaynaklar tükenir ve çevre bozulur.", ornek: "Kuyuların yenilenenden hızlı boşaltılması." }
          ] },
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "Kapasiteyi yükselten", maddeler: ["Yeni teknoloji (sulama, arıtma, verimli tohum)", "Ticaret ve ithalat (dışarıdan gıda ve su)"] },
          sag: { ikon: "⬇️", baslik: "Kapasiteyi düşüren", maddeler: ["Kişi başı tüketimin artması", "Kuraklık, toprak bozulması, kirlilik"] },
          oyun: [
            { metin: "Bir ada deniz suyunu arıtan bir tesis kuruyor.", cevap: "sol", neden: "Kaynak artar: kapasite yükselir." },
            { metin: "Kişi başı su kullanımı artıyor.", cevap: "sag", neden: "Aynı kaynak daha az kişiye yeter." },
            { metin: "Şiddetli bir kuraklık yıllarca sürüyor.", cevap: "sag", neden: "Kaynak azalır: kapasite düşer." },
            { metin: "Bölge, dışarıdan gıda satın almaya başlıyor.", cevap: "sol", neden: "Ticaret kaynak açığını kapatır." }
          ] }
      ]
    },
    {
      baslik: "Taşıma kapasitesi grafiği",
      kisa: "Nüfus kapasiteye yaklaşır; teknoloji kapasiteyi yükseltir, aşım nüfusu çökertir.",
      bloklar: [
        { tip: "grafik", baslik: "Nüfus ve taşıma kapasitesi (K)", xlabel: "Zaman", ylabel: "Nüfus ve kapasite", xmax: 11, ymax: 10,
          ogeler: [
            { id: "k1", tip: "cizgi", renk: 1, from: [0, 6], to: [10, 6], etiket: "K₁" },
            { id: "pop", tip: "egri", renk: 0, etiket: "Nüfus", gizli: true, noktalar: [[0, 0.5], [1, 0.9], [2, 1.7], [3, 2.9], [4, 4.2], [5, 5.1], [6, 5.6], [7, 5.85], [8, 5.95], [9, 6.0], [10, 6.0]] },
            { id: "k2", tip: "cizgi", renk: 2, from: [0, 8], to: [10, 8], etiket: "K₂", gizli: true },
            { id: "yuk", tip: "ok", from: [10.5, 6], to: [10.5, 8], gizli: true }
          ],
          durumlar: [
            { metin: "==K₁== bu bölgenin kaynaklarıyla sürdürebileceği en yüksek nüfustur." },
            { metin: "Nüfus büyür; kaynaklar sınırlı olduğu için büyüme yavaşlar ve ==K₁ civarında dengelenir==.", goster: ["pop"] },
            { metin: "Yeni teknoloji (sulama, yüksek verimli tohum, arıtma) kapasiteyi ==K₁'den K₂'ye yükseltir==; nüfus da yeni sınıra doğru büyür.", goster: ["k2", "yuk"], set: { pop: { noktalar: [[0, 0.5], [1, 0.9], [2, 1.7], [3, 2.9], [4, 4.2], [5, 5.4], [6, 6.3], [7, 7.1], [8, 7.6], [9, 7.9], [10, 8.0]] } } },
            { metin: "Nüfus K₂'yi aşarsa (*overshoot*) kaynaklar tükenir, çevre bozulur; nüfus ==geri çöker== (kıtlık, göç, ölüm).", set: { pop: { noktalar: [[0, 0.5], [1, 0.9], [2, 1.7], [3, 2.9], [4, 4.2], [5, 5.4], [6, 7.0], [7, 8.6], [8, 9.2], [9, 8.0], [10, 6.2]] } } }
          ] }
      ]
    },
    {
      baslik: "Kapasite hesabı ve yaygın yanılgı",
      kisa: "Kapasite kaynağın tüketime oranıdır; yoğunluk tek başına kapasiteyi aşmak demek değildir.",
      bloklar: [
        { tip: "ornek", baslik: "Tatlı su adası", durum: "Bir adada yıllık 12.000 ton kullanılabilir tatlı su var; bir kişi yılda 30 ton kullanıyor. Ada nüfusu 500. Kapasiteyi bul; arıtma tesisi +6.000 ton su ekleyince ve kişi başı kullanım 40 tona çıkınca ne olur?",
          adimlar: ["Kapasite = kaynak ÷ kişi başı kullanım = 12.000 ÷ 30 = 400 kişi.", "Nüfus 500 > 400: ada kapasiteyi ==100 kişi aşmış== durumda.", "Arıtmayla su 18.000 ton olur: 18.000 ÷ 30 = 600 kişi. Nüfus 500 artık kapasitenin altında.", "Kişi başı kullanım 40 tona çıkarsa: 18.000 ÷ 40 = 450 kişi. Nüfus (500) yine kapasiteyi aşar."],
          sonuc: "Kapasite ==kaynağa== ve ==kişi başı tüketime== bağlıdır; teknoloji kapasiteyi yükseltir, tüketim artışı düşürür." },
        { tip: "tuzak", metin: "Yoğunluk ile taşıma kapasitesini karıştırmak.", yanlis: "Nüfus yoğunluğu çok yüksekse bölge taşıma kapasitesini kesinlikle aşmıştır.", dogru: "Kapasite yoğunluğa değil ==kaynaklara, teknolojiye, ticarete ve tüketime== bağlıdır. Singapur yoğunluğu çok yüksek olmasına rağmen ithalat ve arıtma teknolojisiyle geçinir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Nüfus dağılımı ve yoğunluğu siyasi, ekonomik ve sosyal süreçleri etkiler; en bilinen örnek hizmet sunumudur (sağlık gibi).",
            "Yoğun yerde hizmet kişi başı ucuz ve yakındır (örnek: 600.000 ÷ 600 = 1.000 TL); seyrek yerde pahalı ve uzaktır (600.000 ÷ 200 = 3.000 TL).",
            "Yoğun bölgelerin sorunu kalabalık, trafik ve konut maliyetidir; seyrek bölgelerin sorunu altyapı ve hizmet eksikliğidir.",
            "Nüfus dağılımı ve yoğunluğu çevreyi ve doğal kaynakları da etkiler.",
            "*Carrying capacity* (taşıma kapasitesi): kaynakları bozmadan sürdürülebilecek en yüksek nüfus.",
            "Kapasite = kaynak ÷ kişi başı tüketim; teknoloji ve ticaret yükseltir, tüketim artışı ve kaynak bozulması düşürür.",
            "Kapasiteyi aşan nüfus (*overshoot*) kaynakları tüketir ve çöküşe yol açabilir.",
            "Yüksek yoğunluk kapasite aşıldı demek değildir (Singapur); ölçüt kaynak, teknoloji ve tüketimdir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir dağ köyünde 300 kişi yaşıyor; köye sağlık hizmeti götürmenin yıllık maliyeti 900.000 TL. Aynı hizmetin 900 kişilik bir ilçe merkezindeki yıllık maliyeti de 900.000 TL. Hangisi doğrudur?",
      opts: ["Kişi başı maliyet iki yerde de aynıdır, çünkü toplam gider aynıdır", "Köyde kişi başı 1.000 TL, ilçe merkezinde 3.000 TL'dir", "Köyde kişi başı 3.000 TL, ilçe merkezinde 1.000 TL'dir; hizmet seyrek yerde daha pahalıdır", "Köyde kişi başı 300 TL, ilçe merkezinde 900 TL'dir"],
      a: 2,
      why: "Kişi başı maliyet = toplam gider ÷ nüfus: köyde 900.000 ÷ 300 = 3.000, ilçede 900.000 ÷ 900 = 1.000. A şıkkı en çekici yanlış: toplam giderin aynı olması kişi başı maliyetin aynı olduğu anlamına gelmez; nüfus paydadır." },
    { q: "Bir adada tatlı su kaynağı yılda 8.000 ton, kişi başı yıllık kullanım 20 tondur. Ada nüfusu 500'dür. Hangisi doğrudur?",
      opts: ["Taşıma kapasitesi 400 kişidir; nüfus kapasiteyi 100 kişi aşmıştır", "Taşıma kapasitesi 160.000 kişidir; nüfus kapasitenin çok altındadır", "Taşıma kapasitesi 500 kişidir, çünkü ada şu an 500 kişiyi barındırıyor", "Taşıma kapasitesi 400 kişidir; nüfus kapasitenin altındadır"],
      a: 0,
      why: "Kapasite = 8.000 ÷ 20 = 400 kişi; nüfus 500 olduğundan 100 kişi fazladır. D şıkkı en çekici yanlış: doğru kapasiteyi bulur ama eşitsizliği ters yorumlar (500 > 400). B şıkkı bölmek yerine çarpar." },
    { q: "Tablodan hangi sonuç çıkarılabilir (hastanelerin sabit giderlerinin benzer olduğu varsayılır)?",
      fig: { type: "table", caption: "İki bölgede sağlık hizmeti", head: ["Bölge", "Nüfus (bin)", "Hastane sayısı", "En yakın hastaneye ort. mesafe (km)"], rows: [["A", 800, 4, 3], ["B", 40, 1, 55]] },
      opts: ["B'de nüfus az olduğu için hastane başına maliyet A'dan çok düşüktür", "A'da hastane başına düşen nüfus B'dekinden azdır", "İki bölgede de hastane başına düşen nüfus aynıdır", "B'deki hastane A'dakinden daha az kişiye hizmet verdiği için kişi başı maliyeti yüksektir ve erişim zordur"],
      a: 3,
      why: "A'da hastane başına 800 ÷ 4 = 200 bin kişi, B'de 40 bin kişi düşer. Sabit gider benzerse B'de kişi başı maliyet daha yüksektir ve mesafe (55 km) erişimi zorlaştırır. A şıkkı en çekici yanlış: toplam maliyet değil, kişi başı maliyet B'de yüksektir." },
    { q: "Bir öğrenci, \"Singapur'un nüfus yoğunluğu çok yüksek olduğu için taşıma kapasitesini kesinlikle aşmıştır\" diyor. Bu görüşe en iyi itiraz hangisidir?",
      opts: ["Yoğunluk kapasiteyi doğrudan ölçer ama Singapur'un alanı küçük olduğu için bu kural ona uygulanmaz", "Taşıma kapasitesi yalnızca yoğunluğa bağlı değildir; ithalat, teknoloji ve tüketim düzeyi kapasiteyi değiştirir", "Taşıma kapasitesi yalnızca ülkenin kendi ürettiği gıdayla belirlenir", "Yüksek yoğunluk her zaman kapasitenin altında kalındığını gösterir"],
      a: 1,
      why: "Kapasite kaynak, teknoloji, ticaret ve tüketime bağlıdır; Singapur ithalat ve arıtmayla ihtiyacını karşılar. D şıkkı en çekici yanlış: yüksek yoğunluk kapasite hakkında tek başına hiçbir şey söylemez; ne aştığını ne altında kaldığını gösterir." },
    { q: "Bir bölgede çiftçiler yeraltı suyunu yenilenme hızından çok daha fazla çekiyor, kuyular kuruyor ve nüfus artmaya devam ediyor. Bu durum en iyi nasıl açıklanır?",
      opts: ["Teknoloji sayesinde taşıma kapasitesi yükseliyor", "Aritmetik yoğunluk düşüyor", "Kaynaklar yenilenme hızının üstünde kullanılıyor; nüfus ve tüketim taşıma kapasitesini aşıyor", "Nüfus dağılımı daha dengeli hale geliyor"],
      a: 2,
      why: "Kaynağın yenilenenden hızlı tüketilmesi *overshoot*'tur; kapasite aşılırsa bozulma ve çöküş olur. A şıkkı en çekici yanlış: teknoloji kapasiteyi yükseltebilir ama burada kaynak tükeniyor; derin kuyu açmak geçici çözümdür, kaynağı yenilemez." }
  ]
};
