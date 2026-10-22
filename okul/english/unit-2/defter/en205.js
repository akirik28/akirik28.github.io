/* Kitora not defteri · en205 · 2.5 Dramatik İroni ve Kilit Pasajlar
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (Oedipus Rex, "Quote Review") + oyunun standart sahne analizi. Alıntılar yalnızca R. C. Jebb çevirisinden (1887); v. = Yunanca metnin satır numarası. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en205",
  amac: "Bir sahne neden “iğneli”dir? Dramatik ironiyi tanımlayacak, oyunun başlıca ironilerini göreceksin. Sınavdaki *Quote Review* için en önemli sahneleri ve replikleri, kamuya açık Jebb çevirisinden kısa alıntılarla çalışacaksın.",
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
            { metin: "Oedipus kör Tiresias’ı “karanlıkta yaşıyor” diye aşağılar; seyirci kimin gerçekten kör olduğunu bilir.", cevap: "sol", neden: "Oedipus bilmez; seyirci bilir." },
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
            { metin: "Episode 4’te çoban konuşunca çizgiler birleşir: ironi biter, geriye acıma ve korku kalır.", set: { o: { noktalar: [[1, 0.5], [2, 1.2], [3, 2.8], [4, 4], [5, 8.8], [6, 8.8]] } }, gizle: ["yz"] }
          ] },
        { tip: "tablo", baslik: "Oedipus ne yapıyor, seyirci ne biliyor?", head: ["Sahne", "Oedipus ne yapar?", "Seyirci ne bilir?"], rows: [
            ["Prologos", "Katili bulup cezalandırmaya söz verir", "Katil, söz verenin kendisidir"],
            ["Episode 1", "Katile ve onu saklayanlara lanet eder; katil kendi evindeyse kendisine de dilediğini söyler", "Lanet kendi başına döner"],
            ["Episode 1", "Laius’un öcünü “kendi babasınınki gibi” alacağını söyler", "Laius gerçekten onun babasıdır"],
            ["Episode 1", "Kör Tiresias’ı alaya alır", "Kör olan, gerçeği göremeyen Oedipus’tur"],
            ["Episode 3", "Kendini “şansın oğlu” sayar, kökeninden utanmaz", "Şans değil, Laius ile Jocasta’nın oğludur"],
            ["Episode 4", "Çobanı konuşturmak için zorlar", "Duyacağı şey kendi yıkımıdır"]
          ], vurgu: 1 },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Sınavda böyle yaz: *The audience knows the myth, so every confident statement of Oedipus is ironic.*", metin: "Seyircinin bilgisi." },
            { ikon: "✍️", baslik: "*Sophocles creates tension not through surprise but through the audience’s superior knowledge.*", metin: "Gerilimin kaynağı." },
            { ikon: "✍️", baslik: "*His vow to avenge Laius ‘as if for his own father’ is ironic, because Laius is his father.*", metin: "Vaadin ironisi." }
          ] }
      ]
    },
    {
      baslik: "Quote Review (1): kehanet ve suçlama",
      kisa: "Her alıntı için sor: kim söyledi, nerede, hangi tema ve araç.",
      bloklar: [
        { tip: "tablo", baslik: "Prologos – Episode 3 (Jebb 1887)", head: ["Alıntı", "Kim · nerede", "Ne gösterir?"], rows: [
            ["“I, Oedipus renowned of all” (v. 8)", "Oedipus · Prologos", "Gururlu, kendinden emin kral; düşüşünü daha acı yapar. *Oedipus introduces himself with pride, which makes his fall more tragic.*"],
            ["“Alas, how dreadful to have wisdom where it profits not the wise!” (v. 316–17)", "Tiresias · Episode 1", "Bilgi bir yüktür. *Tiresias suggests that knowledge can be a burden.*"],
            ["“I say that thou art the slayer of the man whose slayer thou seekest.” (v. 362)", "Tiresias · Episode 1", "Gerçek ilk anda söylenir ama Oedipus duymaz. *Tiresias states the truth, but Oedipus refuses to hear it.*"],
            ["“thou hast sight, yet seest not in what misery thou art” (v. 412–13)", "Tiresias · Episode 1", "Görme–körlük zıtlığı. *The blind prophet sees more than the king with eyes.*"],
            ["“what should mortal fear, for whom the decrees of Fortune are supreme” (v. 977–78)", "Jocasta · Episode 3", "Rastlantıya güven; kehaneti küçümseme. *Jocasta’s confidence in chance is ironic, because the oracle is about to come true.*"]
          ], not: "v. = Yunanca metnin satır numarası (Jebb’in kenarında yazar). Okulun baskısındaki numara farklıysa onu kullan." },
        { tip: "ikili", sol: { ikon: "🧙", baslik: "*Tiresias*", maddeler: ["Kör kâhin", "Gerçeği söyler, bilgiyi yük sayar"] },
          sag: { ikon: "👸", baslik: "*Jocasta*", maddeler: ["Kraliçe", "Kehanete güvenmez, rastlantıya güvenir"] },
          oyun: [
            { metin: "“Alas, how dreadful to have wisdom where it profits not the wise!”", cevap: "sol", neden: "Bilgi yük: Tiresias." },
            { metin: "“what should mortal fear, for whom the decrees of Fortune are supreme”", cevap: "sag", neden: "Fortune’a güven: Jocasta." },
            { metin: "“thou hast sight, yet seest not in what misery thou art”", cevap: "sol", neden: "Görme–körlük zıtlığı: Tiresias." },
            { metin: "Kehanet önemli değil, korkma; kimse geleceği bilemez.", cevap: "sag", neden: "Korkuyu bastırmak ister: Jocasta." }
          ] },
        { tip: "tuzak", baslik: "Çeviri tuzağı", metin: "Sınıfta farklı bir çeviri kullanıyorsan sözcükler ve satır numaraları değişir.", yanlis: "Çeviri hangisi olursa olsun alıntıyı aynı sözcükler ve aynı satır numarasıyla yazarım.", dogru: "Sınavda ve ödevde okulun verdiği baskıdaki sözcükleri ve satır numaralarını kullan. Bu defterdeki Jebb alıntıları kamuya açık çeviriden örnektir." }
      ]
    },
    {
      baslik: "Quote Review (2): gerçeğin açığa çıkması ve son",
      kisa: "Oyunun son üçte biri anagnorisis, kendini suçlama ve koronun uyarısıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Episode 3 – Exodos (Jebb 1887)", head: ["Alıntı", "Kim · nerede", "Ne gösterir?"], rows: [
            ["“who hold myself son of Fortune that gives good” (v. 1080)", "Oedipus · Episode 3", "Kökenini bilmeden kendine güven. *Oedipus boasts about his origins without knowing the truth.*"],
            ["“All brought to pass—all true! Thou light, may I now look my last on thee” (v. 1182–83)", "Oedipus · Episode 4", "*Anagnorisis* anı; ışık imgesi. *Oedipus recognizes the truth, and light becomes a symbol of knowledge.*"],
            ["“Apollo, friends, Apollo was he that brought these my woes to pass” (v. 1329–30)", "Oedipus · Exodos", "Acıyı tanrıya bağlama. *Oedipus attributes his suffering to Apollo.*"],
            ["“Crave not to be master in all things” (v. 1522)", "Creon · Exodos", "Haddini aşma uyarısı; Creon’un sakin gücü. *Creon’s warning exposes Oedipus’s pride.*"],
            ["“call no one happy ... until he hath crossed life’s border, free from pain” (v. 1528–30)", "Koro · Exodos", "Kapanış; insan mutluluğunun kırılganlığı. *The chorus concludes that no one can be called happy before death.*"]
          ] },
        { tip: "ornek", baslik: "Bir alıntıyı sınavda çözmek", durum: "Soru: “All brought to pass—all true! Thou light, may I now look my last on thee” (v. 1182–83). Kim söylüyor, hangi sahnede ve ne anlama geliyor?",
          adimlar: [
            "Kim? Oedipus. Çoban konuşmuş ve Oedipus gerçeği anlamıştır.",
            "Nerede? Episode 4’ün sonu; hemen ardından koro şarkısı gelir.",
            "Anlam: Kehanetin her parçası gerçektir; Oedipus kim olduğunu görür. Bu, *anagnorisis* ve *peripeteia*’nın yan yana geldiği andır.",
            "Araç ve tema: ışık imgesi; Oedipus ışığa son kez bakar, çünkü bundan sonra “görmeyi” reddedecektir (kör eder)."
          ],
          sonuc: "Cevap üç parça taşır: ==kim + nerede + ne anlama geliyor==. Aracı adlandırırsan (*imagery*, *anagnorisis*) ek puan kazanırsın." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Dramatic irony*: seyirci karakterden fazlasını bilir; *situational irony*: beklenenin tersi olur.",
            "Yunan seyirci mitosu bildiği için gerilim “nasıl olacak”tan gelir, sürprizden değil.",
            "Oedipus’un lanetlediği katil kendisidir; vaadini “kendi babam için” der ve Laius onun babasıdır.",
            "Alıntı sorusunda üç soru sor: kim, nerede, ne gösteriyor (tema ve araç).",
            "Tiresias: bilgi yüktür ve “gözün var ama göremiyorsun”; Jocasta: rastlantıya güven.",
            "Oedipus: gurur (“renowned of all”), “şansın oğlu”, sonra “All brought to pass—all true!”.",
            "Creon: “her şeyin efendisi olmayı isteme”; koro: ölmeden kimseye mutlu deme.",
            "Çeviri ve satır numarası okulun baskısına göre yazılır; Jebb alıntıları örnektir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Oedipus, Laius’un katiline lanet eder ama kendisinin katil olduğunu bilmez; seyirci bilir. Bu hangi araçtır?",
      opts: ["*Situational irony*", "*Verbal irony*", "*Dramatic irony*", "*Hubris*"], a: 2,
      why: "Seyirci karakterden fazlasını bilir: *dramatic irony*. A çekici bir yanlış: *situational irony* beklenenin tersinin gerçekleşmesidir; burada asıl mesele bilgi farkıdır." },
    { q: "“Alas, how dreadful to have wisdom where it profits not the wise!” (Jebb 1887) sözü kim tarafından, hangi bağlamda söylenir?",
      opts: ["Oedipus, Prologos’ta halkına", "Tiresias, Episode 1’de Oedipus ondan bilgiyi isterken", "Creon, Delphoi’den dönerken", "Jocasta, Episode 3’te Oedipus’u rahatlatırken"], a: 1,
      why: "Söz Tiresias’ındır: gerçeği biliyor ama söylemek istemiyor. A, C ve D yanlış: Oedipus, Creon ve Jocasta bilgiyi bir yük olarak görmez; Oedipus ise tam tersine bilmek için ısrar eder." },
    { q: "Jocasta “what should mortal fear, for whom the decrees of Fortune are supreme” der (Jebb 1887). Bu söz seyirciye hangi ironiyi hissettirir?",
      opts: ["Rastlantıya güvenen Jocasta, kehanetin gerçekleşmek üzere olduğunu bilmeden konuşur", "Jocasta tanrılara büyük saygı gösterir", "Jocasta gerçeği bilir ve Oedipus’la alay eder", "Seyirci Jocasta ile aynı görüşte olur"], a: 0,
      why: "Seyirci kehanetin doğru olduğunu bildiği için Jocasta’nın güvencesi ironik kalır. C yanlıştır: Jocasta o anda gerçeği bilmez; anlaması bir sonraki adımda gelir." },
    { q: "“All brought to pass—all true! Thou light, may I now look my last on thee” sözü oyunda hangi olayın hemen ardından söylenir?",
      opts: ["Jocasta’nın ölüm haberinin gelmesi", "Tiresias’ın ilk suçlaması", "Polybus’un ölüm haberinin gelmesi", "Çobanın Oedipus’un Laius’un çocuğu olduğunu doğrulaması"], a: 3,
      why: "Bu söz *anagnorisis* anıdır: çoban konuşunca Oedipus kim olduğunu anlar. C başka bir sahneye aittir ve o haber Oedipus’a umut verir." },
    { q: "Korinthos’lu haberci Oedipus’u rahatlatmak için gelir; haberi onu yıkıma götürür. Bu hangi ironinin örneğidir?",
      opts: ["*Verbal irony*", "*Situational irony*", "*Dramatic irony* yalnızca", "*Foreshadowing*"], a: 1,
      why: "Beklenen sonucun (rahatlama) tersi gerçekleşir: *situational irony*. A yanlış: haberci alaycı konuşmaz. D yanlış: *foreshadowing* sonraki olaya önceden işarettir; burada olan beklenmeyen dönüştür." }
  ]
};
