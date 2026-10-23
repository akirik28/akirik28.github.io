/* Kitpath not defteri · bf503 · 5.3 Eğitim, Konut ve Emeklilik İçin Birikim ve Yatırım
   Kaynak: College Board CED, Topic 5.3 (5.3.A–5.3.C). Blok türleri: /ap/_kit/defter.js başı.
   Para birimi TL; oranlar ve sayılar anlatım için varsayımsaldır. */
window.DEFTER = {
  slug: "bf503",
  amac: "Bu konu büyük hedefler için birikim ve yatırım planı yapmayı anlatıyor: eğitim, konut, emeklilik ve bağış hedeflerini, varlıkların risk ve getirisini, bileşik büyümeyi, getiriyi azaltan etkenleri ve çeşitlendirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Dört uzun vadeli hedef",
      kisa: "Eğitim, konut, emeklilik ve bağış hedefleri farklı finansman yolları ister.",
      bloklar: [
        { tip: "tablo", baslik: "Hedefler, kararlar ve finansman", head: ["Hedef", "Karar", "Nasıl finanse edilir?", "Türkiye'de"], rows: [
            ["Lise sonrası eğitim (*postsecondary education*)", "Nerede, ne okuyacağın; kariyer hedefine ve paraya bağlı", "Birikim, öğrenci kredisi (*student loan*), burs (*scholarship*), hibe (*grant*), çalış-öğren (*work-study*)", "KYK kredisi ve bursu, üniversite bursları"],
            ["Konut", "Nerede yaşayacağın; kiralamak mı, satın almak mı", "Birikimle peşinat (*down payment*) + konut kredisi (*mortgage*); kredi için onay gerekir", "Peşinat ve konut kredisi"],
            ["Emeklilik", "Ne zaman ve nerede emekli olacağın; sağlığa ve paraya bağlı", "Devlet emekliliği (ABD'de *Social Security*), işveren planı, kişisel yatırım, çalışmaya devam", "SGK emekliliği, BES, bireysel birikim"],
            ["Bağış (*charitable giving*)", "Hangi kuruma, hangi türde: tek seferlik, düzenli ya da vasiyetle (*legacy*)", "Bütçeden ayrılır; bazı bağışlar vergi indirimi sağlar", "Bazı bağışlar kurallarına göre vergiden indirilebilir"]
          ] },
        { tip: "not", metin: "Gelirlerini birleştiren hanelerde (iki gelirli evli çiftler gibi) uzun vadeli hedefleri birlikte konuşmak mali gerginliği azaltır. Otomatik birikim planları ve maaştan emeklilik kesintisi gibi finansal teknolojiler, birikimin önündeki engelleri aşmaya yardım eder." },
        { tip: "tuzak", baslik: "Federal öğrenci kredisi ile özel kredi aynı değildir", metin: "Kredinin kaynağı faizi ve geri ödeme şartlarını değiştirir.", yanlis: "Her öğrenci kredisinin faizi ve geri ödeme şartı aynıdır; özel krediler daha uygundur.", dogru: "*Federal student loans* genellikle özel kredilerden ==daha düşük faizli== ve ==daha esnek geri ödemeli== olur; devletçe sübvanse de edilebilir. Hibe ve burs ise geri ödenmez." }
      ]
    },
    {
      baslik: "Konut kredisi: aylık ödemeyi ne belirler?",
      kisa: "Aylık konut kredisi ödemesi; kredi tutarına, vadeye ve faiz oranına bağlıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⬆️", baslik: "Aylık ödemeyi artırır", maddeler: ["Daha büyük kredi", "Daha yüksek faiz oranı", "Daha kısa vade"] },
          sag: { ikon: "⬇️", baslik: "Aylık ödemeyi azaltır", maddeler: ["Daha büyük peşinat (kredi küçülür)", "Daha düşük faiz oranı", "Daha uzun vade"] },
          oyun: [
            { metin: "Daha yüksek faiz oranı.", cevap: "sol", neden: "Faiz arttıkça her ay ödenen tutar da artar." },
            { metin: "Peşinatı 400.000 TL yerine 600.000 TL yapmak.", cevap: "sag", neden: "Borçlanılan tutar küçülür; ödeme azalır." },
            { metin: "Vadeyi 10 yıldan 20 yıla çıkarmak.", cevap: "sag", neden: "Borç daha çok aya yayılır; aylık ödeme düşer." },
            { metin: "Aynı evi daha pahalı bir evle değiştirip daha büyük kredi çekmek.", cevap: "sol", neden: "Kredi büyüdükçe ödeme artar." },
            { metin: "Vadeyi 20 yıldan 5 yıla indirmek.", cevap: "sol", neden: "Aynı borç daha az aya bölünür; aylık ödeme artar." }
          ] },
        { tip: "tablo", baslik: "1.000.000 TL kredi, aylık %1 faiz: vade değişince", head: ["Vade", "Aylık ödeme", "Toplam ödenen", "Toplam faiz"], rows: [
            ["5 yıl (60 ay)", "≈ 22.244 TL", "≈ 1.334.667 TL", "≈ 334.667 TL"],
            ["10 yıl (120 ay)", "≈ 14.347 TL", "≈ 1.721.651 TL", "≈ 721.651 TL"],
            ["20 yıl (240 ay)", "≈ 11.011 TL", "≈ 2.642.607 TL", "≈ 1.642.607 TL"]
          ], not: "Sayılar yalnızca ilişkiyi göstermek için; hesaplaman gerekmez. Faiz sabit (*fixed*) ise oran vade boyunca değişmez; değişken (*adjustable*) ise oran zamanla değişebilir ve aylık ödeme de değişir." },
        { tip: "tuzak", baslik: "Uzun vade, daha ucuz kredi demek değildir", metin: "Aylık ödemenin düşmesi toplam maliyetin düştüğü anlamına gelmez.", yanlis: "Vade uzadıkça kredi ucuzlar, çünkü aylık ödeme azalır.", dogru: "Aylık ödeme düşer ama ==toplam faiz çok artar==: tabloda 5 yılda 335 bin, 20 yılda 1,64 milyon TL faiz." }
      ]
    },
    {
      baslik: "Birikim araçları: risk ve beklenen getiri",
      kisa: "Güvenli varlıklar az, riskli varlıklar çok getiri bekletir; risk, kayıp ihtimalidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏦", terim: "Savings account and CD", tr: "tasarruf hesabı ve vadeli mevduat (*CD*)", tanim: "Devletçe sigortalı ya da gelir garantili, düşük riskli birikim araçları. Beklenen getirileri düşüktür.", ornek: "Bankada 12 aylık vadeli hesap." },
            { ikon: "📈", terim: "Individual stocks", tr: "tek hisse senetleri", tanim: "Şirketin küçük bir payı. Değeri şirketin başarısına bağlıdır: risk yüksektir, ama beklenen getiri de yüksektir.", ornek: "Bir teknoloji şirketinin hissesi." },
            { ikon: "📜", terim: "Bonds", tr: "tahvil", tanim: "Devlete ya da şirkete borç verirsin; karşılığında düzenli faiz alırsın.", ornek: "Devlet tahvili." },
            { ikon: "🧺", terim: "Mutual funds", tr: "yatırım fonu", tanim: "Birçok yatırımcının parasını havuzda toplayıp hisse ve/veya tahvillere yatıran fon.", ornek: "Hisse senedi fonu." }
          ] },
        { tip: "grafik", baslik: "Risk ve beklenen getiri: genel eğilim (sembolik)", xlabel: "Risk (kayıp ihtimali)", ylabel: "Beklenen getiri", xmax: 11, ymax: 10, xticks: [{ v: 2, label: "düşük" }, { v: 9, label: "yüksek" }], yticks: [{ v: 2, label: "düşük" }, { v: 9, label: "yüksek" }],
          ogeler: [
            { id: "tr", tip: "cizgi", from: [0.3, 1], to: [9.7, 9.6], renk: 3, kesik: true, gizli: true },
            { id: "yz", tip: "yazi", x: 0.4, y: 9.4, metin: "Risk ↑, beklenen getiri ↑", hiza: "start", gizli: true },
            { id: "cd", tip: "nokta", x: 1.5, y: 2, etiket: "Mevduat/CD", gizli: true },
            { id: "bd", tip: "nokta", x: 3.5, y: 4, etiket: "Tahvil", renk: 1, gizli: true },
            { id: "fn", tip: "nokta", x: 5.8, y: 6.1, etiket: "Hisse fonu", renk: 2, gizli: true },
            { id: "st", tip: "nokta", x: 8.4, y: 8.6, etiket: "Tek hisse", renk: 3, gizli: true }
          ],
          durumlar: [
            { metin: "Genel eğilim: ==risk arttıkça beklenen getiri de artar==. Çünkü kayıp ihtimalini göze alana daha çok getiri vaat edilir.", goster: ["tr", "yz"] },
            { metin: "==Sigortalı mevduat ve CD==: düşük risk, düşük getiri.", goster: ["cd"] },
            { metin: "==Tahvil==: gelir garantiye yakındır; getiri biraz daha yüksek.", goster: ["bd"] },
            { metin: "==Hisse fonu==: birçok hisseyi bir arada tutar; orta-yüksek risk ve getiri.", goster: ["fn"] },
            { metin: "==Tek hisse==: değeri tek şirketin başarısına bağlı; en yüksek beklenen getiri ve en yüksek risk. “Beklenen” getiri garanti değildir.", goster: ["st"] }
          ] },
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "Düşük risk, düşük getiri", maddeler: ["Devletçe sigortalı", "Garantili sabit gelir"] },
          sag: { ikon: "🎢", baslik: "Yüksek risk, yüksek beklenen getiri", maddeler: ["Değeri şirketin başarısına bağlı", "Zarar ihtimali büyük"] },
          oyun: [
            { metin: "Banka mevduat sigortası kapsamındaki vadeli hesap.", cevap: "sol", neden: "Devlet güvencesi: düşük risk, düşük getiri." },
            { metin: "Tüm paranı tek bir şirketin hissesine yatırmak.", cevap: "sag", neden: "Şirket batarsa değer düşer: yüksek risk." },
            { metin: "Vadesinde garanti faiz ödeyen bir devlet tahvili.", cevap: "sol", neden: "Gelir garantiye yakın: düşük risk." },
            { metin: "Değeri, bir girişimin başarılı olmasına bağlı hisse.", cevap: "sag", neden: "Başarıya bağlı değer: yüksek risk, yüksek beklenen getiri." }
          ] }
      ]
    },
    {
      baslik: "Bileşik büyüme: erken başla, uzun tut",
      kisa: "Getiri üzerine getiri işler; erken başlayıp uzun bekleyen çok daha fazla biriktirir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Gelecek değer", alt: "n yıl sonraki tutar" }, "=",
            { t: "Ana para", alt: "bugün yatırılan" }, "×",
            { t: "(1 + getiri)ⁿ", alt: "n yıl bileşik" }
          ], aciklama: "Bileşik büyümede her yılın getirisi bir sonraki yılın ana parasına eklenir. 10.000 TL, yıllık %8 ile 1 yıl sonra 10.800, 2 yıl sonra 11.664 TL olur. Yaklaşık her 9 yılda bir iki katına çıkar." },
        { tip: "grafik", baslik: "10.000 TL, yıllık %8: basit mi, bileşik mi, geç başlarsan?", xlabel: "Yıl", ylabel: "Değer (bin TL)", xmax: 50, ymax: 230, xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }], yticks: [{ v: 50, label: "50" }, { v: 100, label: "100" }, { v: 150, label: "150" }, { v: 200, label: "200" }],
          ogeler: [
            { id: "bs", tip: "cizgi", from: [0, 10], to: [40, 42], etiket: "Basit", renk: 0, gizli: true },
            { id: "bl", tip: "egri", noktalar: [[0, 10], [5, 14.69], [10, 21.59], [15, 31.72], [20, 46.61], [25, 68.48], [30, 100.63], [35, 147.85], [40, 217.25]], etiket: "Bileşik", renk: 1, gizli: true },
            { id: "p20", tip: "nokta", x: 20, y: 46.61, etiket: "46,6", kilavuz: true, renk: 1, gizli: true },
            { id: "p40", tip: "nokta", x: 40, y: 217.25, etiket: "217", kilavuz: true, renk: 1, gizli: true },
            { id: "gc", tip: "egri", noktalar: [[10, 10], [15, 14.69], [20, 21.59], [25, 31.72], [30, 46.61], [35, 68.48], [40, 100.63]], etiket: "Geç", renk: 2, gizli: true }
          ],
          durumlar: [
            { metin: "==Basit getiri==: her yıl yalnızca ilk 10.000 TL'nin %8'i (800 TL) eklenir. 40 yılda 42 bin TL.", goster: ["bs"] },
            { metin: "==Bileşik getiri==: eklenen getiri de getiri kazanır; eğri yukarı kıvrılır.", goster: ["bl"] },
            { metin: "20. yılda bileşik ==46,6 bin TL==, basit 26 bin TL: fark henüz orta düzeyde.", goster: ["p20"] },
            { metin: "40. yılda bileşik ==217 bin TL==, basit yalnızca 42 bin TL. Büyümenin çoğu son yıllarda gelir.", goster: ["p40"] },
            { metin: "10 yıl ==geç başlarsan== (aynı 10.000 TL, aynı %8) 40. yılda yalnızca ==100,6 bin TL== olur: yarısından az.", goster: ["gc"] }
          ] },
        { tip: "ornek", baslik: "Ece ile Can: 10 yıl geç başlamanın bedeli", durum: "Ece 25 yaşında, Can 35 yaşında 10.000 TL yatırıyor; ikisinin de yıllık getirisi %8 ve ikisi de 65 yaşına kadar bekliyor.",
          adimlar: ["Ece: 40 yıl × %8 bileşik → 10.000 × 1,08⁴⁰ ≈ 217.245 TL.", "Can: 30 yıl → 10.000 × 1,08³⁰ ≈ 100.627 TL.", "Fark ≈ 116.618 TL. Aynı para, aynı getiri; tek fark zaman."],
          sonuc: "Ece ==217.245 TL==, Can ==100.627 TL==. Erken başlayıp uzun süre tutan, bileşik büyüme sayesinde daha fazla getiri elde eder." },
        { tip: "tuzak", baslik: "Bileşik büyüme doğrusal değildir", metin: "Aynı sürede eklenen tutar giderek büyür.", yanlis: "Faiz her yıl aynı tutarda eklenir; 40 yıl, 20 yılın tam iki katıdır.", dogru: "Bileşikte getiri ==getiri üzerine== işler: 20 yılda 46,6 bin, 40 yılda 217 bin (iki katı değil, yaklaşık 4,7 katı)." }
      ]
    },
    {
      baslik: "Getiriyi azaltan etkenler: ücret, vergi, enflasyon, davranış",
      kisa: "Ücretler, vergiler ve enflasyon getiriyi düşürür; davranış hataları da zarar verir.",
      bloklar: [
        { tip: "tablo", baslik: "Yatırım getirisini azaltan dört etken", head: ["Etken", "Nasıl azaltır?", "Ayrıntı"], rows: [
            ["Ücretler (*fees*)", "Alım-satım, yönetim ve danışmanlık ücretleri getiriyi düşürür", "Hisse ve tahvil için aracı kurum (*broker*) şart; indirimli aracı kurum (*discount brokerage*) daha az ücret alır ama daha az tavsiye verir"],
            ["Vergiler", "Faiz, temettü (*dividend*) ve sermaye kazancı vergilenir", "Yatırımcı vergi gerekip gerekmediğine ve oranına bakarak varlık seçer"],
            ["Enflasyon", "Paranın alım gücünü azaltır; reel getiri nominal getiriden düşüktür", "Reel getiri ≈ nominal getiri − enflasyon"],
            ["Davranışsal önyargılar", "Yatırımcıyı hatalı karara iter", "Aşırı güven (*overconfidence*) ve zarardan kaçınma (*loss aversion*)"]
          ] },
        { tip: "ornek", baslik: "Küçük ücret, büyük fark ve reel getiri", durum: "10.000 TL, 30 yıl boyunca yıllık %8 getiri sağlıyor. Başka bir fon yıllık %1 yönetim ücreti kesiyor; net getiri %7. Ayrıca enflasyon yıllık %5.",
          adimlar: ["Ücretsiz: 10.000 × 1,08³⁰ ≈ 100.627 TL.", "Yıllık %1 ücretle (%7): 10.000 × 1,07³⁰ ≈ 76.123 TL.", "Fark ≈ 24.504 TL: %1'lik ücret, son bakiyenin yaklaşık dörtte birini götürdü.", "Reel getiri ≈ nominal %8 − enflasyon %5 = yaklaşık %3."],
          sonuc: "Ücret: ==100.627 → 76.123 TL==. Alım gücüyle ölç: nominal %8, reel yaklaşık ==%3==." },
        { tip: "ikili", sol: { ikon: "😎", baslik: "Aşırı güven (*overconfidence*)", maddeler: ["Gereksiz risk almaya iter", "“Ben bilirim” duygusu"] },
          sag: { ikon: "😨", baslik: "Zarardan kaçınma (*loss aversion*)", maddeler: ["Zararı görünce erken satmaya iter", "Kayıp korkusu"] },
          oyun: [
            { metin: "Son iki yıl doğru tahmin etti diye bütün birikimini tek hisseye yatırmak.", cevap: "sol", neden: "Kendine fazla güvenip gereksiz risk almak." },
            { metin: "Piyasa %10 düşünce panikleyip fonlarını zararına satmak.", cevap: "sag", neden: "Kaybı görmek istemeyip erken, zararına satmak." },
            { metin: "Araştırma yapmadan “ben borsayı çözdüm” diyerek riskli işleme girmek.", cevap: "sol", neden: "Aşırı güven." },
            { metin: "Fiyat biraz düştü diye uzun vadeli planı bırakıp hepsini nakde çevirmek.", cevap: "sag", neden: "Düşüşten korkup zararına satmak." }
          ] },
        { tip: "tuzak", baslik: "Nominal getiri, alım gücü artışı değildir", metin: "Enflasyon, kazancın bir kısmını eritir.", yanlis: "Yıllık %8 getiri, alım gücümün %8 artması demektir.", dogru: "Nominal (==düzeltilmemiş==) getiri ile ==enflasyona göre düzeltilmiş (reel)== getiri farklıdır: enflasyon %5 ise reel getiri yaklaşık %3'tür. Yatırımcı ikisine de bakar." }
      ]
    },
    {
      baslik: "Plan yap: hedef, zaman ufku, risk toleransı",
      kisa: "Uzun zaman ufku daha riskli, kısa zaman ufku daha güvenli varlık demektir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌳", baslik: "Uzun zaman ufku", maddeler: ["Düşüşte beklemeye zaman var", "Riskli, yüksek getirili varlıklar"] },
          sag: { ikon: "⏱️", baslik: "Kısa zaman ufku", maddeler: ["Düşüşte nakde çevirmek zorunda kalabilir", "Güvenli varlıklar"] },
          oyun: [
            { metin: "Emeklilik 35 yıl sonra: portföyün çoğunu hisse fonlarına ayırmak.", cevap: "sol", neden: "Uzun süre var; düşüşten sonra toparlanmayı bekleyebilir." },
            { metin: "Önümüzdeki yıl ödenecek harç için biriktirilen para.", cevap: "sag", neden: "Kısa süre; düşüşte satmak zarara yol açar, güvenli araç tercih edilir." },
            { metin: "Düşüş olursa varlıklar yeniden değer kazansın diye 20 yıl beklemek.", cevap: "sol", neden: "Zaman, riski taşımaya izin verir." },
            { metin: "Önümüzdeki yıl konut peşinatı için gereken para.", cevap: "sag", neden: "Yakın tarih: kayıp riskine tahammül azdır." }
          ] },
        { tip: "ornek", baslik: "Üniversite hedefi: ayda ne kadar biriktirmeli?", durum: "Deniz, 8 yıl sonra üniversite masrafı için 480.000 TL biriktirmek istiyor. Bu tutar için getiri hesaba katılmazsa aylık ne kadar ayırmalı? Ayrıca 28.000 TL net gelirinin %20'si (5.600 TL) birikime ayrılıyor.",
          adimlar: ["8 yıl = 8 × 12 = 96 ay.", "Gereken aylık birikim = 480.000 ÷ 96 = 5.000 TL.", "Deniz'in birikim payı = 28.000 × %20 = 5.600 TL, hedefin üstünde.", "Getiri sağlayan varlıklara yatırırsa gereken aylık tutar 5.000 TL'den aşağı düşer."],
          sonuc: "Getirisiz ==5.000 TL/ay==; bütçedeki 5.600 TL hedefe yeter. Bileşik getiri ödemeyi daha da azaltır." },
        { tip: "tablo", baslik: "Zaman ufku, risk toleransı ve varlık", head: ["Hedef", "Zaman ufku", "Uygun varlıklar"], rows: [
            ["Acil durum fonu, gelecek yılın harcı", "Kısa", "Sigortalı mevduat, CD (düşük risk, düşük getiri)"],
            ["8 yıl sonraki üniversite", "Orta", "Güvenli ve riskli varlıkların karışımı"],
            ["35 yıl sonraki emeklilik", "Uzun", "Ağırlıkla hisse ve hisse fonları; yüksek beklenen getiri"],
            ["Düşük risk toleransı", "Her zaman", "Sigortalı mevduat ve CD; daha düşük getiri kabul edilir"],
            ["Yüksek risk toleransı", "Her zaman", "Hisse ve yatırım fonları; olası kaybı kabul eder"]
          ], not: "Plan için şunlara bakılır: gereken tutar, her ödeme döneminde ayrılabilecek para, zaman ufku, risk toleransı ve her varlığın beklenen getirisi." }
      ]
    },
    {
      baslik: "Çeşitlendirme, danışman ve benchmark",
      kisa: "Çeşitlendirme riski dağıtır; danışmanın lisansına ve maliyetine bak; performansı benchmark ile kıyasla.",
      bloklar: [
        { tip: "ornek", baslik: "Dondurma mı, şemsiye mi? (çeşitlendirme)", durum: "10.000 TL'nin yarısını dondurmacıya, yarısını şemsiyecinin hissesine yatırmayı düşünüyorsun. Güneşli yılda dondurmacı %20 kazanıyor, şemsiyeci %10 kaybediyor. Yağmurlu yılda tersi: dondurmacı %10 kaybediyor, şemsiyeci %20 kazanıyor.",
          adimlar: ["Hepsi dondurmacıda: güneşli yıl +%20, yağmurlu yıl −%10. Fark 30 puan.", "Yarı yarıya, güneşli yıl: 0,5 × 20 + 0,5 × (−10) = +%5.", "Yarı yarıya, yağmurlu yıl: 0,5 × (−10) + 0,5 × 20 = +%5.", "Her iki yılda da getiri +%5 olur."],
          sonuc: "Çeşitlendirme ==dalgalanmayı azaltır==: tek varlıkta −%10 ile +%20 arasında gidip gelen getiri, karışımda her yıl ==%5==." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧺", terim: "Diversification", tr: "çeşitlendirme", tanim: "Parayı farklı risk ve beklenen getiri düzeyindeki çeşitli varlıklara dağıtmak. Yatırımcıya aşırı risk almadan daha yüksek uzun vadeli getiri arama imkânı verir.", ornek: "Mevduat, tahvil ve hisse fonunu bir arada tutmak." },
            { ikon: "🧑‍💼", terim: "Financial advisor", tr: "finansal danışman", tanim: "Birikim ve yatırım seçeneklerini değerlendirmeye yardımcı olan uzman. Seçerken lisansına, sertifikalarına, eğitimine, deneyimine ve ücretine bakılır.", ornek: "Lisanslı ve sertifikalı, ücretini açıkça söyleyen bir danışman." },
            { ikon: "📏", terim: "Benchmark index", tr: "kıyas endeksi", tanim: "Yatırımların performansını kıyaslamak için kullanılan hisse ya da tahvil endeksi.", ornek: "ABD'de S&P 500; Türkiye'de BIST 100." }
          ] },
        { tip: "tuzak", baslik: "Çeşitlendirme riski sıfırlamaz", metin: "Çeşitlendirme riski dağıtır; ortadan kaldırmaz.", yanlis: "Çeşitlendirirsem asla zarar etmem.", dogru: "Çeşitlendirme ==aşırı riski azaltır==, ama kayıp ihtimalini tamamen yok etmez. Performansı da kıyaslamak için benchmark kullanılır: portföyün %6, endeksin %8 getirmesi geride kaldığını gösterir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Uzun vadeli hedefler: lise sonrası eğitim (birikim, kredi, burs, hibe, çalış-öğren), konut (peşinat + konut kredisi), emeklilik (devlet, işveren planı, kişisel yatırım, çalışma), bağış.",
            "Federal öğrenci kredisi genelde özel krediden daha düşük faizli ve esnektir. Aylık konut ödemesi: kredi tutarı, vade ve faiz oranı (sabit ya da değişken). Uzun vade aylık ödemeyi düşürür, toplam faizi artırır.",
            "Varlıklar: tasarruf hesabı ve CD (düşük risk, düşük getiri), tahvil, yatırım fonu, tek hisse (yüksek risk, yüksek beklenen getiri).",
            "Risk arttıkça beklenen getiri artar; ama beklenen getiri garanti değildir.",
            "Bileşik büyüme: getiri üzerine getiri; erken başlayıp uzun tutan çok daha fazla biriktirir. 10.000 TL, %8 ile 40 yılda ≈ 217.245 TL, 30 yılda ≈ 100.627 TL.",
            "Getiriyi azaltanlar: ücretler (aracı kurum, yönetim, danışmanlık), faiz-temettü-sermaye kazancı vergileri, enflasyon (reel getiri ≈ nominal − enflasyon) ve önyargılar (aşırı güven, zarardan kaçınma).",
            "Uzun zaman ufku → riskli, yüksek getirili varlıklar; kısa zaman ufku → güvenli varlıklar. Düşük risk toleransı → sigortalı mevduat ve CD; yüksek tolerans → hisse ve fonlar.",
            "Plan: gereken tutar ÷ ay sayısı (480.000 ÷ 96 = 5.000 TL), ayrılabilir tutar, zaman ufku, risk toleransı, beklenen getiri.",
            "Çeşitlendirme riski dağıtır (sıfırlamaz); danışmanı lisans, sertifika, eğitim, deneyim ve ücretle seç; performansı benchmark ile kıyasla."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tablo, iki kişinin aynı tutarı aynı yıllık getiriyle yatırmasının sonucunu gösteriyor. Ece ile Can arasındaki farkı en iyi hangisi açıklar?",
      fig: { type: "table", caption: "65 yaşındaki birikim", head: ["Kişi", "Başlangıç yaşı", "Yatırılan", "Yıllık getiri", "Birikim"], rows: [["Ece", "25", "10.000 TL", "%8", "≈ 217.245 TL"], ["Can", "35", "10.000 TL", "%8", "≈ 100.627 TL"]] },
      opts: ["Can daha az risk almıştır.", "Ece daha fazla para yatırmıştır.", "Ece'nin parası daha uzun süre bileşik getiri kazanmıştır.", "Ece'nin yatırımı vergiden muaftır."],
      a: 2,
      why: "Yatırılan tutar ve getiri aynı; tek fark süre. Bileşik büyümede getiri üzerine getiri işlediği için erken başlayan (40 yıl) geç başlayandan (30 yıl) çok daha fazla biriktirir. B yanlış: ikisi de 10.000 TL yatırdı." },
    { q: "Bir aile, 1 yıl sonra ödeyeceği 100.000 TL'lik üniversite harcı için biriktiriyor ve düşüşte parayı nakde çevirmek zorunda kalabilir. Aşağıdakilerden hangisi en uygun varlıktır?",
      opts: ["Devletçe sigortalı vadeli mevduat hesabı (CD)", "Tek bir şirketin hissesi", "Yüksek riskli girişim hissesi", "Hepsini bir arkadaşın girişimine borç vermek"],
      a: 0,
      why: "Kısa zaman ufkunda düşüşte satmak zarara yol açabilir; bu yüzden sigortalı mevduat gibi güvenli varlıklar tercih edilir, getirisi düşük olsa bile. Tek hisse en çekici yanlış şık: beklenen getirisi yüksek ama kısa sürede kayıp riski büyük." },
    { q: "Bir yatırımın nominal yıllık getirisi %9'dur. Fon yönetim ücreti yıllık %1 ve enflasyon yıllık %6'dır. Yaklaşık reel getiri nedir?",
      opts: ["%3", "%2", "%9", "%16"],
      a: 1,
      why: "Ücret sonrası nominal getiri %9 − %1 = %8. Reel getiri ≈ nominal − enflasyon = %8 − %6 = yaklaşık %2. %3, ücreti unutmaktır (9 − 6); %9 nominal getiridir; %16 enflasyonu eklemektir." },
    { q: "Piyasa kısa süreliğine %10 düşünce Elif panikleyip bütün fonlarını zararına satıyor; birkaç ay sonra fiyatlar toparlanıyor. Elif'in davranışını en iyi açıklayan önyargı hangisidir?",
      opts: ["Aşırı güven (*overconfidence*)", "Bileşik büyüme", "Çeşitlendirme", "Zarardan kaçınma (*loss aversion*)"],
      a: 3,
      why: "Zarardan kaçınma, yatırımcının kaybı görmek istemeyip varlıkları erken, zararına satmasına yol açar. Aşırı güven ise gereksiz risk almaya iter; burada tersine bir korku var." },
    { q: "Mert bütün birikimini tek bir şirketin hissesine yatırmış. Finansal danışmanı çeşitlendirmeyi öneriyor. Çeşitlendirme Mert'e ne sağlar?",
      opts: ["Zarar etme ihtimalini tamamen ortadan kaldırır.", "Farklı risk ve getiri düzeyindeki varlıklara dağıtarak aşırı risk almadan daha yüksek uzun vadeli getiri aramasını sağlar.", "Vergi ödemesini sıfırlar.", "Enflasyonun etkisini yok eder."],
      a: 1,
      why: "Çeşitlendirme, parayı farklı risk ve beklenen getiri düzeyindeki varlıklara dağıtır; aşırı risk almadan uzun vadeli getiri aranmasına izin verir. A en çekici yanlış şık: çeşitlendirme riski azaltır ama sıfırlamaz." }
  ]
};
