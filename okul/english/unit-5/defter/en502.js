/* Kitpath not defteri · en502 · 5.2 Konuşma Bölümü (MEB Skills Exams · Speaking)
   Kaynak: öğretmen/bölüm belgeleri (G10MEB ENGLISH EXAM FORMAT: Kasım 2025, Mart 2026, Haziran beceri sınavı; Oedipus Quote Review, Aralık 2025). Sayılar ve rubrikler belgelerden; plan önerileri ve kalıplar "Ek bilgi" etiketli. Hazır konuşma metni yok. Telif: Catcher'dan alıntı yok; Czapnik ve Will yalnız ana fikir düzeyinde; Oedipus'tan yalnız Fagles satır numaraları ve parafraz. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en502",
  amac: "*Speaking* bölümü her sınavda 25 puan; ama hazırlık, süre, soru türü ve rubrik değişir: Kasım, Mart, Haziran ve Aralık Oedipus sınavı. Biçimleri karşılaştıracak, rubrik ağırlıklarını görecek, kayıt kurallarını ve konuşma iskeletlerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Dört konuşma sınavı yan yana",
      kisa: "Hazırlık, süre, soru türü ve rubrik her sınavda farklı.",
      bloklar: [
        { tip: "tablo", baslik: "Kasım, Mart, Haziran ve Aralık", head: ["Özellik", "Kasım", "Mart", "Haziran", "Aralık (Oedipus)"],
          rows: [
            ["Puan", "25", "25", "25", "25"],
            ["Hazırlık", "1 dk not", "4 dk", "4 dk", "3 dk"],
            ["Konuşma", "2–3 dk (3 dk en iyisi)", "4 dk", "4 dk", "4 dk"],
            ["Ne seçersin?", "Verilen soru; bütün kısımlarını ele al", "Romandaki temalar hakkında 2 sorudan biri", "Daha önce okumadığın 2 *Catcher* incelemesinden bir alıntı", "4 alıntıdan biri"],
            ["Ne anlatırsın?", "Sorunun her kısmına cevap", "Roman ayrıntıları + kendi hayatından bağlantı", "Yazara ne ölçüde katıldığın/katılmadığın + romandan bol parafraz kanıt ve analiz", "Konuşanı belirt; sözlerin ona anlamı + oyundaki geniş önemi"],
            ["Rubrik", "10 / 5 / 5 / 5", "10 / 6 / 3 / 3 / 3", "5 / 11 / 3 / 3 / 3", "2 / 15 / 3 / 2 / 3"],
            ["Bölüm süresi", "10 dk (toplam)", "en fazla 15 dk", "belgede yok", "belgede yok"],
            ["Tarih", "7 Kasım", "2 Nisan", "4 Haziran", "Aralık 2025"]
          ], vurgu: 5 },
        { tip: "grafik", baslik: "Rubrikte içerik ve dil puanı (25 üzerinden)", xlabel: "Sınav", ylabel: "Puan", xmax: 5, ymax: 20,
          xticks: [{ v: 1, label: "Kasım" }, { v: 2, label: "Mart" }, { v: 3, label: "Haziran" }, { v: 4, label: "Aralık" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "c1", tip: "alan", renk: 1, noktalar: [[0.58, 0], [0.98, 0], [0.98, 0], [0.58, 0]] },
            { id: "d1", tip: "alan", renk: 0, noktalar: [[1.02, 0], [1.42, 0], [1.42, 0], [1.02, 0]] },
            { id: "c2", tip: "alan", renk: 1, noktalar: [[1.58, 0], [1.98, 0], [1.98, 0], [1.58, 0]] },
            { id: "d2", tip: "alan", renk: 0, noktalar: [[2.02, 0], [2.42, 0], [2.42, 0], [2.02, 0]] },
            { id: "c3", tip: "alan", renk: 1, noktalar: [[2.58, 0], [2.98, 0], [2.98, 0], [2.58, 0]] },
            { id: "d3", tip: "alan", renk: 0, noktalar: [[3.02, 0], [3.42, 0], [3.42, 0], [3.02, 0]] },
            { id: "c4", tip: "alan", renk: 1, noktalar: [[3.58, 0], [3.98, 0], [3.98, 0], [3.58, 0]] },
            { id: "d4", tip: "alan", renk: 0, noktalar: [[4.02, 0], [4.42, 0], [4.42, 0], [4.02, 0]] },
            { id: "tc1", tip: "yazi", x: 0.78, y: 11, metin: "10", gizli: true },
            { id: "td1", tip: "yazi", x: 1.22, y: 16, metin: "15", gizli: true },
            { id: "tc2", tip: "yazi", x: 1.78, y: 17, metin: "16", gizli: true },
            { id: "td2", tip: "yazi", x: 2.22, y: 10, metin: "9", gizli: true },
            { id: "tc3", tip: "yazi", x: 2.78, y: 17, metin: "16", gizli: true },
            { id: "td3", tip: "yazi", x: 3.22, y: 10, metin: "9", gizli: true },
            { id: "tc4", tip: "yazi", x: 3.78, y: 18, metin: "17", gizli: true },
            { id: "td4", tip: "yazi", x: 4.22, y: 9, metin: "8", gizli: true }
          ],
          durumlar: [
            { metin: "Her sınavda Speaking ==25 puan==. Soldaki sütun içerik ve anlama puanı, sağdaki dil puanı (akıcılık + kelime + telaffuz/dilbilgisi)." },
            { metin: "==Kasım:== soruyu karşılama 10; dil 5 + 5 + 5 = 15. Dil puanı en yüksek burada.", set: { c1: { noktalar: [[0.58, 0], [0.98, 0], [0.98, 10], [0.58, 10]] }, d1: { noktalar: [[1.02, 0], [1.42, 0], [1.42, 15], [1.02, 15]] } }, goster: ["tc1", "td1"] },
            { metin: "==Mart:== soru ve roman ayrıntısı 10 + kendi hayatınla bağlantı 6 = 16; dil 3 + 3 + 3 = 9.", set: { c2: { noktalar: [[1.58, 0], [1.98, 0], [1.98, 16], [1.58, 16]] }, d2: { noktalar: [[2.02, 0], [2.42, 0], [2.42, 9], [2.02, 9]] } }, goster: ["tc2", "td2"] },
            { metin: "==Haziran:== alıntıyı anlama 5 + destekleyici analiz 11 = 16; dil 3 + 3 + 3 = 9.", set: { c3: { noktalar: [[2.58, 0], [2.98, 0], [2.98, 16], [2.58, 16]] }, d3: { noktalar: [[3.02, 0], [3.42, 0], [3.42, 9], [3.02, 9]] } }, goster: ["tc3", "td3"] },
            { metin: "==Aralık:== konuşanı belirleme 2 + alıntıyı ve geniş önemini anlama 15 = 17; dil 3 + 2 + 3 = 8.", set: { c4: { noktalar: [[3.58, 0], [3.98, 0], [3.98, 17], [3.58, 17]] }, d4: { noktalar: [[4.02, 0], [4.42, 0], [4.42, 8], [4.02, 8]] } }, goster: ["tc4", "td4"] },
            { metin: "Kasım'dan sonra ağırlık içeriğe kayar: düşünceni metinden kanıtla desteklemek, akıcılıktan çok puan getirir." }
          ] },
        { tip: "not", metin: "Kasım kayıt kuralları bir sonraki başlıkta; Mart için aynıdır. Haziran ve Aralık için kayıt ya da teslim biçimi ve toplam bölüm süresi belgede yok, öğretmeninin yönergesine bak." }
      ]
    },
    {
      baslik: "Kasım: soruyu karşıla (10 / 5 / 5 / 5)",
      kisa: "Bütün kısımlarını cevapla: soruyu karşılama 10 puan.",
      bloklar: [
        { tip: "tablo", baslik: "Kasım rubriği: 25 puan", head: ["Kriter", "Ne yapmalı?", "Sınavda böyle söyle"],
          rows: [
            ["Soruyu karşılama (10)", "Sorunun bütün kısımlarını ele al; ilk cümlede cevapla", "*The main reason is…*"],
            ["Akıcılık (5)", "Uzun duraksama yapma; kısa dolgularla devam et", "*Let me think… / Well, …*"],
            ["Kelime (5)", "Zengin ve çeşitli sözcük kullan; bilmediğini anlat", "*It's something you use to…*"],
            ["Telaffuz + dilbilgisi (5)", "Basit yapıları doğru kur; hata az olsun", "*I think… because… For example…*"]
          ], vurgu: 0 },
        { tip: "ikili", sol: { ikon: "🎯", baslik: "Bütün kısımlar ele alınmış", maddeler: ["Soru iki kısımlıysa ikisine de cevap var", "Gerekçe ve örnek soruya bağlı"] },
          sag: { ikon: "↪️", baslik: "Kısım atlanmış ya da konu dışı", maddeler: ["Bir kısım hiç cevaplanmamış", "Genel bilgi ya da ezber"] },
          oyun: [
            { metin: "Soru: *Describe a place you like to visit and say why.* Cevap: *One place I enjoy visiting is the old city, because…*", cevap: "sol", neden: "Önce yeri söylüyor, sonra neden veriyor: iki kısım da var." },
            { metin: "Soru: *Describe a place you like to visit and say why.* Cevap: *I like the old city. It has a big square and a market…* (neden yok)", cevap: "sag", neden: "“Why” kısmı atlanmış." },
            { metin: "Soru: *Describe a place you like to visit and say why.* Cevap: *Cities are very important in history. There are many cities in the world…*", cevap: "sag", neden: "Genel bilgi; yer ve neden yok." },
            { metin: "Soru: *Do you think homework is useful?* Cevap: *Yes, I think it is useful, mainly because…*", cevap: "sol", neden: "Görüşünü hemen söylüyor ve neden veriyor." }
          ] },
        { tip: "adimlar", baslik: "Ek bilgi (öğretmen belgesinde yok): 1 dakikalık not planı", adimlar: [
            { baslik: "0–20 sn: soruyu böl", metin: "Soruyu oku; kaç kısımlı olduğunu say ve her kısım için anahtar kelime yaz." },
            { baslik: "20–45 sn: cevap, neden, örnek", metin: "Her kısım için kısa bir neden ve günlük hayattan bir örnek not et; tam cümle yazma." },
            { baslik: "45–60 sn: kapanış", metin: "Soruya dönen tek bir kapanış cümlesi seç: *To sum up, … / That's why I think…*" }
          ] },
        { tip: "tuzak", metin: "Notları tam cümleyle yazmak 1 dakikayı bitirir ve kayıtta okuyormuş gibi tutuk konuşturur. Sorunun bir kısmını atlamak ise en büyük kriterden puan götürür.", yanlis: "Bütün konuşmamı yazıp okurum.", dogru: "Anahtar kelime yaz, cümleleri konuşurken kur; her kısma cevap ver." }
      ]
    },
    {
      baslik: "Kasım ve Mart: Voice Memo kayıt kuralları",
      kisa: "Adını söyle, dosyayı adlandır, yükle ve e-postala; internete girme.",
      bloklar: [
        { tip: "adimlar", baslik: "Kayıt prosedürü", adimlar: [
            { baslik: "Hazırlık", metin: "Mac ve mikrofonlu kulaklık getir. Sınav başlayana kadar Mac kapalı kalır. Sınavdan önce Voice Memo kaydet, yükle ve e-postala diye dene." },
            { baslik: "Kayda önce tam adını söyle", metin: "Konuşmaya başlamadan önce tam adını söyle. Gözetmen durdurunca dur." },
            { baslik: "Dosyayı adlandır", metin: "Dosya adı “Ad Soyad” olsun." },
            { baslik: "Yükle ve yedekle", metin: "Google Classroom'a yükle (Kasım: ENGLISH EXAM 1 SEMESTER 1 VOICE MEMOS; Mart: SEMESTER 2 VOICE MEMOS) ve yedek olarak öğretmene e-postala." }
          ] },
        { tip: "tuzak", baslik: "İnternet kuralı", metin: "Kaydı yükleyip e-postalayana kadar internete girme. Şüphe doğarsa o bölümden 0 alırsın ve telafi yoktur.", yanlis: "Kaydı bitirdim, hızlıca bir siteye bakabilirim.", dogru: "Önce yükle ve e-postala; ancak ondan sonra internete gir." },
        { tip: "liste", baslik: "Ek bilgi (öğretmen belgesinde yok): kayıt pratiği", maddeler: [
            { ikon: "🔇", baslik: "Sessiz oda", metin: "Arka plan gürültüsü olmayan bir yerde, Mac'in ve kulaklığın mikrofonuyla kısa bir deneme kaydı al." },
            { ikon: "⏱️", baslik: "Süre", metin: "Kasım için 3 dakikayı prova et (2–3 dk, 3 dk en iyisi): açılış, iki ana fikir, kapanış." },
            { ikon: "🎙️", baslik: "Dinle ve değerlendir", metin: "Kaydını rubrikle dinle: bütün kısımları cevapladım mı, uzun duraksadım mı?" }
          ] }
      ]
    },
    {
      baslik: "Mart: roman ayrıntısı ve kendi hayatın (10 / 6 / 3 / 3 / 3)",
      kisa: "İki sorudan birini seç; hem romandan hem kendi hayatından örnek ver.",
      bloklar: [
        { tip: "tablo", baslik: "Mart rubriği: 25 puan", head: ["Kriter", "Ne yapmalı?", "Sınavda böyle söyle"],
          rows: [
            ["Soruyu anlama, eserden ayrıntı (10)", "Seçtiğin soruyu romandan somut ayrıntılarla (sahne, karakter, olay) cevapla", "*In the novel, … This shows that…*"],
            ["Kendi hayatınla bağlantı (6)", "Soruyla ilgili kendi yaşantından bir bağlantı kur", "*In my own life, … Similarly, …*"],
            ["Akıcılık (3)", "Rahatsız edici duraksama olmasın", "*Let me think… / What I mean is…*"],
            ["Kelime (3)", "Çeşitli ve yerinde sözcükler", "*Another way to put it is…*"],
            ["Telaffuz + dilbilgisi (3)", "Anlaşılır, doğru cümleler", "*I think… because…*"]
          ], vurgu: 0 },
        { tip: "adimlar", baslik: "Ek bilgi (öğretmen belgesinde yok): 4 + 4 dakikalık iskelet", adimlar: [
            { baslik: "Hazırlık: soruyu seç (≈1 dk)", metin: "İki sorudan hangisi hakkında daha çok sahne hatırlıyorsan onu seç. Ek bilgi: romandaki temalara örnek *alienation, innocence, phoniness, grief and loss*." },
            { baslik: "Hazırlık: ayrıntıları not et (≈2 dk)", metin: "En az iki sahneyi ya da karakteri bölüm numarasıyla not et (örn. Ch 25, atlıkarınca sahnesi) ve her birinin soruya nasıl cevap verdiğini bir anahtar kelimeyle yaz." },
            { baslik: "Hazırlık: kişisel bağlantı (≈1 dk)", metin: "Kendi hayatından bir an seç ve romandaki ayrıntıyla bağla." },
            { baslik: "Konuşma", metin: "Soruyu cevapla, roman ayrıntılarını anlat, sonra kendi hayatına geç; geçiş için *This reminds me of… / In a similar way, …*" }
          ] },
        { tip: "tuzak", metin: "Yalnız kendi hayatını anlatmak ya da yalnız romanı özetlemek ikisinden birini boş bırakır.", yanlis: "Kendi hikâyemi uzun anlatırım, roman zaten bilinir.", dogru: "Önce romandan somut ayrıntı (10), sonra kendi bağlantın (6); ikisini de soruya bağla." }
      ]
    },
    {
      baslik: "Haziran: iki incelemeden bir alıntı (5 / 11 / 3 / 3 / 3)",
      kisa: "Daha önce okumadığın alıntıya katılma/katılmama, parafrazla kanıtla.",
      bloklar: [
        { tip: "tablo", baslik: "İki inceleme: ana fikirler kendi cümlelerimle", head: ["İnceleme", "Ana fikir", "Sınıfta çalışılan sözcükler"],
          rows: [
            ["Dana Czapnik (*The Guardian*)", "Holden bugünkü genç okura uzak gelebilir; ergenlik bunalımı her kuşakta vardır, ama içeriği kişiye ve döneme göre değişir. Kitabı erken oku, yıllar sonra tekrar oku.", "—"],
            ["George Will (başlığında *whiner* geçen yazı)", "Holden'a eleştirel bakan bir yazı. Ayrıntılı savunmayı sınıf kopyasından kendin oku; burada yalnız çalışılan sözcükler var.", "*whiner, conformity, authenticity, shallowness, integrity, infantilism, picaresque*"]
          ], vurgu: 0, not: "Her iki yazı da telifli: yalnız ana fikir özetlenmiştir, alıntı yoktur. Sınavda seçeceğin alıntı daha önce okumadığın bir parçadır; bu yüzden yazıların genel tutumunu ve sözcüklerini bilmek yardımcı olur." },
        { tip: "adimlar", baslik: "Ek bilgi (öğretmen belgesinde yok): 4 + 4 dakikalık iskelet", adimlar: [
            { baslik: "Alıntıyı anla", metin: "Alıntının ana fikrini kendi sözcüklerinle bir cümlede söyle: *The author argues that…*" },
            { baslik: "Katıl ya da katılma", metin: "Tutumunu net söyle: *I partly agree because… / I disagree with the claim that…*" },
            { baslik: "Romandan kanıt", metin: "En az iki sahne ya da karakter ayrıntısını parafrazla anlat; bölüm numarası ver ve her birini tutumuna bağla: *This supports/contradicts…*" },
            { baslik: "Analiz ve kapanış", metin: "Kanıtın ne gösterdiğini açıkla (11 puanlık kriter) ve tutumuna dön: *Overall, …*" }
          ] },
        { tip: "tuzak", metin: "Alıntıyı yalnız yeniden söylemek ya da romanı baştan sona özetlemek 11 puanlık analizi boş bırakır.", yanlis: "Alıntıyı açıklarım, sonra olay örgüsünü anlatırım.", dogru: "Tutumunu söyle; romandan parafraz kanıtı seç ve ne gösterdiğini analiz et." }
      ]
    },
    {
      baslik: "Aralık: Oedipus alıntı sınavı (2 / 15 / 3 / 2 / 3)",
      kisa: "Konuşanı belirt, sözlerin anlamını ve oyundaki geniş önemini anlat.",
      bloklar: [
        { tip: "tablo", baslik: "Aralık rubriği: 25 puan", head: ["Kriter", "Ne yapmalı?", "Sınavda böyle söyle"],
          rows: [
            ["Konuşanı belirleme (2)", "Alıntıyı hangi karakter söylüyor, hemen söyle", "*These words are spoken by…*"],
            ["Alıntıyı ve geniş önemini anlama (15)", "Sözlerin o karakter için anlamı + oyundaki daha geniş önemi", "*For him, this means… In the play as a whole, …*"],
            ["Doğal, duraksamasız konuşma (3)", "Planına bakarak ama okumadan konuş", "*What this shows is…*"],
            ["Zengin sözcük (2)", "Terimleri kullan", "*irony, blindness, fate, downfall*"],
            ["Telaffuz + dilbilgisi (3)", "Basit ve doğru cümleler", "*Therefore, …*"]
          ], vurgu: 1 },
        { tip: "adimlar", baslik: "Ek bilgi (öğretmen belgesinde yok): 3 dk plan, 4 dk konuşma", adimlar: [
            { baslik: "Kim?", metin: "Konuşanı yaz; sahneyi ve karşısındaki kişiyi anahtar kelimeyle hatırla." },
            { baslik: "Anlam", metin: "Sözlerin o karakter için anlamını bir cümleyle söyle; karakterin o anki durumuyla bağla." },
            { baslik: "Geniş önem", metin: "Alıntıyı oyunun bir temasına bağla (körlük/görme, kader, suçlama, kehanet); bu 15 puanın en büyük parçasıdır." }
          ] },
        { tip: "ikili", sol: { ikon: "👑", baslik: "*Oedipus* konuşuyor", maddeler: ["Kral, halk ve katil hakkında konuşuyor"] },
          sag: { ikon: "🎭", baslik: "Başka bir karakter", maddeler: ["*Creon*, *Jocasta* ya da *Teiresias*"] },
          oyun: [
            { metin: "Halkın acısı için herkesten çok yas tutuyorum (Fagles v. 73–76, parafraz).", cevap: "sol", neden: "Kendi halkı için yas tutan kral: Oedipus." },
            { metin: "Tahtta hiç gözüm yok (Fagles v. 663–665, parafraz).", cevap: "sag", neden: "Krallık istemediğini söyleyen Creon." },
            { metin: "Hiçbir insan geleceği bilemez (Fagles v. 778–782, parafraz).", cevap: "sag", neden: "Kehanetlere güvenmeyen Jocasta." },
            { metin: "Dualarınızı yerine getireyim, beni dinleyin (Fagles v. 245–247, parafraz).", cevap: "sol", neden: "Halka vaat eden kral: Oedipus." }
          ] },
        { tip: "liste", baslik: "Çalışma alıntı bankasından temalar (Fagles satır no.)", maddeler: [
            { ikon: "🙈", baslik: "Körlük ve görme", metin: "Teiresias'ın kehaneti, dilenci-zengin tersine dönüşü; v. 359–362, 422–423." },
            { ikon: "🦠", baslik: "Salgın ve katile lanet", metin: "Katil sürgün ya da kana kan (v. 113–114), katile lanet (v. 280–284)." },
            { ikon: "😡", baslik: "Öfke ve kuşku", metin: "Kavşaktaki cinayet öfkesi, Creon'u komplo ile suçlama, koronun “aklını kaybetmiş” demesi." },
            { ikon: "🧘", baslik: "Creon ve Jocasta", metin: "Creon'un sakin müdahalesi ve “krallık istemem” savunması (v. 663–665); Jocasta'nın kehanetlere saygıyı bırakması (v. 778–782)." },
            { ikon: "🎲", baslik: "Köken ve Sfenks", metin: "Sfenks'i zekâsıyla yenmesi, kendini *Tyche*'nin oğlu sayması, Korinthos'tan kaçış (v. 876–880)." }
          ] }
      ]
    },
    {
      baslik: "Ortak beceriler ve yapay zekâ kuralı",
      kisa: "Basit ve doğru cümle; hazır metni kendin kur, yapay zekâya yazdırma.",
      bloklar: [
        { tip: "tablo", baslik: "Akıcılık, kelime, telaffuz ve dilbilgisi: puan getiren, puan kıran", head: ["Kriter", "Puan getiren", "Puan kıran"],
          rows: [
            ["Akıcılık", "Doğal tempo, kısa dolgu sözcükleri", "Uzun sessizlikler, sürekli baştan başlama"],
            ["Kelime", "Yerinde, çeşitli kelimeler; bilmediğini anlatma", "Aynı kelimeyi tekrar etme; Türkçe kelimeye kaçma"],
            ["Telaffuz + dilbilgisi", "Anlaşılır, vurguyu doğru yerde kullanma", "Zaman karıştırma, bozuk cümleler"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Fluency", tr: "akıcılık", tanim: "Konuşmanın sık duraksamadan, doğal tempoda akması.", ornek: "Kısa dolgularla devam etmek akıcılığı korur." },
            { ikon: "💬", terim: "Filler", tr: "dolgu sözcüğü", tanim: "Düşünürken kullanılan kısa ifadeler; az ve doğal kullanılırsa yardımcı olur.", ornek: "*well, let me think, you know*" },
            { ikon: "🧭", terim: "Discourse marker", tr: "bağlayıcı ifade", tanim: "Konuşmayı düzenleyen ve fikirleri bağlayan sözcükler.", ornek: "*first of all, however, as a result*" },
            { ikon: "🗣️", terim: "Paraphrasing", tr: "başka sözcüklerle anlatma", tanim: "Bilmediğin kelimeyi başka kelimelerle anlatmak. Haziran'da romandan kanıtın da parafrazla verilir.", ornek: "*a thing that you use to…*" }
          ] },
        { tip: "tuzak", metin: "Telaffuz ve dilbilgisi puanı küçüktür (2–3 puan); karmaşık bir yapı kurup yanlış yapmaktansa basit bir yapıyı doğru kullan.", yanlis: "Uzun ve süslü cümle kursam daha çok puan alırım.", dogru: "Net ve doğru cümle daha güvenli puan getirir." },
        { tip: "not", metin: "==Yapay zekâ kuralı:== okulda üretken yapay zekâ araştırma ve yazma yerine geçemez. Yalnız çok sınırlı kullanım tanınır: düzen önerisi (içerik değil), ağdalı tezi kısaltma ve yazım denetimiyle hatalarını kendin düzeltme. Araştırma için hiç kullanılmaz. Bu defter hazır konuşma metni vermez; yalnız yapı, kriter ve cümle kalıbı verir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Speaking* her sınavda 25 puan. Kasım: 1 dk not + 2–3 dk (10 / 5 / 5 / 5); Mart: 4 dk hazırlık + 4 dk (10 / 6 / 3 / 3 / 3).",
            "Haziran: 4 + 4 dk, daha önce okumadığın bir *Catcher* inceleme alıntısı (5 / 11 / 3 / 3 / 3); Aralık Oedipus: 3 dk planla + 4 dk konuş (2 / 15 / 3 / 2 / 3).",
            "Kasım: sorunun bütün kısımlarını cevapla; Mart: roman ayrıntısı ve kendi hayatından bağlantı.",
            "Haziran: katıldığın/katılmadığın yeri söyle, romandan bol parafraz kanıtla ve analiz et.",
            "Aralık: konuşanı belirt, sözlerin ona anlamını ve oyundaki geniş önemini anlat.",
            "Kasım ve Mart kayıt: önce tam adını söyle, dosya adı Ad Soyad, Classroom'a yükle ve e-postala; yükleme bitene kadar internete girme.",
            "Basit ve doğru cümle, karmaşık ve hatalı cümleden iyidir; takılırsan dolgu kullan ya da kelimeyi anlat.",
            "Üretken yapay zekâ araştırma ve yazma yerine geçemez; konuşmanı kendi cümlelerinle kur."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "How are the 25 points divided in the November Speaking exam?",
      opts: ["Understanding the quote 5, supporting analysis 11, fluency 3, vocabulary 3, pronunciation and grammar 3", "Answering all parts of the question 10, fluency 5, vocabulary 5, pronunciation and grammar 5", "Understanding the question with details from the work 10, personal connection 6, fluency 3, vocabulary 3, pronunciation and grammar 3", "Identifying the speaker 2, understanding the quote 15, fluency 3, vocabulary 2, pronunciation and grammar 3"],
      a: 1,
      why: "Kasım: soruyu karşılama 10, akıcılık 5, kelime 5, telaffuz ve dilbilgisi 5. A Haziran'ın, C Mart'ın, D Aralık'ın rubriğidir; C en çekici yanlıştır çünkü o da 10 ile başlar." },
    { q: "In the March Speaking exam you choose one of two questions about themes in the novel. How much time do you have?",
      opts: ["1 minute to prepare, then 2–3 minutes", "3 minutes to prepare, then 4 minutes", "4 minutes to prepare, then 4 minutes", "4 minutes to prepare, then 2–3 minutes"],
      a: 2,
      why: "Mart: 4 dk hazırlık, 4 dk konuşma; roman ayrıntıları ve kendi hayatından bağlantı. A Kasım biçimidir, B Aralık'ın hazırlık süresine benzer." },
    { q: "In the June Speaking exam, which answer best earns the 11-point criterion?",
      opts: ["Saying whether you agree with the author and supporting your view with plenty of paraphrased evidence from the novel and analysis of it", "Reading the chosen passage aloud twice and stopping", "Telling a personal story that does not mention the novel", "Retelling the plot from beginning to end"],
      a: 0,
      why: "Haziran'da 11 puan, metinden düşünceli destekleyici analize gider: katılma/katılmama ve bol parafraz kanıt. D çekicidir ama özet analiz değildir." },
    { q: "What are you expected to do with the quote you choose in the December Oedipus speaking exam?",
      opts: ["Memorize it and recite it from memory", "Retell the whole plot of the play", "Compare two English translations of it", "Name who says it, explain what the words mean for that character, and explain their wider importance in the play"],
      a: 3,
      why: "Konuşanı belirleme 2, alıntıyı ve oyundaki geniş önemini anlama 15 puan. B çekici yanlıştır: olay örgüsünü anlatmak değil, alıntıyı yorumlamak istenir." },
    { q: "In the November exam, a student finishes the Voice Memo and opens a website before uploading and emailing the file. What can happen?",
      opts: ["Nothing, if the recording is within 3 minutes", "The student may get 0 for that section, with no make-up", "The student loses 5 points from fluency", "The student has to record again"],
      a: 1,
      why: "Yükleyip e-postalayana kadar internete girmek yasak; şüphe varsa o bölümden 0 ve telafi yok. D çekici görünür ama belgede yeniden kayıt hakkı yok." }
  ]
};
