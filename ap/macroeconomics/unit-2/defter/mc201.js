/* Kitpath not defteri · mc201 · 2.1 Döngüsel Akış ve GSYH
   Kaynak: College Board CED, Topic 2.1 (MEA-1.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc201",
  amac: "Bu konu ekonominin büyüklüğünü ölçen *GDP* (GSYH) kavramını anlatıyor. Neyin GSYH'ye girdiğini, döngüsel akış diyagramını, GSYH'yi hesaplamanın üç yolunu ve C + I + G + (X − M) ile nominal GSYH hesabını öğreneceksin.",
  bolumler: [
    {
      baslik: "*GDP*: bir yılda üretilen son mallar",
      kisa: "GSYH, ülke sınırları içinde bir yılda üretilen son mal ve hizmetlerin değeridir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏭", terim: "Gross domestic product (GDP)", tr: "gayrisafi yurt içi hasıla (GSYH)", tanim: "Bir ülkenin sınırları içinde, bir yılda üretilen **son** mal ve hizmetlerin toplam piyasa değeri. Bir akıştır: \"bir yılda ne kadar?\" diye ölçülür.", ornek: "Türkiye'de bir yılda üretilen bütün tost, telefon ve konser biletlerinin değeri." },
            { ikon: "🥪", terim: "Final good", tr: "son mal", tanim: "Kullanıcıya ulaşan, başka bir malın üretiminde tüketilmeyen mal ya da hizmet. GSYH yalnızca bunları sayar.", ornek: "Kantinden aldığın tost." },
            { ikon: "🧀", terim: "Intermediate good", tr: "ara mal", tanim: "Başka bir malın üretiminde kullanılıp tüketilen mal. Değeri son malın fiyatında zaten vardır; ayrıca sayılırsa ==çift sayım== olur.", ornek: "Kantinin tost yapmak için aldığı kaşar peyniri." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "GSYH'ye girer", maddeler: ["Bu yıl üretilen son mal ve hizmetler", "Yeni makine, yeni bina, yeni konut", "Devletin mal ve hizmet alımı"] },
          sag: { ikon: "🚫", baslik: "GSYH'ye girmez", maddeler: ["Ara mallar (ayrıca)", "İkinci el mallar, hisse senedi ve tahvil alım satımı", "Transfer ödemeleri (burs, emekli maaşı)"] },
          oyun: [
            { metin: "Ece kantinden 40 TL'lik tost aldı.", cevap: "sol", neden: "Bu yıl üretilmiş bir son mal." },
            { metin: "Kantin, tost için 10 TL'lik kaşar aldı.", cevap: "sag", neden: "Ara mal: değeri tostun 40 TL'sinde zaten var." },
            { metin: "Deniz ikinci el telefonunu arkadaşına sattı.", cevap: "sag", neden: "Telefon üretildiği yıl sayıldı; yalnızca aracının hizmeti (komisyon) yeni üretimdir." },
            { metin: "Belediye yeni bir okul binası yaptırdı.", cevap: "sol", neden: "Bu yıl üretilen yeni bir mal: devlet alımı (G)." },
            { metin: "Devlet öğrencilere 500 TL burs verdi.", cevap: "sag", neden: "Transfer: karşılığında bu yıl üretilmiş bir mal ya da hizmet yok." }
          ] },
        { tip: "tuzak", metin: "Para el değiştiriyor diye her işlem GSYH'ye girmez. Hisse senedi almak da bir **üretim** değildir; yalnızca mülkiyet el değiştirir.", yanlis: "Parayla yapılan her alışveriş GSYH'ye eklenir.", dogru: "Yalnızca bu yıl üretilen son mal ve hizmetler sayılır. Ara mal, ikinci el mal, finansal varlık ve transfer sayılmaz." }
      ]
    },
    {
      baslik: "Döngüsel akış: para ve mal ters yönde döner",
      kisa: "Hane halkı harcar, firma kazanır; firma ücret öder, hane halkı kazanır.",
      bloklar: [
        { tip: "adimlar", baslik: "Kantin örneği: döngü bir tur atar", adimlar: [
            { baslik: "Faktör piyasası", metin: "Murat (*household*) emeğini kantine (*firm*) satar. Kaynaklar *factor market*'te alınıp satılır." },
            { baslik: "Gelir", metin: "Kantin ona ücret öder. Ücret, kira, faiz ve kâr; hane halkının gelirleridir." },
            { baslik: "Ürün piyasası", metin: "Murat ücretiyle kantinden tost alır. Mal ve hizmetler *product market*'te alınıp satılır; bu, hane halkının harcamasıdır." },
            { baslik: "Döngü kapanır", metin: "Tost satışı kantinin gelirini yaratır; kantin bu gelirle yine ücret öder. Mal ve kaynaklar, paranın ==ters yönünde== akar." },
            { baslik: "Üç ölçü bir", metin: "Bu sade modelde toplam harcama = üretimin değeri = toplam gelirdir. GSYH üçü de ölçer." }
          ] },
        { tip: "harita", merkez: "Genişletilmiş döngüsel akış", dallar: [
            { baslik: "*Households*", alt: "Kaynak satar → gelir alır; harcar (C), vergi öder, tasarruf eder" },
            { baslik: "*Firms*", alt: "Mal üretir, satış geliri alır; ücret, kira, faiz, kâr öder" },
            { baslik: "*Product market*", alt: "Mal ve hizmet alınır satılır; para firmaya akar" },
            { baslik: "*Factor market*", alt: "Emek, toprak, sermaye alınır satılır; gelir haneye akar" },
            { baslik: "*Government*", alt: "Vergi toplar; mal ve hizmet alır (G), transfer öder" },
            { baslik: "*Financial markets*", alt: "Tasarruflar toplanır; firmalar yatırım (I) için ödünç alır" },
            { baslik: "*Rest of the world*", alt: "İhracat (X) para getirir, ithalat (M) para götürür" }
          ] },
        { tip: "ikili", sol: { ikon: "🛒", baslik: "*Product market*", maddeler: ["Mal ve hizmet satılır", "Harcamalar buradan firmaya akar"] },
          sag: { ikon: "👷", baslik: "*Factor market*", maddeler: ["Emek, toprak, sermaye satılır", "Gelirler buradan haneye akar"] },
          oyun: [
            { metin: "Ece kantinde tost alıyor.", cevap: "sol", neden: "Son mal alıyor: ürün piyasası." },
            { metin: "Kantin, yeni bir aşçı tutuyor.", cevap: "sag", neden: "Emek satın alınıyor: faktör piyasası." },
            { metin: "Bir ev sahibi dükkânını kantine kiraya veriyor.", cevap: "sag", neden: "Bir üretim kaynağı (dükkân/mülk) kiralanıyor; karşılığı *rent*: faktör piyasası." },
            { metin: "Ada konser bileti satın alıyor.", cevap: "sol", neden: "Hizmet satın alıyor: ürün piyasası." }
          ] }
      ]
    },
    {
      baslik: "GSYH'yi üç yoldan ölçmek",
      kisa: "Harcama, gelir ve katma değer yaklaşımları aynı GSYH'yi verir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Harcama", alt: "C + I + G + (X − M)" }, "=",
            { t: "Gelir", alt: "ücret + kira + faiz + kâr" }, "=",
            { t: "Katma değer", alt: "her aşamanın katma değerlerinin toplamı" }
          ], aciklama: "Birinin harcaması, başka birinin gelirine dönüşür; bu yüzden üç yaklaşım aynı sayıyı verir. (Resmî hesapta amortisman ve dolaylı vergiler de eklenir; AP'de bu basit hâl yeter.)" },
        { tip: "ornek", baslik: "Bir simidin katma değeri", durum: "Çiftçi buğdayı 5 TL'ye değirmene, değirmen unu 12 TL'ye fırına, fırın simidi 20 TL'ye satıyor. Simit GSYH'ye ne kadar katkı yapar? (Çiftçi başka bir girdi almadı.)",
          adimlar: ["Çiftçinin katma değeri (*value added*): 5 − 0 = 5 TL.", "Değirmenin katma değeri: 12 − 5 = 7 TL.", "Fırının katma değeri: 20 − 12 = 8 TL.", "Toplam: 5 + 7 + 8 = 20 TL = simidin son fiyatı.", "Üç satışı toplasaydın 5 + 12 + 20 = 37 TL çıkardı; bu çift sayımdır."],
          sonuc: "Katma değerlerin toplamı = son malın değeri = ==20 TL==. Simidin GSYH'ye katkısı 37 değil, 20 TL." },
        { tip: "tuzak", metin: "Üç yaklaşım aynı GSYH'nin üç ayrı ölçüsüdür. Üçünü toplarsan GSYH'nin üç katını bulursun.", yanlis: "GSYH = harcama + gelir + katma değer.", dogru: "Her biri tek başına GSYH'yi verir. Ara mal satışlarını toplamak da ==çift sayımdır==; yalnızca son mal ya da katma değerler sayılır." }
      ]
    },
    {
      baslik: "Harcama yaklaşımı: C + I + G + (X − M)",
      kisa: "Dört kesim harcar: hane halkı, firma, devlet ve yabancılar; ithalat çıkarılır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛍️", terim: "Consumption (C)", tr: "tüketim", tanim: "Hane halklarının mal ve hizmet harcaması; çoğu ülkede GSYH'nin en büyük parçasıdır.", ornek: "Ada'nın konser bileti ve telefon faturası." },
            { ikon: "🔧", terim: "Investment (I)", tr: "yatırım", tanim: "Firmaların yeni makine, bina ve stok harcaması ile yeni konut inşası. Hisse senedi ya da tahvil alımı yatırım sayılmaz.", ornek: "Kantinin yeni tost makinesi." },
            { ikon: "🏛️", terim: "Government purchases (G)", tr: "devlet alımları", tanim: "Devletin mal ve hizmet alımı. Emekli maaşı ve burs gibi transferler dahil değildir.", ornek: "Belediyenin yaptırdığı spor salonu, öğretmen maaşları." },
            { ikon: "🌍", terim: "Net exports (X − M)", tr: "net ihracat", tanim: "İhracat eksi ithalat. İthalat çıkarılır; çünkü C, I ve G içinde sayılmış ama yurt dışında üretilmiş mallardır.", ornek: "Fındık ihracatı X; ithal telefon M." }
          ] },
        { tip: "grafik", baslik: "GSYH, harcama yığını olarak", xlabel: "GSYH'nin parçaları", ylabel: "Harcama (milyon TL)", xmax: 10, ymax: 13,
          yticks: [{ v: 2, label: "200" }, { v: 4, label: "400" }, { v: 6, label: "600" }, { v: 8, label: "800" }, { v: 10, label: "1000" }, { v: 12, label: "1200" }],
          ogeler: [
            { id: "c", tip: "alan", renk: 0, noktalar: [[2, 0], [5, 0], [5, 6], [2, 6]], gizli: true },
            { id: "i", tip: "alan", renk: 1, noktalar: [[2, 6], [5, 6], [5, 8], [2, 8]], gizli: true },
            { id: "g", tip: "alan", renk: 2, noktalar: [[2, 8], [5, 8], [5, 10.5], [2, 10.5]], gizli: true },
            { id: "x", tip: "alan", renk: 3, noktalar: [[2, 10.5], [5, 10.5], [5, 12], [2, 12]], gizli: true },
            { id: "lc", tip: "yazi", x: 5.2, y: 2.8, metin: "C = 600", hiza: "start", gizli: true },
            { id: "li", tip: "yazi", x: 5.2, y: 6.8, metin: "I = 200", hiza: "start", gizli: true },
            { id: "lg", tip: "yazi", x: 5.2, y: 9.05, metin: "G = 250", hiza: "start", gizli: true },
            { id: "lx", tip: "yazi", x: 5.2, y: 11.05, metin: "X = 150", hiza: "start", gizli: true },
            { id: "m", tip: "ok", renk: 3, from: [7.6, 12], to: [7.6, 10], gizli: true },
            { id: "lm", tip: "yazi", x: 7.9, y: 11.2, metin: "− M = 200", hiza: "start", gizli: true },
            { id: "gsyh", tip: "cizgi", renk: 0, kesik: true, from: [2, 10], to: [8, 10], etiket: "GSYH = 1000", gizli: true }
          ],
          durumlar: [
            { metin: "Önce **tüketim (C)**: hane halkının harcaması, bu ülkede 600.", goster: ["c", "lc"] },
            { metin: "Üstüne **yatırım (I)**: firmaların yeni makine, bina ve stok harcaması, 200.", goster: ["i", "li"] },
            { metin: "**Devlet alımları (G)**: okul, yol, öğretmen maaşı; 250. Yığın şimdi 1050.", goster: ["g", "lg"] },
            { metin: "**İhracat (X)**: yabancıların mallarımıza harcaması, +150. Yığın 1200'e çıktı.", goster: ["x", "lx"] },
            { metin: "**İthalat (M)** çıkarılır: 200. Yabancı üretimi bizim üretimimiz gibi sayamayız. ==GSYH = 1200 − 200 = 1000.==", goster: ["m", "lm", "gsyh"] }
          ] },
        { tip: "tuzak", baslik: "I, G ve M'de sık yapılan hatalar", metin: "Üç yer karışır: hisse alımı, transferler ve ithalatın çıkarılması.", yanlis: "Emekli maaşı G'ye, hisse senedi alımı I'ya girer; ithalat GSYH'ye eklenir.", dogru: "G yalnızca mal ve hizmet alımıdır; I yeni sermaye mallarına yapılan harcamadır. İthalat (X − M) içinde ==çıkarılır==." }
      ]
    },
    {
      baslik: "Nominal GSYH'yi hesaplamak",
      kisa: "Nominal GSYH güncel fiyatlarla hesaplanır: son malların fiyat × miktar toplamı.",
      bloklar: [
        { tip: "ornek", baslik: "Harcama yöntemiyle nominal GSYH", durum: "Küçük bir ada ülkesinde bir yıl: tüketim 600, yatırım 200, devlet alımları 250, ihracat 150, ithalat 200 (milyon TL). GSYH kaçtır?",
          adimlar: ["Net ihracat: X − M = 150 − 200 = −50.", "GSYH = C + I + G + (X − M).", "GSYH = 600 + 200 + 250 + (−50) = 1000.", "Kontrol: 600 + 200 + 250 + 150 = 1200; ithalat 200 çıkınca yine 1000."],
          sonuc: "Nominal GSYH = ==1000 milyon TL==. Net ihracat negatif olabilir: ithalat ihracattan fazlaysa ülke ticaret açığı verir." },
        { tip: "tablo", baslik: "Aynı ülke, fiyat × miktar yöntemiyle", head: ["Mal", "Fiyat (TL)", "Miktar (milyon)", "Değer (milyon TL)"], rows: [
            ["Tost", "50", "10", "500"],
            ["Kola", "25", "20", "500"],
            ["Toplam", "", "", "1000"]
          ], vurgu: 2, not: "Aynı ülkede ikinci bir yol: son malların güncel fiyatla değerlerini topla. Sonuç harcama yöntemiyle aynı, 1000. Fiyatlar o yılın fiyatları olduğu için bu nominal GSYH'dir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*GDP*: ülke sınırları içinde, bir yılda üretilen **son** mal ve hizmetlerin değeri; bir akıştır.",
            "Ara mal, ikinci el mal, hisse senedi ve transferler GSYH'ye girmez (çift sayım olmasın).",
            "Döngüsel akış: hane halkı faktör piyasasında kaynak satar (gelir), ürün piyasasında harcar. Para ve mal ters yönde akar.",
            "Üç ölçüm: harcama, gelir ve katma değer yaklaşımı; her biri tek başına aynı GSYH'yi verir.",
            "Katma değer = satış fiyatı − ara mal maliyeti; toplamı son malın değerine eşittir.",
            "Harcama yaklaşımı: GSYH = C + I + G + (X − M). İthalat çıkarılır.",
            "*Investment* = yeni sermaye harcaması; hisse alımı ve *transfer* sayılmaz.",
            "*Nominal GDP* güncel fiyatlarla hesaplanır: Σ fiyat × miktar ya da C + I + G + (X − M)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi bu yılki Türkiye GSYH'sine dahil edilir?",
      opts: ["Ayşe'nin ikinci el bisikletini Ali'ye 2.000 TL'ye satması", "Bir pastanenin pasta yapmak için aldığı un", "Bu yıl üretilen yeni bir belediye otobüsünün satın alınması", "Devletin emeklilere ödediği aylık maaşlar"],
      a: 2,
      why: "Yeni otobüs bu yıl üretilmiş bir son maldır (devlet alımı, G). İkinci el bisiklet geçmişte üretildi; un ara maldır, değeri pastanın fiyatında zaten var; emekli maaşı transferdir. En çekici yanlış şık, \"un\": parayla alınıyor diye sayılmaz." },
    { q: "Bir ülkede tüketim 800, yatırım 300, devlet alımları 400, ihracat 200 ve ithalat 250'dir (milyar TL). Nominal GSYH kaçtır?",
      opts: ["1.450", "1.700", "1.950", "1.250"],
      a: 0,
      why: "GSYH = C + I + G + (X − M) = 800 + 300 + 400 + (200 − 250) = 1.450. 1.700, ithalatı çıkarmayı unutmaktır; 1.950, ithalatı eklemektir; 1.250 ihracatı unutmaktır." },
    { q: "Basit döngüsel akış diyagramında aşağıdakilerden hangisi *factor market*'te gerçekleşir?",
      opts: ["Ece kantinden tost satın alır", "Kantin, bir öğrencinin emeğini ücret karşılığında satın alır", "Belediye okul binası için inşaat firmasına ödeme yapar", "Bir firma ürettiği malı yurt dışına satar"],
      a: 1,
      why: "*Factor market*'te emek, toprak ve sermaye alınıp satılır; kantin emeği satın alıyor. Tost alımı *product market*'tir. En çekici yanlış şık A: para ve harcama içerdiği için faktör piyasası sanılır." },
    { q: "Tabloda bir ekmeğin üretim zinciri verilmiştir. Ekmeğin GSYH'ye toplam katkısı ve fırının katma değeri sırasıyla nedir?",
      fig: { type: "table", caption: "Üretim zinciri", head: ["Aşama", "Satış fiyatı (TL)"], rows: [["Çiftçi → değirmen (buğday)", 8], ["Değirmen → fırın (un)", 20], ["Fırın → tüketici (ekmek)", 35]] },
      opts: ["63 TL ve 35 TL", "63 TL ve 15 TL", "35 TL ve 35 TL", "35 TL ve 15 TL"],
      a: 3,
      why: "Son mal ekmektir: katkı 35 TL. Fırının katma değeri 35 − 20 = 15 TL. 8 + 20 + 35 = 63 TL, ara satışları da sayan çift sayımdır." },
    { q: "Bir Türk hane halkı Almanya'da üretilmiş 30.000 TL'lik bir telefon satın alıyor. Harcama yaklaşımına göre Türkiye'nin GSYH'sine etkisi nedir?",
      opts: ["C 30.000 artar, M 30.000 artar; GSYH değişmez", "Yalnızca C artar; GSYH 30.000 artar", "I artar; GSYH 30.000 artar", "Yalnızca M artar; GSYH 30.000 azalır"],
      a: 0,
      why: "Harcama C'de görünür ama telefon yurt dışında üretildi; M aynı miktarda artıp (X − M)'yi düşürür. Net etki sıfırdır. En çekici yanlış şık B: ithalatı çıkarmayı unutur." }
  ]
};
