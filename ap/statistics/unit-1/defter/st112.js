/* Kitora not defteri · st112 · 1F-2 Investigative Question ve Sonucun Kapsamı
   Kaynak: ap-videolar/src/episodes/st112 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st112",
  amac: "Bu konu her araştırmanın başındaki tek cümlelik soruyu, *investigative question*'ı anlatıyor. Sorunun üç bileşenini, *parameter* ile *statistic* farkını ve sonucun kime genellenebileceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Soru üç bileşenden oluşur",
      kisa: "Soru değişkeni, parametreyi ve sonucun kapsamını söyler.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📍", terim: "Investigative question", tr: "araştırma sorusu", tanim: "Veri toplamayı, analizi ve çıkarılabilecek sonucu yönlendiren tek cümlelik soru: ==araştırmanın GPS'i==. Adresi yazmadan navigasyona çıkamazsın.", ornek: "“Çalışan lise öğrencilerinin ortalama saatlik ücreti için akla yatkın değerler neler?”" },
            { ikon: "📏", terim: "Variable of interest", tr: "ilgilenilen değişken", tanim: "1. bileşen: neyi ölçüyoruz?", ornek: "Saatlik ücret (dolar)." },
            { ikon: "🧮", terim: "Type of inference", tr: "çıkarım türü", tanim: "2. bileşen: hangi *parameter* tahmin ediliyor ya da sınanıyor, hangi yönde?", ornek: "Ortalamayı (*mean*) tahmin etmek." },
            { ikon: "🌍", terim: "Type of conclusion", tr: "sonuç türü", tanim: "3. bileşen: sonuç hangi *population*'a genellenir, neden-sonuç denebilir mi?", ornek: "Çalışan bütün Amerikalı lise öğrencileri; neden-sonuç yok." }
          ] },
        { tip: "formul", parcalar: [{ t: "*Variable*", alt: "neyi ölçüyorum?" }, "+", { t: "*Type of inference*", alt: "parameter + yön" }, "+", { t: "*Type of conclusion*", alt: "kime genellerim?" }, "=", { t: "İyi bir soru", alt: "" }], aciklama: "Üç bileşen sorunun üç yolu: cetvel, hesap makinesi, insan grubu." },
        { tip: "ornek", baslik: "Çalışan lise öğrencilerinin saatlik ücreti", durum: "“What are the plausible values for the average hourly wage (in dollars) of all employed high school students in the United States?”",
          adimlar: [
            "*Variable*: saatlik ücret (*hourly wage*, dolar).",
            "*Type of inference*: “average” bir ortalamayı (*mean*) işaret eder; ==*plausible values*== bir *parameter*'ı tahmin etmek (*estimation*) demektir. Kesin nokta değil, bir aralık aranır.",
            "*Type of conclusion*: “all employed high school students in the United States” → çalışan bütün Amerikalı lise öğrencilerine genelleme.",
            "*Treatment* yok → neden-sonuç yok."
          ],
          sonuc: "1 · hourly wage ($) · 2 · mean'i tahmin et (μ) · 3 · çalışan tüm ABD'li lise öğrencilerine genelle; neden-sonuç yok." }
      ]
    },
    {
      baslik: "Tahmin mi, sınama mı? Yön ne?",
      kisa: "“Plausible values” tahmindir; yönü sözcükler belirler.",
      bloklar: [
        { tip: "ikili",
          sol: { ikon: "🎯", baslik: "Tahmin (*estimation*)", maddeler: ["“*Plausible values* for…”, “Estimate…”", "Bir aralık ararsın"] },
          sag: { ikon: "⚖️", baslik: "Sınama (*test*)", maddeler: ["“Is … greater than …?”", "Bir iddiayı sınarsın, yön gerekir"] },
          oyun: [
            { metin: "Okulumuzdaki öğrencilerin ortalama uyku süresi için akla yatkın değerler neler?", cevap: "sol", neden: "*Plausible values* → tahmin." },
            { metin: "Okula geliş süresi ortalama 30 dakikadan uzun mu?", cevap: "sag", neden: "Bir iddia sınanıyor ve yön var." },
            { metin: "Öğrencilerin çoğunluğu servisle mi geliyor?", cevap: "sag", neden: "“Çoğunluk” bir iddia: p > 0.50 sınanıyor." },
            { metin: "Bir sınıfta servisle gelenlerin oranını tahmin et.", cevap: "sol", neden: "“Tahmin et”: *estimation*." }
          ] },
        { tip: "tablo", baslik: "Yönü sözcükler belirler", head: ["Sözcükler", "Yön", "Sembol"], rows: [
            ["increase, more than, greater than, at least", "tek yönlü (artış)", ">"],
            ["decrease, less than, fewer", "tek yönlü (azalış)", "<"],
            ["difference, change, not the same, relationship", "iki yönlü (*not equal*)", "≠"],
            ["majority (çoğunluk)", "yarıdan fazla", "p > 0.50"]
          ], not: "Sınavdaki adı *alternative hypothesis*'in yönü." },
        { tip: "grafik", baslik: "Yönü sayı doğrusunda gör", xlabel: "Değer", ylabel: "", xmax: 40, ymax: 6,
          xticks: [{ v: 0, label: "0" }, { v: 14, label: "14" }, { v: 30, label: "30" }, { v: 40, label: "40" }], yticks: [],
          ogeler: [
            { id: "l1", tip: "cizgi", renk: 1, etiket: "", from: [0, 4.5], to: [40, 4.5] },
            { id: "t1", tip: "yazi", x: 0.5, y: 5.3, metin: "Okula geliş süresi (dakika)", hiza: "start" },
            { id: "p30", tip: "nokta", x: 30, y: 4.5, etiket: "30", renk: 0 },
            { id: "a1", tip: "alan", renk: 0, noktalar: [[30, 4.1], [40, 4.1], [40, 4.9], [30, 4.9]], gizli: true },
            { id: "s1", tip: "yazi", x: 35, y: 3.5, metin: "μ > 30", gizli: true },
            { id: "l2", tip: "cizgi", renk: 1, etiket: "", from: [0, 1.5], to: [40, 1.5] },
            { id: "t2", tip: "yazi", x: 0.5, y: 2.3, metin: "100 m süresi (saniye), yeni ısınmayla", hiza: "start", gizli: true },
            { id: "p14", tip: "nokta", x: 14, y: 1.5, etiket: "14", renk: 2, gizli: true },
            { id: "a2", tip: "alan", renk: 2, noktalar: [[0, 1.1], [14, 1.1], [14, 1.9], [0, 1.9]], gizli: true },
            { id: "s2", tip: "yazi", x: 7, y: 0.5, metin: "μ < 14", gizli: true }
          ],
          durumlar: [
            { metin: "“Okula geliş süresi ortalama 30 dakikadan uzun mu?” Sayısal değişken → *parameter* bir *mean*. 30 işaretlenir." },
            { metin: "Yön: *greater than* 30. Sayı doğrusunun sağ tarafı taranır: ==μ > 30==.", goster: ["a1", "s1"] },
            { metin: "Antrenör: yeni ısınma 100 m süresini 14 saniyenin altına indiriyor mu? 14 işaretlenir.", goster: ["t2", "p14"] },
            { metin: "Yön: *less than* 14. Sol taraf taranır: ==μ < 14==.", goster: ["a2", "s2"] }
          ] }
      ]
    },
    {
      baslik: "*Mean* mi, *proportion* mı?",
      kisa: "Sayısal değişkende mean (μ), evet/hayır değişkende proportion (p).",
      bloklar: [
        { tip: "ikili",
          sol: { ikon: "📏", baslik: "*Quantitative* değişken", maddeler: ["Sayısal ölçüm (dakika, saat, saniye)", "*Parameter*: *mean* (μ)", "“Ortalama süre…”"] },
          sag: { ikon: "✔️", baslik: "*Categorical* (evet/hayır)", maddeler: ["Kategori: evet ya da hayır", "*Parameter*: *proportion* (p)", "“Çoğunluğu…”, “yüzde kaçı…”"] },
          oyun: [
            { metin: "Okula geliş süresi (dakika).", cevap: "sol", neden: "Sayısal: *quantitative* → *mean*." },
            { metin: "Öğrenci servisle geliyor mu? (evet/hayır)", cevap: "sag", neden: "Evet/hayır: *categorical* → *proportion*." },
            { metin: "100 metre koşu süresi (saniye).", cevap: "sol", neden: "Saniye sayısal: *mean*." },
            { metin: "Ders dokuzda başlasın istiyor musun? (evet/hayır)", cevap: "sag", neden: "Evet/hayır: *proportion*." },
            { metin: "Saatlik ücret (dolar).", cevap: "sol", neden: "Dolar sayısal: *mean*." }
          ] },
        { tip: "ornek", baslik: "Servis sorusu ve antrenör sorusu", durum: "(1) “Do a majority of all students at our school come by school bus?” (2) Bir antrenöre göre yeni ısınma, 100 metre süresini 14 saniyenin altına indiriyor.",
          adimlar: [
            "Servis: *variable* servisle geliyor mu? (evet/hayır) → *categorical* → *proportion*, p. *Majority* = yarıdan fazlası, yani *greater than* 0.50.",
            "Antrenör: *variable* 100 m süresi (saniye) → *quantitative* → *parameter* yeni ısınmayla sürelerin ==*mean*==i, μ.",
            "“İndiriyor” bir azalış: tek yönlü, *less than*."
          ],
          sonuc: "(1) p = okuldaki bütün öğrenciler içinde servisle gelenlerin oranı; yön p > 0.50. (2) μ = yeni ısınmayla 100 m sürelerinin ortalaması; yön μ < 14." },
        { tip: "tuzak", baslik: "Parameter ve yön hataları", metin: "Yalnızca “süre” dersen *variable* yazmış olursun; *parameter* ortalamayı (ya da oranı) içermeli. Amaç “artış” iken yön de tek yönlü olmalı.", yanlis: "“Parameter: 100 m time.” ya da amaç “increase” iken soruyu “is there a difference?” diye yazmak.", dogru: "“Parameter: the MEAN 100 m time.” Artış/azalış tek yönlü (>, <); fark/değişim/ilişki iki yönlü (≠)." }
      ]
    },
    {
      baslik: "*Parameter* ve *statistic*",
      kisa: "Parameter population'ı, statistic sample'ı anlatır.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🌍", terim: "Parameter", tr: "parametre", tanim: "*Population*'ı anlatan sayı (μ, p). Bilinmez; tahmin edilir ya da sınanır.", ornek: "p = bütün okulda servisle gelenlerin oranı." },
            { ikon: "🧪", terim: "Statistic", tr: "istatistik (örneklem değeri)", tanim: "*Sample*'dan hesaplanan sayı (x̄, p̂).", ornek: "p̂ = 62 ÷ 100 = 0.62." }
          ] },
        { tip: "ornek", baslik: "Rastgele 100 öğrenci, 62'si servisle geliyor", durum: "Okuldan rastgele 100 öğrenciye sordun; 62'si servisle geliyor.",
          adimlar: [
            "Örneklemdeki oran: 62 ÷ 100 = 0.62 → bu bir ==*statistic*==.",
            "Bütün okulda servisle gelenlerin oranı p bilinmiyor → bu *parameter*; tahmin edilir.",
            "0.62, p için bir tahmin (*estimate*): örneklemden popülasyona."
          ],
          sonuc: "p̂ = 0.62 (*statistic*); p = bütün öğrenciler içindeki oran (*parameter*, bilinmiyor)." },
        { tip: "tuzak", baslik: "Parameter population'ı anlatır, sample'ı değil", metin: "Şıklarda *parameter*'ı ankete katılanlara bağlayan tanım yanlıştır.", yanlis: "“p = proportion of the 100 students surveyed who come by bus.”", dogru: "“p = proportion of ALL students at the school who come by bus.”" }
      ]
    },
    {
      baslik: "İyi soruyu kötüsünden ayır",
      kisa: "İyi soruda population, variable, parameter ve yön net olur.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "❌", baslik: "“Is screen time related to sleep?”", metin: "*Population* yok: kimin için? Kimin ekran süresi?" },
            { ikon: "❌", baslik: "“For all students at our school, is there a relationship between phones and sleep?”", metin: "*Variable* belirsiz: telefon sayısı mı, süresi mi? Uyku saati mi, kalitesi mi?" },
            { ikon: "✅", baslik: "“For all students at our school, is there a relationship between daily screen time (hours) and nightly sleep time (hours)?”", metin: "*Population* net, iki *variable* ölçülebilir, ilişki sorulmuş." }
          ] },
        { tip: "adimlar", baslik: "Kontrol listesi: dört şeye bak", adimlar: [
            { baslik: "*Population*", metin: "Yazılmış mı ve çalışmadaki *population* ile aynı mı? (Fazla dar ya da fazla geniş olmasın.)" },
            { baslik: "*Variable*", metin: "Net ve ölçülebilir mi? (“number of…”, “time in…”)" },
            { baslik: "*Parameter*", metin: "Doğru mu? *quantitative* → *mean*, *categorical* → *proportion*." },
            { baslik: "Yön", metin: "Amaca uyuyor mu? (artış/azalış tek yönlü, fark iki yönlü)" }
          ] },
        { tip: "tuzak", baslik: "Population çok geniş ya da çok dar olmasın", metin: "Soruda yazan *population* ile çalışmada gerçekten örneklenen *population* aynı olmalı.", yanlis: "Okulun 10. sınıf öğrencilerinden örnek alıp “bütün Türkiye'deki öğrenciler” hakkında soru sormak.", dogru: "Soruyu örneklenen *population*'a uyacak şekilde kur." }
      ]
    },
    {
      baslik: "Rastgele seçim: sonuç kime genellenir?",
      kisa: "Genelleme, örneğin rastgele seçildiği population'da durur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎲", terim: "Generalize", tr: "genellemek", tanim: "*Sample*'daki sonucu bir *population*'a taşımak. Rastgele seçildiyse seçildiği *population*'a yapılır.", ornek: "Rastgele seçilmiş ABD yetişkinlerinin sonucu → bütün ABD yetişkinleri (gözlemsel: sebep denmez)." }
          ] },
        { tip: "sekil", baslik: "Depresyon belirtisi yaşayanların oranı (rastgele seçilmiş ABD yetişkinleri, son bir yıl)", fig: { type: "bar", cats: ["Lise diploması ya da altı", "Üniversite mezunu ya da üstü"], series: [{ name: "Yüzde", values: [21.5, 12.4] }], ylabel: "Yüzde (%)" } },
        { tip: "grafik", baslik: "Genelleme seçim sınırında durur", xlabel: "", ylabel: "", xmax: 10, ymax: 10, xticks: [], yticks: [],
          ogeler: [
            { id: "all", tip: "alan", renk: 1, noktalar: [[0.5, 0.5], [9.5, 0.5], [9.5, 9.5], [0.5, 9.5]] },
            { id: "alt", tip: "yazi", x: 5, y: 9.9, metin: "Population: tüm Türkiye'deki liseliler" },
            { id: "ist", tip: "alan", renk: 0, noktalar: [[1, 6], [3.2, 6], [3.2, 8.5], [1, 8.5]], gizli: true },
            { id: "istt", tip: "yazi", x: 2.1, y: 7.1, metin: "İstanbul", gizli: true },
            { id: "x", tip: "yazi", x: 6.5, y: 4.5, metin: "✗ Türkiye geneli", gizli: true },
            { id: "ok", tip: "ok", from: [3.4, 7.2], to: [6.5, 5.2], gizli: true },
            { id: "yes", tip: "yazi", x: 2.1, y: 5.3, metin: "✓ yalnızca İstanbul liseleri", gizli: true }
          ],
          durumlar: [
            { metin: "Bütün Türkiye'deki liseliler: bu bizim hakkında konuşmak istediğimiz geniş *population*." },
            { metin: "Ama kişiler yalnızca İstanbul'daki liselerden rastgele seçildi: *sample* sadece buradan geldi.", goster: ["ist", "istt"] },
            { metin: "Sonuç yalnızca seçildiği yere genellenir. Sınır dışına taşan genelleme geçersiz.", goster: ["ok", "x", "yes"] }
          ] },
        { tip: "tuzak", baslik: "Seçildiği population'ın dışına taşma", metin: "Konferanstaki matematik öğretmenlerinden seçtiysen genelleme yalnızca o öğretmenler içindir.", yanlis: "“Sonuç Türkiye'deki bütün öğretmenlere genellenir.”", dogru: "“Sonuç, örneklemin seçildiği *population*'a genellenir.” (rastgele seçim yoksa: “çalışmadakilere benzeyen kişilere”)" }
      ]
    },
    {
      baslik: "Rastgele atama: neden-sonuç ve çizgi film deneyi",
      kisa: "Rastgele atama neden-sonucu, rastgele seçim genellemeyi sağlar.",
      bloklar: [
        { tip: "ornek", baslik: "Çizgi film deneyinin sonucunu yaz", durum: "Aileleri gönüllü olan dört yaşında 60 çocuk rastgele 20'şerli üç gruba ayrıldı (60 ÷ 3 = 20). Biri 9 dakika hızlı çizgi film (*fast-paced cartoon*), biri eğitici çizgi film, biri resim çizme (*drawing*) etkinliği yaptı. Hızlı çizgi film izleyenler dikkat/planlama testinde (*executive function*) belirgin biçimde düşük puan aldı.",
          adimlar: ["Rastgele atama var → neden-sonuç denebilir: hızlı çizgi film puanı düşürdü.", "Rastgele seçim yok (gönüllüler) → genelleme çalışmadakilere benzeyen çocuklarla sınırlı.", "İki cümleyi tek sonuçta birleştir."],
          sonuc: "“Fast-paced cartoons caused lower scores — for 4-year-olds like those in the study.”" },
        { tip: "ikili", ayirici: "↔",
          sol: { ikon: "🎯", baslik: "Kime genellerim?", maddeler: ["Bireyler rastgele *seçildi* mi?", "Rastgele seçim → seçildiği *population*", "Seçim yok (gönüllü) → benzerlerine"] },
          sag: { ikon: "🔗", baslik: "Neden-sonuç diyebilir miyim?", maddeler: ["*Treatment* rastgele *atandı* mı?", "Rastgele atama → neden-sonuç", "Atama yok → yalnızca ilişki"] },
          oyun: [
            { metin: "Gönüllü ailelerin çocukları rastgele üç gruba atanıyor.", cevap: "sag", neden: "Rastgele *atama* → neden-sonuç." },
            { metin: "Okuldan rastgele 150 öğrenci seçiliyor.", cevap: "sol", neden: "Rastgele *seçim* → okula genelleme." },
            { metin: "Hızlı çizgi film izlemek puanı düşürdü, diyebilir miyiz?", cevap: "sag", neden: "Atama rastgeleydi: evet, ama benzer çocuklar için." },
            { metin: "Sonucu bütün dört yaşındaki çocuklara genelleyebilir miyiz?", cevap: "sol", neden: "Çocuklar gönüllüydü, rastgele seçilmedi: hayır." }
          ] },
        { tip: "tablo", baslik: "İki sorunun dört kombinasyonu", head: ["", "Rastgele atama var", "Rastgele atama yok"], rows: [
            ["Rastgele seçim var", "Neden-sonuç ✓ · population'a genelleme ✓", "Neden-sonuç ✗ · population'a genelleme ✓"],
            ["Rastgele seçim yok", "Neden-sonuç ✓ · yalnızca benzerlerine", "Neden-sonuç ✗ · yalnızca benzerlerine"]
          ], vurgu: 1, not: "Çizgi film deneyi alt satırdaki sol hücre. Ayrıntı: sonraki bölümler." },
        { tip: "tuzak", baslik: "Çoğu deneyde birimler rastgele seçilmez", metin: "Deneyde atama rastgele, birimler gönüllü olabilir. İkisini ayrı ayrı sor.", yanlis: "“Atama rastgele olduğu için sonuç bütün dört yaşındaki çocuklara genellenir.”", dogru: "Atama rastgele: neden-sonuç. Seçim rastgele değil: yalnızca benzerlerine." }
      ]
    },
    {
      baslik: "*Census* ve son kontrol",
      kisa: "Herkese sorduysan bu census'tur; inference gerekmez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Census", tr: "tam sayım", tanim: "*Population*'daki herkesten (her şeyden) veri toplamak. Bulunan değer *parameter*'ın kendisidir; *inference* gerekmez.", ornek: "38 işletmenin 38'ine de sormak." }
          ] },
        { tip: "ikili",
          sol: { ikon: "🧮", baslik: "*Census*", maddeler: ["Herkese sorulur (38 / 38)", "Sonuç = *parameter*", "*Inference* gerekmez"] },
          sag: { ikon: "🧪", baslik: "*Sample*", maddeler: ["Bir kısmına sorulur (15 / 38)", "Sonuç = *statistic*", "*Inference* gerekir"] },
          oyun: [
            { metin: "38 işletmenin 38'ine anket yapıldı.", cevap: "sol", neden: "Hepsine soruldu: *census*." },
            { metin: "38 işletmenin 15'ine anket yapıldı.", cevap: "sag", neden: "Bir kısmı: *sample*, *inference* gerekir." },
            { metin: "Bir sınıftaki 40 öğrencinin hepsinin boyu ölçüldü ve o sınıfın ortalaması bulundu.", cevap: "sol", neden: "Population = bu sınıf, hepsi ölçüldü: *census*." },
            { metin: "Rastgele 150 öğrenciye telefon edildi.", cevap: "sag", neden: "Okulun yalnızca bir kısmı: *sample*." }
          ] },
        { tip: "tuzak", baslik: "Census'ta güven aralığı ya da test yok", metin: "Bütün *population*'a sorulduysa bulduğun değer zaten *parameter*'dır. Rastgele seçim yapılmamış olması da sorun değildir.", yanlis: "“38 işletmenin hepsine sorduk, yine de confidence interval hesaplamalıyız.”", dogru: "*Census* → *inference* gerekmez." },
        { tip: "ornek", baslik: "Mini sınav: derslerin saat 9'da başlaması", durum: "Okul yönetimi, öğrencilerin çoğunluğunun derslerin dokuzda başlamasını isteyip istemediğini öğrenmek için rastgele 150 öğrenciye soruyor. *Parameter* ve yön nedir?",
          adimlar: [
            "*Variable*: dokuzda başlamasını istiyor mu? (evet/hayır) → *categorical* → *proportion*, p.",
            "“Çoğunluk” = yarıdan fazlası → yön *greater than* 0.50.",
            "*Parameter* bütün okulu anlatır, 150 kişiyi değil: p = okuldaki ==bütün== öğrenciler içinde bunu isteyenlerin oranı.",
            "Şıklardaki p tanımı “ankete katılan 150 öğrenci” ise yanlış; yön ≠ 0.50 ise yine yanlış (amaç “çoğunluk”)."
          ],
          sonuc: "p > 0.50; p = okuldaki bütün öğrenciler içinde dersin 9'da başlamasını isteyenlerin oranı." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Investigative question* araştırmanın GPS'idir: *variable*, *type of inference*, *type of conclusion*.",
            "Sayısal (*quantitative*) değişkende *parameter* bir *mean* (μ); evet/hayır (*categorical*) değişkende bir *proportion* (p).",
            "“*Plausible values*” tahmin, “Is … greater than …?” iddia sınama demektir; “increase/decrease” tek yönlü (>, <), “difference” iki yönlü (≠), “majority” p > 0.50.",
            "*Parameter* *population*'ı anlatır, *statistic* *sample*'dan gelir (0.62 bir *statistic*); “mean time” *parameter*, yalnızca “time” *variable*.",
            "İyi soruda dört şey var: *population*, *variable*, *parameter*, yön.",
            "Rastgele *seçim* varsa seçildiği *population*'a; yoksa çalışmadakilere benzeyenlere genellersin.",
            "Rastgele *atama* varsa neden-sonuç denir; yoksa yalnızca ilişki.",
            "Herkesten veri topladıysan bu bir *census*: *inference* gerekmez (38/38 evet, 15/38 hayır)."
          ] }
      ]
    }
  ]
};
