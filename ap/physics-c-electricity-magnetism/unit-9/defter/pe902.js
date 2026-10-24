/* Kitpath not defteri · pe902 · 9.2 Elektrik Potansiyeli
   Kaynak: defter-araclari/kaynak/ced-physc.md (Unit 9, Topic 9.2). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pe902",
  amac: "Bu konu elektrik potansiyelini anlatıyor: birim yük başına enerji olan V'yi, nokta yüklerin potansiyelini, V ile E arasındaki ilişkiyi ve eşpotansiyel çizgileri. Potansiyeli skaler toplamayı ve alanı eğimden bulmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Potansiyel nedir?",
      kisa: "V, noktaya ait birim yük başına enerjidir; U_E ise koyduğun yüke bağlıdır.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚡",
              terim: "Electric potential",
              tr: "elektrik potansiyeli",
              tanim: "Bir noktada birim yük başına düşen potansiyel enerji: V = U_E/q. Birimi volt, 1 V = 1 J/C.",
              ornek: "1,5 V'luk pil her coulomb'a 1,5 J, 9 V'luk pil 9 J enerji verir."
            },
            {
              ikon: "↕️",
              terim: "Potential difference",
              tr: "potansiyel farkı",
              tanim: "Test yükü iki nokta arasında taşınırken birim yük başına enerji değişimi: ΔV = ΔU_E/q.",
              ornek: "ΔV = 12 V olan iki nokta arasında +2 C'luk yükün U_E değişimi 24 J'dür."
            },
            {
              ikon: "🔌",
              terim: "Battery",
              tr: "pil",
              tanim: "Kimyasal süreçlerle uçları arasında sabit bir potansiyel farkı sağlar.",
              ornek: "Araba aküsü 12 V'tur ve çok büyük akım verebilir; 9 V'luk pil bu kadar veremez."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "⚡",
            baslik: "Potansiyel (V)",
            maddeler: [
              "Birim yük başına enerji",
              "Birimi volt (J/C)",
              "Test yükünden bağımsız",
              "Yük koymasan da vardır"
            ]
          },
          sag: {
            ikon: "🔋",
            baslik: "Potansiyel enerji (U_E)",
            maddeler: [
              "Yükün kendi enerjisi",
              "Birimi joule",
              "U_E = qV; q'ya bağlı",
              "q'nun işareti U_E'nin işaretini çevirir"
            ]
          },
          oyun: [
            { metin: "Birimi J/C.", cevap: "sol", neden: "Volt = joule/coulomb." },
            {
              metin: "Aynı noktaya q = −2 μC koyunca işareti değişir.",
              cevap: "sag",
              neden: "U_E = qV; q negatifse U_E ters işaretli olur. V ise yük koymasan da aynıdır."
            },
            {
              metin: "Noktada hiç yük olmasa da tanımlıdır.",
              cevap: "sol",
              neden: "V uzayın bir özelliğidir; kaynak yükler onu üretir."
            },
            {
              metin: "Yükü iki katına çıkarırsan iki katına çıkar.",
              cevap: "sag",
              neden: "q iki katına çıkarsa U_E iki katına çıkar; V değişmez."
            }
          ]
        },
        {
          tip: "liste",
          baslik: "Sınavda böyle yaz",
          maddeler: [
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: tanım",
              metin: "\"Electric potential is the electric potential energy per unit charge of a test charge, V = U_E/q.\""
            },
            {
              ikon: "✍️",
              baslik: "Sınavda böyle yaz: fark",
              metin: "\"The potential difference is ΔV = V_b − V_a = ΔU_E/q.\""
            }
          ]
        }
      ]
    },
    {
      baslik: "Nokta yükler ve dağılımlar",
      kisa: "Nokta yük için V = kq/r; birden çok yükte skaler topla.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "V" },
            "=",
            { t: "k q / r", alt: "tek nokta yük" },
            "→",
            { t: "V" },
            "=",
            { t: "k Σ qᵢ/rᵢ", alt: "çok yük: skaler topla" }
          ],
          aciklama: "Sürekli dağılımda V = (1/4πε₀)∫dq/r. İşaret q'dan gelir: + yükün çevresinde V > 0, − yükün çevresinde V < 0. Sonsuzda V = 0."
        },
        {
          tip: "grafik",
          baslik: "Doğru üzerinde V(x): +4,0 nC (x = 0) ve −2,0 nC (x = 0,6 m)",
          xlabel: "x (m)",
          ylabel: "V (volt)",
          xmax: 16,
          ymax: 12,
          xticks: [
            { v: 4, label: "0,4" },
            { v: 6, label: "0,6" },
            { v: 12, label: "1,2" },
            { v: 16, label: "1,6" }
          ],
          yticks: [
            { v: 6, label: "0" },
            { v: 9, label: "+150" },
            { v: 12, label: "+300" },
            { v: 3, label: "−150" },
            { v: 0, label: "−300" }
          ],
          ogeler: [
            { id: "sifir", tip: "cizgi", from: [0, 6], to: [16, 6], renk: 3, kesik: true },
            { id: "qa", tip: "nokta", x: 0, y: 6, renk: 1, etiket: "+4,0 nC" },
            { id: "qb", tip: "nokta", x: 6, y: 6, renk: 2, etiket: "−2,0 nC" },
            {
              id: "v1",
              tip: "egri",
              noktalar: [
                [1.2, 12], [1.4, 11.143], [1.7, 10.235], [2, 9.6], [2.5, 8.88], [3, 8.4],
                [4, 7.8], [5, 7.44], [6, 7.2], [8, 6.9], [10, 6.72], [12, 6.6],
                [14, 6.514], [16, 6.45]
              ],
              renk: 1,
              etiket: "V₁",
              gizli: true
            },
            {
              id: "v2a",
              tip: "egri",
              noktalar: [
                [1, 5.28], [2, 5.1], [3, 4.8], [4, 4.2], [4.5, 3.6], [5, 2.4],
                [5.2, 1.5], [5.4, 0]
              ],
              renk: 2,
              gizli: true
            },
            {
              id: "v2b",
              tip: "egri",
              noktalar: [
                [6.6, 0], [6.8, 1.5], [7, 2.4], [7.5, 3.6], [8, 4.2], [9, 4.8],
                [10, 5.1], [12, 5.4], [16, 5.64]
              ],
              renk: 2,
              etiket: "V₂",
              gizli: true
            },
            {
              id: "sa",
              tip: "egri",
              noktalar: [
                [1.2, 11.25], [1.5, 10], [2, 8.7], [2.5, 7.851], [3, 7.2], [3.5, 6.617],
                [4, 6], [4.5, 5.2], [5, 3.84], [5.2, 2.885], [5.4, 1.333]
              ],
              renk: 0,
              gizli: true
            },
            {
              id: "sb",
              tip: "egri",
              noktalar: [
                [6.6, 1.091], [6.8, 2.559], [7, 3.429], [7.5, 4.56], [8, 5.1], [9, 5.6],
                [10, 5.82], [11, 5.935], [12, 6], [14, 6.064], [16, 6.09]
              ],
              renk: 0,
              etiket: "V = V₁ + V₂",
              gizli: true
            },
            { id: "z1", tip: "nokta", x: 4, y: 6, renk: 3, etiket: "V = 0", gizli: true },
            { id: "z2", tip: "nokta", x: 12, y: 6, renk: 3, etiket: "V = 0", gizli: true }
          ],
          durumlar: [
            {
              metin: "+4,0 nC yükü x = 0'da, −2,0 nC yükü x = 0,6 m'de. Her yükün potansiyelini ayrı çizip skaler toplayacağız."
            },
            {
              metin: "+4,0 nC tek başına: V₁ = kq/x = 36/x volt. Her yerde pozitif, uzaklaştıkça sönüyor.",
              goster: ["v1"]
            },
            {
              metin: "−2,0 nC tek başına: V₂ = −18/|x − 0,6| volt. Her yerde negatif.",
              goster: ["v2a", "v2b"]
            },
            {
              metin: "Toplam V = V₁ + V₂: sayıları işaretleriyle topla, yön yok. Eğri iki yükün arasında artıdan eksiye iner.",
              gizle: ["v1", "v2a", "v2b"],
              goster: ["sa", "sb"]
            },
            {
              metin: "V = 0 olan iki nokta: 36/x = 18/(0,6 − x) → x = 0,4 m ve 36/x = 18/(x − 0,6) → x = 1,2 m.",
              goster: ["z1", "z2"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Halka ekseninde potansiyel",
          durum: "R = 0,30 m yarıçaplı halka düzgün dağılmış Q = +2,0 nC taşıyor. Eksende, merkezden x = 0,40 m uzaktaki noktanın potansiyelini bul.",
          adimlar: [
            "V = (1/4πε₀)∫dq/r ile başla.",
            "Halkanın her parçası bu noktaya aynı uzaklıkta: r = √(R² + x²) = √(0,09 + 0,16) = 0,50 m. r sabit olduğundan integralin dışına çıkar.",
            "∫dq = Q olduğundan V = kQ/r = (9×10⁹)(2,0×10⁻⁹)/0,50.",
            "V = 18/0,50 = 36 V. Skaler: yön yok, parçaları düz toplarsın.",
            "Kontrol: merkezde (x = 0) r = R olur ve V = kQ/R = 60 V. Yarım çember yayın merkezinde de her dq, R uzaklığında: V = kQ/R."
          ],
          sonuc: "V = 36 V (eksende x = 0,40 m'de)"
        },
        {
          tip: "tuzak",
          baslik: "V = 0 olan yerde E sıfır mı?",
          metin: "Hayır. Grafikteki x = 0,4 m noktasında V = 0 ama iki yükün alanı aynı yöndedir: E = 225 + 450 = 675 N/C (+x yönünde). Alan V'nin değerine değil, eğimine bağlıdır.",
          yanlis: "V = 0 ise E = 0 olmalı.",
          dogru: "E = −dV/dx: alan V'nin eğimini izler. Sınavda böyle yaz: \"V = 0 at this point, but E ≠ 0 because the fields of the two charges point in the same direction.\""
        }
      ]
    },
    {
      baslik: "Alan ve potansiyel",
      kisa: "E_x = −dV/dx ve ΔV = −∫E·dr; alan azalan potansiyel yönünü gösterir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [
            { t: "E_x" },
            "=",
            { t: "−dV/dx", alt: "V–x grafiğinin eğiminin negatifi" },
            "|",
            { t: "ΔV" },
            "=",
            { t: "−∫ E·dr", alt: "a'dan b'ye" }
          ],
          aciklama: "Düzgün alanda ΔV = −E·Δx. Eksi işareti: alan, V'nin azaldığı yönü gösterir. Kalkülüs: türev eğimi, integral alanı verir."
        },
        {
          tip: "grafik",
          baslik: "V–x grafiğinden alan okumak",
          xlabel: "x (cm)",
          ylabel: "V (volt)",
          xmax: 7,
          ymax: 12,
          xticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          ogeler: [
            { id: "s1", tip: "cizgi", from: [0, 10], to: [2, 6], renk: 0 },
            { id: "s2", tip: "cizgi", from: [2, 6], to: [4, 6], renk: 0 },
            { id: "s3", tip: "cizgi", from: [4, 6], to: [6, 8], renk: 0 },
            { id: "e1", tip: "ok", from: [0.4, 1.5], to: [1.6, 1.5], renk: 1, gizli: true },
            { id: "t1", tip: "yazi", x: 1, y: 2.4, metin: "E_x = +200 V/m", renk: 1, gizli: true },
            { id: "t2", tip: "yazi", x: 3, y: 2.4, metin: "E_x = 0", gizli: true },
            { id: "e3", tip: "ok", from: [5.6, 1.5], to: [4.4, 1.5], renk: 2, gizli: true },
            { id: "t3", tip: "yazi", x: 5, y: 2.4, metin: "E_x = −100 V/m", gizli: true }
          ],
          durumlar: [
            {
              metin: "Bir doğru üzerinde V(x) üç bölgeden oluşuyor. Her bölgede alan, eğimin negatifidir: E_x = −dV/dx."
            },
            {
              metin: "0–2 cm: V, 10 V'tan 6 V'a düşüyor. Eğim = −4 V / 2 cm = −200 V/m, yani E_x = +200 V/m: alan +x yönünde, V'nin azaldığı yönde.",
              goster: ["e1", "t1"]
            },
            {
              metin: "2–4 cm: V sabit, eğim 0. Alan yok: E_x = 0.",
              goster: ["t2"]
            },
            {
              metin: "4–6 cm: V, 6 V'tan 8 V'a artıyor. Eğim = +2 V / 2 cm = +100 V/m, yani E_x = −100 V/m: alan −x yönünde, yine V'nin azaldığı yönde.",
              goster: ["e3", "t3"]
            }
          ]
        },
        {
          tip: "ornek",
          baslik: "Sonsuz telde iki yarıçap arası ΔV",
          durum: "Sonsuz uzun telde E = λ/(2πε₀r) = 2kλ/r (radyal, dışa). λ = +2,0 nC/m iken R₁ = 1,0 cm'den R₂ = 4,0 cm'e ΔV = V(R₂) − V(R₁) kaç volttur?",
          adimlar: [
            "ΔV = −∫E·dr ile başla; alan ve yer değiştirme aynı yönde (radyal), nokta çarpım E dr olur.",
            "2kλ = 2(9×10⁹)(2,0×10⁻⁹) = 36 V; yani E = 36/r (r metre).",
            "Önce integrali al, sınırları sonra koy: ΔV = −36 ∫ dr/r = −36 [ln r], r'nin R₁'den R₂'ye gitmesiyle.",
            "Sınırları yaz: ΔV = −36 (ln R₂ − ln R₁) = −36 ln(R₂/R₁) = −36 ln 4.",
            "ln 4 = 1,386 olduğundan ΔV = −49,9 V ≈ −50 V. Eksi: dışarı çıkarken V azalır."
          ],
          sonuc: "ΔV = −36 ln 4 ≈ −50 V"
        },
        {
          tip: "tuzak",
          baslik: "İntegralde sınır ve değişken hatası",
          metin: "2025 sınavında en sık görülen hatalar: sınırları yazmamak, integrali alıp sınırları aynı adımda koymak ve E(r) içindeki r değişkenini R₁ gibi bir sabitle değiştirmek.",
          yanlis: "ΔV = −E(R₁)(R₂ − R₁) yazmak, yani r'yi sabit saymak.",
          dogru: "r değişken kalır: ∫(36/r)dr = 36 ln r al, sonra R₁ ve R₂'yi koy. Sınavda böyle yaz: \"ΔV = −∫E dr from R₁ to R₂ = −2kλ ln(R₂/R₁).\""
        }
      ]
    },
    {
      baslik: "Eşpotansiyeller",
      kisa: "Eşpotansiyel yüzeyler alana diktir; alan, V'nin azaldığı yönü gösterir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "+4,0 nC yükün eşpotansiyelleri (60 V'luk adımlar)",
          xlabel: "1 birim = 6 cm",
          ylabel: "",
          xmax: 16,
          ymax: 11,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "q", tip: "nokta", x: 8, y: 5.5, renk: 1, etiket: "+4,0 nC" },
            {
              id: "c0",
              tip: "egri",
              noktalar: [
                [9.667, 5.5], [9.646, 5.761], [9.585, 6.015], [9.485, 6.257], [9.348, 6.48], [9.179, 6.679],
                [8.98, 6.848], [8.757, 6.985], [8.515, 7.085], [8.261, 7.146], [8, 7.167], [7.739, 7.146],
                [7.485, 7.085], [7.243, 6.985], [7.02, 6.848], [6.821, 6.679], [6.652, 6.48], [6.515, 6.257],
                [6.415, 6.015], [6.354, 5.761], [6.333, 5.5], [6.354, 5.239], [6.415, 4.985], [6.515, 4.743],
                [6.652, 4.52], [6.821, 4.321], [7.02, 4.152], [7.243, 4.015], [7.485, 3.915], [7.739, 3.854],
                [8, 3.833], [8.261, 3.854], [8.515, 3.915], [8.757, 4.015], [8.98, 4.152], [9.179, 4.321],
                [9.348, 4.52], [9.485, 4.743], [9.585, 4.985], [9.646, 5.239], [9.667, 5.5]
              ],
              renk: 0,
              gizli: true
            },
            {
              id: "c1",
              tip: "egri",
              noktalar: [
                [10, 5.5], [9.975, 5.813], [9.902, 6.118], [9.782, 6.408], [9.618, 6.676], [9.414, 6.914],
                [9.176, 7.118], [8.908, 7.282], [8.618, 7.402], [8.313, 7.475], [8, 7.5], [7.687, 7.475],
                [7.382, 7.402], [7.092, 7.282], [6.824, 7.118], [6.586, 6.914], [6.382, 6.676], [6.218, 6.408],
                [6.098, 6.118], [6.025, 5.813], [6, 5.5], [6.025, 5.187], [6.098, 4.882], [6.218, 4.592],
                [6.382, 4.324], [6.586, 4.086], [6.824, 3.882], [7.092, 3.718], [7.382, 3.598], [7.687, 3.525],
                [8, 3.5], [8.313, 3.525], [8.618, 3.598], [8.908, 3.718], [9.176, 3.882], [9.414, 4.086],
                [9.618, 4.324], [9.782, 4.592], [9.902, 4.882], [9.975, 5.187], [10, 5.5]
              ],
              renk: 0,
              gizli: true
            },
            {
              id: "c2",
              tip: "egri",
              noktalar: [
                [10.5, 5.5], [10.469, 5.891], [10.378, 6.273], [10.228, 6.635], [10.023, 6.969], [9.768, 7.268],
                [9.469, 7.523], [9.135, 7.728], [8.773, 7.878], [8.391, 7.969], [8, 8], [7.609, 7.969],
                [7.227, 7.878], [6.865, 7.728], [6.531, 7.523], [6.232, 7.268], [5.977, 6.969], [5.772, 6.635],
                [5.622, 6.273], [5.531, 5.891], [5.5, 5.5], [5.531, 5.109], [5.622, 4.727], [5.772, 4.365],
                [5.977, 4.031], [6.232, 3.732], [6.531, 3.477], [6.865, 3.272], [7.227, 3.122], [7.609, 3.031],
                [8, 3], [8.391, 3.031], [8.773, 3.122], [9.135, 3.272], [9.469, 3.477], [9.768, 3.732],
                [10.023, 4.031], [10.228, 4.365], [10.378, 4.727], [10.469, 5.109], [10.5, 5.5]
              ],
              renk: 0,
              gizli: true
            },
            {
              id: "c3",
              tip: "egri",
              noktalar: [
                [11.333, 5.5], [11.292, 6.021], [11.17, 6.53], [10.97, 7.013], [10.697, 7.459], [10.357, 7.857],
                [9.959, 8.197], [9.513, 8.47], [9.03, 8.67], [8.521, 8.792], [8, 8.833], [7.479, 8.792],
                [6.97, 8.67], [6.487, 8.47], [6.041, 8.197], [5.643, 7.857], [5.303, 7.459], [5.03, 7.013],
                [4.83, 6.53], [4.708, 6.021], [4.667, 5.5], [4.708, 4.979], [4.83, 4.47], [5.03, 3.987],
                [5.303, 3.541], [5.643, 3.143], [6.041, 2.803], [6.487, 2.53], [6.97, 2.33], [7.479, 2.208],
                [8, 2.167], [8.521, 2.208], [9.03, 2.33], [9.513, 2.53], [9.959, 2.803], [10.357, 3.143],
                [10.697, 3.541], [10.97, 3.987], [11.17, 4.47], [11.292, 4.979], [11.333, 5.5]
              ],
              renk: 0,
              gizli: true
            },
            {
              id: "c4",
              tip: "egri",
              noktalar: [
                [13, 5.5], [12.938, 6.282], [12.755, 7.045], [12.455, 7.77], [12.045, 8.439], [11.536, 9.036],
                [10.939, 9.545], [10.27, 9.955], [9.545, 10.255], [8.782, 10.438], [8, 10.5], [7.218, 10.438],
                [6.455, 10.255], [5.73, 9.955], [5.061, 9.545], [4.464, 9.036], [3.955, 8.439], [3.545, 7.77],
                [3.245, 7.045], [3.062, 6.282], [3, 5.5], [3.062, 4.718], [3.245, 3.955], [3.545, 3.23],
                [3.955, 2.561], [4.464, 1.964], [5.061, 1.455], [5.73, 1.045], [6.455, 0.745], [7.218, 0.562],
                [8, 0.5], [8.782, 0.562], [9.545, 0.745], [10.27, 1.045], [10.939, 1.455], [11.536, 1.964],
                [12.045, 2.561], [12.455, 3.23], [12.755, 3.955], [12.938, 4.718], [13, 5.5]
              ],
              renk: 0,
              gizli: true
            },
            { id: "l0", tip: "yazi", x: 7.658, y: 7.437, metin: "360 V", gizli: true },
            { id: "l1", tip: "yazi", x: 8.787, y: 7.661, metin: "300 V", gizli: true },
            { id: "l2", tip: "yazi", x: 10.145, y: 7.3, metin: "240 V", gizli: true },
            { id: "l3", tip: "yazi", x: 11.578, y: 6.131, metin: "180 V", gizli: true },
            { id: "l4", tip: "yazi", x: 12.98, y: 3.687, metin: "120 V", gizli: true },
            { id: "E0", tip: "ok", from: [7.047, 6.05], to: [3.237, 8.25], renk: 2, gizli: true },
            { id: "E1", tip: "ok", from: [7.157, 4.793], to: [3.787, 1.965], renk: 2, gizli: true },
            { id: "E2", tip: "ok", from: [8.285, 4.437], to: [9.424, 0.187], renk: 2, gizli: true },
            { id: "Et", tip: "yazi", x: 3.48, y: 1.708, metin: "E", renk: 2, gizli: true },
            { id: "g1", tip: "cizgi", from: [7.43, 3.934], to: [7.316, 3.621], renk: 3, gizli: true },
            { id: "g1t", tip: "yazi", x: 6.5840000000000005, y: 3.809, metin: "2 cm", gizli: true },
            { id: "g2", tip: "cizgi", from: [6.86, 2.368], to: [6.29, 0.802], renk: 3, gizli: true },
            { id: "g2t", tip: "yazi", x: 5.564, y: 1.553, metin: "10 cm", gizli: true },
            {
              id: "arc",
              tip: "egri",
              noktalar: [
                [9.25, 3.335], [9.469, 3.477], [9.673, 3.642], [9.858, 3.827], [10.023, 4.031], [10.165, 4.25],
                [10.284, 4.483], [10.378, 4.727], [10.445, 4.98], [10.486, 5.239], [10.5, 5.5]
              ],
              renk: 3,
              etiket: "ΔV = 0",
              gizli: true
            },
            {
              id: "rad",
              tip: "cizgi",
              from: [10.165, 4.25],
              to: [10.887, 3.833],
              renk: 2,
              etiket: "ΔV = −60 V",
              gizli: true
            }
          ],
          durumlar: [
            { metin: "+4,0 nC yükün çevresinde V = kq/r = 36/r volt (r metre)." },
            {
              metin: "Eşit 60 V'luk adımlarla eşpotansiyel çizgiler: 360, 300, 240, 180, 120 V. Hepsi yükü çevreleyen çemberler (r = 36/V).",
              goster: ["c0", "c1", "c2", "c3", "c4", "l0", "l1", "l2", "l3", "l4"]
            },
            {
              metin: "Alan çizgileri çemberlere dik ve dışa doğru: V'nin azaldığı yönde.",
              goster: ["E0", "E1", "E2", "Et"]
            },
            {
              metin: "Çemberler dışa doğru seyrekleşiyor: aynı 60 V'luk fark iç tarafta 2 cm'de, dış tarafta 10 cm'de oluşuyor. Dışarıda alan zayıf (E = |dV/dr|).",
              goster: ["g1", "g1t", "g2", "g2t"]
            },
            {
              metin: "Çember boyunca yürürsen ΔV = 0 ve alan yola dik: iş yok. Çemberler arasında radyal yolda ΔV = −60 V.",
              goster: ["arc", "rad"]
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "⭕",
            baslik: "Eşpotansiyel çizgi",
            maddeler: ["V her yerde aynı", "Boyunca alan bileşeni yok", "Alana dik"]
          },
          sag: {
            ikon: "➡️",
            baslik: "Alan çizgisi",
            maddeler: [
              "Pozitif yükten çıkar, negatife girer",
              "Teğeti E yönünü verir",
              "Azalan V yönünü gösterir"
            ]
          },
          oyun: [
            {
              metin: "Üzerinde yürüyen test yükünün üzerinde alan iş yapmaz.",
              cevap: "sol",
              neden: "Eşpotansiyelde ΔV = 0 olduğundan W = −qΔV = 0."
            },
            {
              metin: "Teğeti, o noktadaki alanın yönünü verir.",
              cevap: "sag",
              neden: "Alan çizgisinin teğeti E yönündedir."
            },
            {
              metin: "Eşit ΔV adımlarında sıklaşırsa alan güçlenir.",
              cevap: "sol",
              neden: "|E| = |dV/dx|: aynı ΔV daha kısa mesafede oluşuyorsa alan büyüktür."
            },
            { metin: "Pozitif yükten dışa doğru uzanır.", cevap: "sag", neden: "Alan çizgileri pozitif yükten çıkar." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Negatif yük nereye gider?",
          metin: "Pozitif yük serbest bırakılınca düşük V'ye gider. Negatif yük ise yüksek V'ye doğru ivmelenir, çünkü ona etkiyen kuvvet E'nin tersidir.",
          yanlis: "Serbest bırakılan her yük alçak potansiyele gider.",
          dogru: "Pozitif yük alçak V'ye, negatif yük yüksek V'ye gider (ikisi de kendi U_E = qV değerini azaltır). Sınavda böyle yaz: \"The field is perpendicular to the equipotentials and points toward decreasing V; a negative charge moves toward higher V.\""
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
            "*Electric potential* V = U_E/q: noktaya ait, birim yük başına enerji; birimi volt (J/C).",
            "ΔV = ΔU_E/q; pil, kimyasal süreçle sabit bir ΔV sağlar.",
            "Nokta yük: V = kq/r; çok yükte skaler topla, işareti q'dan al; sonsuzda V = 0.",
            "Sürekli dağılım: V = (1/4πε₀)∫dq/r; halka ekseninde r = √(R² + x²), örnekte 36 V.",
            "E_x = −dV/dx: alan, V–x grafiğinin eğiminin negatifidir.",
            "ΔV = −∫E·dr: integrali al, sonra sınırları koy; r değişken kalsın.",
            "V = 0 olan yerde E sıfır olmak zorunda değildir (iki yük örneğinde 675 N/C).",
            "Eşpotansiyeller alana diktir; alan azalan V yönünü gösterir; çizgiler sıklaşırsa alan güçlüdür."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A point charge Q = +4.0 nC is fixed in place. What is the electric potential at a point 0.20 m from the charge? (k = 9.0×10⁹ N·m²/C²; V = 0 at infinity)",
      opts: ["900 V", "180 V", "7.2 V", "18 V"],
      a: 1,
      why: "V = kQ/r = (9,0×10⁹)(4,0×10⁻⁹)/0,20 = 36/0,20 = 180 V. En çekici yanlış şık A: kQ/r² = 900 elektrik alanın (N/C) değeridir; potansiyel r'ye bölünür, r²'ye değil."
    },
    {
      q: "The table gives the electric potential V along the x-axis in a region where the field is uniform. What is E_x in this region?",
      fig: {
        type: "table",
        caption: "Potential along the x-axis",
        head: ["x (cm)", "0", "2", "4", "6"],
        rows: [
          ["V (V)", "12", "8", "4", "0"]
        ]
      },
      opts: ["+200 V/m", "−200 V/m", "+2.0 V/m", "−2.0 V/m"],
      a: 0,
      why: "E_x = −ΔV/Δx = −(0 − 12) V / 0,06 m = +200 V/m. Alan V'nin azaldığı yönde, yani +x'te. En çekici yanlış şık C: cm'yi metreye çevirmeyi unutmak."
    },
    {
      q: "A charge +Q and a charge −Q are a distance 2d apart. Which statement is true at the midpoint of the line joining them?",
      opts: [
        "V = 0 and E = 0",
        "V ≠ 0 and E = 0",
        "V = 0 and E ≠ 0, directed from +Q toward −Q",
        "V ≠ 0 and E ≠ 0"
      ],
      a: 2,
      why: "Orta noktada V = kQ/d − kQ/d = 0 (skaler toplam). İki alan da +Q'dan −Q'ya doğru olduğundan toplanır: E = 2kQ/d² ≠ 0. En çekici yanlış şık A: V = 0 olunca E = 0 sanmak."
    },
    {
      q: "The table shows the electric potential at four points in a region of space. A positive test charge is moved from point B to point C along some path. Which statement is correct?",
      fig: {
        type: "table",
        caption: "Electric potential at four points",
        head: ["Point", "A", "B", "C", "D"],
        rows: [
          ["V (V)", "30", "10", "10", "50"]
        ]
      },
      opts: [
        "The electric field must be zero everywhere along the path.",
        "The net work done by the electric field is zero, whatever the path.",
        "The net work done by the electric field is positive because the charge is positive.",
        "The work done by the electric field depends on the path taken."
      ],
      a: 1,
      why: "V_B = V_C olduğundan W = −qΔV = 0 ve elektrik kuvveti korunumlu olduğundan yoldan bağımsızdır. En çekici yanlış şık A: eşpotansiyel boyunca alan bileşeni sıfırdır, alanın kendisi değil."
    },
    {
      q: "In a certain region the electric potential is V(x) = 3x² − 2x, where V is in volts and x in meters. What is E_x at x = 1.0 m?",
      opts: ["+4 V/m", "+1 V/m", "−1 V/m", "−4 V/m"],
      a: 3,
      why: "E_x = −dV/dx = −(6x − 2); x = 1,0 m'de −4 V/m. En çekici yanlış şık B: V(1) = 1 V değerini alan sanmak; alan potansiyelin değeri değil türevidir."
    }
  ]
};
