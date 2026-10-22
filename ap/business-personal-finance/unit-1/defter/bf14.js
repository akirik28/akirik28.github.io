/* Kitora not defteri · bf14 · 1.4 İş Fikirleri Nereden Çıkar?
   Kaynak: ap-videolar/src/episodes/bf14 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf14",
  ozet: "İyi iş fikri üründen değil, sorundan doğar. *Entrepreneur* bir *pain point* ya da *market gap* görür, *market research* yapar, *prototype* ile bir *viable solution* arar, *validation* ile kanıt toplar, *MVP* ile gerçek müşteride dener ve *customer feedback* ile geliştirir. Bütün yol boyunca *risk* alır; *reward* için.",
  bolumler: [
    {
      baslik: "Söylenen mi, çözen mi?",
      bloklar: [
        { tip: "hikaye", ikon: "🌧️", baslik: "Yağmur yağıyor, taksi yok",
          metin: "Yağmur yağıyor, taksi yok. Kantinde sıra öyle uzun ki tostunu alamadan zil çalıyor. Çoğumuz söylenir; bazılarıysa şunu düşünür: bunun daha iyi bir yolu olmalı. Peki iyi bir iş fikri nereden çıkar? Ve tutacağını, paranı harcamadan nasıl anlarsın?" },
        { tip: "adimlar", baslik: "Yol haritası: motivasyondan denemeye", adimlar: [
            { baslik: "Motivasyon", metin: "Girişimciyi ne harekete geçirir: *risk* ve *reward*." },
            { baslik: "İlham", metin: "Fikir nereden gelir: *pain point* ve *market gap*." },
            { baslik: "Deneme-yanılma", metin: "Fikir nasıl denenir: *research*, *prototype*, *validation*, *MVP*, *feedback*." }
          ] },
        { tip: "not", metin: "Notlardaki girişte bir test var: sosyal medya akışının ne kadarı girişimcilik, işletme, pazarlama ve tüketici davranışı hakkında? Girişimcilik videoları müşteriyi anlamaya mı odaklı, yoksa Lamborghini ve özel jetle hava atmaya mı? ==Asıl soru: hangi sorunu çözüyorsun?==" }
      ]
    },
    {
      baslik: "*Entrepreneur*: sorun çözen kişi",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚀", terim: "Entrepreneur", tr: "girişimci", tanim: "Fırsatları fark edip kaynakları bir araya getirerek değer yaratan bir iş kuran ve geliştiren kişi; kısaca sorun çözen kişi.", ornek: "Getir: depo, kurye ve uygulamayı birleştirdi, sipariş dakikalar içinde kapıda." }
          ] },
        { tip: "adimlar", baslik: "Getir ne yaptı?", adimlar: [
            { baslik: "Marketi icat etmedi", metin: "Market zaten vardı." },
            { baslik: "Kaynakları birleştirdi", metin: "Depo + kurye + uygulama." },
            { baslik: "Değer yarattı", metin: "Sipariş dakikalar içinde kapına geldi." }
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
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Risk", tr: "risk", tanim: "İşin, masraflarını karşılayacak kadar gelir elde edememe ve batma ihtimali.", ornek: "Limonata için 3.000 TL harcadın; kimse almazsa para gitti." },
            { ikon: "🏅", terim: "Reward", tr: "ödül", tanim: "Girişimciliğin getirebileceği faydalar: *profit*, bağımsızlık, sorun çözmek, tutkusunun peşinden gitmek.", ornek: "5.000 TL'lik satıştan 2.000 TL kâr." },
            { ikon: "💰", terim: "Profit", tr: "kâr", tanim: "En çok konuşulan *reward* türü ama işin ana odağı olamaz (tanımı Topic 1.1'de).", ornek: "Gelir − maliyet." }
          ] },
        { tip: "ornek", baslik: "Limonata tezgâhı: risk mi, ödül mü?", durum: "Limonata satmak için 3.000 TL harcıyorsun. Satış 5.000 TL olursa kâr ne olur? Kimse almazsa ne olur?",
          adimlar: ["Masraf = 3.000 TL (bu senin *risk*'in).", "Satış 5.000 TL ise kâr = 5.000 − 3.000 = 2.000 TL.", "Kimse almazsa gelir = 0; masrafı çıkaramazsın, 3.000 TL gitti."],
          sonuc: "Başarılıysa 2.000 TL *profit* (*reward*); başarısızsa 3.000 TL kayıp (*risk*)." },
        { tip: "grafik", baslik: "Limonata: masraf ve satış (bin TL)", xlabel: "Kalem", ylabel: "Bin TL", xmax: 4, ymax: 6,
          yticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "m", tip: "alan", renk: 0, noktalar: [[0.4, 0], [1.2, 0], [1.2, 0], [0.4, 0]] },
            { id: "g", tip: "alan", renk: 1, noktalar: [[1.6, 0], [2.4, 0], [2.4, 0], [1.6, 0]] },
            { id: "k", tip: "alan", renk: 2, noktalar: [[2.8, 3], [3.6, 3], [3.6, 3], [2.8, 3]] },
            { id: "mt", tip: "yazi", x: 0.8, y: 3.4, metin: "Masraf 3", gizli: true },
            { id: "gt", tip: "yazi", x: 2, y: 5.4, metin: "Satış 5", gizli: true },
            { id: "kt", tip: "yazi", x: 3.2, y: 5.4, metin: "Kâr 2", gizli: true }
          ],
          durumlar: [
            { metin: "Önce paranı harcarsın: ==masraf 3.000 TL.== Bu risk.", set: { m: { noktalar: [[0.4, 0], [1.2, 0], [1.2, 3], [0.4, 3]] } }, goster: ["mt"] },
            { metin: "Satış 5.000 TL olursa gelir masrafı geçer.", set: { g: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 5], [1.6, 5]] } }, goster: ["gt"] },
            { metin: "Aradaki ==2.000 TL== kâr: ödülün.", set: { k: { noktalar: [[2.8, 3], [3.6, 3], [3.6, 5], [2.8, 5]] } }, goster: ["kt"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💰", baslik: "Kâr", metin: "En çok dikkat çeken ödül ama tek ödül değil." },
            { ikon: "🕊️", baslik: "Bağımsızlık", metin: "Kendi patronun olmak." },
            { ikon: "🔧", baslik: "Sorun çözmek", metin: "Bir derdin çaresi olmak." },
            { ikon: "❤️", baslik: "Tutku", metin: "Sevdiğin işi yapmak." }
          ] },
        { tip: "tuzak", baslik: "Sadece zengin olmak için kurulan iş", metin: "Yalnızca zengin olmak için iş kurmak büyük ihtimalle batar; çünkü müşteriye değil kendine odaklanırsın.", yanlis: "*Profit* girişimcinin ana odağı olmalı.", dogru: "*Profit* en çok konuşulan *reward*; ama bağımsızlık ve tutku da *reward*'dır. Ana odak müşterinin sorunudur." }
      ]
    },
    {
      baslik: "*Pain point*: sorundan fikir",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "😖", terim: "Pain point", tr: "müşterinin sıkıntısı", tanim: "Müşterilerin yaşadığı belirli bir sıkıntı, zahmet ya da karşılanmamış ihtiyaç.", ornek: "Kantin sırası; kaykayın dolaba sığmaması." }
          ] },
        { tip: "adimlar", baslik: "Locker Board'ın hikâyesi", adimlar: [
            { baslik: "Sorun", metin: "Ortaokula yeni başlayan bir öğrencinin kaykayı okul dolabına sığmıyor." },
            { baslik: "Çözüm", metin: "16 inçlik (yaklaşık 40 cm), çantaya ve dolaba sığan bir kaykay yapıyor." },
            { baslik: "Test", metin: "Shark Tank'te yatırımcılara sunuyor." },
            { baslik: "Ders", metin: "Fikir üründen değil, sorundan doğdu." }
          ] },
        { tip: "ikili", sol: { ikon: "📦", baslik: "Ürünle başlayan düşünce", maddeler: ["“Hangi ürünü satabilirim?”", "Müşteri geride kalır"] },
          sag: { ikon: "🧩", baslik: "Sorunla başlayan düşünce", maddeler: ["“Hangi sorunu çözebilirim?”", "Müşteri merkezde"] },
          oyun: [
            { metin: "“Herkesin yaşadığı bir sıkıntı bulup ona çözüm sunayım.”", cevap: "sag", neden: "Sorun odaklı düşünce: *pain point*." },
            { metin: "“Elimde bir sürü kaykay var, kime satarım?”", cevap: "sol", neden: "Önce ürün, sonra müşteri." },
            { metin: "“Okulda kantin sırası çok uzun, bunu nasıl kısaltırım?”", cevap: "sag", neden: "Gerçek bir sıkıntıdan hareket ediyor." },
            { metin: "“Havalı görünen bir ürün yapalım, belki biri alır.”", cevap: "sol", neden: "Müşterinin sorunu yok." }
          ] },
        { tip: "not", metin: "Kevin O'Leary'nin klibinden ders: ==herkesin yaşadığı bir pain point bul==, sonra onu çözen ürün ya da hizmet sun. Okuldaki *pain point*'in: kantin sırası. Sorun varsa fırsat da vardır (“problems create opportunities”)." }
      ]
    },
    {
      baslik: "*Market gap*: pazardaki boşluk",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🕳️", terim: "Market gap", tr: "pazar boşluğu", tanim: "Mevcut ürün ve hizmetlerin yeterince karşılayamadığı müşteri ihtiyacı; pazardaki boşluk.", ornek: "Uber'den önce de taksi ve otobüs vardı; insanlar daha hızlı ve rahat bir yol istiyordu." }
          ] },
        { tip: "adimlar", baslik: "Uber nasıl doğdu?", adimlar: [
            { baslik: "Mevcut çözüm", metin: "Taksi ve otobüs vardı." },
            { baslik: "Boşluk", metin: "İnsanlar daha hızlı, daha rahat bir yol istiyordu." },
            { baslik: "Çözüm", metin: "Var olan araçları bir uygulamayla daha verimli düzenledi." },
            { baslik: "Ders", metin: "Uber araba icat etmedi." }
          ] },
        { tip: "ikili", sol: { ikon: "😖", baslik: "*Pain point*", maddeler: ["Müşterinin yaşadığı sıkıntının kendisi", "Kantinde sıra beklemek"] },
          sag: { ikon: "🕳️", baslik: "*Market gap*", maddeler: ["İhtiyacın mevcut ürünlerce yeterince karşılanmaması", "Kantinde sıra beklemeden sipariş yok"] },
          oyun: [
            { metin: "Öğrenciler tostunu alamadan zil çalıyor.", cevap: "sol", neden: "Müşterinin yaşadığı sıkıntı: *pain point*." },
            { metin: "Taksi ve otobüs var ama hızlı, rahat yol hâlâ eksik.", cevap: "sag", neden: "Mevcut çözümler yetmiyor: *market gap*." },
            { metin: "Kaykayın dolaba sığmaması.", cevap: "sol", neden: "Doğrudan yaşanan sıkıntı." },
            { metin: "Kantinde sıra beklemeden sipariş verme seçeneğinin hiç olmaması.", cevap: "sag", neden: "Pazarda karşılanmayan ihtiyaç: *market gap*." }
          ] },
        { tip: "tuzak", baslik: "İkisi aynı madalyonun yüzleri", metin: "*Pain point* müşterinin sıkıntısıdır; *market gap* o ihtiyacın mevcut ürünlerce yeterince karşılanmamasıdır. Çoğu zaman aynı durumun iki yüzüdür.", yanlis: "*Pain point* ile *market gap* tamamen aynı şeydir.", dogru: "İkisi yakın ama farklı: biri sıkıntının kendisi, öteki pazardaki karşılanmamış boşluk." },
        { tip: "tuzak", baslik: "Boşluğu doldurmak icat gerektirmez", metin: "*Market gap* çözümü çoğu zaman yeni bir icat değil, var olan kaynakları daha verimli düzenlemektir.", yanlis: "*Market gap* doldurmak için yepyeni bir ürün icat etmelisin.", dogru: "Uber örneği: var olan araçlar bir uygulamayla daha verimli düzenlendi." }
      ]
    },
    {
      baslik: "*Market research*: tahmin etme, sor",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔎", terim: "Market research", tr: "pazar araştırması", tanim: "İş kararlarına yön vermek için müşterilerin ihtiyaç ve tercihleri hakkında bilgi toplama süreci (görüşme, anket, rakip incelemesi).", ornek: "100 öğrenciye: ön sipariş için 10 TL fazla öder misin?" }
          ] },
        { tip: "adimlar", baslik: "Araştırma yolları", adimlar: [
            { baslik: "Görüşme", metin: "Müşterilerle yüz yüze konuş." },
            { baslik: "Anket", metin: "Çok kişiye aynı soruyu sor." },
            { baslik: "Rakip incelemesi", metin: "Rakiplerin ne yaptığına bak." }
          ] },
        { tip: "ornek", baslik: "Kantin anketi", durum: "100 öğrenciye “ön sipariş için 10 TL fazla öder misin?” diye soruyorsun. 40'ı “öderim” diyor. Oranı ve olası sipariş sayısını hesapla.",
          adimlar: ["Evet diyenler: 40 / 100 = %40.", "Bu, 100 öğrencinin 40'ının ilgilendiği anlamına gelir.", "Ama bu bir söz; para ödemek değil. Doğrulama sonraki adım."],
          sonuc: "%40 ilgi var, ancak araştırma yalnızca belirsizliği azaltır; *risk*'i sıfırlamaz." },
        { tip: "tuzak", baslik: "Araştırma riski bitirmez", metin: "Amaç tahmin etmek yerine müşterinin gerçekten ne istediğini anlamak; ama sonuç kesinlik değildir.", yanlis: "*Market research* yaptıysan *risk* kalmaz.", dogru: "*Market research* belirsizliği azaltır, *risk*'i ortadan kaldırmaz." }
      ]
    },
    {
      baslik: "Çözüm ara: *brainstorming*, *prototype*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌪️", terim: "Brainstorming", tr: "beyin fırtınası", tanim: "Olası çözümleri serbestçe, elemeden üretme aşaması.", ornek: "Kantin sırası için aklına gelen her çözümü yaz." },
            { ikon: "✏️", terim: "Prototype", tr: "prototip", tanim: "Bir fikri denemek ve geri bildirim almak için yapılan erken ve basit ürün sürümü.", ornek: "Sipariş ekranını kâğıda çizip arkadaşlara göstermek." },
            { ikon: "✅", terim: "Viable solution", tr: "uygulanabilir çözüm", tanim: "Gerçek bir sorunu çözen, değer yaratan ve en önemlisi kâr edebilen çözüm.", ornek: "Kantinde ön sipariş sistemi." }
          ] },
        { tip: "adimlar", baslik: "Çözüme giden yol", adimlar: [
            { baslik: "*Brainstorming*", metin: "Aklına gelen her çözümü yaz." },
            { baslik: "En iyisini seç", metin: "En çok potansiyeli olanı bul." },
            { baslik: "*Prototype*", metin: "Erken, basit bir sürüm yap." },
            { baslik: "Yorum al", metin: "Arkadaşlarına göster." }
          ] },
        { tip: "formul", parcalar: [{ t: "Gerçek sorunu çözer", alt: "1" }, "+", { t: "Değer yaratır", alt: "2" }, "+", { t: "Kâr edebilir", alt: "3" }, "=", { t: "*Viable solution*", alt: "üçü birden şart" }], aciklama: "Üç koşuldan biri eksikse çözüm *viable* değildir." },
        { tip: "not", metin: "Netflix'in kurucu ortağından ders: fikir bulmak kolay; önemli olan onu ==hızlı, ucuz ve kolay== test etmenin yolunu bulmak. Netflix'in kurucuları postayla film kiralama fikrini, önce bir zarfla disk yollayıp sağlam ulaşıp ulaşmadığına bakarak denedi. Fikri bir an önce gerçek bir insanla “çarpıştır”." }
      ]
    },
    {
      baslik: "*Validation*: kanıt iste",
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
            { metin: "==40'ı== “10 TL fazla öderim” dedi.", set: { b: { noktalar: [[1.6, 0], [2.4, 0], [2.4, 40], [1.6, 40]] } }, goster: ["bt"] },
            { metin: "Peşin 50 TL istenince ==25'i== gerçekten ödedi: işte kanıt.", set: { c: { noktalar: [[2.8, 0], [3.6, 0], [3.6, 25], [2.8, 25]] } }, goster: ["ct"] }
          ] },
        { tip: "ornek", baslik: "Doğrulama sayıları", durum: "40 kişi “öderim” dedi. Peşin 50 TL istenince 25 kişi ödedi. Kaç lira toplandı, ödeyenlerin oranı kaç?",
          adimlar: ["Toplanan = 25 × 50 = 1.250 TL.", "Söz verenlerden ödeyen oran = 25 / 40 = %62,5.", "Tüm ankete oranı = 25 / 100 = %25."],
          sonuc: "1.250 TL toplandı; “öderim” diyenlerin %62,5'i gerçekten ödedi. Bu bir kanıt." },
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
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Minimum viable product (MVP)", tr: "asgari uygulanabilir ürün", tanim: "Fikri test etmek için gereken yalnızca temel özellikleri içeren en sade ürün ya da hizmet.", ornek: "Bir WhatsApp grubu: sadece tost ve ayran, sadece öğle arası." }
          ] },
        { tip: "ikili", sol: { ikon: "✏️", baslik: "*Prototype*", maddeler: ["Fikri denemek için erken taslak", "Kâğıt çizim bile olabilir"] },
          sag: { ikon: "📱", baslik: "*MVP*", maddeler: ["Gerçek müşterilerin kullandığı, çalışan en sade ürün", "Asıl sorunu yine çözer"] },
          oyun: [
            { metin: "Sipariş ekranını kâğıda çizip arkadaşlara göstermek.", cevap: "sol", neden: "Erken, basit taslak: *prototype*." },
            { metin: "Gerçek öğrencilere tost ve ayran satan WhatsApp grubu.", cevap: "sag", neden: "Çalışan, sade ve gerçek müşterilerle: *MVP*." },
            { metin: "Netflix kurucularının zarfla disk postalaması.", cevap: "sol", neden: "Fikri denemek için erken bir test: *prototype*." },
            { metin: "Airbnb'nin birkaç şişme yatak ve basit bir siteyle misafir ağırlaması.", cevap: "sag", neden: "Gerçek müşterilerin kullandığı sade ürün: *MVP*." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "💬", baslik: "Kantin *MVP*'si", metin: "Aylarca kod yazmak yerine bir WhatsApp grubu aç: sadece tost ve ayran, sadece öğle arası." },
            { ikon: "🛏️", baslik: "Airbnb", metin: "Evde birkaç şişme yatak ve basit bir site ile başladı." },
            { ikon: "🌱", baslik: "Bitki sulama uygulaması", metin: "Elif aylarca kod yazmak yerine yalnızca hatırlatma gönderen çalışır bir sürümü 30 kişiye verip kullanımı izlerse bu bir *MVP*'dir (hızlı, ucuz, kolay)." }
          ] },
        { tip: "tuzak", baslik: "MVP kötü ürün değildir", metin: "Öğrencilerin en sık yaptığı hata bu: *MVP* sade olur ama müşterinin asıl sorununu yine çözer. Onlarca özellikli karmaşık uygulama yerine tek bir önemli işi yapan sade sürümdür.", yanlis: "*MVP* ucuz, kötü bir sürümdür.", dogru: "*MVP* yalnızca temel özelliği olan, ama asıl sorunu çözen en sade üründür." },
        { tip: "tuzak", baslik: "Prototype ile MVP farkı", metin: "*Prototype* fikri denemek için erken bir taslaktır; *MVP* ise gerçek müşterilerin kullandığı, çalışan en sade üründür.", yanlis: "*Prototype* ile *MVP* aynı şeydir.", dogru: "*Prototype* taslaktır (kâğıt olabilir); *MVP* gerçek müşteride çalışan sade üründür." }
      ]
    },
    {
      baslik: "*Customer feedback*: dinle ve geliştir",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👂", terim: "Customer feedback", tr: "müşteri geri bildirimi", tanim: "Müşterilerden gelen ve ürünü ya da hizmeti geliştirmeye yarayan bilgi ve tepkiler.", ornek: "Kimi bayılır, kimi kusur bulur, kimi “çay da ekleyin” der." }
          ] },
        { tip: "adimlar", baslik: "Döngü: dinle, uyum sağla, geliştir", adimlar: [
            { baslik: "Dinle", metin: "Kimi bayılır, kimi kusur bulur, kimi çay da ekleyin der." },
            { baslik: "Uyum sağla", metin: "Gelen tepkiyi değerlendirip değiştir." },
            { baslik: "Geliştir", metin: "Yeni sürüm: tost, ayran ve çay." }
          ] },
        { tip: "not", metin: "En büyük hata ürününe âşık olup herkesi haksız saymaktır. Shark Tank'teki “I'm out” klipleri gibi ==reddedilmeyi bekle==: ret de işin parçasıdır ve geri bildirim ürünü iyileştirir. Kısacası: listen, adapt, improve." },
        { tip: "tuzak", baslik: "Ürününe âşık olma", metin: "Müşteri kusur bulduğunda haksız olmadığını düşünmek en büyük hatadır.", yanlis: "Eleştiren müşteri ürünü anlamamıştır.", dogru: "*Customer feedback* ürünü geliştirmeye yarar: dinle, uyum sağla, geliştir." }
      ]
    },
    {
      baslik: "Toparlayalım",
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
