/* Kitora not defteri · en301 · 3.1 Bağlam ve Anlatıcı
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı.
   Telif: romandan en fazla 10 kelimelik, bölüm numaralı kısa alıntılar; gerisi kendi cümlelerimizle. */
window.DEFTER = {
  slug: "en301",
  amac: "Bu konu romanın zeminini kuruyor: Salinger ve 1951 Amerikası, hikâyeyi anlatan Holden'ın birinci tekil bakışı, konuşma dili ve *unreliable narrator* fikri. Sonunda Salinger'ın neden bu sesi seçtiğini İngilizce açıklayabileceksin.",
  bolumler: [
    {
      baslik: "Salinger ve 1951 Amerikası",
      kisa: "Roman, savaş sonrası Amerika'nın refahı ve uyum baskısı içinde yazıldı.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "1919", baslik: "J. D. Salinger New York'ta doğar", metin: "Şehir, romanın büyük bölümünün geçtiği yerdir; Salinger Manhattan'ı içeriden tanır." },
            { tarih: "1940'lar", baslik: "Savaş yılları ve ilk Holden öyküleri", metin: "Salinger II. Dünya Savaşı'nda ABD ordusunda Avrupa'da görev yapar. Holden Caulfield bu yıllarda yazdığı birkaç kısa öyküde ilk kez görünür." },
            { tarih: "1951", baslik: "*The Catcher in the Rye* yayımlanır", metin: "Roman çok satar. Gençlerin gerçek konuşmasına yakın dili övülür; aynı dil ve konular yüzünden bazı okullarda tartışılır ve kaldırılması istenir." },
            { tarih: "1953'ten sonra", baslik: "Salinger kamusal hayattan çekilir", metin: "Yazar uzun yıllar röportaj vermeden yaşar. Bu yüzden roman, yazarın değil ==anlatıcının== sesiyle okunur." },
            { tarih: "2010", baslik: "Salinger hayatını kaybeder", metin: "Kitap bugün hâlâ okullarda okutulan bir ==*coming-of-age*== (büyüme) romanıdır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🕊️", baslik: "Savaştan sonra", metin: "Savaş doğrudan anlatılmaz ama arka plandadır: Holden'ın ağabeyi D.B. askerlik yapmış biridir ve ölüm kavramı romanın her yerinde hissedilir." },
            { ikon: "🏙️", baslik: "Refah ve tüketim", metin: "Sinema, reklam, gösterişli kulüpler ve iyi okul-iyi iş hayali ortamı oluşturur; Holden bunların çoğunu *phony* (sahte) bulur." },
            { ikon: "🧩", baslik: "Uyum baskısı", metin: "*Conformity*: herkesin aynı “doğru” hayat çizgisini izlemesi beklenir. Holden bu çizgiye uymakta zorlanır." },
            { ikon: "🧑", baslik: "Genç sesi", metin: "Gençlerin kendi dili ve duyguları edebiyatta yeni yeni merkeze geliyordu. Holden bunun en bilinen örneklerindendir." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: bağlamı bağla", head: ["Amaç", "Kalıp"], rows: [
            ["Bağlam kurmak", "*Published in 1951, the novel reflects a post-war America that values…*"],
            ["Karakteri döneme bağlamak", "*Holden's discomfort with adult life mirrors a society that…*"],
            ["Yazar ile anlatıcıyı ayırmak", "*Salinger creates Holden as a narrator whose voice…*"]
          ], not: "Bağlam cümlesi kısa olsun: sınavda ikinci cümlede asıl iddiana geç (rubrikte “bağlam” küçük bir puandır)." }
      ]
    },
    {
      baslik: "Birinci tekil anlatıcı ve geriye bakış",
      kisa: "Hikâyeyi Holden anlatır; okur her şeyi yalnızca onun gözünden görür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗣️", terim: "First-person narrator", tr: "birinci tekil anlatıcı", tanim: "Hikâyeyi “ben” diliyle anlatan karakter. Okur yalnızca onun gördüğünü, hatırladığını ve yorumladığını bilir.", ornek: "Holden “ben” der; Stradlater'ın ne düşündüğünü bilemeyiz." },
            { ikon: "👁️", terim: "Point of view", tr: "bakış açısı", tanim: "Olayların kimin gözünden ve hangi yakınlıkla anlatıldığı. Romanda bakış açısı baştan sona Holden'dır.", ornek: "Aynı kavga, Stradlater'ın anlatımında farklı görünürdü." },
            { ikon: "⏪", terim: "Retrospective narration", tr: "geriye dönük anlatım", tanim: "Anlatıcı olanları sonradan, bir yerden geriye bakarak anlatır. Holden, olaylardan sonra bir dinlenme evinde olduğunu söyler; kesin bir zaman ya da tanı verilmez.", ornek: "Holden “bunu şimdi anlatıyorum” havasıyla konuşur." }
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
        { tip: "not", metin: "Roman okura doğrudan hitapla açılır: Holden, okur gerçekten dinlemek istiyorsa nereden başlayacağını söylemeye çalışır ama çocukluğunu uzun uzun anlatmak istemez (Ch 1: “If you really want to hear about it”). Daha sonra bu sıkıcı klasik biyografi tarzını bir kenara iterken ironik davranır (Ch 1: “that David Copperfield kind of crap”). Bu iki küçük ayrıntı, Holden'ın hem okurla konuştuğunu hem de klasik “sıkıcı” anlatıma meydan okuduğunu gösterir." }
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
            { ikon: "📢", baslik: "*Hyperbole*", metin: "“Her şey berbat, herkes sahte” gibi abartı; öfkeyi ve korumacı bir sertliği ortaya çıkarır." },
            { ikon: "🏷️", baslik: "*Labels*", metin: "İnsanlara ve yerlere hızla etiket yapıştırır (*phony*, *crumby*). Etiketler bilgi değil, yargıdır." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: ses ve ton", head: ["Amaç", "Kalıp"], rows: [
            ["Dili tanımlamak", "*Salinger uses colloquial diction and slang to make Holden sound…*"],
            ["Etkiyi söylemek", "*This informal voice creates a sense of intimacy between narrator and reader.*"],
            ["Tonu bağlamak", "*Holden's exaggeration reveals a defensive, sarcastic tone that hides…*"]
          ], not: "Yalnızca “dili argo” deme; etkisini (*effect*) de yaz: samimiyet, öfke, savunma." }
      ]
    },
    {
      baslik: "Güvenilmez anlatıcı (*unreliable narrator*)",
      kisa: "Anlatıcının yargısı ile gerçek arasında fark olabilir; okur bunu fark eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Unreliable narrator", tr: "güvenilmez anlatıcı", tanim: "Anlatıcısına kısmen ya da tamamen güvenilemeyen hikâye. Nedeni yalan, çıkar, yaş, duygusal durum ya da yanlış yargı olabilir.", ornek: "Holden başkalarına sahte der ama kendisi de sık sık yalan söyler." },
            { ikon: "👀", terim: "Dramatic irony", tr: "dramatik ironi", tanim: "Okurun, karakterin kaçırdığı bir gerçeği fark etmesi.", ornek: "Holden hiçbir şeyi umursamadığını söyler, ama ağabeyi Allie'yi anlatırken ne kadar yas tuttuğu belli olur." }
          ] },
        { tip: "adimlar", baslik: "Güvenilmezliği nasıl yakalarsın?", adimlar: [
            { baslik: "Söylediği ile yaptığını karşılaştır", metin: "Holden birini sahte ilan eder, sonra aynı davranışı kendisi yapar." },
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
          adimlar: ["1) Aracı söyle: birinci tekil anlatıcı ve gündelik ses (*first-person narration, colloquial diction*).", "2) Etkiyi söyle: okur Holden'a yaklaşır, duygularını doğrudan duyar (*intimacy*).", "3) Sınırı söyle: Holden'ın filtresi yargılarını renklendirir; okur yorumları sorgular (*unreliability*).", "Her adımı roman örneğiyle destekle: bir olay, bir kısa alıntı ya da bir parafraz."],
          sonuc: "Model cümle iskeleti: ==*Salinger's use of first-person narration lets the reader…, yet Holden's bias also…*== Boşlukları kendi örneğinle doldur." },
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
            "Anlatıcı Holden Caulfield: *first-person narrator*; olaylar Cumartesi–Pazartesi, anlatım sonradan.",
            "Holden olayları geriye bakarak anlatır: *retrospective narration*.",
            "Ses: *colloquial diction*, *slang*, *repetition*, *digression*, *hyperbole*.",
            "*Unreliable narrator*: yorumları ve duygusal filtresi güvenilmez olabilir; olay bilgileri genelde tutarlıdır.",
            "Yazar ile anlatıcıyı karıştırma; Holden Salinger değildir.",
            "Dil ve ton yazarken mutlaka etkiyi söyle: samimiyet, öfke, savunma.",
            "Ruh sağlığına dair konuşurken tanı koyma; metindeki davranışlara ve kanıta dayan."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Hangisi romanın yayımlandığı döneme (1951) ve ortama en iyi uyar?",
      opts: ["Büyük Buhran'ın ortasında geçen bir işsizlik hikâyesi", "Savaş sonrası Amerika'nın refahı, tüketim kültürü ve uyum baskısı", "19. yüzyıl kırsalında bir çiftlik hayatı", "Gelecekte geçen bir bilim kurgu"],
      a: 1, why: "Roman, II. Dünya Savaşı sonrası Amerika'nın refah ve uyum baskısı içinde yayımlandı ve Holden'ın bu dünyayı sahte bulması bununla ilgili. A şıkkı yanlış döneme işaret ediyor; D şıkkı türü karıştırıyor." },
    { q: "Bir öğrenci şunu yazıyor: “*Because Salinger uses a first-person narrator, the reader sees events only through Holden's perception.*” Bu cümle için en doğru değerlendirme hangisi?",
      opts: ["Yanlış: okur olayları yazarın gözünden de görür.", "Yanlış: roman üçüncü tekil anlatıcıyla yazılmıştır.", "Kısmen doğru: yalnızca konuşma sahnelerinde geçerlidir.", "Doğru: *first-person narration* okuru Holden'ın algısına bağlar."],
      a: 3, why: "Birinci tekil anlatımda okur olayları anlatıcının filtresinden alır. A ve B yanlış; C ise bu sınırı yalnızca diyaloglarla sınırlıyor, oysa bütün roman Holden'ın gözünden akar." },
    { q: "Hangi cümle Holden'ın *colloquial diction* örneğine en çok benzer?",
      opts: ["He was a nice guy and all, but he really killed me.", "The individual displayed considerable hypocrisy.", "One must acknowledge the pervasive insincerity of society.", "The evening proved remarkably tedious for all attendees."],
      a: 0, why: "Argo (*killed me*) ve dolgu ifade gündelik sese işaret eder. B, C ve D şıkları resmî ve soyut bir ses taşır; Holden'ın tarzı değil." },
    { q: "Holden, trende tanıştığı bir yolcuya kendisi hakkında yalan söyler, ama bir başkasını “sahte” diye eleştirir. Bu durum ne gösterir?",
      opts: ["Holden her şeyi uydurduğunu, romanın tamamen yalan olduğunu", "Yazarın karakter hakkında yanlış yazdığını", "Holden'ın yargılarının ve davranışlarının tutarsız olabileceğini; yani anlatıcıya temkinle yaklaşmak gerektiğini", "Holden'ın artık sahte olmaya başladığını ve değiştiğini"],
      a: 2, why: "Sözü ile davranışı arasındaki çelişki, *unreliable narrator* işaretlerinden biridir; ama bu “her şey yalan” demek değildir. A şıkkı güvenilmezliği abartıyor; B ve D şıkları metindeki kanıtı yok sayıyor." },
    { q: "Aşağıdakilerden hangisi “anlatıcı ile yazar aynıdır” tuzağına düşen bir cümledir?",
      opts: ["Holden, Salinger'ın yarattığı bir kurgusal anlatıcıdır.", "Salinger bu sesi, gerçekçilik ve samimiyet sağlamak için seçmiş olabilir.", "Holden'ın görüşleri doğrudan Salinger'ın görüşleridir.", "Okur, Holden'ın anlattıklarını metne bakarak değerlendirir."],
      a: 2, why: "Anlatıcı kurgusal bir karakterdir; onun yargılarını yazarın yargıları saymak sık yapılan bir hatadır. Diğer şıklar anlatıcı ile yazarı doğru biçimde ayırıyor." }
  ]
};
