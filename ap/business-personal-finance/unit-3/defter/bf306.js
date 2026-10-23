/* Kitpath not defteri · bf306 · 3.6 Gelir Tablosu
   Kaynak: AP Business with Personal Finance CED, Topic 3.6. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "bf306",
  amac: "Bu konu gelir tablosunu anlatıyor: bir işletme belirli bir dönemde gelirden net kâra nasıl ulaşır, brüt kâr, faaliyet kârı ve net kâr nasıl hesaplanır. Üç kâr marjını, yüzde değişimi, tahmini gelir tablosunu ve tüketici bütçesini öğreneceksin.",
  bolumler: [
    {
      baslik: "Gelir tablosu nedir?",
      kisa: "Gelir tablosu, bir dönemde gelirin tüm maliyetleri karşılayıp karşılamadığını gösterir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Net kâr / zarar", alt: "bir dönem sonunda" }, "=",
            { t: "Toplam gelir", alt: "*revenue*" }, "−",
            { t: "Toplam maliyetler", alt: "COGS + giderler + faiz + vergi" }
          ], aciklama: "*Income statement* (*statement of profit and loss*) bir dönemin gelir ve maliyetini karşılaştırır. Genelde birkaç dönemi (ay, çeyrek, yıl) yan yana gösterir; böylece karşılaştırma yapılır." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🛒", terim: "Revenue", tr: "gelir (satışlar)", tanim: "İşletmenin temel faaliyetlerinden, yani mal ve hizmet satışından elde ettiği gelir.", ornek: "Kahve ve tatlı satışları." },
            { ikon: "🏭", terim: "COGS", tr: "satılan malın maliyeti", tanim: "Satılan ürünlerin doğrudan üretim maliyeti.", ornek: "Kahve çekirdeği, süt, bardak." },
            { ikon: "🏢", terim: "Operating expenses", tr: "faaliyet giderleri", tanim: "Dolaylı maliyetler. İki ana grup: satış giderleri (reklam, satış elemanı maaşı) ve genel yönetim giderleri (ofis maaşları, kira, sigorta); araştırma-geliştirme de buraya girer.", ornek: "Reklam, ofis kirası." },
            { ikon: "🏦", terim: "Interest expense", tr: "faiz gideri", tanim: "Kredi ve tahvil gibi borçlanmanın maliyeti.", ornek: "Banka kredisinin faizi." },
            { ikon: "🏛️", terim: "Taxes", tr: "vergi", tanim: "Vergi öncesi kâr pozitifse işletme vergi öder; vergi gelir tablosunda yer alır.", ornek: "Kâr üzerinden ödenen kurumlar vergisi." }
          ] }
      ]
    },
    {
      baslik: "Gelirden net kâra: basamak basamak",
      kisa: "Gelirden sırayla COGS, faaliyet giderleri, faiz ve vergi düşülür; en altta net kâr kalır.",
      bloklar: [
        { tip: "grafik", baslik: "Mavi Kahve'nin yıllık gelir tablosu (bin TL)", xlabel: "", ylabel: "Bin TL", xmax: 10, ymax: 560,
          xticks: [{ v: 1, label: "Gelir" }, { v: 2, label: "COGS" }, { v: 3, label: "Brüt" }, { v: 4, label: "Gider" }, { v: 5, label: "Faal." }, { v: 6, label: "Faiz" }, { v: 7, label: "V.öncesi" }, { v: 8, label: "Vergi" }, { v: 9, label: "Net" }],
          yticks: [{ v: 100, label: "100" }, { v: 300, label: "300" }, { v: 500, label: "500" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 0, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 3, noktalar: [[1.65, 500], [2.35, 500], [2.35, 500], [1.65, 500]] },
            { id: "b3", tip: "alan", renk: 0, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 3, noktalar: [[3.65, 300], [4.35, 300], [4.35, 300], [3.65, 300]] },
            { id: "b5", tip: "alan", renk: 0, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b6", tip: "alan", renk: 3, noktalar: [[5.65, 120], [6.35, 120], [6.35, 120], [5.65, 120]] },
            { id: "b7", tip: "alan", renk: 0, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]] },
            { id: "b8", tip: "alan", renk: 3, noktalar: [[7.65, 100], [8.35, 100], [8.35, 100], [7.65, 100]] },
            { id: "b9", tip: "alan", renk: 2, noktalar: [[8.65, 0], [9.35, 0], [9.35, 0], [8.65, 0]] },
            { id: "y1", tip: "yazi", x: 1, y: 525, metin: "500", gizli: true },
            { id: "y2", tip: "yazi", x: 2, y: 525, metin: "−200", gizli: true },
            { id: "y3", tip: "yazi", x: 3, y: 325, metin: "300", gizli: true },
            { id: "y4", tip: "yazi", x: 4, y: 325, metin: "−180", gizli: true },
            { id: "y5", tip: "yazi", x: 5, y: 145, metin: "120", gizli: true },
            { id: "y6", tip: "yazi", x: 6, y: 145, metin: "−20", gizli: true },
            { id: "y7", tip: "yazi", x: 7, y: 125, metin: "100", gizli: true },
            { id: "y8", tip: "yazi", x: 8, y: 125, metin: "−20", gizli: true },
            { id: "y9", tip: "yazi", x: 9, y: 105, metin: "80", gizli: true }
          ],
          durumlar: [
            { metin: "Mavi Kahve'nin yıllık geliri (satışlar) ==500 bin TL==.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 500], [0.65, 500]] } }, goster: ["y1"] },
            { metin: "Doğrudan maliyet (COGS) 200 düşülür: ==brüt kâr 300==.", set: { b2: { noktalar: [[1.65, 300], [2.35, 300], [2.35, 500], [1.65, 500]] }, b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 300], [2.65, 300]] } }, goster: ["y2", "y3"] },
            { metin: "Faaliyet giderleri 180 (satış 70 + genel yönetim 90 + AR-GE 20) düşülür: ==faaliyet kârı 120==.", set: { b4: { noktalar: [[3.65, 120], [4.35, 120], [4.35, 300], [3.65, 300]] }, b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 120], [4.65, 120]] } }, goster: ["y4", "y5"] },
            { metin: "Faiz gideri 20 düşülür: ==vergi öncesi kâr 100==.", set: { b6: { noktalar: [[5.65, 100], [6.35, 100], [6.35, 120], [5.65, 120]] }, b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 100], [6.65, 100]] } }, goster: ["y6", "y7"] },
            { metin: "%20 vergi (20) düşülür: ==net kâr 80==. Gelir tablosunun en alt satırı: *bottom line*.", set: { b8: { noktalar: [[7.65, 80], [8.35, 80], [8.35, 100], [7.65, 100]] }, b9: { noktalar: [[8.65, 0], [9.35, 0], [9.35, 80], [8.65, 80]] } }, goster: ["y8", "y9"] }
          ] },
        { tip: "tablo", baslik: "Aynı tablo satır satır (bin TL, vergi oranı örnek olarak %20)", head: ["Kalem", "Tutar", "Nasıl bulunur?"], rows: [
            ["Gelir", "500", "Satışlar"],
            ["− COGS", "200", "Doğrudan maliyet"],
            ["= Brüt kâr (*gross profit*)", "300", "Gelir − COGS"],
            ["− Satış giderleri", "70", "Reklam, satış maaşları"],
            ["− Genel ve idari giderler", "90", "Ofis maaşları, kira, sigorta"],
            ["− Araştırma-geliştirme", "20", "Operating expenses'e girer"],
            ["= Faaliyet kârı (*operating profit*)", "120", "Brüt kâr − faaliyet giderleri (180)"],
            ["− Faiz gideri", "20", "Borçlanma maliyeti"],
            ["= Vergi öncesi kâr (*pretax income*)", "100", "Faaliyet kârı − faiz"],
            ["− Vergi", "20", "Vergi öncesi kârın %20'si"],
            ["= Net kâr (*net profit*)", "80", "Vergi öncesi kâr − vergi"]
          ], vurgu: 10 },
        { tip: "tuzak", baslik: "Faiz faaliyet kârından sonra gelir", metin: "Her kâr kalemi farklı bir noktada ölçülür.", yanlis: "Faiz gideri faaliyet giderlerine dahildir; yani faaliyet kârı faizden sonra hesaplanır.", dogru: "Faaliyet kârı = brüt kâr − faaliyet giderleri; faiz ve vergi ==ondan sonra== gelir. Faaliyet kârı, faiz ve vergiden önceki kârı gösterir; net kâr ise en sondaki sahiplere kalan kârdır." }
      ]
    },
    {
      baslik: "Üç kâr marjı",
      kisa: "Marjlar kârı gelire böler; her biri farklı bir yönetim becerisini ölçer.",
      bloklar: [
        { tip: "tablo", baslik: "Üç kâr marjı (Mavi Kahve)", head: ["Marj", "Formül", "Neyi ölçer?", "Sonuç"], rows: [
            ["Brüt kâr marjı", "Brüt kâr ÷ gelir", "Fiyatlama ve doğrudan maliyet yönetimi", "300 ÷ 500 = %60"],
            ["Faaliyet kâr marjı", "Faaliyet kârı ÷ gelir", "Pazarlama, satış, yönetim ve faaliyet giderlerini kontrol", "120 ÷ 500 = %24"],
            ["Net kâr marjı", "Net kâr ÷ gelir", "Genel kârlılık: gelirin sahiplere kalan payı", "80 ÷ 500 = %16"]
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 60, sonek: "%", etiket: "brüt kâr marjı: 100 TL gelirde 60 TL brüt kâr" },
            { deger: 24, sonek: "%", etiket: "faaliyet kâr marjı: 100 TL gelirde 24 TL faaliyet kârı" },
            { deger: 16, sonek: "%", etiket: "net kâr marjı: 100 TL gelirde 16 TL net kâr" }
          ] },
        { tip: "ikili", ayirici: "↔", sol: { ikon: "🥛", baslik: "Brüt kâr marjını etkiler", maddeler: ["Fiyatlama", "Doğrudan maliyet (COGS)", "Tedarik maliyetleri"] },
          sag: { ikon: "📣", baslik: "Faaliyet kâr marjını etkiler", maddeler: ["Pazarlama ve satış gideri", "Genel yönetim giderleri", "Faaliyet giderlerini kontrol"] },
          oyun: [
            { metin: "Süt tedarikçisi fiyatı artırdı.", cevap: "sol", neden: "Doğrudan maliyet arttı: brüt marj düşer." },
            { metin: "Kahve fiyatları artırıldı, satılan miktar aynı.", cevap: "sol", neden: "Fiyatlama brüt marjı etkiler." },
            { metin: "Reklam bütçesi iki katına çıkarıldı.", cevap: "sag", neden: "Faaliyet gideri arttı: faaliyet marjı düşer." },
            { metin: "Ofis kirası düşürüldü.", cevap: "sag", neden: "Genel yönetim gideri azaldı: faaliyet marjı iyileşir." }
          ] }
      ]
    },
    {
      baslik: "Yüzde değişim ve yorumlama",
      kisa: "Yüzde değişim, bir değerin dönemler arasında ne kadar değiştiğini gösterir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "Yüzde değişim", alt: "*percent change*" }, "=",
            { t: "(Şimdiki değer − Başlangıç değeri)", alt: "farkı" }, "÷",
            { t: "Başlangıç değeri", alt: "" }, "×",
            { t: "100", alt: "" }
          ], aciklama: "Gelir, maliyet, kâr ya da kâr marjı gibi her veri için kullanılır." },
        { tip: "tablo", baslik: "Mavi Kahve: Yıl 1 ve Yıl 2 (bin TL)", head: ["Kalem", "Yıl 1", "Yıl 2", "Değişim"], rows: [
            ["Gelir", "400", "500", "+%25"],
            ["Brüt kâr", "220", "300", "+%36,4"],
            ["Faaliyet kârı", "80", "120", "+%50"],
            ["Net kâr", "48", "80", "+%66,7"],
            ["Brüt kâr marjı", "%55", "%60", "+5 puan"],
            ["Faaliyet kâr marjı", "%20", "%24", "+4 puan"],
            ["Net kâr marjı", "%12", "%16", "+4 puan"]
          ], not: "Yıl 1: COGS 180, faaliyet gideri 140, faiz 20, vergi 12 (%20). Yıl 2 değerleri önceki tablodakilerdir." },
        { tip: "ornek", baslik: "Net kârdaki değişim ve karşılaştırma", durum: "Mavi Kahve'nin net kârı 48 binden 80 bine çıktı. Yüzde değişim nedir? Yıl 2 net kâr marjı %16; aynı sektörde rakibin marjı %12 ve işletmenin hedefi %15 idi. Sonuç nasıl yorumlanır?",
          adimlar: ["Yüzde değişim: (80 − 48) ÷ 48 × 100 = 32 ÷ 48 × 100 ≈ %66,7.", "Marj %16: hedefin (%15) ve rakibin (%12) üstünde, Yıl 1'in (%12) de üstünde.", "Marjlar; tahminler, geçmiş performans ve rakiplerle karşılaştırılarak performansın beklentiyi karşılayıp karşılamadığı anlaşılır."],
          sonuc: "Net kâr ==yaklaşık %66,7== arttı; marj hem hedefi hem rakibi geçti." },
        { tip: "tuzak", baslik: "Yüzde değişim ile puan farkı", metin: "Marj %12'den %16'ya çıkınca iki ayrı sayı konuşulabilir.", yanlis: "Net marj %12'den %16'ya çıktığına göre yüzde değişim %4'tür.", dogru: "Marj 4 ==puan== artmıştır; yüzde değişim ise (16 − 12) ÷ 12 × 100 ≈ %33,3'tür." }
      ]
    },
    {
      baslik: "Tahmini gelir tablosu",
      kisa: "Tahmini gelir tablosu ve bütçe, gelecekteki gelir, gider ve kârı planlamaya yarar.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "💹", baslik: "Gelir nasıl tahmin edilir?", metin: "Planlanan fiyatlama stratejisi, müşteri talebi ve sektör eğilimleri üzerine pazar araştırmasıyla." },
            { ikon: "🧱", baslik: "COGS ve giderler nasıl tahmin edilir?", metin: "Üretim süreci, tedarik zinciri maliyetleri, kira, pazarlama, ofis ve satış maaşları, araştırma-geliştirme planıyla." },
            { ikon: "🎯", baslik: "Ne işe yarar?", metin: "Beklenen maliyeti planlar, fon ihtiyacını gösterir ve cari yükümlülükleri karşılayacak nakdi korur." },
            { ikon: "🌪️", baslik: "Neden gerekli?", metin: "Gelir ve giderler rekabet, ihtiyaçlar ve PESTEL güçleriyle dalgalanır." }
          ] },
        { tip: "ornek", baslik: "Yeni kahve kiosku: tahmini gelir tablosu", durum: "Mavi Kahve yeni bir kiosk planlıyor: ayda 3.000 kahve, kahve başına 60 TL fiyat, kahve başına COGS 24 TL. Aylık faaliyet gideri 78.000 TL (kira 30.000 + maaş 40.000 + pazarlama 8.000), faiz 5.000 TL, vergi %20. Tahmini net kâr ve net marj nedir?",
          adimlar: ["Gelir: 3.000 × 60 = 180.000 TL. COGS: 3.000 × 24 = 72.000 TL. Brüt kâr: 108.000 TL (%60).", "Faaliyet kârı: 108.000 − 78.000 = 30.000 TL. Vergi öncesi: 30.000 − 5.000 = 25.000 TL.", "Vergi: 25.000 × 0,20 = 5.000 TL. Net kâr: 25.000 − 5.000 = 20.000 TL; net marj: 20.000 ÷ 180.000 ≈ %11,1."],
          sonuc: "Tahmini aylık net kâr ==20.000 TL== (net marj ≈ %11,1)." }
      ]
    },
    {
      baslik: "Tüketici bütçesi",
      kisa: "Bütçe, beklenen net geliri hedeflerine göre birikim, harcama ve borç ödemesine paylaştırır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "💼", terim: "Net pay", tr: "net maaş", tanim: "Vergi ve diğer kesintilerden sonra eline geçen gelir.", ornek: "Brüt 15.000 TL, kesinti 3.000 TL → net 12.000 TL." },
            { ikon: "📒", terim: "Budget", tr: "bütçe", tanim: "Bir dönem (genelde ay ya da yıl) için beklenen net gelir ile planlanan birikim ve harcamaları (borç ödemeleri dahil) gösteren plan.", ornek: "Aylık bütçe tablosu." }
          ] },
        { tip: "tablo", baslik: "Ece'nin aylık bütçesi (net maaş 12.000 TL)", head: ["Kalem", "Tutar (TL)", "Pay"], rows: [
            ["İhtiyaçlar (kira, gıda, ulaşım)", "6.000", "%50"],
            ["İstekler: eğlence", "3.000", "%25"],
            ["İstekler: bağış", "600", "%5"],
            ["Borç ödemesi", "1.000", "%8,3"],
            ["Birikim", "1.400", "%11,7"],
            ["Toplam", "12.000", "%100"]
          ], vurgu: 5, not: "İhtiyaç %50, istek %30 (3.600), birikim ve borç %20 (2.400): 50/30/20 kuralına denk gelir." },
        { tip: "tuzak", baslik: "Brüt maaş harcanabilir gelir değildir", metin: "Bütçe net maaşla yapılır.", yanlis: "Aylık brüt maaşım 15.000 TL, o halde 15.000 TL'lik bütçe yapabilirim.", dogru: "Bütçe, vergi ve kesintilerden sonra eline geçen ==net maaş== üzerine kurulur (burada 12.000 TL). Bütçe; harcama kalıplarını görmeye ve borç yönetimi, birikim, bağış hedeflerine ulaşıp ulaşmadığını değerlendirmeye yarar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Gelir tablosu bir dönemin gelirini maliyetlerle karşılaştırıp net kâr ya da zararı bulur.",
            "Sıra: Gelir − COGS = brüt kâr; − faaliyet giderleri = faaliyet kârı; − faiz = vergi öncesi kâr; − vergi = net kâr.",
            "Faaliyet giderleri: satış, genel yönetim, araştırma-geliştirme. Net kâr: *bottom line*.",
            "Marjlar = kâr ÷ gelir: brüt (fiyatlama ve doğrudan maliyet), faaliyet (pazarlama, yönetim, gider kontrolü), net (genel kârlılık).",
            "Marjlar tahminler, geçmiş dönem ve rakiplerle karşılaştırılır.",
            "Yüzde değişim = (şimdiki − başlangıç) ÷ başlangıç × 100; %12 → %16 marj +4 puan, +%33,3 değişimdir.",
            "Tahmini gelir tablosu fiyat/pazar araştırmasıyla geliri, üretim ve gider planıyla COGS ve giderleri tahmin eder.",
            "Bütçe beklenen net gelirle birikim, harcama ve borç ödemesini planlar.",
            "Net kâr marjı yüksek olsa da nakit akışı ayrıca izlenmelidir."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Tabloya göre bir işletmenin net kârı kaç TL'dir?",
      fig: { type: "table", caption: "Yıllık gelir tablosu verileri (bin TL)", head: ["Gelir", "COGS", "Faaliyet gideri", "Faiz", "Vergi"], rows: [[800, 500, 120, 30, 30]] },
      opts: ["150 bin TL", "180 bin TL", "120 bin TL", "300 bin TL"],
      a: 2,
      why: "Brüt kâr 800 − 500 = 300; faaliyet kârı 300 − 120 = 180; vergi öncesi 180 − 30 = 150; net kâr 150 − 30 = 120. A en çekici yanlış: vergiyi düşmeyi unutur (vergi öncesi kâr)." },
    { q: "Bir işletmenin geliri 500, brüt kârı 200, faaliyet kârı 90 ve net kârı 40 bin TL'dir. Faaliyet kâr marjı kaçtır?",
      opts: ["%18", "%40", "%8", "%45"],
      a: 0,
      why: "Faaliyet kâr marjı = faaliyet kârı ÷ gelir = 90 ÷ 500 = %18. C en çekici yanlış: 40 ÷ 500 = %8 net kâr marjıdır." },
    { q: "Bir kafenin net kârı geçen yıl 40.000 TL, bu yıl 50.000 TL'dir. Net kârdaki yüzde değişim kaçtır?",
      opts: ["%10", "%20", "%80", "%25"],
      a: 3,
      why: "(50.000 − 40.000) ÷ 40.000 × 100 = %25. B en çekici yanlış: 10.000 ÷ 50.000 yapar; yüzde değişim başlangıç değerine bölünür." },
    { q: "Bir mağazanın brüt kâr marjı %60'tan %52'ye düştü; mağazanın satış fiyatları değişmedi. Hangisi bu düşüşün en olası nedenidir?",
      opts: ["Reklam ve pazarlama giderleri arttı", "Ham madde ve tedarik maliyetleri (COGS) arttı", "Banka faiz giderleri arttı", "Vergi oranı arttı"],
      a: 1,
      why: "Brüt kâr marjı yalnızca gelir ve COGS'u içerir; fiyatlar aynıysa düşüş doğrudan maliyetlerin artmasından gelir. A en çekici yanlış: reklam faaliyet giderlerindedir ve brüt marjı etkilemez." },
    { q: "Selim aylık net maaşı 10.000 TL olduğu halde bütçesini brüt maaşı olan 12.500 TL üzerinden yaptı ve her ay açık verdi. Bütçe hakkında hangisi doğrudur?",
      opts: ["Bütçe, vergi ve kesintiler sonrası beklenen net gelire göre yapılmalıdır; böylece birikim, harcama ve borç ödemesi gerçekçi planlanır", "Brüt maaşa göre bütçe yapmak doğrudur, çünkü kesintiler sonradan geri alınır", "Bütçe yalnızca harcamaları gösterir; birikimi içermez", "Bütçe yalnızca işletmeler içindir"],
      a: 0,
      why: "Tüketici bütçesi beklenen net geliri ve tüm planlı birikim ve giderleri (borç ödemeleri dahil) içerir. B en çekici yanlış: kesintiler geri verilmez, harcanabilir gelir net maaştır." }
  ]
};
