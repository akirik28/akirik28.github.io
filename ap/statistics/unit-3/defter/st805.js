/* Kitpath not defteri · st805 · 8.7 Kategorik Veride Yöntem Seçimi
   Kaynak: AP Statistics CED Unit 8 (Topic 8.7; Unit 6'daki z yöntemlerini de kapsar). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st805",
  amac: "Bu konu kategorik veride doğru çıkarım yöntemini seçmeyi anlatıyor: tek oran z, iki oran z, ki-kare uyum iyiliği, homojenlik ve bağımsızlık. Sorudaki veri durumuna bakarak yöntemi, hipotezleri ve koşulları seçmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Önce soruya bak: üç soru",
      kisa: "Kaç örneklem, kaç kategori, ne istendiği: yöntemi bu üç soru seçer.",
      bloklar: [
        { tip: "adimlar", baslik: "Yöntem seçerken sor", adimlar: [
            { baslik: "1 · Veri nasıl toplandı?", metin: "Tek örneklem mi, birkaç ayrı örneklem (ya da rastgele atanmış grup) mi?" },
            { baslik: "2 · Kaç değişken, kaç kategori?", metin: "Tek değişkenin iki sonucu mu var (başarı / başarısızlık), üç ya da daha çok kategorisi mi, yoksa iki kategorik değişken mi?" },
            { baslik: "3 · Ne isteniyor?", metin: "Bir parametreyi tahmin mi (güven aralığı) yoksa bir iddiayı sınamak mı (test)? Ki-kare yalnızca test yapar." }
          ] },
        { tip: "harita", merkez: "Kategorik veri: hangi çıkarım?", dallar: [
            { baslik: "1 grup, 2 sonuç", alt: "Tek oran z (aralık ya da test)" },
            { baslik: "2 grup, 2 sonuç", alt: "İki oran z (aralık ya da test)" },
            { baslik: "1 örneklem, 3+ kategori, iddia", alt: "χ² uyum iyiliği" },
            { baslik: "Birkaç grup, 1 değişken", alt: "χ² homojenlik" },
            { baslik: "1 örneklem, 2 değişken", alt: "χ² bağımsızlık" }
          ] }
      ]
    },
    {
      baslik: "Beş yöntem tek tabloda",
      kisa: "Her yöntemin parametresi, H₀’ı ve büyük sayı koşulu farklıdır.",
      bloklar: [
        { tip: "tablo", baslik: "Kategorik veri için çıkarım yöntemleri", head: ["Yöntem", "Veri durumu", "H₀", "Büyük sayı koşulu"], rows: [
            ["Tek oran z", "1 örneklem, 2 sonuç", "p = p₀", "np ≥ 10 ve n(1 − p) ≥ 10"],
            ["İki oran z", "2 grup, 2 sonuç", "p₁ = p₂", "Her grupta başarı ve başarısızlık ≥ 10"],
            ["χ² uyum iyiliği", "1 örneklem, 1 değişken, iddia edilen dağılım", "Dağılım iddia edildiği gibi", "Bütün E ≥ 5; df = k − 1"],
            ["χ² homojenlik", "Birkaç ayrı örneklem, 1 değişken", "Dağılım gruplarda aynı", "Bütün E ≥ 5; df = (r − 1)(c − 1)"],
            ["χ² bağımsızlık", "1 örneklem, 2 değişken", "Değişkenler bağımsız", "Bütün E ≥ 5; df = (r − 1)(c − 1)"]
          ], vurgu: 2, not: "Hepsinde ortak koşullar: *Random* ve %10 (bağımsızlık). Hepsinde 4 adım: State, Plan, Do, Conclude." },
        { tip: "kavramlar", kartlar: [
            { ikon: "↔️", terim: "Confidence interval", tr: "güven aralığı", tanim: "Bir parametre için makul değerleri verir. Yalnızca z yöntemleri (tek oran, iki oran farkı) aralık üretir.", ornek: "İki sınıfın ödev yapma oranları farkı için %95 aralık." },
            { ikon: "⚖️", terim: "Significance test", tr: "anlamlılık testi", tanim: "Bir iddiaya karşı kanıt arar ve p-değeri verir. Hem z hem χ² yöntemleri bunu yapar.", ornek: "Dağılım gruplarda aynı mı? p-değerine bak." }
          ] }
      ]
    },
    {
      baslik: "Sınıflandırma oyunu: z mi, χ² mi?",
      kisa: "Aralık ya da tek yönlü Hₐ istiyorsan z; dağılımları karşılaştırıyorsan χ².",
      bloklar: [
        { tip: "ikili", sol: { ikon: "z", baslik: "*z-procedure*", maddeler: ["Oran ya da iki oran farkı", "İki sonuç (başarı / başarısızlık)", "Aralık ve tek yönlü Hₐ mümkün"] },
          sag: { ikon: "χ²", baslik: "*Chi-square test*", maddeler: ["Üç ya da daha çok kategori / grup", "Dağılım ya da ilişki sorusu", "Yalnızca test, Hₐ “farklı” der"] },
          oyun: [
            { metin: "İki mahallede bisiklet kullananların oranları farkı için %95 güven aralığı.", cevap: "sol", neden: "Aralık isteniyor ve iki oran var: *two-proportion z interval*." },
            { metin: "Üç okulda favori platform dağılımı aynı mı?", cevap: "sag", neden: "Üç grup, üç kategori, dağılım karşılaştırması: *homogeneity*." },
            { metin: "Kantindeki öğrencilerin %60’ının yeni menüyü beğendiği iddiası (beğendi / beğenmedi).", cevap: "sol", neden: "Tek oran, iki sonuç: *one-proportion z-test*." },
            { metin: "Cinsiyet ile favori spor dalı arasında ilişki var mı? (2×4 tablo)", cevap: "sag", neden: "Tek örneklem, iki kategorik değişken: *independence*." },
            { metin: "Yeni ilaç grubunun iyileşme oranı plasebodan yüksek mi? (iki grup, iyileşti / iyileşmedi)", cevap: "sol", neden: "İki oran ve tek yönlü Hₐ: *two-proportion z-test*." }
          ] },
        { tip: "tuzak", baslik: "Tabloyu görünce otomatik ki-kare deme", metin: "Her tablo ki-kare gerektirmez. 2×2 tablo iki oranlı z ile de çözülür; aralık istenirse yalnızca z uygundur. Yüzde görünce de otomatik z deme: üç ya da daha çok kategori ki-kare ister.",
          yanlis: "Bir tablo var, kesin ki-kare.",
          dogru: "Önce veri durumuna ve ne istendiğine bak; sonra yöntemi seç." }
      ]
    },
    {
      baslik: "Üç senaryo, üç seçim",
      kisa: "Parametre, H₀, yöntem ve koşul: bu dörtlüyü senaryodan çıkar.",
      bloklar: [
        { tip: "ornek", baslik: "Senaryo 1: yeni menü", durum: "Kantin: “Öğrencilerin %60’ı yeni menüyü beğeniyor.” Rastgele seçilen 150 öğrencinin 96’sı beğendi. α = 0,05.",
          adimlar: ["Veri: tek örneklem, iki sonuç ⇒ tek oran z-testi. Parametre: p = menüyü beğenen tüm öğrencilerin oranı. H₀: p = 0,60; Hₐ: p ≠ 0,60.", "Koşullar: *Random* ✓. %10 ✓ (okul 1500’den büyük). np₀ = 90 ≥ 10 ve n(1 − p₀) = 60 ≥ 10 ✓.", "p̂ = 96/150 = 0,64; SE = √(0,6 × 0,4 ÷ 150) = 0,04; z = (0,64 − 0,60) ÷ 0,04 = 1,00; iki yönlü p ≈ 0,317."],
          sonuc: "p = 0,317 > 0,05 ⇒ H₀ reddedilemez: oranın 0,60’tan farklı olduğuna dair ikna edici kanıt yok." },
        { tip: "ornek", baslik: "Senaryo 2: ödev yapma", durum: "9. sınıftan rastgele seçilen 80 öğrencinin 52’si, 10. sınıftan rastgele seçilen 100 öğrencinin 55’i ödevini düzenli yapıyor. Oranlar farkı için %95 aralık isteniyor.",
          adimlar: ["Veri: iki ayrı örneklem, iki sonuç, aralık isteniyor ⇒ iki oran z aralığı. Parametre: p₁ − p₂ (9. sınıf eksi 10. sınıf oranı).", "Koşullar: *Random* ✓. %10 ✓. Başarı / başarısızlık: 52, 28, 55, 45 hepsi ≥ 10 ✓.", "p̂₁ − p̂₂ = 0,65 − 0,55 = 0,10; SE = √(0,65 × 0,35 ÷ 80 + 0,55 × 0,45 ÷ 100) ≈ 0,0729; aralık = 0,10 ± 1,96 × 0,0729 ≈ (−0,043; 0,243)."],
          sonuc: "Aralık 0’ı içeriyor: iki sınıfın oranları arasında fark olduğuna dair ikna edici kanıt yok. (ki-kare aralık veremezdi)" },
        { tip: "ornek", baslik: "Senaryo 3: ders çalışma yeri", durum: "9., 10. ve 11. sınıftan ayrı ayrı rastgele seçilen öğrencilere en çok ders çalıştıkları yer soruluyor (ev, kütüphane, kafe). Dağılım üç sınıfta aynı mı?",
          adimlar: ["Veri: üç ayrı örneklem, tek değişken (3 kategori) ⇒ χ² homojenlik testi.", "H₀: Ders çalışma yeri dağılımı üç sınıfta aynıdır. Hₐ: Dağılım en az bir sınıfta farklıdır.", "Tablo 3×3 ⇒ df = (3 − 1)(3 − 1) = 4. Koşul: bütün beklenen sayılar ≥ 5 olmalı; z-yöntemleri burada uygun değil."],
          sonuc: "Seçim: χ² homojenlik, df = 4. Sonra E’leri, χ²’yi ve p-değerini hesaplayıp bağlamla sonuçlandırırsın (st804)." }
      ]
    },
    {
      baslik: "Yanlış df, yanlış karar",
      kisa: "Aynı χ² değeri, farklı df ile farklı p-değeri verir; yöntemi doğru seç.",
      bloklar: [
        { tip: "grafik", baslik: "Aynı χ² = 7, iki farklı df", xlabel: "χ² değeri", ylabel: "Yoğunluk", xmax: 14, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }, { v: 10, label: "10" }, { v: 12, label: "12" }, { v: 14, label: "14" }],
          ogeler: [
            { id: "c2", tip: "egri", renk: 0, noktalar: [[0,10],[0.5,7.788],[1,6.065],[1.5,4.724],[2,3.679],[2.5,2.865],[3,2.231],[3.5,1.738],[4,1.353],[4.5,1.054],[5,0.821],[5.5,0.639],[6,0.498],[6.5,0.388],[7,0.302],[7.5,0.235],[8,0.183],[8.5,0.143],[9,0.111],[9.5,0.087],[10,0.067],[10.5,0.052],[11,0.041],[11.5,0.032],[12,0.025],[12.5,0.019],[13,0.015],[13.5,0.012],[14,0.009]] },
            { id: "obs", tip: "cizgi", renk: 2, from: [7, 0], to: [7, 4.5], etiket: "χ² = 7", gizli: true },
            { id: "a2", tip: "alan", renk: 0, noktalar: [[7,0],[7,0.302],[7.25,0.266],[7.5,0.235],[7.75,0.208],[8,0.183],[8.25,0.162],[8.5,0.143],[8.75,0.126],[9,0.111],[9.25,0.098],[9.5,0.087],[9.75,0.076],[10,0.067],[10.25,0.059],[10.5,0.052],[10.75,0.046],[11,0.041],[11.25,0.036],[11.5,0.032],[11.75,0.028],[12,0.025],[12.25,0.022],[12.5,0.019],[12.75,0.017],[13,0.015],[13.25,0.013],[13.5,0.012],[13.75,0.01],[14,0.009],[14,0]], gizli: true },
            { id: "p2", tip: "yazi", x: 11, y: 3, metin: "df = 2: p ≈ 0,030", gizli: true },
            { id: "c4", tip: "egri", renk: 1, noktalar: [[0,0],[0.5,1.947],[1,3.033],[1.5,3.543],[2,3.679],[2.5,3.581],[3,3.347],[3.5,3.041],[4,2.707],[4.5,2.371],[5,2.052],[5.5,1.758],[6,1.494],[6.5,1.26],[7,1.057],[7.5,0.882],[8,0.733],[8.5,0.606],[9,0.5],[9.5,0.411],[10,0.337],[10.5,0.275],[11,0.225],[11.5,0.183],[12,0.149],[12.5,0.121],[13,0.098],[13.5,0.079],[14,0.064]], gizli: true },
            { id: "a4", tip: "alan", renk: 1, noktalar: [[7,0],[7,1.057],[7.25,0.966],[7.5,0.882],[7.75,0.804],[8,0.733],[8.25,0.667],[8.5,0.606],[8.75,0.551],[9,0.5],[9.25,0.453],[9.5,0.411],[9.75,0.372],[10,0.337],[10.25,0.305],[10.5,0.275],[10.75,0.249],[11,0.225],[11.25,0.203],[11.5,0.183],[11.75,0.165],[12,0.149],[12.25,0.134],[12.5,0.121],[12.75,0.109],[13,0.098],[13.25,0.088],[13.5,0.079],[13.75,0.071],[14,0.064],[14,0]], gizli: true },
            { id: "p4", tip: "yazi", x: 11, y: 2.2, metin: "df = 4: p ≈ 0,136", gizli: true }
          ],
          durumlar: [
            { metin: "df = 2 (örneğin 3 kategorili uyum iyiliği) ve χ² = 7: sağ kuyruk alanı çok küçük." },
            { metin: "Alan p ≈ 0,030 < 0,05 ⇒ H₀ reddedilir.", goster: ["obs", "a2", "p2"] },
            { metin: "Aynı χ² = 7 ile df = 4 (örneğin 3×3 tablo): eğri sağa kaydı; sağ kuyruk alanı ≈ 0,136 > 0,05 ⇒ H₀ reddedilemez.", goster: ["c4", "a4", "p4"] }
          ] },
        { tip: "not", metin: "df’yi tablo boyutundan çıkar: uyum iyiliğinde df = k − 1, homojenlik ve bağımsızlıkta df = (r − 1)(c − 1). Yanlış df ile χ² doğru hesaplansa bile p-değeri ve karar yanlış çıkar." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Önce üç soru: kaç örneklem / grup, kaç kategorik değişken ve kaç kategori, tahmin mi test mi?",
            "1 grup, 2 sonuç: tek oran z. 2 grup, 2 sonuç: iki oran z. Bunlar güven aralığı da verir.",
            "1 örneklem, 1 değişken, 3+ kategori, iddia edilen dağılım: χ² uyum iyiliği (df = k − 1).",
            "Birkaç ayrı örneklem ya da rastgele atanmış grup, tek değişken: χ² homojenlik. Tek örneklem, iki değişken: χ² bağımsızlık (df = (r − 1)(c − 1)).",
            "χ² testleri yalnızca test yapar; Hₐ yön içermez (“en az biri farklı / ilişkili”).",
            "Koşullar: *Random*, %10; z için np ve n(1 − p) en az 10, χ² için bütün E en az 5.",
            "Her zaman 4 adım: State, Plan, Do, Conclude; sonucu bağlamla yaz.",
            "Tablo görünce otomatik ki-kare deme: 2×2 tablo z ile de çözülür, aralık için yalnızca z."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir fabrika, üretilen parçaların %5’inden fazlasının kusurlu olduğunu düşünüyor. Rastgele seçilen 200 parçanın 16’sı kusurlu çıktı. Hangi çıkarım yöntemi uygundur?",
      opts: ["Tek oran için z-testi", "Uyum iyiliği için ki-kare testi", "İki oran için z-testi", "Bağımsızlık için ki-kare testi"],
      a: 0,
      why: "Tek örneklem, iki sonuç (kusurlu / değil) ve tek yönlü bir iddia: *one-proportion z-test* (H₀: p = 0,05; Hₐ: p > 0,05). Ki-kare testlerinde Hₐ yön içermez, bu yüzden tek yönlü iddiaya uygun değildir." },
    { q: "Bir lise, rastgele seçtiği 300 öğrencinin sınıf düzeyini ve katıldığı kulüp türünü (spor, sanat, bilim) kaydediyor. Aşağıdaki tabloda gözlenen sayılar var. Hangi yöntem ve hangi df uygundur?",
      fig: { type: "table", head: ["", "Spor", "Sanat", "Bilim"], rows: [["9. sınıf", 40, 30, 30], ["10. sınıf", 35, 35, 30], ["11. sınıf", 30, 40, 30]], caption: "Gözlenen sayılar (n = 300)" },
      opts: ["Homojenlik testi; df = 8", "Bağımsızlık testi; df = 4", "Uyum iyiliği testi; df = 8", "İki oranlı z-testi; df = 2"],
      a: 1,
      why: "Tek rastgele örneklem ve iki kategorik değişken (sınıf, kulüp): bağımsızlık testi. Tablo 3×3 olduğu için df = (3 − 1)(3 − 1) = 4. Homojenlik ayrı örneklemler ister; df = 8 hücre sayısı − 1 hatasıdır." },
    { q: "Bir uygulama şirketi, kullanıcıları rastgele iki gruba ayırıyor: A tasarımı ve B tasarımı. Her grupta “30 gün sonra uygulamayı hâlâ kullanıyor / bırakmış” oranları ölçülüyor. Şirket, iki tasarımın kalıcılık oranları farkını tahmin etmek istiyor. Hangi yöntem uygundur?",
      opts: ["İki gruba uygulanan ki-kare homojenlik testi", "Tek oran için z aralığı", "Uyum iyiliği için ki-kare testi", "İki oran farkı için z aralığı"],
      a: 3,
      why: "İki grup, iki sonuç ve “tahmin etmek” (güven aralığı) isteniyor: *two-proportion z interval*. Ki-kare homojenlik testi aralık veremez; sadece dağılımın aynı olup olmadığını sınar." },
    { q: "Aşağıdakilerden hangisi ki-kare testini z-testlerinden ayıran özelliktir?",
      opts: ["Her zaman tek yönlü Hₐ ile çalışır.", "Güven aralığı üretir.", "Yalnızca iki kategorili değişkenlerle kullanılır.", "Üç ya da daha çok kategoriyi ya da grubu aynı anda karşılaştırabilir; ama aralık vermez."],
      a: 3,
      why: "Ki-kare testleri çok kategorili dağılımları ve iki yönlü tablolardaki ilişkiyi sınar, Hₐ yön içermez ve aralık üretmez. Güven aralığı z yöntemlerinin (tek oran, iki oran farkı) özelliğidir." },
    { q: "Bir öğrenci, p₀ = 0,10 iddiasını sınamak için n = 20 öğrencilik rastgele bir örnekle tek oran z-testi yapmak istiyor. Hangi koşul sağlanmıyor?",
      opts: ["*Random*: 20 öğrenci rastgele seçilemez.", "Büyük sayı koşulu: np₀ = 2 < 10.", "%10 koşulu: 20 öğrenci her zaman popülasyonun %10’undan büyüktür.", "Normal dağılım koşulu: gözlenen sayılar normal olmalıdır."],
      a: 1,
      why: "z-yöntemleri için np₀ ve n(1 − p₀) en az 10 olmalı. Burada np₀ = 20 × 0,10 = 2 < 10, yani örnek bu iddia için yeterince büyük değil. A ve C’de koşulun bozulduğunu gösteren bir bilgi yok." }
  ]
};
