/* Kitora not defteri · hg507 · Tarımın Mekânsal Düzeni (5.7)
   Kaynak: AP HuG CED Topic 5.7 (PSO-5.C.3–5). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "hg507",
  amac: "Bu konu tarımın ekonomik güçlerle nasıl şekillendiğini anlatıyor: geçimlik ve ticari tarım, aile çiftliklerinin yerini alan *agribusiness*, ürünü tarladan tabağa taşıyan *commodity chain* ve teknolojinin yarattığı *economies of scale*. Küçük bir çiftliğin neden zorlandığını hesapla açıklayabileceksin.",
  bolumler: [
    {
      baslik: "Geçimlik ve ticari tarım",
      kisa: "*Subsistence* ailenin sofrası için, *commercial* satış ve kâr için yapılan tarımdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌽", terim: "Subsistence agriculture", tr: "geçimlik tarım", tanim: "Ürünün çoğu çiftçi ailesinin kendi tüketimi için yetiştirilir. Arazi küçüktür; iş çoğunlukla el emeği ve hayvan gücüyle yapılır.", ornek: "Köydeki bir aile yıl boyunca yiyeceği mısır ve fasulyeyi kendi tarlasında yetiştiriyor." },
            { ikon: "🚜", terim: "Commercial agriculture", tr: "ticari tarım", tanim: "Ürün satmak ve kâr etmek için yetiştirilir. Neyin ekileceğine piyasa fiyatı karar verir; makine, kredi, gübre ve pazar ağı kullanılır.", ornek: "Çukurova'da bir çiftçi pamuğu satmak için ekiyor." }
          ] },
        { tip: "ikili", sol: { ikon: "🏡", baslik: "*Subsistence* (geçimlik)", maddeler: ["Önce ailenin karnı doyar", "Artan olursa pazara gider"] },
          sag: { ikon: "💰", baslik: "*Commercial* (ticari)", maddeler: ["Ürün satış için yetiştirilir", "Kararı fiyat ve kâr yönlendirir"] },
          oyun: [
            { metin: "Aile, yıl boyunca yiyeceği mısır ve fasulyeyi ekiyor; fazlası olursa komşuya veriyor.", cevap: "sol", neden: "Üretim önce kendi tüketimi için: *subsistence*." },
            { metin: "Çiftçi ayçiçeği fiyatı yükselince bu yıl ayçiçeği ekmeye karar veriyor.", cevap: "sag", neden: "Karar fiyata göre veriliyor: *commercial*." },
            { metin: "Hasadın büyük kısmı bir fabrikaya ve marketlere gidiyor.", cevap: "sag", neden: "Ürün pazara yönelik: *commercial*." },
            { metin: "Küçük bir bahçede yetişen sebzeler aynı gün ailenin sofrasına geliyor.", cevap: "sol", neden: "Tüketim amacı: *subsistence*." }
          ] },
        { tip: "tuzak", metin: "Ayrımı arazinin büyüklüğüne göre yapmak çok yaygın bir hatadır.", yanlis: "Ticari çiftlik her zaman büyük bir şirkettir; küçük çiftlik geçimliktir.", dogru: "Ayrım ürünün **nereye gittiğine** bakar: tüketim için ise geçimlik, satış için ise ticari. Satış için üreten küçük bir aile çiftliği de ==ticaridir==." }
      ]
    },
    {
      baslik: "*Agribusiness*: aile çiftliğinin yerini alan büyük işletme",
      kisa: "Büyük ticari işletmeler küçük aile çiftliklerinin yerini alıyor.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👨‍👩‍👧", terim: "Family farm", tr: "aile çiftliği", tanim: "Toprağı çoğunlukla aile işleten, küçük ya da orta ölçekli işletme. İşi ailenin kendisi yapar.", ornek: "Bir baba ile iki oğlunun işlettiği 15 hektarlık buğday tarlası." },
            { ikon: "🏭", terim: "Agribusiness", tr: "tarım işletmeciliği", tanim: "Tarımın bütün halkalarını (girdi, üretim, işleme, dağıtım, satış) sermayeli büyük şirketlerin yönettiği ticari tarım sistemi.", ornek: "Tohumu, yemi, çiftliği ve mandırası aynı şirkete ait bir süt üreticisi." },
            { ikon: "📝", terim: "Contract farming", tr: "sözleşmeli üretim", tanim: "Çiftçi, ürününü önceden belirlenen koşullarla bir şirkete satmayı sözleşmeyle kabul eder.", ornek: "Çiftçi domatesin tamamını salça fabrikasına satmak üzere sözleşme imzalıyor." }
          ] },
        { tip: "grafik", baslik: "Çiftlik sayısı düşer, ortalama çiftlik büyür (şematik eğilim)", xlabel: "Zaman", ylabel: "Göreli değer", xmax: 10, ymax: 10,
          ogeler: [
            { id: "say", tip: "egri", renk: 1, noktalar: [[1, 8.5], [2.8, 6.8], [4.6, 5.2], [6.4, 4], [8, 3.2]], etiket: "Çiftlik sayısı" },
            { id: "boy", tip: "egri", renk: 0, noktalar: [[1, 1.6], [2.8, 3.0], [4.6, 4.6], [6.4, 6.4], [8, 8.2]], etiket: "Ortalama büyüklük", gizli: true },
            { id: "yaz", tip: "yazi", x: 5, y: 9.4, metin: "Daha az, daha büyük işletme", gizli: true }
          ],
          durumlar: [
            { metin: "Küçük aile çiftlikleri satılıyor, kiralanıyor ya da bırakılıyor; ==çiftlik sayısı azalıyor.==" },
            { metin: "Kalan işletmeler komşu araziyi alarak büyüyor; ==ortalama çiftlik büyüklüğü artıyor.==", goster: ["boy"] },
            { metin: "Sonuç: ==daha az ama daha büyük, daha makineleşmiş== işletmeler. Toplam üretim yine de artabilir.", goster: ["yaz"] }
          ] },
        { tip: "tuzak", metin: "*Agribusiness* tek bir büyük çiftliğin adı değildir.", yanlis: "*Agribusiness*, sadece çok geniş toprağı olan bir çiftliktir.", dogru: "Çiftliği değil **sistemi** anlatır: girdiler, üretim, işleme, paketleme, dağıtım ve satış ==birbirine bağlı şirketlerce== yönetilir." }
      ]
    },
    {
      baslik: "*Economies of scale*: büyük olan ucuza üretir",
      kisa: "Üretim büyüdükçe ürün başına maliyet düşer; büyük işletme avantaj kazanır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Toplam maliyet", alt: "sabit + değişken" }, "÷",
            { t: "Üretim miktarı", alt: "hektar ya da ton" }, "=",
            { t: "Birim maliyet", alt: "ürün başına" }
          ], aciklama: "*Economies of scale*: makine ve depo gibi **sabit giderler** ne kadar çok ürüne bölünürse birim maliyet o kadar düşer." },
        { tip: "ornek", baslik: "Aynı biçerdöver, iki farklı çiftlik", durum: "Bir biçerdöverin yıllık sabit gideri (taksit, bakım, sigorta) 120.000 TL. Hektar başına değişken gider (tohum, mazot, gübre) 2.000 TL. Küçük çiftlik 10 ha, büyük işletme 60 ha ekiyor. Hektar başına maliyeti karşılaştır.",
          adimlar: ["Küçük çiftlik: 120.000 ÷ 10 = 12.000 TL sabit gider/ha; + 2.000 = 14.000 TL/ha.", "Büyük işletme: 120.000 ÷ 60 = 2.000 TL sabit gider/ha; + 2.000 = 4.000 TL/ha.", "Oran: 14.000 ÷ 4.000 = 3,5 kat."],
          sonuc: "Aynı makine, ==3,5 kat== farklı birim maliyet. Satış geliri hektar başına 8.000 TL ise küçük çiftlik 6.000 TL zarar eder, büyük işletme 4.000 TL kâr eder." },
        { tip: "grafik", baslik: "Alan büyüdükçe hektar başına maliyet düşer", xlabel: "Ekilen alan (hektar)", ylabel: "Hektar başı maliyet (bin TL)", xmax: 7, ymax: 9,
          xticks: [{ v: 1, label: "10" }, { v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }],
          yticks: [{ v: 2, label: "4" }, { v: 4, label: "8" }, { v: 6, label: "12" }, { v: 8, label: "16" }],
          ogeler: [
            { id: "mal", tip: "egri", renk: 0, noktalar: [[0.8, 8.5], [1, 7], [1.3, 5.6], [2, 4], [3, 3], [4, 2.5], [6, 2], [6.8, 1.9]] },
            { id: "kck", tip: "nokta", x: 1, y: 7, etiket: "10 ha", kilavuz: true, gizli: true },
            { id: "byk", tip: "nokta", x: 6, y: 2, etiket: "60 ha", kilavuz: true, gizli: true },
            { id: "fyt", tip: "cizgi", renk: 1, from: [0, 4], to: [7, 4], kesik: true, gizli: true },
            { id: "fyz", tip: "yazi", x: 5.3, y: 4.5, metin: "Satış geliri: 8", gizli: true },
            { id: "bas", tip: "nokta", x: 2, y: 4, etiket: "20 ha", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Maliyet eğrisi sağa doğru **aşağı iner**: sabit gider çok hektara bölünür." },
            { metin: "10 hektarlık çiftlikte hektar başına maliyet ==14 bin TL==.", goster: ["kck"] },
            { metin: "60 hektarlık işletmede aynı iş ==4 bin TL==. Fark tamamen ölçekten gelir.", goster: ["byk"] },
            { metin: "Piyasa 8 bin TL ödüyorsa, ==20 hektarın altındaki çiftlik zarar eder==; büyükler fiyatı düşürse bile kâr eder.", goster: ["fyt", "fyz", "bas"] }
          ] },
        { tip: "tuzak", metin: "*Economies of scale*, verimle karıştırılır.", yanlis: "Büyük çiftlik hektar başına her zaman daha çok ürün alır.", dogru: "*Economies of scale* **verim** değil ==birim maliyet== düşüşüdür. Büyük işletme ürünü daha ucuza üretir; bu yüzden küçük çiftlikleri piyasadan çıkarabilir." }
      ]
    },
    {
      baslik: "*Commodity chain*: çiftlikten tabağa halkalar",
      kisa: "*Commodity chain*, ürünü üreticiden tüketiciye bağlayan halkalar dizisidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔗", terim: "Commodity chain", tr: "meta zinciri", tanim: "Bir tarım ürününün girdi, üretim, işleme, taşıma, dağıtım ve satış aşamalarından geçerek tüketiciye ulaşmasını sağlayan halkalar dizisi.", ornek: "Tarladaki buğdayın değirmende un, fırında simit olması." },
            { ikon: "📈", terim: "Value added", tr: "katma değer", tanim: "Zincirin her halkasında ürüne eklenen değer. İşlenmiş ürün ham üründen pahalı satılır.", ornek: "Buğday ucuzdur; un ondan pahalıdır; simit unun da üstündedir." }
          ] },
        { tip: "adimlar", baslik: "Bir simidin zinciri", adimlar: [
            { baslik: "Girdi", metin: "Tohum, gübre ve mazot şirketlerden satın alınır." },
            { baslik: "Tarla", metin: "Çiftçi buğdayı yetiştirir ve hasat eder." },
            { baslik: "Değirmen", metin: "Buğday depolanır ve una dönüştürülür." },
            { baslik: "Fırın", metin: "Un hamur olur, simit pişer." },
            { baslik: "Satış", metin: "Simit tezgâh ya da kantinde tüketiciye ulaşır." }
          ] },
        { tip: "ornek", baslik: "Zincirde para kimde kalır? (varsayımsal)", durum: "Bir kilo buğdayın zincirdeki satış fiyatları: çiftçi → değirmen 10 TL, değirmen → fırın 14 TL, fırın → market 24 TL, market → tüketici 30 TL. Her halkanın katma değerini ve çiftçinin payını bul.",
          adimlar: ["Değirmen: 14 − 10 = 4 TL. Fırın: 24 − 14 = 10 TL. Market: 30 − 24 = 6 TL.", "Çiftçinin payı: 10 TL. Kontrol: 10 + 4 + 10 + 6 = 30 TL.", "Çiftçi payı oranı: 10 ÷ 30 = ⅓."],
          sonuc: "Tüketicinin ödediği 30 TL'nin yalnızca ==üçte biri çiftçiye gider.== Zincir uzadıkça ve işleme arttıkça, değerin büyük kısmı çiftlikten **sonraki** halkalarda kalır." }
      ]
    },
    {
      baslik: "Teknoloji ve *carrying capacity*",
      kisa: "Teknoloji aynı topraktan daha çok ürün alıp daha çok insan besler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Carrying capacity", tr: "taşıma kapasitesi", tanim: "Bir arazinin ya da bölgenin sürdürülebilir biçimde besleyebileceği en yüksek nüfus. Sabit bir sayı değildir; teknoloji onu değiştirir.", ornek: "Sulama, aynı ovanın daha çok insanı beslemesini sağlar." },
            { ikon: "⚙️", terim: "Mechanization", tr: "makineleşme", tanim: "El ve hayvan emeğinin yerini traktör ve biçerdöver gibi makinelerin alması. Makine pahalıdır, bu yüzden ölçek avantajını büyütür.", ornek: "Bir biçerdöver, onlarca işçinin günlerce yaptığı hasadı birkaç günde bitirir." }
          ] },
        { tip: "tablo", baslik: "Teknoloji ne yapar?", head: ["Teknoloji", "Etkisi", "Sonucu"], rows: [
            ["Traktör, biçerdöver", "Hızlı iş, az işçi", "Pahalı makine: büyük işletme avantajlı"],
            ["Sulama", "Kurak toprağı üretken yapar", "*Carrying capacity* artar"],
            ["Kimyasal gübre, ilaç", "Hektar başına verim artar", "Maliyet ve çevre yükü artar"],
            ["Yüksek verimli tohum", "Aynı alandan daha çok ürün", "Daha çok insan beslenir"],
            ["Soğuk depo ve taşıma", "Bozulmayı azaltır", "Uzak pazarlara satış mümkün olur"]
          ] },
        { tip: "grafik", baslik: "Teknoloji kapasite çizgisini yukarı iter (şematik)", xlabel: "Zaman", ylabel: "Beslenebilen nüfus", xmax: 10, ymax: 10,
          ogeler: [
            { id: "kap", tip: "cizgi", renk: 1, from: [0, 4], to: [8.5, 4], kesik: true, etiket: "K₁" },
            { id: "nuf", tip: "egri", renk: 0, noktalar: [[0, 0.8], [1.5, 1.6], [3, 2.8], [4.5, 3.6], [6, 3.9], [7.5, 4], [9, 4], [10, 4]] }
          ],
          durumlar: [
            { metin: "Teknoloji aynı kalırsa nüfus **K₁**'e yaklaşıp orada durur." },
            { metin: "Sulama ve yüksek verimli tohum gelir: kapasite çizgisi yükselir, nüfus ==yeni K₂'ye== doğru büyür.", set: { kap: { from: [0, 6], to: [8.5, 6], etiket: "K₂" }, nuf: { noktalar: [[0, 0.8], [1.5, 1.6], [3, 2.8], [4.5, 4.2], [6, 5.4], [7.5, 5.9], [9, 6], [10, 6]] } } },
            { metin: "Makineleşme ve hassas tarım eklenir: kapasite ==K₃==. Toprak aynı, beslenen insan daha çok.", set: { kap: { from: [0, 8], to: [8.5, 8], etiket: "K₃" }, nuf: { noktalar: [[0, 0.8], [1.5, 1.6], [3, 2.8], [4.5, 4.2], [6, 6], [7.5, 7.4], [9, 7.9], [10, 8]] } } }
          ] },
        { tip: "tuzak", metin: "Taşıma kapasitesini değişmez bir sayı sanmak.", yanlis: "Bir toprağın besleyebileceği nüfus sabittir.", dogru: "Teknoloji kapasiteyi ==yukarı== iter; ama aşırı sulama, tuzlanma ve erozyon gibi toprağı bozan uygulamalar uzun vadede onu ==düşürebilir==." }
      ]
    },
    {
      baslik: "Ekonomik baskı altında çiftçinin seçenekleri",
      kisa: "Küçük çiftçi büyür, sözleşir, ortaklaşır, niş ürüne yönelir ya da bırakır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "📏", baslik: "Büyümek", metin: "Komşu araziyi kiralayıp ya da satın alıp ölçeği artırmak." },
            { ikon: "📝", baslik: "Sözleşmeli üretim", metin: "Fiyatı ve alıcıyı baştan garantilemek; karşılığında şirketin koşullarına uymak." },
            { ikon: "🤝", baslik: "Kooperatif", metin: "Gübre alımını ve satışı birlikte yapıp ölçek avantajını paylaşmak." },
            { ikon: "🏷️", baslik: "Niş ürün", metin: "Organik ya da coğrafi işaretli ürünle daha yüksek fiyat almak." },
            { ikon: "🚪", baslik: "Bırakmak", metin: "Araziyi satıp kente taşınmak; bu da büyük işletmelerin payını yükseltir." }
          ] },
        { tip: "not", metin: "Bu seçeneklerin hepsi aynı baskıya cevaptır: ==ölçek avantajı olan büyük işletmeler fiyatı belirlerken küçükler ayakta kalmak için yeni yollar arar.==" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Subsistence* tarım ailenin tüketimi için, *commercial* tarım satış ve kâr için yapılır; ayrım arazinin büyüklüğüne değil ürünün gittiği yere bakar.",
            "*Agribusiness* tarımın girdiden satışa bütün halkalarını yöneten büyük şirket sistemidir; büyük ticari işletmeler küçük aile çiftliklerinin yerini alıyor.",
            "*Economies of scale*: sabit giderler çok ürüne bölününce birim maliyet düşer. 120.000 TL makine: 10 ha'da 12.000, 60 ha'da 2.000 TL/ha.",
            "*Economies of scale* verim artışı değil, birim maliyet düşüşüdür.",
            "*Commodity chain* ürünü girdi, üretim, işleme, dağıtım ve satış halkalarıyla çiftlikten tüketiciye bağlar; değerin büyük kısmı çoğu zaman çiftlikten sonra eklenir.",
            "Teknoloji (sulama, makine, yüksek verimli tohum) *carrying capacity*'yi artırır; toprağı bozan uygulamalar onu düşürebilir.",
            "Makine pahalı olduğu için teknoloji de büyük işletmeye avantaj sağlar.",
            "Küçük çiftçinin seçenekleri: büyümek, sözleşmeli üretim, kooperatif, niş ürün ya da çiftliği bırakmak."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi *subsistence agriculture*'a en iyi örnektir?",
      opts: ["Bir şirketin sözleşmeyle domates yetiştirip salça fabrikasına satması", "Bir ailenin yıl boyunca yiyeceği mısır ve fasulyeyi yetiştirmesi, fazlasını komşusuna vermesi", "Bir çiftçinin ayçiçeği fiyatı yükselince ekim alanını genişletmesi", "Bir kooperatifin fındığı yurt dışına satması"],
      a: 1,
      why: "*Subsistence* tarımda üretimin amacı önce ailenin tüketimidir. Diğer şıkların hepsi satış ve kâr için üretimi anlatır. En çekici yanlış şık A'dır: küçük bir aile çiftliği de sözleşmeyle satış yapıyorsa ticaridir; ayrımı ürünün gittiği yer belirler." },
    { q: "Tabloda iki işletme gösterilmiştir. Aynı biçerdöveri kullanan işletmelerin hektar başına toplam maliyeti ve bu farkın nedeni nedir?",
      fig: { type: "table", caption: "İki işletme", head: ["İşletme", "Alan (ha)", "Yıllık sabit gider (TL)", "Hektar başına değişken gider (TL)"], rows: [["A", 15, "90.000", "1.000"], ["B", 45, "90.000", "1.000"]] },
      opts: ["A: 7.000 TL, B: 3.000 TL; B daha çok ürün aldığı için (verim)", "A: 6.000 TL, B: 2.000 TL; sabit gider hiç hesaba katılmaz", "A: 7.000 TL, B: 3.000 TL; sabit gider daha çok hektara bölündüğü için (*economies of scale*)", "A: 7.000 TL, B: 7.000 TL; ölçek maliyeti değiştirmez"],
      a: 2,
      why: "A: 90.000 ÷ 15 = 6.000 + 1.000 = 7.000 TL/ha. B: 90.000 ÷ 45 = 2.000 + 1.000 = 3.000 TL/ha. Fark ölçekten gelir. En çekici yanlış şık A: tabloda ürün miktarı verilmediği için verim hakkında hiçbir şey söylenemez." },
    { q: "Rize'de bir üretici yaş çayı fabrikaya, fabrika kuru çayı toptancıya, toptancı marketlere, marketler de tüketiciye satıyor. Bu durum aşağıdakilerden hangisini en iyi örneklendirir?",
      opts: ["Bir *commodity chain*: üretimi tüketime bağlayan halkalar dizisi", "*Subsistence agriculture* döngüsü", "*Von Thünen* halkalarının oluşumu", "Teknoloji sayesinde *carrying capacity*'nin artması"],
      a: 0,
      why: "Üretimden tüketime uzanan, her halkada değer eklenen dizi bir *commodity chain*'dir. En çekici yanlış şık D: zincir teknolojiyi içerebilir ama soru taşıma kapasitesini değil halkalar arasındaki bağı anlatıyor." },
    { q: "Son onyıllarda birçok ülkede büyük ticari işletmeler küçük aile çiftliklerinin yerini almıştır. Bu değişimi en iyi hangisi açıklar?",
      opts: ["Küçük çiftlikler hektar başına her zaman daha az ürün alır", "Tüketiciler yalnızca geçimlik tarımla üretilmiş ürünleri tercih eder", "Hükümetler küçük çiftliklere her zaman daha yüksek vergi uygular", "Büyük işletmeler makine ve girdi alımında *economies of scale* yakalayıp ürünü daha ucuza üretebilir"],
      a: 3,
      why: "Büyük işletme birim maliyeti düşürdüğü için fiyat rekabetinde üstündür. En çekici yanlış şık A: *economies of scale* verimle ilgili değil, ürün başına maliyetle ilgilidir; büyük çiftliğin hektar başına verim üstünlüğü kesin değildir." },
    { q: "Kurak bir ovada damla sulama ve yüksek verimli tohum kullanılmaya başlandıktan yıllar sonra, aynı ova daha çok insanı besleyebilmektedir. Bu değişim en iyi hangi kavramla açıklanır?",
      opts: ["Tarımın geçimlikten ticariye geçişi", "Teknolojinin bölgenin *carrying capacity*'sini artırması", "*Commodity chain*'in kısalması", "*Agribusiness*'in aile çiftliğine dönüşmesi"],
      a: 1,
      why: "Teknoloji aynı topraktan daha çok ürün alınmasını sağlayarak sürdürülebilir besleme düzeyini yukarı taşır. En çekici yanlış şık A: ticari tarım da kapasiteyi artırabilir ama sorudaki değişim kullanılan teknolojinin sonucudur, üretim amacının değil." }
  ]
};
