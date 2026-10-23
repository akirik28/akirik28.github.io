/* Kitora not defteri · ph404 · 4.4 Periyodik Hareket
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Physics Unit 4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph404",
  amac: "Bu konu düzenli tekrar eden hareketleri, yani basit sarkacı ve yay-kütle sistemini anlatıyor. Periyodun uzunluğa, yerçekimine, kütleye ve yay sertliğine nasıl bağlı olduğunu önce mantıkla, sonra formülle kavrayacaksın.",
  bolumler: [
    {
      baslik: "Periyodik hareket: denge etrafında tekrar",
      kisa: "Periyodik hareket, aynı yolu eşit sürelerde tekrar eden harekettir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🎠",
          baslik: "Parktaki salıncak",
          metin: "Salıncağı bir kez itip bırakırsan aynı yolu gidip gelir: sağ uç, orta, sol uç, yine orta, yine sağ uç. Bu yolun tamamı bir salınımdır ve her seferinde yaklaşık aynı sürer. ==Periyodik hareket== budur."
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🔁", terim: "Periodic motion", tr: "periyodik hareket", tanim: "Aynı yolu eşit zaman aralıklarıyla tekrar eden hareket. Bir tekrarın süresi periyottur (T).", ornek: "Salıncak, duvar saatinin sarkacı, titreşen telefon." },
            { ikon: "⚖️", terim: "Equilibrium position", tr: "denge konumu", tanim: "Cisim sakin dururken bulunduğu nokta; salınımın orta noktası.", ornek: "Salıncak tam aşağıdayken." },
            { ikon: "🧲", terim: "Restoring force", tr: "geri çağırıcı kuvvet", tanim: "Cismi hep denge konumuna doğru çeken kuvvet; cisim dengeden uzaklaştıkça büyür.", ornek: "Çekilen yay, cismi geri çeker." },
            { ikon: "↔️", terim: "Oscillation", tr: "salınım", tanim: "Denge konumu çevresinde bir tam gidip gelme.", ornek: "Salıncağın sağ uçtan çıkıp yine sağ uca dönmesi." }
          ]
        },
        { tip: "not", metin: "**Sınavda böyle yaz:** *The restoring force always points toward the equilibrium position.* · *One oscillation is one complete back-and-forth trip.* · *The period is the time for one oscillation.*" }
      ]
    },
    {
      baslik: "Basit sarkaç: periyot uzunluğa ve g'ye bağlı",
      kisa: "Sarkacın periyodu uzunluğa ve yerçekimine bağlıdır; kütleye bağlı değildir.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "T", alt: "periyot (s)" }, "=", { t: "2π √( L / g )", alt: "L: ip uzunluğu (m) · g ≈ 10 m/s² (kesin değer 9,8)" }],
          aciklama: "Küçük açılarda (yaklaşık 15°'ye kadar) geçerlidir. Kütle formülde yok. Kolay hesap için: yer yüzünde T ≈ 2√L (L metre, T saniye)."
        },
        {
          tip: "grafik",
          baslik: "Sarkaç boyu uzayınca periyot nasıl artar?",
          xlabel: "Sarkaç boyu L (m)",
          ylabel: "Periyot T (s)",
          xmax: 5,
          ymax: 5,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 3, label: "3" }, { v: 4, label: "4" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 1, noktalar: [[0, 0], [0.25, 1], [0.5625, 1.5], [1, 2], [1.5625, 2.5], [2.25, 3], [3.0625, 3.5], [4, 4]] },
            { id: "p1", tip: "nokta", renk: 2, x: 1, y: 2, etiket: "1 m · 2 s", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", renk: 2, x: 4, y: 4, etiket: "4 m · 4 s", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", renk: 3, x: 0.25, y: 1, etiket: "25 cm · 1 s", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "T = 2π√(L/g) ≈ 2√L: boy arttıkça periyot artar, ama doğru orantılı değil; kare köke bağlı." },
            { metin: "L = 1 m → T ≈ 2 s.", goster: ["p1"] },
            { metin: "Boyu 4 katına (4 m) çıkarırsak periyot yalnızca ==2 katına== (4 s) çıkar.", goster: ["p2"] },
            { metin: "L = 25 cm → T ≈ 1 s. Kısa sarkaç hızlı gidip gelir.", goster: ["p3"] }
          ]
        },
        {
          tip: "ornek",
          baslik: "Sarkacı Ay'a götürürsek",
          durum: "Dünya'da 1 m'lik bir sarkacın periyodu yaklaşık 2 s. Aynı sarkaç Ay'a götürülürse (g_Ay ≈ g/6) periyodu nasıl değişir?",
          adimlar: ["T = 2π√(L/g): L aynı kalıyor, g altıda birine iniyor.", "g altıda birine inince √(L/g) yaklaşık √6 ≈ 2,45 kat büyür.", "T_Ay ≈ 2 × 2,45 ≈ 4,9 s.", "Kütle formülde yok; sarkaca ağır gülle takmak sonucu değiştirmez."],
          sonuc: "==Periyot yaklaşık 2,45 kat artar (≈ 5 s).== Sarkaç Ay'da daha yavaş gidip gelir. Sınavda böyle yaz: *The period of a pendulum depends on its length and on g, not on its mass.*"
        },
        {
          tip: "tuzak",
          baslik: "Ağır gülle ya da büyük genlik periyodu değiştirir mi?",
          metin: "Gülle ağır diye ya da daha yüksekten bırakıldı diye sarkaç farklı sürede gidip gelmez; küçük açılarda periyodu yalnızca L ve g belirler.",
          yanlis: "Ağır gülle takarsak ya da büyük genlikle bırakırsak periyot değişir.",
          dogru: "Küçük açılarda ==kütle ve genlik periyodu değiştirmez==."
        }
      ]
    },
    {
      baslik: "Yay-kütle sistemi: periyot m ve k'ye bağlı",
      kisa: "Kütle büyürse periyot büyür, yay sertleşirse periyot küçülür.",
      bloklar: [
        {
          tip: "formul",
          parcalar: [{ t: "T", alt: "periyot (s)" }, "=", { t: "2π √( m / k )", alt: "m: kütle (kg) · k: yay sabiti (N/m)" }],
          aciklama: "k büyükse yay serttir; sert yay cismi çabuk geri çeker, periyot küçülür. Ağır cisim güç hareket eder, periyot büyür."
        },
        {
          tip: "ornek",
          baslik: "Kütleyi 4 katına çıkarınca",
          durum: "0,25 kg'lık kütle, k = 100 N/m'lik bir yaya bağlı. Periyodunu bul. Kütleyi 4 katına çıkarırsak periyot ne olur?",
          adimlar: ["T = 2π√(m/k) = 2π√(0,25 ÷ 100) = 2π√0,0025.", "√0,0025 = 0,05 → T = 2π × 0,05 ≈ 0,31 s (π ≈ 3,14).", "m = 1 kg (4 kat): T = 2π√(1 ÷ 100) = 2π × 0,1 ≈ 0,63 s.", "Kütle 4 katına çıktı, periyot 2 katına çıktı (√4 = 2)."],
          sonuc: "==T ≈ 0,31 s; kütle 4 katına çıkınca T ≈ 0,63 s (2 katı).== Sınavda böyle yaz: *A larger mass or a softer spring gives a longer period.*"
        },
        {
          tip: "tuzak",
          baslik: "Yay-kütle de Ay'da yavaşlar mı?",
          metin: "Ay'a götürülen sarkaç yavaşlar ama yay-kütle sisteminin periyodu değişmez; çünkü formülde g yok.",
          yanlis: "Yay-kütle sistemi Ay'da da sarkaç gibi yavaşlar.",
          dogru: "T = 2π√(m/k) ==g'yi içermez==. Yerçekimi (dikey yayda) yalnızca denge konumunu kaydırır, periyodu değiştirmez."
        }
      ]
    },
    {
      baslik: "Salınım sırasında enerji dönüşümü",
      kisa: "Uçlarda enerji potansiyel, denge konumunda kinetiktir; toplam sabit kalır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Sürtünmesiz salınımda kinetik ve potansiyel enerji",
          xlabel: "",
          ylabel: "Enerji (birim)",
          xmax: 10,
          ymax: 9,
          xticks: [{ v: 3, label: "KE" }, { v: 7, label: "PE" }],
          yticks: [{ v: 8, label: "E" }],
          ogeler: [
            { id: "e", tip: "cizgi", renk: 0, kesik: true, from: [0, 8], to: [10, 8] },
            { id: "el", tip: "yazi", x: 9.8, y: 8.3, metin: "E toplam", hiza: "end" },
            { id: "ke", tip: "alan", renk: 1, noktalar: [[2, 0], [4, 0], [4, 0], [2, 0]] },
            { id: "pe", tip: "alan", renk: 2, noktalar: [[6, 0], [8, 0], [8, 8], [6, 8]] },
            { id: "ps", tip: "yazi", x: 5, y: 8.8, metin: "Konum: sağ uç (x = +A)" }
          ],
          durumlar: [
            { metin: "Sağ uçta cisim bir an durur: kinetik enerji (KE) sıfır, potansiyel enerji (PE) en büyük. Toplam enerji E." },
            { metin: "Dengeye yaklaşırken PE azalır, KE artar. A/2'de PE = E/4, KE = 3E/4.", set: { ke: { noktalar: [[2, 0], [4, 0], [4, 6], [2, 6]] }, pe: { noktalar: [[6, 0], [8, 0], [8, 2], [6, 2]] }, ps: { metin: "Konum: x = +A/2" } } },
            { metin: "Denge konumunda PE sıfır, ==KE en büyük (hız en büyük)==.", set: { ke: { noktalar: [[2, 0], [4, 0], [4, 8], [2, 8]] }, pe: { noktalar: [[6, 0], [8, 0], [8, 0], [6, 0]] }, ps: { metin: "Konum: denge konumu (x = 0)" } } },
            { metin: "Karşı tarafta KE yeniden azalır, PE artar.", set: { ke: { noktalar: [[2, 0], [4, 0], [4, 6], [2, 6]] }, pe: { noktalar: [[6, 0], [8, 0], [8, 2], [6, 2]] }, ps: { metin: "Konum: x = −A/2" } } },
            { metin: "Sol uçta yine KE = 0, PE en büyük. ==KE + PE hep aynı (E).==", set: { ke: { noktalar: [[2, 0], [4, 0], [4, 0], [2, 0]] }, pe: { noktalar: [[6, 0], [8, 0], [8, 8], [6, 8]] }, ps: { metin: "Konum: sol uç (x = −A)" } } }
          ]
        },
        { tip: "not", metin: "**Sınavda böyle yaz:** *At the equilibrium position the kinetic energy is maximum and the potential energy is minimum.* · *At the extreme positions the speed is zero.*" },
        {
          tip: "tuzak",
          baslik: "Gerçekte salınım neden durur?",
          metin: "Gerçek sarkaçta ve yayda hava direnci ve sürtünme vardır; mekanik enerji yavaş yavaş ısıya dönüşür ve genlik küçülür. Buna sönüm (*damping*) denir.",
          yanlis: "Genlik küçülünce sarkacın periyodu da değişir.",
          dogru: "==Sönümde genlik azalır, periyot hemen hemen aynı kalır.== Sınavda böyle yaz: *Damping reduces the amplitude because mechanical energy is converted into heat.*"
        }
      ]
    },
    {
      baslik: "Hangi büyüklük periyodu değiştirir?",
      kisa: "Sarkaçta L ve g, yay-kütlede m ve k periyodu belirler.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "İki sistemin karşılaştırması",
          head: ["Büyüklük", "Basit sarkaç", "Yay-kütle"],
          rows: [
            ["Kütle m", "Etkisiz", "m artınca T artar"],
            ["İp uzunluğu L", "L artınca T artar", "—"],
            ["Yay sabiti k", "—", "k artınca (sert yay) T azalır"],
            ["Yerçekimi g", "g artınca T azalır", "Etkisiz"],
            ["Genlik (sarkaçta küçük açı)", "Etkisiz", "Etkisiz"]
          ],
          not: "Sınavda böyle yaz: *In a spring-mass system the period depends on the mass and the spring constant, but not on g.*"
        },
        {
          tip: "ikili",
          sol: { ikon: "🕰️", baslik: "*Simple pendulum*", maddeler: ["T = 2π√(L/g)", "L ve g'ye bağlı; kütleye bağlı değil"] },
          sag: { ikon: "🌀", baslik: "*Spring–mass system*", maddeler: ["T = 2π√(m/k)", "m ve k'ye bağlı; g'ye bağlı değil"] },
          oyun: [
            { metin: "Ay'a götürülünce periyodu uzar.", cevap: "sol", neden: "g küçülür, T = 2π√(L/g) büyür." },
            { metin: "Kütle 4 katına çıkınca periyot 2 katına çıkar.", cevap: "sag", neden: "T, √m ile orantılı: √4 = 2." },
            { metin: "İp boyu 4 katına çıkınca periyot 2 katına çıkar.", cevap: "sol", neden: "T, √L ile orantılı." },
            { metin: "Daha sert bir yay takılınca periyot kısalır.", cevap: "sag", neden: "k büyür, T = 2π√(m/k) küçülür." },
            { metin: "Kütle değiştirilince periyot hiç değişmez.", cevap: "sol", neden: "Sarkaç formülünde kütle yok." }
          ]
        }
      ]
    },
    {
      baslik: "Periyodu ölçmek: laboratuvar",
      kisa: "Tek salınımı değil, 20 salınımın süresini ölçüp 20'ye böl.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Sarkaç deneyi",
          adimlar: [
            { baslik: "Kur", metin: "İpi sabit bir noktadan sarkıt; boyu cetvelle, askı noktasından gülle merkezine kadar ölç." },
            { baslik: "Küçük açı", metin: "Gülleyi denge konumundan yaklaşık 10° çekip bırak." },
            { baslik: "20 salınım say", metin: "Kronometreyle 20 tam salınımın süresini ölç." },
            { baslik: "Böl", metin: "T = toplam süre ÷ 20. Ölçüm hatası da 20'ye bölünerek küçülür." }
          ]
        },
        {
          tip: "ornek",
          baslik: "20 salınım 36 saniye sürdü",
          durum: "Bir sarkacın 20 tam salınımı 36 s sürüyor. Periyodunu, frekansını ve (T ≈ 2√L ile) yaklaşık uzunluğunu bul.",
          adimlar: ["T = 36 ÷ 20 = 1,8 s.", "f = 1 ÷ 1,8 ≈ 0,56 Hz.", "T ≈ 2√L → √L = 0,9 → L = 0,81 m ≈ 0,8 m."],
          sonuc: "==T = 1,8 s, f ≈ 0,56 Hz, L ≈ 0,8 m.== Sınavda böyle yaz: *We measured the time of 20 oscillations and divided by 20 to reduce the error.*"
        },
        {
          tip: "ornek",
          baslik: "Yay-kütle deneyi: T² – m grafiğinden k",
          durum: "Bir yaya 500 g'dan 1500 g'a kadar kütleler asılıp 10 salınımın süresi üçer kez ölçülüyor. Ortalama değerler: 0,5 kg için 10 salınım 6,36 s, 1,5 kg için 11,08 s. Yayın sabiti k nedir? Verilen kuramsal değer 50 N/m ise yüzde hata kaç?",
          adimlar: ["Periyot: 6,36 ÷ 10 = 0,636 s ve 11,08 ÷ 10 = 1,108 s. Kareleri: T² ≈ 0,40 ve ≈ 1,23 s².", "T = 2π√(m/k) → T² = (4π² ÷ k) · m: T²–m grafiği başlangıçtan geçen doğrudur, eğim = 4π² ÷ k.", "Eğim = (1,23 − 0,40) ÷ (1,5 − 0,5) ≈ 0,83 s²/kg → k = 4π² ÷ 0,83 ≈ 39,5 ÷ 0,83 ≈ 48 N/m.", "Yüzde hata = |50 − 48| ÷ 50 × 100 = 4 %."],
          sonuc: "k ≈ 48 N/m, hata yaklaşık yüzde 4. T–m grafiği eğridir (T ∝ √m), T²–m grafiği doğrudur. Hata çubukları ölçüm belirsizliğini gösterir. Sınavda böyle yaz: *The slope of the T² against m graph is 4π² divided by k.*"
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
            "Periyodik hareket aynı yolu eşit sürelerde tekrar eder; T = 1/f.",
            "Geri çağırıcı kuvvet cismi hep denge konumuna doğru çeker.",
            "Basit sarkaç: T = 2π√(L/g). L arttıkça T artar, g arttıkça T azalır.",
            "Sarkacın periyodu kütleye ve (küçük açılarda) genliğe bağlı değildir.",
            "Yay-kütle: T = 2π√(m/k). m arttıkça T artar, k (sert yay) arttıkça T azalır.",
            "Yay-kütle periyodu g'ye bağlı değildir: Ay'da sarkaç yavaşlar, yay-kütle değişmez.",
            "Uçlarda enerji potansiyel, denge konumunda kinetiktir; sürtünmesiz sistemde toplam sabit.",
            "Sönümde genlik azalır, periyot hemen hemen aynı kalır.",
            "Periyodu ölçerken birçok salınımın süresi ölçülüp salınım sayısına bölünür."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "The string of a simple pendulum is made four times as long, while the gravitational acceleration stays the same. How does the period of the pendulum change?",
      opts: ["It becomes 4 times larger.", "It becomes 2 times larger.", "It does not change.", "It is halved."],
      a: 1,
      why: "T = 2π√(L/g) olduğundan T, √L ile orantılıdır: √4 = 2. A en çekici yanlış şıktır: periyodun boyla doğru orantılı olduğu sanılır."
    },
    {
      q: "A simple pendulum has a period of 2 s on Earth. It is taken to a planet where the gravitational acceleration is one quarter of that on Earth. What is the period of the pendulum there?",
      opts: ["1 s", "2 s", "4 s", "8 s"],
      a: 2,
      why: "T, 1/√g ile orantılıdır. g dörtte birine inince 1/√(1/4) = 2 katı: T = 2 × 2 = 4 s. D'de g'deki dörtte bir düşüş doğrudan T'ye dört kat olarak yansıtılmış."
    },
    {
      q: "The periods of different masses attached to the same spring are given in the table. What is the period when m = 9 kg?",
      fig: { type: "table", head: ["Mass m (kg)", "Period T (s)"], rows: [["1", "0.6"], ["4", "1.2"]] },
      opts: ["5.4 s", "2.4 s", "3.6 s", "1.8 s"],
      a: 3,
      why: "Kütle 4 katına çıkınca periyot 2 katına çıkıyor: T, √m ile orantılı (T = 0,6√m). m = 9 kg için T = 0,6 × 3 = 1,8 s. A'da periyot kütleyle doğru orantılı alınmış (0,6 × 9)."
    },
    {
      q: "A spring-mass system oscillates with a period of 0.5 s on Earth. It is taken to the Moon. Which statement about its period is correct?",
      opts: ["It does not change, because the period does not depend on g.", "It increases, because g is smaller on the Moon.", "It decreases, because the object is lighter on the Moon.", "It first increases and then decreases."],
      a: 0,
      why: "T = 2π√(m/k) formülünde g yoktur; m (kütle) Ay'da da aynıdır, k yay özelliğidir. B en çekici yanlış şıktır: sarkaç için doğru olan fikir yay-kütle sistemine yanlışlıkla uygulanmış."
    },
    {
      q: "A frictionless simple pendulum bob passes through the equilibrium position. Which statement is correct?",
      opts: ["The potential energy is maximum and the kinetic energy is zero.", "The kinetic energy is maximum and the potential energy is minimum.", "The total mechanical energy is minimum.", "Both the kinetic and potential energies are zero."],
      a: 1,
      why: "Denge konumunda gülle en alçak noktadadır (PE en küçük) ve en hızlıdır (KE en büyük). Toplam mekanik enerji sürtünmesiz sistemde sabittir. A, uç noktanın tarifidir."
    }
  ]
};
