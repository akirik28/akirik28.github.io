/* Kitora not defteri · hg703 · Kalkınma Ölçütleri
   Kaynak: AP HuG CED Topic 7.3 (SPS-7.C.1–C.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg703",
  amac: "Bu konu bir ülkenin ne kadar kalkındığının nasıl ölçüldüğünü anlatıyor. GDP, GNP ve GNI'yi, sosyal göstergeleri, HDI ve GII'yi öğreneceksin; ayrıca her ölçütün neyi göstermediğini yorumlamayı.",
  bolumler: [
    {
      baslik: "GDP, GNP ve GNI",
      kisa: "GDP sınırlar içinde üretileni, GNP vatandaşların her yerde ürettiğini sayar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🗺️", baslik: "*GDP* (gayrisafi yurt içi hasıla)", maddeler: ["Bir ülkenin sınırları içinde, bir yılda üretilen bütün mal ve hizmetler", "Üreten yabancı da olsa sayılır"] },
          sag: { ikon: "🪪", baslik: "*GNP* (gayrisafi milli hasıla)", maddeler: ["Ülkenin vatandaşlarının ve firmalarının, nerede olursa olsun ürettiği", "Yurt dışında çalışan vatandaşın üretimi de sayılır"] },
          oyun: [
            { metin: "Bir Alman otomobil firması Türkiye'deki fabrikasında üretim yapıyor.", cevap: "sol", neden: "Üretim Türkiye'nin sınırları içinde: Türkiye'nin GDP'sine girer." },
            { metin: "Türk bir inşaat firması Katar'da stadyum yapıyor.", cevap: "sag", neden: "Türk firmasının yurt dışı üretimi: Türkiye'nin GNP'sine girer." },
            { metin: "Bir Fransız otel zincirinin Antalya şubesi konaklama hizmeti satıyor.", cevap: "sol", neden: "Üretim Türkiye sınırları içinde: Türkiye'nin GDP'sine girer." },
            { metin: "Bir Türk bankası Londra şubesinde hizmet satıyor.", cevap: "sag", neden: "Türk firmasının yurt dışı üretimi: Türkiye'nin GNP'sine girer." }
          ] },
        { tip: "ornek", baslik: "GDP'den GNP'ye", durum: "Bir ülkenin GDP'si 100 milyar TL. Bunun 20 milyar TL'sini yabancı sahipli firmalar üretmiş. Ülkenin vatandaşlarının ve firmalarının yurt dışında ürettiği ise 30 milyar TL. GNP kaçtır?",
          adimlar: ["Yabancıların ürettiğini çıkar: 100 − 20 = 80.", "Vatandaşların yurt dışı üretimini ekle: 80 + 30 = 110."],
          sonuc: "GNP = ==110 milyar TL==. Bu ülkenin vatandaşları yurt dışında yurt içindeki yabancılardan daha çok üretmiş; GNP, GDP'den büyük çıktı." },
        { tip: "kavramlar", kartlar: [
            { ikon: "💰", terim: "GNI", tr: "gayrisafi milli gelir", tanim: "Ülkenin vatandaşlarının ve firmalarının yıl içinde elde ettiği toplam gelir. Pratikte GNP ile aynı kavramı anlatır; güncel veri setleri GNI'yı kullanır.", ornek: "Yurt dışındaki işçi dövizi de GNI'ya girer." }
          ] }
      ]
    },
    {
      baslik: "Kişi başı değer ve kayıt dışı ekonomi",
      kisa: "Kişi başı ortalama yaşam düzeyini gösterir ama kayıt dışı üretimi ve eşitsizliği saklar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "GNI ya da GDP", alt: "toplam" }, "÷",
            { t: "Nüfus", alt: "kişi sayısı" }, "=",
            { t: "Kişi başı değer", alt: "*per capita*" }
          ], aciklama: "Toplam değeri nüfusa bölmek büyük ve küçük ülkeleri karşılaştırılabilir kılar. Örnek: 110 milyar TL ÷ 10 milyon kişi = 11.000 TL/kişi." },
        { tip: "ikili", sol: { ikon: "🧾", baslik: "*Formal economy* (resmî ekonomi)", maddeler: ["Kayıtlı, vergisi ödenen, resmî istatistiğe giren işler", "Sigortalı çalışan, kayıtlı şirket"] },
          sag: { ikon: "🧺", baslik: "*Informal economy* (kayıt dışı ekonomi)", maddeler: ["Kayıtsız, vergi ödenmeyen, çoğu zaman sözleşmesiz işler", "Seyyar satıcı, sigortasız çalışan, evde bakım"] },
          oyun: [
            { metin: "Kayıtlı bir bankada çalışan memur.", cevap: "sol", neden: "Resmî kayıtlarda: formal." },
            { metin: "Kapı önünde simit satan, belgesiz seyyar satıcı.", cevap: "sag", neden: "Kayıt dışı: informal." },
            { metin: "Sigortasız çalıştırılan bir terzi çırağı.", cevap: "sag", neden: "Kayıt dışı iş." },
            { metin: "Vergi levhası olan bir market.", cevap: "sol", neden: "Resmî olarak kayıtlı: formal." }
          ] },
        { tip: "tuzak", metin: "Kişi başı değer bir ortalamadır.", yanlis: "Kişi başı GNI yüksekse herkes iyi yaşıyordur.", dogru: "==Ortalama dağılımı göstermez.== Gelirin çok azda toplandığı bir ülkede ortalama yüksek olabilir; bu yüzden *income distribution* (gelir dağılımı, ör. Gini katsayısı) ayrıca bakılır. Kayıt dışı üretim de GDP'de görünmez, yani ölçülen değer gerçeğin altında kalır." }
      ]
    },
    {
      baslik: "Sosyal ve sektörel göstergeler",
      kisa: "Doğurganlık, bebek ölümü, sağlık, okuryazarlık ve sektör yapısı kalkınmayı anlatır.",
      bloklar: [
        { tip: "tablo", baslik: "Kalkınmanın göstergeleri", head: ["Gösterge", "Daha gelişmiş ülkede", "Daha az gelişmiş ülkede"], rows: [
            ["*Fertility rate* (kadın başına doğum)", "Düşük", "Yüksek"],
            ["*Infant mortality rate* (1.000 canlı doğumda bir yaşından önce ölüm)", "Düşük", "Yüksek"],
            ["Sağlık hizmetine erişim", "Geniş", "Sınırlı"],
            ["*Literacy rate* (okuryazarlık oranı)", "Yüksek (yüzde 100'e yakın)", "Düşük"],
            ["İstihdam yapısı", "Çoğunlukla tertiary ve üstü", "Çoğunlukla primary"],
            ["Enerji", "Kişi başı tüketim yüksek; fosil yakıtın yanında yenilenebilir payı da büyüyebilir", "Kişi başı tüketim düşük; odun gibi geleneksel yakıt payı yüksek olabilir"]
          ], vurgu: 0 },
        { tip: "tuzak", metin: "Yüksek rakam her zaman iyi demek değildir.", yanlis: "Doğurganlık ve bebek ölüm oranı yüksekse ülke daha gelişmiştir.", dogru: "==Bu iki oran yükseldikçe gelişmişlik düşer==; okuryazarlık ve sağlık erişimi yükseldikçe gelişmişlik artar. Yönü her göstergede ayrı hatırla." }
      ]
    },
    {
      baslik: "HDI: üç boyutlu bileşik ölçüt",
      kisa: "HDI sağlık, eğitim ve gelir endekslerini birleştirir ve 0–1 arası bir sayı verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📊", terim: "Human Development Index (HDI)", tr: "İnsani Gelişme Endeksi", tanim: "Bir ülkenin gelişmişliğini tek rakamda özetleyen **bileşik** ölçüt (BM, 0–1 arası). Üç boyutu var: uzun ve sağlıklı yaşam (yaşam beklentisi), bilgiye erişim (okullaşma yılları) ve yaşam standardı (kişi başı GNI).", ornek: "1'e yakın değer çok yüksek, 0,550'nin altı düşük insani gelişme sayılır." }
          ] },
        { tip: "grafik", baslik: "Gelir arttıkça sağlık da artar, ama yavaşlayarak (şematik)", xlabel: "Kişi başı gelir", ylabel: "Yaşam beklentisi", xmax: 10, ymax: 10,
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "Genel eğilim", noktalar: [[0.5, 2.0], [1.5, 5.0], [3, 6.8], [5, 7.8], [7.5, 8.4], [9.5, 8.7]] },
            { id: "a", tip: "nokta", x: 0.5, y: 2.0, etiket: "A", kilavuz: true, gizli: true },
            { id: "b", tip: "nokta", x: 1.5, y: 5.0, etiket: "B", kilavuz: true, gizli: true },
            { id: "c", tip: "nokta", x: 7.5, y: 8.4, etiket: "C", kilavuz: true, gizli: true },
            { id: "d", tip: "nokta", x: 9.5, y: 8.7, etiket: "D", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Genel eğilim: ==gelir yükseldikçe ortalama yaşam süresi uzar==, çünkü beslenme, sağlık hizmeti ve temiz su artar." },
            { metin: "Çok yoksul A ülkesinde küçük bir gelir artışı (A → B) yaşam süresini ==büyük ölçüde uzatır==.", goster: ["a", "b"] },
            { metin: "Zengin C ve D arasında gelir farkı büyük olsa da yaşam süresi farkı ==küçüktür==. Bu yüzden HDI sağlığı, eğitimi ve geliri **birlikte** tartar.", goster: ["c", "d"] }
          ] },
        { tip: "formul", parcalar: [
            { t: "HDI" }, "=", { t: "∛", alt: "küpkök" }, "(",
            { t: "Sağlık", alt: "yaşam beklentisi" }, "×",
            { t: "Eğitim", alt: "okullaşma yılları" }, "×",
            { t: "Gelir", alt: "kişi başı GNI" }, ")"
          ], aciklama: "HDI, üç endeksin geometrik ortalamasıdır; 0 ile 1 arasında bir değer verir. Sınavda formülü hesaplamazsın, ama üç boyutu bilmen gerekir." }
      ]
    },
    {
      baslik: "GII: toplumsal cinsiyet eşitsizliği endeksi",
      kisa: "GII kadınların üreme sağlığı, güçlenme ve işgücüne katılımındaki geri kalmışlığı ölçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Gender Inequality Index (GII)", tr: "Toplumsal Cinsiyet Eşitsizliği Endeksi", tanim: "Kadın ile erkek arasındaki eşitsizliği ölçer. Üç boyutu var: **üreme sağlığı**, **güçlenme (empowerment)** ve **işgücü piyasasına katılım**. 0 tam eşitlik, 1 tam eşitsizliktir.", ornek: "Parlamentodaki kadın payı ve kadınların ortaöğretim eğitimi güçlenme boyutuna girer." }
          ] },
        { tip: "tablo", baslik: "GII'nin üç boyutu", head: ["Boyut", "Neye bakar?", "Örnek gösterge"], rows: [
            ["Üreme sağlığı", "Doğum sırasında ve gençlikte risk", "Anne ölümü, ergenlerde doğum oranı"],
            ["Güçlenme", "Siyaset ve eğitimde söz hakkı", "Parlamentodaki kadın payı, ortaöğretim"],
            ["İşgücüne katılım", "Ücretli çalışma", "Kadınların işgücü katılım oranı"]
          ] },
        { tip: "tuzak", metin: "GII'nin yönü HDI'nın tersidir.", yanlis: "GII yüksekse kadın erkek eşitliği yüksektir.", dogru: "==GII ne kadar **yüksekse** eşitsizlik o kadar büyüktür==; HDI'da yüksek değer iyi, GII'da yüksek değer kötü. İkisinin yönü zıttır." }
      ]
    },
    {
      baslik: "Ölçütlerin sınırları",
      kisa: "Hiçbir ölçüt tek başına gerçeği anlatmaz; veri sınırlarını söyleyebilmelisin.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "📉", baslik: "Ortalama eşitsizliği saklar", metin: "Kişi başı GNI ve HDI, ülkenin içindeki bölge ve gelir farklarını göstermez." },
            { ikon: "🧺", baslik: "Kayıt dışı ekonomi", metin: "Resmî GDP, kayıt dışı üretimi saymadığı için gerçek üretimi eksik gösterebilir." },
            { ikon: "🌍", baslik: "Çevre ve mutluluk yok", metin: "HDI doğanın zarar görmesini ya da insanların kendini nasıl hissettiğini ölçmez." },
            { ikon: "🔢", baslik: "Veri kalitesi", metin: "Bazı ülkelerde nüfus sayımı ve istatistik sistemi zayıf olduğu için rakamlar tahminidir; ülkeler arası tanımlar da farklı olabilir." }
          ] },
        { tip: "ornek", baslik: "Harita yorumu", durum: "Bir harita HDI'yı ülke renkleriyle gösteriyor. Neden tek bir ülkenin rengine bakıp o ülkenin her bölgesinde gelişmişlik aynı denemez?",
          adimlar: ["HDI ülke ortalamasıdır.", "Ülke içinde kent ile kırsal, zengin ile yoksul bölgeler arasında fark olabilir.", "Harita bu iç farkı saklar."],
          sonuc: "Haritadaki renk ==ülkeler arası== farkı iyi gösterir ama ==ülke içi== farkı göstermez. Bu, sınavdaki 'veri sınırlılığı' sorusunun cevabıdır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*GDP* sınırlar içinde (kim üretirse üretsin), *GNP* vatandaşların nerede üretirse ürettiği; *GNI* ülkenin vatandaşlarının geliri. Kişi başı değer = toplam ÷ nüfus.",
            "Resmî (*formal*) ekonomi kayıtlıdır; kayıt dışı (*informal*) iş istatistiğe girmez, bu yüzden GDP gerçeğin altında kalabilir.",
            "Düşük doğurganlık, düşük bebek ölümü, geniş sağlık erişimi, yüksek okuryazarlık ve tertiary ağırlıklı istihdam gelişmişliği gösterir.",
            "Gelir dağılımı (ör. Gini) ortalamanın saklayabildiği eşitsizliği gösterir.",
            "*HDI* = sağlık (yaşam beklentisi), eğitim ve gelir (kişi başı GNI) endekslerinin bileşik değeri; 0–1, yüksek iyi.",
            "*GII* = üreme sağlığı, güçlenme ve işgücü katılımı; 0–1, yüksek değer eşitsizlik demektir.",
            "Ortalamalar iç farkı, kayıt dışı üretimi ve veri kalitesi sorunlarını saklar; ölçütlerin sınırlarını yorumlamayı bil."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Türkiye'de bir Japon otomobil firmasının fabrikası yıl boyunca 20 milyar TL'lik üretim yapıyor. Bu üretim hangi ölçütlere nasıl yansır?",
      opts: ["Türkiye'nin GDP'sine girer; Japonya'nın GNP'sine girer", "Yalnızca Japonya'nın GDP'sine girer", "Türkiye'nin GNP'sine girer; Japonya'nın GDP'sine girer", "Hiçbir ülkenin GDP veya GNP'sine girmez"],
      a: 0,
      why: "GDP üretimin yapıldığı yere (Türkiye), GNP üreten firmanın vatandaşlığına (Japonya) göre sayılır. C şıkkı en çekici yanlış: GDP ile GNP'yi ters kuruyor." },
    { q: "Tabloya göre A ve B ülkeleri hakkında hangi sonuç doğrudur?",
      fig: { type: "table", caption: "İki ülke", head: ["Gösterge", "A", "B"], rows: [["Kişi başı GNI (bin $)", 40, 8], ["Okuryazarlık (%)", 99, 62], ["Bebek ölüm oranı (1.000'de)", 4, 38], ["Doğurganlık (kadın başına)", 1.6, 4.5]] },
      opts: ["B ülkesi daha gelişmiştir; çünkü doğurganlığı yüksektir", "A ülkesi daha gelişmiş görünür; gelir, okuryazarlık, bebek ölümü ve doğurganlık bunu destekler", "İki ülke aynı gelişmişlik düzeyindedir", "Bebek ölüm oranı yüksek olan ülke daha gelişmiştir"],
      a: 1,
      why: "A'da gelir ve okuryazarlık yüksek, bebek ölümü ve doğurganlık düşük: bunların hepsi daha yüksek gelişmişlik işaretidir. A şıkkı en çekici yanlış: doğurganlık yüksek olunca gelişmişlik azalır." },
    { q: "HDI hakkında hangisi doğrudur?",
      opts: ["Yalnızca kişi başı GDP'yi ölçer", "Kadın ile erkek arasındaki eşitsizliği ölçer", "Sağlık, eğitim ve gelir boyutlarını birleştiren bileşik bir ölçüttür", "Ülke içindeki gelir dağılımını tek başına gösterir"],
      a: 2,
      why: "HDI sağlık (yaşam beklentisi), eğitim ve gelir (kişi başı GNI) endekslerini birleştirir. D şıkkı en çekici yanlış: HDI ortalama bir ölçüttür, ülke içi dağılımı göstermez." },
    { q: "Bir ülkede kadınların parlamentodaki payı çok düşük, ortaöğretime devam oranları düşük ve ücretli işgücüne katılım oranı düşüktür. Bu ülkenin GII değeri nasıl olur?",
      opts: ["Düşük; çünkü kadınlar geride kalmıştır", "Yüksek; çünkü GII'da yüksek değer daha büyük eşitsizlik demektir", "Sıfır; çünkü GII yalnızca gelire bakar", "Belirsiz; çünkü GII bu üç boyutu içermez"],
      a: 1,
      why: "GII üreme sağlığı, güçlenme ve işgücüne katılımı ölçer; kadınlar bu boyutlarda geride kaldıkça değer yükselir. A şıkkı en çekici yanlış: HDI'daki 'yüksek iyi' mantığını GII'ya uyguluyor." },
    { q: "Bir araştırmacı yalnızca ülkelerin kişi başı GDP verisine bakarak bir kıtanın kalkınma haritasını çiziyor. Bu veri kullanımı için en önemli sınırlılık hangisidir?",
      opts: ["Kişi başı GDP, sağlık ve eğitim gibi boyutları hiç ölçmez ve ülke içi eşitsizliği ile kayıt dışı üretimi göstermez", "Kişi başı GDP hiçbir zaman nüfusa bölünmez", "Kişi başı GDP yalnızca vatandaşların gelirini sayar", "Kişi başı GDP'yi yalnızca Birleşmiş Milletler hesaplar"],
      a: 0,
      why: "Tek bir gelir ölçütü sağlık, eğitim ve eşitsizliği; kayıt dışı üretimi de gösteremez. C şıkkı en çekici yanlış: vatandaş geliri GNI ve GNP'nin konusudur; GDP sınırlar içindeki üretimi sayar." }
  ]
};
