/* Tarih 11 · 1. yazılı cep kiti · veri
   Kapsam kaynağı: 11. sınıf Tarih öğretmenlerinin Classroom'da paylaştığı Senaryo 6 tablosu ve 1. sınav öz değerlendirme çizelgesi
   (Drive 1aUF_OjcgwKa2Sj8rL_1fMElKF020P6Br). Ek okumalar: 18. yy Osmanlı makalesi (Drive 19dnOXJA2V0RJpIep80xZVldWhpzng9Ng),
   Lale Devri ödevi / MEB 11. sınıf Tarih ders kitabı Ünite 1 sayfaları (Drive 1hqRwtsn_YHXm03x3Feou6i7hRbVjoA9E).
   Olgular MEB ders kitabı ve genel kaynaklarla karşılaştırıldı. Metinler kendi cümlelerimiz; kaynaklardan uzun alıntı yok.
   MC biçimi: o[0] doğru şık (arayüz şıkları karıştırır), e = Türkçe açıklama. c = öğrenme çıktısı ("1.1", "1.2", "17" = 17. yy tekrar). */

const SINAV={tarih:"2026-11-04",gun:"4 Kasım 2026 Çarşamba"};

/* Senaryo 6 (1. dönem 1. ortak yazılı) */
const SENARYO=[
 {k:"TAR.11.1.1",t:"Osmanlı Devleti'nin 1683–1789 yılları arasındaki siyasi ve askerî mücadelelerini sonuçları açısından değerlendirebilme",n:3},
 {k:"TAR.11.1.2",t:"Lale Devri'nde Osmanlı devlet ve toplum hayatında meydana gelen değişimi tarihsel bağlamı içerisinde yorumlayabilme",n:3},
 {k:"TAR.11.1.3",t:"1755 Lizbon ve 1766 İstanbul depremleri",n:0},
 {k:"TAR.11.1.4",t:"Sanayi Devrimi",n:0}
];

/* Öz değerlendirme çizelgesi → kendini kontrol listesi (go = ilgili sekme) */
const RUBRIK=[
 {t:"Osmanlı Devleti'nin 17. yüzyıldaki genel durumunu, dış politikasını ve siyasi yapısını açıklayabilirim.",go:"savas"},
 {t:"17. yüzyıldaki siyasi, askerî, ekonomik, eğitim ve sosyal alanlardaki bozulmaların nedenlerini ve sonuçlarını açıklayabilirim.",go:"savas"},
 {t:"17. yüzyılda Osmanlı'nın mücadele ettiği devletleri, mücadele alanlarını ve nedenlerini analiz edebilirim.",go:"savas"},
 {t:"17. yüzyıl ıslahatlarının genel özelliklerini bilirim.",go:"savas"},
 {t:"18. yüzyılda Osmanlı'nın genel durumunu, diplomasinin önemini, büyük güçlerin politikalarını ve değişen güç dengelerini açıklayabilirim.",go:"savas"},
 {t:"II. Viyana Kuşatması ve Karlofça Antlaşması'nın Osmanlı üzerindeki etkilerini ve önemini değerlendirebilirim.",go:"savas"},
 {t:"Rusya'nın sıcak denizlere inme politikasını açıklayıp sonraki olaylarla ilişkilendirebilirim.",go:"savas"},
 {t:"Avusturya ve Rusya savaşlarının nedenlerini, sonuçlarını ve antlaşmalarını açıklayabilirim (Prut, Pasarofça, Belgrad, Küçük Kaynarca).",go:"savas"},
 {t:"18. yüzyıl Osmanlı–İran ilişkilerini, savaşlarını ve antlaşmalarını bilirim.",go:"savas"},
 {t:"Prut Savaşı'nı ve Prut Antlaşması'nı açıklayabilirim.",go:"savas"},
 {t:"Çeşme Baskını'nın (1770) Osmanlı donanmasına ve askerî gücüne etkilerini açıklayabilirim.",go:"savas"},
 {t:"Küçük Kaynarca Antlaşması'nın nedenlerini, önemini ve Osmanlı ile Rusya açısından sonuçlarını analiz edebilirim.",go:"savas"},
 {t:"Lale Devri'nin ortaya çıkış nedenlerini, sonuçlarını ve önemini açıklayabilirim.",go:"lale"},
 {t:"Lale Devri'nin devlet ve toplum hayatına etkilerini açıklayabilirim.",go:"lale"},
 {t:"Ders kitabı, paylaşılan belgeler, haritalar ve görselleri konuyla ilişkilendirerek yorumlayabilirim.",go:"savas"},
 {t:"Derste öğrenilen olayları kronolojik olarak sıralayabilirim.",go:"krono"}
];

/* Kronoloji: yıllar birbirinden farklı (sıralama oyunu için). c: hangi çıktıya ait */
const KRONO=[
 {y:1683,t:"II. Viyana Kuşatması başarısız oldu.",c:"1.1",n:"Osmanlı'nın Orta Avrupa'daki ilerleyişi kesin olarak durdu."},
 {y:1684,t:"Kutsal İttifak kuruldu (Avusturya, Lehistan, Venedik, Papalık; Rusya 1686'da katıldı).",c:"1.1",n:"Osmanlı aynı anda birçok cephede savaşmak zorunda kaldı."},
 {y:1699,t:"Karlofça Antlaşması imzalandı.",c:"1.1",n:"İlk büyük toprak kaybı; Osmanlı Avrupa'da savunmaya geçti."},
 {y:1700,t:"Rusya ile İstanbul Antlaşması: Azak Rusya'ya bırakıldı.",c:"1.1",n:"Rusya Azak Denizi kıyısına ulaştı."},
 {y:1709,t:"Poltava'da yenilen İsveç kralı XII. Karl Osmanlı'ya sığındı.",c:"1.1",n:"Osmanlı–Rus gerginliği arttı, Prut Savaşı'na giden yol açıldı."},
 {y:1711,t:"Prut Savaşı ve Prut Antlaşması.",c:"1.1",n:"Azak geri alındı; Rus ordusu kuşatıldığı hâlde sınırlı kazançla yetinildi."},
 {y:1715,t:"Mora, Venedik'ten geri alındı.",c:"1.1",n:"Karlofça'da kaybedilen bir toprak geri kazanıldı."},
 {y:1716,t:"Avusturya savaşa girdi; Petervaradin yenilgisi.",c:"1.1",n:"Avusturya, Karlofça'nın garantörü olduğunu ileri sürdü."},
 {y:1718,t:"Pasarofça Antlaşması imzalandı; Lale Devri başladı.",c:"1.1",n:"Belgrad kaybedildi; kaybedilenleri geri alma politikası bırakıldı."},
 {y:1720,t:"Yirmisekiz Mehmed Çelebi geçici elçi olarak Paris'e gönderildi.",c:"1.2",n:"Avrupa yerinde gözlendi; gözlemler Sefaretname'de toplandı."},
 {y:1724,t:"Osmanlı ile Rusya, İran'ın kuzeybatı topraklarını paylaşan İstanbul Antlaşması'nı imzaladı.",c:"1.1",n:"Safevi Devleti'nin çöküşü doğuda yeni bir rekabet doğurdu."},
 {y:1727,t:"İbrahim Müteferrika'nın matbaasına izin verildi.",c:"1.2",n:"Dinî kitaplar dışındaki eserleri basma izni verildi; ilk kitap 1729'da çıktı."},
 {y:1729,t:"Matbaada basılan ilk kitap: Vankulu Lügati.",c:"1.2",n:"Bilginin daha hızlı ve ucuz yayılmasının yolu açıldı."},
 {y:1730,t:"Patrona Halil İsyanı; Lale Devri sona erdi.",c:"1.2",n:"III. Ahmed tahttan indirildi, Damat İbrahim Paşa öldürüldü."},
 {y:1739,t:"Belgrad Antlaşması imzalandı.",c:"1.1",n:"Belgrad geri alındı; Rusya'nın Karadeniz'e çıkışı bir süre engellendi."},
 {y:1740,t:"Fransa'ya kapitülasyonlar sürekli hâle getirildi.",c:"1.1",n:"Belgrad'daki arabuluculuğun karşılığı; ekonomik bağımlılığa zemin."},
 {y:1746,t:"İran ile Kerden Antlaşması imzalandı.",c:"1.1",n:"Sınır, 1639 Kasr-ı Şirin hattına döndü."},
 {y:1768,t:"Osmanlı–Rus Savaşı başladı.",c:"1.1",n:"Rusya'nın Lehistan'a müdahalesi ve sınır ihlali savaşı başlattı."},
 {y:1770,t:"Çeşme Baskını: Osmanlı donanması yakıldı.",c:"1.1",n:"Osmanlı deniz gücü çöktü; Rusya Akdeniz'e çıkabildiğini gösterdi."},
 {y:1774,t:"Küçük Kaynarca Antlaşması imzalandı.",c:"1.1",n:"Kırım bağımsız oldu; Karadeniz Osmanlı gölü olmaktan çıktı."},
 {y:1779,t:"Aynalıkavak Tenkihnamesi imzalandı.",c:"1.1",n:"Kırım'ın bağımsızlığı yeniden onaylandı, Rus etkisi arttı."},
 {y:1783,t:"Rusya Kırım'ı ilhak etti.",c:"1.1",n:"Halkı Müslüman bir toprak doğrudan Rusya'ya geçti."},
 {y:1787,t:"Osmanlı, Kırım'ı geri almak için Rusya'ya savaş açtı.",c:"1.1",n:"Savaş 1789 sonrasına uzandı (sonucu ünite dışında)."},
 {y:1789,t:"III. Selim tahta çıktı; Fransız İhtilali başladı.",c:"1.1",n:"Ünitenin bitiş yılı."}
];

/* Antlaşma kartları */
const ANT=[
 {id:"karlofca",ad:"Karlofça Antlaşması",y:1699,taraf:"Osmanlı ↔ Avusturya, Venedik, Lehistan (Rusya ile ayrıca 1700 İstanbul Antlaşması)",donem:"II. Mustafa",
  baglam:"II. Viyana Kuşatması'nın (1683) başarısızlığından sonra kurulan Kutsal İttifak'la 16 yıl süren savaşlar; 1697 Zenta yenilgisi. İngiltere ve Hollanda arabuluculuk yaptı.",
  madde:["Macaristan ve Erdel (Transilvanya) Avusturya'ya bırakıldı; Tımışvar (Temeşvar) Osmanlı'da kaldı.","Mora ve Dalmaçya kıyıları Venedik'e bırakıldı.","Podolya ve Ukrayna Lehistan'a bırakıldı."],
  sonuc:"Osmanlı ilk kez geniş topraklar kaybetti ve Avrupa'da savunmaya geçti. Orta Avrupa'daki üstünlüğü sona erdi. 18. yüzyılın başında kaybedilenleri geri alma politikası izlendi.",
  durum:"kayip"},
 {id:"istanbul1700",ad:"İstanbul Antlaşması",y:1700,taraf:"Osmanlı ↔ Rusya",donem:"II. Mustafa",
  baglam:"Karlofça görüşmelerinde Rusya ile yalnız ateşkes yapılmıştı; barış bu antlaşmayla kuruldu.",
  madde:["Azak Kalesi ve çevresi Rusya'ya bırakıldı.","Rusya'nın Kırım hanına ödediği yıllık vergi kaldırıldı.","Rusya, İstanbul'da elçi bulundurma hakkı elde etti."],
  sonuc:"Rusya, Azak Denizi kıyısına yerleşerek Karadeniz'e ulaşma yolunda ilk önemli adımı attı.",
  durum:"kayip"},
 {id:"prut",ad:"Prut Antlaşması",y:1711,taraf:"Osmanlı ↔ Rusya",donem:"III. Ahmed · Sadrazam Baltacı Mehmed Paşa · Çar I. Petro",
  baglam:"1709 Poltava'da Rusya'ya yenilen İsveç kralı XII. Karl Osmanlı'ya sığındı. Rusya'nın sınır ihlalleri üzerine savaş açıldı; Rus ordusu Prut Nehri kıyısında kuşatıldı.",
  madde:["Azak Kalesi Osmanlı'ya geri verilecek.","Rusya, İstanbul'da sürekli elçi bulundurmayacak.","Rusya, Lehistan'ın ve Kırım'a bağlı Kazakların işlerine karışmayacak.","İsveç kralı XII. Karl ülkesine serbestçe dönebilecek."],
  sonuc:"Karlofça'dan sonraki ilk önemli kazanç: Azak geri alındı. Ancak kuşatılan Rus ordusu karşısında daha ağır şartlar istenmedi; Rusya kalıcı biçimde zayıflatılamadı. Sınırlar 1713 Edirne Antlaşması ile kesinleşti.",
  durum:"kazanc"},
 {id:"pasarofca",ad:"Pasarofça Antlaşması",y:1718,taraf:"Osmanlı ↔ Avusturya ve Venedik",donem:"III. Ahmed · Sadrazam Nevşehirli Damat İbrahim Paşa",
  baglam:"Osmanlı 1715'te Mora'yı Venedik'ten geri aldı. Avusturya, Karlofça'nın garantörü olduğunu söyleyerek 1716'da savaşa girdi; Petervaradin yenilgisinden sonra Temeşvar (1716) ve Belgrad (1717) düştü. İngiltere ve Hollanda arabuluculuk yaptı.",
  madde:["Belgrad, Kuzey Sırbistan, Temeşvar (Banat) ve Küçük Eflak Avusturya'ya bırakıldı.","Mora Osmanlı'da kaldı; Venedik Dalmaçya kıyısında bazı yerler aldı.","Avusturya'ya ayrı bir antlaşmayla ticari kolaylıklar tanındı."],
  sonuc:"Kaybedilen toprakları geri alma politikası bırakıldı; Avrupa ile barışı koruma dönemi başladı. Batı'nın üstünlüğünün kabul edilmesi Lale Devri'ni başlattı.",
  durum:"kayip"},
 {id:"belgrad",ad:"Belgrad Antlaşması",y:1739,taraf:"Osmanlı ↔ Avusturya ve Rusya",donem:"I. Mahmud",
  baglam:"Rusya 1736'da Kırım'a ve Azak'a saldırdı; Avusturya 1737'de Rusya'nın yanında savaşa girdi. Osmanlı Avusturya'ya karşı başarı kazandı. Fransa arabuluculuk yaptı. Rusya ile barış ayrı bir metinle yapıldı (Niş, 1739); ders kitapları ikisini birlikte “Belgrad Antlaşması” diye anlatır.",
  madde:["Belgrad, Kuzey Sırbistan ve Küçük Eflak Osmanlı'ya geri verildi.","Azak Rusya'da kalacak, ancak kalesinin surları yıkılacak ve çevresi askerden arındırılacak.","Rusya Karadeniz'de savaş ve ticaret gemisi bulunduramayacak."],
  sonuc:"18. yüzyılda Osmanlı'nın kazançlı çıktığı son büyük antlaşma. Karadeniz bir süre daha Osmanlı denetiminde kaldı. Arabuluculuğun karşılığında 1740'ta Fransa'ya kapitülasyonlar sürekli hâle getirildi. Ardından gelen uzun barış (1739–1768) orduyu yenileme fırsatı iyi değerlendirilmeden geçti.",
  durum:"kazanc"},
 {id:"kerden",ad:"Kerden Antlaşması",y:1746,taraf:"Osmanlı ↔ İran (Nadir Şah)",donem:"I. Mahmud",
  baglam:"Safevi Devleti'nin çöküşünden sonra Osmanlı batı İran'a ve Kafkasya'ya girdi; Nadir Şah bu toprakları geri almak için uzun savaşlar yaptı.",
  madde:["Sınır 1639 Kasr-ı Şirin Antlaşması'ndaki gibi kabul edildi.","Hacıların güvenliği ve esirlerin değişimi düzenlendi.","Nadir Şah, Caferîliğin beşinci mezhep olarak tanınması isteğinden vazgeçti."],
  sonuc:"Doğu sınırı uzun süre sakinleşti. İran savaşları Osmanlı'nın insan gücünü ve hazinesini yıprattı.",
  durum:"denge"},
 {id:"kaynarca",ad:"Küçük Kaynarca Antlaşması",y:1774,taraf:"Osmanlı ↔ Rusya (II. Katerina)",donem:"I. Abdülhamid · Sadrazam Muhsinzade Mehmed Paşa",
  baglam:"Rusya'nın Lehistan'a müdahalesi ve sınır ihlali üzerine 1768'de savaş başladı. 1770 Çeşme Baskını'nda donanma yakıldı, Kırım işgal edildi; 1774 Kozluca yenilgisi barışı zorunlu kıldı.",
  madde:["Kırım Hanlığı siyasi bakımdan bağımsız oldu; dinî bakımdan halifeye bağlı kaldı.","Kerç, Yenikale, Kılburun ve Azak Rusya'ya bırakıldı.","Rus ticaret gemileri Karadeniz'de ve Boğazlarda serbestçe dolaşabilecek.","Rusya İstanbul'da daimi elçi, istediği yerlerde konsolos bulundurabilecek; Rus tüccarlarına kapitülasyonlar tanındı.","Rusya, Ortodoks halk adına Osmanlı nezdinde söz hakkı iddia edebilecek.","Osmanlı Rusya'ya savaş tazminatı ödeyecek; Eflak ve Boğdan Osmanlı'ya geri verildi."],
  sonuc:"Halkı Müslüman olan bir toprak ilk kez Osmanlı'dan ayrıldı. Osmanlı ilk kez savaş tazminatı ödedi. Halifelik, Kırım ile bağı korumak için ilk kez bir antlaşmada siyasi araç olarak kullanıldı. Karadeniz Osmanlı gölü olmaktan çıktı. Ortodokslarla ilgili madde Rusya'nın iç işlerine karışmasına zemin hazırladı. 1783'te Rusya Kırım'ı ilhak etti.",
  durum:"kayip"}
];

