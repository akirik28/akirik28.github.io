/* Kitpath not defteri · mc203 · 2.3 İşsizlik
   Kaynak: College Board CED, Topic 2.3 (MEA-1.C, D, E). Blok türleri: /ap/_kit/defter.js başı.
   Not: grafikteki gerçek işsizlik eğrisi, doğal oranın (5) etrafında hesaplanan noktalardan çizilir. */
window.DEFTER = (function () {
  /* gerçek işsizlik: 0…10 arası dalga; doğal oran 5. Pozitif yarı (0–5) daralma, negatif yarı (5–10) canlanma */
  var egri = [], pozitif = [], negatif = [];
  for (var i = 0; i <= 20; i++) {
    var x = i * 0.5, s = Math.sin(2 * Math.PI * x / 10);
    var u = Math.round((5 + (s > 0 ? 3 * s : 1.2 * s)) * 100) / 100;
    egri.push([x, u]);
    if (x <= 5) pozitif.push([x, u]);
    if (x >= 5) negatif.push([x, u]);
  }

  return {
    slug: "mc203",
    amac: "Bu konu işsizliğin nasıl ölçüldüğünü anlatıyor. İşgücünü, işsizlik oranını ve işgücüne katılım oranını hesaplayacak, işsizlik oranının neden eksik gösterdiğini ve sürtünmeli, yapısal, konjonktürel işsizlik ile doğal oranı öğreneceksin.",
    bolumler: [
      {
        baslik: "İşgücü kimlerden oluşur?",
        kisa: "İşgücü = çalışanlar + aktif iş arayanlar; geri kalan yetişkinler işgücü dışıdır.",
        bloklar: [
          { tip: "harita", merkez: "Yetişkin nüfus (AP'de 16 yaş ve üstü)", dallar: [
              { baslik: "*Labor force*", alt: "İşgücü = çalışanlar + işsizler" },
              { baslik: "*Employed*", alt: "Çalışan: işgücünün çalışan kısmı" },
              { baslik: "*Unemployed*", alt: "İşsiz: çalışmıyor, aktif iş arıyor ve çalışabilir" },
              { baslik: "*Not in the labor force*", alt: "İşgücü dışı: öğrenci, emekli, ev işine bakan, aramayı bırakan" }
            ] },
          { tip: "ikili", sol: { ikon: "🔎", baslik: "İşsiz (işgücünde)", maddeler: ["Çalışmıyor", "Aktif olarak iş arıyor, çalışmaya hazır"] },
            sag: { ikon: "🚪", baslik: "İşgücü dışı", maddeler: ["Çalışmıyor ve iş de aramıyor", "İşsiz sayılmaz"] },
            oyun: [
              { metin: "Mezun olan Deniz her gün ilanlara bakıp başvuru yapıyor.", cevap: "sol", neden: "Çalışmıyor ama aktif arıyor: işsiz." },
              { metin: "Sınava hazırlanan, iş aramayan üniversite öğrencisi.", cevap: "sag", neden: "İş aramıyor: işgücü dışı." },
              { metin: "İş bulamayacağını düşünüp aramayı bırakan Kemal.", cevap: "sag", neden: "Aramayı bıraktı: işgücü dışı (*discouraged worker*)." },
              { metin: "Fabrikası kapanan Elif hemen yeni başvurular yapıyor.", cevap: "sol", neden: "Aktif arıyor: işsiz." },
              { metin: "Emekli olup torunlarına bakan Nermin teyze.", cevap: "sag", neden: "İş aramıyor: işgücü dışı." }
            ] }
        ]
      },
      {
        baslik: "İşsizlik oranı ve işgücüne katılım oranı",
        kisa: "İşsizlik oranının paydası işgücü, katılım oranının paydası yetişkin nüfustur.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "İşsizlik oranı", alt: "işsiz ÷ işgücü × 100" }, "|",
              { t: "Katılım oranı", alt: "işgücü ÷ yetişkin nüfus × 100" }
            ], aciklama: "*Unemployment rate* işgücünün yüzde kaçının işsiz olduğunu, *labor force participation rate* yetişkinlerin yüzde kaçının işgücünde olduğunu gösterir." },
          { tip: "ornek", baslik: "Bir ilçede işgücü hesabı", durum: "İlçede 16 yaş üstü 1000 kişi var: 570 çalışan, 30 işsiz ve 400 işgücü dışı (öğrenci, emekli vb.). İşsizlik oranı ve katılım oranı kaçtır?",
            adimlar: ["İşgücü = çalışan + işsiz = 570 + 30 = 600.", "İşsizlik oranı = 30 ÷ 600 × 100 = %5.", "Katılım oranı = 600 ÷ 1000 × 100 = %60.", "Kontrol: 570 + 30 + 400 = 1000 yetişkin."],
            sonuc: "İşsizlik oranı ==%5==, işgücüne katılım oranı ==%60==." },
          { tip: "tuzak", metin: "Çalışmayan herkes işsiz değildir; öğrenci, emekli ve aramayı bırakan kişi işgücü dışındadır. Ayrıca iki oranın paydası farklıdır.", yanlis: "İşsizlik oranı = işsiz ÷ yetişkin nüfus.", dogru: "İşsizlik oranının paydası ==işgücüdür==; katılım oranının paydası ==yetişkin nüfustur==." }
        ]
      },
      {
        baslik: "İşsizlik oranı gerçeği eksik gösterir",
        kisa: "Aramayı bırakan işgücünden çıkar; işsizlik oranı düşer ama iş yoktur.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "😞", terim: "Discouraged workers", tr: "umudunu kaybeden işçiler", tanim: "İş bulamayacağına inanıp aramayı bırakanlar. İşgücü dışında sayılırlar, bu yüzden işsizlik oranına girmezler.", ornek: "Aylardır ret alıp başvuruyu bırakan genç." },
              { ikon: "⏳", terim: "Part-time workers", tr: "yarı zamanlı çalışanlar", tanim: "Tam zamanlı çalışmak isteyip yarı zamanlı çalışanlar da çalışan sayılır. İşsizlik oranı bu eksik istihdamı göstermez.", ornek: "Haftada 10 saat çalışıp daha fazlasını isteyen kasiyer." }
            ] },
          { tip: "ornek", baslik: "Aramayı bırakanlar oranı nasıl düşürür?", durum: "Aynı ilçede (1000 yetişkin, 570 çalışan, 30 işsiz) 10 işsiz iş bulamayacağını düşünüp aramayı bırakıyor. Kimse iş bulmuyor.",
            adimlar: ["Bırakanlar işgücü dışına geçti: işsiz 30 → 20.", "İşgücü 600 → 590.", "İşsizlik oranı = 20 ÷ 590 × 100 ≈ %3,4 (önceden %5).", "Katılım oranı = 590 ÷ 1000 × 100 = %59 (önceden %60)."],
            sonuc: "İşsizlik oranı düştü ama ==çalışan sayısı hâlâ 570==. Katılım oranının da düşmesi ipucudur." },
          { tip: "tablo", baslik: "Önce ve sonra", head: ["Durum", "Çalışan", "İşsiz", "İşgücü", "İşsizlik oranı", "Katılım oranı"], rows: [
              ["Önce", "570", "30", "600", "%5", "%60"],
              ["10 kişi aramayı bırakınca", "570", "20", "590", "≈ %3,4", "%59"]
            ], vurgu: 1, not: "Resmî işsizlik oranı umudunu kaybedenleri işsiz saymadığı ve tam zamanlı çalışmak isteyen yarı zamanlıları çalışan saydığı için çoğu zaman işsizliği olduğundan düşük gösterir." }
        ]
      },
      {
        baslik: "Sürtünmeli ve yapısal işsizlik",
        kisa: "Sürtünmeli işsizlik geçicidir; yapısal işsizlik beceri ya da yer uyuşmazlığıdır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔄", terim: "Frictional unemployment", tr: "sürtünmeli işsizlik", tanim: "İş arayanla boş iş birbirini bulana kadar geçen kısa süre; bilgi ve zaman gecikmesidir. Sağlıklı bir ekonomide de vardır.", ornek: "Yeni mezun ilk işini arıyor, iş değiştiren kişi başvuru sonucunu bekliyor." },
              { ikon: "🧩", terim: "Structural unemployment", tr: "yapısal işsizlik", tanim: "İş arayanların becerileri ya da yaşadıkları yer ile boş işlerin gerektirdikleri uyuşmaz; teknoloji ya da sektör değişimi yüzünden olur. Sürtünmeliden genelde daha uzun sürer.", ornek: "Fabrika otomasyona geçince işini kaybeden tornacı." }
            ] },
          { tip: "ikili", sol: { ikon: "🔄", baslik: "*Frictional*", maddeler: ["Geçici arama süreci", "Beceri uyuşuyor; yalnızca bulması zaman alıyor"] },
            sag: { ikon: "🧩", baslik: "*Structural*", maddeler: ["Beceri ya da yer uyuşmazlığı", "Yeni beceri öğrenmeden iş bulmak zor"] },
            oyun: [
              { metin: "Ada üniversiteden mezun oldu, ilk işini arıyor.", cevap: "sol", neden: "Geçici arama süreci: sürtünmeli." },
              { metin: "Dijital baskı yaygınlaşınca matbaa işçisinin becerileri aranmaz oldu.", cevap: "sag", neden: "Teknoloji yüzünden beceri uyuşmazlığı: yapısal." },
              { metin: "Elif şehir değiştirdi ve yeni iş bakıyor.", cevap: "sol", neden: "Arama ve eşleşme süresi: sürtünmeli." },
              { metin: "Madenin kapandığı kasabada madencilerin becerileri başka işlerde aranmıyor.", cevap: "sag", neden: "Sektör çöktü, beceri uymuyor: yapısal." }
            ] },
          { tip: "tuzak", metin: "İşini kaybeden iki kişi dışarıdan aynı görünür; ayıran şey nedendir. Resesyonda işten çıkarılan konjonktürel, robotlar yüzünden işsiz kalan yapısal işsizdir.", yanlis: "Teknoloji yüzünden işsiz kalan kişi konjonktürel işsizdir.", dogru: "Beceri ya da sektör uyuşmazlığı ==yapısaldır==; ekonominin daralması yüzünden işsiz kalmak ==konjonktüreldir==." }
        ]
      },
      {
        baslik: "Konjonktürel işsizlik ve doğal oran",
        kisa: "Doğal oran = sürtünmeli + yapısal; gerçek oranla farkı konjonktürel işsizliktir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Gerçek oran", alt: "ölçülen işsizlik oranı" }, "=",
              { t: "Doğal oran", alt: "sürtünmeli + yapısal" }, "+",
              { t: "Konjonktürel", alt: "gerçek − doğal" }
            ], aciklama: "Doğal işsizlik oranı (*natural rate of unemployment*), ekonomi tam istihdam çıktısını (potansiyel çıktıyı) ürettiğinde var olan orandır. O noktada konjonktürel işsizlik sıfırdır." },
          { tip: "grafik", baslik: "Gerçek işsizlik, doğal oranın etrafında dalgalanır", xlabel: "Zaman", ylabel: "İşsizlik oranı (%)", xmax: 12, ymax: 10,
            yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
            ogeler: [
              { id: "N", tip: "cizgi", renk: 0, from: [0, 5], to: [10, 5], etiket: "Doğal oran", gizli: true },
              { id: "U", tip: "egri", renk: 2, noktalar: egri, gizli: true },
              { id: "uy", tip: "yazi", x: 2.5, y: 8.7, metin: "Gerçek oran", gizli: true },
              { id: "a1", tip: "alan", renk: 3, noktalar: pozitif, gizli: true },
              { id: "a2", tip: "alan", renk: 1, noktalar: negatif, gizli: true },
              { id: "ya", tip: "yazi", x: 3, y: 6.1, metin: "gerçek > doğal: konjonktürel +", gizli: true },
              { id: "yb", tip: "yazi", x: 7.5, y: 2.9, metin: "gerçek < doğal: konjonktürel −", gizli: true },
              { id: "Nold", tip: "cizgi", renk: 0, kesik: true, from: [0, 5], to: [10, 5], gizli: true },
              { id: "ok1", tip: "ok", renk: 3, from: [11, 5], to: [11, 6], gizli: true },
              { id: "yc", tip: "yazi", x: 5.5, y: 7.4, metin: "Doğal oran yavaşça yükseldi: %5 → %6", gizli: true }
            ],
            durumlar: [
              { metin: "**Doğal oran** (*natural rate*): ekonomi tam istihdamdayken (potansiyel çıktıda) var olan işsizlik. Sürtünmeli + yapısal; burada %5.", goster: ["N"] },
              { metin: "**Gerçek işsizlik oranı** dalgalanır: daralmada yükselir, canlanmada düşer.", goster: ["U", "uy"] },
              { metin: "Gerçek oran doğalın **üstündeyse** fark ==konjonktürel işsizliktir==. Ekonomi potansiyel çıktının altındadır.", goster: ["a1", "ya"] },
              { metin: "Gerçek oran doğalın **altındaysa** konjonktürel işsizlik negatiftir. Ekonomi potansiyel çıktının üstünde çalışıyordur.", goster: ["a2", "yb"] },
              { metin: "Doğal oran sabit değildir: işgücünün özellikleri değiştikçe zamanla ==yavaşça== kayar (burada %5 → %6).", set: { N: { from: [0, 6], to: [10, 6] } }, gizle: ["U", "uy", "a1", "a2", "ya", "yb"], goster: ["Nold", "ok1", "yc"] }
            ] },
          { tip: "tuzak", metin: "Tam istihdam, işsizliğin hiç olmaması değildir. İş değiştirenler ve beceri uyuşmazlığı hep vardır.", yanlis: "Tam istihdamda işsizlik oranı %0'dır.", dogru: "Tam istihdamda ==işsizlik doğal orandadır== (sürtünmeli + yapısal); yalnızca konjonktürel işsizlik sıfırdır." }
        ]
      },
      {
        baslik: "Hangi tür işsizlik doğal orana girer?",
        kisa: "Sürtünmeli ve yapısal işsizlik doğal orana girer; konjonktürel girmez.",
        bloklar: [
          { tip: "tablo", baslik: "Üç tür işsizlik", head: ["Tür", "Neden", "Doğal orana dahil mi?", "Örnek"], rows: [
              ["*Frictional*", "Arama ve eşleşme süresi, geçici", "Evet", "İlk işini arayan mezun"],
              ["*Structural*", "Beceri ya da yer uyuşmazlığı", "Evet", "Otomasyonla işsiz kalan tornacı"],
              ["*Cyclical*", "Ekonominin daralması", "Hayır", "Krizde işçi çıkaran otel"]
            ], not: "Doğal oran = sürtünmeli + yapısal. Konjonktürel işsizlik, gerçek oranın doğal orandan sapmasıdır." },
          { tip: "ikili", sol: { ikon: "🌱", baslik: "Doğal orana dahil", maddeler: ["*Frictional* ve *structural*", "Ekonomi tam istihdamdayken de vardır"] },
            sag: { ikon: "🌊", baslik: "*Cyclical*", maddeler: ["Ekonomi daralınca ortaya çıkar", "Doğal orandan sapmadır"] },
            oyun: [
              { metin: "Bir bankacı kariyer değiştirmek için işinden ayrıldı, yeni iş arıyor.", cevap: "sol", neden: "Geçici arama: sürtünmeli, doğal orana dahil." },
              { metin: "Resesyonda talep düşünce otomobil fabrikası işçi çıkardı.", cevap: "sag", neden: "Ekonominin daralması: konjonktürel." },
              { metin: "Kâğıt fabrikası kapandı; işçilerin becerileri başka sektörde aranmıyor.", cevap: "sol", neden: "Beceri uyuşmazlığı: yapısal, doğal orana dahil." },
              { metin: "Kriz sırasında turizm talebi çöktü, oteller işçi çıkardı.", cevap: "sag", neden: "Düşük talep yüzünden: konjonktürel." }
            ] },
          { tip: "not", metin: "Doğal oran sabit değildir. İşgücünün yaş ve eğitim yapısı, iş arama kolaylığı ve beceri uyuşmazlığı değiştikçe ==yavaş yavaş== kayar." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Labor force* = çalışanlar + işsizler. İşsiz: çalışmıyor, aktif arıyor, çalışabilir.",
              "İşsizlik oranı = işsiz ÷ işgücü × 100. Katılım oranı = işgücü ÷ yetişkin nüfus × 100.",
              "Öğrenci, emekli ve aramayı bırakan kişi işgücü dışındadır.",
              "Aramayı bırakmak işsizlik oranını da katılım oranını da düşürür; iş yaratılmış olmaz.",
              "Resmî oran umudunu kaybedenleri işsiz saymaz, isteksizce yarı zamanlı çalışanları da tam çalışan sayar; işsizliği olduğundan düşük gösterir.",
              "*Frictional*: geçici arama. *Structural*: beceri ya da yer uyuşmazlığı. *Cyclical*: ekonominin daralması.",
              "Doğal oran = sürtünmeli + yapısal; tam istihdamda sıfır değildir.",
              "Konjonktürel işsizlik = gerçek oran − doğal oran. Doğal oran zamanla yavaşça değişebilir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Tabloya göre işsizlik oranı ve işgücüne katılım oranı sırasıyla nedir? (İşgücü dışındakiler çalışmayan ve aramayan yetişkinlerdir.)",
        fig: { type: "table", caption: "Bir ekonomi (kişi)", head: ["Yetişkin nüfus", "Çalışan", "İşsiz"], rows: [[2000, 1140, 60]] },
        opts: ["%5 ve %60", "%3 ve %57", "%5 ve %57", "%3 ve %60"],
        a: 0,
        why: "İşgücü = 1140 + 60 = 1200. İşsizlik oranı = 60 ÷ 1200 = %5; katılım oranı = 1200 ÷ 2000 = %60. %3 ve %57 şıkları yetişkin nüfusu iki oranda da payda yapmak gibi hatalardır; C şıkkı en çekici yanlış: katılım oranında çalışan sayısını kullanır." },
      { q: "Bir ekonomide işsiz bir işçi, iş bulamayacağını düşünerek aramayı bırakıyor; başka hiçbir şey değişmiyor. İşsizlik oranı ve katılım oranı ne olur?",
        opts: ["İşsizlik oranı artar, katılım oranı değişmez", "İşsizlik oranı azalır, katılım oranı azalır", "İşsizlik oranı azalır, katılım oranı artar", "İkisi de değişmez"],
        a: 1,
        why: "Kişi işsizlikten işgücü dışına geçer; hem işsiz sayısı hem işgücü azalır. İşsizlik oranı düşer, katılım oranı da düşer. C şıkkı en çekici yanlış: oranın düşmesini işgücünün büyümesi sanır." },
      { q: "Bir muhasebe şirketinde çalışan Kemal, işi artık yazılımlar yaptığı için işten çıkarıldı ve yeni sektörde aranan becerilere sahip değil. Kemal'in işsizliği hangi türdendir?",
        opts: ["Sürtünmeli işsizlik", "Konjonktürel işsizlik", "Yapısal işsizlik", "İşsizlik sayılmaz, işgücü dışıdır"],
        a: 2,
        why: "Teknoloji yüzünden beceri uyuşmazlığı oluştu: yapısal işsizlik. Konjonktürel işsizlik ekonominin daralmasından doğar; burada neden teknolojidir. B şıkkı en çekici yanlış: işten çıkarılma her zaman resesyon demek değildir." },
      { q: "Bir ekonomide doğal işsizlik oranı %5, gerçek işsizlik oranı %7'dir. Hangisi doğrudur?",
        opts: ["Yapısal işsizlik %2'dir", "Ekonomi tam istihdam düzeyindedir", "Sürtünmeli işsizlik sıfırdır", "Konjonktürel işsizlik %2'dir; ekonomi potansiyel çıktının altındadır"],
        a: 3,
        why: "Konjonktürel işsizlik = gerçek − doğal = 7 − 5 = %2. Gerçek oran doğalın üstünde olduğu için ekonomi potansiyel çıktının altındadır. B şıkkı en çekici yanlış: tam istihdamda gerçek oran doğal orana eşittir." },
      { q: "Doğal işsizlik oranı %5 olan bir ekonomide dört yılın verisi aşağıdadır. Hangi yılda konjonktürel işsizlik sıfırdır ve ekonomi potansiyel çıktıdadır?",
        fig: { type: "table", caption: "Gerçek işsizlik oranı (%)", head: ["Yıl", "Gerçek oran", "Doğal oran"], rows: [["Yıl 1", "3,5", "5,0"], ["Yıl 2", "5,0", "5,0"], ["Yıl 3", "6,5", "5,0"], ["Yıl 4", "8,0", "5,0"]] },
        opts: ["Yıl 1", "Yıl 2", "Yıl 3", "Yıl 4"],
        a: 1,
        why: "Konjonktürel işsizlik sıfırsa gerçek oran doğal orana eşittir: Yıl 2. Yıl 1 en çekici yanlış şık: en düşük işsizlik, doğalın altında olduğu için ekonominin potansiyelin üstünde çalıştığını gösterir (konjonktürel −1,5)." }
    ]
  };
})();
