/* Kitora not defteri · mc104 · 1.3 Mutlak ve Karşılaştırmalı Üstünlük
   Kaynak: ap-videolar/src/episodes/mc104 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc104",
  ozet: "Ünitenin en çok kafa karıştıran konusu: kim neyi üretmeli? İki üründe de daha iyi olan bir ülke bile ticaretten kazanır, çünkü asıl ölçü ham sayı değil *opportunity cost*'tur. Bu defterde *absolute advantage* ile *comparative advantage* farkını, *output* ve *input question* ayrımını, kesri doğru kurmanın hack'lerini (O.O.O. ve I.O.U.) ve sınavın en sevdiği tuzakları göreceksin.",
  bolumler: [
    {
      baslik: "İki işte de hızlı olan Deniz",
      bloklar: [
        { tip: "hikaye", ikon: "🎪", baslik: "Okul kermesi",
          metin: "Okulda kermes var. Kulübün standı için iki iş lazım: pankart ve bileklik. Deniz ikisinde de Mert'ten hızlı: pankartı da daha çabuk yapıyor, bilekliği de. O zaman bütün işi Deniz mi yapmalı, Mert de kenarda mı oturmalı? Şaşırtıcı cevap: **hayır**. İş bölümü yaparlarsa stand daha çok şey üretir. Neden mi? Ünitenin en çok kafa karıştıran konusu tam burada." },
        { tip: "not", metin: "Bu konu zor, kafan karışırsa normal. Kural basit: **her zaman aynı dört soru** sorulur ve her biri bir öncekine yaslanır." },
        { tip: "adimlar", baslik: "Tabloya hep sorulan dört soru", adimlar: [
            { baslik: "1 · Kim daha iyi?", metin: "Ham sayılara bak: *absolute advantage*." },
            { baslik: "2 · Fırsat maliyeti ne?", metin: "Bir birim için vazgeçilen öteki ürünü bul: *opportunity cost*." },
            { baslik: "3 · Kim neyi üretmeli?", metin: "Daha düşük fırsat maliyetine bak: *comparative advantage*." },
            { baslik: "4 · Hangi oranla takas edilmeli?", metin: "İki fırsat maliyeti arasındaki oran: *terms of trade* (sonraki bölümde)." }
          ] }
      ]
    },
    {
      baslik: "Tabloyu kurmak: *output question*",
      bloklar: [
        { tip: "not", metin: "Sınavda bu konu hep tabloyla gelir. Kural: **ülkeler solda (satır), ürünler üstte (sütun).** Japonya aynı kaynaklarla bir günde ya 30 telefon ya da 10 tişört üretebiliyor. Türkiye ya 8 telefon ya da 8 tişört." },
        { tip: "tablo", baslik: "Japonya ve Türkiye: bir günde üretilen miktar", head: ["", "Telefon", "Tişört"], rows: [["Japonya", "30", "10"], ["Türkiye", "8", "8"]], not: "Kaynaklar sabit, üretilen miktar veriliyor: buna *output question* denir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📦", terim: "Output question", tr: "çıktı sorusu", tanim: "Kaynak (zaman, işçi) sabit; tabloda üretilen **miktar** verilir. Büyük sayı iyidir.", ornek: "\"Bir günde 30 telefon\" demek Japonya'nın çıktısı." },
            { ikon: "⏱️", terim: "Input question", tr: "girdi sorusu", tanim: "Üretilen miktar sabit (bir birim); tabloda gereken **saat, işçi, dönüm** verilir. Küçük sayı iyidir.", ornek: "\"Bir pankart 2 saat\" demek Deniz'in girdisi." }
          ] },
        { tip: "tuzak", baslik: "Önce başlığa bak", metin: "Tabloyu okumadan önce başlığın ne dediğine bak: \"kaç tane\" mi, \"kaç saat\" mi?", yanlis: "Her tabloda büyük sayı iyidir.", dogru: "\"Units produced / output per day\" → *output* (büyük sayı iyi). \"Hours / workers / acres to produce one\" → *input* (küçük sayı iyi)." }
      ]
    },
    {
      baslik: "*Absolute advantage*: mutlak üstünlük",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🏆", terim: "Absolute advantage", tr: "mutlak üstünlük", tanim: "Aynı kaynakla **daha çok** üretmek ya da aynı miktarı **daha az** kaynakla üretmek. Ham sayılar karşılaştırılır.", ornek: "Japonya telefonda 30 > 8, tişörtte 10 > 8: iki üründe de üstün." }
          ] },
        { tip: "tablo", baslik: "Output: büyük sayı kazanır", head: ["", "Telefon", "Tişört"], rows: [["Japonya", "30 ✓", "10 ✓"], ["Türkiye", "8", "8"]], vurgu: 0, not: "Telefonda 30 > 8. Tişörtte 10 > 8. Japonya iki üründe de *absolute advantage*'a sahip." },
        { tip: "ikili", sol: { ikon: "📦", baslik: "*Output question*", maddeler: ["Tabloda üretilen miktar var", "Büyük sayı *absolute advantage* verir", "Diğer ürünün sayısı fırsat maliyetinde üste (O.O.O.)"] },
          sag: { ikon: "⏱️", baslik: "*Input question*", maddeler: ["Tabloda bir birim için gereken saat/işçi var", "Küçük sayı *absolute advantage* verir", "Diğer ürünün sayısı fırsat maliyetinde alta (I.O.U.)"] },
          oyun: [
            { metin: "Tabloda \"bir günde üretilen telefon sayısı\" yazıyor.", cevap: "sol", neden: "Üretilen miktar verilmiş: *output*." },
            { metin: "Tabloda \"bir pankart için gereken saat\" yazıyor.", cevap: "sag", neden: "Bir birim için gereken girdi: *input*." },
            { metin: "Absolute advantage'ı daha küçük sayı olan ülke alır.", cevap: "sag", neden: "Daha az saatte yapmak daha iyi: *input*." },
            { metin: "Absolute advantage'ı daha büyük sayı olan ülke alır.", cevap: "sol", neden: "Aynı kaynakla daha çok üretmek: *output*." },
            { metin: "Bir günde dokunan halı sayısı.", cevap: "sol", neden: "Miktar: *output*." }
          ] },
        { tip: "not", metin: "O zaman Japonya'nın Türkiye'yle ticarete ihtiyacı yok, değil mi? **Dur, burada çoğu kişi yanılıyor.** Ticaretin kimin neyi üreteceği *absolute* değil, *comparative advantage* ile belirlenir. Bunun için önce fırsat maliyetini hesaplamamız gerek." },
        { tip: "tuzak", baslik: "Üstünse ticaret gereksiz mi?", metin: "İki üründe de *absolute advantage*'a sahip olmak, ticaretten kazanmamak demek değildir.", yanlis: "Her şeyi daha iyi yapan ülkenin ticarete ihtiyacı yoktur.", dogru: "Ticaret kararı *comparative advantage* (daha düşük fırsat maliyeti) ile verilir; iki üründe de üstün olan ülke bile uzmanlaşıp kazanır." }
      ]
    },
    {
      baslik: "Asıl ölçü: *opportunity cost*",
      bloklar: [
        { tip: "not", metin: "Maliyet **para değil, vazgeçtiğin öteki üründür.** Bir birim için vazgeçtiğin diğer ürünü bulacağız." },
        { tip: "formul", parcalar: [
            { t: "Birim fırsat maliyeti", alt: "per-unit opportunity cost" }, "=",
            { t: "Vazgeçilen", alt: "units given up" }, "÷",
            { t: "Kazanılan", alt: "units gained" }
          ], aciklama: "Bölünen hep vazgeçtiğin ürün, bölen hep kazandığın ürün." },
        { tip: "grafik", baslik: "PPC'nin eğimi fırsat maliyetidir", xlabel: "Telefon", ylabel: "Tişört", xmax: 32, ymax: 12,
          xticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }],
          ogeler: [
            { id: "jp", tip: "cizgi", renk: 0, from: [0, 10], to: [30, 0], etiket: "Japonya PPC" },
            { id: "e1", tip: "ok", renk: 1, from: [12, 6], to: [15, 6], gizli: true },
            { id: "e2", tip: "ok", renk: 2, from: [15, 6], to: [15, 5], gizli: true },
            { id: "et", tip: "yazi", x: 19.5, y: 7.3, metin: "+3 telefon, −1 tişört", gizli: true },
            { id: "tr", tip: "cizgi", renk: 3, from: [0, 8], to: [8, 0], etiket: "Türkiye PPC", gizli: true },
            { id: "tt", tip: "yazi", x: 12.3, y: 2.2, metin: "Türkiye: 1 telefon = 1 tişört", gizli: true }
          ],
          durumlar: [
            { metin: "Japonya ya 30 telefon ya 10 tişört yapar. PPC düz bir çizgi (sabit fırsat maliyeti)." },
            { metin: "Eğime bak: 12 telefondan 15'e çıkarken (+3) tişört 6'dan 5'e iniyor (−1). Eğim = 1 tişörtün fırsat maliyeti = **3 telefon**.", goster: ["e1", "e2", "et"] },
            { metin: "Türkiye 8 telefon ya da 8 tişört yapabilir: 1 telefon = 1 tişört. Çizgisi Japonya'nın içinde (**her şeyde geride**), ama eğimi farklı.", goster: ["tr", "tt"] },
            { metin: "Japonya'nın çizgisi daha yatay: telefon orada daha ucuz. Türkiye'nin çizgisi daha dik: telefon orada pahalı. Dik eğri, x ekseni malının pahalı olduğunu gösterir.", gizle: ["e1", "e2", "et"] }
          ] },
        { tip: "ornek", baslik: "Japonya'nın fırsat maliyetleri", durum: "Japonya bir günde ya 30 telefon ya da 10 tişört üretebiliyor (output question). 1 tişörtün ve 1 telefonun fırsat maliyeti nedir?",
          adimlar: ["Başlığa bak: output question. Hack: *Other goes Over*, diğer ürünün sayısı üste.", "1 tişört için vazgeçilen telefon: 30 ÷ 10 = 3 telefon.", "1 telefon için vazgeçilen tişört: 10 ÷ 30 = ⅓ tişört.", "Mantık kontrolü: 10 tişört yaparsan 30 telefondan vazgeçersin; tanesi 3 telefon."],
          sonuc: "Japonya: 1 tişört = ==3 telefon==; 1 telefon = ==⅓ tişört==. İkisi birbirinin tersidir (*reciprocal*)." },
        { tip: "kavramlar", kartlar: [
            { ikon: "💱", terim: "Opportunity cost", tr: "fırsat maliyeti", tanim: "Bir seçimi yaparken vazgeçilen en iyi alternatif. Burada: bir birim üretmek için vazgeçilen **diğer ürün** miktarı (para değil).", ornek: "1 tişört = 3 telefon." },
            { ikon: "🔄", terim: "Reciprocal", tr: "ters", tanim: "Bir ürünün fırsat maliyeti diğerininkinin tersidir: 1 T = 3 P ise 1 P = ⅓ T.", ornek: "Japonya: 3 telefon ↔ ⅓ tişört." },
            { ikon: "🔼", terim: "Other goes Over (O.O.O.)", tr: "diğeri üste", tanim: "*Output question*'da fırsat maliyeti kesrinde diğer ürünün sayısı üste yazılır.", ornek: "1 tişört = telefon ÷ tişört = 30 ÷ 10." }
          ] },
        { tip: "tuzak", baslik: "Kesri ters kurmak", metin: "\"1 tişört 3 telefon mu, ⅓ telefon mu?\" diye kararsız kalırsan mantık kontrolü yap.", yanlis: "30 ÷ 10 yerine 10 ÷ 30 yazıp tişörtün maliyetini ⅓ bulmak.", dogru: "Önce o ürünün vazgeçtiği öteki ürünü düşün (10 tişört → 30 telefon kaybı), sonra *reciprocal* ile kontrol et." }
      ]
    },
    {
      baslik: "*Comparative advantage*: karşılaştırmalı üstünlük",
      bloklar: [
        { tip: "ornek", baslik: "Türkiye'nin fırsat maliyetleri", durum: "Türkiye bir günde ya 8 telefon ya da 8 tişört üretebiliyor. 1 telefonun ve 1 tişörtün fırsat maliyeti nedir?",
          adimlar: ["Output question, diğeri üste.", "1 telefon: 8 tişört ÷ 8 telefon = 1 tişört.", "1 tişört: 8 telefon ÷ 8 tişört = 1 telefon."],
          sonuc: "Türkiye: 1 telefon = ==1 tişört==, 1 tişört = ==1 telefon==." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Comparative advantage", tr: "karşılaştırmalı üstünlük", tanim: "Bir ürünü diğer ülkeden **daha düşük fırsat maliyetiyle** üretebilmek. Ülke bu üründe uzmanlaşmalı.", ornek: "Telefon: Japonya (⅓ T), tişört: Türkiye (1 P)." }
          ] },
        { tip: "tablo", baslik: "Fırsat maliyetlerini yan yana koy", head: ["", "1 telefon", "1 tişört"], rows: [
            ["Japonya", "⅓ tişört", "3 telefon"],
            ["Türkiye", "1 tişört", "1 telefon"],
            ["Kazanan", "Japonya (⅓ < 1)", "Türkiye (1 < 3)"]
          ], vurgu: 2, not: "Düşük fırsat maliyeti = *comparative advantage*. Telefonda Japonya, tişörtte Türkiye." },
        { tip: "adimlar", baslik: "Karşılaştırma nasıl yapılır?", adimlar: [
            { baslik: "Telefon", metin: "Bir telefon Japonya'ya ⅓ tişörte, Türkiye'ye 1 tişörte mal oluyor. ⅓ < 1: telefonda Japonya." },
            { baslik: "Tişört", metin: "Bir tişört Japonya'ya 3 telefona, Türkiye'ye 1 telefona mal oluyor. 1 < 3: tişörtte Türkiye." }
          ] },
        { tip: "ikili", sol: { ikon: "🏆", baslik: "*Absolute advantage*", maddeler: ["Ham sayılara bak", "Çıktıda büyük, girdide küçük sayı", "İki üründe birden olabilir"] },
          sag: { ikon: "⚖️", baslik: "*Comparative advantage*", maddeler: ["Fırsat maliyetine bak", "Daha düşük maliyet kazanır", "İki üründe birden olamaz"] },
          oyun: [
            { metin: "Japonya hem telefonda hem tişörtte daha çok üretiyor.", cevap: "sol", neden: "Ham sayılar: iki üründe birden mümkün: *absolute*." },
            { metin: "Türkiye tişörtü Japonya'dan daha ucuza (daha az telefondan vazgeçerek) üretiyor.", cevap: "sag", neden: "Fırsat maliyeti düşük: *comparative*." },
            { metin: "Bir ülke iki ürünün ikisinde de bu üstünlüğe sahip olamaz.", cevap: "sag", neden: "Fırsat maliyetleri birbirinin tersidir; biri birinde, öbürü diğerinde kazanır." },
            { metin: "Aynı kaynakla daha çok telefon çıkarmak.", cevap: "sol", neden: "Çıktı olarak ham üstünlük: *absolute*." }
          ] },
        { tip: "tuzak", baslik: "Yazı tura gibi", metin: "Bir ülke iki üründe birden *comparative advantage*'a sahip olamaz. Cevap yazı tura gibidir: biri birinde, öbürü diğerinde.", yanlis: "Japonya her şeyde iyi, o yüzden iki üründe de comparative advantage Japonya'dadır.", dogru: "Bir ürünün fırsat maliyeti düşükse öteki ürününki yüksektir; yani üstünlük ==bölüşülür== (iki olası cevap, hangisinin kimde olduğuna maliyete bakarak karar ver)." }
      ]
    },
    {
      baslik: "Uzmanlaş, ihraç et, ithal et",
      bloklar: [
        { tip: "adimlar", baslik: "Her ülke ne yapar?", adimlar: [
            { baslik: "Uzmanlaş", metin: "Her ülke *comparative advantage*'ı olan üründe uzmanlaşır." },
            { baslik: "İhraç et", metin: "Japonya telefonu, Türkiye tişörtü dışarı satar (*export*)." },
            { baslik: "İthal et", metin: "Diğerini dışarıdan alır (*import*): Japonya tişört, Türkiye telefon." },
            { baslik: "İki taraf kazanır", metin: "Japonya'nın kendi tişörtü ona 3 telefona patlıyor. Tişörtü Türkiye'den bundan ucuza alabilirse iki ülke de kazanır." }
          ] },
        { tip: "tablo", baslik: "Kim neyi üretir, kim neyi ithal eder?", head: ["", "Üretir ve ihraç eder", "İthal eder"], rows: [["Japonya", "Telefon", "Tişört"], ["Türkiye", "Tişört", "Telefon"]], not: "Kural: ihraç = *comparative advantage*'ı olan; ithal = olmayan." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Specialization", tr: "uzmanlaşma", tanim: "Her şeyi kendin yapmak yerine *comparative advantage*'ına sahip olduğun ürüne odaklanmak.", ornek: "Deniz pankart, Mert bileklik yapar." },
            { ikon: "🚢", terim: "Export", tr: "ihracat", tanim: "Uzmanlaştığın ürünü dışarıya satmak.", ornek: "Japonya telefon ihraç eder." },
            { ikon: "📥", terim: "Import", tr: "ithalat", tanim: "Üretmediğin ürünü dışarıdan almak.", ornek: "Japonya tişört ithal eder." }
          ] },
        { tip: "tuzak", baslik: "İhraç mı, ithal mi?", metin: "Sınav sorusu \"X ne ithal eder?\" diyorsa X'in *comparative advantage*'ı olmayan ürünü arıyorsun.", yanlis: "\"Uzmanlaşır\" ile \"ithal eder\" aynı ürünü anlatır.", dogru: "\"Uzmanlaşır / ihraç eder\" → CA'sı **olan** ürün. \"İthal eder\" → CA'sı **olmayan** ürün." }
      ]
    },
    {
      baslik: "Kermese dönüş: *input question*",
      bloklar: [
        { tip: "not", metin: "Bu kez tablo bir tane yapmak için gereken **saati** veriyor: bu bir *input question*. Dikkat: burada ==küçük sayı iyidir==." },
        { tip: "tablo", baslik: "Deniz ve Mert: bir tane için gereken saat", head: ["", "Pankart", "Bileklik"], rows: [["Deniz", "2 saat", "1 saat"], ["Mert", "6 saat", "2 saat"]], not: "Deniz ikisinde de daha az saat harcıyor (2 < 6 ve 1 < 2): iki işte de *absolute advantage* onda." },
        { tip: "formul", parcalar: [
            { t: "Input question", alt: "tabloda saat var" }, "→",
            { t: "Other goes Under", alt: "diğer ürünün sayısı alta (I.O.U.)" }
          ], aciklama: "*Output question*'da diğeri üste (O.O.O.), *input question*'da diğeri alta (I.O.U.)." },
        { tip: "ornek", baslik: "Deniz ve Mert'in fırsat maliyeti", durum: "Deniz bir pankartı 2 saatte, bir bilekliği 1 saatte yapıyor. Mert pankartı 6 saatte, bilekliği 2 saatte. Pankartta ve bileklikte comparative advantage kimde, kermese kim ne yapmalı?",
          adimlar: ["Input question; diğeri alta.", "Deniz'in 1 pankartı = 2 ÷ 1 = 2 bileklik. Mantık: o 2 saatte 2 bileklik yapabilirdi.", "Mert'in 1 pankartı = 6 ÷ 2 = 3 bileklik. Mantık: 6 saatte 3 bileklik.", "Pankart: 2 < 3 → Deniz'e daha ucuz: pankartta *comparative advantage* Deniz'de.", "Bileklik: Deniz'in 1 bilekliği = 1 ÷ 2 = ½ pankart; Mert'in 1 bilekliği = 2 ÷ 6 = ⅓ pankart. ⅓ < ½ → bilekliğe Mert daha ucuz."],
          sonuc: "Pankartta Deniz (2 < 3), bileklikte Mert (⅓ < ½). Kermesin cevabı: ==Deniz pankart, Mert bileklik yapar.==" },
        { tip: "tablo", baslik: "Deniz ve Mert'in fırsat maliyetleri", head: ["", "1 pankart", "1 bileklik"], rows: [["Deniz", "2 bileklik", "½ pankart"], ["Mert", "3 bileklik", "⅓ pankart"], ["Kazanan", "Deniz (2 < 3)", "Mert (⅓ < ½)"]], vurgu: 2 },
        { tip: "tuzak", baslik: "Küçük sayı mı, büyük sayı mı?", metin: "Input sorusunda Deniz'in sayıları küçük diye \"daha kötü\" sanma.", yanlis: "Küçük sayı kötüdür, büyük sayı iyidir (her tabloda).", dogru: "*Input question*'da küçük sayı iyidir: daha az saatte üretmek demek. Deniz iki işte de *absolute advantage*'a sahip." }
      ]
    },
    {
      baslik: "Tuzak: aynı sayılar, ters sonuç",
      bloklar: [
        { tip: "not", metin: "Japonya tablosundaki 30-10-8-8 sayıları aslında bir tane için gereken **saat** olsaydı her şey tersine dönerdi." },
        { tip: "tablo", baslik: "Aynı sayılar, iki okuma", head: ["", "Output olarak okursan", "Input olarak okursan"], rows: [
            ["Absolute advantage", "Japonya (iki üründe)", "Türkiye (8 < 30 ve 8 < 10; iki üründe)"],
            ["Telefonda comparative", "Japonya (⅓ < 1)", "Türkiye (1 < 3)"],
            ["Tişörtte comparative", "Türkiye (1 < 3)", "Japonya (⅓ < 1)"],
            ["Fırsat maliyeti hack'i", "Diğer üste (O.O.O.)", "Diğer alta (I.O.U.)"]
          ], not: "Aynı sayılar, tablo başlığına göre ters sonuç verir. Önce başlığa bak: kaç tane mi, kaç saat mi?" },
        { tip: "formul", parcalar: [
            { t: "Çapraz çarp", alt: "toplama değil, çarpma" },
            { t: "Output", alt: "büyük çarpım kazananları gösterir" },
            { t: "Input", alt: "küçük çarpım kazananları gösterir" }
          ], aciklama: "Hızlı kontrol: Japonya telefon × Türkiye tişört = 30 × 8 = 240; Türkiye telefon × Japonya tişört = 8 × 10 = 80. Output'ta 240 olan hücreler (Japonya telefon, Türkiye tişört) kazanır; input okunsa 80 olan hücreler (Türkiye telefon, Japonya tişört) kazanırdı." },
        { tip: "ornek", baslik: "Çapraz çarpım kontrolü (kermes)", durum: "Kermes input tablosunda hızlı kontrol: Deniz–pankart ve Mert–bileklik hücrelerini çapraz çarp, öteki köşegenle karşılaştır.",
          adimlar: ["Deniz pankart × Mert bileklik = 2 × 2 = 4.", "Mert pankart × Deniz bileklik = 6 × 1 = 6.", "Input question: küçük çarpım (4) kazananları gösterir: Deniz pankart, Mert bileklik."],
          sonuc: "Çapraz çarpım da aynı cevabı verir: ==Deniz pankart, Mert bileklik.== Çapraz çarpım yalnızca hızlı kontroldür; asıl yöntemi bil." },
        { tip: "tuzak", baslik: "Çapraz çarpım tuzağı", metin: "Çapraz çarpımda toplama yapmak ya da yönü karıştırmak yanlış sonuç verir.", yanlis: "Çapraz hücreleri toplayıp büyük olanı seçmek.", dogru: "Çarp; *output*'ta büyük çarpım, *input*'ta küçük çarpım kazananları gösterir." },
        { tip: "tuzak", baslik: "Para değil, ürün", metin: "Fırsat maliyeti bir paranın değil, vazgeçilen ürünün adıdır.", yanlis: "Japonya'nın tişört maliyeti 20 dolardır.", dogru: "Japonya'nın 1 tişörtü 3 telefona mal olur: maliyet hep ==öteki üründür==." }
      ]
    },
    {
      baslik: "Sınav sorusu: buğday ve kumaş",
      bloklar: [
        { tip: "tablo", baslik: "Bir birim için gereken saat (input)", head: ["", "Buğday", "Kumaş"], rows: [["A ülkesi", "6", "3"], ["B ülkesi", "4", "4"]] },
        { tip: "ornek", baslik: "Buğdayda comparative advantage kimde?", durum: "Tablo, bir birim üretmek için gereken saati veriyor. A ülkesinde buğday 6 saat, kumaş 3 saat. B ülkesinde buğday 4 saat, kumaş 4 saat. Buğdayda comparative advantage hangi ülkede?",
          adimlar: ["Başlık: saat → input question, diğeri alta.", "A'nın 1 buğdayı = 6 ÷ 3 = 2 kumaş.", "B'nin 1 buğdayı = 4 ÷ 4 = 1 kumaş.", "1 < 2: buğday B'ye daha ucuz.", "Kontrol: kumaşta A (1 kumaş = ½ buğday < 1 buğday)."],
          sonuc: "Buğdayda comparative advantage ==B ülkesinde==. (Absolute advantage: buğdayda B (4 < 6), kumaşta A (3 < 4); çeldirici \"A, çünkü kumaşı daha az saatte yapıyor\" yanlış, çünkü soru buğdayı soruyor.)" }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Absolute advantage* ham sayıdır: *output question*'da büyük sayı, *input question*'da küçük sayı kazanır. Önce başlığa bak.",
            "*Opportunity cost* = vazgeçilen ÷ kazanılan; para değil, öteki üründür. İki yönü birbirinin *reciprocal*'ıdır (1 T = 3 P ↔ 1 P = ⅓ T).",
            "Hack: *Other goes Over* (output), *Other goes Under* (input).",
            "*Comparative advantage*, daha düşük fırsat maliyeti demektir; bir ülke iki üründe birden sahip olamaz (yazı tura).",
            "Her ülke CA'sı olan ürünü üretir ve ihraç eder, öteki ürünü ithal eder.",
            "İki üründe de üstün olan ülke de (Japonya, Deniz) uzmanlaşıp ticaretten kazanır.",
            "Aynı sayılar, output ya da input okunmasına göre ters sonuç verir.",
            "Çapraz çarpım hızlı kontrol: output'ta büyük çarpım, input'ta küçük çarpım kazananları gösterir (toplama değil, çarpma)."
          ] }
      ]
    }
  ]
};
