/* Coğrafya 11 · 1. yazılı cep kiti · veri
   Kapsam kaynağı: 11. sınıf MEB seçmeli Coğrafya dersi 1. dönem 1. ortak yazılı Senaryo 3 tablosu
   (Classroom: "1.1 sınav soru senaryoları" görseli; Drive 1ohbh1R5R-eeVCyt9W9gH9PTTsB_JNYUZ) ve dört MEB örnek soru görseli
   (Drive 14aRAMAtPEz0PEDfn_-ci6PpK6PYQj9pW, 1uZ341CXP9hw98gPMM41S0SISBH6jBuQ7, 1GiKb4Wcmzr7T_RKC2Ql9qK6X-6Ipx3DT, 1h8sl8Fvq0nzwEKGXET0p9SmEPak4MdLR).
   Ana kaynaklar: öğretmenin paylaştığı üç sunum (11.1.1 Mekânsal Sorunlar 17wA..., Su Kaynakları 1kT2..., Web Tabanlı CBS 17wAuuqU...: son sunum
   194 MB olduğu için okunamadı; içerik MEB 11. sınıf Coğrafya ders kitabı (2026-2027 baskısı, Drive 1AAEhyHIAd7_k5RWcPB61jOKvYv92rK15)
   2.1 bölümünden alındı) + MEB TYMM Coğrafya öğretim programı (tymm.meb.gov.tr, 11. sınıf 1., 2., 3. üniteler; güncelleme 17.08.2026).
   Metinler kendi cümlelerimizdir; kaynaklardan uzun alıntı yok. Veri tablolarında "(örnek veri)" yazanlar uydurmadır, gerçek ölçüm değildir.
   MC biçimi: o[0] doğru şık (arayüz şıkları karıştırır), e = Türkçe açıklama. c = öğrenme çıktısı ("1.1","2.1","3.1","3.2").
   PROVA biçimi: {c,p,k (kaynak/metin, HTML olabilir),q,c2 (örnek cevap),o:[[puan,ölçüt],...]}. */

const SINAV={tarih:"2026-11-10",gun:"10 Kasım 2026 Salı"};

/* Senaryo 3 (1. dönem 1. ortak yazılı) */
const SENARYO=[
 {k:"COĞ.11.1.1",t:"Mekânsal sorunların çözümünde coğrafya biliminin katkılarını yapılandırabilme",n:2},
 {k:"COĞ.11.2.1",t:"Web tabanlı CBS aracılığı ile harita uygulamaları yapabilme",n:1},
 {k:"COĞ.11.3.1",t:"Yeryüzündeki su kaynaklarını sınıflandırabilme",n:2},
 {k:"COĞ.11.3.2",t:"Türkiye'deki su kaynaklarının çevresel, ekonomik, politik ve sosyokültürel etkilerini sorgulayabilme",n:1}
];

/* Kendini kontrol listesi: MEB programındaki süreç bileşenlerinden türetildi (go = ilgili sekme) */
const RUBRIK=[
 {t:"Mekân ve mekânsal sorun kavramlarını tanımlayıp yerel, bölgesel, küresel ölçekten örnek verebilirim.",go:"mekan"},
 {t:"Mekânsal sorunları ölçeğe, tematik içeriğe ve mekânın niteliğine göre sınıflandırabilirim.",go:"mekan"},
 {t:"Verilen bir mekânsal sorunu coğrafyanın uygun alt dalıyla eşleştirebilirim.",go:"mekan"},
 {t:"Coğrafyanın bir sorunun çözümüne katkısını nedensel ve mantıksal ilişkilerle yazabilir, tespit-izleme, etki analizi-modelleme, çözüm-planlama basamaklarını sıralayabilirim.",go:"mekan"},
 {t:"Coğrafyayı diğer bilimlerden ayıran özellikleri ve diğer bilimlerle iş birliğini açıklayabilirim.",go:"mekan"},
 {t:"Web tabanlı CBS'nin bileşenlerini (kullanıcı, genel ağ, sunucu) ve temel kavramlarını (katman, öz nitelik tablosu, bulut bilişim) açıklayabilirim.",go:"cbs"},
 {t:"Web tabanlı CBS'nin özelliklerini, kullanım alanlarını ve bilgisayar tabanlı CBS'den farkını yazabilirim.",go:"cbs"},
 {t:"Birleştirme, çakıştırma, sorgulama, genelleştirme ve sembolleştirmeyi ayırt edebilirim.",go:"cbs"},
 {t:"Web tabanlı CBS'de hazırlanmış bir haritayı okuyup çözümleyebilir, haritadan çıkarım yapabilirim.",go:"cbs"},
 {t:"Yeryüzündeki suların dağılışını (tuzlu-tatlı, buzul, yer altı, yüzey suları) ve su döngüsünü anlatabilirim.",go:"su"},
 {t:"Okyanus, deniz, göl, akarsu, buzul, yer altı suyu ve sulak alanın özelliklerini sayabilirim.",go:"su"},
 {t:"Su kaynaklarını bulunduğu yere, kimyasal ve fiziksel özelliklerine göre sınıflandırıp örneklerle etiketleyebilirim.",go:"su"},
 {t:"Türkiye akarsularının özelliklerini, sınıraşan ve sınır oluşturan suları sayabilirim.",go:"tr"},
 {t:"Deniz yetki alanlarını ve Mavi Vatan'ı açıklayabilirim.",go:"tr"},
 {t:"Türkiye'deki su kaynaklarının çevresel, ekonomik, politik ve sosyokültürel etkilerini örneklerle (GAP, baraj gölü, Tuz Gölü, Eğirdir vb.) açıklayabilirim.",go:"tr"}
];

