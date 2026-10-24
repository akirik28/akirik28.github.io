/* Kitpath not defteri · pc603 · 6.4 Açısal Momentumun Korunumu. Kaynak: kaynak/ced-physc.md (Unit 6, Topic 6.4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc603",
  amac: "Bu konu açısal momentumun ne zaman korunduğunu anlatıyor: sisteme dışarıdan net tork gelmiyorsa toplam L değişmez. Patenci, dönen tabla ve pivotlu çubuğa çarpan kil topu örneklerinde ω, I ve enerjinin nasıl değiştiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "L ne zaman korunur?",
      kisa: "Net dış tork sıfırsa toplam L sabittir; iç torklar birbirini götürür.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🔒",
              terim: "Conservation of angular momentum",
              tr: "açısal momentumun korunumu",
              tanim: "Sisteme net dış tork etki etmiyorsa toplam L sabittir: L_i = L_f. Parçaların L'lerini hep aynı eksene göre topla.",
              ornek: "Uzayda dönen astronotun kolunu açması toplam L'yi değiştirmez."
            },
            {
              ikon: "🧩",
              terim: "System choice",
              tr: "sistem seçimi",
              tanim: "L'yi yalnızca çevreyle etkileşim değiştirir. İki cisim birbirine eşit ve zıt açısal itme verir; ikisini sisteme alırsan L korunur.",
              ornek: "Kil topu + çubuk sisteminde pivot kuvvetinin pivota göre torku sıfırdır."
            }
          ]
        },
        {
          tip: "formul",
          parcalar: [
            { t: "ΣL_i = ΣL_f", alt: "net dış tork = 0" },
            "|",
            { t: "I₁ω₁ = I₂ω₂", alt: "tek eksen" },
            "|",
            { t: "ΔL = ∫τ_dış dt", alt: "dış tork varsa" }
          ],
          aciklama: "Rigid olmayan sistem kütlesini eksene yaklaştırıp uzaklaştırarak I'yı ve ω'yı değiştirebilir; L değişmez. ✍️ Sınavda böyle yaz: *No net external torque acts on the system, so its angular momentum is conserved.*"
        }
      ]
    },
    {
      baslik: "Patenci: I küçülür, ω büyür",
      kisa: "L sabitken I yarıya inerse ω iki katına çıkar; K da artar.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "L = Iω = 12 kg·m²/s sabit",
          xlabel: "I (kg·m²)",
          ylabel: "ω (rad/s)",
          xmax: 4,
          ymax: 14,
          xticks: [
            { v: 1, label: "1" },
            { v: 1.5, label: "1,5" },
            { v: 2, label: "2" },
            { v: 3, label: "3" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" },
            { v: 12, label: "12" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0.9, 13.333], [1, 12], [1.1, 10.909], [1.2, 10], [1.3, 9.231], [1.4, 8.571],
                [1.5, 8], [1.6, 7.5], [1.7, 7.059], [1.8, 6.667], [1.9, 6.316], [2, 6],
                [2.1, 5.714], [2.2, 5.455], [2.3, 5.217], [2.4, 5], [2.5, 4.8], [2.6, 4.615],
                [2.7, 4.444], [2.8, 4.286], [2.9, 4.138], [3, 4], [3.1, 3.871], [3.2, 3.75],
                [3.3, 3.636], [3.4, 3.529], [3.5, 3.429], [3.6, 3.333], [3.7, 3.243], [3.8, 3.158],
                [3.9, 3.077], [4, 3]
              ],
              renk: 0
            },
            {
              id: "p3",
              tip: "nokta",
              x: 3,
              y: 4,
              renk: 1,
              etiket: "kollar açık",
              kilavuz: true,
              gizli: true
            },
            {
              id: "p15",
              tip: "nokta",
              x: 1.5,
              y: 8,
              renk: 2,
              etiket: "kollar yakın",
              kilavuz: true,
              gizli: true
            },
            { id: "tk", tip: "yazi", x: 2.8, y: 11.5, metin: "K: 24 J → 48 J", gizli: true }
          ],
          durumlar: [
            {
              metin: "Patencide dış tork yok (sürtünmesiz buz), L = Iω sabit. ω = 12/I: I küçüldükçe ω büyür."
            },
            {
              metin: "Kollar açık: I = 3 kg·m², ω = 4 rad/s. K = ½Iω² = ½ × 3 × 16 = 24 J.",
              goster: [
                "p3"
              ]
            },
            {
              metin: "Kollar gövdeye yakın: I = 1,5 kg·m² (yarı), ω = 8 rad/s (iki kat). K = ½ × 1,5 × 64 = 48 J.",
              goster: [
                "p15"
              ]
            },
            {
              metin: "K = L²/(2I) olduğundan I yarıya inince ==K iki katına çıkar==. Fazla enerjiyi patencinin kasları verir.",
              goster: [
                "tk"
              ]
            },
            {
              metin: "✍️ Sınavda böyle yaz: *L = Iω is constant, so when I decreases, ω increases; the kinetic energy increases because the skater does work.*"
            }
          ]
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 12, sonek: " kg·m²/s", etiket: "L: önce ve sonra aynı" },
            { deger: 8, sonek: " rad/s", etiket: "ω kollar yakınken (başta 4)" },
            { deger: 48, sonek: " J", etiket: "K kollar yakınken (başta 24)" }
          ]
        },
        {
          tip: "tuzak",
          baslik: "L korunur, K korunmaz",
          metin: "Patenci kollarını çekince ω ve K iki katına çıkar (24 J → 48 J). Fazla enerji kasların yaptığı iç işten gelir.",
          yanlis: "L korunduğu için dönme kinetik enerjisi de korunur.",
          dogru: "L = Iω sabit; K = L²/(2I) ise I ile ters orantılı değişir."
        }
      ]
    },
    {
      baslik: "Çarpışma: pivotlu çubuğa kil topu",
      kisa: "Pivot etrafında L'yi koru; sonra enerji korunumuyla sallanmayı bul.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "Kil topu m = 1 kg, v = 7 m/s; çubuk M = 3 kg, L = 1,0 m, üst ucundan pivotlu",
          durum: "Dikey asılı çubuğun alt ucuna 7 m/s ile yatay gelen kil topu yapışıyor. Çarpışmadan hemen sonra ω'yı, kaybolan kinetik enerjiyi ve sistemin pivot etrafında en çok kaç dereceye kadar sallanacağını bul.",
          adimlar: [
            "Pivot etrafında L korunur (pivot kuvveti pivottan geçer, tork yapmaz): L_i = mvL = 1 × 7 × 1,0 = 7 kg·m²/s.",
            "Çarpışma sonrası I = ML²/3 + mL² = 1 + 1 = 2 kg·m².",
            "L_i = L_f = Iω → ω = 7/2 = 3,5 rad/s.",
            "Enerji: K_i = ½(1)(49) = 24,5 J; K_f = ½(2)(3,5)² = 12,25 J. Yarısı kaybolur (yapışık çarpışma).",
            "Sallanma: K_f = U artışı → 12,25 = g L (M/2 + m)(1 − cosφ) = 24,5(1 − cosφ) → cosφ = 0,5 → φ = 60°.",
            "Kontrol: doğrusal momentum 7 kg·m/s iken çarpışmadan sonra Mω(L/2) + mωL = 5,25 + 3,5 = 8,75 kg·m/s; fark pivotun dış kuvvetidir.",
            "✍️ Sınavda böyle yaz: *Angular momentum about the pivot is conserved in the collision, but linear momentum is not because the pivot exerts an external force.*"
          ],
          sonuc: "ω = 3,5 rad/s; K: 24,5 J → 12,25 J; φ = 60°"
        },
        {
          tip: "tuzak",
          baslik: "Pivotlu çubukta p korunmaz",
          metin: "Pivot çarpışma sırasında dışarıdan kuvvet uygular, doğrusal momentum değişir. Ama bu kuvvetin pivota göre torku sıfırdır, L korunur.",
          yanlis: "mv = (m + M)v' yazıp doğrusal momentumu korumak.",
          dogru: "Pivot etrafında mvL = Iω yaz; sonra enerji korunumuyla sallanmayı bul."
        }
      ]
    },
    {
      baslik: "Ne korunur, ne korunmaz?",
      kisa: "Önce dış tork var mı diye bak; L korunurken p ve K korunmayabilir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Dört olay, üç nicelik",
          head: [
            "Olay",
            "L (eksen ya da pivot etrafında)",
            "Doğrusal p",
            "K"
          ],
          rows: [
            [
              "Patenci kollarını çeker",
              "korunur",
              "—",
              "artar (iç iş)"
            ],
            [
              "Kil topu pivotlu çubuğa yapışır",
              "korunur",
              "korunmaz (pivot kuvveti)",
              "azalır"
            ],
            [
              "Dönen tablaya kütle bırakılır",
              "korunur",
              "korunmaz (eksen kuvveti)",
              "azalır"
            ],
            [
              "Dönen tabla frenle durdurulur",
              "korunmaz (dış tork)",
              "—",
              "azalır"
            ]
          ],
          vurgu: 1,
          not: "✍️ Sınavda böyle yaz: *Angular momentum is conserved because the net external torque on the system is zero.*"
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🔒",
            baslik: "L korunur",
            maddeler: [
              "Net dış tork sıfır",
              "İç etkileşimler"
            ]
          },
          sag: {
            ikon: "🔓",
            baslik: "L değişir",
            maddeler: [
              "Net dış tork var",
              "Çevreyle açısal itme alışverişi"
            ]
          },
          oyun: [
            {
              metin: "Buzda dönen patenci kollarını açıyor.",
              cevap: "sol",
              neden: "Kuvvetler iç kuvvet; dış tork yok."
            },
            {
              metin: "Dönen tabla, elin sürtünmesiyle yavaşlatılıyor.",
              cevap: "sag",
              neden: "El dışarıdan sürtünme torku uyguluyor."
            },
            {
              metin: "Tabla (I = 4 kg·m², 6 rad/s) üzerine 1 m yarıçapta 2 kg'lık kütle bırakılıyor.",
              cevap: "sol",
              neden: "L = 24 sabit, I = 6 olur: ω = 4 rad/s; K 72 J'den 48 J'e düşer."
            },
            {
              metin: "Dikey düzlemde sallanan çubuk, pivot etrafında yerçekimi torkuyla hızlanıyor.",
              cevap: "sag",
              neden: "Yerçekimi dış tork uygular; çubuğun L'si değişir."
            },
            {
              metin: "Uzayda tek başına dönen astronot kolunu uzatıyor.",
              cevap: "sol",
              neden: "Dış tork yok; I artar, ω azalır."
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
            "Net dış tork sıfırsa toplam L sabittir: ΣL_i = ΣL_f; L'leri hep aynı eksene göre hesapla.",
            "İki cismin birbirine verdiği açısal itme eşit ve zıttır (Newton'un 3. yasası); iki cismi sisteme almak L'yi korunur kılar.",
            "*Rigid olmayan* sistem I'yı değiştirerek ω'yı değiştirir: I₁ω₁ = I₂ω₂.",
            "Patenci kollarını çekince ω ve K artar; fazla enerji iç işten gelir. L korunur, K korunmaz.",
            "Pivotlu çubuğa çarpışmada pivot etrafında L'yi koru; doğrusal momentum korunmaz.",
            "Yapışık çarpışmada K azalır; sonra sallanma için enerji korunumunu ayrı yaz.",
            "Dış tork varsa (fren, yerçekimi) L değişir: ΔL = ∫τ_dış dt.",
            "Gerekçede yalnızca 'L korunur' yazma; dış torkun sıfır olduğunu da belirt."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A skater spins at 2 rad/s with arms extended, so her rotational inertia is 6 kg·m². She pulls in her arms, reducing her rotational inertia to 2 kg·m². Friction is negligible. Which of the following describes her new angular speed and rotational kinetic energy?",
      opts: [
        "6 rad/s; kinetic energy is unchanged",
        "6 rad/s; kinetic energy increases",
        "3 rad/s; kinetic energy decreases",
        "12 rad/s; kinetic energy increases"
      ],
      a: 1,
      why: "L = Iω sabit: 6 × 2 = 2 × ω → ω = 6 rad/s. K = ½Iω²: 12 J'den 36 J'e çıkar (iç iş). A en çekici yanlış şık: L korunurken K'nin de korunduğunu sanmak."
    },
    {
      q: "A uniform rod of mass 3 kg and length 1 m hangs from a frictionless pivot at its top end. A 1 kg lump of clay moving horizontally at 4 m/s strikes the bottom end of the rod and sticks to it. The rotational inertia of the rod about the pivot is ML²/3. What is the angular speed of the system just after the collision?",
      opts: [
        "1 rad/s",
        "4 rad/s",
        "2 rad/s",
        "1.33 rad/s"
      ],
      a: 2,
      why: "Pivot etrafında L korunur: mvL = 4 = Iω, I = ML²/3 + mL² = 2 kg·m² → ω = 2 rad/s. A en çekici yanlış şık: doğrusal momentumu koruyup (1 × 4)/(3 + 1) = 1 m/s bulmak; pivot dış kuvvet uygular, p korunmaz."
    },
    {
      q: "A horizontal disk with rotational inertia 3 kg·m² spins freely about its center at 8 rad/s. A 1 kg lump of clay is dropped onto the disk and sticks 1 m from the center. What is the angular speed of the disk just after?",
      opts: [
        "6 rad/s",
        "4 rad/s",
        "7 rad/s",
        "8 rad/s"
      ],
      a: 0,
      why: "L sabit: 3 × 8 = (3 + 1 × 1²)ω → ω = 6 rad/s. D en çekici yanlış şık: kil topunun I'ya katkısını (mr²) unutmak."
    },
    {
      q: "On a frictionless horizontal table, a lump of clay strikes and sticks to a rod that is free to rotate about a fixed pivot at one end. Which of the following is conserved in this collision?",
      opts: [
        "Linear momentum and kinetic energy",
        "Linear momentum only",
        "Kinetic energy only",
        "Angular momentum about the pivot only"
      ],
      a: 3,
      why: "Pivot dış kuvvet uygular, doğrusal momentum korunmaz; çarpışma yapışık (inelastik) olduğundan K de korunmaz. Pivot etrafında dış tork sıfırdır, L korunur. B en çekici yanlış şık: serbest cisimlerdeki momentum korunumu alışkanlığı."
    },
    {
      q: "Disk 1 (rotational inertia 2 kg·m²) spins at 9 rad/s about a vertical axle. It is dropped onto disk 2 (rotational inertia 4 kg·m²), which is at rest on the same axle, and the two stick together. What fraction of the initial rotational kinetic energy remains after they stick?",
      opts: [
        "1/3",
        "1/2",
        "2/3",
        "1"
      ],
      a: 0,
      why: "ω = 2 × 9 / 6 = 3 rad/s; K_i = ½(2)(81) = 81 J, K_f = ½(6)(9) = 27 J; oran 1/3 (= I₁/(I₁ + I₂)). D en çekici yanlış şık: L korunduğu için K'nin de korunduğunu sanmak."
    }
  ]
};
