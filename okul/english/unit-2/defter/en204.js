/* Kitora not defteri · en204 · 2.4 Temalar ve Motifler
   Kaynak: öğretmen (Dr Byrd) Oedipus belgeleri (soru vurguları, çeviri karşılaştırma belgesi; satır no. Fagles baskısı, Fagles alıntısı yok) + oyunun standart tema analizi. Alıntılar: F. Storr çevirisi (1912) ve R. C. Jebb çevirisi (1887, yalnız doğrulanmış satır). Storr satırları Gutenberg metninden kontrol edildi; satır numarası verilmedi (Yunanca numaralama Fagles'tan farklıdır). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en204",
  amac: "Bu konu oyunun fikirlerini anlatıyor: kader ile özgür irade, şans ve tanrısal güç sözcüklerinin çeviriye göre değişen anlamı, görme ile körlük, bilgi, kirlenme ve arınma, hubris ve koronun dersi. Her temayı bir sahneyle kanıtlamayı ve *theme* ile *motif* farkını öğreneceksin.",
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
        { tip: "tablo", baslik: "Üç okuma ve kanıtları (Storr 1912 ve Jebb 1887)", head: ["Okuma", "Kanıt", "Sınavda böyle yaz"], rows: [
            ["*Fate*", "Exodos’ta Oedipus Apollo’yu anar: “Apollo, friend, Apollo, he it was / That brought these ills to pass” (Storr 1912)", "*Oedipus blames Apollo for his suffering, which suggests that fate is at work.*"],
            ["*Free will*", "Aynı konuşmada kör eden eli üstlenir: “the right hand that dealt the blow / Was mine, none other” (Storr 1912)", "*Yet he admits that his own hand struck the blow, taking responsibility.*"],
            ["*Chance*", "Jocasta (Third Episode): “the decrees of Fortune are supreme” (Jebb 1887)", "*Jocasta trusts chance and dismisses prophecy, which the play proves wrong.*"]
          ] },
        { tip: "tuzak", metin: "Kehanet olayı neden olmaz; önceden bildirir. İyi bir essay ya da konuşma iki tarafı da tartar.", yanlis: "Oedipus hiçbir şey seçmedi; tanrılar onu yönetti.", dogru: "Kehanet olayı önceden bildirir ama kavşakta öfkelenen, kaçan ve araştıran Oedipus’tur. Kader ve seçim iç içedir." }
      ]
    },
    {
      baslik: "Şans, pay, tanrısal güç: çeviri sözcüğü anlamı değiştirir",
      kisa: "*Tyche*, *Moira* ve *Daimon* farklı şeylerdir; çevirmen hangisini seçerse anlam kayar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Tyche", tr: "talih, şans", tanim: "Rastlantı ve talih; iyi ya da kötü gelebilir. Kontrol edilemeyen ama planlı olmayan olay.", ornek: "Oedipus kendini Şans’ın (*Tyche*) çocuğu sayar ve kökenini araştırmaktan çekinmez." },
            { ikon: "🧵", terim: "Moira", tr: "pay, yazgı", tanim: "Her insana ya da tanrıya düşen pay; değişmez düzen duygusu. *Fate* ve *destiny* çevirilerine en yakın sözcüktür.", ornek: "Laius’un oğlu tarafından öldürülmesi kaçınılmaz bir pay gibi sunulur." },
            { ikon: "✨", terim: "Daimon", tr: "ilahi güç, talih belirleyen ruh", tanim: "İnsanın hayatını yönlendiren tanrısal ya da yarı tanrısal güç. İngilizceye *god*, *spirit* ya da *fortune* diye çevrilebilir.", ornek: "Çevirmen *daimon* için “bir tanrı” der mi, “talih” mi, anlam değişir." }
          ] },
        { tip: "tablo", baslik: "Aynı Yunanca satır, farklı çeviri (öğretmenin karşılaştırma belgesi: 245–247 ve 1068–1072, Fagles no.)", head: ["Yer", "Çeviri", "Ne değişir?"], rows: [
            ["245–247 (Oedipus, dualara cevap)", "Jebb 1887: “You pray. And in answer to your prayer...”", "Oedipus dua ile cevabı yan yana koyar; şartlı bir söz verir."],
            ["245–247", "Storr 1912: “Ye pray; ’tis well, but would ye hear my words”", "Ton daha nazik ve davet edicidir: “iyi, ama sözlerimi dinleyin”."],
            ["1068–1072 (Jocasta, şans)", "Jebb 1887: “...the decrees of Fortune are supreme”", "Fortune yöneticidir; şans neredeyse bir tanrısal otorite gibi."],
            ["1068–1072", "Storr 1912: “Best live a careless life from hand to mouth.”", "Odak insan tavrına kayar; şans hayatı rastgele akan bir şey olarak sunulur."]
          ], vurgu: 2, not: "Öğretmenin belgesi, bu karşılaştırmada Yeats’in 1068–72’yi atladığını da gösterir. Dersin noktası: çeviri sözcüğü anlamı ve tonu değiştirir; bu yüzden hangi çeviriyi (ve satır no.’yu) kullandığını yaz. Bu defterde yalnız Jebb ve Storr’dan kısa alıntı var; Fagles ve diğerlerinden alıntı yok." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The translator’s word choice changes the meaning: “decrees of Fortune” sounds like an authority, while “sport of chance” sounds random.*", metin: "Çeviri farkı." },
            { ikon: "✍️", baslik: "*Tyche means luck, while Moira is a person’s allotted share.*", metin: "Kavram ayrımı (ek bilgi: tanımlar genel Yunan kültürü bilgisidir)." },
            { ikon: "✍️", baslik: "*Calling himself a child of Tyche, Oedipus trusts luck instead of the oracle.*", metin: "Oedipus’un şans görüşü." }
          ] }
      ]
    },
    {
      baslik: "Görme ve körlük: kör etmenin anlamı",
      kisa: "Gözleri gören Oedipus gerçeği görmez; kör Teiresias görür; kör etme bir simgedir.",
      bloklar: [
        { tip: "grafik", baslik: "Gözler ve içgörü: yer değiştiren çizgiler", xlabel: "Sahne", ylabel: "Düzey", xmax: 7, ymax: 10,
          xticks: [{ v: 1, label: "Prolog" }, { v: 2, label: "Ep.1" }, { v: 3, label: "Ep.2" }, { v: 4, label: "Ep.3" }, { v: 5, label: "Ep.4" }, { v: 6.5, label: "Exodos" }],
          yticks: [{ v: 1, label: "düşük" }, { v: 9, label: "yüksek" }],
          ogeler: [
            { id: "goz", tip: "egri", renk: 1, etiket: "Oedipus’un gözleri", noktalar: [[1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [5.7, 9], [6.5, 9]], gizli: true },
            { id: "ic", tip: "egri", renk: 3, etiket: "Oedipus’un içgörüsü", noktalar: [[1, 1], [2, 1.5], [3, 3], [4, 4], [5, 4], [5.7, 4], [6.5, 4]], gizli: true },
            { id: "tir", tip: "cizgi", renk: 2, kesik: true, etiket: "Teiresias’ın içgörüsü", from: [1, 9.8], to: [6.5, 9.8], gizli: true }
          ],
          durumlar: [
            { metin: "Oedipus’un fiziksel görmesi baştan sona yüksektir: gözleri sağlamdır.", goster: ["goz"] },
            { metin: "Ama içgörüsü düşüktür: kendisi hakkındaki gerçeği görmez.", goster: ["ic"] },
            { metin: "Kör Teiresias’ın içgörüsü baştan tepededir: ==kör ama gören==.", goster: ["tir"] },
            { metin: "Gerçeği anlayınca Oedipus’un içgörüsü zirveye çıkar; kendini kör edince gözleri söner. Çizgiler yer değiştirir: ==gözünü kaybettiğinde görür==.", set: { goz: { noktalar: [[1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [5.7, 0.5], [6.5, 0.5]] }, ic: { noktalar: [[1, 1], [2, 1.5], [3, 3], [4, 4], [5, 9], [5.7, 9], [6.5, 9]] } } }
          ] },
        { tip: "tablo", baslik: "Işık, karanlık ve görme: sahneler (Storr 1912)", head: ["Sahne", "Ne olur?", "Sınavda böyle yaz"], rows: [
            ["First Episode", "Oedipus Teiresias’ın kör olduğunu yüzüne vurur. Teiresias karşılık verir: “thou hast eyes, / Yet see’st not in what misery thou art fallen” (Storr 1912). Kehanetinde Oedipus’un gören gözlerinin karanlığa gömüleceğini ve zengin gelen birinin yoksul gideceğini söyler (Fagles 474–489).", "*Teiresias is physically blind but sees the truth; Oedipus has eyes but cannot see.*"],
            ["Exodos", "Oedipus kör etmesini açıklar: gözleri olsaydı Hades’te babasına ve annesine nasıl bakacağını bilmezdi; çocuklarına, şehre, tapınaklara bakmak da ona acı verirdi (Storr 1912’deki konuşmanın özeti). Kör etme hem acı hem simgedir.", "*Oedipus blinds himself because he cannot bear to see what he has done.*"],
            ["Exodos", "Kör Oedipus artık Teiresias’a benzer: görünüşe değil, gerçeğe sahip.", "*Only after he loses his sight does Oedipus truly ‘see’ who he is.*"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔭", terim: "Insight", tr: "içgörü", tanim: "Gözle değil akılla ve gerçeği kavrayarak görmek. Oyunda “gerçek görmek” budur.", ornek: "Teiresias hiçbir şey görmez ama bütün gerçeği bilir." },
            { ikon: "🔮", terim: "Foreshadowing", tr: "önceden haber verme", tanim: "Sonraki bir olaya erken işaret. Teiresias’ın sözleri Oedipus’un kör olacağını önceden gösterir.", ornek: "Teiresias, Oedipus’un gözlerinin karanlığa gömüleceğini söyler." }
          ] },
        { tip: "tuzak", baslik: "Kör etme tuzağı", metin: "Kör etmeyi yalnızca ceza saymak eksik olur.", yanlis: "Oedipus gözlerini yalnızca kendini cezalandırmak için oyar.", dogru: "Oedipus, görecek hiçbir tatlı şey kalmadığı için ve ölülerin yüzüne bakamayacağı için kör eder. Yazar bunu hem acı hem simge (gözle görmek ile bilgiyle görmek) olarak kullanır." }
      ]
    },
    {
      baslik: "Bilgi: bilmek kurtarır mı?",
      kisa: "Oedipus bilmek ister; ama bilgi onu kurtarmaz, yıkar.",
      bloklar: [
        { tip: "ornek", baslik: "Bilmeceyi çözen adam kendini çözemedi (ek bilgi)", durum: "Ek bilgi (öğretmen belgesinde yok): Sfenks’in bilmecesi geleneğe göre şöyledir: “Sabah dört, öğle iki, akşam üç ayakla yürüyen nedir?” Oyunun metninde bilmece anlatılmaz; yalnızca Sfenks anılır.",
          adimlar: [
            "Sabah = bebeklik: dört ayak, yani emekler.",
            "Öğle = yetişkinlik: iki ayak.",
            "Akşam = yaşlılık: bastonla üç ayak."
          ],
          sonuc: "Cevap ==insan==. Oedipus insanı çözdü ama kendi kimliğini bilmiyordu: dünya hakkında bilge, kendisi hakkında cahildi." },
        { tip: "tablo", baslik: "Bilgiye karşı dört tavır", head: ["Karakter", "Tavrı", "Sınavda böyle yaz"], rows: [
            ["Oedipus", "Her şeye rağmen öğrenmek ister", "*Oedipus’s thirst for knowledge drives the plot and destroys him.*"],
            ["Teiresias", "Bilir ama söylemek istemez: “Alas, alas, what misery to be wise / When wisdom profits nothing!” (Storr 1912, First Episode)", "*Teiresias suggests that knowledge can be a burden.*"],
            ["Jocasta", "Bilmemeyi tercih eder ve Oedipus’tan araştırmayı bırakmasını ister", "*Jocasta begs Oedipus to stop because she fears what he will learn.*"],
            ["Çoban", "Korkar ve saklamaya çalışır", "*The herdsman resists speaking because the truth is painful.*"]
          ], vurgu: 1 },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪞", terim: "Self-knowledge (ek bilgi)", tr: "kendini tanıma", tanim: "Delphoi’de yazılı olduğu söylenen “kendini tanı” öğüdüyle bağlıdır (oyunda geçmez). Oedipus dünyayı çözer ama kendini bilmez.", ornek: "Kim olduğunu öğrenince yıkılır." },
            { ikon: "🌫️", terim: "Ignorance", tr: "bilgisizlik", tanim: "Burada masumiyet değil tehlikedir. Oedipus bilmediği için kendi felaketini kendi eliyle hazırlar.", ornek: "Laius’u tanımadan öldürmek." }
          ] }
      ]
    },
    {
      baslik: "Kirlenme ve arınma: Apollo’nun buyruğu",
      kisa: "Cinayet şehri kirletir; katil bulunup uzaklaştırılınca arınma gelir.",
      bloklar: [
        { tip: "adimlar", baslik: "Salgının nedeni", adimlar: [
            { baslik: "Cinayet", metin: "Laius öldürülmüştür; katil bulunamamıştır." },
            { baslik: "*Miasma* / *pollution*", metin: "Yunanlara göre öldürme, özellikle akraba kanı, dinî bir kirlilik yaratır. Creon Apollo’nun sözünü şöyle aktarır (Storr 1912): “A fell pollution that infests the land”." },
            { baslik: "Salgın", metin: "Kirlilik hastalığa dönüşür: ürünler, hayvanlar ve doğumlar zarar görür." },
            { baslik: "Çare", metin: "Apollo’nun buyruğu: katili sürgün et ya da kanı kanla öde (Fagles 113–114)." },
            { baslik: "İroni", metin: "Oedipus katili aramaya ve lanetlemeye söz verir. Kirliliğin kaynağı kendisidir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "☠️", terim: "Miasma", tr: "kirlilik", tanim: "Kan dökmekten doğan dinî leke. Niyet önemli değildir; suçun işlenmiş olması yeter.", ornek: "Laius’un katili bulunmadıkça Thebai kirli kalır." },
            { ikon: "🐐", terim: "Scapegoat (ek bilgi)", tr: "günah keçisi", tanim: "Topluluğun kirliliğini üstlenip uzaklaştırılan kişi. Birçok yorumcu Oedipus’u bu açıdan okur.", ornek: "Oedipus sürgünle şehri temizleyecek kişidir." }
          ] },
        { tip: "tuzak", metin: "Oedipus bilmeden öldürdüğü için masum sayılabilir mi? Yunan inancına göre kirlilik niyetten bağımsızdır.", yanlis: "Oedipus bilmeden öldürdüğü için kirlenmiş sayılmaz.", dogru: "Niyet olmasa da kan dökülmesi *miasma* yaratır. Oyun, Oedipus’un iyi niyetine rağmen onu şehrin kirliliğinin kaynağı gösterir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The plague is a physical sign of the city’s moral and religious pollution.*", metin: "Salgının anlamı." },
            { ikon: "✍️", baslik: "*Oedipus is both the healer of Thebes and the source of its sickness.*", metin: "Ana ironi." },
            { ikon: "✍️", baslik: "*Apollo’s command explains why the killer must be exiled.*", metin: "Sürgünün nedeni." }
          ] }
      ]
    },
    {
      baslik: "Hubris, sorumluluk ve koronun dersi",
      kisa: "Koro kibrin tiranı doğurduğunu söyler; son dersi de insan mutluluğunun kırılganlığıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⚖️", baslik: "Oedipus kendi kaderinden sorumlu", maddeler: ["Kavşakta öfkeyle öldürdü", "Teiresias, Creon ve Jocasta’yı dinlemedi", "Kendini “her şeyi bilen” saydı (*hubris* okuması)"] },
          sag: { ikon: "🌩️", baslik: "Sorumluluk sınırlı", maddeler: ["Kehanet doğumundan önce bildirilmişti", "Kim olduğunu bilmeden hareket etti", "Kaçmaya çalışırken kehaneti gerçekleştirdi"] } },
        { tip: "liste", maddeler: [
            { ikon: "🦅", baslik: "İkinci koro şarkısı (Fagles 954–997)", metin: "Koro kibrin tiranı doğurduğunu söyler (Storr 1912: “Of insolence is bred the tyrant”). Öğretmenin sorusu: bu Oedipus’un *hubris*’i mi, yoksa genel bir uyarı mı? Sınavda: *The chorus warns that pride breeds tyranny, which may allude to Oedipus.*" },
            { ikon: "⚖️", baslik: "Tartışma sorusu", metin: "Oedipus kendi kaderinden sorumlu mu? İki tarafı da kanıtla tart. Sınavda: *Oedipus is partly responsible because he chooses to ___, yet he acts without knowing ___.*" },
            { ikon: "🎼", baslik: "Koronun genel dersi", metin: "Koro son sözlerinde Oedipus’u örnek gösterir (Storr 1912: ölmeden “count one mortal blest” deme). Ders: insan mutluluğu kırılgandır ve talih bir günde döner. Sınavda: *The chorus’s final lesson is that no one can be called happy before death.*" }
          ] }
      ]
    },
    {
      baslik: "Motifler: tekrar eden imgeler (ek bilgi)",
      kisa: "Motif tekrar eden imgedir; tema, o imgelerin işaret ettiği fikirdir.",
      bloklar: [
        { tip: "harita", merkez: "Motifler (ek bilgi)", dallar: [
            { baslik: "Üç yol (*crossroads*)", alt: "Cinayet yeri; seçim ile kaderin kesiştiği nokta" },
            { baslik: "Ayaklar", alt: "Oedipus adı “şişmiş ayak”; bilmecedeki ayaklar" },
            { baslik: "Çoban ve sürü", alt: "Halk bir sürü, kral çoban; çobanlar gerçeği taşır" },
            { baslik: "Gemi", alt: "Şehir fırtınada sallanan bir gemi gibi anlatılır" },
            { baslik: "İz sürme", alt: "Oedipus bir avcı gibi katilin izini sürer" },
            { baslik: "Hastalık ve şifa", alt: "Şehri iyileştirmeye çalışan, hastalığın kaynağıdır" },
            { baslik: "*Tyche* (şans)", alt: "Oedipus kendini Şans’ın çocuğu sayar" }
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
            "Son konuşmada Oedipus acısını Apollo’ya bağlar ama darbeyi vuran elin kendisine ait olduğunu söyler.",
            "*Tyche* talih, *Moira* pay, *Daimon* ilahi güç: çeviri sözcüğü anlamı ve tonu değiştirir (Jebb ve Storr karşılaştırması).",
            "Görme–körlük: Oedipus gören ama bilmeyen, Teiresias kör ama bilen biridir; kör etme hem acı hem simgedir.",
            "Bilgi bir yüktür: Teiresias, Jocasta ve çoban bilmekten kaçınır; Oedipus ısrar eder ve yıkılır.",
            "*Miasma*: Apollo’nun buyruğu katilin sürülmesidir; kirlilik salgına dönüşür, arınma sürgünle gelir.",
            "*Hubris* uyarısı ikinci koro şarkısındadır; koronun son dersi: ölmeden kimseye mutlu deme.",
            "Motif tekrar eden imgedir; tema o imgelerin desteklediği fikirdir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "In his final speech, Oedipus says that Apollo brought his woes about, but that his own hand struck the blow. For which claim is this the best evidence?",
      opts: ["Fate alone controls everything in the play", "Oedipus never knew about the prophecy", "Free will has no place in tragedy", "Fate and personal responsibility are intertwined"], a: 3,
      why: "Sahne iki sesi birlikte taşır: Apollo’ya suçlama ve kendi eline sahip çıkma. A tek yönlüdür ve ikinci yarıyı görmezden gelir; B ve C ile ilgili hiçbir kanıt yoktur." },
    { q: "Oedipus calls himself a child of Tyche. Which idea does this phrase best suggest?",
      opts: ["That he trusts luck and chance rather than the oracle", "That he accepts a fixed share of fate", "That he is a god's servant", "That he is a priest of Apollo"], a: 0,
      why: "*Tyche* talih, şans demektir; *Moira* ise insana düşen paydır. B, *Moira* ile karıştırılmıştır. C ve D metinle ilgisizdir." },
    { q: "Jebb translates Jocasta's line as “the decrees of Fortune are supreme,” while Storr writes that a mortal is “the sport of chance.” What does this difference show?",
      opts: ["Translators never change the meaning of a text", "Only Jebb's version is correct", "The two versions are identical in tone", "A translator's word choice changes the meaning and tone of the line"], a: 3,
      why: "Öğretmenin çeviri karşılaştırma belgesinin noktası budur: sözcük seçimi anlamı ve tonu değiştirir. “Decrees … supreme” talihe bir otorite verir; “sport of chance” ise rastgeleliği vurgular. A ve C doğrudan çelişir." },
    { q: "Which sentence best captures the meaning of Oedipus's self-blinding?",
      opts: ["It is only a punishment imposed by Creon", "It is both an act of unbearable pain and a symbol: only after losing his sight does he truly ‘see’", "It proves that Oedipus did not want to learn the truth", "It happens before the shepherd speaks"], a: 1,
      why: "Oedipus görecek tatlı bir şey kalmadığı için kör eder; ayrıca simge olarak Teiresias’ın içgörüsüne yaklaşır. A yanlış: kararı kendisi verir. D yanlış: kör etme çoban konuştuktan sonradır." },
    { q: "According to the Greek idea of miasma, why is Oedipus considered polluted even though he killed Laius unknowingly?",
      opts: ["Because he intended to kill his father", "Because pollution depends on the killer's bad character", "Because shedding kindred blood pollutes regardless of intention", "Because the chorus declared him guilty"], a: 2,
      why: "Yunan inancına göre kan dökmek niyetten bağımsız kirlilik yaratır; salgın bu kirliliğin sonucudur. A ve B niyet/karakter üzerinden gider ve oyunun mantığıyla uyuşmaz; D’de koro böyle bir hüküm vermez." }
  ]
};
