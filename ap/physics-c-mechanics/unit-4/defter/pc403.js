/* Kitpath not defteri · pc403 · 4.4 Esnek ve Esnek Olmayan Çarpışmalar
   Kaynak: kaynak/ced-physc.md (Topic 4.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc403",
  amac: "Bu konu çarpışmaları kinetik enerjiye göre sınıflıyor: elastic, inelastic ve perfectly inelastic. Her türde momentumun korunduğunu, kinetik enerjinin ise yalnız elastic çarpışmada korunduğunu hesapla ve grafikle görmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Çarpışma türleri",
      kisa: "Momentum her çarpışmada korunur; kinetik enerjinin korunup korunmaması türü belirler.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Üç çarpışma türü",
          head: ["Tür", "Σp", "Toplam K", "Sonra nesneler"],
          rows: [
            ["*Elastic*", "korunur", "korunur (tek tek değişebilir)", "ayrılır"],
            ["*Inelastic*", "korunur", "azalır", "genelde ayrılır"],
            ["*Perfectly inelastic*", "korunur", "azalır (en büyük kayıp)", "yapışır, ortak hız"]
          ],
          vurgu: 0,
          not: "Sınavda böyle yaz: *Momentum is conserved because the net external force is zero, but kinetic energy decreases, so the collision is inelastic.*"
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎱",
              terim: "Elastic collision",
              tr: "esnek çarpışma",
              tanim: "Sistemin toplam K'si çarpışmadan önce ve sonra eşittir. Tek tek cisimlerin K'si değişebilir.",
              ornek: "İdeal bilardo topları, yaylı tamponlu arabalar."
            },
            {
              ikon: "🧱",
              terim: "Inelastic collision",
              tr: "esnek olmayan çarpışma",
              tanim: "Toplam K azalır; kayıp ısıya, sese ve şekil bozulmasına gider. Cisimler yapışırsa ==perfectly inelastic== olur.",
              ornek: "İki oyun hamuru parçasının çarpışıp yapışması."
            }
          ]
        }
      ]
    },
    {
      baslik: "Yapışan çarpışma (perfectly inelastic)",
      kisa: "Cisimler yapışır: m_A v_A + m_B v_B = (m_A + m_B)v; K kaybı hesapla bulunur.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "m_A v_A + m_B v_B", alt: "önce" },
            "=",
            { t: "(m_A + m_B) v", alt: "sonra: ortak hız" }
          ],
          aciklama: "Sınavda böyle yaz: *The objects stick together, so they move with a common velocity after the collision.*"
        },
        {
          tip: "ornek",
          baslik: "3 kg, 4 m/s ile durgun 1 kg'a yapışıyor",
          durum: "A (3 kg) 4 m/s ile durgun B'ye (1 kg) çarpıp yapışıyor. Ortak hızı ve kaybolan K'yi bul.",
          adimlar: [
            "Σp = 3 × 4 + 0 = 12 kg·m/s.", "Sonra: (3 + 1) v = 12 ⇒ v = 3 m/s.",
            "K_i = ½ × 3 × 4² = 24 J; K_f = ½ × 4 × 3² = 18 J.",
            "Kayıp: 24 − 18 = 6 J, yani K'nin %25'i ısıya, sese ve şekil bozulmasına gitti."
          ],
          sonuc: "v = 3 m/s; Σp = 12 korundu; K kaybı 6 J (%25)"
        },
        {
          tip: "tuzak",
          baslik: "Inelastic demek momentum kaybı demek değil",
          metin: "İzole sistemde momentum her zaman korunur. Kaybolan şey kinetik enerjidir.",
          yanlis: "Çarpışma inelastic olduğu için momentum azaldı.",
          dogru: "p = 12 kg·m/s önce de sonra da; yalnız K 24 J'den 18 J'ye düştü."
        }
      ]
    },
    {
      baslik: "Esnek çarpışma: iki denklem, iki bilinmeyen",
      kisa: "Elastic çarpışmada hem Σp hem toplam K korunur; ikisini birlikte çöz.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Aynı çarpışma elastic olsaydı",
          durum: "A (3 kg, 4 m/s) durgun B'ye (1 kg) çarpıyor ve çarpışma elastic. Sonraki hızları bul.",
          adimlar: [
            "Momentum: 3v_A + v_B = 12.", "Kinetik enerji (her yanı 2 ile çarp): 3v_A² + v_B² = 48.",
            "v_B = 12 − 3v_A yerine koy: 3v_A² + (12 − 3v_A)² = 48 ⇒ 12v_A² − 72v_A + 96 = 0 ⇒ v_A² − 6v_A + 8 = 0.",
            "v_A = 4 (çarpışma olmamış hâli) ya da v_A = 2 m/s. Buradan v_B = 12 − 6 = 6 m/s.",
            "Kontrol: p = 3 × 2 + 6 = 12; K = ½ × 3 × 2² + ½ × 1 × 6² = 6 + 18 = 24 J.",
            "Kestirme (yalnız bir boyutlu elastic): yaklaşma hızı ayrılma hızına eşit: 4 − 0 = 6 − 2."
          ],
          sonuc: "v_A′ = 2 m/s, v_B′ = 6 m/s; toplam K = 24 J korundu"
        },
        {
          tip: "grafik",
          baslik: "Aynı başlangıç, iki sonuç: Σp ve K",
          xlabel: "",
          ylabel: "p (kg·m/s) ve K (J)",
          xmax: 12,
          ymax: 30,
          xticks: [
            { v: 2.5, label: "Σp" },
            { v: 6, label: "K" },
            { v: 9.5, label: "K kaybı" }
          ],
          yticks: [
            { v: 6, label: "6" },
            { v: 12, label: "12" },
            { v: 18, label: "18" },
            { v: 24, label: "24" }
          ],
          ogeler: [
            {
              id: "bp",
              tip: "alan",
              noktalar: [[1.5, 0], [3.5, 0], [3.5, 12], [1.5, 12]],
              renk: 0
            },
            {
              id: "bk",
              tip: "alan",
              noktalar: [[5, 0], [7, 0], [7, 24], [5, 24]],
              renk: 1
            },
            {
              id: "bl",
              tip: "alan",
              noktalar: [[8.5, 0], [10.5, 0], [10.5, 0], [8.5, 0]],
              renk: 2
            },
            { id: "vp", tip: "yazi", x: 2.5, y: 13.4, metin: "12" },
            { id: "vk", tip: "yazi", x: 6, y: 25.4, metin: "24 J" },
            { id: "vl", tip: "yazi", x: 9.5, y: 1.4, metin: "0 J" },
            { id: "ts", tip: "yazi", x: 6, y: 29, metin: "önce" }
          ],
          durumlar: [
            { metin: "Önce: Σp = 12 kg·m/s, toplam K = 24 J." },
            {
              metin: "Elastic sonrası (2 ve 6 m/s): Σp = 12 korundu, K = 24 J korundu, kayıp yok.",
              set: {
                bp: {
                  noktalar: [[1.5, 0], [3.5, 0], [3.5, 12], [1.5, 12]]
                },
                bk: {
                  noktalar: [[5, 0], [7, 0], [7, 24], [5, 24]]
                },
                bl: {
                  noktalar: [[8.5, 0], [10.5, 0], [10.5, 0], [8.5, 0]]
                },
                vp: { y: 13.4, metin: "12" },
                vk: { y: 25.4, metin: "24 J" },
                vl: { y: 1.4, metin: "0 J" },
                ts: { metin: "sonra: elastic" }
              }
            },
            {
              metin: "Perfectly inelastic sonrası (3 m/s): Σp = 12 yine korundu, K = 18 J, kayıp 6 J. Sınavda böyle yaz: *Momentum is conserved in every collision, but kinetic energy is conserved only if it is elastic.*",
              set: {
                bp: {
                  noktalar: [[1.5, 0], [3.5, 0], [3.5, 12], [1.5, 12]]
                },
                bk: {
                  noktalar: [[5, 0], [7, 0], [7, 18], [5, 18]]
                },
                bl: {
                  noktalar: [[8.5, 0], [10.5, 0], [10.5, 6], [8.5, 6]]
                },
                vp: { y: 13.4, metin: "12" },
                vk: { y: 19.4, metin: "18 J" },
                vl: { y: 7.4, metin: "6 J" },
                ts: { metin: "sonra: perfectly inelastic" }
              }
            }
          ]
        }
      ]
    },
    {
      baslik: "Hangi çarpışma? Veriden karar ver",
      kisa: "Tür, öncesi ve sonrası toplam K karşılaştırılarak bulunur; geri sekmek tek başına yetmez.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "🎱", baslik: "*Elastic*", maddeler: ["Toplam K aynı", "Isı, ses kaybı yok sayılır"] },
          sag: { ikon: "🧱", baslik: "*Inelastic*", maddeler: ["Toplam K azalır", "Yapışabilir"] },
          oyun: [
            {
              metin: "Çarpışmadan önce toplam K = 24 J, sonra 24 J.",
              cevap: "sol",
              neden: "Toplam K korunmuş: elastic."
            },
            {
              metin: "İki araba çarpıp birlikte sürükleniyor.",
              cevap: "sag",
              neden: "Yapışma, perfectly inelastic: K kaybı en büyük."
            },
            {
              metin: "Top yere düşüp ilk yüksekliğinin %80'ine çıkıyor.",
              cevap: "sag",
              neden: "K'nin %20'si kaybolmuş."
            },
            {
              metin: "İki cisim çarpıp ayrılıyor ama toplam K azalmış.",
              cevap: "sag",
              neden: "Ayrılmak elastic demek değildir; toplam K azaldıysa inelastic."
            },
            { metin: "İdeal Newton beşiği.", cevap: "sol", neden: "K neredeyse tam aktarılır: elastic." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Geri sekiyor diye elastic deme",
          metin: "Elastic'te bile her cismin K'si korunmaz, toplam K korunur. Geri sekme inelastic çarpışmada da olur. Toplam K'yi karşılaştır.",
          yanlis: "Araba geri seğirdi, o hâlde çarpışma elastic.",
          dogru: "Önceki ve sonraki toplam K'yi hesapla: eşitse elastic, azsa inelastic."
        },
        {
          tip: "not",
          metin: "Sınavda böyle yaz: *The total kinetic energy before the collision equals the total kinetic energy after it, so the collision is elastic.*"
        }
      ]
    },
    {
      baslik: "Deney: K_f – K_i grafiği",
      kisa: "K_f – K_i grafiğinin eğimi, çarpışmadan sonra kalan K oranıdır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Aynı iki arabayla beş çarpışma",
          head: ["K_i (J)", "K_f (J)", "K_f / K_i", "Kayıp (J)"],
          rows: [
            ["8", "6", "0,75", "2"], ["16", "12", "0,75", "4"], ["24", "18", "0,75", "6"],
            ["32", "24", "0,75", "8"], ["40", "30", "0,75", "10"]
          ],
          vurgu: 2
        },
        {
          tip: "grafik",
          baslik: "K_f ve K_i: eğim = kalan oran",
          xlabel: "K_i (J)",
          ylabel: "K_f (J)",
          xmax: 48,
          ymax: 36,
          xticks: [
            { v: 8, label: "8" },
            { v: 16, label: "16" },
            { v: 24, label: "24" },
            { v: 32, label: "32" },
            { v: 40, label: "40" }
          ],
          yticks: [
            { v: 10, label: "10" },
            { v: 20, label: "20" },
            { v: 30, label: "30" }
          ],
          ogeler: [
            { id: "d0", tip: "nokta", x: 8, y: 6, renk: 0 },
            { id: "d1", tip: "nokta", x: 16, y: 12, renk: 0 },
            { id: "d2", tip: "nokta", x: 24, y: 18, renk: 0 },
            { id: "d3", tip: "nokta", x: 32, y: 24, renk: 0 },
            { id: "d4", tip: "nokta", x: 40, y: 30, renk: 0 },
            { id: "fit", tip: "cizgi", from: [0, 0], to: [44, 33], renk: 1, gizli: true },
            { id: "h1", tip: "cizgi", from: [8, 6], to: [40, 6], renk: 3, kesik: true, gizli: true },
            { id: "h2", tip: "cizgi", from: [40, 6], to: [40, 30], renk: 3, kesik: true, gizli: true },
            { id: "t1", tip: "yazi", x: 24, y: 2.6, metin: "ΔK_i = 32 J", gizli: true },
            { id: "t2", tip: "yazi", x: 41, y: 18, metin: "ΔK_f = 24 J", hiza: "start", gizli: true },
            {
              id: "el",
              tip: "cizgi",
              from: [0, 0],
              to: [36, 36],
              renk: 2,
              kesik: true,
              etiket: "eğim 1",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Beş çarpışmada ölçülen (K_i, K_f) noktaları." },
            {
              metin: "Noktalar orijinden geçen bir doğruya oturuyor: K_f, K_i ile orantılı. Doğru cetvelle çizilir.",
              goster: ["fit"]
            },
            {
              metin: "Eğimi çizgi üzerindeki iki noktadan hesapla: (30 − 6)/(40 − 8) = 24/32 = 0,75.",
              goster: ["h1", "h2", "t1", "t2"]
            },
            {
              metin: "Eğim = K_f/K_i = 0,75: K'nin %75'i kalır, %25'i kaybolur. Eğim 1 olsaydı elastic olurdu. Sınavda böyle yaz: *The slope of the best-fit line is the fraction of kinetic energy that remains.*",
              goster: ["el"]
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
          maddeler: [
            "Her izole çarpışmada Σp korunur; sınıflama kinetik enerjiye göre yapılır.",
            "Elastic: toplam K korunur (tek tek K'ler değişebilir). Inelastic: toplam K azalır. Perfectly inelastic: cisimler yapışır, ortak hız.",
            "Yapışan çarpışma: v = (m_A v_A + m_B v_B)/(m_A + m_B). 3 kg, 4 m/s + durgun 1 kg ⇒ 3 m/s, K 24 J'den 18 J'ye.",
            "Aynı çarpışma elastic olsaydı: v_A′ = 2 m/s, v_B′ = 6 m/s ve K = 24 J.",
            "Bir boyutlu elastic kestirmesi: yaklaşma hızı = ayrılma hızı.",
            "Geri sekmek elastic demek değildir; tür toplam K karşılaştırmasıyla bulunur.",
            "K_f – K_i grafiğinin eğimi K_f/K_i'dir: 0,75 ⇒ %25 kayıp, eğim 1 ⇒ elastic.",
            "Kaybolan K yok olmaz: ısıya, sese ve şekil bozulmasına gider."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A 2 kg cart moving at 3 m/s collides with an identical 2 kg cart at rest, and the carts stick together. What fraction of the initial kinetic energy is lost?",
      opts: ["0%", "25%", "50%", "75%"],
      a: 2,
      why: "Momentum: 2 × 3 = 4v ⇒ v = 1,5 m/s. K_i = ½ × 2 × 9 = 9 J; K_f = ½ × 4 × 1,5² = 4,5 J. Kayıp 4,5/9 = %50."
    },
    {
      q: "Cart 1 (1 kg) moves right at 6 m/s toward cart 2 (2 kg), which is at rest. The table gives the velocities after the collision (positive = right). Which description of the collision is correct?",
      fig: {
        type: "table",
        head: ["Cart", "Mass (kg)", "v before (m/s)", "v after (m/s)"],
        rows: [["1", "1", "+6", "−2"], ["2", "2", "0", "+4"]],
        caption: "Collision data"
      },
      opts: [
        "Elastic: both momentum and total kinetic energy are conserved.",
        "Inelastic: kinetic energy decreased because cart 1 reversed direction.",
        "Perfectly inelastic: the carts move together afterward.", "Impossible: momentum is not conserved."
      ],
      a: 0,
      why: "Σp: 6 → −2 + 8 = 6 korundu. K_i = ½ × 1 × 36 = 18 J; K_f = ½ × 1 × 4 + ½ × 2 × 16 = 2 + 16 = 18 J. Toplam K korunmuş: elastic. Geri sekme tek başına inelastic anlamına gelmez."
    },
    {
      q: "The graph shows K_f versus K_i for several collisions between the same two carts, with the best-fit line. What fraction of the initial kinetic energy is lost in each collision?",
      fig: {
        type: "graph",
        xlabel: "K_i (J)",
        ylabel: "K_f (J)",
        xmax: 44,
        ymax: 36,
        lines: [
          { from: [0, 0], to: [40, 30], label: "best fit" }
        ],
        points: [
          { q: 10, p: 7.5 },
          { q: 20, p: 15 },
          { q: 30, p: 22.5 },
          { q: 40, p: 30 }
        ],
        xticks: [
          { v: 10, label: "10" },
          { v: 20, label: "20" },
          { v: 30, label: "30" },
          { v: 40, label: "40" }
        ],
        yticks: [
          { v: 10, label: "10" },
          { v: 20, label: "20" },
          { v: 30, label: "30" }
        ],
        caption: "Kinetic energy after versus before several collisions of the same two carts"
      },
      opts: ["15%", "25%", "50%", "75%"],
      a: 1,
      why: "Eğim = K_f/K_i = 30/40 = 0,75: K'nin %75'i kalıyor, %25'i kayboluyor. %75 kalan orandır, kayıp değil."
    },
    {
      q: "A 3 kg block moving right at 4 m/s collides head-on with a 1 kg block moving left at 4 m/s. The blocks stick together. How much kinetic energy is converted to other forms?",
      opts: ["8 J", "16 J", "32 J", "24 J"],
      a: 3,
      why: "Σp = 3(4) + 1(−4) = 8 ⇒ v = 8/4 = 2 m/s. K_i = ½(3)(16) + ½(1)(16) = 32 J; K_f = ½(4)(2²) = 8 J. Dönüşen enerji 32 − 8 = 24 J."
    },
    {
      q: "Two carts collide on a frictionless track. Which quantity must be the same before and after the collision in every case — elastic, inelastic, or perfectly inelastic?",
      opts: [
        "The total kinetic energy of the carts", "The kinetic energy of each cart",
        "The total momentum of the carts", "The velocity of each cart"
      ],
      a: 2,
      why: "Net dış kuvvet sıfır olduğundan toplam momentum her türde korunur. Toplam K yalnız elastic'te korunur; tek tek K ve hızlar hiçbirinde korunmak zorunda değildir."
    }
  ]
};
