/* Kitpath not defteri · pc203 · 2.4–2.5 Newton'un Birinci ve İkinci Yasası
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.4 ve 2.5; LO 2.4.A, 2.5.A). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc203",
  amac: "Bu konu Newton'un birinci ve ikinci yasalarını anlatıyor: net kuvvet sıfırken hız neden sabit kalır, sıfırdan farklıyken neden değişir. a = ΣF/m ile tek cisimli sistemleri, birleşik sistemleri ve eğik düzlemi çözmeyi öğreneceksin.",
  bolumler: [
    {
      baslik: "Net kuvvet ve denge (1. yasa)",
      kisa: "Net kuvvet sıfırsa hız sabittir; kuvvet hızı değiştirmek içindir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "➕",
              terim: "Net force",
              tr: "net kuvvet",
              tanim: "Cisme etkiyen bütün kuvvetlerin vektör toplamı, ΣF.",
              ornek: "5 N sağa ve 5 N sola: net kuvvet 0."
            },
            {
              ikon: "⚖️",
              terim: "Translational equilibrium",
              tr: "öteleme dengesi",
              tanim: "ΣF = 0 olması. Cisim durgundur ya da sabit hızla gider.",
              ornek: "Sabit hızla yükselen asansör."
            },
            {
              ikon: "🧊",
              terim: "Newton's first law",
              tr: "birinci yasa",
              tanim: "Net kuvvet sıfırsa hız sabittir: durgun cisim durur, hareketli cisim aynı hızla düz gider.",
              ornek: "Sürtünmesiz buzda kayan disk hızını korur."
            },
            {
              ikon: "🚆",
              terim: "Inertial reference frame",
              tr: "eylemsiz çerçeve",
              tanim: "Birinci yasanın doğrulandığı çerçeve. Sınavda aksi söylenmedikçe çerçeve inertialdır.",
              ornek: "Sabit hızlı trenin içi inertial; ani frenleyen trenin içi değil."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "⚖️",
            baslik: "ΣF = 0 (dengede)",
            maddeler: ["Hız değişmez", "Kuvvetler olabilir, toplamı 0", "İvme 0"]
          },
          sag: {
            ikon: "↗️",
            baslik: "ΣF ≠ 0 (dengesiz)",
            maddeler: ["Hız büyüklüğü ya da yönü değişir", "İvme net kuvvet yönünde", "Bir boyutta dengeli olsa bile"]
          },
          oyun: [
            { metin: "Marketten sepeti sabit hızla itiyorsun.", cevap: "sol", neden: "İtme var ama sürtünmeyle toplamı 0; hız sabit." },
            { metin: "Araba süratini değiştirmeden bir viraja giriyor.", cevap: "sag", neden: "Hızın yönü değişiyor, yani ivme var; net kuvvet merkeze doğru." },
            { metin: "Düz yolda 20 m/s sabit hızla giden araba.", cevap: "sol", neden: "Motor itişi ile direnç dengede; hız sabit." },
            { metin: "Yukarı atılan topun en üst noktası.", cevap: "sag", neden: "Hız anlık 0 olsa da ağırlık hâlâ aşağı etkiyor; ΣF ≠ 0." }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Because the net force on the cart is zero, its velocity is constant (Newton's first law).* Bir boyutta dengeli, diğerinde dengesiz olabilir: hız yalnız dengesiz kuvvetin yönünde değişir. Hareketi sürdürmek için kuvvet gerekmez."
        }
      ]
    },
    {
      baslik: "İkinci yasa: net kuvvet ivme verir",
      kisa: "Kütle merkezinin ivmesi, net dış kuvvetle aynı yönde ve ΣF/m kadardır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "a_sys" },
            "=",
            { t: "ΣF", alt: "net dış kuvvet" },
            "÷",
            { t: "m_sys", alt: "sistemin kütlesi" }
          ],
          aciklama: "Kütle merkezinin hızı yalnız sıfırdan farklı net dış kuvvet varsa değişir. İç kuvvetler ΣF'ye girmez."
        },
        {
          tip: "grafik",
          baslik: "Aynı cisim, farklı net kuvvet: v–t grafiği (v₀ = 4 m/s)",
          xlabel: "t (s)",
          ylabel: "v (m/s)",
          xmax: 5,
          ymax: 13,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" }
          ],
          ogeler: [
            { id: "d0", tip: "cizgi", from: [0, 4], to: [4, 4], renk: 0, etiket: "ΣF = 0" },
            { id: "d1", tip: "cizgi", from: [0, 4], to: [4, 12], renk: 1, etiket: "a = 2", gizli: true },
            { id: "d2", tip: "cizgi", from: [0, 4], to: [4, 8], renk: 2, etiket: "a = 1", gizli: true },
            { id: "d3", tip: "cizgi", from: [0, 4], to: [4, 0], renk: 3, etiket: "a = −1", gizli: true }
          ],
          durumlar: [
            { metin: "ΣF = 0: hız sabit, çizgi yatay. Eğim ivmedir, burada 0." },
            { metin: "ΣF = 4 N, m = 2 kg: a = 4/2 = 2 m/s². Eğim 2; 4 s sonra v = 12 m/s.", goster: ["d1"] },
            { metin: "Aynı 4 N ama m = 4 kg: a = 1 m/s². Kütle büyüyünce eğim yarıya iniyor.", goster: ["d2"] },
            { metin: "Net kuvvet harekete ters (−2 N, m = 2 kg): a = −1 m/s²; cisim yavaşlar ve 4 s'de durur.", goster: ["d3"] }
          ]
        },
        {
          tip: "tablo",
          baslik: "Net kuvvet hıza göre nerede?",
          head: ["Net kuvvet", "Hıza göre yönü", "Ne olur?"],
          rows: [
            ["ΣF = 0", "yok", "Hız sabit (büyüklük ve yön)"],
            ["ΣF ≠ 0", "hızla aynı yönde", "Sürat artar"],
            ["ΣF ≠ 0", "hıza ters yönde", "Sürat azalır"],
            ["ΣF ≠ 0", "hıza dik", "Sürat sabit, yön değişir (dönme)"]
          ],
          vurgu: 3,
          not: "Son satır 2.10'da dairesel harekete bağlanacak."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The net force is nonzero, so by Newton's second law the center of mass accelerates in the direction of the net force.* Yönü ve işareti mutlaka söyle."
        }
      ]
    },
    {
      baslik: "Birleşik sistemde iç ve dış kuvvet",
      kisa: "Sistemin ivmesi için yalnız dış kuvvetleri topla; iç kuvvetler çift hâlinde kaybolur.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Yan yana iki blok: 2 kg (A) ve 4 kg (B)",
          durum: "Sürtünmesiz masada A'ya 12 N'luk yatay kuvvet uygulanıyor; A, B'yi itiyor. İvmeyi ve A–B temas kuvvetini bul.",
          adimlar: [
            "Sistem = A + B. Aralarındaki temas kuvvetleri iç kuvvettir ve çift hâlinde birbirini götürür: ΣF = 12 N.",
            "a = ΣF/m = 12/(2 + 4) = 2 m/s².",
            "Şimdi B'yi tek başına seç. B'ye yatay etkiyen tek kuvvet A'nın itişi: N_AB = m_B·a = 4×2 = 8 N.",
            "Kontrol A için: 12 − 8 = 4 N = m_A·a = 2×2. Tutuyor."
          ],
          sonuc: "a = 2 m/s²; A–B temas kuvveti 8 N"
        },
        {
          tip: "tuzak",
          baslik: "İç kuvveti sistemin net kuvvetine eklemek",
          metin: "Blokları tek sistem seçtiysen aralarındaki kuvvetler denklemde görünmez. Tek bir bloğa geçince aynı kuvvet dış kuvvet olur. Sistem seçimini yazıp ona sadık kal.",
          yanlis: "Sistem A + B için ΣF = 12 + 8 = 20 N.",
          dogru: "Sistem A + B için ΣF = 12 N; 8 N yalnız B'ye (ya da A'ya) bakınca görünür."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *I choose the two blocks as the system, so the contact forces between them are internal and only the 12 N applied force appears in the net force.*"
        }
      ]
    },
    {
      baslik: "Eğik düzlemde işaretler",
      kisa: "Eksen yüzeye paralel; ağırlığın eğim bileşeniyle sürtünme zıt işaretlidir.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "37°'lik eğik düzlemde 5 kg'lık blok aşağı kayıyor",
          durum: "Kinetik sürtünme 9,8 N ve düzlem boyunca yukarı yönlü. sin 37° = 0,6, cos 37° = 0,8 al; g = 9,8 m/s². İvmeyi bul.",
          adimlar: [
            "FBD: mg aşağı, N düzleme dik, f düzlem boyunca yukarı. Hareket düzlem boyunca olduğu için ekseni düzleme paralel seç, aşağı yön +.",
            "Dik eksende ivme yok: N = mg cos 37° = 39,2 N (bu örnekte yalnız kontrol).",
            "Paralel eksen: ağırlığın bileşeni +mg sin 37° = 5×9,8×0,6 = +29,4 N.",
            "Sürtünme harekete ters, yani −9,8 N.",
            "ΣF = 29,4 − 9,8 = 19,6 N ve a = 19,6/5 = 3,92 m/s² (düzlem boyunca aşağı)."
          ],
          sonuc: "a = 3,92 m/s², düzlem boyunca aşağı (a = g sin θ − f/m)"
        },
        {
          tip: "tuzak",
          baslik: "Sürtünmeyi ve eğim bileşenini aynı işaretle yazmak",
          metin: "Sınavda en çok kaybedilen noktalardan biri: sürtünme ile ağırlığın eğim bileşeni zıt yönlüdür ve denklemde zıt işaret almalıdır. İvmenin yerine doğrudan g yazmak da yaygın hata.",
          yanlis: "ΣF = mg sin θ + f ve a = g.",
          dogru: "Aşağı + alındığında ΣF = mg sin θ − f ve a = g sin θ − f/m."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Using the axis parallel to the incline, Newton's second law gives mg sin θ − f = ma.* Önce ekseni ve yönü söyle, sonra denklemi yaz."
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
            "*Net force* bütün kuvvetlerin vektör toplamıdır; ΣF = 0 ise (*translational equilibrium*) hız sabittir.",
            "Hareketi sürdürmek için kuvvet gerekmez; kuvvet hızı değiştirir. Sabit hızda kuvvetler vardır ama toplamları 0'dır.",
            "Bir boyutta dengeli, diğerinde dengesiz olabilir: hız yalnız dengesiz kuvvetin yönünde değişir.",
            "İkinci yasa: a_sys = ΣF/m_sys; ivme net kuvvetle aynı yönde. Kütle merkezinin hızı yalnız net dış kuvvetle değişir.",
            "v–t grafiğinde eğim ivmedir: aynı kuvvette kütle iki katı olunca eğim yarıya iner.",
            "Birleşik sistemde iç kuvvetler denkleme girmez; A–B temas kuvveti 12 N itişte 8 N bulundu (a = 2 m/s²).",
            "m·a ayrı bir kuvvet değildir; net kuvvetin sonucudur.",
            "Eğik düzlemde ekseni yüzeye paralel al, sürtünme ve eğim bileşenini zıt işaretle yaz: a = g sin θ − f/m (5 kg, 37°, 9,8 N için 3,92 m/s²)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A 2 kg cart moves along the x-axis. The graph shows its velocity v as a function of time t. What is the net force on the cart during the interval from t = 4 s to t = 6 s?",
      fig: {
        type: "graph",
        xlabel: "t (s)",
        ylabel: "v (m/s)",
        xmax: 7,
        ymax: 5,
        lines: [
          { from: [0, 0], to: [2, 4], color: 0 },
          { from: [2, 4], to: [4, 4], color: 0 },
          { from: [4, 4], to: [6, 0], color: 0 }
        ],
        xticks: [
          { v: 2, label: "2" },
          { v: 4, label: "4" },
          { v: 6, label: "6" }
        ],
        yticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }],
        caption: "Velocity of the cart"
      },
      opts: ["0", "2 N in the +x direction", "4 N in the −x direction", "8 N in the −x direction"],
      a: 2,
      why: "4–6 s arasında eğim a = (0 − 4)/2 = −2 m/s². ΣF = ma = 2×(−2) = −4 N, yani −x yönünde 4 N. 8 N, Δv'yi Δt'ye bölmeyi unutup m·Δv almaktan (2 × 4) gelir; 0 ise 'hız sıfıra iniyor' diye net kuvveti sıfır saymak olur."
    },
    {
      q: "A crate is pushed across a rough horizontal floor at constant velocity. Which statement about the horizontal forces on the crate is correct?",
      opts: [
        "The push is greater than the friction force, because the crate is moving",
        "The push and the friction force have equal magnitude and opposite directions",
        "The net force is in the direction of motion, because the crate keeps moving",
        "No friction acts on the crate, because its velocity is constant"
      ],
      a: 1,
      why: "Sabit hız demek ivme 0, yani ΣF = 0: itme ile sürtünme eşit ve zıt. Hareket sürsün diye itmenin sürtünmeden büyük olması gerektiği Aristoteles sezgisidir; sürtünme vardır, sadece itmeyle dengelenmiştir."
    },
    {
      q: "A ball is thrown at an angle above the horizontal. At the highest point of its path, and neglecting air resistance, which statement about the ball is correct?",
      opts: [
        "The net force is zero, because the vertical velocity is zero",
        "The net force is horizontal, in the direction of the velocity",
        "The net force is upward, because the ball is about to change direction",
        "The net force is downward, and the velocity is horizontal"
      ],
      a: 3,
      why: "Havada yalnız ağırlık etkir: net kuvvet her an aşağı yönde mg. En tepede düşey hız 0, hız yatay. Yatayda kuvvet yok (dengeli), düşeyde dengesiz; hız yalnız dengesiz kuvvetin yönünde değişir."
    },
    {
      q: "A block of mass m slides down a rough incline that makes an angle θ with the horizontal. The kinetic friction force on the block has magnitude f. Which expression gives the magnitude of the block's acceleration?",
      opts: ["g sin θ − f/m", "g sin θ + f/m", "g − f/m", "g cos θ − f/m"],
      a: 0,
      why: "Düzleme paralel eksende aşağı + alınca mg sin θ − f = ma. Sürtünme ile eğim bileşeni zıt yönlü olduğu için ikinci şık yanlış; g cos θ normal kuvvet eksenine ait."
    },
    {
      q: "Two carts, 1 kg and 2 kg, are connected by a light string on a frictionless horizontal track. A student pulls the 1 kg cart horizontally with a constant 6 N force so that both carts move. What is the magnitude of the acceleration of the center of mass of the two-cart system?",
      opts: ["1 m/s²", "2 m/s²", "3 m/s²", "6 m/s²"],
      a: 1,
      why: "İp iç kuvvettir; sisteme yatayda yalnız 6 N dış kuvvet etkiyor. a_cm = ΣF/m_toplam = 6/3 = 2 m/s². 6 m/s² yalnız 1 kg'lık arabaya bakmak olur, ip ikinci arabayı da hızlandırır."
    }
  ]
};
