/* Kitpath not defteri · py303 · 3.3 Toplumsal Cinsiyet ve Cinsel Yönelim
   Kaynak: AP Psychology CED (2024) Topic 3.3. Blok türleri: /ap/_kit/defter.js başı.
   Not: konu olgusal ve saygılı bir dille, CED'deki çerçevede (cinsiyet ve toplumsal cinsiyetin sosyalleşmeye ve gelişime etkisi) anlatılır. */
window.DEFTER = {
  slug: "py303",
  amac: "Bu konu biyolojik cinsiyet ile toplumsal cinsiyetin farkını ve ikisinin sosyalleşmeyi ve gelişimi nasıl etkilediğini anlatıyor. Cinsiyet kimliği, cinsiyet rolü ve cinsel yönelimi ayrı kavramlar olarak öğrenecek, bu alandaki araştırmaları nasıl yorumlayacağını göreceksin.",
  bolumler: [
    {
      baslik: "*Sex* ve *gender*: biyoloji ve toplum",
      kisa: "*Sex* biyolojiktir; *gender* toplumun ve kültürün anlam yüklediği rollerdir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧬", baslik: "*Sex* (biyolojik cinsiyet)", maddeler: ["Kromozom, hormon ve üreme organları gibi biyolojik özellikler", "Doğumda genellikle bu özelliklere bakılarak belirlenir"] },
          sag: { ikon: "🌍", baslik: "*Gender* (toplumsal cinsiyet)", maddeler: ["Toplumun ve kültürün kadınlık ve erkeklikle ilişkilendirdiği roller, davranışlar ve beklentiler", "Kültürden kültüre ve çağdan çağa değişir"] },
          oyun: [
            { metin: "XX ya da XY kromozom yapısı.", cevap: "sol", neden: "Biyolojik özellik: *sex*." },
            { metin: "Bir toplumda çocuk bakımının çoğunlukla “kadın işi” sayılması.", cevap: "sag", neden: "Toplumsal beklenti: *gender*." },
            { metin: "Ergenlikte testosteron düzeyinin artması.", cevap: "sol", neden: "Hormonal, biyolojik değişim: *sex*." },
            { metin: "Bir okulda kızların “sakin”, erkeklerin “yaramaz” olmasının beklenmesi.", cevap: "sag", neden: "Davranışa yönelik toplumsal beklenti: *gender*." }
          ] },
        { tip: "not", metin: "Biyolojik cinsiyet de her zaman iki net kutuya girmez: bazı insanlar bu kategorilerin ikisine de tam uymayan bedensel özelliklerle doğar (*intersex*). Sınavda temel ayrım şudur: ==biyoloji mi, toplum ve kültür mü?==" }
      ]
    },
    {
      baslik: "Üç ayrı boyut: kimlik, rol, yönelim",
      kisa: "Cinsiyet kimliği, cinsiyet rolü ve cinsel yönelim birbirinden ayrı kavramlardır.",
      bloklar: [
        { tip: "tablo", baslik: "Üç kavram, üç farklı soru", head: ["Kavram", "Cevapladığı soru", "Örnek"], rows: [
            ["*Gender identity* (cinsiyet kimliği)", "“Kendimi nasıl tanımlıyorum?”", "Kişinin kendini kadın, erkek ya da bu ikisinin dışında bir kimlikle tanımlaması"],
            ["*Gender role* (cinsiyet rolü)", "“Toplum benden ne bekliyor?”", "Erkeklerden “güçlü”, kadınlardan “şefkatli” olmalarının beklenmesi"],
            ["*Sexual orientation* (cinsel yönelim)", "“Duygusal ve cinsel olarak kime ilgi duyuyorum?”", "Karşı cinse, aynı cinse, her ikisine ya da kimseye ilgi"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Cisgender", tr: "doğumda atanan cinsiyetle uyumlu kimlik", tanim: "Cinsiyet kimliğinin, doğumda atanan biyolojik cinsiyetle uyumlu olması.", ornek: "Doğumda kız olarak kaydedilen ve kendini kadın olarak tanımlayan kişi." },
            { ikon: "🧭", terim: "Transgender", tr: "doğumda atanan cinsiyetle uyumsuz kimlik", tanim: "Cinsiyet kimliğinin, doğumda atanan cinsiyetle uyumlu olmaması. Bu bir yönelim değil, kimlik tanımıdır.", ornek: "Doğumda erkek olarak kaydedilip kendini kadın olarak tanımlayan kişi." }
          ] },
        { tip: "tuzak", metin: "Kimlik ile yönelim karıştırılır; oysa ikisi birbirinden bağımsız boyutlardır.", yanlis: "Transgender olmak, belli bir cinsel yönelimi gösterir.", dogru: "==Kimlik== “ben kimim?” sorusunu, ==yönelim== “kime ilgi duyuyorum?” sorusunu cevaplar. Her kimlikte her yönelim görülebilir." }
      ]
    },
    {
      baslik: "Toplumsal cinsiyet sosyalleşmesi",
      kisa: "Aile, akran, okul ve medya, çocuğa toplumsal cinsiyet beklentilerini öğretir.",
      bloklar: [
        { tip: "harita", merkez: "*Gender socialization*", dallar: [
            { baslik: "Aile", alt: "Oyuncak, giysi, ev işi ve “yakışır” davranış beklentileri" },
            { baslik: "Akranlar", alt: "Kiminle oynanır, hangi davranış onaylanır ya da dışlanır" },
            { baslik: "Okul", alt: "Öğretmen beklentileri, ders ve etkinlik seçimleri" },
            { baslik: "Medya", alt: "Reklamlar, diziler, oyun karakterleri" },
            { baslik: "Kültür", alt: "Beklentiler toplumdan topluma ve dönemden döneme değişir" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Gender typing", tr: "cinsiyete uygun davranışların edinilmesi", tanim: "Çocuğun, kültürün kendi cinsiyetine uygun saydığı davranışları edinmesi; modellerden öğrenme ve pekiştirmeyle gerçekleşir.", ornek: "Çocuğun, çevresinin onayladığı oyunları ve giysileri seçmeye başlaması." },
            { ikon: "🗂️", terim: "Gender schema", tr: "cinsiyet şeması", tanim: "Bilgiyi cinsiyete göre düzenleyen zihinsel çerçeve; çocuk neyin “kızlara”, neyin “erkeklere” ait olduğuna dair beklentiler kurar.", ornek: "Hekim sözcüğünü duyunca önce hep bir erkeği düşünmek." }
          ] },
        { tip: "tuzak", metin: "Cinsiyet rolleri toplumdan topluma değişir; bu, öğrenmenin (sosyalleşmenin) payını gösterir. Biyolojik etkiler de tartışılır; sınav kavramları ikisini birlikte düşünmeni ister.", yanlis: "Cinsiyet rolleri her kültürde aynıdır, bu yüzden tamamen biyolojiktir.", dogru: "Rol beklentileri ==kültüre ve döneme göre değişir==; sosyalleşme önemli bir etkendir, biyoloji tek açıklama değildir." }
      ]
    },
    {
      baslik: "Gruplar arası fark mı, grup içi çeşitlilik mi?",
      kisa: "Ortalama farkı küçük olsa da grup içindeki çeşitlilik genellikle daha büyüktür.",
      bloklar: [
        { tip: "grafik", baslik: "İki cinsiyet grubunda ölçülen bir özellik (şematik)", xlabel: "Özellik puanı", ylabel: "Kişi sayısı", xmax: 12, ymax: 9,
          ogeler: [
            { id: "A", tip: "egri", renk: 0, noktalar: [[0, 0.07], [1, 0.31], [2, 1.06], [3, 2.67], [4, 4.95], [5, 6.74], [6, 6.74], [7, 4.95], [8, 2.67], [9, 1.06], [10, 0.31], [11, 0.07], [12, 0.01]], etiket: "Grup A" },
            { id: "B", tip: "egri", renk: 1, noktalar: [[0, 0.01], [1, 0.07], [2, 0.31], [3, 1.06], [4, 2.67], [5, 4.95], [6, 6.74], [7, 6.74], [8, 4.95], [9, 2.67], [10, 1.06], [11, 0.31], [12, 0.07]], etiket: "Grup B", gizli: true },
            { id: "mA", tip: "cizgi", renk: 0, kesik: true, from: [5.5, 0], to: [5.5, 7.6], etiket: "", gizli: true },
            { id: "mB", tip: "cizgi", renk: 1, kesik: true, from: [6.5, 0], to: [6.5, 7.6], etiket: "", gizli: true },
            { id: "fark", tip: "yazi", x: 6, y: 8.4, metin: "Ortalama farkı: küçük", gizli: true },
            { id: "gen", tip: "ok", renk: 3, from: [2, 1.4], to: [10, 1.4], gizli: true },
            { id: "genL", tip: "yazi", x: 6, y: 2.2, metin: "Grup içi çeşitlilik: büyük", gizli: true }
          ],
          durumlar: [
            { metin: "Bir özellik için A grubunun puan dağılımı: çoğu kişi ortada, az sayıda kişi uçlarda." },
            { metin: "B grubunun dağılımı da benzer; ortalaması yalnızca biraz daha yüksek. İki eğri ==büyük ölçüde örtüşüyor==.", goster: ["B"] },
            { metin: "Ortalamalar arasındaki fark küçük.", goster: ["mA", "mB", "fark"] },
            { metin: "Oysa her grubun içinde çok geniş bir çeşitlilik var. Ortalama farkı tek tek kişiler hakkında az şey söyler.", goster: ["gen", "genL"] }
          ] },
        { tip: "tuzak", metin: "Bir özellikte ortalama farkı bulunması, o grubun her üyesinin farklı olduğu anlamına gelmez. Araştırmalarda birçok psikolojik özellik için cinsiyetler arası farkların küçük olduğu bildirilir.", yanlis: "Gruplar arasında ortalama farkı varsa her kadın ve her erkek bu farka uyar.", dogru: "==Dağılımlar büyük ölçüde örtüşür==; grup ortalaması bireyi tahmin etmeye yetmez." }
      ]
    },
    {
      baslik: "Cinsel yönelim",
      kisa: "Cinsel yönelim kime ilgi duyduğumuzu anlatır; tek bir nedeni belirlenmemiştir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💞", terim: "Heterosexual", tr: "karşı cinse yönelim", tanim: "Duygusal ve cinsel ilginin karşı cinsten kişilere yönelmesi.", ornek: "Kadınların erkeklere, erkeklerin kadınlara ilgisi." },
            { ikon: "🌈", terim: "Homosexual (gay, lesbian)", tr: "aynı cinse yönelim", tanim: "İlginin aynı cinsten kişilere yönelmesi. Günlük dilde erkekler için *gay*, kadınlar için *lesbian* denir.", ornek: "Bir erkeğin erkeklere, bir kadının kadınlara ilgisi." },
            { ikon: "🔀", terim: "Bisexual", tr: "her iki cinse yönelim", tanim: "İlginin hem kadınlara hem erkeklere yönelmesi.", ornek: "Aynı kişinin farklı cinslerden insanlara ilgi duyması." },
            { ikon: "⚪", terim: "Asexual", tr: "cinsel çekim duymama", tanim: "Başkalarına karşı cinsel çekim duymama ya da çok az duyma.", ornek: "Yakın dostluk ve duygusal bağ kurup cinsel çekim hissetmemek." },
            { ikon: "📏", terim: "Kinsey scale", tr: "Kinsey ölçeği", tanim: "Yönelimi iki uçlu bir kategori yerine 0'dan 6'ya kadar bir süreklilik olarak ele alan ölçek.", ornek: "0 yalnızca karşı cinse, 6 yalnızca aynı cinse ilgi; ortası ikisine de ilgi." }
          ] },
        { tip: "harita", merkez: "Yönelimi şekillendirdiği düşünülenler", dallar: [
            { baslik: "Genler", alt: "İkiz çalışmaları kalıtımın bir payı olduğunu düşündürür" },
            { baslik: "Doğum öncesi hormonlar", alt: "Anne karnındaki hormon ortamı" },
            { baslik: "Beyin yapısı ve işlevi", alt: "Bazı çalışmalarda gruplar arası farklar bildirilmiştir" },
            { baslik: "Çevre ve yaşantılar", alt: "Etkisi tartışılır ve tek başına açıklayıcı değildir" }
          ] },
        { tip: "tuzak", metin: "Yönelimi “seçilen” ya da “iyileştirilebilir” bir durum sanmak yaygın bir yanlıştır.", yanlis: "Cinsel yönelim bir ruhsal bozukluktur ya da bilinçli bir seçimdir.", dogru: "Cinsel yönelim ==bir bozukluk değildir== (APA 1973'te homoseksüelliği DSM'den çıkardı). Araştırmalar tek bir neden değil, ==biyolojik ve çevresel etkenlerin birlikte== rolünü düşündürür. Yönelimi değiştirme çabalarının işe yaradığına dair bilimsel kanıt yoktur." }
      ]
    },
    {
      baslik: "Araştırma yöntemi: deneysel mi, değil mi?",
      kisa: "Cinsiyet rastgele atanamaz; bu yüzden çoğu çalışma deneysel olmayan yöntemle yapılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧪", baslik: "*Experiment* (deney)", maddeler: ["Araştırmacı bağımsız değişkeni belirler, rastgele atama yapar", "Neden–sonuç çıkarımı mümkündür"] },
          sag: { ikon: "📋", baslik: "*Non-experimental* (deneysel olmayan)", maddeler: ["Anket, gözlem, korelasyon, vaka çalışması", "İlişkiyi gösterir, nedenselliği kanıtlayamaz"] },
          oyun: [
            { metin: "Araştırmacı 150 ergene toplumsal cinsiyet tutumlarını ölçen bir anket verip puanları cinsiyete göre karşılaştırıyor.", cevap: "sag", neden: "Anket ve gruplar arası karşılaştırma: deneysel olmayan (korelasyonel) çalışma." },
            { metin: "Öğrenciler rastgele iki gruba ayrılıyor; biri kalıp yargılarla ilgili bir metin, diğeri nötr bir metin okuyup aynı testi çözüyor.", cevap: "sol", neden: "Bağımsız değişken (okunan metin) araştırmacı tarafından belirleniyor ve rastgele atama var: deney." },
            { metin: "Bir araştırmacı oyun alanında kimin hangi oyuncakla oynadığını doğal ortamda sayıyor.", cevap: "sag", neden: "Doğal gözlem; değişken manipüle edilmiyor: deneysel olmayan." }
          ] },
        { tip: "tuzak", metin: "Cinsiyet gibi değişkenler araştırmacı tarafından atanamaz; bu yüzden karşılaştırmalar yalnızca ilişki gösterir.", yanlis: "Anketteki kız–erkek farkı, farkın nedeninin cinsiyet olduğunu kanıtlar.", dogru: "Cinsiyete göre karşılaştırma ==nedensellik göstermez==; fark biyolojiden, sosyalleşmeden ya da üçüncü bir değişkenden gelebilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Sex* biyolojiktir (kromozom, hormon, üreme organları); *gender* toplum ve kültürün anlam yüklediği roller ve beklentilerdir.",
            "*Gender identity* (kendimi nasıl tanımlıyorum), *gender role* (toplum ne bekliyor) ve *sexual orientation* (kime ilgi duyuyorum) ayrı boyutlardır.",
            "*Gender socialization* aile, akranlar, okul, medya ve kültür yoluyla gerçekleşir; *gender typing* ve *gender schema* bunun kavramlarıdır.",
            "Rol beklentilerinin kültürlere göre değişmesi sosyalleşmenin payını gösterir; biyolojik etkiler de tartışılır.",
            "Gruplar arası ortalama farkları küçük olabilir; grup içi çeşitlilik çoğu zaman daha büyüktür.",
            "Cinsel yönelim heterosexual, homosexual, bisexual ve asexual gibi biçimlerde tanımlanır; tek bir nedeni bulunmamıştır, bir bozukluk değildir.",
            "Cinsiyet rastgele atanamayacağı için bu alandaki araştırmaların çoğu deneysel olmayandır ve nedensellik kanıtlamaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir ailede kız çocuğuna bebek, erkek çocuğuna araba hediye ediliyor ve çocuklar büyüdükçe bu oyuncaklarla oynamayı tercih ediyor. Bu durum en iyi hangi kavramı örnekler?",
      opts: ["Biyolojik cinsiyetin (*sex*) tek belirleyici olması", "Toplumsal cinsiyet sosyalleşmesi (*gender socialization*)", "Cinsel yönelimin erken yaşta belirlenmesi", "Cinsiyet kimliğinin kromozomlarla doğrudan belirlenmesi"],
      a: 1,
      why: "Ailenin sunduğu oyuncaklar ve onayladığı tercihler, çocuğa toplumsal cinsiyet beklentilerini öğreten sosyalleşmenin tipik örneğidir. En çekici yanlış şık A: oyuncak tercihinde çevrenin payı açıkça görülüyor; biyoloji tek açıklama değildir." },
    { q: "Bir kişi doğumda atanan cinsiyetiyle uyumlu bir cinsiyet kimliğine sahiptir (*cisgender*) ve aynı cinsiyetten kişilere duygusal ve cinsel ilgi duymaktadır. Bu örnek hangi ayrımı gösterir?",
      opts: ["Cinsel yönelim, cinsiyet kimliğinin doğal bir sonucudur", "Cinsiyet kimliği ile biyolojik cinsiyet her zaman aynı kavramdır", "*Gender role* ile *sexual orientation* aynı şeydir", "*Gender identity* ile *sexual orientation* birbirinden ayrı boyutlardır"],
      a: 3,
      why: "Kimlik “ben kimim?” sorusunu, yönelim “kime ilgi duyuyorum?” sorusunu cevaplar; biri diğerini belirlemez. En çekici yanlış şık A: yönelim kimlikten türemez, ikisi bağımsız boyutlardır." },
    { q: "Bir araştırmada iki ülkedeki 12–14 yaş grubu çocukların haftalık ev işi süreleri karşılaştırılmıştır. Bu veriler en iyi hangi sonucu destekler?",
      fig: { type: "table", caption: "Haftada ev işine ayrılan ortalama süre (saat)", head: ["Ülke", "Kızlar", "Erkekler"], rows: [["A", 6, 2], ["B", 4, 4]] },
      opts: ["Cinsiyete bağlı ev işi beklentilerinin kültürler arasında değişebildiği", "Kızların biyolojik olarak ev işine daha yatkın olduğu", "B ülkesinde toplumsal cinsiyet rollerinin hiç bulunmadığı", "A ülkesindeki farkın deneysel bir çalışmayla kanıtlandığı"],
      a: 0,
      why: "Aynı yaş grubunda kız–erkek farkının bir ülkede büyük, ötekinde küçük olması, rol beklentilerinin kültüre göre değiştiğini düşündürür. En çekici yanlış şık B: farkın ülkeden ülkeye değişmesi tek başına biyolojik açıklamayı desteklemez." },
    { q: "Bir araştırmacı 300 lise öğrencisine anket uygulayıp kız öğrencilerde bakım mesleklerine ilginin daha yüksek olduğunu buluyor. Bu çalışmadan aşağıdaki çıkarımlardan hangisi savunulamaz?",
      opts: ["Cinsiyet ile meslek ilgisi arasında bir ilişki bulunduğu", "Çalışmanın deneysel olmayan (korelasyonel) bir tasarım olduğu", "Cinsiyetin, meslek ilgisine doğrudan neden olduğu", "Başka değişkenlerin (aile, medya) ilişkiyi etkilemiş olabileceği"],
      a: 2,
      why: "Anket ve gruplar arası karşılaştırma yalnızca ilişkiyi gösterir; cinsiyet rastgele atanamadığı için neden–sonuç iddiası savunulamaz. En çekici yanlış şık D: aslında doğru bir çıkarımdır, bu yüzden “savunulamaz” sorusunun cevabı değildir." },
    { q: "Aşağıdakilerden hangisi cinsel yönelimle ilgili araştırma bulgularını en doğru yansıtır?",
      opts: ["Cinsel yönelim bir ruhsal bozukluktur ve tedavi edilebilir", "Yönelimin tek bir nedeni belirlenmemiştir; biyolojik ve çevresel etkenlerin birlikte rolü düşünülür", "Yönelim yalnızca ebeveyn tutumlarıyla belirlenir", "Yönelim bilinçli ve istenildiğinde değiştirilebilen bir seçimdir"],
      a: 1,
      why: "Araştırmalar yönelim için tek bir neden bulamamış, genetik, doğum öncesi hormonlar ve çevresel etkenlerin birlikte tartışılmasına yol açmıştır; yönelim bir bozukluk değildir. En çekici yanlış şık D: yönelimi değiştirme çabalarının işe yaradığına dair bilimsel kanıt yoktur." }
  ]
};
