/* Kitora not defteri · hg504 · İkinci Tarım Devrimi (5.4)
   Kaynak: AP HuG CED Topic 5.4 (SPS-5.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg504",
  amac: "Bu konu 1700'lerden itibaren Britanya'da başlayan İkinci Tarım Devrimi'ni anlatıyor. Yeni teknikler ve makineler verimi nasıl artırdı, bu da beslenmeyi, ömrü, nüfusu ve fabrikalardaki işgücünü nasıl değiştirdi, öğreneceksin.",
  bolumler: [
    {
      baslik: "Ne zaman, nerede, hangi yenilikler?",
      kisa: "Britanya'da 1700'lerde başlayan, teknik ve makineyle verimi artıran dönem.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "1700'ler başı", baslik: "*Seed drill*", metin: "Jethro Tull'un tohum ekme makinesi tohumu sıra sıra ve eşit derinliğe eker." },
            { tarih: "1700'ler", baslik: "Dönüşümlü ekim ve çit hareketi", metin: "Dört yıllık nöbetleşe ekim yaygınlaşır; ortak araziler çitle çevrilir." },
            { tarih: "1700'ler ortası", baslik: "Seçici ıslah", metin: "Robert Bakewell daha etli ve verimli koyun ve sığır ırkları geliştirir." },
            { tarih: "1800'ler", baslik: "Makineleşme", metin: "Çelik pulluk, biçme ve harman makineleri; demiryolu ve buharlı gemi ürünü pazara ulaştırır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🚧", terim: "Enclosure movement", tr: "çit hareketi", tanim: "Köylülerin ortak kullandığı otlak ve tarlaların büyük toprak sahiplerince çitlenip özel mülke çevrilmesi. Büyük ve verimli işletmeler doğdu, birçok küçük çiftçi topraksız kaldı.", ornek: "Ortak otlağını kaybedip kente göç eden köylü aile." },
            { ikon: "🔄", terim: "Crop rotation", tr: "nöbetleşe (dönüşümlü) ekim", tanim: "Aynı tarlada her yıl farklı ürün ekilir (buğday, şalgam, arpa, yonca). Tarla boş bırakılmaz; yonca toprağa azot kazandırır, şalgam hayvana yem olur.", ornek: "Britanya'daki dört yıllık Norfolk düzeni." },
            { ikon: "🐑", terim: "Selective breeding", tr: "seçici ıslah", tanim: "Daha çok et, süt ya da yün veren hayvanların seçilip çiftleştirilmesi. Aynı yemden daha çok ürün alınır.", ornek: "Daha iri ve etli koyun ırkları." },
            { ikon: "🚜", terim: "Mechanization", tr: "makineleşme", tanim: "El aleti ve insan gücü yerine makine kullanımı: demir ve çelik pulluk, ekme, biçme, harman makineleri. Az işçiyle çok iş yapılır.", ornek: "Tohum ekme makinesi, biçme makinesi." }
          ] }
      ]
    },
    {
      baslik: "Birinci ve İkinci Tarım Devrimi",
      kisa: "Birincisi tarımı başlattı; ikincisi makine ve tekniklerle verimi sıçrattı.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌾", baslik: "Birinci Tarım Devrimi", maddeler: ["Yaklaşık 10-12 bin yıl önce; evcilleştirme", "Ocaklar: Verimli Hilal gibi bölgeler; el aleti ve hayvan gücü"] },
          sag: { ikon: "🚜", baslik: "İkinci Tarım Devrimi", maddeler: ["1700-1800'ler; Britanya'dan Avrupa ve Kuzey Amerika'ya", "Dönüşümlü ekim, seçici ıslah, makineleşme, çit hareketi"] },
          oyun: [
            { metin: "Yabani bitkiler ilk kez ekilip evcilleştirildi.", cevap: "sol", neden: "Evcilleştirmenin başlangıcı Birinci Tarım Devrimi'dir." },
            { metin: "Büyük toprak sahipleri ortak araziyi çitleyip özel mülke çevirdi.", cevap: "sag", neden: "Çit hareketi İkinci Tarım Devrimi'nin parçasıdır." },
            { metin: "Çiftçiler yalnızca el aletleri ve hayvan gücü kullanıyor.", cevap: "sol", neden: "Makineleşme ikinci devrimle gelir." },
            { metin: "Tohum ekme makinesi ve çelik pulluk yaygınlaşıyor.", cevap: "sag", neden: "Makineleşme: İkinci Tarım Devrimi." },
            { metin: "Fazla ürün kentlerde fabrika işçilerini besliyor.", cevap: "sag", neden: "Sanayi Devrimi ile bağlantılı ikinci devrimin sonucu." }
          ] },
        { tip: "tuzak", metin: "İkinci Tarım Devrimi ile Sanayi Devrimi iç içedir; biri ötekinin \"öncesi\" değildir.", yanlis: "Önce fabrikalar kuruldu, sonra çiftliklere makine geldi ve fabrika işçileri tarıma döndü.", dogru: "İkisi **birlikte** ilerledi: tarımda verim artınca çiftliklerde daha az işçi gerekti, boşa çıkanlar **fabrikalara** gitti; kentler büyüyünce de daha çok besine ihtiyaç doğdu." }
      ]
    },
    {
      baslik: "Teknolojiden fabrikaya zincir",
      kisa: "Fazla ürün beslenmeyi iyileştirir, ömrü uzatır, işçiyi fabrikaya gönderir.",
      bloklar: [
        { tip: "adimlar", baslik: "Neden-sonuç zinciri", adimlar: [
            { baslik: "Yeni teknik", metin: "Dönüşümlü ekim, seçici ıslah, tohum ekme makinesi ve makineler hektar başına ürünü artırır." },
            { baslik: "Daha iyi beslenme", metin: "Besin bolluğu ve çeşitliliği artar; insanlar daha iyi beslenir." },
            { baslik: "Daha uzun ömür, nüfus artışı", metin: "Ölüm oranı düşer, yaşam süresi uzar; nüfus artar." },
            { baslik: "Az çiftçi yeter", metin: "Tarımda gereken işçi sayısı azalır; çitlenen arazilerden kopanlar kentlere göç eder." },
            { baslik: "Fabrikalara işgücü", metin: "Kentlerdeki fabrikalar çalışacak insan bulur; Sanayi Devrimi hızlanır." }
          ] },
        { tip: "grafik", baslik: "Yön gösteren şematik eğriler (sayı değil, eğilim)", xlabel: "Zaman", ylabel: "Göreli düzey", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "1700" }, { v: 4.5, label: "1800" }, { v: 8, label: "1900" }],
          ogeler: [
            { id: "ver", tip: "egri", renk: 0, etiket: "verim", noktalar: [[1, 2], [2.5, 2.6], [4.5, 4.4], [6, 6.2], [8, 8.4]] },
            { id: "tar", tip: "egri", renk: 1, etiket: "çiftçi payı", noktalar: [[1, 8.2], [2.5, 7.6], [4.5, 5.8], [6, 3.8], [8, 1.8]], gizli: true },
            { id: "ken", tip: "egri", renk: 3, etiket: "kentli payı", noktalar: [[1, 1.0], [2.5, 1.6], [4.5, 3.0], [6, 4.8], [8, 6.5]], gizli: true }
          ],
          durumlar: [
            { metin: "Yeni teknikler ve makineler sayesinde hektar başına ==ürün artar==." },
            { metin: "Daha az işçi gerektiği için tarımda çalışanların toplam içindeki ==payı düşer==.", goster: ["tar"] },
            { metin: "Boşa çıkan insanlar kentlere ve fabrikalara gider; ==kentli payı artar==.", goster: ["ken"] }
          ] },
        { tip: "ornek", baslik: "Kaç çiftçi yeter?", durum: "Bir bölgede 100 çiftçi var ve her biri kendisi dahil 2 kişiyi doyuruyor. Yeni tekniklerle bir çiftçi kendisi dahil 4 kişiyi doyurabiliyor. Bölgenin nüfusu 200 ise kaç çiftçi yeter? Boşa çıkanlar ne yapar?",
          adimlar: ["Eskiden: 100 çiftçi × 2 kişi = 200 kişi doyuyordu.", "Şimdi bir çiftçi 4 kişiyi doyuruyor: 200 ÷ 4 = 50 çiftçi yeter.", "Boşa çıkan çiftçi sayısı: 100 − 50 = 50."],
          sonuc: "==50 çiftçi yeter; 50 kişi fabrikada çalışabilir.== Üstelik 100 çiftçi şimdi 100 × 4 = 400 kişiyi doyurabilir: nüfus artışına da yer var." }
      ]
    },
    {
      baslik: "Yararlar ve bedeller",
      kisa: "Besin ve ömür arttı; ama birçok köylü topraksız kalıp kente göçtü.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "➕", baslik: "Yararlar", maddeler: ["Daha bol ve çeşitli besin, daha iyi beslenme", "Daha uzun ömür; fabrikalar için işgücü"] },
          sag: { ikon: "➖", baslik: "Bedeller", maddeler: ["Çitlenen arazilerde küçük çiftçi topraksız kaldı", "Kentte kalabalık, kötü çalışma koşulları"] },
          oyun: [
            { metin: "Çocuklar daha çeşitli besleniyor ve daha uzun yaşıyor.", cevap: "sol", neden: "Beslenme ve ömürdeki iyileşme temel yarardır." },
            { metin: "Ortak otlağını kaybeden aile geçimini sağlayamıyor.", cevap: "sag", neden: "Çit hareketinin bedeli: topraksızlaşma." },
            { metin: "Köyden gelenler fabrikalarda iş buluyor.", cevap: "sol", neden: "Fabrikalar için işgücü sağlanması sonuçtur." },
            { metin: "Yeni işçiler kalabalık ve sağlıksız mahallelerde yaşıyor.", cevap: "sag", neden: "Hızlı kentleşmenin bedeli." }
          ] },
        { tip: "tuzak", metin: "İkinci Tarım Devrimi ile Yeşil Devrim'i karıştırma.", yanlis: "İkinci Tarım Devrimi, 1960'larda gelişmekte olan ülkelerde yüksek verimli tohumlarla gerçekleşti.", dogru: "İkinci devrim **1700-1800'lerde Britanya'dan** yayılan dönüşümlü ekim, makineleşme ve çit hareketidir. Yüksek verimli tohum ve kimyasallar **Yeşil Devrim**'dir (1960'lar, gelişmekte olan ülkeler, konu 5.5)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İkinci Tarım Devrimi: 1700-1800'lerde Britanya'dan yayılan, yeni teknik ve makinelerle verimi artıran dönem.",
            "Yenilikler: *seed drill*, *crop rotation* (nöbetleşe ekim), *selective breeding*, *enclosure movement*, çelik pulluk ve makineleşme.",
            "Zincir: yeni teknoloji → fazla ürün → daha iyi beslenme → daha uzun ömür, nüfus artışı.",
            "Az çiftçi yeterli olunca kırdan kente göç oldu; fabrikalar için işgücü sağlandı (Sanayi Devrimi ile iç içe).",
            "Küçük sayı örneği: bir çiftçi 2 yerine 4 kişi doyurursa 200 kişi için 100 yerine 50 çiftçi yeter.",
            "Bedeller: çitlenen arazilerde köylüler topraksız kaldı, kentlerde kalabalık ve ağır çalışma koşulları görüldü.",
            "Yeşil Devrim'den farkı: İkinci devrim Britanya merkezli ve makine odaklıdır; Yeşil Devrim 1960'lardan sonra gelişmekte olan ülkelerdedir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi İkinci Tarım Devrimi'nin sonuçlarından biridir?",
      opts: ["Yüksek verimli tohumlarla Asya'da buğday veriminin sıçraması", "Mısırın Orta Amerika'da evcilleştirilmesi", "Besin üretiminin artması, kırdan kente göç ve fabrikalar için işgücü", "Hayvanların ilk kez evcilleştirilmesi"],
      a: 2, why: "İkinci devrim fazla besin, daha iyi beslenme, uzun ömür ve fabrika işgücü getirdi. A çekici bir yanlıştır: o Yeşil Devrim'dir. B ve D Birinci Tarım Devrimi'ne aittir." },
    { q: "18. yüzyıl Britanya'sında bir köyün ortak otlağı ve tarlaları büyük bir toprak sahibi tarafından çitlenip özel mülke çevriliyor. Bu uygulama ve olası sonucu hangisidir?",
      opts: ["*Enclosure movement*; birçok köylü topraksız kalıp kente göç eder.", "*Green Revolution*; köylüler yüksek verimli tohum kullanır.", "*Shifting cultivation*; köylüler başka orman parçasına geçer.", "*Plantation agriculture*; köylüler ihracat için çay yetiştirir."],
      a: 0, why: "Ortak arazinin çitlenmesi *enclosure movement*'tır ve topraksızlaşmaya yol açtı. B yanlıştır: Yeşil Devrim 1960'lar ve gelişmekte olan ülkelerdir." },
    { q: "Bir bölgede her çiftçi başlangıçta 3 kişiyi doyuruyor; yeni tekniklerle 6 kişiyi doyurmaya başlıyor. Nüfus 300 kişi ve sabit kalırsa gereken çiftçi sayısı nasıl değişir?",
      opts: ["100'den 75'e iner.", "100'den 50'ye iner.", "50'den 100'e çıkar.", "150'den 50'ye iner."],
      a: 1, why: "Önce 300 ÷ 3 = 100, sonra 300 ÷ 6 = 50 çiftçi gerekir; 50 kişi tarımdan boşa çıkar ve fabrikalara gidebilir. A ve D yanlış bölme; C yönü tersine çevirir." },
    { q: "Varsayımsal bir ülkeye ait tabloya göre hangi yorum en iyi açıklamadır?",
      fig: { type: "table", caption: "Varsayımsal bir ülke", head: ["Gösterge", "1700'lerin başı", "1850'ler"], rows: [["Hektar başına buğday (ton)", 1, 2], ["Tarımda çalışanların payı (%)", 60, 30], ["Fabrikada çalışanların payı (%)", 5, 25]] },
      opts: ["Fabrikaların artması tarımın verimini düşürdü.", "Tarımda çalışan sayısı arttığı için verim yükseldi.", "Verim artışı Yeşil Devrim'den kaynaklanıyor.", "Tarımda verim artınca daha az çiftçi yetti; boşa çıkan işgücü fabrikalara kaydı."],
      a: 3, why: "Verim iki katına çıkarken tarımdaki pay yarıya inmiş, fabrikadaki pay artmıştır: boşa çıkan işgücü sanayiye geçti. C yanlış: 1700-1850 arası İkinci Tarım Devrimi dönemidir, Yeşil Devrim değil." },
    { q: "İkinci Tarım Devrimi'ni Yeşil Devrim'den ayıran en önemli özellik hangisidir?",
      opts: ["İkincisi gelişmekte olan ülkelerde, 1960'lardan sonra yaşandı.", "Yeşil Devrim'de hiç kimyasal kullanılmadı.", "İkinci devrim 1700-1800'lerde Britanya merkezlidir; Yeşil Devrim 1960'lardan sonra gelişmekte olan ülkelerde yüksek verimli tohum ve kimyasalla gerçekleşti.", "İkisi de aynı dönemde ve aynı bölgede yaşandı."],
      a: 2, why: "İkinci devrim erken sanayi dönemi Britanya'sının, Yeşil Devrim ise 1960'lar sonrası gelişmekte olan dünyanın hikâyesidir. A ikisini yer değiştirmiş: çekici ama yanlış." }
  ]
};
