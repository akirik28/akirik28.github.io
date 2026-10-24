/* English 10 cep kiti · veri
   Kaynak: 2025-26 10. sınıf English (Susan Elsie Akyürek; bölüm belgeleri Dr. K. Byrd) sınav biçimleri ve rubrikleri
   (Kitpath okul defterleri en101, en306, en406, en502 ile aynı sayılar).
   Telif: Oedipus alıntıları yalnız F. Storr çevirisinden (1912, Project Gutenberg #31, kamuya açık), Fagles alıntısı yok.
   Pasajlar "Brazilian Tales" (çev. Isaac Goldberg, 1921) ve "Japanese Fairy Book" (Yei Theodora Ozaki, 1908) metinlerinden; kamuya açık.
   Catcher in the Rye'dan alıntı YOK. Haziran iddiaları alıştırma için yazılmıştır, gerçek incelemelerden alıntı değildir. */
window.ENG10 = {
  speaking: {
    kasim: {
      ad: "Kasım", alt: "Genel soru · 1 dk not + 2–3 dk", hazir: 60, konus: 180, secim: 1,
      ne: "Sorunun bütün kısımlarını cevapla. İlk cümlede doğrudan cevap ver.",
      rubrik: [["Soruyu karşılama (bütün kısımlar)", 10], ["Akıcılık", 5], ["Kelime", 5], ["Telaffuz + dilbilgisi", 5]],
      plan: ["1. kısmın cevabı", "Neden / örnek", "2. kısmın cevabı", "Neden / örnek", "Kapanış cümlesi"],
      evre: [[0, "Doğrudan cevap"], [20, "1. kısım: neden + örnek"], [90, "2. kısım: neden + örnek"], [150, "Kapanış"]],
      kalip: ["The main reason is…", "For example, …", "Another point is that…", "Let me think… / Well, …", "It's something you use to…", "To sum up, … / That's why I think…"],
      not: "Gerçek Kasım sorusu belli değil; bunlar Cultural Perspectives ünitesine yakın alıştırma sorularıdır.",
      havuz: [
        "Describe a tradition in your family or culture. Why is it important to you?",
        "Talk about a time you changed your mind about someone. What happened, and what did you learn?",
        "Describe a story or film that taught you something about another culture. What did it teach you?",
        "Talk about a person who has influenced you. How did they influence you, and why?",
        "Describe a place in your city that visitors should see. Why is it special?",
        "Is it better to grow up in a big city or a small town? Compare the two and give your opinion.",
        "Talk about a challenge you faced. How did you deal with it?",
        "How can families make sure every member feels valued? Give two ideas and explain them.",
        "Do you think it is important to learn about other cultures at school? Why or why not?",
        "Describe a celebration you enjoy. What does it mean to the people who take part?",
        "Talk about a time someone treated you unfairly. How did you react, and what would you do now?",
        "Some people say older relatives should live with their families. Do you agree? Give reasons."
      ]
    },
    aralik: {
      ad: "Aralık · Oedipus", alt: "4 alıntıdan biri · 3 dk plan + 4 dk", hazir: 180, konus: 240, secim: 4,
      ne: "Konuşanı söyle, sözlerin o karakter için anlamını ve oyundaki geniş önemini anlat.",
      rubrik: [["Konuşanı belirleme", 2], ["Alıntıyı ve geniş önemini anlama", 15], ["Doğal, duraksamasız konuşma", 3], ["Zengin sözcük", 2], ["Telaffuz + dilbilgisi", 3]],
      plan: ["Konuşan + sahne", "Ona anlamı", "Geniş önem: tema", "Terim / ironi", "Kapanış"],
      evre: [[0, "Kim, hangi sahne?"], [20, "Karakter için anlamı"], [90, "Oyundaki geniş önem (tema)"], [210, "Kapanış"]],
      kalip: ["These words are spoken by… when…", "For him, this means…", "This is dramatically ironic because the audience knows…", "In the play as a whole, this connects to the theme of…", "This foreshadows…", "What this shows is…"],
      not: "Alıntılar F. Storr çevirisinden (1912, kamuya açık). Sınıfın Fagles baskısında sözcükler farklı, anlam aynı. Sınavda satır numarası istenmez; sahneyi bilmek yeter.",
      havuz: [
        { m: "I grieve at once / Both for the general and myself and you.", kim: "Oedipus", yer: "Prologos: yalvaran halka konuşuyor",
          anlam: "Kral, salgında halkın acısını kendi acısı gibi taşıdığını söylüyor: sorumluluk sahibi, şefkatli bir lider.",
          genis: "Oedipus'un halkı kurtarma kararlılığı onu soruşturmaya iter; kurtarıcı olduğu şehrin lanetinin kendisi olduğunu bilmiyor (dramatik ironi).", tema: ["dramatik ironi", "liderlik"] },
        { m: "Banishment, or the shedding blood for blood.", kim: "Creon", yer: "Prologos: Delfi'den kehanetle dönüş",
          anlam: "Apollon'un buyruğu: Laius'un katili sürgün edilecek ya da kanı kanla ödenecek.",
          genis: "Oyunun cezası baştan konuyor; sonunda Oedipus bu cezayı kendi kendine uygular (kendini kör eder, sürgün ister).", tema: ["kehanet", "adalet"] },
        { m: "I say thou art the murderer of the man / Whose murderer thou pursuest.", kim: "Teiresias", yer: "1. episode: Oedipus ile tartışma",
          anlam: "Kâhin gerçeği açıkça söylüyor: aranan katil, arayan kişinin kendisi.",
          genis: "Gerçek oyunun başında söyleniyor ama Oedipus inanmıyor; 'görmek' ile 'bilmek' arasındaki uçurum oyunun merkezidir.", tema: ["görme ve körlük", "gerçek"] },
        { m: "thou hast eyes, / Yet see'st not in what misery thou art fallen", kim: "Teiresias", yer: "1. episode: Oedipus körlüğüyle alay edince",
          anlam: "Kör kâhin, gözleri gören kralın asıl kör olduğunu söylüyor.",
          genis: "Görme–körlük karşıtlığı oyunun ana imgesi; sonda Oedipus gerçeği görünce gözlerini kör eder.", tema: ["görme ve körlük", "ironi"] },
        { m: "For blind of seeing, clad in beggar's weeds, / For purple robes, and leaning on his staff, / To a strange land he soon shall grope his way.", kim: "Teiresias", yer: "1. episode: çıkarken kehanet",
          anlam: "Katil, gören ve zengin biri olarak gelmişken kör ve dilenci olarak yabancı bir ülkeye gidecek.",
          genis: "Talihin tersine dönüşü (peripeteia) önceden haber veriliyor; sonun bilinmesi trajik gerilimi artırır.", tema: ["kehanet", "talihin dönüşü"] },
        { m: "O wealth and empiry and skill by skill / Outwitted in the battlefield of life, / What spite and envy follow in your train!", kim: "Oedipus", yer: "1. episode: Creon'u komplo ile suçlar",
          anlam: "Oedipus, gücün kıskançlık getirdiğini düşünüyor ve kâhinin Creon'la iş birliği yaptığından şüpheleniyor.",
          genis: "Öfke ve kuşku onun kusuru (hamartia) gibi işler; gerçeği duymak yerine komplo arar.", tema: ["öfke", "hamartia"] },
        { m: "I have no natural craving for the name / Of king, preferring to do kingly deeds", kim: "Creon", yer: "2. episode: komplo suçlamasına cevap",
          anlam: "Creon taht istemediğini, zaten krallık gücünün rahatını yaşadığını söylüyor.",
          genis: "Sakin Creon, aceleci Oedipus'un karşıtı; oyunun sonunda tahtı gerçekten Creon alır (durumsal ironi).", tema: ["karakter karşıtlığı", "ironi"] },
        { m: "The truth, for time alone reveals the just; / A villain is detected in a day.", kim: "Creon", yer: "2. episode: kendini savunuyor",
          anlam: "Dürüst kişiyi zaman ortaya çıkarır; kötü kişi bir günde yakalanır.",
          genis: "Oyunun bütün olayları tek günde geçer ve o gün açığa çıkan 'suçlu' Oedipus'un kendisidir.", tema: ["gerçek", "ironi"] },
        { m: "Why should a mortal man, the sport of chance, / With no assured foreknowledge, be afraid?", kim: "Jocasta", yer: "3. episode: Korinthos haberi gelince",
          anlam: "Jocasta, insanın geleceği bilemeyeceğini, kehanetlerden korkmanın anlamsız olduğunu söylüyor.",
          genis: "Kehanete meydan okuyan sözler kısa süre sonra çöker; kader ile şans/özgür irade tartışmasının merkezindedir.", tema: ["kader ve özgür irade", "kehanet"] },
        { m: "Ah mayst thou ne'er discover who thou art!", kim: "Jocasta", yer: "3. episode: gerçeği anlayınca",
          anlam: "Jocasta gerçeği anlamıştır ve Oedipus'un öğrenmemesi için yalvarır.",
          genis: "Kimlik arayışı oyunun temelidir; bilmek felaket getirir. Seyirci Jocasta'nın neyi anladığını bilir (dramatik ironi).", tema: ["kimlik", "bilgi"] },
        { m: "But I / Who rank myself as Fortune's favorite child, / The giver of good gifts, shall not be shamed.", kim: "Oedipus", yer: "3. episode: Jocasta içeri koşunca",
          anlam: "Oedipus kendini Talih'in (Tyche) gözdesi sayıyor ve kökeni ne olursa olsun öğreneceğini söylüyor.",
          genis: "Gurur (hubris) ve kararlılık bir arada; Talih'in çocuğu sandığı an, talihin en büyük darbesinden hemen önce gelir.", tema: ["hubris", "kimlik"] },
        { m: "For if thou art in sooth what this man saith, / God pity thee! thou wast to misery born.", kim: "Çoban", yer: "4. episode: gerçek açığa çıkıyor",
          anlam: "Çoban, bebeği öldürmek yerine acıyıp verdiğini ve Oedipus'un o bebek olduğunu doğruluyor.",
          genis: "Merhamet bile kehaneti durduramadı; tanınma (anagnorisis) anı.", tema: ["anagnorisis", "kader"] },
        { m: "O light, may I behold thee nevermore!", kim: "Oedipus", yer: "4. episode: gerçeği öğrenince",
          anlam: "Oedipus artık ışığı (dünyayı) görmek istemiyor; kör olmayı önceden haber veren bir çığlık.",
          genis: "Işık–karanlık ve görme–körlük imgeleri doruğa ulaşır; gerçeği görmek dünyayı görmemeyi seçtirir.", tema: ["görme ve körlük", "anagnorisis"] },
        { m: "Apollo, friend, Apollo, he it was / That brought these ills to pass; / But the right hand that dealt the blow / Was mine, none other.", kim: "Oedipus", yer: "Exodos: kör olduktan sonra koroya",
          anlam: "Felaketi Apollon getirdi, ama gözlerini kendi eliyle o kör etti.",
          genis: "Kader ile kişisel sorumluluk bir arada: tanrılar olayları belirler, Oedipus seçimlerinin sorumluluğunu üstlenir.", tema: ["kader ve özgür irade", "sorumluluk"] },
        { m: "Therefore wait to see life's ending ere thou count one mortal blest", kim: "Koro", yer: "Exodos: oyunun son sözleri",
          anlam: "Bir insanın hayatının sonunu görmeden ona mutlu deme.",
          genis: "Oyunun dersi: talih değişkendir; en güçlü kral bile bir günde düşebilir.", tema: ["talihin dönüşü", "koro"] }
      ]
    },
    mart: {
      ad: "Mart · Catcher temaları", alt: "2 sorudan biri · 4 dk hazırlık + 4 dk", hazir: 240, konus: 240, secim: 2,
      ne: "Romandan somut ayrıntı (sahne, bölüm) ve kendi hayatından bir bağlantı ver.",
      rubrik: [["Soruyu anlama, eserden ayrıntı", 10], ["Kendi hayatınla bağlantı", 6], ["Akıcılık", 3], ["Kelime", 3], ["Telaffuz + dilbilgisi", 3]],
      plan: ["Soru, kendi sözlerimle", "Sahne 1 (Ch __)", "Sahne 2 (Ch __)", "Kendi hayatım", "Kapanış"],
      evre: [[0, "Soruyu yeniden söyle"], [20, "Romandan 2–3 sahne"], [150, "Kendi hayatından bağlantı"], [220, "Kapanış"]],
      kalip: ["The question asks about…", "In the novel, this appears when… (Chapter __)", "This shows that Holden…", "I can relate to this because…", "This reminds me of… / In a similar way, …", "Overall, …"],
      not: "Gerçek Mart soruları belli değil; bunlar romanın temalarına göre alıştırma sorularıdır. Romandan alıntı verilmez: sahneyi kendi sözlerinle anlat.",
      havuz: [
        "Holden calls many people \"phony\". What does phoniness mean to him, and have you ever felt the same way?",
        "How does Holden deal with grief and loss? Connect this to an experience of change or loss in your own life.",
        "Why does Holden dream of protecting children's innocence? What does innocence mean to you?",
        "Holden often feels lonely even in a crowd. Which scenes show this, and when have you felt alone among people?",
        "How important is Phoebe to Holden? Who plays a similar role in your life?",
        "Holden seems afraid of growing up. Which moments show this, and how do you feel about growing up?",
        "Holden lies often, yet he hates phoniness. Why might this be? Is everyone a little phony sometimes?",
        "Which place in the novel matters most to Holden, and why? Which place matters most to you?"
      ]
    },
    haziran: {
      ad: "Haziran · eleştiri iddiası", alt: "2 iddiadan biri · 4 dk hazırlık + 4 dk", hazir: 240, konus: 240, secim: 2,
      ne: "İddiaya ne ölçüde katıldığını söyle; romandan bol parafraz kanıtla ve analiz et.",
      rubrik: [["Alıntıyı anladığını gösterme", 5], ["Metinden düşünceli, destekleyici analiz", 11], ["Akıcılık", 3], ["Kelime", 3], ["Telaffuz + dilbilgisi", 3]],
      plan: ["Yazarın iddiası (1 cümle)", "Tutumum (katılıyorum / kısmen)", "Kanıt 1 (Ch __)", "Kanıt 2 (Ch __)", "Kapanış"],
      evre: [[0, "İddiayı kendi sözlerinle söyle"], [30, "Tutumunu açıkla"], [50, "Romandan kanıt + analiz"], [210, "Kapanış"]],
      kalip: ["The author argues that…", "I partly agree because…", "I disagree with the claim that…", "In Chapter __, Holden…, which shows…", "This supports / contradicts the claim because…", "Overall, …"],
      not: "Bu iddialar alıştırma için yazıldı; gerçek incelemelerden alıntı değildir. Sınavda daha önce okumadığın iki incelemeden bir alıntı seçeceksin.",
      havuz: [
        "Holden is less a rebel than a frightened boy who refuses to grow up.",
        "Today's teenagers may find Holden hard to relate to, but his feelings are universal.",
        "Holden complains about everyone, yet he never tries to change anything himself.",
        "The real subject of the novel is grief, not rebellion.",
        "Holden's hatred of phoniness makes him more honest than the adults around him.",
        "Because Holden is an unreliable narrator, readers should not trust his judgments of other people.",
        "The ending of the novel offers hope rather than despair.",
        "Holden's loneliness is mostly his own fault."
      ]
    }
  },

  pasaj: {
    rubrik: [["Paragraf biçimi ve düzeni", 3], ["Konu cümlesi", 5], ["Bağlam", 2], ["Pasajdan bol kanıt (alıntı + parafraz)", 25], ["Alıntıların doğru yerleştirilmesi", 3], ["Edebi ve yapısal araçlar", 7], ["İngilizce kullanımı", 5]],
    soru: "What is the meaning and purpose of the passage?",
    metinler: [
      { id: "zeze1", eser: "Aunt Zeze's Tears", yazar: "Carmen Dolores", baglam: "Zézé, kız kardeşinin kalabalık ailesiyle yaşayan, kimsenin gerçekten görmediği yaşlanan bir kadındır.",
        metin: "None of them saw Maria-José as she really was. Living with her day by day had served to efface the actual appearance of the faded old maid. For, in the minds of the mother and her daughters, who were moreover of a frivolous and indifferent sort, Zézé had grown to be the type, very vague, to be sure, but the eternal type of young girl of marriagable years who always should be well dressed and smiling. When she would be out walking with her nieces, of sixteen and seventeen years, who wore the same clothes as she herself did, but whose graceful and lively charm became their gay colors of youth so well, Zézé's intelligence saw only too plainly the contrast between her and them; she would hold aloof from the laughing set, morose, wounded, as if oppressed by an unspeakable shame.",
        araclar: ["contrast (Zézé ve yeğenleri)", "diction: \"faded\", \"frivolous and indifferent\"", "imagery: \"gay colors of youth\"", "narrator's tone: acıma ve eleştiri"],
        tez: [
          { t: "Through the contrast between Zézé and her lively nieces, Dolores reveals how a family's indifference makes Zézé invisible and ashamed.", iyi: true },
          { t: "Zézé goes for a walk with her nieces, who are sixteen and seventeen.", iyi: false, neden: "Olay özeti; görüş yok." },
          { t: "By describing the family as \"frivolous and indifferent\", Dolores criticizes people who never truly see those closest to them.", iyi: true },
          { t: "Aunt Zeze's Tears is a short story by Carmen Dolores.", iyi: false, neden: "Gerçek bilgi; savunulacak yorum yok." }
        ] },
      { id: "zeze2", eser: "Aunt Zeze's Tears", yazar: "Carmen Dolores", baglam: "Aile tiyatroya gider; Zézé her zamanki gibi çocuklarla evde kalır.",
        metin: "Alone in the dining-room she would ply her needle mechanically, while her nephews would amuse themselves with the toys scattered upon the table,—colored pictures and lead soldiers. Every other moment they would call her. And the good aunt would quiet them. Then, after both had been put to sleep in their little twin beds, she would rest her elbows upon the window-sill of her gloomy old-maid's room, and placing both hands beneath her sharp chin, her gaze directed towards heaven, she would lose herself in contemplation of the stars that shone in the limpid sky, less lonely, surely, than she upon earth. In vain did her eyes seek in the eyes of another that expression of sympathy and tenderness which alone would console her....",
        araclar: ["adverb: \"mechanically\"", "setting: \"gloomy old-maid's room\"", "comparison: yıldızlar onun kadar yalnız değil", "repetition of routine (\"would\")"],
        tez: [
          { t: "By comparing Zézé to the stars, which are \"less lonely\" than she is, Dolores shows the depth of her isolation inside a busy household.", iyi: true },
          { t: "Zézé looks at the stars after the children go to sleep.", iyi: false, neden: "Olay özeti." },
          { t: "Through repeated habits described with \"would\", Dolores suggests that Zézé's life has become an empty routine of service to others.", iyi: true },
          { t: "This passage has a lot of imagery and description.", iyi: false, neden: "Araç adı var ama görüş ve etki yok." }
        ] },
      { id: "felix", eser: "The Vengeance of Felix", yazar: "Medeiros e Albuquerque", baglam: "Hasta ve yalnız Felix, oğlunu tutuklayan polis Bernardo'dan intikam almak için kendi ölümünü bir tuzağa çevirmiştir.",
        metin: "Several months later the trial came to an end. Bernardo was sentenced to hard labor for life. Nobody would believe his story. The proofs were overwhelming. Had he not been caught red-handed? The presence of the nickel-watch in his pocket indicated sufficiently that the motive of the crime was robbery. The vengeance of old Felix had been well calculated: the result was there. The old man had conquered.",
        araclar: ["situational irony: masum polis suçlu sayılıyor", "short sentences: soğuk, kesin ton", "rhetorical question: \"Had he not been caught red-handed?\"", "diction: \"well calculated\", \"conquered\""],
        tez: [
          { t: "Through short, flat sentences and bitter irony, the author shows that Felix's revenge turns the justice system into his weapon.", iyi: true },
          { t: "Bernardo is sentenced to hard labor for life.", iyi: false, neden: "Olay; yorum yok." },
          { t: "The rhetorical question \"Had he not been caught red-handed?\" exposes how easily appearances can deceive a court.", iyi: true },
          { t: "The author uses irony, short sentences and a rhetorical question.", iyi: false, neden: "Araç listesi; etkisi yok (öğretmen listelemeyi istemez)." }
        ] },
      { id: "hase", eser: "The Story of Princess Hase", yazar: "Yei Theodora Ozaki", baglam: "Üvey anne Terute, Hase'yi zehirli şarapla öldürmek ister.",
        metin: "The wicked woman had carefully marked the poisoned bottle, but on coming into the room she had grown nervous, and pouring out the wine hurriedly had unconsciously given the poisoned cup to her own child. All this time she was anxiously watching the little Princess, but to her amazement no change whatever took place in the young girl's face. Thus was the wicked woman punished in losing her own child when she had tried to do away with her step-daughter; but instead of blaming herself she began to hate Hase-Hime more than ever in the bitterness and wretchedness of her own heart.",
        araclar: ["situational irony: zehir kendi çocuğuna gider", "diction: \"wicked\", \"bitterness and wretchedness\"", "contrast: sakin Hase / sinirli Terute", "moral tone: masal anlatıcısı"],
        tez: [
          { t: "Through situational irony, Ozaki shows that Terute's cruelty destroys what she loves most, teaching that evil punishes itself.", iyi: true },
          { t: "Terute gives the wrong cup of wine to her son.", iyi: false, neden: "Olay özeti." },
          { t: "By contrasting Terute's nervous hatred with Hase's calm innocence, the narrator rewards patience and condemns jealousy.", iyi: true },
          { t: "The Story of Princess Hase is a Japanese fairy tale.", iyi: false, neden: "Gerçek bilgi." }
        ] }
    ],
    etki: ["shows", "reveals", "suggests", "emphasizes", "highlights", "underscores", "illustrates", "conveys", "exposes", "creates a sense of"],
    mart: [["Plan", 10, "Pasajı oku, 1–3 özellik seç, kenara not al, kaba outline."], ["Giriş", 8, "Bağlam (1–2 cümle) + pasajın konusu + tez."], ["Body 1", 15, "Konu cümlesi + QPC (Quote, Paraphrase, Connect)."], ["Body 2", 15, "İkinci özellik; aynı düzen."], ["Sonuç", 7, "Tezi özetle + yeni ama ilgili bir düşünce."], ["Kontrol", 5, "İsimler, zaman (literary present), alıntı yerleşimi."]]
  },

  konusma: {
    rubrik: [
      ["İçerik", "Tez net ve özlü", 5], ["İçerik", "İkna edici içerik: noktalar, araştırma, görüş, concession, çözüm", 15], ["İçerik", "Noktalar net örneklerle destekli", 10],
      ["Organizasyon", "Açık giriş, gelişme, sonuç", 8], ["Organizasyon", "Geçişler", 2],
      ["İngilizce", "Dilbilgisi", 15], ["İngilizce", "Telaffuz", 5], ["İngilizce", "Sözcük", 5], ["İngilizce", "Doğal konuşma ritmi", 5],
      ["Teknik", "İzleyiciye bakma, okumama", 10], ["Teknik", "Beden dili", 5], ["Teknik", "Ses: coşkulu, monoton değil", 10], ["Teknik", "Destekleyici materyal (poster/handout)", 5]
    ],
    kancalar: [
      ["Retorik soru", "What if…?"], ["Şaşırtıcı veri", "According to [source], …"], ["Kısa hikâye", "Consider a student who…"], ["Cesur iddia", "[Short, bold sentence.]"]
    ],
    sorular: [
      "What is the strongest argument against your position?",
      "Where does that statistic come from, and how reliable is it?",
      "Who would pay for your solution?",
      "How many people answered your survey, and who were they?",
      "What would happen if your solution did not work?",
      "Can you give a real example from your research?",
      "Why should students at our school care about this?",
      "Isn't this just your personal opinion?",
      "Has anyone already tried this solution somewhere else?",
      "What did your interview with an expert add to your argument?"
    ]
  }
};
