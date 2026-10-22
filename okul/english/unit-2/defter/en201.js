/* Kitora not defteri · en201 · 2.1 Yunan Tragedyası
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Oedipus Rex) + Aristoteles'in Poetics'indeki standart içerik. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en201",
  amac: "Oedipus Rex’i okumadan önce tragedyanın kurallarını öğreneceksin: Yunan tiyatrosu nasıl çalışır, Aristoteles’in beş anahtar terimi (*hamartia*, *hubris*, *peripeteia*, *anagnorisis*, *catharsis*) neyi anlatır, koro ne yapar ve oyun hangi bölümlerden oluşur.",
  bolumler: [
    {
      baslik: "Yunan tragedyası: nerede, kim için, nasıl?",
      kisa: "Tragedya, Atina’da Dionysos şenliğinde yarışan maskeli, korolu bir tiyatrodur.",
      bloklar: [
        { tip: "harita", merkez: "Yunan tiyatrosu", dallar: [
            { baslik: "*Theatron*", alt: "Seyircinin oturduğu yamaç; binlerce kişilik" },
            { baslik: "*Orchestra*", alt: "Koronun şarkı söyleyip dans ettiği yuvarlak alan" },
            { baslik: "*Skene*", alt: "Arkadaki bina; Oedipus Rex’te saray cephesi" },
            { baslik: "Maskeler", alt: "Bütün roller erkek oyunculara aitti; kadın rolleri de maskeyle oynanırdı" },
            { baslik: "En çok üç oyuncu", alt: "Sophocles’in oyunlarında üç oyuncu bütün rolleri paylaşır" },
            { baslik: "*Chorus*", alt: "Şarkı söyleyip dans eden topluluk (yaklaşık 12–15 kişi)" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Tragedy", tr: "tragedya", tanim: "Ciddi bir olayı, yüksek mevkili bir kahramanın büyük bir felakete uğramasını anlatan oyun. Seyirciye acıma ve korku hissettirir.", ornek: "Şehrin kralı kendi geçmişini araştırırken her şeyini kaybeder." },
            { ikon: "✍️", terim: "Sophocles", tr: "Sophokles (oyun yazarı)", tanim: "MÖ 496–406 civarında yaşadı; yedi oyunu bütün olarak günümüze ulaştı. *Oedipus Rex* en ünlüsüdür.", ornek: "Oyun yaklaşık MÖ 429–425 arasında sahnelendi; kesin tarih bilinmiyor." },
            { ikon: "🏛️", terim: "Oedipus Rex", tr: "Kral Oedipus", tanim: "Latince ad; Yunanca adı *Oidipous Tyrannos*. İngilizcede *Oedipus the King* de denir. *Tyrannos* burada “zorba” değil, “hükümdar” demektir.", ornek: "Sınavda sınıfta kullandığın adı yaz ve tutarlı kal." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Greek tragedy is a serious drama about a person of high status who falls.*", metin: "Tragedya tanımı." },
            { ikon: "✍️", baslik: "*Oedipus Rex is a tragedy by the Athenian playwright Sophocles.*", metin: "Eseri ve yazarı tanıtan açılış cümlesi." },
            { ikon: "✍️", baslik: "*The audience already knew the myth, so the tension comes from how it unfolds.*", metin: "Gerilim ne olacağından değil, nasıl olacağından gelir." }
          ] }
      ]
    },
    {
      baslik: "Aristoteles ve tragedyanın altı parçası",
      kisa: "Aristoteles’e göre tragedyanın ruhu olay örgüsüdür; amacı acıma ve korku uyandırmaktır.",
      bloklar: [
        { tip: "not", metin: "Aristoteles, *Poetics* adlı kitabında (yaklaşık MÖ 335) tragedyayı Sophocles’tan yaklaşık bir asır sonra inceledi. *Oedipus Rex*’i en iyi örneklerden biri sayar; terimleri bu oyunla öğrenmek bu yüzden en kolayıdır." },
        { tip: "tablo", baslik: "Tragedyanın altı parçası", head: ["Parça", "Yunanca", "Anlamı", "Oedipus Rex’te"], rows: [
            ["*Plot*", "*mythos*", "Olayların sıralanışı; en önemli parça", "Tek günde açılan soruşturma"],
            ["*Character*", "*ethos*", "Kişilerin yapısı ve seçimleri", "Kararlı, öfkeli, halkını seven Oedipus"],
            ["*Thought*", "*dianoia*", "Oyunun fikirleri ve tartışılan görüşler", "Kader mi, akıl mı?"],
            ["*Diction*", "*lexis*", "Konuşmanın dili", "Işık ve görme imgeleri"],
            ["*Song*", "*melos*", "Koronun şarkıları", "Dört koro şarkısı (*stasimon*)"],
            ["*Spectacle*", "*opsis*", "Sahnenin görsel yanı", "Maskeler, kutsal dallar, kör Oedipus"]
          ], vurgu: 0, not: "Aristoteles’e göre önem sırası yukarıdan aşağıya iner: *plot* en önemli, *spectacle* en az önemli parçadır." },
        { tip: "formul", parcalar: [
            { t: "*Pity*", alt: "acıma (*eleos*)" }, "+",
            { t: "*Fear*", alt: "korku (*phobos*)" }, "→",
            { t: "*Catharsis*", alt: "arınma" }
          ], aciklama: "Seyirci kahramanın acısına üzülür, aynı şeyin kendi başına da gelebileceğinden korkar; oyun bitince duyguları boşalmış ve arınmış hisseder." }
      ]
    },
    {
      baslik: "Beş anahtar terim",
      kisa: "Beş terimi tanımla ve her birini Oedipus Rex’ten bir sahneyle kanıtla.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Hamartia", tr: "hata, yanlış değerlendirme", tanim: "Kahramanın bilmeden ya da yanlış yargılayarak yaptığı, felaketi başlatan hata. Ahlaki bir “günah” değildir.", ornek: "Oedipus kavşaktaki yaşlı adama öfkeyle saldırır; adamın kim olduğunu bilmez." },
            { ikon: "🦅", terim: "Hubris", tr: "haddini aşma, aşırı gurur", tanim: "İnsanın kendini sınırlarının üstünde görmesi. *Poetics*’in terimi değildir, ama tragedya yorumlarında sık kullanılır.", ornek: "Koro ikinci şarkıda *hubris*’in bir “tiran” doğurduğunu söyler; bunun Oedipus’a mı işaret ettiği tartışılır." },
            { ikon: "🔄", terim: "Peripeteia", tr: "tersine dönüş", tanim: "Olayların beklenen yönün tam tersine dönmesi.", ornek: "Korinthos’lu haberci Oedipus’u rahatlatmaya gelir; haberi onu yıkar." },
            { ikon: "💡", terim: "Anagnorisis", tr: "tanıma, gerçeği fark etme", tanim: "Kahramanın cehaletten bilgiye geçtiği an. Aristoteles’e göre en iyisi, *peripeteia* ile aynı anda olandır.", ornek: "Çobanı dinleyen Oedipus kim olduğunu anlar." },
            { ikon: "🌊", terim: "Catharsis", tr: "arınma", tanim: "Seyircinin acıma ve korkusunun boşalıp arınması. Aynı sözcük dinî “temizlenme” anlamına da gelir; oyunda şehir de kirden arınmaya çalışır.", ornek: "Seyirci Oedipus’un yıkımını izler ve sonunda koro ile birlikte sakinleşir." }
          ] },
        { tip: "grafik", baslik: "Oedipus’un konumu oyun boyunca nasıl değişir?", xlabel: "Oyunun ilerleyişi", ylabel: "Oedipus’un konumu", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "Başlangıç" }, { v: 4, label: "Suçlama" }, { v: 7, label: "Umut" }, { v: 8, label: "Gerçek" }, { v: 9.5, label: "Son" }],
          ogeler: [
            { id: "ust", tip: "yazi", x: 0.2, y: 9.6, hiza: "start", metin: "saygın kral" },
            { id: "alt", tip: "yazi", x: 0.2, y: 0.5, hiza: "start", metin: "çökmüş" },
            { id: "yol", tip: "egri", renk: 1, etiket: "Oedipus’un konumu", noktalar: [[1, 8], [2.5, 8.6], [2.5, 8.6], [2.5, 8.6], [2.5, 8.6], [2.5, 8.6], [2.5, 8.6], [2.5, 8.6]] },
            { id: "zirve", tip: "nokta", x: 7, y: 9, etiket: "peripeteia", gizli: true },
            { id: "dusus", tip: "nokta", x: 8, y: 2.5, etiket: "anagnorisis", gizli: true },
            { id: "son", tip: "yazi", x: 7.2, y: 5.2, metin: "catharsis: seyirci arınır", gizli: true }
          ],
          durumlar: [
            { metin: "Oyunun başında Oedipus saygın bir kral; halk ondan çare bekliyor. Konumu yüksek." },
            { metin: "Tiresias onu suçlar, Creon’la tartışır. Konumu biraz sarsılır; ama Jocasta’nın hikâyesi ona umut verir.", set: { yol: { noktalar: [[1, 8], [2.5, 8.6], [4, 6.8], [5.5, 7.4], [5.5, 7.4], [5.5, 7.4], [5.5, 7.4], [5.5, 7.4]] } } },
            { metin: "Polybus’un ölüm haberiyle umut zirveye çıkar. Ama haberci bir şey daha söyleyecek: işte ==*peripeteia*==, iyi haber tersine dönmek üzere.", set: { yol: { noktalar: [[1, 8], [2.5, 8.6], [4, 6.8], [5.5, 7.4], [7, 9], [7, 9], [7, 9], [7, 9]] } }, goster: ["zirve"] },
            { metin: "Çoban konuşunca Oedipus kim olduğunu anlar: ==*anagnorisis*==. Düşüş çok hızlıdır, çünkü tersine dönüş ve tanıma yan yanadır.", set: { yol: { noktalar: [[1, 8], [2.5, 8.6], [4, 6.8], [5.5, 7.4], [7, 9], [8, 2.5], [8, 2.5], [8, 2.5]] } }, goster: ["dusus"] },
            { metin: "Oedipus kendini kör eder, sürgün ister. Seyirci acıma ve korkuyla baş başa kalır; ==*catharsis*== burada gerçekleşir.", set: { yol: { noktalar: [[1, 8], [2.5, 8.6], [4, 6.8], [5.5, 7.4], [7, 9], [8, 2.5], [9, 0.8], [9.8, 0.8]] } }, goster: ["son"] }
          ] },
        { tip: "tuzak", baslik: "Hamartia tuzağı", metin: "Ders kitapları sık sık *hamartia* için “*tragic flaw*” der. Aristoteles’in kullandığı anlam daha çok “yanlış değerlendirme, hata”dır.", yanlis: "*Hamartia* kahramanın kötü karakteridir.", dogru: "*Hamartia* felaketi başlatan hatadır. Oedipus kötü biri değildir; bilmeden hata yapar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Peripeteia occurs when the messenger’s good news turns into the worst news.*", metin: "Tersine dönüş." },
            { ikon: "✍️", baslik: "*Anagnorisis happens when Oedipus realizes that he is the murderer he is hunting.*", metin: "Gerçeği fark etme." },
            { ikon: "✍️", baslik: "*The audience feels pity and fear, and this leads to catharsis.*", metin: "Arınma." }
          ] }
      ]
    },
    {
      baslik: "Koro: oyunun ortak sesi",
      kisa: "Koro, Thebai’nin yaşlıları olarak topluluk adına şarkı söyler, yorum yapar, tepki verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Chorus", tr: "koro", tanim: "Oyun boyunca sahnede kalan, şarkı söyleyip dans eden topluluk. *Oedipus Rex*’te Thebai’nin yaşlı vatandaşlarıdır.", ornek: "Salgından korkan halkın adına tanrılara yakarır." },
            { ikon: "🗣️", terim: "Koryphaios", tr: "koro başı", tanim: "Koro adına konuşan ve aktörlerle diyalog kuran tek kişi.", ornek: "Oedipus’a Creon’un yemin ettiğini hatırlatan ses." },
            { ikon: "🔁", terim: "Strophe / antistrophe", tr: "dönüş / karşı dönüş", tanim: "Koro şarkısının iki bölümü: biri bir yana dönerek, öteki geri dönerek söylenir.", ornek: "Her koro şarkısı bu çiftlerden kurulur." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🗣️", baslik: "Topluluğun sesi", metin: "Halkın korkusunu ve değerlerini söyler. Sınavda: *The chorus voices the fears of the Theban community.*" },
            { ikon: "🧭", baslik: "Yorumcu ve tavsiyeci", metin: "Olayları değerlendirir, krala öğüt verir. Sınavda: *The chorus comments on the action and advises Oedipus.*" },
            { ikon: "🎵", baslik: "Ruh hâli ve ara", metin: "Şarkılarla duyguyu taşır, bölümleri ayırır. Sınavda: *The odes set the mood between episodes.*" },
            { ikon: "👀", baslik: "Seyircinin aynası", metin: "Seyircinin tepkisini sahnede gösterir. Sınavda: *The chorus reacts as the audience might.*" }
          ] },
        { tip: "ikili", sol: { ikon: "👥", baslik: "*Chorus*", maddeler: ["Birlikte konuşur ve şarkı söyler", "Topluluk adına tepki verir"] },
          sag: { ikon: "🎭", baslik: "*Actors*", maddeler: ["Tek tek karakterleri oynar", "Olayı kararlarıyla ilerletir"] },
          oyun: [
            { metin: "Creon’un yeminini duyunca Oedipus’a “ona inanmak akıllıca” diyen ses.", cevap: "sol", neden: "Öğüt veren, topluluk adına konuşan koro (*chorus*)." },
            { metin: "Tiresias’ı suçlayıp Creon’la tartışan kişi.", cevap: "sag", neden: "Olayı ilerleten kararlar bireysel karakterlerindir: Oedipus bir *actor*." },
            { metin: "Tiresias’ın sözleri karşısında “ne inanabilirim ne inkâr” diye kararsız kalan ses.", cevap: "sol", neden: "Birinci şarkıda koro iki arada kalır." },
            { metin: "Gözlerini kör edip sürgün isteyen kral.", cevap: "sag", neden: "Kendi eylemini üstlenen bir *actor*." }
          ] }
      ]
    },
    {
      baslik: "Oyunun bölümleri",
      kisa: "Oyun şu sırayla akar: prologos, parodos, episodlar ve stasimalar, exodos.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir Yunan tragedyası bu sırayla ilerler", adimlar: [
            { baslik: "*Prologos*", metin: "Açılış. Sorun ve zaman anlatılır; *Oedipus Rex*’te Thebai’yi salgın vurmuştur." },
            { baslik: "*Parodos*", metin: "Koronun sahneye girip söylediği ilk şarkı." },
            { baslik: "*Episodes*", metin: "Aktörlerin konuştuğu, olayın ilerlediği sahneler (*Oedipus Rex*’te dört)." },
            { baslik: "*Stasimon*", metin: "Episodlar arasında koronun söylediği şarkı; olayları yorumlar (*Oedipus Rex*’te dört)." },
            { baslik: "*Exodos*", metin: "Son bölüm: olayın sonucu ve koronun veda sözleri." }
          ] },
        { tip: "tuzak", baslik: "“Üç birlik” tuzağı", metin: "*Oedipus Rex* saray önünde ve kısa bir sürede geçer. Ama Aristoteles’in asıl istediği olay birliğidir (*unity of action*); yer ve zaman birlikleri sonradan Rönesans eleştirmenlerince kurala çevrildi.", yanlis: "Aristoteles tragedyanın tek günde ve tek yerde geçmesini şart koşar.", dogru: "Aristoteles tek bir olay zinciri ister; yer ve zaman birliği sonradan eklenen kuraldır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The play is divided into a prologue, a parodos, four episodes separated by choral odes, and an exodos.*", metin: "Yapıyı özetle." },
            { ikon: "✍️", baslik: "*The parodos is the chorus’s entrance song.*", metin: "Tanım cümlesi." },
            { ikon: "✍️", baslik: "*A stasimon is a choral ode that comments on the preceding episode.*", metin: "Tanım cümlesi." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tragedya: yüksek mevkili bir kahramanın düşüşünü anlatan ciddi oyun; Atina’da Dionysos şenliğinde yarışırdı.",
            "Aristoteles’e göre en önemli parça *plot*, en az önemlisi *spectacle*’dır; amaç acıma ve korkudur.",
            "*Hamartia*: felaketi başlatan hata. Kahraman kötü değil, yanılmış biridir.",
            "*Hubris*: haddini aşma. *Poetics*’in temel terimi değildir; Oedipus için tartışmalıdır.",
            "*Peripeteia*: olayların tersine dönmesi. *Anagnorisis*: gerçeği fark etme. En iyisi ikisinin yan yana olmasıdır.",
            "*Catharsis*: seyircinin acıma ve korkusunun arınması.",
            "Koro: Thebai’nin yaşlıları; topluluğun sesi, yorumcu ve seyircinin aynası.",
            "Sıra: *prologos*, *parodos*, dört *episode* ile dört *stasimon*, *exodos*."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Korinthos’lu haberci, Oedipus’un korkusunu azaltmak için gelir; ama verdiği haber Oedipus’un kimliğini açığa çıkarır. Aristoteles’in terimleriyle bu olay en iyi neyi örnekler?",
      opts: ["*Anagnorisis*: Oedipus’un kim olduğunu anlaması", "*Peripeteia*: beklenen rahatlamanın tersine dönmesi", "*Catharsis*: seyircinin arınması", "*Hubris*: Oedipus’un haddini aşması"], a: 1,
      why: "İyi haber beklenirken tam tersi olur: bu *peripeteia*. En çekici yanlış şık A: *anagnorisis* Oedipus’un gerçeği anladığı andır ve çoban konuştuktan sonra gelir; haberin kendisi ise olayın yönünü tersine çevirir." },
    { q: "Birinci koro şarkısında koro, Tiresias’ın suçlamasına ne inanır ne de karşı çıkar; kralına bağlı kalır ama endişelidir. Koro burada hangi işlevi görür?",
      opts: ["Olayı hızlandıran kahraman olur", "Kaderi önceden bilen tanrı olur", "Kralı yargılayan mahkeme olur", "Topluluğun şaşkınlığını ve ikilemini dile getiren ses olur"], a: 3,
      why: "Koro topluluğun adına konuşur ve ruh hâlini taşır. A yanlıştır: olayı ilerleten kararlar aktörlerindir. C de yanlıştır: koro karar vermez, yargılamaz." },
    { q: "Aristoteles’in *hamartia* kavramına göre Oedipus’un durumu en doğru hangisiyle anlatılır?",
      opts: ["Kim olduğunu bilmeden verdiği yanlış yargılar ve öfkeli tepkiler", "Doğuştan kötü bir karaktere sahip olması", "Tanrılara bilerek isyan etmesi", "Halkının acısını umursamaması"], a: 0,
      why: "*Hamartia* ahlaki kusur değil, bilgisizlikten doğan hatadır. B’deki “kötü karakter” ders kitaplarında sık görülen yanlış okumadır; Oedipus halkı için çabalayan iyi niyetli bir kraldır." },
    { q: "Hangi dizi, bir Yunan tragedyasının bölümlerini doğru sırada gösterir?",
      opts: ["*Parodos – Prologos – Episode – Stasimon – Exodos*", "*Prologos – Episode – Parodos – Exodos – Stasimon*", "*Prologos – Parodos – Episode – Stasimon – Exodos*", "*Exodos – Prologos – Parodos – Stasimon – Episode*"], a: 2,
      why: "Oyun *prologos* ile açılır, koro *parodos*’ta girer, sonra *episode* ve *stasimon* dönüşümlü gider, *exodos* ile biter. A’da ilk iki bölüm yer değiştirmiş." },
    { q: "Bir öğrenci “Aristoteles’e göre tragedyanın en önemli parçası *spectacle*, yani sahne gösterisidir” yazıyor. Bu cümle neden hatalıdır?",
      opts: ["Aristoteles *spectacle*’ı hiç saymaz", "Aristoteles’e göre en önemli parça *plot*, en az önemlisi *spectacle*’dır", "Aristoteles’e göre en önemli parça *song*’dur", "Aristoteles’in listesinde yalnızca üç parça vardır"], a: 1,
      why: "Aristoteles altı parça sayar ve olay örgüsünü “ruh” olarak görür; gösteriyi en sona koyar. A yanlış: *spectacle* listede vardır ama en az önemlidir." }
  ]
};
