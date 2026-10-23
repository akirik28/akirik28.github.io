/* Kitpath not defteri · py207 · 2.7 Unutma ve Diğer Bellek Sorunları
   Kaynak: AP Psychology CED 2024, Topic 2.7 (2.7.A.1–4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py207",
  amac: "Bu konu belleğin neden başarısız olduğunu ve bazen yanıldığını anlatıyor. Ebbinghaus'un unutma eğrisini, kodlama başarısızlığı, müdahale, dilimin ucunda olma ve bastırma gibi unutma nedenlerini, yanlış bilgi etkisi, kaynak amnezisi ve yapılandırıcı belleği öğreneceksin.",
  bolumler: [
    {
      baslik: "Unutma eğrisi: hızlı başlar, yavaşlar",
      kisa: "Öğrenmeden sonra unutma çok hızlıdır, sonra yatay bir hale gelir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📉", terim: "Forgetting curve", tr: "unutma eğrisi", tanim: "Öğrenmeden sonra geçen zamanla bilginin ne kadar kaldığını gösteren eğri. Unutma ==öğrenmeden hemen sonra hızlıdır==, zamanla yavaşlar.", ornek: "Yeni öğrendiğin bilginin önemli bir kısmı ilk saatlerde kaybolur; kalan kısım uzun süre durur." },
            { ikon: "🔬", terim: "Ebbinghaus", tr: "Hermann Ebbinghaus", tanim: "Eğriyi kendisi anlamsız hecelerle ölçen ilk araştırmacı. Ne kadar tasarruf (yeniden öğrenme kolaylığı) ettiğini ölçtü; biz kolaylık için \"hatırlanan\" diyeceğiz.", ornek: "BAF, KOZ gibi anlamsız heceleri öğrenip belli aralıklarla sınanmak." }
          ] },
        { tip: "grafik", baslik: "Ebbinghaus eğrisi (yaklaşık değerler)", xlabel: "Öğrenmeden sonra geçen süre", ylabel: "Hatırlanan", xmax: 50, ymax: 10,
          xticks: [{ v: 1, label: "1 sa" }, { v: 9, label: "9 sa" }, { v: 24, label: "1 gün" }, { v: 48, label: "2 gün" }],
          yticks: [{ v: 3, label: "%30" }, { v: 6, label: "%60" }, { v: 10, label: "%100" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "Tekrarsız", noktalar: [[0, 10], [0.33, 5.8], [1, 4.4], [9, 3.6], [24, 3.4], [48, 2.8]], gizli: true },
            { id: "d", tip: "egri", renk: 2, etiket: "Tekrarla", noktalar: [[24, 10], [25, 8], [30, 6.6], [48, 5.5]], gizli: true },
            { id: "n1", tip: "nokta", x: 0.33, y: 5.8, etiket: "20 dk: ~%58", kilavuz: true, gizli: true },
            { id: "yz", tip: "yazi", x: 30, y: 9.2, metin: "Tekrar eğriyi yataylaştırır", gizli: true }
          ],
          durumlar: [
            { metin: "Öğrenme anında hatırlanan yaklaşık %100; sonra eğri hızla düşer.", goster: ["e"] },
            { metin: "Daha ilk 20 dakikada bilginin ==kabaca yarıdan fazlası== korunuyor; kayıp ilk saatlerde en hızlı.", goster: ["n1"] },
            { metin: "Düşüş sonra yavaşlar ve eğri yatay bir hâle gelir: unutma zamanla ==yavaşlar==.", goster: [] },
            { metin: "Bir gün sonra yapılan bir tekrar, eğriyi yeniden yukarı çeker ve sonraki düşüşü yavaşlatır.", goster: ["d", "yz"] }
          ] },
        { tip: "tuzak", metin: "Eğrinin biçimi önemli: unutma bir doğru çizgi gibi gitmez.", yanlis: "Unutma zamanla sabit bir hızla gerçekleşir.", dogru: "Unutma ==başta çok hızlı==, sonra giderek yavaş olur; eğri sağa doğru yatayla birleşir." }
      ]
    },
    {
      baslik: "Unutmanın üç yolu: kodlama, müdahale, geri getirme",
      kisa: "Bilgi hiç kaydedilmemiş, başka bilgiyle karışmış ya da erişilemiyor olabilir.",
      bloklar: [
        { tip: "harita", merkez: "Neden hatırlayamıyoruz?", dallar: [
            { baslik: "*Encoding failure*", alt: "Bilgi bellekte hiç depolanmadı; dikkat verilmedi" },
            { baslik: "*Interference*", alt: "Başka bir bilgi araya girdi: *proactive* ya da *retroactive*" },
            { baslik: "Yetersiz geri getirme", alt: "Bilgi içeride ama erişilemiyor: *tip-of-the-tongue*" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "👁️", terim: "Encoding failure", tr: "kodlama başarısızlığı", tanim: "Bilginin hiç belleğe alınmaması; bu yüzden geri getirilecek bir şey yoktur.", ornek: "Her gün kullandığın bozuk paranın üstündeki yazıyı hiç dikkatle okumadığın için anlatamamak." },
            { ikon: "👅", terim: "Tip-of-the-tongue phenomenon", tr: "dilimin ucunda olma", tanim: "Bir bilgiyi bildiğini kesin hissetmek ama o an çıkaramamak. Çoğu zaman ilk harf ya da benzer sesler gibi ipuçlarıyla çözülür.", ornek: "Yazarın adını biliyorsun, \"M ile başlıyor\" diyorsun ama söyleyemiyorsun." }
          ] },
        { tip: "tuzak", metin: "Her unutma bilginin bellekten silinmesi demek değildir.", yanlis: "Hatırlayamadığımız bilgi her zaman bellekten silinmiştir.", dogru: "Bilgi bazen ==hiç kodlanmamıştır== (*encoding failure*), bazen içeridedir ama ==erişilemiyordur== (yetersiz geri getirme, *tip-of-the-tongue*)." }
      ]
    },
    {
      baslik: "Müdahale: eski yeniyi mi, yeni eskiyi mi bozar?",
      kisa: "Proaktif müdahale eskiden yeniye, retroaktif müdahale yeniden eskiye doğrudur.",
      bloklar: [
        { tip: "tablo", baslik: "İki müdahale türü", head: ["Tür", "Yön", "Örnek"], rows: [
            ["*Proactive interference*", "ESKİ bilgi YENİ bilgiyi bozar", "Eski şifren, yeni şifreni öğrenmeni zorlaştırır"],
            ["*Retroactive interference*", "YENİ bilgi ESKİ bilgiyi bozar", "Yeni telefon numaranı öğrenince eskisini hatırlayamazsın"]
          ], not: "\"Pro\" ileriye (eski bilgi yeniyi engeller), \"retro\" geriye (yeni bilgi eskiyi engeller) bakar." },
        { tip: "ikili", sol: { ikon: "➡️", baslik: "*Proactive interference*", maddeler: ["Eskiden öğrenilen, yeni öğrenileni bozar", "Kaynak: geçmiş"] },
          sag: { ikon: "⬅️", baslik: "*Retroactive interference*", maddeler: ["Yeni öğrenilen, eskiden öğrenileni bozar", "Kaynak: yeni bilgi"] },
          oyun: [
            { metin: "Fransızca öğrenirken, daha önce öğrendiğin İspanyolca kelimeler karışıyor.", cevap: "sol", neden: "Eski bilgi yeni öğrenmeyi bozuyor: *proactive*." },
            { metin: "Yeni öğrendiğin kantin şifresi yüzünden eski kilit şifreni hatırlayamıyorsun.", cevap: "sag", neden: "Yeni bilgi eskiyi bozuyor: *retroactive*." },
            { metin: "Kimya çalıştıktan sonra, bir önceki akşam çalıştığın fizik formüllerini karıştırıyorsun.", cevap: "sag", neden: "Yeni (kimya) eskiyi (fizik) bozuyor: *retroactive*." },
            { metin: "Eski arabanın park yeri alışkanlığın, yeni apartmanda park yerini öğrenmeni zorlaştırıyor.", cevap: "sol", neden: "Eski alışkanlık yeni bilgiyi bozuyor: *proactive*." }
          ] },
        { tip: "tuzak", metin: "İki adı karıştırmak çok kolay: akılda tutulacak şey bilginin yönü.", yanlis: "*Retroactive interference*, eski bilginin yeni bilgiyi bozmasıdır.", dogru: "==*Retroactive*==: yeni bilgi eskiyi bozar. ==*Proactive*==: eski bilgi yeniyi bozar." }
      ]
    },
    {
      baslik: "Bastırma: *repression*",
      kisa: "Psikodinamik kurama göre ego, sıkıntı veren anıları bilinçdışına iter.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔒", terim: "Repression", tr: "bastırma", tanim: "Psikodinamik kuramcılara göre, kaygı ve sıkıntı veren anıların egoyu korumak için bilinçdışına itilmesi.", ornek: "Çok utandığın bir olayı, bir daha aklına gelmeyecek biçimde \"unutmak\"." }
          ] },
        { tip: "not", metin: "Bu açıklama klasik psikodinamik kuramın bir iddiasıdır; laboratuvarda test etmek zordur ve bellek araştırmacıları arasında ==tartışmalıdır==. Sınavda \"ego'yu korumak için unutma\" cümlesi aradığın ipucudur." },
        { tip: "tuzak", metin: "Unutmak istemekle bastırma aynı şey sanılır.", yanlis: "*Repression*, bir şeyi bilinçli olarak aklından atmaya çalışmaktır.", dogru: "Bastırma bilinçdışıdır; kişi bunu yaptığının farkında değildir. Bilinçli olarak düşünmemeye çalışmak başka bir şeydir." }
      ]
    },
    {
      baslik: "Yanlış bilgi etkisi ve kaynak amnezisi",
      kisa: "Sonradan gelen yanlış bilgi anıyı değiştirir; kaynağı karıştırmak da bellek hatasıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💬", terim: "Misinformation effect", tr: "yanlış bilgi etkisi", tanim: "Olaydan sonra gelen yanıltıcı bilgi ya da soruların, olay anısını değiştirmesi.", ornek: "\"Çarpıştığında\" diye sorulunca olay daha şiddetli hatırlanır." },
            { ikon: "❓", terim: "Source amnesia", tr: "kaynak amnezisi", tanim: "Bir bilginin kendisini hatırlayıp nereden öğrenildiğini yanlış hatırlamak.", ornek: "Bir haberi kesin biliyorsun ama arkadaşından mı, bir diziden mi duyduğunu karıştırıyorsun." }
          ] },
        { tip: "sekil", baslik: "Soruda kullanılan fiil hız tahminini değiştirdi (klasik deney, yaklaşık)", fig: { type: "bar", cats: ["contacted", "hit", "bumped", "collided", "smashed"], series: [{ name: "Tahmin edilen hız (mph)", values: [32, 34, 38, 39, 41] }], ylabel: "mph" } },
        { tip: "tuzak", metin: "İki bellek hatası sınavda birbirine karıştırılabilir.", yanlis: "*Source amnesia*, bir bilginin kendisini tamamen unutmaktır.", dogru: "*Source amnesia*'da içerik hatırlanır ama ==kaynağı yanlış== hatırlanır. *Misinformation effect*'te ise sonradan gelen yanlış bilgi ==anının kendisini değiştirir==." }
      ]
    },
    {
      baslik: "Yapılandırıcı bellek ve hayal enflasyonu",
      kisa: "Bellek video kaydı değil; anılar her hatırlanışta yeniden kurulur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏗️", terim: "Constructive memory", tr: "yapılandırıcı bellek", tanim: "Anıların kayıt gibi saklanmayıp, hatırlama sırasında parçalardan yeniden kurulması. Boşluklar tahminlerle doldurulabilir.", ornek: "Çocukluk anını anlatırken ayrıntıları farkında olmadan tamamlıyorsun." },
            { ikon: "🧱", terim: "Memory consolidation", tr: "bellek pekiştirme", tanim: "Yeni bir anının zamanla kalıcı bir bellek izine dönüşmesi. Bu sırada anı ayrıntılarla değişebilir ve yeniden yapılandırılabilir.", ornek: "Bir olayı günlerce anlatırsan anı \"oturur\" ve kendi hikâyene dönüşür." },
            { ikon: "💭", terim: "Imagination inflation", tr: "hayal enflasyonu", tanim: "Bir olayı tekrar tekrar hayal etmenin, o olayın gerçekten yaşandığına olan güveni artırması.", ornek: "Hiç gitmediğin bir tatili sık sık hayal edince \"gitmiştik\" diye hatırlamak." }
          ] },
        { tip: "adimlar", baslik: "Hayal ettikçe gerçek gibi olur", adimlar: [
            { baslik: "Hayal", metin: "Çocukken bir parkta kaybolduğunu düşünüp canlandırırsın." },
            { baslik: "Tekrar", metin: "Her canlandırmada ayrıntılar zenginleşir ve tanıdık gelmeye başlar." },
            { baslik: "Güven", metin: "Anı \"gerçekten yaşanmış\" gibi hissettirir: ==*imagination inflation*==." }
          ] },
        { tip: "tuzak", metin: "\"Canlı hatırlıyorum\" hissi doğruluğu garanti etmez.", yanlis: "Bir anıyı çok canlı ve kendinden emin hatırlıyorsak mutlaka doğrudur.", dogru: "Güven ve canlılık ==doğruluğu garanti etmez==; yapılandırıcı bellek, yanlış bilgi ve hayal enflasyonu da güvenli ama yanlış anılar üretir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Unutma eğrisi: unutma öğrenmeden hemen sonra hızlı, sonra yavaş; tekrar eğriyi yataylaştırır.",
            "Unutma nedenleri: *encoding failure*, müdahale, yetersiz geri getirme (*tip-of-the-tongue*).",
            "*Proactive*: eski yeniyi bozar; *retroactive*: yeni eskiyi bozar.",
            "*Repression*: psikodinamik kurama göre egoyu korumak için bilinçdışı unutma.",
            "*Misinformation effect*: sonradan gelen yanlış bilgi anıyı değiştirir. *Source amnesia*: kaynağı karıştırmak.",
            "*Constructive memory*: anılar hatırlarken yeniden kurulur. *Imagination inflation*: hayal etmek güveni artırır.",
            "Canlılık ve güven, anının doğruluğunu garanti etmez."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Grafik, bir öğrencinin öğrendiği bilginin ne kadarının hatırlandığını zamana göre göstermektedir. Eğriyle ilgili aşağıdakilerden hangisi doğrudur?",
      fig: { type: "graph", xlabel: "Geçen süre", ylabel: "Hatırlanan", xmax: 10, ymax: 10, lines: [{ from: [0, 10], to: [1, 6], label: "" }, { from: [1, 6], to: [3, 4.5], label: "" }, { from: [3, 4.5], to: [6, 3.8], label: "" }, { from: [6, 3.8], to: [10, 3.4], label: "" }], xticks: [{ v: 1, label: "kısa" }, { v: 5, label: "orta" }, { v: 9, label: "uzun" }], yticks: [{ v: 3.5, label: "%35" }, { v: 6, label: "%60" }, { v: 10, label: "%100" }] },
      opts: ["Unutma zamanla sabit bir hızla gerçekleşir", "Unutma öğrenmeden sonra yavaş başlar ve giderek hızlanır", "Unutma öğrenmeden hemen sonra hızlıdır, zamanla yavaşlar", "Unutma yalnızca ilk anlarda olur, sonra hiç olmaz"],
      a: 2,
      why: "Eğri başta dik düşüyor, sonra yataylaşıyor: unutma önce hızlı, sonra yavaş. En çekici yanlış şık D: eğri yatay hale gelse de sıfıra eşit değil; unutma azalarak sürer." },
    { q: "Deniz yeni telefon numarasını öğrendikten sonra eski numarasını hatırlayamıyor. Bu durum en iyi hangi kavramla açıklanır?",
      opts: ["*Proactive interference*", "*Retroactive interference*", "*Repression*", "*Source amnesia*"],
      a: 1,
      why: "Yeni bilgi eski bilginin geri getirilmesini bozuyor: *retroactive interference*. En çekici yanlış şık A: *proactive* tersidir, eski bilgi yeniyi bozar." },
    { q: "Ali, \"okullarda kırk dakikalık ders daha verimli\" bilgisini kesin olarak doğru biliyor, ama bu bilgiyi bir arkadaşından mı, bir videodan mı, bir makaleden mi duyduğunu hatırlayamıyor. Bu durum hangi bellek hatasıdır?",
      opts: ["*Misinformation effect*", "*Imagination inflation*", "*Repression*", "*Source amnesia*"],
      a: 3,
      why: "Bilginin içeriği hatırlanıyor, kaynağı karıştırılıyor: *source amnesia*. En çekici yanlış şık A: *misinformation effect*'te anının kendisi sonradan gelen yanlış bilgiyle değişir; burada böyle bir değişim yok." },
    { q: "Tanıklara bir trafik kazası videosu izletilip ardından bir gruba \"araçlar birbirine çarptığında ne kadar hızlıydı?\", diğer gruba \"araçlar birbirine değdiğinde ne kadar hızlıydı?\" soruluyor. \"Çarptığında\" grubu daha yüksek hız tahmin ediyor. Bu sonuç hangi kavramı örneklendirir?",
      opts: ["*Misinformation effect*", "*Proactive interference*", "*Tip-of-the-tongue phenomenon*", "*Encoding failure*"],
      a: 0,
      why: "Olaydan sonra sorunun kelime seçimi anıyı değiştirmiştir: *misinformation effect*. En çekici yanlış şık D: *encoding failure*, bilginin hiç kodlanmaması demektir; burada anı var ama değişmiş." },
    { q: "Bir öğrenci, kitabını okuduğundan emin olduğu yazarın adını söyleyemiyor; \"M harfiyle başlıyor, iki hece\" diyor ama bir türlü bulamıyor. Birkaç saat sonra adı bir anda aklına geliyor. Bu durum en iyi nasıl açıklanır?",
      opts: ["*Encoding failure*", "*Retroactive interference*", "*Tip-of-the-tongue phenomenon*", "*Repression*"],
      a: 2,
      why: "Bilgi bellekte var ama o an erişilemiyor; kısmi ipuçları (ilk harf) hatırlanıyor: *tip-of-the-tongue*. En çekici yanlış şık A: *encoding failure*'da bilgi hiç kodlanmadığı için ipucu bile olmaz." }
  ]
};
