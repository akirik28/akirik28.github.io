/* Kitora not defteri · mc101 · 1.1 Kıtlık ve Ekonomist Gibi Düşünmek
   Kaynak: ap-videolar/src/episodes/mc101 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc101",
  ozet: "Ekonominin ilk kavramı *scarcity*: istekler sınırsız, kaynaklar sınırlı; bu yüzden seçmek zorundayız. Bu defterde dört üretim faktörünü, *micro* ile *macro* farkını, *positive* ile *normative* cümleleri ve ==marjinal düşünmeyi== göreceksin.",
  bolumler: [
    {
      baslik: "Görünmeyeni gör",
      bloklar: [
        { tip: "hikaye", ikon: "✈️", baslik: "1943: delik deşik dönen uçaklar",
          metin: "Bombardıman uçakları görevden kanatları, kuyruğu ve gövdesi delik deşik dönüyor. Komutanlar zırhı en çok delik olan yere koymak istiyor. Matematikçi Abraham Wald itiraz ediyor: zırhı delik OLMAYAN yere koyun. Çünkü motorundan vurulan uçaklar hiç dönmedi; onları kimse saymadı." },
        { tip: "not", metin: "Ders: en bariz cevap bazen yanlıştır. ==Görüneni ve görünmeyeni birlikte tartmak==, ekonomist gibi düşünmenin ta kendisidir. Bu fikir defterin sonunda tost ve hız sınırı örnekleriyle geri gelecek." }
      ]
    },
    {
      baslik: "*Scarcity*: kıtlık",
      bloklar: [
        { tip: "not", metin: "Neden uçağın her yerini zırhlamadılar? Çok ağır olur, uçamaz; üstelik o çelikle tank da yapılabilirdi. Kaynak sınırlıysa her kullanım başka bir kullanımdan vazgeçmek demektir." },
        { tip: "formul", parcalar: [
            { t: "Sınırsız istekler", alt: "konser, maç, ders, doğum günü…" }, "+",
            { t: "Sınırlı kaynaklar", alt: "24 saat, 500 TL harçlık" }, "=",
            { t: "*Scarcity*", alt: "seçmek zorundasın" }
          ], aciklama: "Kıtlık seni seçmeye zorlar; seçmek de her zaman bir şeyden vazgeçmek demektir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⏳", terim: "Scarcity", tr: "kıtlık", tanim: "İsteklerin sınırsız, kaynakların sınırlı olması. ==Hiç bitmez==; en zengin ülkede bile vardır.", ornek: "Cumartesin 24 saat; hem konsere hem maça hem derse yetmiyor." },
            { ikon: "🎟️", terim: "Shortage", tr: "kıtlık değil: eksiklik", tanim: "Belli bir fiyattan istenen miktarın satılandan fazla olması. ==Geçicidir==: fiyat yükselir ya da arz artarsa kapanır.", ornek: "Konser biletleri 5 dakikada tükendi." },
            { ikon: "📚", terim: "Economics", tr: "ekonomi bilimi", tanim: "Kıt kaynakları sınırsız isteklere karşı nasıl kullandığımızı inceleyen sosyal bilim. Paranın değil, kıtlığın bilimi.", ornek: "Bireyler, firmalar ve devletler kıt kaynakla nasıl seçim yapar?" }
          ] },
        { tip: "ikili", sol: { ikon: "⏳", baslik: "*Scarcity*", maddeler: ["Kalıcı ve evrensel", "Her ülkede, her zaman", "Seçim yapmayı zorunlu kılar"] },
          sag: { ikon: "🎟️", baslik: "*Shortage*", maddeler: ["Geçici", "Belli bir fiyatta, belli bir piyasada", "Fiyat yükselince ya da arz artınca kapanır"] },
          oyun: [
            { metin: "Dünyada herkese yetecek kadar temiz su ve zaman yok.", cevap: "sol", neden: "Bitmeyen, genel bir sınır: *scarcity*." },
            { metin: "Yeni çıkan telefon mağazada ilk gün tükendi.", cevap: "sag", neden: "O fiyattan isteyen, satılandan fazla; stok gelince kapanır: *shortage*." },
            { metin: "Zengin bir ülkenin bile hastane, okul ve yol için sınırlı bütçesi var.", cevap: "sol", neden: "Zenginlik kıtlığı ortadan kaldırmaz: *scarcity*." },
            { metin: "Bayram öncesi otobüs biletleri satışta yok.", cevap: "sag", neden: "Belli bir tarihte, belli bir fiyatta eksik: *shortage*." }
          ] },
        { tip: "tuzak", metin: "\"Zengin ülkelerde *scarcity* yoktur\" cümlesi yanlıştır.", yanlis: "Kıtlık sadece fakir ülkelerin sorunudur.", dogru: "*Scarcity* her yerde vardır; *shortage* geçici bir eksikliktir." }
      ]
    },
    {
      baslik: "Bedava öğle yemeği yoktur",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🥪", baslik: "*No free lunch*", metin: "Okulun bedava dağıttığı yemek bile bedava değil: un, fırın ve aşçının emeği başka bir işte de kullanılabilirdi." },
            { ikon: "💵", baslik: "Para bir kaynak değildir", metin: "Fırına bir tomar banknot koy; tek dilim pizza çıkmaz. Para alışverişi kolaylaştırır ama kendisi bir şey üretmez." },
            { ikon: "🏭", baslik: "Gerçek kaynaklar: *factors of production*", metin: "Üretimde kullanılan dört faktör: *land*, *labor*, *capital*, *entrepreneurship*." }
          ] },
        { tip: "tuzak", metin: "Sınavda \"*money*\" ya da \"*financial capital*\" şıkkı, üretim faktörü sorularında neredeyse her zaman çeldiricidir.", yanlis: "Para bir *factor of production*'dır.", dogru: "Ekonomide *capital* = makine, alet, bina gibi insan yapımı üretim araçları." }
      ]
    },
    {
      baslik: "Dört üretim faktörü",
      bloklar: [
        { tip: "harita", merkez: "*Factors of production*", dallar: [
            { baslik: "1 · *Land*", alt: "Bütün doğal kaynaklar: buğday, su, petrol → *rent*" },
            { baslik: "2 · *Labor*", alt: "İnsan emeği: hamuru açan çırak → *wages*" },
            { baslik: "3 · *Capital*", alt: "İnsan yapımı alet ve makine: fırın → *interest*" },
            { baslik: "4 · *Entrepreneurship*", alt: "Hepsini bir araya getirip riski alan girişimci → *profit*" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🌾", terim: "Land", tr: "doğal kaynaklar", tanim: "Doğadan gelen her şey: toprak, su, maden, petrol, orman.", ornek: "Pizzanın buğdayı, fırının yandığı doğal gaz." },
            { ikon: "👩‍🍳", terim: "Labor", tr: "emek", tanim: "İnsanların üretime kattığı fiziksel ve zihinsel çaba.", ornek: "Hamuru açan çırağın çalışması." },
            { ikon: "🔥", terim: "Physical capital", tr: "fiziksel sermaye", tanim: "Başka malları üretmek için yapılmış alet, makine ve binalar.", ornek: "Pizza fırını, dükkânın kendisi." },
            { ikon: "🎓", terim: "Human capital", tr: "beşerî sermaye", tanim: "İşçinin eğitimi, becerisi ve deneyimi. ==Daha çok işçi değil, daha iyi işçi.==", ornek: "Ustanın yıllarca öğrendiği hamur tekniği. Bu defteri okurken seninki de artıyor." },
            { ikon: "🚀", terim: "Entrepreneurship", tr: "girişimcilik", tanim: "Diğer üç faktörü bir araya getirip yeni bir iş kuran ve riski üstlenen yetenek.", ornek: "Dükkânı açıp her şeyi organize eden kişi." }
          ] },
        { tip: "tablo", baslik: "Her faktörün kazancı", head: ["Faktör", "Kazancı", "Pizzacıda"], rows: [
            ["*Land*", "*Rent*", "Dükkânın arsası için ödenen kira"],
            ["*Labor*", "*Wages*", "Çırağın maaşı"],
            ["*Capital*", "*Interest*", "Fırın için alınan kredinin faizi"],
            ["*Entrepreneurship*", "*Profit*", "Her şey ödendikten sonra kalan kâr"]
          ], not: "Sırayı akılda tutmanın yolu: L-L-C-E → R-W-I-P." },
        { tip: "tuzak", baslik: "Kelime tuzağı", metin: "Ekonomide *investment*, sermaye malına (makine, bina) yapılan harcamadır.", yanlis: "Hisse senedi almak ekonomik anlamda *investment*'tır.", dogru: "Yeni fırın almak *investment*'tır; hisse almak sadece bir finansal varlık alışverişidir." }
      ]
    },
    {
      baslik: "*Micro* mu *macro* mu?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔍", baslik: "*Microeconomics*", maddeler: ["Bireyler, firmalar, tek tek piyasalar", "Bir pizzacının fiyatı ve maliyeti", "Kaç işçi alınacağı"] },
          sag: { ikon: "🌍", baslik: "*Macroeconomics*", maddeler: ["Ekonominin bütünü", "İşsizlik, enflasyon, büyüme", "Devlet harcaması, dış ticaret, Merkez Bankası"] },
          oyun: [
            { metin: "Türkiye'nin ulusal işsizlik oranı yükseldi.", cevap: "sag", neden: "Bütün ülke: *macro*." },
            { metin: "Bir kafe, kahve fiyatını 10 lira artırdı.", cevap: "sol", neden: "Tek firma, tek fiyat: *micro*." },
            { metin: "Merkez Bankası faiz oranını düşürdü.", cevap: "sag", neden: "Ülke çapında para politikası: *macro*." },
            { metin: "Kuraklık yüzünden domates piyasasında fiyatlar arttı.", cevap: "sol", neden: "Tek bir piyasa: *micro*." },
            { metin: "Ülkede genel fiyat düzeyi bir yılda %40 arttı.", cevap: "sag", neden: "Enflasyon bütün ekonomiyi ölçer: *macro*." }
          ] },
        { tip: "not", metin: "İpucu: \"ulusal\", \"genel fiyat düzeyi\", \"ülkenin\" gibi kelimeler gördüğünde kamerayı uzaklaştır: ==*macro*==. Tek firma, tek ürün, tek sektör: ==*micro*==." }
      ]
    },
    {
      baslik: "*Positive* mi *normative* mi?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔬", baslik: "*Positive statement*", maddeler: ["Ne olduğunu söyler", "Veriyle test edilebilir", "\"Asgari ücret artarsa bazı işletmeler daha az işçi alır.\""] },
          sag: { ikon: "⚖️", baslik: "*Normative statement*", maddeler: ["Ne olması gerektiğini söyler", "Bir değer yargısıdır", "\"Asgari ücret artırılmalı.\""] },
          oyun: [
            { metin: "Devlet üniversiteyi herkese ücretsiz yapmalı.", cevap: "sag", neden: "\"-malı\" bir değer yargısı: *normative*." },
            { metin: "Sigara vergisi artınca sigara satışları düştü.", cevap: "sol", neden: "Veriyle kontrol edilebilir: *positive*." },
            { metin: "Enflasyon, işsizlikten daha kötü bir sorundur.", cevap: "sag", neden: "\"daha kötü\" bir yargı: *normative*." },
            { metin: "Ay peynirden yapılmıştır.", cevap: "sol", neden: "Yanlış ama test edilebilir bir iddia; yine de *positive*." }
          ] },
        { tip: "tuzak", baslik: "En sık düşülen tuzak", metin: "*Positive* \"doğru\" demek değildir. Yanlış ama test edilebilir bir iddia da *positive*'dir.", yanlis: "Yanlış olan cümle *normative*'dir.", dogru: "*should*, *ought*, *better*, *best*, *fair*, \"-malı\", \"gerekir\" varsa *normative*." },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🧠", baslik: "*Theoretical economics*", maddeler: ["Teori kurar", "Ekonominin nasıl işlediğini açıklar"] },
          sag: { ikon: "🛠️", baslik: "*Policy economics*", maddeler: ["Teoriyi gerçek sorunlara uygular", "Ne yapılacağına karar verir"] } }
      ]
    },
    {
      baslik: "Görünen ve görünmeyen",
      bloklar: [
        { tip: "adimlar", baslik: "Kantin tostu 10 liraya sabitlenirse", adimlar: [
            { baslik: "Görünen", metin: "Herkes ucuz tost yer. Öğrenci meclisi alkışlanır." },
            { baslik: "Görünmeyen 1", metin: "Kantin her tostta zarar eder." },
            { baslik: "Görünmeyen 2", metin: "Zarar etmemek için daha az tost yapar." },
            { baslik: "Sonuç", metin: "Tost azalır, kuyruk uzar. Ucuz tost, bulunmayan tost olur." }
          ] },
        { tip: "ornek", baslik: "Hız sınırı saatte 10 km olsa?", durum: "Trafik kazalarını tamamen bitirmek istiyoruz. Hız sınırını saatte 10 kilometreye indirelim.",
          adimlar: ["Fayda: kazalar neredeyse biter.", "Maliyet: herkes okula 3 saatte gider; mallar geç gelir, iş saatleri kaybolur.", "Maliyet faydadan çok daha büyük."],
          sonuc: "Fayda tek başına yetmez; ==fayda maliyetten büyük olmalı.==" }
      ]
    },
    {
      baslik: "Marjinal düşünmek",
      bloklar: [
        { tip: "not", metin: "Çoğu karar \"hepsi ya da hiç\" değil, şu sorudur: ==bir tane daha mı?== *Marginal*, \"ek\" demektir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "➕", terim: "Marginal benefit", tr: "ek fayda (MB)", tanim: "Bir birim daha almanın ya da yapmanın sağladığı ek fayda.", ornek: "İkinci pizza diliminin sana değeri: 50 TL." },
            { ikon: "💸", terim: "Marginal cost", tr: "ek maliyet (MC)", tanim: "Bir birim daha almanın ya da üretmenin ek maliyeti.", ornek: "Her dilim 30 TL." }
          ] },
        { tip: "grafik", baslik: "Kaç dilim pizza yemeli?", xlabel: "Dilim", ylabel: "TL", xmax: 4, ymax: 10, xticks: [{ v: 1, label: "1." }, { v: 2, label: "2." }, { v: 3, label: "3." }], yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 8.4, metin: "80 TL", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 5.4, metin: "50 TL", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 2.4, metin: "20 TL", gizli: true },
            { id: "mc", tip: "cizgi", renk: 0, kesik: true, from: [0, 3], to: [4, 3], etiket: "", gizli: true },
            { id: "mcl", tip: "yazi", x: 3.95, y: 3.35, metin: "MC = 30 TL", hiza: "end", gizli: true },
            { id: "ok3", tip: "yazi", x: 3, y: 4.2, metin: "✗ dur", gizli: true },
            { id: "ok1", tip: "yazi", x: 1, y: 9.3, metin: "✓ ye", gizli: true },
            { id: "ok2", tip: "yazi", x: 2, y: 6.3, metin: "✓ ye", gizli: true }
          ],
          durumlar: [
            { metin: "Her dilim 30 TL. Bu, her ek dilimin ==*marginal cost*=='u.", goster: ["mc", "mcl"] },
            { metin: "İlk dilim sana 80 TL değerinde. 80 > 30: ye.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 8], [0.65, 8]] } }, goster: ["t1", "ok1"] },
            { metin: "İkinci dilim 50 TL değerinde. 50 > 30: yine ye.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] } }, goster: ["t2", "ok2"] },
            { metin: "Üçüncü dilim sadece 20 TL değerinde. 20 < 30: ==dur.==", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2], [2.65, 2]] } }, goster: ["t3", "ok3"] }
          ] },
        { tip: "formul", parcalar: [{ t: "MB > MC", alt: "ek fayda ek maliyetten büyük" }, "→", { t: "devam", alt: "bir tane daha" }, { t: "MB < MC", alt: "ek fayda daha küçük" }, "→", { t: "dur", alt: "son birimi alma" }] },
        { tip: "tuzak", metin: "Üç dilimin toplam faydası 150 TL, toplam maliyeti 90 TL. \"Toplamda kârdayım, üçüncüyü de yerim\" demek yanlıştır.", yanlis: "Toplam fayda toplam maliyetten büyükse devam et.", dogru: "Karar ==sıradaki birime== göre verilir: son dilimin MB'si MC'nin altındaysa dur." }
      ]
    },
    {
      baslik: "*Ceteris paribus* ve beş varsayım",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧊", terim: "Ceteris paribus", tr: "diğer her şey sabitken", tanim: "Bir değişkenin etkisini görmek için diğer her şeyi sabit tutarız.", ornek: "Tost zamlanırsa daha az tost alınır; harçlığın ve öteki fiyatlar aynı kalırsa." },
            { ikon: "🎯", terim: "Self-interest", tr: "kişisel çıkar", tanim: "İnsanların kendi faydasını artırmaya çalışması. Bencillik değil; kendi hedefine göre seçim yapmak.", ornek: "En çok sevdiğin şeye harçlığını harcamak." }
          ] },
        { tip: "adimlar", baslik: "Dersin beş temel varsayımı", adimlar: [
            { baslik: "Kaynaklar sınırlıdır", metin: "*Scarcity* her yerde." },
            { baslik: "Her seçimin bir maliyeti vardır", metin: "*No free lunch*." },
            { baslik: "Herkes kendi faydasını artırmaya çalışır", metin: "*Self-interest*." },
            { baslik: "Kararlar marjinalde verilir", metin: "\"Bir tane daha mı?\" sorusu: MB ile MC karşılaştırılır." },
            { baslik: "Dünya basit modellerle anlatılır", metin: "Grafikler ve modeller, *ceteris paribus* ile gerçeği sadeleştirir." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Scarcity*: sınırsız istek, sınırlı kaynak; kalıcıdır. *Shortage* ise geçici bir eksikliktir.",
            "*No free lunch*: her seçimin bir maliyeti vardır.",
            "Para bir kaynak değildir. Dört faktör: *land*, *labor*, *capital*, *entrepreneurship* → *rent*, *wages*, *interest*, *profit*.",
            "*Human capital* daha iyi işçi demektir; *physical capital* alet ve makinedir.",
            "*Micro* parçalara (firma, piyasa), *macro* bütüne (işsizlik, enflasyon, büyüme) bakar.",
            "*Positive* olanı söyler ve test edilir; *normative* olması gerekeni söyler.",
            "Görüneni ve görünmeyeni birlikte tart: fayda maliyetten büyük olmalı.",
            "MB > MC ise devam, MB < MC ise dur; toplamlara değil sıradaki birime bak.",
            "*Ceteris paribus*: diğer her şey sabitken."
          ] }
      ]
    }
  ]
};
