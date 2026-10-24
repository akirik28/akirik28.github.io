/* Kitpath not defteri · pc206 · 2.8 Yay Kuvveti
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.8; LO 2.8.A–B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc206",
  amac: "Bu konu ideal yayın kuvvetini anlatıyor: Hooke yasası, kuvvetin yönü ve işareti, yay sabitini grafikten bulma ve seri ile paralel bağlı yayların eşdeğer yay sabiti.",
  bolumler: [
    {
      baslik: "Hooke yasası: ideal yay",
      kisa: "İdeal yay, doğal boyundan değişimle orantılı kuvvet uygular: F_s = −kΔx.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "F_s" },
            "=",
            "−",
            { t: "k", alt: "yay sabiti (N/m)" },
            "×",
            { t: "Δx", alt: "doğal boydan değişim" }
          ],
          aciklama: "Eksi işareti kuvvetin hep denge konumuna doğru olduğunu söyler. Büyük k, sert yay demektir."
        },
        {
          tip: "grafik",
          baslik: "Yaya kütle asıyoruz: F ile uzama doğrusal (g = 9,8 m/s²)",
          xlabel: "uzama Δx (cm)",
          ylabel: "F = mg (N)",
          xmax: 10,
          ymax: 5,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          ogeler: [
            { id: "p1", tip: "nokta", x: 2, y: 0.98, renk: 0 },
            { id: "p2", tip: "nokta", x: 4, y: 1.96, renk: 0, gizli: true },
            { id: "p3", tip: "nokta", x: 6, y: 2.94, renk: 0, gizli: true },
            { id: "p4", tip: "nokta", x: 8, y: 3.92, renk: 0, gizli: true },
            { id: "fit", tip: "cizgi", from: [0, 0], to: [10, 4.9], renk: 1, gizli: true },
            { id: "run", tip: "cizgi", from: [2, 0.98], to: [8, 0.98], renk: 2, kesik: true, gizli: true },
            { id: "rise", tip: "cizgi", from: [8, 0.98], to: [8, 3.92], renk: 2, kesik: true, gizli: true },
            { id: "runt", tip: "yazi", x: 5, y: 0.45, metin: "Δx = 6 cm", gizli: true },
            { id: "riset", tip: "yazi", x: 8.3, y: 2.4, metin: "ΔF = 2,94 N", hiza: "start", gizli: true }
          ],
          durumlar: [
            { metin: "0,1 kg asıyorsun: F = mg = 0,98 N ve yay 2 cm uzuyor." },
            { metin: "0,2; 0,3 ve 0,4 kg için uzama 4, 6 ve 8 cm; kuvvet 1,96; 2,94 ve 3,92 N.", goster: ["p2", "p3", "p4"] },
            { metin: "Noktalar orijinden geçen bir doğru üzerinde: F ∝ Δx. Doğruyu cetvelle çiz.", goster: ["fit"] },
            {
              metin: "Eğim = yay sabiti. Doğru üzerindeki iki noktadan: k = ΔF/Δx = 2,94 N / 0,06 m = 49 N/m.",
              goster: ["run", "rise", "runt", "riset"]
            }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The graph of F versus Δx is a straight line through the origin, so the spring obeys Hooke's law, and k equals the slope.* Eğimi doğru üzerindeki iki noktadan hesapla; tek bir veri noktasını orijinle birleştirme."
        }
      ]
    },
    {
      baslik: "Yönü ve işareti",
      kisa: "Yay kuvveti hep denge konumuna doğrudur; Δx doğal boydan ölçülür.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🌀",
              terim: "Ideal spring",
              tr: "ideal yay",
              tanim: "Kütlesiz ve kuvveti uzamayla orantılı yay. Kütleli ya da orantısız (doğrusal olmayan) yay ideal değildir.",
              ornek: "Sınav aksini söylemedikçe yaylar ideal alınır."
            },
            {
              ikon: "↩️",
              terim: "Restoring force",
              tr: "geri çağıran kuvvet",
              tanim: "Sistemi denge konumuna doğru çeken kuvvet. Yay uzatılınca kısaltmaya, sıkıştırılınca uzatmaya çalışır.",
              ornek: "Duvara bağlı yayda blok sağa çekilirse kuvvet sola doğrudur."
            },
            {
              ikon: "📏",
              terim: "Natural length",
              tr: "doğal uzunluk",
              tanim: "Yayın ne gerilmiş ne sıkışmış hâldeki boyu. Δx bu boydan ölçülür.",
              ornek: "Doğal boy 0,30 m, şimdiki boy 0,38 m ise Δx = 0,08 m."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Duvara bağlı yay, sağda blok (+x sağa), k = 100 N/m",
          head: ["Durum", "Δx", "F_s = −kΔx", "Yön"],
          rows: [
            ["Doğal boy", "0", "0", "kuvvet yok"],
            ["Uzatılmış (blok sağa)", "+0,05 m", "−5 N", "sola, duvara doğru"],
            ["Sıkıştırılmış (blok sola)", "−0,05 m", "+5 N", "sağa, bloğu iter"]
          ],
          vurgu: 1,
          not: "Her iki durumda da kuvvet denge konumuna (Δx = 0) doğrudur."
        },
        {
          tip: "tuzak",
          baslik: "Δx'i yayın boyu sanmak",
          metin: "Hooke yasasındaki Δx, yayın o andaki boyu değil, doğal uzunluğundan değişimdir. Orijin olarak keyfi bir nokta seçmek de aynı hataya götürür.",
          yanlis: "Yay 0,38 m uzunluğunda, o hâlde Δx = 0,38 m.",
          dogru: "Doğal boy 0,30 m ise Δx = 0,38 − 0,30 = 0,08 m ve k = 50 N/m için |F| = 4 N."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The spring force is directed toward the equilibrium position, opposite to the displacement from the natural length.*"
        }
      ]
    },
    {
      baslik: "Seri ve paralel yaylar",
      kisa: "Paralelde sabitler toplanır; seride terslerin toplamı eşdeğerin tersidir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "k₁ = 20 N/m ve k₂ = 60 N/m: F–Δx doğruları",
          xlabel: "Δx (m)",
          ylabel: "F (N)",
          xmax: 0.3,
          ymax: 20,
          xticks: [
            { v: 0.1, label: "0,1" },
            { v: 0.2, label: "0,2" },
            { v: 0.3, label: "0,3" }
          ],
          yticks: [
            { v: 5, label: "5" },
            { v: 10, label: "10" },
            { v: 15, label: "15" },
            { v: 20, label: "20" }
          ],
          ogeler: [
            { id: "k1", tip: "cizgi", from: [0, 0], to: [0.25, 5], renk: 0, etiket: "k₁ = 20" },
            { id: "k2", tip: "cizgi", from: [0, 0], to: [0.25, 15], renk: 1, etiket: "k₂ = 60" },
            { id: "par", tip: "cizgi", from: [0, 0], to: [0.25, 20], renk: 3, etiket: "paralel 80", gizli: true },
            { id: "ser", tip: "cizgi", from: [0, 0], to: [0.25, 3.75], renk: 2, etiket: "seri 15", gizli: true }
          ],
          durumlar: [
            { metin: "İki yayın F–Δx doğruları. Eğim yay sabitidir: k₂ üç kat sert." },
            { metin: "Paralel: aynı Δx'te iki yay da kuvvet verir, kuvvetler toplanır: k_eq = 20 + 60 = 80 N/m. En dik çizgi.", goster: ["par"] },
            { metin: "Seri: aynı F her yaydan geçer, uzamalar toplanır: 1/k_eq = 1/20 + 1/60 = 4/60, yani 15 N/m. En yatay çizgi: en yumuşak yaydan bile yumuşak.", goster: ["ser"] }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "➖",
            baslik: "*Series* (uç uca)",
            maddeler: ["Aynı kuvvet her yayda", "Uzamalar toplanır", "1/k_eq = 1/k₁ + 1/k₂", "k_eq en küçük k'dan küçük"]
          },
          sag: {
            ikon: "⏸️",
            baslik: "*Parallel* (yan yana)",
            maddeler: ["Aynı Δx", "Kuvvetler toplanır", "k_eq = k₁ + k₂", "k_eq en büyük k'dan büyük"]
          },
          oyun: [
            { metin: "İki yay uç uca; tavandan asılı yük ikisini de aynı kuvvetle çekiyor.", cevap: "sol", neden: "Her yaydan geçen kuvvet aynı: seri." },
            { metin: "Blok iki duvar arasında, her yandan bir yayla tutuluyor.", cevap: "sag", neden: "Blok kayınca biri uzar, diğeri sıkışır; ikisi de bloğu aynı yöne (dengeye) iter: paralel." },
            { metin: "k_eq = k₁ + k₂.", cevap: "sag", neden: "Paralelde sabitler toplanır." },
            { metin: "Eşdeğer yay sabiti, yaylardan en yumuşağından bile küçük.", cevap: "sol", neden: "Seride uzamalar toplandığı için bütün daha yumuşak." }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *For springs in series, 1/k_eq = Σ 1/k_i, so k_eq is smaller than the smallest k; for springs in parallel k_eq = Σ k_i.* Sınav yalnız saf seri ya da saf paralel düzen ister."
        }
      ]
    },
    {
      baslik: "Çözümlü örnek ve sınav tuzağı",
      kisa: "Önce düzeni belirle (seri ya da paralel), sonra k_eq ile Hooke yasasını uygula.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "k₁ = 20 N/m ve k₂ = 60 N/m, iki düzen",
          durum: "A: Blok iki duvar arasında, her yandan bir yayla bağlı; 0,1 m kaydırılıyor. B: Aynı yaylar uç uca ve tavandan 3 N'luk yük asılı. Her ikisinde k_eq'yu ve sonucu bul.",
          adimlar: [
            "A paralel: blok kayınca iki yay da aynı yönde geri çağırır. k_eq = 20 + 60 = 80 N/m.",
            "|F| = k_eq × Δx = 80×0,1 = 8 N (kontrol: 20×0,1 + 60×0,1 = 2 + 6 = 8 N).",
            "B seri: 1/k_eq = 1/20 + 1/60 = 3/60 + 1/60 = 4/60, yani k_eq = 15 N/m.",
            "Toplam uzama: Δx = F/k_eq = 3/15 = 0,2 m.",
            "Parça parça: 3/20 = 0,15 m ve 3/60 = 0,05 m; toplam 0,2 m. Tutuyor.",
            "Mantık kontrolü: seri 15 < 20 (en yumuşaktan küçük), paralel 80 > 60 (en sertten büyük)."
          ],
          sonuc: "A: paralel, k_eq = 80 N/m, |F| = 8 N. B: seri, k_eq = 15 N/m, uzama 0,2 m"
        },
        {
          tip: "tuzak",
          baslik: "Bloğun iki yanındaki yayları seri sanmak",
          metin: "2025 sınavında bu konuda sık görülen hata: iki yayı seri almak ya da sabitlerin farkını yazmak. Bloğa iki yay da aynı yönde kuvvet uyguluyorsa paraleldir.",
          yanlis: "Blok iki yay arasında: 1/k_eq = 1/k₁ + 1/k₂ ya da k_eq = k₂ − k₁.",
          dogru: "Blok kayınca iki yay da dengeye doğru iter: paralel, k_eq = k₁ + k₂."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The block is attached to springs on opposite sides, and each spring exerts a restoring force in the same direction, so the springs act in parallel.* Gerekçeni yay kuvvetlerinin yönüyle ver."
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
            "İdeal yay kütlesiz ve kuvveti uzamayla orantılıdır: F_s = −kΔx; kütleli ya da doğrusal olmayan yay ideal değildir.",
            "Δx doğal uzunluktan ölçülür; eksi işaret kuvvetin denge konumuna doğru olduğunu söyler.",
            "F–Δx grafiğinin eğimi k'dir; eğimi doğru üzerindeki iki noktadan hesapla (0,98 N → 3,92 N, 2 → 8 cm: 49 N/m).",
            "Paralel yaylarda aynı Δx, kuvvetler toplanır: k_eq = k₁ + k₂; k_eq en sert yaydan büyük.",
            "Seri yaylarda aynı kuvvet, uzamalar toplanır: 1/k_eq = 1/k₁ + 1/k₂; k_eq en yumuşak yaydan küçük.",
            "20 ve 60 N/m için paralel 80 N/m, seri 15 N/m.",
            "Bloğun iki yanına bağlı yaylar paraleldir; seri ya da fark almak sık yapılan hatadır.",
            "Sınav yalnız saf seri ya da saf paralel düzen sorar; karışık düzen beklenmez."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A student hangs masses from an ideal spring and plots the spring force F versus the stretch Δx, as shown. What is the spring constant?",
      fig: {
        type: "graph",
        xlabel: "Δx (m)",
        ylabel: "F (N)",
        xmax: 0.3,
        ymax: 12,
        lines: [{ from: [0, 0], to: [0.25, 10], color: 0 }],
        xticks: [{ v: 0.1, label: "0.1" }, { v: 0.2, label: "0.2" }, { v: 0.25, label: "0.25" }],
        yticks: [{ v: 5, label: "5" }, { v: 10, label: "10" }],
        caption: "Force versus stretch for the spring"
      },
      opts: ["0.025 N/m", "2.5 N/m", "40 N/m", "400 N/m"],
      a: 2,
      why: "k = eğim = ΔF/Δx = 10 N / 0,25 m = 40 N/m. 0,025 N/m oranı ters çevirmek (Δx/F), 2,5 N/m ise Δx = 0,25 m yerine 2,5 m okumaktan çıkar."
    },
    {
      q: "Two ideal springs with spring constants 200 N/m and 300 N/m are connected end to end (in series). The equivalent spring constant of the combination is",
      opts: ["120 N/m", "250 N/m", "500 N/m", "100 N/m"],
      a: 0,
      why: "Seri: 1/k_eq = 1/200 + 1/300 = 5/600, yani k_eq = 120 N/m (en yumuşak yaydan küçük). 500 N/m paralel değeri, 250 N/m ortalamadır; ikisi de seri bağlantıyı tanımlamaz."
    },
    {
      q: "A block rests on a frictionless table between two walls. It is attached to the left wall by a spring with k = 100 N/m and to the right wall by a spring with k = 150 N/m. Both springs are at their natural lengths when the block is at equilibrium. The block is displaced 0.20 m from equilibrium. The magnitude of the net spring force on the block is",
      opts: ["10 N", "12 N", "50 N", "25 N"],
      a: 2,
      why: "Blok iki yanındaki yaylarla paralel çalışır: k_eq = 100 + 150 = 250 N/m, F = 250×0,20 = 50 N. 12 N yaylar seri alınırsa (60 N/m), 10 N sabitlerin farkı alınırsa çıkar; ikisi de geçerli bir model değil."
    },
    {
      q: "One end of a spring (k = 50 N/m, natural length 0.30 m) is fixed to a wall. A block attached to the other end is held so that the spring's length is 0.38 m. What is the force exerted by the spring on the block?",
      opts: [
        "19 N, toward the wall",
        "4 N, toward the wall",
        "4 N, away from the wall",
        "15 N, toward the wall"
      ],
      a: 1,
      why: "Δx doğal uzunluktan ölçülür: 0,38 − 0,30 = 0,08 m, |F| = 50×0,08 = 4 N. Yay uzatıldığı için kuvvet geri çağırır, yani duvara doğrudur. 19 N toplam boyu (0,38), 15 N doğal boyu Δx yerine koymak olur."
    },
    {
      q: "A student hangs different masses m from a vertical ideal spring of spring constant k and measures the stretch x of the spring at equilibrium. If x is plotted on the vertical axis and m on the horizontal axis, the slope of the best-fit line is equal to",
      opts: ["k/g", "gk", "1/k", "g/k"],
      a: 3,
      why: "Dengede kx = mg, yani x = (g/k)·m. x–m grafiğinin eğimi g/k'dir. F–x grafiğinde eğim k olurdu; eksenleri değiştirince eğim ters çevrilir ve g devreye girer."
    }
  ]
};
