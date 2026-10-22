/* Kitora not defteri · mc606 · 6.6 Reel Faiz ve Uluslararası Sermaye Akımları
   Kaynak: CED Topic 6.6 (MKT-5.G). Blok türleri: /ap/_kit/defter.js başı.
   Varsayım: Türkiye'de reel faiz %6, ABD'de %4. Türkiye ödünç fon: D y = 11 − x, S₁ y = x + 1 (denge (5;6)), S₂ y = x − 1 (denge (6;5)).
   ABD ödünç fon: D y = 9 − x, S₁ y = x − 1 (denge (5;4)), S₂ y = x + 1 (denge (4;5)). İki ülkede de reel faiz %5'te eşitlenir.
   Döviz piyasası: D₁ y = 10 − x, S₁ y = x; D₂ y = 12 − x (sağa 2), S₂ y = x + 1 (sola 1) → denge (5,5; 6,5) = 0,065 $. */
window.DEFTER = {
  slug: "mc606",
  amac: "Bu konu ülkeler arasındaki reel faiz farkının sermayeyi nasıl yönlendirdiğini anlatıyor. Faiz farkının ödünç fon piyasasını, döviz piyasasını ve net ihracatı birlikte nasıl etkilediğini, merkez bankasının kısa vadede bunda nasıl rol oynadığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Reel faiz farkı sermayeyi çeker",
      kisa: "Finansal sermaye, reel faizi nispeten yüksek olan ülkeye akar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Real interest rate*", alt: "reel faiz" }, "≈",
            { t: "Nominal faiz", alt: "bankanın yazdığı oran" }, "−",
            { t: "Enflasyon", alt: "fiyatların artış hızı" }
          ], aciklama: "Yatırımcı için önemli olan, enflasyondan arındırılmış gerçek getiridir: reel faiz." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏷️", terim: "Relative value of assets", tr: "varlıkların göreli değeri", tanim: "Ülkeler arasında reel faiz farkı varsa, yurtiçi ve yurtdışı varlıkların getirisi, yani cazibesi değişir.", ornek: "Türk tahvili %6 reel getiri veriyorsa ve ABD tahvili %4 veriyorsa Türk tahvili daha cazip." },
            { ikon: "🌊", terim: "Net capital inflow", tr: "net sermaye girişi (CFA fazlası)", tanim: "Yabancıların bu ülkeye yaptığı finansal yatırım eksi bu ülkenin yurtdışına yaptığı. Sermaye reel faizi yüksek olan ülkeye doğru akar.", ornek: "Yabancı fonlar Türk tahvilleri alır." }
          ] },
        { tip: "tablo", baslik: "Faiz farkı: nominale değil reele bak (varsayım)", head: ["Ülke", "Nominal faiz", "Enflasyon", "Reel faiz"], rows: [
            ["Türkiye", "%9", "%3", "**%6**"],
            ["ABD", "%6", "%2", "**%4**"]
          ], vurgu: 0, not: "Reel faizi yüksek olan Türkiye'ye sermaye akar." },
        { tip: "tuzak", metin: "Türkiye'de nominal faiz %40, enflasyon %38 ise reel faiz yalnızca %2'dir. ABD'de nominal faiz %5, enflasyon %1 ise reel faiz %4'tür.", yanlis: "Nominal faizi yüksek olan ülkeye sermaye akar.", dogru: "Sermaye ==reel faizi== yüksek olan ülkeye akar. Reel faiz ≈ nominal faiz − enflasyon." }
      ]
    },
    {
      baslik: "Ödünç fon piyasası: sermaye girince reel faiz düşer",
      kisa: "Sermaye girişi ödünç fon arzını artırır ve reel faizi aşağı çeker.",
      bloklar: [
        { tip: "grafik", baslik: "Türkiye'nin ödünç fon piyasası", xlabel: "Ödünç fon miktarı (milyar TL)", ylabel: "Reel faiz oranı (%)", xmax: 10, ymax: 10,
          yticks: [{ v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [2, 9], to: [9, 2], etiket: "D" },
            { id: "S", tip: "cizgi", renk: 1, from: [1, 2], to: [8, 9], etiket: "S₁" },
            { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [1, 2], to: [8, 9], etiket: "S₁", gizli: true },
            { id: "S2", tip: "cizgi", renk: 3, from: [2, 1], to: [9, 8], etiket: "S₂", gizli: true },
            { id: "ab", tip: "cizgi", renk: 2, kesik: true, from: [0, 4], to: [10, 4] },
            { id: "abt", tip: "yazi", x: 8.2, y: 3.4, metin: "ABD'de reel faiz: %4" },
            { id: "okS", tip: "ok", renk: 3, from: [4.3, 5], to: [5.8, 5], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 6, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 6, y: 5, etiket: "E₂", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Türkiye'nin ödünç fon piyasasında denge E₁: reel faiz **%6**. ABD'de reel faiz %4 (varsayım)." },
            { metin: "Yabancı fonlar daha yüksek reel faiz için Türkiye'ye para yatırır. Yabancı tasarruf ödünç fon arzına eklenir: ==arz sağa== kayar (S₁ → S₂).", goster: ["Sk", "S2", "okS"], gizle: ["S"] },
            { metin: "Yeni denge E₂: reel faiz %6 → **%5**, ödünç fon miktarı artar. Türkiye ile ABD arasındaki faiz farkı daralır.", goster: ["E2"] }
          ] },
        { tip: "tuzak", metin: "Yabancı parayı ülkeye getiren, yatırımcının tasarrufunu ödünç fon piyasasına arz etmesidir; talep değil.", yanlis: "Yabancı sermaye girişi ödünç fon talebini artırır ve reel faizi yükseltir.", dogru: "Yabancı tasarruf ödünç fon ==arzını== artırır: arz sağa kayar, reel faiz düşer." }
      ]
    },
    {
      baslik: "Aynı sermaye öteki ülkeden çıkar",
      kisa: "Sermaye çıkan ülkede ödünç fon arzı azalır ve reel faiz yükselir.",
      bloklar: [
        { tip: "grafik", baslik: "ABD'nin ödünç fon piyasası", xlabel: "Ödünç fon miktarı (milyar $)", ylabel: "Reel faiz oranı (%)", xmax: 10, ymax: 10,
          yticks: [{ v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [1, 8], to: [8, 1], etiket: "D" },
            { id: "S", tip: "cizgi", renk: 1, from: [2, 1], to: [9, 8], etiket: "S₁" },
            { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [2, 1], to: [9, 8], etiket: "S₁", gizli: true },
            { id: "S2", tip: "cizgi", renk: 3, from: [1, 2], to: [8, 9], etiket: "S₂", gizli: true },
            { id: "tr", tip: "cizgi", renk: 2, kesik: true, from: [0, 6], to: [10, 6] },
            { id: "trt", tip: "yazi", x: 8.2, y: 6.5, metin: "Türkiye'de reel faiz: %6" },
            { id: "okS", tip: "ok", renk: 3, from: [5.7, 5], to: [4.3, 5], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 4, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 4, y: 5, etiket: "E₂", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "ABD'nin ödünç fon piyasasında denge E₁: reel faiz **%4**. Türkiye'de %6 olduğu için ABD'li fonlar Türkiye'ye yönelir." },
            { metin: "Sermaye ABD'den çıkar: ABD'deki ödünç fon arzı azalır, ==arz sola== kayar (S₁ → S₂).", goster: ["Sk", "S2", "okS"], gizle: ["S"] },
            { metin: "Yeni denge E₂: ABD'de reel faiz %4 → **%5**. İki ülkede de reel faiz %5'te buluşur; faiz farkı kapanınca sermaye akımı durur.", goster: ["E2"] }
          ] },
        { tip: "tablo", baslik: "İki ülke, iki piyasa", head: ["", "Türkiye (reel faiz yüksek)", "ABD (reel faiz düşük)"], rows: [
            ["Sermaye akımı", "Giriş (CFA fazlası)", "Çıkış (CFA açığı)"],
            ["Ödünç fon arzı", "Sağa kayar", "Sola kayar"],
            ["Reel faiz", "Düşer", "Yükselir"],
            ["Para birimi", "TL talebi ↑, TL değerlenir", "Dolar arzı ↑, dolar değer kaybeder"]
          ] }
      ]
    },
    {
      baslik: "Döviz piyasası: sermaye girişi TL'yi değerlendirir",
      kisa: "Sermaye girişi TL talebini artırır; TL değerlenir ve net ihracat azalır.",
      bloklar: [
        { tip: "grafik", baslik: "Faiz farkının TL piyasasındaki izi", xlabel: "TL miktarı (milyar TL / gün)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
          yticks: [{ v: 5, label: "0,05" }, { v: 6.5, label: "0,065" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D₁" },
            { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S₁" },
            { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "D₁", gizli: true },
            { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "S₁", gizli: true },
            { id: "D2", tip: "cizgi", renk: 3, from: [3, 9], to: [9, 3], etiket: "D₂", gizli: true },
            { id: "S2", tip: "cizgi", renk: 2, from: [0.5, 1.5], to: [8, 9], etiket: "S₂", gizli: true },
            { id: "okD", tip: "ok", renk: 3, from: [3.3, 7], to: [4.8, 7], gizli: true },
            { id: "okS", tip: "ok", renk: 2, from: [3.8, 4], to: [3.2, 4], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 5.5, y: 6.5, etiket: "E₂", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: TL piyasasında denge E₁, 1 TL = 0,05 $." },
            { metin: "Türkiye'de reel faiz yüksek: yabancılar Türk varlığı almak için TL ister. ==TL talebi sağa== kayar (D₁ → D₂).", goster: ["Dk", "D2", "okD"], gizle: ["D"] },
            { metin: "Türkler de yurtdışı varlık yerine yurtiçi varlığı seçer; daha az TL satılır: ==TL arzı sola== kayar (S₁ → S₂).", goster: ["Sk", "S2", "okS"], gizle: ["S"] },
            { metin: "Yeni denge E₂: TL'nin fiyatı 0,05 → **0,065 $**: TL ==değerlendi==. Miktar kayma büyüklüklerine bağlıdır; kesin olan yalnızca kurdur.", goster: ["E2"] }
          ] },
        { tip: "not", metin: "Değerlenen TL, 6.5'te gördüğün zinciri başlatır: ihracat ↓, ithalat ↑, net ihracat ↓. Ayrıca net sermaye girişi (CFA fazlası) hep cari açıkla birlikte gelir: CA + CFA = 0." }
      ]
    },
    {
      baslik: "Merkez bankası kısa vadede faizi etkiler",
      kisa: "Merkez bankası kısa vadede faizi değiştirerek sermaye akımını yönlendirebilir.",
      bloklar: [
        { tip: "adimlar", baslik: "Merkez Bankası faizi artırırsa", adimlar: [
            { baslik: "Faiz yükselir", metin: "Para arzını daraltır ya da politika faizini artırır: kısa vadede faiz ↑." },
            { baslik: "Reel faiz de yükselir", metin: "Kısa vadede fiyatlar yapışkandır, enflasyon hemen değişmez: nominal artış reel faizi de yükseltir." },
            { baslik: "Sermaye girer", metin: "Türk varlıkları cazip olur: ==net sermaye girişi artar==." },
            { baslik: "Kur ve NX", metin: "TL değerlenir, net ihracat azalır; faiz indirimi bunun tersini yapar." }
          ] },
        { tip: "tablo", baslik: "Merkez bankası → reel faiz → sermaye → kur", head: ["Karar", "Reel faiz", "Sermaye", "TL", "NX"], rows: [
            ["Faizi artırır", "↑", "Giriş", "Değerlenir", "↓"],
            ["Faizi indirir", "↓", "Çıkış", "Değer kaybeder", "↑"]
          ] },
        { tip: "ornek", baslik: "Faiz indiriminden sonra fark ne olur?", durum: "Türkiye'de nominal faiz %9, enflasyon %3; ABD'de nominal faiz %6, enflasyon %2. Türkiye Merkez Bankası nominal faizi %7'ye indiriyor; enflasyon kısa vadede aynı kalıyor. Diğer her şey sabitken sermaye akımı ne olur?",
          adimlar: [
            "Önce Türkiye'nin reel faizi: 9 − 3 = **%6**; ABD'nin: 6 − 2 = **%4**. Fark 2 puan, sermaye Türkiye'ye akıyor.",
            "İndirimden sonra Türkiye'nin reel faizi: 7 − 3 = **%4**.",
            "Reel faizler eşitlendi (%4 = %4): Türk varlıkları artık göreli olarak daha cazip değil."
          ],
          sonuc: "Faiz farkı kapanınca net sermaye girişi azalır; TL talebi eskisi kadar güçlü olmaz ve TL, indirimden önceki duruma göre değer kaybeder." }
      ]
    },
    {
      baslik: "Bütün zincir: faiz farkından cari açığa",
      kisa: "Faiz farkı sermayeyi çeker, TL'yi değerlendirir, NX'i düşürür, CA açığını büyütür.",
      bloklar: [
        { tip: "adimlar", baslik: "Türkiye'de reel faiz yurtdışından yüksekse", adimlar: [
            { baslik: "Reel faiz farkı", metin: "Türk varlıkları yurtdışı varlıklara göre daha getirili." },
            { baslik: "Ödünç fon piyasası", metin: "Yabancı tasarruf gelir: arz sağa, reel faiz düşer; yatırım için daha çok kaynak olur." },
            { baslik: "Döviz piyasası", metin: "Yabancılar TL ister: TL talebi sağa kayar, TL değerlenir." },
            { baslik: "Net ihracat", metin: "Türk malı yabancıya pahalanır, yabancı mal ucuzlar: ihracat ↓, ithalat ↑, NX ↓." },
            { baslik: "Ödemeler dengesi", metin: "CFA fazlası artarken CA açığı da büyür: ==CA + CFA = 0== (6.1'e bağlanıyor)." }
          ] },
        { tip: "ikili", sol: { ikon: "🏦", baslik: "Ödünç fon piyasası", maddeler: ["Dikey eksen reel faiz oranı", "Yabancı tasarruf arz eğrisini kaydırır"] },
          sag: { ikon: "💱", baslik: "Döviz piyasası", maddeler: ["Dikey eksen paranın fiyatı (kur)", "Yabancı yatırımcının para talebi talep eğrisini kaydırır"] },
          oyun: [
            { metin: "Yurtdışından gelen tasarruf arz eğrisini sağa kaydırır; faiz düşer.", cevap: "sol", neden: "Faiz ve arz: ödünç fon piyasası." },
            { metin: "Yabancı yatırımcılar Türk tahvili almak için TL ister; TL talebi sağa kayar.", cevap: "sag", neden: "Para talebi: döviz piyasası." },
            { metin: "Dikey eksende %5 yazıyor.", cevap: "sol", neden: "Reel faiz oranı: ödünç fon piyasası." },
            { metin: "TL'nin dolar fiyatı 0,05'ten 0,065'e çıkıyor.", cevap: "sag", neden: "Kur: döviz piyasası." },
            { metin: "Yatırım yapmak isteyen firmalar daha ucuza borç bulabiliyor.", cevap: "sol", neden: "Reel faiz düştü: ödünç fon piyasası." }
          ] },
        { tip: "tuzak", metin: "Sermaye girişi iyi haber gibi görünür; ama TL'yi değerlendirir ve net ihracatı baskılar.", yanlis: "Yabancı sermaye girişi ülkenin net ihracatını artırır.", dogru: "TL değerlenir ve ==NX azalır==. Net sermaye girişi cari açıkla birlikte gelir (CA + CFA = 0)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Reel faiz ≈ nominal faiz − enflasyon. Sermaye reel faizi nispeten yüksek olan ülkeye akar.",
            "Reel faiz farkı yurtiçi ve yurtdışı varlıkların göreli değerini değiştirir.",
            "Sermaye girişi yurtiçi ödünç fon arzını artırır: arz sağa, reel faiz düşer. Çıkış olan ülkede arz sola, reel faiz yükselir.",
            "Sermaye girişi döviz piyasasında para talebini artırır: para değerlenir. Çıkış olan ülkede para değer kaybeder.",
            "Değerlenen para net ihracatı düşürür; net sermaye girişi (CFA fazlası) cari açıkla birlikte gelir: CA + CFA = 0.",
            "Merkez bankaları kısa vadede faizi etkileyerek net sermaye girişini yönlendirir: faiz artışı sermaye girişi ve değerlenme getirir.",
            "Karıştırma: yabancı tasarruf ödünç fon talebini değil, arzını artırır.",
            "Hep nominali değil reeli karşılaştır."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Aşağıdaki tabloda üç ülkenin faiz ve enflasyon oranları verilmiştir. Diğer her şey eşitken yabancı sermaye en çok hangi ülkeye akar?",
      fig: { type: "table", head: ["Ülke", "Nominal faiz", "Enflasyon"], rows: [["X", "%12", "%10"], ["Y", "%6", "%1"], ["Z", "%9", "%6"]] },
      opts: ["X", "Z", "Y", "Üçüne eşit akar"],
      a: 2,
      why: "Sermaye reel faizi yüksek olan ülkeye akar: X için 12 − 10 = %2, Y için 6 − 1 = %5, Z için 9 − 6 = %3. En yüksek reel faiz Y'dedir. X'i seçmek, en yüksek nominal faize bakmaktan kaynaklanır."
    },
    {
      q: "Türkiye'de reel faiz yurtdışından daha yüksektir. Diğer her şey sabitken Türkiye'nin ödünç fon ve döviz piyasalarında ne olur?",
      opts: [
        "Ödünç fon arzı sağa kayar, reel faiz düşer; TL talebi sağa kayar, TL değerlenir.",
        "Ödünç fon talebi sağa kayar, reel faiz yükselir; TL talebi sağa kayar, TL değerlenir.",
        "Ödünç fon arzı sağa kayar, reel faiz düşer; TL arzı sağa kayar, TL değer kaybeder.",
        "Ödünç fon arzı sola kayar, reel faiz yükselir; TL talebi sola kayar, TL değer kaybeder."
      ],
      a: 0,
      why: "Gelen yabancı tasarruf ödünç fon arzını artırır ve faizi düşürür; aynı anda yabancılar Türk varlığı almak için TL ister ve TL değerlenir. İkinci şık sermaye girişini ödünç fon talebi saymaktan doğan çekici bir hatadır."
    },
    {
      q: "Şekilde bir ülkenin ödünç fon piyasasında arz S₁'den S₂'ye kaymıştır. Bu kaymanın nedeni aşağıdakilerden hangisi olabilir?",
      fig: { type: "graph", xlabel: "Ödünç fon miktarı", ylabel: "Reel faiz oranı (%)", xmax: 10, ymax: 10,
        lines: [{ from: [2, 9], to: [9, 2], label: "D" }, { from: [1, 2], to: [8, 9], label: "S₁", dash: true }, { from: [2, 1], to: [9, 8], label: "S₂" }],
        points: [{ q: 5, p: 6, label: "E₁", guides: true }, { q: 6, p: 5, label: "E₂", guides: true }] },
      opts: [
        "Yatırım harcamalarının artması",
        "Devletin bütçe açığının büyümesi",
        "Yurtiçi tasarrufların azalması",
        "Ülkenin reel faizinin yurtdışına göre yükselmesi ve yabancı sermayenin girmesi"
      ],
      a: 3,
      why: "Arzın sağa kayması ve reel faizin düşmesi, yabancı tasarrufun ödünç fon piyasasına katıldığını gösterir. Yatırım artışı ve bütçe açığı talebi sağa kaydırırdı (faiz yükselirdi); yurtiçi tasarrufların azalması arzı sola kaydırırdı."
    },
    {
      q: "Bir ülkeye net sermaye girişi arttığında, diğer her şey sabitken aşağıdakilerden hangisi doğrudur?",
      opts: [
        "Para değer kaybeder, net ihracat artar ve CA fazla verir.",
        "Para değerlenir, net ihracat azalır ve CA açığı büyür.",
        "Para değerlenir, net ihracat artar ve CA fazla verir.",
        "Para değer kaybeder, net ihracat azalır ve CA açığı büyür."
      ],
      a: 1,
      why: "Sermaye girişi para talebini artırır, para değerlenir; ihracat azalıp ithalat artar ve net ihracat düşer. CA + CFA = 0 olduğundan CFA fazlası, aynı büyüklükte CA açığı demektir. Üçüncü şık değerlenmeyi doğru bulup NX'in yönünü ters yazar."
    },
    {
      q: "Türkiye'de nominal faiz %9, enflasyon %3; ABD'de nominal faiz %6, enflasyon %2'dir. Türkiye Merkez Bankası nominal faizi %7'ye indiriyor, enflasyon aynı kalıyor. Diğer her şey sabitken ne olur?",
      opts: [
        "Reel faiz farkı kapanır; net sermaye girişi azalır ve TL, indirim olmasaydı olacağından daha zayıf kalır.",
        "Türkiye'nin reel faizi ABD'nin altına düşer ve sermaye girişi hızlanır.",
        "Reel faiz değişmez, çünkü enflasyon aynı kalmıştır.",
        "Sermaye Türkiye'ye akmaya devam eder, çünkü nominal faiz hâlâ ABD'den yüksektir."
      ],
      a: 0,
      why: "Türkiye'nin reel faizi 9 − 3 = %6'dan 7 − 3 = %4'e iner; ABD'nin reel faizi 6 − 2 = %4'tür. Fark kapanır ve sermaye girişi teşvik edilmez. Son şık nominal faize bakıp reeli unutan tipik hatadır."
    }
  ]
};
