/* Kitora not defteri · mc205 · 2.5 Enflasyonun Maliyetleri
   Kaynak: College Board CED, Topic 2.5 (MEA-1.H). Blok türleri: /ap/_kit/defter.js başı.
   Not: shoe-leather ve menu maliyetleri CED'de adı geçmeyen, sık öğretilen ek maliyetlerdir. */
window.DEFTER = {
  slug: "mc205",
  amac: "Bu konu enflasyonun kime ve neye mal olduğunu anlatıyor. Beklenmeyen enflasyonun serveti borç verenden borçluya nasıl aktardığını, beklenmeyen deflasyonda yönün neden tersine döndüğünü ve enflasyonun ek maliyetlerini öğreneceksin.",
  bolumler: [
    {
      baslik: "Beklenen ve beklenmeyen enflasyon",
      kisa: "Asıl büyük maliyet beklenmeyen enflasyondur; çünkü kimse ona hazırlanamaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔮", terim: "Expected inflation", tr: "beklenen enflasyon", tanim: "Taraflar enflasyonu önceden tahmin eder ve faize, kiraya, zam sözleşmelerine yansıtır. Servet keyfî olarak el değiştirmez; maliyeti küçüktür.", ornek: "Banka, %5 enflasyon bekleyip faizi buna göre belirliyor." },
            { ikon: "⚡", terim: "Unexpected inflation", tr: "beklenmeyen enflasyon", tanim: "Sözleşme yapılırken öngörülmeyen enflasyon. Zenginliği ==keyfî== olarak (*arbitrarily*) bir gruptan başka bir gruba aktarır: borç verenden borçluya.", ornek: "Sabit faizli kredi verildikten sonra fiyatların beklenmedik artması." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Reel faiz", alt: "*real interest rate*" }, "≈",
            { t: "Nominal faiz", alt: "sözleşmedeki faiz" }, "−",
            { t: "Enflasyon", alt: "beklenen ya da gerçekleşen" }
          ], aciklama: "Beklenen reel faiz, beklenen enflasyonla hesaplanır; gerçekleşen reel faiz ise gerçekleşen enflasyonla. Alacaklının asıl kazancı sözleşmedeki faiz değil, bu fazladan satın alma gücüdür." }
      ]
    },
    {
      baslik: "Beklenmeyen enflasyon borçluya yarar, alacaklıya zarar",
      kisa: "Para borçluya verildiğinden daha az satın alma gücüyle geri döner.",
      bloklar: [
        { tip: "ornek", baslik: "Kuzenden borç: %15 sürpriz", durum: "Kuzenin Ada'ya 1000 TL'yi bir yıllığına %10 faizle ödünç veriyor. Taraflar %5 enflasyon bekliyor, ama yıl sonunda gerçek enflasyon %15 çıkıyor.",
          adimlar: ["Beklenen reel faiz ≈ 10 − 5 = %5.", "Gerçekleşen reel faiz ≈ 10 − 15 = −%5.", "Kuzen yıl sonunda 1100 TL alıyor; ama fiyatlar %15 arttı, 1100 TL'nin satın alma gücü başlangıçtaki 1000 TL'den az (1100 ÷ 1,15 ≈ 957 TL).", "Ada ise beklediğinden daha az reel değer ödedi."],
          sonuc: "Beklenmeyen yüksek enflasyon ==alacaklıdan borçluya== zenginlik aktardı. Kuzenin reel getirisi eksiye düştü." },
        { tip: "grafik", baslik: "Faizsiz 1000 TL borcun satın alma gücü", xlabel: "Zaman", ylabel: "Satın alma gücü (TL)", xmax: 10, ymax: 12,
          yticks: [{ v: 8, label: "800" }, { v: 10, label: "1000" }],
          xticks: [{ v: 2.5, label: "Bugün" }, { v: 6.5, label: "1 yıl sonra" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[1.5, 0], [3.5, 0], [3.5, 10], [1.5, 10]] },
            { id: "t1", tip: "yazi", x: 2.5, y: 10.7, metin: "1000 TL", gizli: true },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[5.5, 0], [7.5, 0], [7.5, 0], [5.5, 0]], gizli: true },
            { id: "t2", tip: "yazi", x: 6.5, y: 4, metin: "800 TL", gizli: true },
            { id: "kp", tip: "alan", renk: 3, noktalar: [[5.5, 8], [7.5, 8], [7.5, 10], [5.5, 10]], gizli: true },
            { id: "t3", tip: "yazi", x: 6.5, y: 10.7, metin: "200 TL kayıp", gizli: true }
          ],
          durumlar: [
            { metin: "Bugün arkadaşına **1000 TL** faizsiz borç veriyorsun. Bu parayla bugünkü fiyatlarla 1000 TL'lik mal alınır.", goster: ["t1"] },
            { metin: "Bir yıl içinde fiyatlar beklenmedik şekilde ==%25 artıyor==. Aynı 1000 TL artık aynı malların yalnızca %80'ini alıyor (1000 ÷ 1,25 = 800).", set: { b2: { noktalar: [[5.5, 0], [7.5, 0], [7.5, 8], [5.5, 8]] } }, goster: ["b2", "t2"] },
            { metin: "Kayıp **200 TL'lik** satın alma gücü alacaklıdan ==borçluya== geçti: borçlu aynı nominal tutarı daha az reel değerle öder.", goster: ["kp", "t3"] }
          ] }
      ]
    },
    {
      baslik: "Kim kazanır, kim kaybeder?",
      kisa: "Borçlular kazanır; alacaklılar, sabit gelirliler ve nakit tutanlar kaybeder.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🏆", baslik: "Beklenmeyen enflasyonda kazanır", maddeler: ["Sabit faizli borcu olanlar", "Borcun reel değeri azalır"] },
          sag: { ikon: "📉", baslik: "Beklenmeyen enflasyonda kaybeder", maddeler: ["Sabit faizle ödünç verenler", "Geliri ya da birikimi sabit kalanlar"] },
          oyun: [
            { metin: "Sabit faizli kredi çekmiş borçlu.", cevap: "sol", neden: "Borcunu reel olarak daha az öder." },
            { metin: "Sabit faizle ödünç vermiş alacaklı.", cevap: "sag", neden: "Parası daha az satın alma gücüyle döner." },
            { metin: "Maaşı sabit kalan çalışan.", cevap: "sag", neden: "Fiyatlar artıyor, geliri artmıyor: reel geliri düşer." },
            { metin: "Yastık altında nakit para tutan kişi.", cevap: "sag", neden: "Nakdin satın alma gücü erir." },
            { metin: "Sabit faizli konut kredisi çekmiş aile.", cevap: "sol", neden: "Borcun reel değeri azalır." }
          ] },
        { tip: "tuzak", metin: "Enflasyon herkesi aynı ölçüde etkilemez. Ücretleri enflasyona göre otomatik artan (zam hakkı olan) kişiler korunur.", yanlis: "Enflasyon çıkınca herkes eşit ölçüde fakirleşir.", dogru: "Beklenmeyen enflasyon zenginliği ==keyfî== dağıtır: borçlular kazanır; alacaklılar, sabit gelirliler ve nakit tutanlar kaybeder." }
      ]
    },
    {
      baslik: "Beklenmeyen deflasyon: yön tersine döner",
      kisa: "Fiyatlar beklenmedik düşerse alacaklı kazanır, borçlu kaybeder.",
      bloklar: [
        { tip: "tablo", baslik: "Sürpriz yönüne göre kazanan", head: ["Durum", "Gerçekleşen reel faiz", "Alacaklı", "Borçlu"], rows: [
            ["Enflasyon beklenenden ==yüksek==", "Beklenenden düşük", "Kaybeder", "Kazanır"],
            ["Enflasyon beklenen kadar", "Beklenen kadar", "Etkilenmez", "Etkilenmez"],
            ["Enflasyon beklenenden ==düşük== (ya da beklenmeyen deflasyon)", "Beklenenden yüksek", "Kazanır", "Kaybeder"]
          ], not: "Ölçüt, sürprizin yönüdür: gerçekleşen enflasyonu beklenenle kıyasla." },
        { tip: "ornek", baslik: "Fiyatlar düşünce borç ağırlaşır", durum: "Ada faizsiz 1000 TL borçlanıyor. Bir yıl içinde fiyat düzeyi beklenmedik şekilde %10 düşüyor (fiyat düzeyi 100 → 90).",
          adimlar: ["Borç nominal olarak hâlâ 1000 TL.", "Fiyatlar düştüğü için 1000 TL daha çok mal alır: 1000 ÷ 0,90 ≈ 1111 TL'lik (eski fiyatlarla) mal.", "Ada borcunu geri öderken reel olarak başta aldığından daha fazla değer veriyor."],
          sonuc: "Beklenmeyen deflasyon ==borçlunun yükünü artırır==, alacaklıyı kazandırır: enflasyondaki yönün tersi." }
      ]
    },
    {
      baslik: "Diğer maliyetler: ayakkabı eskimesi ve menü",
      kisa: "Enflasyon, beklenen olsa bile zaman, emek ve belirsizlik harcatır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👟", terim: "Shoe-leather costs", tr: "ayakkabı eskitme maliyeti", tanim: "Paranın değeri hızla eridiği için nakit tutmamak adına bankaya sık gidip gelmenin zaman ve emek maliyeti.", ornek: "Harçlığın erimesin diye hemen harcamak ya da sık sık bozdurmak." },
            { ikon: "🧾", terim: "Menu costs", tr: "menü maliyeti", tanim: "Fiyatları değiştirmenin maliyeti: yeni liste basmak, etiket yenilemek, müşteriye duyurmak.", ornek: "Pastanenin her ay fiyat listesini yeniden bastırması." },
            { ikon: "🌫️", terim: "Uncertainty", tr: "belirsizlik", tanim: "Enflasyonun kestirilemediği ortamda firmalar uzun vadeli yatırım ve sözleşme yapmaktan çekinir.", ornek: "Kantinci enflasyon belirsiz diye yeni fırın almıyor." }
          ] },
        { tip: "ikili", sol: { ikon: "👟", baslik: "*Shoe-leather*", maddeler: ["Para elde tutma çabası", "Bankaya gidip gelme, harcamayı öne çekme"] },
          sag: { ikon: "🧾", baslik: "*Menu cost*", maddeler: ["Fiyatı değiştirme maliyeti", "Liste ve etiket yenileme"] },
          oyun: [
            { metin: "Pazarcı fiyat etiketlerini her hafta yeniden yazıyor.", cevap: "sag", neden: "Fiyat değiştirme maliyeti: menü maliyeti." },
            { metin: "Ayşe nakdi eriyor diye günde üç kez bankaya gidiyor.", cevap: "sol", neden: "Para elde tutma çabası: ayakkabı eskitme." },
            { metin: "Restoran menüsünü her ay yeniden bastırıyor.", cevap: "sag", neden: "Yeni liste basmak: menü maliyeti." },
            { metin: "Öğrenci harçlığı değerini yitirmesin diye gelir gelmez harcıyor.", cevap: "sol", neden: "Nakdi elde tutmamak için harcama çabası: ayakkabı eskitme." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Beklenen enflasyon sözleşmelere yansır; maliyeti küçüktür. Asıl sorun beklenmeyen enflasyondur.",
            "Beklenmeyen enflasyon zenginliği keyfî olarak borç verenden borçluya aktarır.",
            "Reel faiz ≈ nominal faiz − enflasyon; enflasyon beklenenden yüksekse gerçekleşen reel faiz beklenenden düşük çıkar.",
            "Beklenmeyen enflasyonda borçlular kazanır; alacaklılar, sabit gelirliler ve nakit tutanlar kaybeder.",
            "Beklenmeyen deflasyonda yön tersine döner: borçlunun yükü artar, alacaklı kazanır.",
            "Ölçüt, gerçekleşen enflasyonun beklenenle kıyasıdır.",
            "Diğer maliyetler: *shoe-leather costs*, *menu costs* ve belirsizlik."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir banka 5 yıllık, sabit %8 faizli kredi veriyor; sözleşme yapılırken yıllık %3 enflasyon bekleniyor. Sonraki yıllarda enflasyon beklenmedik şekilde %10'a çıkıyor. Bu durumda ne olur?",
      opts: ["Banka kazanır, çünkü nominal faiz sabittir", "Borçlu kazanır; banka reel getiri olarak beklediğinden az alır", "İkisi de etkilenmez, çünkü faiz sabit", "Banka kazanır, çünkü nominal faiz yükselir"],
      a: 1,
      why: "Beklenen reel faiz ≈ 8 − 3 = %5; gerçekleşen ≈ 8 − 10 = −%2. Enflasyon beklenenden yüksek, alacaklı kaybeder, borçlu kazanır. A şıkkı en çekici yanlış: sabit nominal faizi sabit reel getiri sanır." },
    { q: "Tablodaki kredi sözleşmesi için hangisi doğrudur?",
      fig: { type: "table", caption: "Kredi", head: ["Nominal faiz", "Beklenen enflasyon", "Gerçekleşen enflasyon"], rows: [["%12", "%5", "%9"]] },
      opts: ["Beklenen reel faiz ≈ %7, gerçekleşen reel faiz ≈ %3; borçlu kazanır", "Beklenen reel faiz ≈ %7, gerçekleşen reel faiz ≈ %3; alacaklı kazanır", "Beklenen reel faiz ≈ %17, gerçekleşen reel faiz ≈ %21; alacaklı kazanır", "Reel faiz değişmez, çünkü nominal faiz sabittir"],
      a: 0,
      why: "Beklenen reel ≈ 12 − 5 = %7; gerçekleşen ≈ 12 − 9 = %3. Alacaklının reel getirisi beklenenden düştü, borçlu kazandı. B şıkkı sayıları doğru bulup yönü karıştırır; C şıkkı enflasyonu faize ekler." },
    { q: "Aşağıdakilerden hangisi beklenmeyen enflasyondan zarar görür?",
      opts: ["Sabit faizli konut kredisi olan bir aile", "Maaşı enflasyona göre otomatik artan bir memur", "Birikimini sabit faizli mevduatta tutan bir emekli", "Kredi kullanıp stok alan bir esnaf"],
      a: 2,
      why: "Emeklinin birikimi sabit nominal faizle büyüyor; beklenmeyen enflasyon satın alma gücünü eritir. Borçlular (A, D) kazanır; maaşı enflasyona endeksli memur (B) korunur." },
    { q: "Fiyatlar beklenmedik biçimde düşüyor ve fiyat düzeyi geriliyor. Sabit nominal faizli bir borcu olan firma için hangisi doğrudur?",
      opts: ["Borcunun reel değeri azalır; firma kazanır", "Etkilenmez, çünkü borç nominal olarak sabittir", "Alacaklı kaybeder, borçlu kazanır", "Borcunun reel yükü artar; borçlu kaybeder, alacaklı kazanır"],
      a: 3,
      why: "Fiyatlar düşünce aynı nominal tutar daha çok mal alır: borç reel olarak ağırlaşır. Beklenmeyen deflasyon alacaklıyı kazandırır. B şıkkı en çekici yanlış: nominal tutarı reel yük sanır." },
    { q: "Bir pastane, enflasyon yüzünden her ay fiyat listesini yeniden bastırıyor ve vitrindeki etiketleri değiştiriyor. Bu maliyet aşağıdakilerden hangisidir?",
      opts: ["*Shoe-leather cost*", "*Menu cost*", "Zenginliğin keyfî yeniden dağılımı", "*Substitution bias*"],
      a: 1,
      why: "Fiyatları değiştirmenin maliyeti menü maliyetidir. Ayakkabı eskitme, para elde tutmamak için yapılan çabadır; yeniden dağılım borçlu-alacaklı arasındaki transferdir." }
  ]
};
