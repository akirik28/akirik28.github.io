/* Kitora not defteri · hg609 · Kentsel Veri
   Kaynak: AP HuG CED Topic 6.9 (IMP-6.E.1, IMP-6.E.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg609",
  amac: "Bu konu kentteki değişimin verilerle nasıl incelendiğini anlatıyor. Nüfus sayımı ve anketten gelen nicel veriyi, saha çalışması ve anlatılardan gelen nitel veriyi ve hangisinin hangi soruya cevap verdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Nicel ve nitel veri",
      kisa: "Nicel veri ne kadar ve kaç sorusunu, nitel veri neden ve nasıl sorusunu cevaplar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔢", terim: "Quantitative data", tr: "nicel veri", tanim: "Sayıyla ölçülen veri: nüfus, yaş, gelir, kira, yoğunluk. Karşılaştırılır ve haritalanır.", ornek: "Mahallenin nüfusu 4.000'den 5.000'e çıktı." },
            { ikon: "💬", terim: "Qualitative data", tr: "nitel veri", tanim: "Sayıya dökülmeyen veri: insanların söyledikleri, tutumları, gözlemler, hikâyeler. Anlam ve nedeni verir.", ornek: "Yaşlı bir sakinin mahallenin değiştiğini nasıl hissettiği." }
          ] },
        { tip: "ikili", sol: { ikon: "📊", baslik: "Nicel", maddeler: ["Sayı, yüzde, oran, harita", "Ne kadar, kaç, nerede?"] },
          sag: { ikon: "🗣️", baslik: "Nitel", maddeler: ["Metin, mülakat, gözlem, fotoğraf", "Neden, nasıl, ne hissediyor?"] },
          oyun: [
            { metin: "Mahallede kiraların son on yılda yüzde 40 arttığını gösteren tablo.", cevap: "sol", neden: "Sayı ve oran: nicel." },
            { metin: "Esnafın 'eski komşularımız taşındı, mahalle yabancılaştı' diye anlatması.", cevap: "sag", neden: "Kişisel anlatı: nitel." },
            { metin: "Her sokaktaki ortalama hane geliri haritası.", cevap: "sol", neden: "Ölçülen sayı: nicel." },
            { metin: "Araştırmacının mahallede yürüyüp sokakları ve insanları gözlemleyerek not alması.", cevap: "sag", neden: "Saha gözlemi: nitel." }
          ] }
      ]
    },
    {
      baslik: "Nicel veri: nüfus sayımı ve anket",
      kisa: "Nüfus sayımı ve anketler, nüfusun büyüklüğünü ve bileşimini sayılarla gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📋", terim: "Census", tr: "nüfus sayımı", tanim: "Bir ülkede ya da bölgede yaşayan herkesi düzenli aralıklarla sayan ve yaş, cinsiyet, gelir, hane büyüklüğü gibi bilgi toplayan resmî çalışma.", ornek: "Her mahalledeki nüfusun ve yaş dağılımının on yıl öncesiyle karşılaştırılması." },
            { ikon: "📝", terim: "Survey", tr: "anket", tanim: "Bir örneklem üzerinden soru sorarak toplanan veri. Sayımdan hızlı ve konuya özeldir.", ornek: "Mahalle sakinlerine toplu taşıma memnuniyeti sormak." },
            { ikon: "🧭", terim: "Census tract", tr: "sayım bölgesi", tanim: "Nüfus verisinin toplandığı küçük coğrafi birim; mahalle ölçeğinde karşılaştırma yapmayı sağlar.", ornek: "Bir kentin 200 sayım bölgesine ayrılıp haritalanması." }
          ] },
        { tip: "sekil", baslik: "Üç sayım bölgesinde nüfus", fig: { type: "table", head: ["Bölge", "2010", "2020", "Değişim"], rows: [["A", "4.000", "5.000", "+%25"], ["B", "3.000", "2.700", "−%10"], ["C", "2.000", "2.600", "+%30"]], caption: "Nüfus sayımı verisi (kurgusal)" } },
        { tip: "ornek", baslik: "Yüzde değişim", durum: "A bölgesinin nüfusu 2010'da 4.000, 2020'de 5.000. B bölgesi 3.000'den 2.700'e düştü. Yüzde değişimleri bul.", adimlar: ["A: (5.000 − 4.000) ÷ 4.000 = 1.000 ÷ 4.000 = %25.", "B: (2.700 − 3.000) ÷ 3.000 = −300 ÷ 3.000 = −%10.", "Değişim, her zaman ESKİ değere bölünür."],
          sonuc: "A bölgesi ==%25 büyüdü==, B bölgesi ==%10 küçüldü==. Sayım verisi nüfusun nerede arttığını ve azaldığını gösterir." }
      ]
    },
    {
      baslik: "Sayı değişimi gösterir, nedenini söylemez",
      kisa: "Nicel veri ne değiştiğini gösterir; neden ve hislerini nitel veri anlatır.",
      bloklar: [
        { tip: "grafik", baslik: "Bir mahallede kira ve gelir (kurgusal, 2000 = 4 endeksi)", xlabel: "Yıl", ylabel: "Endeks", xmax: 6, ymax: 12,
          xticks: [{ v: 1, label: "2000" }, { v: 3, label: "2010" }, { v: 5, label: "2020" }],
          ogeler: [
            { id: "kira", tip: "egri", renk: 0, etiket: "Kira", noktalar: [[1, 4], [3, 6], [5, 10]] },
            { id: "gelir", tip: "egri", renk: 2, etiket: "Gelir", noktalar: [[1, 4], [3, 5], [5, 6]], gizli: true },
            { id: "pk", tip: "nokta", x: 5, y: 10, etiket: "Kira 10", kilavuz: true, gizli: true },
            { id: "pg", tip: "nokta", x: 5, y: 6, etiket: "Gelir 6", kilavuz: true, gizli: true },
            { id: "yz", tip: "yazi", x: 3, y: 11.2, metin: "Nedeni ve hisleri: mülakat, saha çalışması", gizli: true }
          ],
          durumlar: [
            { metin: "Sayım ve kira verileri 2000'den 2020'ye ==kiranın hızla arttığını== gösteriyor." },
            { metin: "Aynı dönemde hane geliri çok daha yavaş artıyor.", goster: ["gelir"] },
            { metin: "2020'de kira 10, gelir 6: kira gelirden ==çok daha hızlı== arttı; makas açıldı.", goster: ["pk", "pg"] },
            { metin: "Sayılar bunu gösterir, ama ==neden== ve ==sakinler ne düşünüyor?== sorusunu ancak nitel veri cevaplar.", goster: ["yz"] }
          ] },
        { tip: "tuzak", metin: "Nicel veri nedensellik kanıtı sayılmamalıdır.", yanlis: "Kira ve nüfus birlikte arttıysa biri diğerinin sebebidir.", dogru: "Nicel veri ==değişimi ve örüntüyü== gösterir. Nedeni ve insanların tutumunu anlamak için saha çalışmasına ve anlatılara bakmak gerekir." }
      ]
    },
    {
      baslik: "Nitel veri: saha çalışması ve anlatılar",
      kisa: "Saha çalışması ve anlatılar, insanların kentsel değişime tutumunu gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥾", terim: "Field study", tr: "saha çalışması", tanim: "Araştırmacının mahalleye gidip gözlem yapması, fotoğraf çekmesi, haritalama ve mülakat yapması.", ornek: "Sokaktaki işyeri tabelalarını sayıp not almak." },
            { ikon: "📖", terim: "Narrative", tr: "anlatı", tanim: "İnsanların kendi hikâyesini anlatması: mülakat, günlük, sözlü tarih.", ornek: "Otuz yıllık bir esnafın mahalleyi anlatması." }
          ] },
        { tip: "hikaye", ikon: "🧓", baslik: "Mahallenin terzisi", metin: "Cemal usta otuz yıldır aynı sokakta terzilik yapıyor. Sayımda sadece bir 'işyeri' olarak görünüyor. Mülakatta anlatıyor: 'Yeni kafeler açıldı, müşteri çoğaldı ama eski komşularım kirayı ödeyemeyip taşındı.' Bu cümle hiçbir tabloda yok; ama değişimin insanlar için ne anlama geldiğini gösteriyor." }
      ]
    },
    {
      baslik: "Hangi soruya hangi veri?",
      kisa: "En güvenilir inceleme, iki veri türünü birlikte kullanır.",
      bloklar: [
        { tip: "tablo", baslik: "Soruya göre veri seçimi", head: ["Soru", "Veri türü", "Kaynak"], rows: [
            ["Mahalle on yılda kaç kişi arttı?", "Nicel", "Nüfus sayımı"],
            ["Hanelerin yüzde kaçı kiracı?", "Nicel", "Sayım ve anket"],
            ["Sakinler yeni kafelere neden tepki gösteriyor?", "Nitel", "Mülakat, anlatı"],
            ["Sokakta hangi yeni işyerleri açılmış?", "Nitel (gözlem)", "Saha çalışması"]
          ] },
        { tip: "liste", maddeler: [
            { ikon: "📏", baslik: "Sayım verisi", metin: "Geniş ve karşılaştırılabilir ama sakinlerin nedenlerini ve duygularını vermez." },
            { ikon: "🎤", baslik: "Mülakat ve gözlem", metin: "Derin ve anlamlı ama az sayıda kişiye dayanır; genellenemez." },
            { ikon: "🧮", baslik: "Birlikte kullanım", metin: "Sayı ne olduğunu, anlatı nedenini söyler." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Nicel veri sayıdır (nüfus, gelir, kira); nitel veri insanların anlattıkları ve gözlemlerdir.",
            "Nüfus sayımı ve anket, kentte nüfusun büyüklüğündeki ve bileşimindeki değişimi gösterir.",
            "Yüzde değişim = (yeni − eski) ÷ eski; A bölgesi 4.000'den 5.000'e: %25.",
            "Saha çalışması ve anlatılar, bireylerin kentsel değişime karşı tutumlarını gösterir.",
            "Sayı ne olduğunu gösterir; nedeni ve hisleri nitel veri anlatır.",
            "Nicel veri geniş ve karşılaştırılabilirdir; nitel veri derindir ama genellenemez.",
            "En iyi inceleme iki veri türünü birlikte kullanır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi nitel veriye örnektir?",
      opts: ["Bir mahalledeki ortalama hane geliri", "Eski bir sakinle mahallenin değişimi üzerine yapılan mülakat", "Sayım bölgesindeki nüfus", "Bir yıllık kira artış oranı"],
      a: 1, why: "Mülakat insanların tutumunu ve anlatısını verir: nitel. Diğerleri sayıyla ölçülür. En çekici yanlış şık A'dır; gelir bir sayı olduğu için nicel veridir." },
    { q: "Tablo bir sayım bölgesindeki nüfus verisini gösteriyor. 2010 ile 2020 arasındaki yüzde değişim nedir?",
      fig: { type: "table", head: ["Yıl", "Nüfus"], rows: [["2010", "5.000"], ["2020", "6.500"]], caption: "Sayım bölgesi X" },
      opts: ["%15", "%23", "%30", "%1.500"],
      a: 2, why: "Değişim = (6.500 − 5.000) ÷ 5.000 = 1.500 ÷ 5.000 = %30. B çekici yanlıştır: 1.500 ÷ 6.500 yapılırsa %23 çıkar, ama eski değere bölmek gerekir." },
    { q: "Bir araştırmacı, yeni açılan kafelerden sonra uzun yıllardır mahallede yaşayan insanların mahallenin kimliğine dair ne hissettiğini öğrenmek istiyor. Hangi yöntem en uygundur?",
      opts: ["Derinlemesine mülakat ve saha gözlemi", "Nüfus sayımı verilerinin haritalanması", "Hane gelirinin istatistiksel karşılaştırması", "Ortalama kira fiyatı hesaplaması"],
      a: 0, why: "İnsanların tutumu ve duyguları nitel veriyle, mülakat ve gözlemle anlaşılır. B çekici yanlıştır: sayım nüfusun büyüklüğünü ve bileşimini verir ama duyguları vermez." },
    { q: "Bir belediye kentsel nüfusun yaş ve gelir bileşimindeki on yıllık değişimi incelemek istiyor. Hangi veri kaynağı en uygundur?",
      opts: ["Mahalle sakinleriyle yapılan serbest sohbetler", "Tek bir esnafla yapılan mülakat", "Fotoğraf ve saha notları", "Nüfus sayımı ve anket verileri"],
      a: 3, why: "Nüfus büyüklüğü ve bileşimindeki değişim, sayım ve anket gibi nicel verilerle izlenir. Diğer şıklar nitel veri sağlar ve genellenemez." },
    { q: "Bir araştırma ekibi bir mahallede hem sayım verilerini (kira, gelir, nüfus) hem de sakinlerle yapılan mülakatları kullanıyor. Bu yaklaşımın amacı nedir?",
      opts: ["İkisi aynı bilgiyi vereceği için tekrar yapmak", "Sayıların ne değiştiğini, anlatıların ise nedenini ve insanların tutumunu göstermesi", "Yalnızca sayıların yanıltıcı olduğunu kanıtlamak", "Nitel verinin nicel veriden daha doğru olduğunu göstermek"],
      a: 1, why: "İki veri türü birbirini tamamlar: sayı değişimi, anlatı nedeni ve tutumu gösterir. C ve D tek bir veri türünü üstün sayar; A ise ikisinin farklı bilgi verdiğini gözden kaçırır." }
  ]
};
