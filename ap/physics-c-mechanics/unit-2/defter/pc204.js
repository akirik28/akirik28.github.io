/* Kitpath not defteri · pc204 · 2.6 Kütle Çekim Kuvveti
   Kaynak: kaynak/ced-physc.md (Unit 2, Topic 2.6; LO 2.6.A–E). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc204",
  amac: "Bu konu kütleçekim kuvvetini anlatıyor: iki kütle arasındaki çekim, çekim alanı ve ağırlık; asansörde görünür ağırlık ve ağırlıksızlık; eylemsizlik ve çekim kütlesi; kürenin içinde ve dışında çekim.",
  bolumler: [
    {
      baslik: "Evrensel çekim yasası ve çekim alanı",
      kisa: "Çekim kütlelerle doğru, merkezler arası uzaklığın karesiyle ters orantılıdır.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "F_g" },
            "=",
            { t: "G", alt: "6,67×10⁻¹¹ N·m²/kg²" },
            "×",
            { t: "m₁ m₂", alt: "iki kütle" },
            "÷",
            { t: "r²", alt: "merkezler arası uzaklık" }
          ],
          aciklama: "Kuvvet hep çekicidir, merkezleri birleştiren doğru boyunca etkir ve çiftler eşit–zıttır. Küresel cisim kütle merkezindeymiş gibi alınır; r yüzeyden değil merkezden ölçülür."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧲",
              terim: "Gravitational field",
              tr: "kütleçekim alanı",
              tanim: "Test kütlesine etkiyen çekim kuvveti bölü test kütlesi: g = F_g/m = GM/r² (N/kg). Yalnız çekim etkiyorsa ivme (m/s²) sayısal olarak alana eşittir.",
              ornek: "Dünya yüzeyinde g = 9,8 N/kg (CED yaklaşık 10 alır)."
            },
            {
              ikon: "⚖️",
              terim: "Weight",
              tr: "ağırlık",
              tanim: "Astronomik bir cismin yakındaki küçük cisme uyguladığı çekim kuvveti: F_g = mg. Konum değişimi kuvveti ihmal edilebilir kadar değiştiriyorsa kuvvet sabit alınır.",
              ornek: "60 kg'lık birinin ağırlığı yüzeyde 60×9,8 = 588 N."
            }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The gravitational force is inversely proportional to r², so doubling the distance from the center reduces the force to one-fourth.* Sayıyı vermeden önce oranı söylemek çoğu zaman yeterli gerekçedir."
        }
      ]
    },
    {
      baslik: "Ağırlık, görünür ağırlık ve ağırlıksızlık",
      kisa: "Tartının gösterdiği normal kuvvettir; ivmeli asansörde gerçek ağırlıktan farklıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🛗",
              terim: "Apparent weight",
              tr: "görünür ağırlık",
              tanim: "Normal kuvvetin büyüklüğü, yani tartının gösterdiği. Sistem ivmeliyse ağırlıktan farklıdır.",
              ornek: "Asansör yukarı hızlanırken tartı 708 N gösterir."
            },
            {
              ikon: "🪂",
              terim: "Weightlessness",
              tr: "ağırlıksızlık",
              tanim: "Cisme ya hiç kuvvet yoksa ya da yalnız yerçekimi etkiyorsa normal kuvvet 0'dır ve cisim ağırlıksız görünür.",
              ornek: "Serbest düşen asansörde tartı 0 gösterir."
            }
          ]
        },
        {
          tip: "tablo",
          baslik: "Asansörde 60 kg'lık biri (g = 9,8 m/s², a = 2 m/s²)",
          head: ["Asansör", "Newton'un 2. yasası (yukarı +)", "Tartı (N)", "His"],
          rows: [
            ["Duruyor ya da sabit hızda", "N − mg = 0", "588", "Normal"],
            ["Yukarı hızlanıyor (a ↑)", "N − mg = ma", "708", "Ağır"],
            ["Aşağı hızlanıyor (a ↓)", "N − mg = −ma", "468", "Hafif"],
            ["Serbest düşüş (a = g ↓)", "N = 0", "0", "Ağırlıksız"]
          ],
          vurgu: 1,
          not: "Hız değil ivme yönü belirler: yukarı yavaşlayan asansörün ivmesi de aşağıdır."
        },
        {
          tip: "tuzak",
          baslik: "'Yörüngede yerçekimi yok'",
          metin: "Yörüngedeki astronota Dünya'nın çekimi hâlâ yüzeydekinin yaklaşık %89'u kadardır. Ağırlıksız görünür çünkü astronot ve uzay aracı aynı ivmeyle düşer; aralarında normal kuvvet yoktur.",
          yanlis: "Astronot ağırlıksızdır, çünkü orada yerçekimi yoktur.",
          dogru: "Yerçekimi tek kuvvettir: serbest düşüş. Normal kuvvet 0 olduğu için tartı 0 gösterir."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *The scale reads the normal force, which is greater than mg because the elevator accelerates upward: N − mg = ma.* Tartı değerini gerçek ağırlık sanma."
        }
      ]
    },
    {
      baslik: "İki kütle ve eşdeğerlik ilkesi",
      kisa: "Eylemsizlik ve çekim kütlesi deneyde eşit çıkar; bu yüzden herkes aynı ivmeyle düşer.",
      bloklar: [
        {
          tip: "ikili",
          sol: {
            ikon: "🧱",
            baslik: "*Inertial mass*",
            maddeler: ["F = ma'daki m", "Hız değişimine direnç", "Kuvvete nasıl cevap verdiğini söyler"]
          },
          sag: {
            ikon: "🌍",
            baslik: "*Gravitational mass*",
            maddeler: ["G m₁m₂/r²'deki m", "Çekim kuvvetinin büyüklüğünü belirler", "Kütleçekimine ne kadar bağlandığını söyler"]
          },
          oyun: [
            { metin: "İtilince ne kadar zor hızlandığını belirleyen kütle.", cevap: "sol", neden: "İvme a = F/m: direnç, eylemsizlik kütlesi." },
            { metin: "Dünya ile aranda çekim kuvvetinin büyüklüğünü belirleyen kütle.", cevap: "sag", neden: "F_g = G M m/r² içindeki m." },
            { metin: "Uzayda tartı olmadan bir cismi sallayıp ölçtüğün kütle.", cevap: "sol", neden: "Sallamak hız değişimine direnci ölçer; çekimle ilgisi yok." },
            { metin: "Bir kefede dengeye gelen cismin kütlesi.", cevap: "sag", neden: "Terazi çekim kuvvetini karşılaştırır." }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔬",
              terim: "Equivalence principle",
              tr: "eşdeğerlik ilkesi",
              tanim: "İvmeli (noninertial) bir çerçevedeki gözlemci, görünür ağırlığı kütleçekiminden ayırt edemez. İki kütle deneysel olarak eşittir.",
              ornek: "Boş uzayda 9,8 m/s² ile hızlanan roket içinde Dünya'daymış gibi ağırlık hissedersin."
            }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Inertial and gravitational mass are equal, so all objects have the same acceleration in free fall regardless of their mass.* Boşlukta tüy ve çekiç aynı ivmeyle düşer."
        }
      ]
    },
    {
      baslik: "Kürenin içinde ve dışında çekim",
      kisa: "Dışarıda tüm kütle merkezdeymiş gibi; düzgün kürenin içinde kuvvet r ile artar.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Düzgün küre: kuvvet merkezden uzaklığa göre",
          xlabel: "r",
          ylabel: "F / F_yüzey",
          xmax: 4,
          ymax: 1.2,
          xticks: [
            { v: 1, label: "R" },
            { v: 2, label: "2R" },
            { v: 3, label: "3R" },
            { v: 4, label: "4R" }
          ],
          yticks: [
            { v: 0.25, label: "¼" },
            { v: 0.5, label: "½" },
            { v: 1, label: "1" }
          ],
          ogeler: [
            {
              id: "dis",
              tip: "egri",
              noktalar: [[1, 1], [1.25, 0.64], [1.5, 0.4444], [1.75, 0.3265], [2, 0.25], [2.5, 0.16], [3, 0.1111], [3.5, 0.0816], [4, 0.0625]],
              renk: 0
            },
            { id: "p1", tip: "nokta", x: 1, y: 1, renk: 3, etiket: "yüzey", kilavuz: true },
            { id: "p2", tip: "nokta", x: 2, y: 0.25, renk: 3, etiket: "2R: ¼", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", x: 3, y: 0.1111, renk: 3, etiket: "3R: 1/9", kilavuz: true, gizli: true },
            { id: "ic", tip: "cizgi", from: [0, 0], to: [1, 1], renk: 1, gizli: true },
            { id: "ict", tip: "yazi", x: 0.65, y: 0.3, metin: "içeride F ∝ r", hiza: "start", gizli: true },
            { id: "ph", tip: "nokta", x: 0.5, y: 0.5, renk: 3, etiket: "R/2: ½", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Düzgün kürenin dışında (r ≥ R) tüm kütle merkezdeymiş gibi: F ∝ 1/r². Yüzeyde kuvvet 1 birim." },
            { metin: "r iki katına çıkınca kuvvet ¼, üç katına çıkınca 1/9.", goster: ["p2", "p3"] },
            { metin: "Düzgün kürenin içinde yalnız r'den içerideki kütle çeker: F ∝ r. R/2'de kuvvet yarıya iner, merkezde 0 olur.", goster: ["ic", "ict", "ph"] },
            { metin: "İnce bir kabuğun içinde ise net kuvvet 0'dır. Kabuk dışında bütün kütle merkezdeymiş gibi çeker." }
          ]
        },
        {
          tip: "ornek",
          baslik: "Yüzeyden R kadar yukarıdaki astronot (m = 80 kg)",
          durum: "Dünya'nın yarıçapı R. Astronot yüzeyden R yukarıda. Çekim alanını ve ağırlığını bul (yüzeyde g = 9,8 N/kg).",
          adimlar: [
            "r merkezden ölçülür: yüzeyden R yukarıda r = 2R.",
            "g = GM/r² olduğu için r iki katına çıkınca g dörtte birine iner: g' = 9,8/4 = 2,45 N/kg.",
            "Ağırlık F_g = mg' = 80×2,45 = 196 N. Yüzeyde 80×9,8 = 784 N idi.",
            "Oran: 196/784 = 1/4. Astronotun 'hafiflemesi' çekimin azalmasından gelir, kaybolmasından değil."
          ],
          sonuc: "g' = 2,45 N/kg; ağırlık 196 N, yüzeydekinin ¼'ü"
        },
        {
          tip: "tuzak",
          baslik: "r'yi yüzeyden ölçmek, kuyuda çekimin arttığını sanmak",
          metin: "Formüldeki r merkezler arası uzaklıktır. Düzgün bir gezegenin içine inildikçe kuvvet artmaz, azalır; çünkü dışta kalan kabuk çekime katkı yapmaz. Kabuk teoreminin matematiksel ispatı sınavda beklenmez.",
          yanlis: "Yüzeyden R yukarıda r = R; derine inince çekim artar.",
          dogru: "Yüzeyden R yukarıda r = 2R ve kuvvet ¼; düzgün kürenin içinde F ∝ r, yani azalır."
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Inside a uniform sphere, only the mass within radius r pulls on the object: m_partial = ρ(4/3)πr³, so F = G m m_partial / r² ∝ r.* Türetmen gerekmez; ilişkiyi ve nedenini söylemen yeterli."
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
            "F_g = G m₁m₂/r²: hep çekici, merkezleri birleştiren doğruda; r merkezler arası uzaklıktır; r iki katı olunca kuvvet ¼ olur.",
            "Çekim alanı g = F_g/m = GM/r² (N/kg); yalnız çekim etkiyorsa ivme sayısal olarak g'ye eşittir. Ağırlık F_g = mg.",
            "Yüzey yakınında konum değişimi kuvveti ihmal edilebilir kadar değiştiriyorsa g sabittir (CED ≈ 10 N/kg, sheet 9,8).",
            "*Apparent weight* normal kuvvettir: N = m(g + a), a yukarı +. Hızlanan yukarı 708 N, aşağı 468 N, serbest düşüş 0 (60 kg, a = 2).",
            "Ağırlıksızlık yerçekimi yokluğu değildir; yalnız yerçekimi etkir, normal kuvvet 0.",
            "*Inertial mass* (F = ma) ile *gravitational mass* (G m₁m₂/r²) deneyde eşittir; eşdeğerlik ilkesi: ivmeli çerçevede görünür ağırlık çekimden ayırt edilemez.",
            "Düzgün küre dışında kütle merkezdeymiş gibi; ince kabuğun içinde net kuvvet 0; düzgün kürenin içinde F ∝ r.",
            "Yüzeyden R yukarıda r = 2R: g' = 2,45 N/kg ve 80 kg'lık astronotun ağırlığı 196 N."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A satellite has weight W at the surface of Earth, whose radius is R. When the satellite is at a height of 2R above Earth's surface, the gravitational force exerted on it by Earth is",
      opts: ["W/2", "W/3", "W/4", "W/9"],
      a: 3,
      why: "Yüzeyin üstünde 2R yukarıda merkezden uzaklık r = 3R. Kuvvet 1/r² ile değiştiğinden W/9. W/3 uzaklık oranını doğrudan almak olur, W/4 ise yüksekliği R sanmak (r = 2R) olur."
    },
    {
      q: "A planet is a uniform sphere of mass M and radius R, and the gravitational field strength at its surface is g₀ = GM/R². What is the gravitational field strength at a point inside the planet at a distance R/2 from its center?",
      opts: ["g₀/4", "g₀/2", "g₀", "2g₀"],
      a: 1,
      why: "Düzgün kürenin içinde yalnız r'den içerideki kütle çeker: M' = M(r/R)³. g = GM'/r² = g₀ (r/R) = g₀/2. g₀/4 dışarıdaki 1/r² kuralını içeriye uygulamaktır."
    },
    {
      q: "A 50 kg person stands on a scale in an elevator that is accelerating downward at 2 m/s². Use g = 10 m/s². What is the reading of the scale?",
      opts: ["400 N", "500 N", "600 N", "0"],
      a: 0,
      why: "Yukarıyı + alırsak N − mg = m(−a): N = m(g − a) = 50×(10 − 2) = 400 N. 500 N gerçek ağırlık, 600 N yukarı ivmelenen asansörün değeri olurdu; 0 yalnızca serbest düşüşte (a = g) olur."
    },
    {
      q: "The table gives the mass and radius of planets X and Y relative to Earth's mass M_E and radius R_E. Which planet(s) have a surface gravitational field strength equal to Earth's?",
      fig: {
        type: "table",
        head: ["Planet", "Mass", "Radius"],
        rows: [["Earth", "M_E", "R_E"], ["X", "2 M_E", "2 R_E"], ["Y", "4 M_E", "2 R_E"]],
        caption: "Masses and radii of planets"
      },
      opts: ["Neither X nor Y", "X only", "Y only", "Both X and Y"],
      a: 2,
      why: "g = GM/R². X için 2/(2²) = 1/2 oranı, yani Dünya'nın yarısı. Y için 4/(2²) = 1: Dünya'yla aynı. 'Both' kütle ve yarıçapın ikisini de ikiyle çarpmanın g'yi değiştirmediğini sanmaktan gelir; yarıçap karesiyle girer."
    },
    {
      q: "An astronaut inside a spacecraft in a circular orbit 400 km above Earth's surface appears to float. Which statement best explains this?",
      opts: [
        "The gravitational force of Earth on the astronaut is negligible at that height",
        "The spacecraft's engines exactly cancel the gravitational force",
        "The astronaut is beyond Earth's gravitational field",
        "Gravity is the only force on both the astronaut and the spacecraft, so the normal force between them is zero"
      ],
      a: 3,
      why: "400 km'de çekim yüzeydekinin yaklaşık %89'udur; yok değil. Astronot ve araç yalnız yerçekimiyle aynı ivmeyle düşer, aralarındaki normal kuvvet 0 olur ve astronot ağırlıksız görünür."
    }
  ]
};
