/* Kitora not defteri · mi403 · 4.3 Fiyat Farklılaştırması
   Kaynak: CED Topic 4.3 (PRD-3.B.8–9). Blok türleri: /ap/_kit/defter.js başı.
   Sayılar (sinema salonu, mi402 ile aynı): talep P = 100 − 0,1Q, MC = 20 TL, sabit maliyet 12.000 TL.
   Grafikte 1 birim = 10 TL ve 100 bilet. Yetişkin D1: (0,10)–(10,0); öğrenci D2: P = 60 − 0,1Q → grafikte (0,6)–(6,0).
   Gruba göre: yetişkin Q 400, P 60; öğrenci Q 200, P 40 (MR = MC). Tek fiyat (en iyi) 50 TL → 500 + 100 = 600 bilet.
   Kâr: tek fiyat 30.000 − 24.000 = 6.000; gruba göre 32.000 − 24.000 = 8.000. Mükemmel: Q 800, TR 48.000, TC 28.000, kâr 20.000. */
window.DEFTER = {
  slug: "mi403",
  amac: "Bu konu, piyasa gücü olan bir firmanın aynı malı farklı alıcılara farklı fiyatlardan satmasını (*price discrimination*) anlatıyor. Gerekli koşulları, gruba göre fiyatlamayı ve mükemmel fiyat farklılaştırmasının neden DWL'yi yok edip bütün rantı firmaya verdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Fiyat farklılaştırması nedir?",
      kisa: "Aynı malı, maliyet farkı olmadan, farklı alıcılara farklı fiyattan satmaktır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎟️", terim: "Price discrimination", tr: "fiyat farklılaştırması", tanim: "Aynı malı, maliyet farkından değil alıcının ödeme isteğinden dolayı farklı fiyattan satmak. Amaç kârı artırmak ya da tüketici rantını (*CS*) firmaya aktarmaktır.", ornek: "Sinemada öğrenci bileti 40 TL, tam bilet 60 TL." },
            { ikon: "💳", terim: "Willingness to pay", tr: "ödeme istekliliği", tanim: "Bir alıcının bir mal için vermeye razı olduğu en yüksek fiyat; talep eğrisinin yüksekliğidir.", ornek: "Bilete en fazla 40 TL vermek isteyen öğrenci 60 TL'ye almaz." }
          ] },
        { tip: "ikili", sol: { ikon: "🎟️", baslik: "Fiyat farklılaştırması", maddeler: ["Maliyet aynı, fiyat farklı", "Fark ödeme isteğinden gelir"] },
          sag: { ikon: "📦", baslik: "Maliyet farkı", maddeler: ["Fiyat farkı maliyet farkını yansıtır", "Farklılaştırma değildir"] },
          oyun: [
            { metin: "Sinema aynı koltuğa öğrenciden 40 TL, yetişkinden 60 TL istiyor.", cevap: "sol", neden: "Maliyet aynı, fiyat farklı: ayrım." },
            { metin: "Pizzacı eve teslimatta 15 TL ek ücret alıyor; kuryenin masrafı bu kadar.", cevap: "sag", neden: "Fark maliyet farkından geliyor." },
            { metin: "Havayolu aynı koltuğu son dakikada erken rezervasyondan daha pahalıya satıyor.", cevap: "sol", neden: "Zamanlama farklı ödeme isteğini gösteriyor; maliyet aynı." },
            { metin: "Marketteki domates, hammadde pahalandığı için zamlandı.", cevap: "sag", neden: "Maliyet artışı; herkese aynı yeni fiyat uygulanıyor." }
          ] }
      ]
    },
    {
      baslik: "Koşullar: kim yapabilir?",
      kisa: "Piyasa gücü, grupları ayırma ve yeniden satışı engelleme gerekir.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "1️⃣", baslik: "Piyasa gücü", metin: "Firma fiyat belirleyici olmalı; talebi aşağı eğimli olmalı." },
            { ikon: "2️⃣", baslik: "Alıcıları ayırabilmek", metin: "Ödeme istekleri farklı grupları (öğrenci/yetişkin, erken/geç alıcı) tanıyabilmeli." },
            { ikon: "3️⃣", baslik: "Yeniden satışı (*resale*) engellemek", metin: "Ucuza alan, pahalı grubun alıcısına satabilirse fiyat farkı kapanır." }
          ] },
        { tip: "tuzak", metin: "Fiyat farklılaştırması yapmak için piyasa gücü şarttır.", yanlis: "Tam rekabetli bir firma da öğrenciye indirim yaparak kârını artırabilir.", dogru: "Tam rekabetli firma *price taker*'dır: piyasa fiyatının üstünde fiyat isterse hiç satamaz, altında satarsa gelir kaybeder." }
      ]
    },
    {
      baslik: "Gruba göre fiyat: yetişkin ve öğrenci",
      kisa: "Talebi daha esnek olan gruba daha düşük fiyat uygulanır.",
      bloklar: [
        { tip: "grafik", baslik: "İki pazar, iki fiyat", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 2, label: "200" }, { v: 4, label: "400" }], yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "DA", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D₁" },
            { id: "MRA", tip: "cizgi", renk: 3, from: [0, 10], to: [4.8, 0.4], etiket: "MR₁" },
            { id: "DB", tip: "cizgi", renk: 1, from: [0, 6], to: [5.4, 0.6], etiket: "D₂", gizli: true },
            { id: "MRB", tip: "cizgi", renk: 3, from: [0, 6], to: [2.8, 0.4], etiket: "MR₂", gizli: true },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 2], to: [9.2, 2], etiket: "MC" },
            { id: "A", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "60 TL", kilavuz: true, gizli: true },
            { id: "B", tip: "nokta", renk: 1, x: 2, y: 4, etiket: "40 TL", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Sinemanın iki alıcı grubu var. Önce yetişkinler: talep ==D₁== ve MR₁. MC = 20 TL her iki grupta aynı." },
            { metin: "Yetişkin pazarında MR₁ = MC: **400 bilet**; fiyat talepten okunur: **60 TL**.", goster: ["A"] },
            { metin: "Öğrenci pazarı: talep ==D₂== daha düşük ve daha esnek: öğrenciler fiyat artışına daha duyarlı.", gizle: ["DA", "MRA", "A"], goster: ["DB", "MRB"] },
            { metin: "Öğrenci pazarında MR₂ = MC: **200 bilet**; talepten **40 TL**.", goster: ["B"] },
            { metin: "Sonuç: aynı bilet, ==iki fiyat==. Yetişkin 60 TL, öğrenci 40 TL.", gizle: ["MRB"], goster: ["DA", "A"] }
          ] },
        { tip: "tablo", baslik: "Tek fiyat mı, gruba göre fiyat mı?", head: ["Strateji", "Fiyat (TL)", "Satılan bilet", "Gelir (TL)", "Ekonomik kâr (TL)"], rows: [
            ["Tek fiyat (en iyisi)", "50", "600 (500 + 100)", "30.000", "6.000"],
            ["Gruba göre fiyat", "60 yetişkin, 40 öğrenci", "600 (400 + 200)", "32.000", "8.000"]
          ], not: "İki durumda da toplam maliyet 24.000 TL (12.000 sabit + 20 × 600). Gruba göre fiyat aynı 600 bilette geliri 2.000 TL artırır." },
        { tip: "not", metin: "Kural: her pazarda ==ayrı ayrı MR = MC== uygulanır. Talebi daha az esnek grup (yetişkin) yüksek fiyat öder, talebi esnek grup (öğrenci) düşük fiyat öder. Bu örnekte seçilen noktalarda esneklik yetişkin için 1,5, öğrenci için 2." }
      ]
    },
    {
      baslik: "Mükemmel fiyat farklılaştırması",
      kisa: "Her alıcıya kendi azami fiyatı yazılır: MR = D, DWL yok, CS yok.",
      bloklar: [
        { tip: "grafik", baslik: "Tek fiyatlı tekelden mükemmel fiyat farklılaştırmasına", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 4, label: "400" }, { v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "cs", tip: "alan", renk: 0, noktalar: [[0, 10], [0, 6], [4, 6]] },
            { id: "dwl", tip: "alan", renk: 2, noktalar: [[4, 6], [4, 2], [8, 2]] },
            { id: "ps", tip: "alan", renk: 1, noktalar: [[0, 10], [0, 2], [8, 2]], gizli: true },
            { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D" },
            { id: "MR", tip: "cizgi", renk: 3, from: [0, 10], to: [4.8, 0.4], etiket: "MR" },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 2], to: [9.2, 2], etiket: "MC" },
            { id: "A", tip: "nokta", renk: 0, x: 4, y: 6, kilavuz: true },
            { id: "E", tip: "nokta", renk: 2, x: 8, y: 2, kilavuz: true, gizli: true },
            { id: "csT", tip: "yazi", x: 0.75, y: 7, metin: "CS" },
            { id: "dwlT", tip: "yazi", x: 5, y: 3, metin: "DWL" },
            { id: "mrdT", tip: "yazi", x: 8, y: 3.6, metin: "MR = D", gizli: true },
            { id: "psT", tip: "yazi", x: 2.6, y: 4.5, metin: "32.000 TL", gizli: true },
            { id: "sifirT", tip: "yazi", x: 6, y: 1, metin: "DWL = 0", gizli: true }
          ],
          durumlar: [
            { metin: "Karşılaştırma için tek fiyatlı tekel: MR = MC → **400 bilet, 60 TL**. CS = 8.000 TL, DWL = 8.000 TL." },
            { metin: "Mükemmel fiyat farklılaştırmasında salon her alıcıya onun ==ödeme istekliliği== kadar fiyat yazar. Her yeni bilet kendi fiyatından satıldığı için ek gelir fiyata eşittir: ==MR = D==.", gizle: ["cs", "dwl", "csT", "dwlT", "A"], goster: ["mrdT"], set: { MR: { to: [9.4, 0.6], etiket: "" } } },
            { metin: "D (= MR), MC'yi ==P = MC== noktasında keser: **800 bilet**. Verimli miktar üretiliyor.", goster: ["E"] },
            { metin: "Her alıcı azami fiyatını ödediğinden ==CS = 0==. MC'nin üstünde, talebin altında kalan bütün alan firmada: ½ × 800 × 80 = **32.000 TL**.", goster: ["ps", "psT"] },
            { metin: "Verimli miktar üretildiği için ==DWL = 0==. Kâr = 32.000 − 12.000 (sabit maliyet) = **20.000 TL**; tek fiyatlı tekelde 4.000 TL'ydi.", goster: ["sifirT"] }
          ] },
        { tip: "tuzak", baslik: "Verimli ama adil değil", metin: "Mükemmel fiyat farklılaştırması DWL'yi sıfırlar, çünkü P = MC miktarı üretilir. Ama rantı kimin aldığı ayrı bir sorudur.", yanlis: "DWL sıfırsa tüketiciler de tek fiyatlı tekele göre daha iyi durumdadır.", dogru: "Toplam rant büyür, ama ==CS sıfırdır==: bütün rant firmaya geçer. Tek fiyatlı tekelde alıcıların 8.000 TL'lik CS'si vardı." }
      ]
    },
    {
      baslik: "Çözümlü örnek ve karşılaştırma",
      kisa: "Mükemmel ayrımda miktar, kâr ve rantlar tek fiyatlı tekelden çok farklıdır.",
      bloklar: [
        { tip: "ornek", baslik: "Mükemmel fiyat farklılaştırması yapan salon", durum: "Talep P = 100 − 0,1Q, MC = 20 TL, sabit maliyet 12.000 TL. Salon her alıcıya onun azami fiyatını yazıyor. Miktarı, kârı, *CS*'yi ve *DWL*'yi bul.",
          adimlar: [
            "MR = D olduğu için üretim P = MC'de durur: 100 − 0,1Q = 20 → Q = 800 bilet.",
            "Toplam gelir = talep eğrisinin altındaki alan = ½ × (100 + 20) × 800 = 48.000 TL.",
            "TC = 12.000 + 20 × 800 = 28.000 TL. Kâr = 48.000 − 28.000 = 20.000 TL.",
            "*CS* = 0 (herkes azami fiyatını ödüyor). *DWL* = 0 (verimli miktar üretildi).",
            "Karşılaştır: tek fiyatlı tekelde Q = 400, kâr 4.000, *CS* 8.000, *DWL* 8.000 TL."
          ],
          sonuc: "Kâr 4.000 TL'den 20.000 TL'ye çıkar; bütün rant firmaya geçer ve DWL silinir." },
        { tip: "tablo", head: ["", "Tek fiyatlı tekel", "Mükemmel fiyat farklılaştırması"], rows: [
            ["Miktar", "400", "800 (P = MC)"],
            ["Fiyat", "60 TL", "Her alıcıya farklı (100'den 20'ye)"],
            ["*CS*", "8.000 TL", "0"],
            ["Ekonomik kâr", "4.000 TL", "20.000 TL"],
            ["*DWL*", "8.000 TL", "0"]
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Price discrimination*: aynı malı maliyet farkı olmadan farklı alıcılara farklı fiyattan satmak; kârı artırır ya da *CS*'yi firmaya aktarır.",
            "Koşullar: piyasa gücü, alıcı gruplarını ayırabilmek, yeniden satışı (*resale*) engellemek.",
            "Tam rekabetli firma (*price taker*) fiyat farklılaştıramaz.",
            "Gruba göre fiyatta her pazarda MR = MC kullanılır; talebi daha esnek gruba daha düşük fiyat uygulanır.",
            "Mükemmel fiyat farklılaştırmasında her alıcı azami fiyatını öder: MR = D.",
            "Mükemmel ayrımda Q, P = MC'de bulunur (rekabetteki gibi); *DWL* = 0 ve *CS* = 0.",
            "Toplam rantın hepsini firma alır: verimli ama tüketici için adil değil."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi fiyat farklılaştırması yapabilmek için gerekli bir koşul DEĞİLDİR?",
      opts: ["Firmanın piyasa gücüne sahip olması", "Alıcı gruplarını birbirinden ayırabilmesi", "Düşük fiyattan alanların malı yeniden satamaması", "Firmanın tam rekabetli bir piyasada fiyat alıcı olması"], a: 3,
      why: "Fiyat farklılaştırması piyasa gücü ister; fiyat alıcı olan tam rekabetli firma bunu yapamaz. Diğer üç seçenek (piyasa gücü, grupları ayırmak, yeniden satışı engellemek) koşulların kendisidir." },
    { q: "Bir sinema iki gruba farklı fiyat uyguluyor ve MC iki pazarda aynı. Tabloya göre hangisi doğrudur?",
      fig: { type: "table", head: ["Pazar", "MR = MC'deki miktar", "Fiyat (TL)"], rows: [["Yetişkin", "400", "60"], ["Öğrenci", "200", "40"]] },
      opts: ["Öğrencilerin talebi yetişkinlerinkinden daha esnektir.", "Öğrencilerin talebi yetişkinlerinkinden daha az esnektir.", "Fiyat farkı, öğrenciye satışın maliyetinin düşük olmasından kaynaklanır.", "Bu durum fiyat farklılaştırması değil, tam rekabettir."], a: 0,
      why: "Her pazarda MR = MC ile kâr maksimize edilir; MC aynıyken daha düşük fiyat, daha esnek talebe işaret eder. Fark maliyetten gelseydi bu fiyat farklılaştırması olmazdı; ama burada MC iki grupta aynıdır." },
    { q: "Mükemmel fiyat farklılaştırması yapan bir tekel için hangisi doğrudur?",
      opts: ["Miktar tek fiyatlı tekelinkinden azdır ve DWL artar.", "Firma P = MC miktarını üretir, bütün ekonomik rantı alır ve DWL yok olur.", "Tüketici rantı artar, çünkü fiyatlar düşer.", "MR eğrisi talep eğrisinin altında kalır."], a: 1,
      why: "Her alıcı azami fiyatını ödediğinden MR = D olur; üretim P = MC'de durur, DWL = 0 ve CS = 0'dır. \"Tüketici rantı artar\" tuzak: ortalama fiyat düşse bile her alıcıdan kendi azami fiyatı alındığı için CS sıfırdır." },
    { q: "Grafik bir salonun talebini ve MC'sini gösteriyor. Salon mükemmel fiyat farklılaştırması yaparsa MC'nin üstünde ve talebin altında kalan toplam alan kaç TL'dir?",
      fig: { type: "graph", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
        lines: [{ from: [0, 10], to: [9.2, 0.8], label: "D" }, { from: [0, 2], to: [9, 2], label: "MC", color: 2 }],
        points: [{ q: 8, p: 2, label: "E", guides: true }],
        xticks: [{ v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 10, label: "100" }] },
      opts: ["16.000", "48.000", "32.000", "64.000"], a: 2,
      why: "Miktar P = MC'de 800'dür. Alan, tabanı 800 ve yüksekliği 100 − 20 = 80 olan üçgendir: ½ × 800 × 80 = 32.000 TL. 64.000 yarıyı unutmaktır; 48.000 talebin altındaki toplam gelirdir; 16.000 ise tek fiyatlı tekelin üretici rantıdır." },
    { q: "Bir konser organizatörü öğrencilere 40 TL, diğerlerine 60 TL'ye bilet satıyor. Öğrenci biletlerini alanlar bunları internette tam fiyat ödeyecek kişilere satabiliyor. Bu durum organizatörün fiyat farklılaştırmasını nasıl etkiler?",
      opts: ["Yeniden satış fiyat farkını kapatır; farklılaştırma çalışmaz hale gelir.", "Fiyat farkı korunur ve kâr artar.", "Hiçbir etkisi olmaz, çünkü maliyet aynıdır.", "Bütün alıcılar 60 TL öder."], a: 0,
      why: "Ucuz alan, pahalı grubun alıcısına satabiliyorsa pahalı grup ucuz bileti ondan alır ve fiyat farkı kapanır; bu yüzden yeniden satışı engellemek bir koşuldur. \"Bütün alıcılar 60 TL öder\" tersini söylüyor: pahalı gruptakiler 60'tan değil, ucuza satın alır." }
  ]
};
