/* Kitora not defteri · en502 · 5.2 Konuşma Bölümü (MEB Skills Exams · Speaking)
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Kasım MEB sınavı: Speaking 25 puan, 1 dk hazırlık, 2–3 dk Voice Memo; rubrik 10+5+5+5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en502",
  amac: "Kasım MEB sınavının *Speaking* bölümü 25 puan: 1 dakika hazırlık, 2–3 dakikalık bir *Voice Memo* kaydı. Burada rubriği, hazırlık dakikasını nasıl kullanacağını ve konuşma kalıplarını öğreneceksin; hazır metin değil, yapı ve iskelet var.",
  bolumler: [
    {
      baslik: "Biçim: 1 dakika hazırlık, 2–3 dakika kayıt",
      kisa: "Hazırlık çok kısa; konuşmayı *Voice Memo* ile kaydedersin.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 25, sonek: " puan", etiket: "Speaking (sınavın dörtte biri)" },
            { deger: 1, sonek: " dk", etiket: "hazırlık" },
            { deger: "2–3", sonek: " dk", etiket: "*Voice Memo* kaydı" }
          ] },
        { tip: "not", metin: "Soruyu sınavda görürsün; 1 dakika içinde plan yapıp kaydı başlatırsın. Kayıtla ilgili teknik ayrıntıları (tekrar kayıt hakkı, dosyanın nasıl teslim edildiği) öğretmeninin yönergesinden öğren; bu defter yalnızca bilinen biçimi anlatır." }
      ]
    },
    {
      baslik: "Rubrik: 25 puan",
      kisa: "Puanın dörtte biri soruyu karşılamak; konuşmayı ona göre kur.",
      bloklar: [
        { tip: "grafik", baslik: "Speaking rubriği (25 puan)", xlabel: "Kriter", ylabel: "Puan", xmax: 5, ymax: 12,
          xticks: [{ v: 1, label: "Soru" }, { v: 2, label: "Akıcılık" }, { v: 3, label: "Kelime" }, { v: 4, label: "Telaffuz + dilbilgisi" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 0, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 10.8, metin: "10", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 5.8, metin: "5", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 5.8, metin: "5", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 5.8, metin: "5", gizli: true }
          ],
          durumlar: [
            { metin: "Dört kriter, toplam ==25 puan==." },
            { metin: "==Soruyu karşılama: 10 puan==. Tek başına en büyük kriter.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 10], [0.65, 10]] } }, goster: ["t1"] },
            { metin: "Akıcılık 5 puan: duraksamadan, doğal akış.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] } }, goster: ["t2"] },
            { metin: "Kelime 5 puan: çeşitli ve yerinde sözcükler.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 5], [2.65, 5]] } }, goster: ["t3"] },
            { metin: "Telaffuz ve dilbilgisi birlikte 5 puan: anlaşılır ve doğru cümleler.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 5], [3.65, 5]] } }, goster: ["t4"] }
          ] },
        { tip: "tablo", head: ["Kriter", "Ne yapmalı?", "Sınavda böyle söyle"],
          rows: [
            ["Soruyu karşılama (10)", "Soruyu ilk cümlede cevapla; her bölümde soruya dön", "*The main reason is…*"],
            ["Akıcılık (5)", "Durup tekrar başlama; kısa dolgu sözcükleriyle devam et", "*Let me think… / Well, …*"],
            ["Kelime (5)", "Aynı kelimeyi tekrarlamak yerine eş anlamlı kullan; bilmediğin kelimeyi anlat", "*It's something you use to…*"],
            ["Telaffuz + dilbilgisi (5)", "Basit yapıları doğru kur; zamanı tutarlı tut", "*I think… because… For example…*"]
          ], vurgu: 0 }
      ]
    },
    {
      baslik: "Hazırlık dakikası: konuşmayı planla",
      kisa: "Cümle değil, anahtar kelime yaz: cevap, iki neden, örnek, kapanış.",
      bloklar: [
        { tip: "adimlar", baslik: "60 saniyelik plan", adimlar: [
            { baslik: "0–15 sn: soruyu oku", metin: "Soruyu iki kez oku; anahtar sözcüklerin altını çiz. Ne isteniyor: anlat, karşılaştır, görüş bildir?" },
            { baslik: "15–40 sn: cevabını seç", metin: "Net bir cevap seç ve 2 neden ya da bölüm belirle; yalnızca anahtar kelime yaz." },
            { baslik: "40–60 sn: örnek ve kapanış", metin: "Her neden için bir günlük hayat örneği düşün; kapanışta soruyu tekrar cevapla." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Cevap", alt: "soruyu karşıla" }, "+", { t: "Neden", alt: "*because…*" }, "+", { t: "Örnek", alt: "*for example…*" }, "+", { t: "Bağlantı", alt: "soruya dön" }
          ], aciklama: "Bu kalıp bir ana fikri tamamlar. 2–3 dakikaya sığması için iki ana fikir yeterli olabilir; süreyi kendin prova ederek ayarla." },
        { tip: "tuzak", metin: "Hazırlıkta tam cümle yazmaya çalışmak zaman kaybıdır; kayıtta da okuyormuş gibi tutuk konuşursun.", yanlis: "Bütün konuşmamı yazıp okurum.", dogru: "Yalnızca anahtar kelime ve örnekleri not et; cümleleri konuşurken kur." }
      ]
    },
    {
      baslik: "Soruyu karşılamak (10 puan)",
      kisa: "Soru ne istiyorsa onu söyle; bilgin ne kadar iyi olsa da konudan sapma.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🎯", baslik: "Soruyu karşılıyor", maddeler: ["İlk cümlede cevap var", "Gerekçe ve örnek soruya bağlı"] },
          sag: { ikon: "↪️", baslik: "Soruyu karşılamıyor", maddeler: ["Konuyla ilgili ama soruya yanıt değil", "Genel bilgi ya da ezber"] },
          oyun: [
            { metin: "Soru: *Describe a place you like to visit and say why.* Cevap: *One place I enjoy visiting is the old city, because…*", cevap: "sol", neden: "Önce yeri söylüyor, sonra neden veriyor." },
            { metin: "Soru: *Describe a place you like to visit and say why.* Cevap: *Cities are very important in history. There are many cities in the world…*", cevap: "sag", neden: "Genel bilgi; yer ve neden yok." },
            { metin: "Soru: *Do you think homework is useful?* Cevap: *Yes, I think it is useful, mainly because…*", cevap: "sol", neden: "Görüşünü hemen söylüyor." },
            { metin: "Soru: *Do you think homework is useful?* Cevap: *My school is big and has many teachers…*", cevap: "sag", neden: "Soruyla ilgisiz." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🏁", baslik: "Açılış", metin: "Sınavda böyle söyle: *I'd like to talk about…, In my opinion…, One place/person I would choose is…*" },
            { ikon: "🧩", baslik: "Neden ve örnek", metin: "*The main reason is… For example… Another reason is…*" },
            { ikon: "🔚", baslik: "Kapanış", metin: "*To sum up, … / That's why I think…*" }
          ] }
      ]
    },
    {
      baslik: "Akıcılık, kelime, telaffuz ve dilbilgisi (15 puan)",
      kisa: "Karmaşık ama hatalı cümle yerine, basit ve doğru cümle.",
      bloklar: [
        { tip: "tablo", head: ["Kriter", "Puan getiren", "Puan kıran"],
          rows: [
            ["Akıcılık", "Doğal tempo, kısa dolgu sözcükleri", "Uzun sessizlikler, sürekli baştan başlama"],
            ["Kelime", "Yerinde, çeşitli kelimeler; bilmediğini anlatma", "Aynı kelimeyi tekrar etme; Türkçe kelimeye kaçma"],
            ["Telaffuz", "Anlaşılır, vurguyu doğru yerde kullanma", "Her kelimeyi aynı hızda ve düz söyleme"],
            ["Dilbilgisi", "Zamanı tutarlı tutma", "Zaman karıştırma, kısa ama bozuk cümleler"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌊", terim: "Fluency", tr: "akıcılık", tanim: "Konuşmanın sık duraksamadan, doğal tempoda akması.", ornek: "Kısa dolgularla devam etmek akıcılığı korur." },
            { ikon: "💬", terim: "Filler", tr: "dolgu sözcüğü", tanim: "Düşünürken kullanılan kısa ifadeler; az ve doğal kullanılırsa yardımcı olur.", ornek: "*well, let me think, you know*" },
            { ikon: "🧭", terim: "Discourse marker", tr: "bağlayıcı ifade", tanim: "Konuşmayı düzenleyen ve fikirleri bağlayan sözcükler.", ornek: "*first of all, however, as a result*" },
            { ikon: "🗣️", terim: "Paraphrasing", tr: "başka sözcüklerle anlatma", tanim: "Bilmediğin kelimeyi başka kelimelerle anlatmak.", ornek: "*a thing that you use to…*" }
          ] },
        { tip: "ikili", sol: { ikon: "🛠️", baslik: "Takılırsan", maddeler: ["Kısa dolgu kullan: *well, let me think*", "Bilmediğin kelimeyi anlat: *a thing that…*"] },
          sag: { ikon: "🚫", baslik: "Yapma", maddeler: ["Susup kalma", "Türkçe kelimeyle devam etme"] } },
        { tip: "tuzak", metin: "Telaffuz ve dilbilgisi birlikte 5 puandır. Karmaşık bir yapı kurup yanlış yapmaktansa, basit bir yapıyı doğru kullan.", yanlis: "Uzun ve süslü cümle kursam daha çok puan alırım.", dogru: "Net ve doğru cümle daha güvenli puan getirir." }
      ]
    },
    {
      baslik: "Voice Memo pratiği ve yapay zekâ kuralı",
      kisa: "Kendi sesini kaydedip dinle; hazır konuşma metnini yapay zekâya yazdırma.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🔇", baslik: "Sessiz oda", metin: "Arka plan gürültüsü olmayan bir yerde kayıt al." },
            { ikon: "📱", baslik: "Telefon mesafesi", metin: "Telefonu ağzından bir karış uzakta tut; önce kısa bir deneme kaydı yap." },
            { ikon: "⏱️", baslik: "Süre", metin: "2–3 dakikayı prova et: açılış, iki ana fikir, kapanış." },
            { ikon: "🎙️", baslik: "Dinle ve kendini değerlendir", metin: "Kaydını rubrikle dinle: soruyu cevapladım mı, durup baştan mı başladım?" }
          ] },
        { tip: "not", metin: "==Yapay zekâ kuralı:== okulda araştırmada ve yazmada üretken yapay zekâ yasaktır; yalnızca sınırlı kullanım (düzen önerisi, kısaltma, yazım denetimi) tanınıyor. Konuşma metnini bir araca yazdırıp ezberlemek bu kuralın dışına çıkar ve sınavda 1 dakika hazırlıkla da işe yaramaz. Bu defter hazır konuşma vermez; yalnızca yapı, kriter ve cümle kalıbı verir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Speaking*: 25 puan; 1 dakika hazırlık, 2–3 dakika *Voice Memo*.",
            "Rubrik: soruyu karşılama 10, akıcılık 5, kelime 5, telaffuz ve dilbilgisi 5.",
            "İlk cümlede soruyu cevapla; her bölümde soruya dön.",
            "Hazırlıkta anahtar kelime yaz: cevap, iki neden, örnek, kapanış.",
            "Takılırsan dolgu kullan ya da bilmediğin kelimeyi anlat; Türkçeye kaçma.",
            "Basit ve doğru cümle, karmaşık ve hatalı cümleden iyidir.",
            "Kendi sesini kaydedip rubrikle dinle; konuşmayı yapay zekâya yazdırma."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Speaking bölümünde en çok puan hangi kriterden gelir?",
      opts: ["Akıcılık", "Kelime", "Soruyu karşılama", "Telaffuz ve dilbilgisi"],
      a: 2,
      why: "Soruyu karşılama 10 puandır; diğer üç kriterin her biri 5 puan. En çekici yanlış şık A: akıcılık önemlidir ama 5 puandır." },
    { q: "Soru: *Describe a teacher who has influenced you and explain why.* Bir öğrenci 2 dakika boyunca akıcı biçimde okulunun binasını anlatıyor. Hangi kriterden en çok puan kaybeder?",
      opts: ["Soruyu karşılama", "Akıcılık", "Kelime", "Telaffuz"],
      a: 0,
      why: "Akıcı konuşsa da soruyu cevaplamıyor; en büyük kayıp 10 puanlık kriterden olur. Akıcılık ise iyi olabilir." },
    { q: "1 dakikalık hazırlıkta en doğru yöntem hangisidir?",
      opts: ["Konuşmanın tamamını yazmak", "Soruyu okuyup cevap, iki neden ve örnekleri anahtar kelimeyle planlamak", "Hiçbir şey yapmamak", "Yalnızca ilk cümleyi yazmak"],
      a: 1,
      why: "Anahtar kelimeli plan, doğal konuşmayı korur. A zaman kaybıdır ve okuyormuş gibi tutuk konuşturur." },
    { q: "Kayıt sırasında bir kelimeyi hatırlayamadın. En iyi hamle hangisidir?",
      opts: ["Sessiz kalıp beklemek", "Kaydı bırakmak", "Türkçe kelimeyle devam etmek", "*It's something you use to…* diye anlatıp devam etmek"],
      a: 3,
      why: "Kelimeyi anlatmak hem akıcılığı hem kelime puanını korur. C yanlış: Türkçe kelime kullanmak kelime kriterinde puan kaybettirir." },
    { q: "Okulun üretken yapay zekâ kuralına göre hangisi kabul edilen kullanım değildir?",
      opts: ["Yazım denetimi", "Düzen önerisi", "Konuşma ya da yazının kendisini yazdırmak", "Metni kısaltma"],
      a: 2,
      why: "Okulda yazmada ve araştırmada üretken yapay zekâ yasaktır; yalnızca sınırlı kullanımlar (düzen önerisi, kısaltma, yazım denetimi) tanınır. Metnin kendisini yazdırmak bunun dışındadır." }
  ]
};
