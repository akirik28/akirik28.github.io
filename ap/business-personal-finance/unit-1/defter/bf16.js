/* Kitora not defteri · bf16 · 1.6 İş Etiği
   Kaynak: ap-videolar/src/episodes/bf16 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf16",
  ozet: "*Business ethics*, yanlış olan daha hızlı ve kârlı olsa bile doğruyu yapmaktır. Etik dışı davranış çoğu zaman kötü kurulmuş bir *incentive structure* ile başlar. Bu defterde *fraud*, *financial misrepresentation*, *corruption* (*bribery* ve *conflict of interest*), *deceptive marketing*, önleme yolları (*code of conduct*, *ethics training*, örnek lider), *ethical dilemma* ve *stakeholders* var.",
  bolumler: [
    {
      baslik: "Prim koydun, müşteri kandırıldı",
      bloklar: [
        { tip: "hikaye", ikon: "📱", baslik: "Telefon dükkânı ve 200 liralık prim",
          metin: "Bir telefon dükkânın var diyelim. Çalışanlarına söz veriyorsun: her yeni hat için 200 lira prim. Satışlar bir ayda ikiye katlanıyor. Sonra öğreniyorsun: bazıları, prim için müşteriye sormadan ek paket açmış. Suç kimde? Müşteriyi kandıran çalışanda mı, o primi koyan sende mi? Müşterilere söyler misin, susar mısın?" },
        { tip: "adimlar", baslik: "Olayın akışı", adimlar: [
            { baslik: "Prim", metin: "Her yeni hat için 200 TL." },
            { baslik: "Satış", metin: "Bir ayda ikiye katlanıyor." },
            { baslik: "Gerçek", metin: "Bazı çalışanlar prim için müşteriye sormadan ek paket açmış." },
            { baslik: "İkilem", metin: "Sorumlu çalışan mı, primi koyan patron mu? Müşterilere söyler misin, susar mısın?" }
          ] },
        { tip: "not", metin: "Video planı: iş etiği → etik dışı davranış örnekleri → en iyi uygulamalar. Aynı olay ==iş etiği sorusunun özeti==: kimin hatası, ve ne yapmalı?" }
      ]
    },
    {
      baslik: "*Business ethics* ve etik dışı davranış",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧭", terim: "Business ethics", tr: "iş etiği", tanim: "Bir işletmede davranışlara ve kararlara yön veren ahlaki ilkeler ve standartlar. Kısacası yanlış olan daha hızlı ve kârlı olsa bile doğruyu yapmak.", ornek: "Dünkü ekmeğin üstüne “dünkü ekmek, yarı fiyat” yazmak." },
            { ikon: "🚫", terim: "Unethical behavior", tr: "etik dışı davranış", tanim: "Bu ilkelere aykırı davranmak; işletmenin her kademesinde görülebilir.", ornek: "Dünkü ekmeği taze diye satmak." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Etik", maddeler: ["Doğruyu yapmak", "Hızlı ve kârlı olmasa bile"] },
          sag: { ikon: "❌", baslik: "Etik dışı", maddeler: ["Yanlış olanı yapmak", "Kısa vadede daha kârlı görünse bile"] },
          oyun: [
            { metin: "Dünkü ekmeği “taze” diye satmak.", cevap: "sag", neden: "Müşteriyi yanıltıyor." },
            { metin: "Dünkü ekmeğin üstüne “dünkü ekmek, yarı fiyat” yazmak.", cevap: "sol", neden: "Doğruyu söylüyor." },
            { metin: "Prim için müşteriye sormadan ek paket açmak.", cevap: "sag", neden: "Müşterinin bilgisi ve rızası yok." },
            { metin: "Hatalı ürün çıktığında müşteriye açıkça söylemek.", cevap: "sol", neden: "Yanlış olan daha kârlı olsa bile doğruyu yapmak." }
          ] },
        { tip: "tuzak", baslik: "Etik = kurallara uymak mı?", metin: "Clifford'ın ana fikri: iş etiği güven kurmaktır.", yanlis: "Etik, yalnızca yasalara uymaktan ibarettir.", dogru: "Etik, yanlış olan daha kârlı olsa bile doğruyu yapmak ve uzun vadede güven kurmaktır." },
        { tip: "not", metin: "Robert Herjavec'in bir klibi: kendi satış müdürü benzer isimli ikinci bir şirket kurmuş, siparişleri oraya alıp çekleri kendisi bozduruyormuş. Ders: girişimci herkesin doğruyu yapacağını ==varsayamaz==." }
      ]
    },
    {
      baslik: "Kök neden: *incentive structure*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎁", terim: "Incentive structure", tr: "teşvik yapısı", tanim: "Çalışanların davranışını ve kararlarını etkileyen ödül ve ceza sistemi (prim, hedef, terfi, yaptırım).", ornek: "Her yeni hat için 200 TL prim." }
          ] },
        { tip: "adimlar", baslik: "Kafe müdürü ve üç aylık kâr", adimlar: [
            { baslik: "Ödül", metin: "Müdüre yalnızca üç aylık kâra göre prim verirsin." },
            { baslik: "Hamle", metin: "Müdür ucuz çekirdeğe geçer, personeli azaltır." },
            { baslik: "Kısa vade", metin: "Kâr artar." },
            { baslik: "Uzun vade", metin: "Müşteri kaçar." }
          ] },
        { tip: "grafik", baslik: "Üç aylık kâr ödülü: kısa vade iyi, uzun vade kötü (kavramsal)", xlabel: "Zaman", ylabel: "Düzey", xmax: 10, ymax: 10,
          ogeler: [
            { id: "kar", tip: "egri", renk: 1, noktalar: [[0, 3], [2, 4], [4, 6], [6, 7], [8, 5], [10, 3]], gizli: true },
            { id: "mus", tip: "egri", renk: 0, noktalar: [[0, 7], [2, 7], [4, 5], [6, 4], [8, 2], [10, 1]], gizli: true },
            { id: "t1", tip: "yazi", x: 3, y: 7.8, metin: "Kâr kısa vadede artar", gizli: true },
            { id: "t2", tip: "yazi", x: 8.5, y: 2.8, metin: "Müşteri kaçar", gizli: true }
          ],
          durumlar: [
            { metin: "Müdür ucuz çekirdeğe geçer, personeli azaltır: ==kâr yükselir.==", goster: ["kar", "t1"] },
            { metin: "Kalite düşünce ==müşteri kaçar==; uzun vadede kâr da düşer.", goster: ["mus", "t2"] }
          ] },
        { tip: "ikili", sol: { ikon: "⏱️", baslik: "Kısa vadeli ödül", maddeler: ["Üç aylık kâra bağlı prim", "Kaliteyi düşürmeye iter"] },
          sag: { ikon: "🌳", baslik: "Uzun vadeli ödül", maddeler: ["Müşteri memnuniyetini de ölçer", "Uzun vadeli sonuçlara bakar"] },
          oyun: [
            { metin: "Müdüre yalnızca bu çeyreğin kârına göre prim vermek.", cevap: "sol", neden: "Ucuz malzemeye ve baştan savmaya iter." },
            { metin: "Primi müşteri memnuniyeti ve kaliteye de bağlamak.", cevap: "sag", neden: "Uzun vadeyi de ödüllendirir." },
            { metin: "Her yeni hat için sadece adet başına 200 TL vermek.", cevap: "sol", neden: "Müşteriyi kandırma riski doğuruyor." },
            { metin: "Yöneticilere hem kâr hem müşteri bağlılığı hedefi koymak.", cevap: "sag", neden: "Dengeli teşvik." }
          ] },
        { tip: "tuzak", baslik: "Önce sisteme bak", metin: "Çalışanlar kötü davranıyorsa önce sistemin neyi ödüllendirdiğine bak. Sorumluluk yalnızca çalışanda değil, o sistemi kuran sahipte ve yöneticide de olabilir. Neyi ödüllendirirsen onu alırsın.", yanlis: "Etik dışı davranış hep kötü niyetli kişilerden çıkar.", dogru: "Çoğu zaman kötü kurulmuş bir *incentive structure* etik dışı davranışa iter." },
        { tip: "not", metin: "Clifford'ın notu: yalnızca üç aylık kâra göre ödüllendirilen müdürler işi baştan savma yapar, ürün kalitesini düşürür, uzun vadeli sonuçları görmezden gelir. Bunlar illa etik dışı değildir ama ==işletmenin aleyhine== çalışır." }
      ]
    },
    {
      baslik: "*Fraud* ve *financial misrepresentation*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎭", terim: "Fraud", tr: "dolandırıcılık", tanim: "Kişisel ya da finansal kazanç için bilerek aldatmak.", ornek: "Depodan mal çalmak; sahte masraf raporu vermek; şirket kayıtlarıyla oynamak." },
            { ikon: "📉", terim: "Financial misrepresentation", tr: "finansal çarpıtma", tanim: "Finansal bilgileri çarpıtıp şirketi olduğundan daha kârlı ya da daha sağlam göstermek.", ornek: "Theranos: kan testi şirketi, yaklaşık 9 milyar dolar değerleme." }
          ] },
        { tip: "ornek", baslik: "Sahte fiş", durum: "300 liralık yemeğe 900 liralık sahte fiş veriliyor. Şirket ne kadar fazla ödemiş olur?",
          adimlar: ["Gerçek tutar = 300 TL.", "Sahte fiş = 900 TL.", "Fark = 900 − 300 = 600 TL."],
          sonuc: "Şirket 600 TL fazla öder. Bu *fraud*: kazanç için bilerek aldatmak." },
        { tip: "zaman", olaylar: [
            { tarih: "~2014", baslik: "Theranos değerlemesi", metin: "Kan testi girişimi yaklaşık 9 milyar dolar değerlemeye ulaştı." },
            { tarih: "Ocak 2022", baslik: "Mahkûmiyet", metin: "Kurucusu yatırımcıları dolandırmaktan mahkûm oldu." },
            { tarih: "Kasım 2022", baslik: "Ceza", metin: "135 ay (11 yıl 3 ay) hapis cezası aldı." }
          ] },
        { tip: "ikili", sol: { ikon: "🎭", baslik: "*Fraud* (genel şemsiye)", maddeler: ["Kazanç için kasıtlı aldatma", "Mal çalmak, sahte fiş, kayıt tahrifatı"] },
          sag: { ikon: "📉", baslik: "*Financial misrepresentation*", maddeler: ["Finansal bilgiler çarpıtılır", "Yatırımcı ya da kredi veren kandırılır"] },
          oyun: [
            { metin: "Depodan mal çalıp kayıtlarda yokmuş gibi göstermek.", cevap: "sol", neden: "Doğrudan aldatma ve hırsızlık: *fraud*." },
            { metin: "Şirketin bilançosunu olduğundan kârlı gösterip yatırımcıyı ikna etmek.", cevap: "sag", neden: "Finansal bilgiler çarpıtılıyor." },
            { metin: "Sahte masraf raporu hazırlamak.", cevap: "sol", neden: "Kişisel kazanç için kasıtlı aldatma." },
            { metin: "Test sonuçlarını sağlam gösteren sahte belge ile 9 milyar dolarlık değerleme almak.", cevap: "sag", neden: "Şirketi olduğundan sağlam göstermek." }
          ] },
        { tip: "tuzak", baslik: "Kim kandırılıyor?", metin: "*Fraud* genel şemsiyedir. *Financial misrepresentation*'da kandırılan çoğunlukla yatırımcı ya da kredi verendir.", yanlis: "*Financial misrepresentation* müşteriyi yanıltmaktır.", dogru: "Müşteriyi yanıltmak *deceptive marketing*'dir; finansal bilgileri çarpıtmak yatırımcıyı kandırır." }
      ]
    },
    {
      baslik: "*Corruption*: yetkiyi kötüye kullanmak",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏛️", terim: "Corruption", tr: "yolsuzluk", tanim: "Yetkiyi kişisel çıkar için kötüye kullanmak; rüşveti ve çıkar çatışmasını kapsar.", ornek: "Müdür, sözleşmeyi pahalı arkadaşının şirketine verir." },
            { ikon: "🏝️", terim: "Bribery", tr: "rüşvet", tanim: "Bir kararı etkilemek için para, hediye ya da ayrıcalık vermek ya da almak.", ornek: "Tedarikçi, sözleşme karşılığında satın alma müdürüne tatil hediye eder." },
            { ikon: "👬", terim: "Conflict of interest", tr: "çıkar çatışması", tanim: "Karar veren kişinin kişisel çıkarının ya da yakınlığının, işletmenin çıkarıyla çatışması.", ornek: "İşi arkadaşının şirketine vermek." }
          ] },
        { tip: "ornek", baslik: "Arkadaşın şirketi", durum: "Bir müdür, işi 80.000 TL'ye yapacak firma yerine 100.000 TL isteyen arkadaşının şirketini seçiyor. Şirket ne kadar fazla öder?",
          adimlar: ["Ucuz teklif = 80.000 TL.", "Arkadaşın teklifi = 100.000 TL.", "Fark = 100.000 − 80.000 = 20.000 TL.", "Oran = 20.000 ÷ 80.000 = %25 daha pahalı."],
          sonuc: "Şirket 20.000 TL fazla öder (%25). Müdür yetkisini şirketin değil, arkadaşının çıkarı için kullandı: *conflict of interest*." },
        { tip: "grafik", baslik: "İki teklif (bin TL)", xlabel: "Teklif", ylabel: "Bin TL", xmax: 4, ymax: 120,
          yticks: [{ v: 80, label: "80" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "a", tip: "alan", renk: 1, noktalar: [[0.5, 0], [1.5, 0], [1.5, 0], [0.5, 0]] },
            { id: "b", tip: "alan", renk: 0, noktalar: [[2.3, 0], [3.3, 0], [3.3, 0], [2.3, 0]] },
            { id: "at", tip: "yazi", x: 1, y: 88, metin: "Ucuz firma 80", gizli: true },
            { id: "bt", tip: "yazi", x: 2.8, y: 108, metin: "Arkadaşın şirketi 100", gizli: true },
            { id: "f", tip: "ok", from: [1.9, 80], to: [1.9, 100], gizli: true },
            { id: "ft", tip: "yazi", x: 1.6, y: 112, metin: "Fark 20: şirketin cebinden", gizli: true }
          ],
          durumlar: [
            { metin: "Ucuz firma işi ==80.000 TL==’ye yapıyor.", set: { a: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 80], [0.5, 80]] } }, goster: ["at"] },
            { metin: "Arkadaşın şirketi ==100.000 TL== istiyor ve seçiliyor.", set: { b: { noktalar: [[2.3, 0], [3.3, 0], [3.3, 100], [2.3, 100]] } }, goster: ["bt"] },
            { metin: "Aradaki ==20.000 TL== şirketin cebinden çıkar.", goster: ["f", "ft"] }
          ] },
        { tip: "ikili", sol: { ikon: "🏝️", baslik: "*Bribery*", maddeler: ["Bir karşılık el değiştirir", "Para, hediye, ayrıcalık"] },
          sag: { ikon: "👬", baslik: "*Conflict of interest*", maddeler: ["Para alınmasa bile ilişki kararı bozar", "Yakının çıkarı öne geçer"] },
          oyun: [
            { metin: "Tedarikçinin sözleşme için müdüre tatil hediye etmesi.", cevap: "sol", neden: "Karar karşılığı hediye: *bribery*." },
            { metin: "Müdürün, para almadan kardeşinin %15 pahalı şirketini seçmesi.", cevap: "sag", neden: "Karşılık yok ama kişisel yakınlık kararı bozdu." },
            { metin: "Satın alma müdürüne karşılığında para vermek.", cevap: "sol", neden: "Kararı etkilemek için ödeme." },
            { metin: "İşi 100 bin isteyen arkadaşın şirketine vermek.", cevap: "sag", neden: "Arkadaşlık işletmenin çıkarıyla çatışıyor." }
          ] },
        { tip: "tuzak", baslik: "İkisini karıştırma", metin: "*Bribery*'de bir karşılık (para, hediye) el değiştirir. *Conflict of interest*'te para alınmasa bile kişisel ilişki ya da çıkar kararı bozar.", yanlis: "Para almayan müdür etik dışı davranmamıştır.", dogru: "Para olmasa da kişisel yakınlık için yetkiyi kullanmak *conflict of interest*'tir (*corruption*'ın bir türü)." }
      ]
    },
    {
      baslik: "*Deceptive marketing*: müşteriyi kandırmak",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📢", terim: "Deceptive marketing", tr: "yanıltıcı pazarlama", tanim: "Müşteriyi asılsız iddialarla, gizli ücretlerle ya da yanlış ürün bilgisiyle yanıltmak.", ornek: "Yalan reklam (*false advertising*)." },
            { ikon: "🧃", terim: "False claims", tr: "asılsız iddialar", tanim: "Ürün hakkında doğru olmayan şeyler söylemek.", ornek: "Katkılı meyve suyuna “yüzde 100 doğal” yazmak." },
            { ikon: "🧾", terim: "Hidden fees", tr: "gizli ücretler", tanim: "Reklamda ya da etikette görünmeyip ödeme anında ortaya çıkan ek bedeller.", ornek: "999 TL'lik bilete son adımda 400 TL hizmet bedeli." }
          ] },
        { tip: "ornek", baslik: "Gizli ücret hesabı", durum: "Bilet 999 TL diye reklam edildi; son adımda 400 TL hizmet bedeli eklendi. Gerçek fiyat kaç, ne kadar artmış?",
          adimlar: ["Toplam = 999 + 400 = 1.399 TL.", "Artış oranı = 400 ÷ 999 ≈ %40."],
          sonuc: "Müşteri 1.399 TL öder; reklamdaki fiyatın yaklaşık %40 üstü. Gizli ücret *deceptive marketing*'dir." },
        { tip: "grafik", baslik: "Biletin reklamdaki ve gerçek fiyatı (TL)", xlabel: "Fiyat", ylabel: "TL", xmax: 4, ymax: 1600,
          yticks: [{ v: 999, label: "999" }, { v: 1399, label: "1399" }],
          ogeler: [
            { id: "r", tip: "alan", renk: 1, noktalar: [[0.5, 0], [1.5, 0], [1.5, 0], [0.5, 0]] },
            { id: "g", tip: "alan", renk: 0, noktalar: [[2.3, 0], [3.3, 0], [3.3, 0], [2.3, 0]] },
            { id: "rt", tip: "yazi", x: 1, y: 1080, metin: "Reklam 999", gizli: true },
            { id: "gt", tip: "yazi", x: 2.8, y: 1480, metin: "Gerçek 1399", gizli: true }
          ],
          durumlar: [
            { metin: "Reklamda bilet ==999 TL==.", set: { r: { noktalar: [[0.5, 0], [1.5, 0], [1.5, 999], [0.5, 999]] } }, goster: ["rt"] },
            { metin: "Son adımda ==400 TL hizmet bedeli== eklenir: 1.399 TL.", set: { g: { noktalar: [[2.3, 0], [3.3, 0], [3.3, 1399], [2.3, 1399]] } }, goster: ["gt"] }
          ] },
        { tip: "adimlar", baslik: "Fyre Festival (2017)", adimlar: [
            { baslik: "Vaat", metin: "Bahamalar'da lüks villa, gurme yemek, ömürlük bir deneyim." },
            { baslik: "Gerçek", metin: "Gelenler afet çadırları ve peynirli sandviç buldu." },
            { baslik: "Sorun", metin: "Hayal kırıklığı değil: bilerek yanıltmak. Etik dışı ve yasa dışı." }
          ] },
        { tip: "tuzak", baslik: "Hayal kırıklığı yetmez, kasıt gerekir", metin: "Müşterinin beğenmemesi *deceptive marketing* değildir; bilerek yanıltılması gerekir.", yanlis: "Müşteri memnun kalmadıysa pazarlama yanıltıcıdır.", dogru: "*Deceptive marketing* = asılsız iddia, gizli ücret ya da yanlış ürün bilgisiyle bilerek yanıltmak." }
      ]
    },
    {
      baslik: "Nasıl önlersin? En iyi uygulamalar",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📘", terim: "Code of conduct", tr: "davranış kuralları", tanim: "Bir kuruluşta hangi davranışın kabul edilebilir olduğunu anlatan resmi etik kurallar; etik kararların kural kitabı.", ornek: "Çalışan el kitabındaki etik bölümü." },
            { ikon: "🎓", terim: "Ethics training", tr: "etik eğitimi", tanim: "Çalışanlara kuralların ve zor durumlarda nasıl karar verileceğinin öğretilmesi.", ornek: "İşe başlayan herkese etik oturumu." }
          ] },
        { tip: "adimlar", baslik: "Etik kültürün dört ayağı", adimlar: [
            { baslik: "1 · Kural yaz", metin: "*Code of conduct*: kabul edilebilir davranışı anlat." },
            { baslik: "2 · Yaptırım uygula", metin: "Kuralı çiğneyene gerçekten uygula." },
            { baslik: "3 · Eğit", metin: "Çalışanlara *ethics training* ver." },
            { baslik: "4 · Örnek ol", metin: "Patron kasadan fişsiz para alıyorsa çalışan da alır." }
          ] },
        { tip: "harita", merkez: "Etik dışı davranışı önleme", dallar: [
            { baslik: "*Code of conduct*", alt: "Etik kararların kural kitabı" },
            { baslik: "Yaptırım", alt: "İhlale gerçekten ceza" },
            { baslik: "*Ethics training*", alt: "Zor durumda nasıl karar verilir" },
            { baslik: "Lider örnek olur", alt: "*Company culture starts at the top*" }
          ] },
        { tip: "tuzak", baslik: "Kural kitabı tek başına yetmez", metin: "*Code of conduct* tek başına çözüm değil. Üç şey daha lazım: yaptırımın gerçekten uygulanması, *ethics training* ve liderin örnek olması. “Kültür tepeden başlar” sınavda sık çıkan cümle.", yanlis: "*Code of conduct* yazmak etik sorunları bitirir.", dogru: "Yaptırım, eğitim ve örnek lider olmadan kural kitabı kâğıt üstünde kalır." }
      ]
    },
    {
      baslik: "*Ethical dilemma* ve ödünleşim",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Ethical dilemma", tr: "etik ikilem", tanim: "Temel bir değerin başka bir değerle, hedefle ya da iş amacıyla çatıştığı, zor bir ödünleşim gerektiren durum.", ornek: "Kusurlu ürünü geri çağırmak milyonlara mal olur; çağırmamak müşteriyi kızdırır." },
            { ikon: "🔀", terim: "Trade-off", tr: "ödünleşim", tanim: "Bir şeyi elde etmek için başka bir şeyden vazgeçmek.", ornek: "Parayı korumak ile itibarı korumak arasında seçmek." }
          ] },
        { tip: "ikili", sol: { ikon: "🤷", baslik: "*Ethical dilemma*", maddeler: ["İki değer ya da hedef çatışır", "İki seçenek de kolay değil", "Zor bir *trade-off* var"] },
          sag: { ikon: "🚫", baslik: "Açıkça yanlış", maddeler: ["Doğru cevap bellidir", "Rüşvet, kayıt tahrifatı"] },
          oyun: [
            { metin: "Kusurlu ürünü geri çağırmak milyonlara mal olacak, çağırmamak müşteriyi tehlikeye atıyor.", cevap: "sol", neden: "İki değer çatışıyor: *ethical dilemma*." },
            { metin: "Şirket kayıtlarıyla oynayarak kâr yükseltmek.", cevap: "sag", neden: "Açıkça yanlış; ikilem değil." },
            { metin: "Konsolların bozulduğunu bilip parayı mı itibarı mı koruyacağına karar vermek.", cevap: "sol", neden: "Para ile itibar arasında zor seçim." },
            { metin: "Tedarikçiden tatil hediyesi alıp sözleşmeyi ona vermek.", cevap: "sag", neden: "Rüşvet açıkça yanlıştır." }
          ] },
        { tip: "ornek", baslik: "Xbox 360'ın kırmızı ışığı", durum: "Microsoft'un ilk Xbox 360 konsolları kırmızı ışık verip bozuluyordu. Görmezden gelmek mi, onarmak mı?",
          adimlar: ["Görmezden gelmek: parayı korurdu.", "Onarmak: itibarı korurdu.", "Microsoft onarmayı seçti: garantiyi 3 yıla uzattı.", "Bedeli 1 milyar doları aştı."],
          sonuc: "*Trade-off*: para yerine itibar. Şirket onarmayı seçti, bedel 1 milyar dolardan fazla." },
        { tip: "not", metin: "Başka bir ikilem örneği: Apple'ın Eylül 2016'da kulaklık girişini kaldırması (“courage” sözü) ve ardından 159 dolarlık AirPods satması. Clifford: “doğru muydu bilmiyorum, ama bir ethical dilemma'ydı.”" },
        { tip: "tuzak", baslik: "Dilemma = doğru mu yanlış mı?", metin: "Rüşvet almak ya da kayıtlarla oynamak ikilem değil, açıkça yanlıştır.", yanlis: "Her etik sorun bir *ethical dilemma*'dır.", dogru: "*Ethical dilemma*: iki değer ya da hedef çatışır ve zor bir *trade-off* vardır." }
      ]
    },
    {
      baslik: "*Stakeholders*: kim etkilenir?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👥", terim: "Stakeholders", tr: "paydaşlar", tanim: "İşletmenin eylem ve kararlarından etkilenen kişiler ve gruplar.", ornek: "Fırın gece çalışırsa çalışan ve komşular etkilenir." },
            { ikon: "🏢", terim: "Internal stakeholders", tr: "iç paydaşlar", tanim: "İşletmenin içindekiler: sahipler, yöneticiler, çalışanlar.", ornek: "Fırının sahibi, ustası, çırağı." },
            { ikon: "🌐", terim: "External stakeholders", tr: "dış paydaşlar", tanim: "İşletmenin dışındakiler: müşteriler, tedarikçiler, yatırımcılar, devlet kurumları, çevredeki toplum.", ornek: "Komşular gürültüyü duyar." }
          ] },
        { tip: "harita", merkez: "*Stakeholders*", dallar: [
            { baslik: "İç: sahipler", alt: "*Owners*" },
            { baslik: "İç: yöneticiler", alt: "*Managers*" },
            { baslik: "İç: çalışanlar", alt: "*Employees*" },
            { baslik: "Dış: müşteriler", alt: "*Customers*" },
            { baslik: "Dış: tedarikçiler", alt: "*Suppliers*" },
            { baslik: "Dış: yatırımcılar", alt: "*Investors*" },
            { baslik: "Dış: devlet", alt: "*Government agencies*" },
            { baslik: "Dış: toplum", alt: "*Community members*" }
          ] },
        { tip: "ikili", sol: { ikon: "🏢", baslik: "*Internal stakeholders*", maddeler: ["Sahipler", "Yöneticiler", "Çalışanlar"] },
          sag: { ikon: "🌐", baslik: "*External stakeholders*", maddeler: ["Müşteriler, tedarikçiler", "Yatırımcılar, devlet", "Çevredeki toplum"] },
          oyun: [
            { metin: "Fırının vardiyası değişen çalışanı.", cevap: "sol", neden: "İşletmenin içinde: *internal*." },
            { metin: "Fırının gürültüsünü duyan komşular.", cevap: "sag", neden: "Çevredeki toplum: *external*." },
            { metin: "Şirkete para yatıran yatırımcı.", cevap: "sag", neden: "Yatırımcılar dışarıda sayılır." },
            { metin: "Şirketin sahibi.", cevap: "sol", neden: "Sahipler içeride sayılır." },
            { metin: "Malı sağlayan tedarikçi.", cevap: "sag", neden: "İşletmenin dışında." }
          ] },
        { tip: "tuzak", baslik: "Stakeholder ≠ shareholder", metin: "*Stakeholders* etkilenen herkes; hissedarlar bunun yalnızca bir parçasıdır. Dikkat: sahipler içeride, yatırımcılar dışarıda sayılıyor.", yanlis: "*Stakeholders* şirketin hissedarlarıdır.", dogru: "*Stakeholders* kararlardan etkilenen herkestir: çalışan, müşteri, tedarikçi, devlet, toplum." },
        { tip: "not", metin: "Serbest yanıtlı soru taktiği: etik bir karar sorulursa önce etkilenen ==stakeholders==’ı say (kim, nasıl etkileniyor), sonra *trade-off*’u açıkla." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Business ethics*: yanlış olan daha hızlı ve kârlı olsa bile doğruyu yapmak; amaç uzun vadede güven kurmak.",
            "Sorun çoğu zaman kötü bir *incentive structure* ile başlar: neyi ödüllendirirsen onu alırsın.",
            "*Fraud* kazanç için bilerek aldatmaktır (sahte fiş: 900 − 300 = 600 TL fazla ödeme). *Financial misrepresentation* finansal bilgileri çarpıtır (Theranos).",
            "*Corruption*: yetkiyi kötüye kullanmak. *Bribery* karşılık verir; *conflict of interest*’te para olmasa da yakınlık kararı bozar (80.000 yerine 100.000 TL: 20.000 TL fark).",
            "*Deceptive marketing*: *false claims* ve *hidden fees* (999 + 400 = 1.399 TL). Hayal kırıklığı değil, bilerek yanıltmak.",
            "Önlem: *code of conduct*, yaptırımın uygulanması, *ethics training* ve örnek olan lider; kültür tepeden başlar.",
            "*Ethical dilemma*’da iki değer çatışır ve zor bir *trade-off* gerekir (Xbox 360: parayı mı itibarı mı koru?).",
            "*Stakeholders* kararlardan etkilenen herkes: *internal* (sahipler, yöneticiler, çalışanlar) ve *external* (müşteriler, tedarikçiler, yatırımcılar, devlet, toplum).",
            "Güven yıllarca kurulur, saniyeler içinde yıkılır."
          ] }
      ]
    }
  ]
};
