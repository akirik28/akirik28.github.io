/* Kitpath not defteri · pc207 · 2.9 Direnç Kuvvetleri (Sürüklenme)
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.9; LO 2.9.A) [KALKÜLÜS]. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc207",
  amac: "Bu konu hıza bağlı direnç kuvvetini (F_r = −kv) anlatıyor. Newton'un ikinci yasasından diferansiyel denklem kurup değişkenleri ayırarak çözmeyi, hızın üstel değişimini ve terminal hızı öğreneceksin.",
  bolumler: [
    {
      baslik: "Direnç kuvveti ve terminal hız",
      kisa: "Direnç hıza zıttır ve hızla büyür; kuvvetler dengelenince hız sabitlenir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌬️",
              terim: "Resistive force",
              tr: "direnç kuvveti",
              tanim: "Hıza bağlı ve hıza zıt yönlü kuvvet. Burada doğrusal model: F_r = −kv, k > 0. Sürtünmenin aksine hız büyüyünce büyür.",
              ornek: "Havada düşen kahve filtresi hızlandıkça daha çok yavaşlatılır."
            },
            {
              ikon: "🪂",
              terim: "Terminal velocity",
              tr: "terminal hız",
              tanim: "Sabit bir kuvvete karşı direnç kuvveti büyüyüp net kuvveti 0 yaptığında ulaşılan en büyük hız. Düşmede v_T = mg/k.",
              ornek: "Paraşütçü düşerken bir noktadan sonra sabit hızla iner."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "F_r" },
            "=",
            "−",
            { t: "k", alt: "direnç sabiti (kg/s)" },
            "×",
            { t: "v", alt: "hız (yönü ters)" }
          ],
          aciklama: "Eksi işareti kuvvetin hıza zıt olduğunu söyler. Terminal hızda mg = kv_T ve ivme 0'dır."
        },
        {
          tip: "grafik",
          baslik: "Düşen cisim: m = 2 kg, k = 4 kg/s (g = 9,8 m/s²)",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 3,
          ymax: 5.5,
          xticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1" },
            { v: 1.5, label: "1,5" },
            { v: 2, label: "2" },
            { v: 2.5, label: "2,5" },
            { v: 3, label: "3" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          ogeler: [
            {
              id: "vt",
              tip: "egri",
              noktalar: [[0, 0], [0.125, 1.084], [0.25, 1.928], [0.375, 2.585], [0.5, 3.097], [0.75, 3.807], [1, 4.237], [1.25, 4.498], [1.5, 4.656], [2, 4.81], [2.5, 4.867], [3, 4.888]],
              renk: 0
            },
            { id: "as", tip: "cizgi", from: [0, 4.9], to: [3, 4.9], renk: 1, kesik: true, gizli: true },
            { id: "ast", tip: "yazi", x: 2.2, y: 5.25, metin: "v_T = 4,9 m/s", gizli: true },
            { id: "tg", tip: "cizgi", from: [0, 0], to: [0.5, 4.9], renk: 2, etiket: "eğim = g", gizli: true },
            { id: "pt", tip: "nokta", x: 0.5, y: 3.097, renk: 3, kilavuz: true, gizli: true },
            { id: "ptt", tip: "yazi", x: 0.62, y: 2.5, metin: "t = τ: %63 v_T", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "Cisim bırakılıyor: başta v = 0, direnç yok, ivme g. Hız arttıkça direnç büyür ve ivme azalır." },
            { metin: "Sonunda mg − kv = 0: terminal hız v_T = mg/k = 2×9,8/4 = 4,9 m/s. Eğri bu asimptota yaklaşır ama onu geçmez.", goster: ["as", "ast"] },
            { metin: "Zaman sabiti τ = m/k = 0,5 s. Başlangıç teğeti (eğimi g) asimptota tam t = τ'da ulaşır.", goster: ["tg"] },
            { metin: "t = τ'da v = v_T(1 − e⁻¹) ≈ 0,63 v_T ≈ 3,1 m/s.", goster: ["pt", "ptt"] }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *At terminal velocity the net force is zero: mg = kv_T, so v_T = mg/k.* Terminal hızda ivme sıfırdır, hız ise en büyüktür."
        }
      ]
    },
    {
      baslik: "Diferansiyel denklemi kur ve çöz",
      kisa: "Newton'un 2. yasası dv/dt verir; değişkenleri ayır, sınırlarla integral al.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Düşen cisim (aşağı +): v(t)'yi bul",
          adimlar: [
            { baslik: "1. İkinci yasayı yaz", metin: "m dv/dt = mg − kv. Direnç hıza zıt olduğu için eksi işaretli." },
            { baslik: "2. Değişkenleri ayır", metin: "dv / (g − (k/m)v) = dt. Sol tarafta yalnız v, sağda yalnız t kalır." },
            {
              baslik: "3. Sınırlarla integral al",
              metin: "v için 0'dan v'ye, t için 0'dan t'ye: ∫ dv/(g − (k/m)v) = ∫ dt ⇒ −(m/k) ln[(g − (k/m)v)/g] = t."
            },
            {
              baslik: "4. v'yi çöz",
              metin: "(g − (k/m)v)/g = e^(−kt/m) ⇒ v(t) = (mg/k)(1 − e^(−kt/m))."
            },
            {
              baslik: "5. Kontrol et",
              metin: "t = 0'da v = 0. t → ∞'da v → mg/k = v_T. İvme a = dv/dt = g e^(−kt/m): başta g, sonra 0."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "İntegralde sınır ve zincir kuralı hataları",
          metin: "Yeniden düzenleme (dv'yi bir yana, dt'yi öbür yana) ve integral sınırlarının eşlenmesi en çok puan kaybedilen yerlerdir. Önce integrali al, sonra sınırları koy; sınırları açıkça yaz.",
          yanlis: "∫ dv/(g − (k/m)v) = ln(g − (k/m)v), sınır yok; v: 0 → v ile t: 0 → t karışıyor.",
          dogru: "∫ dv/(g − bv) = −(1/b) ln(g − bv) (b = k/m); sınırlar v₀ → v ve 0 → t eşlenir."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Begin with Newton's second law, m dv/dt = mg − kv. Separate variables and integrate from v = 0 to v and from t = 0 to t.* Sheet'teki ∫dx/(x+a) = ln|x+a| ve ∫eᵃˣdx = eᵃˣ/a satırlarını kullan."
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: motoru kapalı tekne",
      kisa: "Yalnız direnç varsa v = v₀e^(−kt/m); durana kadar toplam yol sonludur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "m = 100 kg, k = 50 kg/s, v₀ = 6 m/s",
          durum: "Motoru kapalı tekneye yalnız F_r = −kv etkiyor. v(t)'yi, t = 2 s'deki hızı ve durana kadar toplam yolu bul.",
          adimlar: [
            "İkinci yasa: m dv/dt = −kv (hareket yönü +).",
            "Ayır: dv/v = −(k/m) dt.",
            "Sınırlarla integral (v için v₀'dan v'ye, t için 0'dan t'ye): ∫ dv/v = −(k/m) ∫ dt ⇒ ln(v/v₀) = −kt/m.",
            "v(t) = v₀ e^(−kt/m) = 6 e^(−t/2) m/s, çünkü m/k = 100/50 = 2 s.",
            "t = 2 s: v = 6e⁻¹ ≈ 2,21 m/s.",
            "Toplam yol: x = ∫ v dt (0'dan sonsuza) = v₀(m/k) = 6×2 = 12 m. Tekne tam durmaz ama 12 m'yi aşmaz."
          ],
          sonuc: "v(t) = 6e^(−t/2) m/s; v(2 s) ≈ 2,21 m/s; toplam yol 12 m"
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 2, sonek: " s", etiket: "zaman sabiti τ = m/k" },
            { deger: 2.21, sonek: " m/s", etiket: "t = 2 s'de hız" },
            { deger: 12, sonek: " m", etiket: "durana kadar toplam yol (v₀m/k)" }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The velocity decays exponentially, v = v₀e^(−kt/m), so the boat approaches rest asymptotically and travels a finite total distance mv₀/k.*"
        }
      ]
    },
    {
      baslik: "x, v ve a nasıl davranır?",
      kisa: "Hepsi üsteldir; asimptotları başlangıç koşulları ve kuvvetler belirler.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "İki durumda zamana bağlı fonksiyonlar",
          head: ["Büyüklük", "Düşen cisim (v₀ = 0, aşağı +)", "Yalnız direnç (v₀ ile hareket)"],
          rows: [
            ["a(t)", "g e^(−kt/m) → 0", "−(kv₀/m) e^(−kt/m) → 0"],
            ["v(t)", "(mg/k)(1 − e^(−kt/m)) → mg/k", "v₀ e^(−kt/m) → 0"],
            ["x(t)", "(mg/k)[t − (m/k)(1 − e^(−kt/m))], sonunda doğrusal artar", "(mv₀/k)(1 − e^(−kt/m)) → mv₀/k"],
            ["Asimptot", "a → 0, v → v_T", "v → 0, x → mv₀/k"]
          ],
          vurgu: 3,
          not: "Fonksiyonel bağımlılık: m aynı kalırken k iki katına çıkarsa v_T = mg/k yarıya, τ = m/k yarıya iner."
        },
        {
          tip: "tuzak",
          baslik: "Terminal hızda ivme en büyük sanılır",
          metin: "Direnç hızla büyüdüğü için ivme azalır. En büyük ivme başlangıçtadır (a = g); terminal hızda a = 0 ve hız en büyüktür. Direnç kuvvetinin işaretini hıza zıt koymak da şart.",
          yanlis: "Terminal hızda ivme en büyüktür.",
          dogru: "Terminal hızda ΣF = 0 ve a = 0; ivme başta g, sonra üstel olarak 0'a iner."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *As t → ∞, the acceleration approaches zero and the speed approaches the terminal value mg/k.*"
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
            "*Resistive force* hıza zıt ve hıza bağlıdır: F_r = −kv; sürtünme gibi sabit değildir.",
            "*Terminal velocity*: sabit kuvvet ve direnç dengelenince ΣF = 0; düşmede v_T = mg/k ve ivme 0.",
            "Düşen cisim için m dv/dt = mg − kv; değişkenleri ayır, sınırlarla integral al: v(t) = (mg/k)(1 − e^(−kt/m)).",
            "Zaman sabiti τ = m/k; t = τ'da hız v_T'nin yaklaşık %63'ü olur (2 kg, k = 4 kg/s: 3,1 m/s).",
            "Yalnız direnç varsa v = v₀e^(−kt/m); tekne örneğinde v(2 s) ≈ 2,21 m/s ve toplam yol v₀m/k = 12 m.",
            "x(t), v(t), a(t) üsteldir; ivme başta en büyük, sonda 0; asimptotlar başlangıç koşullarından ve kuvvetlerden gelir.",
            "İntegralde önce integrali al, sonra sınırları koy; ∫dv/(g − bv) = −(1/b) ln(g − bv).",
            "k iki katına çıkarsa v_T yarıya iner (v_T = mg/k)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A 3 kg object falls from rest through a fluid that exerts a resistive force F_r = −kv, where k = 6 kg/s. Use g = 10 m/s². The terminal speed of the object is",
      opts: ["0.2 m/s", "2 m/s", "5 m/s", "18 m/s"],
      a: 2,
      why: "Terminal hızda mg = kv_T: v_T = mg/k = 3×10/6 = 5 m/s. 0,2 m/s oranı ters (k/mg) almaktır; 18 m/s ise m ve k'yı çarpmaktır."
    },
    {
      q: "A 2 kg object is released from rest in a fluid. The table gives its measured speed v at several times. Use g = 9.8 m/s². Assuming a resistive force F_r = −kv, the value of k is closest to",
      fig: {
        type: "table",
        head: ["t (s)", "0", "0.5", "1.0", "2.0", "3.0"],
        rows: [["v (m/s)", "0", "3.1", "4.2", "4.8", "4.9"]],
        caption: "Measured speed of the falling object"
      },
      opts: ["0.25 kg/s", "4 kg/s", "9.8 kg/s", "19.6 kg/s"],
      a: 1,
      why: "Hız 4,9 m/s'ye yaklaşıp sabitleniyor: v_T ≈ 4,9. k = mg/v_T = 19,6/4,9 = 4 kg/s. 0,25 oranı ters almak, 19,6 ise v_T'ye bölmeyi unutmaktır."
    },
    {
      q: "A boat of mass m moves with initial speed v₀ in water that exerts a resistive force F_r = −kv, and no other horizontal force acts. Which equation correctly follows from Newton's second law after separating variables?",
      opts: [
        "∫ from v₀ to v of dv/v = −(k/m) ∫ from 0 to t of dt",
        "∫ from v₀ to v of v dv = −(k/m) ∫ from 0 to t of dt",
        "∫ from 0 to v of dv/v = (k/m) ∫ from 0 to t of dt",
        "∫ from v₀ to v of dv/v = (k/m) ∫ from 0 to t of dt"
      ],
      a: 0,
      why: "m dv/dt = −kv ⇒ dv/v = −(k/m) dt. Sınırlar: v₀ → v ve 0 → t eşlenir; işaret eksi olmalı (direnç hıza zıt). Alt sınır 0 olursa ln 0 tanımsız olur; eksi işareti atlamak ise hızı zamanla artırırdı."
    },
    {
      q: "A 4 kg block slides on a horizontal surface with initial speed 5 m/s. The only horizontal force is a resistive force F_r = −kv with k = 2 kg/s. The total distance the block travels before it comes (asymptotically) to rest is",
      opts: ["20 m", "2.5 m", "5 m", "10 m"],
      a: 3,
      why: "x_toplam = v₀ m/k = 5×4/2 = 10 m. 20 m, m ve v₀'ı k'ya bölmeden çarpmaktan gelir; 2,5 m ise kv₀/m oranıdır (birimi ivme)."
    },
    {
      q: "Objects A and B have the same mass and fall from rest through the same fluid. The resistive force on each is F_r = −kv, and the constant k for B is twice that for A. Compared with the terminal speed of A, the terminal speed of B is",
      opts: ["half as large", "the same", "twice as large", "four times as large"],
      a: 0,
      why: "v_T = mg/k ve m aynı: k iki katına çıkınca v_T yarıya iner. Daha büyük k, daha büyük direnç demek, yani net kuvvet daha düşük hızda sıfırlanır; zaman sabiti m/k de yarıya iner."
    }
  ]
};
