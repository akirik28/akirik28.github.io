/* Kitpath not defteri · pc110 · 1.2 Değişken İvme: İntegralle Hareket
   Kaynak: ap-videolar/src/episodes/pc110 (script.ts + notes.md) ve ders sunumu (Bölüm 2: Velocity and Position by Integration). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc110",
  amac: "Bu konu ivmenin zamanla değiştiği hareketi anlatıyor. İvmeden hıza, hızdan konuma integralle gitmeyi, integral sabitlerini başlangıç koşullarıyla bulmayı ve sabit ivme denklemlerinin ne zaman geçersiz olduğunu öğreneceksin.",
  bolumler: [
    {
      baslik: "İvme sabit değilse",
      kisa: "İvme zamana bağlıysa sabit ivme denklemleri yanlış sonuç verir; integral gerekir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🛴",
          baslik: "Scooter'la kalkış",
          metin: "Elektrikli scooterla kalkıyorsun. İlk anda motor seni sertçe itiyor, sonra itiş giderek azalıyor: a = 6 − 2t (m/s²). İvme sabit değil; dört sabit ivme denklemi burada yanlış sonuç verir. Çözüm Physics C'nin ta kendisi: ==integral almak==."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📉",
              terim: "Non-constant acceleration",
              tr: "sabit olmayan ivme",
              tanim: "Zamanla (ya da hızla, konumla) değişen ivme. Sabit ivme denklemleri geçerli olmaz.",
              ornek: "a = 6 − 2t: t = 0'da 6 m/s², t = 3 s'de 0."
            }
          ]
        }
      ]
    },
    {
      baslik: "Strateji: a → v → x zinciri",
      kisa: "Her integralde bir sabit çıkar; başlangıç koşulları bu sabitleri bulur.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "İki integral, iki sabit",
          adimlar: [
            { baslik: "İvmenin integrali", metin: "v(t) = ∫a dt + C₁ (hız)." },
            { baslik: "C₁'i bul", metin: "v(0) = v₀ koy; C₁ belirlenir." },
            { baslik: "Hızın integrali", metin: "x(t) = ∫v dt + C₂ (konum)." },
            { baslik: "C₂'yi bul", metin: "x(0) = x₀ koy. Ters yönde türev alırsın: x → v → a." }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↩️",
              terim: "Antiderivative",
              tr: "ters türev",
              tanim: "Türevi verilen fonksiyondur; ∫a dt ile bulunur ve her zaman + C taşır.",
              ornek: "a = 6 − 2t ⇒ ∫a dt = 6t − t² + C₁."
            },
            {
              ikon: "🏁",
              terim: "Initial conditions",
              tr: "başlangıç koşulları",
              tanim: "t = 0'da bilinen v₀ ve x₀; integral sabitlerini belirler.",
              ornek: "Scooter durgun kalkıyor: v(0) = 0, x(0) = 0."
            },
            {
              ikon: "➕",
              terim: "Constant of integration",
              tr: "integral sabiti",
              tanim: "Her integralde çıkan + C. İki integral, iki sabit: C₁ ve C₂.",
              ornek: "C₁ = v₀ ve C₂ = x₀."
            }
          ]
        }
      ]
    },
    {
      baslik: "Scooter: a, v ve x birlikte",
      kisa: "İki integralle a'dan v'ye, v'den x'e geçilir; hız a = 0 iken en büyüktür.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Durgun kalkan scooter",
          durum: "a = 6 − 2t (m/s²), v(0) = 0, x(0) = 0. v(t), x(t), en büyük hız ve t = 6 s'deki konum nedir?",
          adimlar: [
            "v = ∫(6 − 2t) dt = 6t − t² + C₁; v(0) = 0 ⇒ C₁ = 0.",
            "x = ∫(6t − t²) dt = 3t² − t³/3 + C₂; x(0) = 0 ⇒ C₂ = 0.",
            "En büyük hız a = 0 iken: 6 − 2t = 0 ⇒ t = 3 s, v(3) = 18 − 9 = 9 m/s.",
            "x(3) = 27 − 9 = 18 m. t = 6 s'de v = 0 ve x(6) = 108 − 72 = 36 m."
          ],
          sonuc: "v = 6t − t², x = 3t² − t³/3; v_maks = 9 m/s (t = 3 s); t = 6 s'de scooter 36 m'de"
        },
        {
          tip: "grafik",
          baslik: "İvme–zaman: a = 6 − 2t",
          xlabel: "t (s)",
          ylabel: "a (m/s²)",
          xmax: 6,
          ymax: 12,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 0, label: "-6" },
            { v: 3, label: "-3" },
            { v: 6, label: "0" },
            { v: 9, label: "3" },
            { v: 12, label: "6" }
          ],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 6], to: [6, 6], renk: 0, kesik: true },
            { id: "t1", tip: "alan", noktalar: [[0, 6], [0, 12], [3, 6]], renk: 1, gizli: true },
            { id: "u1", tip: "yazi", x: 0.9, y: 8, metin: "+9", gizli: true },
            { id: "t2", tip: "alan", noktalar: [[3, 6], [6, 6], [6, 0]], renk: 2, gizli: true },
            { id: "u2", tip: "yazi", x: 5, y: 3.3, metin: "−9", gizli: true },
            { id: "L", tip: "cizgi", from: [0, 12], to: [6, 0], renk: 0 },
            { id: "cur", tip: "cizgi", from: [3, 0], to: [3, 12], renk: 2, kesik: true, gizli: true }
          ],
          durumlar: [
            { metin: "İvme 6 m/s²'den başlayıp doğrusal olarak azalıyor; t = 3 s'de sıfır, sonra negatif." },
            {
              metin: "t = 3 s: a = 0. 0–3 s arasındaki alan ½ · 3 · 6 = ==+9==: hız 9 m/s artmış.",
              goster: ["cur", "t1", "u1"]
            },
            {
              metin: "t = 6 s: a = −6 m/s². 3–6 s arasındaki alan −9: hız 9 m/s azalmış, v(6) = 0.",
              set: { cur: { from: [6, 0], to: [6, 12] } },
              goster: ["t2", "u2"]
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Hız–zaman: v = 6t − t²",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 6,
          ymax: 10,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" }
          ],
          yticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 9, label: "9" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 1.438], [0.5, 2.75], [0.75, 3.938], [1, 5], [1.25, 5.938],
                [1.5, 6.75], [1.75, 7.438], [2, 8], [2.25, 8.438], [2.5, 8.75], [2.75, 8.938],
                [3, 9], [3.25, 8.938], [3.5, 8.75], [3.75, 8.438], [4, 8], [4.25, 7.438],
                [4.5, 6.75], [4.75, 5.938], [5, 5], [5.25, 3.938], [5.5, 2.75], [5.75, 1.438],
                [6, 0]
              ],
              renk: 0
            },
            { id: "cur", tip: "cizgi", from: [3, 0], to: [3, 10], renk: 2, kesik: true, gizli: true },
            { id: "pt", tip: "nokta", x: 3, y: 9, renk: 2, etiket: "v maks = 9", gizli: true }
          ],
          durumlar: [
            { metin: "v = 6t − t²: bir parabol. Eğimi a'dır; eğim önce pozitif, sonra negatif." },
            { metin: "t = 3 s: eğim 0 ⇒ a = 0 ve ==hız en büyük==: 18 − 9 = 9 m/s.", goster: ["cur", "pt"] },
            {
              metin: "t = 6 s: hız tekrar 0, scooter duruyor. İvme ise sıfır değil (−6 m/s²): v = 0 ile a = 0 aynı şey değildir.",
              set: { cur: { from: [6, 0], to: [6, 10] }, pt: { x: 6, y: 0, etiket: "v = 0" } }
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Konum–zaman: x = 3t² − t³/3",
          xlabel: "t (s)",
          ylabel: "x (m)",
          xmax: 6,
          ymax: 40,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" }
          ],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }, { v: 40, label: "40" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.182], [0.5, 0.708], [0.75, 1.547], [1, 2.667], [1.25, 4.036],
                [1.5, 5.625], [1.75, 7.401], [2, 9.333], [2.25, 11.391], [2.5, 13.542], [2.75, 15.755],
                [3, 18], [3.25, 20.245], [3.5, 22.458], [3.75, 24.609], [4, 26.667], [4.25, 28.599],
                [4.5, 30.375], [4.75, 31.964], [5, 33.333], [5.25, 34.453], [5.5, 35.292], [5.75, 35.818],
                [6, 36]
              ],
              renk: 0
            },
            { id: "cur", tip: "cizgi", from: [3, 0], to: [3, 40], renk: 2, kesik: true, gizli: true },
            { id: "pt", tip: "nokta", x: 3, y: 18, renk: 2, etiket: "18 m", gizli: true },
            { id: "bk", tip: "yazi", x: 1.4, y: 22, metin: "yukarı bükülür", gizli: true }
          ],
          durumlar: [
            { metin: "Hızın integrali konumu verir: x = 3t² − t³/3. Eğrinin eğimi v–t'deki yüksekliktir." },
            {
              metin: "t = 3 s: a = 0, ==bükülme yönü değişiyor== (yukarıdan aşağıya). Konum 27 − 9 = 18 m.",
              goster: ["cur", "pt", "bk"]
            },
            {
              metin: "t = 6 s: eğim 0 (v = 0). Konum 108 − 72 = 36 m; ortalama hız 36/6 = 6 m/s.",
              set: {
                cur: { from: [6, 0], to: [6, 40] },
                pt: { x: 6, y: 36, etiket: "36 m" },
                bk: { metin: "aşağı bükülür", x: 4.7, y: 14 }
              }
            }
          ]
        }
      ]
    },
    {
      baslik: "Tuzak: sabit ivme denklemi",
      kisa: "İvme azalıyorsa dikdörtgen değil üçgen alanı al: v(3) = 9, 18 değil.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🟩",
              terim: "Area under the curve",
              tr: "eğri altı alan",
              tanim: "a–t altındaki alan Δv, v–t altındaki alan Δx. Eğri ise integralle bulunur.",
              ornek: "a = 6 − 2t, 0–3 s: ½ · 3 · 6 = 9 m/s."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "a–t: üçgen mi, dikdörtgen mi?",
          xlabel: "t (s)",
          ylabel: "a (m/s²)",
          xmax: 4,
          ymax: 7,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }],
          yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }],
          ogeler: [
            { id: "R", tip: "alan", noktalar: [[0, 0], [0, 6], [3, 6], [3, 0]], renk: 2, gizli: true },
            { id: "rt", tip: "yazi", x: 2, y: 6.5, metin: "dikdörtgen: 18 ✗", gizli: true },
            { id: "T", tip: "alan", noktalar: [[0, 0], [0, 6], [3, 0]], renk: 1, gizli: true },
            { id: "tt", tip: "yazi", x: 0.8, y: 1.4, metin: "üçgen: 9", gizli: true },
            { id: "L", tip: "cizgi", from: [0, 6], to: [3, 0], renk: 0 }
          ],
          durumlar: [
            { metin: "a = 6 − 2t: ivme 3 s içinde 6'dan 0'a iniyor." },
            { metin: "Doğru alan üçgendir: Δv = ½ · 3 · 6 = 9 m/s ✓.", goster: ["T", "tt"] },
            {
              metin: "v = 0 + 6 · 3 = 18 diyen, ivmeyi 3 s boyunca 6 sanmıştır: dikdörtgen alanı ✗.",
              goster: ["R", "rt"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Başlangıç ivmesini sabit sanmak",
          metin: "v = v₀ + at ile v = 0 + 6 · 3 = 18 m/s bulmak yanlış: ivme 6'da kalmadı, 3 s içinde 0'a indi. Doğru cevap 9 m/s, yani yarısı.",
          yanlis: "v(3) = 6 · 3 = 18 m/s.",
          dogru: "v(3) = ∫₀³ (6 − 2t) dt = 9 m/s; ivme sabit değilse mutlaka integral."
        }
      ]
    },
    {
      baslik: "Hızdan konuma: üstel sönme",
      kisa: "v = 10e^(−0,5t) için x = 20(1 − e^(−0,5t)); disk 20 m'ye yaklaşır ama geçemez.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧊",
              terim: "Exponential decay",
              tr: "üstel sönme",
              tanim: "Değerin kendisiyle orantılı azalması: v = v₀e^(−kt). Sıfıra yaklaşır ama hiç tam sıfır olmaz.",
              ornek: "Buzda kayan disk: v = 10e^(−0,5t) m/s."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Buzda kayan disk",
          durum: "Diskin hızı v = 10e^(−0,5t) m/s ve x(0) = 0. x(t)'yi bul; disk en fazla nereye varır?",
          adimlar: [
            "x = ∫10e^(−0,5t) dt = −20e^(−0,5t) + C (iç fonksiyonun türevi −0,5; ona böl).",
            "x(0) = 0 ⇒ −20 + C = 0 ⇒ C = 20.",
            "x = 20(1 − e^(−0,5t)).",
            "t → ∞ iken e^(−0,5t) → 0 ve x → 20 m. Disk 20 m'ye yaklaşır, geçemez."
          ],
          sonuc: "x = 20(1 − e^(−0,5t)); sınır konum 20 m"
        },
        {
          tip: "grafik",
          baslik: "v = 10e^(−0,5t) ve x = 20(1 − e^(−0,5t))",
          xlabel: "t (s)",
          ylabel: "v (m/s), x (m)",
          xmax: 10,
          ymax: 22,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            {
              id: "v",
              tip: "egri",
              noktalar: [
                [0, 10], [0.5, 7.788], [1, 6.065], [1.5, 4.724], [2, 3.679], [2.5, 2.865],
                [3, 2.231], [3.5, 1.738], [4, 1.353], [4.5, 1.054], [5, 0.821], [5.5, 0.639],
                [6, 0.498], [6.5, 0.388], [7, 0.302], [7.5, 0.235], [8, 0.183], [8.5, 0.143],
                [9, 0.111], [9.5, 0.087], [10, 0.067]
              ],
              renk: 0,
              etiket: "v"
            },
            {
              id: "x",
              tip: "egri",
              noktalar: [
                [0, 0], [0.5, 4.424], [1, 7.869], [1.5, 10.553], [2, 12.642], [2.5, 14.27],
                [3, 15.537], [3.5, 16.525], [4, 17.293], [4.5, 17.892], [5, 18.358], [5.5, 18.721],
                [6, 19.004], [6.5, 19.225], [7, 19.396], [7.5, 19.53], [8, 19.634], [8.5, 19.715],
                [9, 19.778], [9.5, 19.827], [10, 19.865]
              ],
              renk: 1,
              etiket: "x",
              gizli: true
            },
            { id: "as", tip: "cizgi", from: [0, 20], to: [10, 20], renk: 2, kesik: true, gizli: true },
            { id: "ast", tip: "yazi", x: 3, y: 20.9, metin: "sınır: 20 m", gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 17.293, renk: 3, etiket: "17,3 m", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Disk sürtünmeyle yavaşlıyor: v = 10e^(−0,5t) hızla sönüyor (10 → 0)." },
            { metin: "Hız eğrisinin altındaki alan konumdur: x = 20(1 − e^(−0,5t)) yükselir.", goster: ["x"] },
            {
              metin: "x, kesikli çizgiye (20 m) yaklaşır ama onu ==geçemez==: hızın altındaki toplam alan 20 m.",
              goster: ["as", "ast"]
            },
            { metin: "t = 4 s'de x = 20(1 − e⁻²) ≈ 17,3 m; limitin %86'sı.", goster: ["p4"] }
          ]
        }
      ]
    },
    {
      baslik: "Hıza bağlı ivme: Unit 2 önizlemesi",
      kisa: "a = −kv ise değişkenleri ayır: v = v₀e^(−kt); bu teknik Unit 2'nin konusu.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "✂️",
              terim: "Separation of variables",
              tr: "değişkenlere ayırma",
              tanim: "dv/dt = −kv gibi denklemde v'leri bir yana, t'leri öbür yana toplayıp iki tarafı integralleme.",
              ornek: "dv/v = −k dt ⇒ ln v = −kt + C ⇒ v = v₀e^(−kt)."
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Hava direnci: a = −kv",
          adimlar: [
            { baslik: "Denklem", metin: "a = dv/dt = −kv (direnç hızla büyür)." },
            { baslik: "Ayır", metin: "dv/v = −k dt (v'ler solda, t'ler sağda)." },
            { baslik: "İntegral", metin: "ln v = −kt + C; t = 0'da v = v₀ ⇒ C = ln v₀." },
            { baslik: "Sonuç", metin: "v = v₀e^(−kt). k = 0,5 için az önceki diskin hız formülü." }
          ]
        }
      ]
    },
    {
      baslik: "AP örneği: a = 2t − 4",
      kisa: "İki integral, iki başlangıç koşulu: parçacık t = 3 s'de başlangıç noktasına döner.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "a = 2t − 4, v(0) = 3 m/s, x(0) = 0",
          durum: "x(t)'yi türet ve t = 3 s'de başlangıç noktasına döndüğünü göster. v(2) ve 0–3 s yolunu bul.",
          adimlar: [
            "v = ∫(2t − 4) dt = t² − 4t + C₁; v(0) = 3 ⇒ C₁ = 3: v = t² − 4t + 3 = (t − 1)(t − 3).",
            "x = ∫(t² − 4t + 3) dt = t³/3 − 2t² + 3t + C₂; x(0) = 0 ⇒ C₂ = 0.",
            "Göster: x(3) = 9 − 18 + 9 = 0 ✓.",
            "v(2) = 4 − 8 + 3 = −1 m/s.",
            "Yol: v = 0 olan t = 1 s'te x(1) = 4/3 m. 0 → 4/3 m ileri, 4/3 → 0 geri: yol = 4/3 + 4/3 = 8/3 m."
          ],
          sonuc: "x(3) = 0; v(2) = −1 m/s; yol = 8/3 m ≈ 2,67 m; yer değiştirme 0"
        },
        {
          tip: "grafik",
          baslik: "x = t³/3 − 2t² + 3t",
          xlabel: "t (s)",
          ylabel: "x (m)",
          xmax: 4,
          ymax: 2,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 1, label: "1" }, { v: 1.333, label: "4/3" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.167, 0.446], [0.333, 0.79], [0.5, 1.042], [0.667, 1.21], [0.833, 1.304],
                [1, 1.333], [1.167, 1.307], [1.333, 1.235], [1.5, 1.125], [1.667, 0.988], [1.833, 0.832],
                [2, 0.667], [2.167, 0.502], [2.333, 0.346], [2.5, 0.208], [2.667, 0.099], [2.833, 0.026],
                [3, 0], [3.167, 0.029], [3.333, 0.123], [3.5, 0.292]
              ],
              renk: 0
            },
            { id: "p1", tip: "nokta", x: 1, y: 1.333, renk: 2, etiket: "t = 1: v = 0", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 0.667, renk: 3, etiket: "t = 2", gizli: true },
            { id: "p3", tip: "nokta", x: 3, y: 0, renk: 1, etiket: "t = 3", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç koşullarıyla bulunan konum: x(0) = 0, v(0) = 3 m/s." },
            { metin: "t = 1 s: v = 0, parçacık dönüyor. En uzak nokta x = 4/3 m.", goster: ["p1"] },
            { metin: "t = 2 s: x = 2/3 m ve v = −1 m/s: geri dönüyor.", goster: ["p2"] },
            { metin: "t = 3 s: x = 0, başlangıç noktasına geri döndü (v = 0, sonra yine ilerliyor).", goster: ["p3"] }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↔️",
              terim: "Displacement",
              tr: "yer değiştirme",
              tanim: "Başlangıç ve son konum farkı, Δx = x(3) − x(0).",
              ornek: "Parçacık geri döndüğü için Δx = 0."
            },
            {
              ikon: "👣",
              terim: "Distance",
              tr: "alınan yol",
              tanim: "İzlenen yolun toplam uzunluğu; dönüş anlarında bölerek bulunur.",
              ornek: "4/3 + 4/3 = 8/3 m."
            }
          ]
        }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Puan adımlara verilir: integral, sabit, başlangıç koşulu.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            { ikon: "✅", baslik: "İntegrali doğru kur", metin: "Hangi değişkenin neye göre integrali olduğunu yaz." },
            { ikon: "✅", baslik: "+C yaz", metin: "Her integralde bir sabit." },
            {
              ikon: "✅",
              baslik: "Başlangıç koşulunu açıkça uygula",
              metin: "v(0) = v₀ ve x(0) = x₀ ile C₁ ve C₂'yi bul."
            },
            { ikon: "✅", baslik: "Sembolik de sorulabilir", metin: "a = kt ⇒ v = v₀ + ½kt² ⇒ x = x₀ + v₀t + kt³/6." },
            { ikon: "🧮", baslik: "Hesap makinesi serbest", metin: "Sayısal belirli integral için kullanabilirsin." },
            {
              ikon: "➖",
              baslik: "Zor integral teknikleri gerekmez",
              metin: "Kısmi integral ve trigonometrik yerine koyma beklenmez."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Sabiti yazmamak",
          metin: "+C olmadan başlangıç koşulu uygulayamazsın; puan adımı kaybolur.",
          yanlis: "v = ∫a dt = 6t − t² (C yok).",
          dogru: "v = 6t − t² + C₁; v(0) = v₀ ile C₁ bulunur."
        }
      ]
    },
    {
      baslik: "Toparlayalım",
      kisa: "Sınavdan önce bu listeye bir kez bak.",
      bloklar: [
        {
          tip: "ozet",
          maddeler: [
            "İvme değişiyorsa sabit ivme denklemleri geçersiz; önce \"a sabit mi?\" diye sor.",
            "İvmenin integrali hız, hızın integrali konum; her adımda bir sabit çıkar.",
            "Sabitleri başlangıç koşulları belirler: C₁ = v₀, C₂ = x₀.",
            "a–t altındaki alan Δv, v–t altındaki alan Δx; alan yalnızca değişimi verir.",
            "Scooter: a = 6 − 2t için v = 6t − t², v_maks = 9 m/s (a = 0 iken); sabit ivme tuzağı 18 verir, doğrusu 9.",
            "Hız üstel sönüyorsa konum bir sınıra yaklaşır: v = 10e^(−0,5t) için 20 m.",
            "a = −kv gibi hıza bağlı ivme değişkenlere ayırmayla çözülür (Unit 2).",
            "Yol için v = 0 olan anlarda böl: a = 2t − 4 örneğinde yer değiştirme 0, yol 8/3 m."
          ]
        }
      ]
    }
  ]
};
