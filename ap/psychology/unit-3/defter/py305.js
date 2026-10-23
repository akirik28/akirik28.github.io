/* Kitpath not defteri · py305 · 3.5 İletişim ve Dil Gelişimi
   Kaynak: AP Psychology CED (2024) Topic 3.5. Blok türleri: /ap/_kit/defter.js başı.
   Not: sözcük sayısı eğrisi şematik ve ortalamadır; bebekler arasında çok fark vardır. Dilin pragmatiği CED'de sınav dışıdır. */
window.DEFTER = {
  slug: "py305",
  amac: "Bu konu dilin ne olduğunu, hangi yapı taşlarından kurulduğunu ve çocuğun dili hangi evrelerden geçerek edindiğini anlatıyor. Fonem, morfem, sözdizimi, agulamadan telgrafik konuşmaya evreler ve aşırı genelleme hatalarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Dil nedir?",
      kisa: "Dil, anlaşılmış sembollerden ve kurallardan oluşan, sonsuz fikir üretebilen bir sistemdir.",
      bloklar: [
        { tip: "harita", merkez: "*Language* (dil)", dallar: [
            { baslik: "Ortak (*shared*)", alt: "Bir topluluğun üzerinde anlaştığı sistem; tek başına icat edilmez" },
            { baslik: "Keyfî semboller (*arbitrary symbols*)", alt: "Ses ile anlam arasında doğal bağ yok: köpek, *dog*, *Hund*" },
            { baslik: "Kurala bağlı (*rule-governed*)", alt: "Dilbilgisi (*grammar*) ve sözdizimi (*syntax*)" },
            { baslik: "Üretken (*generative*)", alt: "Sınırlı öğeden sonsuz sayıda yeni cümle kurulur" }
          ] },
        { tip: "tuzak", metin: "Sözcüklerin çoğu, anlamlarını doğal olarak yansıtmaz; yansıma sözcükler (“miyav”, “hav”) istisnadır. (Dilin kullanıma göre değişen yönü olan pragmatik, sınav kapsamı dışındadır.)", yanlis: "Sözcükler anlamlarını doğal olarak taşır; bu yüzden bütün dillerde benzerdir.", dogru: "Ses–anlam bağı ==keyfîdir==: aynı hayvana her dil başka bir ses dizisiyle ad verir. Ortak anlaşma (*shared*) sözcüğü anlamlı kılar." }
      ]
    },
    {
      baslik: "Dilin yapı taşları: fonem, morfem, anlam, söz dizimi",
      kisa: "Sesler anlam birimlerini, anlam birimleri sözcükleri ve cümleleri kurar.",
      bloklar: [
        { tip: "tablo", baslik: "“kitaplarım” sözcüğünün katmanları", head: ["Düzey", "Ne?", "Örnek"], rows: [
            ["*Phoneme* (fonem)", "Anlamı değiştirebilen en küçük ses birimi", "k-i-t-a-p-l-a-r-ı-m: 10 ses"],
            ["*Morpheme* (morfem)", "Anlamlı en küçük birim", "kitap + lar + ım: 3 morfem"],
            ["*Semantics* (anlambilim)", "Sözcük ve cümlelerin anlamı", "“kitap” = okunan yazılı eser; “-lar” = çoğul"],
            ["*Grammar* (dilbilgisi)", "Dildeki bütün kurallar", "kitap-lar-ım doğru ek sırası; kitap-ım-lar yanlış"],
            ["*Syntax* (sözdizimi)", "Sözcüklerin dizilişi kuralları", "*The dog bit the man* ≠ *The man bit the dog*"]
          ] },
        { tip: "ikili", sol: { ikon: "🔊", baslik: "*Phoneme*", maddeler: ["Anlamsız ses birimi", "Anlamı değiştirir: /k/ ve /g/ → kar, gar"] },
          sag: { ikon: "🧱", baslik: "*Morpheme*", maddeler: ["Anlamı olan en küçük birim", "Sözcük ya da ek olabilir: “kitap”, “-lar”"] },
          oyun: [
            { metin: "“-lar” çoğul eki.", cevap: "sag", neden: "Anlam taşıyan ek: *morpheme*." },
            { metin: "“ev” sözcüğündeki “e” sesi.", cevap: "sol", neden: "Tek başına anlamsız bir ses birimi: *phoneme*." },
            { metin: "“öğretmen” içindeki “öğret” ve “-men” parçaları.", cevap: "sag", neden: "Her biri anlam taşıyor: *morpheme*." },
            { metin: "“kar” ile “gar” arasındaki fark yaratan ses.", cevap: "sol", neden: "Anlamı değiştiren ses: *phoneme*." }
          ] },
        { tip: "tuzak", metin: "Morfem ses ya da ritim birimi değil, anlam birimidir.", yanlis: "Her hece bir morfemdir.", dogru: "“kitaplarım” dört hecedir (ki-tap-la-rım) ama ==3 morfem== içerir; “okul” iki hecedir ama ==1 morfemdir==." }
      ]
    },
    {
      baslik: "İletişim ve dil aynı şey değildir",
      kisa: "İletişim bilgi alışverişidir; dil kurallı ve üretken, insana özgü bir sistemdir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📡", baslik: "*Communication* (iletişim)", maddeler: ["Bilgi aktarmanın her yolu: ses, jest, koku, dans", "İnsan dışı canlılarda da vardır"] },
          sag: { ikon: "🗣️", baslik: "*Language* (dil)", maddeler: ["Keyfî semboller, dilbilgisi ve söz dizimi", "Üretken: hiç duyulmamış cümleler kurulabilir"] },
          oyun: [
            { metin: "Arının dans ederek nektarın yönünü bildirmesi.", cevap: "sol", neden: "Bilgi aktarıyor ama kurallı ve üretken bir sistem değil: iletişim." },
            { metin: "Çocuğun, daha önce hiç duymadığı bir cümleyi kurması.", cevap: "sag", neden: "Üretkenlik: dil." },
            { metin: "Bebeğin parmağıyla bir nesneyi işaret etmesi.", cevap: "sol", neden: "Sözsüz jest: iletişim." },
            { metin: "Sözcük sırası değişince cümlenin anlamının değişmesi.", cevap: "sag", neden: "Söz dizimi kuralı: dil." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "👉", terim: "Nonverbal manual gestures", tr: "sözsüz el jestleri", tanim: "El ve kolla yapılan, sözcük içermeyen işaretler. Bütün kültürlerde bebekler dil öncesi dönemde ==işaret etme== gibi jestlerle iletişim kurar ve sonra sözcüklere geçer.", ornek: "Parmakla işaret etmek, el sallamak." }
          ] }
      ]
    },
    {
      baslik: "Dil gelişiminin evreleri",
      kisa: "Bebek agulama, gevezelik, tek sözcük ve telgrafik konuşma evrelerinden geçer.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "~2 ay", baslik: "*Cooing*: agulama", metin: "“Ooo, aaa” gibi ünlü sesler." },
            { tarih: "~4–6 ay", baslik: "*Babbling*: gevezelik", metin: "“Ba-ba-da-da” gibi ünsüz–ünlü heceler. İşaret dilini gören bebekler ellerle gevezelik yapar." },
            { tarih: "~12 ay", baslik: "*One-word stage*: tek sözcük", metin: "“Su”, “anne”: tek sözcük bir cümle yerine geçer." },
            { tarih: "~18–24 ay", baslik: "*Telegraphic speech*: telgrafik konuşma", metin: "İki üç sözcüklük kısa cümleler; bağlaç ve ekler eksik: “Anne su ver.”" }
          ] },
        { tip: "grafik", baslik: "Sözcük dağarcığı yaşla nasıl büyür? (ortalama, şematik)", xlabel: "Yaş", ylabel: "Sözcük sayısı", xmax: 12, ymax: 10,
          xticks: [{ v: 4, label: "12 ay" }, { v: 8, label: "24 ay" }, { v: 12, label: "36 ay" }],
          yticks: [{ v: 1, label: "100" }, { v: 5, label: "500" }, { v: 9, label: "900" }],
          ogeler: [
            { id: "egri", tip: "egri", renk: 0, noktalar: [[0, 0], [3, 0], [4, 0.08], [5, 0.2], [6, 0.5], [7, 1.3], [8, 2.5], [10, 5.5], [12, 9]] },
            { id: "n12", tip: "nokta", renk: 1, x: 4, y: 0.08, etiket: "İlk sözcükler", gizli: true },
            { id: "patla", tip: "alan", renk: 3, noktalar: [[6, 0], [8, 0], [8, 10], [6, 10]], gizli: true },
            { id: "pL", tip: "yazi", x: 7, y: 9.2, metin: "Sözcük patlaması", gizli: true },
            { id: "n36", tip: "nokta", renk: 1, x: 12, y: 9, etiket: "~1000", gizli: true }
          ],
          durumlar: [
            { metin: "İlk yıl boyunca sözcük dağarcığı çok küçüktür; çocuk anlar ama az söyler." },
            { metin: "~12 ayda ilk sözcükler gelir; dağarcık yavaş yavaş genişler.", goster: ["n12"] },
            { metin: "~18–24 ay arasında ==sözcük patlaması== (*vocabulary spurt*): her gün yeni sözcükler öğrenilir ve telgrafik konuşma başlar.", goster: ["patla", "pL"] },
            { metin: "3 yaş civarı bin sözcüğe yaklaşılır. Bu değerler ortalamadır; çocuktan çocuğa çok fark eder.", goster: ["n36"] }
          ] },
        { tip: "tuzak", metin: "Gevezelik ve tek sözcük evrelerini karıştırmak yaygın bir hatadır.", yanlis: "Bebek gevezeliğiyle ilk sözcüklerini söyler.", dogru: "*Babbling* anlamsız ünsüz–ünlü hecelerdir (ba-ba); ==ilk gerçek sözcükler== *one-word stage*'dedir. Evreler bütün kültürlerde aynı sırayla görülür." }
      ]
    },
    {
      baslik: "Aşırı genelleme: hatalar ilerlemedir",
      kisa: "Çocuk öğrendiği kuralı istisnalara da uygular; bu hata, kuralı öğrendiğini gösterir.",
      bloklar: [
        { tip: "ornek", baslik: "“Kitapı” ve “goed”", durum: "Dört yaşındaki Ela “kitap” sözcüğüne belirtme eki getirirken “kitapı” diyor. İngilizce konuşan akranı ise “went” yerine “goed” diyor. Neden?",
          adimlar: ["Ela “araba → arabayı”, “kapı → kapıyı” gibi örneklerden belirtme eki kuralını çıkardı.", "“Kitap” gibi p ile biten sözcüklerde ünsüz yumuşar (kitabı); Ela bu istisnayı henüz öğrenmedi ve kuralı genelledi.", "İngilizce'de geçmiş zaman kuralı “-ed” olduğu için akran “go” sözcüğüne de “-ed” ekliyor.", "Bu biçimleri yetişkinlerden duymadı; demek ki yalnızca taklit etmiyor, kuralı kendisi çıkarıyor."],
          sonuc: "Bu hataya ==*overgeneralization*== (aşırı genelleme) denir: çocuk kuralı öğrenmiştir, istisnaları henüz değil. Hata, ilerlemenin işaretidir." },
        { tip: "ikili", sol: { ikon: "🧬", baslik: "Doğa görüşü (Chomsky)", maddeler: ["Bebekler dil edinmeye biyolojik olarak hazır doğar", "Aşırı genelleme, kuralı çocuğun kendi çıkardığını gösterir"] },
          sag: { ikon: "🏡", baslik: "Yetiştirme görüşü (Skinner)", maddeler: ["Dil, taklit ve pekiştirmeyle öğrenilir", "Çocuk hangi dilin içinde büyürse onu konuşur"] } },
        { tip: "not", metin: "Bugün çoğu araştırmacı ikisini birleştirir: ==biyolojik yatkınlık== ve ==dil dolu bir çevre== birlikte gerekir. Bu, 3.1'deki *nature–nurture* temasının dildeki örneğidir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Language* ortak (*shared*), keyfî sembollerden oluşan, kurala bağlı (*grammar*, *syntax*) ve üretken (*generative*) bir sistemdir.",
            "*Phoneme* anlamı değiştiren ses birimi, *morpheme* anlamlı en küçük birim, *semantics* anlamdır.",
            "İletişim bilgi alışverişidir; dil ise kurallı ve üretken olmasıyla iletişimin özel bir türüdür.",
            "Bebekler dil öncesinde sözsüz el jestleriyle (işaret etme gibi) iletişim kurar.",
            "Evreler: *cooing* (~2 ay), *babbling* (~4–6 ay), *one-word* (~12 ay), *telegraphic speech* (~18–24 ay).",
            "Evreler bütün kültürlerde aynı sırayla görülür.",
            "*Overgeneralization* (“goed”, “kitapı”) çocuğun kuralı öğrendiğini ama istisnaları henüz bilmediğini gösterir.",
            "Dil gelişiminde hem biyolojik hazırlık hem çevre gerekir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir dilbilimci, “öğretmenler” sözcüğünü öğret + men + ler olarak üç parçaya ayırıyor. Bu parçaların her biri dilin hangi birimidir?",
      opts: ["*Phoneme* (fonem)", "*Morpheme* (morfem)", "*Syntax* (sözdizimi)", "*Telegraphic speech* (telgrafik konuşma)"],
      a: 1,
      why: "Anlam taşıyan en küçük birimlere morfem denir: “öğret”, “-men” ve “-ler” her biri anlamlıdır. En çekici yanlış şık A: fonemler anlamsız ses birimleridir; sözcük çok sayıda fonemden oluşur, üç değil." },
    { q: "Aşağıdakilerden hangisi insan dilinin üretken (*generative*) olma özelliğini en iyi örnekler?",
      opts: ["Bebeğin parmağıyla bir nesneyi işaret etmesi", "Arının dans ederek nektarın yönünü bildirmesi", "Papağanın duyduğu bir cümleyi aynen tekrarlaması", "Çocuğun, daha önce hiç duymadığı bir cümleyi kurması"],
      a: 3,
      why: "Üretkenlik, sınırlı sayıda öğeyle yeni ve sonsuz sayıda cümle kurabilmektir. En çekici yanlış şık C: papağan yalnızca duyduğunu tekrarlar, yeni bir anlam kurmaz." },
    { q: "Tabloda dört bebeğin gözlenen konuşma davranışları verilmiştir. Gözlemler sırasıyla hangi evrelerle eşleşir?",
      fig: { type: "table", caption: "Konuşma gözlemleri", head: ["Bebek", "Yaş", "Gözlem"], rows: [["A", "3 ay", "“Ooo, aaa” gibi ünlü sesler çıkarıyor"], ["B", "6 ay", "“Ba-ba-da-da” heceleri tekrarlıyor"], ["C", "13 ay", "Bardağı gösterip “su” diyor"], ["D", "22 ay", "“Anne su ver” diyor"]] },
      opts: ["*Cooing*, *babbling*, *one-word*, *telegraphic speech*", "*Babbling*, *cooing*, *telegraphic speech*, *one-word*", "*Cooing*, *one-word*, *babbling*, *telegraphic speech*", "*One-word*, *babbling*, *cooing*, *telegraphic speech*"],
      a: 0,
      why: "Ünlü sesler agulamayı, tekrarlanan heceler gevezeliği, tek sözcük ilk sözcük evresini, kısa cümle telgrafik konuşmayı gösterir. En çekici yanlış şık C: gevezelik (ünsüz–ünlü hece) tek sözcük evresinden önce gelir." },
    { q: "Üç yaşındaki Aras, “foot” için “foots”, “went” yerine “goed” diyor. Bu davranış en iyi neyi gösterir?",
      opts: ["Aras yetişkinlerden duyduğu biçimleri aynen taklit ediyor", "Aras dil kurallarını henüz hiç öğrenmemiş", "Aras bir kuralı (çoğul “-s”, geçmiş “-ed”) öğrenmiş ama istisnalara da uyguluyor", "Aras telgrafik konuşma evresinde"],
      a: 2,
      why: "“Foots” ve “goed” yetişkinlerden duyulan biçimler değildir; çocuğun kuralı kendisinin çıkarıp istisnalara da uyguladığını gösterir (*overgeneralization*). En çekici yanlış şık A: bu biçimler duyulmadığı için taklit açıklaması yetersiz kalır." },
    { q: "Türkçede “köpek”, İngilizcede “dog”, Almancada “Hund” sözcükleri aynı hayvanı anlatır. Bu durum dilin hangi özelliğini örnekler?",
      opts: ["Üretkenlik (*generative*)", "Keyfî semboller (*arbitrary symbols*)", "Söz dizimi (*syntax*)", "Telgrafik konuşma"],
      a: 1,
      why: "Aynı kavram için farklı ses dizileri kullanılması, ses ile anlam arasında doğal bir bağ olmadığını (keyfîlik) gösterir; anlam ortak anlaşmayla kazanılır. En çekici yanlış şık C: söz dizimi sözcüklerin diziliş kurallarıdır, sözcük–anlam ilişkisi değil." }
  ]
};
