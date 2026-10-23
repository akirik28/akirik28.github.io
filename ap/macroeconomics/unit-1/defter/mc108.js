/* Kitpath not defteri · mc108 · 1.5 Arz Yasası ve Arzı Kaydıranlar
   Kaynak: ap-videolar/src/episodes/mc108 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı.
   Not: bu dosyadaki küçük yardımcı işlevler yalnızca tekrar eden arz eğrisi kayma durumlarını üretir. */
window.DEFTER = (function () {
  /* Eksenler: yatay 1 birim = 10 tost, dikey 1 birim = 20 TL */
  var AX = {
    xlabel: "Miktar (tost/gün)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 10,
    xticks: [{ v: 1, label: "10" }, { v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }, { v: 7, label: "70" }],
    yticks: [{ v: 1, label: "20" }, { v: 2, label: "40" }, { v: 3, label: "60" }, { v: 4, label: "80" }, { v: 5, label: "100" }]
  };
  /* S₁ (P = Q), eski S₁ (kesik), S₂ (2 birim sağda), S₃ (1 birim solda) ve yatay yön okları */
  function egriler(ekstra) {
    return [
      { id: "s1", tip: "cizgi", renk: 0, from: [0.5, 0.5], to: [8, 8], etiket: "S₁" },
      { id: "s1k", tip: "cizgi", renk: 0, kesik: true, from: [0.5, 0.5], to: [8, 8], etiket: "", gizli: true },
      { id: "s2", tip: "cizgi", renk: 1, from: [2.5, 0.5], to: [9.5, 7.5], etiket: "S₂", gizli: true },
      { id: "s3", tip: "cizgi", renk: 2, from: [0, 1], to: [7, 8], etiket: "S₃", gizli: true },
      { id: "okR", tip: "ok", renk: 1, from: [3.2, 3], to: [4.8, 3], gizli: true },
      { id: "okL", tip: "ok", renk: 2, from: [2.8, 3], to: [2.2, 3], gizli: true }
    ].concat(ekstra || []);
  }
  function dur(metin) { return { metin: metin }; }
  function sag(metin, ek) {
    return { metin: metin, gizle: ["s1", "s3", "okL"].concat((ek && ek.gizle) || []), goster: ["s1k", "s2", "okR"].concat((ek && ek.goster) || []) };
  }
  function sol(metin, ek) {
    return { metin: metin, gizle: ["s1", "s2", "okR"].concat((ek && ek.gizle) || []), goster: ["s1k", "s3", "okL"].concat((ek && ek.goster) || []) };
  }
  function sifirla(metin) { return { metin: metin, gizle: ["s1k", "s2", "s3", "okR", "okL"], goster: ["s1"] }; }
  function graf(baslik, durumlar, ekstra) {
    var g = { tip: "grafik", baslik: baslik, ogeler: egriler(ekstra), durumlar: durumlar };
    for (var k in AX) g[k] = AX[k];
    return g;
  }

  return {
    slug: "mc108",
    amac: "Bu konu *law of supply* yani arz yasasını anlatıyor: bu kez üreticisin. Fiyat yükseldikçe neden daha çok üretmek istediğini, arz eğrisini ve onu kaydıran altı etkeni öğreneceksin; sola kayan eğrinin neden \"yukarı\" göründüğünü ama azalış olduğunu da.",
    bolumler: [
      {
        baslik: "Köpek gezdirme teklifi",
        kisa: "Fiyat yükseldikçe daha çok iş sunmaya razı olursun.",
        bloklar: [
          { tip: "hikaye", ikon: "🐕", baslik: "20 TL mi, 2 000 TL mi?",
            metin: "Komşun köpeğini gezdirmen için 20 lira teklif ediyor: belki. 200 lirada hemen tasmayı kaparsın; 2 bin lirada basketbol antrenmanını bile atlarsın. Fiyat yükseldikçe daha çok iş sunmaya razı oldun." },
          { tip: "adimlar", baslik: "Neden her ek saat daha pahalı?", adimlar: [
              { baslik: "İlk saat kolay", metin: "Boş vaktini harcıyorsun; vazgeçtiğin şey az değerli." },
              { baslik: "Sonraki saatler", metin: "Her ek saat, daha değerli bir şeyden (antrenman, ders) vazgeçmek demek." },
              { baslik: "Sonuç", metin: "Bunu ancak daha yüksek fiyat karşılar. Bu, *opportunity cost*'un arz tarafındaki yüzü." }
            ] }
        ]
      },
      {
        baslik: "*Supply* ve *law of supply*",
        kisa: "Üretici için fiyat ile arz edilen miktar aynı yönde gider.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏭", terim: "Supply", tr: "arz", tanim: "Üreticilerin farklı fiyatlarda üretip satmaya *willing and able* (hem istekli hem gücü yeter) olduğu miktarların bütünü (tablo ya da eğri). Biri eksikse arz yoktur.", ornek: "Atölyenin tüm fiyat–miktar planı; makinesi olmayan atölye satmak istese de arz edemez." },
              { ikon: "1️⃣", terim: "Quantity supplied", tr: "arz edilen miktar", tanim: "Tek bir fiyatta sunulan miktar; arz eğrisi üzerindeki tek nokta.", ornek: "60 liraya günde 30 tost." },
              { ikon: "📈", terim: "Law of supply", tr: "arz yasası", tanim: "Diğer her şey sabitken fiyat ile *quantity supplied* aynı yönde (*direct*, doğru ilişki) değişir.", ornek: "Tost 100 TL olunca atölye daha çok üretmek ister." }
            ] },
          { tip: "liste", maddeler: [
              { ikon: "💰", baslik: "Neden 1: kâr", metin: "Tost 100 lira olursa atölye daha çok üretmek ister; 20 lira olursa \"neden uğraşayım\" der." },
              { ikon: "🔧", baslik: "Neden 2: artan maliyet", metin: "Fazla tost için fazla mesai, ikinci makine gerekir; her ek tost daha pahalıya gelir (*opportunity cost*)." }
            ] },
          { tip: "ikili", sol: { ikon: "🛒", baslik: "Talep (*demand*)", maddeler: ["Tüketiciler, alıcı davranışı", "Fiyat ↑ → miktar ↓ (*inverse*)"] },
            sag: { ikon: "🏭", baslik: "Arz (*supply*)", maddeler: ["Üreticiler, satıcı davranışı", "Fiyat ↑ → miktar ↑ (*direct*)"] },
            oyun: [
              { metin: "Tüketici 50 TL'ye 50 tost almak istiyor.", cevap: "sol", neden: "Alıcının isteği: talep." },
              { metin: "Atölye 60 liraya günde 30 tost satmaya hazır.", cevap: "sag", neden: "Satıcının planı: arz." },
              { metin: "Fiyat ikiye katlanınca kantindeki kuyruk dağıldı.", cevap: "sol", neden: "Ters yön: talep yasası." },
              { metin: "Fiyat ikiye katlanınca atölye iki katı tost sunmak istiyor.", cevap: "sag", neden: "Aynı yön: arz yasası." },
              { metin: "Kâr beklentisi üreticiyi daha çok üretmeye iter.", cevap: "sag", neden: "Fiyat yüksekse kâr yüksek: arz yasasının nedeni." }
            ] }
        ]
      },
      {
        baslik: "Arz tablosundan arz eğrisine",
        kisa: "Arz eğrisi yukarı eğimlidir: talep yere iner, arz göğe çıkar.",
        bloklar: [
          { tip: "tablo", baslik: "Supply schedule · tost atölyesi (günlük)", head: ["Fiyat (TL)", "Arz edilen miktar (tost)"], rows: [["20", "10"], ["40", "20"], ["60", "30"], ["80", "40"], ["100", "50"]], not: "Kural: TL = 2 × tost. Grafik ölçeği: yatay 1 birim = 10 tost, dikey 1 birim = 20 TL." },
          { tip: "grafik", baslik: "Her satır bir nokta", xlabel: AX.xlabel, ylabel: AX.ylabel, xmax: AX.xmax, ymax: AX.ymax, xticks: AX.xticks, yticks: AX.yticks,
            ogeler: [
              { id: "n1", tip: "nokta", renk: 1, x: 1, y: 1, etiket: "20 TL · 10", gizli: true },
              { id: "n2", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "40 TL · 20", gizli: true },
              { id: "n3", tip: "nokta", renk: 1, x: 3, y: 3, etiket: "60 TL · 30", gizli: true },
              { id: "n4", tip: "nokta", renk: 1, x: 4, y: 4, etiket: "80 TL · 40", gizli: true },
              { id: "n5", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "100 TL · 50", gizli: true },
              { id: "s", tip: "cizgi", renk: 0, from: [0.5, 0.5], to: [8, 8], etiket: "S", gizli: true }
            ],
            durumlar: [
              { metin: "Dikeyde *price*, yatayda *quantity*. Atölyenin planı: 20 liraya günde 10 tost …", goster: ["n1", "n2"] },
              { metin: "… 60 liraya 30, 80 liraya 40, 100 liraya 50 tost.", goster: ["n3", "n4", "n5"] },
              { metin: "Noktaları birleştir: işte ==*supply curve*== (arz eğrisi). Sağa doğru **yukarı tırmanır**.", goster: ["s"] }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "📋", terim: "Supply schedule", tr: "arz tablosu", tanim: "Her fiyatta sunulan miktarı gösteren tablo.", ornek: "Yukarıdaki atölye tablosu." },
              { ikon: "📈", terim: "Supply curve", tr: "arz eğrisi", tanim: "*Supply schedule*'ın grafiği; sağa doğru yukarı eğimli. Tablo da eğri de aynı şeyi anlatır.", ornek: "S çizgisi (0,5; 0,5)'ten (8; 8)'e." }
            ] }
        ]
      },
      {
        baslik: "Eğri üzerinde hareket",
        kisa: "Ürünün kendi fiyatı eğriyi kaydırmaz, yalnızca eğri boyunca hareket ettirir.",
        bloklar: [
          { tip: "grafik", baslik: "Fiyat 40'tan 80'e çıkarsa", xlabel: AX.xlabel, ylabel: AX.ylabel, xmax: AX.xmax, ymax: AX.ymax, xticks: AX.xticks, yticks: AX.yticks,
            ogeler: [
              { id: "s", tip: "cizgi", renk: 0, from: [0.5, 0.5], to: [8, 8], etiket: "S₁" },
              { id: "P", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "A · 40 TL, 20 tost", kilavuz: true },
              { id: "yz", tip: "yazi", x: 6.5, y: 3.2, metin: "supply: aynı · Qs: arttı", gizli: true }
            ],
            durumlar: [
              { metin: "Fiyat 40 liraken atölye A noktasında: **20 tost**." },
              { metin: "Fiyat **80 liraya** çıkar. Atölye 20 tosttan 40 tosta geçer. Eğri yerinde durur; nokta eğri üstünde B'ye kayar.", set: { P: { x: 4, y: 4, etiket: "B · 80 TL, 40 tost" } } },
              { metin: "Buna ==*change in quantity supplied*== (arz edilen miktarda değişme) denir.", goster: ["yz"] },
              { metin: "Peki fiyat artınca *supply*'a ne olur? **Hiçbir şey.** Ürünün kendi fiyatı eğriyi asla kaydırmaz; yalnızca eğri boyunca hareket ettirir." }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "↕️", terim: "Change in quantity supplied", tr: "arz edilen miktarda değişme", tanim: "Yalnızca ürünün **kendi fiyatı** değişince arz eğrisi üzerinde hareket. Eğri kaymaz.", ornek: "40 TL → 80 TL: 20 tost → 40 tost." }
            ] },
          { tip: "tuzak", baslik: "Fiyat artınca arz artar mı?", metin: "Sınavın klasik çeldiricisi.", yanlis: "Tostun fiyatı artınca arz artar ve eğri sağa kayar.", dogru: "*Supply* aynı kalır, eğri kıpırdamaz; artan şey ==*quantity supplied*==. Ürünün kendi fiyatı eğriyi asla kaydırmaz." }
        ]
      },
      {
        baslik: "Arz eğrisi kayınca: sağ = artış, sol = azalış",
        kisa: "Sağa kayma artış, sola kayma azalıştır; yukarı görünse bile.",
        bloklar: [
          { tip: "tablo", baslik: "Üç arz tablosu", head: ["Fiyat (TL)", "S₁ (tost)", "S₂ artış (+20)", "S₃ azalış (−10)"], rows: [["20", "10", "30", "0"], ["40", "20", "40", "10"], ["60", "30", "50", "20"], ["80", "40", "60", "30"], ["100", "50", "70", "40"]], vurgu: 2, not: "S₂ = S₁'in 2 birim sağı; S₃ = S₁'in 1 birim solu. 60 TL'de S₁: 30, S₂: 50, S₃: 20." },
          graf("Süper hızlı makine geldi", [
            dur("Başlangıç: atölyenin arzı S₁. 60 liraya 30 tost."),
            sag("Atölyeye süper hızlı bir makine geldi: artık her fiyatta 20 tost fazla; 60 liraya 30 değil **50** tost. Bütün eğri ==sağa== kayar.", { goster: ["t50"] }),
            sol("Tersine, her fiyatta 10 tost eksilseydi eğri ==sola== kayardı: 60 liraya 20 tost.", { goster: ["t20"], gizle: ["t50"] }),
            sol("Dur, burada çoğu kişi yanılıyor. Sola kayan eğri daha **yukarıda** görünür; aynı 30 tost için artık 80 lira istenir. Ama bu bir ==azalıştır==.", { goster: ["tuz"], gizle: ["t20"] })
          ], [
            { id: "t50", tip: "yazi", x: 7.2, y: 2.4, metin: "60 TL: 30 → 50 tost", gizli: true },
            { id: "t20", tip: "yazi", x: 7.2, y: 2.4, metin: "60 TL: 30 → 20 tost", gizli: true },
            { id: "tuz", tip: "yazi", x: 6.2, y: 2.4, metin: "30 tost: 60 TL → 80 TL (yukarı görünür!)", gizli: true }
          ]),
          { tip: "kavramlar", kartlar: [
              { ikon: "↔️", terim: "Change in supply", tr: "arzda değişme", tanim: "Fiyat dışı bir etken yüzünden **bütün** arz eğrisinin kayması.", ornek: "Yeni makine geldi: her fiyatta 20 tost daha." },
              { ikon: "➡️", terim: "Increase in supply", tr: "arzda artış", tanim: "Eğrinin **sağa** kayması: her fiyatta daha çok miktar sunulur.", ornek: "S₁ → S₂." },
              { ikon: "⬅️", terim: "Decrease in supply", tr: "arzda azalış", tanim: "Eğrinin **sola** kayması (grafikte yukarı görünür): her fiyatta daha az miktar sunulur.", ornek: "S₁ → S₃." }
            ] },
          { tip: "tuzak", baslik: "Yukarı görünen sol kayma", metin: "Sola kayan arz eğrisi grafikte yukarıda görünür; \"yukarı = artış\" sanma.", yanlis: "Arz eğrisi yukarı kaydı, o halde arz arttı.", dogru: "Arzda ==sağ artış, sol azalış==; yukarı-aşağı değil. Kaymayı hep yatay okla çiz." }
        ]
      },
      {
        baslik: "Belirleyiciler 1–4: maliyeti değiştirenler",
        kisa: "Maliyeti artıran her şey arzı sola, düşüren her şey sağa kaydırır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧀", terim: "Input prices", tr: "girdi fiyatları", tanim: "Hammadde, ücret, kira, enerji gibi girdilerin fiyatı ve bulunabilirliği. Girdi pahalanırsa ya da kıtlaşırsa maliyet artar.", ornek: "Kaşar peyniri, asgari ücret, kira; kuraklıkta buğday." },
              { ikon: "⚙️", terim: "Technology", tr: "teknoloji, verimlilik", tanim: "Aynı girdiyle daha çok üretebilmek; maliyeti düşürür.", ornek: "Dakikada 8 tost basan makine." },
              { ikon: "🏪", terim: "Number of sellers", tr: "satıcı sayısı", tanim: "Piyasadaki üretici sayısı; *market supply* bütün satıcıların toplamıdır.", ornek: "Okulun karşısına iki tostçu daha açıldı." },
              { ikon: "🧾", terim: "Excise tax", tr: "özel tüketim vergisi", tanim: "Birim başına konan vergi; üretim maliyetine eklenir, arzı sola kaydırır.", ornek: "Tost başına 5 lira vergi." },
              { ikon: "🎁", terim: "Subsidy", tr: "sübvansiyon", tanim: "Devletin üreticiye yaptığı ödeme; maliyeti düşürür, arzı sağa kaydırır.", ornek: "Devlet tostçuya tost başına destek öder." },
              { ikon: "📜", terim: "Regulation", tr: "düzenleme", tanim: "Üretime getirilen kurallar (ek denetim, standart); uyum maliyeti arzı azaltır.", ornek: "Ek denetim isteyen sıkı kurallar." }
            ] },
          graf("Girdi, teknoloji, satıcı sayısı ve devlet", [
            dur("Başlangıç: atölyenin arzı S₁."),
            sol("**Girdi fiyatı:** kaşar peyniri ikiye katlandı (asgari ücret ya da kira artışı, kuraklık da öyle). Her tost pahalıya patlıyor: arz ==sola==."),
            sag("**Teknoloji:** dakikada 8 tost basan makine maliyeti düşürür, arz ==sağa==."),
            sag("**Satıcı sayısı:** okulun karşısına iki tostçu daha açıldı; mahallenin tost arzı ==sağa== kayar."),
            sol("**Excise tax:** tost başına 5 lira vergi maliyete eklenir; arz ==sola==."),
            sag("**Subsidy:** devlet üreticiye ödeme yapar; maliyet düşer, arz ==sağa==."),
            sol("**Regulation:** ek denetim isteyen sıkı kurallar arzı ==sola== çeker.")
          ]),
          { tip: "formul", parcalar: [
              { t: "Maliyet ↑", alt: "girdi pahalanır, vergi, düzenleme" }, "→",
              { t: "Arz sola", alt: "decrease" },
              { t: "Maliyet ↓", alt: "teknoloji, ucuz girdi, sübvansiyon" }, "→",
              { t: "Arz sağa", alt: "increase" }
            ], aciklama: "Kısa kural: üreticinin maliyetini artıran her şey arzı sola, düşüren ya da üretimi artıran her şey sağa kaydırır." },
          { tip: "ornek", baslik: "Birim vergi arzı nasıl kaydırır?", durum: "Atölye tost başına 5 lira vergi ödemeye başlıyor. Arz eğrisine ne olur?",
            adimlar: ["Vergi her tostun maliyetine 5 lira ekler.", "Aynı miktarı sunmak için atölyenin eskisinden 5 lira fazla fiyata ihtiyacı var.", "Her miktarda arz fiyatı yukarı kayar, yani her fiyatta sunulan miktar azalır.", "Grafikte yukarı görünür; ama doğru adı: arz azalır (sola)."],
            sonuc: "Birim vergi ==arzı sola kaydırır== (*decrease in supply*). Sübvansiyon tersine sağa kaydırır." }
        ]
      },
      {
        baslik: "Belirleyiciler 5–6: beklentiler ve diğer malların fiyatı",
        kisa: "Üretici fiyat artacak derse bugün arzı geri tutar; alternatif mal pahalanırsa o mala döner.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔮", terim: "Expectations", tr: "beklentiler", tanim: "Üreticinin gelecekteki fiyat ya da kâr beklentisi. Fiyat artacak beklentisi bugünkü arzı **azaltır** (ürünü depoda tutar).", ornek: "Fındık üreticisi gelecek ay fiyat artacak diye fındığı depoda tutar." },
              { ikon: "🧇", terim: "Prices of other goods", tr: "diğer malların fiyatı", tanim: "Üreticinin aynı kaynakla yapabileceği başka malların fiyatı. O mal pahalanırsa bu malın arzı azalır.", ornek: "Waffle fiyatı fırlayınca makineler waffle'a döner, tost arzı sola." }
            ] },
          graf("Beklentiler ve diğer malların fiyatı", [
            dur("Başlangıç: tost arzı S₁."),
            sol("**Beklenti:** fındık üreticisi fiyatın gelecek ay artacağını bekliyor; fındığı depoda tutar. Bugünkü arz ==sola==."),
            sol("**Diğer malın fiyatı:** atölyenin makineleri waffle da yapıyor; waffle fiyatı fırladı. Makineler waffle'a döner, tost arzı ==sola==.")
          ]),
          { tip: "tuzak", baslik: "Talepteki \"ikame\" ve beklenti ile karıştırma", metin: "Talepte ikame malın fiyatı artarsa talep artar; arzda üretimdeki alternatif mal pahalanırsa arz azalır. Beklentide de yön tersine döner.", yanlis: "Waffle pahalandı, tost arzı da artar (ikame gibi); fiyatın artacağını bekleyen herkes bugün daha çok satar.", dogru: "==Üretimdeki alternatif mal pahalanırsa bu malın arzı sola kayar==. Alıcı fiyat artacak derse bugün talebi artırır (sağ); satıcı fiyat artacak derse bugünkü arzı ==azaltır== (sol)." }
        ]
      },
      {
        baslik: "Kimi etkiliyor? Talep mi, arz mı?",
        kisa: "Alıcıyı etkiliyorsa talep, üreticiyi etkiliyorsa arz kayar.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "🛍️", baslik: "Alıcıyı etkiler → *demand*", maddeler: ["Zevk, haber, reklam", "Alıcı sayısı", "Gelir, ilişkili mal fiyatı, alıcı beklentisi"] },
            sag: { ikon: "🏭", baslik: "Üreticiyi etkiler → *supply*", maddeler: ["Girdi fiyatı", "Teknoloji, satıcı sayısı", "Vergi/sübvansiyon, düzenleme, üretici beklentisi, diğer malın fiyatı"] },
            oyun: [
              { metin: "\"Tost hafızayı güçlendiriyor\" haberi çıktı.", cevap: "sol", neden: "Alıcının zevki değişti: talep." },
              { metin: "\"Peynir pahalandı\" haberi çıktı.", cevap: "sag", neden: "Üreticinin maliyeti: arz." },
              { metin: "Okula 200 yeni öğrenci geldi.", cevap: "sol", neden: "Alıcı sayısı: talep." },
              { metin: "Devlet tostçulara destek ödemesi yapıyor.", cevap: "sag", neden: "Sübvansiyon: arz." },
              { metin: "Dakikada 8 tost basan makine geldi.", cevap: "sag", neden: "Teknoloji: arz." }
            ] },
          { tip: "tuzak", baslik: "Talep değil, arz meselesi (ya da tersi)", metin: "Her habere önce şunu sor: kimi etkiliyor, alıcıyı mı satıcıyı mı?", yanlis: "Girdi fiyatı, teknoloji ve satıcı sayısı talebi de kaydırır.", dogru: "Girdi fiyatı, teknoloji ve satıcı sayısı ==talebi kaydırmaz==. \"Hangisi talep belirleyicisi DEĞİLDİR?\" sorusunda genelde girdi fiyatı doğru cevaptır." },
          { tip: "ornek", baslik: "Sınav sorusu: telefon kılıfı", durum: "Aşağıdakilerden hangisi telefon kılıfı arz eğrisini sola kaydırır? (A) Kılıfın fiyatının düşmesi (B) Daha hızlı yeni bir baskı makinesi (C) Plastik fiyatının artması (D) Hükümetin üreticilere sübvansiyon vermesi.",
            adimlar: ["A: kılıfın kendi fiyatı eğriyi kaydırmaz; eğri üzerinde hareket.", "B: teknoloji, arz sağa.", "C: girdi (plastik) pahalandı, maliyet artar, arz sola.", "D: sübvansiyon, arz sağa."],
            sonuc: "==C: plastik fiyatının artması.== Girdi pahalanınca her fiyatta daha az kılıf üretilir." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Supply*: üreticinin her fiyatta sunmaya *willing and able* olduğu miktarlar. *Quantity supplied* tek bir fiyattaki miktardır.",
              "*Law of supply*: fiyat ile *quantity supplied* aynı yönde (*direct*); nedeni kâr ve artan maliyet (*opportunity cost*).",
              "Arz tablosu grafiğe dökülünce yukarı eğimli *supply curve* olur: talep yere iner, arz göğe çıkar.",
              "Ürünün kendi fiyatı yalnızca eğri boyunca hareket ettirir (*change in quantity supplied*); fiyat artınca *supply* hiçbir şey olmaz.",
              "Altı belirleyici eğriyi kaydırır: girdi fiyatları, teknoloji, satıcı sayısı, vergi/sübvansiyon/düzenleme, beklentiler, diğer malların fiyatı (bazı kaynaklar beş sayar; sınav listeyi değil uygulamayı sorar).",
              "Maliyeti artıran her şey arzı sola, düşüren her şey sağa kaydırır.",
              "Sağ artış, sol azalış; yukarıda görünen sol kayma da azalıştır.",
              "Önce sor: kimi etkiliyor? Alıcıyı etkiliyorsa talep, üreticiyi etkiliyorsa arz."
            ] }
        ]
      }
    ]
  };
})();