/* Konu sekmeleri: kart = {h,p[]}, tablo = {h,kol[],sat[][],not}, vaka = {h,satir:[[etiket,metin],...]}, kavram = {k,a}, esle = ESLE_GRUP id'leri */
const KONU=[
{id:"mekan",ad:"Mekânsal sorunlar",k:"COĞ.11.1.1",n:2,
 giris:"Sınavda bir sorunu (metin, tablo ya da haber) okuyup şunu yapman beklenir: sorunu ve nedenlerini belirlemek, etkilerini söylemek, coğrafyanın çözüme nasıl katkı sağladığını nedensel bir dille yazmak ve diğer bilimlerle iş birliğini göstermek. 11.1.1 en çok soru çıkan çıktılardan biri: senaryoda 2 soru var.",
 kart:[
  {h:"Mekân ve mekânsal sorun",p:[
   "Mekân: insanların doğal çevreyle etkileşime girerek anlam yüklediği ve kimlik kazandığı; fiziksel, sosyal, ekonomik ve kültürel süreçlerin bir araya geldiği dinamik yeryüzü parçası. Zamanla değişir ve dönüşür.",
   "Mekânsal sorun: yerel, bölgesel veya küresel ölçekte ortaya çıkan fiziksel, sosyal, ekonomik ve çevresel problemler.",
   "Örnekler: çevre kirliliği, plansız kentleşme, arazinin yanlış kullanımı, su yetersizliği, orman yangınları, tuzlanma, ulaşım sorunları."]},
  {h:"Mekânsal sorunlar nasıl sınıflandırılır?",p:[
   "Ölçeğe göre: yerel, bölgesel, küresel.",
   "Tematik içeriğe göre: sosyal, ekonomik, çevresel, politik/yönetsel.",
   "Mekânın niteliğine göre: kentsel ve kırsal.",
   "Farklı biçimlerde sınıflandırılan her sorun, coğrafyanın bir ya da birkaç alt dalıyla eşleştirilebilir."]},
  {h:"Coğrafya sorunu nasıl ele alır?",p:[
   "Önce sorunun ne olduğunu belirler.",
   "Soruna yol açan mekân özelliklerini ve koşulları tespit eder (konum, yer şekli, iklim, toprak, su, nüfus, yerleşme gibi).",
   "Sorunun gerçekleştiği yerde ne tür etkilere yol açabileceğini ortaya koyar.",
   "Benzer sorunları yaşayan ya da yaşaması muhtemel mekânların dağılışını inceler.",
   "Sorunun çözümüne nasıl ve hangi yönlerden katkı sağlayabileceğini belirler."]},
  {h:"Cevap kalıbı: üç basamak",p:[
   "Tespit ve izleme: sorun nerede, ne kadar yaygın? Zaman içinde nasıl değişiyor? (haritalama, uzaktan algılama, CBS, saha gözlemi)",
   "Etki analizi ve modelleme: sorun iklimi, suyu, canlıları, insanı ve ekonomiyi nasıl etkiliyor? Gelecekte ne olabilir? (senaryo ve model)",
   "Çözüm ve planlama (müdahale): hangi alanlara hangi önlem? (uygun yer seçimi, risk haritası, plan, denetim, izleme)",
   "Açık uçlu soruda bu üç basamağı birer cümleyle, soruna özgü örnekle yaz. MEB örnek sorusu (tropikal ormanların tahribi) tam bunu istiyor."]},
  {h:"Coğrafyanın farkı",p:[
   "Veriyi yalnızca sayı ya da nitelik olarak değil, konum bilgisiyle birleştirerek ele alır.",
   "Olayların yeryüzündeki dağılışını, aralarındaki bağlantıları ve örüntüleri görselleştirerek sorunun nerede ve neden o biçimde ortaya çıktığını gösterir (harita, CBS).",
   "Diğer bilimleri tamamlar: altyapı verileri, çevresel parametreler, demografik bilgiler, ekonomik göstergeler gibi farklı disiplinlerin verilerini mekânsal bağlantılar içinde bir araya getirir.",
   "Bu yüzden karmaşık sorunlara çok boyutlu ve bütüncül çözüm önerisi üretebilir. İş birliği örnekleri: şehir planlama, çevre mühendisliği, sosyoloji, jeoloji, ziraat, orman bilimi."]}
 ],
 vaka:[
  {h:"Iğdır'da hava kirliliği",satir:[
   ["Sorun","Kış aylarında hava kalitesinin düşmesi (kirli hava)."],
   ["Nedenler","Doğal: dağlarla çevrili çukur konum, kışın sıcaklık terselmesi (soğuk havanın çukurda kalması). Beşerî: ısınmada kalitesiz yakıt, sanayi ve ulaşım kaynaklı emisyonlar; partikül madde artışı."],
   ["Etki","Hava kirliliği, canlı yaşamı ve ekosistem üzerinde olumsuz etki, sağlık sorunları."],
   ["Çözüm / katkı","Bilimsel çalışmalar ve kirlilik kaynaklarının belirlenmesi; Temiz Hava Eylem Planı: yakıt denetimi, yakma sistemlerinin iyileştirilmesi, binalarda mantolama, motorlu taşıt emisyonunun azaltılması, doğal gaz kullanımının yaygınlaştırılması."]]},
  {h:"Bursa Ovası'nda arazinin yanlış kullanımı",satir:[
   ["Sorun","Verimli tarım ovasının sanayi ve yerleşme baskısıyla daralması."],
   ["Nedenler","Türkiye'nin ilk organize sanayi bölgesinin ovada kurulması; iç ve dış göçle hızlı kentleşme."],
   ["Etki","Tarım alanlarının azalması, çevre kirliliği, ekolojik dengenin bozulması; gıda güvenliği ve çevre sağlığı riski."],
   ["Çözüm / katkı","2017'de ovanın \"Büyük Ova Koruma Alanı\" ilan edilmesi ve tarım dışı yapılaşmanın sınırlandırılması; çevre düzeni planında tarım alanı sınırlarının netleştirilmesi; kaçak yapılaşmanın uydu görüntüleri ve coğrafi bilgi sistemleriyle tespiti; il toprak koruma kurulu denetimleri."]]},
  {h:"Kerç Boğazı'nda tanker kazası (15 Aralık 2024)",satir:[
   ["Sorun","Fırtınada iki petrol gemisinin kazası; binlerce ton akaryakıtın denize sızması (kaynaklara göre 4 bin tonun üzerinde)."],
   ["Konum","Karadeniz ile Azak Denizi arasındaki boğaz; Rusya'nın Temrükskiy ve Anapa kıyıları."],
   ["Etki","Kıyı şeridinde doğal yaşamın olumsuz etkilenmesi, deniz ve kıyı ekosistemi, hava ve çevre kirliliği, kıyı turizmi; acil durum ilanı."],
   ["Çözüm / katkı","Kontrollü yakma, bariyer ve kepçelerle fiziksel toplama, kimyasalla yayılmayı önleme, biyolojik ayrıştırma (mikroorganizma), yeni nesil temizleme malzemeleri."]]},
  {h:"Konya'da obruklar",satir:[
   ["Sorun","Obruk (çöküntü çukuru) sayısının artması: Mayıs 2024 ile Mayıs 2025 arasında 20 yeni obruk; toplam sayı 642."],
   ["Nedenler","Kurak bir kıştan sonra gelen bahar yağışları ve aşırı yer altı suyu kullanımı. Süreç: kayaçlardaki çatlaklardan su sızar, yer altı suyu kayaçları çözerek oyuk oluşturur, oyuğun tavanı çöker."],
   ["Etki","Tarım alanları, yapılar ve can güvenliği için risk."],
   ["Çözüm / katkı","Yer altı suyunun kontrollü kullanımı; teknoloji: yapay zekâ yöntemiyle obruk duyarlılık haritası üretilmesi (obruk alanlarının tespiti projesi)."]]},
  {h:"Kuraklık ve sünger şehir (ders kitabı etkinliği)",satir:[
   ["Kuraklığın etkileri","Tarım: toprak nemi azalır, verim düşer. Hayvancılık-yaylacılık: su ve yem azalır, hayvan göçü. Balıkçılık: su seviyesi düşer, habitat daralır, balık ölümleri. Ormancılık: yangın ve hastalık riski artar. Kentleşme: kırdan kente göç hızlanır."],
   ["Kuraklığı hafifletme (coğrafyanın katkısı)","Meteorolojik ölçüm ve uzaktan algılamayla kuraklığın tahmini; erken uyarı sistemleri; riskli alanların belirlenmesi; su kaynaklarının yönetimi; kırsalda geçim kaynaklarının çeşitlendirilmesi ve tarım dışı faaliyetlerin teşviki."],
   ["Sünger şehir","Suyu şehirden hızla uzaklaştırmak (gri altyapı: kapalı kanalizasyon) yerine yağmuru kaynağında tutan, süzen, depolayan yeşil altyapı. Sel riski azalır, su kalitesi artar, su kıtlığına çözüm olur. Bileşenler: erken aşamada plana dâhil etme, suyu kaynağında yönetme, yüzey suyunu kaynak sayma, kirliliği doğa tabanlı çözümlerle yönetme, sürdürülebilir kentsel drenaj."]]}
 ],
 tablo:[
  {h:"Mekânsal sorun ↔ coğrafyanın alt dalı",kol:["Sorun örneği","Alt dal"],sat:[
   ["Trabzon'da heyelanların ulaşım altyapısında sorun çıkarması","Afetler coğrafyası"],
   ["Harran Ovası'nda bilinçsiz sulamayla tuzlanma ve toprak bozulması","Toprak coğrafyası"],
   ["Kırsaldan kentlere göçle yaş ortalamasının düşmesi, kırsalda yaşlı oranının artması","Nüfus coğrafyası"],
   ["Akdeniz kıyılarında orman yangınlarının bitki ve hayvan türlerini tehdit etmesi","Biyocoğrafya"],
   ["İstanbul'da plansız kentleşme ve altyapı yetersizliği","Yerleşme coğrafyası"],
   ["Zonguldak'ta kömür madenciliğinin azalmasıyla işsizliğin artması","Ekonomik coğrafya"],
   ["Küresel ısınmayla sıcaklık artışı ve iklim bölgesi sınırlarının değişmesi","Klimatoloji"],
   ["Doğu Anadolu'da akarsu debilerinin düşmesinin sulama ve enerjiyi etkilemesi","Hidrografya"],
   ["Artvin'de dağlık ve engebeli arazi yüzünden ulaşımın zorlaşması","Jeomorfoloji"]
  ],not:"Eşleştirme sorularında sorunun ana konusuna bak: toprak mı, nüfus mu, su mu, iklim mi, yer şekli mi?"},
  {h:"Üç sınıflandırma ölçütü",kol:["Ölçüt","Gruplar","Örnek"],sat:[
   ["Ölçeğe göre","Yerel, bölgesel, küresel","Iğdır'da hava kirliliği (yerel); Konya'da obruklar (bölgesel); küresel ısınma (küresel)"],
   ["Tematik içeriğe göre","Sosyal, ekonomik, çevresel, politik/yönetsel","Göç, işsizlik, kirlilik, kıyı yetki sorunları"],
   ["Mekânın niteliğine göre","Kentsel, kırsal","Trafik sıkışıklığı (kentsel); kuraklıkla tarımın bozulması (kırsal)"]
  ],not:""}
 ],
 kavram:[
  {k:"Mekân",a:"İnsanın doğal çevreyle etkileşip anlam yüklediği, dinamik yeryüzü parçası."},
  {k:"Mekânsal sorun",a:"Yerel, bölgesel veya küresel ölçekte ortaya çıkan fiziksel, sosyal, ekonomik ve çevresel problemler."},
  {k:"Bilimsel yaklaşım",a:"Sorunu veriye dayalı inceleyip nedensel bağlantılar kurma; coğrafyada veriler konumla birleştirilir."},
  {k:"Dağılış",a:"Bir olayın ya da olgunun yeryüzünde nerede, hangi yoğunlukta bulunduğu."},
  {k:"Bağlantı",a:"Olaylar ve olgular arasındaki neden-sonuç ve etkileşim ilişkisi."},
  {k:"Tespit ve izleme",a:"Sorunun yerini ve yayılışını belirleme, zaman içindeki değişimini izleme."},
  {k:"Etki analizi ve modelleme",a:"Sorunun çevre ve insan üzerindeki etkisini çözümleme, geleceğe yönelik senaryo üretme."},
  {k:"Çözüm ve planlama",a:"Uygun önlem ve müdahale alanını belirleme, plan hazırlama ve uygulamayı izleme."},
  {k:"Sıcaklık terselmesi",a:"Yüksekle birlikte soğuması gereken havanın çukur alanlarda soğuk kalıp üstte daha sıcak hava bulunması; kirleticilerin yerde birikmesine yol açar (Iğdır örneği)."},
  {k:"Sünger şehir",a:"Yağmur suyunu tutup süzen ve depolayan yeşil altyapıyla suyu kentin doğal döngüsüne katan kentsel yaklaşım."},
  {k:"Obruk",a:"Kayaçların yer altı suyunca çözünmesiyle oluşan boşluğun tavanının çökmesiyle meydana gelen çukur."},
  {k:"Gri altyapı / yeşil altyapı",a:"Gri: suyu hızla uzaklaştıran kapalı kanalizasyon gibi yapılar. Yeşil: suyu doğal yollarla emen ve filtreleyen sistemler."}
 ],
 esle:["altdal"]
},
{id:"cbs",ad:"Web tabanlı CBS",k:"COĞ.11.2.1",n:1,
 giris:"Bu çıktıda soru bir web tabanlı CBS haritası ya da tablosu verip okuma, çözümleme, çıkarım ve (varsa) haritayı nasıl oluşturacağını sorar. Kavramları ve çözümleme zincirini bil; hazır haritadan çıkarım yazmayı çalış. Senaryoda 1 soru var.",
 kart:[
  {h:"Web tabanlı CBS nedir?",p:[
   "CBS (coğrafi bilgi sistemleri): mekânsal verileri toplayan, düzenleyen, sorgulayan, çözümleyen ve haritalayan bilgisayar tabanlı sistem.",
   "Web tabanlı CBS: CBS ile web teknolojilerinin bütünleşmesiyle ortaya çıkan, genel ağ üzerinden tarayıcıyla kullanılan uygulamalar. İlk olarak 1990'lı yıllarda ortaya çıktı.",
   "Bulut bilişim: verilerin ve uygulamaların genel ağ üzerindeki bulut sunucularında depolanıp her yerden ulaşılabilmesi; web CBS'nin temelidir.",
   "Kullanıcılar, ek yazılım ya da güçlü donanım gerekmeden güncel mekânsal veriye ulaşır."]},
  {h:"Temel bileşenler ve çalışma düzeni",p:[
   "Üç bileşen: kullanıcı (istemci), genel ağ ve sunucu (bulut sistemi).",
   "Kullanıcı tarayıcıdan komut gönderir; sunucu komutu işler; sonuç harita ya da veri olarak genel ağ üzerinden kullanıcıya döner.",
   "Verilerin toplanması, çözümlenmesi ve depolanması gibi kritik işlemlerin çoğu sunucuda yapılır; bu yüzden kullanıcının bilgisayarına yük binmez."]},
  {h:"Veri yapısı: katman, öz nitelik tablosu",p:[
   "Her mekânsal veri kümesi bir katman olarak temsil edilir (örneğin yollar, binalar, nüfus, arazi örtüsü).",
   "Katmanlar raster (piksel ağı, uydu görüntüsü gibi) veya vektör (nokta, çizgi, alan) veri biçiminde olur.",
   "Vektör katmanın ayrıntıları öz nitelik tablosundadır. Kullanıcı yetkisi varsa buraya veri girişi yapar, veriyi güncelleyebilir.",
   "Veri görüntüleme: sonuçlar harita, grafik veya tablo olarak sunulur.",
   "Detay (ayrıntı düzeyi): verinin ne kadar ayrıntılı gösterildiği; genelleme, ölçeğe göre ayrıntıyı azaltmaktır."]},
  {h:"Çözümleme zinciri",p:[
   "Birleştirme: parçalı ya da farklı kaynaklı verileri tek bir katmanda toplama; ayrıntı düzeyi korunur. İlk adımdır.",
   "Çakıştırma: katmanları üst üste bindirerek örtüşmeleri ve mekânsal örüntüleri gerçek zamanlı görme.",
   "Sorgulama: çakıştırma sonuçları içinden yalnızca belirli ölçütlere uyan verileri seçme (dinamik filtre).",
   "Genelleştirme: veri boyutunu ve ayrıntıyı azaltıp performansı artırma; ölçeğe duyarlı ve otomatiktir (uzaklaşınca ara sokaklar kaybolur).",
   "Sembolleştirme: verilerin görsel temsili: renk paleti, sembol ve boyut seçimi; haritayı anlaşılır kılar."]},
  {h:"Kullanım alanları ve özellikleri",p:[
   "Alanlar: ulaşım, turizm, güvenlik, ormancılık, afet yönetimi, şehir planlama, tarım, eğitim, ticaret, sağlık.",
   "Örnekler: anlık trafik, kaza ve yol çalışması bilgisi; orman yangını uyarısı; acil durumda konum paylaşımı; en yakın eczane, müze, restoran bulma; geçmiş uydu görüntülerini karşılaştırarak değişimi izleme (deprem öncesi-sonrası, yangın sonrası arazi örtüsü).",
   "Özellikler: kurulum gerekmez (tarayıcıyla giriş), genel ağ olan her yerden erişim, birden fazla kullanıcı aynı anda çalışabilir, otomatik güncellenir, çoğu ücretsiz ya da düşük ücretli, herkesçe kullanılabilir.",
   "Sınırlılıklar: genel ağ bağlantısı şart; bilgisayar tabanlı CBS'ye göre daha sınırlı ve temel analiz imkânı sunar."]},
  {h:"Anlatısal sunum: hikâye haritası ve yaşayan atlas",p:[
   "Hikâye haritası: metin, fotoğraf, video ve harita katmanlarını tek akışta birleştirir; kullanıcı adım adım kaydırarak çözümleme sonuçlarını anlatı gibi izler.",
   "Yaşayan atlas: sürekli güncellenen, bulut tabanında barındırılan veri katmanlarını bir araya getirir; hazır tematik haritalara erişim, kendi verini yükleme, küresel veri setleriyle karşılaştırma sunar. Hava durumu, afet uyarısı gibi gerçek zamanlı veri akışlarıyla zenginleşir."]},
  {h:"Haritayla çalışma: okuma, çözümleme, çıkarım, oluşturma",p:[
   "Harita okuma: başlık, yıl, lejant, ölçek, yön oku ve katmanları oku; hangi bilgi hangi renk ya da sembolle gösteriliyor?",
   "Çözümleme: dağılışı ve değişimi karşılaştır (önce–sonra, il–il), en yüksek ve en düşük değerleri bul, nedenlerini ara.",
   "Çıkarım: veriye dayanarak gelecekte ne olabileceğini ve ne yapılması gerektiğini yaz. 'Çıkarım' verilen bilgiden yola çıkar; kanıtsız genelleme yapma.",
   "Oluşturma: veriyi temin et (resmî kaynak), uygulamaya yükle, katman ekle, sınıf sayısı, renk skalası ve lejantı ayarla, başlık ve yön oku ekle, çıktı al."]},
  {h:"Resmî veri kaynakları ve uygulama örnekleri",p:[
   "Kaynaklar: Türkiye İstatistik Kurumu, Meteoroloji Genel Müdürlüğü, Ulusal Akıllı Şehir Açık Veri Platformu, Türkiye Ulusal Coğrafi Bilgi Sistemi, Bulut Kent Bilgi Sistemi.",
   "Tapu ve Kadastro Genel Müdürlüğü parsel sorgulama: koordinatla sorgu, haritadan sorgu, ölçüm aracı, parsel öz nitelik tablosu, KML dosyası indirme.",
   "MTA Yer Bilimleri Harita Görüntüleyici: jeolojik formasyon, diri fay, deprem ve yüzey kırığı katmanları; çizim editörüyle mesafe ölçme.",
   "OGM Materyal CBS Platformu: Excel tablosunu yükleyip il düzeyinde harita üretme (örneğin illere göre hanehalkı büyüklüğü), sınıf sayısı, renk skalası ve lejant ayarı.",
   "Mahremiyet: mekânsal veri kişilerin özel hayatına dair unsurlar içerebilir; başkalarının verisi izinsiz kullanılmaz."]}
 ],
 tablo:[
  {h:"Web tabanlı CBS ↔ bilgisayar tabanlı CBS",kol:["Özellik","Web tabanlı CBS","Bilgisayar tabanlı CBS"],sat:[
   ["Kurulum","Gerekmez; tarayıcıdan giriş","Bilgisayara yazılım kurulur"],
   ["Erişim","Genel ağ olan her yerden, mobil cihazla da","Genellikle yazılımın kurulu olduğu bilgisayardan"],
   ["Kullanıcı kitlesi","Geniş kitle; herkesçe kullanılabilir","Çoğunlukla uzman kullanıcılar"],
   ["Maliyet","Çoğu ücretsiz ya da düşük ücretli","Lisans maliyeti yüksek olabilir"],
   ["Analiz gücü","Daha sınırlı, temel analizler","Güçlü ve karmaşık analizler"],
   ["Güncelleme / iş birliği","Otomatik güncellenir; birden fazla kullanıcı aynı anda çalışabilir","Kullanıcı kendisi günceller; paylaşım sınırlı"],
   ["Genel ağ bağlantısı","Zorunlu","Zorunlu değil"]
  ],not:"Karşılaştırma tablosunun özünü ders kitabı vermiştir; son iki satır genel bilgidir."},
  {h:"Çözümleme türleri: örneklerle",kol:["Tür","Ne yapar?","Örnek"],sat:[
   ["Birleştirme","Farklı kaynaklı verileri tek katmanda toplar","Belediye ve kadastro bina verilerinin tek 'yapı' katmanı"],
   ["Çakıştırma","Katmanları üst üste bindirir","Su, kanalizasyon ve yol katmanlarını aynı anda açma"],
   ["Sorgulama","Ölçüte uyan veriyi seçer","Son 5 yılda yapılan binaları bulma"],
   ["Genelleştirme","Ayrıntıyı azaltıp sadeleştirir","Uzaklaşınca yalnızca ana yolların görünmesi"],
   ["Sembolleştirme","Veriyi renk ve sembolle gösterir","Hastaneyi kırmızı haç, okulu mavi daire yapma"]
  ],not:""}
 ],
 vaka:[
  {h:"Göksu Havzası örneği: 2000–2020 arazi değişimi (ders kitabından)",satir:[
   ["Araç","Web tabanlı CBS ile hazırlanmış iki yıllık arazi örtüsü haritası ve değişim tablosu."],
   ["Veri (km²)","Tarım arazisi 263→210 (−%20); yapılaşma 191→402 (+%110); yarı kurak alan 6520→6370; kısa çalılık 2840→2790; orman 884→901; sulak alan seyrek bitki örtüsü 27→12 (−%54)."],
   ["Okuma","2000'de en geniş sınıf yarı kurak alan; en büyük artış yapılaşmada, en büyük azalma sulak alanda ve tarımda."],
   ["Çıkarım","Yerleşmeler büyük olasılıkla verimli tarım ve sulak alanlar üzerine yayılmıştır; bu, gıda üretimi ve ekosistem için risk demektir. Planlama: koruma alanları, yapılaşma sınırı."]]},
  {h:"Heyelan set gölü: İslahiye (ders kitabından)",satir:[
   ["Olay","Kahramanmaraş merkezli depremlerin ardından Gaziantep'in İslahiye ilçesinde bir vadide heyelan; Değirmencik Deresi'nin önü kapandı ve yaklaşık 3 kilometrelik bir heyelan set gölü oluştu; yol ve elektrik direkleri su altında kaldı."],
   ["Web CBS katkısı","Farklı tarihli görüntüler karşılaştırılarak değişim görülür; heyelan alanı ve gölün yayılışı haritalanır; benzer eğimli vadilerde ikincil afet (heyelan, set gölü, taşkın) riski önceden değerlendirilir."]]}
 ],
 kavram:[
  {k:"CBS",a:"Coğrafi bilgi sistemleri: mekânsal verileri toplama, düzenleme, sorgulama, çözümleme ve haritalama sistemi."},
  {k:"Web CBS",a:"Genel ağ üzerinden tarayıcıyla kullanılan, sunucuda çalışan CBS uygulaması."},
  {k:"Bulut bilişim",a:"Verilerin ve uygulamaların genel ağdaki bulut sunucularında tutulup her yerden ulaşılması."},
  {k:"Sunucu",a:"Komutu işleyip sonucu harita ya da veri olarak kullanıcıya gönderen bilgisayar sistemi."},
  {k:"Katman",a:"Bir mekânsal veri kümesinin harita üzerinde ayrı bir tabaka olarak gösterilmesi."},
  {k:"Öz nitelik tablosu",a:"Vektör katmandaki nesnelerin ayrıntılarının (ad, nüfus, alan vb.) tutulduğu tablo."},
  {k:"Veri girişi",a:"Yetkili kullanıcının öz nitelik tablosuna veri eklemesi ya da güncellemesi."},
  {k:"Veri görüntüleme",a:"Verilerin harita, grafik ya da tablo biçiminde sunulması."},
  {k:"Birleştirme",a:"Farklı kaynaklı verileri tek bir katmanda toplama."},
  {k:"Çakıştırma",a:"Katmanları üst üste bindirip örtüşmeleri görme."},
  {k:"Sorgulama",a:"Ölçüte uyan verileri seçme."},
  {k:"Genelleme / genelleştirme",a:"Ölçeğe göre ayrıntıyı azaltıp veri boyutunu küçültme."},
  {k:"Sembol",a:"Harita üzerinde bir bilgiyi gösteren işaret, renk ya da çizgi biçimi."},
  {k:"Detay",a:"Haritada gösterilen ayrıntı düzeyi."},
  {k:"Hikâye haritası",a:"Harita ile metin, fotoğraf ve videoyu anlatı akışında birleştiren sunum."},
  {k:"Yaşayan atlas",a:"Sürekli güncellenen ve bulutta barındırılan tematik harita ve veri katmanları platformu."},
  {k:"KML",a:"Haritalarda konum ve çizim verisini saklayan, başka uygulamalarda da açılabilen dosya biçimi (Keyhole Markup Language)."}
 ],
 esle:["cozumleme","cbsdy"]
},
{id:"su",ad:"Su kaynakları",k:"COĞ.11.3.1",n:2,
 giris:"Önce tabloları ve oranları öğren; sonra sınıflandırma ölçütlerini ve her ölçüte örnek vermeyi çalış. MEB örnek sorusu: bir gezi metnindeki su kaynaklarını iki ölçüte göre sınıflandırmak. Senaryoda 2 soru var.",
 kart:[
  {h:"Hidrosfer ve su döngüsü",p:[
   "Dünya yüzeyinin yaklaşık %71'i sularla kaplıdır. Yeryüzündeki suların tamamına su küre (hidrosfer) denir; sular coğrafyasına hidrografya denir.",
   "Su döngüsü (hidrolojik döngü) Güneş enerjisiyle işler: buharlaşma ve terleme, yoğuşma, yağış (yağmur, kar), yüzeysel akış, sızma, yer altı akışı.",
   "Karalara inen yağışın bir kısmı sızarak yer altı sularını oluşturur, bir kısmı akarsulara ve göllere karışır. Döngü su kaynaklarının sürekliliğini sağlar.",
   "Sular tarımda (sulama), sanayi ve enerjide, içme ve kullanmada (evsel) kullanılır."]},
  {h:"Dünyada suyun dağılışı",p:[
   "Yaklaşık %97,5 tuzlu su (okyanuslar ve denizler), %2,5 tatlı su.",
   "Tatlı suyun yaklaşık %69'u buzullar ve kalıcı kar örtüsünde, yaklaşık %30'u yer altında (ders sunumunda toprak nemi, bataklık, donmuş toprak dâhil %30,8); yüzey suları (göl ve akarsu) tatlı suyun yüzde 1'i kadar.",
   "Kaynaklara göre küçük farklar var (örneğin buzul %68,9 ya da %68,7; yer altı %30,8 ya da %30,1). Sınavda sorunun verdiği veriyi kullan; ezber için 'yaklaşık' değerler yeter.",
   "Sonuç: tatlı su kaynakları sınırlıdır; en büyük rezerv donmuş hâldedir, doğrudan kullanımı zordur. Bu yüzden korunması ve tasarruf önemlidir.",
   "Karalar yarım küreye eşit dağılmaz: kuzey yarım kürede %39 kara, %61 deniz; güney yarım kürede %19 kara, %81 deniz."]},
  {h:"Okyanuslar ve denizler",p:[
   "Okyanus: kıtalar arasındaki büyük çukurları dolduran su kütlesi. Kitapta beş okyanus gösterilir: Büyük (Pasifik), Atlas (Atlantik), Hint, Kuzey (Arktik) ve Güney okyanusu.",
   "Deniz: kıtaların kenarında ya da kıta içlerine sokulmuş, okyanusa bağlı ama okyanustan küçük su kütlesi.",
   "Kenar deniz: okyanustan adalar ve yarımadalarla ayrılmış, geniş boğazlarla bağlı (Çin, Japon, Kuzey Denizi).",
   "İç deniz: okyanuslara boğazlarla bağlanan, kıta içine sokulan (Akdeniz, Karadeniz, Kızıldeniz, Baltık).",
   "Tuzluluk enleme, buharlaşma oranına ve akarsuların getirdiği tatlı su miktarına bağlıdır: Kızıldeniz yaklaşık ‰41, Baltık'ın bazı kesimleri ‰2'ye kadar. Karadeniz geçmişte tatlı su gölüydü.",
   "Sıcaklık: ekvator çevresinde yaklaşık 25°C, kutup çevresinde −2°C'ye kadar. Sıcak (Gulf Stream) ve soğuk (Labrador) akıntılar aynı enlemde farklı sıcaklık yaratır."]},
  {h:"Göller",p:[
   "Göl: karalar üzerindeki çukur ya da çanakları dolduran, deniz ve okyanuslarla doğrudan bağlantısı olmayan durgun su kütlesi.",
   "Oluşum: tektonik hareketler, volkanizma, buzullar, karstlaşma, meteorit çarpması, doğal ve yapay set oluşumu.",
   "Sınıflandırma (oluşum biçimi): yerlikaya göller (tektonik, volkanik, buzul, meteorit, karstik), set gölleri (lav, heyelan, alüvyal, kıyı, moren, traverten, buzul, resif, yapay set) ve relikt göller.",
   "Su özelliğine göre: tatlı, tuzlu, acı, sodalı. Bunu iklim, çanak kayaç yapısı, besleyen suyun özelliği, göl büyüklüğü ve derinliği ile gideğenin olup olmaması belirler.",
   "Gideğen (göl ayağı): çanağın kapasitesini aşan suyu dışarı taşıyan akarsu.",
   "Rekorlar: Hazar Gölü en büyük (yaklaşık 371.000 km²; kaynağa göre 371.000–386.400 km²); Baykal en derin (yaklaşık 1640 m, Rusya; eski kaynaklarda 1740 m); Lut Gölü (Ölü Deniz) en alçak göl: deniz seviyesinin yaklaşık 400 m altında (eski kaynaklarda 394 m; su çekildiği için güncel ölçüm 430 m civarıdır); Titikaka (Titicaca) yaklaşık 3810 m yükseklikte (Peru–Bolivya).",
   "Kullanım: içme-kullanma, sulama, enerji, soda ve tuz elde etme, ulaşım, balıkçılık, turizm."]},
  {h:"Akarsular",p:[
   "Akarsu: eriyen kar ve buzulla, yağışla ya da kaynak suyla beslenen, bir yatak boyunca eğime bağlı olarak sürekli ya da belli bir dönem akan su. Tatlı yüzey sularının yaklaşık %2'sini oluşturur (ders sunumundaki değer).",
   "Kaynak: doğduğu yer. Ağız: döküldüğü yer. Akarsu yatağı: kaynaktan ağza kadar aktığı çukurluk. Havza: kollarıyla birlikte suyunu topladığı alan. Su bölümü çizgisi: havzaları birbirinden ayıran sınır. Yukarı, orta ve aşağı çığır; taban seviyesi.",
   "Açık havza: suyunu denize ya da okyanusa ulaştıran akarsular (Çoruh, Karadeniz'e). Kapalı havza: ulaştıramayan (Aras, Hazar Gölü'ne).",
   "Akım (debi): yatağın herhangi bir kesitinden bir saniyede geçen su miktarı. Rejim: akımın yıl içindeki değişimi. Düzenli rejim: Amazon, Kongo. Düzensiz rejim: Ganj, İndus."]},
  {h:"Buzullar",p:[
   "Yeryüzündeki en büyük tatlı su rezervidir ama katı hâlde olduğu için doğrudan kullanımı zordur.",
   "Dağılış düzensizdir: kutup bölgelerinde deniz seviyesinden itibaren; Ekvator'a yakın yerlerde çok yüksek dağlarda; orta enlemlerde daha alçak dağlarda da buzul oluşabilir.",
   "En eski buzullar Antarktika'dadır; Grönland kuzey yarım kürenin en geniş buzul örtüsüdür. Karasal buzul örnekleri: Alpler, And Dağları, Himalayalar.",
   "İklim değişikliğiyle erimeleri deniz seviyesini yükseltir; buzullar hem potansiyel su kaynağı hem çevresel risk unsurudur."]},
  {h:"Yer altı suları, kaynaklar ve sulak alanlar",p:[
   "Yer altı suyu: yağış ve yüzey sularının yer altına sızıp geçirimsiz tabaka üzerinde birikmesiyle oluşur. Suyu süzen, ileten ve depolayan ortama akifer denir.",
   "Kaynak: yer altı suyunun yeryüzüne çıktığı yer. Oluşumuna göre: karstik (voklüz), artezyen (iki geçirimsiz tabaka arasındaki su sondajla fışkırır), yamaç (vadi), fay (fay hatlarında yükselen, mineralce zengin sıcak su), gayzer (volkanik bölgede sıcak su ve buharın fışkırması).",
   "Yer altı suları göl ve akarsuları besler: Çad Gölü, Colorado Nehri, Sapanca ve Beyşehir gölleri kısmen yer altı suyuyla beslenir. Dağılışı iklime, yer şekline ve kayaç özelliğine bağlıdır; bol yağışlı bölgelerde zengin, çöllerde sınırlıdır.",
   "Sulak alan (Ramsar Sözleşmesi, 1971, İran'ın Ramsar kenti; Türkiye 1994'te onayladı): doğal ya da yapay, sürekli ya da geçici, durgun ya da akar, tatlı, acı ya da tuzlu; gelgitte 6 m'yi geçmeyen sular, bataklık, sazlık, ıslak çayır, turbalık.",
   "Dünyada 2.400'den fazla Ramsar alanı var; ilk alan 1974'te Avustralya'daki Cobourg Yarımadası; Bolivya en geniş sulak alanı koruma altına alan ülke. Türkiye'de 14 Ramsar alanı: Akyatan, Burdur, Kızılırmak Deltası, Kızören Obruğu, Kuyucuk, Nemrut Kalderası, Manyas (Kuş), Göksu Deltası, Meke, Seyfe, Sultan Sazlığı, Uluabat, Gediz Deltası, Yumurtalık Lagünü."]},
  {h:"Sınıflandırma ölçütleri (cevap kalıbı)",p:[
   "Bulunduğu yere göre: yer üstü suları (okyanus, deniz, göl, akarsu, buzul) ve yer altı suları.",
   "Kimyasal özelliğine göre: tatlı, tuzlu, acı, minerelli.",
   "Fiziksel özelliğine göre: sıcak ve soğuk (termal kaynaklar sıcak sudur).",
   "Türkiye örnekleri: yere göre Kızılırmak; kimyasal özelliğe göre Tuz Gölü; fiziksel özelliğe göre Kızılcahamam kaplıcaları. Akış durumu (durgun–akar) gibi mantıklı ek ölçütler de kabul edilir ama önce bu üçünü yaz.",
   "Soru 'iki ölçüt belirleyin' dediğinde: ölçütü yaz, her gruba verilen metinden örnek koy, gerekçeni bir cümleyle belirt."]}
 ],
 tablo:[
  {h:"Dünyada suyun dağılışı (yaklaşık)",kol:["Bölüm","Oran"],sat:[
   ["Tuzlu su (okyanus, deniz)","%97,5"],["Tatlı su","%2,5"],
   ["Tatlı suyun içinde: buzullar ve kalıcı kar","yaklaşık %69"],
   ["Tatlı suyun içinde: yer altı suları (kaynağa göre toprak nemi, bataklık vb. dâhil)","yaklaşık %30"],
   ["Tatlı suyun içinde: göller ve akarsular (yüzey suları)","yaklaşık %1"]
  ],not:"Öğretmen sunumunda yüzey suları %0,3, ders kitabı grafiğinde göller ve akarsular %1,2 verilir; hangi veriyi görüyorsan onu kullan."},
  {h:"Göl oluşum biçimleri",kol:["Grup","Tür","Nasıl oluşur? / Örnek"],sat:[
   ["Yerlikaya","Tektonik","Yer kabuğu hareketleriyle oluşan çukurluklar (Tuz Gölü, Burdur Gölü)"],
   ["Yerlikaya","Volkanik","Krater ve kaldera çanakları (Nemrut Krater Gölü)"],
   ["Yerlikaya","Buzul","Buzulların oyduğu çukurlar (Kaçkarlar'da Çengovit buzul gölleri)"],
   ["Yerlikaya","Karstik","Kireçtaşı bölgelerinde çözünmeyle oluşan çukurlar"],
   ["Yerlikaya","Meteorit","Göktaşı çarpmasıyla oluşan çukurlar"],
   ["Set","Heyelan, lav, moren, alüvyal, kıyı, traverten, buzul, resif, yapay","Vadinin ya da kıyının bir set ile kapanması (Abant Gölü: heyelan seti; baraj gölleri: yapay set)"],
   ["Relikt","Kalıntı göl","Eskiden çok geniş bir su kütlesinin kuruyarak küçülmüş kalıntısı"]
  ],not:"Örnekler hatırlatma içindir; sınavda tanımı ve gruplamayı bilmen yeterli."},
  {h:"Yer altı kaynak türleri",kol:["Tür","Özellik"],sat:[
   ["Karstik (voklüz)","Eriyebilen kayaçlarda yer altı nehirlerinin yeryüzüne çıkması"],
   ["Artezyen","İki geçirimsiz tabaka arasındaki suyun sondajla fışkırması"],
   ["Yamaç (vadi)","Yer altı su tablasının bir yamaç ya da vadiyle kesişmesi"],
   ["Fay","Fay hatlarından yükselen mineralce zengin sıcak su"],
   ["Gayzer","Volkanik bölgede sıcak su ve buharın basınçla fışkırması"]
  ],not:""},
  {h:"Sınıflandırma örneği (ders kitabı etkinliği)",kol:["Ölçüt","Gruplar","Türkiye'den örnek"],sat:[
   ["Bulunduğu yere göre","Yer üstü suları, yer altı suları","Kızılırmak"],
   ["Kimyasal özelliğine göre","Tatlı, tuzlu, acı, minerelli","Tuz Gölü"],
   ["Fiziksel özelliğine göre","Sıcak, soğuk","Kızılcahamam kaplıcaları"]
  ],not:""}
 ],
 kavram:[
  {k:"Hidrosfer",a:"Yeryüzündeki suların tamamı (su küre)."},
  {k:"Hidrografya",a:"Sular coğrafyası; fiziki coğrafyanın suları inceleyen alanı."},
  {k:"Hidrolojik döngü",a:"Suyun buharlaşma, yoğuşma, yağış, akış ve sızmayla sürekli dolaşımı."},
  {k:"Okyanus",a:"Kıtalar arasındaki büyük çukurları dolduran su kütlesi."},
  {k:"Kenar deniz",a:"Okyanustan adalar ve yarımadalarla ayrılmış, geniş boğazlarla ona bağlı deniz."},
  {k:"İç deniz",a:"Boğazlarla okyanusa bağlanan, kıta içine sokulmuş deniz."},
  {k:"Göl",a:"Karalardaki çukurları dolduran, okyanusla doğrudan bağlantısı olmayan durgun su."},
  {k:"Gideğen",a:"Göl çanağının fazla suyunu dışarı taşıyan akarsu (göl ayağı)."},
  {k:"Relikt göl",a:"Eski büyük bir su kütlesinin küçülmüş kalıntısı."},
  {k:"Akarsu havzası",a:"Bir akarsuyun kollarıyla birlikte suyunu topladığı alan."},
  {k:"Su bölümü çizgisi",a:"Komşu havzaları birbirinden ayıran sınır."},
  {k:"Açık havza / kapalı havza",a:"Suyu denize ulaştıran / ulaştıramayan havza."},
  {k:"Akım (debi) ve rejim",a:"Bir saniyede geçen su miktarı ve bunun yıl içindeki değişimi."},
  {k:"Akifer",a:"Yer altı suyunu süzen, ileten ve depolayan jeolojik ortam."},
  {k:"Kaynak",a:"Yer altı suyunun yeryüzüne çıktığı yer."},
  {k:"Sulak alan",a:"Ramsar Sözleşmesi'ne göre bataklık, sazlık, ıslak çayır, turbalık ve gelgitte 6 m'yi geçmeyen sular."},
  {k:"Ramsar Sözleşmesi",a:"Sulak alanların korunması için 1971'de İran'ın Ramsar kentinde imzalandı; Türkiye 1994'te onayladı."},
  {k:"Tatlı su",a:"Yeryüzü sularının yaklaşık %2,5'i; çoğu buzul ve yer altında."}
 ],
 esle:["su1","su2"]
},
{id:"tr",ad:"Türkiye'de su ve etkileri",k:"COĞ.11.3.2",n:1,
 giris:"Burada su kaynaklarını dört yönden sorgularsın: çevresel, ekonomik, politik, sosyokültürel. Soru genellikle bir vaka (GAP, baraj gölü, Tuz Gölü, Eğirdir, Mavi Vatan) verir ve 'etkilerini yaz', 'nedenlerini açıkla', 'öneri sun' der. Senaryoda 1 soru var.",
 kart:[
  {h:"Türkiye'nin su varlığı",p:[
   "Türkiye üç tarafı denizlerle çevrili; çok sayıda akarsu, göl ve yer altı suyu var. Çeşitliliği coğrafi konum, topoğrafya ve iklim koşulları belirler.",
   "Tarım su kaynaklarının en yoğun kullanıldığı alandır; verimli sulama tekniklerinin yetersizliği su kıtlığı riskini artırır. Sanayide ve enerji üretiminde de çok su tüketilir.",
   "Nüfus artışı ve plansız kentleşme su talebini yükseltir. Bu yüzden su yaşamsal bir ihtiyaç olmanın ötesinde stratejik ve ekonomik bir kaynaktır; sürdürülebilir yönetimi kalkınma ve ulusal güvenlik için önemlidir."]},
  {h:"Türkiye akarsularının genel özellikleri",p:[
   "Denge profiline ulaşmamışlardır (sarp, engebeli yataklar).",
   "Akış hızları yüksektir.",
   "Boyları kısadır (topoğrafya nedeniyle hızla denize dökülürler).",
   "Debileri düşüktür.",
   "Hidroelektrik potansiyelleri yüksektir (baraj ve HES'e uygun).",
   "Rejimleri düzensizdir (mevsimsel farklar çoktur).",
   "Ulaşıma elverişli değildir."]},
  {h:"Sınıraşan ve sınır oluşturan sular",p:[
   "Sınıraşan sular: bir ülkede doğup başka ülkelere ulaşan akarsu ya da su kaynakları. Ülkeler arasında su paylaşımını gündeme getirir; havza ülkeleri denir. Dünyada 260'tan fazla sınıraşan havza var, dünya nüfusunun yaklaşık %40'ı bu havzalarda yaşıyor. Örnekler: Nil, İndus, Colorado.",
   "Türkiye'de sınıraşan sular: Fırat, Dicle, Kura, Aras, Çoruh, Meriç ve Asi.",
   "Sınır oluşturan sular: iki ülke arasında doğal sınır çizen akarsu ya da göller. Türkiye'de Meriç (Yunanistan), Aras (Ermenistan, Azerbaycan, İran) ve Arpaçay (Ermenistan). Dünyadan örnek: Tijuana Nehri (Meksika–ABD).",
   "Hem coğrafi hem siyasi bakımdan stratejik öneme sahiptir; yönetimi iş birliği ister."]},
  {h:"Deniz yetki alanları ve Mavi Vatan",p:[
   "Türkiye üç tarafı denizlerle çevrili olduğundan geniş bir deniz yetki alanına sahiptir. Unsurlar kıyıdan açığa: iç sular, kara suları, bitişik bölge, kıta sahanlığı, münhasır ekonomik bölge, açık deniz.",
   "Kara suları: Karadeniz ve Akdeniz'de 12 deniz mili, Ege Denizi'nde 6 deniz mili (1 deniz mili = 1852 m). Bu sınırın ötesindeki alanlar komşularla paylaşılan uluslararası sulardır.",
   "Kıta sahanlığı: deniz seviyesinin altında kıyı çizgisinden itibaren yaklaşık 200 m derine kadar inen bölüm; ülke bu alanda doğal kaynakları keşfetme ve kullanma hakkına sahiptir.",
   "Münhasır ekonomik bölge: kıta sahanlığı dışındaki deniz alanlarında 200 deniz miline kadar canlı ve cansız kaynakları keşfetme, kullanma ve yönetme hakkı. Balıkçılık, deniz tabanı mineralleri gibi değerli kaynaklar bu alandadır. Sorunları önlemek için bu haklar deniz hukuku ile düzenlenir.",
   "Mavi Vatan: coğrafi bir tanımlamanın ötesinde, Türkiye'nin deniz yetki alanlarındaki haklarını ve çıkarlarını korumayı amaçlayan bir doktrin (Karadeniz, Ege, Akdeniz ve Marmara'yı kapsar).",
   "Program örnek vakası: Türkiye BM Deniz Hukuku Sözleşmesi'ne taraf değildir; nedenleri ve uluslararası sulardaki hakları inceleme konusudur."]},
  {h:"Su yönetimi ve su kültürü",p:[
   "Stratejik su yönetimi: tatlı ve tuzlu su kaynaklarının geleceğini güvence altına almayı amaçlayan yaklaşım.",
   "Sürdürülebilirlik: suyun bugün yaşayan insanların ihtiyacını karşılarken gelecek nesillerin yeterli suya erişimini de korumak.",
   "Su kültürü: bir toplumun suya verdiği değer, suyla kurduğu bağ; su tasarrufu bilinci bunun parçasıdır. Biyoçeşitlilik korunur, kuraklıkla mücadele edilir.",
   "Örnek önlemler: modern sulama (damlama, kapalı boru, basınçlı sistem), ürün deseni planlaması, atık su arıtma, yer altı suyu kullanımını disipline etme, havza yönetimi, kaçak ve kayıpları azaltma, yenilenebilir enerji (yüzer güneş paneli), eğitim."]},
  {h:"Dört boyutlu etki tablosu",p:[
   "Çevresel: ekosistem, iklim, biyoçeşitlilik, sürdürülebilirlik (göl seviyesi düşmesi, kirlilik, arazi örtüsü değişimi).",
   "Ekonomik: tarım, sanayi, enerji, turizm, ticaret, ulaşım, madencilik (sulama, HES, balıkçılık, tuz üretimi).",
   "Politik: ulusal ve uluslararası ilişkiler, anlaşmalar, stratejiler, güvenlik, kıta sahanlığı ve münhasır ekonomik bölge, Mavi Vatan, sınıraşan ve sınır oluşturan sular, enerji üretimi.",
   "Sosyokültürel: insan yaşamı, medeniyetlerin gelişimi, sağlık, göç, kültürel miras, gelenekler, inançlar, festivaller, spor."]}
 ],
 vaka:[
  {h:"GAP: Güneydoğu Anadolu Projesi",satir:[
   ["Ne?","Bölge halkının gelir düzeyini ve yaşam kalitesini yükseltmeyi, ulusal ekonomik gelişmeye ve sosyal istikrara katkıyı amaçlayan bölgesel kalkınma projesi."],
   ["Ölçek","22 baraj ve 19 hidroelektrik santral; yaklaşık 1,8 milyon hektar alanın sulamaya açılması planlandı; yılda 27 milyar kWh elektrik üretimi hedefi."],
   ["Veriler (2007→2024)","Sulanabilir arazi 272.697→675.250 ha; traktör sayısı 51.739→181.216; iş gücüne katılım %34→%46,7; ihracat 3,3→12,31 milyar dolar; nüfus yoğunluğu 95→125 kişi/km² (DSİ, 2024)."],
   ["Ekonomik etki","Sulu tarımın yaygınlaşması, verim ve ürün çeşidi artışı, gelir ve ihracat artışı, enerji üretimi."],
   ["Sosyal / çevresel","İstihdam ve yaşam kalitesinde iyileşme, altyapı yatırımları; baraj gölleriyle arazi örtüsü değişir, bazı yerleşme ve tarım alanları su altında kalabilir."]]},
  {h:"Baraj gölü: Hasankeyf örneği (MEB örnek sorusu)",satir:[
   ["Olay","Ilısu Barajı'nın yapımından önce (2018) ve sonra (2026) Hasankeyf yöresinin arazi kullanımı haritalarla karşılaştırıldı: Dicle boyunca su kütlesi (baraj gölü) genişledi; yerleşim ve tarım alanlarının bir bölümü su altında kaldı, yerleşim yeni alana taşındı."],
   ["Gelecekte beklenen dönüşüm","Su altında kalan tarım alanları nedeniyle tarımın payı azalır; baraj gölünde balıkçılık, su sporları ve gölle bütünleşen turizm, ticaret ve hizmet sektörü, enerji ve ulaşım gibi faaliyetler gelişir."],
   ["Sosyokültürel","Göç ve yeniden yerleşme, kültürel mirasın korunması ya da taşınması, geleneksel geçim biçimlerinin değişmesi."]]},
  {h:"Tuz Gölü (MEB örnek sorusu)",satir:[
   ["Önemi","Flamingolar başta olmak üzere birçok göçmen kuşun üreme ve beslenme alanı; göl yüzeyinden buharlaşma yakın çevrenin nemini etkiler, tuzun kristalleşip tabanda birikmesini sağlar; tuz üretimi için önemli kaynak; havzada tarım, hayvancılık ve ekoturizm."],
   ["Değişim","1988 ile 2024 yaz dönemleri karşılaştırıldığında su ile kaplı alan çok daralmıştır."],
   ["Doğal çevrede olumsuz etki","Göçmen kuşların üreme ve beslenme alanlarının azalması (biyoçeşitlilik kaybı); açıkta kalan tuz tabakasının rüzgârla aşınması, tuz taşınımı; yöresel nem ve mikroklima değişimi."],
   ["Beşerî çevrede olumsuz etki","Tuz üretiminin ve ekoturizm gelirinin azalması; çevredeki tarım ve hayvancılığın olumsuz etkilenmesi; yöre halkının gelirinin düşmesi ve göç."]]},
  {h:"Eğirdir Gölü (ders kitabından)",satir:[
   ["Önemi","Türkiye'nin büyük tatlı su göllerinden; sulama, balıkçılık, turizm ve içme suyu."],
   ["Sorunlar","Su seviyesinin düşmesi, aşırı su kullanımı, kirlilik, ekosistem dengesinin bozulması. Nedenler: doğal (iklim, yağış değişimi) ve beşerî (aşırı sulama, tarımsal kirlilik)."],
   ["Eylem planı hedefleri","Suyu etkin ve adil kullanmak; yer altı ve yer üstü suları bilimsel temelde yönetmek; doğal dengeyi ve ekosistemi korumak."],
   ["Örnek eylemler","Sulama tesislerinin yenilenmesi, ürün deseni ve sulama yönetimi, yer altı suyu kullanımını disipline etme, pestisit ve kimyasal gübre kirliliğini önleme, havza izleme ve ölçüm ağını geliştirme, su verimliliği ve eğitim çalışmaları."]]},
  {h:"İklim değişikliği ve su",satir:[
   ["Etki","Artan sıcaklık ve düzensiz yağış su kaynaklarının miktarını ve kalitesini tehdit eder; kurak ve yarı kurak bölgelerde baraj, göl ve yer altı rezervlerinin doluluğu düşer; tarım, enerji ve içme suyu temininde risk artar."],
   ["Önlem","Baraj, gölet, sulama ve taşkın koruma yapıları; modern sulama; tarım dışı sektörlerde tasarruf; yenilenebilir enerji."],
   ["Kıtlık paradoksu","Üç yanı denizlerle çevrili olsa da deniz suyu tuzludur; tatlı su kaynakları sınırlı ve düzensiz dağılmıştır."]]},
  {h:"Fırat–Dicle ve sınıraşan su politikası",satir:[
   ["Kaynak ülke","Fırat ve Dicle Türkiye'de doğar; Suriye ve Irak'a geçer. Fırat Suriye ve Irak'tan, Dicle (Suriye sınırını bir süre çizdikten sonra) Irak'tan geçer; ikisi birleşip Basra Körfezi'ne dökülür."],
   ["Asi","Lübnan'da doğar, Suriye'den geçerek Hatay'dan Türkiye'ye girer, Akdeniz'e dökülür; Türkiye aşağı havza ülkesidir."],
   ["Türkiye'nin yaklaşımı","Suyun hakkaniyetli, akılcı ve verimli kullanımı; paylaşımın hava, toprak gibi diğer doğal kaynaklarda olduğu gibi karşılıklı bilgi ve veri alışverişiyle çözülmesi."],
   ["Neden stratejik?","Tatlı su azalıyor, kullanım baskısı artıyor; paylaşım yalnızca coğrafi değil siyasi ve ekonomik iş birliği gerektiriyor. Gerilim ya da iş birliği (enerji, sulama, içme suyu) üretebilir."]]}
 ],
 tablo:[
  {h:"Türkiye'nin sınıraşan suları",kol:["Akarsu","Nereden doğar / nereden geçer","Döküldüğü yer"],sat:[
   ["Fırat","Türkiye'de doğar; Suriye ve Irak","Basra Körfezi"],
   ["Dicle","Türkiye'de doğar; Suriye sınırı (bir süre), Irak; Fırat'la birleşir","Basra Körfezi"],
   ["Aras ve Kura","Türkiye'den (Erzurum, Kars çevresi) doğar; Ermenistan, Gürcistan, Azerbaycan","Hazar Gölü"],
   ["Çoruh","Türkiye'de doğar; Gürcistan","Karadeniz"],
   ["Meriç","Bulgaristan ve Yunanistan sınırı; hem sınır oluşturan hem sınıraşan","Ege Denizi"],
   ["Asi","Lübnan'da doğar; Suriye; Hatay (Türkiye)","Akdeniz"]
  ],not:"Meriç (Yunanistan), Aras ve Arpaçay aynı zamanda sınır oluşturan sulardır."},
  {h:"Deniz yetki alanları (kıyıdan açığa)",kol:["Alan","Özellik"],sat:[
   ["İç sular","Kıyı çizgisinin kara tarafındaki sular (körfez, liman gibi)"],
   ["Kara suları","Kıyıdan Karadeniz ve Akdeniz'de 12, Ege'de 6 deniz mili"],
   ["Bitişik bölge","Kara sularının ötesi; deniz haritasında 24 deniz miline kadar gösterilir"],
   ["Kıta sahanlığı","Yaklaşık 200 m derinliğe kadar inen deniz altı alanı; doğal kaynakları keşfetme ve kullanma hakkı"],
   ["Münhasır ekonomik bölge","200 deniz miline kadar canlı ve cansız kaynakları keşfetme, kullanma, yönetme hakkı"],
   ["Açık deniz","Ülkelerin yetki alanlarının dışı"]
  ],not:"Derse özel not: 'bitişik bölge' kitaptaki profil görselinde 24 deniz mili olarak gösterilir."},
  {h:"Dört boyutlu etki özeti",kol:["Boyut","Örnek etkiler"],sat:[
   ["Çevresel","Biyoçeşitlilik, sulak alan ve göl ekosistemi, göl seviyesi düşmesi, kirlilik, arazi örtüsü değişimi, iklim"],
   ["Ekonomik","Sulu tarım, hidroelektrik enerji, sanayi, turizm, balıkçılık, ulaşım, tuz ve maden"],
   ["Politik","Sınıraşan ve sınır oluşturan sular, Mavi Vatan, kıta sahanlığı ve münhasır ekonomik bölge, enerji ve su güvenliği"],
   ["Sosyokültürel","Medeniyetlerin su kenarında gelişmesi, sağlık (kaplıca), göç, kültürel miras, festivaller, spor, su kültürü"]
  ],not:""}
 ],
 kavram:[
  {k:"Sınıraşan sular",a:"Birden fazla ülkenin topraklarından geçen akarsu ve su kaynakları (Fırat, Dicle, Aras, Çoruh, Asi...)."},
  {k:"Sınır oluşturan sular",a:"İki ülke arasında doğal sınır çizen akarsu ya da göller (Meriç, Aras, Arpaçay)."},
  {k:"Havza ülkeleri",a:"Aynı akarsu havzasını paylaşan ülkeler."},
  {k:"Deniz yetki alanı",a:"Bir ülkenin hak ve yetkilerini kullandığı deniz bölgeleri: iç sular, kara suları, bitişik bölge, kıta sahanlığı, MEB."},
  {k:"İç sular",a:"Kıyı çizgisinin kara yönündeki sular."},
  {k:"Kara suları",a:"Kıyıdan Karadeniz ve Akdeniz'de 12, Ege'de 6 deniz mili genişliğindeki deniz alanı."},
  {k:"Kıta sahanlığı",a:"Kıyıdan yaklaşık 200 m derinliğe kadar inen deniz altı bölümü."},
  {k:"Münhasır ekonomik bölge",a:"200 deniz miline kadar kaynakları keşfetme, kullanma ve yönetme hakkının tanındığı deniz alanı."},
  {k:"Mavi Vatan",a:"Türkiye'nin deniz yetki alanlarındaki hak ve çıkarlarını koruma doktrini."},
  {k:"Deniz hukuku",a:"Kıyı ülkelerinin denizlerden nasıl yararlanacağını düzenleyen uluslararası hukuk."},
  {k:"Stratejik su yönetimi",a:"Su kaynaklarının geleceğini güvence altına almayı hedefleyen yönetim yaklaşımı."},
  {k:"Sürdürülebilirlik",a:"Bugünün ihtiyaçlarını gelecek nesillerin ihtiyacını tehlikeye atmadan karşılamak."},
  {k:"Su kültürü",a:"Bir toplumun suya verdiği değer ve suyla kurduğu bağ."},
  {k:"Su tasarrufu",a:"Suyu verimli kullanıp israfı önleme bilinci."},
  {k:"GAP",a:"Güneydoğu Anadolu Projesi: Fırat-Dicle havzasında barajlar, HES'ler ve sulamayla bölgesel kalkınma projesi."}
 ],
 esle:["etki"]
}
];

