/* Kitora not defteri · ph403 · 4.3 Dalga Hızını Etkileyenler
   Kapsam: defter-araclari/kaynak/okul-10-2025-26.md (Physics Unit 4). Blok türleri: /ap/_kit/defter.js başı. */
window.DEFTER = {
  slug: "ph403",
  amac: "Bu konu dalganın hızını neyin belirlediğini anlatıyor: hız ortama bağlıdır, kaynağa değil. İpte gerginliğin ve kalınlığın, suda derinliğin, ses ve ışıkta ortamın hızı nasıl değiştirdiğini öğreneceksin.",
  bolumler: [
    {
      baslik: "Hızı ortam belirler, frekansı kaynak",
      kisa: "Hız ortama, frekans kaynağa bağlıdır; dalga boyu ikisinden çıkar.",
      bloklar: [
        { tip: "formul", parcalar: [{ t: "v", alt: "ortam belirler" }, "=", { t: "λ", alt: "v ve f'ten çıkar" }, "×", { t: "f", alt: "kaynak belirler" }], aciklama: "Kaynağın frekansı değişirse hız sabit kalır, dalga boyu değişir: λ = v / f." },
        {
          tip: "grafik",
          baslik: "Aynı ip (v = 4 m/s): frekans artınca dalga boyu küçülür",
          xlabel: "Frekans f (Hz)",
          ylabel: "Dalga boyu λ (m)",
          xmax: 9,
          ymax: 9,
          xticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 8, label: "8" }],
          yticks: [{ v: 1, label: "1" }, { v: 2, label: "2" }, { v: 4, label: "4" }, { v: 8, label: "8" }],
          ogeler: [
            { id: "c", tip: "egri", renk: 1, noktalar: [[0.5, 8], [0.75, 5.333], [1, 4], [1.5, 2.667], [2, 2], [3, 1.333], [4, 1], [6, 0.667], [8, 0.5]] },
            { id: "p1", tip: "nokta", renk: 2, x: 1, y: 4, etiket: "1 Hz · 4 m", kilavuz: true, gizli: true },
            { id: "p2", tip: "nokta", renk: 2, x: 2, y: 2, etiket: "2 Hz · 2 m", kilavuz: true, gizli: true },
            { id: "p3", tip: "nokta", renk: 2, x: 4, y: 1, etiket: "4 Hz · 1 m", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "Aynı ipte dalga hızı v = 4 m/s sabit. Dalga boyu λ = v / f eğrisini izler." },
            { metin: "f = 1 Hz → λ = 4 ÷ 1 = 4 m.", goster: ["p1"] },
            { metin: "Frekans iki katına çıkınca (2 Hz) dalga boyu yarıya iner: λ = 2 m.", goster: ["p2"] },
            { metin: "f = 4 Hz → λ = 1 m. ==Hız hep 4 m/s kaldı; frekans artınca dalga boyu küçüldü.==", goster: ["p3"] }
          ]
        },
        {
          tip: "ikili",
          sol: { ikon: "🪢", baslik: "Ortam belirler", maddeler: ["Dalga hızı v", "İpin gerginliği ve kalınlığı, suyun derinliği, ortamın cinsi"] },
          sag: { ikon: "✋", baslik: "Kaynak belirler", maddeler: ["Frekans f ve periyot T", "Genlik (ne kadar sert sallandığı)"] },
          oyun: [
            { metin: "Gerili ipin gerginliğini artırınca değişen büyüklük: dalga hızı.", cevap: "sol", neden: "Hızı ortamın özellikleri (gerginlik) belirler." },
            { metin: "Elini iki kat hızlı sallayınca iki katına çıkan büyüklük: frekans.", cevap: "sag", neden: "Frekansı titreşen kaynak belirler." },
            { metin: "Su sığlaşınca küçülen büyüklük: dalga hızı.", cevap: "sol", neden: "Derinlik ortamın özelliğidir; hız ortamla değişir." },
            { metin: "İpi daha büyük açıyla sallayınca büyüyen büyüklük: genlik.", cevap: "sag", neden: "Genliği kaynağın ne kadar sallandığı belirler." }
          ]
        },
        {
          tip: "tuzak",
          baslik: "Sert sallarsam dalga daha hızlı gider mi?",
          metin: "İpi hızlı ya da büyük genlikle sallamak dalganın hızını değiştirmez; hızı ipin kendisi (gerginliği ve kalınlığı) belirler.",
          yanlis: "Daha sert sallarsam dalga daha hızlı ilerler.",
          dogru: "Genlik ve frekans kaynağa aittir; ==hız ortama bağlıdır==. Sınavda böyle yaz: *The speed of a wave depends only on the medium, not on the source.*"
        }
      ]
    },
    {
      baslik: "İpte ve yayda hız: gerginlik ve kalınlık (ek bilgi: sayılar)",
      kisa: "Gerginlik arttıkça hız artar; ip kalın (ağır) olursa hız azalır.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "İpte hız–gerginlik grafiği",
          xlabel: "Gerginlik T (N)",
          ylabel: "Hız v (m/s)",
          xmax: 20,
          ymax: 9,
          xticks: [{ v: 4, label: "4" }, { v: 8, label: "8" }, { v: 12, label: "12" }, { v: 16, label: "16" }],
          yticks: [{ v: 2, label: "10" }, { v: 4, label: "20" }, { v: 6, label: "30" }, { v: 8, label: "40" }],
          ogeler: [
            { id: "ca", tip: "egri", renk: 1, noktalar: [[0, 0], [0.25, 1], [1, 2], [2.25, 3], [4, 4], [6.25, 5], [9, 6], [12.25, 7], [16, 8]], etiket: "ince ip" },
            { id: "cb", tip: "egri", renk: 3, noktalar: [[0, 0], [0.25, 0.5], [1, 1], [2.25, 1.5], [4, 2], [6.25, 2.5], [9, 3], [12.25, 3.5], [16, 4]], etiket: "kalın ip", gizli: true },
            { id: "q1", tip: "nokta", renk: 2, x: 4, y: 4, etiket: "4 N · 20 m/s", kilavuz: true, gizli: true },
            { id: "q2", tip: "nokta", renk: 2, x: 16, y: 8, etiket: "16 N · 40 m/s", kilavuz: true, gizli: true },
            { id: "q3", tip: "nokta", renk: 2, x: 16, y: 4, etiket: "16 N · 20 m/s", kilavuz: true, gizli: true }
          ],
          durumlar: [
            { metin: "İnce ip (μ = 0,01 kg/m): gerginlik arttıkça dalga hızı artar." },
            { metin: "T = 4 N iken v = 20 m/s.", goster: ["q1"] },
            { metin: "Gerginliği 4 katına (16 N) çıkarırsak hız yalnızca ==2 katına== (40 m/s) çıkar.", goster: ["q2"] },
            { metin: "Aynı gerginlikte daha kalın (ağır) ip, μ = 0,04 kg/m: hız yarıya iner (16 N'de 20 m/s).", goster: ["cb", "q3"] }
          ]
        },
        {
          tip: "kavramlar",
          kartlar: [
            {
              ikon: "🪢",
              terim: "Tension",
              tr: "gerginlik (T)",
              tanim: "İpi geren kuvvet; birimi newton (N). İp ne kadar gergin olursa içinden dalga o kadar hızlı geçer.",
              ornek: "Gitar telini sıkınca ses tizleşir: tel gerildikçe dalga hızı artar."
            },
            { ikon: "⚖️", terim: "Linear mass density", tr: "birim uzunluğun kütlesi (μ)", tanim: "μ = m / L; birimi kg/m. Kalın ya da ağır ipte μ büyüktür.", ornek: "Gitarın kalın bas teli, ince tele göre daha büyük μ'ye sahiptir." }
          ]
        },
        {
          tip: "formul",
          parcalar: [{ t: "v", alt: "hız (m/s)" }, "=", { t: "√( T / μ )", alt: "T: gerginlik (N) · μ: ipin birim uzunluğunun kütlesi (kg/m)" }],
          aciklama: "Önce yönü bil: T arttıkça v artar; μ (ip kalınlığı) arttıkça v azalır. Ek bilgi: bu sayısal formül ders sunumlarında görülmedi; asıl önemli olan yön ilişkisidir."
        },
        {
          tip: "ornek",
          baslik: "Gerginliği artırınca",
          durum: "Kütlesi 20 g olan 2 m'lik bir ip 4 N ile geriliyor. Dalga hızı kaçtır? Gerginlik 16 N olursa hız ve (f = 10 Hz için) dalga boyu nasıl değişir?",
          adimlar: ["μ = 0,02 kg ÷ 2 m = 0,01 kg/m.", "T = 4 N: v = √(4 ÷ 0,01) = √400 = 20 m/s.", "T = 16 N: v = √(16 ÷ 0,01) = √1600 = 40 m/s. Gerginlik 4 katına, hız 2 katına çıktı.", "f = 10 Hz sabit: λ = v ÷ f → 20 ÷ 10 = 2 m ve 40 ÷ 10 = 4 m."],
          sonuc: "==20 m/s → 40 m/s;== frekans aynı kaldığı için dalga boyu 2 m'den 4 m'ye çıkar. Sınavda böyle yaz: *When the tension increases, the wave speed increases.*"
        }
      ]
    },
    {
      baslik: "Su dalgaları: derinlik hızı değiştirir",
      kisa: "Su sığlaştıkça dalga yavaşlar; derin suda hız büyüktür.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Derinlik ve hız (sığ su dalgası, yaklaşık)",
          head: ["Su derinliği h", "Dalga hızı v ≈ √(g h)  (g ≈ 10 m/s²)"],
          rows: [["0,1 m", "1 m/s"], ["0,4 m", "2 m/s"], ["0,9 m", "3 m/s"]],
          not: "Derinlik arttıkça hız artar. Bu formül dalga boyunun derinlikten çok büyük olduğu dalgalar içindir; sınavda asıl bilgi \"sığda yavaş, derinde hızlı\"dır. Sınavda böyle yaz: *Water waves travel more slowly in shallow water than in deep water.*"
        },
        {
          tip: "adimlar",
          baslik: "Dalga kıyıya yaklaşırken",
          adimlar: [
            { baslik: "Su sığlaşır", metin: "Dalganın hızı azalır." },
            { baslik: "Frekans aynı", metin: "Kaynak değişmediği için f sabit kalır; λ = v / f küçülür." },
            { baslik: "Dalgalar sıklaşır", metin: "Art arda gelen dalga tepeleri birbirine yaklaşır." }
          ]
        }
      ]
    },
    {
      baslik: "Ses dalgasının hızı: katı, sıvı, gaz",
      kisa: "Ses genellikle katıda en hızlı, gazda en yavaş yayılır; sıcak havada daha hızlıdır.",
      bloklar: [
        {
          tip: "tablo",
          baslik: "Ses hızı ortama göre değişir",
          head: ["Ortam", "Ses hızı (yaklaşık)"],
          rows: [["Hava (20 °C)", "340 m/s"], ["Su", "1500 m/s"], ["Çelik", "5000 m/s"]],
          not: "Sıcaklık arttıkça havada ses hızı artar. Sınavda böyle yaz: *Sound travels fastest in solids and slowest in gases.*"
        },
        {
          tip: "ornek",
          baslik: "Şimşek ne kadar uzakta?",
          durum: "Bir şimşek çakıyor; ışığı gördükten 3 saniye sonra gök gürültüsünü duyuyorsun. Havada ses hızı 340 m/s; ışığın gelişi anlık kabul edilir. Şimşek sana kaç metre uzakta?",
          adimlar: ["Işık anlık kabul edilir; ölçtüğümüz 3 s, sesin yolculuk süresidir.", "Yol = hız × zaman = 340 × 3 = 1020 m.", "Yaklaşık 1 km: \"3 saniye ≈ 1 km\" kuralı."],
          sonuc: "==≈ 1020 m (yaklaşık 1 km).== Sınavda böyle yaz: *Light travels so fast that its travel time can be neglected compared with sound.*"
        },
        {
          tip: "tuzak",
          baslik: "Tiz ses daha hızlı mı gider?",
          metin: "Tiz (yüksek frekanslı) ve pes (alçak frekanslı) sesler aynı havada aynı hızla ilerler. Hızı değiştiren ortamdır (cinsi ve sıcaklığı).",
          yanlis: "Tiz sesler pes seslerden daha hızlı ilerler.",
          dogru: "Aynı ortamda hız aynıdır; frekans yalnızca ==dalga boyunu== değiştirir (λ = v/f). Sınavda böyle yaz: *The speed of sound depends on the medium, not on the pitch.*"
        }
      ]
    },
    {
      baslik: "Ortam değişince: f sabit, v ve λ değişir",
      kisa: "Dalga başka ortama geçince hızı ve dalga boyu değişir; frekansı değişmez.",
      bloklar: [
        {
          tip: "grafik",
          baslik: "Hızlı ortamdan yavaş ortama geçen dalga",
          xlabel: "Konum x (cm)",
          ylabel: "Yer değiştirme y (cm)",
          xmax: 12,
          ymax: 9,
          xticks: [{ v: 6, label: "sınır" }],
          yticks: [{ v: 4.5, label: "0" }],
          ogeler: [
            { id: "dn", tip: "cizgi", renk: 0, kesik: true, from: [0, 4.5], to: [12, 4.5] },
            { id: "L", tip: "egri", renk: 1, noktalar: [[0, 4.5], [0.5, 5.914], [1, 6.5], [1.5, 5.914], [2, 4.5], [2.5, 3.086], [3, 2.5], [3.5, 3.086], [4, 4.5], [4.5, 5.914], [5, 6.5], [5.5, 5.914], [6, 4.5]] },
            { id: "m1", tip: "yazi", x: 3, y: 0.7, metin: "Ortam 1 (hızlı)" },
            { id: "bd", tip: "cizgi", renk: 3, kesik: true, from: [6, 0.3], to: [6, 8.7], gizli: true },
            {
              id: "R",
              tip: "egri",
              renk: 2,
              noktalar: [
                [6, 4.5], [6.25, 3.086], [6.5, 2.5], [6.75, 3.086], [7, 4.5], [7.25, 5.914], [7.5, 6.5], [7.75, 5.914], [8, 4.5], [8.25, 3.086], [8.5, 2.5], [8.75, 3.086], [9, 4.5], [9.25, 5.914], [9.5, 6.5], [9.75, 5.914], [10, 4.5],
                [10.25, 3.086], [10.5, 2.5], [10.75, 3.086], [11, 4.5], [11.25, 5.914], [11.5, 6.5], [11.75, 5.914], [12, 4.5]
              ],
              gizli: true
            },
            { id: "m2", tip: "yazi", x: 9, y: 0.7, metin: "Ortam 2 (yavaş)", gizli: true },
            { id: "g1", tip: "cizgi", renk: 0, kesik: true, from: [1, 6.5], to: [1, 7.7], gizli: true },
            { id: "g2", tip: "cizgi", renk: 0, kesik: true, from: [5, 6.5], to: [5, 7.7], gizli: true },
            { id: "a1", tip: "ok", renk: 1, from: [3, 7.7], to: [1, 7.7], gizli: true },
            { id: "a2", tip: "ok", renk: 1, from: [3, 7.7], to: [5, 7.7], gizli: true },
            { id: "l1", tip: "yazi", x: 3, y: 8.3, metin: "λ₁ = 4 cm", gizli: true },
            { id: "h1", tip: "cizgi", renk: 0, kesik: true, from: [7.5, 6.5], to: [7.5, 7.7], gizli: true },
            { id: "h2", tip: "cizgi", renk: 0, kesik: true, from: [9.5, 6.5], to: [9.5, 7.7], gizli: true },
            { id: "b1", tip: "ok", renk: 2, from: [8.5, 7.7], to: [7.5, 7.7], gizli: true },
            { id: "b2", tip: "ok", renk: 2, from: [8.5, 7.7], to: [9.5, 7.7], gizli: true },
            { id: "l2", tip: "yazi", x: 8.5, y: 8.3, metin: "λ₂ = 2 cm", gizli: true },
            { id: "ff", tip: "yazi", x: 6, y: 1.6, metin: "f₁ = f₂", gizli: true }
          ],
          durumlar: [
            { metin: "Ortam 1'de dalga boyu λ₁ = 4 cm. Dalga boyunu art arda iki tepeden ölçeriz.", goster: ["g1", "g2", "a1", "a2", "l1"] },
            { metin: "Dalga yavaş ortama (2) geçince dalga boyu kısalır: λ₂ = 2 cm.", goster: ["bd", "R", "m2", "h1", "h2", "b1", "b2", "l2"] },
            { metin: "Kaynak aynı olduğundan ==frekans iki ortamda da aynı==. v = λf olduğundan λ yarıya indiyse hız da yarıya indi: v₂ = v₁ / 2.", goster: ["ff"] }
          ]
        },
        {
          tip: "tablo",
          baslik: "Ortam değişince ne olur?",
          head: ["Büyüklük", "Değişir mi?", "Neden?"],
          rows: [["Frekans f", "Değişmez", "Kaynağın titreşimi belirler"], ["Periyot T", "Değişmez", "T = 1/f"], ["Hız v", "Değişir", "Hızı ortam belirler"], ["Dalga boyu λ", "Değişir", "λ = v/f ve f sabit"]],
          not: "Çizimde genliği sabit tuttuk. Sınavda böyle yaz: *The frequency stays the same when the wave enters another medium.*"
        },
        {
          tip: "ornek",
          baslik: "Işık camdan geçerken",
          durum: "Frekansı 5 × 10¹⁴ Hz olan ışık vakumdan cama giriyor. Vakumda c = 3 × 10⁸ m/s, camda v ≈ 2 × 10⁸ m/s. Dalga boyunu iki ortamda bul.",
          adimlar: ["Vakumda: λ = c ÷ f = 3 × 10⁸ ÷ 5 × 10¹⁴ = 6 × 10⁻⁷ m = 600 nm.", "Camda frekans değişmez: 5 × 10¹⁴ Hz.", "Camda: λ = v ÷ f = 2 × 10⁸ ÷ 5 × 10¹⁴ = 4 × 10⁻⁷ m = 400 nm.", "Işık camda yavaşladı, dalga boyu küçüldü."],
          sonuc: "==λ vakumda 600 nm, camda 400 nm;== frekans aynı kaldı."
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
            "Dalga hızını ortam belirler; frekansı kaynak belirler; λ = v / f.",
            "Aynı ortamda frekans artarsa dalga boyu küçülür, hız sabit kalır.",
            "Genlik ve sallama sertliği dalganın hızını değiştirmez.",
            "İpte v = √(T/μ): gerginlik artarsa hız artar, ip kalın (μ büyük) olursa hız azalır; gerginlik 4 katına çıkarsa hız 2 katına çıkar.",
            "Su dalgaları sığ suda yavaşlar; kıyıya yaklaşırken λ küçülür, f sabit kalır.",
            "Ses genellikle katıda en hızlı, gazda en yavaştır; sıcak havada daha hızlıdır (havada ≈ 340 m/s).",
            "Dalga başka ortama geçince f ve T değişmez; v ve λ değişir.",
            "Işık vakumda en hızlıdır (c ≈ 3 × 10⁸ m/s); camda yavaşlar."
          ]
        }
      ]
    }
  ],
  sorular: [
    {
      q: "You create periodic waves on a taut rope by shaking one end. If you double the frequency of shaking, which of the following happens?",
      opts: ["The wave speed doubles and the wavelength does not change.", "The wave speed does not change and the wavelength is halved.", "The wave speed is halved and the wavelength does not change.", "Both the wave speed and the wavelength are halved."],
      a: 1,
      why: "Hızı ipin kendisi (gerginlik, kalınlık) belirler; kaynağın frekansı hızı değiştirmez. v sabit, f iki katına çıkınca λ = v/f yarıya iner. A en çekici yanlış şıktır: \"daha hızlı sallarsam dalga da hızlı gider\" sanılır."
    },
    {
      q: "The wave speeds measured on the same rope at different tensions are given in the table. About what speed would the wave have when the tension is 25 N?",
      fig: { type: "table", head: ["Tension T (N)", "Wave speed v (m/s)"], rows: [["1", "10"], ["4", "20"], ["9", "30"]] },
      opts: ["50 m/s", "100 m/s", "250 m/s", "25 m/s"],
      a: 0,
      why: "Tabloda T 4 katına çıkınca v 2 katına çıkıyor: v, T'nin karekökü ile orantılı (v = 10√T). T = 25 N için v = 10 × 5 = 50 m/s. C'de hız gerginlikle doğru orantılı sanılmış (10 × 25)."
    },
    {
      q: "A water wave travels from a deep region into a shallow region. Its frequency is 2 Hz; the wavelength is 6 cm in the deep region and 3 cm in the shallow region. What is the wave speed in the shallow region?",
      opts: ["3 cm/s", "12 cm/s", "6 cm/s", "1.5 cm/s"],
      a: 2,
      why: "Frekans ortam değiştirince değişmez: f = 2 Hz. Sığ bölgede v = λf = 3 × 2 = 6 cm/s. B şıkkı derin bölgenin hızıdır (6 × 2 = 12); sığ bölge yavaştır, bu yüzden elenir."
    },
    {
      q: "A student sees lightning and hears the thunder 4 seconds later. The speed of sound in air is 340 m/s. About how far away is the lightning? (Ignore the travel time of light.)",
      opts: ["85 m", "340 m", "680 m", "1360 m"],
      a: 3,
      why: "Ölçülen süre sesin yolculuk süresidir: d = v × t = 340 × 4 = 1360 m. A'da hız süreye bölünmüş (340 ÷ 4), B'de süre hiç kullanılmamış."
    },
    {
      q: "As a periodic wave travels from one medium to another, which pair of the wave's characteristics cannot change?",
      opts: ["period and amplitude", "frequency and velocity", "period and frequency", "amplitude and wavelength"],
      a: 2,
      why: "Frekansı kaynak belirler, periyot T = 1/f olduğundan o da değişmez. Hız ve dalga boyu ortama göre değişir (v = λf). B en çekici yanlış şıktır: frekans değişmez ama hız ortamla değişir."
    }
  ]
};
