/* Kitora not defteri · en302 · 3.2 Olay Örgüsü
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye): öğretmenin bölüm bölüm tartışma soruları (Byrd) ve çalışma rehberi vurguları (Akyürek) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı.
   Telif: romandan yalnız 1 kısa alıntı (Ch 26, ≤10 kelime); gerisi kendi cümlelerimizle. Hassas sahneler (Ch 13, Ch 24) olgusal ve ayrıntısız anlatılır. */
window.DEFTER = {
  slug: "en302",
  amac: "Bu konu romanın 26 bölümlük olay örgüsünü anlatıyor: Holden'ın Cumartesi'den Pazartesi'ye Pencey'den New York'a, oradan Phoebe'ye uzanan yolculuğu. Olayları bölüm numaralarıyla, öğretmenin tartışma vurgularıyla ve İngilizce özet kalıplarıyla öğreneceksin.",
  bolumler: [
    {
      baslik: "Bir bakışta olay örgüsü: üç gün, üç mekân",
      kisa: "Cumartesi Pencey'de, gece ve Pazar New York'ta, Pazartesi Phoebe'yle biter.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "Cumartesi öğleden sonra · Ch 1–4", baslik: "Pencey Prep'te son gün", metin: "Holden dört dersten kalmıştır; öğretmeni Mr Spencer'a veda eder, Ackley ve Stradlater ile konuşur." },
            { tarih: "Cumartesi akşamı · Ch 5–8", baslik: "Kompozisyon, kavga, ayrılış", metin: "Stradlater ile kavga eder ve geceyi beklemeden okuldan ayrılır; trenle New York'a gider." },
            { tarih: "Cumartesi gecesi · Ch 9–14", baslik: "New York'ta ilk gece", metin: "Otele yerleşir, gece kulüplerine gider; yalnızlığı artar." },
            { tarih: "Pazar · Ch 15–20", baslik: "Rahibeler, Sally, Carl Luce, Central Park", metin: "Gün boyunca birçok kişiyle bağ kurmaya çalışır; hepsi yarım kalır." },
            { tarih: "Pazar gecesi · Ch 21–24", baslik: "Phoebe ve Mr Antolini", metin: "Gizlice eve girip kız kardeşiyle konuşur; sonra eski öğretmeninin evinde kalır." },
            { tarih: "Pazartesi · Ch 25–26", baslik: "Müze, atlıkarınca, son", metin: "Phoebe'yle buluşur; kitap, Holden'ın dinlenme evinden anlattığı kapanış bölümüyle biter." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧵", terim: "Plot", tr: "olay örgüsü", tanim: "Olayların neden-sonuç zinciriyle sıralanması. Romanda çizgi basittir: bir yolculuk ve dönüş.", ornek: "Pencey'den New York'a, oradan Phoebe'ye." },
            { ikon: "📍", terim: "Setting", tr: "zaman ve mekân", tanim: "Olayların geçtiği yer ve zaman. Burada: bir yatılı okul, New York'un otelleri, parkı ve müzesi; 1940'ların sonunda üç gün.", ornek: "Central Park'ın soğuk gölü." },
            { ikon: "⚔️", terim: "Conflict", tr: "çatışma", tanim: "Dış çatışma (Holden ile okul, yetişkin dünyası) ve iç çatışma (Holden ile kendi yası ve korkuları). Roman asıl olarak iç çatışmayı işler.", ornek: "Allie'nin ölümüyle yüzleşememesi." }
          ] },
        { tip: "grafik", baslik: "Ek bilgi (öğretmen belgesinde yok): gerilim eğrisi (bir yorum)", xlabel: "Hikâyenin ilerleyişi", ylabel: "Gerilim", xmax: 10, ymax: 7,
          xticks: [{ v: 0.7, label: "Pencey" }, { v: 2, label: "Kavga" }, { v: 3.3, label: "Gece" }, { v: 4.6, label: "Pazar" }, { v: 6, label: "Phoebe" }, { v: 7, label: "Antolini" }, { v: 8.2, label: "Müze" }, { v: 9.4, label: "Son" }],
          yticks: [{ v: 1.5, label: "düşük" }, { v: 5.5, label: "yüksek" }],
          ogeler: [
            { id: "c1", tip: "egri", renk: 1, noktalar: [[0.7, 1.5], [1.35, 2.2], [2, 3]], gizli: true },
            { id: "t1", tip: "yazi", x: 1.3, y: 3.6, metin: "*Exposition*", gizli: true },
            { id: "c2", tip: "egri", renk: 1, noktalar: [[2, 3], [2.65, 3.5], [3.3, 4], [3.95, 4.3], [4.6, 4.5]], gizli: true },
            { id: "t2", tip: "yazi", x: 3.3, y: 5, metin: "*Rising action*", gizli: true },
            { id: "c3", tip: "egri", renk: 2, noktalar: [[4.6, 4.5], [5.3, 3.6], [6, 3], [6.5, 4.2], [7, 5.5]], gizli: true },
            { id: "k", tip: "nokta", x: 7, y: 5.5, etiket: "*Climax*", gizli: true },
            { id: "c4", tip: "egri", renk: 3, noktalar: [[7, 5.5], [7.6, 4], [8.2, 2.5]], gizli: true },
            { id: "t4", tip: "yazi", x: 8.4, y: 4.2, metin: "*Falling action*", gizli: true },
            { id: "c5", tip: "egri", renk: 3, noktalar: [[8.2, 2.5], [8.8, 1.8], [9.4, 1.5]], gizli: true },
            { id: "t5", tip: "yazi", x: 9.3, y: 0.8, metin: "*Resolution*", gizli: true }
          ],
          durumlar: [
            { metin: "Pencey bölümü ==*exposition*==: Holden'ı, sorunlarını ve ayrılış kararını tanırız.", goster: ["c1", "t1"] },
            { metin: "New York'ta ==*rising action*==: her yeni deneme Holden'ı biraz daha yalnızlaştırır, gerilim artar.", goster: ["c2", "t2"] },
            { metin: "Phoebe sahnesi gerilimi bir an düşürür; Antolini gecesi ise birçok okumada ==*climax*== (kırılma noktası) sayılır.", goster: ["c3", "k"] },
            { metin: "Sabah gerilim düşer: ==*falling action*==. Holden yorgun ve şaşkındır.", goster: ["c4", "t4"] },
            { metin: "Müze ve atlıkarıncada sakinleşme gelir; ==*resolution*== dinlenme evi bölümüyle kapanır. Bu eğri bir yorumdur: kırılma noktası sınıfta tartışılabilir.", goster: ["c5", "t5"] }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: olayı özetle", head: ["Amaç", "Kalıp"], rows: [
            ["Başlangıç", "*The novel begins as Holden, a sixteen-year-old, is about to leave Pencey Prep.*"],
            ["Sıra", "*After…, Holden travels to… where he…*"],
            ["Sonuç", "*By the end of the novel, Holden is telling his story from a rest home.*"]
          ], not: "Özet yazarken ==*literary present*== kullan (*Holden leaves…*); geçmiş olaya dönersen geçmiş, ileride olacaklara gelecek zaman olabilir." }
      ]
    },
    {
      baslik: "Pencey Prep: ayrılış (Ch 1–8)",
      kisa: "Holden okuldan atılır, kavga eder ve geceyi beklemeden ayrılır.",
      bloklar: [
        { tip: "tablo", baslik: "Bölüm bölüm: ne olur, öğretmen neyi tartıştırır?", head: ["Bölüm", "Olay", "Tartışma odağı"], rows: [
            ["Ch 1", "Holden ayrılışını, ailesini ve D.B.'yi anlatır.", "Ailesiyle ilişkisi; D.B.'nin Hollywood'da yazarlığı ve Holden'ın saygı kaybı; yalnızlık; *broad generalization*; vedalaşma (*good-bye*)."],
            ["Ch 2", "Mr Spencer'ı ziyaret.", "Spencer'ın uyarısı; *phony* tanımı; Holden *paradoxical* (hem olgun hem çocuksu)."],
            ["Ch 3", "Ackley; kırmızı avcı şapkası.", "Yalan; şapkanın işlevi; dine tutum; Ackley."],
            ["Ch 4", "Stradlater, Jane Gallagher.", "Stradlater *secret slob* (dışarıdan temiz, içeriden dağınık): Holden ironiyi çabuk fark eder; Jane neyi simgeler?"],
            ["Ch 5", "Stradlater randevuya gider; kompozisyon.", "Holden'ın kar topunu arabaya atmaması; Allie'nin ölümünün etkisi; Allie'nin eldiveni; kırılgan duygusal durum."],
            ["Ch 6", "Stradlater döner; kavga.", "Jane'in kralları arka sıraya dizmesi (*kings in the back row*); kavganın nedeni."],
            ["Ch 7", "Holden ayrılmaya karar verir.", "Manastıra gitme düşüncesi; paten ve valiz ayrıntısı; *euphemism* (cinsellik için örtmece)."],
            ["Ch 8", "Tren; Mrs Morrow.", "Mrs Morrow'a yalan (uydurma isim, oğlunu övme); paraya bakışı."]
          ], not: "Tablodaki tartışma odakları, öğretmenin Ch bazlı sorularından alındı; her satır için bir cümlelik İngilizce cevap hazırla." },
        { tip: "tuzak", baslik: "Atılma sebebi", metin: "Holden kavgadan önce zaten dört dersten kalmıştır. Yalnızca İngilizcede iyidir. Kavga, ayrılışını hızlandırır.", yanlis: "Holden kavga ettiği için okuldan atıldı.", dogru: "Holden notları yüzünden atılıyor; kavga ayrılışını yalnızca hızlandırıyor. Yaz: *He is expelled because he fails four of his five classes.*" },
        { tip: "tablo", baslik: "Sınavda böyle yaz: neden-sonuç", head: ["Amaç", "Kalıp"], rows: [
            ["Neden", "*Because he fails most of his classes, Holden…*"],
            ["Sonuç", "*As a result of the fight, Holden decides to leave Pencey that night.*"],
            ["Karakter", "*His attitude toward Ackley and Stradlater shows that Holden…*"]
          ] }
      ]
    },
    {
      baslik: "New York: gece ve Pazar sabahı (Ch 9–16)",
      kisa: "Otel, kulüpler ve yarım kalan karşılaşmalar; sabah rahibeler ve bir plak.",
      bloklar: [
        { tip: "tablo", baslik: "Bölüm bölüm: mekân, olay ve tartışma odağı", head: ["Bölüm", "Ne olur?", "Tartışma odağı"], rows: [
            ["Ch 9", "Edmont Hotel; Faith Cavendish'e telefon.", "Otelde gördükleri karşısındaki kafa karışıklığı; kendi davranışının farkında oluşu; sahte isim kullanımı."],
            ["Ch 10", "Gece kulübü; Phoebe anlatılır.", "Phoebe'nin Holden için önemi; Jim Steele adının uydurulması; Marty'ye yalan."],
            ["Ch 11", "Jane ve Phoebe üzerine düşünceler.", "İkisinin ortak özellikleri (içtenlik, masumiyet)."],
            ["Ch 12", "Taksi şoförü Horwitz.", "Ördekler kışın nereye gider? İnsanların hep yanlış şeylere alkış tutması."],
            ["Ch 13", "Sunny ve asansörcü Maurice (hassas sahne, yalnızca olgular).", "Holden genç kadına dokunmaz; yalnızlık ve çaresizlik; sahte isim = güvensizlik; dile hassasiyet."],
            ["Ch 14", "Gecenin sonu.", "Din; “ölüyorum” korkusu."],
            ["Ch 15", "Pazar sabahı; iki rahibe.", "Sally Hayes'te canını sıkan şeyler; valizler; rahibelerle İngilizce öğretmenliği sohbeti; Holden'ın Mercutio'yu sevmesi."],
            ["Ch 16", "Phoebe için plak (*Little Shirley Beans*); sokakta bir çocuk.", "Çocuklara tepkisi; şarkıyı *meet* yerine *catch* diye değiştirmesi (çavdar tarlası hayalinin habercisi)."]
          ] },
        { tip: "ornek", baslik: "Üç sahneyi iki cümlede özetle", durum: "Soru: “Summarize Holden's first night in New York in two sentences.” Sınavda nasıl yazarsın?",
          adimlar: ["1) Ne oldu? Otele gelir, kulüplerde dolaşır, bir kadınla konuşmak ister ve Maurice ile tartışır.", "2) Neden önemli? Her denemede yalnızlığı artar; kimseyle gerçek bir bağ kuramaz.", "3) Zamanı kontrol et: ==*literary present*==.", "4) Gereksiz ayrıntıyı at: kulüpteki şarkıcıların adı, kaç para ödediği…"],
          sonuc: "Model iskelet: ==*In New York, Holden checks into a hotel and tries to find company, but each encounter ends in failure. These attempts show that…*==" }
      ]
    },
    {
      baslik: "Pazar: bağ kurma denemeleri (Ch 17–20)",
      kisa: "Sally, Carl Luce ve Central Park: denemeler yarım kalır, Holden çöker.",
      bloklar: [
        { tip: "tablo", baslik: "Pazar gününün durakları ve tartışma odakları", head: ["Bölüm", "Ne olur?", "Tartışma odağı"], rows: [
            ["Ch 17", "Sally Hayes ile randevu.", "Randevunun felaketle bitmesi; Holden'ın kaygı listesi; New England'da bir kulübede yaşama fikriyle kaçış hayali; Sally ciddiye almaz, kavga ederler."],
            ["Ch 18", "Radio City programı.", "İsa ve din üzerine düşünceleri: Holden ateist midir?"],
            ["Ch 19", "Carl Luce ile bar buluşması.", "Soyadı *Luce* (Latince *lux* = ışık) neyi çağrıştırır? Holden'ın reddedilme listesi; Carl erken ayrılır."],
            ["Ch 20", "Otel girişi ve Central Park.", "Holden'ın yarası; radyatörde oturma; Phoebe'ye aldığı plağı kırması; gölette ördekler ve buz; cenazelerdeki ikiyüzlülük."]
          ] },
        { tip: "liste", baslik: "Sınavda böyle yaz", maddeler: [
            { ikon: "➡️", baslik: "Zincir", metin: "*Each failed attempt to connect with someone intensifies Holden's isolation.*" },
            { ikon: "🧠", baslik: "İç dünya", metin: "*Holden's longing for escape reveals his fear of growing up.*" },
            { ikon: "🏁", baslik: "Düşüş", metin: "*By the end of Sunday, Holden is physically exhausted and emotionally…*" }
          ] }
      ]
    },
    {
      baslik: "Phoebe ve Mr Antolini (Ch 21–24)",
      kisa: "Phoebe ona umut verir; Antolini gecesi güvenini sarsar.",
      bloklar: [
        { tip: "adimlar", baslik: "Pazar gecesi", adimlar: [
            { baslik: "Eve gizlice giriş (Ch 21)", metin: "Ebeveynler dışarıdadır; Holden Phoebe'nin odasına geçer. On yaşındaki Phoebe uyanınca çok sevinir." },
            { baslik: "Yüzleşme (Ch 21–22)", metin: "Phoebe, Holden'ı bir çeşit ‘psikanaliz’ eder: okuldan atıldığını anlar, üzülür ve Holden'ın hiçbir şeyi sevmediğini yüzüne söyler." },
            { baslik: "Hayal (Ch 22)", metin: "Holden ne olmak istediğini anlatır: çavdar tarlasında kenardaki çocukları düşmekten korumak. Bu bölüm kitabın başlığının kaynağıdır; öğretmen Holden Caulfield adının başlıkla yankısını da sorar." },
            { baslik: "Şapka, para, anne (Ch 22–23)", metin: "Holden kırmızı şapkasını Phoebe'ye verir. Anne eve gelince Phoebe onu idare eder; Holden'a harçlığını verir ve Holden gözyaşlarını tutamaz." },
            { baslik: "James Castle ve Antolini (Ch 23–24)", metin: "Eski öğretmeni Mr Antolini onu evinde ağırlar; öğrencisi James Castle'ın ölümü anılır ve Antolini okul hakkında öğüt verir. Holden fiziksel olarak çöker; gece yaşanan bir an onu rahatsız eder ve evden ayrılır." }
          ] },
        { tip: "tuzak", baslik: "Antolini sahnesine kesin hüküm yazma", metin: "Metin olayı bilerek muğlak bırakır. Holden panikle ayrılır, sonra yorumundan emin olamaz. Bu belirsizlik, sahnenin asıl etkisidir.", yanlis: "Antolini kesinlikle zarar vermek istedi.", dogru: "Sahne *ambiguous*: Holden'ın algısı ve sonraki şüphesi anlatılır. Yaz: *The scene remains ambiguous, and Holden's reaction suggests…*" },
        { tip: "liste", baslik: "Sınavda böyle yaz", maddeler: [
            { ikon: "⚓", baslik: "Phoebe", metin: "*Phoebe serves as an emotional anchor who sees through Holden's defenses.*" },
            { ikon: "🌾", baslik: "Hayal", metin: "*In Chapter 22, Holden reveals his fantasy of protecting children from…*" },
            { ikon: "⚠️", baslik: "Antolini", metin: "*The ambiguity of the scene heightens Holden's disorientation.*" }
          ] }
      ]
    },
    {
      baslik: "Müze, atlıkarınca ve son (Ch 25–26)",
      kisa: "Holden Phoebe'yi izlerken mutlu olur; kitap dinlenme evinde biter.",
      bloklar: [
        { tip: "adimlar", baslik: "Ch 25: Pazartesi, adım adım", adimlar: [
            { baslik: "Çöküş", metin: "Holden bedensel ve zihinsel olarak tükenmiştir; kaçmak, sağır-dilsiz biri gibi hiç konuşmadan yaşamak ister." },
            { baslik: "Duvar yazısı", metin: "Phoebe'nin okulunun duvarındaki kaba yazıyı görür. Çocukları bundan koruma isteği, ‘catcher’ hayaliyle doğrudan bağlantılıdır." },
            { baslik: "Müze", metin: "Müzede iki küçük çocuğa yol gösterir: hem bir koruma sembolü hem de bir ironidir, çünkü Holden'ın kendisi yönsüzdür." },
            { baslik: "Phoebe de gelmek ister", metin: "Phoebe onunla gitmek ister; Holden'ı sorumluluk almaya zorlar. Phoebe'nin okul oyunundaki rolü de konuşulur." },
            { baslik: "Atlıkarınca ve altın halka", metin: "Holden Phoebe'yi izler, onu durdurmaz ve beklenmedik bir mutluluk duyar. Kırmızı şapka da bu bölümde yeniden sahnededir." }
          ] },
        { tip: "ikili", sol: { ikon: "🧊", baslik: "Koruma ve dondurma fikri", maddeler: ["Çocukları düşmekten korumak ister", "Her şeyi olduğu gibi tutmak ister"] },
          sag: { ikon: "🎠", baslik: "Kabullenme", maddeler: ["Düşme riskine rağmen çocukları bırakmayı kabul eder", "Değişim kaçınılmazdır"] },
          oyun: [
            { metin: "Holden çavdar tarlasında çocukların kenarda düşmesini önlemek ister.", cevap: "sol", neden: "Ch 22: koruma hayali." },
            { metin: "Phoebe'nin atlıkarıncada altın halkaya uzanmasına izin vermek gerektiğini fark eder.", cevap: "sag", neden: "Ch 25: bırakmayı kabullenme." },
            { metin: "Müzenin camlı sahnelerindeki hiçbir şeyin değişmemesini sever.", cevap: "sol", neden: "Zamanı dondurma isteği." },
            { metin: "Yağmurda Phoebe'yi izlerken beklenmedik bir mutluluk hisseder.", cevap: "sag", neden: "Ch 25: kayıp korkusuna rağmen sevinç." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: son bölüm", head: ["Amaç", "Kalıp"], rows: [
            ["Dönüşümü söylemek", "*In Chapter 25, Holden begins to accept that he cannot protect Phoebe from every risk.*"],
            ["Sonu özetlemek", "*In the final chapter, Holden tells us he misses everyone he has described.*"],
            ["Kısa alıntı", "*He ends by saying that “you start missing everybody” (Salinger, ch. 26).*"]
          ], not: "Ch 26: Holden'ın vardığı sonuç ve tutumundaki değişim öğretmenin son sorusudur. Alıntıyı 10 kelimeden kısa tut ve bölüm numarası ekle." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Olaylar Cumartesi'den Pazartesi'ye: Pencey → New York → Phoebe. 26 bölüm.",
            "Holden notları yüzünden atılır (dört dersten kalır); kavga ayrılışını hızlandırır.",
            "New York'ta her bağ kurma denemesi yarım kalır: Sunny, Sally, Carl Luce; ördek sorusu (Ch 12) ve Central Park (Ch 20) en alt nokta.",
            "Ch 16 ve Ch 22: şarkı ve çavdar tarlası hayali; başlığın kaynağı.",
            "Antolini sahnesi (Ch 23–24) muğlaktır; kesin hüküm yazma.",
            "Ch 25: duvar yazısı, müze, atlıkarınca ve altın halka; Holden bırakmayı kabullenir. Ch 26: ‘insanları özlersin’ sonucu.",
            "Mart R/W sınavı pasajı Ch 1–13 içinden gelir: bu ilk yarının tartışma odaklarını (tablolar) iyi bil.",
            "Özet yazarken *literary present* kullan, neden-sonuç bağlaçlarını ekle."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which sequence of events is in the correct order?",
      opts: ["Phoebe's room, then leaving Pencey, then the date with Sally", "Leaving Pencey, then the date with Sally, then the night at Mr Antolini's", "The night at Mr Antolini's, then leaving Pencey, then Sunny", "The date with Sally, then the fight at Pencey, then Phoebe's room"],
      a: 1, why: "Önce Pencey (Ch 1–8), sonra New York'ta Pazar (Sally, Ch 17), ardından Phoebe ve Antolini (Ch 21–24) gelir. A, C ve D şıklarında Pencey ya da Phoebe yanlış yere konmuş." },
    { q: "A student writes: \"Holden is expelled from Pencey because he fights with Stradlater.\" What is the best response?",
      opts: ["Incorrect: Holden is expelled because he fails four of his five classes; the fight only speeds up his departure.", "Correct: the fight is the only reason he leaves.", "Incorrect: Holden is never expelled and leaves by choice.", "Correct: Stradlater reports him to the headmaster."],
      a: 0, why: "Metinde asıl sebep başarısızlıktır; kavga sonradan olur. B ve D sebebi kavgaya bağlıyor; C ise atılma gerçeğini yok sayıyor." },
    { q: "In which part of the novel does Holden explain to Phoebe what he would like to be, and why is this chapter important for the title?",
      opts: ["Chapter 9, in the hotel, where he first thinks of the title", "Chapter 12, with the taxi driver, who gives him the idea", "Chapter 19, with Carl Luce, who names the fantasy", "Chapter 22, with Phoebe, where he describes protecting children at the edge of a field"],
      a: 3, why: "Çavdar tarlası hayali Ch 22'de Phoebe ile konuşmada anlatılır ve başlığın kaynağıdır. Ch 16'daki şarkı bir habercidir; Ch 12 ördek sorusudur, Ch 19 Carl Luce ile görüşmedir. A, B ve C başlıkla ilgisiz bölümleri veriyor." },
    { q: "Holden suggests to Sally that they escape and live together in a cabin, and she does not take him seriously. How is this scene best interpreted?",
      opts: ["As a normal holiday plan", "As a romantic scene showing Sally's interest in him", "As a sign of his escape fantasy and of how his attempt at closeness ends painfully", "As Holden's one successful conversation in the novel"],
      a: 2, why: "Öneri bir kaçış fantezisidir ve ret, Holden'ı öfkelendirip kavgaya götürür. A ve B sahnenin ciddiyetini göz ardı ediyor; D sonucu tersine çeviriyor." },
    { q: "Which sentence best follows the convention for summarizing a literary work?",
      opts: ["Holden left Pencey and went to New York.", "Holden will leave Pencey and go to New York.", "Holden has left Pencey and goes to New York yesterday.", "Holden leaves Pencey and goes to New York."],
      a: 3, why: "Edebi metin özetinde *literary present* kullanılır: *leaves*, *goes*. A şıkkı geçmiş zaman; B gelecek; C ise zamanları karıştırıyor." }
  ]
};
