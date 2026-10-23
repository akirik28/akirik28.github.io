/* Kitora not defteri · en205 · 2.5 Dramatik İroni ve Kilit Pasajlar
   Kaynak: öğretmen (Dr Byrd) Oedipus belgeleri: Aralık "Quote Review" konuşma sınavı biçimi ve rubriği (özet A4) + çalışma alıntı bankası temaları (satır no. Fagles baskısı; Fagles alıntısı yok, yalnız parafraz). Alıntılar: yalnız F. Storr çevirisi (1912, Gutenberg metninden kontrol edildi) ve R. C. Jebb çevirisi (1887, doğrulanmış satır). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en205",
  amac: "Bir sahne neden “iğneli”dir? Dramatik ironiyi tanımlayacak, oyunun başlıca ironilerini göreceksin. Aralık ayındaki konuşma sınavının (*Quote Review*) biçimini, rubriğini ve alıntı bankasını öğrenip kısa Jebb/Storr alıntılarıyla yorum iskeleti kuracaksın.",
  bolumler: [
    {
      baslik: "Üç ironi türü",
      kisa: "Dramatik ironide seyirci bilir, karakter bilmez; öteki ironi türleri farklıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Dramatic irony", tr: "dramatik ironi", tanim: "Seyirci karakterden fazlasını bilir; karakterin sözleri seyirci için ikinci bir anlam taşır.", ornek: "Oedipus katile lanet eder; seyirci katilin kendisi olduğunu bilir." },
            { ikon: "😏", terim: "Verbal irony", tr: "sözel ironi", tanim: "Söylenenin tersi kastedilir; alay ya da imalı söz.", ornek: "“Çok akıllıca bir plan!” diyerek saçma bir planı küçümsemek." },
            { ikon: "🔄", terim: "Situational irony", tr: "durumsal ironi", tanim: "Beklenenin tersi gerçekleşir.", ornek: "Müjde getiren haberci, haberiyle Oedipus’u yıkar." }
          ] },
        { tip: "ikili", sol: { ikon: "👁️", baslik: "*Dramatic irony*", maddeler: ["Seyirci bilir, karakter bilmez", "Gerilim bilgi farkından gelir"] },
          sag: { ikon: "🔄", baslik: "*Situational irony*", maddeler: ["Beklenenin tersi olur", "Sonuç, niyetin tersidir"] },
          oyun: [
            { metin: "Oedipus katili lanetler; seyirci katilin kendisi olduğunu bilir.", cevap: "sol", neden: "Karakter bilmez, seyirci bilir: *dramatic irony*." },
            { metin: "Müjde getiren haberci, haberiyle Oedipus’u yıkar.", cevap: "sag", neden: "Beklenen rahatlama yerine yıkım gelir: *situational irony*." },
            { metin: "Oedipus kör Teiresias’ı “karanlıkta yaşıyor” diye aşağılar; seyirci kimin gerçekten kör olduğunu bilir.", cevap: "sol", neden: "Oedipus bilmez; seyirci bilir (görme–körlük ironisi)." },
            { metin: "Şehri kurtaran bilge, şehrin derdinin kaynağı çıkar.", cevap: "sag", neden: "Kurtarıcının felaketin sebebi olması beklenenin tersidir." }
          ] },
        { tip: "tuzak", baslik: "Sürpriz tuzağı", metin: "Yunan seyirci mitosu zaten bilirdi.", yanlis: "Dramatik ironi, seyircinin sonu hiç beklemediği bir olay örgüsü hilesidir.", dogru: "Seyirci karakterden fazlasını bilir. Gerilim “ne olacak”tan değil, “nasıl olacak”tan gelir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *Dramatic irony occurs when the audience knows more than the character.*", metin: "Tanım." },
            { ikon: "✍️", baslik: "*Oedipus’s curse on the murderer is dramatic irony because he is cursing himself.*", metin: "En bilinen örnek." },
            { ikon: "✍️", baslik: "*The messenger’s news is situational irony: comfort becomes catastrophe.*", metin: "İkinci tür." }
          ] }
      ]
    },
    {
      baslik: "Seyirci ve Oedipus: bilgi uçurumu",
      kisa: "Dramatik ironi, seyircinin bilgisi ile Oedipus’un bilgisi arasındaki boşluktur.",
      bloklar: [
        { tip: "grafik", baslik: "Seyirci ile Oedipus’un bilgisi", xlabel: "Sahne", ylabel: "Gerçeği bilme", xmax: 7, ymax: 10,
          xticks: [{ v: 1, label: "Prolog" }, { v: 2, label: "Ep.1" }, { v: 3, label: "Ep.2" }, { v: 4, label: "Ep.3" }, { v: 5, label: "Ep.4" }, { v: 6, label: "Exodos" }],
          yticks: [{ v: 1, label: "bilmez" }, { v: 9, label: "bilir" }],
          ogeler: [
            { id: "gap", tip: "alan", renk: 0, noktalar: [[1, 8.8], [2, 8.8], [3, 8.8], [4, 8.8], [5, 8.8], [4, 4], [3, 2.8], [2, 1.2], [1, 0.5]], gizli: true },
            { id: "s", tip: "cizgi", renk: 1, etiket: "Seyirci", from: [1, 8.8], to: [6, 8.8], gizli: true },
            { id: "o", tip: "egri", renk: 3, etiket: "Oedipus", noktalar: [[1, 0.5], [2, 1.2], [3, 2.8], [4, 4], [4, 4], [4, 4]], gizli: true },
            { id: "yz", tip: "yazi", x: 2.7, y: 6.2, metin: "dramatik ironi alanı", gizli: true }
          ],
          durumlar: [
            { metin: "Seyirci mitosu bilir: bilgisi baştan yüksektir.", goster: ["s"] },
            { metin: "Oedipus çok az bilir; her sahnede biraz öğrenir.", goster: ["o"] },
            { metin: "Aradaki boşluk dramatik ironidir. Oedipus’un her sözü seyirci için ikinci bir anlam taşır.", goster: ["gap", "yz"] },
            { metin: "Fourth Episode’da çoban konuşunca çizgiler birleşir: ironi biter, geriye acıma ve korku kalır.", set: { o: { noktalar: [[1, 0.5], [2, 1.2], [3, 2.8], [4, 4], [5, 8.8], [6, 8.8]] } }, gizle: ["yz"] }
          ] },
        { tip: "tablo", baslik: "Oedipus ne yapıyor, seyirci ne biliyor? (Fagles satır no.)", head: ["Sahne", "Oedipus ne yapar?", "Seyirci ne bilir?"], rows: [
            ["Prologos (69–79)", "Halkın acısı için herkesten çok yas tuttuğunu ve katili bulacağını söyler", "Katil, söz verenin kendisidir"],
            ["First Episode (248–257, 280–284)", "Katile ve onu saklayanlara lanet eder; katil kendi evindeyse kendisine de dilediğini söyler", "Lanet kendi başına döner"],
            ["First Episode", "Laius’un öcünü “kendi babasınınki gibi” alacağını söyler", "Laius gerçekten onun babasıdır"],
            ["First Episode (422–423)", "Kör Teiresias’a “taş kör” der, alaya alır", "Kör olan, gerçeği göremeyen Oedipus’tur"],
            ["Third Episode", "Kendini Şans’ın (*Tyche*) çocuğu sayar, kökeninden utanmaz", "Şans değil, Laius ile Jocasta’nın oğludur"],
            ["Fourth Episode", "Çobanı konuşturmak için zorlar", "Duyacağı şey kendi yıkımıdır"]
          ], vurgu: 1 },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The audience knows the myth, so every confident statement of Oedipus is ironic.*", metin: "Seyircinin bilgisi." },
            { ikon: "✍️", baslik: "*Sophocles creates tension not through surprise but through the audience’s superior knowledge.*", metin: "Gerilimin kaynağı." },
            { ikon: "✍️", baslik: "*His vow to avenge Laius ‘as if for his own father’ is ironic, because Laius is his father.*", metin: "Vaadin ironisi." }
          ] }
      ]
    },
    {
      baslik: "Aralık konuşma sınavı: Quote Review biçimi",
      kisa: "Dört alıntıdan birini seç, 3 dakika planla, 4 dakika konuş.",
      bloklar: [
        { tip: "sayilar", ogeler: [
            { deger: 4, etiket: "alıntıdan birini seçersin" },
            { deger: 3, sonek: " dk", etiket: "planlama" },
            { deger: 4, sonek: " dk", etiket: "konuşma" },
            { deger: 25, sonek: " puan", etiket: "rubrik toplamı" }
          ] },
        { tip: "tablo", baslik: "Konuşma rubriği (25 puan)", head: ["Kriter", "Puan"], rows: [
            ["Konuşanı doğru belirleme", "2"],
            ["Alıntıyı ve oyundaki geniş önemini anlama", "15"],
            ["Doğal, duraksamasız konuşma", "3"],
            ["Zengin sözcük", "2"],
            ["Telaffuz ve dilbilgisi", "3"]
          ], vurgu: 1, not: "Görev: alıntıyı söyleyen karakteri belirt; sözlerin o karakter için ne anlama geldiğini VE oyunun bütünü içindeki daha geniş önemini anlat. Puanın 15’i ikinci kısımdadır." },
        { tip: "adimlar", baslik: "4 dakikayı böl (süre dağılımı önerisi, ek bilgi)", adimlar: [
            { baslik: "Planlama (3 dk)", metin: "Konuşanı yaz; sahneyi, bağlamı ve karakter için anlamı tek cümleye indir. Geniş önem için bir tema ya da araç seç (ironi, görme–körlük, kader–şans, kirlenme)." },
            { baslik: "Konuşan ve sahne (yaklaşık 30 sn)", metin: "İskelet: *This line is spoken by ___ in the ___ episode, when ___.*" },
            { baslik: "Karakter için anlam (yaklaşık 90 sn)", metin: "İskelet: *For ___, these words mean that ___, because ___.*" },
            { baslik: "Oyundaki geniş önem (yaklaşık 90 sn)", metin: "İskelet: *More broadly, the line matters because it shows the theme of ___ / creates dramatic irony, since ___.*" },
            { baslik: "Kapanış (yaklaşık 30 sn)", metin: "İskelet: *In short, this moment ___ the play’s central idea that ___.*" }
          ] },
        { tip: "tuzak", baslik: "Özetleme tuzağı", metin: "Puanın büyük kısmı alıntıyı yorumlamaya gider, olayı anlatmaya değil.", yanlis: "Alıntının geçtiği sahneyi baştan sona anlatırsam yeterli olur.", dogru: "Önce kim söylüyor, sonra bu sözler o karakter için ne anlama geliyor, sonra oyunun bütününde neden önemli: ikinci ve üçüncü kısım 15 puanlık kısımdır." }
      ]
    },
    {
      baslik: "Alıntı bankası: temalar ve konuşanlar",
      kisa: "Öğretmenin çalışma bankası alıntıları temaya, konuşana ve sahneye göre öğren.",
      bloklar: [
        { tip: "tablo", baslik: "Çalışma bankası temaları (parafraz; alıntı yok)", head: ["Tema", "Konuşan", "Sahne", "Geniş önem"], rows: [
            ["Körlük–görme ve dilenci–zengin tersine dönüşü", "Teiresias", "First Episode (474–489)", "Oedipus gören ve zengin gelmiştir, kör ve yoksul gidecek: görme–körlük ironisi"],
            ["Salgın ve katile lanet fermanı", "Oedipus", "Prologos–First Episode", "Dramatik ironi: kendini lanetlemektedir"],
            ["Kavşakta herkesi öldürdüğünü anlatan öfke", "Oedipus", "Second Episode", "Öfke hamartia’sı; kendi geçmişiyle yüzleşmeye başlar"],
            ["Sakin müdahale", "Creon (Jocasta ile birlikte)", "Second Episode", "Creon, Oedipus’un öfkesine *foil*"],
            ["“Aklını kaybetmişsin” uyarısı", "Koro", "Creon tartışması çevresi", "Koro sağduyuyu temsil eder"],
            ["Creon’u komploculukla suçlama", "Oedipus", "Second Episode (573 sonrası)", "Paranoya ve acelecilik"],
            ["Sfenks’i kendi zekâsıyla yenme", "Oedipus", "Teiresias sahnesi", "Gurur; zekâsı onu kendisine karşı kör eder"],
            ["“Krallık istemem” savunması", "Creon", "Second Episode (663–665)", "Creon güce hırslı değildir"],
            ["Kehanetlere artık saygı duymama", "Jocasta", "Second Episode (778–782)", "Rastlantıya güven; kehanet gerçekleşir"],
            ["Şans’ın (*Tyche*) oğlu olduğunu söyleme ve köken ısrarı", "Oedipus", "Third Episode", "Kader, şans ve kimlik teması"]
          ], not: "Satır numaraları sınıfın Fagles baskısına göredir; Jebb ve Storr numaraları Yunanca metne göre verildiği için kayar. Konuşmada satır numarası saymak rubrikte yok, sahneyi bilmek yeter." },
        { tip: "tablo", baslik: "Ek alıştırma listesi (Fagles satır no.; kısa parafraz)", head: ["Satır", "Kim · ne söylüyor?", "Önemi"], rows: [
            ["39–41", "Rahip: halk Oedipus’u tanrılara denk görmez ama insanların ilki sayar", "Oedipus’un statüsü; sonraki düşüş"],
            ["66–67", "Rahip: boş bir ülkeyi değil yaşayan halkı yönet", "Krallık görevi"],
            ["73–76", "Oedipus: halkın acısı için herkesten çok yas tutar", "Halkını sevmesi; ironi"],
            ["113–114", "Creon: katil sürgün edilecek ya da kana kan ödenecek", "Apollo’nun buyruğu, *miasma*"],
            ["245–247", "Oedipus: dualarınıza karşılık vereyim, beni dinleyin", "Tanrıların işini üstlenir gibi; çeviri farkı örneği"],
            ["280–284", "Oedipus: katile lanet eder", "Dramatik ironi"],
            ["359–362", "Teiresias: gerçeği bilmek, işe yaramazsa korkunçtur", "Bilgi bir yüktür"],
            ["388–389", "Teiresias: olacak olur, sustuk diye değişmez", "Kader"],
            ["399–401", "Teiresias: Oedipus ülkenin kirleticisidir", "*Miasma*, ilk açık suçlama"],
            ["422–423", "Oedipus: Teiresias’a “taş kör” der", "Görme–körlük ironisi"],
            ["427–430", "Teiresias: Oedipus’un düşüşü için Apollo yeter", "Tanrısal güç"],
            ["663–665", "Creon: tahta istek duymaz", "Foil, sağduyu"],
            ["778–782", "Jocasta: hiçbir insan geleceği bilemez", "Kehanet görüşü; şansa güven"],
            ["876–880", "Oedipus: Korinthos’tan kaçışını anlatır", "Kaçarken kehaneti gerçekleştirir"]
          ] },
        { tip: "ikili", sol: { ikon: "👑", baslik: "*Oedipus*", maddeler: ["Kral; lanet eder, suçlar, ısrar eder"] },
          sag: { ikon: "🧑‍⚖️", baslik: "*Creon*", maddeler: ["Sakin, savunmacı; sonda yönetimi devralır"] },
          oyun: [
            { metin: "Katile lanet eder ve onu saklayanları kovar.", cevap: "sol", neden: "Dramatik ironili lanet Oedipus’un." },
            { metin: "Kral olup tasa çekmektense bugünkü konumunu tercih ettiğini söyler.", cevap: "sag", neden: "Krallık savunması Creon’un." },
            { metin: "Teiresias ile Creon’u komplo kurmakla suçlar.", cevap: "sol", neden: "Acele suçlama Oedipus’un." },
            { metin: "Son sahnede Oedipus’a her şeyin efendisi olmaya çalışmamasını söyler.", cevap: "sag", neden: "Creon’un son sözü; Oedipus’un gururuna gönderme." }
          ] }
      ]
    },
    {
      baslik: "Yorum iskeletleri: kısa Jebb ve Storr alıntılarıyla",
      kisa: "Konuşanı söyle, karakter için anlamı çöz, oyundaki geniş önemi bağla.",
      bloklar: [
        { tip: "ornek", baslik: "Bir alıntıyı çözmek: Jocasta’nın şans sözü", durum: "Alıntı (Storr 1912, Third Episode): “Best live a careless life from hand to mouth.” Jebb 1887’de aynı yer: “the decrees of Fortune are supreme”. Kim söylüyor, ne anlama geliyor, neden önemli?",
          adimlar: [
            "Kim? Jocasta; Oedipus Polybus’un ölümünü duyunca kehanetin boş olduğunu söyleyerek onu rahatlatıyor.",
            "Karakter için anlam: Jocasta kehanete güvenmez, hayatı şansın yönettiğini düşünür, korkuyu bastırmak ister.",
            "Geniş önem: seyirci kehanetin gerçekleşeceğini bilir; güven ironiktir. Şans–kader teması ve çeviri farkı (*Fortune* ile *chance*).",
            "Bağlam ipucu: Jocasta aynı sahnenin biraz sonrasında gerçeği anlayacak; sözün ironisi bunu daha da keskinleştirir."
          ],
          sonuc: "Konuşmanın sırası: ==konuşan + karakter için anlam + geniş önem==. Bu not iskelettir; cümleleri sen kur." },
        { tip: "tablo", baslik: "Üç iskelet (boşlukları kendi bilginle doldur)", head: ["Alıntı", "Konuşan · sahne", "İskelet"], rows: [
            ["“thou hast eyes, / Yet see’st not in what misery thou art fallen” (Storr 1912)", "Teiresias · First Episode", "*Teiresias says this to ___ after ___. For him, the words mean ___. Broadly, they show the irony of ___ and foreshadow ___.*"],
            ["“A fell pollution that infests the land” (Storr 1912)", "Creon · Prologos", "*Creon reports Apollo’s command that ___. In the play, the pollution explains ___, and it is ironic because ___.*"],
            ["“all brought to pass, all true! / O light, may I behold thee nevermore!” (Storr 1912)", "Oedipus · Fourth Episode sonu", "*Oedipus says this when ___. It marks anagnorisis because ___, and the image of light connects to ___.*"]
          ], not: "Yalnız kısa Storr/Jebb alıntıları var; Fagles alıntısı yok. Okulun Fagles baskısındaki sözcükler farklı olabilir; konuşmada alıntıyı kendi sözcüklerinle de açıklayabilirsin." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *This line is spoken by ___ to ___ in the ___.*", metin: "Konuşanı belirt (2 puan)." },
            { ikon: "✍️", baslik: "*In the wider play, this moment matters because it shows ___.*", metin: "Geniş önem (15 puanın ikinci yarısı)." },
            { ikon: "✍️", baslik: "*The audience knows ___, so the speaker’s words are ironic.*", metin: "Dramatik ironi bağlantısı." },
            { ikon: "✍️", baslik: "Doğal konuşma için bağlaçlar: *which suggests · as a result · in contrast · this reinforces*", metin: "Duraksamayı azaltır (3 puan)." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Dramatic irony*: seyirci karakterden fazlasını bilir; *situational irony*: beklenenin tersi olur.",
            "Yunan seyirci mitosu bildiği için gerilim “nasıl olacak”tan gelir, sürprizden değil.",
            "Aralık konuşma sınavı: 4 alıntıdan 1’ini seç, 3 dk planla, 4 dk konuş.",
            "Konuşanı belirt (2); alıntıyı ve geniş önemini anla (15); doğal konuş (3); sözcük (2); telaffuz–dilbilgisi (3) = 25.",
            "Cevap sırası: konuşan, karakter için anlam, oyundaki geniş önem; olayı özetleyip bırakma.",
            "Alıntı bankası temaları: körlük–görme, katile lanet, komplo suçlaması, Creon’un savunması, Jocasta’nın kehaneti, Tyche’nin oğlu.",
            "Fagles satır no. ile Jebb/Storr (Yunanca) numaraları farklıdır; sahneyi bilmek yeter.",
            "Alıntı gerekirse yalnız kısa Jebb/Storr kullan; yorum iskeletini kendi sözlerinle doldur."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Oedipus curses Laius's killer without knowing that he himself is the killer, while the audience knows. Which device is this?",
      opts: ["Situational irony", "Verbal irony", "Dramatic irony", "Hubris"], a: 2,
      why: "Seyirci karakterden fazlasını bilir: *dramatic irony*. A çekici bir yanlış: *situational irony* beklenenin tersinin gerçekleşmesidir; burada asıl mesele bilgi farkıdır." },
    { q: "In the December quote-review speaking exam, what is the task?",
      opts: ["Write a five-paragraph essay in 60 minutes on one quotation", "Choose one of four quotes, plan for 3 minutes, speak for 4 minutes; name the speaker and explain the meaning and wider significance", "Recite two odes from memory", "Answer five multiple-choice questions on irony"], a: 1,
      why: "Sınav: 4 alıntıdan 1’ini seç, 3 dk planla, 4 dk konuş; konuşanı belirt, alıntının karakter için anlamını ve oyundaki geniş önemini anlat. A Mart’taki Catcher essay sınavını andırır; C Chorus Project’le karıştırılmıştır." },
    { q: "In the quote-review speaking rubric (25 points), which criterion is worth the most?",
      opts: ["Identifying the speaker correctly", "Natural, fluent speech without long pauses", "Rich vocabulary", "Understanding the quote and its wider significance in the play"], a: 3,
      why: "Rubrik: konuşan 2, alıntıyı ve geniş önemini anlama 15, akıcılık 3, sözcük 2, telaffuz–dilbilgisi 3. Konuşanı doğru belirlemek önemlidir ama yalnız 2 puandır." },
    { q: "Jocasta says it is best to live a careless life, since a mortal is at the mercy of chance with no knowledge of the future. Why is this ironic for the audience?",
      opts: ["She trusts chance while the audience knows the oracle is about to come true", "She admires the gods too much", "She knows the truth and is mocking Oedipus", "The audience agrees with her view"], a: 0,
      why: "Seyirci kehanetin doğru olduğunu bildiği için Jocasta’nın güvencesi ironik kalır. C yanlıştır: Jocasta o anda gerçeği bilmez; anlaması hemen sonraki adımda gelir." },
    { q: "Teiresias tells Oedipus: “thou hast eyes, / Yet see'st not in what misery thou art fallen” (Storr 1912). Who is the speaker, and what does the line illustrate?",
      opts: ["Creon, showing his calm reason", "Jocasta, showing her trust in chance", "Teiresias, showing the sight and blindness irony: the blind seer sees more than the king", "The chorus, showing its confusion"], a: 2,
      why: "Söz Teiresias’ındır (First Episode). Kör kâhin, gözleri sağlam kralı gerçeği görmemekle suçlar: görme–körlük ironisi. Diğer şıklar yanlış konuşanlar ve temalardır." }
  ]
};
