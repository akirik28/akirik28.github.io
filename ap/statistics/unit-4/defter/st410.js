/* Kitora not defteri · st410 · 4.12 Geometrik Dağılım
   Kaynak: AP Statistics CED Topic 4.12 (video kiti yok). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "st410",
  amac: "Bu konu \"ilk başarıya kadar kaç deneme gerekir?\" sorusunu anlatıyor: *geometric distribution*. Geometrik durumu binomdan ayırmayı, P(X = k) ve birikimli olasılıkları, ortalama ve standart sapma formüllerini (1/p ve √(1−p)/p) öğreneceksin.",
  bolumler: [
    {
      baslik: "Geometrik durum: ilk başarıya kadar bekle",
      kisa: "Geometrik değişken, ilk başarıya kadar yapılan deneme sayısını sayar.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🎟️", terim: "Geometric random variable", tr: "geometrik rastgele değişken", tanim: "Bağımsız denemelerde ==ilk başarıya kadar== yapılan deneme sayısı. X = 1, 2, 3, … (üst sınır yok).", ornek: "Kantinde her alışta %25 şansla çıkan \"bedava çay\" kuponuna kadar kaç alış yapıldığı." },
            { ikon: "📍", terim: "Success probability p", tr: "başarı olasılığı", tanim: "Her denemede başarının olasılığı; hep aynı kalır. Kupon örneğinde p = 0,25.", ornek: "1 − p = 0,75: o alışta kupon çıkmama olasılığı." }
          ] },
        { tip: "ikili", sol: { ikon: "🔢", baslik: "*Binomial*", maddeler: ["Deneme sayısı n sabit", "Sayılan: başarı sayısı", "X = 0, 1, …, n"] },
          sag: { ikon: "🎟️", baslik: "*Geometric*", maddeler: ["Deneme sayısı belli değil", "Sayılan: ilk başarıya kadar deneme", "X = 1, 2, 3, … (sonsuz)"] },
          oyun: [
            { metin: "Kuponu bulana kadar yapılan alış sayısı.", cevap: "sag", neden: "İlk başarıya kadar bekleniyor: geometrik." },
            { metin: "10 alışta kaç kupon çıktığı.", cevap: "sol", neden: "n = 10 sabit, başarı sayısı sayılıyor: binom." },
            { metin: "Deniz'in ilk isabeti atana kadar kaç atış yaptığı.", cevap: "sag", neden: "İlk başarıya kadar atış sayısı: geometrik." },
            { metin: "20 atışta kaç isabet olduğu.", cevap: "sol", neden: "n = 20 sabit: binom." }
          ] },
        { tip: "tuzak", baslik: "Dört koşul: B, I, T, S", metin: "Geometrik için de koşullar var: ==B==inary (iki sonuç), ==I==ndependent (bağımsız), ==T==rials until success (ilk başarıya kadar deneme), ==S==ame probability (p hep aynı).", yanlis: "Torbadan geri koymadan ilk kırmızıya kadar çekmek de geometriktir.", dogru: "Geri koymadan çekince p her seferinde değişir; bağımsızlık bozulur. Aynı olasılıklı, bağımsız denemeler gerekir." }
      ]
    },
    {
      baslik: "Olasılık formülü: P(X = k)",
      kisa: "k−1 deneme başarısız, k. deneme başarılı: (1−p)^(k−1) · p.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P(X = k)", alt: "ilk başarı k. denemede" }, "=",
            { t: "(1 − p)^(k − 1)", alt: "ilk k−1 deneme başarısız" }, "·",
            { t: "p", alt: "k. deneme başarılı" }
          ], aciklama: "Önce k−1 kez başarısızlık, sonra bir başarı. Denemeler bağımsız olduğu için olasılıklar çarpılır." },
        { tip: "ornek", baslik: "Kupon 3. alışta çıksın", durum: "Her alışta kupon çıkma olasılığı p = 0,25. Kuponun tam 3. alışta çıkma olasılığı nedir? (X = 3)",
          adimlar: ["İlk iki alış kupon çıkarmadı: 0,75 · 0,75 = 0,5625.", "Üçüncü alışta kupon çıktı: 0,25.", "P(X = 3) = 0,75² · 0,25 = 0,5625 · 0,25 = 0,140625."],
          sonuc: "P(X = 3) ≈ 0,141. Yani ilk kuponun tam 3. alışta çıkma şansı yaklaşık %14." },
        { tip: "tablo", baslik: "p = 0,25 için ilk değerler", head: ["k", "P(X = k)", "Hesap"], rows: [
            ["1", "0,2500", "0,75⁰ · 0,25"],
            ["2", "0,1875", "0,75¹ · 0,25"],
            ["3", "0,1406", "0,75² · 0,25"],
            ["4", "0,1055", "0,75³ · 0,25"],
            ["5", "0,0791", "0,75⁴ · 0,25"]
          ], not: "Her satır bir öncekinin 0,75 katı: olasılıklar sürekli azalır." }
      ]
    },
    {
      baslik: "Dağılımın şekli",
      kisa: "Geometrik dağılım hep sağa çarpıktır; en yüksek çubuk k = 1'dedir.",
      bloklar: [
        { tip: "grafik", baslik: "X geometrik, p = 0,25: ilk 8 değer", xlabel: "k (kaçıncı alışta)", ylabel: "P(X = k)", xmax: 9, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }, { v: 7, label: "7" }, { v: 8, label: "8" }],
          yticks: [{ v: 1, label: "0,05" }, { v: 2, label: "0,10" }, { v: 3, label: "0,15" }, { v: 4, label: "0,20" }, { v: 5, label: "0,25" }],
          ogeler: [
            { id: "b1", tip: "alan", renk: 1, noktalar: [[0.65, 0], [1.35, 0], [1.35, 0], [0.65, 0]] },
            { id: "b2", tip: "alan", renk: 1, noktalar: [[1.65, 0], [2.35, 0], [2.35, 0], [1.65, 0]] },
            { id: "b3", tip: "alan", renk: 1, noktalar: [[2.65, 0], [3.35, 0], [3.35, 0], [2.65, 0]] },
            { id: "b4", tip: "alan", renk: 1, noktalar: [[3.65, 0], [4.35, 0], [4.35, 0], [3.65, 0]] },
            { id: "b5", tip: "alan", renk: 1, noktalar: [[4.65, 0], [5.35, 0], [5.35, 0], [4.65, 0]] },
            { id: "b6", tip: "alan", renk: 1, noktalar: [[5.65, 0], [6.35, 0], [6.35, 0], [5.65, 0]] },
            { id: "b7", tip: "alan", renk: 1, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0], [6.65, 0]] },
            { id: "b8", tip: "alan", renk: 1, noktalar: [[7.65, 0], [8.35, 0], [8.35, 0], [7.65, 0]] },
            { id: "h1", tip: "alan", renk: 2, gizli: true, noktalar: [[0.65, 0], [1.35, 0], [1.35, 5], [0.65, 5]] },
            { id: "h2", tip: "alan", renk: 2, gizli: true, noktalar: [[1.65, 0], [2.35, 0], [2.35, 3.75], [1.65, 3.75]] },
            { id: "h3", tip: "alan", renk: 2, gizli: true, noktalar: [[2.65, 0], [3.35, 0], [3.35, 2.8125], [2.65, 2.8125]] },
            { id: "e1", tip: "yazi", x: 5.5, y: 5.5, metin: "P(X ≤ 3) = 0,25 + 0,1875 + 0,1406 ≈ 0,578", gizli: true },
            { id: "t4", tip: "alan", renk: 3, gizli: true, noktalar: [[3.65, 0], [4.35, 0], [4.35, 2.109], [3.65, 2.109]] },
            { id: "t5", tip: "alan", renk: 3, gizli: true, noktalar: [[4.65, 0], [5.35, 0], [5.35, 1.582], [4.65, 1.582]] },
            { id: "t6", tip: "alan", renk: 3, gizli: true, noktalar: [[5.65, 0], [6.35, 0], [6.35, 1.187], [5.65, 1.187]] },
            { id: "t7", tip: "alan", renk: 3, gizli: true, noktalar: [[6.65, 0], [7.35, 0], [7.35, 0.89], [6.65, 0.89]] },
            { id: "t8", tip: "alan", renk: 3, gizli: true, noktalar: [[7.65, 0], [8.35, 0], [8.35, 0.667], [7.65, 0.667]] },
            { id: "e2", tip: "yazi", x: 6.2, y: 4.2, metin: "P(X > 3) = 0,75³ ≈ 0,422 (kuyruk sonsuza uzanır …)", gizli: true },
            { id: "mu", tip: "cizgi", renk: 2, kesik: true, from: [4, 0], to: [4, 3.3], etiket: "μ = 1/p = 4", gizli: true }
          ],
          durumlar: [
            { metin: "İlk 8 değerin çubukları: her biri bir öncekinin 0,75 katı, sürekli alçalıyor.", set: { b1: { noktalar: [[0.65, 0], [1.35, 0], [1.35, 5], [0.65, 5]] }, b2: { noktalar: [[1.65, 0], [2.35, 0], [2.35, 3.75], [1.65, 3.75]] }, b3: { noktalar: [[2.65, 0], [3.35, 0], [3.35, 2.8125], [2.65, 2.8125]] }, b4: { noktalar: [[3.65, 0], [4.35, 0], [4.35, 2.109], [3.65, 2.109]] }, b5: { noktalar: [[4.65, 0], [5.35, 0], [5.35, 1.582], [4.65, 1.582]] }, b6: { noktalar: [[5.65, 0], [6.35, 0], [6.35, 1.187], [5.65, 1.187]] }, b7: { noktalar: [[6.65, 0], [7.35, 0], [7.35, 0.89], [6.65, 0.89]] }, b8: { noktalar: [[7.65, 0], [8.35, 0], [8.35, 0.667], [7.65, 0.667]] } } },
            { metin: "\"İlk 3 alışta kupon çıkar\": 1, 2, 3 çubuklarını topla: ==0,578==.", goster: ["h1", "h2", "h3", "e1"] },
            { metin: "Geri kalan tüm olasılık kuyrukta: 4, 5, 6, … Toplamları ==0,75³ ≈ 0,422==.", gizle: ["h1", "h2", "h3", "e1"], goster: ["t4", "t5", "t6", "t7", "t8", "e2"] },
            { metin: "Ortalama μ = 1/p = 4; ama en yüksek çubuk yine k = 1. Dağılım ==sağa çarpık==.", gizle: ["t4", "t5", "t6", "t7", "t8", "e2"], goster: ["mu"] }
          ] },
        { tip: "tuzak", baslik: "Ortalama en olası değer değil", metin: "Geometrik dağılımda en olası değer her zaman k = 1'dir. Ortalama ise sağa uzayan kuyruk yüzünden bundan büyüktür.", yanlis: "μ = 4 ise ilk kupon büyük olasılıkla 4. alışta çıkar.", dogru: "En olası alış sayısı 1'dir (%25). 4, uzun vadeli ortalamadır; tek bir deneme için en olası değer değildir." }
      ]
    },
    {
      baslik: "Birikimli olasılık: ilk k denemede",
      kisa: "İlk k denemede başarı yok olasılığı (1−p)^k; \"en çok k\" bunun tamamlayıcısıdır.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "P(X > k)", alt: "k denemede başarı yok" }, "=",
            { t: "(1 − p)^k", alt: "k tane başarısızlık" }, "→",
            { t: "P(X ≤ k) = 1 − (1 − p)^k", alt: "k ya da daha az denemede" }
          ], aciklama: "\"k'dan fazla deneme gerekir\" = ilk k denemenin hepsi başarısız. \"En çok k deneme\" = bunun tamamlayıcısı." },
        { tip: "tablo", baslik: "Hesap makinesi (TI-84) komutları", head: ["Olasılık", "Komut"], rows: [
            ["P(X = k)", "geometpdf(p, k)"],
            ["P(X ≤ k)", "geometcdf(p, k)"],
            ["P(X > k)", "1 − geometcdf(p, k)"],
            ["P(X ≥ k)", "1 − geometcdf(p, k − 1)"]
          ], not: "Sınavda komutu ve p, k değerlerini yaz: geometpdf(0.25, 3)." },
        { tip: "ornek", baslik: "İlk üç alışta kupon, ya da beşten fazla alış", durum: "p = 0,25. (a) Kuponun en çok 3. alışta çıkma olasılığı nedir? (b) 5'ten fazla alış gerekme olasılığı nedir?",
          adimlar: ["(a) P(X ≤ 3) = 1 − 0,75³ = 1 − 0,421875 = 0,578125. Kontrol: 0,25 + 0,1875 + 0,140625 = 0,578125.", "(b) \"5'ten fazla\" = ilk 5 alışta kupon yok: P(X > 5) = 0,75⁵ = 0,2373.", "Her iki durumda tamamlayıcı kural çalışıyor: P(X > k) = (1 − p)^k."],
          sonuc: "(a) ≈ 0,578  (b) ≈ 0,237. \"En çok / en az\" sorularında önce olayın hangi yönde olduğuna bak." }
      ]
    },
    {
      baslik: "Ortalama ve standart sapma",
      kisa: "Geometrikte μ = 1/p ve σ = √(1−p) / p; p küçüldükçe ikisi de büyür.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "μ_X", alt: "ortalama" }, "=",
            { t: "1 ÷ p", alt: "ilk başarıya kadar beklenen deneme" }
          ] },
        { tip: "formul", parcalar: [
            { t: "σ_X", alt: "standart sapma" }, "=",
            { t: "√(1 − p) ÷ p", alt: "varyans (1−p)/p²" }
          ], aciklama: "Bu formüller yalnız geometrik değişken için geçerli; binomdaki np formülleriyle karıştırma." },
        { tip: "ornek", baslik: "Kupon için ortalama ve σ", durum: "p = 0,25. İlk kupon için gereken alış sayısı X'in ortalaması ve standart sapması kaçtır? Yorumla.",
          adimlar: ["μ_X = 1 ÷ 0,25 = 4 alış.", "σ_X = √(1 − 0,25) ÷ 0,25 = √0,75 ÷ 0,25 ≈ 0,866 ÷ 0,25 ≈ 3,46 alış.", "Yorum: Çok sayıda kupon avında ortalama alış sayısı 4'e yaklaşır; tek bir avda alış sayısı 4'ten tipik olarak yaklaşık 3,5 uzaktadır."],
          sonuc: "μ_X = 4, σ_X ≈ 3,46. Standart sapma ortalamaya yakın: sonuçlar çok dağınık, bir avda 1 alış da olabilir, 10 alış da." },
        { tip: "tuzak", baslik: "Önceki başarısızlıklar bir sonrakini \"şanslı\" yapmaz", metin: "Denemeler bağımsız olduğu için her alışta kupon olasılığı yine 0,25'tir.", yanlis: "5 alışta kupon çıkmadı; 6. alışta çıkma olasılığı artmıştır.", dogru: "Her alışta p = 0,25 aynı. 5 başarısızlıktan sonra bile 6. alışta çıkma olasılığı 0,25'tir." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Geometrik değişken: bağımsız, aynı p'li denemelerde ilk başarıya kadar deneme sayısı; X = 1, 2, 3, …",
            "Binomda n sabit ve başarı sayılır; geometrikte başarı sabit (1 tane) ve deneme sayısı sayılır.",
            "P(X = k) = (1−p)^(k−1) · p; hesap makinesinde geometpdf(p, k).",
            "P(X > k) = (1−p)^k ve P(X ≤ k) = 1 − (1−p)^k; hesap makinesinde geometcdf(p, k).",
            "Dağılım hep sağa çarpık, azalan; en olası değer k = 1.",
            "μ_X = 1/p ve σ_X = √(1−p) / p; p küçüldükçe daha uzun beklersin.",
            "Ortalama en olası değer değildir; uzun vadeli ortalamadır, yorumda \"uzun vadede\" yaz.",
            "Önceki başarısızlıklar sonrakinin olasılığını değiştirmez (denemeler bağımsız)."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Aşağıdakilerden hangisi bir *geometric* rastgele değişkendir (bağımsız denemeler, her seferinde aynı olasılık varsayılsın)?",
      opts: ["10 alışta çıkan kupon sayısı", "Kupon çıkana kadar yapılan alış sayısı (p = 0,25)", "20 kişilik sınıfta bugün doğum günü olanların sayısı", "5 sınavdan geçilen sınav sayısı"],
      a: 1, why: "Geometrik değişken ilk başarıya kadar yapılan deneme sayısını sayar: kupon çıkana kadar alış sayısı. A, C ve D sabit sayıda denemede başarı sayısını sayar (n sabit): binom. En çekici yanlış şık A: kupon ve alış kelimeleri aynı, ama burada sabit n = 10 alışta başarı sayılıyor." },
    { q: "Kantinde her alışta %25 olasılıkla bedava çay kuponu çıkıyor (alışlar bağımsız). Kuponun tam 4. alışta çıkma olasılığı kaçtır?",
      opts: ["0,0791", "0,3164", "0,1055", "0,4219"],
      a: 2, why: "P(X = 4) = (0,75)³ · 0,25 = 0,421875 · 0,25 ≈ 0,1055. En çekici yanlış şık B: 0,75⁴ = 0,3164, yani 4 alışın hepsinde kupon çıkmama olasılığı (P(X > 4)). D, 0,75³'tür (P(X > 3)); A ise 5. alışın olasılığıdır." },
    { q: "Aynı kantinde (p = 0,25) ilk kuponu bulmak için 5'ten fazla alış gerekmesi olasılığı kaçtır?",
      opts: ["0,0791", "0,7627", "0,2500", "0,2373"],
      a: 3, why: "\"5'ten fazla\" = ilk 5 alışta kupon yok: P(X > 5) = 0,75⁵ ≈ 0,2373. En çekici yanlış şık B: 1 − 0,2373 = 0,7627 değeri P(X ≤ 5)'tir, yani \"en çok 5\". A ise tam 5. alıştır (P(X = 5))." },
    { q: "Grafik, bir geometrik değişkenin ilk 6 değerini gösteriyor. Hangisi doğrudur?",
      opts: ["Başarı olasılığı yaklaşık 0,5; ortalama yaklaşık 2'dir.", "Başarı olasılığı yaklaşık 0,5; ortalama yaklaşık 0,5'tir.", "Başarı olasılığı 0,25; ortalama 4'tür.", "En olası değer 2'dir, çünkü ortalama 2'dir."],
      a: 0,
      fig: { type: "bar", cats: ["1", "2", "3", "4", "5", "6"], series: [{ name: "P(X = k)", values: [0.5, 0.25, 0.125, 0.0625, 0.0313, 0.0156] }], ylabel: "P(X = k)" },
      why: "P(X = 1) = p, grafikte 0,5; her çubuk bir öncekinin yarısı (1 − p = 0,5). μ = 1/p = 2. B şıkkı μ'yu p ile karıştırır; D en çekici yanlış şık: en yüksek çubuk k = 1'dedir, ortalama en olası değer değildir." },
    { q: "Ece'nin oyununda nadir bir eşya her denemede 0,20 olasılıkla düşüyor (denemeler bağımsız). X, ilk eşyaya kadar yapılan deneme sayısı. X'in ortalaması ve standart sapması kaçtır?",
      opts: ["μ = 5; σ = 2,24", "μ = 5; σ = 20", "μ = 5; σ = 4,47", "μ = 4; σ = 4,47"],
      a: 2, why: "μ = 1/p = 1/0,20 = 5. σ = √(1 − p) / p = √0,8 / 0,2 ≈ 0,894 / 0,2 ≈ 4,47. B şıkkı varyansı (0,8 / 0,04 = 20) σ yerine verir; A, σ'yı √5 sanır (en çekici yanlış şık); D'deki μ = 4, p = 0,25 olan duruma aittir." }
  ]
};
