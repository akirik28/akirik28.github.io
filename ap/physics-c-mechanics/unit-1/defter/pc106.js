/* Kitpath not defteri · pc106 · 1.1–1.2 Konum, Yer Değiştirme ve Hız
   Kaynak: ap-videolar/src/episodes/pc106 (script.ts + notes.md) ve ders sunumu (Bölüm 2: Motion Along a Straight Line). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "pc106",
  amac: "Bu konu düz bir çizgide hareketi anlatmanın ilk adımı: konum, yer değiştirme, hız ve sürat. Yer değiştirme ile yolun, ortalama hız ile anlık hızın farkını ve x–t grafiğinden hız okumayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Konum ve orijin",
      kisa: "Tek boyutta konum, orijine göre işaretli bir sayıdır; işaret yönü verir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🏃",
          baslik: "Bir tur koştun, yer değiştirmen sıfır",
          metin: "Okulun 400 metrelik pistinde bir tur koştun. Bacakların 400 metre yol yaptı ama başladığın çizgiye döndün. Fizikçiye göre yer değiştirmen ==sıfır==. Hareketi bu kadar titiz anlatmak için bir dile ihtiyaç var: *kinematics*."
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎬",
              terim: "Kinematics",
              tr: "kinematik",
              tanim: "Hareketi nedenine (kuvvetlere) bakmadan, yalnızca nasıl olduğunu anlatan dal.",
              ornek: "Arabanın 5 saniyede nereye gittiğini yazmak kinematiktir; neden gittiğini sormak değil."
            },
            {
              ikon: "📍",
              terim: "Position",
              tr: "konum",
              tanim: "Seçtiğin orijine (x = 0) göre cismin yeri, x. Tek boyutta bir vektördür: sağ artı, sol eksi; yönü işareti taşır.",
              ornek: "Koridorda orijinin 2 m sağındaysan x = +2 m, 6 m solundaysan x = −6 m."
            }
          ]
        }
      ]
    },
    {
      baslik: "Yer değiştirme ve alınan yol",
      kisa: "Yer değiştirme son eksi ilk konumdur; yol, izin toplam uzunluğudur.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Koridorda 2 m → 9 m → 5 m",
          xlabel: "x (m)",
          ylabel: "koridor",
          xmax: 10,
          ymax: 4,
          xticks: [{ v: 0, label: "0" }, { v: 2, label: "2" }, { v: 5, label: "5" }, { v: 9, label: "9" }],
          yticks: [],
          ogeler: [
            { id: "ogr", tip: "nokta", x: 2, y: 1.3, renk: 0, etiket: "sen" },
            { id: "a1", tip: "ok", from: [2, 2.1], to: [9, 2.1], renk: 1, gizli: true },
            { id: "t1", tip: "yazi", x: 5.5, y: 2.5, metin: "7 m ileri", gizli: true },
            { id: "a2", tip: "ok", from: [9, 3], to: [5, 3], renk: 2, gizli: true },
            { id: "t2", tip: "yazi", x: 7, y: 3.4, metin: "4 m geri", gizli: true },
            { id: "dd", tip: "ok", from: [2, 0.6], to: [5, 0.6], renk: 3, gizli: true },
            { id: "t3", tip: "yazi", x: 3.5, y: 0.9, metin: "Δx = +3 m", gizli: true },
            { id: "t4", tip: "yazi", x: 7.6, y: 0.55, metin: "yol = 7 + 4 = 11 m", gizli: true, hiza: "middle" }
          ],
          durumlar: [
            { metin: "Başlangıç: x₁ = 2 m noktasındasın." },
            { metin: "9 m'ye yürüyorsun: 7 m ileri.", set: { ogr: { x: 9 } }, goster: ["a1", "t1"] },
            { metin: "5 m'ye dönüyorsun: 4 m geri.", set: { ogr: { x: 5 } }, goster: ["a2", "t2"] },
            {
              metin: "==Yer değiştirme== yalnızca baş ve sona bakar: Δx = x₂ − x₁ = 5 − 2 = +3 m.",
              goster: ["dd", "t3"]
            },
            { metin: "==Yol== izi uçtan uca ölçer: 7 + 4 = 11 m. Yol skalerdir, hep pozitiftir.", goster: ["t4"] }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "↔️",
              terim: "Displacement",
              tr: "yer değiştirme",
              tanim: "Son konum eksi ilk konum: Δx = x₂ − x₁. İşaretli bir vektördür; işareti yönü söyler.",
              ornek: "2 m'den 5 m'ye: Δx = +3 m. 5 m'den 2 m'ye: Δx = −3 m."
            },
            {
              ikon: "👣",
              terim: "Distance",
              tr: "alınan yol",
              tanim: "İzlenen yolun toplam uzunluğu. Skalerdir ve hep pozitiftir.",
              ornek: "2 → 9 → 5 yürüyüşünde 7 + 4 = 11 m."
            }
          ]
        },
        {
          tip: "ikili",
          sol: {
            ikon: "🧭",
            baslik: "*Displacement*",
            maddeler: ["Son konum − ilk konum", "Vektör: işareti yönü söyler", "Başa dönersen 0"]
          },
          sag: {
            ikon: "👣",
            baslik: "*Distance*",
            maddeler: ["İzin toplam uzunluğu", "Skaler: hep ≥ 0", "Başa dönsen de artar (pist turu: 400 m)"]
          },
          oyun: [
            {
              metin: "Pist turunu bitirdin, başladığın çizgidesin.",
              cevap: "sol",
              neden: "Başa döndün: Δx = 0. Yol ise 400 m."
            },
            { metin: "Aracın kilometre sayacı.", cevap: "sag", neden: "Sayaç alınan yolu sayar, yönü bilmez." },
            { metin: "Değeri −3 m olabilir.", cevap: "sol", neden: "Yalnızca vektör negatif olabilir; yol hep ≥ 0." },
            {
              metin: "4 m ileri, 4 m geri yürüdün: 8 m.",
              cevap: "sag",
              neden: "İzin uzunluğu 8 m; yer değiştirme 0."
            }
          ]
        }
      ]
    },
    {
      baslik: "Ortalama hız ve ortalama sürat",
      kisa: "Ortalama hız Δx/Δt, ortalama sürat yol/Δt; ikisi aynı değildir.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🧮",
              terim: "Average velocity",
              tr: "ortalama hız",
              tanim: "Yer değiştirmenin geçen süreye oranı: v_ort = Δx/Δt = (x₂ − x₁)/(t₂ − t₁). Vektördür, birimi m/s.",
              ornek: "10 s'lik yürüyüşte Δx = +3 m ise v_ort = +0,3 m/s."
            },
            {
              ikon: "🏁",
              terim: "Average speed",
              tr: "ortalama sürat",
              tanim: "Alınan yolun geçen süreye oranı. Skalerdir, hep ≥ 0.",
              ornek: "Aynı yürüyüşte 11 m / 10 s = 1,1 m/s."
            }
          ]
        },
        {
          tip: "sayilar",
          ogeler: [
            { deger: 0.3, onek: "+", sonek: " m/s", etiket: "ortalama hız (3 m / 10 s)" },
            { deger: 1.1, sonek: " m/s", etiket: "ortalama sürat (11 m / 10 s)" },
            { deger: 0, sonek: " m/s", etiket: "pist turunda ortalama hız" },
            { deger: 5, sonek: " m/s", etiket: "pist turunda ortalama sürat (400 m, 80 s)" }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Ortalama sürat, ortalama hızın büyüklüğü değil",
          metin: "Turu 80 saniyede koşarsan ortalama hızın 0, ortalama süratin 5 m/s olur. Gidiş-dönüşlerde yol yer değiştirmeden büyüktür, o yüzden ikisi farklıdır.",
          yanlis: "Ortalama sürat = |ortalama hız|.",
          dogru: "Ortalama sürat yoldan, ortalama hız yer değiştirmeden gelir."
        }
      ]
    },
    {
      baslik: "x–t grafiği: eğim hızdır",
      kisa: "Secant eğimi ortalama hızı, teğet eğimi anlık hızı verir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "x–t grafiği: secant tangent'e dönüşür",
          xlabel: "t (s)",
          ylabel: "x (m)",
          xmax: 8,
          ymax: 11,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" },
            { v: 6, label: "6" },
            { v: 7, label: "7" },
            { v: 8, label: "8" }
          ],
          yticks: [
            { v: 2, label: "2" },
            { v: 4, label: "4" },
            { v: 6, label: "6" },
            { v: 8, label: "8" },
            { v: 10, label: "10" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 0.975], [0.5, 1.9], [0.75, 2.775], [1, 3.6], [1.25, 4.375],
                [1.5, 5.1], [1.75, 5.775], [2, 6.4], [2.25, 6.975], [2.5, 7.5], [2.75, 7.975],
                [3, 8.4], [3.25, 8.775], [3.5, 9.1], [3.75, 9.375], [4, 9.6], [4.25, 9.775],
                [4.5, 9.9], [4.75, 9.975], [5, 10], [5.25, 9.975], [5.5, 9.9], [5.75, 9.775],
                [6, 9.6], [6.25, 9.375], [6.5, 9.1], [6.75, 8.775], [7, 8.4], [7.25, 7.975],
                [7.5, 7.5], [7.75, 6.975], [8, 6.4]
              ],
              renk: 0
            },
            { id: "sec", tip: "cizgi", from: [2, 6.4], to: [4, 9.6], renk: 2, gizli: true },
            { id: "p1", tip: "nokta", x: 2, y: 6.4, renk: 3, gizli: true },
            { id: "p2", tip: "nokta", x: 4, y: 9.6, renk: 2, gizli: true },
            { id: "th5", tip: "cizgi", from: [4, 10], to: [6, 10], renk: 1, gizli: true },
            { id: "l5", tip: "yazi", x: 5, y: 10.6, metin: "v = 0", gizli: true },
            { id: "th7", tip: "cizgi", from: [6, 10], to: [8, 6.8], renk: 2, gizli: true },
            { id: "l7", tip: "yazi", x: 7.2, y: 9.7, metin: "v < 0", gizli: true },
            { id: "l2", tip: "yazi", x: 0.9, y: 7, metin: "v > 0, hızlı", gizli: true, hiza: "start" }
          ],
          durumlar: [
            { metin: "Bir parçacığın x–t grafiği: önce ilerliyor, t = 5 s'de tepe yapıyor, sonra geri dönüyor." },
            {
              metin: "t = 2 ile 4 arasındaki ==secant== (kesen doğru): eğimi ortalama hız = (9,6 − 6,4) / 2 = 1,6 m/s.",
              goster: ["sec", "p1", "p2"]
            },
            {
              metin: "Aralığı daralt: t = 2 ile 3 arası, ortalama hız = 2,0 m/s.",
              set: { sec: { to: [3, 8.400000000000002] }, p2: { x: 3, y: 8.400000000000002 } }
            },
            {
              metin: "t = 2 ile 2,5 arası: 2,2 m/s. Aralık küçüldükçe eğim büyüyor.",
              set: { sec: { to: [2.5, 7.5] }, p2: { x: 2.5, y: 7.5 } }
            },
            {
              metin: "Aralık sıfıra inince secant ==tangent== (teğet) olur: anlık hız v = dx/dt = 2,4 m/s.",
              set: { sec: { from: [1, 4], to: [3, 8.8] }, p2: { x: 2, y: 6.4 } },
              goster: ["l2"]
            },
            {
              metin: "Eğime bak: t = 5'te teğet yatay (v = 0), t = 7'de aşağı eğimli (v < 0).",
              gizle: ["p2"],
              goster: ["th5", "l5", "th7", "l7"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "⚡",
              terim: "Instantaneous velocity",
              tr: "anlık hız",
              tanim: "Belirli bir andaki hız: v = dx/dt, yani Δt → 0 iken Δx/Δt'nin limiti. x–t grafiğinde teğetin eğimidir.",
              ornek: "x = 0,4t(10 − t) için v = 0,4(10 − 2t); t = 2 s'de 2,4 m/s."
            },
            {
              ikon: "📏",
              terim: "Speed",
              tr: "sürat",
              tanim: "Anlık hızın büyüklüğü, |v|. Yön bilgisi taşımaz, negatif olamaz.",
              ornek: "v = −1,6 m/s olan parçacığın sürati 1,6 m/s."
            }
          ]
        }
      ]
    },
    {
      baslik: "Hızın işareti x'e değil, eğime bağlı",
      kisa: "Hızın işaretini x'in değeri değil, x'in artıp azalması belirler.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "x'in işareti ve değişimi → hızın işareti",
          head: ["x konumu", "x değişimi", "Hız vₓ", "Hareket"],
          rows: [
            ["Pozitif", "artıyor (daha pozitif)", "Pozitif", "+x yönünde"],
            ["Pozitif", "azalıyor (daha az pozitif)", "Negatif", "−x yönünde"],
            ["Negatif", "artıyor (daha az negatif)", "Pozitif", "+x yönünde"],
            ["Negatif", "azalıyor (daha negatif)", "Negatif", "−x yönünde"]
          ],
          vurgu: 2,
          not: "Tabloyu ezberleme: hepsi tek kural, hız x–t grafiğinin eğimidir."
        },
        {
          tip: "ikili",
          sol: { ikon: "📈", baslik: "*v > 0*", maddeler: ["x–t yukarı eğimli", "x artıyor, +x yönünde"] },
          sag: { ikon: "📉", baslik: "*v < 0*", maddeler: ["x–t aşağı eğimli", "x azalıyor, −x yönünde"] },
          oyun: [
            {
              metin: "Konum −6 m; sıfıra doğru yürüyorsun.",
              cevap: "sol",
              neden: "x, −6'dan 0'a artıyor: konum negatif olsa da hız pozitif."
            },
            {
              metin: "Konum +8 m; 2 m'ye doğru geri yürüyorsun.",
              cevap: "sag",
              neden: "x azalıyor: konum pozitif olsa da hız negatif."
            },
            {
              metin: "x–t grafiği o anda aşağı doğru eğimli.",
              cevap: "sag",
              neden: "Aşağı eğim, x'in azalması demek."
            },
            {
              metin: "Konum −2 m ve gittikçe daha negatif: −5 m'ye gidiyor.",
              cevap: "sag",
              neden: "x azalıyor, hız negatif."
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Konum ile hız karışıyor",
          metin: "Durmak da orijinde olmak demek değildir: x = 2t² − 8t + 3 için v = 4t − 8 = 0 olan t = 2 s'de konum x(2) = −5 m.",
          yanlis: "x negatifse hız da negatiftir; v = 0 ise cisim orijindedir.",
          dogru: "Hız x–t eğimidir; v = 0 yalnızca grafiğin yatay olduğu andır, konumdan bağımsızdır."
        }
      ]
    },
    {
      baslik: "Hareket diyagramı",
      kisa: "Noktalar açılıyorsa sürat artıyor, sıklaşıyorsa azalıyor.",
      bloklar: [
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🎞️",
              terim: "Motion diagram",
              tr: "hareket diyagramı",
              tanim: "Cismin konumunu eşit zaman aralıklarıyla nokta nokta işaretlersin. Noktalar arası açıksa hızlı, sıksa yavaş; her noktaya hız oku eklenir.",
              ornek: "Bisikletli her saniye bir nokta bırakıyor; aralıklar 3 → 1 m'ye kapanıyor."
            }
          ]
        },
        {
          tip: "grafik",
          baslik: "Fren yapan bisikletli (her 1 s'de bir kare)",
          xlabel: "x (m)",
          ylabel: "",
          xmax: 11,
          ymax: 4.5,
          xticks: [
            { v: 0, label: "0" },
            { v: 3, label: "3" },
            { v: 5.5, label: "5,5" },
            { v: 7.5, label: "7,5" },
            { v: 9, label: "9" },
            { v: 10, label: "10" }
          ],
          yticks: [],
          ogeler: [
            { id: "d0", tip: "nokta", x: 0, y: 1.6, renk: 0, gizli: true },
            { id: "d1", tip: "nokta", x: 3, y: 1.6, renk: 0, gizli: true },
            { id: "d2", tip: "nokta", x: 5.5, y: 1.6, renk: 0, gizli: true },
            { id: "d3", tip: "nokta", x: 7.5, y: 1.6, renk: 0, gizli: true },
            { id: "d4", tip: "nokta", x: 9, y: 1.6, renk: 0, gizli: true },
            { id: "d5", tip: "nokta", x: 10, y: 1.6, renk: 0, gizli: true },
            { id: "v0", tip: "ok", from: [0, 2.6], to: [2, 2.6], renk: 1, gizli: true },
            { id: "v1", tip: "ok", from: [3, 2.6], to: [5, 2.6], renk: 1, gizli: true },
            { id: "v2", tip: "ok", from: [6, 2.6], to: [7, 2.6], renk: 1, gizli: true },
            { id: "v3", tip: "ok", from: [8, 2.6], to: [9, 2.6], renk: 1, gizli: true },
            { id: "v4", tip: "ok", from: [9, 2.6], to: [10, 2.6], renk: 1, gizli: true },
            { id: "v5", tip: "ok", from: [10, 2.6], to: [10, 2.6], renk: 1, gizli: true },
            { id: "g0", tip: "yazi", x: 1.5, y: 0.7, metin: "3 m", gizli: true },
            { id: "g1", tip: "yazi", x: 4.25, y: 0.7, metin: "2,5 m", gizli: true },
            { id: "g2", tip: "yazi", x: 6.5, y: 0.7, metin: "2 m", gizli: true },
            { id: "g3", tip: "yazi", x: 8.25, y: 0.7, metin: "1,5 m", gizli: true },
            { id: "g4", tip: "yazi", x: 9.5, y: 0.7, metin: "1 m", gizli: true },
            { id: "ac", tip: "ok", from: [9, 3.5], to: [7, 3.5], renk: 2, gizli: true },
            { id: "act", tip: "yazi", x: 7.8, y: 3.8, metin: "a (harekete ters)", gizli: true }
          ],
          durumlar: [
            {
              metin: "Her 1 saniyede bir nokta bırakılıyor. Noktalar sağa doğru gittikçe sıklaşıyor.",
              goster: ["d0", "d1", "d2", "d3", "d4", "d5"]
            },
            {
              metin: "Aralıklar 3 → 2,5 → 2 → 1,5 → 1 m: ==her saniye daha az yol==, yani sürat azalıyor.",
              goster: ["g0", "g1", "g2", "g3", "g4"]
            },
            {
              metin: "Hız okları: okun boyu sürat, yönü hareketin yönü. Oklar kısalıyor.",
              goster: ["v0", "v1", "v2", "v3", "v4", "v5"]
            },
            {
              metin: "Kısalan oklar, ivmenin harekete ters (−x) yönde olduğunu gösterir. İvmeyi bir sonraki konuda işleyeceğiz.",
              goster: ["ac", "act"]
            }
          ]
        }
      ]
    },
    {
      baslik: "Çözümlü örnek: durma anları ve yol",
      kisa: "Hız sıfır olan anlarda yön değişir; yolu bu anlarda bölerek bul.",
      bloklar: [
        {
          tip: "ornek",
          baslik: "x = t³ − 9t² + 24t (m), 0 ≤ t ≤ 5 s",
          durum: "Hızı bul; parçacığın ne zaman durduğunu, 0–5 s aralığında yer değiştirmeyi, yolu ve ortalama sürati hesapla.",
          adimlar: [
            "Hız: v = dx/dt = 3t² − 18t + 24 = 3(t − 2)(t − 4).",
            "v = 0 için t = 2 s ve t = 4 s.",
            "Aradaki işaret: 2 < t < 4 aralığında v < 0, parçacık −x yönünde gider. Gerekçe cümlesi: \"v(t) < 0 for 2 < t < 4 s\".",
            "Konumlar: x(0) = 0, x(2) = 20, x(4) = 16, x(5) = 20 m.",
            "Yer değiştirme +20 m; ortalama hız 20/5 = 4 m/s.",
            "Yol dönüş anlarında bölünür: 20 + 4 + 4 = 28 m; ortalama sürat 28/5 = 5,6 m/s."
          ],
          sonuc: "Δx = +20 m, yol = 28 m; ortalama hız 4 m/s, ortalama sürat 5,6 m/s"
        },
        {
          tip: "grafik",
          baslik: "x = t³ − 9t² + 24t",
          xlabel: "t (s)",
          ylabel: "x (m)",
          xmax: 5,
          ymax: 22,
          xticks: [
            { v: 1, label: "1" },
            { v: 2, label: "2" },
            { v: 3, label: "3" },
            { v: 4, label: "4" },
            { v: 5, label: "5" }
          ],
          yticks: [
            { v: 4, label: "4" },
            { v: 8, label: "8" },
            { v: 12, label: "12" },
            { v: 16, label: "16" },
            { v: 20, label: "20" }
          ],
          ogeler: [
            {
              id: "c",
              tip: "egri",
              noktalar: [
                [0, 0], [0.25, 5.453], [0.5, 9.875], [0.75, 13.359], [1, 16], [1.25, 17.891],
                [1.5, 19.125], [1.75, 19.797], [2, 20], [2.25, 19.828], [2.5, 19.375], [2.75, 18.734],
                [3, 18], [3.25, 17.266], [3.5, 16.625], [3.75, 16.172], [4, 16], [4.25, 16.203],
                [4.5, 16.875], [4.75, 18.109], [5, 20]
              ],
              renk: 0
            },
            { id: "q2", tip: "nokta", x: 2, y: 20, renk: 3, etiket: "t = 2", kilavuz: true, gizli: true },
            { id: "q4", tip: "nokta", x: 4, y: 16, renk: 3, etiket: "t = 4", kilavuz: true, gizli: true },
            {
              id: "neg",
              tip: "egri",
              noktalar: [
                [2, 20], [2.25, 19.828], [2.5, 19.375], [2.75, 18.734], [3, 18], [3.25, 17.266],
                [3.5, 16.625], [3.75, 16.172], [4, 16]
              ],
              renk: 2,
              gizli: true
            },
            { id: "q5", tip: "nokta", x: 5, y: 20, renk: 1, gizli: true },
            { id: "av", tip: "cizgi", from: [0, 0], to: [5, 20], renk: 1, kesik: true, gizli: true },
            { id: "avt", tip: "yazi", x: 1.8, y: 3.2, metin: "Δx = +20 m", gizli: true },
            { id: "yt", tip: "yazi", x: 3.1, y: 12, metin: "20 + 4 + 4", gizli: true }
          ],
          durumlar: [
            { metin: "Konum eğrisi: parçacık önce yükseliyor, sonra geri dönüyor, sonra yine ilerliyor." },
            { metin: "Teğet yatay olan iki an: t = 2 s ve t = 4 s. Orada v = 0.", goster: ["q2", "q4"] },
            { metin: "2 < t < 4 aralığında x azalıyor: v < 0, parçacık −x yönünde gidiyor.", goster: ["neg"] },
            {
              metin: "0–5 s yer değiştirmesi 20 − 0 = +20 m. Uçları birleştiren doğrunun eğimi ortalama hızdır: 20/5 = 4 m/s.",
              goster: ["q5", "av", "avt"]
            },
            {
              metin: "Ama ==yol== daha uzun: 20 m ileri + 4 m geri + 4 m ileri = 28 m. Ortalama sürat 28/5 = 5,6 m/s.",
              goster: ["yt"]
            }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Yol, yer değiştirme değildir",
          metin: "Yer değiştirme yalnızca baş ve son konuma bakar. Yolu bulmak için v = 0 olan anlarda aralığı böl, her parçanın uzunluğunu topla.",
          yanlis: "Yol = x(5) − x(0) = 20 m.",
          dogru: "Yol = 20 + 4 + 4 = 28 m; dönüş anlarında böl."
        }
      ]
    },
    {
      baslik: "Sınav ne ister?",
      kisa: "Türet, eğimi yorumla, yön değişimini işaretle gerekçelendir; işareti atlama.",
      bloklar: [
        {
          tip: "liste",
          maddeler: [
            {
              ikon: "✅",
              baslik: "Hızı v = dx/dt yazıp türetmek",
              metin: "Konum fonksiyonu verildiyse ilk adım türevdir."
            },
            {
              ikon: "✅",
              baslik: "x–t eğimini hız diye yorumlamak",
              metin: "Dik eğim hızlı, yatay eğim durgun, aşağı eğim −x yönünde."
            },
            { ikon: "✅", baslik: "Yön değişimini bulmak", metin: "v = 0 ve işaret değişimi birlikte aranır." },
            {
              ikon: "✍️",
              baslik: "Gerekçeyi sayısal yaz",
              metin: "\"v(t) < 0 for 2 < t < 4 s\" gibi; tek bir cümle yeter."
            },
            { ikon: "➖", baslik: "İşaret tablosu ezberi gerekmez", metin: "Eğim hepsini söyler." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "İşareti atlamak",
          metin: "Tek boyutlu cevaplarda işaret yön bilgisidir: −3 m/s ile 3 m/s aynı cevap değildir.",
          yanlis: "\"Hız 3 m/s\" (parçacık −x yönünde giderken).",
          dogru: "\"v = −3 m/s\" yaz ve \"−x yönünde\" diye yorumla."
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
            "*Displacement* son eksi ilk konumdur (Δx = x₂ − x₁); *distance* izin toplam uzunluğudur ve skalerdir.",
            "Ortalama hız = Δx/Δt, ortalama sürat = yol/Δt; ikisi aynı değildir (pist turunda 0 ve 5 m/s).",
            "Anlık hız v = dx/dt, x–t grafiğinde teğetin eğimidir; *speed* = |v|.",
            "Hızın işaretini x'in değeri değil x–t eğimi belirler; v = 0 orijinde olmak demek değildir.",
            "*Motion diagram*: noktalar açılıyorsa sürat artıyor, sıklaşıyorsa azalıyor.",
            "Yolu bulmak için v = 0 olan anlarda böl: x = t³ − 9t² + 24t için yer değiştirme 20 m, yol 28 m.",
            "Gerekçe cümlesini işaretle ve sayıyla yaz; −3 m/s ile 3 m/s farklıdır."
          ]
        }
      ]
    }
  ]
};
