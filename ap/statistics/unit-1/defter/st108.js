/* Kitora not defteri · st108 · 1D-4 Percentile ve z-score
   Kaynak: ap-videolar/src/episodes/st108 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st108",
  ozet: "Bir sayının anlamı, diğerlerinin arasında nerede durduğuna bağlıdır. Bu yeri iki yolla söylersin: saymakla (*percentile*) ve uzaklık ölçmekle (*z-score*). Bu defterde ikisini hesaplamayı, yorum kalıplarıyla yazmayı, *z-score*'dan geriye değeri bulmayı ve ikisini karıştırmamayı öğreneceksin. Örnekler: 20 kişilik quiz sınıfı ve 41 ülkede yaşam beklentisi.",
  bolumler: [
    {
      baslik: "70 aldın: iyi mi kötü mü?",
      bloklar: [
        { tip: "hikaye", ikon: "📝", baslik: "Aynı puan, farklı konum",
          metin: "Sınavdan 70 aldın. İyi mi, kötü mü? Sınıfın çoğu 50 aldıysa harika. Çoğu 90 aldıysa pek değil. Yani tek bir sayının anlamı, diğerlerinin arasında nerede durduğuna bağlı. Bu yeri söylemenin iki yolu var: biri saymaya dayanır (*percentile*), öbürü uzaklık ölçmeye (*z-score*)." },
        { tip: "sekil", baslik: "20 kişilik sınıfın quiz puanları", fig: { type: "dot", values: [50, 50, 55, 55, 55, 60, 60, 60, 60, 65, 65, 65, 70, 70, 70, 70, 75, 80, 80, 85], label: "Quiz score" } },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "Saymak", maddeler: ["*Percentile*", "Değere eşit ya da ondan küçük olanların yüzdesi", "Konum: 0–100"] },
          sag: { ikon: "📏", baslik: "Uzaklık ölçmek", maddeler: ["*z-score*", "Mean'den kaç standard deviation uzakta", "Birimsiz, eksi olabilir"] } }
      ]
    },
    {
      baslik: "*Percentile*: sayarak bul",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📊", terim: "Percentile", tr: "yüzdelik", tanim: "Bir değere ==eşit ya da ondan küçük== olan gözlemlerin yüzdesi.", ornek: "70 puan: 20 kişiden 16'sı 70 ve altında → 80th percentile." },
            { ikon: "📍", terim: "Quartile landmarks", tr: "tanıdık yer işaretleri", tanim: "Q1 yaklaşık 25th, median 50th, Q3 yaklaşık 75th percentile.", ornek: "Median: verinin yarısı ona eşit ya da daha küçük." }
          ] },
        { tip: "ornek", baslik: "70 puan hangi percentile?", durum: "20 kişi: 50, 50, 55, 55, 55, 60, 60, 60, 60, 65, 65, 65, 70, 70, 70, 70, 75, 80, 80, 85. Sen 70 aldın.",
          adimlar: ["70 ve altındakileri say: 50'ler (2), 55'ler (3), 60'lar (4), 65'ler (3), 70'ler (4).", "Toplam: 2 + 3 + 4 + 3 + 4 = 16. Seninle aynı puanı alan üç arkadaşın da dahil.", "Oran: 16 ÷ 20 = 0,80 = %80."],
          sonuc: "Puanın ==80th percentile==." },
        { tip: "tuzak", baslik: "Eşitler de sayılır", metin: "Yalnızca senden düşük alanlara bakmak en yaygın hatadır.", yanlis: "Senden düşük alan 12 kişi var: 12 ÷ 20 = %60, o hâlde 60th percentile.", dogru: "\"Less than or equal to\": eşit olanlar da sayılır. 16 ÷ 20 = %80." },
        { tip: "formul", parcalar: [{ t: "Percentile", alt: "yüzdelik" }, "=", { t: "değere eşit ya da küçük olanların sayısı", alt: "16" }, "÷", { t: "n", alt: "20" }, "×", { t: "100", alt: "" }] }
      ]
    },
    {
      baslik: "Percentile'ı yorumla",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "[percentile]% of", alt: "yüzde" }, { t: "[context]", alt: "bağlam" }, { t: "are less than or equal to", alt: "sabit kalıp" }, { t: "[value]", alt: "değer" }], aciklama: "Örnek: \"80% of the quiz scores in this class are less than or equal to 70.\"" },
        { tip: "grafik", baslik: "Percentile cetveli (0–100)", xlabel: "Percentile", ylabel: "", xmax: 10, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 2.5, label: "25" }, { v: 5, label: "50" }, { v: 7.5, label: "75" }, { v: 10, label: "100" }],
          ogeler: [
            { id: "q1", tip: "nokta", x: 2.5, y: 1.2, etiket: "Q1 ≈ 25th", gizli: true },
            { id: "md", tip: "nokta", x: 5, y: 1.2, etiket: "median ≈ 50th", gizli: true },
            { id: "q3", tip: "nokta", x: 7.5, y: 1.2, etiket: "Q3 ≈ 75th", gizli: true },
            { id: "sen", tip: "nokta", x: 8, y: 2.4, etiket: "70 puan: 80th", gizli: true },
            { id: "kol", tip: "nokta", x: 9, y: 3.2, etiket: "kolesterol 90th: kötü", gizli: true },
            { id: "kos", tip: "nokta", x: 1, y: 3.2, etiket: "100 m süresi 10th: iyi", gizli: true }
          ],
          durumlar: [
            { metin: "Tanıdık üç yer işareti: Q1 yaklaşık 25th, median 50th, Q3 yaklaşık 75th percentile.", goster: ["q1", "md", "q3"] },
            { metin: "Quiz'de 70 puan 80th percentile'da.", goster: ["sen"] },
            { metin: "Kolesterolün 90th percentile'daysa insanların %90'ının değeri seninkine eşit ya da düşük: bu ==kötü==.", goster: ["kol"] },
            { metin: "100 m koşu süren 10th percentile'daysa çok hızlısın: küçük süre iyidir. Yüksek percentile her zaman iyi haber değil.", goster: ["kos"] }
          ] },
        { tip: "tuzak", baslik: "At, in değil", metin: "Percentile bir aralık değil, tek bir konumdur. Değer onun içinde değil, üzerinde durur.", yanlis: "My score is in the 80th percentile.", dogru: "My score is ==at the 80th percentile==." },
        { tip: "ikili", sol: { ikon: "⬇️", baslik: "Büyük değer iyi", maddeler: ["Yüksek percentile iyi haber", "Örnek: sınav puanı"] },
          sag: { ikon: "⬆️", baslik: "Küçük değer iyi", maddeler: ["Düşük percentile iyi haber", "Örnek: 100 m koşu süresi", "Yüksek kolesterol kötü"] },
          oyun: [
            { metin: "Kolesterol 90th percentile'da.", cevap: "sag", neden: "Yüksek kolesterol kötü: yüksek percentile kötü haber, küçük değer iyi." },
            { metin: "Sınav puanı 90th percentile'da.", cevap: "sol", neden: "Büyük puan iyi: yüksek percentile iyi haber." },
            { metin: "100 m koşu süresi 10th percentile'da.", cevap: "sag", neden: "Küçük süre = hızlı = iyi." },
            { metin: "Maraton süresi 95th percentile'da.", cevap: "sag", neden: "Çoğu koşucudan uzun sürede bitirdin: küçük süre iyi, bu iyi değil." }
          ] }
      ]
    },
    {
      baslik: "Örnek: 41 ülkede yaşam beklentisi",
      bloklar: [
        { tip: "not", metin: "Ders notundaki veri: Orta Amerika, Güney Amerika ve Karayipler'den 41 ülkede doğuşta yaşam beklentisi (yıl)." },
        { tip: "sekil", baslik: "Doğuşta yaşam beklentisi (n = 41)", fig: { type: "stem", stems: [{ s: "6", leaves: "3" }, { s: "6", leaves: "4" }, { s: "6", leaves: "6" }, { s: "6", leaves: "9" }, { s: "7", leaves: "0 0 0 0 0 1 1 1 1" }, { s: "7", leaves: "2 2 2 3 3 3 3 3" }, { s: "7", leaves: "4 4 4 4 4 5 5 5 5 5" }, { s: "7", leaves: "6 7" }, { s: "7", leaves: "8 8 8 9" }, { s: "8", leaves: "0 0 0" }, { s: "8", leaves: "2" }], key: "8|2 = 82 years" } },
        { tip: "ornek", baslik: "78 yıl hangi percentile?", durum: "41 ülke. Yaşam beklentisi 78 yıl olan bir ülke için percentile'ı bul.",
          adimlar: ["78 ve altındakileri say: stemplot'ta 79, 80, 80, 80, 82 dışındaki hepsi, yani 41 − 5 = 36 ülke.", "Oran: 36 ÷ 41 ≈ 0,878.", "Yüzdeye çevir: yaklaşık %88."],
          sonuc: "78 yıl, yaklaşık ==88th percentile==: \"About 88% of these countries have a life expectancy at birth less than or equal to 78 years.\"" },
        { tip: "ornek", baslik: "Ters soru: Peru 39th percentile'da", durum: "Peru 39th percentile'da. Yaşam beklentisi kaç yıl?",
          adimlar: ["Kaçıncı değer: 0,39 × 41 = 15,99 ≈ 16.", "Sıralı listede alttan say: 63, 64, 66, 69 (4 değer); 70 ×5 ve 71 ×4 (13 değer); sonra 72'ler: 14., 15. ve 16. değer 72.", "16. değer 72 (17. değer 73). Kontrol: 16 ÷ 41 ≈ %39,0."],
          sonuc: "Peru'nun yaşam beklentisi ==72 yıl==." },
        { tip: "formul", parcalar: [{ t: "Kaçıncı değer", alt: "alttan say" }, "=", { t: "percentile ÷ 100", alt: "0,39" }, "×", { t: "n", alt: "41" }], aciklama: "Percentile'dan değere giderken: (percentile ÷ 100) × n kaçıncı değer olduğunu verir; sıralı listede alttan say." }
      ]
    },
    {
      baslik: "*z-score*: uzaklık ölç",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📐", terim: "Standardized score (z-score)", tr: "standartlaştırılmış puan", tanim: "Değerin *mean*'den kaç *standard deviation* uzakta ve hangi yönde olduğu.", ornek: "70 puan, mean 65, SD 10 → z = 0,5." }
          ] },
        { tip: "formul", parcalar: [{ t: "z", alt: "z-score" }, "=", { t: "değer − mean", alt: "xᵢ − x̄" }, "÷", { t: "standard deviation", alt: "sₓ" }], aciklama: "Formül kâğıdında z = (xᵢ − x̄) ÷ sₓ (popülasyonda (xᵢ − μ) ÷ σ)." },
        { tip: "ornek", baslik: "Senin z-score'un", durum: "Sınıfın mean'i 65, standard deviation'ı 10. Senin puanın 70.",
          adimlar: ["Pay: 70 − 65 = 5.", "Böl: 5 ÷ 10 = 0,5."],
          sonuc: "==z = 0,5==: mean'in yarım standard deviation üstündesin. (Sınıfın mean'i 65: 1300 ÷ 20, SD'si 10: kareler toplamı 1900, 1900 ÷ 19 = 100, √100 = 10.)" },
        { tip: "grafik", baslik: "z ölçeği: 1 SD = 10 puan", xlabel: "Quiz puanı", ylabel: "", xmax: 8, ymax: 4,
          xticks: [{ v: 0, label: "45 (z=−2)" }, { v: 2, label: "55 (−1)" }, { v: 4, label: "65 (0)" }, { v: 6, label: "75 (+1)" }, { v: 8, label: "85 (+2)" }],
          ogeler: [
            { id: "mean", tip: "cizgi", renk: 3, kesik: true, from: [4, 0], to: [4, 3.7], etiket: "mean = 65" },
            { id: "sen", tip: "nokta", x: 5, y: 1, etiket: "sen: 70", gizli: true },
            { id: "oks", tip: "ok", from: [4, 1.8], to: [5, 1.8], gizli: true },
            { id: "yzs", tip: "yazi", x: 5.5, y: 2.3, metin: "z = +0,5", gizli: true },
            { id: "ark", tip: "nokta", x: 1, y: 1, etiket: "arkadaş: 50", gizli: true },
            { id: "oka", tip: "ok", from: [4, 3], to: [1, 3], gizli: true },
            { id: "yza", tip: "yazi", x: 2.5, y: 3.4, metin: "z = −1,5", gizli: true }
          ],
          durumlar: [
            { metin: "Mean 65'te. Her 10 puan = 1 SD: 55 → z = −1, 75 → z = +1." },
            { metin: "Sen 70 aldın: (70 − 65) ÷ 10 = 0,5. Mean'in yarım SD üstünde.", goster: ["sen", "oks", "yzs"] },
            { metin: "50 alan arkadaşın: (50 − 65) ÷ 10 = −1,5. Mean'in 1,5 SD altında.", goster: ["ark", "oka", "yza"] }
          ] }
      ]
    },
    {
      baslik: "İşaret, birim ve yorum",
      bloklar: [
        { tip: "ornek", baslik: "50 alan arkadaşın", durum: "Aynı sınıf: mean 65, SD 10. Arkadaşın 50 aldı.",
          adimlar: ["50 − 65 = −15.", "−15 ÷ 10 = −1,5."],
          sonuc: "==z = −1,5==: mean'in 1,5 standard deviation altında." },
        { tip: "tablo", baslik: "İşaret ne söyler?", head: ["z", "Anlamı", "Örnek"], rows: [
            ["z > 0", "Değer mean'in üstünde", "z = +0,5 (70 puan)"],
            ["z = 0", "Değer tam mean'de", "65 puan"],
            ["z < 0", "Değer mean'in altında", "z = −1,5 (50 puan)"]
          ] },
        { tip: "tuzak", baslik: "z-score'un birimi yoktur", metin: "(70 puan − 65 puan) ÷ 10 puan: puanı puana böldün, birimler sadeleşti.", yanlis: "z = 0,5 puan.", dogru: "z = 0,5 (birimsiz)." },
        { tip: "tablo", baslik: "Yorum kalıpları (ekrana aynen)", head: ["Ölçü", "Kalıp"], rows: [
            ["Percentile", "[percentile]% of [context] are less than or equal to [value]."],
            ["z-score", "[Specific value with context] is [z] standard deviations above/below the mean."],
            ["Örnek", "A quiz score of 70 is 0.5 standard deviations above the mean."],
            ["Örnek", "A quiz score of 50 is 1.5 standard deviations below the mean (z = −1.5)."]
          ] },
        { tip: "tuzak", baslik: "Yalnızca sayı yorum değildir", metin: "Yön sözcüğü (above/below) ve bağlam şarttır.", yanlis: "z = −1,5.", dogru: "\"A quiz score of 50 is 1.5 standard deviations below the mean.\"" }
      ]
    },
    {
      baslik: "Peru ve Panama: geri çözmek",
      bloklar: [
        { tip: "tablo", baslik: "41 ülkenin özet istatistikleri", head: ["n", "Mean", "SD", "Min", "Q1", "Median", "Q3", "Max"], rows: [["41", "73,415", "4,159", "63", "71", "73", "75,5", "82"]] },
        { tip: "ornek", baslik: "Peru'nun z-score'u", durum: "Peru'nun yaşam beklentisi 72 yıl; mean 73,415, SD 4,159.",
          adimlar: ["Pay: 72 − 73,415 = −1,415.", "Böl: −1,415 ÷ 4,159 ≈ −0,34."],
          sonuc: "==z ≈ −0,34==: \"Peru's life expectancy of 72 years is 0.34 standard deviations below the mean.\"" },
        { tip: "formul", parcalar: [{ t: "değer", alt: "bilinmeyen" }, "=", { t: "mean", alt: "73,415" }, "+", { t: "z", alt: "0,62" }, "×", { t: "SD", alt: "4,159" }], aciklama: "z = (değer − mean) ÷ SD formülünü değer için yeniden düzenledik." },
        { tip: "ornek", baslik: "Panama'nın değeri", durum: "Panama'nın z-score'u 0,62. Yaşam beklentisi kaç yıl?",
          adimlar: ["z × SD = 0,62 × 4,159 ≈ 2,58.", "Mean'e ekle: 73,415 + 2,58 ≈ 76,0."],
          sonuc: "Panama'nın yaşam beklentisi yaklaşık ==76 yıl== (mean'in 0,62 SD üstünde)." },
        { tip: "ornek", baslik: "Koşu takımı: Deniz'in süresi", durum: "1500 m sürelerinin mean'i 300 saniye, SD'si 20 saniye. Deniz'in z-score'u −1,5.",
          adimlar: ["z × SD = −1,5 × 20 = −30.", "Mean'e ekle: 300 + (−30) = 270."],
          sonuc: "Deniz'in süresi ==270 saniye==: ortalamadan hızlı (sürede eksi z iyi haberdir)." },
        { tip: "tuzak", baslik: "Geri çözerken işaret ve çarpma", metin: "Değer = mean + z × SD formülünde z'nin işareti kalır.", yanlis: "300 + 30 = 330 (işareti unuttun) ya da 300 − 1,5 × 10 = 285 (SD'yi 20 yerine 10 aldın).", dogru: "300 + (−1,5)(20) = 270." }
      ]
    },
    {
      baslik: "*Percentile* mı, *z-score* mu?",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Percentile*", maddeler: ["Bir yüzde: 0–100", "Sayarak bulunur (≤)", "Birim: %", "Örnek: 80th"] },
          sag: { ikon: "📏", baslik: "*z-score*", maddeler: ["Bir uzaklık (SD cinsinden)", "Eksi, sıfır ya da artı olabilir", "Mean ve SD gerekir; birimsiz", "Örnek: +0,5"] },
          oyun: [
            { metin: "Sınıftaki öğrencilerin %80'i benim puanıma eşit ya da daha düşük aldı.", cevap: "sol", neden: "Sayarak bulunan yüzde: *percentile*." },
            { metin: "Puanım mean'in yarım standard deviation üstünde.", cevap: "sag", neden: "SD cinsinden uzaklık: *z-score*." },
            { metin: "Değer −1,5.", cevap: "sag", neden: "Eksi olabilen tek ölçü *z-score*; percentile negatif olmaz." },
            { metin: "Değer 80th.", cevap: "sol", neden: "0 ile 100 arası konum: *percentile*." }
          ] },
        { tip: "tuzak", baslik: "z = 0 demek 0th percentile değildir", metin: "z = 0: değer tam mean'de, yani dağılımın ortalarında.", yanlis: "z = 0 olduğu için 0th percentile'dayım.", dogru: "z = 0 ⇒ değer = mean (dağılımın ortalarında). Percentile ve z-score farklı ölçülerdir." },
        { tip: "ornek", baslik: "Aynı puanın iki kimliği", durum: "Quiz sınıfında puan 70.",
          adimlar: ["Sayarak: 16 ÷ 20 = %80 → 80th percentile.", "Uzaklıkla: (70 − 65) ÷ 10 = 0,5 → z = 0,5."],
          sonuc: "Aynı puan: ==80th percentile ve z = 0,5==." }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Percentile*: değere eşit ya da ondan küçük olanların yüzdesi (16 ÷ 20 = %80); eşitler de sayılır.",
            "Percentile'da değer onun üzerindedir: *at the 80th percentile*, in değil.",
            "Yüksek percentile her zaman iyi değildir: büyük mü küçük mü iyi, değişkene bak.",
            "Percentile'dan değere: (percentile ÷ 100) × n kaçıncı değer; alttan say (Peru: 0,39 × 41 ≈ 16. değer = 72 yıl).",
            "*z-score* = (değer − mean) ÷ SD; z > 0 mean'in üstü, z < 0 altı, z = 0 tam mean; birimi yok.",
            "Geri çözme: değer = mean + z × SD (Panama ≈ 76 yıl, Deniz 270 s).",
            "z = 0 demek 0th percentile demek değildir.",
            "İki yorum da kalıpla ve bağlamla yazılır."
          ] }
      ]
    }
  ]
};