/* Eşleştirme alıştırmaları: sec = seçenekler, soru[i].a = sec indeksi */
const ESLE_GRUP=[
 {id:"altdal",kon:"mekan",ad:"Hangi alt dal?",yon:"Mekânsal sorunun ağırlıkla hangi coğrafya alt dalının inceleme alanına girdiğini seç.",
  sec:["Afetler coğrafyası","Toprak coğrafyası","Nüfus coğrafyası","Biyocoğrafya","Yerleşme coğrafyası","Ekonomik coğrafya","Klimatoloji","Hidrografya","Jeomorfoloji"],
  soru:[
   {m:"Artvin'de dağlık ve engebeli arazinin ulaşımı zorlaştırması.",a:8},
   {m:"Karadeniz kıyısındaki bir ilçede yağış sonrası yamaç heyelanlarının yolları kapatması.",a:0},
   {m:"Büyük bir ovada bilinçsiz sulama sonucu toprağın tuzlanması.",a:1},
   {m:"Bir ilde gençlerin göçüyle yaş ortalamasının yükselmesi.",a:2},
   {m:"Akdeniz ormanlarında yangınlarla bitki ve hayvan türlerinin azalması.",a:3},
   {m:"Büyük bir kentte plansız yapılaşma ve altyapı yetersizliği.",a:4},
   {m:"Maden ocağının kapanmasıyla bir ilçede işsizliğin yükselmesi.",a:5},
   {m:"Sıcaklık artışının iklim kuşaklarının sınırlarını değiştirmesi.",a:6},
   {m:"Akarsu debilerinin düşmesinin sulamayı ve elektrik üretimini etkilemesi.",a:7}
  ]},
 {id:"cozumleme",kon:"cbs",ad:"Hangi çözümleme türü?",yon:"Web tabanlı CBS'de yapılan işlemi çözümleme türüyle eşleştir.",
  sec:["Birleştirme","Çakıştırma","Sorgulama","Genelleştirme","Sembolleştirme"],
  soru:[
   {m:"Belediye ve kadastro kurumlarından gelen bina verilerinin tek bir katman hâline getirilmesi.",a:0},
   {m:"Yağış katmanı ile eğim katmanının üst üste açılıp heyelan riski yüksek alanların görülmesi.",a:1},
   {m:"Haritada yalnızca nüfusu 50 binin üzerinde olan ilçelerin gösterilmesi.",a:2},
   {m:"Harita uzaklaştırılınca ara sokakların kaldırılıp yalnızca ana yolların bırakılması.",a:3},
   {m:"Hastanelerin kırmızı haçla, okulların mavi daireyle gösterilmesi.",a:4},
   {m:"Su, doğal gaz ve kanalizasyon hat katmanlarının aynı anda açılıp çakışan noktaların görülmesi.",a:1},
   {m:"Son iki yılda inşa edilen yapıların listelenmesi.",a:2},
   {m:"Nüfus yoğunluğu haritasında koyu rengin yüksek, açık rengin düşük yoğunluğu göstermesi için renk skalası seçilmesi.",a:4},
   {m:"Farklı kurumlardan gelen yol ve nüfus verilerinin aynı koordinat sisteminde tek katmanda toplanması.",a:0},
   {m:"Büyük ölçekte görünen küçük ayrıntıların küçük ölçekte otomatik olarak sadeleştirilmesi.",a:3}
  ]},
 {id:"cbsdy",kon:"cbs",ad:"Doğru mu, yanlış mı?",yon:"Web tabanlı CBS ile ilgili ifadenin doğru ya da yanlış olduğunu seç.",
  sec:["Doğru","Yanlış"],
  soru:[
   {m:"Çalışmak için mutlaka yüksek maliyetli lisanslı bir yazılım gerekir.",a:1},
   {m:"Kullanım için genel ağ bağlantısı gerekir.",a:0},
   {m:"Birden fazla kullanıcı aynı anda çalışabilir.",a:0},
   {m:"Mobil cihazlarla dünyanın birçok yerinden erişilebilir.",a:0},
   {m:"Yalnızca uzman kullanıcılar için tasarlanmıştır.",a:1},
   {m:"Bilgisayar tabanlı CBS'ye göre daha sınırlı ve temel analiz imkânı sunar.",a:0},
   {m:"Verilerin işlenmesi ve depolanmasının çoğu kullanıcının bilgisayarında yapılır.",a:1},
   {m:"Yalnızca resmî kurumlar tarafından geliştirilmiştir.",a:1},
   {m:"Çalışmalarda emek ve zamandan tasarruf sağlar.",a:0},
   {m:"Katmanlar raster veya vektör veri biçiminde olabilir.",a:0}
  ]},
 {id:"su1",kon:"su",ad:"Hangi su kaynağı?",yon:"Tanıma uyan su kaynağını seç.",
  sec:["Okyanus","Deniz","Göl","Akarsu","Buzul","Yer altı suyu","Sulak alan"],
  soru:[
   {m:"Kıtalar arasındaki büyük çukurları dolduran su kütlesi.",a:0},
   {m:"Okyanustan küçük, kıta kenarında ya da kıta içine sokulmuş, okyanusa bağlı su kütlesi.",a:1},
   {m:"Karalar üzerindeki çukur alanlarda biriken, okyanusla doğrudan bağlantısı olmayan durgun su.",a:2},
   {m:"Eğime bağlı olarak bir yatak boyunca sürekli ya da belli dönem akan su.",a:3},
   {m:"Yeryüzündeki en büyük tatlı su rezervi; katı hâlde olduğu için kullanımı zor.",a:4},
   {m:"Yağışın sızarak geçirimsiz tabaka üzerinde birikmesiyle oluşan su.",a:5},
   {m:"Ramsar Sözleşmesi'ne göre bataklık, sazlık, ıslak çayır ve turbalıkları kapsayan alan.",a:6},
   {m:"Akifer ortamında depolanan su.",a:5}
  ]},
 {id:"su2",kon:"su",ad:"Hangi ölçüte göre?",yon:"Verilen sınıflandırmanın hangi ölçüte dayandığını seç.",
  sec:["Bulunduğu yere göre","Kimyasal özelliğine göre","Fiziksel özelliğine göre"],
  soru:[
   {m:"Yer üstü suları ve yer altı suları.",a:0},
   {m:"Tatlı, tuzlu, acı ve minerelli sular.",a:1},
   {m:"Sıcak sular ve soğuk sular.",a:2},
   {m:"Tuz Gölü'nün tuzlu su olarak sınıflandırılması.",a:1},
   {m:"Kızılcahamam kaplıcalarının sıcak su olarak sınıflandırılması.",a:2},
   {m:"Kızılırmak'ın yer üstü suyu olarak sınıflandırılması.",a:0},
   {m:"Termal kaynakların 'sıcak su' grubuna konması.",a:2},
   {m:"Artezyen kuyusu suyunun yer altı suyu sayılması.",a:0}
  ]},
 {id:"etki",kon:"tr",ad:"Hangi boyut?",yon:"Su kaynağının etkisini ait olduğu boyutla eşleştir.",
  sec:["Çevresel","Ekonomik","Politik","Sosyokültürel"],
  soru:[
   {m:"Göl seviyesinin düşmesiyle göçmen kuşların üreme alanlarının azalması.",a:0},
   {m:"Baraj gölünün oluşmasıyla yöredeki balıkçılığın ve turizmin gelişmesi.",a:1},
   {m:"Sınıraşan akarsuyun paylaşımının komşu ülkelerle ilişkileri etkilemesi.",a:2},
   {m:"Medeniyetlerin büyük nehirlerin kıyısında gelişmesi.",a:3},
   {m:"Hidroelektrik santrallerin enerji üretimine katkısı.",a:1},
   {m:"Münhasır ekonomik bölgenin ve kıta sahanlığının sınırlarının uluslararası görüşmelerde tartışılması.",a:2},
   {m:"Kaplıcaların sağlık turizmini ve yöresel yaşamı etkilemesi.",a:3},
   {m:"Aşırı sulama ve kirlilik nedeniyle bir gölde ekosistem dengesinin bozulması.",a:0},
   {m:"Sulanabilir arazinin artmasıyla bölgede tarımsal verimin yükselmesi.",a:1},
   {m:"Su temininde sorun yaşayan köylerden kentlere göç edilmesi.",a:3}
  ]}
];

/* Sınav dışı ek bilgi (Senaryo 3'te soru yok) */
const EK=[
 {k:"COĞ.11.4.1",h:"Türkiye ve dünyadaki yerleşmelerin mekânsal organizasyonu",p:"4. ünite (Beşerî Sistemler ve Süreçler): bu ortak yazılının Senaryo 3'ünde soru yok; sınav duyurusunu takip et."},
 {k:"COĞ.11.4.2",h:"Yerleşmelerin etki alanları",p:"Yine Senaryo 3 dışında; bu kitte yer verilmedi."},
 {k:"Not",h:"Ders kitabında daha fazla soru var",p:"MEB ders kitabı her ünitenin sonunda 12-21 soruluk test içerir; bu kitteki provalar o tarzda hazırlandı ama sorular özgündür."}
];

