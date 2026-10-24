/* Kitpath not defteri · st409 · 4.10–4.11 Binom Dağılımı ve Parametreleri
   Kaynak: AP Statistics CED Topics 4.10 ve 4.11 (video kiti yok). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st409",
  amac: "Bu konu \"n kez dene, kaç tanesi başarılı?\" sorusunu anlatıyor: *binomial distribution*. BINS koşullarını, binom olasılığı formülünü ve hesap makinesi komutlarını, ortalama ve standart sapma formüllerini (np ve √(np(1−p))) ve 10% koşulunu öğreneceksin.",
  bolumler: [
    {
      baslik: "Binom durumunu tanı: BINS",
      kisa: "Binary, Independent, Number sabit, Same probability: dört koşul da gerekir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎯", terim: "Binomial random variable", tr: "binom rastgele değişkeni", tanim: "Sabit sayıda bağımsız denemede ==başarı sayısı==. Yazılışı: X ~ Binomial(n, p).", ornek: "5 serbest atıştan kaçının isabet olduğu." },
            { ikon: "🔢", terim: "n ve p", tr: "parametreler", tanim: "**n** = deneme sayısı, **p** = her denemede başarı olasılığı. Başarı, saymak istediğin sonuçtur; iyi olması şart değil.", ornek: "n = 5 atış, p = 0,6 isabet." }
          ] },
        { tip: "adimlar", baslik: "BINS kontrol listesi", adimlar: [
            { baslik: "B · *Binary*", metin: "Her denemenin iki sonucu var: başarı ya da başarısızlık." },
            { baslik: "I · *Independent*", metin: "Bir denemenin sonucu diğerlerini etkilemez." },
            { baslik: "N · *Number* sabit", metin: "Deneme sayısı n önceden belli." },
            { baslik: "S · *Same probability*", metin: "Her denemede başarı olasılığı p aynı." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Binom", maddeler: ["BINS'in dördü de tamam", "Sayılan: başarı sayısı", "n sabit, p sabit"] },
          sag: { ikon: "❌", baslik: "Binom değil", maddeler: ["En az bir koşul bozuk", "Çoğu zaman n sabit değil ya da p değişiyor", "Başka dağılıma bak"] },
          oyun: [
            { metin: "Deniz 5 serbest atış yapıyor, her atış %60 isabet; isabet sayısı.", cevap: "sol", neden: "Binary, bağımsız, n = 5, p = 0,6 sabit: binom." },
            { metin: "6 bilyelik torbadan (3 kırmızı) geri koymadan 4 bilye çek; kırmızı sayısı.", cevap: "sag", neden: "Geri koymadan çekince p her çekimde değişir: bağımsız değil." },
            { metin: "İlk isabete kadar atılan atış sayısı.", cevap: "sag", neden: "n sabit değil, atış sayısı değişken: geometrik durum." },
            { metin: "2000 öğrencili okuldan rastgele 10 kişi; telefonunun ekranı kırık olanların sayısı (p = 0,15).", cevap: "sol", neden: "Büyük okuldan küçük örnek: bağımsızlık makul, n = 10, p sabit: binom." }
          ] },
        { tip: "tuzak", baslik: "Başarı = iyi demek değil", metin: "İstatistikte başarı, saymak için seçtiğin sonuçtur. Ekranı kırık telefonları sayıyorsan o \"başarı\"dır.", yanlis: "Başarı olumlu bir şey olmalı; kırık ekranı başarısızlık say.", dogru: "Hangi sonucu sayıyorsan başarı odur; p o sonucun olasılığıdır. Soruda \"kaç tanesi ...\" diyorsa o durumu başarı yap." }
      ]
    },
    {
      baslik: "Binom olasılığı formülü",
      kisa: "P(X = x) = C(n,x) · p^x · (1−p)^(n−x): kaç yol çarpı her yolun olasılığı.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P(X = x)", alt: "tam x başarı" }, "=",
            { t: "C(n, x)", alt: "x başarının yerleşme sayısı" }, "·",
            { t: "p^x", alt: "x başarı" }, "·",
            { t: "(1 − p)^(n − x)", alt: "kalanlar başarısız" }
          ], aciklama: "C(n, x) = n! ÷ (x! (n − x)!). Hesap makinesinde nCr tuşu ya da binompdf kullanılır. Sınavda yalnızca komutu yazmak yetmez: dağılımı ve parametreleri adlandır (X ~ Binomial(n = 5, p = 0,6), P(X = 3)), sonra değeri yaz." },
        { tip: "ornek", baslik: "Deniz 5 atışta tam 3 isabet", durum: "Deniz'in her serbest atışı %60 isabet (p = 0,6), 5 atış yapıyor. Tam 3 isabet olasılığı nedir?",
          adimlar: ["BINS tamam: n = 5, p = 0,6, x = 3.", "Yol sayısı: C(5, 3) = 10.", "Üç isabet: 0,6³ = 0,216. İki ıska: 0,4² = 0,16.", "P(X = 3) = 10 · 0,216 · 0,16 = 0,3456."],
          sonuc: "P(X = 3) = 0,3456. Yani Deniz çok sayıda 5'lik atış serisi yaparsa, serilerin yaklaşık %34,6'sında tam 3 isabet olur." }
      ]
    },
    {
      baslik: "Dağılımı çiz, olayları hesapla",
      kisa: "Her x için P(X = x) hesapla; \"en az\" için tamamlayıcı ya da birikimli kullan.",
      bloklar: [
        { tip: "grafik", baslik: "X ~ Binomial(5; 0,6)", xlabel: "x (isabet sayısı)", ylabel: "P(X = x)", xmax: 7, ymax: 5,
          xticks: [{ v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }, { v: 5, label: "4" }, { v: 6, label: "5" }],
          yticks: [{ v: 1, label: "0,1" }, { v: 2, label: "0,2" }, { v: 3, label: "0,3" }],
          ogeler: [
            { id: "b0", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b1", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b4", tip: "alan", renk: 1, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b5", tip: "alan", renk: 1, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "v0", tip: "yazi", x: 1, y: 0.6, metin: "0,010", gizli: true },
            { id: "v1", tip: "yazi", x: 2, y: 1.3, metin: "0,077", gizli: true },
            { id: "v2", tip: "yazi", x: 3, y: 2.85, metin: "0,230", gizli: true },
            { id: "v3", tip: "yazi", x: 4, y: 4, metin: "0,346", gizli: true },
            { id: "v4", tip: "yazi", x: 5, y: 3.15, metin: "0,259", gizli: true },
            { id: "v5", tip: "yazi", x: 6, y: 1.3, metin: "0,078", gizli: true },
            { id: "h3", tip: "alan", renk: 2, gizli: true, noktalar: [[3.65, 0], [4.35, 0], [4.35, 3.456], [3.65, 3.456]] },
            { id: "h4", tip: "alan", renk: 3, gizli: true, noktalar: [[4.65, 0], [5.35, 0], [5.35, 2.592], [4.65, 2.592]] },
            { id: "h5", tip: "alan", renk: 3, gizli: true, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0.778], [5.65, 0.778]] },
            { id: "e3", tip: "yazi", x: 2.2, y: 4.6, metin: "P(X = 3) = 0,3456", gizli: true },
            { id: "e4", tip: "yazi", x: 5.2, y: 4.6, metin: "P(X ≥ 4) = 0,2592 + 0,0778 ≈ 0,337", gizli: true },
            { id: "mu", tip: "cizgi", renk: 2, kesik: true, from: [4, 0], to: [4, 4.6], etiket: "μ = np = 3", gizli: true }
          ],
          durumlar: [
            { metin: "Altı çubuk: 0, 1, 2, 3, 4, 5 isabet. Her biri formülle hesaplanır.", set: { b0: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 0.1024], [0.65, 0.1024]] }, b1: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 0.768], [1.65, 0.768]] }, b2: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2.304], [2.65, 2.304]] }, b3: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 3.456], [3.65, 3.456]] }, b4: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 2.592], [4.65, 2.592]] }, b5: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 0.7776], [5.65, 0.7776]] } }, goster: ["v0", "v1", "v2", "v3", "v4", "v5"] },
            { metin: "Tam 3 isabet: en yüksek çubuk, 0,3456.", goster: ["h3", "e3"] },
            { metin: "\"En az 4\" olayı: 4 ve 5 çubuklarını topla: ==0,2592 + 0,0778 ≈ 0,337==.", gizle: ["h3", "e3"], goster: ["h4", "h5", "e4"] },
            { metin: "Ortalama μ = np = 5 · 0,6 = 3: dağılım x = 3 çubuğunda dengede.", gizle: ["h4", "h5", "e4"], goster: ["mu"] }
          ] },
        { tip: "tablo", baslik: "Hesap makinesi (TI-84) komutları", head: ["Olasılık", "Komut"], rows: [
            ["P(X = x)", "binompdf(n, p, x)"],
            ["P(X ≤ x)", "binomcdf(n, p, x)"],
            ["P(X < x)", "binomcdf(n, p, x − 1)"],
            ["P(X ≥ x)", "1 − binomcdf(n, p, x − 1)"],
            ["P(X > x)", "1 − binomcdf(n, p, x)"]
          ], not: "Sınavda komutu tek başına yazma; dağılımı ve parametreleri etiketle: X ~ Binomial(n = 5, p = 0,6), P(X = 3) = binompdf(n = 5, p = 0.6, x = 3) ≈ 0,346." },
        { tip: "ornek", baslik: "En az 4 isabet", durum: "Aynı Deniz: n = 5, p = 0,6. Tüm P(4) ve P(5)'i hesaplamadan P(X ≥ 4) nasıl bulunur?",
          adimlar: ["\"En az 4\" = 1 − (3 ya da daha az).", "P(X ≤ 3) = binomcdf(5, 0.6, 3) = 0,01024 + 0,0768 + 0,2304 + 0,3456 = 0,66304.", "P(X ≥ 4) = 1 − 0,66304 = 0,33696."],
          sonuc: "P(X ≥ 4) ≈ 0,337. Doğrudan toplama (0,2592 + 0,07776) da aynı sonucu verir." }
      ]
    },
    {
      baslik: "Binomun ortalaması ve standart sapması",
      kisa: "Binomda μ = np ve σ = √(np(1−p)); tabloyla uğraşmadan hesaplanır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "μ_X", alt: "ortalama" }, "=",
            { t: "n · p", alt: "deneme sayısı × başarı olasılığı" }
          ] },
        { tip: "formul", parcalar: [
            { t: "σ_X", alt: "standart sapma" }, "=",
            { t: "√( n · p · (1 − p) )", alt: "np(1−p) varyanstır" }
          ], aciklama: "σ = √(np(1−p)) formülü yalnız binom (BINS tamam) için geçerli. Genel formül Σ x · P(x) her dağılım için çalışır ama burada gerekmez." },
        { tip: "ornek", baslik: "Atış sayısı için μ ve σ", durum: "Deniz'in 5 atışında isabet sayısı X ~ Binomial(5; 0,6). Ortalama ve standart sapma kaçtır? Yorumla.",
          adimlar: ["μ_X = np = 5 · 0,6 = 3 isabet. (Tablodan Σ x · P(x) = 3 çıkar; kontrol.)", "σ_X = √(5 · 0,6 · 0,4) = √1,2 ≈ 1,10 isabet.", "Yorum: Çok sayıda 5'li atış serisinde ortalama isabet 3'e yaklaşır; tek bir serinin isabet sayısı 3'ten tipik olarak yaklaşık 1,1 uzaktadır."],
          sonuc: "μ_X = 3, σ_X ≈ 1,10. Bağlamla yorumla: \"uzun vadede\" ve \"tipik olarak\"." },
        { tip: "tuzak", baslik: "Binom formülünü her yere yapıştırma", metin: "Binom formüllerini (olasılık formülü ve σ = √(np(1−p))) yalnızca X gerçekten binomsa kullan. Önce BINS'i kontrol et.", yanlis: "Torbadan geri koymadan çekilen kırmızı bilye sayısı için de σ = √(np(1−p)) kullanılır.", dogru: "Bağımsızlık bozuksa (iadesiz çekim, küçük popülasyon) X binom değildir: binom olasılık formülü ve σ = √(np(1−p)) kullanılamaz. Genel yol: dağılım tablosunu kurup Σ x · P(x) ve Σ (x − μ)² · P(x) hesaplamak." }
      ]
    },
    {
      baslik: "Şekil ve 10% koşulu",
      kisa: "p küçükse sağa, büyükse sola çarpık; iadesiz çekimde n ≤ N'in %10'u olmalı.",
      bloklar: [
        { tip: "sekil", baslik: "n = 5: p = 0,2 ve p = 0,8 dağılımları", fig: { type: "bar", cats: ["0", "1", "2", "3", "4", "5"], series: [{ name: "p = 0,2", values: [0.3277, 0.4096, 0.2048, 0.0512, 0.0064, 0.0003] }, { name: "p = 0,8", values: [0.0003, 0.0064, 0.0512, 0.2048, 0.4096, 0.3277] }], ylabel: "P(X = x)" } },
        { tip: "tablo", baslik: "p ve dağılımın şekli", head: ["p", "Şekil", "Neden"], rows: [
            ["p < 0,5", "Sağa çarpık", "Başarı az, çoğunlukla düşük değerler"],
            ["p = 0,5", "Simetrik", "Başarı ve başarısızlık eşit"],
            ["p > 0,5", "Sola çarpık", "Başarı çok, çoğunlukla yüksek değerler"]
          ], not: "n büyüdükçe dağılım daha simetrik, çan şekline benzer." },
        { tip: "tuzak", baslik: "10% koşulu", metin: "Popülasyon büyükse ve küçük bir örneklemi iadesiz seçiyorsan, bağımsızlık yaklaşık olarak sağlanır. Kural: ==n ≤ N'in %10'u==.", yanlis: "Kutudan geri koymadan 5 bilye çekiyorum; yine de her zaman binom kullanırım.", dogru: "Önce n ≤ 0,10 N mi diye bak: 2000 kişilik okuldan 10 kişi seçmek tamam (10 ≤ 200). 30 kişilik sınıftan 10 kişi seçmek değil (10 > 3)." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Binom: sabit n bağımsız denemede başarı sayısı; X ~ Binomial(n, p).",
            "BINS: Binary, Independent, Number sabit, Same probability. Dördü de gerekir.",
            "P(X = x) = C(n, x) · p^x · (1−p)^(n−x); hesap makinesinde binompdf(n, p, x).",
            "P(X ≤ x) = binomcdf(n, p, x); \"en az x\" için 1 − binomcdf(n, p, x−1).",
            "μ_X = np ve σ_X = √(np(1−p)); yorumda \"uzun vadede\" ve \"tipik olarak\" yaz.",
            "p < 0,5 sağa çarpık, p = 0,5 simetrik, p > 0,5 sola çarpık; n büyüdükçe daha simetrik.",
            "Başarı, saymak istediğin sonuçtur; olumlu olması gerekmez.",
            "İadesiz seçimde n ≤ N'in %10'u ise bağımsızlık yaklaşık sağlanır (10% koşulu).",
            "İlk başarıya kadar sayıyorsan X binom değildir (n sabit değil); bu geometrik bir durumdur ve 2026-27 sınavında sorulmaz."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdaki durumlardan hangisi *binomial* koşullarını (BINS) sağlar?",
      opts: ["500 öğrencili okuldan rastgele 10 öğrenci seçilip kaçının sol elini kullandığı sayılıyor (p = 0,1).", "6 bilyelik torbadan geri koymadan 4 bilye çekilip kırmızı bilye sayısı sayılıyor.", "Bir basketçi ilk gol atana kadar penaltı atıyor; atılan penaltı sayısı sayılıyor.", "Bir öğrencinin 10 sınavının not ortalaması hesaplanıyor."],
      a: 0, why: "Büyük popülasyondan küçük örnek (10 ≤ 50), her öğrenci iki sonuçlu, n = 10 sabit, p yaklaşık sabit: binom. B'de iadesiz çekim p'yi değiştirir, C'de n sabit değil (geometrik), D'de sonuç ikili değil. En çekici yanlış şık B: \"çekiyoruz, sayıyoruz\" binom gibi görünür ama bağımsızlık bozuk." },
    { q: "Deniz'in her serbest atışı bağımsız ve %60 isabetlidir. 5 atışta tam 2 isabet olasılığı kaçtır?",
      opts: ["0,3456", "0,2304", "0,0576", "0,6000"],
      a: 1, why: "P(X = 2) = C(5, 2) · 0,6² · 0,4³ = 10 · 0,36 · 0,064 = 0,2304. C şıkkı C(5, 2) = 10 çarpanını unutur ve 0,4'ü 3 yerine 2 kez çarpar: 0,6² · 0,4² = 0,0576. A şıkkı P(X = 3)'tür." },
    { q: "Deniz 5 atış yapıyor (n = 5, p = 0,6), X isabet sayısı. P(X ≥ 4) hesap makinesinde hangi ifadeyle bulunur?",
      opts: ["binomcdf(5, 0.6, 4)", "1 − binomcdf(5, 0.6, 4)", "1 − binomcdf(5, 0.6, 3)", "binompdf(5, 0.6, 4)"],
      a: 2, why: "\"En az 4\" = 1 − P(X ≤ 3) = 1 − binomcdf(5, 0.6, 3) ≈ 0,337. B şıkkı P(X > 4) yani yalnız X = 5'i verir, en çekici yanlış şıktır. A, P(X ≤ 4)'tür; D yalnız X = 4'ü hesaplar." },
    { q: "2000 öğrencili bir okulda öğrencilerin %15'inin telefon ekranı kırıktır. Rastgele 100 öğrenci seçilip ekranı kırık olanların sayısı X sayılıyor. X'in ortalaması ve standart sapması kaçtır?",
      opts: ["μ = 15; σ = 12,75", "μ = 15; σ = 3,87", "μ = 85; σ = 3,57", "μ = 15; σ = 3,57"],
      a: 3, why: "10% koşulu: 100 ≤ 200 ✓, BINS tamam. μ = np = 100 · 0,15 = 15; σ = √(100 · 0,15 · 0,85) = √12,75 ≈ 3,57. A şıkkı varyansı (12,75) σ gibi verir; B şıkkı (1−p) çarpanını unutur (√15 ≈ 3,87); C başarıyı yanlış saymıştır (kırık değil sağlam öğrenciler)." },
    { q: "Grafik, n = 5 olan bir *binomial* dağılımı gösteriyor. Aşağıdakilerden hangisi doğrudur?",
      opts: ["Başarı olasılığı p yaklaşık 0,2'dir.", "p = 0,5'tir, çünkü dağılım simetriktir.", "p, 0,5'ten büyüktür; dağılım sola çarpıktır.", "Beklenen değer yaklaşık 1'dir."],
      a: 2,
      fig: { type: "bar", cats: ["0", "1", "2", "3", "4", "5"], series: [{ name: "P(X = x)", values: [0.0003, 0.0064, 0.0512, 0.2048, 0.4096, 0.3277] }], ylabel: "P(X = x)" },
      why: "Çubuklar sağda (4 ve 5) yığılmış ve kuyruk sola uzuyor: sola çarpık, yani p > 0,5 (burada p = 0,8, μ = np = 4). A ve D, sağa çarpık bir dağılım için doğru olurdu (p = 0,2 → μ = 1); en çekici yanlış şık A. B yanlış: p = 0,5 simetrik çıkardı." }
  ]
};
