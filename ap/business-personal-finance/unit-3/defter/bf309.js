/* Kitpath not defteri · bf309 · 3.9 Etik ve Finansal Raporlama
   Kaynak: AP Business with Personal Finance CED, Topic 3.9. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf309",
  amac: "Bu konu finansal yönetimde etiği anlatıyor: etik dışı uygulamalar nelerdir, insanlar ve işletmeler bunlara neden yönelir, yasalar ve meslek kodları bunları nasıl engeller. Zimmet, vergi kaçırma, sahtekârlık gibi kavramları ve bağımsız denetimi öğreneceksin.",
  bolumler: [
    {
      baslik: "Etik dışı finansal uygulamalar",
      kisa: "Fon kötüye kullanımı, vergi kaçırma, zimmet, rüşvet, şeffaflık eksikliği ve sahtekârlık etik dışıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💸", terim: "Misuse of funds", tr: "fonları kötüye kullanma", tanim: "Paranın amacı dışında, çoğunlukla kişisel çıkar için kullanılması.", ornek: "Şirket parasıyla kişisel tatil yapmak." },
            { ikon: "🧾", terim: "Tax evasion", tr: "vergi kaçırma", tanim: "Ödenmesi gereken vergiyi yasa dışı yollarla, örneğin geliri gizleyerek ya da yanlış bildirerek ödememek.", ornek: "Gerçek satışın yarısını beyan etmemek." },
            { ikon: "🧤", terim: "Embezzlement", tr: "zimmet", tanim: "Kendisine emanet edilen parayı ya da malı çalmak.", ornek: "Kasiyerin kasadaki parayı cebine atması." },
            { ikon: "🎁", terim: "Bribery", tr: "rüşvet", tanim: "Karar vermesi için birine haksız çıkar vermek ya da almak.", ornek: "İhaleyi kazanmak için yetkiliye hediye vermek." },
            { ikon: "🌫️", terim: "Lack of transparency", tr: "şeffaflık eksikliği", tanim: "Önemli finansal bilgileri ilgili taraflardan saklamak ya da açıkça anlatmamak.", ornek: "Büyük bir borcu raporda belirtmemek." },
            { ikon: "🎭", terim: "Fraud", tr: "sahtekârlık, dolandırıcılık", tanim: "Haksız kazanç için aldatmak; finansal tablolardaki bilgileri sahteleştirmek de buna girer.", ornek: "Zararı kâr gibi göstermek." }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🚫", baslik: "Etik dışı ya da yasa dışı", maddeler: ["Geliri vergi dairesinden saklamak", "Kasadan para almak", "Gerçeği çarpıtan tablo hazırlamak"] },
          sag: { ikon: "✅", baslik: "Etik ve yasal", maddeler: ["Gerçeğe uygun rapor hazırlamak", "Yasal vergi indirimlerinden yararlanmak", "Önemli bilgiyi açıkça paylaşmak"] },
          oyun: [
            { metin: "Muhasebeci satışların bir kısmını kayıtlara hiç geçirmiyor, böylece vergi azalıyor.", cevap: "sol", neden: "Geliri gizleyip vergiyi azaltmak: vergi kaçırma." },
            { metin: "Şirket, kanunun izin verdiği bir yatırım indiriminden yararlanıyor.", cevap: "sag", neden: "Yasal indirim; kaçırma değildir." },
            { metin: "Kasiyer, \"sonra geri koyarım\" diyerek kasadan 500 TL alıyor.", cevap: "sol", neden: "Emanet parayı almak: zimmet." },
            { metin: "Finans müdürü, zararı da içeren tam bir yıllık rapor yayımlıyor.", cevap: "sag", neden: "Olumlu ve olumsuz bilgi açıklanıyor: şeffaflık." }
          ] },
        { tip: "tuzak", baslik: "Her vergi azaltma suç değildir", metin: "Yasal vergi planlaması ile vergi kaçırma ayrı şeylerdir.", yanlis: "Vergiyi azaltmaya çalışan herkes vergi kaçırır.", dogru: "Yasaların tanıdığı indirimlerden yararlanmak yasaldır. ==Vergi kaçırma== ise geliri gizleyerek, sahte kayıt tutarak ya da yanlış bildirerek ödenmesi gereken vergiyi ödememektir." }
      ]
    },
    {
      baslik: "Neden cazip gelir?",
      kisa: "Büyük nakit ve çarpıtılmış bilgi, kişisel çıkar arayanlar için fırsat yaratır.",
      bloklar: [
        { tip: "hikaye", ikon: "🗝️", baslik: "Kasadaki para ve \"ödünç\" düşüncesi",
          metin: "Tuna bir kafe zincirinin muhasebe çalışanı ve her gün çok büyük miktarda nakit onun elinden geçiyor. Kendi borçları sıkışınca aklına \"birkaç bin lirayı alıp sonra geri koyarım\" fikri geliyor. Büyük miktarda nakde erişim, ==fırsat== yaratır; böyle bir düşünce de çoğunlukla kendini haklı çıkarma yoludur." },
        { tip: "grafik", baslik: "Gerçek kâr 80; rapordaki kâr farklı gösterilebilir (bin TL)", xlabel: "", ylabel: "Net kâr", xmax: 4, ymax: 140, xticks: [{ v: 1, label: "Gerçek" }, { v: 2, label: "Şişirilmiş" }, { v: 3, label: "Düşürülmüş" }], yticks: [{ v: 40, label: "40" }, { v: 80, label: "80" }, { v: 120, label: "120" }],
          ogeler: [
            { id: "ref", tip: "cizgi", renk: 3, kesik: true, from: [0, 80], to: [4, 80], etiket: "", gizli: true },
            { id: "g1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "g2", tip: "alan", renk: 3, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "g3", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "x1", tip: "yazi", x: 1, y: 92, metin: "80", gizli: true },
            { id: "x2", tip: "yazi", x: 2, y: 132, metin: "120", gizli: true },
            { id: "x3", tip: "yazi", x: 3, y: 52, metin: "40", gizli: true }
          ],
          durumlar: [
            { metin: "Şirketin gerçek net kârı ==80 bin TL==.", set: { g1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 80], [0.65, 80]] } }, goster: ["x1"] },
            { metin: "Hisse fiyatını yükseltmek ya da daha iyi kredi şartları almak isteyen yönetim kârı ==120== gösterir: olduğundan iyi görünmek.", set: { g2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 120], [1.65, 120]] } }, goster: ["ref", "x2"] },
            { metin: "Vergiyi azaltmak isteyen yönetim kârı ==40== gösterir: olduğundan kötü görünmek.", set: { g3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 40], [2.65, 40]] } }, goster: ["x3"] },
            { metin: "İki yönde de gerçek çarpıtılır: yatırımcılar, borç verenler ve devlet yanıltılır." }
          ] },
        { tip: "tablo", baslik: "Çarpıtma amacı ve yönü", head: ["Amaç", "Rapor nasıl çarpıtılır?", "Kim yanıltılır?"], rows: [
            ["Hisse fiyatını etkilemek", "Durum olduğundan iyi gösterilir", "Yatırımcılar"],
            ["Daha iyi kredi şartları almak", "Durum olduğundan iyi gösterilir", "Borç verenler"],
            ["Vergiden kaçınmak", "Durum olduğundan kötü gösterilir (kâr düşük)", "Devlet"],
            ["Kişisel çıkar sağlamak", "Zimmet ve fon kötüye kullanımını gizlemek", "İşletme ve ortakları"]
          ], not: "Finansal yöneticiler, durumu paydaşlara ve devlete olduğundan iyi ya da kötü göstererek fiyat, kredi şartı ve vergiyi etkileyebilir." }
      ]
    },
    {
      baslik: "Yasalar ve bağımsız denetim",
      kisa: "Etik dışı uygulamalar çoğu ülkede yasa dışıdır; halka açık şirketler bağımsız denetimden geçer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Laws against misconduct", tr: "yasal yasaklar", tanim: "Fon kötüye kullanımı, vergi kaçırma, zimmet, rüşvet ve sahtekârlık çoğu ülkede yasa dışıdır; yasalar ve cezalar ülkeden ülkeye farklıdır.", ornek: "Türkiye'de de bu fiiller suçtur." },
            { ikon: "🕵️", terim: "Independent audit", tr: "bağımsız denetim", tanim: "ABD yasalarına göre hisseleri halka açık şirketler finansal kayıtlarını her yıl bağımsız muhasebe firmalarına denetlettirmek zorundadır.", ornek: "Türkiye'de halka açık şirketlere benzer yükümlülük vardır (SPK düzenlemeleri)." },
            { ikon: "🛡️", terim: "Financial market regulations", tr: "finansal piyasa düzenlemeleri", tanim: "Yatırımcıların doğru bilgiye ulaşmasını ve sahtekârlığa karşı korunmasını amaçlar.", ornek: "Şirketlerin tabloları kamuya açıklanır." }
          ] },
        { tip: "adimlar", baslik: "Denetimden yatırımcıya", adimlar: [
            { baslik: "Şirket tabloları hazırlar", metin: "Gelir tablosu, bilanço ve nakit akış tablosu." },
            { baslik: "Bağımsız firma denetler", metin: "Şirketle çıkar bağı olmayan bir muhasebe firması kayıtları inceler." },
            { baslik: "Bilgi kamuya açılır", metin: "Yatırımcılar ve borç verenler denetlenmiş tablolara dayanarak karar verir." },
            { baslik: "Düzenleme koruma sağlar", metin: "Piyasa kuralları yatırımcıyı sahtekârlığa karşı korumayı amaçlar." }
          ] },
        { tip: "tuzak", baslik: "Her yerde aynı ceza yok", metin: "Yasaklar yaygındır ama ayrıntılar ülkeden ülkeye değişir.", yanlis: "Bu fiillerin hukuki tanımı ve cezası bütün ülkelerde aynıdır.", dogru: "Bu uygulamalar çoğu ülkede yasa dışıdır ancak ==yasalar ve cezalar ülkeden ülkeye== değişir; bağımsız denetim zorunluluğu da ABD yasalarındaki hisseleri halka açık şirketler için bir örnektir." }
      ]
    },
    {
      baslik: "Meslek etik kodları",
      kisa: "Muhasebe ve finans meslek örgütleri dürüstlük, bütünlük, şeffaflık, tarafsızlık ve gizliliği şart koşar.",
      bloklar: [
        { tip: "harita", merkez: "Meslek etik kodları", dallar: [
            { baslik: "Dürüstlük (*honesty*)", alt: "Gerçeği olduğu gibi söylemek" },
            { baslik: "Bütünlük (*integrity*)", alt: "İlkelerden ödün vermemek" },
            { baslik: "Şeffaflık (*transparency*)", alt: "Bilgiyi açıkça paylaşmak" },
            { baslik: "Tarafsızlık (*objectivity*)", alt: "Çıkar çatışmasından etkilenmeden karar vermek" },
            { baslik: "Gizlilik (*confidentiality*)", alt: "Müşteri bilgisini korumak" }
          ] },
        { tip: "tablo", baslik: "Hangi davranış hangi ilkeye aykırı?", head: ["Davranış", "Zedelenen ilke"], rows: [
            ["Bonus almak için rakamları değiştirmek", "Dürüstlük"],
            ["Kuralları bilerek çiğnemek, ilkelerinden ödün vermek", "Bütünlük"],
            ["Bir zararı rapordan çıkarmak", "Şeffaflık"],
            ["Yakın arkadaşının şirketini denetlerken yanlı davranmak", "Tarafsızlık"],
            ["Müşterinin mali bilgisini izinsiz üçüncü kişiye anlatmak", "Gizlilik"]
          ] }
      ]
    },
    {
      baslik: "Şirket içi önlemler",
      kisa: "Davranış kuralları, denetim zorunluluğu ve nakit işleme kuralları etik dışı davranışı önler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📘", terim: "Code of conduct", tr: "davranış kuralları", tanim: "Çalışanlardan beklenen etik davranışı yazılı olarak belirleyen şirket kuralları.", ornek: "Hediye kabul etme politikası." },
            { ikon: "🔍", terim: "Audit requirements", tr: "denetim zorunlulukları", tanim: "Kayıtların düzenli aralıklarla kontrol edilmesi şartı.", ornek: "Yıllık iç denetim." },
            { ikon: "💵", terim: "Cash-handling processes", tr: "nakit işleme süreçleri", tanim: "Parayı sayma, saklama ve kaydetme kuralları; bir kişinin tek başına kontrol etmesini zorlaştırır.", ornek: "Kasayı iki kişinin sayması." }
          ] },
        { tip: "ornek", baslik: "Gün sonu kasa kontrolü", durum: "Bir kafenin satış kaydı gün sonunda 18.500 TL gösteriyor. İki kişi kasayı sayınca 18.100 TL çıkıyor. Kafe bu farkı nasıl fark eder ve ne yapar?",
          adimlar: ["Fark: 18.500 − 18.100 = 400 TL eksik.", "Nakit kayıtla karşılaştırıldığı için eksik hemen görülür; tek bir kişi bunu gizleyemez.", "Fark araştırılır; açıklanamıyorsa zimmet ya da hata olarak incelenir."],
          sonuc: "Karşılaştırma ve iki kişilik sayım sayesinde ==400 TL== eksik ilk gün fark edilir." },
        { tip: "tuzak", baslik: "Güven kontrolün yerini tutmaz", metin: "Çalışan iyi biri olabilir; yine de fırsat sınırlanmalıdır.", yanlis: "Çalışana güveniyorsak nakit kontrolüne gerek yoktur.", dogru: "Büyük miktarda nakde erişim fırsat yaratır; davranış kuralları, denetimler ve nakit işleme süreçleri bu fırsatı azaltır ve dürüst çalışanı da korur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Etik dışı uygulamalar: fon kötüye kullanımı, vergi kaçırma, zimmet, rüşvet, şeffaflık eksikliği ve sahtekârlık (finansal tabloları sahteleştirmek dahil).",
            "Çok miktarda nakde erişim fırsat yaratır; kişisel çıkar insanı zimmete ya da sahte bilgiye yöneltebilir.",
            "İşletmeler durumunu olduğundan iyi ya da kötü gösterip hisse fiyatını etkileyebilir, kredi şartını iyileştirebilir ya da vergiden kaçınabilir.",
            "Bu uygulamalar çoğu ülkede yasa dışıdır; yasalar ve cezalar ülkeden ülkeye farklıdır.",
            "ABD yasalarına göre halka açık şirketler finansal kayıtlarını yılda bir bağımsız muhasebe firmasına denetlettirmek zorundadır.",
            "Piyasa düzenlemeleri yatırımcıların doğru bilgiye ulaşmasını ve sahtekârlıktan korunmasını amaçlar.",
            "Meslek örgütlerinin kodları dürüstlük, bütünlük, şeffaflık, tarafsızlık ve gizliliği vurgular.",
            "Şirketler davranış kuralları, denetim zorunlulukları ve nakit işleme süreçleriyle önlem alır.",
            "Yasal vergi indirimi ile vergi kaçırma farklı şeylerdir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir şirketin finans müdürü, hisse fiyatını yükseltmek amacıyla dönem kârını olduğundan yüksek gösteren finansal tablolar hazırlıyor. Bu davranış hangisidir?",
      opts: ["Vergi kaçırma", "Zimmet", "Sahtekârlık (*fraud*): finansal tabloları sahteleştirmek", "Rüşvet"],
      a: 2,
      why: "Finansal bilgiyi sahteleştirerek yatırımcıları yanıltmak sahtekârlıktır. A en çekici yanlış: vergi kaçırma kârı olduğundan düşük gösterme yönündedir; burada kâr yüksek gösteriliyor." },
    { q: "İki işletme sahibinden Ali, kanunun tanıdığı bir indirimden yararlanarak vergisini azaltıyor. Veli ise satışlarının bir kısmını kayıtlara hiç geçirmeyerek vergisini azaltıyor. Hangisi doğrudur?",
      opts: ["Yalnızca Veli'nin yaptığı vergi kaçırmadır; Ali'nin yaptığı yasaldır", "İkisi de vergi kaçırmadır", "İkisi de yasaldır, çünkü ikisi de vergiyi azaltıyor", "Yalnızca Ali'nin yaptığı vergi kaçırmadır"],
      a: 0,
      why: "Yasal indirimden yararlanmak yasaldır; geliri kayıt dışı bırakmak vergi kaçırmadır. B en çekici yanlış: vergiyi azaltma sonucu aynı olsa da yöntemin yasallığı farklıdır." },
    { q: "Tabloya göre şirketin raporda gerçek kârından daha düşük kâr göstermesinin en olası amacı nedir?",
      fig: { type: "table", caption: "Şirketin kârı (bin TL)", head: ["Gerçek net kâr", "Rapordaki net kâr"], rows: [[80, 40]] },
      opts: ["Hisse fiyatını yükseltmek", "Daha iyi kredi şartları almak", "Yatırımcıların ilgisini artırmak", "Ödenecek vergiyi azaltmak"],
      a: 3,
      why: "Kârı düşük göstermek vergi matrahını küçültmek içindir ve vergi kaçırmaktır. A en çekici yanlış: hisse fiyatını yükseltmek için kârı yüksek göstermek gerekir." },
    { q: "Bir mağaza zinciri, kasadan para çalınmasını zorlaştırmak için gün sonunda satış kaydını sayılan nakitle karşılaştırıyor ve kasayı iki kişiye saydırıyor. Bu önlem hangisine örnektir?",
      opts: ["Bağımsız denetim", "Nakit işleme süreci (*cash-handling process*)", "Rüşvet önleme yasası", "Vergi planlaması"],
      a: 1,
      why: "Sayma ve karşılaştırma kuralları şirket içi nakit işleme sürecidir. A en çekici yanlış: bağımsız denetimi dışarıdan bir muhasebe firması yapar, şirket içi kasa kontrolü değildir." },
    { q: "ABD yasalarına göre hisseleri halka açık bir şirket hangisini yapmak zorundadır?",
      opts: ["Finansal tablolarını yalnızca yönetim kuruluna açıklamak", "Kâr eden yıllarda finansal tablolarını yayımlamak, zarar edenlerde yayımlamamak", "Yatırımcıları bilgilendirmemek, çünkü finansal bilgi gizlidir", "Finansal kayıtlarını her yıl bağımsız bir muhasebe firmasına denetlettirmek"],
      a: 3,
      why: "Halka açık şirketler finansal kayıtlarını yıllık olarak bağımsız muhasebe firmalarına denetlettirmek zorundadır. B en çekici yanlış: GAAP olumlu ve olumsuz bilgiyi açıklamayı ister, yalnızca iyi yılları değil." }
  ]
};