/* Diğer konu kartları (savaşlar sekmesi) */
const KART=[
 {h:"18. yüzyılda genel durum",p:["Yüzyılın başında hedef, Karlofça'da kaybedilen toprakları geri almaktı (Prut 1711, Mora 1715).","Pasarofça'dan (1718) sonra Avrupa ile barışı koruma ve denge politikası öne çıktı.","Küçük Kaynarca'dan (1774) sonra amaç, kalan toprakları korumak oldu.","Ordu teknoloji ve eğitimde Avrupa'nın gerisinde kaldı; ıslahatlar Batı örnek alınarak yapılmaya başlandı."]},
 {h:"Diplomasinin önemi ve güç dengeleri",p:["Askerî güç tek başına yetmeyince Osmanlı diplomasiye ve arabuluculara başvurdu: Karlofça ve Pasarofça'da İngiltere ile Hollanda, Belgrad'da Fransa.","Avrupa'da Rusya (I. Petro'dan sonra) ve Prusya yükseldi; Avusturya Orta Avrupa'da güçlendi.","İngiltere ve Fransa sömürge ve ticaret rekabeti içindeydi; ikisi de Osmanlı pazarında ayrıcalık istiyordu.","Osmanlı, büyük güçlerin rekabetinden yararlanarak varlığını sürdürmeye çalıştı (denge politikası)."]},
 {h:"Rusya'nın sıcak denizlere inme politikası",p:["Hedef: donmayan denizlere, yani Karadeniz'e, Boğazlara ve Akdeniz'e ulaşmak. I. Petro döneminden itibaren temel dış politika oldu.","Adımlar: Azak (1700) → Prut'ta geri çekilme (1711) → Belgrad'da sınırlanma (1739) → Küçük Kaynarca ile Karadeniz ve Boğazlarda ticaret serbestliği (1774) → Kırım'ın ilhakı (1783).","Araçlar: savaş, Kırım üzerinde baskı, Ortodoks halkı koruma iddiası.","Bu politika 19. yüzyılda Boğazlar sorunu ve Balkanlardaki gelişmelerle sürdü (ünite dışı, bağlantı için)."]},
 {h:"Osmanlı–İran ilişkileri (18. yy)",p:["1722'de Afganlar İsfahan'ı aldı, Safevi Devleti çöktü; Rusya Hazar kıyılarına indi.","Osmanlı Kafkasya'ya ve batı İran'a girdi (Tiflis, Revan, Tebriz). 1724 İstanbul Antlaşması ile Osmanlı ve Rusya bu bölgeleri paylaştı.","Nadir (sonra Nadir Şah) 1730'da Tebriz ve Hemedan'ı geri aldı; bu haberler Patrona Halil İsyanı'nı tetikledi.","Uzun savaşlar 1746 Kerden Antlaşması ile bitti; sınır 1639 hattına döndü."]},
 {h:"Çeşme Baskını (1770)",p:["Rus Baltık donanması, İngiliz subaylarının da görev aldığı bir filoyla Avrupa'yı dolaşıp Cebelitarık'tan Akdeniz'e geçti.","Mora'da Rumları ayaklandırmaya çalıştı; ardından Çeşme limanında toplanmış Osmanlı donanmasını ateşe verdi.","Sonuç: Osmanlı donanması büyük ölçüde yok oldu, Ege ve Akdeniz savunması zayıfladı.","Deniz subayı yetiştirmek için Mühendishane-i Bahrî-i Hümâyûn kuruldu (1773'te başlayan dersler, 1775'te okul).","Rusya, Karadeniz dışından bile Osmanlı'yı vurabildiğini gösterdi; yenilgiler Küçük Kaynarca'ya götürdü."]}
];

/* 17. yüzyıl hızlı tekrar (çizelgede var; Senaryo 6 sorularında doğrudan çıktı değil) */
const YY17=[
 {h:"Genel durum ve dış politika",p:["Avusturya: 1606 Zitvatorok ile Avusturya hükümdarı protokolde Osmanlı padişahına eşit sayıldı.","İran: 1639 Kasr-ı Şirin ile Bağdat Osmanlı'da kaldı; sınır büyük ölçüde bugünkü Türkiye–İran sınırına yakın çizildi.","Venedik: Girit 1669'da alındı. Lehistan: 1672 Bucaş ile Podolya alındı; Osmanlı batıda en geniş sınırlara ulaştı.","Rusya: 1681 Bahçesaray, iki devlet arasındaki ilk antlaşma. 1683 II. Viyana Kuşatması ile dönem kapandı."]},
 {h:"Bozulmanın nedenleri",p:["Siyasi: veraset sisteminde ekberiyet (en yaşlı hanedan üyesi) usulüne geçiş, şehzadelerin sancağa çıkarılmayıp sarayda yetişmesi, sık sadrazam değişimi.","Askerî: yeniçeri sayısının artıp disiplinin bozulması, tımar sisteminin zayıflaması.","Ekonomik: coğrafi keşiflerle ticaret yollarının önem kaybetmesi, Amerika'dan gelen değerli madenlerin yol açtığı enflasyon, iltizamın yaygınlaşması, uzun savaşlar.","Toplumsal ve eğitim: Celali isyanları, medreselerde pozitif bilimlerin ihmal edilmesi."]},
 {h:"17. yüzyıl ıslahatları",p:["Kuyucu Murad Paşa (Celali isyanlarını sert yöntemlerle bastırdı), II. Osman (Yeniçeri Ocağı'nı kaldırmayı düşündü), IV. Murad (sert ve baskıcı düzen), Tarhuncu Ahmed Paşa (denk bütçe), Köprülüler (şartlı sadrazamlık, otoriteyi güçlendirme).","Genel özellikler: kişilere bağlıydı ve kalıcı olmadı; çoğu baskı ve şiddetle uygulandı; Batı örnek alınmadı, 'eski düzene dönme' amaçlandı; bozulmanın nedenlerine değil görünen sonuçlarına yönelikti."]}
];

/* Eşleştirme: madde → antlaşma id */
const ESLE=[
 {m:"Macaristan ve Erdel Avusturya'ya bırakıldı; Tımışvar Osmanlı'da kaldı.",a:"karlofca"},
 {m:"Podolya ve Ukrayna Lehistan'a bırakıldı.",a:"karlofca"},
 {m:"Rusya'nın Kırım hanına ödediği yıllık vergi kaldırıldı; Azak Rusya'ya geçti.",a:"istanbul1700"},
 {m:"Azak geri alındı; Rusya İstanbul'da sürekli elçi bulunduramayacaktı.",a:"prut"},
 {m:"İsveç kralı XII. Karl ülkesine serbestçe dönebilecekti.",a:"prut"},
 {m:"Belgrad, Temeşvar ve Küçük Eflak Avusturya'ya bırakıldı; Mora Osmanlı'da kaldı.",a:"pasarofca"},
 {m:"Fransa'nın arabuluculuğuyla Belgrad Osmanlı'ya geri döndü.",a:"belgrad"},
 {m:"Azak Kalesi yıkılacak; Rusya Karadeniz'de savaş ve ticaret gemisi bulunduramayacaktı.",a:"belgrad"},
 {m:"Osmanlı–İran sınırı 1639 Kasr-ı Şirin hattına döndü.",a:"kerden"},
 {m:"Kırım siyasi bakımdan bağımsız oldu, dinî bakımdan halifeye bağlı kaldı.",a:"kaynarca"},
 {m:"Osmanlı ilk kez savaş tazminatı ödemeyi kabul etti.",a:"kaynarca"},
 {m:"Rus ticaret gemileri Boğazlardan serbestçe geçebilecekti.",a:"kaynarca"}
];

/* Harita (şematik): lon/lat → SVG; n = numara (soru için), ad gösterilmez (İstanbul hariç) */
const HARITA_NOKTA=[
 {n:1,ad:"Viyana",lon:16.37,lat:48.21},
 {n:2,ad:"Belgrad",lon:20.46,lat:44.82},
 {n:3,ad:"Mora",lon:22.2,lat:37.55},
 {n:4,ad:"Azak",lon:39.42,lat:47.11},
 {n:5,ad:"Kırım",lon:34.1,lat:45.3},
 {n:6,ad:"Çeşme",lon:26.3,lat:38.32},
 {n:7,ad:"Prut kıyısı",lon:28.0,lat:47.0},
 {n:0,ad:"İstanbul",lon:28.98,lat:41.01}
];
const HARITA_SORU=[
 {q:"1683'te kuşatılan; kuşatmanın başarısızlığı Kutsal İttifak'ın kurulmasına yol açtı.",a:1,e:"Viyana. II. Viyana Kuşatması (1683) Merzifonlu Kara Mustafa Paşa komutasında başarısız oldu."},
 {q:"Pasarofça (1718) ile Avusturya'ya bırakıldı, Belgrad Antlaşması (1739) ile geri alındı.",a:2,e:"Belgrad. Antlaşma da adını bu şehirden aldı."},
 {q:"Karlofça (1699) ile Venedik'e bırakıldı, 1715'te geri alındı; Pasarofça'da Osmanlı'da kaldı.",a:3,e:"Mora Yarımadası."},
 {q:"1700'de Rusya'ya bırakıldı, Prut Antlaşması (1711) ile geri alındı.",a:4,e:"Azak Kalesi, Don Nehri'nin Azak Denizi'ne döküldüğü yerde."},
 {q:"Küçük Kaynarca (1774) ile siyasi bakımdan bağımsız oldu, 1783'te Rusya ilhak etti.",a:5,e:"Kırım Yarımadası (Kırım Hanlığı)."},
 {q:"1770'te Osmanlı donanmasının Rus donanması tarafından yakıldığı yer.",a:6,e:"Çeşme. Rus donanması Baltık'tan Akdeniz'e dolaşarak gelmişti."},
 {q:"1711'de Baltacı Mehmed Paşa'nın Rus ordusunu kuşattığı nehir kıyısı.",a:7,e:"Prut Nehri, bugünkü Romanya ile Moldova arasında."}
];