/* Çoktan seçmeli pekiştirme (o[0] doğru) */
const MC=[
/* ---------- COĞ.11.1.1 (16) ---------- */
 {c:"1.1",q:"Aşağıdakilerden hangisi coğrafyada 'mekân' kavramının tanımına en uygundur?",
  o:["İnsanların doğal çevreyle etkileşerek anlam yüklediği dinamik yeryüzü parçası","Yeryüzünde yalnızca doğal koşulların belirlediği, insan etkisinden bağımsız ve zaman içinde değişmeyen sabit bir alan olarak tanımlanan yeryüzü parçası","Koordinatları belli, sınırları siyasi anlaşmalarla çizilmiş ve yönetimi bir devlete bağlı olan kara ya da deniz parçası","Yalnızca insanların yaşadığı yerleşme alanları"],
  e:"Mekân, fiziksel, sosyal, ekonomik ve kültürel süreçlerin bir araya geldiği dinamik bir alandır; insanla çevresi arasındaki etkileşimle şekillenir ve zamanla değişir. Diğer seçenekler mekânı yalnızca doğal, yalnızca siyasi ya da yalnızca yerleşme olarak daraltır."},
 {c:"1.1",q:"Mekânsal sorun için aşağıdakilerden hangisi söylenebilir?",
  o:["Yerel, bölgesel ya da küresel ölçekte ortaya çıkan fiziksel, sosyal, ekonomik ve çevresel problemlerdir.","Yalnızca büyük şehirlerde görülen ulaşım problemleridir.","Doğa olaylarının insanları hiç etkilemediği durumlardır.","Yalnızca devletler arasındaki siyasi anlaşmazlıklardır."],
  e:"Mekânsal sorunlar tek bir alanla sınırlı değildir; çevre kirliliği, plansız kentleşme, arazinin yanlış kullanımı, su yetersizliği gibi farklı ölçeklerde ve konularda görülür."},
 {c:"1.1",q:"Mekânsal sorunlar ölçeğe göre aşağıdakilerden hangisi şeklinde sınıflandırılır?",
  o:["Yerel, bölgesel, küresel","Sosyal, ekonomik, çevresel, politik","Kentsel, kırsal","Kısa vadeli, uzun vadeli"],
  e:"Ölçeğe göre sınıflandırma yerel, bölgesel ve küresel sorunlardır. Sosyal-ekonomik-çevresel-politik, tematik içeriğe göre; kentsel-kırsal ise mekânın niteliğine göre yapılan sınıflandırmadır."},
 {c:"1.1",q:"Aşağıdakilerden hangisi mekânsal sorunların 'mekânın niteliğine göre' sınıflandırılmasına örnektir?",
  o:["Kentsel ve kırsal mekânsal sorunlar","Yerel ve küresel mekânsal sorunlar","Sosyal ve ekonomik mekânsal sorunlar","Geçici ve kalıcı mekânsal sorunlar"],
  e:"Mekânın niteliğine göre sınıflandırma kentsel ve kırsal olmak üzere yapılır. Yerel-küresel ölçeğe, sosyal-ekonomik tematik içeriğe göredir."},
 {c:"1.1",q:"Küresel ısınmaya bağlı olarak ortalama sıcaklıkların yükselmesi ve iklim bölgelerinin sınırlarının değişmesi, ölçeğe göre hangi tür mekânsal sorun örneğidir?",
  o:["Küresel","Yerel","Bölgesel","Kentsel"],
  e:"Sorunun etkisi tek bir yerle ya da bölgeyle sınırlı değil, dünya genelindedir; bu yüzden küresel ölçekli bir sorundur. Kentsel ise ölçek değil, mekânın niteliğidir."},
 {c:"1.1",q:"Kırsal alanlardan büyükşehirlere göç eden nüfusun yaş ortalamasının düşmesi, kırsalda ise yaşlı nüfus oranının artması, coğrafyanın hangi alt dalının inceleme alanındadır?",
  o:["Nüfus coğrafyası","Yerleşme coğrafyası","Ekonomik coğrafya","Jeomorfoloji (yer şekilleri)"],
  e:"Yaş yapısı ve göç nüfus coğrafyasının konusudur. Yerleşme coğrafyası yerleşmelerin biçimini ve dağılışını, ekonomik coğrafya üretim ve geçim faaliyetlerini, jeomorfoloji yer şekillerini inceler."},
 {c:"1.1",q:"Büyük bir ovada bilinçsiz sulama sonucunda tuzlanma ve toprak bozulması yaşanmasını coğrafyanın hangi alt dalı inceler?",
  o:["Toprak coğrafyası","Klimatoloji","Nüfus coğrafyası","Afetler coğrafyası"],
  e:"Toprağın oluşumu, özellikleri, tuzlanma ve bozulması toprak coğrafyasının alanındadır. Klimatoloji iklimi, nüfus coğrafyası insan topluluklarını, afetler coğrafyası doğal afetleri inceler."},
 {c:"1.1",q:"Akdeniz kıyılarında yaz aylarında artan orman yangınlarının bitki örtüsünü ve hayvan türlerini tehdit etmesi coğrafyanın hangi alt dalıyla ilgilidir?",
  o:["Biyocoğrafya","Jeomorfoloji","Ekonomik coğrafya","Yerleşme coğrafyası"],
  e:"Canlıların (bitki ve hayvan) yeryüzündeki dağılışını ve bunu etkileyen etmenleri biyocoğrafya inceler. Jeomorfoloji yer şekillerini inceler."},
 {c:"1.1",q:"Aşağıdakilerden hangisi coğrafya biliminin mekânsal sorunların çözümüne yaptığı katkılardan biri değildir?",
  o:["Sorunun sorumlularını belirleyip yasal yaptırım kararı vermek","Soruna neden olan mekân özelliklerini ve koşulları tespit etmek","Benzer sorunları yaşayan ya da yaşaması muhtemel yerlerin dağılışını incelemek","Sorunun gerçekleştiği yerde ne tür etkilere yol açabileceğini ortaya koymak"],
  e:"Coğrafya nedenleri, etkileri ve dağılışı ortaya koyup çözüm önerilerine katkı sağlar. Yaptırım kararı vermek yargının ve idarenin işidir."},
 {c:"1.1",q:"Coğrafya biliminin mekânsal sorunlara yaklaşımını diğer bilimlerden ayıran temel özellik aşağıdakilerden hangisidir?",
  o:["Verileri konum bilgisiyle birleştirip dağılış, bağlantı ve örüntüleri görselleştirmesi","Sorunlara tek bir bilim dalının bakışıyla yaklaşıp dağılış ve konum bilgisini hesaba katmaması","Yalnızca sayısal verilerle çalışması","Yalnızca geçmişte yaşanmış olayları incelemesi"],
  e:"Coğrafya sorunun nerede ve neden o biçimde ortaya çıktığını harita ve CBS gibi araçlarla gösterir; farklı disiplinlerin verilerini mekânsal bağlantılar içinde birleştirir. Bu, çok boyutlu çözüme olanak tanır."},
 {c:"1.1",q:"Bir mekânsal sorunun çözüm sürecinde 'etki analizi ve modelleme' aşamasında aşağıdakilerden hangisi yapılır?",
  o:["Sorunun iklim, su, canlılar ve insanlar üzerindeki olası etkileri çözümlenir, gelecek senaryoları modellenir.","Sorunun yaşandığı alan ilk kez haritalanıp sınırları çizilir.","Sorunun giderilmesi için uygun alanlara müdahale edilir ve plan uygulanır.","Sorunun sorumluları belirlenerek ceza uygulanır."],
  e:"Etki analizi, sorunun çevre ve insan üzerindeki sonuçlarını ve gelecekteki olası durumunu inceler. Yerinin belirlenmesi tespit ve izleme, müdahale ise çözüm ve planlama aşamasındadır."},
 {c:"1.1",q:"Uzaktan algılama ve CBS kullanılarak ormansızlaşmanın yoğunlaştığı bölgelerin haritalanması ve zaman içinde izlenmesi, çözüm sürecinin hangi aşamasına örnektir?",
  o:["Tespit ve izleme","Etki analizi ve modelleme","Çözüm ve planlama","Müdahale ve denetim"],
  e:"Sorunun nerede olduğunu belirlemek ve değişimi zaman içinde izlemek tespit ve izleme aşamasıdır. Etkilerin modellenmesi ve alternatif planlama sonraki basamaklardır."},
 {c:"1.1",q:"Iğdır'da kış aylarında hava kirliliğinin artmasında etkili olan doğal koşul aşağıdakilerden hangisidir?",
  o:["Dağlarla çevrili çukur bir alanda kışın sıcaklık terselmesinin görülmesi","Denize kıyısı bulunması nedeniyle nemin ve yağışın yıl boyunca çok yüksek olması","Yağışların yıl boyunca bol ve düzenli olması nedeniyle atmosferdeki kirleticilerin sürekli yıkanması","Akarsu debisinin kışın artması"],
  e:"Çevresi dağlarla çevrili Iğdır'da sıcaklık terselmesi kirletici maddelerin yerde birikmesine yol açar. Kalitesiz yakıt kullanımı ve sanayi ile ulaşım emisyonları ise beşerî faktörlerdir."},
 {c:"1.1",q:"Bursa Ovası'nda tarım alanlarının korunması için yapılan uygulamalardan hangisi doğrudur?",
  o:["2017'de ova koruma alanı ilan edilip tarım dışı yapılaşma sınırlandırıldı.","Tarım alanları sanayi bölgelerine dönüştürülerek genişletilen yerleşim alanlarına kazandırıldı.","Ovadaki yapılaşma denetimi kaldırılıp tarım alanlarının sınırları belirsiz bırakılarak serbest kullanıma açıldı.","Ova tamamen yerleşime açıldı."],
  e:"Bursa Ovası 2017'de 'Büyük Ova Koruma Alanı' ilan edildi; çevre düzeni planında tarım alanı sınırları netleştirildi, kaçak yapılaşma uydu görüntüleriyle tespit edildi ve denetimler artırıldı."},
 {c:"1.1",q:"Kuraklığın etkilerini azaltmaya yönelik aşağıdaki çalışmalardan hangisi coğrafyanın mekânsal sorunlara katkısına örnektir?",
  o:["Meteorolojik ölçüm ve uzaktan algılamayla kuraklığın tahmin edilip riskli alanların belirlenmesi","Kuraklık yaşanan bölgelerde tarımı tamamen yasaklamak","Kırsal nüfusun tamamını kentlere taşımak","Tüm su sorunlarını yalnızca baraj sayısını artırarak bitirmek"],
  e:"Erken uyarı, risk alanı belirleme, su yönetimi ve geçim kaynaklarının çeşitlendirilmesi coğrafi bilgiye dayanan katkılardır. Diğer seçenekler tek yönlü ve sürdürülebilir olmayan öneriler sunar."},
 {c:"1.1",q:"'Sünger şehir' yaklaşımının temel ilkesi aşağıdakilerden hangisidir?",
  o:["Yağmuru tutup süzen, depolayan yeşil altyapıyla suyu kentin doğal döngüsüne katmak","Yağmur suyunu kapalı kanalizasyon ağlarıyla ve betonlaştırılmış kanallarla şehirden hızla uzaklaştırmak","Kent içindeki geçirimsiz zemin oranını artırarak yağmur suyunun yer altına sızmasını tümüyle önlemek","Dere yataklarını betonla kapatıp yüzey akışını hızlandırmak"],
  e:"Sünger şehir, geleneksel gri altyapının tersine suyu şehirden izole etmek yerine doğal döngüye entegre eder: sel riski azalır, su kalitesi ve kentsel ekosistem iyileşir."},

/* ---------- COĞ.11.2.1 (9) ---------- */
 {c:"2.1",q:"Web tabanlı CBS uygulamalarının temel bileşenleri aşağıdakilerden hangisinde doğru verilmiştir?",
  o:["Kullanıcı (istemci), genel ağ, sunucu","Kullanıcı, uydu görüntüsü, basılı harita ve ölçek çubuğu","Sunucu, lejant, yön oku ve koordinat ağı","Genel ağ, katman"],
  e:"Kullanıcı tarayıcıdan komut gönderir, genel ağ komutu iletir, sunucu işler ve sonucu harita ya da veri olarak geri gönderir."},
 {c:"2.1",q:"Web tabanlı CBS'de verilerin toplanması, çözümlenmesi ve depolanması gibi kritik işlemlerin çoğu nerede yapılır?",
  o:["Sunucuda; sonuç genel ağ üzerinden kullanıcıya gönderilir.","Kullanıcının bilgisayarına kurulan yazılımda, sunucu yalnızca yedekleme yapar","Uyduda; kullanıcı yalnızca uydunun gönderdiği görüntüyü alır","Yalnızca basılı haritalarda"],
  e:"Web CBS'de işlem yükü sunucudadır; bu yüzden kullanıcı güçlü bir bilgisayar ya da ek yazılım olmadan tarayıcıyla çalışabilir."},
 {c:"2.1",q:"Web tabanlı CBS'de vektör veri biçimindeki bir katmana ait ayrıntılı bilgiler (ad, nüfus, alan gibi) aşağıdakilerden hangisinde bulunur?",
  o:["Öz nitelik tablosunda","Ölçek çubuğunda","Yön okunda","Altlık harita katmanında"],
  e:"Vektör katmandaki nesnelerin ayrıntıları öz nitelik tablosunda tutulur; yetkili kullanıcı buraya veri girişi yapabilir ve güncelleyebilir."},
 {c:"2.1",q:"Web tabanlı CBS uygulamaları için aşağıdakilerden hangisi yanlıştır?",
  o:["Çalışmak için mutlaka yüksek maliyetli lisanslı yazılım ve güçlü donanım gerekir.","Genel ağ bağlantısı olan her yerden, hatta mobil cihazlarla da erişilebilir.","Birden fazla kullanıcı aynı anda çalışabilir.","Çoğunlukla ücretsiz ya da düşük ücretle kullanılabilir."],
  e:"Web CBS'nin avantajı, çoğunlukla ücretsiz ya da düşük ücretli olması ve kurulum ya da güçlü donanım gerektirmemesidir. Diğer seçenekler doğru özelliklerdir."},
 {c:"2.1",q:"Bir web tabanlı CBS uygulamasında farklı veri katmanları üst üste bindirilerek örtüşmeler ve mekânsal örüntüler gerçek zamanlı olarak görüntüleniyorsa hangi çözümleme türü kullanılmıştır?",
  o:["Çakıştırma","Birleştirme","Genelleştirme","Sorgulama"],
  e:"Katmanları üst üste bindirmek çakıştırmadır. Birleştirme parçalı verileri tek katmanda toplar; sorgulama ölçüte uyanları seçer; genelleştirme ayrıntıyı azaltır."},
 {c:"2.1",q:"Haritada yalnızca belirli ölçütlere uyan verilerin (örneğin son beş yılda inşa edilen binaların) seçilmesi aşağıdakilerden hangisidir?",
  o:["Sorgulama","Çakıştırma","Sembolleştirme","Genelleştirme"],
  e:"Çakıştırma sonuçları içinden ölçüte uyan veriyi seçmek sorgulamadır. Web CBS'de bu işlem dinamik filtre ve panel seçenekleriyle yapılır."},
 {c:"2.1",q:"Sürekli güncellenen, bulut tabanında barındırılan veri katmanlarını bir araya getiren; hazır tematik haritalara erişim, kendi verini yükleme ve küresel veri setleriyle karşılaştırma imkânı veren platform aşağıdakilerden hangisidir?",
  o:["Yaşayan atlas","Hikâye haritası","Gezi rehberi haritası","Kadastro paftası"],
  e:"Yaşayan atlas sürekli güncellenen bulut tabanlı bir platformdur. Hikâye haritası ise harita, metin, fotoğraf ve videoyu bir anlatı akışında sunar."},
 {c:"2.1",q:"Web tabanlı CBS ile hazırlanan arazi kullanımı haritasında 2005'ten 2023'e yapılaşma alanları %85 artmış, tarım alanları %25 azalmış, orman alanları %2 artmıştır (örnek veri). Bu verilerden hangi çıkarım yapılabilir?",
  o:["Yerleşmelerin büyük olasılıkla tarım alanları üzerine yayıldığı","Orman alanlarının bölgenin en geniş arazi sınıfı olduğu ve ormanın tarımdan fazla yer kapladığı","Bölge nüfusunun azaldığı","Tarımsal üretimin kesinlikle arttığı ve gıda arzının güvence altına alındığı"],
  e:"Yapılaşma artarken tarım alanı azalıyorsa yerleşmelerin tarım arazisine yayılmış olması mantıklı bir çıkarımdır. Diğer seçenekleri veriler desteklemez: hangi sınıfın en geniş olduğu bilinmez, nüfus verisi yok, üretimin arttığı söylenemez."},
 {c:"2.1",q:"Web tabanlı CBS'de kullanılacak mekânsal verilerin temin edilebileceği resmî kaynaklara aşağıdakilerden hangisi örnektir?",
  o:["Türkiye İstatistik Kurumu ve Meteoroloji Genel Müdürlüğü gibi kurumların genel ağ sayfaları","Kaynağı belirsiz forumlarda paylaşılan veri dosyaları","Kişilerin izinsiz paylaşılan konum bilgileri","Reklam amaçlı hazırlanmış şematik haritalar"],
  e:"Resmî, güvenilir ve amaca uygun kaynaklar kullanılmalıdır; mekânsal verilerin kişilerin özel hayatına dair unsurlar içerebileceği de unutulmamalı, izinsiz veri kullanılmamalıdır."},

/* ---------- COĞ.11.3.1 (17) ---------- */
 {c:"3.1",q:"Yeryüzündeki suların yaklaşık yüzde kaçı tuzlu sudur?",
  o:["%97,5","%71 civarı","%50 civarı","%2,5"],
  e:"Yaklaşık %97,5 tuzlu su (okyanus ve deniz), %2,5 tatlı sudur. %71, yeryüzünün sularla kaplı olan oranıdır."},
 {c:"3.1",q:"Yeryüzündeki tatlı suyun en büyük bölümü aşağıdakilerden hangisinde bulunur?",
  o:["Buzullar ve kalıcı kar örtüsü","Yer altı suları","Göller","Akarsular"],
  e:"Tatlı suyun yaklaşık %69'u buzullarda ve kalıcı karda, yaklaşık %30'u yer altındadır; göl ve akarsular çok küçük bir payı oluşturur."},
 {c:"3.1",q:"Su döngüsünde karalara inen yağışın bir kısmının yer altına geçerek yer altı sularını oluşturması hangi süreçle gerçekleşir?",
  o:["Sızma","Terleme","Yoğuşma","Buharlaşma"],
  e:"Yağışın toprak ve kayaç boşluklarından yer altına geçmesi sızmadır. Terleme bitkilerden, buharlaşma yüzeyden su buharı salınmasıdır."},
 {c:"3.1",q:"Kıtalar arasındaki büyük çukurlukları dolduran su kütlelerine ne ad verilir?",
  o:["Okyanus","Körfez","Kenar deniz","Göl çanağı"],
  e:"Okyanuslar kıtalar arasındaki büyük çukurlukları doldurur. Denizler okyanustan küçüktür ve kıta kenarında ya da içinde yer alır; göller karalar üzerindedir."},
 {c:"3.1",q:"Aşağıdaki denizlerden hangisi iç denizdir?",
  o:["Karadeniz","Çin Denizi","Japon Denizi","Kuzey Denizi"],
  e:"Karadeniz, boğazlarla bağlanan ve kıta içine sokulan bir iç denizdir. Çin, Japon ve Kuzey denizleri okyanustan eşiklerle ayrılmış kenar denizlerdir."},
 {c:"3.1",q:"Kızıldeniz'in tuzluluğunun (yaklaşık ‰41) Baltık Denizi'nin bazı kesimlerinden (‰2'ye kadar) çok yüksek olmasının temel nedeni nedir?",
  o:["Buharlaşmanın fazla, tatlı su getiren akarsu girişinin az olması","Okyanusa geniş bir boğazla bağlanması nedeniyle okyanus suyunun sürekli girmesi","Soğuk su akıntılarının etkisi altında bulunması ve yağışların fazla olması","Kuzey yarım kürede yer alması"],
  e:"Denizlerin tuzluluğu enleme, buharlaşma oranına ve akarsuların getirdiği tatlı su miktarına bağlıdır. Kızıldeniz sıcak ve kurak bir bölgedir; Baltık'a ise bol tatlı su gelir."},
 {c:"3.1",q:"Aynı enlemde olmalarına rağmen İngiltere'nin batı kıyıları ile Kanada'nın doğu kıyıları arasındaki deniz suyu sıcaklığı farkına en çok neden olan etken aşağıdakilerden hangisidir?",
  o:["Sıcak (Gulf Stream) ve soğuk (Labrador) okyanus akıntıları","Denizlerin derinlik farkı","Kıyıdaki akarsu sayısı","Tuzluluk oranındaki küçük farklar"],
  e:"Sıcak ve soğuk akıntılar, aynı enlemde bile deniz suyu sıcaklığını, buharlaşmayı, yağışı ve canlı dağılışını değiştirir."},
 {c:"3.1",q:"Göllerle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
  o:["Karalar üzerindeki çukurları dolduran, deniz ve okyanuslarla doğrudan bağlantısı olmayan su kütleleridir.","Okyanuslara boğazlarla bağlanan, kıta içine sokulmuş ve tuzlu sulu su kütleleridir.","Tamamı tatlı sudan oluşur ve hiçbir zaman tuzlu ya da sodalı olmaz.","Yalnızca tektonik hareketlerle oluşur."],
  e:"Göller karalar üzerinde çukurluklarda birikir; tatlı, tuzlu, acı ya da sodalı olabilir ve tektonik, volkanik, buzul, karstik, set oluşumu gibi pek çok yolla meydana gelir."},
 {c:"3.1",q:"Heyelan, moren, traverten ve yapay set gibi oluşumların bir vadiyi kapatmasıyla meydana gelen göller aşağıdakilerden hangisidir?",
  o:["Set gölleri","Tektonik göller","Karstik göller","Relikt göller"],
  e:"Bir akarsuyun önünün doğal ya da yapay bir setle kapanmasıyla oluşan göller set gölleridir (Abant Gölü heyelan seti, baraj gölleri yapay set). Relikt göl, eski büyük bir su kütlesinin kalıntısıdır."},
 {c:"3.1",q:"Akarsuyun doğduğu yere ve döküldüğü yere sırasıyla ne ad verilir?",
  o:["Kaynak – ağız","Ağız – kaynak","Havza – yatak","Yatak – su bölümü çizgisi"],
  e:"Akarsuyun başladığı yer kaynak, suyunu boşalttığı yer ağızdır. Kaynaktan ağza kadar aktığı çukurluğa yatak, suyunu topladığı alana havza denir."},
 {c:"3.1",q:"Çoruh Nehri'nin Karadeniz'e, Aras Nehri'nin ise Hazar Gölü'ne dökülmesi bu akarsular için hangi sonucu verir?",
  o:["Çoruh açık havza, Aras kapalı havza özelliğindedir.","Çoruh kapalı havza, Aras açık havza özelliğindedir.","İkisi de açık havza özelliğindedir.","İkisi de düzenli rejimlidir."],
  e:"Suyunu denize ulaştıran akarsular açık havza, ulaştıramayanlar kapalı havza özelliği gösterir. Hazar Gölü bir göldür; deniz ya da okyanusa bağlantısı yoktur."},
 {c:"3.1",q:"Aşağıdaki akarsu–rejim eşleştirmelerinden hangisi doğrudur?",
  o:["Amazon ve Kongo düzenli, Ganj ve İndus düzensiz rejimlidir.","Amazon düzenli, Kongo düzensiz; Ganj ve İndus düzenli rejimlidir.","Dört akarsu da düzenli rejimlidir.","Dört akarsu da düzensiz rejimlidir."],
  e:"Akımı yıl içinde fazla değişmeyen Amazon ve Kongo düzenli; yıl içinde büyük dalgalanma gösteren Ganj ve İndus düzensiz rejimlidir."},
 {c:"3.1",q:"Buzulların yeryüzündeki dağılışı için aşağıdakilerden hangisi doğrudur?",
  o:["Kutuplarda deniz seviyesinden itibaren, Ekvator'a yakın bölgelerde ise ancak çok yüksek dağlarda görülür.","Yalnızca kutup bölgelerinde bulunur.","Buzullar yeryüzüne eşit dağılmıştır; Ekvator çevresinde de kutuplardakiyle aynı yükseltide oluşurlar ve her kıtada bulunurlar.","Buzullar Ekvator çevresinde en alçak yükseltilerde oluşur."],
  e:"Yükseldikçe buzul oluşma ihtimali artar; Ekvator'a yakın yerlerde buzullar çok yüksek dağlarda, orta enlemlerde daha alçak dağlarda, kutuplarda ise deniz seviyesinden itibaren görülür."},
 {c:"3.1",q:"İki geçirimsiz tabaka arasında sıkışan yer altı suyunun sondajla açılan kuyudan kendiliğinden fışkırdığı kaynak türü aşağıdakilerden hangisidir?",
  o:["Artezyen","Karstik (voklüz)","Gayzer kaynağı","Fay kaynağı"],
  e:"Artezyen kaynağında basınç altındaki su sondajla yeryüzüne çıkar. Gayzer volkanik bölgelerde sıcak su ve buharın fışkırmasıdır; fay kaynağı fay hatlarından çıkan sıcak sulardır."},
 {c:"3.1",q:"Ramsar Sözleşmesi aşağıdaki su kaynaklarından hangisinin korunmasını amaçlar?",
  o:["Sulak alanların","Okyanusların","Buzulların","Yer altı su havzalarının"],
  e:"Ramsar Sözleşmesi (1971, İran'ın Ramsar kenti) bataklık, sazlık, ıslak çayır ve turbalık gibi sulak alanların korunmasını hedefler; Türkiye sözleşmeyi 1994'te onayladı."},
 {c:"3.1",q:"Su kaynaklarını sınıflandırırken kullanılan ölçütlerden biri aşağıdakilerden hangisi değildir?",
  o:["Havzanın nüfus yoğunluğu","Bulunduğu yere göre yer üstü ya da yer altı olması","Kimyasal özellikleri (tatlı, tuzlu, acı gibi)","Fiziksel özellikleri (sıcak ya da soğuk olması)"],
  e:"Su kaynakları bulunduğu yere (yer üstü ya da yer altı), kimyasal özelliğine (tatlı, tuzlu, acı, minerelli) ve fiziksel özelliğine (sıcak, soğuk) göre sınıflandırılır. Nüfus yoğunluğu su kaynağının özelliği değildir."},
 {c:"3.1",q:"Aşağıdaki eşleştirmelerden hangisi su kaynaklarının sınıflandırılmasına uygundur?",
  o:["Kızılcahamam kaplıcaları – fiziksel özellik (sıcak)","Tuz Gölü – bulunduğu yer (yer altı suyu olarak)","Kızılırmak – bulunduğu yer (yer altı suyu olarak)","Artezyen kuyusu – bulunduğu yer (yer üstü suyu olarak)"],
  e:"Kaplıca suyu sıcak olduğu için fiziksel özelliğe göre sıcak su grubuna girer. Tuz Gölü ve Kızılırmak yer üstü suyudur (Tuz Gölü kimyasal özelliğiyle tuzlu suya örnektir); artezyen yer altı suyudur."},

/* ---------- COĞ.11.3.2 (9) ---------- */
 {c:"3.2",q:"Aşağıdakilerden hangisi Türkiye akarsularının genel özelliklerinden biri değildir?",
  o:["Boyları uzun ve debileri yüksektir.","Denge profiline ulaşamamışlardır.","Rejimleri düzensizdir.","Hidroelektrik potansiyelleri yüksektir."],
  e:"Türkiye akarsuları genellikle kısa, debisi düşük, akış hızı yüksek, rejimi düzensiz ve ulaşıma elverişsizdir. Eğimli ve engebeli olduklarından hidroelektrik potansiyelleri yüksektir."},
 {c:"3.2",q:"Aşağıdaki akarsulardan hangisi Türkiye'den doğup komşu ülkelere geçen (sınıraşan) sulardandır?",
  o:["Fırat","Sakarya","Kızılırmak","Büyük Menderes"],
  e:"Fırat Türkiye'de doğar, Suriye ve Irak'tan geçerek Basra Körfezi'ne ulaşır. Sakarya, Kızılırmak ve Büyük Menderes Türkiye sınırları içinde denize dökülür."},
 {c:"3.2",q:"Asi Nehri için aşağıdakilerden hangisi doğrudur?",
  o:["Lübnan'da doğar, Suriye'den geçip Türkiye'ye girer, Akdeniz'e dökülür.","Türkiye'de doğar, Suriye topraklarından geçerek Akdeniz'e dökülür.","Türkiye ile Yunanistan arasında doğal sınır çizen ve Ege'ye dökülen bir akarsudur.","Türkiye'den Gürcistan'a geçerek Karadeniz'e dökülür."],
  e:"Asi Lübnan'dan doğar, Suriye üzerinden Hatay'da Türkiye'ye girer; Türkiye bu akarsuda aşağı havza ülkesidir. Gürcistan'a geçen akarsu Çoruh'tur; Yunanistan sınırını Meriç çizer."},
 {c:"3.2",q:"Aşağıdaki akarsulardan hangisi Türkiye'nin sınır oluşturan sularından biridir?",
  o:["Arpaçay","Yeşilırmak","Gediz","Seyhan"],
  e:"Arpaçay (Ermenistan), Meriç (Yunanistan) ve Aras (Ermenistan, Azerbaycan, İran) Türkiye'nin sınır oluşturan sularıdır. Diğerleri Türkiye içinde akar."},
 {c:"3.2",q:"Türkiye'nin kara suları genişliği aşağıdakilerden hangisinde doğru verilmiştir?",
  o:["Karadeniz ve Akdeniz'de 12, Ege Denizi'nde 6 deniz mili","Karadeniz'de 6, Ege ve Akdeniz'de 12 deniz mili","Her denizde 12 deniz mili","Her denizde 24 deniz mili"],
  e:"Türkiye'nin kara suları Karadeniz ve Akdeniz'de 12, Ege Denizi'nde 6 deniz milidir. 24 deniz mili, ders kitabındaki profilde bitişik bölgenin sınırı olarak gösterilir."},
 {c:"3.2",q:"Kıta sahanlığı dışındaki deniz alanlarında 200 deniz miline kadar canlı ve cansız kaynakları keşfetme, kullanma ve yönetme hakkı tanınan alana ne ad verilir?",
  o:["Münhasır ekonomik bölge","Kıta sahanlığı ve bitişik bölge birlikte","Kara suları ile iç suların tamamı","İç sular"],
  e:"Münhasır ekonomik bölge, ülkeye balıkçılık ve deniz tabanı mineralleri gibi kaynaklar üzerinde keşfetme, kullanma ve yönetme hakkı verir; bu haklar deniz hukuku ile düzenlenir."},
 {c:"3.2",q:"Mavi Vatan doktrininin temel amacı aşağıdakilerden hangisidir?",
  o:["Türkiye'nin denizlerdeki yetki alanlarında uluslararası hukuktan doğan hak ve çıkarlarını korumak","Yalnızca Karadeniz kıyılarında balıkçılığı geliştirmek","Komşu ülkelerin deniz yetki alanlarını daraltmak","Denizlerdeki tüm kaynakları herkesin kullanımına açmak"],
  e:"Mavi Vatan, kara suları, kıta sahanlığı ve münhasır ekonomik bölge gibi deniz yetki alanlarını ve bu alanlardaki doğal kaynaklar ile hava sahasını kapsayan, hak ve çıkarları koruma doktrinidir."},
 {c:"3.2",q:"GAP kapsamında sulanabilir arazinin artmasının bölgedeki tarımsal üretime en doğrudan etkisi aşağıdakilerden hangisidir?",
  o:["Sulu tarımın yaygınlaşıp verim ve ürün çeşidinin artması","Yağış miktarının artarak bölgenin iklim kuşağının değişmesi","Tarımsal üretimin tamamen durması","Bölgenin dışa bağımlılığının artması"],
  e:"Sulama olanakları arttıkça sulu tarım yaygınlaşır; verim, ürün çeşidi ve gelir yükselir. Sulama yağış miktarını ya da iklim kuşağını değiştirmez."},
 {c:"3.2",q:"Sınıraşan suların yönetiminin giderek daha stratejik bir önem kazanmasının temel nedeni aşağıdakilerden hangisidir?",
  o:["Tatlı su miktarının azalması ve kullanım baskısının artması; paylaşımın iş birliği ya da anlaşmazlık potansiyeli taşıması","Akarsuların hepsinin aynı ülkeden doğması","Sınıraşan suların hiç tatlı su içermemesi","Sınır oluşturan suların taşımacılıkta kullanılamaması"],
  e:"Su azalırken talep arttığı için sınıraşan sular ülkeler arasında hem siyasi hem ekonomik iş birliği gerektirir; paylaşım çözülmezse gerilim doğabilir."}
];

/* Ortak yazılı provası: 3 deneme × 6 soru (Senaryo 3 dağılımı: 11.1.1 → 2, 11.2.1 → 1, 11.3.1 → 2, 11.3.2 → 1). MEB ortak yazılı biçimi: 40 dk, 100 puan, kısa cevaplı ve açık uçlu.
   Soru: {c: çıktı, p: puan, zor: kolay/orta/zor, tur: kisa/acik, k: kaynak (HTML, SVG şekiller dâhil), q: soru, c2: örnek cevap, o: puanlama}.
   o = [{ad: bölüm harfi (tek bölümlü soruda yok), m: neyi ölçtüğü, l: [[puan, ölçüt], ...]}]; l: tam puan, kısmi puan(lar), 0 sırasıyla. Bölümlerin tam puanları toplamı p'ye eşit. */
