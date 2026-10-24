/* Kitpath not defteri · st401 · 4.1–4.2 Rastgelelik ve Simülasyon
   Kitsiz ünite: içerik College Board CED'in Unit 4 (VAR-4) hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st401",
  amac: "Bu konu rastgeleliği ve olasılığı anlatıyor: tek tek sonuçlar belirsiz, uzun vadede ise düzenli. *Random process*, *law of large numbers* ve rakam atayarak olasılığı tahmin eden *simulation* adımlarını öğreneceksin.",
  bolumler: [
    {
      baslik: "*Random process* ve olasılık",
      kisa: "Sonucu önceden bilinmeyen ama uzun vadede düzenli olan süreç: random process.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Random process", tr: "rastgele süreç", tanim: "Sonucu ==şansla belirlenen==, tek seferde tahmin edilemeyen ama çok kez tekrarlanınca düzen gösteren süreç.", ornek: "Bozuk para atmak, zar atmak, torbadan bilye çekmek." },
            { ikon: "🎯", terim: "Probability", tr: "olasılık", tanim: "Bir sonucun ==uzun vadede ne sıklıkta== görüleceğini gösteren, 0 ile 1 arasındaki sayı.", ornek: "P(yazı) = 0,5 demek: çok atışta yazıların oranı yaklaşık 0,5'e yaklaşır." },
            { ikon: "📈", terim: "Relative frequency", tr: "göreli sıklık", tanim: "Bir sonucun görülme sayısının toplam deneme sayısına oranı.", ornek: "20 atışta 12 yazı geldiyse göreli sıklık 12/20 = 0,6." }
          ] },
        { tip: "ikili", sol: { ikon: "🎰", baslik: "*Random process*", maddeler: ["Sonuç şansa bağlı", "Tek denemede tahmin edilemez", "Çok denemede düzen çıkar"] },
          sag: { ikon: "🧮", baslik: "Rastgele olmayan süreç", maddeler: ["Sonuç kurala göre belli", "Aynı girdi hep aynı çıktı", "Belirsizlik yok"] },
          oyun: [
            { metin: "Okul bahçesinde bir bozuk paranın havaya atılması.", cevap: "sol", neden: "Yazı mı tura mı olacağı şansa bağlı: *random process*." },
            { metin: "Kantin sırasında 37 numaralı öğrenciden sonra 38'in çağrılması.", cevap: "sag", neden: "Sıra kuralla belli; şansa bağlı değil." },
            { metin: "Sınıftan kura çekilerek tahta silecek görevlisinin seçilmesi.", cevap: "sol", neden: "Kimin çıkacağı şansa bağlı: *random process*." },
            { metin: "Bir zarın üç kez atılıp gelen sayıların kaydedilmesi.", cevap: "sol", neden: "Her atışın sonucu şansa bağlı: *random process*." }
          ] }
      ]
    },
    {
      baslik: "*Law of large numbers*",
      kisa: "Deneme sayısı arttıkça göreli sıklık gerçek olasılığa yaklaşır.",
      bloklar: [
        { tip: "grafik", baslik: "100 atışta yazı oranı", xlabel: "Atış sayısı", ylabel: "Yazı oranı", xmax: 100, ymax: 100,
          xticks: [{ v: 0, label: "0" }, { v: 20, label: "20" }, { v: 40, label: "40" }, { v: 60, label: "60" }, { v: 80, label: "80" }, { v: 100, label: "100" }],
          yticks: [{ v: 0, label: "0" }, { v: 25, label: "25%" }, { v: 50, label: "50%" }, { v: 75, label: "75%" }, { v: 100, label: "100%" }],
          ogeler: [
            { id: "gercek", tip: "cizgi", renk: 1, kesik: true, from: [0, 50], to: [100, 50], etiket: "P = 0,5", gizli: true },
            { id: "e1", tip: "egri", renk: 0, noktalar: [[5, 80], [10, 70], [20, 60]], gizli: true },
            { id: "y1", tip: "yazi", x: 12, y: 88, metin: "5 atış: 4/5 = %80", gizli: true },
            { id: "e2", tip: "egri", renk: 0, noktalar: [[20, 60], [40, 55], [60, 53]], gizli: true },
            { id: "y2", tip: "yazi", x: 40, y: 67, metin: "40 atış: 22/40 = %55", gizli: true },
            { id: "e3", tip: "egri", renk: 0, noktalar: [[60, 53], [80, 52], [100, 51]], gizli: true },
            { id: "y3", tip: "yazi", x: 80, y: 40, metin: "100 atış: 51/100 = %51", gizli: true }
          ],
          durumlar: [
            { metin: "Ada’nın bozuk para denemesi: gerçek olasılık ==0,5==. Kesikli çizgi uzun vadede varılacak değeri gösteriyor.", goster: ["gercek"] },
            { metin: "Başta çok dalgalı: 5 atışta 4 yazı, yani %80. Az denemede sapma büyük olabilir.", goster: ["e1", "y1"] },
            { metin: "Atış sayısı artınca oran çizgiye doğru iniyor: 40 atışta 22 yazı, %55.", goster: ["e2", "y2"] },
            { metin: "100 atışta 51 yazı, %51. ==Deneme sayısı arttıkça göreli sıklık gerçek olasılığa yaklaşır.==", goster: ["e3", "y3"] }
          ] },
        { tip: "tuzak", baslik: "\"Sıra tura gelmeli\" tuzağı", metin: "Arka arkaya 5 yazı geldi diye bozuk para hesap tutmaz. *Law of large numbers* sapmaları geri alıp \"denkleştirmez\"; yalnızca oran, deneme sayısı büyüdükçe 0,5'e yaklaşır.", yanlis: "5 yazıdan sonra tura gelme olasılığı artar.", dogru: "Atışlar birbirinden etkilenmez; altıncı atışta da P(yazı) = 0,5." }
      ]
    },
    {
      baslik: "*Simulation* nedir, nasıl yapılır?",
      kisa: "Simulation: gerçek süreci rakam ya da jetonlarla taklit edip olasılığı tahmin etmek.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧪", terim: "Simulation", tr: "benzetim", tanim: "Gerçek rastgele süreci ==şansla çalışan bir modelle== (rakam tablosu, zar, hesap makinesi) çok kez taklit etmek.", ornek: "Ayran kapağı ödülünü rakamlarla taklit etmek." },
            { ikon: "🔁", terim: "Trial", tr: "deneme", tanim: "Süreci baştan sona bir kez taklit etmek; bir *simulation* birçok *trial*'dan oluşur.", ornek: "4 ayran almayı 4 rakam seçerek bir kez denemek." },
            { ikon: "🧾", terim: "Simulated probability", tr: "benzetim olasılığı", tanim: "İstenen olayın görüldüğü *trial* sayısının toplam *trial* sayısına oranı; gerçek olasılığın ==tahminidir==.", ornek: "10 denemenin 6'sında ödül çıktıysa tahmin 6/10 = 0,6." }
          ] },
        { tip: "adimlar", baslik: "Simülasyonun beş adımı", adimlar: [
            { baslik: "1 · Süreci tanımla", metin: "Neyi taklit ediyorsun ve hangi olayın olasılığını arıyorsun? Bir denemenin kaç adım olduğunu söyle." },
            { baslik: "2 · Rakamları ata", metin: "Olasılıkla orantılı rakam ata. Örnek: %20 için 0–1 olay, 2–9 olay değil." },
            { baslik: "3 · Bir denemeyi yap", metin: "Rastgele rakam tablosu ya da hesap makinesiyle gerekli kadar rakam seç; kuralı yaz (rakamlar tekrar edebilir mi?)." },
            { baslik: "4 · Çok kez tekrarla ve kaydet", metin: "Her denemede istenen olay oldu mu, kaydet. Deneme sayısı ne kadar çoksa tahmin o kadar iyi." },
            { baslik: "5 · Tahmin et ve yorumla", metin: "Olay görülen deneme sayısı ÷ toplam deneme sayısı; sonucu bağlamıyla ve \"yaklaşık\" diyerek yaz." }
          ] }
      ]
    },
    {
      baslik: "Rakamları doğru atamak",
      kisa: "Atanan rakam sayısı, olasılıkla aynı oranda olmalı.",
      bloklar: [
        { tip: "tablo", baslik: "Rakam atama örnekleri", head: ["Süreç", "Olasılık", "Olay", "Olay değil"], rows: [
            ["Bozuk para", "1/2 = 0,5", "0, 1, 2, 3, 4 (yazı)", "5, 6, 7, 8, 9 (tura)"],
            ["Ayran kapağı ödüllü", "1/5 = 0,2", "0, 1", "2, 3, 4, 5, 6, 7, 8, 9"],
            ["Yağmur ihtimali %30", "3/10 = 0,3", "0, 1, 2", "3, 4, 5, 6, 7, 8, 9"],
            ["Zar atmak", "1/6 ≈ 0,167 (her yüz)", "1–6 (yüzler)", "0, 7, 8, 9 çıkarsa atla ve tekrar seç"],
            ["İsabet oranı %25", "25/100 = 0,25", "00–24 (iki rakamlı)", "25–99"]
          ], not: "Tablo bir tür sözlük: hangi rakam hangi sonucu temsil ediyor, deneme başlamadan yaz." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru atama", maddeler: ["Rakam oranı = olasılık", "Her rakam bir sonuca ait", "Kullanılmayan rakam atlanır"] },
          sag: { ikon: "❌", baslik: "Hatalı atama", maddeler: ["Oran olasılığı tutmaz", "Rakam iki sonuca birden ait", "Atlanan rakam hesaba katılmaz"] },
          oyun: [
            { metin: "%40 olasılık için 0–3 olay, 4–9 olay değil.", cevap: "sol", neden: "10 rakamın 4'ü olay: 4/10 = 0,4." },
            { metin: "%40 olasılık için 1–4 olay, 5–9 olay değil, 0 çıkarsa atla.", cevap: "sag", neden: "0 atlanınca 9 rakam kalır; oran 4/9 ≈ 0,444, yani 0,4 değil." },
            { metin: "Zar için 1–6 yüzleri temsil eder, 0, 7, 8, 9 atlanır.", cevap: "sol", neden: "6 eşit olasılıklı rakam kaldı; her yüz 1/6." },
            { metin: "Bozuk para için çift rakam yazı, tek rakam tura.", cevap: "sol", neden: "5 çift ve 5 tek rakam var: her biri 5/10 = 0,5." },
            { metin: "%30 olasılık için 0–2 olay, 2–9 olay değil.", cevap: "sag", neden: "2 hem olay hem değil olarak atanmış; kurala göre bir rakam tek sonuca ait olmalı." }
          ] }
      ]
    },
    {
      baslik: "Çözümlü örnek: ayran kapağı",
      kisa: "Her denemede bir yığın rakam seç, olayı kontrol et, oranı bul.",
      bloklar: [
        { tip: "tablo", baslik: "10 deneme: 4 ayranda en az bir ödül var mı?", head: ["Deneme", "Seçilen 4 rakam", "0 ya da 1 var mı?", "Ödül çıktı mı?"], rows: [
            ["1", "5 8 3 9", "Yok", "Hayır"],
            ["2", "7 0 4 6", "0 var", "Evet"],
            ["3", "2 6 9 1", "1 var", "Evet"],
            ["4", "8 4 7 5", "Yok", "Hayır"],
            ["5", "3 3 1 8", "1 var", "Evet"],
            ["6", "9 2 6 7", "Yok", "Hayır"],
            ["7", "4 5 0 3", "0 var", "Evet"],
            ["8", "6 8 2 4", "Yok", "Hayır"],
            ["9", "1 7 9 5", "1 var", "Evet"],
            ["10", "9 6 0 8", "0 var", "Evet"]
          ], not: "Rakamlar tekrar edebilir: her ayran kapağı birbirinden bağımsız." },
        { tip: "ornek", baslik: "Ayran kapağı simülasyonu", durum: "Kantindeki ayranların %20'sinin kapağından ödül çıkıyor. Ece 4 ayran alırsa en az birinden ödül çıkma olasılığını simülasyonla tahmin et.",
          adimlar: ["Süreç: 4 ayran almak. Olay: en az bir kapaktan ödül çıkması. Bir deneme = 4 ayran.", "Atama: 0 ve 1 ödüllü (2/10 = 0,2), 2–9 ödülsüz (8/10 = 0,8). Rakamlar tekrar edebilir.", "Deneme: tablodan 4 rakam seç, içinde 0 ya da 1 varsa \"Evet\" yaz. 10 denemeyi tekrarla.", "Sayım: Evet çıkan denemeler 2, 3, 5, 7, 9, 10: toplam 6.", "Tahmin: 6/10 = 0,6."],
          sonuc: "Tahmini olasılık yaklaşık ==0,6==. Gerçek değer 1 − 0,8⁴ = 0,5904 (4.6'da göreceksin); 10 deneme az olduğu için tahmin tam çıkmadı, deneme sayısı artınca yaklaşır." },
        { tip: "tuzak", baslik: "Simülasyon bir kanıt değil, tahmin", metin: "Aynı simülasyonu bir daha çalıştırsan 5/10 ya da 7/10 da çıkabilir. Çıkan sayıyı gerçek olasılık gibi sunma ya da tek bir denemeyle sonuç çıkarma.", yanlis: "Simülasyonda 0,6 çıktı, o halde gerçek olasılık tam olarak 0,6'dır.", dogru: "0,6, gerçek olasılığın bir ==tahminidir==; deneme sayısı arttıkça gerçeğe yaklaşır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Random process*: sonucu şansa bağlı, tek denemede tahmin edilemeyen ama çok denemede düzenli süreç.",
            "*Probability*: bir sonucun uzun vadedeki göreli sıklığı; 0 ile 1 arasındadır.",
            "*Law of large numbers*: deneme sayısı arttıkça göreli sıklık gerçek olasılığa yaklaşır; az denemede sapma büyük olabilir.",
            "Peş peşe 5 yazı sonraki atışı etkilemez; \"sıra tura gelmeli\" yanılgıdır.",
            "*Simulation* beş adımdır: süreci tanımla, rakamları ata, bir deneme yap, çok kez tekrarla ve kaydet, tahmin et.",
            "Atanan rakam sayısının oranı olasılıkla eşit olmalı; kullanılmayan rakam atlanır ve bu oranı bozmamalı.",
            "*Simulated probability* = olay görülen deneme sayısı ÷ toplam deneme sayısı; bir tahmindir, kesin değer değildir.",
            "Deneme sayısı büyüdükçe simülasyon tahmini gerçek olasılığa yaklaşır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Elif bir bozuk parayı 10 kez attığında 7 yazı, 1000 kez attığında 508 yazı elde ediyor. Bu sonuçlar *law of large numbers* ile ilgili neyi gösterir?",
      opts: ["Para büyük ihtimalle hileli, çünkü 10 atışta yazı oranı 0,5'ten çok uzak", "Deneme sayısı arttıkça yazı oranı gerçek olasılık olan 0,5'e yaklaşır", "Büyük denemede yazı sayısı tam 500 olmak zorundadır", "İlk 10 atışta çok yazı geldiği için sonraki atışlarda tura sayısı fazla olur"],
      a: 1,
      why: "10 atışta 7/10 = 0,7 iken 1000 atışta 508/1000 = 0,508; oran 0,5'e yaklaşmış. C en çekici yanlış şık: oran yaklaşır ama sayı tam 500 olmak zorunda değildir. D ise denkleştirme yanılgısıdır." },
    { q: "Bir basketbolcunun serbest atış isabet oranı %30. Üç atışlık bir seriyi simüle etmek için rakam tablosundan 3 rakam seçilecek. Hangi atama doğrudur?",
      opts: ["0, 1, 2, 3 isabet; 4–9 isabetsiz", "1, 2, 3 isabet; 4–9 isabetsiz; 0 çıkarsa atla", "0, 1, 2 isabet; 3–9 isabetsiz", "3, 4, 5 isabet; 6–9 isabetsiz; 0, 1, 2 çıkarsa atla"],
      a: 2,
      why: "10 rakamın 3'ü isabete ayrılmalı: 3/10 = 0,3. A'da 4 rakam isabet (0,4). B'de 0 atlanınca 3/9 ≈ 0,333 olur. D'de 3/7 ≈ 0,429 olur." },
    { q: "Selin, bir oyunda 3 turun hiçbirini kazanamama olasılığını simülasyonla tahmin ediyor. Her deneme 3 turdan oluşuyor; 8 denemenin sonucu tabloda. Hangi tahmini olasılık bulunur?",
      fig: { type: "table", caption: "Her sütun bir deneme (K = kazandı, Y = yenildi)", head: ["Deneme", "1", "2", "3", "4", "5", "6", "7", "8"], rows: [["Sonuç (3 tur)", "KYY", "YYY", "KKY", "YYY", "YKY", "YYY", "KYK", "YYK"]] },
      opts: ["3/8 = 0,375", "5/8 = 0,625", "1/8 = 0,125", "3/5 = 0,6"],
      a: 0,
      why: "Hiç kazanılmayan (YYY) denemeler 2, 4, 6: toplam 3 deneme. Tahmin 3/8 = 0,375. B en çekici yanlış şık: bu en az bir tur kazanılan denemelerin oranıdır (5/8), istenen olayın tamamlayıcısıdır." },
    { q: "Bir bozuk para 4 kez atıldı ve dördü de yazı geldi. Parayı yeniden attığında 5. atışın yazı gelme olasılığı hakkında hangisi doğrudur?",
      opts: ["Daha düşüktür, çünkü tura gelme sırası geldi", "Daha yüksektir, çünkü para yazıya eğilimli", "Hesaplanamaz, çünkü örnek küçük", "Hâlâ 0,5'tir, çünkü atışlar birbirinden etkilenmez"],
      a: 3,
      why: "Atışlar birbirinden bağımsız; para hafıza tutmaz. A en çekici yanlış şık: *law of large numbers* geçmiş sapmayı geri alıp denkleştirmez, yalnızca uzun vadede oranı 0,5'e yaklaştırır." },
    { q: "Bir olayın olasılığını tahmin etmek için yapılan bir simülasyon hakkında hangisi doğrudur?",
      opts: ["Sonuç, gerçek olasılığı tam olarak verir", "Aynı simülasyon tekrar çalıştırıldığında farklı bir tahmin çıkabilir", "100 denemelik bir simülasyon 10 denemelikten daha az güvenilirdir", "Simülasyon yalnızca zar ve bozuk parayla yapılabilir"],
      a: 1,
      why: "Simülasyon sonucu bir tahmindir ve şansa bağlı olarak denemeden denemeye değişir. C yanlış: deneme sayısı arttıkça tahmin gerçek değere daha çok yaklaşır. A en çekici yanlış şık: simülasyon kesin değer vermez." }
  ]
};
