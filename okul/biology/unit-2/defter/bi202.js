/* Kitpath not defteri · bi202 · 2.2 Topluluk ve Popülasyon
   Kaynak: öğretmen lecture'ı (Topic 2.2 Interactions and Changes in Communities and Populations) + okul-10-2025-26.md + MEB Maarif BİY.10.2. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bi202",
  amac: "Canlıların bir arada nasıl yaşadığını öğreneceksin: boş bir alanın ormana dönüşmesi (süksesyon), komünite yapısı, türler arası ilişkiler (av-avcı, savunma, rekabet, simbiyoz) ve popülasyonların yoğunluğu ile büyümesi. Grafikleri ve senaryoları İngilizce yorumlayabileceksin.",
  bolumler: [
    {
      baslik: "Süksesyon: boş alan nasıl orman olur?",
      kisa: "Süksesyon, bir alanda komünitenin zamanla öngörülebilir biçimde değişmesidir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🪨", baslik: "*Primary succession*", maddeler: ["Toprak yok: çıplak kaya, lav, buzul çekilmesi", "Öncü tür: liken, yosun", "Çok yavaş (yüzyıllar)"] },
          sag: { ikon: "🔥", baslik: "*Secondary succession*", maddeler: ["Toprak ve tohum bankası kalmış: yangın, sel, terk edilmiş tarla", "Öncü tür: otlar, ilk fidanlar", "Hızlı (onlarca yıl)"] },
          oyun: [
            { metin: "Yanardağ lavının soğuyup oluşturduğu çıplak kayalık.", cevap: "sol", neden: "Hiç toprak yok: *primary succession*." },
            { metin: "Orman yangınından sonra yeşeren çam fidanları.", cevap: "sag", neden: "Toprak ve tohumlar duruyor: *secondary succession*." },
            { metin: "Terk edilmiş bir tarlanın yıllar içinde çalılığa dönüşmesi.", cevap: "sag", neden: "Toprak zaten var: *secondary succession*." },
            { metin: "Buzulun çekilmesiyle açılan çıplak kaya.", cevap: "sol", neden: "Toprak sıfırdan oluşacak: *primary succession*." },
            { metin: "Fırtınanın devirdiği ağaçların açtığı boşluğun dolması.", cevap: "sag", neden: "Toprak sağlam: *secondary succession*." }
          ] },
        { tip: "grafik", baslik: "Çıplak kayadan klimaks komüniteye", xlabel: "Zaman", ylabel: "Tür sayısı ve biyokütle", xmax: 10, ymax: 10,
          ogeler: [
            { id: "t1", tip: "egri", renk: 0, noktalar: [[0.5, 0.5], [1.5, 1], [2.5, 2]], gizli: true },
            { id: "t2", tip: "egri", renk: 0, noktalar: [[2.5, 2], [3.5, 3.5], [4.5, 5.5]], gizli: true },
            { id: "t3", tip: "egri", renk: 0, etiket: "tür sayısı", noktalar: [[4.5, 5.5], [6, 7], [7.5, 7.8], [9, 8]], gizli: true },
            { id: "b", tip: "egri", renk: 2, etiket: "biyokütle", noktalar: [[0.5, 0.2], [2.5, 0.8], [4.5, 3], [6.5, 6.5], [8, 8.8], [9.5, 9.4]], gizli: true },
            { id: "z1", tip: "yazi", x: 1.4, y: 9.4, metin: "liken, yosun", gizli: true },
            { id: "z2", tip: "yazi", x: 3.6, y: 9.4, metin: "ot, çalı", gizli: true },
            { id: "z3", tip: "yazi", x: 5.9, y: 9.4, metin: "ağaç", gizli: true },
            { id: "z4", tip: "yazi", x: 8.5, y: 9.9, metin: "klimaks", gizli: true }
          ],
          durumlar: [
            { metin: "Çıplak kayada ilk yerleşenler ==*pioneer species*== (öncü türler): likenler ve yosunlar. Kayayı aşındırıp organik madde bırakır; ilk toprak oluşur.", goster: ["t1", "z1"] },
            { metin: "Toprak kalınlaşınca otlar ve çalılar gelir; tür sayısı hızla artar.", goster: ["t2", "z2"] },
            { metin: "Ağaçlar gölge yapar, kök ve yaprak çöpü toprağı zenginleştirir. Işığa ihtiyacı olan öncü türler azalır.", goster: ["t3", "z3"] },
            { metin: "Biyokütle de artar ve yavaşça sabitlenir. Dengeye ulaşmış kararlı komünite ==*climax community*==.", goster: ["b", "z4"] }
          ] },
        { tip: "tuzak", metin: "Orman yangını bir alanı yakıp kül eder ama toprağı ve kökleri yok etmez.", yanlis: "Yangından sonra süksesyon sıfırdan başlar; yani birincildir.", dogru: "Toprak ve tohum duruyorsa ==ikincil==. Birincil süksesyonda önce toprağın kendisi oluşmak zorundadır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Primary succession begins on bare rock where no soil exists.*", metin: "Birincil süksesyon." },
            { ikon: "✍️", baslik: "*Secondary succession occurs where soil remains after a disturbance.*", metin: "İkincil süksesyon." }
          ] }
      ]
    },
    {
      baslik: "Komünite yapısı ve çeşitlilik",
      kisa: "Komünitenin yapısı ve çeşitliliği abiyotik koşullara göre değişir.",
      bloklar: [
        { tip: "tablo", baslik: "Çeşitliliği ne belirler?", head: ["Ortam", "Belirleyen etken", "Sonuç"], rows: [
            ["Karasal", "Enlem, yer şekli, iklim; ışık miktarı ve süresi, nem, sıcaklık, yağış", "Yağışlı tropik bölgelerde tür çeşitliliği fazla; kutup ve çöllerde az"],
            ["Sucul", "Derinlik, kıyıya uzaklık, bulanıklık", "Işık ulaşan yerde fotosentetik canlı çok; derinleştikçe ışık, çözünmüş O₂ ve çeşitlilik azalır"],
            ["Kirlenmiş su", "Evsel ve endüstriyel atık", "Bazı türler anormal artar, birçoğu azalır ya da yok olur"]
          ], not: "Sınavda böyle yaz: *Species diversity is greater in tropical regions with abundant rainfall than in polar regions and deserts.*" },
        { tip: "not", metin: "İki komünite arasındaki geçiş bölgesine *ecotone* denir. Komünitenin yapısı (*community structure*), türlerin birbiriyle ilişkilerine göre düzenlenir: rekabet, av-avcı ve simbiyoz." }
      ]
    },
    {
      baslik: "Av-avcı ilişkisi ve savunma",
      kisa: "Avcı ve av sayıları birbirini döngüsel izler; avlar savunmayla yaşar.",
      bloklar: [
        { tip: "grafik", baslik: "Av ve avcı sayıları nasıl dalgalanır?", xlabel: "Zaman", ylabel: "Birey sayısı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "av", tip: "egri", renk: 0, etiket: "av", noktalar: [[0, 3], [1, 7], [2, 9], [3, 7], [4, 3], [5, 1], [6, 3], [7, 7], [8, 9], [9, 7], [9.5, 5]], gizli: true },
            { id: "avci", tip: "egri", renk: 2, etiket: "avcı", noktalar: [[0, 3.3], [1, 2], [2, 3.3], [3, 5.8], [4, 7], [5, 5.8], [6, 3.3], [7, 2], [8, 3.3], [9, 5.8], [9.5, 6.7]], gizli: true },
            { id: "p1", tip: "nokta", renk: 0, x: 2, y: 9, etiket: "av zirvesi", gizli: true },
            { id: "p2", tip: "nokta", renk: 2, x: 4, y: 7, etiket: "avcı zirvesi", gizli: true },
            { id: "gec", tip: "ok", renk: 1, from: [2.2, 9.6], to: [3.8, 9.6], gizli: true }
          ],
          durumlar: [
            { metin: "Önce yalnızca av popülasyonu: besin bolsa çoğalır, sonra sayısı düşer.", goster: ["av"] },
            { metin: "Avcı eklenince: av çoğaldıkça avcıya yiyecek bol, avcı da çoğalır. Ama bu bir gecikmeyle olur.", goster: ["avci"] },
            { metin: "Avcı zirvesi avın zirvesinden ==sonra== gelir: ==av sayısı avcıyı, avcı sayısı avı== sınırlar.", goster: ["p1", "p2", "gec"] },
            { metin: "Av azalınca avcı aç kalıp azalır, av yeniden çoğalır ve döngü başlar. Klasik örnek: Kanada'da vaşak ile kar ayakkabılı tavşanın yaklaşık 10 yıllık döngüsü." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🍂", terim: "Camouflage", tr: "kamuflaj", tanim: "Av, rengi ve şekliyle çevreye karışır ve fark edilmez; pasif bir savunmadır.", ornek: "Ağaç kabuğuna benzeyen bir güve." },
            { ikon: "🐝", terim: "Mimicry", tr: "taklit", tanim: "Zararsız bir tür, zehirli ya da zararlı bir türe benzer (*Batesian mimicry*).", ornek: "Arıya benzeyen ama sokmayan çiçek sineği." },
            { ikon: "🦎", terim: "Warning coloration", tr: "uyarı rengi", tanim: "Zehirli canlı, parlak renklerle avcıya ==dokunma== der.", ornek: "Ateş semenderinin siyah-sarı derisi." },
            { ikon: "🦔", terim: "Chemical and physical defense", tr: "kimyasal ve fiziksel savunma", tanim: "Zehir, kötü koku, diken ya da sert kabukla korunmak.", ornek: "Kirpinin dikenleri, kaplumbağanın kabuğu." }
          ] },
        { tip: "tuzak", metin: "Kamuflaj ile mimikri çok karışır.", yanlis: "İkisi de aynı şeydir; canlı gizlenir.", dogru: "==Kamuflaj== çevreye karışıp fark edilmemektir; ==mimikri== başka bir türe benzemektir. Uyarı rengi ise tersine fark edilmeyi amaçlar." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*The predator population increases after the prey population increases.*", metin: "Grafikte gecikmeyi anlatır." },
            { ikon: "✍️", baslik: "*Camouflage helps prey avoid detection by predators.*", metin: "Savunma örneği." }
          ] }
      ]
    },
    {
      baslik: "Rekabet: aynı kaynak için yarış",
      kisa: "Aynı sınırlı kaynağı kullanan canlılar birbirini olumsuz etkiler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🌲", baslik: "*Intraspecific competition*", maddeler: ["Aynı türün bireyleri arasında", "En şiddetli olanı: nişleri aynı"] },
          sag: { ikon: "🦁", baslik: "*Interspecific competition*", maddeler: ["Farklı türler arasında", "Nişleri üst üste binen türler"] },
          oyun: [
            { metin: "Aynı ormandaki iki kızılçam ağacının ışık için yarışması.", cevap: "sol", neden: "İkisi de aynı tür: *intraspecific*." },
            { metin: "Aslan ile sırtlanın aynı leşe yönelmesi.", cevap: "sag", neden: "İki farklı tür: *interspecific*." },
            { metin: "Bir göldeki iki sazanın aynı yem için kapışması.", cevap: "sol", neden: "Aynı tür: *intraspecific*." },
            { metin: "Serçe ile kırlangıcın aynı ağaç oyuğunu araması.", cevap: "sag", neden: "Farklı türler aynı barınak için yarışıyor: *interspecific*." }
          ] },
        { tip: "not", metin: "Rus biyolog Gause iki *Paramecium* türünü aynı kapta, aynı besinle yetiştirdi: *P. aurelia* üstün geldi, *P. caudatum* yok oldu. İki tür ayrı kaplarda ise rahatça yaşadı. Buna ==*competitive exclusion principle*== (rekabetle dışlama) denir: ==aynı nişi paylaşan iki tür uzun süre birlikte yaşayamaz.== Çıkış yolu niş ayrılmasıdır." },
        { tip: "liste", maddeler: [
            { ikon: "✍️", baslik: "*Interspecific competition occurs between different species, whereas intraspecific competition occurs within the same species.*", metin: "İki rekabet türünü tek cümlede ayırır." }
          ] }
      ]
    },
    {
      baslik: "Simbiyoz: yakın ve uzun süreli birliktelik",
      kisa: "Simbiyozun türü, iki tarafın kazanç ve zararına göre belirlenir.",
      bloklar: [
        { tip: "tablo", baslik: "Dört simbiyoz türü", head: ["İlişki", "Tür 1", "Tür 2", "Örnek"],
          rows: [
            ["Mutualizm (*mutualism*)", "+", "+", "Liken (mantar + alg), mikoriza, *Paramecium bursaria* + *Chlorella*, baklagil + *Rhizobium*"],
            ["Kommensalizm (*commensalism*)", "+", "0", "Köpek balığı ve remora; balina ya da deniz kaplumbağasına tutunan midye kabuklusu (*barnacle*)"],
            ["Amensalizm (*amensalism*)", "0", "−", "Ceviz ağacının salgısı altındaki otsu bitkilerin büyümesini engeller"],
            ["Parazitlik (*parasitism*)", "+", "−", "Kene ve memeli; ökseotu ve ağaç"]
          ], not: "+ yarar görür · 0 etkilenmez · − zarar görür. Sınavda böyle yaz: *Mutualism is a relationship in which both species benefit.* *In commensalism, one species benefits and the other is neither helped nor harmed.* *In parasitism, the parasite benefits at the expense of the host.*" },
        { tip: "ikili", sol: { ikon: "🤝", baslik: "*Mutualism*", maddeler: ["İki taraf da yarar görür (+ / +)"] },
          sag: { ikon: "🦟", baslik: "*Parasitism*", maddeler: ["Parazit yarar, konak zarar görür (+ / −)"] },
          oyun: [
            { metin: "Likende mantar su ve koruma, alg besin sağlar.", cevap: "sol", neden: "İki taraf da kazanıyor: *mutualism*." },
            { metin: "Kene, hayvanın kanını emer; hayvan zayıflar.", cevap: "sag", neden: "Biri kazanıyor, diğeri zarar görüyor: *parasitism*." },
            { metin: "Baklagil kökündeki *Rhizobium* azot bağlar, bitki ona şeker verir.", cevap: "sol", neden: "Karşılıklı yarar: *mutualism*." },
            { metin: "Ökseotu ağaçtan su ve mineral çeker; ağaç zayıflar.", cevap: "sag", neden: "Ağaç zarar görüyor: *parasitism*." },
            { metin: "Anemon balığı anemonun dokunaçlarında korunur, anemonu temiz tutar.", cevap: "sol", neden: "İki taraf da yarar görür: *mutualism*." }
          ] },
        { tip: "tuzak", metin: "Kommensalizmde yalnızca bir taraf yarar görür, ötekinin ne kazancı ne zararı vardır.", yanlis: "Kommensalizm ile parazitliği ayırmak zordur; ikisinde de biri yarar görür.", dogru: "Sorun ==zarar var mı?==: zarar varsa parazitlik, yoksa kommensalizm. Ayrıca parazit konağını genelde hemen öldürmez; avcı ise avını öldürür." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🪰", terim: "Ectoparasite", tr: "dış parazit", tanim: "Konağın üstünde yaşar; kan, deri ya da kılla beslenir ve hastalık bulaştırabilir.", ornek: "Bit, pire, kene, sülük, sivrisinek." },
            { ikon: "🪱", terim: "Endoparasite", tr: "iç parazit", tanim: "Konağın sindirim sistemi ya da vücut sıvılarında yaşar; çok hızlı ürer ve zarar verir.", ornek: "Tenya, bağırsak solucanı." },
            { ikon: "🌿", terim: "Semi-parasitic plant", tr: "yarı parazit bitki", tanim: "Klorofili vardır, fotosentez yapar; konaktan yalnız su ve mineral alır.", ornek: "Ökseotu." },
            { ikon: "🥀", terim: "Fully parasitic plant", tr: "tam parazit bitki", tanim: "Kloroplastı yoktur, fotosentez yapamaz; tüm maddeleri konaktan alır.", ornek: "Küsküt (*Cuscuta*, dodder)." }
          ] }
      ]
    },
    {
      baslik: "Popülasyon yoğunluğu",
      kisa: "Yoğunluk, birim alandaki (ya da hacimdeki) birey sayısıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Yoğunluk", alt: "birey / alan" }, "=",
            { t: "Birey sayısı", alt: "N" }, "÷",
            { t: "Alan ya da hacim", alt: "m², km², L" }
          ], aciklama: "Birimi hep yaz: kuş/km², papatya/m². Sınavda böyle yaz: *Population density is the number of individuals per unit area.*" },
        { tip: "ornek", baslik: "Çayırdaki papatyaları tahmin et (ek bilgi)", durum: "Bir çayır 200 m². Rastgele atılan beş adet 1 m²'lik çerçevede (*quadrat*) sırayla 4, 6, 3, 7 ve 5 papatya sayılıyor. Çayırda yaklaşık kaç papatya vardır?",
          adimlar: [
            "Ortalama yoğunluk = (4 + 6 + 3 + 7 + 5) ÷ 5 = 25 ÷ 5 = 5 papatya/m².",
            "Toplam alan 200 m² olduğuna göre toplam = 5 × 200 = 1000 papatya.",
            "Çerçeveler ==rastgele== atılmalı ve ne kadar çok çerçeve olursa tahmin o kadar güvenilir olur."
          ], sonuc: "Yaklaşık 1000 papatya." },
        { tip: "tuzak", metin: "Yoğunluk tek bir ortalama sayıdır.", yanlis: "Yoğunluk yüksekse bireyler alana eşit dağılmıştır.", dogru: "Aynı yoğunlukta bireyler kümelenmiş, düzgün ya da rastgele dağılabilir. Yoğunluk \"ne kadar\", dağılım \"nasıl\" sorusunu yanıtlar." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🟣", terim: "Clumped distribution", tr: "kümelenmiş dağılım", tanim: "Bireyler gruplar hâlinde toplanır.", ornek: "Sürü hayvanları, kaynağın yoğun olduğu yerler." },
            { ikon: "🎲", terim: "Random distribution", tr: "rastgele dağılım", tanim: "Bireylerin konumu birbirinden bağımsızdır.", ornek: "Rüzgârla yayılan tohumlardan çıkan otlar." },
            { ikon: "🔲", terim: "Uniform (regular) distribution", tr: "düzgün dağılım", tanim: "Bireyler aralarında eşit uzaklık bırakır.", ornek: "Kendi bölgesini koruyan hayvanlar." }
          ] }
      ]
    },
    {
      baslik: "Popülasyon büyümesi ve taşıma kapasitesi",
      kisa: "Sınırsız kaynakta J eğrisi, sınırlı kaynakta S eğrisi görülür.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Değişim", alt: "ΔN" }, "=",
            { t: "Doğum", alt: "B" }, "+", { t: "İçe göç", alt: "I" }, "−",
            { t: "Ölüm", alt: "D" }, "−", { t: "Dışa göç", alt: "E" }
          ], aciklama: "Doğum ve içe göç sayıyı artırır; ölüm ve dışa göç azaltır." },
        { tip: "grafik", baslik: "J eğrisi mi, S eğrisi mi?", xlabel: "Zaman", ylabel: "Birey sayısı", xmax: 10, ymax: 10,
          ogeler: [
            { id: "j", tip: "egri", renk: 3, kesik: true, etiket: "J: sınırsız kaynak", noktalar: [[0, 0.5], [2, 0.9], [4, 1.7], [6, 3], [8, 5.5], [9.5, 8.6]], gizli: true },
            { id: "s", tip: "egri", renk: 0, etiket: "S: gerçek ortam", noktalar: [[0, 0.5], [1, 1.1], [2, 2.2], [3, 3.7], [4, 5.2], [5, 6.1], [6, 6.6], [8, 6.95], [9.5, 7]], gizli: true },
            { id: "k", tip: "cizgi", renk: 2, kesik: true, from: [0, 7], to: [10, 7], gizli: true },
            { id: "kl", tip: "yazi", x: 2.7, y: 7.6, metin: "K: taşıma kapasitesi", gizli: true },
            { id: "e1", tip: "yazi", x: 0.9, y: 2.6, metin: "yavaş", gizli: true },
            { id: "e2", tip: "yazi", x: 3.4, y: 2.3, metin: "hızlı artış", gizli: true },
            { id: "e3", tip: "yazi", x: 8.2, y: 5.8, metin: "denge", gizli: true }
          ],
          durumlar: [
            { metin: "Kaynaklar sınırsızsa popülasyon ==üstel== artar: J eğrisi. Gerçekte uzun süre sürmez.", goster: ["j"] },
            { metin: "Gerçek ortamda kaynak sınırlıdır; büyüme yavaşlar ve S biçimli eğri oluşur.", goster: ["s"] },
            { metin: "Eğri bir tavana yaklaşır: ==*carrying capacity*== (taşıma kapasitesi, K). Ortamın taşıyabileceği en çok birey sayısı. Büyümeyi engelleyen her biyotik ya da abiyotik etken ==*environmental resistance*== (çevre direnci) olup K'ya yaklaştıkça artar.", goster: ["k", "kl"] },
            { metin: "S eğrisinin üç evresi: yavaş başlangıç, hızlı artış, denge. Dengede doğum + içe göç ≈ ölüm + dışa göç.", goster: ["e1", "e2", "e3"] }
          ] },
        { tip: "not", metin: "(Ek bilgi) K'yi düşüren etkenlerin bir kısmı yoğunluğa bağlıdır (*density-dependent*): besin, rekabet, hastalık, avcı. Popülasyon büyüdükçe etkileri artar. Bir kısmı yoğunluktan bağımsızdır (*density-independent*): yangın, sel, don, kuraklık. Popülasyon küçük de olsa aynı etkiyi yapar. Sınavda böyle yaz: *The population levels off at the carrying capacity.*" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Birincil süksesyon topraksız yerde (kaya, lav), ikincil süksesyon toprak kalmış yerde (yangın, tarla) başlar; öncü türler → klimaks.",
            "Av-avcı grafiğinde avcı zirvesi avın zirvesinden sonra gelir; ikisi birbirini sınırlar.",
            "Komünite çeşitliliği yağışlı tropiklerde fazladır; suda derinlikle azalır. Kamuflaj gizlenir, mimikri başka türe benzer, uyarı rengi dikkat çeker.",
            "Rekabet: türiçi (aynı tür) ve türler arası; aynı nişi paylaşan iki tür birlikte yaşayamaz.",
            "Simbiyoz: mutualizm (+/+), kommensalizm (+/0), amensalizm (0/−), parazitlik (+/−).",
            "Yoğunluk = birey sayısı ÷ alan; dağılım kümelenmiş, rastgele ya da düzgün olabilir.",
            "ΔN = doğum + içe göç − ölüm − dışa göç.",
            "J eğrisi sınırsız kaynakta, S eğrisi sınırlı kaynakta; K taşıma kapasitesidir."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "After a forest fire, grasses appear in the same area in the first year, shrubs a few years later and then pine seedlings. What is this process?",
      opts: ["Primary succession", "Secondary succession", "Biomagnification", "Competitive exclusion"],
      a: 1,
      why: "Yangın toprağı ve kökleri yok etmediği için süreç ikincil süksesyondur. Birincil süksesyon çıplak kayada ya da lavda başlar, yani toprak yoktur."
    },
    {
      q: "The table shows the numbers of hares and lynx on an island. Which conclusion is correct?",
      fig: { type: "table", head: ["Year", "1", "2", "3", "4", "5", "6"], rows: [["Hare", 300, 800, 500, 200, 100, 400], ["Lynx", 20, 30, 70, 80, 30, 20]], caption: "Prey and predator numbers" },
      opts: ["The lynx peak comes first because the hares increase when lynx increase.", "The peaks of both populations occur in the same year.", "The predator peak follows the prey peak; the lynx can still increase for a while as the hares decline.", "The decrease in hares does not affect the number of lynx."],
      a: 2,
      why: "Tavşan 2. yılda, vaşak 4. yılda zirve yapıyor: avcı avı gecikmeyle izler. Tavşanın azalması da sonunda vaşakları azaltır (5. ve 6. yıl); bu yüzden son şık yanlış. İlk şık nedeni sonucla karıştırıyor."
    },
    {
      q: "An orchid grows on a branch of a rainforest tree and reaches light more easily; the tree is neither helped nor harmed. What is this relationship?",
      opts: ["Commensalism", "Mutualism", "Parasitism", "Interspecific competition"],
      a: 0,
      why: "Orkide yarar (+) ağaç etkilenmiyor (0): kommensalizm. Ağaç zarar görseydi parazitlik, ikisi de yarar görseydi mutualizm olurdu."
    },
    {
      q: "In a 5 km² area of a wetland, 1000 flamingos were counted. If the area stays the same and one year later the density is 300 flamingos/km², how many flamingos are there?",
      opts: ["60", "1200", "1800", "1500"],
      a: 3,
      why: "Birey sayısı = yoğunluk × alan = 300 × 5 = 1500. 60, alanı yoğunluğa bölmekten çıkar; yoğunluğun birimi birey/alan olduğundan sayıyı bulmak için çarpmak gerekir."
    },
    {
      q: "The size of a herd of deer released on a small island is given in the table. Which statement can be made?",
      fig: { type: "table", head: ["Year", "0", "1", "2", "3", "4", "5", "6"], rows: [["Number of deer", 10, 20, 40, 70, 95, 100, 100]], caption: "Deer population" },
      opts: ["The population grows without limit and the carrying capacity is 10.", "Growth stopped after year 5; the carrying capacity is about 100 and resources are limited.", "All the deer died in year 6.", "The number of births equals the number of deaths every year."],
      a: 1,
      why: "Sayı önce hızlı artıp 100 civarında sabitleniyor: S eğrisi ve K ≈ 100. Doğum ve ölüm eşitliği yalnızca dengede (5. yıldan sonra) geçerlidir, bütün yıllarda değil."
    }
  ]
};
