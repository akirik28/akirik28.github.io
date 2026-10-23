/* Kitpath not defteri · mc104 · 1.3 Mutlak ve Karşılaştırmalı Üstünlük
   Kaynak: ap-videolar/src/episodes/mc104 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "mc104",
  amac: "Bu konu *absolute* ve *comparative advantage* farkını anlatıyor: kim neyi üretmeli? İki üründe de daha iyi olan bir ülkenin bile neden ticaretten kazandığını ve tabloyu doğru okuyup fırsat maliyetini nasıl bulacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Kim neyi üretmeli? Dört soru",
      kisa: "Bu konu hep aynı dört soruyla çözülür; her biri öncekine yaslanır.",
      bloklar: [
        { tip: "hikaye", ikon: "🎪", baslik: "Okul kermesi",
          metin: "Kermes standı için pankart ve bileklik lazım. Deniz ikisinde de Mert'ten hızlı. Bütün işi Deniz mi yapmalı? Şaşırtıcı cevap: **hayır**, iş bölümü yaparlarsa stand daha çok şey üretir." },
        { tip: "adimlar", baslik: "Tabloya hep sorulan dört soru", adimlar: [
            { baslik: "1 · Kim daha iyi?", metin: "Ham sayılara bak: *absolute advantage*." },
            { baslik: "2 · Fırsat maliyeti ne?", metin: "Bir birim için vazgeçilen öteki ürünü bul: *opportunity cost*." },
            { baslik: "3 · Kim neyi üretmeli?", metin: "Daha düşük fırsat maliyetine bak: *comparative advantage*." },
            { baslik: "4 · Hangi oranla takas edilmeli?", metin: "İki fırsat maliyeti arasındaki oran: *terms of trade* (sonraki bölümde)." }
          ] }
      ]
    },
    {
      baslik: "Tabloyu okumak: *output*, *input* ve *absolute advantage*",
      kisa: "Output'ta büyük sayı, input'ta küçük sayı mutlak üstünlük verir.",
      bloklar: [
        { tip: "tablo", baslik: "Japonya ve Türkiye: bir günde üretilen miktar", head: ["", "Telefon", "Tişört"], rows: [["Japonya", "30 ✓", "10 ✓"], ["Türkiye", "8", "8"]], vurgu: 0, not: "Kural: ülkeler solda (satır), ürünler üstte (sütun). Telefonda 30 > 8, tişörtte 10 > 8: Japonya iki üründe de *absolute advantage*'a sahip." },
        { tip: "kavramlar", kartlar: [
            { ikon: "📦", terim: "Output question", tr: "çıktı sorusu", tanim: "Kaynak (zaman, işçi) sabit; tabloda üretilen **miktar** verilir. Büyük sayı iyidir.", ornek: "\"Bir günde 30 telefon\" Japonya'nın çıktısı." },
            { ikon: "⏱️", terim: "Input question", tr: "girdi sorusu", tanim: "Üretilen miktar sabit (bir birim); tabloda gereken **saat, işçi, dönüm** verilir. Küçük sayı iyidir.", ornek: "\"Bir pankart 2 saat\" Deniz'in girdisi." },
            { ikon: "🏆", terim: "Absolute advantage", tr: "mutlak üstünlük", tanim: "Aynı kaynakla **daha çok** üretmek ya da aynı miktarı **daha az** kaynakla üretmek. Ham sayılar karşılaştırılır.", ornek: "Japonya telefonda 30 > 8, tişörtte 10 > 8: iki üründe de üstün." }
          ] },
        { tip: "ikili", sol: { ikon: "📦", baslik: "*Output question*", maddeler: ["Tabloda üretilen miktar var", "Büyük sayı *absolute advantage* verir", "Diğer ürünün sayısı fırsat maliyetinde üste (O.O.O.)"] },
          sag: { ikon: "⏱️", baslik: "*Input question*", maddeler: ["Tabloda bir birim için gereken saat/işçi var", "Küçük sayı *absolute advantage* verir", "Diğer ürünün sayısı fırsat maliyetinde alta (I.O.U.)"] },
          oyun: [
            { metin: "Tabloda \"bir günde üretilen telefon sayısı\" yazıyor.", cevap: "sol", neden: "Üretilen miktar verilmiş: *output*." },
            { metin: "Tabloda \"bir pankart için gereken saat\" yazıyor.", cevap: "sag", neden: "Bir birim için gereken girdi: *input*." },
            { metin: "Absolute advantage'ı daha küçük sayı olan ülke alır.", cevap: "sag", neden: "Daha az saatte yapmak daha iyi: *input*." },
            { metin: "Absolute advantage'ı daha büyük sayı olan ülke alır.", cevap: "sol", neden: "Aynı kaynakla daha çok üretmek: *output*." }
          ] },
        { tip: "tuzak", baslik: "Önce başlığa bak", metin: "Tabloyu okumadan önce başlığın ne dediğine bak: \"kaç tane\" mi, \"kaç saat\" mi?", yanlis: "Her tabloda büyük sayı iyidir.", dogru: "\"Units produced / output per day\" → *output* (büyük sayı iyi). \"Hours / workers / acres to produce one\" → *input* (küçük sayı iyi)." }
      ]
    },
    {
      baslik: "Asıl ölçü: *opportunity cost*",
      kisa: "Maliyet para değil, vazgeçtiğin öteki üründür: vazgeçilen ÷ kazanılan.",
      bloklar: [
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
            { metin: "Eğime bak: 12 telefondan 15'e çıkarken (+3) tişört 6'dan 5'e iniyor (−1). Eğim = 1 telefonun fırsat maliyeti = **⅓ tişört** (tersinden: 1 tişört = 3 telefon).", goster: ["e1", "e2", "et"] },
            { metin: "Türkiye 8 telefon ya da 8 tişört yapabilir: 1 telefon = 1 tişört. Çizgisi Japonya'nın içinde (**her şeyde geride**), ama eğimi farklı.", goster: ["tr", "tt"] },
            { metin: "Japonya'nın çizgisi daha yatay: telefon orada daha ucuz. Türkiye'nin çizgisi daha dik: telefon orada pahalı. Dik eğri, x ekseni malının pahalı olduğunu gösterir.", gizle: ["e1", "e2", "et"] }
          ] },
        { tip: "ornek", baslik: "Japonya'nın fırsat maliyetleri", durum: "Japonya bir günde ya 30 telefon ya da 10 tişört üretebiliyor (output question). 1 tişörtün ve 1 telefonun fırsat maliyeti nedir?",
          adimlar: ["Başlığa bak: output question. Hack: *Other goes Over*, diğer ürünün sayısı üste.", "1 tişört için vazgeçilen telefon: 30 ÷ 10 = 3 telefon.", "1 telefon için vazgeçilen tişört: 10 ÷ 30 = ⅓ tişört.", "Mantık kontrolü: 10 tişört yaparsan 30 telefondan vazgeçersin; tanesi 3 telefon. Kesri ters kurarsan (⅓ telefon) bu kontrol seni yakalar."],
          sonuc: "Japonya: 1 tişört = ==3 telefon==; 1 telefon = ==⅓ tişört==. İkisi birbirinin tersidir (*reciprocal*). Maliyet para değil, ==öteki üründür==." },
        { tip: "kavramlar", kartlar: [
            { ikon: "💱", terim: "Opportunity cost", tr: "fırsat maliyeti", tanim: "Bir birim üretmek için vazgeçilen **diğer ürün** miktarı (para değil).", ornek: "1 tişört = 3 telefon." },
            { ikon: "🔄", terim: "Reciprocal", tr: "ters", tanim: "Bir ürünün fırsat maliyeti diğerininkinin tersidir: 1 T = 3 P ise 1 P = ⅓ T.", ornek: "Japonya: 3 telefon ↔ ⅓ tişört." },
            { ikon: "🔼", terim: "Other goes Over (O.O.O.)", tr: "diğeri üste", tanim: "*Output question*'da fırsat maliyeti kesrinde diğer ürünün sayısı üste yazılır.", ornek: "1 tişört = telefon ÷ tişört = 30 ÷ 10." }
          ] }
      ]
    },
    {
      baslik: "*Comparative advantage*: karşılaştırmalı üstünlük",
      kisa: "Daha düşük fırsat maliyeti olan kazanır; üstünlük iki ülke arasında bölüşülür.",
      bloklar: [
        { tip: "tablo", baslik: "Fırsat maliyetlerini yan yana koy", head: ["", "1 telefon", "1 tişört"], rows: [
            ["Japonya", "⅓ tişört", "3 telefon"],
            ["Türkiye", "1 tişört", "1 telefon"],
            ["Kazanan", "Japonya (⅓ < 1)", "Türkiye (1 < 3)"]
          ], vurgu: 2, not: "Türkiye (output, diğeri üste): 1 telefon = 8 ÷ 8 = 1 tişört; 1 tişört = 8 ÷ 8 = 1 telefon. Düşük fırsat maliyeti = *comparative advantage*: telefonda Japonya, tişörtte Türkiye." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Comparative advantage", tr: "karşılaştırmalı üstünlük", tanim: "Bir ürünü diğer ülkeden **daha düşük fırsat maliyetiyle** üretebilmek. Ülke bu üründe uzmanlaşmalı.", ornek: "Telefon: Japonya (⅓ T), tişört: Türkiye (1 P)." }
          ] },
        { tip: "ikili", sol: { ikon: "🏆", baslik: "*Absolute advantage*", maddeler: ["Ham sayılara bak", "Çıktıda büyük, girdide küçük sayı", "İki üründe birden olabilir"] },
          sag: { ikon: "⚖️", baslik: "*Comparative advantage*", maddeler: ["Fırsat maliyetine bak", "Daha düşük maliyet kazanır", "İki üründe birden olamaz"] },
          oyun: [
            { metin: "Japonya hem telefonda hem tişörtte daha çok üretiyor.", cevap: "sol", neden: "Ham sayılar: iki üründe birden mümkün: *absolute*." },
            { metin: "Türkiye tişörtü Japonya'dan daha ucuza (daha az telefondan vazgeçerek) üretiyor.", cevap: "sag", neden: "Fırsat maliyeti düşük: *comparative*." },
            { metin: "Bir ülke iki ürünün ikisinde de bu üstünlüğe sahip olamaz.", cevap: "sag", neden: "Fırsat maliyetleri birbirinin tersidir; biri birinde, öbürü diğerinde kazanır." },
            { metin: "Aynı kaynakla daha çok telefon çıkarmak.", cevap: "sol", neden: "Çıktı olarak ham üstünlük: *absolute*." }
          ] },
        { tip: "tuzak", baslik: "Yazı tura gibi", metin: "Bir ülke iki üründe birden *comparative advantage*'a sahip olamaz. Cevap yazı tura gibidir: biri birinde, öbürü diğerinde.", yanlis: "Japonya her şeyde iyi, o yüzden iki üründe de comparative advantage Japonya'dadır.", dogru: "Bir ürünün fırsat maliyeti düşükse öteki ürününki yüksektir; yani üstünlük ==bölüşülür== (hangisinin kimde olduğuna maliyete bakarak karar ver)." }
      ]
    },
    {
      baslik: "Uzmanlaş, ihraç et, ithal et",
      kisa: "Her ülke CA'sı olan ürünü ihraç eder, olmayan ürünü ithal eder.",
      bloklar: [
        { tip: "adimlar", baslik: "Her ülke ne yapar?", adimlar: [
            { baslik: "Uzmanlaş", metin: "Her ülke *comparative advantage*'ı olan üründe uzmanlaşır." },
            { baslik: "İhraç et", metin: "Japonya telefonu, Türkiye tişörtü dışarı satar (*export*)." },
            { baslik: "İthal et", metin: "Diğerini dışarıdan alır (*import*): Japonya tişört, Türkiye telefon." },
            { baslik: "İki taraf kazanır", metin: "Japonya iki üründe de üstün olsa da kendi tişörtü ona 3 telefona patlıyor. Tişörtü Türkiye'den bundan ucuza alabilirse iki ülke de kazanır." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Specialization", tr: "uzmanlaşma", tanim: "Her şeyi kendin yapmak yerine *comparative advantage*'ına sahip olduğun ürüne odaklanmak.", ornek: "Deniz pankart, Mert bileklik yapar." },
            { ikon: "🚢", terim: "Export", tr: "ihracat", tanim: "Uzmanlaştığın ürünü dışarıya satmak.", ornek: "Japonya telefon ihraç eder." },
            { ikon: "📥", terim: "Import", tr: "ithalat", tanim: "Üretmediğin ürünü dışarıdan almak.", ornek: "Japonya tişört ithal eder." }
          ] },
        { tip: "tuzak", baslik: "Üstünse ticaret gereksiz mi? İhraç mı, ithal mi?", metin: "İki üründe de *absolute advantage*'a sahip olmak ticaretten kazanmamak demek değildir. \"X ne ithal eder?\" sorusunda X'in *comparative advantage*'ı olmayan ürünü ararsın.", yanlis: "Her şeyi daha iyi yapan ülkenin ticarete ihtiyacı yoktur; \"uzmanlaşır\" ile \"ithal eder\" aynı ürünü anlatır.", dogru: "Ticaret kararı CA ile verilir. \"Uzmanlaşır / ihraç eder\" → CA'sı **olan** ürün; \"ithal eder\" → CA'sı **olmayan** ürün." }
      ]
    },
    {
      baslik: "Kermese dönüş: *input question*",
      kisa: "Input'ta küçük sayı iyidir ve diğer ürünün sayısı fırsat maliyetinde alta yazılır.",
      bloklar: [
        { tip: "tablo", baslik: "Deniz ve Mert: bir tane için gereken saat", head: ["", "Pankart", "Bileklik"], rows: [["Deniz", "2 saat", "1 saat"], ["Mert", "6 saat", "2 saat"]], not: "Tablo bir tane yapmak için gereken **saati** veriyor: *input question*, ==küçük sayı iyidir==. Deniz ikisinde de daha az saat harcıyor (2 < 6 ve 1 < 2): iki işte de *absolute advantage* onda." },
        { tip: "formul", parcalar: [
            { t: "Input question", alt: "tabloda saat var" }, "→",
            { t: "Other goes Under", alt: "diğer ürünün sayısı alta (I.O.U.)" }
          ], aciklama: "*Output question*'da diğeri üste (O.O.O.), *input question*'da diğeri alta (I.O.U.)." },
        { tip: "ornek", baslik: "Deniz ve Mert'in fırsat maliyeti", durum: "Deniz bir pankartı 2 saatte, bir bilekliği 1 saatte yapıyor. Mert pankartı 6 saatte, bilekliği 2 saatte. Pankartta ve bileklikte comparative advantage kimde, kermese kim ne yapmalı?",
          adimlar: ["Input question; diğeri alta.", "Deniz'in 1 pankartı = 2 ÷ 1 = 2 bileklik. Mantık: o 2 saatte 2 bileklik yapabilirdi.", "Mert'in 1 pankartı = 6 ÷ 2 = 3 bileklik. Mantık: 6 saatte 3 bileklik.", "Pankart: 2 < 3 → Deniz'e daha ucuz: pankartta *comparative advantage* Deniz'de.", "Bileklik: Deniz'in 1 bilekliği = 1 ÷ 2 = ½ pankart; Mert'in 1 bilekliği = 2 ÷ 6 = ⅓ pankart. ⅓ < ½ → bilekliğe Mert daha ucuz."],
          sonuc: "Pankartta Deniz (2 < 3 bileklik), bileklikte Mert (⅓ < ½ pankart). Kermesin cevabı: ==Deniz pankart, Mert bileklik yapar.==" },
        { tip: "tuzak", baslik: "Küçük sayı mı, büyük sayı mı?", metin: "Input sorusunda Deniz'in sayıları küçük diye \"daha kötü\" sanma.", yanlis: "Küçük sayı kötüdür, büyük sayı iyidir (her tabloda).", dogru: "*Input question*'da küçük sayı iyidir: daha az saatte üretmek demek. Deniz iki işte de *absolute advantage*'a sahip." }
      ]
    },
    {
      baslik: "Aynı sayılar, ters sonuç: çapraz çarpım",
      kisa: "Aynı sayılar output ya da input okunmasına göre ters sonuç verir.",
      bloklar: [
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
          sonuc: "Çapraz çarpım da aynı cevabı verir: ==Deniz pankart, Mert bileklik.== Çapraz hücreleri toplamak yanlıştır, çarp. Çapraz çarpım yalnızca hızlı kontroldür; asıl yöntemi bil." }
      ]
    },
    {
      baslik: "Sınav sorusu: buğday ve kumaş",
      kisa: "Başlığa bak, diğeri alta yaz, soruda hangi ürün isteniyorsa onu karşılaştır.",
      bloklar: [
        { tip: "tablo", baslik: "Bir birim için gereken saat (input)", head: ["", "Buğday", "Kumaş"], rows: [["A ülkesi", "6", "3"], ["B ülkesi", "4", "4"]] },
        { tip: "ornek", baslik: "Buğdayda comparative advantage kimde?", durum: "Tablo, bir birim üretmek için gereken saati veriyor. A ülkesinde buğday 6 saat, kumaş 3 saat. B ülkesinde buğday 4 saat, kumaş 4 saat. Buğdayda comparative advantage hangi ülkede?",
          adimlar: ["Başlık: saat → input question, diğeri alta.", "A'nın 1 buğdayı = 6 ÷ 3 = 2 kumaş.", "B'nin 1 buğdayı = 4 ÷ 4 = 1 kumaş.", "1 < 2: buğday B'ye daha ucuz.", "Kontrol: kumaşta A (1 kumaş = ½ buğday < 1 buğday)."],
          sonuc: "Buğdayda comparative advantage ==B ülkesinde==. (Absolute advantage: buğdayda B (4 < 6), kumaşta A (3 < 4); çeldirici \"A, çünkü kumaşı daha az saatte yapıyor\" yanlış, çünkü soru buğdayı soruyor.)" }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
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
