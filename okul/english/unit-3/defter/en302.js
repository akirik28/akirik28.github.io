/* Kitora not defteri · en302 · 3.2 Olay Örgüsü
   Kaynak: okul 10. sınıf English Unit 3 (The Catcher in the Rye) + MEB 10. sınıf programı. Blok türleri: /ap/_kit/defter.js başı.
   Telif: romandan en fazla 10 kelimelik, bölüm numaralı kısa alıntılar; gerisi kendi cümlelerimizle. */
window.DEFTER = {
  slug: "en302",
  amac: "Bu konu romanın olay örgüsünü anlatıyor: Holden'ın Cumartesi'den Pazartesi'ye Pencey'den New York'a, oradan Phoebe'ye uzanan yolculuğu. Olayları sırayla, bölüm numaralarıyla ve İngilizce özet kalıplarıyla öğreneceksin.",
  bolumler: [
    {
      baslik: "Bir bakışta olay örgüsü: üç gün, üç mekân",
      kisa: "Cumartesi Pencey'de, gece ve Pazar New York'ta, Pazartesi Phoebe'yle biter.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "Cumartesi öğleden sonra · Ch 1–4", baslik: "Pencey Prep'te son gün", metin: "Holden dört dersten kalmıştır; öğretmeni Mr. Spencer'a veda eder, Ackley ve Stradlater ile konuşur." },
            { tarih: "Cumartesi akşamı · Ch 5–8", baslik: "Kompozisyon, kavga, ayrılış", metin: "Stradlater ile kavga eder ve geceyi beklemeden okuldan ayrılır; trenle New York'a gider." },
            { tarih: "Cumartesi gecesi · Ch 9–14", baslik: "New York'ta ilk gece", metin: "Otele yerleşir, gece kulüplerine gider; yalnızlığı artar." },
            { tarih: "Pazar · Ch 15–20", baslik: "Sally, Carl Luce, Central Park", metin: "Gün boyunca birçok kişiyle bağ kurmaya çalışır; hepsi yarım kalır." },
            { tarih: "Pazar gecesi · Ch 21–24", baslik: "Phoebe ve Mr. Antolini", metin: "Gizlice eve girip kız kardeşiyle konuşur; sonra eski öğretmeninin evinde kalır." },
            { tarih: "Pazartesi · Ch 25–26", baslik: "Müze, atlıkarınca, son", metin: "Phoebe'yle buluşur; kitap, Holden'ın dinlenme evinden anlattığı kapanış bölümüyle biter." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧵", terim: "Plot", tr: "olay örgüsü", tanim: "Olayların neden-sonuç zinciriyle sıralanması. Romanda çizgi basittir: bir yolculuk ve dönüş.", ornek: "Pencey'den New York'a, oradan Phoebe'ye." },
            { ikon: "📍", terim: "Setting", tr: "zaman ve mekân", tanim: "Olayların geçtiği yer ve zaman. Burada: bir yatılı okul, New York'un otelleri, parkı ve müzesi; 1940'ların sonunda üç gün.", ornek: "Central Park'ın soğuk gölü." },
            { ikon: "⚔️", terim: "Conflict", tr: "çatışma", tanim: "Dış çatışma (Holden ile okul, yetişkin dünyası) ve iç çatışma (Holden ile kendi yası ve korkuları). Roman asıl olarak iç çatışmayı işler.", ornek: "Allie'nin ölümüyle yüzleşememesi." }
          ] },
        { tip: "grafik", baslik: "Gerilim eğrisi (bir yorum)", xlabel: "Hikâyenin ilerleyişi", ylabel: "Gerilim", xmax: 10, ymax: 7,
          xticks: [{ v: 0.7, label: "Pencey" }, { v: 2, label: "Kavga" }, { v: 3.3, label: "Gece" }, { v: 4.6, label: "Pazar" }, { v: 6, label: "Phoebe" }, { v: 7, label: "Antolini" }, { v: 8.2, label: "Müze" }, { v: 9.4, label: "Son" }],
          yticks: [{ v: 1.5, label: "düşük" }, { v: 5.5, label: "yüksek" }],
          ogeler: [
            { id: "c1", tip: "egri", renk: 1, noktalar: [[0.7, 1.5], [1.35, 2.2], [2, 3]], gizli: true },
            { id: "t1", tip: "yazi", x: 1.3, y: 3.6, metin: "*Exposition*", gizli: true },
            { id: "c2", tip: "egri", renk: 1, noktalar: [[2, 3], [2.65, 3.5], [3.3, 4], [3.95, 4.3], [4.6, 4.5]], gizli: true },
            { id: "t2", tip: "yazi", x: 3.3, y: 5, metin: "*Rising action*", gizli: true },
            { id: "c3", tip: "egri", renk: 2, noktalar: [[4.6, 4.5], [5.3, 3.6], [6, 3], [6.5, 4.2], [7, 5.5]], gizli: true },
            { id: "k", tip: "nokta", x: 7, y: 5.5, etiket: "*Climax*", gizli: true },
            { id: "c4", tip: "egri", renk: 3, noktalar: [[7, 5.5], [7.6, 4], [8.2, 2.5]], gizli: true },
            { id: "t4", tip: "yazi", x: 8.4, y: 4.2, metin: "*Falling action*", gizli: true },
            { id: "c5", tip: "egri", renk: 3, noktalar: [[8.2, 2.5], [8.8, 1.8], [9.4, 1.5]], gizli: true },
            { id: "t5", tip: "yazi", x: 9.3, y: 0.8, metin: "*Resolution*", gizli: true }
          ],
          durumlar: [
            { metin: "Pencey bölümü ==*exposition*==: Holden'ı, sorunlarını ve ayrılış kararını tanırız.", goster: ["c1", "t1"] },
            { metin: "New York'ta ==*rising action*==: her yeni deneme Holden'ı biraz daha yalnızlaştırır, gerilim artar.", goster: ["c2", "t2"] },
            { metin: "Phoebe sahnesi gerilimi bir an düşürür; Antolini gecesi ise birçok okumada ==*climax*== (kırılma noktası) sayılır.", goster: ["c3", "k"] },
            { metin: "Sabah gerilim düşer: ==*falling action*==. Holden yorgun ve şaşkındır.", goster: ["c4", "t4"] },
            { metin: "Müze ve atlıkarıncada sakinleşme gelir; ==*resolution*== dinlenme evi bölümüyle kapanır. Bu eğri bir yorumdur: kırılma noktası sınıfta tartışılabilir.", goster: ["c5", "t5"] }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: olayı özetle", head: ["Amaç", "Kalıp"], rows: [
            ["Başlangıç", "*The novel begins as Holden, a sixteen-year-old, is about to leave Pencey Prep.*"],
            ["Sıra", "*After…, Holden travels to… where he…*"],
            ["Sonuç", "*By the end of the novel, Holden is telling his story from a rest home.*"]
          ], not: "Özet yazarken ==*present tense*== kullan (*Holden leaves…*), geçmiş zaman değil." }
      ]
    },
    {
      baslik: "Pencey Prep: ayrılış (Ch 1–8)",
      kisa: "Holden okuldan atılır, kavga eder ve geceyi beklemeden ayrılır.",
      bloklar: [
        { tip: "adimlar", baslik: "Pencey'de olanlar", adimlar: [
            { baslik: "Mr. Spencer (Ch 2)", metin: "Yaşlı tarih öğretmeni Holden'ın kalışını konuşur; Holden hem saygı duyar hem rahatsız olur." },
            { baslik: "Ackley (Ch 3)", metin: "Komşu odadaki Ackley sıkıcıdır ama yalnızdır; Holden ona kısmen katlanır." },
            { baslik: "Stradlater ve Jane (Ch 4)", metin: "Oda arkadaşı Stradlater, Holden'ın tanıdığı Jane Gallagher ile çıkacaktır; Holden bundan rahatsız olur." },
            { baslik: "Kompozisyon ve kavga (Ch 5–6)", metin: "Holden, Stradlater'ın istediği kompozisyonu kardeşi Allie'nin beyzbol eldiveni üzerine yazar. Stradlater beğenmez; Jane konusundaki tartışma yumruklaşmaya döner." },
            { baslik: "Ayrılış (Ch 7–8)", metin: "Holden okuldan ayrılmaya karar verir ve trenle New York'a gider. Ailesine haber ulaşmadan önce vakit kazanmak ister." }
          ] },
        { tip: "tuzak", baslik: "Atılma sebebi", metin: "Holden kavgadan önce zaten dört dersten kalmıştır. Yalnızca İngilizcede iyidir. Kavga, ayrılışını hızlandırır.", yanlis: "Holden kavga ettiği için okuldan atıldı.", dogru: "Holden notları yüzünden atılıyor; kavga ayrılışını yalnızca hızlandırıyor. Yaz: *He is expelled because he fails four of his five classes.*" },
        { tip: "tablo", baslik: "Sınavda böyle yaz: neden-sonuç", head: ["Amaç", "Kalıp"], rows: [
            ["Neden", "*Because he fails most of his classes, Holden…*"],
            ["Sonuç", "*As a result of the fight, Holden decides to leave Pencey that night.*"],
            ["Karakter", "*His attitude toward Ackley and Stradlater shows that Holden…*"]
          ] }
      ]
    },
    {
      baslik: "New York: gece ve Pazar sabahı (Ch 9–16)",
      kisa: "Otel, kulüpler ve yarım kalan karşılaşmalar; sabah rahibeler ve bir plak.",
      bloklar: [
        { tip: "tablo", baslik: "Mekânlar ve anlamları", head: ["Yer", "Ne olur?", "Neden önemli?"], rows: [
            ["Edmont Hotel · Ch 9", "Holden otele yerleşir; karşı odalarda gördüğü garip davranışlar onu rahatsız eder.", "Yetişkin dünyası ve cinsellik karşısındaki kafa karışıklığı."],
            ["Gece kulüpleri · Ch 10–11", "Eğlence arar; çevresini sahte bulur. Jane'i aramak ister ama aramaz.", "Yalnızlık ve cesaret eksikliği; Jane özel bir yerdir."],
            ["Sunny ve Maurice · Ch 13–14", "Odasına çağırdığı genç kadınla konuşmak ister; sonra asansörcü Maurice ile ödeme yüzünden tartışıp yumruk yer.", "Güçsüzlük hissi; yetişkin dünyasında kontrolü kaybetmesi."],
            ["Rahibeler · Ch 15", "Pazar sabahı iki rahibeyle kahvaltıda sohbet eder; onlara nazik davranır ve bağış yapar.", "Holden'ın sıcak, nazik yüzü."],
            ["Plak ve çocuk · Ch 16", "Phoebe için bir plak alır; yolda şarkı söyleyen küçük bir oğlan görür (“if a body catch a body”).", "Çavdar tarlası hayalinin habercisi."]
          ] },
        { tip: "ornek", baslik: "Üç sahneyi iki cümlede özetle", durum: "Soru: “Summarize Holden's first night in New York in two sentences.” Sınavda nasıl yazarsın?",
          adimlar: ["1) Ne oldu? Otele gelir, kulüplerde dolaşır, bir kadınla konuşmak ister ve Maurice ile tartışır.", "2) Neden önemli? Her denemede yalnızlığı artar; kimseyle gerçek bir bağ kuramaz.", "3) Zamanı kontrol et: ==*present tense*==.", "4) Gereksiz ayrıntıyı at: kulüpteki şarkıcıların adı, kaç para ödediği…"],
          sonuc: "Model iskelet: ==*In New York, Holden checks into a hotel and tries to find company, but each encounter ends in failure. These attempts show that…*==" }
      ]
    },
    {
      baslik: "Pazar: bağ kurma denemeleri (Ch 17–20)",
      kisa: "Sally, Carl Luce ve Central Park: denemeler yarım kalır, Holden çöker.",
      bloklar: [
        { tip: "tablo", baslik: "Pazar gününün üç durağı", head: ["Kişi / yer", "Ne olur?", "Neden önemli?"], rows: [
            ["Sally Hayes · Ch 17–18", "Birlikte tiyatroya ve buz pistine giderler. Holden ona New England'da bir kulübede yaşamayı önerir; Sally ciddiye almaz, kavga ederler.", "Kaçış hayali ve yakınlık kurma çabasının yaralayıcı bitişi."],
            ["Carl Luce · Ch 19", "Eski öğrenci danışmanıyla bir barda buluşur; Holden rahatsız edici sorular sorar, Carl erken ayrılır.", "Bir yetişkinden cevap arar ama bulamaz."],
            ["Central Park · Ch 20", "Sarhoş ve üşümüş hâlde parka gider; gölette ördekleri bulamaz. Hastalanıp ölmeyi ve Phoebe'nin tepkisini düşünür.", "En alt nokta; Phoebe artık bir sığınak olarak belirir."]
          ] },
        { tip: "liste", baslik: "Sınavda böyle yaz", maddeler: [
            { ikon: "➡️", baslik: "Zincir", metin: "*Each failed attempt to connect with someone intensifies Holden's isolation.*" },
            { ikon: "🧠", baslik: "İç dünya", metin: "*Holden's longing for escape reveals his fear of growing up.*" },
            { ikon: "🏁", baslik: "Düşüş", metin: "*By the end of Sunday, Holden is physically exhausted and emotionally…*" }
          ] }
      ]
    },
    {
      baslik: "Phoebe ve Mr. Antolini (Ch 21–24)",
      kisa: "Phoebe ona umut verir; Antolini gecesi güvenini sarsar.",
      bloklar: [
        { tip: "adimlar", baslik: "Pazar gecesi", adimlar: [
            { baslik: "Eve gizlice giriş (Ch 21)", metin: "Ebeveynler dışarıdadır; Holden Phoebe'nin odasına geçer. On yaşındaki Phoebe uyanınca çok sevinir." },
            { baslik: "Yüzleşme (Ch 22)", metin: "Phoebe, ağabeyinin okuldan atıldığını anlayınca üzülür ve Holden'ın hiçbir şeyi sevmediğini söyler. Allie'nin ölü olduğunu hatırlatır." },
            { baslik: "Hayal (Ch 22)", metin: "Holden ne olmak istediğini anlatır: çavdar tarlasında kenardaki çocukları düşmekten korumak. Bu bölüm kitabın başlığının kaynağıdır." },
            { baslik: "Şapka ve para (Ch 22–23)", metin: "Holden kırmızı şapkasını Phoebe'ye verir; Phoebe de ona harçlığını ödünç verir. Holden gözyaşlarını tutamaz." },
            { baslik: "Antolini (Ch 23–24)", metin: "Eski öğretmeni Mr. Antolini onu evinde ağırlar ve ona okul hakkında öğüt verir. Gece Holden, Antolini'nin kendisine dokunduğunu fark eder, paniklenir ve evden ayrılır." }
          ] },
        { tip: "tuzak", baslik: "Antolini sahnesine kesin hüküm yazma", metin: "Metin olayı bilerek muğlak bırakır. Holden panikle ayrılır, sonra yorumundan emin olamaz. Bu belirsizlik, sahnenin asıl etkisidir.", yanlis: "Antolini kesinlikle zarar vermek istedi.", dogru: "Sahne *ambiguous*: Holden'ın algısı ve sonraki şüphesi anlatılır. Yaz: *The scene remains ambiguous, and Holden's reaction suggests…*" },
        { tip: "liste", baslik: "Sınavda böyle yaz", maddeler: [
            { ikon: "⚓", baslik: "Phoebe", metin: "*Phoebe serves as an emotional anchor who sees through Holden's defenses.*" },
            { ikon: "🌾", baslik: "Hayal", metin: "*In Chapter 22, Holden reveals his fantasy of protecting children from…*" },
            { ikon: "⚠️", baslik: "Antolini", metin: "*The ambiguity of the scene heightens Holden's disorientation.*" }
          ] }
      ]
    },
    {
      baslik: "Müze, atlıkarınca ve son (Ch 25–26)",
      kisa: "Holden Phoebe'yi izlerken mutlu olur; kitap dinlenme evinde biter.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧊", baslik: "Koruma ve dondurma fikri", maddeler: ["Çocukları düşmekten korumak ister", "Her şeyi olduğu gibi tutmak ister"] },
          sag: { ikon: "🎠", baslik: "Kabullenme", maddeler: ["Düşme riskine rağmen çocukları bırakmayı kabul eder", "Değişim kaçınılmazdır"] },
          oyun: [
            { metin: "Holden çavdar tarlasında çocukların kenarda düşmesini önlemek ister.", cevap: "sol", neden: "Ch 22: koruma hayali." },
            { metin: "Phoebe'nin atlıkarıncada altın halkaya uzanmasına izin vermek gerektiğini fark eder.", cevap: "sag", neden: "Ch 25: bırakmayı kabullenme." },
            { metin: "Müzenin camlı sahnelerindeki hiçbir şeyin değişmemesini sever.", cevap: "sol", neden: "Zamanı dondurma isteği." },
            { metin: "Yağmurda Phoebe'yi izlerken beklenmedik bir mutluluk hisseder.", cevap: "sag", neden: "Ch 25: kayıp korkusuna rağmen sevinç." }
          ] },
        { tip: "tablo", baslik: "Sınavda böyle yaz: son bölüm", head: ["Amaç", "Kalıp"], rows: [
            ["Dönüşümü söylemek", "*In Chapter 25, Holden begins to accept that he cannot protect Phoebe from every risk.*"],
            ["Sonu özetlemek", "*In the final chapter, Holden tells us he misses everyone he has described.*"],
            ["Kısa alıntı", "*He ends by saying that “you start missing everybody” (Salinger, ch. 26).*"]
          ], not: "Alıntıyı 10 kelimeden kısa tut ve bölüm numarası ekle." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Olaylar Cumartesi'den Pazartesi'ye: Pencey → New York → Phoebe.",
            "Holden notları yüzünden atılır (dört dersten kalır); kavga ayrılışını hızlandırır.",
            "New York'ta her bağ kurma denemesi yarım kalır: Sunny, Sally, Carl Luce.",
            "Central Park'taki ördek sahnesi en alt noktadır; Phoebe sığınak olarak belirir.",
            "Ch 22: Phoebe ile konuşma ve çavdar tarlası hayali; başlığın kaynağı.",
            "Antolini sahnesi muğlaktır; kesin hüküm yazma.",
            "Ch 25: atlıkarıncada Holden bırakmayı kabullenir; Ch 26 dinlenme evinden kapanış.",
            "Özet yazarken *present tense* kullan, neden-sonuç bağlaçlarını ekle."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki sıralamalardan hangisi olayların doğru sırasıdır?",
      opts: ["Phoebe ile konuşma → Pencey'den ayrılma → Sally ile buluşma", "Pencey'den ayrılma → Sally ile buluşma → Antolini'de gece", "Antolini'de gece → Pencey'den ayrılma → Sunny", "Sally ile buluşma → Pencey'de kavga → Phoebe ile konuşma"],
      a: 1, why: "Önce Pencey, sonra New York'ta Pazar (Sally), ardından Phoebe ve Antolini gelir. A, C ve D şıklarında Pencey ya da Phoebe yanlış yere konmuş." },
    { q: "Bir öğrenci şunu yazıyor: “*Holden was expelled from Pencey because he fought with Stradlater.*” Bu cümle için en doğru değerlendirme hangisi?",
      opts: ["Yanlış: Holden dört dersten kaldığı için atılıyor; kavga ayrılışını hızlandırıyor.", "Doğru: kavga okuldan atılmasının tek sebebidir.", "Yanlış: Holden okuldan atılmaz, kendi isteğiyle gider.", "Doğru: Stradlater ona zarar verdiği için atılmıştır."],
      a: 0, why: "Metinde asıl sebep başarısızlıktır; kavga sonradan olur. B ve D şıkları sebebi kavgaya bağlıyor; C şıkkı ise atılma gerçeğini yok sayıyor." },
    { q: "Bir öğrenci olay örgüsünü gerilim eğrisiyle çiziyor ve en yüksek noktaya Antolini gecesini koyuyor. Bu tercih için en makul açıklama hangisi?",
      opts: ["Antolini sahnesi kitabın en sakin yeridir.", "Phoebe ile konuşma romanın tek gerilimli bölümüdür.", "Holden o gece gerçekten bir suç işler.", "Birçok okurda bu sahne Holden'ın güvenini en çok sarsan, ardından çöküşü başlatan kırılma noktasıdır."],
      a: 3, why: "Sahne muğlak ve sarsıcıdır; ardından Holden'ın yorgunluğu ve çöküşü gelir. A ve B şıkları metne aykırı; C şıkkı uydurma bir olay ekliyor. Yine de başka okumalar olabileceğini unutma." },
    { q: "Holden, Sally'ye New England'da bir kulübede birlikte yaşamayı önerir ve Sally bunu ciddiye almaz. Bu sahne en iyi nasıl yorumlanır?",
      opts: ["Holden sıradan bir tatil planı yapıyordur.", "Sally'nin Holden'a ilgisini gösteren romantik bir sahnedir.", "Holden'ın kaçış hayalini ve yakınlık kurma çabasının nasıl yaralayıcı biçimde sona erdiğini gösterir.", "Roman boyunca Holden'ın tek başarılı iletişimidir."],
      a: 2, why: "Öneri bir kaçış fantezisidir ve ret, Holden'ı öfkelendirip kavgaya götürür. A ve B şıkları sahnenin ciddiyetini göz ardı ediyor; D şıkkı sonucu tersine çeviriyor." },
    { q: "Olay özeti yazarken hangi kalıp tercih edilmelidir?",
      opts: ["*Holden left Pencey and went to New York.*", "*Holden will leave Pencey and go to New York.*", "*Holden has left Pencey and goes to New York.*", "*Holden leaves Pencey and goes to New York.*"],
      a: 3, why: "Edebi metin özetinde ==*present tense*== kullanılır: *leaves*, *goes*. A şıkkı geçmiş zaman; B gelecek; C ise zamanları karıştırıyor." }
  ]
};
