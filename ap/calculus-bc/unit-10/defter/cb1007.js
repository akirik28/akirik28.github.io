/* Kitpath not defteri · cb1007 · AP Calculus BC Unit 10 (videosuz). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb1007",
  amac: "Bu konu oran testini (*ratio test*) anlatıyor: bir serinin ardışık terimlerinin oranına bakarak yakınsak mı ıraksak mı olduğunu bulursun. Faktöriyelli ve üstel terimlerde neden çok işe yaradığını, L = 1 çıkınca neden sonuç vermediğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Fikir: ardışık terimler birbirinin kaç katı?",
      kisa: "Oran 1'in altında kalıyorsa terimler geometrik hızda sönüyor demektir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "|aₙ₊₁ / aₙ|", alt: "ardışık terimlerin oranı" }, "→", { t: "L", alt: "n sonsuza giderken limit" }], aciklama: "Geometrik seride bu oran sabit r'dir ve |r| < 1 ise seri yakınsar. Oran testi bu fikri genelleştirir: ==oran L'ye giderse, terimler yaklaşık olarak L oranlı geometrik seri gibi davranır.==" },
        { tip: "grafik", baslik: "Oranlar: Σ n/2ⁿ ve Σ n!/2ⁿ", xlabel: "n", ylabel: "aₙ₊₁ / aₙ", xmax: 9, ymax: 5, xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "a1", tip: "nokta", renk: 0, x: 1, y: 1, gizli: true },
            { id: "a2", tip: "nokta", renk: 0, x: 2, y: 0.75, gizli: true },
            { id: "a3", tip: "nokta", renk: 0, x: 3, y: 0.6667, gizli: true },
            { id: "a4", tip: "nokta", renk: 0, x: 4, y: 0.625, gizli: true },
            { id: "a5", tip: "nokta", renk: 0, x: 5, y: 0.6, gizli: true },
            { id: "a6", tip: "nokta", renk: 0, x: 6, y: 0.5833, gizli: true },
            { id: "a7", tip: "nokta", renk: 0, x: 7, y: 0.5714, gizli: true },
            { id: "a8", tip: "nokta", renk: 0, x: 8, y: 0.5625, gizli: true },
            { id: "b1", tip: "nokta", renk: 2, x: 1, y: 1, gizli: true },
            { id: "b2", tip: "nokta", renk: 2, x: 2, y: 1.5, gizli: true },
            { id: "b3", tip: "nokta", renk: 2, x: 3, y: 2, gizli: true },
            { id: "b4", tip: "nokta", renk: 2, x: 4, y: 2.5, gizli: true },
            { id: "b5", tip: "nokta", renk: 2, x: 5, y: 3, gizli: true },
            { id: "b6", tip: "nokta", renk: 2, x: 6, y: 3.5, gizli: true },
            { id: "b7", tip: "nokta", renk: 2, x: 7, y: 4, gizli: true },
            { id: "b8", tip: "nokta", renk: 2, x: 8, y: 4.5, gizli: true },
            { id: "one", tip: "cizgi", renk: 1, kesik: true, from: [0, 1], to: [9, 1], etiket: "1", gizli: true },
            { id: "half", tip: "cizgi", renk: 0, kesik: true, from: [0, 0.5], to: [9, 0.5], etiket: "L = ½", gizli: true }
          ],
          durumlar: [
            { metin: "Kritik çizgi y = 1. Oran bunun altında kalırsa terimler küçülüyor; üstüne çıkarsa büyüyor.", goster: ["one"] },
            { metin: "aₙ = n/2ⁿ: oran (n+1)/(2n). n = 1, 2, 3, 4 için 1; 0,75; 0,67; 0,63.", goster: ["a1", "a2", "a3", "a4"] },
            { metin: "n = 5 … 8: oran 0,5'e yaklaşıyor. ==L = ½ < 1==: seri yakınsar.", goster: ["a5", "a6", "a7", "a8", "half"] },
            { metin: "Şimdi aₙ = n!/2ⁿ: oran (n+1)/2. n = 1 … 4 için 1; 1,5; 2; 2,5.", goster: ["b1", "b2", "b3", "b4"] },
            { metin: "n = 5 … 8: oran 3; 3,5; 4; 4,5 ve büyümeye devam ediyor. ==L = ∞ > 1==: seri ıraksar.", goster: ["b5", "b6", "b7", "b8"] }
          ] }
      ]
    },
    {
      baslik: "Oran testi: L < 1, L > 1, L = 1",
      kisa: "L < 1 yakınsar, L > 1 ıraksar, L = 1 hiçbir şey söylemez.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "📈", terim: "Ratio test", tr: "oran testi", tanim: "L = lim |aₙ₊₁ / aₙ| olsun. L < 1 ise seri yakınsar (mutlak), L > 1 ya da L = ∞ ise ıraksar, L = 1 ise test sonuç vermez.", ornek: "Σ 3ⁿ/n! için L = 0 < 1, seri yakınsar." }] },
        { tip: "tablo", baslik: "Oran testinin üç sonucu", head: ["L", "Sonuç"], rows: [["L < 1", "seri yakınsar"], ["L > 1 (ya da ∞)", "seri ıraksar"], ["L = 1", "test sonuç vermez"]], vurgu: 2 },
        { tip: "tuzak", metin: "L = 1 çıkınca \"seri ıraksar\" ya da \"yakınsar\" demek yanlıştır; hem yakınsayan hem ıraksayan serilerde L = 1 olabilir.", yanlis: "L = 1 çıktı, seri ıraksar.", dogru: "Σ 1/n (ıraksar) ve Σ 1/n² (yakınsar) ikisinde de L = 1. Başka bir test kullan." }
      ]
    },
    {
      baslik: "Faktöriyel: (n+1)! = (n+1)·n!",
      kisa: "Faktöriyelli oranlarda (n+1)! = (n+1)·n! ile sadeleştir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [{ ikon: "❗", terim: "Factorial", tr: "faktöriyel", tanim: "n! = n · (n−1) · … · 2 · 1. Bir sonrakine geçerken (n+1)! = (n+1) · n! olur; oranda n! sadeleşir.", ornek: "5! = 120 ve 6! = 6 · 5!." }] },
        { tip: "ornek", baslik: "Σ 3ⁿ / n! (n = 1'den ∞'a)", durum: "Oran testiyle yakınsak mı?", adimlar: ["aₙ₊₁/aₙ = [3ⁿ⁺¹/(n+1)!] · [n!/3ⁿ].", "3ⁿ⁺¹/3ⁿ = 3 ve n!/(n+1)! = 1/(n+1).", "Oran = 3/(n+1) → 0 = L."], sonuc: "L = 0 < 1: seri yakınsar" },
        { tip: "ornek", baslik: "Σ n! / 2ⁿ (n = 1'den ∞'a)", durum: "Oran testiyle yakınsak mı?", adimlar: ["aₙ₊₁/aₙ = [(n+1)!/2ⁿ⁺¹] · [2ⁿ/n!].", "(n+1)!/n! = n+1 ve 2ⁿ/2ⁿ⁺¹ = ½.", "Oran = (n+1)/2 → ∞ = L."], sonuc: "L = ∞ > 1: seri ıraksar" }
      ]
    },
    {
      baslik: "Üstel ve polinom çarpanlı terimler",
      kisa: "Polinom çarpanın oranı 1'e gider; üstel kısım L'yi belirler.",
      bloklar: [
        { tip: "adimlar", baslik: "Oran testi adımları", adimlar: [{ baslik: "aₙ₊₁'i yaz", metin: "aₙ'de n yerine n+1 koy." }, { baslik: "|aₙ₊₁/aₙ| kur ve sadeleştir", metin: "Aynı çarpanları, kuvvetleri, faktöriyelleri götür." }, { baslik: "Limiti al", metin: "n → ∞ iken L'yi bul." }, { baslik: "L'yi 1 ile kıyasla", metin: "L < 1 yakınsar, L > 1 ıraksar, L = 1 sonuç yok." }] },
        { tip: "ornek", baslik: "Σ (−1)ⁿ · n² / 2ⁿ", durum: "Oran testi (işaret önemli mi?)", adimlar: ["|aₙ₊₁/aₙ| = [(n+1)²/2ⁿ⁺¹] · [2ⁿ/n²]. Mutlak değer (−1)'i götürür.", "= ½ · (n+1)²/n² = ½ · (1 + 1/n)².", "n → ∞: (1 + 1/n)² → 1, L = ½."], sonuc: "L = ½ < 1: seri yakınsar" },
        { tip: "ornek", baslik: "Σ 2ⁿ / n² (n = 1'den ∞'a)", durum: "Oran testi", adimlar: ["aₙ₊₁/aₙ = [2ⁿ⁺¹/(n+1)²] · [n²/2ⁿ].", "= 2 · n²/(n+1)² = 2 · (n/(n+1))².", "n → ∞: L = 2."], sonuc: "L = 2 > 1: seri ıraksar" }
      ]
    },
    {
      baslik: "Ne zaman oran testi?",
      kisa: "Faktöriyel ve üstel terimlerde oran testi; polinom oranlarda başka test.",
      bloklar: [
        { tip: "tablo", baslik: "Terimin biçimine göre test seçimi", head: ["aₙ biçimi", "Oran testi", "Örnek"], rows: [["cⁿ, n!, çarpımlar", "iyi çalışır", "Σ 5ⁿ/n!: L = 0"], ["nⁿ içeren", "iyi çalışır", "Σ n!/nⁿ: L = 1/e < 1, yakınsar"], ["n'in polinom ya da kök oranı", "hep L = 1", "Σ 1/(n² + 1): sonuç yok"]], not: "Polinom oranlarında p-serisi, karşılaştırma ya da integral testi kullan." },
        { tip: "ikili", sol: { ikon: "📈", baslik: "Oran testi uygun", maddeler: ["Faktöriyel ya da üstel (cⁿ) var"] }, sag: { ikon: "🧰", baslik: "Başka test", maddeler: ["Yalnız n'in kuvvetleri (polinom, kök)"] }, oyun: [{ metin: "Σ 5ⁿ / n!", cevap: "sol", neden: "Faktöriyel ve üstel: oran sadeleşir." }, { metin: "Σ 1/(n² + 1)", cevap: "sag", neden: "Polinom oranı: L = 1. Karşılaştırma ya da p-serisi." }, { metin: "Σ n³ / eⁿ", cevap: "sol", neden: "eⁿ üstel; oran e⁻¹'e gider." }, { metin: "Σ 1/√n", cevap: "sag", neden: "p-serisi (p = ½): ıraksar." }] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: ["Oran testi: L = lim |aₙ₊₁ / aₙ|.", "L < 1 yakınsar; L > 1 (ya da ∞) ıraksar; L = 1 sonuç vermez.", "L = 1 çıkınca seri hem yakınsayabilir hem ıraksayabilir (Σ 1/n ve Σ 1/n²).", "Faktöriyelde (n+1)! = (n+1)·n! ile sadeleştir.", "Mutlak değer işareti götürür: alterne serilerde de aynı oran kullanılır.", "Polinom ve kök oranlarında hep L = 1 çıkar; p-serisi ya da karşılaştırma kullan.", "Oran testi toplamı vermez; yalnızca yakınsaklık kararını verir."] }
      ]
    }
  ],
  sorular: [
    { q: "Oran testiyle Σ 4ⁿ / n! (n = 1'den ∞'a) serisi için hangisi doğrudur?", opts: ["Iraksar çünkü L = 4 > 1.", "Test sonuç vermez çünkü L = 1.", "Yakınsar çünkü L = 4.", "Yakınsar çünkü L = 0 < 1."], a: 3, why: "aₙ₊₁/aₙ = [4ⁿ⁺¹/(n+1)!]·[n!/4ⁿ] = 4/(n+1) → 0. L = 0 < 1: yakınsar. 4 sayısı oranın payıdır, limiti değil (A ve C)." },
    { q: "Σ aₙ serisinde |aₙ₊₁/aₙ| oranları aşağıdaki tabloda verilmiştir ve limit 1'dir. Hangisi doğrudur?", fig: { type: "table", head: ["n", "10", "100", "1000", "10000"], rows: [["|aₙ₊₁/aₙ|", "0,91", "0,99", "0,999", "0,9999"]], caption: "Oranlar" }, opts: ["Seri yakınsar çünkü oranlar hep 1'den küçük.", "Oran testi sonuç vermez (L = 1).", "Seri ıraksar çünkü oranlar 1'e yaklaşıyor.", "Seri 0,9999'a yakınsar."], a: 1, why: "Oranlar 1'den küçük olsa da limit L = 1; oran testi L = 1 iken sonuç vermez. Hem yakınsayan (Σ 1/n²) hem ıraksayan (Σ 1/n) serilerde böyle olur. Tek tek oranların 1'den küçük olması yetmez, limit önemlidir (A)." },
    { q: "Σ n · (2/3)ⁿ (n = 1'den ∞'a) serisi için oran testi hangi sonucu verir?", opts: ["Yakınsar; L = 2/3.", "Iraksar; L = 3/2.", "Sonuç vermez; L = 1.", "Iraksar çünkü n çarpanı büyüyor."], a: 0, why: "aₙ₊₁/aₙ = (n+1)/n · 2/3 → 1 · 2/3 = 2/3 < 1. n çarpanı oranı 1'e götürür, ıraksaklık getirmez (D)." },
    { q: "Σ n!/(2n)! (n = 1'den ∞'a) serisi için oran testi sonucu aşağıdakilerden hangisidir?", opts: ["Iraksar; L = ∞.", "Sonuç vermez; L = 1.", "Yakınsar; L = 0.", "Yakınsar; L = 1/4."], a: 2, why: "(2n+2)! = (2n+2)(2n+1)(2n)! ve (n+1)! = (n+1)·n!. Oran = (n+1)/[(2n+2)(2n+1)] = 1/[2(2n+1)] → 0. L = 0 < 1: yakınsar. 1/4 gibi bir değer çıkmaz." },
    { q: "Aşağıdaki serilerden hangisinde oran testi L = 1 verir ve bu nedenle yararsızdır?", opts: ["Σ 2ⁿ / n!", "Σ 1/(n² + 1)", "Σ n / 3ⁿ", "Σ n! / 10ⁿ"], a: 1, why: "Polinom oranlarında ((n²+1)/((n+1)²+1) → 1) her zaman L = 1 çıkar. Diğer seriler üstel/faktöriyel içerir: L = 0, 1/3 ve ∞ olur." }
  ]
};
