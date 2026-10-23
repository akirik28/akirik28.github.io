/* Kitpath not defteri · mc604 · 6.4 Politikalar ve Döviz Piyasası
   Kaynak: CED Topic 6.4 (MKT-5.E). Blok türleri: /ap/_kit/defter.js başı.
   TL piyasası: D (1,9)→(9,1), S (1,1)→(9,9), denge (5,5) = 0,05 $ (1 $ = 20 TL). Dolar piyasası: aynı çizim, 1 birim = 4 TL (5 → 20 TL, 4 → 16 TL).
   Kayma sonuçları: talep +2,5 sağa → (6,25; 6,25) = 0,0625 $ · talep 2 sola → (4;4) = 0,04 $ · arz 2 sola → (4;6) · arz 2 sağa → (6;4) · dolar arzı 2 sağa → (6;4) = 16 TL. */
window.DEFTER = {
  slug: "mc604",
  amac: "Bu konu döviz kurunu kaydıran olayları anlatıyor. Talep ve arzı hangi etkenlerin kaydırdığını, aynı olayın iki ülkenin döviz piyasasında neden ters sonuç verdiğini ve maliye ile para politikasının kuru nasıl etkilediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Döviz talebini ve arzını kaydıran etkenler",
      kisa: "TL talebi yabancıların Türkiye'ye ilgisiyle, TL arzı Türklerin yabancıya ilgisiyle kayar.",
      bloklar: [
        { tip: "tablo", baslik: "TL piyasasında olay → kayma → kur", head: ["Olay", "Eğri", "Yön", "TL"], rows: [
            ["Yabancılar Türk mal ve hizmetlerini daha çok ister (turist akını, moda)", "Talep (D)", "Sağa", "Değerlenir"],
            ["Yabancı yatırımcılar Türk varlıklarına daha çok ilgi duyar", "Talep (D)", "Sağa", "Değerlenir"],
            ["Yabancılar Türk malından uzaklaşır (ABD Türk çeliğine vergi koyar)", "Talep (D)", "Sola", "Değer kaybeder"],
            ["Türkler yabancı mal ve varlıkları daha çok ister", "Arz (S)", "Sağa", "Değer kaybeder"],
            ["Türkiye ithal mallara gümrük vergisi ya da kota koyar", "Arz (S)", "Sola", "Değerlenir"]
          ], not: "Kural: yabancıların Türkiye'ye ilgisi **talebi**, Türklerin yabancıya ilgisi **arzı** kaydırır." },
        { tip: "ikili", sol: { ikon: "🛬", baslik: "TL talebi kayar", maddeler: ["Kaynak: yabancıların Türk mal, hizmet ve varlıklarına ilgisi", "Artarsa sağa, azalırsa sola"] },
          sag: { ikon: "🛫", baslik: "TL arzı kayar", maddeler: ["Kaynak: Türklerin yabancı mal, hizmet ve varlıklarına ilgisi; ithalat vergisi ve kotalar", "Artarsa sağa, azalırsa sola"] },
          oyun: [
            { metin: "Almanya'da Türk dizileri çok sevildi; yayıncılar Türk yapımları satın alıyor.", cevap: "sol", neden: "Türk hizmetine ilgi arttı: TL talebi sağa kayar." },
            { metin: "Türk gençleri yurtdışı kaynaklı oyun aboneliklerine daha çok para harcıyor.", cevap: "sag", neden: "Yabancı hizmet alımı arttı: TL arzı sağa kayar." },
            { metin: "Türkiye ithal telefonlara kota koyuyor.", cevap: "sag", neden: "İthalat azalır, daha az TL satılır: TL arzı sola kayar." },
            { metin: "Yabancı yatırımcılar Türk tahvillerine ilgi kaybediyor.", cevap: "sol", neden: "Türk varlıklarına talep azaldı: TL talebi sola kayar." },
            { metin: "Türklerin yurtdışı tatil harcaması arttı.", cevap: "sag", neden: "Yabancı hizmet ithalatı arttı: TL arzı sağa kayar." }
          ] },
        { tip: "tuzak", metin: "Gümrük vergisini koyan ülke, kendi parasının **arzını** etkiler; çünkü kendi vatandaşları daha az ithal mal alır.", yanlis: "Türkiye ithalata gümrük vergisi koyarsa TL talebi artar, çünkü Türk malı cazip olur.", dogru: "Vergi ithalatı azaltır; Türkler daha az TL satar: TL arzı sola kayar ve TL değerlenir. ABD'nin Türk mallarına koyduğu vergi ise TL talebini azaltır." }
      ]
    },
    {
      baslik: "TL talebi kayınca TL'ye ne olur?",
      kisa: "TL talebi artarsa TL değerlenir; talebi azalırsa TL değer kaybeder.",
      bloklar: [
        { tip: "grafik", baslik: "TL piyasasında talep kayması", xlabel: "TL miktarı (milyar TL / gün)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
          yticks: [{ v: 4, label: "0,04" }, { v: 5, label: "0,05" }, { v: 6.25, label: "0,0625" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D₁" },
            { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S" },
            { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "D₁", gizli: true },
            { id: "D2", tip: "cizgi", renk: 3, from: [3, 9.5], to: [9.5, 3], etiket: "D₂", gizli: true },
            { id: "D3", tip: "cizgi", renk: 3, from: [0.5, 7.5], to: [7.5, 0.5], etiket: "D₃", gizli: true },
            { id: "okR", tip: "ok", renk: 3, from: [3.3, 7], to: [5.2, 7], gizli: true },
            { id: "okL", tip: "ok", renk: 3, from: [6.7, 3], to: [5.3, 3], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 6.25, y: 6.25, etiket: "E₂", kilavuz: true, gizli: true },
            { id: "E3", tip: "nokta", renk: 2, x: 4, y: 4, etiket: "E₃", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: denge E₁. TL'nin fiyatı 0,05 $, yani **1 $ = 20 TL**." },
            { metin: "Olay: ABD'li turistler Türkiye'yi keşfediyor. Türk hizmetlerine ilgi artınca ==TL talebi sağa== kayar (D₁ → D₂). Eski eğri kesikli kalır.", goster: ["Dk", "D2", "okR"], gizle: ["D"] },
            { metin: "Yeni denge E₂: TL'nin fiyatı 0,05 → **0,0625 $**. TL ==değerlendi== (*appreciation*); 1 $ artık 16 TL.", goster: ["E2"] },
            { metin: "Tersi: yabancılar Türk mallarından uzaklaşırsa ==TL talebi sola== kayar (D₃). Denge E₃: **0,04 $**, TL ==değer kaybeder== (*depreciation*); 1 $ = 25 TL.", goster: ["D3", "okL", "E3"], gizle: ["D2", "okR", "E2"] }
          ] },
        { tip: "ornek", baslik: "Kayma sonrası kuru dolara çevir", durum: "TL'nin fiyatı 0,05 $'dan 0,0625 $'a çıkıyor. 1 $ kaç TL'den kaç TL'ye düşer? TL yüzde kaç değerlenir?",
          adimlar: [
            "Önce: 1 ÷ 0,05 = **20 TL** (1 $ = 20 TL).",
            "Sonra: 1 ÷ 0,0625 = **16 TL** (1 $ = 16 TL).",
            "TL'nin dolar fiyatı: (0,0625 − 0,05) ÷ 0,05 = %25 arttı."
          ],
          sonuc: "1 $ 20 TL'den 16 TL'ye iner; TL, dolar karşısında %25 değerlenir." },
        { tip: "tuzak", metin: "Kurun kendisi değişince eğri kaymaz, eğri üzerinde hareket olur. Eğriyi kaydıran, kur dışındaki bir etkendir (ilgi, vergi, kota, faiz...).", yanlis: "TL'nin fiyatı yükselince TL talep eğrisi sola kayar.", dogru: "Kur eğri boyunca hareket ettirir; talep eğrisi ancak yabancıların Türkiye'ye olan ilgisi değişirse kayar." }
      ]
    },
    {
      baslik: "Aynı olay, iki ülkenin piyasasında ters etki",
      kisa: "Aynı olay bir parayı değerlendirirken ötekini değer kaybettirir.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı turist akını, bu kez dolar piyasasında", xlabel: "Dolar miktarı (milyar $ / gün)", ylabel: "Doların fiyatı (TL / $)", xmax: 10, ymax: 10,
          yticks: [{ v: 4, label: "16" }, { v: 5, label: "20" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
            { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S₁" },
            { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "S₁", gizli: true },
            { id: "S2", tip: "cizgi", renk: 3, from: [3, 1], to: [9, 7], etiket: "S₂", gizli: true },
            { id: "okS", tip: "ok", renk: 3, from: [3.3, 3], to: [4.7, 3], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 6, y: 4, etiket: "E₂", kilavuz: true, gizli: true },
            { id: "tt", tip: "yazi", x: 3.2, y: 9.3, metin: "TL ↑ ⇔ dolar ↓", gizli: true }
          ],
          durumlar: [
            { metin: "Dolar piyasası: dikey eksende 1 doların TL fiyatı. Başlangıç E₁: **1 $ = 20 TL**." },
            { metin: "Aynı olay: ABD'li turistler Türk hizmeti için TL almak ister ve bunun için dolar satar. ==Dolar arzı sağa== kayar (S₁ → S₂).", goster: ["Sk", "S2", "okS"], gizle: ["S"] },
            { metin: "Yeni denge E₂: doların fiyatı 20 → **16 TL**. Dolar ==değer kaybetti== (*depreciation*).", goster: ["E2"] },
            { metin: "Önceki grafikte TL değerlendi, burada dolar değer kaybetti: ==aynı olay, ters sonuç==. Eksendeki fiyat birbirinin tersi olan iki kurdur: 0,0625 $ = 1/16.", goster: ["tt"] }
          ] },
        { tip: "tablo", baslik: "Dört olay, iki piyasa", head: ["Olay", "TL piyasası", "Dolar piyasası", "TL", "Dolar"], rows: [
            ["ABD'liler Türk hizmetlerini daha çok ister", "D sağa", "S sağa", "Değerlenir", "Değer kaybeder"],
            ["Türkiye ABD mallarına vergi ya da kota koyar", "S sola", "D sola", "Değerlenir", "Değer kaybeder"],
            ["Türkler ABD mallarını daha çok ister", "S sağa", "D sağa", "Değer kaybeder", "Değerlenir"],
            ["ABD'liler Türk mallarından uzaklaşır", "D sola", "S sola", "Değer kaybeder", "Değerlenir"]
          ] },
        { tip: "tuzak", metin: "Bir paranın talebi, öteki paranın arzıdır. İki piyasa aynı işlemin iki yüzüdür; bu yüzden etkiler zıt çıkar.", yanlis: "TL talebi arttığında dolar talebi de artar ve iki para birlikte değerlenir.", dogru: "TL talebinin artması dolar arzının artması demektir: TL değerlenirken dolar değer kaybeder." }
      ]
    },
    {
      baslik: "Gümrük vergisi ve kota: arz kayar",
      kisa: "İthalata kota koyan ülkenin parasının arzı azalır ve para değerlenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧾", terim: "Tariff", tr: "gümrük vergisi", tanim: "İthal mala konan vergi. Mal pahalanır, ithalat azalır.", ornek: "Türkiye'nin ithal telefona ek vergi koyması." },
            { ikon: "🚧", terim: "Quota", tr: "kota", tanim: "İthal edilebilecek miktara konan üst sınır. İthalat doğrudan sınırlanır.", ornek: "Yılda en fazla 1 milyon ithal telefona izin verilmesi." }
          ] },
        { tip: "grafik", baslik: "TL piyasasında arz kayması", xlabel: "TL miktarı (milyar TL / gün)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
          yticks: [{ v: 4, label: "0,04" }, { v: 5, label: "0,05" }, { v: 6, label: "0,06" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D" },
            { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S₁" },
            { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "S₁", gizli: true },
            { id: "S2", tip: "cizgi", renk: 3, from: [0.5, 2.5], to: [7.5, 9.5], etiket: "S₂", gizli: true },
            { id: "S3", tip: "cizgi", renk: 3, from: [3, 1], to: [9, 7], etiket: "S₃", gizli: true },
            { id: "okL", tip: "ok", renk: 3, from: [6.7, 7], to: [5.3, 7], gizli: true },
            { id: "okR", tip: "ok", renk: 3, from: [3.3, 3], to: [4.7, 3], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 4, y: 6, etiket: "E₂", kilavuz: true, gizli: true },
            { id: "E3", tip: "nokta", renk: 2, x: 6, y: 4, etiket: "E₃", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: denge E₁, 1 TL = 0,05 $." },
            { metin: "Türkiye ithal telefonlara kota koyuyor. Türkler daha az yabancı mal alır, daha az TL satar: ==TL arzı sola== kayar (S₁ → S₂).", goster: ["Sk", "S2", "okL"], gizle: ["S"] },
            { metin: "Yeni denge E₂: TL'nin fiyatı 0,05 → **0,06 $**. Arz azaldı, TL ==değerlendi==; satılan TL miktarı azaldı.", goster: ["E2"] },
            { metin: "Tersi: Türkler ithal mala daha çok yönelirse ==TL arzı sağa== kayar (S₃). Denge E₃: **0,04 $**, TL ==değer kaybeder==.", goster: ["S3", "okR", "E3"], gizle: ["S2", "okL", "E2"] }
          ] },
        { tip: "ornek", baslik: "Olaydan yöne: ithal çeliğe kota", durum: "Türkiye ithal çeliğe kota koyuyor. TL piyasasında hangi eğri, hangi yöne kayar ve TL'ye ne olur?",
          adimlar: [
            "Kimin ilgisi değişti? Türklerin yabancı çeliği alma imkânı kısıldı: bu **arz** tarafıdır.",
            "Daha az ithalat, daha az yabancı para ihtiyacı, yani daha az TL satışı: **TL arzı sola** kayar.",
            "Arz azalınca TL'nin fiyatı yükselir: TL **değerlenir**."
          ],
          sonuc: "S sola, TL değerlenir. ABD Türk çeliğine kota koysaydı D sola kayar ve TL değer kaybederdi." }
      ]
    },
    {
      baslik: "Maliye politikası ve döviz kuru",
      kisa: "Maliye politikası AD'yi ve faizi, faiz de sermaye akımı yoluyla kuru etkiler.",
      bloklar: [
        { tip: "adimlar", baslik: "Genişletici maliye politikasının faiz kanalı", adimlar: [
            { baslik: "AD kayar", metin: "Devlet harcaması artar ya da vergi indirilir: *AD* sağa kayar; reel GSYH ve fiyat düzeyi yükselir." },
            { baslik: "Faiz yükselir", metin: "Bütçe açığı büyür, devlet ödünç fon piyasasında daha çok borçlanır: ödünç fon talebi artar, ==reel faiz yükselir==." },
            { baslik: "Sermaye girer", metin: "Yüksek faiz Türk varlıklarını yabancı için cazip yapar: ==TL talebi sağa== kayar." },
            { baslik: "Kur", metin: "TL **değerlenir** (*appreciation*)." }
          ] },
        { tip: "tablo", baslik: "Maliye politikası → faiz → kur", head: ["Politika", "AD", "Reel faiz", "TL talebi", "TL"], rows: [
            ["Genişletici maliye", "↑", "↑", "↑ (sermaye girişi)", "Değerlenir"],
            ["Daraltıcı maliye", "↓", "↓", "↓ (sermaye çıkışı)", "Değer kaybeder"]
          ] },
        { tip: "tuzak", metin: "Genişletici maliye gelirleri artırır; artan gelirle ithalat da yükselir ve TL arzı sağa kayar. Bu **gelir kanalı** faiz kanalına ters yönde çeker. AP'de soruda verilen mekanizma önemlidir; en sık kullanılanı faiz kanalıdır.", yanlis: "Genişletici maliye politikası kuru her zaman aynı yöne iter.", dogru: "Faiz kanalı parayı değerlendirir; gelir ve ithalat kanalı ise değer kaybettirir. Hangi kanal sorulduysa onu izle." }
      ]
    },
    {
      baslik: "Para politikası ve döviz kuru",
      kisa: "Faiz indirimi sermayeyi dışarı iter; TL talebi azalır, arzı artar, TL değer kaybeder.",
      bloklar: [
        { tip: "grafik", baslik: "Merkez Bankası faizi indirirse TL piyasasında ne olur?", xlabel: "TL miktarı (milyar TL / gün)", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
          yticks: [{ v: 3, label: "0,03" }, { v: 5, label: "0,05" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [1, 9], to: [9, 1], etiket: "D₁" },
            { id: "S", tip: "cizgi", renk: 1, from: [1, 1], to: [9, 9], etiket: "S₁" },
            { id: "Dk", tip: "cizgi", renk: 0, kesik: true, from: [1, 9], to: [9, 1], etiket: "D₁", gizli: true },
            { id: "Sk", tip: "cizgi", renk: 1, kesik: true, from: [1, 1], to: [9, 9], etiket: "S₁", gizli: true },
            { id: "D3", tip: "cizgi", renk: 3, from: [0.5, 7.5], to: [7.5, 0.5], etiket: "D₂", gizli: true },
            { id: "S3", tip: "cizgi", renk: 2, from: [3, 1], to: [9, 7], etiket: "S₂", gizli: true },
            { id: "okD", tip: "ok", renk: 3, from: [2.7, 7], to: [1.3, 7], gizli: true },
            { id: "okS", tip: "ok", renk: 2, from: [3.3, 3], to: [4.7, 3], gizli: true },
            { id: "E1", tip: "nokta", renk: 2, x: 5, y: 5, etiket: "E₁", kilavuz: true },
            { id: "E2", tip: "nokta", renk: 2, x: 5, y: 3, etiket: "E₂", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Merkez Bankası faizi indirmeden önce: denge E₁, TL = 0,05 $." },
            { metin: "Faiz iner. Türk varlıkları yabancı yatırımcı için cazibesini yitirir: ==TL talebi sola== kayar (D₁ → D₂).", goster: ["Dk", "D3", "okD"], gizle: ["D"] },
            { metin: "Türkler artık yurtdışı varlıklarda daha yüksek getiri bulur; TL satıp yabancı varlık alır: ==TL arzı sağa== kayar (S₁ → S₂).", goster: ["Sk", "S3", "okS"], gizle: ["S"] },
            { metin: "Yeni denge E₂: TL'nin fiyatı 0,05 → **0,03 $**, TL ==değer kaybeder==. Bu çizimde miktar aynı kaldı; kayma şiddetine göre artar ya da azalır. Kesin olan yalnızca kurdur.", goster: ["E2"] }
          ] },
        { tip: "tablo", baslik: "Para politikası → faiz → kur", head: ["Politika", "Faiz", "TL talebi (D)", "TL arzı (S)", "TL"], rows: [
            ["Genişletici para (faiz indirimi)", "↓", "Sola", "Sağa", "Değer kaybeder"],
            ["Daraltıcı para (faiz artırımı)", "↑", "Sağa", "Sola", "Değerlenir"]
          ], not: "Kısa vadede fiyatlar yapışkan olduğundan nominal faizdeki değişim reel faizi de değiştirir (6.6'da ayrıntısı var)." },
        { tip: "tuzak", metin: "\"Faiz indirimi ekonomiyi canlandırır, para güçlenir\" düşüncesi kısa yoldan sonuca götürür ama sermaye akımını atlar.", yanlis: "Merkez Bankası faizi indirince TL değerlenir.", dogru: "Faiz inince yabancı sermaye çıkar, TL talebi azalır ve TL arzı artar: ==TL değer kaybeder==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "TL talebi yabancıların Türk mal, hizmet ve varlıklarına ilgisiyle, TL arzı Türklerin yabancı mal, hizmet ve varlıklarına ilgisiyle kayar.",
            "TL talebi artarsa TL değerlenir; azalırsa değer kaybeder. TL arzı artarsa TL değer kaybeder; azalırsa değerlenir.",
            "Gümrük vergisi ve kota, onu koyan ülkenin parasının arzını azaltır (para değerlenir); başkasının koyduğu vergi ise talebini azaltır.",
            "Kurun kendisi değişince eğri üzerinde hareket olur; kayma ancak kur dışı bir etkenle olur.",
            "Aynı olay iki piyasada zıt çıkar: TL talebi artarsa dolar arzı artar, TL değerlenir, dolar değer kaybeder.",
            "Genişletici maliye → reel faiz ↑ → sermaye girişi → para değerlenir (faiz kanalı); gelir ve ithalat kanalı ters yöne çeker.",
            "Genişletici para → faiz ↓ → sermaye çıkışı → para değer kaybeder; daraltıcı para tersini yapar."
          ] }
      ]
    }
  ],
  sorular: [
    {
      q: "Aşağıdakilerden hangisi TL'ye olan talebi sağa kaydırır ve diğer her şey sabitken TL'yi değerlendirir?",
      opts: [
        "Alman turistlerin Türkiye'ye ilgisinin artması",
        "Türklerin yurtdışı tatil harcamasının artması",
        "Yabancı yatırımcıların Türk tahvillerini satması",
        "Türkiye'nin ithalata uyguladığı kotayı kaldırması"
      ],
      a: 0,
      why: "Türk hizmetlerine ilgi artınca TL talebi sağa kayar ve TL değerlenir. İkinci ve dördüncü şık TL arzını sağa kaydırır (TL değer kaybeder); üçüncü şık TL talebini sola kaydırır."
    },
    {
      q: "ABD, Türk mallarına yüksek gümrük vergisi koyuyor. Diğer her şey sabitken döviz piyasalarında ne olur?",
      opts: [
        "TL arzı sola kayar; TL değerlenir.",
        "TL talebi sağa kayar; TL değerlenir, dolar değer kaybeder.",
        "TL talebi sola kayar; TL değer kaybeder, dolar değerlenir.",
        "TL talebi sola kayar; TL değer kaybeder, dolar da değer kaybeder."
      ],
      a: 2,
      why: "ABD'liler daha az Türk malı alır, dolayısıyla daha az TL ister: TL talebi sola kayar ve TL değer kaybeder. Aynı anda daha az dolar arz edildiği için dolar değerlenir. Son şık iki paranın birden değer kaybettiğini söyler; kur karşılıklı bir fiyat olduğu için bu mümkün değildir."
    },
    {
      q: "Şekilde TL talebi D₁'den D₂'ye kaymıştır. Bu kayma aşağıdakilerden hangisiyle açıklanabilir?",
      fig: { type: "graph", xlabel: "TL miktarı", ylabel: "TL'nin fiyatı ($ / TL)", xmax: 10, ymax: 10,
        lines: [{ from: [1, 9], to: [9, 1], label: "D₁", dash: true }, { from: [3, 9.5], to: [9.5, 3], label: "D₂" }, { from: [1, 1], to: [9, 9], label: "S" }],
        points: [{ q: 5, p: 5, label: "E₁", guides: true }, { q: 6.25, p: 6.25, label: "E₂", guides: true }] },
      opts: [
        "Türkiye Merkez Bankası'nın faizi düşürmesi",
        "Yabancı yatırımcıların Türk varlıklarına ilgisinin artması",
        "Türkiye'nin ithal mallara vergi koyması",
        "Türk turistlerin yurtdışına daha çok gitmesi"
      ],
      a: 1,
      why: "Talebi sağa kaydıran, yabancıların Türk mal, hizmet ya da varlıklarına ilgisidir. Gümrük vergisi de TL'yi değerlendirir ama TL arzını sola kaydırır, talebi değil. Faiz indirimi ve yurtdışı tatil, TL'yi değer kaybettirir."
    },
    {
      q: "Hükümet vergileri indirir ve açığı borçlanarak kapatır. Diğer her şey sabitken faiz kanalı yoluyla döviz piyasasında ne olur?",
      opts: [
        "Reel faiz düşer, sermaye çıkar ve TL değer kaybeder.",
        "Reel faiz düşer ve TL değerlenir.",
        "Reel faiz yükselir, sermaye çıkar ve TL değer kaybeder.",
        "Reel faiz yükselir, yabancı sermaye girer, TL talebi artar ve TL değerlenir."
      ],
      a: 3,
      why: "Devletin borçlanması ödünç fon talebini artırır ve reel faizi yükseltir. Yüksek faiz yabancı sermayeyi çeker; TL talebi sağa kayar ve TL değerlenir. Üçüncü şık faizin yönünü doğru söyleyip sermaye akımının yönünü ters yazar."
    },
    {
      q: "Türkiye Merkez Bankası kısa vadeli faizi indiriyor. Diğer her şey sabitken TL piyasasında hangisi doğrudur?",
      opts: [
        "TL talebi sağa, TL arzı sola kayar; TL değerlenir.",
        "TL talebi sola, TL arzı sola kayar; TL değerlenir.",
        "TL talebi sola, TL arzı sağa kayar; TL değer kaybeder.",
        "TL talebi sola, TL arzı sağa kayar; TL değerlenir."
      ],
      a: 2,
      why: "Faiz düşünce yabancılar Türk varlıklarını daha az ister (TL talebi sola), Türkler ise yurtdışı varlıklara yönelir (TL arzı sağa). İki kayma da TL'yi değer kaybettirir. Dördüncü şık kaymaları doğru söyler ama sonucu ters yazar."
    }
  ]
};
