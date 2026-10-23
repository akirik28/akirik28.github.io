/* Kitpath not defteri · hg209 · Yaşlanan Nüfuslar
   Kaynak: AP HuG CED Unit 2, Topic 2.9 (SPS-2.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg209",
  amac: "Bu konu nüfusun neden yaşlandığını ve yaşlanmanın ekonomiye, topluma ve siyasete etkisini anlatıyor. Düşük doğum hızı, düşük ölüm hızı ve uzayan yaşam süresini, ayrıca bağımlılık oranını (*dependency ratio*) hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Yaşlanan nüfus nedir?",
      kisa: "Yaşlı payı ve ortanca yaş yükselen nüfus yaşlanıyor demektir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👵", terim: "Aging population", tr: "yaşlanan nüfus", tanim: "65 yaş ve üstünün payı büyüyen, çocuk payı küçülen nüfus. Nüfus sayısı büyürken de yaşlanabilir.", ornek: "Japonya ve İtalya'da yaşlıların payı yüksek." },
            { ikon: "🎂", terim: "Median age", tr: "ortanca yaş", tanim: "Nüfusu yaşa göre ikiye bölen yaş: yarısı bundan genç, yarısı yaşlıdır. Yükseldikçe nüfus yaşlanır.", ornek: "Ortanca yaşı 45 olan ülke, 20 olan ülkeden yaşlıdır." },
            { ikon: "⏳", terim: "Life expectancy", tr: "beklenen yaşam süresi", tanim: "Bir bebeğin ortalama kaç yıl yaşayacağının tahmini. Sağlık ve beslenme düzeldikçe uzar.", ornek: "Ortalama yaşam süresi 60'tan 80'e çıkarsa yaşlılar çoğalır." }
          ] },
        { tip: "ikili", sol: { ikon: "🧒", baslik: "Genç nüfus", maddeler: ["Piramidin tabanı geniş", "Ortanca yaş düşük; yük çocuklardan gelir"] },
          sag: { ikon: "🧓", baslik: "Yaşlanan nüfus", maddeler: ["Tabanı dar, tepesi geniş", "Ortanca yaş yüksek; yük yaşlılardan gelir"] } }
      ]
    },
    {
      baslik: "Nüfus neden yaşlanır?",
      kisa: "Doğurganlık düşünce taban daralır; uzayan yaşam süresi tepeyi genişletir.",
      bloklar: [
        { tip: "grafik", baslik: "Yaş piramidi nasıl yaşlanır? (şematik)", xlabel: "Nüfus payı (ortadan iki yana)", ylabel: "Yaş grubu", xmax: 10, ymax: 10,
          yticks: [{ v: 1, label: "0–14" }, { v: 3, label: "15–29" }, { v: 5, label: "30–44" }, { v: 7, label: "45–64" }, { v: 9, label: "65+" }],
          ogeler: [
            { id: "p", tip: "alan", renk: 0, noktalar: [[0.6, 0], [9.4, 0], [9.4, 2], [8.5, 2], [8.5, 4], [7.6, 4], [7.6, 6], [6.6, 6], [6.6, 8], [5.6, 8], [5.6, 10], [4.4, 10], [4.4, 8], [3.4, 8], [3.4, 6], [2.4, 6], [2.4, 4], [1.5, 4], [1.5, 2], [0.6, 2], [0.6, 0]] }
          ],
          durumlar: [
            { metin: "==Genç nüfus==: doğum hızı yüksek, taban geniş. Piramit tabandan tepeye daralır; çok çocuk, az yaşlı var." },
            { metin: "==Doğum hızı düşer== (TFR azalır): taban daralır. Daha az çocuk doğduğu için genç grupların payı küçülür.", set: { p: { noktalar: [[2.6, 0], [7.4, 0], [7.4, 2], [7.6, 2], [7.6, 4], [7.8, 4], [7.8, 6], [7.5, 6], [7.5, 8], [6.6, 8], [6.6, 10], [3.4, 10], [3.4, 8], [2.5, 8], [2.5, 6], [2.2, 6], [2.2, 4], [2.4, 4], [2.4, 2], [2.6, 2], [2.6, 0]] } } },
            { metin: "==Ölüm hızı düşer, yaşam süresi uzar==: insanlar daha uzun yaşadığı için üst gruplar şişer. Nüfus yaşlanıyor.", set: { p: { noktalar: [[3.6, 0], [6.4, 0], [6.4, 2], [6.9, 2], [6.9, 4], [7.5, 4], [7.5, 6], [8, 6], [8, 8], [7.7, 8], [7.7, 10], [2.3, 10], [2.3, 8], [2, 8], [2, 6], [2.5, 6], [2.5, 4], [3.1, 4], [3.1, 2], [3.6, 2], [3.6, 0]] } } },
            { metin: "Doğurganlık düşük kalmayı ve yaşam süresi uzamayı sürdürürse ==en geniş grup 65+== olur: tabanı çok dar, tepesi geniş bir piramit.", set: { p: { noktalar: [[4, 0], [6, 0], [6, 2], [6.5, 2], [6.5, 4], [7.2, 4], [7.2, 6], [7.8, 6], [7.8, 8], [8.3, 8], [8.3, 10], [1.7, 10], [1.7, 8], [2.2, 8], [2.2, 6], [2.8, 6], [2.8, 4], [3.5, 4], [3.5, 2], [4, 2], [4, 0]] } } }
          ] },
        { tip: "tuzak", metin: "Yaşlı nüfus çoksa *crude death rate* (CDR) yüksek çıkabilir.", yanlis: "Yüksek ölüm hızı, o ülkenin sağlık hizmetinin kötü olduğunu gösterir.", dogru: "Yaşlı nüfus payı büyük olan ülkelerde sağlık sistemi çok iyi olsa bile ==CDR yüksek== çıkabilir (çünkü ölenlerin çoğu yaşlıdır). Yaşlanmanın başlıca etkeni genellikle doğurganlığın düşmesidir; uzayan yaşam süresi ise bunu güçlendirir." }
      ]
    },
    {
      baslik: "*Dependency ratio*: bağımlılık oranı",
      kisa: "Çalışma çağındaki 100 kişiye düşen çocuk ve yaşlı sayısını gösterir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "0–14 yaş", alt: "çocuklar" }, "+",
            { t: "65+ yaş", alt: "yaşlılar" }, "÷",
            { t: "15–64 yaş", alt: "çalışma çağı" }, "×",
            { t: "100" }, "=",
            { t: "*Dependency ratio*", alt: "bağımlılık oranı" }
          ], aciklama: "Çocuk kısmı ==*youth dependency*==, yaşlı kısmı ==*old-age dependency*== oranını verir. Oran yükseldikçe her çalışanın üstüne düşen yük artar." },
        { tip: "ornek", baslik: "Aynı oran, farklı yük", durum: "Bir kasabanın nüfusu 1980'de 1.000 kişi: 400 çocuk (0–14), 500 çalışma çağı (15–64), 100 yaşlı (65+). 2020'de yine 1.000 kişi: 200 çocuk, 500 çalışma çağı, 300 yaşlı. İki yıl için *dependency ratio*'yu bul.",
          adimlar: ["1980: (400 + 100) ÷ 500 × 100 = 100. Çocuk kısmı 400 ÷ 500 × 100 = 80, yaşlı kısmı 100 ÷ 500 × 100 = 20.", "2020: (200 + 300) ÷ 500 × 100 = 100. Çocuk kısmı 200 ÷ 500 × 100 = 40, yaşlı kısmı 300 ÷ 500 × 100 = 60.", "İki yılda toplam oran aynı (100), ama çocuk payı 80'den 40'a düştü, yaşlı payı 20'den 60'a çıktı."],
          sonuc: "Toplam *dependency ratio* değişmedi (==100==) fakat yük ==çocuklardan yaşlılara== kaydı: okul yerine emekli maaşı, hastane ve bakım ihtiyacı büyüdü." },
        { tip: "tuzak", metin: "Toplam oran aynıysa yük de aynı değildir.", yanlis: "*Dependency ratio* aynı kaldıysa toplumdaki bakım yükü de aynıdır.", dogru: "Çocuk için okul ve bakım, yaşlı için ==emeklilik ve sağlık== harcaması gerekir; ikisi aynı maliyette değildir. Ayrıca oran yaşa dayanır, gerçek iş durumuna dayanmaz: 15–64 yaştakilerin hepsi çalışmaz, 65+ bazıları çalışır." }
      ]
    },
    {
      baslik: "Ekonomik ve sosyal sonuçlar",
      kisa: "Az çalışan, çok emekli: vergi geliri düşer, emeklilik ve sağlık giderleri artar.",
      bloklar: [
        { tip: "harita", merkez: "Yaşlanmanın sonuçları", dallar: [
            { baslik: "Ekonomik", alt: "İşgücü küçülür, emeklilik ve sağlık gideri artar" },
            { baslik: "Sosyal", alt: "Bakım ihtiyacı, yalnız yaşayanlar, boşalan okullar" },
            { baslik: "Siyasi", alt: "Yaşlı seçmen payı büyür, emeklilik gündemi öne çıkar" }
          ] },
        { tip: "tablo", baslik: "Ekonomik ve sosyal etkiler", head: ["Alan", "Sonuç", "Örnek"], rows: [
            ["Ekonomik", "Çalışan sayısı ve vergi tabanı küçülür; emeklilik ve sağlık harcaması artar", "Her emekliyi finanse eden çalışan sayısı azalır"],
            ["Ekonomik", "Yeni bir pazar doğar: sağlık, bakım, yaşlılara özel ürünler", "Evde bakım ve huzurevi hizmetleri"],
            ["Sosyal", "Bakım ihtiyacı artar; yaşlıların yalnız yaşaması yaygınlaşır", "Gençler şehre göç ederken köylerde yaşlılar kalır"],
            ["Sosyal", "Çocuk sayısı azaldığı için okullar ve çocuk hizmetleri küçülür", "Köy okullarının kapanması"]
          ] },
        { tip: "ornek", baslik: "Her emekliyi kaç çalışan finanse ediyor?", durum: "Aynı kasabada 1980'de 500 çalışma çağı, 100 yaşlı; 2020'de 500 çalışma çağı, 300 yaşlı vardı. Emeklilik, çalışanların primiyle ödeniyorsa her yaşlıya kaç çalışma çağlı düşer?",
          adimlar: ["1980: 500 ÷ 100 = 5 çalışan.", "2020: 500 ÷ 300 ≈ 1,7 çalışan."],
          sonuc: "Her yaşlıyı destekleyen çalışan sayısı ==5'ten yaklaşık 1,7'ye== düştü; emeklilik sistemi bu yüzden baskı altına girer." },
        { tip: "ikili", sol: { ikon: "🏫", baslik: "Çocuklara bağlı yük", maddeler: ["Okul, öğretmen, çocuk bakımı", "*Youth dependency*"] },
          sag: { ikon: "🏥", baslik: "Yaşlılara bağlı yük", maddeler: ["Emeklilik, hastane, uzun süreli bakım", "*Old-age dependency*"] },
          oyun: [
            { metin: "Yeni ilkokul binaları ve öğretmen ataması gerekiyor.", cevap: "sol", neden: "Çocuk sayısına bağlı harcama: *youth dependency*." },
            { metin: "Emekli maaşı ve hastane yatak ihtiyacı artıyor.", cevap: "sag", neden: "Yaşlı sayısına bağlı harcama: *old-age dependency*." },
            { metin: "Bebek maması ve kreş talebi hızla yükseliyor.", cevap: "sol", neden: "Küçük çocuklara bağlı yük." },
            { metin: "Huzurevi ve evde bakım hizmetlerine ihtiyaç artıyor.", cevap: "sag", neden: "Yaşlı bakımı: *old-age dependency*." }
          ] }
      ]
    },
    {
      baslik: "Siyasi sonuçlar ve çözümler",
      kisa: "Yaşlı seçmenler ve emeklilik sistemi siyaseti şekillendirir; ülkeler çözüm arar.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🗳️", baslik: "Seçmen gücü", metin: "Yaşlıların oy payı büyür; emeklilik, sağlık ve bakım vaatleri seçim gündeminin başına çıkar." },
            { ikon: "📅", baslik: "Emeklilik yaşını yükseltmek", metin: "Çalışanları daha uzun süre işgücünde tutmak. Fransa 2023'te emeklilik yaşını 62'den 64'e çıkardı ve sokak protestoları yaşandı." },
            { ikon: "🍼", baslik: "*Pronatalist* politikalar", metin: "Doğumu artırmak (2.7): bugünün doğumları yirmi yıl sonra çalışan olur." },
            { ikon: "🧳", baslik: "Göçmen çekmek", metin: "Genç göçmenler işgücünü ve vergi tabanını büyütür (2.12'de ayrıntı)." },
            { ikon: "🤖", baslik: "Otomasyon ve kadın istihdamı", metin: "Robotlar, otomasyon ve kadınların daha çok çalışması işgücü açığını kapatır." }
          ] },
        { tip: "tuzak", metin: "Yaşlanma yalnızca zengin ülkelerin sorunu değildir.", yanlis: "Nüfus yaşlanması sadece Japonya ve Avrupa gibi zengin ülkelerde görülür.", dogru: "Çin, Tayland ve diğer birçok orta gelirli ülke de hızla yaşlanıyor. Bu ülkeler çoğu zaman ==zenginleşmeden yaşlandıkları== için emeklilik ve bakım sistemlerini kurmakta zorlanabilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Yaşlanan nüfus: 65+ payı ve ortanca yaş yükselir; çocuk payı küçülür.",
            "Nedenler: düşük doğum hızı (*TFR* düşer), düşük ölüm hızı ve uzayan yaşam süresi. Başlıca etken genellikle doğurganlığın düşmesidir.",
            "Piramitte taban daralır, tepe genişler. Yaşlı nüfusta CDR yüksek çıkabilir; bu kötü sağlık demek değildir.",
            "*Dependency ratio* = (0–14 + 65+) ÷ (15–64) × 100.",
            "Aynı toplam oranda bile yük çocuklardan (okul) yaşlılara (emeklilik, sağlık, bakım) kayabilir (400/500/100 → 200/500/300: ikisinde de 100).",
            "Ekonomik sonuçlar: işgücü ve vergi tabanı küçülür, emeklilik ve sağlık giderleri artar; her yaşlıya düşen çalışan sayısı azalır.",
            "Sosyal ve siyasi sonuçlar: bakım ihtiyacı, yalnız yaşayan yaşlılar, boşalan okullar, yaşlı seçmen gücü ve emeklilik reformları (Fransa 62→64).",
            "Çözümler: emeklilik yaşını yükseltmek, *pronatalist* politikalar, göçmen çekmek, otomasyon ve kadın istihdamı."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Tablo, bir ülkenin yaş yapısını iki yıl için göstermektedir. Aşağıdakilerden hangisi en doğrudur?",
      fig: { type: "table", head: ["Yaş grubu", "1990 (%)", "2040 (%)"], rows: [["0–14", "30", "15"], ["15–64", "60", "60"], ["65+", "10", "25"]], caption: "Varsayımsal veri" },
      opts: ["Toplam *dependency ratio* belirgin biçimde arttı.", "Toplam *dependency ratio* aynı kaldı ama yük çocuklardan yaşlılara kaydı.", "Toplam *dependency ratio* azaldı çünkü çocuk payı düştü.", "Oran hesaplanamaz çünkü toplam nüfus bilinmiyor."],
      a: 1,
      why: "1990'da (30 + 10) ÷ 60 × 100 ≈ 66,7; 2040'ta (15 + 25) ÷ 60 × 100 ≈ 66,7: toplam oran aynı. Fakat yaşlı payı 10'dan 25'e çıkmıştır. C şıkkı çekicidir: çocuk payı düştüğü için toplam oran azalmış sanılır, oysa yaşlı payındaki artış bunu tam olarak dengeler. D yanlıştır, çünkü oran yüzdelerle de hesaplanabilir."
    },
    {
      q: "Aşağıdakilerden hangisi bir ülkenin nüfusunun yaşlanmasının en doğrudan nedenleridir?",
      opts: ["Düşen doğurganlık ve uzayan yaşam süresi", "Yükselen doğurganlık ve kısalan yaşam süresi", "Yoğun kırdan kente göç ve kentleşme", "Artan bebek ölümleri ve düşen yaşam süresi"],
      a: 0,
      why: "Doğum hızı düşünce çocuk payı küçülür, yaşam süresi uzayınca yaşlılar çoğalır. B ve D yönleri tersine çevirir; C şıkkı (göç ve kentleşme) çekici ama yaşlanmanın doğrudan nedeni değildir."
    },
    {
      q: "Sağlık hizmeti çok iyi olan, yaşlı nüfus payı yüksek bir ülke (A) ile sağlık hizmeti zayıf, genç nüfuslu bir ülke (B) karşılaştırılıyor. A ülkesinin CDR değeri B ülkesinden daha yüksek çıkarsa en olası açıklama nedir?",
      opts: ["A ülkesinde bebek ölümleri B'den yüksektir.", "A ülkesinde doğurganlık B'den yüksektir.", "A ülkesinin sağlık sistemi B'den daha kötüdür.", "A ülkesinin nüfusunda yaşlıların payı büyüktür ve ölenlerin çoğu yaşlıdır."],
      a: 3,
      why: "CDR tüm nüfusa bölündüğü için yaşlı payı yüksek ülkelerde, sağlık hizmeti çok iyi olsa bile yüksek çıkabilir. C şıkkı çekici ama yanlış çıkarımdır: CDR'ye bakıp sağlık sistemini yargılamak yaş yapısını görmezden gelir."
    },
    {
      q: "Yaşlanan bir ülkede aşağıdakilerden hangisinin görülmesi en olasıdır?",
      opts: ["Yeni ilkokul binalarına duyulan ihtiyaç hızla artar.", "Çalışma çağındaki nüfus hızla artar ve vergi tabanı genişler.", "Emeklilik ve sağlık harcamaları seçim gündeminde öne çıkar.", "Her emekliyi destekleyen çalışan sayısı artar."],
      a: 2,
      why: "Yaşlı seçmen payı büyüdükçe emeklilik ve sağlık politikası siyasetin ana konularından biri olur. D şıkkı çekicidir ama tersidir: yaşlanan ülkede yaşlı başına çalışan sayısı azalır."
    },
    {
      q: "Bir ülkede 200 çocuk (0–14), 500 çalışma çağı (15–64) ve 100 yaşlı (65+) vardır. *Dependency ratio* kaçtır?",
      opts: ["37,5", "60", "20", "300"],
      a: 1,
      why: "(200 + 100) ÷ 500 × 100 = 60. A şıkkı (37,5) paydaya toplam nüfusu (800) koyduğunuzda çıkar; C ise yalnızca yaşlıları (100 ÷ 500) hesaba katar."
    }
  ]
};
