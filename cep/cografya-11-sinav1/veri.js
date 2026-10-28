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

/* Ortak yazılı provası: 3 deneme × 6 açık uçlu soru (Senaryo 3 dağılımı: 11.1.1 → 2, 11.2.1 → 1, 11.3.1 → 2, 11.3.2 → 1). o = puanlama ölçütü [puan, ölçüt] */
const PROVA=[
 {ad:"Deneme 1",s:[
  {c:"1.1",p:15,k:"Akdeniz kıyısındaki bir ilçede yaz sonunda büyük bir orman yangını çıkmıştır. Yangından sonra yanan alanlar uydu görüntüleriyle haritalanmış, yangın öncesi ve sonrası bitki örtüsü karşılaştırılarak her yıl izlenmiştir. Yangının toprak erozyonuna, akarsu ve baraj sularının kalitesine, yaban hayatına ve çevre köylerin geçim kaynaklarına etkisi çözümlenmiş; yağış ve eğim verileriyle gelecekteki risk modellenmiştir. Sonuçlara göre ağaçlandırmaya uygun alanlar belirlenmiş, yangın risk haritaları hazırlanmış, orman yolları ve gözetleme noktaları planlanmıştır. (Örnek metin)",
   q:"Metne göre mekânsal soruna çözüm üretilirken tespit ve izleme, etki analizi ve modelleme ile çözüm ve planlama (müdahale) aşamalarında neler yapıldığını açıklayınız.",
   c2:"Tespit ve izleme: yanan alanlar uydu görüntüleriyle haritalandı; yangın öncesi ve sonrası bitki örtüsü karşılaştırılarak her yıl izlendi. Etki analizi ve modelleme: yangının toprak erozyonu, su kalitesi, yaban hayatı ve geçim kaynakları üzerindeki etkileri çözümlendi; yağış ve eğim verileriyle gelecekteki risk modellendi. Çözüm ve planlama: ağaçlandırmaya uygun alanlar belirlendi, yangın risk haritaları hazırlandı, orman yolları ve gözetleme noktaları planlandı.",
   o:[[5,"Tespit ve izleme: uydu görüntüsüyle haritalama ve zaman içinde izleme."],[5,"Etki analizi ve modelleme: erozyon, su kalitesi, yaban hayatı ya da geçim etkisi ve risk modeli."],[5,"Çözüm ve planlama: ağaçlandırma alanı, risk haritası, yol ve gözetleme planı."]]},
  {c:"1.1",p:20,k:"Bir kentin üç mahallesine ait veriler (örnek veri):<table class=\"tbl\"><tr><th>Mahalle</th><th>Son 10 yılda nüfus artışı</th><th>Kişi başına yeşil alan (m²)</th><th>Toplu taşımaya 500 m'den yakın konut oranı</th></tr><tr><td>A</td><td>%65</td><td>3</td><td>%25</td></tr><tr><td>B</td><td>%20</td><td>11</td><td>%70</td></tr><tr><td>C</td><td>%5</td><td>17</td><td>%90</td></tr></table>Kentte trafik sıkışıklığı artmış, yağışlı günlerde taşkınlar yaşanmaktadır. Yeni konutların çoğu A mahallesinde ve dere yatağına yakın alanlarda yapılmıştır.",
   q:"a) Verilerden yola çıkarak iki mekânsal sorun belirleyiniz ve her biri için coğrafyanın ilgili alt dalını yazınız. b) Coğrafyanın bu sorunların çözümüne katkılarını (en az iki) nedensel bir dille açıklayınız. c) Çözümde coğrafya ile iş birliği yapabilecek iki bilim dalını rolleriyle yazınız.",
   c2:"a) Sorun 1: A mahallesinde hızlı nüfus artışına bağlı plansız kentleşme, yeşil alan ve toplu taşıma yetersizliği (Yerleşme coğrafyası). Sorun 2: dere yatağına yakın yapılaşmayla taşkın riski (Afetler coğrafyası ya da Hidrografya). b) Coğrafya nüfus artışı, yeşil alan ve toplu taşıma erişimi verilerini haritada konumlandırarak sorunun A mahallesinde yoğunlaştığını gösterir; taşkın risk haritasıyla hangi alanların yapılaşmaya uygun olmadığını belirler; bu sayede yeni konutlar daha güvenli ve ulaşıma yakın alanlara yönlendirilebilir. c) Şehir planlama (imar, yeşil alan ve ulaşım planı), çevre ya da inşaat mühendisliği (dere ıslahı, yağmur suyu drenajı), sosyoloji (mahalle halkının ihtiyaçları ve yaşam kalitesi) gibi bilimlerden herhangi ikisi.",
   o:[[6,"İki sorun (her biri 2) ve doğru alt dallar (her biri 1)."],[8,"En az iki coğrafi katkı neden-sonuç bağıyla açıklandı (her biri 4): konumlandırma/dağılış haritası, risk haritası, uygun alan seçimi."],[6,"İki bilim dalı ve rolleri (her biri 3)."]]},
  {c:"2.1",p:15,k:"Bir belediye ilçelere göre sağlık hizmeti erişimini web tabanlı CBS'de inceliyor (örnek veri):<table class=\"tbl\"><tr><th>İlçe</th><th>Nüfus (bin)</th><th>Hastane sayısı</th><th>En yakın hastaneye ortalama ulaşım (dk)</th></tr><tr><td>A</td><td>410</td><td>6</td><td>12</td></tr><tr><td>B</td><td>180</td><td>2</td><td>25</td></tr><tr><td>C</td><td>95</td><td>1</td><td>48</td></tr><tr><td>D</td><td>60</td><td>0</td><td>70</td></tr></table>Belediye önce nüfus katmanı ile hastane katmanını üst üste açmış, sonra yalnızca ulaşım süresi 40 dakikayı aşan ilçeleri seçmiş ve bunları haritada kırmızı renkle göstermiştir.",
   q:"a) Metinde belirtilen üç işlemi çözümleme türleriyle adlandırınız. b) Tabloya göre sağlık hizmetine erişimin en zayıf olduğu ilçeyi gerekçesiyle yazınız. c) Çalışmadan çıkarılabilecek iki sonucu ve belediyenin atabileceği bir planlama adımını yazınız.",
   c2:"a) Nüfus ve hastane katmanlarının üst üste açılması çakıştırma; ulaşım süresi 40 dakikayı aşan ilçelerin seçilmesi sorgulama; seçilenlerin kırmızıyla gösterilmesi sembolleştirmedir. b) D ilçesi: hastane yok ve en yakın hastaneye ulaşım en uzun (70 dk). c) Nüfus azaldıkça hastane sayısı ve erişim zayıflıyor, hizmet dağılımı nüfusla dengeli değil; C ve D ilçelerinde erişim süresi 40 dakikayı aşıyor. Adım: bu ilçelere sağlık merkezi ya da mobil sağlık hizmeti, ambulans istasyonu veya toplu taşıma hattı planlamak.",
   o:[[6,"Üç işlemin doğru adlandırılması (her biri 2)."],[4,"D ilçesi ve gerekçe (hastane yok, 70 dk)."],[5,"İki veriye dayalı çıkarım (2+2) ve bir uygun planlama adımı (1)."]]},
  {c:"3.1",p:15,k:"Bir grup öğrenci Doğu Anadolu'da bir arazi çalışması yapmış ve defterine şunları yazmıştır: Ağrı Dağı'nın zirvesinde yaz boyunca erimeyen buzul örtüsünü inceledik. Bölgeden geçen Murat Nehri kıyısında su ölçümü yaptık. Van Gölü'nde soda içeren sodalı suyu gördük. Diyadin'de yer altından yüzeye çıkan, sıcaklığı yüksek kaplıca sularını inceledik.",
   q:"Bu gezide gözlenen su kaynaklarını sınıflandırmak için iki ölçüt belirleyiniz. Belirlediğiniz ölçütlere göre bu su kaynaklarının sınıflandırmasını yapınız.",
   c2:"Ölçüt 1, bulunduğu yer: yer üstü suları (Ağrı Dağı buzulu, Murat Nehri, Van Gölü) ve yer altı kaynaklı sular (Diyadin kaplıca suyu). Ölçüt 2, kimyasal özellik: tatlı sular (buzul, Murat Nehri), sodalı su (Van Gölü) ve minerelli su (kaplıca suyu). Alternatif ikinci ölçüt fiziksel özelliktir: sıcak su (kaplıca), soğuk sular (buzul, nehir, göl).",
   o:[[4,"İki geçerli ölçüt (her biri 2): bulunduğu yer, kimyasal ya da fiziksel özellik."],[8,"Her ölçüt için gruplar ve örnekler doğru yerleştirildi (her ölçüt 4)."],[3,"Etiketleme tutarlı ve metne dayalı."]]},
  {c:"3.1",p:15,k:"Dünyadaki su varlığı (yaklaşık değerler): tuzlu su %97,5, tatlı su %2,5. Tatlı suyun yaklaşık %69'u buzullarda ve kalıcı karda, yaklaşık %30'u yer altında, yaklaşık %1'i göl ve akarsularda bulunur.",
   q:"a) Tatlı su kaynaklarının sınırlı olduğunu verilerle açıklayınız. b) Küresel iklim değişikliğiyle buzulların erimesinin su döngüsü, deniz seviyesi ve ekosistemler üzerindeki olası etkilerini yazınız. c) Tatlı su kıtlığına karşı bireyin yapabileceği iki tasarruf önlemi yazınız.",
   c2:"a) Yeryüzü sularının yalnızca %2,5'i tatlıdır; bunun da yaklaşık %69'u buzulda kilitli olduğundan doğrudan kullanılamaz. Göl ve akarsulardaki kullanılabilir tatlı su yaklaşık %1'dir. b) Buzulların erimesi deniz seviyesini yükseltir ve kıyı yerleşimlerini ve ekosistemleri tehdit eder; buzul ve karla beslenen akarsuların akımı önce artıp uzun vadede azalabilir, su döngüsü ve tatlı su dağılışı değişir; kutup ve dağ ekosistemleri bozulur, deniz suyunun tuzluluğu ve sıcaklığı değişir. c) Musluğu açık bırakmamak, sızıntıları onarmak, bahçe sulamada tasarruflu yöntem kullanmak, makineleri dolu çalıştırmak gibi herhangi iki önlem.",
   o:[[5,"Tatlı suyun %2,5 olması ve çoğunun buzulda olması ya da yüzey suyunun çok az olması verilerle açıklandı."],[7,"Üç alan: deniz seviyesi (2), su döngüsü ya da akarsu beslenmesi (3), ekosistem (2)."],[3,"İki uygun tasarruf önlemi (2+1)."]]},
  {c:"3.2",p:20,k:"Bir akarsu üzerinde baraj yapılmadan önce ve sonra yöredeki arazi kullanımı (km², örnek veri):<table class=\"tbl\"><tr><th>Arazi sınıfı</th><th>Baraj öncesi</th><th>Baraj sonrası</th></tr><tr><td>Tarım alanı</td><td>120</td><td>85</td></tr><tr><td>Yerleşim alanı</td><td>40</td><td>38</td></tr><tr><td>Su yüzeyi (akarsu ve baraj gölü)</td><td>5</td><td>60</td></tr><tr><td>Orman ve çalılık</td><td>90</td><td>87</td></tr></table>Baraj yapımı sırasında vadi tabanındaki köylerin bir bölümü boşaltılmış, halk daha yüksekteki yeni bir yerleşim alanına taşınmıştır.",
   q:"a) Tablodaki en önemli iki değişikliği yazınız. b) Bu değişimlerden hareketle yöre halkının ekonomik faaliyetlerinde gelecekte nasıl bir dönüşüm yaşanması beklenir? Nedenleriyle açıklayınız. c) Baraj gölünün çevresel açıdan bir olumsuz, enerji ve ekonomi açısından bir olumlu etkisini yazınız.",
   c2:"a) Su yüzeyi 5'ten 60 km²'ye çıkmıştır; tarım alanı 120'den 85 km²'ye düşmüştür (yerleşim hafif azalmış, yeni alana taşınmıştır). b) Verimli vadi tabanındaki tarım arazisi su altında kaldığı için tarımın payı azalır; bunun yerine baraj gölünde balıkçılık, su sporları ve turizm, ticaret ve hizmet faaliyetleri gelişir; yeni yerleşimde konaklama, yeme-içme ve ulaşım hizmetleri artar. c) Olumsuz: vadi ekosistemi ve canlıların yaşam alanları su altında kalır, akarsu ekosistemi değişir. Olumlu: hidroelektrik enerji üretimi, sulama ve içme suyu depolama, balıkçılık ve turizm geliri.",
   o:[[4,"Su yüzeyi artışı ve tarım alanı azalışı doğru okundu (her biri 2)."],[10,"Tarımın azalması (3) ve gerekçesi (2); balıkçılık, turizm ya da hizmet gibi yeni faaliyet (3) ve gerekçesi (2)."],[6,"Bir çevresel olumsuzluk (3) ve bir enerji ya da ekonomi olumluluğu (3)."]]}
 ]},
 {ad:"Deneme 2",s:[
  {c:"1.1",p:15,k:"Bir coğrafya projesinde öğrenciler 'küresel ısınma' ve 'büyük kentlerde trafik sıkışıklığı' sorunlarını sınıflandırmak istiyor.",
   q:"a) Mekânsal sorun kavramını tanımlayınız. b) Mekânsal sorunlar hangi üç ölçüte göre sınıflandırılabilir? Her ölçüt için gruplarını yazınız. c) Küresel ısınma ve kentlerde trafik sıkışıklığını ölçeğe göre sınıflandırınız.",
   c2:"a) Mekânsal sorun, yerel, bölgesel ya da küresel ölçekte ortaya çıkan fiziksel, sosyal, ekonomik ve çevresel problemlerdir. b) Ölçeğe göre: yerel, bölgesel, küresel. Tematik içeriğe göre: sosyal, ekonomik, çevresel, politik (yönetsel). Mekânın niteliğine göre: kentsel, kırsal. c) Küresel ısınma küresel ölçekli, kentsel trafik sıkışıklığı yerel ölçekli (kentsel) bir sorundur.",
   o:[[5,"Tanım: ölçek (yerel/bölgesel/küresel) ve fiziksel, sosyal, ekonomik, çevresel problemler."],[6,"Üç ölçütün adı (her biri 1) ve her ölçütün grupları (her biri 1)."],[4,"Küresel ısınma: küresel (2); kentsel trafik: yerel ya da kentsel (2)."]]},
  {c:"1.1",p:20,k:"Karadeniz kıyısındaki bir ilçede yoğun yağıştan sonra dere taşmış; yamaçlara ve dere yatağı kenarına yapılan evler sular altında kalmış, yol ve köprüler zarar görmüştür. İncelemede dere yatağının daraltıldığı, yamaçlardaki ormanların açılarak yerleşim ve tarım için kullanıldığı görülmüştür. İlçe için yağış, eğim, toprak ve yapılaşma katmanları birleştirilerek taşkın ve heyelan risk haritası hazırlanmış; yatağa yakın yapılaşma durdurulmuş, riskli mahalleler için güvenli yeni yerleşim alanları planlanmıştır. (Örnek metin)",
   q:"a) Sorunun ortaya çıkmasında etkili olan bir doğal ve bir beşerî nedeni yazınız. b) Coğrafyanın sorunun çözümüne iki katkısını nedensel ilişkiyle açıklayınız. c) Çözümde coğrafya ile iş birliği yapabilecek iki bilimi ve rollerini yazınız.",
   c2:"a) Doğal: yoğun yağış, eğimli yamaçlar. Beşerî: dere yatağının daraltılması ve yatağa yakın yapılaşma, yamaç ormanlarının açılması. b) Coğrafya yağış, eğim, toprak ve yapılaşma katmanlarını birleştirip risk haritası çıkarır; böylece hangi mahallelerin taşkın ve heyelan riski taşıdığı bilinir ve yatağa yakın yapılaşma durdurulabilir; riskli yerler belirlenince güvenli yerleşim alanları planlanır. c) İnşaat ya da çevre mühendisliği (dere ıslahı, taşkın koruma yapıları), şehir planlama (imar planı, yerleşim yeri), jeoloji (zemin ve heyelan etüdü), sosyoloji (taşınan halkın uyumu) gibi bilimlerden herhangi ikisi.",
   o:[[6,"Bir doğal (3) ve bir beşerî (3) neden."],[8,"İki katkı (her biri 4): risk haritası ya da katman birleştirme ve sonucunda yapılaşma sınırlaması ya da güvenli alan planı."],[6,"İki bilim ve rolleri (her biri 3)."]]},
  {c:"2.1",p:15,k:"Bir belediye ilçedeki yollar, içme suyu hattı, kanalizasyon hattı ve bina katmanlarını web tabanlı CBS'de kullanmaktadır. Yapılan işlemler: (1) İki kurumdan gelen bina verilerinin 'yapı' adlı tek katmanda toplanması. (2) Su ve kanalizasyon hat katmanlarının yol katmanıyla aynı anda açılıp çakışan kesimlerin görülmesi. (3) Yalnızca 20 yıldan eski borulu hatların listelenmesi. (4) Harita uzaklaştırıldığında ara sokakların kaybolup yalnızca ana yolların görünmesi.",
   q:"a) Numaralı işlemlerin hangi çözümleme türü olduğunu yazınız. b) Web tabanlı CBS'nin bilgisayar tabanlı CBS'ye göre iki avantajını ve bir sınırlılığını yazınız.",
   c2:"a) (1) Birleştirme, (2) çakıştırma, (3) sorgulama, (4) genelleştirme. b) Avantaj: tarayıcıdan girildiği için kurulum gerekmez; genel ağ olan her yerden ve mobil cihazla erişilir; birden fazla kullanıcı aynı anda çalışabilir; çoğu ücretsiz ya da düşük maliyetlidir; otomatik güncellenir (herhangi iki). Sınırlılık: genel ağ bağlantısı gerekir ya da bilgisayar tabanlı CBS'ye göre daha sınırlı ve temel analiz imkânı sunar.",
   o:[[8,"Dört işlem doğru adlandırıldı (her biri 2)."],[4,"İki avantaj (her biri 2)."],[3,"Bir sınırlılık."]]},
  {c:"3.1",p:15,k:"Dört gölün özellikleri: Bitlis'teki Nemrut Kalderası'nda bir krater gölü; Bolu'daki Abant Gölü (vadiyi kapatan bir heyelan setiyle oluşmuştur); Kaçkarlar'daki Çengovit gölleri (buzulların oyduğu çukurlarda); İç Anadolu'daki Tuz Gölü (yer kabuğu hareketleriyle oluşan çöküntü çukurunda). Tuz Gölü tuzlu, Beyşehir Gölü ise tatlı sulu bir göldür.",
   q:"a) Gölleri oluşum biçimlerine göre (tektonik, volkanik, buzul, set) eşleştiriniz. b) Tuz Gölü'nün tuzlu, Beyşehir Gölü'nün ise tatlı olmasında gideğenin (göl ayağı) rolünü açıklayınız.",
   c2:"a) Nemrut krater gölü: volkanik. Abant Gölü: set (heyelan seti). Çengovit gölleri: buzul. Tuz Gölü: tektonik. b) Gideğeni olmayan göllerde (Tuz Gölü) gelen su yalnızca buharlaşarak çıktığından suda çözünmüş tuzlar gölde birikir ve göl tuzlu olur. Gideğeni olan göllerde (Beyşehir Gölü) fazla su ve içindeki tuzlar gideğenle dışarı taşınır; bu yüzden göl tatlı kalır.",
   o:[[8,"Dört doğru eşleştirme (her biri 2)."],[7,"Gideğen yok: buharlaşma ve tuz birikimi (4); gideğen var: fazla su ve tuzun taşınması, tatlı kalması (3)."]]},
  {c:"3.1",p:15,k:"İki akarsuyun aylık ortalama akımı (m³/sn, Ocak'tan Aralık'a, örnek veri): A akarsuyu: 98, 102, 99, 101, 100, 97, 99, 100, 101, 98, 100, 99. B akarsuyu: 12, 20, 55, 110, 140, 90, 40, 18, 10, 9, 10, 11.",
   q:"a) Akım (debi) ve rejim kavramlarını tanımlayınız. b) A ve B akarsularının rejim türlerini gerekçesiyle yazınız. c) B akarsuyunun rejiminin tarım ve enerji üretimi için doğurabileceği bir sorunu ve bir önlemi yazınız.",
   c2:"a) Akım: akarsu yatağının herhangi bir kesitinden bir saniyede geçen su miktarı. Rejim: akımın yıl içinde gösterdiği değişim. b) A akarsuyu düzenli rejimlidir: akım yıl boyunca 97 ile 102 arasında çok az değişiyor. B akarsuyu düzensiz rejimlidir: ilkbaharda 140'a çıkıp sonbaharda 9'a düşüyor. c) Yaz ve sonbaharda akımın azalması sulamada su sıkıntısına ve elektrik üretiminin düşmesine yol açar (ilkbahar yüksek akımı taşkın riski doğurur). Önlem: baraj ve gölete suyu depolayıp yıl içinde dengeli kullanmak, modern sulama uygulamak.",
   o:[[5,"Akım ve rejim tanımları (3+2)."],[6,"A düzenli, B düzensiz (her biri 2) ve veriye dayalı gerekçe (2)."],[4,"Bir sorun (2) ve bir önlem (2)."]]},
  {c:"3.2",p:20,k:"Türkiye üç tarafı denizlerle çevrili bir ülkedir. Deniz hukukuna göre kıyı ülkeleri iç sular, kara suları, bitişik bölge, kıta sahanlığı ve münhasır ekonomik bölge gibi yetki alanlarına sahiptir. Türkiye'nin kara suları Karadeniz ve Akdeniz'de 12, Ege Denizi'nde 6 deniz milidir.",
   q:"a) Deniz yetki alanlarını kıyıdan açık denize doğru sıralayınız. b) Münhasır ekonomik bölgenin ülkeye sağladığı hakkı yazınız. c) Mavi Vatan doktrininin Türkiye için ekonomik ve politik önemini ikişer örnekle açıklayınız.",
   c2:"a) İç sular, kara suları, bitişik bölge, kıta sahanlığı ve münhasır ekonomik bölge (200 deniz miline kadar), açık deniz. b) Kıta sahanlığı dışındaki deniz alanlarında 200 deniz miline kadar canlı ve cansız kaynakları keşfetme, kullanma ve yönetme hakkı. c) Ekonomik: balıkçılık; deniz tabanındaki doğal gaz ve petrol gibi kaynaklar; deniz taşımacılığı ve turizm. Politik: deniz yetki alanlarında hak ve çıkarları koruma; komşularla deniz yetki alanı sorunlarında güçlü konum; stratejik ve güvenlik çıkarları.",
   o:[[5,"Sıralama doğru (iç sular, kara suları, bitişik bölge, kıta sahanlığı/münhasır ekonomik bölge); küçük sıra hatası 3 puan."],[4,"200 deniz miline kadar canlı-cansız kaynakları keşfetme, kullanma ve yönetme hakkı."],[11,"İki ekonomik örnek (3+3) ve iki politik örnek (3+2)."]]}
 ]},
 {ad:"Deneme 3",s:[
  {c:"1.1",p:15,k:"Geleneksel kentlerde yağmur suyu kapalı kanalizasyon ağlarıyla şehirden hızla uzaklaştırılır (gri altyapı). Sel felaketleriyle mücadele etmek için geliştirilen sünger şehir yaklaşımı ise suyu şehirden izole etmek yerine kentin doğal döngüsüne katar: yağmur suyunu kaynağında tutan, süzen ve depolayan yeşil altyapı kurar.",
   q:"a) Gri altyapı ile yeşil altyapı arasındaki farkı yazınız. b) Sünger şehir yaklaşımının sel riski, su kalitesi ve su kıtlığı açısından sağlayacağı yararları yazınız. c) Bu yaklaşımın hangi coğrafi verilerin haritalanmasıyla desteklenerek uygulanabileceğini yazınız.",
   c2:"a) Gri altyapı suyu kapalı kanalizasyonla hızla uzaklaştırır; yeşil altyapı suyu kaynağında tutar, süzer ve depolar. b) Yağmur suyu tutulduğu için sel riski azalır; süzme ile su kalitesi artar; depolanan su kuraklık ve su kıtlığında kullanılabilir. c) Yağış, eğim, zemin geçirgenliği, dere yatakları ve yapılaşma yoğunluğu gibi verilerin CBS ile haritalanıp çakıştırılması; hangi mahallelerde yeşil altyapının kurulacağını belirlemeye yardım eder.",
   o:[[5,"Gri: suyu hızla uzaklaştırma; yeşil: suyu kaynağında tutma ve süzme."],[6,"Üç yarar: sel riskini azaltma (2), su kalitesini artırma (2), su kıtlığına çözüm ya da depolama (2)."],[4,"Yağış, eğim, zemin, yapılaşma gibi verilerin haritalanması ve uygun alan seçimi."]]},
  {c:"1.1",p:20,k:"Hızla büyüyen bir ilde evsel atıklar düzenli depolanmıyor; bir kısmı dere kenarlarına ve boş arazilere bırakılıyor ve yer altı suyuna karışma riski taşıyor. İl yönetimi atık kaynaklarını ve toplama noktalarını CBS ile haritalamış; yer altı suyu seviyesi, eğim, yerleşime uzaklık, hâkim rüzgâr yönü ve ulaşım ağı katmanlarını çakıştırarak uygun depolama alanı aramaktadır. (Örnek metin)",
   q:"a) Atık sorununun ortaya çıkmasında etkili iki beşerî neden yazınız. b) Düzensiz depolamanın doğuracağı iki çevresel sonuç yazınız. c) Metindeki katmanlardan yola çıkarak uygun depolama alanı seçiminde coğrafyanın katkısını açıklayınız.",
   c2:"a) Hızlı kentleşme ve nüfus artışı; tüketim alışkanlıklarının artması; geri dönüşüm ve ayrıştırma sistemlerinin yetersizliği; atıkların bilinçsizce doğaya bırakılması (herhangi iki). b) Yer altı ve yüzey sularının kirlenmesi; toprak kirliliği; koku ve hava kirliliği; canlı yaşamı ve insan sağlığına zarar (herhangi iki). c) Coğrafya yer altı suyu, eğim, yerleşime uzaklık, rüzgâr yönü ve ulaşım katmanlarını çakıştırır; yer altı suyu yüksek, eğimi fazla ya da rüzgârla kokunun yerleşime ulaşacağı alanlar elenir; böylece su kirliliği ve koku riski en az, ulaşımı uygun alan belirlenir.",
   o:[[6,"İki beşerî neden (her biri 3)."],[6,"İki çevresel sonuç (her biri 3)."],[8,"Katman çakıştırma (3), elenen riskli alan örneği (3), uygun alan sonucu (2)."]]},
  {c:"2.1",p:15,k:"Bir web tabanlı CBS platformunda ortalama hanehalkı büyüklüğü bölge düzeyinde haritalanmıştır: sınıf sayısı 4, koyu renk büyük, açık renk küçük hanehalkı anlamına gelir. Veri tablosu (kişi, örnek veri):<table class=\"tbl\"><tr><th>Bölge</th><th>2008</th><th>2025</th></tr><tr><td>A</td><td>4,6</td><td>3,8</td></tr><tr><td>B</td><td>4,1</td><td>3,3</td></tr><tr><td>C</td><td>3,7</td><td>3,0</td></tr><tr><td>D</td><td>5,2</td><td>4,5</td></tr></table>",
   q:"a) 2025 haritasında en koyu ve en açık renkle gösterilecek bölgeleri yazınız (harita okuma). b) 2008–2025 arasındaki değişimi ve bölgeler arasındaki farkı yorumlayınız (çözümleme). c) Bu verilerden iki çıkarım yaparak bir planlama önerisi yazınız (çıkarım).",
   c2:"a) En koyu: D (4,5); en açık: C (3,0). b) Bütün bölgelerde hanehalkı büyüklüğü azalmıştır (yaklaşık 0,7–0,8 kişi); D hâlâ en büyük, C en küçük hanehalkına sahiptir; bölgeler arası fark sürmektedir. c) Hane küçüldükçe aynı nüfus için daha çok konut ve altyapı gerekir; C gibi küçük hanelerin çok olduğu bölgelerde küçük konut tipleri ve tek kişilik ya da yaşlı hanelere yönelik hizmetler; D'de ise büyük hanelere uygun konut, eğitim ve sağlık hizmeti planlanabilir (herhangi iki çıkarım ve bir öneri).",
   o:[[4,"En koyu D, en açık C (her biri 2)."],[5,"Genel azalma (2) ve bölgeler arası karşılaştırma (3)."],[6,"İki veriye dayalı çıkarım (her biri 2) ve bir planlama önerisi (2)."]]},
  {c:"3.1",p:15,k:"Ramsar Sözleşmesi 1971'de İran'ın Ramsar kentinde imzalanmış, Türkiye sözleşmeyi 1994'te onaylamıştır. Sözleşmeye göre doğal ya da yapay, sürekli ya da geçici, durgun ya da akar; tatlı, acı ya da tuzlu; gelgit hâlinde derinliği 6 metreyi geçmeyen bataklık, sazlık, ıslak çayır, turbalık ve sular sulak alandır. Türkiye'de 14 alan Ramsar listesindedir.",
   q:"a) Sulak alan nedir? Ramsar tanımına göre iki özelliğini yazınız. b) Türkiye'den üç Ramsar alanı yazınız. c) Sulak alanların korunmasının neden gerekli olduğunu iki gerekçeyle açıklayınız.",
   c2:"a) Bataklık, sazlık, ıslak çayır, turbalık ve gelgitte derinliği 6 m'yi geçmeyen sulardan oluşan alan; doğal ya da yapay, sürekli ya da geçici, durgun ya da akar, tatlı, acı ya da tuzlu olabilir (herhangi iki özellik). b) Kızılırmak Deltası, Gediz Deltası, Seyfe Gölü, Burdur Gölü, Kuyucuk Gölü, Manyas (Kuş) Gölü, Uluabat Gölü, Meke Gölü, Göksu Deltası, Akyatan Lagünü, Yumurtalık Lagünü, Sultan Sazlığı, Kızören Obruğu, Nemrut Kalderası (herhangi üç). c) Zengin biyoçeşitlilik ve göçmen kuşlar için üreme-beslenme alanı olmaları; suyu depolayıp süzmeleri ve taşkın etkisini azaltmaları (genel bilgi); balıkçılık ve ekoturizm gibi geçim kaynaklarına dayanak olmaları (herhangi iki).",
   o:[[5,"Sulak alan tanımı (3) ve iki özellik (2)."],[3,"Üç Ramsar alanı (her biri 1)."],[7,"İki gerekçe (4+3)."]]},
  {c:"3.1",p:15,k:"Üç akarsu ve ulaştıkları yerler: Amazon, Atlas Okyanusu'na; Çoruh, Karadeniz'e; Aras, Hazar Gölü'ne dökülür.",
   q:"a) Açık havza ve kapalı havza kavramlarını tanımlayınız. b) Verilen akarsuları bu iki gruba göre sınıflandırıp gerekçesini yazınız. c) Su bölümü çizgisi nedir?",
   c2:"a) Açık havza: suyunu denize ya da okyanusa ulaştırabilen akarsuların havzası. Kapalı havza: iklim, yeryüzü şekilleri gibi nedenlerle suyunu denize ulaştıramayan akarsuların havzası. b) Amazon ve Çoruh açık havzadır (okyanusa ve denize ulaşır); Aras kapalı havzadır (suyunu Hazar Gölü'ne boşaltır, denize ulaşmaz). c) Akarsu havzalarını birbirinden ayıran sınır çizgisidir.",
   o:[[6,"İki tanım (her biri 3)."],[6,"Amazon-Çoruh açık, Aras kapalı (her biri 1) ve gerekçe (3)."],[3,"Su bölümü çizgisi tanımı."]]},
  {c:"3.2",p:20,k:"Nil Nehri birçok ülkenin topraklarından geçen uzun bir akarsudur; Mısır, Sudan ve Etiyopya gibi ülkeler arasında enerji üretimi, sulama ve içme suyu konularında hem iş birliği hem anlaşmazlık potansiyeli bulunmaktadır. Türkiye'de doğan Fırat ve Dicle Suriye ve Irak'a, Lübnan'da doğan Asi ise Suriye üzerinden Türkiye'ye geçer.",
   q:"a) Sınıraşan su kavramını açıklayıp Türkiye'den üç örnek yazınız. b) Sınıraşan suların yönetiminin neden giderek daha stratejik bir önem kazandığını açıklayınız. c) Sınıraşan su ile sınır oluşturan su arasındaki farkı örnekle belirtiniz.",
   c2:"a) Bir ülkede doğup ya da bir ülkeden girip başka ülkelerin topraklarından geçen akarsu ya da su kaynağıdır; Türkiye'den Fırat, Dicle, Aras, Kura, Çoruh, Meriç, Asi (herhangi üç). b) Tatlı su azalırken kullanım baskısı artıyor; sulama, enerji ve içme suyu için hayati olan suyun paylaşımı ülkeler arasında siyasi ve ekonomik iş birliği gerektiriyor, çözülmezse gerilim ya da anlaşmazlık çıkabiliyor (Nil örneği). c) Sınıraşan su ülke sınırlarını geçip akar; sınır oluşturan su iki ülke arasında doğal sınır çizer (örneğin Meriç: Türkiye–Yunanistan; Aras; Arpaçay).",
   o:[[6,"Tanım (3) ve üç Türkiye örneği (3)."],[8,"Tatlı su azalması ve talep artışı (3); paylaşımın iş birliği ya da anlaşmazlık potansiyeli (3); siyasi ve ekonomik boyut ya da örnek (2)."],[6,"Sınır oluşturan su tanımı (3) ve örnek (3)."]]}
 ]}
];
