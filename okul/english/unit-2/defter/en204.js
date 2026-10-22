/* Kitora not defteri · en204 · 2.4 Temalar ve Motifler
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Oedipus Rex) + oyunun standart tema analizi. Alıntılar: R. C. Jebb çevirisi (1887), v. = Yunanca metnin satır numarası. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en204",
  amac: "Bu konu oyunun fikirlerini anlatıyor: kader ile özgür irade, görme ile körlük, bilgi, kirlenme ve arınma. Her temayı bir sahneyle kanıtlamayı ve *theme* ile *motif* farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kader mi, özgür irade mi?",
      kisa: "Kehanet geleceği bildirir; ama Oedipus’u o yola sokan kendi seçimleridir.",
      bloklar: [
        { tip: "adimlar", baslik: "Her adımda kim karar veriyor?", adimlar: [
            { baslik: "Kehanet (kader)", metin: "Apollo’nun kâhinleri Laius’a oğlunun onu öldüreceğini bildirir." },
            { baslik: "Seçim: kaçış", metin: "Oedipus, Delphoi’de duyduklarının ardından Korinthos’a dönmemeyi seçer." },
            { baslik: "Seçim: öfke", metin: "Kavşakta yaşlı adamla kavga eder ve onu öldürür." },
            { baslik: "Seçim: soruşturma", metin: "Jocasta ve çoban yalvarsa da gerçeği araştırmayı sürdürür." },
            { baslik: "Sonuç", metin: "Kehanet gerçekleşir: hem kader hem seçim iş başındadır." }
          ] },
        { tip: "ikili", sol: { ikon: "⚡", baslik: "*Fate*", maddeler: ["Tanrıların ya da kehanetin önceden bildirdiği", "İnsanın dışındaki güç"] },
          sag: { ikon: "🧭", baslik: "*Free will*", maddeler: ["İnsanın kendi seçimi", "Sorumluluk ona aittir"] },
          oyun: [
            { metin: "Apollo’nun kâhinleri Laius’a oğlunun onu öldüreceğini söyler.", cevap: "sol", neden: "Önceden bildirilen, insanın dışındaki söz: *fate*." },
            { metin: "Oedipus kehaneti duyunca Korinthos’tan ayrılmaya karar verir.", cevap: "sag", neden: "Gitmeyi seçen kendisidir: *free will*." },
            { metin: "Oedipus, Jocasta durmasını istese de çobanı çağırmakta ısrar eder.", cevap: "sag", neden: "Kimse onu zorlamıyor; ısrar bir seçimdir." },
            { metin: "Apollo, Oedipus’un babasını öldürüp annesiyle evleneceğini bildirir.", cevap: "sol", neden: "Tanrının sözü: *fate*." }
          ] },
        { tip: "tablo", baslik: "Üç okuma ve kanıtları (Jebb 1887)", head: ["Okuma", "Kanıt", "Sınavda böyle yaz"], rows: [
            ["*Fate*", "Oedipus: “Apollo, friends, Apollo was he that brought these my woes to pass” (v. 1329–30)", "*Oedipus blames Apollo for his suffering, which suggests that fate is at work.*"],
            ["*Free will*", "Aynı konuşmada: “the hand that struck the eyes was none save mine” (v. 1331–32)", "*Yet he admits that he alone struck his eyes, taking responsibility.*"],
            ["*Chance*", "Jocasta: “what should mortal fear, for whom the decrees of Fortune are supreme” (v. 977–78)", "*Jocasta trusts chance and dismisses prophecy, which the play proves wrong.*"]
          ] },
        { tip: "tuzak", metin: "Kehanet olayı neden olmaz; önceden bildirir. İyi bir essay iki tarafı da tartar.", yanlis: "Oedipus hiçbir şey seçmedi; tanrılar onu yönetti.", dogru: "Kehanet olayı önceden bildirir ama kavşakta öfkelenen, kaçan ve araştıran Oedipus’tur. Kader ve seçim iç içedir." }
      ]
    },
    {
      baslik: "Görme ve körlük",
      kisa: "Gözleri gören Oedipus gerçeği görmez; kör Tiresias görür.",
      bloklar: [
        { tip: "grafik", baslik: "Gözler ve içgörü: yer değiştiren çizgiler", xlabel: "Sahne", ylabel: "Düzey", xmax: 7, ymax: 10,
          xticks: [{ v: 1, label: "Prolog" }, { v: 2, label: "Ep.1" }, { v: 3, label: "Ep.2" }, { v: 4, label: "Ep.3" }, { v: 5, label: "Ep.4" }, { v: 6.5, label: "Exodos" }],
          yticks: [{ v: 1, label: "düşük" }, { v: 9, label: "yüksek" }],
          ogeler: [
            { id: "goz", tip: "egri", renk: 1, etiket: "Oedipus’un gözleri", noktalar: [[1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [5.7, 9], [6.5, 9]], gizli: true },
            { id: "ic", tip: "egri", renk: 3, etiket: "Oedipus’un içgörüsü", noktalar: [[1, 1], [2, 1.5], [3, 3], [4, 4], [5, 4], [5.7, 4], [6.5, 4]], gizli: true },
            { id: "tir", tip: "cizgi", renk: 2, kesik: true, etiket: "Tiresias’ın içgörüsü", from: [1, 9.8], to: [6.5, 9.8], gizli: true }
          ],
          durumlar: [
            { metin: "Oedipus’un fiziksel görmesi baştan sona yüksektir: gözleri sağlamdır.", goster: ["goz"] },
            { metin: "Ama içgörüsü düşüktür: kendisi hakkındaki gerçeği görmez.", goster: ["ic"] },
            { metin: "Kör Tiresias’ın içgörüsü baştan tepededir: ==kör ama gören==.", goster: ["tir"] },
            { metin: "Gerçeği anlayınca Oedipus’un içgörüsü zirveye çıkar; kendini kör edince gözleri söner. Çizgiler yer değiştirir: ==gözünü kaybettiğinde görür==.", set: { goz: { noktalar: [[1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [5.7, 0.5], [6.5, 0.5]] }, ic: { noktalar: [[1, 1], [2, 1.5], [3, 3], [4, 4], [5, 9], [5.7, 9], [6.5, 9]] } } }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Insight", tr: "içgörü", tanim: "Gözle değil akılla ve gerçeği kavrayarak görmek. Oyunda “gerçek görmek” budur.", ornek: "Tiresias hiçbir şey görmez ama bütün gerçeği bilir." },
            { ikon: "🕯️", terim: "Imagery", tr: "imge", tanim: "Duyulara seslenen sözcükler. Burada ışık, karanlık ve görme imgeleri sürekli tekrar eder.", ornek: "Oedipus ışığa son kez bakmak ister." },
            { ikon: "🔮", terim: "Foreshadowing", tr: "önceden haber verme", tanim: "Sonraki bir olaya erken işaret. Tiresias’ın sözleri Oedipus’un kör olacağını önceden gösterir.", ornek: "Tiresias, Oedipus’un gözlerinin karanlığa gömüleceğini söyler." }
          ] },
        { tip: "tablo", baslik: "Işık ve karanlık imgeleri (Jebb 1887)", head: ["Sahne", "Ne olur?", "Sınavda böyle yaz"], rows: [
            ["Episode 1", "Oedipus Tiresias’ı “sürekli gecede yaşayan” biri diye aşağılar. Tiresias karşılık verir: “thou hast sight, yet seest not in what misery thou art” (v. 412–13).", "*Tiresias is physically blind but sees the truth; Oedipus has eyes but cannot see.*"],
            ["Episode 1", "Tiresias, Oedipus’un karanlığa gömüleceğini söyler: “darkness then on the eyes that now see true” (v. 419–20).", "*Tiresias’s warning foreshadows Oedipus’s self-blinding.*"],
            ["Exodos", "Oedipus ışığa son kez bakmak ister ve kendini kör eder.", "*Oedipus blinds himself, and only then truly ‘sees’ who he is.*"]
          ] },
        { tip: "tuzak", baslik: "Kör etme tuzağı", metin: "Kör etmeyi yalnızca ceza saymak eksik olur.", yanlis: "Oedipus gözlerini yalnızca kendini cezalandırmak için oyar.", dogru: "Oedipus, görecek hiçbir tatlı şey kalmadığı için kör eder. Yazar bunu hem acı hem simge olarak kullanır." }
      ]
    },
    {
      baslik: "Bilgi: bilmek kurtarır mı?",
      kisa: "Oedipus bilmek ister; ama bilgi onu kurtarmaz, yıkar.",
      bloklar: [
        { tip: "ornek", baslik: "Bilmeceyi çözen adam kendini çözemedi", durum: "Sfenks’in bilmecesi geleneğe göre şöyledir: “Sabah dört, öğle iki, akşam üç ayakla yürüyen nedir?” (Oyunun metninde bilmece anlatılmaz; yalnızca Sfenks anılır.)",
          adimlar: [
            "Sabah = bebeklik: dört ayak, yani emekler.",
            "Öğle = yetişkinlik: iki ayak.",
            "Akşam = yaşlılık: bastonla üç ayak."
          ],
          sonuc: "Cevap ==insan==. Oedipus insanı çözdü ama kendi kimliğini bilmiyordu: dünya hakkında bilge, kendisi hakkında cahildi." },
        { tip: "tablo", baslik: "Bilgiye karşı dört tavır", head: ["Karakter", "Tavrı", "Sınavda böyle yaz"], rows: [
            ["Oedipus", "Her şeye rağmen öğrenmek ister", "*Oedipus’s thirst for knowledge drives the plot and destroys him.*"],
            ["Tiresias", "Bilir ama söylemek istemez: “Alas, how dreadful to have wisdom where it profits not the wise!” (v. 316–17, Jebb 1887)", "*Tiresias suggests that knowledge can be a burden.*"],
            ["Jocasta", "Bilmemeyi tercih eder ve Oedipus’tan araştırmayı bırakmasını ister", "*Jocasta begs Oedipus to stop because she fears what he will learn.*"],
            ["Çoban", "Korkar ve saklamaya çalışır", "*The herdsman resists speaking because the truth is painful.*"]
          ], vurgu: 1 },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪞", terim: "Self-knowledge", tr: "kendini tanıma", tanim: "Delphoi’de yazılı olduğu söylenen “kendini tanı” öğüdüyle bağlıdır (oyunda geçmez). Oedipus dünyayı çözer ama kendini bilmez.", ornek: "Kim olduğunu öğrenince yıkılır." },
            { ikon: "🌫️", terim: "Ignorance", tr: "bilgisizlik", tanim: "Burada masumiyet değil tehlikedir. Oedipus bilmediği için kendi felaketini kendi eliyle hazırlar.", ornek: "Laius’u tanımadan öldürmek." }
          ] }
      ]
    },
    {
      baslik: "Kirlenme ve arınma",
      kisa: "Cinayet şehri kirletir; katil bulunup uzaklaştırılınca arınma gelir.",
      bloklar: [
        { tip: "adimlar", baslik: "Salgının nedeni", adimlar: [
            { baslik: "Cinayet", metin: "Laius öldürülmüştür; katil bulunamamıştır." },
            { baslik: "*Miasma*", metin: "Yunanlara göre öldürme, özellikle akraba kanı, dinî bir kirlilik yaratır." },
            { baslik: "Salgın", metin: "Kirlilik hastalığa dönüşür: ürünler, hayvanlar ve doğumlar zarar görür." },
            { baslik: "Çare", metin: "Apollo’nun sözü: katili sürgün et ya da kanı kanla öde." },
            { baslik: "İroni", metin: "Oedipus katili aramaya ve lanetlemeye söz verir. Kirliliğin kaynağı kendisidir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "☠️", terim: "Miasma", tr: "kirlilik", tanim: "Kan dökmekten doğan dinî leke. Niyet önemli değildir; suçun işlenmiş olması yeter.", ornek: "Laius’un katili bulunmadıkça Thebai kirli kalır." },
            { ikon: "🐐", terim: "Scapegoat", tr: "günah keçisi", tanim: "Topluluğun kirliliğini üstlenip uzaklaştırılan kişi. Birçok yorumcu Oedipus’u bu açıdan okur.", ornek: "Oedipus sürgünle şehri temizleyecek kişidir." }
          ] },
        { tip: "tuzak", metin: "Oedipus bilmeden öldürdüğü için masum sayılabilir mi? Yunan inancına göre kirlilik niyetten bağımsızdır.", yanlis: "Oedipus bilmeden öldürdüğü için kirlenmiş sayılmaz.", dogru: "Niyet olmasa da kan dökülmesi *miasma* yaratır. Oyun, Oedipus’un iyi niyetine rağmen onu şehrin kirliliğinin kaynağı gösterir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The plague is a physical sign of the city’s moral and religious pollution.*", metin: "Salgının anlamı." },
            { ikon: "✍️", baslik: "*Oedipus is both the healer of Thebes and the source of its sickness.*", metin: "Ana ironi." },
            { ikon: "✍️", baslik: "*Miasma explains why the killer must be exiled.*", metin: "Sürgünün nedeni." }
          ] }
      ]
    },
    {
      baslik: "Motifler: tekrar eden imgeler",
      kisa: "Motif tekrar eden imgedir; tema, o imgelerin işaret ettiği fikirdir.",
      bloklar: [
        { tip: "harita", merkez: "Motifler", dallar: [
            { baslik: "Üç yol (*crossroads*)", alt: "Cinayet yeri; seçim ile kaderin kesiştiği nokta" },
            { baslik: "Ayaklar", alt: "Oedipus adı “şişmiş ayak”; bilmecedeki ayaklar" },
            { baslik: "Çoban ve sürü", alt: "Halk bir sürü, kral çoban; çobanlar gerçeği taşır" },
            { baslik: "Gemi", alt: "Şehir fırtınada sallanan bir gemi gibi anlatılır" },
            { baslik: "İz sürme", alt: "Oedipus bir avcı gibi katilin izini sürer" },
            { baslik: "Hastalık ve şifa", alt: "Şehri iyileştirmeye çalışan, hastalığın kaynağıdır" },
            { baslik: "*Tyche* (şans)", alt: "Oedipus kendini “şansın oğlu” sayar" }
          ] },
        { tip: "tuzak", baslik: "Tema–motif tuzağı", metin: "İkisi birbirine karışır: motif görülen, tema anlaşılan şeydir.", yanlis: "“Gemi imgesi” oyunun temasıdır.", dogru: "Gemi bir motiftir. Onun desteklediği tema, şehrin tehlikede olması ya da insanın kaderine karşı güçsüzlüğüdür." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The motif of sight and blindness reinforces the theme of knowledge.*", metin: "Motifi temaya bağla." },
            { ikon: "✍️", baslik: "*The recurring image of the ship shows Thebes as a city in danger.*", metin: "Motifin etkisi." },
            { ikon: "✍️", baslik: "*A motif is a repeated element; a theme is the idea it supports.*", metin: "Tanım." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Kader ve özgür irade iç içedir: kehanet bildirir, ama kaçış, öfke ve ısrar Oedipus’un seçimidir.",
            "Son konuşmada Oedipus acısını Apollo’ya bağlar ama gözlerine vuran elin kendisine ait olduğunu söyler.",
            "Görme–körlük: Oedipus gören ama bilmeyen, Tiresias kör ama bilen biridir; Oedipus ancak kör olunca “görür”.",
            "Bilgi bir yüktür: Tiresias, Jocasta ve çoban bilmekten kaçınır; Oedipus ısrar eder ve yıkılır.",
            "Sfenks’in bilmecesinin cevabı insandır; Oedipus insanı çözer, kendini çözemez.",
            "*Miasma*: kan kirlilik yaratır, kirlilik salgına dönüşür; katil bulunup sürülünce arınma gelir.",
            "Motifler: üç yol, ayaklar, çoban, gemi, iz sürme, hastalık, şans.",
            "Motif tekrar eden imgedir; tema o imgelerin desteklediği fikirdir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tiresias’ın “Alas, how dreadful to have wisdom where it profits not the wise!” sözü (Jebb 1887) en çok hangi temayı destekler?",
      opts: ["Kader tanrılarındır", "Bilgi bir yük olabilir", "Kirlilik sürgünle temizlenir", "Şehir fırtınadaki bir gemidir"], a: 1,
      why: "Tiresias gerçeği bilir ama söylemek istemez; bilgi ona yarar sağlamaz, acı verir. A ve D başka temalar ya da motiflerdir; bu söz onlarla ilgili değildir." },
    { q: "Aşağıdaki cümlelerden hangisi görme–körlük temasını en iyi özetler?",
      opts: ["Oedipus kör olunca içgörüsünü kaybeder", "Tiresias gerçeği bilmez, çünkü göremez", "Gözler gerçeği her zaman gösterir", "Kör Tiresias gerçeği bilirken gören Oedipus bilmez; Oedipus ancak kör olunca “görür”"], a: 3,
      why: "Oyun, fiziksel görmeyi içgörüyle tersine çevirir. A tam tersini söyler; B ve C ise oyunun kurduğu zıtlığı ters çevirir." },
    { q: "Bir öğrenci “Oedipus Laius’u bilmeden öldürdüğü için salgında sorumlu değildir; salgın tanrıların keyfidir” yazıyor. Oyunun hangi kavramı bu yoruma karşı çıkar?",
      opts: ["*Miasma*", "*Peripeteia*", "*Anagnorisis*", "*Hamartia*"], a: 0,
      why: "Yunan inancına göre kan dökmek niyetten bağımsız kirlilik yaratır; salgın bu kirliliğin sonucudur. D da çekici görünür ama *hamartia* hatadır, salgının dinî nedenini açıklamaz." },
    { q: "Oedipus önce “Apollo… brought these my woes to pass” der, ardından gözlerine vuran elin kendisine ait olduğunu söyler. Bu sahne essay’de en iyi hangi iddia için kanıt olur?",
      opts: ["Kader tek başına her şeyi belirler", "Oedipus kehaneti hiç bilmiyordu", "Acıları tanrıdan gelse de eylemin sorumluluğunu Oedipus üstlenir; kader ve seçim iç içedir", "Tanrılar oyunda hiç rol oynamaz"], a: 2,
      why: "Sahne iki sesi birlikte taşır: Apollo’ya suçlama ve kendi eline sahip çıkma. A tek yönlüdür ve ikinci cümleyi görmezden gelir." },
    { q: "Hangisi bir *motif* örneğidir (tema değil)?",
      opts: ["Bilgi bir yük olabilir", "İnsan kaderinden kaçamaz", "Üç yolun birleştiği kavşağın oyunda tekrar tekrar anılması", "Sophocles’in seyirciyi arındırmak istemesi"], a: 2,
      why: "Motif, metinde tekrar eden öğedir: üç yol kavşağı Jocasta’nın ve Oedipus’un anlatılarında birkaç kez geçer. A ve B temadır, yani fikirdir." }
  ]
};
