/* Kitpath not defteri · bf401 · 4.1 Yönetim ve Liderlik
   Kaynak: College Board CED, Topic 4.1 (4.1.A–4.1.D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf401",
  amac: "Bu konu işletmenin insanlarını yönetmeyi anlatıyor: yönetimin dört işlevini, liderlik ve iletişim becerilerini, doğru çalışanı bulup yetiştirmeyi ve çalışanı ücret, yan hak ve motivasyonla elde tutmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Yönetim nedir? Dört işlev",
      kisa: "Yönetim; insan, para ve fiziksel kaynakları planlar, düzenler, yönlendirir ve değerlendirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Management", tr: "yönetim", tanim: "İşletmenin hedeflerine ulaşması için insan, para ve fiziksel kaynakları ==planlama, düzenleme, yönlendirme ve değerlendirme== sürecidir. Yöneticilerin kararlarını, eylemlerini ve liderliğini kapsar.", ornek: "Kantinin bu ay hangi ürünü, kaç kişiyle, ne kadar paraya satacağına karar vermek." },
            { ikon: "🧱", terim: "Human, financial, and physical resources", tr: "insan, finansal ve fiziksel kaynaklar", tanim: "Yönetimin kullandığı üç tür kaynak: çalışanlar, para ve bina, makine, mal gibi somut varlıklar.", ornek: "Kantin için: tezgâhtarlar (insan), kasadaki para (finansal), buzdolabı ve tezgâh (fiziksel)." }
          ] },
        { tip: "adimlar", baslik: "Kantin müdürü Selin'in bir dönemi: dört işlev", adimlar: [
            { baslik: "Planning (planlama)", metin: "Selin gelecek ayın menüsünü, satış hedefini ve alışveriş bütçesini belirler." },
            { baslik: "Organizing (düzenleme)", metin: "İşleri paylaştırır: Ali kasada, Zeynep mutfakta; malzeme dolabı sabah açılır." },
            { baslik: "Leading (yönlendirme)", metin: "Ekibe hedefi anlatır, motive eder, sorun çıkınca yol gösterir." },
            { baslik: "Evaluating (değerlendirme)", metin: "Satışları hedefle karşılaştırır; tutmayan yeri görüp planı düzeltir ve döngü yeniden başlar." }
          ] },
        { tip: "tablo", baslik: "Yönetim her kademede vardır", head: ["Kademe", "Kimdir?", "Ne yapar?"], rows: [
            ["*Executive leaders*", "Genel müdür, yönetim kurulu", "Vizyon, misyon ve büyük hedefleri belirler"],
            ["Bölüm yöneticisi", "Satış, üretim, finans gibi uzman bölümü yöneten kişi", "Ekibin işini işletmenin vizyonu ve misyonuyla hizalar (*alignment*)"],
            ["*Supervisor*", "Vardiya ya da ekip sorumlusu", "Günlük işi izler, çalışanları koordine eder"]
          ], not: "Okul örneği: müdür (üst yönetim), müdür yardımcısı (bölüm), nöbetçi öğretmen (gözetmen) hep yönetim yapar." },
        { tip: "tuzak", baslik: "Yönetici yalnızca patron mudur?", metin: "Yönetim işletmenin her katmanında yapılır.", yanlis: "Yönetim yalnızca en üstteki patronun işidir.", dogru: "Yönetim; üst yönetimden vardiya amirine kadar bütün kademelerin kararlarını ve eylemlerini içerir. Bölüm yöneticisi kendi ekibinin işini işletmenin ==vizyon ve misyonuyla aynı yöne== çeker." }
      ]
    },
    {
      baslik: "Liderlik becerileri ve liderlik stilleri",
      kisa: "Lider vizyonu anlatır, takım kurar, çatışmayı çözer ve insanları motive eder.",
      bloklar: [
        { tip: "harita", merkez: "Liderlik becerileri", dallar: [
            { baslik: "Vizyon ve misyonu anlatmak", alt: "*articulate vision and mission*: işletme nereye gidiyor, neden var?" },
            { baslik: "Verimli takım kurmak", alt: "*build productive teams*: doğru kişileri bir araya getirip birlikte çalıştırmak" },
            { baslik: "Çatışmayı çözmek", alt: "*negotiate conflicts*: taraflar arasında uzlaşma bulmak" },
            { baslik: "Motive etmek", alt: "*motivate*: motive çalışan daha verimli, daha uzun süre kalır, müşteri ve ekip arkadaşlarıyla daha iyi ilişki kurar" }
          ] },
        { tip: "not", metin: "Bu becerilerin hepsi sonunda ==iş performansına== dönüşür: motive çalışan daha verimli olur, işte daha uzun kalır ve müşterilerle, iş arkadaşlarıyla güçlü, olumlu ilişkiler kurar." },
        { tip: "tablo", baslik: "Üç klasik liderlik stili (ek bilgi)", head: ["Stil", "Karar kimde?", "Ne zaman uygun?"], rows: [
            ["*Autocratic* (otoriter)", "Lider tek başına karar verir", "Acil durum, net ve hızlı karar gereken an"],
            ["*Democratic* (katılımcı)", "Lider ekibin fikrini alıp birlikte karar verir", "Yaratıcı fikir ve sahiplenme gereken iş"],
            ["*Laissez-faire* (serbest bırakan)", "Kararı çalışan ya da ekip verir", "Deneyimli, kendi başına çalışabilen ekip"]
          ], not: "CED stilleri adlandırmaz; sınav liderlik becerilerini ve duruma uygun davranışı sorar. Stilleri bilmek senaryoyu okumana yardım eder." },
        { tip: "ikili", sol: { ikon: "👤", baslik: "Karar liderde", maddeler: ["Hızlı ve net", "Ekip az söz sahibi", "Kriz anlarında işe yarar"] },
          sag: { ikon: "👥", baslik: "Karar ekiple birlikte ya da ekipte", maddeler: ["Daha çok fikir", "Sahiplenme yüksek", "Karar daha yavaş olabilir"] },
          oyun: [
            { metin: "Mutfakta yangın çıktı; müdür “herkes çıksın, kapıyı ben kapatırım” dedi.", cevap: "sol", neden: "Acil durumda tek kişinin hızlı kararı: *autocratic*." },
            { metin: "Yeni menü için müdür bütün çalışanlardan öneri toplayıp oylamaya sundu.", cevap: "sag", neden: "Ekibin fikriyle verilen karar: *democratic*." },
            { metin: "Deneyimli şef, haftalık siparişi yöneticiye sormadan kendi veriyor.", cevap: "sag", neden: "Karar çalışanın kendisinde: *laissez-faire*." },
            { metin: "Müdür yeni tarifleri kimseye danışmadan yazıp herkese dağıtıyor.", cevap: "sol", neden: "Karar tek kişide: *autocratic*." }
          ] }
      ]
    },
    {
      baslik: "İletişim becerileri ve paydaşlar",
      kisa: "Liderler herkesle iletişim kurar: açık konuşur, ikna eder, dinler, geri bildirime yanıt verir.",
      bloklar: [
        { tip: "harita", merkez: "Kimlerle iletişim? (*stakeholders*)", dallar: [
            { baslik: "Amirler", alt: "*supervisors*" },
            { baslik: "İş arkadaşları", alt: "*colleagues*" },
            { baslik: "Çalışanlar", alt: "*employees*" },
            { baslik: "Borç verenler", alt: "*lenders*: banka gibi krediyi sağlayanlar" },
            { baslik: "Yatırımcılar", alt: "*investors*" },
            { baslik: "Müşteriler", alt: "*customers*" },
            { baslik: "Kamuoyu", alt: "*the public*" }
          ] },
        { tip: "ikili", sol: { ikon: "🗣️", baslik: "Anlatan taraf", maddeler: ["Fikri açık ifade etmek (*express ideas clearly*)", "İkna edici iletişim (*communicate persuasively*)"] },
          sag: { ikon: "👂", baslik: "Dinleyen taraf", maddeler: ["Empatiyle dinlemek (*listen empathetically*)", "Geri bildirimi doğru yorumlayıp karşılık vermek"] },
          oyun: [
            { metin: "Yönetici, banka yetkilisine yeni şubenin neden kâr getireceğini somut sayılarla anlatıyor.", cevap: "sol", neden: "Fikri açık ve ikna edici anlatmak: konuşan taraf." },
            { metin: "Çalışan şikâyet ederken yönetici sözünü kesmeden dinliyor, “seni anladım” diyor.", cevap: "sag", neden: "Empatiyle dinlemek." },
            { metin: "Müşteri yorumlarını okuyan müdür, şikâyetin asıl nedenini bulup çözüm üretiyor.", cevap: "sag", neden: "Geri bildirimi doğru yorumlamak ve karşılık vermek." },
            { metin: "Yönetici, ekibe yeni vardiya düzenini kısa ve net cümlelerle açıklıyor.", cevap: "sol", neden: "Fikri açıkça ifade etmek." }
          ] },
        { tip: "tuzak", baslik: "İletişim yalnızca konuşmak değildir", metin: "Dört iletişim becerisinin ikisi dinlemeyle ilgilidir.", yanlis: "İyi iletişim kuran lider iyi konuşan liderdir.", dogru: "İyi iletişim dört beceridir: açık ifade, ikna, ==empatik dinleme== ve geri bildirimi doğru yorumlayıp karşılık verme. Farklı paydaşlar (yatırımcı, müşteri, çalışan) farklı dil ister." }
      ]
    },
    {
      baslik: "Doğru çalışanı bulmak ve yetiştirmek",
      kisa: "Yetersiz eğitimli çalışan hatalı ürün, müşteri kaybı ve gelir kaybı demektir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Core competency", tr: "temel yetkinlik", tanim: "İşletmenin ürününü üretmesi ve sunması için gereken, işletmenin iyi yaptığı beceri ve deneyimler. Üretim, pazarlama, satış ve finans gibi günlük işler farklı yetkinlikler ister.", ornek: "Tost dükkânı için: tost yapmak, kasayı yönetmek, sosyal medyada duyurmak." },
            { ikon: "📤", terim: "Outsourcing", tr: "dış kaynak kullanımı", tanim: "Bir işi çalışan almak yerine dışarıdaki bir kişi ya da firmaya yaptırmak. Özellikle işletmenin temel yetkinliği dışındaki işlerde olur.", ornek: "Tost dükkânının muhasebesini mali müşavire vermesi." }
          ] },
        { tip: "adimlar", baslik: "Beceri açığı nereye varır?", adimlar: [
            { baslik: "Beceri ya da eğitim eksik", metin: "Çalışan işi yeterince bilmiyor; bazı beceriler zaten nadirdir ya da uzun eğitim ister." },
            { baslik: "Hatalı ürün ya da kötü hizmet", metin: "Yanlış sipariş, bozuk ürün, kaba bir karşılama." },
            { baslik: "Müşteri kaybı", metin: "Müşteri bir daha gelmez, başkasına anlatır." },
            { baslik: "İtibar ve gelir kaybı", metin: "Marka zedelenir, satış düşer: işletme ayakta kalmakta zorlanır (*viability*)." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🎓", baslik: "Üniversite ya da meslek eğitimi", metin: "*postsecondary education*: lise sonrası eğitim" },
            { ikon: "🔨", baslik: "Çıraklık ve staj programı", metin: "*apprentice programs*: usta yanında öğrenmek" },
            { ikon: "🛠️", baslik: "İş başında eğitim", metin: "*on-the-job training*" },
            { ikon: "💻", baslik: "Çevrim içi eğitim", metin: "*online training*" },
            { ikon: "📚", baslik: "Sürekli eğitim", metin: "*continuing education*: çalışırken yeni beceriler edinmek" }
          ] },
        { tip: "tuzak", baslik: "Her işi kendi çalışanınla yapmak zorunda değilsin", metin: "Farklı işler farklı yetkinlik ister.", yanlis: "İşletme bütün işleri kendi çalışanlarıyla yapmalıdır.", dogru: "Temel yetkinliğin dışındaki işler dışarıya verilebilir (*outsourcing*). Ama işletmenin asıl işini yapan çalışanların becerisi ve eğitimi iş yaşamının sürmesi için şarttır." }
      ]
    },
    {
      baslik: "Çalışan türleri ve ücret biçimleri",
      kisa: "Ücret; saatlik, maaş, komisyon, parça başı ya da kâr payı olabilir.",
      bloklar: [
        { tip: "tablo", baslik: "Çalışan türleri", head: ["Tür", "Anlamı", "Örnek"], rows: [
            ["*Full-time*", "Tam zamanlı çalışan", "Kantinde her gün tam mesai"],
            ["*Part-time*", "Yarı zamanlı çalışan", "Hafta sonları çalışan lise öğrencisi"],
            ["*Temporary*", "Geçici çalışan", "Yaz sezonu için işe alınan"],
            ["*Contract*", "Belirli iş ya da proje için sözleşmeli çalışan", "Menü afişini tasarlayan serbest grafikerler"]
          ] },
        { tip: "tablo", baslik: "Beş ücret biçimi (ay ve TL ile)", head: ["Biçim", "Nasıl hesaplanır?", "Örnek"], rows: [
            ["*Hourly wage* (saatlik ücret)", "Saat ücreti × çalışılan saat", "150 TL × 160 saat = 24.000 TL"],
            ["*Annual salary* (yıllık maaş)", "Yıllık tutar ÷ 12 ay", "360.000 TL ÷ 12 = 30.000 TL"],
            ["*Commission* (komisyon)", "Satışın belirli yüzdesi", "%5 × 600.000 TL satış = 30.000 TL"],
            ["*Piece rate* (parça başı)", "Parça başı ücret × üretilen parça", "20 TL × 1.200 parça = 24.000 TL"],
            ["*Profit sharing* (kâr paylaşımı)", "Kârın bir bölümü çalışanlara bölünür", "%10 × 200.000 TL kâr ÷ 10 kişi = 2.000 TL"]
          ], not: "Hangi biçimin seçildiği; sektöre, işin türüne, yasal kurallara (asgari ücret gibi) ve işletmenin iyi çalışanları rakiplerden ne kadar fazla ödeyerek kazanmak zorunda olduğuna bağlıdır. İşveren ücreti genelde eğitim, beceri ve verimliliğe bakarak belirler." },
        { tip: "grafik", baslik: "Sabit maaş mı, komisyon mu?", xlabel: "Aylık satış (yüz bin TL)", ylabel: "Aylık kazanç (bin TL)", xmax: 10, ymax: 50, xticks: [{ v: 2, label: "200 bin" }, { v: 4, label: "400 bin" }, { v: 6, label: "600 bin" }, { v: 8, label: "800 bin" }, { v: 10, label: "1 milyon" }], yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }, { v: 50, label: "50" }],
          ogeler: [
            { id: "sal", tip: "cizgi", from: [0, 30], to: [10, 30], etiket: "Maaş", renk: 0, gizli: true },
            { id: "com", tip: "cizgi", from: [0, 0], to: [10, 50], etiket: "Komisyon %5", renk: 1, gizli: true },
            { id: "eq", tip: "nokta", x: 6, y: 30, etiket: "Eşitlik", kilavuz: true, gizli: true },
            { id: "lo", tip: "yazi", x: 0.3, y: 35, metin: "Az satışta maaş kazandırır", hiza: "start", gizli: true },
            { id: "hi", tip: "yazi", x: 9.9, y: 8, metin: "Çok satışta komisyon kazandırır", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Sabit maaş: satış ne olursa olsun ayda ==30.000 TL==. Risk yok, ama fazla çalışmanın karşılığı da yok.", goster: ["sal"] },
            { metin: "Komisyon: satışın ==%5==’i. Satış sıfırsa kazanç sıfır; artıkça kazanç doğrusal artar.", goster: ["com"] },
            { metin: "600 bin TL satışta komisyon 30 bin TL olur: iki ücret ==eşitlenir==.", goster: ["eq"] },
            { metin: "Bunun altında maaş, üstünde komisyon daha çok kazandırır. Komisyon satışı artırmak için güçlü bir teşviktir ama geliri belirsiz kılar.", goster: ["lo", "hi"] }
          ] }
      ]
    },
    {
      baslik: "Motivasyon: yan haklar, teşvikler ve elde tutma",
      kisa: "İyi çalışanı tutmak, yenisini bulup yetiştirmekten genellikle daha ucuzdur.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🏥", baslik: "Sağlık sigortasına katkı", metin: "*health insurance*: işveren primin bir kısmını ya da tamamını öder" },
            { ikon: "🐷", baslik: "Emeklilik tasarruf planı", metin: "*retirement savings plan* (Türkiye'de BES benzeri)" },
            { ikon: "💳", baslik: "Sağlık tasarruf planı", metin: "*health savings plan*: sağlık harcamaları için ayrılan hesap" },
            { ikon: "🛡️", baslik: "Gelir kaybı sigortası", metin: "*disability insurance*: çalışamaz hâle gelince gelir sağlar" },
            { ikon: "🎓", baslik: "Eğitim geri ödemesi", metin: "*educational reimbursement*: eğitim masrafını işverenin karşılaması" },
            { ikon: "🏖️", baslik: "Ücretli izin", metin: "*paid time off*" }
          ] },
        { tip: "ikili", sol: { ikon: "💰", baslik: "Parasal teşvik (*incentive*)", maddeler: ["Zam (*raise*)", "Terfi (*promotion*)", "Prim (*bonus*)"] },
          sag: { ikon: "🌱", baslik: "Parasal olmayan", maddeler: ["Özerklik (*autonomy*)", "Esnek saat ve esnek yer", "Takdir ve ödül, olumlu iş kültürü"] },
          oyun: [
            { metin: "Rekor satış yapan çalışana ay sonunda prim veriliyor.", cevap: "sol", neden: "Para olarak ödül: *bonus*." },
            { metin: "Çalışan hangi gün evden çalışacağını kendisi seçebiliyor.", cevap: "sag", neden: "Esnek çalışma yeri ve zamanı: parasal olmayan motivasyon." },
            { metin: "Müdür, ay sonunda toplantıda en iyi çalışanı alkışlatıp teşekkür ediyor.", cevap: "sag", neden: "Takdir: parasal olmayan." },
            { metin: "Başarılı vardiya amiri kıdemli yönetici olarak terfi ediyor.", cevap: "sol", neden: "Terfi yükselen maaşla gelen bir teşviktir." }
          ] },
        { tip: "grafik", baslik: "Tutmak mı, yenisini almak mı? (varsayımsal sayılar)", xlabel: "Seçenek", ylabel: "Yıllık maliyet (bin TL)", xmax: 5, ymax: 100, xticks: [{ v: 1, label: "%10 zam" }, { v: 3, label: "Yeni çalışan" }], yticks: [{ v: 25, label: "25" }, { v: 50, label: "50" }, { v: 75, label: "75" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "z", tip: "alan", renk: 2, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "r1", tip: "alan", renk: 0, noktalar: [[2.6, 0], [3.4, 0], [3.4, 0], [2.6, 0]] },
            { id: "r2", tip: "alan", renk: 1, noktalar: [[2.6, 10], [3.4, 10], [3.4, 10], [2.6, 10]] },
            { id: "r3", tip: "alan", renk: 3, noktalar: [[2.6, 25], [3.4, 25], [3.4, 25], [2.6, 25]] },
            { id: "r4", tip: "alan", renk: 0, noktalar: [[2.6, 60], [3.4, 60], [3.4, 60], [2.6, 60]] },
            { id: "tz", tip: "yazi", x: 1, y: 54, metin: "48", gizli: true },
            { id: "t1", tip: "yazi", x: 3.5, y: 5, metin: "İlan 10", hiza: "start", gizli: true },
            { id: "t2", tip: "yazi", x: 3.5, y: 17, metin: "Mülakat 15", hiza: "start", gizli: true },
            { id: "t3", tip: "yazi", x: 3.5, y: 42, metin: "Eğitim 35", hiza: "start", gizli: true },
            { id: "t4", tip: "yazi", x: 3.5, y: 75, metin: "Verimsizlik 30", hiza: "start", gizli: true },
            { id: "tt", tip: "yazi", x: 3, y: 95, metin: "Toplam 90", gizli: true }
          ],
          durumlar: [
            { metin: "40.000 TL maaşlı çalışana ==%10 zam==: ayda 4.000 TL, yılda ==48 bin TL==.", set: { z: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 48], [0.6, 48]] } }, goster: ["tz"] },
            { metin: "Çalışan ayrılırsa yeni biri için ilan (10) ve mülakat (15) masrafı çıkar: ==25 bin TL==.", set: { r1: { noktalar: [[2.6, 0], [3.4, 0], [3.4, 10], [2.6, 10]] }, r2: { noktalar: [[2.6, 10], [3.4, 10], [3.4, 25], [2.6, 25]] } }, goster: ["t1", "t2"] },
            { metin: "Sonra eğitim: ==35 bin TL== daha. Toplam 60.", set: { r3: { noktalar: [[2.6, 25], [3.4, 25], [3.4, 60], [2.6, 60]] } }, goster: ["t3"] },
            { metin: "Yeni çalışan ilk aylarda verimsizdir: ==30 bin TL== kayıp. Toplam ==90 bin TL==, zamdan neredeyse iki kat.", set: { r4: { noktalar: [[2.6, 60], [3.4, 60], [3.4, 90], [2.6, 90]] } }, goster: ["t4", "tt"] }
          ] },
        { tip: "tuzak", baslik: "Elde tutmanın tek yolu zam değildir", metin: "İyi çalışanı tutmak için parasal olmayan araçlar da güçlüdür.", yanlis: "Çalışanı elde tutmanın tek yolu daha yüksek maaştır.", dogru: "Zam, terfi ve prim işe yarar; ama ==özerklik, esnek saat ve yer, takdir ve olumlu iş kültürü== de çalışanı motive edip tutar. Önemli olan tutmanın genellikle yeni işe almadan daha ucuz olmasıdır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Yönetim = insan, finansal ve fiziksel kaynakları *planning*, *organizing*, *leading* ve *evaluating* ile hedeflere yöneltmek.",
            "Yönetim her kademede vardır: üst yönetimden vardiya amirine kadar. Bölüm yöneticisi ekibi vizyon ve misyona hizalar.",
            "Liderlik becerileri: vizyon ve misyonu anlatmak, takım kurmak, çatışmayı çözmek, motive etmek. Motive çalışan verimli, kalıcı ve müşteriyle uyumludur.",
            "İletişim dört beceridir: açık ifade, ikna, empatik dinleme, geri bildirimi doğru yorumlayıp karşılık verme. Paydaşlar amirlerden kamuoyuna uzanır.",
            "İşler farklı yetkinlikler ister; temel yetkinlik dışındaki işler *outsourcing* ile dışarı verilebilir.",
            "Yetersiz eğitimli çalışan hatalı ürün, müşteri, itibar ve gelir kaybı demektir. Eğitim yolları: lise sonrası eğitim, çıraklık, iş başında, çevrim içi, sürekli eğitim.",
            "Çalışan türleri: *full-time*, *part-time*, *temporary*, *contract*. Ücret biçimleri: saatlik, yıllık maaş, komisyon, parça başı, kâr paylaşımı.",
            "Yan haklar: sağlık sigortası katkısı, emeklilik ve sağlık tasarruf planları, gelir kaybı sigortası, eğitim geri ödemesi, ücretli izin.",
            "İyi çalışanı tutmak genellikle yenisini işe alıp yetiştirmekten ucuzdur; zam, terfi, prim ile birlikte özerklik, esneklik, takdir ve kültür de kullanılır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kantin müdürü, iki yeni çalışana “sen kasada, sen mutfakta ol” diyerek görevleri paylaştırıyor ve malzeme dolabının açılış saatini belirliyor. Bu davranış yönetimin hangi işlevidir?",
      opts: ["*Planning*: gelecekteki hedefi belirlemek", "*Organizing*: kaynakları ve görevleri düzenlemek", "*Leading*: ekibi yönlendirip motive etmek", "*Evaluating*: sonuçları ölçmek"],
      a: 1,
      why: "Görev paylaştırmak ve kaynakları (kasa, mutfak, dolap) düzenlemek *organizing*’dir. En çekici yanlış şık *leading*: görevi dağıtmak ekibi yönlendirir gibi görünse de *leading* motive etme, yol gösterme ve ilham verme demektir; burada anlatılan yapı kurmaktır." },
    { q: "Bir satış elemanına iki teklif sunuluyor: aylık sabit 30.000 TL maaş ya da aylık satışın %5’i kadar komisyon. Elemanın ayda 800.000 TL satış yapacağı tahmin ediliyor. Hangisi ve ne kadar fark?",
      opts: ["Maaş; komisyondan 10.000 TL fazla", "İkisi de aynı, 30.000 TL", "Komisyon; maaştan 10.000 TL fazla", "Komisyon; maaştan 40.000 TL fazla"],
      a: 2,
      why: "Komisyon = %5 × 800.000 = 40.000 TL; maaş 30.000 TL olduğundan komisyon 10.000 TL fazladır. Eşitlik 600.000 TL satışta olur (%5 × 600.000 = 30.000); 800.000 TL bunun üstünde. 40.000 TL fark seçeneği, komisyon tutarını fark sanmaktır." },
    { q: "Yönetici, ekip toplantısında bir çalışanın eleştirisini sözünü kesmeden dinliyor, ardından “Bence şu noktada haklısın, vardiya düzenini şöyle değiştirelim” diyor. Burada öne çıkan iletişim becerisi hangisidir?",
      opts: ["Empatiyle dinlemek ve geri bildirime karşılık vermek", "İkna edici sunum yapmak", "Çatışmaya taraf olmak", "Vizyonu açıklamak"],
      a: 0,
      why: "Sözünü kesmeden dinleme, empatik dinlemedir; eleştiriyi doğru anlayıp düzeltme önermek geri bildirime karşılık vermektir. İkna edici sunum, yöneticinin bir başkasını ikna etmeye çalışmasıdır; burada ise tersine dinleyen taraf yöneticidir." },
    { q: "Bir işletme, yıllardır çalışan deneyimli bir satış temsilcisine %10 zam yapıyor ve esnek çalışma saatleri tanıyor. Bu kararın en olası gerekçesi hangisidir?",
      opts: ["Zam yapmak her zaman en ucuz çözümdür.", "Çalışanın bu işi bırakıp serbest çalışması yasal olarak yasaktır.", "Parasal olmayan teşvikler parasal olanların yerine geçer, bu yüzden zam gereksizdir.", "Deneyimli çalışanı tutmak, yenisini işe alıp yetiştirmekten genellikle daha ucuzdur."],
      a: 3,
      why: "CED’e göre işletmeler zam, terfi, prim ve esneklik gibi araçları kullanır çünkü iyi çalışanı tutmak genellikle yenisini bulup eğitmekten daha ucuzdur. “Zam her zaman en ucuz çözümdür” aşırı genellemedir: CED “genellikle” der. Parasal olmayan teşvikler de parasalların yerine değil, onlarla birlikte kullanılır." },
    { q: "Küçük bir tostçu, defterlerini tutan muhasebeciyi işe almak yerine her ay bir mali müşavirle çalışıyor. Bu karar için en uygun açıklama hangisidir?",
      opts: ["Tostçu çalışan kullanamaz.", "Muhasebe işletmenin temel yetkinliği dışında olduğu için dışarı verilebilir (*outsourcing*).", "Dış kaynak kullanımı yalnızca büyük firmalara özgüdür.", "Mali müşavir her zaman daha ucuzdur."],
      a: 1,
      why: "Bazı işler, özellikle işletmenin temel yetkinliği ya da asıl faaliyeti dışındakiler, dışarı verilebilir (*outsourcing*). Tostçunun temel yetkinliği tost yapmak ve satmaktır. “Mali müşavir her zaman daha ucuzdur” hatalıdır: CED maliyet karşılaştırması yapmaz, işin yetkinlik dışında olmasını vurgular." }
  ]
};
