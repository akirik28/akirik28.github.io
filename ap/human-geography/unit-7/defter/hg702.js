/* Kitpath not defteri · hg702 · Ekonomik Sektörler ve Örüntüler
   Kaynak: AP HuG CED Topic 7.2 (SPS-7.B.1–B.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg702",
  amac: "Bu konu ekonominin beş sektörünü ve bunların ülkeden ülkeye nasıl değiştiğini anlatıyor. Ayrıca bir fabrikanın nereye kurulacağını açıklayan Weber'in en düşük maliyet kuramını, kırılma noktasını ve konteynerin etkisini öğreneceksin.",
  bolumler: [
    {
      baslik: "Beş ekonomik sektör",
      kisa: "Primary'den quinary'ye doğru iş, hammaddeden karara doğru ilerler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌾", terim: "Primary sector", tr: "birincil sektör", tanim: "Doğadan doğrudan hammadde çıkarmak: tarım, madencilik, balıkçılık, ormancılık.", ornek: "Çukurova'da pamuk toplayan çiftçi." },
            { ikon: "🏭", terim: "Secondary sector", tr: "ikincil sektör", tanim: "Hammaddeyi işleyip mamul hale getirmek: imalat, işleme, inşaat.", ornek: "Pamuğu kumaşa, kumaşı tişörte çeviren fabrika." },
            { ikon: "🛒", terim: "Tertiary sector", tr: "üçüncül sektör", tanim: "Hizmetler: satış, taşıma, bankacılık, eğitim, sağlık.", ornek: "Kantinci, kargo şoförü, öğretmen." },
            { ikon: "💻", terim: "Quaternary sector", tr: "dördüncül sektör", tanim: "Bilgi ve veriyle çalışan işler: araştırma, bilişim, danışmanlık, finansal analiz.", ornek: "Yazılımcı, veri analisti." },
            { ikon: "🧠", terim: "Quinary sector", tr: "beşinci sektör", tanim: "En üst düzeyde karar verenler: üst yöneticiler, üst düzey hükümet yetkilileri ve bilim insanları.", ornek: "Bir holdingin yönetim kurulu." }
          ] },
        { tip: "ornek", baslik: "Bir simit, beş sektör", durum: "Okul kantinindeki simit hangi sektör zincirinden geçiyor?",
          adimlar: ["Buğdayı yetiştiren çiftçi: **primary**.", "Unu simide çeviren fırın: **secondary**.", "Simidi öğrenciye satan kantinci: **tertiary**.", "Buğday çeşidini geliştiren araştırmacı: **quaternary**.", "Tarım politikasına karar veren üst düzey yetkili: **quinary**."],
          sonuc: "Aynı ürün, beş ayrı sektörün işinden doğar. Sınavda önce **iş ne yapıyor?** sorusuna bak: çıkarıyor mu, işliyor mu, hizmet mi, bilgi mi, karar mı?" }
      ]
    },
    {
      baslik: "Gelişme arttıkça sektörler kayar",
      kisa: "Ülke geliştikçe istihdam primary'den secondary'ye, sonra tertiary ve ötesine kayar.",
      bloklar: [
        { tip: "grafik", baslik: "Kalkınma ve istihdam payı (şematik)", xlabel: "Kalkınma düzeyi", ylabel: "İstihdam payı", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "Düşük" }, { v: 9, label: "Yüksek" }],
          ogeler: [
            { id: "p", tip: "egri", renk: 0, etiket: "Primary", noktalar: [[0.5, 8.5], [3, 6.2], [5, 3.2], [7, 1.4], [9.5, 0.5]] },
            { id: "s", tip: "egri", renk: 1, etiket: "Secondary", noktalar: [[0.5, 1], [3, 2.6], [5, 4.2], [7, 3.4], [9.5, 2.2]], gizli: true },
            { id: "t", tip: "egri", renk: 2, etiket: "Tertiary+", noktalar: [[0.5, 0.5], [3, 1.2], [5, 2.6], [7, 5.2], [9.5, 7.3]], gizli: true }
          ],
          durumlar: [
            { metin: "Düşük gelirli ülkede işgücü çoğunlukla ==*primary*==: tarım ve madencilik. Kalkındıkça payı düşer." },
            { metin: "Sanayileşme başlayınca ==*secondary*== yükselir; orta gelirli ülkede en yüksek payına ulaşır, sonra yavaşça düşer.", goster: ["s"] },
            { metin: "Zengin ülkede işgücü büyük ölçüde ==*tertiary*== ve bilgi sektörlerindedir (*quaternary*, *quinary* dahil).", goster: ["t"] }
          ] },
        { tip: "sekil", baslik: "Üç varsayımsal ülkede sektörlere göre istihdam (%)", fig: { type: "bar", cats: ["A (düşük gelirli)", "B (orta gelirli)", "C (yüksek gelirli)"], series: [{ name: "Primary", values: [70, 30, 3] }, { name: "Secondary", values: [10, 30, 20] }, { name: "Tertiary ve üstü", values: [20, 40, 77] }], ylabel: "İstihdam payı (%)" } },
        { tip: "tuzak", metin: "Sektörlerin sırası yanlış okunur.", yanlis: "Quinary sektör en çok işçinin çalıştığı sektördür.", dogru: "Quinary çok küçük, en üst karar verici kesimdir. ==Çekirdek ülkelerde işgücünün çoğu *tertiary*'dedir==; periphery ülkelerde ise *primary*." }
      ]
    },
    {
      baslik: "Weber'in en düşük maliyet kuramı",
      kisa: "Firma, toplam maliyetin en düşük olduğu yeri seçer; en büyük pay ulaşımdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Ulaşım maliyeti", alt: "en büyük pay" }, "+",
            { t: "İşgücü maliyeti", alt: "ücret ve beceri" }, "+",
            { t: "Yığılma etkisi", alt: "kümelenmenin kazancı" }, "=",
            { t: "Toplam maliyet", alt: "en aza indirilecek" }
          ], aciklama: "*Least cost theory* (Alfred Weber): bir fabrika, toplam maliyeti en düşük yere kurulur. Ulaşım, işgücü ve *agglomeration* (aynı sektörün bir arada kümelenmesi) üç temel etkendir." },
        { tip: "ikili", sol: { ikon: "⛏️", baslik: "Hacim kaybeden üretim (*bulk-reducing*)", maddeler: ["Ürün hammaddeden hafif; işlerken kütle kaybolur", "Hammaddeye yakın kurulur"] },
          sag: { ikon: "🏙️", baslik: "Hacim kazanan üretim (*bulk-gaining*)", maddeler: ["Ürün girdilerden ağır ya da hacimli; süreçte eklenir", "Pazara yakın kurulur"] },
          oyun: [
            { metin: "Bakır cevherinden bakır çıkarıp işleyen tesis; cevherin çoğu atık kalıyor.", cevap: "sol", neden: "Kütle kaybı: hammaddeye yakın kurulur." },
            { metin: "Kola şişeleme tesisi: konsantre ve şurup şehirde suyla karıştırılıp şişeleniyor.", cevap: "sag", neden: "Su eklenerek ağırlaşıyor: pazara yakın." },
            { metin: "Mobilya montaj atölyesi: düz paketlenmiş parçaları kurulmuş, hacimli mobilyaya çeviriyor.", cevap: "sag", neden: "Ürün hacimli ve taşıması pahalı: pazara yakın." },
            { metin: "Şeker pancarından şeker çıkaran fabrika.", cevap: "sol", neden: "Hammaddenin büyük kısmı küspe olarak kayboluyor: tarlaya yakın." }
          ] }
      ]
    },
    {
      baslik: "Kırılma noktası ve konteyner",
      kisa: "Yük bir taşıma türünden diğerine geçerken fabrikalar toplanır; konteyner mesafeyi küçülttü.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚓", terim: "Break-of-bulk point", tr: "yük aktarma noktası", tanim: "Malın bir taşıma türünden diğerine (gemiden trene, trenden kamyona) aktarıldığı yer. Aktarma masrafı olduğu için işleme tesisleri burada toplanabilir.", ornek: "Liman şehirleri, demiryolu ile nehrin kesiştiği yerler." },
            { ikon: "📦", terim: "Shipping container", tr: "nakliye konteyneri", tanim: "Gemi, tren ve kamyonda aynen taşınan standart çelik kutu. Yük aktarma maliyetini ve süresini çok azaltır.", ornek: "Çin'den İzmir'e kutuyu açmadan gelen mal." }
          ] },
        { tip: "adimlar", baslik: "Konteyner neyi değiştirdi?", adimlar: [
            { baslik: "Aktarma ucuzladı", metin: "Mal kutuda kaldığı için gemiden kamyona geçmek hızlı ve ucuz oldu." },
            { baslik: "Ulaşım maliyeti düştü", metin: "Uzak ülkelerden mal getirmek pahalı olmaktan çıktı." },
            { baslik: "İşgücü maliyeti öne çıktı", metin: "Taşıma ucuzlayınca firmalar ücretin düşük olduğu yerleri seçti; üretim periphery ve semiperiphery'ye kaydı." }
          ] },
        { tip: "tuzak", metin: "Kırılma noktası yalnızca liman demek değildir.", yanlis: "*Break-of-bulk point* yalnızca denizdeki limandır.", dogru: "==Taşıma türünün değiştiği her yerdir==: liman, demiryolu aktarma istasyonu, kamyon terminali. Önemli olan yükün **aktarılmasıdır**." }
      ]
    },
    {
      baslik: "İşgücü, pazar, kaynak ve çekirdek–çevre",
      kisa: "Maliyet ve beceri dengesi, hangi üretimin hangi ülkeye gideceğini belirler.",
      bloklar: [
        { tip: "tablo", baslik: "Üretimin konumu", head: ["", "Core (çekirdek)", "Semiperiphery (yarı çevre)", "Periphery (çevre)"], rows: [
            ["İşgücü", "Pahalı, becerili", "Orta maliyetli, büyüyen beceri", "Ucuz, çoğu beceriksiz"],
            ["Tipik iş", "Tasarım, finans, yüksek teknoloji", "Montaj, otomotiv, tekstil", "Hammadde çıkarma, basit işçilik"],
            ["Sektör ağırlığı", "Tertiary ve üstü", "Secondary", "Primary"]
          ], vurgu: 1 },
        { tip: "liste", maddeler: [
            { ikon: "👷", baslik: "Labor (işgücü)", metin: "İşgücü yoğun üretim ucuz ücretli yere gider; bilgi yoğun üretim becerili işgücünün olduğu yere." },
            { ikon: "🛒", baslik: "Market (pazar)", metin: "Ürünü hacim kazanan ya da çabuk bozulan firma tüketiciye yakın durur." },
            { ikon: "🪨", baslik: "Resources (kaynak)", metin: "Hammaddesi ağır ve kütlesi azalan firma kaynağa yakın durur." },
            { ikon: "🔌", baslik: "Footloose industry", metin: "Hafif, değerli ve kaynaktan bağımsız ürün üreten (ör. elektronik) *footloose* sanayi birçok yere kurulabilir." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Beş sektör: *primary* (çıkarma), *secondary* (işleme), *tertiary* (hizmet), *quaternary* (bilgi), *quinary* (üst düzey karar).",
            "Kalkındıkça istihdam primary'den secondary'ye, oradan tertiary ve bilgi sektörlerine kayar; çekirdekte tertiary, çevrede primary ağırdır.",
            "Weber'e göre firma ulaşım, işgücü ve *agglomeration* maliyetlerinin toplamını en aza indiren yeri seçer.",
            "Hacim kaybeden (*bulk-reducing*) üretim hammaddeye, hacim kazanan (*bulk-gaining*) üretim pazara yakın kurulur.",
            "*Break-of-bulk point* yükün bir taşıma türünden diğerine aktarıldığı noktadır; fabrikalar burada toplanabilir.",
            "Konteyner taşımayı ucuzlattı; işgücü maliyeti öne çıktı ve üretim periphery ile semiperiphery'ye kaydı.",
            "Çekirdekte pahalı ve becerili işgücü, çevrede ucuz işgücü vardır; *footloose* sanayi birçok yere kurulabilir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir üniversitedeki yapay zekâ araştırmacısının ve bir ülkenin merkez bankası başkanının yaptığı işler sırasıyla hangi sektörlere girer?",
      opts: ["Secondary ve tertiary", "Quaternary ve quinary", "Tertiary ve quaternary", "Quinary ve primary"],
      a: 1,
      why: "Araştırma ve bilgi üretimi quaternary, en üst düzey karar vermek quinary sektördür. En çekici yanlış şık C: araştırmacı bir hizmet gibi görünür ama bilgi üretimi quaternary'dir." },
    { q: "Grafikteki iki eğri hangi sektörleri temsil ediyor?",
      fig: { type: "graph", xlabel: "Kalkınma düzeyi", ylabel: "İstihdam payı", xmax: 10, ymax: 10, lines: [{ from: [0.5, 8.5], to: [9.5, 0.5], label: "X" }, { from: [0.5, 0.5], to: [9.5, 7.3], label: "Z" }], caption: "Şematik eğriler" },
      opts: ["X tertiary, Z primary; düşük gelirli ülkede tertiary payı yüksektir", "X secondary, Z quinary; düşük gelirli ülkede secondary payı yüksektir", "X quaternary, Z primary; düşük gelirli ülkede quaternary payı yüksektir", "X primary, Z tertiary; düşük gelirli ülkede işgücü ağırlıkla primary'dedir"],
      a: 3,
      why: "Kalkındıkça düşen eğri primary, yükselen eğri tertiary ve üstüdür; düşük gelirli ülkede işgücü çoğunlukla tarımda ve madenciliktedir. A şıkkı en çekici yanlış: sektörlerin yerini ters koyuyor." },
    { q: "Bir firma ormandan çıkan kütükleri kesip tahta üretiyor; kütüğün neredeyse yarısı kabuk ve talaş olarak ayrılıyor. Weber'in en düşük maliyet kuramına göre tesis nereye kurulmalıdır?",
      opts: ["Ormana yakın bir yere, çünkü üretim sırasında kütle kaybediliyor ve ham madde taşımak pahalı", "Ürünün satıldığı büyük şehre, çünkü kütle kaybı pazara yakınlık gerektirir", "Yalnızca en ucuz işgücünün olduğu uzak bir ülkeye", "Herhangi bir yere, çünkü ulaşım maliyeti hiç önemli değildir"],
      a: 0,
      why: "Kütle kaybeden (*bulk-reducing*) üretim, taşıma maliyetini azaltmak için hammaddeye yakın kurulur. B şıkkı en çekici yanlış: pazara yakınlık hacim kazanan üretim için geçerlidir." },
    { q: "Bir ihracatçı malı gemiyle liman şehrine getiriyor, orada trene yüklüyor. Bu aktarma noktasında işleme tesislerinin toplanmasının nedeni hangisidir?",
      opts: ["Limanlarda işgücü her zaman ücretsizdir", "Liman şehirlerinde arsa her zaman en ucuzdur", "Mal zaten orada taşıma türü değiştirdiği için ek yükleme masrafı olmadan işlenebilir", "Limanda ham madde bulunmaz"],
      a: 2,
      why: "*Break-of-bulk point*'te yük zaten aktarılıyor; işlemeyi burada yapmak yeniden yükleme maliyetini azaltır. A şıkkı en çekici yanlış: liman şehirlerinde işgücü ücretsiz değildir; mesele taşıma maliyetidir." },
    { q: "Konteynerin yaygınlaşması aşağıdakilerden hangisine yol açmıştır?",
      opts: ["Üretimin daha çok hammadde kaynağının yanına yığılmasına", "Yük aktarma ve uzun mesafe taşıma maliyetinin düşmesine; firmaların işgücü maliyeti düşük yerleri daha çok seçmesine", "Küresel ticaretin azalmasına", "Tertiary sektörün ortadan kalkmasına"],
      a: 1,
      why: "Konteyner aktarmayı ve uzun mesafe taşımayı ucuzlattı; ulaşım maliyeti azalınca işgücü maliyeti öne çıktı ve üretim ucuz işgücü olan yerlere kaydı. A şıkkı en çekici yanlış: taşıma ucuzlayınca mesafe zorunluluğu azaldı." }
  ]
};
