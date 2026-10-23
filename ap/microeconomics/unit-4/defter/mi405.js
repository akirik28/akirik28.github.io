/* Kitpath not defteri · mi405 · 4.5 Oligopol ve Oyun Teorisi
   Kaynak: CED Topic 4.5 (PRD-3.C.1–7). Blok türleri: /ap/_kit/defter.js başı.
   Kapsam dışı (CED): 2'den fazla oyuncu ya da eylem, karma strateji, kapsamlı biçim. Burada yalnız 2 × 2 oyunlar var.
   Kartel grafiği: sinema salonu talebi P = 100 − 0,1Q, MC = 20 TL (grafikte 1 birim = 10 TL ve 100 bilet).
   Rekabet Q 800 / P 20; kartel (tekel) Q 400 / P 60; oligopol noktası yalnız bir örnek (Q 600 / P 40).
   Büfe oyunu (aylık kâr, bin TL; A, B): (Y,Y) 10,10 · (Y,D) 2,14 · (D,Y) 14,2 · (D,D) 5,5 → Nash (D,D).
   Grup projesi: (Ç,Ç) 8,8 · (Ç,K) 3,10 · (K,Ç) 10,3 · (K,K) 4,4; bonus b: 8 + b > 10 ve 3 + b > 4 → b > 2 → en küçük tam sayı 3. */
