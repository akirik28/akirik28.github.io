/* Kitpath not defteri · pc301 · 3.1–3.2 Kinetik Enerji ve İş
   Kaynak: kaynak/ced-physc.md (Topic 3.1, 3.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc301",
  amac: "Bu konu hareketin enerjisini ve enerji aktarmanın yolunu anlatıyor: kinetik enerji ile iş. Kuvvetin ne zaman iş yaptığını, iş–enerji teoremini ve F–x grafiğinin altındaki alanın işi verdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Kinetik enerji: hareketin enerjisi",
      kisa: "K = ½mv²: skalerdir ve hızın karesiyle büyür.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "K", alt: "kinetic energy (J)" },
            "=",
            { t: "½mv²", alt: "m kütle (kg), v sürat (m/s)" }
          ],
          aciklama: "K skalerdir: yönü yoktur ve negatif olmaz. Gözlemciye göre değişir: trendeki yolcuya göre duran çanta, peronda bekleyene göre hareketlidir. Sınavda böyle yaz: *Kinetic energy is a scalar, so it has no direction and cannot be negative.*"
        },
        {
          tip: "grafik",
          baslik: "2 kg'lık araba: K = ½ × 2 × v² = v²",
          xlabel: "v (m/s)",
          ylabel: "K (J)",
          xmax: 7,
          ymax: 40,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 10, label: "10" },
            { v: 20, label: "20" },
            { v: 30, label: "30" },
            { v: 40, label: "40" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.5, 0.25], [1, 1], [1.5, 2.25], [2, 4], [2.5, 6.25], [3, 9], [3.5, 12.25], [4, 16],
                [4.5, 20.25], [5, 25], [5.5, 30.25], [6, 36]
              ],
              renk: 0,
              etiket: "K"
            },
            { id: "p2", tip: "nokta", x: 2, y: 4, renk: 1, etiket: "4 J", kilavuz: true, gizli: true },
            { id: "p4", tip: "nokta", x: 4, y: 16, renk: 2, etiket: "16 J", kilavuz: true, gizli: true },
            { id: "p6", tip: "nokta", x: 6, y: 36, renk: 3, etiket: "36 J", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "K–v grafiği düz bir çizgi değil, paraboldür: K hızın karesiyle büyür." },
            { metin: "v = 2 m/s: K = ½ × 2 × 2² = 4 J.", goster: ["p2"] },
            { metin: "Hızı ikiye katla (4 m/s): K = 16 J, yani ==dört katı==.", goster: ["p4"] },
            { metin: "Hız üç katı (6 m/s): K = 36 J, dokuz katı.", goster: ["p6"] }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Hız bileşenlerini toplayıp kare alma",
          metin: "K'nin yönü yoktur. Hızın büyüklüğü için bileşenlerin karelerini topla: v² = vₓ² + v_y².",
          yanlis: "m = 2 kg, vₓ = 3 m/s, v_y = 4 m/s: v = 3 + 4 = 7 m/s, K = ½ × 2 × 49 = 49 J.",
          dogru: "v² = 3² + 4² = 25, v = 5 m/s; K = ½ × 2 × 25 = 25 J."
        }
      ]
    },
    {
      baslik: "İş: kuvvetin yol boyunca enerji aktarması",
      kisa: "Yalnız yer değiştirmeye paralel kuvvet bileşeni iş yapar: W = Fd cosθ.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🛠️",
              terim: "Work",
              tr: "iş",
              tanim: "Bir kuvvetin yol boyunca sisteme enerji vermesi ya da sistemden enerji çekmesi. Skalerdir; pozitif, negatif ya da sıfır olabilir.",
              ornek: "Bavulu iten kişi bavula enerji verir (W > 0); sürtünme bavulun enerjisini azaltır (W < 0)."
            },
            {
              ikon: "✖️",
              terim: "Dot product",
              tr: "skaler çarpım",
              tanim: "A·B = AB cosθ. İki vektörden bir sayı üretir ve kuvvetin yer değiştirmeyle aynı yönlü kısmını seçer.",
              ornek: "F = 20 N, d = 4 m, θ = 60°: W = 20 × 4 × 0,5 = 40 J."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Sandığı eğik iple çekmek (F = 20 N, θ = 60°, d = 4 m)",
          xlabel: "yer değiştirme yönü",
          ylabel: "",
          xmax: 9,
          ymax: 6,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "s", tip: "nokta", x: 2, y: 1.2, renk: 0, etiket: "sandık" },
            { id: "d", tip: "ok", from: [2, 0.7], to: [6, 0.7], renk: 1, gizli: true },
            { id: "td", tip: "yazi", x: 4, y: 0.25, metin: "d = 4 m", gizli: true },
            { id: "F", tip: "ok", from: [2, 1.2], to: [4, 4.664], renk: 2, gizli: true },
            { id: "tF", tip: "yazi", x: 4.2, y: 4.9, metin: "F = 20 N", gizli: true, hiza: "start" },
            { id: "Fp", tip: "ok", from: [2, 1.2], to: [4, 1.2], renk: 3, gizli: true },
            { id: "tFp", tip: "yazi", x: 4.2, y: 1.6, metin: "F∥ = 10 N", gizli: true, hiza: "start" },
            { id: "Fq", tip: "ok", from: [2, 1.2], to: [2, 4.664], renk: 0, gizli: true },
            { id: "tFq", tip: "yazi", x: 1.8, y: 3.2, metin: "F⊥ ≈ 17,3 N", gizli: true, hiza: "end" },
            { id: "tW", tip: "yazi", x: 6.9, y: 3.4, metin: "W = 10 × 4 = 40 J", gizli: true }
          ],
          durumlar: [
            {
              metin: "Sandık zeminde duruyor ve yatay 4 m gidecek: yer değiştirme d = 4 m.",
              goster: ["d", "td"]
            },
            { metin: "İp kuvveti 20 N, yatayla 60° açı yapıyor.", goster: ["F", "tF"] },
            {
              metin: "Kuvveti ikiye ayır. Yer değiştirmeye ==paralel== kısım: F∥ = F cos60° = 10 N.",
              goster: ["Fp", "tFp"]
            },
            {
              metin: "Dik kısım F⊥ = F sin60° ≈ 17,3 N sandığı kaldırmaya çalışır ama yatay yolda ==iş yapmaz==.",
              goster: ["Fq", "tFq"]
            },
            {
              metin: "W = F∥ d = 10 × 4 = 40 J. Sınavda böyle yaz: *Only the component of force parallel to the displacement does work.*",
              goster: ["tW"]
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "*W ≠ 0*",
            maddeler: ["Kuvvetin yer değiştirmeye paralel bileşeni var", "Pozitif ya da negatif olabilir"]
          },
          sag: {
            ikon: "🚫",
            baslik: "*W = 0*",
            maddeler: ["Yer değiştirme yok", "Kuvvet yer değiştirmeye dik (cos 90° = 0)"]
          },
          oyun: [
            {
              metin: "Duvarı var gücünle itiyorsun, duvar kıpırdamıyor.",
              cevap: "sag",
              neden: "Yer değiştirme yok, d = 0 ise W = 0. Yorulman iş yaptığın anlamına gelmez."
            },
            {
              metin: "Sürtünme kayan sandığı yavaşlatıyor.",
              cevap: "sol",
              neden: "Sürtünme harekete ters: W negatiftir ve sandığın K'sini azaltır."
            },
            {
              metin: "Çantayı sabit hızla yatay taşırken kolunun yukarı yönlü kuvveti.",
              cevap: "sag",
              neden: "Kuvvet yukarı, yer değiştirme yatay: 90°, iş yok."
            },
            {
              metin: "İpin ucunda sabit süratle dönen taşa ip gerilmesi.",
              cevap: "sag",
              neden: "Gerilme merkeze, hız teğet yönde: dik, iş yok."
            },
            {
              metin: "Yukarı fırlattığın topa yerçekimi.",
              cevap: "sol",
              neden: "Kuvvet aşağı, yer değiştirme yukarı: W negatif."
            }
          ]
        }
      ]
    },
    {
      baslik: "İş–enerji teoremi",
      kisa: "Net iş kinetik enerjideki değişime eşittir: ΣW = ΔK.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "ΔK", alt: "K_son − K_ilk" },
            "=",
            { t: "ΣW", alt: "bütün kuvvetlerin net işi" },
            "=",
            { t: "ΣF∥ d", alt: "sabit kuvvetlerde" }
          ],
          aciklama: "Önce hangi kuvvetlerin iş yaptığını yaz, sonra topla. Sınavda böyle yaz: *By the work–energy theorem, the net work done on the crate equals its change in kinetic energy.*"
        },
        {
          tip: "ornek",
          baslik: "Kayan sandık nerede durur?",
          durum: "m = 5 kg'lık sandık pürüzlü zeminde v₀ = 7 m/s ile kayıyor (μ_k = 0,2, g = 9,8 m/s²). Durana kadar kaç metre gider?",
          adimlar: [
            "N = mg = 5 × 9,8 = 49 N; sürtünme f = μ_k N = 0,2 × 49 = 9,8 N.",
            "N ve mg harekete dik, iş yapmazlar. Yalnız sürtünme iş yapar: W_f = −f d.",
            "İş–enerji: −f d = K_son − K_ilk = 0 − ½ × 5 × 7² = −122,5 J.", "d = 122,5 / 9,8 = 12,5 m."
          ],
          sonuc: "d = 12,5 m; sürtünmenin işi −122,5 J (enerji ısıya gitti)"
        },
        {
          tip: "grafik",
          baslik: "Sandığın K–x grafiği: eğim −f",
          xlabel: "x (m)",
          ylabel: "K (J)",
          xmax: 14,
          ymax: 130,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" },
            { v: 12, label: "12" }
          ],
          yticks: [
            { v: 25, label: "25" },
            { v: 50, label: "50" },
            { v: 75, label: "75" },
            { v: 100, label: "100" },
            { v: 125, label: "125" }
          ],
          ogeler: [
            { id: "L", tip: "cizgi", from: [0, 122.5], to: [5, 73.5], renk: 0, gizli: true },
            { id: "p0", tip: "nokta", x: 0, y: 122.5, renk: 1, etiket: "122,5 J", gizli: true },
            { id: "p5", tip: "nokta", x: 5, y: 73.5, renk: 2, etiket: "73,5 J", gizli: true },
            { id: "t", tip: "yazi", x: 9, y: 80, metin: "eğim = −f = −9,8 J/m", gizli: true },
            { id: "p12", tip: "nokta", x: 12.5, y: 0, renk: 3, etiket: "durdu", gizli: true }
          ],
          durumlar: [
            { metin: "Başlangıç: x = 0'da K = ½mv₀² = 122,5 J.", goster: ["p0"] },
            { metin: "5 m sonra: K = 122,5 − 9,8 × 5 = 73,5 J.", goster: ["L", "p5"] },
            {
              metin: "Çizgiyi uzat: K her metrede 9,8 J azalıyor. Eğim −f, yani net kuvvet.",
              set: {
                L: { to: [12.5, 0] }
              },
              goster: ["t"]
            },
            { metin: "K = 0 olduğunda sandık durur: x = 12,5 m.", goster: ["p12"] }
          ]
        }
      ]
    },
    {
      baslik: "Değişken kuvvet: F–x grafiğinin altındaki alan",
      kisa: "İş, F–x grafiğinin altındaki alandır; yay için W = ½kx².",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Yayı germek: F = kx, k = 50 N/m",
          xlabel: "x (m)",
          ylabel: "F (N)",
          xmax: 0.5,
          ymax: 25,
          xticks: [
            { v: 0.1, label: "0,1" },
            { v: 0.2, label: "0,2" },
            { v: 0.3, label: "0,3" },
            { v: 0.4, label: "0,4" }
          ],
          yticks: [
            { v: 5, label: "5" },
            { v: 10, label: "10" },
            { v: 15, label: "15" },
            { v: 20, label: "20" }
          ],
          ogeler: [
            { id: "L", tip: "cizgi", from: [0, 0], to: [0.4, 20], renk: 0, etiket: "F = kx" },
            {
              id: "a",
              tip: "alan",
              noktalar: [[0, 0], [0.2, 0], [0.2, 10]],
              renk: 1,
              gizli: true
            },
            { id: "p1", tip: "nokta", x: 0.2, y: 10, renk: 1, etiket: "10 N", gizli: true },
            { id: "p2", tip: "nokta", x: 0.4, y: 20, renk: 2, etiket: "20 N", gizli: true },
            { id: "t", tip: "yazi", x: 0.17, y: 3, metin: "W = alan", gizli: true }
          ],
          durumlar: [
            { metin: "Yayın kuvveti uzadıkça büyür: kuvvet sabit değil, W = Fd kullanılamaz." },
            { metin: "0'dan 0,2 m'ye: üçgenin alanı ½ × 0,2 × 10 = 1 J.", goster: ["a", "p1", "t"] },
            {
              metin: "0,4 m'ye kadar: alan ½ × 0,4 × 20 = 4 J = ½kx².",
              set: {
                a: {
                  noktalar: [[0, 0], [0.4, 0], [0.4, 20]]
                }
              },
              goster: ["p2"]
            },
            {
              metin: "Ortalama kuvvet 10 N, yol 0,4 m: 10 × 0,4 = 4 J. Sınavda böyle yaz: *The work is the area under the F versus x graph.*"
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Kalkülüsle iş: F(x) = 3x² (N), x = 1 m'den 3 m'ye",
          durum: "Konuma bağlı F(x) = 3x² kuvveti cismi x = 1 m'den x = 3 m'ye taşıyor. Yaptığı iş nedir?",
          adimlar: [
            "W = ∫ F dx; sınırları yaz: W = ∫₁³ 3x² dx.", "Önce integrali al: ∫ 3x² dx = x³.",
            "Sonra sınırları koy: W = 3³ − 1³ = 27 − 1.",
            "W = 26 J (pozitif: kuvvet ve yer değiştirme aynı yönde)."
          ],
          sonuc: "W = 26 J"
        },
        {
          tip: "tuzak",
          baslik: "Değişken kuvvette W = Fd yazma",
          metin: "W = Fd yalnız F sabitken geçerlidir. Konumla değişen kuvvette alan ya da integral gerekir.",
          yanlis: "Yayı 0,4 m germenin işi W = Fd = 20 × 0,4 = 8 J.",
          dogru: "W = ½kx² = ½ × 50 × 0,4² = 4 J."
        }
      ]
    },
    {
      baslik: "Conservative ve nonconservative kuvvetler",
      kisa: "Conservative kuvvetin işi yoldan bağımsızdır; sürtünmeninki yola bağlıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⛰️",
              terim: "Conservative force",
              tr: "korunumlu kuvvet",
              tanim: "İşi yalnız ilk ve son konuma bağlı olan kuvvet; kapalı turda net işi sıfırdır. Yerçekimi ve ideal yay kuvveti böyledir.",
              ornek: "Kitabı 2 m kaldırıp aynı yere indirirsen yerçekiminin toplam işi sıfırdır."
            },
            {
              ikon: "🔥",
              terim: "Nonconservative force",
              tr: "korunumsuz kuvvet",
              tanim: "İşi izlenen yola bağlı olan kuvvet; en yaygınları sürtünme ve hava direncidir.",
              ornek: "Defteri masada 1 m götürüp geri getirirsen sürtünme iki yönde de enerji harcar; toplam iş sıfır olmaz."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🧭",
            baslik: "Yoldan bağımsız",
            maddeler: ["Yalnız ilk ve son konum önemli", "Kapalı turda W = 0", "Potansiyel enerji tanımlanabilir"]
          },
          sag: {
            ikon: "🛤️",
            baslik: "Yola bağlı",
            maddeler: ["Yol uzadıkça iş büyür", "Kapalı turda W ≠ 0", "Enerji ısıya gider"]
          },
          oyun: [
            {
              metin: "Aynı yükseklik farkını kısa yoldan ya da dolambaçlı yoldan çıkarken yerçekiminin işi.",
              cevap: "sol",
              neden: "mgΔy yalnız yükseklik farkına bağlıdır."
            },
            {
              metin: "Buzda 5 m ya da 8 m kayarken sürtünmenin işi.",
              cevap: "sag",
              neden: "Sürtünmenin işi yaklaşık f × yoldur; yol uzadıkça artar."
            },
            {
              metin: "Bir yayı sıkıp bırakınca yayın toplam işi.",
              cevap: "sol",
              neden: "Başlangıç konumuna dönülünce yay kuvvetinin net işi sıfırdır."
            },
            {
              metin: "Hava direncinin işi.",
              cevap: "sag",
              neden: "Hava direnci yola bağlı, nonconservative bir kuvvettir."
            }
          ]
        },
        {
          tip: "not",
          metin: "Sınavda böyle yaz: *Friction is nonconservative, so the work it does depends on the path, and the mechanical energy it removes becomes thermal energy.* Sürtünmeyle harcanan enerji yaklaşık f × yol uzunluğudur."
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
            "K = ½mv² skalerdir, yönü yoktur ve negatif olmaz; hız iki katına çıkınca K dört katı olur.",
            "K gözlemcinin referans çerçevesine göre değişebilir.",
            "İş W = Fd cosθ = F∥ d; yalnız yer değiştirmeye paralel bileşen iş yapar. Skalerdir: +, − ya da 0.",
            "Kuvvet yer değiştirmeye dikse (normal, merkezcil kuvvet) ya da cisim yer değiştirmiyorsa iş sıfırdır.",
            "İş–enerji teoremi: ΔK = ΣW. Örnek: 5 kg, 7 m/s, μ_k = 0,2 ⇒ sandık 12,5 m'de durur.",
            "Değişken kuvvette W = ∫F dx = F–x grafiğinin altındaki alan; yay için ½kx² (W = Fd değil).",
            "Conservative kuvvetin işi yoldan bağımsızdır, kapalı turda 0'dır (yerçekimi, ideal yay).",
            "Sürtünme ve hava direnci nonconservative: iş yola bağlı, enerji ısıya gider (≈ f × yol)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A 2 kg cart moving at 3 m/s is acted on by a constant force until its speed is 6 m/s. How much net work was done on the cart?",
      opts: ["9 J", "20 J", "27 J", "36 J"],
      a: 2,
      why: "W_net = ΔK = ½(2)(6²) − ½(2)(3²) = 36 − 9 = 27 J. 9 J ½m(Δv)² hesabıdır: K hızın karesine bağlıdır, hız farkının değil. 20 J ortalama hızı (4,5 m/s) kullanmaktır. 36 J yalnız son kinetik enerjidir."
    },
    {
      q: "A 4 kg block starts from rest on a frictionless surface and is acted on by the horizontal force shown, which increases linearly from 0 to 10 N over the first 2 m and then stays constant at 10 N. What is the block's speed at x = 6 m?",
      fig: {
        type: "graph",
        xlabel: "x (m)",
        ylabel: "F (N)",
        xmax: 7,
        ymax: 12,
        lines: [
          { from: [0, 0], to: [2, 10] },
          { from: [2, 10], to: [6, 10] }
        ],
        points: [
          { q: 2, p: 10, label: "10 N", guides: true }
        ],
        xticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" }
        ],
        yticks: [
          { v: 5, label: "5" },
          { v: 10, label: "10" }
        ],
        caption: "Horizontal force F on a 4 kg block versus position x"
      },
      opts: ["2.5 m/s", "5.0 m/s", "5.5 m/s", "12.5 m/s"],
      a: 1,
      why: "İş = grafiğin altındaki alan = ½(2)(10) + (4)(10) = 50 J. ½(4)v² = 50 ⇒ v = 5 m/s. 5,5 m/s tüm yolda 10 N varmış gibi 60 J almaktır; 12,5 m/s ise karekökü almayı unutmaktır (50/4)."
    },
    {
      q: "A person drags a crate 10 m along a horizontal floor with a constant 50 N force directed 37° above the horizontal. (sin 37° = 0.6, cos 37° = 0.8.) How much work does the person's force do?",
      opts: ["500 J", "300 J", "250 J", "400 J"],
      a: 3,
      why: "W = F d cosθ = 50 × 10 × 0,8 = 400 J. 500 J açıyı unutup Fd almaktır; 300 J cos yerine sin kullanmaktır."
    },
    {
      q: "A 2.0 kg block slides across a horizontal surface until it stops. The table gives its initial speed and stopping distance in three trials. Using g = 9.8 m/s², which value is closest to the coefficient of kinetic friction?",
      fig: {
        type: "table",
        head: ["Initial speed v₀ (m/s)", "Stopping distance d (m)"],
        rows: [["2", "1.0"], ["4", "4.0"], ["6", "9.0"]],
        caption: "Block of mass 2.0 kg sliding to rest"
      },
      opts: ["0.2", "0.1", "0.4", "2.0"],
      a: 0,
      why: "−μmg d = 0 − ½mv₀² ⇒ μ = v₀²/(2gd) = 4/(2 × 9,8 × 1) ≈ 0,2; diğer satırlar da aynı değeri verir. ½ çarpanını unutursan μ = v₀²/(gd) ≈ 0,4 bulursun."
    },
    {
      q: "A block is moved between the same two points A and B on a rough horizontal table, first along a straight 3 m path and then along a curved 5 m path. The kinetic friction force is 4 N. Which statement about the work done by friction is correct?",
      opts: [
        "It is −12 J on both paths, because A and B are the same points.",
        "It is −12 J on the straight path and −20 J on the curved path, because friction is nonconservative.",
        "It is zero on both paths, because the block ends at B.",
        "It is +12 J on the straight path and +20 J on the curved path."
      ],
      a: 1,
      why: "Sürtünmenin işi −f × yol: −4 × 3 = −12 J ve −4 × 5 = −20 J. Nonconservative kuvvetin işi yola bağlıdır; A şıkkı yoldan bağımsızlığı (conservative kuvvetin özelliğini) yanlış uygular. Sürtünme harekete ters olduğu için iş negatiftir."
    }
  ]
};
