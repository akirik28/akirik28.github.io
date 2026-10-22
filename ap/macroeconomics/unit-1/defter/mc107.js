/* Kitora not defteri · mc107 · 1.4 Talebi Kaydıran Etkenler
   Kaynak: ap-videolar/src/episodes/mc107 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı.
   Not: bu dosyadaki küçük yardımcı işlevler yalnızca tekrar eden talep eğrisi kayma durumlarını üretir. */
window.DEFTER = (function () {
  /* Eksenler: 1 birim = 10 TL (dikey) ve 10 tost (yatay) */
  var AX = {
    xlabel: "Miktar (tost/gün)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 10,
    xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }, { v: 10, label: "100" }],
    yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }]
  };
  /* D₁, eski D₁ (kesik), D₂ (sağda), D₃ (solda) ve yön okları */
  function egriler(ekstra) {
    return [
      { id: "d1", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D₁" },
      { id: "d1k", tip: "cizgi", renk: 0, kesik: true, from: [2, 8], to: [8, 2], etiket: "", gizli: true },
      { id: "d2", tip: "cizgi", renk: 1, from: [4, 8], to: [10, 2], etiket: "D₂", gizli: true },
      { id: "d3", tip: "cizgi", renk: 2, from: [0, 8], to: [6, 2], etiket: "D₃", gizli: true },
      { id: "okR", tip: "ok", renk: 1, from: [5.2, 9.4], to: [7.4, 9.4], gizli: true },
      { id: "okL", tip: "ok", renk: 2, from: [4.8, 9.4], to: [2.6, 9.4], gizli: true }
    ].concat(ekstra || []);
  }
  function dur(metin) { return { metin: metin }; }
  function sag(metin, ek) {
    var d = { metin: metin, gizle: ["d1", "d3", "okL"].concat((ek && ek.gizle) || []), goster: ["d1k", "d2", "okR"].concat((ek && ek.goster) || []) };
    return d;
  }
  function sol(metin, ek) {
    var d = { metin: metin, gizle: ["d1", "d2", "okR"].concat((ek && ek.gizle) || []), goster: ["d1k", "d3", "okL"].concat((ek && ek.goster) || []) };
    return d;
  }
  function sifirla(metin) { return { metin: metin, gizle: ["d1k", "d2", "d3", "okR", "okL"], goster: ["d1"] }; }
  function graf(baslik, durumlar, ekstra) {
    var g = { tip: "grafik", baslik: baslik, ogeler: egriler(ekstra), durumlar: durumlar };
    for (var k in AX) g[k] = AX[k];
    return g;
  }

  return {
    slug: "mc107",
    amac: "Bu konu talep eğrisinin kendisini kaydıran etkenleri anlatıyor: *change in demand*. Fiyat aynı kalırken talebin neden artıp azaldığını, beş talep belirleyicisini ve alıcıyı mı satıcıyı mı etkilediğini ayırmayı öğreneceksin.",
    bolumler: [
      {
        baslik: "Fiyat aynı, kuyruk uzun",
        kisa: "Fiyat değişmeden miktar değiştiyse eğri üzerindeki hareket bunu açıklayamaz.",
        bloklar: [
          { tip: "hikaye", ikon: "🏀", baslik: "Basketbolcunun tostu",
            metin: "Pazartesi tost 70 lira, günde 30 tost satılıyor. Salı akşamı ünlü bir basketbolcu okulun tostunu Instagram'da övüyor. Çarşamba fiyat yine 70 lira ama günde 50 tost satılıyor. Fiyat kıpırdamadı; bu kez başka bir şey oynadı." },
          { tip: "tablo", baslik: "Üç gün", head: ["Gün", "Olay", "Fiyat", "Satılan tost"], rows: [
              ["Pazartesi", "Normal gün", "70 TL", "30"],
              ["Salı", "Basketbolcu tostu Instagram'da övüyor", "—", "—"],
              ["Çarşamba", "Kuyruk uzamış", "70 TL", "50"]
            ], vurgu: 2, not: "Fiyat sabit, miktar +20: bunu eğri üzerindeki hareket açıklayamaz, çünkü hareket için fiyatın değişmesi gerekirdi." }
        ]
      },
      {
        baslik: "*Change in demand*: eğrinin kayması",
        kisa: "Fiyat dışı etken eğriyi kaydırır: sağa kayma artış, sola kayma azalıştır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "↔️", terim: "Change in demand", tr: "talepte değişme", tanim: "Fiyat dışı bir etken yüzünden talep eğrisinin **bütünüyle kayması**. Her fiyatta talep edilen miktar değişir.", ornek: "Basketbolcunun övgüsünden sonra her fiyatta 20 tost daha." },
              { ikon: "➡️", terim: "Increase in demand", tr: "talepte artış", tanim: "Eğrinin **sağa** kayması: her fiyatta daha çok miktar istenir.", ornek: "D₁ → D₂." },
              { ikon: "⬅️", terim: "Decrease in demand", tr: "talepte azalış", tanim: "Eğrinin **sola** kayması: her fiyatta daha az miktar istenir.", ornek: "D₁ → D₃." }
            ] },
          graf("Bütün noktalar birlikte sağa kayar", [
            dur("Başlangıç: D₁ üzerindeki P noktası, 70 TL'de 30 tost (D₁: Qd = 100 − P). 50 TL'de 50, 30 TL'de 70 tost."),
            sag("Her fiyatta 20 tost daha fazla: bütün noktalar birlikte sağa kayar (D₂: Qd = 120 − P). Eski eğri kesikli kalır. Aynı 70 TL'de artık 50 tost.", { goster: ["P50"], gizle: ["P30"] })
          ], [
            { id: "P30", tip: "nokta", renk: 0, x: 3, y: 7, etiket: "70 TL · 30", kilavuz: true },
            { id: "P50", tip: "nokta", renk: 1, x: 5, y: 7, etiket: "70 TL · 50", kilavuz: true, gizli: true }
          ]),
          { tip: "ikili", sol: { ikon: "➡️", baslik: "Sağa kayma", maddeler: ["*Increase in demand*", "Her fiyatta daha çok miktar"] },
            sag: { ikon: "⬅️", baslik: "Sola kayma", maddeler: ["*Decrease in demand*", "Her fiyatta daha az miktar"] },
            oyun: [
              { metin: "Aynı 70 TL'de 30 yerine 50 tost satılıyor.", cevap: "sol", neden: "Her fiyatta daha çok: sağa kayma, artış." },
              { metin: "Aynı 70 TL'de 30 yerine 10 tost satılıyor.", cevap: "sag", neden: "Her fiyatta daha az: sola kayma, azalış." },
              { metin: "Tablo: 70 TL'de 50, 50 TL'de 70, 30 TL'de 90.", cevap: "sol", neden: "Her satırda +20: D₂, sağa." },
              { metin: "Tablo: 70 TL'de 10, 50 TL'de 30, 30 TL'de 50.", cevap: "sag", neden: "Her satırda −20: D₃, sola." }
            ] },
          { tip: "tuzak", baslik: "Yukarı-aşağı değil, sağ-sol", metin: "Talep eğrisinin kaymasını anlatırken yön olarak \"sağ\" ve \"sol\" kullan.", yanlis: "Talep eğrisi yukarı kaydı, o halde talep arttı (ya da azaldı).", dogru: "Talep için ==sağa kayma = artış, sola kayma = azalış==. \"Yukarı/aşağı\" deme; bu alışkanlık arz bölümünde seni kurtaracak." }
        ]
      },
      {
        baslik: "Aynı +20'ye iki yol",
        kisa: "Kendi fiyatı eğri üzerinde gezdirir; öteki her şey eğriyi kaydırır.",
        bloklar: [
          { tip: "grafik", baslik: "A → B mi, A → C mi?", xlabel: "Miktar (tost/gün)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 10,
            xticks: AX.xticks, yticks: AX.yticks,
            ogeler: [
              { id: "d1", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D₁" },
              { id: "d2", tip: "cizgi", renk: 1, from: [4, 8], to: [10, 2], etiket: "D₂", gizli: true },
              { id: "A", tip: "nokta", renk: 0, x: 3, y: 7, etiket: "A", kilavuz: true },
              { id: "B", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "B", kilavuz: true, gizli: true },
              { id: "ab", tip: "ok", renk: 2, from: [3.2, 6.8], to: [4.8, 5.2], gizli: true },
              { id: "C", tip: "nokta", renk: 1, x: 5, y: 7, etiket: "C", kilavuz: true, gizli: true },
              { id: "ac", tip: "ok", renk: 1, from: [3.3, 7.2], to: [4.7, 7.2], gizli: true },
              { id: "tb", tip: "yazi", x: 6.6, y: 4.2, metin: "fiyat düştü: eğri üzerinde", gizli: true },
              { id: "tc", tip: "yazi", x: 7.6, y: 7.8, metin: "fiyat sabit: eğri kaydı", gizli: true }
            ],
            durumlar: [
              { metin: "Başlangıç: A noktası, 70 lira ve 30 tost." },
              { metin: "**Birinci yol:** fiyat 50 liraya düşer, eğri üzerinde B noktasına kayarsın: 50 tost. Bu ==*change in quantity demanded*==.", goster: ["B", "ab", "tb"] },
              { metin: "**İkinci yol:** fiyat 70 lirada kalır ama eğri sağa kayar, C noktasına gelirsin: yine 50 tost. Bu ==*change in demand*==.", gizle: ["B", "ab", "tb"], goster: ["d2", "C", "ac", "tc"] },
              { metin: "Ürünün **kendi fiyatı** eğri üzerinde gezdirir; geri kalan her şey eğriyi kaydırır. Bu \"her şeyin\" beş ana adı var." }
            ] },
          { tip: "tablo", baslik: "İki yolun karşılaştırması", head: ["", "A → B", "A → C"], rows: [
              ["Fiyat", "70 → 50 TL (değişti)", "70 TL (sabit)"],
              ["Miktar", "30 → 50", "30 → 50"],
              ["Eğri", "D₁ yerinde, nokta kayar", "Eğrinin kendisi D₁ → D₂"],
              ["Adı", "*Change in quantity demanded*", "*Change in demand*"]
            ], not: "B ve C aynı miktarda (50), ama farklı fiyatta." }
        ]
      },
      {
        baslik: "Beş talep belirleyicisi",
        kisa: "Zevkler, alıcı sayısı, ilişkili mallar, gelir ve beklentiler eğriyi kaydırır.",
        bloklar: [
          { tip: "harita", merkez: "*Demand shifters*: talebi kaydıran beş etken", dallar: [
              { baslik: "1 · *Tastes and preferences*", alt: "Reklam, trend, sosyal medya, haber, ünlü övgüsü" },
              { baslik: "2 · *Number of consumers*", alt: "Alıcı sayısı (satıcı sayısı değil)" },
              { baslik: "3 · *Prices of related goods*", alt: "İkame ve tamamlayıcı malların fiyatı" },
              { baslik: "4 · *Income*", alt: "Normal ve düşük mal" },
              { baslik: "5 · *Expectations*", alt: "Gelecekteki fiyat ve gelir beklentisi" }
            ] },
          { tip: "tablo", baslik: "Doldurma tablosu: etken → yön", head: ["Etken (shifter)", "Olay", "Talep", "Yön"], rows: [
              ["Zevkler", "Ünlü tostu övüyor", "Artar", "Sağ"],
              ["Zevkler", "Plastik peynir haberi", "Azalır", "Sol"],
              ["Alıcı sayısı", "200 yeni öğrenci", "Artar", "Sağ"],
              ["Alıcı sayısı", "Okul gezisi", "Azalır", "Sol"],
              ["İlişkili mal", "Simit pahalandı (ikame)", "Artar", "Sağ"],
              ["İlişkili mal", "Ayran pahalandı (tamamlayıcı)", "Azalır", "Sol"],
              ["Gelir", "Harçlık arttı (normal mal)", "Artar", "Sağ"],
              ["Gelir", "Harçlık arttı (düşük mal)", "Azalır", "Sol"],
              ["Beklenti", "Pazartesi zam gelecek", "Bugün artar", "Sağ"],
              ["Beklenti", "Pazartesi indirim gelecek", "Bugün azalır", "Sol"]
            ], not: "Sınavda hep bu format: Shifter / Increase or Decrease / Left or Right." }
        ]
      },
      {
        baslik: "Zevkler, alıcı sayısı ve beklentiler",
        kisa: "Hoşlanma, alıcı sayısı ve yarının beklentisi bugünkü talebi kaydırır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "✨", terim: "Tastes and preferences", tr: "zevk ve tercihler", tanim: "Tüketicilerin bir maldan hoşlanma düzeyi. Reklam, trend, sosyal medya, haber, ünlülerin övgüsü, hava gibi etkilerle değişir.", ornek: "Basketbolcunun övgüsü: talep sağa. Plastik peynir haberi: talep sola." },
              { ikon: "👥", terim: "Number of consumers", tr: "alıcı sayısı", tanim: "Piyasadaki alıcıların sayısı. Satıcı sayısı değil: o arzı değiştirir.", ornek: "200 yeni öğrenci: talep sağa. Bütün lise geziye çıkarsa talep sola." },
              { ikon: "🔮", terim: "Expectations", tr: "beklentiler", tanim: "Gelecekteki **fiyat** ya da **gelir** hakkındaki beklentiler. Yarın pahalanacaksa bugünkü talep artar; gelir zammı beklemek de bugünkü harcamayı artırır.", ornek: "\"Pazartesiden itibaren tost 90 TL\" ilanı: bugün herkes alır. Yeni telefon modeli duyulunca eski modelin talebi düşer." }
            ] },
          graf("Zevkler, alıcı sayısı ve beklentiler eğriyi kaydırır", [
            dur("Başlangıç: D₁."),
            sag("Ünlü bir basketbolcu tostu övdü: *tastes* değişti, talep ==sağa==."),
            sol("Tostta plastik peynir haberi çıktı: talep ==sola== kayar."),
            sag("Okula 200 yeni öğrenci geldi: *number of consumers* arttı, aynı fiyatta daha çok tost satılır: talep ==sağa==."),
            sol("Bütün lise geziye çıktı: kantinde kuş uçmaz, talep ==sola==."),
            sag("Kantine \"pazartesiden itibaren tost 90 lira\" yazısı asıldı: bugün herkes alır, bugünkü talep ==sağa==."),
            sol("\"Pazartesi indirim var\" duyuldu: herkes bekler, bugünkü talep ==sola==.")
          ]),
          { tip: "tuzak", baslik: "Alıcı mı, satıcı mı? Beklenti yönü", metin: "Talep alıcılarla ilgilidir; kantinci sayısı (satıcı) arzı kaydırır. Beklentide yön, gelecekteki durumun bugüne etkisiyle bulunur.", yanlis: "Piyasaya yeni kantinciler girerse talep artar; gelecekte fiyat düşecekse bugün talep artar.", dogru: "Satıcı sayısı ==arzı== kaydırır (arz bölümünde). Fiyatın gelecekte ==artacağı== beklentisi bugünkü talebi artırır (sağa); ==düşeceği== beklentisi azaltır (sola)." }
        ]
      },
      {
        baslik: "İlişkili mallar: *substitutes* ve *complements*",
        kisa: "İkame malın fiyatı aynı yönde, tamamlayıcının fiyatı ters yönde kaydırır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🔁", terim: "Substitutes", tr: "ikame mallar", tanim: "Birinin yerine diğerini aldığın mallar. Birinin fiyatı artarsa diğerinin talebi **artar**.", ornek: "Tost ve simit: simit pahalanırsa tost talebi sağa." },
              { ikon: "🧩", terim: "Complements", tr: "tamamlayıcı mallar", tanim: "Birlikte tüketilen mallar. Birinin fiyatı artarsa diğerinin talebi **azalır**.", ornek: "Tost ve ayran: ayran pahalanırsa tost talebi sola." }
            ] },
          graf("Simit ve ayran fiyatı tostun talebini kaydırır", [
            dur("Tost talebi: D₁. Bu kez tostun değil, **başka bir malın** fiyatı değişecek."),
            sag("**İkame:** simit 40 TL'den 60 TL'ye çıktı. Öğrenciler tosta kayar: tost talebi ==sağa==."),
            sol("Simit 40 TL'den 20 TL'ye indi: tost talebi ==sola==."),
            sifirla("Şimdi tamamlayıcı mal: tost ve ayran birlikte tüketilir. Başlangıç yine D₁."),
            sol("**Tamamlayıcı:** ayran 20 TL'den 40 TL'ye çıktı. Tostla ayran ikilisi pahalı gelir: tost talebi ==sola==."),
            sag("Ayran 20 TL'den 10 TL'ye indi: tost talebi ==sağa==.")
          ]),
          { tip: "ikili", sol: { ikon: "🔁", baslik: "*Substitutes*", maddeler: ["Birbirinin yerine geçer", "Öteki fiyat ↑ → bu talep ↑", "Tost–simit"] },
            sag: { ikon: "🧩", baslik: "*Complements*", maddeler: ["Birlikte tüketilir", "Öteki fiyat ↑ → bu talep ↓", "Tost–ayran"] },
            oyun: [
              { metin: "Çay ve limon.", cevap: "sag", neden: "Birlikte tüketilir: tamamlayıcı." },
              { metin: "Çay ve kahve.", cevap: "sol", neden: "Biri yerine öteki alınır: ikame." },
              { metin: "Kahve pahalandı, kakao talebi arttı.", cevap: "sol", neden: "Fiyat artışı → öteki malın talebi artışı: ikame." },
              { metin: "Telefon pahalandı, telefon kılıfı talebi düştü.", cevap: "sag", neden: "Öteki fiyat artışı → bu malın talebi düşüşü: tamamlayıcı." }
            ] },
          { tip: "tuzak", baslik: "Fiyat eğriyi kaydırmıyordu?", metin: "Hani fiyat eğriyi kaydırmıyordu? Kaydırmaz; ama bu tostun değil, başka bir malın, simidin fiyatı.", yanlis: "Hiçbir fiyat talep eğrisini kaydırmaz.", dogru: "==Malın kendi fiyatı== eğriyi kaydırmaz (eğri üzerinde hareket); ==başka bir malın fiyatı== (ikame ya da tamamlayıcı) eğriyi kaydırır." }
        ]
      },
      {
        baslik: "Gelir: *normal* ve *inferior good*",
        kisa: "Gelir artınca normal malın talebi artar, düşük malın talebi azalır.",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "📈", terim: "Normal good", tr: "normal mal", tanim: "Gelir artınca talebi artan, gelir azalınca talebi azalan mal (doğru yönlü ilişki). Çoğu mal böyledir.", ornek: "Tost: harçlık 500 TL'den 750 TL'ye çıkarsa talep sağa, azalırsa sola." },
              { ikon: "📉", terim: "Inferior good", tr: "düşük mal", tanim: "Gelir artınca talebi **azalan** mal (ters ilişki). Bazı mallar gelirden neredeyse etkilenmez (örneğin tuvalet kâğıdı).", ornek: "Marketin en ucuz hazır eriştesi, ikinci el ders kitabı." }
            ] },
          graf("Gelir artınca ne olur? Mala bak!", [
            dur("Harçlık 500 TL'den 750 TL'ye çıkıyor. Soru: hangi mal?"),
            sag("**Normal good** (tost): harçlık artınca tost talebi ==sağa== kayar."),
            sifirla("Şimdi aynı harçlık artışını başka bir mal için düşün. Başlangıç yine D₁."),
            sol("**Inferior good** (en ucuz hazır erişte): harçlık artınca erişte yerine tost ve dürüm alırsın; erişte talebi ==sola== kayar.")
          ]),
          { tip: "ikili", sol: { ikon: "📈", baslik: "*Normal good*", maddeler: ["Gelir ↑ → talep ↑", "Gelir ↓ → talep ↓"] },
            sag: { ikon: "📉", baslik: "*Inferior good*", maddeler: ["Gelir ↑ → talep ↓", "Gelir ↓ → talep ↑"] },
            oyun: [
              { metin: "Zam alınca daha çok restoranda yemek.", cevap: "sol", neden: "Gelirle aynı yönde: normal mal." },
              { metin: "Zam alınca hazır erişte yemeyi bırakmak.", cevap: "sag", neden: "Gelirle ters yönde: düşük mal." },
              { metin: "Gelir azalınca ikinci el kitap talebinin artması.", cevap: "sag", neden: "Gelir ↓ → talep ↑: düşük mal." },
              { metin: "Gelir azalınca tost talebinin düşmesi.", cevap: "sol", neden: "Gelirle aynı yönde: normal mal." }
            ] },
          { tip: "ornek", baslik: "Sınav sorusu: ikinci el ders kitabı", durum: "Ailelerin geliri artıyor. İkinci el ders kitapları bir inferior good. İkinci el kitap piyasasında ne olur? Şıklar: (A) Talep artar, eğri sağa kayar. (B) Quantity demanded azalır, eğri üzerinde hareket. (C) Talep azalır, eğri sola kayar. (D) Fiyat değişmediği için hiçbir şey olmaz.",
            adimlar: ["Önce malı oku: gelir her malın talebini sağa kaydırmaz.", "Gelir değişti (fiyat dışı etken): eğri kayar. B ve D elenir.", "Mal inferior: gelir ↑ → talep ↓.", "Talep azalır: eğri sola kayar. Aileler yeni kitaba geçer."],
            sonuc: "==C: talep azalır, eğri sola kayar.== *Inferior good*'un talebi gelirle ters yönde hareket eder." }
        ]
      },
      {
        baslik: "Kim etkilendi? Alıcı mı, satıcı mı?",
        kisa: "Alıcıyı etkileyen talebi, satıcıyı etkileyen arzı kaydırır.",
        bloklar: [
          { tip: "ikili", sol: { ikon: "🛍️", baslik: "Alıcıyı etkiler → talep", maddeler: ["Zevk, haber, reklam", "Alıcı sayısı", "Gelir, beklenti, ilişkili mal"] },
            sag: { ikon: "🏭", baslik: "Satıcıyı etkiler → arz", maddeler: ["Girdi (peynir, un) maliyeti", "Satıcı sayısı", "Teknoloji (arz bölümünde)"] },
            oyun: [
              { metin: "Tostun içinden saç çıktı haberi, öğrenciler tostu artık istemiyor.", cevap: "sol", neden: "Zevkler değişti: alıcı tarafı, talep sola (arz değil)." },
              { metin: "Peynirin maliyeti arttı.", cevap: "sag", neden: "Satıcının maliyeti: arz meselesi." },
              { metin: "Yeni bir kantin açıldı.", cevap: "sag", neden: "Satıcı sayısı arttı: arz." },
              { metin: "Okula 200 yeni öğrenci geldi.", cevap: "sol", neden: "Alıcı sayısı arttı: talep." }
            ] },
          { tip: "tuzak", baslik: "Girdi fiyatı talep belirleyicisi değildir", metin: "\"Hangisi talep belirleyicisi DEĞİLDİR?\" sorusunda genelde girdi fiyatı doğru cevaptır.", yanlis: "Peynirin maliyeti artarsa tost talebi azalır.", dogru: "Peynirin maliyeti satıcıyı ilgilendirir ==(arz)==. Ve unutma: tostun kendi fiyatı tost talebini asla kaydırmaz." }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Eğrinin kayması *change in demand*'dir: sağa kayma artış, sola kayma azalış (yukarı-aşağı deme).",
              "Aynı artışa iki yol: fiyat düşer, eğri üzerinde hareket (A → B); fiyat sabit, eğri kayar (A → C).",
              "Beş etken: *tastes*, *number of consumers*, *related goods*, *income*, *expectations*.",
              "*Substitute* pahalanırsa talep artar; *complement* pahalanırsa talep azalır.",
              "Gelir artınca *normal good*'un talebi sağa, *inferior good*'unki sola kayar; önce malın türünü oku.",
              "Fiyatın gelecekte artacağı beklentisi bugünkü talebi artırır, düşeceği beklentisi azaltır.",
              "Alıcıyı etkileyen talebi, satıcıyı etkileyen arzı değiştirir; girdi fiyatı ve satıcı sayısı arz meselesidir.",
              "Ürünün kendi fiyatı eğriyi asla kaydırmaz."
            ] }
        ]
      }
    ]
  };
})();
