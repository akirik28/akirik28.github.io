/* Kitora not defteri · bf13 · 1.3 PESTEL ve İş Ortamı
   Kaynak: ap-videolar/src/episodes/bf13 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf13",
  ozet: "Bir işletmenin kaderini yalnızca becerisi belirlemez; elinde olmayan dış etkenler de belirler. Bu defterde *internal* ve *external factors*'ı, *business environment*'ı, *opportunities* ile *threats*'i, *viability* kavramını ve ortamı tarayan *PESTEL* listesinin altı etkenini (*political*, *economic*, *social*, *technological*, *environmental*, *legal*) göreceksin.",
  bolumler: [
    {
      baslik: "Yanlış yerde doğru ürün",
      bloklar: [
        { tip: "hikaye", ikon: "🏄", baslik: "Dünyanın en iyi sörf tahtası",
          metin: "Dünyanın en iyi sörf tahtasını yapıyorsun. Ama dükkânı Erzurum'da açtın: deniz yok, dalga yok, müşteri yok. Ya da Bodrum sahiline kayak pisti kurdun. Demek ki işin kaderini yalnızca becerin belirlemiyor; dışarıda, elinde olmayan şeyler de var." },
        { tip: "adimlar", baslik: "Doğru ürün, yanlış ortam", adimlar: [
            { baslik: "Ürün", metin: "Dünyanın en iyi sörf tahtası." },
            { baslik: "Yer", metin: "Erzurum: deniz yok, dalga yok." },
            { baslik: "Sonuç", metin: "Müşteri yok, satış yok." },
            { baslik: "Ders", metin: "Başarı hem içeridekilere hem dışarıdakilere bağlıdır." }
          ] },
        { tip: "not", metin: "Notlardaki ana örnek aynı fikri taşır: protein cinnamon roll satan bir spor salonu + fırın. Başarısı hem pasta becerisine ve pazarlamaya (içerideki etkenler) hem de dışarıdaki koşullara bağlıdır. Kansas'ta sörf dükkânı ve Florida'da kayak merkezi de aynı hatanın örnekleridir." }
      ]
    },
    {
      baslik: "İçeriden ve dışarıdan etkenler",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔧", terim: "Internal factors", tr: "iç etkenler", tanim: "İşletmenin kendi kontrolündeki etkenler: ürün, fiyat, ekip, pazarlama stratejisi.", ornek: "Kantinde tostun kalitesi, fiyatı, çalışanların." },
            { ikon: "🌦️", terim: "External factors", tr: "dış etkenler", tanim: "İşletmenin kontrol edemediği, dışarıdan gelen etkenler: ekonomi, yasalar, toplumsal trendler.", ornek: "Kantin için ekonomi, yasalar, trendler." },
            { ikon: "🌐", terim: "Business environment", tr: "iş ortamı", tanim: "Bir işletmenin nasıl çalıştığını ve rekabet ettiğini etkileyen dış koşul ve güçlerin tamamı.", ornek: "İyi işletme bu ortamı sürekli tarar." },
            { ikon: "🌱", terim: "Opportunities", tr: "fırsatlar", tanim: "İş ortamındaki, işletmenin yararlanabileceği olumlu gelişmeler.", ornek: "Sağlık trendi protein bar satanlara fırsat." },
            { ikon: "⚠️", terim: "Threats", tr: "tehditler", tanim: "İş ortamındaki, işletmeye zarar verebilecek gelişmeler.", ornek: "Orman yangını sahil oteline tehdit." }
          ] },
        { tip: "ikili", sol: { ikon: "🔧", baslik: "*Internal factors*", maddeler: ["Senin kontrolünde", "Ürün, fiyat, ekip, pazarlama"] },
          sag: { ikon: "🌦️", baslik: "*External factors*", maddeler: ["Kontrol edemezsin", "Ekonomi, yasalar, trendler"] },
          oyun: [
            { metin: "Kantinde tostun fiyatını belirlemek.", cevap: "sol", neden: "Karar senin: *internal*." },
            { metin: "Hükümetin yeni bir vergi getirmesi.", cevap: "sag", neden: "Dışarıdan gelir, kontrol edemezsin: *external*." },
            { metin: "Kantinde kimi işe alacağın.", cevap: "sol", neden: "Ekip kararı işletmenin içinde: *internal*." },
            { metin: "Ekonominin küçülmesi.", cevap: "sag", neden: "Genel ekonomi senin elinde değil: *external*." },
            { metin: "Pazarlama stratejini değiştirmek.", cevap: "sol", neden: "Strateji işletmenin kontrolünde: *internal*." }
          ] },
        { tip: "ikili", sol: { ikon: "🌱", baslik: "*Opportunity*", maddeler: ["Yararlanabileceğin gelişme", "Büyüme şansı"] },
          sag: { ikon: "⚠️", baslik: "*Threat*", maddeler: ["Zarar verebilecek gelişme", "Risk"] },
          oyun: [
            { metin: "İnsanların sağlığa daha çok önem vermesi (protein bar satıcısı için).", cevap: "sol", neden: "Talep artıyor: fırsat." },
            { metin: "İthal çeliğe vergi gelmesi (otomobil fabrikası için).", cevap: "sag", neden: "Maliyeti artırıyor: tehdit." },
            { metin: "İthal çeliğe vergi gelmesi (yerli çelik üreticisi için).", cevap: "sol", neden: "Rakibi pahalanıyor: fırsat." },
            { metin: "Orman yangınının tatil sezonunu bitirmesi (sahil oteli için).", cevap: "sag", neden: "Müşteri gelmiyor: tehdit." }
          ] },
        { tip: "tuzak", baslik: "Aynı etken, iki yüz", metin: "Aynı olay bir işletmeye fırsat, ötekine tehdit olabilir. Çelik *tariff*'i otomobil üreticisine tehdit, yerli çelik üreticisine fırsattır.", yanlis: "Bir dış etken herkes için aynı etkiyi yapar.", dogru: "Etkenin yönü işletmeye göre değişir; fırsat mı tehdit mi diye kimin açısından baktığına bak." },
        { tip: "tuzak", baslik: "Kontrol edemezsin", metin: "Ne kadar iyi iş insanı olursan ol, dış etkenler aleyhineyse zorlanırsın.", yanlis: "İyi yönetim *external factors*'ı ortadan kaldırır.", dogru: "*External factors* kontrol edilemez; yapılacak şey onları analiz edip uyum sağlamaktır." }
      ]
    },
    {
      baslik: "*Viability* ve *PESTEL*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏁", terim: "Viability", tr: "uzun vadede ayakta kalabilirlik", tanim: "Bir işletmenin uzun vadede başarılı ve sürdürülebilir biçimde ayakta kalıp büyüyebilmesi. Sıfatı: *viable*.", ornek: "Blockbuster viable kalamadı." },
            { ikon: "🧭", terim: "PESTEL", tr: "dış etken tarama çerçevesi", tanim: "İşletmeyi etkileyen dış etkenleri altı başlıkta tarayan analiz çerçevesi: *Political*, *Economic*, *Social*, *Technological*, *Environmental*, *Legal*.", ornek: "Yeni bir iş kurarken altı harfi tek tek kontrol et." }
          ] },
        { tip: "grafik", baslik: "Ortam değişti, işletme değişmedi (kavramsal)", xlabel: "Zaman", ylabel: "Müşteri ilgisi", xmax: 10, ymax: 10,
          ogeler: [
            { id: "dvd", tip: "egri", renk: 0, noktalar: [[0, 8], [3, 8], [5, 6], [7, 3], [9, 1]], gizli: true },
            { id: "net", tip: "egri", renk: 1, noktalar: [[0, 0.5], [3, 1], [5, 3], [7, 6], [9, 9]], gizli: true },
            { id: "t1", tip: "yazi", x: 1.2, y: 8.9, metin: "Mağazadan film kiralama", gizli: true },
            { id: "t2", tip: "yazi", x: 9.8, y: 9.7, metin: "İnternetten film", hiza: "end", gizli: true },
            { id: "bb", tip: "yazi", x: 9.8, y: 1.8, metin: "Blockbuster: 2010'da iflas", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Blockbuster dev bir ==film kiralama zinciriydi==.", goster: ["dvd", "t1"] },
            { metin: "Filmler ==internete taşındı==; ortam değişti.", goster: ["net", "t2"] },
            { metin: "Ayak uyduramadı: ==2010'da iflas etti.== Viable kalamadı.", goster: ["bb"] }
          ] },
        { tip: "harita", merkez: "*PESTEL*", dallar: [
            { baslik: "P · *Political*", alt: "Hükümetin kararları ve öncelikleri" },
            { baslik: "E · *Economic*", alt: "Ekonominin genel sağlığı" },
            { baslik: "S · *Social*", alt: "Kültürel trendler, nüfus yapısı" },
            { baslik: "T · *Technological*", alt: "Üretimi, dağıtımı, iletişimi değiştiren yenilikler" },
            { baslik: "E · *Environmental*", alt: "Doğal koşullar ve çevre kaygıları" },
            { baslik: "L · *Legal*", alt: "Uymak zorunda olduğun yasalar ve yönetmelikler" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🧸", baslik: "Uyum sağlayamayanlar", metin: "Notlarda şu adlar geçiyor: Blockbuster, Toys “R” Us, Forever 21, Spirit Airlines." },
            { ikon: "🎯", baslik: "Ana fikir", metin: "Yalnızca iyi ürün yapmak yetmez. İş ortamını analiz etmek fırsatları görmeyi, riskten kaçınmayı, *viable* kalmayı ve kâr etmeyi sağlar." }
          ] },
        { tip: "tuzak", baslik: "Büyük kelime: viability", metin: "Ders boyunca çok sık karşına çıkacak; tanımını ezbere bil.", yanlis: "*Viability* hemen kâr etmek demektir.", dogru: "*Viability*: uzun vadede ayakta kalmak, büyümek, zaman içinde başarılı kalmak." }
      ]
    },
    {
      baslik: "P · *Political factors*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Political factors", tr: "siyasi etkenler", tanim: "İş hayatını etkileyen hükümet eylemleri, politikaları ve öncelikleri: seçimler, vergiler, devlet destekleri, dış ticaret politikası.", ornek: "Seçim, vergi, dış ticaret kararları." },
            { ikon: "🚢", terim: "Tariff", tr: "gümrük vergisi", tanim: "İthal mallara konan vergi.", ornek: "İthal çeliğe %25 *tariff*." },
            { ikon: "🎁", terim: "Subsidy", tr: "devlet desteği", tanim: "Devletin bir sektöre ya da ürüne verdiği mali destek.", ornek: "Güneş paneline destek çıkarsa panel satanlar kazanır." }
          ] },
        { tip: "ornek", baslik: "İthal çelikte %25 gümrük vergisi", durum: "İthal çeliğe yüzde 25 *tariff* geliyor. 100 liralık çelik kaça çıkar, kimin işine yarar?",
          adimlar: ["Vergi = 100 × %25 = 25 TL.", "Yeni fiyat = 100 + 25 = 125 TL.", "Otomobil fabrikası bu çeliği kullandığı için maliyeti artar: tehdit.", "Yerli çelik üreticisinin rakibi pahalandı: fırsat."],
          sonuc: "Çelik 125 TL olur; otomobil fabrikası zarar görür, yerli çelik üreticisi sevinir." },
        { tip: "grafik", baslik: "Çeliğin fiyatı (TL)", xlabel: "Fiyat", ylabel: "TL", xmax: 4, ymax: 140,
          yticks: [{ v: 100, label: "100" }, { v: 125, label: "125" }],
          ogeler: [
            { id: "once", tip: "alan", renk: 1, noktalar: [[0.5, 0], [1.5, 0], [1.5, 100], [0.5, 100]] },
            { id: "sonra", tip: "alan", renk: 0, noktalar: [[2.3, 0], [3.3, 0], [3.3, 0], [2.3, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 108, metin: "Vergisiz 100", gizli: true },
            { id: "t2", tip: "yazi", x: 2.8, y: 133, metin: "%25 vergiyle 125", gizli: true },
            { id: "ok", tip: "ok", from: [1.8, 100], to: [2.6, 125], gizli: true }
          ],
          durumlar: [
            { metin: "İthal çelik ==100 TL==.", goster: ["t1"] },
            { metin: "%25 *tariff* gelir: fiyat ==125 TL==.", set: { sonra: { noktalar: [[2.3, 0], [3.3, 0], [3.3, 125], [2.3, 125]] } }, goster: ["ok", "t2"] },
            { metin: "Çelik kullanan otomobil fabrikasının ==maliyeti artar.== Yerli çelik üreticisi rakibini pahalı görür." }
          ] },
        { tip: "not", metin: "Hükümet bir önceliği açıklarsa (temiz enerjiye odaklanmak gibi) bu da *political*'dir. Soruda “öncelik, politika, seçim” kelimelerini gördüğünde *political*'e bak." },
        { tip: "tuzak", baslik: "Vergi ve destek economic değil", metin: "*Tariff*, vergi ve *subsidy* maliyeti etkiledikleri için *economic* sanılır; ama *political* başlığındadır.", yanlis: "Vergi ve gümrük vergisi *economic factors*'tır.", dogru: "*Tariff*, vergi, *subsidy*: *political*. *Economic* ise ekonominin genel gidişatıdır (enflasyon, işsizlik, durgunluk)." }
      ]
    },
    {
      baslik: "E · *Economic factors*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Economic factors", tr: "ekonomik etkenler", tanim: "Harcamayı ve iş faaliyetini etkileyen, ekonominin genel performansına ilişkin koşullar.", ornek: "İşsizlik, enflasyon, hane geliri, durgunluk." },
            { ikon: "🧑‍💼", terim: "Unemployment rate", tr: "işsizlik oranı", tanim: "Çalışmak isteyip iş bulamayanların iş gücüne oranı.", ornek: "İşsizlik artınca harcama azalır." },
            { ikon: "🏠", terim: "Household income", tr: "hane geliri", tanim: "Bir hanenin toplam geliri; tüketicinin harcama gücünü belirler.", ornek: "Gelir düşünce lüks ürün satışı düşer." },
            { ikon: "🛒", terim: "Inflation", tr: "enflasyon", tanim: "Mal ve hizmetlerin genel fiyat düzeyindeki sürekli artış.", ornek: "100 liralık sepet bir yılda 150 lira." },
            { ikon: "📉", terim: "Recession", tr: "durgunluk", tanim: "Ekonomik faaliyetin bir süre boyunca gerilemesi; çoğu zaman işsizlik artar, harcama azalır.", ornek: "Kâr etmek ve *viable* kalmak zorlaşır." }
          ] },
        { tip: "ornek", baslik: "Enflasyon: paran ne kadar alıyor?", durum: "Bir sepet 100 TL'ydi, bir yıl sonra 150 TL oldu. Elindeki 100 TL ile sepetin ne kadarını alabilirsin?",
          adimlar: ["Artış = 150 − 100 = 50 TL; yani %50.", "100 TL ile alınabilen oran = 100 ÷ 150 ≈ 0,67.", "Yani sepetin yaklaşık üçte ikisini alırsın."],
          sonuc: "*Inflation* yüzünden aynı para daha azını alır: 100 TL artık sepetin yaklaşık %67'sine yeter." },
        { tip: "grafik", baslik: "Sepetin fiyatı (TL)", xlabel: "Yıl", ylabel: "TL", xmax: 4, ymax: 170,
          xticks: [{ v: 1, label: "Bugün" }, { v: 3, label: "1 yıl sonra" }],
          yticks: [{ v: 100, label: "100" }, { v: 150, label: "150" }],
          ogeler: [
            { id: "s1", tip: "alan", renk: 1, noktalar: [[0.6, 0], [1.4, 0], [1.4, 100], [0.6, 100]] },
            { id: "s2", tip: "alan", renk: 0, noktalar: [[2.6, 0], [3.4, 0], [3.4, 0], [2.6, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 108, metin: "100", gizli: true },
            { id: "t2", tip: "yazi", x: 3, y: 158, metin: "150", gizli: true },
            { id: "pw", tip: "cizgi", renk: 2, kesik: true, from: [2.3, 100], to: [3.7, 100], etiket: "", gizli: true },
            { id: "pt", tip: "yazi", x: 3, y: 90, metin: "100 TL = sepetin %67'si", gizli: true }
          ],
          durumlar: [
            { metin: "Bugün sepet ==100 TL==.", goster: ["t1"] },
            { metin: "Bir yıl sonra aynı sepet ==150 TL==: *inflation*.", set: { s2: { noktalar: [[2.6, 0], [3.4, 0], [3.4, 150], [2.6, 150]] } }, goster: ["t2"] },
            { metin: "Elindeki 100 TL artık sepetin ==yaklaşık üçte ikisini== alır.", goster: ["pw", "pt"] }
          ] },
        { tip: "not", metin: "Kur da ekonomik etkenlerin içindedir: dolar yükselince ithal kahve pahalanır ve kafenin maliyeti artar. Çoğu zaman *recession*'da işsizlik artar, harcama azalır; işletmenin kâr etmesi zorlaşır." },
        { tip: "tablo", baslik: "Economic etkenler ne yapar?", head: ["Etken", "Ne olur?", "İşletmeye etkisi"], rows: [
            ["*Unemployment rate* artar", "Gelir azalır", "Harcama düşer"],
            ["*Household income* artar", "Alım gücü artar", "Satış artabilir"],
            ["*Inflation*", "Fiyatlar genel olarak yükselir", "Aynı para daha azını alır"],
            ["*Recession*", "Ekonomi küçülür", "Kâr zorlaşır"]
          ] }
      ]
    },
    {
      baslik: "S · *Social factors*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Social factors", tr: "toplumsal etkenler", tanim: "Tüketici davranışını etkileyen kültürel trendler, demografi ve toplumsal tutumlar.", ornek: "İnsanların sağlığı daha çok önemsemesi." },
            { ikon: "📊", terim: "Demographics", tr: "demografi", tanim: "Bir nüfusun yaş, gelir, eğitim düzeyi ve konum gibi istatistiksel özellikleri.", ornek: "Türkiye'de yaşlı nüfusun payı artıyor." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "Trend", baslik: "Sağlık bilinci", metin: "İnsanlar sağlığa 30 yıl öncesinden çok daha fazla önem veriyor." },
            { tarih: "Ürün", baslik: "Fırsat", metin: "Protein barlar, sağlıklı gıda, fitness uygulamaları, takviyeler." },
            { tarih: "Nüfus", baslik: "Yaşlanma", metin: "Yaşlı nüfus payı artıyor: bakım hizmeti satanlara fırsat." },
            { tarih: "Reklam", baslik: "Hedef kitle", metin: "Liseliye yaptığın reklamı emekliye yapmazsın." }
          ] },
        { tip: "ikili", sol: { ikon: "🎭", baslik: "Kültürel trend / tutum", maddeler: ["Sağlığı önemsemek", "Toplumun tutumları"] },
          sag: { ikon: "📊", baslik: "*Demographics*", maddeler: ["Yaş, gelir, eğitim, konum", "Nüfusun istatistiksel yapısı"] },
          oyun: [
            { metin: "İnsanların spor uygulamalarına ilgi duyması.", cevap: "sol", neden: "Kültürel trend." },
            { metin: "Ülkedeki yaşlı nüfusun payının artması.", cevap: "sag", neden: "Yaş dağılımı: demografi." },
            { metin: "Toplumun çevre dostu markaları daha olumlu karşılaması.", cevap: "sol", neden: "Toplumsal tutum." },
            { metin: "Bir şehirdeki ortalama gelir ve eğitim düzeyi.", cevap: "sag", neden: "Gelir ve eğitim: demografi." }
          ] },
        { tip: "tuzak", baslik: "Social ipuçları", metin: "“Yaş, gelir dağılımı, yaşam tarzı” kelimeleri *social*'ı işaret eder. *Demographics* Unit 2'de *target audience* konusunda tekrar karşına çıkacak.", yanlis: "Aynı reklam herkese uyar.", dogru: "Gençlere ve emeklilere aynı pazarlama yapılmaz; nüfusun yapısı pazarlamayı belirler." }
      ]
    },
    {
      baslik: "T · *Technological factors*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Technological factors", tr: "teknolojik etkenler", tanim: "Üretimi, dağıtımı, iletişimi ya da yeniliği etkileyen teknolojik değişimler.", ornek: "2007'de iPhone'un çıkışı." },
            { ikon: "🤖", terim: "Automation", tr: "otomasyon", tanim: "Görevlerin en az insan emeğiyle teknolojiye yaptırılması.", ornek: "Marketteki kasiyersiz kasalar maliyeti düşürür." },
            { ikon: "🧠", terim: "AI", tr: "yapay zekâ", tanim: "*Artificial intelligence*: bugün işletmeleri en hızlı değiştiren teknolojik etken.", ornek: "Bugünün dalgası." }
          ] },
        { tip: "adimlar", baslik: "2007'den bugüne", adimlar: [
            { baslik: "2007", metin: "iPhone çıktı; tuşlu ve kapaklı telefonların devri kapandı." },
            { baslik: "Fırsat", metin: "Aynı telefon Getir ve Trendyol gibi uygulamalara kapı açtı." },
            { baslik: "*Automation*", metin: "Kasiyersiz kasalar insan emeğini azaltır, maliyeti düşürür." },
            { baslik: "*AI*", metin: "Bugünün dalgası: yapay zekâ." }
          ] },
        { tip: "ikili", sol: { ikon: "📵", baslik: "Teknoloji kapıyı kapatır", maddeler: ["Eski ürünün devri biter", "Tuşlu telefon"] },
          sag: { ikon: "📲", baslik: "Teknoloji kapı açar", maddeler: ["Yeni iş modeli doğar", "Getir, Trendyol"] },
          oyun: [
            { metin: "Akıllı telefonlar yüzünden tuşlu telefon satışının bitmesi.", cevap: "sol", neden: "Eski ürünün devri kapandı." },
            { metin: "Telefon uygulamasıyla kurye dağıtımı yapan şirketin doğması.", cevap: "sag", neden: "Yeni teknoloji yeni iş doğurdu." },
            { metin: "Streaming'in eğlenceyi değiştirmesiyle yeni platformların çıkması.", cevap: "sag", neden: "Yeni iş fırsatı." },
            { metin: "Filmler internete taşınınca mağaza kiralama zincirinin gerilemesi.", cevap: "sol", neden: "Eski model kapandı." }
          ] }
      ]
    },
    {
      baslik: "E · *Environmental factors*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Environmental factors", tr: "çevresel etkenler", tanim: "İşletme faaliyetlerini ve talebi etkileyen doğal koşullar ve çevre kaygıları: iklim, doğal afetler, kirlilik, doğal kaynaklara erişim.", ornek: "Orman yangını sahil oteli sezonunu bitirebilir." },
            { ikon: "♻️", terim: "Sustainability", tr: "sürdürülebilirlik", tanim: "Çevreye zarar vermeden uzun vadede sürdürülebilecek biçimde iş yapma.", ornek: "Artık *viability*'nin de şartı." }
          ] },
        { tip: "harita", merkez: "*Environmental*", dallar: [
            { baslik: "Doğanın kendisi", alt: "İklim, afet, kirlilik, doğal kaynaklar" },
            { baslik: "İnsanların bakışı", alt: "Müşteriler çevreye duyarlı markayı tercih ediyor" },
            { baslik: "Fırsat", alt: "Antalya'da sahil oteli güneşle denizden kazanır" },
            { baslik: "Tehdit", alt: "Orman yangını ya da sert hava sezonu bitirebilir" }
          ] },
        { tip: "ikili", sol: { ikon: "🏖️", baslik: "Doğal koşul fırsatı", maddeler: ["Sahil otelinin konumu", "Güneş ve deniz"] },
          sag: { ikon: "🔥", baslik: "Doğal koşul tehdidi", maddeler: ["Orman yangını", "Sert hava olayları"] },
          oyun: [
            { metin: "Antalya'daki otelin güneş ve denizle müşteri çekmesi.", cevap: "sol", neden: "Konumun getirdiği fırsat." },
            { metin: "Orman yangınının tatil sezonunu bitirmesi.", cevap: "sag", neden: "Doğal afet tehdidi." },
            { metin: "Sert hava olaylarının kıyıdaki işletmeyi kapatması.", cevap: "sag", neden: "İşletme hazırlıklı olmalı." },
            { metin: "Güzel iklimin yıl boyu turist çekmesi.", cevap: "sol", neden: "Doğal koşul avantajı." }
          ] },
        { tip: "tuzak", baslik: "İki şeyi kapsar", metin: "*Environmental* iki şeyi kapsar: doğanın kendisi (iklim, afet, kaynak) ve insanların çevreye bakışı.", yanlis: "*Environmental factors* yalnızca doğal afetlerdir.", dogru: "Doğal koşulların yanında müşterinin çevreye duyarlılığı ve *sustainability* de bu başlıktadır." }
      ]
    },
    {
      baslik: "L · *Legal factors*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Legal factors", tr: "yasal etkenler", tanim: "İşletmelerin uymak zorunda olduğu yasalar ve düzenlemeler.", ornek: "Uymayana ceza, dava, hatta kapatma var." },
            { ikon: "📘", terim: "Regulations", tr: "yönetmelikler", tanim: "Yasalara dayanan, uyulması zorunlu ayrıntılı kurallar.", ornek: "Deprem yönetmeliği." },
            { ikon: "💵", terim: "Minimum wage", tr: "asgari ücret", tanim: "İşverenin yasal olarak ödeyebileceği en düşük ücret.", ornek: "Asgari ücretin altında maaş veremezsin." },
            { ikon: "©️", terim: "Intellectual property", tr: "fikrî mülkiyet", tanim: "Özgün fikirlerin, buluşların ve yaratıcı eserlerin yasal koruması.", ornek: "Logona Disney kahramanı koyarsan dava edilirsin." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💵", baslik: "*Minimum wage*", metin: "Asgari ücretin altında maaş veremezsin." },
            { ikon: "🏗️", baslik: "Güvenlik yönetmeliği", metin: "Müteahhit deprem yönetmeliğine uymak zorunda." },
            { ikon: "🛍️", baslik: "Tüketiciyi koruma", metin: "Ayıplı malı geri alırsın." },
            { ikon: "🧚", baslik: "*Intellectual property*", metin: "Disney'in Hercules'ünü maskot yaparsan dava edilirsin." }
          ] },
        { tip: "adimlar", baslik: "Yasaya uymazsan", adimlar: [
            { baslik: "Kural", metin: "Yasa ya da yönetmelik zorunlu." },
            { baslik: "İhlal", metin: "Kurala uymadın." },
            { baslik: "Sonuç", metin: "Para cezası, dava, hatta kapatma." }
          ] },
        { tip: "tuzak", baslik: "Legal ipuçları", metin: "“Yasa, ceza, zorunlu” kelimeleri *legal*'i işaret eder.", yanlis: "Hükümetin açıkladığı her öncelik *legal*'dir.", dogru: "İşletmenin fiilen uymak zorunda olduğu yasa ya da yönetmelik *legal*'dir." }
      ]
    },
    {
      baslik: "*Political* mi, *legal* mi?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏛️", baslik: "*Political*", maddeler: ["Hükümetin kararı ve önceliği", "Seçim, vergi, destek, dış ticaret", "“Öncelik, politika, seçim”"] },
          sag: { ikon: "⚖️", baslik: "*Legal*", maddeler: ["Uymak zorunda olduğun kural", "Yasa, yönetmelik, ceza", "“Yasa, ceza, zorunlu”"] },
          oyun: [
            { metin: "Hükümet temiz enerjiye öncelik vereceğini açıklıyor.", cevap: "sol", neden: "Öncelik ve politika: *political*." },
            { metin: "Egzoz emisyonuna sınır koyan yasa.", cevap: "sag", neden: "Uyulması zorunlu kural: *legal*." },
            { metin: "Hükümet güneş paneli sektörüne destek (*subsidy*) çıkarıyor.", cevap: "sol", neden: "Devlet desteği: *political*." },
            { metin: "Uymayan şirkete ceza veren sağlık yönetmeliği.", cevap: "sag", neden: "Ceza ve zorunluluk: *legal*." },
            { metin: "İthal ürüne gümrük vergisi konması.", cevap: "sol", neden: "Dış ticaret politikası: *political*." }
          ] },
        { tip: "ornek", baslik: "Plastik poşet kuralı", durum: "Türkiye'de 2019'dan beri plastik poşet paralı. Bu kural hangi PESTEL etkenlerine girer?",
          adimlar: ["Çevre kaygısı → *environmental*.", "Toplumun tutumu ve alışkanlığı → *social*.", "Hükümetin önceliği → *political*.", "Uyulması zorunlu kural → *legal*."],
          sonuc: "Tek kuralda dört etken bir arada: çevre, toplum, siyaset ve hukuk. ==Etkenler iç içe geçer.==" },
        { tip: "tuzak", baslik: "En çok karışan ikili", metin: "Hükümetler toplumsal trendlere ve çevre kaygılarına karşılık yeni yasa çıkarır; o yasa aynı anda *political*, *legal*, *environmental* ve *social* olur. Senaryo sorusunda en iyi uyan başlığı seç.", yanlis: "Her olay yalnızca tek bir PESTEL harfine girer.", dogru: "Altı etken birbirinden kopuk değildir; soruda neyin vurgulandığına bak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Internal factors* senin kontrolünde (ürün, fiyat, ekip, pazarlama); *external factors* değil (ekonomi, yasalar, trendler). Hepsi birlikte *business environment*.",
            "İş ortamı hem *opportunities* hem *threats* barındırır; aynı etken birine fırsat, ötekine tehdit olabilir.",
            "Hedef *viability*: uzun vadede ayakta kalıp büyümek. Blockbuster 2010'da iflas etti.",
            "*PESTEL*: *political*, *economic*, *social*, *technological*, *environmental*, *legal*.",
            "*Political*: seçim, vergi, *tariff* (100 TL → %25 ile 125 TL), *subsidy*. *Economic*: *unemployment rate*, *household income*, *inflation*, *recession*.",
            "*Social*: trendler ve *demographics*; *technological*: iPhone, *automation*, *AI*.",
            "*Environmental*: iklim, afet, kirlilik, kaynaklar ve *sustainability*; *legal*: yasalar, *regulations*, *minimum wage*, *intellectual property*.",
            "*Political* önceliktir; *legal* zorunlu kuraldır.",
            "Altı etken iç içe geçer: plastik poşet kuralı dört başlığa birden girer."
          ] }
      ]
    }
  ]
};
