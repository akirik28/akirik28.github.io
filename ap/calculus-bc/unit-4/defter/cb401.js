/* Kitora not defteri · cb401 · 4.1 Türevin Bağlamdaki Anlamı
   Videosuz ünite: CED 4.1 (Interpreting the Meaning of the Derivative in Context). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb401",
  amac: "Bu konu türevin bir hikâyedeki anlamını anlatıyor: f′(a) bir niceliğin o anda ne kadar hızlı değiştiğini söyler. Birimi bulmayı, işaretini okumayı ve bunu bir cümleyle yorumlamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Türev, anlık değişim hızıdır",
      kisa: "f′(a), f'nin tam o anda ne kadar hızlı değiştiğini söyler.",
      bloklar: [
        { tip: "hikaye", ikon: "🔋", baslik: "Şarj yüzdesi",
          metin: "Saat 15.00'te telefonun %40 dolu. Şarj aletindeyken dakikada 2 puan artıyor. İki ayrı bilgi var: **şarj ne kadar** (%40) ve **şarj ne hızla artıyor** (dakikada 2 puan). Türev ikincisini verir." },
        { tip: "kavramlar", kartlar: [
            { ikon: "⚡", terim: "Instantaneous rate of change", tr: "anlık değişim hızı", tanim: "Bir niceliğin tam belirli bir anda ne kadar hızlı değiştiği. f′(a) bu hızdır.", ornek: "P′(15) = 2: saat 15.00'te şarj dakikada 2 puan artıyor." },
            { ikon: "↔️", terim: "Average rate of change", tr: "ortalama değişim hızı", tanim: "Bir aralıktaki toplam değişimin aralık uzunluğuna bölümü: (f(b) − f(a)) / (b − a).", ornek: "15.00'te %40, 15.10'da %60 ise ortalama hız 20/10 = 2 puan/dk." },
            { ikon: "📏", terim: "Difference quotient", tr: "fark oranı", tanim: "Ortalama hızı veren (f(a + h) − f(a)) / h oranı. h küçülürse f′(a)'ya yaklaşır.", ornek: "h = 1 dakika alınca fark oranı anlık hıza çok yakın çıkar." }
          ] }
      ]
    },
    {
      baslik: "Türevin birimi",
      kisa: "Birim: çıktının birimi bölü girdinin birimi.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "f′ birimi", alt: "türevin birimi" }, "=",
            { t: "f'nin birimi", alt: "çıktı (y)" }, "÷",
            { t: "x'in birimi", alt: "girdi" }
          ], aciklama: "Birim, ==\"her bir girdi birimi için kaç çıktı birimi\"== demektir. Birimi yazmayı unutmak yorum sorularında puan kaybettirir." },
        { tip: "tablo", baslik: "Bağlama göre türevin birimi", head: ["Fonksiyon", "Girdi", "Çıktı", "Türevin birimi"],
          rows: [
            ["P(t): şarj yüzdesi", "t: dakika", "yüzde puanı", "puan / dakika"],
            ["T(t): çay sıcaklığı", "t: dakika", "°C", "°C / dakika"],
            ["C(n): üretim maliyeti", "n: adet", "TL", "TL / adet"],
            ["H(t): fidan boyu", "t: gün", "cm", "cm / gün"]
          ], vurgu: 1, not: "Türevin birimi her zaman bir \"bölü\" içerir; tek başına cm, TL ya da °C yazmak yanlıştır." }
      ]
    },
    {
      baslik: "f(a) ile f′(a) aynı şey değil",
      kisa: "f(a) niceliğin kendisi, f′(a) onun değişim hızıdır.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📍", baslik: "*f(a)*: değerin kendisi", maddeler: ["O andaki miktar", "Birimi: çıktının birimi (örn. yüzde)"] },
          sag: { ikon: "🏃", baslik: "*f′(a)*: değişim hızı", maddeler: ["O andaki artış ya da azalış hızı", "Birimi: çıktı / girdi (örn. puan/dk)"] },
          oyun: [
            { metin: "Saat 15.00'te telefonun şarjı %40.", cevap: "sol", neden: "Bir miktar bildiriyor: P(15) = 40." },
            { metin: "Saat 15.00'te şarj dakikada 2 puan artıyor.", cevap: "sag", neden: "Hızdan söz ediyor: P′(15) = 2." },
            { metin: "Kuyrukta 25 kişi var.", cevap: "sol", neden: "Bir sayı veriyor, değişimden söz etmiyor." },
            { metin: "Kuyruk dakikada 4 kişi uzuyor.", cevap: "sag", neden: "Değişim hızı: dakikada +4 kişi." },
            { metin: "Fidan şu an 40 cm.", cevap: "sol", neden: "Boyun kendisi: H(t) = 40." }
          ] },
        { tip: "tuzak", metin: "Türevin değeri ile fonksiyonun değerini karıştırma; ayrıca f′(a) negatifse niceliğin kendisi negatif olmak zorunda değildir. Negatif türev yalnızca \"azalıyor\" demektir.", yanlis: "H′(10) = −3 ise fidanın boyu negatiftir.", dogru: "H′(10) = −3: 10. günde boy günde 3 cm azalıyor. Boyun kendisi H(10) ayrı bir değerdir." }
      ]
    },
    {
      baslik: "İşaret yön, büyüklük hız söyler",
      kisa: "Pozitif türev artış, negatif türev azalış; büyüklük hızdır.",
      bloklar: [
        { tip: "grafik", baslik: "Kantin kuyruğu Q(t)", xlabel: "t (dk)", ylabel: "Q (kişi)", xmax: 30, ymax: 50,
          xticks: [{ v: 5, label: "5" }, { v: 15, label: "15" }, { v: 25, label: "25" }], yticks: [{ v: 25, label: "25" }, { v: 45, label: "45" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [2.5, 13.75], [5, 25], [7.5, 33.75], [10, 40], [12.5, 43.75], [15, 45], [17.5, 43.75], [20, 40], [22.5, 33.75], [25, 25], [27.5, 13.75], [30, 0]] },
            { id: "p1", tip: "nokta", renk: 2, x: 5, y: 25, kilavuz: true, gizli: true },
            { id: "t1", tip: "cizgi", renk: 2, from: [2, 13], to: [8, 37], etiket: "+4", gizli: true },
            { id: "p2", tip: "nokta", renk: 3, x: 15, y: 45, kilavuz: true, gizli: true },
            { id: "t2", tip: "cizgi", renk: 3, from: [11, 45], to: [19, 45], etiket: "0", gizli: true },
            { id: "p3", tip: "nokta", renk: 1, x: 25, y: 25, kilavuz: true, gizli: true },
            { id: "t3", tip: "cizgi", renk: 1, from: [22, 37], to: [28, 13], etiket: "−4", gizli: true }
          ],
          durumlar: [
            { metin: "Öğle arası kuyruk önce uzuyor, sonra kısalıyor. Eğri Q(t) = 45 − (t − 15)²/5 modeli." },
            { metin: "t = 5: eğim +4, yani Q′(5) = 4 kişi/dk. Kuyruk dakikada 4 kişi uzuyor.", goster: ["p1", "t1"] },
            { metin: "t = 15: eğim 0. Kuyruk o anda ne uzuyor ne kısalıyor; uzunluk en büyük.", gizle: ["p1", "t1"], goster: ["p2", "t2"] },
            { metin: "t = 25: eğim −4, yani Q′(25) = −4 kişi/dk. Kuyruk dakikada 4 kişi kısalıyor.", gizle: ["p2", "t2"], goster: ["p3", "t3"] }
          ] },
        { tip: "tablo", baslik: "Türevin işaretini oku", head: ["Q′(t)", "Anlamı"],
          rows: [
            ["pozitif", "Niceliğin kendisi artıyor"],
            ["negatif", "Niceliğin kendisi azalıyor"],
            ["sıfır", "O anda değişmiyor (zirve, dip ya da düz an olabilir)"],
            ["büyük |Q′|", "Çok hızlı değişiyor; küçük |Q′| yavaş değişiyor"]
          ], vurgu: 0, not: "Dik teğet = hızlı değişim; yatay teğet = o anda değişim yok." }
      ]
    },
    {
      baslik: "Tablodan türevi tahmin etmek",
      kisa: "Noktayı içine alan en dar aralığın ortalama hızını al.",
      bloklar: [
        { tip: "tablo", baslik: "Şarj yüzdesi B(t)", head: ["t (dk)", "0", "10", "20", "30"],
          rows: [["B(t) (%)", "20", "38", "52", "62"]], vurgu: 0, not: "Elinde yalnızca tablo varsa türev, komşu değerlerin ortalama hızıyla tahmin edilir." },
        { tip: "ornek", baslik: "B′(10)'u tahmin et", durum: "Tablodaki değerleri kullan ve birimi yaz.",
          adimlar: [
            "10'u içine alan en dar aralık [0, 20].",
            "Ortalama hız: (B(20) − B(0)) / (20 − 0) = (52 − 20) / 20.",
            "= 32 / 20 = 1,6.",
            "Yorum: 10. dakikada şarj yaklaşık dakikada 1,6 puan artıyor."
          ], sonuc: "B′(10) ≈ 1,6 puan/dk" }
      ]
    },
    {
      baslik: "Türevden değer tahmin etmek",
      kisa: "Küçük bir adımda değişim yaklaşık f′(a) · h kadardır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "f(a + h)", alt: "yeni değer" }, "≈",
            { t: "f(a)", alt: "şimdiki değer" }, "+",
            { t: "f′(a) · h", alt: "hız × süre" }
          ], aciklama: "Hız × süre = değişim. ==h küçükken== bu tahmin iyidir; h büyüdükçe hata artar (4.6'da doğrusallaştırma adıyla tekrar göreceksin)." },
        { tip: "ornek", baslik: "Kantin kuyruğu", durum: "Q(5) = 25 kişi ve Q′(5) = 4 kişi/dk. 6. dakikada kuyruk kaç kişi olur?",
          adimlar: [
            "Adım uzunluğu h = 1 dakika.",
            "Değişim yaklaşık Q′(5) · h = 4 · 1 = 4 kişi.",
            "Q(6) ≈ 25 + 4 = 29."
          ], sonuc: "Q(6) ≈ 29 kişi (modelin gerçek değeri 28,8)" }
      ]
    },
    {
      baslik: "Yorum cümlesi nasıl kurulur?",
      kisa: "An, nicelik, yön, hız ve birim: beşi de cümlede olsun.",
      bloklar: [
        { tip: "adimlar", baslik: "Beş parçalı yorum", adimlar: [
            { baslik: "Hangi an?", metin: "\"t = 10. dakikada\" gibi girdiyi ve birimini yaz." },
            { baslik: "Hangi nicelik?", metin: "Fonksiyonun neyi ölçtüğünü söyle: şarj yüzdesi, fidan boyu, kuyruk uzunluğu." },
            { baslik: "Hangi yönde?", metin: "Türev pozitifse artıyor, negatifse azalıyor." },
            { baslik: "Ne hızla?", metin: "Sayıyı yaz; \"yaklaşık\" gerekiyorsa ekle." },
            { baslik: "Hangi birimle?", metin: "Çıktı bölü girdi birimini ekle." }
          ] },
        { tip: "ornek", baslik: "S′(3) = −12", durum: "S(t): t. günde mağazadaki tişört stoğu (adet). Yorumla.",
          adimlar: [
            "An: 3. gün. Nicelik: stok (adet).",
            "Türev negatif: stok azalıyor.",
            "Hız 12, birim adet/gün."
          ], sonuc: "3. günde stok günde yaklaşık 12 adet azalıyor." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "f′(a), f'nin a anındaki anlık değişim hızıdır.",
            "Birim: çıktının birimi bölü girdinin birimi (puan/dk, TL/adet).",
            "f(a) niceliğin kendisi, f′(a) onun değişim hızıdır; ikisini karıştırma.",
            "Pozitif türev artış, negatif türev azalış, sıfır o anda değişim yok demektir.",
            "Tabloda f′(a) tahmini: a'yı içine alan en dar aralığın ortalama hızı.",
            "Küçük h için f(a + h) ≈ f(a) + f′(a) · h.",
            "Yorum cümlesi: an, nicelik, yön, hız ve birim."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir fidanın boyu H(t) cm, t gün cinsinden ölçülüyor. H′(10) = 0,8 olduğuna göre en iyi yorum hangisidir?",
      opts: ["10. günde fidan 0,8 cm boyundadır.", "10. günde fidanın boyu günde yaklaşık 0,8 cm artıyor.", "İlk 10 günde fidan toplam 0,8 cm uzamıştır.", "0,8. günde fidanın boyu 10 cm'dir."],
      a: 1,
      why: "H′ boyun değişim hızıdır ve birimi cm/gün'dür; pozitif olduğu için boy artıyor. A şıkkı en çekici yanlış: boyun kendisini (H) türev değeriyle karıştırıyor." },
    { q: "Bir telefonun şarj yüzdesi B(t), t dakika cinsinden tabloda veriliyor. B′(15)'i, 15'i içine alan en dar aralığı kullanarak tahmin ediniz.",
      fig: { type: "table", head: ["t (dk)", "0", "10", "20", "30"], rows: [["B(t) (%)", "20", "38", "52", "62"]], caption: "Şarj yüzdesi" },
      opts: ["0,7 puan/dk", "1,9 puan/dk", "1,4 puan/dk", "14 puan/dk"],
      a: 2,
      why: "15, [10, 20] aralığında: (52 − 38) / (20 − 10) = 1,4 puan/dk. A şıkkı en çekici yanlış: farkı 20'ye bölmek aralık uzunluğunu yanlış alır (aralık 10 dakikadır); D şıkkı ise hiç bölmez." },
    { q: "Bir kanalın abone sayısı S(t) (bin kişi), t ay cinsinden verilmiş. Her t için S′(t) > 0 ve S′ değeri 100'den 20'ye düşüyor. Aşağıdakilerden hangisi doğrudur?",
      opts: ["Abone sayısı artmaya devam ediyor ama gittikçe daha yavaş.", "Abone sayısı azalıyor.", "Abone sayısı artıyor ve artış hızı da gittikçe büyüyor.", "Abone sayısı sabit kalıyor."],
      a: 0,
      why: "S′ > 0 olduğu sürece S artar; S′'nin küçülmesi artışın yavaşladığını gösterir. B şıkkı en çekici yanlış: S′'nin küçülmesi S'nin azaldığı anlamına gelmez, S′ hâlâ pozitif." },
    { q: "Bir uygulamanın canlı yayın izleyici sayısı W(t) bin kişi, t saat cinsinden. W(3) = 120 ve W′(3) = −4 ise hangisi doğrudur?",
      opts: ["3. saatte yayını 4 bin kişi izliyor.", "3. saatte izleyici sayısı saatte 4 bin kişi artıyor, 120 bin kişi izliyor.", "İlk 3 saatte toplam 4 bin kişi yayından ayrıldı.", "3. saatte 120 bin kişi izliyor ve sayı saatte yaklaşık 4 bin azalıyor."],
      a: 3,
      why: "W(3) izleyici sayısının kendisi (120 bin), W′(3) = −4 ise saatte 4 bin kişilik azalış hızıdır. B şıkkı en çekici yanlış: yönü ters alıyor; negatif türev azalış demektir." },
    { q: "Kantin kuyruğunda Q(5) = 25 kişi ve Q′(5) = 4 kişi/dk. Q′'nün bu aralıkta yaklaşık sabit kaldığını varsayarak Q(5,5)'i tahmin ediniz.",
      opts: ["25,5 kişi", "27 kişi", "29 kişi", "24 kişi"],
      a: 1,
      why: "Yarım dakikada değişim ≈ 4 · 0,5 = 2 kişi; Q(5,5) ≈ 25 + 2 = 27. A şıkkı en çekici yanlış: yalnızca süreyi (0,5) eklemek birim ve hız mantığını atlıyor." }
  ]
};
