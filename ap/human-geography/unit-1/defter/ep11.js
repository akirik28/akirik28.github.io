/* Kitora not defteri · ep11 · Küreselleşme ve Sürdürülebilirlik
   Kaynak: ap-videolar/src/episodes/ep11 (script.ts) + AP HuG Unit 1 standart içeriği. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ep11",
  amac: "Bu konu dünyanın birbirine nasıl bağlandığını (*globalization*) ve bu bağdan herkesin eşit kazanmadığını anlatıyor. Çok uluslu şirketleri, *core* ile *periphery* farkını ve sürdürülebilirliği örneklerle öğreneceksin.",
  bolumler: [
    {
      baslik: "Tişörtün yolculuğu: *globalization*",
      kisa: "*Globalization* dünyanın tek bir pazar ve ağ gibi işlemesidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌐", terim: "Globalization", tr: "küreselleşme", tanim: "Dünyanın tek bir pazar, tek bir ağ gibi işlemeye başlaması: mal, para, insan ve fikirler sınırları kolayca aşar.", ornek: "Üzerindeki tişört bir ülkede tasarlandı, pamuğu başka bir ülkede yetişti, üçüncü bir ülkede dikildi ve sana burada satıldı." }
          ] },
        { tip: "adimlar", baslik: "Tişörtün zinciri", adimlar: [
            { baslik: "Tasarım", metin: "Örneğin ABD'de tasarlanır." },
            { baslik: "Pamuk", metin: "Hindistan gibi bir ülkede yetişir." },
            { baslik: "Dikim", metin: "Bangladeş gibi üçüncü bir ülkede dikilir." },
            { baslik: "Satış", metin: "Türkiye'deki bir mağazada sana satılır." }
          ] }
      ]
    },
    {
      baslik: "Ağı kuranlar: *TNC*",
      kisa: "*TNC* merkezi bir ülkede, üretimi ve satışı çok ülkede olan şirkettir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏢", terim: "Transnational corporation (TNC)", tr: "çok uluslu şirket", tanim: "Merkezi bir ülkede olan, ama üretimini ve satışını pek çok ülkeye yayan şirket.", ornek: "Bir telefon Amerika'da tasarlanır, parçaları Asya'da üretilir ve dünyanın her yerinde satılır." }
          ] },
        { tip: "tablo", baslik: "Bir *TNC*'nin üç yüzü", head: ["Bölüm", "Nerede?", "Neden orada?"], rows: [
            ["Tasarım ve yönetim", "Genel merkez (bir yerde)", "Karar ve para burada toplanır"],
            ["Fabrikalar", "İş gücünün ucuz olduğu yerler", "Maliyeti düşürmek"],
            ["Mağazalar", "Her yerde", "Müşteri her yerde"]
          ] }
      ]
    },
    {
      baslik: "Kültür: *McCulture*",
      kisa: "Küreselleşme kültürü tek tipleştirir, ama insanlar yerel kimliğe de sarılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍟", terim: "McCulture", tr: "McKültür", tanim: "Dünyanın her yerinde aynı restoranlar, aynı markalar, aynı diziler: kültürün tek tipleşmesi.", ornek: "Tokyo, Paris, İstanbul ve New York'ta birebir aynı dükkân vitrini." }
          ] },
        { tip: "ikili", sol: { ikon: "🧬", baslik: "Tek tipleşme", maddeler: ["Aynı markalar, aynı dükkânlar: *McCulture*", "Şehirler birbirine benzer"] },
          sag: { ikon: "🏮", baslik: "Yerel kimlik", maddeler: ["İnsanlar yerel kimliğine sarılır: çay ocağı, ramen, fırın", "Şehirler benzersiz kalır"] },
          oyun: [
            { metin: "Dünyanın her yerinde aynı zincir restoranlar.", cevap: "sol", neden: "Aynılaşma: *McCulture*." },
            { metin: "Mahallede yerel fırın ve çay ocağına sahip çıkmak.", cevap: "sag", neden: "Yerel kimliğe sarılmak." },
            { metin: "Aynı dizi ve aynı marka dünyanın her yerinde.", cevap: "sol", neden: "Küresel tek tipleşme." },
            { metin: "Kimliğini korumak için yerel yemekleri öne çıkarmak.", cevap: "sag", neden: "Küreselleşmeye karşı yerel tepki." }
          ] },
        { tip: "tuzak", metin: "Küreselleşme kültürü yalnızca tek tipleştirmez.", yanlis: "Küreselleşme bütün kültürleri aynılaştırır; yerel kimlik kaybolur.", dogru: "Bir yanda tek tipleşme, ==öte yanda insanlar yerel kimliğine daha sıkı sarılır==." }
      ]
    },
    {
      baslik: "*Core* ve *periphery*: herkes eşit kazanmıyor",
      kisa: "*Core* zenginlik ve karar gücünü toplar; *periphery* ham madde sağlar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏙️", terim: "Core", tr: "çekirdek", tanim: "Dünya ekonomisinin merkezi: ==Kuzey Amerika, Batı Avrupa ve Japonya==. Zenginlik, teknoloji ve karar gücü burada toplanır.", ornek: "Genel merkezler, bankalar, teknoloji şirketleri." },
            { ikon: "🌾", terim: "Periphery", tr: "çevre", tanim: "Geri kalan bölgeler: ham madde ve ucuz iş gücü sağlar. Bazı derslerde aradaki hızlı gelişen kuşağa *semi-periphery* denir; sınav odağı *core* ve *periphery*'dir.", ornek: "Sahra Altı Afrika." },
            { ikon: "↔️", terim: "Uneven development", tr: "eşitsiz gelişme", tanim: "*Core* ile *periphery* arasındaki farkın açılması.", ornek: "Zengin bölgeler daha da zenginleşir; çevre ham madde sağlamaya devam eder." }
          ] },
        { tip: "ikili", sol: { ikon: "🏙️", baslik: "*Core*", maddeler: ["Kuzey Amerika, Batı Avrupa, Japonya", "Pahalı ürün üretir"] },
          sag: { ikon: "🌾", baslik: "*Periphery*", maddeler: ["Örneğin Sahra Altı Afrika", "Ham madde gönderir"] },
          oyun: [
            { metin: "Japonya", cevap: "sol", neden: "Videodaki üç *core* bölgesinden biri." },
            { metin: "Sahra Altı Afrika", cevap: "sag", neden: "*Periphery* tarafında." },
            { metin: "Ham madde ve ucuz iş gücü sağlar.", cevap: "sag", neden: "*Periphery*'nin tipik rolü." },
            { metin: "Teknoloji ve karar gücü burada toplanır.", cevap: "sol", neden: "*Core*." }
          ] },
        { tip: "grafik", baslik: "Eşitsiz gelişme: fark açılır (şematik)", xlabel: "Zaman", ylabel: "Kalkınma düzeyi", xmax: 10, ymax: 10,
          ogeler: [
            { id: "core", tip: "egri", renk: 0, etiket: "core", noktalar: [[0, 3], [3, 4.5], [6, 6.5], [10, 9.3]] },
            { id: "per", tip: "egri", renk: 1, etiket: "periphery", noktalar: [[0, 1.5], [3, 1.9], [6, 2.5], [10, 3.2]], gizli: true },
            { id: "gap", tip: "ok", from: [9.3, 3.5], to: [9.3, 8.8], gizli: true },
            { id: "gapt", tip: "yazi", x: 8.5, y: 6.2, metin: "fark açılıyor", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "*Core* bölgelerinde zenginlik, teknoloji ve karar gücü hızla büyür." },
            { metin: "*Periphery* ham madde ve ucuz iş gücü sağlar; daha yavaş büyür.", goster: ["per"] },
            { metin: "İki eğri arasındaki fark açılır: ==*uneven development*==.", goster: ["gap", "gapt"] }
          ] },
        { tip: "tuzak", metin: "Quiz: \"Hangisi dünya ekonomisinin *core* bölgelerinden biri değildir: Kuzey Amerika, Batı Avrupa, Japonya, Sahra Altı Afrika?\"", yanlis: "Japonya, çünkü Asya'da.", dogru: "==Sahra Altı Afrika==. Japonya Asya'da olsa da *core*'dur; Sahra Altı Afrika *periphery* tarafındadır." }
      ]
    },
    {
      baslik: "*Sustainability*: dengeli tabure",
      kisa: "Sürdürülebilirlik üç ayağın dengesidir: çevre, ekonomi, toplum.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "♻️", terim: "Sustainability", tr: "sürdürülebilirlik", tanim: "Bugünün ihtiyaçlarını, gelecek nesillerin ihtiyaçlarını tehlikeye atmadan karşılamak.", ornek: "Bir ormandan, yeniden büyüyebileceğinden fazla ağaç kesmemek." },
            { ikon: "🌿", terim: "Environment · Economy · Society", tr: "çevre · ekonomi · toplum", tanim: "Sürdürülebilirliğin üç ayağı. Üçü de dengede olmalı; biri kırılırsa tabure devrilir.", ornek: "Çevre: doğa, su, hava. Ekonomi: üretim, iş, para. Toplum: insanlar, adalet, sağlık." }
          ] },
        { tip: "grafik", baslik: "Orman: kesim, büyümeyi aşarsa", xlabel: "Zaman", ylabel: "Orman miktarı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "su", tip: "egri", renk: 0, etiket: "sürdürülebilir", noktalar: [[0, 7], [3, 7], [6, 7], [10, 7]] },
            { id: "un", tip: "egri", renk: 1, etiket: "sürdürülemez", noktalar: [[0, 7], [3, 5.8], [6, 3.5], [10, 1]], gizli: true },
            { id: "t1", tip: "yazi", x: 5, y: 8.2, metin: "kesim ≤ yeniden büyüme", gizli: true },
            { id: "t2", tip: "yazi", x: 7.2, y: 2.4, metin: "kesim > yeniden büyüme", gizli: true }
          ],
          durumlar: [
            { metin: "Bir ormanın başlangıç miktarı: yeterli, sağlıklı bir stok." },
            { metin: "Kesilen ağaç sayısı, yeniden büyüyenden fazla değilse orman miktarı ==sabit kalır==: sürdürülebilir.", goster: ["t1"] },
            { metin: "Kesim yeniden büyümeyi aşarsa orman azalır: ==sürdürülemez==. Gelecek nesillere az orman kalır.", goster: ["un", "t2"] }
          ] },
        { tip: "tuzak", metin: "Sürdürülebilirliğin üç ayağını sorarlar.", yanlis: "Üç ayak *environment*, *economy* ve *technology*'dir.", dogru: "Üç ayak ==*environment*, *economy*, *society*==. *Technology* bir ayak değildir." }
      ]
    },
    {
      baslik: "Dünya'nın dört sistemi",
      kisa: "Atmosfer, hidrosfer, litosfer cansızdır; biyosfer canlıdır; hepsi bağlıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💨", terim: "Atmosphere", tr: "atmosfer", tanim: "Hava; cansız (*abiotic*) sistem.", ornek: "Bulutlar, rüzgâr." },
            { ikon: "💧", terim: "Hydrosphere", tr: "hidrosfer", tanim: "Su; cansız (*abiotic*) sistem.", ornek: "Deniz, nehir, yağmur." },
            { ikon: "🪨", terim: "Lithosphere", tr: "litosfer", tanim: "Yer kabuğu; cansız (*abiotic*) sistem.", ornek: "Kayalar, dağlar, yanardağlar." },
            { ikon: "🌳", terim: "Biosphere", tr: "biyosfer", tanim: "Bütün canlılar; canlı (*biotic*) sistem.", ornek: "Ağaçlar, kuşlar, balıklar, insanlar." }
          ] },
        { tip: "ikili", sol: { ikon: "🪨", baslik: "*Abiotic* (cansız)", maddeler: ["*Atmosphere* (hava)", "*Hydrosphere* (su), *lithosphere* (yer kabuğu)"] },
          sag: { ikon: "🌳", baslik: "*Biotic* (canlı)", maddeler: ["*Biosphere*", "Bitki, hayvan, insan"] },
          oyun: [
            { metin: "Okyanuslar ve nehirler.", cevap: "sol", neden: "Su cansızdır: *hydrosphere*, *abiotic*." },
            { metin: "Bir ormandaki ağaçlar ve kuşlar.", cevap: "sag", neden: "Canlılar: *biosphere*, *biotic*." },
            { metin: "Dağları oluşturan kayalar.", cevap: "sol", neden: "Yer kabuğu: *lithosphere*, *abiotic*." },
            { metin: "Balıklar ve insanlar.", cevap: "sag", neden: "Canlılar: *biotic*." }
          ] },
        { tip: "ornek", baslik: "Yanardağ patlarsa", durum: "Bir yanardağ patlıyor. Dört sistem birbirine bağlı olduğuna göre hangileri nasıl etkilenir?",
          adimlar: ["*Lithosphere*: yanardağ yer kabuğundandır; patlama kaya ve lav çıkarır.", "*Atmosphere*: küller havaya karışır.", "*Hydrosphere*: yağmur etkilenir.", "*Biosphere*: bitkiler ve canlılar etkilenir."],
          sonuc: "Hepsi birbirine bağlıdır; ==birine dokunursan diğerleri de etkilenir.==" }
      ]
    },
    {
      baslik: "Hollanda ve Florida",
      kisa: "*Polder* planlı ve sürdürülebilirdir; Everglades'in kurutulması sürdürülemezdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌷", terim: "Polder", tr: "polder", tanim: "Denizden kazanılmış arazi. Setler kurup suyu pompalayarak elde edilir.", ornek: "Hollanda'da ülkenin yaklaşık dörtte biri deniz seviyesinin altındadır." }
          ] },
        { tip: "grafik", baslik: "Polder nasıl yapılır?", xlabel: "", ylabel: "", xmax: 10, ymax: 8,
          ogeler: [
            { id: "deniz", tip: "alan", renk: 0, noktalar: [[0.2, 0], [4, 0], [4, 5], [0.2, 5]] },
            { id: "seviye", tip: "cizgi", renk: 3, kesik: true, from: [0.2, 5], to: [9.8, 5], etiket: "" },
            { id: "sevt", tip: "yazi", x: 9.7, y: 5.4, metin: "deniz seviyesi", hiza: "end" },
            { id: "set", tip: "alan", renk: 3, noktalar: [[4, 0], [5, 0], [5, 5.9], [4, 5.9]], gizli: true },
            { id: "sett", tip: "yazi", x: 4.5, y: 6.4, metin: "set", gizli: true },
            { id: "zemin", tip: "alan", renk: 2, noktalar: [[5, 0], [9.8, 0], [9.8, 3], [5, 3]], gizli: true },
            { id: "pol", tip: "yazi", x: 7.4, y: 1.4, metin: "polder", gizli: true },
            { id: "pomp", tip: "ok", from: [7.4, 3.2], to: [7.4, 6.3], gizli: true },
            { id: "pompt", tip: "yazi", x: 7.6, y: 7.0, metin: "su pompalanır", gizli: true }
          ],
          durumlar: [
            { metin: "Deniz seviyesi: sol tarafta su, sağ tarafta kara." },
            { metin: "**Set** kurulur ve denizi durdurur.", goster: ["set", "sett"] },
            { metin: "Setin arkasındaki arazi ==deniz seviyesinin altındadır==: **polder**.", goster: ["zemin", "pol"] },
            { metin: "Yel değirmenleri ve pompalar fazla suyu dışarı atar; tarla kurur.", goster: ["pomp", "pompt"] }
          ] },
        { tip: "ikili", sol: { ikon: "🌷", baslik: "Hollanda · *polder*", maddeler: ["Set kurup suyu pompalar, denizden toprak kazanır", "Doğayla planlı ve dikkatli ilişki: sürdürülebilir"] },
          sag: { ikon: "🐊", baslik: "Florida · Everglades", maddeler: ["Bataklıklar tarım ve şehirler için kurutuldu, nehirler kanala çevrildi", "Su kirlendi, ekosistem bozuldu: sürdürülemez"] },
          oyun: [
            { metin: "Setler, pompalar ve yel değirmenleriyle denizden toprak kazanılması.", cevap: "sol", neden: "Planlı ve dikkatli: sürdürülebilir *polder*." },
            { metin: "Nehirlerin dümdüz kanallara çevrilip bataklığın kurutulması.", cevap: "sag", neden: "Ekosistemi bozdu: sürdürülemez." },
            { metin: "Suyun kirlenmesi ve ekosistemin bozulması.", cevap: "sag", neden: "Everglades'in kurutulmasının bedeli." },
            { metin: "Ülkenin yaklaşık dörtte biri deniz seviyesinin altında.", cevap: "sol", neden: "Hollanda'nın durumu." }
          ] },
        { tip: "tuzak", metin: "Hollanda'daki *polder*'lar ile Florida'da Everglades'in kurutulması karşılaştırılıyor.", yanlis: "İkisi de sürdürülebilirdir; çünkü insan çevreyi değiştirmiştir.", dogru: "==Hollanda doğayla planlı ve dikkatli bir ilişki kurdu (sürdürülebilir)==; Everglades'te bataklıklar kurutulunca su kirlendi ve ekosistem bozuldu (sürdürülemez)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Globalization*: dünyanın tek bir pazar ve ağ gibi işlemesi (tişörtün tasarım–pamuk–dikim–satış zinciri).",
            "*TNC*: merkezi bir ülkede, üretimi ve satışı çok ülkede olan şirket.",
            "*McCulture*: kültürün tek tipleşmesi; ama insanlar yerel kimliğe de sarılır.",
            "*Core* (Kuzey Amerika, Batı Avrupa, Japonya) zenginlik, teknoloji ve karar gücü toplar; *periphery* ham madde ve ucuz iş gücü sağlar.",
            "*Uneven development*: *core* ile *periphery* arasındaki farkın açılması.",
            "*Sustainability*: bugünün ihtiyaçlarını gelecek nesillerinkini tehlikeye atmadan karşılamak; ayaklar *environment*, *economy*, *society*.",
            "*Abiotic*: *atmosphere*, *hydrosphere*, *lithosphere*; *biotic*: *biosphere*. Hepsi birbirine bağlı.",
            "*Polder* (Hollanda) sürdürülebilir; Everglades'in kurutulması sürdürülemez."
          ] }
      ]
    }
  ]
};
