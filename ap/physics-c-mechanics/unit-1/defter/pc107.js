/* Kitpath not defteri · pc107 · 1.2 İvme
   Kaynak: ap-videolar/src/episodes/pc107 (script.ts + notes.md) ve ders sunumu (Bölüm 2: ivme ve işaret kuralları). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc107",
  amac: "Bu konu ivmeyi anlatıyor: hızın zamanla değişim hızı. Ortalama ve anlık ivmeyi hesaplamayı, v–t grafiğinden okumayı ve v ile a'nın işaretlerinden cismin hızlanıp yavaşladığını bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "İvme: hızın değişim hızı",
      kisa: "İvme, hızın zamana göre değişimidir; birimi m/s².",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🚌",
          baslik: "Koltuğa yapışmak",
          metin: "Okul servisi kırmızı ışıkta duruyor. Yeşil yanınca 4 saniyede 12 m/s hıza çıkıyor ve sen koltuğa yapışıyorsun. Hissettiğin şey hızın kendisi değil, ==hızın değişimi==. Buna *acceleration* denir."
        },
        {
          tip: "formul",
          parcalar: [
            { t: "a_ort", alt: "ortalama ivme" },
            "=",
            { t: "Δv / Δt", alt: "hız farkı / zaman farkı" },
            "=",
            { t: "(12 − 0) / 4", alt: "servis" },
            "=",
            { t: "3 m/s²", alt: "her saniye +3 m/s" }
          ],
          aciklama: "Hız her saniye 3 m/s arttığı için birim m/s bölü s, yani m/s²."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🚀",
              terim: "Acceleration",
              tr: "ivme",
              tanim: "Hızın zamanla değişim hızı. Vektördür; işareti yönünü söyler.",
              ornek: "Hız her saniye 3 m/s artıyorsa a = 3 m/s²."
            },
            {
              ikon: "🧮",
              terim: "Average acceleration",
              tr: "ortalama ivme",
              tanim: "Bir zaman aralığında hız değişiminin süreye oranı: a_ort = Δv/Δt = (v₂ − v₁)/(t₂ − t₁).",
              ornek: "Servis 4 s'de 0'dan 12 m/s'ye çıktıysa 3 m/s²."
            }
          ]
        }
      ]
    },
    {
      baslik: "Ortalama ivme: tablodan ve frenlemeden",
      kisa: "Tablo da verilse formül aynı; işaret ivmenin yönünü söyler.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Servisin hızı",
          head: ["t (s)", "0", "1", "2", "3", "4"],
          rows: [["v (m/s)", "0", "3", "6", "9", "12"]],
          not: "Her saniye +3 m/s: ivme sabit ve 3 m/s². Tabloda hep (v₂ − v₁)/(t₂ − t₁) hesapla."
        },
        {
          tip: "ornek",
          baslik: "Servis frene basıyor",
          durum: "Servis 15 m/s ile giderken frene basıyor ve 2 saniye sonra hızı 5 m/s oluyor. Ortalama ivme nedir?",
          adimlar: ["Δv = v₂ − v₁ = 5 − 15 = −10 m/s.", "Δt = 2 s.", "a_ort = −10 / 2 = −5 m/s²."],
          sonuc: "a_ort = −5 m/s². Eksi işaret, ivmenin −x yönünde olduğunu söyler."
        }
      ]
    },
    {
      baslik: "Anlık ivme ve ikinci türev",
      kisa: "a = dv/dt = d²x/dt²: konumdan iki kez türev alırsın.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "x(t)", alt: "konum" },
            "→",
            { t: "v = dx/dt", alt: "bir türev" },
            "→",
            { t: "a = dv/dt = d²x/dt²", alt: "iki türev" },
            "→",
            { t: "jerk = da/dt", alt: "üç türev" }
          ],
          aciklama: "Örnek: v = 4t² ise a = 8t; t = 2 s'de a = 16 m/s²."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎯",
              terim: "Instantaneous acceleration",
              tr: "anlık ivme",
              tanim: "Belirli bir andaki ivme: a = dv/dt. v–t grafiğinde teğetin eğimidir.",
              ornek: "v = 4t² ⇒ a = 8t ⇒ a(2) = 16 m/s²."
            },
            {
              ikon: "2️⃣",
              terim: "Second derivative",
              tr: "ikinci türev",
              tanim: "İvme, konumun ikinci türevidir: a = d²x/dt². Konumdan iki kez türev alırsın.",
              ornek: "x = t³ ⇒ v = 3t² ⇒ a = 6t."
            },
            {
              ikon: "🌀",
              terim: "Jerk",
              tr: "sarsıntı",
              tanim: "İvmenin zamana göre türevi, da/dt. ==Sınavda gerekmez==; yalnızca zinciri tamamlar.",
              ornek: "a = 8t ise jerk = 8 m/s³."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "v = 4t²: teğetin eğimi ivmedir",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 4,
          ymax: 48,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 12, label: "12" }, { v: 24, label: "24" }, { v: 36, label: "36" }, { v: 48, label: "48" }],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.2, 0.16], [0.4, 0.64], [0.6, 1.44], [0.8, 2.56], [1, 4],
                [1.2, 5.76], [1.4, 7.84], [1.6, 10.24], [1.8, 12.96], [2, 16], [2.2, 19.36],
                [2.4, 23.04], [2.6, 27.04], [2.8, 31.36], [3, 36], [3.2, 40.96], [3.4, 46.24]
              ],
              renk: 0
            },
            { id: "tg", tip: "cizgi", from: [0.6, 0.8], to: [1.4, 7.2], renk: 2, gizli: true },
            { id: "p", tip: "nokta", x: 1, y: 4, renk: 2, gizli: true },
            { id: "al", tip: "yazi", x: 2.6, y: 6, metin: "a = 8 m/s²", gizli: true }
          ],
          durumlar: [
            { metin: "v = 4t² eğrisi: hız zamanla artıyor, eğri gittikçe dikleşiyor." },
            { metin: "t = 1 s: teğetin eğimi 8, yani ==a = 8 m/s²==.", goster: ["tg", "p", "al"] },
            {
              metin: "t = 2 s: eğim 16, a = 16 m/s².",
              set: { tg: { from: [1.6, 9.6], to: [2.4, 22.4] }, p: { x: 2, y: 16 }, al: { metin: "a = 16 m/s²", y: 14 } }
            },
            {
              metin: "t = 3 s: eğim 24, a = 24 m/s². İvme de artıyor: a = dv/dt = 8t.",
              set: { tg: { from: [2.6, 26.4], to: [3.4, 45.6] }, p: { x: 3, y: 36 }, al: { metin: "a = 24 m/s²", y: 22 } }
            }
          ]
        }
      ]
    },
    {
      baslik: "v–t grafiğini okumak",
      kisa: "v–t grafiğinde yükseklik hızı, eğim ivmeyi verir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "v–t grafiği: yükseklik hız, eğim ivme",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 10,
          ymax: 12,
          xticks: [{ v: 3, label: "3" }, { v: 6, label: "6" }, { v: 9, label: "9" }],
          yticks: [
            { v: 2, label: "-2" },
            { v: 4, label: "0" },
            { v: 6, label: "2" },
            { v: 8, label: "4" },
            { v: 10, label: "6" },
            { v: 12, label: "8" }
          ],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 4], to: [10, 4], renk: 0, kesik: true },
            { id: "zl", tip: "yazi", x: 0.3, y: 3.4, metin: "v = 0", hiza: "start" },
            { id: "s1", tip: "cizgi", from: [0, 4], to: [3, 10], renk: 1, gizli: true },
            { id: "a1", tip: "yazi", x: 1, y: 8.2, metin: "a = +2", gizli: true },
            { id: "s2", tip: "cizgi", from: [3, 10], to: [6, 10], renk: 0, gizli: true },
            { id: "a2", tip: "yazi", x: 4.5, y: 10.8, metin: "a = 0", gizli: true },
            { id: "s3", tip: "cizgi", from: [6, 10], to: [10, 2], renk: 2, gizli: true },
            { id: "a3", tip: "yazi", x: 8.2, y: 7.4, metin: "a = −2", gizli: true },
            { id: "kz", tip: "nokta", x: 9, y: 4, renk: 3, etiket: "t = 9", gizli: true },
            { id: "neg", tip: "alan", noktalar: [[9, 4], [10, 4], [10, 2]], renk: 2, gizli: true },
            { id: "nt", tip: "yazi", x: 9.5, y: 1.4, metin: "v < 0", gizli: true }
          ],
          durumlar: [
            { metin: "Eksen çizgisi v = 0. Çizginin yüksekliği hızı verir." },
            { metin: "0–3 s: hız 0'dan 6 m/s'ye düz çıkıyor. Eğim 6/3 = 2, ==a = +2 m/s²==.", goster: ["s1", "a1"] },
            { metin: "3–6 s: çizgi yatay. Hız sabit (6 m/s), eğim 0, a = 0.", goster: ["s2", "a2"] },
            { metin: "6–10 s: çizgi düşüyor. Eğim (−2 − 6)/4 = −2, a = −2 m/s².", goster: ["s3", "a3"] },
            {
              metin: "t = 9 s'de çizgi eksenin altına geçiyor: parçacık geri dönmeye başlıyor. Ama eğim değişmedi, ==a hâlâ −2 m/s²==.",
              goster: ["kz", "neg", "nt"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📊",
              terim: "Velocity–time graph",
              tr: "hız–zaman grafiği",
              tanim: "Yatay eksen zaman, dikey eksen hız. Yükseklik hızı, eğim ivmeyi verir; altındaki alan yer değiştirmedir.",
              ornek: "(0, 0) → (3, 6) doğrusunun eğimi 6/3 = 2 m/s²."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Eksenin altına inmek",
          metin: "v–t çizgisi eksenin altına inince cismin geri döndüğünü görürsün, ama ivmeyi eğim belirler. Eksen kesişimi eğimi değiştirmez.",
          yanlis: "Çizgi eksenin altına inince ivme de işaret değiştirir.",
          dogru: "t = 9 s'de çizgi eksenin altına geçer ama eğim t = 6'dan beri −2 m/s² kalır."
        }
      ]
    },
    {
      baslik: "Hızlanıyor mu, yavaşlıyor mu?",
      kisa: "v ve a aynı işaretliyse sürat artar, zıt işaretliyse azalır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⏩",
              terim: "Speeding up",
              tr: "hızlanma",
              tanim: "Sürat artıyor: v ve a aynı işaretli, yani ivme hareketle aynı yönde.",
              ornek: "v = −6, a = −2: ikisi de eksi; sürat 6 → 8 → 10 m/s."
            },
            {
              ikon: "⏪",
              terim: "Slowing down",
              tr: "yavaşlama",
              tanim: "Sürat azalıyor: v ve a zıt işaretli, yani ivme harekete ters yönde.",
              ornek: "v = +15, a = −5: sürat 15 → 10 → 5 m/s."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Dört durum",
          head: ["Hız v", "İvme a", "Yön", "Sürat"],
          rows: [
            ["+", "+", "+x yönünde", "hızlanıyor"],
            ["+", "−", "+x yönünde", "yavaşlıyor"],
            ["−", "+", "−x yönünde", "yavaşlıyor"],
            ["−", "−", "−x yönünde", "hızlanıyor"]
          ],
          vurgu: 3,
          not: "Ezber gerekmez: iki işareti karşılaştır, aynıysa hızlanıyor."
        },
        {
          tip: "ikili",
          sol: { ikon: "⏩", baslik: "*Speeding up*", maddeler: ["v ve a aynı işaretli", "ivme hareketle aynı yönde"] },
          sag: { ikon: "⏪", baslik: "*Slowing down*", maddeler: ["v ve a zıt işaretli", "ivme harekete ters yönde"] },
          oyun: [
            { metin: "v = −6 m/s, a = −2 m/s²", cevap: "sol", neden: "İkisi de eksi: sola doğru hızlanıyor." },
            { metin: "v = +10 m/s, a = −3 m/s²", cevap: "sag", neden: "Zıt işaret: sürat azalıyor." },
            {
              metin: "v = −4 m/s, a = +2 m/s²",
              cevap: "sag",
              neden: "Zıt işaret: sola giderken ivme sağa, yavaşlıyor."
            },
            { metin: "v = +2 m/s, a = +5 m/s²", cevap: "sol", neden: "İkisi de artı: sürat artıyor." },
            {
              metin: "Araba geri geri gidiyor ve ivmesi de geri yönde.",
              cevap: "sol",
              neden: "Hareketle ivme aynı yönde (ikisi de −x): hızlanıyor."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Negatif ivme yavaşlama demek değil",
          metin: "v = −6 m/s ve a = −2 m/s²: araba geri geri giderken hızlanıyor. Yavaşlamak için iki işaretin zıt olması gerekir.",
          yanlis: "a < 0 ise cisim yavaşlıyor.",
          dogru: "İki işareti karşılaştır: v ve a aynıysa hızlanma, zıtsa yavaşlama."
        }
      ]
    },
    {
      baslik: "Hareket diyagramında ivme",
      kisa: "Noktalar açılıyorsa hızlanıyor, kapanıyorsa yavaşlıyor; ardışık hız oklarının farkı Δv'dir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎞️",
              terim: "Motion diagram",
              tr: "hareket diyagramı",
              tanim: "Cismin konumunu eşit zaman aralıklarıyla işaretlersin; her noktaya hız oku eklenir. Okun boyu sürat, yönü hareketin yönüdür.",
              ornek: "Aralıklar 1, 3, 5, 7 m ise sürat her saniye aynı miktarda artıyor."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "İki bisikletli, her 1 s'de bir kare",
          xlabel: "x (m)",
          ylabel: "",
          xmax: 17,
          ymax: 5.5,
          xticks: [
            { v: 0, label: "0" },
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" },
            { v: 16, label: "16" }
          ],
          yticks: [],
          ogeler: [
            { id: "a0", tip: "nokta", x: 0, y: 3.4, renk: 1, gizli: true },
            { id: "a1", tip: "nokta", x: 1, y: 3.4, renk: 1, gizli: true },
            { id: "a2", tip: "nokta", x: 4, y: 3.4, renk: 1, gizli: true },
            { id: "a3", tip: "nokta", x: 9, y: 3.4, renk: 1, gizli: true },
            { id: "a4", tip: "nokta", x: 16, y: 3.4, renk: 1, gizli: true },
            { id: "b0", tip: "nokta", x: 0, y: 1.4, renk: 2, gizli: true },
            { id: "b1", tip: "nokta", x: 7, y: 1.4, renk: 2, gizli: true },
            { id: "b2", tip: "nokta", x: 12, y: 1.4, renk: 2, gizli: true },
            { id: "b3", tip: "nokta", x: 15, y: 1.4, renk: 2, gizli: true },
            { id: "b4", tip: "nokta", x: 16, y: 1.4, renk: 2, gizli: true },
            { id: "ga0", tip: "yazi", x: 0.5, y: 4, metin: "1", gizli: true },
            { id: "ga1", tip: "yazi", x: 2.5, y: 4, metin: "3", gizli: true },
            { id: "ga2", tip: "yazi", x: 6.5, y: 4, metin: "5", gizli: true },
            { id: "ga3", tip: "yazi", x: 12.5, y: 4, metin: "7", gizli: true },
            { id: "gb0", tip: "yazi", x: 3.5, y: 2, metin: "7", gizli: true },
            { id: "gb1", tip: "yazi", x: 9.5, y: 2, metin: "5", gizli: true },
            { id: "gb2", tip: "yazi", x: 13.5, y: 2, metin: "3", gizli: true },
            { id: "gb3", tip: "yazi", x: 15.5, y: 2, metin: "1", gizli: true },
            { id: "acA", tip: "ok", from: [1, 4.6], to: [5, 4.6], renk: 1, gizli: true },
            { id: "acAt", tip: "yazi", x: 3, y: 4.9, metin: "a → harekete doğru", gizli: true },
            { id: "acB", tip: "ok", from: [13, 2.6], to: [9, 2.6], renk: 2, gizli: true },
            { id: "acBt", tip: "yazi", x: 11, y: 2.9, metin: "← a harekete ters", gizli: true }
          ],
          durumlar: [
            {
              metin: "Üst satır: hızlanan bisikletli. Noktalar sağa doğru açılıyor.",
              goster: ["a0", "a1", "a2", "a3", "a4"]
            },
            {
              metin: "Aralıklar 1, 3, 5, 7 m: her saniye ==2 m fazla yol==. Hız eşit adımlarla artıyor, ivme sabit.",
              goster: ["ga0", "ga1", "ga2", "ga3"]
            },
            {
              metin: "Alt satır: fren yapan bisikletli. Aralıklar 7, 5, 3, 1 m: her saniye 2 m az yol.",
              goster: ["b0", "b1", "b2", "b3", "b4", "gb0", "gb1", "gb2", "gb3"]
            },
            {
              metin: "Hızlananın ivme oku harekete doğru, fren yapanınki harekete ters.",
              goster: ["acA", "acAt", "acB", "acBt"]
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "Diyagramdan ivme yönünü bulmak",
          adimlar: [
            { baslik: "İki hız oku al", metin: "Ardışık iki noktadaki v₁ ve v₂ oklarını seç." },
            { baslik: "Farkı çiz", metin: "Δv = v₂ − v₁: v₁'in ucundan v₂'nin ucuna giden ok." },
            { baslik: "Yönü oku", metin: "Oklar uzuyorsa Δv ileri (a ileri), kısalıyorsa Δv geri (a geri)." }
          ]
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: hangi aralıkta hızlanır?",
      kisa: "İşaret çizgisi kur: v ve a aynı işaretli aralıklarda sürat artar.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "x = t³ − 6t² + 9t (m), t ≥ 0",
          durum: "Parçacığın sürati hangi aralıklarda artar? Gerekçelendir.",
          adimlar: [
            "v = dx/dt = 3t² − 12t + 9 = 3(t − 1)(t − 3): v = 0 için t = 1 ve 3 s.",
            "a = dv/dt = 6t − 12 = 6(t − 2): a = 0 için t = 2 s.",
            "Üç noktayla zamanı aralıklara böl: 0–1, 1–2, 2–3 ve 3'ten sonra.",
            "Her aralıkta iki işarete bak (tablo).",
            "Kontrol: t = 1,5 s'de v = −2,25 m/s, a = −3 m/s²; ikisi de eksi, gerçekten aynı işaret."
          ],
          sonuc: "Sürat 1 < t < 2 s aralığında ve t > 3 s için artar; gerekçe: bu aralıklarda v ve a aynı işaretli."
        },
        {
          tip: "tablo",
          head: ["Aralık (s)", "v", "a", "Sürat"],
          rows: [
            ["0 – 1", "+", "−", "azalıyor"],
            ["1 – 2", "−", "−", "artıyor"],
            ["2 – 3", "−", "+", "azalıyor"],
            ["3'ten sonra", "+", "+", "artıyor"]
          ],
          vurgu: 1
        },
        {
          tip: "grafik",
          baslik: "v = 3(t − 1)(t − 3) ve sürat |v|",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 4,
          ymax: 12,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [
            { v: 0, label: "-3" },
            { v: 3, label: "0" },
            { v: 6, label: "3" },
            { v: 9, label: "6" },
            { v: 12, label: "9" }
          ],
          ogeler: [
            { id: "zero", tip: "cizgi", from: [0, 3], to: [4, 3], renk: 0, kesik: true },
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 12], [0.25, 9.188], [0.5, 6.75], [0.75, 4.688], [1, 3], [1.25, 1.688],
                [1.5, 0.75], [1.75, 0.188], [2, 0], [2.25, 0.188], [2.5, 0.75], [2.75, 1.688],
                [3, 3], [3.25, 4.688], [3.5, 6.75], [3.75, 9.188], [4, 12]
              ],
              renk: 0
            },
            { id: "z1", tip: "nokta", x: 1, y: 3, renk: 3, etiket: "t = 1", gizli: true },
            { id: "z3", tip: "nokta", x: 3, y: 3, renk: 3, etiket: "t = 3", gizli: true },
            { id: "vn", tip: "yazi", x: 2, y: 1.3, metin: "v < 0", gizli: true },
            {
              id: "h1",
              tip: "egri",
              noktalar: [[1, 3], [1.25, 4.313], [1.5, 5.25], [1.75, 5.813], [2, 6]],
              renk: 1,
              gizli: true
            },
            {
              id: "h2",
              tip: "egri",
              noktalar: [[3, 3], [3.25, 4.688], [3.5, 6.75], [3.75, 9.188], [4, 12]],
              renk: 1,
              gizli: true
            },
            { id: "hs", tip: "yazi", x: 2, y: 10.5, metin: "sürat artıyor", gizli: true }
          ],
          durumlar: [
            { metin: "v(t) = 3(t − 1)(t − 3): bir parabol. Eksenin altına inen kısım v < 0." },
            {
              metin: "v = 0 olan iki an: t = 1 s ve t = 3 s. Arada parçacık −x yönünde gider.",
              goster: ["z1", "z3", "vn"]
            },
            {
              metin: "Sürat |v|: eksenin altındaki parçayı yukarı katla.",
              set: {
                c: {
                  noktalar: [
                    [0, 12], [0.25, 9.188], [0.5, 6.75], [0.75, 4.688], [1, 3], [1.25, 4.313],
                    [1.5, 5.25], [1.75, 5.813], [2, 6], [2.25, 5.813], [2.5, 5.25], [2.75, 4.313],
                    [3, 3], [3.25, 4.688], [3.5, 6.75], [3.75, 9.188], [4, 12]
                  ]
                }
              },
              gizle: ["vn"]
            },
            {
              metin: "|v|'nin yükseldiği kısımlar (1–2 s ve t > 3 s) sürat artıyor demek; tablodaki sonucun aynısı.",
              goster: ["h1", "h2", "hs"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "İvmeyi türet; hızlanmayı iki işaretle gerekçelendir.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✅",
              baslik: "İvmeyi türetmek",
              metin: "a = dv/dt = d²x/dt² olarak yaz ve konum fonksiyonundan hesapla."
            },
            {
              ikon: "✅",
              baslik: "\"Hızlanıyor mu?\" sorusunu gerekçelendirmek",
              metin: "v ve a işaretlerini yan yana yaz ve karşılaştır."
            },
            { ikon: "✅", baslik: "Tablodan ortalama ivme", metin: "(v₂ − v₁)/(t₂ − t₁)." },
            { ikon: "➖", baslik: "*Jerk* gerekmez", metin: "İvmenin türevine ihtiyacın yok." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Tek işaretli gerekçe puan getirmez",
          metin: "FRQ'da \"a < 0, o yüzden yavaşlıyor\" yazmak yetmez; v'nin işaretini de söylemelisin.",
          yanlis: "\"a < 0 so slowing down.\"",
          dogru: "\"v > 0 and a < 0, opposite signs → slowing down.\""
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
            "Ortalama ivme a_ort = Δv/Δt = (v₂ − v₁)/(t₂ − t₁); birimi m/s².",
            "Anlık ivme a = dv/dt = d²x/dt²: konumun ikinci türevi.",
            "v–t grafiğinde yükseklik hız, teğetin eğimi ivmedir.",
            "v ve a aynı işaretliyse sürat artar, zıt işaretliyse azalır.",
            "Negatif ivme yavaşlama demek değildir: v = −6, a = −2 iken hızlanıyor.",
            "v–t çizgisinin eksenin altına inmesi eğimi değiştirmez.",
            "Hareket diyagramında noktalar açılıyorsa sürat artıyor; ardışık hız oklarının farkı ivme yönünü verir.",
            "Hızlanma aralıklarını bulmak için v ve a'nın işaret çizgisini kur."
          ]
        }
      ]
    }
  ]
};
