/* Kitpath not defteri · bf21 · 2.1 Müşteriye Pazarlama
   Kaynak: ap-videolar/src/episodes/bf21 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf21",
  amac: "Bu konu pazarlamayı anlatıyor: *marketing* reklamdan çok daha geniş bir plandır. Müşteriyi veriyle tanımayı, doğru gruba satmayı ve bir müşterinin sana maliyetini ve değerini hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*Marketing* reklamdan fazlasıdır",
      kisa: "Reklam, pazarlamanın yalnızca bir parçasıdır.",
      bloklar: [
        { tip: "adimlar", baslik: "Sirk şehre geliyor", adimlar: [
            { baslik: "Tabela → *advertising*", metin: "\"Sirk bu akşam\" tabelası: parası ödenen duyuru, reklam." },
            { baslik: "Kırmızı fil → *promotion*", metin: "Filini kırmızıya boyayıp caddede yürütmek: dikkat çekmek için yapılan tanıtım." },
            { baslik: "Ezilen çiçekler → *publicity*", metin: "Fil belediye başkanının çiçeklerini ezip haberlere çıkarsa: parasını ödemediğin, kontrol edemediğin medya ilgisi." },
            { baslik: "Bedava bilet → *public relations*", metin: "Başkana bedava bilet verip gönlünü almak: halkla ilişkiler, olumlu imaj çabası." },
            { baslik: "Bilet alanlar → *sales*", metin: "İnsanlar gerçekten bilet alırsa: satış." },
            { baslik: "Baştan plan → *marketing*", metin: "Müşterinin ihtiyacını anlayıp ürünü tanıtmak, satmak ve ulaştırmak için yapılan her şey." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "📰", baslik: "*Publicity*", maddeler: ["Parası ödenmez", "Kendiliğinden gelen haber", "İşletme tam kontrol edemez"] },
          sag: { ikon: "🤝", baslik: "*Public relations*", maddeler: ["İmajı düzeltmek için bilinçli atılan adım", "İşletme planlar", "Örnek: başkana bedava bilet"] },
          oyun: [
            { metin: "Filin çiçekleri ezmesi yerel haberlere çıktı.", cevap: "sol", neden: "Para ödemedin, haber kendiliğinden geldi: *publicity*." },
            { metin: "Sirk, belediye başkanına bedava bilet verip birlikte fotoğraf çektirdi.", cevap: "sag", neden: "İmajı onarmak için bilinçli bir adım: *public relations*." },
            { metin: "Bir ünlü, markanı kendi isteğiyle yazdığı bir haberde övdü; sen hiçbir şey ödemedin.", cevap: "sol", neden: "Parasız ve kontrolsüz ilgi: *publicity*." },
            { metin: "Şirket, kriz sonrası halka özür ve açıklama toplantısı düzenledi.", cevap: "sag", neden: "Olumlu imajı geri kazanmaya yönelik planlı çaba: *public relations*." }
          ] },
        { tip: "tuzak", baslik: "Marketing ≠ advertising", metin: "Öğrencilerin çoğu ikisini aynı sanıyor; sınavın ilk tuzağı bu.", yanlis: "*Marketing* demek reklam yapmak demektir.", dogru: "*Advertising*, *marketing*'in yalnızca bir parçasıdır. *Publicity* parasız çıkan haber, *public relations* bilinçli imaj çabası, *advertising* ise parası ödenen duyurudur." }
      ]
    },
    {
      baslik: "Müşteriyi tanımak: veri nereden gelir?",
      kisa: "Müşteriyi tanımayan reklam parasını boşa harcar; veri müşteriyi tanıtır.",
      bloklar: [
        { tip: "hikaye", ikon: "👟", baslik: "Seni izleyen ayakkabı",
          metin: "Bir kere baktığın spor ayakkabı ertesi gün her uygulamada karşına çıkar: şirket seni veriyle tanıdı. Mağazacı John Wanamaker yüz yıl önce \"reklam paramın yarısı boşa gidiyor, ama hangi yarısı bilmiyorum\" demiş. Çare ==veriyle müşterini tanımak==; Jeff Bezos'a göre başarının bir numaralı nedeni de müşteriye takıntılı odaklanmaktır." },
        { tip: "harita", merkez: "Müşteri verisi", dallar: [
            { baslik: "Üyelikler", alt: "abone listeleri, online hesaplar; Migros Money kart her okutuşta sepetini kaydeder" },
            { baslik: "Sosyal medya", alt: "ne beğendiğin, kimi izlediğin" },
            { baslik: "*Cookies*", alt: "seni sitelerde izler, hatırlar" },
            { baslik: "Tık takibi", alt: "*click tracking*; Netflix ne zaman, ne kadar izlediğini ve hangi kapağa tıkladığını kaydeder" },
            { baslik: "*Surveys*", alt: "anketler" },
            { baslik: "*Focus groups*", alt: "küçük grup görüşmeleri, röportajlar" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🍪", terim: "Cookies", tr: "çerezler", tanim: "Bir sitenin seni hatırlamasını ve gezinmeni izlemesini sağlayan küçük veri dosyaları. Sana özel reklamların kaynağıdır.", ornek: "Bir kere baktığın ayakkabının her sitede karşına çıkması." },
            { ikon: "📝", terim: "Surveys", tr: "anketler", tanim: "Müşterilere soru sorarak veri toplama yöntemi.", ornek: "Alışverişten sonra gelen \"Memnun kaldınız mı?\" formu." },
            { ikon: "🗣️", terim: "Focus groups", tr: "odak grupları", tanim: "Küçük bir müşteri grubuyla yapılan, yönlendirmeli grup görüşmeleri.", ornek: "Yeni bir kahve aroması için 8 kişiyle yapılan tadım sohbeti." }
          ] }
      ]
    },
    {
      baslik: "*Demographics* ve *psychographics*: kim, neden?",
      kisa: "Demographics kimin aldığını, psychographics neden aldığını söyler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📊", baslik: "*Demographics*", maddeler: ["Ölçülebilen özellikler", "Yaş, gelir, eğitim, cinsiyet, meslek, konum", "Cevapladığı soru: ==kim alır?=="] },
          sag: { ikon: "💭", baslik: "*Psychographics*", maddeler: ["İlgi alanları, değerler, hobiler, tutumlar", "Kişilik ve yaşam tarzı", "Cevapladığı soru: ==neden alır?=="] },
          oyun: [
            { metin: "Müşteri 45-65 yaş arasında.", cevap: "sol", neden: "Yaş ölçülebilir bir özellik: *demographics*." },
            { metin: "Müşteri açık havada vakit geçirmeyi sever.", cevap: "sag", neden: "Hobi ve ilgi alanı: *psychographics*." },
            { metin: "Yıllık geliri yüksek bir ev sahibi.", cevap: "sol", neden: "Gelir ve konut durumu ölçülebilir: *demographics*." },
            { metin: "Kolaylığa ve yeni teknolojiye değer veriyor.", cevap: "sag", neden: "Değer ve tutum: *psychographics*." },
            { metin: "Üniversite mezunu, mühendis.", cevap: "sol", neden: "Eğitim ve meslek: *demographics*." }
          ] },
        { tip: "ornek", baslik: "3.000 dolarlık robot çim biçme makinesini kim alır?", durum: "Bir firma 3.000 dolarlık robot çim biçme makinesi satıyor. Alıcı apartmanda yaşayan 20 yaşındaki bir üniversiteli mi, başka biri mi?",
          adimlar: ["*Demographics*: öğrencinin bahçesi ve bu kadar *disposable income*'ı (zorunlu giderlerden sonra elde kalan, istediğin gibi harcayabileceğin para) yok. Alıcı 45-65 yaş arası, ev sahibi, harcanabilir geliri yüksek biri.", "*Psychographics*: aynı kişi açık havada vakit geçirmeyi sever, kolaylığa ve yeni teknolojiye değer verir.", "İlki ==kim== alır sorusunu, ikincisi ==neden== alır sorusunu cevaplar."],
          sonuc: "Hedef: 45-65 yaş, ev sahibi, yüksek gelirli, bahçesini seven teknoloji meraklısı." },
        { tip: "tuzak", baslik: "Kim mi, neden mi?", metin: "Sınavda iki veri türünü ayırmak için tek bir soru yeter.", yanlis: "\"Hobiler ve yaşam tarzı\" da *demographics*'tir.", dogru: "Yaş, gelir, eğitim, meslek, konum görürsen *demographics*; ilgi, değer, hobi, yaşam tarzı görürsen *psychographics*." }
      ]
    },
    {
      baslik: "Segmentasyon: herkese satmaya çalışma",
      kisa: "Herkese satmaya çalışırsan kimseye satamazsın; önce böl, sonra hedef seç.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✂️", terim: "Market segmentation", tr: "pazar bölümlemesi", tanim: "Olası müşterileri benzer demografik ve psikografik özellikleri paylaşan gruplara bölmek.", ornek: "Krampon reklamı için sınıftaki herkesi değil, halı sahaya gidenleri ayırmak." },
            { ikon: "🎯", terim: "Target customer", tr: "hedef müşteri", tanim: "Segmentasyon sonunda ürünü almaya en yatkın görülen müşteri grubu. Başka kaynaklarda *target market* de denir.", ornek: "Sınıfta herkes 17 yaşında; krampon reklamı yalnızca halı sahacılara gider." }
          ] },
        { tip: "grafik", baslik: "\"Guess Who?\" gibi ele: kalabalık nasıl daralır?", xlabel: "Eleme adımı", ylabel: "Kalan kişi", xmax: 4, ymax: 10, xticks: [{ v: 1, label: "Hepsi" }, { v: 2, label: "Yaş" }, { v: 3, label: "Gelir" }, { v: 4, label: "İlgi" }], yticks: [],
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
      baslik: "*Customer profile*: hedef müşteriye bir yüz ver",
      kisa: "Profil, hedef grubu temsil eden kurgusal bir kişidir.",
      bloklar: [
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
      kisa: "CAC, bir yeni müşteriyi kazanmanın maliyetidir; işletme düşük ister.",
      bloklar: [
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
          sonuc: "*CAC* = ==20 TL== (müşteri başına)." }
      ]
    },
    {
      baslik: "*CLV*: müşteri sana ne bırakır?",
      kisa: "CLV, müşterinin zamanla bıraktığı paradır; sadık müşteri CAC'ı düşürür.",
      bloklar: [
        { tip: "not", metin: "Başka bir şey öğrenmesen bunu öğren: eldeki müşteriyi tutmak, yenisini bulmaktan çok daha ucuzdur. *Loyal customer* uzun vadeli ilişki kurar, arkadaşlarına anlatır ve yeni müşteri getirir. Yatırımcı Kevin O'Leary'nin ilk sorusu da şudur: bir yeni müşteri sana kaça mal oluyor?" },
        { tip: "kavramlar", kartlar: [
            { ikon: "♾️", terim: "Customer lifetime value", tr: "müşteri yaşam boyu değeri (CLV)", tanim: "Bir müşterinin işletmeyle ilişkisi boyunca harcayacağı tahmini toplam para.", ornek: "Her hafta 100 TL'lik kahve alan müşteri on yılda 52.000 TL bırakır." },
            { ikon: "🎁", terim: "Reward programs", tr: "ödül programları", tanim: "Tekrar alışverişi puan, yıldız ya da hediyeyle ödüllendiren sadakat programları.", ornek: "Starbucks'ta biriken yıldızlar." },
            { ikon: "😊", terim: "Customer satisfaction", tr: "müşteri memnuniyeti", tanim: "Müşterinin beklentisinin ne kadar karşılandığı; memnun müşteri geri gelir.", ornek: "Kahvesi hep sıcak ve hızlı gelen müşteri." },
            { ikon: "🧑‍🍳", terim: "Personalized service", tr: "kişiye özel hizmet", tanim: "Müşteriye adıyla, tercihine göre davranmak.", ornek: "Barista \"Her zamankinden mi?\" diye sorar." }
          ] },
        { tip: "ornek", baslik: "Starbucks müşterisi kaç lira bırakır?", durum: "Bir müşteri her hafta Starbucks'tan 100 liralık kahve alıyor ve bunu on yıl sürdürüyor. *CLV* kaçtır?",
          adimlar: ["Yılda 52 hafta: 52 × 100 = 5.200 TL.", "On yıl: 5.200 × 10 = 52.000 TL.", "Kimse tek ziyarette 100 lira harcamaz; ama sadık müşteri yıllar içinde çok para bırakır."],
          sonuc: "*CLV* = ==52.000 TL==." },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🧲", baslik: "*CAC*", maddeler: ["Müşteriyi KAZANMAK için harcanan para", "Maliyet; işletme düşük ister", "Uzun vadeli ilişki onu düşürür"] },
          sag: { ikon: "♾️", baslik: "*CLV*", maddeler: ["Müşterinin ZAMAN İÇİNDE getirdiği para", "Gelir; işletme yüksek ister", "Uzun vadeli ilişki onu artırır"] },
          oyun: [
            { metin: "Reklama 60.000 TL harcayıp 200 yeni üye kazandık: üye başına 300 TL.", cevap: "sol", neden: "Kazanmanın maliyeti (60.000 ÷ 200): *CAC*." },
            { metin: "Her üye salonda yıllar içinde toplam 24.000 TL ödüyor.", cevap: "sag", neden: "Müşterinin getirdiği toplam para: *CLV*. Aynı soruda yan yana gelen 300 ile 24.000'i karıştırma." },
            { metin: "Her hafta kahve alan müşteri on yılda 52.000 TL bırakıyor.", cevap: "sag", neden: "İlişki boyunca bırakılan para: *CLV*." },
            { metin: "10.000 TL reklam, 500 yeni müşteri: kişi başı 20 TL.", cevap: "sol", neden: "Pazarlama gideri ÷ yeni müşteri: *CAC*." }
          ] }
      ]
    },
    {
      baslik: "Verinin riskleri ve veri etiği",
      kisa: "Veriyi sorumlu topla, dikkatle koru.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕵️", terim: "Fraud", tr: "dolandırıcılık", tanim: "Çalınan müşteri verisiyle yapılan dolandırıcılık.", ornek: "Çalınan kart bilgisiyle alışveriş yapılması." },
            { ikon: "🪪", terim: "Identity theft", tr: "kimlik hırsızlığı", tanim: "Birinin kişisel bilgilerini ele geçirip onun adına işlem yapmak.", ornek: "Çalınan kimlik bilgisiyle başkası adına kredi çekmek." },
            { ikon: "🔒", terim: "Invasion of privacy", tr: "özel hayatın ihlali", tanim: "Müşterinin haberi ya da izni olmadan verisinin toplanması veya kullanılması.", ornek: "Kafenin, kaç dakika oturduğunu yapay zekâlı kamerayla gizlice ölçmesi." }
          ] },
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "Veri korunmazsa", maddeler: ["Çalınır", "*Fraud* ve *identity theft*", "İtibar kaybı (*bad reputation*)"] },
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
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Marketing* reklamdan çok daha geniş: müşteriyi anlamak, tanıtmak, satmak, ulaştırmak. *Advertising* yalnızca parası ödenen duyuru.",
            "*Publicity* parasız çıkan haber; *public relations* bilinçli imaj çabası; *promotion* dikkat çeken tanıtım; *sales* gerçek satın alma.",
            "*Demographics* ==kim== alır der (yaş, gelir, eğitim, meslek, konum); *psychographics* ==neden== alır der (ilgi, değer, hobi, yaşam tarzı).",
            "Veri kaynakları: üyelikler, sosyal medya, *cookies*, *surveys*, *focus groups*.",
            "Herkese satmaya çalışırsan kimseye satamazsın: *market segmentation* → *target customer* → *customer profile* (kurgusal, binlerce müşteriyi temsil eder).",
            "*CAC* = pazarlama ve satış gideri ÷ yeni müşteri sayısı (10.000 ÷ 500 = 20 TL); düşük olmalı.",
            "*CLV* = müşterinin yıllar içinde bıraktığı toplam para (100 TL × 52 hafta × 10 yıl = 52.000 TL); yüksek olmalı.",
            "Mevcut müşteriyi tutmak yenisini bulmaktan çok daha ucuz: *reward programs*, kişiye özel hizmet, *customer satisfaction*.",
            "Veri çalınırsa *fraud* ve *identity theft*, habersiz toplanırsa *invasion of privacy*: sorumlu topla, sıkı koru."
          ] }
      ]
    }
  ]
};