/* Lale Devri */
const LALE={
 neden:[
  "Pasarofça (1718) yenilgisi, Avrupa'nın askerî ve teknolojik üstünlüğünü açıkça gösterdi.",
  "III. Ahmed ve Sadrazam Nevşehirli Damat İbrahim Paşa, kaybedilenleri geri alma yerine barışı koruma politikasını seçti.",
  "Barış ortamı, Avrupa'yı tanıma ve ondan yararlanma fırsatı verdi; Avrupa'daki değişimlere uyma gereği ilk kez kurumsal düzeyde kabul edildi.",
  "Yönetimde askerî kesimin etkisi azaldı, kalem ehli (bürokratlar) önem kazandı."
 ],
 yenilik:[
  {a:"Diplomasi",i:"Paris, Viyana, Moskova ve Lehistan'a geçici elçiler gönderildi. Yirmisekiz Mehmed Çelebi Paris'te gördüklerini Sefaretname'de anlattı.",x:"Sürekli elçilikler III. Selim döneminde açıldı (ünite sonrası)."},
  {a:"Bilgi ve kültür",i:"İbrahim Müteferrika ve Said Efendi'nin matbaası (izin 1727, ilk kitap Vankulu Lügati 1729). Dinî kitaplar basılmadı. Tercüme Heyeti kuruldu, kütüphaneler açıldı.",x:"Osmanlı topraklarındaki ilk matbaa değildir; azınlıklar daha önce matbaa kurmuştu. İlk Türk matbaasıdır (Arap harfleriyle Türkçe eser basan ilk matbaa)."},
  {a:"Şehir ve sağlık",i:"İtfaiye görevi gören Tulumbacı Ocağı kuruldu. Halk arasında bilinen çiçek aşılaması dikkat çekti ve yaygınlaştı.",x:"Yeniliklerin gündelik kent hayatına dokunduğu alan."},
  {a:"Üretim",i:"İstanbul'da çini atölyesi kuruldu, İznik ve Kütahya atölyeleri yenilendi; kumaş (çuha) atölyesi açıldı. Lale Devri'nden sonra, 1740'ların ortasında Müteferrika'nın girişimiyle Yalova'da kâğıt imalathanesi kuruldu.",x:"Amaç yerli üretimi canlandırmak."},
  {a:"Mimari ve sanat",i:"Kâğıthane'de Sadabad Kasrı ve bahçeleri, III. Ahmed Çeşmesi; lale ve çiçek motifleri. Avrupa süsleme anlayışının etkisi başladı; barok ve rokoko etkisi sonraki yıllarda belirginleşti. Nedim'in şiirleri ve Levni'nin minyatürleri dönemi yansıttı.",x:"Sadabad, Versailles gibi Avrupa saray bahçeleriyle karşılaştırılır."},
  {a:"Gündelik hayat",i:"Çırağan eğlenceleri, helva sohbetleri, mesire yerleri; lale yetiştiriciliği ve ticareti. Koltuk, iskemle, duvar resimleri ve portreler yaygınlaştı.",x:"Lüks tüketim saray çevresinde arttı."}
 ],
 toplum:[
  "İstanbul'da kentli bir yaşam kültürü oluştu: eğlence, mesire, giyim ve ev eşyasında yeni alışkanlıklar.",
  "Etkileşim karşılıklıydı: Avrupa'da Osmanlı kıyafetleri ve süslemeleri moda oldu (Turquerie); İngiliz elçisinin eşi Lady Mary Wortley Montagu İstanbul'da gördüğü çiçek aşılamasını İngiltere'de tanıttı.",
  "Etkileşimi taşıyanlar: saray erkânı ve bürokratlar, elçiler, Galata ve İzmir gibi ticaret merkezlerindeki Avrupalı tüccarlar ve gayrimüslim iş insanları, Batılı gezginler.",
  "Saray çevresindeki gösterişli yaşam ve lüks harcama, geçim sıkıntısı çeken halkın tepkisini çekti.",
  "Yeniliklerin çoğu İstanbul ve saray çevresinde yoğunlaştı; bazı tarihçiler etkinin taşraya da uzandığını savunur. Orduyu yenileyen bir ıslahat yapılmadı."
 ],
 patrona:{
  neden:["İran cephesinden gelen yenilgi haberleri (Tebriz ve Hemedan'ın kaybı) ve padişahın sefere çıkmaması.","Saray çevresindeki israf ve gösterişe duyulan tepki.","Ağır vergiler, pahalılık ve esnafın geçim sıkıntısı.","Yeniliklere karşı olan çevrelerin ve bazı yeniçerilerin kışkırtması."],
  olay:"1730 sonbaharında yeniçeri ve esnaftan Patrona Halil'in önderliğindeki isyancılar İstanbul'da ayaklandı.",
  sonuc:["III. Ahmed, isyancıların baskısıyla Sadrazam Nevşehirli Damat İbrahim Paşa'yı feda etti: paşa sarayda öldürüldü, cesedi isyancılara teslim edildi.","III. Ahmed tahttan indirildi, I. Mahmud tahta çıktı.","Sadabad ve çevresindeki köşkler tahrip edildi; Lale Devri sona erdi.","Yenilik hareketleri bir süre durakladı; matbaa ise çalışmayı sürdürdü."]
 },
 kavram:[
  {k:"Lale Devri",a:"1718 Pasarofça ile 1730 Patrona Halil İsyanı arasındaki dönem; Avrupa'daki değişimlere uyma gereğinin ilk kez kurumsal düzeyde kabul edildiği barış ve yenileşme dönemi."},
  {k:"Nevşehirli Damat İbrahim Paşa",a:"Lale Devri'nin sadrazamı; Avrupa ile barışı ve diplomatik temasları savundu. Patrona Halil İsyanı'nda öldürüldü."},
  {k:"Geçici elçilik",a:"Belirli bir görev için gönderilen, iş bitince dönen elçilik. Lale Devri'nde açıldı; sürekli elçilik III. Selim döneminde."},
  {k:"Sefaretname",a:"Elçilerin gittikleri ülkede gördüklerini anlattıkları rapor. En bilineni Yirmisekiz Mehmed Çelebi'nin Paris sefaretnamesi."},
  {k:"İbrahim Müteferrika",a:"Said Efendi ile birlikte ilk Türk matbaasını kurdu (1727). Dinî kitaplar basılmadı."},
  {k:"Vankulu Lügati",a:"Müteferrika matbaasında basılan ilk kitap (1729); Arapçadan Türkçeye çevrilmiş bir sözlük."},
  {k:"Tercüme Heyeti",a:"Önemli eserleri Türkçeye çevirmek için kurulan kurul; bilgiye erişimi genişletti."},
  {k:"Tulumbacı Ocağı",a:"İstanbul'daki yangınlara karşı kurulan itfaiye teşkilatı."},
  {k:"Çiçek aşısı",a:"Çiçek hastalığına karşı aşılama; Lale Devri'nde yaygınlaştı, Lady Montagu aracılığıyla İngiltere'de tanındı."},
  {k:"Sadabad Kasrı",a:"Kâğıthane'de yapılan kasır ve bahçeler; Avrupa saray bahçeleriyle karşılaştırılır. 1730'da tahrip edildi."},
  {k:"Çırağan eğlenceleri",a:"Yaz gecelerinde ışıklar ve şenliklerle yapılan saray eğlenceleri (donanma şenlikleri)."},
  {k:"Helva sohbetleri",a:"Kış gecelerinde sarayda düzenlenen, sohbet ve müzik eşliğinde helva ikram edilen toplantılar."},
  {k:"Kalem ehli",a:"Bürokratlar; Lale Devri'nde askerî kesimin aleyhine yönetimde önem kazandılar."},
  {k:"Turquerie",a:"18. yüzyılda Avrupa'da Osmanlı kıyafet, eşya ve süslemelerinin moda olması; etkileşimin karşılıklı olduğunun kanıtı."},
  {k:"Nedim ve Levni",a:"Dönemin şairi ve minyatür ressamı; eserleri Lale Devri'nin yaşam anlayışını yansıtır."},
  {k:"Patrona Halil İsyanı",a:"1730'da Lale Devri'ni bitiren isyan; III. Ahmed tahttan indirildi, I. Mahmud tahta çıktı."}
 ]
};

/* Sınav dışı ek bilgi (Senaryo 6'da soru yok) */
const EK=[
 {k:"TAR.11.1.3",h:"1755 Lizbon ve 1766 İstanbul depremleri",p:"1755 Lizbon depremi ardından gelen tsunami ve yangınlarla şehri büyük ölçüde yıktı; Avrupa'da afetler ve devletin rolü üzerine tartışmalar başlattı. 1766 İstanbul depreminde Fatih Camii dahil birçok yapı hasar gördü ve yeniden yapıldı."},
 {k:"TAR.11.1.4",h:"Sanayi Devrimi",p:"18. yüzyılın ikinci yarısında İngiltere'de buhar gücü ve makineli dokumayla başladı. Avrupa'nın hammadde ve pazar ihtiyacını artırdı; Osmanlı el sanatları zamanla bu rekabetten etkilendi."}
];