const PROVA_SURUM="meb1";
const PROVA=[
 {ad:"Deneme 1",s:[
   {c:"1.1",
    p:10,
    zor:"kolay",
    tur:"kisa",
    k:"Bir haber sitesinin bu haftaki üç başlığı (örnek başlıklar):<div class=\"y-tablo-kap\"><table><tr><th>No</th><th>Haber başlığı</th></tr><tr><td>I</td><td>Bir mahallede yağmur suyu giderlerinin tıkanması nedeniyle caddelerde su birikti.</td></tr><tr><td>II</td><td>Küresel ısınmayla birlikte buzulların erimesi deniz seviyesini yükseltiyor.</td></tr><tr><td>III</td><td>Akdeniz çevresinde yaz aylarında orman yangınları sıklaştı.</td></tr></table></div>",
    q:"Haberlerde verilen mekânsal sorunları ölçeğe göre (yerel, bölgesel, küresel) sınıflandırınız.",
    c2:"I numaralı sorun yerel ölçektedir, çünkü yalnızca tek bir mahalleyi etkiler. II numaralı sorun küresel ölçektedir, çünkü tüm dünyayı ilgilendirir. III numaralı sorun bölgesel ölçektedir, çünkü Akdeniz çevresi gibi geniş ama sınırlı bir bölgede görülür.",
    o:[{"m":"Mekânsal sorunları ölçeğe göre sınıflandırma","l":[[10,"Üç sorunu da doğru ölçeğe yerleştirmiş (I yerel, II küresel, III bölgesel)."],[6,"İki sorunu doğru ölçeğe yerleştirmiş."],[3,"Yalnızca bir sorunu doğru ölçeğe yerleştirmiş."],[0,"Hiçbirini doğru sınıflandırmamış ya da ölçek yerine tema yazmış (çevresel, sosyal gibi)."]]}]},
   {c:"1.1",
    p:20,
    zor:"zor",
    tur:"acik",
    k:"Bir akarsu havzasında yukarı havzadaki yamaçlarda ormanlar tarla açmak için kesilmiştir. Aşağı havzada ise kent, nüfus artışıyla birlikte akarsuyun taşkın ovasına doğru genişlemiş ve son on yılda taşkınlar sıklaşmıştır. Havzanın şematik haritası aşağıda verilmiştir.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Şematik havza haritası: yukarı havzada orman açılmış yamaçlar, aşağı havzada akarsu kıyısında eski kent merkezi ve taşkın ovasında yeni konut alanları\"><rect x=\"8\" y=\"8\" width=\"584\" height=\"296\" class=\"s-kara\"/><ellipse cx=\"70\" cy=\"62\" rx=\"26\" ry=\"15\" class=\"s-yesil\" fill-opacity=\".65\"/><ellipse cx=\"128\" cy=\"46\" rx=\"24\" ry=\"13\" class=\"s-yesil\" fill-opacity=\".65\"/><ellipse cx=\"96\" cy=\"112\" rx=\"28\" ry=\"16\" class=\"s-yesil\" fill-opacity=\".65\"/><ellipse cx=\"40\" cy=\"100\" rx=\"20\" ry=\"12\" class=\"s-yesil\" fill-opacity=\".65\"/><polygon points=\"170,82 236,72 268,112 222,148 172,128\" class=\"s-gri\" fill-opacity=\".7\"/><text x=\"222\" y=\"66\" class=\"s-soluk\" text-anchor=\"middle\">Orman açılmış yamaçlar</text><text x=\"22\" y=\"142\" class=\"s-soluk\">Orman</text><path d=\"M 60,62 C 130,88 200,108 262,148 S 342,168 384,208 S 480,250 566,266\" class=\"s-su-cizgi\"/><polygon points=\"352,188 420,186 484,226 566,246 584,286 498,290 402,252 346,216\" class=\"s-su\" fill-opacity=\".32\"/><text x=\"420\" y=\"280\" class=\"s-soluk\">Taşkın ovası</text><rect x=\"440\" y=\"150\" width=\"11\" height=\"11\" class=\"s-kirmizi\"/><rect x=\"456\" y=\"150\" width=\"11\" height=\"11\" class=\"s-kirmizi\"/><rect x=\"440\" y=\"164\" width=\"11\" height=\"11\" class=\"s-kirmizi\"/><rect x=\"456\" y=\"164\" width=\"11\" height=\"11\" class=\"s-kirmizi\"/><rect x=\"472\" y=\"158\" width=\"11\" height=\"11\" class=\"s-kirmizi\"/><text x=\"404\" y=\"142\" class=\"s-yazi\">Eski kent merkezi</text><rect x=\"420\" y=\"222\" width=\"11\" height=\"11\" class=\"s-mor\"/><rect x=\"438\" y=\"230\" width=\"11\" height=\"11\" class=\"s-mor\"/><rect x=\"456\" y=\"238\" width=\"11\" height=\"11\" class=\"s-mor\"/><rect x=\"474\" y=\"245\" width=\"11\" height=\"11\" class=\"s-mor\"/><rect x=\"492\" y=\"252\" width=\"11\" height=\"11\" class=\"s-mor\"/><text x=\"412\" y=\"216\" class=\"s-yazi\">Yeni konut alanları</text><line x1=\"560\" y1=\"56\" x2=\"560\" y2=\"34\" class=\"s-kalin\"/><polygon points=\"560,26 555.5,34 564.5,34\" class=\"s-yazi\"/><text x=\"560\" y=\"72\" class=\"s-yazi\" text-anchor=\"middle\">K</text><text x=\"20\" y=\"28\" class=\"s-soluk\">YUKARI HAVZA</text><text x=\"396\" y=\"98\" class=\"s-soluk\">AŞAĞI HAVZA</text><rect x=\"10\" y=\"316\" width=\"14\" height=\"11\" class=\"s-yesil\" fill-opacity=\"0.65\"/><text x=\"29\" y=\"326\" class=\"s-soluk\">Orman</text><rect x=\"84\" y=\"316\" width=\"14\" height=\"11\" class=\"s-gri\" fill-opacity=\"0.7\"/><text x=\"103\" y=\"326\" class=\"s-soluk\">Açılmış yamaç</text><rect x=\"192\" y=\"316\" width=\"14\" height=\"11\" class=\"s-kirmizi\"/><text x=\"211\" y=\"326\" class=\"s-soluk\">Eski kent</text><rect x=\"276\" y=\"316\" width=\"14\" height=\"11\" class=\"s-mor\"/><text x=\"295\" y=\"326\" class=\"s-soluk\">Yeni konut</text><rect x=\"368\" y=\"316\" width=\"14\" height=\"11\" class=\"s-su\" fill-opacity=\"0.32\"/><text x=\"387\" y=\"326\" class=\"s-soluk\">Taşkın ovası</text><line x1=\"486\" y1=\"322\" x2=\"510\" y2=\"322\" class=\"s-su-cizgi\"/><text x=\"516\" y=\"326\" class=\"s-soluk\">Akarsu</text></svg><figcaption>Bir akarsu havzasının şematik haritası (ölçeksiz).</figcaption></figure>",
    q:"a) Haritadan ve metinden yararlanarak taşkınların sıklaşmasında etkili olan iki nedeni (biri yukarı havzada, biri aşağı havzada) neden-sonuç ilişkisi kurarak açıklayınız.<br>b) Coğrafyanın bu soruna çözüm üretirken tespit ve izleme, etki analizi ve modelleme ile çözüm ve planlama basamaklarındaki katkılarını bu havzaya özgü birer örnekle açıklayınız.",
    c2:"a) Yukarı havzada ormanlar açılıp yamaçlar tarlaya dönüştürüldüğü için yağmuru tutan bitki örtüsü azalmış, yağış hızla akışa geçerek toprağı sürüklemekte ve akarsuya çok su ile tortu taşımaktadır. Aşağı havzada ise yeni konutlar taşkın ovasına yapıldığı için suyun yayılabileceği alan daralmış, taşan su doğrudan yerleşimi etkilemektedir. b) Tespit ve izleme: uydu görüntüsü ve haritalarla orman azalması, taşkın ovası ve yapılaşma sınırı belirlenip yıllar içinde izlenir. Etki analizi ve modelleme: yağış, eğim ve arazi kullanımı verileriyle hangi konutların ne kadar su altında kalacağı modellenir. Çözüm ve planlama: taşkın ovasında yapılaşma sınırlanır, yukarı havzada ağaçlandırma ve teraslama yapılır, risk haritasına göre erken uyarı ve tahliye planı hazırlanır.",
    o:[{"ad":"a","m":"Mekânsal sorunun nedenlerini harita verisiyle açıklama","l":[[8,"İki nedeni de harita verisine dayanarak neden-sonuç ilişkisiyle açıklamış (yukarı havzada ormansızlaşma ve yamaç tarlaları, yüzey akışının ve taşınan tortunun artması; aşağı havzada taşkın ovasında yapılaşma, suyun yayılma alanının daralması)."],[5,"İki nedeni doğru belirlemiş ancak yalnızca birini neden-sonuç ilişkisiyle açıklamış."],[2,"Nedenleri yalnızca tespit etmiş (ormanlar kesilmiş, kent büyümüş gibi); neden-sonuç ilişkisi kurmamış."],[0,"Genel ya da haritadan bağımsız ifade yazmış (yağış çok gibi) ya da yalnızca bir yerde neden yazmış."]]},{"ad":"b","m":"Coğrafyanın katkısını üç basamakta yapılandırma","l":[[12,"Üç basamağı da havzaya özgü birer örnekle açıklamış (tespit: taşkın ovası ve yapılaşmanın haritalanıp izlenmesi; etki analizi: taşkında etkilenecek alanın modellenmesi; çözüm: yapılaşmanın sınırlanması, ağaçlandırma, erken uyarı)."],[8,"Üç basamaktan ikisini havzaya özgü örnekle açıklamış ya da üçünü genel ifadelerle yazmış."],[4,"Yalnızca bir basamağı örnekle açıklamış ya da basamak adlarını örneksiz sıralamış."],[0,"Basamaklar ve havzayla ilgisi olmayan ifadeler yazmış."]]}]},
   {c:"2.1",
    p:15,
    zor:"orta",
    tur:"acik",
    k:"Bir belediye, taşkın riskini incelemek için web tabanlı CBS uygulamasını kullanmaktadır. Ekran görüntüsünde üç katman açıktır.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Web tabanlı CBS ekranı: nüfus yoğunluğu, taşkın riski ve okullar katmanları açık; altı mahalle (A-F) ve beş okul gösteriliyor\"><rect x=\"4\" y=\"4\" width=\"592\" height=\"332\" class=\"s-kara\" rx=\"8\"/><rect x=\"4\" y=\"4\" width=\"592\" height=\"28\" class=\"s-kara\" rx=\"8\"/><circle cx=\"20\" cy=\"18\" r=\"4\" class=\"s-gri\"/><circle cx=\"33\" cy=\"18\" r=\"4\" class=\"s-gri\"/><circle cx=\"46\" cy=\"18\" r=\"4\" class=\"s-gri\"/><rect x=\"64\" y=\"10\" width=\"330\" height=\"16\" class=\"s-kara\" rx=\"8\"/><text x=\"76\" y=\"22\" class=\"s-soluk\">belediye-harita (örnek web uygulaması)</text><line x1=\"4\" y1=\"32\" x2=\"596\" y2=\"32\" class=\"s-cizgi\"/><line x1=\"172\" y1=\"32\" x2=\"172\" y2=\"336\" class=\"s-cizgi\"/><text x=\"14\" y=\"52\" class=\"s-yazi\">Katmanlar</text><rect x=\"14\" y=\"62\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,69 19.5,72 24.5,65.5\" class=\"s-kalin\"/><text x=\"33\" y=\"73\" class=\"s-yazi\">Nüfus yoğunluğu</text><rect x=\"14\" y=\"87\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,94 19.5,97 24.5,90.5\" class=\"s-kalin\"/><text x=\"33\" y=\"98\" class=\"s-yazi\">Taşkın riski</text><rect x=\"14\" y=\"112\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,119 19.5,122 24.5,115.5\" class=\"s-kalin\"/><text x=\"33\" y=\"123\" class=\"s-yazi\">Okullar</text><rect x=\"14\" y=\"137\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><text x=\"33\" y=\"148\" class=\"s-soluk\">Sağlık merkezleri</text><line x1=\"10\" y1=\"170\" x2=\"166\" y2=\"170\" class=\"s-cizgi\"/><text x=\"14\" y=\"186\" class=\"s-yazi\">Lejant</text><rect x=\"14\" y=\"191\" width=\"16\" height=\"11\" class=\"s-mor\" fill-opacity=\".15\"/><rect x=\"30\" y=\"191\" width=\"16\" height=\"11\" class=\"s-mor\" fill-opacity=\".45\"/><rect x=\"46\" y=\"191\" width=\"16\" height=\"11\" class=\"s-mor\" fill-opacity=\".8\"/><text x=\"68\" y=\"200\" class=\"s-soluk\">Yoğunluk</text><text x=\"14\" y=\"214\" class=\"s-soluk\">(açık: az, koyu: çok)</text><rect x=\"14\" y=\"229\" width=\"16\" height=\"11\" class=\"s-kirmizi\" fill-opacity=\"0.3\"/><text x=\"36\" y=\"238\" class=\"s-soluk\">Taşkın riski alanı</text><polygon points=\"22,250 29,261 15,261\" class=\"s-yazi\"/><text x=\"36\" y=\"260\" class=\"s-soluk\">Okul (numaralı)</text><rect x=\"178\" y=\"38\" width=\"412\" height=\"292\" class=\"s-kara\"/><rect x=\"182\" y=\"44\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.55\"/><rect x=\"317\" y=\"44\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.25\"/><rect x=\"452\" y=\"44\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.1\"/><rect x=\"182\" y=\"166\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.75\"/><rect x=\"317\" y=\"166\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.45\"/><rect x=\"452\" y=\"166\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.15\"/><rect x=\"182\" y=\"44\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"317\" y=\"44\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"452\" y=\"44\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"182\" y=\"166\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"317\" y=\"166\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"452\" y=\"166\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><polygon points=\"182,116 250,146 330,126 400,161 470,141 587,151 587,199 470,189 400,209 330,174 250,194 182,164\" class=\"s-kirmizi\" fill-opacity=\".3\"/><polyline points=\"182,140 250,170 330,150 400,185 470,165 587,175\" class=\"s-su-cizgi\"/><text x=\"190\" y=\"61\" class=\"s-yazi\">A</text><text x=\"325\" y=\"61\" class=\"s-yazi\">B</text><text x=\"460\" y=\"61\" class=\"s-yazi\">C</text><text x=\"190\" y=\"183\" class=\"s-yazi\">D</text><text x=\"325\" y=\"183\" class=\"s-yazi\">E</text><text x=\"460\" y=\"183\" class=\"s-yazi\">F</text><polygon points=\"225,83 233,98 217,98\" class=\"s-yazi\"/><text x=\"236\" y=\"97\" class=\"s-soluk\">1</text><polygon points=\"365,149 373,164 357,164\" class=\"s-yazi\"/><text x=\"376\" y=\"163\" class=\"s-soluk\">2</text><polygon points=\"232,169 240,184 224,184\" class=\"s-yazi\"/><text x=\"243\" y=\"183\" class=\"s-soluk\">3</text><polygon points=\"330,241 338,256 322,256\" class=\"s-yazi\"/><text x=\"341\" y=\"255\" class=\"s-soluk\">4</text><polygon points=\"520,221 528,236 512,236\" class=\"s-yazi\"/><text x=\"531\" y=\"235\" class=\"s-soluk\">5</text><text x=\"584\" y=\"322\" class=\"s-soluk\" text-anchor=\"end\">Şematik ekran, ölçeksiz</text></svg><figcaption>Web tabanlı CBS ekranı. Şematik, ölçeksiz; mahalle sınırları A–F, örnek veri.</figcaption></figure>",
    q:"a) Ekrandaki katmanları üst üste açma işleminin adını yazınız. Bu işlemin sonucuna göre hem taşkın riski alanında okulu bulunan hem de nüfus yoğunluğu en yüksek olan mahalleyi gerekçesiyle belirleyiniz.<br>b) Bu uygulama hangi amaçlarla kullanılabilir? İki amaç yazınız ve ekrandaki verilere dayanan bir planlama önerisi geliştiriniz.",
    c2:"a) Bu işlem çakıştırmadır. Nüfus yoğunluğu, taşkın riski ve okul katmanları birlikte okunduğunda D mahallesi öne çıkar: nüfus yoğunluğu en koyu, yani en yüksek olan mahalledir ve 3 numaralı okul taşkın riski alanının içindedir. (B mahallesindeki 2 numaralı okul da risk alanındadır ancak B daha az yoğundur.) b) Uygulama taşkın gibi afet risklerinin hangi mahallelerde yoğunlaştığını görmek, okul gibi kamu hizmetlerinin güvenliğini ve tahliye planlarını yapmak ya da yeni okul ve tesisler için uygun yer seçmek amacıyla kullanılabilir. Öneri: D ve B mahallelerindeki okullar için tahliye ve erken uyarı planı hazırlamak, yeni okulları taşkın riski alanının dışında seçmek.",
    o:[{"ad":"a","m":"Çakıştırmayı adlandırma ve katmanları birlikte okuma","l":[[7,"İşlemi çakıştırma olarak adlandırmış; D mahallesini katman verilerine dayandırarak belirlemiş (en yüksek nüfus yoğunluğu ve taşkın riski alanında okul)."],[4,"D mahallesini ya da riskli okulları (2 ve 3 numaralı) doğru belirlemiş ancak işlemi adlandırmamış veya gerekçe vermemiş."],[2,"Yalnızca işlemin adını yazmış; mahalleyi belirleyememiş."],[0,"Yanlış mahalle ve yanlış işlem yazmış ya da yanıtsız bırakmış."]]},{"ad":"b","m":"Web tabanlı CBS'nin amaçları ve veriye dayalı öneri","l":[[8,"İki amacı doğru yazmış (afet risk analizi, okul güvenliği ve tahliye planı, yatırım için yer seçimi gibi) ve ekrandaki verilere dayanan uygulanabilir bir öneri geliştirmiş."],[5,"İki amacı yazmış ancak öneri geliştirmemiş ya da öneri verilerle ilişkisiz."],[2,"Yalnızca genel bir amaç yazmış (harita yapmak gibi)."],[0,"Amaçlar ve öneri uygulamayla ilgisiz."]]}]},
   {c:"3.1",
    p:10,
    zor:"kolay",
    tur:"kisa",
    k:"Aşağıdaki tablo su kaynaklarının iki ölçüte göre sınıflandırılmasını göstermektedir.<div class=\"y-tablo-kap\"><table><tr><th>Sınıflandırma ölçütü</th><th>Grup</th><th>İki örnek</th></tr><tr><td>Bulunduğu yere göre</td><td>Yer üstü suları</td><td>……………………</td></tr><tr><td>Bulunduğu yere göre</td><td>Yer altı suları</td><td>……………………</td></tr><tr><td>Kimyasal özelliğine göre</td><td>Tatlı sular</td><td>……………………</td></tr><tr><td>Kimyasal özelliğine göre</td><td>Tuzlu sular</td><td>……………………</td></tr></table></div>",
    q:"Tabloyu doldurunuz; her grup için ikişer örnek yazınız.",
    c2:"Yer üstü suları: Beyşehir Gölü, Kızılırmak. Yer altı suları: karstik kaynak, artezyen kuyusu. Tatlı sular: Eğirdir Gölü, akarsular. Tuzlu sular: Tuz Gölü, Akdeniz (okyanuslar ve denizler de olur).",
    o:[{"m":"Su kaynaklarına grup örnekleri verme","l":[[10,"Sekiz örneğin en az yedisini doğru gruba yazmış."],[7,"Beş ya da altı örneği doğru gruba yazmış."],[4,"Üç ya da dört örneği doğru gruba yazmış."],[0,"İki ya da daha az doğru örnek yazmış ya da örnekleri yanlış gruba koymuş (akarsuyu yer altı suyu saymak gibi)."]]}]},
   {c:"3.1",
    p:20,
    zor:"zor",
    tur:"acik",
    k:"Aşağıda üç farklı gölün oluşumunu gösteren şematik kesitler verilmiştir.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Üç göl kesiti: A dağ zirvesindeki krater çanağında göl ve magma odası; B bir vadide heyelan kütlesinin önünü kapattığı göl; C iki fay arasında çöken blokta oluşan göl\"><rect x=\"10\" y=\"20\" width=\"184\" height=\"290\" class=\"s-kara\"/><text x=\"20\" y=\"42\" class=\"s-yazi\">A</text><rect x=\"208\" y=\"20\" width=\"184\" height=\"290\" class=\"s-kara\"/><text x=\"218\" y=\"42\" class=\"s-yazi\">B</text><rect x=\"406\" y=\"20\" width=\"184\" height=\"290\" class=\"s-kara\"/><text x=\"416\" y=\"42\" class=\"s-yazi\">C</text><polygon points=\"18,300 66,130 86,146 114,146 134,130 176,300\" class=\"s-gri\" fill-opacity=\".55\"/><polygon points=\"87,146 113,146 107,158 93,158\" class=\"s-su\"/><ellipse cx=\"97\" cy=\"262\" rx=\"30\" ry=\"13\" class=\"s-kirmizi\" fill-opacity=\".6\"/><line x1=\"97\" y1=\"249\" x2=\"100\" y2=\"160\" class=\"s-kalin\" stroke-dasharray=\"5 4\"/><text x=\"100\" y=\"118\" class=\"s-soluk\" text-anchor=\"middle\">Krater çanağı</text><text x=\"97\" y=\"296\" class=\"s-soluk\" text-anchor=\"middle\">Magma odası</text><polygon points=\"208,150 250,172 290,185 345,203 392,240 392,310 208,310\" class=\"s-gri\" fill-opacity=\".25\"/><polygon points=\"208,150 302,150 298,194 290,185 250,172\" class=\"s-su\"/><polygon points=\"300,140 346,150 384,222 392,242 330,236 296,198\" class=\"s-gri\"/><text x=\"332\" y=\"120\" class=\"s-soluk\" text-anchor=\"middle\">Heyelan kütlesi</text><line x1=\"334\" y1=\"126\" x2=\"336.4\" y2=\"138.2\" class=\"s-cizgi\"/><polygon points=\"338,146 340.8,137.3 332,139\" class=\"s-yazi\"/><text x=\"246\" y=\"166\" class=\"s-yazi\">Göl</text><polygon points=\"406,150 466,150 476,210 476,310 406,310\" class=\"s-gri\" fill-opacity=\".45\"/><polygon points=\"590,150 534,150 524,210 524,310 590,310\" class=\"s-gri\" fill-opacity=\".45\"/><polygon points=\"476,210 524,210 524,310 476,310\" class=\"s-gri\" fill-opacity=\".3\"/><polygon points=\"466,150 534,150 524,210 476,210\" class=\"s-su\" fill-opacity=\".9\"/><line x1=\"466\" y1=\"150\" x2=\"476\" y2=\"210\" class=\"s-kalin\"/><line x1=\"534\" y1=\"150\" x2=\"524\" y2=\"210\" class=\"s-kalin\"/><text x=\"444\" y=\"142\" class=\"s-soluk\" text-anchor=\"middle\">Fay</text><text x=\"556\" y=\"142\" class=\"s-soluk\" text-anchor=\"middle\">Fay</text><line x1=\"500\" y1=\"230\" x2=\"500\" y2=\"260\" class=\"s-kalin\"/><polygon points=\"500,268 504.5,260 495.5,260\" class=\"s-yazi\"/><text x=\"500\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Çöken blok</text></svg><figcaption>Üç gölün oluşumunu gösteren şematik kesitler (ölçeksiz).</figcaption></figure>",
    q:"a) A, B ve C ile gösterilen göllerin oluşum biçimlerini (tektonik, volkanik, heyelan seti) adlandırınız ve her biri için Türkiye'den birer örnek veriniz.<br>b) A ve C göllerinin bağlı olduğu grup (yerlikaya göller) ile B gölünün bağlı olduğu grubu (set gölleri) oluşum biçimi bakımından karşılaştırınız. Bir baraj gölünü bu sınıflandırmada hangi gruba yerleştirirsiniz? Gerekçesiyle sınıflandırınız.",
    c2:"a) A: volkanik göl (Nemrut Krater Gölü). B: heyelan seti gölü (Abant Gölü). C: tektonik göl (Tuz Gölü ya da Burdur Gölü). b) Yerlikaya göllerde (A ve C) çukurluk önce oluşur: krater ya da kaldera çanağı veya fayların çökerttiği çukur, sonradan suyla dolar. Set göllerinde (B) önceden bir çukurluk yoktur; akarsu vadisi bir set ile kapanır ve engelin gerisinde su birikir. Baraj gölü, vadinin insan eliyle yapılan bir set (baraj) ile kapatılmasıyla oluştuğu için yapay set gölü olarak set göllerine girer.",
    o:[{"ad":"a","m":"Göllerin oluşum biçimini adlandırma ve örnek verme","l":[[8,"Üç gölü de doğru adlandırmış (A volkanik, B heyelan seti, C tektonik) ve her biri için doğru Türkiye örneği vermiş."],[5,"Üç adlandırma doğru; örneklerden en az biri eksik ya da yanlış."],[2,"Yalnızca bir ya da iki adlandırma doğru."],[0,"Adlandırma yapmamış ya da hepsi yanlış."]]},{"ad":"b","m":"Gruplar arası karşılaştırma ve baraj gölünü sınıflandırma","l":[[12,"Karşılaştırmayı oluşum biçimi ölçütüyle yapmış (yerlikaya: çukurluk önce oluşur, sonra su dolar; set: vadi ya da kıyı bir set ile kapanır, su birikir) ve baraj gölünü gerekçesiyle yapay set gölü olarak sınıflandırmış."],[8,"Karşılaştırmayı yapmış ancak baraj gölünü sınıflandırmamış ya da gerekçesiz bırakmış."],[4,"İki grubu yalnızca ayrı ayrı tanımlamış (karşılaştırma yok) ya da yalnızca baraj gölünü doğru sınıflandırmış."],[0,"Gruplar ve baraj gölü hakkında doğru bir ifade yazmamış."]]}]},
   {c:"3.2",
    p:25,
    zor:"orta",
    tur:"acik",
    k:"(Örnek haber) Vadide inşa edilen barajın gölü dolunca üç köyün tarım arazileri ve evlerinin büyük bölümü su altında kaldı; köylüler yeni yerleşim yerine taşındı. Vadideki taş köprü ve çeşme sökülerek müzeye taşındı. Göl çevresinde su sporları ve günübirlik turizm tesisleri açılıyor.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Gruplanmış sütun grafik: Köy A 420'den 160'a, Köy B 310'dan 90'a, Köy C 180'den 40'a düşmüştür\"><text x=\"10\" y=\"24\" class=\"s-yazi\">Köylerin nüfusu (kişi) · örnek veri</text><line x1=\"64\" y1=\"262\" x2=\"580\" y2=\"262\" class=\"s-kalin\"/><text x=\"56\" y=\"266\" class=\"s-soluk\" text-anchor=\"end\">0</text><line x1=\"64\" y1=\"219.2\" x2=\"580\" y2=\"219.2\" class=\"s-cizgi\"/><text x=\"56\" y=\"223.2\" class=\"s-soluk\" text-anchor=\"end\">100</text><line x1=\"64\" y1=\"176.4\" x2=\"580\" y2=\"176.4\" class=\"s-cizgi\"/><text x=\"56\" y=\"180.4\" class=\"s-soluk\" text-anchor=\"end\">200</text><line x1=\"64\" y1=\"133.6\" x2=\"580\" y2=\"133.6\" class=\"s-cizgi\"/><text x=\"56\" y=\"137.6\" class=\"s-soluk\" text-anchor=\"end\">300</text><line x1=\"64\" y1=\"90.8\" x2=\"580\" y2=\"90.8\" class=\"s-cizgi\"/><text x=\"56\" y=\"94.8\" class=\"s-soluk\" text-anchor=\"end\">400</text><line x1=\"64\" y1=\"48\" x2=\"580\" y2=\"48\" class=\"s-cizgi\"/><text x=\"56\" y=\"52\" class=\"s-soluk\" text-anchor=\"end\">500</text><line x1=\"64\" y1=\"44\" x2=\"64\" y2=\"262\" class=\"s-kalin\"/><rect x=\"94\" y=\"82.2\" width=\"50\" height=\"179.8\" class=\"s-cubuk\"/><rect x=\"156\" y=\"193.5\" width=\"50\" height=\"68.5\" class=\"s-cubuk2\"/><text x=\"119\" y=\"76.2\" class=\"s-yazi\" text-anchor=\"middle\">420</text><text x=\"181\" y=\"187.5\" class=\"s-yazi\" text-anchor=\"middle\">160</text><text x=\"150\" y=\"284\" class=\"s-yazi\" text-anchor=\"middle\">Köy A</text><rect x=\"266\" y=\"129.3\" width=\"50\" height=\"132.7\" class=\"s-cubuk\"/><rect x=\"328\" y=\"223.5\" width=\"50\" height=\"38.5\" class=\"s-cubuk2\"/><text x=\"291\" y=\"123.3\" class=\"s-yazi\" text-anchor=\"middle\">310</text><text x=\"353\" y=\"217.5\" class=\"s-yazi\" text-anchor=\"middle\">90</text><text x=\"322\" y=\"284\" class=\"s-yazi\" text-anchor=\"middle\">Köy B</text><rect x=\"438\" y=\"185\" width=\"50\" height=\"77\" class=\"s-cubuk\"/><rect x=\"500\" y=\"244.9\" width=\"50\" height=\"17.1\" class=\"s-cubuk2\"/><text x=\"463\" y=\"179\" class=\"s-yazi\" text-anchor=\"middle\">180</text><text x=\"525\" y=\"238.9\" class=\"s-yazi\" text-anchor=\"middle\">40</text><text x=\"494\" y=\"284\" class=\"s-yazi\" text-anchor=\"middle\">Köy C</text><rect x=\"120\" y=\"306\" width=\"14\" height=\"14\" class=\"s-cubuk\"/><text x=\"140\" y=\"318\" class=\"s-yazi\">Baraj öncesi</text><rect x=\"290\" y=\"306\" width=\"14\" height=\"14\" class=\"s-cubuk2\"/><text x=\"310\" y=\"318\" class=\"s-yazi\">Yeni yerleşime taşındıktan 5 yıl sonra</text></svg><figcaption>Baraj gölü altında kalan üç köyün nüfusu (örnek veri).</figcaption></figure>",
    q:"a) Grafiği yorumlayınız ve köylerin nüfusunun azalmasının nedenini açıklayınız.<br>b) Haberdeki gelişmelerden hareketle barajın bu yöreye sosyokültürel etkilerinden ikisini ve ekonomik açıdan bir fırsatını yazınız. Kültürel mirasın korunması için bir öneri geliştiriniz.",
    c2:"a) Üç köyde de nüfus belirgin biçimde azalmıştır (A 420'den 160'a, B 310'dan 90'a, C 180'den 40'a); oransal azalma en çok C köyündedir (yaklaşık %78). Nedeni, baraj gölü yüzünden tarım arazilerinin ve evlerin su altında kalmasıdır: geçim kaynağını kaybeden aileler yeni yerleşim yerine taşınmış ya da başka yerlere göç etmiştir. b) Sosyokültürel etkiler: köylüler yeni yerleşime taşınınca komşuluk ve akrabalık bağları dağılır, geleneksel tarım ve köy yaşamı değişir; taş köprü ve çeşme gibi kültürel miras yerinden edilir. Ekonomik fırsat: göl çevresinde su sporları, turizm ve balıkçılıkla yeni gelir kaynakları doğar. Öneri: tarihî yapıların belgelenip aslına uygun taşınması, müzede sergilenmesi ve köy adlarının ve hikâyelerinin yaşatılması.",
    o:[{"ad":"a","m":"Grafik yorumlama ve nedenini açıklama","l":[[10,"Üç köyde de nüfusun azaldığını verilerle belirtmiş (örneğin 420'den 160'a, en çok oransal azalma C köyünde) ve nedenini açıklamış (arazi ve evlerin su altında kalması, geçim kaynağının kaybı, yeniden yerleşme ve göç)."],[6,"Azalmayı verilerle yorumlamış ancak nedeni açıklamamış (ya da nedeni yazmış, veriyle desteklememiş)."],[3,"Yalnızca nüfusun azaldığını söylemiş; veri ve neden yok."],[0,"Grafikle ilgisiz ya da yanlış yorum yazmış."]]},{"ad":"b","m":"Sosyokültürel ve ekonomik etkileri sorgulama, öneri geliştirme","l":[[15,"İki sosyokültürel etkiyi (göçle komşuluk ve akrabalık bağlarının zayıflaması, geleneksel yaşam biçiminin değişmesi, köprü ve çeşme gibi kültürel mirasın yerinden edilmesi gibi), bir ekonomik fırsatı (turizm, su sporları, balıkçılık) gerekçeleriyle yazmış ve uygulanabilir bir koruma önerisi geliştirmiş (belgeleme, taşıma ve sergileme, yer adlarını yaşatma)."],[10,"Dört öğenin üçünü doğru yazmış (örneğin öneri geliştirmemiş ya da bir etkiyi gerekçesiz bırakmış)."],[5,"Dört öğenin yalnızca birini ya da ikisini yazmış; etkileri sosyokültürel yerine yalnızca çevresel ya da ekonomik olarak vermiş."],[0,"Yazdıkları haberle ilgisiz ya da hiçbir öğe doğru değil."]]}]}
 ]},
 {ad:"Deneme 2",s:[
   {c:"1.1",
    p:10,
    zor:"kolay",
    tur:"kisa",
    k:"Üç mekânsal sorun (örnek durumlar). Coğrafya alt dalları: Toprak coğrafyası, Afetler coğrafyası, Yerleşme coğrafyası, Klimatoloji.<div class=\"y-tablo-kap\"><table><tr><th>No</th><th>Durum</th></tr><tr><td>I</td><td>Bir ovada yanlış sulama nedeniyle toprağın yüzeyinde tuz birikmiş ve verim düşmüştür.</td></tr><tr><td>II</td><td>Yoğun yağıştan sonra dik bir yamaçta heyelan olmuş, yol kapanmıştır.</td></tr><tr><td>III</td><td>Bir kentte nüfus hızla artmış; plansız konutlaşma nedeniyle yeni mahalleler ulaşım ve altyapıdan yoksun kalmıştır.</td></tr></table></div>",
    q:"Bu mekânsal sorunların her birini incelemede ağırlıklı olarak katkı sağlayacak coğrafya alt dalını yukarıdaki listeden seçerek yazınız.",
    c2:"I: Toprak coğrafyası (tuzlanma toprağın özelliğiyle ilgilidir). II: Afetler coğrafyası (heyelan bir doğal afettir). III: Yerleşme coğrafyası (kentleşme ve mahalle gelişimi).",
    o:[{"m":"Mekânsal sorunu coğrafyanın alt dalıyla eşleştirme","l":[[10,"Üç sorunu da doğru alt dalla eşleştirmiş (I toprak, II afetler, III yerleşme)."],[6,"İki sorunu doğru eşleştirmiş."],[3,"Yalnızca bir sorunu doğru eşleştirmiş."],[0,"Hiçbirini doğru eşleştirmemiş ya da listede olmayan, ilgisiz alt dallar yazmış."]]}]},
   {c:"1.1",
    p:20,
    zor:"orta",
    tur:"acik",
    k:"Bir kent içme suyunun büyük bölümünü bir barajdan sağlamaktadır. Kentin nüfusu son on yılda hızla artmış, yağışlar ise son iki yılda belirgin biçimde azalmıştır. Grafikte barajın aylık doluluk oranı verilmiştir.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Çizgi grafik: barajın aylık doluluk oranı, geçen yıl ile bu yıl karşılaştırması; bu yıl değerler belirgin biçimde düşük\"><text x=\"10\" y=\"24\" class=\"s-yazi\">Baraj doluluk oranı (%) · örnek veri</text><line x1=\"60\" y1=\"270\" x2=\"580\" y2=\"270\" class=\"s-kalin\"/><text x=\"52\" y=\"274\" class=\"s-soluk\" text-anchor=\"end\">0</text><line x1=\"60\" y1=\"226\" x2=\"580\" y2=\"226\" class=\"s-cizgi\"/><text x=\"52\" y=\"230\" class=\"s-soluk\" text-anchor=\"end\">20</text><line x1=\"60\" y1=\"182\" x2=\"580\" y2=\"182\" class=\"s-cizgi\"/><text x=\"52\" y=\"186\" class=\"s-soluk\" text-anchor=\"end\">40</text><line x1=\"60\" y1=\"138\" x2=\"580\" y2=\"138\" class=\"s-cizgi\"/><text x=\"52\" y=\"142\" class=\"s-soluk\" text-anchor=\"end\">60</text><line x1=\"60\" y1=\"94\" x2=\"580\" y2=\"94\" class=\"s-cizgi\"/><text x=\"52\" y=\"98\" class=\"s-soluk\" text-anchor=\"end\">80</text><line x1=\"60\" y1=\"50\" x2=\"580\" y2=\"50\" class=\"s-cizgi\"/><text x=\"52\" y=\"54\" class=\"s-soluk\" text-anchor=\"end\">100</text><line x1=\"60\" y1=\"50\" x2=\"60\" y2=\"270\" class=\"s-kalin\"/><text x=\"78\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Oca</text><text x=\"123\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Şub</text><text x=\"168\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Mar</text><text x=\"213\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Nis</text><text x=\"258\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">May</text><text x=\"303\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Haz</text><text x=\"348\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Tem</text><text x=\"393\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Ağu</text><text x=\"438\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Eyl</text><text x=\"483\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Eki</text><text x=\"528\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Kas</text><text x=\"573\" y=\"288\" class=\"s-soluk\" text-anchor=\"middle\">Ara</text><polyline points=\"78,98.4 123,85.2 168,72 213,67.6 258,76.4 303,94 348,116 393,138 438,155.6 483,166.6 528,160 573,142.4\" class=\"s-su-cizgi\"/><polyline points=\"78,149 123,142.4 168,131.4 213,124.8 258,138 303,160 348,182 393,201.8 438,217.2 483,230.4 528,234.8 573,232.6\" class=\"s-kalin\" stroke-dasharray=\"7 4\"/><circle cx=\"78\" cy=\"98.4\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"123\" cy=\"85.2\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"168\" cy=\"72\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"213\" cy=\"67.6\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"258\" cy=\"76.4\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"303\" cy=\"94\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"348\" cy=\"116\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"393\" cy=\"138\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"438\" cy=\"155.6\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"483\" cy=\"166.6\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"528\" cy=\"160\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"573\" cy=\"142.4\" r=\"3.5\" class=\"s-cubuk\"/><circle cx=\"78\" cy=\"149\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"123\" cy=\"142.4\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"168\" cy=\"131.4\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"213\" cy=\"124.8\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"258\" cy=\"138\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"303\" cy=\"160\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"348\" cy=\"182\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"393\" cy=\"201.8\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"438\" cy=\"217.2\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"483\" cy=\"230.4\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"528\" cy=\"234.8\" r=\"3.5\" class=\"s-cubuk2\"/><circle cx=\"573\" cy=\"232.6\" r=\"3.5\" class=\"s-cubuk2\"/><line x1=\"120\" y1=\"318\" x2=\"150\" y2=\"318\" class=\"s-su-cizgi\"/><circle cx=\"135\" cy=\"318\" r=\"3.5\" class=\"s-cubuk\"/><text x=\"158\" y=\"322\" class=\"s-yazi\">Geçen yıl</text><line x1=\"270\" y1=\"318\" x2=\"300\" y2=\"318\" class=\"s-kalin\" stroke-dasharray=\"7 4\"/><circle cx=\"285\" cy=\"318\" r=\"3.5\" class=\"s-cubuk2\"/><text x=\"308\" y=\"322\" class=\"s-yazi\">Bu yıl</text><text x=\"590\" y=\"322\" class=\"s-soluk\" text-anchor=\"end\">Aylar</text></svg><figcaption>Bir kentin içme suyu barajının aylık doluluk oranı (örnek veri).</figcaption></figure>",
    q:"a) Grafiği yorumlayarak bu yılki doluluk oranındaki düşüşün iki nedenini (biri doğal, biri beşerî) yazınız.<br>b) Coğrafyanın bu sorunun çözümüne katkısını tespit ve izleme, etki analizi ve modelleme ile çözüm ve planlama basamaklarına göre yazınız. Çözümde iş birliği yapılabilecek bir bilim dalını rolüyle belirtiniz.",
    c2:"a) Grafikte doluluk oranı iki yılda da yaz ve sonbaharda düşüyor; bu yıl düşüş çok daha derin (ekim ayında geçen yıl %47 iken bu yıl %18). Doğal neden yağışların azalması (kuraklık), beşerî neden ise nüfus artışıyla yükselen içme ve kullanma suyu talebidir. b) Tespit ve izleme: yağış, akış ve baraj doluluğu verileri harita ve CBS ile izlenir; etki analizi ve modelleme: kuraklık sürerse barajın ne zaman boşalacağı ve hangi mahalleleri etkileyeceği modellenir; çözüm ve planlama: kayıp ve kaçakları azaltma, alternatif su kaynakları belirleme ve tasarruf planı yapılır. Bu çalışmada su mühendisliği (şebeke ve arıtma) ya da meteoroloji (yağış tahmini) gibi bir bilim dalıyla iş birliği yapılır.",
    o:[{"ad":"a","m":"Grafikten nedenleri çıkarma","l":[[8,"Grafikten veriyle yararlanarak (örneğin ekimde %47'ye karşı %18) iki nedeni de nedensel ifadeyle yazmış: doğal neden yağışın azalması ya da kuraklık, beşerî neden nüfus artışı ve su talebi."],[5,"İki nedeni doğru yazmış ancak grafik verisini kullanmamış (ya da bir nedeni veriyle desteklemiş)."],[2,"Yalnızca grafikteki düşüşü betimlemiş; neden yazmamış."],[0,"Grafikle ilgisiz ya da yanlış neden yazmış."]]},{"ad":"b","m":"Coğrafyanın katkısını üç basamakta yapılandırma ve iş birliği","l":[[12,"Üç basamağı da bu soruna özgü örnekle açıklamış (izleme, modelleme, planlama) ve iş birliği yapılacak bir bilim dalını rolüyle yazmış."],[8,"Üç basamağı yazmış ancak bilim dalı eksik; ya da iki basamak ve bilim dalı doğru."],[4,"Yalnızca bir basamağı örnekle yazmış ya da basamak adlarını örneksiz sıralamış."],[0,"Basamaklar ve soruna katkı ile ilgisiz ifadeler yazmış."]]}]},
   {c:"2.1",
    p:20,
    zor:"orta",
    tur:"acik",
    k:"Bir ilçe belediyesi, sağlık hizmetine erişimi incelemek için web tabanlı CBS uygulamasını kullanmaktadır. Ekran görüntüsünde üç katman açıktır.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Web tabanlı CBS ekranı: nüfus yoğunluğu, sağlık merkezleri ve toplu taşıma hatları katmanları açık; altı mahalle (A-F)\"><rect x=\"4\" y=\"4\" width=\"592\" height=\"332\" class=\"s-kara\" rx=\"8\"/><rect x=\"4\" y=\"4\" width=\"592\" height=\"28\" class=\"s-kara\" rx=\"8\"/><circle cx=\"20\" cy=\"18\" r=\"4\" class=\"s-gri\"/><circle cx=\"33\" cy=\"18\" r=\"4\" class=\"s-gri\"/><circle cx=\"46\" cy=\"18\" r=\"4\" class=\"s-gri\"/><rect x=\"64\" y=\"10\" width=\"330\" height=\"16\" class=\"s-kara\" rx=\"8\"/><text x=\"76\" y=\"22\" class=\"s-soluk\">ilce-harita (örnek web uygulaması)</text><line x1=\"4\" y1=\"32\" x2=\"596\" y2=\"32\" class=\"s-cizgi\"/><line x1=\"172\" y1=\"32\" x2=\"172\" y2=\"336\" class=\"s-cizgi\"/><text x=\"14\" y=\"52\" class=\"s-yazi\">Katmanlar</text><rect x=\"14\" y=\"62\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,69 19.5,72 24.5,65.5\" class=\"s-kalin\"/><text x=\"33\" y=\"73\" class=\"s-yazi\">Nüfus yoğunluğu</text><rect x=\"14\" y=\"87\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,94 19.5,97 24.5,90.5\" class=\"s-kalin\"/><text x=\"33\" y=\"98\" class=\"s-yazi\">Sağlık merkezleri</text><rect x=\"14\" y=\"112\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,119 19.5,122 24.5,115.5\" class=\"s-kalin\"/><text x=\"33\" y=\"123\" class=\"s-yazi\">Toplu taşıma hatları</text><rect x=\"14\" y=\"137\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><text x=\"33\" y=\"148\" class=\"s-soluk\">Okullar</text><line x1=\"10\" y1=\"170\" x2=\"166\" y2=\"170\" class=\"s-cizgi\"/><text x=\"14\" y=\"186\" class=\"s-yazi\">Lejant</text><rect x=\"14\" y=\"191\" width=\"16\" height=\"11\" class=\"s-mor\" fill-opacity=\".15\"/><rect x=\"30\" y=\"191\" width=\"16\" height=\"11\" class=\"s-mor\" fill-opacity=\".45\"/><rect x=\"46\" y=\"191\" width=\"16\" height=\"11\" class=\"s-mor\" fill-opacity=\".8\"/><text x=\"68\" y=\"200\" class=\"s-soluk\">Yoğunluk</text><text x=\"14\" y=\"214\" class=\"s-soluk\">(açık: az, koyu: çok)</text><rect x=\"14\" y=\"229\" width=\"16\" height=\"11\" class=\"s-yesil\"/><text x=\"36\" y=\"238\" class=\"s-soluk\">Sağlık merkezi (S1-S3)</text><line x1=\"14\" y1=\"257\" x2=\"40\" y2=\"257\" class=\"s-kalin\" style=\"stroke-width:3\" stroke-dasharray=\"9 5\"/><text x=\"46\" y=\"260\" class=\"s-soluk\">Toplu taşıma hattı</text><rect x=\"178\" y=\"38\" width=\"412\" height=\"292\" class=\"s-kara\"/><rect x=\"182\" y=\"44\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.2\"/><rect x=\"317\" y=\"44\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.5\"/><rect x=\"452\" y=\"44\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.8\"/><rect x=\"182\" y=\"166\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.15\"/><rect x=\"317\" y=\"166\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.35\"/><rect x=\"452\" y=\"166\" width=\"135\" height=\"122\" class=\"s-mor\" fill-opacity=\"0.45\"/><rect x=\"182\" y=\"44\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"317\" y=\"44\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"452\" y=\"44\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"182\" y=\"166\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"317\" y=\"166\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><rect x=\"452\" y=\"166\" width=\"135\" height=\"122\" class=\"s-cizgi\"/><polyline points=\"186,112 352,112 352,232 440,232\" class=\"s-kalin\" style=\"stroke-width:3\" stroke-dasharray=\"9 5\"/><rect x=\"224\" y=\"80\" width=\"16\" height=\"16\" class=\"s-yesil\"/><text x=\"244\" y=\"92\" class=\"s-soluk\">S1</text><rect x=\"354\" y=\"70\" width=\"16\" height=\"16\" class=\"s-yesil\"/><text x=\"374\" y=\"82\" class=\"s-soluk\">S2</text><rect x=\"242\" y=\"230\" width=\"16\" height=\"16\" class=\"s-yesil\"/><text x=\"262\" y=\"242\" class=\"s-soluk\">S3</text><text x=\"190\" y=\"61\" class=\"s-yazi\">A</text><text x=\"325\" y=\"61\" class=\"s-yazi\">B</text><text x=\"460\" y=\"61\" class=\"s-yazi\">C</text><text x=\"190\" y=\"183\" class=\"s-yazi\">D</text><text x=\"325\" y=\"183\" class=\"s-yazi\">E</text><text x=\"460\" y=\"183\" class=\"s-yazi\">F</text><text x=\"584\" y=\"322\" class=\"s-soluk\" text-anchor=\"end\">Şematik ekran, ölçeksiz</text></svg><figcaption>Web tabanlı CBS ekranı. Şematik, ölçeksiz; mahalleler A–F, örnek veri.</figcaption></figure>",
    q:"a) Üç katmanı birlikte değerlendirerek sağlık hizmetine erişimin en zayıf olduğu mahalleyi gerekçesiyle belirleyiniz.<br>b) Bu uygulama hangi amaçlarla kullanılabilir? İki amaç yazınız. Web tabanlı CBS'nin bilgisayar tabanlı CBS'ye göre bir üstünlüğünü ve bir sınırlılığını karşılaştırınız.",
    c2:"a) C mahallesi: nüfus yoğunluğu en koyu, yani en yüksek olan mahalledir; içinde sağlık merkezi yoktur ve toplu taşıma hattı da bu mahalleye ulaşmamaktadır; yani çok sayıda insan hem hizmetten hem ulaşımdan uzaktadır. (F mahallesinde de merkez ve hat yoktur ancak nüfus yoğunluğu C'den düşüktür.) b) Uygulama sağlık hizmetindeki eşitsizliği görmek, yeni sağlık merkezi ya da toplu taşıma hattı için uygun yer seçmek ve afet anında ulaşım planı yapmak için kullanılabilir. Üstünlük: tarayıcıyla kullanıldığı için kurulum gerekmez, genel ağ olan her yerden erişilir ve veri güncel tutulur. Sınırlılık: genel ağ bağlantısı şarttır ve bilgisayar tabanlı CBS'ye göre daha temel analizler sunar.",
    o:[{"ad":"a","m":"Üç katmanı çakıştırarak yorumlama","l":[[8,"C mahallesini belirlemiş ve üç katmana dayandırmış (yüksek nüfus yoğunluğu, sağlık merkezi yok, toplu taşıma hattı ulaşmıyor)."],[5,"C mahallesini belirlemiş; gerekçede yalnızca bir ya da iki katmanı kullanmış."],[2,"C mahallesini belirlemiş ancak gerekçe yazmamış."],[0,"Yanlış mahalle yazmış ya da yanıtsız bırakmış."]]},{"ad":"b","m":"Amaçlar ve web tabanlı/bilgisayar tabanlı CBS karşılaştırması","l":[[12,"İki amacı (hizmet eşitsizliğini görme, yer seçimi, afet ulaşım planı gibi), bir üstünlüğü (kurulum gerektirmez, her yerden erişim, güncel veri, çok kullanıcı) ve bir sınırlılığı (genel ağ şart, daha sınırlı analiz) doğru yazmış."],[8,"Dört öğeden üçünü doğru yazmış."],[4,"Dört öğeden yalnızca birini ya da ikisini doğru yazmış."],[0,"Doğru öğe yok; ifadeler CBS ile ilgisiz."]]}]},
   {c:"3.1",
    p:10,
    zor:"kolay",
    tur:"kisa",
    k:"Aşağıdaki şemada su döngüsünün bazı olayları 1'den 5'e kadar numaralanmıştır.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Su döngüsü şeması: denizden yükselen oklar, bulut, yağış, dağdan denize inen akarsu ve toprağa inen oklar; olaylar 1'den 5'e numaralanmış\"><rect x=\"8\" y=\"8\" width=\"584\" height=\"324\" class=\"s-kara\"/><circle cx=\"60\" cy=\"54\" r=\"22\" class=\"s-kirmizi\" fill-opacity=\".55\"/><text x=\"60\" y=\"92\" class=\"s-soluk\" text-anchor=\"middle\">Güneş</text><rect x=\"8\" y=\"236\" width=\"238\" height=\"96\" class=\"s-su\" fill-opacity=\".45\"/><text x=\"30\" y=\"312\" class=\"s-yazi\">Deniz</text><polygon points=\"246,236 320,150 380,196 452,116 520,200 592,236 592,332 246,332\" class=\"s-gri\" fill-opacity=\".5\"/><text x=\"420\" y=\"224\" class=\"s-soluk\" text-anchor=\"middle\">Dağ</text><polygon points=\"246,296 592,290 592,326 246,326\" class=\"s-su\" fill-opacity=\".4\"/><text x=\"420\" y=\"316\" class=\"s-yazi\" text-anchor=\"middle\">Yer altı suyu</text><path d=\"M 444,130 C 420,166 346,160 310,200 S 262,226 246,238\" class=\"s-su-cizgi\"/><ellipse cx=\"388\" cy=\"70\" rx=\"36\" ry=\"16\" class=\"s-gri\" fill-opacity=\".9\"/><ellipse cx=\"420\" cy=\"58\" rx=\"30\" ry=\"18\" class=\"s-gri\" fill-opacity=\".9\"/><ellipse cx=\"448\" cy=\"72\" rx=\"32\" ry=\"15\" class=\"s-gri\" fill-opacity=\".9\"/><line x1=\"392\" y1=\"92\" x2=\"386\" y2=\"112\" class=\"s-su-cizgi\" style=\"stroke-width:1.6\"/><line x1=\"410\" y1=\"92\" x2=\"404\" y2=\"112\" class=\"s-su-cizgi\" style=\"stroke-width:1.6\"/><line x1=\"428\" y1=\"92\" x2=\"422\" y2=\"112\" class=\"s-su-cizgi\" style=\"stroke-width:1.6\"/><line x1=\"446\" y1=\"92\" x2=\"440\" y2=\"112\" class=\"s-su-cizgi\" style=\"stroke-width:1.6\"/><line x1=\"100\" y1=\"232\" x2=\"100\" y2=\"148\" class=\"s-kalin\"/><polygon points=\"100,140 95.5,148 104.5,148\" class=\"s-yazi\"/><line x1=\"176\" y1=\"232\" x2=\"176\" y2=\"158\" class=\"s-kalin\"/><polygon points=\"176,150 171.5,158 180.5,158\" class=\"s-yazi\"/><line x1=\"520\" y1=\"224\" x2=\"520\" y2=\"274\" class=\"s-kalin\"/><polygon points=\"520,282 524.5,274 515.5,274\" class=\"s-yazi\"/><line x1=\"560\" y1=\"230\" x2=\"560\" y2=\"274\" class=\"s-kalin\"/><polygon points=\"560,282 564.5,274 555.5,274\" class=\"s-yazi\"/><circle cx=\"138\" cy=\"186\" r=\"11\" class=\"s-kara\"/><text x=\"138\" y=\"190.5\" class=\"s-yazi\" text-anchor=\"middle\">1</text><circle cx=\"336\" cy=\"58\" r=\"11\" class=\"s-kara\"/><text x=\"336\" y=\"62.5\" class=\"s-yazi\" text-anchor=\"middle\">2</text><circle cx=\"368\" cy=\"106\" r=\"11\" class=\"s-kara\"/><text x=\"368\" y=\"110.5\" class=\"s-yazi\" text-anchor=\"middle\">3</text><circle cx=\"340\" cy=\"176\" r=\"11\" class=\"s-kara\"/><text x=\"340\" y=\"180.5\" class=\"s-yazi\" text-anchor=\"middle\">4</text><circle cx=\"538\" cy=\"262\" r=\"11\" class=\"s-kara\"/><text x=\"538\" y=\"266.5\" class=\"s-yazi\" text-anchor=\"middle\">5</text></svg><figcaption>Su döngüsü şeması (ölçeksiz).</figcaption></figure>",
    q:"Şemada numaralanmış olayları adlandırınız.",
    c2:"1: buharlaşma, 2: yoğuşma, 3: yağış, 4: yüzeysel akış, 5: sızma (yer altı suyuna karışma).",
    o:[{"m":"Görselden su döngüsü olaylarını adlandırma","l":[[10,"Beş olayı da doğru adlandırmış."],[6,"Üç ya da dört olayı doğru adlandırmış."],[3,"İki olayı doğru adlandırmış."],[0,"Bir olayı ya da hiçbirini doğru adlandırmamış."]]}]},
   {c:"3.1",
    p:15,
    zor:"orta",
    tur:"acik",
    k:"Aşağıdaki şematik haritada Türkiye'deki beş göl numaralandırılmıştır.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Türkiye'nin şematik haritası: 1 Nemrut Krater Gölü, 2 Tuz Gölü, 3 Abant Gölü, 4 Beyşehir Gölü, 5 Atatürk Baraj Gölü işaretli\"><rect x=\"8\" y=\"10\" width=\"584\" height=\"292\" class=\"s-su\" fill-opacity=\".2\"/><polygon points=\"32.8,56.3 55.6,45.3 86.8,47.2 118.1,74.6 157.9,78.3 194.8,65.5 228.9,47.2 263,45.3 288.6,43.5 311.4,58.1 325.6,70.9 354,78.3 382.4,83.8 419.4,81.9 442.1,81.9 470.5,63.6 498.9,65.5 524.5,78.3 533,100.2 547.2,118.5 564.3,129.5 552.9,142.3 541.6,158.8 550.1,180.7 544.4,195.4 558.6,221 527.4,217.3 496.1,224.7 473.4,224.7 450.6,228.3 422.2,232 393.8,233.8 371,233.8 348.3,241.1 331.3,255.8 314.2,266.8 312.8,248.5 319.9,235.6 300,244.8 274.4,237.5 254.5,257.6 223.3,263.1 200.5,246.6 163.6,232 152.2,253.9 129.5,257.6 118.1,241.1 95.4,233.8 69.8,228.3 66.9,206.4 49.9,188.1 38.5,180.7 58.4,173.4 51.3,164.3 49.9,144.1 31.4,136.8 35.7,116.7 49.9,103.9 35.7,96.6 32.8,74.6\" class=\"s-kara\"/><polygon points=\"49.9,103.9 72.6,83.8 112.4,81.9 140.8,90 123.8,103.9 92.5,105.7 64.1,104.6\" class=\"s-su\" fill-opacity=\".5\"/><text x=\"300\" y=\"24\" class=\"s-soluk\" text-anchor=\"middle\">Karadeniz</text><text x=\"330\" y=\"292\" class=\"s-soluk\" text-anchor=\"middle\">Akdeniz</text><text x=\"40\" y=\"220\" class=\"s-soluk\">Ege</text><ellipse cx=\"491.8\" cy=\"167.9\" rx=\"6\" ry=\"5\" class=\"s-su\"/><ellipse cx=\"491.8\" cy=\"167.9\" rx=\"6\" ry=\"5\" class=\"s-su-cizgi\" style=\"stroke-width:1.5\"/><circle cx=\"474.8\" cy=\"166.9\" r=\"8\" class=\"s-kara\"/><text x=\"474.8\" y=\"171.4\" class=\"s-yazi\" text-anchor=\"middle\">1</text><text x=\"463.8\" y=\"171.4\" class=\"s-soluk\" text-anchor=\"end\">Nemrut Krater Gölü</text><ellipse cx=\"240.3\" cy=\"164.3\" rx=\"11\" ry=\"7\" class=\"s-su\"/><ellipse cx=\"240.3\" cy=\"164.3\" rx=\"11\" ry=\"7\" class=\"s-su-cizgi\" style=\"stroke-width:1.5\"/><circle cx=\"262.3\" cy=\"163.3\" r=\"8\" class=\"s-kara\"/><text x=\"262.3\" y=\"167.8\" class=\"s-yazi\" text-anchor=\"middle\">2</text><text x=\"273.3\" y=\"167.8\" class=\"s-soluk\" text-anchor=\"start\">Tuz Gölü</text><ellipse cx=\"180.1\" cy=\"96.6\" rx=\"5\" ry=\"4\" class=\"s-su\"/><ellipse cx=\"180.1\" cy=\"96.6\" rx=\"5\" ry=\"4\" class=\"s-su-cizgi\" style=\"stroke-width:1.5\"/><circle cx=\"196.1\" cy=\"95.6\" r=\"8\" class=\"s-kara\"/><text x=\"196.1\" y=\"100.1\" class=\"s-yazi\" text-anchor=\"middle\">3</text><text x=\"207.1\" y=\"100.1\" class=\"s-soluk\" text-anchor=\"start\">Abant Gölü</text><ellipse cx=\"186.3\" cy=\"200.9\" rx=\"8\" ry=\"5\" class=\"s-su\"/><ellipse cx=\"186.3\" cy=\"200.9\" rx=\"8\" ry=\"5\" class=\"s-su-cizgi\" style=\"stroke-width:1.5\"/><circle cx=\"205.3\" cy=\"199.9\" r=\"8\" class=\"s-kara\"/><text x=\"205.3\" y=\"204.4\" class=\"s-yazi\" text-anchor=\"middle\">4</text><text x=\"216.3\" y=\"204.4\" class=\"s-soluk\" text-anchor=\"start\">Beyşehir Gölü</text><ellipse cx=\"385.3\" cy=\"210\" rx=\"9\" ry=\"4\" class=\"s-su\"/><ellipse cx=\"385.3\" cy=\"210\" rx=\"9\" ry=\"4\" class=\"s-su-cizgi\" style=\"stroke-width:1.5\"/><circle cx=\"405.3\" cy=\"209\" r=\"8\" class=\"s-kara\"/><text x=\"405.3\" y=\"213.5\" class=\"s-yazi\" text-anchor=\"middle\">5</text><text x=\"416.3\" y=\"213.5\" class=\"s-soluk\" text-anchor=\"start\">Atatürk Baraj Gölü</text><line x1=\"560\" y1=\"70\" x2=\"560\" y2=\"52\" class=\"s-kalin\"/><polygon points=\"560,44 555.5,52 564.5,52\" class=\"s-yazi\"/><text x=\"560\" y=\"86\" class=\"s-yazi\" text-anchor=\"middle\">K</text><rect x=\"10\" y=\"312\" width=\"18\" height=\"12\" class=\"s-su\"/><text x=\"34\" y=\"322\" class=\"s-soluk\">Göl</text><text x=\"590\" y=\"322\" class=\"s-soluk\" text-anchor=\"end\">Şematik harita, ölçeksiz; göllerin boyutları gerçek değildir</text></svg><figcaption>Türkiye'de seçilmiş beş göl (şematik harita, ölçeksiz).</figcaption></figure>",
    q:"a) 1, 2, 3 ve 5 numaralı göllerin oluşum biçimlerini (tektonik, volkanik, heyelan seti, yapay set) sınıflandırınız.<br>b) 2 numaralı gölün tuzlu, 4 numaralı gölün ise tatlı olmasını gideğen (göl ayağı) kavramından yararlanarak karşılaştırınız.",
    c2:"a) 1 Nemrut Krater Gölü volkanik, 2 Tuz Gölü tektonik, 3 Abant Gölü heyelan seti, 5 Atatürk Baraj Gölü ise yapay set (baraj) gölüdür. b) Gideğen, göl çanağının fazla suyunu dışarı taşıyan akarsudur. Tuz Gölü'nün gideğeni yoktur; sudan çok buharlaşma olur ve tuzlar çanakta birikir, bu yüzden göl tuzludur. Beyşehir Gölü'nün gideğeni vardır; fazla su ve içindeki tuzlar dışarı taşındığı için göl tatlı kalır.",
    o:[{"ad":"a","m":"Göllerin oluşum biçimini sınıflandırma","l":[[7,"Dört gölü de doğru sınıflandırmış (volkanik, tektonik, heyelan seti, yapay set)."],[4,"Üç gölü doğru sınıflandırmış."],[2,"İki gölü doğru sınıflandırmış."],[0,"Bir gölü ya da hiçbirini doğru sınıflandırmamış."]]},{"ad":"b","m":"Gideğen kavramıyla su özelliğini karşılaştırma","l":[[8,"Gideğeni doğru kullanarak karşılaştırmış (Tuz Gölü'nde gideğen yok, buharlaşmayla tuz birikir, tuzlu; Beyşehir Gölü'nde gideğen var, fazla su ve tuz dışarı taşınır, tatlı)."],[5,"Gideğeni doğru tanımlamış ancak iki gölü ilişkilendirmede eksik bırakmış."],[2,"Yalnızca birinin tuzlu, diğerinin tatlı olduğunu belirtmiş."],[0,"Gideğen kavramını yanlış kullanmış ya da yanıtsız bırakmış."]]}]},
   {c:"3.2",
    p:25,
    zor:"zor",
    tur:"acik",
    k:"Güneydoğu Anadolu Projesi (GAP) kapsamında Fırat ve Dicle havzasında baraj, hidroelektrik santral ve sulama yatırımları yapılmıştır. Grafiklerde bölgeye ait iki gösterge (örnek veri) verilmiştir.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"İki sütun grafik: sulanabilir arazi 273 bin hektardan 675 bin hektara, ihracat 3,3 milyar dolardan 12,3 milyar dolara çıkmıştır\"><text x=\"14\" y=\"24\" class=\"s-yazi\">Sulanabilir arazi (bin ha)</text><line x1=\"44\" y1=\"262\" x2=\"264\" y2=\"262\" class=\"s-kalin\"/><text x=\"38\" y=\"266\" class=\"s-soluk\" text-anchor=\"end\">0</text><line x1=\"44\" y1=\"212\" x2=\"264\" y2=\"212\" class=\"s-cizgi\"/><text x=\"38\" y=\"216\" class=\"s-soluk\" text-anchor=\"end\">200</text><line x1=\"44\" y1=\"162\" x2=\"264\" y2=\"162\" class=\"s-cizgi\"/><text x=\"38\" y=\"166\" class=\"s-soluk\" text-anchor=\"end\">400</text><line x1=\"44\" y1=\"112\" x2=\"264\" y2=\"112\" class=\"s-cizgi\"/><text x=\"38\" y=\"116\" class=\"s-soluk\" text-anchor=\"end\">600</text><line x1=\"44\" y1=\"62\" x2=\"264\" y2=\"62\" class=\"s-cizgi\"/><text x=\"38\" y=\"66\" class=\"s-soluk\" text-anchor=\"end\">800</text><line x1=\"44\" y1=\"58\" x2=\"44\" y2=\"262\" class=\"s-kalin\"/><rect x=\"76\" y=\"193.8\" width=\"54\" height=\"68.3\" class=\"s-cubuk\"/><rect x=\"164\" y=\"93.3\" width=\"54\" height=\"168.8\" class=\"s-cubuk2\"/><text x=\"103\" y=\"187.8\" class=\"s-yazi\" text-anchor=\"middle\">273</text><text x=\"191\" y=\"87.3\" class=\"s-yazi\" text-anchor=\"middle\">675</text><text x=\"103\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2007</text><text x=\"191\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2024</text><text x=\"314\" y=\"24\" class=\"s-yazi\">İhracat (milyar dolar)</text><line x1=\"344\" y1=\"262\" x2=\"564\" y2=\"262\" class=\"s-kalin\"/><text x=\"338\" y=\"266\" class=\"s-soluk\" text-anchor=\"end\">0</text><line x1=\"344\" y1=\"195.3\" x2=\"564\" y2=\"195.3\" class=\"s-cizgi\"/><text x=\"338\" y=\"199.3\" class=\"s-soluk\" text-anchor=\"end\">5</text><line x1=\"344\" y1=\"128.7\" x2=\"564\" y2=\"128.7\" class=\"s-cizgi\"/><text x=\"338\" y=\"132.7\" class=\"s-soluk\" text-anchor=\"end\">10</text><line x1=\"344\" y1=\"62\" x2=\"564\" y2=\"62\" class=\"s-cizgi\"/><text x=\"338\" y=\"66\" class=\"s-soluk\" text-anchor=\"end\">15</text><line x1=\"344\" y1=\"58\" x2=\"344\" y2=\"262\" class=\"s-kalin\"/><rect x=\"376\" y=\"218\" width=\"54\" height=\"44\" class=\"s-cubuk\"/><rect x=\"464\" y=\"98\" width=\"54\" height=\"164\" class=\"s-cubuk2\"/><text x=\"403\" y=\"212\" class=\"s-yazi\" text-anchor=\"middle\">3,3</text><text x=\"491\" y=\"92\" class=\"s-yazi\" text-anchor=\"middle\">12,3</text><text x=\"403\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2007</text><text x=\"491\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2024</text><text x=\"300\" y=\"322\" class=\"s-soluk\" text-anchor=\"middle\">GAP bölgesi · örnek veri</text></svg><figcaption>GAP bölgesinde 2007 ve 2024 yıllarına ait iki gösterge (örnek veri).</figcaption></figure>",
    q:"a) Grafiklerdeki iki veriyi birlikte yorumlayarak GAP'ın bölgenin ekonomisi üzerindeki etkisini neden-sonuç ilişkisi kurarak açıklayınız.<br>b) GAP'ın (baraj ve sulama yatırımlarının) bir çevresel ve bir sosyokültürel etkisini yazınız; bu etkileri azaltmaya yönelik iki öneri geliştiriniz.",
    c2:"a) Sulanabilir arazi 2007'de yaklaşık 273 bin hektardan 2024'te yaklaşık 675 bin hektara çıkmıştır; sulama arttıkça sulu tarım yaygınlaşmış, verim ve ürün çeşidi artmıştır. Aynı dönemde ihracat 3,3 milyar dolardan 12,3 milyar dolara yükselmiştir; yani sulamayla artan üretim ihracata ve bölgenin gelirine yansımıştır. b) Çevresel etki: baraj gölleri arazi örtüsünü değiştirir, bazı tarım ve yerleşim alanları su altında kalır; yanlış sulama tuzlanmaya yol açabilir. Sosyokültürel etki: su altında kalan yerleşimlerdeki insanlar yer değiştirir, buna karşılık istihdam ve yaşam kalitesi artabilir. Öneri: modern sulama (damlama gibi) ve ürün deseni planlaması ile suyu verimli kullanmak; su altında kalacak yerleşim ve kültürel mirasın önceden belgelenip korunmasını sağlamak.",
    o:[{"ad":"a","m":"Grafik verilerinden ekonomik etkiye çıkarım","l":[[10,"İki veriyi de değerleriyle okumuş (273 bin ha'dan 675 bin ha'ya; 3,3 milyar dolardan 12,3 milyar dolara) ve aralarında neden-sonuç ilişkisi kurmuş (sulama, sulu tarım, üretim ve ihracat artışı)."],[6,"İki veriyi yorumlamış ancak aralarında neden-sonuç ilişkisi kurmamış (ya da yalnızca bir veriyi nedensel olarak yorumlamış)."],[3,"Verileri yalnızca okumuş ('arttı' demiş); yorum yok."],[0,"Grafikle ilgisiz ya da yanlış yorum yazmış."]]},{"ad":"b","m":"Çevresel ve sosyokültürel etkiyi sorgulama, öneri geliştirme","l":[[15,"Bir çevresel etkiyi (arazi örtüsü değişimi, su altında kalan alanlar, tuzlanma gibi) ve bir sosyokültürel etkiyi (yer değiştirme ve göç, istihdam ve yaşam kalitesi, kültürel miras gibi) gerekçeleriyle yazmış ve bu etkileri azaltmaya yönelik iki uygulanabilir öneri geliştirmiş."],[10,"İki etkiyi doğru yazmış; öneri sayısı ya da gerekçesi eksik (tek öneri ya da gerekçesiz öneriler)."],[5,"Yalnızca bir etkiyi doğru yazmış ya da yalnızca önerileri yazmış; etkiler eksik."],[0,"Etki ve öneriler GAP ile ilgisiz ya da yanıtsız."]]}]}
 ]},
 {ad:"Deneme 3",s:[
   {c:"1.1",
    p:10,
    zor:"kolay",
    tur:"kisa",
    k:"Elif ile Deniz'in mahallelerindeki taşkın sorunu hakkındaki konuşması (örnek diyalog):<br><b>Elif:</b> Dere yatağındaki taşkın sorununu çözmek tamamen mühendislerin işi. Coğrafyanın bu konuyla ne ilgisi var?<br><b>Deniz:</b> Bence coğrafya da katkı sağlıyor, çünkü …",
    q:"Deniz'in cümlesini tamamlayarak coğrafyanın taşkın sorununun çözümüne bir katkısını nedeniyle açıklayınız.",
    c2:"… çünkü coğrafya, derenin çevresindeki yer şekillerini, yağış durumunu ve yapılaşmayı haritalayarak taşkına açık alanları belirler. Böylece hangi bölgelerde yapılaşmanın sınırlanması ve hangi alanlarda önlem alınması gerektiği ortaya çıkar; mühendisler de bu bilgiye dayanarak yapıları planlar.",
    o:[{"m":"Coğrafyanın katkısını neden-sonuç ilişkisiyle yazma","l":[[10,"Mekânsal bir katkıyı (taşkına açık alanları haritalama, risk belirleme, yer şekli-yağış-yapılaşma ilişkisini inceleme, uygun yerleşim alanı seçimine veri sağlama) neden-sonuç ilişkisi kurarak açıklamış."],[6,"Katkıyı doğru yazmış ancak nedenini ya da sonucunu açıklamamış."],[3,"Genel bir ifade yazmış (coğrafya yardımcı olur, bilgi verir gibi); mekânsal katkı belirtmemiş."],[0,"Elif'in görüşünü tekrar etmiş ya da konuyla ilgisiz yazmış."]]}]},
   {c:"1.1",
    p:15,
    zor:"orta",
    tur:"acik",
    k:"Bir kentte yağışlı günlerde yollar sık sık su altında kalmakta; yetkililer son yirmi yılda kentin hızla büyüdüğünü belirtmektedir. Grafikte kentte yapılaşmış alan ve yılda yaşanan su baskını sayısı verilmiştir.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Sütun ve çizgi grafik: 2000'de 20 kilometrekare yapılaşmış alan ve 1 su baskını, 2020'de 72 kilometrekare ve 8 su baskını\"><text x=\"10\" y=\"24\" class=\"s-yazi\">Yapılaşmış alan ve yıllık su baskını sayısı · örnek veri</text><line x1=\"64\" y1=\"262\" x2=\"536\" y2=\"262\" class=\"s-kalin\"/><text x=\"56\" y=\"266\" class=\"s-soluk\" text-anchor=\"end\">0</text><line x1=\"64\" y1=\"209.5\" x2=\"536\" y2=\"209.5\" class=\"s-cizgi\"/><text x=\"56\" y=\"213.5\" class=\"s-soluk\" text-anchor=\"end\">20</text><line x1=\"64\" y1=\"157\" x2=\"536\" y2=\"157\" class=\"s-cizgi\"/><text x=\"56\" y=\"161\" class=\"s-soluk\" text-anchor=\"end\">40</text><line x1=\"64\" y1=\"104.5\" x2=\"536\" y2=\"104.5\" class=\"s-cizgi\"/><text x=\"56\" y=\"108.5\" class=\"s-soluk\" text-anchor=\"end\">60</text><line x1=\"64\" y1=\"52\" x2=\"536\" y2=\"52\" class=\"s-cizgi\"/><text x=\"56\" y=\"56\" class=\"s-soluk\" text-anchor=\"end\">80</text><text x=\"546\" y=\"266\" class=\"s-soluk\">0</text><text x=\"546\" y=\"224\" class=\"s-soluk\">2</text><text x=\"546\" y=\"182\" class=\"s-soluk\">4</text><text x=\"546\" y=\"140\" class=\"s-soluk\">6</text><text x=\"546\" y=\"98\" class=\"s-soluk\">8</text><text x=\"546\" y=\"56\" class=\"s-soluk\">10</text><line x1=\"64\" y1=\"52\" x2=\"64\" y2=\"262\" class=\"s-kalin\"/><line x1=\"536\" y1=\"52\" x2=\"536\" y2=\"262\" class=\"s-cizgi\"/><text x=\"64\" y=\"44\" class=\"s-soluk\" text-anchor=\"middle\">km²</text><text x=\"546\" y=\"44\" class=\"s-soluk\">olay</text><rect x=\"96\" y=\"209.5\" width=\"48\" height=\"52.5\" class=\"s-cubuk\"/><text x=\"120\" y=\"203.5\" class=\"s-soluk\" text-anchor=\"middle\">20</text><text x=\"120\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2000</text><rect x=\"196\" y=\"188.5\" width=\"48\" height=\"73.5\" class=\"s-cubuk\"/><text x=\"220\" y=\"182.5\" class=\"s-soluk\" text-anchor=\"middle\">28</text><text x=\"220\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2005</text><rect x=\"296\" y=\"154.4\" width=\"48\" height=\"107.6\" class=\"s-cubuk\"/><text x=\"320\" y=\"148.4\" class=\"s-soluk\" text-anchor=\"middle\">41</text><text x=\"320\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2010</text><rect x=\"396\" y=\"117.6\" width=\"48\" height=\"144.4\" class=\"s-cubuk\"/><text x=\"420\" y=\"111.6\" class=\"s-soluk\" text-anchor=\"middle\">55</text><text x=\"420\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2015</text><rect x=\"496\" y=\"73\" width=\"48\" height=\"189\" class=\"s-cubuk\"/><text x=\"520\" y=\"67\" class=\"s-soluk\" text-anchor=\"middle\">72</text><text x=\"520\" y=\"282\" class=\"s-yazi\" text-anchor=\"middle\">2020</text><polyline points=\"120,241 220,220 320,199 420,157 520,94\" class=\"s-kalin\"/><circle cx=\"120\" cy=\"241\" r=\"4.5\" class=\"s-kirmizi\"/><rect x=\"127\" y=\"220\" width=\"18\" height=\"16\" class=\"s-kara\" rx=\"3\"/><text x=\"136\" y=\"232\" class=\"s-yazi\" text-anchor=\"middle\">1</text><circle cx=\"220\" cy=\"220\" r=\"4.5\" class=\"s-kirmizi\"/><rect x=\"227\" y=\"199\" width=\"18\" height=\"16\" class=\"s-kara\" rx=\"3\"/><text x=\"236\" y=\"211\" class=\"s-yazi\" text-anchor=\"middle\">2</text><circle cx=\"320\" cy=\"199\" r=\"4.5\" class=\"s-kirmizi\"/><rect x=\"327\" y=\"178\" width=\"18\" height=\"16\" class=\"s-kara\" rx=\"3\"/><text x=\"336\" y=\"190\" class=\"s-yazi\" text-anchor=\"middle\">3</text><circle cx=\"420\" cy=\"157\" r=\"4.5\" class=\"s-kirmizi\"/><rect x=\"427\" y=\"136\" width=\"18\" height=\"16\" class=\"s-kara\" rx=\"3\"/><text x=\"436\" y=\"148\" class=\"s-yazi\" text-anchor=\"middle\">5</text><circle cx=\"520\" cy=\"94\" r=\"4.5\" class=\"s-kirmizi\"/><rect x=\"527\" y=\"73\" width=\"18\" height=\"16\" class=\"s-kara\" rx=\"3\"/><text x=\"536\" y=\"85\" class=\"s-yazi\" text-anchor=\"middle\">8</text><rect x=\"110\" y=\"304\" width=\"14\" height=\"14\" class=\"s-cubuk\"/><text x=\"130\" y=\"316\" class=\"s-yazi\">Yapılaşmış alan (km², sol eksen)</text><line x1=\"340\" y1=\"311\" x2=\"368\" y2=\"311\" class=\"s-kalin\"/><circle cx=\"354\" cy=\"311\" r=\"4.5\" class=\"s-kirmizi\"/><text x=\"376\" y=\"316\" class=\"s-yazi\">Su baskını sayısı (sağ eksen)</text></svg><figcaption>Bir kentte yapılaşmış alan (sütun) ve yılda yaşanan su baskını sayısı (çizgi); örnek veri.</figcaption></figure>",
    q:"a) Grafikten çıkarımda bulunarak yapılaşmış alan ile su baskını sayısı arasındaki ilişkiyi neden-sonuç bağıyla açıklayınız.<br>b) Kent planlamasında coğrafyanın katkısıyla uygulanabilecek iki öneri geliştiriniz; her önerinin hangi coğrafi veriye dayanacağını yazınız.",
    c2:"a) 2000'den 2020'ye yapılaşmış alan 20 km²'den 72 km²'ye çıkarken yıllık su baskını sayısı 1'den 8'e yükselmiştir. Yapılaşma arttıkça asfalt ve beton gibi geçirimsiz yüzeyler çoğalır, yağmur suyu toprağa sızamaz, yüzeyde hızla akarak yolları ve alçak yerleri basar. b) Birinci öneri: yağış, eğim ve akarsu verileriyle su baskını risk haritası hazırlayıp riskli alanlarda yapılaşmayı sınırlamak. İkinci öneri: yeşil alan ve geçirimli yüzeylerin dağılışını haritalayarak parklar ve su tutan alanlar planlamak.",
    o:[{"ad":"a","m":"Grafikten çıkarım ve neden-sonuç","l":[[7,"Verilerle ilişkiyi belirtmiş (20'den 72 km²'ye, 1'den 8'e) ve nedenini açıklamış (geçirimsiz yüzey arttıkça sızma azalır, yüzey akışı ve su baskını artar)."],[4,"İlişkiyi verilerle belirtmiş ancak nedenini açıklamamış."],[2,"Yalnızca iki değişkenin de arttığını söylemiş."],[0,"Grafikle ilgisiz ya da yanlış ilişki kurmuş."]]},{"ad":"b","m":"Coğrafi veriye dayalı planlama önerisi geliştirme","l":[[8,"İki öneri geliştirmiş ve her birinin dayanacağı coğrafi veriyi doğru yazmış (risk haritası: yağış, eğim, akarsu verisi; yeşil alan ve geçirimli yüzey haritası gibi)."],[5,"İki öneri yazmış ancak veri dayanağı eksik ya da yalnızca bir öneri veri dayanağıyla yazılmış."],[2,"Yalnızca genel bir öneri yazmış (kent düzenlenmeli gibi)."],[0,"Öneriler soruna ve coğrafyaya uygun değil."]]}]},
   {c:"2.1",
    p:20,
    zor:"zor",
    tur:"acik",
    k:"Bir ilçede olası afetlere hazırlık amacıyla geçici barınma alanı belirlenecektir. Afet yönetimi birimi, web tabanlı CBS uygulamasında dört aday alan (1-4) işaretlemiştir. Alanın güvenli, ana yola ve yerleşime yakın olması istenmektedir. Ekran görüntüsünde dört katman açıktır.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Web tabanlı CBS ekranı: taşkın riski, heyelan riski, ana yollar ve yerleşim alanları katmanları açık; dört aday alan işaretli\"><rect x=\"4\" y=\"4\" width=\"592\" height=\"332\" class=\"s-kara\" rx=\"8\"/><rect x=\"4\" y=\"4\" width=\"592\" height=\"28\" class=\"s-kara\" rx=\"8\"/><circle cx=\"20\" cy=\"18\" r=\"4\" class=\"s-gri\"/><circle cx=\"33\" cy=\"18\" r=\"4\" class=\"s-gri\"/><circle cx=\"46\" cy=\"18\" r=\"4\" class=\"s-gri\"/><rect x=\"64\" y=\"10\" width=\"330\" height=\"16\" class=\"s-kara\" rx=\"8\"/><text x=\"76\" y=\"22\" class=\"s-soluk\">afet-harita (örnek web uygulaması)</text><line x1=\"4\" y1=\"32\" x2=\"596\" y2=\"32\" class=\"s-cizgi\"/><line x1=\"172\" y1=\"32\" x2=\"172\" y2=\"336\" class=\"s-cizgi\"/><text x=\"14\" y=\"52\" class=\"s-yazi\">Katmanlar</text><rect x=\"14\" y=\"62\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,69 19.5,72 24.5,65.5\" class=\"s-kalin\"/><text x=\"33\" y=\"73\" class=\"s-yazi\">Taşkın riski</text><rect x=\"14\" y=\"87\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,94 19.5,97 24.5,90.5\" class=\"s-kalin\"/><text x=\"33\" y=\"98\" class=\"s-yazi\">Heyelan riski</text><rect x=\"14\" y=\"112\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,119 19.5,122 24.5,115.5\" class=\"s-kalin\"/><text x=\"33\" y=\"123\" class=\"s-yazi\">Ana yollar</text><rect x=\"14\" y=\"137\" width=\"13\" height=\"13\" class=\"s-kara\" rx=\"2\"/><polyline points=\"16.5,144 19.5,147 24.5,140.5\" class=\"s-kalin\"/><text x=\"33\" y=\"148\" class=\"s-yazi\">Yerleşim alanları</text><line x1=\"10\" y1=\"170\" x2=\"166\" y2=\"170\" class=\"s-cizgi\"/><text x=\"14\" y=\"186\" class=\"s-yazi\">Lejant</text><rect x=\"14\" y=\"191\" width=\"16\" height=\"11\" class=\"s-kirmizi\" fill-opacity=\"0.3\"/><text x=\"36\" y=\"200\" class=\"s-soluk\">Taşkın riski alanı</text><rect x=\"14\" y=\"213\" width=\"16\" height=\"11\" class=\"s-mor\" fill-opacity=\"0.4\"/><text x=\"36\" y=\"222\" class=\"s-soluk\">Heyelan riski alanı</text><line x1=\"14\" y1=\"241\" x2=\"40\" y2=\"241\" class=\"s-kalin\" style=\"stroke-width:3.5\"/><text x=\"46\" y=\"244\" class=\"s-soluk\">Ana yol</text><rect x=\"14\" y=\"257\" width=\"16\" height=\"11\" class=\"s-gri\" fill-opacity=\"0.75\"/><text x=\"36\" y=\"266\" class=\"s-soluk\">Yerleşim alanı</text><rect x=\"14\" y=\"278\" width=\"14\" height=\"14\" class=\"s-kara\" style=\"stroke-width:2\"/><text x=\"36\" y=\"288\" class=\"s-soluk\">Aday alan (1-4)</text><rect x=\"178\" y=\"38\" width=\"412\" height=\"292\" class=\"s-kara\"/><rect x=\"332\" y=\"150\" width=\"62\" height=\"38\" class=\"s-gri\" fill-opacity=\".75\"/><rect x=\"470\" y=\"176\" width=\"76\" height=\"40\" class=\"s-gri\" fill-opacity=\".75\"/><polygon points=\"380,52 482,52 524,112 440,142 388,100\" class=\"s-mor\" fill-opacity=\".4\"/><polygon points=\"182,210 300,194 400,228 587,214 587,258 400,272 300,238 182,254\" class=\"s-kirmizi\" fill-opacity=\".3\"/><polyline points=\"182,232 300,216 400,250 587,236\" class=\"s-su-cizgi\"/><polyline points=\"182,140 310,130 430,150 587,140\" class=\"s-kalin\" style=\"stroke-width:3.5\"/><rect x=\"230\" y=\"216\" width=\"20\" height=\"20\" class=\"s-kara\" style=\"stroke-width:2\"/><text x=\"240\" y=\"231\" class=\"s-yazi\" text-anchor=\"middle\">1</text><rect x=\"440\" y=\"86\" width=\"20\" height=\"20\" class=\"s-kara\" style=\"stroke-width:2\"/><text x=\"450\" y=\"101\" class=\"s-yazi\" text-anchor=\"middle\">2</text><rect x=\"290\" y=\"162\" width=\"20\" height=\"20\" class=\"s-kara\" style=\"stroke-width:2\"/><text x=\"300\" y=\"177\" class=\"s-yazi\" text-anchor=\"middle\">3</text><rect x=\"204\" y=\"68\" width=\"20\" height=\"20\" class=\"s-kara\" style=\"stroke-width:2\"/><text x=\"214\" y=\"83\" class=\"s-yazi\" text-anchor=\"middle\">4</text><text x=\"584\" y=\"322\" class=\"s-soluk\" text-anchor=\"end\">Şematik ekran, ölçeksiz</text></svg><figcaption>Web tabanlı CBS ekranı. Şematik, ölçeksiz; aday alanlar 1–4, örnek veri.</figcaption></figure>",
    q:"a) Katmanları kullanarak aday alanlardan uygun olanı seçiniz; diğer alanları katmanlara dayanarak neden elediğinizi yazınız.<br>b) Seçim sürecinde yapılan çakıştırma ve sorgulama işlemlerini birer cümleyle açıklayınız; bu uygulamanın afet yönetiminde kullanılabileceği iki amaç yazınız.",
    c2:"a) 3 numaralı alan uygundur: taşkın ve heyelan riski alanlarının dışındadır, ana yola ve yerleşime yakındır. 1 numaralı alan taşkın riski alanında, 2 numaralı alan heyelan riski alanında olduğu için güvenli değildir. 4 numaralı alan iki riskin de dışındadır ancak ana yola ve yerleşime uzaktır; ulaşım ve yardım ulaştırma zor olur. b) Çakıştırma: taşkın riski, heyelan riski, yol ve yerleşim katmanlarını üst üste bindirip aday alanları aynı ekranda görmektir. Sorgulama: bu katmanlar içinden yalnızca risk dışında kalan ve yola yakın alanları ölçüte göre seçmektir. Amaçlar: afet risk haritası çıkarıp riskli mahalleleri belirlemek, tahliye yolu ve toplanma alanı planlamak, afet sonrası hasar ve yardım dağıtımını izlemek.",
    o:[{"ad":"a","m":"Katmanları kullanarak yer seçimi ve eleme gerekçesi","l":[[10,"3 numaralı alanı seçmiş; 1 ve 2'yi risk katmanlarıyla, 4'ü ana yola ve yerleşime uzaklıkla elemiş (üç gerekçe)."],[7,"3 numaralı alanı seçmiş; elemelerden ikisini katmanlara dayanarak gerekçelendirmiş."],[3,"3 numaralı alanı seçmiş ancak gerekçesiz bırakmış; ya da başka alan seçmiş ama katmanları doğru okumuş."],[0,"Yanlış alan seçmiş ve katmanları yanlış okumuş ya da yanıtsız bırakmış."]]},{"ad":"b","m":"Çakıştırma ve sorgulamayı açıklama, kullanım amaçları","l":[[10,"Çakıştırmayı (katmanları üst üste bindirme) ve sorgulamayı (ölçüte uyan alanları seçme) doğru açıklamış ve afet yönetiminde iki doğru amaç yazmış."],[6,"Dört öğenin üçünü doğru yazmış (çakıştırma ve sorgulama doğru, amaçlar eksik ya da tersi)."],[3,"Dört öğenin yalnızca birini ya da ikisini doğru yazmış."],[0,"Doğru öğe yok; işlemleri karıştırmış."]]}]},
   {c:"3.1",
    p:10,
    zor:"kolay",
    tur:"kisa",
    k:"Fotoğraf betimlemesi (örnek): Yüksek bir dağın zirvesine yakın, çevresi çıplak kayalarla ve kar kalıntılarıyla çevrili, küçük ve derin bir göl. Çanağın çevresindeki kayalar aşınmış ve yuvarlaklaşmış; yakınlarda ağaç yok. Bölge yılın büyük bölümünde kar ve buzla kaplıdır.",
    q:"Fotoğraftaki gölü oluşum biçimine göre sınıflandırınız ve nasıl oluştuğunu bir cümleyle açıklayınız.",
    c2:"Bu bir buzul gölüdür (yerlikaya göllerden). Buzulun hareket ederek yer yüzeyini aşındırıp oyduğu çukur, buzul erirken suyla dolar. Kaçkar Dağları'ndaki buzul gölleri (Büyük Deniz Gölü, Çengovit gölleri gibi) buna örnektir.",
    o:[{"m":"Görselden gölü adlandırma ve oluşumunu açıklama","l":[[10,"Gölü buzul gölü olarak sınıflandırmış ve oluşumunu açıklamış (buzulun oyduğu çukurun suyla dolması)."],[6,"Buzul gölü demiş ancak oluşumu açıklamamış ya da yanlış açıklamış."],[3,"Yalnızca genel bir ifade yazmış (göl, tatlı su, yüksek yerdeki göl gibi); oluşum biçimini belirtmemiş."],[0,"Yanlış göl türü yazmış (volkanik, tektonik gibi) ve yanlış açıklamış."]]}]},
   {c:"3.1",
    p:20,
    zor:"orta",
    tur:"acik",
    k:"Grafiklerde yeryüzündeki suların dağılışı verilmiştir (yaklaşık değerler).<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Yatay sütun grafikler: suyun yüzde 97,5'i tuzlu, yüzde 2,5'i tatlı; tatlı suyun yaklaşık yüzde 69'u buzullarda, yüzde 30'u yer altında, yüzde 1'i göller ve akarsulardadır\"><text x=\"10\" y=\"26\" class=\"s-yazi\">Yeryüzündeki suların dağılışı (%)</text><line x1=\"190\" y1=\"36\" x2=\"190\" y2=\"108\" class=\"s-kalin\"/><text x=\"182\" y=\"57\" class=\"s-yazi\" text-anchor=\"end\">Tuzlu su</text><rect x=\"190\" y=\"42\" width=\"331.5\" height=\"22\" class=\"s-cubuk\"/><text x=\"529.5\" y=\"58\" class=\"s-yazi\">%97,5</text><text x=\"182\" y=\"89\" class=\"s-yazi\" text-anchor=\"end\">Tatlı su</text><rect x=\"190\" y=\"74\" width=\"8.5\" height=\"22\" class=\"s-cubuk2\"/><text x=\"206.5\" y=\"90\" class=\"s-yazi\">%2,5</text><text x=\"10\" y=\"154\" class=\"s-yazi\">Tatlı suyun dağılışı (%, yaklaşık)</text><line x1=\"190\" y1=\"164\" x2=\"190\" y2=\"270\" class=\"s-kalin\"/><text x=\"182\" y=\"185\" class=\"s-yazi\" text-anchor=\"end\">Buzullar ve kalıcı kar</text><rect x=\"190\" y=\"170\" width=\"234.6\" height=\"22\" class=\"s-cubuk\"/><text x=\"432.6\" y=\"186\" class=\"s-yazi\">~%69</text><text x=\"182\" y=\"217\" class=\"s-yazi\" text-anchor=\"end\">Yer altı suları</text><rect x=\"190\" y=\"202\" width=\"102\" height=\"22\" class=\"s-cubuk\"/><text x=\"300\" y=\"218\" class=\"s-yazi\">~%30</text><text x=\"182\" y=\"249\" class=\"s-yazi\" text-anchor=\"end\">Göller ve akarsular</text><rect x=\"190\" y=\"234\" width=\"3.4\" height=\"22\" class=\"s-cubuk2\"/><text x=\"201.4\" y=\"250\" class=\"s-yazi\">~%1</text><text x=\"10\" y=\"306\" class=\"s-soluk\">Not: Değerler yaklaşık verilmiştir; kaynaklara göre küçük farklar olabilir.</text></svg><figcaption>Yeryüzündeki suların ve tatlı suyun dağılışı (yaklaşık değerler).</figcaption></figure>",
    q:"a) Grafiklerden yararlanarak tatlı su kaynaklarını insanların doğrudan kullanabilme kolaylığına göre sınıflandırınız (kolaydan zora doğru sıralayınız) ve sıralamanızın nedenini yazınız.<br>b) Grafiklerden çıkarımda bulunarak 'Dünya'da çok su var ama su kıtlığı yaşanıyor' görüşünü açıklayınız; bireysel ve toplumsal birer öneri geliştiriniz.",
    c2:"a) Göller ve akarsular (yüzey suları) en kolay kullanılandır, çünkü yeryüzündedir ve ulaşılabilir; yer altı suları ikinci sıradadır, çünkü kuyu ve pompajla çıkarılır. Buzullar ise katı hâlde ve çoğu ulaşılması zor bölgelerde olduğu için en zor kullanılandır. b) Dünyadaki suyun %97,5'i tuzludur, tatlı su yalnızca %2,5'tir; tatlı suyun da yaklaşık %69'u buzullarda, yaklaşık %30'u yer altındadır, insanların kolayca kullanabildiği göl ve akarsular ise yaklaşık %1'i kadardır. Bu yüzden su çok görünse de kullanılabilir tatlı su azdır. Öneri: bireyler evde su tasarrufu yapmalı (musluğu açık bırakmamak gibi), toplum ise tarımda damlama gibi modern sulamayı yaygınlaştırmalı ve atık suyu arıtmalıdır.",
    o:[{"ad":"a","m":"Tatlı suyu kullanım kolaylığına göre sınıflandırma","l":[[8,"Göller-akarsular, yer altı suları, buzullar sıralamasını yapmış ve nedenini yazmış (yüzeyde ulaşılabilir; yer altı suyu kuyuyla çıkarılır; buzul katı hâlde ve ulaşılması zor)."],[5,"Sıralamayı doğru yapmış ancak nedeni eksik ya da yok."],[2,"Kaynakları sıralamadan yalnızca saymış ya da yalnızca bir kaynağı doğru yerleştirmiş."],[0,"Sıralama yanlış ya da grafikle ilgisiz."]]},{"ad":"b","m":"Grafikten çıkarım yapma ve öneri geliştirme","l":[[12,"Grafik verilerine dayanarak çıkarım yapmış (suyun çoğu tuzlu; tatlı suyun çoğu buzul ve yer altında; kullanılabilir yüzey suyu çok az) ve bir bireysel ile bir toplumsal önlem geliştirmiş."],[8,"Çıkarım doğru; yalnızca bir önlem yazmış ya da önlemler gerekçesiz."],[4,"Yalnızca grafikteki değerleri okumuş ya da yalnızca önlem yazmış."],[0,"Çıkarım ve önlem grafikle ilgisiz ya da yanıtsız."]]}]},
   {c:"3.2",
    p:25,
    zor:"zor",
    tur:"acik",
    k:"(Bilgi kartı) Tuz Gölü; flamingo başta olmak üzere birçok göçmen kuşun üreme ve beslenme alanıdır. Göl, tuz üretimi için önemli bir kaynaktır; çevresinde tarım, hayvancılık ve ekoturizm yapılmaktadır. 1988 ve 2024 yaz dönemleri karşılaştırıldığında gölün su ile kaplı alanı çok daralmıştır. Bu değişim aşağıdaki şematik haritada gösterilmiştir.<figure class=\"y-sekil\"><svg viewBox=\"0 0 600 340\" role=\"img\" aria-label=\"Şematik harita: Tuz Gölü'nün 1988 yaz dönemindeki geniş su alanı kesikli çizgiyle, 2024'teki çok daha küçük su alanı koyu mavi dolguyla gösterilmiştir; çevrede tarım alanları, tuz üretim alanı ve kuşların üreme ve beslenme alanı yer alır\"><rect x=\"8\" y=\"8\" width=\"584\" height=\"296\" class=\"s-kara\"/><rect x=\"30\" y=\"30\" width=\"110\" height=\"70\" class=\"s-yesil\" fill-opacity=\".4\"/><text x=\"34\" y=\"118\" class=\"s-soluk\">Tarım alanları</text><rect x=\"488\" y=\"36\" width=\"94\" height=\"64\" class=\"s-yesil\" fill-opacity=\".4\"/><text x=\"488\" y=\"116\" class=\"s-soluk\">Tarım alanları</text><rect x=\"412\" y=\"238\" width=\"100\" height=\"38\" class=\"s-gri\" fill-opacity=\".8\"/><text x=\"462\" y=\"290\" class=\"s-soluk\" text-anchor=\"middle\">Tuz üretim alanı</text><path d=\"M 190,150 C 200,96 290,64 380,78 C 468,92 504,150 478,214 C 452,268 372,276 296,262 C 224,248 182,206 190,150 Z\" class=\"s-su\" fill-opacity=\".28\"/><path d=\"M 190,150 C 200,96 290,64 380,78 C 468,92 504,150 478,214 C 452,268 372,276 296,262 C 224,248 182,206 190,150 Z\" class=\"s-su-cizgi\" stroke-dasharray=\"7 5\" style=\"stroke-width:2\"/><path d=\"M 252,160 C 262,128 320,112 372,124 C 420,136 440,170 420,206 C 398,238 340,244 296,226 C 258,210 244,186 252,160 Z\" class=\"s-su\" fill-opacity=\".95\"/><ellipse cx=\"462\" cy=\"146\" rx=\"14\" ry=\"10\" class=\"s-mor\" fill-opacity=\".8\"/><text x=\"498\" y=\"140\" class=\"s-soluk\">Kuş üreme ve</text><text x=\"498\" y=\"153\" class=\"s-soluk\">beslenme alanı</text><line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"172\" class=\"s-kalin\"/><polygon points=\"60,164 55.5,172 64.5,172\" class=\"s-yazi\"/><text x=\"60\" y=\"206\" class=\"s-yazi\" text-anchor=\"middle\">K</text><rect x=\"10\" y=\"316\" width=\"16\" height=\"11\" class=\"s-su\" fill-opacity=\".28\"/><line x1=\"10\" y1=\"315\" x2=\"26\" y2=\"315\" class=\"s-su-cizgi\" stroke-dasharray=\"4 3\"/><text x=\"31\" y=\"326\" class=\"s-soluk\">1988 yaz dönemi göl alanı</text><rect x=\"210\" y=\"316\" width=\"16\" height=\"11\" class=\"s-su\" fill-opacity=\".95\"/><text x=\"231\" y=\"326\" class=\"s-soluk\">2024 yaz dönemi göl alanı</text><text x=\"590\" y=\"326\" class=\"s-soluk\" text-anchor=\"end\">Şematik, ölçeksiz</text></svg><figcaption>Tuz Gölü'nde su ile kaplı alanın 1988 ve 2024 yaz dönemlerindeki durumu (şematik harita, ölçeksiz).</figcaption></figure>",
    q:"a) Haritayı yorumlayarak bu değişimin doğal çevre üzerindeki olumsuz etkilerinden ikisini nedenleriyle açıklayınız.<br>b) Aynı değişimin yöre halkı üzerindeki ekonomik ve sosyokültürel etkilerini yorumlayınız (her boyuttan en az bir etki). Gölün korunması için bir öneri geliştiriniz.",
    c2:"a) Su ile kaplı alan daraldıkça flamingo gibi göçmen kuşların üreme ve beslenme alanı azalır, böylece biyoçeşitlilik kaybı olur. Su çekilince açıkta kalan tuz tabakası kurur; rüzgârla aşınıp çevreye taşınır; ayrıca göl yüzeyinden buharlaşan nem azaldığı için yöresel nem ve mikroklima değişir. b) Ekonomik etki: tuz üretimi ve ekoturizm geliri düşer, çevredeki tarım ve hayvancılık olumsuz etkilenir, halkın geliri azalır. Sosyokültürel etki: geliri düşen aileler başka yerlere göç eder, kuş gözlemi gibi turizm etkinlikleri ve yöreye özgü geçim biçimleri zayıflar. Öneri: gölün su bütçesini koruyacak biçimde havzada yer altı ve yüzey suyu kullanımını denetlemek, modern sulama ve ürün deseni planlaması yapmak.",
    o:[{"ad":"a","m":"Haritadaki değişimin doğal çevre etkilerini açıklama","l":[[12,"İki doğal çevre etkisini haritadaki daralmaya bağlayarak neden-sonuçla açıklamış (kuşların üreme ve beslenme alanı daralması ve biyoçeşitlilik kaybı; açıkta kalan tuzun rüzgârla taşınması; nem ve mikroklima değişimi)."],[8,"İki etkiyi doğru yazmış ancak yalnızca birini neden-sonuçla açıklamış."],[4,"Yalnızca bir etkiyi yazmış ya da 'su azalmış, olumsuz etkilenir' gibi tespitle yetinmiş."],[0,"Etkiler doğal çevreyle ilgisiz ya da yanıtsız."]]},{"ad":"b","m":"Ekonomik ve sosyokültürel etkileri sorgulama, öneri geliştirme","l":[[13,"Ekonomik etkiyi (tuz üretimi, ekoturizm, tarım ve hayvancılık gelirinin azalması) ve sosyokültürel etkiyi (göç, geleneksel geçim biçimlerinin ve turizm etkinliklerinin zayıflaması) gerekçeleriyle yorumlamış; gerçekçi bir koruma önerisi geliştirmiş."],[9,"İki boyutu yorumlamış; öneri yazmamış ya da öneri ilgisiz."],[4,"Yalnızca bir boyutu yorumlamış."],[0,"Etkiler yöre halkıyla ilgisiz ya da yanıtsız."]]}]}
 ]}
];

