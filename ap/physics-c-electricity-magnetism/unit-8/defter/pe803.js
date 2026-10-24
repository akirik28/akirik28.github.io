/* Kitpath not defteri · pe803 · 8.4 Yük Dağılımlarının Alanı
   Kaynak: defter-araclari/kaynak/ced-physc.md (CED 2024+). Sade Physics C defteri. Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe803",
  amac: "Bu konu yük dağılımlarının elektrik alanını anlatıyor: yükü küçük parçalara (dq) bölüp alanları vektör olarak topluyoruz. Halka, yay, sonlu ve sonsuz tel için integral kurmayı ve simetriyle hangi bileşenin sıfırlandığını öğreneceksin.",
  bolumler: [
    {
      baslik: "Yöntem: dq'ya böl, simetriden yararlan",
      kisa: "Dağılımı dq parçalarına böl, her dq'nun alanını yaz, bileşenleri topla.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "E = (1/4πε₀) ∫ dq / r² r̂", alt: "formül tablosundaki hâli" }
          ],
          aciklama: "dq yük yoğunluğuyla yazılır: dq = λ dx (çizgi), σ dA (yüzey), ρ dV (hacim). Hesabı bileşen bileşen yap; vektörü bir bütün olarak integralleme."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "📏",
              terim: "Linear charge density",
              tr: "çizgisel yük yoğunluğu",
              tanim: "Birim uzunluk başına yük, λ (C/m). Düzgün dağılımda λ = Q/L.",
              ornek: "5,0 nC/m: her metrede 5,0 nC."
            },
            {
              ikon: "🪞",
              terim: "Symmetry argument",
              tr: "simetri savı",
              tanim: "Karşılıklı parçaların bazı bileşenleri birbirini götürür; yalnız kalan bileşeni integralle.",
              ornek: "Halkanın ekseninde eksene dik bileşenler sıfırlanır."
            }
          ]
        },
        {
          tip: "adimlar",
          baslik: "4 adımda integral",
          adimlar: [
            { baslik: "Küçük parça", metin: "Dağılımdan küçük bir dq seç ve onu λ dx ile yaz." },
            { baslik: "dE yaz", metin: "dE = k dq / r². r sabit değildir; r'yi x cinsinden yaz." },
            {
              baslik: "Simetri",
              metin: "Götürülen bileşenleri çıkar, kalan eksenin bileşenini al (cos θ ya da sin θ)."
            },
            {
              baslik: "İntegral al",
              metin: "Sınırları yaz, önce integrali al, sonra sınırları yerine koy. k, λ, R sabitlerini dışarı çıkar."
            }
          ]
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*By symmetry, the components perpendicular to the axis cancel, so only the axial component remains.*"
            },
            {
              ikon: "✍️",
              baslik: "İntegral",
              metin: "*Write dq = λ dx and r² in terms of x before integrating.*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Halka: eksen üzerindeki alan",
      kisa: "E_x = kQx/(x² + R²)^(3/2): merkezde 0, x ≈ R/√2'de en büyük.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Halka, Q = +4,0 nC, R = 0,10 m: E_x(x)",
          xlabel: "x (m)",
          ylabel: "E (N/C)",
          xmax: 10,
          ymax: 8,
          xticks: [
            { v: 2.5, label: "0,1" },
            { v: 5, label: "0,2" },
            { v: 7.5, label: "0,3" },
            { v: 10, label: "0,4" }
          ],
          yticks: [
            { v: 2.5, label: "500" },
            { v: 5, label: "1000" },
            { v: 7.5, label: "1500" }
          ],
          ogeler: [
            {
              id: "ec",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 1.773], [0.5, 3.394], [0.75, 4.745], [1, 5.763], [1.25, 6.44],
                [1.5, 6.81], [1.75, 6.928], [2, 6.856], [2.25, 6.653], [2.5, 6.364], [2.75, 6.027],
                [3, 5.667], [3.25, 5.304], [3.5, 4.948], [3.75, 4.608], [4, 4.288], [4.25, 3.988],
                [4.5, 3.711], [4.75, 3.455], [5, 3.22], [5.25, 3.004], [5.5, 2.806], [5.75, 2.624],
                [6, 2.458], [6.25, 2.305], [6.5, 2.165], [6.75, 2.036], [7, 1.918], [7.25, 1.808],
                [7.5, 1.708], [7.75, 1.615], [8, 1.529], [8.25, 1.449], [8.5, 1.375], [8.75, 1.306],
                [9, 1.242], [9.25, 1.183], [9.5, 1.127], [9.75, 1.076], [10, 1.027]
              ],
              renk: 0,
              etiket: "halka",
              gizli: true
            },
            { id: "n0", tip: "nokta", x: 0, y: 0, renk: 3, etiket: "merkez: 0", gizli: true },
            {
              id: "nm",
              tip: "nokta",
              x: 1.768,
              y: 6.928,
              renk: 1,
              etiket: "≈ 1386 N/C",
              gizli: true
            },
            {
              id: "nr",
              tip: "nokta",
              x: 2.5,
              y: 6.364,
              renk: 2,
              etiket: "x = R: 1273",
              gizli: true
            },
            {
              id: "pc",
              tip: "egri",
              noktalar: [
                [4, 7.031], [4.5, 5.556], [5, 4.5], [5.5, 3.719], [6, 3.125], [6.5, 2.663],
                [7, 2.296], [7.5, 2], [8, 1.758], [8.5, 1.557], [9, 1.389], [9.5, 1.247],
                [10, 1.125]
              ],
              renk: 3,
              kesik: true,
              etiket: "kQ/x²",
              gizli: true
            }
          ],
          durumlar: [
            {
              metin: "Eksen üzerindeki bir noktada halkanın alanı. Q = +4,0 nC, R = 0,10 m.",
              goster: ["ec"]
            },
            {
              metin: "Merkezde (x = 0) alan sıfır: karşılıklı dq'ların alanları birbirini götürür.",
              goster: ["n0"]
            },
            { metin: "En büyük alan x = R/√2 ≈ 0,071 m'de: E_max ≈ 1386 N/C.", goster: ["nm"] },
            { metin: "x = R = 0,10 m'de E ≈ 1273 N/C.", goster: ["nr"] },
            {
              metin: "Uzakta (x ≫ R) halka nokta yük gibi davranır: eğri kQ/x² eğrisine yaklaşır.",
              goster: ["pc"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Halkanın eksen alanını türet",
          durum: "R yarıçaplı, Q yüklü düzgün halkanın eksenindeki, merkezden x uzaklıktaki alanı bul; R = 0,10 m, Q = 4,0 nC, x = 0,10 m için hesapla.",
          adimlar: [
            "Halkadan bir dq al. Ona uzaklık r = √(x² + R²); dE = k dq / r².",
            "Eksene dik bileşenler karşılıklı parçalarla götürür. Eksen bileşeni: dE_x = dE cos θ, cos θ = x/r.",
            "E_x = ∫ k dq x / r³ = (k x / r³) ∫ dq = kQx / (x² + R²)^(3/2). (r ve x halkanın her noktasında aynı, o yüzden dışarı çıktı.)",
            "x = 0,10 m için: (x² + R²)^(3/2) = 0,020^(3/2) = 0,00283; E_x = (9,0×10⁹)(4,0×10⁻⁹)(0,10) / 0,00283 = 3,6 / 0,00283 ≈ 1,27×10³ N/C, +x yönünde.",
            "Kontrol: x = 0 → E = 0; x ≫ R → E → kQ/x²."
          ],
          sonuc: "E_x = kQx/(x² + R²)^(3/2); x = 0,10 m'de ≈ 1,27×10³ N/C, halkadan uzağa"
        },
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz",
              metin: "*The perpendicular components cancel by symmetry; the axial component of each dE is dE cos θ, where cos θ = x/√(x² + R²).*"
            }
          ]
        }
      ]
    },
    {
      baslik: "Çubuk, yarım çember ve sonsuz tel",
      kisa: "Çizgi yükünde dq = λ dx; r'nin x'e bağlı olduğunu unutma.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Çubuğun orta dikmesinde E(y) (L = 0,40 m, Q = 2,0 nC)",
          xlabel: "y (m)",
          ylabel: "E (N/C)",
          xmax: 10,
          ymax: 10,
          xticks: [
            { v: 1.667, label: "0,1" },
            { v: 3.333, label: "0,2" },
            { v: 5, label: "0,3" },
            { v: 6.667, label: "0,4" },
            { v: 8.333, label: "0,5" },
            { v: 10, label: "0,6" }
          ],
          yticks: [
            { v: 2, label: "200" },
            { v: 4, label: "400" },
            { v: 6, label: "600" },
            { v: 8, label: "800" }
          ],
          ogeler: [
            {
              id: "rod",
              tip: "egri",
              noktalar: [
                [1.667, 8.05], [2.083, 6.106], [2.5, 4.8], [2.917, 3.87], [3.333, 3.182], [3.75, 2.657],
                [4.167, 2.249], [4.583, 1.925], [5, 1.664], [5.417, 1.451], [5.833, 1.276], [6.25, 1.129],
                [6.667, 1.006], [7.083, 0.902], [7.5, 0.812], [7.917, 0.735], [8.333, 0.669], [8.75, 0.61],
                [9.167, 0.559], [9.583, 0.514], [10, 0.474]
              ],
              renk: 0,
              etiket: "çubuk",
              gizli: true
            },
            {
              id: "inf",
              tip: "egri",
              noktalar: [
                [1.667, 9], [2.083, 7.2], [2.5, 6], [2.917, 5.143], [3.333, 4.5], [3.75, 4],
                [4.167, 3.6], [4.583, 3.273], [5, 3], [5.417, 2.769], [5.833, 2.571], [6.25, 2.4],
                [6.667, 2.25], [7.083, 2.118], [7.5, 2], [7.917, 1.895], [8.333, 1.8], [8.75, 1.714],
                [9.167, 1.636], [9.583, 1.565], [10, 1.5]
              ],
              renk: 1,
              kesik: true,
              etiket: "sonsuz tel",
              gizli: true
            },
            {
              id: "pt",
              tip: "egri",
              noktalar: [
                [2.333, 9.184], [2.75, 6.612], [3.167, 4.986], [3.583, 3.894], [4, 3.125], [4.417, 2.563],
                [4.833, 2.14], [5.25, 1.814], [5.667, 1.557], [6.083, 1.351], [6.5, 1.183], [6.917, 1.045],
                [7.333, 0.93], [7.75, 0.832], [8.167, 0.75], [8.583, 0.679], [9, 0.617], [9.417, 0.564],
                [9.833, 0.517]
              ],
              renk: 3,
              kesik: true,
              etiket: "nokta yük",
              gizli: true
            },
            { id: "pr", tip: "nokta", x: 2.5, y: 4.8, renk: 0, etiket: "480", gizli: true },
            { id: "pl", tip: "nokta", x: 2.5, y: 6, renk: 1, etiket: "600", gizli: true }
          ],
          durumlar: [
            { metin: "Sonlu çubuk, orta dikme: E(y) = kQ / (y√(y² + L²/4)).", goster: ["rod"] },
            { metin: "Yakında (y ≪ L) sonsuz tele benzer: E ≈ 2kλ/y ∝ 1/y.", goster: ["inf"] },
            {
              metin: "Uzakta (y ≫ L) nokta yüke benzer: E ≈ kQ/y² ∝ 1/y². Çubuk iki sınırın hep altında.",
              goster: ["pt"]
            },
            { metin: "y = 0,15 m: çubuk 480 N/C, sonsuz tel 600 N/C.", goster: ["pr", "pl"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "λ = 5,0 nC/m için dört dağılım",
          durum: "Aynı çizgisel yük yoğunluğu ile alanları hesapla.",
          adimlar: [
            "Yarım çember (R = 0,10 m, merkezde): dE = kλR dθ/R²; simetri eksenine dik bileşenler götürür, E = (kλ/R)∫₀^π sin θ dθ = 2kλ/R = 2(9,0×10⁹)(5,0×10⁻⁹)/0,10 = 900 N/C. Yay pozitifse alan yayın ortasından merkeze doğru (yaydan uzağa).",
            "Sonlu çubuk (L = 0,40 m, Q = λL = 2,0 nC), ucundan a = 0,10 m uzakta, aynı doğru üzerinde: E = kλ∫ dx/x² (a → a + L) = kQ/(a(a + L)) = 18 / (0,10 × 0,50) = 360 N/C, çubuktan uzağa.",
            "Aynı çubuk, orta dikmede y = 0,15 m: E = kQ / (y√(y² + L²/4)) = 18 / (0,15 × 0,25) = 480 N/C.",
            "Sonsuz tel: E = 2kλ/r = λ/(2πε₀r); r = 0,15 m için 600 N/C (çubuk formülünde L → ∞ sınırı)."
          ],
          sonuc: "Yarım çember 900 N/C; çubuk 360 N/C (uçtan) ve 480 N/C (dikmede); sonsuz tel 600 N/C (0,15 m)"
        },
        {
          tip: "tuzak",
          baslik: "dq = λ dx dönüşümünü ve r(x)'i unutmak",
          metin: "İntegralde r sabit değildir; çubukta r = x ya da √(x² + y²) gibi x'e bağlıdır. dq'yu da λ dx ile değiştirmezsen integral kurulamaz.",
          yanlis: "E = kQ/r² ve r sabit: ∫ dq = Q ile bitti.",
          dogru: "Önce dq = λ dx, r'yi x cinsinden yaz, sonra sınırlarla integral al. Sınavda böyle yaz: *dq = λ dx, so E = kλ ∫ dx/x² from x = a to x = a + L.*"
        }
      ]
    },
    {
      baslik: "Sonuç tablosu ve simetri",
      kisa: "Hangi bileşenin sıfırlandığını simetriyle bul; silindirde Gauss'a geç.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Sınavda beklenen dağılımlar",
          head: ["Dağılım", "Nokta", "E"],
          rows: [
            ["Halka (R, Q)", "ekseninde, merkezden x", "kQx/(x² + R²)^(3/2), eksen yönünde"],
            ["Yarım çember (R, λ)", "merkez", "2kλ/R, simetri ekseninde"],
            ["Çubuk (L, Q)", "aynı doğruda, ucundan a", "kQ/(a(a + L))"],
            ["Çubuk (L, Q)", "orta dikme, uzaklık y", "kQ/(y√(y² + L²/4)), çubuğa dik"],
            ["Sonsuz tel (λ)", "uzaklık r", "2kλ/r = λ/(2πε₀r), tele dik"]
          ],
          vurgu: 0,
          not: "Silindirik simetride Gauss yasası çok daha kolaydır (8.6). Sınavda böyle yaz: *For an infinite line of charge the field is E = λ/(2πε₀r), directed perpendicular to the line.*"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "➖",
            baslik: "Bileşen götürülür",
            maddeler: [
              "Karşılıklı dq'lar zıt işaretli bileşen üretir",
              "İntegralde yer almaz",
              "Toplamı sıfır"
            ]
          },
          sag: {
            ikon: "➕",
            baslik: "Bileşen kalır",
            maddeler: ["Aynı yöne bakan bileşenler toplanır", "İntegrali sen kurarsın", "Sonuç bu yöndedir"]
          },
          oyun: [
            {
              metin: "Halkanın ekseninde: eksene dik bileşen.",
              cevap: "sol",
              neden: "Karşılıklı parçaların dik bileşenleri zıt yönlü."
            },
            {
              metin: "Halkanın ekseninde: eksen boyunca bileşen.",
              cevap: "sag",
              neden: "Her dq eksen yönünde dE cos θ katar; hepsi aynı yönde."
            },
            {
              metin: "Çubuğun orta dikmesinde: çubuk boyunca bileşen.",
              cevap: "sol",
              neden: "Orta noktanın iki yanındaki dq'lar zıt yönlü yatay bileşen verir."
            },
            {
              metin: "Çubuğun orta dikmesinde: çubuğa dik bileşen.",
              cevap: "sag",
              neden: "Her dq dik bileşeni aynı yöne (çubuktan uzağa) katar."
            },
            {
              metin: "Yarım çemberin merkezinde: simetri eksenine dik bileşen.",
              cevap: "sol",
              neden: "Simetri eksenine göre karşılıklı parçaların dik bileşenleri zıt."
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
            "Yöntem: dq seç (dq = λ dx), dE = k dq / r², simetriyle götürülen bileşenleri çıkar, kalanı integrale.",
            "*Linear charge density* λ = Q/L; r çoğu zaman x'e bağlıdır, sabit değildir.",
            "Halka, ekseninde: E_x = kQx/(x² + R²)^(3/2); merkezde 0, x ≫ R'de kQ/x², maksimum x = R/√2'de (≈ 0,385 kQ/R²).",
            "Yarım çember, merkezde: E = 2kλ/R (simetri ekseni boyunca).",
            "Sonlu çubuk, aynı doğruda: E = kQ/(a(a + L)); orta dikmede: E = kQ/(y√(y² + L²/4)).",
            "Sonsuz tel: E = 2kλ/r = λ/(2πε₀r), tele dik; çubuk bu limite yakında, nokta yüke uzakta yaklaşır.",
            "Sınırları yaz, önce integrali al, sonra sınırları yerine koy.",
            "Silindirik simetride dq integrali yerine Gauss yasasını kullan (8.6)."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A thin ring of radius R carries a uniformly distributed total charge Q. What is the magnitude of the electric field on the axis of the ring at a distance x = R from its center?",
      opts: ["kQ / R²", "kQ / (√2 R²)", "kQ / (2√2 R²)", "kQ / (2R²)"],
      a: 2,
      why: "E = kQx / (x² + R²)^(3/2); x = R için kQR / (2R²)^(3/2) = kQ / (2√2 R²). kQ/R² tüm yük R kadar uzakta ve aynı yönde sanmak; kQ/(2R²) cos θ çarpanını unutmak (kQ/r², r² = 2R²); kQ/(√2 R²) ise r yerine R alıp cos 45° çarpmak."
    },
    {
      q: "A thin rod of length 0.40 m carries a uniformly distributed charge of 2.0 nC. The table gives the magnitude of the electric field at several points on the rod's perpendicular bisector, at distance y from the rod. Which of the following is the best conclusion from the data?",
      opts: [
        "E is proportional to 1/y at every distance shown, as for an infinite line",
        "E is nearly independent of y",
        "E increases as y increases",
        "At large y the field falls roughly as 1/y², so far from the rod it behaves like a point charge"
      ],
      a: 3,
      why: "E·y sabit değil (80, 50, 28), yani her yerde 1/y değil. y = 0,30 → 0,60 m: E 166'dan 47'ye düşüyor, oran ≈ 3,5 ≈ 4: 1/y² davranışı (nokta yük). E·y² uzakta ≈ sabite (18) yaklaşıyor.",
      fig: {
        type: "table",
        head: ["y (m)", "E (N/C)"],
        rows: [
          ["0.10", "805"],
          ["0.30", "166"],
          ["0.60", "47"]
        ],
        caption: "Field on the perpendicular bisector"
      }
    },
    {
      q: "A thin wire bent into a semicircle of radius R carries a uniform linear charge density λ. What is the magnitude of the electric field at the center of the semicircle?",
      opts: ["2kλ/R", "kλ/R", "πkλ/R", "0"],
      a: 0,
      why: "dE = kλR dθ / R², simetri eksenine dik bileşenler götürülür; kalan sin θ bileşeninin ∫₀^π sin θ dθ = 2 olması E = 2kλ/R verir. πkλ/R = kQ/R² (bütün yük R uzaklıkta, yön yok sayılmış); kλ/R integrali 1 sanmak; 0 ise simetriyi gereğinden fazla uygulamak (yalnız dik bileşen sıfırlanır)."
    },
    {
      q: "A thin rod of length L carries a uniformly distributed total charge Q. It lies along the x-axis from x = 0 to x = L. What is the magnitude of the electric field at the point x = L + a on the axis?",
      opts: ["kQ / a²", "kQ / (a(L + a))", "kQ / (L + a)²", "kQ / (aL)"],
      a: 1,
      why: "E = kλ ∫ dx′/(L + a − x′)² (0'dan L'ye) = kλ[1/a − 1/(L + a)] = kλL / (a(L + a)) = kQ / (a(L + a)). kQ/a² bütün yükü en yakın uca koymak; kQ/(L + a)² en uzak uca koymak. Doğru cevap ikisinin arasında."
    },
    {
      q: "An infinitely long straight wire carries a uniform linear charge density λ = 5.0 nC/m. What is the magnitude of the electric field at a distance of 0.30 m from the wire?",
      opts: ["150 N/C", "300 N/C", "500 N/C", "1000 N/C"],
      a: 1,
      why: "E = 2kλ/r = 2(9,0×10⁹)(5,0×10⁻⁹) / 0,30 = 90 / 0,30 = 300 N/C. 150 N/C faktör 2'yi unutmak (kλ/r); 500 ve 1000 N/C ise 1/r yerine 1/r² kullanmak."
    }
  ]
};
