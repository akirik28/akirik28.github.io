/* Kitpath not defteri · st403 · 4.4 Ayrık Olaylar
   Kitsiz ünite: içerik College Board CED'in Unit 4 (VAR-4) hedeflerine göre yazıldı. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st403",
  amac: "Bu konu \"veya\" olasılıklarını anlatıyor: iki olay aynı anda olamıyorsa (*mutually exclusive*) olasılıklar toplanır, olabiliyorsa kesişimi bir kez çıkarmak gerekir. İki yönlü tablodan \"A veya B\" hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Ayrık olay nedir?",
      kisa: "Mutually exclusive: iki olay aynı anda gerçekleşemez, ortak sonuçları yoktur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🚫", terim: "Mutually exclusive", tr: "ayrık (bağdaşmaz) olaylar", tanim: "Aynı anda ==gerçekleşemeyen== olaylar; ortak sonuçları yoktur, yani P(A ve B) = 0.", ornek: "Zarın 2 gelmesi ile 5 gelmesi." },
            { ikon: "∩", terim: "Intersection", tr: "kesişim (A ve B)", tanim: "İki olayın ==birlikte== gerçekleşmesi; P(A ve B) ya da P(A ∩ B) ile gösterilir.", ornek: "Hem spor hem müzik kulübüne üye olmak." },
            { ikon: "∪", terim: "Union", tr: "birleşim (A veya B)", tanim: "A'nın ya da B'nin ya da ikisinin birden gerçekleşmesi; istatistikte \"veya\" ==kapsayıcıdır==.", ornek: "Spor ya da müzik kulübünden en az birine üye olmak." }
          ] },
        { tip: "ikili", sol: { ikon: "🚫", baslik: "Ayrık olaylar", maddeler: ["Ortak sonuç yok", "P(A ve B) = 0", "Aynı anda gerçekleşemez"] },
          sag: { ikon: "🔗", baslik: "Ayrık olmayan olaylar", maddeler: ["En az bir ortak sonuç var", "P(A ve B) > 0", "Aynı anda gerçekleşebilir"] },
          oyun: [
            { metin: "Zarın 2 gelmesi ve 5 gelmesi.", cevap: "sol", neden: "Tek zar aynı anda hem 2 hem 5 gelemez." },
            { metin: "Zarın çift gelmesi ve 4'ten büyük gelmesi.", cevap: "sag", neden: "6 hem çift hem 4'ten büyüktür: ortak sonuç var." },
            { metin: "Bir öğrencinin 9. sınıfta ve aynı anda 11. sınıfta olması.", cevap: "sol", neden: "Bir öğrenci aynı anda tek sınıfta okur." },
            { metin: "Bir öğrencinin hem spor hem müzik kulübüne üye olması.", cevap: "sag", neden: "İkisine de üye olan öğrenciler olabilir." },
            { metin: "Desteden çekilen kartın kupa olması ve as olması.", cevap: "sag", neden: "Kupa ası hem kupadır hem asdır." }
          ] },
        { tip: "tuzak", baslik: "Ayrık olay ile tamlayıcı olay aynı şey değil", metin: "Her olay ile tamlayıcısı ayrıktır ve birlikte hepsini kapsar. Ama zarın 2 ve 5 gelmesi ayrık olsa da 1, 3, 4, 6 hâlâ geride kalır; olasılıkları toplamı 1 değil.", yanlis: "Ayrık olayların olasılıkları toplamı hep 1'dir.", dogru: "Toplamı 1 yapan, olaylar ==ayrık ve tüm sonuçları kapsıyorsa== olur (A ve Aᶜ gibi). Yalnızca ayrık olmak yetmez." }
      ]
    },
    {
      baslik: "Ayrıksa olasılıklar toplanır",
      kisa: "A ve B ayrıksa P(A veya B) = P(A) + P(B).",
      bloklar: [
        { tip: "tablo", baslik: "200 öğrencinin okula geliş şekli", head: ["Geliş şekli", "Öğrenci sayısı", "Olasılık"], rows: [
            ["Servis", "80", "80/200 = 0,40"],
            ["Otobüs", "50", "50/200 = 0,25"],
            ["Metro", "40", "40/200 = 0,20"],
            ["Yürüyüş", "30", "30/200 = 0,15"],
            ["Toplam", "200", "1,00"]
          ], vurgu: 4, not: "Her öğrenci tek bir geliş şekli seçmiş: dört olay ayrık." },
        { tip: "formul", parcalar: [{ t: "P(A veya B)", alt: "A ∪ B" }, "=", { t: "P(A)", alt: "A'nın olasılığı" }, "+", { t: "P(B)", alt: "B'nin olasılığı" }], aciklama: "Yalnızca ==A ve B ayrıkken== geçerli. Üç ya da daha çok ayrık olay için bütün olasılıklar toplanır." },
        { tip: "ornek", baslik: "Servis ya da otobüs", durum: "200 öğrenciden rastgele biri seçiliyor. Servisle ya da otobüsle gelme olasılığını ve yürüyerek gelmeme olasılığını bul.",
          adimlar: ["Servis ve otobüs ayrık: bir öğrenci tek araç kullanır.", "P(servis veya otobüs) = 0,40 + 0,25 = 0,65. Sayıyla: (80 + 50)/200 = 130/200 = 0,65.", "Üç olay: P(servis, otobüs veya metro) = 0,40 + 0,25 + 0,20 = 0,85 = 170/200; bu, yürüyerek gelmeme olasılığı.", "Kontrol: 1 − P(yürüyüş) = 1 − 0,15 = 0,85. Aynı sonuç."],
          sonuc: "P(servis veya otobüs) = 130/200 = ==0,65==; P(yürüyerek gelmeme) = 170/200 = 0,85." }
      ]
    },
    {
      baslik: "Ayrık değilse kesişimi bir kez çıkar",
      kisa: "Ortak sonuçlar toplamda iki kez sayılır; P(A ve B)'yi bir kez çıkar.",
      bloklar: [
        { tip: "grafik", baslik: "Alan modeli: karenin %100'ü örnek uzay", xlabel: "Karenin tamamı = 1", ylabel: "", xmax: 10, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 10, label: "1" }],
          ogeler: [
            { id: "k1", tip: "cizgi", renk: 3, kesik: true, from: [0, 0], to: [10, 0] },
            { id: "k2", tip: "cizgi", renk: 3, kesik: true, from: [10, 0], to: [10, 10] },
            { id: "k3", tip: "cizgi", renk: 3, kesik: true, from: [10, 10], to: [0, 10] },
            { id: "k4", tip: "cizgi", renk: 3, kesik: true, from: [0, 10], to: [0, 0] },
            { id: "a", tip: "alan", renk: 0, noktalar: [[0, 0], [0, 6], [5, 6], [5, 0]], gizli: true },
            { id: "ya", tip: "yazi", x: 2, y: 2.5, metin: "A: %30", gizli: true },
            { id: "b", tip: "alan", renk: 2, noktalar: [[6, 0], [6, 5], [10, 5], [10, 0]], gizli: true },
            { id: "yb", tip: "yazi", x: 8, y: 2, metin: "B: %20", gizli: true },
            { id: "kes", tip: "alan", renk: 1, noktalar: [[4, 3], [4, 6], [5, 6], [5, 3]], gizli: true },
            { id: "yk", tip: "yazi", x: 6.2, y: 9, metin: "Kesişim: %3", gizli: true }
          ],
          durumlar: [
            { metin: "Karenin alanı = 100 birim; bir olayın olasılığı kapladığı alan yüzdesi. A: 5 × 6 = 30 birim, P(A) = 0,30.", goster: ["a", "ya"] },
            { metin: "B: 4 × 5 = 20 birim, P(B) = 0,20. İkisi ==ayrık==: kesişim yok, P(A veya B) = 0,30 + 0,20 = 0,50.", goster: ["b", "yb"] },
            { metin: "B'yi A'nın üstüne kaydır. Yine 4 × 5 = 20 birim ama ortak bir kutu doğdu: 1 × 3 = 3 birim, P(A ve B) = 0,03.", set: { b: { noktalar: [[4, 3], [4, 8], [8, 8], [8, 3]] }, yb: { x: 6.5, y: 6.5 } }, goster: ["kes", "yk"] },
            { metin: "0,30 + 0,20 = 0,50 yazarsan ortak kutuyu iki kez saymış olursun. Bir kez çıkar: 0,50 − 0,03 = ==0,47==." }
          ] },
        { tip: "formul", parcalar: [{ t: "P(A veya B)", alt: "A ∪ B" }, "=", { t: "P(A)", alt: "A'nın olasılığı" }, "+", { t: "P(B)", alt: "B'nin olasılığı" }, "−", { t: "P(A ve B)", alt: "kesişim bir kez fazla sayıldı" }], aciklama: "Genel toplama kuralı: *general addition rule*. A ve B ayrıksa P(A ve B) = 0 olur ve formül basit toplamaya döner." }
      ]
    },
    {
      baslik: "İki yönlü tabloda \"A veya B\"",
      kisa: "Tabloda hücreleri tek tek say ya da genel toplama kuralını kullan.",
      bloklar: [
        { tip: "tablo", baslik: "200 öğrenci: spor ve müzik kulübü", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [
            ["Spor ✓", "30", "60", "90"],
            ["Spor ✗", "30", "80", "110"],
            ["Toplam", "60", "140", "200"]
          ], not: "30 öğrenci hem sporda hem müzikte: iki olay ayrık değil." },
        { tip: "ornek", baslik: "Spor veya müzik kulübü", durum: "200 öğrenciden biri rastgele seçiliyor. Spor veya müzik kulübünden en az birine üye olma olasılığı ve hiçbirine üye olmama olasılığı nedir?",
          adimlar: ["P(spor) = 90/200 = 0,45; P(müzik) = 60/200 = 0,30; P(spor ve müzik) = 30/200 = 0,15.", "Genel toplama: P(spor veya müzik) = 0,45 + 0,30 − 0,15 = 0,60.", "Hücre sayımıyla kontrol: 30 + 60 + 30 = 120; 120/200 = 0,60.", "Hiçbiri: 80/200 = 0,40 = 1 − 0,60."],
          sonuc: "P(spor veya müzik) = 120/200 = ==0,60==; P(hiçbiri) = 80/200 = 0,40." },
        { tip: "tuzak", baslik: "\"Toplam\" sütunlarını toplayıp bitirme", metin: "(90 + 60)/200 = 0,75 yazmak çok yaygın hata: ortak 30 öğrenci hem spor hem müzik satırında sayıldı. Sınavda ayrık olup olmadığını önce kontrol et.", yanlis: "P(S veya M) = 0,45 + 0,30 = 0,75.", dogru: "Ayrık değilse kesişimi çıkar: 0,45 + 0,30 − 0,15 = ==0,60==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Mutually exclusive* olaylar aynı anda gerçekleşemez; ortak sonuçları yoktur ve P(A ve B) = 0.",
            "Ayrık olaylar için P(A veya B) = P(A) + P(B); üç ya da daha çok ayrık olay da aynı şekilde toplanır.",
            "Ayrık olmayan olaylar için *general addition rule*: P(A veya B) = P(A) + P(B) − P(A ve B).",
            "Toplarken ortak sonuçlar iki kez sayılır; bu yüzden kesişim bir kez çıkarılır.",
            "İstatistikte \"veya\" kapsayıcıdır: A, B ya da ikisi birden.",
            "İki yönlü tabloda P(A veya B) için hücreleri say (30 + 60 + 30 = 120) ya da formülü kullan; ikisi aynı sonucu verir.",
            "Ayrık ve tamlayıcı olayları karıştırma: A ve Aᶜ toplamı 1'dir; iki ayrık olay her zaman bütünü kapsamaz.",
            "P(hiçbiri) = 1 − P(A veya B)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir okul sınıfından rastgele bir öğrenci seçiliyor. Aşağıdaki olay çiftlerinden hangisi *mutually exclusive*'tir?",
      opts: ["Öğrencinin kız olması ve öğrencinin gözlüklü olması", "Öğrencinin 10. sınıfta olması ve öğrencinin 11. sınıfta olması", "Öğrencinin spor kulübüne üye olması ve öğrencinin müzik kulübüne üye olması", "Öğrencinin servisle gelmesi ve öğrencinin 9. sınıfta olması"],
      a: 1,
      why: "Bir öğrenci aynı anda yalnızca tek sınıfta okur; ortak sonuç yok. C en çekici yanlış şık: iki kulübe de üye olan öğrenci olabilir, o yüzden olaylar ayrık değil." },
    { q: "200 öğrencinin okula geliş şekli tabloda. Rastgele seçilen bir öğrencinin otobüsle ya da yürüyerek gelme olasılığı nedir?",
      fig: { type: "table", caption: "Okula geliş şekli", head: ["Servis", "Otobüs", "Metro", "Yürüyüş", "Toplam"], rows: [["80", "50", "40", "30", "200"]] },
      opts: ["0,25 × 0,15 ≈ 0,038", "0,25", "0,15", "0,40"],
      a: 3,
      why: "Olaylar ayrık: P = 50/200 + 30/200 = 80/200 = 0,40. A en çekici yanlış şık: çarpmak \"ve\" içindir; \"veya\" için toplanır." },
    { q: "A ve B olayları için P(A) = 0,50, P(B) = 0,30 ve P(A ve B) = 0,10 veriliyor. P(A veya B) nedir?",
      opts: ["0,70", "0,80", "0,15", "0,90"],
      a: 0,
      why: "P(A veya B) = 0,50 + 0,30 − 0,10 = 0,70. B en çekici yanlış şık: 0,50 + 0,30 toplamında kesişimin iki kez sayıldığını görmez." },
    { q: "A ve B ayrık iki olay, P(A) = 0,40 ve P(B) = 0,35. A'nın da B'nin de gerçekleşmemesi (hiçbirinin olmaması) olasılığı nedir?",
      opts: ["0,75", "0,14", "0,25", "0,60"],
      a: 2,
      why: "A ve B ayrık: P(A veya B) = 0,40 + 0,35 = 0,75; hiçbiri olmaz = 1 − 0,75 = 0,25. B şıkkı 0,40 × 0,35 = 0,14'tür, bu yanlış bir çarpma. A ise birleşimin kendisidir, tamlayıcı değil." },
    { q: "Tablo 200 öğrencinin spor ve müzik kulübü üyeliğini gösteriyor. Rastgele seçilen bir öğrencinin en az bir kulübe üye olma olasılığı nedir?",
      fig: { type: "table", caption: "Kulüp üyeliği", head: ["", "Müzik ✓", "Müzik ✗", "Toplam"], rows: [["Spor ✓", "30", "60", "90"], ["Spor ✗", "30", "80", "110"], ["Toplam", "60", "140", "200"]] },
      opts: ["150/200 = 0,75", "120/200 = 0,60", "30/200 = 0,15", "80/200 = 0,40"],
      a: 1,
      why: "30 + 60 + 30 = 120 öğrenci en az bir kulüpte: 120/200 = 0,60. A en çekici yanlış şık: (90 + 60)/200, 30 ortak öğrenciyi iki kez sayar. D şıkkı hiçbir kulübe üye olmama olasılığıdır." }
  ]
};
