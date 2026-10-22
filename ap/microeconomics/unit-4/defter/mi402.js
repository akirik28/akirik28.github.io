/* Kitora not defteri · mi402 · 4.2 Tekel
   Kaynak: CED Topic 4.2 (PRD-3.B.5–7). Blok türleri: /ap/_kit/defter.js başı.
   Sayılar (sinema salonu): talep P = 100 − 0,1Q; MR = 100 − 0,2Q; MC = 20 TL; sabit maliyet 12.000 TL → ATC = 20 + 12.000/Q.
   Grafikte 1 birim = 10 TL ve 100 bilet (talep (0,10)–(10,0), MR (0,10)–(5,0), MC = 2, ATC = 2 + 12/Q).
   Tekel: Q = 400, P = 60, ATC = 50, kâr 4.000, CS 8.000, DWL 8.000. P = MC: Q = 800 (ATC 35, zarar 12.000). P = ATC: Q = 600, P = 40, DWL 2.000. */
window.DEFTER = {
  slug: "mi402",
  amac: "Bu konu tekeli (*monopoly*) anlatıyor: tek satıcı, giriş engelleri, MR = MC kuralıyla bulunan miktar ve talepten okunan fiyat. Kâr, tüketici rantı ve *deadweight loss* alanlarını hesaplayacak, doğal tekeli ve fiyat düzenlemesini (P = MC, P = ATC) öğreneceksin.",
  bolumler: [
    {
      baslik: "Tekel nedir, neden var olur?",
      kisa: "Tekel, giriş engelleri yüzünden tek başına kalan ve fiyatı belirleyen firmadır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "👑", terim: "Monopoly", tr: "tekel", tanim: "Piyasada tek satıcının olduğu, ürününün yakın ikamesi bulunmayan yapı. Tek kalabilmesinin nedeni ==giriş engelleridir==.", ornek: "İlçedeki tek sinema salonu." },
            { ikon: "🚧", terim: "Barriers to entry", tr: "giriş engelleri", tanim: "Yüksek sabit maliyet, yasal engeller ve anahtar kaynağın sahipliği. Tekel bu engeller sayesinde var olur.", ornek: "Patentli bir ilacı yalnızca tek firma satabilir." }
          ] },
        { tip: "ikili", sol: { ikon: "🧺", baslik: "Tam rekabetli firma", maddeler: ["Talebi yataydır", "MR = P", "Fiyatı veri alır"] },
          sag: { ikon: "👑", baslik: "Tekel", maddeler: ["Firmanın talebi = piyasa talebi, aşağı eğimli", "MR < P", "MR = MC'de durur, P > MC"] },
          oyun: [
            { metin: "Firmanın karşılaştığı talep, piyasanın bütün talebidir.", cevap: "sag", neden: "Tek satıcı var: firma talebi = piyasa talebi." },
            { metin: "Fiyatı değiştiremez; verilen fiyattan istediği kadar satar.", cevap: "sol", neden: "*Price taker*: talebi yataydır." },
            { metin: "Ek bir birim satmak için fiyatı bütün birimler için düşürmesi gerekir.", cevap: "sag", neden: "Aşağı eğimli talep: MR fiyatın altında kalır." },
            { metin: "Kâr-maksimizasyonu noktasında P = MC olur.", cevap: "sol", neden: "Rekabette MR = P olduğundan MR = MC aynı zamanda P = MC demektir. Tekelde P > MC." }
          ] }
      ]
    },
    {
      baslik: "Neden MR < P? Tekelin gelir eğrisi",
      kisa: "Tek fiyat uygulayan tekelde ek birimin geliri fiyattan küçüktür.",
      bloklar: [
        { tip: "tablo", baslik: "Salonun talep tablosu (talep P = 100 − 0,1Q)", head: ["Miktar (bilet)", "Fiyat (TL)", "Toplam gelir TR (TL)", "MR (TL/bilet)"], rows: [
            ["100", "90", "9.000", "90"],
            ["200", "80", "16.000", "70"],
            ["300", "70", "21.000", "50"],
            ["400", "60", "24.000", "30"],
            ["500", "50", "25.000", "10"],
            ["600", "40", "24.000", "−10"]
          ], vurgu: 3, not: "MR, her yüz biletlik artışta TR'nin değişimini yüze bölerek bulunur. Fiyat 10 TL düştükçe MR 20 TL düşer." },
        { tip: "not", metin: "Dördüncü yüz bilet 60 TL'den satılır: +6.000 TL. Ama önceki 300 bilet de 70 yerine 60 TL'den satılacağı için −3.000 TL. Net ek gelir 3.000 TL, yani bilet başına **30 TL**; fiyat olan 60 TL'nin çok altında." },
        { tip: "tuzak", metin: "Tam rekabette ek birimin geliri fiyata eşittir; bu kuralı tekele taşımak sık yapılan bir hatadır.", yanlis: "Tekelde de MR = P'dir.", dogru: "Tekelde MR < P. Doğrusal talepte MR eğrisi aynı fiyat noktasından başlar, talebin ==iki kat eğimiyle== iner ve miktar eksenine talebin yarı yolunda ulaşır." }
      ]
    },
    {
      baslik: "Kâr maksimizasyonu: MR = MC",
      kisa: "Miktarı MR = MC belirler; fiyat ise talep eğrisinden okunur.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "MR = MC", alt: "miktarı (Q) bul" }, "→",
            { t: "Talepten P", alt: "fiyatı oku" }, "→",
            { t: "(P − ATC) × Q", alt: "kârı hesapla" }
          ] },
        { tip: "grafik", baslik: "Tekelin kâr-maksimizasyonu: Q, P, kâr, CS ve DWL", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 4, label: "400" }, { v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 5, label: "50" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "cs", tip: "alan", renk: 0, noktalar: [[0, 10], [0, 6], [4, 6]], gizli: true },
            { id: "kar", tip: "alan", renk: 1, noktalar: [[0, 5], [4, 5], [4, 6], [0, 6]], gizli: true },
            { id: "dwl", tip: "alan", renk: 2, noktalar: [[4, 6], [4, 2], [8, 2]], gizli: true },
            { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D" },
            { id: "MR", tip: "cizgi", renk: 3, from: [0, 10], to: [4.8, 0.4], etiket: "MR" },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 2], to: [9.2, 2], etiket: "MC", gizli: true },
            { id: "ATC", tip: "egri", renk: 1, noktalar: [[1.5, 10], [2, 8], [2.5, 6.8], [3, 6], [3.5, 5.43], [4, 5], [5, 4.4], [6, 4], [7, 3.71], [8, 3.5], [9, 3.33]], etiket: "ATC", gizli: true },
            { id: "E1", tip: "nokta", renk: 3, x: 4, y: 2, kilavuz: true, gizli: true },
            { id: "B", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "P = 60", kilavuz: true, gizli: true },
            { id: "C", tip: "nokta", renk: 1, x: 4, y: 5, kilavuz: true, gizli: true },
            { id: "E2", tip: "nokta", renk: 2, x: 8, y: 2, kilavuz: true, gizli: true },
            { id: "karT", tip: "yazi", x: 1, y: 5.3, metin: "Kâr", gizli: true },
            { id: "dwlT", tip: "yazi", x: 5, y: 3, metin: "DWL", gizli: true },
            { id: "csT", tip: "yazi", x: 0.75, y: 7, metin: "CS", gizli: true }
          ],
          durumlar: [
            { metin: "Talep (D) aşağı eğimli. MR aynı yerden başlar ama talebin ==altından== geçer: Q eksenine yarı yolda iner (iki kat eğim)." },
            { metin: "Maliyet tarafı: MC = 20 TL sabit; ATC düşüyor, çünkü 12.000 TL'lik sabit maliyet çok bilete bölünüyor.", goster: ["MC", "ATC"] },
            { metin: "Karar kuralı: ek birimin geliri maliyetinden büyük olduğu sürece üret. ==MR = MC== noktası **400 bilet** verir.", goster: ["E1"] },
            { metin: "Fiyat, MC'den değil ==talep eğrisinden== okunur: **60 TL**. Fiyat (60) MC'nin (20) çok üstünde.", goster: ["B"] },
            { metin: "400 biletteki ATC **50 TL**. Kâr = (60 − 50) × 400 = ==4.000 TL==.", goster: ["C", "kar", "karT"] },
            { metin: "Verimli miktar P = MC'de, 800 bilet. Tekel 400'de durduğu için kaybolan rant ==DWL== = ½ × 400 × 40 = **8.000 TL**.", goster: ["E2", "dwl", "dwlT"] },
            { metin: "Tüketici rantı (CS): talep ile fiyat arasındaki üçgen = ½ × 400 × 40 = **8.000 TL**.", goster: ["cs", "csT"] }
          ] },
        { tip: "tuzak", baslik: "Fiyatı MC'den okuma", metin: "MR = MC'yi bulduktan sonra dikey çizgiyi MC'de bırakmak çok yapılan bir hatadır.", yanlis: "Q'yu bulunca P = MC = 20 TL olur.", dogru: "Q'yu MR = MC'de bul, sonra ==yukarı talep eğrisine== çık: P = 60 TL." }
      ]
    },
    {
      baslik: "Çözümlü örnek: kâr, CS, PS ve DWL",
      kisa: "Önce Q'yu, sonra P'yi, sonra alanları hesapla.",
      bloklar: [
        { tip: "ornek", baslik: "Sinema salonunun hesabı", durum: "Salonun talebi P = 100 − 0,1Q, MC = 20 TL (sabit), sabit maliyeti 12.000 TL. Kâr-maksimizasyonu miktarını, fiyatı, kârı, *CS*'yi, üretici rantını (*PS*) ve *DWL*'yi bul.",
          adimlar: [
            "TR = P × Q = 100Q − 0,1Q². MR = 100 − 0,2Q (talebin iki kat eğimi).",
            "MR = MC: 100 − 0,2Q = 20 → Q = 400 bilet.",
            "Fiyatı talepten oku: P = 100 − 0,1 × 400 = 60 TL.",
            "TC = 12.000 + 20 × 400 = 20.000 TL → ATC = 50 TL. Kâr = (60 − 50) × 400 = 4.000 TL (TR 24.000 − TC 20.000).",
            "*PS* = (P − MC) × Q = (60 − 20) × 400 = 16.000 TL; bu, kâr (4.000) ile sabit maliyetin (12.000) toplamıdır.",
            "*CS* = ½ × 400 × (100 − 60) = 8.000 TL.",
            "Verimli miktar: P = MC → 100 − 0,1Q = 20 → Q = 800. *DWL* = ½ × (800 − 400) × (60 − 20) = 8.000 TL."
          ],
          sonuc: "Q = 400, P = 60 TL, kâr = 4.000 TL, CS = 8.000 TL, PS = 16.000 TL, DWL = 8.000 TL. Rekabette Q = 800 ve P = 20 TL olurdu." },
        { tip: "not", metin: "Tekel her zaman kâr etmez: talep zayıfsa P < ATC olur ve tekel zarar eder. P, ortalama değişken maliyetin (*AVC*) üstündeyse kısa dönemde üretmeyi sürdürür, altındaysa kapanır. Tekelin bir **arz eğrisi** de yoktur: miktarı MR = MC ile, fiyatı talepten belirler." }
      ]
    },
    {
      baslik: "Doğal tekel",
      kisa: "Ölçek ekonomileri talebin tamamında sürerse tek firma en ucuz üretir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏗️", terim: "Economies of scale", tr: "ölçek ekonomileri", tanim: "Üretim arttıkça uzun dönem ortalama maliyetin (*LRATC*) düşmesi.", ornek: "Büyük bir şebeke, sabit maliyeti çok sayıda aboneye böler." },
            { ikon: "💧", terim: "Natural monopoly", tr: "doğal tekel", tanim: "Uzun dönem ölçek ekonomilerinin talebin ==tamamı boyunca== sürdüğü piyasa. Tek firma talebi iki firmadan daha ucuza karşılar.", ornek: "Şehirde su borusu şebekesi: ikinci bir şebeke boşa harcama olur." }
          ] },
        { tip: "grafik", baslik: "Doğal tekel: tek firma mı, iki firma mı?", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 3, label: "300" }, { v: 6, label: "600" }], yticks: [{ v: 4, label: "40" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D" },
            { id: "ATC", tip: "egri", renk: 1, noktalar: [[1.5, 10], [2, 8], [2.5, 6.8], [3, 6], [3.5, 5.43], [4, 5], [5, 4.4], [6, 4], [7, 3.71], [8, 3.5], [9, 3.33]], etiket: "ATC" },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 2], to: [9.2, 2], etiket: "MC", gizli: true },
            { id: "N1", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "ATC = 40", kilavuz: true, gizli: true },
            { id: "N2", tip: "nokta", renk: 2, x: 3, y: 6, kilavuz: true, gizli: true },
            { id: "N2T", tip: "yazi", x: 1.5, y: 4.8, metin: "ATC = 60", gizli: true }
          ],
          durumlar: [
            { metin: "*LRATC* talep eğrisinin ==tamamı boyunca== düşüyor: talep bitmeden ölçek ekonomileri bitmiyor." },
            { metin: "Tek firma 600 bilet üretirse ortalama maliyet **40 TL**.", goster: ["N1"] },
            { metin: "İki firma talebi paylaşıp 300'er bilet üretirse ortalama maliyet **60 TL**'ye çıkar. ==Tek firma çok daha ucuza== üretir; ikinci firma israftır.", goster: ["N2", "N2T"] },
            { metin: "MC (20 TL) sabit ve ATC'nin altında: ATC düşerken MC her zaman ATC'nin altındadır.", goster: ["MC"] }
          ] }
      ]
    },
    {
      baslik: "Düzenleme: P = MC mi, P = ATC mi?",
      kisa: "P = MC verimlidir ama zarar yazdırır; P = ATC zararı önler.",
      bloklar: [
        { tip: "grafik", baslik: "Doğal tekelin düzenlenmesi", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
          xticks: [{ v: 4, label: "400" }, { v: 6, label: "600" }, { v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }],
          ogeler: [
            { id: "dwl0", tip: "alan", renk: 2, noktalar: [[4, 6], [4, 2], [8, 2]] },
            { id: "loss", tip: "alan", renk: 2, noktalar: [[0, 2], [8, 2], [8, 3.5], [0, 3.5]], gizli: true },
            { id: "dwlF", tip: "alan", renk: 2, noktalar: [[6, 4], [6, 2], [8, 2]], gizli: true },
            { id: "D", tip: "cizgi", renk: 0, from: [0, 10], to: [9.4, 0.6], etiket: "D" },
            { id: "MR", tip: "cizgi", renk: 3, from: [0, 10], to: [4.8, 0.4], etiket: "MR" },
            { id: "MC", tip: "cizgi", renk: 2, from: [0, 2], to: [9.2, 2], etiket: "MC" },
            { id: "ATC", tip: "egri", renk: 1, noktalar: [[1.5, 10], [2, 8], [2.5, 6.8], [3, 6], [3.5, 5.43], [4, 5], [5, 4.4], [6, 4], [7, 3.71], [8, 3.5], [9, 3.33]], etiket: "ATC" },
            { id: "M", tip: "nokta", renk: 0, x: 4, y: 6, etiket: "Tekel", kilavuz: true },
            { id: "S", tip: "nokta", renk: 2, x: 8, y: 2, kilavuz: true, gizli: true },
            { id: "F", tip: "nokta", renk: 1, x: 6, y: 4, etiket: "P = ATC", kilavuz: true, gizli: true },
            { id: "dwl0T", tip: "yazi", x: 5.2, y: 3, metin: "DWL" },
            { id: "lossT", tip: "yazi", x: 3.5, y: 2.6, metin: "Zarar 12.000", gizli: true }
          ],
          durumlar: [
            { metin: "Düzenlemesiz tekel MR = MC'de durur: **400 bilet, 60 TL**. Kâr 4.000 TL ama ==DWL = 8.000 TL==." },
            { metin: "Düzenleyici ==P = MC== koyarsa (*socially optimal price*): **800 bilet, 20 TL**, DWL = 0. Ama 800'de ATC = 35 TL > 20 TL: zarar = 15 × 800 = ==12.000 TL== (tam sabit maliyet). Firma ayakta kalamaz.", gizle: ["M", "dwl0", "dwl0T", "MR"], goster: ["S", "loss", "lossT"] },
            { metin: "==P = ATC== koyarsa (*fair-return price*): D ile ATC'nin kesiştiği yerde **600 bilet, 40 TL**. Ekonomik kâr 0, firma ayakta. Kalan DWL = ½ × 200 × 20 = **2.000 TL**.", gizle: ["S", "loss", "lossT"], goster: ["F", "dwlF"] },
            { metin: "Üçüncü yol: P = MC fiyatını koy, 12.000 TL'lik zararı devlet ==sübvansiyonla== karşılasın. Verimli olur (DWL = 0) ama sübvansiyon vergiyle finanse edilir.", gizle: ["F", "dwlF"], goster: ["S", "loss", "lossT"] }
          ] },
        { tip: "tablo", baslik: "Üç politika yan yana", head: ["Politika", "Miktar (bilet)", "Fiyat (TL)", "Ekonomik kâr (TL)", "DWL (TL)"], rows: [
            ["Düzenlemesiz (MR = MC)", "400", "60", "+4.000", "8.000"],
            ["P = MC", "800", "20", "−12.000", "0"],
            ["P = ATC", "600", "40", "0", "2.000"]
          ], not: "Düzenleyici, verimlilik (P = MC) ile firmanın ayakta kalması (P ≥ ATC) arasında seçim yapmak zorunda kalır." },
        { tip: "tuzak", metin: "P = ATC çözümü zararı önler ama fiyat hâlâ MC'nin üstündedir.", yanlis: "P = ATC koyarsak DWL tamamen biter.", dogru: "P = ATC'de P > MC olduğundan küçük bir *DWL* kalır. Yalnızca P = MC verimlidir (DWL = 0), ama doğal tekelde zarar getirir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Tekel, giriş engelleri yüzünden tek satıcı kalan *price maker* firmadır; firmanın talebi piyasa talebidir.",
            "Tekelde MR < P; MR eğrisi talebin iki kat eğimlidir (doğrusal talepte).",
            "Miktar MR = MC'de bulunur; fiyat talep eğrisinden okunur (MC'den değil); P > MC.",
            "Kâr = (P − ATC) × Q. Tekel zarar da edebilir; arz eğrisi yoktur.",
            "CS = fiyatın üstü, talebin altı üçgen. DWL = tekelin Q'su ile verimli Q arasında D ile MC arasındaki üçgen.",
            "Doğal tekel: *LRATC* talebin tamamında düşer; tek firma en ucuz üretir.",
            "Düzenleme: P = MC verimli (DWL = 0) ama zarar yazdırır; P = ATC sıfır ekonomik kâr verir, küçük bir DWL kalır.",
            "Hesap sırası: MR = MC → Q → talepten P → ATC → kâr/CS/DWL."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tek satıcılı bir firma kâr maksimize ediyor. Tabloya göre üretilen miktar ve fiyat nedir? (Fiyat bütün birimlere uygulanır.)",
      fig: { type: "table", head: ["Miktar", "Fiyat (TL)", "MC (TL)"], rows: [["1", "10", "2"], ["2", "9", "2"], ["3", "8", "3"], ["4", "7", "5"], ["5", "6", "7"]] },
      opts: ["Q = 3, P = 3", "Q = 3, P = 8", "Q = 4, P = 7", "Q = 5, P = 6"], a: 1,
      why: "TR = 10, 18, 24, 28, 30 olduğundan MR = 10, 8, 6, 4, 2. MR ≥ MC olan son birim 3. birimdir (6 > 3); 4. birimde MR 4 < MC 5. Fiyat talepten okunur: 8 TL. \"P = 3\" fiyatı MC'den okuma hatasıdır." },
    { q: "Grafik bir tekeli gösteriyor. Tekelin yol açtığı *deadweight loss* hangi alanla gösterilir?",
      fig: { type: "graph", xlabel: "Miktar (bilet)", ylabel: "Fiyat (TL)", xmax: 10, ymax: 10,
        lines: [{ from: [0, 10], to: [9.2, 0.8], label: "D" }, { from: [0, 10], to: [4.8, 0.4], label: "MR", color: 3 }, { from: [0, 2], to: [9, 2], label: "MC", color: 2 }],
        points: [{ q: 4, p: 6, label: "A", guides: true }, { q: 4, p: 2, label: "B" }, { q: 8, p: 2, label: "C" }],
        xticks: [{ v: 4, label: "400" }, { v: 8, label: "800" }], yticks: [{ v: 2, label: "20" }, { v: 6, label: "60" }] },
      opts: ["Y ekseni, 60 TL çizgisi ve D eğrisi arasındaki üçgen", "Y ekseni, 20 TL ve 60 TL arasında 400 bilete kadar uzanan dikdörtgen", "A, B ve C noktaları arasındaki üçgen", "B, C ve miktar ekseni arasındaki alan"], a: 2,
      why: "DWL, tekelin durduğu miktardan (A–B dikey kenarı) verimli miktara (C) kadar, D ile MC arasında kalan üçgendir. İlk seçenek tüketici rantı (CS), ikincisi üretici rantı (PS) dikdörtgenidir." },
    { q: "Bir şehirde su dağıtımının uzun dönem ortalama maliyeti talebin tamamı boyunca düşüyor. Düzenleyici, firmayı P = MC fiyatına zorlarsa ne olur?",
      opts: ["Üretim verimli olur ama P < ATC olduğundan firma zarar eder.", "Firma ekonomik kâr eder ve DWL artar.", "Firma ekonomik kârın sıfır olduğu miktarı üretir.", "Fiyat artar ve miktar azalır."], a: 0,
      why: "ATC düşerken MC < ATC'dir; P = MC koyunca fiyat ATC'nin altında kalır ve zarar doğar. \"Ekonomik kâr sıfır\" P = ATC düzenlemesinin sonucudur, P = MC'nin değil." },
    { q: "Bir tekel 400 bilet satıyor. Fiyat 60 TL, MC 20 TL ve bu miktardaki ATC 50 TL. Ekonomik kâr kaç TL'dir?",
      opts: ["24.000", "16.000", "20.000", "4.000"], a: 3,
      why: "Kâr = (P − ATC) × Q = (60 − 50) × 400 = 4.000 TL. 24.000 toplam gelir, 20.000 toplam maliyettir; 16.000 ise (P − MC) × Q'dur, yani kâr artı sabit maliyet: en çekici tuzak." },
    { q: "Tekelde marjinal gelir (MR) neden fiyatın altında kalır?",
      opts: ["Tekel her birimi farklı maliyetle üretir.", "Ek bir birimi satmak için fiyat düşürmek gerekir ve bu indirim önceki birimlere de uygulanır.", "Tekelin talep eğrisi yataydır.", "MR tekelde tanım gereği MC'ye eşittir."], a: 1,
      why: "Tek fiyat uygulayan tekel yeni birimi satmak için bütün birimlerin fiyatını düşürür; yeni gelirden önceki birimlerdeki kayıp çıkar. Talep yatay olsaydı (rekabet) MR = P olurdu." }
  ]
};
