/* Kitora not defteri · st103 · 1C-1 Dotplot ve Dağılımı Anlatmak
   Kaynak: ap-videolar/src/episodes/st103 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st103",
  ozet: "Sayısal verinin en basit grafiği *dotplot*: her değere bir nokta. Bu defterde bir dağılımı nasıl okuyacağını (*shape*, *peak*, *cluster*, *gap*), AP'de en sık çıkan işi, yani dağılımı dört parçada (*shape*, *outliers*, *center*, *variability*) ve ==bağlamıyla== anlatmayı öğreneceksin. Uyku, James Bond, kadın futbol takımı ve araba yakıt verileriyle çalışacağız.",
  bolumler: [
    {
      baslik: "12 kişi, kaç saat uyku?",
      bloklar: [
        { tip: "hikaye", ikon: "😴", baslik: "Dün gece kaç saat uyudun?",
          metin: "Sınıftaki 12 arkadaşına soruyorsun. Cevaplar: 7, 6, 8, 7, 5, 7, 8, 6, 7, 9, 7, 6. Bu listeye bakınca pek bir şey görmüyorsun. Şimdi her cevabı bir nokta yap ve bir çizginin üstüne diz: noktalar 7'nin üstünde yığılıyor, iki yana doğru azalıyor. Bir şekil belirdi." },
        { tip: "sekil", baslik: "Uyku süresi: 12 öğrenci", fig: { type: "dot", values: [7, 6, 8, 7, 5, 7, 8, 6, 7, 9, 7, 6], label: "Sleep last night (hours)" } },
        { tip: "tablo", baslik: "Sütunları say", head: ["Saat", "5", "6", "7", "8", "9"], rows: [["Nokta sayısı", "1", "3", "5", "2", "1"]], not: "1 + 3 + 5 + 2 + 1 = 12 öğrenci. Sıralı veri: 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 9." }
      ]
    },
    {
      baslik: "*Dotplot* nasıl çizilir?",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⚪", terim: "Dotplot", tr: "nokta grafiği", tanim: "Her veri değeri için sayı doğrusunun üstüne bir nokta koyulan grafik; ==sayısal (quantitative) veri== için en basit grafik.", ornek: "12 öğrencinin uyku süresi." },
            { ikon: "📈", terim: "Distribution", tr: "dağılım", tanim: "Değişkenin hangi değerleri ne sıklıkta aldığını gösteren düzen; grafiğin ortaya çıkardığı resim.", ornek: "Uyku süresi 7 saatte yığılıyor, iki yana azalıyor." }
          ] },
        { tip: "adimlar", baslik: "Üç adımda dotplot", adimlar: [
            { baslik: "1 · Eksen çiz ve adlandır", metin: "Yatay bir eksen çiz, altına değişkenin adını ve birimini yaz: \"Sleep last night (hours)\"." },
            { baslik: "2 · Ölçekle", metin: "Eşit aralıklı çentikler koy. Burada en küçük değer 5, en büyük 9." },
            { baslik: "3 · Nokta koy", metin: "Her değer için bir nokta; aynı değer tekrar gelirse noktayı üstüne ekle. 7 saat diyen 5 kişi var: 7'nin üstünde 5 nokta." }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 5, etiket: "en küçük değer (min)" },
            { deger: 9, etiket: "en büyük değer (max)" },
            { deger: 7, sonek: " saat", etiket: "en yüksek sütun: 5 nokta" }
          ] },
        { tip: "not", metin: "Dotplot dikey de çizilebilir. Grafik amaç değil araçtır: her grafikte ==\"ne görüyorum?\"== diye sor. Eksen etiketsiz ve ölçeksiz grafik eksik sayılır." }
      ]
    },
    {
      baslik: "Dotplot ile iddia sınamak",
      bloklar: [
        { tip: "not", metin: "James Bond serisinde 27 film var. Dotplot filmlerin sürelerini dakika olarak gösteriyor. İddia: ==filmlerin %75'inden fazlası iki saatten uzun.== İki saat = 120 dakika." },
        { tip: "sekil", baslik: "James Bond filmlerinin süreleri (n = 27)", fig: { type: "dot", values: [106, 110, 110, 115, 117, 119, 120, 121, 125, 125, 126, 127, 128, 130, 130, 130, 131, 131, 131, 133, 133, 134, 142, 143, 144, 148, 163], label: "Length of James Bond movie (minutes)" } },
        { tip: "ornek", baslik: "İddia destekleniyor mu?", durum: "İddia: 27 Bond filminin %75'inden fazlası 120 dakikadan uzun.",
          adimlar: ["120'de bir çizgi çek. \"Daha uzun\" dendiği için tam 120 dakikalık film sayılmaz.", "120'nin sağındaki noktaları say: 121'den 163'e kadar 20 film. (Solda 6 film var, 120'de 1 film var; 6 + 1 + 20 = 27.)", "Pay: 20 ÷ 27 ≈ 0,741, yani %74,1.", "Karşılaştır: %74,1 < %75. (0,75 × 27 = 20,25; en az 21 film gerekirdi.)"],
          sonuc: "Veri iddiayı ==kıl payı desteklemiyor==: 20/27 = %74,1, yani %75'i geçmiyor." },
        { tip: "tuzak", baslik: "\"Daha uzun\" sözcüğüne dikkat", metin: "Tam 120 dakikalık filmi saymak sonucu değiştirir.", yanlis: "120 dahil 21 film var: 21/27 = %77,8, iddia doğru.", dogru: "\"More than 2 hours\" tam 120'yi saymaz: 20/27 = %74,1. Aynı şekilde \"more than 75%\" ifadesinde tam %75 de yetmez." }
      ]
    },
    {
      baslik: "*Shape*: simetri ve çarpıklık",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔷", terim: "Shape", tr: "şekil", tanim: "Dağılımın şekli: simetri ya da çarpıklık, tepe sayısı, *cluster* ve *gap*.", ornek: "Uyku dotplot'u: tek tepe, iki yanı aynı." },
            { ikon: "🪞", terim: "Roughly symmetric", tr: "yaklaşık simetrik", tanim: "Tepenin sağı ve solu birbirinin aynası gibi.", ornek: "Uyku süresi: 7 saat etrafında." },
            { ikon: "➡️", terim: "Skewed right", tr: "sağa çarpık", tanim: "Uzun kuyruk ==sağda==, büyük değerler tarafında.", ornek: "YouTube izlenmeleri: çoğu az, birkaçı milyonlarca." },
            { ikon: "⬅️", terim: "Skewed left", tr: "sola çarpık", tanim: "Uzun kuyruk ==solda==, küçük değerler tarafında.", ornek: "Kolay quiz: çoğu yüksek alır, birkaçı düşük." }
          ] },
        { tip: "grafik", baslik: "Eğrinin kuyruğu hangi yöne uzuyor?", xlabel: "Değerler (küçükten büyüğe)", ylabel: "Sıklık", xmax: 10, ymax: 10,
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0, 0.1], [1, 0.4], [2, 1.2], [3, 3], [4, 6], [5, 8], [6, 6], [7, 3], [8, 1.2], [9, 0.4], [10, 0.1]] },
            { id: "ayna", tip: "cizgi", renk: 1, kesik: true, from: [5, 0], to: [5, 9.5], etiket: "", gizli: true },
            { id: "okr", tip: "ok", from: [6, 2.5], to: [9.5, 1.2], gizli: true },
            { id: "yr", tip: "yazi", x: 8.2, y: 3.6, metin: "kuyruk sağda", gizli: true },
            { id: "okl", tip: "ok", from: [4, 2.5], to: [0.5, 1.2], gizli: true },
            { id: "yl", tip: "yazi", x: 1.8, y: 3.6, metin: "kuyruk solda", gizli: true }
          ],
          durumlar: [
            { metin: "==Roughly symmetric==: tepenin iki yanı birbirinin aynası gibi." },
            { metin: "Orta çizgiden katlasan sol yarı sağ yarıya neredeyse oturur.", goster: ["ayna"] },
            { metin: "Kuyruk sağa uzadı: ==skewed right==. Çoğu değer küçük, birkaçı çok büyük.", gizle: ["ayna"], goster: ["okr", "yr"], set: { e: { noktalar: [[0, 0.2], [1, 3], [2, 7.5], [3, 8], [4, 5.5], [5, 3.6], [6, 2.3], [7, 1.4], [8, 0.8], [9, 0.4], [10, 0.1]] } } },
            { metin: "Kuyruk sola uzadı: ==skewed left==. Çoğu değer büyük, birkaçı çok küçük.", gizle: ["okr", "yr"], goster: ["okl", "yl"], set: { e: { noktalar: [[0, 0.1], [1, 0.4], [2, 0.8], [3, 1.4], [4, 2.3], [5, 3.6], [6, 5.5], [7, 8], [8, 7.5], [9, 3], [10, 0.2]] } } }
          ] },
        { tip: "sekil", baslik: "Sağa çarpık: YouTube izlenmeleri", fig: { type: "dot", values: [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 7, 12, 20], label: "Views (thousands)" } },
        { tip: "sekil", baslik: "Sola çarpık: kolay quiz", fig: { type: "dot", values: [3, 5, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10], label: "Quiz score (out of 10)" } },
        { tip: "ikili", sol: { ikon: "➡️", baslik: "*Skewed right*", maddeler: ["Kuyruk sağda (büyük değerler)", "Yığın solda", "YouTube izlenmeleri"] },
          sag: { ikon: "⬅️", baslik: "*Skewed left*", maddeler: ["Kuyruk solda (küçük değerler)", "Yığın sağda", "Kolay quiz"] },
          oyun: [
            { metin: "Noktaların çoğu 2–4 saat arasında; birkaçı 8, 9 ve 10 saate uzanıyor (günlük ekran süresi).", cevap: "sol", neden: "Uzun kuyruk sağda: *skewed right*. Tepe solda diye sola çarpık deme." },
            { metin: "Çoğu öğrenci kolay bir quizden 8–10 alıyor, birkaçı 3–5.", cevap: "sag", neden: "Kuyruk sola, düşük notlara uzuyor: *skewed left*." },
            { metin: "Videoların çoğu 1–3 bin izleniyor, bir video 20 bin.", cevap: "sol", neden: "Kuyruk sağa uzuyor: *skewed right*." },
            { metin: "Yığın sağda, ince bir kuyruk sola doğru uzuyor.", cevap: "sag", neden: "Yönü yığın değil kuyruk belirler: *skewed left*." }
          ] },
        { tip: "tuzak", baslik: "Çarpıklık yönü", metin: "Yığın solda, kuyruk sağdaysa dağılım *skewed right*'tır.", yanlis: "Tepe solda olduğu için skewed left.", dogru: "Skew yönü = ==kuyruğun yönü==, tepenin değil." }
      ]
    },
    {
      baslik: "Tepeler, öbekler ve boşluklar",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "⛰️", terim: "Peak", tr: "tepe", tanim: "Grafikteki belirgin tepe noktası.", ornek: "Uyku grafiğinde 7 saat." },
            { ikon: "1️⃣", terim: "Unimodal", tr: "tek tepeli", tanim: "Tek belirgin tepesi olan dağılım.", ornek: "Uyku süresi." },
            { ikon: "2️⃣", terim: "Bimodal", tr: "çift tepeli", tanim: "İki belirgin tepesi olan dağılım.", ornek: "9. ve 12. sınıfların boylarını aynı grafiğe koymak." },
            { ikon: "🎲", terim: "Approximately uniform", tr: "yaklaşık düz", tanim: "Belirgin tepe yok; bütün değerlerin sıklığı aşağı yukarı aynı.", ornek: "Bir zarı 60 kez atmak." },
            { ikon: "🫧", terim: "Cluster", tr: "öbek", tanim: "Değerlerin öbeklendiği bölge.", ornek: "9. sınıf boyları 158–163 cm arasında öbekleniyor." },
            { ikon: "🕳️", terim: "Gap", tr: "boşluk", tanim: "Hiç değer bulunmayan boş aralık.", ornek: "Boylarda 163 ile 174 cm arası." }
          ] },
        { tip: "grafik", baslik: "Kaç tepe var?", xlabel: "Değerler", ylabel: "Sıklık", xmax: 10, ymax: 10,
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0, 0.1], [1, 0.4], [2, 1.2], [3, 3], [4, 6], [5, 8], [6, 6], [7, 3], [8, 1.2], [9, 0.4], [10, 0.1]] },
            { id: "pk", tip: "yazi", x: 5, y: 8.8, metin: "PEAK", gizli: true },
            { id: "pk1", tip: "yazi", x: 3, y: 8.8, metin: "PEAK", gizli: true },
            { id: "pk2", tip: "yazi", x: 7, y: 8.8, metin: "PEAK", gizli: true },
            { id: "gap", tip: "yazi", x: 5, y: 1, metin: "GAP", gizli: true },
            { id: "cl1", tip: "yazi", x: 2.4, y: 0.7, metin: "cluster", gizli: true },
            { id: "cl2", tip: "yazi", x: 7.6, y: 0.7, metin: "cluster", gizli: true }
          ],
          durumlar: [
            { metin: "Tek tepe: ==unimodal==.", goster: ["pk"] },
            { metin: "İki belirgin tepe: ==bimodal==. İki öbek arasında bir boşluk (*gap*) var.", gizle: ["pk"], goster: ["pk1", "pk2", "gap", "cl1", "cl2"], set: { e: { noktalar: [[0, 0.2], [1, 1.5], [2, 5], [3, 8], [4, 5], [5, 1.2], [6, 5], [7, 8], [8, 5], [9, 1.5], [10, 0.2]] } } },
            { metin: "Her değer aşağı yukarı aynı sıklıkta: ==approximately uniform==. Belirgin tepe yok.", gizle: ["pk1", "pk2", "gap", "cl1", "cl2"], set: { e: { noktalar: [[0, 0.5], [1, 5.5], [2, 6], [3, 5.6], [4, 6], [5, 5.5], [6, 6], [7, 5.6], [8, 6], [9, 5.5], [10, 0.5]] } } }
          ] },
        { tip: "sekil", baslik: "Bimodal: 9. ve 12. sınıf boyları", fig: { type: "dot", values: [158, 159, 160, 160, 161, 161, 162, 163, 174, 175, 176, 176, 177, 177, 178, 180], label: "Height (cm)" } },
        { tip: "sekil", baslik: "Approximately uniform: 60 zar atışı", fig: { type: "bar", cats: ["1", "2", "3", "4", "5", "6"], series: [{ name: "Atış sayısı", values: [9, 11, 10, 10, 9, 11] }], ylabel: "Frequency" } },
        { tip: "tuzak", baslik: "Küçük iniş çıkışlar tepe değildir", metin: "Zar grafiğinde 9 ile 11 arasındaki farklar gerçek veride kaçınılmazdır.", yanlis: "Zar grafiğinde 2 ve 6 sütunları iki tepedir.", dogru: "Ana özelliklere bak: ==belirgin== tepeler, öbekler ve boşluklar. Küçük farklara takılma." }
      ]
    },
    {
      baslik: "Dağılımı anlat: S-O-C-V",
      bloklar: [
        { tip: "harita", merkez: "Describe the distribution", dallar: [
            { baslik: "*Shape*", alt: "Simetri/çarpıklık, tepe, *cluster*, *gap*" },
            { baslik: "*Outliers*", alt: "Ötekilerden kopuk aşırı değerler" },
            { baslik: "*Center*", alt: "Tipik değer (şimdilik median)" },
            { baslik: "*Variability*", alt: "Değerler ne kadar yayılmış" },
            { baslik: "*In context*", alt: "Değişkenin adıyla yaz" }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "🚩", terim: "Outlier", tr: "aykırı değer", tanim: "Genel örüntünün dışında, ötekilerden kopuk duran aşırı değer. Kesin kural (1,5 × IQR) ileride gelecek; şimdilik \"possible\" ya da \"appear to be\".", ornek: "Çoğu maçta 1–5 gol atılırken 9 ve 10 gollü maçlar." },
            { ikon: "🎯", terim: "Center", tr: "merkez", tanim: "Tipik değer; bu bölümde *median*, yani sıralayınca tam ortada kalan değer.", ornek: "20 maçta ortadaki 10. ve 11. değer: 2 gol." },
            { ikon: "↔️", terim: "Variability", tr: "değişkenlik", tanim: "Değerlerin ne kadar yayıldığı; şimdilik \"varies from … to …\".", ornek: "Goller 1'den 10'a kadar değişiyor." },
            { ikon: "🏷️", terim: "In context", tr: "bağlamıyla", tanim: "Cevabı değişkenin adıyla yazmak; yalnızca \"the data\" ya da yalnızca birim yazmak yetmez.", ornek: "\"goals scored\", \"highway fuel economy\"." }
          ] },
        { tip: "tuzak", baslik: "AP sınavındaki en yaygın hata", metin: "\"Describe the distribution\" denince yalnızca şekli yazıp bırakmak.", yanlis: "The data are skewed right.", dogru: "Dördü de olmalı: *shape*, *outliers*, *center*, *variability* ve hepsi bağlamıyla: \"The distribution of goals scored is skewed right…\"." },
        { tip: "tuzak", baslik: "Bağlam", metin: "Bağlam, değişkenin adını söylemektir.", yanlis: "2 is the center. / mpg ile ilgili.", dogru: "\"The median is 2 goals scored.\" Değişkenin adı ve birimi birlikte geçer." }
      ]
    },
    {
      baslik: "Örnek 1: kadın futbol takımı",
      bloklar: [
        { tip: "sekil", baslik: "2016 ABD kadın futbol takımı: 20 maçta atılan goller", fig: { type: "dot", values: [5, 5, 1, 10, 5, 2, 1, 1, 2, 3, 3, 2, 1, 4, 2, 1, 2, 1, 9, 3], label: "Goals scored" } },
        { tip: "tablo", baslik: "Sütun sayıları", head: ["Gol", "1", "2", "3", "4", "5", "9", "10"], rows: [["Maç sayısı", "6", "5", "3", "1", "3", "1", "1"]], not: "6 + 5 + 3 + 1 + 3 + 1 + 1 = 20 maç." },
        { tip: "ornek", baslik: "Dört parçayı adım adım bul", durum: "Veri: 5, 5, 1, 10, 5, 2, 1, 1, 2, 3, 3, 2, 1, 4, 2, 1, 2, 1, 9, 3 (20 maç).",
          adimlar: ["Shape: kuyruk sağa uzuyor, tek tepe 1 golde, 5 ile 9 gol arasında bir boşluk var.", "Outliers: 9 ve 10 gollü iki maç ötekilerden kopuk.", "Sıralı veri: 1 1 1 1 1 1 2 2 2 2 2 3 3 3 4 5 5 5 9 10. n = 20, yani ortada 10. ve 11. değer var.", "10. değer 2, 11. değer 2; median = (2 + 2) ÷ 2 = 2.", "Variability: goller 1'den 10'a kadar değişiyor."],
          sonuc: "Skewed right, tek tepe 1'de, 5–9 arası boşluk; 9 ve 10 aykırı görünüyor; ==median = 2 gol==; 1'den 10'a." },
        { tip: "tablo", baslik: "Sınav kalıbı (İngilizce)", head: ["Parça", "Cümle"], rows: [
            ["Shape", "The distribution of goals scored is skewed to the right, with a single peak at 1 goal and a gap between 5 and 9 goals."],
            ["Outliers", "The games with 9 and 10 goals scored appear to be outliers."],
            ["Center", "The median is 2 goals scored."],
            ["Variability", "The number of goals scored varies from 1 to 10."]
          ], not: "Dört cümlede de \"goals scored\" geçiyor: bağlam bu. \"Appear to be\" dersin, çünkü kesin kural ileride gelecek." },
        { tip: "formul", parcalar: [{ t: "The distribution of [variable] is [shape]", alt: "şekil" }, "+", { t: "… [outliers]", alt: "aykırı" }, "+", { t: "The median is [center]", alt: "merkez" }, "+", { t: "[Variable] varies from [min] to [max]", alt: "yayılım" }], aciklama: "Genel kalıp: dört parça, her birinde değişkenin adı." }
      ]
    },
    {
      baslik: "Örnek 2: simetrik yakıt ekonomisi",
      bloklar: [
        { tip: "sekil", baslik: "2018 Toyota 4Runner: otoyol yakıt ekonomisi (25 araç)", fig: { type: "dot", values: [21.5, 21.9, 22.0, 22.0, 22.1, 22.1, 22.2, 22.2, 22.3, 22.3, 22.3, 22.4, 22.4, 22.4, 22.4, 22.4, 22.5, 22.5, 22.5, 22.6, 22.6, 22.7, 22.8, 22.9, 23.3], label: "Highway fuel economy (mpg)" } },
        { tip: "ornek", baslik: "25 aracın dağılımı", durum: "Aynı model 25 aracın otoyolda galon başına kaç mil yaptığı (mpg).",
          adimlar: ["Shape: roughly symmetric, tek tepe 22,4 mpg'de; en solda (21,5–21,9) ve en sağda (22,9–23,3) birer boşluk var.", "Outliers: 21,5 ve 23,3 mpg olası aykırı değerler (possible outliers).", "Center: n = 25, ortadaki değer 13. Sırayla: 21,5 / 21,9 / 22,0 ×2 / 22,1 ×2 / 22,2 ×2 / 22,3 ×3 / 22,4 ×5. İlk 11 değer 22,3'e kadar; 12.–16. değerler 22,4. 13. değer 22,4.", "Variability: 21,5'ten 23,3 mpg'ye."],
          sonuc: "==Median = 22,4 mpg==; değerler 21,5'ten 23,3 mpg'ye kadar değişiyor." },
        { tip: "ikili", sol: { ikon: "🛑", baslik: "Kesin hüküm", maddeler: ["\"These are outliers.\"", "\"The data are perfectly symmetric.\""] },
          sag: { ikon: "✅", baslik: "Yumuşatıcı dil", maddeler: ["\"Appear to be outliers\" / \"possible outliers\"", "\"Roughly symmetric\"", "\"Approximately uniform\""] },
          oyun: [
            { metin: "21,5 ve 23,3 mpg olası aykırı değerlerdir (possible outliers).", cevap: "sag", neden: "Kesin kural henüz yok; yumuşatıcı dil doğru." },
            { metin: "Dağılım mükemmel simetriktir.", cevap: "sol", neden: "Gerçek veri kusursuz simetrik olmaz; \"roughly symmetric\" demelisin." },
            { metin: "Zar atışları yaklaşık düzdür (approximately uniform).", cevap: "sag", neden: "Küçük farklar olacağı için \"approximately\" doğru dil." },
            { metin: "9 ve 10 gollü maçlar kesinlikle aykırıdır.", cevap: "sol", neden: "\"Appear to be\" demek daha güvenli; kesin kural sonra gelecek." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Dotplot*: etiketli ve ölçekli bir eksen, her değere bir nokta. Sayısal veri için.",
            "İddia sınarken çizgiyi koy, noktaları say, payı hesapla; \"daha uzun\" tam sınırı saymaz (20/27 = %74,1 < %75).",
            "Şekle bak: *roughly symmetric*, *skewed right* ya da *skewed left*. Yönü kuyruk belirler, tepe değil.",
            "Tepeleri say: *unimodal*, *bimodal*, *approximately uniform*; belirgin *cluster* ve *gap*'i belirt, küçük iniş çıkışlara takılma.",
            "Anlatırken dördü de olsun: *shape*, *outliers*, *center*, *variability*.",
            "Hepsi *in context*: değişkenin adıyla (goals scored). Yalnızca şekil yazmak sınavın en yaygın hatasıdır.",
            "Yumuşatıcı dil kullan: roughly, approximately, possible, appear to be.",
            "Goller örneği: skewed right, 9 ve 10 olası aykırı, median 2, 1'den 10'a. Yakıt örneği: roughly symmetric, median 22,4 mpg."
          ] }
      ]
    }
  ]
};
