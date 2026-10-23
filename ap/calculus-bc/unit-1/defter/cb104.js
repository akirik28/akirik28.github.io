/* Kitpath not defteri · cb104 · 1.6–1.7 Cebirsel Teknikler ve Yöntem Seçimi
   Kaynak: ap-videolar/src/episodes/cb104 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb104",
  amac: "Bu konu yerine koyunca 0/0 çıkan limitleri nasıl çözeceğini anlatıyor. Çarpanlara ayırma, eşlenik, ortak payda ve mutlak değer gibi cebir araçlarını ve hangi limitte hangisini seçeceğini öğreneceksin.",
  bolumler: [
    {
      baslik: "İlk adım: yerine koy",
      kisa: "Önce yerine koy; sonuç sayı, k/0 ya da 0/0 olabilir.",
      bloklar: [
        { tip: "hikaye", ikon: "🎭", baslik: "Maske gibi 0/0",
          metin: "Hesap makinesine 0/0 yazarsan hata verir. Ama 0/0 bir maskedir: altında gerçek bir limit saklanıyor olabilir. Sınavda kimse sana hangi yöntemi kullanacağını söylemez; ifadeye bakıp karar vermek senin işin." },
        { tip: "adimlar", baslik: "Her limitte aynı sıra", adimlar: [
            { baslik: "Sayı çıktı", metin: "Örneğin 5/2: bitti, cevap o." },
            { baslik: "Sıfır olmayan sayı / 0", metin: "Fonksiyon patlıyor: sonsuz limit ya da limit yok; asimptot (Bölüm 8). Sadeleştirdikten sonra da k/0 kalıyorsa iki tarafın işaretine bak." },
            { baslik: "0/0", metin: "*Indeterminate form*: cevap değil, çalışmaya devam sinyali." }
          ] },
        { tip: "kavramlar", kartlar: [
            { ikon: "📥", terim: "Direct substitution", tr: "doğrudan yerine koyma", tanim: "Limitte ilk deneme: x yerine c yaz. Sayı çıkıyorsa limit odur.", ornek: "lim x→2 (x + 1)/(x + 3) = 3/5" },
            { ikon: "🎭", terim: "Indeterminate form", tr: "belirsiz biçim", tanim: "0/0 gibi, limit hakkında tek başına bilgi vermeyen biçim. Sadeleştirmeden karar verilmez.", ornek: "x = 3 için (x² − 9)/(x − 3) = 0/0, limit ise 6." }
          ] },
        { tip: "tuzak", metin: "0/0 gördüğünde \"limit yok\" ya da \"limit 0\" deme. Önce cebirle sadeleştir, sonra yeniden yerine koy.", yanlis: "Yerine koyunca 0/0 çıktı, limit yok.", dogru: "0/0 yalnızca daha çalışman gerektiğini söyler." }
      ]
    },
    {
      baslik: "Çarpanlara ayır: polinom ve küpler",
      kisa: "Ortak (x − c) çarpanını sadeleştir, sonra yerine koy.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧮", terim: "Factoring", tr: "çarpanlara ayırma", tanim: "Pay ve paydayı çarpanlarına ayırıp ortak (x − c) çarpanını sadeleştirmek. x ≠ c olduğu için bu sadeleştirme serbesttir.", ornek: "x² + x − 6 = (x + 3)(x − 2)" },
            { ikon: "🧊", terim: "Difference of cubes", tr: "küp farkı", tanim: "a³ − b³ = (a − b)(a² + ab + b²). Toplam için: a³ + b³ = (a + b)(a² − ab + b²).", ornek: "x³ + 8 = (x + 2)(x² − 2x + 4)" }
          ] },
        { tip: "grafik", baslik: "lim x→−3 (x² + x − 6)/(x² + 2x − 3); grafik 5 sağa kaydırıldı", xlabel: "x", ylabel: "f(x)", xmax: 5, ymax: 3,
          xticks: [{ v: 0, label: "−5" }, { v: 2, label: "−3" }, { v: 4, label: "−1" }], yticks: [{ v: 1, label: "1" }, { v: 1.25, label: "1,25" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 1.167], [1, 1.2], [2, 1.25], [3, 1.333], [4, 1.5], [5, 2]] },
            { id: "h", tip: "yazi", x: 2, y: 1.18, metin: "○" },
            { id: "L", tip: "nokta", x: 1, y: 1.2, renk: 1, gizli: true },
            { id: "R", tip: "nokta", x: 3, y: 1.333, renk: 2, gizli: true },
            { id: "y", tip: "cizgi", renk: 3, kesik: true, from: [0, 1.25], to: [2, 1.25], gizli: true },
            { id: "yt", tip: "yazi", x: 0.1, y: 1.4, metin: "limit = 5/4", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "x = −3 koyunca pay ve payda 0: delik var. f(x), x ≠ −3 için (x − 2)/(x − 1) ile aynı." },
            { metin: "Soldan x = −4 → f = 1,2. Sağdan x = −2 → f = 1,333.", goster: ["L", "R"] },
            { metin: "x = −3,1 → 1,244 ve x = −2,9 → 1,256. İkisi de 1,25'e yaklaşıyor.", set: { L: { x: 1.9, y: 1.244 }, R: { x: 2.1, y: 1.256 } } },
            { metin: "Limit = 5/4 = ==1,25==.", goster: ["y", "yt"] }
          ] },
        { tip: "ornek", baslik: "lim x→−3 (x² + x − 6)/(x² + 2x − 3)", durum: "Yerine koy: pay 9 − 3 − 6 = 0, payda 9 − 6 − 3 = 0; yani 0/0.",
          adimlar: [
            "Pay (x + 3)(x − 2), payda (x + 3)(x − 1) olarak ayrılır.",
            "(x + 3) sadeleşir; x ≠ −3 olduğu için serbest.",
            "Kalan (x − 2)/(x − 1) ifadesine −3 koy: (−5)/(−4)."
          ],
          sonuc: "Limit = ==5/4==." },
        { tip: "ornek", baslik: "lim x→1 (x³ − 1)/(x − 1)", durum: "Yerine koy: 0/0. Küp farkı formülü zamanı.",
          adimlar: [
            "x³ − 1 = (x − 1)(x² + x + 1).",
            "(x − 1) sadeleşir; kalan x² + x + 1.",
            "x = 1 koy: 1 + 1 + 1."
          ],
          sonuc: "Limit = ==3==." }
      ]
    },
    {
      baslik: "Eşlenikle çarp: köklü ifadeler",
      kisa: "Kökü eşlenikle çarparak yok et; pay x − c çarpanını verir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪞", terim: "Conjugate", tr: "eşlenik", tanim: "√a − b ifadesinin eşleniği √a + b'dir. Çarpınca kök kalkar: a − b².", ornek: "√x − 3 ile √x + 3." }
          ] },
        { tip: "formul", parcalar: [
            { t: "(√x − 3)", alt: "pay" }, "×",
            { t: "(√x + 3)", alt: "eşlenik" }, "=",
            { t: "x − 9", alt: "kök kalktı" }
          ], aciklama: "Pay ve paydayı aynı eşlenikle çarparsan değer değişmez; pay x − 9 olur ve paydadaki x − 9 ile sadeleşir." },
        { tip: "ornek", baslik: "lim x→9 (√x − 3)/(x − 9)", durum: "Yerine koy: (3 − 3)/(9 − 9) = 0/0; kök var, eşlenik.",
          adimlar: [
            "Pay ve paydayı (√x + 3) ile çarp.",
            "Pay iki kare farkı olur: (√x)² − 3² = x − 9.",
            "Paydadaki x − 9 ile sadeleşir; kalan 1/(√x + 3).",
            "9 koy: 1/(3 + 3)."
          ],
          sonuc: "Limit = ==1/6==." }
      ]
    },
    {
      baslik: "Ortak payda: kesirli kesir",
      kisa: "Üstteki kesirleri ortak paydada birleştir; x'ler sadeleşir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🍰", terim: "Common denominator", tr: "ortak payda", tanim: "Kesirli kesirde üstteki kesirleri tek kesir olarak birleştirmek için kullanılır.", ornek: "1/(x + 2) − 1/2 = (2 − (x + 2)) / (2(x + 2))" }
          ] },
        { tip: "ornek", baslik: "lim x→0 (1/(x + 2) − 1/2) / x", durum: "Yerine koy: (1/2 − 1/2)/0 = 0/0.",
          adimlar: [
            "Üstteki iki kesri ortak paydada birleştir: (2 − (x + 2)) / (2(x + 2)) = −x / (2(x + 2)).",
            "Hepsi x'e bölünüyor: x'ler sadeleşir, kalan −1 / (2(x + 2)).",
            "x = 0 koy: −1 / (2 · 2)."
          ],
          sonuc: "Limit = ==−1/4==." }
      ]
    },
    {
      baslik: "Mutlak değer ve parçalı fonksiyon: iki taraf ayrı",
      kisa: "Mutlak değer ve parçalı tanımda soldan ve sağdan ayrı hesapla.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📏", terim: "Absolute value", tr: "mutlak değer", tanim: "|x − c| = x − c (x > c) ve −(x − c) (x < c). Bu yüzden iki tarafa ayrı bakılır.", ornek: "|x − 3|/(x − 3): sağda 1, solda −1." },
            { ikon: "🧩", terim: "Piecewise function", tr: "parçalı fonksiyon", tanim: "Farklı aralıklarda farklı formülle tanımlı fonksiyon. Soldan limit için sol formülü, sağdan için sağ formülü kullan.", ornek: "x < 1 için x² + 1, x ≥ 1 için 3x − 1." },
            { ikon: "↔️", terim: "One-sided limit", tr: "tek taraflı limit", tanim: "Yalnız soldan ya da sağdan yaklaşırken hesaplanan limit. İki tarafı eşit olmayan limit yoktur.", ornek: "Soldan −1, sağdan 1: limit yok." }
          ] },
        { tip: "grafik", baslik: "lim x→3 |x − 3|/(x − 3); kesikli çizgi y = 0 ekseni", xlabel: "x", ylabel: "y", xmax: 6, ymax: 4,
          xticks: [{ v: 3, label: "3" }], yticks: [{ v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }],
          ogeler: [
            { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [6, 2] },
            { id: "r", tip: "cizgi", renk: 0, from: [3, 3], to: [6, 3], gizli: true },
            { id: "rh", tip: "yazi", x: 3, y: 2.91, metin: "○", gizli: true },
            { id: "l", tip: "cizgi", renk: 1, from: [0, 1], to: [3, 1], gizli: true },
            { id: "lh", tip: "yazi", x: 3, y: 0.91, metin: "○", gizli: true },
            { id: "j", tip: "cizgi", renk: 2, kesik: true, from: [3, 1], to: [3, 3], gizli: true }
          ],
          durumlar: [
            { metin: "x = 3 koyunca 0/0. Mutlak değerde iki tarafa ayrı bak." },
            { metin: "Sağda x − 3 pozitif: |x − 3| = x − 3, kesir 1. Sağdan limit 1.", goster: ["r", "rh"] },
            { metin: "Solda x − 3 negatif: |x − 3| = −(x − 3), kesir −1. Soldan limit −1.", goster: ["l", "lh"] },
            { metin: "−1 ≠ 1: iki basamaklı merdiven. ==Limit yok.==", goster: ["j"] }
          ] },
        { tip: "grafik", baslik: "f(x) = x² + 1 (x < 1) ve 3x − 1 (x ≥ 1); grafik 1 sağa kaydırıldı", xlabel: "x", ylabel: "f(x)", xmax: 4, ymax: 8,
          xticks: [{ v: 0, label: "−1" }, { v: 1, label: "0" }, { v: 2, label: "1" }, { v: 3, label: "2" }, { v: 4, label: "3" }], yticks: [{ v: 2, label: "2" }, { v: 5, label: "5" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 8] },
            { id: "pa", tip: "egri", renk: 0, noktalar: [[0, 2], [0.5, 1.25], [1, 1], [1.5, 1.25], [2, 2]] },
            { id: "ln", tip: "cizgi", renk: 1, from: [2, 2], to: [4, 8], gizli: true },
            { id: "pt", tip: "nokta", x: 2, y: 2, renk: 2, etiket: "(1, 2)", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "x < 1 iken parabol: x² + 1. Soldan 1'e yaklaşırken bu formülü kullan." },
            { metin: "x ≥ 1 iken doğru: 3x − 1. Sağdan yaklaşırken bu formülü kullan.", goster: ["ln"] },
            { metin: "Soldan: 1² + 1 = 2. Sağdan: 3 · 1 − 1 = 2. İki taraf eşit: ==limit 2==. Eşitliğin hangi tarafta olduğu önemli değil.", goster: ["pt"] }
          ] }
      ]
    },
    {
      baslik: "Limit var olsun: k'yı bul",
      kisa: "Payda sıfıra gidiyor ve limit varsa, pay da sıfıra gitmelidir.",
      bloklar: [
        { tip: "formul", parcalar: [
            { t: "payda → 0", alt: "x − 2 → 0" }, "+",
            { t: "limit var", alt: "sonlu bir sayı" }, "⇒",
            { t: "pay → 0", alt: "yoksa ∞'a kaçar" }
          ], aciklama: "Önce k'yı pay = 0 koşuluyla bul, sonra payı çarpanlarına ayırıp limiti hesapla." },
        { tip: "ornek", baslik: "lim x→2 (x² + kx − 10)/(x − 2) var. k ve limit kaç?", durum: "Payda 2 − 2 = 0'a gidiyor.",
          adimlar: [
            "Limit olsun diye pay da 0'a gitmeli: 2² + 2k − 10 = 0.",
            "4 + 2k − 10 = 0, yani k = 3.",
            "Pay x² + 3x − 10 = (x + 5)(x − 2); (x − 2) sadeleşir.",
            "Kalan x + 5; x = 2 koy: 7."
          ],
          sonuc: "k = ==3== ve limit = ==7==." }
      ]
    },
    {
      baslik: "Yöntem seçimi: önce yerine koy",
      kisa: "İfadenin biçimine bak: yerine koy, olmazsa uygun aleti seç.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🧰", terim: "Selecting procedures", tr: "yöntem seçimi", tanim: "Önce yerine koyarsın; 0/0 çıkarsa ifadenin biçimine göre çarpan, eşlenik, ortak payda ya da tek taraflı hesap seçersin.", ornek: "Kök varsa eşlenik; kesir içinde kesir varsa ortak payda." }
          ] },
        { tip: "tablo", baslik: "Hangi alet?", head: ["0/0 çıkan ifade", "Alet"],
          rows: [["Polinom ya da rasyonel", "Çarpanlara ayır; küp farkını kullan"], ["Karekökler", "Eşlenikle çarp"], ["Kesirli kesir", "Ortak payda"], ["Mutlak değer", "Soldan ve sağdan ayrı hesapla"], ["Parçalı fonksiyon", "Her taraf için kendi formülü kullan"]] },
        { tip: "ikili", sol: { ikon: "📥", baslik: "Yerine koy yeter", maddeler: ["Sayı çıkıyor", "Alet gerekmez"] },
          sag: { ikon: "🔧", baslik: "Alet gerekir", maddeler: ["0/0 çıkıyor", "Biçime göre alet seç"] },
          oyun: [
            { metin: "lim x→2 (x + 1)/(x + 3)", cevap: "sol", neden: "Yerine koy: 3/5." },
            { metin: "lim x→0 (√(x + 4) − 2)/x", cevap: "sag", neden: "0/0 ve kök var: eşlenik. Sonuç 1/4." },
            { metin: "lim x→−1 (x² − 1)/(x + 1)", cevap: "sag", neden: "0/0, polinom: çarpanlara ayır, x − 1 kalır: −2." },
            { metin: "lim x→2 (x² + 5x)", cevap: "sol", neden: "Polinom: 4 + 10 = 14." },
            { metin: "lim x→3 |x − 3|/(x − 3)", cevap: "sag", neden: "0/0 ve mutlak değer: iki taraf −1 ve 1, limit yok." }
          ] }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Önce yerine koy; 0/0 çıkarsa biçime göre aleti seç.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Önce yerine koy: sayı çıkarsa cevap o; sıfır olmayan sayı / 0 asimptot işareti; 0/0 ise *indeterminate form*.",
            "0/0 limit yok demek değildir; sadeleştirmeden karar verme. Sadeleştirme x ≠ c olduğu için serbesttir.",
            "Polinomda çarpanlara ayır, küp farkı için a³ − b³ = (a − b)(a² + ab + b²) formülünü kullan.",
            "Köklü ifadede eşlenikle çarp; kesirli kesirde ortak payda kullan.",
            "Mutlak değer ve parçalı fonksiyonda iki tarafı ayrı hesapla (|x − c| = −(x − c), x < c iken).",
            "Limit var ve payda sıfıra gidiyorsa pay da sıfıra gitmeli: önce k, sonra limit.",
            "Sadeleştirdikten sonra hâlâ k/0 kalıyorsa iki tarafın işaretine bak (Bölüm 8)."
          ] }
      ]
    }
  ]
};
