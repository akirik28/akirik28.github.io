/* Kitora not defteri · st506 · 5.7 Örneklem Ortalamasının Dağılımı
   Kapsam: x̄ sampling distribution (mean μ, SD σ/√n), n ile daralma, koşullar (Random, 10%, normal popülasyon ya da n ≥ 30), olasılık hesabı. */
window.DEFTER = {
  slug: "st506",
  amac: "Bu konu, örneklem ortalaması x̄'nin sampling distribution'ını anlatıyor: merkezi (μ), yayılımı (σ ÷ √n), koşulları ve olasılık hesabı. Ortalamaların tek tek gözlemlerden neden çok daha az oynadığını göreceksin.",
  bolumler: [
    {
      baslik: "x̄'nin merkezi ve yayılımı",
      kisa: "Mean μ'dür; SD σ ÷ √n'dir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Sample mean", tr: "örneklem ortalaması (x̄)", tanim: "Örneklemdeki değerlerin ortalaması; örneklemden örnekleme değişir.", ornek: "25 öğrencinin haftalık harçlıklarının ortalaması." },
            { ikon: "📐", terim: "Standard error", tr: "standart hata (SE)", tanim: "σ bilinmediğinde σ ÷ √n yerine s ÷ √n ile hesaplanan, x̄'nin SD'sinin tahmini; sonraki ünitelerde kullanılır.", ornek: "s = 18, n = 36: SE = 18 ÷ 6 = 3." }
          ] },
        { tip: "formul", parcalar: [{ t: "μ_x̄", alt: "x̄'nin mean'i" }, "=", { t: "μ", alt: "popülasyon mean'i" }], aciklama: "x̄, μ için yansız bir tahmin edicidir: ortalamada doğru yere toplanır." },
        { tip: "formul", parcalar: [{ t: "σ_x̄", alt: "x̄'nin SD'si" }, "=", { t: "σ ÷ √n", alt: "σ: popülasyon SD'si, n: örneklem büyüklüğü" }], aciklama: "Formül, çekimsiz seçimde n ≤ N ÷ 10 ise geçerlidir. Kare kök paydada kalır: n değil √n." }
      ]
    },
    {
      baslik: "n arttıkça daralma",
      kisa: "n'yi 4 katına çıkarmak x̄'nin SD'sini yarıya indirir.",
      bloklar: [
        { tip: "grafik", baslik: "Popülasyon ve x̄ dağılımları (μ = 100, σ = 20, normal popülasyon)", xlabel: "Değer (popülasyon: tek gözlem; sonraki durumlar: x̄)", ylabel: "", xmax: 12, ymax: 10,
          xticks: [{ v: 0, label: "40" }, { v: 2, label: "60" }, { v: 4, label: "80" }, { v: 6, label: "100" }, { v: 8, label: "120" }, { v: 10, label: "140" }, { v: 12, label: "160" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, etiket: "", noktalar: [[0.02,0.01],[0.77,0.04],[1.52,0.1],[2.26,0.21],[3.01,0.39],[3.76,0.64],[4.51,0.91],[5.25,1.12],[6,1.2],[6.75,1.12],[7.5,0.91],[8.24,0.64],[8.99,0.39],[9.74,0.21],[10.49,0.1],[11.23,0.04],[11.98,0.01]] },
            { id: "m", tip: "cizgi", renk: 3, kesik: true, from: [6, 0], to: [6, 9.8], etiket: "μ = 100" },
            { id: "y", tip: "yazi", x: 10.4, y: 2.2, metin: "σ = 20" }
          ],
          durumlar: [
            { metin: "Popülasyon: mean 100, SD 20. Tek bir gözlemin dağılımı (n = 1) geniş." },
            { metin: "n = 4: σ_x̄ = 20 ÷ √4 = ==10==. Merkez aynı, dağılım yarıya daraldı.", set: { e: { noktalar: [[2.5,0.01],[2.94,0.02],[3.38,0.08],[3.81,0.22],[4.25,0.52],[4.69,1.01],[5.13,1.63],[5.56,2.18],[6,2.39],[6.44,2.18],[6.88,1.63],[7.31,1.01],[7.75,0.52],[8.19,0.22],[8.63,0.08],[9.06,0.02],[9.5,0.01]] }, y: { metin: "σ_x̄ = 10", x: 8.6, y: 3.2 } } },
            { metin: "n = 16: σ_x̄ = 20 ÷ √16 = ==5==. Yine yarıya indi.", set: { e: { noktalar: [[4.25,0.01],[4.47,0.04],[4.69,0.15],[4.91,0.44],[5.13,1.04],[5.34,2.02],[5.56,3.26],[5.78,4.35],[6,4.79],[6.22,4.35],[6.44,3.26],[6.66,2.02],[6.88,1.04],[7.09,0.44],[7.31,0.15],[7.53,0.04],[7.75,0.01]] }, y: { metin: "σ_x̄ = 5", x: 7.9, y: 5.5 } } },
            { metin: "n = 64: σ_x̄ = 20 ÷ √64 = ==2,5==. Neredeyse bütün x̄ değerleri 100'ün çok yakınında.", set: { e: { noktalar: [[5.13,0.02],[5.23,0.09],[5.34,0.31],[5.45,0.88],[5.56,2.07],[5.67,4.05],[5.78,6.53],[5.89,8.7],[6,9.57],[6.11,8.7],[6.22,6.53],[6.33,4.05],[6.44,2.07],[6.55,0.88],[6.66,0.31],[6.77,0.09],[6.88,0.02]] }, y: { metin: "σ_x̄ = 2,5", x: 7.6, y: 8.3 } } }
          ] },
        { tip: "tablo", baslik: "σ = 20 iken n ve σ_x̄", head: ["n", "σ_x̄ = 20 ÷ √n"], rows: [["1", "20"], ["4", "10"], ["16", "5"], ["64", "2,5"]], not: "n'yi 4 katına çıkarmak SD'yi yarıya indirir; SD'yi 10 kat küçültmek için n'yi 100 katına çıkarmak gerekir." },
        { tip: "ornek", baslik: "Tersinden: kaç kişi gerekir?", durum: "σ = 20 olan bir popülasyonda x̄'nin SD'sinin 2 olması isteniyor. n kaç olmalı?",
          adimlar: ["20 ÷ √n = 2.", "√n = 20 ÷ 2 = 10.", "n = 10² = 100."],
          sonuc: "==n = 100== kişilik örneklem gerekir." }
      ]
    },
    {
      baslik: "Koşullar: Random, 10% ve şekil",
      kisa: "Rastgele, n ≤ N ÷ 10 ve normal popülasyon ya da n ≥ 30.",
      bloklar: [
        { tip: "liste", maddeler: [
            { ikon: "🎯", baslik: "Random", metin: "Rastgele örneklem ya da randomized experiment." },
            { ikon: "🔟", baslik: "10%", metin: "Çekimsiz seçimde n ≤ N ÷ 10; gözlemler yaklaşık bağımsız olsun." },
            { ikon: "🔔", baslik: "Normal / Large sample", metin: "Popülasyon normal (her n) ya da n ≥ 30 (CLT); çok çarpıksa daha büyük n." }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Koşullar *sağlanıyor*", maddeler: ["Rastgele seçim", "n ≤ N ÷ 10", "Normal popülasyon ya da n ≥ 30"] },
          sag: { ikon: "⚠️", baslik: "Bir koşul *bozuk*", maddeler: ["Rastgele değil", "n > N ÷ 10", "Çarpık popülasyon ve küçük n"] },
          oyun: [
            { metin: "Okulda 200 öğrenci var; rastgele 36 öğrenci seçildi.", cevap: "sag", neden: "10%: 36 > 0,10 × 200 = 20." },
            { metin: "5.000 şişelik bir günde normal dağılan dolum miktarından rastgele 9 şişe.", cevap: "sol", neden: "Normal popülasyon, 9 ≤ 500, rastgele: tamam." },
            { metin: "Güçlü sağa çarpık, çok büyük bir popülasyondan rastgele n = 8.", cevap: "sag", neden: "Çarpık popülasyon ve n küçük: x̄ normal olmayabilir." },
            { metin: "Şekli bilinmeyen çok büyük bir popülasyondan rastgele n = 50.", cevap: "sol", neden: "n ≥ 30: CLT; 10% ve random de tamam." },
            { metin: "Sınıfın ilk sırada oturan 10 öğrencisi.", cevap: "sag", neden: "Rastgele değil." }
          ] },
        { tip: "tuzak", baslik: "σ ÷ √n yerine σ ÷ n", metin: "Kare kök payda kalır.", yanlis: "σ = 20, n = 25: σ_x̄ = 20 ÷ 25 = 0,8.", dogru: "σ_x̄ = 20 ÷ √25 = 20 ÷ 5 = 4." }
      ]
    },
    {
      baslik: "Çözümlü örnek: su şişesi",
      kisa: "Ortalama, tek gözlemden çok daha az oynar; olasılık buna göre değişir.",
      bloklar: [
        { tip: "ornek", baslik: "Ortalama 497 ml'nin altında mı?", durum: "Bir dolum makinesi şişelere ortalama 500 ml su koyuyor, σ = 6 ml, dolum miktarı yaklaşık normal. Bir günde binlerce şişe dolduruluyor ve 9 şişe rastgele seçiliyor. 9 şişenin ortalamasının 497 ml'nin altında olma olasılığı ile tek bir şişenin 497 ml'nin altında olma olasılığı nedir?",
          adimlar: ["x̄: μ_x̄ = 500; σ_x̄ = 6 ÷ √9 = 2.", "Koşullar: rastgele; 10% ✓ (9 ≪ binlerce); popülasyon normal → x̄ normal (n küçük bile olsa).", "x̄ için z = (497 − 500) ÷ 2 = −1,5; P(Z < −1,5) = 0,0668.", "Tek şişe için z = (497 − 500) ÷ 6 = −0,5; P(Z < −0,5) = 1 − 0,6915 = 0,3085."],
          sonuc: "Ortalama için ==≈ 0,067==, tek şişe için ==≈ 0,31==. Ortalamalar, tek gözlemden çok daha az oynar." },
        { tip: "grafik", baslik: "Tek şişe mi, 9 şişenin ortalaması mı?", xlabel: "Dolum miktarı (ml)", ylabel: "", xmax: 12, ymax: 10,
          xticks: [{ v: 0, label: "485" }, { v: 2, label: "490" }, { v: 4, label: "495" }, { v: 6, label: "500" }, { v: 8, label: "505" }, { v: 10, label: "510" }, { v: 12, label: "515" }],
          ogeler: [
            { id: "e1", tip: "egri", renk: 0, etiket: "", noktalar: [[0.02,0.13],[0.77,0.28],[1.52,0.52],[2.26,0.89],[3.01,1.38],[3.76,1.93],[4.51,2.46],[5.25,2.85],[6,2.99],[6.75,2.85],[7.5,2.46],[8.24,1.93],[8.99,1.38],[9.74,0.89],[10.49,0.52],[11.23,0.28],[11.98,0.13]] },
            { id: "l1", tip: "yazi", x: 9.8, y: 2.2, metin: "tek şişe" },
            { id: "e2", tip: "egri", renk: 1, etiket: "", gizli: true, noktalar: [[3.2,0.02],[3.55,0.08],[3.9,0.29],[4.25,0.82],[4.6,1.94],[4.95,3.79],[5.3,6.12],[5.65,8.16],[6,8.98],[6.35,8.16],[6.7,6.12],[7.05,3.79],[7.4,1.94],[7.75,0.82],[8.1,0.29],[8.45,0.08],[8.8,0.02]] },
            { id: "l2", tip: "yazi", x: 8.2, y: 8, metin: "x̄ (n = 9)", gizli: true },
            { id: "c", tip: "cizgi", renk: 3, kesik: true, from: [4.8, 0], to: [4.8, 9.5], etiket: "497", gizli: true },
            { id: "a1", tip: "alan", renk: 0, gizli: true, noktalar: [[0.02,0],[0.02,0.13],[0.42,0.2],[0.82,0.29],[1.22,0.41],[1.61,0.56],[2.01,0.75],[2.41,0.98],[2.81,1.24],[3.21,1.52],[3.61,1.82],[4,2.12],[4.4,2.4],[4.8,2.64],[4.8,0]] },
            { id: "a2", tip: "alan", renk: 1, gizli: true, noktalar: [[3.2,0],[3.2,0.02],[3.33,0.03],[3.47,0.06],[3.6,0.1],[3.73,0.16],[3.87,0.26],[4,0.39],[4.13,0.59],[4.27,0.86],[4.4,1.21],[4.53,1.67],[4.67,2.24],[4.8,2.91],[4.8,0]] },
            { id: "y1", tip: "yazi", x: 2, y: 1.2, metin: "≈ 0,31", gizli: true },
            { id: "y2", tip: "yazi", x: 3.6, y: 4, metin: "≈ 0,07", gizli: true }
          ],
          durumlar: [
            { metin: "Tek bir şişenin dolum miktarı: mean 500, SD 6 ml." },
            { metin: "9 şişenin ortalaması: mean 500, SD 6 ÷ √9 = 2 ml. ==Aynı merkez, çok daha dar.==", goster: ["e2", "l2"] },
            { metin: "497 ml, tek şişede mean'den 0,5 SD, ortalamada ise 1,5 SD aşağıda.", goster: ["c"] },
            { metin: "497'nin solundaki alanlar: tek şişe ≈ 0,31, ortalama ≈ 0,07. ==Ortalamada uç sonuçlar çok nadir.==", goster: ["a1", "a2", "y1", "y2"] }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "x̄'nin sampling distribution'ının mean'i μ_x̄ = μ (yansız); SD'si σ_x̄ = σ ÷ √n.",
            "n'yi 4 katına çıkarmak SD'yi yarıya indirir; SD değişir, merkez değişmez.",
            "Koşullar: Random, 10% (n ≤ N ÷ 10) ve şekil: popülasyon normal (her n) ya da n ≥ 30 (CLT).",
            "Olasılık: z = (x̄ − μ) ÷ (σ ÷ √n); tablo ya da normalcdf ile alanı bul, ‘büyüktür’ için 1'den çıkar.",
            "Tek gözlem için z = (x − μ) ÷ σ; ortalama için payda σ ÷ √n'dir. İkisini karıştırma.",
            "σ bilinmiyorsa s ile hesaplanan s ÷ √n'e *standard error* denir (ilerleyen ünitelerde).",
            "Cevabı bağlamla yaz: ‘n kişilik rastgele bir örneklemin ortalamasının … olma olasılığı yaklaşık …’."
          ] }
      ]
    }
  ],
  sorular: [
    { q: "Bir popülasyonun mean'i 100, standard deviation'ı 20'dir. Bu popülasyondan rastgele n = 25 kişilik bir örneklem alınıyor. x̄'nin sampling distribution'ının standard deviation'ı kaçtır? (Popülasyon çok büyük.)",
      opts: ["0,8", "4", "5", "20"],
      a: 1,
      why: "σ_x̄ = σ ÷ √n = 20 ÷ √25 = 20 ÷ 5 = 4. 0,8, n ile bölmenin (20 ÷ 25) sonucu; 20 ise n = 1 iken geçerli olan değerdir." },
    { q: "Bir popülasyondan n = 16 kişilik örneklemler alınırken x̄'nin standard deviation'ı s₁'dir. Örneklem büyüklüğü n = 64 yapılırsa x̄'nin standard deviation'ı nasıl değişir?",
      opts: ["4 katına çıkar.", "2 katına çıkar.", "Yarıya iner.", "Dörtte birine iner."],
      a: 2,
      why: "σ_x̄ = σ ÷ √n; n 4 katına çıkınca √n 2 katına çıkar ve SD yarıya iner. D, SD'nin n ile ters orantılı olduğunu sanmaktır." },
    { q: "Bir makarna fabrikasında paket ağırlığı yaklaşık normal: μ = 500 g, σ = 10 g. Çok büyük üretimden rastgele 4 paket seçiliyor. Bu 4 paketin ortalama ağırlığının 505 g'dan büyük olma olasılığı yaklaşık kaçtır?",
      opts: ["0,1587", "0,3085", "0,8413", "0,0228"],
      a: 0,
      why: "σ_x̄ = 10 ÷ √4 = 5; z = (505 − 500) ÷ 5 = 1; P(Z > 1) = 1 − 0,8413 = 0,1587. 0,3085, σ_x̄ yerine σ = 10 kullanmanın sonucudur (z = 0,5); 0,8413 sol kuyruktur." },
    { q: "Bir sınıf düzeyinde 250 öğrenci var. Bu düzeyden rastgele 40 öğrenci seçilip bir değişkenin ortalaması alınıyor ve popülasyonun şekli bilinmiyor. Hangi koşul sağlanmaz?",
      opts: ["Rastgele seçim", "10% koşulu (n ≤ N ÷ 10)", "n ≥ 30 koşulu", "Hiçbiri; üç koşul da sağlanır."],
      a: 1,
      why: "10% koşulu: 0,10 × 250 = 25 ve n = 40 > 25, bozuk. n = 40 ≥ 30 sağlanır; seçim rastgele olduğu için random da tamam. En çekici yanlış şık C: n ≥ 30 sağlandığı için yeterli sanılır." },
    { q: "Bir araştırmacı farklı n değerleriyle çok sayıda rastgele örneklem çekip x̄ değerlerinin standard deviation'ını tabloda özetledi. Popülasyonun standard deviation'ı (σ) yaklaşık kaçtır?",
      fig: { type: "table", caption: "x̄ değerlerinin SD'si (benzetim)", head: ["n", "x̄'nin SD'si"], rows: [["5", "8,9"], ["20", "4,5"], ["80", "2,2"]] },
      opts: ["10", "15", "40", "20"],
      a: 3,
      why: "σ ≈ σ_x̄ × √n: 8,9 × √5 ≈ 19,9; 4,5 × √20 ≈ 20,1; 2,2 × √80 ≈ 19,7. Üç satır da σ ≈ 20 verir. En çekici yanlış şık 10: tablodaki SD’leri √n ile çarpmadan, değerlerin ortasına bakarak tahmin etmek." }
  ]
};
