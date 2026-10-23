/* Kitpath not defteri · py205 · 2.5 Bellekte Depolama
   Kaynak: AP Psychology CED 2024, Topic 2.5 (2.5.A.1–4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py205",
  amac: "Bu konu bilginin bellekte nasıl tutulduğunu, yani depolamayı anlatıyor. Bellek depolarının süre, kapasite ve içerik farkını, tekrar türlerini, sinaps güçlenmesini, üstün otobiyografik belleği ve depolamayı bozan amnezi, Alzheimer ve bebeklik amnezisini öğreneceksin.",
  bolumler: [
    {
      baslik: "Dört depo: süre, kapasite, içerik",
      kisa: "Duyusal, kısa süreli, çalışma ve uzun süreli bellek; süre, kapasite ve içerikte ayrılır.",
      bloklar: [
        { tip: "tablo", baslik: "Bellek depoları karşılaştırması", head: ["Depo", "Süre (yaklaşık)", "Kapasite", "İçerik"], rows: [
            ["*Sensory memory*", "*Iconic* ~ yarım saniye; *echoic* ~ 3–4 saniye", "Çok büyük", "Ham görsel ve işitsel izler"],
            ["*Short-term memory*", "Tekrar yoksa ~ 20–30 saniye", "~ 7 ± 2 öğe", "Dikkat edilen bilgi"],
            ["*Working memory*", "Aktif işlenirken tutulur", "Sınırlı, kısa süreli belleğe benzer", "Üzerinde çalışılan bilgi"],
            ["*Long-term memory*", "Yıllar, ömür boyu", "Pratikte sınırsız", "Olaylar, bilgiler, beceriler"]
          ], not: "Sayılar yaklaşıktır; asıl ilişkiyi hatırla: duyusaldan uzun süreliye doğru süre uzar, kısa süreli belleğin kapasitesi sınırlıdır, uzun süreli belleğin kapasitesi sınırsızdır." },
        { tip: "tuzak", metin: "Uzun süreli belleğin sınırı konusunda sık hata yapılır.", yanlis: "Çok bilgi öğrenirsen uzun süreli bellek dolar.", dogru: "Uzun süreli belleğin kapasitesi ==pratikte sınırsızdır==; sınırlı olan, kısa süreli belleğin tutabildiği birim sayısıdır." }
      ]
    },
    {
      baslik: "Tekrar türleri: *maintenance* ve *elaborative rehearsal*",
      kisa: "Yalnızca tekrar bilgiyi kısa süre tutar; anlam kurmak kalıcılığı artırır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔁", baslik: "*Maintenance rehearsal*", maddeler: ["Aynı bilgiyi tekrar tekrar söylemek", "Bilgiyi bir süre tutar; kalıcılığı sınırlı"] },
          sag: { ikon: "🧠", baslik: "*Elaborative rehearsal*", maddeler: ["Bilgiyi anlam kurarak ilişkilendirmek", "Hatırlamayı güçlendirir"] },
          oyun: [
            { metin: "Telefon numarasını yazana kadar içinden defalarca tekrarlıyorsun.", cevap: "sol", neden: "Anlam katmadan tekrar: *maintenance*." },
            { metin: "\"Mitokondri\" kelimesini, \"hücrenin pil santrali\" diye düşünüp bir benzetmeyle öğreniyorsun.", cevap: "sag", neden: "Anlamla ilişkilendirme: *elaborative*." },
            { metin: "Ders notundaki tanımı üç kere yüksek sesle okuyorsun.", cevap: "sol", neden: "Salt tekrar: *maintenance*." },
            { metin: "Yeni öğrendiğin kavramı kendi hayatından örnekle açıklıyorsun.", cevap: "sag", neden: "Anlam ve bağlantı kuruyor: *elaborative*." }
          ] },
        { tip: "tuzak", metin: "\"Daha çok tekrar\" ile \"daha derin tekrar\" farklı şeylerdir.", yanlis: "*Elaborative rehearsal*, bilgiyi daha çok kez tekrar etmektir.", dogru: "Tekrar sayısı değil, ==anlam kurmak== önemlidir: *elaborative rehearsal* bilgiyi anlamla bağlar." }
      ]
    },
    {
      baslik: "Depolamanın biyolojisi: sinaps güçlenmesi",
      kisa: "Sık etkinleşen sinapslar güçlenir; bilgi bu sayede kalıcı olarak depolanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Long-term potentiation (LTP)", tr: "uzun süreli güçlenme", tanim: "Nöronlar arasındaki sinaptik bağlantı sık etkinleştikçe güçlenir. Depolamanın biyolojik temelidir.", ornek: "Her gün tekrar ettiğin gitar akoru zamanla kendiliğinden gelir." }
          ] },
        { tip: "grafik", baslik: "Tekrar arttıkça sinaps güçlenir", xlabel: "Etkinleşme (tekrar) sayısı", ylabel: "Sinaps gücü", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "az" }, { v: 5, label: "orta" }, { v: 9, label: "çok" }],
          yticks: [{ v: 2, label: "zayıf" }, { v: 8, label: "güçlü" }],
          ogeler: [
            { id: "nadir", tip: "cizgi", renk: 1, kesik: true, from: [0, 1.5], to: [10, 1.5], etiket: "Nadir etkinleşen", gizli: true },
            { id: "ltp", tip: "egri", renk: 0, etiket: "Sık etkinleşen", noktalar: [[0, 1.5], [1, 2.8], [2, 4], [3, 5], [5, 6.6], [7, 7.6], [10, 8.5]], gizli: true },
            { id: "yz", tip: "yazi", x: 5, y: 9.4, metin: "Güçlenen sinaps = kalıcı bilgi", gizli: true }
          ],
          durumlar: [
            { metin: "İki nöron arasındaki ilk bağlantı zayıftır; nadiren etkinleşen sinaps zayıf kalır.", goster: ["nadir"] },
            { metin: "Aynı bağlantı sık etkinleştikçe sinaps ==güçlenir==: *long-term potentiation*.", goster: ["ltp"] },
            { metin: "Güçlenen sinaps sinyali daha kolay iletir; bilgi kalıcı olarak depolanır.", goster: ["yz"] }
          ] }
      ]
    },
    {
      baslik: "Üstün otobiyografik bellek",
      kisa: "Kendi yaşamımızla ilgili anılar daha kalıcıdır; bazı insanlarda bu aşırı güçlüdür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📔", terim: "Autobiographical memory", tr: "otobiyografik bellek", tanim: "Kendi hayatımızla ve kendimizle ilgili olay ve bilgilerin belleği. Bu anılar çoğunlukla daha iyi hatırlanır.", ornek: "İlk gün okul yolunda yaşadığın olay." },
            { ikon: "🌟", terim: "Highly superior autobiographical memory (HSAM)", tr: "üstün otobiyografik bellek", tanim: "Çok az kişide görülen, geçmişteki günlerin ayrıntılarını (ne zaman ne yaptığını) olağanüstü hatırlama durumu. Bu, depolama için biyolojik süreçlerin rol oynayabileceğini düşündürür.", ornek: "Rastgele verilen bir tarihte o günün olaylarını ayrıntılı anlatabilmek." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💭", baslik: "Kişisel anlam", metin: "Kendimizle ilgili bilgi derin işlenir." },
            { ikon: "❤️", baslik: "Duygu", metin: "Önemli ve duygusal anlar daha çok akılda kalır." },
            { ikon: "🗣️", baslik: "Tekrar", metin: "Kendi anılarımızı sık anlatır, düşünür, yeniden yaşarız." }
          ] }
      ]
    },
    {
      baslik: "Amnezi: depolama ve yeni anı bozulduğunda",
      kisa: "Geriye dönük amnezi eskiyi, ileriye dönük amnezi yeni anıları etkiler.",
      bloklar: [
        { tip: "grafik", baslik: "Zaman çizgisinde iki amnezi", xlabel: "Zaman", ylabel: "", xmax: 10, ymax: 10,
          xticks: [{ v: 5, label: "kaza / hasar" }],
          ogeler: [
            { id: "k", tip: "cizgi", renk: 0, from: [5, 0.5], to: [5, 9.5], etiket: "", gizli: true },
            { id: "kt", tip: "yazi", x: 5, y: 9.9, metin: "Beyin hasarı", gizli: true },
            { id: "ra", tip: "alan", renk: 1, noktalar: [[0.3, 2], [4.8, 2], [4.8, 6], [0.3, 6]], gizli: true },
            { id: "ro", tip: "ok", renk: 1, from: [4.7, 4], to: [0.6, 4], gizli: true },
            { id: "rt", tip: "yazi", x: 2.6, y: 6.7, metin: "Hasar öncesi anılar kayıp", gizli: true },
            { id: "aa", tip: "alan", renk: 2, noktalar: [[5.2, 2], [9.7, 2], [9.7, 6], [5.2, 6]], gizli: true },
            { id: "ao", tip: "ok", renk: 2, from: [5.3, 4], to: [9.4, 4], gizli: true },
            { id: "at", tip: "yazi", x: 7.4, y: 6.7, metin: "Yeni anı oluşmaz", gizli: true }
          ],
          durumlar: [
            { metin: "Beyin hasarı (kaza, hastalık ya da ameliyat) zaman çizgisini \"öncesi\" ve \"sonrası\" olarak ikiye böler.", goster: ["k", "kt"] },
            { metin: "==*Retrograde amnesia*==: hasar öncesindeki anılara ulaşılamaz. Geriye bakış bozulmuştur.", goster: ["ra", "ro", "rt"] },
            { metin: "==*Anterograde amnesia*==: hasardan sonra yeni anı oluşturulamaz. İleriye dönük depolama bozulmuştur.", goster: ["aa", "ao", "at"] }
          ] },
        { tip: "ikili", sol: { ikon: "⬅️", baslik: "*Retrograde amnesia*", maddeler: ["Hasardan ÖNCEKİ anıları kaybetmek", "Yeni anı oluşturabilir"] },
          sag: { ikon: "➡️", baslik: "*Anterograde amnesia*", maddeler: ["Hasardan SONRA yeni anı oluşturamamak", "Eski anılar çoğunlukla sağlam"] },
          oyun: [
            { metin: "Kaza sonrası kişi, kazadan önceki iki yılı hatırlamıyor ama yeni tanıştığı insanları hatırlayabiliyor.", cevap: "sol", neden: "Geçmiş silinmiş, yeni anılar oluşuyor: *retrograde*." },
            { metin: "Ameliyat sonrası kişi çocukluğunu anlatabiliyor ama dünkü ziyaretçisini hatırlamıyor.", cevap: "sag", neden: "Yeni anı oluşamıyor: *anterograde*." },
            { metin: "Kişi, hasar öncesi yaşamını hatırlamıyor ama bugün yaşadıklarını ertesi gün anlatabiliyor.", cevap: "sol", neden: "Eski anılar kayıp: *retrograde*." },
            { metin: "Her sabah \"neredeyim, bugün ne oldu\" diye soruyor; her yeni deneyim birkaç dakikada siliniyor.", cevap: "sag", neden: "Yeni bilgi depolanmıyor: *anterograde*." }
          ] },
        { tip: "tuzak", metin: "\"Anterograde\" ile \"retrograde\" adları kolay karışır.", yanlis: "*Anterograde amnesia*, hasar öncesi anıları unutmaktır.", dogru: "==*Retrograde*== = geriye dönük, eski anıların kaybı. ==*Anterograde*== = ileriye dönük, yeni anı oluşturamama." }
      ]
    },
    {
      baslik: "Alzheimer hastalığı ve bebeklik amnezisi",
      kisa: "Alzheimer hastalığı depolamayı bozar; bebeklik amnezisi gelişimsel bir sınırdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Alzheimer's disease", tr: "Alzheimer hastalığı", tanim: "Beyni etkileyen ilerleyici bir hastalık. Önce yeni bilgileri depolamayı bozar, zamanla düşünme ve gündelik işleri de etkiler.", ornek: "Yakın zamanda söylenen şeyi aynı gün tekrar tekrar sormak." },
            { ikon: "👶", terim: "Infantile amnesia", tr: "bebeklik amnezisi", tanim: "Yetişkinlerin yaklaşık ilk üç dört yaşa ait olayları hatırlayamaması. Beyin ve dil gelişimi gibi gelişimsel sınırlarla ilişkilidir.", ornek: "2 yaşındaki doğum günü partini hatırlayamıyorsun, ama fotoğraflardan biliyorsun." }
          ] },
        { tip: "tuzak", metin: "Unutkanlıkla hastalığı birbirinden ayırmak önemlidir.", yanlis: "Alzheimer hastalığı, yaşlanmanın normal bir parçasıdır.", dogru: "Alzheimer, beyni etkileyen ilerleyici bir ==hastalıktır==; yaşlanmayla ortaya çıkabilir ama yaşlanmanın doğal bir sonucu değildir. Bebeklik amnezisi ise hastalık değil, gelişimin normal bir özelliğidir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Duyusal, kısa süreli, çalışma ve uzun süreli bellek; süre, kapasite ve içerikte ayrılır. Uzun süreli bellek pratikte sınırsızdır.",
            "*Maintenance rehearsal* salt tekrar; *elaborative rehearsal* anlam kurmaktır ve daha kalıcıdır.",
            "*LTP*: sık etkinleşen sinapslar güçlenir; depolamanın biyolojik temelidir.",
            "*HSAM* nadir görülür; kendi hayatımızla ilgili (otobiyografik) anılar daha kalıcıdır.",
            "*Retrograde amnesia*: hasar öncesi anıların kaybı. *Anterograde amnesia*: yeni anı oluşturamamak.",
            "Alzheimer hastalığı ilerleyici bir beyin hastalığıdır; bebeklik amnezisi gelişimsel bir sınırdır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloda üç bellek deposu X, Y ve Z'nin özellikleri verilmiştir. X, Y ve Z sırasıyla hangi depolardır?",
      fig: { type: "table", caption: "Bellek depoları", head: ["Depo", "Süre", "Kapasite"], rows: [["X", "Birkaç saniye (~ 0,5–4 sn)", "Çok büyük"], ["Y", "~ 20–30 saniye (tekrar yoksa)", "~ 7 ± 2 öğe"], ["Z", "Yıllar, ömür boyu", "Pratikte sınırsız"]] },
      opts: ["Duyusal, kısa süreli, uzun süreli bellek", "Kısa süreli, duyusal, uzun süreli bellek", "Uzun süreli, kısa süreli, duyusal bellek", "Duyusal, uzun süreli, kısa süreli bellek"],
      a: 0,
      why: "En kısa süreli ve en geniş kapasiteli depo duyusal bellektir; ~ 7 ± 2 öğelik sınırı olan kısa süreli bellektir; ömür boyu süren ve pratikte sınırsız olan uzun süreli bellektir. En çekici yanlış şık B: kısa süreli bellek ile duyusal bellek karıştırılmış." },
    { q: "Mert, bir kimya terimini defalarca yüksek sesle tekrar ederek ezberliyor. Selin ise aynı terimi kendi gündelik yaşamından bir örnekle ilişkilendiriyor. Bu iki öğrencinin yöntemleri için hangisi doğrudur?",
      opts: ["Mert *elaborative*, Selin *maintenance rehearsal* kullanıyor", "İkisi de *maintenance rehearsal* kullanıyor", "Mert *maintenance*, Selin *elaborative rehearsal* kullanıyor; Selin'in bilgiyi daha kalıcı hatırlaması beklenir", "İkisi de *elaborative rehearsal* kullanıyor"],
      a: 2,
      why: "Salt tekrar *maintenance*, anlam kurmak *elaborative rehearsal*'dır ve ikincisi daha kalıcıdır. En çekici yanlış şık A: yöntemler yer değiştirilmiş." },
    { q: "Ahmet bir trafik kazasından sonra kazadan önceki iki yılı hatırlamıyor, ama hastanede tanıştığı hemşirelerin isimlerini öğrenebiliyor. Ahmet'in durumu en iyi hangisidir?",
      opts: ["*Anterograde amnesia*", "*Retrograde amnesia*", "*Infantile amnesia*", "*Prospective memory* kaybı"],
      a: 1,
      why: "Hasar öncesi anıların kaybı *retrograde amnesia*'dır; yeni anılar oluşabildiği için *anterograde* değildir. En çekici yanlış şık A: ad benzerliğiyle karıştırılır; ama yeni bilgi öğrenebiliyor." },
    { q: "Nehir, bir ameliyattan sonra çocukluğuna ait anıları rahatça anlatabiliyor, ama dün yaptığı konuşmaları birkaç dakika sonra hatırlamıyor. Bu durum için hangisi doğrudur?",
      opts: ["*Retrograde amnesia*; yeni anılar kayıp", "*Infantile amnesia*; çocukluk anıları kayıp", "*Alzheimer's disease*; çünkü hatırlayamıyor", "*Anterograde amnesia*; yeni anı oluşturulamıyor"],
      a: 3,
      why: "Eski anılar sağlam, yeni anı oluşumu bozuk: *anterograde amnesia*. En çekici yanlış şık A: *retrograde* tam tersidir, eski anıların kaybıdır." },
    { q: "Bir müzik öğrencisi aynı şarkıyı her gün çalışıyor ve bir ay sonra parmakları notaları kendiliğinden buluyor. Bunun biyolojik açıklaması en iyi hangisidir?",
      opts: ["Sık etkinleşen sinapsların güçlenmesi (*long-term potentiation*)", "Duyusal belleğin kapasitesinin büyümesi", "Beynin dinlenme sırasında nöronları silmesi", "*Infantile amnesia*'nın ortadan kalkması"],
      a: 0,
      why: "Aynı bağlantı sık etkinleştikçe sinaps güçlenir; bu, *LTP*'dir. En çekici yanlış şık B: duyusal bellek saniyeler içinde silinen bir depodur; kalıcı öğrenmeyi açıklamaz." }
  ]
};
