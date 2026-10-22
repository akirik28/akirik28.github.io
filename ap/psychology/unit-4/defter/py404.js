/* Kitora not defteri · py404 · 4.4 Psikodinamik ve Hümanistik Kişilik Kuramları
   Kaynak: College Board CED, Topic 4.4 (4.4.A, 4.4.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py404",
  amac: "Bu konu kişiliği açıklayan iki büyük kuramı anlatıyor. Psikodinamik kuram kişiliği bilinçdışı süreçlerle, hümanistik kuram koşulsuz kabul ve kendini gerçekleştirme eğilimiyle açıklar. Savunma mekanizmalarını, projektif testleri ve bu iki bakışın farkını öğreneceksin.",
  bolumler: [
    {
      baslik: "Psikodinamik bakış: bilinçdışı yönlendirir",
      kisa: "Psikodinamik kuram kişiliği büyük ölçüde bilinçdışı süreçlerin yönlendirdiğini söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧊", terim: "Psychodynamic theory", tr: "psikodinamik kuram", tanim: "Davranışın ve kişiliğin temelinde farkında olmadığımız süreçlerin yattığını öne süren yaklaşım (Freud).", ornek: "Sebepsiz bir korkunun bilinçdışı bir çatışmadan gelebileceği düşüncesi." },
            { ikon: "🔥", terim: "Id", tr: "id (alt benlik)", tanim: "İçgüdüsel dürtüler; hemen tatmin ister (haz ilkesi).", ornek: "\"Şu pastayı şimdi yemek istiyorum.\"" },
            { ikon: "🧠", terim: "Ego", tr: "ego (benlik)", tanim: "Gerçekliği gözeten dengeleyici; id ile süperego arasında arabuluculuk eder (gerçeklik ilkesi).", ornek: "\"Önce ödevi bitirip sonra yiyeyim.\"" },
            { ikon: "⚖️", terim: "Superego", tr: "süperego (üst benlik)", tanim: "İçselleştirilmiş ahlak kuralları ve vicdan.", ornek: "\"Başkasının pastasını yemek yanlış.\"" }
          ] },
        { tip: "grafik", baslik: "Zihin bir buzdağı gibidir", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "su", tip: "cizgi", renk: 3, kesik: true, from: [0.5, 5], to: [9.5, 5] },
            { id: "u1", tip: "alan", renk: 0, noktalar: [[4, 5], [5, 8], [6, 5]], gizli: true },
            { id: "u2", tip: "alan", renk: 1, noktalar: [[3.6, 5], [6.4, 5], [6.6, 3.8], [3.4, 3.8]], gizli: true },
            { id: "u3", tip: "alan", renk: 2, noktalar: [[3.4, 3.8], [6.6, 3.8], [7.8, 1.8], [5, 0.4], [2.2, 1.8]], gizli: true },
            { id: "y1", tip: "yazi", x: 6.5, y: 6.2, metin: "bilinçli", hiza: "start", gizli: true },
            { id: "y2", tip: "yazi", x: 6.9, y: 4.2, metin: "bilinç öncesi", hiza: "start", gizli: true },
            { id: "y3", tip: "yazi", x: 5, y: 2.1, metin: "bilinçdışı", gizli: true }
          ],
          durumlar: [
            { metin: "Suyun üstündeki küçük uç **bilinçli** düşüncelerimizdir: şu an farkında olduklarımız.", goster: ["su", "u1", "y1"] },
            { metin: "Hemen altında **bilinç öncesi** (*preconscious*) var: şu an farkında değilsin ama çaba harcamadan çağırabilirsin (ör. telefon numaran).", goster: ["u2", "y2"] },
            { metin: "Dipteki devasa kısım **bilinçdışı** (*unconscious*): dürtüler, bastırılmış anılar. ==Kişiliği esas olarak bu kısım yönlendirir.==", goster: ["u3", "y3"] }
          ] },
        { tip: "not", metin: "Psikoseksüel gelişim evreleri AP Psychology sınavının kapsamı dışındadır; sınavda id, ego, süperego ve bilinçdışı kavramlarını bilmen yeterlidir." }
      ]
    },
    {
      baslik: "Savunma mekanizmaları: ego'yu korumak",
      kisa: "Ego, kaygı veren tehditlerden bilinçsizce savunma mekanizmalarıyla korunur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🙈", terim: "Repression", tr: "bastırma", tanim: "Tehdit eden düşünce ya da anıları bilinçsizce bilinçten dışarı itmek.", ornek: "Utanç verici bir sunumu bütünüyle hatırlamamak." },
            { ikon: "🚫", terim: "Denial", tr: "inkâr", tanim: "Rahatsız edici bir gerçeği kabul etmeyi reddetmek.", ornek: "Kötü not açıklanınca \"listede hata var\" demek." },
            { ikon: "👉", terim: "Projection", tr: "yansıtma", tanim: "Kendi kabul edilemez duygu ya da dürtülerini başkasına atfetmek.", ornek: "Kendi kızgın biri: \"Sen bana kızgınsın.\"" },
            { ikon: "↪️", terim: "Displacement", tr: "yer değiştirme", tanim: "Dürtüyü asıl hedeften daha güvenli bir hedefe yöneltmek.", ornek: "Hocadan azar yiyip evde kardeşine bağırmak." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📝", terim: "Rationalization", tr: "mantığa bürüme", tanim: "Rahatsız edici bir davranışa kabul edilebilir bir gerekçe uydurmak.", ornek: "Takıma seçilememe: \"Zaten antrenman saatleri bana uymuyordu.\"" },
            { ikon: "🔄", terim: "Reaction formation", tr: "karşıt tepki oluşturma", tanim: "Kabul edilemez duygunun tam tersini aşırı biçimde sergilemek.", ornek: "Sevmediği komşuya aşırı nazik davranmak." },
            { ikon: "🧸", terim: "Regression", tr: "gerileme", tanim: "Stres altında daha erken bir gelişim dönemindeki davranışa dönmek.", ornek: "Sınav öncesi bir yetişkinin battaniyesine sarılıp çocuk gibi davranması." },
            { ikon: "🎨", terim: "Sublimation", tr: "yüceltme", tanim: "Kabul edilemez dürtüyü toplumca kabul gören, yapıcı bir etkinliğe yöneltmek.", ornek: "Öfkeyi boks antrenmanına ya da resme dökmek." }
          ] }
      ]
    },
    {
      baslik: "Savunma mekanizmalarını ayırt etmek",
      kisa: "Her mekanizmanın anahtar sözcüğü vardır; sınav senaryosunda onu ara.",
      bloklar: [
        { tip: "tablo", baslik: "Sekiz mekanizma, sekiz anahtar", head: ["Mekanizma", "Anahtar"], rows: [
            ["*Repression*", "Unutmuş gibi bastırır"],
            ["*Denial*", "Gerçeği kabul etmez"],
            ["*Projection*", "Kendi duygusunu başkasında görür"],
            ["*Displacement*", "Aynı duygu, başka hedef"],
            ["*Rationalization*", "Makul görünen bahane"],
            ["*Reaction formation*", "Duygunun tam tersi davranış"],
            ["*Regression*", "Çocuksu davranışa dönüş"],
            ["*Sublimation*", "Yapıcı, kabul gören yol"]
          ] },
        { tip: "ikili", sol: { ikon: "↪️", baslik: "*Displacement*", maddeler: ["Duygu doğru ama hedef yanlış", "Güvenli bir hedefe yöneltilir"] },
          sag: { ikon: "👉", baslik: "*Projection*", maddeler: ["Kendi duygusunu başkasına atfeder", "Kişi duygusu olduğunu bilmez"] },
          oyun: [
            { metin: "Hocadan azar yiyen öğrenci eve gidince kardeşine bağırdı.", cevap: "sol", neden: "Öfke yönü değişti: yer değiştirme." },
            { metin: "Kendi hasetli biri: \"Herkes bana haset ediyor.\"", cevap: "sag", neden: "Kendi duygusunu başkalarına atfediyor: yansıtma." },
            { metin: "Patronuna kızan çalışan, öfkesini bir kapıya vurarak çıkardı.", cevap: "sol", neden: "Öfke daha güvenli bir hedefe yöneldi: yer değiştirme." },
            { metin: "Kendi yalan söyleyen biri: \"Sen yalan söylüyorsun.\"", cevap: "sag", neden: "Kendi dürtüsünü karşısındakine atfediyor: yansıtma." }
          ] },
        { tip: "tuzak", metin: "İkisi de \"bilinçdışı unutuş\" gibi görünebilir; farkı bak.", yanlis: "*Repression* ve *denial* aynıdır; ikisi de unutmaktır.", dogru: "==*Repression* anıyı ya da düşünceyi bilinçten iter (unutmuş olur).== ==*Denial* ise gerçeğin kendisini kabul etmez.==" }
      ]
    },
    {
      baslik: "Projektif testler: belirsizden bilinçdışına",
      kisa: "Projektif testler belirsiz uyaranlara verilen yanıttan bilinçdışını yoklamayı amaçlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🖌️", terim: "Projective test", tr: "projektif test", tanim: "Belirsiz bir uyaran gösterip kişinin yanıtından bilinç öncesi ve bilinçdışı düşünceleri anlamaya çalışan ölçme aracı.", ornek: "Mürekkep lekesinde ne gördüğünü anlatmak." },
            { ikon: "💧", terim: "Rorschach inkblot test", tr: "Rorschach mürekkep lekesi testi", tanim: "Simetrik mürekkep lekelerine verilen yanıtlar yorumlanır.", ornek: "\"Bu leke bana iki dans eden insanı anımsatıyor.\"" },
            { ikon: "🖼️", terim: "Thematic Apperception Test (TAT)", tr: "Tematik Algı Testi", tanim: "Belirsiz resimlere bakıp hikâye uydurmak; hikâyede kişinin kaygıları ve istekleri aranır.", ornek: "Bir resimde duran iki kişiyi anlatan hikâye." }
          ] },
        { tip: "tuzak", metin: "Projektif testler eleştirilir: yorumlar öznel olabilir, güvenilirlik ve geçerlilik düşük bulunmuştur.", yanlis: "*Projective test*, *projection* savunma mekanizması demektir.", dogru: "==*Projective test* bir ölçme aracıdır;== *projection* ise bir savunma mekanizmasıdır. İsimleri benzer, anlamları farklıdır." }
      ]
    },
    {
      baslik: "Hümanistik bakış: koşulsuz kabul ve büyüme",
      kisa: "Hümanistik kuram, kişinin büyümeye yönelik içsel eğilimini ve koşulsuz kabulü esas alır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌱", terim: "Self-actualizing tendency", tr: "kendini gerçekleştirme eğilimi", tanim: "Kişinin potansiyelini en üst düzeyde gerçekleştirmeye yönelik içsel itkisi. Hümanistik psikolojide temel güdüdür.", ornek: "Resme ilgi duyan birinin kendini sürekli geliştirmesi." },
            { ikon: "🤗", terim: "Unconditional positive regard", tr: "koşulsuz olumlu saygı", tanim: "Bir kişiyi nasıl davranırsa davransın olduğu gibi kabul etmek (Rogers). Güvenli bir ortam sağlar.", ornek: "Kötü not alan çocuğa \"Seni yine de seviyorum\" demek." },
            { ikon: "🪞", terim: "Self-concept", tr: "benlik kavramı", tanim: "Kişinin kendini nasıl gördüğü: gerçek benlik ile ideal benlik arasında fark olabilir.", ornek: "\"Gerçekte sakarım ama organize biri olmak isterim.\"" }
          ] },
        { tip: "ikili", sol: { ikon: "🤗", baslik: "Koşulsuz saygı", maddeler: ["Değer, başarıdan bağımsız", "Kişi kendi gibi olmaya cesaret eder"] },
          sag: { ikon: "🏅", baslik: "Koşullu saygı", maddeler: ["Değer, başarıya ve beklentiye bağlı", "Kişi sevilmek için kendini değiştirir"] },
          oyun: [
            { metin: "\"Ne not alırsan al, senin için buradayım.\"", cevap: "sol", neden: "Kabul, koşula bağlı değil: koşulsuz." },
            { metin: "\"Sadece birinci olursan seni severim.\"", cevap: "sag", neden: "Sevgi başarıya şart koşuluyor: koşullu." },
            { metin: "Terapist, danışanı yargılamadan, olduğu gibi dinliyor.", cevap: "sol", neden: "Danışanın değeri sorgulanmıyor: koşulsuz." }
          ] },
        { tip: "grafik", baslik: "Gerçek benlik ile ideal benlik arasındaki boşluk", xlabel: "", ylabel: "Benlik düzeyi", xmax: 6, ymax: 10,
          ogeler: [
            { id: "g", tip: "alan", renk: 0, noktalar: [[1.2, 0], [2.2, 0], [2.2, 3.5], [1.2, 3.5]] },
            { id: "i", tip: "alan", renk: 2, noktalar: [[3.8, 0], [4.8, 0], [4.8, 8], [3.8, 8]] },
            { id: "yg", tip: "yazi", x: 1.7, y: 4.2, metin: "Gerçek benlik", gizli: true },
            { id: "yi", tip: "yazi", x: 4.3, y: 8.7, metin: "İdeal benlik", gizli: true },
            { id: "ok", tip: "ok", renk: 3, from: [2.6, 6], to: [3.4, 6], gizli: true }
          ],
          durumlar: [
            { metin: "Gerçek benlik (kendini nasıl gördüğü) ile ideal benlik (nasıl olmak istediği) arasında büyük bir boşluk var.", goster: ["yg", "yi", "ok"] },
            { metin: "Koşullu saygı gören kişi ideal benliğini daha da yükseltir; boşluk büyür ve huzursuzluk artar.", set: { i: { noktalar: [[3.8, 0], [4.8, 0], [4.8, 8.8], [3.8, 8.8]] }, yi: { y: 9.5 } } },
            { metin: "Koşulsuz olumlu saygı gören kişi kendini kabul eder: gerçek benlik yükselir, boşluk ==daralır==.", set: { g: { noktalar: [[1.2, 0], [2.2, 0], [2.2, 6.5], [1.2, 6.5]] }, i: { noktalar: [[3.8, 0], [4.8, 0], [4.8, 7.5], [3.8, 7.5]] }, yg: { y: 7.2 }, yi: { y: 8.2 } } }
          ] }
      ]
    },
    {
      baslik: "Maslow'un ihtiyaçlar basamağı (sınav dışı)",
      kisa: "Maslow, temel ihtiyaçlar karşılandıkça üst ihtiyaçların öne çıktığını önerir.",
      bloklar: [
        { tip: "grafik", baslik: "Maslow'un ihtiyaçlar piramidi", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "p1", tip: "alan", renk: 1, noktalar: [[1, 0], [9, 0], [8.2, 1.8], [1.8, 1.8]], gizli: true },
            { id: "p2", tip: "alan", renk: 1, noktalar: [[1.8, 1.8], [8.2, 1.8], [7.4, 3.6], [2.6, 3.6]], gizli: true },
            { id: "p3", tip: "alan", renk: 3, noktalar: [[2.6, 3.6], [7.4, 3.6], [6.6, 5.4], [3.4, 5.4]], gizli: true },
            { id: "p4", tip: "alan", renk: 0, noktalar: [[3.4, 5.4], [6.6, 5.4], [5.8, 7.2], [4.2, 7.2]], gizli: true },
            { id: "p5", tip: "alan", renk: 2, noktalar: [[4.2, 7.2], [5.8, 7.2], [5, 9]], gizli: true },
            { id: "y1", tip: "yazi", x: 5, y: 0.7, metin: "Fizyolojik: yemek, uyku", gizli: true },
            { id: "y2", tip: "yazi", x: 5, y: 2.5, metin: "Güvenlik, sağlık", gizli: true },
            { id: "y3", tip: "yazi", x: 5, y: 4.3, metin: "Ait olma ve sevgi", gizli: true },
            { id: "y4", tip: "yazi", x: 5, y: 6.1, metin: "Saygı", gizli: true },
            { id: "y5", tip: "yazi", x: 6.2, y: 8.5, metin: "Kendini", hiza: "start", gizli: true },
            { id: "y6", tip: "yazi", x: 6.2, y: 7.7, metin: "gerçekleştirme", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Tabanda **fizyolojik** ihtiyaçlar: yemek, su, uyku.", goster: ["p1", "y1"] },
            { metin: "Sonra **güvenlik**: güvenli bir yer, sağlık.", goster: ["p2", "y2"] },
            { metin: "Ardından **ait olma ve sevgi**: arkadaşlar, aile.", goster: ["p3", "y3"] },
            { metin: "Sonra **saygı**: başarı, takdir edilme.", goster: ["p4", "y4"] },
            { metin: "Tepede **kendini gerçekleştirme**: potansiyelini yaşamak. Alt basamaklar karşılandıkça üst basamaklar öne çıkar.", goster: ["p5", "y5", "y6"] }
          ] },
        { tip: "not", metin: "Maslow'un basamaklarının sınav kapsamı dışında olduğunu hatırla. CED'in hümanistik kişilik için sınavda aradığı kavramlar ==koşulsuz saygı== ve ==kendini gerçekleştirme eğilimi==dir." }
      ]
    },
    {
      baslik: "İki bakışı karşılaştır",
      kisa: "Psikodinamik geçmiş çatışmalara, hümanistik büyüme ve kabule bakar.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧊", baslik: "Psikodinamik", maddeler: ["Bilinçdışı çatışmalar, savunmalar", "Projektif testlerle yoklanır"] },
          sag: { ikon: "🌱", baslik: "Hümanistik", maddeler: ["Büyüme, kendini gerçekleştirme, kabul", "Benlik kavramı, öz-bildirim ve görüşme"] },
          oyun: [
            { metin: "\"Bu korku, çocuklukta bastırılmış bir çatışmadan geliyor olabilir.\"", cevap: "sol", neden: "Bilinçdışı çatışma vurgusu: psikodinamik." },
            { metin: "\"Önemli olan kişinin kendini kabul edebileceği güvenli bir ilişki.\"", cevap: "sag", neden: "Kabul ve büyüme: hümanistik." },
            { metin: "Belirsiz resimlere uydurulan hikâyelerden kaygı aranıyor.", cevap: "sol", neden: "Projektif test: psikodinamik." },
            { metin: "\"İnsanlar doğal olarak potansiyellerini gerçekleştirmeye yönelir.\"", cevap: "sag", neden: "Kendini gerçekleştirme eğilimi: hümanistik." }
          ] },
        { tip: "tuzak", metin: "İki kuram da kişiliği içsel süreçle açıklar, ama içsel süreç farklıdır.", yanlis: "Hümanistik kuram da bilinçdışı çatışmaları ve savunma mekanizmalarını temel alır.", dogru: "Savunma mekanizmaları ve projektif testler ==psikodinamik==, koşulsuz saygı ve kendini gerçekleştirme eğilimi ==hümanistik== kurama aittir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Psikodinamik kuram: kişiliği büyük ölçüde *unconscious* süreçler yönlendirir; id, ego, süperego.",
            "Ego, savunma mekanizmalarıyla bilinçsizce korunur: *repression*, *denial*, *projection*, *displacement*, *rationalization*, *reaction formation*, *regression*, *sublimation*.",
            "*Repression* anıyı bastırır; *denial* gerçeği kabul etmez; *displacement* hedefi değiştirir, *projection* duyguyu başkasına atfeder.",
            "*Projective tests* (*Rorschach*, *TAT*) belirsiz uyaranlar kullanarak bilinçdışını yoklamayı amaçlar; güvenilirlikleri eleştirilir.",
            "Hümanistik kuram: temel güdüler *self-actualizing tendency* ve *unconditional positive regard*.",
            "Gerçek benlik ile ideal benlik arasındaki boşluk huzursuzluk yaratır; koşulsuz saygı boşluğu daraltır.",
            "Maslow'un ihtiyaçlar basamağı ve psikoseksüel evreler sınav kapsamı dışıdır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Kaan, matematik öğretmeninden azar yedikten sonra eve gidip küçük kardeşine bağırıyor. Bu davranış hangi savunma mekanizmasına en iyi örnektir?",
      opts: ["*Projection*", "*Displacement*", "*Reaction formation*", "*Sublimation*"],
      a: 1,
      why: "Öfke asıl hedeften (öğretmen) daha güvenli bir hedefe (kardeş) yöneliyor: *displacement*. En çekici yanlış şık A: yansıtmada kişi kendi duygusunu başkasına atfeder; burada öfke gerçekten Kaan'a ait ve doğrudan dışa vuruluyor." },
    { q: "Mina, hiç hoşlanmadığı komşusuna sürekli hediyeler alıyor ve ona aşırı nazik davranıyor. Bu davranış hangi savunma mekanizmasını en iyi örnekler?",
      opts: ["*Denial*", "*Rationalization*", "*Regression*", "*Reaction formation*"],
      a: 3,
      why: "Kabul edilemez duygunun (hoşlanmama) tam tersini aşırı biçimde sergilemek *reaction formation*'dır. En çekici yanlış şık B: mantığa bürümede kişi bir gerekçe uydurur; burada gerekçe yok, duygunun karşıtı sergileniyor." },
    { q: "Bir psikolog, danışanına belirsiz şekilli simetrik mürekkep lekeleri gösterip her birinde ne gördüğünü soruyor. Amaç, danışanın bilinçdışı düşünce ve çatışmalarını yoklamaktır. Bu uygulama hangi yaklaşımla en uyumludur?",
      opts: ["Psikodinamik yaklaşım; *projective test* kullanır", "Hümanistik yaklaşım; *unconditional positive regard* sağlar", "Hümanistik yaklaşım; *self-actualizing tendency*'i ölçer", "Psikodinamik yaklaşım; *reaction formation*'ı ölçer"],
      a: 0,
      why: "Belirsiz uyaranlarla bilinçdışını yoklamak psikodinamik yaklaşımın projektif testleridir. En çekici yanlış şık D: aynı yaklaşımı verir ama test bir savunma mekanizmasını ölçmez; belirsiz yanıtlardan bilinçdışı içerik yorumlanır." },
    { q: "Aşağıdaki tabloda bir danışanın, terapistinin yargılamadan olduğu gibi kabul etmesi sürecinden önce ve sonra benlik puanları görülüyor. Rogers'ın görüşüne göre bu değişimi en iyi hangisi açıklar?",
      fig: { type: "table", caption: "Benlik puanı (10 üzerinden)", head: ["Dönem", "Gerçek benlik", "İdeal benlik"], rows: [["Süreçten önce", "4", "9"], ["Süreçten sonra", "7", "8"]] },
      opts: ["*Projection*", "*Social loafing*", "*Unconditional positive regard*", "*Regression*"],
      a: 2,
      why: "Koşulsuz kabul gören kişi kendini daha olumlu görür; gerçek ve ideal benlik arasındaki boşluk 5'ten 1'e daralıyor. En çekici yanlış şık A: yansıtma, kişinin kendi duygusunu başkasına atfetmesidir ve boşluğun daralmasını açıklamaz." },
    { q: "Bir hasta doktoru kendisine ciddi bir hastalık teşhisi koyduğunda \"Hayır, bir yanlışlık olmalı, ben hasta değilim\" diyor ve tedaviyi reddediyor. Bu durum en iyi hangi savunma mekanizmasıdır?",
      opts: ["*Repression*", "*Denial*", "*Sublimation*", "*Regression*"],
      a: 1,
      why: "Gerçeği kabul etmeyi reddetmek *denial*'dır. En çekici yanlış şık A: *repression* düşünceyi bilinçten dışarı iter (unutulmuş gibi olur); burada kişi gerçeği biliyor ve reddediyor." }
  ]
};
