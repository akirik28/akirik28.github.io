/* Kitora not defteri · st802 · 8.3 Uyum İyiliği Testini Yapmak
   Kaynak: AP Statistics CED Unit 8 (Topic 8.3). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st802",
  amac: "Bu konu ki-kare uyum iyiliği testinin hesabını anlatıyor: χ² istatistiğini bulmayı, χ² dağılımını df’ye göre okumayı, p-değerini sağ kuyruktan bulmayı ve sonucu bağlamla yazmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Test istatistiği: χ² = Σ (O − E)² / E",
      kisa: "Her kategorinin (O − E)² / E katkısını topla; fark büyüdükçe χ² büyür.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "χ²", alt: "ki-kare istatistiği" }, "=", { t: "Σ", alt: "bütün kategoriler üzerinden topla" }, { t: "(O − E)² / E", alt: "her kategorinin katkısı" }], aciklama: "Kare, eksi farkları pozitif yapar. E’ye bölmek, aynı farkın küçük bir beklenen sayıda daha büyük sayılmasını sağlar." },
        { tip: "kavramlar", kartlar: [
            { ikon: "Σ", terim: "Chi-square statistic", tr: "ki-kare istatistiği", tanim: "Gözlenenle beklenen arasındaki toplam uzaklığın tek sayıda özeti. Hep sıfır ya da pozitif.", ornek: "χ² = 0 olsaydı gözlenenler beklenenlerle birebir aynı olurdu." },
            { ikon: "🧩", terim: "Component", tr: "bileşen", tanim: "Tek bir kategorinin χ²’ye kattığı (O − E)² / E değeri.", ornek: "Spor için (100 − 80)² / 80 = 5,00." },
            { ikon: "🎚️", terim: "Degrees of freedom", tr: "serbestlik derecesi", tanim: "Uyum iyiliğinde df = kategori sayısı − 1. Hangi χ² eğrisini kullanacağını belirler.", ornek: "4 kategori için df = 3." }
          ] },
        { tip: "tablo", baslik: "Kulüp tercihleri: hücre hücre (n = 200)", head: ["Kulüp", "Oran (H₀)", "Gözlenen O", "Beklenen E", "O − E", "(O − E)² / E"], rows: [
            ["Spor", "0,40", "100", "80", "+20", "5,00"],
            ["Müzik", "0,30", "50", "60", "−10", "1,67"],
            ["Bilim", "0,20", "30", "40", "−10", "2,50"],
            ["Sanat", "0,10", "20", "20", "0", "0,00"],
            ["Toplam", "1,00", "200", "200", "0", "χ² ≈ 9,17"]
          ], vurgu: 4, not: "Geçen yıl %40 Spor, %30 Müzik, %20 Bilim, %10 Sanat seçilmişti; bu yıl rastgele 200 öğrenciye soruldu. O − E toplamı her zaman 0 olur." }
      ]
    },
    {
      baslik: "χ² dağılımı: df ile değişen eğri",
      kisa: "χ² dağılımı sağa yatık; ortalaması df’ye eşit, df büyüdükçe sağa kayar.",
      bloklar: [
        { tip: "grafik", baslik: "χ² eğrileri: df = 2, 4, 8", xlabel: "χ² değeri", ylabel: "Yoğunluk", xmax: 20, ymax: 6,
          xticks: [{ v: 0, label: "0" }, { v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            { id: "c2", tip: "egri", renk: 0, noktalar: [[0,5],[0.5,3.894],[1,3.033],[1.5,2.362],[2,1.839],[2.5,1.433],[3,1.116],[3.5,0.869],[4,0.677],[4.5,0.527],[5,0.41],[5.5,0.32],[6,0.249],[6.5,0.194],[7,0.151],[7.5,0.118],[8,0.092],[8.5,0.071],[9,0.056],[9.5,0.043],[10,0.034],[10.5,0.026],[11,0.02],[11.5,0.016],[12,0.012],[12.5,0.01],[13,0.008],[13.5,0.006],[14,0.005],[14.5,0.004],[15,0.003],[15.5,0.002],[16,0.002],[16.5,0.001],[17,0.001],[17.5,0.001],[18,0.001],[18.5,0],[19,0],[19.5,0],[20,0]], gizli: true },
            { id: "t2", tip: "yazi", x: 1.9, y: 4.3, metin: "df = 2", gizli: true },
            { id: "c4", tip: "egri", renk: 1, noktalar: [[0,0],[0.5,0.974],[1,1.516],[1.5,1.771],[2,1.839],[2.5,1.791],[3,1.673],[3.5,1.521],[4,1.353],[4.5,1.186],[5,1.026],[5.5,0.879],[6,0.747],[6.5,0.63],[7,0.528],[7.5,0.441],[8,0.366],[8.5,0.303],[9,0.25],[9.5,0.205],[10,0.168],[10.5,0.138],[11,0.112],[11.5,0.092],[12,0.074],[12.5,0.06],[13,0.049],[13.5,0.04],[14,0.032],[14.5,0.026],[15,0.021],[15.5,0.017],[16,0.013],[16.5,0.011],[17,0.009],[17.5,0.007],[18,0.006],[18.5,0.004],[19,0.004],[19.5,0.003],[20,0.002]], gizli: true },
            { id: "t4", tip: "yazi", x: 5.2, y: 1.8, metin: "df = 4", gizli: true },
            { id: "c8", tip: "egri", renk: 2, noktalar: [[0,0],[0.5,0.01],[1,0.063],[1.5,0.166],[2,0.307],[2.5,0.466],[3,0.628],[3.5,0.776],[4,0.902],[4.5,1],[5,1.069],[5.5,1.108],[6,1.12],[6.5,1.109],[7,1.079],[7.5,1.033],[8,0.977],[8.5,0.913],[9,0.844],[9.5,0.773],[10,0.702],[10.5,0.633],[11,0.567],[11.5,0.504],[12,0.446],[12.5,0.393],[13,0.344],[13.5,0.3],[14,0.261],[14.5,0.226],[15,0.194],[15.5,0.167],[16,0.143],[16.5,0.122],[17,0.104],[17.5,0.088],[18,0.075],[18.5,0.063],[19,0.053],[19.5,0.045],[20,0.038]], gizli: true },
            { id: "t8", tip: "yazi", x: 11.5, y: 1.1, metin: "df = 8", gizli: true },
            { id: "m2", tip: "nokta", renk: 0, x: 2, y: 1.839, etiket: "ort. 2", gizli: true },
            { id: "m4", tip: "nokta", renk: 1, x: 4, y: 1.353, etiket: "ort. 4", gizli: true },
            { id: "m8", tip: "nokta", renk: 2, x: 8, y: 0.977, etiket: "ort. 8", gizli: true }
          ],
          durumlar: [
            { metin: "df = 2: eğri sıfırda en yüksek, sonra hızla alçalır. Değerler hiçbir zaman negatif olmaz.", goster: ["c2", "t2"] },
            { metin: "df = 4: tepe 2 civarına çıkar; eğri sağa kayar ve kuyruk uzar.", goster: ["c4", "t4"] },
            { metin: "df = 8: tepe 6 civarında, kuyruk daha da uzun; eğri artık daha simetrik görünür.", goster: ["c8", "t8"] },
            { metin: "Her eğrinin ==ortalaması df’ye eşit==: 2, 4, 8. df büyüdükçe hem ortalama hem yayılım büyür.", goster: ["m2", "m4", "m8"] }
          ] },
        { tip: "liste", maddeler: [
            { ikon: "➡️", baslik: "Sağa yatık", metin: "Uzun kuyruk sağdadır; p-değeri bu kuyruktan okunur." },
            { ikon: "➕", baslik: "Yalnızca sıfır ve pozitif değerler", metin: "χ² bir karelerin toplamıdır, negatif olamaz." },
            { ikon: "🎚️", baslik: "df ile şekil değişir", metin: "Uyum iyiliğinde df = kategori sayısı − 1; ortalama df’dir." },
            { ikon: "☝️", baslik: "df = 1 ayrı bir durum", metin: "df = 1’de eğri sıfıra çok yakın yerde çok yüksektir; 2×2 tablolarda karşına çıkar (st804)." }
          ] }
      ]
    },
    {
      baslik: "p-değeri: sağ kuyruk",
      kisa: "p-değeri = gözlenen χ² ve daha büyüğünün olasılığı; hep sağ kuyruk.",
      bloklar: [
        { tip: "grafik", baslik: "Kulüp örneği: df = 3, χ² = 9,17", xlabel: "χ² değeri", ylabel: "Yoğunluk", xmax: 16, ymax: 3,
          xticks: [{ v: 0, label: "0" }, { v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0,0],[0.5,2.197],[1,2.42],[1.5,2.308],[2,2.076],[2.5,1.807],[3,1.542],[3.5,1.297],[4,1.08],[4.5,0.892],[5,0.732],[5.5,0.598],[6,0.487],[6.5,0.394],[7,0.319],[7.5,0.257],[8,0.207],[8.5,0.166],[9,0.133],[9.5,0.106],[10,0.085],[10.5,0.068],[11,0.054],[11.5,0.043],[12,0.034],[12.5,0.027],[13,0.022],[13.5,0.017],[14,0.014],[14.5,0.011],[15,0.009],[15.5,0.007],[16,0.005]] },
            { id: "obs", tip: "cizgi", renk: 2, from: [9.17, 0], to: [9.17, 0.123], etiket: "χ² = 9,17", gizli: true },
            { id: "alan", tip: "alan", renk: 2, noktalar: [[9.17,0],[9.17,0.123],[9.42,0.11],[9.67,0.099],[9.92,0.088],[10.17,0.079],[10.42,0.07],[10.67,0.063],[10.92,0.056],[11.17,0.05],[11.42,0.045],[11.67,0.04],[11.92,0.036],[12.17,0.032],[12.42,0.028],[12.67,0.025],[12.92,0.022],[13.17,0.02],[13.42,0.018],[13.67,0.016],[13.92,0.014],[14.17,0.013],[14.42,0.011],[14.67,0.01],[14.92,0.009],[15.17,0.008],[15.42,0.007],[15.67,0.006],[15.92,0.006],[16,0.005],[16,0]], gizli: true },
            { id: "p", tip: "yazi", x: 12.6, y: 0.75, metin: "p ≈ 0,027", gizli: true },
            { id: "kr", tip: "cizgi", renk: 1, kesik: true, from: [7.81, 0], to: [7.81, 0.225], etiket: "7,81", gizli: true }
          ],
          durumlar: [
            { metin: "df = 3 (4 kategori) için χ² eğrisi." },
            { metin: "Test istatistiği χ² = 9,17 eğri üzerinde işaretlendi.", goster: ["obs"] },
            { metin: "==p-değeri== = 9,17’nin ve daha büyük değerlerin sağdaki alanı ≈ 0,027.", goster: ["alan", "p"] },
            { metin: "α = 0,05 için kritik değer 7,81 (sağındaki alan 0,05). 9,17 > 7,81 olduğundan p < α: H₀ reddedilir.", goster: ["kr"] }
          ] },
        { tip: "tablo", baslik: "df = 3 için χ² tablosu (sağ kuyruk olasılığı)", head: ["Sağ kuyruk olasılığı", "0,10", "0,05", "0,025", "0,01", "0,005"], rows: [
            ["Kritik χ² değeri", "6,25", "7,81", "9,35", "11,34", "12,84"]
          ], not: "9,17 değeri 7,81 (0,05) ile 9,35 (0,025) arasında: 0,025 < p < 0,05. Hesap makinesi tam değeri verir: χ²cdf(9.17, 1E99, 3) ≈ 0,027." },
        { tip: "tuzak", baslik: "İki taraflı değil, hep sağ kuyruk", metin: "Küçük χ² uyumun iyi olduğunu, büyük χ² kötü olduğunu söyler. Sol kuyruk kanıt sayılmaz; p-değerini yarıya bölme ya da ikiyle çarpma yok.",
          yanlis: "p-değeri = iki kuyruğun alanı ya da P(χ² ≤ gözlenen).",
          dogru: "p-değeri = P(χ² ≥ gözlenen), tek taraflı sağ kuyruk." }
      ]
    },
    {
      baslik: "Dört adımla çöz: State, Plan, Do, Conclude",
      kisa: "Hipotezler, koşullar, hesap ve bağlamlı sonuç; hesap makinesi Do adımını yapar.",
      bloklar: [
        { tip: "ornek", baslik: "Kulüp tercihleri değişti mi?", durum: "Geçen yıl tercihler %40 Spor, %30 Müzik, %20 Bilim, %10 Sanat’tı. Okulda 2000’den fazla öğrenci var. Bu yıl rastgele seçilen 200 öğrenciden 100’ü Spor, 50’si Müzik, 30’u Bilim, 20’si Sanat seçti. α = 0,05 ile dağılım değişti mi?",
          adimlar: ["State: H₀: p(Spor) = 0,40, p(Müzik) = 0,30, p(Bilim) = 0,20, p(Sanat) = 0,10. Hₐ: en az bir oran farklı. α = 0,05.", "Plan: ki-kare uyum iyiliği testi. *Random*: 200 öğrenci rastgele seçildi. %10: okul 2000’den büyük, 200 öğrenci popülasyonun %10’unu aşmıyor. *Large Counts*: E = 80, 60, 40, 20, hepsi ≥ 5 ✓.", "Do: χ² = 5,00 + 1,67 + 2,50 + 0 ≈ 9,17; df = 4 − 1 = 3; p-değeri ≈ 0,027.", "Conclude: p = 0,027 < α = 0,05 olduğundan H₀’ı reddederiz. Bu yıl kulüp tercihlerinin dağılımının geçen yıldan farklı olduğuna dair ikna edici kanıt vardır."],
          sonuc: "χ² ≈ 9,17, df = 3, p ≈ 0,027 < 0,05 ⇒ H₀ reddedilir; dağılım farklı." },
        { tip: "adimlar", baslik: "Hesap makinesiyle Do adımı (TI-84)", adimlar: [
            { baslik: "1 · Listeleri doldur", metin: "L1’e gözlenenleri (100, 50, 30, 20), L2’ye beklenenleri (80, 60, 40, 20) yaz." },
            { baslik: "2 · Testi aç", metin: "STAT ▸ TESTS ▸ D: χ²GOF-Test. Observed: L1, Expected: L2, df: 3. Calculate." },
            { baslik: "3 · Ekranı oku", metin: "χ² = 9,1667, p = 0,0272, df = 3, CNTRB = {5, 1,667, 2,5, 0}. CNTRB bileşenlerdir." }
          ] }
      ]
    },
    {
      baslik: "Sonuç yazmak: reddet ya da reddedemezsin",
      kisa: "p ≤ α ise H₀’ı reddet; değilse reddedemezsin. H₀’ı asla kabul etme.",
      bloklar: [
        { tip: "ornek", baslik: "Kantin iddiası: fark şans olabilir mi?", durum: "Önceki konudaki kantin iddiası (%40, %30, %20, %10) ve gözlenen 70, 72, 38, 20 (n = 200). Beklenenler 80, 60, 40, 20. α = 0,05.",
          adimlar: ["Bileşenler: (70 − 80)² / 80 = 1,25; (72 − 60)² / 60 = 2,40; (38 − 40)² / 40 = 0,10; (20 − 20)² / 20 = 0.", "χ² = 1,25 + 2,40 + 0,10 + 0 = 3,75; df = 3.", "Tabloda df = 3 satırı: 3,75 < 4,11 (sağ kuyruk 0,25), yani p > 0,25. Makine: p ≈ 0,290.", "p = 0,290 > 0,05 ⇒ H₀’ı reddedemeyiz."],
          sonuc: "Kantinin iddiasının yanlış olduğuna dair ikna edici kanıt yok: gözlenen fark şansla açıklanabilir." },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Tam puan getiren cümle", maddeler: ["p-değerini α ile kıyaslar", "Bağlamı ve “kanıt” kelimesini içerir", "H₀’ı reddeder ya da reddedemez"] },
          sag: { ikon: "❌", baslik: "Puan kaybettiren cümle", maddeler: ["Bağlamsız ya da kıyassız", "“H₀’ı kabul ediyoruz” der", "p-değerini H₀’ın olasılığı sanır"] },
          oyun: [
            { metin: "“p = 0,027 < 0,05 olduğundan H₀’ı reddederiz; kulüp tercihlerinin dağılımının farklı olduğuna dair ikna edici kanıt var.”", cevap: "sol", neden: "p ile α kıyaslanmış, karar verilmiş, bağlamla ve kanıt diliyle yazılmış." },
            { metin: "“p = 0,290 olduğu için H₀ doğrudur, iddiayı kabul ediyoruz.”", cevap: "sag", neden: "H₀ asla kabul edilmez; yalnızca “reddedemedik” denir." },
            { metin: "“p = 0,027 demek H₀’ın doğru olma olasılığı %2,7 demektir.”", cevap: "sag", neden: "p-değeri, H₀ doğruyken bu kadar uç sonucun olasılığıdır; H₀’ın olasılığı değil." },
            { metin: "“p < 0,05, o halde H₀ reddedilir.”", cevap: "sag", neden: "Karar doğru ama bağlam ve “kanıt” ifadesi yok; AP’de eksik sayılır." }
          ] },
        { tip: "tuzak", baslik: "Reddetmek “hepsi değişti” demek değildir", metin: "H₀’ı reddetmek, “en az bir oran farklı” demektir. Hangisinin değiştiğini tek başına söylemez; bunun için bileşenlere ve O − E farklarına bak.",
          yanlis: "H₀ reddedildi, yani dört kulübün de oranı değişti.",
          dogru: "H₀ reddedildi: oranlardan en az biri geçen yıldan farklı. Hangisi için bileşenlere bak." }
      ]
    },
    {
      baslik: "Hangi kategori sorumlu? Bileşenlere bak",
      kisa: "En büyük (O − E)² / E katkısı, farkın asıl kaynağını gösterir.",
      bloklar: [
        { tip: "sekil", baslik: "Kulüp örneğinde bileşenler (toplam χ² ≈ 9,17)", fig: { type: "bar", cats: ["Spor", "Müzik", "Bilim", "Sanat"], series: [{ name: "(O − E)² / E", values: [5, 1.67, 2.5, 0] }], ylabel: "Katkı" } },
        { tip: "liste", maddeler: [
            { ikon: "🥇", baslik: "En büyük bileşen: Spor (5,00)", metin: "Toplamın yarısından fazlası (5,00 / 9,17 ≈ %55) Spor’dan gelir; gözlenen 100, beklenen 80’den yüksek." },
            { ikon: "↔️", baslik: "Yönü O − E söyler", metin: "Spor +20 (beklenenden fazla), Müzik ve Bilim −10 (beklenenden az); Sanat tam beklendiği gibi." },
            { ikon: "⚠️", baslik: "Bileşen kanıt değildir", metin: "Önce genel testle H₀’ı reddet; bileşenler yalnızca “farkın kaynağı” için açıklamadır." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "χ² = Σ (O − E)² / E; her kategorinin katkısı (bileşen) sıfır ya da pozitiftir.",
            "df = kategori sayısı − 1. χ² dağılımı sağa yatıktır, ortalaması df’dir ve df büyüdükçe simetrikleşir.",
            "p-değeri hep sağ kuyruktur: P(χ² ≥ gözlenen). Tablodan aralık, makineden tam değer (χ²cdf, χ²GOF-Test).",
            "Dört adım: State (H₀, Hₐ, α), Plan (test adı, koşullar), Do (χ², df, p), Conclude (bağlamla karar).",
            "p ≤ α ise H₀ reddedilir: dağılımın farklı olduğuna dair ikna edici kanıt var. Aksi halde H₀ reddedilemez, asla “kabul edilir” denmez.",
            "p-değeri, H₀’ın doğru olma olasılığı değildir.",
            "Reddedersen hangi kategorinin fark yarattığına bileşenlere ve O − E işaretlerine bakarak yorum yap."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir kalem paketinde üretici %50 mavi, %30 kırmızı, %20 yeşil olduğunu söylüyor. Rastgele seçilen 100 kalemde 40 mavi, 36 kırmızı, 24 yeşil sayılıyor. Ki-kare istatistiği kaçtır?",
      opts: ["152", "4,17", "4,0", "0,6"],
      a: 2,
      why: "E = 50, 30, 20. χ² = (40 − 50)² / 50 + (36 − 30)² / 30 + (24 − 20)² / 20 = 2 + 1,2 + 0,8 = 4,0. 152 farkların karelerinin E’ye bölünmeden toplamıdır; 4,17 paydada O kullanılarak çıkar; 0,6 ise farkın karesi alınmadığında elde edilir." },
    { q: "Bir uyum iyiliği testinde 4 kategori var ve χ² = 6,5 bulundu. Aşağıdaki tabloya göre α = 0,05 düzeyinde hangi ifade doğrudur?",
      fig: { type: "table", head: ["df = 3, sağ kuyruk olasılığı", "0,10", "0,05", "0,025", "0,01"], rows: [["Kritik χ²", "6,25", "7,81", "9,35", "11,34"]], caption: "Tablo değerleri" },
      opts: ["0,05 < p < 0,10 ve H₀ reddedilemez", "p < 0,01 ve H₀ reddedilir", "0,025 < p < 0,05 ve H₀ reddedilir", "p > 0,10 ve H₀ reddedilemez"],
      a: 0,
      why: "df = 3, χ² = 6,5: 6,25 (0,10) ile 7,81 (0,05) arasında, yani 0,05 < p < 0,10. p > α = 0,05 olduğundan H₀ reddedilemez. C şıkkı 0,05’lik kritik değeri 7,81 yerine 6,5’te aşıyormuşuz gibi yorumlar." },
    { q: "χ² dağılımı için aşağıdakilerden hangisi doğrudur?",
      opts: ["Simetriktir ve ortalaması 0’dır.", "Yalnızca sol kuyruk p-değerini verir.", "df arttıkça sola doğru yatıklaşır.", "Yalnızca sıfır ve pozitif değerler alır; sağa yatıktır ve ortalaması df’ye eşittir."],
      a: 3,
      why: "χ² kareler toplamıdır, negatif olamaz; sağa yatıktır ve ortalaması df’dir. df büyüdükçe eğri sağa kayar ve simetrikleşir. p-değeri sağ kuyruktandır." },
    { q: "Bir uyum iyiliği testinde α = 0,05 ve p-değeri 0,12 bulundu. En iyi sonuç cümlesi hangisidir?",
      opts: ["p = 0,12 > 0,05 olduğundan H₀’ı reddedemeyiz; dağılımın iddia edilenden farklı olduğuna dair ikna edici kanıt yok.", "p = 0,12 olduğundan H₀ doğrudur ve kabul ediyoruz.", "p = 0,12 olduğundan H₀’ın doğru olma olasılığı %12’dir.", "p = 0,12 > 0,05 olduğundan H₀’ı reddederiz."],
      a: 0,
      why: "p > α ise H₀ reddedilemez ve bu bağlamla “ikna edici kanıt yok” diye yazılır. H₀ hiçbir zaman kabul edilmez; p-değeri H₀’ın olasılığı değildir." },
    { q: "Tablo, eşit olmayan bir dağılım iddiasına karşı yapılan uyum iyiliği testinin verilerini gösteriyor. Hangi kategori χ²’ye en çok katkı yapar ve toplam χ² yaklaşık kaçtır?",
      fig: { type: "table", head: ["Kategori", "Gözlenen O", "Beklenen E"], rows: [["A", 44, 50], ["B", 26, 30], ["C", 30, 20]], caption: "n = 100" },
      opts: ["A kategorisi; χ² ≈ 6,25", "C kategorisi; χ² ≈ 20", "C kategorisi; χ² ≈ 6,25", "B kategorisi; χ² ≈ 0,53"],
      a: 2,
      why: "Bileşenler: A: (−6)² / 50 = 0,72; B: (−4)² / 30 ≈ 0,53; C: 10² / 20 = 5,00. Toplam ≈ 6,25; en büyük katkı C’den. 20 sayısı |O − E| değerlerinin toplamıdır, ki-kare istatistiği değil." }
  ]
};
