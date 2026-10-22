/* Kitora not defteri · bf21 · 2.1 Müşteriye Pazarlama
   Kaynak: ap-videolar/src/episodes/bf21 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf21",
  ozet: "*Marketing* reklamdan çok daha geniş bir plan. Bu defterde sirk benzetmesiyle altı kavramı ayıracak, *demographics* ile *psychographics* farkını, *market segmentation* → *target customer* → *customer profile* zincirini, *CAC* ile *CLV* hesabını ve müşteri verisinin risklerini göreceksin.",
  bolumler: [
    {
      baslik: "Seni izleyen ayakkabı",
      bloklar: [
        { tip: "hikaye", ikon: "👟", baslik: "Aynı ayakkabı her yerde",
          metin: "Telefonda bir kere spor ayakkabıya baktın. Ertesi gün Instagram'da da, YouTube'da da karşında aynı ayakkabı var. Tesadüf değil. Şirketler kim olduğunu, neyi sevdiğini ve sırada ne alacağını öğrenmek için milyarlar harcıyor." },
        { tip: "adimlar", baslik: "Ayakkabı seni nasıl buldu?", adimlar: [
            { baslik: "Bir tık", metin: "Ürün sayfasına bir kere bakıyorsun." },
            { baslik: "İz bırakıyorsun", metin: "Site seni hatırlıyor ve gezinmeni kaydediyor." },
            { baslik: "Her yerde karşına çıkıyor", metin: "Sosyal medya gönderisi, video reklamı, haber sayfası: hepsinde aynı ayakkabı." },
            { baslik: "Soru", metin: "Şirket seni nasıl tanıdı? Cevap bu defterin geri kalanı: ==veri==." }
          ] }
      ]
    },
    {
      baslik: "Sirk benzetmesi: altı kavram",
      bloklar: [
        { tip: "not", metin: "Bir sirkin var ve şehre geliyorsun. Aynı sirk etrafında altı ayrı kavram var; sınavda sık karıştırılırlar." },
        { tip: "adimlar", baslik: "Sirk şehre geliyor", adimlar: [
            { baslik: "Tabela → *advertising*", metin: "\"Sirk bu akşam\" yazan bir tabela asarsan: parası ödenen duyuru, reklam." },
            { baslik: "Kırmızı fil → *promotion*", metin: "Filini kırmızıya boyayıp caddede yürütürsen: dikkat çekmek için yapılan tanıtım." },
            { baslik: "Ezilen çiçekler → *publicity*", metin: "Fil belediye başkanının çiçeklerini ezip haberlere çıkarsa: parasını ödemediğin, kontrol edemediğin medya ilgisi." },
            { baslik: "Bedava bilet → *public relations*", metin: "Başkana bedava bilet verip gönlünü alırsan (birlikte fotoğraf bile çektirirsen): halkla ilişkiler, olumlu imaj çabası." },
            { baslik: "Bilet alanlar → *sales*", metin: "İnsanlar gerçekten bilet alırsa: satış." },
            { baslik: "Baştan plan → *marketing*", metin: "Hepsini baştan planladıysan, işte o *marketing*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📢", terim: "Advertising", tr: "reklam", tanim: "Parası ödenerek yapılan duyuru.", ornek: "\"Sirk bu akşam\" tabelası." },
            { ikon: "🐘", terim: "Promotion", tr: "tanıtım", tanim: "Ürüne dikkat çekmek için yapılan tanıtım etkinliği.", ornek: "Kırmızıya boyanıp caddede yürütülen fil." },
            { ikon: "📰", terim: "Publicity", tr: "parasız ilgi", tanim: "İşletmenin para ödemediği ve tam kontrol edemediği medya ilgisi.", ornek: "Filin çiçekleri ezmesinin yerel haberlere çıkması." },
            { ikon: "🤝", terim: "Public relations", tr: "halkla ilişkiler", tanim: "Çevreyle iyi ilişki ve olumlu imaj kurma çabası; işletme bunu bilinçli yapar.", ornek: "Belediye başkanına bedava bilet verip gönlünü almak." },
            { ikon: "🎟️", terim: "Sales", tr: "satış", tanim: "Müşterinin ürünü fiilen satın alması.", ornek: "Sirkte bilet satılması." },
            { ikon: "🗺️", terim: "Marketing", tr: "pazarlama", tanim: "Müşterinin sorununu, ihtiyacını ve isteğini belirleyip ürünü tanıtmak, satmak ve ulaştırmak için yapılan faaliyetlerin tamamı.", ornek: "Yukarıdaki beşini baştan planlamak." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "📰", baslik: "*Publicity*", maddeler: ["Parası ödenmez", "Kendiliğinden gelen haber", "İşletme tam kontrol edemez"] },
          sag: { ikon: "🤝", baslik: "*Public relations*", maddeler: ["İmajı düzeltmek için bilinçli atılan adım", "İşletme planlar", "Örnek: başkana bedava bilet"] },
          oyun: [
            { metin: "Filin çiçekleri ezmesi yerel haberlere çıktı.", cevap: "sol", neden: "Para ödemedin, haber kendiliğinden geldi: *publicity*." },
            { metin: "Sirk, belediye başkanına bedava bilet verip birlikte fotoğraf çektirdi.", cevap: "sag", neden: "İmajı onarmak için bilinçli bir adım: *public relations*." },
            { metin: "Bir ünlü, markanı kendi isteğiyle hakkında yazdığı bir haberde övdü; sen hiçbir şey ödemedin.", cevap: "sol", neden: "Parasız ve kontrolsüz ilgi: *publicity*." },
            { metin: "Şirket, kriz sonrası halkla özür ve açıklama toplantısı düzenledi.", cevap: "sag", neden: "Olumlu imajı geri kazanmaya yönelik planlı çaba: *public relations*." }
          ] },
        { tip: "tuzak", baslik: "Marketing ≠ advertising", metin: "Öğrencilerin çoğu ikisini aynı sanıyor; sınavın ilk tuzağı bu.", yanlis: "*Marketing* demek reklam yapmak demektir.", dogru: "*Advertising*, *marketing*'in yalnızca bir parçasıdır. *Publicity* parasız çıkan haber, *public relations* bilinçli imaj çabası, *advertising* ise parası ödenen duyurudur." }
      ]
    },
    {
      baslik: "*Marketing* gerçekte ne?",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Müşteriyi anla", alt: "ihtiyaç ve istek" }, "→",
            { t: "Tanıt", alt: "reklam, promosyon" }, "→",
            { t: "Sat", alt: "satış" }, "→",
            { t: "Ulaştır", alt: "dağıtım" }
          ], aciklama: "*Marketing* bu zincirin tamamıdır, yalnızca ikinci halkası değil." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🥐", terim: "Marketing", tr: "pazarlama", tanim: "Müşterinin ihtiyacını ve isteğini anlamak; sonra ürünü tanıtmak, satmak ve ulaştırmak için yapılan her şey.", ornek: "Mahalle fırını işe gidenler için saat yedide sıcak poğaça çıkarıyorsa, bu da *marketing*'tir." }
          ] },
        { tip: "hikaye", ikon: "💸", baslik: "Wanamaker'ın yakınması",
          metin: "Yüz yılı aşkın süre önce mağazacı John Wanamaker şöyle yakınmış: reklama harcadığım paranın yarısı boşa gidiyor, ama hangi yarısı olduğunu bilmiyorum. Müşterini tanımazsan reklam parası, ürünü zaten almayacak kişilere gider." },
        { tip: "not", metin: "Çare: ==veriyle müşterini tanımak==. Amazon'un kurucusu Jeff Bezos'a göre başarının bir numaralı nedeni rakibe değil, müşteriye takıntılı biçimde odaklanmaktır." }
      ]
    },
    {
      baslik: "Veri iki türlüdür",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📊", baslik: "*Demographics*", maddeler: ["Ölçülebilen özellikler", "Yaş, gelir, eğitim, cinsiyet, meslek, konum", "Cevapladığı soru: ==kim alır?=="] },
          sag: { ikon: "💭", baslik: "*Psychographics*", maddeler: ["İlgi alanları, değerler, hobiler, tutumlar", "Kişilik ve yaşam tarzı", "Cevapladığı soru: ==neden alır?=="] },
          oyun: [
            { metin: "Müşteri 45-65 yaş arasında.", cevap: "sol", neden: "Yaş ölçülebilir bir özellik: *demographics*." },
            { metin: "Müşteri açık havada vakit geçirmeyi sever.", cevap: "sag", neden: "Hobi ve ilgi alanı: *psychographics*." },
            { metin: "Yıllık geliri yüksek bir ev sahibi.", cevap: "sol", neden: "Gelir ve konut durumu ölçülebilir: *demographics*." },
            { metin: "Kolaylığa ve yeni teknolojiye değer veriyor.", cevap: "sag", neden: "Değer ve tutum: *psychographics*." },
            { metin: "Üniversite mezunu, mühendis.", cevap: "sol", neden: "Eğitim ve meslek: *demographics*." },
            { metin: "Sürdürülebilirliğe önem veriyor.", cevap: "sag", neden: "Değer yargısı: *psychographics*." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Demographics", tr: "demografik veri", tanim: "Bir kitleyi sınıflandırmaya yarayan ölçülebilir özellikler: yaş, gelir, eğitim, cinsiyet, meslek, yaşanılan yer.", ornek: "45-65 yaş, ev sahibi, yüksek gelir." },
            { ikon: "🎨", terim: "Psychographics", tr: "psikografik veri", tanim: "İlgi alanları, değerler, hobiler, tutumlar, kişilik ve yaşam tarzı.", ornek: "Bahçeyi sever, kolaylığa ve teknolojiye düşkündür." },
            { ikon: "💳", terim: "Disposable income", tr: "harcanabilir gelir", tanim: "Zorunlu giderlerden sonra elde kalan, istediğin gibi harcayabileceğin para.", ornek: "Çim biçme makinesi alıcısının \"geliri yüksek\" olması." }
          ] },
        { tip: "ornek", baslik: "3.000 dolarlık robot çim biçme makinesini kim alır?", durum: "Bir firma 3.000 dolarlık robot çim biçme makinesi satıyor. Alıcı apartmanda yaşayan 20 yaşındaki bir üniversiteli mi, başka biri mi?",
          adimlar: ["*Demographics*: 20 yaşındaki öğrencinin bahçesi ve bu kadar harcanabilir geliri yok. Alıcı 45-65 yaş arası, ev sahibi, harcanabilir geliri yüksek biri.", "*Psychographics*: aynı kişi açık havada vakit geçirmeyi sever, kolaylığa değer verir, yeni teknolojiyi sever.", "İlki ==kim== alır sorusunu, ikincisi ==neden== alır sorusunu cevaplar."],
          sonuc: "Hedef: 45-65 yaş, ev sahibi, yüksek gelirli, bahçesini seven teknoloji meraklısı." },
        { tip: "tuzak", baslik: "Kim mi, neden mi?", metin: "Sınavda iki veri türünü ayırmak için tek bir soru yeter.", yanlis: "\"Hobiler ve yaşam tarzı\" da *demographics*'tir.", dogru: "Yaş, gelir, eğitim, meslek, konum görürsen *demographics*; ilgi, değer, hobi, yaşam tarzı görürsen *psychographics*." }
      ]
    },
    {
      baslik: "Veri nereden gelir?",
      bloklar: [
        { tip: "harita", merkez: "Müşteri verisi", dallar: [
            { baslik: "Üyelikler", alt: "abone listeleri, online hesaplar" },
            { baslik: "Sosyal medya", alt: "ne beğendiğin, kimi izlediğin" },
            { baslik: "*Cookies*", alt: "seni sitelerde izler, hatırlar" },
            { baslik: "Tık takibi", alt: "*click tracking*" },
            { baslik: "*Surveys*", alt: "anketler" },
            { baslik: "*Focus groups*", alt: "küçük grup görüşmeleri, röportajlar" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🍪", terim: "Cookies", tr: "çerezler", tanim: "Bir sitenin seni hatırlamasını ve gezinmeni izlemesini sağlayan küçük veri dosyaları; sana özel reklamların kaynağı.", ornek: "Bir kere baktığın ayakkabının her sitede karşına çıkması." },
            { ikon: "📝", terim: "Surveys", tr: "anketler", tanim: "Müşterilere soru sorarak veri toplama yöntemi.", ornek: "Alışverişten sonra gelen \"Memnun kaldınız mı?\" formu." },
            { ikon: "🗣️", terim: "Focus groups", tr: "odak grupları", tanim: "Küçük bir müşteri grubuyla yapılan, yönlendirmeli grup görüşmeleri.", ornek: "Yeni bir kahve aroması için 8 kişiyle yapılan tadım sohbeti." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🎬", baslik: "Netflix", metin: "Yalnızca ne izlediğini değil; ne zaman ve ne kadar izlediğini, nerede ileri sardığını ve hangi kapak görselinin seni tıklattığını da kaydeder. Öneri ve yeni yapım kararlarını buna göre verir." },
            { ikon: "🛒", baslik: "Migros Money kart", metin: "Kartı her okuttuğunda sepetin kaydedilir; alışverişine göre sana özel indirim gelir." }
          ] }
      ]
    },
    {
      baslik: "Segmentasyon ve hedef müşteri",
      bloklar: [
        { tip: "not", metin: "Herkese satmaya çalışan, kimseye satamaz. Çözüm ==*market segmentation*==: olası müşterileri, benzer demografik ve psikografik özellikleri paylaşan gruplara bölmek." },
        { tip: "adimlar", baslik: "\"Guess Who?\" gibi ele", adimlar: [
            { baslik: "Herkesle başla", metin: "Tahta üzerindeki bütün yüzler açık: tüm olası müşteriler." },
            { baslik: "Özelliklere göre ele", metin: "Yaşa, gelire, ilgiye göre yüzleri tek tek kapat." },
            { baslik: "Kalanlar", metin: "Ayakta kalan yüzler senin *target customer*'larındır: hedef müşteriler." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Market segmentation", tr: "pazar bölümlemesi", tanim: "Olası müşterileri benzer demografik ve psikografik özellikleri paylaşan gruplara bölmek.", ornek: "Krampon reklamı için sınıftaki herkesi değil, halı sahaya gidenleri ayırmak." },
            { ikon: "🎯", terim: "Target customer", tr: "hedef müşteri", tanim: "Segmentasyon sonunda ürünü almaya en yatkın görülen müşteri grubu. (Başka kaynaklarda *target market* de denir.)", ornek: "Sınıfta herkes 17 yaşında; krampon reklamı yalnızca halı sahacılara gider." }
          ] },
        { tip: "grafik", baslik: "Segmentasyon: kalabalık nasıl daralır?", xlabel: "Eleme adımı", ylabel: "Kalan kişi", xmax: 4, ymax: 10, xticks: [{ v: 1, label: "Hepsi" }, { v: 2, label: "Yaş" }, { v: 3, label: "Gelir" }, { v: 4, label: "İlgi" }], yticks: [],
          ogeler: [
            { id: "f1", tip: "alan", renk: 1, noktalar: [[0.6, 0], [1.4, 0], [1.4, 0], [0.6, 0]] },
            { id: "f2", tip: "alan", renk: 1, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "f3", tip: "alan", renk: 2, noktalar: [[2.6, 0], [3.4, 0], [3.4, 0], [2.6, 0]] },
            { id: "f4", tip: "alan", renk: 3, noktalar: [[3.6, 0], [4, 0], [4, 0], [3.6, 0]] },
            { id: "y1", tip: "yazi", x: 1, y: 9.3, metin: "Herkes", gizli: true },
            { id: "y2", tip: "yazi", x: 2, y: 6.3, metin: "Doğru yaş", gizli: true },
            { id: "y3", tip: "yazi", x: 3, y: 3.8, metin: "Yüksek gelir", gizli: true },
            { id: "y4", tip: "yazi", x: 3.8, y: 1.8, metin: "Hedef", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıçta herkes tahtada. Herkese satmaya çalışırsan reklam parası ==boşa gider==.", set: { f1: { noktalar: [[0.6, 0], [1.4, 0], [1.4, 9], [0.6, 9]] } }, goster: ["y1"] },
            { metin: "Yaşa göre ele: ürünü alabilecek yaş grubu kalır.", set: { f2: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 6], [1.6, 6]] } }, goster: ["y2"] },
            { metin: "Gelire göre ele: ürünü karşılayabilenler kalır.", set: { f3: { noktalar: [[2.6, 0], [3.4, 0], [3.4, 3.5], [2.6, 3.5]] } }, goster: ["y3"] },
            { metin: "İlgi alanına göre ele. Kalan küçük grup ==*target customer*==.", set: { f4: { noktalar: [[3.6, 0], [4, 0], [4, 1.5], [3.6, 1.5]] } }, goster: ["y4"] }
          ] },
        { tip: "tuzak", metin: "Segmentasyonun gerekçesi tek bir cümledir.", yanlis: "Ürünü olabildiğince çok kişiye ulaştırmak için herkese reklam vermek en doğrusudur.", dogru: "==Herkese satmaya çalışırsan kimseye satamazsın==; önce gruplara böl, sonra *target customer*'ı seç." }
      ]
    },
    {
      baslik: "*Customer profile*: ideal müşterinin yüzü",
      bloklar: [
        { tip: "not", metin: "Hedef grubu seçtin. Şimdi o gruba bir yüz ver: ==*customer profile*==, ideal müşterinin demografik ve psikografik veriye dayanan hayalî tarifidir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧑‍🦰", terim: "Customer profile", tr: "müşteri profili", tanim: "Demografik ve psikografik veriye dayanarak yazılan, ideal müşterinin kurgusal tarifi.", ornek: "Premium yürüyüş sırt çantası satan işletmenin müşterisi: Gezgin Elif." }
          ] },
        { tip: "tablo", baslik: "Gezgin Elif (kamp çantası müşterisi)", head: ["Tür", "Bilgi"], rows: [
            ["*Demographics*", "29 yaşında, üniversite mezunu"],
            ["*Psychographics*", "Hafta sonları Likya Yolu'nda yürüyor, doğa dostu ürünleri seçiyor, tatilini millî parklarda geçiriyor"],
            ["Karar sorusu", "Fiyatı, ürünü ya da kampanyayı değiştirmeden önce sor: ==Elif buna ne der?=="]
          ], not: "Videodaki orijinal örnek: \"Adventure Alex\" (29 yaşında, üniversite mezunu, yılda 80 bin dolar kazanıyor, sürdürülebilirliğe önem veriyor). Aynı mantık." },
        { tip: "tuzak", baslik: "Elif kim?", metin: "*Customer profile* gerçek bir kişi değildir.", yanlis: "Gezgin Elif, mağazanın gerçek bir müşterisidir.", dogru: "Elif kurgusaldır; binlerce gerçek müşteriyi temsil eder ve hem demografik hem psikografik bilgi içerir." },
        { tip: "zaman", olaylar: [
            { tarih: "1. adım", baslik: "Veri topla", metin: "Üyelik, cookies, anket, odak grubu." },
            { tarih: "2. adım", baslik: "*Market segmentation*", metin: "Müşterileri gruplara böl." },
            { tarih: "3. adım", baslik: "*Target customer*", metin: "En yatkın grubu seç." },
            { tarih: "4. adım", baslik: "*Customer profile*", metin: "Gruba bir yüz ver ve her kararda ona sor." }
          ] }
      ]
    },
    {
      baslik: "*CAC*: yeni müşteri kaça mal olur?",
      bloklar: [
        { tip: "hikaye", ikon: "🪙", baslik: "Başka bir şey öğrenmesen bunu öğren",
          metin: "Eldeki müşteriyi tutmak, yeni müşteri bulmaktan çok daha ucuzdur. Yatırımcı Kevin O'Leary'nin her işletme sahibine ilk sorduğu şeylerden biri: bir yeni müşteri kazanmak sana kaça mal oluyor? Bunu bilmeyen, büyüyor mu yoksa sadece para mı harcıyor, bilemez." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧲", terim: "Customer acquisition cost", tr: "müşteri kazanma maliyeti (CAC)", tanim: "Bir yeni müşteri kazanmanın ortalama maliyeti. İşletme bunu ==düşük== tutmak ister.", ornek: "10.000 TL reklamla 500 yeni müşteri gelirse CAC = 20 TL." }
          ] },
        { tip: "formul", parcalar: [
            { t: "*CAC*", alt: "yeni müşteri başına maliyet" }, "=",
            { t: "Pazarlama + satış gideri", alt: "toplam" }, "÷",
            { t: "Yeni müşteri sayısı", alt: "kazanılan" }
          ], aciklama: "Pay: pazarlama ve satış için harcanan toplam para. Payda: o harcamayla kazanılan yeni müşteri sayısı." },
        { tip: "ornek", baslik: "Reklam 10.000 TL, gelen 500 müşteri", durum: "Bir işletme reklama 10.000 lira harcıyor ve 500 yeni müşteri kazanıyor. *CAC* kaçtır?",
          adimlar: ["Toplam pazarlama gideri = 10.000 TL.", "Yeni müşteri sayısı = 500.", "*CAC* = 10.000 ÷ 500 = 20 TL.", "Düşük olması iyidir: her yeni müşteriye 20 TL harcıyoruz."],
          sonuc: "*CAC* = ==20 TL== (müşteri başına)." },
        { tip: "grafik", baslik: "Harcama arttıkça yeni müşteri", xlabel: "Reklam (bin TL)", ylabel: "Yeni müşteri", xmax: 12, ymax: 600, xticks: [{ v: 2, label: "2" }, { v: 5, label: "5" }, { v: 10, label: "10" }], yticks: [{ v: 100, label: "100" }, { v: 250, label: "250" }, { v: 500, label: "500" }],
          ogeler: [
            { id: "hat", tip: "cizgi", renk: 0, from: [0, 0], to: [0, 0], etiket: "" },
            { id: "p1", tip: "nokta", x: 5, y: 250, etiket: "5 bin → 250", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 10, y: 500, etiket: "10 bin → 500", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", x: 2, y: 100, etiket: "2 bin → 100", kilavuz: true, gizli: true },
            { id: "yz", tip: "yazi", x: 7.2, y: 140, metin: "Her 1.000 TL ≈ 50 müşteri", gizli: true },
            { id: "yz2", tip: "yazi", x: 7.2, y: 60, metin: "CAC = 20 TL (sabit)", gizli: true }
          ],
          durumlar: [
            { metin: "Bu işletmede her 1.000 TL reklam yaklaşık 50 yeni müşteri getiriyor.", set: { hat: { to: [12, 600] } }, goster: ["yz"] },
            { metin: "2 bin TL harcarsan 100 müşteri gelir: 2.000 ÷ 100 = 20 TL.", goster: ["p3"] },
            { metin: "5 bin TL → 250 müşteri: 5.000 ÷ 250 = 20 TL.", goster: ["p3", "p1"] },
            { metin: "10 bin TL → 500 müşteri: 10.000 ÷ 500 = 20 TL. Eğim sabit olduğu için *CAC* hep ==20 TL==.", goster: ["p3", "p1", "p2", "yz2"] }
          ] }
      ]
    },
    {
      baslik: "*CLV*: müşteri sana ne bırakır?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "♾️", terim: "Customer lifetime value", tr: "müşteri yaşam boyu değeri (CLV)", tanim: "Bir müşterinin işletmeyle ilişkisi boyunca harcayacağı tahmini toplam para.", ornek: "Her hafta 100 TL'lik kahve alan müşteri on yılda 52.000 TL bırakır." },
            { ikon: "🎁", terim: "Reward programs", tr: "ödül programları", tanim: "Tekrar alışverişi puan, yıldız ya da hediyeyle ödüllendiren sadakat programları.", ornek: "Starbucks'ta biriken yıldızlar." },
            { ikon: "😊", terim: "Customer satisfaction", tr: "müşteri memnuniyeti", tanim: "Müşterinin beklentisinin ne kadar karşılandığı; memnun müşteri geri gelir.", ornek: "Kahvesi hep sıcak ve hızlı gelen müşteri." },
            { ikon: "🧑‍🍳", terim: "Personalized service", tr: "kişiye özel hizmet", tanim: "Müşteriye adıyla, tercihine göre davranmak.", ornek: "Barista \"Her zamankinden mi?\" diye sorar." }
          ] },
        { tip: "ornek", baslik: "Starbucks müşterisi kaç lira bırakır?", durum: "Bir müşteri her hafta Starbucks'tan 100 liralık kahve alıyor ve bunu on yıl sürdürüyor. *CLV* kaçtır?",
          adimlar: ["Yılda 52 hafta: 52 × 100 = 5.200 TL.", "On yıl: 5.200 × 10 = 52.000 TL.", "Kimse tek ziyarette 100 lira harcamaz; ama sadık müşteri yıllar içinde çok para bırakır."],
          sonuc: "*CLV* = ==52.000 TL==." },
        { tip: "grafik", baslik: "Sadık müşterinin birikimi", xlabel: "Yıl", ylabel: "Toplam harcama (bin TL)", xmax: 10, ymax: 60, xticks: [{ v: 1, label: "1" }, { v: 5, label: "5" }, { v: 10, label: "10" }], yticks: [{ v: 5.2, label: "5,2" }, { v: 26, label: "26" }, { v: 52, label: "52" }],
          ogeler: [
            { id: "clv", tip: "cizgi", renk: 1, from: [0, 0], to: [0, 0], etiket: "" },
            { id: "c1", tip: "nokta", x: 1, y: 5.2, etiket: "1. yıl: 5,2", kilavuz: true, gizli: true },
            { id: "c5", tip: "nokta", x: 5, y: 26, etiket: "5. yıl: 26", kilavuz: true, gizli: true },
            { id: "c10", tip: "nokta", x: 10, y: 52, etiket: "10. yıl: 52", kilavuz: true, gizli: true },
            { id: "cy", tip: "yazi", x: 5.2, y: 54, metin: "CLV = 52 bin TL", gizli: true }
          ],
          durumlar: [
            { metin: "Haftada 100 TL: her yıl çizgi 5,2 bin TL yükselir.", set: { clv: { to: [10, 52] } } },
            { metin: "Bir yıl sonra müşteri 5.200 TL bırakmıştır.", goster: ["c1"] },
            { metin: "Beş yıl sonra 26.000 TL.", goster: ["c1", "c5"] },
            { metin: "On yılda 52.000 TL: bu müşterinin ==*CLV*==\'si.", goster: ["c1", "c5", "c10", "cy"] }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🧲", baslik: "*CAC*", maddeler: ["Müşteriyi KAZANMAK için harcanan para", "Maliyet, bir kez", "İşletme düşük ister"] },
          sag: { ikon: "♾️", baslik: "*CLV*", maddeler: ["Müşterinin ZAMAN İÇİNDE getirdiği para", "Gelir, uzun vadeli", "İşletme yüksek ister"] },
          oyun: [
            { metin: "Reklama 60.000 TL harcayıp 200 yeni üye kazandık: üye başına 300 TL.", cevap: "sol", neden: "Kazanmanın maliyeti: *CAC*." },
            { metin: "Her üye salonda yıllar içinde toplam 24.000 TL ödüyor.", cevap: "sag", neden: "Müşterinin getirdiği toplam para: *CLV*." },
            { metin: "Her hafta kahve alan müşteri on yılda 52.000 TL bırakıyor.", cevap: "sag", neden: "İlişki boyunca bırakılan para: *CLV*." },
            { metin: "10.000 TL reklam, 500 yeni müşteri: kişi başı 20 TL.", cevap: "sol", neden: "Pazarlama gideri ÷ yeni müşteri: *CAC*." }
          ] },
        { tip: "ornek", baslik: "Mini sınav: spor salonu", durum: "Bir spor salonu reklama 60.000 lira harcayıp 200 yeni üye kazanıyor. Her üye toplamda 24.000 lira ödüyor. Salonun *customer acquisition cost*'u kaçtır?",
          adimlar: ["*CAC* = pazarlama gideri ÷ yeni müşteri.", "60.000 ÷ 200 = 300 TL.", "24.000 TL ise üyenin toplam ödemesidir, yani *CLV*; ikisini karıştırma."],
          sonuc: "*CAC* = ==300 TL==; *CLV* = 24.000 TL." },
        { tip: "tuzak", baslik: "CAC ile CLV'yi karıştırma", metin: "Sınavda sayılar aynı soruda yan yana verilir.", yanlis: "24.000 TL harcama gördüm, demek ki *CAC* 24.000 TL.", dogru: "*CAC* müşteri başına yapılan ==harcama== (maliyet), *CLV* müşterinin zaman içinde getirdiği ==para==. Uzun vadeli ilişki *CAC*'ı düşürür, *CLV*'yi artırır." },
        { tip: "liste", maddeler: [
            { ikon: "🔁", baslik: "Müşteriyi geri getirenler", metin: "*Reward programs*, *personalized service* ve *customer satisfaction*." },
            { ikon: "📣", baslik: "Sadık müşteri anlatır", metin: "*Loyal customer* uzun vadeli ilişki kurar ve arkadaşlarına da anlatır; yeni müşteri getirir." },
            { ikon: "🧠", baslik: "Takıntı", metin: "Başarılı şirketler, kazandıkları müşteriye iyi bakmaya takıntılıdır." }
          ] }
      ]
    },
    {
      baslik: "Verinin riskleri",
      bloklar: [
        { tip: "not", metin: "Müşteri verisi altın değerinde ama sorumluluk getirir. Bir kahve dükkânı yapay zekâlı kamerayla kaç dakika oturduğunu ve çalışanın saatte kaç sipariş hazırladığını ölçerse, bu iyi işletmecilik mi yoksa özel hayatın ihlali mi? Video bu soruyu sana bırakıyor." },
        { tip: "harita", merkez: "Veri riskleri", dallar: [
            { baslik: "*Fraud*", alt: "çalınan veriyle dolandırıcılık" },
            { baslik: "*Identity theft*", alt: "kişisel bilgiyle adına işlem yapmak" },
            { baslik: "Kötü itibar", alt: "*bad reputation*: güven kaybı" },
            { baslik: "*Invasion of privacy*", alt: "habersiz izleme ve veri toplama" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🕵️", terim: "Fraud", tr: "dolandırıcılık", tanim: "Çalınan müşteri verisiyle yapılan dolandırıcılık.", ornek: "Çalınan kart bilgisiyle alışveriş yapılması." },
            { ikon: "🪪", terim: "Identity theft", tr: "kimlik hırsızlığı", tanim: "Birinin kişisel bilgilerini ele geçirip onun adına işlem yapmak.", ornek: "Çalınan kimlik bilgisiyle başkası adına kredi çekmek." },
            { ikon: "🔒", terim: "Invasion of privacy", tr: "özel hayatın ihlali", tanim: "Müşterinin haberi ya da izni olmadan verisinin toplanması veya kullanılması.", ornek: "Ne kadar oturduğunu ölçen gizli kamera; adın yazılı reklamı görünce \"bu özel hayatın ihlali\" demek." }
          ] },
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "Veri korunmazsa", maddeler: ["Çalınır", "*Fraud* ve *identity theft*", "İtibar kaybı"] },
          sag: { ikon: "👁️", baslik: "Veri habersiz toplanırsa", maddeler: ["Müşteri izlendiğini fark eder", "*Invasion of privacy* sayılır", "Güven sarsılır"] },
          oyun: [
            { metin: "Hackerlar müşteri listesini çaldı, kartlarla alışveriş yapıldı.", cevap: "sol", neden: "Veri korunmadığı için çalındı: *fraud*." },
            { metin: "Müşteri, haberi olmadan haritada adresinin gösterildiğini fark etti.", cevap: "sag", neden: "İzinsiz toplama ve kullanma: *invasion of privacy*." },
            { metin: "Çalınan kimlik bilgileriyle biri adına kredi çekildi.", cevap: "sol", neden: "Koruma hatası: *identity theft*." },
            { metin: "Kafe, müşterinin kaç dakika oturduğunu kamerayla ölçüyor, kimseye söylemiyor.", cevap: "sag", neden: "Müşteri bilmeden izleniyor: *invasion of privacy*." }
          ] },
        { tip: "tuzak", baslik: "Veri etiği", metin: "Sınavda tek bir kural beklenir.", yanlis: "Ne kadar çok veri toplarsam o kadar iyi; nasıl topladığım önemsiz.", dogru: "==Veriyi sorumlu topla, dikkatle koru.== Çalınırsa *fraud*, *identity theft* ve itibar kaybı; müşteri bilmeden toplanırsa *invasion of privacy*." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Marketing* reklamdan çok daha geniş: müşteriyi anlamak, tanıtmak, satmak, ulaştırmak. *Advertising* yalnızca parası ödenen duyuru.",
            "*Publicity* parasız çıkan haber; *public relations* bilinçli imaj çabası; *promotion* dikkat çeken tanıtım; *sales* gerçek satın alma.",
            "*Demographics* ==kim== alır der (yaş, gelir, eğitim, meslek, konum); *psychographics* ==neden== alır der (ilgi, değer, hobi, yaşam tarzı).",
            "Veri kaynakları: üyelikler, sosyal medya, *cookies*, *surveys*, *focus groups*; Netflix ve Migros Money kart örnekleri.",
            "Herkese satmaya çalışırsan kimseye satamazsın: *market segmentation* → *target customer* → *customer profile*.",
            "*Customer profile* kurgusaldır ama binlerce gerçek müşteriyi temsil eder: \"Elif buna ne der?\"",
            "*CAC* = pazarlama ve satış gideri ÷ yeni müşteri sayısı (10.000 ÷ 500 = 20 TL); düşük olmalı.",
            "*CLV* = müşterinin yıllar içinde bıraktığı toplam para (100 TL × 52 hafta × 10 yıl = 52.000 TL); yüksek olmalı.",
            "Mevcut müşteriyi tutmak, yenisini bulmaktan çok daha ucuz: *reward programs*, kişiye özel hizmet, *customer satisfaction*.",
            "Veri çalınırsa *fraud* ve *identity theft*, habersiz toplanırsa *invasion of privacy*: sorumlu topla, sıkı koru."
          ] }
      ]
    }
  ]
};
