/* Kitora not defteri · hg603 · Kentler ve Küreselleşme
   Kaynak: AP HuG CED Topic 6.3 (PSO-6.B.1, PSO-6.B.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg603",
  amac: "Bu konu kentlerin küreselleşmenin hem sahnesi hem motoru olduğunu anlatıyor. Kent hiyerarşisini, dünya kentlerinin (*world cities*) neden tepede durduğunu ve kentleri birbirine bağlayan ağları öğreneceksin.",
  bolumler: [
    {
      baslik: "Kent hiyerarşisi",
      kisa: "Kentler önem sırasına dizilir; tepedeki kentlerin sayısı az, etkisi büyüktür.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔺", terim: "Urban hierarchy", tr: "kent hiyerarşisi", tanim: "Kentlerin büyüklüğüne, işlevine ve etkisine göre alttan üste sıralanması. Altta çok sayıda küçük kent, tepede birkaç büyük kent vardır.", ornek: "Köy → kasaba → il merkezi → ülkenin büyük kenti." },
            { ikon: "🌍", terim: "World city", tr: "dünya kenti", tanim: "Dünya ekonomisinin kontrol ve karar merkezi olan, hiyerarşinin en tepesindeki kent. Küreselleşmeyi yönlendirir.", ornek: "New York, Londra, Tokyo." }
          ] },
        { tip: "grafik", baslik: "Dünya kentleri: az sayıda ama çok etkili", xlabel: "Kent sayısı (genişlik)", ylabel: "Önem ve bağlantı (yükseklik)", xmax: 10, ymax: 10,
          ogeler: [
            { id: "a1", tip: "alan", renk: 3, noktalar: [[0, 0], [10, 0], [8.5, 2.5], [1.5, 2.5]] },
            { id: "a2", tip: "alan", renk: 2, noktalar: [[1.5, 2.5], [8.5, 2.5], [7, 5], [3, 5]], gizli: true },
            { id: "a3", tip: "alan", renk: 1, noktalar: [[3, 5], [7, 5], [6, 7.5], [4, 7.5]], gizli: true },
            { id: "a4", tip: "alan", renk: 0, noktalar: [[4, 7.5], [6, 7.5], [5.6, 10], [4.4, 10]], gizli: true },
            { id: "t1", tip: "yazi", x: 5, y: 1.1, metin: "Küçük kentler ve kasabalar" },
            { id: "t2", tip: "yazi", x: 5, y: 3.6, metin: "Bölgesel kentler", gizli: true },
            { id: "t3", tip: "yazi", x: 5, y: 6.1, metin: "Ulusal merkezler", gizli: true },
            { id: "t4", tip: "yazi", x: 6.5, y: 8.6, metin: "Dünya kentleri", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Tabanda çok sayıda ==küçük kent ve kasaba== vardır; yerel hizmet verirler." },
            { metin: "Bir üst basamakta ==bölgesel kentler==: çevrelerindeki köy ve kasabalara hizmet eder.", goster: ["a2", "t2"] },
            { metin: "Daha yukarıda ==ulusal merkezler==: ülkenin ekonomisi ve yönetimi burada toplanır.", goster: ["a3", "t3"] },
            { metin: "Tepede az sayıda ==dünya kenti==: sınırları aşan şirketler, finans ve karar gücü burada toplanır.", goster: ["a4", "t4"] }
          ] }
      ]
    },
    {
      baslik: "Dünya kentleri ne yapar?",
      kisa: "Dünya kentleri küresel ekonominin kontrol, finans ve bilgi merkezleridir.",
      bloklar: [
        { tip: "harita", merkez: "Dünya kentinin işlevleri", dallar: [
            { baslik: "Şirket merkezleri", alt: "Çok uluslu şirketlerin genel müdürlükleri" },
            { baslik: "Finans", alt: "Borsalar, bankalar, sigorta" },
            { baslik: "Gelişmiş hizmetler", alt: "Hukuk, muhasebe, reklam, danışmanlık" },
            { baslik: "Ulaşım düğümü", alt: "Büyük havalimanları ve limanlar" },
            { baslik: "Medya ve kültür", alt: "Haber, moda, sanat, üniversite" },
            { baslik: "Uluslararası kuruluşlar", alt: "Diplomasi ve örgütlerin merkezleri" }
          ] },
        { tip: "tablo", baslik: "Üç klasik dünya kenti", head: ["Kent", "Neden tepede?"], rows: [
            ["New York", "Dünyanın en büyük borsaları ve Birleşmiş Milletler merkezi"],
            ["Londra", "Küresel finans ve sigorta merkezi, güçlü hukuk ve danışmanlık sektörü"],
            ["Tokyo", "Pek çok büyük şirketin merkezi ve Asya'nın finans ağırlığı"]
          ] },
        { tip: "tuzak", metin: "Dünya kenti olmak büyüklükle ölçülmez; küresel güçle ölçülür.", yanlis: "En kalabalık kent, en önemli dünya kentidir.", dogru: "Nüfusu orta olan Singapur küresel finans ve limanıyla bir dünya kentidir; çok kalabalık ama küresel bağlantısı zayıf bir kent tepede olmayabilir. Ölçüt: ==kontrol ve bağlantı gücü==." }
      ]
    },
    {
      baslik: "Kentleri birbirine bağlayan ağlar",
      kisa: "Kentler uçak, gemi, kablo, para ve insan ağlarıyla birbirine bağlanır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "✈️", baslik: "Hava yolları", metin: "Büyük havalimanları kentleri doğrudan birbirine bağlar. İstanbul gibi büyük aktarma merkezleri birçok ülkeyi tek aktarmayla birbirine bağlar." },
            { ikon: "🚢", baslik: "Limanlar ve konteyner taşımacılığı", metin: "Mallar liman kentlerinden dünyaya dağılır." },
            { ikon: "🌐", baslik: "İnternet ve iletişim", metin: "Denizaltı kabloları ve veri merkezleri bilgiyi saniyeler içinde taşır." },
            { ikon: "💱", baslik: "Para ve yatırım", metin: "Borsa ve bankalar sermayeyi kentlerden kentlere akıtır." },
            { ikon: "🧳", baslik: "İnsan ve fikir akışı", metin: "Göç, turizm, öğrenci değişimi ve kültür ürünleri kentleri birbirine bağlar." }
          ] },
        { tip: "ikili", sol: { ikon: "🧱", baslik: "Fiziksel bağlantı", maddeler: ["Uçuş, gemi seferi, demiryolu", "Kentleri doğrudan birbirine bağlar"] },
          sag: { ikon: "📡", baslik: "Sanal bağlantı", maddeler: ["İnternet, finans ağı, çağrı merkezi", "Uzak kentleri anında bağlar"] },
          oyun: [
            { metin: "İstanbul–Londra uçuşu", cevap: "sol", neden: "Uçak: fiziksel bağlantı." },
            { metin: "İki kentteki borsa arasında saniyeler içinde yapılan işlem", cevap: "sag", neden: "Elektronik ağ: sanal bağlantı." },
            { metin: "Rotterdam'dan Şanghay'a konteyner gemisi", cevap: "sol", neden: "Gemi: fiziksel bağlantı." },
            { metin: "Bir telefon şirketinin çağrı merkezinin başka ülkedeki bir kentten hizmet vermesi", cevap: "sag", neden: "İletişim ağı: sanal bağlantı." }
          ] },
        { tip: "ornek", baslik: "Bağlantı yoğunluğu: uçuş sayısı", durum: "Kent A'dan Kent B'ye haftada 14 doğrudan uçuş, Kent C'ye ise 2 uçuş var. Hangi kent A ile daha güçlü bağlantılıdır?",
          adimlar: ["B ile bağlantı: haftada 14 uçuş.", "C ile bağlantı: haftada 2 uçuş.", "14 ÷ 2 = 7 kat fazla uçuş."],
          sonuc: "A kenti B ile ==7 kat daha yoğun== bağlantılıdır. Küresel kentlerin gücü, bağlantı sayısı ve yoğunluğuyla ölçülür." }
      ]
    },
    {
      baslik: "Kentler küresel süreçlere aracılık eder",
      kisa: "Kentler mal, para, bilgi ve insanın küresel akışlarına kapı olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚪", terim: "Gateway city", tr: "kapı kent", tanim: "Bir bölgeyi dünyaya, dünyayı da o bölgeye bağlayan liman, havalimanı ya da finans kenti.", ornek: "Singapur ve Rotterdam gibi büyük liman kentleri." },
            { ikon: "🏭", terim: "Special economic zone (SEZ)", tr: "özel ekonomik bölge", tanim: "Yabancı yatırımı çekmek için vergi ve kural avantajı verilen bölge.", ornek: "Çin'de Şenzhen." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1980", baslik: "Özel ekonomik bölge", metin: "Çin, Şenzhen'i özel ekonomik bölge ilan eder; yabancı yatırımı çekmek için kurallar gevşetilir." },
            { tarih: "Sonraki yıllar", baslik: "İhracat fabrikaları", metin: "Yabancı şirketler elektronik ve tekstil üretimi için buraya yerleşir; fabrikalar işçi çeker." },
            { tarih: "Bugün", baslik: "*Megacity*", metin: "Küçük bir kasabadan yaklaşık 17 milyonluk bir kente dönüşmüştür." }
          ] }
      ]
    },
    {
      baslik: "Küreselleşme kentte ne bırakır?",
      kisa: "Küreselleşme kente yatırım ve iş getirir, ama eşitsizliği de artırabilir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📈", baslik: "Fırsatlar", maddeler: ["Yabancı yatırım ve yeni iş", "Uluslararası şirketler, kültür ve turizm"] },
          sag: { ikon: "⚖️", baslik: "Sorunlar", maddeler: ["Konut ve kira fiyatları artar", "Yüksek ücretli ile düşük ücretli işler arasında uçurum"] },
          oyun: [
            { metin: "Bir bilişim şirketinin Avrupa genel merkezini şehre taşıması", cevap: "sol", neden: "Yeni iş ve yatırım getirir." },
            { metin: "Merkezdeki kiraların küresel yatırımcı ilgisiyle yükselmesi ve eski sakinlerin taşınması", cevap: "sag", neden: "Küreselleşmenin eşitsizlik ve yerinden edilme yönü." },
            { metin: "Yabancı bir otel zincirinin kentte turizmi canlandırması", cevap: "sol", neden: "Turizm geliri ve iş: fırsat." },
            { metin: "Finans çalışanları yüksek maaş alırken temizlik ve güvenlik işçilerinin düşük ücretle çalışması", cevap: "sag", neden: "Ücret farkı: eşitsizlik sorunu." }
          ] },
        { tip: "tuzak", metin: "Küreselleşmenin kazancı herkese eşit dağılmaz.", yanlis: "Kente yabancı yatırım gelince bütün sakinlerin geliri artar.", dogru: "Yatırım ve yüksek ücret belirli sektörlerde ve mahallelerde toplanır; ==kira artışı== ve düşük ücretli hizmet işleri eşitsizliği büyütebilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Urban hierarchy*: altta çok sayıda küçük kent, tepede az sayıda büyük ve etkili kent.",
            "*World city* hiyerarşinin tepesindedir; şirket merkezleri, finans, gelişmiş hizmetler, ulaşım ve medya ile küreselleşmeyi yönlendirir (New York, Londra, Tokyo).",
            "Dünya kenti olmak nüfusla değil, kontrol ve bağlantı gücüyle ölçülür (Singapur örneği).",
            "Kentler uçak, gemi, internet, para ve insan akışlarından oluşan ağlarla birbirine bağlıdır.",
            "*Gateway city* ve özel ekonomik bölgeler (Şenzhen) küresel akışlara aracılık eder.",
            "Küreselleşme kente yatırım ve iş getirir; kira artışı ve ücret eşitsizliği gibi sorunlar da getirir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi kent hiyerarşisini en iyi anlatır?",
      opts: ["Bütün kentler büyüklükleri ne olursa olsun aynı işlevi görür", "Altta çok sayıda küçük yerleşim, tepede az sayıda büyük ve etkili kent vardır", "En büyük kent her zaman başkenttir", "Yalnızca en kalabalık kentler hiyerarşide yer alır"],
      a: 1, why: "Hiyerarşi kentlerin büyüklük ve etkisine göre alttan üste dizilmesidir: altta çok, üstte az kent. C çekici bir yanlıştır; en büyük kent başkent olmak zorunda değildir. D yanlıştır: küçük kentler de hiyerarşinin parçasıdır." },
    { q: "Bir kent hem büyük şirketlerin genel müdürlüklerine, hem büyük bir borsaya, hem de uluslararası hukuk ve danışmanlık firmalarına ev sahipliği yapıyor. Bu kent en çok hangi gruba girer?",
      opts: ["*Exurb*", "Bölgesel pazar kasabası", "*World city*", "*Boomburb*"],
      a: 2, why: "Şirket merkezi, finans ve gelişmiş hizmetler *world city* işlevleridir. B yanlıştır çünkü pazar kasabası yalnızca yakın çevreye hizmet eder. *Exurb* ve *boomburb* küresel işlevi değil, çevredeki yerleşim biçimini anlatır." },
    { q: "Aşağıdaki tablo üç kentin 2020'deki nüfusunu ve uluslararası şirket merkezi sayısını gösteriyor. Hangi çıkarım *world city* ölçütüne en uygundur?",
      fig: { type: "table", head: ["Kent", "Nüfus (milyon)", "Uluslararası şirket merkezi"], rows: [["X", "24", "4"], ["Y", "6", "60"], ["Z", "12", "10"]], caption: "Üç kent karşılaştırması (kurgusal)" },
      opts: ["X en önemlidir çünkü nüfusu en çoktur", "Z, nüfusu orta olduğu için en önemlidir", "Y'nin nüfusu küçük olsa da küresel şirket merkezi sayısı onu daha güçlü bir dünya kenti adayı yapar", "Üçü de aynı düzeydedir"],
      a: 2, why: "Dünya kenti olmak nüfusla değil, kontrol ve bağlantı gücüyle ölçülür; Y'de şirket merkezi çok daha fazla. En çekici yanlış şık A'dır: kalabalık olmak küresel güç anlamına gelmez." },
    { q: "Çin hükümeti 1980'de Şenzhen'i özel ekonomik bölge ilan etti; yabancı şirketler fabrika kurdu ve kent kısa sürede çok büyüdü. Bu örnek aşağıdaki hangi fikri en iyi gösterir?",
      opts: ["Kentler küresel süreçlere aracılık eder; yabancı yatırım ve ticaret kenti dönüştürür", "Kentleşme yalnızca doğal nüfus artışıyla olur", "Küreselleşme kentleri küçültür", "Özel ekonomik bölgeler kentsel yayılmayı durdurur"],
      a: 0, why: "Şenzhen'de küresel yatırım ve üretim ağı kenti dönüştürdü: kentler küresel süreçlerin sahnesi ve motorudur. B yanlıştır çünkü büyümenin ana nedeni göç ve yatırımdır; C yanlıştır çünkü kent büyümüştür." },
    { q: "Bir finans merkezinde yüksek maaşlı bankacıların ve düşük ücretli temizlik işçilerinin aynı binada çalıştığı, kira artışının eski mahalle sakinlerini uzaklaştırdığı anlatılıyor. Bu durum küreselleşmenin kent üzerindeki hangi etkisini gösterir?",
      opts: ["Kentin küresel ağlardan kopması", "Eşitsizliğin ve yerinden edilmenin artması", "Altyapı ihtiyacının azalması", "Kentin hiyerarşide aşağı inmesi"],
      a: 1, why: "Ücret uçurumu ve kira artışı küreselleşmenin eşitsizlik yönünü gösterir. A yanlıştır: kent küresel ağlara bağlıdır, hatta bu yüzden eşitsizlik artar. D yanlıştır: bu kent tam tersine hiyerarşide yukarıdadır." }
  ]
};
