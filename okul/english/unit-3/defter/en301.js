/* Kitpath not defteri · en301 · 3.1 Bağlam ve Anlatıcı
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye): öğretmen/bölüm materyali (Byrd, Akyürek, Woods) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı.
   Telif: romandan yalnız 2 kısa alıntı (Ch 1, her biri ≤10 kelime); gerisi kendi cümlelerimizle. Materyalde olmayan ekler "Ek bilgi" etiketlidir. */
window.DEFTER = {
  slug: "en301",
  amac: "Bu konu romanın zeminini kuruyor: Salinger ve 1951 Amerikası, Holden'ın birinci tekil anlatımı, gündelik dili ve *unreliable narrator* sorusu. Sonunda Salinger'ın neden bu sesi seçtiğini ve Mart pasajına anlatıcıya dikkat ederek nasıl yaklaşacağını İngilizce açıklayabileceksin.",
  bolumler: [
    {
      baslik: "Salinger ve 1951 Amerikası",
      kisa: "Roman, savaş sonrası Amerika'nın refahı ve uyum baskısı içinde yazıldı.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "1919", baslik: "Ek bilgi (öğretmen belgesinde yok): J. D. Salinger New York'ta doğar", metin: "Şehir, romanın büyük bölümünün geçtiği yerdir; Salinger Manhattan'ı içeriden tanır." },
            { tarih: "1940'lar", baslik: "Savaş yılları ve ilk Holden öyküleri", metin: "Salinger II. Dünya Savaşı'nda ABD ordusunda Avrupa'da görev yapar. Holden Caulfield bu yıllarda yazdığı birkaç kısa öyküde ilk kez görünür." },
            { tarih: "1951", baslik: "*The Catcher in the Rye* yayımlanır", metin: "Roman çok satar. Gençlerin gerçek konuşmasına yakın dili övülür; aynı dil ve konular yüzünden bazı okullarda tartışılır ve kaldırılması istenir." },
            { tarih: "1953'ten sonra", baslik: "Salinger kamusal hayattan çekilir", metin: "Yazar uzun yıllar röportaj vermeden yaşar. Bu yüzden roman, yazarın değil ==anlatıcının== sesiyle okunur." },
            { tarih: "2010", baslik: "Salinger hayatını kaybeder", metin: "Kitap bugün hâlâ okullarda okutulan bir ==*coming-of-age*== (büyüme) romanıdır." }
          ] },
        { tip: "liste", baslik: "Ek bilgi (öğretmen belgesinde yok): dönemin ortamı", maddeler: [
            { ikon: "🕊️", baslik: "Savaştan sonra", metin: "Savaş doğrudan anlatılmaz ama arka plandadır: Holden'ın ağabeyi D.B. askerlik yapmış biridir ve ölüm kavramı romanın her yerinde hissedilir." },
            { ikon: "🏙️", baslik: "Refah ve tüketim", metin: "Sinema, reklam, gösterişli kulüpler ve iyi okul-iyi iş hayali ortamı oluşturur; Holden bunların çoğunu *phony* (sahte) bulur." },
            { ikon: "🧩", baslik: "Uyum baskısı", metin: "*Conformity*: herkesin aynı “doğru” hayat çizgisini izlemesi beklenir. Holden bu çizgiye uymakta zorlanır." },
            { ikon: "🧑", baslik: "Genç sesi", metin: "Gençlerin kendi dili ve duyguları edebiyatta yeni yeni merkeze geliyordu. Holden bunun en bilinen örneklerindendir." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: bağlamı bağla", head: ["Amaç", "Kalıp"], rows: [
            ["Bağlam kurmak", "*Published in 1951, the novel reflects a post-war America that values…*"],
            ["Karakteri döneme bağlamak", "*Holden's discomfort with adult life mirrors a society that…*"],
            ["Yazar ile anlatıcıyı ayırmak", "*Salinger creates Holden as a narrator whose voice…*"]
          ], not: "Giriş paragrafındaki bağlam ==pasajın== bağlamıdır (kitabın adı, yazar, hikâyede o an ne oluyor); dönem bilgisini uzatma, ikinci cümlede asıl iddiana geç." }
      ]
    },
    {
      baslik: "Birinci tekil anlatıcı ve geriye bakış",
      kisa: "Hikâyeyi Holden anlatır; okur her şeyi yalnızca onun gözünden görür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗣️", terim: "First-person narrator", tr: "birinci tekil anlatıcı", tanim: "Hikâyeyi “ben” diliyle anlatan karakter. Okur yalnızca onun gördüğünü, hatırladığını ve yorumladığını bilir.", ornek: "Holden “ben” der; Stradlater'ın ne düşündüğünü bilemeyiz." },
            { ikon: "👁️", terim: "Point of view", tr: "bakış açısı", tanim: "Olayların kimin gözünden ve hangi yakınlıkla anlatıldığı. Romanda bakış açısı baştan sona Holden'dır.", ornek: "Aynı kavga, Stradlater'ın anlatımında farklı görünürdü." },
            { ikon: "⏪", terim: "Retrospective narration", tr: "geriye dönük anlatım", tanim: "Anlatıcı olanları sonradan, bir yerden geriye bakarak anlatır. Holden, olaylardan sonra bir dinlenme evinde olduğunu söyler; kesin bir zaman ya da tanı verilmez.", ornek: "Holden olayları “şimdi anlatıyorum” havasıyla aktarır." }
          ] },
        { tip: "grafik", baslik: "Olay zamanı ve anlatım zamanı", xlabel: "Zaman", ylabel: "Katman", xmax: 10, ymax: 6,
          xticks: [{ v: 2.5, label: "Olaylar" }, { v: 8, label: "Anlatım" }],
          ogeler: [
            { id: "k1", tip: "yazi", x: 0.15, y: 2.75, hiza: "start", metin: "Yaşanan" },
            { id: "k2", tip: "yazi", x: 0.15, y: 4.7, hiza: "start", metin: "Anlatılan" },
            { id: "olay", tip: "alan", renk: 1, noktalar: [[1, 1.5], [4, 1.5], [4, 2.5], [1, 2.5]], gizli: true },
            { id: "olayt", tip: "yazi", x: 2.5, y: 0.8, metin: "Cumartesi–Pazartesi", gizli: true },
            { id: "anl", tip: "nokta", x: 8, y: 4, etiket: "Holden anlatıyor", gizli: true },
            { id: "geri", tip: "ok", renk: 2, from: [7.6, 3.7], to: [4.3, 2.4], gizli: true },
            { id: "geri_t", tip: "yazi", x: 6.2, y: 3.5, metin: "geriye bakış", gizli: true },
            { id: "filtre", tip: "alan", renk: 3, noktalar: [[0.6, 1], [4.4, 1], [4.4, 3], [0.6, 3]], gizli: true },
            { id: "filtre_t", tip: "yazi", x: 2.5, y: 3.4, metin: "Holden'ın filtresi", gizli: true }
          ],
          durumlar: [
            { metin: "Roman kısa bir zamanı anlatır: ==yaklaşık üç gün== (Cumartesi'den Pazartesi'ye). Bunlar yaşanan olaylardır.", goster: ["olay", "olayt"] },
            { metin: "Anlatıcı olaylardan ==sonra==, bir dinlenme evinden konuşuyor. Anlatım zamanı ayrı bir noktadır.", goster: ["anl"] },
            { metin: "Holden geriye bakıp olanları hatırlar ve yeniden kurar. Hatırlarken bazı şeyleri vurgular, bazılarını atlar.", goster: ["geri", "geri_t"] },
            { metin: "Okura ulaşan her şey ==Holden'ın filtresinden== geçer: duyguları, yargıları, unuttukları ve abarttıkları. *Unreliable narrator* sorusu buradan doğar.", goster: ["filtre", "filtre_t"] }
          ] },
        { tip: "not", metin: "Roman okura doğrudan hitapla açılır: Holden, dinlemek isteyen okura nereden başlayacağını söylemeye çalışır ama çocukluğunu ayrıntılı anlatmak istemez (Ch 1: “If you really want to hear about it”). Klasik, sıkıcı biyografi tarzını da ironiyle kenara iter (Ch 1: “that David Copperfield kind of crap”). Öğretmenin Ch 1 sorularındaki vurgular da burada başlar: Holden'ın ailesiyle ilişkisi, D.B.'nin Hollywood'a gitmesiyle onu gözünde küçültmesi, Holden'ın kendi imajı ve yalnızlığı, ve vedalaşmanın (*good-bye*) onun için önemi." }
      ]
    },
    {
      baslik: "Holden'ın sesi: gündelik dil",
      kisa: "Holden ders kitabı gibi değil, 16 yaşında biri gibi konuşur.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💬", baslik: "*Colloquial voice* (gündelik ses)", maddeler: ["Argo, kısaltma, dolgu sözler", "Samimi, abartılı, okura konuşur gibi"] },
          sag: { ikon: "🎩", baslik: "*Formal voice* (resmî ses)", maddeler: ["Uzun, düzgün, ağırbaşlı cümleler", "Duygudan uzak, ders kitabı gibi"] },
          oyun: [
            { metin: "He was a nice guy and all, but he really killed me.", cevap: "sol", neden: "Argo (*killed me*) ve dolgu ifade: gündelik ses." },
            { metin: "The individual demonstrated considerable hypocrisy.", cevap: "sag", neden: "Soyut ve resmî kelimeler: formal." },
            { metin: "I'm not kidding, it was the most boring night ever.", cevap: "sol", neden: "Okura güvence verme ve abartı: gündelik ses." },
            { metin: "The evening proved to be remarkably tedious.", cevap: "sag", neden: "Aynı fikir, ama ağırbaşlı kelimelerle." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🔥", baslik: "*Slang* ve *profanity*", metin: "Argo ve küfür, gerçekçilik ve öfke katar. Bu yüzden roman okullarda tartışıldı; sınavda bunu bir *diction* (kelime seçimi) örneği olarak yaz." },
            { ikon: "🔁", baslik: "*Repetition*", metin: "Aynı ifadelerin tekrarı onu içten gösterir, bazen de kendini ikna etmeye çalışan biri gibi." },
            { ikon: "↩️", baslik: "*Digression*", metin: "Konudan sapmalar ve ilgisiz anılar; asıl konudan kaçmasını (özellikle acıdan) gösterebilir." },
            { ikon: "📢", baslik: "*Hyperbole* ve *idiom*", metin: "“Her şey berbat, herkes sahte” türü abartı ve deyimler öfkeyi ve korumacı bir sertliği ortaya çıkarır. Woods'un örnek analizinde Jane anısındaki abartılı, argolu dil, Holden'ın aslında ilgili ve gözlemci (*caring and observant*) yanını gösterir." },
            { ikon: "🏷️", baslik: "*Labels*", metin: "İnsanlara ve yerlere hızla etiket yapıştırır (*phony*, *crumby*). Etiketler bilgi değil, yargıdır." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: ses ve ton", head: ["Amaç", "Kalıp"], rows: [
            ["Dili tanımlamak", "*Salinger uses colloquial diction and slang to make Holden sound…*"],
            ["Etkiyi söylemek", "*This informal voice creates a sense of intimacy between narrator and reader.*"],
            ["Tonu bağlamak", "*Holden's exaggeration reveals a defensive, sarcastic tone that hides…*"]
          ], not: "Yalnızca “dili argo” deme; etkisini (*effect*) de yaz: samimiyet, öfke, savunma. Öğretmenin uyarısı: kullandığın edebi araçları listeleme, analiz et." }
      ]
    },
    {
      baslik: "Güvenilmez anlatıcı (*unreliable narrator*)",
      kisa: "Anlatıcının yargısı ile gerçek arasında fark olabilir; okur bunu fark eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Unreliable narrator", tr: "güvenilmez (yanlı) anlatıcı", tanim: "Anlatıcısına kısmen ya da tamamen güvenilemeyen hikâye. Nedeni yalan, çıkar, yaş, duygusal durum ya da yanlı yargı olabilir.", ornek: "Holden başkalarına sahte der ama kendisi de sık sık yalan söyler." },
            { ikon: "👀", terim: "Dramatic irony", tr: "dramatik ironi", tanim: "Okurun, karakterin kaçırdığı bir gerçeği fark etmesi. Holden başkalarındaki ironiyi çabuk görür, kendi ironisini görmez.", ornek: "Hiçbir şeyi umursamadığını söyler, ama Allie'yi anlatırken ne kadar yas tuttuğu belli olur." },
            { ikon: "🌐", terim: "Broad generalization", tr: "geniş genelleme", tanim: "Tek bir deneyimden bütün insanlara dair kesin hüküm çıkarmak. Holden'ın anlatısındaki yanlılığın bir işaretidir.", ornek: "Birkaç sahte kişiden yola çıkıp “herkes sahte” demesi." },
            { ikon: "⚖️", terim: "Paradoxical character", tr: "paradoksal karakter", tanim: "Çelişkili özellikleri bir arada taşıyan karakter. Holden hem olgun hem çocuksudur; gerçekliğin farkındadır ama kendi fantezi dünyasında yaşar.", ornek: "Yetişkinleri eleştirir, ama bir çocuk gibi korunmak ister." }
          ] },
        { tip: "adimlar", baslik: "Güvenilmezliği nasıl yakalarsın?", adimlar: [
            { baslik: "Söylediği ile yaptığını karşılaştır", metin: "Holden birini sahte ilan eder, sonra aynı davranışı kendisi yapar." },
            { baslik: "Geniş genellemeyi yakala", metin: "“Herkes”, “hiç kimse”, “her zaman” gibi sözler yanlılık işaretidir." },
            { baslik: "Duygusal filtreyi gör", metin: "Allie'nin ölümüne dair acı, yargılarını sertleştirir; öfke ve alay bazen yası saklar." },
            { baslik: "Kendi itirafına bak", metin: "Holden yalan söylediğini kendisi de kabul eder; bu, anlatısını bir kez daha tartman için işarettir." },
            { baslik: "Okurun işi", metin: "Olayı ve yorumu ayır: ne yaşandı, Holden bunu nasıl yorumladı?" }
          ] },
        { tip: "tuzak", baslik: "Güvenilmez demek “yalancı” demek değildir", metin: "Holden'ın verdiği olay bilgileri genelde tutarlıdır; sorun yorumlarında ve duygusal filtresindedir. Ayrıca kitap ona herhangi bir tanı koymaz; sınavda da bir *diagnosis* (tanı) yazma, metne dayalı konuş.", yanlis: "*Unreliable narrator* = her şeyi uydurur.", dogru: "*Unreliable narrator* = yorumlarına ve duygusal filtresine temkinle yaklaşmalıyız." }
      ]
    },
    {
      baslik: "Neden Holden? Anlatıcı seçiminin etkisi",
      kisa: "Bu seçim okuru Holden'a hem yaklaştırır hem ona sorgulatır.",
      bloklar: [
        { tip: "ornek", baslik: "Sınav sorusu: anlatıcı seçimi", durum: "Soru: “How does Salinger's choice of narrator shape the reader's understanding of Holden?” Üç adımda nasıl cevap verirsin?",
          adimlar: ["1) Aracı söyle: birinci tekil anlatıcı ve gündelik ses (*first-person narration, colloquial diction*).", "2) Etkiyi söyle: okur Holden'a yaklaşır, duygularını doğrudan duyar (*intimacy*).", "3) Sınırı söyle: Holden'ın filtresi yargılarını renklendirir; okur yorumları sorgular (*unreliability*).", "Her adımı roman örneğiyle destekle: bir olay, bir kısa alıntı ya da bir parafraz. Mart sınavında pasaj Ch 1–13 içinden gelir; bu ilk bölümlerde ses ve filtre en belirgin kanıttır."],
          sonuc: "Model cümle iskeleti: ==*Salinger's use of first-person narration lets the reader…, yet Holden's bias also…*== Boşlukları kendi örneğinle doldur. Edebi analizde ==*literary present*== kullan: *Holden says…*, *Salinger shows…*" },
        { tip: "tablo", baslik: "Ton kelime bankası (*tone words*)", head: ["Ton", "Türkçesi", "Holden'da nerede?"], rows: [
            ["*sarcastic*", "alaycı", "Sahte bulduğu insanları anlatırken"],
            ["*defensive*", "savunmacı", "Acı ya da başarısızlık konusunda"],
            ["*tender*", "şefkatli", "Phoebe ve Allie hakkında"],
            ["*lonely*", "yalnız", "Kimseyle gerçek bağ kuramadığı anlarda"]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Roman 1951'de, savaş sonrası Amerika'nın refah ve uyum baskısı içinde yayımlandı; yazar J. D. Salinger.",
            "Anlatıcı Holden Caulfield: *first-person narrator*; olaylar Cumartesi–Pazartesi, anlatım sonradan (*retrospective*).",
            "Ses: *colloquial diction*, *slang*, *repetition*, *digression*, *hyperbole*; her birinin etkisini yaz.",
            "*Unreliable (biased) narrator*: *broad generalization* yapar, yorumları ve duygusal filtresi güvenilmez olabilir; olay bilgileri genelde tutarlıdır.",
            "Holden *paradoxical*: hem olgun hem çocuksu; ironiyi başkasında görür, kendinde görmez.",
            "Yazar ile anlatıcıyı karıştırma: Salinger yazar, Holden karakterdir.",
            "Analizde *literary present* kullan; “in the quote” yazma, araçları listelemek yerine analiz et.",
            "Ruh sağlığına dair konuşurken tanı koyma; metindeki davranışa ve kanıta dayan."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Which description of the novel's historical setting is most accurate?",
      opts: ["A story of unemployment during the Great Depression", "A story set in post-war America, with its prosperity, consumer culture and pressure to conform", "A story of farm life in the nineteenth-century countryside", "A science-fiction story set in the future"],
      a: 1, why: "Roman, II. Dünya Savaşı sonrası Amerika'nın refah ve uyum baskısı içinde yayımlandı ve Holden'ın bu dünyayı sahte bulması bununla ilgili. A şıkkı yanlış dönemi gösteriyor; D şıkkı türü karıştırıyor." },
    { q: "A student writes: \"Because Salinger uses a first-person narrator, the reader sees events only through Holden's perception.\" What is the best evaluation of this sentence?",
      opts: ["Incorrect: the reader also sees events through the author's eyes.", "Incorrect: the novel is told by a third-person narrator.", "Partly correct: it applies only to the dialogue scenes.", "Correct: first-person narration ties the reader to Holden's perception."],
      a: 3, why: "Birinci tekil anlatımda okur olayları anlatıcının filtresinden alır. A, yazarı anlatıcıyla karıştırıyor; B yanlış; C ise bu sınırı yalnızca diyaloglarla kısıtlıyor, oysa bütün roman Holden'ın gözünden akar." },
    { q: "Which sentence is the best example of colloquial diction like Holden's?",
      opts: ["He was a nice guy and all, but he really killed me.", "The individual displayed considerable hypocrisy.", "One must acknowledge the pervasive insincerity of society.", "The evening proved remarkably tedious for all attendees."],
      a: 0, why: "Argo (*killed me*) ve dolgu ifade gündelik sese işaret eder. B, C ve D resmî ve soyut bir ses taşır; Holden'ın tarzı değil." },
    { q: "Holden lies to a stranger about himself but later calls someone else a phony. What does this show?",
      opts: ["That Holden invents everything, so the whole novel is a lie", "That the author wrote the character carelessly", "That Holden's judgments and behavior can be inconsistent, so the reader should treat him with caution", "That Holden has finally become a phony and changed completely"],
      a: 2, why: "Sözü ile davranışı arasındaki çelişki, *unreliable narrator* işaretlerinden biridir; ama bu “her şey yalan” demek değildir. A güvenilmezliği abartıyor; B ve D metindeki kanıtı yok sayıyor." },
    { q: "Which statement is an example of a broad generalization by a narrator?",
      opts: ["Holden meets Mr Spencer on Saturday afternoon.", "After one dull party, the narrator announces that everyone he knows is a fake.", "Holden describes his old roommate's habits in detail.", "The narrator says he is telling the story from a rest home."],
      a: 1, why: "Tek bir deneyimden herkes hakkında kesin hüküm çıkarmak *broad generalization*dır ve yanlılık işaretidir. A ve C olgu bildirir; D ise anlatım çerçevesini verir, bir genelleme değildir." }
  ]
};