/* Çoktan seçmeli pekiştirme (o[0] doğru) */
const MC=[
/* ---------- TAR.11.1.1 ---------- */
 {c:"1.1",q:"II. Viyana Kuşatması'nın (1683) başarısız olmasının en doğrudan sonucu aşağıdakilerden hangisidir?",
  o:["Osmanlı'ya karşı Kutsal İttifak'ın kurulması","Lale Devri'nin hemen ardından başlayıp yenileşmenin hızlanması","Kırım Hanlığı'nın bağımsız olması","Osmanlı'nın Mora'yı Venedik'ten geri alması"],
  e:"Kuşatmadan sonra 1684'te Avusturya, Lehistan, Venedik ve Papalık Kutsal İttifak'ı kurdu; Rusya 1686'da katıldı. Bu savaşlar Karlofça ile bitti. Lale Devri 1718'de başladı, Kırım 1774'te bağımsız oldu, Mora 1715'te geri alındı."},
 {c:"1.1",q:"Karlofça Antlaşması (1699) ile ilgili aşağıdaki eşleştirmelerden hangisi doğrudur?",
  o:["Venedik – Mora ve Dalmaçya kıyıları","Lehistan – Azak Kalesi ve Azak Denizi kıyıları","Rusya – Kırım Hanlığı ve Kerç Boğazı","Avusturya – Belgrad ve Küçük Eflak"],
  e:"Karlofça'da Venedik Mora'yı ve Dalmaçya kıyılarını aldı. Lehistan Podolya ve Ukrayna'yı aldı; Azak 1700'de Rusya'ya geçti. Belgrad ile Küçük Eflak 1718 Pasarofça'da Avusturya'ya bırakıldı. Kırım'ın bağımsızlığı 1774'tür."},
 {c:"1.1",q:"Aşağıdakilerden hangisi Karlofça Antlaşması'nın Osmanlı tarihindeki önemini en iyi açıklar?",
  o:["Osmanlı ilk kez geniş topraklar kaybetti ve savunmaya geçti.","Osmanlı ilk kez bir devlete savaş tazminatı ödemeyi kabul etti.","Halkı Müslüman olan bir toprak ilk kez Osmanlı'dan ayrıldı.","Rusya ilk kez Boğazlardan serbestçe geçme hakkı kazandı."],
  e:"Karlofça, Osmanlı'nın ilk büyük toprak kaybıdır ve Orta Avrupa'daki üstünlüğünü bitirmiştir. Savaş tazminatı, Müslüman halklı toprağın kaybı ve Boğazlardan geçiş hakkı ise Küçük Kaynarca'nın (1774) 'ilk'leridir."},
 {c:"1.1",q:"1700 İstanbul Antlaşması'yla Rusya'nın elde ettiği kazanç aşağıdakilerden hangisidir?",
  o:["Azak Kalesi","Kırım Hanlığı","Belgrad Kalesi","Mora Yarımadası"],
  e:"1700 İstanbul Antlaşması ile Azak Kalesi Rusya'ya bırakıldı ve Rusya Azak Denizi kıyısına ulaştı. Azak 1711 Prut Antlaşması ile geri alındı."},
 {c:"1.1",q:"Prut Savaşı'nın (1711) çıkmasında aşağıdakilerden hangilerinin etkisi vardır?<br>I. Poltava'da yenilen İsveç kralı XII. Karl'ın Osmanlı'ya sığınması<br>II. Rusya'nın Azak'ı ele geçirip (1696; 1700'de antlaşmayla) Karadeniz'e yönelmesi<br>III. Fransız İhtilali'nin yaydığı fikirlerin Balkanlara ulaşması",
  o:["I ve II","Yalnız I","Yalnız III","I, II ve III"],
  e:"XII. Karl'ın Osmanlı'ya sığınması ve Rusya'nın Azak'ı alarak Karadeniz'e yönelmesi savaşın arka planıdır. Fransız İhtilali 1789'da başladı, yani Prut'tan çok sonradır."},
 {c:"1.1",q:"Aşağıdakilerden hangisi Prut Antlaşması'nın maddelerinden biri değildir?",
  o:["Kırım Hanlığı siyasi bakımdan bağımsız hâle gelecek.","Azak Kalesi Osmanlı'ya geri verilecek.","Rusya İstanbul'da sürekli elçi bulundurmayacak.","İsveç kralı ülkesine serbestçe dönebilecek."],
  e:"Kırım'ın siyasi bağımsızlığı 1774 Küçük Kaynarca maddesidir. Prut'ta Azak geri alındı, Rusya İstanbul'da sürekli elçi bulundurma hakkını kaybetti ve XII. Karl'ın ülkesine dönmesi güvenceye alındı."},
 {c:"1.1",q:"Prut'ta Rus ordusu kuşatıldığı hâlde antlaşmanın sınırlı kazançlarla imzalanması nasıl değerlendirilebilir?",
  o:["Rusya'yı kalıcı biçimde zayıflatma fırsatı kaçırıldı.","Osmanlı, Rusya karşısında ilk kez toprak kaybetmiş oldu.","Rusya, Karadeniz kıyılarına kesin olarak yerleşmiş oldu.","Avusturya, Rusya'nın yanında savaşa katıldı."],
  e:"Osmanlı Azak'ı geri aldı ama kuşatılmış Rus ordusuna daha ağır şartlar dayatmadı; Rusya kısa sürede toparlandı. Prut bir kazançtır, kayıp değil; Avusturya ise Rusya'nın yanında 1737'de savaşa girdi."},
 {c:"1.1",q:"Avusturya'nın 1716'da Osmanlı–Venedik savaşına katılırken öne sürdüğü gerekçe aşağıdakilerden hangisidir?",
  o:["Karlofça Antlaşması'nın garantörü olduğunu ileri sürmesi","Kırım Hanlığı'nı Rusya'ya karşı koruması","Lehistan tahtına aday göstermek istemesi","Fransa ile ittifak antlaşması yapmış olması"],
  e:"Osmanlı 1715'te Mora'yı geri alınca Avusturya, Karlofça düzeninin garantörü olduğunu söyleyerek savaşa girdi. Bu müdahale Petervaradin yenilgisine ve Pasarofça'ya götürdü."},
 {c:"1.1",q:"Pasarofça Antlaşması (1718) için aşağıdakilerden hangisi doğrudur?",
  o:["Mora Osmanlı'da kaldı, Belgrad Avusturya'ya geçti.","Belgrad geri alındı, Azak Kalesi yıkılıp boş bırakıldı.","Kırım bağımsız oldu, tazminat ödendi.","Macaristan Osmanlı'ya geri verildi."],
  e:"Pasarofça'da Belgrad, Temeşvar ve Küçük Eflak Avusturya'ya bırakıldı; 1715'te geri alınan Mora ise Osmanlı'da kaldı. Belgrad'ın geri alınması ve Azak'ın yıkılması 1739 Belgrad Antlaşması'dır."},
 {c:"1.1",q:"Pasarofça Antlaşması'ndan sonra Osmanlı dış politikasında aşağıdaki değişikliklerden hangisi görülür?",
  o:["Kaybedilenleri geri alma yerine Avrupa ile barışı koruma politikası benimsendi.","Avrupa'ya karşı yeni bir fetih dönemine girildi.","Rusya ile ittifak kurularak Avusturya'ya savaş açıldı.","Avrupa ile tüm diplomatik ilişkiler kesildi."],
  e:"Pasarofça ile Osmanlı kaybedilen toprakları geri alma hedefini bıraktı ve barışı korumaya yöneldi. Bu ortam Lale Devri'nin başlangıcıdır. Avrupa ile ilişkiler kesilmedi; tersine elçiler gönderildi."},
 {c:"1.1",q:"1739 Belgrad Antlaşması için aşağıdakilerden hangisi doğrudur?",
  o:["Fransa'nın arabuluculuğuyla imzalandı.","Osmanlı'nın Kırım üzerindeki egemenliği sona erdi.","Rusya Ortodoksları koruma hakkını elde etti.","Osmanlı, Mora'yı Venedik'e bırakmak zorunda kaldı."],
  e:"Belgrad Antlaşması Fransa'nın arabuluculuğuyla imzalandı; Belgrad Osmanlı'ya döndü. Kırım'ın ayrılması ve Ortodokslarla ilgili madde Küçük Kaynarca'ya (1774), Mora'nın kaybı Karlofça'ya (1699) aittir."},
 {c:"1.1",q:"Belgrad Antlaşması'nda 'Azak Kalesi yıkılacak, Rusya Karadeniz'de savaş ve ticaret gemisi bulunduramayacak' maddelerinin yer alması neyi gösterir?",
  o:["Karadeniz'in bir süre daha Osmanlı denetiminde kaldığını","Rusya'nın Boğazlardan ve Karadeniz'den serbest geçiş hakkı kazandığını","Kırım'ın Rusya tarafından resmen ilhak edilmiş olduğunu","Osmanlı'nın Akdeniz'deki donanmasını Çeşme'de kaybettiğini"],
  e:"Bu maddeler Rusya'nın Karadeniz'e çıkışını engelledi; Karadeniz bir süre daha Osmanlı denetiminde kaldı. Boğazlardan geçiş 1774'te, Kırım'ın ilhakı 1783'te, donanmanın yakılması 1770 Çeşme'dedir."},
 {c:"1.1",q:"Belgrad Antlaşması'ndan sonra 1740'ta Fransa'ya kapitülasyonların sürekli hâle getirilmesi aşağıdakilerden hangisine örnektir?",
  o:["Diplomatik desteğin ekonomik ayrıcalıkla karşılanmasına","Osmanlı'nın Fransa'ya ağır bir savaş tazminatı ödemek zorunda kalmasına","Fransa'nın Kutsal İttifak'a katılmasına","Osmanlı'nın sanayileşme politikasına"],
  e:"Fransa Belgrad görüşmelerinde arabuluculuk yaptı; karşılığında kapitülasyonları sürekli hâle getirildi. Bu, ileride Osmanlı ekonomisinin dışa bağımlı hâle gelmesine zemin hazırladı."},
 {c:"1.1",q:"1770 Çeşme Baskını'nın Osmanlı açısından en önemli sonucu aşağıdakilerden hangisidir?",
  o:["Osmanlı donanması büyük ölçüde yok oldu.","Rusya Kırım'ı resmen ilhak etti.","Mora Venedik'e bırakıldı.","Lale Devri sona erdi."],
  e:"Rus donanması Çeşme limanındaki Osmanlı donanmasını yaktı; deniz gücü çöktü ve deniz subayı yetiştirmek için Mühendishane-i Bahrî-i Hümâyûn kuruldu. Kırım'ın ilhakı 1783, Lale Devri'nin sonu 1730'dur."},
 {c:"1.1",q:"Rus donanmasının 1770'te Baltık Denizi'nden çıkıp Cebelitarık üzerinden Ege'ye gelerek Osmanlı donanmasını yakması aşağıdakilerden hangisini gösterir?",
  o:["Rusya'nın Akdeniz'e açılma hedefini ve artan deniz gücünü","Osmanlı donanmasının Akdeniz'de hâlâ rakipsiz bir güç olduğunu","Avusturya'nın Rusya'ya karşı Osmanlı'nın yanında savaştığını","Fransa'nın Rus donanmasını yönettiğini"],
  e:"Baltık'tan Ege'ye uzanan sefer, Rusya'nın sıcak denizlere ulaşma hedefini ve deniz gücünü gösterdi. Bu olay Osmanlı'nın Akdeniz'deki zayıflığını da ortaya koydu."},
 {c:"1.1",q:"Aşağıdakilerden hangisi Küçük Kaynarca Antlaşması'nın maddelerinden biri değildir?",
  o:["Belgrad ve Küçük Eflak Osmanlı'ya geri verilecek.","Kırım Hanlığı siyasi bakımdan bağımsız, dinî bakımdan halifeye bağlı olacak.","Rus ticaret gemileri Karadeniz'de ve Boğazlarda serbestçe dolaşabilecek.","Osmanlı Rusya'ya savaş tazminatı ödeyecek."],
  e:"Belgrad ve Küçük Eflak'ın geri verilmesi 1739 Belgrad Antlaşması'dır. Kırım'ın bağımsızlığı, Boğazlardan geçiş ve savaş tazminatı Küçük Kaynarca maddeleridir."},
 {c:"1.1",q:"Küçük Kaynarca Antlaşması ile ilgili aşağıdakilerden hangisi doğrudur?",
  o:["Halkı Müslüman bir toprak ilk kez Osmanlı'dan ayrıldı.","Osmanlı, Avrupa'daki topraklarını ilk kez bu antlaşmayla kaybetti.","Osmanlı, Rusya ile ilk kez antlaşma imzaladı.","Rusya ilk kez Azak Kalesi'ni ele geçirdi."],
  e:"Kırım'ın bağımsızlığıyla halkı Müslüman olan bir toprak ilk kez Osmanlı'dan ayrıldı. İlk büyük toprak kaybı Karlofça'dır (1699); Rusya ile ilk antlaşma 1681 Bahçesaray'dır; Rusya Azak'ı ilk kez 1696'da almış, 1700'de resmîleştirmişti."},
 {c:"1.1",q:"Küçük Kaynarca'da Kırım'ın siyasi bakımdan bağımsız olurken dinî bakımdan halifeye bağlı kalması hangi amaca yöneliktir?",
  o:["Kırım ile manevi bağı koruyup Rus etkisini sınırlamak","Kırım'ın Rusya'ya devrini kolaylaştırıp savaşı hemen bitirmek","Kırım'ı Avusturya'nın korumasına bırakarak Rusya'yı dengelemek","Kırım'daki Ortodoks nüfusu artırmak"],
  e:"Osmanlı, siyasi olarak kaybettiği Kırım'la halifelik üzerinden manevi bağını sürdürmek istedi. Halifelik böylece ilk kez bir antlaşmada siyasi araç olarak kullanıldı. Yine de Rusya 1783'te Kırım'ı ilhak etti."},
 {c:"1.1",q:"Küçük Kaynarca'da Rusya'ya Osmanlı Ortodoksları adına söz hakkı tanınması ileride hangi sonuca zemin hazırlamıştır?",
  o:["Rusya'nın Ortodokslar bahanesiyle Osmanlı iç işlerine karışmasına","Osmanlı'nın Balkanlarda toprak kazanmasına","Ortodoksların orduya alınmasının yasaklanmasına","Rusya ile kalıcı bir ittifak kurulmasına"],
  e:"Rusya bu maddeyi Ortodoks halkı koruma iddiasıyla Osmanlı iç işlerine karışmak için kullandı; bu durum 19. yüzyılda Balkan sorunlarına zemin hazırladı."},
 {c:"1.1",q:"Rusya'nın 18. yüzyılda Osmanlı ile tekrar tekrar savaşmasının temel stratejik nedeni aşağıdakilerden hangisidir?",
  o:["Karadeniz, Boğazlar ve Akdeniz'e ulaşma isteği","Mora'yı Venedik'ten alıp Adriyatik'e yerleşme isteği","Macaristan üzerinde hak iddia etmesi","Osmanlı'dan Fransa gibi kapitülasyon alma isteği"],
  e:"Rusya'nın sıcak denizlere inme politikası, donmayan limanlara ve Akdeniz'e ulaşmayı hedefliyordu. Azak, Kırım ve Boğazlar bu yolun durakları oldu."},
 {c:"1.1",q:"Azak'ın Rusya'ya bırakılması (1700), Belgrad'da Rusya'ya Karadeniz'de gemi yasağı konması (1739) ve Küçük Kaynarca'da Rus gemilerine Boğazlardan geçiş hakkı tanınması (1774) birlikte değerlendirildiğinde hangi sonuca ulaşılır?",
  o:["Rusya'nın Karadeniz'e çıkışı 1774'te büyük ölçüde gerçekleşti.","Osmanlı, Karadeniz'deki üstünlüğünü yüzyıl boyunca hiç kaybetmedi.","Rusya yalnız Baltık'a yöneldi.","Osmanlı ile Rusya yüzyıl boyunca müttefik oldu."],
  e:"Rusya'nın Karadeniz'e çıkışı 1739'da geçici olarak engellendi, ama 1774'te Karadeniz ve Boğazlarda ticaret serbestliği kazandı. Karadeniz böylece Osmanlı gölü olmaktan çıktı."},
 {c:"1.1",q:"1724 İstanbul Antlaşması'nın özelliği aşağıdakilerden hangisidir?",
  o:["Osmanlı ile Rusya İran'ın kuzeybatı topraklarını paylaştı.","Osmanlı–İran sınırı 1639 Kasr-ı Şirin'deki gibi yeniden kabul edildi.","Avusturya ile Osmanlı arasında uzun süreli bir barış yapıldı.","Rusya, Kırım üzerindeki bütün haklarından resmen vazgeçti."],
  e:"Safevi Devleti çökünce Osmanlı ve Rusya 1724'te İran'ın kuzeybatı topraklarını (Kafkasya ve çevresi) paylaştı. Sınırın 1639 hattına dönmesi 1746 Kerden Antlaşması'dır."},
 {c:"1.1",q:"Kerden Antlaşması (1746) ile ilgili aşağıdakilerden hangisi doğrudur?",
  o:["Osmanlı–İran sınırı Kasr-ı Şirin'deki gibi belirlendi.","İran, Bağdat'ı Osmanlı'dan kesin olarak alıp sınırı batıya taşıdı.","Rusya, Kafkasya'yı İran'a bıraktı.","Osmanlı, Tebriz'i ve Hemedan'ı kesin olarak topraklarına kattı."],
  e:"Nadir Şah ile yapılan Kerden Antlaşması, sınırı 1639 Kasr-ı Şirin hattına döndürdü; Bağdat Osmanlı'da kaldı. Böylece doğuda uzun süren savaşlar sona erdi."},
 {c:"1.1",q:"18. yüzyılda Osmanlı'nın diplomasiye ve arabulucu devletlere daha çok başvurmasının nedeni aşağıdakilerden hangisidir?",
  o:["Askerî gücün tek başına toprakları korumaya artık yetmemesi","Avrupa devletlerinin Osmanlı'ya vergi ödemeye başlaması","Osmanlı'nın yeni fetihlere yönelmesi","Coğrafi keşiflerin Osmanlı'yı zenginleştirmesi"],
  e:"Yenilgiler sonrasında Osmanlı, topraklarını korumak için diplomasiyi ve büyük güçlerin rekabetini kullandı: Karlofça ve Pasarofça'da İngiltere ile Hollanda, Belgrad'da Fransa arabulucuydu."},
 {c:"1.1",q:"Aşağıdakilerden hangileri 18. yüzyılda Osmanlı'nın aleyhine değişen güç dengelerine örnektir?<br>I. Rusya'nın I. Petro'dan itibaren güçlenmesi<br>II. Avusturya'nın Orta Avrupa'da güçlenmesi<br>III. Osmanlı'nın Akdeniz'de mutlak üstünlük kurması",
  o:["I ve II","Yalnız I","Yalnız III","II ve III"],
  e:"Rusya ve Avusturya'nın güçlenmesi Osmanlı aleyhine gelişmelerdir. Osmanlı 18. yüzyılda Akdeniz'de üstünlük kuramadı; 1770'te donanmasını Çeşme'de kaybetti."},
 {c:"1.1",q:"Prut (1711) ve Belgrad (1739) antlaşmalarının ortak özelliği aşağıdakilerden hangisidir?",
  o:["İkisinde de Osmanlı kazançlı çıktı.","İkisi de yalnız Avusturya ile imzalandı.","İkisinde de Kırım bağımsız oldu.","İkisi de Lale Devri'nde imzalandı."],
  e:"Prut'ta Azak, Belgrad'da Belgrad geri alındı; ikisi de 18. yüzyılın kazançlı antlaşmalarıdır. Prut yalnız Rusya ile, Belgrad Avusturya ve Rusya ile imzalandı; Lale Devri 1718–1730 arasıdır."},
 {c:"1.1",q:"Aşağıdaki gelişmelerden hangisi diğerlerinden önce gerçekleşmiştir?",
  o:["Prut Antlaşması","Pasarofça Antlaşması","Belgrad Antlaşması","Çeşme Baskını"],
  e:"Sıra: Prut (1711), Pasarofça (1718), Belgrad (1739), Çeşme Baskını (1770)."},
 {c:"1.1",q:"I. Karlofça Antlaşması<br>II. Küçük Kaynarca Antlaşması<br>III. Pasarofça Antlaşması<br>IV. Belgrad Antlaşması<br>Bu antlaşmaların imzalanma sırası aşağıdakilerden hangisidir?",
  o:["I – III – IV – II","I – IV – III – II","III – I – IV – II","I – III – II – IV"],
  e:"Karlofça (1699) → Pasarofça (1718) → Belgrad (1739) → Küçük Kaynarca (1774)."},
/* ---------- TAR.11.1.2 ---------- */
 {c:"1.2",q:"Lale Devri hangi iki gelişme arasındaki dönemi kapsar?",
  o:["Pasarofça Antlaşması ile Patrona Halil İsyanı","Karlofça Antlaşması ile Prut Savaşı","II. Viyana Kuşatması ile Karlofça Antlaşması","Belgrad Antlaşması ile Küçük Kaynarca Antlaşması"],
  e:"Lale Devri 1718 Pasarofça Antlaşması ile başlar, 1730 Patrona Halil İsyanı ile biter."},
 {c:"1.2",q:"Lale Devri'nin ortaya çıkmasında aşağıdakilerden hangisi etkili olmuştur?",
  o:["Pasarofça'dan sonra barışı koruma politikasının benimsenmesi","Osmanlı'nın Rusya'yı yenerek Kırım'ı yeniden topraklarına katması","Avrupa ile bütün ilişkilerin kesilmesi","Fransız İhtilali'nin fikirlerinin yayılması"],
  e:"Pasarofça yenilgisi Avrupa'nın üstünlüğünü gösterdi; III. Ahmed ve Damat İbrahim Paşa barışı koruyup Avrupa'yı tanımayı seçti. Fransız İhtilali 1789'dadır; Kırım geri alınamadı."},
 {c:"1.2",q:"Lale Devri'nin padişahı ve sadrazamı aşağıdakilerden hangisinde birlikte verilmiştir?",
  o:["III. Ahmed – Damat İbrahim Paşa","IV. Mehmed – Merzifonlu Kara Mustafa Paşa","I. Mahmud – Baltacı Mehmed Paşa","III. Mustafa – Muhsinzade Mehmed Paşa"],
  e:"Lale Devri'nin padişahı III. Ahmed, sadrazamı Nevşehirli Damat İbrahim Paşa'dır. IV. Mehmed ile Merzifonlu Kara Mustafa Paşa II. Viyana Kuşatması dönemidir."},
 {c:"1.2",q:"Yirmisekiz Mehmed Çelebi'nin Paris'e gönderilmesi ve gördüklerini Sefaretname'de anlatması aşağıdakilerden hangisini sağlamıştır?",
  o:["Avrupa kurumlarının yerinde gözlenip aktarılmasını","Osmanlı'nın Paris'te ilk sürekli elçiliğini açmasını","Fransa ile Avusturya'ya karşı askerî ittifak kurulmasını","Fransa'ya ilk kez kapitülasyon verilmesini"],
  e:"Elçi, Fransa'nın saraylarını, bahçelerini, okullarını ve kurumlarını gözlemleyip rapor etti; bu bilgiler İstanbul'daki yeniliklere ilham verdi. Bu elçilik geçiciydi; sürekli elçilikler III. Selim döneminde açıldı."},
 {c:"1.2",q:"Lale Devri'nde Avrupa başkentlerine gönderilen elçilerle ilgili aşağıdakilerden hangisi doğrudur?",
  o:["Geçici görevle gidip gözlemlerini rapor ettiler.","Gittikleri başkentlerde sürekli elçilik kurup orada kaldılar.","Yalnız askerî ittifak görüşmesi yapıp hemen döndüler.","Avrupa'ya savaş ilan etmek için gönderildiler."],
  e:"Lale Devri'nde Paris, Viyana, Moskova ve Lehistan'a geçici elçiler gitti; bu elçiler diplomasinin yanında kültür, sanat ve teknoloji hakkında da bilgi topladı."},
 {c:"1.2",q:"İbrahim Müteferrika'nın matbaası ile ilgili aşağıdakilerden hangisi doğrudur?",
  o:["Dinî kitaplar dışındaki eserleri basmasına izin verildi.","İlk basılan eser Kur'an-ı Kerim'dir.","Osmanlı topraklarında kurulan ilk matbaa bu matbaadır.","III. Selim döneminde, Nizam-ı Cedit ile birlikte kurulmuştur."],
  e:"1727 iznine göre dinî kitaplar basılmadı; ilk kitap Vankulu Lügati (1729) adlı sözlüktür. Osmanlı topraklarında daha önce azınlıkların matbaaları vardı; Müteferrika'nınki ilk Türk matbaasıdır."},
 {c:"1.2",q:"Matbaanın kurulması Osmanlı toplumunda daha çok hangi alanda uzun vadeli etki bırakmıştır?",
  o:["Bilginin daha hızlı ve ucuz yayılmasında","Ordunun Avrupa tarzı ateşli silahlarla donatılmasında","Tımar sisteminin yeniden canlanıp güçlenmesinde","Kapitülasyonların kaldırılmasında"],
  e:"Basılı kitap, el yazması kitaba göre daha hızlı ve ucuz çoğaltılabildiği için bilginin yayılmasını kolaylaştırdı ve Batı bilimine açılmaya katkı sağladı."},
 {c:"1.2",q:"Lale Devri'nde kurulan Tercüme Heyeti'nin amacı aşağıdakilerden hangisidir?",
  o:["Önemli eserleri Türkçeye çevirerek bilgiye erişimi artırmak","Avrupa'ya gidecek elçileri yetiştirmek","Antlaşma metinlerini Fransızcaya çevirmek","Medreselerde Arapça eğitimini kaldırmak"],
  e:"Tercüme Heyeti, Arapça ve Farsça başta olmak üzere önemli eserleri Türkçeye çevirerek bilgiye erişimi genişletti."},
 {c:"1.2",q:"Tulumbacı Ocağı'nın kurulması ve çiçek aşısı uygulaması birlikte değerlendirildiğinde aşağıdakilerden hangisine ulaşılır?",
  o:["Yenilikler gündelik kent hayatını da etkiledi.","Yenilikler yalnız ordunun ve donanmanın güçlenmesine yönelikti.","Osmanlı, Avrupa ile ilişkilerini kesti.","Islahatlar önce taşrada başladı."],
  e:"Yangınla mücadele eden itfaiye teşkilatı ve salgına karşı aşılama, yeniliklerin İstanbul halkının günlük yaşamına doğrudan dokunduğunu gösterir."},
 {c:"1.2",q:"Lale Devri yenilikleri için aşağıdakilerden hangisi söylenebilir?",
  o:["Kültür, sanat ve gündelik hayatta yoğunlaştı.","Yeniçeri Ocağı kaldırılıp yerine Batı tarzı yeni bir ordu kuruldu.","Nizam-ı Cedit ordusu bu dönemde kuruldu.","Tımar sistemi yeniden güçlendirildi."],
  e:"Lale Devri'nde orduyu yenileyen bir ıslahat yapılmadı; yenilikler diplomasi, kültür, sanat, üretim ve şehir hayatında görüldü. Nizam-ı Cedit III. Selim'in, Yeniçeri Ocağı'nın kaldırılması II. Mahmud'un (1826) işidir."},
 {c:"1.2",q:"'Avrupa'nın dört bir yanından İstanbul'a lale getiriliyor, lale ticareti mücevhercilik gibi itibarlı bir iş hâline geliyordu.' Bu bilgi aşağıdakilerden hangisine kanıt olarak gösterilebilir?",
  o:["Dönemin zevkinin şehir hayatına ve ticarete yansımasına","Tarımda bütün üretimin laleye dönüp tahılın azalmasına","Lalenin Avrupa'ya ilk kez bu dönemde Osmanlı'dan gönderilmesine","Lale Devri'nin askerî zaferlerle anılan bir dönem olmasına"],
  e:"Lale merakı saraydan şehre yayıldı, ticari bir değer kazandı. Bu, dönemin zevkinin ekonomiye ve gündelik hayata yansıdığını gösterir. Lale Avrupa'ya bu dönemden çok önce, 16. yüzyılda ulaşmıştı."},
 {c:"1.2",q:"Kâğıthane'deki Sadabad Kasrı ve bahçelerinin Versailles gibi Avrupa saray bahçeleriyle karşılaştırılması aşağıdakilerden hangisini gösterir?",
  o:["Avrupa'daki saray ve bahçe düzeninden esinlenildiğini","Fransa'nın Osmanlı'dan toprak alarak Boğaz'a yerleştiğini","Osmanlı mimari geleneğinin tamamen terk edildiğini","Sarayın İstanbul dışına, Kâğıthane'ye taşındığını"],
  e:"Sadabad'da planlı bahçe ve su düzeni, elçilerin anlattığı Avrupa saraylarından esinlenmenin örneğidir; ancak geleneksel Osmanlı mimarisi terk edilmedi, ikisi harmanlandı."},
 {c:"1.2",q:"Çırağan eğlenceleri, helva sohbetleri ve mesire yerlerinin yaygınlaşması Lale Devri hakkında aşağıdakilerden hangisini gösterir?",
  o:["Eğlence ve kır hayatı İstanbul'da yaygınlaştı.","Sosyal hayat camiyle sınırlandı.","Saray, halkın eğlencelerini yasakladı.","İstanbul'un nüfusu hızla taşraya göç etti."],
  e:"Bu etkinlikler Lale Devri'nde İstanbul'da eğlence, şenlik ve kır gezintisi kültürünün canlandığını gösterir."},
 {c:"1.2",q:"Nedim'in şiirleri ve Levni'nin minyatürleri aşağıdakilerden hangisine örnektir?",
  o:["Dönemin yaşam anlayışının sanata yansımasına","Müteferrika matbaasında basılan ilk eserlere","Elçilerin yazdığı raporlara","Patrona Halil'i ve isyancıları öven eserlere"],
  e:"Nedim İstanbul'u ve eğlence hayatını, Levni ise dönemin insanlarını ve şenliklerini anlattı. İkisi de Lale Devri'nin hayattan zevk alma anlayışını sanata taşıdı."},
 {c:"1.2",q:"'18. yüzyılda Avrupa'da Osmanlı kıyafetleri ve süslemeleri moda olurken Osmanlı'da koltuk, iskemle ve portre yaygınlaştı.' Bu bilgi aşağıdakilerden hangisini kanıtlar?",
  o:["Kültürel etkileşimin karşılıklı olduğunu","Etkileşimin yalnız Avrupa'dan Osmanlı'ya olduğunu","Osmanlı'nın Avrupa ile savaş hâlinde olduğunu","Avrupa'nın Osmanlı kültürüne ilgisiz olduğunu"],
  e:"Avrupa'daki Turquerie modası ile Osmanlı'daki Batı tarzı eşya, etkileşimin iki yönlü olduğunu gösterir."},
 {c:"1.2",q:"İngiliz elçisinin eşi Lady Mary Wortley Montagu'nun İstanbul'da gördüğü çiçek aşılamasını İngiltere'de tanıtması aşağıdakilerden hangisini gösterir?",
  o:["Bazı uygulamaların Osmanlı'dan Avrupa'ya geçtiğini","Çiçek aşısının Avrupa'da Osmanlı'dan önce bilindiğini","Osmanlı'nın Avrupalılara ülkesini tamamen kapattığını","İngiltere'nin Osmanlı'ya savaş açtığını"],
  e:"Lady Montagu'nun gözlemleri, bilginin yalnız Avrupa'dan Osmanlı'ya değil, Osmanlı'dan Avrupa'ya da aktığını gösterir."},
 {c:"1.2",q:"Lale Devri'nde askerî kesimin yönetimdeki etkisi azalırken aşağıdaki gruplardan hangisi önem kazanmıştır?",
  o:["Kalem ehli (bürokratlar)","Yeniçeri ağaları ve ocak subayları","Tımarlı sipahiler ve sancak beyleri","Kırım hanları"],
  e:"Barış politikası ve diplomasinin önem kazanmasıyla yazışma ve yönetim işlerini yürüten kalem ehli güçlendi."},
 {c:"1.2",q:"Aşağıdakilerden hangisi Patrona Halil İsyanı'nın nedenlerinden biri değildir?",
  o:["Kırım'ın Rusya'ya ilhak edilmesi","İran cephesinden gelen yenilgi haberleri","Saray çevresindeki gösterişe duyulan tepki","Ağır vergiler ve geçim sıkıntısı"],
  e:"Kırım'ın ilhakı 1783'tedir, isyandan (1730) çok sonradır. İran'daki kayıplar, saray çevresindeki israf ve halkın geçim sıkıntısı isyanın nedenleridir."},
 {c:"1.2",q:"Aşağıdakilerden hangisi Patrona Halil İsyanı'nın sonuçlarından biridir?",
  o:["III. Ahmed tahttan indirildi.","Yeniçeri Ocağı kaldırıldı, yerine yeni ordu kuruldu.","Pasarofça Antlaşması imzalanarak savaş bitti.","İstanbul'da ilk Türk matbaası kuruldu."],
  e:"İsyan sonunda Damat İbrahim Paşa öldürüldü, III. Ahmed tahttan indirildi ve Lale Devri sona erdi. Pasarofça isyandan önce (1718), matbaa izni 1727'dedir."},
 {c:"1.2",q:"Lale Devri'nin Osmanlı tarihindeki yeri aşağıdakilerden hangisiyle en iyi açıklanır?",
  o:["Avrupa'ya uyma gereğinin ilk kez kurumsal olarak kabul edildiği dönem","Osmanlı'nın batıda en geniş sınırlara ulaştığı dönem","Batı ile siyasi ve kültürel ilişkilerin tamamen kesildiği dönem","Askerî ıslahatların en yoğun olduğu dönem"],
  e:"Lale Devri, Osmanlı'nın Avrupa'daki değişimlere uyması gerektiğini ilk kez kurumsal düzeyde kabul ettiği ve Avrupa'yı yakından tanımaya başladığı dönemdir. Batıdaki en geniş sınırlar 1672 Bucaş'tır; askerî ıslahat yapılmadı."},
 {c:"1.2",q:"Bir tarihçi Lale Devri'ni 'yalnız eğlence ve israf dönemi' olarak görürken başka bir tarihçi 'Batı'ya açılmanın ilk kurumsal adımı' olarak değerlendirir. Bu durum aşağıdakilerden hangisini gösterir?",
  o:["Aynı döneme farklı açılardan yorum getirilebildiğini","Tarihçilerden birinin dönemi hiç kaynak kullanmadan yazdığını","Lale Devri hakkında hiçbir yazılı belge bulunmadığını","Tarihsel olayların yorumlanamayacağını"],
  e:"Tarihçiler aynı olguları farklı bakış açılarıyla yorumlayabilir. Sınavda bu tür sorularda iki görüşün benzer ve farklı yönlerini kanıtla göstermen beklenir."},
 {c:"1.2",q:"İstanbul'da çini atölyesi kurulması, İznik ve Kütahya atölyelerinin yenilenmesi ve kumaş (çuha) atölyesi açılması hangi amaca yöneliktir?",
  o:["Yerli üretimi canlandırıp ithalatı azaltmak","Avrupa'ya silah ve top satmak","Tımar sistemini yeniden kurmak","Medreseleri güçlendirmek"],
  e:"Bu girişimler, artan lüks tüketimin ithalatla karşılanmasını azaltmak ve yerli üretimi desteklemek içindi."},
 {c:"1.2",q:"Lale Devri yeniliklerinin Pasarofça yenilgisinin hemen ardından başlaması aşağıdakilerden hangisini gösterir?",
  o:["Yenilginin Batı'yı tanıma ihtiyacını doğurduğunu","Yeniliklerin savaşların başlıca nedeni olduğunu","Osmanlı'nın Avrupa'yı askerî alanda kesin olarak yendiğini","Yeniliklerin Safevi İran'ından örnek alındığını"],
  e:"Yenilgi, Avrupa'nın neden güçlü olduğunu anlama ihtiyacını doğurdu. Neden-sonuç ilişkisi: Pasarofça → barış politikası → elçilikler ve yenilikler."},
 {c:"1.2",q:"Lale Devri'nde Galata ve İzmir gibi ticaret merkezlerindeki Avrupalı tüccarların, gayrimüslim iş insanlarının ve elçilerin rolü aşağıdakilerden hangisidir?",
  o:["Avrupa ile kültürel etkileşimi taşıdılar.","Matbaanın kurulmasına karşı çıkıp kapattılar.","Patrona Halil İsyanı'nı başlatan grup oldular.","Lale Devri'nde orduyu yeniden düzenlediler."],
  e:"Bu gruplar, saray çevresi ve bürokratlarla birlikte Avrupa ile sosyokültürel etkileşimin taşıyıcıları oldu; yeni eşya, giyim ve alışkanlıklar onlar aracılığıyla yayıldı."},
 {c:"1.2",q:"Müteferrika matbaasında dinî kitapların basılmaması aşağıdakilerden hangisiyle açıklanabilir?",
  o:["Olası tepkileri önleyip yeniliği koruma isteğiyle","Dinî kitapların Avrupa'da basılmasının yasak olmasıyla","Matbaanın yalnız Fransızca kitap basabilmesiyle","Dinî kitaplara ihtiyaç olmamasıyla"],
  e:"Dinî kitapların basımı, el yazması geleneğine bağlı çevrelerin tepkisini çekebilirdi. Bu sınırlama, matbaanın kurulabilmesi için yapılmış bir uzlaşmadır."},
 {c:"1.2",q:"Lale Devri'nde saray çevresinde lüks tüketimin artması ile Patrona Halil İsyanı arasındaki ilişki aşağıdakilerden hangisidir?",
  o:["Gösterişli yaşam halkın tepkisini artırarak isyana zemin hazırladı.","Lüks tüketim halkın refahını artırıp isyanı önledi.","İsyanın tek nedeni lüks tüketimdir; dış gelişmelerin etkisi yoktur.","Lüks tüketim yalnız taşrada görüldü, İstanbul'da tepki doğmadı."],
  e:"Saray çevresinin israfı, pahalılık ve vergilerle bunalan halkın öfkesini artırdı. Ancak tek neden değildir: İran cephesindeki yenilgi haberleri isyanı tetikledi."},
/* ---------- 17. yy hızlı tekrar ---------- */
 {c:"17",q:"17. yüzyıl Osmanlı ıslahatlarının genel özelliği aşağıdakilerden hangisidir?",
  o:["Kişilere bağlı kaldı ve kalıcı olmadı.","Avrupa kurumları örnek alınarak yapıldı.","Halkın seçtiği bir meclis tarafından yapıldı.","Bozulmanın nedenlerini kalıcı olarak giderdi."],
  e:"17. yüzyıl ıslahatları çoğunlukla güçlü padişah ve sadrazamlara bağlıydı, sert yöntemlerle uygulandı ve eski düzene dönmeyi amaçladı. Batı'nın örnek alınması 18. yüzyılda, Lale Devri ile başladı."},
 {c:"17",q:"Aşağıdakilerden hangileri 17. yüzyılda Osmanlı'daki bozulmanın nedenleri arasında gösterilebilir?<br>I. Veraset sisteminde ekberiyet usulüne geçilmesi<br>II. Tımar sisteminin bozulup iltizamın yaygınlaşması<br>III. İbrahim Müteferrika matbaasının kurulması",
  o:["I ve II","Yalnız I","Yalnız III","I, II ve III"],
  e:"Ekberiyet usulü ve şehzadelerin sarayda yetişmesi yönetimi zayıflattı; tımarın bozulması orduyu ve vergi düzenini etkiledi. Matbaa 1727'de, 18. yüzyılda kuruldu ve bozulma nedeni değildir."},
 {c:"17",q:"Kasr-ı Şirin Antlaşması (1639) ile ilgili aşağıdakilerden hangisi doğrudur?",
  o:["Bağdat Osmanlı'da kaldı, İran sınırı belirlendi.","Avusturya hükümdarı protokolde padişaha eşit sayıldı.","Girit Venedik'ten alındı.","Rusya ile iki devlet arasındaki ilk antlaşma imzalandı."],
  e:"Kasr-ı Şirin, Osmanlı–İran sınırını büyük ölçüde belirledi ve 1746 Kerden'de yeniden esas alındı. Avusturya'nın eşit sayılması 1606 Zitvatorok, Rusya ile ilk antlaşma 1681 Bahçesaray'dır."},
 {c:"17",q:"Coğrafi keşiflerin 17. yüzyılda Osmanlı'ya etkisi aşağıdakilerden hangisidir?",
  o:["Ticaret yollarının önem kaybıyla gümrük gelirleri azaldı.","Osmanlı Amerika kıyılarında ticaret kolonileri kurdu.","Osmanlı'nın okyanuslardaki ticareti hızla büyüdü.","Amerika'dan gelen altın ve gümüş Osmanlı hazinesini güçlendirdi."],
  e:"Yeni deniz yolları İpek ve Baharat yollarının önemini azalttı; Osmanlı'nın gümrük gelirleri düştü. Amerika'dan gelen değerli madenler ise enflasyona yol açtı."}
];

