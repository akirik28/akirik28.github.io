/* Kitpath not defteri · py304 · 3.4 Yaşam Boyu Bilişsel Gelişim
   Kaynak: AP Psychology CED (2024) Topic 3.4. Blok türleri: /ap/_kit/defter.js başı.
   Not: grafiklerdeki eğriler şematiktir (genel eğilimi gösterir, ölçüm değildir). */
window.DEFTER = {
  slug: "py304",
  amac: "Bu konu çocukların ve yetişkinlerin düşünme biçiminin nasıl geliştiğini anlatıyor. Piaget'nin dört evresini, Vygotsky'nin ZPD ve scaffolding fikrini ve yetişkinlikte akışkan ile kristalize zekânın farklı seyrini öğreneceksin.",
  bolumler: [
    {
      baslik: "Piaget'nin temeli: şema, asimilasyon, akomodasyon",
      kisa: "Çocuk dünyayı şemalarla kurar; yeni bilgiyi ya şemaya sığdırır ya şemayı değiştirir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗂️", terim: "Schema", tr: "şema", tanim: "Dünyayı anlamak için kullandığımız zihinsel çerçeve ya da kategori.", ornek: "“Dört ayaklı, tüylü, havlayan şey köpektir.”" },
            { ikon: "🧩", terim: "Assimilation", tr: "özümseme", tanim: "Yeni bilgiyi mevcut şemaya sığdırmak.", ornek: "İlk kez kedi gören çocuk “köpek!” der." },
            { ikon: "🔧", terim: "Accommodation", tr: "uyum sağlama", tanim: "Mevcut şemayı değiştirmek ya da yeni bir şema kurmak.", ornek: "Çocuk “kedi” için ayrı bir şema oluşturur." }
          ] },
        { tip: "adimlar", baslik: "Bir çocuk ve iki hayvan", adimlar: [
            { baslik: "1 · Şema", metin: "Çocuk köpeği biliyor: tüylü, dört ayaklı, havlar." },
            { baslik: "2 · Asimilasyon", metin: "Kediyi görünce “köpek!” diyor; yeni hayvanı eski şemaya sığdırıyor." },
            { baslik: "3 · Uyuşmazlık", metin: "Kedi miyavlıyor, havlamıyor; şema tam uymuyor." },
            { baslik: "4 · Akomodasyon", metin: "Çocuk yeni bir “kedi” şeması kuruyor. Şema değişti, anlayış büyüdü." }
          ] },
        { tip: "not", metin: "Piaget'ye göre şemalar bu iki süreçle (==sürekli== işleyen bir mekanizma) gelişir; ama sonuçta düşünme biçimi nitelik olarak değişir ve ==aşamalar== (süreksiz) ortaya çıkar. Bu, 3.1'deki *continuity* ve *discontinuity* tartışmasının örneğidir." }
      ]
    },
    {
      baslik: "Dört evre: Piaget'nin zaman çizelgesi",
      kisa: "Evreler her çocukta aynı sırayla ilerler: duyusal-motor, işlem öncesi, somut işlemsel, soyut işlemsel.",
      bloklar: [
        { tip: "zaman", olaylar: [
            { tarih: "Yaklaşık 0–2 yaş", baslik: "*Sensorimotor*: duyusal-motor", metin: "Bebek duyuları ve hareketleriyle öğrenir. ==Nesne devamlılığı== gelişir." },
            { tarih: "Yaklaşık 2–7 yaş", baslik: "*Preoperational*: işlem öncesi", metin: "Zihinsel sembolleri kullanır ve rol yapar; ==korunum== ve tersine çevirmeyi yapamaz. Zihin kuramı oluşmaya başlar." },
            { tarih: "Yaklaşık 7–11 yaş", baslik: "*Concrete operational*: somut işlemsel", metin: "Somut olaylarda mantık yürütür, korunumu kavrar; soyut ve sistematik düşünmede zorlanır." },
            { tarih: "Yaklaşık 12 yaştan itibaren", baslik: "*Formal operational*: soyut işlemsel", metin: "Soyut ve varsayımsal düşünür. Piaget herkesin bu evreye ulaşmadığını öne sürdü." }
          ] },
        { tip: "tuzak", metin: "Yaş aralıkları yaklaşıktır; sınavda değil, evrelerin ==sırası== ve ayırt edici özellikleri önemlidir.", yanlis: "Her çocuk evrelere tam olarak aynı yaşlarda geçer ve herkes sonunda soyut işlemsel evreye ulaşır.", dogru: "Sıra aynıdır, yaş yaklaşıktır. Piaget, ==herkesin== soyut işlemsel düşünceye ulaşmadığını öne sürmüştür." }
      ]
    },
    {
      baslik: "*Sensorimotor*: duyular ve hareketle öğrenme",
      kisa: "Bebek, gözden kaybolan nesnenin var olmaya devam ettiğini bu evrede öğrenir.",
      bloklar: [
        { tip: "adimlar", baslik: "Saklambaç: nesne devamlılığı nasıl gelişir?", adimlar: [
            { baslik: "Yaklaşık 4 ay", metin: "Oyuncağı battaniyenin altına koyunca bebek ilgisini kaybeder: “görmüyorsam yok.”" },
            { baslik: "Yaklaşık 8–12 ay", metin: "Bebek battaniyeyi kaldırıp oyuncağı arar: “görmesem de var.”" },
            { baslik: "Sonuç", metin: "Bu anlayışa ==*object permanence*== (nesne devamlılığı) denir; zihinsel temsilin ilk adımıdır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "Object permanence", tr: "nesne devamlılığı", tanim: "Bir nesne görünmese bile var olmaya devam ettiğini bilmek.", ornek: "Anne bir an odadan çıkınca bebeğin kapıya bakması." }
          ] },
        { tip: "not", metin: "Sonraki araştırmalar, özellikle bebeğin bakış süresini ölçen yöntemler, bebeklerin Piaget'nin düşündüğünden daha erken yeteneklere sahip olabileceğini göstermiştir. Bu, Piaget'nin evre yaşlarına eleştiridir." }
      ]
    },
    {
      baslik: "*Preoperational*: sembol var, mantık eksik",
      kisa: "Çocuk sembollerle düşünür ve rol yapar ama korunum ve tersine çevirmeyi yapamaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Pretend play", tr: "hayal oyunu", tanim: "Çocuğun nesneleri başka şeyleri temsil etmek için kullanması; sembolik düşüncenin kanıtıdır.", ornek: "Karton kutuya “uçak” deyip oynamak." },
            { ikon: "👁️", terim: "Egocentrism", tr: "benmerkezcilik", tanim: "Başkasının bakış açısını görememe; herkesin kendi gördüğünü gördüğünü sanma.", ornek: "Telefonda “şuna bak” deyip elindeki resmi göstermek." },
            { ikon: "🧸", terim: "Animism", tr: "cansız nesnelere can atfetme", tanim: "Cansız nesnelerin de canlı gibi düşünce ve duyguları olduğuna inanma.", ornek: "“Güneş uyudu, bulut ağlıyor.”" },
            { ikon: "⚖️", terim: "Conservation", tr: "korunum", tanim: "Bir nesnenin görünümü değişse de miktarının aynı kaldığını anlama. Bu evredeki çocuk bunu yapamaz.", ornek: "Aynı miktardaki suyu uzun bardağa dökünce “daha çok” sanmak." },
            { ikon: "↩️", terim: "Reversibility", tr: "tersine çevirme", tanim: "Bir işlemi zihinde geriye doğru çalıştırabilmek. Bu evredeki çocuk bunu yapamaz.", ornek: "“3 + 4 = 7 ise 7 − 4 kaç?” sorusunu zihinden geri çevirememek." }
          ] },
        { tip: "ikili", sol: { ikon: "🧸", baslik: "*Preoperational*", maddeler: ["Sembolleri kullanır, rol yapar", "Korunumu ve tersine çevirmeyi yapamaz"] },
          sag: { ikon: "🧮", baslik: "*Concrete operational*", maddeler: ["Somut olaylarda mantık yürütür", "Korunumu ve tersine çevirmeyi yapar"] },
          oyun: [
            { metin: "Çocuk oyuncak ayısına “üşüdü” deyip battaniye örtüyor.", cevap: "sol", neden: "Animism ve hayal oyunu: *preoperational*." },
            { metin: "Hamur topu yassılaştırılınca çocuk miktarın aynı kaldığını açıklıyor.", cevap: "sag", neden: "Korunumu kavramış: *concrete operational*." },
            { metin: "Çocuk, kendi gördüğü resmi karşısındaki kişinin de aynı gördüğünü sanıyor.", cevap: "sol", neden: "Egocentrism: *preoperational*." },
            { metin: "Çocuk “3 + 4 = 7 ise 7 − 4 = 3” mantığını zihninde geri çeviriyor.", cevap: "sag", neden: "Tersine çevirme: *concrete operational*." }
          ] }
      ]
    },
    {
      baslik: "İki klasik görev: korunum ve zihin kuramı",
      kisa: "Su bardağı ve yanlış inanç görevleri, çocuğun bu evredeki sınırlarını gösterir.",
      bloklar: [
        { tip: "adimlar", baslik: "Korunum görevi: su bardakları", adimlar: [
            { baslik: "Başlangıç", metin: "İki aynı bardakta eşit miktarda su var; çocuk “aynı” diyor." },
            { baslik: "Değişiklik", metin: "Araştırmacı birinin suyunu uzun ve ince bir bardağa döküyor." },
            { baslik: "İşlem öncesi çocuk", metin: "“Uzun bardakta daha çok su var.” Yüksekliğe bakıp miktar değişti sanıyor." },
            { baslik: "Somut işlemsel çocuk", metin: "“Aynı, çünkü hiçbir şey eklenmedi ya da çıkarılmadı; geri dökersek yine aynı olur.”" }
          ] },
        { tip: "adimlar", baslik: "Yanlış inanç görevi: *theory of mind* (zihin kuramı)", adimlar: [
            { baslik: "Sahne", metin: "Selin bilyeyi sepete koyup odadan çıkıyor." },
            { baslik: "Değişiklik", metin: "Selin yokken Ada bilyeyi kutuya taşıyor." },
            { baslik: "Soru", metin: "Selin döndüğünde bilyeyi nerede arar?" },
            { baslik: "Sonuç", metin: "Küçük çocuk “kutuda” der; kendi bildiğini Selin'in de bildiğini sanıyor. Yaklaşık 4–5 yaşında “sepette” demeye başlar: başkasının zihninin farklı olabileceğini kavramıştır." }
          ] }
      ]
    },
    {
      baslik: "*Concrete* ve *formal operational*: somuttan soyuta",
      kisa: "Somut işlemsel çocuk mantıklıdır ama somuta bağlıdır; soyut düşünme son evrede gelir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🧮", baslik: "*Concrete operational*", maddeler: ["Mantık, somut nesne ve olaylarla sınırlı", "Sistematik düşünmede zorlanır (rastgele dener)"] },
          sag: { ikon: "🧠", baslik: "*Formal operational*", maddeler: ["Soyut kavramlarla ve “ya olsaydı?” gibi varsayımlarla düşünür", "Sistematik biçimde hipotez kurup sınar"] },
          oyun: [
            { metin: "Mert, adalet ve özgürlük gibi soyut kavramlar üzerine fikir yürütüyor.", cevap: "sag", neden: "Soyut düşünme: *formal operational*." },
            { metin: "Bir çocuk, elindeki bozuk ışığın sorununu bulmak için bütün düğmelere rastgele basıyor.", cevap: "sol", neden: "Sistematik olmayan, rastgele deneme: *concrete operational*." },
            { metin: "Selin, “Dünyada hiç para olmasaydı ne olurdu?” sorusunu tartışıyor.", cevap: "sag", neden: "Varsayımsal düşünme: *formal operational*." },
            { metin: "Can, farklı uzunluktaki çubukları büyüklük sırasına doğru dizip hiçbirini atlamıyor.", cevap: "sol", neden: "Somut nesneler üzerinde mantık: *concrete operational*." }
          ] },
        { tip: "tuzak", metin: "Soyut işlemsel evre, çocukluktan sonra herkesin otomatik olarak ulaştığı bir son değildir.", yanlis: "Somut işlemsel çocuk her tür mantıksal sorunu çözebilir; yetişkin herkes soyut işlemseldir.", dogru: "Somut işlemsel çocuk ==somut== olayda mantıklıdır; soyut ve sistematik düşünmede zorlanır. Piaget ==herkesin== formal evreye ulaşmadığını öne sürmüştür." }
      ]
    },
    {
      baslik: "Vygotsky: *zone of proximal development* ve *scaffolding*",
      kisa: "Çocuk en çok, yardımla yapabildiği aralıkta (ZPD) öğrenir.",
      bloklar: [
        { tip: "grafik", baslik: "Üç bölge: kolay, ZPD, çok zor", xlabel: "Görevin zorluğu →", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "zA", tip: "alan", renk: 0, noktalar: [[0, 0], [4, 0], [4, 10], [0, 10]] },
            { id: "tA", tip: "yazi", x: 2, y: 5, metin: "Tek başına" },
            { id: "zB", tip: "alan", renk: 1, noktalar: [[4, 0], [8, 0], [8, 10], [4, 10]], gizli: true },
            { id: "tB", tip: "yazi", x: 6, y: 5, metin: "ZPD", gizli: true },
            { id: "zC", tip: "alan", renk: 3, noktalar: [[8, 0], [10, 0], [10, 10], [8, 10]], gizli: true },
            { id: "tC", tip: "yazi", x: 9, y: 5, metin: "Yapamaz", gizli: true },
            { id: "ok", tip: "ok", renk: 2, from: [4.5, 8.5], to: [7.5, 8.5], gizli: true },
            { id: "tS", tip: "yazi", x: 6, y: 9.4, metin: "Scaffolding", gizli: true }
          ],
          durumlar: [
            { metin: "Soldaki bölge: çocuğun ==tek başına yapabildiği== görevler. Burada yeni bir şey öğrenmez." },
            { metin: "Ortadaki bölge ==ZPD==: yetişkin ya da daha yetkin biri yardım ederse yapabildiği görevler. Öğrenme en çok burada olur.", goster: ["zB", "tB"] },
            { metin: "Sağdaki bölge: yardımla bile ==henüz yapamadığı== görevler.", goster: ["zC", "tC"] },
            { metin: "**Scaffolding**: ZPD içindeki destek (ipucu, örnek, soru). Çocuk ilerledikçe destek azaltılır.", goster: ["ok", "tS"] },
            { metin: "Çocuk öğrendikçe tek başına yapabildiği alan genişler ve ==ZPD ileri kayar==.", set: { zA: { noktalar: [[0, 0], [6, 0], [6, 10], [0, 10]] }, tA: { x: 3 }, zB: { noktalar: [[6, 0], [9, 0], [9, 10], [6, 10]] }, tB: { x: 7.5 }, zC: { noktalar: [[9, 0], [10, 0], [10, 10], [9, 10]] }, tC: { x: 9.5 }, ok: { from: [6.3, 8.5], to: [8.7, 8.5] }, tS: { x: 7.5 } } }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Zone of proximal development (ZPD)", tr: "yakınsal gelişim alanı", tanim: "Çocuğun tek başına yapamadığı ama yardımla yapabildiği görevlerin aralığı. Öğrenme için en verimli yer.", ornek: "Bisikleti tek başına süremez ama arkadan tutulunca sürebilir." },
            { ikon: "🪜", terim: "Scaffolding", tr: "iskele kurma (destekleme)", tanim: "Öğrenene, ZPD'si içinde, yetkin birinin sağladığı geçici destek. Çocuk ilerledikçe destek azalır.", ornek: "Ağabeyin bisikleti önce arkadan tutması, sonra yavaş yavaş bırakması." }
          ] },
        { tip: "ikili", sol: { ikon: "🔬", baslik: "Piaget", maddeler: ["Çocuk dünyayı kendi başına keşfeder", "Evre bekler: hazır olmayan öğrenemez"] },
          sag: { ikon: "🤝", baslik: "Vygotsky", maddeler: ["Çocuk toplumsal bir öğrenendir; sosyokültürel çevre düşünceyi biçimlendirir", "Doğru destek (*scaffolding*) gelişimi ilerletir"] },
          oyun: [
            { metin: "Öğretmen, çocuğun çözemediği bulmacada ipucu verip sonra desteği azaltıyor.", cevap: "sag", neden: "Scaffolding ve ZPD: Vygotsky." },
            { metin: "Çocuk, kum havuzunda dolu kabın miktarının değişmediğini kendi denemeleriyle keşfediyor.", cevap: "sol", neden: "Kendi keşfiyle yeni şemalar kurma: Piaget." },
            { metin: "Dil ve kültür, çocuğun düşünme biçimini etkiliyor; çocuk yetişkinlerle konuşarak öğreniyor.", cevap: "sag", neden: "Sosyokültürel etkileşim: Vygotsky." }
          ] },
        { tip: "tuzak", metin: "ZPD, çocuğun yapamadığı her şeyi kapsamaz.", yanlis: "ZPD, çocuğun henüz yapamadığı tüm görevlerdir.", dogru: "ZPD, çocuğun ==tek başına yapamayıp yardımla yapabildiği== aralıktır. Çok kolay ya da çok zor görevler ZPD'nin dışındadır." }
      ]
    },
    {
      baslik: "Yetişkinlikte bilişsel değişim",
      kisa: "Yaşla birlikte kristalize zekâ korunur, akışkan zekâ azalma eğilimindedir.",
      bloklar: [
        { tip: "grafik", baslik: "İki zekâ türü yaşam boyu (şematik)", xlabel: "Yaş", ylabel: "Düzey", xmax: 12, ymax: 10,
          xticks: [{ v: 0, label: "20" }, { v: 2, label: "30" }, { v: 4, label: "40" }, { v: 6, label: "50" }, { v: 8, label: "60" }, { v: 10, label: "70" }, { v: 12, label: "80" }],
          ogeler: [
            { id: "akis", tip: "egri", renk: 0, noktalar: [[0, 7.5], [1, 8.3], [2, 8.2], [4, 7.3], [6, 6.2], [8, 5], [10, 3.8], [12, 2.8]], etiket: "Akışkan" },
            { id: "kris", tip: "egri", renk: 1, noktalar: [[0, 4], [2, 5.2], [4, 6.2], [6, 7], [8, 7.6], [10, 7.8], [12, 7.4]], etiket: "Kristalize", gizli: true }
          ],
          durumlar: [
            { metin: "**Akışkan zekâ** (*fluid*): yeni problem çözme ve soyut akıl yürütme. Genç yetişkinlikte en yüksek, sonra yavaş yavaş azalır." },
            { metin: "**Kristalize zekâ** (*crystallized*): birikmiş bilgi, kelime hazinesi ve deneyim. Yetişkinlik boyunca ==görece sabit kalır== ve çoğu zaman artar.", goster: ["kris"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "💡", terim: "Fluid intelligence", tr: "akışkan zekâ", tanim: "Yeni durumlarda hızlı akıl yürütme ve problem çözme. Yaşla azalma eğilimindedir.", ornek: "Daha önce hiç görmediğin bir bulmacayı hızlıca çözmek." },
            { ikon: "📚", terim: "Crystallized intelligence", tr: "kristalize zekâ", tanim: "Öğrenilmiş bilgi ve becerilerin birikimi. Yetişkinlik boyunca görece sabit kalır.", ornek: "Kelime hazinesi, genel kültür, meslek bilgisi." },
            { ikon: "🧠", terim: "Dementia", tr: "bunama", tanim: "Bellek, düşünme ve dil gibi bilişsel işlevlerde günlük yaşamı bozacak ölçüde kayıp olan bir bozukluk grubu. Yaşlanmanın normal bir parçası değildir.", ornek: "Alzheimer hastalığı en yaygın nedenidir." }
          ] },
        { tip: "tuzak", metin: "Yaşlanırken bazı bilişsel işlevlerin yavaşlaması, bilişsel bozukluk anlamına gelmez.", yanlis: "Yaşlılıkta bütün zekâ türleri azalır; unutkanlık bunamanın ilk işaretidir.", dogru: "==Kristalize zekâ== korunurken ==akışkan zekâ== azalma eğilimindedir. *Dementia* ise yaşlanmanın normal sonucu değil, günlük yaşamı bozan bir bozukluktur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Piaget: çocuk şemalar kurar; yeni bilgiyi *assimilation* ile sığdırır, *accommodation* ile şemayı değiştirir.",
            "*Sensorimotor* (yaklaşık 0–2): *object permanence* kazanılır.",
            "*Preoperational* (yaklaşık 2–7): sembolik düşünce ve hayal oyunu vardır; *egocentrism*, *animism* görülür; korunum ve tersine çevirme yoktur; zihin kuramı başlar.",
            "*Concrete operational* (yaklaşık 7–11): korunum ve somut mantık vardır; soyut ve sistematik düşünme zayıftır.",
            "*Formal operational* (yaklaşık 12+): soyut ve varsayımsal düşünme; Piaget'ye göre herkes ulaşmaz.",
            "Vygotsky: çocuk toplumsal öğrenendir; ==ZPD== içinde *scaffolding* ile öğrenme en verimlidir.",
            "Yetişkinlikte *crystallized intelligence* görece sabit kalır, *fluid intelligence* azalma eğilimindedir.",
            "*Dementia* yaşlanmanın normal bir sonucu değil, bilişsel bir bozukluktur."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Daha önce yalnızca köpek görmüş iki yaşındaki Elif, ilk kez bir kuzu görünce “köpek!” diyor. Annesi “bu kuzu” deyince Elif kuzular için yeni bir kategori oluşturuyor. Bu süreçte Elif sırasıyla hangi iki işlemi yapmıştır?",
      opts: ["Önce *accommodation*, sonra *assimilation*", "İki aşamada da *assimilation*", "Önce *assimilation*, sonra *accommodation*", "Önce *object permanence*, sonra *egocentrism*"],
      a: 2,
      why: "Kuzuyu mevcut “köpek” şemasına sığdırmak *assimilation*, yeni bir kuzu şeması kurmak *accommodation*dır. En çekici yanlış şık A: sıra ters; önce yeni bilgi eski şemaya sığdırılır, uyuşmazlık fark edilince şema değişir." },
    { q: "Altı yaşındaki Deniz, aynı miktardaki suyun uzun ve ince bir bardağa dökülünce “daha çok oldu” diyor ve oyuncak ayısına “üşüdü” diyerek battaniye örtüyor. Deniz'in düşüncesi hangi evrenin özellikleriyle uyumludur?",
      opts: ["*Preoperational*: korunumun olmaması ve *animism*", "*Concrete operational*: korunum ve tersine çevirme", "*Sensorimotor*: nesne devamlılığının gelişmesi", "*Formal operational*: soyut ve varsayımsal düşünme"],
      a: 0,
      why: "Korunumu yapamama ve cansız nesneye can atfetme işlem öncesi (*preoperational*) evrenin işaretleridir. En çekici yanlış şık B: somut işlemsel çocuk korunumu yapar, Deniz yapamıyor." },
    { q: "Tabloda dört çocuğun gözlemi verilmiştir. Çocukların gözlemleri sırasıyla Piaget'nin hangi evresiyle eşleşir?",
      fig: { type: "table", caption: "Gözlemler", head: ["Çocuk", "Yaş", "Gözlem"], rows: [["Ada", "10 ay", "Battaniye altına giren oyuncağı arıyor"], ["Can", "5 yaş", "Karton kutuya “uçak” deyip oynuyor"], ["Mert", "9 yaş", "Hamurun şekli değişince miktarın aynı olduğunu açıklıyor"], ["Selin", "15 yaş", "“Ya olsaydı?” türü varsayımsal bir soruyu tartışıyor"]] },
      opts: ["*Preoperational*, *sensorimotor*, *concrete*, *formal*", "*Sensorimotor*, *concrete*, *preoperational*, *formal*", "*Formal*, *preoperational*, *concrete*, *sensorimotor*", "*Sensorimotor*, *preoperational*, *concrete operational*, *formal operational*"],
      a: 3,
      why: "Nesne devamlılığı duyusal-motor evrenin, hayal oyunu işlem öncesi evrenin, korunum somut işlemsel evrenin, varsayımsal düşünme soyut işlemsel evrenin işaretidir. En çekici yanlış şık A: arama davranışı (nesne devamlılığı) en erken evredir." },
    { q: "Bir matematik öğretmeni, öğrencinin tek başına çözemediği ama ipucu verilince çözebildiği problemleri seçiyor ve öğrenci ilerledikçe ipuçlarını azaltıyor. Bu yaklaşım hangi kavramlara dayanır?",
      opts: ["Korunum ve nesne devamlılığı", "*Zone of proximal development* ve *scaffolding*", "*Assimilation* ve *accommodation*", "Akışkan ve kristalize zekâ"],
      a: 1,
      why: "Yardımla yapılabilen görevler ZPD'dir; geçici ve giderek azalan destek *scaffolding*dir (Vygotsky). En çekici yanlış şık C: asimilasyon ve akomodasyon çocuğun kendi şemalarını değiştirmesini anlatır, dışarıdan sağlanan destek vurgusu yoktur." },
    { q: "65 yaşındaki Bayram Amca kelime bilmecelerinde ve genel kültür sorularında genç torunlarından daha başarılı, ama yeni bir telefonun menüsünü hızla çözmekte zorlanıyor. Bu durum en iyi nasıl açıklanır?",
      opts: ["Her iki zekâ türü de aynı oranda azalmıştır", "*Fluid intelligence* artmış, *crystallized intelligence* azalmıştır", "*Crystallized intelligence* görece korunmuş, *fluid intelligence* yaşla azalma eğilimi göstermiştir", "Bu durum *dementia*nın kanıtıdır"],
      a: 2,
      why: "Birikmiş bilgi ve kelime hazinesi (kristalize) korunur; yeni durumlarda hızlı akıl yürütme (akışkan) yaşla azalma eğilimindedir. En çekici yanlış şık D: yeni teknolojiyi çözmekte yavaşlamak tek başına bunama göstermez." }
  ]
};
