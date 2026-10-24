/* Kitpath not defteri · pc201 · 2.1 Sistemler ve Kütle Merkezi
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.1; LO 2.1.A–B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc201",
  amac: "Bu konu 'sistem' kavramını ve kütle merkezini anlatıyor. Neyi nesne, neyi sistem sayacağını seçmeyi; noktasal kütlelerin ve düzgün olmayan bir çubuğun kütle merkezini (integralle) bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Nesne mi, sistem mi?",
      kisa: "Analizi kolaylaştıran sistemi seç; seçimin doğrusu yanlışı yoktur.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔘",
              terim: "Object",
              tr: "nesne",
              tanim: "İç yapısı ve boyutu yok sayılan şey: dönmez, sıkışmaz, burulmaz. Kuvvetin nereye uygulandığı önemsizdir.",
              ornek: "Rampadan kayan kutuyu tek bir nokta gibi alırsın."
            },
            {
              ikon: "🧩",
              terim: "System",
              tr: "sistem",
              tanim: "Birlikte incelenen nesneler topluluğu. İç ayrıntı önemsizse tek nesne gibi ele alınır; çevreyle enerji ve kütle alışverişi yapabilir.",
              ornek: "Yay ile bağlı iki araba tek sistem olabilir."
            },
            {
              ikon: "🛞",
              terim: "Rigid system",
              tr: "katı sistem",
              tanim: "Şekli değişmez ama farklı noktaları farklı hızla gider. Dönme önemliyse nesne yerine bunu kullan.",
              ornek: "Dönen bir tekerlek: merkezi ve kenarı farklı hızda."
            },
            {
              ikon: "🔧",
              terim: "Internal structure",
              tr: "iç yapı",
              tanim: "Sistemin parçalarının birbirine nasıl bağlı olduğu analizi etkiler. Çevre koşulları değişince iç yapı da değişebilir.",
              ornek: "Isıtılan balonun içindeki gaz genleşir; dışarıdan balon yine tek nesne."
            },
            {
              ikon: "⚖️",
              terim: "Conserved vs. constant",
              tr: "korunan / sabit",
              tanim: "Bir nicelik evrende hep korunur; ama seçtiğin sistemde sabit kalıp kalmaması sistem seçimine bağlıdır.",
              ornek: "Dış kuvvet iş yapıyorsa sistemin enerjisi değişir, yine de evrendeki toplam korunur."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🛒",
            baslik: "Sistem: yalnız *1. araba*",
            maddeler: ["Yay çevrede kalır", "Yayın kuvveti dış kuvvettir", "Arabanın hızı değişir"]
          },
          sag: {
            ikon: "🛒🛒",
            baslik: "Sistem: *iki araba + yay*",
            maddeler: ["Yay sistemin içindedir", "Yayın kuvveti iç kuvvettir", "Kütle merkezinin hızı değişmez"]
          },
          oyun: [
            {
              metin: "Yayın 1. arabaya uyguladığı kuvvet dış kuvvettir.",
              cevap: "sol",
              neden: "Yay sistemin dışında; 1. arabayı hızlandıran kuvvet çevreden geliyor."
            },
            {
              metin: "Yay serbest kalınca iki araba zıt yöne gider, ama sistemin kütle merkezi yerinde kalır (başta duruyorlardı).",
              cevap: "sag",
              neden: "İç kuvvetler sistemin kütle merkezinin hareketini değiştiremez; dış net kuvvet 0."
            },
            {
              metin: "Sistemin hızı değişiyor ve bunu dış bir kuvvet açıklıyor.",
              cevap: "sol",
              neden: "Tek arabayı seçince yay dış kuvvettir; araba içindeki parça tek başına farklı davranabilir."
            },
            {
              metin: "Yayın kuvveti iç kuvvet olduğu için net dış kuvvete girmez.",
              cevap: "sag",
              neden: "İki araba ve yay tek sistem: yay–araba kuvvetleri içeride kalır."
            }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *I choose the system to be the two carts and the spring, so the spring force is internal and the center of mass does not accelerate.* Cümlenin başında sistemi söyle; dış ve iç kuvvet ayrımı buradan gelir."
        }
      ]
    },
    {
      baslik: "Noktaların kütle merkezi",
      kisa: "Kütle merkezi, konumların kütleyle ağırlıklandırılmış ortalamasıdır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "x_cm" },
            "=",
            { t: "Σ mᵢxᵢ", alt: "her kütle × konumu" },
            "÷",
            { t: "Σ mᵢ", alt: "toplam kütle" }
          ],
          aciklama: "y_cm ve z_cm aynı kalıpla bulunur. Simetri varsa kütle merkezi simetri doğrusu ya da düzlemi üzerindedir."
        },
        {
          tip: "grafik",
          baslik: "Çubuk üzerinde iki blok: kütle merkezi ağır olana kayar",
          xlabel: "x (m)",
          ylabel: "çubuk",
          xmax: 8,
          ymax: 3.5,
          xticks: [
            { v: 0, label: "0" },
            { v: 1, label: "1" },
            { v: 4, label: "4" },
            { v: 5.5, label: "5,5" },
            { v: 7, label: "7" }
          ],
          yticks: [],
          ogeler: [
            { id: "bar", tip: "cizgi", from: [0, 1], to: [8, 1], renk: 1 },
            { id: "m1", tip: "nokta", x: 1, y: 1, renk: 0, etiket: "2 kg" },
            { id: "m2", tip: "nokta", x: 7, y: 1, renk: 0, etiket: "2 kg", gizli: true },
            { id: "cm", tip: "nokta", x: 4, y: 1, renk: 3, etiket: "cm", gizli: true },
            { id: "kay", tip: "ok", from: [4, 2.2], to: [5.5, 2.2], renk: 2, gizli: true },
            { id: "kayt", tip: "yazi", x: 4.75, y: 2.6, metin: "+1,5 m", gizli: true }
          ],
          durumlar: [
            { metin: "Çubuğun x = 1 m noktasında 2 kg'lık bir blok var." },
            { metin: "İkinci 2 kg'lık blok x = 7 m'de.", goster: ["m2"] },
            { metin: "Kütleler eşit: x_cm = (2×1 + 2×7)/4 = 4 m, tam ortada.", goster: ["cm"] },
            {
              metin: "Sağdaki blok 6 kg olursa x_cm = (2×1 + 6×7)/8 = 5,5 m. Kütle merkezi ağır bloğa yaklaştı.",
              set: { m2: { etiket: "6 kg" }, cm: { x: 5.5 } },
              goster: ["kay", "kayt"]
            },
            { metin: "Kural: kütle merkezi her zaman iki konumun arasındadır ve ağır olana daha yakındır.", gizle: ["kay", "kayt"] }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The center of mass lies closer to the larger mass because that mass has more weight in the sum of m_i x_i.* Sayıyı yazmadan önce yönü söylemek kısmi puan getirir."
        }
      ]
    },
    {
      baslik: "Düzgün olmayan çubuk: integral",
      kisa: "Çubuğu küçük dm parçalarına böl, dm = λ dx yaz, integral al.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "λ = 3x olan çubuk: dm = λ dx",
          xlabel: "x (m)",
          ylabel: "λ (kg/m)",
          xmax: 2.5,
          ymax: 7,
          xticks: [
            { v: 0.5, label: "0,5" },
            { v: 1, label: "1" },
            { v: 2, label: "2" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" }
          ],
          ogeler: [
            { id: "lam", tip: "cizgi", from: [0, 0], to: [2, 6], renk: 0, etiket: "λ = 3x" },
            { id: "tum", tip: "alan", noktalar: [[0, 0], [2, 6], [2, 0]], renk: 0, gizli: true },
            { id: "dil", tip: "alan", noktalar: [[1.1, 0], [1.1, 3.3], [1.3, 3.3], [1.3, 0]], renk: 2, gizli: true },
            { id: "dilt", tip: "yazi", x: 0.75, y: 4.3, metin: "dm = λ dx", gizli: true },
            { id: "alt", tip: "yazi", x: 1.7, y: 1.4, metin: "alan = M = 6 kg", gizli: true },
            { id: "orta", tip: "cizgi", from: [1, 0], to: [1, 6.4], renk: 1, kesik: true, gizli: true },
            { id: "ortat", tip: "yazi", x: 0.6, y: 6.6, metin: "orta = 1", gizli: true },
            { id: "cmn", tip: "nokta", x: 1.3333, y: 0, renk: 3, etiket: "x_cm = 4/3", gizli: true }
          ],
          durumlar: [
            { metin: "Yoğunluk sağa doğru artıyor: uçta 6 kg/m, başta 0. Sağ uç daha ağır." },
            { metin: "Dar bir dilim: kütlesi dm = λ dx. Bütün dilimlerin toplamı integraldir.", goster: ["dil", "dilt"] },
            { metin: "Grafiğin altındaki alan toplam kütle: M = ∫λ dx = ½ × 2 × 6 = 6 kg.", goster: ["tum", "alt"], gizle: ["dil", "dilt"] },
            { metin: "Çubuğun ortası x = 1 m. Ağır sağ uç kütle merkezini sağa çeker: x_cm = 4/3 m ≈ 1,33 m.", goster: ["orta", "ortat", "cmn"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "L = 2 m, λ = 3x (kg/m)",
          durum: "Çubuğun toplam kütlesini ve kütle merkezinin konumunu bul. x metre cinsinden.",
          adimlar: [
            "Sheet'teki denklemle başla: x_cm = ∫x dm / ∫dm.",
            "Dilimi yaz: dm = λ dx = 3x dx.",
            "Payda: ∫dm = M = ∫₀² 3x dx = [3x²/2]₀² = 6 − 0 = 6 kg.",
            "Pay: ∫₀² x·(3x) dx = ∫₀² 3x² dx = [x³]₀² = 8 − 0 = 8 kg·m.",
            "x_cm = 8/6 = 4/3 m ≈ 1,33 m.",
            "Kontrol: orta nokta 1 m. Sağ uç yoğun olduğu için merkez ortanın sağında: mantıklı."
          ],
          sonuc: "M = 6 kg, x_cm = 4/3 m (λ = cx için genel sonuç x_cm = 2L/3)"
        },
        {
          tip: "tuzak",
          baslik: "Düzgün olmayan çubukta orta noktayı yazmak",
          metin: "λ sabit değilse kütle merkezi ortada olmaz. Payda ∫dm'yi atlamak ve integral sınırlarını (0 ve L) yazmamak da puan kaybettirir.",
          yanlis: "x_cm = ∫x dm ve sınırlar belirsiz; ya da 'çubuk simetrik, ortası'.",
          dogru: "x_cm = ∫x dm / ∫dm, sınırlar 0 ve L; önce integrali al, sonra sınırları koy."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Begin with x_cm = ∫x dm / ∫dm. Substitute dm = λ dx and integrate from x = 0 to x = L.*"
        }
      ]
    },
    {
      baslik: "Kütle merkezi nerede? Sistem tek nesne gibi",
      kisa: "Sistem, kütle merkezindeki tek nesne gibi davranır; merkez cismin dışında olabilir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Hangi cismin kütle merkezi nerede?",
          head: ["Cisim", "Kütle merkezi", "Dikkat"],
          rows: [
            ["Düzgün çubuk", "Tam ortası", "λ sabit"],
            ["Düzgün disk, küre", "Geometrik merkez", "Simetri doğruları kesişir"],
            ["Düzgün halka", "Halkanın merkezi", "Orada hiç malzeme yok"],
            ["L şeklinde cisim", "Köşenin iç tarafı", "Malzemenin dışında kalabilir"],
            ["λ artan çubuk", "Yoğun uca yakın", "Orta nokta değil; integral gerekir"]
          ],
          vurgu: 2,
          not: "Kütle merkezi cismin 'içinde' olmak zorunda değildir."
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "🪞",
              baslik: "Simetri varsa kullan",
              metin: "Simetri doğrusu üzerindedir; iki simetri doğrusu varsa kesişimdedir."
            },
            {
              ikon: "🧱",
              baslik: "Bileşik cismi parçala",
              metin: "Her parçayı kendi kütle merkezindeki noktaya indir, sonra ayrık formülü uygula."
            },
            {
              ikon: "📐",
              baslik: "Yoğunluk verilirse integrale çevir",
              metin: "Çubukta λ = dm/dℓ, hacimde M = ∫ρ dV. Sınırlar cismin sınırlarıdır."
            },
            {
              ikon: "📍",
              baslik: "Sistemi tek nesne yap",
              metin: "Toplam kütle M, kütle merkezinde: dış kuvvetleri bu noktaya uygulanmış say."
            }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The system can be modeled as a single object of mass M located at its center of mass.*"
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
            "*Object* iç yapısı yok sayılan şeydir; *system* birlikte incelenen nesneler topluluğudur; doğru ya da yanlış sistem yoktur, kolay olanı seç.",
            "Bir kuvvet, sistemin içindeki iki nesne arasındaysa iç, çevreden geliyorsa dış kuvvettir; kendi başına hızlanan sistem yoktur.",
            "Ayrık noktalar: x_cm = Σ mᵢxᵢ / Σ mᵢ; sonuç ağır kütleye yakın ve konumların arasındadır.",
            "Düzgün olmayan çubukta λ = dm/dℓ olur, dm = λ dx yazılır ve x_cm = ∫x dm / ∫dm hesaplanır.",
            "λ = 3x, L = 2 m için M = 6 kg ve x_cm = 4/3 m; orta nokta (1 m) değildir.",
            "Integralde sınırları (0 ve L) yaz, önce integrali al, sonra sınırları koy, paydaki ∫dm'yi unutma.",
            "Kütle merkezi cismin dışında olabilir (halka, L şekli).",
            "Sistemi kütle merkezindeki tek nesne gibi modelleyebilirsin; iç kuvvetler kütle merkezinin hareketini değiştirmez."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Three small particles lie on the x-axis, as described in the table. What is the x-coordinate of the center of mass of the three-particle system?",
      fig: {
        type: "table",
        head: ["Particle", "Mass (kg)", "x (m)"],
        rows: [["A", 4, 0], ["B", 2, 3], ["C", 2, 5]],
        caption: "Three particles on the x-axis"
      },
      opts: ["1.5 m", "2.0 m", "2.5 m", "3.0 m"],
      a: 1,
      why: "x_cm = (4·0 + 2·3 + 2·5)/(4+2+2) = 16/8 = 2,0 m. Konumların düz ortalaması (0+3+5)/3 = 2,67 m tuzaktır: kütleler eşit değil, 4 kg'lık A merkezi sola çeker."
    },
    {
      q: "A thin rod of length L lies along the x-axis from x = 0 to x = L. Its linear mass density is λ = kx, where k is a positive constant. The x-coordinate of its center of mass is",
      opts: ["L/2", "L/3", "3L/4", "2L/3"],
      a: 3,
      why: "M = ∫₀ᴸ kx dx = kL²/2 ve ∫x dm = ∫₀ᴸ kx² dx = kL³/3; oran 2L/3. L/2 yanlış: yoğunluk sabit olsaydı geçerli olurdu; burada sağ uç daha yoğun."
    },
    {
      q: "Two carts of different masses rest on a frictionless horizontal track with a compressed spring between them. The spring is released and the carts move apart. For the system of both carts and the spring, the center of mass",
      opts: [
        "stays at rest, because the net external force on the system is zero",
        "moves toward the heavier cart, because the spring pushes it harder",
        "moves toward the lighter cart, because it gains more speed",
        "accelerates, because the spring force is not balanced for either cart"
      ],
      a: 0,
      why: "Yay kuvveti bu sistemin içinde kalır; dış net kuvvet 0 olduğundan kütle merkezi başlangıçtaki gibi durur. Her arabaya tek tek bakınca yay dış kuvvettir, ama soru iki arabayı birlikte seçiyor."
    },
    {
      q: "An L-shaped object is made of two uniform thin rods that meet at the corner at the origin. A 1 kg rod, 2 m long, lies along the y-axis; a 3 kg rod, 2 m long, lies along the x-axis. What are the coordinates (x_cm, y_cm) of the center of mass?",
      opts: ["(1.0 m, 1.0 m)", "(0.25 m, 0.75 m)", "(0.75 m, 0.25 m)", "(1.5 m, 0.5 m)"],
      a: 2,
      why: "Her çubuk kendi ortasında: x-ekseni çubuğu (1, 0), y-ekseni çubuğu (0, 1). x_cm = (3·1 + 1·0)/4 = 0,75 m; y_cm = (3·0 + 1·1)/4 = 0,25 m. Ağır çubuk x ekseninde olduğu için y_cm küçük çıkar; 2. şık x ve y'yi değiştirmiş."
    },
    {
      q: "A rod extends from x = 0 to x = 2 m. The graph shows its linear mass density λ(x), which decreases linearly from 4 kg/m at x = 0 to 0 at x = 2 m. The center of mass of the rod is located at",
      fig: {
        type: "graph",
        xlabel: "x (m)",
        ylabel: "λ (kg/m)",
        xmax: 2.5,
        ymax: 4.5,
        lines: [{ from: [0, 4], to: [2, 0], label: "λ(x)" }],
        xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
        yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }],
        caption: "Linear mass density of the rod"
      },
      opts: ["x = 2/3 m", "x = 1 m", "x = 4/3 m", "x = 3/2 m"],
      a: 0,
      why: "λ = 4 − 2x: M = ∫₀² (4 − 2x) dx = 4 kg ve ∫x λ dx = ∫₀² (4x − 2x²) dx = 8/3; x_cm = (8/3)/4 = 2/3 m. Yoğunluk sol uçta büyük olduğundan merkez ortanın (1 m) solunda; 4/3 m soruyu aynalamak olur."
    }
  ]
};
