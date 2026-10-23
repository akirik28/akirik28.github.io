/* Kitpath not defteri · ph401 · 4.1 Dalgaların Temel Kavramları
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Physics Unit 4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph401",
  amac: "Bu konu dalganın ne olduğunu anlatıyor: dalga madde değil enerji taşır. Genlik, dalga boyu, periyot ve frekansı grafikten okumayı ve v = λf ile dalga hızını hesaplamayı öğreneceksin.",
  bolumler: [
    {
      baslik: "*Wave*: dalga enerji taşır, madde taşımaz",
      kisa: "Dalga ortamı taşımaz; enerjiyi bir yerden başka yere iletir.",
      bloklar: [
        {
          tip: "hikaye",
          ikon: "🏟️",
          baslik: "Tribünde \"dalga\" yapmak",
          metin: "Maçta taraftarlar sırayla kalkıp oturunca tribünde bir dalga döner. Dalga stadı baştan sona dolaşır ama kimse yerinden ayrılmaz; herkes olduğu yerde kalkıp oturur. Gerçek dalga da böyledir: ==titreşim ilerler, ortam yerinde kalır.=="
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "🌊", terim: "Wave", tr: "dalga", tanim: "Bir titreşimin ortamda yayılarak enerji taşımasıdır. ==Madde taşımaz.==", ornek: "Gölde taşın yaptığı halkalar kıyıya enerji taşır; su kıyıya gitmez." },
            { ikon: "🪢", terim: "Medium", tr: "ortam", tanim: "Dalganın içinden geçtiği madde: ip, su, hava, yer kabuğu.", ornek: "Salladığın ip, dalganın ortamıdır." },
            { ikon: "〰️", terim: "Pulse", tr: "atma", tanim: "Kaynağın tek bir kez titreşmesiyle oluşan ve ilerleyen tek bir bozulma.", ornek: "Gerili ipin ucunu bir kez sallamak." },
            { ikon: "🔁", terim: "Periodic wave", tr: "periyodik dalga", tanim: "Kaynak aynı hareketi düzenli aralıklarla tekrarlayınca oluşan, tepe ve çukurları art arda gelen dalga.", ornek: "İpi durmadan aşağı yukarı sallamak." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Dalgayla birlikte su da kıyıya gelir mi?",
          metin: "Denizdeki şamandıra dalga geçerken yukarı aşağı oynar ama dalgayla kıyıya sürüklenmez. Dalganın taşıdığı şey şamandıra değil, enerjidir.",
          yanlis: "Dalga, ortamın parçacıklarını da kaynaktan uzağa taşır.",
          dogru: "Parçacıklar denge konumları etrafında titreşir; dalga yalnızca ==enerji== taşır. Sınavda böyle yaz: *A wave transfers energy without transferring matter.*"
        }
      ]
    },
    {
      baslik: "Genlik ve dalga boyu: dalga grafiğini okumak",
      kisa: "Genlik denge çizgisinden tepeye, dalga boyu iki tepe arasındaki uzaklıktır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Konum–yer değiştirme grafiği (dalganın anlık fotoğrafı)",
          xlabel: "Konum x (cm)",
          ylabel: "Yer değiştirme y (cm)",
          xmax: 12,
          ymax: 9,
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }],
          yticks: [{ v: 4.5, label: "0" }, { v: 6.5, label: "+2" }, { v: 2.5, label: "−2" }],
          ogeler: [
            { id: "dn", tip: "cizgi", renk: 0, kesik: true, from: [0, 4.5], to: [12, 4.5] },
            { id: "dnl", tip: "yazi", x: 11.8, y: 4.9, metin: "denge", hiza: "end" },
            {
              id: "w",
              tip: "egri",
              renk: 1,
              noktalar: [
                [0, 4.5], [0.5, 5.914], [1, 6.5], [1.5, 5.914], [2, 4.5], [2.5, 3.086], [3, 2.5], [3.5, 3.086], [4, 4.5], [4.5, 5.914], [5, 6.5], [5.5, 5.914], [6, 4.5], [6.5, 3.086], [7, 2.5], [7.5, 3.086], [8, 4.5], [8.5, 5.914], [9, 6.5],
                [9.5, 5.914], [10, 4.5], [10.5, 3.086], [11, 2.5], [11.5, 3.086], [12, 4.5]
              ]
            },
            { id: "c1", tip: "nokta", renk: 2, x: 1, y: 6.5, etiket: "tepe", gizli: true },
            { id: "t1", tip: "nokta", renk: 2, x: 3, y: 2.5, etiket: "çukur", gizli: true },
            { id: "aok", tip: "ok", renk: 2, from: [1, 4.5], to: [1, 6.5], gizli: true },
            { id: "atx", tip: "yazi", x: 1.15, y: 7.1, metin: "A = 2 cm", hiza: "start", gizli: true },
            { id: "g1", tip: "cizgi", renk: 0, kesik: true, from: [1, 6.5], to: [1, 8.2], gizli: true },
            { id: "g2", tip: "cizgi", renk: 0, kesik: true, from: [5, 6.5], to: [5, 8.2], gizli: true },
            { id: "l1", tip: "ok", renk: 3, from: [3, 8.2], to: [1, 8.2], gizli: true },
            { id: "l2", tip: "ok", renk: 3, from: [3, 8.2], to: [5, 8.2], gizli: true },
            { id: "ltx", tip: "yazi", x: 3, y: 8.7, metin: "λ = 4 cm", gizli: true },
            { id: "a3", tip: "ok", renk: 2, from: [1, 4.5], to: [1, 7.5], gizli: true }
          ],
          durumlar: [
            { metin: "Dalga, dengedeki konumun (kesikli çizgi) altına ve üstüne giden düzenli bir eğridir." },
            { metin: "Genlik (*amplitude*, A): denge çizgisinden tepeye ya da çukura olan uzaklık. Burada A = 2 cm.", goster: ["c1", "t1", "aok", "atx"] },
            { metin: "Dalga boyu (*wavelength*, λ): art arda iki tepe (ya da iki çukur) arasındaki uzaklık. Burada λ = 4 cm.", goster: ["g1", "g2", "l1", "l2", "ltx"] },
            {
              metin: "Genliği 3 cm yaparsak dalga yükselir ama dalga boyu hâlâ 4 cm. ==Genlik ile dalga boyu birbirinden bağımsızdır.==",
              set: {
                w: {
                  noktalar: [
                    [0, 4.5], [0.5, 6.621], [1, 7.5], [1.5, 6.621], [2, 4.5], [2.5, 2.379], [3, 1.5], [3.5, 2.379], [4, 4.5], [4.5, 6.621], [5, 7.5], [5.5, 6.621], [6, 4.5], [6.5, 2.379], [7, 1.5], [7.5, 2.379], [8, 4.5], [8.5, 6.621], [9, 7.5],
                    [9.5, 6.621], [10, 4.5], [10.5, 2.379], [11, 1.5], [11.5, 2.379], [12, 4.5]
                  ]
                }
              },
              gizle: ["c1", "t1", "aok", "atx"],
              goster: ["a3"]
            }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            { ikon: "↕️", terim: "Amplitude", tr: "genlik", tanim: "Denge konumundan en uzak noktaya olan uzaklık. Genlik büyüdükçe dalga ==daha çok enerji== taşır.", ornek: "Büyük dalga, küçük dalgadan daha büyük genliklidir." },
            { ikon: "↔️", terim: "Wavelength", tr: "dalga boyu (λ)", tanim: "Art arda iki tepe ya da iki çukur arasındaki uzaklık; birimi metredir.", ornek: "Grafikte iki tepe 4 cm arayla ise λ = 4 cm." },
            { ikon: "⛰️", terim: "Crest", tr: "tepe", tanim: "Dalganın denge konumunun üstündeki en yüksek noktası.", ornek: "Su dalgasının en kabarık yeri." },
            { ikon: "🕳️", terim: "Trough", tr: "çukur", tanim: "Dalganın denge konumunun altındaki en alçak noktası.", ornek: "İki dalga tepesi arasındaki çukur kısım." }
          ]
        },
        { tip: "not", metin: "**Sınavda böyle yaz:** *The amplitude is 2 cm.* · *The wavelength is the distance between two consecutive crests.* · *The graph shows that the wavelength is 4 cm.*" }
      ]
    },
    {
      baslik: "Periyot ve frekans: titreşimin hızı",
      kisa: "Periyot bir titreşimin süresi, frekans saniyedeki titreşim sayısıdır: f = 1/T.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Zaman–yer değiştirme grafiği (tek bir noktanın kaydı)",
          xlabel: "Zaman t (s)",
          ylabel: "Yer değiştirme y (cm)",
          xmax: 8,
          ymax: 9,
          xticks: [{ v: 2, label: "2" }, { v: 4, label: "4" }, { v: 6, label: "6" }, { v: 8, label: "8" }],
          yticks: [{ v: 4.5, label: "0" }, { v: 6.5, label: "+2" }, { v: 2.5, label: "−2" }],
          ogeler: [
            { id: "tdn", tip: "cizgi", renk: 0, kesik: true, from: [0, 4.5], to: [8, 4.5] },
            {
              id: "ta",
              tip: "egri",
              renk: 1,
              noktalar: [
                [0, 4.5], [0.25, 5.914], [0.5, 6.5], [0.75, 5.914], [1, 4.5], [1.25, 3.086], [1.5, 2.5], [1.75, 3.086], [2, 4.5], [2.25, 5.914], [2.5, 6.5], [2.75, 5.914], [3, 4.5], [3.25, 3.086], [3.5, 2.5], [3.75, 3.086], [4, 4.5], [4.25, 5.914],
                [4.5, 6.5], [4.75, 5.914], [5, 4.5], [5.25, 3.086], [5.5, 2.5], [5.75, 3.086], [6, 4.5], [6.25, 5.914], [6.5, 6.5], [6.75, 5.914], [7, 4.5], [7.25, 3.086], [7.5, 2.5], [7.75, 3.086], [8, 4.5]
              ]
            },
            {
              id: "tb",
              tip: "egri",
              renk: 2,
              noktalar: [
                [0, 4.5], [0.125, 5.914], [0.25, 6.5], [0.375, 5.914], [0.5, 4.5], [0.625, 3.086], [0.75, 2.5], [0.875, 3.086], [1, 4.5], [1.125, 5.914], [1.25, 6.5], [1.375, 5.914], [1.5, 4.5], [1.625, 3.086], [1.75, 2.5], [1.875, 3.086], [2, 4.5],
                [2.125, 5.914], [2.25, 6.5], [2.375, 5.914], [2.5, 4.5], [2.625, 3.086], [2.75, 2.5], [2.875, 3.086], [3, 4.5], [3.125, 5.914], [3.25, 6.5], [3.375, 5.914], [3.5, 4.5], [3.625, 3.086], [3.75, 2.5], [3.875, 3.086], [4, 4.5],
                [4.125, 5.914], [4.25, 6.5], [4.375, 5.914], [4.5, 4.5], [4.625, 3.086], [4.75, 2.5], [4.875, 3.086], [5, 4.5], [5.125, 5.914], [5.25, 6.5], [5.375, 5.914], [5.5, 4.5], [5.625, 3.086], [5.75, 2.5], [5.875, 3.086], [6, 4.5],
                [6.125, 5.914], [6.25, 6.5], [6.375, 5.914], [6.5, 4.5], [6.625, 3.086], [6.75, 2.5], [6.875, 3.086], [7, 4.5], [7.125, 5.914], [7.25, 6.5], [7.375, 5.914], [7.5, 4.5], [7.625, 3.086], [7.75, 2.5], [7.875, 3.086], [8, 4.5]
              ],
              gizli: true
            },
            { id: "tg1", tip: "cizgi", renk: 0, kesik: true, from: [0.5, 6.5], to: [0.5, 7.9], gizli: true },
            { id: "tg2", tip: "cizgi", renk: 0, kesik: true, from: [2.5, 6.5], to: [2.5, 7.9], gizli: true },
            { id: "tp1", tip: "ok", renk: 3, from: [1.5, 7.9], to: [0.5, 7.9], gizli: true },
            { id: "tp2", tip: "ok", renk: 3, from: [1.5, 7.9], to: [2.5, 7.9], gizli: true },
            { id: "tptx", tip: "yazi", x: 1.5, y: 8.5, metin: "T = 2 s", gizli: true },
            { id: "n1", tip: "nokta", renk: 3, x: 0.5, y: 6.5, etiket: "1", gizli: true },
            { id: "n2", tip: "nokta", renk: 3, x: 2.5, y: 6.5, etiket: "2", gizli: true },
            { id: "n3", tip: "nokta", renk: 3, x: 4.5, y: 6.5, etiket: "3", gizli: true },
            { id: "n4", tip: "nokta", renk: 3, x: 6.5, y: 6.5, etiket: "4", gizli: true }
          ],
          durumlar: [
            { metin: "Bu grafikte yatay eksen ==zamandır==. Eğri, dalga geçerken ortamın tek bir noktasının yukarı aşağı hareketini gösterir." },
            { metin: "Periyot (*period*, T): bir tam titreşimin süresi; yani art arda iki tepe arasındaki ==zaman==. Burada T = 2 s.", goster: ["tg1", "tg2", "tp1", "tp2", "tptx"] },
            { metin: "8 saniyede 4 tepe sayıyoruz: 4 titreşim. Frekans = 4 ÷ 8 = 0,5 Hz ve gerçekten 1/T = 1/2 = 0,5 Hz.", gizle: ["tg1", "tg2", "tp1", "tp2", "tptx"], goster: ["n1", "n2", "n3", "n4"] },
            { metin: "Titreşimi hızlandıralım (kırmızı eğri): T = 1 s, 8 saniyede 8 titreşim, f = 1 Hz. ==Periyot yarıya indi, frekans iki katına çıktı.==", goster: ["tb"], gizle: ["n1", "n2", "n3", "n4"] }
          ]
        },
        { tip: "formul", parcalar: [{ t: "f", alt: "frekans (Hz)" }, "=", { t: "1 / T", alt: "T: periyot (s)" }], aciklama: "1 Hz, saniyede 1 titreşim demektir. Frekans ile periyot ==ters orantılıdır==: biri iki katına çıkarsa öteki yarıya iner." },
        {
          tip: "ornek",
          baslik: "Şamandıra kaç hertz?",
          durum: "Göldeki bir şamandıra 10 saniyede 20 kez yukarı aşağı titreşiyor. Frekansı ve periyodu kaçtır?",
          adimlar: ["Frekans = titreşim sayısı ÷ süre = 20 ÷ 10 = 2 Hz.", "Periyot = 1 ÷ f = 1 ÷ 2 = 0,5 s.", "Kontrol: T = süre ÷ titreşim sayısı = 10 ÷ 20 = 0,5 s ✓."],
          sonuc: "==f = 2 Hz, T = 0,5 s.== Sınavda böyle yaz: *The frequency is the number of oscillations per second.*"
        },
        {
          tip: "ornek",
          baslik: "Tepe saymak: 4 tepe = 3 dalga",
          durum: "Bir dalga leğeninde cetvelin önünden art arda 4 tepe geçmesi 1,5 s sürdü. Periyodu ve frekansı bul.",
          adimlar: ["4 tepe arasında 3 tam dalga var (başlangıç tepesi sayılmaz).", "T = 1,5 ÷ 3 = 0,5 s.", "f = 1 ÷ T = 2 Hz."],
          sonuc: "T = 0,5 s ve f = 2 Hz. Tuzak: 4 ÷ 1,5 ≈ 2,7 Hz yazmak. Sınavda böyle yaz: *There are three waves between four crests.*"
        }
      ]
    },
    {
      baslik: "Dalga hızı: v = λ f",
      kisa: "Dalga bir periyotta bir dalga boyu yol alır: v = λ/T = λf.",
      bloklar: [
        {
          tip: "adimlar",
          baslik: "Formül nereden geliyor?",
          adimlar: [
            { baslik: "Bir periyotta", metin: "Dalga T süresinde tam bir dalga boyu (λ) ilerler." },
            { baslik: "Hız = yol ÷ zaman", metin: "Yol λ, zaman T olduğundan v = λ / T." },
            { baslik: "1/T yerine f", metin: "1/T = f olduğundan ==v = λ × f== olur." }
          ]
        },
        { tip: "formul", parcalar: [{ t: "v", alt: "hız (m/s)" }, "=", { t: "λ", alt: "dalga boyu (m)" }, "×", { t: "f", alt: "frekans (Hz)" }], aciklama: "Birim kontrolü: m × (1/s) = m/s. Aynı formülden λ = v / f ve f = v / λ da çıkar." },
        {
          tip: "ornek",
          baslik: "Su dalgasının hızı",
          durum: "Gölde art arda iki tepe arasındaki uzaklık 2 m. Dalgalar iskeleye saniyede 2 kez çarpıyor. Dalganın hızı kaçtır?",
          adimlar: ["λ = 2 m (iki ardışık tepe arası).", "f = 2 Hz (saniyede 2 titreşim).", "v = λ × f = 2 × 2 = 4 m/s.", "Tersi de çalışır: v ve f biliniyorsa λ = v ÷ f."],
          sonuc: "==v = 4 m/s.== Dalga her saniye 4 m ilerler."
        },
        {
          tip: "tuzak",
          baslik: "Frekans artınca hız da artar mı?",
          metin: "Aynı ortamda dalga hızı sabittir. Frekansı artırınca dalga boyu küçülür; hız değişmez (nedeni bir sonraki defterde).",
          yanlis: "Frekans iki katına çıkarsa dalga hızı da iki katına çıkar.",
          dogru: "Ortam aynıysa ==v sabit==; f iki katına çıkarsa λ yarıya iner. Sınavda böyle yaz: *In the same medium the speed is constant, so a higher frequency means a shorter wavelength.*"
        }
      ]
    },
    {
      baslik: "Aynı fazda ve zıt fazda noktalar",
      kisa: "Aynı fazdaki ardışık noktalar bir dalga boyu, zıt fazdakiler yarım dalga boyu uzaktadır.",
      bloklar: [
        {
          tip: "ikili",
          sol: { ikon: "🤝", baslik: "*In phase* (aynı faz)", maddeler: ["Aynı anda aynı yönde titreşen noktalar", "Aralarındaki uzaklık λ, 2λ, 3λ …"] },
          sag: { ikon: "🔀", baslik: "*Out of phase* (zıt faz)", maddeler: ["Biri yukarı giderken öteki aşağı giden noktalar", "Aralarındaki uzaklık λ/2, 3λ/2, 5λ/2 …"] },
          oyun: [
            { metin: "Art arda iki tepe noktası.", cevap: "sol", neden: "Aralarında λ var; aynı anda aynı yönde titreşirler." },
            { metin: "Bir tepe ile hemen yanındaki çukur.", cevap: "sag", neden: "Aralarında λ/2 var; biri yukarıda, öteki aşağıda." },
            { metin: "Aralarında 2λ uzaklık bulunan iki nokta.", cevap: "sol", neden: "λ'nın tam katı olan uzaklık aynı faz demektir." },
            { metin: "Aralarında 3λ/2 uzaklık bulunan iki nokta.", cevap: "sag", neden: "Yarım dalga boyunun tek katı zıt faz demektir." }
          ]
        },
        {
          tip: "ornek",
          baslik: "İki iskele arasındaki tepeler",
          durum: "Bir gölde dalga, birbirinden 40,0 m uzaktaki iki iskeleden geçiyor. Her iskelede bir tepe var ve ikisinin arasında 3 tepe daha bulunuyor. Bir iskeleden 16,0 s'de 10 dalga geçiyor. Dalga boyunu, periyodu, frekansı ve hızı bul.",
          adimlar: ["Toplam 5 tepe var, arada 4 dalga boyu: 4λ = 40 m → λ = 10 m.", "10 dalga 16 s'de: T = 16 ÷ 10 = 1,6 s; f = 1 ÷ 1,6 = 0,625 Hz.", "v = λ × f = 10 × 0,625 = 6,25 m/s."],
          sonuc: "λ = 10 m, T = 1,6 s, f = 0,625 Hz, v = 6,25 m/s. Sınavda böyle yaz: *The distance between consecutive crests is the wavelength.*"
        },
        {
          tip: "tablo",
          baslik: "Grafikte hangi uzaklık neyi verir?",
          head: ["Ölçülen uzaklık", "Grafik", "Değer"],
          rows: [["Denge çizgisi → tepe", "y–x ya da y–t", "A (genlik)"], ["Tepe → çukur (dikey)", "y–x ya da y–t", "2A"], ["Tepe → tepe (yatay)", "y–x", "λ"], ["Tepe → komşu çukur (yatay)", "y–x", "λ/2"], ["Tepe → tepe (yatay)", "y–t", "T"]],
          not: "Sınavda böyle yaz: *The distance between a crest and the next trough is half a wavelength.*"
        }
      ]
    },
    {
      baslik: "İki grafik, bir hız",
      kisa: "y–x grafiğinden λ, y–t grafiğinden T oku; sonra v = λ/T.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Hangi grafik neyi verir?",
          head: ["", "y–x grafiği (anlık fotoğraf)", "y–t grafiği (tek noktanın kaydı)"],
          rows: [["Yatay eksen", "Konum x", "Zaman t"], ["İki tepe arası", "Dalga boyu λ", "Periyot T"], ["Dikey eksen", "Yer değiştirme y", "Yer değiştirme y"], ["Genlik A", "Dikeyden okunur", "Dikeyden okunur"]]
        },
        {
          tip: "ornek",
          baslik: "İki grafikten dalga hızı",
          durum: "Bir ipteki dalganın y–x grafiğinde art arda iki tepe arası 40 cm. İpteki bir noktanın y–t grafiğinde art arda iki tepe arası 0,5 s. Dalganın hızı kaçtır?",
          adimlar: ["y–x grafiğinden λ = 40 cm = 0,4 m.", "y–t grafiğinden T = 0,5 s.", "v = λ ÷ T = 0,4 ÷ 0,5 = 0,8 m/s.", "Kontrol: f = 1/T = 2 Hz ve v = λf = 0,4 × 2 = 0,8 m/s ✓."],
          sonuc: "==v = 0,8 m/s (80 cm/s).== Sınavda böyle yaz: *The graph shows that the period is 0.5 s, so the speed is 0.8 m/s.*"
        },
        {
          tip: "ornek",
          baslik: "Sonar yankısı ve ışığın hızı",
          durum: "Duran bir geminin sonarı suya 5,0 × 10⁴ Hz frekanslı sinyal gönderiyor; sinyalin sudaki hızı 1,5 × 10³ m/s. Dipten dönen yankı 4,0 s sonra alınıyor. Dalga boyu ve deniz derinliği nedir? Ay'dan Dünya'ya olan 3,84 × 10⁸ m'yi ışık (3 × 10⁸ m/s) kaç saniyede alır?",
          adimlar: ["λ = v ÷ f = 1,5 × 10³ ÷ 5,0 × 10⁴ = 0,03 m.", "Sinyal dibe gidip döndü: 2d = v × t = 1500 × 4 = 6000 → d = 3000 m.", "Işık: t = yol ÷ hız = 3,84 × 10⁸ ÷ 3 × 10⁸ ≈ 1,28 ≈ 1,3 s."],
          sonuc: "λ = 0,03 m, derinlik 3000 m, ışık Ay'dan 1,3 s'de gelir. Gidiş-dönüş yolu için ikiye bölmeyi unutma. Sınavda böyle yaz: *The signal travels to the bottom and back, so the depth is half of the distance.*"
        },
        {
          tip: "tuzak",
          baslik: "Grafik karıştırma",
          metin: "İki grafik de sinüs gibi görünür; fark yatay eksendedir. Eksen adını okumadan \"iki tepe arası dalga boyudur\" demek en sık yapılan hatadır.",
          yanlis: "Tepeler arası uzaklık her grafikte dalga boyudur.",
          dogru: "x ekseni konumsa tepeler arası ==λ==, t ekseni zamansa ==T==dir."
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
            "Dalga enerji taşır, madde taşımaz; ortamın parçacıkları denge konumları etrafında titreşir.",
            "*Pulse* tek bir bozulmadır; *periodic wave* tekrar eden dalgadır.",
            "Genlik (A): denge çizgisinden tepeye. Dalga boyu (λ): iki tepe arası. Tepe–komşu çukur yatayda λ/2.",
            "Periyot (T): bir titreşimin süresi (s). Frekans (f): saniyedeki titreşim sayısı (Hz). f = 1/T.",
            "Dalga hızı v = λ × f = λ / T.",
            "Aynı ortamda v sabit: f artarsa λ küçülür.",
            "y–x grafiğinden λ, y–t grafiğinden T okunur; önce eksen adına bak.",
            "Genlik dalga boyunu ve periyodu değiştirmez; dalganın taşıdığı enerjiyi belirler."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "A cork floating on a lake bobs up and down while waves travel toward the shore. Which statement is correct?",
      opts: ["The cork is carried toward the shore with the wave.", "The wave transfers energy to the cork, but the cork stays around its average position.", "The wave transfers only matter, not energy.", "The frequency of the cork is equal to the speed of the wave."],
      a: 1,
      why: "Dalga enerji taşır; ortamın parçacıkları denge konumları etrafında titreşir. A en çekici yanlış şıktır: \"dalga suyu da getirir\" yanılgısıdır. D'de frekans (Hz) ile hız (m/s) farklı büyüklüklerdir."
    },
    {
      q: "The measurements for a periodic wave on a string are given in the table. What is the speed of the wave?",
      fig: { type: "table", head: ["Measurement", "Value"], rows: [["Distance between two consecutive crests", "0.6 m"], ["Distance from the equilibrium line to a crest", "0.1 m"], ["Number of oscillations of a point in 5 seconds", "10"]] },
      opts: ["0.3 m/s", "0.6 m/s", "1.2 m/s", "6 m/s"],
      a: 2,
      why: "λ = 0,6 m (genlik hıza girmez). f = 10 ÷ 5 = 2 Hz. v = λf = 0,6 × 2 = 1,2 m/s. D'de titreşim sayısı (10) frekans sanılmış; A'da λ ÷ f hesaplanmış."
    },
    {
      q: "The values read from the y–x graph of a wave and from the y–t graph of one point on the rope are given in the table. What is the speed of the wave?",
      fig: { type: "table", head: ["Graph", "Value read"], rows: [["y–x: distance between two consecutive crests", "3 m"], ["y–t: time between two consecutive troughs", "0.25 s"]] },
      opts: ["0.75 m/s", "3 m/s", "4 m/s", "12 m/s"],
      a: 3,
      why: "y–x grafiğinden λ = 3 m, y–t grafiğinden T = 0,25 s. v = λ ÷ T = 3 ÷ 0,25 = 12 m/s. A'da λ ile T çarpılmış; C'deki 4 ise frekanstır (1/T), hız değil."
    },
    {
      q: "A student shakes a taut rope at the same frequency as before but with twice the amplitude. Which statement is correct?",
      opts: ["The wave speed doubles.", "The wavelength doubles.", "The wave speed and the wavelength do not change; the wave carries more energy.", "The period is halved."],
      a: 2,
      why: "Hızı ortam, frekansı kaynağın frekansı belirler; ikisi aynı kaldığı için λ = v/f de aynı kalır. Genlik büyürse yalnızca taşınan enerji artar. A en çekici yanlış şıktır: \"sert sallarsam hızlı gider\" sanılır."
    },
    {
      q: "A student counts the crests of a water wave passing a ruler in a ripple tank. Four crests pass in 1.5 s. What is the frequency of the wave?",
      opts: ["2 Hz", "2.7 Hz", "0.5 Hz", "6 Hz"],
      a: 0,
      why: "4 tepe arasında 3 tam dalga vardır: T = 1,5 ÷ 3 = 0,5 s ve f = 1 ÷ 0,5 = 2 Hz. 2,7 Hz tuzak cevaptır (4 ÷ 1,5): başlangıç tepesini de dalga saymaktır."
    }
  ]
};
