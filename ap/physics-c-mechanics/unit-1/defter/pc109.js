/* Kitpath not defteri · pc109 · 1.2–1.3 Sabit İvme ve Serbest Düşme
   Kaynak: ap-videolar/src/episodes/pc109 (script.ts + notes.md) ve ders sunumu (Bölüm 2: sabit ivme denklemleri, serbest düşme). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc109",
  amac: "Bu konu ivmenin sabit olduğu hareketi anlatıyor. Sabit ivme denklemlerini integralle türetmeyi, doğru denklemi seçmeyi, serbest düşmeyi ve yukarı atışı (tepede v = 0, a ≠ 0) öğreneceksin.",
  bolumler: [
    {
      baslik: "Sabit ivme: eşit sürede eşit hız değişimi",
      kisa: "İvme sabitse hız her saniye aynı miktarda değişir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🏐",
          baslik: "Yukarı atılan voleybol topu",
          metin: "Beden dersinde voleybol topunu dümdüz yukarı atıyorsun. Her saniyenin onda birinde fotoğraf çekersen noktalar yukarı çıkarken sıklaşır, inerken açılır. Ama her aralıkta hız ==aynı miktarda== değişir: ivme sabit. Sabit ivme için dört denklem var; ezberlemeyeceksin, integralle türeteceksin."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📏",
              terim: "Constant acceleration",
              tr: "sabit ivme",
              tanim: "Zamanla değişmeyen ivme: a = sabit. v–t grafiği düz bir çizgidir.",
              ornek: "Topun ivmesi çıkışta da inişte de −9,8 m/s²."
            },
            {
              ikon: "🚦",
              terim: "Initial velocity",
              tr: "başlangıç hızı",
              tanim: "t = 0 anındaki hız, v₀. Birinci integralin sabitidir.",
              ornek: "Topu 19,6 m/s ile atıyorsan v₀ = +19,6 m/s."
            },
            {
              ikon: "📍",
              terim: "Initial position",
              tr: "başlangıç konumu",
              tanim: "t = 0 anındaki konum, x₀ (ya da y₀). İkinci integralin sabitidir.",
              ornek: "25 m'lik çatıdan atılan top için y₀ = 25 m."
            }
          ]
        }
      ]
    },
    {
      baslik: "İki integral, iki denklem",
      kisa: "a'nın integrali v, v'nin integrali x; sabitler v₀ ve x₀'dır.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "a sabit iken türetme",
          adimlar: [
            { baslik: "Başlangıç", metin: "a = dv/dt ve a sabit." },
            {
              baslik: "Birinci integral",
              metin: "v = ∫a dt = at + C₁. t = 0'da v = v₀ olduğundan C₁ = v₀: v = v₀ + at."
            },
            {
              baslik: "İkinci integral",
              metin: "x = ∫(v₀ + at) dt = v₀t + ½at² + C₂. t = 0'da x = x₀ olduğundan C₂ = x₀."
            },
            { baslik: "Sonuç", metin: "x = x₀ + v₀t + ½at²." }
          ]
        },
        {
          tip: "grafik",
          baslik: "v = v₀ + at ve altındaki alan (v₀ = 4 m/s, a = 2 m/s²)",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 6,
          ymax: 16,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 14, label: "14" }],
          ogeler: [
            { id: "L", tip: "cizgi", from: [0, 4], to: [5, 14], renk: 0 },
            { id: "R", tip: "alan", noktalar: [[0, 0], [5, 0], [5, 4], [0, 4]], renk: 3, gizli: true },
            { id: "rt", tip: "yazi", x: 2.5, y: 1.6, metin: "v₀t = 20 m", gizli: true },
            { id: "Tr", tip: "alan", noktalar: [[0, 4], [5, 4], [5, 14]], renk: 1, gizli: true },
            { id: "tt", tip: "yazi", x: 3.9, y: 6.5, metin: "½·t·at = 25 m", gizli: true },
            { id: "tot", tip: "yazi", x: 3.2, y: 15.2, metin: "x − x₀ = 45 m", gizli: true }
          ],
          durumlar: [
            { metin: "v–t doğrusu: t = 0'da v₀ = 4 m/s'den başlar, eğimi a = 2 m/s². Bu, ==v = v₀ + at==." },
            {
              metin: "Doğrunun altındaki alanın alt kısmı bir dikdörtgen: v₀ · t = 4 · 5 = 20 m.",
              goster: ["R", "rt"]
            },
            { metin: "Üst kısmı bir üçgen: ½ · t · (at) = ½ · 5 · 10 = 25 m.", goster: ["Tr", "tt"] },
            {
              metin: "Toplam: x − x₀ = v₀t + ½at² = 20 + 25 = 45 m. İntegralle bulduğumuz ikinci denklemin aynısı.",
              goster: ["tot"]
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "t = (v − v₀) / a", alt: "1. denklemden" },
            "→",
            { t: "2. denkleme koy", alt: "t'yi yok et" },
            "→",
            { t: "v² = v₀² + 2a(x − x₀)", alt: "zaman yok" }
          ],
          aciklama: "Dördüncü denklem ortalama hız çarpı zamandır: x − x₀ = ½(v₀ + v)t."
        }
      ]
    },
    {
      baslik: "Dört denklem ve doğru seçim",
      kisa: "Eksik değişkene bak; denklemler yalnızca a sabitken geçerlidir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧰",
              terim: "Kinematic equations",
              tr: "kinematik denklemler",
              tanim: "Sabit ivme için dört denklem; hepsi a = sabit varsayımından çıkar. İlk üçü formül kâğıdında verilir; ½(v₀ + v)t biçimini ortalama hızdan kendin yazarsın.",
              ornek: "Zaman verilmemişse v² = v₀² + 2a(x − x₀) kullan."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Hangi denklem?",
          head: ["Denklem", "Eksik değişken", "Ne zaman kullan?"],
          rows: [
            ["v = v₀ + at", "x − x₀", "Yer değiştirme verilmemişse ve istenmiyorsa"],
            ["x = x₀ + v₀t + ½at²", "v", "Son hız yok"],
            ["v² = v₀² + 2a(x − x₀)", "t", "Zaman yok"],
            ["x − x₀ = ½(v₀ + v)t", "a", "İvme yok"]
          ],
          not: "Önce bilinmeyenleri yaz, sonra eksik değişkeni içermeyen denklemi seç."
        },
        {
          tip: "tuzak",
          baslik: "Her ivmede geçerli değil",
          metin: "Bu dört denklem yalnızca ivme sabitken geçerli. a = 6t gibi zamanla değişen bir ivmede integrali sen alırsın (sonraki konu).",
          yanlis: "a = 6t için v = v₀ + at.",
          dogru: "Önce sor: a sabit mi? Değilse v = v₀ + ∫a dt."
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: metrobüs",
      kisa: "Önce neyin bilinmediğine bak, sonra o değişkeni içermeyen denklemi seç.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Kalkış ve frenleme",
          durum: "Metrobüs duraktan kalkıp 8 s boyunca 1,5 m/s² ile hızlanıyor. Sonra şoför frene basıyor (a = −4 m/s²). Hız, 8 s'deki yol ve duruncaya kadar frenleme yolu nedir?",
          adimlar: [
            "Hız: v = v₀ + at = 0 + 1,5 · 8 = 12 m/s.",
            "Yol: x − x₀ = ½at² = ½ · 1,5 · 8² = 48 m.",
            "Frende zaman bilinmiyor: v² = v₀² + 2a(x − x₀) ⇒ 0 = 12² + 2(−4)(x − x₀).",
            "144 = 8(x − x₀) ⇒ x − x₀ = 18 m."
          ],
          sonuc: "12 m/s ve 48 m; frenleme yolu 18 m (toplam 66 m)"
        },
        {
          tip: "grafik",
          baslik: "Metrobüs: hızlanma ve frenleme",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 12,
          ymax: 14,
          xticks: [{ v: 8, label: "8" }, { v: 11, label: "11" }],
          yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }],
          ogeler: [
            { id: "h1", tip: "cizgi", from: [0, 0], to: [8, 12], renk: 0, gizli: true },
            { id: "ha", tip: "yazi", x: 2.8, y: 8.6, metin: "a = +1,5", gizli: true },
            { id: "A1", tip: "alan", noktalar: [[0, 0], [8, 12], [8, 0]], renk: 1, gizli: true },
            { id: "t1", tip: "yazi", x: 5.6, y: 2.6, metin: "48 m", gizli: true },
            { id: "h2", tip: "cizgi", from: [8, 12], to: [11, 0], renk: 2, gizli: true },
            { id: "hb", tip: "yazi", x: 10.4, y: 8, metin: "a = −4", gizli: true },
            { id: "A2", tip: "alan", noktalar: [[8, 0], [8, 12], [11, 0]], renk: 2, gizli: true },
            { id: "t2", tip: "yazi", x: 9.1, y: 2.4, metin: "18 m", gizli: true },
            { id: "tot", tip: "yazi", x: 7.5, y: 13.2, metin: "toplam 66 m", gizli: true }
          ],
          durumlar: [
            {
              metin: "Duraktan kalkış: 8 s boyunca a = +1,5 m/s². Hız 0'dan 12 m/s'ye çıkıyor.",
              goster: ["h1", "ha"]
            },
            {
              metin: "Alan = yer değiştirme: ½ · 8 · 12 = 48 m (denklemle ½at² = 48 ile aynı).",
              goster: ["A1", "t1"]
            },
            { metin: "Fren: a = −4 m/s². 12 m/s'den duruncaya 12/4 = 3 s sürer.", goster: ["h2", "hb"] },
            {
              metin: "Frenleme yolu ½ · 3 · 12 = 18 m; v² = v₀² + 2aΔx ile bulduğumuz değer. Toplam 48 + 18 = 66 m.",
              goster: ["A2", "t2", "tot"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Serbest düşme",
      kisa: "Yalnızca yerçekimi etkiyorsa ivme herkes için aynıdır: g = 9,8 m/s², aşağı yönlü.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🍎",
              terim: "Free fall",
              tr: "serbest düşme",
              tanim: "Cisme yalnızca yerçekiminin etki ettiği hareket. Yukarı çıkarken de aşağı inerken de geçerlidir.",
              ornek: "Hava direnci ihmal edilince anahtarlık ve kitap aynı anda yere düşer."
            },
            {
              ikon: "🌍",
              terim: "Acceleration due to gravity",
              tr: "yerçekimi ivmesi",
              tanim: "Dünya yüzeyinde g = 9,8 m/s², aşağı yönlü. Kütleden bağımsızdır, gezegene bağlıdır.",
              ornek: "Ay'da yaklaşık 1,6 m/s²."
            },
            {
              ikon: "🪂",
              terim: "Air resistance",
              tr: "hava direnci",
              tanim: "Havanın harekete karşı koyan etkisi. Unit 1'de ihmal edilir; Unit 2'de gelecek.",
              ornek: "Paraşüt açıldıktan bir süre sonra hava direnci ağırlığı dengeler ve hız sabitlenir (terminal hız)."
            },
            {
              ikon: "➕",
              terim: "Sign convention",
              tr: "işaret kuralı",
              tanim: "Bir yönü pozitif seçersin ve sonuna kadar korursun. Yukarı pozitifse a = −g.",
              ornek: "Yukarı + seçersen yukarı atılan topun ivmesi −9,8 m/s²."
            }
          ]
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 9.8, sonek: " m/s²", etiket: "Dünya'da g (aşağı)" },
            { deger: 1.6, sonek: " m/s²", etiket: "Ay'da g (yaklaşık)" },
            { deger: 9.8, onek: "−", sonek: " m/s²", etiket: "yukarı + seçilince a" }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🍎", baslik: "*Free fall*", maddeler: ["Yalnızca yerçekimi etkiyor", "İvme hep g, aşağı"] },
          sag: {
            ikon: "🪂",
            baslik: "Serbest düşme değil",
            maddeler: ["Başka kuvvet de etkiyor", "Hava direnci, el, ip…"]
          },
          oyun: [
            {
              metin: "Elinden çıkmış, havada yükselen top (hava direnci ihmal).",
              cevap: "sol",
              neden: "Yükselirken de tek kuvvet yerçekimi: ivme −g."
            },
            { metin: "Paraşütle inen kişi.", cevap: "sag", neden: "Hava direnci de etkiyor." },
            {
              metin: "Topu elinle yukarı iterken.",
              cevap: "sag",
              neden: "El kuvveti var; serbest düşme bıraktıktan sonra başlar."
            },
            {
              metin: "Tepe noktasında anlık duran top.",
              cevap: "sol",
              neden: "Hız sıfır ama yalnızca yerçekimi var: ivme hâlâ −g."
            }
          ]
        }
      ]
    },
    {
      baslik: "Yukarı atış: tepede v = 0, a ≠ 0",
      kisa: "Çıkış ve iniş tek v–t doğrusudur; tepede hız sıfır, ivme sıfır değil.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⛰️",
              terim: "Maximum height",
              tr: "en büyük yükseklik",
              tanim: "Hızın sıfır olduğu en yüksek nokta. v² = v₀² + 2a(y − y₀) ile y_maks = v₀²/(2g).",
              ornek: "v₀ = 19,6 m/s: t = 2 s'de tepe, y_maks = 19,6 m."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Yukarı atış: v–t (v₀ = 19,6 m/s)",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 4,
          ymax: 40,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [
            { v: 0, label: "-20" },
            { v: 10, label: "-10" },
            { v: 20, label: "0" },
            { v: 30, label: "10" },
            { v: 40, label: "20" }
          ],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 20], to: [4, 20], renk: 0, kesik: true },
            { id: "L", tip: "cizgi", from: [0, 39.6], to: [4, 0.4], renk: 0 },
            { id: "top", tip: "nokta", x: 2, y: 20, renk: 3, etiket: "tepe: v = 0", kilavuz: true, gizli: true },
            { id: "up", tip: "alan", noktalar: [[0, 20], [0, 39.6], [2, 20]], renk: 1, gizli: true },
            { id: "ut", tip: "yazi", x: 0.65, y: 23, metin: "+19,6 m", gizli: true },
            { id: "dn", tip: "alan", noktalar: [[2, 20], [4, 20], [4, 0.4]], renk: 2, gizli: true },
            { id: "dt", tip: "yazi", x: 3.3, y: 16.5, metin: "−19,6 m", gizli: true }
          ],
          durumlar: [
            { metin: "Tek bir düz çizgi: eğim −9,8 m/s². Çıkış ve iniş aynı doğrunun iki yarısı." },
            { metin: "v = 19,6 − 9,8t = 0 ⇒ t = 2 s. Tepede hız sıfır.", goster: ["top"] },
            { metin: "0–2 s: yükselme, alan +19,6 m (en büyük yükseklik).", goster: ["up", "ut"] },
            {
              metin: "2–4 s: alçalma, alan −19,6 m. Toplam yer değiştirme 0: top atıldığı yüksekliğe dönüyor, hızı −19,6 m/s.",
              goster: ["dn", "dt"]
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Yukarı atış: y–t",
          xlabel: "t (s)",
          ylabel: "y (m)",
          xmax: 4,
          ymax: 22,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }, { v: 15, label: "15" }, { v: 20, label: "20" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 4.594], [0.5, 8.575], [0.75, 11.944], [1, 14.7], [1.25, 16.844],
                [1.5, 18.375], [1.75, 19.294], [2, 19.6], [2.25, 19.294], [2.5, 18.375], [2.75, 16.844],
                [3, 14.7], [3.25, 11.944], [3.5, 8.575], [3.75, 4.594], [4, 0]
              ],
              renk: 0
            },
            { id: "tp", tip: "nokta", x: 2, y: 19.6, renk: 3, etiket: "19,6 m", kilavuz: true, gizli: true },
            { id: "end", tip: "nokta", x: 4, y: 0, renk: 1, etiket: "yere dönüş", gizli: true }
          ],
          durumlar: [
            { metin: "y = 19,6t − 4,9t²: bir parabol. Eğimi (hız) önce pozitif, sonra negatif." },
            { metin: "t = 2 s'de tepe: eğim 0 (v = 0), y = 19,6 m.", goster: ["tp"] },
            {
              metin: "t = 4 s'de top aynı yüksekliğe geri döner (y = 0). Çıkış ve iniş süreleri eşit.",
              goster: ["end"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Tepede ivme sıfır değil",
          metin: "Tepede hız sıfırdır ama ivme −9,8 m/s² olarak kalır; yoksa top orada asılı kalırdı. v–t doğrusunun eğimi hiç değişmez.",
          yanlis: "Tepede v = 0 olduğuna göre a = 0.",
          dogru: "Tepede v = 0, a = −g. Çıkış ve iniş aynı v–t doğrusunun üzerindedir."
        }
      ]
    },
    {
      baslik: "AP örneği: 25 m çatıdan atış",
      kisa: "a = −g'den iki integral al, başlangıç koşullarını koy, kökü fiziksel seç.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Çatıdan dümdüz yukarı atış",
          durum: "25 m yüksekliğindeki çatıdan bir top 12 m/s ile dümdüz yukarı atılıyor. y(t)'yi türet. Top yere ne zaman ve hangi süratle çarpar?",
          adimlar: [
            "a = −9,8 m/s²; v = ∫a dt = −9,8t + C₁, v(0) = 12 ⇒ v = 12 − 9,8t.",
            "y = ∫v dt = 12t − 4,9t² + C₂, y(0) = 25 ⇒ y = 25 + 12t − 4,9t².",
            "Yere çarpma y = 0: 4,9t² − 12t − 25 = 0 ⇒ t = (12 ± √634)/9,8.",
            "Pozitif kök t ≈ 3,79 s. Negatif kök ≈ −1,34 s fiziksel değil.",
            "v = 12 − 9,8 · 3,79 ≈ −25,2 m/s: sürat 25,2 m/s, aşağı yönlü.",
            "Kontrol: v² = 12² + 2(9,8)(25) = 634 ⇒ |v| = √634 ≈ 25,2 m/s."
          ],
          sonuc: "t ≈ 3,79 s ve v ≈ −25,2 m/s (sürat 25,2 m/s)"
        },
        {
          tip: "grafik",
          baslik: "y = 25 + 12t − 4,9t²",
          xlabel: "t (s)",
          ylabel: "y (m)",
          xmax: 4,
          ymax: 34,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 10, label: "10" }, { v: 20, label: "20" }, { v: 30, label: "30" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 25], [0.2, 27.201], [0.399, 29.011], [0.599, 30.43], [0.799, 31.459], [0.998, 32.096],
                [1.198, 32.344], [1.398, 32.2], [1.597, 31.666], [1.797, 30.74], [1.997, 29.425], [2.196, 27.718],
                [2.396, 25.621], [2.596, 23.133], [2.795, 20.254], [2.995, 16.985], [3.195, 13.325], [3.394, 9.274],
                [3.594, 4.832], [3.794, 0]
              ],
              renk: 0
            },
            { id: "s", tip: "nokta", x: 0, y: 25, renk: 1, etiket: "y₀ = 25 m" },
            {
              id: "tp",
              tip: "nokta",
              x: 1.224,
              y: 32.347,
              renk: 3,
              etiket: "tepe 32,3 m",
              kilavuz: true,
              gizli: true
            },
            { id: "hit", tip: "nokta", x: 3.794, y: 0, renk: 2, etiket: "t ≈ 3,79 s", gizli: true }
          ],
          durumlar: [
            { metin: "Top çatıdan (y₀ = 25 m) 12 m/s ile yukarı atılıyor." },
            { metin: "Önce yükselir: v = 12 − 9,8t = 0 ⇒ t ≈ 1,22 s, y ≈ 32,3 m.", goster: ["tp"] },
            { metin: "Sonra düşer ve y = 0 olduğunda yere çarpar: t ≈ 3,79 s.", goster: ["hit"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "İkinci derece denklemin iki kökü",
          metin: "Denklem iki kök verir. Negatif t, atıştan önceki bir anı gösterir; cevap olamaz.",
          yanlis: "t = −1,34 s de olası bir cevaptır.",
          dogru: "Zaman t ≥ 0 olmalı: tek geçerli kök 3,79 s."
        }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Formül kâğıdı var; sen türetmeyi, işareti ve denklem seçimini göster.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            { ikon: "✅", baslik: "Formül kâğıdı", metin: "Sabit ivme denklemleri kâğıtta var, ezber gerekmez." },
            {
              ikon: "✅",
              baslik: "\"a = dv/dt'den başlayarak türet\"",
              metin: "İntegral + başlangıç koşulu, tam bu bölümdeki gibi."
            },
            { ikon: "✅", baslik: "Önce \"a sabit mi?\"", metin: "Değilse integral al." },
            { ikon: "✅", baslik: "Tek işaret kuralı", metin: "Yukarı + seçtiysen a = −g; sonuna kadar koru." },
            { ikon: "➖", baslik: "Hava direnci Unit 1'de yok", metin: "Unit 2'de gelecek." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "İşareti ortada değiştirmek",
          metin: "Yukarıyı pozitif seçip sonra g'yi +9,8 yazmak işareti bozar. Yerçekimi ivmesi seçilen eksene göre yazılır.",
          yanlis: "Yukarı + seçip a = +9,8 yazmak.",
          dogru: "Yukarı + ise a = −9,8; aşağı + ise a = +9,8. Seçimi baştan söyle."
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
            "a sabitse v = v₀ + at; a = dv/dt'nin integralidir, sabit v₀ olur.",
            "x = x₀ + v₀t + ½at²: v'nin integralidir; v–t altı dikdörtgen + üçgendir.",
            "Zaman yoksa v² = v₀² + 2a(x − x₀); a yoksa x − x₀ = ½(v₀ + v)t.",
            "Bu denklemler yalnızca ivme sabitken geçerli; önce \"a sabit mi?\" diye sor.",
            "*Free fall*: yalnızca yerçekimi; a = −g (yukarı +), kütleden bağımsız.",
            "Tepede v = 0 ama a = −g; çıkış ve iniş aynı v–t doğrusudur.",
            "İkinci derece denklemde negatif kökü ele; metrobüs: 12 m/s, 48 m, 18 m. Çatıdan atış: 3,79 s, 25,2 m/s."
          ]
        }
      ]
    }
  ]
};
