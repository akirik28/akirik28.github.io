/* Kitpath not defteri · mc207 · 2.7 Konjonktür Dalgalanmaları
   Kaynak: College Board CED, Topic 2.7 (MEA-2.A). Blok türleri: /ap/_kit/defter.js başı.
   Not: grafikteki dalga hesaplanır: potansiyel çıktı Yp(x) = 4 + 0,3x; gerçek çıktı Y(x) = Yp(x) + 1,2·sin(π(x−1,5)/3).
   Tepe x≈3,25 ve dip x≈5,75'te (türev sıfır); yeni dalganın tepesi x≈9,25. */
window.DEFTER = (function () {
  function pot(x) { return 4 + 0.3 * x; }
  function act(x) { return pot(x) + 1.2 * Math.sin(Math.PI * (x - 1.5) / 3); }
  function r2(v) { return Math.round(v * 100) / 100; }
  function dilim(a, b) {
    var p = [], x;
    for (x = a; x <= b + 1e-9; x += 0.25) p.push([r2(x), r2(act(x))]);
    return p;
  }
  var TEPE = 3.25, DIP = 5.75;

  return {
    slug: "mc207",
    amac: "Bu konu ekonominin kısa vadede neden inip çıktığını anlatıyor. Konjonktür dalgasının evrelerini (genişleme, resesyon), dönüm noktalarını (tepe, dip), potansiyel çıktıyı ve çıktı açığını grafik ve veriyle okumayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Konjonktür dalgası nedir?",
        kisa: "Reel GSYH ve istihdam, kısa vadede AD ya da AS değişince dalgalanır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🌊", terim: "Business cycle", tr: "konjonktür dalgası", tanim: "Reel GSYH ve istihdamın toplam talep (AD) ve/veya toplam arz (AS) değiştikçe kısa vadede inip çıkması. Süreleri ve şiddetleri düzenli değildir.", ornek: "Birkaç yıl süren bir canlanma, ardından bir daralma." },
              { ikon: "🎯", terim: "Potential output", tr: "potansiyel çıktı", tanim: "Ekonominin tam istihdamda ürettiği reel GSYH; adı *full-employment output* olarak da geçer. Bu düzeyde işsizlik doğal orandadır. Uzun vadede yavaş yavaş büyür.", ornek: "Herkesin işe uygun olduğu bir ekonomide üretilebilecek miktar." }
            ] },
          { tip: "adimlar", baslik: "Bir talep şoku dalgayı nasıl başlatır?", adimlar: [
              { baslik: "Şok", metin: "Tüketici güveni düşer, insanlar harcamayı kısar: *AD* sola kayar." },
              { baslik: "Firmalar", metin: "Satışlar düşünce firmalar üretimi kısar: reel GSYH azalır." },
              { baslik: "İşgücü", metin: "Firmalar işçi çıkarır: işsizlik artar, hane halkının geliri azalır." },
              { baslik: "Zincir", metin: "Gelir azalınca harcama daha da azalır; daralma derinleşir." },
              { baslik: "Arz şoku da olur", metin: "Girdi fiyatları fırlarsa *AS* sola kayar ve çıktı yine düşebilir." }
            ] }
        ]
      },
      {
        baslik: "Evreler ve dönüm noktaları",
        kisa: "Genişleme ve resesyon evrelerdir; tepe ve dip dönüm noktalarıdır.",
        bloklar: [
          { tip: "grafik", baslik: "Potansiyel çıktı etrafında konjonktür dalgası", xlabel: "Zaman", ylabel: "Reel GSYH", xmax: 12, ymax: 10,
            ogeler: [
              { id: "pot", tip: "cizgi", renk: 0, kesik: true, from: [0, 4], to: [10, 7], etiket: "Potansiyel" },
              { id: "U", tip: "egri", renk: 2, noktalar: dilim(0, 10), gizli: true },
              { id: "uy", tip: "yazi", x: 9, y: 8.8, metin: "Gerçek reel GSYH", gizli: true },
              { id: "e1", tip: "egri", renk: 1, noktalar: dilim(0, TEPE), gizli: true },
              { id: "rc", tip: "egri", renk: 3, noktalar: dilim(TEPE, DIP), gizli: true },
              { id: "e2", tip: "egri", renk: 1, noktalar: dilim(DIP, 10), gizli: true },
              { id: "ye1", tip: "yazi", x: 1.4, y: 2.4, metin: "Genişleme", gizli: true },
              { id: "yrc", tip: "yazi", x: 3.4, y: 3.2, metin: "Resesyon", gizli: true },
              { id: "ye2", tip: "yazi", x: 8, y: 4.2, metin: "Genişleme", gizli: true },
              { id: "tepe", tip: "nokta", renk: 3, x: TEPE, y: r2(act(TEPE)), etiket: "Tepe", gizli: true },
              { id: "dip", tip: "nokta", renk: 3, x: DIP, y: r2(act(DIP)), etiket: "Dip", gizli: true },
              { id: "g1", tip: "ok", renk: 1, from: [2.5, 4.8], to: [2.5, 5.74], gizli: true },
              { id: "g2", tip: "ok", renk: 3, from: [5.5, 5.6], to: [5.5, 4.66], gizli: true },
              { id: "yg1", tip: "yazi", x: 2, y: 7, metin: "Y > Yp: çıktı açığı +", gizli: true },
              { id: "yg2", tip: "yazi", x: 5.5, y: 3.4, metin: "Y < Yp: çıktı açığı −", gizli: true }
            ],
            durumlar: [
              { metin: "**Potansiyel çıktı** (*potential output*): tam istihdam çıktısı. Uzun vadede yavaş ve düzenli yükselir." },
              { metin: "**Gerçek reel GSYH** bu çizginin etrafında dalgalanır: bu, konjonktür dalgasıdır.", goster: ["U", "uy"] },
              { metin: "İki **evre**: reel GSYH artarken ==genişleme== (*expansion*), azalırken ==resesyon== (*recession*).", gizle: ["U", "uy"], goster: ["e1", "rc", "e2", "ye1", "yrc", "ye2"] },
              { metin: "İki **dönüm noktası**: genişlemenin bittiği ==tepe== (*peak*), resesyonun bittiği ==dip== (*trough*).", goster: ["tepe", "dip"] },
              { metin: "**Çıktı açığı** = gerçek − potansiyel. Çizginin üstünde pozitif, altında negatiftir.", gizle: ["e1", "rc", "e2", "ye1", "yrc", "ye2", "tepe", "dip"], goster: ["U", "uy", "g1", "g2", "yg1", "yg2"] }
            ] },
          { tip: "ikili", sol: { ikon: "🔁", baslik: "Evre (*phase*)", maddeler: ["*Expansion* ve *recession*", "Bir süreçtir; reel GSYH artar ya da azalır"] },
            sag: { ikon: "📍", baslik: "Dönüm noktası (*turning point*)", maddeler: ["*Peak* ve *trough*", "Yönün değiştiği tek bir an"] },
            oyun: [
              { metin: "Reel GSYH üç çeyrektir düşüyor.", cevap: "sol", neden: "Süren bir düşüş: resesyon evresi." },
              { metin: "Reel GSYH en yüksek değerine ulaştı ve bundan sonra düşmeye başlayacak.", cevap: "sag", neden: "Yönün döndüğü an: tepe." },
              { metin: "Reel GSYH iki yıldır artıyor, işsizlik azalıyor.", cevap: "sol", neden: "Süren bir artış: genişleme evresi." },
              { metin: "Çıktı en düşük düzeyine indi; sonraki dönemde artış başlıyor.", cevap: "sag", neden: "Yönün döndüğü an: dip." }
            ] },
          { tip: "tablo", baslik: "Evrelerde göstergeler", head: ["Gösterge", "Genişleme", "Resesyon"], rows: [
              ["Reel GSYH", "Artar", "Azalır"],
              ["İşsizlik oranı", "Düşer", "Yükselir"],
              ["Tüketim ve yatırım", "Genellikle artar", "Genellikle azalır"],
              ["Firma kârları", "Genellikle artar", "Genellikle azalır"],
              ["Fiyatlar üzerindeki baskı", "Genellikle artar", "Genellikle azalır"]
            ], not: "\"Genellikle\" yazanlar eğilimdir; kesin kural değil." },
          { tip: "tuzak", metin: "Resesyon bir düşüş sürecidir, düşük bir seviye değil. Dip noktasından sonra seviye hâlâ düşük olsa da ekonomi artık genişlemektedir.", yanlis: "Reel GSYH düşük olduğu sürece ekonomi resesyondadır.", dogru: "Resesyon, reel GSYH'nin ==azaldığı== evredir. ==Dipten== sonra artış başladığı için yeni genişleme başlar." }
        ]
      },
      {
        baslik: "Çıktı açığı: gerçek ile potansiyel arasındaki fark",
        kisa: "Gerçek çıktı potansiyelin altındaysa açık negatiftir; işsizlik doğal oranın üstündedir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "Çıktı açığı", alt: "*output gap*" }, "=",
              { t: "Gerçek çıktı", alt: "Y" }, "−",
              { t: "Potansiyel çıktı", alt: "Yp" }
            ], aciklama: "Yüzde olarak: (Y − Yp) ÷ Yp × 100. Potansiyel çıktıda işsizlik doğal orandadır (2.3'teki doğal oran)." },
          { tip: "tablo", baslik: "Çıktı açığı ve işsizlik", head: ["Durum", "Çıktı açığı", "İşsizlik oranı", "Konjonktürel işsizlik"], rows: [
              ["Gerçek < potansiyel (resesyon)", "Negatif", "Doğal oranın üstünde", "Pozitif"],
              ["Gerçek = potansiyel (tam istihdam)", "Sıfır", "Doğal orana eşit", "Sıfır"],
              ["Gerçek > potansiyel (patlama)", "Pozitif", "Doğal oranın altında", "Negatif"]
            ], not: "İki ayrı ölçüdür: çıktı açığı çıktıyı, konjonktürel işsizlik işsizliği anlatır; yönleri zıttır." },
          { tip: "ornek", baslik: "Çıktı açığını hesapla", durum: "Potansiyel çıktı 1000 milyar TL. Bir yıl gerçek çıktı 950, başka bir yıl 1040'tır. Çıktı açıkları kaçtır?",
            adimlar: ["Birinci yıl: 950 − 1000 = −50 milyar TL.", "Yüzde: −50 ÷ 1000 × 100 = −%5.", "İkinci yıl: 1040 − 1000 = +40 milyar TL; yüzde +%4.", "Negatif açıkta işsizlik doğal oranın üstündedir; pozitif açıkta altındadır."],
            sonuc: "Birinci yıl ==−50 (−%5)==: ekonomi potansiyelin altında. İkinci yıl ==+40 (+%4)==: potansiyelin üstünde." }
        ]
      },
      {
        baslik: "Veriden dalgayı okumak",
        kisa: "En yüksek değer tepe, en düşük değer dip; arası evrelerdir.",
        bloklar: [
          { tip: "tablo", baslik: "Reel GSYH (milyar TL)", head: ["Yıl", "Reel GSYH", "Değişim"], rows: [
              ["Yıl 1", "1000", "—"],
              ["Yıl 2", "1040", "+%4,0"],
              ["Yıl 3", "1070", "+%2,9"],
              ["Yıl 4", "1050", "−%1,9"],
              ["Yıl 5", "1010", "−%3,8"],
              ["Yıl 6", "1030", "+%2,0"],
              ["Yıl 7", "1060", "+%2,9"]
            ], vurgu: 2 },
          { tip: "ornek", baslik: "Tepeyi, dibi ve evreleri bul", durum: "Yukarıdaki reel GSYH verisine bakarak dönüm noktalarını ve evreleri belirle.",
            adimlar: ["En yüksek değer Yıl 3'te (1070): ==tepe==.", "Yıl 4 ve Yıl 5'te reel GSYH azalıyor: ==resesyon==.", "En düşük değer Yıl 5'te (1010): ==dip==.", "Yıl 6 ve 7'de yeniden artış: yeni ==genişleme==. Yıl 1–3 de genişlemedir."],
            sonuc: "Tepe: ==Yıl 3==. Dip: ==Yıl 5==. Resesyon: Yıl 3'ten Yıl 5'e. Yıl 5'ten sonra yeni genişleme başlar." },
          { tip: "tuzak", metin: "Yıl 3'te büyüme %4'ten %2,9'a düştü, ama reel GSYH hâlâ artıyor. Büyüme yavaşlaması ile reel GSYH'nin azalması farklı şeylerdir. Pratikte sık kullanılan kural: art arda iki çeyrek reel GSYH düşüşü (resmî tespiti kurumlar yapar).", yanlis: "Büyüme hızı düşünce ekonomi resesyona girmiştir.", dogru: "Resesyon, reel GSYH'nin ==azalmasıdır==. Büyüme yavaşlasa da hâlâ pozitifse ekonomi genişlemektedir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Business cycles*: reel GSYH ve istihdamın AD ve/veya AS değişimleriyle kısa vadede dalgalanması.",
              "İki evre: *expansion* (reel GSYH artar) ve *recession* (reel GSYH azalır).",
              "İki dönüm noktası: *peak* (genişlemenin sonu) ve *trough* (resesyonun sonu).",
              "*Potential output* = tam istihdam çıktısı; bu düzeyde işsizlik doğal orandadır.",
              "*Output gap* = gerçek çıktı − potansiyel çıktı.",
              "Negatif açık: resesyon, işsizlik doğalın üstünde. Pozitif açık: işsizlik doğalın altında.",
              "Veride en yüksek değer tepe, en düşük değer dip; büyüme yavaşlaması resesyon değildir.",
              "Kısa vadede dalgalanma, uzun vadede büyüme: potansiyel çıktı zamanla artar."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Grafikteki A ve B noktaları ve A'dan B'ye giden evre hangisidir?",
        fig: { type: "graph", caption: "Reel GSYH zamanla", xlabel: "Zaman", ylabel: "Reel GSYH", xmax: 10, ymax: 10,
          lines: [{ from: [1, 4], to: [3, 7], color: 0 }, { from: [3, 7], to: [6, 3], color: 0 }, { from: [6, 3], to: [8, 6], color: 0 }],
          points: [{ q: 3, p: 7, label: "A" }, { q: 6, p: 3, label: "B" }] },
        opts: ["A dip, B tepe; A'dan B'ye genişleme", "A tepe, B dip; A'dan B'ye resesyon", "A tepe, B dip; A'dan B'ye genişleme", "A dip, B tepe; A'dan B'ye resesyon"],
        a: 1,
        why: "A, yükselişin bittiği en yüksek nokta (tepe); B, düşüşün bittiği en düşük nokta (dip). Arası reel GSYH'nin azaldığı resesyondur. C şıkkı noktaları doğru söyler ama düşüşe genişleme der." },
      { q: "Potansiyel çıktı 2.000, gerçek çıktı 1.900 milyar TL'dir. Çıktı açığı ve işsizlik için hangisi doğrudur?",
        opts: ["+100; işsizlik doğal oranın altında", "+100; işsizlik doğal oranın üstünde", "−100; işsizlik doğal oranın üstünde", "−100; işsizlik doğal orana eşit"],
        a: 2,
        why: "Çıktı açığı = 1.900 − 2.000 = −100. Gerçek çıktı potansiyelin altındayken işsizlik doğal oranın üstündedir (konjonktürel işsizlik pozitif). D şıkkı açığı doğru bulur ama tam istihdam sonucunu verir." },
      { q: "Tabloya göre tepe ve dip hangi yıllardadır?",
        fig: { type: "table", caption: "Reel GSYH (milyar TL)", head: ["Yıl", "Reel GSYH"], rows: [["Yıl 1", 100], ["Yıl 2", 104], ["Yıl 3", 107], ["Yıl 4", 105], ["Yıl 5", 101], ["Yıl 6", 103]] },
        opts: ["Tepe Yıl 3, dip Yıl 5", "Tepe Yıl 2, dip Yıl 4", "Tepe Yıl 3, dip Yıl 6", "Tepe Yıl 1, dip Yıl 5"],
        a: 0,
        why: "En yüksek değer Yıl 3'te (107): tepe. Sonra azalma ve en düşük değer Yıl 5'te (101): dip. Yıl 6'da artış başladı. C şıkkı en çekici yanlış: Yıl 6'yı dip sanır, oysa artış oradan önce başlamıştır." },
      { q: "Yatırımcı güveni birden çöküyor ve firmalar yatırım harcamalarını kısıyor. Kısa vadede beklenen sonuç hangisidir?",
        opts: ["AD artar ve reel GSYH artar", "AS artar ve fiyatlar düşer", "Potansiyel çıktı hemen artar", "AD azalır; reel GSYH ve istihdam azalır, ekonomi daralmaya girebilir"],
        a: 3,
        why: "Yatırım harcamaları AD'nin parçasıdır; azalırsa AD azalır, çıktı ve istihdam düşer. C şıkkı en çekici yanlış: potansiyel çıktı uzun vadeli etkenlerle yavaş değişir." },
      { q: "Potansiyel çıktı (tam istihdam çıktısı) için aşağıdakilerden hangisi doğrudur?",
        opts: ["Bu düzeyde işsizlik oranı sıfırdır", "Bu düzeyde işsizlik doğal orandadır", "Bu düzeyde konjonktürel işsizlik pozitiftir", "Ekonomi bu düzeyin üstüne asla çıkamaz"],
        a: 1,
        why: "Potansiyel çıktıda sürtünmeli ve yapısal işsizlik vardır: işsizlik doğal orandadır, konjonktürel işsizlik sıfırdır. A şıkkı en çekici yanlış: tam istihdam sıfır işsizlik değildir; D şıkkı yanlış, gerçek çıktı kısa vadede potansiyelin üstüne çıkabilir." }
    ]
  };
})();
