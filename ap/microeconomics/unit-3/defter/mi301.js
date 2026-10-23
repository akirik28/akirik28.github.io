/* Kitpath not defteri · mi301 · 3.1 Üretim Fonksiyonu
   Kaynak: AP Micro CED, Topic 3.1 (PRD-1.A.1–3). Blok türleri: /ap/_kit/defter.js başı.
   Kantin verisi: 1 fırın, işçi sayısı L. TP = 0, 10, 28, 54, 76, 90, 96, 91.
   MP = 10, 18, 26, 22, 14, 6, −5.  AP = 10, 14, 18, 19, 18, 16, 13. */
window.DEFTER = {
  slug: "mi301",
  amac: "Bu konu bir firmanın işçi ve makine gibi girdileri nasıl çıktıya çevirdiğini anlatıyor. Kısa dönemde işçi ekledikçe toplam, marjinal ve ortalama ürünün nasıl değiştiğini ve *diminishing marginal returns* kuralının neden işlediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Üretim fonksiyonu: girdiden çıktıya",
      kisa: "Üretim fonksiyonu, kullanılan girdiyle elde edilen çıktıyı birbirine bağlar.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Girdiler", alt: "işçi, makine, un, peynir" }, "→",
            { t: "*Production function*", alt: "hangi girdiyle ne kadar çıktı" }, "→",
            { t: "Çıktı", alt: "kantinde günlük tost" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Production function", tr: "üretim fonksiyonu", tanim: "Girdi miktarlarıyla üretilebilecek en fazla çıktı arasındaki ilişki. Tablo, grafik ya da formülle gösterilir.", ornek: "1 fırın ve 3 işçiyle günde 54 tost." },
            { ikon: "🔒", terim: "Short run", tr: "kısa dönem", tanim: "En az bir girdinin (ör. fırın, bina) sabit kaldığı dönem. Firma yalnızca değişken girdiyi ayarlayabilir.", ornek: "Kantin fırını değiştiremez; sadece işçi sayısını değiştirir." },
            { ikon: "🔓", terim: "Long run", tr: "uzun dönem", tanim: "Bütün girdilerin değiştirilebildiği dönem. Firma tesisi büyütüp küçültebilir.", ornek: "Kantin ikinci bir fırın alır, salonu genişletir." }
          ] },
        { tip: "ikili", sol: { ikon: "🔒", baslik: "*Short run*", maddeler: ["En az bir girdi sabit", "Yalnızca değişken girdi ayarlanır"] },
          sag: { ikon: "🔓", baslik: "*Long run*", maddeler: ["Bütün girdiler değişken", "Tesis büyüklüğü de seçilir"] },
          oyun: [
            { metin: "Kantinci aynı fırınla çalışırken yalnızca işçi sayısını artırıyor.", cevap: "sol", neden: "Fırın sabit, işçi değişken: *short run*." },
            { metin: "Kantinci yeni bir salon kiralayıp daha büyük bir fırın alıyor.", cevap: "sag", neden: "Tesis boyutu da değişiyor: *long run*." },
            { metin: "Bir atölye, mevcut makineleriyle ikinci vardiya çalıştırıyor.", cevap: "sol", neden: "Makine sayısı sabit: *short run*." },
            { metin: "Bir şirket fabrikasını kapatıp başka şehirde yenisini kuruyor.", cevap: "sag", neden: "Her girdi değiştirilebiliyor: *long run*." }
          ] },
        { tip: "tuzak", metin: "Kısa dönem ve uzun dönem takvim süresi değildir. Ayırıcı olan, girdilerin ne kadar esnek olduğudur.", yanlis: "Kısa dönem 1 yıldan kısa süredir.", dogru: "Bir girdi bile sabitse *short run*; hepsi değişebiliyorsa *long run*. Süre sektörden sektöre değişir." }
      ]
    },
    {
      baslik: "Üç ölçü: *TP*, *MP*, *AP*",
      kisa: "MP son işçinin eklediği çıktıdır; AP işçi başına ortalama çıktıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📦", terim: "Total product (TP)", tr: "toplam ürün", tanim: "Belirli sayıda işçiyle üretilen toplam çıktı.", ornek: "3 işçi, 54 tost." },
            { ikon: "➕", terim: "Marginal product (MP)", tr: "marjinal ürün", tanim: "Bir işçi daha eklenince toplam ürünün artışı. ==Sıradaki işçinin katkısı.==", ornek: "3. işçi gelince TP 28'den 54'e çıkıyor: MP = 26." },
            { ikon: "⚖️", terim: "Average product (AP)", tr: "ortalama ürün", tanim: "İşçi başına düşen çıktı: TP'yi işçi sayısına böl.", ornek: "54 tost ÷ 3 işçi = 18." }
          ] },
        { tip: "formul", parcalar: [
            { t: "MP", alt: "son işçinin katkısı" }, "=", { t: "ΔTP ÷ ΔL", alt: "çıktı değişimi ÷ işçi değişimi" },
            "·",
            { t: "AP", alt: "işçi başına" }, "=", { t: "TP ÷ L", alt: "toplam ürün ÷ işçi sayısı" }
          ], aciklama: "Δ \"değişim\" demektir. İşçiler birer birer eklendiğinde ΔL = 1 olur ve MP, TP'deki farka eşittir." },
        { tip: "tablo", baslik: "Kantin: 1 fırın, değişen işçi sayısı", head: ["İşçi (L)", "TP (tost)", "MP", "AP"], rows: [
            ["0", "0", "—", "—"],
            ["1", "10", "10", "10"],
            ["2", "28", "18", "14"],
            ["3", "54", "26", "18"],
            ["4", "76", "22", "19"],
            ["5", "90", "14", "18"],
            ["6", "96", "6", "16"],
            ["7", "91", "−5", "13"]
          ], vurgu: 3, not: "MP en yüksek 3. işçide (26). 4. işçiden itibaren azalıyor; 7. işçide negatif oluyor." },
        { tip: "ornek", baslik: "MP ve AP'yi tablodan hesapla", durum: "4. işçi gelince TP 54'ten 76'ya çıkıyor. 5. işçi gelince 90 oluyor. Bu iki işçi için MP ve AP kaç?",
          adimlar: [
            "MP₄ = (76 − 54) ÷ (4 − 3) = 22. AP₄ = 76 ÷ 4 = 19.",
            "MP₅ = (90 − 76) ÷ (5 − 4) = 14. AP₅ = 90 ÷ 5 = 18.",
            "5. işçinin MP'si (14), 4 işçideki AP'den (19) küçük; bu yüzden AP 19'dan 18'e düştü."
          ],
          sonuc: "MP₄ = 22, AP₄ = 19; MP₅ = 14, AP₅ = 18. MP, AP'nin altına inince AP de düşer." }
      ]
    },
    {
      baslik: "TP grafiği: önce dikleşir, sonra yataylaşır",
      kisa: "TP eğrisinin eğimi MP'dir; 3. işçiden sonra eğri yataylaşır.",
      bloklar: [
        { tip: "grafik", baslik: "Tek fırınlı kantinde toplam ürün", xlabel: "İşçi sayısı (L)", ylabel: "Toplam ürün (TP)", xmax: 8, ymax: 110,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }],
          yticks: [{ v: 25, label: "25" }, { v: 50, label: "50" }, { v: 75, label: "75" }, { v: 100, label: "100" }],
          ogeler: [
            { id: "tp", tip: "egri", renk: 0, noktalar: [[0, 0], [1, 10], [2, 28], [3, 54], [4, 76], [5, 90], [6, 96]], etiket: "TP" },
            { id: "p1", tip: "nokta", renk: 0, x: 1, y: 10, etiket: "10", gizli: true },
            { id: "p2", tip: "nokta", renk: 0, x: 2, y: 28, etiket: "28", gizli: true },
            { id: "p3", tip: "nokta", renk: 2, x: 3, y: 54, etiket: "54", kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", renk: 0, x: 4, y: 76, etiket: "76", gizli: true },
            { id: "p5", tip: "nokta", renk: 0, x: 5, y: 90, etiket: "90", gizli: true },
            { id: "p6", tip: "nokta", renk: 3, x: 6, y: 96, etiket: "96 (en çok)", kilavuz: true, gizli: true },
            { id: "p7", tip: "nokta", renk: 1, x: 7, y: 91, etiket: "91", gizli: true },
            { id: "ok7", tip: "ok", renk: 1, from: [6.15, 95.5], to: [6.85, 91.8], gizli: true }
          ],
          durumlar: [
            { metin: "Tek fırınlı kantinde işçi sayısı arttıkça toplam tost (TP) nasıl değişiyor?" },
            { metin: "İlk üç işçide TP giderek hızlanıyor (10, 28, 54). Eğim dikleşiyor: ==MP artıyor.==", goster: ["p1", "p2", "p3"] },
            { metin: "3. işçiden sonra TP artıyor ama yataylaşıyor (76, 90, 96). Eğim azalıyor: ==MP azalıyor.==", goster: ["p4", "p5", "p6"] },
            { metin: "7. işçi fırın başında yer bulamıyor; TP 96'dan 91'e düşüyor. ==MP negatif.==", goster: ["p7", "ok7"] }
          ] },
        { tip: "not", metin: "TP eğrisinin herhangi bir noktadaki eğimi o noktadaki MP'yi verir. Eğri en dik olduğu yerde MP en yüksektir (3. işçi), tepe noktasında eğim sıfırdır (MP = 0), tepeden sonra eğri inerse MP negatiftir." }
      ]
    },
    {
      baslik: "MP ve AP eğrileri: MP, AP'nin tepesini keser",
      kisa: "MP, AP'nin üstündeyse AP yükselir; altındaysa düşer; kesişim AP'nin tepesidir.",
      bloklar: [
        { tip: "grafik", baslik: "MP ve AP aynı grafikte", xlabel: "İşçi sayısı (L)", ylabel: "Tost / işçi", xmax: 8, ymax: 30,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 26, label: "26" }],
          ogeler: [
            { id: "mp", tip: "egri", renk: 3, noktalar: [[0.5, 10], [1.5, 18], [2.5, 26], [3.5, 22], [4.5, 14], [5.5, 6]], etiket: "MP" },
            { id: "ap", tip: "egri", renk: 0, noktalar: [[1, 10], [2, 14], [3, 18], [4, 19], [5, 18], [6, 16]], etiket: "AP", gizli: true },
            { id: "yu", tip: "yazi", x: 1.8, y: 28, metin: "MP > AP: AP yükselir", gizli: true },
            { id: "yd", tip: "yazi", x: 5.6, y: 24, metin: "MP < AP: AP düşer", gizli: true },
            { id: "kes", tip: "nokta", renk: 2, x: 3.95, y: 19, etiket: "MP = AP", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "==MP:== ilk üç işçide artar (10, 18, 26), sonra azalır (22, 14, 6). Eğri, işçi aralıklarının ortasına çizilir." },
            { metin: "==AP:== 10, 14, 18, 19 ile yükselir, sonra 18 ve 16 ile düşer. Ters U şeklindedir.", goster: ["ap"] },
            { metin: "AP yükselirken MP, AP'nin ==üstünde==. (3. işçi: MP 26 > önceki AP 14.)", goster: ["yu"] },
            { metin: "AP düşerken MP, AP'nin ==altında==. (5. işçi: MP 14 < önceki AP 19.)", goster: ["yd"] },
            { metin: "MP eğrisi AP'yi ==AP'nin en yüksek noktasında== keser. Artık MP'nin üstünde olduğu yerde AP yükselir, altına inince düşer.", goster: ["kes"] }
          ] },
        { tip: "ikili", sol: { ikon: "📈", baslik: "MP > AP", maddeler: ["Yeni işçi ortalamanın üstünde katkı yapar", "AP yükselir"] },
          sag: { ikon: "📉", baslik: "MP < AP", maddeler: ["Yeni işçi ortalamanın altında katkı yapar", "AP düşer"] },
          oyun: [
            { metin: "3. işçi: MP = 26, önceki AP = 14.", cevap: "sol", neden: "26 > 14: AP 14'ten 18'e çıktı." },
            { metin: "5. işçi: MP = 14, önceki AP = 19.", cevap: "sag", neden: "14 < 19: AP 19'dan 18'e düştü." },
            { metin: "2. işçi: MP = 18, önceki AP = 10.", cevap: "sol", neden: "18 > 10: AP 10'dan 14'e çıktı." },
            { metin: "6. işçi: MP = 6, önceki AP = 18.", cevap: "sag", neden: "6 < 18: AP 18'den 16'ya düştü." }
          ] },
        { tip: "not", metin: "Sınav ortalaması gibi düşün: ortalaman 70 iken yeni sınavdan 90 alırsan ortalama yükselir (MP > AP); 50 alırsan düşer (MP < AP). Yeni notun (MP) ortalamaya (AP) göre konumu, ortalamanın yönünü belirler." }
      ]
    },
    {
      baslik: "*Diminishing marginal returns*: neden azalıyor?",
      kisa: "Bir girdi sabitken eklenen her işçi, öncekinden daha az ek çıktı verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📉", terim: "Diminishing marginal returns", tr: "azalan marjinal getiri", tanim: "Başka girdiler sabitken bir girdiyi artırdıkça MP'nin azalmaya başlaması. Kısa dönemde ortaya çıkar.", ornek: "4. işçiden itibaren MP: 22, 14, 6." },
            { ikon: "➖", terim: "Negative marginal product", tr: "negatif marjinal ürün", tanim: "Eklenen işçi toplam çıktıyı düşürüyorsa MP < 0'dır; TP tepeden iner.", ornek: "7. işçi: TP 96'dan 91'e düşer, MP = −5." }
          ] },
        { tip: "adimlar", baslik: "Kantinde ne oluyor?", adimlar: [
            { baslik: "1–3. işçi", metin: "Fırın boş bekliyor; işçiler işi paylaşıyor ve uzmanlaşıyor. Her yeni işçi öncekinden fazla katkı yapar: MP artar." },
            { baslik: "4–6. işçi", metin: "Fırın artık dolu. Yeni işçi daha çok sıra bekler, alet paylaşır: MP pozitif ama azalır." },
            { baslik: "7. işçi", metin: "Mutfak o kadar kalabalık ki işçiler birbirinin işini bozar: MP negatif." }
          ] },
        { tip: "tuzak", metin: "Azalan marjinal getiri, toplam çıktının düştüğü anlamına gelmez. Ayrıca bu kural kısa dönem içindir; uzun dönemdeki ölçek getirisiyle (Konu 3.3) karıştırılmamalıdır.", yanlis: "MP azalıyorsa TP de azalıyordur.", dogru: "MP pozitif kaldığı sürece TP artmaya devam eder, sadece yavaşlar. TP yalnızca MP < 0 olunca düşer." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Production function*: girdiler ile çıktı arasındaki ilişki.",
            "*Short run*: en az bir girdi sabit. *Long run*: bütün girdiler değişken. Ayırıcı olan süre değil, esnekliktir.",
            "MP = ΔTP ÷ ΔL (son işçinin katkısı). AP = TP ÷ L (işçi başına çıktı).",
            "TP eğrisinin eğimi MP'dir: önce dikleşir, sonra yataylaşır, MP < 0 olursa iner.",
            "MP > AP ise AP yükselir; MP < AP ise AP düşer; MP, AP'yi AP'nin tepesinde keser.",
            "*Diminishing marginal returns*: sabit girdiye (fırın) eklenen değişken girdinin MP'si zamanla azalır.",
            "MP azalırken pozitifse TP hâlâ artar; TP ancak MP < 0 olunca düşer.",
            "Sıradaki konu: MP düştükçe ek bir birimin maliyeti (MC) yükselir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir bisiklet atölyesi tek montaj masasıyla çalışıyor. Aşağıdaki tabloya göre *diminishing marginal returns* hangi işçiyle başlar?",
      fig: { type: "table", head: ["İşçi", "TP (günlük bisiklet)"], rows: [[1, 8], [2, 20], [3, 30], [4, 36], [5, 38]], caption: "MP değerlerini kendin hesapla" },
      opts: ["1. işçi", "2. işçi", "3. işçi", "5. işçi"], a: 2,
      why: "MP değerleri 8, 12, 10, 6, 2. MP, 2. işçide en yüksek (12) ve 3. işçide ilk kez azalıyor (10). *Diminishing marginal returns* 3. işçiyle başlar. 2. işçi en çekici yanlış şıktır: MP orada en yüksektir ama hâlâ artmaktadır." },
    { q: "Bir pastanede 4 işçi çalışırken ortalama ürün (AP) 12 tepsidir. 5. işçi alınınca TP 48'den 55'e çıkıyor. AP'ye ne olur?",
      opts: ["AP artar, çünkü TP arttı", "AP azalır: 11 olur", "AP aynı kalır", "AP hesaplanamaz"], a: 1,
      why: "MP₅ = 55 − 48 = 7. MP, önceki AP'den (12) küçük olduğu için AP düşer: AP₅ = 55 ÷ 5 = 11. \"TP arttı, o halde AP de arttı\" en çekici hatadır; AP'nin yönünü TP değil, MP'nin AP'ye göre konumu belirler." },
    { q: "Aşağıdakilerden hangisi bir *short run* üretim kararıdır?",
      opts: ["Pastane ikinci bir şube açar.", "Pastane daha büyük bir fırın satın alır.", "Pastane başka bir şehre taşınır.", "Pastane aynı fırınla ikinci vardiya işçi çalıştırır."], a: 3,
      why: "Fırın sabit kalıp yalnızca işçi (değişken girdi) arttığı için bu *short run* kararıdır. Diğer üç şıkta tesis boyutu değişiyor; bu da *long run* kararıdır. En çekici yanlış şık \"daha büyük fırın\"dır; fırın sabit girdi olduğundan onu değiştirmek kısa dönemde mümkün değildir." },
    { q: "Bir terzi atölyesinde işçi sayısına göre günlük toplam ürün aşağıdaki gibidir. Tabloya göre hangisi doğrudur?",
      fig: { type: "table", head: ["İşçi", "TP"], rows: [[1, 6], [2, 16], [3, 24], [4, 28], [5, 28]], caption: "Günlük dikilen gömlek" },
      opts: ["5. işçinin MP'si 0'dır ve TP en yüksek düzeyine ulaşmıştır.", "5. işçinin MP'si negatiftir.", "2. işçiden sonra TP düşmeye başlar.", "AP en yüksek değerine 5. işçide ulaşır."], a: 0,
      why: "MP₅ = 28 − 28 = 0; TP 28 ile en yüksek düzeydedir. B yanlış: MP sıfırdır, negatif değil (negatif olsaydı TP düşerdi). C yanlış: 2. işçiden sonra TP artmayı sürdürür, sadece MP azalır. D yanlış: AP değerleri sırayla 6; 8; 8; 7 ve 5,6'dır; en yüksek AP 2. ve 3. işçidedir." },
    { q: "Kısa dönemde bir firmada MP azalmaya başlamıştır ama hâlâ pozitiftir. Toplam ürün (TP) için ne söylenebilir?",
      opts: ["TP hemen azalmaya başlar.", "TP artmaya devam eder, ancak artış yavaşlar.", "TP sabit kalır.", "TP negatif olur."], a: 1,
      why: "TP, MP'nin birikimidir. MP pozitif kaldığı sürece her yeni işçi TP'yi yükseltir; MP azaldığı için artış küçülür. TP'nin düşmesi için MP < 0 gerekir. \"MP azalıyor, TP de azalıyor\" bu konunun en yaygın tuzağıdır." }
  ]
};
