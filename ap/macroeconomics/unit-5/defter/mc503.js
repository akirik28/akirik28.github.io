/* Kitora not defteri · mc503 · 5.3 Para Arzı Artışı ve Enflasyon
   Kaynak: CED Topic 5.3 (POL-3.A). Blok türleri: /ap/_kit/defter.js başı.
   Taban (merdiven grafiği): LRAS x = 6; SRAS₁ y = x, SRAS₂ y = x + 2, SRAS₃ y = x + 4; AD₁ y = 12 − x, AD₂ y = 14 − x, AD₃ y = 16 − x. */
window.DEFTER = (function () {
  function dur(tum, metin, acik) {
    return { metin: metin, goster: acik, gizle: tum.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }

  /* ---- Grafik 1: para büyümesi ve enflasyon ---- */
  var T1 = ["L1", "L2", "P1", "P2", "H"];
  var G1 = {
    tip: "grafik", baslik: "Para arzı büyümesi ve enflasyon (V sabit)", xlabel: "Para arzı büyümesi (%)", ylabel: "Enflasyon (%)", xmax: 10, ymax: 10,
    xticks: [{ v: 2, label: "2" }, { v: 6, label: "6" }, { v: 9, label: "9" }],
    yticks: [{ v: 4, label: "4" }, { v: 6, label: "6" }, { v: 9, label: "9" }],
    ogeler: [
      { id: "L1", tip: "cizgi", renk: 0, from: [0, 0], to: [10, 10], etiket: "Y sabit" },
      { id: "L2", tip: "cizgi", renk: 1, from: [2, 0], to: [10, 8], etiket: "Y %2 büyür", gizli: true },
      { id: "P1", tip: "nokta", renk: 0, x: 6, y: 6, etiket: "P₁", kilavuz: true, gizli: true },
      { id: "P2", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "P₂", kilavuz: true, gizli: true },
      { id: "H", tip: "nokta", renk: 3, x: 9, y: 9, etiket: "H", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T1, "Hem hız (V) hem reel çıktı (Y) sabitse miktar teorisi şunu der: ==enflasyon = para arzı büyümesi==. Çizgi 45°'dir.", ["L1"]),
      dur(T1, "Para arzı yılda %6 büyüyorsa fiyatlar yılda %6 artar: **P₁**.", ["L1", "P1"]),
      dur(T1, "Reel çıktı da %2 büyüyorsa daha çok mal vardır; aynı para daha çok maldır. Enflasyon %4'e düşer: **P₂**. Çizgi ==aşağı kayar==.", ["L1", "L2", "P2"]),
      dur(T1, "Para arzı yılda %9 ve Y sabit: enflasyon %9. Para ne kadar hızlı basılırsa fiyatlar o kadar hızlı artar: **H**.", ["L1", "H"])
    ]
  };

  /* ---- Grafik 2: AD–AS, fiyat merdiveni ---- */
  var T2 = ["LR", "S1", "S1k", "S2", "S2k", "S3", "A1", "A1k", "A2", "A2k", "A3", "E0", "Es", "E1", "E2"];
  var G2 = {
    tip: "grafik", baslik: "Para arzı arttıkça AD kayar; uzun dönemde yalnız fiyat yükselir", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 11,
    xticks: [{ v: 6, label: "Yf" }, { v: 7, label: "Y₁" }],
    yticks: [{ v: 6, label: "P₀" }, { v: 8, label: "P₁" }, { v: 10, label: "P₂" }],
    ogeler: [
      { id: "LR", tip: "cizgi", renk: 2, from: [6, 0], to: [6, 10.6], etiket: "LRAS" },
      { id: "S1", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "SRAS₁" },
      { id: "S1k", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "", gizli: true },
      { id: "S2", tip: "cizgi", renk: 1, from: [1, 3], to: [8, 10], etiket: "SRAS₂", gizli: true },
      { id: "S2k", tip: "cizgi", renk: 1, kesik: true, from: [1, 3], to: [8, 10], etiket: "", gizli: true },
      { id: "S3", tip: "cizgi", renk: 1, from: [1, 5], to: [7, 11], etiket: "SRAS₃", gizli: true },
      { id: "A1", tip: "cizgi", renk: 0, from: [2, 10], to: [10, 2], etiket: "AD₁" },
      { id: "A1k", tip: "cizgi", renk: 0, kesik: true, from: [2, 10], to: [10, 2], etiket: "", gizli: true },
      { id: "A2", tip: "cizgi", renk: 3, from: [4, 10], to: [10, 4], etiket: "AD₂", gizli: true },
      { id: "A2k", tip: "cizgi", renk: 3, kesik: true, from: [4, 10], to: [10, 4], etiket: "", gizli: true },
      { id: "A3", tip: "cizgi", renk: 3, from: [5, 11], to: [10, 6], etiket: "AD₃", gizli: true },
      { id: "E0", tip: "nokta", renk: 0, x: 6, y: 6, etiket: "E₀", kilavuz: true },
      { id: "Es", tip: "nokta", renk: 3, x: 7, y: 7, etiket: "kısa dönem", kilavuz: true, gizli: true },
      { id: "E1", tip: "nokta", renk: 1, x: 6, y: 8, etiket: "E₁", kilavuz: true, gizli: true },
      { id: "E2", tip: "nokta", renk: 1, x: 6, y: 10, etiket: "E₂", kilavuz: true, gizli: true }
    ],
    durumlar: [
      dur(T2, "Başlangıç: tam istihdamda uzun dönem denge **E₀**; fiyat düzeyi P₀.", ["LR", "S1", "A1", "E0"]),
      dur(T2, "Merkez Bankası para arzını artırır: AD sağa (AD₂). Kısa dönemde çıktı Y₁'e, tam istihdamın üstüne çıkar; fiyat da yükselir.", ["LR", "S1", "A1k", "A2", "Es"]),
      dur(T2, "Ücretler ve maliyetler artar, SRAS sola (SRAS₂). Çıktı Yf'e geri döner; ama fiyat düzeyi ==P₀'dan P₁'e çıkmış kalır==: **E₁**.", ["LR", "S1k", "S2", "A2", "E1"]),
      dur(T2, "Para arzı artmaya devam ederse AD₃ ve SRAS₃ gelir: **E₂**. Çıktı hep Yf'te, fiyatlar merdiven gibi yukarı: ==enflasyon parasal bir olgudur==.", ["LR", "S2k", "S3", "A2k", "A3", "E2"])
    ]
  };

  return {
    slug: "mc503",
    amac: "Bu konu paranın miktarı ile fiyatlar arasındaki ilişkiyi anlatıyor. Miktar teorisini (MV = PY), para arzı, hız, fiyat düzeyi ve reel çıktıyı hesaplamayı; neden uzun dönemde enflasyonun parasal bir olgu olduğunu öğreneceksin.",
    bolumler: [
      {
        baslik: "Takas denklemi: MV = PY",
        kisa: "Harcanan toplam para (MV), satılan malın nominal değerine (PY) eşittir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "M × V", alt: "paranın el değiştirmesi" }, "=",
              { t: "P × Y", alt: "nominal GSYH" }
            ], aciklama: "Bir yılda ekonomide harcanan para, o yıl satılan malların toplam değerine eşit olmak zorundadır." },
          { tip: "kavramlar", kartlar: [
              { ikon: "💵", terim: "Money supply (M)", tr: "para arzı", tanim: "Ekonomideki toplam para miktarı. Merkez Bankası belirler.", ornek: "Piyasadaki toplam lira." },
              { ikon: "🔄", terim: "Velocity of money (V)", tr: "paranın dolaşım hızı", tanim: "Bir liranın bir yılda ortalama kaç kez el değiştirdiği: V = nominal GSYH ÷ M.", ornek: "Harçlığın bir ayda kantinde, sonra servisçide, sonra manavda harcanması." },
              { ikon: "🏷️", terim: "Price level (P)", tr: "fiyat düzeyi", tanim: "Genel fiyat seviyesi (fiyat endeksi gibi).", ornek: "Sepetin ortalama fiyatı." },
              { ikon: "🏭", terim: "Real output (Y)", tr: "reel çıktı", tanim: "Fiyat değişimlerinden arındırılmış üretim miktarı (reel GSYH).", ornek: "Yıl içinde üretilen mal ve hizmet miktarı." }
            ] }
        ]
      },
      {
        baslik: "Hesap: dört bilinmeyenden birini bul",
        kisa: "Üç değişkeni bilirsen MV = PY'den dördüncüyü bulursun.",
        bloklar: [
          { tip: "tablo", baslik: "MV = PY'den çıkan dört formül", head: ["Aranan", "Formül"], rows: [
              ["Fiyat düzeyi P", "P = M × V ÷ Y"],
              ["Reel çıktı Y", "Y = M × V ÷ P"],
              ["Para arzı M", "M = P × Y ÷ V"],
              ["Dolaşım hızı V", "V = P × Y ÷ M"]
            ], not: "Önce MV = PY yaz, sonra bilinmeyeni yalnız bırak." },
          { tip: "ornek", baslik: "Kantinistan: para arzı iki katına çıkarsa", durum: "Kantinistan'da para arzı M = 100 milyon TL, hız V = 4, reel çıktı Y = 200 milyon birim mal. Fiyat düzeyi nedir? Merkez Bankası M'yi 200 milyona çıkarırsa (V ve Y aynı) fiyat ne olur?",
            adimlar: ["MV = 100 × 4 = 400 milyon TL. P = MV ÷ Y = 400 ÷ 200 = 2 TL.", "Yeni M = 200: MV = 200 × 4 = 800 milyon TL.", "Yeni P = 800 ÷ 200 = 4 TL."],
            sonuc: "Para arzı ==%100 arttı==, fiyat düzeyi de ==%100 arttı== (2 TL → 4 TL); reel çıktı değişmedi." },
          { tip: "ornek", baslik: "Dolaşım hızını bul", durum: "Bir ekonomide P = 3, Y = 100 birim, M = 60 TL. V kaçtır?",
            adimlar: ["Nominal GSYH: PY = 3 × 100 = 300 TL.", "V = PY ÷ M = 300 ÷ 60 = 5."],
            sonuc: "==V = 5==: her lira yılda ortalama 5 kez el değiştiriyor." }
        ]
      },
      {
        baslik: "Miktar teorisi: büyüme oranlarıyla düşün",
        kisa: "Hız ve reel çıktı sabitken fiyat artışı, para arzı artışına eşittir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "%ΔM + %ΔV", alt: "para ve hız büyümesi" }, "=",
              { t: "%ΔP + %ΔY", alt: "enflasyon ve reel büyüme" }
            ], aciklama: "*Quantity theory of money*: uzun dönemde V sabit ve Y tam istihdam çıktısında olduğu için para arzının büyüme hızı enflasyonu belirler." },
          G1,
          { tip: "ornek", baslik: "Enflasyon ne kadar?", durum: "Bir ülkede para arzı yılda %8 büyüyor, V sabit, reel GSYH %3 büyüyor.",
            adimlar: ["%ΔM + %ΔV = %ΔP + %ΔY.", "8 + 0 = enflasyon + 3.", "Enflasyon = 8 − 3 = 5."],
            sonuc: "==Enflasyon yaklaşık %5.== Reel çıktı büyüdüğü için enflasyon para büyümesinden %3 düşük." }
        ]
      },
      {
        baslik: "Enflasyon parasal bir olgudur",
        kisa: "Uzun dönemde fiyatlar, para arzı çok hızlı arttığı için sürekli yükselir.",
        bloklar: [
          { tip: "not", metin: "*Inflation* (enflasyon), para arzını uzun süre ==çok hızlı== artırmanın sonucudur. Para arttıkça AD sağa kayar; kısa dönemde çıktı biraz artsa da uzun dönemde çıktı tam istihdam düzeyine döner ve geriye yalnız daha yüksek fiyatlar kalır." },
          G2,
          { tip: "tuzak", metin: "Para arzı artışı uzun dönemde reel çıktıyı ya da işsizliği kalıcı değiştirmez.", yanlis: "Merkez Bankası para arzını artırdıkça reel GSYH ve istihdam kalıcı olarak artar.", dogru: "Tam istihdamdayken para arzındaki değişim uzun dönemde ==reel çıktıyı etkilemez==; yalnız fiyat düzeyini (ve nominal değişkenleri) değiştirir." }
        ]
      },
      {
        baslik: "Kısa dönem ve uzun dönem: para nötr mü?",
        kisa: "Kısa dönemde para çıktıyı oynatabilir; uzun dönemde yalnız fiyatları.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "⏱️", baslik: "Kısa dönem", maddeler: ["Fiyatlar ve ücretler yapışkan", "Para artışı çıktıyı ve istihdamı geçici artırabilir"] },
            sag: { ikon: "📅", baslik: "Uzun dönem", maddeler: ["Çıktı tam istihdam düzeyinde sabit", "Para artışı yalnız fiyatları yükseltir"] },
            oyun: [
              { metin: "Merkez Bankası faizi indirdi; birkaç ay işsizlik düştü.", cevap: "sol", neden: "Geçici çıktı artışı: kısa dönem." },
              { metin: "Para arzı iki katına çıktı; yıllar sonra reel çıktı aynı, fiyatlar iki kat.", cevap: "sag", neden: "Uzun dönemde yalnız fiyat değişir." },
              { metin: "Ücretler yeni fiyatlara henüz uymadı, firmalar daha çok üretiyor.", cevap: "sol", neden: "Yapışkan ücret: kısa dönem." },
              { metin: "Bir ülke on yıl boyunca %40 para basıyor; üretim kapasitesi artmıyor ama fiyatlar hızla yükseliyor.", cevap: "sag", neden: "Sürekli hızlı para büyümesi: uzun dönemde enflasyon." }
            ] }
        ]
      },
      {
        baslik: "Deflasyon ve sürekli büyümenin önemi",
        kisa: "Enflasyon için para artışı hızlı ve sürekli olmalı; ters yönde deflasyon doğar.",
        bloklar: [
          { tip: "not", metin: "Ters yönde de geçerli: para arzı çok hızlı ve uzun süre ==azalırsa== fiyat düzeyi düşer (*deflation*). Yine uzun dönemde çıktı tam istihdam düzeyinde kalır. Hükümetler açıklarını para basarak kapatmaya kalkarsa para arzı hızla büyür ve fiyatlar ciddi biçimde yükselir." },
          { tip: "tablo", baslik: "Para arzının seyri ve fiyatlar (V ve Y sabitken)", head: ["Para arzı", "Fiyat düzeyi", "Adı"], rows: [
              ["Sürekli ve çok hızlı artıyor", "Sürekli yükselir", "*Inflation*"],
              ["Değişmiyor", "Yerinde sayar", "Fiyat istikrarı"],
              ["Sürekli ve çok hızlı azalıyor", "Sürekli düşer", "*Deflation*"]
            ] },
          { tip: "tuzak", metin: "Para arzı bir kez artarsa fiyat düzeyi bir kez yükselir; enflasyon ise fiyat düzeyinin sürekli artmasıdır.", yanlis: "Merkez Bankası bir kez para arzını artırırsa kalıcı enflasyon başlar.", dogru: "Enflasyon, para arzının ==sürekli== ve ==çok hızlı== artmasıyla gelir. Tek seferlik artış, tek seferlik fiyat artışıdır." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Takas denklemi: M × V = P × Y; M para arzı, V dolaşım hızı, P fiyat düzeyi, Y reel çıktı, PY nominal GSYH.",
              "Dört formül: P = MV ÷ Y, Y = MV ÷ P, M = PY ÷ V, V = PY ÷ M.",
              "*Quantity theory of money*: %ΔM + %ΔV = %ΔP + %ΔY; V ve Y sabitse enflasyon para büyümesine eşittir.",
              "Reel çıktı büyüyorsa enflasyon para büyümesinden o kadar düşük olur (8 − 3 = 5).",
              "Enflasyon (deflasyon), para arzının uzun süre çok hızlı artması (azalması) sonucudur: parasal bir olgudur.",
              "Tam istihdamda para arzı değişimi uzun dönemde reel çıktıyı etkilemez; yalnız fiyatları etkiler.",
              "Kısa dönemde yapışkan ücretler yüzünden para çıktıyı geçici etkileyebilir.",
              "Tek seferlik para artışı tek seferlik fiyat artışıdır; sürekli enflasyon sürekli hızlı büyümeyle gelir."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Bir ekonomide para arzı 200 milyar TL, paranın dolaşım hızı 5 ve reel çıktı 500 milyar birimdir. Miktar teorisine göre fiyat düzeyi nedir?",
        opts: ["0,5", "1", "2", "5"], a: 2,
        why: "MV = PY ⇒ P = MV ÷ Y = (200 × 5) ÷ 500 = 1000 ÷ 500 = 2. Fiyat düzeyi 0,5 diyen şık oranı ters çevirmiştir." },
      { q: "Bir ülkede para arzı yılda %10 büyüyor, dolaşım hızı sabit ve reel GSYH yılda %3 büyüyor. Miktar teorisine göre enflasyon yaklaşık kaçtır?",
        opts: ["%3", "%7", "%10", "%13"], a: 1,
        why: "%ΔM + %ΔV = %ΔP + %ΔY ⇒ 10 + 0 = enflasyon + 3 ⇒ enflasyon = %7. %10 diyen şık reel büyümeyi unutmuştur." },
      { q: "Grafik, tam istihdamdaki bir ekonomide para arzı artışının uzun dönem sonucunu gösteriyor (E₁'den E₂'ye). Aşağıdakilerden hangisi doğrudur?",
        fig: { type: "graph", xlabel: "Reel GSYH", ylabel: "Fiyat düzeyi", xmax: 10, ymax: 10,
          lines: [{ from: [6, 0], to: [6, 9.6], label: "LRAS", color: 2 }, { from: [3, 9], to: [10, 2], label: "AD₁", color: 0 }, { from: [5, 9], to: [10, 4], label: "AD₂", color: 3 }],
          points: [{ q: 6, p: 6, label: "E₁", guides: true }, { q: 6, p: 8, label: "E₂", guides: true }],
          xticks: [{ v: 6, label: "Yf" }], yticks: [{ v: 6, label: "P₁" }, { v: 8, label: "P₂" }] },
        opts: ["Reel GSYH artar, fiyat düzeyi değişmez.", "Fiyat düzeyi artar, reel GSYH değişmez.", "Fiyat düzeyi ve reel GSYH birlikte artar.", "İşsizlik doğal oranın altına kalıcı olarak düşer."], a: 1,
        why: "LRAS dikey: uzun dönemde çıktı Yf'te kalır, AD'deki kayma yalnız fiyat düzeyini P₁'den P₂'ye çıkarır. A şıkkı kısa dönem hikâyesidir; uzun dönemde para nötrdür." },
      { q: "Bir ülkenin nominal GSYH'si 600 milyar TL, para arzı 150 milyar TL'dir. Paranın dolaşım hızı kaçtır?",
        opts: ["0,25", "450", "750", "4"], a: 3,
        why: "V = PY ÷ M = 600 ÷ 150 = 4: her lira yılda ortalama 4 kez el değiştirir. 0,25 şıkkı oranı ters çevirir." },
      { q: "Tabloda üç ülkenin yıllık büyüme oranları verilmiştir; üç ülkede de paranın dolaşım hızı sabittir. Miktar teorisine göre hangi ülkenin enflasyonu en yüksektir ve yaklaşık kaçtır?",
        fig: { type: "table", head: ["Ülke", "Para arzı (%)", "Reel GSYH (%)"], rows: [["X", "12", "4"], ["Y", "6", "4"], ["Z", "10", "5"]] },
        opts: ["X ülkesi, yaklaşık %8", "X ülkesi, yaklaşık %12", "Z ülkesi, yaklaşık %10", "Y ülkesi, yaklaşık %6"], a: 0,
        why: "Enflasyon ≈ para büyümesi − reel büyüme: X için 12 − 4 = 8, Y için 6 − 4 = 2, Z için 10 − 5 = 5. En yüksek X'te, %8. B şıkkı reel büyümeyi çıkarmayı unutur." }
    ]
  };
})();
