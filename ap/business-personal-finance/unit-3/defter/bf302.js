/* Kitora not defteri · bf302 · 3.2 Borçlanma, Kredi ve Borç
   Kaynak: AP Business with Personal Finance CED, Topic 3.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf302",
  amac: "Bu konu borçlanmayı anlatıyor: insanlar neden borç alır, kim borç verir, kredi türleri ve faiz oranı ile APR nasıl okunur, borç verenler seni nasıl değerlendirir. Kredi kartı asgari ödeme tuzağını ve borcu yönetme yollarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Neden borç alırız?",
      kisa: "Borç, bugün harcama yapmanı sağlar; karşılığında geri ödeme ve faiz getirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Loan", tr: "kredi, ödünç", tanim: "Geri ödenmesi gereken ödünç para. Faizle birlikte, kararlaştırılan koşullarda geri verilir.", ornek: "Bankadan alınan 12.000 TL'lik ihtiyaç kredisi." },
            { ikon: "⚖️", terim: "Liability / debt", tr: "yükümlülük, borç", tanim: "Borçlanmak kişisel bir yükümlülük yaratır: aldığın parayı geri ödemek zorundasın.", ornek: "Her ay ödenmesi gereken taksit." },
            { ikon: "💸", terim: "Interest", tr: "faiz", tanim: "Borç alanın, parayı kullandığı için borç verene ödediği bedel. Faiz oranı ve vade; borç verene, kredi türüne, tutara ve borçlunun kredi geçmişine göre değişir.", ornek: "12.000 TL için yıllık %24 faiz." },
            { ikon: "🚫", terim: "Default", tr: "temerrüt", tanim: "Borçlunun krediyi geri ödememesi. Borç verenlerin en büyük riskidir.", ornek: "İşini kaybeden borçlunun taksitleri ödememesi." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🏠", baslik: "Gelirinden ve birikiminden büyük harcama", metin: "Araba, ev ya da üniversite harcı." },
            { ikon: "🚑", baslik: "Acil durum", metin: "Beklenmedik bir masrafı karşılamak." },
            { ikon: "🐷", baslik: "Birikimi korumak", metin: "Tasarrufa dokunmadan alışveriş yapmak." },
            { ikon: "💳", baslik: "Kolaylık", metin: "Kartla ödeyip faturayı sonra kapatmak." }
          ] }
      ]
    },
    {
      baslik: "Kim borç verir?",
      kisa: "Bankalar mevduattan kredi verir; kart şirketleri, mağazalar ve alternatif hizmetler de borç verir.",
      bloklar: [
        { tip: "harita", merkez: "Tüketiciye borç verenler", dallar: [
            { baslik: "Bankalar", alt: "Mevduatla kredi verir" },
            { baslik: "Kredi birlikleri", alt: "Üyelerine kredi verir" },
            { baslik: "Kredi kartı şirketleri", alt: "Kartla alışveriş limiti" },
            { baslik: "Mağazalar", alt: "Taksit, mağaza kartı" },
            { baslik: "İpotek verenler", alt: "*Mortgage*: konut kredisi" },
            { baslik: "Alternatif hizmetler", alt: "*Payday loan*, çek bozdurma, anlık vergi iadesi" }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🏦", baslik: "Bankalar ve kredi birlikleri", maddeler: ["Tasarruf sahiplerinin mevduatlarıyla kredi verir", "Tüketicilere, işletmelere, kâr amacı gütmeyenlere ve devlete borç verir", "Faiz görece düşüktür"] },
          sag: { ikon: "⚡", baslik: "Alternatif finansal hizmetler", maddeler: ["*Payday loan*, *check-cashing*, anlık vergi iadesi", "Hızlı ve kolay; riskli borçluya da verilir", "Faiz ve ücret genelde çok yüksektir"] },
          oyun: [
            { metin: "Bir kasabadaki tasarruf sahiplerinin parasıyla çiftçiye kredi veren kurum.", cevap: "sol", neden: "Mevduatla kredi vermek bankaların işlevidir." },
            { metin: "Maaşa kadar küçük bir kredi veren, faizi çok yüksek bir yer.", cevap: "sag", neden: "*Payday loan* alternatif finansal hizmettir." },
            { metin: "Belediyeye kredi veren ticari banka.", cevap: "sol", neden: "Bankalar devlet kuruluşlarına da borç verir." },
            { metin: "Çekini hemen nakde çeviren, karşılığında yüksek ücret alan büro.", cevap: "sag", neden: "*Check-cashing* alternatif finansal hizmettir." }
          ] },
        { tip: "tuzak", baslik: "Hızlı kredi ucuz kredi değildir", metin: "Alternatif hizmetler kolay ve hızlıdır ama borçluyu daha riskli sayarlar.", yanlis: "Hemen onaylanan kredi en iyi kredidir.", dogru: "Riskli borçlulara verenler yüksek faiz ister. Bir borcun gerçek maliyetini yalnızca ne kadar hızlı onaylandığına değil, faizine ve ücretlerine bakarak anlarsın." }
      ]
    },
    {
      baslik: "Kredi türleri: teminatlı ve teminatsız",
      kisa: "Teminatlı (*secured*) krediler genelde teminatsızlardan daha düşük faizlidir.",
      bloklar: [
        { tip: "tablo", baslik: "Başlıca kredi türleri", head: ["Kredi", "Teminat", "Tipik faiz"], rows: [
            ["*Mortgage* (konut)", "Ev (*collateral*)", "Genelde daha düşük"],
            ["*Auto loan* (taşıt)", "Araba (*collateral*)", "Genelde daha düşük"],
            ["*Personal loan* (ihtiyaç)", "Yok (*unsecured*)", "Genelde daha yüksek"],
            ["*Student loan* (öğrenci)", "Yok (*unsecured*)", "Kredi türüne göre değişir"],
            ["*Credit card* (kart borcu)", "Yok (*unsecured*)", "Genelde yüksek"],
            ["*Payday loan*", "Yok (*unsecured*)", "Çok yüksek"]
          ], not: "Teminat (*collateral*): borç ödenmezse borç verenin el koyabileceği değerli varlık." },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🔐", baslik: "*Secured loan* (teminatlı)", maddeler: ["Teminat olabilecek bir şey alınır (araba, ev)", "Borç verenin riski düşüktür", "Faiz genelde daha düşüktür"] },
          sag: { ikon: "🎈", baslik: "*Unsecured loan* (teminatsız)", maddeler: ["El konulacak bir teminat yoktur", "Borç verenin riski yüksektir", "Faiz genelde daha yüksektir"] },
          oyun: [
            { metin: "Aldığı arabayı teminat gösteren Mert'in taşıt kredisi.", cevap: "sol", neden: "Araba teminat: *secured loan*." },
            { metin: "Bir telefon almak için kullanılan kredi kartı borcu.", cevap: "sag", neden: "Kartın arkasında teminat yok: *unsecured*." },
            { metin: "Evi teminat gösteren konut kredisi.", cevap: "sol", neden: "Ev teminat: *secured loan* (*mortgage*)." },
            { metin: "Tatil için alınan, teminatsız bir ihtiyaç kredisi.", cevap: "sag", neden: "Teminat yok: *unsecured*, faizi genelde yüksek." }
          ] },
        { tip: "tuzak", baslik: "Teminatlı, borçlu için risksiz demek değildir", metin: "Düşük faiz, teminatı kaybetme riskini ortadan kaldırmaz.", yanlis: "Taşıt kredisi teminatlı olduğu için ödeyemezsem hiçbir şey olmaz.", dogru: "Teminatlı kredi ödenmezse borç veren teminata el koyabilir (araba, ev). Teminat borç verenin riskini azaltır, bu yüzden faiz düşer; borçlunun riskini azaltmaz." }
      ]
    },
    {
      baslik: "Faiz oranı, APR ve toplam maliyet",
      kisa: "Faiz oranı ve ücretler birlikte borcun yıllık maliyetini (*APR*) verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Interest rate", tr: "faiz oranı", tanim: "Borç alınan paranın yıllık yüzde bedeli. Borç verene, kredi türüne, tutara ve kredi geçmişine göre değişir.", ornek: "Yıllık %20." },
            { ikon: "📊", terim: "APR", tr: "yıllık yüzde oran", tanim: "*Annual percentage rate*: borcun yıllık maliyetini faize ek olarak kredinin bazı ücretlerini de katarak gösteren oran. Farklı kredileri karşılaştırmanın en iyi yolu.", ornek: "%20 faiz + ücret → APR %22." },
            { ikon: "📜", terim: "Consumer protection laws", tr: "tüketiciyi koruyan yasalar", tanim: "Borç verenlerin koşulları açık ve net anlatmasını zorunlu kılar; tahsilat yöntemlerini düzenler; ayrımcı kredi vermeyi yasaklar.", ornek: "Borç verenin faiz ve ücretleri açıkça belirtmesi." }
          ] },
        { tip: "ornek", baslik: "Hangi kredi daha ucuz?", durum: "Burak 10.000 TL'yi 1 yıllığına (tek ödemeyle) borçlanacak. Banka A: yıllık %20 faiz + 200 TL işlem ücreti. Banka B: yıllık %21 faiz, ücret yok. Hangisi daha ucuz?",
          adimlar: ["Banka A: faiz 10.000 × 0,20 = 2.000 TL; ücretle birlikte 2.200 TL. APR = 2.200 ÷ 10.000 = %22.", "Banka B: faiz 10.000 × 0,21 = 2.100 TL; ücret yok. APR = 2.100 ÷ 10.000 = %21.", "A'nın faiz oranı daha düşük görünür ama toplam maliyeti daha yüksektir."],
          sonuc: "==Banka B== daha ucuz: APR %21 < %22." },
        { tip: "tablo", baslik: "Aynı borç, farklı faiz; farklı tutar, farklı taksit", head: ["Borç", "Yıllık faiz", "Aylık taksit (12 ay)", "Toplam geri ödeme"], rows: [
            ["12.000 TL", "%12", "≈ 1.066 TL", "≈ 12.794 TL"],
            ["12.000 TL", "%24", "≈ 1.135 TL", "≈ 13.617 TL"],
            ["12.000 TL", "%36", "≈ 1.206 TL", "≈ 14.467 TL"],
            ["24.000 TL", "%24", "≈ 2.269 TL", "≈ 27.233 TL"]
          ], not: "Sabit taksitli 12 aylık kredi (faiz aylık hesaplanır). Faiz ya da borç büyüdükçe aylık ödeme artar." },
        { tip: "tuzak", baslik: "En düşük faiz en ucuz kredi değil", metin: "Ücretler faiz oranında görünmez.", yanlis: "Faiz oranı en düşük olan kredi her zaman en ucuzdur.", dogru: "Ücretleri de içeren *APR*'ı karşılaştır; yukarıdaki örnekte düşük faizli A daha pahalı çıktı." }
      ]
    },
    {
      baslik: "Kredi kartı ve asgari ödeme tuzağı",
      kisa: "Yalnızca asgari ödeme yapmak borcu yıllarca uzatır ve faizi katlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💳", terim: "Credit card", tr: "kredi kartı", tanim: "Önceden onaylı bir limite kadar harcama yapılan, teminatsız ve yüksek faizli bir borç türü. Ödenmeyen bakiye sonraki aya devreder.", ornek: "5.000 TL'lik telefon alışverişi." },
            { ikon: "🪤", terim: "Minimum payment", tr: "asgari ödeme", tanim: "Borcu temerrüde düşürmemek için her ay ödemen gereken en düşük tutar; borcun büyük kısmı faizle büyümeye devam eder.", ornek: "Bakiyenin %5'i." }
          ] },
        { tip: "grafik", baslik: "5.000 TL kart borcu, aylık %3 faiz", xlabel: "Ay", ylabel: "Kalan borç (TL)", xmax: 24, ymax: 5500, xticks: [{ v: 0, label: "0" }, { v: 12, label: "12" }, { v: 24, label: "24" }], yticks: [{ v: 2500, label: "2.500" }, { v: 5000, label: "5.000" }],
          ogeler: [
            { id: "b0", tip: "nokta", x: 0, y: 5000, etiket: "5.000", kilavuz: true },
            { id: "asg", tip: "egri", renk: 1, etiket: "Asgari ödeme (bakiyenin %5'i)", gizli: true, noktalar: [[0, 5000], [3, 4706], [6, 4429], [9, 4169], [12, 3924], [15, 3693], [18, 3476], [21, 3271], [24, 3079]] },
            { id: "sbt", tip: "egri", renk: 2, etiket: "Her ay 500 TL", gizli: true, noktalar: [[0, 5000], [3, 3918], [6, 2736], [9, 1444], [12, 33], [15, 0], [18, 0], [21, 0], [24, 0]] },
            { id: "a24", tip: "nokta", x: 24, y: 3079, etiket: "≈3.079", kilavuz: true, gizli: true },
            { id: "s13", tip: "nokta", x: 13, y: 0, etiket: "13. ay: bitti", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Telefon için 5.000 TL kart borcun var. Kart her ay bakiyeye %3 faiz ekliyor." },
            { metin: "Her ay yalnızca ==asgari ödeme== (güncel bakiyenin %5'i) yaparsan borç çok yavaş düşer.", goster: ["asg"] },
            { metin: "24 ay boyunca ≈ 4.803 TL ödedin ama borç hâlâ ==≈ 3.079 TL==: ödemenin çoğu faize gitti.", goster: ["a24"] },
            { metin: "Her ay sabit 500 TL ödesen borç ==13. ayda== biter; toplam ≈ 6.034 TL (faiz ≈ 1.034 TL).", goster: ["sbt", "s13"] }
          ] },
        { tip: "ornek", baslik: "Bir ay sonra bakiye", durum: "Kart bakiyesi 2.000 TL, aylık faiz %3, asgari ödeme bakiyenin %5'i. Bir ay sonra bakiye kaç TL olur?",
          adimlar: ["Aylık faiz: 2.000 × 0,03 = 60 TL; bakiye 2.060 TL olur.", "Asgari ödeme: 2.000 × 0,05 = 100 TL.", "Yeni bakiye: 2.060 − 100 = 1.960 TL; yalnızca 40 TL azaldı."],
          sonuc: "Bir ay sonra bakiye ==1.960 TL==. 100 TL ödedin ama 60 TL'si faize gitti." },
        { tip: "tuzak", baslik: "Asgari ödeme borcu bitirmez", metin: "Asgari ödeme seni temerrütten korur ama borcu çözmez.", yanlis: "Her ay asgari ödemeyi yapıyorum, o halde borcum yönetiliyor.", dogru: "Asgari ödeme yapınca kalan bakiye faiz işlemeye devam eder; borç yıllarca sürebilir. Yüksek faizli kart borcunu olabildiğince çabuk kapat." }
      ]
    },
    {
      baslik: "Kredi değerliliği: rapor ve kredi notu",
      kisa: "Borç verenler geçmiş ödemelerine bakarak temerrüt riskini tahmin eder.",
      bloklar: [
        { tip: "adimlar", baslik: "Kredi başvurusu nasıl değerlendirilir?", adimlar: [
            { baslik: "Bilgi toplanır", metin: "Gelir, birikim ve mevcut borç sorulur." },
            { baslik: "Kredi raporu çekilir", metin: "Geçmişte kredi kullanımını gösteren *credit report* incelenir." },
            { baslik: "Risk ölçülür", metin: "Borç verenler az riskli borçluyu tercih eder: düşük borç, yüksek gelir ve birikim, zamanında ödeme geçmişi." },
            { baslik: "Karar ve faiz", metin: "Daha riskli borçluya ya kredi verilmez ya da daha yüksek faiz istenir." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "✅", terim: "Creditworthiness", tr: "kredi değerliliği", tanim: "Borç verenin gözünde bir kişinin krediyi geri ödeyeceğine dair güven.", ornek: "Düşük borcu, yüksek geliri ve düzenli ödeme geçmişi olan kişi." },
            { ikon: "🏢", terim: "Credit bureau", tr: "kredi bürosu", tanim: "*Credit reporting agency*. Bir kişi hesap açtığında, kredi başvurduğunda ya da ödeme yaptığında bilgi toplar ve *credit report* hazırlar.", ornek: "Türkiye'de Kredi Kayıt Bürosu (KKB, Findeks)." },
            { ikon: "📋", terim: "Credit report / score", tr: "kredi raporu / notu", tanim: "Rapor geçmiş kredi kullanımını anlatır; *credit score* bu geçmişin özetidir. Rapor borç verenlerle, işverenlerle, ev sahipleriyle, sigorta şirketleriyle ve kamu kurumlarıyla paylaşılabilir.", ornek: "ABD'de skorlar çoğunlukla 300–850 arasındadır (FICO)." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🟢", baslik: "Borç veren için düşük risk", maddeler: ["Düşük mevcut borç", "Yüksek gelir ve birikim", "Zamanında ödeme geçmişi"] },
          sag: { ikon: "🔴", baslik: "Borç veren için yüksek risk", maddeler: ["Yüksek mevcut borç", "Düşük gelir ve birikim", "Geç ödeme ya da temerrüt geçmişi"] },
          oyun: [
            { metin: "Aylık geliri yüksek, hiç gecikmemiş, borcu az olan Deniz.", cevap: "sol", neden: "Düşük risk: daha düşük faizle kredi bulur." },
            { metin: "Kartlarını doldurmuş, son iki taksidi geciktirmiş Cem.", cevap: "sag", neden: "Yüksek risk: yüksek faiz ya da ret bekler." },
            { metin: "Düzenli gelir ve iyi birikimi olan, hiç borç ödemesini aksatmayan Aylin.", cevap: "sol", neden: "Güvenilir ödeme geçmişi düşük risk demektir." },
            { metin: "Geliri düzensiz, mevcut kredi taksitleri geliri aşan Tuna.", cevap: "sag", neden: "Ödeme gücü sınırlı: yüksek risk." }
          ] }
      ]
    },
    {
      baslik: "Borcu yönetmek",
      kisa: "Yüksek faizli borcu önce kapat, notunu yükselt, şartları karşılaştır, peşinat ver.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "📈", baslik: "Yüksek kredi notunu koru", metin: "Zamanında öde, mevcut borcu azalt, kredi kartı kullanımını sınırla." },
            { ikon: "🔍", baslik: "Şartları karşılaştır", metin: "Farklı borç verenleri karşılaştır; daha düşük faiz ve ücret iste." },
            { ikon: "💰", baslik: "Peşinat ver", metin: "*Down payment*: alımın bir kısmını kendi parandan ödemek; borcu ve faizi azaltır." },
            { ikon: "🔥", baslik: "Yüksek faizliyi önce öde", metin: "Kredi kartı gibi yüksek faizli borçları olabildiğince çabuk kapat." }
          ] },
        { tip: "ornek", baslik: "Peşinatla ödenecek borç küçülür", durum: "Bir araba 200.000 TL. Aylin %20 peşinat verirse ne kadar borçlanır?",
          adimlar: ["Peşinat: 200.000 × 0,20 = 40.000 TL.", "Borçlanılacak tutar: 200.000 − 40.000 = 160.000 TL.", "Anapara küçüldüğü için ödenecek faiz ve taksit de küçülür."],
          sonuc: "Aylin ==160.000 TL== borçlanır; peşinat borcu ve faizi azaltır." },
        { tip: "ornek", baslik: "Ekstra 1.000 TL hangi borca?", durum: "Ela'nın iki borcu var: kredi kartı (kalan 5.000 TL, aylık faiz %3) ve taşıt kredisi (kalan 5.000 TL, aylık faiz %1,5). Ekstra 1.000 TL'yi hangisine yatırmalı?",
          adimlar: ["Karta yatırırsa bir ay boyunca 1.000 × 0,03 = 30 TL daha az faiz ödenir.", "Taşıt kredisine yatırırsa 1.000 × 0,015 = 15 TL daha az faiz ödenir.", "Aynı para daha pahalı borçta iki kat faiz tasarrufu sağlar."],
          sonuc: "Ekstra parayı ==kredi kartı== borcuna yatır: yüksek faizli borç önce kapatılır." }
      ]
    },
    {
      baslik: "Borç yönetilemezse",
      kisa: "Gelir kaybı borcu ödenemez hale getirir; yardım ve iflas son çarelerdir.",
      bloklar: [
        { tip: "adimlar", baslik: "Borç sıkıntısı nasıl ilerler?", adimlar: [
            { baslik: "Neden", metin: "Gelir kaybı ya da aylık taksitlerin ödeme gücünü aşması." },
            { baslik: "Sonuç", metin: "Geciken ödemeler, düşen kredi notu, mal varlığına el konulması (*property seizure*, haciz)." },
            { baslik: "Destek", metin: "Borç yönetimi danışmanlığı (*debt management assistance*): ödeme planını yeniden kurmaya yardım." },
            { baslik: "Son çare", metin: "İflas (*bankruptcy*): bazı borçları ortadan kaldıran, diğerleri için ödeme planı kuran yasal süreç." }
          ] },
        { tip: "tuzak", baslik: "İflas her şeyi silmez", metin: "*Bankruptcy* ağır sonuçları olan yasal bir süreçtir.", yanlis: "İflas bütün borçları siler ve her şeye sıfırdan başlatır.", dogru: "İflas bazı borçları ortadan kaldırır, diğerleri için bir ödeme planı oluşturur. Mal varlığına el konulmadan önce borç yönetimi desteği aramak daha iyidir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Borç; gelirden büyük harcama, acil durum, birikimi korumak ya da kolaylık için alınır; borç bir yükümlülüktür ve faizle ödenir.",
            "Bankalar ve kredi birlikleri mevduatla kredi verir; kart şirketleri, mağazalar, ipotek verenler ve alternatif hizmetler (*payday loan*) de borç verir.",
            "*Secured loan* (teminatlı: araba, ev) genelde *unsecured*'dan daha düşük faizlidir; teminat borçluyu riskten korumaz.",
            "Faiz oranı borç verene, kredi türüne, tutara ve kredi geçmişine bağlıdır; *APR* faiz artı ücretleri içerir, kredileri onunla karşılaştır.",
            "Tüketiciyi koruyan yasalar koşulların net anlatılmasını, tahsilat yöntemlerini ve ayrımcılığı düzenler.",
            "Kredi kartında yalnızca asgari ödeme borcu uzatır: 5.000 TL, aylık %3 faizle 24 ayda hâlâ ≈ 3.079 TL borç bırakır.",
            "*Credit bureau* kredi raporu ve notu hazırlar; borç verenler düşük borç, yüksek gelir/birikim ve zamanında ödemeyi tercih eder.",
            "Yönetim: yüksek kredi notu, şartları karşılaştırma, peşinat, yüksek faizli borcu önce kapatma.",
            "Borç yönetilemezse haciz, borç danışmanlığı ve iflas gündeme gelir; iflas bazı borçları siler, diğerleri için plan kurar."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Nur, 150.000 TL'lik arabasını teminat göstererek taşıt kredisi alıyor. Arkadaşı Dilek ise aynı bankadan teminatsız ihtiyaç kredisi alıyor. Başka koşullar aynıysa hangisi söylenebilir?",
      opts: ["Dilek'in faizi genelde daha düşüktür, çünkü teminatsız kredi borç veren için güvenlidir", "Nur'un kredisi teminatlı olduğu için ödeme yapmazsa hiçbir şey kaybetmez", "Nur'un faizi genelde daha düşüktür, çünkü araba teminat olduğu için borç verenin riski azalır", "İki kredinin faizi her zaman aynıdır"],
      a: 2,
      why: "Teminat borç verenin riskini azalttığı için *secured loan* genelde daha düşük faizlidir. B şıkkı en çekici yanlış: ödenmezse borç veren arabaya el koyabilir; teminat borçlunun riskini kaldırmaz." },
    { q: "Tabloya göre bir ay sonra kart bakiyesi kaç TL olur (faiz bakiyeye eklenir, sonra asgari ödeme yapılır)?",
      fig: { type: "table", caption: "Kart borcu", head: ["Bakiye", "Aylık faiz", "Asgari ödeme"], rows: [["4.000 TL", "%3", "Bakiyenin %5'i"]] },
      opts: ["3.800 TL", "3.920 TL", "4.120 TL", "4.200 TL"],
      a: 1,
      why: "Faiz 4.000 × 0,03 = 120 TL, bakiye 4.120 TL; asgari ödeme 4.000 × 0,05 = 200 TL; yeni bakiye 4.120 − 200 = 3.920 TL. A en çekici yanlış şık: ödemeyi bakiyeden düşer ama faizi unutur." },
    { q: "Berk, iki bankanın 10.000 TL'lik, 1 yıllık, tek ödemeli kredi teklifini karşılaştırıyor. Hangisi daha ucuzdur?",
      fig: { type: "table", caption: "Teklifler", head: ["Banka", "Yıllık faiz", "İşlem ücreti"], rows: [["A", "%15", "600 TL"], ["B", "%17", "Yok"]] },
      opts: ["A, çünkü faiz oranı daha düşüktür", "İkisi eşittir", "A, çünkü ücret tek seferliktir", "B, çünkü toplam maliyeti daha düşüktür (APR %17, A için %21)"],
      a: 3,
      why: "A: 1.500 + 600 = 2.100 TL (APR %21). B: 1.700 TL (APR %17). A en çekici yanlış şık: yalnızca faiz oranına bakar; ücretler toplam maliyete katılır." },
    { q: "Üç kişi aynı bankadan kredi istiyor. Banka yalnızca tablodaki bilgilere göre, temerrüt riski en düşük olanı seçerse hangisini seçer?",
      fig: { type: "table", caption: "Başvuranlar", head: ["Kişi", "Aylık gelir", "Mevcut borç", "Birikim", "Ödeme geçmişi"], rows: [["X", "20.000 TL", "5.000 TL", "60.000 TL", "Hep zamanında"], ["Y", "20.000 TL", "30.000 TL", "5.000 TL", "2 gecikme"], ["Z", "12.000 TL", "0 TL", "10.000 TL", "Hep zamanında"]] },
      opts: ["X", "Y", "Z", "Üçü de aynı risktedir"],
      a: 0,
      why: "X'in geliri yüksek, borcu az, birikimi büyük ve geçmişi temiz. Z en çekici yanlış şık: borcu yok ve geçmişi temiz ama gelir ve birikimi X'ten düşük." },
    { q: "Ela'nın elinde ekstra 1.000 TL var. Aşağıdaki iki borçtan hangisine yatırması faiz maliyetini en çok azaltır?",
      fig: { type: "table", caption: "Ela'nın borçları", head: ["Borç", "Kalan", "Aylık faiz"], rows: [["Kredi kartı", "6.000 TL", "%3"], ["Taşıt kredisi", "6.000 TL", "%1,5"]] },
      opts: ["Taşıt kredisine, çünkü teminatlıdır", "Kredi kartı borcuna, çünkü faizi daha yüksektir", "Hangisine yatırsa aynıdır, çünkü ikisinin kalanı eşit", "Hiçbirine; parayı harcamalı"],
      a: 1,
      why: "Yüksek faizli borcu önce kapatmak faiz maliyetini en çok azaltır: kartta ayda 30 TL, taşıt kredisinde 15 TL faiz kurtulur. A şıkkı en çekici yanlış: teminat faiz maliyeti hakkında bir şey söylemez." }
  ]
};
