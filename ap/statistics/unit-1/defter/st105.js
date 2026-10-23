/* Kitpath not defteri · st105 · 1D-1 Merkez: Mean ve Median
   Kaynak: ap-videolar/src/episodes/st105 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st105",
  amac: "Bu konu bir verinin ortasını tek sayıyla anlatmanın iki yolunu gösteriyor: *median* ve *mean*. İkisini hesaplamayı, aşırı değerlerin hangisini nasıl etkilediğini, *statistic* ile *parameter* farkını ve hangisini ne zaman raporlayacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Ortalama maaş 100 bin",
      kisa: "Aynı veride mean 100, median 50 çıkabilir; tipik olanı median anlatır.",
      bloklar: [
        { tip: "grafik", baslik: "Beş maaş, iki \"orta\"", xlabel: "Maaş (bin TL)", ylabel: "", xmax: 8, ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 1.25, label: "50" }, { v: 2.5, label: "100" }, { v: 5, label: "200" }, { v: 7.5, label: "300" }],
          ogeler: [
            { id: "p1", tip: "nokta", x: 1, y: 1.2, etiket: "40", gizli: true },
            { id: "p2", tip: "nokta", x: 1.125, y: 2, etiket: "45", gizli: true },
            { id: "p3", tip: "nokta", x: 1.25, y: 1.2, etiket: "", gizli: true },
            { id: "p4", tip: "nokta", x: 1.375, y: 2, etiket: "", gizli: true },
            { id: "p5", tip: "nokta", x: 7.75, y: 1.2, etiket: "310", gizli: true },
            { id: "med", tip: "cizgi", renk: 2, from: [1.25, 0.3], to: [1.25, 3.3], etiket: "median 50", gizli: true },
            { id: "mea", tip: "cizgi", renk: 3, kesik: true, from: [2.5, 0.3], to: [2.5, 3.8], etiket: "mean 100", gizli: true }
          ],
          durumlar: [
            { metin: "İlan: \"ortalama maaş 100 bin lira.\" Beş çalışandan dördü 40–55 bin arasında, birbirine çok yakın.", goster: ["p1", "p2", "p3", "p4"] },
            { metin: "Beşincisi patron: 310 bin. Sayı doğrusunda çok sağda, yalnız.", goster: ["p5"] },
            { metin: "==Median== = 50 bin: sıralayınca ortadaki değer. Tipik çalışan burada.", goster: ["med"] },
            { metin: "==Mean== = 500 ÷ 5 = 100 bin. Hiçbir çalışanın maaşı bu değil; patron mean'i sağa çekti.", goster: ["mea"] }
          ] },
        { tip: "ornek", baslik: "İlandaki sayıyı hesapla", durum: "Maaşlar (bin TL): 40, 45, 50, 55, 310. İlan yalan söylemedi, ama doğruyu da anlatmadı.",
          adimlar: ["Toplam: 40 + 45 + 50 + 55 + 310 = 500.", "Mean: 500 ÷ 5 = 100.", "Sıralı veri zaten 40, 45, 50, 55, 310; ortadaki (3.) değer 50."],
          sonuc: "==Mean = 100 bin, median = 50 bin.== Tipik çalışanı hangisi anlatıyor? Median." }
      ]
    },
    {
      baslik: "*Median*: sırala, ortadakini al",
      kisa: "Median, sıralanmış verinin tam ortasındaki değerdir; önce sırala.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Median", tr: "ortanca", tanim: "Veriyi küçükten büyüğe dizdiğinde ==tam ortada kalan değer==. n tekse ortadaki; n çiftse ortadaki iki değerin ortalaması. Konum = (n + 1) ÷ 2 (değeri değil, yerini verir).", ornek: "4, 6, 7, 7, 8, 9, 10 → median 7." }
          ] },
        { tip: "ornek", baslik: "Yedi arkadaşın quiz puanı", durum: "Puanlar (verildiği sırayla): 6, 9, 7, 10, 4, 8, 7.",
          adimlar: ["Önce SIRALA: 4, 6, 7, 7, 8, 9, 10.", "n = 7. Ortadaki değerin konumu: (7 + 1) ÷ 2 = 4. değer.", "4. değer 7; solunda 3, sağında 3 puan kaldı."],
          sonuc: "==Median = 7.== Sıralamasaydın ortadaki değer 10 çıkardı: yanlış." },
        { tip: "tuzak", baslik: "Sıralamayı unutmak", metin: "En sık yapılan hata, veriyi sıralamadan ortadaki değeri almak.", yanlis: "6, 9, 7, 10, 4, 8, 7 listesinde ortadaki 10 median'dır.", dogru: "Önce küçükten büyüğe sırala: 4, 6, 7, 7, 8, 9, 10. Median 7." }
      ]
    },
    {
      baslik: "Değer sayısı çiftse: kemancı yengeçler",
      kisa: "n çiftse median, ortadaki iki değerin ortalamasıdır; veride olmayabilir.",
      bloklar: [
        { tip: "sekil", baslik: "20 kemancı yengecin 30 saniyedeki scoop sayısı (n = 20)", fig: { type: "dot", values: [34, 35, 35, 38, 39, 41, 42, 47, 56, 58, 59, 62, 62, 66, 70, 71, 72, 73, 73, 77], label: "Scoops per 30 seconds" } },
        { tip: "ornek", baslik: "Yengeçlerin median'ı", durum: "Araştırmacılar 20 kemancı yengecin (*fiddler crab*) 30 saniyede ağzına kaç kez yiyecek götürdüğünü saydı. Sıralı veri: 34, 35, 35, 38, 39, 41, 42, 47, 56, 58 | 59, 62, 62, 66, 70, 71, 72, 73, 73, 77 (en küçük 34, en büyük 77).",
          adimlar: ["n = 20 çift: ortada tek değer yok. Konum = (20 + 1) ÷ 2 = 10,5.", "Ortadaki iki değer: 10. değer 58, 11. değer 59.", "Ortalamalarını al: (58 + 59) ÷ 2 = 117 ÷ 2 = 58,5."],
          sonuc: "==Median = 58,5 scoops per 30 seconds==. Median, veride hiç olmayan bir sayı olabilir." }
      ]
    },
    {
      baslik: "*Mean*: topla ve böl",
      kisa: "Mean, değerlerin toplamının değer sayısına bölümüdür; dağılımın denge noktasıdır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚖️", terim: "Mean", tr: "aritmetik ortalama", tanim: "Bütün değerleri topla, değer sayısına böl. Dağılımın ==denge noktası==. Örneklem ortalamasının sembolü x̄ (x bar).", ornek: "Yengeçlerde 1110 ÷ 20 = 55,5." },
            { ikon: "Σ", terim: "Sigma (Σ)", tr: "toplam işareti", tanim: "Büyük sigma: \"hepsini topla\".", ornek: "Σx = 1110." }
          ] },
        { tip: "formul", parcalar: [{ t: "x̄", alt: "mean" }, "=", { t: "Σxᵢ", alt: "bütün değerlerin toplamı" }, "÷", { t: "n", alt: "değer sayısı" }] },
        { tip: "ornek", baslik: "Yengeçlerin mean'i", durum: "20 yengeç: 34, 35, 35, 38, 39, 41, 42, 47, 56, 58, 59, 62, 62, 66, 70, 71, 72, 73, 73, 77.",
          adimlar: ["Toplam: 34 + 35 = 69; + 35 = 104; + 38 = 142; + 39 = 181; + 41 = 222; + 42 = 264; + 47 = 311; + 56 = 367; + 58 = 425.", "Devam: + 59 = 484; + 62 = 546; + 62 = 608; + 66 = 674; + 70 = 744; + 71 = 815; + 72 = 887; + 73 = 960; + 73 = 1033; + 77 = 1110.", "Böl: 1110 ÷ 20 = 55,5."],
          sonuc: "==Mean x̄ = 55,5 scoops per 30 seconds== (median 58,5'tan biraz küçük). Mean'i bir tahterevalli gibi düşün: tahta tam 55,5'te dengede durur." }
      ]
    },
    {
      baslik: "Bir uç değer: *resistant*",
      kisa: "Median uç değerden etkilenmez (resistant); mean uç değerle sürüklenir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🛡️", terim: "Resistant", tr: "dirençli", tanim: "Aşırı değerlerden (*outlier*) etkilenmeyen ölçü. *Median* resistant, *mean* değil.", ornek: "127'yi eklemek mean'i 3,4, median'ı 0,5 oynatır." },
            { ikon: "🚩", terim: "Outlier", tr: "aykırı değer", tanim: "Verinin genel örüntüsünün dışında kalan aşırı değer.", ornek: "Yengeçlerde 127; maaşlarda 310 bin." }
          ] },
        { tip: "sekil", baslik: "21 yengeç: araştırmacıların dışarıda bıraktığı 127 dahil", fig: { type: "dot", values: [34, 35, 35, 38, 39, 41, 42, 47, 56, 58, 59, 62, 62, 66, 70, 71, 72, 73, 73, 77, 127], label: "Scoops per 30 seconds" } },
        { tip: "ornek", baslik: "127 eklenince ne olur?", durum: "Önceki 20 değer + yeni değer 127 (n = 21).",
          adimlar: ["Yeni toplam: 1110 + 127 = 1237.", "Mean: 1237 ÷ 21 ≈ 58,9. Eski mean 55,5 → fark +3,4.", "Median: n = 21 tek; konum (21 + 1) ÷ 2 = 11. değer = 59.", "Eski median 58,5 → fark +0,5."],
          sonuc: "21 değerden yalnızca biri eklendi: ==mean 3,4 sıçradı, median 0,5 kıpırdadı==. Mean resistant değil, median resistant." },
        { tip: "ikili", sol: { ikon: "🛡️", baslik: "*Median*", maddeler: ["*Resistant*", "Yalnızca sıraya bakar", "127 yerine 1000 olsa da aynı kalır"] },
          sag: { ikon: "🧲", baslik: "*Mean*", maddeler: ["*Resistant* değil", "Her değeri toplama katar", "Tek bir uç değer onu sürükler"] },
          oyun: [
            { metin: "En büyük değer 127 iken 1000 yapılırsa değişmez.", cevap: "sol", neden: "Median yalnızca sıradaki konuma bakar." },
            { metin: "En büyük değer 127 iken 1000 yapılırsa belirgin biçimde artar.", cevap: "sag", neden: "Her değer toplama girer; mean sürüklenir." },
            { metin: "Beş maaşta patronun maaşı 310'dan 120'ye inince 100'den 62'ye düşen ölçü.", cevap: "sag", neden: "Mean uç değere duyarlı." },
            { metin: "Aşırı değerlerden etkilenmeyen, dirençli ölçü.", cevap: "sol", neden: "Median *resistant*." }
          ] }
      ]
    },
    {
      baslik: "x̄ ve μ: *statistic* mi *parameter* mı?",
      kisa: "Örneklemden gelen sayı statistic (x̄), popülasyondan gelen parameter (μ).",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🥄", baslik: "x̄ (x bar)", maddeler: ["*Sample mean*: örneklem ortalaması", "Örneklemden hesaplanır: bir *statistic*", "Yengeç örneğinde x̄ = 55,5"] },
          sag: { ikon: "🍲", baslik: "μ (mü)", maddeler: ["*Population mean*: ana kütle ortalaması", "Popülasyonu anlatır: bir *parameter*", "O türün tüm yengeçlerinin ortalaması: bilinmiyor"] },
          oyun: [
            { metin: "20 yengeçten hesaplanan 55,5.", cevap: "sol", neden: "Örneklemden gelen sayı: *statistic*, x̄." },
            { metin: "Türkiye'deki bütün hanelerin gerçek ortalama geliri.", cevap: "sag", neden: "Popülasyonun sayısı: *parameter*, μ." },
            { metin: "50 öğrencinin ortalama notu.", cevap: "sol", neden: "Bu 50 öğrenci bir örneklem: x̄." },
            { metin: "Okuldaki 800 öğrencinin tamamının ortalama uyku süresi (hepsi ölçülseydi).", cevap: "sag", neden: "Population'ın ortalaması: μ." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📈", terim: "Statistic", tr: "istatistik (örneklem sayısı)", tanim: "Örneklemi anlatan sayı. İpucu: ==S==ample → ==S==tatistic.", ornek: "x̄ = 55,5." },
            { ikon: "🌍", terim: "Parameter", tr: "parametre (ana kütle sayısı)", tanim: "Popülasyonu anlatan sayı. İpucu: ==P==opulation → ==P==arameter.", ornek: "μ (bilinmiyor; x̄ ile tahmin edilir)." }
          ] }
      ]
    },
    {
      baslik: "Şekil ve mean-median ilişkisi",
      kisa: "Mean kuyruğa doğru çekilir: sağa çarpıkta mean büyük, sola çarpıkta küçük.",
      bloklar: [
        { tip: "grafik", baslik: "Mean kuyruğun peşinden gider", xlabel: "Değerler", ylabel: "Sıklık", xmax: 10, ymax: 10,
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0, 0.1], [1, 0.4], [2, 1.2], [3, 3], [4, 6], [5, 8], [6, 6], [7, 3], [8, 1.2], [9, 0.4], [10, 0.1]] },
            { id: "med", tip: "cizgi", renk: 2, from: [5, 0], to: [5, 8.6], etiket: "median" },
            { id: "mea", tip: "cizgi", renk: 3, kesik: true, from: [5, 0], to: [5, 9.6], etiket: "mean" }
          ],
          durumlar: [
            { metin: "Kabaca simetrik ve aykırı değer yok: ==mean ≈ median==. İki çizgi üst üste." },
            { metin: "Kuyruk sağa uzadı (*skewed right*): mean kuyruğa doğru çekilir, ==mean > median==. Ev fiyatları ve maaşlar böyle.", set: { e: { noktalar: [[0, 0.2], [1, 3], [2, 7.5], [3, 8], [4, 5.5], [5, 3.6], [6, 2.3], [7, 1.4], [8, 0.8], [9, 0.4], [10, 0.1]] }, med: { from: [3.22, 0], to: [3.22, 8.6] }, mea: { from: [3.56, 0], to: [3.56, 9.6] } } },
            { metin: "Kuyruk sola uzadı (*skewed left*): mean sola çekilir, ==mean < median==.", set: { e: { noktalar: [[0, 0.1], [1, 0.4], [2, 0.8], [3, 1.4], [4, 2.3], [5, 3.6], [6, 5.5], [7, 8], [8, 7.5], [9, 3], [10, 0.2]] }, med: { from: [6.78, 0], to: [6.78, 8.6] }, mea: { from: [6.44, 0], to: [6.44, 9.6] } } }
          ] },
        { tip: "tablo", baslik: "Şekle göre mean ve median", head: ["Şekil", "Mean – median", "Örnek"], rows: [
            ["*Roughly symmetric*, outlier yok", "mean ≈ median", "Boy, uyku süresi"],
            ["*Skewed right*", "mean > median", "Maaşlar, ev fiyatları"],
            ["*Skewed left*", "mean < median", "Kolay quiz notları"]
          ] },
        { tip: "ornek", baslik: "Kolay quizde mean ve median", durum: "Puanlar: 4, 8, 9, 9, 10.",
          adimlar: ["Median: n = 5, 3. değer = 9.", "Toplam: 4 + 8 + 9 + 9 + 10 = 40.", "Mean: 40 ÷ 5 = 8."],
          sonuc: "==Median 9, mean 8 → mean < median== (skewed left). Tek bir düşük puan (4) mean'i aşağı çekti." },
        { tip: "tuzak", baslik: "Ters yönde de sorulur", metin: "Mean, median'dan belirgin büyükse dağılım muhtemelen *skewed right* (ya da yüksek bir outlier var).", yanlis: "Mean median'dan büyük, o hâlde dağılım sola çarpık.", dogru: "Mean kuyruğa doğru çekilir: mean > median → sağa çarpık." }
      ]
    },
    {
      baslik: "Hangisini raporlayacaksın?",
      kisa: "Simetrik ve temizse mean, çarpık ya da outlier varsa median; bağlamıyla yaz.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "⚖️", baslik: "*Mean* raporla", maddeler: ["Kabaca simetrik", "Outlier yok", "Bütün değerleri kullanır"] },
          sag: { ikon: "🎯", baslik: "*Median* raporla", maddeler: ["*Skewed* dağılım", "Ya da outlier var", "Tipik değeri daha dürüst anlatır"] },
          oyun: [
            { metin: "Ev fiyatları: çoğu yakın, birkaç lüks villa çok pahalı.", cevap: "sag", neden: "Sağa çarpık ve uç değerler var: *median*." },
            { metin: "Kabaca simetrik bir boy dağılımı, outlier yok.", cevap: "sol", neden: "Simetrik ve temiz: *mean* bütün değerleri kullanır." },
            { metin: "Haberlerde hane geliri.", cevap: "sag", neden: "Gelirler sağa çarpıktır; çoğu zaman *median* verilir." },
            { metin: "Beş maaştan biri 310 bin, diğerleri 40–55 bin.", cevap: "sag", neden: "Patron bir outlier: tipik çalışanı *median* anlatır." }
          ] },
        { tip: "tuzak", baslik: "Bağlamsız sayı", metin: "AP'de sayı tek başına puan getirmez: değişkenin adı ve birimi (*in context*) de gerekir.", yanlis: "The median is 58.5.", dogru: "The median feeding rate of these fiddler crabs is 58.5 scoops per 30 seconds." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Median*: önce sırala, ortadakini al; n çiftse ortadaki iki değerin ortalaması (58 ve 59 → 58,5). Konum (n + 1) ÷ 2.",
            "*Mean*: topla, değer sayısına böl; sembolü x̄ (x̄ = Σxᵢ ÷ n). Yengeçlerde 1110 ÷ 20 = 55,5.",
            "*Median* *resistant*, *mean* değil: 127 eklenince mean 55,5 → 58,9, median 58,5 → 59.",
            "x̄ bir *statistic* (örneklem), μ bir *parameter* (popülasyon). İpucu: S–S, P–P.",
            "Mean kuyruğa çekilir: *skewed right*'ta mean > median, *skewed left*'te mean < median, simetrikte mean ≈ median.",
            "Simetrik ve outlier yoksa *mean*; *skewed* ya da outlier varsa *median* raporla.",
            "Maaş örneği: mean 100 bin, median 50 bin; tipik çalışanı median anlatır.",
            "Cevabı her zaman bağlamıyla yaz: değişkenin adı ve birimiyle."
          ] }
      ]
    }
  ]
};
