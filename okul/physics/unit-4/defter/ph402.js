/* Kitpath not defteri · ph402 · 4.2 Dalga Türleri
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Physics Unit 4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph402",
  amac: "Bu konu dalgaların nasıl sınıflandırıldığını anlatıyor: ortama gereksinimine, titreşim yönüne ve yayılma boyutuna göre. Mekanik ile elektromanyetik, enine ile boyuna dalgayı örneklerle ayırmayı öğreneceksin.",
  bolumler: [
    {
      baslik: "Dalgalar neye göre sınıflanır?",
      kisa: "Üç soru sor: ortam gerekir mi, titreşim hangi yönde, kaç boyutta yayılır?",
      bloklar: [
        {
          tip: "harita",
          merkez: "*Types of waves*",
          dallar: [
            { baslik: "Ortama göre", alt: "*Mechanical* (ortam ister) · *Electromagnetic* (boşlukta da gider) · *Matter waves* (madde dalgaları)" },
            { baslik: "Titreşim yönüne göre", alt: "*Transverse* (enine) · *Longitudinal* (boyuna)" },
            { baslik: "Yayılma boyutuna göre", alt: "Tek boyutlu (ip) · iki boyutlu (su yüzeyi) · üç boyutlu (ses, ışık)" },
            { baslik: "Süresine göre", alt: "*Pulse* (atma) · *Periodic wave* (periyodik dalga)" }
          ]
        },
        {
          tip: "not",
          metin: "**Sınavda böyle yaz:** *Sound is a mechanical, longitudinal wave.* · *Light is an electromagnetic, transverse wave.* · *Waves are classified according to the medium, the direction of vibration and the dimension of propagation.*"
        }
      ]
    },
    {
      baslik: "Mekanik mi, elektromanyetik mi?",
      kisa: "Mekanik dalga ortam ister; elektromanyetik dalga boşlukta da yayılır.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "🔊", baslik: "*Mechanical wave*", maddeler: ["Yayılmak için madde (ortam) ister", "Ses, su dalgası, ip dalgası, deprem dalgası"] },
          sag: { ikon: "💡", baslik: "*Electromagnetic wave*", maddeler: ["Boşlukta da yayılır (≈ 3 × 10⁸ m/s)", "Işık, radyo dalgası, mikrodalga, X-ışını"] },
          oyun: [
            { metin: "Gitar telinden çıkıp havada yayılan ses.", cevap: "sol", neden: "Hava (ortam) olmadan yayılamaz: mekanik." },
            { metin: "Güneş'ten Dünya'ya gelen ışık.", cevap: "sag", neden: "Arada madde olmayan uzayı geçer: elektromanyetik." },
            { metin: "Gölde taş atınca yayılan halkalar.", cevap: "sol", neden: "Su (ortam) gerekir: mekanik." },
            { metin: "Telefonun Wi-Fi sinyali.", cevap: "sag", neden: "Radyo dalgası ailesinden: elektromanyetik." },
            { metin: "Depremde yer kabuğunda ilerleyen titreşim.", cevap: "sol", neden: "Kayaç ortamdır: mekanik." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Elektromanyetik tayf (frekans arttıkça)",
          head: ["Dalga", "Günlük örnek"],
          rows: [
            ["Radyo dalgası", "Radyo ve TV yayını"],
            ["Mikrodalga", "Mikrodalga fırın, Wi-Fi"],
            ["Kızılötesi (*infrared*)", "TV kumandası, ısı kamerası"],
            ["Görünür ışık", "Gözle gördüğümüz renkler"],
            ["Morötesi (*ultraviolet*)", "Güneş yanığı"],
            ["X-ışını", "Röntgen"],
            ["Gama ışını (*gamma ray*)", "Radyoterapi"]
          ],
          not: "Hepsi boşlukta aynı hızla (c ≈ 3 × 10⁸ m/s) ilerler ve enine dalgadır; birbirinden frekans ve dalga boyuyla ayrılır."
        },
        {
          tip: "not",
          metin: "Derste ortama göre üçüncü bir grup da anılıyor: ==madde dalgaları== (*matter waves*), yani elektron gibi parçacıkların dalga özelliği göstermesi. Bu düzeyde yalnızca adını ve sınıfını bil. Mekanik dalga örnekleri: taş atılan suda halkalar, hoparlörün titreşiminden havada ses, elin salladığı ip ya da yay, yer kabuğundaki kırılmadan çıkan deprem dalgası."
        },
        {
          tip: "tuzak",
          baslik: "Uzayda patlama sesi",
          metin: "Filmlerde uzay gemisi patlayınca gürültü duyulur; oysa uzay boşluğunda ses yayılmaz. Işık ve radyo sinyali ise uzayı geçip bize ulaşır.",
          yanlis: "Ses de ışık gibi boşlukta yayılır.",
          dogru: "Ses mekanik dalgadır, ==ortam ister==; ışık elektromanyetiktir, boşlukta yayılır. Sınavda böyle yaz: *Sound cannot travel in a vacuum because it needs a medium.*"
        }
      ]
    },
    {
      baslik: "Enine dalga: titreşim yayılmaya diktir",
      kisa: "Enine dalgada ortamın parçacıkları yayılma yönüne dik titreşir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Dalga sağa gider, parçacık yukarı aşağı oynar",
          xlabel: "Yayılma yönü →",
          ylabel: "Titreşim yönü ↕",
          xmax: 12,
          ymax: 9,
          xticks: [],
          yticks: [{ v: 4.5, label: "0" }],
          ogeler: [
            { id: "dn", tip: "cizgi", renk: 0, kesik: true, from: [0, 4.5], to: [12, 4.5] },
            {
              id: "w",
              tip: "egri",
              renk: 1,
              noktalar: [
                [0, 4.5], [0.5, 5.914], [1, 6.5], [1.5, 5.914], [2, 4.5], [2.5, 3.086], [3, 2.5], [3.5, 3.086], [4, 4.5], [4.5, 5.914], [5, 6.5], [5.5, 5.914], [6, 4.5], [6.5, 3.086], [7, 2.5], [7.5, 3.086], [8, 4.5], [8.5, 5.914], [9, 6.5],
                [9.5, 5.914], [10, 4.5], [10.5, 3.086], [11, 2.5], [11.5, 3.086], [12, 4.5]
              ]
            },
            { id: "pr", tip: "ok", renk: 3, from: [6, 8.4], to: [10, 8.4] },
            { id: "prx", tip: "yazi", x: 8, y: 8.85, metin: "yayılma yönü" },
            { id: "pl", tip: "cizgi", renk: 0, kesik: true, from: [1, 1.2], to: [1, 7.8], gizli: true },
            { id: "plx", tip: "yazi", x: 1.25, y: 7.7, metin: "titreşim yönü", hiza: "start", gizli: true },
            { id: "p", tip: "nokta", renk: 2, x: 1, y: 6.5, etiket: "parçacık" }
          ],
          durumlar: [
            { metin: "t = 0. Dalga sağa doğru ilerliyor. Kırmızı nokta, ortamın tek bir parçacığı." },
            {
              metin: "t = T/4. Dalga 1 cm ilerledi; parçacık denge konumundan geçiyor ve yatayda hiç kaymadı.",
              set: {
                w: {
                  noktalar: [
                    [0, 2.5], [0.5, 3.086], [1, 4.5], [1.5, 5.914], [2, 6.5], [2.5, 5.914], [3, 4.5], [3.5, 3.086], [4, 2.5], [4.5, 3.086], [5, 4.5], [5.5, 5.914], [6, 6.5], [6.5, 5.914], [7, 4.5], [7.5, 3.086], [8, 2.5], [8.5, 3.086], [9, 4.5],
                    [9.5, 5.914], [10, 6.5], [10.5, 5.914], [11, 4.5], [11.5, 3.086], [12, 2.5]
                  ]
                },
                p: { y: 4.5 }
              },
              goster: ["pl", "plx"]
            },
            {
              metin: "t = T/2. Parçacık çukurda; hâlâ aynı dikey çizgide.",
              set: {
                w: {
                  noktalar: [
                    [0, 4.5], [0.5, 3.086], [1, 2.5], [1.5, 3.086], [2, 4.5], [2.5, 5.914], [3, 6.5], [3.5, 5.914], [4, 4.5], [4.5, 3.086], [5, 2.5], [5.5, 3.086], [6, 4.5], [6.5, 5.914], [7, 6.5], [7.5, 5.914], [8, 4.5], [8.5, 3.086], [9, 2.5],
                    [9.5, 3.086], [10, 4.5], [10.5, 5.914], [11, 6.5], [11.5, 5.914], [12, 4.5]
                  ]
                },
                p: { y: 2.5 }
              }
            },
            {
              metin: "t = 3T/4. ==Titreşim yönü (dikey) yayılma yönüne (yatay) diktir: bu bir enine dalgadır.==",
              set: {
                w: {
                  noktalar: [
                    [0, 6.5], [0.5, 5.914], [1, 4.5], [1.5, 3.086], [2, 2.5], [2.5, 3.086], [3, 4.5], [3.5, 5.914], [4, 6.5], [4.5, 5.914], [5, 4.5], [5.5, 3.086], [6, 2.5], [6.5, 3.086], [7, 4.5], [7.5, 5.914], [8, 6.5], [8.5, 5.914], [9, 4.5],
                    [9.5, 3.086], [10, 2.5], [10.5, 3.086], [11, 4.5], [11.5, 5.914], [12, 6.5]
                  ]
                },
                p: { y: 4.5 }
              }
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "➡️", terim: "Direction of propagation", tr: "yayılma yönü", tanim: "Dalganın (enerjinin) ilerlediği yön.", ornek: "İpte atma, elinden karşı duvara doğru gider." },
            { ikon: "↕️", terim: "Direction of vibration", tr: "titreşim yönü", tanim: "Ortamın parçacıklarının ileri geri hareket ettiği yön.", ornek: "İpteki bir nokta, yukarı aşağı oynar." },
            { ikon: "〰️", terim: "Transverse wave", tr: "enine dalga", tanim: "Titreşim yönü yayılma yönüne ==dik== olan dalga; tepe ve çukurlar oluşur.", ornek: "Gerili ip, su yüzeyi (lise düzeyinde), ışık." }
          ]
        },
        { tip: "not", metin: "**Sınavda böyle yaz:** *In a transverse wave, the particles vibrate perpendicular to the direction of propagation.*" }
      ]
    },
    {
      baslik: "Boyuna dalga: titreşim yayılmayla aynı doğrultuda",
      kisa: "Boyuna dalgada parçacıklar yayılma doğrultusunda ileri geri titreşir.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Yaydaki halkalar: sıkışma ve seyrelme",
          xlabel: "Yayılma yönü →",
          ylabel: "Yay (yandan görünüş)",
          xmax: 12,
          ymax: 9,
          xticks: [],
          yticks: [],
          ogeler: [
            { id: "h0", tip: "cizgi", renk: 0, from: [0.5, 2.5], to: [0.5, 6.5] },
            { id: "h1", tip: "cizgi", renk: 0, from: [1.5, 2.5], to: [1.5, 6.5] },
            { id: "h2", tip: "cizgi", renk: 0, from: [2.5, 2.5], to: [2.5, 6.5] },
            { id: "h3", tip: "cizgi", renk: 0, from: [3.5, 2.5], to: [3.5, 6.5] },
            { id: "h4", tip: "cizgi", renk: 0, from: [4.5, 2.5], to: [4.5, 6.5] },
            { id: "h5", tip: "cizgi", renk: 2, from: [5.5, 2.5], to: [5.5, 6.5] },
            { id: "h6", tip: "cizgi", renk: 0, from: [6.5, 2.5], to: [6.5, 6.5] },
            { id: "h7", tip: "cizgi", renk: 0, from: [7.5, 2.5], to: [7.5, 6.5] },
            { id: "h8", tip: "cizgi", renk: 0, from: [8.5, 2.5], to: [8.5, 6.5] },
            { id: "h9", tip: "cizgi", renk: 0, from: [9.5, 2.5], to: [9.5, 6.5] },
            { id: "h10", tip: "cizgi", renk: 0, from: [10.5, 2.5], to: [10.5, 6.5] },
            { id: "h11", tip: "cizgi", renk: 0, from: [11.5, 2.5], to: [11.5, 6.5] },
            { id: "pr", tip: "ok", renk: 3, from: [4.5, 8.2], to: [8.5, 8.2], gizli: true },
            { id: "prx", tip: "yazi", x: 6.5, y: 8.75, metin: "yayılma yönü", gizli: true },
            { id: "cx", tip: "yazi", x: 3, y: 7.3, metin: "sıkışma", gizli: true },
            { id: "rx", tip: "yazi", x: 6, y: 7.3, metin: "seyrelme", gizli: true }
          ],
          durumlar: [
            { metin: "Dik çizgiler yayın halkalarıdır. Dalga gelmeden önce halkalar eşit aralıklı." },
            {
              metin: "t = 0. Halkalar bir yerde birbirine yaklaştı (==sıkışma==), başka yerde uzaklaştı (==seyrelme==).",
              set: {
                h0: { from: [0.725, 2.5], to: [0.725, 6.5] },
                h1: { from: [1.95, 2.5], to: [1.95, 6.5] },
                h2: { from: [2.725, 2.5], to: [2.725, 6.5] },
                h3: { from: [3.275, 2.5], to: [3.275, 6.5] },
                h4: { from: [4.05, 2.5], to: [4.05, 6.5] },
                h5: { from: [5.275, 2.5], to: [5.275, 6.5] },
                h6: { from: [6.725, 2.5], to: [6.725, 6.5] },
                h7: { from: [7.95, 2.5], to: [7.95, 6.5] },
                h8: { from: [8.725, 2.5], to: [8.725, 6.5] },
                h9: { from: [9.275, 2.5], to: [9.275, 6.5] },
                h10: { from: [10.05, 2.5], to: [10.05, 6.5] },
                h11: { from: [11.275, 2.5], to: [11.275, 6.5] }
              },
              goster: ["pr", "prx", "cx", "rx"]
            },
            {
              metin: "t = T/4. Sıkışma ve seyrelme bölgeleri sağa ilerledi.",
              set: {
                h0: { from: [0.11, 2.5], to: [0.11, 6.5] },
                h1: { from: [1.5, 2.5], to: [1.5, 6.5] },
                h2: { from: [2.89, 2.5], to: [2.89, 6.5] },
                h3: { from: [3.89, 2.5], to: [3.89, 6.5] },
                h4: { from: [4.5, 2.5], to: [4.5, 6.5] },
                h5: { from: [5.11, 2.5], to: [5.11, 6.5] },
                h6: { from: [6.11, 2.5], to: [6.11, 6.5] },
                h7: { from: [7.5, 2.5], to: [7.5, 6.5] },
                h8: { from: [8.89, 2.5], to: [8.89, 6.5] },
                h9: { from: [9.89, 2.5], to: [9.89, 6.5] },
                h10: { from: [10.5, 2.5], to: [10.5, 6.5] },
                h11: { from: [11.11, 2.5], to: [11.11, 6.5] },
                cx: { x: 4.5 },
                rx: { x: 7.5 }
              }
            },
            {
              metin: "t = T/2. Desen yine bir adım sağda. Kırmızı halkaya bak: sağa sola gidip geliyor.",
              set: {
                h0: { from: [0.275, 2.5], to: [0.275, 6.5] },
                h1: { from: [1.05, 2.5], to: [1.05, 6.5] },
                h2: { from: [2.275, 2.5], to: [2.275, 6.5] },
                h3: { from: [3.725, 2.5], to: [3.725, 6.5] },
                h4: { from: [4.95, 2.5], to: [4.95, 6.5] },
                h5: { from: [5.725, 2.5], to: [5.725, 6.5] },
                h6: { from: [6.275, 2.5], to: [6.275, 6.5] },
                h7: { from: [7.05, 2.5], to: [7.05, 6.5] },
                h8: { from: [8.275, 2.5], to: [8.275, 6.5] },
                h9: { from: [9.725, 2.5], to: [9.725, 6.5] },
                h10: { from: [10.95, 2.5], to: [10.95, 6.5] },
                h11: { from: [11.725, 2.5], to: [11.725, 6.5] },
                cx: { x: 6 },
                rx: { x: 9 }
              }
            },
            {
              metin: "t = 3T/4. ==Halka yalnızca yayın ekseni boyunca titreşir; dalga ilerler.== Titreşim yönü yayılma doğrultusuyla aynıdır.",
              set: {
                h0: { from: [0.89, 2.5], to: [0.89, 6.5] },
                h1: { from: [1.5, 2.5], to: [1.5, 6.5] },
                h2: { from: [2.11, 2.5], to: [2.11, 6.5] },
                h3: { from: [3.11, 2.5], to: [3.11, 6.5] },
                h4: { from: [4.5, 2.5], to: [4.5, 6.5] },
                h5: { from: [5.89, 2.5], to: [5.89, 6.5] },
                h6: { from: [6.89, 2.5], to: [6.89, 6.5] },
                h7: { from: [7.5, 2.5], to: [7.5, 6.5] },
                h8: { from: [8.11, 2.5], to: [8.11, 6.5] },
                h9: { from: [9.11, 2.5], to: [9.11, 6.5] },
                h10: { from: [10.5, 2.5], to: [10.5, 6.5] },
                h11: { from: [11.89, 2.5], to: [11.89, 6.5] },
                cx: { x: 7.5 },
                rx: { x: 10.5 }
              }
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "↔️", terim: "Longitudinal wave", tr: "boyuna dalga", tanim: "Titreşim yönü yayılma doğrultusuyla ==aynı== olan dalga.", ornek: "Havada ses, yayda sıkışma atması." },
            {
              ikon: "🗜️",
              terim: "Compression",
              tr: "sıkışma",
              tanim: "Parçacıkların birbirine yaklaştığı, yoğunluğun ve basıncın en büyük olduğu bölge. Dalga boyu, art arda iki sıkışma merkezi arasıdır.",
              ornek: "Yayı ittiğinde halkaların sıklaştığı yer."
            },
            { ikon: "🎈", terim: "Rarefaction", tr: "seyrelme", tanim: "Parçacıkların birbirinden uzaklaştığı, yoğunluğun ve basıncın en küçük olduğu bölge.", ornek: "Yayı çektiğinde halkaların açıldığı yer." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Boyuna dalgada tepe ve çukur yoktur",
          metin: "Ses dalgasını sinüs eğrisiyle çizmek, hava parçacıklarının yukarı aşağı gittiği anlamına gelmez; eğri basıncın ya da yoğunluğun konumla değişimidir.",
          yanlis: "Boyuna dalgada tepe ve çukurlar bulunur.",
          dogru: "Boyuna dalgada ==sıkışma== ve ==seyrelme== bulunur. Sınavda böyle yaz: *In a longitudinal wave, the particles vibrate parallel to the direction of propagation.*"
        }
      ]
    },
    {
      baslik: "Enine mi, boyuna mı? Karar verme",
      kisa: "Önce parçacığın hareket yönüne, sonra yayılma yönüne bak.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "〰️", baslik: "*Transverse* (enine)", maddeler: ["Titreşim yayılmaya dik", "Tepe ve çukur oluşur"] },
          sag: { ikon: "↔️", baslik: "*Longitudinal* (boyuna)", maddeler: ["Titreşim yayılmayla aynı doğrultuda", "Sıkışma ve seyrelme oluşur"] },
          oyun: [
            { metin: "İpi yukarı aşağı sallayınca ilerleyen atma.", cevap: "sol", neden: "İpin noktaları yukarı aşağı, atma yatay gider: dik." },
            { metin: "Havada yayılan ses.", cevap: "sag", neden: "Hava parçacıkları yayılma doğrultusunda ileri geri titreşir." },
            { metin: "Işık dalgası.", cevap: "sol", neden: "Elektromanyetik dalgalar enine dalgadır." },
            { metin: "Yayı eksenine doğru itip çekince oluşan sıkışmalar.", cevap: "sag", neden: "Halkalar yay boyunca titreşir: aynı doğrultu." },
            { metin: "Tribünde yapılan \"dalga\": herkes yukarı aşağı hareket eder, dalga yatay ilerler.", cevap: "sol", neden: "Titreşim dikey, yayılma yatay: dik." }
          ]
        },
        {
          tip: "tablo",
          baslik: "Hangi dalga hangi türden?",
          head: ["Dalga", "Ortam gerekir mi?", "Titreşim yönü"],
          rows: [
            ["Gerili ipteki atma", "Evet (mekanik)", "Enine"],
            ["Su yüzeyi dalgası", "Evet (mekanik)", "Enine (lise düzeyinde)"],
            ["Yaydaki sıkışma atması", "Evet (mekanik)", "Boyuna"],
            ["Havada ses", "Evet (mekanik)", "Boyuna"],
            ["Işık, radyo dalgası", "Hayır (elektromanyetik)", "Enine"]
          ],
          not: "Su yüzeyinde parçacıklar gerçekte daireye yakın bir yol çizer; lise düzeyinde enine dalga kabul edilir."
        },
        {
          tip: "ornek",
          baslik: "Bu dalga hangi türden?",
          durum: "Bir öğrenci yatay duran uzun bir yayı, ekseni doğrultusunda ileri geri iterek yayda sıkışma ve seyrelme bölgeleri gönderiyor. Dalga hangi türdendir?",
          adimlar: ["Halkaların hareket yönü: yayın ekseni boyunca ileri geri.", "Dalganın yayılma yönü de yay boyunca.", "İki yön aynı doğrultuda: boyuna dalga.", "Dalga yayın maddesinde ilerlediği için ortam gerekir: mekanik."],
          sonuc: "==Mekanik, boyuna dalga.== Sınavda böyle yaz: *It is a mechanical longitudinal wave because the coils move parallel to the direction of the wave.*"
        }
      ]
    },
    {
      baslik: "Yayılma boyutu: tek, iki ve üç boyutlu dalga",
      kisa: "Dalga enerjiyi bir doğru, bir yüzey ya da bütün uzay boyunca yayabilir.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Dalgayı boyutuna göre ayır",
          head: ["Yayılma boyutu", "Örnek", "Dalga cephesinin şekli"],
          rows: [["Tek boyutlu", "Gerili ip, yay", "Tek nokta"], ["İki boyutlu", "Su yüzeyi", "Doğru (düz dalga) ya da halka (dairesel dalga)"], ["Üç boyutlu", "Ses, ışık", "Düzlem ya da küre"]],
          not: "Sınavda böyle yaz: *Water waves on a surface are two-dimensional waves.*"
        },
        {
          tip: "tuzak",
          baslik: "Boyut ile titreşim yönünü karıştırma",
          metin: "Boyut dalganın yayıldığı uzayı, enine/boyuna ise parçacıkların titreşim yönünü anlatır. İkisi ayrı sorulardır.",
          yanlis: "Üç boyutlu dalga hep boyunadır, iki boyutlu dalga hep enine.",
          dogru: "Ses üç boyutlu ve ==boyuna==; ışık üç boyutlu ve ==enine==dir."
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
            "Dalgalar ortama göre mekanik / elektromanyetik, titreşim yönüne göre enine / boyuna, boyuta göre 1, 2, 3 boyutlu sınıflanır.",
            "Mekanik dalga ortam ister (ses, su, ip, deprem); elektromanyetik dalga boşlukta da gider (ışık, radyo, X-ışını); madde dalgaları (*matter waves*) üçüncü gruptur.",
            "Elektromanyetik dalgaların hepsi boşlukta c ≈ 3 × 10⁸ m/s hızla gider ve enine dalgadır.",
            "Enine dalgada titreşim yayılmaya diktir; tepe ve çukur oluşur.",
            "Boyuna dalgada titreşim yayılmayla aynı doğrultudadır; sıkışma ve seyrelme oluşur, λ iki sıkışma arasıdır.",
            "Ses mekanik ve boyunadır; ışık elektromanyetik ve enine.",
            "Ses uzay boşluğunda yayılmaz; ışık yayılır.",
            "Boyut (ip 1, su 2, ses ve ışık 3) ile titreşim yönü ayrı sınıflamalardır."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "Which of the following waves can travel through a vacuum?",
      opts: ["Sound wave", "Water surface wave", "X-ray", "Seismic wave in the Earth's crust"],
      a: 2,
      why: "X-ışını elektromanyetik bir dalgadır ve ortam gerektirmez. Diğer üçü mekanik dalgadır: ses havaya, su dalgası suya, deprem dalgası kayaca ihtiyaç duyar. A en çekici yanlış şıktır: ses çok bilinir ama boşlukta gitmez."
    },
    {
      q: "A student pushes and pulls the end of a long spring along the axis of the spring and creates compressions and rarefactions along it. Which statement is correct for this wave?",
      opts: ["Longitudinal, electromagnetic", "Longitudinal, mechanical", "Transverse, mechanical", "Transverse, electromagnetic"],
      a: 1,
      why: "Halkalar yayılma doğrultusunda titreştiği için dalga boyunadır; yay madde olduğundan mekaniktir. C en çekici yanlış şıktır: yayda enine atma da gönderilebilir ama burada sallama yay ekseni doğrultusundadır."
    },
    {
      q: "The table gives the properties of four waves. Which row contains an error?",
      fig: { type: "table", head: ["Wave", "Needs a medium?", "Direction of vibration"], rows: [["Sound", "Yes", "Longitudinal"], ["Light", "No", "Transverse"], ["Wave on a taut rope", "Yes", "Transverse"], ["Radio wave", "Yes", "Longitudinal"]] },
      opts: ["Sound", "Light", "Wave on a taut rope", "Radio wave"],
      a: 3,
      why: "Radyo dalgası elektromanyetiktir: ortam gerekmez ve enine dalgadır. Satırda iki bilgi de yanlış. Diğer satırlar doğrudur."
    },
    {
      q: "Two astronauts stand face to face in outer space wearing space suits. They cannot hear each other's voice but they can talk by radio. What is the reason?",
      opts: [
        "Sound cannot travel in a vacuum; radio waves are electromagnetic and travel in a vacuum.",
        "Radio waves are mechanical and sound is electromagnetic.",
        "Sound travels very slowly in a vacuum, and radio waves are faster.",
        "Radio waves are longitudinal and sound is transverse."
      ],
      a: 0,
      why: "Ses mekanik dalgadır ve ortam ister; boşlukta yayılamaz (yavaş değil, hiç yayılmaz). Telsiz dalgası elektromanyetiktir, boşlukta ilerler. C en çekici yanlış şıktır: ses boşlukta yavaşlamaz, hiç yayılmaz."
    },
    {
      q: "In a longitudinal wave the distance between two consecutive compressions is 12 cm. The particles of the medium vibrate back and forth 5 times per second. What is the speed of the wave?",
      opts: ["2.4 cm/s", "60 cm/s", "17 cm/s", "30 cm/s"],
      a: 1,
      why: "Boyuna dalgada λ iki sıkışma arasıdır: λ = 12 cm. f = 5 Hz. v = λf = 12 × 5 = 60 cm/s. A'da λ ÷ f yapılmış, D'de λ yarıya bölünmüş."
    }
  ]
};
