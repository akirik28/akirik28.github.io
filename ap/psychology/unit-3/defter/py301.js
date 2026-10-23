/* Kitpath not defteri · py301 · 3.1 Gelişim Psikolojisinin Temaları ve Yöntemleri
   Kaynak: AP Psychology CED (2024) Topic 3.1. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "py301",
  amac: "Bu konu, insanın yaşam boyu nasıl değiştiğini inceleyen gelişim psikolojisini tanıtıyor. Üç ana tartışma temasını (durağanlık–değişim, doğa–yetiştirme, süreklilik–aşamalar) ve kesitsel ile boylamsal araştırma yöntemlerini öğreneceksin.",
  bolumler: [
    {
      baslik: "*Developmental psychology*: yaşam boyu değişim",
      kisa: "Gelişim psikolojisi, insanın doğumdan ölüme nasıl değiştiğini inceler.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "Doğum öncesi", baslik: "Gelişim daha doğmadan başlar", metin: "Genler ve anne karnındaki ortam bebeği şimdiden etkiler." },
            { tarih: "Bebeklik ve çocukluk", baslik: "Hızlı büyüme ve öğrenme", metin: "Hareket, dil, bağlanma ve düşünce biçimi hızla değişir." },
            { tarih: "Ergenlik", baslik: "Beden ve kimlik değişir", metin: "Ergenlik (*puberty*) ve “ben kimim?” sorusu öne çıkar." },
            { tarih: "Yetişkinlik", baslik: "Uzun ve çoğunlukla dengeli bir dönem", metin: "İş, ilişkiler ve aile; beden yavaş yavaş değişir." },
            { tarih: "İleri yaşlar", baslik: "Değişim sürer", metin: "Bazı yetenekler azalır, bazıları (bilgelik, kelime bilgisi) korunur." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Developmental psychology", tr: "gelişim psikolojisi", tanim: "Yaşam boyu fiziksel, bilişsel ve sosyal değişimi inceler. İki yoldan bakar: ==kronolojik sıra== (hangi yaşta ne olur?) ve ==temalar== (hangi sorular her yaşta karşımıza çıkar?).", ornek: "“Bebekler ne zaman yürür?” kronolojik, “genler mi çevre mi?” tematik sorudur." },
            { ikon: "⏳", terim: "Maturation", tr: "olgunlaşma", tanim: "Deneyimden büyük ölçüde bağımsız, biyolojik programın zamanla açılması.", ornek: "Bebeğin önce oturması, sonra emekleyip yürümesi." }
          ] }
      ]
    },
    {
      baslik: "Tema 1: *stability* ve *change*",
      kisa: "Bazı özellikler yıllarca sürer, bazıları değişir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⚓", baslik: "*Stability* (durağanlık)", maddeler: ["Zamanla büyük ölçüde aynı kalan özellikler", "Örnek: temel mizaç; çekingen bebeğin çekingen bir yetişkin olma eğilimi"] },
          sag: { ikon: "🌱", baslik: "*Change* (değişim)", maddeler: ["Zamanla farklılaşan özellikler", "Örnek: boy, kelime hazinesi, ilgi alanları"] },
          oyun: [
            { metin: "Bebekken kolay sakinleşen birinin büyüyünce de genelde sakin kalması.", cevap: "sol", neden: "Özellik yıllar içinde sürüyor: *stability*." },
            { metin: "Beş yaşında 300 kelime bilen çocuğun on yaşında binlerce kelime bilmesi.", cevap: "sag", neden: "Kelime hazinesi genişliyor: *change*." },
            { metin: "Ece 12 yaşında futbol meraklısıyken 17 yaşında müziğe yöneliyor.", cevap: "sag", neden: "İlgi alanı değişmiş: *change*." },
            { metin: "İlkokulda utangaç olan Can'ın lisede de yeni insanlarla tanışırken çekingen olması.", cevap: "sol", neden: "Mizaç özelliği sürüyor: *stability*." }
          ] },
        { tip: "not", metin: "Gerçek hayatta ikisi birlikte yaşanır: bir kişi hem çekingen kalabilir hem de her yıl yeni şeyler öğrenebilir. Araştırmacının sorusu, ==hangi özelliğin ne kadar sürdüğü== ve ==neyin değiştiğidir==." }
      ]
    },
    {
      baslik: "Tema 2: *nature* ve *nurture*",
      kisa: "Doğa genleri, yetiştirme çevreyi ve deneyimi anlatır; ikisi etkileşir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧬", baslik: "*Nature* (doğa)", maddeler: ["Genler ve biyolojik olgunlaşma", "Kalıtımla gelen yatkınlıklar"] },
          sag: { ikon: "🏡", baslik: "*Nurture* (yetiştirme)", maddeler: ["Aile, okul, kültür ve yaşanan deneyimler", "Beslenme, sevgi, eğitim gibi çevre etkileri"] },
          oyun: [
            { metin: "Bebeklerin çoğunun benzer yaşlarda ilk adımını atması.", cevap: "sol", neden: "Biyolojik olgunlaşmanın izi: *nature*." },
            { metin: "Bir çocuğun evde hangi dil konuşuluyorsa onu öğrenmesi.", cevap: "sag", neden: "Çevre belirliyor: *nurture*." },
            { metin: "Göz renginin ailede kuşaktan kuşağa geçmesi.", cevap: "sol", neden: "Kalıtım: *nature*." },
            { metin: "Müzik kursuna giden öğrencinin nota okumayı öğrenmesi.", cevap: "sag", neden: "Eğitim ve deneyim: *nurture*." }
          ] },
        { tip: "tuzak", metin: "Sınavda “bu özellik ya doğadan ya yetiştirmeden gelir” gibi seçenekler çeldiricidir.", yanlis: "Bir özellik ya *nature* ya da *nurture* sonucudur.", dogru: "Çoğu özellik ==ikisinin etkileşimidir==. “Tamamen” ve “yalnızca” diyen ifadelere şüpheyle bak." }
      ]
    },
    {
      baslik: "Tema 3: süreklilik mi, aşamalar mı?",
      kisa: "Gelişim ya rampa gibi kademeli ya da merdiven gibi basamaklıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📈", baslik: "*Continuous* (sürekli)", maddeler: ["Değişim yavaş yavaş, derece derece olur", "Rampa gibi: kelime hazinesi gün gün artar"] },
          sag: { ikon: "🪜", baslik: "*Discontinuous* (aşamalı)", maddeler: ["Değişim niteliksel sıçramalarla yeni evrelere geçer", "Merdiven gibi: Piaget ve Erikson aşama kuramları"] },
          oyun: [
            { metin: "Çocuk bir gün miktarın şekil değişince aynı kaldığını kavrıyor ve dünyaya başka bir gözle bakıyor.", cevap: "sag", neden: "Yeni bir düşünme evresine sıçrama: *discontinuity*." },
            { metin: "Her ay bir miktar daha uzun cümleler kuruyor.", cevap: "sol", neden: "Kademeli artış: *continuity*." },
            { metin: "Kuramcı, gelişimin dört ayrı evreden geçtiğini ve evrelerin sırasının değişmediğini savunuyor.", cevap: "sag", neden: "Evre kuramı: *discontinuity*." }
          ] },
        { tip: "grafik", baslik: "Rampa mı, merdiven mi?", xlabel: "Yaş", ylabel: "Beceri düzeyi", xmax: 10, ymax: 10,
          ogeler: [
            { id: "rampa", tip: "cizgi", renk: 0, from: [0, 1], to: [10, 9], etiket: "Sürekli" },
            { id: "basamak", tip: "egri", renk: 1, noktalar: [[0, 2], [2, 2], [2.3, 4], [5, 4], [5.3, 6], [7.5, 6], [7.8, 8], [10, 8]], etiket: "Aşamalı", gizli: true },
            { id: "e1", tip: "yazi", x: 1, y: 3, metin: "Evre 1", gizli: true },
            { id: "e2", tip: "yazi", x: 3.6, y: 5, metin: "Evre 2", gizli: true },
            { id: "e3", tip: "yazi", x: 6.4, y: 7, metin: "Evre 3", gizli: true }
          ],
          durumlar: [
            { metin: "**Sürekli** görüş: beceri her yaşta biraz artar, grafik düz bir rampadır." },
            { metin: "**Aşamalı** görüş: uzun düz kısımlar (aynı evre) ve ani sıçramalar (yeni evre) vardır.", goster: ["basamak"] },
            { metin: "Aşama kuramları sıçrama noktalarını ==evre== olarak adlandırır. Bu üniteyi izleyen konularda Piaget ve Erikson'un evrelerini göreceksin.", goster: ["e1", "e2", "e3"] }
          ] }
      ]
    },
    {
      baslik: "Kesitsel ve boylamsal araştırma",
      kisa: "Kesitsel farklı yaşları bir anda, boylamsal aynı kişileri yıllarca izler.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı soru, iki tasarım: yaşla birlikte ne değişiyor?", xlabel: "Ölçüm yılı", ylabel: "Yaş", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "2025" }, { v: 5, label: "2030" }, { v: 9, label: "2035" }],
          yticks: [{ v: 2, label: "10" }, { v: 5, label: "15" }, { v: 8, label: "20" }],
          ogeler: [
            { id: "kes", tip: "cizgi", renk: 0, from: [1, 2], to: [1, 8], etiket: "", gizli: true },
            { id: "k10", tip: "nokta", renk: 0, x: 1, y: 2, etiket: "10 yaş", gizli: true },
            { id: "k15", tip: "nokta", renk: 0, x: 1, y: 5, etiket: "15 yaş", gizli: true },
            { id: "k20", tip: "nokta", renk: 0, x: 1, y: 8, etiket: "20 yaş", gizli: true },
            { id: "boy", tip: "cizgi", renk: 1, from: [1, 2], to: [9, 8], etiket: "", gizli: true },
            { id: "b15", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "15 yaşında", gizli: true },
            { id: "b20", tip: "nokta", renk: 1, x: 9, y: 8, etiket: "20 yaşında", gizli: true },
            { id: "ny", tip: "yazi", x: 5, y: 9.3, metin: "Kesitsel fark = yaş farkı + kuşak farkı", gizli: true }
          ],
          durumlar: [
            { metin: "Yatay eksen çalışmanın yapıldığı yıl, dikey eksen katılımcıların yaşı." },
            { metin: "**Kesitsel** (*cross-sectional*): 2025'te aynı anda 10, 15 ve 20 yaşındaki ==farklı kişiler== ölçülür. Sonuç hemen çıkar.", goster: ["kes", "k10", "k15", "k20"] },
            { metin: "**Boylamsal** (*longitudinal*): 2025'te 10 yaşındaki ==aynı kişiler== 2030'da 15, 2035'te 20 yaşındayken yeniden ölçülür. Sonuç on yıl sonra çıkar.", goster: ["boy", "b15", "b20"] },
            { metin: "Kesitsel tasarımda gruplar farklı kuşaklardan olduğu için fark yaştan mı kuşaktan mı geliyor, ayrılamaz.", goster: ["ny"] }
          ] },
        { tip: "ikili", sol: { ikon: "📸", baslik: "*Cross-sectional* (kesitsel)", maddeler: ["Farklı yaş grupları, aynı anda", "Anlık görüntü gibi"] },
          sag: { ikon: "🎞️", baslik: "*Longitudinal* (boylamsal)", maddeler: ["Aynı kişiler, yıllar boyunca", "Film gibi"] },
          oyun: [
            { metin: "Araştırmacı bu hafta 10, 15 ve 20 yaşındakilerin hepsine aynı anketi veriyor.", cevap: "sol", neden: "Farklı yaşlar, tek ölçüm zamanı: *cross-sectional*." },
            { metin: "Aynı öğrenciler 10 yaşında, sonra 15 ve 20 yaşında yeniden test ediliyor.", cevap: "sag", neden: "Aynı kişilerin zaman içinde izlenmesi: *longitudinal*." },
            { metin: "Çalışma bir haftada bitiyor ama üç yaş grubunu karşılaştırıyor.", cevap: "sol", neden: "Hızlı ve ucuz olan kesitsel tasarımın özelliği." },
            { metin: "Bazı katılımcılar taşındığı için çalışmadan ayrılıyor ve veri eksik kalıyor.", cevap: "sag", neden: "Yıllara yayılan çalışmalarda katılımcı kaybı olur: *longitudinal*." }
          ] }
      ]
    },
    {
      baslik: "Artıları, eksileri ve karıştırıcı etkenler",
      kisa: "Kesitsel hızlıdır ama kuşak etkisi karışır; boylamsal yavaştır, katılımcı kaybı olur.",
      bloklar: [
        { tip: "tablo", baslik: "İki tasarımın karşılaştırması", head: ["", "*Cross-sectional*", "*Longitudinal*"], rows: [
            ["Katılımcılar", "Farklı yaşlarda farklı kişiler", "Aynı kişiler, tekrar tekrar"],
            ["Süre ve maliyet", "Kısa ve ucuz", "Uzun ve pahalı"],
            ["Bireysel farklar", "Gruplar kişiler bakımından da farklıdır", "Herkes kendi kendisiyle karşılaştırılır"],
            ["Ana sorun", "*Cohort effect* (kuşak etkisi)", "*Attrition* (katılımcı kaybı)"]
          ], not: "*Cohort*: aynı dönemde doğup benzer olaylarla büyüyen kuşak." },
        { tip: "ornek", baslik: "Okul rehberlik servisi hangi tasarımı seçer?", durum: "Rehber öğretmen, ders çalışma süresinin yaşla nasıl değiştiğini öğrenmek istiyor. A planı: bu yıl 9., 10., 11. ve 12. sınıfların hepsine anket. B planı: bu yılki 9. sınıfları 12. sınıfa kadar her yıl ölçmek.",
          adimlar: ["A planı aynı anda dört yaş grubunu ölçtüğü için kesitsel; sonuç bu yıl çıkar.", "B planı aynı öğrencileri dört yıl izlediği için boylamsal; sonuç dört yıl sonra gelir ve okul değiştiren öğrenciler veriyi eksiltir.", "A'da 12. sınıfların 9. sınıflardan farkı yaştan mı, kuşaktan mı kaynaklanıyor? Bilemeyiz. B'de aynı öğrencilerin değişimini doğrudan görürüz."],
          sonuc: "Hız ve düşük maliyet için ==kesitsel==, değişimi doğrudan izlemek için ==boylamsal==; her ikisinin de bir bedeli var." },
        { tip: "tuzak", metin: "Kesitsel çalışmada 15 yaşındakilerin 10 yaşındakilerden farklı çıkması, farkın yaşlanmadan geldiğini kanıtlamaz.", yanlis: "Kesitsel çalışma, yaşla birlikte olan değişimi gösterir.", dogru: "Kesitsel çalışma ==yaş gruplarının farkını== gösterir. Farkın nedeni kuşak da olabilir. Değişimi doğrudan gösteren ==boylamsal== tasarımdır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Developmental psychology* yaşam boyu değişimi hem kronolojik sırayla hem de temalarla inceler.",
            "*Stability and change*: bazı özellikler (mizaç gibi) sürer, bazıları (kelime hazinesi gibi) değişir.",
            "*Nature and nurture*: genler ve çevre birlikte, etkileşerek etki eder; “yalnızca biri” genelde yanlıştır.",
            "*Continuity*: kademeli rampa; *discontinuity*: merdiven gibi evreler (Piaget, Erikson).",
            "*Cross-sectional*: farklı yaşlar, aynı anda; hızlı ve ucuz ama *cohort effect* karışır.",
            "*Longitudinal*: aynı kişiler, yıllarca; değişimi doğrudan gösterir ama uzun, pahalı ve *attrition* (katılımcı kaybı) vardır.",
            "Kesitsel çalışmada yaş farkı ile kuşak farkı ayrılamaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir araştırmacı bu hafta 20, 40 ve 60 yaşındaki 90 gönüllüye aynı çalışma belleği testini uyguluyor ve grup ortalamalarını karşılaştırıyor. Bu tasarım ve en önemli sınırlılığı aşağıdakilerden hangisidir?",
      opts: ["*Longitudinal*; katılımcıların çalışmadan ayrılması", "*Cross-sectional*; yaş farkı ile kuşak (*cohort*) farkının birbirine karışması", "*Cross-sectional*; aynı kişilerin zaman içindeki değişimini göstermesi", "*Longitudinal*; sonuçların çok kısa sürede çıkması"],
      a: 1,
      why: "Farklı yaş grupları tek bir zamanda ölçüldüğü için tasarım kesitseldir; 60 yaşındakilerle 20 yaşındakiler farklı kuşaklardır, bu yüzden fark yaştan mı kuşaktan mı gelir, ayrılamaz. En çekici yanlış şık C: aynı kişilerin zaman içindeki değişimini gösteren tasarım boylamsaldır." },
    { q: "Bir ekip, 8 yaşındaki 200 çocuğu 20 yaşına kadar iki yılda bir izliyor. Son ölçümde ilk gruptan yalnızca 120 kişiye ulaşılabiliyor. Bu sorunun adı nedir?",
      opts: ["*Cohort effect* (kuşak etkisi)", "*Stability* (durağanlık)", "*Nurture* (yetiştirme) etkisi", "*Attrition* (katılımcı kaybı)"],
      a: 3,
      why: "Aynı kişileri uzun süre izleyen boylamsal çalışmalarda katılımcıların bir kısmı ayrılır; buna *attrition* denir. En çekici yanlış şık A: kuşak etkisi, farklı yaş gruplarını tek zamanda karşılaştıran kesitsel çalışmanın sorunudur." },
    { q: "Tabloda üç yaş grubunun okuma hızı verilmiştir. Veriler aynı yıl, farklı çocuklardan toplanmıştır. Bu verilerden hangi sonuç savunulabilir?",
      fig: { type: "table", caption: "Okuma hızı (kelime/dakika)", head: ["Yaş grubu", "Ortalama okuma hızı"], rows: [["8 yaş", 80], ["12 yaş", 130], ["16 yaş", 170]] },
      opts: ["Her çocuğun okuma hızı sekiz yıl içinde 90 kelime artmıştır", "Okuma hızı doğuştan belirlenir ve değişmez", "Yaş grupları arasında fark vardır ama farkın yaştan mı kuşaktan mı geldiği bu tasarımla ayrılamaz", "Okuma hızı sürekli arttığı için aşama kuramları yanlıştır"],
      a: 2,
      why: "Kesitsel veri gruplar arası fark gösterir; aynı çocuklar izlenmediği için bireysel değişim ya da kuşak etkisi hakkında kesin konuşulamaz. En çekici yanlış şık A: gruplar farklı kişilerden oluştuğu için “her çocuğun artışı” bu tablodan çıkarılamaz." },
    { q: "Bir psikolog, bebekken çekingen olan kişilerin büyüyünce de çoğunlukla çekingen olduğunu, ama aynı kişilerin boy ve kelime hazinesinin çok değiştiğini bildiriyor. Bu bulgu en iyi hangi temayı örnekler?",
      opts: ["*Stability and change*: bazı özellikler sürerken bazıları değişir", "Yalnızca *nurture*: her şeyi çevre belirler", "*Discontinuity*: her özellik ani evrelerle değişir", "*Cohort effect*: kuşaklar arası fark"],
      a: 0,
      why: "Mizaç gibi bir özellik sürerken (durağanlık) boy ve kelime hazinesi değişiyor; bu, durağanlık ve değişim temasının tipik örneğidir. En çekici yanlış şık C: bulgu evre sıçramalarından değil, farklı özelliklerin farklı seyrinden söz ediyor." },
    { q: "Bir kuramcı, çocukların yaklaşık yedi yaşında düşünme biçimlerinin niteliksel olarak değiştiğini ve yeni bir evreye sıçradığını savunuyor. Bu görüş hangi temaya uygundur?",
      opts: ["Süreklilik (*continuity*): değişim kademeli ve küçük adımlarla olur", "Aşamalılık (*discontinuity*): gelişim niteliksel olarak farklı evrelerle ilerler", "*Nature*: gelişim yalnızca genlerle belirlenir", "*Stability*: özellikler yaşam boyu hiç değişmez"],
      a: 1,
      why: "Niteliksel sıçramalarla yeni evrelere geçiş, aşamalı (*discontinuous*) görüştür; rampa değil merdiven benzetmesine denk gelir. En çekici yanlış şık C: evre kuramı doğa mı yetiştirme mi sorusunu belirlemez, süreklilik–aşama sorusunu yanıtlar." }
  ]
};
