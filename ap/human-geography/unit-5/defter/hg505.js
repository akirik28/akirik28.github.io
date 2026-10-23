/* Kitpath not defteri · hg505 · Yeşil Devrim (5.5)
   Kaynak: AP HuG CED Topic 5.5 (SPS-5.D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg505",
  amac: "Bu konu 1960'lardan itibaren gelişmekte olan ülkelerde tahıl verimini sıçratan Yeşil Devrim'i anlatıyor. Üç bileşenini (yüksek verimli tohum, kimyasallar, makineleşme) ve insanlar ile çevre üzerindeki hem olumlu hem olumsuz sonuçlarını öğreneceksin.",
  bolumler: [
    {
      baslik: "Yeşil Devrim nedir?",
      kisa: "1960'lardan itibaren gelişmekte olan ülkelerde tahıl verimini sıçratan teknoloji paketi.",
      bloklar: [
        { tip: "not", metin: "*Green Revolution*, 1960'lardan itibaren Asya ve Latin Amerika'daki gelişmekte olan ülkelerde buğday, pirinç ve mısır veriminin hızla artmasını sağlayan bir **teknoloji paketidir**. Amaç açlığı azaltmaktı: nüfus hızla artarken besin üretimi buna yetişmeliydi. İsimdeki \"yeşil\" bitkiyi anlatır, çevreciliği değil." },
        { tip: "zaman", olaylar: [
            { tarih: "1940'lar-60'lar", baslik: "Meksika'da kısa saplı buğday", metin: "Norman Borlaug, hastalığa dayanıklı ve kısa saplı buğday çeşitleri geliştirir." },
            { tarih: "1960'lar", baslik: "Asya'ya yayılma", metin: "Hindistan ve Pakistan'da yeni buğday ekilir; Filipinler'deki enstitü IR8 pirincini çıkarır." },
            { tarih: "1970", baslik: "Nobel Barış Ödülü", metin: "Borlaug, açlıkla mücadele çabaları nedeniyle ödül alır." },
            { tarih: "1970'ler-80'ler", baslik: "Dengesiz yayılma", metin: "Asya ve Latin Amerika'nın büyük bölümü etkilenir; Sahra altı Afrika daha az." }
          ] }
      ]
    },
    {
      baslik: "Üç bileşen",
      kisa: "Yüksek verimli tohum, kimyasallar ve makineleşme birlikte çalışır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌾", terim: "High-yield varieties (HYVs)", tr: "yüksek verimli çeşitler", tanim: "Hektar başına daha çok ürün veren, melezleme ile geliştirilmiş buğday, pirinç ve mısır tohumları. Ama gübre, su ve ilaç ister.", ornek: "Meksika'daki kısa saplı buğday, Filipinler'deki IR8 \"mucize pirinci\"." },
            { ikon: "🧪", terim: "Chemical inputs", tr: "kimyasal girdiler", tanim: "Kimyasal gübre, pestisit (zararlı ilacı) ve herbisit (yabani ot ilacı). Verimi artırır, ama çevreye ve sağlığa zarar verebilir.", ornek: "Pencap'taki buğday tarlalarına atılan azotlu gübre." },
            { ikon: "🚜", terim: "Mechanization", tr: "makineleşme", tanim: "Traktör, biçerdöver ve su pompası gibi makineler. Ekim ve hasat hızlanır, sulama kolaylaşır, işçi ihtiyacı azalır.", ornek: "Hindistan'da traktörler ve kuyu pompaları." }
          ] },
        { tip: "tuzak", metin: "Yeşil Devrim tohumlarının nasıl geliştirildiğine dikkat.", yanlis: "Yeşil Devrim tohumları genetik mühendisliğiyle üretilen GMO'lardır.", dogru: "Yeşil Devrim çeşitleri çoğunlukla **geleneksel çaprazlama (melezleme)** ile geliştirildi. Çoğu da gübre, sulama ve ilaç gerektirir; yani tohum tek başına değil, **paket** hâlinde işe yarar." }
      ]
    },
    {
      baslik: "Verim neden sıçradı?",
      kisa: "Kısa saplı çeşitler gübreyi daneye çevirir; aynı girdiyle çok daha fazla ürün.",
      bloklar: [
        { tip: "adimlar", baslik: "Paketin işleyişi", adimlar: [
            { baslik: "Kısa saplı melezler", metin: "Yeni buğday çeşitleri kısa saplıdır; gübre fazla olsa da devrilmez." },
            { baslik: "Gübre ve su", metin: "Eski uzun saplı çeşitler çok gübrede devrilir. Yeni çeşitler gübreyi daneye çevirir ama düzenli sulama ister." },
            { baslik: "İlaç ve makine", metin: "Zararlı ve yabani ot ilaçla, ekim ve hasat makineyle yönetilir." },
            { baslik: "Hızlı olgunlaşma", metin: "Kısa sürede olgunlaşan çeşitlerle yılda birden fazla ürün alınabilir." }
          ] },
        { tip: "grafik", baslik: "Aynı girdiyle iki tohum (şematik)", xlabel: "Gübre, su ve ilaç girdisi", ylabel: "Hektar başına verim", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "az" }, { v: 9, label: "çok" }],
          ogeler: [
            { id: "eski", tip: "egri", renk: 1, noktalar: [[0.5, 1], [2, 2], [4, 3], [6, 3.4], [8, 3.6], [9, 3.6]] },
            { id: "eyaz", tip: "yazi", x: 7.4, y: 2.5, metin: "eski tohum" },
            { id: "hyv", tip: "egri", renk: 0, noktalar: [[0.5, 1.2], [2, 3], [4, 5.2], [6, 7], [8, 8.2], [9, 8.6]], gizli: true },
            { id: "hyaz", tip: "yazi", x: 6.6, y: 9.1, metin: "HYV tohum", gizli: true },
            { id: "fark", tip: "ok", from: [4, 3.2], to: [4, 5.0], gizli: true },
            { id: "fyaz", tip: "yazi", x: 4.3, y: 4.0, metin: "verim farkı", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Eski, uzun saplı çeşitler: gübre arttıkça verim bir yerden sonra düzleşir (bitki devrilir)." },
            { metin: "==HYV tohum==: aynı girdi artışıyla çok daha yüksek verim verir.", goster: ["hyv", "hyaz"] },
            { metin: "Aynı girdi düzeyinde aradaki ==verim farkı== Yeşil Devrim'in kazancıdır. Ama bu girdilerin **maliyeti** vardır.", goster: ["fark", "fyaz"] }
          ] }
      ]
    },
    {
      baslik: "Artılar ve eksiler: insanlar ve çevre",
      kisa: "Gıda bolluğu arttı, ama su, toprak ve küçük çiftçi bedel ödedi.",
      bloklar: [
        { tip: "tablo", baslik: "Dört kutu: insan ve çevre, artı ve eksi", head: ["", "Artı", "Eksi"], rows: [
            ["İnsanlar", "Hektar başına verim ve gıda arzı arttı; kıtlık riski ve gıda fiyatları düştü; Hindistan gibi ülkeler buğdayda ithalattan kendi kendine yeterliğe yaklaştı", "Tohum, gübre, ilaç ve sulama pahalı: küçük çiftçi borçlanır; zengin çiftçi kazanır, eşitsizlik artar; makineler tarım işçisini işsiz bırakır"],
            ["Çevre", "Aynı üretim için daha az yeni orman ve otlak tarlaya çevrildi (arazi tasarrufu)", "Gübre ve ilaç göl ve nehirlere karışır (*eutrophication*); aşırı sulama yeraltı suyunu tüketir ve toprağı tuzlandırır; tek tip çeşitler biyoçeşitliliği azaltır"]
          ] },
        { tip: "ikili", sol: { ikon: "➕", baslik: "Olumlu sonuç", maddeler: ["Verim ve gıda arzı artar", "Daha az yeni arazi açılır"] },
          sag: { ikon: "➖", baslik: "Olumsuz sonuç", maddeler: ["Su ve toprak kirlenir ya da tükenir", "Küçük çiftçi borçlanır; eşitsizlik artar"] },
          oyun: [
            { metin: "Bir ülke tahılda ithalattan kendi kendine yeterliliğe yaklaşıyor.", cevap: "sol", neden: "Gıda arzının artması temel yarardır." },
            { metin: "Fazla gübre yağmurla göle karışıyor, su canlıları ölüyor.", cevap: "sag", neden: "Gübre akıntısı: çevresel bedel." },
            { metin: "Küçük çiftçi pahalı tohum ve gübre için borçlanıyor.", cevap: "sag", neden: "Girdi maliyeti küçük çiftçiyi zorlar." },
            { metin: "Aynı ürünü almak için daha az orman tarlaya çevriliyor.", cevap: "sol", neden: "Arazi tasarrufu yarar sayılır." },
            { metin: "Pencap'ta çok sulanan toprakta tuzlanma başlıyor.", cevap: "sag", neden: "Aşırı sulama toprağı tuzlandırır." }
          ] }
      ]
    },
    {
      baslik: "Kim kazandı?",
      kisa: "Girdileri karşılayabilenler kazandı; Yeşil Devrim her yere eşit yayılmadı.",
      bloklar: [
        { tip: "ornek", baslik: "İki komşu çiftçi", durum: "Ayşe ve Mehmet'in ikisinin de 10 hektar buğday tarlası var. Eski tohumla hektardan 1 ton alınıyor. Yeni tohumla hektardan 3 ton alınıyor, ama tohum, gübre, ilaç ve sulama masrafı toplam 6 ton buğday değerinde. Ayşe masrafı karşılayıp yeni tohumu ekiyor; Mehmet kredi bulamıyor ve eski tohumla devam ediyor. Kimin net ürünü ne kadar?",
          adimlar: ["Ayşe: 10 hektar × 3 ton = 30 ton; masraf 6 ton: net 30 − 6 = 24 ton.", "Mehmet: 10 hektar × 1 ton = 10 ton; masraf yok: net 10 ton.", "Fark: 24 − 10 = 14 ton."],
          sonuc: "==Ayşe 24 ton, Mehmet 10 ton.== Yeni teknoloji girdileri karşılayanı zenginleştirdi; karşılayamayan geride kaldı. Bu yüzden gelir eşitsizliği arttı." },
        { tip: "tuzak", metin: "Yeşil Devrim her yerde aynı sonucu vermedi.", yanlis: "Yeşil Devrim bütün gelişmekte olan dünyada eşit başarılı oldu.", dogru: "Etkisi en çok **Asya ve Latin Amerika'da** görüldü. Sahra altı Afrika'da büyük ölçüde sınırlı kaldı: çeşitler buğday, pirinç ve mısıra odaklıydı, yerel temel besinler (sorgum, darı, manyok) daha az hedeflendi; sulama ve yol gibi altyapı da yetersizdi." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Green Revolution* (1960'lardan itibaren): gelişmekte olan ülkelerde (Asya, Latin Amerika) tahıl verimini artıran teknoloji paketi.",
            "Üç özellik: *high-yield varieties* (HYV) tohumlar, artan kimyasal kullanımı (gübre, pestisit, herbisit) ve makineleşme (sulama dahil).",
            "HYV tohumlar geleneksel melezleme ile geliştirildi (GMO değil); gübre, su ve ilaç ister.",
            "İnsanlar için artı: verim ve gıda arzı arttı, kıtlık riski ve gıda fiyatları düştü. Eksi: pahalı girdiler küçük çiftçiyi borçlandırdı, eşitsizlik arttı, makineler işçiyi işsiz bıraktı.",
            "Çevre için artı: aynı üretim için daha az yeni arazi açıldı. Eksi: su kirliliği (*eutrophication*), yeraltı suyu azalması, toprak tuzlanması, biyoçeşitlilik kaybı.",
            "Hesap örneği: 10 hektar, 3 ton verim, 6 ton masraf: net 24 ton; eski tohumla 10 ton.",
            "Yayılma dengesizdi: Asya ve Latin Amerika'da güçlü, Sahra altı Afrika'da sınırlı."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi Yeşil Devrim'in özelliklerinden biri DEĞİLDİR?",
      opts: ["Yüksek verimli tohum kullanımı", "Kimyasal gübre ve pestisit kullanımının artması", "Tarımda makineleşme", "Ortak otlak ve tarlaların çitlenip özel mülke çevrilmesi"],
      a: 3, why: "Ortak arazinin çitlenmesi İkinci Tarım Devrimi'ne (Britanya, 1700-1800'ler) aittir. Diğer üçü Yeşil Devrim'in tanımındaki özelliklerdir." },
    { q: "Hindistan'ın Pencap bölgesinde 1960'lardan sonra buğday verimi birkaç kat artmış, fakat yıllar sonra kuyular derinleşmiş ve topraklar tuzlanmıştır. Bu durum Yeşil Devrim hakkında neyi gösterir?",
      opts: ["Gıda arzını artırdığını, ama çevresel maliyetler de yarattığını", "Çevreye hiçbir zarar vermediğini", "Yalnızca olumsuz sonuçları olduğunu", "Etkisinin yalnızca Afrika'da görüldüğünü"],
      a: 0, why: "Yeşil Devrim hem insan hem çevre için olumlu ve olumsuz sonuçlar doğurdu: verim arttı, ama aşırı sulama yeraltı suyunu azalttı ve toprağı tuzlandırdı. C çekici bir yanlıştır: verim artışı gerçek bir olumlu sonuçtur." },
    { q: "Tabloya göre Yeşil Devrim'in olası bir sonucu hangisidir?",
      fig: { type: "table", caption: "İki komşu çiftçi (10'ar hektar)", head: ["Çiftçi", "Tohum", "Hektar başına verim (ton)", "Toplam masraf (ton buğday değeri)", "Durum"], rows: [["Ali", "Yüksek verimli (HYV)", 3, 6, "Kredi buldu"], ["Veli", "Eski çeşit", 1, 0, "Kredi bulamadı"]] },
      opts: ["Her çiftçi, girdileri karşılayıp karşılayamadığından bağımsız olarak aynı oranda kazanır.", "Girdileri karşılayabilen çiftçi daha çok kazanır; karşılayamayan geride kalır ve eşitsizlik artabilir.", "Eski çeşit, HYV'den daha yüksek net ürün verir.", "Masraflar verim farkını tamamen ortadan kaldırır."],
      a: 1, why: "Ali'nin neti 10 × 3 − 6 = 24 ton, Veli'nin neti 10 ton; Ali yüksek girdileri karşılayabildiği için öne geçti. D çekici bir yanlıştır: masraf farkı küçültür ama ortadan kaldırmaz (24 ton ile 10 ton)." },
    { q: "Yeşil Devrim tohumları hakkında hangisi doğrudur?",
      opts: ["Genetik mühendisliğiyle üretilen GMO'lardır.", "Gübre, su ve ilaç gerektirmeden yüksek verim verir.", "Çoğunlukla geleneksel melezleme ile geliştirilmiş, gübre ve sulama gerektiren yüksek verimli çeşitlerdir.", "Yalnızca Avrupa'da kullanılmıştır."],
      a: 2, why: "Yeşil Devrim çeşitleri melezlemeyle geliştirildi ve ancak gübre, su ve ilaçla birlikte yüksek verim verir. B çekici ama yanlıştır: tohum paketin yalnızca bir parçasıdır." },
    { q: "Yeşil Devrim'in Sahra altı Afrika'da Asya'dakine göre daha sınırlı etkili olmasının nedenlerinden biri hangisidir?",
      opts: ["Afrika'da hiç tahıl yetiştirilmemesi", "Yeşil Devrim'in yalnızca kentte uygulanabilmesi", "Çeşitlerin ağırlıkla buğday, pirinç ve mısıra odaklanması; yerel besinlerin ve sulama gibi altyapının geride kalması", "Afrika çiftçilerinin kimyasal gübreyi yasaklaması"],
      a: 2, why: "Çeşitler büyük ölçüde buğday, pirinç ve mısır içindi; sorgum, darı, manyok daha az hedeflendi ve sulama ile yollar yetersizdi. A yanlıştır: Afrika'da mısır, sorgum ve darı yetiştirilir." }
  ]
};
