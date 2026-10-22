/* Kitora not defteri · hg403 · 4.3 Siyasi Güç ve Toprak Hâkimiyeti
   Kaynak: AP HuG CED Topic 4.3 (PSO-4.C). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg403",
  amac: "Bu konu siyasi gücün haritada nasıl görüldüğünü anlatıyor: insanlar, toprak ve kaynaklar üzerindeki kontrol. *Territoriality*, *neocolonialism*, *shatterbelt* ve *choke point* kavramlarını örneklerle öğreneceksin.",
  bolumler: [
    {
      baslik: "Siyasi güç: insan, toprak, kaynak",
      kisa: "Siyasi güç; insanlar, toprak ve kaynaklar üzerindeki kontroldür.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "İnsanlar", alt: "vatandaşlar, nüfus" }, "+",
            { t: "Toprak", alt: "sınırlar, boğazlar" }, "+",
            { t: "Kaynaklar", alt: "petrol, su, ticaret yolu" }, "=",
            { t: "Siyasi güç", alt: "coğrafyada kontrol" }
          ] },
        { tip: "tablo", baslik: "Dört kavram, dört bakış", head: ["Kavram", "Neye bakar?", "Kısa örnek"], rows: [
            ["*Territoriality*", "İnsanların toprağa bağı", "\"Bizim mahalle\" duygusu"],
            ["*Neocolonialism*", "Ekonomik ve siyasi etki", "Ağır dış borç"],
            ["*Shatterbelt*", "Bölünmüş, rekabet edilen bölge", "Orta Doğu, Balkanlar"],
            ["*Choke point*", "Ticaretin sıkıştığı geçit", "İstanbul Boğazı"]
          ] }
      ]
    },
    {
      baslik: "*Territoriality*: toprakla bağ",
      kisa: "*Territoriality*, insanların kültürünün ve ekonomisinin toprağa bağlanmasıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏞️", terim: "Territoriality", tr: "toprak hâkimiyeti", tanim: "İnsanların, kültürlerinin ve ekonomik sistemlerinin bir toprağa bağlılığı; o toprağı sahiplenme ve savunma isteği.", ornek: "Bir köy halkının yüzyıllardır kullandığı yaylaya \"bizim yayla\" demesi." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🪑", baslik: "Küçük ölçek", metin: "Sınıfta herkesin kendi sırasını sahiplenmesi." },
            { ikon: "🏘️", baslik: "Orta ölçek", metin: "Bir mahallenin ya da taraftar grubunun kendi sahasını benimsemesi." },
            { ikon: "🚩", baslik: "Büyük ölçek", metin: "Devletin sınırlarını ve kaynaklarını savunması." }
          ] },
        { tip: "not", metin: "Toprakla bağ güçlü olduğu için sınırlar ve kaynaklar tartışma konusu olabilir. *Territoriality* hem bir ülkeyi bir arada tutabilir hem de iki taraf aynı toprağa hak iddia ettiğinde çatışma yaratabilir." }
      ]
    },
    {
      baslik: "*Neocolonialism*: sömürgesiz etki",
      kisa: "Resmî sömürge bitse de ekonomik ve siyasi bağımlılık sürebilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💱", terim: "Neocolonialism", tr: "yeni sömürgecilik", tanim: "Resmî sömürge yönetimi bittikten sonra güçlü devletlerin ve şirketlerin ekonomik, siyasi ya da kültürel araçlarla eski sömürgeleri etkilemeyi sürdürmesi.", ornek: "Ağır dış borç ve tek bir ham maddeye bağımlı ihracat." }
          ] },
        { tip: "adimlar", baslik: "Varsayımsal bir ada ülkesi", adimlar: [
            { baslik: "Bağımsızlık", metin: "Ülke resmen bağımsız ama ekonomisi tek ürüne, örneğin kakaoya dayanıyor." },
            { baslik: "Ticaret", metin: "Ham kakao ucuza satılıyor; işlenmiş çikolata ise pahalıya ithal ediliyor." },
            { baslik: "Borç", metin: "Açık borçla kapatılıyor; borç verenlerin şartları ekonomik kararları etkiliyor." },
            { baslik: "Sonuç", metin: "Resmî sömürge yok ama etkili karar gücü dışarıda." }
          ] },
        { tip: "tuzak", metin: "Kavram bir bakış açısıdır; her yabancı yatırım *neocolonialism* değildir.", yanlis: "*Neocolonialism*, eski sömürge yönetiminin geri gelmesidir.", dogru: "Resmî yönetim yoktur; ==etki ekonomik, siyasi ya da kültürel araçlarla sürer.== Sömürge bayrağı değil, bağımlılık ilişkisi aranır." }
      ]
    },
    {
      baslik: "*Shatterbelt*: parçalanmış kuşak",
      kisa: "*Shatterbelt*, iç bölünmeler ve büyük güç rekabetiyle sarsılan bölgedir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💥", terim: "Shatterbelt", tr: "kırılma kuşağı", tanim: "İçinde kültürel ve siyasi bölünmeler bulunan, büyük güçlerin rekabet ettiği ve gerilimin süreklilik kazandığı bölge.", ornek: "Soğuk Savaş'ta Doğu Avrupa; bugün sık sık Orta Doğu." }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "🧩", baslik: "İç bölünme", metin: "Farklı etnik, dinî ya da siyasi gruplar." },
            { ikon: "🧭", baslik: "Stratejik konum", metin: "Kaynaklara ya da yollara yakınlık." },
            { ikon: "♟️", baslik: "Büyük güç rekabeti", metin: "Dışarıdaki devletler farklı tarafları destekler." }
          ] }
      ]
    },
    {
      baslik: "*Choke point*: dar geçit, büyük güç",
      kisa: "*Choke point*, ticaretin sıkıştığı dar geçittir; kontrol eden güç kazanır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚧", terim: "Choke point", tr: "boğaz noktası", tanim: "Deniz ya da kara ticaretinin dar bir geçitten geçmek zorunda kaldığı stratejik nokta. Kapanırsa ticaret aksar.", ornek: "Hürmüz Boğazı, Süveyş Kanalı, İstanbul ve Çanakkale boğazları." }
          ] },
        { tip: "grafik", baslik: "Boğaz kapanırsa ne olur? (şema)", xlabel: "", ylabel: "", xmax: 10, ymax: 10,
          ogeler: [
            { id: "lN", tip: "alan", renk: 1, noktalar: [[4, 10], [6, 10], [6, 5.4], [4, 5.4]] },
            { id: "lS", tip: "alan", renk: 1, noktalar: [[4, 1.4], [6, 1.4], [6, 4.6], [4, 4.6]] },
            { id: "tW", tip: "yazi", x: 1.8, y: 8.8, metin: "Batı denizi" },
            { id: "tE", tip: "yazi", x: 8.2, y: 8.8, metin: "Doğu denizi" },
            { id: "tB", tip: "yazi", x: 5, y: 7.6, metin: "Boğaz" },
            { id: "g1", tip: "nokta", renk: 0, x: 1.2, y: 5, etiket: "gemi" },
            { id: "g2", tip: "nokta", renk: 2, x: 3.0, y: 5, etiket: "gemi 2", gizli: true },
            { id: "br", tip: "cizgi", renk: 2, from: [5, 4.55], to: [5, 5.45], gizli: true },
            { id: "tk", tip: "yazi", x: 5, y: 6.4, metin: "KAPALI", gizli: true },
            { id: "d1", tip: "cizgi", renk: 2, kesik: true, from: [3.0, 5], to: [3.0, 0.7], gizli: true },
            { id: "d2", tip: "cizgi", renk: 2, kesik: true, from: [3.0, 0.7], to: [7.0, 0.7], gizli: true },
            { id: "tL", tip: "yazi", x: 5, y: 0.2, metin: "uzun yol: daha çok süre ve masraf", gizli: true }
          ],
          durumlar: [
            { metin: "İki deniz arasındaki en kısa yol, dar bir ==boğazdan== geçer." },
            { metin: "Gemiler boğazdan geçerek kısa yoldan karşıya ulaşır. Ticaret yolu tek bir noktada sıkışmıştır.", set: { g1: { x: 8.8 } } },
            { metin: "Boğazı kontrol eden güç geçişi düzenleyebilir ya da kapatabilir. Kapanınca ikinci gemi yoluna devam edemez.", goster: ["g2", "br", "tk"] },
            { metin: "İkinci gemi, kıtanın güneyinden dolaşmak zorunda kalıyor.", set: { g2: { x: 3.0, y: 0.7 } }, goster: ["d1"] },
            { metin: "Yol uzuyor; yakıt, süre ve masraf artıyor.", set: { g2: { x: 7.0, y: 0.7 } }, goster: ["d2", "tL"] },
            { metin: "Sonunda karşıya geçiyor. ==Geçidi kontrol eden devlet ticaret üzerinde güç kazanır.==", set: { g2: { x: 8.8, y: 5 } } }
          ] },
        { tip: "tablo", baslik: "Önemli geçitler", head: ["Geçit", "Bağladığı sular", "Yakınındaki ülke"], rows: [
            ["İstanbul ve Çanakkale boğazları", "Karadeniz, Marmara ve Ege", "Türkiye"],
            ["Süveyş Kanalı", "Akdeniz ve Kızıldeniz", "Mısır"],
            ["Hürmüz Boğazı", "Basra Körfezi ve Umman Körfezi", "İran ve Umman"],
            ["Malakka Boğazı", "Hint Okyanusu ve Güney Çin Denizi", "Malezya, Endonezya, Singapur"],
            ["Panama Kanalı", "Atlas ve Pasifik okyanusları", "Panama"]
          ] },
        { tip: "not", metin: "Türk boğazlarından geçiş 1936 Montrö Sözleşmesi ile düzenlenir: barış zamanında ticaret gemileri serbest geçer, savaş gemileri için sınırlamalar vardır. Böylece bir *choke point* uluslararası bir anlaşmayla yönetilebilir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Siyasi güç coğrafyada üç şeyin kontrolüdür: insanlar, toprak ve kaynaklar.",
            "*Territoriality*: insanların, kültürünün ve ekonomisinin toprağa bağı; sahiplenme ve savunma isteği.",
            "*Neocolonialism*: resmî sömürge bittikten sonra ekonomik, siyasi ya da kültürel yollarla süren etki (borç, tek ürüne bağımlılık).",
            "*Shatterbelt*: iç bölünmeleri olan ve büyük güçlerin rekabet ettiği bölge (Orta Doğu, Soğuk Savaş'ta Doğu Avrupa).",
            "*Choke point*: ticaretin sıkıştığı dar geçit (Hürmüz, Süveyş, İstanbul ve Çanakkale boğazları).",
            "Geçit kapanırsa yol uzar, maliyet artar; kontrolü elinde tutan güç kazanır.",
            "Türk boğazlarındaki geçiş Montrö Sözleşmesi'ne göre yürür."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Bir köy halkı yüzyıllardır kullandığı yayla otlaklarına yeni bir sınır yüzünden erişemeyince \"o topraklar bizimdir\" diyerek tepki gösteriyor. Bu tepkiyi en iyi hangi kavram açıklar?",
      opts: ["*Territoriality*", "*Shatterbelt*", "*Choke point*", "*Neocolonialism*"],
      a: 0,
      why: "İnsanların kültürünün ve ekonomisinin toprağa bağlılığı: *territoriality*. *Shatterbelt* ise büyük güç rekabeti olan bölünmüş bir bölgeyi anlatır; köyün tepkisi bununla açıklanmaz."
    },
    {
      q: "Bağımsızlığını yıllar önce kazanmış bir ülkenin ihracatı tek ürüne bağlı. Aldığı dış borcun şartları ekonomik kararlarını büyük ölçüde yabancı kredi verenler belirliyor. Bu durumu en iyi hangi kavram anlatır?",
      opts: ["*Shatterbelt*", "*Territoriality*", "*Neocolonialism*", "*Choke point*"],
      a: 2,
      why: "Resmî sömürge yok ama ekonomik bağımlılık yoluyla etki sürüyor: *neocolonialism*. *Choke point* ticaret yollarındaki dar geçittir, borç ilişkisiyle ilgili değildir."
    },
    {
      q: "Varsayımsal tablo, iki deniz arasındaki yolculuğun kanaldan geçerek ya da kıtanın çevresinden dolaşarak yapılmasını karşılaştırıyor. Kanalı kontrol eden devletin gücünü en iyi hangi kavram açıklar?",
      fig: { type: "table", head: ["Rota", "Mesafe", "Süre"], rows: [["Kanaldan geçiş", "4.000 km", "6 gün"], ["Kıtanın çevresinden dolaşma", "10.000 km", "15 gün"]] },
      opts: ["*Shatterbelt*", "*Neocolonialism*", "*Territoriality*", "*Choke point*"],
      a: 3,
      why: "Kanal ticaretin sıkıştığı dar geçittir; kapanınca yol uzar ve maliyet artar. Bu geçidi kontrol eden güç avantaj kazanır: *choke point*. *Territoriality* toprağa bağı anlatır; ticaret rotası maliyetini değil."
    },
    {
      q: "Bir bölgede birden çok etnik ve dinî grup yaşıyor, iç çatışmalar sürüyor ve iki büyük güç bölgede kendi müttefiklerini destekliyor. Bu bölge için en uygun terim hangisidir?",
      opts: ["*Choke point*", "*Shatterbelt*", "*Nation-state*", "*Territoriality*"],
      a: 1,
      why: "İç bölünmeler ve büyük güç rekabeti bir arada: *shatterbelt*. *Nation-state* tek ulusun egemen olduğu devlettir; bu bölgede tam tersi bölünmüşlük var."
    },
    {
      q: "Coğrafyacılar siyasi gücü hangi üç şey üzerindeki kontrol olarak açıklar?",
      opts: ["Dil, din ve ırk", "İnsanlar, toprak ve kaynaklar", "Nüfus, iklim ve bitki örtüsü", "Para, ordu ve bayrak"],
      a: 1,
      why: "CED siyasi gücü insanlar, toprak ve kaynaklar üzerindeki kontrol olarak ele alır. Ordu ya da para güç araçları olabilir ama güç tanımının üç alanı değildir."
    }
  ]
};
