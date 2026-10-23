/* Kitpath not defteri · hg701 · Sanayi Devrimi
   Kaynak: AP HuG CED Topic 7.1 (SPS-7.A.1–A.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg701",
  amac: "Bu konu Sanayi Devrimi'nin nasıl başladığını ve dünyaya nasıl yayıldığını anlatıyor. Yeni makineleri, kömür ve demirin rolünü, nüfusla kentlerin büyümesini, yeni sınıfları ve sömürgeciliğe giden yolu öğreneceksin.",
  bolumler: [
    {
      baslik: "Sanayi Devrimi: elden makineye",
      kisa: "Yeni teknolojiler üretimi el emeğinden makineye ve fabrikaya taşıdı.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Industrial Revolution", tr: "Sanayi Devrimi", tanim: "18. yüzyılın ikinci yarısında İngiltere'de başlayan, üretimin makineler ve fabrikalarla yapılmaya başlandığı büyük dönüşüm.", ornek: "Evde elle dokunan kumaşın fabrikada makinede dokunması." },
            { ikon: "⚙️", terim: "Industrialization", tr: "sanayileşme", tanim: "Bir ekonominin ağırlık merkezinin tarımdan fabrika üretimine kayması. Yeni teknolojiyle başlar, doğal kaynaklarla kolaylaşır.", ornek: "Köylerin tarlasından kentlerin fabrikasına geçiş." }
          ] },
        { tip: "zaman", olaylar: [
            { tarih: "1700'lerin ortası–sonu", baslik: "Tekstil makineleri", metin: "Eğirme ve dokuma makineleri pamuk üretimini fabrikaya taşıdı." },
            { tarih: "1700'lerin sonu", baslik: "Buhar makinesi", metin: "Kömürle çalışan buhar gücü, fabrikaları nehir kıyısından kurtardı." },
            { tarih: "1800'lerin başı", baslik: "Demiryolu ve buharlı gemi", metin: "Hammadde ve ürün çok daha hızlı ve ucuz taşınmaya başladı." },
            { tarih: "1800'lerin sonu", baslik: "İkinci dalga", metin: "Çelik, elektrik ve kimya sanayisi öne çıktı." }
          ] }
      ]
    },
    {
      baslik: "Neden önce İngiltere?",
      kisa: "Kömür, demir, ulaşım ve sermaye bir araya gelince sanayi İngiltere'de başladı.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "⛏️", baslik: "Kömür ve demir cevheri", metin: "Buhar makinesi kömür, makine ve ray demir ister; ikisi de ülkenin içindeydi." },
            { ikon: "🚢", baslik: "Nehirler, kanallar ve limanlar", metin: "Ağır hammadde ve ürün ucuza taşındı; dünya ticaretine açılmak kolaydı." },
            { ikon: "💷", baslik: "Sermaye", metin: "Tüccarlar ve bankalar, fabrika kurmak isteyen yatırımcılara para buldu." },
            { ikon: "🌾", baslik: "Verimli tarım", metin: "Daha az çiftçi daha çok gıda üretti; tarımdan çıkan işgücü fabrikaya gidebildi." },
            { ikon: "🗺️", baslik: "Koloniler", metin: "Sömürgeler hem ucuz hammadde hem de hazır pazar sağladı." }
          ] },
        { tip: "tuzak", baslik: "Kaynak tek başına sanayi kurmaz", metin: "CED'in cümlesi: sanayileşme yeni teknolojiyle başladı, doğal kaynaklar onu kolaylaştırdı.", yanlis: "Kömürü ve demiri bol olan her ülke kendiliğinden sanayileşir.", dogru: "==Başlatan yeni teknolojidir==; kaynak onu kolaylaştırır. Kaynağın yanında sermaye, ulaşım ve işgücü de gerekir." }
      ]
    },
    {
      baslik: "Sanayi İngiltere'den dünyaya yayıldı",
      kisa: "Sanayi önce kömür havzalarına, sonra başka ülke ve kıtalara yayıldı.",
      bloklar: [
        { tip: "adimlar", baslik: "Yayılma dalgaları", adimlar: [
            { baslik: "1. İngiltere", metin: "Tekstil, kömür ve demirle sanayi burada başladı." },
            { baslik: "2. Kıta Avrupası", metin: "Belçika, Fransa ve Almanya; kömür ve demir havzalarının yakınında kuruldu (ör. Ruhr)." },
            { baslik: "3. ABD, Rusya, Japonya", metin: "19. yüzyıl boyunca geniş toprak, hammadde ve devlet desteğiyle büyüdüler." },
            { baslik: "4. Yeni sanayileşen ülkeler", metin: "20. yüzyılın ikinci yarısından itibaren Doğu Asya ve başka bölgelerde fabrikalar yayıldı." }
          ] },
        { tip: "tablo", baslik: "İki sanayi dalgası", head: ["", "Birinci dalga", "İkinci dalga"], rows: [
            ["Ana enerji", "Kömür ve buhar", "Elektrik ve petrol"],
            ["Öne çıkan sektör", "Tekstil, demir", "Çelik, kimya, elektrik"],
            ["Başlıca ülkeler", "İngiltere", "Almanya, ABD ve diğerleri"]
          ] }
      ]
    },
    {
      baslik: "Gıda, nüfus ve kentleşme",
      kisa: "Daha çok gıda daha çok nüfus, fabrika işi de kentlere göç demekti.",
      bloklar: [
        { tip: "grafik", baslik: "Üç eğri birlikte yükseldi (şematik)", xlabel: "Zaman (1750 → 1900)", ylabel: "Göreli düzey", xmax: 10, ymax: 10,
          ogeler: [
            { id: "gida", tip: "egri", renk: 0, etiket: "Gıda", noktalar: [[0.5, 2], [3, 2.8], [5, 4], [7, 5.2], [9.5, 6.2]] },
            { id: "nufus", tip: "egri", renk: 1, etiket: "Nüfus", noktalar: [[0.5, 1.5], [3, 2.2], [5, 3.6], [7, 5.4], [9.5, 7.2]], gizli: true },
            { id: "kent", tip: "egri", renk: 2, etiket: "Kent payı", noktalar: [[0.5, 0.6], [3, 1.2], [5, 2.6], [7, 4.6], [9.5, 7.2]], gizli: true },
            { id: "yaz", tip: "yazi", x: 5, y: 9.3, metin: "Şematik gösterim; gerçek veri değil", gizli: true }
          ],
          durumlar: [
            { metin: "Tarım daha verimli hale geldi: ==*gıda arzı* arttı.==" },
            { metin: "Yeterli gıda ve gelişen koşullarla ölüm azaldı; ==nüfus hızla büyüdü.==", goster: ["nufus"] },
            { metin: "Tarımda işe ihtiyaç azaldı, fabrikalar işçi çekti: insanlar ==kentlere göç etti==, kentler büyüdü.", goster: ["kent"] },
            { metin: "Üç gelişme birbirini besledi: gıda → nüfus → kentleşme.", goster: ["yaz"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏙️", terim: "Urbanization", tr: "kentleşme", tanim: "Kentlerde yaşayan nüfusun payının ve kentlerin büyüklüğünün artması.", ornek: "Manchester gibi fabrika kentlerinin hızla büyümesi." }
          ] }
      ]
    },
    {
      baslik: "Yeni sınıflar ve yeni yaşam",
      kisa: "Toprak sahibi soylulara sanayici ve fabrika işçisi sınıfları eklendi.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏦", baslik: "Sanayici ve yatırımcı sınıfı", maddeler: ["Fabrika, makine ve sermayenin sahibi", "Zenginleşen yeni orta ve üst sınıf; eski toprak soylularının gücü azaldı"] },
          sag: { ikon: "👷", baslik: "Fabrika işçisi sınıfı", maddeler: ["Ücretle çalışan, kentte yaşayan kalabalık", "İlk dönemde uzun mesai, düşük ücret, kalabalık mahalleler"] },
          oyun: [
            { metin: "Fabrikayı kuran ve kârı toplayan kişi.", cevap: "sol", neden: "Sermaye sahibi: sanayici sınıfı." },
            { metin: "Köyünden kente gelip vardiyalı çalışan dokuma işçisi.", cevap: "sag", neden: "Ücretle çalışan kentli: işçi sınıfı." },
            { metin: "Yeni makineye para yatırıp ortak olan tüccar.", cevap: "sol", neden: "Yatırımcı: sermaye sınıfı." },
            { metin: "Ücret ve çalışma saatleri için sendika kuranlar.", cevap: "sag", neden: "Sendikalaşma işçi sınıfının örgütlenmesidir." }
          ] },
        { tip: "not", metin: "Başlangıçta koşullar ağırdı; zamanla sendikalar, çalışma yasaları ve artan ücretler yaşam standardını yükseltti. Sanayileşme ==yaşam standardını iyileştirdi== ama bu iyileşme her yerde aynı hızda olmadı." }
      ]
    },
    {
      baslik: "Hammadde ve pazar arayışı: sömürgecilik",
      kisa: "Fabrikalar hammadde ve pazar istedi; bu istek sömürgeciliği büyüttü.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚩", terim: "Colonialism", tr: "sömürgecilik", tanim: "Bir ülkenin başka bir toprağı ele geçirip siyasi olarak yönetmesi.", ornek: "İngiltere'nin Hindistan'ı yönetmesi." },
            { ikon: "👑", terim: "Imperialism", tr: "emperyalizm", tanim: "Bir devletin gücünü başka yerlere yayma politikası; sömürge, askerî güç ya da ekonomik baskı yoluyla olabilir.", ornek: "Güçlü bir devletin başka ülkelerin ticaretini ve siyasetini yönlendirmesi." }
          ] },
        { tip: "ikili", sol: { ikon: "🧶", baslik: "Hammadde kaynağı", maddeler: ["Fabrikaya girecek ham madde", "Örnek: pamuk, kauçuk, demir, kömür"] },
          sag: { ikon: "🛍️", baslik: "Pazar", maddeler: ["Fabrikanın ürününü satın alanlar", "Örnek: sömürgelere satılan kumaş, makine"] },
          oyun: [
            { metin: "Hindistan'dan İngiliz fabrikalarına gönderilen pamuk.", cevap: "sol", neden: "Fabrikaya giren ham madde." },
            { metin: "Lancashire'da dokunan kumaşın sömürgede satılması.", cevap: "sag", neden: "Ürünün satıldığı yer: pazar." },
            { metin: "Sömürge ormanlarından toplanan kauçuk.", cevap: "sol", neden: "Hammadde kaynağı." },
            { metin: "Sömürge halkına satılan hazır giyim.", cevap: "sag", neden: "Pazar." }
          ] }
      ]
    },
    {
      baslik: "Sonuç: eşitsiz kalkınma",
      kisa: "Sanayileşme yaşam standardını yükseltti ama kalkınma yerlere eşit yayılmadı.",
      bloklar: [
        { tip: "tablo", baslik: "Sanayinin iki yüzü", head: ["", "İyi yanı", "Eşitsiz yanı"], rows: [
            ["Gelir ve yaşam", "Ücretler, sağlık ve eğitim zamanla yükseldi", "Sanayi birkaç bölgede toplandı; diğerleri geride kaldı"],
            ["Sömürgeler", "Ulaşım ve altyapı gelişti", "Çoğu hammadde verici, mamul alıcı kaldı"],
            ["Kentler", "İş ve hizmet kapıları açıldı", "Kalabalık, kirlilik, sınıf eşitsizliği"]
          ], vurgu: 1 },
        { tip: "tuzak", metin: "Sömürgeler sanayi ürününü almış olsa da fabrikaların sahibi olmadı.", yanlis: "Sömürge kuran ve ticaret yapan her bölge sanayileşti.", dogru: "Sanayi çoğunlukla ==çekirdek bölgelerde toplandı==; sömürgeler hammadde verip mamul aldı. Bu da ==*geographically uneven development*=='in (coğrafi eşitsiz kalkınma) kökenidir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Industrial Revolution* yeni teknolojilerle (makine, buhar) İngiltere'de başladı; *industrialization* ekonomiyi tarımdan fabrikaya kaydırdı.",
            "Kömür, demir, nehir ve limanlar, sermaye, verimli tarım ve koloniler İngiltere'de sanayiyi kolaylaştırdı; başlatan yeni teknolojidir.",
            "Sanayi önce kömür-demir havzalarına, sonra Kıta Avrupası, ABD, Rusya, Japonya ve yeni sanayileşen ülkelere yayıldı.",
            "Gıda arttı, nüfus büyüdü, insanlar fabrikalar için kentlere göç etti (*urbanization*).",
            "Sınıf yapısı değişti: sanayici ve yatırımcı sınıfı ile fabrika işçisi sınıfı doğdu; toprak soylularının gücü azaldı.",
            "Fabrikalar hammadde ve yeni pazar istedi; bu istek *colonialism* ve *imperialism*'i güçlendirdi.",
            "Yaşam standardı yükseldi ama sanayi yerlere eşit dağılmadı: *uneven development*."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi, Sanayi Devrimi'nin İngiltere'de başlamasına katkıda bulunan bir etken DEĞİLDİR?",
      opts: ["Ülkede kömür ve demir cevherinin bulunması", "Nehirler, kanallar ve limanlar yoluyla ucuz taşıma", "Sömürgelerden gelen hammadde ve sömürgelerdeki pazarlar", "Ülkenin hiç doğal kaynağı olmaması ve tarımın çok verimsiz olması"],
      a: 3,
      why: "Sanayi, yeni teknolojilerle başladı ve kömür, demir, taşıma, sermaye, verimli tarım ve kolonilerle kolaylaştı. D şıkkı tersini söylüyor. En çekici yanlış şık C: koloniler hem hammadde hem pazar sağladığı için gerçek bir etkendir." },
    { q: "Grafikte şematik olarak gösterilen gelişmelerin sırası ve nedensel bağı hangisidir?",
      fig: { type: "graph", xlabel: "Zaman", ylabel: "Göreli düzey", xmax: 10, ymax: 10, lines: [{ from: [0.5, 2], to: [9.5, 6], label: "Gıda" }, { from: [0.5, 1.5], to: [9.5, 7.5], label: "Nüfus" }, { from: [0.5, 0.5], to: [9.5, 7.5], label: "Kent payı" }], caption: "Şematik eğriler (gerçek veri değil)" },
      opts: ["Kentleşme gıdayı azalttı; nüfus bu yüzden düştü", "Gıda arzı arttı, nüfus büyüdü ve işgücü fabrika işleri için kentlere göç etti", "Nüfus azaldı, bu yüzden fabrikalar kuruldu", "Gıda arzı değişmedi; yalnızca kentlerin payı arttı"],
      a: 1,
      why: "Tarımın verimi gıdayı artırdı, nüfus büyüdü ve fabrika işleri insanları kentlere çekti. D şıkkı en çekici yanlış: grafikteki gıda eğrisi de yükseliyor." },
    { q: "19. yüzyılda bir İngiliz tekstil fabrikası, Hindistan'dan pamuk alıp ürettiği kumaşı yine Hindistan'a satıyor. Bu durum hangi kavramla en iyi açıklanır?",
      opts: ["Sanayinin hammadde ve pazar ihtiyacının sömürgeciliği ve emperyalizmi güçlendirmesi", "Sömürgenin çekirdek ülkeden daha hızlı sanayileşmesi", "Fabrikaların hammadde gerektirmemesi", "Sömürgede kentleşmenin durması"],
      a: 0,
      why: "Yatırımcılar hammadde ve yeni pazar aradığı için *colonialism* ve *imperialism* güçlendi. B şıkkı en çekici yanlış: sömürge çoğunlukla hammadde verici ve mamul alıcı olarak kaldı." },
    { q: "Fabrikaların yaygınlaşmasıyla ortaya çıkan sınıf değişimi için hangisi doğrudur?",
      opts: ["Sınıf yapısı hiç değişmedi; toprak soyluları hâlâ tek güçtü", "Sanayici ve yatırımcı sınıfı ile kentli fabrika işçisi sınıfı belirginleşti", "Tüm işçiler hemen yüksek ücret ve kısa mesai aldı", "Tarım işçileri sayısal olarak arttı, kentler küçüldü"],
      a: 1,
      why: "Sermaye sahibi yeni sınıf ile ücretli işçi sınıfı doğdu. C şıkkı en çekici yanlış: yaşam standardı zamanla yükseldi ama başlangıçta koşullar ağırdı, her yerde eşit olmadı." },
    { q: "Tabloya göre aşağıdaki yorumlardan hangisi doğrudur?",
      fig: { type: "table", caption: "Üç bölge (örnek)", head: ["Bölge", "Fabrika sayısı", "Ham madde ihracatı"], rows: [["A (çekirdek)", "Çok", "Az"], ["B (sömürge)", "Çok az", "Çok"], ["C (sömürge)", "Çok az", "Çok"]] },
      opts: ["Sanayi, sömürge kuran bölgelerde toplanırken sömürgeler hammadde sağlamıştır; bu, eşitsiz kalkınmayı yansıtır", "Sömürgeler en çok fabrikaya sahip olmuştur", "Bölge A ham madde ihraç ettiği için sanayisizdir", "Tabloda eşitsiz kalkınma görülmez"],
      a: 0,
      why: "Çekirdek bölgede fabrika çok, sömürgelerde hammadde ihracatı çok. C şıkkı en çekici yanlış: A bölgesi ham madde ihraç etmiyor, ihracatı az ve sanayisi güçlü." }
  ]
};
