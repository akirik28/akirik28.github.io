/* Kitpath not defteri · en101 · 1.1 Pasaj Analizi Paragrafı
   Kaynak: Kasım MEB sınavı biçimi ve rubriği + Byrd/Woods passage-analysis dersi (öğretmen materyali özeti A1 ve D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en101",
  amac: "Kasım sınavının Reading & Writing bölümünde Cultural Perspectives ünitesinden bir öykü ya da deneme pasajı gelir; görev, anlamını ve amacını 200–250 kelimelik bir *passage analysis* paragrafıyla açıklamak. Rubriği, yazının sırasını, QPC yöntemini ve alıntıyı cümleye gömmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Sınav sorusu ne istiyor?",
      kisa: "Pasajın ne söylediğini (meaning) ve neden yazıldığını (purpose) kanıtla açıkla.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 50, sonek: " puan", etiket: "Reading & Writing (sınavın yarısı)" },
            { deger: 40, sonek: " dk", etiket: "yazma süresi" },
            { deger: "200–250", sonek: " kelime", etiket: "en az bir paragraf" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Meaning", tr: "anlam", tanim: "Pasajın söylediği asıl fikir; yani *theme* ya da mesaj. Olay özeti değildir, olayın ne anlama geldiğidir.", ornek: "Başkalarının fedakârlığı görmezden gelinebilir." },
            { ikon: "🎯", terim: "Purpose", tr: "amaç", tanim: "Yazarın bu pasajı neden yazdığı: eleştirmek, uyarmak, düşündürmek, öğretmek, eğlendirmek.", ornek: "Yazar, aileyi ve toplumu eleştirmek için bir kadının görünmezliğini gösteriyor." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "📄", baslik: "Pasaj", metin: "Cultural Perspectives ünitesindeki bir kısa öykü ya da denemeden gelir." },
            { ikon: "✏️", baslik: "Notlar", metin: "Notları pasajın üstüne alabilirsin; paragrafı ise satır aralıksız (*single-spaced*) çizgili kâğıda yazarsın." },
            { ikon: "👁️", baslik: "Okunaklılık", metin: "Okunmayan yazı puan kaybettirir; harfleri ve girintiyi net yaz." },
            { ikon: "📅", baslik: "Mart sınavı ayrı", metin: "Mart sınavı farklıdır (60 dk, Catcher üzerine 4+ paragraflık *essay*); onun için en306'ya bak." }
          ] },
        { tip: "tuzak", baslik: "Özet yazma tuzağı", metin: "Soru “What is the meaning and purpose of the passage?” diye soruyor; “What happens in the passage?” demiyor. Olayları baştan sona anlatan paragraf, rubrikteki puanların çoğunu kaçırır.", yanlis: "Pasajda olanları sırayla anlatırım.", dogru: "Önce iddiamı yazarım; olayları yalnızca iddiamı kanıtlamak için kullanırım." }
      ]
    },
    {
      baslik: "Rubrik: 50 puan nereye gidiyor?",
      kisa: "Puanın yarısı kanıttadır; konu cümlesi ve araçlar ikinci sırada.",
      bloklar: [
        { tip: "grafik", baslik: "Reading & Writing rubriği (50 puan)", xlabel: "Kriter", ylabel: "Puan", xmax: 8, ymax: 28,
          xticks: [{ v: 1, label: "Düzen" }, { v: 2, label: "Konu c." }, { v: 3, label: "Bağlam" }, { v: 4, label: "Kanıt" }, { v: 5, label: "Alıntı" }, { v: 6, label: "Araç" }, { v: 7, label: "Dil" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 25, label: "25" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 1, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 2, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b6", tip: "alan", renk: 2, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "b7", tip: "alan", renk: 2, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 3.8, metin: "3", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 5.8, metin: "5", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 2.8, metin: "2", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 25.8, metin: "25", gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 3.8, metin: "3", gizli: true },
            { id: "t6", tip: "yazi", x: 6, y: 7.8, metin: "7", gizli: true },
            { id: "t7", tip: "yazi", x: 7, y: 5.8, metin: "5", gizli: true }
          ],
          durumlar: [
            { metin: "Yedi kriter, toplam ==50 puan==. Hangisi ne kadar değerli?" },
            { metin: "Önce yapı: paragraf düzeni 3, konu cümlesi 5, bağlam 2. Toplam 10 puan.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 3], [0.65, 3]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] }, b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } }, goster: ["t1", "t2", "t3"] },
            { metin: "Asıl ağırlık: pasajdan bol kanıt (alıntı ve parafraz) ==25 puan==. Tek başına notun yarısı.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 25], [3.65, 25]] } }, goster: ["t4"] },
            { metin: "Kalan 15 puan: alıntı yerleştirme 3, edebi ve yapısal araçlar 7, dil 5.", set: { b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 3], [4.65, 3]] }, b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 7], [5.65, 7]] }, b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 5], [6.65, 5]] } }, goster: ["t5", "t6", "t7"] }
          ] },
        { tip: "tablo", baslik: "Her kriter için ne yapmalı?", head: ["Kriter (puan)", "Notlandıran ne arıyor?", "Sende ne olmalı?"],
          rows: [
            ["Paragraf biçimi ve düzeni (3)", "Düzenli, tek paragraf", "Net girinti, mantıklı sıra, cümleler arası geçişler"],
            ["Konu cümlesi (5)", "Net ve doğru bir iddia", "Konu + görüş (*subject + opinion*): pasajın anlamı ve yazarın amacı"],
            ["Bağlam (2)", "Pasajın bağlamı net ve doğru", "Eser, yazar ve pasajda olan; kısa"],
            ["Kanıt (25)", "Bol kanıt: alıntı ve parafraz; metni anladığını gösterir, konu cümlesini destekler", "QPC zincirleri; her kanıt konu cümlesine bağlı"],
            ["Alıntı yerleştirme (3)", "Alıntı doğru yerleştirilmiş", "Alıntı cümlenin parçası; hiç alıntı yoksa bu kriterden 0"],
            ["Edebi ve yapısal araçlar (7)", "Önemli ve ilgili araçlar belirlenmiş", "Araçları listeleme; kanıtı çözümlerken adlandır"],
            ["İngilizce kullanımı (5)", "Az hata", "Doğru zaman (*literary present*), zengin sözcük, yazım"]
          ], vurgu: 3, not: "Puanlar sınav belgesindeki gibidir; açıklamalar sadeleştirilmiştir." },
        { tip: "not", metin: "==Rubrik sırası ile yazı sırası ayrı şeylerdir.== Notlandıran kriterleri düzen, konu cümlesi, bağlam, kanıt diye işaretler. Sen ise paragrafı farklı kurarsın: önce eser ve bağlam, sonra konu cümlesi, sonra kanıt zincirleri (sıra bir sonraki başlıkta)." }
      ]
    },
    {
      baslik: "Paragrafın iskeleti",
      kisa: "Eser ve bağlam, konu cümlesi, kanıt zincirleri: yaklaşık 215 kelime.",
      bloklar: [
        { tip: "adimlar", baslik: "Yazının sırası (Woods'un örnek paragrafındaki gibi)", adimlar: [
            { baslik: "1 · Yazar, eser adı ve bağlam (~35 kelime)", metin: "Pasaj hangi eserden, yazarı kim, pasajda ne oluyor; kısa tut." },
            { baslik: "2 · Konu cümlesi / tez (~30 kelime)", metin: "Konu + görüş: pasajın anlamı ve yazarın amacı. Araçları burada sıralama." },
            { baslik: "3 · Analiz 1 (~45 kelime)", metin: "QPC: kısa alıntı, parafraz, konu cümlesine bağlantı." },
            { baslik: "4 · Analiz 2 (~45 kelime)", metin: "Başka bir yerden kanıt; ilgili edebi aracı çözümlerken adlandır." },
            { baslik: "5 · Analiz 3 (~45 kelime)", metin: "Üçüncü kanıt; yapısal bir araç (sıra, tekrar, bitiş) olabilir." },
            { baslik: "6 · Kapanış (~15 kelime)", metin: "Ek bilgi (öğretmen belgesinde yok): isteğe bağlı kısa cümle; iddiayı başka sözcüklerle bağlar, yeni kanıt eklemez." }
          ] },
        { tip: "formul", parcalar: [
            { t: "35", alt: "eser + bağlam" }, "+", { t: "30", alt: "konu cümlesi" }, "+", { t: "3 × 45", alt: "üç analiz" }, "+", { t: "15", alt: "kapanış" }, "=", { t: "≈ 215", alt: "kelime (hedef 200–250)" }
          ], aciklama: "Hedef 200–250 kelime sınav yönergesindendir; parça parça bütçe Kitpath'in önerisidir (ek bilgi). Yazdıktan sonra kelimeleri say." }
      ]
    },
    {
      baslik: "Konu cümlesi ve bağlam (7 puan)",
      kisa: "Bağlam zemini kurar; konu cümlesi (konu + görüş) paragrafın iddiasıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📄", baslik: "Zayıf konu cümlesi", maddeler: ["Sadece özet ya da duygu", "Görüş yok, tartışılacak bir şey yok"] },
          sag: { ikon: "🎯", baslik: "Güçlü konu cümlesi", maddeler: ["Konu + görüş (anlam ve amaç)", "Tartışılabilir ve kanıtlanabilir"] },
          oyun: [
            { metin: "This passage is about an old woman who cries at a dinner.", cevap: "sol", neden: "Yalnızca özet; anlam ve amaç yok." },
            { metin: "In the passage, Dolores presents Zézé as invisible to her own family in order to criticize how society treats unmarried women.", cevap: "sag", neden: "Yazar, görüş ve amaç var; kanıtlanabilir bir iddia." },
            { metin: "The Vengeance of Felix is a very interesting story and I liked it.", cevap: "sol", neden: "Kişisel beğeni; sınavda puan getirmez." },
            { metin: "Through Felix's patient revenge, Medeiros e Albuquerque suggests that hatred can destroy the hater as well as the enemy.", cevap: "sag", neden: "Net tema (*meaning*) ve yazar bakışı." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🗺️", baslik: "Eser + bağlam kalıbı", metin: "Sınavda böyle yaz: *This passage from “[title]” by [author] comes at the point where [context].*" },
            { ikon: "✍️", baslik: "Konu cümlesi kalıbı", metin: "Sınavda böyle yaz: *In this passage, [author] shows that [meaning] in order to [purpose].* Kullanacağın araçları buraya yığma; kanıtı çözümlerken adlandır." },
            { ikon: "🔁", baslik: "Amaç fiilleri", metin: "*to criticize, to expose, to warn, to challenge, to illustrate, to question*; “to show” tek başına zayıf kalır." }
          ] },
        { tip: "tuzak", metin: "Bağlam 2 puandır; uzatırsan kanıt için yer kalmaz.", yanlis: "Bağlamda bütün olay örgüsünü anlatırım.", dogru: "Bağlam kısa ve doğru olsun; olayları kanıt kısmında gerektikçe kullan." }
      ]
    },
    {
      baslik: "Kanıt: QPC ve point–example–explanation (25 puan)",
      kisa: "Her kanıt: kısa alıntı, kendi sözlerinle parafraz, konu cümlesine bağlantı.",
      bloklar: [
        { tip: "adimlar", baslik: "QPC: Quote – Paraphrase – Connect", adimlar: [
            { baslik: "Quote (alıntı)", metin: "Anahtar sözcükleri ya da kısa bir öbeği seç; alıntıyı kendi cümlenin parçası yap." },
            { baslik: "Paraphrase (parafraz)", metin: "Alıntının ne dediğini kendi sözlerinle yaz; metni anladığını bu gösterir." },
            { baslik: "Connect (bağlantı)", metin: "İlgili edebi aracı adlandır, kanıtı konu cümlene bağla: *This suggests… because…*" }
          ] },
        { tip: "not", metin: "Çalışma pasajında (Woods) kanıt başka adlarla istenir: her kanıt için bir **point**, bir **example** ve ikisinin anlamla nasıl bağlandığını gösteren bir **explanation**. Aynı zinciri iki adla öğreniyorsun; hangisini kullanırsan kullan zincir eksiksiz olsun." },
        { tip: "tablo", baslik: "Alıntı mı, parafraz mı?", head: ["", "Alıntı (*quotation*)", "Parafraz (*paraphrase*)"],
          rows: [
            ["Nedir?", "Metnin kelimesi kelimesine kısa parçası", "Aynı fikrin kendi cümlenle anlatımı"],
            ["Ne zaman?", "Etkili ya da çarpıcı kelimeler varken", "Uzun bir bölümü kısaca özetlemek gerekirken"],
            ["Kural", "Tırnak içinde, kısa ve seçici", "Tırnak yok; fikir metne ait olduğundan konu cümlene bağla"],
            ["Sınavda böyle yaz", "*Dolores writes that Zézé feels “a glacial chill”.*", "*Dolores shows that Zézé realizes the poem is not meant for her.*"]
          ], vurgu: 3 },
        { tip: "tuzak", metin: "En sık iki kayıp: açıklamasız alıntı ve alıntısız yorum. İkisi de “bol kanıt” puanını düşürür.", yanlis: "Güzel bir cümle seçtim, o kendi başına yeter.", dogru: "Her alıntının arkasında en az bir cümle yorum olsun: *This suggests that…*" }
      ]
    },
    {
      baslik: "Alıntıyı doğru yerleştirmek (3 puan)",
      kisa: "Alıntı cümlenin parçası olmalı; tek başına cümle olmamalı.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "❝", baslik: "Tırnak işareti", metin: "Metinden alınan her kelime grubu tırnak içinde olmalı." },
            { ikon: "🔗", baslik: "Cümleye göm (*embed*)", metin: "Alıntı kendi cümlenin dilbilgisine oturmalı: *Zézé feels “stricken by sudden disillusionment”.*" },
            { ikon: "✂️", baslik: "Kısa ve seçici", metin: "Gereken kelimeleri al. Ek bilgi (öğretmen belgesinde yok): atladığın yeri *…* ile, eklediğin kelimeyi *[ ]* ile göster." },
            { ikon: "🚫", baslik: "“In the quote” yazma", metin: "Alıntıyı tırnak zaten gösterir; sözü doğrudan cümlene kat ve ne gösterdiğini söyle." },
            { ikon: "🏷️", baslik: "Eser adı", metin: "Roman/kitap adı el yazısında altı çizili; kısa öykü ya da deneme adı tırnak içinde. Çalışma pasajında sayfa numarası istenmedi." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru yerleştirilmiş", maddeler: ["Alıntı cümlenin parçası", "Tırnak var, yorum var"] },
          sag: { ikon: "⚠️", baslik: "Hatalı", maddeler: ["Kopuk, tırnaksız ya da yorumsuz", "Cümleyle uyumsuz"] },
          oyun: [
            { metin: "Dolores writes that the family “hardly considered her in the light of a living person.”", cevap: "sol", neden: "Giriş, tırnak ve gömülü alıntı var." },
            { metin: "“They hardly considered her in the light of a living person.”", cevap: "sag", neden: "Alıntı tek başına cümle olmuş; giriş ve yorum yok." },
            { metin: "Zézé feels “stricken by sudden disillusionment” when she understands the poem.", cevap: "sol", neden: "Alıntı cümleye dilbilgisel olarak oturuyor." },
            { metin: "In the quote, the narrator says Zézé feels “a glacial chill.”", cevap: "sag", neden: "“In the quote” kalıbı kullanılmamalı; sözü doğrudan cümleye kat." },
            { metin: "Felix wants revenge. exceedingly patient in his vindictiveness.", cevap: "sag", neden: "Tırnak yok, cümle kopuk." }
          ] },
        { tip: "tuzak", metin: "Pasajdan hiç alıntı yoksa bu kriterden 0 alırsın. Üç puan küçük görünür ama kısa bir alıntı bile onu kurtarır.", yanlis: "Sadece parafraz yazarım, alıntıya gerek yok.", dogru: "Paragrafta en az bir doğru yerleştirilmiş kısa alıntı kullan." }
      ]
    },
    {
      baslik: "Araçlar, dil ve yapay zekâ kuralı (12 puan)",
      kisa: "Araçları sayma, çözümle; şimdiki zamanla yaz; paragrafı kendin kur.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Araç", alt: "adı" }, "+", { t: "Kanıt", alt: "alıntı ya da parafraz" }, "+", { t: "Etki", alt: "anlama katkısı" }, "=", { t: "7 puan", alt: "edebi ve yapısal araçlar" }
          ], aciklama: "Sınavda böyle yaz: *The irony here shows that…* Aracı kanıtı çözümlerken adlandır; paragrafın başında ya da sonunda araç listesi yazma. Araçlar en102'de." },
        { tip: "liste", maddeler: [
            { ikon: "⏱️", baslik: "Literary present", metin: "Edebi analizde şimdiki zaman: *Zézé weeps*. Flashback'te geçmiş, ileride olacakta gelecek zaman kullanılabilir." },
            { ikon: "🔍", baslik: "Kanıt fiilleri", metin: "*show, demonstrate, illustrate, indicate, point to, reveal, underscore, highlight*; ayrıca *evidence of* kalıbı." },
            { ikon: "🚫", baslik: "Araçları listeleme", metin: "“The author uses irony, imagery and symbolism” gibi sıralama yazma; her aracı kanıtıyla çözümle." },
            { ikon: "🔤", baslik: "Dil ve sözcük", metin: "Karakter adlarını doğru yaz, canlı sözcük seç (*nice, bad* gibi belirsiz sözcüklerden kaçın), temel dilbilgisi hatası yapma." }
          ] },
        { tip: "not", metin: "==Yapay zekâ kuralı:== okulda üretken yapay zekâ araştırma ya da yazma yerine geçemez. Yalnız çok sınırlı kullanım tanınıyor: düzen önerisi (içerik değil), ağdalı cümleyi kısaltma, yazım denetimiyle hataları kendin düzeltme. Sınavda paragrafı zaten tek başına yazarsın; bu defter hazır paragraf değil, iskelet ve kalıp verir." }
      ]
    },
    {
      baslik: "Yazdıktan sonra: peer-editing kontrol listesi",
      kisa: "Paragrafını bir arkadaşın gözüyle altı soruda kontrol et.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎯", baslik: "Tez", metin: "Konu cümlende konu ve görüş (*subject + opinion*) var mı?" },
            { ikon: "📚", baslik: "Bağlam", metin: "Pasajın eserdeki yeri doğru ve kısa anlatılmış mı?" },
            { ikon: "🛠️", baslik: "Araçlar ve dil", metin: "Yazarın dil kullanımı ve teknikleri kanıtla çözümlenmiş mi, yoksa sıralanmış mı?" },
            { ikon: "🧭", baslik: "Amaç", metin: "Pasajın amacı (yazar bunu neden koymuş) açıkça söylenmiş mi?" },
            { ikon: "❝", baslik: "Kanıt", metin: "Alıntı ve/veya parafraz var mı; alıntı cümleye gömülü mü?" },
            { ikon: "✅", baslik: "İngilizce", metin: "Dilbilgisi, zaman, yazım ve okunaklılık düzgün mü?" }
          ] },
        { tip: "not", metin: "Ek bilgi (öğretmen belgesinde yok): bu yöntem Cultural Perspectives'te işlenen diğer metinlerde de çalışıldı: Amy Tan'ın *Two Kinds* öyküsü (200–300 kelimelik çalışma paragrafı), Orwell'in *A Hanging* denemesi, Achebe'nin *Things Fall Apart* kitabından ilk bölümler. Bu defterler telifli metinlerden alıntı yapmaz; yöntemi kamuya açık yaz okuması öykülerinde (en103–en105) dene." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Görev: *What is the meaning and purpose of the passage?* En az bir paragraf, 200–250 kelime, 40 dakika, 50 puan.",
            "Puanlar: düzen 3, konu cümlesi 5, bağlam 2, kanıt 25, alıntı yerleştirme 3, araçlar 7, İngilizce 5.",
            "Rubrik sırası ayrı, yazı sırası ayrı: eser + bağlam, konu cümlesi, kanıt zincirleri.",
            "Konu cümlesi = konu + görüş; *meaning* mesaj, *purpose* yazarın niyetidir.",
            "Kanıt = QPC (alıntı, parafraz, bağlantı); çalışma pasajında *point–example–explanation*.",
            "Alıntıyı cümleye göm; “in the quote” yazma; hiç alıntı yoksa yerleştirme kriteri 0.",
            "Araçları listeleme, çözümle; *literary present* ve *reveal, underscore, highlight* gibi fiiller.",
            "Paragrafı sen yaz; üretken yapay zekâ yazmada yasak. Mart sınavı farklıdır (en306)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "According to the Reading & Writing rubric, which criterion is worth the most points?",
      opts: ["Abundant evidence from the passage (quotations and paraphrases)", "A clear and accurate topic sentence", "Identifying literary and structural devices", "English usage"],
      a: 0,
      why: "Kanıt 25 puandır; konu cümlesi 5, araçlar 7, İngilizce 5. En çekici yanlış şık C: araçlar önemlidir ama 7 puandır, kanıt ise tek başına notun yarısıdır." },
    { q: "A student begins a paragraph with: \"The story is about a woman who lives with her sister and cries at a dinner.\" What is the best evaluation of this sentence?",
      opts: ["It is a strong topic sentence because it describes the plot", "It is weak because it only summarizes and gives no opinion about meaning or purpose", "It is weak because it is too short", "It is strong because it does not name the author"],
      a: 1,
      why: "Konu cümlesi konu + görüş taşımalı (anlam ve amaç); bu cümle yalnızca olay özeti. Kısalık ölçüt değildir; C bu yüzden yanlış." },
    { q: "Which sentence places the quotation correctly?",
      opts: ["Felix is stubborn. exceedingly patient in his vindictiveness.", "\"Exceedingly patient in his vindictiveness.\" Felix is angry.", "The narrator says Felix is \"exceedingly patient in his vindictiveness.\"", "In the quote, Felix is exceedingly patient in his vindictiveness."],
      a: 2,
      why: "C'de alıntı cümlenin parçası ve tırnak içinde. B'de alıntı tek başına bırakılmış, D'de tırnak yok ve \"in the quote\" kalıbı kullanılmış; A'da cümle kopuk." },
    { q: "A student spends 120 words of a 200-250 word paragraph on the context of the passage. What is the biggest risk?",
      opts: ["The topic sentence will receive no points", "The English usage criterion will drop to zero", "There is no risk; a longer context earns more points", "Context is worth only 2 points, so little room is left for the evidence, which is worth 25"],
      a: 3,
      why: "Bağlam 2 puan, kanıt 25 puandır; yer yanlış yerde harcanır. C yanlış: bağlam uzadıkça puan artmaz." },
    { q: "Which sentence follows the rule \"analyze the literary devices, do not list them\"?",
      opts: ["The final line is ironic: Monjardin praises the tears as a tribute to his poetry, which shows that he misreads Zézé's pain.", "The author uses irony, imagery, symbolism and diction in this passage.", "In the quote, the author uses irony.", "Irony, imagery and symbolism are devices in the story."],
      a: 0,
      why: "A aracı adlandırır, kanıta ve etkisine bağlar. B ve D araç sayar; C hem araç sayar hem de yasak \"in the quote\" kalıbını kullanır." }
  ]
};
