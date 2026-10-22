/* Kitora not defteri · en206 · 2.6 Oedipus Üzerine Yazmak
   Kaynak: defter-araclari/kaynak/okul-10-2025-26.md (English: Reading & Writing rubriği, yapay zekâ kuralı). Hazır essay yoktur; yalnızca yapı, kriter ve cümle iskeleti. Alıntılar: R. C. Jebb çevirisi (1887). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "en206",
  amac: "Bu konu *Oedipus Rex* hakkında yazmayı öğretiyor: tezi nasıl kurarsın, paragrafı nasıl düzenlersin, alıntıyı nasıl yerleştirirsin ve essay’in iskeleti nasıl olur. Hazır metin yok; çünkü yazı senin sesinle yazılmalı.",
  bolumler: [
    {
      baslik: "Önce kural: yazı senin olmalı",
      kisa: "Okulda araştırmada ve yazmada üretken yapay zekâ yasak; yazı senin olmalı.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "İzinli (sınırlı)", maddeler: ["Düzen önerisi", "Kısaltma", "Yazım denetimi"] },
          sag: { ikon: "⛔", baslik: "Yasak", maddeler: ["Araştırma yapmak", "Yazı yazmak: tez, paragraf, essay"] },
          oyun: [
            { metin: "Paragraflarımın sırası mantıklı mı diye düzen önerisi istemek.", cevap: "sol", neden: "Düzen önerisi sınırlı kullanım içindedir." },
            { metin: "*Oedipus Rex* için tez cümlesini yapay zekâya yazdırmak.", cevap: "sag", neden: "Yazmak yasaktır; tez senin fikrin olmalı." },
            { metin: "Bitmiş taslağımda yazım hatalarını denetletmek.", cevap: "sol", neden: "Yazım denetimi sınırlı kullanım içindedir." },
            { metin: "Oyun hakkında kaynak ve alıntı bulmasını istemek.", cevap: "sag", neden: "Araştırma yasaktır; kaynağı kendin bulursun." },
            { metin: "Kendi yazdığım paragrafı biraz kısaltmak için yardım istemek.", cevap: "sol", neden: "Kısaltma sınırlı kullanım içindedir; içerik ve cümleler seninkidir." }
          ] },
        { tip: "not", metin: "Bu kural okulun araştırma ve yazma ödevleri için açıklandı. *Oedipus Rex* ödevinde ve sınavında da aynı çizgide kal; emin olmadığın bir kullanımı öğretmenine sor. Bu defter bu yüzden **hazır paragraf vermez**: sana yapı, kriter ve cümle iskeleti verir. Sınavda *Quote Review* için 2.5’teki alıntı tablolarıyla çalış." }
      ]
    },
    {
      baslik: "Tez: tartışılabilir bir iddia",
      kisa: "İyi tez özet ya da soru değil, kanıtla savunulacak bir iddiadır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "💪", baslik: "Güçlü tez", maddeler: ["Tartışılabilir bir iddia", "Araç ya da nedeni içerir"] },
          sag: { ikon: "🫥", baslik: "Zayıf (tez değil)", maddeler: ["Özet, soru ya da herkesin bildiği bilgi", "Belirsiz: “çok ilginç”"] },
          oyun: [
            { metin: "*Oedipus Rex*, Thebai kralı Oedipus’un kendi geçmişini araştırmasını anlatan bir oyundur.", cevap: "sag", neden: "Özet: kimse karşı çıkmaz, tartışılacak bir iddia yok." },
            { metin: "Sophocles, kör Tiresias ile gören Oedipus’u karşılaştırarak gerçek görmenin gözle değil bilgiyle olduğunu savunur.", cevap: "sol", neden: "İddia var, araç (karşılaştırma) var." },
            { metin: "Oedipus mu suçlu yoksa tanrılar mı?", cevap: "sag", neden: "Bu bir soru; cevabını tez olarak yazman gerekir." },
            { metin: "Oyunda çok dramatik ironi vardır.", cevap: "sag", neden: "Belirsiz: neden önemli, ne gösteriyor?" },
            { metin: "Oedipus’un düşüşünü kader kadar kendi öfkesi ve ısrarı hazırlar.", cevap: "sol", neden: "Tartışılabilir, kanıtlanabilir bir iddia." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Eser ve yazar", alt: "*Oedipus Rex*, Sophocles" }, "+",
            { t: "Tartışılabilir iddia", alt: "ne savunuyorsun?" }, "+",
            { t: "Araç ya da neden", alt: "nasıl gösteriyor?" }, "=",
            { t: "Tez", alt: "tek cümle" }
          ], aciklama: "İyi bir tez tek cümlede iddiayı ve onu kanıtlayacak yolu söyler." },
        { tip: "ornek", baslik: "Zayıf tezi güçlendirmek", durum: "Taslak tez: *Oedipus Rex is about fate.* Bunu güçlü bir teze çevir.",
          adimlar: [
            "Sorun: bu bir konu, iddia değil. Kendine sor: kader hakkında ne söylüyor?",
            "Cevabını seç: kader ile seçim iç içedir.",
            "Nasıl gösteriyor? Oedipus’un son konuşması: Apollo’yu suçlar ama kendi elini üstlenir (v. 1329–32).",
            "Hepsini tek cümlede birleştir."
          ],
          sonuc: "Model tez (yapıya bak, kopyalama): *In Oedipus Rex, Sophocles shows through Oedipus’s final speech that fate and choice work together, since he blames Apollo yet owns the act of blinding.* Sen kendi iddianı ve kendi kanıtını seç." },
        { tip: "tablo", baslik: "Tez açıları ve cümle iskeletleri", head: ["Açı", "Çıkış sorusu", "İskelet (boşlukları sen doldur)"], rows: [
            ["Kader–irade", "Sorumluluk kimde?", "*In Oedipus Rex, Sophocles suggests that ___ through ___.*"],
            ["Görme–körlük", "Gerçek görmek ne demek?", "*Sophocles uses the contrast between ___ and ___ to argue that ___.*"],
            ["Bilgi", "Bilmek kimi kurtarır?", "*By making Oedipus ___, Sophocles warns that knowledge ___.*"],
            ["İroni", "Seyirci neden gerilir?", "*Through dramatic irony, Sophocles ___.*"],
            ["Kirlenme", "Şehir neden hasta?", "*Sophocles presents ___ as the source of Thebes’s plague.*"]
          ] }
      ]
    },
    {
      baslik: "Paragraf: konu cümlesinden bağlantıya",
      kisa: "Her paragraf tek iddia taşır: konu cümlesi, bağlam, kanıt, analiz, bağlantı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Topic sentence", tr: "konu cümlesi", tanim: "Paragrafın ilk cümlesi; o paragrafın tezin hangi yönünü savunduğunu söyler. Rubrikte 5 puandır.", ornek: "Bu paragraf Tiresias ve Oedipus’un zıtlığını işler." },
            { ikon: "🔁", terim: "Paraphrase", tr: "parafraz", tanim: "Pasajı kendi sözlerinle, aynı anlamı koruyarak yeniden yazmak. Alıntı gibi kaynağı ve satır numarasını ister.", ornek: "“Tiresias bilmenin yararsız kaldığı yerde bilginin acı verdiğini söyler.”" }
          ] },
        { tip: "adimlar", baslik: "Beş parçalı paragraf iskeleti", adimlar: [
            { baslik: "1 · Konu cümlesi", metin: "Paragrafın iddiası. İskelet: *In [scene], Sophocles uses [device] to show that ___.*" },
            { baslik: "2 · Bağlam", metin: "Alıntıdan önce: kim, nerede, ne olmuş? İskelet: *When [character] ___, he/she ___.*" },
            { baslik: "3 · Kanıt", metin: "Kısa alıntı ya da parafraz ve satır numarası. İskelet: *[Character] says, “___” (Sophocles 000).*" },
            { baslik: "4 · Analiz", metin: "Alıntı neden önemli? Araç ve etki. İskelet: *This image suggests that ___ because ___.*" },
            { baslik: "5 · Bağlantı", metin: "Tezle bağla. İskelet: *Therefore, ___ supports the idea that ___.*" }
          ] },
        { tip: "grafik", baslik: "Bir paragrafta kelimeler nereye gider? (yaklaşık 210 kelime)", xlabel: "Parça", ylabel: "Kelime", xmax: 6, ymax: 100,
          xticks: [{ v: 1, label: "Konu" }, { v: 2, label: "Bağlam" }, { v: 3, label: "Kanıt" }, { v: 4, label: "Analiz" }, { v: 5, label: "Bağ." }],
          yticks: [{ v: 30, label: "30" }, { v: 60, label: "60" }, { v: 90, label: "90" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 2, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 0, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 36, metin: "30", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 31, metin: "25", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 46, metin: "40", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 96, metin: "90", gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 31, metin: "25", gizli: true }
          ],
          durumlar: [
            { metin: "Yaklaşık 210 kelimelik bir paragrafı parçalara bölelim. Oranlar yaklaşıktır." },
            { metin: "Konu cümlesi, bağlam ve kanıt kısadır: toplam yaklaşık 95 kelime.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 30], [0.65, 30]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 25], [1.65, 25]] }, b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 40], [2.65, 40]] } }, goster: ["t1", "t2", "t3"] },
            { metin: "Asıl yer analizindir: kelimelerin ==yaklaşık yarısı==. Olayı anlatmak değil, açıklamak puan getirir.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 90], [3.65, 90]] } }, goster: ["t4"] },
            { metin: "Kısa bir bağlantı cümlesiyle paragraf tezle kapanır.", set: { b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 25], [4.65, 25]] } }, goster: ["t5"] }
          ] },
        { tip: "tuzak", baslik: "Özet ve geçmiş zaman tuzağı", metin: "İki yaygın hata: olayı sırayla anlatmak ve fiilleri geçmiş zamanda yazmak.", yanlis: "Oedipus learned the truth, then he blinded himself.", dogru: "Her cümle iddiaya hizmet eder ve *literary present* kullanılır: *Oedipus blinds himself because ___.*" }
      ]
    },
    {
      baslik: "Alıntıyı yerleştirmek",
      kisa: "Alıntıyı kendi cümlenin içine yerleştir; önce bağlam ver, sonra çözümle.",
      bloklar: [
        { tip: "tablo", baslik: "Üç yerleştirme yöntemi (örnek alıntı: Jebb 1887)", head: ["Yöntem", "Ne zaman?", "Model cümle"], rows: [
            ["Bağlam + iki nokta", "Tam cümle alıntılayacaksan", "*Tiresias warns Oedipus that knowledge can hurt: “Alas, how dreadful to have wisdom where it profits not the wise!” (Sophocles 316–17).*"],
            ["Cümlenin içine yedirmek", "Kısa parça için (en iyisi)", "*Tiresias laments that it is “dreadful to have wisdom where it profits not the wise” (Sophocles 316–17).*"],
            ["Parafraz + numara", "Alıntı uzunsa", "*Tiresias regrets possessing a truth that can only wound (Sophocles 316–17).*"]
          ], not: "Alıntı 4 satırdan uzunsa blok alıntı olarak girintili yazılır. Satır numarasını okulun verdiği baskıya göre yaz; Jebb numaraları Yunanca metne göredir." },
        { tip: "ornek", baslik: "Havada kalan alıntıyı onarmak", durum: "Zayıf cümle: *Oedipus blames himself. “the hand that struck the eyes was none save mine” (Sophocles 1331–32).*",
          adimlar: [
            "Sorun: alıntı havada kalıyor; kim, ne zaman söylüyor belli değil.",
            "Bağlam ekle: *After the second messenger’s report, the blinded Oedipus tells the chorus that…*",
            "Alıntıyı cümlenin parçası yap: *…that “the hand that struck the eyes was none save mine” (Sophocles 1331–32).*",
            "Analizi sen yaz: *This admission shows that ___ because ___.*"
          ],
          sonuc: "Üç parçalı yapı: ==bağlam + alıntı + analiz==. Üçüncü parçayı kendi cümlenle sen yaz." },
        { tip: "tuzak", baslik: "Satır numarası tuzağı", metin: "Her çeviride sözcükler ve satır numaraları farklıdır.", yanlis: "Defterdeki Jebb alıntısını sınavda olduğu gibi ve aynı numarayla yazarım.", dogru: "Sınavda ve ödevde okulun verdiği baskıdaki sözcükleri ve satır numaralarını kullan. Defterdeki Jebb alıntıları kamuya açık çeviriden örnektir." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "Alıntıyı tanıtan fiiller: *states, warns, admits, laments, insists*", metin: "“Says” fiilini tekrar tekrar kullanma." },
            { ikon: "✍️", baslik: "Analiz fiilleri: *suggests, reveals, emphasizes, foreshadows, underscores*", metin: "Alıntıdan sonra bunlardan biriyle başla." },
            { ikon: "✍️", baslik: "Bağlantı kalıpları: *This reinforces… · As a result… · In contrast…*", metin: "Cümleleri birbirine bağlar." }
          ] }
      ]
    },
    {
      baslik: "Edebi araçlar ve analiz",
      kisa: "Puan için aracı adlandır, sahnede göster, etkisini açıkla.",
      bloklar: [
        { tip: "tablo", baslik: "Altı araç, *Oedipus Rex*’ten örnekler", head: ["Araç", "Oyunda", "Etki cümlesi"], rows: [
            ["*Dramatic irony*", "Oedipus katile lanet eder; katil kendisidir", "*This irony makes Oedipus’s confidence painful to watch.*"],
            ["*Foreshadowing*", "Tiresias gözlerin karanlığa gömüleceğini söyler", "*Tiresias’s warning foreshadows Oedipus’s self-blinding.*"],
            ["*Imagery*", "Işık, karanlık, görme", "*Light and dark imagery links sight to knowledge.*"],
            ["*Foil*", "Sakin Creon, öfkeli Oedipus", "*Creon’s calm highlights Oedipus’s temper.*"],
            ["*Symbolism*", "Üç yol kavşağı; Oedipus’un ayakları", "*The crossroads symbolizes the meeting of choice and fate.*"],
            ["*Structure*", "Soruşturma gibi ilerleyen olay örgüsü; sahne dışı şiddet", "*The detective-like structure pushes Oedipus toward his own guilt.*"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "❓", baslik: "Ne gösteriyor?", metin: "İskelet: *This detail shows that ___.*" },
            { ikon: "❓", baslik: "Neden burada?", metin: "İskelet: *Sophocles places this scene here to ___.*" },
            { ikon: "❓", baslik: "Seyirciye ne yaşatıyor?", metin: "İskelet: *The audience feels ___ because ___.*" }
          ] }
      ]
    },
    {
      baslik: "Essay iskeleti: beş paragraf",
      kisa: "Giriş, üç gövde paragrafı ve sonuç; her gövde tezin bir yönünü kanıtlar.",
      bloklar: [
        { tip: "adimlar", baslik: "Essay’in beş durağı", adimlar: [
            { baslik: "Giriş", metin: "Dikkat çeken ilk cümle, kısa bağlam (eser, yazar, konu), en sonda tez." },
            { baslik: "Gövde 1", metin: "Tezin ilk yönü: konu cümlesi, bağlam, alıntı, analiz, bağlantı." },
            { baslik: "Gövde 2", metin: "İkinci yön: aynı yapı, farklı sahne ya da araç." },
            { baslik: "Gövde 3", metin: "Üçüncü yön ya da karşı görüşü kabul edip yanıtlamak (*counterargument*)." },
            { baslik: "Sonuç", metin: "Tezi yeni sözlerle yeniden söyle ve geniş bir anlamla bitir; yeni kanıt ekleme." }
          ] },
        { tip: "tablo", baslik: "Boş şablon: tezini ve sahnelerini sen doldur", head: ["Paragraf", "Görevi", "Dolduracağın", "Fikir ipucu (cümle değil)"], rows: [
            ["Giriş", "Tezi söylemek", "Tez: ______", "Tez açıları tablosuna bak"],
            ["Gövde 1", "Birinci kanıt", "Sahne ___ · Alıntı ___ (v. ___) · Araç ___", "Kehanet ve Delphoi"],
            ["Gövde 2", "İkinci kanıt", "Sahne ___ · Alıntı ___ (v. ___) · Araç ___", "Kavşakta öfke, soruşturmada ısrar"],
            ["Gövde 3", "Üçüncü kanıt ya da karşı görüş", "Sahne ___ · Alıntı ___ (v. ___) · Araç ___", "Son konuşma: Apollo ve kendi el"],
            ["Sonuç", "Tezi geniş anlamla bağlamak", "Yeni bakış: ______", "Koronun son sözü"]
          ], not: "Fikir ipuçları örnek bir “kader ve seçim” tezi içindir. Kendi tezine göre kendi sahnelerini seç." },
        { tip: "liste", maddeler: [
            { ikon: "☑️", baslik: "Tezim tartışılabilir bir iddia mı?", metin: "Özet ya da soru değil." },
            { ikon: "☑️", baslik: "Her gövde konu cümlesiyle başlıyor mu?", metin: "Ve tezime bağlanıyor mu?" },
            { ikon: "☑️", baslik: "Her alıntı tanıtıldı ve çözümlendi mi?", metin: "Bağlam + alıntı + analiz." },
            { ikon: "☑️", baslik: "*Literary present* kullandım mı, araçları adlandırdım mı?", metin: "*Oedipus blinds himself…*, *dramatic irony*…" },
            { ikon: "☑️", baslik: "Satır numaraları okulun baskısına göre mi?", metin: "Ve metin benim sözlerim mi?" }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Yazmadan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Okulun kuralı: araştırmada ve yazmada üretken yapay zekâ yasak; yalnızca düzen önerisi, kısaltma ve yazım denetimi sınırlı kullanılabilir.",
            "Tez özet ya da soru değildir; eser + tartışılabilir iddia + araç/neden tek cümlede birleşir.",
            "Paragraf: konu cümlesi, bağlam, kanıt, analiz, bağlantı; kelimelerin yarısı analize gider.",
            "Özet yazma ve geçmiş zaman tuzağından kaçın: *literary present* kullan.",
            "Alıntıyı bağlam ve analizle birlikte yerleştir: bağlam + alıntı + analiz.",
            "Satır numarasını ve sözcükleri okulun verdiği baskıya göre yaz; Jebb alıntıları örnektir.",
            "Edebi araçları adlandır: *dramatic irony*, *foreshadowing*, *imagery*, *foil*, *symbolism*, *structure*.",
            "Essay: giriş (tezle biter), üç gövde, sonuç; yazı baştan sona senin sesinle olmalı."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi *Oedipus Rex* için en güçlü tezdir?",
      opts: ["*Oedipus Rex* Thebai kralının hikâyesidir.", "Sophocles, Oedipus’u gözleri açıkken kör, kör olunca gören biri yaparak bilginin bedelini gösterir.", "*Oedipus Rex*’te dramatik ironi vardır.", "Oedipus kaderinden kaçabilir miydi?"], a: 1,
      why: "B tartışılabilir bir iddia ve bir araç (zıtlık) içerir. A özettir, C belirsizdir (neden önemli?), D bir sorudur; cevabını tez olarak yazmak gerekir." },
    { q: "Bir öğrenci essay taslağını kendisi yazdı; yalnızca yazım hatalarını denetletti ve paragraf sırası için öneri aldı. Okulun kuralına göre bu davranış nasıl değerlendirilir?",
      opts: ["Her koşulda yasaktır", "Taslağı yazdırmak da izinlidir", "Araştırma için kullanmak da izinlidir", "Yazı öğrencinin kendisine ait kaldığı ve yalnızca düzen ile yazım desteği alındığı için sınırlı kullanım içindedir"], a: 3,
      why: "Kurala göre düzen önerisi, kısaltma ve yazım denetimi sınırlı olarak kullanılabilir; araştırma ve yazma yasaktır. B ve C yasak olan işleri izinli sayar. Emin olmadığın durumda öğretmenine sor." },
    { q: "Hangi cümle alıntıyı en doğru biçimde yerleştirmiştir?",
      opts: ["After the second messenger’s report, the blinded Oedipus tells the chorus that “the hand that struck the eyes was none save mine” (Sophocles 1331–32).", "Oedipus blames himself. “the hand that struck the eyes was none save mine”", "“the hand that struck the eyes was none save mine” Oedipus blinded himself.", "Oedipus blinded himself because of the prophecy and it was very sad."], a: 0,
      why: "A bağlam, alıntı ve satır numarasını tek cümlede toplar. B alıntıyı havada bırakır ve numara yoktur; C alıntıyı cümlenin dışına atar; D alıntısızdır ve geçmiş zamandadır." },
    { q: "Bir öğrenci paragrafında 150 kelimeyi olay özetine, 30 kelimeyi analize ayırmış. En doğru düzeltme hangisidir?",
      opts: ["Daha uzun bir özet eklemek", "Özeti kısaltıp bağlamı iki cümleye indirmek ve analizi büyütmek", "Alıntıyı silmek", "Yalnızca bağlantı cümlesini uzatmak"], a: 1,
      why: "Puan kanıt ve analizden gelir; özet değer katmaz. A durumu kötüleştirir, C kanıtı yok eder, D analizdeki eksiği kapatmaz." },
    { q: "“Creon sakindir, Oedipus öfkelidir” cümlesindeki karşılaştırma hangi edebi aracı gösterir?",
      opts: ["*Symbolism*", "*Foreshadowing*", "*Foil*: Creon’un sakinliği Oedipus’un öfkesini öne çıkarır", "*Catharsis*"], a: 2,
      why: "*Foil*, bir karakteri zıttıyla parlatmaktır. A simgedir, B önceden işarettir, D seyircinin arınmasıdır; hiçbiri iki karakterin karşılaştırılmasını anlatmaz." }
  ]
};
