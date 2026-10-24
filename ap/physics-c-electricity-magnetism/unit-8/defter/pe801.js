/* Kitpath not defteri · pe801 · 8.1–8.2 Elektrik Yükü ve Coulomb Kuvveti
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe801",
  amac: "Bu konu elektrik yükünü ve yüklü cisimler arasındaki kuvveti anlatıyor: yükün korunumu, yüklemenin yolları, Coulomb yasası ve kuvvetlerin vektör olarak toplanması. Nötr cisimlerin neden çekildiğini ve elektrik kuvvetinin kütleçekimden ne kadar büyük olduğunu da göreceksin.",
  bolumler: [
    {
      baslik: "Yük ve yükün korunumu",
      kisa: "Yük e'nin katlarıdır ve korunur: net yük ancak yük aktarımıyla değişir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚡",
              terim: "Electric charge",
              tr: "elektrik yükü",
              tanim: "Maddenin temel özelliği; skalerdir, + ya da − olur. Elektron −e, proton +e, nötron 0'dır.",
              ornek: "Balonu yünle ovunca balon fazladan elektron kazanır."
            },
            {
              ikon: "🧱",
              terim: "Elementary charge",
              tr: "temel yük",
              tanim: "Bölünemez en küçük yük: e = 1,60×10⁻¹⁹ C. Her yük e'nin tam katıdır.",
              ornek: "+2e olabilir, +1,5e olamaz."
            },
            {
              ikon: "📍",
              terim: "Point charge",
              tr: "nokta yük",
              tanim: "Boyutu ihmal edilen, yükü +q olan nesne modeli. Yük bir özelliktir; \"yükü +q olan nesne\" demek tercih edilir.",
              ornek: "Uzaktan bakınca küçük yüklü bir top."
            },
            {
              ikon: "🔒",
              terim: "Conservation of charge",
              tr: "yükün korunumu",
              tanim: "Net yük ancak çevreyle yük aktarımıyla değişir; aktarım yoksa sabittir. Aktarılan şey genelde elektrondur.",
              ornek: "Sürtünmede bir cisim elektron kaybederse öteki kazanır."
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Balon −3,2 nC yük kazandı",
          durum: "Yün kazakla ovulan balonda kaç elektron fazla? Kazağın yükü ne olur?",
          adimlar: [
            "q = −3,2 nC = −3,2×10⁻⁹ C.",
            "N = |q| / e = 3,2×10⁻⁹ / 1,60×10⁻¹⁹ = 2,0×10¹⁰ elektron.",
            "Balon + kazak yalıtılmış bir sistem: başta net yük 0, sonda da 0. Kazak +3,2 nC olur."
          ],
          sonuc: "2,0×10¹⁰ elektron kazaktan balona geçti; kazak +3,2 nC kaldı"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*Charge is conserved: the electrons gained by the balloon were lost by the sweater, so the net charge of the system is unchanged.*"
            },
            {
              ikon: "✍️",
              baslik: "Nicemleme",
              metin: "*The charge on an object is an integer multiple of the elementary charge e.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Yükleme yolları",
      kisa: "Sürtünme ve temas yük aktarır; polarizasyon yalnız yeniden dağıtır.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "İndüksiyonla yükleme (nötr iletken küre, negatif çubuk)",
          adimlar: [
            {
              baslik: "Yaklaştır",
              metin: "Negatif çubuğu küreye dokundurmadan yaklaştır. Serbest elektronlar çubuktan uzaklaşır: yakın yüz +, uzak yüz −. Net yük hâlâ 0."
            },
            {
              baslik: "Topraklama",
              metin: "Kürenin uzak yüzünü Dünya'ya bağla (*grounding*). Elektronlar Dünya'ya akar; küre artık net +."
            },
            { baslik: "Bağlantıyı kes", metin: "Önce topraklamayı kaldır; çubuk hâlâ yerinde." },
            {
              baslik: "Çubuğu çek",
              metin: "Kürenin + yükü yüzeyine yayılır. Sonuç: çubuğun işaretinin zıttı olan net yük."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔄",
            baslik: "Yük aktarımı (net yük değişir)",
            maddeler: [
              "Elektron bir cisimden ötekine geçer",
              "Net yük değişir",
              "Sürtünme, temas, topraklama"
            ]
          },
          sag: {
            ikon: "↔️",
            baslik: "Yalnız yeniden dağılım (*polarization*)",
            maddeler: ["Yük cismin içinde kayar", "Net yük aynı kalır", "Çubuk çekilince geri döner"]
          },
          oyun: [
            {
              metin: "Plastik tarak saça sürtüldü; tarak negatif oldu.",
              cevap: "sol",
              neden: "Elektronlar saçtan taraga geçti; net yük değişti."
            },
            {
              metin: "Yüklü çubuk nötr kürenin yanına getirildi; kürenin yakın yüzü zıt işaretli oldu.",
              cevap: "sag",
              neden: "Elektronlar küre içinde kaydı; net yük 0 kaldı."
            },
            {
              metin: "Küre telle Dünya'ya bağlandı ve elektronlar Dünya'ya aktı.",
              cevap: "sol",
              neden: "Dışarıyla yük alışverişi var: net yük değişir."
            },
            {
              metin: "Yüklü çubuğa yaklaşan nötr su akışı çubuğa doğru büküldü.",
              cevap: "sag",
              neden: "Su polarize oldu; yakın taraf zıt yüklü olduğu için çekim itmeden büyük."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Polarizasyon net yük kazandırmaz",
          metin: "Nötr bir cisim yüklü çubuğa çekilir: yakın taraf zıt işaretli olur ve çekim itmeden büyüktür. Cismin net yükü yine sıfırdır; onu yüklemek için yük aktarımı gerekir.",
          yanlis: "Nötr cismi yüklü çubuk çekmez, çünkü cisim yüksüzdür.",
          dogru: "Çekilir. Sınavda böyle yaz: *The rod polarizes the neutral object; the nearer side acquires charge of opposite sign, so the attractive force is larger than the repulsive force.*"
        }
      ]
    },
    {
      baslik: "Coulomb yasası",
      kisa: "Kuvvet yüklerin çarpımıyla doğru, uzaklığın karesiyle ters orantılıdır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "|F_E| = k|q₁q₂|/r²", alt: "büyüklük" },
            "ve",
            { t: "k = 1/(4πε₀) = 9,0×10⁹ N·m²/C²", alt: "Coulomb sabiti" }
          ],
          aciklama: "Aynı işaret iter, zıt işaret çeker. Formül yalnız büyüklüğü verir; yönü yükleri birleştiren doğru boyunca sen belirlersin. İki yük birbirine eşit büyüklükte, zıt yönde kuvvet uygular."
        },
        {
          tip: "grafik",
          baslik: "q₁ = 2,0 μC ve q₂ = 3,0 μC için F(r)",
          xlabel: "r (cm)",
          ylabel: "F (N)",
          xmax: 6,
          ymax: 6,
          xticks: [
            { v: 1, label: "10" },
            { v: 2, label: "20" },
            { v: 3, label: "30" },
            { v: 4, label: "40" },
            { v: 5, label: "50" },
            { v: 6, label: "60" }
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
              id: "c1",
              tip: "egri",
              noktalar: [
                [1, 5.4], [1.25, 3.456], [1.5, 2.4], [1.75, 1.763], [2, 1.35], [2.25, 1.067],
                [2.5, 0.864], [2.75, 0.714], [3, 0.6], [3.25, 0.511], [3.5, 0.441], [3.75, 0.384],
                [4, 0.337], [4.25, 0.299], [4.5, 0.267], [4.75, 0.239], [5, 0.216], [5.25, 0.196],
                [5.5, 0.179], [5.75, 0.163], [6, 0.15]
              ],
              renk: 0,
              etiket: "q₁q₂",
              gizli: true
            },
            { id: "p1", tip: "nokta", x: 1, y: 5.4, renk: 1, etiket: "10 cm: 5,4 N", gizli: true },
            { id: "p2", tip: "nokta", x: 2, y: 1.35, renk: 1, etiket: "20 cm: 1,35 N", gizli: true },
            {
              id: "p4",
              tip: "nokta",
              x: 4,
              y: 0.3375,
              renk: 1,
              etiket: "40 cm: 0,34 N",
              gizli: true
            },
            {
              id: "c2",
              tip: "egri",
              noktalar: [
                [1.5, 4.8], [1.75, 3.527], [2, 2.7], [2.25, 2.133], [2.5, 1.728], [2.75, 1.428],
                [3, 1.2], [3.25, 1.022], [3.5, 0.882], [3.75, 0.768], [4, 0.675], [4.25, 0.598],
                [4.5, 0.533], [4.75, 0.479], [5, 0.432], [5.25, 0.392], [5.5, 0.357], [5.75, 0.327],
                [6, 0.3]
              ],
              renk: 2,
              kesik: true,
              etiket: "yük ×2",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "Yükler sabit, aralarındaki uzaklığı artırıyoruz." },
            { metin: "Uzaklık arttıkça kuvvet hızla düşüyor: ==F ∝ 1/r²==.", goster: ["c1"] },
            { metin: "r = 10 cm: F = k q₁q₂/r² = 5,4 N.", goster: ["p1"] },
            {
              metin: "r iki katına çıkınca (20 cm) kuvvet dörtte bire iner: 1,35 N.",
              goster: ["p2"]
            },
            { metin: "r dört katına çıkınca (40 cm) 16'da bire iner: 0,34 N.", goster: ["p4"] },
            {
              metin: "Yüklerden biri iki katına çıkarsa kuvvet iki katı olur (kesikli eğri): F ∝ |q₁q₂|.",
              goster: ["c2"]
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The force on q₂ is equal in magnitude and opposite in direction to the force on q₁, by Newton's third law.*"
            },
            { ikon: "✍️", baslik: "Yön", metin: "*Like charges repel and unlike charges attract.*" }
          ]
        }
      ]
    },
    {
      baslik: "Birden çok yük: vektörel toplam",
      kisa: "Her yükün kuvveti ayrı bulunur, sonra vektör olarak toplanır (en çok 4 yük).",
      bloklar: [
        {
          tip: "grafik",
          baslik: "q₁'e etkiyen net kuvvet (ok boyları kuvvetle orantılı)",
          xlabel: "x (m)",
          ylabel: "y (m)",
          xmax: 10,
          ymax: 7,
          xticks: [
            { v: 5, label: "0" },
            { v: 8, label: "0,3" }
          ],
          yticks: [
            { v: 1, label: "0" },
            { v: 5, label: "0,4" }
          ],
          ogeler: [
            { id: "q1", tip: "nokta", x: 5, y: 1, renk: 0 },
            { id: "q2", tip: "nokta", x: 8, y: 1, renk: 1 },
            { id: "q3", tip: "nokta", x: 5, y: 5, renk: 2 },
            { id: "t1", tip: "yazi", x: 5, y: 0.35, metin: "q₁ = +2 μC" },
            { id: "t2", tip: "yazi", x: 8, y: 0.35, metin: "q₂ = +3 μC" },
            { id: "t3", tip: "yazi", x: 5, y: 5.6, metin: "q₃ = −4 μC" },
            { id: "a12", tip: "ok", from: [5, 1], to: [2, 1], renk: 1, gizli: true },
            { id: "l12", tip: "yazi", x: 3.5, y: 1.5, metin: "F₁₂ = 0,60 N", gizli: true },
            { id: "a13", tip: "ok", from: [5, 1], to: [5, 3.25], renk: 2, gizli: true },
            {
              id: "l13",
              tip: "yazi",
              x: 5.2,
              y: 2.4,
              metin: "F₁₃ = 0,45 N",
              hiza: "start",
              gizli: true
            },
            {
              id: "pj1",
              tip: "cizgi",
              from: [2, 1],
              to: [2, 3.25],
              kesik: true,
              renk: 3,
              gizli: true
            },
            {
              id: "pj2",
              tip: "cizgi",
              from: [5, 3.25],
              to: [2, 3.25],
              kesik: true,
              renk: 3,
              gizli: true
            },
            { id: "an", tip: "ok", from: [5, 1], to: [2, 3.25], renk: 0, gizli: true },
            {
              id: "ln",
              tip: "yazi",
              x: 2.2,
              y: 4,
              metin: "F_net = 0,75 N",
              hiza: "start",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "q₁ = +2,0 μC orijinde, q₂ = +3,0 μC sağda 0,30 m, q₃ = −4,0 μC yukarıda 0,40 m. q₁'e etkiyen net kuvvet?"
            },
            { metin: "q₂ iter: q₁'i −x yönünde. F₁₂ = k q₁q₂/r² = 0,60 N.", goster: ["a12", "l12"] },
            { metin: "q₃ çeker: q₁'i +y yönünde. F₁₃ = 0,45 N.", goster: ["a13", "l13"] },
            {
              metin: "Büyüklükleri toplama! Bileşenleri topla: F_x = −0,60 N, F_y = +0,45 N.",
              goster: ["pj1", "pj2"]
            },
            {
              metin: "|F| = √(0,60² + 0,45²) = 0,75 N; −x ekseninden yaklaşık 37° yukarıda.",
              goster: ["an", "ln"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Aynı düzen, sayılarla",
          durum: "q₁ = +2,0 μC; q₂ = +3,0 μC (0,30 m sağda); q₃ = −4,0 μC (0,40 m yukarıda). q₁'e etkiyen net kuvveti bul.",
          adimlar: [
            "F₁₂ = (9,0×10⁹)(2,0×10⁻⁶)(3,0×10⁻⁶) / 0,30² = 0,60 N; q₂ pozitif, q₁'i iter: −x.",
            "F₁₃ = (9,0×10⁹)(2,0×10⁻⁶)(4,0×10⁻⁶) / 0,40² = 0,45 N; q₃ negatif, q₁'i çeker: +y.",
            "Bileşenler: F_x = −0,60 N, F_y = +0,45 N.",
            "|F| = √(0,60² + 0,45²) = 0,75 N; tan θ = 0,45/0,60 → θ ≈ 37° (−x ekseninden yukarı, yani +x'ten 143°)."
          ],
          sonuc: "F_net = 0,75 N, −x yönünden yaklaşık 37° yukarıda"
        },
        {
          tip: "tuzak",
          baslik: "Büyüklükleri toplamak ve işareti formüle koymak",
          metin: "Formül tablosundaki Coulomb yasası mutlak değerlidir: yalnız büyüklük verir, yönü işaretten ve geometriden sen bulursun. Birden çok yükte büyüklükleri cebirsel toplamak yanlıştır.",
          yanlis: "F_net = 0,60 + 0,45 = 1,05 N.",
          dogru: "Bileşenleri ayrı topla: 0,75 N. Sınavda böyle yaz: *The net force is the vector sum of the forces exerted by the other charges.*"
        }
      ]
    },
    {
      baslik: "Elektrik kuvveti, kütleçekim ve ortam",
      kisa: "Elektrik kuvveti çok daha güçlüdür ama zıt yükler dengelendiği için günlük hayatta görünmez.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧪",
              terim: "Electric permittivity",
              tr: "elektrik geçirgenliği",
              tanim: "Ortamın elektrik alanda ne kadar polarize olduğunun ölçüsü. Boşlukta sabittir: ε₀ = 8,85×10⁻¹² C²/(N·m²).",
              ornek: "İletkenlerde yük taşıyıcılar kolay, yalıtkanlarda zor hareket eder."
            },
            {
              ikon: "🔀",
              terim: "Polarization",
              tr: "polarizasyon",
              tanim: "Dış alan altında ortamdaki yüklerin hafifçe yer değiştirmesi (yük ayrışması).",
              ornek: "Yüklü çubuğa yaklaşan su akışı."
            },
            {
              ikon: "🧱",
              terim: "Contact forces",
              tr: "temas kuvvetleri",
              tanim: "Normal kuvvet, sürtünme ve gerilme aslında atomlar arası elektrik kuvvetlerinin toplamıdır; çok sayıda yük olduğu için ayrı modellenir.",
              ornek: "Masanın bardağı taşıması."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Elektrik kuvveti ile kütleçekim",
          head: ["Özellik", "Elektrik", "Kütleçekim"],
          rows: [
            ["Kaynak", "yük q", "kütle m"],
            ["Yön", "çekici ya da itici", "hep çekici"],
            ["Formül", "k|q₁q₂|/r²", "G m₁m₂/r²"],
            ["İki proton, aynı r", "≈ 1,2×10³⁶ kat daha büyük", "1 (karşılaştırma)"],
            ["Büyük ölçekte", "nötr cisimlerde birbirini götürür", "baskın"]
          ],
          vurgu: 3,
          not: "Sınavda böyle yaz: *Gravity dominates at large scales because large objects are nearly neutral, so the electric forces cancel.*"
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
            "*Electric charge* skalerdir, e = 1,60×10⁻¹⁹ C'ın tam katıdır; elektron −e, proton +e.",
            "*Conservation of charge*: net yük ancak yük aktarımıyla değişir (genelde elektron).",
            "Sürtünme ve temas yük aktarır; indüksiyon + topraklama, çubuğun zıttı işaretli yük bırakır.",
            "Polarizasyon net yükü değiştirmez; nötr cisim çekilir çünkü yakın taraf zıt işaretli.",
            "Coulomb: |F| = k|q₁q₂|/r²; r 2 kat → F 1/4, bir yük 2 kat → F 2 kat.",
            "Aynı işaret iter, zıt işaret çeker; iki yük birbirine eşit ve zıt kuvvet uygular.",
            "Birden çok yükte kuvvetler vektör olarak toplanır (örnek: 0,60 N ve 0,45 N → 0,75 N).",
            "Elektrik kuvveti kütleçekimden çok büyüktür (iki proton: ≈ 10³⁶ kat), ama büyük ölçekte nötr cisimlerde dengelenir."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Two point charges, +Q and +4Q, are a distance r apart. The magnitude of the electric force exerted on the +4Q charge by the +Q charge is F. What is the magnitude of the force exerted on the +Q charge by the +4Q charge?",
      opts: ["F", "4F", "F/4", "16F"],
      a: 0,
      why: "Newton'un üçüncü yasası: iki yük birbirine eşit büyüklükte, zıt yönde kuvvet uygular; yüklerin büyüklükleri farklı olsa da. 4F ve F/4 yükü büyük olanın daha çok kuvvet uyguladığı yanılgısı."
    },
    {
      q: "A neutral metal sphere on an insulating stand is brought near, but not touching, a negatively charged rod. The sphere is briefly connected to the ground by a wire, the wire is removed, and then the rod is taken away. What is the final charge of the sphere?",
      opts: ["Neutral", "Positive", "Negative", "It cannot be determined without more information"],
      a: 1,
      why: "Çubuk yaklaşınca elektronlar küreden uzaklaşır; topraklamada küreden Dünya'ya elektron akar. Topraklama kesilince küre net pozitif kalır ve çubuk çekilince yük yüzeyine yayılır. Topraklamasız bir yaklaştırma net yük bırakmazdı."
    },
    {
      q: "Three point charges lie on the x-axis at the positions shown in the table. What is the net electric force on q₂?",
      opts: [
        "0.23 N in the −x direction",
        "0.23 N in the +x direction",
        "1.1 N in the +x direction",
        "1.1 N in the −x direction"
      ],
      a: 2,
      why: "q₁ (+) q₂'yi iter: +x yönünde, 9,0×10⁹·2,0×10⁻⁶·1,0×10⁻⁶ / 0,20² = 0,45 N. q₃ (−) q₂'yi çeker: yine +x yönünde, 9,0×10⁹·3,0×10⁻⁶·1,0×10⁻⁶ / 0,20² = 0,675 N. İkisi aynı yönde: 1,125 ≈ 1,1 N. 0,23 N farkı alma hatası (0,675 − 0,45).",
      fig: {
        type: "table",
        head: ["Charge", "Position x (m)", "Value (μC)"],
        rows: [
          ["q₁", "0", "+2.0"],
          ["q₂", "0.20", "+1.0"],
          ["q₃", "0.40", "−3.0"]
        ],
        caption: "Three charges on the x-axis"
      }
    },
    {
      q: "For two protons separated by any distance r, how does the magnitude of the electrostatic force compare with the magnitude of the gravitational force between them?",
      opts: [
        "The electrostatic force is about 10³⁶ times larger only at very small r",
        "The two forces are about equal in size",
        "The gravitational force is about 10³⁶ times larger",
        "The electrostatic force is about 10³⁶ times larger, for every r"
      ],
      a: 3,
      why: "İkisi de 1/r² ile değiştiği için oran r'den bağımsızdır: ke²/(G·m_p²) = (9,0×10⁹ · (1,60×10⁻¹⁹)²) / (6,67×10⁻¹¹ · (1,67×10⁻²⁷)²) ≈ 1,2×10³⁶. Dolayısıyla sadece çok küçük r'de büyük değildir; her mesafede büyüktür."
    },
    {
      q: "A neutral insulating ball is attracted toward a positively charged rod, even though the ball has no net charge. Which of the following best explains the attraction?",
      opts: [
        "The charges in the ball are displaced so that the side nearer the rod is negative, and the attractive force on it is larger than the repulsive force on the far side",
        "The ball acquires a net negative charge by taking electrons from the air",
        "Neutral objects always experience an attractive force from any charged object because of gravity",
        "Protons in the ball move toward the rod, leaving it with a net positive charge"
      ],
      a: 0,
      why: "Polarizasyon: çubuk yakın yüzde zıt işaretli, uzak yüzde aynı işaretli yük oluşturur. Yakın yük daha yakın olduğu için çekim itmeden büyüktür; net yük hâlâ sıfırdır. Katılarda protonlar hareket etmez; yerçekimi ise burada çok küçüktür."
    }
  ]
};
