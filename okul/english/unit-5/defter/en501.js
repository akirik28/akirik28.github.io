/* Kitora not defteri · en501 · 5.1 Dinleme Bölümü (MEB Skills Exams · Listening)
   Kaynak: öğretmen/bölüm belgeleri (G10MEB ENGLISH EXAM FORMAT: Kasım 2025, Mart 2026, Haziran beceri sınavı). Biçim bilgileri belgelerden; strateji, boşluk türleri ve çalışma önerileri "Ek bilgi" etiketli. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en501",
  amac: "*Listening* bölümü Kasım, Mart ve Haziran sınavlarında 25 puan; ama süre, soru sayısı ve dinletim sayısı değişir. Biçimleri karşılaştıracak, sınav kurallarını ve boşluk doldurma ile doğru-yanlış stratejisini öğreneceksin. Stratejiler “ek bilgi” etiketli.",
  bolumler: [
    {
      baslik: "Üç sınav, üç Listening biçimi",
      kisa: "Her sınavda Listening 25 puan; süre, soru sayısı ve dinletim değişir.",
      bloklar: [
        { tip: "tablo", baslik: "Kasım, Mart ve Haziran yan yana", head: ["Özellik", "Kasım (Exam 1, Dönem 1)", "Mart (Exam 1, Dönem 2)", "Haziran (Exam 2, Dönem 2)"],
          rows: [
            ["Tarih", "7 Kasım (2. oturum)", "2 Nisan (2. oturum)", "4 Haziran"],
            ["Puan", "25", "25", "25"],
            ["Süre", "15 dk", "en fazla 25 dk", "12 dk"],
            ["Kayıt kaç kez çalınır?", "Yalnız 1 kez", "2 kez (video/ses)", "Yalnız 1 kez"],
            ["Soruları okuma süresi", "2 dk", "belgede yok", "2 dk"],
            ["Soru türü ve sayısı", "14 soru: 11 *gap-fill* + 3 *true/false*", "*gap-fill* + *true/false*; soru sayısı belgede yok", "15 soru: 10 *gap-fill* + 5 *true/false*"]
          ], vurgu: 3 },
        { tip: "grafik", baslik: "Dinleme süresi sınavdan sınava değişir", xlabel: "Sınav", ylabel: "Dakika", xmax: 4, ymax: 30,
          xticks: [{ v: 1, label: "Kasım" }, { v: 2, label: "Mart" }, { v: 3, label: "Haziran" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 17, metin: "15 dk", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 27, metin: "en fazla 25 dk", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 14, metin: "12 dk", gizli: true }
          ],
          durumlar: [
            { metin: "Üç sınavda da Listening ==25 puan==. Süre ve dinletim sayısı ise değişiyor." },
            { metin: "==Kasım:== 15 dakika, kayıt tek kez çalınır.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 15], [0.65, 15]] } }, goster: ["t1"] },
            { metin: "==Mart:== en fazla 25 dakika; kayıt ==iki kez== çalınır.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 25], [1.65, 25]] } }, goster: ["t2"] },
            { metin: "==Haziran:== en kısa süre, 12 dakika; kayıt tek kez çalınır.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 12], [2.65, 12]] } }, goster: ["t3"] }
          ] },
        { tip: "not", metin: "Belgede olmayanı uydurma: Mart'ın soru sayısı ve okuma süresi yazılmamış, öğretmenine sor. Haziran sınavında *Reading & Writing* bölümü yok; Nisan'da teslim edilen *Argument Paper Project* onun yerine sayılır, yani yalnız Listening ve Speaking var." }
      ]
    },
    {
      baslik: "Sınav kuralları: sıra, talimat, okunaklı yazı",
      kisa: "Sorular sesin sırasını izler; talimata uy ve okunaklı yaz.",
      bloklar: [
        { tip: "liste", baslik: "Sınavda böyle kontrol et", maddeler: [
            { ikon: "🔢", baslik: "Sıra", metin: "Sorular sesin sırasını izler; duyduğun bilginin hangi soruya ait olduğunu takip et. *Am I on the right question?*" },
            { ikon: "📋", baslik: "Talimat", metin: "Her bölümün yönergesine uy; uymazsan cevap yanlış sayılabilir. *Did I follow the instruction?*" },
            { ikon: "✍️", baslik: "Okunaklı yazı", metin: "Okunmayan cevap yanlış sayılabilir; harfleri ve rakamları net yaz. *Can someone else read my answer?*" },
            { ikon: "⏱️", baslik: "Okuma süresi", metin: "Kasım ve Haziran'da ses başlamadan önce 2 dakika sorulara bakarsın; bu süreyi tam kullan." }
          ] },
        { tip: "tuzak", metin: "Doğru kelimeyi duyup yanlış biçimde yazmak ya da okunmaz yazmak puanı götürür.", yanlis: "Cevabı bildim, yazılışı önemli değil.", dogru: "Talimata uy, net yaz; okunmayan ya da talimata aykırı cevap yanlış sayılabilir." }
      ]
    },
    {
      baslik: "Tek dinletimli sınavlar: Kasım ve Haziran",
      kisa: "2 dakikada soruları oku; ses bir kez çalınır. Plan ve kartlar ek bilgi.",
      bloklar: [
        { tip: "adimlar", baslik: "Ek bilgi (öğretmen belgesinde yok): üç aşamalı plan", adimlar: [
            { baslik: "Ses başlamadan önce (2 dk okuma)", metin: "Boşlukları ve doğru-yanlış cümlelerini oku; anahtar kelimelerin altını çiz; her boşluk için kelime türünü tahmin et (sayı, isim, fiil, sıfat)." },
            { baslik: "Dinlerken", metin: "Sorular sesin sırasını izler; takip et. Yalnızca cevabı yaz, uzun not alma. Bir boşluğu kaçırırsan bırak ve devam et." },
            { baslik: "Bitince", metin: "Boş kalan boşluğa en makul tahmini yaz. Yazımı, tekil-çoğul ve sayıları kontrol et; doğru-yanlışı işaretle." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔲", terim: "Gap-fill", tr: "boşluk doldurma", tanim: "Cümledeki eksik kelimeyi dinleyip yazma.", ornek: "*The trip costs ___ liras.*" },
            { ikon: "🪤", terim: "Distractor", tr: "çeldirici", tanim: "Doğru cevaba benzeyen ama yanlış olan bilgi.", ornek: "Konuşmacı önce “nine”, sonra “actually, ten” der." },
            { ikon: "🔁", terim: "Paraphrase", tr: "başka sözcüklerle söyleme", tanim: "Aynı anlamı farklı kelimelerle anlatma. Doğru-yanlışta sık kullanılır.", ornek: "*begins* ve *starts* aynı şeyi söyler." },
            { ikon: "🚦", terim: "Signpost words", tr: "yön gösteren sözcükler", tanim: "*but, however, actually, so* gibi bilginin değişeceğini haber veren kelimeler.", ornek: "“but” sonrası asıl bilgi gelir." }
          ] },
        { tip: "tuzak", metin: "Tek bir boşluğa takılıp kalmak, sonraki iki cevabı da kaçırtır.", yanlis: "Kaçırdığım kelimeyi hatırlamaya çalışırım.", dogru: "Boşluğu atla, sıradaki soruya geç; son kontrol anında dönersin." }
      ]
    },
    {
      baslik: "Boşluk doldurma: Kasım 11, Haziran 10",
      kisa: "Boşluğun türünü önceden tahmin et; duyduğunu doğru yazımla yaz.",
      bloklar: [
        { tip: "tablo", baslik: "Ek bilgi (öğretmen belgesinde yok): boşluk türleri", head: ["Boşluk türü", "Ne bekle?", "Dikkat", "Sınavda böyle kontrol et"],
          rows: [
            ["Sayı, fiyat", "Rakam ya da sayı sözcüğü", "13 ile 30 karışır", "*Is it a number? Which one: -teen or -ty?*"],
            ["Tarih, saat", "Ay adı, sıra sayısı, “quarter past”", "Sıra sayısı (-th) ve saat biçimi", "*Is it a date or a time?*"],
            ["İsim, yer", "Özel isim ya da yer adı", "Harf harf hecelenebilir", "*Is the name spelled out?*"],
            ["Nesne, etkinlik", "Tekil ya da çoğul isim", "Çoğul -s unutulur", "*Does the sentence need a plural?*"],
            ["Sıfat, fiil", "Cümle kalıbından tahmin edilir", "Zıt anlamlı kelime karışır", "*Is the speaker positive or negative?*"]
          ], vurgu: 0 },
        { tip: "tablo", baslik: "Ek bilgi: sık karışan sesler", head: ["Duyduğun", "Yaz", "İpucu"],
          rows: [
            ["thirteen / thirty", "13 / 30", "-teen: son hecede vurgu ve uzun ses; -ty: ilk hecede vurgu"],
            ["fifteen / fifty", "15 / 50", "Aynı vurgu kuralı"],
            ["double L", "LL", "“double” aynı harfi iki kez yaz demektir"],
            ["Harf adları (A, E, I, G, J)", "A / E / I / G / J", "Hecelemede en çok karışanlardır; önceden prova et"]
          ] },
        { tip: "ornek", baslik: "Ek bilgi: dinlemeden önce bir boşluğu çözmek", durum: "Okuduğun cümle: *The school trip costs ___ liras.*",
          adimlar: ["**Tür:** boşluktan sonra “liras” var; yani sayı.", "**Tuzak:** 13 ile 30 karışabilir. Vurgu ilk hecedeyse *thirty* (30), son hecedeyse *thirteen* (13).", "**Yaz:** duyduğun sayıyı yaz; yönergede rakam ya da yazıyla istendiğine bak."],
          sonuc: "Dinlemeden önce kelime türünü bilirsen duyduğun sesi daha kolay yakalarsın." }
      ]
    },
    {
      baslik: "Doğru-yanlış: Kasım 3, Haziran 5",
      kisa: "Kelimeyi değil, anlamı kontrol et; konuşmacı kendini düzeltebilir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "*True* (Doğru)", maddeler: ["Cümle ses kaydının anlamıyla aynı", "Farklı kelimelerle söylenmiş olabilir"] },
          sag: { ikon: "❌", baslik: "*False* (Yanlış)", maddeler: ["Cümle ses kaydındakinin tersini ya da farklı bir ayrıntıyı söylüyor", "Rakam, kişi ya da zaman değişmiş olabilir"] },
          oyun: [
            { metin: "Ses: “We were going to go by bus, but the bus was late, so we took the train.” Cümle: They went by bus.", cevap: "sag", neden: "Plan otobüstü ama konuşmacı sonunda trene bindiklerini söyledi." },
            { metin: "Ses: “The concert starts at seven.” Cümle: The concert begins at seven o'clock.", cevap: "sol", neden: "Aynı anlam, farklı kelimelerle." },
            { metin: "Ses: “I like the pizza here, but the pasta was too salty.” Cümle: She loved the pasta.", cevap: "sag", neden: "Makarnayı tuzlu bulmuş; “loved” yanlış." },
            { metin: "Ses: “My brother is two years older than me.” Cümle: The speaker is the younger one.", cevap: "sol", neden: "Kardeş iki yaş büyükse konuşmacı daha küçüktür." }
          ] },
        { tip: "grafik", baslik: "Soru dağılımı: Kasım ve Haziran", xlabel: "Sınav ve soru türü", ylabel: "Soru sayısı", xmax: 5, ymax: 13,
          xticks: [{ v: 1, label: "Kasım gap" }, { v: 2, label: "Kasım T/F" }, { v: 3, label: "Haz. gap" }, { v: 4, label: "Haz. T/F" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "k1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "k2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "h1", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "h2", tip: "alan", renk: 1, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "tk1", tip: "yazi", x: 1, y: 11.9, metin: "11", gizli: true },
            { id: "tk2", tip: "yazi", x: 2, y: 3.9, metin: "3", gizli: true },
            { id: "th1", tip: "yazi", x: 3, y: 10.9, metin: "10", gizli: true },
            { id: "th2", tip: "yazi", x: 4, y: 5.9, metin: "5", gizli: true }
          ],
          durumlar: [
            { metin: "Kasım'da 14 soru, Haziran'da 15 soru var. Mart'ın soru sayısı belgede yok." },
            { metin: "==Kasım:== 11 *gap-fill* + 3 *true/false* = 14 soru.", set: { k1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 11], [0.65, 11]] }, k2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 3], [1.65, 3]] } }, goster: ["tk1", "tk2"] },
            { metin: "==Haziran:== 10 *gap-fill* + 5 *true/false* = 15 soru.", set: { h1: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 10], [2.65, 10]] }, h2: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 5], [3.65, 5]] } }, goster: ["th1", "th2"] },
            { metin: "Haziran'da doğru-yanlış sayısı 3'ten 5'e çıkıyor; ikisine de hazırlan." }
          ] },
        { tip: "tuzak", baslik: "Ek bilgi: ilk söyleneni doğru sanma", metin: "“But”, “however” ve “actually” gibi kelimelerden sonra asıl bilgi gelir. İlk duyduğun cümleye bakıp karar verme.", yanlis: "İlk söylenen bilgi doğru olandır.", dogru: "Konuşmacı fikrini değiştirebilir; son hali doğrudur." }
      ]
    },
    {
      baslik: "İki dinletimli sınav: Mart",
      kisa: "Mart'ta kayıt iki kez çalınır. Strateji ek bilgi.",
      bloklar: [
        { tip: "tablo", baslik: "Mart Listening'inde belgede yazanlar", head: ["Bilinen", "Belgede yok"],
          rows: [
            ["25 puan, en fazla 25 dk", "Soru sayısı"],
            ["Kayıt iki kez çalınır (video/ses)", "Soruları okuma süresi"],
            ["*Gap-fill* ve *true/false*", "Soru başına puan"]
          ], vurgu: 0 },
        { tip: "adimlar", baslik: "Ek bilgi (öğretmen belgesinde yok): iki dinletimde plan", adimlar: [
            { baslik: "Birinci dinletim", metin: "Duyduğunu hemen yaz; emin olmadığın yere kısa tahmin yaz. Sıra takip edilir, kaçırdığını bırak." },
            { baslik: "İkinci dinletim", metin: "Boş kalan boşlukları doldur; sayıları, yazımı ve doğru-yanlışlardaki *but* sonrası bilgiyi kontrol et." },
            { baslik: "Kayıt video ise", metin: "Görüntü, konuşanın kim olduğunu ve neyi gösterdiğini anlamana yardım edebilir; ama cevap yine duyduğun bilgiye göre yazılır." }
          ] },
        { tip: "tuzak", baslik: "Ek bilgi: ikinci dinletime güvenme", metin: "İkinci dinletim güvenlik ağıdır; ilk dinletimde cevap yazmamak iki kat yük bindirir.", yanlis: "İlk seferde dinlerim, yazmayı ikinciye bırakırım.", dogru: "İlk dinletimde yaz, ikincide kontrol et ve boşları doldur." }
      ]
    },
    {
      baslik: "Prova planı: biçime göre çalış",
      kisa: "Her biçimi gerçek süre ve dinletim sayısıyla prova et.",
      bloklar: [
        { tip: "tablo", baslik: "Provada neyi ayarla?", head: ["Sınav", "Süre ve dinletim", "Provada ayarla"],
          rows: [
            ["Kasım", "15 dk, tek dinletim, 2 dk okuma", "14 soru: 11 boşluk + 3 doğru-yanlış"],
            ["Mart", "en fazla 25 dk, iki dinletim", "Soru sayısı için öğretmenin örneğine bak"],
            ["Haziran", "12 dk, tek dinletim, 2 dk okuma", "15 soru: 10 boşluk + 5 doğru-yanlış"]
          ], vurgu: 0 },
        { tip: "liste", baslik: "Ek bilgi (öğretmen belgesinde yok): çalışma önerileri", maddeler: [
            { ikon: "🎧", baslik: "Günlük kısa dinleme", metin: "Günde 10 dakikalık İngilizce ses (haber, podcast, ders kaydı); önce altyazısız dinle." },
            { ikon: "✍️", baslik: "Dikte", metin: "Kısa bir cümleyi dinle, durdur, yaz; sonra metinle karşılaştır." },
            { ikon: "🔢", baslik: "Sayı ve harf", metin: "Sayıları, tarihleri ve harf adlarını sesli tekrar et." },
            { ikon: "🔍", baslik: "Hata günlüğü", metin: "Kaçırdığın cevapların türünü (sayı, isim, çoğul) not et; bir sonraki provada onlara bak." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Listening* her sınavda 25 puan. Kasım: 15 dk, 14 soru (11 *gap-fill* + 3 *true/false*), tek dinletim.",
            "Mart: en fazla 25 dk, kayıt iki kez çalınır, *gap-fill* + *true/false*; soru sayısı belgede yok.",
            "Haziran: 12 dk, 15 soru (10 *gap-fill* + 5 *true/false*), tek dinletim; Kasım ve Haziran'da 2 dk okuma var.",
            "Sorular sesin sırasını izler; talimata uy, okunaklı yaz. Okunmayan ya da talimata aykırı cevap yanlış sayılabilir.",
            "Ses başlamadan önce kelime türünü tahmin et; kaçırdığın boşluğu bırakıp devam et.",
            "Doğru-yanlışta anlama bak; *but* ve *actually* sonrası asıl bilgi gelir.",
            "Bitince yazımı, çoğul eki ve sayıları kontrol et; 13/30 ve 15/50 gibi sayılarda vurguya bak.",
            "Mart'ta ilk dinletimde yaz, ikincide kontrol et (ek bilgi); belgede olmayan sayıları öğretmeninden öğren."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which description matches the November Listening section?",
      opts: ["12 minutes, 15 questions (10 gap-fill and 5 true/false), played once", "15 minutes, 14 questions (11 gap-fill and 3 true/false), played once", "Up to 25 minutes, played twice", "15 minutes, 14 questions (3 gap-fill and 11 true/false), played once"],
      a: 1,
      why: "Kasım: 15 dk, 14 soru (11 boşluk doldurma + 3 doğru-yanlış), tek dinletim. En çekici yanlış şık A: bu Haziran biçimidir. D'de sayıların yeri değiştirilmiş." },
    { q: "A classmate says, “The March Listening test has exactly 14 questions, like November.” What is the best response?",
      opts: ["Correct, all Listening tests have 14 questions.", "Wrong, March has 15 questions.", "Wrong, March has 25 questions.", "The material gives the length (up to 25 minutes) and two playings, but not the number of questions."],
      a: 3,
      why: "Mart için süre ve iki dinletim belgede var; soru sayısı yok, uydurulmaz. A ve B çekici: 14 Kasım'a, 15 Haziran'a ait; Mart'ta sayı yazılmamış." },
    { q: "Audio: “We were going to meet at nine, but the bus broke down, so we met at ten.” Statement: They met at nine. What is the answer?",
      opts: ["False, because the speaker corrects the plan after “but”", "True, because nine is mentioned first", "True, because the bus is mentioned", "False, because ten is not a time"],
      a: 0,
      why: "Plan dokuzdu ama otobüs bozulunca buluşma ona kaydı; asıl bilgi “but”tan sonra gelir. B, ilk duyulan bilgiye bakma tuzağıdır." },
    { q: "A student hears the right answer but writes it in handwriting that cannot be read. What can happen?",
      opts: ["Nothing, because only the content matters", "Marks are lost only in the Speaking section", "The answer may be marked wrong", "The student can explain the answer afterwards"],
      a: 2,
      why: "Talimata uymamak ya da okunaklı yazmamak cevabı yanlış sayılmasına yol açabilir. A en çekici yanlıştır: içerik doğru olsa da yazı okunmuyorsa puan gidebilir." },
    { q: "How does the June Listening section differ from November?",
      opts: ["It is longer, at 15 minutes", "It is shorter (12 minutes) and has more true/false questions (5 instead of 3)", "The recording is played twice", "There is no time to read the questions first"],
      a: 1,
      why: "Haziran: 12 dk, 15 soru (10 boşluk + 5 doğru-yanlış), tek dinletim, önce 2 dk okuma. Kasım 15 dk ve 3 doğru-yanlış. C Mart'a ait; D yanlış: 2 dk okuma Haziran'da da var." }
  ]
};
