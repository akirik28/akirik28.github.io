/* Kitpath not defteri · pc101 · M.1 Türev: Anlık Değişim Hızı
   Kaynak: ap-videolar/src/episodes/pc101 (script.ts + notes.md) ve Ada'nın ders sunumu (Differentiation). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc101",
  amac: "Bu konu türevi anlatıyor: bir şeyin o andaki değişim hızı. Koşu hızından başlayıp kesen ve teğet doğruyu, türevin limit tanımını, kuvvet, sabit ve toplam kurallarını öğrenecek, konum ile hızı karıştırmamayı çalışacaksın.",
  bolumler: [
    {
      baslik: "Neden kalkülüs? Ortalama hız yetmiyor",
      kisa: "Ortalama hız bir aralığı anlatır; anlık hız için türev gerekir.",
      bloklar: [
        { tip: "hikaye", ikon: "🏃", baslik: "30. saniyede kaç m/s?", metin: "Koşu uygulaman 400 metreyi 80 saniyede koştuğunu söylüyor: ortalama hızın 400/80 = ==5 m/s==. Peki tam 30. saniyede ne kadar hızlıydın? Bunu ortalama değil, ancak kalkülüs söyler. Fizik C'de her ünitede türev ve integral kullanacaksın; o yüzden önce matematikle başlıyoruz." },
        { tip: "kavramlar",
            kartlar: [
              { ikon: "⏱️", terim: "Rate", tr: "oran", tanim: "Fizikte *rate*, bir niceliğin zamana bölünmüş hâlidir. Değişimi Yunan harfi Δ (delta) ile yazarız: Δx = x₂ − x₁.", ornek: "Konumun değişim oranı: Δx/Δt." },
              { ikon: "📊", terim: "Average velocity", tr: "ortalama hız", tanim: "Δx/Δt: bir zaman aralığındaki konum değişiminin süreye oranı. x–t grafiğinde iki noktayı birleştiren doğrunun eğimidir.", ornek: "400 m / 80 s = 5 m/s." },
              { ikon: "⚡", terim: "Instantaneous velocity", tr: "anlık hız", tanim: "Tek bir andaki hız: ortalama hızın aralık sıfıra giderkenki limiti. x–t grafiğinde teğetin eğimidir.", ornek: "Koşucunun t = 30 s'deki hızı." }
            ] },
        { tip: "ikili", sol: { ikon: "📉", baslik: "*Derivative* (türev)", maddeler: ["x(t) → hız v(t) → ivme a(t)", "Eğim sorar: ne kadar hızlı değişiyor?"] }, sag: { ikon: "📈", baslik: "*Integral*", maddeler: ["a(t) → v(t) → x(t)", "Alan sorar: toplam ne kadar değişti?", "v–t grafiğinin altındaki işaretli alan = yer değiştirme"] },
            oyun: [
              { metin: "Konum fonksiyonu verilmiş, t = 3 s'deki hız isteniyor.", cevap: "sol", neden: "Konumdan hıza giden yol türevdir." },
              { metin: "v–t grafiği verilmiş, 0–5 s arasındaki yer değiştirme isteniyor.", cevap: "sag", neden: "Grafiğin altındaki işaretli alan: integral." },
              { metin: "Hız fonksiyonu verilmiş, ivme isteniyor.", cevap: "sol", neden: "Hızın zamana göre türevi ivmedir." },
              { metin: "İvme fonksiyonu verilmiş, hızdaki değişim isteniyor.", cevap: "sag", neden: "İvmeden hız değişimine integralle gidilir." }
            ] }
      ]
    },
    {
      baslik: "Kesen doğrudan teğete",
      kisa: "B noktası A'ya yaklaştıkça kesen doğru teğete oturur.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "✂️", terim: "Secant line", tr: "kesen doğru", tanim: "Eğri üzerindeki iki noktayı birleştiren doğru. Eğimi o aralıktaki ortalama hızdır.", ornek: "x = 2t² üzerinde A(1; 2) ile B(3; 18) arasındaki eğim 8 m/s." },
              { ikon: "🎯", terim: "Tangent line", tr: "teğet", tanim: "Eğriye bir noktada dokunan doğru. Eğimi o andaki anlık hızdır.", ornek: "x = 2t² için t = 1 s'deki teğetin eğimi 4 m/s." }
            ] },
        { tip: "grafik", baslik: "x = 2t² eğrisi: B noktası A'ya yaklaşıyor", xlabel: "t (s)", ylabel: "x (m)", xmax: 4, ymax: 32, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 2, label: "2" }, { v: 8, label: "8" }, { v: 18, label: "18" }, { v: 32, label: "32" }],
            ogeler: [
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 0], [0.25, 0.125], [0.5, 0.5], [0.75, 1.125], [1, 2], [1.25, 3.125], [1.5, 4.5], [1.75, 6.125], [2, 8], [2.25, 10.125], [2.5, 12.5], [2.75, 15.125], [3, 18], [3.25, 21.125], [3.5, 24.5], [3.75, 28.125], [4, 32]] },
              { id: "A", tip: "nokta", x: 1, y: 2, etiket: "A", renk: 1 },
              { id: "s", tip: "cizgi", renk: 2, from: [1, 2], to: [3.5, 22], etiket: "eğim 8" },
              { id: "B", tip: "nokta", x: 3, y: 18, etiket: "B", renk: 2 }
            ],
            durumlar: [
              { metin: "A(1 s; 2 m) sabit. B(3 s; 18 m) ile A'yı birleştiren **kesen doğrunun** eğimi 16/2 = ==8 m/s==." },
              { metin: "B'yi eğri üzerinde A'ya kaydır: B(2; 8). Eğim 6/1 = ==6==.", set: { s: { to: [3.5, 17], etiket: "eğim 6" }, B: { x: 2, y: 8 } } },
              { metin: "B(1,1; 2,42): eğim 0,42/0,1 = ==4,2==.", set: { s: { to: [3.5, 12.5], etiket: "eğim 4,2" }, B: { x: 1.1, y: 2.42 } } },
              { metin: "B(1,01; 2,0402): eğim ==4,02==. A'ya yakınlaştıkça eğri düz bir çizgi gibi görünür.", set: { s: { to: [3.5, 12.05], etiket: "eğim 4,02" }, B: { x: 1.01, y: 2.0402 } } },
              { metin: "Δt → 0: kesen doğru **teğete** oturur (x = 4t − 2). Eğimi ==4 m/s== = t = 1 s'deki anlık hız.", set: { s: { from: [0.5, 0], to: [3.5, 12], etiket: "teğet: eğim 4" }, B: { x: 1, y: 2 } } }
            ] },
        { tip: "tablo", baslik: "B, A'ya yaklaştıkça eğim", head: ["Δt (s)", "B noktası", "Eğim (m/s)"], vurgu: 4, not: "Eğim formülü 4 + 2Δt: Δt küçüldükçe 4'e yaklaşır.",
            rows: [
              ["2", "(3; 18)", "8"],
              ["1", "(2; 8)", "6"],
              ["0,1", "(1,1; 2,42)", "4,2"],
              ["0,01", "(1,01; 2,0402)", "4,02"],
              ["→ 0", "A'ya yapışır", "4"]
            ] }
      ]
    },
    {
      baslik: "Türevin tanımı: dx/dt",
      kisa: "Türev, ortalama hızın Δt sıfıra giderkenki limitidir.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "v = dx/dt", alt: "türev (Leibniz gösterimi)" }, "=", { t: "lim (Δt → 0)", alt: "limit" }, { t: "[x(t + Δt) − x(t)] / Δt", alt: "fark oranı" }], aciklama: "Matematik kitaplarında y = f(x) için dy/dx yazılır; fizikte konum x(t) olduğundan dx/dt yazarız. Türev yeni bir fonksiyondur: her t için o andaki hızı verir." },
        { tip: "kavramlar",
            kartlar: [
              { ikon: "🧮", terim: "Derivative", tr: "türev", tanim: "Bir fonksiyonun değişim hızını veren yeni fonksiyon: ortalama değişim hızının limiti.", ornek: "x = 2t² → v = dx/dt = 4t." },
              { ikon: "➗", terim: "Difference quotient", tr: "fark oranı", tanim: "[x(t + Δt) − x(t)] / Δt: kesen doğrunun eğimi.", ornek: "Δt = 0,1 için 4,2." },
              { ikon: "🔍", terim: "Limit", tr: "limit", tanim: "Girdi bir değere yaklaşırken fonksiyonun yaklaştığı değer. Δt = 0'ı doğrudan koyarsan 0/0 çıkar; önce sadeleştir, sonra limite geç.", ornek: "(4tΔt + 2Δt²)/Δt = 4t + 2Δt → 4t." }
            ] },
        { tip: "ornek", baslik: "x = 2t² için dx/dt", durum: "Konum x(t) = 2t² (metre). v(t) = dx/dt = ?", sonuc: "v(t) = dx/dt = ==4t== m/s.",
            adimlar: [
              "x(t + Δt) − x(t) = 2(t + Δt)² − 2t² = 4tΔt + 2(Δt)²",
              "Δt'ye böl: (4tΔt + 2(Δt)²)/Δt = 4t + 2Δt. Doğrudan Δt = 0 koyma: 0/0 çıkar, önce sadeleştir.",
              "Δt → 0: 2Δt kaybolur, geriye 4t kalır."
            ] },
        { tip: "grafik", baslik: "v = dx/dt = 4t: x–t eğiminin grafiği", xlabel: "t (s)", ylabel: "v (m/s)", xmax: 4, ymax: 16, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }], yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
            ogeler: [
              { id: "v", tip: "cizgi", renk: 1, from: [0, 0], to: [4, 16], etiket: "v = 4t" },
              { id: "p1", tip: "nokta", x: 1, y: 4, kilavuz: true, etiket: "v(1) = 4", renk: 2, gizli: true },
              { id: "p3", tip: "nokta", x: 3, y: 12, kilavuz: true, etiket: "v(3) = 12", renk: 2, gizli: true }
            ],
            durumlar: [
              { metin: "Türev yeni bir fonksiyon: v(t) = 4t. Her t için x–t eğrisinin o andaki teğet eğimini verir." },
              { metin: "t = 1 s: v = 4 m/s; bu, önceki grafikteki teğetin eğimiyle aynı.", goster: ["p1"] },
              { metin: "t = 3 s: v = 4·3 = ==12 m/s==. Eğri daha dik, yani cisim daha hızlı.", goster: ["p3"] }
            ] }
      ]
    },
    {
      baslik: "Kuvvet kuralı: üs aşağı iner",
      kisa: "tⁿ'nin türevi n·tⁿ⁻¹: üs katsayı olur, üs bir azalır.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "d/dt (tⁿ)", alt: "türev al" }, "=", { t: "n · tⁿ⁻¹", alt: "üs aşağı iner, üs 1 azalır" }], aciklama: "Kesirli ve negatif üslerde de çalışır." },
        { tip: "adimlar", baslik: "Kalıp nereden geliyor? (t³ örneği)",
            adimlar: [
              { baslik: "Aç", metin: "(t + Δt)³ = t³ + 3t²Δt + 3t(Δt)² + (Δt)³" },
              { baslik: "Çıkar ve böl", metin: "[(t + Δt)³ − t³] / Δt = 3t² + 3tΔt + (Δt)²" },
              { baslik: "Limite git", metin: "Δt → 0: Δt'li terimler kaybolur, ==3t²== kalır. Katsayı 3, üs kadardır." }
            ] },
        { tip: "tablo", baslik: "Önce tⁿ biçimine yaz, sonra türet", head: ["Fonksiyon", "tⁿ biçimi", "Türev"],
            rows: [
              ["t²", "t²", "2t"],
              ["t³", "t³", "3t²"],
              ["t⁴", "t⁴", "4t³"],
              ["√t", "t^(1/2)", "½ · t^(−1/2) = 1/(2√t)"],
              ["1/t²", "t^(−2)", "−2 · t^(−3) = −2/t³"]
            ] },
        { tip: "tuzak", metin: "Kök ve kesirleri olduğu gibi türetmeye çalışma.", yanlis: "1/t² bir kesir olduğu için kuvvet kuralı uygulanamaz.", dogru: "Önce üs biçimine çevir: 1/t² = t⁻², türevi −2t⁻³; √t = t^(1/2)." }
      ]
    },
    {
      baslik: "Sabit, sabit kat ve toplam kuralı",
      kisa: "Sabit türevde kaybolur; katsayı dışarıda bekler; terimler ayrı türetilir.",
      bloklar: [
        { tip: "kavramlar",
            kartlar: [
              { ikon: "🧱", terim: "Constant rule", tr: "sabit kuralı", tanim: "Sabit bir sayının türevi 0'dır: düz çizginin eğimi yoktur.", ornek: "d/dt (5) = 0." },
              { ikon: "✖️", terim: "Constant multiple rule", tr: "sabit kat kuralı", tanim: "Sabit çarpan türevin dışında bekler: d/dt (c·f) = c·f′.", ornek: "d/dt (5t²) = 5 · 2t = 10t." },
              { ikon: "➕", terim: "Sum rule", tr: "toplam kuralı", tanim: "Toplam ve farkta her terimin türevi ayrı alınır.", ornek: "d/dt (t³ + 4t) = 3t² + 4." }
            ] },
        { tip: "ornek", baslik: "x = 4t³ − 6t + 5", durum: "Konum x(t) = 4t³ − 6t + 5 (m). v(t) = ?", sonuc: "v(t) = ==12t² − 6== m/s.",
            adimlar: [
              "4t³ → 4 · 3t² = 12t²",
              "−6t → −6",
              "5 → 0 (sabit kaybolur)"
            ] },
        { tip: "grafik", baslik: "Sabit eklemek eğriyi yukarı taşır, eğimi değiştirmez", xlabel: "t (s)", ylabel: "x (m)", xmax: 4, ymax: 32, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 2, label: "2" }, { v: 8, label: "8" }, { v: 14, label: "14" }, { v: 30, label: "30" }],
            ogeler: [
              { id: "a", tip: "egri", renk: 0, noktalar: [[0, 0], [0.5, 0.5], [1, 2], [1.5, 4.5], [2, 8], [2.5, 12.5], [3, 18]], etiket: "x₀ = 0" },
              { id: "b", tip: "egri", renk: 1, noktalar: [[0, 6], [0.5, 6.5], [1, 8], [1.5, 10.5], [2, 14], [2.5, 18.5], [3, 24]], etiket: "x₀ = 6", gizli: true },
              { id: "c", tip: "egri", renk: 2, noktalar: [[0, 12], [0.5, 12.5], [1, 14], [1.5, 16.5], [2, 20], [2.5, 24.5], [3, 30]], etiket: "x₀ = 12", gizli: true },
              { id: "g", tip: "cizgi", renk: 3, kesik: true, from: [1, 0], to: [1, 32], gizli: true },
              { id: "ta", tip: "cizgi", renk: 0, from: [0.5, 0], to: [1.5, 4], gizli: true },
              { id: "tb", tip: "cizgi", renk: 1, from: [0.5, 6], to: [1.5, 10], gizli: true },
              { id: "tc", tip: "cizgi", renk: 2, from: [0.5, 12], to: [1.5, 16], gizli: true }
            ],
            durumlar: [
              { metin: "x = 2t²: başlangıç konumu x₀ = 0." },
              { metin: "Sabit terim eklersen (x = 2t² + 6, x = 2t² + 12) eğri aynen yukarı kayar.", goster: ["b", "c"] },
              { metin: "t = 1 s'de üç teğet de ==paralel==: eğim 4. Başlangıç konumu hızı değiştirmez; türevde kaybolur.", goster: ["g", "ta", "tb", "tc"] }
            ] },
        { tip: "tuzak", metin: "Başlangıç konumu x₀ konumu kaydırır, hızı değil.", yanlis: "x₀ = 5 m olduğu için v(t) ifadesinde de 5 kalır.", dogru: "Sabit terim türevde 0 olur: başlangıç konumu hızı değiştirmez." }
      ]
    },
    {
      baslik: "Konum ile hız aynı şey değildir",
      kisa: "Fonksiyonun değeri nerede olduğunu, türevi ne kadar hızlı değiştiğini söyler.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "📍", baslik: "Konum x(t)", maddeler: ["Nerede olduğunu söyler", "Birimi metre (m)", "x–t grafiğinde yükseklik"] }, sag: { ikon: "💨", baslik: "Hız dx/dt", maddeler: ["Konumun ne kadar hızlı değiştiğini söyler", "Birimi m/s", "x–t grafiğinde teğetin eğimi"] },
            oyun: [
              { metin: "x = 2t² için x(3) = 2·3² = 18 m", cevap: "sol", neden: "Fonksiyona t'yi koymak konumu verir." },
              { metin: "v(3) = 4·3 = 12 m/s", cevap: "sag", neden: "Önce türev (4t), sonra t = 3 koy." },
              { metin: "Birimi metre/saniye olan sonuç", cevap: "sag", neden: "m/s hızdır. Birim tutmuyorsa yanlış şeyi hesaplamışsındır." },
              { metin: "x–t grafiğinde (3; 18) noktasının yüksekliği", cevap: "sol", neden: "Yükseklik konumdur; eğim hızdır." }
            ] },
        { tip: "sayilar",
            ogeler: [
              { deger: 18, sonek: " m", etiket: "x(3): nerede?" },
              { deger: 12, sonek: " m/s", etiket: "v(3): ne kadar hızlı?" }
            ] },
        { tip: "tuzak", metin: "Sınav bir soruda hem konumu hem hızı isteyebilir.", yanlis: "\"t = 2 s'deki hız\" için x(2)'yi hesaplamak: x = 5t² − 3t + 1 ise 15.", dogru: "Önce türev al (v = 10t − 3), sonra t = 2 koy: 17 m/s. Sonunda birimi kontrol et (m → m/s)." }
      ]
    },
    {
      baslik: "AP örneği: ortalama sıfır, anlık 9 m/s",
      kisa: "Ortalama hız sıfır olsa da anlık hız sıfır olmayabilir.",
      bloklar: [
        { tip: "ornek", baslik: "x = t³ − 3t² + 2", durum: "Parçacığın konumu x(t) = t³ − 3t² + 2 (m). 0–3 s arasındaki ortalama hızı ve t = 3 s'deki anlık hızı bul.", sonuc: "Ortalama hız ==0==, ama v(3) = ==9 m/s==.",
            adimlar: [
              "x(0) = 2 m; x(3) = 27 − 27 + 2 = 2 m",
              "Ortalama hız: (2 − 2)/(3 − 0) = 0",
              "Anlık hız için türev al: v(t) = dx/dt = 3t² − 6t",
              "t = 3: v(3) = 27 − 18 = 9 m/s"
            ] },
        { tip: "grafik", baslik: "x = t³ − 3t² + 2 (eksen 2 birim yukarı kaydırıldı; kesikli çizgi x = 0)", xlabel: "t (s)", ylabel: "x (m)", xmax: 4, ymax: 6, xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }], yticks: [{ v: 0, label: "−2" }, { v: 2, label: "0" }, { v: 4, label: "2" }, { v: 6, label: "4" }],
            ogeler: [
              { id: "ax", tip: "cizgi", renk: 3, kesik: true, from: [0, 2], to: [4, 2] },
              { id: "c", tip: "egri", renk: 0, noktalar: [[0, 4], [0.25, 3.828], [0.5, 3.375], [0.75, 2.734], [1, 2], [1.25, 1.266], [1.5, 0.625], [1.75, 0.172], [2, 0], [2.25, 0.203], [2.5, 0.875], [2.75, 2.109], [3, 4]] },
              { id: "A", tip: "nokta", x: 0, y: 4, etiket: "x(0) = 2", renk: 1, gizli: true },
              { id: "B", tip: "nokta", x: 3, y: 4, etiket: "x(3) = 2", renk: 1, gizli: true },
              { id: "s", tip: "cizgi", renk: 1, from: [0, 4], to: [3, 4], gizli: true },
              { id: "t", tip: "cizgi", renk: 2, from: [2.6, 0.4], to: [3.2, 5.8], etiket: "eğim 9", gizli: true }
            ],
            durumlar: [
              { metin: "Konum eğrisi: parçacık önce −x yönünde gider (x = 2 m'den −2 m'ye), t = 2 s'de döner, sonra +x yönünde ilerler." },
              { metin: "t = 0 ve t = 3 s'de x = 2 m. Kesen doğru yatay: ortalama hız ==0==.", goster: ["A", "B", "s"] },
              { metin: "t = 3 s'de teğet çok dik: eğim v(3) = ==9 m/s==.", goster: ["t"] }
            ] }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Kuralları hızlı uygula, dx/dt ile hızı türet, sonucu eğim olarak yorumla.",
      bloklar: [
        { tip: "ikili", sol: { ikon: "✅", baslik: "Sınavda gerekir", maddeler: ["Kuralları hızlı uygulamak (kuvvet, sabit, toplam)", "dx/dt yazıp hızı türetmek (*derive*)", "Sonucu eğim olarak yorumlamak", "Birimleri kontrol etmek"] }, sag: { ikon: "🚫", baslik: "Gerekmez", maddeler: ["Limit tanımıyla türev almak (sezgi içindir)", "Kuralların ispatı", "Uzun limit cebiri"] } },
        { tip: "not", metin: "Hesap makinesi iki bölümde de serbest. Ama türevi elle bulamazsan *derive* diyen sorularda puan kaybedersin; cevabı sembollerle yazman gerekir. Matematik, Fizik C'de bir araçtır." }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        { tip: "ozet",
            maddeler: [
              "Ortalama hız Δx/Δt: kesen doğrunun eğimi.",
              "Anlık hız, Δt → 0 limiti: teğetin eğimi, dx/dt.",
              "Türev yeni bir fonksiyondur; Δt = 0'ı doğrudan koymadan önce sadeleştir.",
              "*Power rule*: d/dt tⁿ = n·tⁿ⁻¹; kök ve kesirleri önce üs biçimine yaz.",
              "Sabitin türevi 0, sabit çarpan dışarıda, toplamda terim terim türet.",
              "Başlangıç konumu (sabit terim) hızı değiştirmez.",
              "x(t) konumu, dx/dt hızı verir; \"t anındaki hız\" için önce türev, sonra yerine koy.",
              "Ortalama hız 0 iken anlık hız sıfır olmayabilir (x = t³ − 3t² + 2: 0 ve 9 m/s)."
            ] }
      ]
    }
  ]
};
