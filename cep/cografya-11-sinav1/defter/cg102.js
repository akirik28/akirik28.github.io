/* Kitpath not defteri · cg102 · COĞ.11.2.1 Web tabanlı CBS
   Kaynak: cografya-11-sinav1/veri.js (KONU cbs, MUHTEMEL 2.1). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cg102",
  amac: "Bu konu web tabanlı CBS'yi anlatıyor: tarayıcıyla kullanılan harita sistemi. Katmanları, beş çözümleme işlemini ve bir haritadan çıkarım yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Web tabanlı CBS nedir?",
      kisa: "Tarayıcıyla kullanılır; işi sunucu yapar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "CBS", tr: "coğrafi bilgi sistemleri", tanim: "Mekânsal verileri toplayan, düzenleyen, sorgulayan, çözümleyen ve haritalayan sistem.", ornek: "Bir ilin yol, bina ve nüfus katmanları." },
            { ikon: "🌐", terim: "Web tabanlı CBS", tr: "genel ağ üzerinde CBS", tanim: "CBS ile web teknolojilerinin birleşmesiyle doğan, tarayıcıdan kullanılan uygulama. İlk olarak 1990'lı yıllarda çıktı.", ornek: "Tarayıcıda açılan bir harita uygulaması." },
            { ikon: "☁️", terim: "Bulut bilişim", tr: "veri bulutta", tanim: "Veri ve uygulamalar genel ağdaki bulut sunucularında durur, her yerden ulaşılır. Web tabanlı CBS'nin temelidir." }
          ] },
        { tip: "adimlar", baslik: "Çalışma düzeni: kullanıcı, genel ağ, sunucu", adimlar: [
            { baslik: "Kullanıcı", metin: "Tarayıcıdan komut gönderir." },
            { baslik: "Sunucu", metin: "Komutu işler; toplama, çözümleme, depolama burada olur." },
            { baslik: "Sonuç", metin: "Harita ya da veri, genel ağ üzerinden kullanıcıya döner." }
          ] }
      ]
    },
    {
      baslik: "Veri nasıl tutulur?",
      kisa: "Her veri bir katmandır; ayrıntılar öz nitelik tablosundadır.",
      bloklar: [
        { tip: "harita", merkez: "Web tabanlı CBS verisi", dallar: [
            { baslik: "Katman", alt: "Yollar, binalar, nüfus, arazi örtüsü: her biri ayrı bir tabaka" },
            { baslik: "Veri biçimi", alt: "Piksel ağı (raster): uydu görüntüsü. Nokta, çizgi, alan (vektör)." },
            { baslik: "Öz nitelik tablosu", alt: "Nesnenin adı, nüfusu, alanı gibi ayrıntılar; yetkili kullanıcı günceller" },
            { baslik: "Veri görüntüleme", alt: "Sonuç harita, grafik ya da tablo olarak sunulur" },
            { baslik: "Detay", alt: "Verinin ne kadar ayrıntılı gösterildiği" }
          ] },
        { tip: "tuzak", metin: "Veri kullanıcının bilgisayarında işlenmez.", yanlis: "Verilerin işlenmesi ve depolanması çoğunlukla kullanıcının bilgisayarında yapılır.", dogru: "Kritik işlemlerin çoğu sunucuda yapılır; kullanıcının bilgisayarına yük binmez." }
      ]
    },
    {
      baslik: "Beş çözümleme işlemi",
      kisa: "Birleştir, çakıştır, sorgula, genelleştir, sembolleştir.",
      bloklar: [
        { tip: "tablo", head: ["İşlem", "Ne yapar?", "Örnek"], rows: [
            ["Birleştirme", "Farklı kaynaklı verileri tek katmanda toplar", "Belediye ve kadastro bina verileri tek 'yapı' katmanı olur"],
            ["Çakıştırma", "Katmanları üst üste bindirir", "Su, kanalizasyon ve yol katmanlarını aynı anda açma"],
            ["Sorgulama", "Ölçüte uyan veriyi seçer", "Son 5 yılda yapılan binaları bulma"],
            ["Genelleştirme", "Ayrıntıyı azaltıp sadeleştirir", "Uzaklaşınca yalnızca ana yolların görünmesi"],
            ["Sembolleştirme", "Veriyi renk ve sembolle gösterir", "Hastaneyi kırmızı haç, okulu mavi daire yapma"]
          ], not: "Akılda tut: B-Ç-S-G-S. Birleştirme ilk adımdır." },
        { tip: "ikili", sol: { ikon: "🧱", baslik: "Çakıştırma", maddeler: ["Ayrı katmanlar üst üste açılır", "Örtüşmeler görülür"] },
          sag: { ikon: "🔎", baslik: "Sorgulama", maddeler: ["Ölçüte uyanlar seçilir", "Gerisi elenir"] },
          oyun: [
            { metin: "Su, kanalizasyon ve yol katmanlarını aynı anda açmak.", cevap: "sol", neden: "Katmanlar üst üste: çakıştırma." },
            { metin: "Haritada yalnızca nüfusu 50 binin üzerindeki ilçeleri göstermek.", cevap: "sag", neden: "Ölçüte uyanları seçmek: sorgulama." },
            { metin: "Yağış ve eğim katmanını üst üste açıp heyelan riski yüksek alanları görmek.", cevap: "sol", neden: "Örtüşmeyi görmek: çakıştırma." },
            { metin: "Son iki yılda yapılan binaları listelemek.", cevap: "sag", neden: "Ölçüte göre seçmek: sorgulama." }
          ] },
        { tip: "tuzak", metin: "Birleştirme ile çakıştırma karışır.", yanlis: "Birleştirme, katmanları üst üste bindirmektir.", dogru: "Birleştirme verileri tek katmanda toplar. Çakıştırma ayrı katmanları üst üste açar." }
      ]
    },
    {
      baslik: "Web tabanlı CBS ile bilgisayar tabanlı CBS",
      kisa: "Web: kurulumsuz, herkese açık ama analizi daha sınırlı.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌐", baslik: "Web tabanlı CBS", maddeler: ["Kurulum yok; tarayıcıyla giriş", "Her yerden erişim; geniş kitle", "Çoğu ücretsiz; otomatik güncellenir", "Aynı anda birçok kullanıcı", "Analiz daha sınırlı; genel ağ şart"] },
          sag: { ikon: "🖥️", baslik: "Bilgisayar tabanlı CBS", maddeler: ["Yazılım bilgisayara kurulur", "Çoğunlukla uzman kullanıcı", "Lisans maliyeti yüksek olabilir", "Güçlü, karmaşık analiz", "Genel ağ zorunlu değil"] },
          oyun: [
            { metin: "Kurulum gerekmez, tarayıcıdan girilir.", cevap: "sol", neden: "Web tabanlı özelliği." },
            { metin: "Lisans maliyeti yüksek olabilir.", cevap: "sag", neden: "Bilgisayar tabanlı yazılımın özelliği." },
            { metin: "Analiz imkânı daha sınırlı ve temeldir.", cevap: "sol", neden: "Web tabanlının sınırlılığı." },
            { metin: "Genel ağ bağlantısı zorunlu değildir.", cevap: "sag", neden: "Web tabanlıda genel ağ şarttır; bilgisayar tabanlıda değil." },
            { metin: "Otomatik güncellenir; birden fazla kullanıcı aynı anda çalışabilir.", cevap: "sol", neden: "Web tabanlının üstünlüğü." }
          ] },
        { tip: "tuzak", metin: "İki yanlış kalıp sık çıkar.", yanlis: "Web tabanlı CBS yalnızca uzmanlar içindir ve lisanslı yazılım ister.", dogru: "Herkesçe kullanılır, kurulum gerekmez. Ama genel ağ şart; analiz imkânı daha sınırlıdır." }
      ]
    },
    {
      baslik: "Kullanım alanları ve sunum biçimleri",
      kisa: "Trafikten afete kadar anlık, güncel bilgi verir.",
      bloklar: [
        { tip: "harita", merkez: "Kullanım alanları", dallar: [
            { baslik: "Ulaşım", alt: "Anlık trafik, kaza, yol çalışması" },
            { baslik: "Afet yönetimi", alt: "Deprem öncesi ve sonrası görüntüyü karşılaştırma; acil durumda konum paylaşımı" },
            { baslik: "Ormancılık", alt: "Orman yangını uyarısı; yangın sonrası arazi örtüsü" },
            { baslik: "Gündelik yaşam", alt: "En yakın eczane, müze, restoran" },
            { baslik: "Planlama ve diğerleri", alt: "Şehir planlama, tarım, turizm, güvenlik, eğitim, ticaret, sağlık" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📖", terim: "Hikâye haritası", tr: "anlatı akışlı harita", tanim: "Harita, metin, fotoğraf ve videoyu tek akışta birleştirir; kullanıcı kaydırarak izler." },
            { ikon: "📚", terim: "Yaşayan atlas", tr: "sürekli güncel atlas", tanim: "Bulutta barındırılan tematik harita ve veri katmanlarını bir araya getirir; gerçek zamanlı veri akışlarıyla zenginleşir." }
          ] }
      ]
    },
    {
      baslik: "Haritadan çıkarım: Göksu Havzası",
      kisa: "Oku, çözümle, çıkarım yap; kanıtsız genelleme yapma.",
      bloklar: [
        { tip: "adimlar", baslik: "Harita ile çalışma", adimlar: [
            { baslik: "Oku", metin: "Başlık, yıl, lejant, ölçek, yön oku ve katmanlar: hangi renk neyi gösteriyor?" },
            { baslik: "Çözümle", metin: "Önce ve sonrayı karşılaştır; en yüksek ve en düşük değeri bul; nedenini ara." },
            { baslik: "Çıkarım yap", metin: "Veriye dayanarak ne olacağını ve ne yapılması gerektiğini yaz." },
            { baslik: "Oluştur", metin: "Resmî veriyi temin et, yükle, katman ekle; sınıf sayısı, renk skalası, lejant, başlık ve yön oku ekle." }
          ] },
        { tip: "grafik", baslik: "Göksu Havzası arazi örtüsü (km², sol sütun 2000, sağ sütun 2020)", xlabel: "Arazi örtüsü", ylabel: "km²", xmax: 6, ymax: 9,
          xticks: [{ v: 1.65, label: "Tarım" }, { v: 4.35, label: "Yapılaşma" }],
          yticks: [{ v: 2, label: "100" }, { v: 4, label: "200" }, { v: 6, label: "300" }, { v: 8, label: "400" }],
          ogeler: [
            { id: "t00", tip: "alan", renk: 1, noktalar: [[0.8, 0], [1.6, 0], [1.6, 0], [0.8, 0]] },
            { id: "t20", tip: "alan", renk: 2, noktalar: [[1.7, 0], [2.5, 0], [2.5, 0], [1.7, 0]] },
            { id: "y00", tip: "alan", renk: 1, noktalar: [[3.5, 0], [4.3, 0], [4.3, 0], [3.5, 0]] },
            { id: "y20", tip: "alan", renk: 2, noktalar: [[4.4, 0], [5.2, 0], [5.2, 0], [4.4, 0]] },
            { id: "lt00", tip: "yazi", x: 1.2, y: 5.7, metin: "263", gizli: true },
            { id: "lt20", tip: "yazi", x: 2.1, y: 4.65, metin: "210", gizli: true },
            { id: "ly00", tip: "yazi", x: 3.9, y: 4.25, metin: "191", gizli: true },
            { id: "ly20", tip: "yazi", x: 4.8, y: 8.5, metin: "402", gizli: true }
          ],
          durumlar: [
            { metin: "2000'de tarım arazisi 263, yapılaşma 191 km².", set: { t00: { noktalar: [[0.8, 0], [1.6, 0], [1.6, 5.26], [0.8, 5.26]] }, y00: { noktalar: [[3.5, 0], [4.3, 0], [4.3, 3.82], [3.5, 3.82]] } }, goster: ["lt00", "ly00"] },
            { metin: "2020'de tarım 210 km²'ye düştü: yaklaşık ==%20 azalış.==", set: { t20: { noktalar: [[1.7, 0], [2.5, 0], [2.5, 4.2], [1.7, 4.2]] } }, goster: ["lt20"] },
            { metin: "Yapılaşma 402 km²'ye çıktı: yaklaşık ==%110 artış.==", set: { y20: { noktalar: [[4.4, 0], [5.2, 0], [5.2, 8.04], [4.4, 8.04]] } }, goster: ["ly20"] }
          ] },
        { tip: "ornek", baslik: "Çıkarım yaz", durum: "2000 ve 2020 arazi örtüsü haritası ile değişim tablosu verildi. Ne yazarsın?",
          adimlar: [
            "Oku: tarım 263→210 km², yapılaşma 191→402 km².",
            "Çözümle: en büyük artış yapılaşmada (+%110); tarım −%20; sulak alandaki seyrek bitki örtüsü 27→12 km² (−%54).",
            "Çıkarım: yerleşme, verimli tarım ve sulak alanlar üzerine yayılmış olabilir."
          ],
          sonuc: "==Model cevap:== 2000'den 2020'ye yapılaşma 191'den 402 km²'ye çıkarken tarım arazisi 263'ten 210 km²'ye düştü. Yerleşmeler büyük olasılıkla verimli tarım ve sulak alanlar üzerine yayılmış; bu, gıda üretimi ve ekosistem için risktir. Koruma alanı ve yapılaşma sınırı planlanmalı." }
      ]
    },
    {
      baslik: "Uygun yer seçimi",
      kisa: "Katmanları çakıştır, ölçüte uyan alanı bul.",
      bloklar: [
        { tip: "adimlar", baslik: "Yer seçimi yöntemi", adimlar: [
            { baslik: "Ölçütleri belirle", metin: "Hangi katmanlar önemli?" },
            { baslik: "Çakıştır", metin: "Katmanları üst üste aç; örtüşmeleri gör." },
            { baslik: "Sorgula", metin: "Ölçüte uyan alanı seç." }
          ] },
        { tip: "ornek", baslik: "Hangi mahalle öncelikli?", durum: "Bir belediyenin ekranında nüfus yoğunluğu, taşkın riski ve okullar katmanları açık. Taşkın riski alanında B mahallesinde 2 numaralı, D mahallesinde 3 numaralı okul var. D'nin yoğunluğu en koyu.",
          adimlar: [
            "Katmanları üst üste açmak çakıştırmadır.",
            "Taşkın riski alanında okulu olan mahalleler: B ve D.",
            "B ile D'den yoğunluğu yüksek olan: D."
          ],
          sonuc: "==D mahallesi== öne çıkar. Öneri: B ve D'deki okullar için tahliye ve erken uyarı planı; yeni okulları risk alanı dışında seçmek." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Web tabanlı CBS: tarayıcıyla, genel ağ üzerinden; bileşenleri kullanıcı, genel ağ, sunucu.",
            "Kritik işlemler sunucuda yapılır; bulut bilişim temeldir.",
            "Her veri bir katmandır; ayrıntılar öz nitelik tablosundadır.",
            "Beş işlem: birleştirme, çakıştırma, sorgulama, genelleştirme, sembolleştirme (B-Ç-S-G-S).",
            "Web: kurulum yok, her yerden erişim, güncel, çoğu ücretsiz; ama genel ağ şart, analiz daha sınırlı.",
            "Harita çalışması: oku, çözümle, çıkarım yap, oluştur.",
            "Çıkarım veriye dayanır; kanıtsız genelleme yapma.",
            "Yer seçimi: ölçütleri belirle, katmanları çakıştır, uyan alanı bul."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir belediye, hastaneleri kırmızı haçla, okulları mavi daireyle gösteriyor. Bu işlem hangisidir?",
      opts: ["Birleştirme", "Çakıştırma", "Sorgulama", "Sembolleştirme"],
      a: 3,
      why: "Veriyi renk ve sembolle göstermek sembolleştirmedir. Sorgulama en çekici yanlış şık: o, ölçüte uyan veriyi seçer, görünümünü değiştirmez." },
    { q: "Web tabanlı CBS ile ilgili aşağıdakilerden hangisi yanlıştır?",
      opts: ["Kullanım için genel ağ bağlantısı gerekir.", "Birden fazla kullanıcı aynı anda çalışabilir.", "Verilerin işlenmesi ve depolanması çoğunlukla kullanıcının bilgisayarında yapılır.", "Mobil cihazlarla da erişilebilir."],
      a: 2,
      why: "Kritik işlemlerin çoğu sunucuda yapılır; kullanıcının bilgisayarına yük binmez. Diğer şıklar doğru özelliklerdir." },
    { q: "Harita uzaklaştırılınca ara sokaklar kalkıp yalnızca ana yollar görünüyor. Yapılan işlem hangisidir?",
      opts: ["Genelleştirme", "Sorgulama", "Birleştirme", "Çakıştırma"],
      a: 0,
      why: "Ölçeğe göre ayrıntıyı azaltıp sadeleştirmek genelleştirmedir. Sorgulama ayrıntıyı azaltmaz, ölçüte uyanları seçer." },
    { q: "Bir ekranda yağış ve eğim katmanları üst üste açılarak heyelan riski yüksek alanlar bulunuyor. Bu işlem ve amacı hangisidir?",
      opts: ["Birleştirme: katmanları tek katmanda toplamak", "Sorgulama: yalnızca sayısal değeri büyük olanı seçmek", "Çakıştırma: katmanları üst üste bindirip örtüşmeyi görmek", "Genelleştirme: ayrıntıyı azaltmak"],
      a: 2,
      why: "Katmanları üst üste açıp örtüşmeyi görmek çakıştırmadır. Birleştirme en çekici yanlış şık: o, verileri tek katmanda toplar; katmanlar ayrı kalıp üst üste açılmaz." },
    { q: "Bir havzada 2000'den 2020'ye yapılaşma 191'den 402 km²'ye çıkmış, tarım arazisi 263'ten 210 km²'ye düşmüştür. Bu veriden en uygun çıkarım hangisidir?",
      opts: ["Tarım arazisi artmış, üretim yükselecektir.", "Yerleşmeler büyük olasılıkla verimli tarım alanları üzerine yayılmıştır; gıda üretimi ve ekosistem riski vardır.", "Havzanın nüfusu azalmıştır.", "Yapılaşma ve tarım aynı oranda artmıştır."],
      a: 1,
      why: "Yapılaşma artarken tarım azalmıştır; çıkarım bu veriye dayanır. Diğer şıklar veriyle çelişir veya veride olmayan bir şey söyler." }
  ]
};
