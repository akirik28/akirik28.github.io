/* Kitpath not defteri · st901 · 9.1–9.2 Eğim İçin Güven Aralığı
   Kaynak: AP Statistics CED Unit 9 (Topic 9.1–9.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st901",
  amac: "Bu konu regresyon doğrusunun eğimi için güven aralığını anlatıyor: örneklem eğimi b ile gerçek eğim β arasındaki fark, doğrusal regresyon koşulları, bilgisayar çıktısını okumak ve b ± t∗·SE_b aralığını kurup yorumlamak.",
  bolumler: [
    {
      baslik: "Örneklem doğrusu ve gerçek doğru",
      kisa: "Veriden bulduğun b eğimi, bütün popülasyondaki gerçek β eğimini tahmin eder.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Population regression line", tr: "popülasyon regresyon doğrusu", tanim: "Bütün popülasyon için gerçek doğru; eğimi β’dır ve hiçbir zaman bilinmez.", ornek: "Okuldaki bütün öğrenciler için çalışma saati ile ortalama puan arasındaki doğru." },
            { ikon: "✏️", terim: "Least-squares regression line", tr: "en küçük kareler doğrusu", tanim: "Örneklemdeki noktalara uydurulan doğru: ŷ = a + bx. Eğimi b’dir ve β için tahmindir.", ornek: "10 öğrencilik örneklemden ŷ = 47,4 + 2,84x." },
            { ikon: "📏", terim: "Standard error of the slope", tr: "eğimin standart hatası", tanim: "Örneklemden örnekleme b’nin ne kadar oynadığını ölçer; SE_b ile gösterilir.", ornek: "SE_b = 0,502: b her örneklemde yaklaşık bu kadar oynar." }
          ] },
        { tip: "grafik", baslik: "10 öğrenci: haftalık çalışma saati ve deneme puanı", xlabel: "Haftalık çalışma (saat)", ylabel: "Puan", xmax: 11, ymax: 8,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }, { v: 9, label: "9" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "50" }, { v: 4, label: "60" }, { v: 6, label: "70" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 1.2 }, { id: "p2", tip: "nokta", x: 2, y: 2 }, { id: "p3", tip: "nokta", x: 3, y: 4 },
            { id: "p4", tip: "nokta", x: 4, y: 4.6 }, { id: "p5", tip: "nokta", x: 5, y: 4.8 }, { id: "p6", tip: "nokta", x: 6, y: 4.2 },
            { id: "p7", tip: "nokta", x: 7, y: 5.8 }, { id: "p8", tip: "nokta", x: 8, y: 7.2 }, { id: "p9", tip: "nokta", x: 9, y: 5.2 },
            { id: "p10", tip: "nokta", x: 10, y: 7 },
            { id: "l", tip: "cizgi", renk: 2, from: [0.5, 1.764], to: [10.5, 7.436], etiket: "ŷ = 47,4 + 2,84x", gizli: true },
            { id: "h", tip: "cizgi", renk: 1, from: [5, 4.316], to: [6, 4.316], etiket: "+1 saat", gizli: true },
            { id: "v", tip: "cizgi", renk: 1, from: [6, 4.316], to: [6, 4.884], etiket: "+2,84 puan", gizli: true }
          ],
          durumlar: [
            { metin: "Rastgele seçilen 10 öğrenci: her nokta bir öğrenci. Çalışma saati arttıkça puan genelde artıyor." },
            { metin: "En küçük kareler doğrusu: ŷ = 47,4 + 2,84x. Eğim ==b = 2,84==.", goster: ["l"] },
            { metin: "Yorum: haftalık çalışma 1 saat arttığında tahmin edilen puan yaklaşık 2,84 artar. Bu 10 öğrencinin eğimi; bütün okulun eğimi β ise bilinmiyor.", goster: ["h", "v"] }
          ] }
      ]
    },
    {
      baslik: "Her örneklem başka bir eğim verir",
      kisa: "b örneklemden örnekleme değişir; çıkarım bu değişimi SE_b ile ölçer.",
      bloklar: [
        { tip: "grafik", baslik: "Gerçek doğru ve üç örneklemin doğruları", xlabel: "Haftalık çalışma (saat)", ylabel: "Puan", xmax: 11, ymax: 8,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }, { v: 9, label: "9" }, { v: 10, label: "10" }],
          yticks: [{ v: 2, label: "50" }, { v: 4, label: "60" }, { v: 6, label: "70" }, { v: 8, label: "80" }],
          ogeler: [
            { id: "pop", tip: "cizgi", renk: 1, kesik: true, from: [0.5, 1.88], to: [10.5, 7.48], etiket: "β = 2,8", gizli: true },
            { id: "s1", tip: "cizgi", renk: 0, from: [0.5, 1.38], to: [10.5, 7.98], etiket: "b = 3,3", gizli: true },
            { id: "s2", tip: "cizgi", renk: 2, from: [0.5, 2.3], to: [10.5, 6.9], etiket: "b = 2,3", gizli: true },
            { id: "s3", tip: "cizgi", renk: 3, from: [0.5, 1.82], to: [10.5, 7.62], etiket: "b = 2,9", gizli: true }
          ],
          durumlar: [
            { metin: "Bir an için gerçek doğruyu bildiğimizi varsay: eğimi β = 2,8 puan/saat (aslında hiçbir zaman bilinmez).", goster: ["pop"] },
            { metin: "1. örneklem (10 öğrenci): doğrusu daha dik, b = 3,3.", goster: ["s1"] },
            { metin: "2. örneklem: doğru daha yatık, b = 2,3.", goster: ["s2"] },
            { metin: "3. örneklem: b = 2,9. Her örneklemin eğimi β’nın etrafında dağılır; yayılımın ölçüsü ==SE_b==.", goster: ["s3"] }
          ] },
        { tip: "not", metin: "Koşullar sağlanınca (b − β) ÷ SE_b değeri *t distribution* ile, **df = n − 2** olarak modellenir. Neden n − 2? Doğruyu çizmek için iki sayı (a ve b) tahmin edildi. Bu yüzden eğim için t∗ değerini df = n − 2 ile ararız." }
      ]
    },
    {
      baslik: "Koşullar: Linear, Independent, Normal, Equal SD, Random",
      kisa: "Güven aralığından önce beş koşulu kontrol et; artık grafiği ana araçtır.",
      bloklar: [
        { tip: "tablo", baslik: "Eğim çıkarımı koşulları", head: ["Koşul", "Nasıl kontrol edilir?", "Bozulursa"], rows: [
            ["*Linear*", "Dağılım grafiği doğrusal; artık grafiğinde eğri örüntü yok", "Eğri örüntü: doğru uygun model değil"],
            ["*Independent*", "Gözlemler birbirinden bağımsız; yerine koymadan örneklemede n ≤ %10", "Bağımlı gözlemler: SE yanlış çıkar"],
            ["*Normal*", "Her x için artıklar yaklaşık normal: artıkların histogramı ya da normal olasılık grafiği yaklaşık simetrik, uç değer yok", "Çarpık artıklar ya da uç değer"],
            ["*Equal SD*", "Artık grafiğinde yayılım x boyunca yaklaşık aynı", "Huni biçimi: yayılım x ile değişiyor"],
            ["*Random*", "Veri rastgele örneklemden ya da rastgele atamadan geliyor", "Sonuç popülasyona genellenemez"]
          ], not: "Akılda kalsın: LINER." },
        { tip: "grafik", baslik: "Artık grafiği (residual plot) ne gösterir?", xlabel: "x ya da tahmin edilen ŷ", ylabel: "Artık", xmax: 10, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }, { v: 7, label: "7" }, { v: 9, label: "9" }],
          yticks: [{ v: 1, label: "−2" }, { v: 3, label: "0" }, { v: 5, label: "2" }],
          ogeler: [
            { id: "z", tip: "cizgi", renk: 1, kesik: true, from: [0, 3], to: [10, 3] },
            { id: "r1", tip: "nokta", x: 1, y: 3.6 }, { id: "r2", tip: "nokta", x: 2, y: 2.2 }, { id: "r3", tip: "nokta", x: 3, y: 3.3 },
            { id: "r4", tip: "nokta", x: 4, y: 2.6 }, { id: "r5", tip: "nokta", x: 5, y: 3.9 }, { id: "r6", tip: "nokta", x: 6, y: 2.3 },
            { id: "r7", tip: "nokta", x: 7, y: 3.2 }, { id: "r8", tip: "nokta", x: 8, y: 2.5 }, { id: "r9", tip: "nokta", x: 9, y: 3.5 }
          ],
          durumlar: [
            { metin: "İyi artık grafiği: noktalar sıfır çizgisinin etrafında rastgele saçılıyor, örüntü yok. *Linear* ve *Equal SD* tamam." },
            { metin: "Eğri örüntü (U biçimi): veri doğru değil eğri izliyor. *Linear* koşulu bozuk.", set: { r1: { y: 4.5 }, r2: { y: 3.8 }, r3: { y: 3.2 }, r4: { y: 2.7 }, r5: { y: 2.5 }, r6: { y: 2.8 }, r7: { y: 3.3 }, r8: { y: 3.9 }, r9: { y: 4.6 } } },
            { metin: "Huni biçimi: x büyüdükçe yayılım açılıyor. *Equal SD* koşulu bozuk.", set: { r1: { y: 3.15 }, r2: { y: 2.8 }, r3: { y: 3.3 }, r4: { y: 2.6 }, r5: { y: 3.6 }, r6: { y: 2.2 }, r7: { y: 4.1 }, r8: { y: 1.8 }, r9: { y: 4.8 } } }
          ] },
        { tip: "tuzak", baslik: "Yüksek r doğrusallık kanıtı değildir", metin: "Korelasyon yüksek olsa bile veri hafifçe eğri olabilir. Doğrusallığı artık grafiğiyle onayla.",
          yanlis: "r = 0,89 yüksek, o halde Linear koşulu tamam.",
          dogru: "Dağılım grafiğine ve artık grafiğine bak: örüntü yoksa Linear koşulu sağlanır." }
      ]
    },
    {
      baslik: "Bilgisayar çıktısını okumak",
      kisa: "Eğim için Coef ve SE Coef sütunlarında değişkenin satırı kullanılır; S ayrı bir şeydir.",
      bloklar: [
        { tip: "tablo", baslik: "Regression Analysis: Puan versus Saat (n = 10)", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [
            ["Constant", "47.400", "3.115", "15.22", "0.000"],
            ["Saat", "2.8364", "0.5020", "5.65", "0.000"]
          ], vurgu: 1, not: "S = 4.5592   R-Sq = 80.0%   R-Sq(adj) = 77.5%.  (Çıktıda ondalık nokta kullanılır; metinde virgül yazıyoruz.)" },
        { tip: "adimlar", baslik: "Hangi sayı hangi bilgi?", adimlar: [
            { baslik: "Coef (Saat satırı) = 2,8364", metin: "Örneklem eğimi b: haftalık 1 saat artışla tahmin edilen puan artışı." },
            { baslik: "SE Coef (Saat satırı) = 0,5020", metin: "Eğimin standart hatası SE_b; güven aralığının genişliğini belirler." },
            { baslik: "S = 4,5592", metin: "Artıkların standart sapması: tahminlerin gerçek puandan tipik uzaklığı (puan cinsinden). SE_b değildir." },
            { baslik: "R-Sq = %80,0", metin: "Puandaki değişimin %80’i çalışma saatiyle ilişkili doğrusal modelle açıklanıyor (r²). T ve P sütunları test içindir (st903)." }
          ] },
        { tip: "tuzak", baslik: "Constant satırı kesişim içindir", metin: "Çıktıda iki satır var: Constant (kesişim a) ve değişkenin adı (eğim b). Eğim aralığında yalnızca ikinci satırı kullan. SE Coef ile S de karıştırılmasın.",
          yanlis: "Aralıkta Constant satırındaki 47,400 ve 3,115’i kullanmak; SE olarak S = 4,56’yı almak.",
          dogru: "Saat satırından b = 2,8364 ve SE_b = 0,5020 al." }
      ]
    },
    {
      baslik: "Aralığı kur: b ± t∗ · SE_b",
      kisa: "Eğim aralığı b ± t∗·SE_b; t∗ için df = n − 2.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "b", alt: "örneklem eğimi (Coef)" }, "±", { t: "t∗", alt: "güven düzeyi ve df = n − 2 için kritik değer" }, "·", { t: "SE_b", alt: "eğimin standart hatası (SE Coef)" }], aciklama: "t∗ tablodan ya da invT ile bulunur. %95 ve df = 8 için t∗ = 2,306." },
        { tip: "formul", parcalar: [{ t: "SE_b", alt: "eğimin standart hatası" }, "=", { t: "s", alt: "artıkların SD’si (S)" }, "÷", { t: "s_x · √(n − 1)", alt: "x değerlerinin yayılımı" }], aciklama: "S küçüldükçe ya da x değerleri daha geniş aralığa yayıldıkça SE_b küçülür, aralık daralır. Çıktıda zaten hazır gelir; çıktı yoksa bu formülle hesaplanır (2026-27 AP sınavında eğim çıkarımı yok)." },
        { tip: "ornek", baslik: "Dört adımla %95 aralık", durum: "Okuldan rastgele seçilen 10 öğrencide haftalık çalışma saati (Saat) ile deneme puanı (Puan). Artık grafiği rastgele saçılıyor, normal olasılık grafiği yaklaşık doğrusal. Okulda 1000 öğrenci var.",
          adimlar: ["State: β = okuldaki bütün öğrenciler için haftalık çalışma saatindeki 1 saatlik artışla ortalama deneme puanındaki artış (gerçek eğim). %95 güven aralığı kuruyoruz.", "Plan: eğim için t aralığı (*t interval for slope*), df = 10 − 2 = 8. *Linear* ✓ (dağılım ve artık grafiği), *Independent* ✓ (rastgele, 10 < 1000’in %10’u), *Normal* ✓, *Equal SD* ✓, *Random* ✓.", "Do: b = 2,8364; SE_b = 0,5020; t∗ = 2,306. Aralık: 2,8364 ± 2,306 × 0,5020 = 2,8364 ± 1,1576 ⇒ (1,68; 3,99). (Makinede LinRegTInt aynı sonucu verir.)", "Conclude: %95 güvenle, okuldaki bütün öğrenciler için popülasyon regresyon doğrusunun eğimi 1,68 ile 3,99 puan/saat arasındadır: haftalık çalışma 1 saat fazla olan öğrencilerin ortalama deneme puanı 1,68 ile 3,99 puan daha yüksektir."],
          sonuc: "%95 güven aralığı (1,68; 3,99) puan/saat." }
      ]
    },
    {
      baslik: "Aralığı doğru yorumla",
      kisa: "Yorum: güven düzeyi, gerçek eğim ve birim (puan / saat) birlikte yazılır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru yorum", maddeler: ["Güven düzeyini söyler", "“Gerçek eğim” (popülasyon) hakkında konuşur", "Birimi ve bağlamı içerir"] },
          sag: { ikon: "❌", baslik: "Yanlış yorum", maddeler: ["Bireyler hakkında konuşur", "Örneklem eğiminin olasılığı sanır", "Neden-sonuç iddia eder"] },
          oyun: [
            { metin: "%95 güvenle, çalışma saati 1 saat fazla olan öğrencilerde ortalama puanın ne kadar yüksek olduğu (gerçek eğim) 1,68 ile 3,99 puan arasındadır.", cevap: "sol", neden: "Güven düzeyi, gerçek eğim ve birim (puan / saat) var." },
            { metin: "Öğrencilerin %95’i, her ek saat için 1,68 ile 3,99 puan kazanır.", cevap: "sag", neden: "Aralık bireyler için değil, ortalama eğim için." },
            { metin: "Örneklemin eğiminin 1,68 ile 3,99 arasında olma olasılığı %95’tir.", cevap: "sag", neden: "b = 2,84 zaten biliniyor; belirsiz olan β’dır, aralık β için." },
            { metin: "Aynı yöntemle çok sayıda örneklem alıp aralık kursak, aralıkların yaklaşık %95’i gerçek eğimi yakalardı.", cevap: "sol", neden: "Güven düzeyinin yöntemin uzun vadeli başarısı olduğunu söylüyor." },
            { metin: "Her öğrenci bir saat daha çalışırsa puanı kesin olarak 1,68 ile 3,99 puan artar.", cevap: "sag", neden: "Bu rastgele atamalı deney değil; ilişki neden-sonuç kanıtı değildir." }
          ] },
        { tip: "tuzak", baslik: "Aralık çalışma aralığının dışına taşınmaz", metin: "Aralık yalnızca gözlenen x aralığında (1–10 saat) anlamlıdır. 40 saat çalışmanın etkisi hakkında bu aralıkla konuşamazsın (*extrapolation*).",
          yanlis: "Haftada 40 saat çalışırsan puan 67 ile 160 puan artar.",
          dogru: "Yorumu gözlenen çalışma saatleriyle sınırla." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Konuyu bir cümlede toparlayan liste (bu konu 2026-27 sınavında yok).",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Örneklem doğrusu ŷ = a + bx; popülasyon doğrusunun eğimi β. Aralık β için kurulur.",
            "Koşullar (LINER): *Linear*, *Independent*, *Normal*, *Equal SD*, *Random*; artık grafiği ana araçtır.",
            "Çıktıda eğim için değişkenin satırı: Coef = b, SE Coef = SE_b. S artıkların SD’sidir, R-Sq ise r².",
            "Aralık: b ± t∗·SE_b, df = n − 2; SE_b = s ÷ (s_x √(n − 1)).",
            "Dört adım: State (β’yı bağlamla tanımla), Plan (t aralığı, koşullar), Do (hesap), Conclude.",
            "Yorum: “%95 güvenle gerçek eğim … ile … arasında” + birim + bağlam. Bireyler ya da neden-sonuç değil.",
            "Aralık gözlenen x aralığının dışına taşınmaz (*extrapolation*)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Rastgele seçilen 22 öğrenci için haftalık spor saati (Saat) ile koşu süresindeki iyileşme (puan) arasındaki ilişki inceleniyor. Koşullar sağlanmıştır. Çıktıya göre eğim için %95 güven aralığı hangisidir? (df = 20 için t∗ = 2,086)",
      fig: { type: "table", head: ["Predictor", "Coef", "SE Coef", "T", "P"], rows: [["Constant", "5.10", "1.20", "4.25", "0.000"], ["Saat", "0.80", "0.20", "4.00", "0.001"]], caption: "S = 2.10   R-Sq = 44.4%" },
      opts: ["(0,60; 1,00)", "(0,38; 1,22)", "(−3,58; 5,18)", "(2,60; 7,60)"],
      a: 1,
      why: "Saat satırından b = 0,80 ve SE_b = 0,20: 0,80 ± 2,086 × 0,20 = 0,80 ± 0,417 ⇒ (0,38; 1,22). A yalnızca 1 SE ekler; C, SE_b yerine S’yi kullanır (0,80 ± 2,086 × 2,10); D kesişim satırından (Constant) kurulmuştur." },
    { q: "Bir araştırmacı bir regresyon modelinin artık grafiğini çiziyor: noktalar soldaki x değerlerinde sıfır çizgisine yakın ve sıkışık, sağa gidildikçe sıfırın iki yanında giderek daha çok açılıyor. Hangi koşul sorunludur?",
      opts: ["*Linear*: ilişki doğrusal değil.", "*Independent*: gözlemler bağımlı.", "*Normal*: artıklar sağa çarpık.", "*Equal SD*: artıkların yayılımı x ile değişiyor."],
      a: 3,
      why: "Noktaların sıfır etrafında yayılımının x ile artması (huni) *Equal SD* koşulunu bozar. Eğri bir örüntü olsaydı Linear sorunlu olurdu; burada ortalama artık sıfır civarında kalıyor." },
    { q: "Rastgele seçilen 25 öğrencide günlük ekran süresi (saat) ile uyku süresi (saat) arasındaki eğim için %95 güven aralığı (−0,52; −0,18) bulunmuştur. Doğru yorum hangisidir?",
      opts: ["%95 güvenle, ekran süresindeki her 1 saatlik artışla ortalama uyku süresinin 0,18 ile 0,52 saat arasında azaldığı gerçek miktar vardır.", "Öğrencilerin %95’inde ekran süresi arttıkça uyku 0,18 ile 0,52 saat azalır.", "Eğimin −0,52 ile −0,18 arasında olma olasılığı %95’tir; örneklem eğimi bundan farklı olabilir.", "Ekran süresini azaltmak uykuyu 0,18 ile 0,52 saat artırır."],
      a: 0,
      why: "Doğru yorum, güven düzeyini, gerçek eğimi (ortalama değişimi) ve birimi içerir. B bireylere genelliyor; C örneklem eğimini olasılıklı sanıyor; D rastgele atamalı deney olmadığı halde neden-sonuç iddia ediyor." },
    { q: "Bir eğim güven aralığı kurmak için 15 çift (x, y) gözlemi kullanılıyor. Kritik t∗ değeri için kullanılacak serbestlik derecesi kaçtır?",
      opts: ["14", "15", "13", "12"],
      a: 2,
      why: "Eğim çıkarımında df = n − 2 = 15 − 2 = 13. n − 1 = 14, tek örneklemde ortalama için kullanılan df’dir; regresyonda iki parametre (a ve b) tahmin edildiği için 2 çıkarılır." },
    { q: "Aşağıdaki değişikliklerden hangisi, diğer her şey aynıyken eğim için güven aralığını daraltır?",
      opts: ["Güven düzeyini %95’ten %99’a çıkarmak", "Aynı x yayılımını koruyarak örneklem büyüklüğünü artırmak", "x değerlerini daha dar bir aralıktan toplamak", "Artıkların standart sapması S’nin büyümesi"],
      a: 1,
      why: "Daha büyük n hem SE_b’yi küçültür hem df’yi artırarak t∗’ı düşürür. %99 düzeyi, dar x aralığı ve büyük S aralığı genişletir." }
  ]
};