/* Ortak yazılı provası: 2 deneme × 6 açık uçlu soru. o = puanlama ölçütü [puan, ölçüt] */
const PROVA_SURUM="meb1";
const PROVA=[
 {ad:"Deneme 1",s:[
  /* 1 · 1.1 · kolay · kısa · 10 */
  {c:"1.1",p:10,zor:"kolay",tur:"kisa",
   k:`<p>Karlofça Antlaşması'ndan (1699) özet: Macaristan ve Erdel Avusturya'ya, Mora ve Dalmaçya kıyıları Venedik'e, Podolya Lehistan'a bırakıldı. Antlaşma, 1683'te Viyana önünden çekilen Osmanlı'nın Kutsal İttifak'a karşı verdiği on altı yıllık savaşı sona erdirdi. <i>(Özetlenmiştir.)</i></p>`,
   q:"Kaynaktan yararlanarak Karlofça Antlaşması'nın Osmanlı Devleti'nin Avrupa'daki konumu üzerindeki iki sonucunu yazınız.",
   c2:"Osmanlı Devleti ilk kez geniş topraklar kaybetti. Orta Avrupa'daki üstünlüğü sona erdi ve Avrupa'da savunma durumuna geçti.",
   o:[{m:"Karlofça'nın sonuçlarını kaynakla ilişkilendirerek yazabilme",l:[
     [10,"İki ayrı sonucu doğru yazdı (her biri 5): ilk büyük/geniş toprak kaybı; Orta Avrupa üstünlüğünün sona ermesi veya savunmaya geçiş."],
     [5,"Yalnızca bir sonucu doğru yazdı."],
     [2,"Sonuç yazmadı; yalnızca kaynaktaki bırakılan bölgeleri sıraladı."],
     [0,"Boş, ilgisiz veya yanlış cevap (ör. yalnızca 'savaş çıktı' yazdı)."]]}]},

  /* 2 · 1.1 · orta · açık · 15 · ŞEKİL */
  {c:"1.1",p:15,zor:"orta",tur:"acik",
   k:`<figure class="y-sekil"><svg viewBox="0 0 600 340" role="img" aria-label="Şematik harita: Karlofça (1699) ve Pasarofça (1718) antlaşmalarında Osmanlı'nın bıraktığı yerler ve Osmanlı'da kalan Mora">
<rect x="1" y="1" width="598" height="338" rx="10" class="s-cizgi"/>
<rect x="8" y="8" width="75" height="230" rx="10" class="s-su" opacity=".35"/>
<text x="14" y="126" class="s-soluk">Adriyatik</text>
<rect x="95" y="15" width="160" height="95" rx="6" class="s-kara"/>
<rect x="103" y="24" width="12" height="12" class="s-kirmizi"/>
<text x="121" y="35" class="s-yazi">Macaristan</text>
<text x="103" y="58" class="s-soluk">Karlofça:</text>
<text x="103" y="74" class="s-soluk">Avusturya'ya</text>
<rect x="265" y="15" width="140" height="95" rx="6" class="s-kara"/>
<rect x="273" y="24" width="12" height="12" class="s-kirmizi"/>
<text x="291" y="35" class="s-yazi">Erdel</text>
<text x="273" y="58" class="s-soluk">Karlofça:</text>
<text x="273" y="74" class="s-soluk">Avusturya'ya</text>
<rect x="430" y="15" width="160" height="95" rx="6" class="s-kara"/>
<rect x="438" y="24" width="12" height="12" class="s-kirmizi"/>
<text x="456" y="35" class="s-yazi">Podolya</text>
<text x="438" y="58" class="s-soluk">Karlofça:</text>
<text x="438" y="74" class="s-soluk">Lehistan'a</text>
<rect x="95" y="125" width="150" height="100" rx="6" class="s-kara"/>
<rect x="103" y="134" width="12" height="12" class="s-mor"/>
<text x="121" y="145" class="s-yazi">Belgrad</text>
<text x="103" y="166" class="s-soluk">ve Kuzey Sırbistan</text>
<text x="103" y="188" class="s-soluk">Pasarofça:</text>
<text x="103" y="204" class="s-soluk">Avusturya'ya</text>
<rect x="255" y="125" width="140" height="100" rx="6" class="s-kara"/>
<rect x="263" y="134" width="12" height="12" class="s-mor"/>
<text x="281" y="145" class="s-yazi">Temeşvar</text>
<text x="263" y="166" class="s-soluk">Karlofça: Osmanlı'da</text>
<text x="263" y="188" class="s-soluk">Pasarofça:</text>
<text x="263" y="204" class="s-soluk">Avusturya'ya</text>
<rect x="405" y="125" width="185" height="100" rx="6" class="s-kara"/>
<rect x="413" y="134" width="12" height="12" class="s-mor"/>
<text x="431" y="145" class="s-yazi">Küçük Eflak</text>
<text x="413" y="168" class="s-soluk">Pasarofça: Avusturya'ya</text>
<rect x="95" y="245" width="170" height="82" rx="6" class="s-kara"/>
<rect x="103" y="254" width="12" height="12" class="s-yesil"/>
<text x="121" y="265" class="s-yazi">Mora</text>
<text x="103" y="284" class="s-soluk">1699: Venedik'e</text>
<text x="103" y="300" class="s-soluk">1715: geri alındı</text>
<text x="103" y="316" class="s-soluk">1718: Osmanlı'da kaldı</text>
<rect x="290" y="256" width="12" height="12" class="s-kirmizi"/>
<text x="310" y="267" class="s-soluk">Karlofça'da (1699) bırakılan</text>
<rect x="290" y="278" width="12" height="12" class="s-mor"/>
<text x="310" y="289" class="s-soluk">Pasarofça'da (1718) bırakılan</text>
<rect x="290" y="300" width="12" height="12" class="s-yesil"/>
<text x="310" y="311" class="s-soluk">Pasarofça'da Osmanlı'da kalan</text>
</svg><figcaption>Şematik harita, ölçeksiz</figcaption></figure>`,
   q:"a) Haritadan yararlanarak Karlofça ve Pasarofça antlaşmalarında Osmanlı Devleti'nin bıraktığı yerleri karşılaştırınız. b) Pasarofça'dan sonra Osmanlı dış politikasında ortaya çıkan değişimi açıklayınız.",
   c2:"a) Karlofça'da Osmanlı, Orta Avrupa'daki Macaristan ve Erdel'i Avusturya'ya, Podolya'yı Lehistan'a bıraktı. Pasarofça'da ise Belgrad, Temeşvar ve Küçük Eflak Avusturya'ya geçti; bu kayıplar Tuna boyunda ve Balkanlar'a daha yakın bölgelerdedir; Mora ise Osmanlı'da kaldı. b) Karlofça'dan sonra kaybedilenleri geri alma politikası izlenmişti (Prut, Mora). Pasarofça'dan sonra bu politika bırakıldı; Osmanlı barışı korumaya ve Avrupa'yı tanımaya yöneldi.",
   o:[
    {ad:"a",m:"Haritadan iki antlaşmanın sonuçlarını karşılaştırabilme",l:[
     [7,"Her antlaşmadan en az iki yeri doğru yazdı ve bir farkı belirtti (Karlofça: Macaristan, Erdel, Podolya / Pasarofça: Belgrad, Temeşvar, Küçük Eflak; Mora'nın Pasarofça'da Osmanlı'da kalması)."],
     [4,"İki antlaşmadan da doğru yerler yazdı ancak karşılaştırma yapmadı; ya da karşılaştırmayı tek antlaşmanın bilgisiyle yaptı."],
     [2,"Yalnızca bir antlaşmanın kaybettirdiği yerleri yazdı."],
     [0,"Haritayı kullanmadı, yerleri yanlış antlaşmaya bağladı veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"Pasarofça sonrası politika değişimini açıklayabilme",l:[
     [8,"Kaybedilenleri geri alma politikasının bırakıldığını ve yerine barışı koruma/Avrupa'yı tanıma yönelişinin (Lale Devri) geldiğini açıkladı."],
     [4,"Yalnızca 'barış yapıldı/barış istendi' yazdı; önceki politikayla karşılaştırmadı."],
     [0,"'Savaşlara devam edildi' gibi yanlış cevap veya ilgisiz cevap."]]}]},

  /* 3 · 1.1 · zor · açık · 20 */
  {c:"1.1",p:20,zor:"zor",tur:"acik",
   k:`<p><b>Kronoloji</b> <i>(özet)</i></p><p><b>1700</b> · Azak ve çevresi Rusya'ya bırakıldı.<br><b>1711</b> · Prut'ta Azak geri alındı.<br><b>1739</b> · Azak'ın surları yıkılacak, Rusya Karadeniz'de gemi bulunduramayacak.<br><b>1768</b> · Osmanlı–Rus Savaşı başladı.<br><b>1770</b> · Çeşme Baskını: Osmanlı donanması yakıldı.<br><b>1774</b> · Rus ticaret gemileri Karadeniz ve Boğazlarda serbest bırakıldı.<br><b>1783</b> · Rusya Kırım'ı ilhak etti.</p>`,
   q:"a) Kronolojiden yararlanarak Rusya'nın sıcak denizlere inme politikasını tanımlayınız ve 1700–1783 arasındaki aşamalarını açıklayınız. b) 1739–1774 arasındaki olaylardan çıkarımda bulunarak Osmanlı Devleti'nin bu politikayı neden kalıcı olarak durduramadığını yorumlayınız.",
   c2:"a) Sıcak denizlere inme politikası, Rusya'nın donmayan denizlere, yani Karadeniz'e ve Boğazlar yoluyla Akdeniz'e ulaşma hedefidir. Rusya 1700'de Azak ile Karadeniz yolunda ilk adımı attı; Prut (1711) ve Belgrad'da (1739) geri itildi. 1774'te Karadeniz ve Boğazlarda ticaret serbestliği kazandı, 1783'te Kırım'ı ilhak etti. b) 1739–1768 arasındaki uzun barış orduyu yenilemek için iyi değerlendirilmedi. 1770'te Çeşme'de donanma yok oldu ve savaş yenilgiyle Küçük Kaynarca'ya (1774) götürdü; Rusya Kırım'ı da aldı.",
   o:[
    {ad:"a",m:"Politikayı tanımlayıp kronolojiyle aşamalandırabilme",l:[
     [10,"Politikayı doğru tanımladı (Karadeniz, Boğazlar, Akdeniz'e ulaşma) ve en az üç aşamayı tarih sırasıyla, ilerleme ile geri itilmeyi (Prut, Belgrad) göstererek açıkladı."],
     [6,"Üç aşamayı doğru sıraladı ancak politikayı tanımlamadı ya da yalnızca ilerleyişi anlattı."],
     [3,"Bir veya iki olayı kronolojiden aktardı; aşamalar arasında ilişki kurmadı."],
     [0,"Kronolojiyi kullanmadı, politikayı yanlış tanımladı veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"1739–1774 olaylarından çıkarım yapabilme",l:[
     [10,"En az iki neden gösterdi (her biri 5): 1739–1768 barışının orduyu yenilemek için iyi kullanılmaması; Çeşme'de donanmanın yok olması; yenilgilerin Küçük Kaynarca'ya yol açması. Kronolojideki tarihlere dayandırdı."],
     [5,"Bir nedeni doğru yazdı (ör. Çeşme) ancak gerekçelendirmedi ya da kronolojiyle ilişkilendirmedi."],
     [0,"'Rusya çok güçlüydü' gibi dayanaksız genelleme veya ilgisiz cevap."]]}]},

  /* 4 · 1.2 · kolay · kısa · 10 */
  {c:"1.2",p:10,zor:"kolay",tur:"kisa",
   k:`<p>1727'de İbrahim Müteferrika ve Said Efendi'nin kuracağı matbaaya izin verildi; dinî kitapların basılmasına izin verilmedi. İlk basılan kitap, 1729'da çıkan Vankulu Lügati oldu. <i>(Özetlenmiştir.)</i></p>`,
   q:"Kaynaktan yararlanarak matbaanın kurulmasının bilginin yayılmasına katkısını ve izin verilirken getirilen sınırlamayı yazınız.",
   c2:"Matbaa, kitapların daha hızlı ve ucuz çoğaltılıp yayılmasının yolunu açtı. Ancak dinî kitapların basılmasına izin verilmedi.",
   o:[{m:"Matbaanın katkısı ve sınırlamasını kaynakla yazabilme",l:[
     [10,"Katkıyı (bilginin hızlı/ucuz yayılması, kitap çoğaltma) ve sınırlamayı (dinî kitaplar basılmayacaktı) doğru yazdı (her biri 5)."],
     [5,"Yalnızca katkıyı veya yalnızca sınırlamayı doğru yazdı."],
     [2,"Yalnızca matbaayı kimin kurduğunu ya da ilk kitabın adını yazdı."],
     [0,"Boş veya ilgisiz cevap (ör. matbaanın Osmanlı'da hiç olmadığını yazmak)."]]}]},

  /* 5 · 1.2 · orta · açık · 20 · tablo */
  {c:"1.2",p:20,zor:"orta",tur:"acik",
   k:`<table><thead><tr><th>Yenilik</th><th>Kısa açıklama</th></tr></thead><tbody>
<tr><td>Geçici elçilik</td><td>Paris, Viyana ve Moskova gibi başkentlere görevli gönderildi; gözlemler Sefaretname'de toplandı.</td></tr>
<tr><td>Tulumbacı Ocağı</td><td>İstanbul'daki yangınlara karşı itfaiye teşkilatı kuruldu.</td></tr>
<tr><td>Çiçek aşısı</td><td>Çiçek hastalığına karşı aşılama uygulaması dikkat çekti.</td></tr>
<tr><td>Tercüme Heyeti</td><td>Önemli eserleri Türkçeye çevirmek için kurul oluşturuldu.</td></tr>
<tr><td>Çini ve kumaş atölyeleri</td><td>Yerli üretimi canlandırmak için atölyeler açıldı.</td></tr></tbody></table>`,
   q:"a) Tablodan iki yenilik seçerek her birinin dönemin hangi ihtiyacına cevap verdiğini açıklayınız. b) Tablodaki yeniliklerden hiçbirinin orduyla ilgili olmamasından çıkarımda bulunarak Lale Devri'nin genel niteliğini yorumlayınız.",
   c2:"a) Tulumbacı Ocağı, sık yaşanan yangınlardan şehri ve halkı korumak için kuruldu. Tercüme Heyeti, Doğu'daki ve Batı'daki önemli eserleri Türkçeye kazandırarak bilgiye erişimi genişletmek için kuruldu. b) Yeniliklerin hepsi diplomasi, bilgi, kent hayatı, sağlık ve üretim alanındadır; tabloda ordu için bir yenilik yoktur. Lale Devri, Pasarofça'dan sonra barışın korunduğu, Avrupa'nın tanındığı ve kültürel/toplumsal alanda yeniliklerin yapıldığı bir dönemdi; ordunun yenilenmesi dönemin öncelikleri arasında olmadı.",
   o:[
    {ad:"a",m:"Yeniliği ihtiyaçla ilişkilendirerek açıklayabilme",l:[
     [12,"İki yeniliği de doğru seçti ve her birini dönemin ihtiyacıyla açıkladı (her biri 6): ör. Tulumbacı → yangınlara karşı kent güvenliği; çiçek aşısı → salgın ve halk sağlığı; Tercüme Heyeti → Doğu'daki ve Batı'daki bilgiye erişimi genişletme; geçici elçilik → Avrupa'yı yerinde tanıma."],
     [6,"Yalnızca bir yeniliği ihtiyaçla açıkladı; diğerini açıklamadı ya da yanlış açıkladı."],
     [3,"İki yeniliği yalnızca tablodan aynen aktardı; ihtiyaç belirtmedi."],
     [0,"Yenilikleri tabloda olmayan örneklerle değiştirdi veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"Tablodan çıkarımla dönemin niteliğini yorumlayabilme",l:[
     [8,"Yeniliklerin askerî olmayan alanlarda toplandığını belirtti ve bunu barış politikası ile Avrupa'yı tanıma amacına bağlayarak dönemi yorumladı."],
     [4,"Askerî alanda yenilik olmadığını belirtti, ancak nedenini ya da dönemin niteliğini yorumlamadı."],
     [0,"Tabloyu tekrarladı veya ordu ıslahatı yapıldığını yazdı."]]}]},

  /* 6 · 1.2 · zor · açık · 25 · iki görüş */
  {c:"1.2",p:25,zor:"zor",tur:"acik",
   k:`<p><b>Görüş A:</b> Lale Devri adı, sarayda lale merakının, şenliklerin ve mesire eğlencelerinin öne çıktığı bir yaşamı anlatır. Gösterişli harcamalar, halkın geçim sıkıntısı artarken yapılmıştır. Dönem, devletin sorunlarını çözmekten çok onlardan uzaklaşan bir zevk ve eğlence dönemidir.</p><p><b>Görüş B:</b> Aynı dönemde Avrupa'ya elçiler gönderildi, matbaa kuruldu, Tercüme Heyeti oluşturuldu. Bu girişimler, Osmanlı'nın Avrupa'yı tanıyarak kendini yenileme çabasının ilk örnekleridir. Bu yüzden dönem, Batı'ya açılma ve ilk ıslahat dönemi olarak görülmelidir. <i>(İki görüş özetlenmiştir.)</i></p>`,
   q:"a) İki görüşün hangi kanıtlara dayandığını belirterek aralarındaki farkı karşılaştırınız. b) Patrona Halil İsyanı'nın nedenlerinden yararlanarak hangi görüşün dönemi daha iyi açıkladığını, ya da iki görüşün birbirini nasıl tamamladığını gerekçelendirerek yorumlayınız.",
   c2:"a) Görüş A saray eğlencelerine, israfa ve halkın geçim sıkıntısına dayanır; dönemi zevk ve eğlence olarak görür. Görüş B geçici elçiliklere, matbaaya ve Tercüme Heyeti'ne dayanır; dönemi Batı'ya açılma ve yenilenme çabası olarak görür. İkisi de aynı dönemin farklı yönlerine bakar. b) 1730 isyanında İran cephesindeki yenilgiler, pahalılık ve saraydaki israf halkın tepkisini çekti. Bu nedenler A'yı destekler: eğlence ve israf toplumda hoşnutsuzluk yarattı. Ancak yenilikler de vardı ve bunlar B'yi destekler; bazı çevrelerin (yeniçeri ve ulemadan) yeniliklere tepkisi de hoşnutsuzluğu körükledi. Bu yüzden iki görüş birbirini tamamlar: dönem hem yenilik hem de eğlence ve israf dönemidir.",
   o:[
    {ad:"a",m:"İki yorumu kanıtlarıyla karşılaştırabilme",l:[
     [10,"Her görüşün dayandığı kanıtları (A: eğlence, israf, halkın sıkıntısı; B: elçilikler, matbaa, Tercüme Heyeti) doğru belirtti ve farkı açıkladı."],
     [5,"İki görüşü özetledi ancak kanıtları ayırmadı ya da yalnızca bir görüşün kanıtını belirtti."],
     [2,"Görüşlerden yalnızca birini özetledi."],
     [0,"Kaynağı kullanmadı veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"İsyan nedenleriyle yorumları değerlendirebilme",l:[
     [15,"En az iki isyan nedenini (israf/pahalılık ve yeni vergiler, İran cephesi yenilgileri ve Tebriz'in kaybı, sadrazamın yakınlarını görevlendirmesi, bazı çevrelerin yeniliklere tepkisi) kanıt olarak kullandı ve bir görüşü seçerek ya da iki görüşü tamamlayıcı göstererek tutarlı gerekçelendirdi."],
     [9,"Bir görüş seçti ve gerekçe gösterdi, ancak yalnızca bir isyan nedeni kullandı ya da diğer görüşü hiç değerlendirmedi."],
     [4,"Görüş belirtti ama isyan nedenleriyle ilişkilendirmedi (gerekçesiz yargı)."],
     [0,"'İkisi de doğru/yanlış' gibi gerekçesiz cevap veya ilgisiz cevap."]]}]}
 ]},
 {ad:"Deneme 2",s:[
  /* 1 · 1.1 · kolay · kısa · 10 */
  {c:"1.1",p:10,zor:"kolay",tur:"kisa",
   k:`<p>1769'da Baltık Denizi'nden yola çıkan Rus donanması Avrupa'yı dolaşarak Akdeniz'e ulaştı. 1770 yazında Ege'de, Çeşme limanında toplanmış Osmanlı donanmasını ateşe verdi. <i>(Özetlenmiştir.)</i></p>`,
   q:"Çeşme Baskını'nın Osmanlı donanmasına etkisini ve bu olayın ardından deniz subayı yetiştirmek için açılan okulun adını yazınız.",
   c2:"Osmanlı donanması büyük ölçüde yok oldu ve Ege–Akdeniz kıyıları savunmasız kaldı. Deniz subayı yetiştirmek için Mühendishane-i Bahrî-i Hümâyûn açıldı.",
   o:[{m:"Çeşme'nin etkisini ve sonraki gelişmeyi yazabilme",l:[
     [10,"Etkiyi (donanmanın büyük ölçüde yok olması/Ege ve Akdeniz'in savunmasız kalması) ve okulun adını (Mühendishane-i Bahrî-i Hümâyûn) doğru yazdı (her biri 5)."],
     [5,"Yalnızca etkiyi veya yalnızca okulun adını doğru yazdı."],
     [0,"Boş veya ilgisiz cevap (ör. Osmanlı donanmasının galip geldiğini yazmak)."]]}]},

  /* 2 · 1.1 · orta · açık · 20 · tablo */
  {c:"1.1",p:20,zor:"orta",tur:"acik",
   k:`<table><thead><tr><th>Antlaşma</th><th>Arabulucu devlet</th><th>Osmanlı açısından sonuç</th></tr></thead><tbody>
<tr><td>Karlofça (1699)</td><td>İngiltere ve Hollanda</td><td>Macaristan, Erdel, Podolya, Mora ve Dalmaçya kıyıları bırakıldı.</td></tr>
<tr><td>Pasarofça (1718)</td><td>İngiltere ve Hollanda</td><td>Belgrad, Temeşvar ve Küçük Eflak bırakıldı; Mora kaldı.</td></tr>
<tr><td>Belgrad (1739)</td><td>Fransa</td><td>Belgrad geri alındı. 1740'ta Fransa'ya verilen kapitülasyonlar sürekli hâle getirildi.</td></tr></tbody></table><p><i>(Özetlenmiştir.)</i></p>`,
   q:"a) Tablodan çıkarımda bulunarak Osmanlı Devleti'nin Karlofça'dan itibaren neden arabulucu devletlere başvurduğunu açıklayınız. b) Belgrad Antlaşması'ndan sonra Fransa'ya verilen ayrıcalığı kısa ve uzun vadeli sonuçları bakımından yorumlayınız.",
   c2:"a) Üç antlaşmada da büyük devletler arabulucu oldu. Bu, Osmanlı'nın askerî gücünün tek başına yetmediğini ve barışın diplomasiyle sağlanması gerektiğini gösterir. Osmanlı, büyük devletlerin rekabetinden yararlanarak varlığını korumaya çalıştı (denge politikası). b) Kısa vadede Fransa'nın arabuluculuğu sayesinde Belgrad geri alındı. Uzun vadede kapitülasyonların sürekli hâle gelmesi Osmanlı'nın ekonomik olarak Avrupa'ya bağımlı olmasına zemin hazırladı.",
   o:[
    {ad:"a",m:"Tablodan diplomasinin önemini çıkarabilme",l:[
     [10,"Arabulucu devletlerin (İngiltere, Hollanda, Fransa) rolünü gösterdi ve nedeni açıkladı: askerî gücün tek başına yetmemesi ve büyük devletlerin rekabetinden yararlanma/denge politikası."],
     [5,"Arabulucu devletleri yazdı veya 'güçsüz olduğu için' dedi; diplomasinin önemini ya da denge politikasını açıklamadı."],
     [0,"Tabloyu kullanmadı veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"Kapitülasyonların kısa ve uzun vadeli sonuçlarını yorumlayabilme",l:[
     [10,"Kısa vadeli sonucu (arabuluculuğun karşılığı; Belgrad'ın geri alınması/Fransa'nın desteği) ve uzun vadeli sonucu (ekonomik bağımlılığa zemin) doğru yazdı (her biri 5)."],
     [5,"Yalnızca kısa veya yalnızca uzun vadeli sonucu doğru yazdı."],
     [0,"Kapitülasyonu yanlış yorumladı (ör. Osmanlı'ya ekonomik üstünlük sağladığını yazdı) veya ilgisiz cevap verdi."]]}]},

  /* 3 · 1.1 · zor · açık · 20 · ŞEKİL + metin */
  {c:"1.1",p:20,zor:"zor",tur:"acik",
   k:`<figure class="y-sekil"><svg viewBox="0 0 600 340" role="img" aria-label="Şematik harita: Rusya, Azak Denizi, Kırım, Karadeniz, İstanbul ve Boğazlar ile Rus ticaret gemilerinin Karadeniz'den Boğazlara yönelen oku">
<defs><marker id="okRusGemi" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="s-cubuk"/></marker></defs>
<rect x="1" y="1" width="598" height="338" rx="10" class="s-cizgi"/>
<rect x="10" y="10" width="580" height="62" rx="6" class="s-kara"/>
<text x="24" y="36" class="s-yazi">RUSYA</text>
<text x="24" y="56" class="s-soluk">1700: Azak, 1783: Kırım'ın ilhakı</text>
<ellipse cx="300" cy="190" rx="205" ry="72" class="s-su" opacity=".35"/>
<text x="258" y="200" class="s-yazi">KARADENİZ</text>
<ellipse cx="520" cy="108" rx="48" ry="18" class="s-su" opacity=".35"/>
<text x="496" y="112" class="s-soluk">Azak Denizi</text>
<ellipse cx="365" cy="124" rx="46" ry="19" class="s-kara"/>
<text x="345" y="128" class="s-yazi">Kırım</text>
<path d="M385 146 C330 168 240 205 150 252" class="s-kalin" marker-end="url(#okRusGemi)"/>
<text x="395" y="165" class="s-soluk">Rus ticaret gemileri</text>
<text x="395" y="182" class="s-soluk">(1774: serbest dolaşım)</text>
<rect x="10" y="292" width="580" height="38" rx="6" class="s-kara"/>
<text x="24" y="316" class="s-yazi">OSMANLI TOPRAKLARI</text>
<circle cx="140" cy="268" r="7" class="s-mor"/>
<text x="156" y="272" class="s-yazi">İstanbul ve Boğazlar</text>
</svg><figcaption>Şematik harita, ölçeksiz</figcaption></figure>
<p><b>Küçük Kaynarca Antlaşması'ndan (1774) maddeler</b> <i>(özet)</i>: Kırım siyasi bakımdan bağımsız olacak, dinî bakımdan halifeye bağlı kalacak. Rus ticaret gemileri Karadeniz'de ve Boğazlarda serbestçe dolaşacak. Rusya, Ortodoks halk adına Osmanlı nezdinde söz söyleyebilecek.</p>`,
   q:"a) Haritayı ve kaynaktaki maddeleri kullanarak Küçük Kaynarca Antlaşması'nın Rusya'nın sıcak denizlere inme politikası açısından önemini açıklayınız. b) Kırım maddesindeki halifelik vurgusunun Osmanlı açısından nedenini 1783'te yaşananlarla ilişkilendirerek yorumlayınız.",
   c2:"a) Rusya'nın hedefi Karadeniz ve Boğazlar üzerinden sıcak denizlere ulaşmaktı. Antlaşmayla Rus ticaret gemileri Karadeniz'de ve Boğazlardan serbestçe geçebildi; Kırım'ın bağımsızlığı da Rusya'nın bölgedeki etkisini artırdı. Karadeniz Osmanlı gölü olmaktan çıktı. b) Osmanlı, Kırım'ın siyasi bağımsızlığını kabul etmek zorunda kaldı; halifelik vurgusuyla dinî ve manevi bağı korumak istedi. Ancak bu bağ Rusya'yı durdurmadı; Rusya 1783'te Kırım'ı ilhak etti.",
   o:[
    {ad:"a",m:"Antlaşmanın Rus politikası açısından önemini haritayla açıklayabilme",l:[
     [10,"Ticaret gemilerinin Karadeniz ve Boğazlarda serbestliğini (haritadaki oku kullanarak) sıcak denizlere inme hedefiyle ilişkilendirdi ve Karadeniz'in Osmanlı gölü olmaktan çıktığını ya da Kırım'ın Rus etkisine açılmasını belirtti."],
     [6,"Serbest dolaşım maddesini doğru yazdı ancak politikayla ilişkilendirmedi; ya da politikayı anlattı, maddeleri kullanmadı."],
     [3,"Yalnızca haritadaki yerleri ya da maddeleri aktardı."],
     [0,"Haritayı ve kaynağı kullanmadı veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"Halifelik vurgusunu ve 1783'ü yorumlayabilme",l:[
     [10,"Nedeni (siyasi bağımsızlık kabul edilirken dinî/manevi bağı korumak ve Rus etkisini sınırlamak) ve sonucu (1783'te Rusya'nın Kırım'ı ilhak etmesi, manevi bağın yetmemesi) ilişkilendirerek yazdı."],
     [5,"Yalnızca nedeni ya da yalnızca 1783 ilhakını yazdı; ilişkilendirmedi."],
     [0,"Halifeliğin Kırım'ı Osmanlı'ya bağladığı gibi yanlış cevap veya ilgisiz cevap."]]}]},

  /* 4 · 1.2 · kolay · kısa · 10 */
  {c:"1.2",p:10,zor:"kolay",tur:"kisa",
   k:`<p><b>Kronoloji</b> <i>(özet)</i><br><b>1718</b> · Pasarofça Antlaşması imzalandı.<br><b>1720</b> · Yirmisekiz Mehmed Çelebi geçici elçi olarak Paris'e gönderildi.<br><b>1727</b> · Matbaa kurma izni verildi.<br><b>1730</b> · Patrona Halil İsyanı çıktı.</p>`,
   q:"Kronolojiden yararlanarak Lale Devri'nin başlangıcını ve sonunu belirleyen olayları yıllarıyla yazınız.",
   c2:"Lale Devri 1718'de Pasarofça Antlaşması ile başladı ve 1730'da Patrona Halil İsyanı ile sona erdi.",
   o:[{m:"Dönemin sınırlarını kronolojiden belirleyebilme",l:[
     [10,"Başlangıç: Pasarofça Antlaşması (1718); son: Patrona Halil İsyanı (1730). Olay ve yıl doğru (her biri 5)."],
     [6,"İki olayı da doğru yazdı ancak yıllardan birini yazmadı ya da yanlış yazdı."],
     [3,"Yalnızca bir olayı (yılıyla) doğru yazdı."],
     [0,"1720 veya 1727 gibi dönem içi olayları sınır olarak gösterdi ya da boş bıraktı."]]}]},

  /* 5 · 1.2 · orta · açık · 15 */
  {c:"1.2",p:15,zor:"orta",tur:"acik",
   k:`<p>Pasarofça Antlaşması'ndan sonra III. Ahmed ve Sadrazam Nevşehirli Damat İbrahim Paşa, kaybedilen toprakları geri almaya çalışmak yerine barışı korumayı seçti. Osmanlı yöneticileri Avrupa'nın askerî ve teknik üstünlüğünü artık açıkça görüyordu. Bu nedenle Avrupa'yı yakından tanımak için Paris, Viyana ve başka başkentlere elçiler gönderildi. Yönetimde bürokratlar (kalem ehli) önem kazandı. <i>(Özetlenmiştir.)</i></p>`,
   q:"a) Metinden yararlanarak Lale Devri'nin ortaya çıkış nedenlerinden ikisini yazınız. b) Geçici elçiliklerin gönderilmesini ve kalem ehlinin önem kazanmasını bu nedenlerle ilişkilendiriniz.",
   c2:"a) Pasarofça yenilgisi Avrupa'nın üstünlüğünü gösterdi; Osmanlı yöneticileri kaybedilenleri geri alma yerine barışı korumayı seçti. b) Barış ortamında Avrupa'yı tanımak için geçici elçiler gönderildi ve gözlemler Sefaretname'de toplandı. Savaş yerine diplomasi ve yenilik öne çıktığı için askerî kesimin etkisi azaldı, bürokratlar yönetimde önem kazandı.",
   o:[
    {ad:"a",m:"Metinden nedenleri belirleyebilme",l:[
     [6,"İki nedeni doğru yazdı (her biri 3): Avrupa'nın üstünlüğünün görülmesi/Pasarofça yenilgisi; barışı koruma politikası."],
     [3,"Yalnızca bir nedeni doğru yazdı."],
     [0,"Neden yerine dönemin yeniliklerini yazdı veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"Sonuçları nedenlerle ilişkilendirebilme",l:[
     [9,"Geçici elçilikleri Avrupa'yı tanıma isteğine, kalem ehlinin önem kazanmasını barış/diplomasi politikasına bağlayarak açıkladı (her biri yaklaşık yarı puan)."],
     [5,"İki sonuçtan yalnızca birini nedenle ilişkilendirdi."],
     [2,"Elçiliklerin ve kalem ehlinin ne olduğunu yazdı; nedenle ilişki kurmadı."],
     [0,"Boş veya ilgisiz cevap."]]}]},

  /* 6 · 1.2 · zor · açık · 25 */
  {c:"1.2",p:25,zor:"zor",tur:"acik",
   k:`<p><b>Kaynak 1:</b> İstanbul'da Kâğıthane mesiresi ve Sadabad çevresinde şenlikler düzenlendi; Çırağan eğlenceleri ve helva sohbetleri yaygınlaştı. Nedim şiirlerinde, Levni minyatürlerinde bu yaşamı anlattı. Varlıklı evlerde koltuk, iskemle ve portre kullanımı arttı.</p><p><b>Kaynak 2:</b> Aynı yıllarda Avrupa'da Osmanlı kıyafetleri ve süslemeleri moda oldu. İngiltere'nin İstanbul elçisinin eşi Lady Mary Wortley Montagu, İstanbul'da gördüğü çiçek aşılamasını ülkesinde tanıttı. Öte yandan pahalılık ve vergi yükü artıyor, geçim sıkıntısı çeken halk saraydaki gösterişe tepki duyuyordu. <i>(İki kaynak özetlenmiştir.)</i></p>`,
   q:"a) Kaynaklardan hareketle Lale Devri'nde Osmanlı–Avrupa kültürel etkileşiminin karşılıklı olduğunu iki örnekle gösteriniz. b) Bu dönemde toplum hayatındaki değişimin tüm toplumsal kesimlere aynı biçimde yansıyıp yansımadığını yorumlayınız.",
   c2:"a) Avrupa'dan Osmanlı'ya gelen etki: varlıklı evlerde koltuk, iskemle ve portre kullanımı. Osmanlı'dan Avrupa'ya giden etki: Avrupa'da Osmanlı kıyafet ve süslemelerinin moda olması ve çiçek aşılamasının İngiltere'ye tanıtılması. b) Değişim her kesime aynı biçimde yansımadı. Eğlence, mesire ve Batı tarzı eşya daha çok saray çevresinde ve varlıklılarda görüldü. Halk ise pahalılık ve vergi yükü altındaydı ve saraydaki gösterişe tepki duydu. Bu hoşnutsuzluk, yenilik karşıtı çevrelerin kışkırtmasıyla birleşerek 1730'da Patrona Halil İsyanı'na zemin hazırladı.",
   o:[
    {ad:"a",m:"Karşılıklı etkileşimi iki yönde örneklendirebilme",l:[
     [10,"Her iki yönden birer doğru örnek verdi (her biri 5): Osmanlı'ya gelen (koltuk, iskemle, portre) ve Avrupa'ya giden (Turquerie/Osmanlı modası, çiçek aşılaması)."],
     [5,"Örneklerin ikisini de aynı yönden verdi ya da yalnızca bir yönden örnek verdi."],
     [0,"Kaynakları kullanmadı veya ilgisiz cevap verdi."]]},
    {ad:"b",m:"Toplumsal kesimlere göre farklı etkiyi yorumlayabilme",l:[
     [15,"Değişimin saray çevresi/varlıklılarda yoğunlaştığını, halkın ise geçim sıkıntısı yaşadığını kaynaklardan göstererek belirtti ve bu farkın sonucunu (halkın tepkisi, 1730 isyanı) yorumladı."],
     [10,"Farklı kesimlere yansıdığını iki kesimi karşılaştırarak yazdı; sonucu (tepki/isyan) yorumlamadı."],
     [5,"Yalnızca bir kesimin yaşamını (saray veya halk) anlattı."],
     [0,"'Herkes aynı şekilde etkilendi' gibi kaynağa aykırı veya ilgisiz cevap."]]}]}
 ]}
];

/* Sınavda çıkabilecekler: Senaryo 6 kazanımlarına göre kısa not (yeni bilgi yok; kitteki içeriğin özeti) */
const MUHTEMEL={
  giris:'Senaryo 6: 1.1\'den 3, 1.2\'den 3 soru.',
  ciktilar:[
    {c:'1.1',ad:'1683–1789 savaşlar ve antlaşmalar',n:3,m:[
      '<b>Sıra:</b> Karlofça, İstanbul, Prut, Pasarofça, Belgrad, Kerden, Küçük Kaynarca',
      '<b>Madde → antlaşma:</b> maddeyi tanı, sonucunu yaz',
      '<b>Arabulucu:</b> İngiltere-Hollanda; Belgrad\'da Fransa',
      '<b>Üç aşama:</b> geri alma → denge → koruma',
      '<b>Rusya:</b> Azak, Karadeniz, sıcak denizler politikası'
    ]},
    {c:'1.2',ad:'Lale Devri',n:3,m:[
      '<b>Nedenler:</b> Pasarofça yenilgisi, barış, Avrupa\'yı tanıma',
      '<b>Yenilikler:</b> elçilik, matbaa, Tercüme Heyeti, Tulumbacı, aşı, çini',
      '<b>Toplum:</b> saray çevresinde Batı etkisi',
      '<b>Patrona Halil 1730:</b> Lale Devri biter',
      '<b>Yorum:</b> eğlence mi, ıslahat mı? Gerekçeyle savun'
    ]}
  ],
  tip:['Kısa cevap: tarih, ad ya da antlaşma','Kaynak: metin, harita, tablo oku; sonuç yaz','Neden–sonuç: iki-üç cümle']
};
