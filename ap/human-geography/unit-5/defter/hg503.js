/* Kitora not defteri · hg503 · Tarımın Kökenleri ve Yayılması (5.3)
   Kaynak: AP HuG CED Topic 5.3 (SPS-5.A, SPS-5.B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg503",
  amac: "Bu konu tarımın nerede başladığını ve dünyaya nasıl yayıldığını anlatıyor. Bitki ve hayvanların ilk evcilleştirildiği ocakları (Verimli Hilal, İndus Vadisi, Güneydoğu Asya, Orta Amerika) ve 1492'den sonraki *Columbian Exchange*'i öğreneceksin.",
  bolumler: [
    {
      baslik: "Avcı-toplayıcılıktan çiftçiliğe",
      kisa: "Evcilleştirme, avcı-toplayıcıyı yerleşik çiftçiye çevirdi.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌾", terim: "Domestication", tr: "evcilleştirme", tanim: "İnsanın yabani bitki ve hayvanları bilinçli seçip yetiştirerek kendi ihtiyacına uygun hâle getirmesi. Tohumlar iri, hayvanlar uysal olur.", ornek: "Yabani teosinteden mısırın, kurttan köpeğin ortaya çıkması." },
            { ikon: "📍", terim: "Hearth", tr: "ocak, merkez", tanim: "Bir yeniliğin ilk ortaya çıktığı ve sonra dışarı yayıldığı merkez. Tarımda evcilleştirmenin ilk yapıldığı bölgelerdir.", ornek: "Verimli Hilal, buğdayın ocağıdır." },
            { ikon: "🏺", terim: "First Agricultural Revolution", tr: "Birinci Tarım Devrimi (Neolitik)", tanim: "Yaklaşık 10-12 bin yıl önce avcı-toplayıcılıktan tarıma geçiş. İnsanlar yerleşik yaşamaya başladı.", ornek: "Göçebe avcılardan Çatalhöyük gibi kalıcı köylere geçiş." }
          ] },
        { tip: "ikili", sol: { ikon: "🏹", baslik: "Avcı-toplayıcı yaşam", maddeler: ["Besin doğadan toplanır ve avlanır", "Sürekli yer değiştirilir; nüfus yoğunluğu düşük"] },
          sag: { ikon: "🌾", baslik: "Tarıma geçiş", maddeler: ["Bitki ve hayvan yetiştirilir", "Fazla ürün, kalıcı köy, uzmanlaşma"] },
          oyun: [
            { metin: "Aile, meyve ve av peşinde mevsimle yer değiştirir.", cevap: "sol", neden: "Besin için sürekli yer değiştirmek avcı-toplayıcı yaşamdır." },
            { metin: "Fazla buğday depolanır; bir kısım insan zanaatkâr olur.", cevap: "sag", neden: "Fazla ürün ve uzmanlaşma tarımın sonucudur." },
            { metin: "Köyler kalıcıdır; hayvanlar ağılda tutulur.", cevap: "sag", neden: "Kalıcı yerleşim ve evcil hayvan: tarım." },
            { metin: "Bir bölgede çok az insan yaşar, çünkü doğa az besin sağlar.", cevap: "sol", neden: "Doğadan toplanan besin az kişiyi doyurur." }
          ] }
      ]
    },
    {
      baslik: "İlk evcilleştirme ocakları",
      kisa: "CED şu dört ocağı sayar: Verimli Hilal, İndus, Güneydoğu Asya, Orta Amerika.",
      bloklar: [
        { tip: "tablo", baslik: "Dört ocak, farklı bitki ve hayvanlar", head: ["Ocak", "Bitkiler", "Hayvanlar"], rows: [
            ["*Fertile Crescent* (Verimli Hilal, Güneybatı Asya)", "Buğday, arpa, mercimek, nohut", "Koyun, keçi, sığır, domuz"],
            ["*Indus River Valley* (İndus Vadisi)", "Buğday, arpa, pamuk", "Zebu sığırı"],
            ["Güneydoğu Asya", "Taro, yam, muz, pirinç", "Tavuk, domuz"],
            ["Orta Amerika", "Mısır, fasulye, kabak, biber, kakao", "Hindi"]
          ], not: "Çin, And Dağları, Afrika ve Yeni Gine gibi başka merkezler de vardır; CED yukarıdaki dördünü adıyla sayar." },
        { tip: "tuzak", metin: "Tarım tek bir yerde icat edilip dünyaya yayılmadı.", yanlis: "Tarım yalnızca Verimli Hilal'de başladı ve oradan bütün dünyaya yayıldı.", dogru: "Tarım **birbirinden bağımsız birkaç ocakta** ortaya çıktı; her ocak kendi bitki ve hayvanlarını evcilleştirdi (örneğin buğday Verimli Hilal'de, mısır Orta Amerika'da)." }
      ]
    },
    {
      baslik: "Tarım devrimleri: yayılmanın üç dalgası",
      kisa: "Tarım ocaklardan yayıldı; üç devrim bu yayılmanın itici gücüdür.",
      bloklar: [
        { tip: "adimlar", baslik: "Bir ocaktan dünyaya", adimlar: [
            { baslik: "Ocakta evcilleştirme", metin: "Bir bölgede belirli bitki ve hayvanlar evcilleştirilir." },
            { baslik: "Fazla ürün, nüfus artışı", metin: "Fazla besin nüfusu artırır; yeni topraklara ihtiyaç doğar." },
            { baslik: "Göç ve komşudan komşuya", metin: "Göçmen çiftçiler tohum ve hayvanları yanlarında taşır (*relocation diffusion*); komşu topluluklar yöntemi benimser (*expansion diffusion*)." },
            { baslik: "Ticaret ve keşif yolları", metin: "Tüccarlar ve denizciler bitki-hayvanları uzak kıtalara taşır; en büyük örnek *Columbian Exchange*'dir." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "10-12 bin yıl önce", baslik: "Birinci Tarım Devrimi", metin: "Evcilleştirme ve yerleşik köyler." },
            { tarih: "1492'den sonra", baslik: "*Columbian Exchange*", metin: "Eski ve Yeni Dünya arasında bitki, hayvan ve hastalık değişimi." },
            { tarih: "1700-1800'ler", baslik: "İkinci Tarım Devrimi", metin: "Britanya'dan yayılan makineleşme ve yeni teknikler (konu 5.4)." },
            { tarih: "1960'lardan itibaren", baslik: "Yeşil Devrim", metin: "Yüksek verimli tohum ve kimyasallar (konu 5.5)." }
          ] }
      ]
    },
    {
      baslik: "*Columbian Exchange*",
      kisa: "1492'den sonra bitki, hayvan ve hastalık iki yönde okyanus aştı.",
      bloklar: [
        { tip: "grafik", baslik: "Atlantik'in iki yanı (şematik)", xlabel: "Eski Dünya ←  Atlantik  → Yeni Dünya", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "atl", tip: "cizgi", renk: 1, kesik: true, from: [5, 0.8], to: [5, 8.6] },
            { id: "ed", tip: "yazi", x: 2.2, y: 9.3, metin: "ESKİ DÜNYA" },
            { id: "yd", tip: "yazi", x: 7.8, y: 9.3, metin: "YENİ DÜNYA" },
            { id: "o1", tip: "ok", from: [2.6, 6.6], to: [7.4, 6.6], gizli: true },
            { id: "t1", tip: "yazi", x: 5, y: 7.3, metin: "buğday · şeker kamışı · sığır · at · kahve", gizli: true },
            { id: "t1b", tip: "yazi", x: 5, y: 5.8, metin: "+ çiçek ve kızamık hastalıkları", gizli: true },
            { id: "o2", tip: "ok", from: [7.4, 3.6], to: [2.6, 3.6], gizli: true },
            { id: "t2", tip: "yazi", x: 5, y: 4.3, metin: "mısır · patates · domates · biber · kakao", gizli: true },
            { id: "t2b", tip: "yazi", x: 5, y: 2.7, metin: "+ manyok, tütün, fasulye", gizli: true },
            { id: "son", tip: "yazi", x: 5, y: 1.3, metin: "→ mutfaklar, nüfuslar ve ekonomiler değişti", gizli: true }
          ],
          durumlar: [
            { metin: "1492'den önce iki yarımküre ayrı tarım dünyalarıdır; bitki ve hayvanlar farklıdır." },
            { metin: "==Eski Dünya'dan Yeni Dünya'ya==: buğday, şeker kamışı, kahve, at, sığır... ve ölümcül hastalıklar.", goster: ["o1", "t1", "t1b"] },
            { metin: "==Yeni Dünya'dan Eski Dünya'ya==: mısır, patates, domates, biber, kakao, manyok, tütün.", goster: ["o2", "t2", "t2b"] },
            { metin: "Değişim **iki yönlüdür** ve kalıcıdır: her iki yarımkürenin sofrası, nüfusu ve ekonomisi değişti.", goster: ["son"] }
          ] },
        { tip: "tablo", baslik: "Kim neyi taşıdı?", head: ["", "Eski Dünya → Yeni Dünya", "Yeni Dünya → Eski Dünya"], rows: [
            ["Bitkiler", "Buğday, pirinç, şeker kamışı, kahve, muz", "Mısır, patates, domates, biber, kakao, manyok, tütün"],
            ["Hayvanlar", "At, sığır, domuz, koyun, tavuk", "Hindi"],
            ["Hastalıklar", "Çiçek, kızamık, grip", "—"]
          ] }
      ]
    },
    {
      baslik: "Değişimin sonuçları",
      kisa: "Yeni bitkiler nüfusu artırdı, hastalıklar yerli halkları kırdı.",
      bloklar: [
        { tip: "ornek", baslik: "Menemenin kökenleri", durum: "Kahvaltıda menemen yiyorsun: yumurta, domates, biber, soğan, zeytinyağı. Hangi malzemeler Yeni Dünya kökenlidir, yani *Columbian Exchange* ile Eski Dünya'ya geçmiştir?",
          adimlar: ["Domates: Orta ve Güney Amerika kökenli, Yeni Dünya.", "Biber: Amerika kökenli, Yeni Dünya.", "Yumurta: tavuk Güneydoğu Asya kökenli evcil bir kuştur, Eski Dünya.", "Soğan ve zeytinyağı: Asya ve Akdeniz kökenli, Eski Dünya."],
          sonuc: "==Domates ve biber Yeni Dünya'dandır; yumurta, soğan ve zeytinyağı Eski Dünya'dandır.== Yani 1492'den önce Anadolu'da menemen yoktu." },
        { tip: "liste", maddeler: [
            { ikon: "🥔", baslik: "Avrupa'da nüfus artışı", metin: "Patates az yerde çok besin verdi. Ama İrlanda'da tek çeşit patatese bağımlılık 1845'te büyük kıtlığa yol açtı." },
            { ikon: "🦠", baslik: "Amerika'da yerli nüfus çöküşü", metin: "Bağışıklığı olmayan yerli halklar çiçek ve kızamıktan kırıldı." },
            { ikon: "🌽", baslik: "Yeni temel gıdalar", metin: "Mısır ve manyok Afrika'da, mısır ve tatlı patates Çin'de önemli besin oldu." },
            { ikon: "🍬", baslik: "Plantasyonlar ve köle ticareti", metin: "Karayipler ve Brezilya'daki şeker kamışı plantasyonları, Afrikalı kölelerin zorla getirilmesiyle büyüdü." }
          ] },
        { tip: "tuzak", metin: "*Columbian Exchange* yalnızca \"Avrupalıların Amerika'ya bitki götürmesi\" değildir.", yanlis: "Değişim tek yönlüdür: Avrupa Amerika'ya bitki ve hayvan götürmüştür.", dogru: "Değişim **iki yönlüdür** ve yalnızca bitki-hayvanı değil **hastalıkları** da kapsar. Mısır, patates, domates ve kakao Amerika'dan Eski Dünya'ya geçti; buğday, at, sığır ve çiçek hastalığı Amerika'ya." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Domestication* (evcilleştirme), avcı-toplayıcıyı yerleşik çiftçiye çevirdi; ilk geçişe Birinci Tarım Devrimi denir (yaklaşık 10-12 bin yıl önce).",
            "İlk ocaklar: *Fertile Crescent* (buğday, arpa; koyun, keçi), *Indus River Valley*, Güneydoğu Asya (taro, muz, pirinç; tavuk), Orta Amerika (mısır, fasulye, kabak).",
            "Tarım tek ocaktan değil, birbirinden bağımsız birkaç ocaktan doğdu.",
            "Tarım göç, komşudan komşuya aktarım ve ticaretle ocaklardan dışarı yayıldı.",
            "Yayılmanın dalgaları: Birinci Tarım Devrimi, *Columbian Exchange*, İkinci Tarım Devrimi, Yeşil Devrim.",
            "*Columbian Exchange* (1492 sonrası): Eski Dünya'dan buğday, şeker kamışı, kahve, at, sığır, hastalıklar; Yeni Dünya'dan mısır, patates, domates, kakao, manyok.",
            "Sonuçlar: Avrupa'da nüfus artışı (patates), Amerika'da hastalıkla yerli nüfus çöküşü, plantasyonlar ve köle ticareti."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir arkeolog yaklaşık 10 bin yıllık buğday, arpa ve mercimek kalıntıları ile evcilleştirilmiş koyun ve keçi kemikleri buluyor. Bu buluntular en olası hangi ocaktan gelir?",
      opts: ["*Fertile Crescent* (Verimli Hilal)", "Orta Amerika", "Sibirya tundrası", "Kuzey Avrupa ormanları"],
      a: 0, why: "Buğday, arpa, mercimek, koyun ve keçi Verimli Hilal'in evcilleştirme paketidir. B çekici bir yanlıştır: Orta Amerika'nın paketi mısır, fasulye ve kabaktır." },
    { q: "Aşağıdakilerden hangisi *Columbian Exchange* ile Yeni Dünya'dan Eski Dünya'ya geçmiştir?",
      opts: ["Buğday", "Sığır", "Patates", "Çiçek hastalığı"],
      a: 2, why: "Patates And Dağları kökenlidir ve Eski Dünya'ya Yeni Dünya'dan gitmiştir. D çekici bir yanlıştır: çiçek hastalığı Eski Dünya'dan Amerika'ya geçmiştir." },
    { q: "19. yüzyıl İrlandası'nda yoksul halkın temel besini tek çeşit patatesti; 1845'te patates hastalığı yayılınca büyük kıtlık yaşandı. Bu durum hangi sonucu gösterir?",
      opts: ["Eski Dünya hastalıkları Amerika'daki yerli nüfusu kırdı.", "Patates, Eski Dünya'da evcilleştirildi.", "Şeker kamışı plantasyonları kıtlığa yol açtı.", "Yeni Dünya bitkisi Avrupa'da nüfus artışı sağladı ama tek bitkiye bağımlılık kırılganlık yarattı."],
      a: 3, why: "Patates Avrupa'da nüfusu artırdı, ama tek çeşide bağımlılık kıtlığı büyüttü. A *Columbian Exchange*'in başka bir sonucudur; senaryoyla ilgisi yoktur." },
    { q: "Tabloya göre aşağıdakilerden hangisi doğrudur?",
      fig: { type: "table", caption: "Bazı ürünlerin bilinen ilk evcilleştirme bölgeleri", head: ["Ürün", "Evcilleştirme bölgesi"], rows: [["Buğday", "Verimli Hilal"], ["Mısır", "Orta Amerika"], ["Taro, yam", "Güneydoğu Asya"], ["Pamuk", "İndus Vadisi"]] },
      opts: ["Bütün ürünler önce Verimli Hilal'de evcilleştirilip sonra yayıldı.", "Tarım birden fazla bölgede, farklı bitkilerle bağımsız olarak başladı.", "Mısır Güneydoğu Asya'dan Amerika'ya taşındı.", "Evcilleştirme yalnızca hayvanlar için geçerlidir."],
      a: 1, why: "Tablodaki ürünler farklı bölgelerde evcilleştirilmiştir; bu, birden fazla bağımsız ocağa işaret eder. A çekici ama yanlıştır: tek merkezli yayılma tabloyla çelişir." },
    { q: "Birinci Tarım Devrimi'nin hemen ardından en olası sonuç hangisidir?",
      opts: ["Nüfusun azalması ve göçebeliğin artması", "Besin üretiminin düşmesi", "Fazla ürün, kalıcı köyler ve nüfus artışı", "Bütün topluluklarda avcı-toplayıcılığın yaygınlaşması"],
      a: 2, why: "Evcilleştirme fazla ürün, yerleşik köyler ve nüfus artışı getirdi. A ve D tarım öncesi duruma aittir." }
  ]
};
