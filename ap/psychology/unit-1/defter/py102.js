/* Kitora not defteri · py102 · 1.2 Sinir Sistemine Genel Bakış
   Kaynak: AP Psychology CED (2024) Topic 1.2 (+ endokrin sistem). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py102",
  amac: "Bu konu sinir sisteminin bölümlerini ve görevlerini tanıtıyor. Merkezî ve çevresel sistemi, istemli (*somatic*) ile istemsiz (*autonomic*) kolu, sempatik ile parasempatik farkını ve hormonlarla çalışan endokrin sistemi öğreneceksin.",
  bolumler: [
    {
      baslik: "Merkezî ve çevresel sinir sistemi",
      kisa: "Beyin ve omurilik komuta eder; çevresel sistem mesajı vücuda taşır.",
      bloklar: [
        { tip: "harita", merkez: "*Nervous system*", dallar: [
            { baslik: "*CNS*: merkezî", alt: "Beyin + omurilik: bilgiyi işler, karar verir" },
            { baslik: "*PNS*: çevresel", alt: "CNS ile vücut arasında mesaj taşır" },
            { baslik: "PNS → *Somatic*", alt: "İstemli kol: iskelet kasları" },
            { baslik: "PNS → *Autonomic*", alt: "İstemsiz kol: kalp, mide, bezler" },
            { baslik: "Autonomic → *Sympathetic*", alt: "Alarm: savaş ya da kaç" },
            { baslik: "Autonomic → *Parasympathetic*", alt: "Dinlenme: sakinleştirir" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Central nervous system (CNS)", tr: "merkezî sinir sistemi", tanim: "Beyin ve omurilikten oluşur; vücuttaki bütün süreçlerle etkileşir ve komutları üretir.", ornek: "Sınav sorusunu okuyup cevabı seçmek: beyin işler, omurilik mesajı aşağı taşır." },
            { ikon: "🔌", terim: "Peripheral nervous system (PNS)", tr: "çevresel sinir sistemi", tanim: "CNS'den vücudun geri kalanına (ve geri) mesaj taşıyan sinirlerdir; *somatic* ve *autonomic* olarak ikiye ayrılır.", ornek: "Beynin “elini çek” komutu, kola giden sinirlerle ulaşır." }
          ] },
        { tip: "tuzak", metin: "Omurilik ile omurilikten çıkan sinirler karıştırılır.", yanlis: "Omurilik çevresel sinir sisteminin parçasıdır.", dogru: "==Omurilik beyinle birlikte CNS==dir. PNS, CNS'nin dışında kalan ve onu vücuda bağlayan sinirlerdir." }
      ]
    },
    {
      baslik: "Somatik ve otonom sistem",
      kisa: "Somatik sistem istemli hareketi, otonom sistem istemsiz işleyişi yönetir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏃", baslik: "*Somatic nervous system*", maddeler: ["İstemli (gönüllü) süreçleri yönetir", "İskelet kaslarını hareket ettirir; örnek: yazı yazmak, top atmak"] },
          sag: { ikon: "❤️", baslik: "*Autonomic nervous system*", maddeler: ["İstemsiz (otomatik) süreçleri yönetir", "Kalp, sindirim, bezler; *sympathetic* + *parasympathetic*"] },
          oyun: [
            { metin: "Kalemi tutup yazı yazmak.", cevap: "sol", neden: "Bilinçli, iskelet kaslı hareket: *somatic*." },
            { metin: "Yemekten sonra midenin sindirim yapması.", cevap: "sag", neden: "Kendiliğinden işler: *autonomic*." },
            { metin: "Kantinde kuyruğa girmek için yürümek.", cevap: "sol", neden: "İstemli hareket: *somatic*." },
            { metin: "Korkunca kalbin hızlanması.", cevap: "sag", neden: "İstemsiz tepki: *autonomic*." }
          ] },
        { tip: "not", metin: "Ayırt etmenin kuralı: ==istemli → somatik, istemsiz → otonom.== Nefes gibi ikisi arasında kalan işlevler olsa da sınav, bu temel ayrımı sorar." }
      ]
    },
    {
      baslik: "Sempatik ve parasempatik sistem",
      kisa: "Sempatik harekete geçirir; parasempatik sakinleştirir ve enerjiyi korur.",
      bloklar: [
        { tip: "tablo", baslik: "Aynı organ, iki zıt komut", head: ["Beden tepkisi", "*Sympathetic* (alarm)", "*Parasympathetic* (dinlenme)"], rows: [
            ["Kalp atışı", "Hızlanır", "Yavaşlar"],
            ["Solunum", "Hızlanır", "Yavaşlar"],
            ["Göz bebeği", "Büyür", "Küçülür"],
            ["Sindirim", "Yavaşlar", "Hızlanır"],
            ["Tükürük", "Azalır (ağız kurur)", "Artar"],
            ["Enerji", "Harcanır", "Korunur ve depolanır"]
          ], not: "Hatırlatma: sempatik = savaş ya da kaç (*fight or flight*); parasempatik = dinlen ve sindir." },
        { tip: "grafik", baslik: "Sınav sabahı: kalp atışı (kavramsal örnek)", xlabel: "Zaman", ylabel: "Kalp atışı (dakikada)", xmax: 10, ymax: 10,
          yticks: [{ v: 3, label: "70" }, { v: 5, label: "90" }, { v: 8, label: "120" }],
          ogeler: [
            { id: "din", tip: "egri", renk: 2, noktalar: [[0, 3], [1, 3], [2, 3], [3, 3]], gizli: true },
            { id: "t1", tip: "yazi", x: 1.5, y: 4, metin: "Dinlenme", gizli: true },
            { id: "p1", tip: "nokta", renk: 2, x: 2, y: 3, etiket: "~70", kilavuz: true, gizli: true },
            { id: "str", tip: "egri", renk: 1, noktalar: [[3, 3], [3.7, 6], [4.6, 8], [6, 8]], gizli: true },
            { id: "t2", tip: "yazi", x: 4.8, y: 9.2, metin: "Sınav: alarm", gizli: true },
            { id: "p2", tip: "nokta", renk: 1, x: 5.2, y: 8, etiket: "~120", kilavuz: true, gizli: true },
            { id: "top", tip: "egri", renk: 2, noktalar: [[6, 8], [7, 6], [8.5, 4], [10, 3]], gizli: true },
            { id: "t3", tip: "yazi", x: 8.6, y: 6.2, metin: "Toparlanma", gizli: true }
          ],
          durumlar: [
            { metin: "Dikey eksen kalp atışı (dakikadaki vuruş). Sınavdan önce evde sakin bir sabah." },
            { metin: "Sakin sabah: ==parasempatik== baskın. Kalp yavaş, yaklaşık 70.", goster: ["din", "t1", "p1"] },
            { metin: "Sınav kâğıdı dağıtılınca ==sempatik== devreye girer: kalp hızlanır, yaklaşık 120.", goster: ["str", "t2", "p2"] },
            { metin: "Sınav bitince ==parasempatik== sistem devralır; kalp yavaş yavaş normale döner.", goster: ["top", "t3"] }
          ] },
        { tip: "tuzak", metin: "“Sempatik” kelimesi sevecen bir şey çağrıştırıyor, ama sistem tam tersini yapar.", yanlis: "Sempatik sistem vücudu sakinleştirir.", dogru: "Sempatik sistem ==alarm== sistemidir; sakinleştiren ve enerjiyi koruyan ==parasempatik==tir." }
      ]
    },
    {
      baslik: "Endokrin sistem",
      kisa: "Endokrin sistem hormonları kana salar; sinirden yavaş ama daha kalıcıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Sinir sistemi ve endokrin sistem", head: ["Özellik", "Sinir sistemi", "Endokrin sistem"], rows: [
            ["Mesajcı", "*Neurotransmitter*", "*Hormone*"],
            ["Yol", "Nöronlar ve sinapslar", "Kan dolaşımı"],
            ["Hız", "Çok hızlı (milisaniyeler)", "Daha yavaş (saniyeler, dakikalar)"],
            ["Etki süresi", "Kısa", "Daha uzun"],
            ["Örnek", "Elini sıcak çaydanlıktan çekmek", "Açlık, uyku düzeni, stres tepkisinin sürmesi"]
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Hormone", tr: "hormon", tanim: "Bezlerden kana salınan, hedef hücreleri etkileyen kimyasal haberci. ==Sinir sistemi dışında, nörotransmitterlere benzer işler görür.==", ornek: "Korkunca kana karışan adrenalin kalbi hızlandırır." },
            { ikon: "🎛️", terim: "Pituitary gland", tr: "hipofiz", tanim: "Öteki endokrin bezleri yönlendiren hormonlar salgılar; beyindeki hipotalamusla bağlıdır (Konu 1.4).", ornek: "Büyümeyi ve doğumla ilgili süreçleri etkileyen hormonlar." }
          ] }
      ]
    },
    {
      baslik: "Sinir ve endokrin birlikte: stres tepkisi",
      kisa: "Tehdit önce sinirleri, sonra hormonları harekete geçirir; bitince parasempatik devralır.",
      bloklar: [
        { tip: "adimlar", baslik: "Gece karanlıkta arkandan ayak sesi geliyor", adimlar: [
            { baslik: "Algılama", metin: "Beyin (CNS) tehdidi algılar." },
            { baslik: "Sempatik sistem", metin: "Kalp hızlanır, nefes sıklaşır, göz bebekleri büyür, sindirim yavaşlar." },
            { baslik: "Hormon desteği", metin: "Adrenalin (*adrenaline*) kana karışır; etki dakikalarca sürdüğü için tehlike geçse de bir süre titrersin." },
            { baslik: "Tehdit biter", metin: "Parasempatik sistem kalbi ve nefesi sakinleştirir; beden enerjiyi korumaya döner." }
          ] },
        { tip: "tuzak", metin: "İki alt sistem hakkında sık yapılan bir yanlış.", yanlis: "Sempatik ve parasempatik sistem aynı anda tam güçle çalışır ya da biri tamamen kapanır.", dogru: "İkisi de arka planda sürekli çalışır; ==hangisinin baskın olduğu== duruma göre değişir. Sınav stresinde sempatik, yemekten sonra parasempatik baskındır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*CNS* = beyin + omurilik; *PNS* = CNS'yi vücuda bağlayan sinirler. Omurilik CNS'dedir.",
            "PNS ikiye ayrılır: *somatic* (istemli, iskelet kasları) ve *autonomic* (istemsiz: kalp, mide, bezler).",
            "*Autonomic* = *sympathetic* (alarm: kalp ve nefes hızlanır, sindirim yavaşlar) + *parasympathetic* (dinlenme: sakinleştirir, enerjiyi korur).",
            "Tepki bittiğinde parasempatik sistem bedeni normale döndürür.",
            "Endokrin sistem *hormone*'ları kana salar: sinir sisteminden yavaş, ama etkisi daha uzun sürer.",
            "Bezleri tek tek ezberleme; yalnızca *pituitary gland* (hipofiz) önemlidir.",
            "Stres tepkisinde sinirler (hızlı) ve hormonlar (adrenalin; daha uzun) birlikte çalışır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir öğrenci sınavın ortasında kalbinin hızla attığını, avuçlarının terlediğini ve ağzının kuruduğunu fark ediyor. Bu sırada hangi sistem baskındır?",
      opts: ["Parasempatik sinir sistemi", "Somatik sinir sistemi", "Yalnızca merkezî sinir sistemi", "Sempatik sinir sistemi"],
      a: 3,
      why: "Kalp hızlanması, terleme ve ağız kuruması alarm tepkisidir: otonom sistemin sempatik kolu. A en çekici yanlış: parasempatik bunun tersini, yani yavaşlamayı ve dinlenmeyi sağlar." },
    { q: "Aşağıdakilerden hangisi çevresel sinir sisteminin somatik koluna örnektir?",
      opts: ["Bir çay bardağını tutmak için parmakları hareket ettirmek", "Korkunca kalbin hızlanması", "Yemekten sonra midenin hareket etmesi", "Parlak ışıkta göz bebeğinin küçülmesi"],
      a: 0,
      why: "Somatik sistem istemli, iskelet kaslı hareketleri yönetir. Diğer şıkların hepsi istemsiz (otonom) işleyiştir; B en çekici yanlış çünkü korku tepkisi bilinçli verilmez." },
    { q: "Bir öğrenci okul koridorunda aniden korkuyor; tehlike geçtikten sonra da ellerinin titremesi dakikalarca sürüyor. Bu sürenin en iyi açıklaması hangisidir?",
      opts: ["Sinirsel mesajlar kan yoluyla taşındığı için uzun sürer", "Adrenalin gibi hormonlar kanda dolaşır ve etkisi sinirsel mesajlardan daha uzun sürer", "Parasempatik sistem hiç devreye girmez", "Somatik sinir sistemi titremeyi bilinçli olarak sürdürür"],
      a: 1,
      why: "Endokrin sistemin hormonları kan yoluyla yayılır; sinyal daha yavaş başlar ama etki daha uzun sürer. A en çekici yanlış: sinirsel mesajlar kanla değil, nöronlar ve sinapslarla taşınır. C de yanlış: tehlike geçince parasempatik sistem devreye girer." },
    { q: "Tabloya göre eşleştirmelerden hangisi doğrudur?",
      fig: { type: "table", caption: "Bir günün kayıtları", head: ["An", "Gözlem"], rows: [["Sabah", "Okula yetişmek için koşarken bacak kaslarının çalışması"], ["Öğle", "Yemekten sonra mide hareketlerinin artması"], ["Akşam", "Maçtan önce kalbin hızlanması"]] },
      opts: ["Sabah: parasempatik; öğle: somatik; akşam: sempatik", "Sabah: sempatik; öğle: parasempatik; akşam: somatik", "Sabah: somatik; öğle: parasempatik; akşam: sempatik", "Sabah: somatik; öğle: sempatik; akşam: parasempatik"],
      a: 2,
      why: "Koşmak istemli (somatik); yemek sonrası sindirim istemsiz ve dinlenme kolunun işi (parasempatik); maç heyecanıyla hızlanan kalp alarm kolunun işi (sempatik). B en çekici yanlış: koşmayı sempatik, kalp hızlanmasını somatik sayıyor." },
    { q: "Aşağıdakilerden hangisi merkezî sinir sistemi (CNS) ile çevresel sinir sistemi (PNS) arasındaki ilişkiyi doğru anlatır?",
      opts: ["PNS beyin ve omuriliği içerir; CNS ise vücuttaki sinirlerdir", "CNS beyin ve omurilikten oluşur; PNS onu vücudun geri kalanına bağlar", "CNS yalnızca beyindir; omurilik PNS'ye aittir", "CNS istemli, PNS istemsiz hareketleri yönetir"],
      a: 1,
      why: "CNS = beyin + omurilik; PNS = CNS dışındaki sinirler (somatik + otonom). C en çekici yanlış: omurilik de CNS'tedir. D yanlış: istemli/istemsiz ayrımı PNS'nin kendi içindedir (somatik ve otonom)." }
  ]
};
