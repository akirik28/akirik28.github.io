/* Kitora not defteri · mc109 · 1.6 Denge, Fazla ve Kıtlık
   Kaynak: ap-videolar/src/episodes/mc109 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı.
   Not: yardımcı işlevler yalnızca ortak eksen ve D/S eğrilerini üretir (1 birim = 10 tost, 1 birim = 10 TL). */
window.DEFTER = (function () {
  var AX = {
    xlabel: "Miktar (tost)", ylabel: "Fiyat (TL)", xmax: 11, ymax: 10,
    xticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
    yticks: [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }, { v: 5, label: "50" }, { v: 6, label: "60" }, { v: 8, label: "80" }]
  };
  function graf(baslik, ogeler, durumlar) {
    var g = { tip: "grafik", baslik: baslik, ogeler: ogeler, durumlar: durumlar };
    for (var k in AX) g[k] = AX[k];
    return g;
  }
  /* D: Qd = 100 − P → (2,8)→(8,2) · S: Qs = P + 20 → (3,1)→(9,7) */
  function DS(gizli) {
    return [
      { id: "D", tip: "cizgi", renk: 0, from: [2, 8], to: [8, 2], etiket: "D", gizli: gizli },
      { id: "S", tip: "cizgi", renk: 1, from: [3, 1], to: [9, 7], etiket: "S", gizli: gizli }
    ];
  }

  return {
    slug: "mc109",
    ozet: "Alıcıların sesi talep, satıcıların sesi arz; fiyatı ikisi birlikte belirler. Bu defterde arz–talep tablosundan ve grafiğinden dengeyi (*equilibrium*) bulmayı, fiyat dengenin üstündeyken *surplus*, altındayken *shortage* oluştuğunu, bunların büyüklüğünü aynı fiyattaki iki miktarın farkıyla hesaplamayı, fiyatın kendi kendine dengeye dönüşünü (eğriler kaymadan!) ve *price signals* fikrini göreceksin.",
    bolumler: [
      {
        baslik: "Pahalı tost, ucuz tost",
        bloklar: [
          { tip: "hikaye", ikon: "🔔", baslik: "Teneffüs zili",
            metin: "Teneffüs zili çaldı, kantine koşuyorsun. Kantinci tostu 20 liraya indirmiş: kuyruk koridora taşıyor, tost yetişmiyor. Ertesi gün tost 60 lira: kuyruk yok ama tezgâhta soğuyan tostlar birikiyor. Peki doğru fiyat hangisi? Kimse kantinciye söylemiyor; yine de fiyat birkaç gün içinde kendi kendine bir yere yerleşiyor. Nereye ve neden? Bugünün konusu bu." },
          { tip: "tablo", baslik: "İki gün, iki tablo", head: ["Gün", "Fiyat", "Ne görüyorsun?"], rows: [["Dün", "20 TL", "Kuyruk koridora taşıyor, tost yetişmiyor"], ["Bugün", "60 TL", "Kuyruk yok, tezgâhta soğuyan tostlar birikiyor"]], not: "Fiyat çok düşükken kuyruk (açık), çok yüksekken yığın (fazla) oluşuyor." }
        ]
      },
      {
        baslik: "Makasın iki bıçağı",
        bloklar: [
          { tip: "not", metin: "Bunu çözmek için önceki iki bölümü birleştiriyoruz. *Demand*, yani talep, alıcıların sesi; *supply*, yani arz, satıcıların sesi. Hafıza cümlesi: **talep toprağa iner, arz göğe çıkar.** Ekonomist Alfred Marshall bunu **makasa** benzetti: kâğıdı tek bıçak kesmez. Fiyatı da ne yalnız alıcı belirler ne yalnız satıcı; ikisi birlikte." },
          graf("Talep ve arz birlikte", DS(true).concat([
            { id: "ek", tip: "nokta", renk: 3, x: 6, y: 4, etiket: "kesişim", gizli: true }
          ]), [
            { metin: "Önce **talep**: aşağı inen D. Alıcıların sesi.", goster: ["D"] },
            { metin: "Sonra **arz**: yukarı çıkan S. Satıcıların sesi.", goster: ["S"] },
            { metin: "İki bıçak bir noktada buluşur: fiyatı ikisi birlikte belirler.", goster: ["ek"] }
          ]),
          { tip: "ikili", sol: { ikon: "🛒", baslik: "Talep (*demand*)", maddeler: ["Alıcıların sesi", "Aşağı iner (\"toprağa\")", "Fiyat ↑ → *Qd* ↓"] },
            sag: { ikon: "🏭", baslik: "Arz (*supply*)", maddeler: ["Satıcıların sesi", "Yukarı çıkar (\"göğe\")", "Fiyat ↑ → *Qs* ↑"] },
            oyun: [
              { metin: "Fiyat yükselince alıcılar daha az almak istiyor.", cevap: "sol", neden: "Alıcının tepkisi: talep." },
              { metin: "Fiyat yükselince kantinci daha çok tost yapmak istiyor.", cevap: "sag", neden: "Satıcının tepkisi: arz." },
              { metin: "Eğri soldan sağa aşağı iniyor.", cevap: "sol", neden: "Talep eğrisi." },
              { metin: "Eğri soldan sağa yukarı tırmanıyor.", cevap: "sag", neden: "Arz eğrisi." }
            ] }
        ]
      },
      {
        baslik: "Tablodan dengeyi bulmak",
        bloklar: [
          { tip: "tablo", baslik: "Market for Toast", head: ["Fiyat (TL)", "Talep edilen miktar (Qd)", "Arz edilen miktar (Qs)", "Durum"], rows: [
              ["20", "80", "40", "Açık (shortage): Qd > Qs"],
              ["30", "70", "50", "Açık (shortage)"],
              ["40", "60", "60", "DENGE: Qd = Qs"],
              ["50", "50", "70", "Fazla (surplus): Qs > Qd"],
              ["60", "40", "80", "Fazla (surplus)"]
            ], vurgu: 2, not: "20 lirada öğrenciler 80 tost ister, kantinci yalnızca 40 yapar. Fiyat arttıkça istenen azalır, yapılan artar. 40 lirada ikisi de 60. Kural: Qd = 100 − P, Qs = P + 20." },
          { tip: "kavramlar", kartlar: [
              { ikon: "⚖️", terim: "Equilibrium", tr: "denge", tanim: "Talep edilen miktarın arz edilen miktara eşit olduğu durum; grafikte arz ve talep eğrilerinin kesişimi.", ornek: "40 TL'de hem Qd hem Qs 60 tost." },
              { ikon: "💲", terim: "Equilibrium price (Pe)", tr: "denge fiyatı", tanim: "*Qd = Qs* olan **tek** fiyat.", ornek: "40 lira." },
              { ikon: "📦", terim: "Equilibrium quantity (Qe)", tr: "denge miktarı", tanim: "Denge fiyatında alınıp satılan miktar.", ornek: "60 tost." }
            ] },
          { tip: "ornek", baslik: "Dengeyi hesapla", durum: "Qd = 100 − P ve Qs = P + 20. Denge fiyatı ve miktarı nedir?",
            adimlar: ["Denge: Qd = Qs.", "100 − P = P + 20.", "80 = 2P → P = 40.", "Qd = 100 − 40 = 60; Qs = 40 + 20 = 60. Eşit."],
            sonuc: "==Pe = 40 TL, Qe = 60 tost.== Tablodaki 40 liralık satırın ta kendisi." }
        ]
      },
      {
        baslik: "Grafikte denge",
        bloklar: [
          graf("Kesişim, tablodaki satırın ta kendisi", DS(false).concat([
            { id: "E", tip: "nokta", renk: 3, x: 6, y: 4, etiket: "Denge · 40 TL, 60 tost", kilavuz: true, gizli: true },
            { id: "mc", tip: "yazi", x: 8.4, y: 4.8, metin: "market-clearing price", gizli: true },
            { id: "cl", tip: "yazi", x: 8.4, y: 3.9, metin: "satılmayan tost yok, eli boş dönen yok", gizli: true }
          ]), [
            { metin: "Dikeyde fiyat, yatayda miktar. D ve S çizili." },
            { metin: "İki eğrinin kesiştiği nokta: **40 lira, 60 tost**. Tablodaki denge satırıyla aynı.", goster: ["E"] },
            { metin: "Bu fiyata ==*market-clearing price*== da denir, çünkü piyasa temizlenir: tezgâhta satılmayan tost kalmaz, o fiyata tost isteyip eli boş dönen de olmaz.", goster: ["mc", "cl"] },
            { metin: "Fiyatı değiştirecek bir baskı yoktur. Kural: soru aksini söylemiyorsa piyasanın ==dengede== olduğunu varsay." }
          ]),
          { tip: "kavramlar", kartlar: [
              { ikon: "🧹", terim: "Market-clearing price", tr: "piyasayı temizleyen fiyat", tanim: "Denge fiyatının diğer adı: bu fiyatta satılmayan mal da, almak isteyip alamayan alıcı da kalmaz.", ornek: "Tost 40 TL iken kantin tezgâhı tam boşalır." }
            ] },
          { tip: "tuzak", baslik: "Önce dengeyi varsay", metin: "Soru aksini söylemiyorsa analize dengeden başla.", yanlis: "Piyasa her zaman fazla ya da açık içindedir.", dogru: "Soru aksini söylemiyorsa ==piyasa dengededir==; denge fiyatı ve miktarı değişim baskısı altında değildir." }
        ]
      },
      {
        baslik: "*Surplus*: fiyat dengenin üstünde",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🧊", terim: "Disequilibrium", tr: "dengesizlik", tanim: "Fiyatın denge fiyatından farklı olduğu, *Qd* ile *Qs*'nin eşit olmadığı durum.", ornek: "Tost 60 lira iken." },
              { ikon: "📚", terim: "Surplus", tr: "fazla", tanim: "Fiyat dengenin **üstündeyken** arz edilen miktarın talep edilenden fazla olması (*Qs > Qd*). Fiyatı **aşağı** iter.", ornek: "60 TL'de Qs = 80, Qd = 40: 40 tost tezgâhta soğuyor." }
            ] },
          graf("Kantinci tostu 60 liraya çıkardı", DS(false).concat([
            { id: "pl", tip: "cizgi", renk: 2, from: [0, 6], to: [10, 6], etiket: "60 TL", gizli: true },
            { id: "pd", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "Qd = 40", gizli: true },
            { id: "ps", tip: "nokta", renk: 3, x: 8, y: 6, etiket: "Qs = 80", gizli: true },
            { id: "gap", tip: "ok", renk: 2, from: [4.1, 5.5], to: [7.9, 5.5], gizli: true },
            { id: "gt", tip: "yazi", x: 6, y: 4.9, metin: "SURPLUS = 80 − 40 = 40 tost", gizli: true }
          ]), [
            { metin: "Piyasa 40 liralık dengede. Ama fiyat dengede değilse? Buna ==*disequilibrium*== denir." },
            { metin: "Kantinci fiyatı **60 liraya** çıkardı.", goster: ["pl"] },
            { metin: "Bu fiyatta öğrenciler **40 tost** ister (D üzerinde) …", goster: ["pd"] },
            { metin: "… kantinci ise **80 tost** yapar (S üzerinde).", goster: ["ps"] },
            { metin: "Arz edilen miktar talep edilenden fazla: ==*surplus*==. Ne kadar? Aynı fiyatta 80 − 40 = **40 tost** tezgâhta soğuyor.", goster: ["gap", "gt"] }
          ]),
          { tip: "formul", parcalar: [
              { t: "Fiyat > Pe", alt: "fiyat dengenin üstünde" }, "→",
              { t: "Qs > Qd", alt: "surplus (fazla)" }, "→",
              { t: "Fiyat ↓", alt: "satıcılar fiyatı indirir" }
            ], aciklama: "Büyüklük: aynı fiyatta iki miktarın farkı, *Qs − Qd*." },
          { tip: "ornek", baslik: "Surplus'ın büyüklüğü", durum: "Tost 60 lira iken kaç tostluk surplus var?",
            adimlar: ["60 liraya bak: tablodan Qd = 40, Qs = 80.", "Surplus = Qs − Qd = 80 − 40 = 40."],
            sonuc: "==40 tostluk surplus== (aynı fiyattaki iki miktarın farkı)." }
        ]
      },
      {
        baslik: "Fazla kendini düzeltir (eğriler kaymaz!)",
        bloklar: [
          graf("Kantinci fiyatı indirir", DS(false).concat([
            { id: "pl", tip: "cizgi", renk: 2, from: [0, 6], to: [10, 6], etiket: "60 TL" },
            { id: "pd", tip: "nokta", renk: 3, x: 4, y: 6, etiket: "Qd = 40" },
            { id: "ps", tip: "nokta", renk: 3, x: 8, y: 6, etiket: "Qs = 80" },
            { id: "gap", tip: "ok", renk: 2, from: [4.1, 5.5], to: [7.9, 5.5] },
            { id: "gt", tip: "yazi", x: 6, y: 4.9, metin: "fazla = 40" },
            { id: "ok0", tip: "yazi", x: 6, y: 3.2, metin: "denge: fazla = 0", gizli: true }
          ]), [
            { metin: "60 liraya fazla **40 tost**. Kantinci soğuk tostu kimseye satamaz." },
            { metin: "Fiyatı **50 liraya** indirir: Qd = 50, Qs = 70; fazla ==20 tosta== düşer. İki nokta eğriler üzerinde hareket etti.",
              set: { pl: { from: [0, 5], to: [10, 5], etiket: "50 TL" }, pd: { x: 5, y: 5, etiket: "Qd = 50" }, ps: { x: 7, y: 5, etiket: "Qs = 70" }, gap: { from: [5.1, 4.5], to: [6.9, 4.5] }, gt: { x: 6, y: 3.9, metin: "fazla = 70 − 50 = 20" } } },
            { metin: "Bir kez daha indirir, **40 lira**: iki nokta kesişimde birleşir, fazla ==sıfır==.",
              set: { pl: { from: [0, 4], to: [10, 4], etiket: "40 TL" }, pd: { x: 6, y: 4, etiket: "Qd = 60" }, ps: { x: 6, y: 4, etiket: "Qs = 60" } }, gizle: ["gap", "gt"], goster: ["ok0"] },
            { metin: "Dikkat: ==hiçbir eğri kaymadı!== Sadece fiyat değişti; iki eğrinin üzerinde de hareket ettik." }
          ]),
          { tip: "tablo", baslik: "Fazlanın kapanışı", head: ["Fiyat", "Qd", "Qs", "Fazla"], rows: [["60", "40", "80", "40"], ["50", "50", "70", "20"], ["40", "60", "60", "0"]], not: "Fiyat düştükçe fazla azalır; dengeye gelince sıfırlanır." },
          { tip: "tuzak", baslik: "Fiyat değişti, eğri kaydı sanmak", metin: "Tost 60'tan 50'ye inince \"talep arttı, arz azaldı\" deme.", yanlis: "Fiyat düşünce D sağa, S sola kayar.", dogru: "Ürünün kendi fiyatı eğri kaydırmaz: ==quantity demanded artar, quantity supplied azalır==; iki eğri üzerinde hareket edilir." }
        ]
      },
      {
        baslik: "*Shortage*: fiyat dengenin altında",
        bloklar: [
          { tip: "kavramlar", kartlar: [
              { ikon: "🚶", terim: "Shortage", tr: "kıtlık, açık", tanim: "Fiyat dengenin **altındayken** talep edilen miktarın arz edilenden fazla olması (*Qd > Qs*). Fiyatı **yukarı** iter.", ornek: "20 TL'de Qd = 80, Qs = 40: 40 tostluk açık." },
              { ikon: "🙋", terim: "Bid up", tr: "fiyatı yukarı sürmek", tanim: "*Shortage*'da alıcıların daha yüksek fiyat teklif ederek fiyatı yukarı itmesi.", ornek: "Kuyrukta biri \"ben 30 lira veririm!\" der." }
            ] },
          graf("Tost 20 lira: kuyruk uzar", DS(false).concat([
            { id: "pl", tip: "cizgi", renk: 2, from: [0, 2], to: [10, 2], etiket: "20 TL", gizli: true },
            { id: "ps", tip: "nokta", renk: 3, x: 4, y: 2, etiket: "Qs = 40", gizli: true },
            { id: "pd", tip: "nokta", renk: 3, x: 8, y: 2, etiket: "Qd = 80", gizli: true },
            { id: "gap", tip: "ok", renk: 2, from: [4.1, 1.5], to: [7.9, 1.5], gizli: true },
            { id: "gt", tip: "yazi", x: 6, y: 0.8, metin: "SHORTAGE = 80 − 40 = 40", gizli: true },
            { id: "ok0", tip: "yazi", x: 6, y: 3.2, metin: "denge: açık = 0", gizli: true }
          ]), [
            { metin: "Şimdi ters yöne: fiyat **20 lira**.", goster: ["pl"] },
            { metin: "Öğrenciler **80 tost** ister (D üzerinde), kantinci **40** yapar (S üzerinde).", goster: ["pd", "ps"] },
            { metin: "Talep edilen miktar arz edilenden fazla: ==*shortage*== (kıtlık, açık). 80 − 40 = **40 tostluk açık**.", goster: ["gap", "gt"] },
            { metin: "Kuyruk uzar, biri bağırır: ben 30 lira veririm! Alıcılar fiyatı yukarı iter. **30 lirada** açık 20'ye düşer.",
              set: { pl: { from: [0, 3], to: [10, 3], etiket: "30 TL" }, ps: { x: 5, y: 3, etiket: "Qs = 50" }, pd: { x: 7, y: 3, etiket: "Qd = 70" }, gap: { from: [5.1, 2.5], to: [6.9, 2.5] }, gt: { x: 6, y: 1.8, metin: "açık = 70 − 50 = 20" } } },
            { metin: "**40 lirada** açık sıfır: denge. Yine eğriler kaymadı.",
              set: { pl: { from: [0, 4], to: [10, 4], etiket: "40 TL" }, ps: { x: 6, y: 4, etiket: "Qs = 60" }, pd: { x: 6, y: 4, etiket: "Qd = 60" } }, gizle: ["gap", "gt"], goster: ["ok0"] }
          ]),
          { tip: "formul", parcalar: [
              { t: "Fiyat < Pe", alt: "fiyat dengenin altında" }, "→",
              { t: "Qd > Qs", alt: "shortage (açık)" }, "→",
              { t: "Fiyat ↑", alt: "alıcılar fiyatı yukarı iter" }
            ], aciklama: "Büyüklük: aynı fiyatta iki miktarın farkı, *Qd − Qs*." },
          { tip: "tablo", baslik: "Açığın kapanışı", head: ["Fiyat", "Qd", "Qs", "Açık"], rows: [["20", "80", "40", "40"], ["30", "70", "50", "20"], ["40", "60", "60", "0"]], not: "Fiyat yükseldikçe açık azalır; dengeye gelince sıfırlanır." }
        ]
      },
      {
        baslik: "Karıştırma tuzakları",
        bloklar: [
          { tip: "ikili", sol: { ikon: "📚", baslik: "*Surplus*", maddeler: ["Fiyat dengenin ÜSTÜNDE", "*Qs > Qd*: tezgâhta yığın", "Fiyat aşağı iner"] },
            sag: { ikon: "🚶", baslik: "*Shortage*", maddeler: ["Fiyat dengenin ALTINDA", "*Qd > Qs*: kuyruk", "Fiyat yukarı çıkar"] },
            oyun: [
              { metin: "Tost 60 lira, tezgâhta soğuyan tostlar birikiyor.", cevap: "sol", neden: "Yüksek fiyat → yığın: *surplus*." },
              { metin: "Tost 20 lira, kuyruk koridora taşıyor.", cevap: "sag", neden: "Düşük fiyat → kuyruk: *shortage*." },
              { metin: "Satıcılar fiyatı düşürmek zorunda kalıyor.", cevap: "sol", neden: "Fazla fiyatı aşağı çeker." },
              { metin: "Alıcılar \"ben daha çok veririm\" diye bağırıyor.", cevap: "sag", neden: "Açık fiyatı yukarı iter (*bid up*)." },
              { metin: "Fiyat denge fiyatından yüksek.", cevap: "sol", neden: "Fiyat Pe'nin üstünde: surplus." }
            ] },
          { tip: "tuzak", baslik: "Yön karışıklığı", metin: "Kısa yol: ==fiyat yüksekse yığın, fiyat düşükse kuyruk==.", yanlis: "Fiyat dengenin üstündeyse shortage olur.", dogru: "Dengenin ==üstünde surplus==, ==altında shortage==. Miktarı hep aynı fiyat çizgisinde iki eğri arasındaki farkla bul; tek bir miktarı (ör. 80) cevap sanma." },
          { tip: "tuzak", baslik: "*Scarcity* ile karıştırma", metin: "*Scarcity* hiç bitmez; *shortage* ise fiyat dengeye gelince kapanır.", yanlis: "Shortage ile scarcity aynı şeydir.", dogru: "*Scarcity* her zaman vardır (sınırsız istek, sınırlı kaynak); *shortage* yalnızca fiyat dengenin altındayken ortaya çıkan ==geçici== bir durumdur." },
          { tip: "tuzak", baslik: "Kural fiyatı tutarsa", metin: "Bir kural fiyatı dengenin altında (20 lirada) tutarsa fiyat yükselemez ve kuyruk hiç bitmez.", yanlis: "Fiyat her koşulda dengeye gelir.", dogru: "Fiyatı kuralla dengenin altında tutarsan ==shortage kalıcı==, üstünde tutarsan ==surplus kalıcı== olur. Bu kontrollerin ayrıntısı *AP Micro*'da." }
        ]
      },
      {
        baslik: "Bu düzeni kimse yönetmiyor: *price signals*",
        bloklar: [
          { tip: "not", metin: "Kantinci fiyatı kimsenin söylemesiyle bulmuyor; arz ve talep onu zaten dengeye çekiyor. Fiyat bir **mesaj** taşır." },
          { tip: "adimlar", baslik: "Fiyat bir sinyaldir", adimlar: [
              { baslik: "Fiyat yükselir", metin: "Kantinci daha çok tost yapar: \"daha çok üret\" mesajı." },
              { baslik: "Fiyat düşer", metin: "Emeğini ve tezgâhını başka işe kaydırır: \"kaynağı başka yere ver\" mesajı." },
              { baslik: "Alıcıyı korur", metin: "Rekabet: kantinci tostu 100 liraya satamaz, öğrenciler karşıdaki fırına gider." },
              { baslik: "Satıcıyı korur", metin: "Öğrenci 10 lira teklif edemez; kantinci tostu başka birine satar." }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "📡", terim: "Price signals", tr: "fiyat sinyalleri", tanim: "Fiyatın alıcı ve satıcılara taşıdığı bilgi: yükselen fiyat \"daha çok üret\", düşen fiyat \"kaynağı başka işe kaydır\" der.", ornek: "Tost fiyatı yükselince kantinci daha çok tost yapar." }
            ] },
          { tip: "harita", merkez: "Fiyatı ne belirler?", dallar: [
              { baslik: "Alıcılar (talep)", alt: "Çok yüksek fiyatta karşıdaki fırına giderler" },
              { baslik: "Satıcılar (arz)", alt: "Çok düşük fiyata başka alıcı bulurlar" },
              { baslik: "Rekabet", alt: "İki tarafı da korur" },
              { baslik: "Fiyat sinyali", alt: "Bilgi taşır, kaynakları yönlendirir" }
            ] }
        ]
      },
      {
        baslik: "Sınav sorusu: dilim pizza",
        bloklar: [
          { tip: "tablo", baslik: "Dilim pizza piyasası (Pe = 50 TL)", head: ["Fiyat (TL)", "Qd (dilim)", "Qs (dilim)"], rows: [["30", "100", "40"], ["40", "80", "50"], ["50", "60", "60"], ["60", "40", "70"]], vurgu: 1 },
          { tip: "ornek", baslik: "Fiyat 40 lira olursa?", durum: "Dilim pizza piyasasında denge fiyatı 50 lira. Fiyat 40 lira olursa 80 dilim isteniyor, yalnızca 50 dilim sunuluyor. Bu fiyatta ne olur? Şıklar: (A) 30 dilimlik surplus; fiyat düşer. (B) 30 dilimlik shortage; fiyat yükselir. (C) 80 dilimlik shortage; fiyat yükselir. (D) 30 dilimlik shortage; fiyat düşer.",
            adimlar: ["Fiyat denge fiyatının (50) altında: shortage olmalı. A elenir.", "Büyüklük: Qd − Qs = 80 − 50 = 30. C (80) elenir.", "Shortage'da alıcılar fiyatı yukarı iter. D elenir."],
            sonuc: "==B: 30 dilimlik shortage; fiyat yükselir.== Fiyat dengenin altında olduğu için alıcılar fiyatı yukarı iter." }
        ]
      },
      {
        baslik: "Toparlayalım",
        bloklar: [
          { tip: "ozet", maddeler: [
              "Denge, talep edilen ve arz edilen miktarın eşit olduğu noktadır (tostta 40 TL, 60 tost); piyasa temizlenir (*market-clearing price*).",
              "Soru aksini söylemiyorsa piyasayı dengede varsay.",
              "Fiyat dengenin üstündeyse *surplus* (Qs > Qd, yığın) olur ve fiyat düşer.",
              "Fiyat dengenin altındaysa *shortage* (Qd > Qs, kuyruk) olur ve fiyat yükselir.",
              "Fazla ya da açığın büyüklüğü, aynı fiyattaki iki miktarın farkıdır (80 − 40 = 40).",
              "Fiyat değişimi eğriyi kaydırmaz; eğriler üzerinde hareket ettirir.",
              "*Scarcity* hiç bitmez; *shortage* fiyat dengeye gelince kapanır. Kuralla tutulan fiyatta kalıcı olur (AP Micro).",
              "Fiyat bir sinyaldir (*price signals*); rekabet alıcıyı da satıcıyı da korur."
            ] }
        ]
      }
    ]
  };
})();
