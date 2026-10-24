/* Kitpath not defteri · cb303 · 3.1-3 Tablo ve Grafikle Zincir Kuralı
   Kaynak: ap-videolar/src/episodes/cb303 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb303",
  amac: "Bu konu zincir kuralının tablo ve grafikle verilen sorularda nasıl kullanıldığını anlatıyor. Formül yokken doğru hücreleri ya da doğru doğru parçasının eğimini içten dışa doğru okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Tabloyu okumak: yükseklik ve eğim",
      kisa: "Değer sütunu yükseklik, türev sütunu eğim verir.",
      bloklar: [
        { tip: "tablo", baslik: "Bu bölümün tablosu", head: ["x", "f(x)", "f′(x)", "g(x)", "g′(x)"],
          rows: [["1", "3", "−2", "2", "4"], ["2", "4", "5", "3", "−3"], ["3", "1", "3", "4", "2"], ["4", "2", "−1", "1", "6"]],
          vurgu: 1, not: "Bu soru tipi AP sınavında hem çoktan seçmeli hem açık uçlu kısımda neredeyse her yıl çıkar. Bu tabloyu bölüm boyunca kullanacağız." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🗂️", terim: "Table of values", tr: "değer tablosu", tanim: "Seçilmiş x değerlerinde f, f′, g ve g′ değerlerini veren tablo. Formül yoktur; doğru hücreyi bulursun.", ornek: "f(2) = 4 ve f′(2) = 5 aynı satırdan okunur." },
            { ikon: "📐", terim: "Slope", tr: "eğim", tanim: "Teğetin dikliği. Türev sütunu eğimi verir; değer sütunu ise eğrinin yüksekliğini.", ornek: "f′(2) = 5: (2, 4) noktasında sağa 1 giderken 5 yükselirsin." }
          ] },
        { tip: "grafik", baslik: "f(2) = 4 ve f′(2) = 5 grafikte ne demek?", xlabel: "x", ylabel: "y", xmax: 5, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }], yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "p", tip: "nokta", renk: 0, x: 2, y: 4, etiket: "(2, 4)", kilavuz: true },
            { id: "t", tip: "cizgi", renk: 2, from: [1.6, 2], to: [2.4, 6], etiket: "eğim 5", gizli: true }
          ],
          durumlar: [
            { metin: "f(2) = 4: eğri x = 2'de 4 yüksekliğinden geçer, yani (2, 4) noktasından." },
            { metin: "f′(2) = 5: aynı noktadaki teğetin eğimi 5; sağa 1, yukarı 5.", goster: ["t"] }
          ] }
      ]
    },
    {
      baslik: "İçten dışa okuma sırası",
      kisa: "Önce için değeri, sonra dış türev o değerde, sonra iç türev.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪆", terim: "Composite function", tr: "bileşke fonksiyon", tanim: "Bir fonksiyonun içine başka bir fonksiyon konmuş hali: h(x) = f(g(x)).", ornek: "h(1) = f(g(1)) = f(2) = 4." },
            { ikon: "🎁", terim: "Inner function", tr: "iç fonksiyon", tanim: "Önce uygulanan fonksiyon (g). Önce değerini bul.", ornek: "g(1) = 2: dış türev x = 2'de okunacak." },
            { ikon: "📦", terim: "Outer function", tr: "dış fonksiyon", tanim: "En son uygulanan fonksiyon (f). Türevi, için değerinde okunur.", ornek: "f′(g(1)) = f′(2) = 5." },
            { ikon: "⛓️", terim: "Chain rule", tr: "zincir kuralı", tanim: "h′(x) = f′(g(x)) · g′(x): dış türev iç değerde, çarpı iç türev x'te.", ornek: "h′(1) = f′(2) · g′(1)." }
          ] },
        { tip: "ornek", baslik: "h(x) = f(g(x))", durum: "h′(1) = ? (tablodaki değerlerle)",
          adimlar: [
            "Kural: h′(x) = f′(g(x)) · g′(x).",
            "İçten başla: g(1) tabloda 2.",
            "Dış türevi o noktada oku: f′(2) = 5.",
            "İç türevi x = 1'de oku: g′(1) = 4.",
            "Çarp: 5 · 4."
          ], sonuc: "h′(1) = 20" }
      ]
    },
    {
      baslik: "İki klasik yanlış",
      kisa: "İçe değer girer, türev girmez; iç türevi atlama.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Doğru adım", maddeler: ["İçe değer: f′(g(1)) = f′(2)", "Sonra iç türevle çarp: · g′(1)"] },
          sag: { ikon: "⚠️", baslik: "Tuzak adım", maddeler: ["İçe türev koymak: f′(g′(1))", "İçi hiç hesaplamamak: f′(1) · g′(1)"] },
          oyun: [
            { metin: "f′(g′(1)) = f′(4) = −1", cevap: "sag", neden: "f′'nün içine g′ değil, g'nin değeri girer." },
            { metin: "f′(2) · g′(1) = 5 · 4", cevap: "sol", neden: "İçe g(1) = 2 girmiş, sonra iç türevle çarpılmış." },
            { metin: "f′(1) · g′(1) = (−2) · 4 = −8", cevap: "sag", neden: "İç hesaplanmadan f′(1) okunmuş: yanlış." },
            { metin: "g(1) = 2 bulup f′(2)'yi okumak", cevap: "sol", neden: "Doğru sıra: önce iç değer, sonra dış türev." }
          ] },
        { tip: "tuzak", metin: "İkisi de şıklarda seni bekler: f′(g′(1)) = −1 ve f′(1) · g′(1) = −8. Doğru cevap 20.", yanlis: "h′(1) = f′(g′(1)) = −1 ya da f′(1) · g′(1) = −8.", dogru: "h′(1) = f′(g(1)) · g′(1) = f′(2) · 4 = 20: içe değeri koy, türevi değil." }
      ]
    },
    {
      baslik: "Kuvvet, kök ve kesir tabloda",
      kisa: "Kuvvet, kök ve 1/g tiplerinde de içten dışa oku.",
      bloklar: [
        { tip: "ornek", baslik: "k(x) = [g(x)]³ ve m(x) = √f(x)", durum: "k′(2) ve m′(2) = ?",
          adimlar: [
            "k′(x) = 3[g(x)]² · g′(x). g(2) = 3 ve g′(2) = −3.",
            "k′(2) = 3 · 3² · (−3) = −81.",
            "m′(x) = f′(x) / (2√f(x)). f(2) = 4 ve f′(2) = 5.",
            "m′(2) = 5 / (2 · 2) = 5/4."
          ], sonuc: "k′(2) = −81 ve m′(2) = 5/4" },
        { tip: "ornek", baslik: "n(x) = 1/g(x)", durum: "n′(3) = ?",
          adimlar: [
            "Bölüm kuralı gerekmez: n(x) = [g(x)]⁻¹.",
            "n′(x) = −[g(x)]⁻² · g′(x) = −g′(x) / [g(x)]².",
            "g(3) = 4 ve g′(3) = 2 değerlerini yerine koy.",
            "n′(3) = −2 / 16 = −1/8. g artıyorsa 1/g azalır: eksi işareti bundan."
          ], sonuc: "n′(3) = −1/8" }
      ]
    },
    {
      baslik: "Sıra önemli: f(g) ile g(f)",
      kisa: "Aynı iki fonksiyon, farklı sırada, farklı türev verir.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "🔵", baslik: "g(f(x)): içte f", maddeler: ["(g∘f)′(3) = g′(f(3)) · f′(3)", "f(3) = 1 → 4 · 3 = 12"] },
          sag: { ikon: "🟠", baslik: "f(g(x)): içte g", maddeler: ["(f∘g)′(3) = f′(g(3)) · g′(3)", "g(3) = 4 → (−1) · 2 = −2"] },
          oyun: [
            { metin: "Önce f(3) = 1 bulunur.", cevap: "sol", neden: "İçteki f olduğu için önce f'nin değeri gerekir." },
            { metin: "Önce g(3) = 4 bulunur.", cevap: "sag", neden: "İçteki g olduğu için önce g'nin değeri gerekir." },
            { metin: "g′(1) · f′(3) = 4 · 3 = 12", cevap: "sol", neden: "g(f(3)) = g(1): dış türev g′(1)." },
            { metin: "f′(4) · g′(3) = (−1) · 2 = −2", cevap: "sag", neden: "f(g(3)) = f(4): dış türev f′(4)." }
          ] },
        { tip: "ornek", baslik: "p(x) = f(f(x))", durum: "p′(1) = ?",
          adimlar: [
            "İki katman da f. İç değer: f(1) = 3.",
            "Dış türev o değerde: f′(3) = 3.",
            "İç türev x = 1'de: f′(1) = −2.",
            "Çarp: 3 · (−2)."
          ], sonuc: "p′(1) = −6" }
      ]
    },
    {
      baslik: "Grafikten okumak: eğim ve köşe",
      kisa: "Grafikte türev doğru parçasının eğimidir; köşede türev yoktur.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📉", terim: "Piecewise linear", tr: "parçalı doğrusal", tanim: "Doğru parçalarından oluşan grafik. Türev, x'in bulunduğu parçanın eğimidir.", ornek: "x = 3, eğimi −1/2 olan parçanın üzerinde: f′(3) = −1/2." },
            { ikon: "📍", terim: "Corner", tr: "köşe", tanim: "İki parçanın birleştiği, eğimin ani değiştiği nokta. Orada türev yoktur.", ornek: "x = 2'de eğim 2'den −1/2'ye atlar: f′(2) yok." }
          ] },
        { tip: "grafik", baslik: "f: iki doğru parçası", xlabel: "x", ylabel: "y", xmax: 6, ymax: 6,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }, { v: 6, label: "6" }], yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "s1", tip: "cizgi", renk: 0, from: [0, 1], to: [2, 5], etiket: "eğim 2" },
            { id: "s2", tip: "cizgi", renk: 3, from: [2, 5], to: [6, 3], etiket: "eğim −1/2", gizli: true },
            { id: "p", tip: "nokta", renk: 2, x: 3, y: 4.5, etiket: "x = 3", kilavuz: true, gizli: true },
            { id: "k", tip: "nokta", renk: 1, x: 2, y: 5, etiket: "köşe", gizli: true }
          ],
          durumlar: [
            { metin: "İlk parça (0, 1) → (2, 5): eğim 4/2 = 2." },
            { metin: "İkinci parça (2, 5) → (6, 3): eğim −2/4 = −1/2.", goster: ["s2"] },
            { metin: "x = 3 ikinci parçada: f′(3) = −1/2.", goster: ["p"] },
            { metin: "x = 2 köşede: eğim 2'den −1/2'ye atlıyor, f′(2) yok.", goster: ["k"] }
          ] },
        { tip: "ornek", baslik: "h(x) = f(x² + 2x)", durum: "h′(1) = ? (f yukarıdaki grafik)",
          adimlar: [
            "İç fonksiyon g(x) = x² + 2x. İç değer: g(1) = 1 + 2 = 3.",
            "Dış türev x = 3'te: ikinci parçanın eğimi f′(3) = −1/2.",
            "İç türev: g′(x) = 2x + 2, g′(1) = 4.",
            "Çarp: (−1/2) · 4."
          ], sonuc: "h′(1) = −2" },
        { tip: "tuzak", metin: "İç değer tam 2 çıksaydı (x² + 2x = 2 için x = −1 ± √3), tam köşeye düşerdi ve türev olmazdı. Köşede f′ yoktur; iç türev sıfır değilse (burada g′ = ±2√3) h′ de yoktur.", yanlis: "Köşede iki eğimin ortalamasını al.", dogru: "Köşede f′ yoktur (DNE); parçanın eğimi yalnızca köşe olmayan noktalarda geçerlidir." }
      ]
    },
    {
      baslik: "Çarpım × zincir ve teğet doğrusu",
      kisa: "Dışta çarpım varsa çarpım kuralı; FRQ'da ara adımları yaz.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "✖️", terim: "Product rule", tr: "çarpım kuralı", tanim: "(uv)′ = u′v + uv′. Çarpanlardan biri bileşkeyse onun türevi zincirle alınır.", ornek: "x · f(g(x)) için: 1 · f(g(x)) + x · f′(g(x)) · g′(x)." },
            { ikon: "📏", terim: "Tangent line", tr: "teğet doğrusu", tanim: "Nokta (x₀, F(x₀)) ve eğim F′(x₀) ile y − F(x₀) = F′(x₀)(x − x₀).", ornek: "F(2) = 2 ve F′(2) = −17 ise y − 2 = −17(x − 2)." }
          ] },
        { tip: "ornek", baslik: "F(x) = x · f(g(x))", durum: "F′(2) = ? ve x = 2'de teğet doğrusunu yaz.",
          adimlar: [
            "Dışta çarpım var: F′(x) = f(g(x)) + x · f′(g(x)) · g′(x).",
            "İç değer: g(2) = 3.",
            "F′(2) = f(3) + 2 · f′(3) · g′(2). Tablodan f(3) = 1, f′(3) = 3, g′(2) = −3.",
            "F′(2) = 1 + 2 · 3 · (−3) = 1 − 18 = −17.",
            "Nokta için F(2) = 2 · f(g(2)) = 2 · f(3) = 2 · 1 = 2.",
            "Doğru: y − 2 = −17(x − 2)."
          ], sonuc: "F′(2) = −17; teğet doğrusu y − 2 = −17(x − 2)" },
        { tip: "tuzak", metin: "Açık uçlu sorularda yalnızca sonucu yazmak puan getirmez. Formülü, tablodan kullandığın değerleri ve aritmetiği göster.", yanlis: "Sadece \"−17\" yazmak.", dogru: "F′ formülü + tablodan değerler + nokta + doğru denklemi." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Değer sütunu yükseklik, türev sütunu eğim verir.",
            "(f(g(x)))′ için içten başla: g'nin değeri, f′ o değerde, çarpı g′ x'te.",
            "f′(g′(x)) diye bir adım yoktur: içe türev değil değer girer.",
            "Kuvvet, kök ve 1/g tiplerini aynı biçimde oku: 3[g]²g′, f′/(2√f), −g′/g².",
            "f(g(x)) ile g(f(x)) farklıdır: içteki hangisi?",
            "Grafikte türev doğru parçasının eğimidir; köşede türev yoktur.",
            "Dışta çarpım varsa çarpım kuralı, parçalarda zincir.",
            "FRQ'da formülü, tablo değerlerini ve aritmetiği yaz."
          ] }
      ]
    }
  ]
};
