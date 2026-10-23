/* Kitora not defteri · en306 · 3.6 Catcher Üzerine Yazmak
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye): MEB sınav biçimleri (Mart ve Haziran), Byrd passage-analysis slaytları, Woods örnek analizi/peer editing, okulun yapay zekâ kuralı + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı.
   Bu defter hazır essay ya da konuşma metni VERMEZ: yapı, kriter ve cümle iskeletleri verir. Telif: romandan gerçek alıntı yok (alıntı yerleri [kısa alıntı] ile gösterilir). Mart R/W rubriği belgede yoktur; Kasım paragraf rubriği "ek bilgi" olarak etiketlidir. */
window.DEFTER = {
  slug: "en306",
  amac: "Bu konu Catcher üzerine yazmayı ve konuşmayı öğretiyor: Mart'taki 60 dakikalık pasaj analizi essay'i, tez, body paragraf, QPC, edebi araçlar, Mart ve Haziran konuşma sınavları ve yapay zekâ kuralı. Hazır metin vermez; yapıyı ve cümle iskeletlerini verir, yazıyı sen yazarsın.",
  bolumler: [
    {
      baslik: "Mart R/W sınavı: 60 dakikalık pasaj analizi essay'i",
      kisa: "Mart R/W: Ch 1–13'ten tek pasaj, el yazısı, en az dört paragraflık essay.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 60, sonek: " dk", etiket: "yazma süresi" },
            { deger: 4, onek: "≥ ", etiket: "paragraf (essay)" },
            { deger: 1, etiket: "pasaj, Ch 1–13" },
            { deger: 50, etiket: "R/W puanı (27 Mart)" }
          ] },
        { tip: "liste", baslik: "Sınav günü: soru ve kurallar", maddeler: [
            { ikon: "❓", baslik: "Soru", metin: "Pasaja dayanarak Salinger'ın okura Holden hakkında ne düşündürmek istediğini açıkla; yazarın sözcük seçimi Holden'ın karakterini nasıl ortaya koyuyor? Yalnız Holden hakkında yaz." },
            { ikon: "✏️", baslik: "Masada", metin: "Yalnızca kurşun kalem ve silgi. Not, roman, sözlük, telefon ve akıllı saat yok. Yazı el yazısıdır; okunaklı yaz." },
            { ikon: "📋", baslik: "Rubrik", metin: "Mart R/W rubriği Google Classroom'da Unit 3 > Passage Analysis klasöründedir; ilk sınıf içi deneme essay'i onunla notlandı. Puanlar bu defterin kaynağında yok; oradan oku." },
            { ikon: "🗓️", baslik: "Mart'ın geri kalanı", metin: "2 Nisan'da Listening (en çok 25 dk, 25 puan, kayıt iki kez çalınır) ve Speaking (en çok 15 dk, 25 puan) yapılır." }
          ] },
        { tip: "tablo", baslik: "Kasım paragrafı ile Mart essay'i: karıştırma", head: ["", "Kasım (Exam 1, Dönem 1)", "Mart (Exam 1, Dönem 2)"], rows: [
            ["Metin", "Kısa öykü ya da deneme (Cultural Perspectives)", "*The Catcher in the Rye*, Ch 1–13 içinden tek pasaj"],
            ["Süre", "40 dakika", "60 dakika"],
            ["Biçim", "En az bir iyi örgütlenmiş passage-analysis ==paragrafı==", "Passage-analysis ==essay==, en az 4 paragraf"],
            ["Uzunluk hedefi", "200–250 kelime", "Belgede kelime sayısı yok"],
            ["Rubrik", "50 puanlık paragraf rubriği (3. başlıkta)", "Classroom'daki Passage Analysis rubriği; puanlar belgede yok"]
          ] },
        { tip: "tuzak", baslik: "Paragraf değil, essay", metin: "Mart R/W tek paragraf değil, introduction, body ve conclusion içeren bir denemedir. Tek paragraf yazarsan yapı baştan eksik kalır.", yanlis: "Mart'ta da Kasım gibi tek bir 200–250 kelimelik paragraf yazarım.", dogru: "Mart'ta introduction, en az iki body ve conclusion yaz. Sınavda böyle başla: *In Chapter __ of The Catcher in the Rye, J. D. Salinger…*" }
      ]
    },
    {
      baslik: "Essay iskeleti ve tez cümlesi",
      kisa: "Giriş kısa, asıl içerik body'de; tez bir görüş taşır ve body'leri haritalar.",
      bloklar: [
        { tip: "adimlar", baslik: "Essay haritası", adimlar: [
            { baslik: "Plan", metin: "Pasajı dikkatle oku, romandaki bağlamı hatırla, yazarın amacını belirle; 1–3 ana özellik seç (body konuları bunlar olabilir), pasajın üstüne not al, kaba bir outline çıkar. Ek bilgi (öğretmen belgesinde yok): bunun için sürenin ilk 8–10 dakikasını ayırmak mantıklı olur." },
            { baslik: "Introduction", metin: "Bağlam (kitabın adı, yazar, hikâyede o an ne oluyor; 1–2 cümle), pasajın konusu (1 cümle) ve tez. Kısa tut." },
            { baslik: "Body 1", metin: "Tezle ilişkili net bir konu cümlesi; Quote, Paraphrase, Connect ile kanıt; amacı ve etkisini açıkla." },
            { baslik: "Body 2", metin: "Aynı düzen: ikinci özellik ya da ikinci kanıt zinciri. İki body yeter; pasajda kal." },
            { baslik: "Conclusion", metin: "Tezi özetle ve yeni ama ilgili bir düşünce ekle: olay hikâyede ileride nasıl bağlanıyor, eserin bütününe ya da daha geniş bir hayat temasına nasıl bağlanıyor? Yeni fikri body'ye değil buraya sakla." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Konu", alt: "pasajda Holden" }, "+",
            { t: "Görüş", alt: "Salinger ne düşündürüyor?" }, "+",
            { t: "Harita", alt: "body'lerin konusu / araçlar" }, "=",
            { t: "Tez", alt: "tek cümle" }
          ], aciklama: "Woods'un peer-editing ölçütü: tez = konu + görüş. Tez bilgi (“Holden okuldan atılır”) değil, savunulacak bir yorum olmalı." },
        { tip: "ikili", sol: { ikon: "💪", baslik: "Güçlü tez", maddeler: ["Konu + tartışılabilir görüş", "Body'leri haritalar (araç ve etki)"] },
          sag: { ikon: "🪫", baslik: "Zayıf tez", maddeler: ["Olay özeti ya da gerçek bilgi", "Görüş yok; “ne” söyler, “nasıl”ı söylemez"] },
          oyun: [
            { metin: "Holden is a boy who leaves school and goes to New York.", cevap: "sag", neden: "Olay özeti: tartışılacak bir iddia yok." },
            { metin: "Through repetition and slang, Salinger suggests that Holden's bravado hides loneliness.", cevap: "sol", neden: "Görüş + araç + etki." },
            { metin: "The Catcher in the Rye is a famous novel by J. D. Salinger.", cevap: "sag", neden: "Gerçek bilgi; tez değil." },
            { metin: "By using exaggerated, colloquial diction, Salinger portrays Holden as observant but defensive.", cevap: "sol", neden: "Karakter hakkında bir görüş ve onu gösteren araç." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: giriş, body, sonuç iskeleti (boşlukları sen doldur)", head: ["Parça", "İskelet"], rows: [
            ["Bağlam", "*In Chapter __ of The Catcher in the Rye, J. D. Salinger shows that Holden __.*"],
            ["Pasajın konusu", "*In this passage, Holden __.*"],
            ["Tez", "*Through __ and __, Salinger suggests that Holden is __.*"],
            ["Body konu cümlesi", "*First, Salinger reveals Holden's __ through __.*"],
            ["Conclusion", "*Ultimately, Salinger presents Holden as __; this moment also anticipates __ later in the novel.*"]
          ], not: "İskelet yalnızca yapıyı gösterir; tezini pasajına göre kendin kur. Roman adı yazılıyorsa italik (el yazısında altı çizili)." }
      ]
    },
    {
      baslik: "Body paragraf: konu cümlesi ve QPC",
      kisa: "Her kanıt Quote, Paraphrase, Connect sırasıyla gelir ve konu cümlesine bağlanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💬", terim: "Quote", tr: "kısa, seçici alıntı", tanim: "Pasajdan anahtar sözcükler ya da kısa bir öbek. Alıntıyı kendi cümlenin PARÇASI yap (gömülü); alıntı tek başına cümle olmasın.", ornek: "Holden *remarks that* [kısa alıntı] ile başlayan cümle." },
            { ikon: "🔄", terim: "Paraphrase", tr: "kendi sözlerinle anlatma", tanim: "Alıntının ne dediğini kendi cümlelerinle yeniden söyle; anladığını gösterir.", ornek: "*In other words, Holden __.*" },
            { ikon: "🔗", terim: "Connect", tr: "bağlama", tanim: "İlgili edebi aracı adlandır, etkisini söyle ve kanıtı konu cümlesine ve teze bağla.", ornek: "*This diction reveals __, which supports the idea that __.*" }
          ] },
        { tip: "grafik", baslik: "Ek bilgi (Kasım paragraf rubriği, Mart rubriği değil): 50 puan nasıl dağılıyor?", xlabel: "Rubrik kalemi", ylabel: "Puan", xmax: 8, ymax: 28,
          xticks: [{ v: 1, label: "Düzen" }, { v: 2, label: "Konu c." }, { v: 3, label: "Bağlam" }, { v: 4, label: "Kanıt" }, { v: 5, label: "Alıntı yer." }, { v: 6, label: "Edebi araç" }, { v: 7, label: "Dil" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 25, label: "25" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 2, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 1, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b6", tip: "alan", renk: 3, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "b7", tip: "alan", renk: 3, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]] },
            { id: "tp", tip: "yazi", x: 4, y: 27, metin: "Toplam: 3+5+2+25+3+7+5 = 50", gizli: true }
          ],
          durumlar: [
            { metin: "Yapı puanları küçüktür: ==paragraf biçimi ve düzeni 3, konu cümlesi 5, bağlam 2== (toplam 10).", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 3], [0.65, 3]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] }, b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } } },
            { metin: "En büyük kalem ==kanıt: 25 puan==; yani alıntı ve parafraz puanın yarısıdır.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 25], [3.65, 25]] } } },
            { metin: "Alıntıların ==doğru yerleştirilmesi 3== (alıntı yoksa 0) ve ==edebi ve yapısal araçlar 7==.", set: { b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 3], [4.65, 3]] }, b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 7], [5.65, 7]] } } },
            { metin: "==İngilizce kullanımı: 5 puan.== Az hata, doğru dilbilgisi.", set: { b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 5], [6.65, 5]] } } },
            { metin: "Hepsi 50 puan eder. Bu dağılım Kasım paragrafınındır; Mart essay'inin puanları belgede yok, ama ders ==kanıt ve analizin ağır bastığı== bir yazı beklemektir.", goster: ["tp"] }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: body paragraf iskeleti", head: ["Parça", "İskelet"], rows: [
            ["Konu cümlesi", "*In the passage, Salinger reveals Holden's __ through his word choice.*"],
            ["Gömülü alıntı", "*Holden describes __ as \"[kısa alıntı]\", which shows __.*"],
            ["Parafraz", "*In other words, Holden __.*"],
            ["Bağlantı", "*This diction suggests __, which supports the idea that __.*"]
          ], not: "Alıntı kısa kalsın (birkaç kelime) ve cümlenin içinde olsun. Öğretmenin uyarısı: “in the quote” yazma; alıntıyı doğrudan yorumla." }
      ]
    },
    {
      baslik: "Edebi araçlar ve etki fiilleri",
      kisa: "Aracı adlandır, etkisini söyle; araç listesi yazma, analiz et.",
      bloklar: [
        { tip: "tablo", baslik: "Araçlar ve Catcher'dan fikir", head: ["Araç", "Türkçesi", "Catcher'da nerede?"], rows: [
            ["*Diction*", "kelime seçimi", "Holden'ın argosu ve dolgu ifadeleri"],
            ["*Hyperbole* ve *idiom*", "abartı, deyim", "“Herkes sahte” türü genellemeler; gündelik deyimler"],
            ["*Tone*", "ton", "Alaycı, savunmacı, yer yer şefkatli"],
            ["*Irony*", "ironi", "Sahteliği eleştiren Holden'ın yalanları"],
            ["*Imagery*", "imgelem", "Gölet, atlıkarıncadaki yağmur"],
            ["*Symbolism*", "sembolizm", "Şapka, ördekler, müze, eldiven"],
            ["*Characterization*", "karakterleştirme", "Phoebe ve Stradlater karşıtlığı"],
            ["*Point of view*", "bakış açısı", "Birinci tekil anlatıcı"]
          ] },
        { tip: "liste", baslik: "Sınavda böyle yaz: kanıtın ne gösterdiğini söyleyen fiiller", maddeler: [
            { ikon: "💡", baslik: "show / demonstrate / illustrate", metin: "*This exaggeration illustrates Holden's need for attention.*" },
            { ikon: "🔦", baslik: "indicate / point to / is evidence of", metin: "*The repeated slang points to a defensive pose.*" },
            { ikon: "🔎", baslik: "reveal / underscore / highlight", metin: "*The contrast underscores Holden's isolation.*" }
          ] },
        { tip: "tuzak", baslik: "Araçları listeleme", metin: "Öğretmen kullanacağın yapısal ve edebi araçları ASLA listelemeni istemez: yalnızca analiz et. Aracı ve etkisini cümlenin içinde söyle.", yanlis: "*Salinger uses diction, imagery and irony.*", dogru: "*Holden's slangy diction makes him sound defensive while his hyperbole exposes…*" }
      ]
    },
    {
      baslik: "Conclusion, geçişler ve üslup",
      kisa: "Sonuçta tez yinelenir ve yeni ilgili bir düşünce eklenir.",
      bloklar: [
        { tip: "liste", baslik: "Notlandırırken aranan", maddeler: [
            { ikon: "🏁", baslik: "Conclusion", metin: "*Ultimately, this passage shows that Holden…; it also points forward to…*" },
            { ikon: "⏱️", baslik: "*Literary present*", metin: "Analizde şimdiki zaman: *Holden says…*; flashback'te geçmiş, ileride olacakta gelecek zaman olabilir." },
            { ikon: "🔀", baslik: "Geçişler", metin: "Paragraflar arası düzgün geçiş: *First…*, *In addition…*, *By contrast…*, *Ultimately…*" },
            { ikon: "📚", baslik: "Sözcük ve biçim", metin: "Canlı sözcük seç (baby ya da belirsiz değil). Karakter adlarını doğru yaz (Holden Caulfield, Salinger). Roman adı italik/altı çizili, paragraf girintisi net, tek satır aralığı, kenar boşluğu." }
          ] },
        { tip: "tablo", baslik: "Ek bilgi (öğretmen belgesinde yok): gündelik dilden akademik dile", head: ["Gündelik", "Akademik"], rows: [
            ["*I think Holden is lonely.*", "*Holden appears lonely.*"],
            ["*He's kind of sad about Allie.*", "*He is deeply affected by Allie's death.*"],
            ["*You can see that he is sad.*", "*The reader can see that he is sad.*"]
          ], not: "Kısaltma (*can't*) ve ben/sen (*I*, *you*) kullanmama, genel akademik yazı alışkanlığıdır; rubrikte açıkça geçmiyor ama doğru ve canlı sözcük ister." }
      ]
    },
    {
      baslik: "Mart speaking: roman temaları, 4 + 4 dakika",
      kisa: "Mart speaking: iki sorudan birini seç, romandan ayrıntı ve kendi hayatından bağlantı ver.",
      bloklar: [
        { tip: "liste", baslik: "Biçim ve kayıt kuralları", maddeler: [
            { ikon: "🗂️", baslik: "Seçim", metin: "Romandaki farklı temalar hakkında iki sorudan birini seç." },
            { ikon: "⏲️", baslik: "4 + 4", metin: "4 dakika hazırlan, 4 dakika konuş: (a) soruyu cevaplayan roman ayrıntıları, (b) soruyla ilgili kendi hayatından bağlantılar. Toplam sınav en çok 15 dk, 25 puan; 2 Nisan." },
            { ikon: "🎙️", baslik: "Kayıt", metin: "Kasım kuralları aynı: Mac ve mikrofonlu kulaklık, sınav başlayana kadar Mac kapalı, Voice Memo kaydı yüklenip e-postalanana kadar internete girme (şüphe = 0). Kayda önce tam adını söyle, dosya adı ‘Ad Soyad’. Google Classroom'a (ENGLISH EXAM 1 SEMESTER 2 VOICE MEMOS) yükle ve yedek olarak e-postala." }
          ] },
        { tip: "tablo", baslik: "Mart speaking rubriği (25 puan) ve kalıplar", head: ["Kalem", "Puan", "Kalıp"], rows: [
            ["Soruyu anlama, eserden ayrıntılarla", "10", "*The question asks about __. In the novel, this appears when __.*"],
            ["Kendi hayatınla bağlantı", "6", "*I can relate to this because __.*"],
            ["Akıcılık (rahatsız edici duraksama yok)", "3", "*Another example of this is…*"],
            ["Sözcük", "3", "Zengin ve çeşitli sözcük seç."],
            ["Telaffuz ve dilbilgisi", "3", "Kısa, doğru cümleler kur."]
          ], vurgu: 0, not: "Toplam 10 + 6 + 3 + 3 + 3 = 25." },
        { tip: "ornek", baslik: "4 dakikalık konuşmayı iskelete böl", durum: "Hazırlık notunu hangi sırayla kurarsın? Cevabı hazır metin değil, iskelet olarak yaz.",
          adimlar: ["1) Soruyu kendi sözlerinle yeniden söyle.", "2) Romandan 2–3 sahne seç (bölüm numarasıyla) ve her biri için bir cümlelik parafraz hazırla.", "3) Her sahne için kısa bir yorum yap: ne gösteriyor?", "4) Kendi hayatından tek bir somut bağlantı seç ve bunu romandaki örnekle karşılaştır."],
          sonuc: "Ek bilgi (öğretmen belgesinde yok): puan oranı 10'a 6 olduğundan konuşmanın daha büyük kısmını (a)'ya ayırmak mantıklıdır." },
        { tip: "tuzak", baslik: "Yalnız kendi hayatını anlatma", metin: "En ağır kalem romandan ayrıntıdır (10 puan). Kişisel bağlantı 6 puandır; romandan örnek vermeden yalnız kendi hikâyeni anlatırsan en büyük kalemi kaçırırsın.", yanlis: "Soruyla ilgili kendi deneyimimi uzun anlatırsam yeter.", dogru: "Önce romandan sahne ve parafraz, sonra kendi hayatından kısa bir bağlantı." }
      ]
    },
    {
      baslik: "Haziran speaking: eleştiri alıntısı, 4 + 4 dakika",
      kisa: "Haziran'da R/W yok; speaking'de bir eleştiri alıntısına katılıp katılmadığını savunursun.",
      bloklar: [
        { tip: "liste", baslik: "4 Haziran: biçim", maddeler: [
            { ikon: "🚫", baslik: "R/W yok", metin: "Nisan'da teslim edilen Argument Paper Project, bu sınavın R/W bölümü yerine sayılır." },
            { ikon: "🎧", baslik: "Listening", metin: "12 dk, 25 puan, 15 soru: 10 gap-fill + 5 T/F; kayıt yalnız bir kez çalınır, önce 2 dk okuma süresi." },
            { ikon: "🗣️", baslik: "Speaking", metin: "Daha önce okumadığın iki Catcher incelemesinden birinden tek bir alıntı seç; 4 dk hazırlan, 4 dk konuş: (a) yazarın görüşüne ne ölçüde katılıyorsun/katılmıyorsun, (b) romandan bol parafraz kanıt ve analiz. 25 puan." }
          ] },
        { tip: "tablo", baslik: "Haziran speaking rubriği (25 puan) ve kalıplar", head: ["Kalem", "Puan", "Kalıp"], rows: [
            ["Seçilen alıntıyı anladığını gösteren yanıt", "5", "*The author argues that…*"],
            ["Metinden düşünceli, destekleyici analiz", "11", "*I partly agree because in Chapter __, Holden __, which shows __.*"],
            ["Akıcılık", "3", "*In addition…*"],
            ["Sözcük", "3", "Zengin ve çeşitli sözcük seç."],
            ["Telaffuz ve dilbilgisi", "3", "Kısa, doğru cümleler kur."]
          ], vurgu: 1, not: "Toplam 5 + 11 + 3 + 3 + 3 = 25." },
        { tip: "tablo", baslik: "İki inceleme (yalnız ana fikir; alıntı yok)", head: ["İnceleme", "Ana fikir", "Çalışma notu"], rows: [
            ["Dana Czapnik (Guardian)", "Holden bugünün genç okurlarına neden uzak geliyor? Gençlik bunalımı evrenseldir ama içeriği kişiye ve döneme özeldir; kitabı erken oku, yıllar sonra tekrar oku.", "Yazar, evrensel ile özeli ayırıyor; sen Holden'ın hangi yanı evrensel diyebilirsin?"],
            ["George Will (başlıkta Holden *whiner* olarak anılır)", "Başlık Holden'ı yakınan biri olarak çerçeveliyor; ana fikri yazıdan kendin çıkar.", "Sınıfta çalışılan sözcükler: *whiner*, *conformity*, *authenticity*, *shallowness*, *integrity*, *infantilism*, *picaresque*."]
          ] },
        { tip: "tuzak", baslik: "Özetlemek görüş değildir", metin: "Alıntıyı özetlemek yalnız 5 puanlık kalemi karşılar. 11 puanlık kalem, romandan parafraz kanıtla görüşünü savunmandır.", yanlis: "Yazarın dediğini tekrar etmek yeter.", dogru: "Önce alıntıyı bir cümleyle anla, sonra katılma derecen ve romandan kanıtınla savun." }
      ]
    },
    {
      baslik: "Dürüstlük ve yapay zekâ kuralı",
      kisa: "Araştırma ve yazmada üretken yapay zekâ yasak; yalnız çok sınırlı kullanım olabilir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Çok sınırlı izin", maddeler: ["Organizasyon önerisi (içerik değil)", "Ağdalı tezi kısaltma; yazım denetimiyle hataları kendin düzeltme"] },
          sag: { ikon: "🚫", baslik: "Yasak", maddeler: ["Araştırma için yapay zekâ kullanmak", "Tez, paragraf ya da essay'i yapay zekâya yazdırmak"] },
          oyun: [
            { metin: "Tez cümlesini yapay zekâya yazdırmak.", cevap: "sag", neden: "Yazma yerine geçemez." },
            { metin: "Kendi yazdığın taslağın paragraf sırası için öneri istemek (içerik değil).", cevap: "sol", neden: "Çok sınırlı izin: organizasyon." },
            { metin: "Kaynak ve bilgi bulmak için yapay zekâya sormak.", cevap: "sag", neden: "Araştırma için hiç kullanılmaz." },
            { metin: "Yazını bitirdikten sonra yazım denetimiyle hataları kendin düzeltmek.", cevap: "sol", neden: "Çok sınırlı izin." }
          ] },
        { tip: "tuzak", baslik: "Bu defter bir çalışma rehberidir", metin: "Defterdeki iskeletler yapıyı göstermek içindir; hazır paragraf değildir. Mart essay'i zaten cihazsız, el yazısıyla yazılır. Araştırma projesi ve argüman essay'indeki ayrıntılı AI kuralları ilgili proje defterlerinde, farklıdır; ikisini karıştırma.", yanlis: "Defterdeki örnek tezi aynen kullanabilirim.", dogru: "Örnekten yapıyı al, tezi kendi okumanla yaz. Emin değilsen öğretmenine sor." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Yazmadan ve konuşmadan önce bu kontrol listesine bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Mart R/W: 60 dk, Ch 1–13'ten tek pasaj, passage-analysis ==essay== (paragraf değil), en az 4 paragraf; kurşun kalem, not/roman/sözlük yok.",
            "Essay: introduction (bağlam + pasajın konusu + tez), 2 body, conclusion (tez + yeni ilgili düşünce).",
            "Tez = konu + görüş + harita; yalnız Holden hakkında yaz; hazır essay yok.",
            "Body: net konu cümlesi, QPC (Quote, Paraphrase, Connect), kısa gömülü alıntı; araçları listeleme, analiz et.",
            "Notlandırma ipuçları: *literary present*, geçişler, canlı sözcük, doğru karakter adları, az dilbilgisi hatası.",
            "Mart speaking: 4 + 4 dk; roman ayrıntıları 10, kendi hayatın 6, akıcılık 3, sözcük 3, telaffuz-dilbilgisi 3.",
            "Haziran speaking: 4 + 4 dk; anlama 5, destekleyici analiz 11, akıcılık 3, sözcük 3, telaffuz-dilbilgisi 3; R/W yerine Argument Paper sayılır.",
            "Yapay zekâ araştırma ve yazma yerine geçemez; yalnız çok sınırlı organizasyon önerisi ve yazım denetimi."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which statement correctly describes the March Reading and Writing exam on The Catcher in the Rye?",
      opts: ["It lasts 40 minutes and asks for a single paragraph on a short story.", "It lasts 60 minutes and asks for a passage-analysis essay of at least four paragraphs on one passage from Chapters 1-13.", "It lasts 60 minutes and asks for one 200-250 word paragraph.", "It is open book, so students may bring the novel and a dictionary."],
      a: 1, why: "Mart R/W 60 dakikadır, Ch 1–13'ten tek pasaj üzerine en az 4 paragraflık essaydir; not, roman ve sözlük yoktur. A Kasım'ın biçimi; C Kasım paragrafının uzunluğu; D masada yalnız kurşun kalem ve silgi olması kuralına aykırı." },
    { q: "Which of the following is the strongest thesis statement for a passage-analysis essay on Holden?",
      opts: ["Holden leaves Pencey and goes to New York.", "The Catcher in the Rye is a famous novel.", "Many students read this passage in class.", "Through slangy, exaggerated diction, Salinger suggests that Holden's sarcasm hides a caring nature."],
      a: 3, why: "D bir görüş (konu + görüş), bir araç ve bir etki içerir. A olay özeti, B ve C ise gerçek bilgidir; tez olmak için tartışılabilir olmaları gerekir." },
    { q: "Which sentence integrates a quotation best? (the bracket stands for a short quotation)",
      opts: ["\"[long quotation of three lines]\" This shows Holden is sad.", "Holden says something about his feelings in the book.", "Holden remarks that \"[short quotation]\" (Salinger, ch. 4), which suggests his need for attention.", "In the quote, \"[short quotation]\" is written."],
      a: 2, why: "C kısa alıntıyı cümleye gömer, bölüm numarası verir ve hemen yorumlar. A alıntıyı uzun ve yorumsuz bırakıyor; B alıntı ve kanıt içermiyor; D ise öğretmenin yasakladığı “in the quote” kalıbını kullanıyor." },
    { q: "Which statement about the speaking rubrics is correct?",
      opts: ["In March, the largest criterion (10 points) is understanding the question with details from the novel; in June, the largest (11 points) is thoughtful supporting analysis from the text.", "In March, the largest criterion is fluency; in June, it is pronunciation.", "In both exams, vocabulary carries the largest share of the 25 points.", "In June, a connection to your own life carries 6 points, as in March."],
      a: 0, why: "Mart: 10/6/3/3/3, Haziran: 5/11/3/3/3 (her biri 25 puan). B ve C akıcılık ve sözcüğü fazla ağır gösteriyor; D ise Haziran'da kişisel bağlantı kalemi olmadığını gözden kaçırıyor." },
    { q: "Which use of generative AI fits the school's strictly limited exception for writing?",
      opts: ["Asking AI to write the thesis statement", "Asking for a suggestion about how to organize your own paragraphs (not their content)", "Asking AI to find sources for the essay", "Copying the model thesis from a study guide"],
      a: 1, why: "Yazı kendi emeğin olmalı; yalnızca çok sınırlı kullanım (organizasyon önerisi, içerik değil; yazım denetimiyle hataları kendin düzeltmek) mümkündür. A ve C yasak kullanımlar, D ise kopyalamadır." }
  ]
};
