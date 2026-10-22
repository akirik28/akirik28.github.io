/* Kitora not defteri · en501 · 5.1 Dinleme Bölümü (MEB Skills Exams · Listening)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Kasım MEB sınavı: Listening 25 puan, 15 dk, tek dinletim, 11 boşluk doldurma + 3 doğru-yanlış). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en501",
  amac: "Kasım MEB sınavının *Listening* bölümü 25 puan: tek dinletimde 11 boşluk doldurma ve 3 doğru-yanlış soru. Burada biçimi, dinlemeden önce, dinlerken ve sonra ne yapacağını, sayı ve yazım tuzaklarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Biçim: 15 dakika, tek dinletim, 14 soru",
      kisa: "Dinleme, sınavın dörtte biri; ses yalnızca bir kez çalınır.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 25, sonek: " puan", etiket: "Listening (sınavın dörtte biri)" },
            { deger: 15, sonek: " dk", etiket: "toplam süre" },
            { deger: 11, etiket: "boşluk doldurma (*gap-fill*)" },
            { deger: 3, etiket: "doğru-yanlış (*true/false*)" }
          ] },
        { tip: "grafik", baslik: "100 puanlık sınavda dinlemenin yeri", xlabel: "Bölüm", ylabel: "Puan", xmax: 4, ymax: 56,
          xticks: [{ v: 1, label: "R & W" }, { v: 2, label: "Listening" }, { v: 3, label: "Speaking" }],
          yticks: [{ v: 25, label: "25" }, { v: 50, label: "50" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 51.5, metin: "50 (40 dk)", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 26.5, metin: "25 (15 dk)", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 26.5, metin: "25", gizli: true }
          ],
          durumlar: [
            { metin: "Sınav toplam ==100 puan==; üç bölümden oluşur." },
            { metin: "*Reading & Writing*: 50 puan, 40 dakika.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 50], [0.65, 50]] } }, goster: ["t1"] },
            { metin: "==*Listening*: 25 puan, 15 dakika.== Sınavın dörtte biri.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 25], [1.65, 25]] } }, goster: ["t2"] },
            { metin: "*Speaking*: 25 puan; ayrıntısı bir sonraki defterde.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 25], [2.65, 25]] } }, goster: ["t3"] }
          ] },
        { tip: "not", metin: "Burada yalnızca kesin bilinen biçim var: 15 dakika, tek dinletim, 11 boşluk ve 3 doğru-yanlış. Soru başına puan, kelime sınırı ve yazım hatasının puan kırıp kırmadığını öğretmeninin örnek sınavında kontrol et." }
      ]
    },
    {
      baslik: "Tek dinletim: önce, sırasında, sonra",
      kisa: "Sesi duymadan önce soruları oku, dinlerken yalnızca cevabı yaz, sonra kontrol et.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç aşamalı plan", adimlar: [
            { baslik: "Ses başlamadan önce", metin: "Boşlukları ve doğru-yanlış cümlelerini oku; anahtar kelimelerin altını çiz; her boşluk için kelime türünü tahmin et (sayı, isim, fiil, sıfat)." },
            { baslik: "Dinlerken", metin: "Cevaplar çoğunlukla sorular sırasıyla gelir; takip et. Yalnızca cevabı yaz, uzun not alma. Bir boşluğu kaçırırsan bırak ve devam et." },
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
      baslik: "Boşluk doldurma: 11 soru",
      kisa: "Boşluğun türünü önceden tahmin et; duyduğunu kelimesi kelimesine ve doğru yazımla yaz.",
      bloklar: [
        { tip: "tablo", head: ["Boşluk türü", "Ne bekle?", "Dikkat", "Sınavda böyle kontrol et"],
          rows: [
            ["Sayı, fiyat", "Rakam ya da sayı sözcüğü", "13 ile 30 karışır", "*Is it a number? Which one: -teen or -ty?*"],
            ["Tarih, saat", "Ay adı, sıra sayısı, “quarter past”", "Sıra sayısı (-th) ve saat biçimi", "*Is it a date or a time?*"],
            ["İsim, yer", "Özel isim ya da yer adı", "Harf harf hecelenebilir", "*Is the name spelled out?*"],
            ["Nesne, etkinlik", "Tekil ya da çoğul isim", "Çoğul -s unutulur", "*Does the sentence need a plural?*"],
            ["Sıfat, fiil", "Cümle kalıbından tahmin edilir", "Zıt anlamlı kelime karışır", "*Is the speaker positive or negative?*"]
          ], vurgu: 0 },
        { tip: "tablo", baslik: "Sık karışan sesler", head: ["Duyduğun", "Yaz", "İpucu"],
          rows: [
            ["thirteen / thirty", "13 / 30", "-teen: son hecede vurgu ve uzun ses; -ty: ilk hecede vurgu"],
            ["fifteen / fifty", "15 / 50", "Aynı vurgu kuralı"],
            ["double L", "LL", "“double” aynı harfi iki kez yaz demektir"],
            ["A, E, I", "A / E / I", "Harf adlarını önceden prova et"],
            ["G, J", "G / J", "Hecelemede en çok karışanlardan"]
          ] },
        { tip: "ornek", baslik: "Dinlemeden önce bir boşluğu çözmek", durum: "Okuduğun cümle: *The school trip costs ___ liras.*",
          adimlar: ["**Tür:** boşluktan sonra “liras” var; yani sayı.", "**Tuzak:** 13 ile 30 karışabilir. Vurgu ilk hecedeyse *thirty* (30), son hecedeyse *thirteen* (13).", "**Yaz:** duyduğun sayıyı yaz; yönergede rakam ya da yazıyla istendiğine bak."],
          sonuc: "Dinlemeden önce kelime türünü bilirsen duyduğun sesi daha kolay yakalarsın." }
      ]
    },
    {
      baslik: "Doğru-yanlış: 3 soru",
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
        { tip: "tuzak", metin: "“But”, “however” ve “actually” gibi kelimelerden sonra asıl bilgi gelir. İlk duyduğun cümleye bakıp karar verme.", yanlis: "İlk söylenen bilgi doğru olandır.", dogru: "Konuşmacı fikrini değiştirebilir; son hali doğrudur." }
      ]
    },
    {
      baslik: "Nasıl çalışılır?",
      kisa: "Her gün kısa dinleme, dinlerken boşluk doldurma alıştırması en hızlı yoldur.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎧", baslik: "Günlük kısa dinleme", metin: "Günde 10 dakikalık İngilizce ses (haber, podcast, ders kaydı); önce altyazısız dinle." },
            { ikon: "✍️", baslik: "Dikte", metin: "Kısa bir cümleyi dinle, durdur, yaz; sonra metinle karşılaştır." },
            { ikon: "🔢", baslik: "Sayı ve harf", metin: "Sayıları, tarihleri ve harf adlarını sesli tekrar et." },
            { ikon: "⏱️", baslik: "Sınav provası", metin: "Öğretmenin örnek sınavını gerçek süreyle (15 dk, tek dinletim) çöz; kaçırdığın cevapların türünü not et." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Listening*: 25 puan, 15 dakika, tek dinletim; 11 boşluk doldurma ve 3 doğru-yanlış.",
            "Ses başlamadan önce soruları oku, boşluk türlerini tahmin et.",
            "Dinlerken yalnızca cevabı yaz; kaçırdığın boşluğu bırakıp devam et.",
            "13/30 ve 15/50 gibi sayılarda vurgu yerine bak.",
            "Doğru-yanlışta anlama bak; *but* ve *actually* sonrası asıl bilgidir.",
            "Bitince yazımı, çoğul eki ve sayıları kontrol et.",
            "Her gün 10 dakika dinleme ve dikte yap; soru başına puan ve kelime sınırını öğretmeninden öğren."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Dinleme bölümünün biçimi hangi seçenekte doğru verilmiştir?",
      opts: ["25 puan, 30 dakika, iki dinletim", "25 puan, 15 dakika, tek dinletim, 11 boşluk ve 3 doğru-yanlış", "50 puan, 15 dakika, tek dinletim", "25 puan, 15 dakika, 3 boşluk ve 11 doğru-yanlış"],
      a: 1,
      why: "Dinleme 25 puan, 15 dakika, tek dinletim; 11 boşluk doldurma ve 3 doğru-yanlış. En çekici yanlış şık D: sayıların yeri değiştirilmiş." },
    { q: "Ses başlamadan önceki süre için en iyi plan hangisidir?",
      opts: ["Boşlukları ve cümleleri okuyup kelime türünü tahmin etmek", "Gözleri kapatıp dinlemeye hazırlanmak", "Doğru-yanlış cümlelerini yazıya çevirmek", "Yalnızca ilk iki soruya bakmak"],
      a: 0,
      why: "Okuyarak tahmin etmek, dinlerken neyi yakalayacağını bilmeni sağlar. D yanlış: tek dinletimde tüm sorular hazır olmalı." },
    { q: "Boşluk: *The ticket costs ___ liras.* Konuşmacı “thirty” der, vurgu ilk hecededir. Doğru cevap nedir?",
      opts: ["13", "300", "3", "30"],
      a: 3,
      why: "*Thirty* ilk hecede vurgulanır ve 30 demektir; *thirteen* son hecede vurgulanır. En çekici yanlış şık A: 13 ile karışıyor." },
    { q: "Ses: “I planned to take the 9 o'clock train, but it was cancelled, so I left at ten.” Cümle: The speaker took the 9 o'clock train. Cevap?",
      opts: ["True, çünkü 9 geçiyor", "True, çünkü tren söyleniyor", "False, çünkü “but” ile ilk bilgi düzeltiliyor", "False, çünkü saat 10 yok"],
      a: 2,
      why: "Konuşmacı planını değiştirmiş; 9 treni iptal olmuş, 10'da ayrılmış. D yanlış: saat 10 geçiyor." },
    { q: "Bir boşluğu kaçırdın ve sıradaki boşluğun cevabı geliyor. Ne yapmalısın?",
      opts: ["Kaçırdığın kelimeyi düşünmeye devam etmek", "Kalemi bırakıp dinlemek", "Sıradaki cevabı kaçırmamak için o boşluğu atlayıp devam etmek", "Rastgele bir kelime yazıp dinlemeyi bırakmak"],
      a: 2,
      why: "Tek dinletimde bir cevaba takılmak sonrakileri de kaçırtır. Kaçırdığın boşluğa sonra tahmin yazabilirsin." }
  ]
};
