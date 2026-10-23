/* Kitpath not defteri · bf502 · 5.2 Kişisel Riskleri Yönetmek
   Kaynak: College Board CED, Topic 5.2 (5.2.A–5.2.D). Blok türleri: /ap/_kit/defter.js başı.
   Para birimi TL; sayılar anlatım için varsayımsaldır. */
window.DEFTER = {
  slug: "bf502",
  amac: "Bu konu kişisel risklerin sigortayla nasıl yönetildiğini anlatıyor: hangi risklerin sigortalanabildiğini, sigorta türlerini, ne kadar sigorta gerektiğini ve finansal dolandırıcılıktan nasıl korunulacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Sigortalanabilir riskler",
      kisa: "Sigortalanabilir risk tesadüfe bağlı, ölçülebilir ve istatistiksel olarak öngörülebilirdir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Insurable risk", tr: "sigortalanabilir risk", tanim: "Kaza ya da hava olayı gibi tesadüfe bağlı bir zarar ihtimali. Sigortalanabilmesi için ayrıca ölçülebilir ve istatistiksel olarak öngörülebilir olmalıdır: sigorta şirketi zararın maliyetini ve ihtimalini tahmin edebilmelidir.", ornek: "Fırtınada çatının uçması." },
            { ikon: "🩺", terim: "Personal risk", tr: "kişisel risk", tanim: "Sigortalanan kişinin sağlığını ve esenliğini ilgilendiren risk.", ornek: "Kazada yaralanmak ya da hastalıktan çalışamamak." },
            { ikon: "🏠", terim: "Property risk", tr: "mülk riski", tanim: "Sigortalının kendi malındaki zarar riski.", ornek: "Evin su baskınında zarar görmesi, aracın kazada hasarlanması." },
            { ikon: "⚖️", terim: "Liability risk", tr: "sorumluluk riski", tanim: "Başkasının malına ya da sağlığına verilen zararın bedelini ödeme riski.", ornek: "Dikkatsiz sürüşle park halindeki araca çarpmak ya da yayayı yaralamak." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sigortalanabilir", maddeler: ["Tesadüfe bağlı", "Ölçülebilir", "İstatistiksel olarak öngörülebilir"] },
          sag: { ikon: "❌", baslik: "Sigortalanamaz", maddeler: ["Kasıtlı", "Tutarı ölçülemez", "İhtimali tahmin edilemez"] },
          oyun: [
            { metin: "Telefonun yanlışlıkla düşüp ekranının kırılması.", cevap: "sol", neden: "Tesadüfe bağlı ve maliyeti kolay tahmin edilir." },
            { metin: "Sahibinin bilerek aracını yakması.", cevap: "sag", neden: "Tesadüf değil, kasıt: sigortalanamaz (hatta sigorta dolandırıcılığıdır)." },
            { metin: "Selde bir evin zarar görmesi.", cevap: "sol", neden: "Hava olayı: istatistikle tahmin edilebilir." },
            { metin: "Bir öğrencinin sınavdan düşük not alması.", cevap: "sag", neden: "Çabaya ve tercihe bağlı; parasal zararı hesaplanamaz." },
            { metin: "Sürücünün kaza sonrası karşı araca verdiği zararı ödemesi.", cevap: "sol", neden: "Sorumluluk riski: sigortalanabilir." }
          ] },
        { tip: "ornek", baslik: "Sigorta şirketi neden zarar etmez? (risk havuzu)", durum: "Bir şirket, 1.000 öğrenciye yıllık 500 TL'ye telefon sigortası satıyor. Geçmiş verilere göre yılda 50 telefon kırılıyor ve ortalama onarım 8.000 TL.",
          adimlar: ["Toplanan prim = 1.000 × 500 = 500.000 TL.", "Beklenen hasar = 50 × 8.000 = 400.000 TL.", "Kalan = 500.000 − 400.000 = 100.000 TL; şirketin giderlerini ve kârını karşılar."],
          sonuc: "Hasarlar ==istatistikle öngörülebildiği== için küçük primlerle büyük zararlar karşılanır: ==500.000 TL prim, 400.000 TL hasar==." }
      ]
    },
    {
      baslik: "Sigorta nasıl çalışır? Prim, teminat ve muafiyet",
      kisa: "Prim öderiz; zarar olursa talepte bulunuruz; zararın bir kısmını muafiyet olarak biz taşırız.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📜", terim: "Policy", tr: "poliçe", tanim: "Sigorta sözleşmesi: neyin, ne kadar teminatla korunduğunu yazar.", ornek: "Trafik ya da konut sigortası poliçesi." },
            { ikon: "💳", terim: "Premium", tr: "prim", tanim: "Sigorta alanın yıllık, 6 aylık ya da aylık ödediği bedel.", ornek: "Yıllık 6.000 TL araç sigortası primi." },
            { ikon: "☂️", terim: "Coverage", tr: "teminat", tanim: "Seçilen, poliçenin koruduğu zarar tutarı ve kapsamı.", ornek: "En çok 500.000 TL'lik hasarı karşılar." },
            { ikon: "📨", terim: "Claim", tr: "hasar talebi", tanim: "Zarar olduğunda sigorta şirketine yapılan geri ödeme başvurusu.", ornek: "Kaza sonrası onarım faturasını sigortaya bildirmek." },
            { ikon: "🧾", terim: "Deductible", tr: "muafiyet (kendi payı)", tanim: "Zararın sigorta ödemesinden önce senin cebinden çıkan kısmı (*out-of-pocket*). Muafiyet yüksekse prim genellikle düşer.", ornek: "10.000 TL muafiyette 4.000 TL'lik hasarı sen ödersin." }
          ] },
        { tip: "grafik", baslik: "İki araç poliçesi: toplam maliyet = prim + kendi payın (bin TL)", xlabel: "Yıl içindeki hasarın tutarı (bin TL)", ylabel: "Yılın toplam maliyeti (bin TL)", xmax: 14, ymax: 14, xticks: [{ v: 2, label: "2" }, { v: 5, label: "5" }, { v: 10, label: "10" }, { v: 14, label: "14" }], yticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 13, label: "13" }],
          ogeler: [
            { id: "a1", tip: "cizgi", from: [0, 6], to: [2, 8], renk: 0, gizli: true },
            { id: "a2", tip: "cizgi", from: [2, 8], to: [14, 8], renk: 0, gizli: true },
            { id: "ta", tip: "yazi", x: 12, y: 8.9, metin: "Poliçe A", gizli: true },
            { id: "b1", tip: "cizgi", from: [0, 3], to: [10, 13], renk: 1, gizli: true },
            { id: "b2", tip: "cizgi", from: [10, 13], to: [14, 13], renk: 1, gizli: true },
            { id: "tb", tip: "yazi", x: 12, y: 11.8, metin: "Poliçe B", gizli: true },
            { id: "eq", tip: "nokta", x: 5, y: 8, etiket: "Eşitlik", kilavuz: true, gizli: true },
            { id: "lo", tip: "yazi", x: 3.4, y: 1.4, metin: "Küçük hasar: B ucuz", gizli: true },
            { id: "hi", tip: "yazi", x: 10.5, y: 5, metin: "Büyük hasar: A ucuz", gizli: true }
          ],
          durumlar: [
            { metin: "==Poliçe A==: prim 6.000 TL, muafiyet 2.000 TL. Hasar olmasa bile 6 ödenir; hasar ne kadar büyük olsa da toplam en çok ==6 + 2 = 8== bin TL.", goster: ["a1", "a2", "ta"] },
            { metin: "==Poliçe B==: prim 3.000 TL, muafiyet 10.000 TL. Hasar yoksa yalnızca 3 ödenir; ama hasar büyürse toplam en çok ==3 + 10 = 13== bin TL.", goster: ["b1", "b2", "tb"] },
            { metin: "İki poliçe ==5 bin TL== hasarda eşitlenir: A = 6 + 2 = 8, B = 3 + 5 = 8.", goster: ["eq"] },
            { metin: "Hasar 5 bin TL'den küçükse düşük primli B, büyükse düşük muafiyetli A daha ucuz. Seçim, hasar ihtimaline ve ==risk toleransına== bağlı.", goster: ["lo", "hi"] }
          ] },
        { tip: "tuzak", baslik: "Düşük prim her zaman ucuz demek değildir", metin: "Sigortanın gerçek maliyeti prim ile kendi payının toplamıdır.", yanlis: "Primi en düşük poliçe her zaman en ucuz sigortadır.", dogru: "Prim düşükse muafiyet genellikle yüksektir; hasar olursa ==kendi payın== büyür. Zarar ihtimalin yüksekse düşük muafiyetli, düşükse düşük primli poliçe daha ucuza gelebilir." }
      ]
    },
    {
      baslik: "Sigorta türleri",
      kisa: "Sağlık, araç, konut, kiracı ve hayat sigortası farklı zararlara karşı korur.",
      bloklar: [
        { tip: "tablo", baslik: "Altı koruma aracı", head: ["Tür", "Neyi korur?", "Türkiye'de"], rows: [
            ["*Health insurance* (sağlık)", "Tıbbi açıdan gerekli bakımın bedelini, bazen koruyucu bakımı geri öder. Primi işveren kısmen ya da tamamen ödeyebilir", "SGK genel sağlık sigortası; özel sağlık sigortası tamamlayıcı"],
            ["*Auto insurance* (araç)", "Aracın hasarını ve başkasına verilen zararın hukuki sorumluluğunu (*liability*)", "Zorunlu trafik sigortası, kasko"],
            ["*Homeowner's insurance* (ev sahibi)", "Evin ve eşyanın zararını, verilen zararın sorumluluğunu", "Konut sigortası; DASK (zorunlu deprem sigortası)"],
            ["*Renter's insurance* (kiracı)", "Kiracının eşyasının zararını ve sorumluluğunu", "Ev eşyası sigortası"],
            ["*Life insurance* (hayat)", "Ölümde belirlenen lehtarlara (*beneficiary*) para öder: gelir kaybını telafi, cenaze masrafı, bakmakla yükümlü olunanların gelecek ihtiyacı", "Hayat sigortası"],
            ["*Extended warranty* (uzatılmış garanti)", "Araba ya da beyaz eşya gibi pahalı ürünlerin arızasına karşı bir tür sigorta", "Uzatılmış garanti ve servis sözleşmeleri"]
          ] },
        { tip: "ikili", sol: { ikon: "🧍", baslik: "Kendi malın ya da sağlığın", maddeler: ["Evinin eşyaları", "Aracının onarımı", "Kendi tedavi giderlerin"] },
          sag: { ikon: "🤝", baslik: "Başkasına karşı sorumluluk (*liability*)", maddeler: ["Karşı araca verilen zarar", "Evde misafirin yaralanması"] },
          oyun: [
            { metin: "Evde su borusu patladı, parke ve koltuklar zarar gördü.", cevap: "sol", neden: "Kendi malındaki zarar: mülk riski." },
            { metin: "Direksiyondayken karşıdaki yayaya çarptın; yayanın tedavi masrafı sana yansıyor.", cevap: "sag", neden: "Başkasına verilen zarar: sorumluluk riski." },
            { metin: "Kendi ameliyat masrafın için sağlık sigortasına başvurdun.", cevap: "sol", neden: "Kendi sağlığın: kişisel risk." },
            { metin: "Evine gelen komşun merdivende düşüp yaralandı; tedavisi için sen sorumlu tutuluyorsun.", cevap: "sag", neden: "Başkasının sağlığı: sorumluluk riski." }
          ] },
        { tip: "tuzak", baslik: "Ev sahibinin sigortası kiracıyı korumaz", metin: "Bina sigortası ile eşya ve sorumluluk sigortası farklıdır.", yanlis: "Ev sahibinin konut sigortası, kiracının eşyasını ve sorumluluğunu da kapsar.", dogru: "Ev sahibi binayı sigortalar; kiracının eşyası ve verdiği zararın sorumluluğu için ==*renter's insurance*== gerekir." }
      ]
    },
    {
      baslik: "Ne kadar sigorta gerekir?",
      kisa: "Gereken sigorta yasal zorunluluğa, risk toleransına ve bakmakla yükümlü olduğun kişilere bağlıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Sigorta ihtiyacını belirleyen etkenler", head: ["Etken", "Nasıl etkiler?", "Örnek"], rows: [
            ["Yasal zorunluluk", "Bazı sigortalar yasayla zorunludur; eyaletten eyalete ve ülkeden ülkeye değişir", "ABD'de çoğu eyalette araç sorumluluk sigortası; konut kredisi veren banka mülk sigortası ister. Türkiye'de zorunlu trafik sigortası ve DASK"],
            ["Risk toleransı", "Ne kadar riski kendin taşıyacağına karar verirsin", "Düşük tolerans: geniş teminat, yüksek prim. Yüksek tolerans: dar teminat ya da yüksek muafiyet"],
            ["Bakmakla yükümlü olunanlar", "Çocuk ve eş sayısı arttıkça ihtiyaç artar", "Aile sağlık sigortası, birden çok araç, daha yüksek hayat sigortası"],
            ["Riskli davranış", "Davranışını düzeltirsen prim düşebilir", "Temiz sürüş kaydı (araç), sigara içmemek (hayat)"]
          ] },
        { tip: "ikili", sol: { ikon: "🧸", baslik: "Düşük risk toleransı", maddeler: ["Geniş teminat", "Daha yüksek prim", "Düşük muafiyet", "Beklenmedik masraftan kaçınır"] },
          sag: { ikon: "🎲", baslik: "Yüksek risk toleransı", maddeler: ["Daha dar teminat", "Daha düşük prim", "Yüksek muafiyet", "Acil durumda daha çok cepten ödemeyi göze alır"] },
          oyun: [
            { metin: "Ani hasarda yüksek masraftan korkan biri, en geniş teminatlı poliçeyi seçiyor.", cevap: "sol", neden: "Riskten kaçınma: geniş teminat." },
            { metin: "Tasarrufu yüksek bir genç, muafiyeti yüksek ama primi düşük poliçeyi alıyor.", cevap: "sag", neden: "Riski kendisi taşıyor: yüksek tolerans." },
            { metin: "Bir ebeveyn her ihtimale karşı düşük muafiyetli, yüksek primli sağlık sigortası alıyor.", cevap: "sol", neden: "Düşük tolerans: muafiyeti küçük tutmak." },
            { metin: "Bir kişi “nasılsa kaza yapmam” diyerek en ucuz, en az teminatlı poliçeyi seçiyor.", cevap: "sag", neden: "Riski üstlenmeyi göze alıyor." }
          ] },
        { tip: "tuzak", baslik: "En çok sigorta en iyi sigorta değildir", metin: "Koruma arttıkça prim de artar.", yanlis: "Her riske en geniş teminatı almak her zaman en akıllı karardır.", dogru: "Yasal olarak zorunlu sigortaları almak şarttır; geri kalanında ==ne kadar riski kendin taşıyacağına== risk toleransın, bütçen ve bakmakla yükümlü olduğun kişilere göre karar verirsin." }
      ]
    },
    {
      baslik: "Sigorta ve finansal dolandırıcılık",
      kisa: "Karşılaştır, acele etme, bilgini paylaşma ve gerekirse yardım iste.",
      bloklar: [
        { tip: "harita", merkez: "Dolandırıcılık ve yağmacı borç", dallar: [
            { baslik: "Sigorta dolandırıcılığı", alt: "*insurance fraud*: sigortalının yanlış beyanı ya da sahte hasar talebi; sigorta satıcısının poliçeyi yanlış anlatması da dahil. Bir suçtur." },
            { baslik: "Yağmacı borç verme", alt: "*predatory lending*: aldatma ve agresif satış taktikleriyle zararlı borç satmak" },
            { baslik: "Oltalama", alt: "*phishing*: sahte mesaj ya da site ile bilgini çalmak" },
            { baslik: "Kimlik hırsızlığı", alt: "*identity theft*: kimlik bilgilerinle başkasının borç alması" },
            { baslik: "Çevrim içi dolandırıcılık", alt: "*online scams*: sahte ilan, sahte yatırım ve ödül vaadi" }
          ] },
        { tip: "tablo", baslik: "Korunma yolları", head: ["Tehdit", "Ne yaparsın?"], rows: [
            ["Yağmacı borç", "Farklı kaynaklardan kredi şartlarını karşılaştır; hızlı karar için baskıya diren; imzadan önce kâr amacı gütmeyen kredi danışmanından görüş al"],
            ["Finansal dolandırıcılık", "Finansal teklifin güvenilirliğini sorgula; internette ya da telefonda kişisel ve finansal bilgi vermek için yapılan baskıya diren; kredi dosyanı dondur (*credit freeze*); mağdur olursan hukuki yardım iste"]
          ] },
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "Korunan davranış", maddeler: ["Karşılaştırmak", "Sormak ve araştırmak", "Bilgi paylaşmamak"] },
          sag: { ikon: "🪤", baslik: "Tuzağa düşüren davranış", maddeler: ["Acele imzalamak", "Linke tıklamak", "Bilgi vermek"] },
          oyun: [
            { metin: "Kredi teklifini üç bankadan alıp koşulları karşılaştırmak.", cevap: "sol", neden: "Yağmacı borçtan korunmanın ilk yolu." },
            { metin: "“Teklif yalnızca bugün geçerli, hemen imzala” baskısıyla sözleşmeyi imzalamak.", cevap: "sag", neden: "Acele ettirme, yağmacı satışın klasik taktiğidir." },
            { metin: "Bankadan gelmiş gibi duran SMS'teki linke girip kart bilgilerini yazmak.", cevap: "sag", neden: "Oltalama: bilgi çalma yolu." },
            { metin: "İmzadan önce kâr amacı gütmeyen bir kredi danışmanına sormak.", cevap: "sol", neden: "Bağımsız görüş almak korunma yoludur." },
            { metin: "Telefonda arayan “yetkiliye” kimlik ve kart bilgisi vermemek.", cevap: "sol", neden: "Bilgi vermeye yönelik baskıya direnmek korunmadır." }
          ] },
        { tip: "tuzak", baslik: "Sigorta dolandırıcılığı iki yönlüdür", metin: "Hem alan hem satan taraf dolandırıcılık yapabilir.", yanlis: "Sigorta dolandırıcılığı yalnızca müşterinin sahte hasar bildirmesidir.", dogru: "Müşterinin yanlış beyanı ve sahte hasar talebi ==dolandırıcılıktır==; sigorta satıcısının poliçeyi ve haklarını yanlış anlatması da ==dolandırıcılıktır==. İkisi de suçtur." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Sigortalanabilir risk: tesadüfe bağlı, ölçülebilir ve istatistiksel olarak öngörülebilir. Kasıtlı zarar sigortalanamaz.",
            "Üç tür sigortalanabilir risk: kişisel (sağlık ve esenlik), mülk (kendi malın) ve sorumluluk (başkasına verilen zarar).",
            "Sigorta: prim öde, teminat seç, zararda hasar talebinde (*claim*) bulun. Muafiyet (*deductible*) zararın senin ödediğin kısmıdır.",
            "Toplam maliyet = prim + kendi payın. Düşük prim çoğu zaman yüksek muafiyet demektir; küçük hasarda düşük primli, büyük hasarda düşük muafiyetli poliçe ucuzdur.",
            "Türler: sağlık, araç, ev sahibi, kiracı, hayat ve uzatılmış garanti. Hayat sigortası lehtarlara ödeme yapar.",
            "Gereken sigorta; yasal zorunluluğa, risk toleransına ve bakmakla yükümlü olunanlara bağlıdır. Düşük tolerans geniş teminat ve yüksek prim, yüksek tolerans dar teminat ve yüksek muafiyet getirir.",
            "Riskli davranışı azaltmak (temiz sürüş, sigara içmemek) primi düşürebilir.",
            "Sigorta dolandırıcılığı suçtur: müşterinin sahte beyanı ve satıcının poliçeyi yanlış anlatması dahil.",
            "Yağmacı borç ve dolandırıcılıktan korunmak: karşılaştır, baskıya direnme, bilgi verme, kredi dosyanı dondur, danışmanlık ve hukuki yardım al."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi sigortalanabilir bir risk örneğidir?",
      opts: ["Bir kişinin bilerek aracını yakması", "Fırtınada çatının uçması", "Bir öğrencinin sınavdan düşük not alması", "İki arkadaşın küsmesi"],
      a: 1,
      why: "Sigortalanabilir risk tesadüfe bağlı, ölçülebilir ve istatistiksel olarak öngörülebilir olmalıdır; fırtına hasarı bunu karşılar. Kasıtlı yakma tesadüf değildir; en çekici yanlış şık odur, çünkü araç zararı normalde sigortalanır. Not ve arkadaşlık ise ölçülebilir parasal zarar değildir." },
    { q: "Tabloda iki araç poliçesi veriliyor. Bu yıl 3.000 TL'lik bir hasar olursa, prim ve kendi payı toplamı olarak hangi poliçe daha ucuza gelir?",
      fig: { type: "table", caption: "Poliçeler", head: ["Poliçe", "Yıllık prim", "Muafiyet"], rows: [["A", "6.000 TL", "2.000 TL"], ["B", "3.000 TL", "10.000 TL"]] },
      opts: ["A, 2.000 TL daha ucuz", "A, 5.000 TL daha ucuz", "B, 2.000 TL daha ucuz", "İkisi aynıdır"],
      a: 2,
      why: "A: 6.000 + 2.000 = 8.000 TL (hasarın 2.000 TL'si kendi payı). B: 3.000 + 3.000 = 6.000 TL (3.000 TL'lik hasar muafiyetin altında olduğu için hepsi sana ait). B, 2.000 TL daha ucuz. Hasar 5.000 TL'yi aşarsa A ucuzlar." },
    { q: "Aysel 28 yaşında, bekâr ve tasarrufu yüksek. Mehmet 40 yaşında, iki çocuğu var ve ailenin tek geliri onun. Hangi eşleşme CED'e göre en uygundur?",
      opts: ["Aysel yüksek muafiyetli düşük primli poliçeyi, Mehmet daha yüksek hayat ve aile sağlık sigortasını seçebilir.", "İkisi de aynı teminatı seçmelidir.", "Aysel en geniş teminatı, Mehmet en dar teminatı seçmelidir.", "Mehmet hayat sigortasına ihtiyaç duymaz."],
      a: 0,
      why: "Risk toleransı yüksek ve bakmakla yükümlü kimsesi olmayan Aysel, yüksek muafiyetli ve düşük primli poliçeyi göze alabilir. Bakmakla yükümlü olduğu iki çocuğu olan Mehmet için daha fazla hayat sigortası ve aile sağlık sigortası gerekir. Diğer şıklar bu iki faktörü yok sayar." },
    { q: "Bir kredi şirketi “Teklif yalnızca bugün geçerli, hemen imzalarsanız faiz oranını sonra açıklarız” diyor. Yağmacı borçtan korunmak için en uygun davranış hangisidir?",
      opts: ["Hemen imzalamak, çünkü fırsat kaçabilir", "Şirketin söylediklerine güvenmek", "Kredi dosyasını dondurmak ve bir daha borçlanmamak", "Başka kaynaklardan şartları karşılaştırmak, baskıya direnmek ve kâr amacı gütmeyen kredi danışmanına sormak"],
      a: 3,
      why: "Korunma yolları: farklı kaynaklardan şartları karşılaştırmak, hızlı karar için baskıya direnmek ve imzadan önce kâr amacı gütmeyen bir kredi danışmanından görüş almak. Kredi dosyasını dondurmak kimlik hırsızlığına karşı bir önlemdir ve bu durumda tek başına çözüm değildir." },
    { q: "Bir sigorta acentesi, poliçenin kapsamadığı bir hasarı kapsadığını söyleyerek müşteriye poliçe satıyor. Bu davranış nedir?",
      opts: ["Yasal pazarlama taktiği", "Sigorta dolandırıcılığı: satıcının poliçeyi yanlış tanıtması da dolandırıcılıktır", "Müşterinin sorumluluğu, çünkü okumamıştır", "Hasar talebi (*claim*)"],
      a: 1,
      why: "CED'e göre poliçeleri ve hakları yanlış anlatan satıcı da sigorta dolandırıcılığı yapar; bu bir suçtur. En çekici yanlış şık C: müşterinin dikkatli olması iyidir ama yanlış beyan yapan taraf satıcıdır." }
  ]
};
