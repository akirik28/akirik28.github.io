/* Kitpath not defteri · cb306 · 3.3 Ters Fonksiyonların Türevi
   Kaynak: ap-videolar/src/episodes/cb306 (script.ts + notes.md). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "cb306",
  amac: "Bu konu ters fonksiyonların türevini anlatıyor. Ters fonksiyonun eğiminin f′'nin tersi olduğunu, bu formülü nasıl çıkaracağını ve tablo ya da verilen değerlerle nasıl kullanacağını öğreneceksin.",
  bolumler: [
    {
      baslik: "Ayna fikri: eğim tersine döner",
      kisa: "y = x aynasında teğetin eğimi ters çevrilir: 5 iken 1/5 olur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔁",
              terim: "Inverse function",
              tr: "ters fonksiyon",
              tanim: "f'nin girdi ile çıktısını değiştiren fonksiyon; f⁻¹ yazılır ve f(f⁻¹(x)) = x olur.",
              ornek: "f(2) = 5 ise f⁻¹(5) = 2."
            },
            {
              ikon: "↔️",
              terim: "Input / output",
              tr: "girdi / çıktı",
              tanim: "f girdiyi çıktıya götürür; f⁻¹ çıktıyı girdiye geri götürür.",
              ornek: "f makinesine 2 girer, 5 çıkar; f⁻¹ makinesine 5 girer, 2 çıkar."
            },
            {
              ikon: "☝️",
              terim: "One-to-one",
              tr: "bire bir",
              tanim: "Her çıktıya yalnızca bir girdi düşer. Tersi olan fonksiyonlar böyledir; hep artan ya da hep azalan fonksiyon bire birdir.",
              ornek: "f(x) = x³ + 2x + 1 hep artandır."
            },
            {
              ikon: "🪞",
              terim: "Reflection over y = x",
              tr: "y = x'e göre yansıma",
              tanim: "f⁻¹'in grafiği, f'nin y = x doğrusuna göre yansımasıdır; her (a, b) noktası (b, a) olur.",
              ornek: "(1, 4) noktası (4, 1) olur."
            },
            {
              ikon: "➗",
              terim: "Reciprocal",
              tr: "çarpmaya göre ters",
              tanim: "1/f(x): değerin bir bölüsü. Ters fonksiyonla karıştırılmaz.",
              ornek: "f(2) = 5 ise 1/f(2) = 1/5, ama f⁻¹(5) = 2."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Eğri, aynadaki yansıması ve eğimler",
          xlabel: "x",
          ylabel: "y",
          xmax: 10.2,
          ymax: 7,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" },
            { v: 7, label: "7" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" },
            { v: 7, label: "7" }
          ],
          ogeler: [
            { id: "m", tip: "cizgi", renk: 0, kesik: true, from: [0, 0], to: [7, 7], etiket: "y = x" },
            {
              id: "f",
              tip: "egri",
              renk: 1,
              noktalar: [[0, 1], [0.1, 1.201], [0.2, 1.408], [0.3, 1.627], [0.4, 1.864], [0.5, 2.125], [0.6, 2.416], [0.7, 2.743], [0.8, 3.112], [0.9, 3.529], [1, 4], [1.1, 4.531], [1.2, 5.128], [1.3, 5.797], [1.4, 6.544]],
              etiket: "f"
            },
            { id: "P", tip: "nokta", renk: 1, x: 1, y: 4, etiket: "(1, 4)", gizli: true },
            { id: "tf", tip: "cizgi", renk: 1, from: [0.6, 2], to: [1.4, 6], etiket: "m = 5", gizli: true },
            {
              id: "g",
              tip: "egri",
              renk: 3,
              noktalar: [[1, 0], [1.201, 0.1], [1.408, 0.2], [1.627, 0.3], [1.864, 0.4], [2.125, 0.5], [2.416, 0.6], [2.743, 0.7], [3.112, 0.8], [3.529, 0.9], [4, 1], [4.531, 1.1], [5.128, 1.2], [5.797, 1.3], [6.544, 1.4]],
              etiket: "f⁻¹",
              gizli: true
            },
            { id: "Q", tip: "nokta", renk: 3, x: 4, y: 1, etiket: "(4, 1)", gizli: true },
            { id: "tg", tip: "cizgi", renk: 3, from: [2, 0.6], to: [6, 1.4], etiket: "m = 1/5", gizli: true }
          ],
          durumlar: [
            { metin: "y = x doğrusu bir ayna. Yeşil eğri f(x) = x³ + 2x + 1 (x ≥ 0 parçası)." },
            { metin: "(1, 4) noktasında f′(1) = 3·1² + 2 = 5: teğet dik, eğim 5.", goster: ["P", "tf"] },
            {
              metin: "Eğriyi aynada yansıt: (a, b) noktası (b, a) olur. (1, 4) noktası (4, 1) olur.",
              goster: ["g", "Q"]
            },
            {
              metin: "Teğet de yansır. Yatay ve dikey yer değiştirdiği için eğim 5 yerine ==1/5== olur.",
              goster: ["tg"]
            }
          ]
        }
      ]
    },
    {
      baslik: "f⁻¹ ile 1/f aynı şey değil",
      kisa: "f⁻¹ ters fonksiyondur; 1/f ise çarpmaya göre terstir.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "🔁",
            baslik: "f⁻¹(x): *inverse function*",
            maddeler: ["Girdi ile çıktıyı değiştirir", "f(2) = 5 ise f⁻¹(5) = 2"]
          },
          sag: {
            ikon: "➗",
            baslik: "1/f(x): *reciprocal*",
            maddeler: ["f(x) değerinin bir bölüsü", "f(2) = 5 ise 1/f(2) = 1/5"]
          },
          oyun: [
            {
              metin: "f(2) = 5 iken f⁻¹(5) = 2.",
              cevap: "sol",
              neden: "Girdi ile çıktı yer değiştirdi: ters fonksiyon."
            },
            {
              metin: "f(2) = 5 iken 1/f(2) = 1/5.",
              cevap: "sag",
              neden: "Değerin bir bölüsü: çarpmaya göre ters."
            },
            {
              metin: "f(f⁻¹(x)) = x.",
              cevap: "sol",
              neden: "Ters fonksiyonun tanımı: f ile f⁻¹ birbirini geri alır."
            },
            {
              metin: "Grafikte (2, 5) noktası ile (5, 2) noktası.",
              cevap: "sol",
              neden: "Koordinatlar yer değiştirir: y = x aynası."
            },
            {
              metin: "x⁻¹ yazıldığında 1/x kastedilir.",
              cevap: "sag",
              neden: "Sayıya ya da x'e uygulanan −1 üssü bir bölüsüdür."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "g, f'nin tersidir", alt: "sözle" },
            "=",
            { t: "g = f⁻¹", alt: "simgeyle" },
            "=",
            { t: "f(g(x)) = x", alt: "geri alma" }
          ],
          aciklama: "Aynı şeyin üç söylenişi; hangisi gelirse gelsin anlamı aynı."
        },
        {
          tip: "tuzak",
          baslik: "Üs −1 iki anlama gelir",
          metin: "Fonksiyon simgesindeki −1 ters fonksiyon demektir. Sayıdaki ya da x'teki −1 ise gerçekten 1/x demektir. Sınav bu farkı sever.",
          yanlis: "f⁻¹(x) = 1/f(x)",
          dogru: "f⁻¹ girdi ile çıktıyı değiştirir; 1/f(x) ayrı bir fonksiyondur."
        }
      ]
    },
    {
      baslik: "Formülü zincir kuralıyla çıkaralım",
      kisa: "(f⁻¹)′(x) = 1/f′(f⁻¹(x)): f′ tersin değerinde hesaplanır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📐",
              terim: "Derivative of an inverse",
              tr: "tersin türevi",
              tanim: "Ters fonksiyonun eğimi, f′'nin tersidir: ==(f⁻¹)′(x) = 1/f′(f⁻¹(x))==.",
              ornek: "f′(1) = 5 ise (f⁻¹)′(4) = 1/5."
            },
            {
              ikon: "⛓️",
              terim: "Chain rule",
              tr: "zincir kuralı",
              tanim: "Bileşkenin türevi, dıştakinin türevi çarpı içtekinin türevidir. Formül buradan çıkar.",
              ornek: "d/dx f(g(x)) = f′(g(x))·g′(x)."
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "g = f⁻¹ için formülün çıkarılışı",
          adimlar: [
            { baslik: "Tanımdan başla", metin: "g, f'nin tersi: f(g(x)) = x." },
            {
              baslik: "Türev al",
              metin: "İki tarafın türevini al. Sol taraf bileşke: f′(g(x))·g′(x). Sağ taraf: 1."
            },
            { baslik: "g′'yi yalnız bırak", metin: "g′(x) = 1/f′(g(x))." },
            {
              baslik: "Sözle",
              metin: "Tersin türevi, f′'nin tersidir; ama f′ ==ters fonksiyonun değerinde== hesaplanır. Bütün işin kilidi bu."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "(f⁻¹)′(x)", alt: "tersin eğimi" },
            "=",
            { t: "1 / f′( f⁻¹(x) )", alt: "f′ tersin değerinde" }
          ]
        }
      ]
    },
    {
      baslik: "Üç adımlı yöntem: (f⁻¹)′(4)",
      kisa: "Çıktıyı veren girdiyi bul, f′'yi orada hesapla, ters çevir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "f(x) = x³ + 2x + 1 için g′(4)",
          durum: "f(x) = x³ + 2x + 1 ve g, f'nin tersi. g′(4) kaçtır?",
          adimlar: ["Adım 1: 4 bir ==çıktıdır==. Hangi girdi 4 veriyor? x³ + 2x + 1 = 4; küçük sayıları dene: f(0) = 1, f(1) = 4 → g(4) = 1.", "Adım 2: f′(x) = 3x² + 2 → f′(1) = 5.", "Adım 3: ters çevir: g′(4) = 1/f′(g(4)) = 1/f′(1) = 1/5."],
          sonuc: "g′(4) = 1/5."
        },
        {
          tip: "tuzak",
          baslik: "4 bir girdi değil, çıktı",
          metin: "(f⁻¹)′(4) sorulunca 4'ü f′'ye vermek en sık hata.",
          yanlis: "1/f′(4) = 1/50 (çünkü f′(4) = 3·16 + 2 = 50).",
          dogru: "Önce f(a) = 4'ü çöz (a = 1), sonra 1/f′(a) = 1/5."
        }
      ]
    },
    {
      baslik: "Tablodan ve iki bilgiden",
      kisa: "Aranan sayıyı f sütununda bul; sonra f′'nin tersini al.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "f ve f′ değerleri (g, f'nin tersi)",
          head: ["x", "f(x)", "f′(x)"],
          rows: [[1, 2, 3], [2, 5, 4], [3, 7, 2], [4, 8, 5]],
          vurgu: 1,
          not: "g′(5) için 5'i f(x) sütununda ara: x = 2 satırı."
        },
        {
          tip: "ornek",
          baslik: "Tablodan g′(5) ve teğet doğrusu",
          durum: "Tablodaki f için g = f⁻¹. g′(5) kaçtır? g'nin grafiğine x = 5'te teğet doğrusunu yaz.",
          adimlar: ["5'i f(x) sütununda ara: f(2) = 5 → g(5) = 2.", "f′(2) = 4 → g′(5) = 1/4. Tabloda f′(5) diye bir hücre yok; onu arıyorsan yanlış yoldasın.", "Aynı yolla g′(7): f(3) = 7, f′(3) = 2 → g′(7) = 1/2.", "Teğet doğrusu: nokta (5, 2), eğim 1/4 → y − 2 = ¼(x − 5)."],
          sonuc: "g′(5) = 1/4 ve teğet doğrusu y − 2 = ¼(x − 5)."
        },
        {
          tip: "ornek",
          baslik: "Yalnızca iki bilgi verilince",
          durum: "h(3) = 5 ve h′(3) = 7. (h⁻¹)′ nerede ve kaç? Ayrıca k(2) = 6, k′(2) = −3 ise (k⁻¹)′(6) kaç?",
          adimlar: ["(3, 5) noktası aynada (5, 3) olur; bu yüzden soru 5'te sorulur.", "(h⁻¹)′(5) = 1/h′(3) = 1/7. Yaygın yanlış: cevabı 7'de ya da 3'te aramak.", "Negatif eğim de aynen çalışır: (2, 6) → (6, 2) ve (k⁻¹)′(6) = 1/k′(2) = −1/3."],
          sonuc: "(h⁻¹)′(5) = 1/7 ve (k⁻¹)′(6) = −1/3."
        }
      ]
    },
    {
      baslik: "Yatay teğet ve dikey teğet",
      kisa: "f′(a) = 0 ise tersin o noktada dikey teğeti vardır, türevi yoktur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📈",
              terim: "Increasing function",
              tr: "artan fonksiyon",
              tanim: "x büyüdükçe f(x) büyür. Hep artan fonksiyon bire birdir; tersi, f'nin aldığı bütün değerlerde (görüntü kümesinde) tanımlıdır.",
              ornek: "f′(x) = 3x² + 2 > 0 olduğundan x³ + 2x + 1 hep artandır."
            },
            {
              ikon: "↕️",
              terim: "Vertical tangent",
              tr: "dikey teğet",
              tanim: "Eğimi tanımsız teğet; yatay teğetin aynadaki görüntüsüdür. Formülde paydaya 0 gelirse oluşur.",
              ornek: "y = ∛x eğrisinin (0, 0) noktası."
            },
            {
              ikon: "📍",
              terim: "Tangent line",
              tr: "teğet doğrusu",
              tanim: "Tersin grafiğine teğet de istenir: ters noktayı al, eğim olarak 1/f′ kullan.",
              ornek: "Tabloda g için y − 2 = ¼(x − 5)."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "y = x³ ve tersi y = ∛x",
          xlabel: "x",
          ylabel: "y",
          xmax: 4,
          ymax: 4,
          xticks: [
            { v: 0, label: "−2" },
            { v: 1, label: "−1" },
            { v: 2, label: "0" },
            { v: 3, label: "1" },
            { v: 4, label: "2" }
          ],
          yticks: [
            { v: 0, label: "−2" },
            { v: 1, label: "−1" },
            { v: 2, label: "0" },
            { v: 3, label: "1" },
            { v: 4, label: "2" }
          ],
          ogeler: [
            { id: "m", tip: "cizgi", renk: 0, kesik: true, from: [0, 0], to: [4, 4] },
            { id: "ax", tip: "cizgi", renk: 0, kesik: true, from: [0, 2], to: [4, 2] },
            { id: "ay", tip: "cizgi", renk: 0, kesik: true, from: [2, 0], to: [2, 4] },
            {
              id: "f",
              tip: "egri",
              renk: 1,
              noktalar: [[0.75, 0.047], [0.854, 0.496], [0.958, 0.87], [1.063, 1.176], [1.167, 1.421], [1.271, 1.612], [1.375, 1.756], [1.479, 1.859], [1.583, 1.928], [1.688, 1.969], [1.792, 1.991], [1.896, 1.999], [2, 2], [2.104, 2.001], [2.208, 2.009], [2.313, 2.031], [2.417, 2.072], [2.521, 2.141], [2.625, 2.244], [2.729, 2.388], [2.833, 2.579], [2.938, 2.824], [3.042, 3.13], [3.146, 3.504], [3.25, 3.953]],
              etiket: "x³"
            },
            { id: "th", tip: "cizgi", renk: 1, from: [1.2, 2], to: [2.8, 2], etiket: "f′(0) = 0", gizli: true },
            {
              id: "g",
              tip: "egri",
              renk: 3,
              noktalar: [[0.047, 0.75], [0.496, 0.854], [0.87, 0.958], [1.176, 1.063], [1.421, 1.167], [1.612, 1.271], [1.756, 1.375], [1.859, 1.479], [1.928, 1.583], [1.969, 1.688], [1.991, 1.792], [1.999, 1.896], [2, 2], [2.001, 2.104], [2.009, 2.208], [2.031, 2.313], [2.072, 2.417], [2.141, 2.521], [2.244, 2.625], [2.388, 2.729], [2.579, 2.833], [2.824, 2.938], [3.13, 3.042], [3.504, 3.146], [3.953, 3.25]],
              etiket: "∛x",
              gizli: true
            },
            { id: "tv", tip: "cizgi", renk: 2, from: [2, 1.2], to: [2, 2.8], etiket: "tanımsız", gizli: true }
          ],
          durumlar: [
            { metin: "f(x) = x³'ün (0, 0) noktasında eğim 0: teğet yatay.", goster: ["th"] },
            {
              metin: "Aynada yatay doğru dikey olur: f⁻¹(x) = ∛x'in (0, 0)'da dikey teğeti var.",
              goster: ["g", "tv"]
            },
            {
              metin: "Formül de aynısını söyler: (f⁻¹)′(0) = 1/f′(0) = 1/0, tanımsız. Tersi de doğru: f'nin eğimi 10 ise tersinin eğimi 1/10."
            }
          ]
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: ["f⁻¹, 1/f değildir; girdi ile çıktıyı değiştirir.", "f'nin grafiğindeki her (a, b) noktası, tersinde (b, a) olur.", "(f⁻¹)′(x) = 1/f′(f⁻¹(x)); f′ tersin değerinde hesaplanır.", "Üç adım: verilen sayının hangi girdiden geldiğini bul, f′'yi orada hesapla, ters çevir.", "(f⁻¹)′(b) sorulunca b bir çıktıdır; tabloda b'yi f(x) sütununda ara.", "Hep artan fonksiyonun tersi vardır.", "f'nin yatay teğeti tersinde dikey teğete döner; f′(a) = 0 ise tersin türevi yoktur."]
        }
      ]
    }
  ]
};
