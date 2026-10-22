/* Kitora not defteri · mc605 · 6.5 Döviz Piyasası ve Net İhracat
   Kaynak: CED Topic 6.5 (MKT-5.F). Blok türleri: /ap/_kit/defter.js başı.
   Kurlar: 1 $ = 20 TL (TL = 0,05 $); değerlenince 1 $ = 16 TL (0,0625 $); değer kaybedince 1 $ = 25 TL (0,04 $).
   AD–AS grafiği: AD₁ y = 10 − x, SRAS y = x, LRAS x = 8; AD₂ (sağa 2) y = 12 − x → (6,6); AD₃ (sola 2) y = 8 − x → (4,4). */
window.DEFTER = {
  slug: "mc605",
  amac: "Bu konu kur değişiminin dış ticarete ve toplam talebe nasıl yansıdığını anlatıyor. Değerlenen ya da değer kaybeden paranın ihracatı, ithalatı ve net ihracatı nasıl etkilediğini; bunun *AD*'yi, üretimi, fiyat düzeyini ve istihdamı nasıl değiştirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Kur değişince ihracat ve ithalat fiyatları değişir",
      kisa: "Kur değişince Türk malının yabancı, yabancı malın Türk için fiyatı değişir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*AD*", alt: "toplam talep" }, "=",
            { t: "C", alt: "tüketim" }, "+", { t: "I", alt: "yatırım" }, "+", { t: "G", alt: "kamu" }, "+",
            { t: "NX", alt: "net ihracat = X − M" }
          ], aciklama: "Net ihracat, ihracat (*exports*) eksi ithalattır (*imports*). Kur, NX'i etkilediği için *AD*'yi de etkiler." },
        { tip: "tablo", baslik: "Aynı çay, aynı tişört, üç farklı kur", head: ["Kur", "TL'nin durumu", "100 TL'lik Türk çayı, ABD'li için", "10 $'lık tişört, Türk için"], rows: [
            ["1 $ = 16 TL", "Değerlendi", "6,25 $", "160 TL"],
            ["1 $ = 20 TL", "Başlangıç", "5 $", "200 TL"],
            ["1 $ = 25 TL", "Değer kaybetti", "4 $", "250 TL"]
          ], vurgu: 1, not: "TL değerlenince Türk malı yabancıya pahalanır, yabancı mal Türk'e ucuzlar; değer kaybedince tersi olur." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📤", terim: "Exports", tr: "ihracat", tanim: "Yabancılara satılan mal ve hizmetler. Yabancı alıcı bunu **kendi parasıyla** hesaplar.", ornek: "Fındık satışı, Antalya'da turist ağırlamak." },
            { ikon: "📥", terim: "Imports", tr: "ithalat", tanim: "Yabancılardan alınan mal ve hizmetler. Türk alıcı bunu **TL ile** hesaplar.", ornek: "İthal telefon, yurtdışı oyun aboneliği." },
            { ikon: "⚖️", terim: "Net exports", tr: "net ihracat (NX)", tanim: "İhracat eksi ithalat. Kur, ikisinin fiyat etiketini birden değiştirir.", ornek: "10 milyar $ satıp 12 milyar $ alırsan NX = −2." }
          ] }
      ]
    },
    {
      baslik: "Değerlenen para ve değer kaybeden para: ihracat ve ithalat",
      kisa: "Para değerlenince ihracat azalır, ithalat artar, net ihracat düşer; değer kaybedince tersi.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📈", baslik: "TL değerlenir (*appreciation*)", maddeler: ["Türk malı yabancıya pahalanır: ihracat ↓", "Yabancı mal Türk'e ucuzlar: ithalat ↑", "Net ihracat ↓"] },
          sag: { ikon: "📉", baslik: "TL değer kaybeder (*depreciation*)", maddeler: ["Türk malı yabancıya ucuzlar: ihracat ↑", "Yabancı mal Türk'e pahalanır: ithalat ↓", "Net ihracat ↑"] },
          oyun: [
            { metin: "Türk fındığı yabancı alıcıya pahalanıyor, siparişler azalıyor.", cevap: "sol", neden: "Türk malı pahalanıyor: TL değerlenmiştir." },
            { metin: "Yurtdışından alınan tişört Türkler için ucuzluyor, ithalat artıyor.", cevap: "sol", neden: "Yabancı mal ucuzluyor: TL değerlenmiştir." },
            { metin: "Antalya'daki oteller turistlere ucuz geliyor, rezervasyonlar artıyor.", cevap: "sag", neden: "Türk hizmeti yabancı için ucuzluyor: TL değer kaybetmiştir." },
            { metin: "İthal telefonlar Türkler için pahalanıyor, ithalat düşüyor.", cevap: "sag", neden: "Yabancı mal pahalanıyor: TL değer kaybetmiştir." },
            { metin: "Net ihracat artıyor.", cevap: "sag", neden: "İhracat artıp ithalat düşünce NX artar: TL değer kaybetmiştir." }
          ] },
        { tip: "grafik", baslik: "Kur değişince ihracat ve ithalat", xlabel: "İhracat ve ithalat", ylabel: "Miktar (milyon adet)", xmax: 9, ymax: 12,
          xticks: [{ v: 2.5, label: "İhracat (X)" }, { v: 6.5, label: "İthalat (M)" }],
          ogeler: [
            { id: "bx", tip: "alan", renk: 0, noktalar: [[1.5, 0], [3.5, 0], [3.5, 8], [1.5, 8]] },
            { id: "bm", tip: "alan", renk: 3, noktalar: [[5.5, 0], [7.5, 0], [7.5, 7], [5.5, 7]] },
            { id: "vx", tip: "yazi", x: 2.5, y: 8.7, metin: "X = 8" },
            { id: "vm", tip: "yazi", x: 6.5, y: 7.7, metin: "M = 7" },
            { id: "nx", tip: "yazi", x: 4.5, y: 11.2, metin: "NX = 8 − 7 = +1" }
          ],
          durumlar: [
            { metin: "Başlangıç (1 $ = 20 TL): ihracat 8, ithalat 7 milyon adet. Net ihracat **+1**." },
            { metin: "TL ==değerlenir== (1 $ = 16 TL): ihracat 8 → 6, ithalat 7 → 9. Net ihracat ==−3==.", set: { bx: { noktalar: [[1.5, 0], [3.5, 0], [3.5, 6], [1.5, 6]] }, bm: { noktalar: [[5.5, 0], [7.5, 0], [7.5, 9], [5.5, 9]] }, vx: { y: 6.7, metin: "X = 6" }, vm: { y: 9.7, metin: "M = 9" }, nx: { metin: "NX = 6 − 9 = −3" } } },
            { metin: "TL ==değer kaybeder== (1 $ = 25 TL): ihracat 8 → 10, ithalat 7 → 5. Net ihracat ==+5==.", set: { bx: { noktalar: [[1.5, 0], [3.5, 0], [3.5, 10], [1.5, 10]] }, bm: { noktalar: [[5.5, 0], [7.5, 0], [7.5, 5], [5.5, 5]] }, vx: { y: 10.7, metin: "X = 10" }, vm: { y: 5.7, metin: "M = 5" }, nx: { metin: "NX = 10 − 5 = +5" } } },
            { metin: "Kural: ==değerlenme NX'i düşürür, değer kaybı NX'i artırır.== Rakamlar varsayımsaldır; yön önemlidir." }
          ] }
      ]
    },
    {
      baslik: "Net ihracat değişince AD kayar",
      kisa: "NX, AD'nin bir parçasıdır; NX artarsa AD sağa, azalırsa sola kayar.",
      bloklar: [
        { tip: "grafik", baslik: "Kur değişimi AD–AS'te", xlabel: "Reel GSYH (Y)", ylabel: "Fiyat düzeyi (PL)", xmax: 10, ymax: 10,
          xticks: [{ v: 4, label: "Y₃" }, { v: 5, label: "Y₁" }, { v: 6, label: "Y₂" }, { v: 8, label: "Y*" }],
          yticks: [{ v: 4, label: "PL₃" }, { v: 5, label: "PL₁" }, { v: 6, label: "PL₂" }],
          ogeler: [
            { id: "AD", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "AD₁" },
            { id: "SR", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "SRAS" },
            { id: "LR", tip: "cizgi", renk: 2, from: [8, 0], to: [8, 10], etiket: "LRAS" },
            { id: "ADk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "AD₁", gizli: true },
            { id: "AD2", tip: "cizgi", renk: 3, from: [3, 9], to: [9, 3], etiket: "AD₂", gizli: true },
            { id: "AD3", tip: "cizgi", renk: 3, from: [0.5, 7.5], to: [7.5, 0.5], etiket: "AD₃", gizli: true },
            { id: "okR", tip: "ok", renk: 3, from: [3.3, 7], to: [4.8, 7], gizli: true },
            { id: "okL", tip: "ok", renk: 3, from: [6.7, 3], to: [5.3, 3], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 6, y: 6, etiket: "E₂", kilavuz: true, gizli: true },
            { id: "E3", tip: "nokta", renk: 2, x: 4, y: 4, etiket: "E₃", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: *AD*₁ ve *SRAS* E₁'de kesişir; Y₁ üretim potansiyelinin (LRAS) altında." },
            { metin: "TL değer kaybeder: ihracat artar, ithalat azalır, NX artar. ==*AD* sağa== kayar (AD₁ → AD₂).", goster: ["ADk", "AD2", "okR"], gizle: ["AD"] },
            { metin: "Yeni denge E₂: reel GSYH ==artar== (Y₂), fiyat düzeyi ==artar== (PL₂), istihdam artar, işsizlik azalır.", goster: ["E2"] },
            { metin: "Tersi: TL değerlenirse NX azalır ve ==*AD* sola== kayar (AD₃). E₃'te reel GSYH ==düşer==, fiyat düzeyi ==düşer==, istihdam azalır.", goster: ["AD3", "okL", "E3"], gizle: ["AD2", "okR", "E2"] }
          ] },
        { tip: "tablo", baslik: "Kur değişiminin zinciri", head: ["Kur değişimi", "X", "M", "NX", "AD", "Y", "PL", "İstihdam"], rows: [
            ["TL değerlenir", "↓", "↑", "↓", "Sola", "↓", "↓", "↓"],
            ["TL değer kaybeder", "↑", "↓", "↑", "Sağa", "↑", "↑", "↑"]
          ] }
      ]
    },
    {
      baslik: "Politika kuru, kur da AD'yi etkiler",
      kisa: "Faiz kararı sermaye akımını, kuru, net ihracatı ve sonunda AD'yi etkiler.",
      bloklar: [
        { tip: "ornek", baslik: "Faiz artışının kur kanalı", durum: "Türkiye Merkez Bankası kısa vadeli faizi artırıyor. Diğer her şey sabitken kur kanalıyla AD, üretim ve fiyat düzeyine ne olur?",
          adimlar: [
            "Faiz artınca Türk varlıkları yabancı için cazip olur: sermaye girer, **TL talebi sağa** kayar.",
            "TL **değerlenir** (*appreciation*).",
            "Türk malı yabancıya pahalanır, yabancı mal Türk'e ucuzlar: ihracat ↓, ithalat ↑, **NX ↓**.",
            "NX, *AD*'nin parçasıdır: ==*AD* sola== kayar. (Yüksek faiz yatırım ve tüketimi de kısar; bu ayrı bir etkidir ve *AD*'yi aynı yöne iter.)",
            "Reel GSYH ↓, fiyat düzeyi ↓, istihdam ↓."
          ],
          sonuc: "Daraltıcı para politikası kur kanalıyla *AD*'yi ikinci kez sola iter: kur etkisi faizin ilk etkisini güçlendirir." },
        { tip: "adimlar", baslik: "Ters yönde: faiz indirimi", adimlar: [
            { baslik: "Faiz ↓", metin: "Sermaye çıkar: TL talebi sola, TL arzı sağa kayar; TL **değer kaybeder**." },
            { baslik: "NX ↑", metin: "Türk malı yabancıya ucuzlar, ithalat pahalanır." },
            { baslik: "AD sağa", metin: "Reel GSYH ↑, fiyat düzeyi ↑, istihdam ↑: genişletici politikanın etkisi güçlenir." }
          ] }
      ]
    },
    {
      baslik: "Güçlü para herkes için iyi mi?",
      kisa: "Değerlenme ithalatçıyı ve tüketiciyi sevindirir, ihracatçıyı ve turizmi üzer.",
      bloklar: [
        { tip: "tablo", baslik: "Kim kazanır, kim kaybeder?", head: ["Kim?", "TL değerlenince", "TL değer kaybedince"], rows: [
            ["Fındık ihracatçısı", "Kaybeder: fındık yabancıya pahalanır", "Kazanır: fındık yabancıya ucuzlar"],
            ["Telefon ithal eden öğrenci", "Kazanır: telefon TL'ye ucuzlar", "Kaybeder: telefon TL'ye pahalanır"],
            ["Antalya'da otelci", "Kaybeder: Türkiye turiste pahalanır", "Kazanır: Türkiye turiste ucuzlar"],
            ["Yurtdışında tatil yapacak Türk", "Kazanır: tatil TL'ye ucuzlar", "Kaybeder: tatil TL'ye pahalanır"]
          ] },
        { tip: "tuzak", metin: "\"Güçlü para\" kulağa hoş gelir ama değerlenme ihracatı vurur. Değer kaybı ise ihracatçıya yarar, fakat ithalatı pahalandırır. Sınavda gerekçen hep X, M ve NX olmalı.", yanlis: "Para değerlenirse ülkenin net ihracatı artar, çünkü para daha değerlidir.", dogru: "TL değerlenince Türk malı yabancıya pahalanır: ihracat azalır, ithalat artar ve ==net ihracat azalır==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "NX = ihracat − ithalat; *AD* = C + I + G + NX. Kur NX'i, NX de *AD*'yi etkiler.",
            "Para değerlenirse yurtiçi mal yabancıya pahalanır, yabancı mal yurtiçine ucuzlar: ihracat ↓, ithalat ↑, NX ↓.",
            "Para değer kaybederse ihracat ↑, ithalat ↓, NX ↑.",
            "NX azalınca *AD* sola, artınca sağa kayar.",
            "*AD* sola: reel GSYH ↓, fiyat düzeyi ↓, istihdam ↓; *AD* sağa: reel GSYH ↑, fiyat düzeyi ↑, istihdam ↑.",
            "Faiz artışı → sermaye girişi → para değerlenir → NX ↓ → *AD* sola; faiz indirimi tersini yapar.",
            "Değerlenme ihracatçı ve turizmi, değer kaybı ise ithalatçı ve yurtdışına gidenleri üzer.",
            "Cevabı hep \"kur → X ve M → NX → AD\" sırasıyla yaz."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "TL dolar karşısında değer kaybederse, diğer her şey sabitken aşağıdakilerden hangisi olur?",
      opts: [
        "İhracat azalır, ithalat artar, net ihracat azalır.",
        "İhracat artar, ithalat azalır, net ihracat artar.",
        "İhracat ve ithalat ikisi de artar.",
        "Net ihracat değişmez; yalnızca fiyatlar değişir."
      ],
      a: 1,
      why: "Değer kaybeden TL, Türk malını yabancıya ucuzlatır (ihracat artar) ve yabancı malı Türk'e pahalandırır (ithalat azalır); net ihracat artar. İlk şık değerlenmeyi anlatır."
    },
    {
      q: "Şekilde *AD* eğrisi AD₁'den AD₂'ye kaymıştır. Bu kaymaya aşağıdakilerden hangisi yol açabilir?",
      fig: { type: "graph", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
        lines: [{ from: [1, 9], to: [9, 1], label: "AD₁", dash: true }, { from: [3, 9], to: [9, 3], label: "AD₂" }, { from: [1, 1], to: [9, 9], label: "SRAS" }, { from: [8, 0], to: [8, 10], label: "LRAS" }],
        points: [{ q: 5, p: 5, label: "E₁", guides: true }, { q: 6, p: 6, label: "E₂", guides: true }] },
      opts: [
        "TL'nin değerlenmesi",
        "Yabancı yatırımcıların Türk tahvillerine ilgisinin artması",
        "Merkez Bankası'nın faizi artırması",
        "TL'nin değer kaybetmesi"
      ],
      a: 3,
      why: "TL değer kaybedince ihracat artar, ithalat azalır, NX artar ve *AD* sağa kayar. Diğer şıkların hepsi TL'yi değerlendirir (daha çok sermaye girişi), NX'i düşürür ve *AD*'yi sola kaydırır."
    },
    {
      q: "Türk Lirası değerleniyor. Fındık ihracatçısı ile yurtdışından telefon sipariş eden bir öğrenci için sonuç ne olur?",
      opts: [
        "İhracatçı kaybeder, öğrenci kazanır.",
        "İkisi de kazanır.",
        "İhracatçı kazanır, öğrenci kaybeder.",
        "İkisi de kaybeder."
      ],
      a: 0,
      why: "TL değerlenince fındık yabancıya pahalanır ve ihracatçı kaybeder; telefon ise TL cinsinden ucuzlar ve öğrenci kazanır. Üçüncü şık tersini söyler; değer kaybı olsaydı doğru olurdu."
    },
    {
      q: "Kur 1 $ = 20 TL iken 1 $ = 25 TL oluyor. ABD'de 100 $ olan bir ürün Türkiye'de TL fiyatıyla, Türkiye'de 500 TL olan bir ürün ise ABD'li alıcı için dolar fiyatıyla nasıl değişir?",
      opts: [
        "İthal ürün 2.500 TL'den 2.000 TL'ye düşer; Türk ürünü 20 $'dan 25 $'a çıkar.",
        "İthal ürün 2.000 TL'den 2.500 TL'ye çıkar; Türk ürünü 20 $'dan 25 $'a çıkar.",
        "İthal ürün 2.000 TL'den 2.500 TL'ye çıkar; Türk ürünü 25 $'dan 20 $'a düşer.",
        "İkisinin de fiyatı değişmez."
      ],
      a: 2,
      why: "100 × 20 = 2.000 TL iken 100 × 25 = 2.500 TL olur. Türk ürünü için 500 ÷ 20 = 25 $ iken 500 ÷ 25 = 20 $ olur. TL değer kaybettiği için ithalat pahalanır, ihracat ucuzlar ve NX artar. İkinci şık, Türk ürününün dolar fiyatını yanlış yönde yazar."
    },
    {
      q: "Türkiye Merkez Bankası kısa vadeli faizi artırıyor. Diğer her şey sabitken kur kanalı yoluyla hangisi doğrudur?",
      opts: [
        "Sermaye çıkar, TL değer kaybeder, NX artar, *AD* sağa kayar.",
        "Sermaye girer, TL değerlenir, NX azalır, *AD* sola kayar.",
        "Sermaye girer, TL değerlenir, NX artar, *AD* sağa kayar.",
        "Sermaye çıkar, TL değer kaybeder, NX azalır, *AD* sola kayar."
      ],
      a: 1,
      why: "Yüksek faiz yabancı sermayeyi çeker; TL talebi artar ve TL değerlenir. Değerlenen TL ihracatı düşürüp ithalatı artırarak NX'i azaltır ve *AD* sola kayar. Üçüncü şık değerlenmeyi doğru bulup NX'in yönünü ters yazar."
    }
  ]
};
