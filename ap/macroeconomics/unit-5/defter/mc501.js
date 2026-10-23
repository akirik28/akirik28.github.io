/* Kitpath not defteri · mc501 · 5.1 Kısa Dönemde Maliye ve Para Politikası
   Kaynak: CED Topic 5.1 (POL-1.F). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlev yalnızca grafik durumlarında "hangi ögeler görünür" listesini üretir. */
window.DEFTER = (function () {
  /* Durum: yalnız `acik` listesindeki ögeler görünür */
  function dur(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }

  /* ---- Grafik 1: AD–AS, iki tür boşluk ---- */
  var T1 = ["LR", "SR", "AD1", "AD1k", "AD2", "AD3", "AD3k", "okR", "okL", "E1", "E2", "E3"];
  var G1 = {
    tip: "grafik", baslik: "Resesyon açığı ve enflasyon açığı: iki ayrı ilaç", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
    xticks: [{ v: 5, label: "Y₁" }, { v: 6, label: "Yf" }, { v: 7, label: "Y₃" }],
    yticks: [{ v: 5, label: "P₁" }, { v: 6, label: "P₂" }, { v: 7, label: "P₃" }],
    ogeler: [
      { id: "LR", tip: "cizgi", renk: 2, from: [6, 0], to: [6, 9.6], etiket: "LRAS" },
      { id: "SR", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "SRAS" },
      { id: "AD1", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "AD₁" },
      { id: "AD1k", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
      { id: "AD2", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "AD₂", gizli: true },
      { id: "AD3", tip: "cizgi", renk: 3, from: [5, 9], to: [10, 4], etiket: "AD₃", gizli: true },
      { id: "AD3k", tip: "cizgi", renk: 3, kesik: true, from: [5, 9], to: [10, 4], etiket: "", gizli: true },
      { id: "okR", tip: "ok", renk: 3, from: [3.3, 7], to: [4.8, 7], gizli: true },
      { id: "okL", tip: "ok", renk: 3, from: [5.8, 8], to: [4.3, 8], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "E₂", kilavuz: true, gizli: true },
      { id: "E3", tip: "nokta", renk: 1, x: 7, y: 7, etiket: "E₃", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T1, "Başlangıç: AD₁ ile SRAS **E₁**'de kesişiyor. Çıktı Y₁, tam istihdam çıktısı Yf'nin solunda: ==resesyon açığı==, işsizlik doğal oranın üstünde.", ["LR", "SR", "AD1", "E1"]),
      dur(T1, "**Genişletici politika:** AD sağa kayar (AD₂, eski eğri kesikli). Yeni denge **E₂**, çıktı Yf'e döndü; bedeli: fiyat düzeyi P₁'den P₂'ye çıktı.", ["LR", "SR", "AD1k", "AD2", "okR", "E2"]),
      dur(T1, "Tersi: ekonomi aşırı ısınırsa AD₃ gibi bir yerde dengelenir. Denge **E₃**, Yf'nin sağında: ==enflasyon açığı==. Çıktı Y₃ > Yf, fiyatlar P₃'e fırlamış.", ["LR", "SR", "AD3", "E3"]),
      dur(T1, "**Daraltıcı politika:** AD sola kayar (AD₃ kesikli → AD₂). Çıktı yine Yf'e iner, fiyat düzeyi P₃'ten P₂'ye geriler.", ["LR", "SR", "AD3k", "AD2", "okL", "E2"])
    ]
  };

  /* ---- Grafik 2: para piyasası, tek politika ---- */
  var T2 = ["MD", "MS1", "MS2", "MS3", "okR", "okL", "E1", "E2", "E3"];
  var G2 = {
    tip: "grafik", baslik: "Para piyasası: Merkez Bankası para arzını kaydırınca faiz değişir", xlabel: "Para miktarı", ylabel: "Nominal faiz", xmax: 10, ymax: 10,
    xticks: [{ v: 3, label: "M₃" }, { v: 5, label: "M₁" }, { v: 7, label: "M₂" }],
    yticks: [{ v: 3, label: "i₂" }, { v: 5, label: "i₁" }, { v: 7, label: "i₃" }],
    ogeler: [
      { id: "MD", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "MD" },
      { id: "MS1", tip: "cizgi", renk: 1, from: [5, 0], to: [5, 9.4], etiket: "MS₁" },
      { id: "MS2", tip: "cizgi", renk: 2, from: [7, 0], to: [7, 9.4], etiket: "MS₂", gizli: true },
      { id: "MS3", tip: "cizgi", renk: 3, from: [3, 0], to: [3, 9.4], etiket: "MS₃", gizli: true },
      { id: "okR", tip: "ok", renk: 2, from: [5.3, 8.6], to: [6.7, 8.6], gizli: true },
      { id: "okL", tip: "ok", renk: 3, from: [4.7, 8.6], to: [3.3, 8.6], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 1, x: 7, y: 3, etiket: "E₂", kilavuz: true, gizli: true },
      { id: "E3", tip: "nokta", renk: 1, x: 3, y: 7, etiket: "E₃", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T2, "Denge faizi i₁. **MD** aşağı eğimli: faiz yükselince elde para tutmanın maliyeti artar, insanlar daha az para ister. **MS** dikey: miktarı Merkez Bankası belirler.", ["MD", "MS1", "E1"]),
      dur(T2, "**Genişletici para politikası:** MS sağa kayar (MS₂). Aynı MD'de denge **E₂**'ye iner: nominal faiz ==i₁'den i₂'ye düşer==.", ["MD", "MS1", "MS2", "okR", "E2"]),
      dur(T2, "**Daraltıcı para politikası:** MS sola kayar (MS₃). Denge **E₃**'e çıkar: nominal faiz ==i₃'e yükselir==.", ["MD", "MS1", "MS3", "okL", "E3"])
    ]
  };

  /* ---- Grafik 3: para piyasasında iki politika birlikte ---- */
  var T3 = ["MD", "MDk", "MD2", "MS", "MSk", "MS2", "E0", "Ef", "Em", "Eb"];
  var G3 = {
    tip: "grafik", baslik: "Faize ne olur? Maliye ve para politikası ters yöne çeker", xlabel: "Para miktarı", ylabel: "Nominal faiz", xmax: 10, ymax: 10,
    xticks: [{ v: 5, label: "M₁" }, { v: 7, label: "M₂" }],
    yticks: [{ v: 3, label: "3" }, { v: 5, label: "i₁" }, { v: 7, label: "7" }],
    ogeler: [
      { id: "MD", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "MD₁" },
      { id: "MDk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
      { id: "MD2", tip: "cizgi", renk: 3, from: [3, 9], to: [10, 2], etiket: "MD₂", gizli: true },
      { id: "MS", tip: "cizgi", renk: 1, from: [5, 0], to: [5, 9.4], etiket: "MS₁" },
      { id: "MSk", tip: "cizgi", renk: 1, kesik: true, from: [5, 0], to: [5, 9.4], etiket: "", gizli: true },
      { id: "MS2", tip: "cizgi", renk: 2, from: [7, 0], to: [7, 9.4], etiket: "MS₂", gizli: true },
      { id: "E0", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
      { id: "Ef", tip: "nokta", renk: 1, x: 5, y: 7, etiket: "faiz ↑", kilavuz: true, gizli: true },
      { id: "Em", tip: "nokta", renk: 1, x: 7, y: 3, etiket: "faiz ↓", kilavuz: true, gizli: true },
      { id: "Eb", tip: "nokta", renk: 1, x: 7, y: 5, etiket: "faiz ?", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T3, "Başlangıç: para piyasası E₁'de, faiz i₁.", ["MD", "MS", "E0"]),
      dur(T3, "**Yalnız genişletici maliye politikası:** AD artar, çıktı ve fiyatlar yükselir. Nominal GSYH büyüyünce para talebi artar: MD sağa (MD₂). Faiz ==yukarı==.", ["MDk", "MD2", "MS", "Ef"]),
      dur(T3, "**Yalnız genişletici para politikası:** MS sağa (MS₂). Faiz ==aşağı==.", ["MD", "MSk", "MS2", "Em"]),
      dur(T3, "**İkisi birlikte:** MD de MS de sağa. Para miktarı kesin artar; ama biri faizi yukarı, öteki aşağı iter. Eşit büyüklükte kayarlarsa faiz aynı kalır, genelde ==belirsiz==.", ["MDk", "MD2", "MSk", "MS2", "Eb"])
    ]
  };

  /* ---- Grafik 4: AD–AS, iki politika parça parça ---- */
  var T4 = ["LR", "SR", "AD1", "AD1k", "AD2", "AD2k", "AD3", "okA", "okB", "E1", "E2", "E3"];
  var G4 = {
    tip: "grafik", baslik: "Maliye ve para politikası birlikte AD'yi Yf'e taşır", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
    xticks: [{ v: 5, label: "Y₁" }, { v: 6, label: "Yf" }],
    yticks: [{ v: 5, label: "P₁" }, { v: 6, label: "P₂" }],
    ogeler: [
      { id: "LR", tip: "cizgi", renk: 2, from: [6, 0], to: [6, 9.6], etiket: "LRAS" },
      { id: "SR", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "SRAS" },
      { id: "AD1", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "AD₁" },
      { id: "AD1k", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "", gizli: true },
      { id: "AD2", tip: "cizgi", renk: 3, from: [2, 9], to: [10, 1], etiket: "AD₂", gizli: true },
      { id: "AD2k", tip: "cizgi", renk: 3, kesik: true, from: [2, 9], to: [10, 1], etiket: "", gizli: true },
      { id: "AD3", tip: "cizgi", renk: 2, from: [3, 9], to: [10, 2], etiket: "AD₃", gizli: true },
      { id: "okA", tip: "ok", renk: 3, from: [2.2, 8], to: [2.85, 8], gizli: true },
      { id: "okB", tip: "ok", renk: 2, from: [2.8, 8.3], to: [3.6, 8.3], gizli: true },
      { id: "E1", tip: "nokta", renk: 0, x: 5, y: 5, etiket: "E₁", kilavuz: true },
      { id: "E2", tip: "nokta", renk: 3, x: 5.5, y: 5.5, etiket: "E₂", kilavuz: true, gizli: true },
      { id: "E3", tip: "nokta", renk: 1, x: 6, y: 6, etiket: "E₃", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T4, "Resesyon açığı: AD₁, Yf'in solunda dengeleniyor (**E₁**).", ["LR", "SR", "AD1", "E1"]),
      dur(T4, "Hükümet harcamayı artırır: AD yalnız bir miktar sağa kayar (AD₂). Denge **E₂**; açık küçüldü ama kapanmadı.", ["LR", "SR", "AD1k", "AD2", "okA", "E2"]),
      dur(T4, "Merkez Bankası faizi düşürür: yatırım artar, AD biraz daha sağa kayar (AD₃). Denge **E₃**'te, tam ==Yf==. İki politika birlikte açığı kapattı.", ["LR", "SR", "AD1k", "AD2k", "AD3", "okB", "E3"])
    ]
  };

  return {
    slug: "mc501",
    amac: "Bu konu maliye ve para politikasının kısa dönemde ekonomiyi nasıl yönlendirdiğini anlatıyor. İki politikayı tek tek ve birlikte kullanarak resesyon ya da enflasyon açığını nasıl kapatacağını; çıktıya, fiyatlara ve faize etkisini öğreneceksin.",
    bolumler: [
      {
        baslik: "Çıktı açığı: politika neyi düzeltmeye çalışır?",
        kisa: "Çıktı Yf'ten uzaksa politika, AD'yi kaydırarak boşluğu kapatır.",
        bloklar: [
          { tip: "not", metin: "Tam istihdam çıktısı (Yf), LRAS'ın durduğu yerdir. Gerçek çıktı bunun altındaysa ==*recessionary gap*== (negatif çıktı açığı) vardır: işsizlik doğal oranın üstündedir. Üstündeyse ==*inflationary gap*== (pozitif çıktı açığı) vardır: işsizlik doğal oranın altındadır ve fiyatlar baskı altındadır." },
          G1,
          { tip: "ikili", sol: { ikon: "📉", baslik: "*Recessionary gap*", maddeler: ["Çıktı < Yf, işsizlik doğal oranın üstünde", "İlaç: AD'yi sağa kaydır (genişletici politika)"] },
            sag: { ikon: "🔥", baslik: "*Inflationary gap*", maddeler: ["Çıktı > Yf, işsizlik doğal oranın altında", "İlaç: AD'yi sola kaydır (daraltıcı politika)"] },
            oyun: [
              { metin: "İşsizlik %12; doğal oran %5. Fabrikalar yarı kapasite çalışıyor.", cevap: "sol", neden: "Çıktı Yf'in altında: resesyon açığı." },
              { metin: "Kantinlerde, yurtlarda, her yerde zam yağıyor; işsizlik doğal oranın altına indi.", cevap: "sag", neden: "Aşırı talep, fiyat baskısı: enflasyon açığı." },
              { metin: "Hükümet vergileri indirip harcamayı artırıyor.", cevap: "sol", neden: "Genişletici politika AD'yi sağa kaydırır; resesyon açığına uygun." },
              { metin: "Merkez Bankası faizi yükseltiyor.", cevap: "sag", neden: "Daraltıcı politika AD'yi sola kaydırır; enflasyon açığına uygun." }
            ] }
        ]
      },
      {
        baslik: "Maliye politikası: harcama ve vergi",
        kisa: "G artırmak ya da vergiyi indirmek AD'yi sağa, tersi sola kaydırır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🏗️", terim: "Expansionary fiscal policy", tr: "genişletici maliye politikası", tanim: "Hükümet harcamasını (G) ya da transferleri artırır veya vergileri (T) indirir. AD sağa kayar.", ornek: "Hükümet okul, köprü yapımını artırır; öğrencilere burs verir." },
              { ikon: "✂️", terim: "Contractionary fiscal policy", tr: "daraltıcı maliye politikası", tanim: "Hükümet G'yi ya da transferleri azaltır veya vergileri artırır. AD sola kayar.", ornek: "Bütçe açığını kısmak için harcama kesintisi ve vergi artışı." }
            ] },
          { tip: "tablo", baslik: "Maliye politikası araçları", head: ["Araç", "Genişletici (AD →)", "Daraltıcı (AD ←)"], rows: [
              ["Hükümet harcaması (G)", "artır", "azalt"],
              ["Vergiler (T)", "indir", "artır"],
              ["Transfer ödemeleri", "artır", "azalt"]
            ], not: "Maliye politikasını Meclis ve hükümet yapar; Merkez Bankası değil." },
          { tip: "ornek", baslik: "Açığı kapatmak için ne kadar harcama, ne kadar vergi indirimi?", durum: "Ekonomi Yf'in 20 milyar TL altında (resesyon açığı). Marjinal tüketim eğilimi MPC = 0,8. Fiyat düzeyinin tepkisi yok sayılıyor.",
            adimlar: ["MPS = 1 − 0,8 = 0,2. Harcama çarpanı = 1 ÷ MPS = 5.", "Gereken harcama artışı = 20 ÷ 5 = 4 milyar TL.", "Vergi çarpanı = −MPC ÷ MPS = −0,8 ÷ 0,2 = −4. Gereken vergi indirimi = 20 ÷ 4 = 5 milyar TL."],
            sonuc: "==4 milyar TL harcama artışı== ya da ==5 milyar TL vergi indirimi== açığı kapatır. Vergi çarpanı daha küçük olduğu için aynı etki için vergi indirimi, harcama artışından büyük olmalı." }
        ]
      },
      {
        baslik: "Para politikası: Merkez Bankası ve faiz",
        kisa: "Para arzı artınca faiz düşer, yatırım artar, AD sağa kayar.",
        bloklar: [
          G2,
          { tip: "tablo", baslik: "Merkez Bankası araçları", head: ["Araç", "Genişletici (MS →)", "Daraltıcı (MS ←)"], rows: [
              ["Açık piyasa işlemi (*open market operations*)", "tahvil alır", "tahvil satar"],
              ["Zorunlu karşılık oranı (*reserve requirement*)", "düşürür", "yükseltir"],
              ["İskonto oranı (*discount rate*)", "düşürür", "yükseltir"],
              ["Rezervlere ödenen faiz (*interest on reserves*)", "düşürür", "yükseltir"]
            ], not: "Hepsi aynı yöne bakar: genişletici para politikası = faiz aşağı, daraltıcı = faiz yukarı. AP sınavında hangi aracı kullanırsa kullansın grafik aynı: MS kayar." },
          { tip: "adimlar", baslik: "Genişletici para politikası AD'ye nasıl ulaşır?", adimlar: [
              { baslik: "1 · Para arzı artar", metin: "Merkez Bankası tahvil alır; bankaların rezervi ve para arzı artar." },
              { baslik: "2 · Faiz düşer", metin: "Para piyasasında MS sağa kayar, nominal faiz iner." },
              { baslik: "3 · Harcama artar", metin: "Kredi ucuzlar; firmalar yatırım, hanehalkları ev ve dayanıklı mal harcaması yapar." },
              { baslik: "4 · AD sağa kayar", metin: "Çıktı ve fiyat düzeyi artar." }
            ] }
        ]
      },
      {
        baslik: "İki politika birlikte: dört birleşim",
        kisa: "Çıktı yönü ortaksa kesin; faiz ters yöne çekiliyorsa belirsiz.",
        bloklar: [
          { tip: "not", metin: "Genişletici maliye politikası AD'yi sağa iter, çıktı ve fiyatlar artar, para talebi büyür ve faiz ==yükselir== (açığı finanse için borçlanma da faizi yukarı iter, bkz. 5.5). Genişletici para politikası ise faizi ==düşürür==. İkisi birlikte kullanılınca AD kesin sağa kayar ama faize iki zıt kuvvet etki eder." },
          { tip: "tablo", baslik: "Dört birleşim (2×2)", head: ["", "Para: genişletici", "Para: daraltıcı"], rows: [
              ["Maliye: genişletici", "AD kesin ↑ · faiz belirsiz", "Faiz kesin ↑ · AD belirsiz"],
              ["Maliye: daraltıcı", "Faiz kesin ↓ · AD belirsiz", "AD kesin ↓ · faiz belirsiz"]
            ], not: "Çıktı ve fiyat düzeyi AD'yi izler. Mantık, çift kayma (*double shift*) kuralı gibi: iki kuvvet aynı yöne itiyorsa sonuç kesin, ters yöne itiyorsa belirsiz." },
          G3,
          { tip: "tuzak", metin: "\"İkisi de genişletici, o halde faiz kesin düşer\" demek cazip görünür.", yanlis: "Genişletici maliye ve genişletici para politikası birlikte faizi kesin düşürür.", dogru: "AD (dolayısıyla çıktı ve fiyat) kesin artar; faiz ==belirsizdir==, çünkü maliye faizi yukarı, para aşağı iter." }
        ]
      },
      {
        baslik: "Sınav kalıbı: önce açığı bul, sonra birleştir",
        kisa: "Önce açığın türünü belirle; sonra her politikanın AD ve faiz etkisini ayrı ayrı yaz.",
        bloklar: [
          G4,
          { tip: "ornek", baslik: "Enflasyon açığında karışık reçete", durum: "Ekonomi Yf'in üstünde. Meclis vergileri artırıyor, Merkez Bankası açık piyasada tahvil satıyor. AD, çıktı, fiyat düzeyi ve faize ne olur?",
            adimlar: ["Vergi artışı: harcanabilir gelir düşer, tüketim azalır; AD sola.", "Tahvil satışı: MS sola, faiz yükselir, yatırım azalır; AD sola.", "İkisi AD'yi sola iter: AD kesin ↓; çıktı ve fiyat düzeyi ↓ (açık kapanır).", "Faiz: para politikası yukarı iter; maliye çıktıyı ve para talebini azaltıp aşağı iter: belirsiz."],
            sonuc: "==AD, çıktı ve fiyat düzeyi düşer; faiz belirsiz.== Bunu çiz: AD sola kayar, para piyasasında MS sola ve MD sola." },
          { tip: "tuzak", baslik: "Önce açığı bul", metin: "Politika yönünü grafiğe bakmadan seçersen yanlış ilacı verirsin.", yanlis: "Hükümet her zaman harcamayı artırmalı, çünkü AD yükselince herkes kazanır.", dogru: "Resesyon açığında genişletici, enflasyon açığında daraltıcı politika. Önce LRAS'a göre dengenin yerine bak." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Çıktı Yf'in altındaysa *recessionary gap*, üstündeyse *inflationary gap* vardır; politika AD'yi kaydırarak boşluğu kapatır.",
              "Genişletici maliye: G↑ ya da T↓; AD sağa. Daraltıcı maliye: G↓ ya da T↑; AD sola.",
              "Çarpan örneği: MPC 0,8 ise harcama çarpanı 5, vergi çarpanı −4; 20 milyarlık açık için 4 milyar harcama ya da 5 milyar vergi indirimi.",
              "Genişletici para politikası: tahvil alımı, düşük zorunlu karşılık ve iskonto oranı; MS sağa, faiz aşağı, yatırım ve AD yukarı.",
              "Para piyasasında MD aşağı eğimli, MS dikey; politika MS'yi kaydırır.",
              "Genişletici maliye politikası faizi yükseltir (para talebi artar, borçlanma artar); genişletici para politikası faizi düşürür.",
              "İki politika aynı yönde: AD, çıktı, fiyat kesin; faiz belirsiz. Ters yönde: faiz kesin, AD belirsiz.",
              "Önce açığı bul, sonra her politikayı ayrı çiz, en sonda birleştir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Ekonomi *inflationary gap*'te. Merkez Bankası açık piyasada tahvil satıyor, hükümet de harcamalarını azaltıyor. Aşağıdakilerden hangisi kesin olarak doğrudur?",
        opts: ["AD sola kayar.", "Nominal faiz yükselir.", "Reel GSYH artar.", "Fiyat düzeyi artar."], a: 0,
        why: "İkisi de daraltıcı: AD kesin sola kayar, çıktı ve fiyat düzeyi düşer. Faiz kesin değildir; tahvil satışı faizi yükseltir ama harcama kesintisi çıktıyı ve para talebini azaltıp faizi düşürür. B bu yüzden en çekici yanlış şıktır." },
      { q: "Grafikte para piyasası MS₁'den MS₂'ye kaymıştır. Aşağıdakilerden hangisi bu kaymayı açıklar?",
        fig: { type: "graph", xlabel: "Para miktarı", ylabel: "Nominal faiz", xmax: 10, ymax: 10,
          lines: [{ from: [1, 9], to: [9, 1], label: "MD", color: 0 }, { from: [5, 0], to: [5, 9.4], label: "MS₁", color: 1 }, { from: [7, 0], to: [7, 9.4], label: "MS₂", color: 2 }],
          points: [{ q: 5, p: 5, label: "E₁", guides: true }, { q: 7, p: 3, label: "E₂", guides: true }],
          xticks: [{ v: 5, label: "M₁" }, { v: 7, label: "M₂" }], yticks: [{ v: 3, label: "i₂" }, { v: 5, label: "i₁" }] },
        opts: ["Merkez Bankası açık piyasada tahvil satar.", "Zorunlu karşılık oranı yükselir.", "Merkez Bankası iskonto oranını düşürür.", "Hükümet vergileri artırır."], a: 2,
        why: "MS sağa kayıyor ve faiz düşüyor: genişletici para politikası. İskonto oranı düşünce bankalar ucuz borç alıp rezervlerini artırır. A ve B MS'yi sola kaydırır; D maliye politikasıdır ve MS'yi kaydırmaz." },
      { q: "Ekonomi Yf'in 40 milyar TL altında ve MPC = 0,75. Yalnız hükümet harcamasıyla açığı kapatmak için harcama ne kadar artmalıdır? (Fiyat düzeyi tepkisi yok sayılır.)",
        opts: ["8 milyar TL", "10 milyar TL", "30 milyar TL", "40 milyar TL"], a: 1,
        why: "MPS = 1 − 0,75 = 0,25; harcama çarpanı = 1 ÷ 0,25 = 4. Gereken artış = 40 ÷ 4 = 10 milyar TL. D şıkkı çarpanı unutup açığın tamamını harcama sanmaktır." },
      { q: "Grafikteki durumu kapatmak için hangi politika birleşimi uygundur?",
        fig: { type: "graph", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
          lines: [{ from: [6, 0], to: [6, 9.6], label: "LRAS", color: 2 }, { from: [1, 1], to: [9, 9], label: "SRAS", color: 1 }, { from: [5, 9], to: [10, 4], label: "AD", color: 0 }],
          points: [{ q: 7, p: 7, label: "E", guides: true }],
          xticks: [{ v: 6, label: "Yf" }, { v: 7, label: "Y₁" }], yticks: [{ v: 7, label: "P₁" }] },
        opts: ["Vergi indirimi ve tahvil alımı", "Harcama artışı ve zorunlu karşılık oranının düşürülmesi", "Transfer ödemelerinin artırılması ve iskonto oranının düşürülmesi", "Vergi artışı ve açık piyasada tahvil satışı"], a: 3,
        why: "Denge LRAS'ın sağında: enflasyon açığı. AD sola kaymalı; vergi artışı ve tahvil satışı ikisi de daraltıcı. Diğer üç şıkkın hepsi AD'yi sağa kaydırır ve açığı büyütür." },
      { q: "Resesyondaki bir ekonomide hükümet harcamasını artırıyor, Merkez Bankası da faiz düşürücü politika uyguluyor. Reel çıktı ve nominal faiz için aşağıdakilerden hangisi doğrudur?",
        opts: ["Çıktı belirsiz, faiz düşer.", "Çıktı artar, faiz belirsiz.", "Çıktı artar, faiz artar.", "Çıktı azalır, faiz belirsiz."], a: 1,
        why: "İki politika da AD'yi sağa kaydırır: çıktı kesin artar. Maliye faizi yukarı, para aşağı ittiği için faiz belirsizdir. A şıkkı tuzaktır: \"faiz düşürücü politika var, faiz düşer\" demek maliye politikasının etkisini unutur." }
    ]
  };
})();
