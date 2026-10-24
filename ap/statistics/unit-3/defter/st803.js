/* Kitpath not defteri · st803 · 8.4 İki Yönlü Tabloda Beklenen Sayılar
   Kaynak: AP Statistics CED Unit 8 (Topic 8.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st803",
  amac: "Bu konu iki yönlü tablolarda beklenen sayıların nasıl bulunduğunu anlatıyor: (satır toplamı × sütun toplamı) ÷ genel toplam. Kenar toplamlarını okumayı, df = (r − 1)(c − 1) formülünü ve Large Counts koşulunu öğreneceksin.",
  bolumler: [
    {
      baslik: "İki yönlü tablo ve toplamlar",
      kisa: "Satır ve sütun toplamları, beklenen sayıların hammaddesidir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🗃️", terim: "Two-way table", tr: "iki yönlü tablo", tanim: "İki kategorik değişkeni satır ve sütunlarda birlikte gösteren sayım tablosu.", ornek: "Satır: sınıf düzeyi, sütun: okula geliş şekli." },
            { ikon: "➕", terim: "Marginal total", tr: "kenar toplamı", tanim: "Bir satırın ya da sütunun toplamı. Tablonun kenarında durur.", ornek: "9. sınıf satırı toplamı 60 öğrenci." },
            { ikon: "🔲", terim: "Cell count", tr: "hücre sayısı", tanim: "Belirli bir satır ve sütunun kesiştiği hücredeki gözlenen sayı.", ornek: "9. sınıf ve servis: 36 öğrenci." }
          ] },
        { tip: "tablo", baslik: "Rastgele seçilen 100 öğrenci: sınıf ve okula geliş şekli", head: ["", "Servis", "Toplu taşıma", "Yürüyüş", "Toplam"], rows: [
            ["9. sınıf", "36", "14", "10", "60"],
            ["10. sınıf", "14", "16", "10", "40"],
            ["Toplam", "50", "30", "20", "100"]
          ], vurgu: 2, not: "Kenar toplamları: satırlar 60 ve 40, sütunlar 50, 30 ve 20; genel toplam 100." }
      ]
    },
    {
      baslik: "Fikir: ilişki yoksa her satır genel dağılıma benzer",
      kisa: "Değişkenler ilişkisizse her grup, genel dağılımı kendi büyüklüğüne uygular.",
      bloklar: [
        { tip: "adimlar", baslik: "9. sınıf satırı için beklenen sayılar", adimlar: [
            { baslik: "1 · Genel dağılımı bul", metin: "100 öğrencinin 50’si servisle, 30’u toplu taşımayla, 20’si yürüyerek geliyor: %50, %30, %20." },
            { baslik: "2 · İlişki yok varsay", metin: "Sınıf düzeyi geliş şeklini etkilemiyorsa 9. sınıftaki 60 öğrenci de aynı yüzdelerle dağılır: 60 × 0,50 = 30 servis." },
            { baslik: "3 · Diğer hücreler", metin: "Toplu taşıma: 60 × 0,30 = 18. Yürüyüş: 60 × 0,20 = 12. Bunlar ==ilişki olmasaydı beklenen== sayılardır." }
          ] },
        { tip: "grafik", baslik: "9. sınıf satırı: beklenen ve gözlenen", xlabel: "Geliş şekli", ylabel: "Öğrenci sayısı", xmax: 4, ymax: 9,
          xticks: [{ v: 1, label: "Servis" }, { v: 2, label: "Toplu" }, { v: 3, label: "Yürüyüş" }],
          yticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }, { v: 8, label: "40" }],
          ogeler: [
            {"id":"e1","tip":"alan","renk":1,"noktalar":[[0.66,0],[0.66,6],[0.96,6],[0.96,0]],"gizli":true},
            {"id":"el1","tip":"yazi","x":0.81,"y":6.45,"metin":"30","gizli":true},
            {"id":"e2","tip":"alan","renk":1,"noktalar":[[1.66,0],[1.66,3.6],[1.96,3.6],[1.96,0]],"gizli":true},
            {"id":"el2","tip":"yazi","x":1.81,"y":4.05,"metin":"18","gizli":true},
            {"id":"e3","tip":"alan","renk":1,"noktalar":[[2.66,0],[2.66,2.4],[2.96,2.4],[2.96,0]],"gizli":true},
            {"id":"el3","tip":"yazi","x":2.81,"y":2.85,"metin":"12","gizli":true},
            {"id":"o1","tip":"alan","renk":0,"noktalar":[[1.04,0],[1.04,7.2],[1.34,7.2],[1.34,0]],"gizli":true},
            {"id":"ol1","tip":"yazi","x":1.19,"y":7.65,"metin":"36","gizli":true},
            {"id":"o2","tip":"alan","renk":0,"noktalar":[[2.04,0],[2.04,2.8],[2.34,2.8],[2.34,0]],"gizli":true},
            {"id":"ol2","tip":"yazi","x":2.19,"y":3.25,"metin":"14","gizli":true},
            {"id":"o3","tip":"alan","renk":0,"noktalar":[[3.04,0],[3.04,2],[3.34,2],[3.34,0]],"gizli":true},
            {"id":"ol3","tip":"yazi","x":3.19,"y":2.45,"metin":"10","gizli":true},
            {"id":"d1","tip":"yazi","x":1,"y":8.4,"metin":"+6","gizli":true},
            {"id":"d2","tip":"yazi","x":2,"y":8.4,"metin":"−4","gizli":true},
            {"id":"d3","tip":"yazi","x":3,"y":8.4,"metin":"−2","gizli":true}
          ],
          durumlar: [
            { metin: "İlişki yoksa 60 öğrencilik 9. sınıfta ==beklenen==: 30 servis, 18 toplu taşıma, 12 yürüyüş.", goster: ["e1", "e2", "e3", "el1", "el2", "el3"] },
            { metin: "Gerçekte ==gözlenen==: 36 servis, 14 toplu taşıma, 10 yürüyüş.", goster: ["o1", "o2", "o3", "ol1", "ol2", "ol3"] },
            { metin: "Farklar (O − E): +6, −4, −2. 9. sınıf, genel dağılıma göre biraz fazla servisle geliyor. Bu fark şans mı? (st804)", goster: ["d1", "d2", "d3"] }
          ] }
      ]
    },
    {
      baslik: "Formül: satır toplamı × sütun toplamı ÷ genel toplam",
      kisa: "Beklenen sayı = (satır toplamı × sütun toplamı) ÷ tablo toplamı.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "E", alt: "hücrenin beklenen sayısı" }, "=", { t: "(satır toplamı) × (sütun toplamı)", alt: "hücrenin bulunduğu satır ve sütun" }, "÷", { t: "tablo toplamı", alt: "genel toplam n" }], aciklama: "Aynı şey: satırın payı × sütunun payı × n. 9. sınıf (60/100) ve servis (50/100) için 0,60 × 0,50 × 100 = 30." },
        { tip: "ornek", baslik: "İki hücre için beklenen sayı", durum: "Satır toplamları 60 ve 40; sütun toplamları 50, 30, 20; genel toplam 100.",
          adimlar: ["9. sınıf ve servis: (60 × 50) ÷ 100 = 3000 ÷ 100 = 30.", "10. sınıf ve yürüyüş: (40 × 20) ÷ 100 = 800 ÷ 100 = 8.", "Aynı yöntemi altı hücreye de uygula."],
          sonuc: "E(9. sınıf, servis) = 30; E(10. sınıf, yürüyüş) = 8." },
        { tip: "tablo", baslik: "Beklenen sayılar tablosu", head: ["", "Servis", "Toplu taşıma", "Yürüyüş", "Toplam"], rows: [
            ["9. sınıf", "30", "18", "12", "60"],
            ["10. sınıf", "20", "12", "8", "40"],
            ["Toplam", "50", "30", "20", "100"]
          ], vurgu: 2, not: "Kontrol: beklenen tablonun satır ve sütun toplamları, gözlenen tablonunkilerle aynı olmalı (60, 40 / 50, 30, 20)." }
      ]
    },
    {
      baslik: "Gözlenen ve beklenen yan yana",
      kisa: "Hücre hücre O ile E’yi kıyasla; bu farklar sonraki konuda χ²’ye dönüşecek.",
      bloklar: [
        { tip: "tablo", baslik: "Gözlenen sayı (beklenen sayı)", head: ["", "Servis", "Toplu taşıma", "Yürüyüş"], rows: [
            ["9. sınıf", "36 (30)", "14 (18)", "10 (12)"],
            ["10. sınıf", "14 (20)", "16 (12)", "10 (8)"]
          ], not: "9. sınıfta servis beklenenden 6 fazla; 10. sınıfta servis 6 eksik, toplu taşıma 4 fazla." },
        { tip: "sekil", baslik: "Altı hücrede gözlenen ve beklenen", fig: { type: "bar", cats: ["9-Servis", "9-Toplu", "9-Yürüyüş", "10-Servis", "10-Toplu", "10-Yürüyüş"], series: [{ name: "Gözlenen", values: [36, 14, 10, 14, 16, 10] }, { name: "Beklenen", values: [30, 18, 12, 20, 12, 8] }], ylabel: "Öğrenci" } }
      ]
    },
    {
      baslik: "Serbestlik derecesi ve Large Counts",
      kisa: "df = (satır − 1)(sütun − 1); bütün beklenen sayılar en az 5 olmalı.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "df", alt: "serbestlik derecesi" }, "=", { t: "(r − 1)", alt: "satır sayısı − 1" }, "×", { t: "(c − 1)", alt: "sütun sayısı − 1" }], aciklama: "2×3 tablo için df = (2 − 1)(3 − 1) = 2. Kenar toplamları sabitken tabloda yalnızca 2 hücreyi özgürce doldurabilirsin; kalanlar toplamlardan çıkar." },
        { tip: "ornek", baslik: "Large Counts kontrolü", durum: "Beklenen sayılar tablosundaki en küçük değere bak.",
          adimlar: ["Altı beklenen sayı: 30, 18, 12, 20, 12, 8.", "En küçüğü 8 ≥ 5 ✓, yani *Large Counts* sağlanır.", "*Random* ve %10 koşulları, verinin nasıl toplandığına bakılarak değerlendirilir (st804)."],
          sonuc: "Bütün beklenen sayılar en az 5; ki-kare yaklaşımı güvenilir." },
        { tip: "tuzak", baslik: "df’yi hücre sayısından bulma", metin: "Uyum iyiliğindeki df = kategori − 1 kuralını iki yönlü tabloya taşıma. Burada satır ve sütun sayıları ayrı ayrı hesaba girer.",
          yanlis: "Altı hücre var, df = 6 − 1 = 5.",
          dogru: "df = (r − 1)(c − 1) = (2 − 1)(3 − 1) = 2." }
      ]
    },
    {
      baslik: "2×2 tablo: tek hücre yetmez mi?",
      kisa: "2×2 tabloda bir beklenen sayıyı bulunca diğerleri toplamlardan gelir; df = 1.",
      bloklar: [
        { tip: "tablo", baslik: "Sosyal medya süresi ve uyku (n = 100)", head: ["", "Uyku yetersiz", "Uyku yeterli", "Toplam"], rows: [
            ["Günde 2+ saat", "24", "16", "40"],
            ["Günde 2 saatten az", "21", "39", "60"],
            ["Toplam", "45", "55", "100"]
          ], not: "Gözlenen sayılar. Satır toplamları 40 ve 60, sütun toplamları 45 ve 55." },
        { tip: "ornek", baslik: "Dört beklenen sayıyı çıkar", durum: "Yukarıdaki tablo için beklenen sayıları bul.",
          adimlar: ["Sol üst: (40 × 45) ÷ 100 = 18.", "Sağ üst: satır toplamı 40 − 18 = 22 (ya da 40 × 55 ÷ 100 = 22).", "Sol alt: sütun toplamı 45 − 18 = 27 (ya da 60 × 45 ÷ 100 = 27).", "Sağ alt: 60 − 27 = 33 (ya da 60 × 55 ÷ 100 = 33). df = (2 − 1)(2 − 1) = 1."],
          sonuc: "Beklenen sayılar: 18, 22, 27, 33. En küçüğü 18 ≥ 5, *Large Counts* sağlanır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "İki yönlü tablo iki kategorik değişkeni birlikte gösterir; kenar toplamları satır ve sütun toplamlarıdır.",
            "İlişki yoksa her satır, tablonun genel dağılımını kendi toplamına uygular.",
            "E = (satır toplamı × sütun toplamı) ÷ genel toplam. Beklenen sayılar kesirli olabilir.",
            "Beklenen tablonun satır ve sütun toplamları gözlenenle aynıdır; bu bir hesap kontrolüdür.",
            "df = (r − 1)(c − 1); 2×2 tabloda df = 1.",
            "*Large Counts*: bütün beklenen sayılar en az 5 (gözlenenlere değil beklenenlere bak).",
            "O − E farkları, ki-kare istatistiğinin ham maddesidir (st804)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Rastgele seçilen 100 öğrencinin cinsiyeti ve en çok katıldığı etkinlik türü aşağıda gösteriliyor. İki değişken ilişkisizse, kız öğrenci ve “Sosyal” için beklenen sayı kaçtır?",
      fig: { type: "table", head: ["", "Kulüp", "Sosyal", "Hiçbiri", "Toplam"], rows: [["Kız", 20, 28, 12, 60], ["Erkek", 10, 22, 8, 40], ["Toplam", 30, 50, 20, 100]], caption: "Gözlenen sayılar" },
      opts: ["28", "30", "25", "18"],
      a: 1,
      why: "E = (satır toplamı × sütun toplamı) ÷ genel toplam = (60 × 50) ÷ 100 = 30. 28 gözlenen sayıdır; 18 ise Kız ve Kulüp hücresinin beklenen sayısıdır (60 × 30 ÷ 100)." },
    { q: "3 satır ve 4 sütunluk bir iki yönlü tablo için ki-kare testinin serbestlik derecesi kaçtır?",
      opts: ["12", "7", "6", "11"],
      a: 2,
      why: "df = (r − 1)(c − 1) = (3 − 1)(4 − 1) = 6. 12 hücre sayısıdır, 11 ise hücre sayısı − 1 hatasıdır; 7 ise 3 + 4 olur ama df toplam değil çarpımdır." },
    { q: "Aşağıdaki tablo bir iki yönlü ki-kare testi için hesaplanan beklenen sayıları veriyor. Hangi ifade doğrudur?",
      fig: { type: "table", head: ["Beklenen sayı", "Sütun 1", "Sütun 2", "Sütun 3"], rows: [["Satır 1", 12, 8, 4.5], ["Satır 2", 18, 12, 6.5]], caption: "Beklenen sayılar" },
      opts: ["*Large Counts* sağlanmıyor çünkü bir beklenen sayı 5’ten küçük.", "*Large Counts* sağlanıyor çünkü toplam 61 ve 5’ten büyük.", "*Large Counts* sağlanıyor çünkü gözlenen sayılar büyük olabilir.", "*Large Counts* beklenen sayılara değil satır toplamlarına bakar."],
      a: 0,
      why: "Koşul, her beklenen sayının en az 5 olmasını ister. 4,5 < 5 olduğundan sağlanmıyor. Gözlenen sayılara ya da toplamlara bakmak koşulun anlamını değiştirir." },
    { q: "Bir iki yönlü tabloda “9. sınıf ve servis” hücresinde gözlenen sayı 36, beklenen sayı 30’dur. Bu, nasıl yorumlanır?",
      opts: ["30 öğrenci bu hücrede olmalıydı ve 6 öğrenci yanlış sayılmıştır.", "Beklenen sayı gözlenenden küçük olduğu için H₀ otomatik reddedilir.", "Beklenen sayı, gözlenen sayıya eşit olmak zorundadır.", "İki değişken ilişkisiz olsaydı bu hücrede ortalamada 30 öğrenci beklenirdi; gözlenen sayı bunun 6 üzerinde."],
      a: 3,
      why: "Beklenen sayı, H₀ doğruyken (ilişki yokken) beklenen ortalama sayıdır; gözlenenden farklı olması hata değil, ilişkinin olası belirtisidir. Karar tek bir hücreye değil, tüm farkların özetine (χ²) dayanır." },
    { q: "2×2 bir tabloda satır toplamları 40 ve 60, sütun toplamları 45 ve 55’tir (n = 100). Sol üst hücrenin beklenen sayısı 18 ise sağ alt hücrenin beklenen sayısı kaçtır?",
      opts: ["33", "27", "22", "36"],
      a: 0,
      why: "Sağ alt: (60 × 55) ÷ 100 = 33. Kısa yol: 2. satır toplamı 60 − sol alt (60 × 45 ÷ 100 = 27) = 33. 22 sağ üst hücrenin, 27 sol alt hücrenin beklenen sayısıdır." }
  ]
};
