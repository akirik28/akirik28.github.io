/* Kitora not defteri · bf404 · 4.4 Porter'ın Beş Gücü ve SWOT
   Kaynak: College Board CED, Topic 4.4 (4.4.A–4.4.D). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf404",
  amac: "Bu konu işletmenin içinde yarıştığı ortamı ve kendi gücünü sistemli çözümlemeyi anlatıyor: Porter'ın Beş Gücü ile bir pazarın ne kadar çekici olduğunu, SWOT ile işletmenin iç ve dış durumunu değerlendirmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Porter'ın Beş Gücü: genel bakış",
      kisa: "Beş güç, bir pazarda rekabetin ne kadar sert ve kârın ne kadar zor olduğunu gösterir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚔️", terim: "Porter's Five Forces", tr: "Porter'ın Beş Gücü", tanim: "Bir rekabet ortamının yoğunluğunu, çekiciliğini ve olası kârlılığını değerlendiren çerçeve. Hangi yeni pazara girileceği ya da hangi fiyat stratejisinin seçileceği gibi kararlarda kullanılır.", ornek: "Okul çevresinde ikinci bir tostçu açmadan önce pazarı tartmak." },
            { ikon: "🧲", terim: "Market attractiveness", tr: "pazarın çekiciliği", tanim: "Rekabet güçleri ==güçlüyse== pazar çekici değildir: kâr potansiyeli düşer. Güçler ==zayıfsa== pazar çekicidir: kâr potansiyeli artar. Her güç, karşı tarafın gücünün işletmenin rekabet etme yeteneğini nasıl tehdit ettiğini gösterir.", ornek: "Yüzlerce rakibin olduğu pazar çekici değil; tek lisanslı bir pazar çekicidir." }
          ] },
        { tip: "harita", merkez: "Beş güç", dallar: [
            { baslik: "Rekabet", alt: "*competitive rivalry*: mevcut rakipler arasındaki rekabet" },
            { baslik: "Yeni girenler", alt: "*threat of new entrants*: pazara girmek ne kadar kolay?" },
            { baslik: "İkame ürünler", alt: "*threat of substitutes*: aynı ihtiyacı başka ürünle karşılamak" },
            { baslik: "Müşteri gücü", alt: "*customer power*: alıcıların fiyatı aşağı çekme gücü" },
            { baslik: "Tedarikçi gücü", alt: "*supplier power*: girdi fiyatını yukarı çekme gücü" }
          ] }
      ]
    },
    {
      baslik: "Rekabet ve yeni girenler",
      kisa: "Rakip sayısı, ürün farkı ve giriş engelleri rekabeti ve kârı belirler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🥊", terim: "Competitive rivalry", tr: "mevcut rakipler arası rekabet", tanim: "Pazardaki işletmeler arasındaki rekabetin yoğunluğu. Rakip sayısı, ürün farklılaşması ve işletmelerin ==fiyatlama gücü== (*pricing power*) ile belirlenir. Genellikle rekabeti belirleyen en güçlü etken sayılır.", ornek: "Aynı mahallede on pizzacı varsa rekabet yoğundur." },
            { ikon: "🚪", terim: "Threat of new entrants", tr: "yeni girenlerin tehdidi", tanim: "Pazara girmenin kolaylığı; ==giriş engelleri== (*barriers to entry*) ile belirlenir. Engel, yeni işletmenin pazara girmesini zorlaştıran şeydir.", ornek: "Yüksek başlangıç yatırımı, yasal izin ve lisans, güçlü marka sadakati birer engeldir." }
          ] },
        { tip: "tablo", baslik: "Ne zaman güçlü, ne zaman zayıf?", head: ["Güç", "Güçlüdür, eğer…", "Zayıftır, eğer…"], rows: [
            ["Rekabet", "Çok sayıda doğrudan rakip, birbirine denk ürünler, düşük fiyatlama gücü", "Az rakip, farklılaşmış ürün, yüksek fiyatlama gücü"],
            ["Yeni girenler", "Giriş engelleri düşük; yeni işletme kolayca girip pazar payı alabilir", "Giriş engelleri yüksek; girmek zor ve pahalı"]
          ], not: "Rekabet gücünü değerlendirirken doğrudan rakiplerin sayısına ve ürünlerinin ne kadar farklı olduğuna bakılır." },
        { tip: "tuzak", baslik: "Engel yüksekse tehdit zayıftır", metin: "Giriş engelinin yüksekliğiyle tehdidin gücü ters orantılıdır.", yanlis: "Giriş engelleri yüksekse yeni girenlerin tehdidi güçlüdür.", dogru: "Engeller ==düşükse== yeni işletmeler kolayca girer: tehdit ==güçlü==. Engeller ==yüksekse== girmek zor: tehdit ==zayıf==." }
      ]
    },
    {
      baslik: "İkameler, müşteriler ve tedarikçiler",
      kisa: "İkame ürün, alıcı gücü ve tedarikçi gücü fiyatı baskılar, maliyeti yükseltir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔄", terim: "Substitute products", tr: "ikame ürünler", tanim: "Aynı müşteri ihtiyacını karşılayan ama doğrudan rakip olmayan ürün ve hizmetler. Müşteri çeşitli alternatiflere kolay ulaşırsa, özellikle de bunlar daha ucuz, daha ulaşılabilir ya da daha kaliteliyse tehdit güçlüdür.", ornek: "Tost yerine simit, kantin yemeği ya da evden getirilen sandviç." },
            { ikon: "🔁", terim: "Switching costs", tr: "geçiş maliyetleri", tanim: "Müşterinin satın aldığı ürün ya da markayı değiştirirken katlandığı parasal ve psikolojik maliyetler.", ornek: "Operatör değiştirirken numarayı kaybetme riski, kampanya kaybı, alışkanlık." },
            { ikon: "🛒", terim: "Customer power", tr: "müşteri gücü", tanim: "Alıcıların fiyatı aşağı çekme gücü. Müşteri sayısına, müşteri kazanma maliyetine ve geçiş maliyetlerine bağlıdır.", ornek: "Satışının %70'ini tek bir otel zincirine yapan atölye, fiyat indirmeye mecbur kalabilir." },
            { ikon: "🏭", terim: "Supplier power", tr: "tedarikçi gücü", tanim: "Hammadde ve parça gibi girdileri sağlayanların fiyatı artırma gücü. Kaynak piyasasındaki rekabet, tedarikçinin ne kadar güçlü olduğunu belirler.", ornek: "Yalnızca iki firmanın sattığı özel bir hammaddeyi kullanmak zorunda olan üretici." }
          ] },
        { tip: "ikili", sol: { ikon: "🛒", baslik: "Müşteri gücü: fiyatı aşağı çeker", maddeler: ["Az sayıda müşteri", "Her müşteri satışın büyük payı", "Müşteri kazanma maliyeti yüksek", "Geçiş maliyeti düşük"] },
          sag: { ikon: "🏭", baslik: "Tedarikçi gücü: girdi maliyetini yukarı çeker", maddeler: ["Az sayıda tedarikçi", "Yeni tedarikçiye geçmek pahalı"] },
          oyun: [
            { metin: "Bir atölyenin satışının %60'ı tek bir mağazaya gidiyor ve mağaza kolayca başka atölyeye geçebiliyor.", cevap: "sol", neden: "Az müşteri, büyük pay, düşük geçiş maliyeti: müşteri gücü güçlü." },
            { metin: "Özel bir boyayı yalnızca iki firma satıyor; makineler yalnızca o boyayla çalışıyor.", cevap: "sag", neden: "Az tedarikçi, yüksek geçiş maliyeti: tedarikçi gücü güçlü." },
            { metin: "Mahalledeki yüzlerce müşteri tostçuyu seçiyor; biri gelmese de fark etmiyor.", cevap: "sol", neden: "Çok müşteri ve küçük pay: müşteri gücü zayıf (müşteri tarafıyla ilgili)." },
            { metin: "Un, onlarca değirmenden alınabiliyor ve değirmen değiştirmek ücretsiz.", cevap: "sag", neden: "Çok tedarikçi, düşük geçiş maliyeti: tedarikçi gücü zayıf (tedarikçi tarafıyla ilgili)." }
          ] },
        { tip: "tuzak", baslik: "İkame ürün, rakip değildir", metin: "Rakip aynı ürünü satar; ikame aynı ihtiyacı başka ürünle karşılar.", yanlis: "Bir tostçunun ikamesi, yan sokaktaki başka bir tostçudur.", dogru: "Yan sokaktaki tostçu ==doğrudan rakiptir== (*rivalry*). ==İkame==, aynı ihtiyacı farklı ürünle karşılayan simit, çorba ya da ev sandviçidir." }
      ]
    },
    {
      baslik: "Beş Gücü uygula: pazar çekici mi?",
      kisa: "Güçler zayıfsa pazar çekici ve kârlıdır; güçlüyse çekici değildir.",
      bloklar: [
        { tip: "grafik", baslik: "Okul çevresindeki tost pazarı: beş gücün şiddeti", xlabel: "Güç", ylabel: "Şiddet (1 zayıf – 5 güçlü)", xmax: 6, ymax: 6, xticks: [{ v: 1, label: "Rekabet" }, { v: 2, label: "Yeni giren" }, { v: 3, label: "İkame" }, { v: 4, label: "Müşteri" }, { v: 5, label: "Tedarikçi" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 0, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 5.3, metin: "5", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 4.3, metin: "4", gizli: true },
            { id: "t2b", tip: "yazi", x: 2, y: 2.3, metin: "2", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 4.3, metin: "4", gizli: true },
            { id: "t4", tip: "yazi", x: 4, y: 3.3, metin: "3", gizli: true },
            { id: "t5", tip: "yazi", x: 5, y: 2.3, metin: "2", gizli: true },
            { id: "nt", tip: "yazi", x: 5.9, y: 5.6, metin: "Ruhsat şartı → giriş zorlaşır", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "Sekiz tostçu aynı menüyü satıyor, fiyat gücü yok: ==rekabet 5==. Tost makinesi ve küçük bir tezgâh yeter: giriş engeli düşük, ==yeni giren tehdidi 4==.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 5], [0.65, 5]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 4], [1.65, 4]] } }, goster: ["t1", "t2"] },
            { metin: "Simit, kantin yemeği ve evden getirilen sandviç aynı açlığı bastırıyor: ==ikame 4==.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 4], [2.65, 4]] } }, goster: ["t3"] },
            { metin: "Öğrenciler çok ve her biri küçük pay (zayıf), ama başka yere geçmek bedava (güçlü): ==müşteri 3==.", set: { b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 3], [3.65, 3]] } }, goster: ["t4"] },
            { metin: "Ekmek, kaşar, sucuk birçok yerden alınır ve değiştirmek kolay: ==tedarikçi 2==.", set: { b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 2], [4.65, 2]] } }, goster: ["t5"] },
            { metin: "Beş güçten üçü güçlü: pazar ==çekici değil==, kâr potansiyeli düşük. İkinci bir tostçu açmak riskli.", goster: [] },
            { metin: "Okul, tost satışı için yeni ruhsat şartı koyarsa giriş engeli yükselir: ==yeni giren tehdidi 4 → 2==. Pazar biraz daha çekici olur.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 2], [1.65, 2]] } }, gizle: ["t2"], goster: ["t2b", "nt"] }
          ] },
        { tip: "ikili", sol: { ikon: "🧲", baslik: "Çekici pazar (güçler zayıf)", maddeler: ["Kâr potansiyeli yüksek", "Rekabet baskısı az"] },
          sag: { ikon: "🚫", baslik: "Çekici olmayan pazar (güçler güçlü)", maddeler: ["Kâr potansiyeli düşük", "Fiyat ve maliyet baskısı yüksek"] },
          oyun: [
            { metin: "Çok sayıda rakip var, ürünler aynı, kimsenin fiyat gücü yok.", cevap: "sag", neden: "Rekabet güçlü: pazar çekici değil." },
            { metin: "Girmek için büyük yatırım ve lisans gerekiyor, yeni firma kolay çıkamıyor.", cevap: "sol", neden: "Giriş engeli yüksek: yeni girenler tehdidi zayıf." },
            { metin: "Birkaç büyük müşteri satışın çoğunu alıyor ve kolayca başka yere geçebiliyor.", cevap: "sag", neden: "Müşteri gücü güçlü." },
            { metin: "Onlarca tedarikçi var ve değiştirmek kolay.", cevap: "sol", neden: "Tedarikçi gücü zayıf: pazar çekici." }
          ] },
        { tip: "tuzak", baslik: "Güçlü güç işletme için iyi değildir", metin: "“Güç”, karşı tarafın gücüdür; işletmenin değil.", yanlis: "Beş güç yüksekse işletme güçlüdür; beş güç, pazardaki beş rakip firmadır.", dogru: "Güç, rakiplerin, yeni girenlerin, ikamelerin, müşterilerin ve tedarikçilerin işletmeye uyguladığı ==baskıdır==. Güç ==güçlüyse== kâr potansiyeli ==düşer==." }
      ]
    },
    {
      baslik: "SWOT analizi: dört kutu",
      kisa: "SWOT, işletmenin içteki güç ve zayıflığını, dıştaki fırsat ve tehditle birlikte tartar.",
      bloklar: [
        { tip: "tablo", baslik: "SWOT: iç ve dış, olumlu ve olumsuz", head: ["", "Hedefe yardım eden", "Hedefe zarar veren"], rows: [
            ["**İç** (işletmenin kendisi)", "*Strengths*: marka bilinirliği, kaliteli ürün, deneyimli ekip, bol para, fikri mülkiyet, verimli tedarik zinciri", "*Weaknesses*: eksik temel yetkinlik, düşük bilinirlik, ürün hatası, kıt para, nitelikli eleman bulamamak, kötü müşteri hizmeti, eski teknoloji, tedarik zinciri riski"],
            ["**Dış** (işletmenin kontrolü dışında)", "*Opportunities*: pazar büyümesi, rakiplerin azalması, teknolojik gelişme, olumlu mevzuat değişikliği", "*Threats*: girdi maliyeti artışı, doğal afet, olumsuz mevzuat değişikliği, düzeni değiştiren yenilik (*disruptive innovation*)"]
          ], not: "SWOT, işletmenin hedeflerine ulaşma ve rekabetçi kalma yeteneğini etkileyen iç ve dış etkenleri değerlendirir." },
        { tip: "ikili", sol: { ikon: "🏠", baslik: "İç etken (*strength* / *weakness*)", maddeler: ["Kendi kaynakların, ekibin, markan", "Değiştirebilirsin"] },
          sag: { ikon: "🌍", baslik: "Dış etken (*opportunity* / *threat*)", maddeler: ["Pazar, yasalar, ekonomi, doğa", "Kontrol edemezsin"] },
          oyun: [
            { metin: "Kantin çalışanları bu işte yıllardır çalışan, tecrübeli kişiler.", cevap: "sol", neden: "Kendi insan kaynağı: iç etken (*strength*)." },
            { metin: "Hükümet, küçük işletmelere vergi indirimi getiriyor.", cevap: "sag", neden: "Kontrol dışı, olumlu: dış etken (*opportunity*)." },
            { metin: "Kantinin kasa yazılımı eski; ödemeler yavaş.", cevap: "sol", neden: "Kendi teknolojisi: iç etken (*weakness*)." },
            { metin: "Un ve peynir fiyatları hızla artıyor.", cevap: "sag", neden: "Kontrol dışı, olumsuz: dış etken (*threat*)." },
            { metin: "Okulun öğrenci sayısı bu yıl artıyor.", cevap: "sag", neden: "Pazar büyümesi: dış etken (*opportunity*)." }
          ] },
        { tip: "tuzak", baslik: "Rakip fiyatı da dışarıdadır", metin: "Etkenin iç mi dış mı olduğuna, işletmenin onu kontrol edip edemeyeceğine bakarak karar ver.", yanlis: "Rakibin yeni kampanyası kantinin iç zayıflığıdır; işletmenin düşük marka bilinirliği bir tehdittir.", dogru: "Rakibin kampanyası ==dış etkendir== (*threat*). Marka bilinirliğinin düşük olması ==iç== bir zayıflıktır (*weakness*)." }
      ]
    },
    {
      baslik: "SWOT'u uygula ve stratejiye çevir",
      kisa: "İç etkenler rakip ve geçmişle, dış etkenler PESTEL ve Beş Güçle değerlendirilir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔍", terim: "Internal capabilities", tr: "iç yetenekler", tanim: "Finansal, fiziksel ve insan kaynakları ile marka, itibar ve fikri mülkiyet gibi soyut varlıklar. Güçlü mü zayıf mı olduğuna rakiplerle, sektör benchmark'larıyla ve geçmiş performansla kıyaslayarak karar verilir.", ornek: "Kuyruk süresi 10 dakika: rakipte 3 dakikaysa zayıflık, rakipte 15 dakikaysa güçlü yan." },
            { ikon: "🌐", terim: "External factors", tr: "dış etkenler", tanim: "Olası pazar büyüklüğü, müşteri tercihleri, *PESTEL* etkenleri ve Porter'ın Beş Gücü. Bunlar işletme için elverişli bir iklim yaratıp yaratmadığını gösterir.", ornek: "Öğrenci sayısı artıyor ve rekabet zayıf: elverişli iklim." }
          ] },
        { tip: "harita", merkez: "PESTEL: dış etkenler", dallar: [
            { baslik: "Political (siyasi)", alt: "vergi politikası, dış ticaret kuralları" },
            { baslik: "Economic (ekonomik)", alt: "enflasyon, faiz, döviz kuru" },
            { baslik: "Social (toplumsal)", alt: "tüketici alışkanlıkları, nüfus yapısı" },
            { baslik: "Technological (teknolojik)", alt: "yeni ödeme sistemleri, uygulamalar" },
            { baslik: "Environmental (çevresel)", alt: "iklim, atık kuralları" },
            { baslik: "Legal (yasal)", alt: "iş ve gıda güvenliği mevzuatı" }
          ] },
        { tip: "ornek", baslik: "Kantin SWOT'u ve stratejik kararlar", durum: "Kantinin SWOT sonuçları: *Strength*: öğrencilerin güvendiği marka. *Weakness*: eski ödeme sistemi (nakit). *Opportunity*: okul büyüyor, öğrenci sayısı artıyor. *Threat*: un ve peynir fiyatları yükseliyor. Strateji nasıl çıkar?",
          adimlar: ["Güçlü yanı geliştir: güvenilir markayla “gün menüsü” aboneliği sat.", "Zayıflığı gider: kartlı ve QR ödeme sistemini kur.", "Fırsattan yararlan: artan öğrenci için ikinci servis noktası aç.", "Tehdide karşılık ver: toptan alım anlaşmasıyla un ve peynirde fiyatı sabitle."],
          sonuc: "SWOT sonuçları dört stratejik karara dönüşür: ==güçlü yanı kullan, zayıflığı gider, fırsattan yararlan, tehdide karşılık ver==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Porter'ın Beş Gücü rekabetin yoğunluğunu, pazarın çekiciliğini ve olası kârlılığı değerlendirir; yeni pazara girme ya da fiyat stratejisi seçme gibi kararlarda kullanılır.",
            "Beş güç: mevcut rekabet, yeni girenler, ikame ürünler, müşteri gücü, tedarikçi gücü. Rekabet genellikle en belirleyici etkendir.",
            "Rekabet güçlüdür: çok sayıda doğrudan rakip, denk ürünler, düşük fiyatlama gücü. Yeni girenler güçlüdür: giriş engelleri düşük.",
            "İkame güçlüdür: alternatifler çok ve ucuz, ulaşılabilir ya da kaliteli. Müşteri gücü: az müşteri, büyük pay, yüksek müşteri kazanma maliyeti, düşük geçiş maliyeti.",
            "Tedarikçi gücü güçlüdür: az tedarikçi, geçiş maliyeti yüksek.",
            "Güçler güçlü ⇒ pazar çekici değil, kâr potansiyeli düşük. Güçler zayıf ⇒ pazar çekici.",
            "SWOT: iç etkenler *strengths* ve *weaknesses*; dış etkenler *opportunities* ve *threats*.",
            "İç yetenekler rakiplerle, sektör benchmark'larıyla ve geçmişle kıyaslanır. Dış etkenler için *PESTEL* ve Beş Güç kullanılır.",
            "SWOT sonucu: güçlü yanı geliştir, zayıflığı gider, fırsattan yararlan, tehdide karşılık ver."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir mahallede çok sayıda fırıncı neredeyse aynı ekmeği satıyor ve fiyatlar sürekli birbirini kırıyor. Hiçbir fırının fiyat gücü yok. Porter'ın Beş Gücü'ne göre bu durum en çok hangi gücü gösterir?",
      opts: ["Yeni girenlerin tehdidi", "Müşteri gücü", "Mevcut rakipler arasındaki rekabet", "Tedarikçi gücü"],
      a: 2,
      why: "Çok sayıda doğrudan rakip, denk ürünler ve düşük fiyatlama gücü, rekabetin güçlü olduğunu gösterir. En çekici yanlış şık müşteri gücü: fiyat kırılması müşteriye avantaj sağlasa da asıl neden müşterilerin değil, rakiplerin yoğunluğudur." },
    { q: "Bir bisküvi üreticisi, ürününde kullandığı özel bir fındık ezmesini yalnızca iki firmadan alabiliyor ve tarifi değiştirmek aylar sürüyor. Hangi koşul bu durumda tedarikçi gücünü en çok artırır?",
      opts: ["Az tedarikçi ve yeni tedarikçiye geçmenin yüksek maliyeti", "Çok tedarikçi ve düşük geçiş maliyeti", "Az müşteri ve yüksek müşteri kazanma maliyeti", "Çok doğrudan rakip ve düşük fiyatlama gücü"],
      a: 0,
      why: "Tedarikçi gücü, az sayıda kaynak sağlayıcı ve geçişin pahalı olması durumunda güçlüdür. B tersini söyler. C müşteri gücüyle, D rekabetle ilgilidir; ikisi tedarikçi gücünü açıklamaz." },
    { q: "Tablo, iki farklı pazarın beş gücünü özetliyor. Yeni bir işletme için hangi pazar daha çekicidir?",
      fig: { type: "table", caption: "Güçlerin şiddeti", head: ["Güç", "Pazar A", "Pazar B"], rows: [["Rekabet", "Güçlü", "Zayıf"], ["Yeni girenler", "Güçlü", "Zayıf"], ["İkame ürünler", "Zayıf", "Güçlü"], ["Müşteri gücü", "Güçlü", "Zayıf"], ["Tedarikçi gücü", "Zayıf", "Zayıf"]] },
      opts: ["Pazar A; güçlü güç sayısı fazla olduğu için", "Pazar B; yalnızca bir güç güçlü olduğu için kâr potansiyeli daha yüksektir", "İkisi eşit çekicidir", "Hangisi olduğu söylenemez; Beş Güç çekicilik hakkında bilgi vermez"],
      a: 1,
      why: "Güçler zayıfladıkça kâr potansiyeli artar ve pazar çekici hale gelir. A'da üç güç güçlü, B'de yalnızca ikame ürünler güçlü. Bu yüzden B daha çekicidir. A şıkkı mantığı ters kurar: güçlü güç sayısı fazla olunca pazar daha çekici değil, daha az çekici olur." },
    { q: "Bir kafe için aşağıdakilerden hangisi *SWOT* analizinde bir *opportunity*’dir?",
      opts: ["Kafenin güçlü marka bilinirliği", "Rakip kafelerin kalitesini artırması", "Hükümetin küçük işletmelere vergi indirimi getirmesi", "Kafenin eski kasa yazılımı"],
      a: 2,
      why: "Olumlu mevzuat değişikliği, işletmenin kontrolü dışındaki olumlu bir dış etkendir: *opportunity*. A iç bir güç (*strength*), D iç bir zayıflık (*weakness*) ve B dış bir tehdit (*threat*) örneğidir. B çekici bir yanlış şık: dış olduğu için fırsat gibi görünür ama olumsuzdur." },
    { q: "Bir internet sağlayıcı pazarında yeni bir yasa, abonelerin hiçbir ücret ödemeden ve numara kaybetmeden başka sağlayıcıya geçmesine izin veriyor. Porter'ın Beş Gücü'ne göre bu değişiklik hangi gücü nasıl etkiler?",
      opts: ["Tedarikçi gücünü artırır", "Yeni girenlerin tehdidini kesinlikle sıfırlar", "İkame ürün tehdidini azaltır", "Müşteri gücünü artırır, çünkü geçiş maliyetleri düşer"],
      a: 3,
      why: "Müşteri gücü; müşteri sayısına, müşteri kazanma maliyetine ve geçiş maliyetine bağlıdır. Geçiş maliyeti düşünce müşteri gücü artar: abone fiyat baskısı yapabilir, kolayca başka sağlayıcıya geçebilir. “Tehdidi kesinlikle sıfırlar” çok kesin bir ifadedir ve zaten bu değişiklik yeni girenlerle değil geçişle ilgilidir." }
  ]
};
