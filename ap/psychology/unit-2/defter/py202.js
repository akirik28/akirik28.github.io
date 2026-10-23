/* Kitpath not defteri · py202 · 2.2 Düşünme, Problem Çözme ve Karar Verme
   Kaynak: AP Psychology CED 2024, Topic 2.2 (2.2.A.1–8). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py202",
  amac: "Bu konu zihnin nasıl düşündüğünü, problem çözdüğünü ve karar verdiğini anlatıyor. Kavramlar, şemalar, algoritma ile sezgisel farkı, sezgisel hatalar, çerçeveleme, kumarbaz ve batık maliyet yanılgıları, yürütücü işlevler ve yaratıcılık konularını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kavramlar ve prototipler",
      kisa: "Kavramlar düşüncenin yapı taşıdır; prototip bir kavramın en tipik örneğidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Concept", tr: "kavram", tanim: "Benzer nesneleri, olayları ya da fikirleri bir arada tutan zihinsel kategori. ==Düşüncenin temelidir.==", ornek: "\"Kuş\", \"sınav\", \"arkadaş\"." },
            { ikon: "🥇", terim: "Prototype", tr: "prototip", tanim: "Bir kavramın akla gelen ideal, en tipik örneği. Bir şey prototipe ne kadar benziyorsa o kavrama o kadar kolay dahil edilir.", ornek: "\"Kuş\" denince çoğu kişi serçe ya da güvercin düşünür." }
          ] },
        { tip: "tablo", baslik: "\"Kuş\" kavramında tipiklik", head: ["Hayvan", "Prototipe benzerlik", "Kuş olduğu ne kadar çabuk akla gelir?"], rows: [["Serçe", "Çok yüksek", "Hemen"], ["Kartal", "Yüksek", "Çabuk"], ["Penguen", "Düşük", "Biraz düşünmek gerekir"], ["Devekuşu", "Düşük", "Biraz düşünmek gerekir"]], not: "Penguen de devekuşu da kuştur; ama uçmayan ve tipik görünmeyen örnekler prototipten uzaktır." }
      ]
    },
    {
      baslik: "Şemalar: asimilasyon ve akomodasyon",
      kisa: "Yeni bilgi, şemaya sığdırılırsa asimilasyon; şema değişirse akomodasyondur.",
      bloklar: [
        { tip: "adimlar", baslik: "Küçük bir çocuk ve bir kedi", adimlar: [
            { baslik: "Şema", metin: "Çocuğun zihninde \"köpek\" şeması var: dört ayaklı, tüylü, kuyruklu." },
            { baslik: "*Assimilation*", metin: "İlk kez bir kedi görünce \"köpek\" der. Yeni bilgi, mevcut şemaya sığdırıldı; şema değişmedi." },
            { baslik: "*Accommodation*", metin: "Büyükler \"bu kedi\" deyince çocuk yeni bir \"kedi\" şeması oluşturur. Şema, yeni bilgiyi içerecek biçimde değişti." }
          ] },
        { tip: "ikili", sol: { ikon: "🧩", baslik: "*Assimilation*", maddeler: ["Yeni bilgiyi var olan şemaya yerleştirir", "Şema değişmez"] },
          sag: { ikon: "🔧", baslik: "*Accommodation*", maddeler: ["Şemayı yeni bilgiye göre değiştirir", "Şema genişler ya da yenisi kurulur"] },
          oyun: [
            { metin: "Kantindeki yeni tür bir gazozu da \"içecek\" şemana ekleyip hiçbir şeyi değiştirmedin.", cevap: "sol", neden: "Bilgi şemaya sığdı: *assimilation*." },
            { metin: "Yarasanın kuş değil memeli olduğunu öğrenince \"uçan hayvan = kuş\" fikrini düzelttin.", cevap: "sag", neden: "Şema yeni bilgiye göre değişti: *accommodation*." },
            { metin: "Bir bebek, bütün küçük hayvanlara \"kedi\" demeye devam ediyor.", cevap: "sol", neden: "Yeni örnekler eski şemaya yerleştiriliyor: *assimilation*." },
            { metin: "Telefonu yalnızca aramak için sanırken uygulama dünyasını öğrenip telefon fikrini genişlettin.", cevap: "sag", neden: "Şema değişti: *accommodation*." }
          ] }
      ]
    },
    {
      baslik: "Algoritma ve sezgisel: yavaş ve kesin mi, hızlı ve riskli mi?",
      kisa: "Algoritma doğruyu garanti eder ama yavaştır; sezgisel hızlıdır ama hata yapabilir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧮", baslik: "*Algorithm*", maddeler: ["Doğru çözüm bulunana kadar bütün olasılıkları dener", "Kesin ama yavaş olabilir"] },
          sag: { ikon: "⚡", baslik: "*Heuristic*", maddeler: ["Zihinsel kısayol; hızlı yargı", "Çoğunlukla işe yarar ama hata yaptırabilir"] },
          oyun: [
            { metin: "Unuttuğun 4 haneli kilidi 0000'dan başlayıp 9999'a kadar denemek.", cevap: "sol", neden: "Bütün olasılıklar sırayla: *algorithm*." },
            { metin: "Kilit şifresi için önce doğum yılını ve telefon numarasının son hanelerini denemek.", cevap: "sag", neden: "Akla yatkın bir kısayol: *heuristic*." },
            { metin: "Kitapta bir kelimeyi bulmak için her sayfayı tek tek çevirmek.", cevap: "sol", neden: "Sistematik tarama, mutlaka bulur: *algorithm*." },
            { metin: "Kalabalık bir yemekhanede en uzun kuyruğa girmemek için \"kısa olan iyidir\" demek.", cevap: "sag", neden: "Pratik bir kural, hızlı karar: *heuristic*." }
          ] },
        { tip: "ornek", baslik: "4 haneli kilidin algoritması", durum: "Bisiklet kilidinin şifresini unuttun. Her hane 0–9 arası olabilir. En kötü durumda kaç denemen gerekir?",
          adimlar: ["Her hane için 10 seçenek var.", "Dört hane için toplam kombinasyon: 10 × 10 × 10 × 10 = 10.000.", "Algoritma bütün kombinasyonları denediği için çözümü kesinlikle bulur."],
          sonuc: "En kötü durumda ==10.000 deneme==. Algoritma kesindir ama yavaştır; sezgisel (doğum yılı, tekrarlayan sayılar) çoğu zaman çok daha hızlı denemeyi sağlar." },
        { tip: "tuzak", metin: "*Heuristic* kötü bir şey değildir; sadece garantisi yoktur.", yanlis: "*Heuristic* her zaman yanlış sonuç verir.", dogru: "*Heuristic* hızlıdır ve çoğu zaman işe yarar; ama bazen hata yaptırır. *Algorithm* doğruyu garanti eder, fakat yavaş olabilir." }
      ]
    },
    {
      baslik: "Sezgisel hatalar: *availability* ve *representativeness*",
      kisa: "Akla ilk gelen örnek ya da kalıp yargı, kararları yanlış yöne çekebilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📰", terim: "Availability heuristic", tr: "bulunabilirlik sezgisi", tanim: "Bir olayın ne kadar sık olduğunu, aklına gelen ilk ya da en canlı örneğe göre tahmin etme.", ornek: "Haberlerde köpek saldırısı görünce \"köpekler çok tehlikeli\" sanmak." },
            { ikon: "🧑‍🎓", terim: "Representativeness heuristic", tr: "temsil edicilik sezgisi", tanim: "Birini ya da bir şeyi, zihnindeki prototipe veya stereotipe benzemesine göre yargılama; asıl olasılık ya da gerçekler gözden kaçar.", ornek: "Gözlüklü, kitapkurdu biri görünce \"kesin edebiyat öğrencisi\" demek." }
          ] },
        { tip: "ikili", sol: { ikon: "📰", baslik: "*Availability*", maddeler: ["Akla gelen ilk / en canlı örnek", "Kolay hatırlanan şey sık sanılır"] },
          sag: { ikon: "🧑‍🎓", baslik: "*Representativeness*", maddeler: ["Prototipe / stereotipe benzerlik", "\"Gibi görünüyor, öyledir\""] },
          oyun: [
            { metin: "Uçak kazasını haberde görünce \"uçmak, arabadan tehlikeli\" diye düşünüyorsun.", cevap: "sol", neden: "Canlı ve hatırlanması kolay bir örnek: *availability*." },
            { metin: "Sporcu cüssesine sahip birini görünce hemen \"kesin basketbolcudur\" diyorsun.", cevap: "sag", neden: "Prototipe benzediği için sınıflıyorsun: *representativeness*." },
            { metin: "Bir hafta önce yaşadığın dolandırıcılık hikâyesini hatırlayınca \"herkes dolandırıcı\" demek.", cevap: "sol", neden: "Kolay akla gelen anı: *availability*." },
            { metin: "Sessiz ve düzenli birini görünce \"mühendis olmalı\" demek.", cevap: "sag", neden: "Stereotipe uyduğu için: *representativeness*." }
          ] }
      ]
    },
    {
      baslik: "Kararı etkileyenler: *mental set*, *priming* ve *framing*",
      kisa: "Geçmişte işe yarayan yol, ipuçları ve sunuluş biçimi kararı farkında olmadan yönlendirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧰", terim: "Mental set", tr: "zihinsel küme", tanim: "Geçmişte işe yarayan çözümü yeni problemde de kullanma eğilimi. Çoğu zaman yardımcıdır, ama daha iyi bir yol varsa engeller.", ornek: "Hep aynı formülle çözdüğün sorularda bu kez daha kolay yolu görememek." },
            { ikon: "💡", terim: "Priming", tr: "hazırlama", tanim: "Önceki bir uyaranın, farkında olmadan sonraki düşünce ve kararları etkilemesi.", ornek: "Kırmızıyla ilgili kelimeler okuduktan sonra \"elma\" sözcüğünü daha hızlı tanımak." },
            { ikon: "🖼️", terim: "Framing", tr: "çerçeveleme", tanim: "Aynı bilginin sunuluş biçimi (kazanç mı kayıp mı) kararı değiştirir.", ornek: "\"Yüzde 90 yağsız\" ve \"yüzde 10 yağlı\" aynıdır, ama ilki daha çekici gelir." }
          ] },
        { tip: "tablo", baslik: "*Framing*: aynı bilgi, iki çerçeve", head: ["Çerçeve", "Cümle", "Tipik tepki"], rows: [["Olumlu", "\"Ameliyatın başarı oranı %90.\"", "Daha çok kişi kabul eder"], ["Olumsuz", "\"Her 100 kişiden 10'u kaybediyor.\"", "Daha çok kişi tereddüt eder"]], not: "İki cümle matematiksel olarak aynı bilgidir; değişen yalnızca çerçevedir." }
      ]
    },
    {
      baslik: "Karar tuzakları: kumarbaz ve batık maliyet yanılgıları",
      kisa: "Geçmiş atışlar bir sonrakini etkilemez; harcanmış bedel geleceği değiştirmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎰", terim: "Gambler's fallacy", tr: "kumarbaz yanılgısı", tanim: "Bağımsız olaylarda geçmiş sonuçların bir sonrakini etkilediğini sanmak. \"Çok uzun süre tura geldi, sıra yazıda.\"", ornek: "Madeni para 5 kez tura gelince 6. atışta yazı gelme olasılığının %50'den fazla olduğunu sanmak." },
            { ikon: "💸", terim: "Sunk-cost fallacy", tr: "batık maliyet yanılgısı", tanim: "Zaten harcanmış ve geri alınamayan emek ya da parayı hesaba katarak, işe yaramayan bir şeyi sürdürmek.", ornek: "Kötü bir filme 200 TL verdiğin için, sıkıldığın hâlde sonuna kadar izlemek." }
          ] },
        { tip: "grafik", baslik: "Madeni para: sonraki atış neden hâlâ %50?", xlabel: "Art arda gelen \"tura\" sayısı", ylabel: "Sonraki atışta \"yazı\" olasılığı", xmax: 6, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          yticks: [{ v: 5, label: "%50" }, { v: 8, label: "%80" }],
          ogeler: [
            { id: "g", tip: "cizgi", renk: 0, from: [0, 5], to: [6, 5], etiket: "Gerçek", gizli: true },
            { id: "k", tip: "egri", renk: 2, etiket: "Kumarbazın inancı", noktalar: [[0, 5], [1, 5.7], [2, 6.4], [3, 7.1], [4, 7.7], [5, 8.2]], gizli: true },
            { id: "n", tip: "nokta", x: 5, y: 5, etiket: "Gerçek: %50", kilavuz: true, gizli: true },
            { id: "yz", tip: "yazi", x: 3, y: 9, metin: "Atışlar bağımsız: para geçmişi hatırlamaz", gizli: true }
          ],
          durumlar: [
            { metin: "Adil paranın her atışta yazı olasılığı ==%50==. Önceki sonuçlar bunu değiştirmez.", goster: ["g"] },
            { metin: "Kumarbaz, tura sayısı arttıkça yazının \"gelmesi gerektiğini\" düşünür; inancı yükselir.", goster: ["k"] },
            { metin: "5 turadan sonra bile gerçek olasılık %50'de kalır; inanç ile gerçek arasındaki fark ==yanılgıdır==.", goster: ["n", "yz"] }
          ] },
        { tip: "tuzak", metin: "İki yanılgıyı karıştırmak çok kolay: biri geleceğe dair olasılık hatasıdır, diğeri geçmiş bedelle ilgilidir.", yanlis: "Batık maliyet yanılgısı, art arda gelen sonuçların bir sonrakini değiştireceğini sanmaktır.", dogru: "Bunu yapan ==*gambler's fallacy*==. ==*Sunk-cost fallacy*== ise geri alınamayan geçmiş harcamayı gerekçe gösterip kötü bir yola devam etmektir." }
      ]
    },
    {
      baslik: "Yürütücü işlevler ve eleştirel düşünme",
      kisa: "Yürütücü işlevler hedefe yönelik davranışı üretir, düzenler, planlar ve uygular.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎛️", terim: "Executive functions", tr: "yürütücü işlevler", tanim: "Hedefe yönelik davranışları üretmeyi, düzenlemeyi, planlamayı ve gerçekleştirmeyi sağlayan bilişsel süreçler.", ornek: "Dönem ödevi için konu seçmek, adımları sıralamak, takvim yapmak ve yazmaya oturmak." },
            { ikon: "🔎", terim: "Critical thinking", tr: "eleştirel düşünme", tanim: "Bilgiyi sorgulayıp kanıtla değerlendirmek; ilk akla geleni hemen kabul etmemek.", ornek: "Sosyal medyada gördüğün iddianın kaynağını araştırmak." }
          ] },
        { tip: "adimlar", baslik: "Dönem ödevi: yürütücü işlevler çalışırken", adimlar: [
            { baslik: "Üret", metin: "Konu fikirleri bulursun." },
            { baslik: "Düzenle", metin: "Fikirleri önem sırasına koyarsın." },
            { baslik: "Planla", metin: "Hangi gün neyi yazacağına karar verirsin." },
            { baslik: "Uygula", metin: "Planı takip edip telefonunu bir kenara bırakırsın." }
          ] }
      ]
    },
    {
      baslik: "Yaratıcılık ve *functional fixedness*",
      kisa: "Yaratıcı düşünme çok fikir üretir; sabitlenme nesneyi tek işlevde tutar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌈", baslik: "*Divergent thinking*", maddeler: ["Çok sayıda farklı fikir üretir", "Yaratıcılığın özü"] },
          sag: { ikon: "🎯", baslik: "*Convergent thinking*", maddeler: ["Tek bir doğru cevaba odaklanır", "Çoktan seçmeli sorular gibi"] },
          oyun: [
            { metin: "\"Bir tuğlanın bütün kullanım şekillerini say.\"", cevap: "sol", neden: "Çok sayıda farklı cevap: *divergent*." },
            { metin: "\"2x + 4 = 10 denkleminde x kaç?\"", cevap: "sag", neden: "Tek doğru cevap var: *convergent*." },
            { metin: "Kulübün için aklına gelen bütün etkinlik fikirlerini listelemek.", cevap: "sol", neden: "Yeni fikirlerin çokluğu: *divergent*." },
            { metin: "Beş seçenek arasından tek doğru yanıtı bulmak.", cevap: "sag", neden: "Tek doğruya yaklaşma: *convergent*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🕯️", terim: "Functional fixedness", tr: "işlevsel sabitlenme", tanim: "Bir nesneyi yalnızca alışılmış işleviyle görüp başka bir işe yarayabileceğini düşünememe. Yaratıcı düşünmeyi engeller.", ornek: "Raptiye kutusunu sadece raptiye taşıyan bir kap sanıp, mumu duvara tutturmak için platform olabileceğini görememek." }
          ] },
        { tip: "tuzak", metin: "Zihinsel kümeyle işlevsel sabitlenme, ikisi de \"yeni çözümü görememe\" gibi durur.", yanlis: "*Mental set* ile *functional fixedness* aynı şeydir.", dogru: "==*Mental set*==: daha önce işe yarayan yöntemi sürdürmek. ==*Functional fixedness*==: bir nesneyi yalnızca olağan işleviyle görmek." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Concept* düşüncenin yapı taşı; *prototype* kavramın en tipik örneğidir.",
            "*Assimilation* yeni bilgiyi şemaya sığdırır; *accommodation* şemayı değiştirir.",
            "*Algorithm* bütün olasılıkları dener (kesin, yavaş); *heuristic* mental kısayoldur (hızlı, hata yapabilir).",
            "*Availability*: akla ilk gelen/canlı örnek. *Representativeness*: prototipe ya da stereotipe benzerlik.",
            "*Mental set* geçmişte işe yarayan yolu sürdürmek; *priming* ve *framing* kararı farkında olmadan yönlendirir.",
            "*Gambler's fallacy*: bağımsız atışlarda geçmiş sonucu etkili sanmak. *Sunk-cost fallacy*: harcanmış bedelden vazgeçememek.",
            "*Executive functions* hedefe yönelik davranışı üretir, düzenler, planlar, uygular.",
            "Yaratıcılık *divergent thinking*'dir; *functional fixedness* nesneyi tek işlevde tutarak onu engeller."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Üç yaşındaki bir çocuk ilk kez bir tilki görüyor ve \"köpek\" diyor. Büyükleri \"bu tilki\" deyince çocuk yeni bir \"tilki\" kategorisi oluşturuyor. Bu iki aşama sırasıyla hangi süreçlerdir?",
      opts: ["*Accommodation*, ardından *assimilation*", "*Assimilation*, ardından *priming*", "*Assimilation*, ardından *accommodation*", "*Prototype*, ardından *mental set*"],
      a: 2,
      why: "Tilkiyi mevcut \"köpek\" şemasına yerleştirmek *assimilation*; sonra şemayı değiştirip yeni bir kategori kurmak *accommodation*'dır. En çekici yanlış şık A: sıra ters çevrilmiş." },
    { q: "Defne, bir hafta boyunca haberlerde art arda uçak kazalarını izledikten sonra uçak yerine otobüsle seyahat etmeyi seçiyor, çünkü uçmanın çok tehlikeli olduğunu düşünüyor. Hangi sezgisel hata en iyi açıklar?",
      opts: ["*Availability heuristic*", "*Representativeness heuristic*", "*Algorithm*", "*Sunk-cost fallacy*"],
      a: 0,
      why: "Defne, kolay ve canlı hatırlanan örneklere (haberlerdeki kazalar) bakarak sıklığı tahmin ediyor: *availability*. En çekici yanlış şık B: burada bir prototipe ya da stereotipe benzerlik değil, akla ilk gelen örnek var." },
    { q: "Grafik, bir madeni paranın art arda tura gelmesinin ardından, sonraki atışta yazı gelme olasılığına dair gerçeği ve bir kişinin beklentisini gösteriyor. Kişinin beklentisi hangi bilişsel hatayı yansıtır?",
      fig: { type: "graph", xlabel: "Art arda tura sayısı", ylabel: "Yazı olasılığı", xmax: 6, ymax: 10, lines: [{ from: [0, 5], to: [6, 5], label: "Gerçek: %50" }, { from: [0, 5], to: [5, 8.2], label: "Kişinin inancı", dash: true }], xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }], yticks: [{ v: 5, label: "%50" }, { v: 8, label: "%80" }] },
      opts: ["*Sunk-cost fallacy*", "*Representativeness heuristic*", "*Mental set*", "*Gambler's fallacy*"],
      a: 3,
      why: "Gerçek olasılık sabit %50, kişi ise tura sayısı arttıkça yazının \"gelmesi gerektiğini\" düşünüyor: *gambler's fallacy*. En çekici yanlış şık A: *sunk-cost* geri alınamayan harcamaya tutunmaktır, olasılık beklentisiyle ilgisi yoktur." },
    { q: "Bir doktor hastaya \"ameliyatta hayatta kalma oranı %90\" dediğinde hastalar ameliyatı kabul ediyor; \"her 100 hastadan 10'u hayatını kaybediyor\" dediğinde ise çoğu reddediyor. İki cümle aynı bilgiyi verdiğine göre bu fark neyi gösterir?",
      opts: ["*Priming*", "*Framing*", "*Gambler's fallacy*", "*Representativeness heuristic*"],
      a: 1,
      why: "Aynı bilginin kazanç mı kayıp mı olarak sunulması kararı değiştirmiştir: *framing*. En çekici yanlış şık A: *priming* önceki bir uyaranın sonraki tepkiyi etkilemesidir, bilginin sunuluş biçimiyle ilgili değildir." },
    { q: "Meltem kâğıtlarını tutturmak için zımba arıyor. Çantasındaki saç tokasını kullanmayı hiç düşünmüyor, çünkü onu yalnızca saça takılan bir nesne olarak görüyor. Bu durum en iyi hangi kavramla açıklanır?",
      opts: ["*Mental set*", "*Divergent thinking*", "*Functional fixedness*", "*Algorithm*"],
      a: 2,
      why: "Nesneyi yalnızca alışılmış işleviyle görüp başka bir kullanım düşünememek *functional fixedness*'tır. En çekici yanlış şık A: *mental set*, önceden işe yarayan bir *yöntemi* tekrarlamaktır; burada bir nesnenin tek işlevde algılanması söz konusu." }
  ]
};
