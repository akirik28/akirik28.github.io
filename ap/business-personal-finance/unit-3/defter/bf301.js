/* Kitora not defteri · bf301 · 3.1 Gelecekteki Alımlar İçin Birikim
   Kaynak: AP Business with Personal Finance CED, Topic 3.1. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf301",
  amac: "Bu konu birikimi anlatıyor: insanlar neden gelirinin bir kısmını ayırır, buna ne engel olur, parayı nerede ve nasıl büyütür. Faizin (basit ve bileşik) nasıl işlediğini, enflasyonun birikimi nasıl erittiğini ve kendi birikim planını nasıl kuracağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Neden biriktiririz?",
      kisa: "Birikim, bugünkü gelirin bir kısmını gelecekteki ihtiyaçlar için ayırmaktır.",
      bloklar: [
        { tip: "hikaye", ikon: "🎫", baslik: "Elif'in konser bileti",
          metin: "Elif'in biletini almak istediği konser 3.000 TL. Harçlığı ayda 1.500 TL ve hepsini her ay bitiriyor. Konsere gitmesinin tek yolu var: ==gelirin bir kısmını bugün harcamayıp ayırmak==. İşte bu, birikimdir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "💼", terim: "Income", tr: "gelir", tanim: "Çalışarak (şirket, kâr amacı gütmeyen kuruluş ya da devlet için), kendi işinden, kiradan, devlet programlarından, yatırımlardan ya da emeklilik hesaplarından kazanılan para.", ornek: "Cafe'de part-time çalışan öğrencinin maaşı." },
            { ikon: "🐷", terim: "Saving", tr: "birikim", tanim: "Gelirin bugün harcanmayıp ileride kullanılmak üzere ayrılan kısmı. Birikim kişisel bir varlıktır (*asset*) ve faiz kazanabilir.", ornek: "Her ay 500 TL'yi hesaba atmak." },
            { ikon: "📈", terim: "Interest", tr: "faiz", tanim: "Birikimin getirdiği gelir. Faiz tutarı faiz oranına, biriken para miktarına, birikim aracının türüne ve ekonominin durumuna bağlıdır.", ornek: "%10 faizle yatırılan 1.000 TL bir yılda 100 TL kazandırır." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🚗", baslik: "Büyük alımlar", metin: "Araba, ev ya da üniversite harcı gibi gelirden büyük harcamalar." },
            { ikon: "🚑", baslik: "Acil durumlar", metin: "İşini kaybetmek, hastalanmak gibi beklenmedik olaylar." },
            { ikon: "🏖️", baslik: "Emeklilik", metin: "Çalışmayı bıraktığında düzenli bir gelir kaynağı olması." }
          ] }
      ]
    },
    {
      baslik: "Birikimin önündeki engeller",
      kisa: "Düzensiz gelir ve anlık tatmin isteği birikimi zorlaştırır.",
      bloklar: [
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🧾", baslik: "Parasal engeller", maddeler: ["Düzensiz (*inconsistent*) gelir", "Gelirden büyük sürekli giderler (kira, fatura)", "Kazancın yetmemesi"] },
          sag: { ikon: "🧠", baslik: "Psikolojik engeller", maddeler: ["*Instant gratification*: hemen istemek", "*Lifestyle inflation*: kazanç artınca harcamayı artırmak", "*Impulse buying*: plansız alışveriş"] },
          oyun: [
            { metin: "Serbest çalışan Ali'nin geliri bir ay 20.000, ertesi ay 4.000 TL.", cevap: "sol", neden: "Düzensiz gelir: parasal engel." },
            { metin: "Kasada gördüğü çikolatayı aklında yokken alıyor.", cevap: "sag", neden: "Plansız alım: *impulse buying*." },
            { metin: "Maaşı artan Selin hemen daha pahalı bir telefon ve daha lüks bir ev tutuyor.", cevap: "sag", neden: "Gelir artınca harcamanın artması: *lifestyle inflation*." },
            { metin: "Kirası ve faturaları maaşından fazla olan bir kişi ay sonunu getiremiyor.", cevap: "sol", neden: "Sürekli giderler gelirden büyük: parasal engel." },
            { metin: "\"Bu ayı kutlayayım, birikimi sonra yaparım\" diyen öğrenci.", cevap: "sag", neden: "Bugünün tatmini önde: *instant gratification*." }
          ] },
        { tip: "tuzak", baslik: "Zam gelince birikim artmaz mı?", metin: "Gelir artışı kendiliğinden birikim getirmez.", yanlis: "Maaşım arttı, o halde otomatik olarak daha çok biriktiririm.", dogru: "Gelirle birlikte harcama da artarsa (*lifestyle inflation*) birikim aynı kalır. Hedefi net olanlar ve engeli az olanlar daha çok biriktirir." }
      ]
    },
    {
      baslik: "PESTEL: birikimi etkileyen dış güçler",
      kisa: "Enflasyon birikimin satın alma gücünü eritir; vergi teşvikleri birikimi özendirir.",
      bloklar: [
        { tip: "tablo", baslik: "PESTEL faktörleri birikimi nasıl etkiler?", head: ["Faktör", "Etkisi", "Örnek"], rows: [
            ["*Economic* (ekonomik)", "Zayıf ekonomide gelir düşer; güçlü ekonomide yaşam maliyeti artar. İkisinde de gelirden artan para azalır.", "İş kaybı; kira ve gıda zamları"],
            ["*Economic*: enflasyon", "Fiyatlar artar, paranın alım gücü düşer; beklenen kayıp birikimi caydırabilir.", "Bugünkü 100 TL yarın daha az şey alır"],
            ["*Political* (siyasi)", "Vergi politikaları birikimi özendirebilir.", "Emeklilik için ayrılan paraya vergi avantajı (BES gibi)"],
            ["*Legal* (yasal)", "Devlet bankaları ve kredi birliklerini denetler; tüketici korunur, kurumlar istikrarlı olur.", "Mevduat sigortası (Türkiye'de TMSF)"]
          ], not: "Bu konuda üç PESTEL faktörüne bakılır: ekonomik, siyasi, yasal. Enflasyon ekonomik faktörün en sık sorulan örneğidir." },
        { tip: "ornek", baslik: "Yastık altındaki 10.000 TL", durum: "Ece, 10.000 TL'sini bir yıl yastık altında saklıyor. Bu sırada enflasyon %10. Bir yıl önce 10.000 TL'ye alınan market sepeti şimdi 11.000 TL. Ece'nin parası ne kadar sepet alır? Aynı para %12 faizli hesaba konsaydı ne olurdu?",
          adimlar: ["Yastık altı: 10.000 TL hâlâ 10.000 TL. Sepet 11.000 TL olduğuna göre 10.000 ÷ 11.000 ≈ 0,91: sepetin yaklaşık %91'ini alır.", "Faizli hesap: 10.000 × 1,12 = 11.200 TL. Sepet 11.000 TL olduğu için tüm sepeti alır ve 200 TL artar.", "Faiz enflasyondan yüksek olduğu sürece birikimin alım gücü korunur."],
          sonuc: "Yastık altında alım gücü ==yaklaşık %9== erir; faiz enflasyonu aşarsa birikim gerçekten değer kazanır." }
      ]
    },
    {
      baslik: "Faiz: basit ve bileşik",
      kisa: "Basit faiz yalnızca ana paraya işler; bileşik faiz faize de işler.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Basit faiz", alt: "I" }, "=",
            { t: "Ana para", alt: "P" }, "×",
            { t: "Oran", alt: "r" }, "×",
            { t: "Yıl", alt: "t" }
          ], aciklama: "Bileşik faizde yıl sonundaki toplam para: A = P × (1 + r)^t. Burada her yıl faiz, o ana kadar biriken paraya (ana para + önceki faizler) işlenir." },
        { tip: "grafik", baslik: "1.000 TL, yıllık %10: basit ve bileşik", xlabel: "Yıl", ylabel: "TL", xmax: 10, ymax: 2800, xticks: [{ v: 0, label: "0" }, { v: 5, label: "5" }, { v: 10, label: "10" }], yticks: [{ v: 1000, label: "1.000" }, { v: 2000, label: "2.000" }],
          ogeler: [
            { id: "p0", tip: "nokta", x: 0, y: 1000, etiket: "1.000", kilavuz: true },
            { id: "bas", tip: "egri", renk: 0, etiket: "Basit", gizli: true, noktalar: [[0, 1000], [1, 1100], [2, 1200], [3, 1300], [4, 1400], [5, 1500], [6, 1600], [7, 1700], [8, 1800], [9, 1900], [10, 2000]] },
            { id: "bil", tip: "egri", renk: 1, etiket: "Bileşik", gizli: true, noktalar: [[0, 1000], [1, 1100], [2, 1210], [3, 1331], [4, 1464], [5, 1611], [6, 1772], [7, 1949], [8, 2144], [9, 2358], [10, 2594]] },
            { id: "s10", tip: "nokta", x: 10, y: 2000, etiket: "2.000", kilavuz: true, gizli: true },
            { id: "b10", tip: "nokta", x: 10, y: 2594, etiket: "≈2.594", kilavuz: true, gizli: true },
            { id: "fark", tip: "ok", renk: 2, from: [9.4, 2000], to: [9.4, 2594], gizli: true },
            { id: "yf", tip: "yazi", x: 8.6, y: 2300, metin: "+594 TL", gizli: true }
          ],
          durumlar: [
            { metin: "1.000 TL'yi yıllık %10 faizle bankaya koyuyorsun." },
            { metin: "*Simple interest*: her yıl yalnızca ana paranın %10'u, yani ==100 TL== eklenir. Doğru bir çizgi; 10 yılda 2.000 TL.", goster: ["bas", "s10"] },
            { metin: "*Compound interest*: her yıl faiz, o ana kadar biriken paraya işler. Eğri yukarı kıvrılır: 3. yılda 1.331 TL, 10. yılda ≈ 2.594 TL.", goster: ["bil", "b10"] },
            { metin: "10 yılda fark ≈ ==594 TL==. Süre uzadıkça bileşik faiz çok daha hızlı büyür.", goster: ["fark", "yf"] }
          ] },
        { tip: "ornek", baslik: "3 yıl, 2.000 TL, %10", durum: "Zeynep 2.000 TL'yi yıllık %10 faizle 3 yıl bankada bırakıyor. Basit ve bileşik faizde kazancı ne olur?",
          adimlar: ["Basit: I = 2.000 × 0,10 × 3 = 600 TL; toplam 2.600 TL.", "Bileşik: 1. yıl 2.200, 2. yıl 2.420, 3. yıl 2.662 TL (2.000 × 1,1³ = 2.662).", "Bileşik faiz kazancı: 2.662 − 2.000 = 662 TL; basitten 62 TL fazla."],
          sonuc: "Basit faizde ==600 TL==, bileşik faizde ==662 TL== faiz kazanılır." },
        { tip: "tuzak", baslik: "İlk yıl fark yok", metin: "İlk yıl iki faiz de aynıdır.", yanlis: "Bileşik faiz ilk yıldan itibaren basit faizden fazla kazandırır.", dogru: "İlk yıl ikisi de aynı (1.000 TL için 100 TL). Fark, faizin faize işlemeye başladığı 2. yıldan itibaren açılır ve süre uzadıkça büyür." }
      ]
    },
    {
      baslik: "72 kuralı: paran ne zaman iki katına çıkar?",
      kisa: "72'yi faiz oranına (%) böl: paranın iki katına çıkma süresini yıl olarak verir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "İkiye katlanma süresi", alt: "yıl, yaklaşık" }, "≈",
            { t: "72", alt: "sabit sayı" }, "÷",
            { t: "Yıllık faiz oranı", alt: "% olarak" }
          ], aciklama: "Bileşik faiz için kısayoldur; faiz ne kadar yüksekse paran o kadar çabuk ikiye katlanır." },
        { tip: "tablo", baslik: "72 kuralı gerçek değere ne kadar yakın?", head: ["Faiz oranı", "72 ÷ oran (yıl)", "Gerçek süre (yıl)"], rows: [
            ["%3", "24", "≈ 23,5"], ["%6", "12", "≈ 11,9"], ["%8", "9", "≈ 9,0"], ["%9", "8", "≈ 8,0"], ["%12", "6", "≈ 6,1"]
          ], vurgu: 1, not: "Kural bir yaklaşıklıktır; sınavda \"yaklaşık kaç yıl\" sorusunda kullanılır." },
        { tip: "ornek", baslik: "5.000 TL ne zaman 10.000 TL olur?", durum: "Berk 5.000 TL'yi yıllık %6 bileşik faizle yatırıyor. Parası yaklaşık kaç yılda 10.000 TL olur? Aynı kural enflasyona uygulanırsa, yıllık %9 enflasyonda fiyatlar kaç yılda iki katına çıkar?",
          adimlar: ["72 ÷ 6 = 12 yıl. Kontrol: 5.000 × 1,06¹² ≈ 10.061 TL.", "Enflasyon için: 72 ÷ 9 = 8 yıl. Bugün 100 TL olan bir ürün 8 yıl sonra yaklaşık 200 TL olur.", "Aynı mantık ters yönde: enflasyon, birikimin alım gücünü o sürede yarıya indirir."],
          sonuc: "Para yaklaşık ==12 yılda== ikiye katlanır; %9 enflasyonda fiyatlar yaklaşık ==8 yılda== iki katına çıkar." }
      ]
    },
    {
      baslik: "Birikim araçları: nerede tutmalı?",
      kisa: "Daha yüksek faiz çoğu zaman daha yüksek şart ya da daha az erişim demektir.",
      bloklar: [
        { tip: "tablo", baslik: "Birikim ve ödeme araçları", head: ["Araç", "Faiz", "Paraya erişim", "Şartlar", "Sigorta"], rows: [
            ["*Savings account* (tasarruf hesabı)", "Genelde öder", "Kolay", "Asgari mevduat ve aylık ücret bankaya göre değişir", "Sigortalı"],
            ["*Money market account*", "Savings'ten genelde yüksek", "Daha kolay (nakit erişimi)", "Daha büyük asgari mevduat, daha yüksek aylık ücret olabilir", "Sigortalı"],
            ["*Certificate of deposit* (CD, vadeli mevduat)", "Tipik olarak en yüksek", "Süre bitmeden çekilirse erken çekim cezası ödenir (1 ay–5 yıl)", "Büyük asgari mevduat; aylık ücret yok", "Sigortalı"],
            ["*Checking account* (vadesiz hesap)", "Az ya da hiç", "Çok kolay (kart, ATM)", "Aylık bakım ücreti, hesap açığı ücreti olabilir", "Sigortalı"],
            ["Mobil ödeme hesabı, kripto", "Genelde yok", "Harcaması kolay (mobil); kripto için kullanıcı değer artışı umar", "Sigortalı kurum sunmuyorsa risk size ait", "Çoğunlukla sigortasız"]
          ], not: "ABD'de sigorta sınırı (FDIC/NCUA) mevduat sahibi başına, her banka ve hesap sahipliği türü için 250.000 $; Türkiye'de benzer güvenceyi TMSF sağlar." },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🔓", baslik: "Esneklik önde", maddeler: ["Para her an çekilebilir", "Faiz daha düşüktür", "Acil durum fonu için uygun"] },
          sag: { ikon: "🔒", baslik: "Faiz önde", maddeler: ["Para belli süre kilitli (CD)", "Faiz genelde daha yüksek", "Süreyi bekleyebilecek para için uygun"] },
          oyun: [
            { metin: "Kira ödemesi için gerekebilecek acil durum parası.", cevap: "sol", neden: "Her an erişim gerekir: vadesiz ya da kolay çekilen hesap." },
            { metin: "Önümüzdeki 2 yıl dokunmayacağım para; en yüksek faizi arıyorum.", cevap: "sag", neden: "Süre bekleyebiliyorsan CD tipik olarak en yüksek faizi verir." },
            { metin: "Cuma günü konsere bilet alacağım, kartla ödeyeceğim para.", cevap: "sol", neden: "Sık işlem ve kolay erişim: vadesiz hesap." },
            { metin: "Hesapta 5 yıl kalacak ve süre dolmadan çekilmeyecek para.", cevap: "sag", neden: "Uzun vade, yüksek faiz tercihi: CD mantığı." }
          ] },
        { tip: "tuzak", baslik: "Kripto bir banka hesabı değildir", metin: "Her \"hesap\" sigortalı değildir.", yanlis: "Kripto cüzdanımdaki para bankadaki para kadar güvencelidir ve faiz getirir.", dogru: "Sigortalı bir kurum sunmadıkça mobil ödeme ve kripto hesapları devlet sigortası altında değildir ve genelde faiz ödemez; kripto için kazanç yalnızca değer artışı umuduna dayanır." }
      ]
    },
    {
      baslik: "Birikim planı kurmak",
      kisa: "Net hedef, düzenli ayırma ve doğru araç, plana uyma şansını artırır.",
      bloklar: [
        { tip: "adimlar", baslik: "Plan nasıl kurulur?", adimlar: [
            { baslik: "Hedefi tanımla", metin: "Ne için, ne kadar, ne zamana kadar? Tanımlı hedefi olanlar daha çok biriktirir." },
            { baslik: "Gelir ve giderine bak", metin: "Zorunlu giderlerini çıkarınca ne kadar para kalıyor?" },
            { baslik: "Aracı seç", metin: "Tutar, süre, faiz, ücret, asgari mevduat, risk; ayrıca konum, kolaylık ve kurumun itibarı." },
            { baslik: "Otomatikleştir", metin: "Maaş yattığında belli bir tutarın hesaba otomatik geçmesi, engelleri azaltır." }
          ] },
        { tip: "ornek", baslik: "18.000 TL'lik laptop planı", durum: "Kerem'in aylık geliri 8.000 TL, zorunlu giderleri 5.000 TL. 9 ay içinde 18.000 TL'lik bir laptop almak istiyor. Plan tutuyor mu?",
          adimlar: ["Aylık artan para: 8.000 − 5.000 = 3.000 TL.", "Gereken aylık birikim: 18.000 ÷ 9 = 2.000 TL.", "2.000 ≤ 3.000: plan tutuyor ve ayda 1.000 TL esneklik payı kalıyor."],
          sonuc: "Kerem her ay ==2.000 TL== ayırırsa 9 ayda hedefe ulaşır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🤖", terim: "Automated savings plan", tr: "otomatik birikim planı", tanim: "Her ödeme döneminde gelirden belli bir tutarı otomatik olarak birikime ayıran düzen.", ornek: "Maaş yatınca 2.000 TL'nin ayrı hesaba geçmesi." },
            { ikon: "🏖️", terim: "Retirement savings plan", tr: "emeklilik birikim planı", tanim: "Emeklilik için biriktirirken vergiden tasarruf sağlayan plan.", ornek: "ABD'de 401(k); Türkiye'de BES." },
            { ikon: "🩺", terim: "Health savings account", tr: "sağlık tasarruf hesabı (HSA)", tanim: "Sağlık harcamaları için ayrılan paradan vergi avantajı sağlayan hesap.", ornek: "Ameliyat masrafı için ayrılan vergi avantajlı para." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İnsanlar büyük alımlar, acil durumlar ve emeklilik için biriktirir; birikim bir varlıktır ve faiz kazanabilir.",
            "Engeller: düzensiz gelir, gelirden büyük giderler; psikolojik olarak *instant gratification*, *lifestyle inflation*, *impulse buying*.",
            "Enflasyon birikimin alım gücünü eritir; vergi teşvikleri birikimi özendirir; yasalar bankaları denetleyip tüketiciyi korur.",
            "*Simple interest*: I = P × r × t. *Compound interest*: A = P × (1 + r)^t; faiz faize işler, fark zamanla büyür.",
            "72 kuralı: ikiye katlanma süresi ≈ 72 ÷ faiz oranı (%).",
            "*Savings*, *money market*, *CD*, *checking*: sigortalıdır; CD en yüksek faizi verir ama parayı kilitler; vadesiz hesap erişimlidir ama az faiz ödeyebilir.",
            "Mobil ödeme ve kripto hesapları, sigortalı kurum sunmadıkça sigortasızdır ve genelde faiz ödemez.",
            "Plan: net hedef, gelir-gider hesabı, doğru araç ve otomatik ayırma.",
            "Hedefi net olan ve engeli az olan daha çok biriktirir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Maaşına zam alan Selin, bir ay içinde daha pahalı bir telefon alıp daha lüks bir eve taşınıyor ve ay sonunda hâlâ hiç biriktiremiyor. Selin'in birikimini zorlaştıran şey hangisidir?",
      opts: ["Düzensiz gelir", "*Lifestyle inflation*", "Mevduat sigortası eksikliği", "*Compound interest*"],
      a: 1,
      why: "Gelir artınca harcamanın da aynı ya da daha hızlı artması *lifestyle inflation*'dır. A en çekici yanlış şık: Selin'in geliri düzensiz değil, tersine arttı." },
    { q: "Bir bankadaki birikim hesabı yıllık %6 faiz ödüyor; aynı dönemde enflasyon %9. Bu durumda birikimin alım gücü için ne söylenebilir?",
      opts: ["Faiz pozitif olduğu için alım gücü artar", "Alım gücü değişmez, çünkü faiz ödemesi ile enflasyon birbirini götürür", "Faiz ödemesi yine de alım gücünü korur, çünkü hesap sigortalıdır", "Enflasyon faizden yüksek olduğu için alım gücü yaklaşık %3 erir"],
      a: 3,
      why: "Reel getiri yaklaşık 6 − 9 = −3 puandır; para nominal olarak artar ama alım gücü düşer. A şıkkı en çekici yanlış: nominal faizin pozitif olması alım gücünün arttığını göstermez." },
    { q: "Hakan 4.000 TL'yi yıllık %5 bileşik faizle iki yıl yatırıyor (faiz yılda bir kez eklenir). İki yıl sonunda hesabında yaklaşık kaç TL olur?",
      opts: ["4.400 TL", "4.200 TL", "4.410 TL", "4.500 TL"],
      a: 2,
      why: "4.000 × 1,05² = 4.000 × 1,1025 = 4.410 TL. A en çekici yanlış şık: basit faizle hesap yapar (4.000 + 2 × 200 = 4.400); bileşik faizde ikinci yıl faiz, ilk yılın faizine de işler." },
    { q: "Çiğdem, acil durumlarda para çekebilmek istiyor ve tabloda üç hesap var. Acil durum fonu için en uygun seçenek hangisidir?",
      fig: { type: "table", caption: "Hesap seçenekleri", head: ["Hesap", "Yıllık faiz", "Paraya erişim", "Asgari mevduat"], rows: [["A", "%3", "Her an", "0 TL"], ["B", "%6", "2 yıl kilitli", "5.000 TL"], ["C", "%1", "Her an", "0 TL"]] },
      opts: ["A, çünkü para her an çekilebilir ve C'den daha yüksek faiz verir", "B, çünkü en yüksek faizi verir", "C, çünkü faizi en düşüktür", "Hiçbiri, çünkü acil durum fonu birikim hesabında tutulmaz"],
      a: 0,
      why: "Acil durum parası her an erişilebilir olmalı: A ve C uygun, A daha yüksek faiz öder. B en çekici yanlış şık: faizi yüksek ama 2 yıl kilitli, acil durumda kullanılamaz." },
    { q: "Murat, yıllık %8 faizle 6.000 TL yatırıyor. 72 kuralına göre parası yaklaşık kaç yılda 12.000 TL'ye ulaşır?",
      opts: ["6 yıl", "9 yıl", "12 yıl", "8 yıl"],
      a: 1,
      why: "72 ÷ 8 = 9 yıl; 6.000 TL ikiye katlanınca 12.000 TL olur. D şıkkı en çekici yanlış: oranı %9 sanıp 72 ÷ 9 = 8 bulur; oran %8 olduğundan doğru bölme 72 ÷ 8 = 9 yıldır." }
  ]
};
