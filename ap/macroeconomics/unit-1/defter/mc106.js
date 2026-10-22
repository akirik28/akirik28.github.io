/* Kitora not defteri · mc106 · 1.4 Talep Yasası
   Kaynak: ap-videolar/src/episodes/mc106 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc106",
  ozet: "Fiyat arttıkça insanlar neden daha az alır? Bu defterde *demand* ile *quantity demanded* farkını, *law of demand*'ı, talep tablosunu ve aşağı eğimli talep eğrisini, bunun üç nedenini (*substitution effect*, *income effect*, *diminishing marginal utility*) ve sınavın en büyük tuzağını göreceksin: ürünün kendi fiyatı eğriyi kaydırmaz, sadece eğri üzerinde gezdirir.",
  bolumler: [
    {
      baslik: "Kantin deneyi",
      bloklar: [
        { tip: "hikaye", ikon: "🥪", baslik: "Tost 10 TL mi, 90 TL mi?",
          metin: "Kantinde küçük bir deney yapalım. Tost 10 lira olsun: kuyruk bahçeye kadar uzar. Fiyatı 50 liraya çıkar: kuyruğun yarısı dağılır. 90 lira olunca önde yalnızca birkaç kişi kalır, onlar da söylene söylene alır. Kimse kimseye \"fiyat artınca daha az al\" demedi. Peki yüzlerce öğrenci neden aynı şeyi yaptı? Bugün bunun üç gizli sebebini bulacağız." },
        { tip: "tablo", baslik: "Kuyruk ne kadar uzun?", head: ["Tostun fiyatı", "Günde satılan tost"], rows: [["10 TL", "90"], ["50 TL", "50"], ["90 TL", "10"]], not: "Fiyat yükseldikçe satış düşüyor. Deney sırasında kimse karar vermedi; bu, herkesin kendi hesabıyla yaptığı bir davranış." },
        { tip: "sayilar", ogeler: [
            { deger: 90, etiket: "10 TL'de günlük tost" },
            { deger: 50, etiket: "50 TL'de günlük tost" },
            { deger: 10, etiket: "90 TL'de günlük tost" }
          ] }
      ]
    },
    {
      baslik: "Talep nedir? *Willing and able*",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "*Willing*", alt: "istemek" }, "+",
            { t: "*Able*", alt: "satın almaya gücün yetmek" }, "=",
            { t: "*Demand*", alt: "talep" }
          ], aciklama: "İkisi birden şart: biri eksikse talep yoktur." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🛒", terim: "Demand", tr: "talep", tanim: "Tüketicilerin **farklı fiyatlarda** almak istedikleri ve almaya güçlerinin yettiği miktarların tamamı (tablo ya da eğri). Tek bir sayı değildir.", ornek: "Kantin tostu için tüm fiyat–miktar çiftleri." },
            { ikon: "1️⃣", terim: "Quantity demanded", tr: "talep edilen miktar", tanim: "Belirli **bir** fiyatta almak istenen tek miktar; eğri üzerindeki bir nokta.", ornek: "70 TL'de 30 tost." },
            { ikon: "💪", terim: "Willing and able", tr: "istekli ve güç yetirebilir", tanim: "Talebin iki koşulu: hem istemek hem de satın alacak parası olmak.", ornek: "Ferrari'yi çok istiyorsun ama paran yok: talep yok." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Talep VAR", maddeler: ["İstiyorsun (*willing*)", "Parası var (*able*)", "İkisi birden"] },
          sag: { ikon: "❌", baslik: "Talep YOK", maddeler: ["Sadece istiyorsun ama parası yok", "Parası var ama ilgilenmiyor", "Biri bile eksikse yok"] },
          oyun: [
            { metin: "Ferrari'yi çok istiyorsun ama paran yok.", cevap: "sag", neden: "*Willing* var, *able* yok: talep yok." },
            { metin: "Zengin dayın Ferrari alabilir ama hiç ilgilenmiyor.", cevap: "sag", neden: "*Able* var, *willing* yok: talep yok." },
            { metin: "Cebinde 90 TL var ve o tostu gerçekten istiyorsun.", cevap: "sol", neden: "İkisi birden var: talep." },
            { metin: "Bütçen 150 TL ve haftada 3 tost almaya karar verdin.", cevap: "sol", neden: "İstek ve ödeme gücü bir arada." }
          ] },
        { tip: "tuzak", baslik: "Sadece istemek yetmez", metin: "Sınavda \"istekli tüketiciler\" gibi eksik tanımlara dikkat.", yanlis: "Bir şeyi çok istiyorsan o malın talebi vardır.", dogru: "Talep için ==hem istemek hem alabilecek güçte olmak== gerekir (*willing and able*)." }
      ]
    },
    {
      baslik: "Talep yasası ve talep tablosu",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Fiyat ↑", alt: "price up" }, "→",
            { t: "*Quantity demanded* ↓", alt: "talep edilen miktar azalır" }
          ], aciklama: "*Law of demand*: fiyat ile talep edilen miktar arasında **ters** ilişki var; biri artarken diğeri azalır (*ceteris paribus*)." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Law of demand", tr: "talep yasası", tanim: "Fiyat ile *quantity demanded* arasında ters ilişki vardır: fiyat artınca talep edilen miktar azalır, düşünce artar.", ornek: "Tost 90 TL'ye çıkınca günlük satış 10'a iner." },
            { ikon: "🧊", terim: "Ceteris paribus", tr: "diğer her şey sabitken", tanim: "Eğri çizilirken gelir, zevkler, diğer malların fiyatı gibi her şey sabit tutulur; yalnız malın kendi fiyatı değişir.", ornek: "Harçlık ve simit fiyatı aynı kalır." },
            { ikon: "📋", terim: "Demand schedule", tr: "talep tablosu", tanim: "Farklı fiyatlarda talep edilen miktarları gösteren tablo.", ornek: "Aşağıdaki kantin tostu tablosu." }
          ] },
        { tip: "tablo", baslik: "Demand schedule · kantin tostu", head: ["Fiyat (TL)", "Talep edilen miktar (tost/gün)"], rows: [["90", "10"], ["70", "30"], ["50", "50"], ["30", "70"], ["10", "90"]], not: "Fiyat her 20 TL düştüğünde günde 20 tost daha satılıyor. Kural: Qd = 100 − P." }
      ]
    },
    {
      baslik: "Tablodan eğriye: *demand curve*",
      bloklar: [
        { tip: "not", metin: "Ekonomide fiyat **dikey** eksende, miktar **yatay** eksendedir. Grafikte 1 birim = 10 TL ve 10 tost." },
        { tip: "grafik", baslik: "Talep eğrisi nasıl çizilir?", xlabel: "Miktar (tost/gün)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
          yticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
          ogeler: [
            { id: "n1", tip: "nokta", renk: 1, x: 1, y: 9, etiket: "90 TL · 10", gizli: true },
            { id: "n2", tip: "nokta", renk: 1, x: 3, y: 7, etiket: "70 TL · 30", gizli: true },
            { id: "n3", tip: "nokta", renk: 1, x: 5, y: 5, etiket: "50 TL · 50", gizli: true },
            { id: "n4", tip: "nokta", renk: 1, x: 7, y: 3, etiket: "30 TL · 70", gizli: true },
            { id: "n5", tip: "nokta", renk: 1, x: 9, y: 1, etiket: "10 TL · 90", gizli: true },
            { id: "d", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D", gizli: true }
          ],
          durumlar: [
            { metin: "Dikey eksen fiyat, yatay eksen miktar. Ekonomide hep böyle: fiyat yukarıda durur." },
            { metin: "Her tablo satırı bir nokta olur: 90 TL'de 10 tost, 70 TL'de 30 tost …", goster: ["n1", "n2"] },
            { metin: "… 50 TL'de 50, 30 TL'de 70, 10 TL'de 90 tost.", goster: ["n3", "n4", "n5"] },
            { metin: "Noktaları birleştir: soldan sağa **aşağı inen** bir çizgi. İşte ==*demand curve*== (talep eğrisi).", goster: ["d"] }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📉", terim: "Demand curve", tr: "talep eğrisi", tanim: "*Demand schedule*'ın grafiği; dikey eksen fiyat, yatay eksen miktar; aşağı eğimli. Tablo da eğri de aynı şeyi anlatır: ikisi de *demand*'in kendisidir.", ornek: "(1,9)'dan (9,1)'e inen D çizgisi." }
          ] }
      ]
    },
    {
      baslik: "Sebep 1: *substitution effect*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔁", terim: "Substitution effect", tr: "ikame etkisi", tanim: "Bir malın fiyatı değişince tüketicilerin **göreceli olarak ucuz kalan** mala kayması.", ornek: "Tost 90 TL olunca 40 TL'lik simit göreceli ucuz kalır; öğrenciler simite geçer." }
          ] },
        { tip: "adimlar", baslik: "Tost ve simit (simit hep 40 TL)", adimlar: [
            { baslik: "Tost 90 TL olur", metin: "Tost pahalılaştı; simit göreceli olarak ucuz kaldı." },
            { baslik: "Öğrenciler simite geçer", metin: "Tost kuyruğundaki figürler simit kuyruğuna kayar." },
            { baslik: "Tost 30 TL'ye iner", metin: "Bu kez simit kuyruğundakiler tosta koşar." },
            { baslik: "Sonuç", metin: "Fiyat değişince insanlar göreceli olarak ucuz kalan mala kayar: tostun talebi fiyatla ters yönde hareket eder." }
          ] },
        { tip: "tablo", baslik: "Tost ve simit kuyruğu (örnek)", head: ["Tostun fiyatı", "Simit fiyatı", "Hangisi göreceli ucuz?", "Kayış"], rows: [
            ["90 TL", "40 TL", "Simit", "Tost → simit"],
            ["30 TL", "40 TL", "Tost", "Simit → tost"]
          ], not: "Simitin fiyatı sabit; yalnız tostun fiyatı değişiyor (*ceteris paribus*)." }
      ]
    },
    {
      baslik: "Sebep 2: *income effect*",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💼", terim: "Income effect", tr: "gelir etkisi", tanim: "Fiyat değişince aynı paranın alım gücü (*purchasing power*) değişir: fiyat düşünce aynı parayla daha çok alınır.", ornek: "150 TL bütçeyle 50 TL'den 3, 30 TL'den 5 tost alırsın." },
            { ikon: "💵", terim: "Purchasing power", tr: "alım gücü", tanim: "Belli bir parayla satın alınabilecek mal miktarı.", ornek: "Fiyat düşünce 150 TL daha çok tost alır." }
          ] },
        { tip: "ornek", baslik: "Haftalık 150 TL tost bütçesi", durum: "Haftalık tost bütçen 150 TL. Tost 50 TL iken ve 30 TL iken kaç tost alırsın? Cebine fazladan para girmedi.",
          adimlar: ["Tost 50 TL: 150 ÷ 50 = 3 tost.", "Tost 30 TL: 150 ÷ 30 = 5 tost.", "Fark: +2 tost, hiç fazladan para olmadan.", "Fiyat artarsa tersi olur: aynı para daha az tosta yeter."],
          sonuc: "Fiyat düşünce paranın ==alım gücü arttı==: 3 tost yerine 5 tost. Fiyat artarsa alım gücü düşer." },
        { tip: "tablo", baslik: "Aynı para, farklı fiyat", head: ["Bütçe", "Tostun fiyatı", "Alınan tost"], rows: [["150 TL", "50 TL", "3"], ["150 TL", "30 TL", "5"]], vurgu: 1 },
        { tip: "ikili", sol: { ikon: "🔁", baslik: "*Substitution effect*", maddeler: ["Başka mala geçiş", "Göreceli olarak ucuz kalanı alırsın", "Tost → simit"] },
          sag: { ikon: "💼", baslik: "*Income effect*", maddeler: ["Aynı parayla alınan miktar değişir", "Alım gücü artar ya da azalır", "150 TL: 3 tost → 5 tost"] },
          oyun: [
            { metin: "Tost pahalanınca simit kuyruğu uzadı.", cevap: "sol", neden: "Göreceli ucuz kalan mala kayış: ikame." },
            { metin: "Fiyat düşünce aynı 150 TL ile 2 tost daha alabiliyorsun.", cevap: "sag", neden: "Alım gücü arttı: gelir etkisi." },
            { metin: "Mısır gevreği pahalandı, öğrenciler yulaf lapasına geçti.", cevap: "sol", neden: "Başka mala geçiş: ikame etkisi." },
            { metin: "Fiyat artınca maaşın aynı kaldığı hâlde sepetin küçüldü.", cevap: "sag", neden: "Alım gücü düştü: gelir etkisi." }
          ] }
      ]
    },
    {
      baslik: "Sebep 3: azalan marjinal fayda",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧠", terim: "Utility", tr: "fayda, tatmin", tanim: "Bir malın tüketiminden aldığın tatmin (*satisfaction*).", ornek: "Tostu yerken duyduğun mutluluk." },
            { ikon: "➕", terim: "Marginal", tr: "ek, bir birim daha", tanim: "*Additional*: bir birim daha tüketince değişen miktar.", ornek: "İkinci tostun ek tatmini." },
            { ikon: "📉", terim: "Law of diminishing marginal utility", tr: "azalan marjinal fayda yasası", tanim: "Aynı maldan tüketilen **her ek birim** daha az ek tatmin verir; bu yüzden daha çok alman için fiyatın düşmesi gerekir.", ornek: "İlk tost harika, üçüncüyü zorla yersin." }
          ] },
        { tip: "grafik", baslik: "Her ek tost daha az tatmin eder", xlabel: "Kaçıncı tost", ylabel: "Ödemeye razı olduğun fiyat (TL)", xmax: 4, ymax: 10,
          xticks: [{ v: 1, label: "1." }, { v: 2, label: "2." }, { v: 3, label: "3." }],
          yticks: [{ v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 2, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "t1", tip: "yazi", x: 1, y: 7.5, metin: "70 TL", gizli: true },
            { id: "t2", tip: "yazi", x: 2, y: 5.5, metin: "50 TL", gizli: true },
            { id: "t3", tip: "yazi", x: 3, y: 3.5, metin: "30 TL", gizli: true },
            { id: "ok", tip: "ok", renk: 2, from: [1.2, 8.8], to: [3, 4.6], gizli: true }
          ],
          durumlar: [
            { metin: "Tatmin metresi boş. Tostları sırayla yiyelim." },
            { metin: "İlk tost harika; kaşar uzuyor, mutlusun. Bunun için **70 TL'ye** kadar verirsin.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 7], [0.65, 7]] } }, goster: ["t1"] },
            { metin: "İkincisi hâlâ güzel, ama biraz daha az: en fazla **50 TL**.", set: { b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 5], [1.65, 5]] } }, goster: ["t2"] },
            { metin: "Üçüncüsünü artık zorla yiyorsun: ancak **30 TL**.", set: { b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 3], [2.65, 3]] } }, goster: ["t3"] },
            { metin: "Her ek birim daha az tatmin verir; daha çok alman için ==fiyatın düşmesi== gerekir. Talep eğrisi bu yüzden aşağı iner.", goster: ["ok"] }
          ] },
        { tip: "tuzak", baslik: "Üç nedeni karıştırma", metin: "Üç nedenin hangisinin hangisi olduğunu anahtar kelimelerden bul.", yanlis: "Üç neden aynı şeydir; hepsi \"daha az alırım\" demektir.", dogru: "Başka mala geçiş = ==ikame==; aynı parayla daha çok/az alım = ==gelir==; **aynı maldan** ek birimin daha az tatmin etmesi = ==azalan marjinal fayda==." }
      ]
    },
    {
      baslik: "Eğri üzerinde hareket",
      bloklar: [
        { tip: "grafik", baslik: "Fiyat 70'ten 50'ye düşerse", xlabel: "Miktar (tost/gün)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
          yticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
            { id: "P", tip: "nokta", renk: 1, x: 3, y: 7, etiket: "A · 70 TL, 30 tost", kilavuz: true },
            { id: "pl", tip: "ok", renk: 2, from: [3.2, 4.4], to: [4.8, 4.4], gizli: true },
            { id: "pt", tip: "yazi", x: 4.3, y: 3.6, metin: "+20 tost", gizli: true }
          ],
          durumlar: [
            { metin: "Fiyat 70 TL iken A noktasındayız: günde **30 tost**." },
            { metin: "Fiyat **50 TL**'ye düşsün: nokta eğri üzerinde aşağı kayar ve B noktasına gelir: **50 tost**.", set: { P: { x: 5, y: 5, etiket: "B · 50 TL, 50 tost" } } },
            { metin: "Buna ==*change in quantity demanded*== (talep edilen miktarda değişme) denir. 50 − 30 = **+20 tost**.", goster: ["pl", "pt"] },
            { metin: "Fiyat geri çıkarsa nokta yine eğri üzerinde yukarı kayar. Eğrinin kendisi hiç kıpırdamadı.", gizle: ["pl", "pt"], set: { P: { x: 3, y: 7, etiket: "A · 70 TL, 30 tost" } } }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "↕️", terim: "Change in quantity demanded", tr: "talep edilen miktarda değişme", tanim: "Yalnızca **malın kendi fiyatı** değişince talep eğrisi üzerinde bir noktadan diğerine hareket. Eğri kaymaz.", ornek: "Tost 70 TL'den 50 TL'ye inince A'dan B'ye." }
          ] },
        { tip: "formul", parcalar: [
            { t: "Kendi fiyatı değişir", alt: "tek sebep" }, "→",
            { t: "Eğri üzerinde hareket", alt: "change in quantity demanded" }
          ], aciklama: "Quantity demanded'ı değiştiren tek şey ürünün kendi fiyatıdır." },
        { tip: "tablo", baslik: "Fiyat değişince hangi nokta?", head: ["Fiyat", "Nokta", "Talep edilen miktar", "Hareket"], rows: [
            ["70 TL → 50 TL", "A → B", "30 → 50", "Eğri üzerinde aşağı-sağa"],
            ["50 TL → 70 TL", "B → A", "50 → 30", "Eğri üzerinde yukarı-sola"]
          ], not: "Fiyat artınca eğri üzerinde yukarı-sola, düşünce aşağı-sağa hareket edilir." }
      ]
    },
    {
      baslik: "Tuzak: fiyat eğriyi kaydırmaz",
      bloklar: [
        { tip: "not", metin: "Dur, burada çoğu kişi yanılıyor. **Soru:** tostun fiyatı düşerse tost talebine ne olur?" },
        { tip: "grafik", baslik: "Talep artar mı, eğri sağa kayar mı?", xlabel: "Miktar (tost/gün)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
          yticks: [{ v: 1, label: "10" }, { v: 3, label: "30" }, { v: 5, label: "50" }, { v: 7, label: "70" }, { v: 9, label: "90" }],
          ogeler: [
            { id: "d", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
            { id: "ghost", tip: "cizgi", renk: 3, kesik: true, from: [2, 9], to: [10, 1], etiket: "yanlış kayma", gizli: true },
            { id: "x", tip: "yazi", x: 7.2, y: 8.2, metin: "✗ YANLIŞ", gizli: true },
            { id: "P", tip: "nokta", renk: 1, x: 3, y: 7, etiket: "A", gizli: true },
            { id: "ok", tip: "ok", renk: 1, from: [3.2, 6.8], to: [4.8, 5.2], gizli: true },
            { id: "yz", tip: "yazi", x: 6.5, y: 7.6, metin: "DEMAND: aynı · Qd: arttı", gizli: true },
            { id: "sh", tip: "ok", renk: 2, from: [6.5, 4.5], to: [8, 4.5], gizli: true },
            { id: "sht", tip: "yazi", x: 7.4, y: 5.2, metin: "başka etken: eğri kayar", gizli: true }
          ],
          durumlar: [
            { metin: "Soru: tostun fiyatı düşerse tost talebine ne olur?" },
            { metin: "\"Talep artar, eğri sağa kayar\" dersen yandın: bu cevap yanlış.", goster: ["ghost", "x"] },
            { metin: "Doğru cevap: ==*demand* aynı kalır==, eğri yerinden kıpırdamaz. Artan şey ==*quantity demanded*==.", gizle: ["ghost", "x"], goster: ["P", "ok", "yz"] },
            { metin: "Fiyat aynı kalırken kuyruk uzarsa (örneğin sınav haftası) eğrinin kendisi kayar: bu bir sonraki bölümün konusu.", gizle: ["P", "ok", "yz"], goster: ["sh", "sht"] }
          ] },
        { tip: "ikili", sol: { ikon: "↕️", baslik: "*Change in quantity demanded*", maddeler: ["Eğri üzerinde hareket", "Sebep: malın kendi fiyatı", "Eğri kıpırdamaz"] },
          sag: { ikon: "↔️", baslik: "*Change in demand*", maddeler: ["Eğrinin kendisi kayar", "Sebep: fiyat dışı etkenler (sonraki bölüm)", "Her fiyatta miktar değişir"] },
          oyun: [
            { metin: "Tostun fiyatı düştü.", cevap: "sol", neden: "Kendi fiyatı: eğri üzerinde hareket." },
            { metin: "Kuyruk uzadı ama fiyat aynı kaldı.", cevap: "sag", neden: "Fiyat dışı bir etken: eğri kayar." },
            { metin: "Poğaça 20 TL'den 30 TL'ye çıktı, başka bir şey değişmedi.", cevap: "sol", neden: "Yalnız kendi fiyatı değişti: eğri üzerinde yukarı hareket." },
            { metin: "Öğrencilerin harçlığı aniden iki katına çıktı.", cevap: "sag", neden: "Gelir değişti, fiyat değil: eğri kayar." }
          ] },
        { tip: "tuzak", baslik: "Birinci sınıf tuzak", metin: "Sınavın en sevdiği çeldirici: fiyat düştü, talep arttı.", yanlis: "Tostun fiyatı düşerse talep artar ve eğri sağa kayar.", dogru: "*Demand* aynı kalır, eğri kıpırdamaz; artan şey ==*quantity demanded*==. Ürünün kendi fiyatı eğriyi kaydırmaz, sadece eğri üzerinde gezdirir." },
        { tip: "tuzak", baslik: "İki kelime, iki şey", metin: "*Demand* ve *quantity demanded* aynı değildir: soruda hangisi yazıyorsa ona göre cevapla.", yanlis: "\"Demand\" ve \"quantity demanded\" aynı anlama gelir.", dogru: "*Demand* = bütün tablo ya da eğri; *quantity demanded* = eğri üzerinde tek bir nokta." },
        { tip: "tuzak", baslik: "Eksenleri ters çevirme", metin: "Fiyat ve miktarın eksenleri sabittir.", yanlis: "Miktar dikey, fiyat yatay eksende gösterilir.", dogru: "Fiyat **dikey**, miktar **yatay** eksendedir. Eğri soldan sağa aşağı iner." }
      ]
    },
    {
      baslik: "Sınav sorusu: poğaçanın fiyatı arttı",
      bloklar: [
        { tip: "ornek", baslik: "Poğaça 20 TL'den 30 TL'ye", durum: "Kantinde poğaçanın fiyatı 20 liradan 30 liraya çıkıyor; başka hiçbir şey değişmiyor. Poğaça piyasasında ne olur? Şıklar: (A) Demand artar, eğri sağa kayar. (B) Demand azalır, eğri sola kayar. (C) Quantity demanded azalır, eğri üzerinde yukarı hareket. (D) Quantity demanded artar, eğri üzerinde aşağı hareket.",
          adimlar: ["Değişen tek şey ürünün kendi fiyatı.", "Kendi fiyatı değişince eğri kaymaz: A ve B elenir.", "Fiyat arttı: eğri üzerinde yukarı-sola hareket, talep edilen miktar azalır.", "D, yönü ters söylüyor: eleniyor."],
          sonuc: "==C: *quantity demanded* azalır, talep eğrisi üzerinde yukarı hareket edilir.== Eğri kaymaz." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Demand*: farklı fiyatlarda *willing and able* olunan miktarların tamamı (tablo ya da eğri). *Quantity demanded* ise tek bir fiyattaki tek miktardır.",
            "*Law of demand*: fiyat ve *quantity demanded* ters yönde hareket eder (*ceteris paribus*).",
            "Üç sebep: *substitution effect* (göreceli ucuz kalan mala kayış), *income effect* (alım gücü değişir), *diminishing marginal utility* (her ek birim daha az tatmin).",
            "*Demand schedule* grafiğe dökülünce aşağı eğimli *demand curve* olur; fiyat dikey, miktar yatay eksendedir.",
            "Ürünün kendi fiyatı değişirse eğri üzerinde hareket edilir: *change in quantity demanded*.",
            "Fiyat düşünce talep artmaz: *demand* aynı kalır, *quantity demanded* artar.",
            "Fiyat dışı bir etken (gelir, zevk, diğer fiyatlar…) eğrinin kendisini kaydırır; ayrıntısı sonraki bölümde.",
            "Kantin verisi: 90 TL → 10, 70 → 30, 50 → 50, 30 → 70, 10 → 90 tost; her 20 TL düşüşte 20 tost fazla."
          ] }
      ]
    }
  ]
};
