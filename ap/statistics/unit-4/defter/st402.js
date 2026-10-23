/* Kitora not defteri · st402 · 4.3 Olasılığa Giriş
   Kitsiz ünite: içerik College Board CED'in Unit 4 (VAR-4) hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st402",
  amac: "Bu konu olasılığın temel kurallarını anlatıyor: *sample space*, *event*, 0 ile 1 arasındaki olasılık, *complement* ve \"en az bir\" yöntemi. Eşit olasılıklı sonuçları sayarak olasılık hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Örnek uzay ve olay",
      kisa: "Sample space bütün sonuçların listesi, event bu listeden seçilen parçadır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗺️", terim: "Sample space", tr: "örnek uzay", tanim: "Rastgele sürecin ==bütün olası sonuçlarının== listesi; genelde S ile gösterilir.", ornek: "Zar atışı: S = {1, 2, 3, 4, 5, 6}." },
            { ikon: "🎯", terim: "Event", tr: "olay", tanim: "Örnek uzayın, ilgilendiğin sonuçlardan oluşan ==alt kümesi==; genelde büyük harfle (A, B) gösterilir.", ornek: "Zarın çift gelmesi: A = {2, 4, 6}." },
            { ikon: "🔄", terim: "Complement", tr: "tamamlayıcı olay", tanim: "A olmayan bütün sonuçlar; Aᶜ ile gösterilir. Aᶜ, \"A olmaz\" demektir.", ornek: "Aᶜ = zar çift gelmez = {1, 3, 5}." }
          ] },
        { tip: "ikili", sol: { ikon: "🗺️", baslik: "*Sample space*", maddeler: ["Bütün sonuçların listesi", "Bir kez atılan zar: 6 sonuç", "İki bozuk para: 4 sonuç"] },
          sag: { ikon: "🎯", baslik: "*Event*", maddeler: ["Listeden seçilen bazı sonuçlar", "\"Çift gelmesi\": 3 sonuç", "\"En az bir yazı\": 3 sonuç"] },
          oyun: [
            { metin: "{1, 2, 3, 4, 5, 6}", cevap: "sol", neden: "Zarın bütün sonuçları: *sample space*." },
            { metin: "Zarın 4'ten büyük gelmesi: {5, 6}.", cevap: "sag", neden: "Bazı sonuçlardan oluşan alt küme: *event*." },
            { metin: "{YY, YT, TY, TT}", cevap: "sol", neden: "İki bozuk para atışının bütün sonuçları: *sample space*." },
            { metin: "İki parada da aynı yüzün gelmesi: {YY, TT}.", cevap: "sag", neden: "Örnek uzaydan seçilen iki sonuç: *event*." }
          ] }
      ]
    },
    {
      baslik: "Olasılığın kuralları",
      kisa: "Olasılık 0 ile 1 arasındadır; bütün sonuçların olasılıkları toplamı 1'dir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "P(A)", alt: "A olayının olasılığı" }, "=", { t: "A'daki sonuç sayısı", alt: "ilgilendiğin sonuçlar" }, "÷", { t: "S'deki sonuç sayısı", alt: "bütün sonuçlar" }], aciklama: "Bu bölme yalnızca ==sonuçlar eşit olasılıklıysa== geçerlidir (adil zar, adil para, rastgele seçim)." },
        { tip: "sayilar", ogeler: [
            { deger: 0, etiket: "imkânsız olay: P = 0" },
            { deger: 0.5, etiket: "ne olur ne olmaz: yarı yarıya" },
            { deger: 1, etiket: "kesin olay ve bütün sonuçların toplamı: P = 1" }
          ] },
        { tip: "tuzak", baslik: "\"İki sonuç var, o halde %50\"", metin: "Olasılık 1/2 olsun diye sonuçların eşit olasılıklı olması gerekir. Yarın bir sınav olacak ya da olmayacak, ama bu %50 demek değildir.", yanlis: "İki sonuç olduğu için P = 1/2.", dogru: "Önce sor: sonuçlar ==eşit olasılıklı mı==? Değilse sonuç sayısını bölemezsin; olasılıklar verilir ya da ölçülür." }
      ]
    },
    {
      baslik: "İki zarın örnek uzayı",
      kisa: "İki zarın 36 sonucu eşit olasılıklıdır; olasılık için sonuçları say.",
      bloklar: [
        { tip: "tablo", baslik: "İki zarın toplamı (36 sonuç)", head: ["1. zar ↓  2. zar →", "1", "2", "3", "4", "5", "6"], rows: [
            ["1", "2", "3", "4", "5", "6", "7"],
            ["2", "3", "4", "5", "6", "7", "8"],
            ["3", "4", "5", "6", "7", "8", "9"],
            ["4", "5", "6", "7", "8", "9", "10"],
            ["5", "6", "7", "8", "9", "10", "11"],
            ["6", "7", "8", "9", "10", "11", "12"]
          ], not: "6 satır × 6 sütun = 36 eşit olasılıklı sonuç. (1. zar 2, 2. zar 5) ile (1. zar 5, 2. zar 2) ayrı iki sonuçtur." },
        { tip: "sekil", baslik: "Her toplam için kaç sonuç var?", fig: { type: "bar", cats: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], series: [{ name: "Sonuç sayısı (36'dan)", values: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1] }], ylabel: "Sonuç sayısı" } },
        { tip: "ornek", baslik: "Toplam 8 gelme olasılığı", durum: "İki adil zar atılıyor. Toplamın 8 olması, en az 10 olması ve 7 olmaması olasılıklarını bul.",
          adimlar: ["Toplam 8: (2,6), (3,5), (4,4), (5,3), (6,2): 5 sonuç. P = 5/36 ≈ 0,139.", "Toplam en az 10: toplam 10 (3 sonuç) + 11 (2 sonuç) + 12 (1 sonuç) = 6 sonuç. P = 6/36 = 1/6 ≈ 0,167.", "Toplam 7: 6 sonuç, yani P(7) = 6/36 = 1/6. 7 olmaması: 30 sonuç, P = 30/36 = 5/6 ≈ 0,833."],
          sonuc: "P(toplam 8) = 5/36 ≈ 0,139; P(en az 10) = 1/6 ≈ 0,167; P(7 değil) = 5/6 ≈ 0,833. Çok olası toplam 7'dir (6/36)." }
      ]
    },
    {
      baslik: "Tamlayıcı olay kuralı",
      kisa: "P(Aᶜ) = 1 − P(A): olay ya olur ya olmaz, olasılıkları toplamı 1'dir.",
      bloklar: [
        { tip: "grafik", baslik: "Olay ve tamlayıcısı bir bütün oluşturur", xlabel: "Örnek uzayın tamamı = 1", ylabel: "", xmax: 100, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 50, label: "0,5" }, { v: 100, label: "1" }],
          ogeler: [
            { id: "tum", tip: "alan", renk: 3, noktalar: [[0, 4], [0, 6], [100, 6], [100, 4]], gizli: true },
            { id: "ytum", tip: "yazi", x: 50, y: 8, metin: "Bütün sonuçlar: P(S) = 1", gizli: true },
            { id: "a", tip: "alan", renk: 0, noktalar: [[0, 4], [0, 6], [0, 6], [0, 4]], gizli: true },
            { id: "ya", tip: "yazi", x: 20, y: 2.3, metin: "P(A) = 0,4", gizli: true },
            { id: "ac", tip: "alan", renk: 2, noktalar: [[40, 4], [40, 6], [40, 6], [40, 4]], gizli: true },
            { id: "yac", tip: "yazi", x: 70, y: 2.3, metin: "P(Aᶜ) = 0,6", gizli: true }
          ],
          durumlar: [
            { metin: "Şerit, bütün sonuçları temsil ediyor: olasılığı ==1==.", goster: ["tum", "ytum"] },
            { metin: "A: 25 kişilik sınıftan seçilen birinin servisle gelmesi (10 kişi). P(A) = 10/25 = 0,4.", set: { a: { noktalar: [[0, 4], [0, 6], [40, 6], [40, 4]] } }, goster: ["a", "ya"] },
            { metin: "Geriye kalan şerit tamlayıcı olay: servisle gelmeyenler (15 kişi). P(Aᶜ) = 15/25 = 0,6.", set: { ac: { noktalar: [[40, 4], [40, 6], [100, 6], [100, 4]] } }, goster: ["ac", "yac"] },
            { metin: "İkisi birlikte bütünü doldurur: 0,4 + 0,6 = 1, yani ==P(Aᶜ) = 1 − P(A)==." }
          ] },
        { tip: "formul", parcalar: [{ t: "P(Aᶜ)", alt: "A olmama olasılığı" }, "=", { t: "1", alt: "bütün" }, "−", { t: "P(A)", alt: "A olma olasılığı" }] }
      ]
    },
    {
      baslik: "\"En az bir\" için tamlayıcıyı kullan",
      kisa: "En az bir = 1 − hiç olmaması; durumları tek tek sayma.",
      bloklar: [
        { tip: "tablo", baslik: "Üç bozuk para atışı (8 eşit olasılıklı sonuç)", head: ["Sonuç", "Yazı sayısı", "En az bir yazı mı?"], rows: [
            ["YYY", "3", "Evet"],
            ["YYT", "2", "Evet"],
            ["YTY", "2", "Evet"],
            ["TYY", "2", "Evet"],
            ["YTT", "1", "Evet"],
            ["TYT", "1", "Evet"],
            ["TTY", "1", "Evet"],
            ["TTT", "0", "Hayır"]
          ], vurgu: 7, not: "Y = yazı, T = tura. \"En az bir yazı\" 7 sonuçta, \"hiç yazı yok\" yalnızca TTT'de." },
        { tip: "ornek", baslik: "Üç atışta en az bir yazı", durum: "Üç adil bozuk para atılıyor. En az bir yazı gelme olasılığı nedir?",
          adimlar: ["Doğrudan sayım: 7 sonuç, 7/8 = 0,875.", "Kısa yol: \"en az bir yazı\" olayının tamlayıcısı \"hiç yazı gelmemesi\" = TTT.", "P(TTT) = 1/8 = 0,125.", "P(en az bir yazı) = 1 − 1/8 = 7/8 = 0,875."],
          sonuc: "P(en az bir yazı) = 1 − P(hiç yazı) = 7/8 = ==0,875==." },
        { tip: "tuzak", baslik: "\"En az bir\" ile \"tam olarak bir\" farklıdır", metin: "En az bir, 1 ya da daha fazlası demek. Tam olarak bir, yalnızca 1 demek. Üç atışta tam olarak bir yazı 3/8 = 0,375'tir, en az bir yazı ise 7/8 = 0,875.", yanlis: "En az bir yazı = tam olarak bir yazı = 3/8.", dogru: "En az bir yazı = 1, 2 ya da 3 yazı; hızlı hesap: 1 − P(hiç yazı)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Sample space*: bütün olası sonuçların listesi; *event*: bu listeden seçilen sonuçlar.",
            "Olasılık 0 ile 1 arasındadır: imkânsız olay 0, kesin olay 1.",
            "Bütün sonuçların olasılıkları toplamı 1'dir.",
            "Sonuçlar eşit olasılıklıysa P(A) = A'daki sonuç sayısı ÷ S'deki sonuç sayısı.",
            "İki zarın toplamı için 36 eşit olasılıklı sonuç var: P(7) = 6/36 = 1/6, P(2) = 1/36.",
            "*Complement rule*: P(Aᶜ) = 1 − P(A).",
            "\"En az bir\" olayında hesabı tersten yap: 1 − P(hiç).",
            "İki sonuç olması, olasılığın 1/2 olduğu anlamına gelmez; sonuçlar eşit olasılıklı olmalı."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir torbadan rastgele bir bilye çekilecek. Bilyelerin renk olasılıkları tabloda veriliyor. Yeşil bilye çekme olasılığı nedir?",
      fig: { type: "table", caption: "Torbadaki bilyeler", head: ["Renk", "Kırmızı", "Mavi", "Yeşil"], rows: [["Olasılık", "0,35", "0,40", "?"]] },
      opts: ["0,15", "0,75", "0,25", "1,75"],
      a: 2,
      why: "Üç rengin olasılıkları toplamı 1 olmalı: 1 − (0,35 + 0,40) = 0,25. B en çekici yanlış şık: 0,75 kırmızı ya da mavi çekme olasılığıdır, yeşil olma olasılığı değil."},
    { q: "İki adil zar atılıyor. Zarların toplamının 9 olma olasılığı nedir?",
      opts: ["4/36 ≈ 0,111", "1/36 ≈ 0,028", "9/36 = 0,25", "1/11 ≈ 0,091"],
      a: 0,
      why: "Toplam 9 veren sonuçlar (3,6), (4,5), (5,4), (6,3): 4 sonuç. P = 4/36 = 1/9 ≈ 0,111. D en çekici yanlış şık: 2'den 12'ye 11 toplam var diye hepsini eşit olasılıklı sanır; toplamların sonuç sayıları farklıdır." },
    { q: "Hava durumu raporu yarın yağmur yağma olasılığını 0,35 olarak veriyor. Yarın yağmur yağmama olasılığı nedir?",
      opts: ["0,35", "0,50", "0,35 − 1", "0,65"],
      a: 3,
      why: "P(yağmur yok) = 1 − P(yağmur) = 1 − 0,35 = 0,65. C yanlış: 0,35 − 1 negatif bir sayı verir, olasılık negatif olamaz." },
    { q: "İki adil zar atılıyor. En az bir zarın 6 gelme olasılığı nedir?",
      opts: ["1/6 ≈ 0,167", "11/36 ≈ 0,306", "2/6 ≈ 0,333", "25/36 ≈ 0,694"],
      a: 1,
      why: "6 hiç gelmeyen sonuç sayısı 5 × 5 = 25. P(en az bir 6) = 1 − 25/36 = 11/36 ≈ 0,306. C en çekici yanlış şık: 1/6 + 1/6 toplamı, (6,6) sonucunu iki kez sayar." },
    { q: "Bir basketbol antrenörü \"bu oyuncunun bir atışı basketle sonuçlanma olasılığı 0,3\" diyor. Bu ifadenin doğru yorumu hangisidir?",
      opts: ["Oyuncu her 10 atışın tam olarak 3'ünü basket yapar", "Oyuncu her üçüncü atışta basket yapar", "Çok sayıda atış yapıldığında atışların yaklaşık %30'u basketle sonuçlanır", "Oyuncu bir sonraki atışta basket yapamaz"],
      a: 2,
      why: "Olasılık uzun vadedeki göreli sıklığı anlatır. A en çekici yanlış şık: 10 atışta tam olarak 3 basket garanti değildir; 2 ya da 4 de olabilir." }
  ]
};