/* Sınavda çıkabilecekler: Senaryo 3 kazanımlarına göre kısa not (kitteki konu özetlerinden) */
const MUHTEMEL={
  giris:'Ortak yazılı Senaryo 3: COĞ.11.1.1\'den 2, COĞ.11.2.1\'den 1, COĞ.11.3.1\'den 2, COĞ.11.3.2\'den 1 soru. Sorularda çoğunlukla harita, grafik, tablo ya da CBS ekranı verilir.',
  ciktilar:[
    {c:'1.1',ad:'Mekânsal sorunlar ve coğrafya',n:2,m:[
      '<b>Sorunu tanıma:</b> metindeki ya da haritadaki sorunu (taşkın, plansız kentleşme, ormansızlaşma, su yetersizliği) ve nedenlerini yazma.',
      '<b>Sınıflandırma:</b> ölçeğe göre yerel / bölgesel / küresel, tematik olarak sosyal / ekonomik / çevresel / politik, kentsel–kırsal.',
      '<b>Coğrafyanın katkısı, üç basamak:</b> tespit ve izleme, etki analizi, çözüm ve planlama. Her basamağa soruya özgü bir örnek yaz.',
      '<b>Hangi alt dal?</b> ve <b>diğer bilimlerle iş birliği</b> (şehir planlama, jeoloji, ziraat…).'
    ]},
    {c:'2.1',ad:'Web tabanlı CBS',n:1,m:[
      '<b>CBS ekranı okuma:</b> katman, öz nitelik tablosu, lejant.',
      '<b>İşlemler:</b> birleştirme, çakıştırma, sorgulama, genelleştirme, sembolleştirme. Verilen işlemi adlandır ve sonucunu yaz.',
      '<b>Uygun yer seçimi:</b> katmanları çakıştırıp ölçütlere uyan alanı bulma.',
      '<b>Özellikler ve sınırlılıklar:</b> kurulum yok, her yerden erişim, güncel; ama genel ağ şart, analiz imkânı daha sınırlı.'
    ]},
    {c:'3.1',ad:'Su kaynaklarını sınıflandırma',n:2,m:[
      '<b>Sınıflandırma ölçütleri:</b> bulunduğu yere göre (yer üstü, yer altı), kimyasal özelliğe göre (tatlı, tuzlu, acı, mineralli), fiziksel özelliğe göre (sıcak, soğuk). Her birine örnek ver.',
      '<b>Su döngüsü:</b> buharlaşma, yoğuşma, yağış, akış, sızma; şemada eksik aşamayı yazma.',
      '<b>Suyun dağılışı:</b> yaklaşık %97,5 tuzlu, %2,5 tatlı; tatlı suyun çoğu buzullarda.',
      '<b>Göller:</b> oluşumuna göre tektonik, volkanik, karstik, set gölleri; Türkiye\'den örnekler.',
      '<b>Akarsu kavramları:</b> havza, debi, rejim, açık ve kapalı havza.'
    ]},
    {c:'3.2',ad:'Türkiye\'de su kaynaklarının etkileri',n:1,m:[
      '<b>Dört boyutlu etki:</b> çevresel, ekonomik, politik, sosyokültürel. Verilen örnek (baraj, göl, GAP, Tuz Gölü) için her boyuta bir etki yaz.',
      '<b>Sınıraşan ve sınır oluşturan sular:</b> Fırat, Dicle, Aras, Meriç… farkını bil.',
      '<b>Türkiye akarsularının özellikleri:</b> boyları kısa, akış hızı ve hidroelektrik potansiyeli yüksek, rejimleri düzensiz.',
      '<b>Su yönetimi önlemleri:</b> damla sulama, atık su arıtma, havza yönetimi, tasarruf.'
    ]}
  ],
  tip:['Kısa cevaplı: bir kavram, işlem ya da örnek yaz.','Görsel sorusu: harita, grafik ya da CBS ekranını oku, değişimi ve nedenini yaz.','Açık uçlu: bir sorun ya da su kaynağı için etkileri ve çözümü iki-üç cümleyle yaz.']
};
