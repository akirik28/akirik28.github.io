/* Kitpath not defteri · py203 · 2.3 Belleğe Giriş
   Kaynak: AP Psychology CED 2024, Topic 2.3 (2.3.A.1–5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py203",
  amac: "Bu konu belleğin türlerini, yapısını ve çalışma biçimini anlatıyor. Bellek süreçlerini, açık ve örtük belleği, Atkinson–Shiffrin modelini, çalışma belleği modelini, işleme düzeylerini ve belleğin biyolojik temeli olan uzun süreli güçlenmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Bellek üç işlemle çalışır",
      kisa: "Bilgi önce kodlanır, sonra depolanır, gerektiğinde geri getirilir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Kodlama", alt: "*encoding*: bilgiyi belleğe sokmak" }, "+",
            { t: "Depolama", alt: "*storage*: bilgiyi tutmak" }, "+",
            { t: "Geri getirme", alt: "*retrieval*: bilgiyi çıkarmak" }, "=",
            { t: "Bellek", alt: "*memory*" }
          ], aciklama: "Telefon rehberi gibi düşün: numarayı kaydedersin (kodlama), rehberde durur (depolama), lazım olunca ararsın (geri getirme). Bellek türleri bu üç işlemde farklılaşır." },
        { tip: "adimlar", baslik: "Yeni bir arkadaşın adı", adimlar: [
            { baslik: "Kodlama", metin: "Yeni tanıştığın birinin adını duyup dikkatle zihnine alırsın." },
            { baslik: "Depolama", metin: "Ad, günler sonra da bellekte durur." },
            { baslik: "Geri getirme", metin: "Koridorda karşılaşınca adını hatırlarsın. Üç adımdan biri aksarsa unutulur." }
          ] }
      ]
    },
    {
      baslik: "Açık, örtük ve ileriye dönük bellek",
      kisa: "Anlatabildiklerimiz açık, anlatamadıklarımız örtük bellektir; gelecek eylemler ayrıdır.",
      bloklar: [
        { tip: "harita", merkez: "Uzun süreli bellek türleri", dallar: [
            { baslik: "*Explicit* · *episodic*", alt: "Yaşadığın olaylar: dünkü konser, doğum günün" },
            { baslik: "*Explicit* · *semantic*", alt: "Genel bilgiler: Ankara'nın başkent olduğu, formüller" },
            { baslik: "*Implicit* · *procedural*", alt: "Beceriler ve işlemler: bisiklete binmek, klavyede yazmak" },
            { baslik: "*Prospective*", alt: "Gelecekte yapılacaklar: \"yarın ödevi teslim et\"" }
          ] },
        { tip: "ikili", sol: { ikon: "💬", baslik: "*Explicit memory*", maddeler: ["Başkasına kolayca anlatılabilir", "*Episodic* (olaylar) ve *semantic* (bilgiler)"] },
          sag: { ikon: "🚲", baslik: "*Implicit memory*", maddeler: ["Anlatması zordur; yaparak gösterilir", "*Procedural*: işlem ve beceriler"] },
          oyun: [
            { metin: "Lise ilk günündeki heyecanını bütün ayrıntılarıyla anlatabiliyorsun.", cevap: "sol", neden: "Olay anısı, anlatılabilir: *explicit*, *episodic*." },
            { metin: "Bisiklete binmeyi biliyorsun ama dengeyi nasıl kurduğunu tarif edemiyorsun.", cevap: "sag", neden: "Anlatılması zor beceri: *implicit*, *procedural*." },
            { metin: "Fransa'nın başkentinin Paris olduğunu biliyorsun.", cevap: "sol", neden: "Genel bilgi: *explicit*, *semantic*." },
            { metin: "Telefon şifreni düşünmeden, parmaklarının hareketiyle giriyorsun.", cevap: "sag", neden: "Otomatikleşmiş işlem: *implicit*, *procedural*." }
          ] },
        { tip: "tuzak", metin: "*Prospective memory* geçmişte olanla değil, ileride yapılacak şeylerle ilgilidir.", yanlis: "*Prospective memory*, geçmişteki olayları hatırlamaktır.", dogru: "*Prospective memory* gelecekteki eylemi hatırlamaktır. Geçmiş olay bilgisi *episodic*; bilgi *semantic*; beceri *procedural*'dır." }
      ]
    },
    {
      baslik: "Çok depolu model: Atkinson–Shiffrin",
      kisa: "Bilgi duyusal, kısa süreli ve uzun süreli bellekten sırayla geçmelidir.",
      bloklar: [
        { tip: "adimlar", baslik: "*Multi-store model*", adimlar: [
            { baslik: "Duyusal bellek", metin: "Gelen bilgi çok kısa süre tutulur. Görsel olan *iconic*, işitsel olan *echoic*." },
            { baslik: "Kısa süreli bellek", metin: "Dikkat edilen bilgi buraya geçer; tekrar edilmezse birkaç on saniyede silinir." },
            { baslik: "Uzun süreli bellek", metin: "Kodlanan bilgi kalıcı olarak depolanır; gerektiğinde kısa süreli belleğe geri çağrılır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "👁️", terim: "Iconic memory", tr: "görsel duyusal bellek", tanim: "Gördüğümüz şeyin saniyenin bir kesri boyunca zihinde kalan kısa izi.", ornek: "Işığı kapattığında odanın şeklinin bir an daha \"görünmesi\"." },
            { ikon: "👂", terim: "Echoic memory", tr: "işitsel duyusal bellek", tanim: "Duyduğumuz şeyin birkaç saniye zihinde kalan kısa izi.", ornek: "Öğretmen cümleyi bitirdi, sen \"ne dedi?\" derken sesini hâlâ \"duyuyorsun\"." },
            { ikon: "🤖", terim: "Automatic processing", tr: "otomatik işleme", tanim: "Çaba harcamadan, farkında olmadan olan kodlama.", ornek: "Dün akşam ne yediğini ya da bir şeyi nerede gördüğünü kendiliğinden hatırlamak." },
            { ikon: "💪", terim: "Effortful processing", tr: "çabalı işleme", tanim: "Dikkat ve çaba gerektiren kodlama.", ornek: "Ders notlarını çalışarak öğrenmek." }
          ] },
        { tip: "tuzak", metin: "Duyusal belleğe giren her şey ilerlemez; dikkatin süzgeci vardır.", yanlis: "Duyusal belleğe giren bütün bilgi kısa süreli belleğe geçer.", dogru: "Yalnızca ==dikkat edilen== bilgi kısa süreli belleğe geçer; dikkat edilmeyen duyusal izler çok çabuk kaybolur." }
      ]
    },
    {
      baslik: "Çalışma belleği modeli",
      kisa: "Çalışma belleği, üç bileşenle bilgiyi işleyip uzun süreli belleğe taşıyan aktif sistemdir.",
      bloklar: [
        { tip: "harita", merkez: "*Working memory*", dallar: [
            { baslik: "*Central executive*", alt: "Yönetici: dikkati yönlendirir, bileşenleri koordine eder" },
            { baslik: "*Phonological loop*", alt: "Sesli ve sözel bilgiyi içinden tekrar eder" },
            { baslik: "*Visuospatial sketchpad*", alt: "Görsel ve uzamsal bilgiyi zihinde canlandırır" },
            { baslik: "*Long-term memory*", alt: "Çalışma belleği ile sürekli bilgi alışverişi yapar" }
          ] },
        { tip: "adimlar", baslik: "Yol tarifi alırken", adimlar: [
            { baslik: "*Phonological loop*", metin: "\"Üçüncü sokaktan sağa, eczaneden sola\" cümlesini içinden tekrarlarsın." },
            { baslik: "*Visuospatial sketchpad*", metin: "Aynı anda zihninde haritayı canlandırırsın." },
            { baslik: "*Central executive*", metin: "İkisini yönetir, \"şimdi sağa dön\" kararını verir ve bilgiyi uzun süreli belleğe aktarır." }
          ] },
        { tip: "tuzak", metin: "Çalışma belleği yalnızca bir bekleme odası değildir.", yanlis: "*Working memory* bilgiyi sadece kısa süre tutar, işlemez.", dogru: "*Working memory* bilgiyi tutarken aynı zamanda ==işler==; kısa süreli belleğin daha dinamik, çok bileşenli hali gibi düşünülebilir." }
      ]
    },
    {
      baslik: "İşleme düzeyleri: ne kadar derin, o kadar kalıcı",
      kisa: "Anlama dayalı derin işleme, yüzeysel işlemeden daha iyi hatırlatır.",
      bloklar: [
        { tip: "tablo", baslik: "*Levels of processing*: üç düzey", head: ["Düzey", "Neye bakılır?", "Örnek soru (\"masa\" kelimesi için)"], rows: [
            ["*Structural* (en yüzeysel)", "Görünüş", "Kelime büyük harfle mi yazılmış?"],
            ["*Phonemic*", "Ses", "\"Kasa\" ile kafiyeli mi?"],
            ["*Semantic* (en derin)", "Anlam", "\"Yemek ___ üzerinde yenir\" cümlesine uyar mı?"]
          ], not: "En derin düzey anlamdır; kelimeyi anlamıyla ilişkilendirdikçe iz güçlenir." },
        { tip: "grafik", baslik: "Derinlik arttıkça hatırlama artar", xlabel: "İşleme düzeyi", ylabel: "Sonra hatırlanan (göreli)", xmax: 7, ymax: 10,
          xticks: [{ v: 1.5, label: "Yapısal" }, { v: 3.5, label: "Sesle ilgili" }, { v: 5.5, label: "Anlamsal" }],
          yticks: [{ v: 2, label: "az" }, { v: 8, label: "çok" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.9, 0], [2.1, 0], [2.1, 0], [0.9, 0]] },
            { id: "b2", tip: "alan", renk: 0, noktalar: [[2.9, 0], [4.1, 0], [4.1, 0], [2.9, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[4.9, 0], [6.1, 0], [6.1, 0], [4.9, 0]] },
            { id: "t1", tip: "yazi", x: 1.5, y: 2.7, metin: "az", gizli: true },
            { id: "t2", tip: "yazi", x: 3.5, y: 5.2, metin: "orta", gizli: true },
            { id: "t3", tip: "yazi", x: 5.5, y: 8.7, metin: "çok", gizli: true }
          ],
          durumlar: [
            { metin: "Aynı kelime listesi üç farklı soruyla işleniyor; sonra sürpriz bir hatırlama testi yapılıyor." },
            { metin: "Yalnızca harflere bakmak ==en az== hatırlatır.", set: { b1: { noktalar: [[0.9, 0], [2.1, 0], [2.1, 2], [0.9, 2]] } }, goster: ["t1"] },
            { metin: "Sesine bakmak biraz daha iyi hatırlatır.", set: { b2: { noktalar: [[2.9, 0], [4.1, 0], [4.1, 4.5], [2.9, 4.5]] } }, goster: ["t2"] },
            { metin: "Anlamı düşünmek ==en çok== hatırlatır: ==derin işleme kalıcıdır.==", set: { b3: { noktalar: [[4.9, 0], [6.1, 0], [6.1, 8], [4.9, 8]] } }, goster: ["t3"] }
          ] },
        { tip: "tuzak", metin: "Derin işleme, kelimeyle oynamak demek değildir.", yanlis: "Kafiyeli kelimeler düşünmek, en derin işleme düzeyidir.", dogru: "En derin düzey ==*semantic*== yani anlamdır. Kafiye *phonemic*, harf biçimi *structural*'dır." }
      ]
    },
    {
      baslik: "Belleğin biyolojisi: uzun süreli güçlenme",
      kisa: "Sık çalışan sinaps bağlantıları güçlenir; belleğin biyolojik temeli budur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Long-term potentiation (LTP)", tr: "uzun süreli güçlenme", tanim: "İki nöron arasındaki sinaptik bağlantı sık çalıştıkça güçlenir. Bellekle ilgili temel biyolojik süreçtir.", ornek: "Her gün tekrar ettiğin şarkı sözü, sinapslar güçlendikçe daha kolay gelir." }
          ] },
        { tip: "adimlar", baslik: "Bir bilgi sinapsı nasıl güçlendirir?", adimlar: [
            { baslik: "İlk karşılaşma", metin: "Bir bilgi iki nöronu birlikte çalıştırır; bağlantı zayıftır." },
            { baslik: "Tekrar", metin: "Aynı bağlantı sık etkinleşir." },
            { baslik: "Güçlenme", metin: "Sinaps güçlenir; sinyal daha kolay geçer ve bilgi kalıcı olur." }
          ] }
      ]
    },
    {
      baslik: "Üç model, üç farklı soru",
      kisa: "Çok depolu model yolu, çalışma belleği işleyişi, işleme düzeyleri derinliği anlatır.",
      bloklar: [
        { tip: "tablo", baslik: "Bellek modelleri bir bakışta", head: ["Model", "Neye odaklanır?", "Anahtar fikir"], rows: [
            ["*Multi-store* (Atkinson–Shiffrin)", "Bilginin geçtiği depolar", "Duyusal → kısa süreli → uzun süreli"],
            ["*Working memory*", "Bilgiyi aktif işleyen sistem", "Merkezî yönetici, ses döngüsü, görsel-uzamsal not defteri"],
            ["*Levels of processing*", "Kodlamanın derinliği", "Yapısal < sesle ilgili < anlamsal"]
          ] },
        { tip: "ikili", sol: { ikon: "🏢", baslik: "*Multi-store model*", maddeler: ["Depolar ve aralarındaki geçiş", "Otomatik ve çabalı işleme"] },
          sag: { ikon: "🔍", baslik: "*Levels of processing*", maddeler: ["Kodlamanın derinliği", "Anlam, ses ve görünüş"] },
          oyun: [
            { metin: "Bilgi önce kısa süreli, sonra uzun süreli belleğe geçer.", cevap: "sol", neden: "Depolar arası yol: *multi-store*." },
            { metin: "Bir kelimeyi anlamıyla düşünmek, harflerine bakmaktan daha iyi hatırlatır.", cevap: "sag", neden: "Derinlik fikri: *levels of processing*." },
            { metin: "Duyusal bellek, *iconic* ve *echoic* alt türlere ayrılır.", cevap: "sol", neden: "Depo özelliği: *multi-store*." },
            { metin: "Yapısal, sesle ilgili ve anlamsal olmak üzere üç kodlama düzeyi vardır.", cevap: "sag", neden: "Kodlama düzeyleri: *levels of processing*." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Bellek üç işlemdir: kodlama, depolama, geri getirme.",
            "*Explicit* (anlatılabilir): *episodic* olaylar, *semantic* bilgiler. *Implicit*: *procedural* beceriler. *Prospective*: gelecekteki eylemler.",
            "Çok depolu model: duyusal (*iconic*, *echoic*) → kısa süreli → uzun süreli; dikkat edilenler ilerler.",
            "Otomatik işleme çabasızdır; çabalı işleme dikkat ister.",
            "Çalışma belleği: *central executive*, *phonological loop*, *visuospatial sketchpad*; uzun süreli bellekle etkileşir.",
            "İşleme düzeyleri: yapısal < sesle ilgili < anlamsal; derin işleme kalıcıdır.",
            "*LTP*: sık etkinleşen sinapslar güçlenir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kemal bisiklete çok iyi biniyor, ama pedallara nasıl bastığını ve dengeyi nasıl kurduğunu kelimelerle anlatamıyor. Bu bilgi hangi bellek türünde yer alır?",
      opts: ["*Episodic memory*", "*Semantic memory*", "*Procedural memory*", "*Prospective memory*"],
      a: 2,
      why: "Becerilere ve işlemlere ait bellek *procedural*'dır; örtük belleğin bir türüdür ve anlatması zordur. En çekici yanlış şık B: *semantic* genel bilgilerdir ve kolayca anlatılabilir." },
    { q: "Ece, sabah evden çıkarken akşam okuldan dönerken ekmek alması gerektiğini hatırlıyor. Bu hatırlama hangi bellek türüdür?",
      opts: ["*Prospective memory*", "*Procedural memory*", "*Episodic memory*", "*Semantic memory*"],
      a: 0,
      why: "Gelecekte yapılacak bir eylemi hatırlamak *prospective memory*'dir. En çekici yanlış şık C: *episodic* yaşanmış bir olay anısıdır, henüz yaşanmamış bir eylem değil." },
    { q: "Öğretmen cümlesini bitirdikten bir iki saniye sonra Deniz \"ne demişti?\" diye sorarken öğretmenin son sözlerini hâlâ zihninde \"duyuyor\" ve doğru tekrarlıyor. Bu durum Atkinson–Shiffrin modelinde hangi bellek türüdür?",
      opts: ["*Iconic memory*", "*Echoic memory*", "*Working memory*", "*Semantic memory*"],
      a: 1,
      why: "Duyulan şeyin birkaç saniye boyunca zihinde kalan izi *echoic memory*'dir. En çekici yanlış şık A: *iconic* görsel izdir, bu senaryoda ise işitilen söz var." },
    { q: "Zeynep, bir telefon numarasını yazana kadar sessizce kendi kendine tekrar ediyor. Çalışma belleği modelinde bu tekrar en çok hangi bileşenle ilgilidir?",
      opts: ["*Central executive*", "*Visuospatial sketchpad*", "*Phonological loop*", "*Iconic memory*"],
      a: 2,
      why: "Sözel ve sesli bilgiyi içinden tekrarlamak *phonological loop*'un işidir. En çekici yanlış şık A: *central executive* dikkati yönetir ve bileşenleri koordine eder, ama tekrarı yapan bileşen değildir." },
    { q: "Bir araştırmacı katılımcılara her kelime için üç farklı soru sordu, ardından sürpriz bir hatırlama testi yaptı. Sonuçlar tabloda verilmiştir (varsayımsal). Bu sonuçlar hangi modelin öngörüsüyle uyumludur?",
      fig: { type: "table", caption: "Soru türüne göre hatırlanan kelime yüzdesi", head: ["Katılımcılara sorulan soru", "Hatırlanan kelime"], rows: [["Kelime büyük harfle mi yazılmış?", "%15"], ["Kelime \"kasa\" ile kafiyeli mi?", "%35"], ["Kelime cümleye anlamca uyuyor mu?", "%70"]] },
      opts: ["*Multi-store model*: duyusal bellek, kısa süreli belleği engeller", "*Working memory*: *phonological loop* en güçlü bileşendir", "*Prospective memory*: katılımcılar gelecekteki eylemi hatırlar", "*Levels of processing*: anlama dayalı derin işleme daha iyi hatırlatır"],
      a: 3,
      why: "Yapısal < sesle ilgili < anlamsal sırasıyla hatırlama artıyor; bu, işleme düzeyleri modelinin öngörüsüdür. En çekici yanlış şık B: kafiye sorusu *phonological loop*'u anımsatsa da en iyi sonucu veren, ses değil anlam düzeyidir." }
  ]
};
