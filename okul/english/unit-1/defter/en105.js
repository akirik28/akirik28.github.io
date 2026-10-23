/* Kitora not defteri · en105 · 1.5 The Story of Princess Hase (A Story of Old Japan)
   Kaynak: defter-araclari/kaynak/en10-yaz-okumasi-oykuler.txt (Yei Theodora Ozaki, Japanese Fairy Tales, 1908; kamuya açık). Öğretmen belgesinde bu öykü için ayrı çalışma kâğıdı yok; yorumlar ek bilgi niteliğinde, Kasım sınav biçimi (özet A1) ve pasaj analizi yöntemiyle (özet D) uyumlu. */
window.DEFTER = {
  slug: "en105",
  amac: "Bu defter *The Story of Princess Hase* öyküsünü Kasım sınavındaki pasaj analizi gözüyle çözüyor: olay, karakterler, bağlam, temalar, araçlar. Yorumlar ek bilgidir (öğretmen belgesinde bu öykü için çalışma kâğıdı yok); sondaki iskelet kendi paragrafın içindir.",
  bolumler: [
    {
      baslik: "Olay: sabrın ödülü",
      kisa: "Sabırlı ve yetenekli Hase-Hime, üvey annesinin iki suikast girişiminden kurtulur.",
      bloklar: [
        { tip: "adimlar", baslik: "Olay örgüsü", adimlar: [
            { baslik: "1 · Çocuk duası", metin: "Nara'da bakan Prens Toyonari ve eşi Murasaki çocuk için Hase tapınağında dua eder; kızları Hase-Hime doğar." },
            { baslik: "2 · Anne ölür", metin: "Hase-Hime beş yaşındayken annesi ölür; ölürken kızına itaatkâr ve nazik olmasını, üvey annesine de anne gibi davranmasını söyler." },
            { baslik: "3 · Üvey anne", metin: "Prensin yeni eşi Terute kötü kalplidir. Saray gösterisinde Hase başarılı, Terute başarısız olur; Terute kıskançlıktan öfkelenir." },
            { baslik: "4 · Zehirli şarap", metin: "Terute kızı zehirlemek ister ama zehirli kadeh yanlışlıkla kendi oğluna gider; çocuk ölür." },
            { baslik: "5 · Şiir ve sürgün", metin: "Hase'nin şiiri nehrin gürültüsünü durdurur, imparatoru iyileştirir. Terute, hizmetkâr Katoda'ya kızı dağa götürüp öldürmesini söyler; Katoda onu saklar." },
            { baslik: "6 · Kavuşma", metin: "Prens avda kızını bulur, gerçeği öğrenir; Terute kaçar. Hase evlenir, mutlu bir ömür sürer." }
          ] },
        { tip: "grafik", baslik: "Hase-Hime'nin talihi: sınav ve ödül", xlabel: "Öykünün akışı", ylabel: "Talih", xmax: 10, ymax: 10,
          ogeler: [
            { id: "s1", tip: "egri", renk: 2, noktalar: [[0, 6], [1, 7], [2, 2.5]], gizli: true },
            { id: "s2", tip: "egri", renk: 1, noktalar: [[2, 2.5], [3, 4], [4, 7]], gizli: true },
            { id: "s3", tip: "egri", renk: 2, noktalar: [[4, 7], [5, 3.5], [6, 8.5]], gizli: true },
            { id: "s4", tip: "egri", renk: 2, noktalar: [[6, 8.5], [7, 2], [8.2, 3.2]], gizli: true },
            { id: "s5", tip: "egri", renk: 1, noktalar: [[8.2, 3.2], [9, 8.5], [10, 9.5]], gizli: true },
            { id: "t1", tip: "yazi", x: 2, y: 1.2, metin: "anne ölür", gizli: true },
            { id: "t2", tip: "yazi", x: 4, y: 8, metin: "koto", gizli: true },
            { id: "t3", tip: "yazi", x: 5, y: 2.3, metin: "zehir", gizli: true },
            { id: "t4", tip: "yazi", x: 6, y: 9.4, metin: "şiir", gizli: true },
            { id: "t5", tip: "yazi", x: 7, y: 1, metin: "sürgün", gizli: true },
            { id: "t6", tip: "yazi", x: 9.3, y: 9.6, metin: "kavuşma", gizli: true }
          ],
          durumlar: [
            { metin: "Mutlu doğum, sonra annenin ölümü: ilk büyük kayıp.", goster: ["s1", "t1"] },
            { metin: "Üvey annenin soğukluğuna rağmen Hase **koto**da ustalaşır; talih yükselir.", goster: ["s2", "t2"] },
            { metin: "Zehirli kadeh Hase'yi tehlikeye atar, sonra şiir onu yeniden yükseltir.", goster: ["s3", "t3", "t4"] },
            { metin: "İkinci girişim: sürgün. Talih yeniden dibe vurur.", goster: ["s4", "t5"] },
            { metin: "Babasıyla kavuşma ve mutlu son: ==erdem ödüllendirilir.==", goster: ["s5", "t6"] }
          ] }
      ]
    },
    {
      baslik: "Karakterler",
      kisa: "İyi ile kötü net ayrılır: Hase ve Murasaki bir yanda, Terute diğer yanda.",
      bloklar: [
        { tip: "tablo", head: ["Karakter", "Kim?", "Nasıl tanıyoruz?", "Temsil ettiği"],
          rows: [
            ["Hase-Hime", "Prens Toyonari'nin kızı", "Sabır, müzik, şiir; “bore every unkindness with patience”", "Erdem ve saflık"],
            ["Terute", "Üvey anne", "“a cruel, bad heart”; tembel ve kıskanç", "Kıskançlık ve kötülük"],
            ["Murasaki", "Hase'nin annesi", "“noble, good, and beautiful”; ölürken öğüt verir", "Bilge anne; değerlerin kaynağı"],
            ["Prens Toyonari", "Baba, bakan", "Çocuk için dua eder; kızını arar", "Adil otorite"],
            ["Katoda", "Sadık hizmetkâr", "Emri yerine getirmez, kızı saklar", "Vicdan ve sadakat"],
            ["İmparator", "Hükümdar", "Perde ardında; müzik ve şiire hayran", "Kutsal otorite"]
          ], vurgu: 0 },
        { tip: "kavramlar", kartlar: [
            { ikon: "🙏", terim: "Filial", tr: "evlat saygısına ait", tanim: "Çocuğun anne babasına saygı ve bağlılığı.", ornek: "Hase, annesinin sözünü tutar." },
            { ikon: "🕊️", terim: "Submissive", tr: "itaatkâr", tanim: "Üstlerine boyun eğen.", ornek: "Anne, kızından “submissive to those who are your superiors” olmasını ister." },
            { ikon: "🪷", terim: "Devout", tr: "dindar, adanmış", tanim: "Dinine içtenlikle bağlı.", ornek: "Hase kutsal metinleri okur." },
            { ikon: "🔥", terim: "Jealousy / envy", tr: "kıskançlık", tanim: "Başkasının başarısına duyulan acı.", ornek: "Terute'nin “envy and jealousy”si yanar." }
          ] }
      ]
    },
    {
      baslik: "Kültürel bağlam (ek bilgi)",
      kisa: "Hikâye, Budist inanç, saray töreni ve evlat saygısı üzerine kurulu bir Nara Japonya'sını anlatır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🏯", baslik: "Nara ve Fujiwara", metin: "Olay, eski başkent Nara'da geçer; Fujiwara ailesi, imparatora yakın güçlü bakan ailesidir." },
            { ikon: "🪷", baslik: "Budizm ve Kwannon", metin: "Çocuk için dua, merhamet tanrıçası Kwannon'a yapılır. Gerçek bir tapınak olan Hase-dera'da hacca gidilir." },
            { ikon: "👑", baslik: "İmparator ve perde", metin: "İmparator bambu perdenin arkasında oturur; sıradan kimse yüzünü göremez. Bu, saygıyı ve mesafeyi gösterir." },
            { ikon: "🎶", baslik: "Kadın yetenekleri", metin: "Koto çalmak, şiir ve hat yazmak soylu kadınlar için değerli sayılırdı; Hase'nin gücü de buradan gelir." },
            { ikon: "👨‍👩‍👧", baslik: "Aile ve varis", metin: "Erkek çocuk soyu devam ettirir; Prens oğlu olmadığı için bir varis evlat edinir." }
          ] },
        { tip: "not", metin: "Ek bilgi: bu metin, Yei Theodora Ozaki'nin 1908'de İngilizce okurlar için derlediği *Japanese Fairy Tales* kitabındandır. Anlatıcı, Japon âdetlerini açıklar (“koto (Japanese harp)”); yani bir Batılı okura kültür tanıtmak da öykünün amaçlarından biridir." }
      ]
    },
    {
      baslik: "Temalar",
      kisa: "Tema: erdem ödüllendirilir, kıskançlık kendisini yok eder, sanat ve inanç güçlüdür.",
      bloklar: [
        { tip: "harita", merkez: "*The Story of Princess Hase*", dallar: [
            { baslik: "Erdem ve adalet", alt: "*Patience and goodness are rewarded.*" },
            { baslik: "Kıskançlık", alt: "*Envy destroys the envious.*" },
            { baslik: "Evlat saygısı", alt: "*Obedience and respect shape character.*" },
            { baslik: "Sanat ve inanç", alt: "*Poetry and devotion can move even nature.*" }
          ] },
        { tip: "tablo", baslik: "Tema + kanıt", head: ["Tema", "Kısa kanıt", "Amaç cümlesi"],
          rows: [
            ["Erdem ödüllendirilir", "“The waters ceased their roaring”", "*to teach that goodness is honored*"],
            ["Kıskançlık yok eder", "“Thus was the wicked woman punished”", "*to warn readers against envy*"],
            ["Evlat saygısı", "Annenin son öğütleri (parafraz)", "*to promote filial respect*"],
            ["Sanatın gücü", "Şiirle nehir susar (parafraz)", "*to celebrate the power of art and prayer*"]
          ] }
      ]
    },
    {
      baslik: "Araçlar: ne, nerede, etkisi?",
      kisa: "Masal kalıpları ve ironi, ahlak dersini açık ve akılda kalıcı yapar.",
      bloklar: [
        { tip: "tablo", head: ["Araç", "Nerede?", "Etkisi"],
          rows: [
            ["*Fairy-tale conventions*", "“Many, many years ago”; “To this day…”", "Zamansız, öğretici bir hava"],
            ["*Direct characterization*", "“noble, good, and beautiful”; “a cruel, bad heart”", "İyi ile kötü net ayrılır"],
            ["*Foil*", "Murasaki ve Terute; Hase'nin çalışkanlığı ve Terute'nin tembelliği", "Erdemin parlaması"],
            ["*End orientation / proverb*", "“As the soul is at three so it is at one hundred”", "Açılıştaki sözün Hase'nin sonraki yaşamına işaret etmesi"],
            ["*Situational irony*", "Zehirli kadeh kendi oğluna gider", "Kötülüğün kendini cezalandırması"],
            ["*Repetition*", "“This is not my child!”", "Üvey annenin saplantısı"],
            ["*Simile / symbolism*", "“burned in her heart like fire”; lotus ve Buddha işlemesi", "Kıskançlığın yakıcılığı; saflığın kalıcı mirası"]
          ], vurgu: 4 },
        { tip: "tuzak", metin: "Bu öykü gerçekçi bir psikoloji anlatmaz; karakterler arketiptir. Analizde “neden bu kadar kötü?” diye sorma, “yazar hangi dersi vermek için bu zıtlığı kurdu?” diye sor.", yanlis: "Terute gerçekçi değil, bu yüzden kötü bir öykü.", dogru: "Düz karakterler masalın ahlak amacını güçlendirir." }
      ]
    },
    {
      baslik: "Sınavda çıkabilecek pasajlar",
      kisa: "Pasajı tanı: hangi bölüm, hangi araç ve hangi anlam fikri?",
      bloklar: [
        { tip: "tablo", head: ["Pasaj", "Nerede?", "Odak", "Olası anlam"],
          rows: [
            ["Giriş", "Prens ve eşinin duası", "Bağlam, inanç", "İnsan umudu ve ilahi merhamet."],
            ["Annenin son sözleri", "Ölüm yatağı", "*End orientation*, değerler", "Evlat saygısı ve sabır."],
            ["Kiraz Çiçeği Şenliği", "Sarayda performans", "*Foil*, kıskançlık", "Yetenek ve çalışma karşısında tembellik."],
            ["Zehirli şarap", "Erkek çocuklar bayramı", "*Situational irony*", "Kötülük sahibine döner."],
            ["Nehir ve şiir", "Tatsuta Nehri", "*Symbolism*, *allusion*", "Sanat ve inancın gücü."],
            ["Dağda kavuşma", "Hibari Dağları", "Sadakat, tanınma", "Vicdan ve sevgi kazanır."]
          ] },
        { tip: "tablo", baslik: "Hatırlanacak kısa alıntılar (Ozaki derlemesi)", head: ["Alıntı", "Ne gösterir?"],
          rows: [
            ["“As the soul is at three so it is at one hundred”", "Karakter erken yaşta belirlenir"],
            ["“This is not my child!”", "Üvey annenin reddi"],
            ["“a cruel, bad heart”", "Direkt karakterleştirme"],
            ["“Thus was the wicked woman punished”", "Ahlaki sonuç"],
            ["“burned in her heart like fire”", "Kıskançlık benzetmesi"],
            ["“The waters ceased their roaring”", "Erdemin gücü"]
          ] },
        { tip: "not", metin: "Kasım sınavındaki pasaj, Cultural Perspectives ünitesindeki bir kısa öykü ya da denemeden gelir; bu öykünün çıkacağı garanti değildir. Ek bilgi: sınıfta ayrıca Amy Tan'ın *Two Kinds* öyküsü, Orwell'in *A Hanging* denemesi ve Achebe'nin *Things Fall Apart* kitabının ilk bölümleri de işlendi; yöntemi (QPC) hepsinde aynı uygula." }
      ]
    },
    {
      baslik: "Örnek analiz paragrafının iskeleti",
      kisa: "İskeleti kullan, kanıtı pasajdan kendin seç; paragrafı kendin yaz.",
      bloklar: [
        { tip: "adimlar", baslik: "Cümle başlangıçları (boşluklar sende; Woods'un sırasıyla)", adimlar: [
            { baslik: "Eser + bağlam", metin: "*This passage from “The Story of Princess Hase” comes at the point where Hase-Hime, the daughter of a minister in ancient Nara, [durum].*" },
            { baslik: "Konu cümlesi (konu + görüş)", metin: "*In this passage, the narrator shows that [anlam] in order to [amaç].* Araçları burada sıralama." },
            { baslik: "Analiz 1 (QPC)", metin: "*The narrator describes Terute as having “[alıntı]”, which contrasts with…. This foil suggests…*" },
            { baslik: "Analiz 2 (QPC)", metin: "*The poisoned cup is ironic because Terute [__], yet [__]. This reveals…*" },
            { baslik: "Analiz 3 (QPC)", metin: "*The final sentence / the closing detail of [tapınak işlemesi] shows that…*" },
            { baslik: "Kapanış (isteğe bağlı)", metin: "*Ultimately, the story teaches that… / Through Hase-Hime's patience, the narrator…*" }
          ] },
        { tip: "tuzak", baslik: "Ezber paragraf tuzağı", metin: "Sınavdaki pasaj bu öyküden olsa bile farklı bir bölüm olabilir. Ezberlenmiş bir paragraf pasaja uymazsa kanıt puanı gider.", yanlis: "Bir paragraf ezberler, hepsini oraya yapıştırırım.", dogru: "Cümle kalıbını bil, kanıtı ve açıklamayı o gün pasajdan seç." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Hase-Hime, Kwannon'un lütfuyla doğan, sabırlı ve yetenekli bir prenses; üvey annesi Terute onu iki kez öldürmeye çalışır.",
            "Zehirli kadeh yanlışlıkla Terute'nin oğluna gider (*situational irony*).",
            "Hase şiiriyle nehri susturur; imparatordan rütbe alır; sonra dağa sürülür, babası onu bulur.",
            "Bağlam: Nara, Budizm, Kwannon, imparator ve perde, kadın sanatları, varis evlat edinme; Batılı okura derlenmiş bir masal.",
            "Temalar: erdemin ödülü, kıskançlığın cezası, evlat saygısı, sanatın ve inancın gücü.",
            "Araçlar: *fairy-tale conventions, direct characterization, foil, end orientation, repetition, simile, symbolism*.",
            "Analiz iskeleti: konu cümlesi + bağlam + üç kanıt + kapanış; paragrafı kendin yaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Terute's poisoned cup goes to her own son. Which literary device does this illustrate?",
      opts: ["Foreshadowing", "Situational irony", "Simile", "Allusion"],
      a: 1,
      why: "Terute'nin planı tersine döner: beklenenin tersi olur. En çekici yanlış şık A: öncesinde bu olayı sezdiren belirgin bir ipucu yok." },
    { q: "What do the phrases \"Many, many years ago...\" and \"To this day there is preserved a piece of needle-work...\" show about the text?",
      opts: ["A realistic, everyday narration", "That the narrator never comments on or judges the events", "Fairy-tale conventions (a timeless opening and closing)", "First-person narration"],
      a: 2,
      why: "Formülsel başlangıç ve \"bugüne kadar\" biçiminde bitiş masal gelenekleridir. B yanlış: anlatıcı yorum yapar ve ahlaki hüküm verir (\"Thus was the wicked woman punished\")." },
    { q: "What do the mother's last words to Hase-Hime help to establish in the rest of the story?",
      opts: ["That Hase-Hime hates her family", "That the stepmother is innocent", "That Hase-Hime runs away from the emperor", "The values (obedience, patience) that guide Hase-Hime's behavior later on"],
      a: 3,
      why: "Öğütler (itaat, sabır) Hase'nin sonraki davranışını açıklar ve açılışın sona işaret etmesine (*end orientation*) örnektir. B yanlış: öğüt üvey anneyi savunmaz, kızı ona karşı sabra çağırır." },
    { q: "Why does the narrator explain terms such as \"koto (Japanese harp)\"?",
      opts: ["Because the text was compiled for English-speaking readers and introduces the culture to them", "Because the text was written only for Japanese readers", "Because the author does not know Japan", "Because the text is a science book"],
      a: 0,
      why: "Ozaki, İngilizce okurlar için derlemiştir; bilinmeyen sözcükler açıklanır. B yanlış: bunun tersi doğru." },
    { q: "Which of the following is the best meaning (theme) statement for this story?",
      opts: ["The story is about a girl who plays the koto.", "The emperor lives behind a curtain.", "Patience, devotion and goodness are rewarded, while envy destroys the envious.", "Stepmothers are always cruel."],
      a: 2,
      why: "C tema düzeyinde bir mesaj verir. A ve B ayrıntıdır; D genellemedir ve metne dayanmaz." }
  ]
};
