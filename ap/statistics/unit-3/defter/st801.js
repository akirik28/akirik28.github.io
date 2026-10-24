/* Kitpath not defteri · st801 · 8.1–8.2 Ki-Kare Uyum İyiliği Testini Kurmak
   Kaynak: AP Statistics CED Unit 8 (Topic 8.1–8.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st801",
  amac: "Bu konu ki-kare uyum iyiliği testinin nasıl kurulduğunu anlatıyor: tek bir kategorik değişkenin dağılımı iddia edilen dağılıma uyuyor mu? *Observed* ve *expected counts*, hipotezler ve koşulları öğreneceksin; hesabı sonraki konuda yapacağız.",
  bolumler: [
    {
      baslik: "Sonuçlar beklenmedik mi?",
      kisa: "Gözlenen sayılar, iddia doğruysa beklenen sayılardan şansla ne kadar uzaklaşır?",
      bloklar: [
        { tip: "hikaye", ikon: "🥪", baslik: "Kantinin iddiası",
          metin: "Kantin müdürü diyor ki: “Satılan tostların %40’ı kaşarlı, %30’u sucuklu, %20’si karışık, %10’u vegan.” Bir hafta boyunca 200 tost sayıyorsun: 70 kaşarlı, 72 sucuklu, 38 karışık, 20 vegan. ==Bu fark şans eseri mi, yoksa iddia mı yanlış?==" },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔢", terim: "Observed count", tr: "gözlenen sayı", tanim: "Örneklemde gerçekten saydığın sayı.", ornek: "200 tostun 70’i kaşarlı çıktı." },
            { ikon: "🎯", terim: "Expected count", tr: "beklenen sayı", tanim: "İddia doğru olsaydı ortalamada bekleyeceğin sayı. Tam sayı olmak zorunda değil.", ornek: "%40 iddiasıyla 200 tostta 80 kaşarlı beklenir." },
            { ikon: "📏", terim: "Goodness of fit", tr: "uyum iyiliği", tanim: "Gözlenen dağılımın iddia edilen dağılıma ne kadar uyduğunu ölçen test fikri.", ornek: "Dört çeşidin satış dağılımı iddiaya uyuyor mu?" }
          ] },
        { tip: "grafik", baslik: "Kantin iddiası: beklenen ve gözlenen tost sayısı", xlabel: "Tost çeşidi", ylabel: "Tost sayısı", xmax: 5, ymax: 10,
          xticks: [{ v: 1, label: "Kaşarlı" }, { v: 2, label: "Sucuklu" }, { v: 3, label: "Karışık" }, { v: 4, label: "Vegan" }],
          yticks: [{ v: 2, label: "20" }, { v: 4, label: "40" }, { v: 6, label: "60" }, { v: 8, label: "80" }],
          ogeler: [
            {"id":"e1","tip":"alan","renk":1,"noktalar":[[0.66,0],[0.66,8],[0.96,8],[0.96,0]],"gizli":true},
            {"id":"el1","tip":"yazi","x":0.81,"y":8.45,"metin":"80","gizli":true},
            {"id":"e2","tip":"alan","renk":1,"noktalar":[[1.66,0],[1.66,6],[1.96,6],[1.96,0]],"gizli":true},
            {"id":"el2","tip":"yazi","x":1.81,"y":6.45,"metin":"60","gizli":true},
            {"id":"e3","tip":"alan","renk":1,"noktalar":[[2.66,0],[2.66,4],[2.96,4],[2.96,0]],"gizli":true},
            {"id":"el3","tip":"yazi","x":2.81,"y":4.45,"metin":"40","gizli":true},
            {"id":"e4","tip":"alan","renk":1,"noktalar":[[3.66,0],[3.66,2],[3.96,2],[3.96,0]],"gizli":true},
            {"id":"el4","tip":"yazi","x":3.81,"y":2.45,"metin":"20","gizli":true},
            {"id":"o1","tip":"alan","renk":0,"noktalar":[[1.04,0],[1.04,7],[1.34,7],[1.34,0]],"gizli":true},
            {"id":"ol1","tip":"yazi","x":1.19,"y":7.45,"metin":"70","gizli":true},
            {"id":"o2","tip":"alan","renk":0,"noktalar":[[2.04,0],[2.04,7.2],[2.34,7.2],[2.34,0]],"gizli":true},
            {"id":"ol2","tip":"yazi","x":2.19,"y":7.65,"metin":"72","gizli":true},
            {"id":"o3","tip":"alan","renk":0,"noktalar":[[3.04,0],[3.04,3.8],[3.34,3.8],[3.34,0]],"gizli":true},
            {"id":"ol3","tip":"yazi","x":3.19,"y":4.25,"metin":"38","gizli":true},
            {"id":"o4","tip":"alan","renk":0,"noktalar":[[4.04,0],[4.04,2],[4.34,2],[4.34,0]],"gizli":true},
            {"id":"ol4","tip":"yazi","x":4.19,"y":2.45,"metin":"20","gizli":true},
            {"id":"d1","tip":"yazi","x":1,"y":9.4,"metin":"−10","gizli":true},
            {"id":"d2","tip":"yazi","x":2,"y":9.4,"metin":"+12","gizli":true},
            {"id":"d3","tip":"yazi","x":3,"y":9.4,"metin":"−2","gizli":true},
            {"id":"d4","tip":"yazi","x":4,"y":9.4,"metin":"0","gizli":true}
          ],
          durumlar: [
            { metin: "İddia doğruysa 200 tostta ==beklenen== sayılar 80, 60, 40, 20 olurdu.", goster: ["e1", "e2", "e3", "e4", "el1", "el2", "el3", "el4"] },
            { metin: "Gerçekte ==gözlenen== sayılar 70, 72, 38, 20 çıktı.", goster: ["o1", "o2", "o3", "o4", "ol1", "ol2", "ol3", "ol4"] },
            { metin: "Fark (O − E): −10, +12, −2, 0. Soru: Bu farklar şansla açıklanabilecek kadar küçük mü? Ki-kare testi bunu cevaplar.", goster: ["d1", "d2", "d3", "d4"] }
          ] }
      ]
    },
    {
      baslik: "Hangi test? Tek değişken, ikiden çok kategori",
      kisa: "Tek kategorik değişkenin dağılımını bir iddiayla kıyaslıyorsan uyum iyiliği testi kullan.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "1️⃣", baslik: "*One-proportion z-test*", maddeler: ["Tek bir kategorinin oranı", "İki sonuç var: o kategori / diğerleri", "H₀: p = p₀"] },
          sag: { ikon: "🧮", baslik: "*Chi-square goodness-of-fit test*", maddeler: ["Üç ya da daha çok kategori", "Bütün oranlar birlikte sınanır", "H₀: her pᵢ iddia edilen değere eşit"] },
          oyun: [
            { metin: "Tostların %40’ının kaşarlı olduğu iddiası (kaşarlı / değil).", cevap: "sol", neden: "Yalnızca bir kategorinin oranı soruluyor: *z-test for one proportion*." },
            { metin: "Dört tost çeşidinin satış dağılımı iddiayla uyuşuyor mu?", cevap: "sag", neden: "Dört kategorinin hepsi birlikte sınanıyor: *goodness-of-fit*." },
            { metin: "Kantin kuyruğundaki öğrencilerin haftanın 5 gününe eşit dağılıp dağılmadığı.", cevap: "sag", neden: "Beş kategori, eşit dağılım iddiası: *goodness-of-fit*." },
            { metin: "Yeni bir içeceğin satılan paketlerin yarısından fazlasını oluşturduğu iddiası.", cevap: "sol", neden: "Tek bir oran, tek yönlü hipotez: *z-test for one proportion*." }
          ] },
        { tip: "tablo", baslik: "Ki-kare yol haritası: hangi durumda hangi test?", head: ["Veri nasıl toplandı?", "Kaç kategorik değişken?", "Test"], rows: [
            ["Tek örneklem", "Bir değişken; iddia edilen dağılımla kıyas", "==Uyum iyiliği (bu defter)=="],
            ["Birkaç ayrı grup / örneklem", "Bir değişken; gruplar aynı dağılımda mı?", "Homojenlik (st804)"],
            ["Tek örneklem", "İki değişken; ilişki var mı?", "Bağımsızlık (st804)"]
          ], vurgu: 0, not: "Üçü de aynı ki-kare istatistiğini kullanır; fark, veri toplama biçiminde ve hipotezlerin yazılışında." }
      ]
    },
    {
      baslik: "Hipotezleri yazmak",
      kisa: "H₀: dağılım iddia edildiği gibi; Hₐ: en az bir oran farklı.",
      bloklar: [
        { tip: "tablo", baslik: "Kantinin iddiası ve elimizdeki örneklem", head: ["Tost çeşidi", "İddia edilen oran (H₀)", "Gözlenen sayı"], rows: [
            ["Kaşarlı", "0,40", "70"],
            ["Sucuklu", "0,30", "72"],
            ["Karışık", "0,20", "38"],
            ["Vegan", "0,10", "20"]
          ], not: "İddia edilen oranların toplamı 1 olmalı: 0,40 + 0,30 + 0,20 + 0,10 = 1." },
        { tip: "ornek", baslik: "Hipotezleri bağlamıyla yaz", durum: "Kantin müdürünün iddiasını sınamak için hipotezleri kur.",
          adimlar: ["H₀: Kantinde satılan tostların dağılımı iddia edildiği gibidir: p(kaşarlı) = 0,40, p(sucuklu) = 0,30, p(karışık) = 0,20, p(vegan) = 0,10.", "Hₐ: Satılan tostların dağılımı iddia edilenden farklıdır; yani bu oranlardan en az biri yanlıştır (*at least one proportion differs*)."],
          sonuc: "H₀ iddiayı aynen tekrar eder; Hₐ ise “en az biri farklı” der. Her ikisini de tost satışı bağlamıyla yaz." },
        { tip: "tuzak", baslik: "Hₐ’da yön yok", metin: "Uyum iyiliği testinin alternatifi “büyük” ya da “küçük” demez; dağılımın bütününü sınar. “Bütün oranlar farklı” da yanlıştır.",
          yanlis: "Hₐ: p(kaşarlı) < 0,40 ya da Hₐ: bütün oranlar farklı.",
          dogru: "Hₐ: en az bir pᵢ iddia edilenden farklı (*at least one proportion differs*)." }
      ]
    },
    {
      baslik: "Beklenen sayılar: n × pᵢ",
      kisa: "Beklenen sayı = örneklem büyüklüğü × H₀’daki oran.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "Eᵢ", alt: "beklenen sayı (expected count)" }, "=", { t: "n", alt: "örneklem büyüklüğü" }, "×", { t: "pᵢ", alt: "H₀’daki oran" }], aciklama: "Beklenen sayıların toplamı n’ye eşit olmalıdır; bu bir hesap kontrolüdür." },
        { tip: "ornek", baslik: "Kantin için beklenen sayılar", durum: "n = 200 tost; H₀ oranları 0,40, 0,30, 0,20, 0,10.",
          adimlar: ["Kaşarlı: 200 × 0,40 = 80.", "Sucuklu: 200 × 0,30 = 60.", "Karışık: 200 × 0,20 = 40.", "Vegan: 200 × 0,10 = 20.", "Kontrol: 80 + 60 + 40 + 20 = 200 ✓."],
          sonuc: "Beklenen sayılar 80, 60, 40, 20. Toplam, gözlenenlerin toplamıyla (200) aynı." },
        { tip: "tablo", baslik: "Gözlenen ve beklenen yan yana", head: ["Tost çeşidi", "Gözlenen (O)", "Beklenen (E)", "O − E"], rows: [
            ["Kaşarlı", "70", "80", "−10"],
            ["Sucuklu", "72", "60", "+12"],
            ["Karışık", "38", "40", "−2"],
            ["Vegan", "20", "20", "0"]
          ], vurgu: 1, not: "Bu farkları bir sonraki konuda tek bir sayıya (ki-kare istatistiğine) dönüştüreceğiz." }
      ]
    },
    {
      baslik: "Koşullar: Random, 10%, Large Counts",
      kisa: "Rastgele örneklem, bağımsızlık (%10) ve her beklenen sayı en az 5.",
      bloklar: [
        { tip: "adimlar", baslik: "Üç koşulu kontrol et", adimlar: [
            { baslik: "1 · *Random*", metin: "Veri rastgele örneklemden (ya da rastgele atamadan) gelmeli. Kantin örneği: 200 satışı rastgele seç." },
            { baslik: "2 · *Independent* (%10 kuralı)", metin: "Yerine koymadan örnekleme yapıyorsan n, popülasyonun %10’unu aşmasın. Bir haftada 2000’den fazla tost satılıyorsa 200 uygundur." },
            { baslik: "3 · *Large Counts*", metin: "Bütün beklenen sayılar en az 5 olmalı: 80, 60, 40, 20 ≥ 5 ✓. Bu, ki-kare dağılımı yaklaşımını güvenilir yapar." }
          ] },
        { tip: "tuzak", baslik: "Large Counts beklenen sayılara bakar", metin: "Küçük sayı, gözlenen sayılarda değil beklenen sayılarda sorundur. Gözlenen bir hücre 3 olabilir; E ≥ 5 ise koşul sağlanır.",
          yanlis: "Bir hücrede 3 tost gözlendi, koşul bozuldu.",
          dogru: "Her E = n × pᵢ değeri en az 5 mi? Koşul E’ler için kontrol edilir." }
      ]
    },
    {
      baslik: "Baştan kur: haftanın günleri",
      kisa: "Eşit dağılım iddiasında her kategorinin H₀ oranı 1/k’dir.",
      bloklar: [
        { tip: "ornek", baslik: "Kantin kuyruğu hangi güne yığılıyor?", durum: "Kantin: “Tost satışları haftanın 5 gününe eşit dağılır.” Rastgele seçilen 150 satışta gün başına gözlenen: Pzt 40, Sal 22, Çar 25, Per 30, Cum 33.",
          adimlar: ["H₀: Her günün oranı 0,20 (beş gün eşit). Hₐ: en az bir günün oranı 0,20’den farklı.", "Test: ki-kare uyum iyiliği. Serbestlik derecesi *df* = kategori sayısı − 1 = 5 − 1 = 4.", "Beklenen: 150 × 0,20 = 30 her gün için; 30 ≥ 5 ✓.", "Koşullar: *Random* (150 satış rastgele seçildi), %10 (haftalık satış 1500’den fazla), *Large Counts* (E = 30)."],
          sonuc: "Test kuruldu: ki-kare uyum iyiliği, df = 4, her beklenen sayı 30. Hesabı sonraki konuda yapacağız." },
        { tip: "adimlar", baslik: "Kurulum şablonu (State ve Plan)", adimlar: [
            { baslik: "State", metin: "H₀ ve Hₐ’yı bağlamla yaz; anlamlılık düzeyi α’yı belirt." },
            { baslik: "Plan", metin: "Testin adını yaz (*chi-square test for goodness of fit*), koşulları kontrol et, beklenen sayıları ve df’yi ver." },
            { baslik: "Do ve Conclude", metin: "İstatistik ve p-değeri hesaplanır, bağlamla sonuç yazılır (st802)." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Uyum iyiliği testi, tek bir kategorik değişkenin dağılımını iddia edilen dağılımla kıyaslar (üç ya da daha çok kategori).",
            "Tek kategorinin oranı soruluyorsa *one-proportion z-test*; bütün dağılım soruluyorsa *chi-square goodness of fit*.",
            "H₀: dağılım iddia edildiği gibi (her pᵢ verilmiş); Hₐ: en az bir oran farklı. Hₐ’da yön olmaz.",
            "Beklenen sayı: Eᵢ = n × pᵢ. Toplamları n’ye eşit olmalı.",
            "Koşullar: *Random*, bağımsızlık (%10) ve *Large Counts* (bütün Eᵢ ≥ 5; gözlenenlere değil beklenenlere bak).",
            "df = kategori sayısı − 1.",
            "Eşit dağılım iddiasında pᵢ = 1/k; Eᵢ = n/k."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Öğrenci konseyi, bu yıl okula geliş şeklinin geçen yılki dağılıma (%50 servis, %30 toplu taşıma, %20 yürüyüş) uyup uymadığını test ediyor. Hangi hipotezler doğrudur?",
      opts: ["H₀: Üç ulaşım şeklinin oranları birbirine eşittir; Hₐ: Üçü de birbirinden farklıdır.", "H₀: p(servis) = 0,50, p(toplu taşıma) = 0,30, p(yürüyüş) = 0,20; Hₐ: bu oranlardan en az biri farklıdır.", "H₀: p(servis) = 0,50; Hₐ: p(servis) < 0,50.", "H₀: Ulaşım şekli ve sınıf düzeyi bağımsızdır; Hₐ: ilişkilidir."],
      a: 1,
      why: "Uyum iyiliği testinde H₀ iddia edilen dağılımın bütün oranlarını verir, Hₐ “en az bir oran farklı” der. A’da H₀ iddiayla ilgisiz bir eşitlik kuruyor ve Hₐ aşırı güçlü; C tek oranlı z-testidir; D ise bağımsızlık testinin hipotezleridir." },
    { q: "Aşağıdaki tablo, 240 öğrencilik rastgele bir ankette kulüp tercihlerini gösteriyor. Okul yönetimi “Spor %40, Müzik %35, Bilim %25” dağılımını iddia ediyor. İddia doğruysa Müzik için beklenen sayı kaçtır?",
      fig: { type: "table", head: ["Kulüp", "Gözlenen sayı"], rows: [["Spor", 110], ["Müzik", 80], ["Bilim", 50]], caption: "n = 240" },
      opts: ["35", "80", "96", "84"],
      a: 3,
      why: "Eₘüzik = n × p = 240 × 0,35 = 84. 80 gözlenen sayıdır, 96 ise Spor’un beklenen sayısıdır (240 × 0,40); 35 yüzdenin kendisidir." },
    { q: "Bir araştırmacı 10 kategorili bir değişkenin eşit dağıldığını test etmek için rastgele 40 öğrenci seçiyor. Hangi koşul sağlanmıyor olabilir?",
      opts: ["*Large Counts*: her kategori için beklenen sayı 40 × 0,10 = 4 ve bu 5’ten küçük.", "*Random*: 40 öğrenci rastgele seçildiği için koşul sağlanmaz.", "%10 koşulu: 40 öğrenci her zaman popülasyonun %10’undan fazladır.", "Normallik: gözlenen sayılar normal dağılmak zorundadır."],
      a: 0,
      why: "Eşit dağılımda her kategori için E = 40/10 = 4 < 5 olur, *Large Counts* bozulur. B’de koşulun sağlanmama nedeni yok; C’de 40, büyük bir okulun %10’undan küçüktür; D ise bu testin koşulu değildir." },
    { q: "Bir lise, rastgele seçtiği 120 öğrencinin doğum ayını kaydedip öğrencilerin 12 aya eşit dağılıp dağılmadığını sınamak istiyor. Hangi test uygundur?",
      opts: ["İki oran için z-testi", "Bağımsızlık için ki-kare testi", "Uyum iyiliği için ki-kare testi", "Eşli t-testi"],
      a: 2,
      why: "Tek örneklem, tek kategorik değişken (doğum ayı) ve iddia edilen dağılım (eşit): *chi-square goodness of fit*. Bağımsızlık testi iki kategorik değişken ister; z-testi iki kategorili tek oran içindir." },
    { q: "Bir kutudaki dragelerin 5 renkte eşit dağıldığı iddia ediliyor. Gözlenen renk sayılarıyla ki-kare uyum iyiliği testi yapılacak. Serbestlik derecesi (df) kaçtır?",
      opts: ["5", "4", "10", "n − 1, yani örneklem büyüklüğünden 1 eksik"],
      a: 1,
      why: "df = kategori sayısı − 1 = 5 − 1 = 4. D şıkkı t-testlerinin df’sine benzer ama burada df kategori sayısına bağlıdır, n’ye değil." }
  ]
};
