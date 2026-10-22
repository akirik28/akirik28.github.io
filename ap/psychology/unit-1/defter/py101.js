/* Kitora not defteri · py101 · 1.1 Kalıtım ve Çevrenin Etkileşimi
   Kaynak: AP Psychology CED (2024) Topic 1.1. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py101",
  amac: "Bu konu davranışın nereden geldiğini soruyor: genlerden mi, yaşadığımız ortamdan mı? *Heredity* ile *environment*'ın birlikte çalıştığını, evrimsel bakışı ve ikiz, aile, evlat edinme çalışmalarının genlerin payını nasıl ölçtüğünü öğreneceksin.",
  bolumler: [
    {
      baslik: "*Nature* ve *nurture*",
      kisa: "*Nature* kalıtım, *nurture* çevredir; davranışı ikisi birlikte şekillendirir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧬", baslik: "*Heredity* (*nature*) · kalıtım", maddeler: ["Doğuştan gelen, genetik yatkınlıklar; fiziksel, davranışsal ve zihinsel özellikleri etkiler", "Örnek: boy potansiyeli, göz rengi, mizacın bir bölümü"] },
          sag: { ikon: "🏫", baslik: "*Environment* (*nurture*) · çevre", maddeler: ["Yaşadığın dış etkenler: aile ilişkileri, eğitim, arkadaşlar, beslenme", "Örnek: evde konuşulan dil, okulda aldığın eğitim"] },
          oyun: [
            { metin: "Göz renginin anne babadan gelmesi.", cevap: "sol", neden: "Doğuştan gelen özellik: *nature*." },
            { metin: "Ailenin her akşam birlikte kitap okuması ve çocuğun okumayı sevmesi.", cevap: "sag", neden: "Aile ortamı: *nurture*." },
            { metin: "Okulda çok iyi bir matematik öğretmeninin olması.", cevap: "sag", neden: "Eğitim, çevresel bir etkendir: *nurture*." },
            { metin: "Bir çocuğun uzun boylu olmaya yatkın doğması.", cevap: "sol", neden: "Genetik yatkınlık: *nature*." }
          ] },
        { tip: "not", metin: "Genetik ayrıntılar (*DNA*, *genotype*, *phenotype*, kromozomlar, baskın ve çekinik genler) AP sınavının kapsamı dışındadır; ezberleme. Bilmen gereken şu: davranış ==hem kalıtımdan hem çevreden== gelir." }
      ]
    },
    {
      baslik: "İkisi bir arada: etkileşim",
      kisa: "Gen yatkınlık verir; çevre, o yatkınlığın ne kadar ortaya çıkacağını belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Boy örneği: gen ve beslenme birlikte çalışır", head: ["", "İyi beslenme (zengin çevre)", "Yetersiz beslenme (yoksun çevre)"], rows: [
            ["Uzun boy yatkınlığı", "Boy, potansiyelin sonuna kadar uzar", "Boy, potansiyelin altında kalır"],
            ["Kısa boy yatkınlığı", "Boy, yatkınlığın izin verdiği üst sınıra ulaşır", "Boy daha da kısa kalır"]
          ], not: "İki etken de sonucu değiştirir; biri tek başına yeterli olmaz." },
        { tip: "tuzak", metin: "Sınavda “ya genler ya çevre” diye soran, ikisinden birini tek başına açıklama yapan şıklar tuzaktır.", yanlis: "Bir özellik ya genetiktir ya çevreseldir.", dogru: "Hemen hemen her özellik ==etkileşimin== ürünüdür. “Yalnızca genler” ya da “yalnızca çevre” diyen şık genelde yanlıştır." }
      ]
    },
    {
      baslik: "Evrimsel bakış",
      kisa: "Doğal seçilim, hayatta kalmayı ve üremeyi kolaylaştıran özellikleri yaygınlaştırır.",
      bloklar: [
        { tip: "adimlar", baslik: "*Natural selection* (doğal seçilim) nasıl işler?", adimlar: [
            { baslik: "Çeşitlilik", metin: "Aynı türün bireyleri birbirinden farklı özellikler taşır." },
            { baslik: "Rekabet", metin: "Yiyecek, eş ve güvenlik sınırlıdır; herkes hayatta kalıp ürüyemez." },
            { baslik: "Seçilim", metin: "Hayatta kalmayı ve üremeyi kolaylaştıran özelliğin sahipleri daha çok yavru bırakır." },
            { baslik: "Sonuç", metin: "Nesiller boyunca o özellik topluluk içinde yaygınlaşır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🦎", terim: "Evolutionary perspective", tr: "evrimsel bakış", tanim: "Davranış ve zihinsel süreçlerin, ==hayatta kalma ve üreme başarısını== artırdığı için şekillendiğini savunur.", ornek: "Tatlı ve yağlı yiyeceklere düşkünlük, yiyeceğin kıt olduğu çağlarda enerji bulmayı kolaylaştırmış olabilir." },
            { ikon: "⚠️", terim: "Eugenics", tr: "öjeni", tanim: "Evrim ilkelerini, bazı insan gruplarını “aşağı” sayıp ayrımcılık yapmak için kullanan görüş. Etik olarak kabul edilemez ve bilimsel dayanağı yoktur.", ornek: "20. yüzyılda bazı ülkelerde insanların zorla kısırlaştırılması." }
          ] },
        { tip: "tuzak", metin: "Doğal seçilim bireyin hayatı boyunca değil, nesiller boyunca işler.", yanlis: "Bir kişi çevreye uyum sağlayarak kendi hayatında evrimleşir.", dogru: "Doğal seçilim, bir özelliğin topluluktaki sıklığını nesiller içinde değiştirir; bireyin çabası evrimi yürütmez. Evrimsel açıklama bir davranışın “doğru” olduğunu da söylemez." }
      ]
    },
    {
      baslik: "İkiz çalışmaları",
      kisa: "Aynı genli ikizler daha benzerse, o özellikte genlerin payı vardır.",
      bloklar: [
        { tip: "tablo", baslik: "İki tür ikiz", head: ["İkiz türü", "Ortak gen", "Dikkat"], rows: [
            ["*Identical twins* (tek yumurta ikizi)", "Yaklaşık %100", "Birlikte ya da ayrı büyüyebilir"],
            ["*Fraternal twins* (çift yumurta ikizi)", "Yaklaşık %50 (sıradan kardeş kadar)", "Birlikte büyüyenler çevreyi de paylaşır"]
          ] },
        { tip: "grafik", baslik: "Genetik yakınlık arttıkça benzerlik artar (kavramsal gösterim)", xlabel: "Ortak gen oranı", ylabel: "Özellikte benzerlik", xmax: 10, ymax: 10,
          xticks: [{ v: 0.5, label: "%0" }, { v: 5, label: "%50" }, { v: 9.5, label: "%100" }],
          yticks: [{ v: 2, label: "düşük" }, { v: 8, label: "yüksek" }],
          ogeler: [
            { id: "trend", tip: "cizgi", renk: 0, from: [0.5, 2], to: [9.5, 8.4], gizli: true },
            { id: "evl", tip: "nokta", renk: 1, x: 0.5, y: 2, etiket: "Evlat edinilen kardeşler", kilavuz: true, gizli: true },
            { id: "cy", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "Çift yumurta ikizi", kilavuz: true, gizli: true },
            { id: "ty", tip: "nokta", renk: 1, x: 9.5, y: 8.4, etiket: "Tek yumurta ikizi", kilavuz: true, gizli: true },
            { id: "tam", tip: "cizgi", renk: 2, kesik: true, from: [0, 10], to: [10, 10], gizli: true },
            { id: "tamt", tip: "yazi", x: 5, y: 9.5, metin: "Tam benzerlik (%100 aynı)", gizli: true },
            { id: "fark", tip: "ok", renk: 2, from: [9.5, 8.6], to: [9.5, 9.9], gizli: true }
          ],
          durumlar: [
            { metin: "Bir özelliği (ör. okuma becerisi) ölçüyoruz. Yatay eksen: iki kişinin ==ortak gen== oranı; dikey eksen: özelliklerindeki benzerlik." },
            { metin: "Evlat edinilen kardeşler: ortak genleri yok, ev ortamını paylaşıyorlar. Benzerlik düşük.", goster: ["evl"] },
            { metin: "Çift yumurta ikizleri yaklaşık yarı yarıya aynı gene sahip: benzerlik daha yüksek.", goster: ["cy"] },
            { metin: "Tek yumurta ikizleri hemen hemen tamamen aynı gene sahip: en benzerler. Ortak gen arttıkça benzerlik artıyorsa, genlerin bir payı vardır.", goster: ["ty", "trend"] },
            { metin: "Ama tek yumurta ikizleri bile ==tam== benzer değil: aradaki boşluk çevrenin payıdır.", goster: ["tam", "tamt", "fark"] }
          ] },
        { tip: "tuzak", metin: "İkiz verisi yorumlanırken iki hata yapılır.", yanlis: "Tek yumurta ikizleri tamamen benzerse özellik yalnızca genetiktir.", dogru: "Aynı genli ikizler bile birebir aynı değildir; fark çevreden gelir. Birlikte büyüyen ikizler çevreyi de paylaştığı için ==ayrı büyütülmüş== ikizler genlerin payı hakkında daha güçlü kanıt verir." }
      ]
    },
    {
      baslik: "Aile ve evlat edinme çalışmaları",
      kisa: "Evlat edinilen çocuk kime benziyorsa, o etkenin payı büyüktür.",
      bloklar: [
        { tip: "tablo", baslik: "Genlerin etkisini araştıran üç yöntem", head: ["Yöntem", "Kimleri karşılaştırır?", "Ne söyler? Sınırı ne?"], rows: [
            ["*Twin study*", "Tek yumurta ve çift yumurta ikizleri", "Benzerlik farkı genlerin payını gösterir; birlikte büyüyenler çevreyi de paylaşır"],
            ["*Family study*", "Akrabalar: yakınlık arttıkça benzerlik artıyor mu?", "Akrabalar aynı zamanda çevreyi de paylaşır; tek başına genleri kanıtlamaz"],
            ["*Adoption study*", "Evlat edinilen çocuğu hem biyolojik hem evlat edinen aileyle", "Gen ve çevreyi ayırmaya en elverişli yöntemlerden"]
          ] },
        { tip: "ikili", sol: { ikon: "🧬", baslik: "Biyolojik aileye benziyor", maddeler: ["Çocuk, hiç birlikte yaşamadığı biyolojik ebeveyne benziyorsa", "Genlerin etkisi desteklenir"] },
          sag: { ikon: "🏠", baslik: "Evlat edinen aileye benziyor", maddeler: ["Çocuk, birlikte büyüdüğü evlat edinen aileye benziyorsa", "Çevrenin etkisi desteklenir"] },
          oyun: [
            { metin: "Çocuğun okuma puanı, hiç tanımadığı biyolojik annesininkine yakın çıkıyor.", cevap: "sol", neden: "Ortak olan yalnızca gen: genlerin payı." },
            { metin: "Evlat edinilen çocukla evlat edinen ebeveynin puanları arasında güçlü ilişki var.", cevap: "sag", neden: "Ortak olan yalnızca ev ortamı: çevrenin payı." },
            { metin: "Ayrı yetişen çocuk ile biyolojik babasının kaygı düzeyi aynı.", cevap: "sol", neden: "Çevre ortak değil, gen ortak: genlerin payı." },
            { metin: "Evlat edinilen çocuğun müzik zevki evdeki aileninkine benziyor.", cevap: "sag", neden: "Ortak olan çevre: çevrenin payı." }
          ] },
        { tip: "ornek", baslik: "Varsayımsal bir evlat edinme çalışması", durum: "Bir araştırmacı, doğumdan kısa süre sonra evlat edinilmiş çocukların okuma puanlarını hem biyolojik annelerinin hem evlat edinen annelerinin puanlarıyla karşılaştırıyor. Biyolojik annelerle ilişki güçlü, evlat edinen annelerle zayıf çıkıyor.",
          adimlar: ["Biyolojik anneyle çocuk gen paylaşıyor, ama büyüme ortamını paylaşmıyor.", "Evlat edinen anneyle çocuk gen paylaşmıyor, ama ortamı paylaşıyor.", "Güçlü ilişki gen paylaşılan tarafta çıkmış."],
          sonuc: "Okuma becerisinde ==genlerin payı== var. Evlat edinen anneyle de küçük bir ilişki görülüyorsa, ==çevrenin payı== da vardır; ikisi birlikte çalışır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Heredity* (*nature*) genetik yatkınlıktır; *environment* (*nurture*) aile, eğitim gibi dış etkenlerdir.",
            "Davranış ikisinin ==etkileşimiyle== şekillenir; “yalnızca gen” ya da “yalnızca çevre” diyen şık yanlıştır.",
            "Genetik ayrıntılar (*DNA*, *genotype*, *phenotype*) sınav kapsamı dışındadır.",
            "*Evolutionary perspective*: *natural selection* hayatta kalmayı ve üremeyi artıran özellikleri yaygınlaştırır; bireyde değil, nesiller içinde işler.",
            "*Eugenics*, evrimsel fikirlerin ayrımcı biçimde yanlış kullanılmasıdır; etik olarak kabul edilemez.",
            "*Twin study*: tek yumurta ikizleri çift yumurta ikizlerinden daha benziyorsa genlerin payı vardır; ayrı büyütülmüşler daha güçlü kanıttır.",
            "*Adoption study*: biyolojik aileye benzerlik gen, evlat edinen aileye benzerlik çevre payını gösterir.",
            "*Family study* tek başına gen kanıtı değildir; akrabalar çevreyi de paylaşır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir araştırmacı, doğumdan sonra ayrı ailelerde büyümüş tek yumurta ikizlerinin dışadönüklük puanlarını, ayrı büyümüş çift yumurta ikizlerininkiyle karşılaştırıyor. Tek yumurta ikizlerinin puanları çok daha benzer çıkıyor. Bu sonuç en iyi nasıl yorumlanır?",
      opts: ["Dışadönüklük yalnızca genetiktir; çevrenin hiçbir etkisi yoktur", "Çevre paylaşılmazken genetik benzerlik farkı benzerliği artırmıştır; dışadönüklükte genlerin payı olduğunu destekler", "Dışadönüklük yalnızca çevreden gelir, çünkü ikizler aynı yaşta doğmuştur", "Sonuç hiçbir şey göstermez, çünkü ikizler farklı evlerde büyümüştür"],
      a: 1,
      why: "Çevre ortak değilken genetik benzerliği daha yüksek olan grubun daha benzer çıkması, genlerin payına işaret eder. A en çekici yanlış şık: “yalnızca” diyerek çevrenin payını yok sayıyor; tek yumurta ikizleri bile birebir aynı olmaz. D de yanlış: ayrı büyütülmüş ikizler tam da gen etkisini çevreden ayırmak için incelenir." },
    { q: "Tabloya göre aşağıdakilerden hangisi söylenebilir?",
      fig: { type: "table", caption: "Evlat edinilmiş çocukların okuma puanı ile annelerinin puanı arasındaki ilişki (varsayımsal veri)", head: ["Karşılaştırma", "İlişki (0 = yok, 1 = çok güçlü)"], rows: [["Çocuk ile biyolojik anne", "0,45"], ["Çocuk ile evlat edinen anne", "0,10"]] },
      opts: ["Okuma puanı tamamen çevrenin ürünüdür", "Evlat edinen anne, çocuğun okuma becerisini hiç etkilemez", "Biyolojik anneyle ilişkinin yüksek olması, çevrenin etkili olmadığını kanıtlar", "Biyolojik anneyle daha güçlü ilişki genlerin payını destekler; evlat edinen anneyle görülen küçük ilişki çevrenin de rolü olabileceğini düşündürür"],
      a: 3,
      why: "Gen paylaşılan taraftaki güçlü ilişki genlerin payını gösterir; evlat edinen anneyle ilişki sıfır olmadığı için çevre de katkıda bulunmuş olabilir. C en çekici yanlış: “kanıtlar” ve “etkili olmadığını” fazla kesin; çevrenin payı dışlanamaz." },
    { q: "Bir psikolog, bebeklerin yüksekten düşme korkusu taşımasını, bu korkuyu taşıyan atalarımızın daha çok hayatta kalıp çocuk bırakmış olmasıyla açıklıyor. Bu açıklama hangi yaklaşımı yansıtır?",
      opts: ["Evrimsel bakış (*evolutionary perspective*)", "Ayrı büyütülmüş ikiz yöntemi", "Evlat edinme çalışması", "Öjeni (*eugenics*)"],
      a: 0,
      why: "Davranışı doğal seçilim, hayatta kalma ve üreme başarısı üzerinden açıklamak evrimsel bakıştır. D en çekici yanlış: öjeni de evrim diline başvurur ama insan gruplarına karşı ayrımcı bir politika savunur; burada böyle bir şey yok." },
    { q: "Uzun boylu bir ailede doğan bir çocuk, büyüme çağında yeterince beslenemiyor ve beklenen boydan kısa kalıyor. Bu durum en iyi hangisini örnekler?",
      opts: ["Yalnızca *nature* belirler", "Yalnızca *nurture* belirler", "Kalıtım ve çevrenin etkileşimi", "Doğal seçilimin bireyde işlemesi"],
      a: 2,
      why: "Boy potansiyeli genlerden gelir, ama beslenme (çevre) bu potansiyelin ne kadar ortaya çıkacağını belirler: etkileşim. D en çekici yanlış: doğal seçilim bireyin hayatında değil, nesiller boyunca topluluk düzeyinde işler." },
    { q: "Bir aile çalışmasında akrabalar arasındaki benzerliğin, genetik yakınlık arttıkça arttığı görülüyor. Bu bulgu neden tek başına genlerin etkisini kanıtlamaz?",
      opts: ["Akrabalar farklı ülkelerde yaşadığı için", "Akrabalar genellikle genlerin yanında çevreyi de paylaştığı için ikisini ayırmak zordur", "Aile çalışmaları yalnızca çocuklarla yapılabildiği için", "Genetik yakınlık hiçbir özelliği etkilemediği için"],
      a: 1,
      why: "Akrabalar çoğunlukla aynı evde, aynı ortamda yetişir; benzerlik hem genden hem çevreden gelebilir. Bu yüzden evlat edinme ve ayrı büyütülmüş ikiz çalışmaları gerekir. D şıkkı bilimsel olarak yanlış: ikiz çalışmaları genlerin etkisini gösteriyor." }
  ]
};
