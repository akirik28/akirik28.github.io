/* Kitpath not defteri · pe1202 · 12.3 Akım Taşıyan Tellerin Alanı ve Biot–Savart
   Kaynak: kaynak/ced-physc.md Unit 12 (12.3.A–B), 2025 Chief Reader hataları. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe1202",
  amac: "Bu konu akım taşıyan tellerin manyetik alan yaptığını ve alanın teldeki akıma kuvvet uyguladığını anlatıyor. Biot–Savart yasasıyla alanı bulmayı, sağ el kuralıyla yönü bulmayı ve paralel tellerin neden çektiğini ya da ittiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Biot–Savart: küçük parçaların toplamı",
      kisa: "Telin her küçük parçası alan katar; hepsini toplayınca toplam alan çıkar.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "✂️",
              terim: "Current element",
              tr: "akım elemanı",
              tanim: "Telin çok küçük bir parçası: I dℓ. dℓ uzunluğu akımın yönünü gösterir.",
              ornek: "Çembersel bir teli yüzlerce küçük düz parçaya bölünmüş gibi düşün."
            },
            {
              ikon: "🎯",
              terim: "Unit vector r̂",
              tr: "birim yön vektörü",
              tanim: "Akım elemanından alanı aradığın noktaya bakan, uzunluğu 1 olan yön.",
              ornek: "Parça noktaya ne kadar yakınsa o kadar büyük katkı verir (1/r²)."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "dB", alt: "küçük parçanın alanı" },
            "=",
            { t: "(μ₀ / 4π)", alt: "μ₀ = 4π × 10⁻⁷ T·m/A" },
            "×",
            { t: "I (dℓ × r̂) / r²", alt: "akım, parça, yön, uzaklık" }
          ],
          aciklama: "Toplam alan B = ∫ dB. Sınavda böyle yaz: *Each current element contributes dB perpendicular to both dℓ and r̂; the components that cancel by symmetry are dropped before integrating.*"
        },
        {
          tip: "adimlar",
          baslik: "Sağ el kuralı #1: telin çevresindeki alan",
          adimlar: [
            { baslik: "Başparmak akım yönünde", metin: "Sağ elinin başparmağını konvansiyonel akımın yönüne çevir." },
            {
              baslik: "Parmaklar telin etrafında kıvrılır",
              metin: "Kıvrılan parmakların yönü B'nin yönüdür: alan çizgileri tele eş merkezli çemberlerdir."
            },
            {
              baslik: "Noktada alan çembere teğettir",
              metin: "Alan telden uzağa ya da tele doğru bakmaz, tele paralel de olmaz; yalnız teğet bileşeni vardır."
            },
            {
              baslik: "Küçük bir örnekle dene",
              metin: "Akım sayfadan dışarı: çevrede B saat yönünün tersine döner. Akım sayfa içine: saat yönünde."
            }
          ]
        }
      ]
    },
    {
      baslik: "Standart şekillerde alan",
      kisa: "Sınavda üç şekil hesaplanır: düz tel, ilmeğin merkezi, ilmeğin ekseni.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Biot–Savart ile bulunan sonuçlar",
          head: ["Şekil", "Nokta", "Alan"],
          rows: [
            ["Çembersel ilmek (yarıçap R)", "Merkez", "B = μ₀I / 2R"],
            ["Çember yayı (açı θ, radyan)", "Yayın merkezi", "B = μ₀Iθ / 4πR"],
            ["Çembersel ilmek", "Eksende, merkezden z uzakta", "B = μ₀IR² / [2(R² + z²)^(3/2)]"],
            ["Uzunluğu 2a olan düz tel", "Dik açıortay üzerinde, uzaklık d", "B = μ₀Ia / [2πd √(d² + a²)]"],
            ["Çok uzun düz tel (a ≫ d)", "Telden r uzakta", "B = μ₀I / 2πr"]
          ],
          not: "Uzun telde Biot–Savart'la türetmeye girişme; Ampère yasası (sonraki konu) çok daha kısadır. Sınavda böyle yaz: *By symmetry, only the component along the axis survives, so B = ∫ dB cosφ.*"
        },
        {
          tip: "grafik",
          baslik: "Uzun telde B(r): μ₀I / 2πr",
          xlabel: "r (cm)",
          ylabel: "B (μT)",
          xmax: 10,
          ymax: 100,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          yticks: [
            { v: 25, label: "25" },
            { v: 50, label: "50" },
            { v: 75, label: "75" },
            { v: 100, label: "100" }
          ],
          ogeler: [
            {
              id: "c1",
              tip: "egri",
              noktalar: [
                [2, 50], [2.5, 40], [3, 33.333], [3.5, 28.571], [4, 25],
                [4.5, 22.222], [5, 20], [5.5, 18.182], [6, 16.667], [6.5, 15.385],
                [7, 14.286], [7.5, 13.333], [8, 12.5], [8.5, 11.765], [9, 11.111],
                [9.5, 10.526], [10, 10]
              ],
              renk: 0,
              etiket: "I = 5 A"
            },
            { id: "p1", tip: "nokta", x: 2, y: 50, renk: 3, etiket: "50 μT", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", x: 4, y: 25, renk: 3, etiket: "25 μT", kilavuz: true, gizli: true },
            {
              id: "c2",
              tip: "egri",
              noktalar: [
                [2, 100], [2.5, 80], [3, 66.667], [3.5, 57.143], [4, 50],
                [4.5, 44.444], [5, 40], [5.5, 36.364], [6, 33.333], [6.5, 30.769],
                [7, 28.571], [7.5, 26.667], [8, 25], [8.5, 23.529], [9, 22.222],
                [9.5, 21.053], [10, 20]
              ],
              renk: 1,
              etiket: "I = 10 A",
              gizli: true
            },
            { id: "up", tip: "ok", from: [4, 27], to: [4, 48], renk: 2, gizli: true },
            { id: "p3", tip: "nokta", x: 4, y: 50, renk: 1, etiket: "50 μT", gizli: true }
          ],
          durumlar: [
            { metin: "5 A taşıyan çok uzun tel: B = μ₀I/2πr. Uzaklaştıkça ==1/r== ile azalır." },
            {
              metin: "r = 2 cm'de B = 50 μT. Uzaklık 2 katına çıkıp 4 cm olunca B yarıya iner: ==25 μT==.",
              goster: ["p1", "p2"]
            },
            {
              metin: "Akım 2 katına çıkarsa (10 A) her r'de B de 2 katı olur. Eski eğri kalır, yenisi yukarıda.",
              goster: ["c2"]
            },
            { metin: "Aynı r = 4 cm'de B, 25 μT'den 50 μT'ye çıktı: ==B ∝ I==.", goster: ["up", "p3"] }
          ]
        }
      ]
    },
    {
      baslik: "Tele etkiyen kuvvet ve paralel teller",
      kisa: "Alan, içindeki akıma F = I ℓ × B uygular; aynı yönlü akımlar çeker.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "F", alt: "tele kuvvet" },
            "=",
            { t: "∫ I (dℓ × B)", alt: "küçük parçaların toplamı" }
          ],
          aciklama: "Düz tel ve düzgün alanda F = I ℓ B sinθ. Yön: parmaklar akım yönünde, B'ye kıvrılır, başparmak F. Paralel iki telde (aralarında d) birim uzunluğa düşen kuvvet F/ℓ = μ₀I₁I₂ / 2πd. Sınavda böyle yaz: *By the right-hand rule, the field of wire 1 at wire 2 gives a force on wire 2 directed toward wire 1, so the wires attract.*"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🤝",
            baslik: "Aynı yönlü akımlar",
            maddeler: ["Teller birbirini çeker", "Arada alanlar kısmen birbirini götürür"]
          },
          sag: {
            ikon: "↔️",
            baslik: "Zıt yönlü akımlar",
            maddeler: ["Teller birbirini iter", "Arada alanlar aynı yönde toplanır"]
          },
          oyun: [
            {
              metin: "İki tel yan yana ve ikisinde de akım yukarı.",
              cevap: "sol",
              neden: "Aynı yönlü akım: teller birbirine doğru çekilir."
            },
            {
              metin: "Birinde akım sayfa içine, ötekinde sayfa dışına.",
              cevap: "sag",
              neden: "Zıt yönlü akım: teller birbirinden itilir."
            },
            {
              metin: "Eşit akımlarda tellerin tam ortasında net B = 0.",
              cevap: "sol",
              neden: "Aynı yönlü akımlarda ortada iki alan zıt yönlüdür ve eşit büyüklüktedir."
            },
            {
              metin: "Tellerin arasında iki alan aynı yöne bakar; net alan büyük.",
              cevap: "sag",
              neden: "Zıt akımlarda aralarındaki bölgede alanlar aynı yönde toplanır."
            }
          ]
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: zıt akımlı iki tel",
      kisa: "Alanlar vektör olarak toplanır; yönü her tel için sağ elle bul.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "0,20 m arayla iki uzun tel, tam ortadaki P noktası",
          durum: "Birinde 5,0 A sayfadan dışarı (sol tel), ötekinde 15 A sayfa içine (sağ tel) akım var. Teller 0,20 m aralıklı. P noktası tam ortada. P'deki net B'yi ve birim uzunluğa düşen kuvveti bul.",
          adimlar: [
            "P her telden d = 0,10 m uzakta; her tel için B = μ₀I / 2πd = (2 × 10⁻⁷) I / d.",
            "Sol tel: B₁ = (2 × 10⁻⁷)(5,0)/0,10 = 1,0 × 10⁻⁵ T. Sağ tel: B₂ = (2 × 10⁻⁷)(15)/0,10 = 3,0 × 10⁻⁵ T.",
            "Yön, sol tel: akım dışarı, B saat yönünün tersi; telin sağındaki P'de B yukarı (+y). Sağ tel: akım içeri, B saat yönünde; telin solundaki P'de B yine yukarı (+y).",
            "İkisi de +y olduğu için toplanır: B_net = 4,0 × 10⁻⁵ T, yukarı. Akımlar aynı yönlü olsaydı çıkarırdık: 2,0 × 10⁻⁵ T.",
            "Kuvvet: F/ℓ = μ₀I₁I₂ / 2πd = (2 × 10⁻⁷)(5,0)(15)/0,20 = 7,5 × 10⁻⁵ N/m.",
            "Akımlar zıt yönlü olduğundan teller birbirini iter."
          ],
          sonuc: "B_net = 4,0 × 10⁻⁵ T (+y, vektör toplamı); F/ℓ = 7,5 × 10⁻⁵ N/m, itici"
        },
        {
          tip: "tuzak",
          baslik: "Alanları skaler toplama; uzun tel için integral kurma",
          metin: "Net alanı bulurken her telin alanını ayrı hesapla, yönünü sağ elle belirle, vektör olarak topla. Uzun tel için B = μ₀I/2πr hazırdır; Biot–Savart integraliyle uğraşmak vakit kaybıdır.",
          yanlis: "B_net = μ₀(I₁ + I₂)/2πd yazmak ya da yönlere bakmadan iki alanı toplamak.",
          dogru: "Sınavda böyle yaz: *The fields add because both point in the +y direction between the wires; B_net = B₁ + B₂.*"
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
            "*Biot–Savart*: dB = (μ₀/4π) I (dℓ × r̂)/r²; her akım elemanının alanı hem dℓ'ye hem r̂'ye diktir.",
            "Telin çevresinde alan, tele eş merkezli çemberlere teğettir; yönü sağ el kuralıyla bulunur (başparmak akım, parmaklar B).",
            "İlmeğin merkezinde B = μ₀I/2R; yay merkezinde B = μ₀Iθ/4πR; uzun telde B = μ₀I/2πr.",
            "Uzun telde B, 1/r ile azalır ve I ile doğru orantılıdır.",
            "Tele kuvvet F = ∫ I (dℓ × B); düz telde F = I ℓ B sinθ.",
            "Paralel teller: aynı yönlü akım çeker, zıt yönlü akım iter; F/ℓ = μ₀I₁I₂/2πd, iki tel de aynı büyüklükte kuvvet hisseder.",
            "Birden çok telin alanı vektör olarak toplanır; yönleri atlama."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A long straight wire carries a current of 4.0 A. What is the magnitude of the magnetic field at a distance of 0.050 m from the wire?",
      opts: ["8.0 × 10⁻⁶ T", "3.2 × 10⁻⁵ T", "1.6 × 10⁻⁵ T", "5.0 × 10⁻⁵ T"],
      a: 2,
      why: "B = μ₀I/2πr = (2 × 10⁻⁷)(4,0)/0,050 = 1,6 × 10⁻⁵ T. B şıkkı 2π yerine π kullanır; D şıkkı ilmek formülü μ₀I/2R'yi uzun tele uygular."
    },
    {
      q: "A long straight wire lies along the z-axis and carries current in the +z direction (out of the page). What is the direction of the magnetic field at the point (+d, 0, 0)?",
      opts: ["+x", "−y", "−z", "+y"],
      a: 3,
      why: "Başparmak +z, parmaklar saat yönünün tersine kıvrılır. Doğuda (+x) bir noktada kıvrılma yönü kuzeye, yani +y'ye bakar. Alan telden uzağa (+x) bakmaz; hep teğettir."
    },
    {
      q: "Four circular loops carry currents as listed in the table. Which loop produces the largest magnetic field at its center?",
      fig: {
        type: "table",
        head: ["Loop", "Radius R (cm)", "Current I (A)"],
        rows: [["W", "2.0", "2.0"], ["X", "4.0", "6.0"], ["Y", "5.0", "4.0"], ["Z", "10", "12"]],
        caption: "Four loops"
      },
      opts: ["X", "W", "Y", "Z"],
      a: 0,
      why: "Merkezde B = μ₀I/2R, yani B ∝ I/R. Oranlar: W = 1,0, X = 1,5, Y = 0,8, Z = 1,2 A/cm. En büyük X'tir."
    },
    {
      q: "Two long parallel wires 0.10 m apart carry currents of 6.0 A and 2.0 A in the same direction. Which statement about the force on each wire is correct?",
      opts: [
        "The 6.0 A wire feels a force three times larger, and the wires attract.",
        "Each wire feels a force of 2.4 × 10⁻⁵ N per meter of length, and the wires attract.",
        "Each wire feels a force of 2.4 × 10⁻⁵ N per meter of length, and the wires repel.",
        "Each wire feels a force of 1.2 × 10⁻⁵ N per meter of length, and the wires attract."
      ],
      a: 1,
      why: "F/ℓ = μ₀I₁I₂/2πd = (2 × 10⁻⁷)(6,0)(2,0)/0,10 = 2,4 × 10⁻⁵ N/m. Newton'un üçüncü yasası gereği iki tel aynı büyüklükte kuvvet hisseder. Aynı yönlü akım çeker. A şıkkı üçüncü yasayı unutur."
    },
    {
      q: "A wire carrying current I runs along a straight line toward point O, bends into a semicircle of radius R centered at O, and leaves along the same straight line. What is the magnitude of the magnetic field at O?",
      opts: ["μ₀I / 4R", "μ₀I / 2R", "μ₀I / 2πR", "Zero"],
      a: 0,
      why: "Düz kısımlarda dℓ, r̂ ile paraleldir, dℓ × r̂ = 0; katkı yok. Yarım çember tam çemberin (μ₀I/2R) yarısını verir: μ₀I/4R. Genel yay formülü B = μ₀Iθ/4πR, θ = π."
    }
  ]
};
