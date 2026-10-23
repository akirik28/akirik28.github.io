/* Kitpath not defteri · en104 · 1.4 The Vengeance of Felix (Medeiros e Albuquerque)
   Kaynak: defter-araclari/kaynak/en10-yaz-okumasi-oykuler.txt (Isaac Goldberg çevirisi, Brazilian Tales, 1921; kamuya açık). Öğretmen belgesinde bu öykü için ayrı çalışma kâğıdı yok; yorumlar ek bilgi niteliğinde, Kasım sınav biçimi (özet A1) ve pasaj analizi yöntemiyle (özet D) uyumlu. */
window.DEFTER = {
  slug: "en104",
  amac: "Bu defter *The Vengeance of Felix* öyküsünü Kasım sınavındaki pasaj analizi gözüyle çözüyor: olay, karakterler, bağlam, temalar, araçlar. Yorumlar ek bilgidir (öğretmen belgesinde bu öykü için çalışma kâğıdı yok); sondaki iskelet kendi paragrafın içindir.",
  bolumler: [
    {
      baslik: "Olay: aylarca beklenen bir tuzak",
      kisa: "Felix, hareketsiz bedenine rağmen sabırlı bir planla düşmanını yok eder.",
      bloklar: [
        { tip: "adimlar", baslik: "Olay örgüsü", adimlar: [
            { baslik: "1 · Felix kimdir?", metin: "Rio'da taş ocağı işçisi, iri yarı ve inatçı; lakabı *Hardhead*. Öfkesi hemen patlamaz, intikamını sabırla bekler." },
            { baslik: "2 · Hastalık", metin: "Karısı ölmüş, çocukları başıboş büyümüştür. Felix kronik romatizmayla eski bir koltuğa bağlanır; kızı çamaşırcılıkla geçindirir." },
            { baslik: "3 · Düşman", metin: "Oğlu bir adamı bıçaklayıp tutuklanır. Onu tutuklayan, komşusu polis Bernardo, Felix'le “vals” diye alay eder." },
            { baslik: "4 · Plan", metin: "Felix aylarca intikamı düşünür, kızının kötü muamelesine katlanır; fırsat bekler." },
            { baslik: "5 · Fırsat", metin: "Kızı Bernardo'nun arkadaşı Jane ile kavga edip gözaltına alınır; Felix, kızının Bernardo'nun metresi olduğunu öğrenir." },
            { baslik: "6 · Tuzak", metin: "Felix Bernardo'ya bıçak getirtir, kapıyı kilitletir, cebine saat koydurur, bağırarak kendini bıçaklar. Kalabalık Bernardo'yu yakalar; ömür boyu ağır işe mahkûm olur." }
          ] },
        { tip: "grafik", baslik: "Güç kimde? Görünen ve gerçek", xlabel: "Öykünün akışı", ylabel: "Güç", xmax: 10, ymax: 10,
          ogeler: [
            { id: "gor", tip: "egri", renk: 0, kesik: true, etiket: "Görünen güç", noktalar: [[0.5, 8], [2, 6.5], [4, 3], [6, 1.8], [9, 1]], gizli: true },
            { id: "ger", tip: "egri", renk: 1, etiket: "Gerçek kontrol", noktalar: [[0.5, 2], [2, 2.5], [4, 4.5], [6, 7], [9, 9.5]], gizli: true },
            { id: "yaz", tip: "yazi", x: 3.7, y: 6.6, metin: "güç tersine döner", gizli: true },
            { id: "tz", tip: "nokta", x: 9, y: 9.5, etiket: "tuzak", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "İlk anda Felix ==güçlü görünür==; hastalıkla bu güç kaybolur.", goster: ["gor"] },
            { metin: "Ama aynı süreçte planı ve sabrı büyür: ==gerçek kontrol Felix'tedir.==", goster: ["ger"] },
            { metin: "Bir noktada iki çizgi yer değiştirir. Bernardo ise Felix'i hâlâ zararsız sanır.", goster: ["yaz"] },
            { metin: "==Climax:== tuzak kurulur; kimse Felix'in kontrolünü fark etmez.", goster: ["tz"] }
          ] }
      ]
    },
    {
      baslik: "Karakterler",
      kisa: "Felix zayıf görünür ama kurnazdır; Bernardo güçlü görünür ama tuzağa düşer.",
      bloklar: [
        { tip: "tablo", head: ["Karakter", "Kim?", "Nasıl tanıyoruz?", "Temsil ettiği"],
          rows: [
            ["Felix", "Yaşlı taş ocağı işçisi", "Lakap *Hardhead*; “exceedingly patient in his vindictiveness”", "Sabır, kin ve çaresizlikten doğan zekâ"],
            ["Bernardo", "Komşu, polis", "Alaycı sözler, gösterişli görünüm, kirli geçmiş", "Güç sahibi ama kendinden emin ve kibirli"],
            ["Felix'in kızı", "Çamaşırcı", "Babaya sert sözler, belirsiz ilişkiler", "Yoksulluğun aşındırdığı aile"],
            ["Felix'in oğlu", "Suçlu genç", "Cinayet ve tutuklanma", "Aile çöküşü"],
            ["Jane", "Bernardo'nun “arkadaşı”", "Felix'in kızıyla kavga eder, ikisi gözaltına alınır", "Bilmeden Felix'e fırsat verir"],
            ["Kalabalık", "Mahalle", "“Kill him!” diye bağırır", "Önyargılı toplum"]
          ], vurgu: 0 },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔥", terim: "Vindictive", tr: "intikamcı", tanim: "Kin güden ve karşılık vermek isteyen.", ornek: "Felix aylarca kin besler." },
            { ikon: "🪤", terim: "Ruse", tr: "hile, kurnazlık", tanim: "Birini kandırmak için kurulan düzen.", ornek: "Kapı, bıçak ve saat bir hilenin parçalarıdır." },
            { ikon: "⏳", terim: "Propitious", tr: "elverişli", tanim: "Bir işin gerçekleşmesi için uygun, şanslı.", ornek: "Felix “propitious opportunity” bekler." },
            { ikon: "🛡️", terim: "Impunity", tr: "cezasızlık", tanim: "Yaptığının karşılığını görmemek.", ornek: "Felix, Bernardo'nun “insolent impunity” ile yaşadığını düşünür." }
          ] }
      ]
    },
    {
      baslik: "Kültürel bağlam (ek bilgi)",
      kisa: "Yoksulluk, yolsuz polis ve önyargı, adaleti tersine çevirebilir.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "⛏️", baslik: "Yoksul emekçi", metin: "Taş ocağı işçisi hastalanınca gelir kaybolur; hastaneye gönderilme korkusu yoksulların çaresizliğini gösterir." },
            { ikon: "👮", baslik: "Polis ve himaye", metin: "Bernardo, siyasi bir lidere hizmet ederek hapisten kurtulup polise girmiş bir adam olarak anlatılır; dönemin iltimas düzeni." },
            { ikon: "⚖️", baslik: "Adalet ve kalabalık", metin: "Mahalle sahneyi görünce Bernardo'yu suçlar; mahkeme de “caught red handed” mantığıyla ve saatle karar verir." },
            { ikon: "🧩", baslik: "Irk ve sınıf dili", metin: "Anlatıcı Bernardo için dönemin ayrımcı sözcüklerini (*mulatto, cabra*) kullanır. Sınavda bunu alıntılarsan anlatıcının önyargısı olarak analiz et, kendi görüşünmüş gibi yazma." }
          ] },
        { tip: "not", metin: "Ek bilgi: yazar José de Medeiros e Albuquerque (1867–1934), Brezilya Edebiyat Akademisi üyesidir. Öykünün İngilizcesi Isaac Goldberg'in 1921 tarihli *Brazilian Tales* çevirisidir. Metin kesin tarih vermez; olaylar 19. yüzyıl sonu Rio'sunun gerçekçi bir gözlemini andırır." }
      ]
    },
    {
      baslik: "Temalar",
      kisa: "Tema: intikamın saplantıya dönmesi, kurnazlığın güce üstünlüğü ve adaletin önyargıya yenilmesi.",
      bloklar: [
        { tip: "harita", merkez: "*The Vengeance of Felix*", dallar: [
            { baslik: "İntikam", alt: "*Revenge can consume a person completely.*" },
            { baslik: "Kurnazlık", alt: "*Patience and cunning can defeat power.*" },
            { baslik: "Adaletsizlik", alt: "*Prejudice and appearances can corrupt justice.*" },
            { baslik: "Çaresizlik", alt: "*Poverty and illness can twist a person's morality.*" }
          ] },
        { tip: "tablo", baslik: "Tema + kanıt", head: ["Tema", "Kısa kanıt", "Amaç cümlesi"],
          rows: [
            ["İntikam", "“From that moment one preoccupation alone filled Felix's hours—vengeance!”", "*to show how hatred takes over a life*"],
            ["Kurnazlık", "Bıçak, kilit ve saatle kurulan tuzak (parafraz)", "*to challenge the idea that the weak are harmless*"],
            ["Adaletsizlik", "“Nobody would believe his story.”", "*to criticize a justice system that trusts appearances*"]
          ] }
      ]
    },
    {
      baslik: "Araçlar: ne, nerede, etkisi?",
      kisa: "İroni ve ani bitiş, “zafer”in ağır bir bedelle geldiğini sezdirir.",
      bloklar: [
        { tip: "tablo", head: ["Araç", "Nerede?", "Etkisi"],
          rows: [
            ["*Characterization / diction*", "“stupid as a post” dediği Felix'in aylarca plan yapması", "Anlatıcının önyargısı ile gerçek arasındaki fark"],
            ["*Imagery* (hayvan imgeleri)", "“worse than a dog”, “savage beasts”", "Yoksulluğun insanı hayvanlaştırması"],
            ["*Foreshadowing*", "Sabırlı kin, “propitious opportunity”, “At last it came”", "Büyüyen gerilim"],
            ["*Situational irony*", "Oğlunu tutuklayan polis, kendisi ömür boyu ağır işe mahkûm olur", "Adaletin tersine dönmesi"],
            ["*Dramatic irony*", "Bernardo, Felix'in zarar veremeyeceğine emindir; okur tuzağı sezer", "Gerilim"],
            ["*Symbolism / props*", "Koltuk, bıçak, nikel saat", "Çaresizlik ve sahte kanıt"],
            ["*Time manipulation / end orientation*", "Aylar süren bekleyiş, yavaşlatılan tuzak sahnesi, kısa bitiş; “The old man had conquered.”", "Giriş (“perfectly secure”) ile bitiş birbirine bağlanır; zafer soğuk kalır"]
          ], vurgu: 3 },
        { tip: "tuzak", metin: "Son cümlede “conquered” bir zafer ilan eder. Bunu yazarın onayı sanma: Felix kendini bıçaklamıştır ve bu olayda Bernardo, geçmişi kirli olsa da, işlemediği bir suçtan ömür boyu ağır işe mahkûm olur.", yanlis: "Yazar Felix'in intikamını haklı bulur.", dogru: "Zafer ağır bir bedelle gelir; son cümle ironik okunabilir ve kazanan ile kaybeden belirsiz kalır." }
      ]
    },
    {
      baslik: "Sınavda çıkabilecek pasajlar",
      kisa: "Pasajı tanı: hangi bölüm, hangi araç ve hangi anlam fikri?",
      bloklar: [
        { tip: "tablo", head: ["Pasaj", "Nerede?", "Odak", "Olası anlam"],
          rows: [
            ["Giriş", "İlk paragraf (Felix tanıtımı)", "*Direct characterization, simile, end orientation*", "Sabırlı kin tehlikelidir."],
            ["Hastalık", "Koltuk ve kızın muamelesi", "*Imagery, symbol*", "Çaresizlik insanı tuzağa iter."],
            ["Haber ve alay", "Bernardo'nun “waltz” sözü", "Diyalog, *colloquial idiom*, *verbal irony*", "Alay, intikamın tohumudur."],
            ["Plan", "“From that moment…”", "*Foreshadowing*, saplantı, *repetition*", "İntikam hayatı tüketir."],
            ["Tuzak", "Bıçak, kilit, saat", "*Dramatic irony*, suspense", "Zekâ ile kurulan sahte kanıt."],
            ["Bitiş", "Mahkeme ve son cümle", "*Irony*, kısa cümle", "Adalet görünüşe yenilir."]
          ] },
        { tip: "tablo", baslik: "Hatırlanacak kısa alıntılar (Goldberg çevirisi)", head: ["Alıntı", "Ne gösterir?"],
          rows: [
            ["“stupid as a post”", "Anlatıcının doğrudan, küçümseyen yargısı"],
            ["“exceedingly patient in his vindictiveness”", "Felix'in asıl gücü"],
            ["“She treated him worse than a dog”", "Aile içi acımasızlık"],
            ["“the helpless old man could do him no harm”", "Bernardo'nun yanlış kanaati"],
            ["“Nobody would believe his story.”", "Adaletsizlik"],
            ["“The old man had conquered.”", "İronik zafer"]
          ] },
        { tip: "not", metin: "Kasım sınavındaki pasaj, Cultural Perspectives ünitesindeki bir kısa öykü ya da denemeden gelir; bu öykünün çıkacağı garanti değildir. Ek bilgi: sınıfta ayrıca Amy Tan'ın *Two Kinds* öyküsü, Orwell'in *A Hanging* denemesi ve Achebe'nin *Things Fall Apart* kitabının ilk bölümleri de işlendi; yöntemi (QPC) hepsinde aynı uygula." }
      ]
    },
    {
      baslik: "Örnek analiz paragrafının iskeleti",
      kisa: "İskeleti kullan, kanıtı pasajdan kendin seç; paragrafı kendin yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Cümle başlangıçları (boşluklar sende; Woods'un sırasıyla)", adimlar: [
            { baslik: "Eser + bağlam", metin: "*This passage from “The Vengeance of Felix” by Medeiros e Albuquerque comes at the point where Felix, [durum], [olay] in Rio de Janeiro.*" },
            { baslik: "Konu cümlesi (konu + görüş)", metin: "*In this passage, Medeiros e Albuquerque shows that [anlam] in order to [amaç].* Araçları burada sıralama." },
            { baslik: "Analiz 1 (QPC)", metin: "*The narrator calls Felix “[alıntı]”, yet [parafraz: eylemi]. This contrast suggests…*" },
            { baslik: "Analiz 2 (QPC)", metin: "*The scene is ironic because Bernardo believes [__], but Felix [__]. The detail of [bıçak/saat/kapı] shows…*" },
            { baslik: "Analiz 3 (QPC)", metin: "*The final line, “[alıntı],” leaves readers uneasy because…*" },
            { baslik: "Kapanış (isteğe bağlı)", metin: "*Ultimately, the story warns that… / Through Felix's revenge, the author criticizes…*" }
          ] },
        { tip: "tuzak", baslik: "Ezber paragraf tuzağı", metin: "Sınavdaki pasaj bu öyküden olsa bile farklı bir bölüm olabilir. Ezberlenmiş bir paragraf pasaja uymazsa kanıt puanı gider.", yanlis: "Bir paragraf ezberler, hepsini oraya yapıştırırım.", dogru: "Cümle kalıbını bil, kanıtı ve açıklamayı o gün pasajdan seç." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Felix hareketsiz ama sabırlıdır; oğlunu tutuklayan Bernardo'dan intikam almak için kendini bıçaklar ve suçu ona yıkar.",
            "Bernardo'nun cebine saat, eline bıçak konur; kalabalık onu suçlu sanır ve ömür boyu ağır işe mahkûm olur.",
            "“The old man had conquered.” zaferi ilan eder; bedel ağırdır, ironik okunabilir.",
            "Bağlam: yoksulluk, iltimasla polis olmuş biri, önyargılı kalabalık.",
            "Temalar: intikam, kurnazlık, adaletsizlik, çaresizlik.",
            "Araçlar: *direct characterization, imagery, foreshadowing, situational/dramatic/verbal irony, symbolism, time manipulation / end orientation*.",
            "Analiz iskeleti: konu cümlesi + bağlam + üç kanıt + kapanış; paragrafı kendin yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "The narrator calls Felix \"stupid as a post,\" yet Felix plans his revenge for months. What does this difference show?",
      opts: ["An ironic contrast between the narrator's judgment and Felix's real cunning", "That Felix is truly stupid", "That the narrator likes Felix", "That the story is a fable"],
      a: 0,
      why: "Direkt karakterleştirme küçümser; eylemler ise Felix'in kurnaz olduğunu gösterir. B yanlış: eylemler bunu çürütür." },
    { q: "Which of the following is an example of dramatic irony?",
      opts: ["Felix stabs himself", "Bernardo thinks the helpless old man can do him no harm, while the reader senses the trap", "The crowd shouts \"Kill him!\"", "The trial lasts several months"],
      a: 1,
      why: "Okur Felix'in planını sezer, Bernardo sezmez. C yalnızca bir olaydır, ironi değil." },
    { q: "What is the best interpretation of the final sentence, \"The old man had conquered.\"?",
      opts: ["The author approves of Felix's revenge", "The story ends happily", "The short, sudden ending declares Felix the victor but hints at the heavy cost of his revenge", "Bernardo is released because he is innocent"],
      a: 2,
      why: "Zafer ilan edilir, ama Felix kendini bıçaklamıştır ve Bernardo ömür boyu ağır işe mahkûm olmuştur. A yanlış: yazar zaferi onaylamak yerine bedeli ve adaletsizliği görünür kılar." },
    { q: "What effect does Felix's making Bernardo put the nickel watch in his pocket create?",
      opts: ["It shows that Bernardo is poor", "It shows that Felix is rich", "It shows that time is passing", "It creates false evidence that Bernardo attacked Felix to rob him"],
      a: 3,
      why: "Saat, Bernardo'nun soygun için saldırdığını düşündürür. C yanlış: saat burada zamanı değil, sahte kanıtı ifade eder." },
    { q: "Which sentence is the strongest context sentence for an exam paragraph?",
      opts: ["Felix is a character in a story.", "This passage from \"The Vengeance of Felix\" comes at the point where Felix, an ill quarry worker in Rio, prepares a trap for the policeman who arrested his son.", "Bernardo is bad.", "The passage is about revenge and justice and many other things."],
      a: 1,
      why: "B eser, kim, nerede ve ne olduğunu kısa ve net verir. D belirsizdir, A ve C hiçbir bilgi vermez." }
  ]
};
