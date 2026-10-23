/* Kitora not defteri · cb103 · 1.5, 1.9 Limit Kuralları ve Gösterimleri Bağlamak
   Kaynak: ap-videolar/src/episodes/cb103 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb103",
  amac: "Bu konu *limit properties* yani limit kurallarını anlatıyor: karmaşık bir limiti parçalayıp her parçanın limitini bulur, sonra birleştirirsin. Kuralların ne zaman çalıştığını, yerine koymayı ve grafik, tablo, formülün birlikte geldiği soruları öğreneceksin.",
  bolumler: [
    {
      baslik: "Limit özellikleri: parçala, bul, birleştir",
      kisa: "Parçaların limiti varsa, toplam ve çarpımın limiti limitlerden hesaplanır.",
      bloklar: [
        { tip: "hikaye", ikon: "🧱", baslik: "Lego kalesi gibi limit",
          metin: "Karmaşık bir limiti parçalara ayır, her parçanın limitini bul, sonra aynı işlemlerle yeniden birleştir. Tek şart: ==her parçanın limiti var olmalı==. Bu bölümde hep şu iki limit verilmiş olsun: lim x→2 f(x) = 4 ve lim x→2 g(x) = −3." },
        { tip: "kavramlar", kartlar: [
            { ikon: "🧩", terim: "Limit properties", tr: "limit özellikleri", tanim: "Limit; toplam, fark, çarpım, bölüm, kuvvet ve kök gibi işlemlerden geçer. Her parçanın limitinin var olması gerekir.", ornek: "f → 4 ve g → −3 iken tüm işlemleri limitlerle yaparız." },
            { ikon: "➕", terim: "Sum rule", tr: "toplam kuralı", tanim: "Toplamın limiti limitlerin toplamıdır; fark da aynı şekilde.", ornek: "4 + (−3) = 1; fark: 4 − (−3) = 7." },
            { ikon: "✖️", terim: "Product rule", tr: "çarpım kuralı", tanim: "Çarpımın limiti limitlerin çarpımıdır.", ornek: "4 · (−3) = −12" },
            { ikon: "🔢", terim: "Constant multiple rule", tr: "sabit kat kuralı", tanim: "Sabit çarpan limitin dışına çıkar.", ornek: "5f için 5 · 4 = 20" }
          ] },
        { tip: "sayilar", ogeler: [
            { deger: 1, etiket: "f + g" }, { deger: 7, etiket: "f − g" }, { deger: 12, onek: "−", etiket: "f · g" }, { deger: 20, etiket: "5f" }
          ] }
      ]
    },
    {
      baslik: "Bölüm, kuvvet, kök ve diğer kalıplar",
      kisa: "Dış fonksiyon o noktada sürekliyse limit içeri girer.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "➗", terim: "Quotient rule", tr: "bölüm kuralı", tanim: "Bölümün limiti limitlerin bölümüdür; yalnız paydanın limiti sıfır olmamalıdır.", ornek: "f / g için 4 / (−3) = −4/3" },
            { ikon: "⬆️", terim: "Power rule", tr: "kuvvet kuralı", tanim: "Kuvvet ve kök de içeri geçer: f²'nin limiti (limit f)², √f'nin limiti √(limit f).", ornek: "f² → 16 ve √f → 2" }
          ] },
        { tip: "tablo", baslik: "Aynı f ve g ile diğer kalıplar", head: ["İfade", "Limit", "Neden"],
          rows: [["f / g", "−4/3", "payda limiti −3, sıfır değil"], ["f²", "16", "kuvvet"], ["√f", "2", "√4"], ["|g|", "3", "mutlak değer: |−3|"], ["2^g", "1/8", "2⁻³ = 1/8"], ["ln f", "ln 4", "içerinin limiti pozitif olmalı"], ["cos g", "cos(−3)", "kosinüs sürekli"]], vurgu: 0,
          not: "Hepsinin sırrı aynı: dış fonksiyon o noktada sürekli, o yüzden limit içeri girer." },
        { tip: "ornek", baslik: "lim x→2 (3f(x) − [g(x)]²) / (f(x) + 1) kaç?", durum: "lim f = 4 ve lim g = −3 veriliyor; grafik gerekmez.",
          adimlar: [
            "Pay: 3 · 4 = 12 ve (−3)² = 9; 12 − 9 = 3.",
            "Payda: 4 + 1 = 5. Sıfır değil, bölebiliriz.",
            "Bölüm kuralı: 3 / 5."
          ],
          sonuc: "Limit = ==3/5==." }
      ]
    },
    {
      baslik: "Doğrudan yerine koyma",
      kisa: "Polinom ve rasyonel fonksiyonlarda payda sıfır değilse yerine koy.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "📥", terim: "Direct substitution", tr: "doğrudan yerine koyma", tanim: "Fonksiyon c'de sürekliyse limit = f(c): x yerine c yazılır. Rasyonel fonksiyonda payda sıfır olmamalıdır.", ornek: "lim x→1 (x + 3)/(x + 1) = 4/2 = 2" },
            { ikon: "📐", terim: "Polynomial", tr: "polinom", tanim: "x'in tam kuvvetlerinden oluşan ifade. Her yerde sürekli olduğu için limiti yerine koyarak bulunur.", ornek: "x³ + 2x − 5" }
          ] },
        { tip: "grafik", baslik: "lim x→−1 (x³ + 2x − 5); kesikli çizgiler gerçek eksenlerdir", xlabel: "x", ylabel: "y", xmax: 4, ymax: 24,
          xticks: [{ v: 0, label: "−2" }, { v: 1, label: "−1" }, { v: 2, label: "0" }, { v: 3, label: "1" }, { v: 4, label: "2" }],
          yticks: [{ v: 0, label: "−17" }, { v: 9, label: "−8" }, { v: 17, label: "0" }, { v: 24, label: "7" }],
          ogeler: [
            { id: "ex", tip: "cizgi", renk: 3, kesik: true, from: [0, 17], to: [4, 17] },
            { id: "ey", tip: "cizgi", renk: 3, kesik: true, from: [2, 0], to: [2, 24] },
            { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.5, 5.625], [1, 9], [1.5, 10.875], [2, 12], [2.5, 13.125], [3, 15], [3.5, 18.375], [4, 24]] },
            { id: "p", tip: "nokta", x: 1, y: 9, renk: 2, etiket: "(−1, −8)", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "y = x³ + 2x − 5 kesintisiz bir polinom. (Grafik eksenleri kaydırıldı; gerçek değerler çubuklarda.)" },
            { metin: "x → −1: yerine koy: (−1)³ + 2(−1) − 5 = −1 − 2 − 5 = −8. Polinomda limit = değer.", goster: ["p"] }
          ] },
        { tip: "ikili", sol: { ikon: "📥", baslik: "Yerine koy, bitti", maddeler: ["Polinom", "Payda sıfır olmayan rasyonel", "sin, cos, √, eˣ tanımlı yerde"] },
          sag: { ikon: "🔧", baslik: "Yerine koymak yetmez", maddeler: ["Payda sıfır oluyor", "0/0 ya da k/0 çıkıyor"] },
          oyun: [
            { metin: "lim x→2 (x² + 3x)", cevap: "sol", neden: "Polinom: 4 + 6 = 10." },
            { metin: "lim x→1 (x + 3)/(x + 1)", cevap: "sol", neden: "Payda 2, sıfır değil: 4/2 = 2." },
            { metin: "lim x→−1 (x + 3)/(x + 1)", cevap: "sag", neden: "Payda 0, pay 2: k/0, asimptot işareti (Bölüm 8)." },
            { metin: "lim x→−1 (x² − 1)/(x + 1)", cevap: "sag", neden: "0/0: önce sadeleştir (Bölüm 4)." },
            { metin: "lim x→0 cos x", cevap: "sol", neden: "Kosinüs sürekli: cos 0 = 1." }
          ] }
      ]
    },
    {
      baslik: "Grafik, tablo ve formül aynı soruda",
      kisa: "Her gösterimden kendi limitini oku, sonra kurallarla birleştir.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🔀", terim: "Multiple representations", tr: "çoklu gösterim", tanim: "Aynı soruda fonksiyonlar grafik, tablo, formül ya da sözel verilir. Her biri için uygun yöntemle limit bulunur.", ornek: "Grafikten oku, tabloda tahmin et, formülde yerine koy." }
          ] },
        { tip: "grafik", baslik: "f: grafik verilmiş, x → 1", xlabel: "x", ylabel: "f(x)", xmax: 2, ymax: 4,
          xticks: [{ v: 1, label: "1" }], yticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }],
          ogeler: [
            { id: "l", tip: "cizgi", renk: 0, from: [0, 1], to: [2, 3] },
            { id: "h", tip: "yazi", x: 1, y: 1.91, metin: "○" },
            { id: "ok1", tip: "ok", renk: 1, from: [0.5, 1.5], to: [0.9, 1.9], gizli: true },
            { id: "ok2", tip: "ok", renk: 1, from: [1.5, 2.5], to: [1.1, 2.1], gizli: true },
            { id: "d", tip: "nokta", x: 1, y: 3.5, renk: 2, etiket: "f(1) = 3,5", gizli: true }
          ],
          durumlar: [
            { metin: "Grafikte x = 1'de bir delik var." },
            { metin: "İki kol da 2'ye gidiyor: lim x→1 f(x) = 2.", goster: ["ok1", "ok2"] },
            { metin: "Dolu nokta f(1) = 3,5 yukarıda duruyor ama limit için önemsiz.", goster: ["d"] }
          ] },
        { tip: "tablo", baslik: "g: tablo verilmiş", head: ["x", "0,9", "0,99", "1,01", "1,1"], rows: [["g(x)", "2,9", "2,99", "3,01", "3,1"]],
          not: "İki yandan 3'e yaklaşıyor: lim x→1 g(x) = 3. Üçüncü fonksiyon formülle verilmiş: h(x) = x² + 1." },
        { tip: "ornek", baslik: "lim x→1 [f(x) + g(x) · h(x)] kaç?", durum: "f grafikle, g tabloyla, h formülle verilmiş.",
          adimlar: [
            "Grafikten: lim f = 2 (f(1) = 3,5 önemsiz).",
            "Tablodan: lim g = 3.",
            "Formülden yerine koy: h(1) = 1² + 1 = 2.",
            "Kurallarla birleştir: 2 + 3 · 2."
          ],
          sonuc: "Limit = ==8==." }
      ]
    },
    {
      baslik: "Parçaların limiti yoksa",
      kisa: "Parçaların limiti yokken toplamın limiti olabilir; tek taraflı hesapla.",
      bloklar: [
        { tip: "grafik", baslik: "İki sıçrama, bir toplam: x → 2", xlabel: "x", ylabel: "y", xmax: 4, ymax: 5,
          xticks: [{ v: 2, label: "2" }], yticks: [{ v: 1, label: "1" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "fa", tip: "cizgi", renk: 0, from: [0, 1], to: [2, 1] },
            { id: "fb", tip: "cizgi", renk: 0, from: [2, 3], to: [4, 3] },
            { id: "fh", tip: "yazi", x: 2, y: 0.89, metin: "○" },
            { id: "fd", tip: "nokta", x: 2, y: 3, renk: 0 },
            { id: "ga", tip: "cizgi", renk: 1, from: [0, 3], to: [2, 3], gizli: true },
            { id: "gb", tip: "cizgi", renk: 1, from: [2, 1], to: [4, 1], gizli: true },
            { id: "gh", tip: "yazi", x: 2, y: 2.89, metin: "○", gizli: true },
            { id: "gd", tip: "nokta", x: 2, y: 1, renk: 1, gizli: true },
            { id: "s", tip: "cizgi", renk: 2, from: [0, 4], to: [4, 4], gizli: true },
            { id: "st", tip: "yazi", x: 3.9, y: 4.3, metin: "f + g = 4", hiza: "end", gizli: true }
          ],
          durumlar: [
            { metin: "**f**: soldan 1, sağdan 3. Limit yok." },
            { metin: "**g**: soldan 3, sağdan 1. Onun da limiti yok.", gizle: ["fa", "fb", "fh", "fd"], goster: ["ga", "gb", "gh", "gd"] },
            { metin: "**f + g**: soldan 1 + 3 = 4, sağdan 3 + 1 = 4. Her yerde 4: limit ==var== ve 4!", gizle: ["ga", "gb", "gh", "gd"], goster: ["s", "st"] }
          ] },
        { tip: "ikili", sol: { ikon: "✅", baslik: "Kural çalışır", maddeler: ["Parçaların limiti var", "Bölümde payda limiti ≠ 0"] },
          sag: { ikon: "⚠️", baslik: "Kural çalışmaz", maddeler: ["Bir parçanın limiti yok", "Payda limiti 0"] },
          oyun: [
            { metin: "lim f = 4, lim g = −3 iken f · g.", cevap: "sol", neden: "İkisinin de limiti var: −12." },
            { metin: "lim g = 0 olan bir g'ye bölüm f / g.", cevap: "sag", neden: "0'a bölünmez: 0/0 → Bölüm 4, k/0 → Bölüm 8." },
            { metin: "f ve g'nin ikisi de x = 2'de sıçrıyor, f + g.", cevap: "sag", neden: "Kural yok; tek taraflı limitleri topla (burada 4)." },
            { metin: "lim f = 4 iken ln f.", cevap: "sol", neden: "İçerinin limiti pozitif: ln 4." }
          ] },
        { tip: "tuzak", metin: "Kural yoksa \"toplamın da limiti yok\" deme. Önce her tek taraflı limiti ayrı bul, sonra topla; iki toplam eşitse limit vardır.", yanlis: "f ve g'nin limiti yok, o halde f + g'nin de yok.", dogru: "Soldan ve sağdan toplamı hesapla: 4 ve 4, limit 4." }
      ]
    },
    {
      baslik: "Bileşke fonksiyonun limiti",
      kisa: "İç fonksiyonun hangi yönden geldiğine bak; dış fonksiyonun limitini o yönden al.",
      bloklar: [
        { tip: "kavramlar", kartlar: [
            { ikon: "🪆", terim: "Composite function", tr: "bileşke fonksiyon", tanim: "f(g(x)): içte g, dışta f vardır. Dış fonksiyon sürekliyse limit içeri girer; sıçrıyorsa iç fonksiyonun geldiği yönü izle.", ornek: "u = g(x) dersen f(g(x)) = f(u) olur." }
          ] },
        { tip: "grafik", baslik: "İç fonksiyon g(x) = 2 − (x − 3)²: x → 3", xlabel: "x", ylabel: "g(x)", xmax: 5, ymax: 3,
          xticks: [{ v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
          ogeler: [
            { id: "e", tip: "egri", renk: 0, noktalar: [[2, 1], [2.25, 1.438], [2.5, 1.75], [2.75, 1.938], [3, 2], [3.25, 1.938], [3.5, 1.75], [3.75, 1.438], [4, 1]] },
            { id: "t", tip: "nokta", x: 3, y: 2, renk: 2, etiket: "tepe", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "g(x), x = 3'te tepe yapıyor." },
            { metin: "x → 3 iken g(x) → 2: iki taraftan da 2'ye yaklaşıyor.", goster: ["t"] },
            { metin: "Ama hep ==2'nin altından==: g(2,5) = 1,75; g(2,9) = 1,99; g(2,99) = 1,9999. Yani u → 2⁻ (soldan)." }
          ] },
        { tip: "grafik", baslik: "Dış fonksiyon f(u): u = 2'de sıçrama", xlabel: "u", ylabel: "f(u)", xmax: 3, ymax: 6,
          xticks: [{ v: 2, label: "2" }], yticks: [{ v: 3, label: "3" }, { v: 4, label: "4" }, { v: 5, label: "5" }],
          ogeler: [
            { id: "a", tip: "cizgi", renk: 0, from: [0, 1], to: [2, 3] },
            { id: "b", tip: "cizgi", renk: 0, from: [2, 5], to: [3, 6] },
            { id: "o1", tip: "yazi", x: 2, y: 2.86, metin: "○" },
            { id: "o2", tip: "yazi", x: 2, y: 4.86, metin: "○" },
            { id: "d", tip: "nokta", x: 2, y: 4, renk: 2, etiket: "f(2) = 4" },
            { id: "ok", tip: "ok", renk: 1, from: [1.1, 2.1], to: [1.9, 2.9], gizli: true }
          ],
          durumlar: [
            { metin: "f(u): u < 2 için u + 1, u > 2 için u + 3. Soldan limit 3, sağdan limit 5, f(2) = 4." },
            { metin: "u, 2'ye soldan girdiği için f(u) → ==3==.", goster: ["ok"] }
          ] },
        { tip: "ornek", baslik: "lim x→3 f(g(x)) kaç?", durum: "Önce iç fonksiyon, sonra dış fonksiyon.",
          adimlar: [
            "İçeriden başla: x → 3 iken g(x) → 2 ve g(x) hep 2'nin altında (u → 2⁻).",
            "f'nin 2'de sıçraması var: soldan limit 3, sağdan 5.",
            "Soldan gelindiği için soldan limiti al: 3.",
            "f(2) = 4 burada işe yaramaz: x hiçbir zaman 3 olmaz, g(x) 2'ye hiç varmaz."
          ],
          sonuc: "Limit = ==3==. Dış fonksiyon sıçrıyorsa içerinin yönüne bak." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Parçala, her limiti bul, kurallarla birleştir; kural yoksa tek taraflı hesapla.",
      bloklar: [
        { tip: "ozet", maddeler: [
            "Toplam, fark, çarpım ve sabit katın limiti limitlerin toplamı, farkı, çarpımı ve sabit katıdır.",
            "Bölümde paydanın limiti sıfır olmamalı; kuvvet, kök, mutlak değer, üstel ve ln içeri geçer (ln için içerinin limiti pozitif).",
            "Polinom ve rasyonel fonksiyonlarda payda sıfır değilse yerine koy (*direct substitution*).",
            "Grafik, tablo ve formül karışık gelirse: grafikten oku, tabloda tahmin et, formülde yerine koy, sonra birleştir.",
            "Parçanın limiti yoksa toplamın da yok deme; tek taraflı limitleri hesapla.",
            "Bileşkede önce içerinin limitini ve hangi yönden geldiğini bul; dış fonksiyonun c'deki değerini kullanma.",
            "Payda limiti 0 ise bölüm kuralı yok: 0/0 → sadeleştir (Bölüm 4), k/0 → asimptot (Bölüm 8)."
          ] }
      ]
    }
  ]
};
