/* Kitpath not defteri · pc208 · 2.10 Dairesel Hareket
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.10; LO 2.10.A–B). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc208",
  amac: "Bu konu dairesel hareketi anlatıyor: merkezcil ve teğetsel ivme, merkeze doğru net kuvveti hangi kuvvetlerin sağladığı, viraj ve düşey ilmek problemleri, dairesel yörüngedeki uydular ve Kepler'in üçüncü yasası.",
  bolumler: [
    {
      baslik: "Merkezcil ivme",
      kisa: "Dairesel harekette ivmenin merkeze bileşeni v²/r; düzgün harekette ivme sıfır değildir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Çember üzerinde hız (teğet) ve ivme (merkeze)",
          xlabel: "x",
          ylabel: "y",
          xmax: 10,
          ymax: 6.9,
          xticks: [],
          yticks: [],
          ogeler: [
            {
              id: "ring",
              tip: "egri",
              noktalar: [[7.5, 3.45], [7.415, 4.097], [7.165, 4.7], [6.768, 5.218], [6.25, 5.615], [5.647, 5.865], [5, 5.95], [4.353, 5.865], [3.75, 5.615], [3.232, 5.218], [2.835, 4.7], [2.585, 4.097], [2.5, 3.45], [2.585, 2.803], [2.835, 2.2], [3.232, 1.682], [3.75, 1.285], [4.353, 1.035], [5, 0.95], [5.647, 1.035], [6.25, 1.285], [6.768, 1.682], [7.165, 2.2], [7.415, 2.803], [7.5, 3.45]],
              renk: 1
            },
            { id: "o", tip: "nokta", x: 5, y: 3.45, renk: 1 },
            { id: "b0", tip: "nokta", x: 7.5, y: 3.45, renk: 0 },
            { id: "v0", tip: "ok", from: [7.5, 3.45], to: [7.5, 4.6], renk: 3, gizli: true },
            { id: "v0t", tip: "yazi", x: 7.85, y: 4.4, metin: "v", gizli: true },
            { id: "a0", tip: "ok", from: [7.5, 3.45], to: [6.35, 3.45], renk: 2, gizli: true },
            { id: "a0t", tip: "yazi", x: 6.9, y: 3.0, metin: "a_c", gizli: true },
            { id: "b1", tip: "nokta", x: 5, y: 5.95, renk: 0, gizli: true },
            { id: "v1", tip: "ok", from: [5, 5.95], to: [3.85, 5.95], renk: 3, gizli: true },
            { id: "v1t", tip: "yazi", x: 4.3, y: 6.4, metin: "v", gizli: true },
            { id: "a1", tip: "ok", from: [5, 5.95], to: [5, 4.8], renk: 2, gizli: true },
            { id: "a1t", tip: "yazi", x: 5.5, y: 5.2, metin: "a_c", gizli: true },
            { id: "b2", tip: "nokta", x: 2.5, y: 3.45, renk: 0, gizli: true },
            { id: "v2", tip: "ok", from: [2.5, 3.45], to: [2.5, 2.3], renk: 3, gizli: true },
            { id: "v2t", tip: "yazi", x: 2.1, y: 2.5, metin: "v", gizli: true },
            { id: "a2", tip: "ok", from: [2.5, 3.45], to: [3.65, 3.45], renk: 2, gizli: true },
            { id: "a2t", tip: "yazi", x: 3.1, y: 3.8, metin: "a_c", gizli: true },
            { id: "b3", tip: "nokta", x: 5, y: 0.95, renk: 0, gizli: true },
            { id: "v3", tip: "ok", from: [5, 0.95], to: [6.15, 0.95], renk: 3, gizli: true },
            { id: "v3t", tip: "yazi", x: 5.7, y: 0.5, metin: "v", gizli: true },
            { id: "a3", tip: "ok", from: [5, 0.95], to: [5, 2.1], renk: 2, gizli: true },
            { id: "a3t", tip: "yazi", x: 4.5, y: 1.7, metin: "a_c", gizli: true },
            { id: "at", tip: "ok", from: [5, 5.95], to: [4.1, 5.95], renk: 3, gizli: true },
            { id: "att", tip: "yazi", x: 4.3, y: 6.4, metin: "a_t", gizli: true },
            { id: "an", tip: "ok", from: [5, 5.95], to: [4.1, 4.8], renk: 0, gizli: true },
            { id: "ant", tip: "yazi", x: 3.5, y: 4.6, metin: "a (net)", gizli: true }
          ],
          durumlar: [
            { metin: "Düzgün dairesel hareket: sürat sabit, ama hız vektörünün yönü sürekli değişiyor. Hız değişiyorsa ivme vardır." },
            { metin: "Sağdaki konumda hız yukarı (yola teğet), ivme sola yani merkeze doğru: a_c = v²/r.", goster: ["v0", "v0t", "a0", "a0t"] },
            { metin: "Tepede hız sola, ivme aşağı. İvme hep merkeze bakar ve hıza diktir.", goster: ["b1", "v1", "v1t", "a1", "a1t"] },
            {
              metin: "Dört konum: sürat aynı, ivme her an var. Düzgün dairesel harekette ivme sıfır değildir.",
              goster: ["b2", "v2", "v2t", "a2", "a2t", "b3", "v3", "v3t", "a3", "a3t"]
            },
            {
              metin: "Sürat de değişirse yola teğet bir bileşen eklenir: a_t = dv/dt. Net ivme a_c ve a_t'nin vektör toplamıdır.",
              gizle: ["v0", "v0t", "a0", "a0t", "b2", "v2", "v2t", "a2", "a2t", "b3", "v3", "v3t", "a3", "a3t", "v1", "v1t"],
              goster: ["at", "att", "an", "ant"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎯",
              terim: "Centripetal acceleration",
              tr: "merkezcil ivme",
              tanim: "İvmenin merkeze doğru bileşeni; büyüklüğü v²/r. Hızın yönünü değiştirir, büyüklüğünü değil.",
              ornek: "v = 6 m/s ve r = 3 m olan oyuncak trende a_c = 36/3 = 12 m/s²."
            },
            {
              ikon: "➡️",
              terim: "Tangential acceleration",
              tr: "teğetsel ivme",
              tanim: "İvmenin yola teğet bileşeni, a_t = dv/dt. Sürati değiştirir. Net ivme iki bileşenin vektör toplamıdır.",
              ornek: "Hızlanarak dönen arabada a_c = 3 ve a_t = 4 m/s² ise a = 5 m/s²."
            },
            {
              ikon: "⏱️",
              terim: "Period and frequency",
              tr: "periyot ve frekans",
              tanim: "Bir turun süresi T ve saniyedeki tur sayısı f: T = 1/f. Düzgün harekette v = 2πr/T ve ω = 2π/T.",
              ornek: "v = 6 m/s, r = 3 m: T = 2π·3/6 = π s, ω = 2 rad/s."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "a_c" },
            "=",
            { t: "v²/r", alt: "hız cinsinden" },
            "=",
            { t: "ω² r", alt: "açısal hız cinsinden" }
          ],
          aciklama: "T = 1/f ve v = 2πr/T. Net ivme: a = √(a_c² + a_t²). Merkezcil ivme hep merkeze doğrudur."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The speed is constant but the direction of the velocity changes, so the acceleration is nonzero and points toward the center: a_c = v²/r.*"
        }
      ]
    },
    {
      baslik: "Merkezcil kuvvet diye ayrı kuvvet yoktur",
      kisa: "Merkeze doğru net kuvvet, mevcut kuvvetlerin merkezdeki bileşenlerinin toplamıdır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Merkezcil ivmeyi hangi kuvvet sağlar?",
          head: ["Durum", "Merkeze doğru olan kuvvet(ler)", "Not"],
          rows: [
            ["Düz yolda viraj alan araba", "Statik sürtünme", "μ_s N sınırı aşılırsa kayar"],
            ["İpe bağlı, yatay dönen top", "Gerilme", "İp merkeze çeker"],
            ["İlmeğin tepesi, asgari hız", "Yalnız ağırlık", "N = 0, v = √(gr)"],
            ["İlmeğin tepesi, daha hızlı", "Ağırlık + normal kuvvet", "İkisi de aşağı, merkeze doğru"],
            ["Eğimli viraj", "Normal kuvvet ve sürtünmenin merkezdeki bileşenleri", "İkisinin bileşenleri toplanır"],
            ["Konik sarkaç", "Gerilmenin yatay bileşeni", "T sin θ = mv²/r"],
            ["Dairesel yörüngede uydu", "Kütleçekimi", "GMm/r² = mv²/r"]
          ],
          vurgu: 2,
          not: "Bu satırların hiçbirinde ayrı bir 'merkezcil kuvvet' oku yok."
        },
        {
          tip: "ikili",
          sol: {
            ikon: "✅",
            baslik: "FBD'ye girer",
            maddeler: ["Bir nesnenin uyguladığı kuvvet", "Gerilme, ağırlık, normal, sürtünme"]
          },
          sag: {
            ikon: "🚫",
            baslik: "FBD'ye girmez",
            maddeler: ["Sonuç ya da hayalî kuvvet", "Centripetal ve centrifugal"]
          },
          oyun: [
            { metin: "İpin topu merkeze çekmesi (gerilme).", cevap: "sol", neden: "İp bir nesne ve topa kuvvet uyguluyor." },
            { metin: "FBD'de ayrı bir 'merkezcil kuvvet' oku.", cevap: "sag", neden: "Merkezcil kuvvet, mevcut kuvvetlerin merkez yönündeki toplamıdır; yeni bir etkileşim değil." },
            { metin: "Seni virajda dışa savuran 'centrifugal force'.", cevap: "sag", neden: "Hiçbir nesne uygulamıyor; hissettiğin şey eylemsizliğindir." },
            { metin: "Yolun virajdaki arabaya uyguladığı yanal sürtünme.", cevap: "sol", neden: "Yol arabaya statik sürtünme uyguluyor; merkeze doğru olan budur." },
            { metin: "Dönen disk üzerindeki sandığa yüzeyin normal kuvveti.", cevap: "sol", neden: "Temas kuvveti, gerçek bir etkileşim." }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The net force toward the center provides the centripetal acceleration: ΣF_c = mv²/r. I do not draw a separate centripetal force on the free-body diagram.*"
        }
      ]
    },
    {
      baslik: "Viraj ve düşey ilmek: çözümlü",
      kisa: "Viraj: v_max = √(μ_s g r); ilmek tepesi: v_min = √(gr).",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Düz virajda araba: μ_s = 0,5 ve r = 19,6 m (g = 9,8 m/s²)",
          durum: "Araba virajı kaymadan en fazla hangi hızla alabilir? Hız iki katına çıkarsa ne olur?",
          adimlar: [
            "FBD: ağırlık aşağı, normal kuvvet yukarı (dikeyde ivme yok: N = mg), statik sürtünme merkeze doğru.",
            "Radyal yönde: f_s = mv²/r. Sürtünme en fazla μ_s N = μ_s mg olabilir.",
            "Eşikte μ_s mg = mv²/r ve kütle sadeleşir: v_max = √(μ_s g r).",
            "v_max = √(0,5×9,8×19,6) = √96,04 = 9,8 m/s (yaklaşık 35 km/h). Hafif ya da ağır araç aynı sınıra sahip.",
            "Hız iki katına çıkarsa gereken sürtünme mv²/r 4 katına çıkar; sınır μ_s mg sabit kaldığı için araba kayar."
          ],
          sonuc: "v_max = 9,8 m/s (kütleden bağımsız); hız iki katına çıkınca gereken sürtünme 4 katına çıkar"
        },
        {
          tip: "tuzak",
          baslik: "İlmeğin tepesinde normal kuvveti yukarı sanmak",
          metin: "İlmeğin içindeki araçta merkez tepede aşağıdadır. Normal kuvvet (pistin arabayı itmesi) ağırlıkla aynı yöne, aşağı bakar. Asgari hızda N = 0 olur ve yalnız ağırlık merkezcil ivmeyi sağlar.",
          yanlis: "Tepede normal kuvvet yukarıdır ve ağırlığı dengeler.",
          dogru: "Tepede mg + N = mv²/r (ikisi de aşağı). Asgari hızda N = 0 ve v = √(gr)."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *At the minimum speed the normal force is zero, so gravity alone provides the centripetal acceleration: mg = mv²/r, giving v = √(gr).* Aracın aşağı bastıran bir kuvveti (F = bv²) varsa N = mg + bv²; hız iki katına çıkınca gereken sürtünme 4 katına çıkar, sağlanabilecek en büyük sürtünme ise 4 kattan az artar."
        }
      ]
    },
    {
      baslik: "Uydular ve Kepler'in 3. yasası",
      kisa: "Çekim merkezcil kuvvettir: T² = 4π²R³/(GM); R 4 katına çıkarsa T 8 katına çıkar.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Dairesel yörünge: T² ile R³ arasındaki bağ",
          adimlar: [
            { baslik: "1. Çekim = merkezcil", metin: "GMm/R² = mv²/R ⇒ v = √(GM/R). Uydunun m kütlesi sadeleşir." },
            { baslik: "2. Periyodu bağla", metin: "Bir tur 2πR yoldur: T = 2πR/v." },
            { baslik: "3. Birleştir", metin: "T² = 4π²R²/v² = 4π²R³/(GM)." },
            { baslik: "4. Yorumla", metin: "T² ∝ R³; yörünge yalnız merkezdeki cismin kütlesi M'ye ve R'ye bağlıdır, uydunun kütlesine değil." }
          ]
        },
        {
          tip: "ornek",
          baslik: "Aynı gezegenin iki uydusu",
          durum: "A uydusu r yarıçaplı yörüngede T_A = 3 saatlik dönemle dönüyor. B uydusu 4r yarıçaplı yörüngede. B'nin dönemini, hızını ve merkezcil ivmesini A ile karşılaştır.",
          adimlar: [
            "T² ∝ R³ ⇒ T_B/T_A = (R_B/R_A)^(3/2) = 4^(3/2) = 8.",
            "T_B = 8×3 = 24 saat.",
            "v = √(GM/R) ⇒ v_B/v_A = √(1/4) = 1/2.",
            "a_c = GM/R² ⇒ a_B/a_A = 1/16.",
            "Uzaktaki uydu daha yavaş, daha seyrek ve çok daha az ivmeli."
          ],
          sonuc: "T_B = 24 saat; v_B = v_A/2; a_B = a_A/16"
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Gravity alone supplies the centripetal acceleration: GMm/R² = mv²/R, so T² = 4π²R³/(GM) and the satellite's mass cancels.* Kepler'in 1. ve 2. yasaları beklenmez."
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
            "Merkezcil ivme a_c = v²/r = ω²r, hep merkeze doğrudur; düzgün dairesel harekette sürat sabit ama ivme sıfır değildir.",
            "Teğetsel ivme a_t = dv/dt sürati değiştirir; net ivme a_c ve a_t'nin vektör toplamıdır, büyüklüğü √(a_c² + a_t²).",
            "T = 1/f ve v = 2πr/T; v = 6 m/s, r = 3 m için a_c = 12 m/s², ω = 2 rad/s, T = π s.",
            "'Merkezcil kuvvet' ayrı bir kuvvet değildir: merkeze doğru net kuvvet gerilme, sürtünme, normal ve ağırlığın merkezdeki bileşenlerinin toplamıdır; FBD'ye *centripetal* ve *centrifugal* çizme.",
            "Düz virajda μ_s mg = mv²/r ⇒ v_max = √(μ_s g r); μ_s = 0,5, r = 19,6 m için 9,8 m/s; kütle sadeleşir.",
            "İlmeğin tepesinde mg + N = mv²/r (ikisi de aşağı); asgari hızda N = 0, v = √(gr).",
            "Uydu: GMm/R² = mv²/R ⇒ v = √(GM/R) ve T² = 4π²R³/(GM); R 4 katına çıkınca T 8 katına, v yarıya, a_c 1/16'ya iner.",
            "Kepler'in yalnız 3. yasası beklenir; uydunun kütlesi yörüngeyi etkilemez."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A car travels at a constant speed of 10 m/s around a circular track of radius 20 m. The magnitude of the car's acceleration is",
      opts: ["0.5 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
      a: 1,
      why: "a_c = v²/r = 100/20 = 5 m/s². Sürat sabit olsa da yön değiştiği için ivme vardır; 0,5 m/s² oranı ters (r/v²) almaktır."
    },
    {
      q: "A small cart travels on the inside of a vertical circular loop of radius 2.5 m. Use g = 10 m/s². What is the minimum speed the cart must have at the top of the loop to stay in contact with the track?",
      opts: ["5 m/s", "2.5 m/s", "6.25 m/s", "25 m/s"],
      a: 0,
      why: "Temas kaybolurken N = 0 ve yalnız ağırlık merkezcil ivmeyi sağlar: mg = mv²/r ⇒ v = √(gr) = √25 = 5 m/s. 6,25 m/s gr'yi ikinci kez çarpmaktan, 2,5 m/s r'yi doğrudan hız sanmaktan gelir."
    },
    {
      q: "Satellite 1 orbits a planet in a circular orbit of radius r with a period of 2 hours. Satellite 2 orbits the same planet in a circular orbit of radius 4r. The period of satellite 2 is",
      opts: ["4 hours", "8 hours", "16 hours", "32 hours"],
      a: 2,
      why: "T² ∝ R³: T₂/T₁ = 4^(3/2) = 8, yani 2×8 = 16 saat. 8 saat yalnız yarıçap oranının karekökünü (2×4) alarak, 32 saat ise orantıyı T ∝ R² sanarak çıkar."
    },
    {
      q: "A disk rotates with constant angular speed ω. A small block moves around with the disk at different radii r. The graph shows the block's centripetal acceleration a_c versus r. What is the period of the disk's rotation?",
      fig: {
        type: "graph",
        xlabel: "r (m)",
        ylabel: "a_c (m/s²)",
        xmax: 2.5,
        ymax: 9,
        lines: [{ from: [0, 0], to: [2, 8], color: 0 }],
        xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }],
        yticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }],
        caption: "Centripetal acceleration versus radius"
      },
      opts: ["π/4 s", "π/2 s", "2π s", "π s"],
      a: 3,
      why: "a_c = ω²r, grafiğin eğimi ω² = 8/2 = 4 s⁻² ⇒ ω = 2 rad/s. T = 2π/ω = π s. π/2 s eğimi (4) doğrudan ω almaktan, π/4 s ise grafikteki en büyük değeri (8) ω almaktan çıkar."
    },
    {
      q: "A roller-coaster car of mass m travels on the inside of a vertical loop of radius r. At the top of the loop its speed v is greater than √(gr). Which statement about the normal force exerted by the track on the car at the top is correct?",
      opts: [
        "It is zero",
        "It points downward, toward the center, and has magnitude mv²/r − mg",
        "It points upward and has magnitude mg",
        "It points upward and has magnitude mv²/r + mg"
      ],
      a: 1,
      why: "Merkez tepede aşağıda. Radyal denklem: mg + N = mv²/r ⇒ N = mv²/r − mg; v > √(gr) olduğu için pozitif ve aşağı doğru. Yukarı yönlü normal kuvvet yalnız ilmeğin dibinde (N − mg = mv²/r) söz konusu olur."
    }
  ]
};
