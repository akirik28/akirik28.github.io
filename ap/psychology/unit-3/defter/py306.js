/* Kitpath not defteri · py306 · 3.6 Yaşam Boyu Sosyal-Duygusal Gelişim
   Kaynak: AP Psychology CED (2024) Topic 3.6. Blok türleri: /ap/_kit/defter.js başı.
   Not: psikoseksüel (Freud) evre kuramı CED'de sınav dışıdır; defterde yalnızca Erikson'un psikososyal kuramı var. */
window.DEFTER = {
  slug: "py306",
  amac: "Bu konu insanın sosyal ve duygusal olarak yaşam boyu nasıl geliştiğini anlatıyor. Ekolojik sistemler, ebeveynlik stilleri, bağlanma (Harlow ve Ainsworth), akran ilişkileri, Erikson'un evreleri, kimlik durumları ve yetişkinlik dönemini öğreneceksin.",
  bolumler: [
    {
      baslik: "Ekolojik sistemler kuramı",
      kisa: "Birey, iç içe geçmiş beş sistemin etkisiyle gelişir.",
      bloklar: [
        { tip: "grafik", baslik: "Ece'nin çevresi: içten dışa beş sistem", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "macro", tip: "alan", renk: 3, noktalar: [[0.5, 1.4], [9.5, 1.4], [9.5, 9.8], [0.5, 9.8]], gizli: true },
            { id: "mL", tip: "yazi", x: 5, y: 9.3, metin: "Makrosistem", gizli: true },
            { id: "exo", tip: "alan", renk: 2, noktalar: [[1.4, 2.3], [8.6, 2.3], [8.6, 8.9], [1.4, 8.9]], gizli: true },
            { id: "eL", tip: "yazi", x: 5, y: 8.4, metin: "Egzosistem", gizli: true },
            { id: "meso", tip: "alan", renk: 1, noktalar: [[2.3, 3.2], [7.7, 3.2], [7.7, 8.0], [2.3, 8.0]], gizli: true },
            { id: "sL", tip: "yazi", x: 5, y: 7.55, metin: "Mezosistem", gizli: true },
            { id: "micro", tip: "alan", renk: 0, noktalar: [[3.2, 4.1], [6.8, 4.1], [6.8, 7.1], [3.2, 7.1]] },
            { id: "iL", tip: "yazi", x: 5, y: 6.6, metin: "Mikrosistem" },
            { id: "ece", tip: "yazi", x: 5, y: 5.2, metin: "ECE" },
            { id: "kron", tip: "ok", renk: 0, from: [0.8, 0.35], to: [9.2, 0.35], gizli: true },
            { id: "kL", tip: "yazi", x: 5, y: 0.95, metin: "Kronosistem: zaman, yaşam evresi", gizli: true }
          ],
          durumlar: [
            { metin: "Ortada Ece. En yakınındaki **mikrosistem**: onunla doğrudan teması olan aile, arkadaşlar, öğretmen." },
            { metin: "**Mezosistem**: bu gruplar arasındaki ilişkiler; örneğin annesinin öğretmeniyle konuşması.", goster: ["meso", "sL"] },
            { metin: "**Egzosistem**: Ece'nin içinde bulunmadığı ama onu dolaylı etkileyen şeyler; örneğin babasının işyerinin çalışma saatleri.", goster: ["exo", "eL"] },
            { metin: "**Makrosistem**: toplumun kültürü, değerleri ve büyük olaylar; örneğin üniversite sınavına verilen önem.", goster: ["macro", "mL"] },
            { metin: "**Kronosistem**: zaman boyutu. Ece'nin yaşam evresi (ergenlik) ve yaşadığı dönem her şeyi değiştirir.", goster: ["kron", "kL"] }
          ] },
        { tip: "tablo", baslik: "Her sistem için bir Ece örneği", head: ["Sistem", "Anlamı", "Örnek"], rows: [
            ["*Microsystem*", "Bireyle doğrudan teması olan gruplar", "Ailesi, sınıf arkadaşları, öğretmeni"],
            ["*Mesosystem*", "Mikrosistem grupları arasındaki ilişkiler", "Annenin veli toplantısında öğretmenle konuşması"],
            ["*Exosystem*", "Bireyi dolaylı etkileyen, bireyin içinde olmadığı etkenler", "Babasının iş saatinin değişmesi nedeniyle akşamları birlikte olamamaları"],
            ["*Macrosystem*", "Kültürel olaylar ve değerler", "Türkiye'de üniversite sınavına verilen önem"],
            ["*Chronosystem*", "Bireyin içinde bulunduğu yaşam evresi ve dönem", "Ece'nin ergenliğe girmesi"]
          ] },
        { tip: "tuzak", metin: "Mezosistem ile egzosistemi ayırt etmenin ipucu: birey o ortamın içinde mi?", yanlis: "Annenin işyeri Ece'nin mezosistemidir.", dogru: "==Mezosistem== mikrosistem öğeleri arasındaki ilişkidir (anne–öğretmen). Ece o işyerinde yoktur ama kararlarından etkilenir; bu ==egzosistemdir==." }
      ]
    },
    {
      baslik: "Ebeveynlik stilleri",
      kisa: "Ebeveyn sıcaklığı ve kontrolü, üç temel stili ayırt eder: katı, dengeli, serbest.",
      bloklar: [
        { tip: "tablo", baslik: "Sıcaklık ve kontrole göre stiller", head: ["", "Yüksek kontrol (kural)", "Düşük kontrol (kural)"], rows: [
            ["Yüksek sıcaklık", "*Authoritative*: gerekçeli kural, dinler, destekler", "*Permissive*: sıcak ama az kural ve sınır"],
            ["Düşük sıcaklık", "*Authoritarian*: katı kural, tartışmaya kapalı", "*Neglectful*: ilgisiz ve kontrolsüz (CED listesinde yok, tabloyu tamamlar)"]
          ] },
        { tip: "ikili", sol: { ikon: "🔒", baslik: "*Authoritarian*", maddeler: ["Katı kural, itaat bekler", "“Çünkü ben öyle diyorum.” Açıklama ve dinleme az"] },
          sag: { ikon: "⚖️", baslik: "*Authoritative*", maddeler: ["Net kural ama gerekçeli ve esnek", "Hem sıcak hem sınır koyucu; çocuğu dinler"] },
          oyun: [
            { metin: "“Telefonu veriyorsun, tartışma yok, çünkü ben öyle diyorum.”", cevap: "sol", neden: "Gerekçesiz, sorgulanmaz kural: *authoritarian*." },
            { metin: "“Telefonu 22.00'de teslim et; uykunun sınav başarına etkisini konuşmuştuk. İtirazın varsa dinlerim.”", cevap: "sag", neden: "Net kural, gerekçe ve dinleme: *authoritative*." },
            { metin: "Kural çiğnenince sert ceza veriliyor, ama nedeni anlatılmıyor ve çocuğun sözü dinlenmiyor.", cevap: "sol", neden: "Katılık, açıklama yok: *authoritarian*." },
            { metin: "“Kuralı bozdun, bu yüzden bir hafta oyun yok. Neden böyle yaptığını anlat, gerekirse kuralı birlikte yeniden konuşuruz.”", cevap: "sag", neden: "Net sonuç ve sıcak, açık iletişim: *authoritative*." }
          ] },
        { tip: "tuzak", metin: "Stiller ve çıktılar arasındaki ilişki çoğunlukla korelasyoneldir ve kültürden kültüre değişir.", yanlis: "*Authoritarian* ebeveynlik her kültürde aynı olumsuz sonuçları doğurur.", dogru: "Stillerin çocuklar ve ebeveynler üzerindeki sonuçları ==kültüre göre farklılık gösterir==; çocuğun mizacı da ebeveyni etkileyebilir. Çıkarım ilişkiyle sınırlı kalmalıdır." }
      ]
    },
    {
      baslik: "Harlow: karnını doyuran mı, sarılan mı?",
      kisa: "Yavru maymunlar, sarılabildikleri yumuşak anneye bağlandı; temas beslenmeden önemliydi.",
      bloklar: [
        { tip: "adimlar", baslik: "Harlow'un maymun deneyi", adimlar: [
            { baslik: "Düzenek", metin: "Yavru maymunlara iki yapay anne verilir: biri tel, süt veren biberonlu; diğeri yumuşak bezle kaplı, biberonsuz." },
            { baslik: "Gözlem", metin: "Yavrular zamanlarının çoğunu bez anneye sarılarak geçirdi; tel anneye yalnızca beslenmek için gitti." },
            { baslik: "Korku testi", metin: "Korkutucu bir nesne girince yavrular bez anneye koştu ve rahatladı." },
            { baslik: "Sonuç", metin: "Bağlanma yalnızca beslenmeye dayanmaz: ==*contact comfort*== (temas rahatlığı) belirleyicidir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🤗", terim: "Attachment", tr: "bağlanma", tanim: "Bebek ile bakım veren arasındaki duygusal bağ.", ornek: "Bebeğin annesine ya da babasına sarılarak güven bulması." },
            { ikon: "😢", terim: "Separation anxiety", tr: "ayrılık kaygısı", tanim: "Çocuğun bakım verenden ayrılınca ya da yabancı biri yanındayken belirgin kaygı ve korku göstermesi.", ornek: "Anne odadan çıkınca bebeğin ağlaması." },
            { ikon: "🌡️", terim: "Temperament", tr: "mizaç", tanim: "Doğuştan gelen duygusal tepki biçimi. Çocuğun bakım verene nasıl bağlandığıyla ilişkilidir.", ornek: "Kolay sakinleşen mi, çabuk huysuzlanan bir bebek mi." }
          ] },
        { tip: "tuzak", metin: "“Anne bebeğini besler, bu yüzden bebek ona bağlanır” fikri sezgisel gelir ama Harlow'un bulgusuyla uyuşmaz.", yanlis: "Bebek, kendisini besleyen kişiye bağlanır.", dogru: "Harlow'un maymunlarında bağlanma ==besleyen tel anneye değil, sarılınan bez anneye== gelişti: ==temas rahatlığı== beslenmeden daha önemliydi." }
      ]
    },
    {
      baslik: "Ainsworth: bağlanma stilleri",
      kisa: "*Strange Situation* bebekleri güvenli ya da güvensiz bağlanmış olarak ayırır.",
      bloklar: [
        { tip: "adimlar", baslik: "*Strange Situation* (Ainsworth)", adimlar: [
            { baslik: "1 · Birlikte", metin: "Anne ve bebek bir odada oyuncaklarla oynar." },
            { baslik: "2 · Yabancı", metin: "Bir yabancı odaya girer; sonra anne çıkar." },
            { baslik: "3 · Ayrılık", metin: "Bebek yabancıyla (ya da yalnız) kalır; tepkisi gözlenir." },
            { baslik: "4 · Kavuşma", metin: "Anne döner. Asıl bilgi, bebeğin ==kavuşma tepkisinde== saklıdır." }
          ] },
        { tip: "tablo", baslik: "Dört bağlanma stili", head: ["Stil", "Anne ayrılınca", "Anne dönünce"], rows: [
            ["*Secure* (güvenli)", "Üzülür ama annesine güvenir", "Yaklaşır, rahatlar, oyuna döner"],
            ["*Insecure: avoidant* (kaçıngan)", "Az tepki gösterir", "Annesini görmezden gelir ya da kaçınır"],
            ["*Insecure: anxious* (kaygılı)", "Aşırı sıkılır", "Hem yaklaşır hem direnir; zor sakinleşir"],
            ["*Insecure: disorganized* (örgütsüz)", "Kafası karışık tepki verir", "Çelişkili, tutarsız davranır (yaklaşıp donma gibi)"]
          ], not: "Güvenli bağlanma birçok kültürde en yaygın stildir, ama stillerin dağılımı kültürler arasında değişir." },
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "*Secure*", maddeler: ["Bakım veren “güvenli üs”tür", "Kavuşmada rahatlama ve yakınlık"] },
          sag: { ikon: "⚠️", baslik: "*Insecure*", maddeler: ["Kaçınma, direnç ya da tutarsızlık", "Üç alt tür: avoidant, anxious, disorganized"] },
          oyun: [
            { metin: "Anne dönünce bebek koşup sarılıyor, birkaç dakika sonra yeniden oynamaya başlıyor.", cevap: "sol", neden: "Yakınlık ve rahatlama: *secure*." },
            { metin: "Anne dönünce bebek ona bakmıyor, oyuncağıyla ilgilenmeye devam ediyor.", cevap: "sag", neden: "Kaçınma: *insecure (avoidant)*." },
            { metin: "Bebek anneye hem uzanıyor hem de onu itiyor, uzun süre sakinleşemiyor.", cevap: "sag", neden: "Çelişkili tepki ve zor sakinleşme: *insecure (anxious)*." },
            { metin: "Annesi çıkınca ağlıyor ama döndüğünde kucağına gelip çabuk sakinleşiyor.", cevap: "sol", neden: "Ayrılıkta üzülme normaldir; kavuşmada rahatlama *secure*." }
          ] },
        { tip: "tuzak", metin: "“Ağlayan bebek güvensiz bağlanmıştır” akıl yürütmesi yanlıştır; ayrılıkta ağlamak güvenli bağlananlarda da görülür.", yanlis: "Bağlanma stili yalnızca ebeveynin davranışına bağlıdır ve her kültürde aynıdır.", dogru: "==Mizaç== da bağlanmayla ilişkilidir; stil dağılımı ==kültüre göre değişir==. Ayrım, ağlamaya değil ==kavuşma tepkisine== bakılarak yapılır." }
      ]
    },
    {
      baslik: "Akran ilişkileri",
      kisa: "Oyun biçimleri çocuklukta, akranlara bağımlılık ergenlikte artar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧸", terim: "Parallel play", tr: "paralel oyun", tanim: "Çocukların yan yana ama birbirleriyle ilgilenmeden oynaması.", ornek: "İki çocuk aynı halıda ayrı ayrı blok dizer." },
            { ikon: "🎭", terim: "Pretend play", tr: "hayal oyunu", tanim: "Çocukların rol yapıp nesnelere hayali anlamlar yüklemesi; çoğunlukla başkalarıyla birlikte oynanır.", ornek: "Birlikte “market” ya da “doktorculuk” oynamak." },
            { ikon: "👥", terim: "Imaginary audience", tr: "hayali seyirci", tanim: "Ergenin herkesin kendisini izleyip değerlendirdiğine inanması.", ornek: "“Herkes sivilceme bakıyor, okula gitmem.”" },
            { ikon: "🦸", terim: "Personal fable", tr: "kişisel masal", tanim: "Ergenin kendi yaşantısının eşsiz olduğuna ve kendisinin kötü şeylerden korunduğuna inanması.", ornek: "“Hızlı sürsem bile kaza yapmam, o başkalarının başına gelir.”" }
          ] },
        { tip: "ikili", sol: { ikon: "👥", baslik: "*Imaginary audience*", maddeler: ["“Herkes beni izliyor ve yargılıyor”", "Dikkat odağı olduğu hissi"] },
          sag: { ikon: "🦸", baslik: "*Personal fable*", maddeler: ["“Benimki eşsiz, bana bir şey olmaz”", "Eşsizlik ve dokunulmazlık inancı"] },
          oyun: [
            { metin: "“Yeni kesilmiş saçıma bütün sınıf bakacak, yarın okula gitmeyeceğim.”", cevap: "sol", neden: "Herkesin kendisini izlediğine inanıyor: *imaginary audience*." },
            { metin: "“Kimse beni anlayamaz; benim yaşadığım acı hiç kimsenin yaşadığına benzemez.”", cevap: "sag", neden: "Yaşantının eşsizliği: *personal fable*." },
            { metin: "“Sahneye çıkmasam bile herkes ne giydiğimi görüp yorum yapacak.”", cevap: "sol", neden: "Hayali bir seyirci kitlesi: *imaginary audience*." },
            { metin: "“Sigara başkalarına zarar verir ama bana vermez.”", cevap: "sag", neden: "Dokunulmazlık inancı: *personal fable*." }
          ] }
      ]
    },
    {
      baslik: "Erikson: sekiz psikososyal evre",
      kisa: "Her evrede çözülmesi gereken bir psikososyal çatışma vardır.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "Bebeklik (0–1)", baslik: "*Trust vs. mistrust*", metin: "Güven ve güvensizlik: tutarlı bakım güveni besler." },
            { tarih: "Yürümeye başlama (1–3)", baslik: "*Autonomy vs. shame and doubt*", metin: "Özerklik ve utanç/şüphe: “ben yapacağım!”" },
            { tarih: "Okul öncesi (3–6)", baslik: "*Initiative vs. guilt*", metin: "Girişim ve suçluluk: plan yapmak, başlatmak." },
            { tarih: "İlkokul (6–12)", baslik: "*Industry vs. inferiority*", metin: "Çalışkanlık ve aşağılık duygusu: beceri kazanmak." },
            { tarih: "Ergenlik", baslik: "*Identity vs. role confusion*", metin: "Kimlik ve rol karmaşası: “ben kimim?”" },
            { tarih: "Genç yetişkinlik", baslik: "*Intimacy vs. isolation*", metin: "Yakınlık ve yalıtılmışlık: derin bağlar kurmak." },
            { tarih: "Orta yetişkinlik", baslik: "*Generativity vs. stagnation*", metin: "Üretkenlik ve durgunluk: topluma ve yeni kuşağa katkı." },
            { tarih: "İleri yetişkinlik", baslik: "*Integrity vs. despair*", metin: "Bütünlük ve umutsuzluk: hayatına dönüp bakıp anlam bulmak." }
          ] },
        { tip: "tuzak", metin: "Erikson'un kuramı Freud'un psikoseksüel kuramının yeniden yorumlanmış halidir; ama psikoseksüel evreler sınav kapsamı dışındadır.", yanlis: "Erikson'a göre kişilik çocuklukta tamamlanır.", dogru: "Sekiz evre ==yaşam boyu== sürer ve her evre bir ==psikososyal çatışmayla== tanımlanır; çatışmanın nasıl çözüldüğü sonraki evreleri etkiler." }
      ]
    },
    {
      baslik: "Kimlik gelişimi: dört kimlik durumu",
      kisa: "Kimlik, keşfetme ve bağlanma kombinasyonuna göre dört durumda olabilir.",
      bloklar: [
        { tip: "tablo", baslik: "Kimlik durumları (Marcia)", head: ["", "Bağlılık var", "Bağlılık yok"], rows: [
            ["Keşif yaptı / yapıyor", "*Achievement*: seçenekleri değerlendirdi ve bağlandı", "*Moratorium*: seçenekleri keşfediyor, henüz karar vermedi"],
            ["Keşif yok", "*Foreclosure*: keşfetmeden, çoğunlukla ailenin çizdiği yola bağlandı", "*Diffusion*: ne keşfediyor ne bağlanıyor"]
          ] },
        { tip: "ornek", baslik: "Dört arkadaş, dört kimlik durumu", durum: "Dört 17 yaşındaki arkadaşa “üniversitede ne okuyacaksın?” sorusu soruluyor.",
          adimlar: ["Ece: “Annem hekim, ben de hekim olacağım; başka bir şey düşünmedim.” Keşif yok, bağlılık var: *foreclosure*.", "Can: “Hukuk mu, tasarım mı, mühendislik mi? Staj yapıyorum, hâlâ kararsızım.” Keşif sürüyor, bağlılık yok: *moratorium*.", "Mert: “Bilmiyorum, düşünmedim de, umurumda değil.” Ne keşif ne bağlılık: *diffusion*.", "Selin: “Yazılım ve müziği denedim, yazılımı seçtim ve bu yönde çalışıyorum.” Keşif yaptı ve bağlandı: *achievement*."],
          sonuc: "Ayrımı iki soru yapar: ==keşfetti mi? bağlandı mı?==" },
        { tip: "harita", merkez: "Kimliğin alanları", dallar: [
            { baslik: "Irk ve etnik kimlik", alt: "Hangi topluluğa ait hissediyorum?" },
            { baslik: "Cinsiyet kimliği ve cinsel yönelim", alt: "Kendimi nasıl tanımlıyorum?" },
            { baslik: "Dinî kimlik", alt: "İnançlarım ve değerlerim" },
            { baslik: "Mesleki kimlik", alt: "Ne yapmak istiyorum?" },
            { baslik: "Ailevi kimlik", alt: "Ailemdeki yerim" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Possible selves", tr: "olası benlikler", tanim: "Ergenin gelecekte olabileceği ya da olmaktan korktuğu kendi imgeleri. Kimlik, bu seçenekleri düşünerek oluşur.", ornek: "“Hekim Ece” ya da “işsiz kalan Ece” olarak kendini hayal etmek." }
          ] }
      ]
    },
    {
      baslik: "Yetişkinlik: toplumsal saat, yetişkinliğe geçiş, bağlar",
      kisa: "Kültür yetişkinliğin ne zaman başladığını belirler; çocukluk yaşantıları ilişkileri etkiler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⏰", terim: "Social clock", tr: "toplumsal saat", tanim: "Kültürün, evlenme, iş ve çocuk sahibi olma gibi büyük yaşam olayları için belirlediği “doğru zaman” beklentisi.", ornek: "“Otuzuna gelmeden evlen, kırkına gelmeden ev al.”" },
            { ikon: "🌉", terim: "Emerging adulthood", tr: "beliren yetişkinlik", tanim: "Bazı kültürlerde ergenlik ile yetişkinlik arasında uzayan geçiş dönemi.", ornek: "Üniversite sonrası aileden ayrı yaşama ama henüz tam bağımsız olmama." },
            { ikon: "💔", terim: "Adverse childhood experiences (ACEs)", tr: "olumsuz çocukluk yaşantıları", tanim: "İstismar, ihmal ya da aile içi zorluk gibi çocukluktaki stresli yaşantılar. Ne sayıldığı ve etkisi sosyokültürel olarak değişir.", ornek: "Şiddete tanık olmak, ihmal edilmek." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🏠", baslik: "Aile ve aile benzeri bağlar", metin: "Yetişkinler karşılıklı destek ve bakım sağlayan aileler ya da aile benzeri ilişkiler kurar." },
            { ikon: "🔁", baslik: "Çocukluk bağlanması sürer", metin: "Çocukluktaki bağlanma stili, yetişkinlerin başka yetişkinlerle kurduğu bağları etkileyebilir." },
            { ikon: "🌱", baslik: "ACE'ler ilişkileri etkiler", metin: "Olumsuz çocukluk yaşantıları yaşam boyu kurulan ilişkileri etkileyebilir." }
          ] },
        { tip: "tuzak", metin: "ACE ve bağlanma stili, yazgı değil etkilerdir.", yanlis: "Çocuklukta güvensiz bağlanan ya da ACE yaşayan herkes yetişkinlikte sorunlu ilişkiler kurar.", dogru: "Çocukluk yaşantıları ilişkileri ==etkileyebilir==, ama kesin belirlemez; destekleyici ilişkiler koruyucudur. ACE'nin tanımı ve etkisi ==sosyokültürel olarak== değişir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Ekolojik sistemler: mikro (doğrudan çevre), mezo (mikro öğeleri arası ilişki), egzo (dolaylı etkenler), makro (kültür), kronosistem (zaman ve yaşam evresi).",
            "Ebeveynlik: *authoritarian* (katı), *authoritative* (sıcak ve net kural), *permissive* (sıcak ama kuralsız); etkileri kültüre göre değişir.",
            "Harlow: yavru maymunlar sarılabildikleri bez anneye bağlandı: *contact comfort* beslenmeden önemlidir.",
            "Ainsworth: *secure* ya da *insecure* (*avoidant*, *anxious*, *disorganized*) bağlanma; mizaç ve kültür etkili; ayrım kavuşma tepkisiyle yapılır.",
            "Akranlar: paralel ve hayal oyunu; ergenlikte *imaginary audience* ve *personal fable*.",
            "Erikson'un sekiz evresi: güven, özerklik, girişim, çalışkanlık, kimlik, yakınlık, üretkenlik, bütünlük.",
            "Kimlik durumları: *achievement*, *foreclosure*, *moratorium*, *diffusion* (keşif ve bağlılığa göre).",
            "*Social clock* ve *emerging adulthood* kültüre göre değişir; çocukluk bağlanması ve ACE'ler yetişkin ilişkilerini etkileyebilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Zeynep'in annesinin çalıştığı şirket vardiya düzenini değiştiriyor ve anne artık akşamları çalışıyor; Zeynep annesiyle çok daha az vakit geçiriyor. Zeynep bu değişikliğin alındığı toplantıda yoktu. Bu etken Bronfenbrenner'in hangi sistemine örnektir?",
      opts: ["*Microsystem*", "*Mesosystem*", "*Exosystem*", "*Macrosystem*"],
      a: 2,
      why: "Zeynep o ortamın içinde değil ama kararından dolaylı olarak etkileniyor: egzosistem. En çekici yanlış şık B: mezosistem, mikrosistem öğeleri (anne–öğretmen gibi) arasındaki ilişkidir; işyeri Zeynep'in mikrosisteminde değildir." },
    { q: "Bir anne ya da baba şöyle diyor: “Odanı toplamanı istiyorum, çünkü ortak alanın düzenli olması önemli. Zor geliyorsa nedenini anlat, birlikte çözüm bulalım; ama kural değişmez.” Bu ebeveynlik stili aşağıdakilerden hangisidir?",
      opts: ["*Authoritative*", "*Authoritarian*", "*Permissive*", "*Neglectful*"],
      a: 0,
      why: "Net kural, gerekçe ve çocuğu dinleme bir arada olduğu için *authoritative* stildir. En çekici yanlış şık B: *authoritarian* ebeveyn de kural koyar ama gerekçesiz ve dinlemeden." },
    { q: "Tabloda üç bebeğin *Strange Situation* gözlemleri verilmiştir. X, Y ve Z bebekleri sırasıyla hangi bağlanma stillerini gösteriyor?",
      fig: { type: "table", caption: "Gözlemler", head: ["Bebek", "Anne çıkarken", "Anne dönünce"], rows: [["X", "Ağlıyor", "Yaklaşıyor, kucakta çabuk sakinleşiyor"], ["Y", "Az tepki veriyor", "Annesine bakmıyor, oyuncağa dönüyor"], ["Z", "Çok ağlıyor", "Kucağa gelip itiyor, zor sakinleşiyor"]] },
      opts: ["*Anxious*, *secure*, *avoidant*", "*Avoidant*, *anxious*, *secure*", "*Secure*, *anxious*, *avoidant*", "*Secure*, *avoidant*, *anxious*"],
      a: 3,
      why: "Kavuşmada yaklaşıp sakinleşen bebek güvenli (*secure*); annesini görmezden gelen kaçıngan (*avoidant*); hem yaklaşıp hem direnen ve zor sakinleşen kaygılı (*anxious*) bağlanmıştır. En çekici yanlış şık C: Y ve Z'nin sırası ters; Y az tepki veren, annesini görmezden gelen bebektir." },
    { q: "Harlow'un maymun deneylerinde yavrular, süt veren tel anneye değil yumuşak bezle kaplı anneye sarıldı. Bu sonuç aşağıdakilerden hangisini en iyi destekler?",
      opts: ["Bağlanma yalnızca beslenmeyle oluşur", "Bağlanmada beslenmeden çok *contact comfort* (temas rahatlığı) önemlidir", "Yavrular bakım verene hiç bağlanmaz", "Bağlanma stili mizaçtan bağımsızdır"],
      a: 1,
      why: "Yavrular zamanlarının çoğunu bez anneyle geçirdi ve korkunca ona koştu: temas rahatlığı beslenmeden daha belirleyiciydi. En çekici yanlış şık A: bu sezgisel açıklama tam tersi sonuçla çürütülmüştür." },
    { q: "Elif, ailesinin hekimlik mesleğini hiç sorgulamadan ve başka bir seçenek düşünmeden “ben de hekim olacağım” diyor. Elif Marcia'nın hangi kimlik durumundadır?",
      opts: ["*Identity diffusion*", "*Moratorium*", "*Foreclosure*", "*Identity achievement*"],
      a: 2,
      why: "Keşfetmeden, çoğunlukla ailenin çizdiği yola bağlanmak *foreclosure*dur. En çekici yanlış şık D: *achievement* için seçenekleri keşfetmiş olmak gerekir; Elif keşif yapmamıştır." }
  ]
};
