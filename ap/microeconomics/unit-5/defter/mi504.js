/* Kitpath not defteri · mi504 · 5.4 Monopson
   Kaynak: CED Topic 5.4 (PRD-4.D). Blok türleri: /ap/_kit/defter.js başı.
   Not: grafikte yatay eksen işçi, düşey eksen 10 TL birimi. MRP = 60 − 10L, arz W = 10L, MRC = 20L.
   Rekabet: MRP = S → L = 3, W = 30. Monopson: MRP = MRC → L = 2; ücret arz eğrisinden 20. DWL = ½ × 1 × 20 = 10 TL. */
window.DEFTER = (function () {
  var TUM = ["dwl", "mrp", "s", "mrc", "ec", "pm", "pw"];
  function ac(metin, acik) {
    return { metin: metin, goster: acik, gizle: TUM.filter(function (x) { return acik.indexOf(x) < 0; }) };
  }

  return {
    slug: "mi504",
    amac: "Bu konu, bir emek piyasasında işçi alan tek (ya da baskın) firma olan monopsonu anlatıyor. MRC'nin neden arz eğrisinin üstünde kaldığını, monopsonistin kaç işçi alıp ne kadar ücret ödediğini ve rekabetçi piyasadan farkını öğreneceksin.",
    bolumler: [
      {
        baslik: "Monopson nedir?",
        kisa: "Monopson, işçi alan tek (ya da baskın) firmadır ve ücreti etkiler.",
        bloklar: [
          { tip: "ikili",
            sol: { ikon: "🏙️", baslik: "Rekabetçi emek piyasası", maddeler: ["Çok sayıda işveren", "Firma ücreti kabul eder", "Firmanın karşılaştığı arz yatay: MRC = W"] },
            sag: { ikon: "🏭", baslik: "*Monopsony*", maddeler: ["Tek (ya da baskın) işveren", "Ücreti kendi işe alımıyla etkiler", "Firmanın karşılaştığı arz yukarı eğimli: MRC > W"] },
            oyun: [
              { metin: "Küçük bir ilçede tek büyük tekstil fabrikası işçilerin çoğunu çalıştırıyor.", cevap: "sag", neden: "Tek baskın alıcı: monopson." },
              { metin: "İstanbul'da yüzlerce kafe garson arıyor.", cevap: "sol", neden: "Çok sayıda işveren: rekabetçi emek piyasası." },
              { metin: "Kasabadaki tek hastane, hemşire alımının neredeyse tamamını yapıyor.", cevap: "sag", neden: "Tek alıcı: monopson." },
              { metin: "Daha çok işçi çekmek için ücreti artıran firma, bu ücreti mevcut bütün işçilere de ödemek zorunda kalıyor.", cevap: "sag", neden: "Arzı yukarı eğimli olan firma monopsondur; MRC > W." }
            ] },
          { tip: "kavramlar", kartlar: [
              { ikon: "🏭", terim: "Monopsony", tr: "tek alıcı piyasası", tanim: "Emek piyasasında tek (ya da baskın) alıcı firma. Piyasa arzı, o firmanın karşılaştığı arz eğrisidir.", ornek: "Kasabadaki tek fabrika." },
              { ikon: "📈", terim: "Supply price of labor", tr: "emeğin arz fiyatı", tanim: "Belli sayıda işçiyi çekmek için ödenmesi gereken ücret; arz eğrisinin yüksekliği.", ornek: "3 işçiyi çekmek için 30 TL gerekir." }
            ] }
        ]
      },
      {
        baslik: "Neden MRC ücretten büyük?",
        kisa: "Yeni işçiyi çekmek için ücret artınca eski işçilere de zam gerekir.",
        bloklar: [
          { tip: "formul", parcalar: [
              { t: "MRC", alt: "ek işçinin maliyeti" }, "=",
              { t: "Yeni işçinin ücreti" }, "+",
              { t: "Zam × mevcut işçi sayısı", alt: "eskilere de zam" }
            ],
            aciklama: "Arz eğrisi yukarı eğimlidir: daha çok işçi için ücret artırılır ve herkese uygulanır. Bu yüzden ==MRC > ücret== olur (ilk işçi hariç)." },
          { tip: "tablo", baslik: "Tek alıcının arzı: ücret işçi sayısıyla artar",
            head: ["İşçi (L)", "Ücret (W)", "Toplam işçilik maliyeti (W × L)", "MRC = ΔTC/ΔL"],
            rows: [["1", "10 TL", "10 TL", "10 TL"], ["2", "20 TL", "40 TL", "30 TL"], ["3", "30 TL", "90 TL", "50 TL"], ["4", "40 TL", "160 TL", "70 TL"]],
            vurgu: 1,
            not: "İlk işçide MRC = W. Sonrasında MRC ücretten büyüktür ve farkı büyür." },
          { tip: "ornek", baslik: "2. işçinin MRC'si",
            durum: "Fırında 1 işçi 10 TL alıyor. İkinci işçiyi çekmek için ücret 20 TL'ye çıkıyor ve herkese uygulanıyor.",
            adimlar: [
              "Önce toplam maliyet: 1 × 10 = 10 TL.",
              "Sonra: 2 × 20 = 40 TL. ΔTC = 40 − 10 = 30 TL.",
              "30 TL = yeni işçiye 20 TL + eski işçiye zam 10 TL.",
              "MRC = 30 TL, W = 20 TL: MRC > W."
            ],
            sonuc: "MRC (30 TL) ücretten (20 TL) büyük: bu yüzden MRC eğrisi arz eğrisinin üstündedir." }
        ]
      },
      {
        baslik: "Kaç işçi, hangi ücret?",
        kisa: "MRP = MRC'de işçi sayısı bulunur; ücret arz eğrisinden okunur.",
        bloklar: [
          { tip: "grafik", baslik: "Monopsonist ve rekabetçi piyasa", xlabel: "İşçi (L)", ylabel: "TL", xmax: 7, ymax: 7,
            xticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }],
            yticks: [{ v: 2, label: "20" }, { v: 3, label: "30" }, { v: 4, label: "40" }],
            ogeler: [
              { id: "dwl", tip: "alan", renk: 2, noktalar: [[2, 4], [3, 3], [2, 2]], gizli: true },
              { id: "mrp", tip: "cizgi", renk: 0, from: [0, 6], to: [6, 0], etiket: "MRP" },
              { id: "s", tip: "cizgi", renk: 1, from: [0, 0], to: [6, 6], etiket: "S", gizli: true },
              { id: "mrc", tip: "cizgi", renk: 2, from: [0, 0], to: [3.4, 6.8], etiket: "MRC", gizli: true },
              { id: "ec", tip: "nokta", renk: 3, x: 3, y: 3, etiket: "C", kilavuz: true, gizli: true },
              { id: "pm", tip: "nokta", renk: 3, x: 2, y: 4, etiket: "A", kilavuz: true, gizli: true },
              { id: "pw", tip: "nokta", renk: 1, x: 2, y: 2, etiket: "B", kilavuz: true, gizli: true }
            ],
            durumlar: [
              ac("Karşılaştırma için önce rekabetçi piyasa: firmanın emek talebi ==MRP==, arz ==S==. İkisi C noktasında kesişir: ==3 işçi, 30 TL==.", ["mrp", "s", "ec"]),
              ac("Monopsonist tek alıcıdır. Daha çok işçi için ücreti artırıp herkese ödediğinden ==MRC eğrisi arz eğrisinin üstünde== kalır.", ["mrp", "s", "mrc"]),
              ac("Kural: ==MRP = MRC==. Kesişim A noktasındadır: monopsonist ==2 işçi== alır (rekabetçiden az).", ["mrp", "s", "mrc", "pm"]),
              ac("Ücret MRC'ye değil, işçi sayısı (2) üzerinden ==arz eğrisinden== okunur: B noktası, ==20 TL==. Her işçi MRP'sinden (40 TL) az kazanır.", ["mrp", "s", "mrc", "pm", "pw"]),
              ac("Rekabetçi piyasaya göre 1 işçi az, ücret 10 TL düşük. Kırmızı üçgen, işe alınmayan 3. işçiden doğan ==*deadweight loss*== (ölü ağırlık kaybı): ½ × 1 işçi × 20 TL = 10 TL.", ["dwl", "mrp", "s", "mrc", "pm", "pw", "ec"])
            ] },
          { tip: "ornek", baslik: "Tablodan karar: kaç işçi, ne ücret?",
            durum: "MRP'ler: 50, 40, 30, 20 TL. MRC'ler (önceki tablodan): 10, 30, 50, 70 TL.",
            adimlar: [
              "1. işçi: MRP 50 > MRC 10, al.",
              "2. işçi: MRP 40 > MRC 30, al.",
              "3. işçi: MRP 30 < MRC 50, alma.",
              "Ücreti arz eğrisinden oku: 2 işçiyi çekmek için 20 TL yeter."
            ],
            sonuc: "2 işçi, işçi başına 20 TL. İşçinin MRP'si 40 TL ama ücreti 20 TL: aradaki fark işverende kalır." }
        ]
      },
      {
        baslik: "Rekabetçi piyasayla karşılaştırma",
        kisa: "Monopson daha az işçi alır, daha düşük ücret öder; verimlilik kaybı doğar.",
        bloklar: [
          { tip: "tablo", baslik: "Aynı piyasa, iki işveren yapısı",
            head: ["", "Rekabetçi emek piyasası", "Monopson"],
            rows: [
              ["Karar kuralı", "MRP = W (arz)", "MRP = MRC (arzın üstünde)"],
              ["İşçi sayısı", "3", "2"],
              ["Ücret", "30 TL", "20 TL (arz eğrisinden)"],
              ["MRP − ücret", "0", "40 − 20 = 20 TL"],
              ["Verimlilik", "Etkin", "Ölü ağırlık kaybı: ½ × 1 × 20 = 10 TL"]
            ] },
          { tip: "tuzak", metin: "İşçi sayısını MRC belirler, ücreti ise arz eğrisi.", yanlis: "Monopsonist, MRC'ye eşit ücret öder.", dogru: "MRP = MRC ile ==işçi sayısı== bulunur; ücret o işçi sayısında ==arz eğrisinden== okunur ve MRC'den düşüktür." }
        ]
      },
      {
        baslik: "Tekelin ayna görüntüsü",
        kisa: "Tekel satarken MR < talep, monopson alırken MRC > arz: ikisi de miktarı kısar.",
        bloklar: [
          { tip: "tablo", baslik: "Tekel ve monopson yan yana",
            head: ["", "Tekel (mal satar)", "Monopson (işçi alır)"],
            rows: [
              ["Eğri ilişkisi", "MR eğrisi talebin altında", "MRC eğrisi arzın üstünde"],
              ["Karar kuralı", "MR = MC", "MRP = MRC"],
              ["Fiyat nereden okunur?", "Talep eğrisinden", "Arz eğrisinden"],
              ["Sonuç", "Miktar az, fiyat yüksek", "İstihdam az, ücret düşük"]
            ] },
          { tip: "ikili",
            sol: { ikon: "🏷️", baslik: "Tekel", maddeler: ["Mal satan tek firma", "MR < talep"] },
            sag: { ikon: "👷", baslik: "Monopson", maddeler: ["İşçi alan tek firma", "MRC > arz"] },
            oyun: [
              { metin: "Fiyat, talep eğrisinden okunur.", cevap: "sol", neden: "Tekel mal satar; fiyatı talep belirler." },
              { metin: "Ücret, arz eğrisinden okunur.", cevap: "sag", neden: "Monopson işçi alır; ücreti arz belirler." },
              { metin: "Karar kuralı MR = MC'dir.", cevap: "sol", neden: "Satış tarafında marjinal gelir marjinal maliyete eşitlenir." },
              { metin: "Karar kuralı MRP = MRC'dir.", cevap: "sag", neden: "İşe alım tarafında marjinal gelir ürünü marjinal faktör maliyetine eşitlenir." }
            ] }
        ]
      },
      {
        baslik: "Toparlayalım",
        kisa: "Sınavdan önce bu listeye bir kez bak.",
        bloklar: [
          { tip: "ozet", maddeler: [
              "*Monopsony*: emek piyasasında tek (ya da baskın) alıcı; karşılaştığı arz yukarı eğimlidir.",
              "Yeni işçiyi çekmek için ücret artınca eski işçilere de zam gerekir: MRC = yeni ücret + zam × mevcut işçi.",
              "Bu yüzden MRC > ücret (arz fiyatı) olur; MRC eğrisi arz eğrisinin üstündedir.",
              "Kural: MRP = MRC. MRP > MRC oldukça işçi al.",
              "İşçi sayısı MRP = MRC'den bulunur; ücret o işçi sayısında arz eğrisinden okunur.",
              "Rekabetçi piyasaya göre monopson daha az işçi alır ve daha düşük ücret öder.",
              "Alınmayan işçiler MRP > arz iken işsiz kalır: ölü ağırlık kaybı (DWL).",
              "Tekel: MR < talep, fiyat talepten okunur. Monopson: MRC > arz, ücret arzdan okunur."
            ] }
        ]
      }
    ],
    sorular: [
      { q: "Monopsonistik bir emek piyasasında bir firma için MRC neden ücretten (arz fiyatından) büyüktür?",
        opts: ["Daha çok işçi çekmek için ücret artırılır ve bu ücret mevcut bütün işçilere de uygulanır.", "Monopsonistin işçileri rekabetçi piyasadakilerden daha verimlidir.", "Monopsonist ücreti her zaman MRP'ye eşitler.", "İşçi sayısı arttıkça arz eğrisi aşağı iner."],
        a: 0, why: "Arzı yukarı eğimli olan firma, yeni işçiyi çekmek için ücreti artırınca eski işçilerin ücretini de artırmak zorunda kalır; bu da ek maliyeti ücretin üstüne çıkarır. C şıkkı yanlış: monopsonist işçilere MRP'sinden az öder." },
      { q: "Tek işveren olan bir monopsonist için arz (ücret) ve MRP tabloda verilmiştir. MRC'ler 20, 40, 60 ve 80 TL'dir. Kâr azamisi için kaç işçi alır ve işçi başına ücret kaç TL'dir?",
        fig: { type: "table", head: ["İşçi", "Ücret (arz)", "MRP"], rows: [["1", "20 TL", "100 TL"], ["2", "30 TL", "90 TL"], ["3", "40 TL", "50 TL"], ["4", "50 TL", "30 TL"]] },
        opts: ["1 işçi, 20 TL", "2 işçi, 40 TL", "2 işçi, 30 TL", "3 işçi, 40 TL"],
        a: 2, why: "2. işçide MRP 90 > MRC 40, 3. işçide MRP 50 < MRC 60: 2 işçi alınır. Ücret arz eğrisinden okunur: 30 TL. B şıkkı MRC'yi (40 TL) ücret sanıyor." },
      { q: "Grafikte bir monopsonistin MRP, arz (S) ve MRC eğrileri görülüyor. Monopsonistin işçi sayısı ve ücreti için hangisi doğrudur?",
        fig: { type: "graph", xlabel: "İşçi (L)", ylabel: "TL", xmax: 7, ymax: 7,
          lines: [{ from: [0, 6], to: [6, 0], label: "MRP" }, { from: [0, 0], to: [6, 6], label: "S", color: 1 }, { from: [0, 0], to: [3.4, 6.8], label: "MRC", color: 2 }],
          points: [{ q: 2, p: 4, label: "A" }, { q: 2, p: 2, label: "B" }, { q: 3, p: 3, label: "C" }] },
        opts: ["3 işçi; C noktasındaki ücret", "2 işçi; B noktasındaki ücret", "2 işçi; A noktasındaki ücret", "3 işçi; A noktasındaki ücret"],
        a: 1, why: "MRP = MRC A noktasında kesişir: 2 işçi. Ücret o işçi sayısında arz eğrisinden okunur: B noktası. C şıkkı MRC'nin yüksekliğini (A) ücret sayıyor; A noktası ücret değildir." },
      { q: "Rekabetçi bir emek piyasasına kıyasla monopsonistik bir emek piyasasında istihdam ve ücret nasıl olur (diğer her şey sabit)?",
        opts: ["Daha çok işçi, daha yüksek ücret", "Daha az işçi, daha yüksek ücret", "Daha çok işçi, daha düşük ücret", "Daha az işçi, daha düşük ücret"],
        a: 3, why: "Monopsonist MRP = MRC'de durur; MRC arzın üstünde olduğundan işçi sayısı rekabetçi düzeyden azdır ve ücret arz eğrisinden okunduğu için rekabetçi ücretten düşüktür. C şıkkı, işçi sayısının azaldığını gözden kaçırıyor." },
      { q: "Tek fabrikalı bir kasabada fabrika 10 işçiye 20 TL öderken 11. işçiyi çekmek için ücreti 22 TL'ye çıkarıyor ve bütün işçilere 22 TL ödüyor. 11. işçinin MRC'si kaç TL'dir?",
        opts: ["22 TL", "20 TL", "42 TL", "242 TL"],
        a: 2, why: "Önce toplam maliyet 10 × 20 = 200 TL, sonra 11 × 22 = 242 TL. MRC = 242 − 200 = 42 TL (22 TL yeni işçi + 10 × 2 TL zam). A şıkkı yalnızca yeni işçinin ücretidir; D şıkkı toplam maliyettir, marjinal değildir." }
    ]
  };
})();
