/* Kitpath not defteri · en201 · 2.1 Yunan Tragedyası
   Kaynak: öğretmen (Dr Byrd) Oedipus belgeleri (sahne yapısı, Chorus Project) + Aristoteles'in Poetics'indeki standart içerik (ek bilgi etiketli). Sınıfın baskısı Fagles (telifli): defterde Fagles alıntısı yok, yalnız satır numarası. Alıntı: F. Storr çevirisi (1912). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en201",
  amac: "Oedipus Rex’i okumadan önce tragedyanın kurallarını öğreneceksin: Yunan tiyatrosu nasıl çalışır, Aristoteles’in terimleri neyi anlatır, koro ne yapar, oyun hangi bölümlerden oluşur. Sonda 17 Aralık’ta teslim edilecek Chorus Project’in kuralları ve rubriği var.",
  bolumler: [
    {
      baslik: "Yunan tragedyası: nerede, kim için, nasıl?",
      kisa: "Tragedya, Atina’da Dionysos şenliğinde yarışan maskeli, korolu bir tiyatrodur.",
      bloklar: [
        { tip: "harita", merkez: "Yunan tiyatrosu (ek bilgi)", dallar: [
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
            { ikon: "🏛️", terim: "Oedipus Rex", tr: "Kral Oedipus", tanim: "Latince ad; Yunanca adı *Oidipous Tyrannos*. İngilizcede *Oedipus the King* de denir; öğretmen belgelerinde bu ikinci ad kullanılıyor. *Tyrannos* burada “zorba” değil, “hükümdar” demektir.", ornek: "Sınavda sınıfta kullanılan adı yaz ve tutarlı kal." }
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
        { tip: "not", metin: "**Ek bilgi (öğretmen belgesinde yok):** Aristoteles, *Poetics* adlı kitabında (yaklaşık MÖ 335) tragedyayı Sophocles’tan yaklaşık bir asır sonra inceledi. *Oedipus Rex*’i en iyi örneklerden biri sayar; bu bölümdeki ve sonraki bölümdeki terimler tragedya sorularında işe yarar." },
        { tip: "tablo", baslik: "Ek bilgi: tragedyanın altı parçası", head: ["Parça", "Yunanca", "Anlamı", "Oedipus Rex’te"], rows: [
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
            { ikon: "🦅", terim: "Hubris", tr: "haddini aşma, aşırı gurur", tanim: "İnsanın kendini sınırlarının üstünde görmesi. Byrd’in soru belgesi bu kavramı İkinci Stasimon’a bağlar. *Poetics*’in terimi değildir ama tragedya yorumlarında sık kullanılır.", ornek: "Koro İkinci Stasimon’da kibrin tiranı doğurduğunu söyler (Storr 1912: “Of insolence is bred the tyrant”); bunun Oedipus’a mı işaret ettiği tartışılır." },
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
            { metin: "Teiresias onu suçlar, Creon’la tartışır. Konumu sarsılır; Jocasta’nın üç yol hikâyesi onu korkutur, ama tanığın “haydutlar” demiş olması ona hâlâ umut bırakır.", set: { yol: { noktalar: [[1, 8], [2.5, 8.6], [4, 6.8], [5.5, 7.4], [5.5, 7.4], [5.5, 7.4], [5.5, 7.4], [5.5, 7.4]] } } },
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
            { metin: "Teiresias’ı suçlayıp Creon’la tartışan kişi.", cevap: "sag", neden: "Olayı ilerleten kararlar bireysel karakterlerindir: Oedipus bir *actor*." },
            { metin: "Teiresias’ın sözleri karşısında “ne inanabilirim ne inkâr” diye kararsız kalan ses.", cevap: "sol", neden: "Birinci şarkıda koro iki arada kalır." },
            { metin: "Gözlerini kör edip sürgün isteyen kral.", cevap: "sag", neden: "Kendi eylemini üstlenen bir *actor*." }
          ] }
      ]
    },
    {
      baslik: "Oyunun bölümleri ve satır numaraları",
      kisa: "Oyun şu sırayla akar: prologos, parados, dört episode ve dört stasimon, exodos.",
      bloklar: [
        { tip: "adimlar", baslik: "Bölümler ve satır aralıkları (Fagles baskısındaki satır no.)", adimlar: [
            { baslik: "*Prologos* (1–168)", metin: "Açılış. Sorun anlatılır; Thebai’yi salgın vurmuştur, halk Oedipus’a yalvarır." },
            { baslik: "*Parados* (169–244)", metin: "Koronun sahneye girip söylediği ilk şarkı." },
            { baslik: "*First Episode* (245–526), *First Stasimon* (527–572)", metin: "Katile lanet, Teiresias sahnesi; ardından koronun kararsız şarkısı." },
            { baslik: "*Second Episode* (573–953), *Second Stasimon* (954–997)", metin: "Creon ve Jocasta; ardından hubris ve tanrılara saygı şarkısı." },
            { baslik: "*Third Episode* (998–1194), *Third Stasimon* (1195–1214)", metin: "Korinthos’lu haberci, Jocasta anlar; ardından umutlu şarkı." },
            { baslik: "*Fourth Episode* (1215–1310), *Fourth Stasimon* (1311–1350)", metin: "Çoban, Oedipus anlar; ardından ağıt." },
            { baslik: "*Exodos* (1351–sona)", metin: "Kör etme haberi, sürgün isteği ve koronun veda sözleri." }
          ] },
        { tip: "tuzak", baslik: "Satır numarası tuzağı", metin: "Satır numaraları çeviriye göre değişir. Sınıf Fagles baskısını kullanıyor; Jebb ve Storr numaraları Yunanca metne göredir ve Fagles’tan farklıdır.", yanlis: "Bir çeviride gördüğüm satır numarası her baskıda aynıdır.", dogru: "Sınavda okulun (Fagles) baskısındaki numarayı kullan. Bu defterdeki satır aralıkları Fagles’a göredir; Jebb ya da Storr okursan numaralar kayar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The play has a prologue, a parados, four episodes separated by four choral odes (stasima), and an exodos.*", metin: "Yapıyı özetle." },
            { ikon: "✍️", baslik: "*The parados is the chorus’s entrance song.*", metin: "Tanım cümlesi." },
            { ikon: "✍️", baslik: "*A stasimon is a choral ode that comments on the preceding episode.*", metin: "Tanım cümlesi." }
          ] }
      ]
    },
    {
      baslik: "Chorus Project: koro oduyla grup performansı",
      kisa: "4–5 kişilik grup bir ode seçer, maske ve kostümle performans videosu teslim eder.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 5, onek: "4–", etiket: "kişilik grup (öğretmen seçer), ama not bireysel" },
            { deger: 90, onek: "%", etiket: "Performance Grade 2’nin payı" },
            { deger: 17, sonek: " Aralık 21:00", etiket: "teslim (Çarşamba); video 18 Aralık’ta sınıfta izlenir" }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "📜", baslik: "Ode seçimi (Fagles satır no.)", metin: "Parados 169–203, Parados 204–244, Ode 1 526–571, Ode 2 954–997, Ode 3 1195–1215. İki grup aynı odu seçebilir." },
            { ikon: "🗣️", baslik: "Metin paylaşımı", metin: "Satırlar eşit bölünür; herkes tek başına konuşur, ayrıca hep birlikte koro halinde söylenen bölümler olur. Önemli satırlar tekrar edilebilir." },
            { ikon: "🎭", baslik: "Maske ve kostüm zorunlu", metin: "Hepiniz Thebai’li bireysel bir vatandaş gibi görünmelisiniz. Hareket ya da dans koordineli olsun; istenirse melodiyle şarkı söylenebilir." },
            { ikon: "🎙️", baslik: "Okuma değil performans", metin: "Her sözcük yazıldığı gibi telaffuz edilir, ton ode’un anlamına uyar. Çekim yeri, dekor ve aksesuarı önceden planla." },
            { ikon: "📤", baslik: "Teslim", metin: "Grubun tek üyesi çalışan videoyu Google Classroom’a yükler VE öğretmene e-postayla yollar. Geç teslim bütün grubu etkiler; katılmayan 0 alır, telafi yok. Erken gönder, videonun açıldığını kontrol et." },
            { ikon: "✍️", baslik: "Sınavda/planda böyle yaz: *Our ode expresses the fear of the Theban citizens, so we use a slow, trembling tone.*", metin: "Seçim gerekçesini İngilizce söyleyebil." }
          ] },
        { tip: "tablo", baslik: "Chorus Project rubriği (100 puan)", head: ["Kriter", "Puan"], rows: [
            ["Metne tam bağlılık", "20"],
            ["Doğru İngilizce ve telaffuz", "10"],
            ["Teknik: izleyiciye bakma, okuyormuş gibi görünmeme", "10"],
            ["Ses yansıtma, monoton olmama", "15"],
            ["Tempo ve ton", "10"],
            ["Vücut hareketi ya da dans: ode’a uygun, performansı güçlendiren", "15"],
            ["Maske uygunluğu", "15"],
            ["Kostüm uygunluğu", "5"]
          ], vurgu: 0, not: "Toplam 100. Amaç, oyunu yaratıcı biçimde yorumlayarak anlamak. Ode satır aralıkları stasimon aralıklarından bir iki satır farklıdır; proje belgesindeki aralıkları kullan." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tragedya: yüksek mevkili bir kahramanın düşüşünü anlatan ciddi oyun; Atina’da Dionysos şenliğinde yarışırdı.",
            "Aristoteles’e göre en önemli parça *plot*, en az önemlisi *spectacle*’dır; amaç acıma ve korkudur (ek bilgi).",
            "*Hamartia*: felaketi başlatan hata. *Hubris*: haddini aşma; Oedipus için tartışmalıdır.",
            "*Peripeteia*: olayların tersine dönmesi. *Anagnorisis*: gerçeği fark etme. *Catharsis*: arınma.",
            "Koro: Thebai’nin yaşlıları; topluluğun sesi, yorumcu ve seyircinin aynası.",
            "Sıra: *prologos* (1–168), *parados* (169–244), dört *episode* ile dört *stasimon*, *exodos* (1351–sona); satır no. Fagles baskısına göredir.",
            "Chorus Project: 4–5 kişilik grup, bireysel not, Performance Grade 2’nin %90’ı; maske ve kostüm zorunlu.",
            "Teslim: 17 Aralık Çarşamba 21:00; rubrik toplamı 100 (20/10/10/15/10/15/15/5)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "The Corinthian messenger comes to comfort Oedipus, but his news reveals Oedipus’s identity. In Aristotle’s terms, this event best illustrates which concept?",
      opts: ["Anagnorisis: Oedipus recognizes who he is", "Peripeteia: the expected relief turns into its opposite", "Catharsis: the audience is purged of its emotions", "Hubris: Oedipus oversteps his limits"], a: 1,
      why: "İyi haber beklenirken tam tersi olur: bu *peripeteia*. En çekici yanlış şık A: *anagnorisis* Oedipus’un gerçeği tam anladığı andır ve çoban konuştuktan sonra gelir; haberin kendisi ise olayın yönünü tersine çevirir." },
    { q: "In the first choral ode, the chorus neither believes nor denies Teiresias’s accusation, but stays loyal to the king. What function does the chorus serve here?",
      opts: ["It acts as the hero who drives the plot", "It acts as a god who knows the future", "It acts as a court that judges the king", "It voices the community’s confusion and divided loyalty"], a: 3,
      why: "Koro topluluğun adına konuşur ve ruh hâlini taşır. A yanlıştır: olayı ilerleten kararlar aktörlerindir. C de yanlıştır: koro karar vermez, yargılamaz." },
    { q: "Which statement about the Chorus Project is correct?",
      opts: ["Each group member receives the same grade as the group, and the project is 50% of Performance Grade 2", "Students may wear ordinary clothes if they read the ode clearly from a script", "A group of 4–5 students performs an ode; masks and costumes are required, and each student receives an individual grade", "The video is due before the Christmas break, and late groups lose only the late member’s points"], a: 2,
      why: "Proje 4–5 kişilik grupla yapılır, not bireyseldir ve Performance Grade 2’nin %90’ıdır; maske ve kostüm zorunludur. A’daki “50%” ve ortak not yanlış. B yanlış: okuyormuş gibi görünmek puan kaybettirir. D yanlış: geç teslim bütün grubu etkiler." },
    { q: "Which sequence shows the sections of the play in the correct order?",
      opts: ["Prologos – Parados – Episode – Stasimon – Exodos", "Parados – Prologos – Episode – Stasimon – Exodos", "Prologos – Episode – Parados – Exodos – Stasimon", "Exodos – Prologos – Parados – Stasimon – Episode"], a: 0,
      why: "Oyun *prologos* ile açılır, koro *parados*’ta girer, sonra *episode* ve *stasimon* dönüşümlü gider (dört episode, dört stasimon), *exodos* ile biter. B’de ilk iki bölüm yer değiştirmiş." },
    { q: "A student writes: “According to Aristotle, the most important part of a tragedy is spectacle, the visual show.” Why is this sentence wrong?",
      opts: ["Aristotle does not list spectacle at all", "Aristotle ranks plot first and spectacle last among the six parts", "Aristotle says song is the most important part", "Aristotle lists only three parts of tragedy"], a: 1,
      why: "Aristoteles altı parça sayar ve olay örgüsünü “ruh” olarak görür; gösteriyi en sona koyar. A yanlış: *spectacle* listede vardır ama en az önemlidir." }
  ]
};
