/* Kitora not defteri · py309 · 3.9 Öğrenmede Sosyal, Bilişsel ve Nörolojik Etkenler
   Kaynak: AP Psychology CED (2024) Topic 3.9. Blok türleri: /ap/_kit/defter.js başı.
   Not: öğrenilmiş çaresizlik py308'de; burada örtük öğrenme ve ayna nöronlar CED'in başlığındaki "nörolojik etkenler" için kısa eklenmiştir.
   Grafiklerdeki eğriler şematiktir (genel örüntüyü gösterir). */
window.DEFTER = {
  slug: "py309",
  amac: "Bu konu, öğrenmenin yalnızca ödül ve cezayla olmadığını gösteriyor. Başkalarını izleyerek öğrenmeyi (Bandura), içgörüyü, gizli öğrenmeyi ve zihinsel haritayı, ayrıca örtük öğrenmeyi öğrenecek, hepsini klasik ve edimsel koşullanmayla karşılaştıracaksın.",
  bolumler: [
    {
      baslik: "Sosyal öğrenme: izleyerek öğrenmek",
      kisa: "Başkalarını izleyerek öğrenebiliriz; sonucu bizzat yaşamak şart değildir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👀", terim: "Observational learning", tr: "gözlemsel öğrenme", tanim: "Başka birinin davranışını ve sonuçlarını izleyerek öğrenme. Bandura'nın sosyal öğrenme kuramının temelidir.", ornek: "Bir çocuğun, ağabeyinin bisiklete binişini izleyerek öğrenmesi." },
            { ikon: "🧑‍🏫", terim: "Modeling", tr: "model alma", tanim: "Bir modelin davranışını kopyalamak.", ornek: "Öğrencinin, sevdiği öğretmenin konuşma tarzını taklit etmesi." },
            { ikon: "🔁", terim: "Vicarious conditioning", tr: "dolaylı koşullanma", tanim: "Bir modelin davranışının pekiştirildiğini ya da cezalandırıldığını izleyerek, kendin yaşamadan öğrenmek.", ornek: "Arkadaşının ödül kazandığını görüp aynı davranışı yapmak." }
          ] },
        { tip: "adimlar", baslik: "Bandura'nın Bobo bebek deneyi", adimlar: [
            { baslik: "Gruplar", metin: "Çocukların bir kısmı saldırgan bir modeli, bir kısmı saldırgan olmayan bir modeli izler; bir grupta model yoktur." },
            { baslik: "Model", metin: "Saldırgan model şişme Bobo bebeğe vurur, tekmeler ve bağırır." },
            { baslik: "Oyun odası", metin: "Çocuklar aynı bebek ve oyuncakların olduğu odada yalnız bırakılır ve gözlenir." },
            { baslik: "Sonuç", metin: "Saldırgan modeli izleyen çocuklar, modelin davranışlarını ve sözlerini ==aynen taklit etti==. Kimse onları ödüllendirmedi: öğrenme gözlemle gerçekleşti." }
          ] },
        { tip: "tuzak", metin: "Öğrenme ile sergileme arasında fark vardır: izleyen kişi öğrendiği davranışı hemen yapmayabilir.", yanlis: "Bir davranışı öğrenmek için kişinin onu bizzat yapıp pekiştirilmesi gerekir.", dogru: "*Observational learning* ==doğrudan sonuç yaşamadan== gerçekleşir; öğrenilen her şey hemen sergilenmez." }
      ]
    },
    {
      baslik: "Model, gözlemci ve dolaylı pekiştirme",
      kisa: "Model benzer, saygın ya da ödüllendirilen biriyse davranış daha çok kopyalanır.",
      bloklar: [
        { tip: "harita", merkez: "Gözlemle öğrenmenin dört süreci", dallar: [
            { baslik: "Dikkat", alt: "Modeli fark etmek ve izlemek" },
            { baslik: "Hatırlama", alt: "Gördüklerini zihinde tutmak" },
            { baslik: "Yeniden üretme", alt: "Davranışı yapabilecek beceriye sahip olmak" },
            { baslik: "Motivasyon", alt: "Davranışı sergilemek için neden ya da beklenti" }
          ] },
        { tip: "ikili", sol: { ikon: "🏆", baslik: "*Vicarious reinforcement*", maddeler: ["Modelin ödüllendirildiği izlenir", "Davranışı kopyalama artar"] },
          sag: { ikon: "🚫", baslik: "*Vicarious punishment*", maddeler: ["Modelin cezalandırıldığı izlenir", "Davranışı kopyalama azalır"] },
          oyun: [
            { metin: "Ağabeyinin düzenli antrenmanla takıma girdiğini gören kardeş de antrenmana başlıyor.", cevap: "sol", neden: "Modelin ödüllendiğini izleyip davranışı kopyalıyor: *vicarious reinforcement*." },
            { metin: "Sınıf arkadaşının kopya çekerken yakalanıp ceza aldığını gören Can, kopya çekmekten vazgeçiyor.", cevap: "sag", neden: "Modelin cezasını izleyip davranıştan kaçınıyor: *vicarious punishment*." },
            { metin: "Bir videoda cesurca konuşma yapan kişinin alkışlandığını izleyen Ece, sunum yapmaya gönüllü oluyor.", cevap: "sol", neden: "İzlediği ödül davranışı artırıyor: *vicarious reinforcement*." },
            { metin: "Kardeşinin duvara çizim yapıp azar işittiğini gören çocuk çizim yapmıyor.", cevap: "sag", neden: "Modelin cezası davranışı azaltıyor: *vicarious punishment*." }
          ] },
        { tip: "not", metin: "Model ne kadar ==benzerse== (yaş, cinsiyet, ilgi alanı) davranışının öğrenilme olasılığı o kadar yüksektir. Bu yüzden çocuklar kendilerine benzeyen akranlarını ve medya kahramanlarını model alır." }
      ]
    },
    {
      baslik: "Örtük öğrenme ve ayna nöronlar",
      kisa: "Bazı şeyleri farkında olmadan, açıkça çaba göstermeden öğreniriz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌫️", terim: "Implicit learning", tr: "örtük öğrenme", tanim: "Ne öğrendiğinin ya da öğrendiğinin farkında olmadan, çaba göstermeden bilgi edinme.", ornek: "Anadilindeki dil bilgisi kurallarını anlatamayıp doğru kullanmak; bisiklet sürmek." },
            { ikon: "🪞", terim: "Mirror neurons", tr: "ayna nöronlar", tanim: "Hem bir eylemi yaparken hem başkasının aynı eylemi yaptığını izlerken ateşlenen nöronlar. Gözlemsel öğrenmenin olası nörolojik temeli olarak tartışılır.", ornek: "İlk olarak makak maymunlarında bulundu; insanlardaki rolü hâlâ araştırılıyor." }
          ] },
        { tip: "ikili", sol: { ikon: "🌫️", baslik: "Örtük (*implicit*)", maddeler: ["Farkında olmadan, çabasız", "Nasıl yaptığını anlatmakta zorlanırsın"] },
          sag: { ikon: "🎓", baslik: "Açık (*explicit*)", maddeler: ["Farkında olarak, bilinçli çabayla", "Ne öğrendiğini söyleyebilirsin"] },
          oyun: [
            { metin: "Mert bisiklet sürmeyi nasıl yaptığını açıklayamıyor ama sürebiliyor.", cevap: "sol", neden: "Farkında olmadan kazanılmış beceri: örtük." },
            { metin: "Ece sürücü kursunda vites kurallarını ezberliyor.", cevap: "sag", neden: "Bilinçli çabayla kural öğrenme: açık." },
            { metin: "Bir çocuk Türkçedeki ünlü uyumunu hiç öğretilmeden doğru kullanıyor.", cevap: "sol", neden: "Kuralı bilmeden kullanıyor: örtük." },
            { metin: "Öğrenci formülü ezberleyip sınavda yazıyor.", cevap: "sag", neden: "Bilinçli, ezberlenen bilgi: açık." }
          ] }
      ]
    },
    {
      baslik: "İçgörü öğrenmesi: “aha!”",
      kisa: "İçgörüde çözüm, çağrışım, sonuç ya da model olmadan ani gelir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Insight learning", tr: "içgörü öğrenmesi", tanim: "Çözümün, herhangi bir çağrışım, sonuç ya da model olmadan ani bir kavrayışla ortaya çıkması.", ornek: "Köhler'in şempanzesi kutuları üst üste koyup tavandaki muzu alır." }
          ] },
        { tip: "adimlar", baslik: "Köhler'in şempanzesi", adimlar: [
            { baslik: "Problem", metin: "Muz tavana asılı, el yetişmiyor; kafeste birkaç kutu ve sopa var." },
            { baslik: "Duraksama", metin: "Şempanze bir süre rastgele denemeler yapmaz; durup etrafına bakar." },
            { baslik: "“Aha!”", metin: "Birden kutuları üst üste dizer ve muza uzanır." },
            { baslik: "Sonuç", metin: "Çözümü sonraki denemelerde hemen uygular." }
          ] },
        { tip: "grafik", baslik: "Deneme-yanılma ile içgörü farkı (şematik)", xlabel: "Zaman / denemeler", ylabel: "Çözüme yakınlık", xmax: 10, ymax: 10,
          ogeler: [
            { id: "dene", tip: "egri", renk: 0, noktalar: [[0, 1], [2, 2], [4, 3.5], [6, 5], [8, 6.3], [10, 7.5]], etiket: "Deneme-yanılma" },
            { id: "ic", tip: "egri", renk: 1, noktalar: [[0, 1], [1, 1.1], [2, 1], [3, 1.1], [4, 1.2], [5, 1.1], [5.3, 8.8], [7, 9.3], [10, 9.5]], etiket: "İçgörü", gizli: true },
            { id: "aha", tip: "yazi", x: 5.3, y: 9.9, metin: "Aha!", gizli: true }
          ],
          durumlar: [
            { metin: "**Deneme-yanılma** (edimsel öğrenme): performans yavaş yavaş, denemeyle artar." },
            { metin: "**İçgörü**: uzun süre belirgin bir ilerleme yok; sonra ==ani sıçrama== (“aha!”). Çözüm birden kavranır ve sonra hemen tekrarlanır.", goster: ["ic", "aha"] }
          ] }
      ]
    },
    {
      baslik: "Gizli öğrenme ve zihinsel harita",
      kisa: "Gizli öğrenme ödül olmadan gerçekleşir, ödül gelince ortaya çıkar.",
      bloklar: [
        { tip: "grafik", baslik: "Tolman ve Honzik'in sıçanları (şematik)", xlabel: "Gün", ylabel: "Hatalı dönüş", xmax: 18, ymax: 10,
          xticks: [{ v: 1, label: "1" }, { v: 5, label: "5" }, { v: 11, label: "11" }, { v: 15, label: "15" }],
          ogeler: [
            { id: "hic", tip: "egri", renk: 1, noktalar: [[1, 9], [3, 8.5], [5, 7.6], [8, 7.2], [11, 6.8], [17, 6.2]], etiket: "Ödül yok" },
            { id: "her", tip: "egri", renk: 0, noktalar: [[1, 9], [3, 7.5], [5, 5.5], [8, 4], [11, 3.5], [17, 2.8]], etiket: "Hep ödül", gizli: true },
            { id: "gec", tip: "egri", renk: 2, noktalar: [[1, 9], [3, 8.3], [5, 7.3], [8, 6.8], [11, 6.3], [12, 3.9], [14, 3.8], [17, 3.6]], etiket: "11. günden", gizli: true },
            { id: "y11", tip: "yazi", x: 11, y: 9.2, metin: "Ödül başladı", gizli: true }
          ],
          durumlar: [
            { metin: "**Ödül hiç verilmeyen** sıçanlar labirentte dolaşır; hatalı dönüş sayıları yavaşça azalır ama yüksek kalır." },
            { metin: "**Her gün ödül** alan grup hızla öğrenir: hata sayısı belirgin biçimde düşer.", goster: ["her"] },
            { metin: "**11. günden** itibaren ödül alan grup başta ödülsüz grup gibi görünür; ödül gelince ==hata sayısı birden düşer== ve hep ödül alan gruba yetişir.", goster: ["gec", "y11"] },
            { metin: "Demek ki üçüncü grup, ödülsüz günlerde de labirenti öğrenmişti; ödül konmadan yalnızca sergilemiyordu. Bu ==*latent learning*==dir.", goster: ["gec", "y11"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🕰️", terim: "Latent learning", tr: "gizli öğrenme", tanim: "Pekiştirme olmadan gerçekleşen, ama ödül ya da ihtiyaç ortaya çıkana kadar fark edilmeyen öğrenme.", ornek: "Her gün okul yolunu yürüyen öğrencinin, kısa yol gerektiğinde bir anda yolu bilmesi." },
            { ikon: "🗺️", terim: "Cognitive map", tr: "zihinsel harita", tanim: "Çevrenin düzenine dair zihinsel bir temsil. Gizli öğrenme çoğu zaman bu haritalarla gösterilir.", ornek: "Okulun koridorlarını gözün kapalıyken bile tarif edebilmek." }
          ] },
        { tip: "ikili", sol: { ikon: "💡", baslik: "*Insight learning*", maddeler: ["Çözüm ani bir kavrayışla gelir", "Problem çözme anında görünür"] },
          sag: { ikon: "🕰️", baslik: "*Latent learning*", maddeler: ["Öğrenme gizli kalır, sonra ortaya çıkar", "Ödül ya da ihtiyaç gelince sergilenir"] },
          oyun: [
            { metin: "Şempanze kutuları üst üste dizerek tavandaki muzu alıyor.", cevap: "sol", neden: "Ani kavrayışla çözüm: içgörü." },
            { metin: "Öğrenci okul yolunu hiç ödülsüz öğrenmiş; arkadaşı “kısa yol nerede?” deyince birden gösteriyor.", cevap: "sag", neden: "Öğrenme gizliydi, ihtiyaç doğunca ortaya çıktı: gizli öğrenme." },
            { metin: "Çocuk bulmacaya uzun süre bakıp bir anda “buldum!” diyerek çözüyor.", cevap: "sol", neden: "“Aha!” anı: içgörü." },
            { metin: "Sıçanlar labirenti ödülsüz dolaşıyor; yemek konunca hemen kısa yoldan gidiyor.", cevap: "sag", neden: "Önceden öğrenmişler, ödül konunca sergilediler: gizli öğrenme." }
          ] }
      ]
    },
    {
      baslik: "Öğrenme türlerini karşılaştır",
      kisa: "Klasik ve edimsel çağrışımla; sosyal, içgörü ve gizli öğrenme bilişsel süreçlerle öğrenir.",
      bloklar: [
        { tip: "tablo", baslik: "Altı öğrenme türü, bir arada", head: ["Tür", "Ne öğrenilir?", "Anahtar fikir", "İsim"], rows: [
            ["*Classical conditioning*", "İki uyaran arasındaki ilişki", "NS/UCS/UCR/CS/CR", "Pavlov"],
            ["*Operant conditioning*", "Davranış ile sonuç arasındaki ilişki", "Pekiştirme ve ceza", "Thorndike, Skinner"],
            ["*Observational learning*", "Başkasını izleyerek davranış", "Model, dolaylı pekiştirme", "Bandura"],
            ["*Insight learning*", "Ani çözüm", "“Aha!”", "Köhler"],
            ["*Latent learning*", "Ödülsüz öğrenme, sonra sergileme", "Zihinsel harita", "Tolman"],
            ["*Implicit learning*", "Farkında olmadan edinilen bilgi", "Çabasız, anlatılamaz", "—"]
          ] },
        { tip: "tuzak", metin: "Senaryolarda anahtar sözcükleri ara: “izledi/model” sosyal; “aniden buldu” içgörü; “ödül gelince ortaya çıktı” gizli; “ödül/ceza” edimsel; “iki uyaran eşleşti” klasik.", yanlis: "Bir çocuğun daha önce hiç ödül almadan, yalnızca izleyerek bir davranışı öğrenmesi edimsel koşullanmadır.", dogru: "Doğrudan sonuç yaşanmadan, model izlenerek öğrenmek ==sosyal (gözlemsel) öğrenmedir==; edimsel koşullanmada kişi davranışın sonucunu ==kendisi== yaşar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sosyal öğrenme (Bandura): izleyerek ve model alarak öğrenme; doğrudan sonuç yaşamak gerekmez (*vicarious conditioning*).",
            "Model ne kadar benzerse davranış o kadar çok kopyalanır; dolaylı pekiştirme kopyalamayı artırır, dolaylı ceza azaltır.",
            "Örtük öğrenme farkında olmadan, çabasız gerçekleşir; ayna nöronlar gözlemsel öğrenmenin olası nörolojik temelidir.",
            "*Insight learning*: çözüm çağrışım, sonuç ya da model olmadan ani bir kavrayışla gelir (Köhler).",
            "*Latent learning*: ödül olmadan gerçekleşir, ödül gelince ortaya çıkar; *cognitive map* ile gösterilir (Tolman).",
            "Klasik ve edimsel koşullanma çağrışımsal öğrenmedir; sosyal, içgörü ve gizli öğrenme bilişsel süreçlere dayanır.",
            "Öğrenme ile sergileme farklıdır: öğrenilen her şey hemen yapılmaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Beş yaşındaki Ali, ağabeyinin bakkalda şeker isterken “lütfen” dediğini ve şekeri aldığını izliyor. Ertesi gün Ali de aynı sözcüklerle şeker istiyor. Ali'nin bu davranışı bizzat yapıp ödül almış olması söz konusu değil. Bu durum en iyi hangisidir?",
      opts: ["Klasik koşullanma", "*Shaping*", "Gözlemsel öğrenme (*modeling*)", "*Latent learning*"],
      a: 2,
      why: "Ali, modelin davranışını ve ödülünü izleyerek davranışı edinmiştir; doğrudan sonuç yaşamasına gerek olmamıştır. En çekici yanlış şık B: şekillendirme, yaklaşık davranışların sırayla pekiştirilmesidir; Ali pekiştirilmedi." },
    { q: "Selin, arkadaşının ödevi kopyalayıp öğretmenden ağır bir uyarı aldığını görüyor ve kendisi hiç kopya çekmiyor. Bu davranış aşağıdakilerden hangisini örnekler?",
      opts: ["*Vicarious punishment*", "*Negative punishment*", "*Extinction*", "*Insight learning*"],
      a: 0,
      why: "Modelin cezalandırıldığını izleyip aynı davranıştan kaçınmak dolaylı cezadır. En çekici yanlış şık B: negatif ceza, kişinin kendisinden hoş bir şeyin alınmasıdır; Selin'e bir şey yapılmadı, o yalnızca izledi." },
    { q: "Grafik, üç sıçan grubunun labirentte yaptığı hatalı dönüş sayılarını göstermektedir. A grubu hep ödül almış, B grubu hiç ödül almamış, C grubuna 11. günden itibaren ödül verilmiştir. C grubunda 11. günden sonra hata sayısının birden düşmesi neyi gösterir?",
      fig: { type: "graph", xlabel: "Gün", ylabel: "Hatalı dönüş", xmax: 18, ymax: 10, lines: [{ from: [1, 9], to: [5, 5.5], color: 0 }, { from: [5, 5.5], to: [11, 3.5], color: 0 }, { from: [11, 3.5], to: [17, 2.8], color: 0, label: "A" }, { from: [1, 9], to: [5, 7.6], color: 1 }, { from: [5, 7.6], to: [11, 6.8], color: 1 }, { from: [11, 6.8], to: [17, 6.2], color: 1, label: "B" }, { from: [1, 9], to: [5, 7.3], color: 2 }, { from: [5, 7.3], to: [11, 6.3], color: 2 }, { from: [11, 6.3], to: [12, 3.9], color: 2 }, { from: [12, 3.9], to: [17, 3.6], color: 2, label: "C" }] },
      opts: ["*Insight learning*: çözüm ani bir kavrayışla gelmiştir", "*Instinctive drift*: sıçanlar içgüdülerine dönmüştür", "*Superstitious behavior*: sıçanlar tesadüfi bir davranışı tekrarlamıştır", "*Latent learning*: öğrenme ödülsüz günlerde olmuş, ödül gelince sergilenmiştir"],
      a: 3,
      why: "C grubu ödülsüz günlerde de labirenti öğrenmişti; ödül konunca bu bilgiyi sergiledi: gizli öğrenme. En çekici yanlış şık A: içgörü ani çözüm demektir, ama burada çözüm sıçanın önceden edindiği bilgidir; fark ödülün devreye girmesidir." },
    { q: "Bir şempanze kafeste tavana asılı muza uzanamıyor. Bir süre etrafına bakıp duruyor, sonra birden kutuları üst üste dizip muzu alıyor. Daha önce bu çözüm için ne bir ödül ne de bir model vardı. Bu durum en iyi nasıl açıklanır?",
      opts: ["*Shaping*", "*Insight learning*", "Klasik koşullanma", "Gözlemsel öğrenme"],
      a: 1,
      why: "Çağrışım, sonuç ya da model olmadan ani bir kavrayışla çözüm bulmak içgörü öğrenmesidir. En çekici yanlış şık A: şekillendirme, yaklaşık davranışların sırayla pekiştirilmesini gerektirir; burada pekiştirme yok." },
    { q: "Mert bisiklet sürmeyi nasıl yaptığını açıklayamıyor, ama rahatça sürebiliyor; bunu nasıl öğrendiğini de hatırlamıyor. Bu durum hangi kavramla en iyi açıklanır?",
      opts: ["*Latent learning*", "*Insight learning*", "Örtük öğrenme (*implicit learning*)", "*Vicarious conditioning*"],
      a: 2,
      why: "Farkında olmadan, çaba göstermeden kazanılan ve anlatılması zor beceriler örtük öğrenmeyle edinilir. En çekici yanlış şık A: gizli öğrenme ödülsüz öğrenmenin sonradan ortaya çıkmasıdır; burada bilginin ortaya çıkma koşulu yok, vurgu farkındalığın olmamasında." }
  ]
};
