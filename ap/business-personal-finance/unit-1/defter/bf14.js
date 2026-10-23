/* Kitpath not defteri · bf14 · 1.4 İş Fikirleri Nereden Çıkar?
   Kaynak: ap-videolar/src/episodes/bf14 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf14",
  amac: "Bu konu iş fikirlerinin nereden çıktığını anlatıyor: iyi fikir üründen değil, sorundan doğar. Girişimcinin (*entrepreneur*) sorunu nasıl bulduğunu, fikri nasıl araştırıp denediğini ve müşteri tepkisiyle nasıl geliştirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Yol haritası: söylenen mi, çözen mi?",
      kisa: "Girişimci bir sorunu görür, fikri hızlıca dener ve müşteriyle geliştirir.",
      bloklar: [
        { tip: "adimlar", baslik: "Motivasyondan denemeye", adimlar: [
            { baslik: "Motivasyon", metin: "Girişimciyi ne harekete geçirir: *risk* ve *reward*." },
            { baslik: "İlham", metin: "Fikir nereden gelir: *pain point* ve *market gap*." },
            { baslik: "Deneme-yanılma", metin: "Fikir nasıl denenir: *research*, *prototype*, *validation*, *MVP*, *feedback*." }
          ] },
        { tip: "not", metin: "Yağmur yağıyor, taksi yok; kantin sırası öyle uzun ki tostunu alamadan zil çalıyor. Çoğumuz söylenir, girişimci “bunun daha iyi bir yolu olmalı” der. ==Asıl soru: hangi sorunu çözüyorsun?==" }
      ]
    },
    {
      baslik: "*Entrepreneur*: sorun çözen kişi",
      kisa: "Girişimci fırsatı görür, kaynakları birleştirir ve değer yaratır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚀", terim: "Entrepreneur", tr: "girişimci", tanim: "Fırsatları fark edip kaynakları bir araya getirerek değer yaratan bir iş kuran ve geliştiren kişi; kısaca sorun çözen kişi.", ornek: "Getir marketi icat etmedi; depo, kurye ve uygulamayı birleştirip siparişi dakikalara indirdi." }
          ] },
        { tip: "ikili", sol: { ikon: "😤", baslik: "Söylenen", maddeler: ["Sıra uzun, yağmur yağıyor diye şikâyet eder", "Sorunu kabullenir"] },
          sag: { ikon: "💡", baslik: "*Entrepreneur*", maddeler: ["“Daha iyi bir yolu olmalı” der", "Sorunu çözmeye girişir"] },
          oyun: [
            { metin: "Kantin sırasından şikâyet edip yine de sıraya girmek.", cevap: "sol", neden: "Şikâyet var, çözüm yok." },
            { metin: "Kantin sırası için sipariş uygulaması düşünmek.", cevap: "sag", neden: "Sorunu çözme girişimi." },
            { metin: "Depoyu, kuryeyi ve uygulamayı birleştirip siparişi dakikalara indirmek.", cevap: "sag", neden: "Kaynakları birleştirerek değer yaratmak." },
            { metin: "Yağmurda taksi bulamayıp eve yürümek.", cevap: "sol", neden: "Sorunun çözümü aranmıyor." }
          ] },
        { tip: "tuzak", baslik: "Girişimci kimdir?", metin: "Girişimciyi diğerlerinden ayıran şey *risk* almaya istekli olmasıdır.", yanlis: "*Entrepreneur* para kazanmak isteyen herkestir.", dogru: "*Entrepreneur* bir sorunu çözen, kaynakları birleştiren ve değer yaratan kişidir." }
      ]
    },
    {
      baslik: "*Risk* ve *reward*",
      kisa: "Girişimci batma riskini göze alır; ödül yalnızca para değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Risk", tr: "risk", tanim: "İşin, masraflarını karşılayacak kadar gelir elde edememe ve batma ihtimali.", ornek: "Limonata için 3.000 TL harcadın; kimse almazsa para gitti." },
            { ikon: "🏅", terim: "Reward", tr: "ödül", tanim: "Girişimciliğin getirebileceği faydalar: *profit* (Topic 1.1), bağımsızlık (kendi patronun olmak), sorun çözmek ve tutkunun peşinden gitmek.", ornek: "5.000 TL'lik satıştan 2.000 TL kâr." }
          ] },
        { tip: "ornek", baslik: "Limonata tezgâhı: risk mi, ödül mü?", durum: "Limonata satmak için 3.000 TL harcıyorsun. Satış 5.000 TL olursa kâr ne olur? Kimse almazsa ne olur?",
          adimlar: ["Masraf = 3.000 TL (bu senin *risk*'in).", "Satış 5.000 TL ise kâr = 5.000 − 3.000 = 2.000 TL.", "Kimse almazsa gelir = 0; masrafı çıkaramazsın, 3.000 TL gitti."],
          sonuc: "Başarılıysa 2.000 TL *profit* (*reward*); başarısızsa 3.000 TL kayıp (*risk*)." },
        { tip: "tuzak", baslik: "Sadece zengin olmak için kurulan iş", metin: "Yalnızca zengin olmak için iş kurmak büyük ihtimalle batar; çünkü müşteriye değil kendine odaklanırsın.", yanlis: "*Profit* girişimcinin ana odağı olmalı.", dogru: "*Profit* en çok konuşulan *reward*; ama bağımsızlık ve tutku da *reward*'dır. Ana odak müşterinin sorunudur." }
      ]
    },
    {
      baslik: "Fikir sorundan doğar: *pain point* ve *market gap*",
      kisa: "Fikir üründen değil, müşterinin sıkıntısından ya da pazardaki boşluktan doğar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😖", terim: "Pain point", tr: "müşterinin sıkıntısı", tanim: "Müşterilerin yaşadığı belirli bir sıkıntı, zahmet ya da karşılanmamış ihtiyaç.", ornek: "Kaykayı okul dolabına sığmayan öğrenci, çantaya ve dolaba sığan 16 inçlik kaykay yaptı (Locker Board)." },
            { ikon: "🕳️", terim: "Market gap", tr: "pazar boşluğu", tanim: "Mevcut ürün ve hizmetlerin yeterince karşılayamadığı müşteri ihtiyacı; pazardaki boşluk.", ornek: "Taksi ve otobüs vardı ama daha hızlı, rahat yol eksikti; Uber var olan araçları bir uygulamayla düzenledi." }
          ] },
        { tip: "ikili", sol: { ikon: "😖", baslik: "*Pain point*", maddeler: ["Müşterinin yaşadığı sıkıntının kendisi", "Kantinde sıra beklemek"] },
          sag: { ikon: "🕳️", baslik: "*Market gap*", maddeler: ["İhtiyacın mevcut ürünlerce yeterince karşılanmaması", "Kantinde sıra beklemeden sipariş yok"] },
          oyun: [
            { metin: "Öğrenciler tostunu alamadan zil çalıyor.", cevap: "sol", neden: "Müşterinin yaşadığı sıkıntı: *pain point*." },
            { metin: "Taksi ve otobüs var ama hızlı, rahat yol hâlâ eksik.", cevap: "sag", neden: "Mevcut çözümler yetmiyor: *market gap*." },
            { metin: "Kaykayın dolaba sığmaması.", cevap: "sol", neden: "Doğrudan yaşanan sıkıntı." },
            { metin: "Kantinde sıra beklemeden sipariş verme seçeneğinin hiç olmaması.", cevap: "sag", neden: "Pazarda karşılanmayan ihtiyaç: *market gap*." }
          ] },
        { tip: "tuzak", baslik: "Ürün değil, sorun", metin: "İyi girişimciler “hangi ürünü satarım?” diye değil, “hangi sorunu çözerim?” diye başlar (“problems create opportunities”). *Pain point* sıkıntının kendisi, *market gap* o ihtiyacın yeterince karşılanmamasıdır; çoğu zaman aynı durumun iki yüzüdür. Boşluğu doldurmak için yeni icat gerekmez; Uber araba icat etmedi.", yanlis: "*Pain point* ile *market gap* aynı şeydir; boşluğu doldurmak için yepyeni bir ürün icat etmelisin.", dogru: "İkisi yakın ama farklıdır; çözüm çoğu zaman var olan kaynakları daha verimli düzenlemektir." }
      ]
    },
    {
      baslik: "Araştır ve çözüm üret",
      kisa: "Önce müşteriye sor, sonra çözümleri sırala ve en iyisinin taslağını yap.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔎", terim: "Market research", tr: "pazar araştırması", tanim: "İş kararlarına yön vermek için müşterilerin ihtiyaç ve tercihleri hakkında bilgi toplama süreci: görüşme, anket, rakip incelemesi.", ornek: "100 öğrenciye: ön sipariş için 10 TL fazla öder misin?" },
            { ikon: "🌪️", terim: "Brainstorming", tr: "beyin fırtınası", tanim: "Olası çözümleri serbestçe, elemeden üretme aşaması.", ornek: "Kantin sırası için aklına gelen her çözümü yaz." },
            { ikon: "✏️", terim: "Prototype", tr: "prototip", tanim: "Bir fikri denemek ve geri bildirim almak için yapılan erken ve basit ürün sürümü; son ürün değildir.", ornek: "Sipariş ekranını kâğıda çizip arkadaşlara göstermek." },
            { ikon: "✅", terim: "Viable solution", tr: "uygulanabilir çözüm", tanim: "Gerçek bir sorunu çözen, değer yaratan ve en önemlisi kâr edebilen çözüm.", ornek: "Kantinde ön sipariş sistemi." }
          ] },
        { tip: "formul", parcalar: [{ t: "Gerçek sorunu çözer", alt: "1" }, "+", { t: "Değer yaratır", alt: "2" }, "+", { t: "Kâr edebilir", alt: "3" }, "=", { t: "*Viable solution*", alt: "üçü birden şart" }], aciklama: "Üç koşuldan biri eksikse çözüm *viable* değildir." },
        { tip: "tuzak", baslik: "Araştırma riski bitirmez", metin: "Amaç tahmin etmek yerine müşterinin gerçekten ne istediğini anlamak; ama sonuç kesinlik değildir. Fikri ==hızlı, ucuz ve kolay== test et: Netflix'in kurucuları önce bir zarfla disk yollayıp sağlam ulaşıp ulaşmadığına baktı.", yanlis: "*Market research* yaptıysan *risk* kalmaz.", dogru: "*Market research* belirsizliği azaltır, *risk*'i ortadan kaldırmaz." }
      ]
    },
    {
      baslik: "*Validation*: kanıt iste",
      kisa: "Doğrulama, sorunun gerçek olduğunu ve müşterinin para vereceğini kanıtlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧾", terim: "Validation", tr: "doğrulama", tanim: "Gerçek bir sorunun var olduğunu ve müşterilerin çözüm için para ödemeye istekli olduğunu kanıtlama süreci.", ornek: "“Öderim” diyen 40 kişiden peşin 50 TL istemek." }
          ] },
        { tip: "grafik", baslik: "Kantin: sözden ödemeye (100 öğrenci)", xlabel: "Aşama", ylabel: "Öğrenci", xmax: 4, ymax: 110,
          yticks: [{ v: 25, label: "25" }, { v: 40, label: "40" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 1, noktalar: [[0.4, 0], [1.2, 0], [1.2, 0], [0.4, 0]] },
            { id: "b", tip: "alan", renk: 2, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "c", tip: "alan", renk: 0, noktalar: [[2.8, 0], [3.6, 0], [3.6, 0], [2.8, 0]] },
            { id: "at", tip: "yazi", x: 0.8, y: 104, metin: "Soruldu 100", gizli: true },
            { id: "bt", tip: "yazi", x: 2, y: 46, metin: "“Öderim” 40", gizli: true },
            { id: "ct", tip: "yazi", x: 3.2, y: 31, metin: "50 TL verdi 25", gizli: true }
          ],
          durumlar: [
            { metin: "100 öğrenciye anket yapıldı.", set: { a: { noktalar: [[0.4, 0], [1.2, 0], [1.2, 100], [0.4, 100]] } }, goster: ["at"] },
            { metin: "==40'ı== “10 TL fazla öderim” dedi. Bu bir söz; ödeme değil.", set: { b: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 40], [1.6, 40]] } }, goster: ["bt"] },
            { metin: "Peşin 50 TL istenince ==25'i== ödedi: 25 × 50 = 1.250 TL. Söz verenlerin 25 / 40 = %62,5'i, ankettekilerin %25'i. İşte kanıt.", set: { c: { noktalar: [[2.8, 0], [3.6, 0], [3.6, 25], [2.8, 25]] } }, goster: ["ct"] }
          ] },
        { tip: "ikili", sol: { ikon: "💬", baslik: "“Beğendim”", maddeler: ["Söz", "Para ödemek değil"] },
          sag: { ikon: "💳", baslik: "Peşin ödeme", maddeler: ["Gerçek kanıt", "Müşteri para ödemeye hazır"] },
          oyun: [
            { metin: "“Harika fikir, çok beğendim!”", cevap: "sol", neden: "Söz var, ödeme yok." },
            { metin: "Önceden 50 TL ödeyip sipariş vermek.", cevap: "sag", neden: "Para vermeye hazır olduğunu gösteriyor." },
            { metin: "Ankette “evet, öderim” demek.", cevap: "sol", neden: "Henüz ödeme yapılmadı." },
            { metin: "25 kişinin peşin ödemesi.", cevap: "sag", neden: "Gerçek *validation*." }
          ] },
        { tip: "tuzak", baslik: "Köprü benzetmesi", metin: "Müşteri isteyip istemediğini doğrulamadan aylarca ürün yapmak, karşıya geçmek isteyen var mı diye bakmadan köprü kurmaya benzer.", yanlis: "“Beğendim” demek *validation*'dır.", dogru: "*Validation* iki şeyi birden doğrular: sorun gerçek mi, müşteri para öder mi?" }
      ]
    },
    {
      baslik: "*MVP*: en sade ürün",
      kisa: "*MVP* sade ama çalışır; asıl sorunu gerçek müşteride çözer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Minimum viable product (MVP)", tr: "asgari uygulanabilir ürün", tanim: "Fikri test etmek için gereken yalnızca temel özellikleri içeren en sade ürün ya da hizmet.", ornek: "Aylarca kod yazmak yerine bir WhatsApp grubu: sadece tost ve ayran, sadece öğle arası." }
          ] },
        { tip: "ikili", sol: { ikon: "✏️", baslik: "*Prototype*", maddeler: ["Fikri denemek için erken taslak", "Kâğıt çizim bile olabilir"] },
          sag: { ikon: "📱", baslik: "*MVP*", maddeler: ["Gerçek müşterilerin kullandığı, çalışan en sade ürün", "Asıl sorunu yine çözer"] },
          oyun: [
            { metin: "Sipariş ekranını kâğıda çizip arkadaşlara göstermek.", cevap: "sol", neden: "Erken, basit taslak: *prototype*." },
            { metin: "Gerçek öğrencilere tost ve ayran satan WhatsApp grubu.", cevap: "sag", neden: "Çalışan, sade ve gerçek müşterilerle: *MVP*." },
            { metin: "Netflix kurucularının zarfla disk postalaması.", cevap: "sol", neden: "Fikri denemek için erken bir test: *prototype*." },
            { metin: "Airbnb'nin birkaç şişme yatak ve basit bir siteyle misafir ağırlaması.", cevap: "sag", neden: "Gerçek müşterilerin kullandığı sade ürün: *MVP*." }
          ] },
        { tip: "tuzak", baslik: "MVP kötü ürün değildir", metin: "Öğrencilerin en sık yaptığı hata bu: *MVP* sade olur ama müşterinin asıl sorununu yine çözer. Onlarca özellikli karmaşık uygulama yerine tek bir önemli işi yapan sade sürümdür.", yanlis: "*MVP* ucuz, kötü bir sürümdür; *prototype* ile *MVP* aynı şeydir.", dogru: "*MVP* yalnızca temel özelliği olan ama asıl sorunu çözen en sade üründür; *prototype* taslaktır, *MVP* gerçek müşteride çalışır." }
      ]
    },
    {
      baslik: "*Customer feedback*: dinle ve geliştir",
      kisa: "Müşteriyi dinle, uyum sağla, ürünü geliştir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👂", terim: "Customer feedback", tr: "müşteri geri bildirimi", tanim: "Müşterilerden gelen ve ürünü ya da hizmeti geliştirmeye yarayan bilgi ve tepkiler.", ornek: "Kimi bayılır, kimi kusur bulur, kimi “çay da ekleyin” der." }
          ] },
        { tip: "adimlar", baslik: "Döngü: dinle, uyum sağla, geliştir", adimlar: [
            { baslik: "Dinle", metin: "Kimi bayılır, kimi kusur bulur, kimi çay da ekleyin der." },
            { baslik: "Uyum sağla", metin: "Gelen tepkiyi değerlendirip değiştir." },
            { baslik: "Geliştir", metin: "Yeni sürüm: tost, ayran ve çay." }
          ] },
        { tip: "tuzak", baslik: "Ürününe âşık olma", metin: "En büyük hata ürününe âşık olup herkesi haksız saymaktır. Shark Tank'teki “I'm out” klipleri gibi ==reddedilmeyi bekle==: ret de işin parçasıdır. Kısacası: listen, adapt, improve.", yanlis: "Eleştiren müşteri ürünü anlamamıştır.", dogru: "*Customer feedback* ürünü geliştirmeye yarar: dinle, uyum sağla, geliştir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Entrepreneur* sorun çözen kişidir: fırsatı görür, kaynakları birleştirir, değer yaratır (Getir).",
            "*Risk* = masrafı çıkaramama ihtimali (3.000 TL harcadın, kimse almadı). *Reward* = kâr (5.000 − 3.000 = 2.000 TL), bağımsızlık, tutku. Yalnızca zengin olmak için kurulan iş genelde batar.",
            "Fikirler sorundan doğar: *pain point* (müşterinin sıkıntısı) ve *market gap* (mevcut ürünlerin karşılayamadığı ihtiyaç; Uber).",
            "*Market research* (görüşme, anket, rakipler) belirsizliği azaltır, *risk*'i sıfırlamaz.",
            "*Brainstorming* ile çözümleri sırala, en iyisinin *prototype*'ını yap; amaç bir *viable solution*: sorunu çözen, değer yaratan, kâr edebilen çözüm.",
            "*Validation* = sorun gerçek mi, müşteri para öder mi? 100 kişiden 40 “öderim”, 25'i peşin ödedi.",
            "*MVP* = yalnızca temel özellikleri olan en sade ürün; kötü sürüm değil. *Prototype* taslaktır, *MVP* gerçek müşteride çalışır.",
            "*Customer feedback*: dinle, uyum sağla, geliştir. Ürününe âşık olma; ret de işin parçası.",
            "Hep şunu sor: hangi ürünü satarım değil, hangi sorunu çözerim?"
          ] }
      ]
    }
  ]
};