window.DEFTER = {
  slug: "mi405",
  amac: "Bu konu oligopolü ve oyun teorisini anlatıyor: birkaç büyük firma birbirine bağımlı karar verir. Kartelin neden cazip ama kırılgan olduğunu, ödül matrisinde *dominant strategy* ve *Nash equilibrium* bulmayı, bir oyuncunun stratejisini değiştirmeye yetecek teşviği hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Oligopol: birkaç büyük firma",
      kisa: "Oligopolde birkaç büyük firma, kararları birbirine bağlı biçimde verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏢", terim: "Oligopoly", tr: "oligopol", tanim: "Giriş engelleri yüksek, birkaç firmanın bulunduğu ve firmaların birbirine bağımlı davrandığı verimsiz piyasa yapısı.", ornek: "Cep telefonu operatörleri, havayolları." },
            { ikon: "🔗", terim: "Interdependence", tr: "karşılıklı bağımlılık", tanim: "Bir firmanın kârı, rakiplerinin tepkisine de bağlıdır. Fiyatı kırmadan önce \"rakip ne yapar?\" diye sorar.", ornek: "Bir operatör tarife indirirse diğerleri ne yapacak?" }
          ] },
        { tip: "ikili", sol: { ikon: "🏢", baslik: "*Oligopoly*", maddeler: ["Birkaç büyük firma", "Yüksek giriş engeli", "Karşılıklı bağımlılık"] },
          sag: { ikon: "☕", baslik: "*Monopolistic competition*", maddeler: ["Çok sayıda firma", "Kolay giriş", "Rakiplerin tepkisi ihmal edilebilir"] },
          oyun: [
            { metin: "Ülkede uçuş yapan birkaç havayolu var; yeni firmanın girmesi çok zor.", cevap: "sol", neden: "Birkaç firma, yüksek engel: oligopol." },
            { metin: "Okul çevresinde onlarca kafe var; yeni kafe açmak kolay.", cevap: "sag", neden: "Çok firma, kolay giriş: tekelci rekabet." },
            { metin: "Bir firmanın fiyat kararı rakiplerinin kârını ve kararlarını doğrudan etkiliyor.", cevap: "sol", neden: "Karşılıklı bağımlılık oligopolün belirgin özelliğidir." },
            { metin: "Bir kafe menü fiyatını koyarken diğer kafelerin tepkisini hesaba katmıyor bile.", cevap: "sag", neden: "Çok firma olduğundan tek tek tepkiler ihmal edilir." }
          ] }
      ]
    },
    {
      baslik: "Kartel: anlaşmak neden cazip?",
      kisa: "Firmalar anlaşıp tek tekel gibi davranırsa ortak kâr en yüksek olur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🤝", terim: "Collusion", tr: "gizli anlaşma", tanim: "Firmaların rekabet etmek yerine fiyat ya da miktar konusunda anlaşması.", ornek: "İki büfe menüyü yüksek fiyatla satmayı kararlaştırır." },
            { ikon: "🔒", terim: "Cartel", tr: "kartel", tanim: "Anlaşıp tek bir tekel gibi fiyat ve toplam miktarı belirleyen firmalar grubu. Ortak kâr en yüksek düzeye çıkar.", ornek: "Üreticiler toplam üretimi sınırlayıp fiyatı yükseltir." }
          ] },
        { tip: "grafik", baslik: "Rekabet, kartel ve oligopol sonucu", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 4, label: "400" }, { v: 6, label: "600" }, { v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "dwlC", tip: "alan", renk: 2, noktalar: [[4, 6], [4, 2], [8, 2]], gizli: true },
            { id: "dwlO", tip: "alan", renk: 2, noktalar: [[6, 4], [6, 2], [8, 2]], gizli: true },
            { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D" },
            { id: "MR", tip: "cizgi", renk: 3, from: [0, 10], to: [4.8, 0.4], etiket: "MR", gizli: true },
            { id: "MC", tip: "cizgi", renk: 2, from: [9.2, 2], to: [0.2, 2], etiket: "MC" },
            { id: "PC", tip: "nokta", renk: 1, x: 8, y: 2, etiket: "Rekabet", kilavuz: true },
            { id: "CT", tip: "nokta", renk: 2, x: 4, y: 6, etiket: "Kartel", kilavuz: true, gizli: true },
            { id: "OL", tip: "nokta", renk: 3, x: 6, y: 4, etiket: "Oligopol", kilavuz: true, gizli: true },
            { id: "ok", tip: "ok", renk: 3, from: [4.3, 5.7], to: [5.7, 4.3], gizli: true },
            { id: "sonT", tip: "yazi", x: 6.6, y: 7.6, metin: "rekabete göre P ↑, Q ↓", gizli: true }
          ],
          durumlar: [
            { metin: "Tam rekabet: fiyat MC'ye iner, ==P = MC==. **800 bilet, 20 TL**." },
            { metin: "Kartel: firmalar birlikte tek bir tekel gibi davranır. Toplam ==MR = MC== → **400 bilet, 60 TL**; ortak kâr en yüksek.", goster: ["MR", "CT", "dwlC"] },
            { metin: "Ama her firma, ötekiler fiyatı yüksek tutarken gizlice fiyat kırıp pazar payı kapmak ister. Kartel gevşer: fiyat düşer, miktar artar. Sonuç iki uç arasında bir yerde (örnek nokta: **600 bilet, 40 TL**).", gizle: ["MR", "dwlC"], goster: ["ok", "OL", "dwlO"] },
            { metin: "Hangi noktada kalırsa kalsın: ==P > MC== ve DWL > 0. Fiyat rekabetteki 20 TL'nin üstünde, miktar 800'ün altında.", goster: ["sonT"] }
          ] },
        { tip: "tuzak", metin: "Kartel, firmalar için en iyi görünen ama kendi kendini çürüten bir düzenektir.", yanlis: "Kartel kurulunca firmalar anlaşmaya sonsuza kadar uyar.", dogru: "Her firma gizlice biraz daha fazla satmak ister; bu yüzden kartel kırılgandır. Çoğu ülkede ayrıca yasaktır." }
      ]
    },
    {
      baslik: "Oyun, strateji ve ödül matrisi",
      kisa: "Oyunda herkesin ödülü kendi seçimine ve rakibinin seçimine bağlıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Game", tr: "oyun", tanim: "Birkaç oyuncunun eylem seçtiği ve her ödülün hem kendi hem de ötekilerin seçimine bağlı olduğu durum.", ornek: "İki büfe menü fiyatını aynı anda seçiyor." },
            { ikon: "🧭", terim: "Strategy", tr: "strateji", tanim: "Bir oyunu oynamak için tam eylem planı. Bu konuda her oyuncunun iki seçeneği var.", ornek: "Yüksek fiyat ya da Düşük fiyat." },
            { ikon: "🧮", terim: "Normal form", tr: "ödül matrisi", tanim: "Her strateji kombinasyonunda herkesin ödülünü bir tabloda gösteren model.", ornek: "Satırı A, sütunu B seçer." }
          ] },
        { tip: "tablo", baslik: "İki büfenin fiyat oyunu (aylık kâr, bin TL)", head: ["", "B: Yüksek fiyat", "B: Düşük fiyat"], rows: [
            ["A: Yüksek fiyat", "10 , 10", "2 , 14"],
            ["A: Düşük fiyat", "14 , 2", "5 , 5"]
          ], not: "Her hücrede ilk sayı A'nın, ikinci sayı B'nin ödülü. A satırı, B sütunu seçer. Örnek: A Düşük, B Yüksek seçerse A 14, B 2 kazanır. AP sınavında oyunlar iki oyunculu ve ikişer eylemli matrislerdir." }
      ]
    },
    {
      baslik: "Dominant strateji ve Nash dengesi: adım adım",
      kisa: "Dominant strateji rakip ne yaparsa yapsın en iyisidir; Nash'te kimse sapmak istemez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥇", terim: "Dominant strategy", tr: "baskın strateji", tanim: "Rakibin seçimi ne olursa olsun ödülü her zaman daha yüksek olan eylem.", ornek: "Rakip hangi fiyatı seçerse seçsin, Düşük fiyat A'ya daha çok kazandırıyor." },
            { ikon: "⚖️", terim: "Nash equilibrium", tr: "Nash dengesi", tanim: "Ötekilerin eylemleri verilmişken hiçbir oyuncunun tek başına eylemini değiştirerek ödülünü artıramadığı durum.", ornek: "(Düşük, Düşük) hücresinde iki büfe de yerinde kalmayı tercih eder." }
          ] },
        { tip: "ornek", baslik: "Büfe oyununu çöz", durum: "Okulun önündeki iki büfe (A ve B) menüyü ya Yüksek ya da Düşük fiyatla satacak. Ödüller aylık kâr (bin TL), (A, B) sırasıyla: (Y,Y) = (10, 10); (Y,D) = (2, 14); (D,Y) = (14, 2); (D,D) = (5, 5).",
          adimlar: [
            "B Yüksek seçerse A'nın seçenekleri: Yüksek → 10, Düşük → 14. A için en iyisi Düşük.",
            "B Düşük seçerse A: Yüksek → 2, Düşük → 5. Yine Düşük.",
            "B ne yaparsa yapsın A, Düşük'ten kazanıyor: ==Düşük, A'nın baskın stratejisi==.",
            "Oyun simetrik: B için de rakip ne yaparsa yapsın Düşük daha iyi; Düşük, B'nin de baskın stratejisi.",
            "Sonuç (Düşük, Düşük) = (5, 5): iki taraf da tek başına Yüksek'e geçse ödülü 5'ten 2'ye düşer. Bu ==Nash dengesi==.",
            "(Yüksek, Yüksek) = (10, 10) ikisi için de daha iyiydi, ama orada her biri sapmak ister: kararlı değil."
          ],
          sonuc: "Baskın stratejiler (Düşük, Düşük). Nash dengesi (Düşük, Düşük) = (5, 5); daha iyi olan (10, 10) ulaşılamaz." },
        { tip: "tuzak", baslik: "Nash her zaman en iyi sonuç değildir", metin: "Nash dengesi kararlı bir sonuçtur, iyi bir sonuç olmak zorunda değildir.", yanlis: "Nash dengesi oyuncuların ortaklaşa ulaşabileceği en iyi sonuçtur.", dogru: "Nash dengesinde yalnızca kimse tek başına sapmak istemez. Baskın strateji olmasa da Nash dengesi bulunabilir: her hücrede \"sapmak ister mi?\" diye kontrol et." }
      ]
    },
    {
      baslik: "Mahkûmun çıkmazı: kartel neden çöker?",
      kisa: "Herkes sapmaya yöneldiği için anlaşma çöker, ama fiyatlar yine rekabetten yüksektir.",
      bloklar: [
        { tip: "adimlar", baslik: "Büfeler anlaşıyor", adimlar: [
            { baslik: "Anlaşma: ikisi de Yüksek", metin: "(10, 10): ortak durum en iyisi; kartel gibi." },
            { baslik: "Sapma cazip", metin: "B Yüksek tutarken A fiyatı kırarsa A 10 yerine 14 kazanır; B 2'ye düşer." },
            { baslik: "Rakip de aynısını düşünür", metin: "Anlaşmaya uyan taraf kaybeder (2). Güvenmek yerine sapmak daha güvenli." },
            { baslik: "Sonuç: ikisi de sapar", metin: "(Düşük, Düşük) = (5, 5): ikisi de anlaşmadan önceki 10'dan kötü durumda. Bu yapıya ==mahkûmun çıkmazı== (*prisoner's dilemma*) denir." }
          ] },
        { tip: "not", metin: "Oligopolistler tekel sonucuna ulaşmakta, mahkûmun çıkmazındaki oyuncular gibi zorlanır. Yine de oligopolde (ya da duopolde) fiyatlar genelde tam rekabetten ==yüksek==, miktarlar ==düşüktür==." }
      ]
    },
    {
      baslik: "Piyasa dışı oyun ve teşvik hesabı",
      kisa: "Oyun yalnız piyasalarda değil; ödül değişirse baskın strateji de değişir.",
      bloklar: [
        { tip: "tablo", baslik: "Grup projesi (not puanı, (A, B))", head: ["", "B: Çalış", "B: Kaytar"], rows: [
            ["A: Çalış", "8 , 8", "3 , 10"],
            ["A: Kaytar", "10 , 3", "4 , 4"]
          ], not: "İki arkadaş proje notu için çalışacak ya da kaytaracak. Her iki oyuncuda da Kaytar baskın; Nash dengesi (Kaytar, Kaytar) = (4, 4)." },
        { tip: "ornek", baslik: "Baskın stratejiyi değiştirmeye yetecek bonus", durum: "Öğretmen, çalışana her durumda b puanlık katkı bonusu verirse Çalış baskın strateji olsun. En küçük tam sayı b kaçtır?",
          adimlar: [
            "Bonusla Çalış ödülleri 8 + b ve 3 + b olur; Kaytar ödülleri aynı kalır (10 ve 4).",
            "Rakip Çalış seçerse: 8 + b > 10 olmalı → b > 2.",
            "Rakip Kaytar seçerse: 3 + b > 4 olmalı → b > 1.",
            "İkisi birden sağlanmalı: b > 2. b = 2'de 8 + 2 = 10, eşitlik olur ve baskınlık sağlanmaz. En küçük tam sayı b = 3.",
            "Kontrol (b = 3): Çalış → 11 ve 6; Kaytar → 10 ve 4. Çalış iki durumda da daha iyi; simetriyle B için de. Nash dengesi (Çalış, Çalış) = (11, 11)."
          ],
          sonuc: "En az 3 puanlık bonus (b > 2) baskın stratejiyi Kaytar'dan Çalış'a çevirir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Oligopoly*: giriş engeli yüksek, birkaç firma, karşılıklı bağımlılık; verimsiz bir yapı.",
            "Firmaların kartel kurup tekel gibi davranma (*collusion*) isteği vardır; her firma gizlice sapmak ister.",
            "*Game*: ödül, kendi seçimine ve ötekilerin seçimine bağlıdır. *Strategy* tam eylem planı; ödül matrisi (*normal form*) ödülleri gösterir.",
            "*Dominant strategy*: rakip ne yaparsa yapsın ödülü her zaman yüksek olan eylem.",
            "*Nash equilibrium*: kimse tek başına eylemini değiştirerek ödülünü artıramaz; en iyi ortak sonuç olmak zorunda değil.",
            "Mahkûmun çıkmazı: anlaşma (10, 10) daha iyi ama denge (5, 5); bu yüzden oligopol tekel sonucuna ulaşmakta zorlanır.",
            "Oligopolde fiyatlar genelde tam rekabetten yüksek, miktarlar düşüktür.",
            "Baskın stratejiyi değiştirmek için bonus, her karşılaştırmada ödülü eskisinin ==üstüne çıkaracak== kadar büyük olmalı."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "İki rakip marka reklam yapıp yapmama kararını aynı anda veriyor. Tablodaki ödüller milyon TL kârdır (A, B). Nash dengesi hangisidir?",
      fig: { type: "table", head: ["", "B: Reklam yap", "B: Reklam yapma"], rows: [["A: Reklam yap", "4 , 4", "9 , 2"], ["A: Reklam yapma", "2 , 9", "6 , 6"]] },
      opts: ["(Reklam yapma, Reklam yapma) = (6, 6)", "(Reklam yap, Reklam yap) = (4, 4)", "(Reklam yap, Reklam yapma) = (9, 2)", "Bu oyunda Nash dengesi yoktur."], a: 1,
      why: "A için B reklam yaparsa 4 > 2, yapmazsa 9 > 6: Reklam yap baskın; B için de aynı. Denge (4, 4). (6, 6) ikisi için de daha iyi ama orada her biri sapmak ister, bu yüzden denge değildir." },
    { q: "Tablodaki oyun için hangisi doğrudur?",
      fig: { type: "table", head: ["", "B: Sol", "B: Sağ"], rows: [["A: Yukarı", "5 , 2", "4 , 3"], ["A: Aşağı", "3 , 6", "1 , 2"]] },
      opts: ["Yalnız A'nın baskın stratejisi vardır (Yukarı); Nash dengesi (Yukarı, Sağ)'dır.", "Her iki oyuncunun da baskın stratejisi vardır; Nash dengesi (Aşağı, Sol)'dur.", "Yalnız B'nin baskın stratejisi vardır; Nash dengesi (Yukarı, Sol)'dur.", "Hiçbir oyuncunun baskın stratejisi yoktur; Nash dengesi yoktur."], a: 0,
      why: "A için Yukarı her iki durumda da yüksek (5 > 3 ve 4 > 1). B için Sol/Sağ A'nın seçimine göre değişir (Yukarı'ya karşı Sağ, Aşağı'ya karşı Sol), baskın strateji yok. A Yukarı oynar, B ona karşı Sağ seçer: (4, 3). Baskın strateji olmayan oyuncu da Nash dengesinin parçası olabilir." },
    { q: "Apartmanda iki komşu ortak merdiveni temizleyip temizlememeye karar veriyor (T: temizle, N: temizleme). Ödüller memnuniyet puanıdır (A, B). Yönetim, temizleyene her durumda b puan bonus verecek. \"Temizle\" (T) stratejisini baskın strateji yapacak en küçük tam sayı b kaçtır?",
      fig: { type: "table", head: ["", "B: Temizle", "B: Temizleme"], rows: [["A: Temizle", "6 , 6", "2 , 8"], ["A: Temizleme", "8 , 2", "3 , 3"]] },
      opts: ["1", "2", "3", "4"], a: 2,
      why: "Temizlemenin baskın olması için 6 + b > 8 (b > 2) ve 2 + b > 3 (b > 1) birlikte sağlanmalı: b > 2. b = 1'de 7 < 8 ve 3 = 3; b = 2'de 8 = 8, eşitlik baskınlık sağlamaz; b = 3'te 9 > 8 ve 5 > 3. 4 de çalışır ama en küçük değildir." },
    { q: "Bir oligopolde kartelin uzun süre ayakta kalmasını zorlaştıran temel neden hangisidir?",
      opts: ["Kartel üyeleri tam rekabetteki gibi P = MC'de üretir.", "Kartelde toplam MR = MC kuralı geçerli değildir.", "Talep eğrisi yataydır.", "Her firma gizlice biraz daha fazla satarak kazanç sağlayabilir; bu, mahkûmun çıkmazına benzer."], a: 3,
      why: "Ötekiler anlaşmaya uyarken sapan firma ödülünü artırır; herkes böyle düşününce anlaşma çöker. Kartel MR = MC'ye göre davranır ve talep aşağı eğimlidir; P = MC rekabetin sonucudur." },
    { q: "Bir ilçede birkaç büyük süpermarket zinciri var; biri fiyat indirince diğerleri de tepki veriyor ve yeni zincirin girmesi çok zor. Bu piyasada fiyat ve miktar, tam rekabetle karşılaştırıldığında genelde nasıldır?",
      opts: ["Fiyat daha düşük, miktar daha yüksek", "Fiyat daha yüksek, miktar daha düşük", "Fiyat ve miktar aynı", "Fiyat daha yüksek, miktar daha yüksek"], a: 1,
      why: "Bu bir oligopoldür. Anlaşma çökse bile fiyatlar genelde tam rekabetteki P = MC'nin üstünde, miktar altında kalır. \"Fiyat da miktar da yüksek\" talep eğrisiyle çelişir: aşağı eğimli talepte fiyat yükselirse miktar düşer." }
  ]
};
