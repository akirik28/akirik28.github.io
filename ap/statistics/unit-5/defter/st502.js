/* Kitpath not defteri · st502 · 5.3 Merkezi Limit Teoremi
   Kapsam: CLT, x̄'nin şekli (normal popülasyon / n ≥ 30), merkez ve yayılımın özeti, koşullar, CLT ile olasılık. */
window.DEFTER = {
  slug: "st502",
  amac: "Bu konu Merkezi Limit Teoremi'ni (*Central Limit Theorem*, CLT) anlatıyor. Popülasyon çarpık olsa bile n büyüdükçe x̄'nin sampling distribution'ının normale yaklaştığını ve normal modeli ne zaman kullanabileceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "İki zarın ortalaması",
      kisa: "Tek zar düz dağılır; iki zarın ortalaması tepeli bir şekil alır.",
      bloklar: [
        { tip: "hikaye", ikon: "🎲", baslik: "Zar atışı ve ortalama",
          metin: "Tek bir adil zarda 1'den 6'ya her yüz eşit olasılıklı: dağılım düzdür. İki zar atıp ortalamasını alınca 1 ve 6 gibi uçlar nadirleşir, 3,5 civarı sıklaşır: ==ortalama almak uçları törpüler.==" },
        { tip: "sekil", baslik: "İki zarın ortalaması (36 eşit olası sonuçtan kaç tanesi)", fig: { type: "bar", cats: ["1", "1,5", "2", "2,5", "3", "3,5", "4", "4,5", "5", "5,5", "6"], series: [{ name: "Sonuç sayısı (36 içinden)", values: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1] }], ylabel: "Sonuç sayısı" } },
        { tip: "kavramlar", kartlar: [
            { ikon: "🔔", terim: "Central Limit Theorem", tr: "Merkezi Limit Teoremi (CLT)", tanim: "n yeterince büyükse, popülasyon şekli ne olursa olsun x̄'nin sampling distribution'ı ==yaklaşık normaldir==.", ornek: "Çarpık bekleme sürelerinin n = 50'lik örneklem ortalamaları çan şeklinde dağılır." },
            { ikon: "👥", terim: "Sample size", tr: "örneklem büyüklüğü (n)", tanim: "Bir örneklemdeki gözlem sayısı; CLT'de ‘büyük’ olması gereken budur, kaç örneklem çektiğin değil.", ornek: "Her seferinde 50 müşteri soruyorsan n = 50." }
          ] }
      ]
    },
    {
      baslik: "CLT'yi görmek: çarpık popülasyon",
      kisa: "n büyüdükçe x̄ hem normale yaklaşır hem daralır.",
      bloklar: [
        { tip: "grafik", baslik: "Sağa çarpık popülasyon ve x̄'nin sampling distribution'ı", xlabel: "Değer (popülasyon: tek gözlem; sonraki durumlar: x̄)", ylabel: "", xmax: 6, ymax: 10,
          xticks: [{ v: 0, label: "0" }, { v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0.02,0.12],[0.39,1.59],[0.77,2.14],[1.14,2.19],[1.51,2],[1.88,1.72],[2.26,1.42],[2.63,1.14],[3,0.9],[3.37,0.69],[3.75,0.53],[4.12,0.4],[4.49,0.3],[4.86,0.23],[5.24,0.17],[5.61,0.12],[5.98,0.09]] },
            { id: "m", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 9.7], etiket: "μ = 2" },
            { id: "t", tip: "yazi", x: 4.3, y: 7.5, metin: "Popülasyon" }
          ],
          durumlar: [
            { metin: "Popülasyon güçlü biçimde ==sağa çarpık== (μ = 2, σ ≈ 1,41). Tek bir gözlemin dağılımı bu." },
            { metin: "n = 2: ortalamalar μ = 2 çevresinde toplanıyor, daraldı; ama şekil hâlâ sağa çarpık.", set: { e: { noktalar: [[0.02,0],[0.36,0.37],[0.71,1.37],[1.05,2.26],[1.39,2.67],[1.73,2.6],[2.08,2.25],[2.42,1.8],[2.76,1.35],[3.1,0.96],[3.45,0.67],[3.79,0.45],[4.13,0.29],[4.47,0.19],[4.81,0.12],[5.16,0.07],[5.5,0.04]] }, t: { metin: "n = 2", x: 3.6, y: 5 } } },
            { metin: "n = 5: çarpıklık azalıyor, tepe yükseliyor.", set: { e: { noktalar: [[0.1,0],[0.36,0],[0.61,0.09],[0.87,0.59],[1.13,1.68],[1.38,2.96],[1.64,3.8],[1.89,3.91],[2.15,3.4],[2.41,2.6],[2.66,1.8],[2.92,1.14],[3.18,0.68],[3.43,0.38],[3.69,0.2],[3.94,0.1],[4.2,0.05]] }, t: { metin: "n = 5", x: 3.2, y: 5.5 } } },
            { metin: "n = 30: ==neredeyse simetrik bir çan== ve çok dar. Popülasyon çarpık kalmasına rağmen x̄ yaklaşık normal.", set: { e: { noktalar: [[1.1,0],[1.21,0.03],[1.33,0.16],[1.44,0.68],[1.55,1.99],[1.66,4.25],[1.78,6.92],[1.89,8.89],[2,9.26],[2.11,8],[2.23,5.84],[2.34,3.67],[2.45,2.01],[2.56,0.97],[2.68,0.42],[2.79,0.16],[2.9,0.06]] }, t: { metin: "n = 30", x: 2.9, y: 8.5 } } }
          ] },
        { tip: "tablo", baslik: "Popülasyon şekline göre x̄ ne olur?", head: ["Popülasyon", "n küçükse", "n büyükse (n ≥ 30)"], rows: [
            ["Normal", "x̄ tam normal (her n için)", "x̄ normal"],
            ["Simetrik, tek tepeli", "x̄ yaklaşık normal", "x̄ normal"],
            ["Güçlü çarpık ya da uç değerli", "x̄ de çarpık kalır", "x̄ yaklaşık normal (çok çarpıksa daha büyük n gerekebilir)"]
          ] }
      ]
    },
    {
      baslik: "Merkez ve yayılım",
      kisa: "Mean aynı kalır, SD σ/√n olur; ayrıntı 5.7'de.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "μ_x̄", alt: "x̄'nin mean'i" }, "=", { t: "μ", alt: "popülasyon mean'i" }], aciklama: "x̄ doğru yerin çevresinde toplanır: yanlılık yok. CLT şekil hakkındadır, merkezi kaydırmaz." },
        { tip: "formul", parcalar: [{ t: "σ_x̄", alt: "x̄'nin SD'si" }, "=", { t: "σ ÷ √n", alt: "σ: popülasyon SD'si" }], aciklama: "n büyüdükçe payda büyür, SD küçülür. SD'yi yarıya indirmek için n'yi 4 katına çıkar." },
        { tip: "tablo", baslik: "σ = 20 iken n arttıkça", head: ["n", "σ_x̄ = 20 ÷ √n"], rows: [["1", "20"], ["4", "10"], ["25", "4"], ["100", "2"]], not: "n = 1 iken x̄ tek bir gözlemdir: SD popülasyon SD'sine eşit." }
      ]
    },
    {
      baslik: "Normal model ne zaman kullanılır?",
      kisa: "Popülasyon normalse her n; değilse n ≥ 30 pratik kuraldır.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎯", baslik: "Random", metin: "Rastgele örneklem ya da randomized experiment." },
            { ikon: "🔟", baslik: "10%", metin: "Çekimsiz (iadesiz) seçimde n ≤ N ÷ 10; gözlemler yaklaşık bağımsız olsun." },
            { ikon: "📈", baslik: "Shape", metin: "Popülasyon normal ya da n ≥ 30 (çok çarpıksa daha büyük n)." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Normal model *kullanılabilir*", maddeler: ["Popülasyon normal (n kaç olursa olsun)", "n ≥ 30 (güçlü çarpıklıkta daha büyük n)"] },
          sag: { ikon: "⚠️", baslik: "Normal model *garanti değil*", maddeler: ["Popülasyon çarpık ve n küçük", "Şekil bilinmiyor ve n < 30"] },
          oyun: [
            { metin: "Popülasyon normal, n = 6.", cevap: "sol", neden: "Normal popülasyondan x̄ her n için normaldir." },
            { metin: "Popülasyon çok sağa çarpık, n = 10.", cevap: "sag", neden: "n küçük: x̄ çarpık kalır." },
            { metin: "Popülasyon çok sağa çarpık, n = 100.", cevap: "sol", neden: "n büyük: CLT devreye girer." },
            { metin: "Şekli bilinmeyen popülasyon, n = 45.", cevap: "sol", neden: "n ≥ 30: CLT kuralı." },
            { metin: "Şekli bilinmeyen popülasyon, n = 12.", cevap: "sag", neden: "n küçük ve normal olduğu bilinmiyor: garanti yok." }
          ] },
        { tip: "tuzak", baslik: "CLT neyi normal yapar?", metin: "CLT, ==x̄'nin dağılımı== hakkındadır; verinin ya da popülasyonun şekli hakkında değil.", yanlis: "n = 50 aldım, o zaman verilerim normal dağılır.", dogru: "Verinin ve popülasyonun şekli aynı kalır; normale yaklaşan, çok sayıda örneklemin ortalamalarının dağılımıdır." }
      ]
    },
    {
      baslik: "Çözümlü örnek: tost kuyruğu",
      kisa: "Çarpık popülasyonda bile n ≥ 30 ise x̄ için z ile olasılık bulunur.",
      bloklar: [
        { tip: "ornek", baslik: "Ortalama bekleme süresi 7 dakikayı aşar mı?", durum: "Kantinde tost için bekleme süresi sağa çarpık: μ = 6 dk, σ = 5 dk. Bir ayda 3.000 müşteri geliyor. Rastgele 50 müşterinin ortalama bekleme süresinin 7 dakikayı aşma olasılığı nedir?",
          adimlar: ["Dağılım: x̄. Mean μ_x̄ = 6; SD σ_x̄ = 5 ÷ √50 ≈ 0,707.", "Koşullar: rastgele örneklem; 10%: 50 ≤ 0,10 × 3.000 = 300 ✓; popülasyon çarpık ama n = 50 ≥ 30 → x̄ yaklaşık normal.", "z = (7 − 6) ÷ 0,707 ≈ 1,41; tablo: P(Z < 1,41) = 0,9207.", "P(x̄ > 7) = 1 − 0,9207 = 0,0793."],
          sonuc: "Rastgele 50 müşterinin ortalama bekleme süresinin 7 dakikayı aşma olasılığı yaklaşık ==0,08==." },
        { tip: "grafik", baslik: "P(x̄ > 7) = üst kuyruk alanı", xlabel: "Ortalama bekleme süresi (dk)", ylabel: "", xmax: 8, ymax: 10,
          xticks: [{ v: 0, label: "4" }, { v: 2, label: "5" }, { v: 4, label: "6" }, { v: 6, label: "7" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0.02,0.16],[0.52,0.41],[1.02,0.91],[1.51,1.8],[2.01,3.14],[2.51,4.85],[3.01,6.61],[3.5,7.96],[4,8.46],[4.5,7.96],[5,6.61],[5.49,4.85],[5.99,3.14],[6.49,1.8],[6.99,0.91],[7.48,0.41],[7.98,0.16]] },
            { id: "m", tip: "cizgi", renk: 3, kesik: true, from: [4, 0], to: [4, 9.5], etiket: "μ_x̄ = 6" },
            { id: "c", tip: "cizgi", renk: 1, from: [6, 0], to: [6, 6], etiket: "7 dk", gizli: true },
            { id: "a", tip: "alan", renk: 1, gizli: true, noktalar: [[6,0],[6,3.11],[6.17,2.62],[6.33,2.18],[6.5,1.78],[6.66,1.44],[6.83,1.15],[6.99,0.9],[7.16,0.7],[7.32,0.54],[7.49,0.41],[7.65,0.3],[7.82,0.22],[7.98,0.16],[7.98,0]] },
            { id: "y", tip: "yazi", x: 7.2, y: 1.2, metin: "≈ 0,08", gizli: true }
          ],
          durumlar: [
            { metin: "x̄'nin sampling distribution'ı: yaklaşık normal, mean 6, SD ≈ 0,71 (n = 50)." },
            { metin: "7 dakika, mean'den ≈ 1,41 SD yukarıda.", goster: ["c"] },
            { metin: "7'nin sağındaki alan, aranan olasılıktır: ==≈ 0,08==.", goster: ["a", "y"] }
          ] },
        { tip: "tuzak", baslik: "Tek müşteri mi, ortalama mı?", metin: "Popülasyon çarpık olduğu için tek bir müşterinin bekleme süresinde normal modeli kullanamazsın; normal model yalnızca ortalamalar için geçerli.", yanlis: "P(X > 7) için z = (7 − 6) ÷ 5 = 0,2 ve P ≈ 0,42.", dogru: "Normal model x̄ içindir: z = (7 − 6) ÷ (5/√50) ≈ 1,41." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "*Central Limit Theorem*: n yeterince büyükse popülasyon şekli ne olursa olsun x̄'nin sampling distribution'ı yaklaşık normaldir.",
            "Popülasyon normalse x̄ her n için normaldir; değilse pratik kural n ≥ 30 (çok çarpıksa daha büyük n).",
            "n küçük ve popülasyon çarpıksa x̄'nin dağılımı da çarpık kalır; n arttıkça çarpıklık azalır.",
            "Merkez değişmez (μ_x̄ = μ); yayılım σ_x̄ = σ ÷ √n ile daralır.",
            "CLT, x̄'nin dağılımı hakkındadır; verinin ya da popülasyonun şekli normal olmaz.",
            "Kullanmadan önce: Random, 10% (n ≤ N ÷ 10) ve Shape (normal popülasyon ya da n ≥ 30).",
            "Tek gözlem için P(X > a) ile ortalama için P(x̄ > a) farklıdır: ortalamada SD σ ÷ √n alınır."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "İki adil zar atılıp ortalaması (iki sayının toplamının yarısı) alınıyor. Ortalamanın 3,5 çıkma olasılığı kaçtır?",
      opts: ["1/36", "1/12", "1/6", "7/36"],
      a: 2,
      why: "Ortalama 3,5 olması için toplam 7 olmalı; 36 olası sonuçtan 6'sı toplam 7 verir: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). 6/36 = 1/6. 1/36 yalnızca tek bir sonucu (örneğin ortalaması 1 olan) sayar." },
    { q: "Bir bisiklet kiralama durağında kiralama süreleri güçlü biçimde sağa çarpık. Rastgele n kiralama seçilip ortalama süre (x̄) hesaplanıyor. Aşağıdaki n değerlerinden hangisinde x̄'nin dağılımı için normal model en makuldür?",
      opts: ["n = 8", "n = 12", "n = 20", "n = 60"],
      a: 3,
      why: "Popülasyon güçlü çarpık olduğundan CLT'nin devreye girmesi için büyük n gerekir; n = 60 ≥ 30 en güvenli seçenektir. Küçük n'lerde x̄'nin dağılımı da çarpık kalır." },
    { q: "Okul servisi ile eve gidiş süresi sağa çarpık: μ = 30 dk, σ = 15 dk. 2.000 öğrencilik okuldan rastgele 36 öğrenci seçiliyor. Bu öğrencilerin ortalama gidiş süresinin 34 dakikadan uzun olma olasılığı yaklaşık kaçtır?",
      opts: ["0,055", "0,394", "0,945", "Hesaplanamaz, çünkü popülasyon çarpık"],
      a: 0,
      why: "n = 36 ≥ 30 ve 36 ≤ 0,10 × 2.000, yani x̄ yaklaşık normal. σ_x̄ = 15 ÷ √36 = 2,5; z = (34 − 30) ÷ 2,5 = 1,6; P(Z > 1,6) = 1 − 0,9452 ≈ 0,055. 0,394, σ_x̄ yerine σ = 15 kullanmanın sonucu (z = 0,27); ‘hesaplanamaz’ ise CLT'yi unutmaktır." },
    { q: "Bir araştırmacı, aynı popülasyondan farklı n değerleriyle çok sayıda örneklem çekip x̄'nin standard deviation'ını tabloda özetledi. Popülasyonun standard deviation'ı (σ) yaklaşık kaçtır?",
      fig: { type: "table", caption: "x̄ değerlerinin SD'si (benzetim)", head: ["n", "x̄'nin SD'si"], rows: [["4", "9,8"], ["16", "5,1"], ["64", "2,4"]] },
      opts: ["10", "20", "40", "80"],
      a: 1,
      why: "σ_x̄ = σ ÷ √n olduğundan σ ≈ σ_x̄ × √n: 9,8 × 2 ≈ 20, 5,1 × 4 ≈ 20, 2,4 × 8 ≈ 19. Üç satır da σ ≈ 20 verir. n 4 katına çıkınca SD yarıya iniyor." },
    { q: "Merkezi Limit Teoremi ile ilgili aşağıdakilerden hangisi doğrudur?",
      opts: ["n büyüdükçe popülasyonun dağılımı normale yaklaşır.", "n ≥ 30 ise tek bir örneklemdeki veriler normal dağılır.", "Popülasyon çarpık olsa bile n yeterince büyükse x̄'nin sampling distribution'ı yaklaşık normaldir.", "n büyüdükçe x̄'nin mean'i μ'den uzaklaşır."],
      a: 2,
      why: "CLT, x̄'nin sampling distribution'ının şeklinden söz eder. Popülasyon ve tek örneklem verisi aynı şekilde kalır (A ve B yanlış); x̄'nin mean'i hep μ'dür (D yanlış)." }
  ]
};
